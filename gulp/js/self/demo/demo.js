$(document).ready(function(){
	 var mypanel = $("#workspace");

	 function load_demo1(panel){
	 	var xm = $.xmlayout.layout();
	    var data = xm.design(2,3);
	    xm.init({
	        data : data,
	        panel : panel,
	        drag_bar_unit : 5,
	        timer : 2000
	    });

	    var panels = xm.getPanels();
	    panels[0].loadPage("demo1/test1.html", null, null, "大数据量面积图");
	    panels[1].loadPage("demo1/test2.html", null, null, "某站点用户访问来源");
	    panels[2].loadPage("demo1/test3.html", null, null, "折线图");
	    panels[3].loadPage("demo1/test4.html", null, null, "极坐标双数值轴");
	    panels[4].loadPage("demo1/test5.html", null, null, "某地区蒸发量和降水量");
	    panels[5].loadPage("demo1/test6.html", null, null, "实时数据更新动态图");
	    
	   // $.xmlayout.setPlay([panels[0], panels[1]]);//只播放panels[0]与panels[1]

	    $.xmlayout.addParam({xm : xm});
	 }

	 function load_demo2(panel){
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
	                ])
	        ]);
	    
	    xm.init({
	        data : data,
	        panel : panel,
	        timer : 2000,
	        drag_bar_unit : 5
	    });

	    var panels = xm.getPanels();
	    panels[0].loadPage("demo2/test1.html", null, function(){
	    	panels[0].design_i(2,1, [[1,1], [5,1]]);
          	panels[0].getPanels_i('2:1').design_i(1,3, [[1,1,18,1]]);
           	panels[0].getPanels_i('2:1').getPanels_i('1:2').design_i(3,1,[[1,1],[2,1],[4,1]]);

          	//绘制布局
          	panels[0].draw();
	    }, "panel1", {bgcolor:"red", fontcolor:"white"});

	    panels[1].loadPage("demo2/test2.html", null, function(){
	    	panels[1].design_i(2,1, [["auto",1], ["auto",1]]);
          	panels[1].getPanels_i('2:1').design_i(1,3, [[1,1,18,1]]);
           	panels[1].getPanels_i('2:1').getPanels_i('1:2').design_i(2,1,[["auto",1],["auto",1]]);

          	//绘制布局
          	panels[1].draw();
	    });

	    panels[2].loadPage("demo2/test3.html", null, null, "panel3", {fontcolor:"blue"});

	    panels[3].loadPage("demo2/test4.html", null, function(){
	    	panels[3].design_i(2,1, [["auto",1], ["auto",1]]);
          	panels[3].getPanels_i('2:1').design_i(1,3, [[1,1,18,1]]);
          	panels[3].getPanels_i('2:1').getPanels_i('1:2').design_i(2,1,[["auto",1],["auto",1]]);
          
          	//绘制布局
          	panels[3].draw();
	    });

	    panels[4].loadPage("demo2/test5.html", null, function(){
	    	panels[4].design_i(2,1, [["auto",1], ["auto",1]]);
          	panels[4].getPanels_i('2:1').design_i(1,3, [[1,1,18,1]]);
          	panels[4].getPanels_i('2:1').getPanels_i('1:2').design_i(2,1,[["auto",1],["auto",1]]);

          	//绘制布局
          	panels[4].draw();
	    }, "panel5", {fontcolor:"red", pos:"center", fontsize:"24"});

	    //对Panel 1添加自定义右键按钮和事件
	    var id = xm.addRightPanelItem(panels[0], "user-defiend", function(e){
	        alert("user-defiend click");
	        xm.removeRightPanelItem(panels[0], id);
	    });

	    xm.disablePanelItem(panels[0], xm.RPID.ZOOM_OUT, true);//对Panel 1禁用放大、缩小功能
	    $.xmlayout.addParam({xm : xm});
	 }


    load_demo1(mypanel);
    $(".demo").click(function(){
     	
        if($(this).attr("name") == "demo1"){
            load_demo1(mypanel);
        }
        else if($(this).attr("name") == "demo2"){
            load_demo2(mypanel);
        }
        else if($(this).attr("name") == "demo3"){
        	window.parent.location.href = "demo3/demo3.html";
        }
    });
}); 