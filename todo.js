$(document).ready(function(){
   
        
   
    $("#b_input").click(function(){
        
        var toDo = $("#input").val();
        
        var item = "<li id ='item_delete'  class='list-group-item d-flex justify-content-between align-items-center'>"+toDo+"<button id ='b_delete'  class='btn'><i class='fa fa-trash'></i></button> </li>";
        $("#list").append(item);
    });


    $(document).on('click', '#b_delete', function() 
    {
            $(this).parent().remove(); 
    });





});


