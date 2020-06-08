import React from "react";
import OPTION from "react-select";
import { CURRENCIES } from "../../utils/constants/currencies";

import "./styles.scss";

const Select = ({onChange}) => {

  onChange = onChange ? onChange : () => { };

  return (
    <>
      <OPTION options={CURRENCIES} defaultValue={CURRENCIES[29]} onChange={e => onChange(e)} className="format-select float-right mt-3 mr-2" />
    </>
  );
};

export default Select;
