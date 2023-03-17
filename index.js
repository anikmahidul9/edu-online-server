const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const category = require("./data/catagories.json");

app.get("/categories", (req, res) => {
  res.send(category);
});

const course = require("./data/data.json");

app.get("/course", (req,res)=>{
    res.send(course);
})
app.get('/categories/:id',(req,res)=>{
  const id = req.params.id;
  const category_course = course.filter(c=>c.id===id);
  res.send(category_course);
})
app.get('/course/:id',(req,res)=>{
  const id = req.params.id;
  const course_id = course.find(c=>c._id===id);
  res.send(course_id);
})
app.get("/", (req, res) => {
  res.send("News API Running");
});

app.listen(port, () => {
  console.log(`Edu-online app listening on port ${port}`);
});
