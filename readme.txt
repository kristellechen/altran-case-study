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

install MogoDB Community Edition:
https://docs.mongodb.com/manual/administration/install-community/

install mongoose:
npm install mongoose

Install standard-js from Sam Chen
To autofix formatting. stop server and run 'standard --fix'

install power point slides library:
npm install pptxgenjs

https://www.npmjs.com/package/vue-toasted
npm install vue-toasted --save
import Toasted from 'vue-toasted';
Vue.use(Toasted)

https://vue-multiselect.js.org/#sub-multiple-select
npm install vue-multiselect

Reading guide : https://github.com/bradtraversy/bookstore

Good tool to get : Postman

Deployment on Ubuntu 16.04, current server is 172.16.2.139:
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
7. To resume any of the above 3 session:
   screen -r <screen id>


PROJECT STATUS:
1. Data stored in MongoDB
2. Server is NodeJS and RESTFUL, the following operations are implemented:
   a. List all studies
   b. Get a study
   c. Update a study
   d. Create a study
   e. Delete a study
   f. Get Engagement List
   g. Get Keyword List
   h. Get Service List
   i. Create Engagement
   j. Create Keyword 
   k. Create Service
   l. Generate PowerPoint presentation of a study
3. UI is built using VueJS framework
   a. UI has full connectivity to server and implemnts all servers RESTFUL apis
   b. Home page Search bar
4. Source Control is currently located:
   https://github.com/kristellechen/altran-case-study.git

Features still TODO:
1. Move source to Altran repository
2. Docker deployment
3. User Management: authentication
4. Change the "client" field to how "keyword" field is implemented, where one 
   can starts typing, the UI populates with known used answers
5. PDF generation