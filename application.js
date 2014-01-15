$(document).ready(function() {
	var maxNum = 20;
	var hiddenNumber = 1 + Math.floor(Math.random() * maxNum);
	var prevDistance = -1;
	console.log("The random number is " + hiddenNumber + ".");
	
	$('h2').html("Pick a number from 1 to " +  maxNum + ".");
	
	$('#submit_button').click(function(){
		var guess = $("#inputNum").val();
		if (isNaN(guess) || guess < 1 || guess > maxNum)
			$("#message").html('<span class="errorMessage">Please enter number from 1 to ' + maxNum + ' </span>');
		// New game
		else if (prevDistance == -1){
			if (guess < hiddenNumber)
				$("#message").html('Go higher');
			else if (guess > hiddenNumber)
				$("#message").html('Go lower');
			// First guess is right
			else{
				$("#message").html('<span class="hot">Congratulations! You are right.</span>');
				$("#submit_button").prop('disabled', true);
				$("#submit_button").css("background-color", "#A3A3A3");
			}
				
			prevDistance = Math.abs(guess - hiddenNumber);
		// Old game
		}else
			// The guess is wrong
			if (guess != hiddenNumber){
				var currentDistance = Math.abs(guess - hiddenNumber);
				// Hotter
				if (currentDistance < prevDistance){
					prevDistance = currentDistance;
					$("#message").html('<span class="hot">Getting hotter</span>');
				// Colder
				}else if (currentDistance > prevDistance){
					$("#message").html('<span class="cold">Getting colder</span>');
					prevDistance = currentDistance;
				}else
					$("#message").html('<span class="errorMessage">You at the same distance</span>');
			// The guess is right
			}else{
				$("#message").html('<span class="hot">Congratulations! You are right.</span>');
				$("#submit_button").prop('disabled', true);
				$("#submit_button").css("background-color", "#A3A3A3");
		}
	});
	
	$('#newgame_button').click(function(){
		hiddenNumber = 1 + Math.floor(Math.random() * maxNum);
		prevDistance = -1;
		$("#submit_button").prop('disabled', false);
		$("#submit_button").css("background-color", "#80FF00");
		$("input").val("");
		$("#message").html("");
		console.log("The random number is " + hiddenNumber + ".");
	});
	
});