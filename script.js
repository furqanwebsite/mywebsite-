// ===============================
// DARK MODE
// ===============================

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}


// ===============================
// LOAD DARK MODE
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }


    // CONTACT FORM
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Thank you! Your message has been received.");

            contactForm.reset();
        });
    }

});


// ===============================
// AGE CALCULATOR
// ===============================

function calculateAge() {

    const birthDate = document.getElementById("birthDate").value;
    const result = document.getElementById("ageResult");

    if (!birthDate) {
        result.innerText = "Please select your birth date.";
        return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    if (birth > today) {
        result.innerText = "Please enter a valid birth date.";
        return;
    }

    result.innerText =
        years + " Years, " +
        months + " Months, " +
        days + " Days";
}


// ===============================
// CALCULATOR
// ===============================

function addCalc(value) {

    const display = document.getElementById("calcDisplay");

    display.value += value;
}


function clearCalc() {

    document.getElementById("calcDisplay").value = "";
}


function deleteCalc() {

    const display = document.getElementById("calcDisplay");

    display.value = display.value.slice(0, -1);
}


function calculateCalc() {

    const display = document.getElementById("calcDisplay");

    try {

        if (!/^[0-9+\-*/.() ]+$/.test(display.value)) {
            display.value = "Error";
            return;
        }

        display.value = Function(
            '"use strict"; return (' + display.value + ')'
        )();

    } catch (error) {

        display.value = "Error";
    }
}


// ===============================
// PERCENTAGE CALCULATOR
// ===============================

function calculatePercentage() {

    const percent =
        parseFloat(document.getElementById("percent").value);

    const number =
        parseFloat(document.getElementById("percentNumber").value);

    const result =
        document.getElementById("percentageResult");

    if (isNaN(percent) || isNaN(number)) {

        result.innerText = "Please enter both values.";
        return;
    }

    const answer = (percent / 100) * number;

    result.innerText =
        percent + "% of " + number + " = " + answer;
}


// ===============================
// UNIT CONVERTER
// ===============================

function convertUnit() {

    const value =
        parseFloat(document.getElementById("unitValue").value);

    const from =
        document.getElementById("unitFrom").value;

    const to =
        document.getElementById("unitTo").value;

    const result =
        document.getElementById("unitResult");

    if (isNaN(value)) {

        result.innerText = "Please enter a value.";
        return;
    }


    // Convert everything to meters first

    let meters;

    if (from === "meter") {
        meters = value;
    }

    else if (from === "kilometer") {
        meters = value * 1000;
    }

    else if (from === "feet") {
        meters = value * 0.3048;
    }

    else if (from === "inch") {
        meters = value * 0.0254;
    }


    // Convert meters to target unit

    let answer;

    if (to === "meter") {
        answer = meters;
    }

    else if (to === "kilometer") {
        answer = meters / 1000;
    }

    else if (to === "feet") {
        answer = meters / 0.3048;
    }

    else if (to === "inch") {
        answer = meters / 0.0254;
    }


    result.innerText =
        value + " " + from + " = " +
        answer + " " + to;
}
