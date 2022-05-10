import styled from 'styled-components'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const BodyBox = styled.div``

const Header = styled.header`
  margin-top: 40px;
  max-width: 1000px;
`

const MainVisual = styled.div``

const Main = styled.main`
  padding: 4%;
`

const Heading = styled.h2`
  margin-top: 32px;
  font-size: 1.2rem;
  text-align: center;
`

const IndexBox = styled.section`
  margin-top: 40px;
  padding: 4%;
  background-color: #f5f5f5;
`

const IndexList = styled.ol`
  margin-top: 32px;
  padding: 4%;
  border: 1px solid #000;
  list-style-type: decimal;
  font-size: 1.0rem;

  li {
    margin-top: 16px;
    text-indent: -1em;
    padding-left: 1em;
  }
`

const PhotoList = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  row-gap: 12px;
`

const Photo = styled.div`
  width: 100%;
  // flex-basis: 50%;
`

const Detail = styled.section`
  margin-top: 40px;
  padding: 4%;
  background-color: #f5f5f5;
`

const Footer = styled.footer``

const Photo2: NextPage = () => {
  return (
    <>
      <Head>
        <title>Photo Book 2 | Codestep Trace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <BodyBox>
        <Header>
          <h1>PHOTO BOOK 2</h1>
          <MainVisual>
            <Image src='https://picsum.photos/1000/400' width='1000' height='400' layout='responsive' alt='メインビジュアル' />
          </MainVisual>
        </Header>
        <Main>
          <IndexBox>
            <Heading>INDEX</Heading>
            <IndexList>
              <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
              <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
              <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
              <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
              <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
            </IndexList>
          </IndexBox>
          <PhotoList>
            <Photo>
              <Image src='https://picsum.photos/600/400' width='600' height='400' layout='responsive' alt='メインビジュアル' />
            </Photo>
            <Photo>
              <Image src='https://picsum.photos/600/400' width='600' height='400' layout='responsive' alt='メインビジュアル' />
            </Photo>
            <Photo>
              <Image src='https://picsum.photos/600/400' width='600' height='400' layout='responsive' alt='メインビジュアル' />
            </Photo>
            <Photo>
              <Image src='https://picsum.photos/600/400' width='600' height='400' layout='responsive' alt='メインビジュアル' />
            </Photo>
          </PhotoList>
          <Detail>
            <Heading>DETAIL</Heading>
          </Detail>
        </Main>
        <Footer></Footer>
      </BodyBox>
    </>
  )
}

export default Photo2
