$.ajax({
	url : 'xml/table.xml',
	dataType: 'xml',
	success: function (data) {
		
		// looking for name within team within leagueTable and do something for each
		$(data).find('leagueTable team').each(function() {
			var team = $(this).find('name').text();
			var wins = $(this).find('won').text();
			

			$('.timeline ul').append(
				$('<li />', {
					text: team + ' (' + wins + " wins!)"
				})
			);
		});
	},
	error: function () {
		$('.timeline').text('Error!');
	}
});