import styled from 'styled-components';

interface IStyledHeroSectionProps {
	theme?: any;
}

export const StyledHeroSection = styled.section<IStyledHeroSectionProps>`
	${({ theme }) => theme.mixins?.flexCenter};
	flex-direction: column;
	align-items: flex-start;
	min-height: 100vh;
	height: 100vh;
	padding: 0;

	.transition {
		transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
		filter: none !important;
		pointer-events: auto !important;
		user-select: auto !important;
	}

	.who {
		display: flex;
		align-items: center;
		margin: 20px 0;

		h1 {
			color: var(--green);
			font-family: var(--font-mono);
			font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
			font-weight: 400;

			@media (max-width: 480px) {
			}
		}

		h3 {
			margin-top: 5px;
			color: var(--slate);
			line-height: 0.9;
		}
	}

	.btn {
		margin: 20px 0;
		text-align: center;

		button {
			padding: 5px 10px;
			cursor: pointer;
		}
	}

	@media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
		height: auto;
		padding-top: var(--nav-height);
	}

	p {
		margin: 20px 0 0;
		max-width: 540px;
	}

	.email-link {
		${({ theme }) => theme.mixins?.bigButton};
		margin-top: 50px;
	}
`;
