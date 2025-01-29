// JavaScript for toggling the calendar section
document.querySelector(".nav-part").addEventListener("click", function (event) {
  const calendarSection = document.querySelector(".datepick");

  // Prevent immediate hiding when clicking inside the calendar
  event.stopPropagation();

  if (
    calendarSection.style.display === "none" ||
    calendarSection.style.display === ""
  ) {
    calendarSection.style.display = "block"; // Show the calendar
    console.log("Calendar opened");
  } else {
    calendarSection.style.display = "none"; // Hide the calendar
    console.log("Calendar closed");
  }
});

// Hide the calendar when clicking anywhere outside or scrolling
function closeCalendar() {
  const calendarSection = document.querySelector(".datepick");
  if (calendarSection.style.display === "block") {
    calendarSection.style.display = "none"; // Hide the calendar
    console.log("Calendar closed due to outside action");
  }
}

// Add global click and scroll listeners
document.addEventListener("click", closeCalendar);
window.addEventListener("scroll", closeCalendar);

// Prevent closing when clicking inside the calendar
document.querySelector(".datepick").addEventListener("click", function (event) {
  event.stopPropagation();
});

// let isScrolling;

// window.addEventListener("scroll", () => {
//   // Action while scrolling
//   console.log("Scrolling...");
//   document.body.classList.add("scrolling"); // Add a class or trigger action

//   // Clear the timeout if it exists
//   clearTimeout(isScrolling);

//   // Set a timeout to detect when scrolling stops
//   isScrolling = setTimeout(() => {
//     console.log("Stopped scrolling.");
//     document.body.classList.remove("scrolling"); // Remove the class or trigger another action
//   }, 300); // Adjust the delay to your preference
// });
// function updateScrollClasses() {
//   const element = document.getElementById("big-nav"); // Replace with your target element
//   if (
//     document.documentElement.scrollHeight >
//     document.documentElement.clientHeight
//   ) {
//     // If the page has scroll (scrollHeight > clientHeight)
//     element.classList.add("animate__backOutRight");
//     element.classList.remove("animate__backOutRight");
//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
//   } else {
//     // If the page has no scroll
//     element.classList.add("no-scroll");
//     element.classList.remove("has-scroll");
//     console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
//   }
// }

// // Run the function on page load and whenever the window resizes
// window.addEventListener("load", updateScrollClasses);
// window.addEventListener("resize", updateScrollClasses);
// Function to handle scroll event
function handleScroll() {
  const item1 = document.getElementById("item1");
  const item2 = document.getElementById("item2");
  const item3 = document.getElementById("big-nav");

  if (window.scrollY > 5) {
    // If the page is scrolled more than 0 pixels
    item1.classList.add("d-none");
    item1.classList.add("d-none");
    item2.classList.remove("d-none");
    item1.classList.add("animate__backInDown");
    // item2.classList.remove("d-none");
    item2.classList.add("animate__backInDown");

    item3.classList.add("d-none");
    console.log(scrollY);
    console.log("there are scroll");
  } else {
    // If the page is at the top
    item1.classList.remove("d-none");
    item2.classList.add("d-none");
    item1.classList.remove("d-none");
    item3.classList.remove("d-none");
    item3.classList.add("animate__backInDown");

    console.log("not there are scroll"); // Uncomment this line to log when the page is at the top when scrolling upwards
  }
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Initialize state on page load
window.addEventListener("load", handleScroll);
let lastScrollPositionn = 0;
const footer = document.querySelector(".footer-in-small-media");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPositionn) {
    // Scrolling down
    footer.classList.remove("show");
  } else {
    // Scrolling up
    footer.classList.add("show");
  }

  lastScrollPositionn = currentScrollPosition;
});

document.querySelectorAll(".property img").forEach((img) => {
  img.addEventListener("click", function () {
    console.log("KKKKKKKKKKKKKK");
    // Get the URL from the data-url attribute
    const link = this.getAttribute("data-url");
    if (link) {
      window.location.href = link; // Redirect to the link
    }
  });
});
