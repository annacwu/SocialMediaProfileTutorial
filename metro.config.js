const { getDefaultConfig } = require('@expo/metro-config');
const { 
  wrapWithReanimatedMetroConfig 
} = require('react-native-reanimated/metro-config');

const config = getDefaultConfig(__dirname);
config.resolver.sourceExts.push('cjs');

module.exports = wrapWithReanimatedMetroConfig(config);