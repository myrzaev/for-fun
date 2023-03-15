import Head from 'next/head';
import Router from 'next/router';

export default function Algos() {
	return (
		<div className="container">
			<Head>
				<title>Algorithms and data structures</title>
			</Head>
			<h1>Algorithms and data structures</h1>
			<p>
				Time complexity - amount of time taken by an algorithm to run, as a
				function of input size
			</p>
			<p>
				Space complexity - amount of memory taken by an algorithm to run, as a
				function of input size
			</p>
			<p>
				By evaluating against the input size, the analysis is not only machine
				independent but the comprasion is also more appropriate.
			</p>
			<p>
				If your app needs to be very quick and has plenty of memory to work
				with, you don't have to worry about space complexity.
			</p>
			<p>
				If you have very little memory to work with, you should pick a solution
				that is relatively slower but needs less space.
			</p>
			<p>
				Big-O Notation describes the complexity of an alghoritm using algebraic
				terms.
			</p>

			<ul>
				Time complexity
				<li>Without loops: O(1) - Calculation not dependent on input size</li>
				<li>Loop: O(n) - Linear</li>
				<li>Double loops: O(n^2) - Quadratic (3n^2 + 5n + 11)</li>
				<li>Tripple loops: O(n^3) - Cubic</li>
				<li>
					Input size reduces by half every iteration: O(logn) - Logarithmic
				</li>
			</ul>

			<>
				<p>Objects and arrays - Big-O</p>
				<ul>
					Objects
					<li>Insert - O(1)</li>
					<li>Remove - O(1)</li>
					<li>Access - O(1) F.e: person.FirstName</li>
					<li>Search - O(n)</li>
					<li>Object.values() - O(n)</li>
					<li>Object.entries() - O(n)</li>
				</ul>
				<ul>
					Arrays
					<li>Insert/remove at end - O(1)</li>
					<li>Insert/remove at beginning - O(n)</li>
					<li>Access - O(1)</li>
					<li>Search - O(n)</li>
					<li>Push / pop - O(1)</li>
					<li>Shift / unshift / concat / slice / splice - O(n)</li>
					<li>forEach / map / filter / reduce - O(n)</li>
				</ul>
			</>

			<button onClick={() => Router.push('/')}>Go back home</button>
		</div>
	);
}
