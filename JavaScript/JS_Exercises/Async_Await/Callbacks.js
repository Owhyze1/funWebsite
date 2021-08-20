// need jQuery to run due to $
const url = "https://jsonplaceholder.typicode.com/posts";

const postListPromise = new Promise((resolve, reject) => {
  console.log('SENDING LIST CALL');
  $.get(url, (data) => {
    // console.log('GET POST List Response =>', data);
    resolve(data);
  }).fail(err => {
    reject(new Error(`Called failed for GET POST List Request: ${err.status}`));
  });
});


const postDetailsPromise = new Promise((resolve, reject) => {
  console.log('SENDING DETAILS CALL');
  $.get(`${url}/1`, (data) => {
      resolve(data);
      console.log(data);
  }).fail(err => {
    reject(new Error(`DETAILS CALL FAILED and status ${err.status}`));
  })
})

const commentsPromise = new Promise((resolve, reject) => {
  console.log('SENDING COMENTS CALL');
  $.get(`${url}/1/comments`, (data) => {
    resolve.data;
    console.log(data);
  }).fail(err => {
    reject(new Error(`COMMENTS PROMISE FAILED. Status: ${err.status}`));
  })
})


postListPromise
.then(postDetailsPromise)
.then(commentsPromise)
.then((response) => {
  console.log('Call Success');
  // console.log('Then response => ', response);
})
.catch((error) => {
  console.log('Call Failed');
  // console.log('Catch Error => ', error);
});