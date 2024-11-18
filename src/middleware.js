import { NextResponse } from 'next/server';

export function middleware(request) {
  // 쿠키에서 authorization 토큰 확인
  const authToken = request.cookies.get('authorization');
  
  // 현재 요청 URL의 pathname 가져오기
  const { pathname } = request.nextUrl;

  // 로그인이 필요한 페이지 목록
  const protectedRoutes = ['/mypage'];
  
  // 로그인한 사용자가 접근하면 안 되는 페이지 목록
  const authRoutes = ['/login'];

  // 보호된 라우트에 접근하려고 할 때 로그인이 안되어있으면 로그인 페이지로 리다이렉트
  if (protectedRoutes.includes(pathname) && !authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 이미 로그인된 사용자가 로그인 페이지에 접근하려고 할 때 홈으로 리다이렉트
  if (authRoutes.includes(pathname) && authToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// 미들웨어를 적용할 경로 설정
export const config = {
  matcher: ['/mypage', '/login']
}; 