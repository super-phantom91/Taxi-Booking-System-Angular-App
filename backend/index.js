const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const http = require('http').Server(app);
const initializeSocket = require("./utils/socket")
require("./database/db");
const cors = require("cors");

const allowedOrigins = [
  "http://localhost:4200",
  "https://eberride.netlify.app/login"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

const path = require("path");
const img_path = path.join(__dirname, "/Public/Vehicle");
app.use(express.static(img_path));

const profile_path = path.join(__dirname, "/Public/Profile");
app.use(express.static(profile_path));

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const fetchAdmin = require("./routes/adminfetch");
const loginRoutes = require("./routes/adminlogin");
const registerRoutes = require("./routes/adminsignup");
const deleteRoutes = require("./routes/admindelete");
const updateRoutes = require("./routes/adminupdate");
const VehicleRoutes = require("./routes/vehicle");
const countryRoutes = require("./routes/country");
const cityRoutes = require("./routes/city");
const userRoutes = require("./routes/users");
const driverRoutes = require("./routes/driver");
const pricingRoutes = require("./routes/pricing");
const settingRouter = require("./routes/setting");
const createRideRoutes = require("./routes/createride");
const confirmRideRouter = require("./routes/confirmride");
const ridehistoryRouter = require("./routes/ridehistory")
const credentials = require('./routes/credentials')
const feedbackRoutes = require('./routes/feedback')


app.use(fetchAdmin);
app.use(loginRoutes);
app.use(registerRoutes);
app.use(deleteRoutes);
app.use(updateRoutes);
app.use(VehicleRoutes);
app.use(countryRoutes);
app.use(cityRoutes);
app.use(userRoutes);
app.use(driverRoutes);
app.use(pricingRoutes);
app.use(settingRouter)
app.use(createRideRoutes);
app.use(confirmRideRouter);
app.use(ridehistoryRouter)
app.use(credentials)
app.use(feedbackRoutes)



app.get("/", async (req, res) => {
  res.json({
    success: true,
    message: "Welcome Admin, API is Working Fine!",
    "City Data": 'https://eber.onrender.com/citydata',
    "Vehicle Data": 'https://eber.onrender.com/vehicledata',
  });
});

initializeSocket(http)
http.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
