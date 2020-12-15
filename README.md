# Assignment 1 - ReactJS app.

Name: ZhengjieYe 

## Features.

 + Feature 1 - display the wonderful movies.
 + Feature 2 - display the upcoming movies.
 + Feature 3 - display the popular actors.
 + Feature 4 - display the now playing movies.
 + Feature 5 - add the movies you like to the Favorites list, you can write a review for it.
 + Feature 6 - you can read through the reviews of any movies as you want.
 + Feature 7 - display the detail infomation if you want to know more about one movie or one actor.
 + Feature 8 - jump to the movie's home page if you want to learn more.
 + Feature 9 - search and filter are supported for these movies and actors list, you can find what you want easily.
 + Feature 10 - show famous works which are known for by the actor you want to know more.
 + Feature 11 - sign up/log in/log out (supported by firebase)
 + Feature 12 - rate for the movies you like after you log in
 + Feature 13 - show the watchlist after you log in

## Setup requirements (If required).

+ node.js enviriment

+ git 

+ create two enviroment fires in the root.

1. .env - used in react code 

    you need to add following variables in this file:
    ![][env]
    The three variables above are coming from TMDB website(https://www.themoviedb.org/). Once you sign up, you can get them.

    The following variables are comming from firebase(https://firebase.google.com/). You will get them follow this document(https://firebase.google.com/docs/auth).
2. cypress.env.json - used for test

    you need to add following variables in this file:
    ![][cypress_env]
    The three variables are also comming from TMDB website as above.
+ install dependency

    ```
    npm install
    ```

After these, you can enjoy this as you want.
## API Data Model.


+ https://api.themoviedb.org/3/movie/${id} - Get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - Get a list of movie genres
+ https://api.themoviedb.org/3/discover/movie - Discover movies by different types of data like average rating, number of votes, genres and certifications.
+ https://api.themoviedb.org/3/movie/${id}/reviews - Get the user reviews for a movie.
+ https://api.themoviedb.org/3/movie/upcoming - Get a list of upcoming movies in theatres. 
+ https://api.themoviedb.org/3/movie/${movie_id}/images - Get the images that belong to a movie.
+ https://api.themoviedb.org/3/movie/top_rated - Get the top rated movies on TMDb.
+ https://api.themoviedb.org/3/person/popular - Get the list of popular people on TMDb. 
+ https://api.themoviedb.org/3/person/${id} - Get the primary person details by id.
+ https://api.themoviedb.org/3/movie/now_playing - Get a list of movies in theatres.
+ https://api.themoviedb.org/3/authentication/token/new - Create a temporary request token that can be used to validate a TMDb user login. 
+ https://api.themoviedb.org/3/authentication/session/new - You can use this method to create a fully valid session ID once a user has validated the request token. 
  ```
  POST Request Body:
  {
    "request_token": request_token
  }
  ```
+ https://api.themoviedb.org/3/movie/${id}/rating&session_id=${session_key} - Rate a movie.
  ```
  POST Request Body:
  {
  "value": rate value, e.g. 8.5
  }
  ```
+ https://api.themoviedb.org/3/authentication/token/validate_with_login - This method allows an application to validate a request token by entering a username and password.
  ```
  POST Request Body:
  {
    "username": username in TMDB,
    "password": password in TMDB,
    "request_token": reqquest_token
  }
  ```
+ https://api.themoviedb.org/3/account/{account_id}/rated/movies - Get a list of all the movies you have rated.
+ https://api.themoviedb.org/3/authentication/session - delete (or "logout") from a session. 
  ```
  DELETE Request Body:
  {
     "session_id": session_id
  }
  ```
## App Design.

### Component catalogue (If required).

![][storybook]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

> home page

![][home_page]
> the movie card

![][home_card]

> when you click **Add to Favorites** button, the button of the card and the carousel will change simultaneously


![][home_add]

> also you can click the **+** in the movie card, you can add it to favorites too.

![][home_add_card]

> when you click **Already in Favorites** button, it will trigger a alert.

![][home_delete]

> so as the card

![][home_delete_card]

> when you click **More info** or click the poster of a movie, you will enter the movie detail page which is same as initial version of the project.


![][movie_detail]

> upcoming page


![][upcoming_page]

> favorites page


![][favorites]

> popular actor page


![][popular_actor]

> it will re-render when the **sort by** or **filter** change



![][actor_sort]
![][actor_female]

> you can find the actor's detail information after you click the actor.


![][actor_detail]

> it will show the works that the actor is known for after you click the **Known for**


![][actor_known_for]




> sign up page


![][sign_up]

> sign up errors

![][sign_up_error1]
![][sign_up_error2]
![][sign_up_error3]
![][sign_up_error4]

> sign up success


![][sign_up_success]

> log in page


![][log_in]

> log in errors



![][log_in_error1]
![][log_in_error2]
![][log_in_error3]

> you can see private page after you login.


![][log_in_siteheader]

>you can access rate page, after you login. And it will automatically redirect to TMDB authentication page, casue we need the authenticated session to rate a movie.


![][TMDB_auth]
![][rate_page]

> now you can rate for movies! The value will change once you **confirm**. and this is connected to your TMDB accound.


![][rate]

> watchlist page


![][watchlist]

> now playing page


![][now_playing]
## Routing.

+ /watchlist (protected) - display the user's watchlist
+ /rate (protected) - let use to rate the movie they want
+ /signup (public) - create new account
+ /login (public) - log in your personal account
+ /nowplaying (public) - display now playing movies
+ /popular (public) - display popular actors
+ /actor/:id (public) - display detailed information of a actor
+ /actor/:id/knowFor (public/nested) - display the actor's famous works



### Data hyperlinking.



![][hy_carousel]

> click the TMDB Icon casues display of the home page

![][hy_siteheader]

> click the poster causes display of that movie's detail

![][hy_card]

> click the actor causes display of that actor's detail

![][hy_actor]

> click learn more causes redirect to the actor's external page

![][hy_learn_more]

> click log out casues log out current account 

![][hy_log_out]

> click Sign up now causes redirect to sign up page

![][hy_sign_up]
## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

+ useforms hook
    
    filename:
    + .\src\components\signupForm\index.js
    + .\src\pages\loginPage.js

    reference link:

    + https://react-hook-form.com/api/

+ React Bootstrap UI library
    
    firename:
      most new added files use the react bootstrap components

    + .\src\components\actorCard\index.js
    + .\src\components\actorDetail\index.js
    + .\src\components\actorInfo\index.js
    + .\src\components\alert\removeAlert.js
    + .....

    reference link:
    
    + https://react-bootstrap.github.io/getting-started/introduction
    + https://react-bootstrap.github.io/components/alerts
    + https://getbootstrap.com/docs/4.5/utilities/overflow/

+ firebase

    firename:

    + .\src\firebase.js
    + .\src\index.js
    + .\src\components\siteHeader\index.js
    + .\src\pages\loginPage.js
    + .\src\pages\signupPage.js
    + .\stories\index.js

    reference link:
    
    + https://firebase.google.com/docs/auth

+ Redux/Redux toolkit

    firename:
    
    + .\src\index.js
    + .\src\components\buttons\rateButton.js
    + .\src\components\siteHeader\index.js
    + .\src\pages\ratePage.js
    + .\src\reduxStore\store.js
    + .\src\reduxStore\slice\movieSlice.js
    + .C\stories\index.js

    reference link:

    + https://redux.js.org/introduction/installation
    + https://redux.js.org/introduction/examples
    + https://redux.js.org/tutorials/essentials/part-1-overview-concepts
    + https://redux-toolkit.js.org/tutorials/basic-tutorial

+ Styled Components
    
    firename: only intalled but not used

    reference link: 

    + https://styled-components.com/docs/basics

+ axios

    firename: used to send POST/DELETE request
    
    + .\src\api\tmdb-api.js

    reference link:

    + https://github.com/axios/axios

---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Zhengjie Ye

## App Features.

[Document each new feature/page in your Movies Fan app, including: Feature Name; Its objective/purpose; The associated test file; a screenshot of its UI.]
e,g,
 

+ Home page - Show the movies list and a big carousel of them. The **Add to Favorites** and the **+** button of each card will add the movie to favorites list. The **More info** button reveals the detail page of the movie, you can also do this with clicking the cards.

    Tests: cypress\integration\home-page.spec.js



![][agile_home_page]



+ Upcoming page - Show the movies list and a big carousel of them. The **Add to Watchlist** and the **+** button of each card will add the movie to watch list. The **More info** button reveals the detail page of the movie, you can also do this with clicking the cards.

    Tests: cypress\integration\upcomming-page.spec.js

![][agile_upcoming_page]


+ Now playing page - Show the now playing movies list and a big carousel of them. The **More info** button reveals the detail page of the movie, you can also do this with clicking the cards.

    Tests: cypress\integration\nowPlaying-page.spec.js


![][agile_nowplaying_page]

+ Popular actor page - show the actors list. The **Sort by** choices and the **filter** choices reveal different order of the actors list. The **picture** of the actor reveals the detail page of a actor.

    Tests: cypress\integration\popularActor-page.spec.js

![][agile_popular_page]


+ Actor detail page - show the detail information of one actor. The **Know for** button reveals the actor's famous works.

    Tests: cypress\integration\popularActor-page.spec.js

![][agile_detail_actor]

+ Log in page - log in with account. The **Log in** button in siteHeader reveals log in page. In the log in page, clicking the **Log in** button in Log in page will verifiy the email and password, show errors if there are something wrong.

    Tests: cypress\integration\userAuthentication-page.spec.js

![][agile_site_header]
![][agile_log_in]

+ Sign up page - sign up a new account. The **Sign up now** in log in page will redirect to sign up page. The **Sign up** button will verify the email and password, and it will show errors if there are something wrong. If everything is right, it will redirect to success page.

    Tests: cypress\integration\userAuthentication-page.spec.js

![][agile_sign_up]
![][agile_sign_up_error]
![][agile_sign_up_success]

+ Rate page - rate for some movies. The **Rate now** button in siteHeader will redirect to rate page. The **Rate now!** button of each card reveals rating area used for rating. The **Confirm now** button will post the value to TMDB.

    Tests: cypress\integration\ratePage.spec.js

![][agile_rate]

+ Watchlist page - show the movies which have added to watchlist.

  Tests: cypress\integration\watchlist-page.spec.js

![][agile_watchlist]

+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.

    Tests: cypress/integration/movieDetails.spec.js 

![][movieDetail]

+ Movie Review page: Displays the full text of a movie review.

    Tests: cypress/integration/movieReviewPage.spec.js 

![][review]



## Testing.

Cypress Dashboard URL: (Cause the free test recording limit plan, so I create two projects.)

Old one:
+ https://dashboard.cypress.io/projects/8qmc99/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D 

New one:
+ https://dashboard.cypress.io/projects/ja7m4b/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

### Advanced Testing (If required).


+ cypress\integration\userAuthentication-page.spec.js - test the sign up page when the email format error, password too short error, email has been registered error or password wrong error. Test the log in page when the email format error, password too short error, password wrong error or email not exist error.
+ cypress\integration\movieReview-page.spec.js - test the write review page when author is empty or review is too short.
+ cypress\integration\home-page.spec.js - test the controler when filter result is empty.

## Independent learning (If relevant).

### CI/CD & Auto-deployment
    
  create three branch 
  
  + master: merge from staging branch, and will be deployed to **production server**
  + staging: merge from develop branch, and will be deployed to **testing server**
  + develop: develop new feature in this branch.

  server address:
  
  1. production server:

    http://54.157.43.36:5010/
  2. testing server:

    http://34.255.115.233:3000/

  screenshot:




> testing server of staging branch:

  ![][agile_server_testing]

> production server of master branch:

  ![][agile_server_prod]

> gitlab-ci.yml setting

  ![][agile_auto_setting]

> gitlab viriable setting

  ![][agile_auto_variable]

reference link:

+ https://www.nginx.com/resources/glossary/nginx/
https://medium.com/@timmykko/deploying-create-react-app-with-nginx-and-ubuntu-e6fe83c5e9e7
+ https://docs.nginx.com/nginx/deployment-guides/amazon-web-services/ec2-instances-for-nginx/
+ https://stackabuse.com/uploading-files-to-aws-s3-with-node-js/
https://aws.amazon.com/premiumsupport/knowledge-center/s3-instance-access-bucket/?nc1=h_ls
+ http://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html
+ https://www.youtube.com/watch?v=WsZC7cE0-NE
+ https://phoenixnap.com/kb/ssh-to-connect-to-remote-server-linux-or-windows
+ https://www.howtogeek.com/117435/htg-explains-the-linux-directory-structure-explained/
+ https://www.liquidweb.com/kb/what-is-systemctl-an-in-depth-overview/

### Cypress custom commands

  firename: 

  + commands define in cypress\support\commands.js
  + commands are used in every new test files
  screenshot:
  
  ![][agile_custom_command]
  ![][agile_custom_command_example]

  reference link:

  + https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements
  + https://docs.cypress.io/guides/tooling/typescript-support.html#Types-for-custom-commands

### Cypress plugins

plugins name:

+ cypress-react-unit-test
+ cypress-pipe
+ cypress-skip-test

firename:
1. cypress-react-unit-test

    + cypress\integration\unitTest\util.spec.js
    + src\components\movieCard\movieCard.spec.js
2. cypress-pipe

    + .\cypress\integration\userAuthentication-page.spec.js
3. cypress-skip-test:installed but not used

screenshot:
1. cypress-react-unit-test

![][agile_unit_test]


2. cypress-pipe

![][agile_plugin_pipe]
![][agile_pipe_example]

3. cypress-skip-test

![][agile_plugins]


reference link:
1. cypress-react-unit-test

    + https://github.com/cypress-io/cypress-react-unit-test

2. cypress-pipe

    + https://github.com/NicholasBoll/cypress-pipe

3. cypress-skip-test
    
    + https://github.com/cypress-io/cypress-skip-test


### Bundling/Code splitting

  firename:

  + src\index.js

  screenshot:



  ![][agile_bundle]
  ![][agile_bundle_build]

### Code-coverage

  firename:


  + cypress\support\index.js
  + cypress\plugins\index.js

  screenshot:

  ![][agile_code_coverage_text]
  ![][agile_code_coverage_html]
  
  reference link:

  + https://github.com/cypress-io/code-coverage
  + https://docs.cypress.io/guides/tooling/code-coverage.html#Instrumenting-code
---------------------------------

[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png
[env]: ./public/screenshot/env.png
[cypress_env]: ./public/screenshot/cypress_env.jpg
 [agile_custom_command]: ./public/screenshot/agile_custom_command.png 
 [agile_custom_command_example]: ./public/screenshot/agile_custom_command_example.png 

 [agile_unit_test]: ./public/screenshot/agile_unit_test.png
[agile_plugin_pipe]: ./public/screenshot/agile_plugin_pipe.png
[agile_pipe_example]: ./public/screenshot/agile_pipe_example.png
[agile_plugins]: ./public/screenshot/agile_plugins.png 
 [storybook]: ./public/screenshot/storybook.png 
 [home_page]: ./public/screenshot/home_page.png 
 [home_card]: ./public/screenshot/home_card.png 
 [home_add]: ./public/screenshot/home_add.png 
 [home_add_card]: ./public/screenshot/home_add_card.png 
 [home_delete]: ./public/screenshot/home_delete.png 
 [home_delete_card]: ./public/screenshot/home_delete_card.png 
 [movie_detail]: ./public/screenshot/movie_detail.png 
 [upcoming_page]: ./public/screenshot/upcoming_page.png 
 [favorites]: ./public/screenshot/favorites.png 
 [popular_actor]: ./public/screenshot/popular_actor.png 
 [actor_sort]: ./public/screenshot/actor_sort.png 
 [actor_female]: ./public/screenshot/actor_female.png 
 [actor_detail]: ./public/screenshot/actor_detail.png 
 [actor_known_for]: ./public/screenshot/actor_known_for.png 
 [sign_up]: ./public/screenshot/sign_up.png 
 [sign_up_error1]: ./public/screenshot/sign_up_error1.png 
 [sign_up_error2]: ./public/screenshot/sign_up_error1.png 
 [sign_up_error3]: ./public/screenshot/sign_up_error3.png 
 [sign_up_error4]: ./public/screenshot/sign_up_error4.png 
 [sign_up_success]: ./public/screenshot/sign_up_success.png 
 [log_in]: ./public/screenshot/log_in.png 
 [log_in_error1]: ./public/screenshot/log_in_error1.png
[log_in_error2]: ./public/screenshot/log_in_error2.png
[log_in_error3]: ./public/screenshot/log_in_error3.png 
 [log_in_siteheader]: ./public/screenshot/log_in_siteheader.png 
 [rate_page]: ./public/screenshot/rate_page.png 
 [TMDB_auth]: ./public/screenshot/TMDB_auth.png 
 [rate]: ./public/screenshot/rate.png 
 [watchlist]: ./public/screenshot/watchlist.png 
 [now_playing]: ./public/screenshot/now_playing.png 
 [hy_carousel]: ./public/screenshot/hy_carousel.png 
 [hy_siteheader]: ./public/screenshot/hy_siteheader.png 
 [hy_card]: ./public/screenshot/hy_card.png 
 [hy_actor]: ./public/screenshot/hy_actor.png 
 [hy_learn_more]: ./public/screenshot/hy_learn_more.png 
 [hy_log_out]: ./public/screenshot/hy_log_out.png 
 [hy_sign_up]: ./public/screenshot/hy_sign_up.png 
 [agile_home_page]: ./public/screenshot/agile_home_page.png 
 [agile_upcoming_page]: ./public/screenshot/agile_upcoming_page.png 
 [agile_nowplaying_page]: ./public/screenshot/agile_nowplaying_page.png 
 [agile_popular_page]: ./public/screenshot/agile_popular_page.png 
 [agile_detail_actor]: ./public/screenshot/agile_detail_actor.png 
 [agile_site_header]: ./public/screenshot/agile_site_header.png 
 [agile_log_in]: ./public/screenshot/agile_log_in.png 
 [agile_sign_up]: ./public/screenshot/agile_sign_up.png 
 [agile_sign_up_error]: ./public/screenshot/agile_sign_up_error.png 
 [agile_sign_up_success]: ./public/screenshot/agile_sign_up_success.png 
 [agile_rate]: ./public/screenshot/agile_rate.png 
 [agile_watchlist]: ./public/screenshot/agile_watchlist.png 
 [agile_server_testing]: ./public/screenshot/agile_server_testing.png
[agile_server_prod]: ./public/screenshot/agile_server_prod.png
[agile_auto_setting]: ./public/screenshot/agile_auto_setting.png
[agile_auto_variable]: ./public/screenshot/agile_auto_variable.png 
 [agile_bundle]: ./public/screenshot/agile_bundle.png
[agile_bundle_build]: ./public/screenshot/agile_bundle_build.png 
 [agile_code_coverage_text]: ./public/screenshot/agile_code_coverage_text.png
[agile_code_coverage_html]: ./public/screenshot/agile_code_coverage_html.png 
