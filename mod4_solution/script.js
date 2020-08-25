(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i <names.length; i++) {
	var name=names[i].toLowerCase();
	var firstletter=name.charAt(0);
	if (firstletter=='j') {
		byeSpeaker.speak(names[i]);
	} else {
		helloSpeaker.speak(names[i]);
	}
}
	
})();