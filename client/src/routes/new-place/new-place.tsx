import { useCallback, useReducer } from "react";

import Input from "../../components/input/input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../utils/validators";
import formReducer from "./new-place.reducer";

const NewPlace = () => {
	const [formState, dispatch] = useReducer(formReducer, {
		inputs: {
			title: {
				value: "",
				isValid: false,
			},
			description: {
				value: "",
				isValid: false,
			},
		},
		isValid: false,
	});

	const inputHandler = useCallback(
		(id: string, value: string, isValid: boolean) => {
			dispatch({
				type: "INPUT_CHANGE",
				value: value,
				isValid: isValid,
				inputId: id,
			});
		},
		[]
	);

	const placeSubmitHandler = (event: React.FormEvent) => {
		event?.preventDefault();
		console.log(formState.inputs); // send this to backend
	};

	return (
		<section className="flex flex-col gap-8 p-1 m-2">
			<h1 className="text-xl font-semibold">Create New Place</h1>
			<form
				onSubmit={placeSubmitHandler}
				className="flex flex-col max-w-xl gap-2 p-4 text-lg rounded-md bg-zinc-200"
			>
				<Input
					id="title"
					element="input"
					label="Title"
					placeholder="Enter here..."
					errorText="Please enter a valid title."
					validators={[VALIDATOR_REQUIRE()]}
					onInput={inputHandler}
				/>
				<Input
					id="description"
					element="textarea"
					label="Description"
					placeholder="Text here..."
					errorText="Please enter a valid message with 5 or more characters!"
					validators={[VALIDATOR_MINLENGTH(5)]}
					onInput={inputHandler}
				/>
				<Input
					id="address"
					element="input"
					label="Address"
					placeholder="Address here..."
					errorText="Please enter a valid address!"
					validators={[VALIDATOR_REQUIRE()]}
					onInput={inputHandler}
				/>
				<button
					type="submit"
					className={
						`mt-2 p-2 text-base font-semibold text-white bg-teal-700 rounded-md cursor-pointer hover:bg-teal-900 w-fit` +
						`${
							formState.isValid
								? ""
								: " bg-zinc-300 hover:bg-zinc-300 cursor-default"
						}`
					}
					disabled={!formState.isValid}
				>
					ADD PLACE
				</button>
			</form>
		</section>
	);
};

export default NewPlace;
