import React from 'react'

import Logo from '../assets/logo.svg'

function Header(){
    return (
        <header>
            <div className="content">
                <Logo />
                <nav>
                    <ul>
                        <li>Meu Perfil</li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;