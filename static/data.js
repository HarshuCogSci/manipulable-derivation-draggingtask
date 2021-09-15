/*************************************/
//Data Log

function log_to_server(){
    let data_to_log = { 'data': JSON.stringify({ 'data': data_log.splice(0)}) };

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

let data_log = [], data_log_archive = [];

// Data Log Event
$('body').on('data_log_event', function(event){
    data_log.push(event.event_data);
    log_to_server();
})

/*************************************/
