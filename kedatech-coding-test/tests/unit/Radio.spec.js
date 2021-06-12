import Vue from "vue";
import Radio from "../../src/components/Radio.vue";

function getRenderedProps(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({ propsData: propsData }).$mount();
  return vm.$el.textContent;
}

describe("Radio", () => {
  it("renders correctly with different props", () => {
    expect(
      getRenderedProps(Radio, {
        value1: "Hello",
      })
    ).toMatch("Hello");
    expect(
      getRenderedProps(Radio, {
        value2: "World",
      })
    ).toMatch("World");
    expect(
      getRenderedProps(Radio, {
        value3: "Morning",
      })
    ).toMatch("Morning");
  });
});
