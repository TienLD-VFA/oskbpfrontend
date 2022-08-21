import React, { useState } from "react";
import "./App.scss";
import Memory from "./components/Memory/Memory";
import Framework7 from "framework7/lite-bundle";
import Framework7React from "framework7-react";
import "framework7/css/bundle";
Framework7.use(Framework7React);
// sase
function App() {
	const [step, setStep] = useState(0);

	// shouldn't there be a check to disable _HandleStep and _HandleStepPrev if the step is out of bound?
	const _HandleStep = () => {
		setStep((s) => (s < 7 ? s + 1 : s));
	};
	const _HandleStepPrev = () => {
		setStep((s) => (s > 0 ? s - 1 : s));
	};

	return (
		//
		<div className="App">
			<Memory x={step} />
			<div className="button">
				<button className="button__next" onClick={_HandleStep} disabled={step === 7}>
					NEXT
				</button>
				<button className="button_next" onClick={_HandleStepPrev} disabled={step === 0}>
					Prev
				</button>
			</div>
			<div className="button__text">{step}</div>
		</div>
	);
}

export default App;
