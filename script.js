
const appointmentForm = document.querySelector("#appointmentForm");
const formMessage = document.querySelector("#formMessage");

if (appointmentForm && formMessage) {
    appointmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const department = document.querySelector("#department").value;
        const date = document.querySelector("#appointmentDate").value;

        formMessage.textContent =
            `Demo preview successful! Department: ${department}. ` +
            `Preferred date: ${date}. No appointment has been booked.`;
    });
}
