
const generateTable = () => {
    const input = parseInt(document.getElementById("input").value);
    document.getElementById("Ones").innerText = input*1;
    document.getElementById("Twos").innerText = input*2;
    document.getElementById("Threes").innerText = input*3;
    document.getElementById("Fours").innerText = input*4;
    document.getElementById("Fives").innerText = input*5;
    document.getElementById("Sixes").innerText = input*6;
    document.getElementById("Sevens").innerText = input*7;
    document.getElementById("Eights").innerText = input*8;
    document.getElementById("Nines").innerText = input*9;
    document.getElementById("Tens").innerText = input*10;
}

const validate = () => {
    const input = document.getElementById("input").value;
    if(!/^[0-9]+$/.test(input)){
        document.getElementById("input").value = input.substring(0,input.length-1);
    }
}