// temp constants file
// your project must have a root constants file somewhere
// put these constants below into that root constants file
// remember to rename some of this constant for better meaning
// if you want to keep these constant in Memory.jsx file for easier naming,
// pls don't put it inside the component function, it will force react to keep
// track on these variable if they change, which they will never change

/* A constant variable that is used to set the color of the progressBar. */
export const COLORS = {
	active: "#005EB8",
	completed: "#335A75",
	default: "#C3CACF",
};

/* Used to compare the value of the progressBar. */
export const COMPARE_STEPS = {
	COMPARE_1: 0,
	COMPARE_2: 2,
	COMPARE_3: 4,
	COMPARE_4: 6,
	COMPARE_5: 7,
};

/* Used to represent the percentage of the progressBar increasing gradually. */
export const PERCENTAGE_OF_PROGRESS_BAR = {
	STEP_1: 0.15,
	STEP_2: 2.15,
	STEP_3: 4.3,
	STEP_4: 6.3,
	STEP_5: 8.5,
	STEP_6: 9.5,
	STEP_7: 11,
	STEP_8: 12.5,
};

export const TOTAL_STEPS = 8;