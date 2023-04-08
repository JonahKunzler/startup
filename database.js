const { MongoClient } = require('mongodb');
const express = require('express');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const app = express();

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
client.connect((err) => {
    if (err) {
      console.error(err);
      return;
    }
    const collection = client.db('workouts').collection('workouts');
  });


function getUser(email) {
    return userCollection.findOne({ email: email });
  }


function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }
  
  async function createUser(email, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
      await userCollection.insertOne(user);
      return user;
    }
    

    function addWorkout(workout) {
        collection.insertOne(workout);
      }

      function addFood(workout) {
        workoutCollection.insertOne(workout);
      }
      
      module.exports = {
        getUser,
        getUserByToken,
        createUser,
        addFood,
        addWorkout 
      };

     


