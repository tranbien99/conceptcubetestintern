import React from 'react'
import styled from 'styled-components'

import BesBg from '../assets/bes-bg.png'
import BestProduct1 from '../assets/best-image-01.png'
import BestProduct2 from '../assets/best-image-02.png'
import BestProduct3 from '../assets/best-image-03.png'
import ProductionRanking1 from '../assets/producticon-01.png'
import ProductionRanking2 from '../assets/producticon-02.png'
import ProductionRanking3 from '../assets/producticon-03.png'
import IconGo from '../assets/go-icon_3.png'

const BestProductItems = [
	{
		img: BestProduct1,
		ranking: ProductionRanking1,
		id: 1
	},
	{
		img: BestProduct2,
		ranking: ProductionRanking2,
		id: 2
	},
	{
		img: BestProduct3,
		ranking: ProductionRanking3,
		id: 3
	}
]

const BestProductWrapper = styled.div`
	background-image: url(${BesBg});
	position: relative;
	width: 100%;
	height: 1073px;
	padding: 150px 175px 154px 176px;
	object-fit: contain;
`;

const BestProductTitle = styled.span`
	display: block;
	width: 100%;
	height: 37px;
	margin: 0 29px 49px;
	font-size: 50px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.2;
	letter-spacing: 5px;
	text-align: center;
	color: #f96400;
`;

const BestProductContent = styled.span`
	display: block;
	width: 680px;
	height: 52px;
	margin: 0 auto;
	font-size: 20px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.6;
	letter-spacing: normal;
	text-align: center;
	color: #f96400;
`;

const BestProductItemWrapper = styled.div`
	position: absolute;
	top: 362px;
	bottom: 197px;
	left: 176px;
	width: 1569px;
	height: 514px;
	display: flex;
`;

const BestProductItem = styled.div`
	position: relative;
	width: 523px;
	height: 514px;
`;

const BestProductImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	position: relative;
`;

const BestProductRanking = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(0, -50%);
`

const BestProductBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	bottom: 0;
	margin: 0 auto;
	width: 369px;
	height: 79px;
	padding: 7px 8px 6px 27px;
	border: solid 3px #020001;
	background-color: #fff;
	transform: translate(25%, 50%);
`;

const BestProductText = styled.span`
	width: 188px;
	height: 44px;
	font-size: 20px;
	font-weight: 800;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.25;
	letter-spacing: normal;
	text-align: left;
	color: #222222;
`;

const BestProductGo = styled.img`
	width: 65px;
	height: 66px;
	object-fit: contain;
`;

const BestProduct = () => {
	return (
		<>
			<BestProductWrapper>
				<BestProductTitle>Best Product</BestProductTitle>
				<BestProductContent>How to create mobile-optimized videos in minutes. Not a designer, 
					every team makes a lot of videos Can be trimmed. Take the first 
				</BestProductContent>
				<BestProductItemWrapper>
					
						{BestProductItems.map((item) => (
							<>
								<BestProductItem>
									<BestProductImg src={item.img} key={item.id} />
									<BestProductRanking src={item.ranking} />
									<BestProductBox>
										<BestProductText>How to create mobile-optimized</BestProductText>
										<BestProductGo src={IconGo}/>
									</BestProductBox>
								</BestProductItem>	
							</>	
						))}					
				</BestProductItemWrapper>
			</BestProductWrapper>
		</>
	)
}

export default BestProduct
