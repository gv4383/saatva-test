import React from 'react';

import { Mattress } from '../../types';
import SelectionBar from '../../components/Input/SelectionBar';

interface Props {
  handleMattressSelection: (name: string) => void;
  mattresses: Mattress[];
  selectedMattress: string;
}

const ChooseMattressPresenter = (props: Props) => {
  const { handleMattressSelection, mattresses, selectedMattress } = props;

  const selections = mattresses.map((mattress: Mattress) => mattress.name);

  return (
    <div>
      Choose Your Mattress
      <SelectionBar
        handleMattressSelection={handleMattressSelection}
        selectedMattress={selectedMattress}
        selections={selections}
      />
    </div>
  );
};

export default ChooseMattressPresenter;
