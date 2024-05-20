import styled from "styled-components";

export const Selector = styled.div`
	padding: 0.25rem;
	border-radius: 0.5rem;
	position: relative;
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CurrentSelected = styled.div`
	height: 1.5rem;

	svg {
		max-height: 100%;
	}
`;

export const DropdownLanguages = styled.ul<{ $isOpen: string }>`
	width: 100%;
	list-style: none;
	border-radius: 0.25rem;
	overflow: hidden;
	background-color: ${(props) => props.theme.primary}11;
	border: 1px solid ${(props) => props.theme.primary};
	padding: ${(props) => (props.$isOpen == "true" ? "0.25rem " : 0)} 0.5rem;
	max-height: ${(props) => (props.$isOpen == "true" ? "15rem" : 0)};
	visibility: ${(props) => (props.$isOpen == "true" ? "visible" : "hidden")};
	transition: max-height 0.5s ease, visibility 0.5s linear, padding 0.25s ease-in-out;

	position: absolute;
	top: 100%;

	display: flex;
	flex-direction: column;
`;

export const LanguageOption = styled.li`
	transition: all 0.25s ease-in-out;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		filter: drop-shadow(0 0 0.25rem ${(props) => props.theme.primary}77);
	}
`;
