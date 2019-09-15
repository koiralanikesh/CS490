function getGithubInfo(user) {
   var xhttp = new XMLHttpRequest();
   xhttp.overrideMimeType("application/json");
   xhttp.open('GET', "https://api.github.com/users/"+user, true);
   xhttp.onload=function () {
       if (xhttp.status == 200){
           showUser(JSON.parse(xhttp.responseText));
       } else {
           noSuchUser(user);
       }

   };
   xhttp.send();
}

function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    $("#name").text(user.login);
    $(".avatar").html("<img height='250 width='250' src='"+user.avatar_url+"'/>");
    var link="<a target='_blank' href='"+user.html_url+"'>Click here</a>";
    $(".information").html("<label><u><strong>Detail of the user</strong></strong></u></label>"
    +
        "<br/><br/><label style ='color: red' align='left'>Login Name :</label>"+user.name
        +"<br/><label style ='color: red' align='left'>Login ID :</label>"+user.id
        +"<br/><label style ='color: red' align='left'>Github URL :</label>"+link
        +"<br/><label style ='color: red' align='left'>Repo count :</label>"+ user.public_repos);
    $("#profile").show();
}

function noSuchUser(username) {
  $("#name").text("Sorry, The user '"+username+"' does not exist");
  $(".avatar").text('');
  $(".information").html('');
  $("#profile").show();
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        $("#profile").hide();
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            getGithubInfo(username);
            //if the response is successful show the user's details

        }
    })
});
