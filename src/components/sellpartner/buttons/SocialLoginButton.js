"use client";

const SocialLoginButton = ({ provider, children }) => {
  const handleSocialLogin = async () => {
    try {
      const response = await fetch(`/api/auth/${provider}`);
      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('소셜 로그인 에러:', error);
    }
  };

  return (
    <button 
      onClick={handleSocialLogin}
      className={`login__button ${provider}__button`}
    >
      <div className="button__inner">
        <span className="button__text">{children}</span>
      </div>
    </button>
  );
};

export default SocialLoginButton; 