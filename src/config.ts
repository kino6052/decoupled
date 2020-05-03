interface IChannel<T> {
  id: string;
  name: string;
  signature: T;
}

interface ILink {
  external: string;
  internal: string;
}

interface IBox {
  id: string;
  name: string;
  channels: IChannel<unknown>[];
  links: ILink[];
}

// export const features: IBox[] = [
//   {
//     id: IDS.FEATURE_1,
//     name: "Feature1",
//     channels: [
//       {
//         id: IDS.FEATURE_1_CHANNEL_ON_CLICK,
//         name: "onClick",
//         signature: "{ name: test1 }",
//       },
//     ],
//     links: [],
//   },
//   {
//     id: IDS.FEATURE_2,
//     name: "Feature2",
//     channels: [
//       {
//         id: IDS.FEATURE_2_CHANNEL_DO_RENDER,
//         name: "doRender",
//         signature: "{ name: test }",
//       },
//     ],
//     links: [
//       {
//         internal: IDS.FEATURE_1_CHANNEL_ON_CLICK,
//         external: IDS.FEATURE_2_CHANNEL_DO_RENDER,
//       },
//     ],
//   },
// ];
