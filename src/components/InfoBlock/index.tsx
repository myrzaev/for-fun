import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Image from 'next/image';
import photo from '../../assets/images/photo.jpg';
import Model from '../Model';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import { StyledHeroSection } from './styled';

const InfoBlock = () => {
	const [isMounted, setIsMounted] = useState(false);
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		const timeout = setTimeout(() => setIsMounted(true), 1000);
		return () => clearTimeout(timeout);
	}, []);

	const two = (
		<div className="who">
			<div>
				<h1>Heey, my name is</h1>
				<h2>Timur Myrzaev</h2>
				<h1>and I'm a</h1>
				<h3>Senior [JavaScript & React] Engineer</h3>
			</div>
		</div>
	);
	const three = (
		<>
			<div className="work">
				Timur is a full-stack developer based in Kyrgyzstan with a passion for
				building digital services/stuff he wants. He has a knack for all things
				launching products, from planning and designing all the way to solving
				real-life problems with code. When not online, he loves hanging out with
				his camera. Currently, he is living off of his own product called
				Inkdrop. He publishes content for marketing his products and his YouTube
				channel called "Dev as Life" has more than 100k subscribers.
			</div>

			<div className="btn">
				<button>My portfolio</button>
			</div>
		</>
	);

	const items = [two, three];

	return (
		<StyledHeroSection>
			<TransitionGroup component={null}>
				{isMounted &&
					items.map((item, i) => (
						<CSSTransition key={i} classNames="fadeup" timeout={2000}>
							<div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
						</CSSTransition>
					))}
			</TransitionGroup>
		</StyledHeroSection>
	);
};

export default InfoBlock;
