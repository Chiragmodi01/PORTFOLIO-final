function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
    document.getElementById("github").style.fill = "black";
    document.getElementById("codesandbox").style.fill = "black";
    document.getElementById("codepen").style.fill = "black";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
    document.getElementById("github").style.fill = "white";
    document.getElementById("codesandbox").style.fill = "white";
    document.getElementById("codepen").style.fill = "white";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
    document.getElementById("github").style.fill = "black";
    document.getElementById("codesandbox").style.fill = "black";
    document.getElementById("codepen").style.fill = "black";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
    document.getElementById("github").style.fill = "white";
    document.getElementById("codesandbox").style.fill = "black";
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
    projectName: "InstaPound",
    projectDescription:
      "InstaPound is an photo-gallery app where you can upload images publically.",
    projectImage: "/images/projects/instapound.png",
    codeLink: "https://github.com/Chiragmodi01/InstaPound",
    demoLink: "https://instapound.netlify.app/"
  },
  {
    projectName: "Notero",
    projectDescription:
      "Notero is an one-stop solution to manage your notes and tasks efficiently using markdown functionality",
    projectImage: "/images/projects/notero.png",
    codeLink: "https://github.com/Chiragmodi01/Notero",
    demoLink: "https://notero.netlify.app/"
  },
  {
    projectName: "Vibez",
    projectDescription:
      "Vibez is chat web app where you just have to sign in through google and you can send messages.",
    projectImage: "/images/projects/vibez.png",
    codeLink: "https://github.com/Chiragmodi01/Vibez",
    demoLink: "https://vibez-chat.netlify.app/"
  },
  {
    projectName: "Tannuki",
    projectDescription:
      "Tannuki is an Anime listing application, consumes AniList api. Search and explore any anime",
    projectImage: "/images/projects/tannuki.png",
    codeLink: "https://github.com/Chiragmodi01/tannuki",
    demoLink: "https://tannuki.netlify.app/"
  },
  {
    projectName: "Penny Desk",
    projectDescription:
      "Penny desk is a chrome extension, helps you manage your budget while shopping.",
    projectImage: "/images/projects/pennydesk.png",
    codeLink: "https://github.com/Chiragmodi01/Penny-Desk",
    demoLink: "https://github.com/Chiragmodi0so 1/Penny-Desk"
  }
];

const projects2 = [
  {
    projectName: "My Pet Care",
    projectDescription:
      "An dummy pet related blog website. An eye appealing ui to show some pure CSS skills",
    projectImage: "/images/projects/mypetcare.png",
    codeLink: "https://github.com/Chiragmodi01/My-Pet-Care",
    demoLink: "https://my-pet-care-cm.netlify.app/"
  },
  {
    projectName: "Live Clock",
    projectDescription:
      "Live Clock is a simple and elegant clock that shows current time.",
    projectImage: "/images/projects/clock.png",
    codeLink: "https://codepen.io/chiragmodi01/pen/OJmVaOg",
    demoLink: "https://codepen.io/chiragmodi01/pen/OJmVaOg"
  },
  {
    projectName: "Flag emoji interpreter",
    projectDescription:
      "flag emoji interpreter helps understand which flag belongs to which conutry.",
    projectImage: "/images/projects/flag.png",
    codeLink: "https://github.com/Chiragmodi01/flag-emoji-interpreter",
    demoLink: "https://iezkm.csb.app/"
  },
  {
    projectName: "Form Validation",
    projectDescription:
      "Just a form validation component, that gives error if any field is empty or filled incorrectly.",
    projectImage: "/images/projects/form.png",
    codeLink: "https://codesandbox.io/s/winter-dew-fizuq",
    demoLink: "https://fizuq.csb.app/"
  },
  {
    projectName: "Faq accordion card",
    projectDescription:
      "A simple and sweet Faq accordion card, created with pure CSS",
    projectImage: "/images/projects/faqcard.png",
    codeLink: "https://github.com/Chiragmodi01/faq-accordion-card",
    demoLink: "https://faq-accordion-chirag.netlify.app/"
  },
  {
    projectName: "Speak to Pirates",
    projectDescription:
      "An application built with vanila Js and funtranslation API, helps translate to pirates language.",
    projectImage: "/images/projects/pirate.png",
    codeLink: "https://github.com/Chiragmodi01/speak-to-Pirates",
    demoLink: "https://replit.com/@chirag01/CLI-1?embed=1&output=1"
  },
  {
    projectName: "How well do you know me CLI",
    projectDescription:
      "A fun CLI Quiz App built using vanila Javascript and NodeJs.",
    projectImage: "/images/projects/cli.png",
    codeLink: "https://github.com/Chiragmodi01/CLI-01",
    demoLink: "https://replit.com/@chirag01/CLI-1?embed=1&output=1"
  }
];

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