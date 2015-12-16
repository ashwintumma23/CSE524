/**
 * Created by Nikhil on 11/12/2015.
 */
$(document)
		.ready(
				function() {
					$('[data-toggle=offcanvas]').click(function() {
						$('.row-offcanvas').toggleClass('active');
					});
					var i = 1;
					$("#add_row")
							.click(
									function() {
										$('#addr' + i)
												.html(
														"<td>"
																+ (i + 1)
																+ "</td><td><input name='dosageName"
																+ i
																+ "' type='text' placeholder='Name and Dosage' class='form-control input-md'  /></td><td><input  name='time"
																+ i
																+ "' type='text' placeholder='Time'  class='form-control input-md'></td><td><input  name='route"
																+ i
																+ "' type='text' placeholder='Route'  class='form-control input-md'></td><td><input  name='site"
																+ i
																+ "' type='text' placeholder='Site'  class='form-control input-md'></td><td><input  name='md"
																+ i
																+ "' type='text' placeholder='MD'  class='form-control input-md'></td><td><input  name='rnintials"
																+ i
																+ "' type='text' placeholder='RN Initials'  class='form-control input-md'></td>");

										$('#tab_logic').append(
												'<tr id="addr' + (i + 1)
														+ '"></tr>');
										i++;
									});
					$("#delete_row").click(function() {
						if (i > 1) {
							$("#addr" + (i - 1)).html('');
							i--;
						}
					});
					displayTimeline();
					displayBp();

					$('#displayName').text(sessionStorage.getItem("name"));
					$('#displayDob').text(sessionStorage.getItem("dob"));
					var htmlToAdd = "";
					var gen = sessionStorage.getItem("gender");
					if (gen == "male") {
						htmlToAdd = "<i class='fa fa-male fa-lg'></i> Male";
					} else {
						htmlToAdd = "<i class='fa fa-female fa-lg'></i> Female";
					}
					$('#displayGender').html(htmlToAdd);
					$('#displayWeight').text(
							sessionStorage.getItem("weight") + " Kgs.");
					var level = sessionStorage.getItem("emergencyLevel");
					if (level == "Level 1") {
						$('#displayLevel').addClass("label label-danger");
					} else if (level == "Level 2") {
						$('#displayLevel').addClass("label label-warning");
					} else {
						$('#displayLevel').addClass("label label-info");
					}
					$('#displayLevel').text(level);
					tabs = $('ul.tabNavigate li a');

					tabs.bind('click', function(event) {
						var $anchor = $(this);
						$("#primSurvey").hide();
						$("#secondarySurvey").hide();
						$("#medications").hide();
						$("#reviewTimeline").hide();
						$("#vitals").hide();
						$("#ivfluids").hide();
						event.preventDefault();
						$($anchor.attr('href')).show();
						event.preventDefault();
					});
				});

