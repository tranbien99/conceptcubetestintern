import React from 'react'
import styled from 'styled-components'
import Button from './Button';

import Img1 from '../assets/news-img-01.png'
import Img3 from '../assets/news-img-03.png'
import Img4 from '../assets/news-img-04.png'
import Img5 from '../assets/news-img-05.png'

import Obj2 from '../assets/news-object-02.png'
import Obj3 from '../assets/news-object-03.png'
import Obj4 from '../assets/news-object-04.png'
import Obj5 from '../assets/news-object-05.png'
import Obj6 from '../assets/news-object-06.png'

const HappenedsIssuePage = styled.div`
	width: 100%;
	background-color: #fccb05;
	height: 1200px;
	opacity: 0.85;
	mix-blend-mode: multiply;
	position: relative;
`;

const HappenedsIssueTitle = styled.span`
	display: block;
	width: 600px;
	height: 34px;
	margin: 0 auto;
	padding: 150px 0 40px 0;
	font-size: 45px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: 4.5px;
	text-align: left;
	color: #110e03;
	text-transform: uppercase;
	text-align: center;
`;

const HappenedIssueDesc = styled.span`
	display: block;
	width: 720px;
	height: 45px;
	margin: 60px auto 0 auto;
	font-size: 16px;
	font-weight: 300;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.88;
	letter-spacing: normal;
	text-align: center;
	color: #110e03;
`;

const HappenedsIssueMainWrapper = styled.div`
	width: 100%;
	height: 480px;
	display: flex;
`;

const HappenedsIssueItem1 = styled.div`
	width: 387px;
	height: 480px;
	padding: 87px 101px 85px 97px;
	border: solid 3px #222;
	background-color: #ff5500;
`;

const HappenedsIssueItem2 = styled.div`
	width: 387px;
	height: 480px;
	border: solid 3px #222;
`;

const HappenedsIssueItem1Title = styled.span`
	display: block;
	width: 100%;
	height: 97px;
	font-size: 55px;
	font-weight: 800;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.04;
	letter-spacing: normal;
	text-align: center;
	color: #110e03;
`;

const HappenedsIssueItem1Img = styled.img`
	width: 148px;
	height: 148px;
	margin: 0 auto;
	object-fit: contain;
`;

const HappenedsIssueImg = styled.img`
	width: 387px;
  	height: 405px;
`;

const HappenedsIssueTitle235 = styled.div`
	height: 72px;
	width: 100%;
	text-align: center;
	font-size: 30px;
	font-weight: 700;
	font-stretch: normal;
	line-height: 74px;
	letter-spacing: normal;
	color: #fff;
	background-color: #222;
`;

const HappenedsIssueTitle4 = styled.div`
	height: 72px;
	width: 100%;
	text-align: center;
	font-size: 30px;
	font-weight: 700;
	font-stretch: normal;
	line-height: 74px;
	letter-spacing: normal;
	color: #fff;
	background-color: #ff5500;
`;

const Object2 = styled.img`
	position: absolute;
	top: 163px;
	right: 68px;
	width: 119px;
	height: 111px;
	margin: 25px 68px 60px 166px;
	object-fit: contain;
`;

const Object3 = styled.img`
	position: absolute;
	bottom: 50px;
	left: 65px;
	width: 167px;
	height: 169px;
	margin: 360px 14px 0 230px;
	object-fit: contain;
`;

const Object4 = styled.img`
	position: absolute;
	bottom: 550px;
	left: 400px;
	width: 111px;
	height: 59px;
	object-fit: contain;

`;

const Object5 = styled.img`
	position: absolute;
	bottom: 50px;
	right: 350px;
	width: 133px;
	height: 100px;
	object-fit: contain;
`;

const Object6 = styled.img`
	position: absolute;
	top: 43px;
	right: 70px;
	width: 95px;
	height: 95px;
	margin: 0 70px 20px 188px;
	object-fit: contain;
}
`;

const HappenedsIssue = () => {
	return (
		<>
			<HappenedsIssuePage>
				<HappenedsIssueTitle>Happened's issue</HappenedsIssueTitle>
				<HappenedIssueDesc>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
					다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
				</HappenedIssueDesc>
				<Button/>
				<HappenedsIssueMainWrapper>
					<HappenedsIssueItem1>
						<HappenedsIssueItem1Title>WHPN</HappenedsIssueItem1Title>
						<HappenedsIssueItem1Title>ISSUE</HappenedsIssueItem1Title>
						<HappenedsIssueItem1Img src={Img1} />
					</HappenedsIssueItem1>
					<HappenedsIssueItem2>
						<HappenedsIssueTitle235>B BRAND</HappenedsIssueTitle235>
						<HappenedsIssueImg src={Img5}/>
					</HappenedsIssueItem2>
					<HappenedsIssueItem2>
						<HappenedsIssueTitle235>C BRAND</HappenedsIssueTitle235>
						<HappenedsIssueImg src={Img3}/>
					</HappenedsIssueItem2>
					<HappenedsIssueItem2>
						<HappenedsIssueTitle4>C BRAND</HappenedsIssueTitle4>
						<HappenedsIssueImg src={Img4}/>
					</HappenedsIssueItem2>
					<HappenedsIssueItem2>
						<HappenedsIssueTitle235>D BRAND</HappenedsIssueTitle235>
						<HappenedsIssueImg src={Img5}/>
					</HappenedsIssueItem2>
				</HappenedsIssueMainWrapper>
				<Object2 src={Obj2} />
				<Object3 src={Obj3} />
				<Object4 src={Obj4} />
				<Object5 src={Obj5} />
				<Object6 src={Obj6} />
			</HappenedsIssuePage>
		</>
	)
}

export default HappenedsIssue
