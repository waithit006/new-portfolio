import { SectionTitle } from '../components/Utilities'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import React, { useState } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { ProjectInterface } from '../interfaces'
import { getProjectAPI } from '../api'
import ProjectView from '../components/ProjectView'

const BlockProject = styled.div`
        box-shadow: 0 10px 30px rgb(0 0 0 / 19%), 0 6px 10px rgb(0 0 0 / 23%);
        cursor: pointer;
        height:100%;
        .block-media{
            overflow: hidden;
            position: relative;
            background-color: #2c3340;
        }

        img{
            width:100%;
            transition: opacity 1s, transform 1s;
           height:300px;
           object-fit:scale-down;
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

export default function Project(props: Props) {
    const { projects } = props
    const [show, setShow] = useState(false)

    const [project, setProject] = useState<ProjectInterface>()

    const toggleShow = () => {
        setShow(!show)
    }

    const setProjectView = (value: ProjectInterface) => {
        toggleShow()
        setProject(value)
    }

    return (
        <Container className="pt-3">
            <SectionTitle>Project</SectionTitle>

            <ProjectView isShow={show} toggleShow={toggleShow} project={project} />

            <Row>
                {
                    projects.map((val, index) => (
                        <Col className="p-5" key={index} lg={6}>
                            <BlockProject onClick={() => setProjectView(val)}>
                                <div className="block-media">
                                    <img src={val.images.length > 0 ? val.images[0] : ""} alt="" />
                                </div>

                                <BlockProjectDetail>
                                    <div className="tag">
                                        {val.tech.join(', ')}
                                    </div>
                                    <ProjectTitle>
                                        {val.title_project}
                                    </ProjectTitle>
                                </BlockProjectDetail>
                            </BlockProject>
                        </Col>
                    ))
                }

            </Row>
        </Container>
    )
}


interface Props {
    projects: ProjectInterface[]
}


export const getStaticProps: GetStaticProps = async (context) => {
    const getProjectFromAPI = await getProjectAPI()

    return {
        props: {
            projects: [...getProjectFromAPI.toAPIResponse()]
        }
    }
}