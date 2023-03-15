import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';

export default function About() {
	const factorial = x => {
		if (x === 1) return 1;
		return (x = x * factorial(x - 1));
	};

	console.log(factorial(3));

	return (
		<>
			<Head>
				<title>About page</title>
			</Head>
			<h1>About Page</h1>

			<button onClick={() => Router.push('/')}>Go back home</button>
		</>
	);
}
