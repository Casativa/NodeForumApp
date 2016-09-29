var userListData = [];
var postListData = [];
var commentsListData = [];

$(document).ready(function() {

  $.when(getAllData()).then(populateTable());
  //getAllData(function(){
  //populateTable();
//});
});

function getAllData(){

  $.getJSON('http://jsonplaceholder.typicode.com/posts/', function(postData) {
    postListData = postData;
  });
  $.getJSON('http://jsonplaceholder.typicode.com/users/', function(userData) {
    userListData = userData;
  });
  $.getJSON('http://jsonplaceholder.typicode.com/comments/', function(commentData) {
    commentsListData = commentData;
  });
};

function populateTabel(){

  $.each(postListData, function(i, field){

    var author = userListData.find(function(user){ return user.id == field.userId });
    var titleTB = document.createElement('span');
    titleTB.setAttribute('class', 'titleTB col-sm-8');
    titleTB.innerHTML = field.title;
    //$('titleTB.text').text(field.title);

    var postTextTB = document.createElement('span');
    postTextTB.setAttribute('class', 'postTextTB col-sm-8');
    postTextTB.innerHTML = field.body;
    //$('postTextTB').text(field.body);

    var authorUserNameTB = document.createElement('span');
    authorUserNameTB.setAttribute('class', 'authorUserNameTB col-sm-2');
    authorUserNameTB.innerHTML = author.username;
    //$('authorUserNameTB').text(author.username);

    var authorEmailTB = document.createElement('span');
    authorEmailTB.setAttribute('class', 'authorEmailTB col-sm-2');
    authorEmailTB.innerHTML = author.email;
    //$('authorEmailTB').text(author.email);

    $('.postDiv').appendChild(titleTB);
    $('.postDiv').appendChild(postTextTB);
    $('.profilDiv').appendChild(authorMU);
    $('.profilDiv').appendChild(authorEmailMU);
  });
};
