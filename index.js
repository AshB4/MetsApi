/** @format */

// This is main server - set up your Express app and define your endpoints.

const express = require("express");
const activities = require("./data/metzvalues.json");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(logger("devAsh"));
app.use(bodyParser.json());

// Route handler for the root path
app.get("/", (req, res) => {
  res.json("Welcome to the Mets API");
});

// Endpoint to get all activities
app.get("/activities", (req, res) => {
	res.json(activities);
});

// Endpoint to get activity by ID
app.get("/activities/:id", (req, res) => {
	const id = req.params.id;
	const activity = activities.find(
		(activity) => activity["Activity Code"] === id
	);
	if (activity) {
		res.json(activity);
	} else {
		res.status(404).json({ error: "Activity not found" });
	}
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  // Check if the error is a known error with a custom message and status code
  if (err.status && err.message) {
    res.status(err.status).json({ error: err.message });
  } else {
    // For unknown errors, return a generic 500 status code and message
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Mount your routes
const activityRoutes = require("./activityRoutes");
app.use("/", activityRoutes);


app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
