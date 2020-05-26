$(document).ready(function() { 
	$(".press").on("click", function() {
		var id = $(this).data("burgerid");

		var updatedBurger = {
			devoured: true
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: updatedBurger
		}).then(function() {
			console.log("updated id ", id);
			location.reload();
			});
	});
});