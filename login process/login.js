document.addEventListener("DOMContentLoaded", () => {
    const inputnum = document.querySelectorAll(".num");
    const continuebtn = document.getElementById("continueButton");

    const checknum = () => {
        const allFilled = Array.from(inputnum).every(input => input.value.trim() !== "");
        continuebtn.disabled = !allFilled; // Disable button if any input is empty
    };

    // Add input event listeners to each input field to trigger validation
    inputnum.forEach(input => {
        input.addEventListener("input", checknum);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // OTP Modal Setup
    const otpInputs = document.querySelectorAll(".otp-input");
    const verifyButton = document.getElementById("verifyOtpButton");

    const checkOtpFilled = () => {
        const allFilled = Array.from(otpInputs).every(input => input.value.trim() !== "");
        verifyButton.disabled = !allFilled;
    };

    otpInputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const value = e.target.value;
            if (value.length === 1) {
                const nextInput = otpInputs[index + 1];
                if (nextInput) nextInput.focus();
            } else if (value.length > 1) {
                e.target.value = value.charAt(0);
            }
            checkOtpFilled();
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !input.value) {
                const previousInput = otpInputs[index - 1];
                if (previousInput) previousInput.focus();
            }
        });
    });

    verifyButton.addEventListener("click", () => {
        otpInputs.forEach(input => input.value = ""); // Clear OTP inputs
        verifyButton.disabled = true;

        // Hide OTP Modal
        const otpModal = bootstrap.Modal.getInstance(document.getElementById("otpModal"));
        otpModal.hide();
    });

    document.getElementById("continueButton").addEventListener("click", () => {
        const otpModal = new bootstrap.Modal(document.getElementById("otpModal"));
        otpModal.show();
    });
});
const dropdownItems = document.querySelectorAll('.dropdown-item');
    const dropdownButton = document.getElementById('dropdownButton');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            dropdownButton.textContent = item.textContent;
        });
    });

    document.getElementById("agreeContinueButton").addEventListener("click", function () {
        // Get the modal and backdrop elements
        const modal = document.querySelector("#airbnb");
        const backdrop = document.querySelector(".modal-backdrop");

        // Hide the modal programmatically
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        bootstrapModal.hide();

        // Remove the backdrop element
        if (backdrop) {
            backdrop.remove();
        }

        // Optionally, enable body scrolling again
        document.body.classList.remove("modal-open");
        document.body.style.paddingRight = "";
    });