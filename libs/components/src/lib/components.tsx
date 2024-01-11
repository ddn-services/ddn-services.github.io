import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ComponentsProps {}

const StyledComponents = styled.div`
  color: pink;
`;

export function Components(props: ComponentsProps) {
  return (
    <StyledComponents>
      <h1>Welcome to Components!</h1>

      <ul>
        <li>
          <Link to="/">libs/components/src/lib/components root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the libs/components/src/lib/components root route.</div>} />
    </StyledComponents>
  );
}

export default Components;
