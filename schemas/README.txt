SIMPLE mongo commands 

show dbs -- displays all databases created

use eatery -- switches to eatery database

show collections -- shows all collections "tables" inside database

db.collectionName.find() -- shows all data objects inside collection(table)

CRUD operations can be found on website:

https://docs.mongodb.com/manual/crud/

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

brew update

brew install mongodb

sudo mkdir -p /data/db

ls -ld /data/db/

        If they are set properly they should look something like this..

        drwxr-xr-x  X user  wheel  XXX Date Time /data/db/

sudo chmod 0755 /data/db && sudo chown $USER /data/db
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

START UP MONGODB SERVERS

terminal 1 - mongod

terminal 2 - mongo

use eatery -- switches to eatery database

db.test.insert({"message":"hello world"}) -- inserts dummy message, automatically creates objectid

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

npm install

npm start

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
