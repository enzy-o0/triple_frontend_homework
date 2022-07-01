import React, {useEffect, useRef, useState} from 'react'
import styled, { keyframes } from 'styled-components'
import ContentLogo from './assets/triple2x.png'
import ContentAppStore from './assets/badge-apple4x.png'
import ContentPlayStore from './assets/play-store2x.png'
import { clear } from 'console'

function App() {
  const storeText1 = useRef<any>(null);
  const [count1, setCount1] = useState<number>(0);
  useEffect(() => {
    console.log(count1);

    if (count1 < 350) {
      console.log('350');
    } else {
      console.log('350 else');

      storeText1.current = null;
      clearInterval(storeText1.current);
      window.clearInterval(storeText1.current);
    }
  }, [count1])
  

  return (
    <Section>
      <SectionLogoImg
        src={ContentLogo}
        alt="tripleContentLogo"
      />
      <SectionColTitle>
        <SectionTitle>
          <b>
            <span ref={storeText1}>{count1}</span>만 명
          </b>
          의 사용자
        </SectionTitle>
        <SectionTitle>
          <b>
            <span ref={storeText1}>21</span>만 개
          </b>
          의 리뷰
        </SectionTitle>
        <SectionTitle>
          <b>
            <span ref={storeText1}>650</span>만 개
          </b>
          의 저장
        </SectionTitle>
        <SectionRowImage>
          <SectionImage>
            <StoreLogoImage
              src={ContentPlayStore}
              alt="tripleContentPlayStore"
            />
            <StoreText>
              2018 구글 플레이스토어
              <br />
              올해의 앱 최우수상 수상
            </StoreText>
          </SectionImage>
          <SectionImage>
            <StoreLogoImage
              src={ContentAppStore}
              alt="ContentAppStore"
            />
            <StoreText>
              2018 애플 앱스토어 <br />
              오늘의 여행앱 선정
            </StoreText>
          </SectionImage>
        </SectionRowImage>
      </SectionColTitle>
    </Section>
  )
}

export default App

const LogoImageFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const SectionTextFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  40% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opactiy: 1;
    transform: none;
  }
`;

const SectionStoreFade = keyframes`
  0% {
    opacity: 0;
    transform: none;
  }
  45% {
    opacity: 0.2;
    transform: translateY(-10px);
  }
  100% {
    opactiy: 1;
    transform: none;
  }
`;

const Section = styled.div`
  min-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  color: #3A3A3A;
  font-family: 'sans-serif';
`

const SectionLogoImg= styled.img`
  width: 400px;
  height: 338px;
  margin-top: 137px;
  animation: ${LogoImageFade} 1.5s ease-in-out;
`

const SectionColTitle = styled.div`
  animation: ${SectionTextFade} 1.5s ease-in-out;
`;
const SectionTitle = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
`

const SectionImage = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
`

const SectionRowImage = styled.div`
  display: flex;
  align-items: center;
  animation: ${SectionStoreFade} 1.5s ease-in-out;
`

const StoreLogoImage = styled.img`
  width: 54px;
  height: 54px;
  margin-right: 5px;
`
const StoreText = styled.div`
  font-size: 14px;
  color: #3A3A3ACC;
  font-weight: bold;
`