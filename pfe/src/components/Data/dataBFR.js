const energySources = [
    { value: 'hydro', name: 'BFR' }
  ];
  
  const countriesInfo = [{
    country: '2018',
    hydro: 1781673,
    
  }, {
    country: '2019',
    hydro: 1236303,
  }, {
    country: '2020',
    hydro: 742023,
  }];
  
  export default {
    getEnergySources() {
      return energySources;
    },
    getCountriesInfo() {
      return countriesInfo;
    }
  };
  