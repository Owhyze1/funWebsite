const URL = 'https://jsonplaceholder.typicode.com/posts';

const data = {
  name: 'John Doe',
  id: 23
}

/**
 * AJAX method for GET
 */

// $().ready(function() {
//   const URL = 'https://jsonplaceholder.typicode.com/posts';
//   $.ajax({
//     url: URL,
//     type: 'GET',
//     success: function(result) {
//       for (let i = 0; i < result.length; i++) {
//         console.log('AJAX GET method');
//         console.log(result[i]);
//       }
//     },
//     error: function(error) {
//       console.log(`Error: ${error}`);
//     }
//   });
// });

/**
 * AJAX method for POST (similar to above)
 */
// $.ajax({
//   url: URL,
//   type: 'POST',
//   data: data,     // for when the type is POST
//   dataType: 'JSON', // type can be JSON, XML, HTML, TXT, jsonp
//   success: function(data, result) {
//     console.log('AJAX POST method');
//     console.log(`${data} posted and the result is ${result}`);
//     console.log(data);
//   },
//   error: function(error) {
//     console.log(`Error: ${error}`);
//   }
// });




/**
 * Separate GET, POST, and getJSON methods from AJAX
 */


$.get(URL, function(data, status) {
  console.log('$.get method');
  console.log(`Status: ${status}`);
  console.log(`${data}`);
  // for (let i = 0; i < data.length; i++) {
  //   console.log(data[i]);
  // }
});


$.post(URL, data, function(data, status) {
  console.log('$.post method');
  console.log(`${data} and status is ${status}`);
  console.log(data);
});

$.getJSON(URL, function(result) {
  console.log('$.getJSON method');
  console.log(result);
  // for (let i = 0; i < result.length; i++) {
  //   console.log(result[i]);
  // }
});