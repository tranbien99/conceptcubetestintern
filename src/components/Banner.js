import React from 'react'
import styled from 'styled-components'

import BannerImg from '../assets/main-banner.png'

const MainBanner = styled.img`
	width: 100%;
  	margin: 75px 0 0;
  	object-fit: contain;
`;

const Banner = () => {
	return (
		<>
			<MainBanner src={BannerImg}/>		
		</>
	)
}

export default Banner
