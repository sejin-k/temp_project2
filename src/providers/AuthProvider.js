"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  // 서버에서 인증 상태 확인
  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/status');
      const data = await response.json();
      setIsLogin(data.isLogin);
      
      // 로컬 스토리지 업데이트로 다른 탭에 알림
      localStorage.setItem('auth_sync', data.timestamp);
    } catch (error) {
      console.error('인증 상태 확인 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  // 로그아웃 함수
  const logout = async () => {
    try {
      await fetch('/api/auth/status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'logout' }),
      });
      
      setIsLogin(false);
      // 로그아웃 시 로컬 스토리지 업데이트
      localStorage.setItem('auth_sync', `logout_${Date.now()}`);
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  // 초기 로드 및 주기적 체크
  useEffect(() => {
    checkAuthStatus();

    // 5분마다 인증 상태 확인 (선택사항)
    const interval = setInterval(checkAuthStatus, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  // 다른 탭과 동기화
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'auth_sync') {
        checkAuthStatus();
        console.log('🔄 인증 상태 동기화:', e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // 개발용 디버깅 도구
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const debugButton = document.createElement('button');
      // debugButton.innerHTML = '인증상태 새로고침';
      debugButton.style.position = 'fixed';
      debugButton.style.bottom = '20px';
      debugButton.style.right = '20px';
      debugButton.style.zIndex = '9999';
      debugButton.onclick = checkAuthStatus;
      document.body.appendChild(debugButton);

      return () => debugButton.remove();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      isLogin, 
      loading, 
      logout,
      checkAuthStatus 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext); 