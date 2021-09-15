d3.select("#button_next").on("click",function(){
    var person = prompt("Please enter your name","");
    if (person != null & person != "") {
        // window.open("2_DraggableImages.html","_blank" );
        window.open("2_DraggableImages","_blank" );

        let temp_data_log = {'event_type':'participant-name', 'name':person};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log }); 
    }

      
  })
