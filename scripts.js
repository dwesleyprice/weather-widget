var apiKey = '750a5edd0b32b5ffbb55cb40f0578c53';


$(document).ready(function(){
	$('.weather-form').submit(function(){
		event.preventDefault();
		var cityText = $('.city').val();

		var url = 'http://api.openweathermap.org/data/2.5/forecast/city?q=' +cityText+ '&units=imperial&APPID=' + apiKey;
			console.log(url);

	$.getJSON(url,function(weatherData){
		// console.log(weatherData);
		currentTemp = weatherData.list[0].main.temp;
		console.log(currentTemp);
		var canvas = document.getElementById('current-temp');
		var context = canvas.getContext('2d');

		context.beginPath();
		context.arc(155, 155, 70, Math.PI * 1.5, (currentTemp/100) * (Math.PI * 2) + (Math.PI *1.5));
		// context.arc(155, 155 70, Math.PI * 1.5, (currentTemp / 100) * (Math.PI*1.5) );
		context.lineWidth=5;
					
					if(currentTemp >= 80){
						context.strokeStyle="red";
						context.fillStyle="red";
					}

					if(currentTemp < 79 && currentTemp > 65){
						context.strokeStyle="purple";
						context.fillStyle="purple";
					}

					if(currentTemp < 65){
						context.strokeStyle="blue";
						context.fillStyle="blue";
					}

		context.stroke();
		context.font="14px Verdana";
		context.fillText("Current Temp", 105, 120);
		context.font="16px Verdana";	
		context.fillText(Math.round(currentTemp), 142, 160);
		context.font="12px Verdana";
		if(cityText.length < 8){
		context.fillText(cityText, 135, 200);
 		}else{
 			context.fillText(cityText, 120, 200);
 		}
 		// currentTemp++;
 		// if(current < currentTemp){
 		// requestAnimationFrame(function(){
 		// currentTemp;
 		// 	});
 		

	});
  });
});