function getCorrectLinks(text) {
    //this function needs to get the value from the admin-select option and pass it into the url
    console.log(text);
    var url = 'admin-portal.html?role=' + text;
    console.log(url);
    window.open(url, '_self');
}