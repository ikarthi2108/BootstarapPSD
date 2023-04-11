$(document).ready(function(){
    $('#myform').validate({
        rules:{
            pass:{
                required:true,
                pattern: /^[A-Za-z' ']+$/,
            },
            mbl:{
                required:true,
                pattern:/^[0-9]{10}$/,
            },
            mail:{
                required:true,
                email:true,
                pattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,  
            },
        },
        messages:{
            pass:{
                required:"Enter your Name",
                pattern:"Enter the valid Name",
            },
            mbl:{
                required:"Enter your Phone number",
                pattern:"Enter the valid number",
            },
            mail:{
                required:"enter your email",
                email:"enter valid email",
            },
        },
    });
});

