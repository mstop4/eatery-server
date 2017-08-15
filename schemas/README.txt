brew update

brew install mongodb

sudo mkdir -p /data/db

ls -ld /data/db/

        If they are set properly they should look something like this..

        drwxr-xr-x  X user  wheel  XXX Date Time /data/db/

sudo chmod 0755 /data/db && sudo chown $USER /data/db

mongod

mongo

use eatery

db.test.insert({"message":"hello world"})

npm install

npm start





