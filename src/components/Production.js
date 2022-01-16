import React from 'react'
import styled from 'styled-components'

import ProductionImg from '../assets/introduction-bg.png';

const ProductionBanner = styled.div`
	width: 100%;
  	height: 576px;
	background-image: url(${ProductionImg});
  	object-fit: contain;
	position: relative;
`;

const ProductionTitle = styled.span`
	position: absolute;
	width: 580px;
	height: 37px;
	margin: 174px 16px 132px 173px;
	font-size: 50px;
	font-weight: 800;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.2;
	letter-spacing: 5px;
	text-align: left;
	color: #fff;
}
`;

const ProductionContent = styled.span`
	position: absolute;
	width: 667px;
	height: 125px;
	margin: 270px 16px 132px 173px;
	font-size: 20px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.75;
	letter-spacing: normal;
	text-align: left;
	color: #fff;
`;

const Production = () => {
	return (
		<>
			<ProductionBanner >
				<ProductionTitle>WHAT HAPPENED!</ProductionTitle>
				<ProductionContent>How to create mobile-optimized videos in minutes. Not a designer, 
					every team makes a lot of videos Can be trimmed. Take the first 
					step to your brand's success. How to create 
					mobile-optimized videos in minutes.
				</ProductionContent>	
			</ProductionBanner>
		</>
	)
}

export default Production
