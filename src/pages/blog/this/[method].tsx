import { useRouter } from 'next/router';
import Router from 'next/router';

export default function This() {
	const router = useRouter();

	const cat = {
		name: 'Mojo',
		speak(sound) {
			return `${this.name} says "${sound}"`;
		}
	};

	cat.speak('Meow');

	//BIND
	const catSpeakWrong = cat.speak; // The reason this happens is because cat context has been lost
	// catSpeakWrong('Test') // TypeError: Cannot read properties of undefined (reading 'name')

	const catSpeak = cat.speak.bind(cat); // Simple bind
	const catSpeak2 = cat.speak.bind(null); // It will be work because 18 line (cat) was initially binded

	const catSpeakWithAnotherContext = cat.speak.bind({ name: 'Ginger' }); // Or we can bind another context

	const catMeows = cat.speak.bind(cat, 'Meoooooowssss.'); // Or provide props to speak method
	//BIND

	//CALL
	const catSpeak3 = cat.speak;
	catSpeak3.call(cat, 'Meow'); // with string
	//CALL

	//APPLY
	const catSpeak4 = cat.speak;
	catSpeak4.apply(cat, ['Meow']); // with array format

	const test = (...args) => {
		return catSpeak3.apply(cat, args);
	};
	//APPLY

	return (
		<div className="container">
			<h1>This {router.query.method}</h1>
			<p>{cat.speak('Meow')}</p>
			<p>{catSpeak('meooow')}</p>
			<p>{catSpeakWithAnotherContext('eeeeeehaaaa')}</p>
			<p>{catMeows()}</p>
			<p>{test('Wof-Wof')}</p>
			<button onClick={() => Router.push('/')}>Go back home</button>
		</div>
	);
}
