$(document).ready(function(){
		var lmyChart = null;

		function init_lisitener() {
			$.xmlayout.getParam('xm').resize(function () {
				lmyChart.resize();
			});
		};

		function draw_charts(){
			lmyChart = echarts.init($("#echart4")[0]);
			lmyChart.setOption(cal_option());
			window.onresize = function(){
				lmyChart.resize();
			}
		};

		function cal_option(){
			var data = [];

			for (var i = 0; i <= 360; i++) {
			    var t = i / 180 * Math.PI;
			    var r = Math.sin(2 * t) * Math.cos(2 * t);
			    data.push([r, i]);
			}

			var option = {
			    title: {
			        text: '极坐标双数值轴',
			        textStyle : {
			        	fontSize : 12
			        }
			    },
			    legend: {
			        data: ['line']
			    },
			    polar: {
			        center: ['50%', '54%']
			    },
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'cross'
			        }
			    },
			    angleAxis: {
			        type: 'value',
			        startAngle: 0
			    },
			    radiusAxis: {
			        min: 0
			    },
			    series: [{
			        coordinateSystem: 'polar',
			        name: 'line',
			        type: 'line',
			        showSymbol: false,
			        data: data
			    }],
			    animationDuration: 2000
			}
			return option;
		};
		init_lisitener();
		draw_charts();
	});