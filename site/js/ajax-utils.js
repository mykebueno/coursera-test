(function(global){
    
    //Set up a namespace for our utility
    var ajaxUtils = {};

    //returns an http request object
    function getRequestObject(){
        if(window.XMLHttpRequest){
            return(new XMLHttpRequest());
        }
        else{
            global.alert("Ajax is not supported");
            return(null);
        }
    }

    //Makes ajax get request url
    ajaxUtils.sendGetRequest =
        function(requestUrl, responseHandler){
            var request = getRequestObject();
            request.onreadystatechange =
                function() {
                    handleResponse(request,responseHandler);
                };
            request.open("GET", requestUrl, true);
            request.send(null);
        };

    function handleResponse(request,responseHandler){
        if((request.readyState == 4) && (request.status == 200))
        {
            responseHandler(request);
        }
    }

    global.$ajaxUtils = ajaxUtils;

})(window);