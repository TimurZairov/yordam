import {TextStyle} from 'react-native';

const fontSize = {
  es: 10,
  s: 12,
  default: 14,
  md: 16,
  lg: 20,
  xlg: 24,
  xxlg: 30,
};

const fontWeight: {[key: string]: TextStyle['fontWeight']} = {
  full: '900',
  semi: '600',
  bold: 'bold',
  normal: 'normal',
  thin: '400',
  light: '300',
};

const fontFamily = {
  bold: 'OpenSans-Bold',
  exBold: 'OpenSans-ExtraBold',
  light: 'OpenSans-Light',
  md: 'OpenSans-Medium',
  regular: 'OpenSans-Regular',
  semiBold: 'OpenSans-SemiBold',
};

export default {fontSize, fontWeight, fontFamily};
