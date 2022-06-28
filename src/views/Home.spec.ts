import {render} from '@testing-library/vue'
import Home from "./Home.vue";

describe("Home", () => {
  it("should render correctly", () => {
    const wrapper = render(Home, {
      props: {
        msg: "test",
      },
    });

    expect(wrapper).toBeDefined();
  });
});
