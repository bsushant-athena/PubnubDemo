var pubnub = require("pubnub");

var pub = new pubnub({ publishKey : 'pub-c-8270a0d1-82f2-4687-ab59-110f752e7235', subscribeKey : 'sub-c-a2908ff6-d650-11e6-8b9b-02ee2ddab7fe' , secretKey: 'sec-c-MWI5ZDhhOTQtZjc1OS00MjJjLWJmNmMtMTEyMGU2MjllNjZj'});

pub.addListener({
  message: function(obj) {
      console.log('message=',obj.message);
 }});

pub.subscribe({channels:['channel']});

