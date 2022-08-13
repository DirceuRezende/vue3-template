import Feat from '.';

export default {
  title: 'Feat',
  component: Feat,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Feat },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<Feat />'
});

export const Default = Template.bind({});
Default.args = {};
