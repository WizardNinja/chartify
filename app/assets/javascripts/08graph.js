    //////////////////////GETTING JSON DATA//////////////////////
$(document).ready(function() {

  $.getJSON("/hometowns")
    .done(function(data8){
    console.log("Fetched Your Friends' Hometowns")
    var array_values8= new Array();
      for (var key in data8) {
        array_values8.push(data8[key])
      }
    console.log(array_values8[1][0])
    console.log(array_values8[0][0])

    console.log(array_values8[1][1])
    console.log(array_values8[0][1])

    console.log(array_values8[1][2])
    console.log(array_values8[0][2])

    console.log(array_values8[1][3])
    console.log(array_values8[0][3])


    // THIS WORKS AND SHOWS AN ARRAY OF SHITTY NUMBERS

//////////////////////PIE GRAPH//////////////////////
    //Get context with jQuery - using jQuery's .get() method.
    var ctx6 = $("#myChart8").get(0).getContext("2d");

    //Create the data object to pass to the chart
    var data8 = [
      {
        value: array_values8[1][0]/(array_values8[1][0]+array_values8[1][1]+array_values8[1][2]+array_values8[1][3]),
        color:"#F7464A",
        label : array_values8[0][0],
        labelColor : 'white',
        labelFontSize : '15',
        labelAlign: 'center'
      },
      {
        value : array_values8[1][1]/(array_values8[1][0]+array_values8[1][1]+array_values8[1][2]+array_values8[1][3]),
        color : "#E2EAE9",
        label : array_values8[0][1],
        labelColor : 'white',
        labelFontSize : '15',
        labelAlign: 'center'
      },
      {
        value : array_values8[1][2]/(array_values8[1][0]+array_values8[1][1]+array_values8[1][2]+array_values8[1][3]),
        color : "#D4CCC5",
        label : array_values8[0][2],
        labelColor : 'white',
        labelFontSize : '15',
        labelAlign: 'center'
      },
      {
        value : array_values8[1][3]/(array_values8[1][0]+array_values8[1][1]+array_values8[1][2]+array_values8[1][3]),
        color : "#E2EAE9",
        label : array_values8[0][3],
        labelColor : 'white',
        labelFontSize : '15',
        labelAlign: 'center'
      }
    ]

    //Create the chart
    new Chart(ctx6).Pie(data8);
});

  })

