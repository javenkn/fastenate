var $titleElement = $('<div>');
$($titleElement).attr('id','Title');
$('body').append($titleElement);

var $topicElement = $('<div>');
$($topicElement).addClass('TopicDiv');
$('body').append($topicElement);

var $getTheApp = $('<div>');
$($getTheApp).attr('id','get_the_app');
var $myBoards = $('<div>');
$($myBoards).attr('id','my_boards');
var $random = $('<div>');
$($random).attr('id','random');
$('.TopicDiv').append($getTheApp);
$('.TopicDiv').append($myBoards);
$('.TopicDiv').append($random);
$($getTheApp).on('click', getData);
$($myBoards).on('click', getData);
$($random).on('click', getData);

function getData(event){
  $.ajax({
    method: 'GET',
    url: '/public/api/' + $(this).attr('id') + '.json',
    dataType: 'json',
  })
  .done(function(result) {
    displayPage(result);
  });

}

function displayPage(response){

}