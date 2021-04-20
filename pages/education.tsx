import { Container, Row, Col, Button } from 'react-bootstrap'
import { SectionTitle } from '../components/Utilities'
import { Chrono } from "react-chrono";
import styled from 'styled-components'
import { GetStaticProps } from 'next'
import { EducationInterface } from '../interfaces'
import { getEducationAPI } from '../api'
import Head from 'next/head'


const CardTimeline = styled.div`
    min-height:10px;
`



export default function Education(props: Props) {
    const { education } = props
    const items = education.map((val) => (
        {
            title: val.date,
            cardTitle: val.name_education,
            cardSubtitle: val.detail_education
        }
    ))


    // = [{
    //     title: "2015 - 2019",
    //     cardTitle: "Ubon Ratchathani University",
    //     cardSubtitle: "Bachelor of Science in Computer Science (GPA 3.40)",
    //     // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    //     // media: {
    //     //     type: "IMAGE",
    //     //     source: {
    //     //         url: "http://someurl/image.jpg"
    //     //     }
    // }, {
    //     title: "2009 - 2015",
    //     cardTitle: "Patiuwittaya School",
    //     cardSubtitle: "Secondary Education",
    //     // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    //     // media: {
    //     //     type: "IMAGE",
    //     //     source: {
    //     //         url: "http://someurl/image.jpg"
    //     //     }
    // }];


    return (
        <>
        <Head>
        <title>Waithid Portfolio - Education</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Container className="pt-3">
            <SectionTitle>Education</SectionTitle>

            <div style={{ width: "100%" }}>
                <Chrono
                    mode="VERTICAL"
                    items={items}
                    hideControls={true}
                >

                    <CardTimeline>
                        <div>

                        </div>
                    </CardTimeline>
                </Chrono>
            </div>
        </Container>
        </>
    )
}


interface Props {
    education: EducationInterface[]
}


export const getStaticProps: GetStaticProps = async (context) => {
    const getEducationFromAPI = await getEducationAPI()

    return {
        props: {
            education: [...getEducationFromAPI.toAPIResponse()]
        }
    }
}