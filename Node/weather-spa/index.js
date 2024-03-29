const express = require("express");
const port = 3050;
const app = express();
const https = require("https");

require("dotenv").config();

// для чтения тела запроса
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs")

const weather_api_key = process.env.WEATHER_API_KEY;

app.get("/", (req, res) => {
  // res.send("Hello world!")


  // const sendData = { city:"My City", iconUrl:"my url", description:"my descr", temp:"my temp", humidity: "my humidity", speed:"my speed" };

  res.render("index", {sendData: false, error: ''})

});

app.post("/", (req, res) => {
  // res.send("Запрос принят!")
  let city = req.body.city;

  const url = `https://api.openweathermap.org/data/2.5/weather?appid=${weather_api_key}&q=${city}&units=metric&lang=ru`;

  https.get(url, function (response) {
    console.log(response.statusCode, response.statusMessage); /// -> 200 OK

    if (response.statusCode === 200) {
      response.on("data", function (data) {
        const weatherData = JSON.parse(data);
        console.log(weatherData);

        const city = weatherData.name;
        const { temp, humidity } = weatherData.main;
        const { description, icon } = weatherData.weather[0];
        const iconUrl = "https://openweathermap.org/img/wn/" + icon + ".png";
        const { speed } = weatherData.wind;
  
        const sendData = {
          city: city,
          iconUrl: iconUrl,
          description: description,
          temp: Math.round(temp),
          humidity: humidity,
          speed: Math.round(speed)
        };
  
        res.render("index", { sendData: sendData, error: '' });
  
      });

    } 
    
    else {

      console.log("Город не найден")
      const errorMsg = "Город не найден";
      res.render("index", {sendData: false, error: errorMsg });
    }

  });
});

app.listen(port, () => {
  console.log("Server is running on port http://localhost:" + port);
});
