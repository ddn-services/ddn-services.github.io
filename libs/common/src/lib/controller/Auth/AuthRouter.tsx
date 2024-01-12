import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { ROUTE_STRING, setToken } from '@ddnsoftware/common';
import { Outlet } from 'react-router-dom';
const AuthRouter = () => {
  const searchParams = useSearchParams();

  const localToken = localStorage.getItem('access_token') || sessionStorage.getItem('access_token') || searchParams.get('access_token');

  useEffect(() => {
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');

    if (accessToken) {
      setToken(accessToken);
      localStorage.setItem('refresh_token', refreshToken ?? '');
    }
  }, [searchParams.get('access_token'), searchParams.get('refresh_token')]);
  if (!localToken) {
    return <Link href={ROUTE_STRING.LOGIN_PAGE} />;
  }
  return <Outlet />;
};
export default AuthRouter;
