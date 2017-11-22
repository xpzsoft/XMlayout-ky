$(document).ready(function(){
		var lmyChart = null;

		function init_lisitener() {
			$.xmlayout.getParam('xm').resize(function () {
				lmyChart.resize();
			});
		};

		function draw_charts(){
			lmyChart = echarts.init($("#echart2")[0]);
			lmyChart.setOption(cal_option());
			window.onresize = function(){
				lmyChart.resize();
			}
		};

		function cal_option(){
			var option = {
			    title : {
			        text: '某站点用户访问来源',
			        subtext: '纯属虚构',
			        x:'center',
			        textStyle : {
			        	fontSize : 12
			        }
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient : 'vertical',
			        x : 'left',
			        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            mark : {show: true},
			            dataView : {show: true, readOnly: false},
			            magicType : {
			                show: true, 
			                type: ['pie', 'funnel'],
			                option: {
			                    funnel: {
			                        x: '25%',
			                        width: '50%',
			                        funnelAlign: 'left',
			                        max: 1548
			                    }
			                }
			            },
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    calculable : true,
			    series : [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:234, name:'联盟广告'},
			                {value:135, name:'视频广告'},
			                {value:1548, name:'搜索引擎'}
			            ]
			        }
			    ]
			}
                    
			return option;
		};
		init_lisitener();
		draw_charts();
	});