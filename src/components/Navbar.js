import React from 'react'
import styled from 'styled-components'

import LogoName from '../assets/logo.png'
import MenuBar from '../assets/menu-bars.svg'

const Nav = styled.nav`
	height: 80px;
	width: 100%;
	background: #111111;
	padding: 24px 120px 27px 97px;
	display: flex;
	justify-content: space-between;
	align-items: center;	
	position: fixed;
	z-index: 10;
`;

const Logo = styled.img`
	width: 226px;
  	height: 26px;
  	object-fit: contain;
	margin: 0 400px 0 0;
`;

const MenuBars = styled.img`
	display: none;

	@media screen and (max-width: 768px) {
		color: #fff;
		display: block;
	}
`;

const NavMenu = styled.div`
	color: #fff;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	& span {
		height: 11px;
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1;
		letter-spacing: normal;
		text-align: center;
		cursor: pointer;

		&:hover {
			opacity: 0.8;
		}

		&:nth-of-type(3) {
			&::after {
				content: "";
				border-right: 1px solid #fff;
				margin-left: 3rem;
			}
		}
		
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<Logo src={LogoName}/>
			<MenuBars src={MenuBar}/>
			<NavMenu>
				<span>INTRODUCTION</span>
				<span>SOLUTION</span>
				<span>RATEPLAN</span>
				<span>LOGIN</span>
				<span>APPLY FOR FREE USE</span>
			</NavMenu>
		</Nav>
	)
}

export default Navbar
