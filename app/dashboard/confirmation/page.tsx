"use client";

import React from "react";
import styles from "./Confirmation.module.scss";
import { notification } from "antd";

let currentInputIdx: number = 0;

export default function Confirmation() { 
	const [inputLength, setInputLength] = React.useState<number>(4);
	const [input, setInput] = React.useState<string[]>(new Array(inputLength).fill(""));
	const [activeInputIdx, setActiveInputIdx] = React.useState<number>(0);
	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleChange = (
		{ target }: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = target;
		const newOtp: string[] = [...input];
		newOtp[currentInputIdx] = value.substring(value.length - 1);

		if (!value) {
			setActiveInputIdx(currentInputIdx-1);
			return;
		}

		setActiveInputIdx(currentInputIdx+1);

		setInput(newOtp);

		if (!input.includes('')) {
			// Send data to the server
			notification.error({
				message: "Ошибка",
				description: "Введено пустое значение",
				duration: 2,
			})
		}
	};

	const handleOnKeyDown = (
		{ key }: React.KeyboardEvent<HTMLInputElement>,
		idx: number
	) => {
		currentInputIdx = idx;
		if (key === 'Backspace') {
			setActiveInputIdx(currentInputIdx - 1);
			const newOtp: string[] = [...input];
			newOtp[currentInputIdx] = "";
			setInput(newOtp);
		}
	};

	React.useEffect(() => {
		inputRef.current?.focus();
	}, [activeInputIdx]);

	return (
		<main>
			<form>
				{input?.map((_, idx) => (
					<React.Fragment key={idx}>
						<input 
						onChange={handleChange}
						onKeyDown={(e) => handleOnKeyDown(e, idx)}
						ref={ idx == activeInputIdx ? inputRef : null }
						className={styles['spin-button-none']} type="number"
						value={input[idx]} />
						{idx === input.length - 1 ? null : (
							<span />
						)}
					</React.Fragment>
				))}
			</form>
		</main>
	)
}