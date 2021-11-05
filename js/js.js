$(document).ready(function() {
    var table = $('#table-id').DataTable( {
        "ajax": "http://192.168.18.226:8001/items/order?fields=customer_id.customer_id,customer_id.customer_email,customer_id.customer_name,ticket_id.ticket_id,ticket_id.ticket_type,ticket_id.ticket_x_session.session_id.,ticket_id.ticket_x_day.day_id.,invoice_id.invoice_status,invoice_id.customer_id.customer_email&filter[invoice_id][invoice_status]=1",
        "bInfo" : true,
        "columns": [
                { data: "customer_id.customer_name"},
                { data: "customer_id.customer_id"},
                { data: null}
            ],
            "pagingType":"simple_numbers",
          language: {
                sLengthMenu:"_MENU_",
              search: '', searchPlaceholder: "Participant ID/Link" ,
              oPaginate: {
                  sNext: ' <button class="px-4 py-2 my-2 text-white bg-blue-500 rounded-full hover:bg-gray-700 hover:text-black" > > <button class="sr-only ">(current)</button>',
                  sPrevious: ' <button class="px-4 py-2 my-2 text-white bg-blue-500 rounded-full hover:bg-gray-700 hover:text-black" > < <button class="sr-only ">(current)</button>',
   }
   }  ,

        "columnDefs": [ {
        "targets": -1,
        "data": null,
        "defaultContent": "<a href='DashPart_Detail.html'><button class='bg-blue-500 hover:bg-gray-700 text-white font-bold px-3 py-1 md:py-2 md:px-4 rounded-full my-2'>Detail</button></a>"
    } ]
} );

$('#table-id tbody').on( 'click', 'button', function () {
    var data = table.row( $(this).parents('tr') ).data();
    } );
} );