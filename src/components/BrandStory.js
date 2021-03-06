import React from 'react'
import styled from 'styled-components'

import Img from '../assets/img.png'
import Button from './Button';

import Img1 from '../assets/object-01.png'
import Img2 from '../assets/object-02.png'
import Img3 from '../assets/object-03.png'
import Img4 from '../assets/object-04.png'
import Img5 from '../assets/object-05.png'
import Img6 from '../assets/object-06.png'
import Img7 from '../assets/object-07.png'

const BrandStoryPage = styled.div`
	width: 100%;
	padding: 61px 0 170px;
	mix-blend-mode: multiply;
	background-color: #0565bb;
	position: relative
`;

const BrandStoryTitle = styled.span`
	display: block;
	width: 400px;
	height: 34px;
	margin: 149px auto 0 auto;
	font-size: 45px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: 4.5px;
	text-align: left;
	color: #fcd32a;
`;

const BrandStoryDesc = styled.span`
	display: block;
	width: 720px;
	height: 45px;
	margin: 40px auto 77px auto;
	font-size: 16px;
	font-weight: 300;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.88;
	letter-spacing: normal;
	text-align: center;
	color: #fcd32a;
`;

const MainBrandStoryWrapper = styled.div`
	width: 1253px;
	height: 442px;
	margin: 0 auto;
	border-top: 24px solid #222222;
	display: flex;
	position: relative;
	z-index: 5;
`;

const BrandStoryLeft = styled.img`
	width: 612px;
	height: 418px;
	object-fit: contain;

`;

const BrandStoryRight = styled.div`
	width: 641px;
	height: 418px;
	border: solid 3px #222222;
	background-color: #fff;
`;

const BrandStoryRightTitle = styled.div`
	width: 467px;
	height: 20px;
	margin: 20px 0 39px 44px;
	font-size: 25px;
	font-weight: 800;
	font-stretch: normal;
	font-style: normal;
	line-height: 2.4;
	letter-spacing: normal;
	text-align: left;
	color: #333333;
`;

const BrandStoryRightDesc = styled.div`
	width: 528px;
	height: 135px;
	margin: 39px 0 0 44px;
	font-size: 16px;
	font-weight: 300;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.88;
	letter-spacing: normal;
	text-align: left;
	color: #333333;
`;

const Object1 = styled.img`
	position: absolute;
	top: 220px;
	left: 169px;
	object-fit: contain;
`;

const Object2 = styled.img`
	position: absolute;
	top: 61px;
	right: 256px;
	object-fit: contain;
`;

const Object3 = styled.img`
	position: absolute;
	top: 148px;
	right: 165px;
	object-fit: contain;
`;

const Object4 = styled.img`
	position: absolute;
	top: 250px;
	right: -75px;
	object-fit: contain;
`;

const Object5 = styled.img`
	position: absolute;
	top: 600px;
	right: -30px;
	object-fit: contain;
`;

const Object6 = styled.img`
	position: absolute;
	top: 500px;
	left: 0px;
	object-fit: contain;
`;

const Object7 = styled.img`
	position: absolute;
	top: 580px;
	left: 180px;
	object-fit: contain;
`;

const BrandStory = () => {
	return (
		<>
			<BrandStoryPage>
				<BrandStoryTitle>BRAND STORY</BrandStoryTitle>
				<BrandStoryDesc>???????????? ???????????? ???????????? ??? ??? ??? ?????? ??????????????????. ??????????????? ???????????????,  ?????? ?????????
					????????? ??? ????????????. ???????????? ????????? ?????? ??? ?????????  ??????????????????. ???????????? ??? ??? ??? ?????? ??????????????????.
				</BrandStoryDesc>
				
				<MainBrandStoryWrapper>
					<BrandStoryLeft src={Img}/>
					<BrandStoryRight>
						<BrandStoryRightTitle>What Happened???s Brand story</BrandStoryRightTitle>
						<BrandStoryRightDesc>????????? ?????? ?????????, ?????????. ?????? ??????????????? ?????? ???????????? ????????? ?????? ?????? 
							???????????????. ??? ????????? ?????? ?????? ?????? ????????? ???????????? ????????????, ?????????. ??? ??????
							????????? ????????? ????????? ????????? ?????????. ?????? ?????? ???????????? ??????. ????????? ?????? ??????
							????????? ???????????? ????????? ????????? ?????????. ????????? ????????? ?????? ?????? ????????? ??? ?????????
							???????????? ????????? ?????? ???????????? ??????????????? ????????? ??????. 
						</BrandStoryRightDesc>
						<Button/>
					</BrandStoryRight>
				</MainBrandStoryWrapper>

				<Object1 src={Img1} />
				<Object2 src={Img2} />
				<Object3 src={Img3} />
				<Object4 src={Img4} />
				<Object5 src={Img5} />
				<Object6 src={Img6} />
				<Object7 src={Img7} />
			</BrandStoryPage>
		</>
	)
}

export default BrandStory
