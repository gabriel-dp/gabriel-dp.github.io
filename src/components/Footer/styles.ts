import styled from "styled-components";

export const FooterContainer = styled.footer`
	width: 100dvw;
	background-color: ${(props) => props.theme.background2};
	border-top: 1px solid ${(props) => props.theme.primary};

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FooterWrapper = styled.div`
	width: min(100%, 100rem);
	padding: 3rem min(3rem, 10%);

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 1.5rem;

	@media screen and (max-width: 767px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const AuthorContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	* {
		color: ${(props) => props.theme.secondary};
		transition: all 0.25s ease-in-out;
	}

	p {
		font-size: 1rem;

		span {
			white-space: nowrap;
			display: inline-block;
		}
	}

	.source-code {
		font-size: 1rem;
		width: max-content;
		background-color: transparent;
		border: none;
		text-decoration: underline;

		&:hover {
			&,
			* {
				color: ${(props) => props.theme.primary};
			}
		}
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	@media screen and (max-width: 767px) {
		align-items: center;
		text-align: center;
	}
`;

export const SocialContainer = styled.div`
	font-size: 2rem;
	width: max-content;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;

	* {
		color: ${(props) => props.theme.secondary};
		transition: all 0.25s ease-in-out;
	}

	a {
		&:hover {
			filter: drop-shadow(0 0 0.25rem ${(props) => props.theme.primary}44);
			* {
				color: ${(props) => props.theme.primary};
			}
		}
	}
`;

