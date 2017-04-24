var request = require('request');

export function getApi(req , res) {
    request.get({ url: "https://jsonplaceholder.typicode.com/posts", json: true }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    });
}