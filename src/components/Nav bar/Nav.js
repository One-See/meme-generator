import './Nav.css'

import troll_face from '../../images/troll_face.png'

export default function Nav() {
    return (
        <nav className='nav-bar'>
            <div className='left-content'>
                <img src={troll_face} alt="troll face"></img>
                <span>Meme Generator</span>
            </div>

            <div className='right-content'>
                <span>React Course - project 3</span>
            </div>

        </nav>
    )
}