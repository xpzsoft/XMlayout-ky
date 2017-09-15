$(document).ready(function(){
      $("#workspace").load("demo1/demo1.html");
      $(".demo").click(function(){
          if($(this).attr("name") == "demo1"){
              $("#workspace").load("demo1/demo1.html");
          }
          else{
              $("#workspace").load("demo2/demo2.html");
          }
      });
}); 