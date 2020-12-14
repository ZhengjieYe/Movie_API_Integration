import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import MoviesContextProvider from '../src/contexts/moviesContext'
import ReviewForm from '../src/components/reviewForm'
import ActorCard from '../src/components/actorCard'
import ActorInfo from '../src/components/actorInfo'
import KnowForCard from '../src/components/knowForCard'
import MovieCarouselShow from '../src/components/movieCarouselShow'
import SignupForm from '../src/components/signupForm'
import SiteHeader from '../src/components/siteHeader'
import SortbyButtonGroup from '../src/components/sortbyButtonGroup'
import RemoveAlert from '../src/components/alert/removeAlert'
import AddButton from '../src/components/buttons/addButton'
import { Provider } from 'react-redux';
import store from "../src/reduxStore/store"
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from '../src/firebase';
import PlayButton from '../src/components/buttons/playBotton'
import RateBotton from '../src/components/buttons/rateButton'

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

const movies=[sample,sample,sample,sample]

storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);


  storiesOf("Add review Page/reviewForm",module)
  .addDecorator(story =>(
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .addDecorator(story =>(
    <MoviesContextProvider>{story()}</MoviesContextProvider>
  ))
    .add("default",()=><ReviewForm movie={sample} />)

storiesOf("Authentication Page/SignupForm",module)
  .addDecorator(story =>(
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .addDecorator(story =>(
    <MoviesContextProvider>{story()}</MoviesContextProvider>
  ))
  .add("default",()=><SignupForm onSubmit={()=>{return "fake function"}} user=""/>)



storiesOf("Common Components/SiteHeader",module)
  .addDecorator(story =>(
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .addDecorator(story =>(
    <MoviesContextProvider>{story()}</MoviesContextProvider>
  ))
  .addDecorator(story =>(
    <Provider store={store}>{story()}</Provider>
  ))
  .addDecorator(story =>(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>{story()}</FirebaseAppProvider>
  ))
  .add("default",()=><SiteHeader/>)
  

  storiesOf("Common Components/MovieCarouselShow",module)
  .addDecorator(story =>(
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .addDecorator(story =>(
    <MoviesContextProvider>{story()}</MoviesContextProvider>
  ))
  .add("default",()=><MovieCarouselShow movies={movies} carouselAction={()=>{}}/>)
  

  storiesOf("Common Components/Buttons/AddButton",module)
  .addDecorator(story =>(
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .addDecorator(story =>(
    <MoviesContextProvider>{story()}</MoviesContextProvider>
  ))
  .add("default",()=><AddButton content="test"size="lg" variant="primary" clickAction={()=>{}}/>)
  


  
storiesOf("Common Components/Buttons/ComboButton",module)
.addDecorator(story =>(
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.addDecorator(story =>(
  <MoviesContextProvider>{story()}</MoviesContextProvider>
))
.add("default",()=><ComboButton item={{...sample,favorite:false}} removeAlertAction={()=>{}} addButtonAction={()=>{}} content="Favorites"/>)
.add("inFavorites",()=><ComboButton item={{...sample,favorite:true}} removeAlertAction={()=>{}} addButtonAction={()=>{}} content="Favorites"/>)
.add("inWatachlist",()=><ComboButton item={{...sample,isInWatchList:true}} removeAlertAction={()=>{}} addButtonAction={()=>{}} content="Watchlist"/>)


storiesOf("Common Components/Buttons/PlayButton",module)
.addDecorator(story =>(
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.addDecorator(story =>(
  <MoviesContextProvider>{story()}</MoviesContextProvider>
))
.add("default",()=><PlayButton />)



storiesOf("Common Components/Buttons/RateBotton",module)
.addDecorator(story =>(
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.addDecorator(story =>(
  <MoviesContextProvider>{story()}</MoviesContextProvider>
))
.addDecorator(story =>(
  <Provider store={store}>{story()}</Provider>
))
.add("default",()=><RateBotton movie={sample} handleRate={()=>{}} />)


storiesOf("Popular Actor Page/KnowForCard",module)
.addDecorator(story =>(
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default",()=><KnowForCard movie={sample} />)


storiesOf("Popular Actor Page/SortbyButtonGroup",module)
.addDecorator(story =>(
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default",()=><SortbyButtonGroup sortBy="1" setSortBy={()=>{}} gender="1" setGender={()=>{}}/>)
.add("Popularity",()=><SortbyButtonGroup sortBy="2" setSortBy={()=>{}} gender="1" setGender={()=>{}}/>)
.add("Male",()=><SortbyButtonGroup sortBy="1" setSortBy={()=>{}} gender="2" setGender={()=>{}}/>)
.add("Female",()=><SortbyButtonGroup sortBy="1" setSortBy={()=>{}} gender="3" setGender={()=>{}}/>)

const actor={
  id:1813,
  biography:"Anne Jacqueline Hathaway (born November 12, 1982) is an American actress. After several stage roles, she appeared in the 1999 television series Get Real. She played Mia Thermopolis in The Princess Diaries (2001). Over the next three years, Hathaway reprised that role for The Princess Diaries 2: Royal Engagement, and starred in family films, appearing as the title character in Ella Enchanted, both in 2004. Hathaway had dramatic roles in Havoc and Brokeback Mountain, both in 2005. She starred in The Devil Wears Prada (2006) and in Becoming Jane (2007) as Jane Austen. In 2008, she was acclaimed for her lead role in Rachel Getting Married, for which she won awards and was nominated for the Academy Award for Best Actress. In 2010, she starred in the box office hits Valentine's Day and Tim Burton's Alice In Wonderland, as well as Love and Other Drugs. In 2011, she had a voice role in the animated box office Rio. She is scheduled to play Selina Kyle/Catwoman in Christopher Nolan's The Dark Knight Rises. People magazine named her one of its breakthrough stars of 2001, and she first appeared on its list of the world's 50 Most Beautiful People in 2006.Description above from the Wikipedia article Anne Hathaway (actress), licensed under CC-BY-SA, full list of contributors on Wikipedia.",
  birthday: "1982-11-12",
  gender: 1,
  name: "Anne Hathaway",
  place_of_birth: "Brooklyn, New York,  USA",
  popularity: 25.841,
  profile_path: "/tLelKoPNiyJCSEtQTz1FGv4TLGc.jpg"
}
storiesOf("Popular Actor Page/ActorCard",module)
.addDecorator(story =>(
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default",()=><ActorCard actor={actor} />)
