
export const KaKaohandleLogin = () => {
    const Rest_api_key = '0ffca9d57cc38a6049d41f6db8384776'; // REST API KEY
    const redirect_uri = 'http://localhost:3000/login/agreeMent'; // Redirect URI
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    
    window.location.href = kakaoURL;
  };
  