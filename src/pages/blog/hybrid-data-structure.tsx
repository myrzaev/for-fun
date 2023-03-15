import Head from 'next/head';
import Router from 'next/router';

export default function HybridDataStructure() {
	return (
		<div className="container">
			<Head>
				<title>Hybrid Data Structure</title>
			</Head>
			<h1>Hybrid Data Structure</h1>
			<p>Write an array of linked lists</p>

			<button onClick={() => Router.push('/')}>Go back home</button>
		</div>
	);
}
