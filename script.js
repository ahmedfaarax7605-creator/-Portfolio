// Student Dashboard

const courses = [
  { title: "Web Development", instructor: "Ms. Ali", progress: 65 },
  { title: "Mathematics", instructor: "Mr. Hassan", progress: 40 },
];

function renderCourses() {
  const list = document.getElementById("courseList");
  list.innerHTML = courses
    .map(
      (course, index) => `
      <div class="course-card">
        <div class="course-info">
          <h3>${course.title}</h3>
          <p>${course.instructor}</p>
        </div>
        <div class="progress">
          <div class="progress-bar" style="width: ${course.progress}%"></div>
        </div>
        <span class="percent">${course.progress}%</span>
        <button class="btn-complete" data-index="${index}">Mark Complete</button>
      </div>
    `
    )
    .join("");
}

function setDate() {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  document.getElementById("date").textContent = date;
}

document.getElementById("courseList").addEventListener("click", (event) => {
  const button = event.target.closest(".btn-complete");
  if (!button) return;
  const index = Number(button.dataset.index);
  courses[index].progress = 100;
  renderCourses();
});

renderCourses();
setDate();
