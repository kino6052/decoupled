interface IInitializer {
  onInitialize: (cb: () => void) => void;
  doRender: () => void;
}

export const Initializer: IInitializer = {
  onInitialize: () => {},
  doRender: () => {},
};
