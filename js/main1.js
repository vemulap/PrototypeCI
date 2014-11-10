
$('.input-group.date').datepicker({
    keyboardNavigation: false
});


function format ( d ) {
    return 'Full name: '+d.first_name+' '+d.last_name+'<br>'+
        'Salary: '+d.salary+'<br>'+
        'The child row can contain any data you wish, including links, images, inner tables etc.';
}



var dataSet = [
    {
        "DT_RowId": "row_5",
        "first_name": "Airi",
        "last_name": "Satou",
        "position": "Accountant",
        "office": "Tokyo",
        "start_date": "28th Nov 08",
        "salary": "$162,700"
    },
    {
        "DT_RowId": "row_25",
        "first_name": "Angelica",
        "last_name": "Ramos",
        "position": "Chief Executive Officer (CEO)",
        "office": "London",
        "start_date": "9th Oct 09",
        "salary": "$1,200,000"
    },
    {
        "DT_RowId": "row_3",
        "first_name": "Ashton",
        "last_name": "Cox",
        "position": "Junior Technical Author",
        "office": "San Francisco",
        "start_date": "12th Jan 09",
        "salary": "$86,000"
    },
    {
        "DT_RowId": "row_19",
        "first_name": "Bradley",
        "last_name": "Greer",
        "position": "Software Engineer",
        "office": "London",
        "start_date": "13th Oct 12",
        "salary": "$132,000"
    },
    {
        "DT_RowId": "row_28",
        "first_name": "Brenden",
        "last_name": "Wagner",
        "position": "Software Engineer",
        "office": "San Francisco",
        "start_date": "7th Jun 11",
        "salary": "$206,850"
    },
    {
        "DT_RowId": "row_6",
        "first_name": "Brielle",
        "last_name": "Williamson",
        "position": "Integration Specialist",
        "office": "New York",
        "start_date": "2nd Dec 12",
        "salary": "$372,000"
    },
    {
        "DT_RowId": "row_43",
        "first_name": "Bruno",
        "last_name": "Nash",
        "position": "Software Engineer",
        "office": "London",
        "start_date": "3rd May 11",
        "salary": "$163,500"
    },
    {
        "DT_RowId": "row_23",
        "first_name": "Caesar",
        "last_name": "Vance",
        "position": "Pre-Sales Support",
        "office": "New York",
        "start_date": "12th Dec 11",
        "salary": "$106,450"
    },
    {
        "DT_RowId": "row_51",
        "first_name": "Cara",
        "last_name": "Stevens",
        "position": "Sales Assistant",
        "office": "New York",
        "start_date": "6th Dec 11",
        "salary": "$145,600"
    },
    {
        "DT_RowId": "row_4",
        "first_name": "Cedric",
        "last_name": "Kelly",
        "position": "Senior Javascript Developer",
        "office": "Edinburgh",
        "start_date": "29th Mar 12",
        "salary": "$433,060"
    },
    {
        "DT_RowId": "row_91",
        "first_name": "Cedric",
        "last_name": "Kelly",
        "position": "Senior Javascript Developer",
        "office": "Edinburgh",
        "start_date": "29th Mar 12",
        "salary": "$433,060"
    },{
        "DT_RowId": "row_101",
        "first_name": "Cedric",
        "last_name": "Kelly",
        "position": "Senior Javascript Developer",
        "office": "Edinburgh",
        "start_date": "29th Mar 12",
        "salary": "$433,060"
    },{
        "DT_RowId": "row_102",
        "first_name": "Cedric",
        "last_name": "Kelly",
        "position": "Senior Javascript Developer",
        "office": "Edinburgh",
        "start_date": "29th Mar 12",
        "salary": "$433,060"
    },{
        "DT_RowId": "row_103",
        "first_name": "Cedric",
        "last_name": "Kelly",
        "position": "Senior Javascript Developer",
        "office": "Edinburgh",
        "start_date": "29th Mar 12",
        "salary": "$433,060"
    },{
        "DT_RowId": "row_104",
        "first_name": "Cedric",
        "last_name": "Kelly",
        "position": "Senior Javascript Developer",
        "office": "Edinburgh",
        "start_date": "29th Mar 12",
        "salary": "$433,060"
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
            { "data": "first_name" },
            { "data": "file_name" },
            { "data": "position" },
            { "data": "office" }
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