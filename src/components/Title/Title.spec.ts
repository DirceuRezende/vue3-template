import { render, screen } from '@testing-library/vue';
import Title from '.';

describe('Title', () => {
  it('should render correctly', () => {
    const wrapper = render(Title, {
      props: {
        value: 'test'
      }
    });

    expect(wrapper).toBeDefined();
    expect(screen.findByText('test'));
  });
});
