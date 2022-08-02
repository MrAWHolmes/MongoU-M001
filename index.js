// REF: https://www.mongodb.com/docs/drivers/node/current/quick-start/
/*
setup:
> md ch5_3  oops
> cd ch5_3
> npm init
> npm install mongodb
> npm install eslint
> npm install prettier

*/
const { MongoClient } = require("mongodb");

// our uri string :)
const path = require("./secure.js");
console.log(path.uri);

const client = new MongoClient(path.uri);

async function run() {
  try {
    const database = client.db("sample_training");
    const grades = database.collection("grades");

    //run our query
    const query = {};
    const grade = await grades.findOne(query);

    console.log(grade);

    // lets get the fields
    const fields = await grades.findOne(query);
    for (var field in fields) {
      console.log(field);
    }
  } finally {
    // ensure client tears down connection when done
    await client.close();
  }
}

run().catch(console.dir);
