import { features, channels, links, featureToChannelRelations } from "./config";

const InterfaceContent1 = `
export const onClick = (input: { name: string }) => { /** TODO: Implement * /}
`;

const InterfaceContent2 = `
export const onRender = (cb: (input: { name: string }) => void) => { /** TODO: Implement * /}
`;

it("should", () => {
  // expect(
  //   // generateConfig(features, channels, links, featureToChannelRelations)
  // ).toEqual([
  //   { directory: features[0].name, interface: InterfaceContent1, feature: "" },
  //   { directory: features[1].name, interface: InterfaceContent2, feature: "" },
  // ]);
});
