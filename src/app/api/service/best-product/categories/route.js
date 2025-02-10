import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const platformId = searchParams.get('platformId');

    // 오픈 마켓 별 카테고리 정보 가져오기
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/service/best-product/category?platformId=${platformId}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    // 응답 실패 시 에러 발생
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }

    const data = await response.json();

    return NextResponse.json(data);
}