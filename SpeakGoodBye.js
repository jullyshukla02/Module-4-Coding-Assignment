(function(window) {
	
var byeSpeaker = {};
// var byeSpeaker = new Object()

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the

byeSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
window.byeSpeaker = byeSpeaker;
})(window);
