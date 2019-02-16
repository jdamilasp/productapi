# Product API 
This project build using MEAN Stack. It's include two part. client and server. 
Client -> Angular
Server -> NodeJs | ExpressJs
DB -> Mongodb and Redis

## How to Setup project 

### Pre requirement 
1. Install nodeJs 8.x.x higher version
2. Install MongoDB and Redis DB
3. Install angular cli in global 
4. install pm2 in global

## How set up development enviroment 

### Set up Client 
1. go to client directory 
2. npm install // install all angular project require node modules 
3. ng serve
* Server Start : http://localhost:4200

### Set up Server 
1. go to server directory 
2. npm install // install all express project require node mondules 
3. npm start 
* Server Start : http://localhost:3000 

## How set up production deployment 
1. go to client directory 
2. npm install 
3. npm run build 
// here two part. 1 build minify angular project and 2. copy express public directory 
4. go to server directory 
5. npm install 
6. npm run prod 
// here express app start using pm2 and it will running as background process 
* Server Start : http://localhost:3000


### More Info 
Amila Sampath | jdamilasp@gmail.com 
