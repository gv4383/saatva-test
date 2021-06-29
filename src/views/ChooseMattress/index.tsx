import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ChooseMattressPresenter from './presenter';
import { Mattresses } from '../../types';

const ChooseMattress = () => {
  const [mattresses, setMattresses] = useState([] as Mattresses[]);

  useEffect(() => {
    axios
      .get('./mattresses.json')
      .then(({ data }) => {
        const mattressesArr: Mattresses[] = Object.values(data.mattresses);
        setMattresses(mattressesArr);
      }).catch(err => {
        console.log(err.message);
      });
  }, []);

  return <ChooseMattressPresenter mattresses={mattresses} />;
};

export default ChooseMattress;
