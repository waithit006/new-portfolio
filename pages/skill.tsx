import { SectionTitle } from '../components/Utilities'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import styled from 'styled-components'
import Head from 'next/head'

const SkillDIV = styled.div`
       text-align: center;
       padding: 0;

       .skill-image {
        width: 120px;
        height: 120px;
        background-color: #fafafa;
        border-radius: 100px;
        margin: 0 auto;
        text-align: center;
        transition: all 0.3s ease-in-out;

        &:hover {
            transform: translateY(-7px);
            box-shadow: 0 7px 12px rgb(0 0 0 / 15%);
        }

        img{
            max-width: 100px;
            height: 64px;
            margin: 28px 0;
        }
       }

       h4 {
        font-size: 17px;
        padding: 20px 0 0;
        font-weight:bold;
       }
`

export default function Skills() {
    return (
        <Container className="pt-3">
            <SectionTitle>Skills</SectionTitle>

            <Row className="mt-3 mb-3">
                <Col md={2} sm={4} xs={4}>
                    <SkillDIV>
                        <div className="skill-image">
                                <img src="https://rainstormza.github.io/assets/img/technology/js2.svg" alt=""/>
                        </div>
                        <h4>Javascript</h4>
                    </SkillDIV>
                </Col>

                <Col md={2} sm={4} xs={4}>
                    <SkillDIV>
                        <div className="skill-image">
                                <img src="https://rainstormza.github.io/assets/img/technology/angular.png" alt=""/>
                        </div>
                        <h4>Angular</h4>
                    </SkillDIV>
                </Col>
            </Row>

        </Container>
    )
}