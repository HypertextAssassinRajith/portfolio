import React from 'react';
import { AiFillMoon } from "react-icons/ai";

export default function Header() {

    return (
            <header className="flex flex-row w-full justify-center mt-3 mb-3" >
                        <nav className="w-full flex flex-row justify-between">
                            <a href="#" className="ml-4">RajithSanjaya</a>
                            <div className="nav__menu" id="nav-menu">
                                <ul className="flex flex-row justify-evenly w-96">
                                    <li className="nav__item">
                                        <a href="#Home" className="nav__link active-link" id="btnHome">
                                            <i className="uil uil-estate nav__icon"></i>Home
                                        </a>
                                    </li>
                                    <li className="nav__item">
                                        <a href="#About" className="nav__link" id="btnAbout">
                                            <i className="uil uil-user nav__icon"></i>About
                                        </a>
                                    </li>
                                    <li className="nav__item">
                                        <a href="#Skills" className="nav__link" id="btnSkills">
                                            <i className="uil uil-file-alt nav__icon"></i>Skills
                                        </a>
                                    </li>
                                    <li className="nav__item">
                                        <a href="#Services" className="nav__link" id="btnServices">
                                            <i className="uil uil-suitcase nav__icon"></i>Services
                                        </a>
                                    </li>
                                    <li className="nav__item">
                                        <a href="#Portfolio" className="nav__link" id="btnPortfolio">
                                            <i className="uil uil-scenery nav__icon"></i>Portfolio
                                        </a>
                                    </li>
                                    <li className="nav__item">
                                        <a href="#Contactme" className="nav__link" id="btnContact">
                                            <i className="uil uil-envelope-upload nav__icon"></i>ContactMe
                                        </a>
                                    </li>
                                </ul>
                                <i className="uil uil-times nav__close" id="nav-close"></i>
                            </div>
                            <div className="pr-4">
                            <AiFillMoon />
                            </div>
                        </nav>
            </header>
    )
}