"use client";

import styled from "styled-components";

export const CardContainer = styled.div<{ $backgroundUrl: string }>`
	width: min(45rem, 100%);
	padding: 1.5rem;
	border-radius: 0.5rem;
	border: 1px solid ${(props) => props.theme.primary};
	overflow: hidden;
	position: relative;
	transition: all 0.25s ease-in-out;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	&::before {
		content: "";
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.05;
		background: url(${(props) => props.$backgroundUrl}) no-repeat;
		background-size: cover;
		filter: blur(1px);
		transition: all 0.25s ease-in-out;
	}

	&:hover {
		filter: drop-shadow(0 0 0.5rem ${(props) => props.theme.light}77);

		&::before {
			opacity: 0.15;
			filter: blur(0);
		}
	}
`;

export const Header = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap-reverse;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;

	.title {
		font-weight: bold;
		font-size: 1.25rem;
		color: ${(props) => props.theme.primary};
	}

	.time {
		font-weight: bold;
		font-size: 1.1rem;
		color: ${(props) => props.theme.secondary};
	}
`;

export const LogoContainer = styled.div`
	height: 3rem;
	max-width: 6rem;
	user-select: none;
	filter: drop-shadow(0 0 0.5rem ${(props) => props.theme.primary}44);

	display: flex;
	flex-direction: row;
	align-items: center;

	img {
		max-height: 100%;
		max-width: 100%;
	}
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.achievement {
		font-size: 1rem;
		color: ${(props) => props.theme.primary};
	}
`;
