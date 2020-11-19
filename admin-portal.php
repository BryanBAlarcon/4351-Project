<?php

//need to pull user id variable from url like this:
//       $id = $match['params']['id'];

?>
<!DOCTYPE html>
<htML>
    <head>
        <title>Admin Portal</title>
        <link rel = 'stylesheet' type = 'text/css' href = 'css/style.css'>

        <script src = 'link-functions.js' type = 'text/javascript'></script>
    </head>
    <body>
        <div class = 'main'>
            <div class = 'title-box'><h1 id = 'main-title'><center>Welcome to the Admin Portal</center></h1></div>
            <div class = 'info-box-center'>
                <div style = 'width: 50%; float: left;'>
                    <div id = 'instruct'>Please select one<br>of the<br>following links</div>
                </div>
                <div style = 'width: 50%; float: right;'>
                    <select id = 'link-select'>
                        <option value="" selected disabled hidden>choose link to redirect to</option>
                        <option>link 1</option>
                        <option>link 2</option>
                        <option>link 3</option>
                    </select>
                    <button id = 'go-button'>go</button>
                </div>
            </div>
        </div>
        <script>
            // these will be used to make the buttons work and to fill out the link dropdown
            $(document).ready(function() {
                functionex1(var);
                functionex2(var);
            }) 
        </script>
    </body>
</htML>