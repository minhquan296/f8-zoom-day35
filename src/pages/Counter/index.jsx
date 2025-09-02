import { useState } from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const upCounter = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};

	const downCounter = () => {
		setCounter((prevCounter) => prevCounter - 1);
	};

	const ResetCounter = () => {
		setCounter(0);
	};

	return (
		<div className="flex justify-center items-center ">
			<div className="container p-10">
				<div className="flex flex-col items-center ">
					<p
						className={`${
							counter > 0 ? "bg-green-400" : counter < 0 ? "bg-red-300" : "bg-gray-400"
						} w-[150px] h-[150px] flex items-center justify-center rounded text-6xl`}
					>
						{counter}
					</p>
					<div className="mt-5 flex gap-3 mb-4">
						<button className="bg-gray-300 px-4 py-1 rounded" onClick={upCounter}>
							+
						</button>
						<button className="bg-gray-300 px-4 py-1 rounded" onClick={downCounter}>
							-
						</button>
						<button className="bg-gray-300 px-4 py-1 rounded" onClick={ResetCounter}>
							Reset
						</button>
					</div>

					<div className="text-sm font-bold">
						{counter > 0 ? <p>Số Dương</p> : counter < 0 ? <p>Âm</p> : <p>Bằng 0</p>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;
