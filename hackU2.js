function generateNum(){
	var num;
	num = Math.floor(Math.random() * (764949919-764853708+1)) + 764853708;
	return num;
	/document.getElementById("demo").innerHTML
}

function getCycle(){
	var accessToken, cycles, modelID;
	modelID = generateNum();
 
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
			console.log('error');
		},
		success: function(data, status, jqxhr) {
            accessToken = data.access_token;
          
        },
      });
	
	$.ajax({
		type: "GET",
		url: "https://api-dev.traderonline.com/vlatest/cycles?modelId=" + modelID + "&limit=1&view=full",
		cache: false,
		beforSend: function (xhr) {
			var token = 'Bearer ' + self.accessToken;
			xhr.setRequestHeader('Authorization', token);
		},
		dataType: 'json',
		error: function() {
			console.log('error');
		},
		success: function(data){
			_cycle[0] = data.result[0]
		}
	});
};
