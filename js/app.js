let outputScreen = document.getElementById("outputscreen")
function display(num) {
    outputScreen.value += num;
}
function Calculate() {
    try{
    outputScreen.value = eval(outputScreen.value);
    }
    catch (err) {
    alert("Invalid")
    }
    
}

function clear() {
    outputScreen.value = "";

}
function del() {
    outputScreen.value = outputScreen.value
        .slice(0, -1);
    
}
// function clear() {
//     outputScreen.value = outputScreen.value
//     .slice(del);
// }