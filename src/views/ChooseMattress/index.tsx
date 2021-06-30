import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ChooseMattressPresenter from './presenter';
import classicPicture from '../../assets/classic-carousel.jpeg';
import loomPicture from '../../assets/loom-carousel.jpeg';
import zenPicture from '../../assets/zen-carousel.jpeg';
import { MATTRESS_NAMES } from '../../constants';
import { Mattress } from '../../types';

const ChooseMattress = () => {
  const [mattresses, setMattresses] = useState([] as Mattress[]);
  const [selectedMattress, setSelectedMattress] = useState('Saatva Classic');
  const selections = mattresses.map((mattress: Mattress) => mattress.name);
  const mattressLabel = `${selectedMattress} Mattress`;

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

  const getSelectedMattressPicture = () => {
    switch (selectedMattress) {
      case MATTRESS_NAMES.CLASSIC:
        return classicPicture;
      case MATTRESS_NAMES.LOOM:
        return loomPicture;
      case MATTRESS_NAMES.ZEN:
        return zenPicture;
      default:
        return classicPicture;
    }
  };

  const getMattressPrice = () => {
    const rawMattressPrice = mattresses.find(
      (mattress: Mattress) => mattress.name === selectedMattress,
    )?.price;
    const formattedMattressPrice = rawMattressPrice
      ?.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return `$${formattedMattressPrice}`;
  };

  const handleMattressSelection = (name: string) => {
    setSelectedMattress(name);
  };

  return (
    <ChooseMattressPresenter
      getMattressPrice={getMattressPrice}
      getSelectedMattressPicture={getSelectedMattressPicture}
      handleMattressSelection={handleMattressSelection}
      mattressLabel={mattressLabel}
      selectedMattress={selectedMattress}
      selections={selections}
    />
  );
};

export default ChooseMattress;
