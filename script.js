// Data structure to hold the syllabus for each week
const syllabus = {
  "Week 1": [
    "I/O, Syntax, Basic Data Types, Control Flow and Function",
    "Numpy",
    "Matplotlib",
    "What is Machine learning",
    "Types of Machine learning",
    "Supervised Machine learning",
    "Practice Lab-1",
  ],
  "Week 2": [
    "Regression model",
    "Gradient Descent",
    "Practice on Regression Model and Gradient Descent",
    "Multiple Linear Regression",
    "Gradient Descent in Practice",
    "Practice on Multiple Linear Regression",
    "Practice Lab-2",
  ],
  "Week 3": [
    "Classification with Logistic Regression",
    "Cost Function for Logistic Regression",
    "Practice on Classification with Logistic Regression and Cost Function for Logistic Regression",
    "Gradient Descent for Logistic Regression",
    "Problem of OverFitting",
    "Practice on Gradient Descent for Logistic Regression and Problem of OverFitting",
    "Practice Lab-3",
  ],
};

// Function to update the syllabus content

function updateSyllabus(week) {
  const courseContent = document.querySelector(".course-content");
  const courseHeading = courseContent.querySelector(".course-heading");
  const coursesTop = courseContent.querySelector(".courses-top");
  const coursesBottom = courseContent.querySelector(".courses-bottom");

  // Update the heading
  courseHeading.textContent = week;

  // Clear existing content
  coursesTop.innerHTML = "";
  coursesBottom.innerHTML = "";

  // Add new syllabus items
  syllabus[week].forEach((item, index) => {
    const courseItem = document.createElement("div");
    courseItem.className = "course-item";
    courseItem.textContent = `Day ${index + 1}: ${item}`;

    // Append to the top or bottom section based on the day
    if (index < 4) {
      coursesTop.appendChild(courseItem);
    } else {
      coursesBottom.appendChild(courseItem);
    }
  });
}

// Event listeners for week navigation
// Event listeners for week navigation

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    // Remove active class from all links
    document.querySelectorAll(".nav-link").forEach((navLink) => {
      navLink.classList.remove("active");
    });
    // Add active class to the clicked link
    this.classList.add("active");

    const week = this.textContent.trim();
    updateSyllabus(week);
  });
});

// Initialize with Week 1 syllabus

updateSyllabus("Week 1");
