import styled from 'styled-components'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8% 4% 0;
  background-color: #f4f9fe;
`

const Header = styled.header`
  margin-top: 40px;
  font-weight: normal;
  letter-spacing: 1px;
`

const Main = styled.main`
  margin-top: 8px;
`

const MainVisual = styled.div``

const Index = styled.section`
  margin: 8% -4%;
  padding: 8%;
  background-color: #fff;
  font-size: 1.0rem;
`

const IndexList = styled.ol`
  list-style-type: decimal;

  li {
    margin-top: 16px;
    text-indent: -1em;
    padding-left: 1em;
  }
`

const Detail = styled.section`
  margin: 40px 8% 0;
`

const DetailPhoto = styled.div`
  width: 100%;
  margin-top: 8px;
`

const DetailTitle = styled.h3`
  margin-top: 16px;
  font-size: 1.4rem;
`

const DetailList = styled.dl`
  font-size: 1.0rem;

  :before, :after {
    content: '';
    display: block;
    width: 100%;
    margin: 16px 0;
    border-bottom: 2px solid #e8ebee;
  }
`

const DetailItem = styled.div`
  display: flex;
  column-gap: 30px;

  dt{
    flex-basis: 20%;
  }

  dd {
    flex-glow: 1;
  }
`

const DetailDescription = styled.p`
  font-size: 1.0rem;
`

const StoreLink = styled.a`
  font-size: 1.0rem;
  text-decoration: underline;
`

const Footer = styled.footer`
  width: 100%;
  margin-top: 32px;
  height: 30px;
  text-align: center;
  line-height: 30px;
`

const Photo: NextPage = () => {
  return (
    <>
      <Head>
        <title>Photo Book | Codestep Trace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container>
        <Header>
          <h1>Photo Book</h1>
        </Header>
        <Main>
          <MainVisual>
            <Image src='https://picsum.photos/1000/600' width='1000' height='600' layout='responsive' alt='メインビジュアル' />
          </MainVisual>
          <Index id="id">
            <h2>Index</h2>
            <IndexList>
              <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
              <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
              <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
              <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
              <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
            </IndexList>
          </Index>
          <Detail>
            <h2>Detail</h2>
            <DetailPhoto>
              <Image src='https://picsum.photos/1000/1000' width='300' height='300' layout='responsive' alt='写真' ></Image>
            </DetailPhoto>
            <DetailTitle>タイトル</DetailTitle>
            <DetailList>
              {[
                {name: '著者', value: 'タイトルタイトルタイトル'},
                {name: '出版社', value: 'タイトルタイトルタイトル'},
                {name: '発行年', value: 'タイトルタイトルタイトル'}
              ].map((v, i) => (
                <DetailItem key={i}>
                  <dt>{v.name}</dt>
                  <dd>{v.value}</dd>
                </DetailItem>
              ))}
            </DetailList>
            <DetailDescription>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</DetailDescription>
            <br />
            <StoreLink href='#'>オンラインストアで見る</StoreLink>
          </Detail>
        </Main>
        <Footer>© 2020 Photo Book</Footer>
      </Container>
    </>
  )
}

export default Photo
