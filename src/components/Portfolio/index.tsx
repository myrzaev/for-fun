import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import sr from '../../utils';

const StyledProjectsGrid = styled.ul`
	${({ theme }) => theme.mixins.resetList};

	a {
		position: relative;
		z-index: 1;
	}
`;

const StyledProject = styled.li`
	position: relative;
	align-items: center;

	@media (max-width: 768px) {
		${({ theme }) => theme.mixins.boxShadow};
	}

	&:not(:last-of-type) {
		margin-bottom: 40px;

		@media (max-width: 768px) {
			margin-bottom: 70px;
		}

		@media (max-width: 480px) {
			margin-bottom: 30px;
		}
	}

	&:nth-of-type(even) {
		.project-content {
			text-align: right;

			@media (max-width: 768px) {
				padding: 40px 40px 30px;
			}
			@media (max-width: 480px) {
				padding: 25px 25px 20px;
			}
		}
		.project-tech-list {
			justify-content: flex-end;

			@media (max-width: 768px) {
				justify-content: flex-start;
			}

			li {
				margin: 0 0 5px 20px;

				@media (max-width: 768px) {
					margin: 0 10px 5px 0;
				}
			}
		}
		.project-links {
			justify-content: flex-end;
			margin-left: 0;
			margin-right: -10px;

			@media (max-width: 768px) {
				justify-content: flex-start;
				margin-left: -10px;
				margin-right: 0;
			}
		}
	}

	.project-content {
		position: relative;

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 100%;
			padding: 40px 40px 30px;
			z-index: 5;
		}

		@media (max-width: 480px) {
			padding: 30px 25px 20px;
		}
	}

	.project-overline {
		margin: 10px 0;
		color: var(--green);
		font-family: var(--font-mono);
		font-size: var(--fz-xs);
		font-weight: 400;
	}

	.project-title {
		color: var(--lightest-slate);
		font-size: clamp(24px, 5vw, 28px);

		@media (min-width: 768px) {
			margin: 0 0 20px;
		}

		@media (max-width: 768px) {
			color: var(--white);

			a {
				position: static;

				&:before {
					content: '';
					display: block;
					position: absolute;
					z-index: 0;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
				}
			}
		}
	}

	.project-description {
		${({ theme }) => theme.mixins.boxShadow};
		position: relative;
		z-index: 2;
		padding: 25px;
		border-radius: var(--border-radius);
		background-color: var(--light-navy);
		color: var(--light-slate);
		font-size: var(--fz-lg);

		@media (max-width: 768px) {
			padding: 20px 0;
			background-color: transparent;
			box-shadow: none;

			&:hover {
				box-shadow: none;
			}
		}

		a {
			${({ theme }) => theme.mixins.inlineLink};
		}

		strong {
			color: var(--white);
			font-weight: normal;
		}
	}

	.project-tech-list {
		display: flex;
		flex-wrap: wrap;
		position: relative;
		z-index: 2;
		margin: 25px 0 10px;
		padding: 0;
		list-style: none;

		li {
			margin: 0 20px 5px 0;
			color: var(--light-slate);
			font-family: var(--font-mono);
			font-size: var(--fz-xs);
			white-space: nowrap;
		}

		@media (max-width: 768px) {
			margin: 10px 0;

			li {
				margin: 0 10px 5px 0;
				color: var(--lightest-slate);
			}
		}
	}

	.project-links {
		display: flex;
		align-items: center;
		position: relative;
		margin-top: 10px;
		margin-left: -10px;
		color: var(--lightest-slate);

		a {
			${({ theme }) => theme.mixins.flexCenter};
			padding: 10px;

			&.external {
				svg {
					width: 22px;
					height: 22px;
					margin-top: -4px;
				}
			}

			svg {
				width: 20px;
				height: 20px;
			}
		}

		.cta {
			${({ theme }) => theme.mixins.smallButton};
			margin: 10px;
		}
	}
`;

