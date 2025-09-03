
// document.querySelector(".submit-btn").addEventListener("click", function (e) {
//     e.preventDefault();

//     let name = document.querySelectorAll(".info")[1].value.trim();
//     let phone = document.querySelectorAll(".info")[2].value.trim();
//     let email = document.querySelectorAll(".info")[3].value.trim();

//     if (name === "" || phone === "" || email === "") {
//         alert(" All fields are required!");
//         return;
//     }

//     if (!/^[a-zA-Z ]+$/.test(name)) {
//         alert(" Name must contain only letters.");
//         return;
//     }

//     if (!/^\d{10}$/.test(phone)) {
//         alert(" Phone number must be 10 digits.");
//         return;
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         alert(" Enter a valid email address.");
//         return;
//     }

//     alert(" Form submitted successfully!");
// });





// window.addEventListener("scroll", function () {
//     let navbar = document.querySelector(".navbar");
//     if (window.scrollY > 50) {
//         navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
//         navbar.style.position = "fixed";
//         navbar.style.top = "0";
//         navbar.style.left = "0";
//         navbar.style.right = "0";
//         navbar.style.zIndex = "1000";
//     } else {
//         navbar.style.boxShadow = "none";
//         navbar.style.position = "static";
//     }
// });



// function animateCounter(id, target, duration) {
//     let element = document.getElementById(id);
//     let start = 0;
//     let increment = target / (duration / 20);

//     let counter = setInterval(() => {
//         start += increment;
//         if (start >= target) {
//             start = target;
//             clearInterval(counter);
//         }
//         element.innerText = Math.floor(start) + "%";
//     }, 20);
// }


// window.addEventListener("load", () => {
//     animateCounter("hike", 128, 2000); 
// });


const form = document.querySelector('.form');
const submitBtn = document.querySelector('.submit-btn');
const inputs = document.querySelectorAll('.info');

inputs.forEach(input => {
  const msg = document.createElement('div');
  msg.className = 'validation-message';
  msg.style.color = 'red';
  msg.style.fontSize = '12px';
  msg.style.marginLeft = '25px';
  msg.style.height = '16px';
  input.insertAdjacentElement('afterend', msg);
});

function validateName(name) {
  return /^[a-zA-Z ]+$/.test(name);
}

function validatePhone(phone) {
  return /^\d{10}$/.test(phone);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm() {
  let valid = true;
  let values = Array.from(inputs).map(input => input.value.trim());

  if (values[1] === '') {
    inputs[1].nextElementSibling.textContent = "Name is required.";
    valid = false;
  } else if (!validateName(values[1])) {
    inputs[1].nextElementSibling.textContent = "Name must contain only letters.";
    valid = false;
  } else {
    inputs[1].nextElementSibling.textContent = "";
  }

  if (values[2] === '') {
    inputs[2].nextElementSibling.textContent = "Phone is required.";
    valid = false;
  } else if (!validatePhone(values[2])) {
    inputs[2].nextElementSibling.textContent = "Phone must be 10 digits.";
    valid = false;
  } else {
    inputs[2].nextElementSibling.textContent = "";
  }

  if (values[3] === '') {
    inputs[3].nextElementSibling.textContent = "Email is required.";
    valid = false;
  } else if (!validateEmail(values[3])) {
    inputs[3].nextElementSibling.textContent = "Enter a valid email.";
    valid = false;
  } else {
    inputs[3].nextElementSibling.textContent = "";
  }

  submitBtn.disabled = !valid;
  return valid;
}

inputs.forEach(input => {
  input.addEventListener('input', validateForm);
});

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (validateForm()) {
    alert('Form submitted successfully!');
  }
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.left = '0';
    navbar.style.right = '0';
    navbar.style.zIndex = '1000';
    navbar.style.transition = 'box-shadow 0.3s ease, position 0.3s ease';
  } else {
    navbar.style.boxShadow = 'none';
    navbar.style.position = 'static';
  }
});

function animateCounter(id, target, duration) {
  const element = document.getElementById(id);
  if (!element) return;
  let start = 0;
  const increment = target / (duration / 20);
  const counter = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(counter);
    }
    element.innerText = Math.floor(start) + "%";
  }, 20);
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', () => {
  const hike = document.getElementById('hike');
  if (hike && isInViewport(hike) && !hike.classList.contains('animated')) {
    animateCounter('hike', 128, 2000);
    hike.classList.add('animated');
  }
});

submitBtn.disabled = true;
