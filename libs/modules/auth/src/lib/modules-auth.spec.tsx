import { render } from '@testing-library/react';

import ModulesAuth from './modules-auth';

describe('ModulesAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulesAuth />);
    expect(baseElement).toBeTruthy();
  });
});
