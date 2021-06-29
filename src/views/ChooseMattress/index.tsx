import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ChooseMattressPresenter from './presenter';
import { Mattress } from '../../types';

const ChooseMattress = () => {
  const [mattresses, setMattresses] = useState([] as Mattress[]);
  const [selectedMattress, setSelectedMattress] = useState('');

  useEffect(() => {
    axios
      .get('./mattresses.json')
      .then(({ data }) => {
        const mattressesArr: Mattress[] = Object.values(data.mattresses);
        setMattresses(mattressesArr);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  const handleMattressSelection = (name: string) => {
    setSelectedMattress(name);
  };

  return (
    <ChooseMattressPresenter
      handleMattressSelection={handleMattressSelection}
      mattresses={mattresses}
      selectedMattress={selectedMattress}
    />
  );
};

export default ChooseMattress;
