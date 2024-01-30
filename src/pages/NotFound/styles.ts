import styled from "styled-components";

export const NotFoundContainer = styled.div`
	flex: 1;
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5rem;

	* {
		transition: all 0.25s ease-in-out;
	}

	.error {
		font-size: 1rem;
		text-align: center;

		* {
			color: ${(props) => props.theme.primary};
		}

		.number {
			user-select: none;
			font-size: 8rem;
		}
	}

	.home {
		font-size: 1rem;
		text-align: center;

		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	@media screen and (max-width: 767px) {
		.error {
			font-size: 0.75rem;
			.number {
				font-size: 6rem;
			}
		}
	}
`;

