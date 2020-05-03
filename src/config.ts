import { generateUniqueId } from "./utils";

interface IChannel<T> {
  id: string;
  name: string;
  type: "handler" | "callback";
  signature: T;
}

interface IBox {
  id: string;
  name: string;
  channels: IChannel<unknown>[];
  links: ILink[];
}

interface IFeature {
  id: string;
  name: string;
}

interface ILink {
  id: string;
  handlerId: string;
  callbackId: string;
}

export const features: IFeature[] = [
  {
    id: generateUniqueId(),
    name: "Feature1",
  },
  {
    id: generateUniqueId(),
    name: "Feature2",
  },
];

export const channels: IChannel<unknown>[] = [
  {
    id: generateUniqueId(),
    name: "onClick",
    type: "handler",
    signature: "{ name: string }",
  },
  {
    id: generateUniqueId(),
    name: "doRender",
    type: "callback",
    signature: "{ name: string }",
  },
];

export const links: ILink[] = [
  {
    id: generateUniqueId(),
    handlerId: channels[0].id,
    callbackId: channels[1].id,
  },
];

export const featureToChannelRelations = [
  [features[0].id, channels[0].id],
  [features[1].id, channels[1].id],
];

/**
 * feature1
 *
 * interface
 *   export const onClick = (cb: (input: {}) => void) => {
 *     // TODO: Implement
 *   }
 */

/**
 * feature2
 *
 * interface
 *   export const doRender = (input: {}) => {
 *     // TODO: Implement
 *   }
 *
 * feature
 *    import onClick from '../feature1/interface';
 *
 *    onClick(doRender);
 *
 */

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
