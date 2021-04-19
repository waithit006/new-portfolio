import { SectionTitle } from '../components/Utilities'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Chrono } from "react-chrono";

export default function Experience() {

    const items = [{
        title: "Oct 2019 - Now",
        cardTitle: "TTC GLOBAL Ltd.",
        cardSubtitle: "Fullstack Developer",
        // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        // media: {
        //     type: "IMAGE",
        //     source: {
        //         url: "http://someurl/image.jpg"
        //     }
    },
    {
        title: "Jul 2019 - Oct 2019",
        cardTitle: "Advanced Info Services Public Company Limited",
        cardSubtitle: "Programmer",
        // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        // media: {
        //     type: "IMAGE",
        //     source: {
        //         url: "http://someurl/image.jpg"
        //     }
    },
    {
        title: "Jun 2018 - Nov 2018",
        cardTitle: "General Electronic Commerce Services Co.,Ltd.",
        cardSubtitle: "(Intern) Front end Developer",
        // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        // media: {
        //     type: "IMAGE",
        //     source: {
        //         url: "http://someurl/image.jpg"
        //     }
    }

    ];

    return (
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

                </Chrono>
            </div>
        </Container>
    )
}