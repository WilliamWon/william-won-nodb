const express = require("express");
const {json} = require("body-parser");
const app = express();
const port = 3001;
const toyCon = require("./controllers/toy_controller");

app.use(json());

app.get("/api/toys", toyCon.getToys)
app.post("/api/toys", toyCon.postToys)
app.put("/api/toys/:id", toyCon.updateToys)
app.delete("/api/toys/:id", toyCon.deleteToys)

app.listen( port, () => {
    console.log(`I am listening on: ${port}`)
})