$(document).ready(function(){
    var xm = $.xmlayout.layout();
    var data = xm.element(10, true, true, null, [
            xm.element(2, true, true, true),
            xm.element(8, true, true, null, null, [
                xm.element(8, true, true, null, [
                    xm.element(8, true, true, null, null, [
                        xm.element(8, true, true, false),
                        xm.element(5, true, true, true)
                        ]),
                    xm.element(2, true, true, false)
                    ]),
                xm.element(2, false, false, true)//不让拖动
                ]),
        ]);
    
    xm.init({
        data : data,
        panel : $(".div_full").eq(0),
        timer : 2000,
        drag_bar_unit : 5
    });

    var panels = xm.getPanels();
    panels[0].loadPage("demo2/test1.html");
    panels[1].loadPage("demo2/test2.html", null, null, "Test", {fontcolor:"blue"});
    panels[2].loadPage("demo2/test3.html");
    panels[3].loadPage("demo2/test4.html");
    panels[4].loadPage("demo2/test5.html", null, function(){console.log(1);}, "test", {fontcolor:"red", pos:"center"});

    //对Panel 1添加自定义右键按钮和事件
    var id = xm.addRightPanelItem(panels[0], "user-defiend", function(e){
        alert("user-defiend click");
        xm.removeRightPanelItem(panels[0], id);
    });

    xm.disablePanelItem(panels[0], xm.RPID.ZOOM_OUT, true);//对Panel 1禁用放大、缩小功能
    $.xmlayout.xm1 = xm;
});