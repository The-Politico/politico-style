import scheme from './colorScheme';

import brand from './schemes/brand.csv';
import base from './schemes/base.csv';

import party from './schemes/elections/party.csv';
import gop from './schemes/elections/gop.csv';
import dem from './schemes/elections/dem.csv';
import demgop from './schemes/elections/dem-gop.csv';

import four from './schemes/qualitative/four.csv';
import six from './schemes/qualitative/six.csv';
import pairs from './schemes/qualitative/pairs.csv';
import maps from './schemes/qualitative/maps.csv';

import moneyFoam from './schemes/sequential/money-foam.csv';
import redYellow from './schemes/sequential/red-yellow.csv';
import sangriaPeach from './schemes/sequential/sangria-peach.csv';

import mossSaphire from './schemes/diverging/moss-sapphire.csv';
import tealDirt from './schemes/diverging/teal-dirt.csv';

export default {
  brand: scheme(brand),
  base: scheme(base),
  elections: {
    party: scheme(party),
    gop: scheme(gop),
    dem: scheme(dem),
    demgop: scheme(demgop),
  },
  qualitative: {
    four: scheme(four),
    six: scheme(six),
    pairs: scheme(pairs),
    maps: scheme(maps),
  },
  sequential: {
    moneyFoam: scheme(moneyFoam),
    redYellow: scheme(redYellow),
    sangriaPeach: scheme(sangriaPeach),
  },
  diverging: {
    mossSapphire: scheme(mossSaphire),
    tealDirt: scheme(tealDirt),
  },
};
