import React, { useEffect } from 'react';
import Navbar from './Navbar';
import EventsCardLeft from './EventsCardLeft';
import EventsCardRight from './EventsCardRight';
import $ from 'jquery';

import logo from '../Images/logo.png';

function Screen4() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleToggle = () => {
        $('#sidebar').toggleClass('active');
    };
    return (
        <div class='wrapper' style={{ background: 'white' }}>
            <Navbar />
            <div id='content' className='p-0'>
                <div class='container-fluid justify-content-center px-0'>
                    <button
                        type='button'
                        id='sidebarCollapse'
                        class='btn '
                        style={{
                            background: 'transparent',
                            position: 'fixed',
                            top: '10px',
                            left: 0,
                            zIndex: 1000,
                        }}
                        onClick={handleToggle}>
                        <i class='fas fa-align-left'></i>
                    </button>
                    <div style={{ height: 125 }}>
                        <div
                            className='text-center '
                            style={{
                                height: 125,
                                background: 'white',
                                position: 'fixed',
                                height: 125,
                                width: '100%',
                                zIndex: 999,
                            }}>
                            <img
                                className='fixed-top'
                                src={logo}
                                style={{
                                    height: 125,
                                    width: 187.5,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                }}
                            />
                        </div>
                    </div>
                    <h1 className='text-center' style={{ fontWeight: '600' }}>
                        Events
                    </h1>
                    <div
                        className='row justify-content-center my-3 mx-0 py-3'
                        style={{ background: 'white', minHeight: '75vh' }}>
                        <div className='col-md-5 col-md-pull-6 align-self-center'>
                            <div class='holderbg1'></div>
                        </div>

                        <div className='col-md-6 py-5 align-self-center'>
                            <h3
                                className='text-center'
                                style={{ color: '#5f585d', fontWeight: '600' }}>
                                Saturday's @ Swastika
                            </h3>
                            <p class='text-justify customp1'>
                                Saturays @ Swastika is a monthly baithak series of performances conducted on the first Saturday of every month.
                                Artists from different genres are invited to perform at our studio .
                                This series is conducted at ahum’s swastika school of dance and music in Jakkur.
                                First event in this series performed in March 2018. Since then Saturdays @ Swastika have been enjoyed by the patrons.
                            </p>
                            <div class='text-center'>
                                <button
                                    type='button'
                                    className='btn py-2 px-5'
                                    style={{
                                        borderRadius: '25px',
                                        background: '#401A21',
                                        color: 'white',
                                    }}>
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                    <EventsCardRight />
                    <EventsCardLeft />
                </div>
            </div>
        </div>
    );
}

export default Screen4;
