export type INPUT_PROPS_TYPES = {
	id: string;
	type?: string;
	placeholder?: string;
	element?: string;
	rows?: number;
	label?: string;
	errorText?: string;
	validators: { type: string }[];
	onInput: (arg0: string, arg1: string, arg2: boolean) => void;
};

export type INPUT_STATE_TYPES = {
	value: string;
	isValid: boolean;
	isTouched?: boolean;
};

export type INPUT_ACTION_TYPES = {
	type: string;
	val: string;
	validators: { type: string }[];
};
