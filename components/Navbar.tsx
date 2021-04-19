import { Navbar, Container, Nav } from 'react-bootstrap'
import styled from 'styled-components';
import Link from 'next/link'
import React, { Children } from 'react'
import { useRouter } from 'next/router'

const NameLogo = styled.span`
    color:#e8676b;
    font-weight:1000;
    font-size:2rem;
    margin-right:5px;
`;

const SurnameLogo = styled.span`
    color:#9a9da2;
    font-weight:bold;
    font-size:1.5rem;
`;

const NavLink = styled(Nav.Link)`
    color:#9a9da2 !important; 
    margin-left : 1.5em;
    margin-right : 1.5em;
    position:relative;
    padding-right: 0 !important; 
    padding-left: 0 !important; 
    overflow: hidden;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;

    @media(min-width: 991px) {
            &:after {
                content: "";
                background-color: #e8676b;
                border-radius: 10px;
                height: 3px;
                bottom: 0;
                left: 0;
                position: absolute;
                width: ${props => props.active ? "100% !important" : "0 !important"};
                transition: width 0.2s ease-out;
             }

                &:hover {
                &:after{
                    width: 100% !important;
                }
            }

    }
    
`

interface Props {
    className: string
}

const routeConfig = [
    {
        href: "/",
        name: "Home"
    },
    {
        href: "/education",
        name: "Education"
    },
    {
        href: "/experience",
        name: "Experience"
    },
    {
        href: "/skill",
        name: "Skills"
    },
    {
        href: "/project",
        name: "Project"
    },
]


export default function HeaderNavbar(props: Props) {
    const { asPath } = useRouter()

    const navlink = routeConfig.map((route,index) => {
        let IsActive = asPath === route.href
        return <NavLink key={index} href={route.href} active={IsActive ? 'active' : undefined}>{route.name}</NavLink>
    })

    return (
        <Navbar expand="lg" className={`p-3 ${props.className}`} sticky="top">
            <Container>
                <Navbar.Brand href="/" style={{ alignItems: 'center' }}>
                    {/* <img
                        alt=""
                        src="/logo.png"
                        width="130"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '} */}
                    <NameLogo>WAITHID</NameLogo>
                    <SurnameLogo>Portfolio</SurnameLogo>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: '#9a9da2' }} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {navlink}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}