function Portfolio() {
	const revealTitle = useRef(null);
	const prefersReducedMotion = usePrefersReducedMotion();
	const revealProjects = useRef([]);

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		// document.length > 0
		// 	? (sr.reveal(revealTitle.current, srConfig()),
		// 	  revealProjects.current.forEach((ref, i) =>
		// 			sr.reveal(ref, srConfig(i * 100))
		// 	  ))
		// 	: null;
	}, []);

	const featuredProjects = [
		{
			title: 'Danfoss',
			tech: ['tech', 'netech'],
			external: 'external',
			github: 'github',
			cta: 'cta',
			description: `
			• Covered the whole project with Playwright tests to compare the test server with the prod server;
			• Implemented product type logic for filters which helped easily find the right product;
			• Written VanillaJS instead of jquery because the project was not supported with a legacy code;
			• Developed proxy API with NodeJS to avoid CORS errors with external APIS;`
		},
		{
			title: 'EPAM Lunches',
			tech: ['tech', 'netech'],
			external: 'external',
			github: 'github',
			cta: 'cta',
			description: `
			• Covered the whole project with Playwright tests to compare the test server with the prod server;
			• Implemented product type logic for filters which helped easily find the right product;
			• Written VanillaJS instead of jquery because the project was not supported with a legacy code;
			• Developed proxy API with NodeJS to avoid CORS errors with external APIS;`
		},
		{
			title: 'Beeline Agent',
			tech: ['tech', 'netech'],
			external: 'external',
			github: 'github',
			cta: 'cta',
			description: `
			• Covered the whole project with Playwright tests to compare the test server with the prod server;
			• Implemented product type logic for filters which helped easily find the right product;
			• Written VanillaJS instead of jquery because the project was not supported with a legacy code;
			• Developed proxy API with NodeJS to avoid CORS errors with external APIS;`
		},
		{
			title: 'Beeline Business',
			tech: ['tech', 'netech'],
			external: 'external',
			github: 'github',
			cta: 'cta',
			description: `
			• Covered the whole project with Playwright tests to compare the test server with the prod server;
			• Implemented product type logic for filters which helped easily find the right product;
			• Written VanillaJS instead of jquery because the project was not supported with a legacy code;
			• Developed proxy API with NodeJS to avoid CORS errors with external APIS;`
		},
		{
			title: 'Collaboration feedback',
			tech: ['tech', 'netech'],
			external: 'external',
			github: 'github',
			cta: 'cta',
			description: `
			• Covered the whole project with Playwright tests to compare the test server with the prod server;
			• Implemented product type logic for filters which helped easily find the right product;
			• Written VanillaJS instead of jquery because the project was not supported with a legacy code;
			• Developed proxy API with NodeJS to avoid CORS errors with external APIS;`
		},
		{
			title: 'Pikl',
			tech: ['tech', 'netech'],
			external: 'external',
			github: 'github',
			cta: 'cta',
			description: `
			• Covered the whole project with Playwright tests to compare the test server with the prod server;
			• Implemented product type logic for filters which helped easily find the right product;
			• Written VanillaJS instead of jquery because the project was not supported with a legacy code;
			• Developed proxy API with NodeJS to avoid CORS errors with external APIS;`
		},
		{
			title: 'BeeTarget',
			tech: ['tech', 'netech'],
			external: 'external',
			github: 'github',
			cta: 'cta',
			description: `
			• Covered the whole project with Playwright tests to compare the test server with the prod server;
			• Implemented product type logic for filters which helped easily find the right product;
			• Written VanillaJS instead of jquery because the project was not supported with a legacy code;
			• Developed proxy API with NodeJS to avoid CORS errors with external APIS;`
		},
		{
			title: 'Digital discount card',
			tech: ['tech', 'netech'],
			external: 'external',
			github: 'github',
			cta: 'cta',
			description: `
			• Covered the whole project with Playwright tests to compare the test server with the prod server;
			• Implemented product type logic for filters which helped easily find the right product;
			• Written VanillaJS instead of jquery because the project was not supported with a legacy code;
			• Developed proxy API with NodeJS to avoid CORS errors with external APIS;`
		}
	];

	return (
		<section id="projects">
			<h2 className="numbered-heading" ref={document ? revealTitle : null}>
				Portfolio
			</h2>

			<StyledProjectsGrid>
				{featuredProjects &&
					featuredProjects.map(
						({ title, tech, external, github, cta, description }, i) => {
							return (
								<StyledProject
									key={i}
									ref={el => (revealProjects.current[i] = el)}
								>
									<div className="project-content">
										<p className="project-overline">Featured Project</p>

										<h3 className="project-title">
											<a href={external}>{title}</a>
										</h3>

										<div className="project-description">
											<p>{description}</p>
										</div>

										{tech.length && (
											<ul className="project-tech-list">
												{tech.map((tech, i) => (
													<li key={i}>{tech}</li>
												))}
											</ul>
										)}

										<div className="project-links">
											{cta && (
												<a href={cta} aria-label="Course Link" className="cta">
													Learn More
												</a>
											)}
											{github && (
												<a href={github} aria-label="GitHub Link">
													{/* <Icon name="GitHub" />  */}
													github
												</a>
											)}
											{external && !cta && (
												<a
													href={external}
													aria-label="External Link"
													className="external"
												>
													{/* <Icon name="External" /> */}
													external
												</a>
											)}
										</div>
									</div>
								</StyledProject>
							);
						}
					)}
			</StyledProjectsGrid>
		</section>
	);
}

export default Portfolio;
