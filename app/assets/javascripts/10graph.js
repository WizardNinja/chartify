    //////////////////////GETTING JSON DATA//////////////////////
$(document).ready(function() {
  gender();
  
  $("body").on("click", ".friend", function() {
    gender_with_id(this.getAttribute("data-id"));
  });
});

gender_with_id = function(friend_id){
  $.getJSON("/gender?friend_id=" + friend_id)
    .done(function(data10){
    var array_values10= new Array();
      for (var key in data10) {
        array_values10.push(data10[key])
      }

    //////////////////////PIE GRAPH//////////////////////
    //Get context with jQuery - using jQuery's .get() method.
    var ctx10 = $("#myChart10").get(0).getContext("2d");

    //Create the data object to pass to the chart
    var data10 = [
      {
        value: array_values10[0],
        color:"#F7464A",
        label : 'Males',
            labelColor : 'white',
            labelFontSize : '15',
            labelAlign: 'center'
      },
      {
        value : array_values10[1],
        color : "#E2EAE9",
        label : 'Females',
            labelColor : 'white',
            labelFontSize : '15',
            labelAlign: 'center'
      }
    ]

    //Create the chart
    new Chart(ctx10).Pie(data10);
  });
}

gender = function(){
  $.getJSON("/gender")
    .done(function(data10){
    var array_values10= new Array();
      for (var key in data10) {
        array_values10.push(data10[key])
      }

    //////////////////////PIE GRAPH//////////////////////
    //Get context with jQuery - using jQuery's .get() method.
    var ctx10 = $("#myChart10").get(0).getContext("2d");

    //Create the data object to pass to the chart
    var data10 = [
      {
        value: array_values10[0],
        color:"#F7464A",
        label : 'Males',
            labelColor : 'white',
            labelFontSize : '15',
            labelAlign: 'center'
      },
      {
        value : array_values10[1],
        color : "#E2EAE9",
        label : 'Females',
            labelColor : 'white',
            labelFontSize : '15',
            labelAlign: 'center'
      }
    ]

    //Create the chart
    new Chart(ctx10).Pie(data10);
  });
}

