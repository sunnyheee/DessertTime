const NaverhandleLogin = () => {
  const clientId = '2m_YFzYttOyl2swn0rPE' // 네이버 애플리케이션의 Client ID
  const redirectUri = 'http://localhost:3000/login/agreeMent' // 네이버 로그인 후 리디렉션될 URI
  const state = 'false'
  const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`

  if (typeof window !== 'undefined') {
    window.location.href = naverURL
  }
}

export default NaverhandleLogin
