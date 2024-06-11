$(document).ready(function(){

    let isBurger = false;
    $('#burger').click(function(){
        if(isBurger){
            isBurger = false;
            $('.navLinks').fadeOut("slow");
            $('.navLinks').css('display', 'none');
        }
        else{
            isBurger = true;
            $('.navLinks').fadeIn("slow");
            $('.navLinks').css('display', 'flex');
        }
    });

    
});