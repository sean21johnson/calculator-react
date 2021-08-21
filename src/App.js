import React, { useState } from "react";

import NumDisplay from "./components/NumDisplay";
import AcButton from "./components/AcButton";
import BigAddButton from "./components/BigAddButton";
import EqualButton from "./components/EqualButton";
import DecimalButton from "./components/DecimalButton";
import OperatorButton from "./components/OperatorButton";
import NumButton from "./components/NumButton";

import "./App.css";

function App() {
	// State
	const [numDisplay, setNumDisplay] = useState("");
	const [currentOperation, setCurrentOperation] = useState([]);

	const handleNumClick = (digit) => {
		digit = parseInt(digit);
		const replicateCurrentOperation = [...currentOperation];
		replicateCurrentOperation.push(digit);
		setCurrentOperation(replicateCurrentOperation);
		handleNumDisplay(digit);
	};

	const handleOperatorClick = (operator) => {
		const replicateCurrentOperation = [...currentOperation];
		if (operator === "/" || operator === "+" || operator === "-") {
			replicateCurrentOperation.push(operator);
		} else {
      operator = "*"
			replicateCurrentOperation.push("*");
		}
		setCurrentOperation(replicateCurrentOperation);
		handleNumDisplay(operator);
	};

	const handleDecimalClick = () => {
		const replicateCurrentOperation = [...currentOperation];
    replicateCurrentOperation.push(".")
		setCurrentOperation(replicateCurrentOperation);
		handleNumDisplay(".");
	};

	const handleAcClick = () => {
		setCurrentOperation([]);
		setNumDisplay(0);
	};

	const handleNumDisplay = (newCharacter) => {

    const replicatedOperation = [...currentOperation, newCharacter];

    if (typeof(replicatedOperation[replicatedOperation.length - 1]) !== "number" && replicatedOperation[replicatedOperation.length - 1] !== ".") {
      setNumDisplay("");
    } else if (replicatedOperation.length === 1 && typeof(replicatedOperation[replicatedOperation.length - 1]) === "number") {
      setNumDisplay(replicatedOperation[replicatedOperation.length - 1])
    } else {
      let currentIndex = replicatedOperation.length - 1;
      let currentNums = "";

      while (currentIndex >= 0) {
        if (typeof replicatedOperation[currentIndex] === "string" && replicatedOperation[currentIndex] !== ".") {
          break;
        } else {
          currentNums += replicatedOperation[currentIndex].toString();
          currentIndex--
        }
      }

      setNumDisplay(currentNums.split("").reverse().join(""))

    }
	};

	const handleEquationClick = () => {
		const modArr = [];
    let currentNumStr = "";

    let replicatedOperation = [...currentOperation];

    for (let i = 0; i < replicatedOperation.length; i++) {
      const currentEl = replicatedOperation[i];

      if (currentEl === ".") {
        currentNumStr += ".";
      } else if (typeof currentEl === "number") {
        currentNumStr += currentEl.toString();

        if (i + 1 === replicatedOperation.length) {
          modArr.push(parseFloat(currentNumStr))
        }
      } else {
        modArr.push(parseFloat(currentNumStr));
        modArr.push(currentEl);

        currentNumStr = "";
      }
    }

    let finalVal;

    for (let i = 0; i < modArr.length; i++) {
      if (i === 0) {
        finalVal = modArr[i];
      } else if (modArr[i - 1] === "+") {
        finalVal += modArr[i]
      } else if (modArr[i - 1] === "-") {
        finalVal -= modArr[i]
      } else if (modArr[i - 1] === "*") {
        finalVal *= modArr[i]
      } else if (modArr[i - 1] === "/") {
        finalVal /= modArr[i]
      } else {
        continue;
      }
    }

    setNumDisplay(finalVal.toFixed(2));

	};

	return (
		<div className="App">
			<section className="calculator">
				<NumDisplay currentDisplay={numDisplay} />
				<div className="row">
					<AcButton
						classList={"ac single grey"}
						value={"AC"}
						onAcClick={handleAcClick}
					/>
					<BigAddButton
						classList={"bigadd double maroon"}
						value={"BIG ADD"}
						onNumClick={handleNumClick}
					/>
					<OperatorButton
						classList={"divide single orange"}
						value={"/"}
						onOperatorClick={handleOperatorClick}
					/>
				</div>
				<div className="row">
					<NumButton
						classList={"seven single"}
						value={7}
						onNumClick={handleNumClick}
					/>
					<NumButton
						classList={"eight single"}
						value={8}
						onNumClick={handleNumClick}
					/>
					<NumButton
						classList={"nine single"}
						value={9}
						onNumClick={handleNumClick}
					/>
					<OperatorButton
						classList={"multiply single orange"}
						value={"X"}
						onOperatorClick={handleOperatorClick}
					/>
				</div>
				<div className="row">
					<NumButton
						classList={"four single"}
						value={4}
						onNumClick={handleNumClick}
					/>
					<NumButton
						classList={"five single"}
						value={5}
						onNumClick={handleNumClick}
					/>
					<NumButton
						classList={"six single"}
						value={6}
						onNumClick={handleNumClick}
					/>
					<OperatorButton
						classList={"subtract single orange"}
						value={"-"}
						onOperatorClick={handleOperatorClick}
					/>
				</div>
				<div className="row">
					<NumButton
						classList={"one single"}
						value={1}
						onNumClick={handleNumClick}
					/>
					<NumButton
						classList={"two single"}
						value={2}
						onNumClick={handleNumClick}
					/>
					<NumButton
						classList={"three single"}
						value={3}
						onNumClick={handleNumClick}
					/>
					<OperatorButton
						classList={"add single orange"}
						value={"+"}
						onOperatorClick={handleOperatorClick}
					/>
				</div>
				<div className="row">
					<NumButton
						classList={"zero double"}
						value={0}
						onNumClick={handleNumClick}
					/>
					<DecimalButton
						classList={"decimal single"}
						value={"."}
						onDecimalClick={handleDecimalClick}
					/>
					<EqualButton
						classList={"equals single orange"}
						value={"="}
						onEquationClick={handleEquationClick}
					/>
				</div>
			</section>
		</div>
	);
}

export default App;
