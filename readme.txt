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

https://www.npmjs.com/package/vue-toasted
npm install vue-toasted --save
import Toasted from 'vue-toasted';
Vue.use(Toasted)

https://vue-multiselect.js.org/#sub-multiple-select
npm install vue-multiselect

Reading guide : https://github.com/bradtraversy/bookstore

Good tool to get : Postman