import React from 'react';

import './styles.scss';

interface Props {
  cartCount: number;
}

const Header = (props: Props) => {
  const { cartCount } = props;

  return (
    <header className="header-container">
      <div className="header-sub-container">
        <div className="header-logo">saatva</div>
        <div className="header-cart">{cartCount}</div>
      </div>
    </header>
  );
};

export default Header;
