import Head from 'next/head';
import NavBar from '../NavBar';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../../styles';

const StyledContent = styled.div`
	display: flex;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
`;

const Main = ({ children, router }) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Timur Myrzaev</title>
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<NavBar path={router} />
				<StyledContent>{children}</StyledContent>
			</ThemeProvider>
		</>
	);
};

export default Main;
