function upDate(previewPic){
    var src = previewPic.getAttribute( "src" );
    var alt = previewPic.getAttribute( "alt" );
    document.getElementById('image').style.backgroundImage = "url('" + src + "')";
    document.getElementById('image').innerHTML = alt;
}

function unDo(X){
    X = document.getElementById('image');
    X.style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Oops, you moved your cursor. Hoover over a pic to view another pic";

}