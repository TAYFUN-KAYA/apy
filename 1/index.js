let outputScreen=document.getElementById("inputplace");
function AddInput (number) {
    outputScreen.value += number;
}
function ResultCalculate() {
        outputScreen.value = eval(outputScreen.value)
}
function InputClear() {
    outputScreen.value="";
}