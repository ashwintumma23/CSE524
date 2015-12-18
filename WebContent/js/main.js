/**
 * Created by Nikhil on 11/11/2015.
 */
$(document)
		.ready(
				function() {
					$('#arrivalTimeDatePicker').datetimepicker({
						sideBySide : true
					});
					$('#dobDatePicker').datetimepicker({
						format : 'MM/DD/YYYY'
					});
					$('#pschyosocialTimeDatePicker').datetimepicker({
						sideBySide : true
					});
					$('#injuryTimeDatePicker').datetimepicker({
						sideBySide : true
					});

					$('#mechanism-of-injury').multiselect();
					$('#was-victim').multiselect();
					$('#victim-wearing').multiselect();

					$('#timeUnknown')
							.click(
									function() {
										if ($(this).is(':checked')) {
											document
													.getElementById("injuryTime").disabled = true;
											document.getElementById("injuryTime").value = "";
										} else {
											document
													.getElementById("injuryTime").disabled = false;
										}
									});

					function allmechanismdisplaynone() {
						document
								.getElementById("specifyOtherMechanismOfInjury").style.display = "none";
						document.getElementById("pedestrianvsother").style.display = "none";
						document.getElementById("autovsother").style.display = "none";
						document.getElementById("motorcyclevsother").style.display = "none";
						document.getElementById("bicyclevsother").style.display = "none";
					}

					$('#was-victim')
							.change(
									function() {
										var str = $(this).val();
										if (str.indexOf("Other") >= 0)
											document
													.getElementById("specifyOtherVictim").style.display = "block";
										else
											document
													.getElementById("specifyOtherVictim").style.display = "none";

									});

					$('#victim-wearing')
							.change(
									function() {
										var str = $(this).val();
										if (str.indexOf("Other") >= 0)
											document
													.getElementById("victimWaeringOther").style.display = "block";
										else
											document
													.getElementById("victimWaeringOther").style.display = "none";

									});

					$('#mechanism-of-injury')
							.change(
									function() {
										var stringinj = $(this).val();
										allmechanismdisplaynone();
										if (stringinj.indexOf("Other") >= 0)
											document
													.getElementById("specifyOtherMechanismOfInjury").style.display = "block";
										else if (stringinj
												.indexOf("Pedestrian Vs.") >= 0)
											document
													.getElementById("pedestrianvsother").style.display = "block";
										else if (stringinj.indexOf("Auto Vs.") >= 0)
											document
													.getElementById("autovsother").style.display = "block";
										else if (stringinj
												.indexOf("Motorcycle Vs.") >= 0)
											document
													.getElementById("motorcyclevsother").style.display = "block";
										else if (stringinj
												.indexOf("Bicycle Vs.") >= 0)
											document
													.getElementById("bicyclevsother").style.display = "block";
									});

					$("#arrivalMode").imagepicker();
					$("#create").on(
							'click',
							function(event) {
								sessionStorage
										.setItem("name", $("#name").val());
								sessionStorage.setItem("dob", $("#dob").val());
								sessionStorage.setItem("gender", $(
										"#gender input:radio:checked").val());
								sessionStorage.setItem("arrivalTime", $(
										"#arrivalTime").val());
								sessionStorage.setItem("arrivalMode", $(
										"#arrivalMode").val());
								sessionStorage.setItem("weight", $("#weight")
										.val());
								sessionStorage.setItem("emergencyLevel", $(
										"#emergenceyLevel input:radio:checked")
										.val());
								event.preventDefault();
								$('#newEMREntry').modal('toggle');
								$('#redirect').click();
								window.location.href = "index.html";
							});
				});