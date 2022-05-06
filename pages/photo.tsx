import styled from 'styled-components'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Header = styled.header`
  margin-top: 60px;
`

const Main = styled.main`
  margin-top: 8px;
`

const MainVisual = styled.div``

const Index = styled.section``

const Detail = styled.section``

const Footer = styled.footer``

const Photo: NextPage = () => {
  return (
    <>
      <Head>
        <title>Photo Book | Codestep Trace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header>
        <h1>Photo Book</h1>
      </Header>
      <Main>
        <MainVisual>
          <Image src='https://picsum.photos/1000/600' width='1000' height='600' layout='responsive' alt='メインビジュアル' />
        </MainVisual>
        <Index id="id" />
        <Detail />
      </Main>
      <Footer>© Photo Book</Footer>
    </>
  )
}

export default Photo
