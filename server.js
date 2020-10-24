const express = require("express");
const bp = require("body-parser");
const https = require("https");
const app = express();
app.use(bp.urlencoded({ extended: true }));
//app.listen(1027, q)

//function q() {
  //  console.log("Chal raha hai ");}
app.listen(3000, function q() {
  console.log("Chal raha hai");
});

app.get("/", l);

function l(request, response) {
    response.sendFile(__dirname + "/index.html");
}
app.post("/", q);

function q(request, response) {
  const n=request.body.n1;
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+n+"&appid=6fda355f2728986384f97ace1b0d3844&units=metric";
    https.get(url,function p(resp) {
        console.log(resp.statusCode)
        resp.on("data", f);

        function f(data) {
          // console.log(JSON.parse(data));
                   var temp = JSON.parse(data).main.temp;
            response.send("Temp = " + temp);
        }
    });

    // function p
    //   response.on("data",q)
    // function q(data)
    // {
    // var y=  JSON.parse(data).main.temp; ?q="+n1+"&appid=6fda355f2728986384f97ace1b0d3844&units=metric"
}
