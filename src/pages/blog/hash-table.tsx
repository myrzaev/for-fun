import Head from 'next/head';
import Router from 'next/router';
import hashTableCache from '../assets/images/hash-table-cache.png';
import hashTableCacheCode from '../assets/images/hash-table-cache-code.png';

export default function HashTable() {
	const hashTable = {
		'google.com': '74.125.239.133',
		'facebook.com': '173.252.120.6',
		'scribd.com': '23.235.47.175'
	};

	const ht = new Map();

	console.log(ht);

	return (
		<div className="container">
			<Head>
				<title>Hash table</title>
			</Head>
			<h1>Hash table</h1>
			<p>
				A hash table has keys and values. In the book hash, the names of produce
				are the keys, and their prices are the values. A hash table maps keys to
				values.
			</p>
			<p>
				Like phone book or for any website you go to, the address has to be
				translated to an IP address.
			</p>
			{hashTable['google.com']}
			{hashTable['facebook.com']}
			{hashTable['scribd.com']};
			<p>Checking for duplicates is very fast with a hash table.</p>
			<p>Example with voters.</p>
			{/* <img src={hashTableCache} alt="hash-table-cache" /> */}
			<p>This is called caching. It has two advantages:</p>
			<ul>
				<li>
					You get the web page a lot faster, just like when you memorized the
					distance from Earth to the Moon. The next time your niece asks you,
					you won't have to Google it. You can answer instantly.
				</li>
				<li>Facebook has to do less work.</li>
			</ul>
			{/* <img src={hashTableCacheCode} alt="hash-table-cache-code" /> */}
			<h2>
				Look at the average case for hash tables. Hash tables are as fast as
				arrays at searching (getting a value at an index). And they're as fast
				as linked lists at inserts and deletes. It's the best of both worlds!
				But in the worst case, hash tables are slow at all of those. So it's
				important that you don't hit worst-case performance with hash tables.
				And to do that, you need to avoid collisions. To avoid collisions, you
				need
			</h2>
			<li>
				<ul>A low load factor</ul>
				<ul>A good hash function</ul>
			</li>
			<button onClick={() => Router.push('/')}>Go back home</button>
		</div>
	);
}
