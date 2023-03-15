import styled from 'styled-components';
import InfoBlock from '../components/InfoBlock';
import Model from '../components/Model';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Jobs from '../components/Jobs';
import { useEffect, useState } from 'react';
import photto from '../assets/images/photo.jpg';
import Image from 'next/image';

const StyledMainContainer = styled.main`
	counter-reset: section;
`;

function HomePage({ location }: any) {
	const [isLoading, setLoading] = useState(true);

	console.log(location);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 100);

		return () => {
			clearTimeout(timeout);
		};
	});

	return (
		<StyledMainContainer className="fillHeight">
			{isLoading ? (
				'Loading...'
			) : (
				<>
					{/* <Model /> */}
					<InfoBlock />
					<About />
					<Jobs />
					<Portfolio />
				</>
			)}
		</StyledMainContainer>
	);
}

export default HomePage;
