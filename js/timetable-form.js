var click = document.getElementById('submit');
click.addEventListener('click', addData);

var arr = new Array();

function addData(){
    DeleteData();
    getData();
    arr.push({
        course:document.getElementById('course').value,
        group:document.getElementById('group').value
    });

        localStorage.setItem("localData", JSON.stringify(arr));
}

function getData(){
    var str = localStorage.getItem("localData");
    if (str!= null)
        arr = JSON.parse(str);
}

function DeleteData(){
localStorage.clear();
}

$(document).ready(function(){
    var arr1 = new Array();
    arr1 = JSON.parse(localStorage.getItem("localData"));

    var tbl = document.getElementById('student');

    for(i = 0; i < arr1.length; i++){
        var r = tbl.insertRow();
        var cell1 = r.insertCell();
        var cell2 = r.insertCell();

        cell1.innerHTML = arr1[i].course;
        cell2.innerHTML = arr1[i].group;
    }

});