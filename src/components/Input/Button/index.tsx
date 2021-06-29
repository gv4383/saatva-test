import React from 'react';

import './styles.scss';

interface Props {
  isSelectButton?: boolean;
  onClick: () => void;
  text: string;
}

const Button = (props: Props) => {
  const { isSelectButton, onClick, text } = props;

  const getClassNames = () => {
    const baseClassName = 'button-container';
    const normalClassName = 'normal-button';
    const selectClassName = 'select-button';

    if (isSelectButton) {
      return `${baseClassName} ${selectClassName}`;
    }

    return `${baseClassName} ${normalClassName}`;
  };

  return (
    <button className={getClassNames()} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
