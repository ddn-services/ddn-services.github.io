import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ModulesAuthProps {}

const StyledModulesAuth = styled.div`
  color: pink;
`;

export function ModulesAuth(props: ModulesAuthProps) {
  return (
    <StyledModulesAuth>
      <h1>Welcome to ModulesAuth!</h1>

      <ul>
        <li>
          <Link to="/">libs/modules/auth/src/lib/modules-auth root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the libs/modules/auth/src/lib/modules-auth root route.</div>} />
    </StyledModulesAuth>
  );
}

export default ModulesAuth;
