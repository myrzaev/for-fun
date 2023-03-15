import { useEffect, useRef } from 'react';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import sr from '../../utils';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
	max-width: 900px;
`;

function About() {
	const revealContainer = useRef(null);
	const prefersReducedMotion = usePrefersReducedMotion();

	const srConfig = (delay = 200, viewFactor = 0.25) => ({
		origin: 'bottom',
		distance: '20px',
		duration: 500,
		delay,
		rotate: { x: 0, y: 0, z: 0 },
		opacity: 0,
		scale: 1,
		easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		mobile: true,
		reset: false,
		useDelay: 'always',
		viewFactor,
		viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
	});

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		const timeout = setTimeout(() => {
			// sr.reveal(revealContainer.current, { delay: 500 });
		}, 1000);

		return () => {
			clearTimeout(timeout);
		};
	});

	const skills = [
		'JavaScript (ES6+)',
		'TypeScript',
		'React',
		'Eleventy',
		'Node.js',
		'WordPress'
	];

	return (
		<StyledAboutSection ref={revealContainer}>
			<h2 className="numbered-heading">About me</h2>
			<div>
				<p>
					My name is Timur and I enjoy creating things that live on the
					internet. My journey began in 2018 when I've worked as a ordinary
					person who helped provide workstations for employees and install tools
					for work.
				</p>
				<p>
					Today I have 5 years of commercial development experience behind me,
					I've worked in two huge companies EPAM Systems and VEON Ltd. and two
					startups: Pikl and IDoMarketing, which I did not specify in my resume
					because the projects were running in parallel.
				</p>
				<p>Here are a few technologies I’ve been working with recently:</p>

				<ul className="skills-list">
					{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
				</ul>
			</div>
		</StyledAboutSection>
	);
}

export default About;
