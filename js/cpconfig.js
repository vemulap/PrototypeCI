/**
 * Created by pvemula on 11/12/14.
 */


$( document ).ready(function() {

    $(".btn-create").on('click', function (event) {


    var formData = {


        'cpName'                 : $('input[name=cpName]').val(),
        'feedFormat'             : $('.feed-format').val(),
        'superheroAlias'         : $('input[name=adapter]').val(),


        'dataDestination'        : $('.data-destination').val(),

        'dataDestination' : { 'cpName' : $('input[name=cpName]').val() }
    };

        console.log(JSON.stringify(formData));


    });








        $('#option1, #option2, #option3, #option4, #option5, #option6, #option7, #option8').hide();

        $('#dataDestination').change(function() {
            $('#option1, #option2, #option3, #option4, #option5, #option6, #option7, #option8').hide();
            $('#option' + $(this).find('option:selected').attr('id')).show();

        });
















});
