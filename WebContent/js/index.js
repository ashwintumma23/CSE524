/**
 * Created by Nikhil on 11/12/2015.
 */
$(document)
    .ready(
        function () {
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



            $('#displayName').text(sessionStorage.getItem("name"));
            $('#displayDob').text(sessionStorage.getItem("dob"));
            var htmlToAdd = "";
            var gen = sessionStorage.getItem("gender");
            if(gen=="male"){
                htmlToAdd =  "<i class='fa fa-male fa-lg'></i> Male";
            }else{
                htmlToAdd =  "<i class='fa fa-female fa-lg'></i> Female";
            }
            $('#displayGender').html(htmlToAdd);
            $('#displayWeight').text(sessionStorage.getItem("weight")+" Kgs.");
            var level = sessionStorage.getItem("emergencyLevel");
            if(level == "Level 1"){
                $('#displayLevel').addClass("label label-danger");
            }else if(level == "Level 2"){
                $('#displayLevel').addClass("label label-warning");
            }else{
                $('#displayLevel').addClass("label label-info");
            }
            $('#displayLevel').text(level);
            tabs = $('ul.tabNavigate li a');

            tabs.bind('click',function(event){
                var $anchor = $(this);
                $("#primSurvey").hide();
                $("#secondarySurvey").hide();
                $("#medications").hide();
                $("#vitals").hide();
                $("#ivfluids").hide();
                event.preventDefault();
                $($anchor.attr('href')).show();
                event.preventDefault();
            });
        });