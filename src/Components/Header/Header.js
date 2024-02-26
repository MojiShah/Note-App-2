import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src='Img/Me.jpeg' alt="Moji todo Logo" style={{ width: '200px' }} className="rounded-pill" />
                </a>
                <span>Moji Note App</span>
            </div>
        </nav>
    )
}
