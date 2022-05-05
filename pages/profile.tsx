import styled from 'styled-components'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const devices = {
  mobile: '(max-width: 600px)'
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 10px 4%;
`

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 172px;
  padding: 4px 16px;
  background-color: black;
  color: #fff;
  font-size: 1.6rem;
  letter-spacing: 1px;
  > a {
    text-align: center;
  }
`;

const Menu = styled.nav`
  display: flex;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  font-size: 1.0rem;
  color: #383e45;
`;

const MenuItem = styled.li`
  color: #383e45;
`;

const Main = styled.main`
  margin: 0 auto;
  padding: 0 4%;
`

const MainVisual = styled(() => (
  <div className='main-visual'>
    <Image src='https://picsum.photos/1920/1280' width='1980' height='1280' layout='responsive' alt='メインビジュアル' />
  </div>
))``

const Heading = styled.h1`
  position: relative;
  display: inline-block;
  margin: 16px auto 60px;
  padding-bottom: 4px;
  font-size: 2.4rem;
  font-weight: normal;
  letter-spacing: 1px;
  
  &::after {
    content: '';
    position: absolute;
    display: block;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-bottom: 1px solid #000;
  }
`

const AboutBox = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 80px 4%;
  text-align: center;
`

const Profile = styled.div`
  display: flex;
  text-align: left;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`

const Avator = styled(Image)`
  margin: 8px;
  border-radius: 50%;
`

const ProfileDetail = styled.div`
  margin-top: 16px;
  padding-left: 32px;

  @media ${devices.mobile} {
    padding-left: 0;
  }

  .name {
    margin-bottom: 8px;
    font-size: 1.6rem;
  }

  .text {
    font-size: 1.1rem;
  }
`

const BicycleBox = styled.section`
  width: 100%:
  padding: 80px 4%;
  text-align: center;
`

const BicycleList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`

const Bicycle = styled.div``

const BicycleImage = styled(Image)``

const BicycleTitle = styled.h3`
  padding: 4px;
  font-size: 1.2rem;
`

const BicycleDescription = styled.p`
  font-size: 1.0rem;
`

const Footer = styled.footer`
  width: 100%;
  height: 30px;
  margin-top: 12px;
  text-align: center;
  line-height: 30px;
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile | Codestep Trace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header>
        <Logo><Link href="/profile">Profile</Link></Logo>
        <Menu>
          <MenuList>
            <MenuItem><Link href="#about">About</Link></MenuItem>
            <MenuItem><Link href="#bicycle">Bicycle</Link></MenuItem>
          </MenuList>
        </Menu>
      </Header>
      <MainVisual />
      <Main>
        <AboutBox id='about'>
          <Heading as='h2'>About</Heading>
          <Profile>
            <div style={{width: 200, height: 200, margin: '0 auto'}}>
              <Avator src='https://picsum.photos/200/200' width='200' height='200' layout='responsive' alt='アバター' />
            </div>
            <ProfileDetail>
              <p className='name'>shootacean</p>
              <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </ProfileDetail>
          </Profile>
        </AboutBox>
        <BicycleBox id='bicycle'>
          <Heading as='h2'>Bicycle</Heading>
          <BicycleList>
            {[1,2,3].map((v) => (
              <>
                <Bicycle key={v}>
                  <BicycleImage src='https://picsum.photos/640/424' width='278' height='146' layout='fixed' alt='自転車の画像'/>
                  <BicycleTitle>タイトル</BicycleTitle>
                  <BicycleDescription>テキスト</BicycleDescription>
                </Bicycle>
              </>
            ))}
          </BicycleList>
        </BicycleBox>
      </Main>
      <Footer>
        © 2020 Profile
      </Footer>
    </>
  )
}

export default Home
