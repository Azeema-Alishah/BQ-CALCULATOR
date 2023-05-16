function NumIs (num){
    document.getElementById("result").value += num;
}

function ClearNum(){
    document.getElementById("result").value = '';
}

function RemoveNum(){
    var resu = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0, resu.length-1);
}

function ResultIs (){
    document.getElementById('result').value = eval(document.getElementById('result').value)
}
