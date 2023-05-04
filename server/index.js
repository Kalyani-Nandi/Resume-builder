const express = require("express");
const cors = require("cors");

const pdf =require("html-pdf");
const resumePdf= require("./resume-pdf");

const app = express();

const options = {
	height: "42cm",
	width: "35.7cm",
	timeout: "6000",
};


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post("/create-pdf",(req,res)=>{
pdf.create(resumePdf(req.body),{}).toFile("Resume.pdf",(err)=>{
  if(err){
    res.send(Promise.reject());
    console.log(err);
  }else{
    res.send(Promise.resolve());
    console.log("success!");
  }
  
})
})

app.get("/fetch-pdf", (req, res)=>{
 
  const file = `${__dirname}/Resume.pdf`;
	res.download(file);
})

app.use(express.static("../client/build"))

app.listen(5000, function () {
  console.log("server");
});
