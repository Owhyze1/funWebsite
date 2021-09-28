/**
 * Axios website
 * https://axios-http.com/docs/intro
 *
 * To Install Axios
 *
 * npm install axios --save
 * Use import statement for axios --> import axios from 'axios'
 *
 * OR
 *
 * Include Axios through CDN
 * <script src='http://unpkg.com/axios/dist/axios.min.js'></script>
 */


// const URL = 'https://jsonplaceholder.typicode.com/posts';
const URL = 'https://api.hubapi.com';

axios.get(URL)
  .then(data => {
    console.log('Axios get method');
    console.log(data);
    // console.log('Status: ' + data.status)
    // console.log('Headers: ' + data.config.headers.accept);
    // console.log('Headers: ' + data.headers["content-type"]);
    // console.log(data.data);
  })
  .catch(err => {
    console.log('Axios error');
    console.log(err)
  })


/**
 * Axios GET method with parameters
 */

// const params = {
//   name: 'John Doe',
//   id: 21
// }

// axios.get(URL, params)
//   .then(data => {
//     console.log('Axios GET with params');
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('Axios GET with params ERROR');
//     console.log(err);
//   })

/**
 * Axios POST method
 */

const user = params;

axios({
  method: 'post',
  url: URL,
  data: {
    user
  }
})
.then(data => {
  console.log('Axios POST');
  console.log(data);
})
.catch(err => {
  console.log('Axios POST ERROR');
  console.log(err);
})


/**
 * Multiple requests with Axios
 */

// function getUser() {
//   return axios.get('https://jsonplaceholder.typicode.com/users');
// }

// function getPost() {
//   return axios.get('https://jsonplaceholder.typicode.com/posts');
// }

// axios.all([getUser(), getPost()])
//   .then((users, posts) => {
//     console.log(users);
//     // console.log(posts)  <-- returns undefined
//   })
//   .catch(err => {
//     console.log('Axios Multiple Requests Error');
//     console.log(err);
//   })
