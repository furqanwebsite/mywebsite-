/* ========================================
TOOLHUB JAVASCRIPT
======================================== */

/* =========================
DARK MODE
========================= */

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkMode", "on");
        darkModeBtn.innerHTML = "☀️";

    } else {

        localStorage.setItem("darkMode", "off");
        darkModeBtn.innerHTML = "🌙";

    }

});

}

/* Load saved dark mode */

if (localStorage.getItem("darkMode") === "on") {

document.body.classList.add("dark-mode");

if (darkModeBtn) {
    darkModeBtn.innerHTML = "☀️";
}

}

/* =========================
AGE CALCULATOR
========================= */

const ageBtn = document.getElementById("ageBtn");

if (ageBtn) {

ageBtn.addEventListener("click", function () {

    const birthDate =
        document.getElementById("birthDate").value;

    const result =
        document.getElementById("ageResult");

    if (!birthDate) {

        result.innerText =
            "Please select your birth date.";

        return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) {

        result.innerText =
            "Please enter a valid birth date.";

        return;
    }

    let years =
        today.getFullYear() -
        birth.getFullYear();

    let months =
        today.getMonth() -
        birth.getMonth();

    let days =
        today.getDate() -
        birth.getDate();


    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
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


    result.innerText =
        years + " Years, " +
        months + " Months, " +
        days + " Days";

});

}

/* =========================
CALCULATOR
========================= */

const calcDisplay =
document.getElementById("calcDisplay");

const calculator =
document.querySelector(".calculator");

if (calculator && calcDisplay) {

calculator.addEventListener("click", function (event) {

    const button =
        event.target.closest("button");

    if (!button) return;

    const value =
        button.getAttribute("data-value");


    /* Clear */

    if (value === "clear") {

        calcDisplay.value = "";
        return;

    }


    /* Delete */

    if (value === "delete") {

        calcDisplay.value =
            calcDisplay.value.slice(0, -1);

        return;

    }


    /* Calculate */

    if (value === "=") {

        calculateExpression();
        return;

    }


    /* Add number/operator */

    calcDisplay.value += value;

});


function calculateExpression() {

    const expression =
        calcDisplay.value;

    if (!expression) return;


    /* Only allow calculator characters */

    if (!/^[0-9+\-*/.() ]+$/.test(expression)) {

        calcDisplay.value = "Error";
        return;

    }


    try {

        const answer =
            Function(
                '"use strict"; return (' +
                expression +
                ')'
            )();


        if (
            typeof answer !== "number" ||
            !isFinite(answer)
        ) {

            calcDisplay.value = "Error";
            return;

        }


        calcDisplay.value = answer;

    } catch (error) {

        calcDisplay.value = "Error";

    }

}

}

/* =========================
PERCENTAGE CALCULATOR
========================= */

const percentageBtn =
document.getElementById("percentageBtn");

if (percentageBtn) {

percentageBtn.addEventListener("click", function () {

    const percent =
        parseFloat(
            document.getElementById("percent").value
        );

    const number =
        parseFloat(
            document.getElementById("percentNumber").value
        );

    const result =
        document.getElementById("percentageResult");


    if (isNaN(percent) || isNaN(number)) {

        result.innerText =
            "Please enter both values.";

        return;

    }


    const answer =
        (percent / 100) * number;


    result.innerText =
        percent +
        "% of " +
        number +
        " = " +
        answer;

});

}

/* =========================
UNIT CONVERTER
========================= */

const convertBtn =
document.getElementById("convertBtn");

if (convertBtn) {

convertBtn.addEventListener("click", function () {

    const value =
        parseFloat(
            document.getElementById("unitValue").value
        );

    const from =
        document.getElementById("unitFrom").value;

    const to =
        document.getElementById("unitTo").value;

    const result =
        document.getElementById("unitResult");


    if (isNaN(value)) {

        result.innerText =
            "Please enter a value.";

        return;

    }


    let meters;


    /* Convert FROM to meters */

    if (from === "meter") {

        meters = value;

    } else if (from === "kilometer") {

        meters = value * 1000;

    } else if (from === "feet") {

        meters = value * 0.3048;

    } else if (from === "inch") {

        meters = value * 0.0254;

    }


    let answer;


    /* Convert meters TO target */

    if (to === "meter") {

        answer = meters;

    } else if (to === "kilometer") {

        answer = meters / 1000;

    } else if (to === "feet") {

        answer = meters / 0.3048;

    } else if (to === "inch") {

        answer = meters / 0.0254;

    }


    result.innerText =
        value +
        " " +
        from +
        " = " +
        answer +
        " " +
        to;

});

}
