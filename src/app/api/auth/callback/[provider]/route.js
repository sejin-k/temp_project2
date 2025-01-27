import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request, { params }) {
    const provider = params.provider;

    try {
        // 인가 코드 추출
        const searchParams = request.nextUrl.searchParams;
        const code = searchParams.get('code');

        if (!code) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        // 백엔드 서버로 인가 코드 전송
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/auth/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code,
                snsPlatform: provider
            }),
        });

        if (!response.ok) {
          throw new Error(`Failed to authenticate with ${provider}`);
        }

        const responseData = await response.json();
        // console.log('JWT 토큰 받아오기 ' + responseData.access_token);

        // JWT 토큰을 받아서 쿠키에 저장
        if (responseData.access_token) {
            // HttpOnly 쿠키에 JWT 토큰 저장
            const cookieStore = cookies();

            cookieStore.set('authorization', `Bearer ${responseData.access_token}`, {
                httpOnly: true,
                // secure: true, # TODO: 배포 후 쿠키 보안 설정 필요
                sameSite: 'lax',
                path: '/',
                ...(responseData.expiresIn && { maxAge: parseInt(responseData.expiresIn) })
            });

            // console.log("쿠키 저장 완료");

            // cookieStore.delete('authorization');
            // cookieStore.delete('next-auth.session-token	');
            // 홈페이지로 리다이렉트
            const redirectUrl = new URL('/', process.env.NEXT_PUBLIC_FRONTEEND_SERVER_URL);

            return NextResponse.redirect(redirectUrl);
        }

        return NextResponse.redirect(new URL('/login', process.env.NEXT_PUBLIC_FRONTEEND_SERVER_URL));

    } catch (error) {
        console.error(`${provider} 로그인 콜백 에러:`, error);
        return NextResponse.redirect(new URL('/login', process.env.NEXT_PUBLIC_FRONTEEND_SERVER_URL));
    }
} 