import React from "react";
import type { NextPage } from "next";
import SelectUnstyled from "@mui/base/SelectUnstyled";

import OptionUnstyled from "@mui/base/OptionUnstyled";

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