function displayTimeline() {
	var groups = new vis.DataSet([ {
		id : 0,
		content : 'Primary Survey',
		value : 1
	}, {
		id : 1,
		content : 'Secondary Survey',
		value : 2
	}, {
		id : 2,
		content : 'Vitals',
		value : 3
	}, {
		id : 3,
		content : 'Fluids',
		value : 4
	}, {
		id : 4,
		content : 'Medications',
		value : 5
	}, {
		id : 5,
		content : 'Procedures',
		value : 6
	} ]);

	// create a dataset with items
	// note that months are zero-based in the JavaScript Date object, so month 3 is April
	var items = new vis.DataSet([ {
		id : 0,
		group : 0,
		content : 'Primary Survey',
		start : new Date(2015, 12, 14, 12, 40),
		type : 'box'
	}, {
		id : 1,
		group : 1,
		content : 'Secondary Survey',
		start : new Date(2015, 12, 14, 12, 45),
		type : 'box'
	},

	{
		id : 2,
		group : 2,
		content : 'Reading 1',
		start : new Date(2015, 12, 14, 12, 42),
		type : 'point',
		className : 'brown'
	}, {
		id : 3,
		group : 2,
		content : 'Reading 2',
		start : new Date(2015, 12, 14, 12, 47),
		type : 'point',
		className : 'brown'
	}, {
		id : 4,
		group : 2,
		content : 'Reading 3',
		start : new Date(2015, 12, 14, 12, 52),
		type : 'point',
		className : 'brown'
	}, {
		id : 5,
		group : 2,
		content : 'Reading 4',
		start : new Date(2015, 12, 14, 12, 57),
		type : 'point',
		className : 'brown'
	}, {
		id : 6,
		group : 2,
		content : 'Reading 5',
		start : new Date(2015, 12, 14, 13, 02),
		type : 'point',
		className : 'brown'
	}, {
		id : 7,
		group : 2,
		content : 'Reading 6',
		start : new Date(2015, 12, 14, 13, 07),
		type : 'point',
		className : 'brown'
	}, {
		id : 8,
		group : 2,
		content : 'Reading 7',
		start : new Date(2015, 12, 14, 13, 12),
		type : 'point',
		className : 'brown'
	}, {
		id : 9,
		group : 2,
		content : 'Reading 8',
		start : new Date(2015, 12, 14, 13, 19),
		type : 'point',
		className : 'brown'
	},

	{
		id : 10,
		group : 3,
		content : 'Fluid 1 Infused',
		start : new Date(2015, 12, 14, 12, 26),
		type : 'box',
		className : 'green'
	}, {
		id : 11,
		group : 3,
		content : 'Fluid 2 Infused',
		start : new Date(2015, 12, 14, 13, 26),
		type : 'box',
		className : 'green'
	}, {
		id : 12,
		group : 3,
		content : 'Fluid 3 Infused',
		start : new Date(2015, 12, 14, 14, 26),
		type : 'box',
		className : 'green'
	}, {
		id : 13,
		group : 3,
		content : 'Fluid 4 Infused',
		start : new Date(2015, 12, 14, 15, 26),
		type : 'box',
		className : 'green'
	},

	{
		id : 14,
		group : 4,
		content : 'A',
		start : new Date(2015, 12, 14, 12, 35),
		type : 'box',
		className : 'orange'
	}, {
		id : 15,
		group : 4,
		content : 'B',
		start : new Date(2015, 12, 14, 13, 02),
		type : 'box',
		className : 'orange'
	}, {
		id : 16,
		group : 4,
		content : 'C',
		start : new Date(2015, 12, 14, 13, 32),
		type : 'box',
		className : 'orange'
	}, {
		id : 17,
		group : 5,
		content : 'Nastrogastic',
		start : new Date(2015, 12, 14, 13, 16),
		type : 'box',
		className : 'magenta'
	}, {
		id : 18,
		group : 5,
		content : 'Oralgastic',
		start : new Date(2015, 12, 14, 14, 24),
		type : 'box',
		className : 'magenta'
	} ]);

	// create visualization
	var container = document.getElementById('visualization');
	var options = {
		// option groupOrder can be a property name or a sort function
		// the sort function must compare two groups and return a value
		//     > 0 when a > b
		//     < 0 when a < b
		//       0 when a == b
		groupOrder : function(a, b) {
			return a.value - b.value;
		}
	};

	var timeline = new vis.Timeline(container);
	timeline.setOptions(options);
	timeline.setGroups(groups);
	timeline.setItems(items);

};

function displayBp(){
	$('#bloodPressure').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Blodd pressure'
        },
        xAxis: {
            type: 'datetime'
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
        		name:'Systolic',
            data: [
                [Date.UTC(2013,5,2,12,5), 108],
                [Date.UTC(2013,5,2,12,10), 120],
                [Date.UTC(2013,5,2,12,15), 135],
                [Date.UTC(2013,5,2,12,26), 142],
                [Date.UTC(2013,5,2,12,34), 135],
                [Date.UTC(2013,5,2,12,40), 128],
                [Date.UTC(2013,5,2,12,48), 126],
                [Date.UTC(2013,5,2,12,52), 156],
                [Date.UTC(2013,5,2,12,58), 160],
                [Date.UTC(2013,5,2,13,5), 150],
                [Date.UTC(2013,5,2,13,17), 120],
                [Date.UTC(2013,5,2,13,29), 130],
                [Date.UTC(2013,5,2,13,40), 118],
                [Date.UTC(2013,5,2,13,48), 124],
                [Date.UTC(2013,5,2,14,02), 130],
                [Date.UTC(2013,5,2,14,20), 126],
                [Date.UTC(2013,5,2,14,35), 135]
            ]
        },{
        		name:'Diastolic',
            data: [
                 [Date.UTC(2013,5,2,12,5), 58],
                [Date.UTC(2013,5,2,12,10), 60],
                [Date.UTC(2013,5,2,12,15), 85],
                [Date.UTC(2013,5,2,12,26), 82],
                [Date.UTC(2013,5,2,12,34), 95],
                [Date.UTC(2013,5,2,12,40), 88],
                [Date.UTC(2013,5,2,12,48), 76],
                [Date.UTC(2013,5,2,12,52), 106],
                [Date.UTC(2013,5,2,12,58), 108],
                [Date.UTC(2013,5,2,13,5), 90],
                [Date.UTC(2013,5,2,13,17), 80],
                [Date.UTC(2013,5,2,13,29), 72],
                [Date.UTC(2013,5,2,13,40), 68],
                [Date.UTC(2013,5,2,13,48), 58],
                [Date.UTC(2013,5,2,14,02), 40],
                [Date.UTC(2013,5,2,14,20), 66],
                [Date.UTC(2013,5,2,14,35), 75]
            ]
        }]
    });
};