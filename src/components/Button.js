import React from 'react'
import styled from 'styled-components'

const ButtonSeeMore = styled.div`
	width: 199px;
	height: 60px;
	margin: 116px auto 143px auto;
	padding: 21px 36px 21px 37px;
	border: solid 3px #020001;
	background-color: transparent;
	font-size: 20px;
	font-weight: 800;
	font-stretch: normal;
	font-style: normal;
	line-height: 0.75;
	letter-spacing: normal;
	text-align: center;
	color: #222222;
	cursor: pointer;

	&:hover {
		transform: translateY(-2px);
	}
`;

const Button = () => {
	return (
		<>
			<ButtonSeeMore>SEE MORE</ButtonSeeMore>
		</>
	)
}

export default Button
