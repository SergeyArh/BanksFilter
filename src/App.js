import './App.css';
import Checkbox from './Checkbox';
import { useState } from 'react';
import banks from './banks';
import Radiobox from './Radiobox';
import valuesOfEstate from './valuesOfEstate';
import valuesOfBuilding from './valuesOfBuilding';
import Offer from './Offer';
import offersList from './offers.json';
import Range from './Range';
import { getNameOfPopularValues } from './domain/getNameOfPopularValues';
import { filterBanks } from './domain/filterBanks';
import { filterCredit } from './domain/filterCredit';
import { filterFee } from './domain/filterFee';
import { filterEstate } from './domain/filterEstate';
import { filterHouse } from './domain/filterHouse';
import { compose } from './domain/compose';

function App() {

  const popularValuesForCredit = [3, 10, 15, 20];
  const popularValuesForFee = [10, 15, 30, 50, 80];

  const [valueCredit, setValueCredit] = useState(null);
  const [valueFee, setValueFee] = useState(null);
  const [valuesOfBanks, setValuesOfBanks] = useState([]);
  const [valueOfEstate, setValueOfEstate] = useState(null);
  const [valueOfHouse, setvalueOfHouse] = useState(null);

  let filterOffers = compose(
      filterBanks(valuesOfBanks), 
      filterCredit(valueCredit), 
      filterFee(valueFee), 
      filterEstate(valueOfEstate), 
      filterHouse(valueOfHouse)
      );
  const filterValues = offersList
    .filter(filterOffers)
    .sort((a, b) => a.rate - b.rate); 

  return ( 
    <div className='App'>
      <Range 
        title={'Срок кредита'} 
        min={2} 
        max={30} 
        unit={getNameOfPopularValues} 
        popularValues={popularValuesForCredit}
        value={valueCredit}
        setValue={setValueCredit}
        />
      <Range 
        title={'Первоначальный взнос'} 
        min={10} 
        max={80} 
        unit={'%'} 
        popularValues={popularValuesForFee}
        value={valueFee}
        setValue={setValueFee}
      />
      <Checkbox 
        title={'Банк'}
        banks={banks}
        values={valuesOfBanks}
        setValue={setValuesOfBanks}
      />
      <Radiobox 
        title={'Тип объекта'}
        values={valuesOfEstate}
        value={valueOfEstate}
        setValue={setValueOfEstate}
        name={'estate'}
      />
      <Radiobox 
        title={'Тип жилья'}
        values={valuesOfBuilding}
        value={valueOfHouse}
        setValue={setvalueOfHouse}
        name={'building'}
        />
  {
    filterValues.map(offer => (
      <Offer 
        data={offer} 
        banks={banks} 
        valuesOfEstate={valuesOfEstate} 
        valuesOfBuilding={valuesOfBuilding}
      />
    ))
  }
    </div>
  );
}

export default App;