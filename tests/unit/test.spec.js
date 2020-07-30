import { shallowMount } from "@vue/test-utils";
import Home from '../../src/components/HelloWorld.vue'
const { name } = Home;

describe("Home", () => {
  let index;
  beforeEach(() => {
    index = shallowMount(Home);
  });

  it("have name", () => {
    expect(name).toBe("HelloWorld");
  });

  it("renders form input", () => {
    expect(index.html()).toContain(`input`);
    expect(index.html()).toContain('button');
  });

  it("has script", () => {
    expect(typeof Home.data).toBe(`function`);
    expect(typeof Home.methods).toBe(`object`);
  });

  it("return", () => {
    expect(Home.data().word).toBe('');
    expect(Home.data().capitalizedWord).toBe('');
    expect(Home.data().randomizeWord).toBe('');
  });
});