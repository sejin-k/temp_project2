import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const authToken = cookieStore.get('authorization');
  
  return Response.json({
    isLogin: !!authToken,
    timestamp: new Date().toISOString()
  });
}

export async function POST(request) {
  const cookieStore = cookies();
  const { action } = await request.json();
  
  if (action === 'logout') {
    // 로그아웃 처리
    cookieStore.delete('authorization');
    return Response.json({ 
      success: true, 
      message: 'Logged out successfully' 
    });
  }
  
  return Response.json({ success: false });
} 