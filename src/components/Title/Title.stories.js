import Title from '.';

export default {
  title: 'Title',
  component: Title,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Title },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<Title :value="text" />'
});

export const Default = Template.bind({});
Default.args = {
  text: 'You did it!'
};
