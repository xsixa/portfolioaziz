const ProjectsData = [
  {
    name: "Mcodo :Learn Coding with AI",
    logo: "https://play-lh.googleusercontent.com/au3QvRNWZiRamIYLRb0irFPno-xuzSJDzrL1Te0vGx7889ROiOp3Sr7dIByGomFDJpbX=w480-h960-rw",
    description:
      "Powerful code compiler, AI chat assistant, interactive coding quizzes, and chapter-based learning resources.",
    link: "https://play.google.com/store/apps/details?id=com.sohezsoft.mcodo&hl=en_IN",
  },
  {
    name: "Student Portal App",
    logo: "https://cdn-icons-png.flaticon.com/128/14664/14664511.png",
    description:
      "Student Portal App, build using kotlin.",
    link: "https://github.com/sohez/StudentPortalApp",
  },



];

const ProjectsDataHTML = ProjectsData.map(
  (item) => `
           <div class="projects-card">
            <div>
              <img loading="lazy" src="${item.logo}" alt="${item.name}">
              <h3>${item.name}</h3>
            </div>
            <div>
              <p>${item.description}</p>
              <a href="${item.link}" title="${item.name}" target="_blank">View</a>
            </div>
          </div>
      `
).join("");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML =
    ProjectsDataHTML;
});
