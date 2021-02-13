import React, { useState } from 'react';

const styles = './HorizontalCards.module.scss';

export default function NavBar() {
	const [navbar, setNavbar] = useState(false);
	const translate = (elem, y) => {
		const top = parseInt(css(elem, 'top'), 10);
		const dy = top - y;
		let i = 1;
		const count = 20;
		const delay = 20;

		const loop = () => {
			if (i >= count) {
				return;
			}

			i += 1;
			elem.style.top = (top - (dy * i) / count).toFixed(0) + 'px';
			setTimeout(() => loop(), delay);
		};

		loop();
	};

	const css = (element, property) => {
		return window.getComputedStyle(element, null).getPropertyValue(property);
	};

	const burgerToggle = () => {
		let linksEl = document.querySelector('.narrowLinks');
		if (navbar) {
			translate(linksEl, -156);
			setNavbar(false);
		} else {
			translate(linksEl, 0);
			setNavbar(true);
		}
	};

	return (
		<>
			<nav className='navbar'>
				<div className='navWide'>
					<div className='container'>
						<div className='left'>
							<a href='/menu' className='link'>
								Menu
							</a>
						</div>
						<a href='/' className='brand'>
							<img src='/assets/logo.jpeg' alt='logo' className='nav-logo' />
						</a>
						<div className='right'>
							<a href='/mapa' className='link'>
								Mapa
							</a>
							<a href='#' className='link'>
								Link 2
							</a>
						</div>
					</div>
				</div>
				<div className='navNarrow'>
					<div className='container'>
						<a href='/' className='brand'>
							<img src='/assets/logo.jpeg' alt='logo' className='nav-logo' />
						</a>
						<i className='fa fa-bars fa-2x' onClick={burgerToggle}></i>
					</div>
					<div className='narrowLinks'>
						<a href='/menu' onClick={burgerToggle} className='link'>
							Menu
						</a>
						<a href='/mapa' onClick={burgerToggle} className='link'>
							Mapa
						</a>
						<a href='#' onClick={burgerToggle} className='link'>
							Link 2
						</a>
					</div>
				</div>
			</nav>
		</>
	);
}
