document.addEventListener("deviceready", onDeviceReady, false);
console.log("compOv");

// onSuccess: Get the current heading
//
function onSuccess(heading) {
	console.log("compSucc");
	alert('Heading: ' + heading.magneticHeading);
}

// onError: Failed to get the heading
//
function onError(compassError) {
	console.log("compErr");
	alert('Compass Error: ' + compassError.code);
}
// Cordova is ready
//
function onDeviceReady() {
	console.log("compRead");
	navigator.compass.getCurrentHeading(onSuccess, onError);
}