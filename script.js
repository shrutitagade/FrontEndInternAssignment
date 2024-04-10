// Function to show the modal
function showModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Function to hide the modal
function hideModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Event listener for clicking the "Book Table" button
document.getElementById("bookTableBtn").addEventListener("click", function () {
    showModal('bookTableModal');
});

// Event listener for clicking the "Submit" button inside the booking form
document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    hideModal('bookTableModal');
    showModal('bookingSuccessModal');
});

// Event listener for clicking the "Book Table" button 2
document.getElementById("bookTableBtn2").addEventListener("click", function () {
    showModal('bookTableModal');
});


document.querySelectorAll('.modal .close').forEach(function (closeButton) {
    closeButton.addEventListener('click', function () {
        var modalId = this.closest('.modal').id;
        hideModal(modalId);
    });
});
