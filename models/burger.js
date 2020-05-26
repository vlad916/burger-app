
const orm = require("../config/orm.js");


const burger = { 
	// Select everything from the burgers table
	selectAll: function(table, cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(colName, valOfCol, cb) {
		orm.insertOne("burgers", colName, valOfCol, (res) => {
			cb(res);
		});
	},
	updateOne: function(valOfCol, condition, cb) { 
		orm.updateOne("burgers", valOfCol, condition, (res) => {
			cb(res);
		});
	}
};

module.exports = burger;
