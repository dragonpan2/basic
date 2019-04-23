const express = require('express')
const app = express();

var firebase = require('firebase');
var World = require("./World.js");

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});



var config = {
    apiKey: "AIzaSyCUoj8FWv08hk8lfVJuwd7jrOLWyPVKf0E",
    authDomain: "test-57325.firebaseapp.com",
    serviceAccount: "./test-57325-90048686ee3a.json",
    databaseURL: "https://test-57325.firebaseio.com",
    projectId: "test-57325",
    storageBucket: "test-57325.appspot.com",
    messagingSenderId: "361771794668"
};
firebase.initializeApp(config);

var message = "Test-Message";
var firebaseRef = firebase.database().ref();
var logsRef = firebaseRef.child("logs");
var messagesRef = firebaseRef.child("messages");
var messageRef = messagesRef.push(message);

logsRef.child(messageRef.key).set(message);

/*
let iniWrold = function(){
    var world = new World();

}
*/

