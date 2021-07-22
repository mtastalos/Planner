var currentDateContainer = document.querySelector('#currentDay');
var contentContainer = document.querySelector('.container');
var currentTime = moment().format('dddd, MMMM Do');
var currentHour = moment().format('H');
var storage = [{"saveBtnPress":"0","textAreaInput":""},{"saveBtnPress":"1","textAreaInput":""},{"saveBtnPress":"2","textAreaInput":""},
{"saveBtnPress":"3","textAreaInput":""},{"saveBtnPress":"4","textAreaInput":""},{"saveBtnPress":"5","textAreaInput":""},
{"saveBtnPress":"6","textAreaInput":""},{"saveBtnPress":"7","textAreaInput":""},{"saveBtnPress":"8","textAreaInput":""}];

//checks to see if localStorage has already been created
if(localStorage.getItem('plan')===null){localStorage.setItem('plan', JSON.stringify(storage));}

//display current date + creating HTML elements
function generatePlanner() {
    currentDateContainer.innerHTML = currentTime;
    var storage = JSON.parse(localStorage.getItem('plan'));

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
        if(parseInt(moment(h2Hour.innerText,'ha').format('H')) == parseInt(currentHour)) {divDescription.className = 'description present';}
        else if(parseInt(moment(h2Hour.innerText,'ha').format('H')) < parseInt(currentHour)) {divDescription.className = 'description past';}
        else if(parseInt(moment(h2Hour.innerText,'ha').format('H')) > parseInt(currentHour)) {divDescription.className = 'description future';}

        //--handling textarea information + assigning saved data from localStorage
        var textArea = document.createElement('textarea');
        textArea.dataset.row = i;
        if (storage[i].textAreaInput!=='') {textArea.innerText = storage[i].textAreaInput;}

        var btnSave = document.createElement('button');
        btnSave.dataset.btn = i;
        btnSave.className = 'saveBtn ';
        var btnIcon = document.createElement('i');
        btnIcon.className = 'far fa-save';
        
        contentContainer.appendChild(sectionRow);
        sectionRow.appendChild(divTime);
        divTime.appendChild(h2Hour);
        sectionRow.appendChild(divDescription);
        divDescription.appendChild(textArea);
        sectionRow.appendChild(btnSave);
        btnSave.appendChild(btnIcon);
    }
}

//saveBtn click event
$('.container').on('click', '.saveBtn' , function() {
    var saveBtnPress = $(this).attr('data-btn');
    var textAreaInput = $('[data-row="'+saveBtnPress+'"]').val();

    //--updates textArea data in localStorage  
    var storage = JSON.parse(localStorage.getItem('plan'));
    storage.forEach(function(item) {
        if (parseInt(item.saveBtnPress) == parseInt(saveBtnPress)){
            item.textAreaInput = textAreaInput;
            localStorage.setItem('plan', JSON.stringify(storage));
        } 
    });
});

generatePlanner();