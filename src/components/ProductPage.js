import React from 'react'
import styled from 'styled-components'

import { ProductData } from '../data/ProductData';

import HeartIcon from '../assets/hearticon.png';
import Button from './Button';

const ProductMain = styled.div`
	width: 100%;
	background-color: #fff;
`;

const ProductWrapper = styled.div`
	margin: 142px 174px;
	width: 1572px;
	display: grid;
	grid-gap: 72px 18px;
	grid-template-columns: 300px 300px 300px 300px 300px;
`;

const ProductItemWraper = styled.div`
	width: 300px;
	height: 295px;
	margin-bottom: 64px;
`;

const ProductImage = styled.img`
	width: 300px;
	height: 300px;
	object-fit: contain;
`;

const ProductTitle = styled.span`
	width: 274px;
	height: 19px;
	margin: 31px 0;
	font-size: 18px;
	font-weight: 600;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.94;
	letter-spacing: normal;
	text-align: left;
	color: #222222;
`;

const ProductProperty = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ProductPrice = styled.span`
	width: 81px;
	height: 14px;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 2.19;
	letter-spacing: normal;
	text-align: left;
	color: #222222;
`;

const ProductHeart = styled.div`
	padding-top: 1rem;
`;

const ProductHeartIcon = styled.img`
	width: 19px;
  	height: 16px;
	line-height: 2.19;
`;

const ProductHeartNumber = styled.span`
	margin-left: 1rem;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 2.19;
	letter-spacing: normal;
	text-align: left;
	color: #666666;
`;

const ProductPage = () => {
	return (
		<>
			<ProductMain>
				<ProductWrapper>
					{ProductData.map((item, index) => (
						<ProductItemWraper key={index}>
							<ProductImage src={item.img}/>
							<ProductTitle>[what happen] How to create </ProductTitle>
							<ProductProperty>
								<ProductPrice>2,500won</ProductPrice>
								<ProductHeart >
									<ProductHeartIcon src={HeartIcon}></ProductHeartIcon>
									<ProductHeartNumber>236</ProductHeartNumber>
								</ProductHeart>
							</ProductProperty>
						</ProductItemWraper>
					))}
				</ProductWrapper>
				<Button />
			</ProductMain>
		</>
	)
}

export default ProductPage
