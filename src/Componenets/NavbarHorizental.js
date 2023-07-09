import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { BellIcon } from "@heroicons/react/24/solid";




const NavbarHorizental = () => {
    return (
            <header className="fixed bg-white py-3 flex items-center gap-3 justify-end px-6 border-b absolute left-16 top-0 right-0 ">
                <div className="flex-1 ">
            <Navbar.Brand href="#home">
                <img
                    src="/icons/kooraland.svg"
                    width="200"
                    height="200"
                    className="d-inline-block align-top "
                    alt="Logo de l'entreprise"
                />
            </Navbar.Brand>
                </div>

                <Nav className="ml-auto">
                    <Nav.Link href="/dashbord">
                        <BellIcon className="h-6 text-gray-700 cursor-pointer" />
                    </Nav.Link>
                    <Nav.Link href="/EditProfil">
                        <img
                            src="/icons/logo-dash.png"
                            className="h-12 cursor-pointer object-contain absolute inset-y-5 right-0 w-16"
                            alt=""
                            placement="left"
                        />

                    </Nav.Link>
                </Nav>
            </header>


    );
};

export default NavbarHorizental;


