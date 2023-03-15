import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import {
	StyledJobsSection,
	StyledTabList,
	StyledTabButton,
	StyledHighlight,
	StyledTabPanels,
	StyledTabPanel
} from './styled';

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

export const KEY_CODES = {
	ARROW_LEFT: 'ArrowLeft',
	ARROW_LEFT_IE11: 'Left',
	ARROW_RIGHT: 'ArrowRight',
	ARROW_RIGHT_IE11: 'Right',
	ARROW_UP: 'ArrowUp',
	ARROW_UP_IE11: 'Up',
	ARROW_DOWN: 'ArrowDown',
	ARROW_DOWN_IE11: 'Down',
	ESCAPE: 'Escape',
	ESCAPE_IE11: 'Esc',
	TAB: 'Tab',
	SPACE: ' ',
	SPACE_IE11: 'Spacebar',
	ENTER: 'Enter'
};

function Jobs() {
	const jobsData = [
		{
			title: 'a',
			url: 'url',
			company: 'EPAM',
			range: 'nowadays',
			description: [
				'Participated in a mentor program for company interviews',
				'Improved user experience with innovative solutions',
				`Interviewed students from the RsSchool and helped them understand things they didn't understand`,
				'Meeting with the development team to discuss user interface ideas and applications',
				'Troubleshooting interface software and debugging application codes',
				'Improved application performance',
				'Developing and implementing highly-responsive user interface components using React concepts',
				'Documenting application changes and developing updates'
			]
		},
		{
			title: 'b',
			url: 'url',
			company: 'VEON',
			range: 'not nowadays',
			description: [
				'Developing and implementing highly-responsive user interface components using React concepts',
				'Monitoring and improving front-end performance',
				'Constructed a frontend architecture supporting user interface concepts',
				`Contributed to choosing the project's technology stack`,
				'Developed a user interface to simplify complex user interactions',
				'Migrated the old code base to the SPA',
				'Worked with time and react-calendar for reservations, wrote custom hooks for different time formats',
				'Changed the entire project design by deleting and creating components',
				'Switched from CSS to SCSS for optimization of style isolation',
				'Managed the project from scratch, made decisions on which libraries, technologies, frameworks we will use',
				'Created a telegram bot for newcomers onboarding using NodeJS (a to do list/map for new employees) with NodeJS',
				'Developing and implementing front-end architecture to support user interface concepts'
			]
		}
	];

	const [activeTabId, setActiveTabId] = useState(0);
	const [tabFocus, setTabFocus] = useState(null);
	const tabs = useRef([]);
	const revealContainer = useRef(null);
	const prefersReducedMotion = usePrefersReducedMotion();
	const isBrowser = typeof window !== 'undefined';

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		async function animate() {
			if (revealContainer.current) {
				const sr = (await import('scrollreveal')).default;
				sr().reveal(revealContainer.current, srConfig);
			}
		}
		animate();
	}, []);

	const focusTab = () => {
		if (tabs.current[tabFocus]) {
			tabs.current[tabFocus].focus();
			return;
		}
		// If we're at the end, go to the start
		if (tabFocus >= tabs.current.length) {
			setTabFocus(0);
		}
		// If we're at the start, move to the end
		if (tabFocus < 0) {
			setTabFocus(tabs.current.length - 1);
		}
	};

	// Only re-run the effect if tabFocus changes
	useEffect(() => focusTab(), [tabFocus]);

	// Focus on tabs when using up & down arrow keys
	const onKeyDown = e => {
		switch (e.key) {
			case KEY_CODES.ARROW_UP: {
				e.preventDefault();
				setTabFocus(tabFocus - 1);
				break;
			}

			case KEY_CODES.ARROW_DOWN: {
				e.preventDefault();
				setTabFocus(tabFocus + 1);
				break;
			}

			default: {
				break;
			}
		}
	};

	return isBrowser ? (
		<StyledJobsSection id="jobs" ref={revealContainer}>
			<h2 className="numbered-heading">Where I’ve Worked</h2>

			<div className="inner">
				<StyledTabList
					role="tablist"
					aria-label="Job tabs"
					onKeyDown={e => onKeyDown(e)}
				>
					{jobsData &&
						jobsData.map(({ company }, i) => {
							return (
								<StyledTabButton
									key={i}
									isActive={activeTabId === i}
									onClick={() => setActiveTabId(i)}
									ref={el => (tabs.current[i] = el)}
									id={`tab-${i}`}
									role="tab"
									tabIndex={activeTabId === i ? '0' : '-1'}
									aria-selected={activeTabId === i ? true : false}
									aria-controls={`panel-${i}`}
								>
									<span>{company}</span>
								</StyledTabButton>
							);
						})}
					<StyledHighlight activeTabId={activeTabId} />
				</StyledTabList>

				<StyledTabPanels>
					{jobsData &&
						jobsData.map(({ title, url, company, range, description }, i) => {
							return (
								<CSSTransition
									key={i}
									in={activeTabId === i}
									timeout={250}
									classNames="fade"
								>
									<StyledTabPanel
										id={`panel-${i}`}
										role="tabpanel"
										tabIndex={activeTabId === i ? '0' : '-1'}
										aria-labelledby={`tab-${i}`}
										aria-hidden={activeTabId !== i}
										hidden={activeTabId !== i}
									>
										<h3>
											<span>{title}</span>
											<span className="company">
												&nbsp;@&nbsp;
												<a href={url} className="inline-link">
													{company}
												</a>
											</span>
										</h3>

										<p className="range">{range}</p>

										<ul>
											{description.map(item => (
												<li>{item}</li>
											))}
										</ul>
									</StyledTabPanel>
								</CSSTransition>
							);
						})}
				</StyledTabPanels>
			</div>
		</StyledJobsSection>
	) : null;
}

export default Jobs;
