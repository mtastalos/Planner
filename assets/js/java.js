var currentDateContainer = document.querySelector('#currentDay');
var contentContainer = document.querySelector('.container');
var currentTime = moment().format('MMMM Do YYYY, H:mm:ss a');
var currentHour = moment().format('H');

//creations
currentDateContainer.innerHTML = currentTime;

function generatePlanner() {
    for(i=0;i<9;i++){
        var sectionRow = document.createElement('section');
        sectionRow.className = 'row';
        var divTime = document.createElement('div');
        divTime.className = 'time-block';
        //--handling time displayed for row 
        var h2Hour = document.createElement('h2');
        h2Hour.className = 'hour';
        if ((9+i) % 12>=9){h2Hour.innerText = ((9+i) % 12)+"AM";}
        else if ((9+i) % 12==0){h2Hour.innerText = "12PM";}
        else {h2Hour.innerText = ((9+i) % 12)+"PM"}

        //--handling row color for past/present/future
        var divDescription = document.createElement('div');
        if(parseInt(moment(h2Hour.innerText,'ha').format('H')) == parseInt(currentHour))
        {divDescription.className = 'description present';}
        else if(parseInt(moment(h2Hour.innerText,'ha').format('H')) < parseInt(currentHour))
        {divDescription.className = 'description past';}
        else if(parseInt(moment(h2Hour.innerText,'ha').format('H')) > parseInt(currentHour))
        {divDescription.className = 'description future';}

        //--handling textarea information + localStorage
        var textArea = document.createElement('textarea');
        textArea.dataset.row = i;
        var btnSave = document.createElement('dutton');
        btnSave.dataset.btn = i;
        btnSave.className = 'saveBtn';
        
        contentContainer.appendChild(sectionRow);
        sectionRow.appendChild(divTime);
        divTime.appendChild(h2Hour);
        sectionRow.appendChild(divDescription);
        divDescription.appendChild(textArea);
        sectionRow.appendChild(btnSave);

    }
}

$('.container').on('click', '.saveBtn' , function() {
    var selectedBtn = $(this).attr('data-btn');
    var userInput = $('textarea[data-row="'+selectedBtn+'"]');
    // alert(typeof(selectedBtn))
    console.log('data-row="'+selectedBtn+'"')
    console.log(userInput)

});

generatePlanner();