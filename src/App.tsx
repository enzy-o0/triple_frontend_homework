import React from 'react'
import styled from 'styled-components'
import ContentLogo from './assets/images/triple2x.png'
import ContentAppStore from './assets/images/badge-apple4x.png'
import ContentPlayStore from './assets/images/play-store2x.png'
import Counter from './components/Counter'
import { FadeInKeyFrame } from './assets/keyframes'
import GlobalStyle from './assets/styles/GlobalStyle'

const App = () => {
  return (
    <Section>
      <GlobalStyle />
      <SectionLogoImg src={ContentLogo} alt="tripleContentLogo" />
      <SectionColTitle>
        <SectionTitle>
          <SectionTitleBold>
            <Counter value={31} />만 명
          </SectionTitleBold>
          의 사용자
        </SectionTitle>
        <SectionTitle>
          <SectionTitleBold>
            <Counter value={21} />만 개
          </SectionTitleBold>
          의 리뷰
        </SectionTitle>
        <SectionTitle>
          <SectionTitleBold>
            <Counter value={650} />만 개
          </SectionTitleBold>
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
            <StoreLogoImage src={ContentAppStore} alt="ContentAppStore" />
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

const Section = styled.div`
  min-width: 1200px;
  height: 552px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  color: #3a3a3a;
`

const SectionLogoImg = styled.img`
  width: 400px;
  height: 338px;
  animation: ${FadeInKeyFrame} 700ms ease-in-out;
`

const SectionColTitle = styled.div`
  height: 338px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  animation: ${FadeInKeyFrame} 800ms ease-in-out;
`
const SectionTitle = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
  letter-spacing: -1px;
`

const SectionTitleBold = styled.strong`
  font-weight: bold;
`

const SectionImage = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
`

const SectionRowImage = styled.div`
  display: flex;
  align-items: center;
  animation: ${FadeInKeyFrame} 900ms ease-in-out;
  margin-top: 50px;
`

const StoreLogoImage = styled.img`
  width: 54px;
  height: 54px;
  margin-right: 5px;
`
const StoreText = styled.div`
  font-size: 14px;
  color: #3a3a3acc;
  font-weight: bold;
`
