import React, {Suspense} from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./login/login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import( "./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import( "./components/Profile/ProfileContainer"));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className={s.appWrapper}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={s.appWrapperContent}>
                        <Route path="/profile/:userId?"
                               render={withSuspense(ProfileContainer)}/>
                        <Route path="/dialogs"
                               render={withSuspense(DialogsContainer)}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

let SamuraiJsApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            < AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default SamuraiJsApp;

