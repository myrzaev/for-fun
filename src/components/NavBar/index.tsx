import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './styles.module.scss';
import NextLink from 'next/link';
import Logo from '../Logo';
import classNames from 'classnames';

const LinkItem = ({ href, path, children, style }) => {
	const active = path === href;

	return (
		<NextLink href={href} style={style}>
			<a
				className={classNames(styles.link, {
					[styles.activeLink]: active
				})}
			>
				{children}
			</a>
		</NextLink>
	);
};

function NavBar({ path }) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsMounted(true);
		}, 100);

		return () => {
			clearTimeout(timeout);
		};
	});

	const data = [
		{
			label: 'algorithms',
			path: '/algorithms'
		},
		{
			label: 'data structures',
			path: '/data-structure'
		},
		{
			label: 'AmazonWebServices',
			path: '/aws'
		},
		{
			label: 'Object-oriented programming',
			path: '/blog/oop'
		},
		{
			label: 'This bind',
			path: '/blog/this/bind'
		},
		{
			label: 'This call',
			path: '/blog/this/call'
		},
		{
			label: 'This apply',
			path: '/blog/this/apply'
		},
		{
			label: 'About',
			path: '/blog/about'
		},
		{
			label: 'Binary search',
			path: '/blog/binary-search'
		},
		{
			label: 'Hash table',
			path: '/blog/hash-table'
		},
		{
			label: 'Hybrid data structure',
			path: '/blog/hybrid-data-structure'
		},
		{
			label: 'Linked list',
			path: '/blog/linked-list'
		}
	];

	return (
		<div className={styles.header}>
			<TransitionGroup component={null}>
				{isMounted && (
					<CSSTransition classNames="fadeup" timeout={2000}>
						<Logo />
					</CSSTransition>
				)}
			</TransitionGroup>

			<div className={styles.container}>
				<TransitionGroup component={null}>
					{isMounted &&
						data.map((item, i) => (
							<CSSTransition key={i} classNames="fadeup" timeout={2000}>
								<LinkItem
									style={{ transitionDelay: `${i + 1}00ms` }}
									href={item.path}
									path={path}
								>
									{item.label}
								</LinkItem>
							</CSSTransition>
						))}
				</TransitionGroup>
			</div>
		</div>
	);
}

export default NavBar;
