/* eslint-disable prettier/prettier */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const {getDefaultConfig, mergeConfig} = require('metro-config');
const blacklist = require('metro-config/src/defaults/exclusionList');

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// };

module.exports = (async () => {
  const awsPackageIgnore = {
    resolver: {
      blacklistRE: blacklist([/amplify\/#current-cloud-backend\/.*/]),
    },
  };

  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  const svgTransformer = {
    transformer: {
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };

  return mergeConfig(awsPackageIgnore, svgTransformer);
})();

// module.exports = {
//   resolver: {
//     blacklistRE: blacklist([/amplify\/#current-cloud-backend\/.*/])},
// };
