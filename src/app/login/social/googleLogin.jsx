const GooglehandleLogin = () => {
  const clientId =
    '761411170552-h4qb6vstaa4qp0lo94vlr7ip6qdd4b7u.apps.googleusercontent.com' // Google 클라이언트 ID
  const redirectUri = 'http://localhost:3000/login/agreeMent' // Google 로그인 후 리디렉션될 URI
  const scope =
    'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email' // 요청할 권한
  const state = 'false'
  const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`

  window.location.href = googleURL
}

export default GooglehandleLogin
