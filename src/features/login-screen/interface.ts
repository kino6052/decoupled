interface IInitializer {
  onClick: (cb: () => void) => void;
  doRender: () => void;
}

export const Initializer: IInitializer = {
  onClick: () => {},
  doRender: () => {},
};
