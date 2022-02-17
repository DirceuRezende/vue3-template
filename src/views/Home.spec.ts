import { mount } from "@vue/test-utils";
import Home from "./Home.vue";

describe("Home", () => {
  it("should render correctly", () => {
    const wrapper = mount(Home, {
      props: {
        msg: "test",
      },
    });

    expect(wrapper).toBeDefined();
  });
});
