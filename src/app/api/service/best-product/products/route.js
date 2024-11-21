import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        // URL에서 쿼리 파라미터 추출
        const { searchParams } = new URL(request.url);
        const platformId = searchParams.get('platformId');
        const categoryDepth1Id = searchParams.get('categoryDepth1Id');
        const categoryDepth2Id = searchParams.get('categoryDepth2Id');

        // 필수 파라미터 검증
        if (!platformId || !categoryDepth1Id || !categoryDepth2Id) {
            return NextResponse.json(
                { error: '필수 파라미터가 누락되었습니다.' },
                { status: 400 }
            );
        }

        // 베스트 상품 조회 API 호출
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/service/best-product/product?platformId=${platformId}&categoryDepth1Id=${categoryDepth1Id}&categoryDepth2Id=${categoryDepth2Id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        // 응답 실패 시 에러 발생
        if (!response.ok) {
            throw new Error('Failed to fetch products from backend');
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('상품 조회 중 오류 발생:', error);
        return NextResponse.json(
            { error: '상품 조회 중 오류가 발생했습니다.' },
            { status: 500 }
        );
    }
}