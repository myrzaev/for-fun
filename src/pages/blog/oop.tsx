import Head from 'next/head';
import Router from 'next/router';

export default function OOP() {
	// Способы создания объекта

	// 1. Функция-конструктор
	// Конструкторами являются функции, в которых используется ключевое слово «this».
	function Human(firstName, lastName) {
		// Определяем свойства
		this.firstName = firstName;
		this.lastName = lastName;

		// Определяем методы
		this.sayHello = function () {
			console.log(`Hello, I'm ${firstName}`);
		};
	}

	// Определяем метод в прототипе
	Human.prototype.sayBye = function () {
		console.log(`Bye, I'm ${this.firstName}`);
	};

	Object.assign(Human.prototype, {
		method1() {
			console.log(`It's method N1`);
		},
		method2() {
			console.log(`It's method N2`);
		},
		method3() {
			console.log(`It's method N3`);
		}
	});

	// this позволяет сохранять и получать доступ к уникальным значениям создаваемого экземпляра.
	// 2. Экземпляры создаются с помощью ключевого слова «new».

	const chris = new Human('Chris', 'Coyier');
	console.log(chris);

	// 3. Класс
	// Классы являются абстракцией («синтаксическим сахаром») над функциями-конструкторами.
	// Они облегчают задачу создания экземпляров.
	class Human1 {
		firstName: string;
		lastName: string;
		sayHello: () => void;

		constructor(firstName, lastName) {
			this.firstName = firstName;
			this.lastName = lastName;

			this.sayHello = function () {
				console.log(`Hello, I'm ${firstName}`);
			};
		}

		// Добавляется сразу в прототип
		sayBye() {
			console.log(`Bye, I'm ${this.firstName}`);
		}
	}

	const chris1 = new Human1('Chris', 'Coyier');

	console.log('chris1', chris1);

	// 4. Связывание объектов
	// В данном подходе мы определяем проект как обычный объект.
	// Затем с помощью метода (который, как правило, называется init, но это не обязательно, в отличие от constructor в классе) мы инициализируем экземпляр.
	const Human2 = {
		init(firstName, lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.sayHello = function () {
				console.log(`Hello, I'm ${firstName}`);
			};
			// Код можно немного улучшить, если вернуть this в init.
			return this;
		},
		sayBye() {
			console.log(`Bye, I'm ${this.firstName}`);
		}
	};
	// Для создания экземпляра используется Object.create. После создания экземпляра вызывается init.
	const chris2 = Object.create(Human2);
	chris2.init('Chris', 'Coyier');

	console.log('chris2', chris2);

	// 5. Фабричная функция
	// Фабричная функция — это функция, возвращающая объект. Можно вернуть любой объект.
	// Можно даже вернуть экземпляр класса или связывания объектов.
	function Human3(firstName, lastName) {
		return {
			firstName,
			lastName,
			sayHello() {
				console.log(`Hello, I'm ${firstName}`);
			}
		};
	}

	//Для создания экземпляра нам не требуется ключевое слово «new». Мы просто вызываем функцию.
	const chris3 = Human3('Chris', 'Coyier');

	console.log('chris3', chris3);

	//INGERITANCE
	class Developer extends Human1 {
		code(thing) {
			console.log(`${this.firstName} coded ${thing}`);
		}
	}

	const tim = new Developer('Tim', 'Myrzaev');
	console.log(tim);

	const skills = {
		code(thing) {
			/* ... */
		},
		design(thing) {
			/* ... */
		},
		sayHello() {
			/* ... */
		}
	};

	class DesignerDeveloper {
		firstName: string;
		lastName: string;

		constructor(firstName, lastName) {
			this.firstName = firstName;
			this.lastName = lastName;

			Object.assign(this, {
				code: skills.code,
				design: skills.design,
				sayHello: skills.sayHello
			});
		}
	}

	const timur = new DesignerDeveloper('Timur', 'Myrzaev');
	console.log(timur);

	return (
		<div className="container">
			<Head>
				<title>Object-oriented programming</title>
			</Head>
			<h1>Object-oriented programming</h1>
			<div>
				<p>
					Предварительный вывод На основе изученного материала можно сделать
					несколько выводов. Это мое личное мнение. Классы лучше конструкторов,
					поскольку в них легче определять несколько методов. Связывание
					объектов кажется странным из-за необходимости использовать
					Object.create. Я постоянно забывал об этом при изучении данного
					подхода. Для меня это было достаточной причиной отказаться от его
					дальнейшего использования. Классы и ФФ использовать проще всего.
					Проблема состоит в том, что в ФФ нельзя использовать прототипы. Но,
					как я отметил ранее, это не имеет особого значения. Далее мы будем
					сравнивать между собой классы и ФФ как два лучших способа создания
					объектов в JavaScript.
				</p>
			</div>

			<div>
				<h1>НАСЛЕДОВАНИЕ - INHERITANCE</h1>
				<p>
					В JavaScript наследование означает передачу свойств от родительского
					объекта к дочернему, т.е. от проекта к экземпляру.
				</p>
				<p>Это происходит двумя способами:</p>
				<ul>
					<li>с помощью инициализации экземпляра</li>
					<li>с помощью цепочки прототипов</li>
				</ul>
			</div>

			<div>
				<p>Перезапись родительского метода</p>
				<p>
					Иногда возникает необходимость перезаписать родительский метод внутри
					подкласса. Это можно сделать следующим образом:
				</p>
				<ul>
					<li>создать метод с тем же именем</li>
					<li>вызвать родительский метод (опционально)</li>
					<li>создать новый метод в подклассе</li>
				</ul>
			</div>

			<div>
				<h2>Наследование против композиции</h2>
				<p>
					Разговор о наследовании редко обходится без упоминания композиции.
					Эксперты вроде Eric Elliot считают, что всегда, когда это возможно,
					следует использовать композицию.
				</p>
				<h3>Что же такое композиция?</h3>
				<h4>
					Композицию легче всего объяснить на примере. Допустим, у нас имеется
					два подкласса, Developer и Designer. Дизайнеры умеют разрабатывать
					дизайн, а разработчики — писать код. Оба наследуют от класса «Human».
				</h4>
				<p>
					Теперь предположим, что мы хотим создать третий подкласс. Этот
					подкласс должен быть смесью дизайнера и разработчика — он должен уметь
					как разрабатывать дизайн, так и писать код. Назовем его
					DesignerDeveloper (или, если угодно, DeveloperDesigner).
				</p>
				<p>Как нам его создать?</p>
				<p>
					Проблема ромба может быть решена с помощью Object.assign, если мы
					отдадим одному объекту приоритет над другим. Однако, в JavaScript не
					поддерживается множественное наследование.
				</p>
				// Не работает
				<h3>class DesignerDeveloper extends Developer, Designer {'{...}'}</h3>
				<p>Предварительный вывод относительно наследования</p>
				<p>
					Наследование и композиция могут использоваться как в классах, так и в
					ФФ. В ФФ композиция выглядит «чище», но это незначительное
					преимущество перед классами.
				</p>
			</div>

			<h1>Инкапсуляция</h1>

			<button onClick={() => Router.push('/')}>Go back home</button>
		</div>
	);
}
