var $titleElement = $('<div>');
$($titleElement).attr('id','Title');
$('body').append($titleElement);

var $addButton = $('<div>');
$($addButton).attr('id', 'addButton');
$($addButton).text('+');
$($titleElement).append($addButton);

var $topicElement = $('<div>');
$($topicElement).addClass('TopicDiv');
$('body').append($topicElement);

var $random = $('<div>');
$($random).attr('id','random');
$($random).text('RANDOM');
var $myBoards = $('<div>');
$($myBoards).attr('id','my_boards');
$($myBoards).text('MY BOARDS');
var $getTheApp = $('<div>');
$($getTheApp).attr('id','get_the_app');
$($getTheApp).text('GET THE APP');
$('.TopicDiv').append($random);
$('.TopicDiv').append($myBoards);
$('.TopicDiv').append($getTheApp);
$($getTheApp).on('click', getData);
$($myBoards).on('click', getData);
$($random).on('click', getData);

var $contentElement = $('<div>');
$($contentElement).attr('id', 'content');
$('body').append($contentElement);

function getData(event){
  $.ajax({
    method: 'GET',
    url: '/api/' + $(this).attr('id') + '.json',
    dataType: 'json',
  })
  .done(function(result) {
    console.log(result);
    displayPage(result);
  });
}

function displayPage(response){
  var responseArr = response.data.children;
  console.log(responseArr);

  responseArr.forEach(function(element, index, arr){
    var $articleElement = $('<div>');
    $($articleElement).addClass('articles');
    $('#content').append($articleElement);

    var $imageElement = $('<div>');
    $($imageElement).addClass('images');
    var imageThumbnail = arr[index].data.thumbnail;
    $($imageElement).css('backgroundImage', 'url(' + imageThumbnail + ')');
    $($articleElement).append($imageElement);

    var $articleTitle = $('<div>');
    $($articleTitle).addClass('titles');
    $($articleTitle).text(arr[index].data.title);
    $($articleElement).append($articleTitle);

    var $articleAuthor = $('<div>');
    $($articleAuthor).addClass('authors');
    $($articleAuthor).text('by ' + arr[index].data.author);
    $($articleElement).append($articleAuthor);

    var $articleDescription =  $('<div>');
    $($articleDescription).addClass('description');
    $($articleTitle).text(arr[index].data.title);
    $($articleElement).append($articleDescription);

  });


}