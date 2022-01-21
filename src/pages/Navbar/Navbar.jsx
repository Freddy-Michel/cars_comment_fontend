import React from 'react'
import {
    Nav,
    Navbar,
    Container,
    NavDropdown
} from 'react-bootstrap'

export default function NavbarTop() {
    const user = JSON.parse(localStorage.getItem('username'));

   

    console.log(user)

    const handleLogOut = () => {
        localStorage.clear();
        window.location.href="/";
    }
    
    return (
        <>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Cars API</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    
                    {/* <Nav.Link href="/">Se connecter</Nav.Link> */}
                    {
                        user ? (
                            <>
                                <Nav.Link href="/">Accueil</Nav.Link>
                                <NavDropdown title={`${user}`} id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={()=>handleLogOut()}>Deconnecter</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ):(
                            <>
                            <Nav.Link href="/">Accueil</Nav.Link>
                            <Nav.Link onClick={()=>handleLogOut()} href="/login">Se connecter</Nav.Link>
                            </>
                        )
                    }
                </Nav>
                
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}
