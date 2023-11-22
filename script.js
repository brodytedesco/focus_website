const timerStart = (h,m,s) => {
    var [h,m,s]=countdown(toInt(h),toInt(m),toInt(s));
    console.log("here"+m)
    h = checkTime(toInt(h));
    m = checkTime(toInt(m));
    s = checkTime(toInt(s));
    time=h+":"+m+":"+s
    document.getElementById("timer").innerHTML=time;
    

    if (toInt(s)+toInt(m)+toInt(h) != 0) {
    setTimeout(function() {timerStart(h,m,s);}, 1000);

    }
    else{
    return 0;
    }
}


const  toInt = (i) => {
    if (typeof i === 'string' || i instanceof String){
        i = parseInt(i);

    }
    return i;
}
const countdown = (h,m,s) => {
    if(s-1==-1){
        if(m-1==-1){
            if(h-1==-1){
                s=0;
                m=0;
                h=0;
            }
            else{
                h=h-1;
                m=59;
                s=59;
            }
        }
        else{
            s=59;
            m=m-1;
            h=h;
            console.log("are we"+m)
        }
    }
    else{
        s=s-1;
        m=m;
        h=h;
        
    }

    console.log("end of addition"+m)
    return [h,m,s];
}
const  checkTime = (i) => {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

const getTimeAndStart = () => {

    timerStart(0,1,3);

}
