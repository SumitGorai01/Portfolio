var typed = new Typed(".text",{
    strings :["Java Developer","Software Engineer","Web Developer"],
    typSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const projList = document.querySelector(".project-list");

let scrollAmount = 0;
const scrollStep = calculateStep();

prevBtn.addEventListener("click", () => {
    console.log("prev-btn clicked");
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    slideTo(scrollAmount);
    updateButtonVisibility();
});
nextBtn.addEventListener("click", () => {
    scrollAmount += scrollStep;
    console.log(scrollAmount);
    if (scrollAmount > projList.scrollWidth - projList.clientWidth) {
        scrollAmount = projList.scrollWidth - projList.clientWidth;
    }
    slideTo(scrollAmount);
    updateButtonVisibility();
});

// Function to calculate scroll step dynamically based on image sizes
function calculateStep() {
    const firstImage = document.querySelector(".overlay");
    const imageWidth = firstImage.clientWidth;
    // Add some additional padding or margin to the step if needed
    return imageWidth + 16; // Adjust this value as needed
}

function slideTo(amount) {
    projList.scrollTo({
        left: amount,
        behavior: "smooth",
    });
}
function updateButtonVisibility() {
    // Check if at the beginning or end of the scrollable content
    if (scrollAmount <= 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }
    if (scrollAmount >= projList.scrollWidth - projList.clientWidth) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
}