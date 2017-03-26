var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //make a request to the counter endpoint
    var request = new XMLHTTPRequest();
    //capture the response and store it in a variable
    request.onreadystateChange = function(){
        if(request.readyState === XMLHTTPRequest.DONE){
            if(request.status === 200){
                var counter =request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //render  the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};
