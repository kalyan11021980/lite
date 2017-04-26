var request = require('request');

export function getApi(req, res) {
  request.get({ url: "https://jsonplaceholder.typicode.com/posts", json: true }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    }
  });
}


let option = {
  json: true,
  formData: {
    title: 'foo',
    body: 'bar',
    userId: 1
  }
}

export function postApi(req, res) {
  request.post({ url: "http://jsonplaceholder.typicode.com/posts", option }, function(error, response, body) {
    // if (!error && response.statusCode == 200) {
    //
    // }
    res.send(JSON.parse(body));
  });
}
