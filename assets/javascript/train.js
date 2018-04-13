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