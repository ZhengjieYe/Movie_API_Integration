import React, { lazy, Suspense  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
// import MoviePage from './pages/movieDetailsPage'
// import FavoriteMoviesPage from './pages/favoritesMoviesPage' 
// import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
// import UpcomingMoviePage from './pages/movieUpcomingPage';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
// import AddMovieReviewPage from './pages/addMovieReviewPage';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase';
// import LoginPage from './pages/loginPage'
// import SignupPage from './pages/signupPage'
// import RatePage from './pages/ratePage'
// import WatchListPage from './pages/watchListPage'
import { Provider } from 'react-redux';
import store from "./reduxStore/store"
// import PopularActorPage from './pages/popularActorPage'
// import ActorDetail from './pages/actorDetailPage'
// import NowPlayingPage from './pages/nowPlayingPage'

const MoviePage = lazy(() => import('./pages/movieDetailsPage'));
const FavoriteMoviesPage= lazy(() => import('./pages/favoritesMoviesPage'));
const MovieReviewPage= lazy(() => import('./pages/movieReviewPage'));
const UpcomingMoviePage= lazy(() => import('./pages/movieUpcomingPage'));
const AddMovieReviewPage= lazy(() => import('./pages/addMovieReviewPage'));
const LoginPage= lazy(() => import('./pages/loginPage'));
const SignupPage= lazy(() => import('./pages/signupPage'));
const RatePage= lazy(() => import('./pages/ratePage'));
const WatchListPage= lazy(() => import('./pages/watchListPage'));
const PopularActorPage= lazy(() => import('./pages/popularActorPage'));
const ActorDetail= lazy(() => import('./pages/actorDetailPage'));
const NowPlayingPage= lazy(() => import('./pages/nowPlayingPage'));

const App = () => {
  return (
    <Provider store={store}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <div className="jumbotron p-0 m-0 w-100">
          <SiteHeader />
          <div className="container-fluid p-0">
            <MoviesContextProvider>
              <GenresContextProvider>
                <Suspense fallback={<h1>Loading page....</h1>}>
                  <Switch>
                    <Route path="/nowplaying" component={NowPlayingPage} />
                    <Route path="/actor/:id" component={ActorDetail} />
                    <Route path="/popular" component={PopularActorPage} />
                    <Route path="/watchlist" component={WatchListPage} />
                    <Route path="/rate" component={RatePage} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/login" component={LoginPage}/>
                    <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                    <Route exact path="/movies/upcoming" component={UpcomingMoviePage}/>
                    <Route path="/reviews/:id" component={MovieReviewPage} />
                    <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                    <Route path="/movies/:id" component={MoviePage} />
                    <Route path="/" render={()=>{
                      return (
                        <HomePage className="w-100"/>
                      );
                    }}/>
                    <Redirect from="*" to="/" />
                  </Switch>
                </Suspense>
              </GenresContextProvider>
            </MoviesContextProvider>
          </div>
        </div>
      </BrowserRouter>
    </FirebaseAppProvider>
    </Provider>
    );
};


ReactDOM.render(<App />, document.getElementById("root"));