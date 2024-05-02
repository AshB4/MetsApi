/** @format */

const express = require("express");
const metsValues = require("../data/metzvalues.json");

const router = express.Router();

router.get("/search", (req, res) => {
	const { adultType, heading, searchQuery } = req.query;
	let filteredActivities = metsValues;

	if (adultType) {
		filteredActivities = filteredActivities.filter(
			(activity) => activity["Adult Type"] === adultType
		);
	}

	if (heading) {
		filteredActivities = filteredActivities.filter(
			(activity) => activity["Heading"] === heading
		);
	}

	if (searchQuery) {
		filteredActivities = filteredActivities.filter((activity) =>
			activity["Activity Description"]
				.toLowerCase()
				.includes(searchQuery.toLowerCase())
		);
	}

	res.json(filteredActivities);
});

// Endpoint to fetch list of distinct adult types
router.get("/adult-types", (req, res) => {
	const adultTypes = [
		...new Set(metsValues.map((activity) => activity["Adult Type"])),
	];
	res.json(adultTypes);
});

// Endpoint to fetch list of distinct headings
router.get("/headings", (req, res) => {
	const headings = [
		...new Set(metsValues.map((activity) => activity["Heading"])),
	];
	res.json(headings);
});

// Endpoint to fetch list of all activities
router.get("/activities", (req, res) => {
	res.json(metsValues);
});

module.exports = router;
