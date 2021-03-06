import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
    const {cardsCount} = props;

    return (
        <MainPage 
            cardsCount = {cardsCount}
        />
    );
};

MainPage.propTypes = {
    cardsCount: PropTypes.number.isRequired,
};

export default App;