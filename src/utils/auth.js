'use server';
import { cookies } from 'next/headers';

export const decodeToken = (token) => {
  try {
    // JWT는 'header.payload.signature' 형식으로 구성되어 있습니다.
    const base64Payload = token.split('.')[1];
    // base64를 디코드하여 JSON 문자열로 변환
    const payload = atob(base64Payload);
    // JSON 파싱
    return JSON.parse(payload);
  } catch (error) {
    console.error('토큰 디코드 실패:', error);
    return null;
  }
};

export const getUserInfoFromToken = () => {
  try {
    const token = cookies().get('authorization')?.value;
    if (!token) return null;
    
    const decodedToken = decodeToken(token);
    
    return decodedToken;
  } catch (error) {
    console.error('사용자 정보 가져오기 실패:', error);
    return null;
  }
}; 