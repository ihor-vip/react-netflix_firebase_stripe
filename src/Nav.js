import {useEffect, useState} from "react";
import './Nav.css';

export default function Nav() {
    const [show, handleShow] = useState(false);

    const transitionForNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionForNavBar);
        return () => window.removeEventListener('scroll', transitionForNavBar)
    },[])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav__contents">
                <img
                    className='nav__logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='netflix_logo'
                />

                <img
                    className='nav__avatar'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8n9HeEUrq7Pj9P0advGP3thHejzAB2_TRNfgpmlscnA6RL4ghAH3GMv3lpMkV3BfX2hI&usqp=CAU'
                    alt='netflix_avatar'
                />
            </div>
        </div>
    );
}