
document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();

    let email = document.querySelector(".email").value.trim();

    if (email === "") {
        alert(" Please enter your email.");
        return;
    }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert(" Please enter a valid email address.");
        return;
    }

    alert(" Login successful!");

    window.location.href = "index.html";
});


document.querySelector(".google").addEventListener("click", function () {
    alert(" Google login clicked (integration pending).");
    
});


document.querySelector(".linkedin").addEventListener("click", function () {
    alert(" LinkedIn login clicked (integration pending).");
    
});
