import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request) {
    // 사용자 인증 토큰 확인
    const cookieStore = cookies();
    const authToken = cookieStore.get('authorization');

    if (!authToken) {
        return NextResponse.json({ error: '인증 토큰이 없습니다.' }, { status: 401 });
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': authToken.value
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/mypage/recommended/products`, {
        method: 'GET',
        headers: headers,
    });

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
}