// SOURCE
// https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/

// initialize a new XML HTTP request to make an HTTP call in AJAX
const http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts'; //'https://api.hubapi.com';

// Tie the HTTP method and URL endpoint together with the open method
http.open('GET', url);

// send the request
http.send();


// log response to console
// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText);
// }

http.onreadystatechange = function() {
  if (http.readyState == XMLHttpRequest.DONE){
    console.log('DONE');
    let status = http.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      console.log(http.responseText);
    }
  }
}
