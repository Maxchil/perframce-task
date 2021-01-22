    // auto resize iamge based on the div next to it
    setTimeout(function(){
    result = 300;
    html5h = 250;
    //  document.getElementById("chromimg").width = result;
    }, 500);


   document.addEventListener("scroll", function() {
       var result = document.getElementById('testdiv').clientHeight;
        if (result >= 250){
            result = 250;
        }
        var html5h = document.getElementById('html5-check').clientHeight;
        var htmlpage = document.getElementById('html-page-check').clientHeight;
        var wc3 = document.getElementById('wc3-check').clientHeight;
        document.getElementById("wc3-img").width = wc3;
        document.getElementById("html5").width = html5h;
        document.getElementById("html-page").width = htmlpage;
       document.getElementById("chromimg").width = result;

    //    console.log(result)
   });
