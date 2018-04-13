$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyB6GXe7gkEjTZtJQx2z2vrTALS7_qFrFco",
        authDomain: "test-firebase-bd806.firebaseapp.com",
        databaseURL: "https://test-firebase-bd806.firebaseio.com",
        projectId: "test-firebase-bd806",
        storageBucket: "test-firebase-bd806.appspot.com",
        messagingSenderId: "593832170791"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    $("#submitButton").on("click", function() {
        event.preventDefault();

            // Capturing the values
            var trainName = $("trainName").val().trim();
            var destination = $("destination").val().trim();
            var militaryTime = $("militaryTime").val().trim();
            var frequency = $("frequency").val().trim();

            //pushing to database
        database.ref().push({
            trainName: trainName,
            destination: destination,
            militaryTime: militaryTime,
            frequency: frequency

        });
    });
    //For Firebase
    database.ref().on("child_added", function (childSnapshot) {

        var newTrainName = childSnapshot.val().trainName;
        var newDestination = childSnapshot.val().destination;
        var newMilitaryTime = childSnapshot.val().militaryTime;
        var newFrequency = childSnapshot.val().frequency;
        
        //current time
       var currentTime = moment();

       // difference formula
       // time until next train
       // next train
       //push them to to Train Name/Destination/Freq etc.
       
    
    });
    








});