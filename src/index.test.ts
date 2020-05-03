import { test as t, parseInterface } from "./index";

it.skip("should parse interface", () => {
  parseInterface(
    `interface IInitializer {
      onClick: (cb: () => void) => void;
      doRender: () => void;
    }
    
    export const Initializer: IInitializer = {
      onClick: () => {},
      doRender: () => {},
    };`
  );
});

it("should", () => {
  t();
});
