import React from "react";
import OPTION from "react-select";
import { CURRENCIES } from "../../utils/constants/currencies";

const Select = ({onChange}) => {

  onChange = onChange ? onChange : () => { };

  return (
    <>
      <OPTION options={CURRENCIES} defaultValue={CURRENCIES[29]} onChange={e => onChange(e)} />
    </>
  );
};

export default Select;
