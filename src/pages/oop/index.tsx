import Image from 'next/image';
import fp from './assets/fp.png';
import oop from './assets/oop.png';
import inheritance from './assets/inheritance.png';
import poly from './assets/poly.png';
import morphism from './assets/morphism.png';

function OOP() {
	return (
		<div className="container">
			<div>
				<p>
					Encapsulation - we group related variables and functions that operate
					on them into objects
					<b>Reduce complexity + increase reusability</b>
				</p>
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<Image src={fp} alt="fp" width={400} height={150} />
					<Image src={oop} alt="oop" width={400} height={150} />
				</div>
			</div>
			<div>
				<p>
					Abstraction - we hide some properties and methods and show only
					essentials This gives us Simpler interface
					<b>Reduce complexity + reduce the Impact of change</b>
				</p>
			</div>
			<div>
				<p>
					Inheritance - is a mechanism that allows you to eliminate extra code
					<b>Eliminate extra code</b>
				</p>
				<Image src={inheritance} alt="inheritance" width={400} height={150} />
			</div>
			<div>
				<p>
					Polymorphism - is a technique that allows you to get rid of a long if
					and else or switch operators{' '}
					<b>Refactor ugly if/esle and switch/case operators</b>
				</p>
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<div>
						<p>
							If you want to render multiple HTML elements. Code would probably
							look like this
						</p>
						<Image src={poly} alt="poly" width={400} height={150} />
					</div>
					<div>
						<p>
							We can implement a render method in each of these object and
							render method will behave differently depending on the type of the
							object you're referencing.
						</p>
						<Image src={morphism} alt="morphism" width={400} height={150} />
					</div>
				</div>
			</div>
			<h1>The best functions are those with no parameters!</h1>
		</div>
	);
}

export default OOP;
