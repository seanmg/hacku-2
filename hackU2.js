function generateNum(){
	var num;
	num = Math.floor(Math.random() * (764949919-764853708+1)) + 764853708;
	return num;
	//document.getElementById("demo").innerHTML
}
function randFromArray(){
	var num;
	num = Math.floor(Math.random() * (500));
	return num;
}

function getCycle(){
	var _accessToken, modelID, _firstCycle, _secondCycle, _thirdCycle, _questionCycle, _pick;
	var _cycles = new Array();
    var _maxCycles = 100;

	$.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'https://apis.traderonline.com/v1.0.0-beta/token',
        data: {
          grant_type: 'client_credentials',
          client_id: 'norfolk-state',
          client_secret: '^EC3<eGt{8^G*l~YJJ2!.e#OO6)T4R',
        },
		error: function(){
			console.log('error on token');
		},
		success: function(data, status, jqxhr) {
            _accessToken = data.access_token;
	        $.ajax({
		        type: "GET",
		        url: "https://apis.traderonline.com/v1.0.0-beta/cycles?makeId=2316294&hasPhoto=true&minPrice=500.00&limit=" + _maxCycles + "&view=full",
		        cache: false,
                headers: {'Authorization' : 'Bearer ' + _accessToken},
		        dataType: 'json',
		        error: function() {
			        console.log('error');
		        },
		        success: function(data){
					console.log(data.result);
                   _firstCycle = data.result[Math.floor(Math.random() * (_maxCycles))];
                   _secondCycle = data.result[Math.floor(Math.random() * (_maxCycles))];
                   _thirdCycle = data.result[Math.floor(Math.random() * (_maxCycles))];
				   _cycles[0] = _firstCycle;
				   _cycles[1] = _secondCycle;
				   _cycles[2] = _thirdCycle;
				   _pick = Math.floor(Math.random() * (3));
				   questionCycle = _cycles[_pick];
				   $('#question').html('<p>' + "Which Harley costs $" + questionCycle.price + "!?" + '<p>');
				   $('#cycle0').html(
                        '<p>' + _firstCycle.year + ' ' + _firstCycle.makeDisplayName + ' ' + _firstCycle.modelDisplayName + '</p>'
                        + '<img src="' + _firstCycle.photos[0].url + '?width=300" />'
                   );
				   $('#cycle1').html(
                        '<p>' + _secondCycle.year + ' ' + _secondCycle.makeDisplayName + ' ' + _secondCycle.modelDisplayName + '</p>'
                        + '<img src="' + _secondCycle.photos[0].url + '?width=300" />'
                   );
				   $('#cycle2').html(
                        '<p>' + _thirdCycle.year + ' ' + _thirdCycle.makeDisplayName + ' ' + _thirdCycle.modelDisplayName + '</p>'
                        + '<img src="' + _thirdCycle.photos[0].url + '?width=300" />'
                   );
				   $('#results').html('<p>' + "The answer was #" + (_pick+1) + " which is a " + questionCycle.year +' ' + questionCycle.makeDisplayName + ' ' 
						+ questionCycle.modelDisplayName + "!!" + '<p>'
				   );
		        }
	        });
        },
   });

};
