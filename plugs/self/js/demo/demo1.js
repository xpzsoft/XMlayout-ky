$(document).ready(function(){var t=$.xmlayout.layout(),e=t.design(2,3);t.init({data:e,panel:$(".div_full").eq(0),drag_bar_unit:5,timer:2e3});var l=t.getPanels();l[0].load("demo1/test1.html"),l[1].load("demo1/test2.html"),l[2].load("demo1/test3.html"),l[3].load("demo1/test4.html"),l[4].load("demo1/test5.html"),l[5].load("demo1/test6.html"),$.xmlayout.xm=t});