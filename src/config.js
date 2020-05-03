var utils_1 = require("./utils");
"handler" | "callback";
signature: T;
exports.features = [
    {
        id: utils_1.generateUniqueId(),
        name: "Feature1",
    },
    {
        id: utils_1.generateUniqueId(),
        name: "Feature2",
    },
];
exports.channels = [
    {
        id: utils_1.generateUniqueId(),
        name: "onClick",
        type: "handler",
        signature: "{ name: string }",
    },
    {
        id: utils_1.generateUniqueId(),
        name: "doRender",
        type: "callback",
        signature: "{ name: string }",
    },
];
exports.links = [
    {
        id: utils_1.generateUniqueId(),
        handlerId: exports.channels[0].id,
        callbackId: exports.channels[1].id,
    },
];
exports.featureToChannelRelations = [
    [exports.features[0].id, exports.channels[0].id],
    [exports.features[1].id, exports.channels[1].id],
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
