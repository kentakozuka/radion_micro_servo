var raspi = require('raspi');
var PWM = require('raspi-pwm').PWM;

raspi.init(function() {
	var pwm = new PWM('GPIO18');
	var i=0;
	setInterval(function() {
		pwm.write((i%2==0) ? 110 : 40);
		i++;
	}, 1000);
});
