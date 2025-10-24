import React from 'react';
import './App.scss';
import equilibriumImage from '../images/image-equilibrium.jpg';
import ethereum from '../images/icon-ethereum.svg';
import clock from '../images/icon-clock.svg';
import avatar from '../images/image-avatar.png';

const cardData = {
    title: 'Equilibrium #3429',
    description: 'Our Equilibrium collection promotes balance and calm.',
    price: '0.041 ETH',
    timeRemaining: '3 days left',
    authorName: 'Jules Wyvern',
}

function App() {
    return (
        <section className='preview'>
            <div className="preview__image-container">
                <img 
                    className='preview__img'
                    src={equilibriumImage}
                    alt='A transparent cube'
                />
            </div>
            <div className='preview__content'>
                <h1 className='preview__title'>
                    {cardData.title}
                </h1>
                <p className='preview__description'>
                    {cardData.description}
                </p>
                <div className='preview__data'>
                    <div className='preview__eth'>
                        <img
                            className='preview__eth-icon'
                            src={ethereum}
                            alt=''
                        />
                        <span className='preview__eth-data'>
                            {cardData.price}
                        </span>
                    </div>
                    <div className='preview__time'>
                        <img
                            className='preview__time-icon'
                            src={clock}
                            alt=''
                        />
                        <span className='preview__time-data'>
                            {cardData.timeRemaining}
                        </span>
                    </div>
                </div>
            </div>
            <div className='preview__author'>
                <img
                    className='preview__avatar'
                    src={avatar}
                    alt='the avatar of Jules Wyvern'
                />
                <span className='preview__author-info'>
                    Creation of &nbsp;
                    <span className='preview__author-name'>
                        {cardData.authorName}
                    </span>
                </span>
            </div>
        </section>
    );
}

export default App;