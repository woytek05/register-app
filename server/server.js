const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Datastore = require("nedb");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;
const collection = new Datastore({
    filename: "collection.db",
    autoload: true,
});

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify({ response: "Server is running!" }, null, 5));
});

app.get("/getUsers", (req, res) => {
    collection.find({}, function (err, docs) {
        res.send(JSON.stringify({ users: docs }, null, 5));
    });
});

app.get("/getUserData", (req, res) => {
    const id = req.query.id;

    collection.find({ _id: id }, function (err, docs) {
        res.send(JSON.stringify({ docs: docs }, null, 5));
    });
});

app.post("/register", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json");
    const login = req.body.login || "";
    const password = req.body.password || "";
    const registered = req.body.registered || 0;

    collection.find({ login: login }, function (err, docs) {
        if (docs.length > 0) {
            res.send(JSON.stringify({ response: "User exists!" }, null, 5));
        } else {
            collection.find({}, function (err, docs) {
                const indexes = docs.map((el) => el.index);

                let nextIndex = 0;
                if (indexes.length > 0) {
                    nextIndex = indexes[0];
                    for (let i = 0; i < indexes.length; i++) {
                        if (nextIndex < indexes[i]) {
                            nextIndex = indexes[i];
                        }
                    }
                    nextIndex += 1;
                }

                const doc = {
                    index: nextIndex,
                    login: login,
                    password: password,
                    registered: registered,
                };

                collection.insert(doc, (err, newDoc) => {
                    res.send(
                        JSON.stringify({ response: "Added new user!" }, null, 5)
                    );
                });
            });
        }
    });
});

app.post("/deleteUser", (req, res) => {
    const id = req.body.id || "";
    collection.remove({ _id: id }, {}, (err, numRemoved) => {
        res.send(
            JSON.stringify({ response: `Usunięto dokumentów: ${numRemoved}` }),
            null,
            5
        );
    });
});

app.listen(PORT, function () {
    console.log("Start serwera na porcie " + PORT);
});
