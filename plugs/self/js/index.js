$(document).ready(function(){$.ajax({url:"http://"+window.location.host+"/XMlayout/xmlayout/service/visit",type:"GET",dataType:"JSON",success:function(o){console.log(o[0]),$("body").html('<div class="mdiv"><iframe frameborder="0" width="100%" height="100%" scrolling="no" src="pages/demo/workspace.html"></iframe></div>')}})});