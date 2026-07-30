import React from "react";
import type { NextPage } from "next";
import _SelectUnstyled from "@mui/base/SelectUnstyled";
// React 19 strict JSX types vs @mui/base v5
const SelectUnstyled: any = _SelectUnstyled;

import _OptionUnstyled from "@mui/base/OptionUnstyled";
const OptionUnstyled: any = _OptionUnstyled;

const Test: NextPage = () => {
  return (
    <div>
      <SelectUnstyled>
        <OptionUnstyled value="1">1</OptionUnstyled>
        <OptionUnstyled value="2">2</OptionUnstyled>
        <OptionUnstyled value="3">3</OptionUnstyled>
      </SelectUnstyled>
    </div>
  );
};

export default Test;
