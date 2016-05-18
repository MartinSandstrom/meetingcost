$(function(){

	var $calculate = $('#calculate');
	var $counter = $('#counter');
	var $attendees = $('#attendees');
	var $cost = $('#cost');
	var $stop = $('#stop');
	var $result = $('#result');
	var $startTime = $('#start-time');
	var counter = 0;
	var myInterval;

	$result.hide();

	$calculate.click(function(){
		counter = 0;
		$result.show();
		var numberOfAttendees = $attendees.val();
		var costPerAttendee = $cost.val();

		var costPerSecond = (costPerAttendee / 3600) * numberOfAttendees;
		$startTime.text(new Date().toTimeString().split(' ')[0]);

		myInterval = setInterval(function () {
			++counter;
			var newCost = counter * costPerSecond;
			var newCostRound = Math.round(newCost * 100) / 100
			$counter.text(newCostRound);
		}, 1000);
	});

	$stop.click(function(){
		clearInterval(myInterval);
	});
});
