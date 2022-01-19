




var artboard= document.getElementById("art_board");
var art_height = artboard.clientHeight;
var art_width = artboard.clientWidth;
var previous_slide = 0;
togglecolour="black";



window.onload= preset;
window.onresize = preset;
function preset()
{
range_slider =document.getElementById("range-slider");
   grid_size_tell = document.getElementById("size-grid");
   slide_value = range_slider.value; 
   var div_height= art_width/slide_value;
var div_width = art_height/slide_value;

grid_size_tell.innerHTML = slide_value+" X "+slide_value; 

for(var i=1;i<=(slide_value*slide_value);i++)

{  const div  = document.createElement('div');
div.addEventListener("mouseover", backcolor );

    
var div_name="div"+i;
    artboard.appendChild(div);
    div.setAttribute('id',div_name);
    var pixel = document.getElementById(div_name);
   
    
    pixel.style.width= div_width+"px";
    pixel.style.height=div_height+"px";
 
    
        
   
}
previous_slide=slide_value;
}
function backcolor(e)
{
 e.target.style.backgroundColor = togglecolour;
}



function update_grid_size(){

    remove_div(previous_slide);
  

    range_slider =document.getElementById("range-slider");
   grid_size_tell = document.getElementById("size-grid");
   slide_value = range_slider.value; 
   var div_height= art_width/slide_value;
var div_width = art_height/slide_value;

grid_size_tell.innerHTML = slide_value+" X "+slide_value; 

for(var i=1;i<=(slide_value*slide_value);i++)

{  const div  = document.createElement('div');
div.addEventListener("mouseover", backcolor );
var div_name="div"+i;
    artboard.appendChild(div);
    div.setAttribute('id',div_name);
    var pixel = document.getElementById(div_name);
   
    
    pixel.style.width= div_width+"px";
    pixel.style.height=div_height+"px";
    


   
}

previous_slide=slide_value;



}



function remove_div(del_slide)
{
    for(var i=1;i<=(del_slide)*(del_slide);i++)
    {
        var rem_div_name = "div"+i;
        document.getElementById(rem_div_name).remove();
        

    }   
}



var color_selected = document.getElementById("colour-mode");
var rainbow = document.getElementById('rainbow-mode');
var erased = document.getElementById("erase");
var reset = document.getElementById("reset");




function colour_extract()
{
    
    rainbow.setAttribute('class','col');
    erased.setAttribute('class','col');
    reset.setAttribute('class','col');
    color_selected.setAttribute('class','col active');
    var colinp=document.getElementById("colour-opt");
    
    colinp.addEventListener("input",function()
    {
     togglecolour = colinp.value;
    },false);
    togglecolour = colinp.value;
    
    
    
    clearInterval(random_generate);
    

}
var random_generate="";
function colour_random()
    {
      
        rainbow.setAttribute('class','col active');
        erased.setAttribute('class','col');
        reset.setAttribute('class','col');
        color_selected.setAttribute('class','col');
        
        random_generate=setInterval(generate_random,1);
      

     
    }

    function generate_random(){

 var x = Math.floor(Math.random()*256);
        var y = Math.floor(Math.random()*256);
        var z = Math.floor(Math.random()*256);
        
        var rand_color = 'rgba('+x+","+y+","+z+")";
        togglecolour = rand_color;
        
    }
function colour_remove()
    {

     
        rainbow.setAttribute('class','col');
        erased.setAttribute('class','col active');
        reset.setAttribute('class','col');
        color_selected.setAttribute('class','col');
        togglecolour="white";
        clearInterval(random_generate);
        
    }
    function remove_all()
    {
        
    for(var i=1;i<=slide_value*slide_value;i++){
        div_name="div"+i;
        document.getElementById(div_name).style.backgroundColor="white";
    }

    }


    