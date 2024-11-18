import { NextResponse } from 'next/server';

const PROVIDER_CONFIG = {
  kakao: {
    authUrl: 'https://kauth.kakao.com/oauth/authorize',
    clientId: process.env.KAKAO_CLIENT_ID,
  },
  naver: {
    authUrl: 'https://nid.naver.com/oauth2.0/authorize',
    clientId: process.env.NAVER_CLIENT_ID,
  },
  google: {
    authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    clientId: process.env.GOOGLE_CLIENT_ID,
    scope: 'email profile',
  }
};

export async function GET(request, { params }) {
  const provider = params.provider;
  const config = PROVIDER_CONFIG[provider];

  if (!config) {
    return NextResponse.json({ error: 'Invalid provider' }, { status: 400 });
  }

  const redirectUri = `${process.env.NEXT_PUBLIC_FRONTEEND_SERVER_URL}/api/auth/callback/${provider}`;

  const searchParams = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    ...(config.scope && { scope: config.scope }),
  });

  const url = `${config.authUrl}?${searchParams.toString()}`;
  
  return NextResponse.json({ url });
} 