interface IInterface {
  onClick: (cb: () => void) => void;
  doRender: () => void;
}

export const Interface: IInterface = {
  onClick: () => {},
  doRender: () => {},
};
