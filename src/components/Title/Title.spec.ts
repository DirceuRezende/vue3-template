import { render, screen } from '@testing-library/vue';
import Title from '.';

describe('Title', () => {
  it('should render correctly', () => {
    render(Title, {
      props: {
        value: 'Title'
      }
    });

    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
