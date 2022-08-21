/**
 * Memory.jsx
 * BP_PREMIUM_WEBVIEW
 * Created by tienld@vitalify.asia on 26/07/2022
 * Copyright (c) 2022 OMRON HEALTHCARE Co.,Ltd. All rights reserved.
 */

// NOTE: Move style import to the top of the file
import "./Memory.scss";
import React, { useMemo } from "react";
import { Progressbar } from "framework7-react";
import PropTypes from "prop-types";
import {
	PERCENTAGE_OF_PROGRESS_BAR,
	COMPARE_STEPS,
	COLORS,
	TOTAL_STEPS,
} from "./constant";

const Memory = ({ x = 0 }) => {
	// NOTE: Pls create a new line between variables like i did for better readability

	const PERCENT = useMemo(() => {
		const REAL_X = x + 1;
		const value = PERCENTAGE_OF_PROGRESS_BAR[`STEP_${REAL_X}`];

		return 100 * (TOTAL_STEPS / 100) * value;
	}, [x]);

	const renderBreakpoints = () => {
		const LIST_BREAKPOINTS = Object.values(COMPARE_STEPS);

		return LIST_BREAKPOINTS.map((_, index) => {
			const isLast = index >= LIST_BREAKPOINTS.length - 2;
			const isStep3 = index === LIST_BREAKPOINTS.length - 3;

			if (isLast) return null;

			// NOTE: i don't think you have to create this much variable
			// pls consider to write inline calculation.
			const nextBreakPointValue = LIST_BREAKPOINTS[index + 1];
			const currentBreakPointValue = LIST_BREAKPOINTS[index];
			const isActive = x >= currentBreakPointValue;
			const isComplete = !isStep3 && x >= nextBreakPointValue;
			const realIndex = index + 1;

      // NOTE: this one is the one you should create extra variable for
      // it appear multiple times in file
			const colorStyle = isComplete
				? COLORS.completed
				: isActive
				? COLORS.active
				: COLORS.default;

			return (
				<div className="memory_label_wrap">
					<div
						className="memory_label_wrap_bar"
						style={{
							backgroundColor: colorStyle,
						}}
					></div>
					<div
						className="memory_label_wrap_title"
						style={{
							color: colorStyle,
						}}
					>
						Step {realIndex}
					</div>
				</div>
			);
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
