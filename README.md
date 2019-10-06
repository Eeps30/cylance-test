# BlackBerry Cylance Test

### Running on your machine

- Install `Node JS >= v8.x.x`
- Clone this repo
- Execute `npm run dep` to install the dependencies
- Execute `npm run dev` to start client and server at the same time

### Running with Docker

- Install `docker`
- Clone this repo
- Execute `npm run docker-dev` to start a local instance of insureasier
- Execute `npm run docker-stop` to stop the local instance of insureasier

### Running on Heroku:

- Install Heroku CLI
- Execute `heroku login`
- Setup remote link with heroku using `heroku git:remote -a ie-dev`
- Execute `git push heroku <branch-to-be-deployed>:master`
