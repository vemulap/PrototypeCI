
$('.input-group.date').datepicker({
    keyboardNavigation: false
});


function format ( d ) {
    return '<strong>File version: </strong>' + d.file_version + '<br>' + '<strong>File Size: </strong>' + d.file_size + '<br>' +
        '<strong>Total Records: </strong>' + d.no_records + '<br>' + '<strong>Response: </strong>' + d.response + '<br>' + '<strong>Response Status: </strong>' + d.response_status + '<br>' +
        '<strong>File Action: </strong>' + d.file_action;
}



$.ajax({
    url: "http://10.65.231.39:8080/jadeservices/v1/audit/",
    type: "GET",

    contentType: 'application/json',
    success: function(resultData) {

        console.log(resultData);

    },

    error : function(jqXHR, textStatus, errorThrown) {
    },

    timeout: 120000
});









$(document).ready(function() {
  //  $('#demo').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>' );


    //var url = 'http://10.65.231.39:8080/jadeservices/v1/audit/';
    //
    //$.ajax({
    //    type: 'GET',
    //    url: url,
    //    contentType: "application/json",
    //    dataType: 'jsonp',
    //    success: function(json) {
    //        console.log('jg');
    //    },
    //    error: function(e) {
    //        console.log(e.message);
    //    }
    //});









    var dataSet = [];




    var dt = $('#example').DataTable( {
        "data": dataSet,
        "columns": [
            {
                "class":          "details-control",
                "orderable":      false,
                "data":           null,
                "defaultContent": ""
            },
            { "data": "provider_name" },
            { "data": "file_name" },
            { "data": "start_date" },
            { "data": "status" },
            {"data": "file_path"}
        ],
        "order": [[1, 'asc']]
    } );

    // Array to track the ids of the details displayed rows
    var detailRows = [];

    $('#example tbody').on( 'click', 'tr td:first-child', function () {
        var tr = $(this).closest('tr');
        var row = dt.row( tr );
        var idx = $.inArray( tr.attr('id'), detailRows );

        if ( row.child.isShown() ) {
            tr.removeClass( 'details' );
            row.child.hide();

            // Remove from the 'open' array
            detailRows.splice( idx, 1 );
        }
        else {
            tr.addClass( 'details' );
            row.child( format( row.data() ) ).show();

            // Add to the 'open' array
            if ( idx === -1 ) {
                detailRows.push( tr.attr('id') );
            }
        }
    } );

    // On each draw, loop over the `detailRows` array and show any child rows
    dt.on( 'draw', function () {
        $.each( detailRows, function ( i, id ) {
            $('#'+id+' td:first-child').trigger( 'click' );
        } );
    } );
} );