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
              text='Program 2 - some text'
              label='Program #2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
               src='images/img-3.jpg'
              text='Program 3 - some text'
              label='Program #3'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='program 4 - some text'
              label='Program #4'
              path='/products'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Some text'
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
