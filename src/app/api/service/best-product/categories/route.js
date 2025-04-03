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
            cache: 'no-store',
        }
    );

    const data = await response.json();

    return NextResponse.json(data);
}