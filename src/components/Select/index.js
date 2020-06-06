import React from "react";
import OPTION from "react-select";
import { CURRENCIES } from "../../utils/constants/currencies";

const Select = ({onChange}) => {

  onChange = onChange ? onChange : () => { };

  return (
    <>
      <OPTION options={CURRENCIES} onChange={e => onChange(e)} />
    </>
  );
};

export default Select;
