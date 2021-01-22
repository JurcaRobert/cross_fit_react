import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out THE PROGRAMS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
             src="images/img-3.jpg"
              text='Explore the hidden waterfall '
              label='Program #1'
              path='/products'
            />
            <CardItem
                src='images/img-4.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Program #2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
               src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Program #3'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Program #4'
              path='/products'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
