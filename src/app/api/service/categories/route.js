import { NextResponse } from 'next/server';

export async function GET(request) {
    const platformId = request.nextUrl.searchParams.get('platformId');

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/service/product-recommend/category?platformId=${platformId}`,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    if (!response.ok) {
        throw new Error("카테고리 데이터를 불러오는데 실패했습니다");
    }

    const data = await response.json();

    return NextResponse.json(data);
}