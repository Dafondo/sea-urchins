// without jQuery (doesn't work in older IEs)
document.addEventListener('DOMContentLoaded', function(){ 
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/gsk/new', true);
    xhr.send();

}, false);

function updatePills() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/gsk/pills', true);
    xhr.onload = function () {
        
    };
    xhr.send();
}

function saveNewPill() {
    document.getElementById("pillForm").submit();
}
