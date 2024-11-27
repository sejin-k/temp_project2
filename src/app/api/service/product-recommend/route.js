import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
    const requestJson = await request.json();
    
    // 쿠키에서 인증 토큰 가져오기
    const cookieStore = cookies();
    const authToken = cookieStore.get('authorization');

    if (!authToken) {
        return NextResponse.json({ error: '인증 토큰이 없습니다.' }, { status: 401 });
    }

    // 요청 헤더에 인증 토큰 추가
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': authToken.value
    };

    console.log(JSON.stringify(requestJson));

    // 상품 추천 요청 API 호출
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/service/product-recommend/product`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestJson),
    });

    // 응답 실패 시 에러 발생
    if (!response.ok) {
        throw new Error('Failed to recommend products');
    }

    // 응답 데이터 반환
    const data = await response.json();

    return NextResponse.json(data);
}