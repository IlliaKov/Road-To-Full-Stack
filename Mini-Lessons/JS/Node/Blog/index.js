import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var postList = [];
var todoList = [];

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/list", (req, res) => {
    res.render("list.ejs", { postList: postList });
});

app.post("/list", (req, res) => {
    const fName = req.body["fName"];
    const lName = req.body["lName"];
    const topicField = req.body["topicField"];
    const textField = req.body["textField"];

    postList.push({
        fName,
        lName,
        topicField,
        textField
    });

    res.redirect("/list");
});

app.get("/list/post/:id", (req, res) => {
    const postId = req.params.id;

    if (postId >= 0 && postId < postList.length) {
        const post = postList[postId];

        res.render("post.ejs", { post });
    } else {
        res.status(404).send("<h1>Post not found - 404</h1>");
    }
});

app.get("/list/edit/:id", (req, res) => {
    const postId = req.params.id;

    if (postId >= 0 && postId < postList.length) {
        const post = postList[postId];

        res.render("edit.ejs", {
            post,
            postId,
            fName: post.fName,
            lName: post.lName,
            topicField: post.topicField,
            textField: post.textField
        });
    } else {
        res.status(404).send("<h1>Post not found - 404</h1>");
    }
});

app.post("/list/edit/:id", (req, res) => {
    const postId = req.params.id;

    if (postId >= 0 && postId < postList.length) {
        postList[postId] = {
            fName: req.body["fName"],
            lName: req.body["lName"],
            topicField: req.body["topicField"],
            textField: req.body["textField"]
        };

        res.redirect("/list");
    } else {
        res.status(404).send("<h1>Post not found - 404</h1>");
    }
});

app.get("/list/delete/:id", (req, res) => {
    const postId = req.params.id;

    if (postId >= 0 && postId < postList.length) {
        postList.splice(postId, 1);

        res.redirect("/list");
    } else {
        res.status(404).send("<h1>Post not found - 404</h1>");
    }
});

/////////////

app.get("/todo-list", (req, res) => {
    res.render("todo-list.ejs", { todoList: todoList });
});

app.post("/todo-list", (req, res) => {
   const title = req.body.title;
   const description = req.body.description;

   todoList.push({
      title,
      description
   });

   res.redirect("/todo-list");
});

app.get("/todo-list/todo-post/:id", (req, res) => {
    const postId = req.params.id;

    if (postId >= 0 && postId < todoList.length) {
        const post = todoList[postId];

        res.render("todo-post.ejs", { post });
    } else {
        res.status(404).send("<h1>Post not found - 404</h1>");
    }
});

app.get("/todo-list/todo-edit/:id", (req, res) => {
    const postId = req.params.id;

    if (postId >= 0 && postId < todoList.length) {
        const post = todoList[postId];

        res.render("todo-edit.ejs", {
            post,
            postId,
            title: post.title,
            description: post.description
        });
    } else {
        res.status(404).send("<h1>Post not found - 404</h1>");
    }
});

app.post("/todo-list/todo-edit/:id", (req, res) => {
    const postId = req.params.id;

    if (postId >= 0 && postId < todoList.length) {
        todoList[postId] = {
            title: req.body["title"],
            description: req.body["description"]
        };

        res.redirect("/todo-list");
    } else {
        res.status(404).send("<h1>Post not found - 404</h1>");
    }
});

app.get("/todo-list/todo-delete/:id", (req, res) => {
    const postId = req.params.id;

    if (postId >= 0 && postId < todoList.length) {
        todoList.splice(postId, 1);

        res.redirect("/todo-list");
    } else {
        res.status(404).send("<h1>Post not found - 404</h1>");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});