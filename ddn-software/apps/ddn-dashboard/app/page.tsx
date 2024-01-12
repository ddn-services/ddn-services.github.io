'use client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthRouter, ROUTE_STRING } from '@ddnsoftware/common';
// import ModulesAuth from '../../../../libs/modules/auth/src/lib/modules-auth';
import { ModulesAuth } from '@ddnsoftware/modules';
export default async function IndexPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRouter />}></Route>
        <Route path={ROUTE_STRING.LOGIN_PAGE} element={<ModulesAuth />} />
      </Routes>
    </BrowserRouter>
  );
}
