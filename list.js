/**
 * Created by Kaushik on 3/11/2016.
 */
(function (w, d, wO, dO, $, t) {
    var Functions = {
        loadstation : function() {
            var array = $("#ConductorDisplay").children().toArray();
            t.staggerFromTo(array, 0.4, {
                y: -30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                ease: Power2.easeIn
            }, 0.2);
        }
    };
dO.on('ready',function(){
    $('#button').on("click",function(){
        t.to($('#button'),1,{
            color : 'darkcyan',
            onComplete : function() {
                t.to($('#button'), 1, {
                    color: 'darkcyan'
                });
            }
        });
        var ajaxRequest;
        try{
            // Opera 8.0+, Firefox, Safari
            ajaxRequest = new XMLHttpRequest();
        }catch (e){
            // Internet Explorer Browsers
            try{
                ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }catch (e) {
                try{
                    ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }catch (e){
                    // Something went wrong
                    alert("Your browser broke!");
                    return false;
                }
            }
        }
        var query = "?BusNumber=1";

        ajaxRequest.open("POST", "ListBusStation.php" + query, true);
        ajaxRequest.send(null);
        ajaxRequest.onreadystatechange = function(){
            if(ajaxRequest.readyState == 4){
                var ajaxDisplay = $('#ConductorDisplay');
                ajaxDisplay.append(ajaxRequest.responseText);
                Functions.loadstation();
            }
        }
    });
})(window, document, jQuery(window), jQuery(document), jQuery, TweenMax);