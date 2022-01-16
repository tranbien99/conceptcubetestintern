import React from 'react'
import styled from 'styled-components'

import SNSIcon1 from '../assets/snsicon-01.png'
import SNSIcon2 from '../assets/snsicon-02.png'
import SNSIcon3 from '../assets/snsicon-03.png'

const FooterPage = styled.div`
	width: 100%;
	height: 464px;
	padding: 49px 99px 113px;
	background-color: #fff;
`;

const FooterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const FooterLeft = styled.div``;

const FooterLeftTitle = styled.p`
	width: 150px;
	height: 15px;
	margin-bottom: 30px;
	font-family: Montserrat;
	font-size: 14px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: 2.14;
	letter-spacing: normal;
	text-align: left;
	color: #222;
`;
const FooterLeftDesc = styled.pre`
	width: 235px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 300;
	font-stretch: normal;
	font-style: normal;
	line-height: 2.14;
	letter-spacing: normal;
	text-align: left;
	color: #222;
`;

const FooterRight = styled.div`
	display: flex;
`;

const FooterRightColumn = styled.div``;

const FooterRightTitle = styled.p`
	width: 150px;
	height: 15px;
	margin-bottom: 30px;
	font-family: Montserrat;
	font-size: 14px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: 2.14;
	letter-spacing: normal;
	text-align: left;
	color: #222;
`;
const FooterRightDesc = styled.pre`
	width: 235px;
	font-family: NotoSansCJKkr;
	font-size: 14px;
	font-weight: 300;
	font-stretch: normal;
	font-style: normal;
	line-height: 2.14;
	letter-spacing: normal;
	text-align: left;
	color: #222;
`;

const CopyRightWrapper = styled.div`
	margin-top: 83px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CopyRightLeft = styled.div``;

const CopyRightLeftContent = styled.div`
	width: 900px;
	font-size: 14px;
	font-weight: 300;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.71;
	letter-spacing: normal;
	text-align: left;
	color: #a9a9a9;
`;
const CopyRightRight = styled.div``;

const CopyRightIcon = styled.img`
	width: 23px;
  	height: 23px;
	margin: 0 24px;
`;

const Footer = () => {
	return (
		<>
			<FooterPage>
				<FooterWrapper>
					<FooterLeft>
						<FooterLeftTitle>what happened</FooterLeftTitle>
						<FooterLeftDesc>
							[공지] 개인 정보 처리 방침 변경 사전 안내
						</FooterLeftDesc>
						<FooterLeftDesc>
							[공지] 29CM 강남 스토어 영업 종료
						</FooterLeftDesc>
						<FooterLeftDesc>
							[공지] 개인 정보 처리 방침 변경 사전 안내
						</FooterLeftDesc>
						<FooterLeftDesc>
							[공지] iOS 10 이하 버전 지원 중단 안내
						</FooterLeftDesc>
						<FooterLeftDesc>
							[공지] 개인 정보 처리 방침 변경 사전 안내
						</FooterLeftDesc>
					</FooterLeft>
					<FooterRight>
						<FooterRightColumn>
							<FooterRightTitle>about us</FooterRightTitle>
							<FooterRightDesc>회사 소개</FooterRightDesc>
							<FooterRightDesc>인재 채용</FooterRightDesc>
							<FooterRightDesc>상시 할인 혜택</FooterRightDesc>
						</FooterRightColumn>
						<FooterRightColumn>
							<FooterRightTitle>my order</FooterRightTitle>
							<FooterRightDesc>내 주문</FooterRightDesc>
							<FooterRightDesc>주문 배송</FooterRightDesc>
							<FooterRightDesc>취소 / 교환 / 반품 내역</FooterRightDesc>
							<FooterRightDesc>상품 리뷰 내역</FooterRightDesc>
							<FooterRightDesc>증빙 서류 발급</FooterRightDesc>
						</FooterRightColumn>
						<FooterRightColumn>
							<FooterRightTitle>my account</FooterRightTitle>
							<FooterRightDesc>회원 정보 수정</FooterRightDesc>
							<FooterRightDesc>회원 등급</FooterRightDesc>
							<FooterRightDesc>마일리지 현황</FooterRightDesc>
							<FooterRightDesc>쿠폰</FooterRightDesc>
						</FooterRightColumn>
						<FooterRightColumn>
							<FooterRightTitle>help</FooterRightTitle>
							<FooterRightDesc>1 : 1 상담 내역</FooterRightDesc>
							<FooterRightDesc>상품 Q & A 내역</FooterRightDesc>
							<FooterRightDesc>공지 사항</FooterRightDesc>
							<FooterRightDesc>자주하는 질문</FooterRightDesc>
							<FooterRightDesc>고객의 소리</FooterRightDesc>
						</FooterRightColumn>
					</FooterRight>
				</FooterWrapper>

				<CopyRightWrapper>
					<CopyRightLeft>
						<CopyRightLeftContent>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr</CopyRightLeftContent>
						<CopyRightLeftContent>서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</CopyRightLeftContent>
					</CopyRightLeft>
					<CopyRightRight>
						<CopyRightIcon src={SNSIcon1}/>
						<CopyRightIcon src={SNSIcon2}/>
						<CopyRightIcon src={SNSIcon3}/>
					</CopyRightRight>
				</CopyRightWrapper>

			</FooterPage>
		</>
	)
}

export default Footer
