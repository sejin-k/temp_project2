import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const categoryIds = searchParams.get('categoryIds');
    const platformId = searchParams.get('platformId');

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/service/category-recommend/category?categoryIds=${categoryIds}&platformId=${platformId}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    if (!response.ok) {
        throw new Error("카테고리 추천 조회에 실패했습니다");
    }

    const data = await response.json();
    return NextResponse.json(data);
}