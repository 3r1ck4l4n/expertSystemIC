const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");
const testRoutes = require("./src/routes/testRoutes");

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(process.env.PORT||3000,() =>{
console.log("Server running in port 3000");
})

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "./src/views"));

app.use("/ic", testRoutes);
app.use((req, res, next)=>{
    res.status(404).send('notFound');
});