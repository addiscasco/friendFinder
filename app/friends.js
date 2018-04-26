


var friendsArray = [{
    "name": "Kourtney Kardashian",
    "photo": "http://www.flickr.com/photos/chmurka/2524849923/",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},
{
    "name": "Kim Kardashian",
    "photo": "http://www.flickr.com/photos/chmurka/2524849923/",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},
{
    "name": "Khloe Kardashian",
    "photo": "http://www.flickr.com/photos/chmurka/2524849923/",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}];

module.exports = friendsArray;

$("#submitAnswers").on("click", function () {
    event.preventDefault();

    var userData = {
      name: $("#name").val(),
      phoneNumber: $("#photo").val(),
      scores: [
          $("#ans1").val(),
          $("#ans2").val(),
          $("#ans3").val()
      ]  
    };

    //data I want to send 
    // $.post("/reserve", newReservation, function (data) {

    //   console.log(data);

    //   if (data){
    //     console.log("reservation is booked");
    //   }

  });
  


  });