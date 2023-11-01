window.onload = function(){
    document.querySelector('.cont_modal').className = "cont_modal";
    document.querySelector('.cont_modal0').className = "cont_modal0";  
    document.querySelector('.cont_modal1').className = "cont_modal1";  
}
var c = 0;
var c0 = 0;
var c1 = 0;
function open_close(){
    if(c % 2 == 0){    
        document.querySelector('.cont_modal').className = "cont_modal cont_modal_active"; 
        c++;
    }else {
        document.querySelector('.cont_modal').className = "cont_modal"; 
     c++;    
    }  
}
function open_close0(){
    if(c0 % 2 == 0){    
        document.querySelector('.cont_modal0').className = "cont_modal0 cont_modal_active0"; 
        c0++;
    }else {
        document.querySelector('.cont_modal0').className = "cont_modal0"; 
     c0++;    
    }  
}
function open_close1(){
    if(c1 % 2 == 0){    
        document.querySelector('.cont_modal1').className = "cont_modal1 cont_modal_active1"; 
        c1++;
    }else {
        document.querySelector('.cont_modal1').className = "cont_modal1"; 
     c1++;    
    }  
}
