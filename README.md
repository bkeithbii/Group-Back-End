# Group-Back-End
Project 8 - Back End - (Chackan, Braden, Dennis)


## Installation of Dependencies
- Mongoose
- Express
- Node 
- Body-Parser
- Cors
- Node-Fetch

## Models
  We arranged two models that are for Movies and Shows that can display the essentials:
  name: String,
  description: String,
  rating: Number,
  releaseDate: String,
  image: String,
  media: String
  
## Fetch 
  Based the models off of what was fetched from the API:
  ```
  https://api.themoviedb.org/3/trending/movie/week?api_key=614c211b2d4c03410bfb2e7b28367475&page=3
  ```
  ```
  https://api.themoviedb.org/3/trending/tv/week?api_key=89714d55c10ecf711638286007448c33
  ```
  Ran off of trending page for the week, so that each week it will update on its own.
  
## Implementation of CRUD
  We used contollers and router to use CRUD on both models. Starting with get to find all movies and shows, then bringing the ability to find rating, name, and release date.
- /
- /rating/:rating
- /name/:name
- /releaseDate/:releaseDate
### post 
- /
### put
- /:name
### delete
- /:name

   
