import React from 'react';
import Navbar from './Navbar';
import logo from '../Images/logo.png';

function Screen8() {
    return (
        <div class='wrapper'>
            <Navbar />
            <div id='content' className='p-0'>
                <div class='container-fluid justify-content-center px-0'>
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
                    <h3
                        className='text-center'
                        style={{ fontWeight: '600', background: 'white' }}>
                        Swastik School Of Dance
                    </h3>
                    <div class='bg-holder'></div>
                    <p class='text-justify customp'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially
                        unchanged.It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining
                        essentially unchanged.
                    </p>
                </div>

                {/* BOX 1 */}
                <div
                    className='row justify-content-center align-items-center mb-2 mx-0 pt-2'
                    style={{
                        background: '#D7CEC7',
                        minHeight: 'xxx',
                        overflow: 'hidden',
                    }}>
                    <div className='col-md-1'></div>
                    <div
                        className='col-md-4 justify-content-end align-self-center pr-5 py-4'
                        style={{ borderRight: '1px solid black' }}>
                        <div className='square2 float-right'></div>
                    </div>

                    <div className='col-md-4 pl-5 py-4'>
                        <h4 className='pb-3'>'LOREM IPSUM'</h4>
                        <h6>Instructor : Lorem Ipsum</h6>
                        <h6>Genre : Lorem Ipsum</h6>
                        <h6>Timings : Mon to Fri,5pm-7pm</h6>
                        <h6 className='pt-4'>About</h6>
                        <p class='text-justify customp7'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className='col-md-1'></div>
                </div>

                {/* BOX 2 */}
            </div>
        </div>
    );
}

export default Screen8;
