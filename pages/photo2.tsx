import styled from 'styled-components'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const devices = {
  desktop: '(min-width: 1024px)',
}

const BodyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.header`
  margin-top: 40px;
  width: 100%;
  max-width: 1000px;

  h1 {
    padding: 10px;
  }
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

const Divider = styled.div`
  width: 100%;
  margin: 40px 0;
  border-bottom: 1px solid #000;

  @media ${devices.desktop} {
    width: 1px;
    margin: 12px 40px 4px;
    border-bottom: 0;
    border-right: 1px solid #000;
  }
`

const IndexBox = styled.section`
  width: 100%;
  margin-top: 40px;
  padding: 4%;
  background-color: #f5f5f5;

  @media ${devices.desktop} {
    padding: 4% 8% 8%;
  }
`

const IndexList = styled.ol`
  margin-top: 32px;
  padding: 4%;
  border: 1px solid #000;
  list-style-type: decimal;
  font-size: 1.0rem;

  @media ${devices.desktop} {
    padding: 4% 16%;
  }

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
  gap: 12px;
`

const Photo = styled.div`
  width: 100%;
  
  @media ${devices.desktop} {
    flex-basis: 49%;
  }
`

const DetailBox = styled.section`
  width: 100%;
  margin-top: 40px;
  padding: 4%;
  background-color: #f5f5f5;

  @media ${devices.desktop} {
    padding: 4% 8% 8%;
  }
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.desktop} {
    flex-direction: row;
    margin-top: 32px;
  }
`

const DetailList = styled.dl`
  font-size: 0.9rem;

  @media ${devices.desktop} {
    flex-basis: 32%;
  }
`

const DetailItem = styled.div`
  margin-top: 10px;

  dt {
    font-weight: bold;

    :after {
      content: '：';
    }
  }
`

const DetailInfo = styled.div``

const DetailDescription = styled.p`
  margin-top: 12px;
  font-size: 1.0rem;
`

const StoreLink = styled.a`
  font-size: 1.0rem;
  text-decoration: underline;
`

const Footer = styled.footer`
  width: 100%;
  margin-top: 32px;
  height: 50px;
  text-align: center;
  line-height: 50px;
`

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
          <DetailBox>
            <Heading>DETAIL</Heading>
            <Detail>
              <DetailList>
                {[
                  {name: '著者', value: 'タイトルタイトルタイトル'},
                  {name: '出版社', value: 'タイトルタイトルタイトル'},
                  {name: '発行年', value: '2022年5月11日'}
                ].map((v, i) => (
                  <DetailItem key={i}>
                    <dt>{v.name}</dt>
                    <dd>{v.value}</dd>
                  </DetailItem>
                ))}
              </DetailList>
              <Divider />
              <DetailInfo>
                <DetailDescription>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</DetailDescription>
                <DetailDescription>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</DetailDescription>
                <br />
                <StoreLink href='#'>オンラインストアで見る</StoreLink>
              </DetailInfo>
            </Detail>
          </DetailBox>
        </Main>
        <Footer>© 2020 Photo Book 2</Footer>
      </BodyBox>
    </>
  )
}

export default Photo2
