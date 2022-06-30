import React from 'react'
import styled from 'styled-components'
import ContentLogo from './assets/triple2x.png'
import ContentAppStore from './assets/badge-apple4x.png'
import ContentPlayStore from './assets/play-store2x.png'

function App() {
  return (
    <Section>
      {/* <header className="App-header"> */}
      <img
        src={ContentLogo}
        width={400}
        height={338}
        style={{
          paddingTop: '137px',
          // margin: '80px auto 20px',
        }}
        className="contentLogo"
        alt="tripleContentLogo"
      />
      <SectionTitleCol>
        <SectionTitle>
          <b>
            <span>350</span>만 명
          </b>
          의 사용자
        </SectionTitle>
        <SectionTitle>
          <b>
            <span>21</span>만 개
          </b>
          의 리뷰
        </SectionTitle>
        <SectionTitle>
          <b>
            <span>650</span>만 개
          </b>
          의 저장
        </SectionTitle>
        <SectionImageRow>
          <SectionImage>
            <img
              width={54}
              height={54}
              src={ContentPlayStore}
              className="contentPlayStore"
              alt="tripleContentPlayStore"
            />
            <div>
              2018 구글 플레이스토어
              <br />
              {'\n'}올해의 앱 최우수상 수상
            </div>
          </SectionImage>
          <SectionImage>
            <img
              width={54}
              height={54}
              src={ContentAppStore}
              className="ContentAppStore"
              alt="ContentAppStore"
            />
            <div>
              2018 애플 앱스토어{'\n'} <br />
              오늘의 여행앱 선정
            </div>
          </SectionImage>
        </SectionImageRow>
      </SectionTitleCol>

      {/* <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
      {/* </header> */}
    </Section>
  )
}

export default App

const Section = styled.div`
  min-width: 1200px;
  width: 1040px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
`

const SectionTitleCol = styled.div`
  margin-left: 150px;
`

const SectionTitle = styled.div`
  font-size: 36px;
  font-family: 'sans-serif';
  margin-bottom: 20px;
`

const SectionImage = styled.div`
  display: flex;
  align-items: center;
`

const SectionImageRow = styled.div`
  display: flex;
  flex-direction: row;
`
