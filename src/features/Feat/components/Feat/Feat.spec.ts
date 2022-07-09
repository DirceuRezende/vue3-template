import { render, screen } from '@testing-library/vue';
import Feat from '.';

describe('<Feat />', () => {
  it('should render correctly', () => {
    render(Feat);

    expect(screen.getByText('Feat')).toBeInTheDocument();
  });
});
