import { render, screen } from '@testing-library/vue';
import Home from '.';

describe('<Home />', () => {
  it('should render correctly', () => {
    render(Home);

    expect(screen.getByText('Feat')).toBeInTheDocument();
  });
});
