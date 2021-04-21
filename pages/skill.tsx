import { SectionTitle } from '../components/Utilities'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import styled from 'styled-components'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { SkillsInterface } from '../interfaces'
import { getSkillsAPI } from '../api'

const SkillDIV = styled.div`
       text-align: center;
       padding: 0;
       display:flex;
       justify-content:center;
       flex-direction:column;
       align-items:center;

       .skill-image {
        width: 100px;
        height: 100px;
        background-color: #fafafa;
        border-radius: 50px;
        margin: 0 auto;
        text-align: center;
        transition: all 0.3s ease-in-out;

        &:hover {
            transform: translateY(-7px);
            box-shadow: 0 7px 12px rgb(0 0 0 / 15%);
        }

        img{
            max-width: 100px;
            height: 50px;
            margin: 28px 0;
        }
       }

       h4 {
        font-size: 15px;
        padding: 20px 0 0;
        font-weight:bold;
       }
`

export default function Skills(props: Props) {

    const { skills } = props

    return (
        <Container className="pt-3">
            <SectionTitle>Skills</SectionTitle>

            <Row className="mt-3 mb-3">
                {
                    skills.map((skill,index) => (
                        <Col key={index} md={2} sm={4} xs={4}>
                            <SkillDIV>
                                <div className="skill-image">
                                    <img src={skill.icon} alt="" />
                                </div>
                                <h4>{skill.name}</h4>
                            </SkillDIV>
                        </Col>
                    ))
                }
            </Row>

        </Container>
    )
}

interface Props {
    skills: SkillsInterface[]
}


export const getStaticProps: GetStaticProps = async (context) => {
    const getSkillsFromAPI = await getSkillsAPI()

    return {
        props: {
            skills: [...getSkillsFromAPI.toAPIResponse()]
        }
    }
}