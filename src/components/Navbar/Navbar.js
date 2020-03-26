import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import {faWrench} from '@fortawesome/free-solid-svg-icons';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom"

const element = <FontAwesomeIcon icon={faUser}/>
const element1 = <FontAwesomeIcon icon={faEnvelopeOpen}/>
const element2 = <FontAwesomeIcon icon={faExclamationCircle}/>
const element3 = <FontAwesomeIcon icon={faMusic}/>
const element4 = <FontAwesomeIcon icon={faWrench}/>
const element5 = <FontAwesomeIcon icon={faUserCircle}/>


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>

                <li>
                    <NavLink to="/Profile" className={s.item} activeClassName={s.active}> {element} Profile </NavLink>
                </li>
                <li>
                    <NavLink to="/Dialogs" className={s.item} activeClassName={s.active}>  {element1}
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/News" className={s.item} activeClassName={s.active}> {element2} News
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Users" className={s.item} activeClassName={s.active}> {element5} Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Music" className={s.item} activeClassName={s.active}> {element3} Music</NavLink>
                </li>
                <li>
                    <NavLink to="/Settings" className={s.item} activeClassName={s.active}> {element4} Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;