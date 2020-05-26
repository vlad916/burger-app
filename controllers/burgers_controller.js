
const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
	burger.selectAll("burgers", (data) => {
		let burgerDataObj = {
			burgers: data
		};
		console.log(burgerDataObj);
		res.render("index", burgerDataObj);
	});
});

router.post("/api/burgers", (req, res) => {
	burger.insertOne("burger_name", [req.body.burger], function(err, result) {
		if (err) {
			console.log(err)
		}
		console.log("hitting post route")
		res.redirect("/");
	});
});

router.put("/api/burgers/:id", (req, res) => {
	let condition = "id = " + req.params.id;
	console.log("condition", condition);
	console.log(req.params.id);
	burger.updateOne({devoured: req.body.devoured}, condition, (result) => {
		if(result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;