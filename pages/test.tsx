import React from "react";
import type { NextPage } from "next";
import { LayoutGroup, motion } from "framer-motion";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeGrid as Grid } from "react-window";

const Test: NextPage = () => {
  return (
    <div>
      <div className="max-w-7xl m-auto mt-28 h-screen">
        <AutoSizer>
          {({ height, width }) => (
            <Grid
              columnCount={4}
              columnWidth={width / 4}
              height={height}
              rowCount={2}
              rowHeight={288}
              width={width}
            >
              {({ columnIndex, rowIndex, style: { left, top, ...style } }) => (
                <motion.div
                  style={style}
                  className="p-5"
                  initial={{ left: 0, top: 0 }}
                  animate={{ left, top }}
                  transition={{ duration: 1 }} 
                >
                  <div className="bg-indigo-400 h-full w-full" />
                </motion.div>
              )}
            </Grid>
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default Test;
