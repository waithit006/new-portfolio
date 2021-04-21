import React, { useState } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import { ProjectInterface } from '../interfaces'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components'

interface Props {
    isShow: boolean,
    toggleShow: Function
    project: ProjectInterface
}

const TitleProject = styled.h2`
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 12px;
`
const TechProject = styled.h3`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.1;
`

export default function ProjectView(props: Props) {

    const { isShow, toggleShow, project } = props


    return (
        <>
            <Modal show={isShow} size={"xl"} centered={true} onHide={toggleShow} >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={6} xs={12}>
                            <Carousel dynamicHeight={false}>
                                {
                                    project?.images.map((image, index) => (
                                        <div key={index}>
                                            <img src={image} />
                                        </div>
                                    ))
                                }

                                {/* // <div>
                                //     <img src="assets/2.jpeg" />
                                //     <p className="legend">Legend 2</p>
                                // </div>
                                // <div>
                                //     <img src="assets/3.jpeg" />
                                //     <p className="legend">Legend 3</p>
                                // </div> */}
                            </Carousel>
                        </Col>
                        <Col lg={6} xs={12}>
                            <TitleProject>{project?.title_project}</TitleProject>
                            <TechProject>{project?.tech.join(" , ")}</TechProject>

                            <hr />

                            <p>
                                {project?.detail}
                            </p>
                        </Col>
                    </Row>

                </Modal.Body>
            </Modal>
        </>
    )
}