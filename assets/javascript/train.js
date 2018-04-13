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

    $("#submitButton").on("click", function(event) {
        event.preventDefault();


            var trainName = $("trainName").val().trim();
            var destination = $("destination").val().trim();
            var militaryTime = $("militaryTime").val().trim();
            var frequency = $("frequency").val().trim();

        database.ref().push({
            trainName: trainName,
            destination: destination,
            militaryTime: militaryTime,
            frequency: frequency

        });
    });

    database.ref().on("child_added", function (childSnapshot) {

        var newTrain = childSnapshot.val().trainName;
        var newLocation = childSnapshot.val().destination;
        var newFirstTrain = childSnapshot.val().militaryTime;
        var newFreq = childSnapshot.val().frequency;
    
        // First Time (pushed back 1 year to make sure it comes before current time)
        var startTimeConverted = moment(newFirstTrain, "hh:mm").subtract(1, "years");
    
        // Current Time
        var currentTime = moment();
    
        // Difference between the times
        var diffTime = moment().diff(moment(startTimeConverted), "minutes");
    
        // Time apart (remainder)
        var tRemainder = diffTime % newFreq;
    
        // Minute(s) Until Train
        var tMinutesTillTrain = newFreq - tRemainder;
    
        // Next Train
        var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        var catchTrain = moment(nextTrain).format("HH:mm");
    
        // Display On Page
        $("#table-list").append(
          ' <tr><td>' + newTrain +
          ' </td><td>' + newLocation +
          ' </td><td>' + newFreq +
          ' </td><td>' + catchTrain +
          ' </td><td>' + tMinutesTillTrain + ' </td></tr>');
    
        // Clear input fields
        $("#trainName, #destination, #firstTrain, #interval").val("");
        return false;
      },
        //Handle the errors
        function (errorObject) {
          console.log("Errors handled: " + errorObject.code);
        });
    
    }); //end document ready
    








});