import styled from "styled-components";

const TRAIL_WIDTH_REM = 2.5;
const TRAIL_HEIGHT_REM = 0.9;
const SWITCH_SIZE_REM = 1.4;

export const Switch = styled.div`
	position: relative;
	min-width: ${TRAIL_WIDTH_REM}rem;

	display: flex;
	align-items: center;

	* {
		transition: all 0.25s ease-in-out;
	}

	input[type="checkbox"] {
		display: none;
	}

	label {
		width: 100%;
		display: block;
		overflow: hidden;
		cursor: pointer;
		border: 1px solid ${(props) => props.theme.text}AA;
		border-radius: 100rem;
	}

	.track {
		width: 200%;
		margin-left: -100%;
	}

	.track:before,
	.track:after {
		content: "";
		width: 50%;
		height: ${TRAIL_HEIGHT_REM}rem;
		line-height: ${TRAIL_HEIGHT_REM}rem;
		float: left;
	}

	.track:before {
		background-color: ${(props) => props.theme.color1};
	}

	.track:after {
		background-color: ${(props) => props.theme.light};
	}

	.button {
		width: ${SWITCH_SIZE_REM}rem;
		aspect-ratio: 1;
		border-radius: 100%;
		background-color: ${(props) => props.theme.light};
		border: 1px solid ${(props) => props.theme.text}AA;
		font-size: 0.7rem;
		color: ${(props) => props.theme.gray};
		filter: drop-shadow(0 0 0.25rem ${(props) => props.theme.light}AA);

		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: ${TRAIL_WIDTH_REM - SWITCH_SIZE_REM}rem;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	input:checked + label .track {
		margin-left: 0;
	}

	input:checked + label .button {
		right: 0;
		color: ${(props) => props.theme.color1};
	}
`;

