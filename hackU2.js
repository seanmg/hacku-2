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
	var _accessToken, modelID, _firstCycle, _secondCycle, _thirdCycle;
    var _maxCycles = 100;

	$.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'https://apis.traderonline.com/v1.0.0-beta/token',
        data: {
          grant_type: 'client_credentials',
          client_id: 'norfolk-state',
          client_secret: '',
        },
		error: function(){
			console.log('error on token');
		},
		success: function(data, status, jqxhr) {
            _accessToken = data.access_token;
	        $.ajax({
		        type: "GET",
		        url: "https://apis.traderonline.com/v1.0.0-beta/cycles?makeId=2316294&hasPhoto=true&limit=" + _maxCycles + "&view=full",
		        cache: false,
                headers: {'Authorization' : 'Bearer ' + _accessToken},
		        dataType: 'json',
		        error: function() {
			        console.log('error');
		        },
		        success: function(data){
                   _firstCycle = data.result[Math.floor(Math.random() * (_maxCycles))]
                   _secondCycle = data.result[Math.floor(Math.random() * (_maxCycles))]
                   _thirdCycle = data.result[Math.floor(Math.random() * (_maxCycles))]
				   $('#cycle0').html('<img src="' + _firstCycle.photos[0].url + '?width=300" />');
				   $('#cycle1').html('<img src="' + _secondCycle.photos[0].url + '?width=300" />');
				   $('#cycle2').html('<img src="' + _thirdCycle.photos[0].url + '?width=300" />');
		        }
	        });
        },
   });

};
