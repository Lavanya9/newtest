<html>
<head><h1><time>00 days:00:00:00</time></h1></head>
<body>
<button id="start">start</button>
<button id="stop">stop</button>
<button id="clear">clear</button>
</body>
<script type="text/javascript">
//assigning the value to the variable
	var h1 = document.getElementsByTagName('h1')[0], // return collection of elements.
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0, t, days=0; // initalizing value as zero
// create function for counting 
function add() {
    seconds++;
    //check condition if seconds >=60
    if (seconds >= 60) {
    	//assign seconds=0 and increment the value of minutes
        seconds = 0;
        minutes++;
        //check condition if minutes >=60
    if (minutes >= 60) {
        	//assign minutes=0 and increment the value of hours
            minutes = 0;
            hours++;
        }
        //check condition if hours >=24 
     if(hours >= 24){
     	hours = 0;
     	days++;
     }
    }
  // checking the ternary operation if hours>9 it drop preceding o,1.. and get into 10..
    h1.textContent = (days ? (days > 9 ? days : "0" + days) : "00") + ":" 
        + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" 
        + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" 
        + (seconds > 9 ? seconds : "0" + seconds);

    //call the function
    timer();
}
//create function timer
function timer() {
	// call function after specified time 1000m=1s
    t = setTimeout(add,0.00000001);
}
//timer();

// Start the timer 
start.onclick = timer;

// Stop the timer 

stop.onclick = function() {
    clearTimeout(t);
}

// Clear the timer
clear.onclick = function() {
	//index start at zero
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0; days = 0;
}
</script>
</html>
