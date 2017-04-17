var raspi = require('raspi');
var gpio = require('raspi-gpio');

raspi.init(function() {
	var input = new gpio.DigitalInput('GPIO2');
	var output = new gpio.DigitalOutput('GPIO3');
	while(true) {
		if(input.read() == gpio.HIGH) {
			output.write(gpio.LOW);
		} else {
			output.write(gpio.HIGH);
		}		
	};

}); 
