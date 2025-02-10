import { NextResponse } from 'next/server';

export async function GET(request) {
    const queryString = new URLSearchParams(request.nextUrl.searchParams).toString();

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/service/keyword-discovery/keyword?${queryString}`,
        // `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/test/test1?${queryString}`,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    if (!response.ok) {
        throw new Error("키워드 조회에 실패했습니다");
    }

    const data = await response.json();

    return NextResponse.json(data);
}