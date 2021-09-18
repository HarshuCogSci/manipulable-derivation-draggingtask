
/********************************/
//Initial data

var name_;

$('document').ready(function(){
    var person = prompt("Please enter your name","");
    if (person != null & person != "") {

        let temp_data_log = {'event_type':'participant-name', 'name':person};
        name_ = person;
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log }); 
    }
    else{window.open("2_DraggableImages","_self" );}

    // img_ids = ['1','1F','2','2F','3','3F','4','4F','5','5F','6','6F','B1','B2','B3']
    img_ids = ['1','2','2F','3','3F','4','5','5F','6','6F','B1','B2']
    for(i=0;i<img_ids.length;i++){
        top_img = d3.select("#img_" + img_ids[i]).style("top")
        left_img = d3.select("#img_" + img_ids[i]).style("left")
        time = Date.now()/1000
        let temp_data_log = {'event_type':'initial-positions', 'img_id':('img_' + img_ids[i]), 'loc_top':top_img, 'loc_left':left_img, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });    
    }

})

/********************************/
//Images Drag
d3.select("#img_1").call(d3.drag()
    .on("start",function(event){
                d3.select(this).style("border-width",0+"px")
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_s = d3.select(this).style("top")
                left_img_s = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-start-order', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
                else{
                    let temp_data_log = {'event_type':'drag-start-playground', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
       
                })

    .on("drag",function(event){
                let i = event.x
                let j = event.y
                d3.select(this)
                .style("top",j -75  + "px")
                .style("left",i -180  +  "px")
    })
    .on("end",function(event){
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_e = d3.select(this).style("top")
                left_img_e = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-end-order', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
                }

                else{
                    let temp_data_log = {'event_type':'drag-end-playground', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
            
                }
                d3.select(this).style("border-width",0+"px")
                
    }))


d3.select("#img_2").call(d3.drag()
    .on("start",function(event){
                d3.select(this).style("border-width",0+"px")
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_s = d3.select(this).style("top")
                left_img_s = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-start-order', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
                else{
                    let temp_data_log = {'event_type':'drag-start-playground', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
       
                })

    .on("drag",function(event){
                let i = event.x
                let j = event.y
                d3.select(this)
                .style("top",j -75  + "px")
                .style("left",i -180  +  "px")
    })
    .on("end",function(event){
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_e = d3.select(this).style("top")
                left_img_e = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-end-order', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
                }

                else{
                    let temp_data_log = {'event_type':'drag-end-playground', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
            
                }
                d3.select(this).style("border-width",0+"px")
                
    }))

d3.select("#img_2F").call(d3.drag()
    .on("start",function(event){
                d3.select(this).style("border-width",0+"px")
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_s = d3.select(this).style("top")
                left_img_s = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-start-order', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
                else{
                    let temp_data_log = {'event_type':'drag-start-playground', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
       
                })

    .on("drag",function(event){
                let i = event.x
                let j = event.y
                d3.select(this)
                .style("top",j -75  + "px")
                .style("left",i -180  +  "px")
    })
    .on("end",function(event){
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_e = d3.select(this).style("top")
                left_img_e = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-end-order', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
                }

                else{
                    let temp_data_log = {'event_type':'drag-end-playground', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
            
                }
                d3.select(this).style("border-width",0+"px")
                
    }))

d3.select("#img_3").call(d3.drag()
    .on("start",function(event){
                d3.select(this).style("border-width",0+"px")
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_s = d3.select(this).style("top")
                left_img_s = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-start-order', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
                else{
                    let temp_data_log = {'event_type':'drag-start-playground', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
       
                })

    .on("drag",function(event){
                let i = event.x
                let j = event.y
                d3.select(this)
                .style("top",j -75  + "px")
                .style("left",i -180  +  "px")
    })
    .on("end",function(event){
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_e = d3.select(this).style("top")
                left_img_e = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-end-order', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
                }

                else{
                    let temp_data_log = {'event_type':'drag-end-playground', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
            
                }
                d3.select(this).style("border-width",0+"px")
                
    }))

d3.select("#img_3F").call(d3.drag()
    .on("start",function(event){
                d3.select(this).style("border-width",0+"px")
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_s = d3.select(this).style("top")
                left_img_s = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-start-order', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
                else{
                    let temp_data_log = {'event_type':'drag-start-playground', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
       
                })

    .on("drag",function(event){
                let i = event.x
                let j = event.y
                d3.select(this)
                .style("top",j -75  + "px")
                .style("left",i -180  +  "px")
    })
    .on("end",function(event){
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_e = d3.select(this).style("top")
                left_img_e = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-end-order', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
                }

                else{
                    let temp_data_log = {'event_type':'drag-end-playground', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
            
                }
                d3.select(this).style("border-width",0+"px")
                
    }))

d3.select("#img_4").call(d3.drag()
    .on("start",function(event){
                d3.select(this).style("border-width",0+"px")
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_s = d3.select(this).style("top")
                left_img_s = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-start-order', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
                else{
                    let temp_data_log = {'event_type':'drag-start-playground', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
       
                })

    .on("drag",function(event){
                let i = event.x
                let j = event.y
                d3.select(this)
                .style("top",j -75  + "px")
                .style("left",i -180  +  "px")
    })
    .on("end",function(event){
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_e = d3.select(this).style("top")
                left_img_e = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-end-order', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
                }

                else{
                    let temp_data_log = {'event_type':'drag-end-playground', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
            
                }
                d3.select(this).style("border-width",0+"px")
                
    }))


d3.select("#img_5").call(d3.drag()
    .on("start",function(event){
                d3.select(this).style("border-width",0+"px")
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_s = d3.select(this).style("top")
                left_img_s = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-start-order', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
                else{
                    let temp_data_log = {'event_type':'drag-start-playground', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
       
                })

    .on("drag",function(event){
                let i = event.x
                let j = event.y
                d3.select(this)
                .style("top",j -75  + "px")
                .style("left",i -180  +  "px")
    })
    .on("end",function(event){
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_e = d3.select(this).style("top")
                left_img_e = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-end-order', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
                }

                else{
                    let temp_data_log = {'event_type':'drag-end-playground', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
            
                }
                d3.select(this).style("border-width",0+"px")
                
    }))

d3.select("#img_5F").call(d3.drag()
    .on("start",function(event){
                d3.select(this).style("border-width",0+"px")
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_s = d3.select(this).style("top")
                left_img_s = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-start-order', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
                else{
                    let temp_data_log = {'event_type':'drag-start-playground', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
       
                })

    .on("drag",function(event){
                let i = event.x
                let j = event.y
                d3.select(this)
                .style("top",j -75  + "px")
                .style("left",i -180  +  "px")
    })
    .on("end",function(event){
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_e = d3.select(this).style("top")
                left_img_e = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-end-order', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
                }

                else{
                    let temp_data_log = {'event_type':'drag-end-playground', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
            
                }
                d3.select(this).style("border-width",0+"px")
                
    }))

d3.select("#img_6").call(d3.drag()
    .on("start",function(event){
                d3.select(this).style("border-width",0+"px")
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_s = d3.select(this).style("top")
                left_img_s = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-start-order', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
                else{
                    let temp_data_log = {'event_type':'drag-start-playground', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
       
                })

    .on("drag",function(event){
                let i = event.x
                let j = event.y
                d3.select(this)
                .style("top",j -75  + "px")
                .style("left",i -180  +  "px")
    })
    .on("end",function(event){
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_e = d3.select(this).style("top")
                left_img_e = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-end-order', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
                }

                else{
                    let temp_data_log = {'event_type':'drag-end-playground', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
            
                }
                d3.select(this).style("border-width",0+"px")
                
    }))

d3.select("#img_6F").call(d3.drag()
    .on("start",function(event){
                d3.select(this).style("border-width",0+"px")
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_s = d3.select(this).style("top")
                left_img_s = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-start-order', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
                else{
                    let temp_data_log = {'event_type':'drag-start-playground', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
       
                })

    .on("drag",function(event){
                let i = event.x
                let j = event.y
                d3.select(this)
                .style("top",j -75  + "px")
                .style("left",i -180  +  "px")
    })
    .on("end",function(event){
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_e = d3.select(this).style("top")
                left_img_e = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-end-order', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
                }

                else{
                    let temp_data_log = {'event_type':'drag-end-playground', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
            
                }
                d3.select(this).style("border-width",0+"px")
                
    }))

d3.select("#img_B1").call(d3.drag()
    .on("start",function(event){
                d3.select(this).style("border-width",0+"px")
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_s = d3.select(this).style("top")
                left_img_s = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-start-order', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
                else{
                    let temp_data_log = {'event_type':'drag-start-playground', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
       
                })

    .on("drag",function(event){
                let i = event.x
                let j = event.y
                d3.select(this)
                .style("top",j -75  + "px")
                .style("left",i -180  +  "px")
    })
    .on("end",function(event){
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_e = d3.select(this).style("top")
                left_img_e = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-end-order', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
                }

                else{
                    let temp_data_log = {'event_type':'drag-end-playground', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
            
                }
                d3.select(this).style("border-width",0+"px")
                
    }))

d3.select("#img_B2").call(d3.drag()
    .on("start",function(event){
                d3.select(this).style("border-width",0+"px")
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_s = d3.select(this).style("top")
                left_img_s = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-start-order', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
                else{
                    let temp_data_log = {'event_type':'drag-start-playground', 'img_id':image_id, 'loc_top':top_img_s, 'loc_left':left_img_s, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });}
       
                })

    .on("drag",function(event){
                let i = event.x
                let j = event.y
                d3.select(this)
                .style("top",j -75  + "px")
                .style("left",i -180  +  "px")
    })
    .on("end",function(event){
                let i = event.x
                let j = event.y
                image_id = d3.select(this).property("id")
                top_img_e = d3.select(this).style("top")
                left_img_e = d3.select(this).style("left")
                time = Date.now()/1000;
                if(i>1400){
                    let temp_data_log = {'event_type':'drag-end-order', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
                }

                else{
                    let temp_data_log = {'event_type':'drag-end-playground', 'img_id':image_id, 'loc_top':top_img_e, 'loc_left':left_img_e, 'time':time};
                    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
            
                }
                d3.select(this).style("border-width",0+"px")
                
    }))


/*************************************/
//Images Mouseover and Mouseout

d3.select("#img_1").on("mouseover",function(){
    image_id = d3.select(this).property("id")
    top_img_over = d3.select(this).style("top")
    left_img_over = d3.select(this).style("left")
    time = Date.now()/1000;
    let temp_data_log = {'event_type':'mouseover', 'img_id':image_id, 'loc_top':top_img_over, 'loc_left':left_img_over, 'time':time};
    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})

d3.select("#img_1").on("mouseout",function(){
    image_id = d3.select(this).property("id")
    top_img_out = d3.select(this).style("top")
    left_img_out = d3.select(this).style("left")
    time = Date.now()/1000;
    let temp_data_log = {'event_type':'mouseout', 'img_id':image_id, 'loc_top':top_img_out, 'loc_left':left_img_out, 'time':time};
    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})

    
d3.select("#img_2").on("mouseover",function(){
            image_id = d3.select(this).property("id")
            top_img_over = d3.select(this).style("top")
            left_img_over = d3.select(this).style("left")
            time = Date.now()/1000;
            let temp_data_log = {'event_type':'mouseover', 'img_id':image_id, 'loc_top':top_img_over, 'loc_left':left_img_over, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
        
d3.select("#img_2").on("mouseout",function(){
            image_id = d3.select(this).property("id")
            top_img_out = d3.select(this).style("top")
            left_img_out = d3.select(this).style("left")
            time = Date.now()/1000;
            let temp_data_log = {'event_type':'mouseout', 'img_id':image_id, 'loc_top':top_img_out, 'loc_left':left_img_out, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
        
d3.select("#img_2F").on("mouseover",function(){
                image_id = d3.select(this).property("id")
                top_img_over = d3.select(this).style("top")
                left_img_over = d3.select(this).style("left")
                time = Date.now()/1000;
                let temp_data_log = {'event_type':'mouseover', 'img_id':image_id, 'loc_top':top_img_over, 'loc_left':left_img_over, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
            
d3.select("#img_2F").on("mouseout",function(){
                image_id = d3.select(this).property("id")
                top_img_out = d3.select(this).style("top")
                left_img_out = d3.select(this).style("left")
                time = Date.now()/1000;
                let temp_data_log = {'event_type':'mouseout', 'img_id':image_id, 'loc_top':top_img_out, 'loc_left':left_img_out, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
        
d3.select("#img_3").on("mouseover",function(){
    image_id = d3.select(this).property("id")
    top_img_over = d3.select(this).style("top")
    left_img_over = d3.select(this).style("left")
    time = Date.now()/1000;
    let temp_data_log = {'event_type':'mouseover', 'img_id':image_id, 'loc_top':top_img_over, 'loc_left':left_img_over, 'time':time};
    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})

d3.select("#img_3").on("mouseout",function(){
    image_id = d3.select(this).property("id")
    top_img_out = d3.select(this).style("top")
    left_img_out = d3.select(this).style("left")
    time = Date.now()/1000;
    let temp_data_log = {'event_type':'mouseout', 'img_id':image_id, 'loc_top':top_img_out, 'loc_left':left_img_out, 'time':time};
    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})

d3.select("#img_3F").on("mouseover",function(){
        image_id = d3.select(this).property("id")
        top_img_over = d3.select(this).style("top")
        left_img_over = d3.select(this).style("left")
        time = Date.now()/1000;
        let temp_data_log = {'event_type':'mouseover', 'img_id':image_id, 'loc_top':top_img_over, 'loc_left':left_img_over, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
    
d3.select("#img_3F").on("mouseout",function(){
        image_id = d3.select(this).property("id")
        top_img_out = d3.select(this).style("top")
        left_img_out = d3.select(this).style("left")
        time = Date.now()/1000;
        let temp_data_log = {'event_type':'mouseout', 'img_id':image_id, 'loc_top':top_img_out, 'loc_left':left_img_out, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
    
d3.select("#img_4").on("mouseover",function(){
            image_id = d3.select(this).property("id")
            top_img_over = d3.select(this).style("top")
            left_img_over = d3.select(this).style("left")
            time = Date.now()/1000;
            let temp_data_log = {'event_type':'mouseover', 'img_id':image_id, 'loc_top':top_img_over, 'loc_left':left_img_over, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
        
d3.select("#img_4").on("mouseout",function(){
            image_id = d3.select(this).property("id")
            top_img_out = d3.select(this).style("top")
            left_img_out = d3.select(this).style("left")
            time = Date.now()/1000;
            let temp_data_log = {'event_type':'mouseout', 'img_id':image_id, 'loc_top':top_img_out, 'loc_left':left_img_out, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
        

d3.select("#img_5").on("mouseover",function(){
    image_id = d3.select(this).property("id")
    top_img_over = d3.select(this).style("top")
    left_img_over = d3.select(this).style("left")
    time = Date.now()/1000;
    let temp_data_log = {'event_type':'mouseover', 'img_id':image_id, 'loc_top':top_img_over, 'loc_left':left_img_over, 'time':time};
    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})

d3.select("#img_5").on("mouseout",function(){
    image_id = d3.select(this).property("id")
    top_img_out = d3.select(this).style("top")
    left_img_out = d3.select(this).style("left")
    time = Date.now()/1000;
    let temp_data_log = {'event_type':'mouseout', 'img_id':image_id, 'loc_top':top_img_out, 'loc_left':left_img_out, 'time':time};
    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})

d3.select("#img_5F").on("mouseover",function(){
        image_id = d3.select(this).property("id")
        top_img_over = d3.select(this).style("top")
        left_img_over = d3.select(this).style("left")
        time = Date.now()/1000;
        let temp_data_log = {'event_type':'mouseover', 'img_id':image_id, 'loc_top':top_img_over, 'loc_left':left_img_over, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
    
d3.select("#img_5F").on("mouseout",function(){
        image_id = d3.select(this).property("id")
        top_img_out = d3.select(this).style("top")
        left_img_out = d3.select(this).style("left")
        time = Date.now()/1000;
        let temp_data_log = {'event_type':'mouseout', 'img_id':image_id, 'loc_top':top_img_out, 'loc_left':left_img_out, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
    
d3.select("#img_6").on("mouseover",function(){
            image_id = d3.select(this).property("id")
            top_img_over = d3.select(this).style("top")
            left_img_over = d3.select(this).style("left")
            time = Date.now()/1000;
            let temp_data_log = {'event_type':'mouseover', 'img_id':image_id, 'loc_top':top_img_over, 'loc_left':left_img_over, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
        
d3.select("#img_6").on("mouseout",function(){
            image_id = d3.select(this).property("id")
            top_img_out = d3.select(this).style("top")
            left_img_out = d3.select(this).style("left")
            time = Date.now()/1000;
            let temp_data_log = {'event_type':'mouseout', 'img_id':image_id, 'loc_top':top_img_out, 'loc_left':left_img_out, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
        
d3.select("#img_6F").on("mouseover",function(){
                image_id = d3.select(this).property("id")
                top_img_over = d3.select(this).style("top")
                left_img_over = d3.select(this).style("left")
                time = Date.now()/1000;
                let temp_data_log = {'event_type':'mouseover', 'img_id':image_id, 'loc_top':top_img_over, 'loc_left':left_img_over, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
            
d3.select("#img_6F").on("mouseout",function(){
                image_id = d3.select(this).property("id")
                top_img_out = d3.select(this).style("top")
                left_img_out = d3.select(this).style("left")
                time = Date.now()/1000;
                let temp_data_log = {'event_type':'mouseout', 'img_id':image_id, 'loc_top':top_img_out, 'loc_left':left_img_out, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
        
d3.select("#img_B1").on("mouseover",function(){
    image_id = d3.select(this).property("id")
    top_img_over = d3.select(this).style("top")
    left_img_over = d3.select(this).style("left")
    time = Date.now()/1000;
    let temp_data_log = {'event_type':'mouseover', 'img_id':image_id, 'loc_top':top_img_over, 'loc_left':left_img_over, 'time':time};
    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})

d3.select("#img_B1").on("mouseout",function(){
    image_id = d3.select(this).property("id")
    top_img_out = d3.select(this).style("top")
    left_img_out = d3.select(this).style("left")
    time = Date.now()/1000;
    let temp_data_log = {'event_type':'mouseout', 'img_id':image_id, 'loc_top':top_img_out, 'loc_left':left_img_out, 'time':time};
    $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})

d3.select("#img_B2").on("mouseover",function(){
        image_id = d3.select(this).property("id")
        top_img_over = d3.select(this).style("top")
        left_img_over = d3.select(this).style("left")
        time = Date.now()/1000;
        let temp_data_log = {'event_type':'mouseover', 'img_id':image_id, 'loc_top':top_img_over, 'loc_left':left_img_over, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
    
d3.select("#img_B2").on("mouseout",function(){
        image_id = d3.select(this).property("id")
        top_img_out = d3.select(this).style("top")
        left_img_out = d3.select(this).style("left")
        time = Date.now()/1000;
        let temp_data_log = {'event_type':'mouseout', 'img_id':image_id, 'loc_top':top_img_out, 'loc_left':left_img_out, 'time':time};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });})
    
        
/*************************************/

/*************************************/

//Finishing click
d3.select("#finish").on("click",function(){
    
    if (confirm("Are you sure you wish to record your response?")) {
        /*html2canvas(document.getElementById("screencapturediv")).then(function(canvas){
            let i = canvas.toDataURL("image/jpeg",0.9)
            let temp_data_log = {'screen-capture':i};
            $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
    
        }) */
        img_ids = ['1','2','2F','3','3F','4','5','5F','6','6F','B1','B2']
        for(i=0;i<img_ids.length;i++){
                top_img = d3.select("#img_" + img_ids[i]).style("top")
            left_img = d3.select("#img_" + img_ids[i]).style("left")
            time = Date.now()/1000
            let temp_data_log = {'event_type':'final-positions', 'img_id':('img_' + img_ids[i]), 'loc_top':top_img, 'loc_left':left_img, 'time':time};
            $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log });
            console.log(temp_data_log);
        }

        setTimeout(function(){ window.location.href = './3_Finish'; }, 3000);
      } 
})

/*************************************/

//Mouse coordinates console
d3.select("#overflow").on("click",function(event){
    let i = event.x
    let j = event.y
    console.log(i,j)

})

/*************************************/
//Data Log
// let data_log = [], data_log_archive = [];

//     // Data Log Event
//     $('body').on('data_log_event', function(event){
//         data_log.push(event.event_data);
//         data_log_archive.push(event.event_data);
//     })

/*************************************/

// console.log(data_log);
