function generateNum(){
	var num;
	num = Math.floor(Math.random() * (764949919-764853708+1)) + 764853708;
	return num;
	//document.getElementById("demo").innerHTML
}

function getCycle(){
	var _accessToken, _cycles, modelID;

	$.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'https://api-dev.traderonline.com/vlatest/token',
        data: {
          grant_type: 'client_credentials',
          client_id: 'test',
          client_secret: 'test',
        },
		error: function(){
			console.log('error on token');
		},
		success: function(data, status, jqxhr) {
            _accessToken = data.access_token;
	        $.ajax({
		        type: "GET",
		        url: "https://api-dev.traderonline.com/vlatest/cycles?limit=1&view=full",
		        cache: false,
                headers: {'Authorization' : 'Bearer ' + _accessToken},
		        beforSend: function (xhr) {
		        },
		        dataType: 'json',
		        error: function() {
			        console.log('error');
		        },
		        success: function(data){
			        console.log(data.result[0]);
		        }
	        });
        },
   });
};
