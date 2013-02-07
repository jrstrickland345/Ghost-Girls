var theElement = $('#introLinks div');
var theElement2 = $('#introLinks a');

theValue = $(document).width()/384;

theElement.css('bottom',theValue+"em");

theValue2 = $(document).width()/1920;

theElement2.css('left',theValue2+"em");

theValue3 = $(document).width()/960;

theElement.css('font-size',theValue3+"em");





$(window).resize(function() {

console.log("you have resized the screen");

theValue = $(document).width()/384;

theElement.css('bottom',theValue+"em");

theValue2 = $(document).width()/1920;

theElement2.css('left',theValue2+"em");

theValue3 = $(document).width()/960;

theElement.css('font-size',theValue3+"em");

console.log(theValue+" "+theValue2+" "+theValue3);

});

