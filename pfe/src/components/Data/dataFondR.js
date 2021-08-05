const energySources = [
    { value: 'hydro', name: 'FR' }
  ];
  
  const countriesInfo = [{
    country: '2018',
    hydro: 7457864,
    
  }, {
    country: '2019',
    hydro: 9221868,
  }, {
    country: '2020',
    hydro: 10074998,
  }];
  
  export default {
    getEnergySources() {
      return energySources;
    },
    getCountriesInfo() {
      return countriesInfo;
    }
  };
  