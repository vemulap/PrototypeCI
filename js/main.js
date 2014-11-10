
$('.input-group.date').datepicker({
    keyboardNavigation: false
});


function format ( d ) {
    return '<strong>File version: </strong>' + d.file_version + '<br>' + '<strong>File Size: </strong>' + d.file_size + '<br>' +
        '<strong>Total Records: </strong>' + d.no_records + '<br>' + '<strong>Response: </strong>' + d.response + '<br>' + '<strong>Response Status: </strong>' + d.response_status + '<br>' +
        '<strong>File Action: </strong>' + d.file_action;
}

var dataSet = [
    {
        "DT_RowId": "row_5",
        "provider_name": "Super Duper Co.",
        "file_name": "super_duper.xml",
        "status": "Inprogress",
        "start_date": "28th Nov 08",
        "file_path" : "/dummy.xml",
        "file_version" : "version1",
        "file_size" : '1GB',
        "no_records" : 1000,
        "response" : 'Accepted',
        "response_status" : 'Sent',
        "file_action" : 'TBD',
        "feed_status" : 'Inactive'

    },
    {
        "DT_RowId": "row_25",
        "provider_name": "Super Duper Co.",
        "file_name": "super_duper.xml",
        "status": "Completed",
        "start_date": "9th Oct 09",
        "file_path" : "/dummy.xml",
        "file_version" : "version1",
        "file_size" : '1GB',
        "no_records" : 1000,
        "response" : 'Accepted',
        "response_status" : 'Sent',
        "file_action" : 'TBD',
        "feed_status" : 'Inactive'
    },
    {
        "DT_RowId": "row_3",
        "provider_name": "kwikee",
        "file_name": "kwikee.xml",
        "status": "Errors",
        "start_date": "12th Jan 09",
        "file_path" : "/dummy.xml",
        "file_version" : "version1",
        "file_size" : '1GB',
        "no_records" : 1000,
        "response" : 'Accepted',
        "response_status" : 'Sent',
        "file_action" : 'TBD',
        "feed_status" : 'Inactive'
    },
    {
        "DT_RowId": "row_19",
        "provider_name": "kwikee",
        "file_name": "kwikee.xml",
       "status": "Errors",
        "start_date": "13th Oct 12",
        "file_path" : "/dummy.xml",
        "file_version" : "version1",
        "file_size" : '1GB',
        "no_records" : 1000,
        "response" : 'Accepted',
        "response_status" : 'Sent',
        "file_action" : 'TBD',
        "feed_status" : 'Inactive'
},
{
    "DT_RowId": "row_28",
    "provider_name": "kwikee",
    "file_name": "kwikee.xml",
    "status": "Completed",
    "start_date": "7th Jun 11",
    "file_path" : "/dummy.xml",
    "file_version" : "version1",
    "file_size" : '1GB',
    "no_records" : 1000,
    "response" : 'Accepted',
    "response_status" : 'Sent',
    "file_action" : 'TBD',
    "feed_status" : 'Inactive'
},
{
    "DT_RowId": "row_6",
    "provider_name": "kwikee",
    "file_name": "kwikee.xml",
    "status": "Completed",
    "start_date": "2nd Dec 12",
    "file_path" : "/dummy.xml",
    "file_version" : "version1",
    "file_size" : '1GB',
    "no_records" : 1000,
    "response" : 'Accepted',
    "response_status" : 'Sent',
    "file_action" : 'TBD',
    "feed_status" : 'Inactive'
},
{
    "DT_RowId": "row_43",
    "provider_name": "kwikee",
    "file_name": "kwikee.xml",
    "status": "Completed",
    "start_date": "3rd May 11",
    "file_path" : "/dummy.xml",
    "file_version" : "version1",
    "file_size" : '1GB',
    "no_records" : 1000,
    "response" : 'Accepted',
    "response_status" : 'Sent',
    "file_action" : 'TBD',
    "feed_status" : 'Inactive'
},
{
    "DT_RowId": "row_23",
    "provider_name": "kwikee",
    "file_name": "kwikee.xml",
    "status": "Completed",
    "start_date": "12th Dec 11",
    "file_path" : "/dummy.xml",
    "file_version" : "version1",
    "file_size" : '1GB',
    "no_records" : 1000,
    "response" : 'Accepted',
    "response_status" : 'Sent',
    "file_action" : 'TBD',
    "feed_status" : 'Inactive'
},
{
    "DT_RowId": "row_51",
    "provider_name": "kwikee",
    "file_name": "kwikee.xml",
    "status": "Inprogress",
    "start_date": "6th Dec 11",
    "file_path" : "/dummy.xml",
    "file_version" : "version1",
    "file_size" : '1GB',
    "no_records" : 1000,
    "response" : 'Accepted',
    "response_status" : 'Sent',
    "file_action" : 'TBD',
    "feed_status" : 'Inactive'
},
{
    "DT_RowId": "row_4",
    "provider_name": "kwikee",
    "file_name": "kwikee.xml",
    "status": "Inprogress",
    "start_date": "29th Mar 12",
    "file_path" : "/dummy.xml",
    "file_version" : "version1",
    "file_size" : '1GB',
    "no_records" : 1000,
    "response" : 'Accepted',
    "response_status" : 'Sent',
    "file_action" : 'TBD',
    "feed_status" : 'Inactive'
},
{
    "DT_RowId": "row_91",
    "provider_name": "kwikee",
    "file_name": "kwikee.xml",
    "status": "Inprogress",
    "start_date": "29th Mar 12",
    "file_path" : "/dummy.xml",
    "file_version" : "version1",
    "file_size" : '1GB',
    "no_records" : 1000,
    "response" : 'Accepted',
    "response_status" : 'Sent',
    "file_action" : 'TBD',
    "feed_status" : 'Inactive'
},{
    "DT_RowId": "row_101",
        "provider_name": "kwikee",
        "file_name": "kwikee.xml",
        "status": "Inprogress",
        "start_date": "29th Mar 12",
        "file_path" : "/dummy.xml",
        "file_version" : "version1",
        "file_size" : '1GB',
        "no_records" : 1000,
        "response" : 'Accepted',
        "response_status" : 'Sent',
        "file_action" : 'TBD',
        "feed_status" : 'Inactive'
},{
    "DT_RowId": "row_102",
        "provider_name": "kwikee",
        "file_name": "kwikee.xml",
        "status": "Completed",
        "start_date": "29th Mar 12",
        "salary": "$433,060",
        "file_path" : "/dummy.xml",
        "file_version" : "version1",
        "file_size" : '1GB',
        "no_records" : 1000,
        "response" : 'Accepted',
        "response_status" : 'Sent',
        "file_action" : 'TBD',
        "feed_status" : 'Inactive'
},{
    "DT_RowId": "row_103",
        "provider_name": "kwikee",
        "file_name": "kwikee.xml",
        "status": "Completed",
        "start_date": "29th Mar 12",
        "file_path" : "/dummy.xml",
        "file_version" : "version1",
        "file_size" : '1GB',
        "no_records" : 1000,
        "response" : 'Accepted',
        "response_status" : 'Sent',
        "file_action" : 'TBD',
        "feed_status" : 'Inactive'
},{
    "DT_RowId": "row_104",
        "provider_name": "kwikee",
        "file_name": "kwikee.xml",
        "status": "Errors",
        "start_date": "29th Mar 12",
       "file_path" : "/dummy.xml" ,
        "file_version" : "version1",
        "file_size" : '1GB',
        "no_records" : 1000,
        "response" : 'Accepted',
        "response_status" : 'Sent',
        "file_action" : 'TBD',
        "feed_status" : 'Inactive'
},

];


$(document).ready(function() {
  //  $('#demo').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>' );

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