$(document).ready(function() {

	function analyze() {
		var slide = $(this).parents("section");
		var text = slide.find("pre").text();
		text = text
			.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
			.replace(/&nbsp;/g, " ").replace(/\s/g, " ")
			.replace(/(\$\("|appendTo\(")/g, "$1#" + slide.attr("id") + " ");
		eval( text );
		
	}
	
	$("button.run").click(analyze);
	$("pre.run").each(analyze);
	
	
	
	
	
	var chart = new Highcharts.Chart({
      chart: {
			animation: true,
			defaultSeriesType: 'column',
			renderTo: 'chart',
			zoomType: 'x'
		},
		credits: {
			enabled: false
		},
		tooltip: {
			borderWidth: 1,
			borderColor: '#909090',
			crosshairs: true,
			headerFormat: '<b>{point.key}</b><br>',
			pointFormat: '<div><span style="color: {series.color}">{series.name}:</span> {point.y}</div>',
			useHTML: true,
			shared: false
		},
		legend: {
			align: 'left',
			backgroundColor: 'rgba(255,255,255,0.5)',
			borderWidth: 1,
			floating: 'left',
			layout: 'vertical',
			verticalAlign: 'top',
			x: 80,
			y: 49
		},
		plotOptions: {
			column: {
				borderWidth: 0,
				shadow: false
			},
			spline: {
				lineWidth: 3,
				marker: {
					enabled: false,
					radius: 4,
					states: {
						hover: {
							enabled: true
						}
					}
				}
			}
		},
		title: {
			text: 'Release-Zyklus',
			margin: 30,
			style: {
				fontSize: '1.5em'
			}
			
		},
		
	
		xAxis: {
			title: {
				margin: 15,
				text: 'Releases'
			},
			tickmarkPlacement: 'on',
			labels: {
				y: 18	
			},
			tickWidth: 1,
			tickInterval: 4,
			categories: ['1.0', '1.0.1', '1.0.2', '1.0.3', '1.0.4', '1.1', '1.1.1', '1.1.2', '1.1.3', '1.1.3.1', '1.1.4', '1.2', '1.2.1', '1.2.2', '1.2.3', '1.2.4', '1.2.5', '1.2.6', '1.3', '1.3.1', '1.3.2', '1.4', '1.4.1', '1.4.2', '1.4.3', '1.4.4', '1.5', '1.5.1', '1.5.2', '1.6', '1.6.1', '1.6.2', '1.6.3', '1.6.4', '1.7', '1.7.1', '1.7.2']
		},
		yAxis: {
			title: {
				margin: 20,
				text: 'Tage'
			},
			startOnTick: false,
		},
      series: [{
         name: 'vergangene Tage seit letztem Release',
         data: [null, 6, 40, 19, 47, 34, 9, 37, 125, 5, 51, 18, 7, 122, 25, 102, 3, 4, 236, 8, 31, 329, 12, 26, 240, 27, 82, 25, 36, 34, 10, 50, 64, 12, 53, 19, 122]      
      
      },
      {
         name: 'Durchschnitt',
         type: 'spline',
         data: [null, 6, 23, 22, 28, 29, 26, 27, 40, 36, 37, 36, 33, 40, 39, 43, 41, 38, 49, 47, 46, 60, 58, 56, 64, 63, 63, 62, 61, 60, 58, 58, 58, 57, 57, 56, 58]      
      
      }]
   });

	
	
	
	
	
	
	
	

});