// /** @format */

// // activitySelector.js

// // Fetch list of adult types and populate dropdown
// fetch("http://localhost:8000/adult-types")
// 	.then((response) => response.json())
// 	.then((adultTypes) => {
// 		const selectAdultType = document.getElementById("adultType");
// 		adultTypes.forEach((adultType) => {
// 			const option = document.createElement("option");
// 			option.text = adultType;
// 			selectAdultType.add(option);
// 		});
// 	});

// // Event listener for when adult type is selected
// document.getElementById("adultType").addEventListener("change", () => {
// 	// Fetch list of headings corresponding to selected adult type
// 	const selectedAdultType = document.getElementById("adultType").value;
// 	fetch(`http://localhost:8000/headings?adultType=${selectedAdultType}`)
// 		.then((response) => response.json())
// 		.then((headings) => {
// 			const selectHeading = document.getElementById("heading");
// 			// Clear existing options
// 			selectHeading.innerHTML = "";
// 			headings.forEach((heading) => {
// 				const option = document.createElement("option");
// 				option.text = heading;
// 				selectHeading.add(option);
// 			});
// 		});
// });

// // Event listener for when heading is selected
// document.getElementById("heading").addEventListener("change", () => {
// 	// Fetch list of activities corresponding to selected heading
// 	const selectedHeading = document.getElementById("heading").value;
// 	fetch(`http://localhost:8000/search?heading=${selectedHeading}`)
// 		.then((response) => response.json())
// 		.then((activities) => {
// 			const selectActivity = document.getElementById("activity");
// 			// Clear existing options
// 			selectActivity.innerHTML = "";
// 			activities.forEach((activity) => {
// 				const option = document.createElement("option");
// 				option.text = activity["Activity Description"];
// 				option.setAttribute("value", activity["MET Value"]);
// 				selectActivity.add(option);
// 			});
// 		});
// });

// // Event listener for when specific activity is selected
// document.getElementById("activity").addEventListener("change", () => {
// 	// Display selected activity's description and MET value
// 	const selectedActivity = document.getElementById("activity");
// 	const selectedOption =
// 		selectedActivity.options[selectedActivity.selectedIndex];
// 	const activityDetails = document.getElementById("activityDetails");
// 	activityDetails.innerHTML = `
//     <p>Description: ${selectedOption.text}</p>
//     <p>MET Value: ${selectedOption.value}</p>
//   `;
// });
