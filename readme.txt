npm install express
npm install express-generator -g
express [name of project] - to generate a new express skeleton project
npm install

clean up the view-engine.
delete view directory
replace res.render with res.send
delete view-engine setup code in app.js
npm uninstall jade.

npm install --save-dev nodemon
modify package.json
'start' : 'nodemon ./bin/www' 

npm install mongoose

Install standard-js from Sam Chen
To autofix formatting. stop server and run 'standard --fix'

npm install pptxgenjs

https://www.npmjs.com/package/vue-toasted
npm install vue-toasted --save
import Toasted from 'vue-toasted';
Vue.use(Toasted)

https://vue-multiselect.js.org/#sub-multiple-select
npm install vue-multiselect

Reading guide : https://github.com/bradtraversy/bookstore

Good tool to get : Postman

Deployment on Ubuntu 16.04:
1. Install npm
2. Install mongo DB: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
3. Start Mongo DB:
   screen sudo mongod --bind_ip 127.0.0.1
   Ctrl-A then Ctrl-D
4. git clone altran-case-study project:
   git clone https://github.com/kristellechen/altran-case-study.git
5. start server from altran-case-study directory:
   screen npm start
   Ctrl-A then Ctrl-D
6. start client from vuejs-client directory:
   screen npm run serve
   Ctrl-A then Ctrl-D
