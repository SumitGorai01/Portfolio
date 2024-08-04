var typed = new Typed(".sec-text", {
    strings: ["BCA Graduate", "Java Developer", "Backend Developer", "Software Engineer", "Web Developer"],
    typSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let aboutMeText = document.querySelector(".aboutme");
const readMore = document.querySelector(".read-more");
readMore.addEventListener("click", function () {
    readMore.classList.toggle("clicked");
    if (readMore.classList.contains("clicked")) {
        aboutMeText.textContent =
            "I'm Sumit Gorai, a Full Stack Developer with focus on backend development. I specialize in crafting intuitive front-end interfaces using Angular , while also excelling in building scalable back-end solutions with Java EE and Spring frameworks. My commitment to clean code and continuous learning is unwavering, driving me to deliver high-quality software solutions that make a real impact. I thrive on challenges and am always eager to push the boundaries of what's possible in software development.                    Let's collaborate on your next project and turn your ideas into reality!";
        readMore.textContent = "Read Less";
    } else {
        aboutMeText.textContent =
            "I'm Sumit Gorai, a Full Stack Developer with focus on backend development. I specialize in crafting                intuitive front-end interfaces using Angular , while also excelling in building scalable back-end                solutions with Java EE and Spring frameworks....";
        readMore.textContent = "Read More";
    }
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

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "goraisumit01@gmail.com",
        Password: "68F730BD7F008A0DC76C37C5F363DCDA6B71",
        To: 'goraisumit01@gmail.com',
        From: 'goraisumit01@gmail.com',
        Subject: "From Protfolio ",
        Body: "Name : " + document.getElementById("name").value
            + "<br> Email : " + document.getElementById("email").value
            + "<br> Subject : " + document.getElementById("subject").value
            + "<br> Message : " + document.getElementById("message").value

    }).then(
        message => {
            if (message == 'OK') {
                Swal.fire({
                    title: "Success",
                    text: "Message Sent Successfully",
                    icon: "success",
                    showConfirmButton: true,
                    timer: 3000
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    showConfirmButton: false,
                    timer: 3000
                });
            }
        }
    );
}

function collapseNavbar() {
    var checkBox = document.getElementById("nav-check");
    checkBox.checked = false;
}

document.addEventListener("DOMContentLoaded", function () {
    var bottomToTopBtn = document.getElementById('bottomToTopBtn');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            bottomToTopBtn.style.display = 'block';
        } else {
            bottomToTopBtn.style.display = 'none';
        }
    });

    bottomToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    // alert("hi")
}, false);


setTimeout(function a() {
    document.getElementById("loading").style.display = "none";
}, 4000);


// darkModeToggle.addEventListener("change", function () {
//     body.classList.toggle('dark-mode');
//     if (body.classList.contains('dark-mode')) {
//         darkModeToggle.textContent = 'Turn on Light Mode';
//     } else {
//         darkModeToggle.textContent = 'Turn on Dark Mode';
//     }
// });

document.getElementById('readMoreBtn').addEventListener('click', function() {
    var container = document.getElementById('certificateContainer');
    if (container.classList.contains('expanded')) {
      container.classList.remove('expanded');
      this.textContent = 'Read More';
    } else {
      container.classList.add('expanded');
      this.textContent = 'Read Less';
    }
  });
  