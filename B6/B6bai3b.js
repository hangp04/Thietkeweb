var lastOperation = null;
if (lastOperation) {
    lastOperation.classList.remove("red-text");
  }
function cong() {
    var so1 = parseFloat(document.getElementById("so1").value);
    var so2 = parseFloat(document.getElementById("so2").value);
    var result1 = so1 + so2;
    document.getElementById("result1").value = result1;
    var phepcong = so1 + " + " + so2 + " = " + result1;
    document.getElementById("history1").textContent = phepcong;
    var lastOperation = document.querySelector(".red-text");
  if (lastOperation) {
    lastOperation.classList.remove("red-text");
  }

  document.getElementById("history1").classList.add("red-text");
}
function tru() {
    var so3 = parseFloat(document.getElementById("so3").value);
    var so4 = parseFloat(document.getElementById("so4").value);
    var result2 = so3 - so4;
    document.getElementById("result2").value = result2;
    var pheptru = so3 + " - " + so4 + " = " + result2;
    document.getElementById("history2").textContent = pheptru;
    var lastOperation = document.querySelector(".red-text");
  if (lastOperation) {
    lastOperation.classList.remove("red-text");
  }

  document.getElementById("history2").classList.add("red-text");
}
function nhan() {
    var so5 = parseFloat(document.getElementById("so5").value);
    var so6 = parseFloat(document.getElementById("so6").value);
    var result3 = so5 * so6;
    document.getElementById("result3").value = result3;
    var phepnhan = so5 + " * " + so6 + " = " + result3;
    document.getElementById("history3").textContent = phepnhan;
    var lastOperation = document.querySelector(".red-text");
    if (lastOperation) {
        lastOperation.classList.remove("red-text");
    }
    
    document.getElementById("history3").classList.add("red-text");
}
function chia() {
    var so7 = parseFloat(document.getElementById("so7").value);
    var so8 = parseFloat(document.getElementById("so8").value);
    if(so8=="0"){
        document.getElementById("result4").value = "không có kết quả"; 
        var phepchia = so7 + " / " + so8 + " = " + "không có kết quả";
        document.getElementById("history4").textContent = phepchia;
        var lastOperation = document.querySelector(".red-text");
    if (lastOperation) {
      lastOperation.classList.remove("red-text");
    }

    document.getElementById("history4").classList.add("red-text");
    }
    else{
        var result4 = so7 / so8;
        document.getElementById("result4").value = result4;
        var phepchia = so7 + " / " + so8 + " = " + result4;
        document.getElementById("history4").textContent = phepchia;
        var lastOperation = document.querySelector(".red-text");
        if (lastOperation) {
          lastOperation.classList.remove("red-text");
        }
    
        document.getElementById("history4").classList.add("red-text");    }
 
}
