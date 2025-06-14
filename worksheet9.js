//Worksheet 9: Events

document.getElementById("btn").addEventListener("click", function() {
    let name = document.getElementById("nameInput").value;
    alert("Hello, dear  " + name + "!");
    this.disabled = true;// Disable the button after click
    
    this.style.backgroundColor = "black"; // when disabled Change button color to black
    this.style.color = "white"; // Change text color to white
});
