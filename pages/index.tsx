import { Container, Row, Col, Button } from 'react-bootstrap'
import styled from 'styled-components'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { HomeInterface } from '../interfaces'
import { getHomeAPI } from '../api'
import moment from 'moment'

const ContainerHome = styled(Container)`
    display:flex;
    /* justify-content:center;
    align-items:center; */
    background-color:transparent;
    padding-top:2rem;
    flex-direction:column;
`

const SectionProfile = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  background-color: #fff;
`

const BlockProfile = styled.div`
    padding: 57px 50px 15px 50px;
      @media (max-width: 767px)
    {
        padding: 30px 20px 15px 20px;
    }

    @media (max-width: 992px)
    {
        padding: 50px 40px 15px 40px;
    }
`

const ProfilePhoto = styled.div`
      margin-right: 10%;
      margin-bottom: 10px;

      @media (max-width: 767px)
      {
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
      }

      @media (max-width: 992px)
      {
          margin-right: 0;
          margin-bottom: 30px;
      }

      img{
        width: 100%;
        display: block;
        object-fit:cover;
        /* max-height:300px; */
        object-position: top;
      }
`

const ProfileInfo = styled.div`
    color: #3d4451;
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #dedede;

    @media (max-width: 767px){
    text-align: center;
    }
`

const ProfileTitle = styled.h1`
    font-size: 36px;
    line-height: 1.1;
    font-weight: 800;
    margin-bottom: 5px;
`

const ProfilePosition = styled.h2`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 0;
`

const BlockLink = styled.div`
  padding: 15px 0;
  background-color: #e8676b;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
  }

  li {
    display: inline-block;
    margin: 5px 15px;
  }

  li a {
    /* line-height: 45; */
    width: 45px;
    height: 45px;
    position: relative;
    display: inline-block;
    background-color: transparent;
    -webkit-transition: -webkit-transition, background-color 0.25s linear 0s;
    -moz-transition: -moz-transition, background-color 0.25s linear 0s;
    transition: transition, background-color 0.25s linear 0s;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 50%;

    i{
      color: #fff;
      font-size: 30px;
      line-height: 45px;
      display: block;
    }
  }

  li a:hover{
      text-decoration: none;
      background-color: rgba(0, 0, 0, 0.1);
    }


`

const ProfileList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin-bottom: 13px;
    }

    .title {
      display: block;
      width: 120px;
      float: left;
      color: #333333;
      font-size: 12px;
      font-weight: 700;
      line-height: 20px;
      text-transform: uppercase;
      }

    .cont {
      display: block;
      margin-left: 125px;
      font-size: 15px;
      font-weight: 400;
      line-height: 20px;
      color: #9da0a7;
      }
`


const TextSection = styled.div`
      color: #000;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.8;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 5rem;
    /* background-color:#fff; */
    padding: 1.5rem 3rem;
    border-radius: 5px;
    
    @media (max-width: 767px){
      padding: 1rem 1rem;
      margin-bottom:5rem;
    }
`

const ButtonDownload = styled(Button)`
  display:block;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:1.5rem;

`


const HeadBG = styled.div`
  background-image:url('/coding-background.jpg');
  height: 515px;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  position: absolute;
  background-size: cover;
  background-color: #242832;
  background-repeat: no-repeat;
  background-position: center;

  &:before{
    background-color: rgba(44, 51, 64, 0.8);
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`

export default function Home(props: Props) {
  const { homeData } = props

  return (
    <>
      <Head>
        <title>Waithid Portfolio - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeadBG />
      <ContainerHome>
        <div data-aos="fade-up" style={{ backgroundColor: 'transparent', width: '100%' }}>
          <SectionProfile >
            <BlockProfile>
              <Row>
                <Col sm={5}>
                  <ProfilePhoto>
                    <img src={homeData.profile_img} alt="picture Profile" />
                  </ProfilePhoto>
                </Col>
                <Col sm={7}>
                  <ProfileInfo>
                    <ProfileTitle>{homeData.name}</ProfileTitle>
                    <ProfilePosition>{homeData.position}</ProfilePosition>
                  </ProfileInfo>

                  <ProfileList>
                    <li>
                      <strong className="title">Date of birth</strong>
                      <span className="cont">{moment(homeData.birthdate, 'YYYY-MM-DD').format("DD MMM YYYY")}</span>
                    </li>
                    <li>
                      <strong className="title">Age</strong>
                      <span className="cont">{homeData.age}</span>
                    </li>
                    <li>
                      <strong className="title">Nationality</strong>
                      <span className="cont">{homeData.nationality}</span>
                    </li>
                    <li>
                      <strong className="title">Language</strong>
                      <span className="cont">
                        {homeData.language}</span>
                    </li>
                    <li>
                      <strong className="title">Phone</strong>
                      <span className="cont">
                        {homeData.phone}</span>
                    </li>

                    <li>
                      <strong className="title">Email</strong>
                      <span className="cont">
                        {homeData.email}</span>
                    </li>
                  </ProfileList>
                </Col>
              </Row>

            </BlockProfile>

            <BlockLink>

              <ul>
                <li><a href={homeData.github_url} target="_blank"><i className="fa fa-github" ></i></a></li>
                <li><a href={homeData.facebook_url} target="_blank"><i className="fa fa-facebook-square"></i></a></li>
                <li><a href={homeData.instagram_url} target="_blank"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </BlockLink>
          </SectionProfile>

          <TextSection>

            <ButtonDownload variant="outline-secondary" size="lg" onClick={() => window.open(homeData.resume_files, '_blank')}>Download Resume</ButtonDownload>

            {homeData.about_me}
          </TextSection>
        </div>
      </ContainerHome>
    </>
  )
}


interface Props {
  homeData: HomeInterface
}


export const getStaticProps: GetStaticProps = async (context) => {
  const getHomeFromAPI = await getHomeAPI()

  return {
    props: {
      homeData: { ...getHomeFromAPI.toAPIResponse() }
    }
  }
}