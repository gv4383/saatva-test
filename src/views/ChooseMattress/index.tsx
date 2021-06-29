import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ChooseMattressPresenter from './presenter';
import { Mattress } from '../../types';

const ChooseMattress = () => {
  const [mattresses, setMattresses] = useState([] as Mattress[]);

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

  return <ChooseMattressPresenter mattresses={mattresses} />;
};

export default ChooseMattress;
