# Front End Work Sample Instructions

You've been tasked with delivering the following requirements so as to make the information in the provided API consumable by individuals other than Evan.

Your solution will need to interact with a REST API which is already deployed. You can access the API here [https://us-central1-beacon-fe-worksample-api.cloudfunctions.net/app](https://us-central1-beacon-fe-worksample-api.cloudfunctions.net/app)

Here are some API routes which you may need to use along with the above base URL:

`/movies`

`/reviews`

`/reviews?movie-id=1`

for example:
https://us-central1-beacon-fe-worksample-api.cloudfunctions.net/app/reviews?movie-id=3

Feel free to view the API in your browser and inspect the data schema.

---

## Initialize a new React project

You will need to create a new React project to get started. You can use regular JavaScript or Typescript whichever you prefer. (We do use Typescript at Beacon)

`npx create-react-app work-sample`

or

`npx create-react-app work-sample --template typescript`

## Tasks

- [x] Display the list of movies on the page. Movies should be listed in alphabetical order.

<img src="http://i.imgur.com/y9uwdQw.png" width="500">

- [x] When a user clicks on the title of the movie, they should be redirected to the Rotten Tomatoes page for that movie.

<img src="http://i.imgur.com/EYia9xk.gif" width="500">

- [x] Display the year the movie was released next to the title.

<img src="http://i.imgur.com/J9eBexT.png" width="500">

- [x] Display the Rotten Tomatoes rating next to each movie title in the list. This value should be displayed as a percentage.

<img src="http://i.imgur.com/B9kFGQe.png" width="500">

- [x] In order to not spam our API, cache the responses in the browsers [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API). Do not make network requests to the API if there is a cached version of the response available.

<img src="http://i.imgur.com/cD4xmbQ.gif" width="500">

- [ ] Allow searching by title. Only filter results if 2 or more characters are entered in the search box. The list below should update when the value of the search box changes.

  Search should

  - be case-insensitive
  - exact match on any substring in `title`

<img src="http://i.imgur.com/zkbLoS3.gif" width="500">

- [ ] Allow filtering by decade. Decade options should be computed from the data, _not hard-coded_. Selecting a decade should filter the list to show all movies from that decade.

<img src="http://i.imgur.com/aGhZLHS.gif" width="500">

- [ ] When a movie row is clicked, expand the row to show what Evan says about the movie. Clicking the row again should collapse it.

<img src="http://i.imgur.com/nSBORZw.gif" width="500">

**NOTE**: Clicking on the title should still take you to the Rotten Tomatoes page, but **_should not_** expand the row before the user leaves the page.

<img src="http://i.imgur.com/GL8X3sI.gif" width="500">

- [ ] Display the movie art next to the review. The image files are provided by the API.

<img src="http://i.imgur.com/UErNiAB.png" width="500">
- [ ] All of the above features should look nice. Feel free to borrow styling from the screenshots or improve upon them. You have the freedom to style the solution however you see fit, feel free to be creative.  Do not worry about cross-browser compatibility; the only browser you need to concern yourself with is the latest version of Google Chrome.

## Success Criteria

- Your solution delivers all the requirements above.
- Your code is thoughtful, stylistically consistent, and easily extensible.
- Be creative. Feel free to import libraries from npm if you feel it is helpful.

This list is not exhaustive, but it represents the bulk of what comprises a successful solution.
