AOS.init();

window.addEventListener("load", AOS.refresh());
// lenis smooth scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const images = document.getElementsByClassName("ukiyo");
new Ukiyo(images);

// Select the image element
const image = document.getElementsByClassName("img-zooming");
const controller = new ScrollMagic.Controller();

Array.from(image).forEach((img) => {
  new ScrollMagic.Scene({
    triggerElement: img, // The element that triggers the animation
    triggerHook: "onEnter", // Trigger when the trigger element enters the viewport
  })
    .setTween(img, { scale: 1, duration: 5 }) // GSAP animation
    .addTo(controller);
});

/// navabr
var navbar = document.getElementById("navbar");
var scroll = window.scrollY;
var navHeight = navbar.offsetHeight;

// footer
var footer = document.getElementById("footer");
var scroll = window.scrollY;
var footHeight = footer.offsetHeight;

window.addEventListener("scroll", function () {
  var scrolled = window.scrollY;
  if (scrolled > scroll) {
    footer.classList.add("animate");
    footer.classList.add("sticked");
  } else {
    footer.classList.remove("animate");
    footer.classList.remove("sticked");
  }

  if (scrolled > navHeight) {
    navbar.classList.add("animate");
  } else {
    navbar.classList.remove("animate");
  }

  if (scrolled > scroll) {
    navbar.classList.remove("sticked");
  } else {
    navbar.classList.add("sticked");
  }

  scroll = window.scrollY;
});

// Function to handle intersection changes
function handleIntersection(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // "deskFoot" is on the screen, hide the footer
      footer.style.display = "none";
    } else {
      // "deskFoot" is not on the screen, show the footer
      footer.style.display = "flex";
    }
  });
}

// Create an Intersection Observer
var observer2 = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  rootMargin: "0px",
  threshold: 0.5, // Trigger the callback when "deskFoot" is 50% visible
});

// Observe the "deskFoot" section
observer2.observe(deskFoot);

// mobile nav
var mobileNavToggle = document.getElementById("mobileNavToggle");
var mobileNav = document.getElementById("mobileNav");
var xmarkMobileNav = document.getElementById("xmarkMobileNav");

mobileNavToggle.addEventListener("click", () => {
  mobileNav.style.left = "0px";
});

xmarkMobileNav.addEventListener("click", () => {
  mobileNav.style.left = "-100vw";
});

// lazy load
const el = document.querySelectorAll("img");
el.forEach((item) => {
  item.classList.add("lozad");
});
const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
observer.observe();

const input = document.querySelector("#dialCode");
const iti = window.intlTelInput(input, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
  separateDialCode: true,
  customPlaceholder: function (
    selectedCountryPlaceholder,
    selectedCountryData
  ) {
    return "Your Phone Number";
  },
  initialCountry: "ae",
});

// borchoure form
var formType = "brochure";
var brochureForm = document.getElementById("brochureForm");
var xmark = document.getElementById("xmark");
var formTitle = document.getElementById("formTitle");
var backDrop = document.getElementById("backDrop");

xmark.addEventListener("click", () => {
  brochureForm.style.right = "-100%";
  backDrop.style.display = "none";
});

backDrop.addEventListener("click", () => {
  brochureForm.style.right = "-100%";
  backDrop.style.display = "none";
});

const openForm = (form) => {
  if (form === "brochure") {
    formType = "brochure";
    formTitle.innerHTML = `DOWNLOAD PROJECT BROCHURE`;
  }

  if (form === "privateMeeting") {
    formType = "privateMeeting";
    formTitle.innerHTML = `BOOK YOUR PRIVATE MEETING`;
  }

  brochureForm.style.right = "0px";
  backDrop.style.display = "block";
};

function get_ga_clientid() {
  var cookie = {};
  document.cookie.split(";").forEach(function (el) {
    var splitCookie = el?.split("=");
    var key = splitCookie[0]?.trim();
    var value = splitCookie[1];
    cookie[key] = value;
  });
  return cookie["_ga"]?.substring(6) || "";
}

const phone1 = document.getElementById("phone");
const sideFormError = document.getElementById("sideFormError");
const sideFormCta = document.getElementById("sideFormCta");

phone1.addEventListener("input", (event) => {
  handleSideFormValidation(event.target.value);
});

brochureForm.addEventListener("click", function () {
  handleSideFormValidation();
});

function handleSideFormValidation(phone) {
  var country_code = document.getElementsByClassName(
    "iti__selected-dial-code"
  )[0].innerText;
  var phone = phone || document.getElementById("phone").value;

  const phoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
  const parsedPhoneNumber = phoneNumberUtil?.parse(country_code + phone, null);

  if (!phoneNumberUtil?.isValidNumber(parsedPhoneNumber)) {
    sideFormCta.style.display = "none";
    sideFormError.style.display = "block";
  } else {
    sideFormCta.style.display = "block";
    sideFormError.style.display = "none";
  }
}

// js for booking form on index page, dont put anything below it
const input2 = document.querySelector("#dialCode1");
const iti2 = window.intlTelInput(input2, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
  separateDialCode: true,
  customPlaceholder: function (
    selectedCountryPlaceholder,
    selectedCountryData
  ) {
    return "Your Phone Number";
  },
  initialCountry: "ae",
});

const phone2 = document.getElementById("phone1");
const bottomFormSection = document.getElementById("bottomFormSection");
const privateBookingFormError = document.getElementById(
  "privateBookingFormError"
);
const bottomFormCta = document.getElementById("bottomFormCta");

phone2.addEventListener("input", (event) => {
  handleBottomFormValidation(event.target.value);
});

bottomFormSection.addEventListener("click", function () {
  handleBottomFormValidation();
});

function handleBottomFormValidation(phone) {
  var country_code = document.getElementsByClassName(
    "iti__selected-dial-code"
  )[1].innerText;
  var phone = phone || document.getElementById("phone1").value;

  const phoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
  const parsedPhoneNumber = phoneNumberUtil?.parse(country_code + phone, null);

  if (!phoneNumberUtil?.isValidNumber(parsedPhoneNumber)) {
    bottomFormCta.style.display = "none";
    privateBookingFormError.style.display = "block";
  } else {
    bottomFormCta.style.display = "block";
    privateBookingFormError.style.display = "none";
  }
}
