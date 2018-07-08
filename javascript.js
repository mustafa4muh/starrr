function t1(s){
    document.getElementById("t"+s).innerHTML = "Poor";
    document.getElementById("m1"+s).style.color = "goldenrod";
    document.getElementById("m2"+s).style.color = "black";
    document.getElementById("m3"+s).style.color = "black";
    document.getElementById("m4"+s).style.color = "black";
    document.getElementById("m5"+s).style.color = "black";

    
}

function t2(s){
    document.getElementById("t"+s).innerHTML = "Below  Average";                
    document.getElementById("m1"+s).style.color = "goldenrod";
    document.getElementById("m2"+s).style.color = "goldenrod";
    document.getElementById("m3"+s).style.color = "black";
    document.getElementById("m4"+s).style.color = "black";
    document.getElementById("m5"+s).style.color = "black";

}

function t3(s){
    document.getElementById("t"+s).innerHTML = "Average";                
    document.getElementById("m1"+s).style.color = "goldenrod";
    document.getElementById("m2"+s).style.color = "goldenrod";
    document.getElementById("m3"+s).style.color = "goldenrod";                
    document.getElementById("m4"+s).style.color = "black";
    document.getElementById("m5"+s).style.color = "black";

}

function t4(s){
    document.getElementById("t"+s).innerHTML = "Above Average";             
    document.getElementById("m1"+s).style.color = "goldenrod";
    document.getElementById("m2"+s).style.color = "goldenrod";
    document.getElementById("m3"+s).style.color = "goldenrod";   
    document.getElementById("m4"+s).style.color = "goldenrod";                
    document.getElementById("m5"+s).style.color = "black";

}

function t5(s){
    document.getElementById("m1"+s).style.color = "goldenrod";
    document.getElementById("m2"+s).style.color = "goldenrod";
    document.getElementById("m3"+s).style.color = "goldenrod";   
    document.getElementById("m4"+s).style.color = "goldenrod";                
    document.getElementById("t"+s).innerText = "Excellent";                    
    document.getElementById("m5"+s).style.color = "goldenrod";                

}    