function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
    document.getElementById("github").style.fill = "black";
    document.getElementById("mail").style.fill = "black";
    document.getElementById("codepen").style.fill = "black";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
    document.getElementById("github").style.fill = "white";
    document.getElementById("mail").style.fill = "white";
    document.getElementById("codepen").style.fill = "white";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
    document.getElementById("github").style.fill = "black";
    document.getElementById("mail").style.fill = "black";
    document.getElementById("codepen").style.fill = "black";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
    document.getElementById("github").style.fill = "white";
    document.getElementById("mail").style.fill = "black";
    document.getElementById("codepen").style.fill = "white";
  }
  localStorage.setItem("theme", mode);
}

let theme = localStorage.getItem("theme");

// Fetching the theme from the local storage if available
if (theme) setTheme(theme);
else setTheme("light");

let themeDots = document.getElementsByClassName("theme-dot");

for (let theme = 0; themeDots.length > theme; theme++) {
  themeDots[theme].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

class Project {
  constructor({
    projectName,
    projectDescription,
    projectImage,
    codeLink,
    demoLink
  }) {
    this.title = this.createHeadingTag({
      headingType: "h6",
      className: "post-title",
      text: projectName
    });

    this.description = this.createParaTag({
      className: "post-intro",
      text: projectDescription
    });

    this.demo = this.createAttributeTag({
      href: demoLink,
      text: "Live Demo"
    });

    this.code = this.createAttributeTag({
      href: codeLink,
      text: "Source Code"
    });

    this.projectImage = this.createImageTag({
      className: "thumbnail",
      src: projectImage,
      alt: projectName
    });

    this.sourceCodeDiv = this.createDiv({
      className: "source-code",
      childElements: [this.demo, this.code]
    });

    this.cardHeaderDiv = this.createDiv({
      className: "post-preview",
      childElements: [this.title, this.description, this.sourceCodeDiv]
    });

    this.cardComponent = this.createDiv({
      className: "post",
      childElements: [this.projectImage, this.cardHeaderDiv]
    });
  }

  createAttributeTag({ href = "", target = "_blank", text }) {
    const tagDocument = document.createElement("a");
    tagDocument.href = href;
    tagDocument.target = target;
    const tagTextElement = document.createTextNode(text);
    tagDocument.appendChild(tagTextElement);
    return tagDocument;
  }

  createParaTag({ className = null, text = "" }) {
    const paraElement = document.createElement("p");
    if (className) paraElement.className = className;

    const paraText = document.createTextNode(text);
    paraElement.appendChild(paraText);
    return paraElement;
  }

  createDiv({ className = null, childElements = [] }) {
    const divElement = document.createElement("div");
    if (className) divElement.className = className;
    childElements.forEach((element) => {
      divElement.appendChild(element);
    });
    return divElement;
  }

  createHeadingTag({ headingType = "h1", className = null, text = "" }) {
    const headingTag = document.createElement(headingType);
    if (className) headingTag.className = className;
    const headingText = document.createTextNode(text);
    headingTag.appendChild(headingText);
    return headingTag;
  }

  createImageTag({ className = null, src = "", alt = "" }) {
    const imageTag = document.createElement("img");
    if (className) imageTag.className = className;
    imageTag.src = src;
    imageTag.alt = alt;
    return imageTag;
  }

  createProjectCard() {
    return this.cardComponent;
  }
}

const projects = [
  {
    projectName: "Playway",
    projectDescription:
      "A Youtube like responsive video library with all sorts of functionalities.",
    projectImage: "/images/projects/playway.png",
    codeLink: "https://github.com/Chiragmodi01/videoLibrary-react",
    demoLink: "https://playway.vercel.app/"
  },
  {
    projectName: "Madré Linda fashion house",
    projectDescription:
      "A fully-fledged Ecommerce website of a luxury clothing brand",
    projectImage: "/images/projects/madrelinda.png",
    codeLink: "https://github.com/Chiragmodi01/MadreLinda-react",
    demoLink: "https://madrelinda.netlify.app/"
  },
  {
    projectName: "Notero",
    projectDescription:
      "Google Keep like note taking service, one-stop solution to manage your notes and tasks",
    projectImage: "/images/projects/notero.png",
    codeLink: "https://github.com/Chiragmodi01/Notero-react",
    demoLink: "https://notero-v1.netlify.app/"
  },
  {
    projectName: "Beluga UI",
    projectDescription:
      "A component library, to help design your project faster and better. Built using Vanilla JavaScript and CSS.",
    projectImage: "/images/projects/beluga.png",
    codeLink: "https://github.com/Chiragmodi01/BelugaUi",
    demoLink: "https://beluga-ui.netlify.app/"
  },
  {
    projectName: "FlashTabs",
    projectDescription:
      "A chrome extension to give your browser's default homepage, clean and modern look with FlashTabs Dashboard.",
    projectImage: "/images/projects/flashtabs.png",
    codeLink: "https://github.com/Chiragmodi01/tab-extention",
    demoLink: "https://chrome.google.com/webstore/detail/flashtabs/igeijfhnknbfodmpipaafagjhgddlefn?utm_source=google&utm_medium=cpc&utm_campaign=20282050520&utm_content=151103784475&utm_term=extensions%20chrome&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVUjOoAhnwhHBky-YRlLIm_r3urJvVsnP8_jaI2mrR9JAxVER8nUS1YaAgY3EALw_wcB"
  },
  {
    projectName: "Weather Forecast Dashboard",
    projectDescription:
      "Discover weather forecast with our user-friendly, responsive and intuitive dashboard.",
    projectImage: "/images/projects/weatherdashboard.png",
    codeLink: "https://github.com/Chiragmodi01/weather-forecast-dashboard",
    demoLink: "https://weather-forecast-dashboard-cm.netlify.app/"
  },
];

const projects2 = [
  {
    projectName: "My Pet Care",
    projectDescription:
      "An dummy pet related blog website. An eye appealing ui to show some pure CSS skills",
    projectImage: "/images/projects/mypetcare.png",
    codeLink: "https://github.com/Chiragmodi01/My-Pet-Care",
    demoLink: "https://my-pet-care-cm.netlify.app/"
  }
];

function validateForm() {
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (name === "" || subject === "" || message === "") {
      alert("All fields must be filled out");
      return false;
  }
  return true;
}

const createCards = () => {
  projects.map((project) => {
    const projectCard = new Project({
      projectName: project.projectName,
      projectDescription: project.projectDescription,
      projectImage: project.projectImage,
      codeLink: project.codeLink,
      demoLink: project.demoLink
    }).createProjectCard();
    document.getElementById("post-wrapper-id").appendChild(projectCard);
  });
  projects2.map((project) => {
    const projectCard = new Project({
      projectName: project.projectName,
      projectDescription: project.projectDescription,
      projectImage: project.projectImage,
      codeLink: project.codeLink,
      demoLink: project.demoLink
    }).createProjectCard();
    document.getElementById("post-wrapper2-id").appendChild(projectCard);
  });
};
createCards();