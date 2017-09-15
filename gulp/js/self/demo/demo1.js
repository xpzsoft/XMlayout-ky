$(document).ready(function(){
    var xm = $.xmlayout.layout();
    // var data = xm.element(10, true, true, null, [
    //         xm.element(1, true, true, null, null, [
    //                 xm.element(1, true, true, true),
    //                 xm.element(1, true, true, true)
    //             ]),
    //         xm.element(2, true, true, null, [
    //                 xm.element(1, true, true, null, null, [
    //                          xm.element(1, true, true, true),
    //                          xm.element(1, true, true, true)
    //                     ]),
    //                 xm.element(1, true, true, null, null, [
    //                          xm.element(1, true, true, true),
    //                          xm.element(1, true, true, true)
    //                     ])
    //             ])
    //     ]);

    var data = xm.design(2,3);
    
    xm.init({
        data : data,
        panel : $(".div_full").eq(0),
        drag_bar_unit : 5,
        timer : 2000
    });

    var panels = xm.getPanels();
    panels[0].load("demo1/test1.html");
    panels[1].load("demo1/test2.html");
    panels[2].load("demo1/test3.html");
    panels[3].load("demo1/test4.html");
    panels[4].load("demo1/test5.html");
    panels[5].load("demo1/test6.html");

    $.xmlayout.xm = xm;
});