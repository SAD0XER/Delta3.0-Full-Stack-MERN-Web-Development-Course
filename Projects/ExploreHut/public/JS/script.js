// Function for form validation.
(() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false,
        );
    });
})();

// JavaScript for Tax Switch Toggle.
let taxSwitchToggle = document.getElementById("flexSwitchCheckDefault");
let texSwitchToggle = () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    for (info of taxInfo) {
        if (taxSwitchToggle.checked) info.style.display = "inline";
        else info.style.display = "none";
    }
};
