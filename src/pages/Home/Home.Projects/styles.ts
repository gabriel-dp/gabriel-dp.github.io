import styled from "styled-components";

import Button from "@/components/layout/Button";

export const ProjectsSection = styled.section`
	border-top: 1px solid ${(props) => props.theme.secondary}77;
	width: 100%;
	padding: 1.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	h2 {
		font-size: 2rem;
	}

	h3 {
		font-size: 1.5rem;
	}
`;

export const CardsContainer = styled.div`
	width: min(100%, 25rem);

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;

	@media screen and (min-width: 768px) {
		width: min(100%, 50rem);

		.card {
			width: 95%;

			&:nth-child(even) {
				flex-direction: row-reverse;
				margin-left: 5%;
			}

			&:nth-child(odd) {
				margin-right: 5%;
			}
		}
	}
`;

export const SeeMoreButton = styled(Button)`
	&:hover {
		.icon {
			transform: rotate(180deg);
		}
	}
`;

