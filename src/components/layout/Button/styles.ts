import styled from "styled-components";

export const ButtonComponent = styled.button.attrs({
	type: "submit",
})`
	padding: 0.75rem 1.75rem;
	border-radius: 100rem;
	border: 1px solid ${(props) => props.theme.primary};
	background-color: ${(props) => props.theme.primary}11;
	font-size: 1rem;
	font-weight: bolder;
	user-select: none;
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

	&:hover {
		background-color: ${(props) => props.theme.primary}CC;
		filter: drop-shadow(0 0 0.5rem ${(props) => props.theme.primary}AA);

		&,
		* {
			color: ${(props) => props.theme.primaryText};
		}
	}
`;

