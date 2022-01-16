import React from 'react'
import styled from 'styled-components'
import Button from './Button';

import Obj from '../assets/video.png'
import Obj1 from '../assets/video-object-01.png'
import Obj2 from '../assets/video-object-02.png'
import Obj3 from '../assets/video-object-03.png'
import Obj4 from '../assets/video-object-04.png'
import Obj5 from '../assets/video-object-05.png'
import Obj6 from '../assets/video-object-06.png'
import Obj7 from '../assets/video-object-07.png'
import Obj8 from '../assets/video-object-08.png'
import Obj9 from '../assets/video-object-09.png'


const WhatHappenedPage = styled.div`
	width: 100%;
	height: 1700px;
	background-color: #fff;
	position: relative;
`;

const WhatHappenedTitle = styled.span`
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

const WhatHappenedDesc = styled.span`
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

const Object = styled.img`
	position: absolute;
	top: 560px;
	left: 50%;
	width: 1251px;
  	height: 735px;
	transform: translateX(-50%);
	z-index: 3;
`;

const Object1 = styled.img`
	position: absolute;
	bottom: 147px;
	left: 348px;
	width: 411px;
	height: 204px;
	object-fit: contain;
	z-index: 2;
`;
const Object2 = styled.img`
	width: 90px;
  	height: 83px;
	position: absolute;
	left: 1182px;
	bottom: 276px;
	object-fit: contain;
`;

const Object3 = styled.img`
	width: 146px;
	height: 146px;
	object-fit: contain;
	position: absolute;
	left: 223px;
	bottom: 315px;
	z-index: 1;
`;

const Object4 = styled.img`
	width: 262px;
  	height: 512px;
	object-fit: contain;
	position: absolute;
	left: -150px;
	bottom: 860px;
`;

const Object5 = styled.img`
	width: 146px;
  	height: 114px;
	object-fit: contain;
	position: absolute;
	left: 226px;
	top: 0;
`;

const Object6 = styled.img`
	width: 130px;
  	height: 130px;
	object-fit: contain;
	position: absolute;
	right: 244px;
	top: 270px;
	z-index: 2;
`;
const Object7 = styled.img`
	width: 158px;
  	height: 158px;
	object-fit: contain;
	position: absolute;
	right: 138px;
	top: 156px;
`;

const Object8 = styled.img`
	width: 395px;
  	height: 513px;
	object-fit: contain;
	position: absolute;
	right: -30px;
	bottom: 241px;
	z-index: 2;
`;

const Object9 = styled.img`
	width: 175px;
  	height: 315px;
	object-fit: contain;
	position: absolute;
	right: -100px;
	top: 856px;
	z-index: 1;
`;

const WhatHappened = () => {
	return (
		<>
			<WhatHappenedPage>
				<WhatHappenedTitle>WHAT HAPPENED</WhatHappenedTitle>
				<WhatHappenedDesc>How to create mobile-optimized videos in minutes. Not a designer, 
					every team makes a lot of videos Can be trimmed. Take the first 
				</WhatHappenedDesc>
				<Button/>
				<Object src={Obj} />
				<Object1 src={Obj1} />
				<Object2 src={Obj2} />
				<Object3 src={Obj3} />
				<Object4 src={Obj4} />
				<Object5 src={Obj5} />
				<Object6 src={Obj6} />
				<Object7 src={Obj7} />
				<Object8 src={Obj8} />
				<Object9 src={Obj9} />
			</WhatHappenedPage>
		</>
	)
}

export default WhatHappened
