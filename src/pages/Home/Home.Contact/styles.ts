import styled from "styled-components";

export const TextContainer = styled.div`
	text-align: center;

	display: flex;
	flex-direction: column;
	gap: 0.125rem;

	.email {
		color: ${(props) => props.theme.primary};
		font-weight: bold;
	}

	:not(.email) {
		user-select: none;
	}
`;

export const FormContainer = styled.form`
	width: min(35rem, 100%);

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
`;

export const InputContainer = styled.div`
	width: 100%;
	position: relative;

	input[type="text"],
	textarea {
		width: 100%;
		max-width: 100%;
		padding: 0.75rem 1rem;
		padding-top: 1.25rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		border: 1px solid ${(props) => props.theme.primary};
		background-color: ${(props) => props.theme.primary}22;
	}

	input[type="text"] {
	}

	textarea {
		resize: none;
		aspect-ratio: 4;
	}

	label {
		width: max-content;
		max-width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		cursor: text;
		transition: all 0.25s ease-in-out;
		font-size: 1rem;

		position: absolute;
		top: 1rem;
		left: 1.25rem;

		* {
			color: ${(props) => props.theme.primary};
		}
	}

	input:focus ~ label,
	input:valid ~ label,
	textarea:focus ~ label,
	textarea:valid ~ label {
		transform: translate(-0.25rem, -1.75rem);
		cursor: normal;
		padding: 0.25rem 0.75rem;
		border-radius: 100rem;
		background-color: ${(props) => props.theme.primary};
		font-size: 0.8rem;
		* {
			color: ${(props) => props.theme.primaryText};
		}
	}
`;

export const SubmitButton = styled.button.attrs({
	type: "submit",
})`
	padding: 0.75rem 1.75rem;
	border-radius: 100rem;
	border: 1px solid ${(props) => props.theme.primary};
	background-color: ${(props) => props.theme.primary}11;
	font-size: 1rem;
	cursor: pointer;

	&,
	* {
		transition: all 0.25s ease-in-out;
		color: ${(props) => props.theme.primary};
	}

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;

	.icon {
		transform: translate(0, 0);
	}

	&:hover {
		background-color: ${(props) => props.theme.primary};
		filter: drop-shadow(0 0 0.5rem ${(props) => props.theme.primary}AA);

		* {
			color: ${(props) => props.theme.primaryText};
		}

		.icon {
			transform: translate(0.1rem, -0.1rem);
		}
	}
`;

