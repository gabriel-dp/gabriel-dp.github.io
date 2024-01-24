import styled from "styled-components";

export const CategoryContainer = styled.div`
	width: min(100%, 50rem);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	* {
		transition: all 0.25s ease-in-out;
	}

	h3 {
		font-size: 1.5rem;
		color: ${(props) => props.theme.primary};
	}

	@media screen and (max-width: 767px) {
		h3 {
			font-size: 1.25rem;
		}
	}
`;

export const SkillsContainer = styled.div`
	width: max-content;
	padding: 1.5rem 3rem;
	border-radius: 0.5rem;
	border: 1px solid ${(props) => props.theme.primary};
	background-color: ${(props) => props.theme.primary}11;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;

export const SingleSkill = styled.div`
	height: 4rem;
	//filter: drop-shadow(0 0 0.25rem ${(props) => props.theme.text}AA);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	div {
		height: calc(100% - 1rem);
		aspect-ratio: 1;

		img {
			aspect-ratio: 1;
			max-height: 100%;
		}
	}
`;

