import React from 'react';

import { Mattress } from '../../types';
import SelectionBar from '../../components/Input/SelectionBar';

interface Props {
  mattresses: Mattress[];
}

const ChooseMattressPresenter = (props: Props) => {
  const { mattresses } = props;

  const selections = mattresses.map((mattress: Mattress) => mattress.name);

  return (
    <div>
      Choose Your Mattress
      <SelectionBar selections={selections} />
    </div>
  );
};

export default ChooseMattressPresenter;
