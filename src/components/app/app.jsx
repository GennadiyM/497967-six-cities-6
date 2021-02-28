import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritePage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';

const App = (props) => {
    const {cardsCount} = props;

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MainPage 
                        cardsCount = {cardsCount}
                    />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/favorite">
                    <FavoritePage />
                </Route>
                <Route exact path="/room/:id?" component={RoomPage} />
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

MainPage.propTypes = {
    cardsCount: PropTypes.number.isRequired,
};

export default App;