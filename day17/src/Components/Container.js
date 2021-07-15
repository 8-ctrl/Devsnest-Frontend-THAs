import React from 'react';
// import '..style.css';
import BarTab from './CalTab';

function Container(props) {
  return (
    <div className="Container">
      
      <BarTab h1="Pizza" h3="you have consumed 56 cals today"/>
      <BarTab h1="Burger" h3="you have consumed 69 cals today"/>
      <BarTab h1="Coke" h3="you have consumed 500 cals today"/>
      <BarTab h1="Browne" h3="you have consumed 180 cals today"/>
      <BarTab h1="Lassania" h3="you have consumed 200 cals today"/>
      <BarTab h1="Pani Puri" h3="you have consumed 10 cals today"/>
          </div>
  );
}

export default Container;
