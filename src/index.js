import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const COUNT_PLACE_CARD = 5;

ReactDOM.render(
    <App
      cardsCount = {COUNT_PLACE_CARD}
    />,
    document.querySelector(`#root`)
);
