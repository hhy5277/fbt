/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<b280b990fbf04375491d612adb94636d>>
 *
 * Generated by CLDRGenScript
 *
 * @flow
 */
const IntlVariations = require('IntlVariations');
const IntlCLDRNumberType34 = {
  getVariation(n: number): number {
    if (n === 0) {
      return IntlVariations.NUMBER_ZERO;
    } else if (n === 1) {
      return IntlVariations.NUMBER_ONE;
    } else if (n === 2) {
      return IntlVariations.NUMBER_TWO;
    } else if (n % 100 >= 3 && n % 100 <= 10) {
      return IntlVariations.NUMBER_FEW;
    } else if (n % 100 >= 11 && n % 100 <= 99) {
      return IntlVariations.NUMBER_MANY;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType34;
