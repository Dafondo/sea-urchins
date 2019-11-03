// without jQuery (doesn't work in older IEs)
document.addEventListener('DOMContentLoaded', function(){ 
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://m.jbakita.me:9000/gsk/new', true);
    xhr.send();

}, false);

function updatePillTable(pillType) {
    var sidebar = document.getElementById("pill-table");
    var row = sidebar.insertRow(-1);
    var cell = row.insertCell(0);
    cell.appendChild(pillType)
}

function updatePills() {
    var xhr = new XMLHttpRequest();
    alert("in12");
    xhr.open("GET", 'http://m.jbakita.me:9000/gsk/pills', true);
    xhr.responseType = "text";
    alert("in13");
    xhr.onload = function() {
        updatePillTable(xhr.response);
    }
    xhr.send();
}

function saveNewPill() {
    //document.getElementById("pillForm").submit();
    alert("in");
    updatePills();
}
