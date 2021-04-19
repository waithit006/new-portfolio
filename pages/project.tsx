import { SectionTitle } from '../components/Utilities'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import styled from 'styled-components'

const BlockProject = styled.div`
        box-shadow: 0 10px 30px rgb(0 0 0 / 19%), 0 6px 10px rgb(0 0 0 / 23%);
        cursor: pointer;

        .block-media{
            overflow: hidden;
            position: relative;
            background-color: #2c3340;
        }

        img{
            width:100%;
            transition: opacity 1s, transform 1s;
        }

        img:hover{
            opacity: 1;
            transform: scale3d(1.1, 1.1, 1);
        }
        
`
const BlockProjectDetail = styled.div`
    padding: 25px 25px 35px 25px;
    text-align: center;

    .tag{
            font-size: 20px;
            font-weight: 400;
            line-height: 1.2;
            margin-bottom: 26px;
        }
`

const ProjectTitle = styled.h3`
            color: #373b42;
            font-size: 20px;
            line-height: 1.3;
            font-weight: 700;
            text-transform: uppercase;
`

export default function Project() {
    return (
        <Container className="pt-3">
            <SectionTitle>Project</SectionTitle>

            <Row>
                <Col className="p-5" lg={6}>
                <BlockProject>
                    <div className="block-media">
                    <img src="https://rscard.px-lab.com/startuper/wp-content/uploads/sites/2/2017/11/download2-1-449x286.jpg" alt=""/>
                    </div>
                    
                    <BlockProjectDetail>
                        <div className="tag">
                            #Nodejs
                        </div>
                        <ProjectTitle>
                        EMBRACE THE UNIVERSE
                        </ProjectTitle>
                    </BlockProjectDetail>
                </BlockProject>
                </Col>
            </Row>
        </Container>
    )
}