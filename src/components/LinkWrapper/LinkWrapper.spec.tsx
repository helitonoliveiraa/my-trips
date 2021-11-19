import { render, screen } from '@testing-library/react';
import { LinkWrapper } from './index';

describe('', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="my-link">Anything</LinkWrapper>);

    const link = screen.getByRole('link', {
      href: 'my-link',
    });
    const children = screen.getByText(/anything/i);

    expect(link).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
