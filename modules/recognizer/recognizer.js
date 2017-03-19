Module.register("recognizer",{

  getScripts: function() {
    // return ["webcam.js"];
  },

  start() {
    console.log("Recognizer started");
    this.sendSocketNotification("RECOGNIZER_STARTUP");
    return;
  },

  socketNotificationReceived: function(notification) {
    console.log("Recognizer recieved a notification: " + notification)

    if (notification === "RECOGNIZER_CONNECTED"){
      console.log("Recognizer initialized, awaiting Activation");
      return;
    }
  },

  notificationReceived: function(notification) {
    if(notification === "picture") {
      console.log("=============================");
      console.log("recieved request for picture!")
      this.sendSocketNotification("TAKE_SELFIE");
      return;
    }
	}

});
