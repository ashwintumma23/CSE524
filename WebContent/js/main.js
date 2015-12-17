/**
 * Created by Nikhil on 11/11/2015.
 */
$(document)
    .ready(
        function() {
            $('#arrivalTimeDatePicker')
                .datetimepicker({
                    sideBySide: true
                });
            $('#dobDatePicker')
                .datetimepicker({
                    format: 'MM/DD/YYYY'
                });
            $("#arrivalMode").imagepicker();
            $("#create").on('click', function(event) {
                sessionStorage.setItem("name", $("#name").val());
                sessionStorage.setItem("dob", $("#dob").val());
                sessionStorage.setItem("gender", $("#gender input:radio:checked").val());
                sessionStorage.setItem("arrivalTime", $("#arrivalTime").val());
                sessionStorage.setItem("arrivalMode", $("#arrivalMode").val());
                sessionStorage.setItem("weight", $("#weight").val());
                sessionStorage.setItem("emergencyLevel", $("#emergenceyLevel input:radio:checked").val());
                event.preventDefault();
                $('#newEMREntry').modal('toggle');
                $('#redirect').click();
                window.location.href = "index.html";
            });
        });