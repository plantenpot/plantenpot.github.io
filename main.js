function changeText()
{
    document.getElementById("second").style.display = "none";

    setInterval(() => {
        document.getElementById("second").style.display = "none";
        document.getElementById("first").style.display = "block";
        document.getElementById("Change_text").innerHTML=("Software Development ");
    }, 3000);
    
    setInterval(() => {
        document.getElementById("Change_text").innerHTML=("SintLucas ");
    }, 6000);

    setInterval(() => {
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
    }, 9000);
}

changeText();