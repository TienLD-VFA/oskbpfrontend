/**
 * Memory.jsx
 * BP_PREMIUM_WEBVIEW
 * Created by tienld@vitalify.asia on 26/07/2022
 * Copyright (c) 2022 OMRON HEALTHCARE Co.,Ltd. All rights reserved.
 */
import React, { useMemo } from "react";
import { Progressbar } from "framework7-react";
import PropTypes from "prop-types";
import "./Memory.scss";

const Memory = ({ x }) => {
  /* A constant variable that is used to set the color of the progressbar. */
  const COLORS = {
    active: "#005EB8",
    completed: "#335A75",
    default: "#C3CACF",
  };

  /* Used to compare the value of the progressbar. */
  const COMPARE_STEPS = {
    COMPARE_1: 0,
    COMPARE_2: 2,
    COMPARE_3: 4,
    COMPARE_4: 6,
    COMPARE_5: 7,
  };

  /* Used to represent the percentage of the progressbar increasing gradually. */
  const PERCENTAGE_OF_PROGREESBAR = {
    STEP_1: 0.15,
    STEP_2: 2.15,
    STEP_3: 4.3,
    STEP_4: 6.3,
    STEP_5: 8.5,
    STEP_6: 9.5,
    STEP_7: 11,
    STEP_8: 12.5,
  };

  const TOTAL_STEPS = 8;
  const REAL_X = useMemo(() => x + 1, [x]);
  const PERCENT = useMemo(() => {
    const realX = REAL_X;
    const value = PERCENTAGE_OF_PROGREESBAR[`STEP_${realX}`];
    const result = 100 * (TOTAL_STEPS / 100) * value;
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [REAL_X]);
  const LIST_BREAKPOINTS = useMemo(() => Object.values(COMPARE_STEPS), []);
  const renderBreakpoints = () => {
    return LIST_BREAKPOINTS.map((_, index) => {
      const isLast = index >= LIST_BREAKPOINTS.length - 2;
      const isStep3 = index === LIST_BREAKPOINTS.length - 3;
      if (isLast) {
        return null;
      } else {
        const nextBreakPointValue = LIST_BREAKPOINTS[index + 1];
        const currentBreakPointValue = LIST_BREAKPOINTS[index];
        const isActive = x >= currentBreakPointValue;
        const isComplete = !isStep3 && x >= nextBreakPointValue;
        const realIndex = index + 1;

        return (
          <div className="memory_label_wrap">
            <div
              className="memory_label_wrap_bar"
              style={{
                background: isComplete
                  ? COLORS.completed
                  : isActive
                  ? COLORS.active
                  : COLORS.default,
              }}
            ></div>
            <div
              className="memory_label_wrap_title"
              style={{
                color: isComplete
                  ? COLORS.completed
                  : isActive
                  ? COLORS.active
                  : COLORS.default,
              }}
            >
              Step {realIndex}
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="memory">
      <div className="memory_label">
        {x < COMPARE_STEPS.COMPARE_5 ? (
          renderBreakpoints()
        ) : (
          <div
            className="memory_label_wrap_complete"
            style={{
              color: COLORS.active,
            }}
          >
            Step 4
          </div>
        )}
      </div>
      <div className="memory_progressbar">
        <Progressbar progress={PERCENT} />
      </div>
    </div>
  );
};
export default Memory;

Memory.propTypes = {
  x: PropTypes.number,
};
