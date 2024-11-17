let date;
let day;
let dayn;
let month;
let intervalId = null ;
let lapCount = 1 ;
const dateTime =  document.getElementById("d1") ;
const audio =  new Audio() ;
audio.src = "audio/sound_trim.mp3" ;
const StartButton =  document.getElementById("start");
const secArea =  document.getElementById("sec") ;
const minArea =  document.getElementById("min") ;
const hrArea = document.getElementById("hr") ;
const lapTable = document.getElementById("record-container") ;
const laptableBody  = document.getElementById("record-table-body") ;
setInterval(() => {
    date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
   // let Day = date.getDay() ;
 //console.log(Day) ;
   
    

      switch (new Date().getMonth()) {
        case 0:
          month = "Jan";
          break;
        case 1:
          month = "Feb";
          break;
        case 2:
            month = "March";
          break;
        case 3:
            month = "April";
          break;
        case 4:
            month = "May";
          break;
        case 5:
            month = "June";
          break;
        case 6:
          month = "July";
          break;
        case 7:
            month = "Aug";
          break;
         case 8:
            month = "Sept";
          break;
          case 9:
            month = "Oct";
          break;
          case 10:
            month = "Nov";
          break;
          case 11:
            month = "Dec";
          break;
      }
   
      
      dayn =date.getDate();

      date = dayn+" "+month+"  , "+year;
     // console.log(date) ;
    dateTime.innerHTML = date;
}, 3000);

// start button function 

 let timer =  false ; 
const start =() =>{
    audio.play() ;
    
     if(timer === false){
        timer = true ; 
        
        StartButton.innerHTML = '<i class="far fa-pause-circle"></i> Pause';
        TimeIsRuning() ;
     }
     else{
        timer =  false ;
        StartButton.innerHTML = '<i class="far fa-play-circle"></i> Start';
        clearInterval(intervalId) ;
        intervalId = null ;
     }
}
let hr = 0;
let min = 0;
let sec = 0;
const TimeIsRuning =()=>{
    intervalId = setInterval(()=>{
      //  console.log("time is runing") ;
        if(timer){
            sec = sec+1 ;
        }
        if(sec === 59){
            min = min +1 ; 
            sec = 0 ;
        }
        if(min === 59){
            hr = hr +1 ; 
            min = 0  ; 
            sec=0 ;
        }
        let hrStr = hr ; 
        let minStr = min ; 
        let secStr =  sec ; 
        if (hr < 10) {
            hrStr = "0" + hrStr;
        }
        if (min < 10) {
            minStr = "0" + minStr;
        }
        if (sec < 10) {
            secStr = "0" + secStr;
        }
       
        secArea.innerHTML = secStr ;
        minArea.innerHTML = minStr ;
        hrArea.innerHTML = hrStr ;

     } , 1000)
}

const lap = () =>{
    if(timer){
        lapTable.style.display = "block" ;

        let lapTime = hrArea.innerHTML + ":" + minArea.innerHTML + ":" + secArea.innerHTML ; 
        audio.play() ;
        const row = laptableBody.insertRow(0) ;
        const NoCell = row.insertCell(0) ;
        const  timeCell = row.insertCell(1) ;
        NoCell.innerHTML = lapCount ;
        timeCell.innerHTML =  lapTime ;
        lapCount++ ;

    }
}

const reset =()=>{
    lapTable.style.display = "none" ;
    audio.play() ;
    timer = false ;
    StartButton.innerHTML =  '<i class="far fa-play-circle"></i> Start';
    hr = 0;
    min = 0;
    sec = 0;
    hrArea.innerHTML = "00" ;
    minArea.innerHTML = "00" ;
    secArea.innerHTML = "00" ;
    laptableBody.innerHTML = "" ;
    lapCount =1 ;
}
const clearLap = () =>{
    lapTable.style.display = "none" ;
    audio.play() ;
    laptableBody.innerHTML ="" ;
    lapCount = 1 ;
}