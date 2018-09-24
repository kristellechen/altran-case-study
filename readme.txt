npm install express
npm install express-generator -g
express [name of project]
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

Installing MongoDB
    
    Download the MongoDB installer file from the downloads section of the MongoDB website.

    Find the dowloaded .msi file in the Windows Explorer. Double click the file and follow the prompts to install Mongo. Note: unless you specify a custom directory Mongo is most likely installed in the C:\mongodb directory**. However, based on settings on your machine Mongo may be installed other places. For example, C:\Program Files\MongoDB\Server\3.2. Additionally, you may find MongoDB in the add/remove programs menu.

    Create the directory where MongoDB will store it’s files. From the command prompt run md \data\db. This is the default location. However, other locations can be specified using the --dbpath parameter. See the Mongo docs for more information.

    Start the mongodb daemon by running C:\mongodb\bin\mongod.exe in the Command Prompt. Or by running, C:\path\to\mongodb\bin\mongod.exe

    Connect to MongoDB using the Mongo shell While the MongoDB daemon is running, from a different Command prompt window run C:\mongodb\bin\mongo.exe
