import Head from 'next/head';
import Router from 'next/router';

export default function AWS() {
	return (
		<div className="container">
			<Head>
				<title>AmazonWebServices</title>
			</Head>
			<h1>AmazonWebServices</h1>

			<button onClick={() => Router.push('/')}>Go back home</button>
		</div>
	);
}
