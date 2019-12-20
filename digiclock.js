function time(){
    var date = new Date();
    var h = date.getHours(); //actual complete hours- 23
    var m = date.getMinutes(); // minutes 0 to 59 minutes
    var s = date.getSeconds(); 
    var session = "AM";
    // to display 0 hrs to 12 hrs
    if(h == 0){
        h = 12;
    }
    //checking for am/pm
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;// show hrs 08/10
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(time, 1000);
    
}

time();