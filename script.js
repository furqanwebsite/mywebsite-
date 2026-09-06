function showMessage() {
    alert("Welcome to Furqan Website!");
}

function changeMode() {
    document.body.classList.toggle("dark");
}

function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    alert("Thank you " + name + "! Your message has been received.");

}