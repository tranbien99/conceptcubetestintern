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
				<BrandStoryDesc>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
					다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
				</BrandStoryDesc>
				
				<MainBrandStoryWrapper>
					<BrandStoryLeft src={Img}/>
					<BrandStoryRight>
						<BrandStoryRightTitle>What Happened’s Brand story</BrandStoryRightTitle>
						<BrandStoryRightDesc>청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 
							봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
							긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
							인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
							아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. 
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
