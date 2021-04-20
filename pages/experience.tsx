import { SectionTitle } from '../components/Utilities'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Chrono } from "react-chrono";
import { GetStaticProps } from 'next'
import { ExperienceInterface } from '../interfaces'
import { getExperienceAPI } from '../api'
import Head from 'next/head'

export default function Experience(props: Props) {

    const { experiences } = props

    const items = experiences.map((val: ExperienceInterface) => (
        {
            title: val.date_range,
            cardTitle: val.company,
            cardSubtitle: val.position
        }
    ))

    return (
        <>
            <Head>
                <title>Waithid Portfolio - Experience</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Container className="pt-3">
                <SectionTitle>
                    Experience
        </SectionTitle>

                <div style={{ width: "100%" }}>
                    <Chrono
                        mode="VERTICAL_ALTERNATING"
                        items={items}
                        hideControls={true}
                    >
                        {experiences.length > 0 ? experiences.map((val, indexExperiences) => (
                            <div key={indexExperiences}>
                                <ul>
                                    {
                                        val.responsibility?.map((respon, indexResponse) => (
                                            <li key={indexResponse}>
                                                {respon}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )) : null}
                    </Chrono>
                </div>
            </Container>
        </>
    )
}


interface Props {
    experiences: ExperienceInterface[]
}


export const getStaticProps: GetStaticProps = async (context) => {
    const getExperienceFromAPI = await getExperienceAPI()

    return {
        props: {
            experiences: [...getExperienceFromAPI.toAPIResponse()]
        }
    }
}