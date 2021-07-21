var currentDateContainer = document.getElementById('currentDay');
var contentContainer = document.querySelector('.container');

//creations

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
        
        if (h2Hour.innerText==0){h2Hour.innerText=12;}
        var divDescription = document.createElement('div');
        divDescription.className = 'description';
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