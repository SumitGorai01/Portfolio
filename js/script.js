var typed = new Typed(".text", {
    strings: ["Java Developer", "Backend Developer", "Software Engineer", "Web Developer"],
    typSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function collapseNavbar() {
    var checkBox = document.getElementById("nav-check");
    checkBox.checked = false;
}

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "goraisumit01@gmail.com",
        Password: "68F730BD7F008A0DC76C37C5F363DCDA6B71",
        To: 'goraisumit01@gmail.com',
        From:'goraisumit01@gmail.com',
        Subject: "From Protfolio ",
        Body: "Name : "+document.getElementById("name").value
                    +"<br> Email : " +document.getElementById("email").value
                    +"<br> Subject : " +document.getElementById("subject").value
                    +"<br> Message : " +document.getElementById("message").value
                    
    }).then(
        message =>{
            if(message == 'OK'){
                Swal.fire({
                    title: "Success",
                    text: "Message Sent Successfully",
                    icon: "success",
                    showConfirmButton: true,  
                    timer: 3000
                  });
            }else{
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


document.addEventListener("DOMContentLoaded", function() {
    var bottomToTopBtn = document.getElementById('bottomToTopBtn');
  
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) {
        bottomToTopBtn.style.display = 'block';
      } else {
        bottomToTopBtn.style.display = 'none';
      }
    });
  
    bottomToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  



  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }