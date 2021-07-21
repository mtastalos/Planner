var currentDateContainer = document.querySelector('#currentDay');
var contentContainer = document.querySelector('.container');
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = moment('10 AM', 'hh A').format('hh');
if(currentHour<10){currentHour = currentHour.replace("0")}
var typography = moment('10 AM', 'hh A').format('A');

//creations
currentDateContainer.innerHTML = currentTime;

function generatePlanner() {
    for(i=0;i<9;i++){
        var sectionRow = document.createElement('section');
        sectionRow.className = 'row';
        var divTime = document.createElement('div');
        divTime.className = 'time-block';
        var h2Hour = document.createElement('h2');
        h2Hour.className = 'hour';
        if ((9+i) % 12>=9){h2Hour.innerText = ((9+i) % 12)+"AM";}
        else if ((9+i) % 12==0){h2Hour.innerText = "12PM";}
        else {h2Hour.innerText = ((9+i) % 12)+"PM"}
        var divDescription = document.createElement('div');
        debugger;
        console.log(currentHour+typography+ " |||| "+h2Hour.innerText+" ||||"+currentHour +" |||"+((9+i) % 12))
        console.log(i+" "+h2Hour.innerText.indexOf(currentHour+typography)+" |||")
        
        // switch (typography){
        //     case "AM":
        //         if (h2Hour.innerText.indexOf(currentHour+typography) == 0) 
        //         {divDescription.className = 'description present';}
        //         else if(currentHour >((9+i) % 12))
        //         {divDescription.className = 'description past';}
        //         else if(currentHour <((9+i) % 12))
        //         {divDescription.className = 'description future';}
        //         break;
        //     case "PM":
        //         if (h2Hour.innerText.indexOf(currentHour+typography) == 0) 
        //         {divDescription.className = 'description present';}
        //         else if(currentHour >((9+i) % 12) || currentHour ==12)
        //         {divDescription.className = 'description past';}
        //         else if(currentHour <((9+i) % 12))
        //         {divDescription.className = 'description future';}
        //         break;
        // }


        // divDescription.className = 'description';
        var textArea = document.createElement('textarea');
        var btnSave = document.createElement('dutton');
        btnSave.className = 'saveBtn';
        
        contentContainer.appendChild(sectionRow);
        sectionRow.appendChild(divTime);
        divTime.appendChild(h2Hour);
        sectionRow.appendChild(divDescription);
        divDescription.appendChild(textArea);
        sectionRow.appendChild(btnSave);

    }
}

generatePlanner();