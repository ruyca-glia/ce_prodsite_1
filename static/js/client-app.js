// select the elements
const link = document.getElementById("redirect-link");
const modal = document.getElementById("tos-modal");
const acceptBtn = document.getElementById("accept-btn");
const cancelBtn = document.getElementById("cancel-btn");

// Intercept the click (link)
link.addEventListener("click", (event) => {
    // PREVENT the immediate navigation
    event.preventDefault();

    // Show the modal using hte native method
    modal.showModal();
});

// 2. Handle the "Accept" action
acceptBtn.addEventListener("click", () => {
    // Manually navigate to the URL stored in the links href
    window.location.href = link.href;
});

// 3. Handle the "Cancel Button"
cancelBtn.addEventListener("click", () => {
    modal.close();
});