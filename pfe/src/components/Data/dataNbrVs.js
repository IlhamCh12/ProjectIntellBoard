const energySources = [
    { value: 'page1', name: 'Page n°1' },
    { value: 'page2', name: 'Page n°2' },
    { value: 'page3', name: 'Page n°3' }
  ];
  
  const countriesInfo = [{
    country: 'Janvier',
    page1: 324,
    page2: 210,
    page3: 182
  }, {
    country: 'Février',
    page1: 230,
    page2: 194,
    page3: 155.1
  }, {
    country: 'Mars',
    page1: 182,
    page2: 142,
    page3: 189
  }, {
    country: 'Avril',
    page1: 160,
    page2: 209,
    page3: 164.9
  }, {
    country: 'Mai',
    page1: 280,
    page2: 270,
    page3: 230.9
  }, {
    country: 'Juin',
    page1: 176,
    page2: 280,
    page3: 178.5
  }, {
    country: 'Juillet',
    page1: 199,
    page2: 265,
    page3: 150
  }, {
    country: 'Aout',
    page1: 206,
    page2: 174,
    page3: 237
  }, {
    country: 'Septembre',
    page1: 125,
    page2: 272,
    page3: 177.3
  }, {
    country: 'Octobre',
    page1: 177.3,
    page2: 222,
    page3: 241,
  }, {
    country: 'Novembre',
    page1: 220,
    page2: 170,
    page3: 197.3
  }, {
    country: 'Décembre',
    page1: 310,
    page2: 133,
    page3: 270.3
  }];
  
  export default {
    getEnergySources() {
      return energySources;
    },
    getCountriesInfo() {
      return countriesInfo;
    }
  };
  