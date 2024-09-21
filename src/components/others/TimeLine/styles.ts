import styled from "styled-components";

export const TimeLineContainer = styled.div`
	width: min(55rem, calc(100% - 1.5rem));
	min-width: 12rem;
	padding: 1rem 0;
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TimeLinePath = styled.div`
	width: 100%;
	padding-top: 1.5rem;
	padding-bottom: 1rem;

	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const ElementTimeLine = styled.div.attrs({
	className: "single-education",
})`
	width: calc(100% - (1.5rem + 1px));
	flex: 1;
	padding: 1rem 1.25rem;
	border-radius: 0.5rem;
	background-color: ${(props) => props.theme.primary}11;
	border: 1px solid ${(props) => props.theme.primary};
	position: relative;
	align-self: flex-end;
	text-align: start;
	transition: filter 0.25s ease-in-out;

	display: flex;
	flex-direction: column;
	gap: 0.25rem;

	.name {
		font-size: 1.125rem;
		color: ${(props) => props.theme.primary};
	}

	&::before {
		content: "";
		width: 0.5rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: ${(props) => props.theme.primary};

		position: absolute;
		top: 50%;
		left: -1.5rem;
		transform: translate(-50%, -50%);
	}

	&::after {
		content: "";
		width: 0;
		height: 0;
		border-bottom: 0.375rem solid transparent;
		border-top: 0.375rem solid transparent;
		border-left: 0.375rem solid ${(props) => props.theme.primary};

		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(-100%, -50%) rotate(180deg);
	}

	&:hover {
		filter: drop-shadow(0 0 0.5rem ${(props) => props.theme.light}77);
	}

	@media screen and (min-width: 768px) {
		width: calc(50% - (1.5rem - 1px));

		&:nth-child(odd) {
			align-self: flex-start;
			text-align: end;

			&::before {
				left: calc(100% + 1.5rem);
			}

			&::after {
				left: 100%;
				transform: translateY(-50%);
			}
		}
	}
`;

export const VerticalLine = styled.div`
	width: 0.25rem;
	border-radius: 100rem;
	padding: 1rem 0;
	overflow: visible;
	background-color: ${(props) => props.theme.primary};

	position: absolute;
	top: 0;
	bottom: 0;

	&::before {
		content: "";
		border-left: 0.5rem solid transparent;
		border-right: 0.5rem solid transparent;
		border-bottom: 0.5rem solid ${(props) => props.theme.primary};

		position: absolute;
		bottom: calc(100% - 0.25rem);
		left: 50%;
		transform: translateX(-50%);
	}

	@media screen and (max-width: 767px) {
		position: absolute;
		left: 0;
	}
`;
