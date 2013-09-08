
# Summer 2013 - Bitstarter project

Startup Engineering: Stanford CS184 startup-class

```
clone your own fork: https://github.com/startup-class
```

## The Result

[Hello Study Buddy] (http://hellostudybuddy.com)

This project uses Node.js app, the [Express](http://expressjs.com/) framework and [Bootstrap](http://twitter.github.io/bootstrap/).

 - code repo on [github] (https://github.com/brentschneider/bitstarter) 
 - developed using Amazon Web Services
 - deployed to [Heroku] (http://shrouded-falls-3722.herokuapp.com/)
 

## Running in dev environment

Asumming you have [Node.js](http://nodejs.org/) and [Heroku Toolbelt](https://toolbelt.heroku.com/) installed on your machine:

```sh
git clone git@github.com:heroku/node-js-sample.git # or clone your own fork
cd node-js-sample
npm install
foreman start
```

## Troubleshooting: 

1. Issue: When creating server

        (Warning: express.createServer() is deprecated, express 
        applications no longer inherit from http.Server)
        
change to

        var express = require('express');
        
        var app = express();
        
        app.get('/', function(request, response){
        response.send('hello world');
        });
        
        app.listen(8080);

Also change express version dependencies:

    -    "express": "2.5.x"
    +    "express": "~3.3.4"


2. Issue: (Error: listen EADDRINUSE)
EADDRINUSE means that the port is already in use. It may not be gracefull but I found this worked.

        pkill node

now run `node yourfile.js`

Your app should now be running on [localhost:8080](http://localhost:8080/).

(note to self: man nohup, read nodejitsu's [article] (http://blog.nodejitsu.com/keep-a-nodejs-server-up-with-forever)




## Deploying to Heroku

Add AWS RSA key to heroku `heroku keys:add ~/.ssh/id_rsa.pub`

Create app

```
heroku create
git push heroku master
heroku open
```


## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Building a Real-time, Polyglot Application with Node.js, Ruby, MongoDB and Socket.IO](https://devcenter.heroku.com/articles/realtime-polyglot-app-node-ruby-mongodb-socketio)
- [Using Socket.IO with Node.js on Heroku](https://devcenter.heroku.com/articles/using-socket-io-with-node-js-on-heroku)
