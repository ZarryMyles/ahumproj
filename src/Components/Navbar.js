import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

function Navbar() {
    const handleToggle = () => {
        $('#sidebar').toggleClass('active');
    };

    return (
        <nav
            id='sidebar'
            className='active'
            style={{
                zIndex: 99999,
                position: 'fixed',
                bottom: 0,
                top: 0,
            }}>
            <div class='sidebar-header'>
                <button
                    type='button'
                    id='sidebarCollapse'
                    class='btn btn-main'
                    style={{ background: 'transparent' }}
                    onClick={handleToggle}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        x='0px'
                        y='0px'
                        width='26'
                        height='26'
                        viewBox='0 0 172 172'
                        style={{ fill: '#000000' }}>
                        <g
                            fill='none'
                            fill-rule='nonzero'
                            stroke='none'
                            stroke-width='1'
                            stroke-linecap='butt'
                            stroke-linejoin='miter'
                            stroke-miterlimit='10'
                            stroke-dasharray=''
                            stroke-dashoffset='0'
                            font-family='none'
                            font-weight='none'
                            font-size='none'
                            text-anchor='none'
                            style={{ mixBlendMode: 'normal' }}>
                            <path d='M0,172v-172h172v172z' fill='none'></path>
                            <g fill='#ffffff'>
                                <path d='M0,30.96v6.88h172v-6.88zM0,82.56v6.88h172v-6.88zM0,134.16v6.88h172v-6.88z'></path>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>

            <ul class='list-unstyled components'>
                <li>
                    <Link to='/aboutUs'>About</Link>
                </li>
                <li>
                    <Link to='/upcomingShows'>Upcoming Shows</Link>
                </li>
                <li>
                    <Link to='/events'>Events</Link>
                </li>
                <li>
                    <Link to='/swastikSchoolOfDance'>
                        Swastik School Of Dance
                    </Link>
                </li>
                <li>
                    <a href='/bookspace'>Book the Space</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
            <div class='navFooter'>
                <div class='d-flex justify-content-around '>
                    <div>
                        <i class='fab fa-instagram'></i>
                    </div>
                    <div>
                        <i class='fab fa-facebook'></i>
                    </div>
                    <div>
                        <i class='fab fa-youtube'></i>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
