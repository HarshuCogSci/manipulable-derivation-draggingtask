/*************************************/
//Data Log

function log_to_server(data_){
    let data_to_log = { 'data': JSON.stringify({ 'data': data_ }), 'name': name_ };

    $.ajax({
        url: '/log',
        data: data_to_log,
        type: 'POST',
        success: function(response){ console.log(response); },
        error: function(error){ console.log(error); }
    })
}

/*************************************/
//Data Log

// Data Log Event
$('body').on('data_log_event', function(event){
    log_to_server(event.event_data);
})

/*************************************/
