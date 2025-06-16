document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");
  let menuItems = document.querySelectorAll("nav ul li");

  

  sections.forEach((section) => {
    if (section.classList.contains("active")) {
      window.location.hash = section.id;
    }
  });

  function activateSection(sectionId) {
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  function activateMenuItem(sectionId) {
    menuItems.forEach((menuItem) => {
      if (menuItem.dataset.id === sectionId) {
        menuItem.classList.add("active");
      } else {
        menuItem.classList.remove("active");
      }
    });
  }

  window.addEventListener("hashchange", function () {
    const currentHash = window.location.hash;
    console.log(currentHash);

    activateSection(currentHash.slice(1));
    activateMenuItem(currentHash.slice(1));
  });

  

//   let canScroll = true;

//   window.addEventListener("wheel", (e) => {
//     if (!canScroll) return;
//     canScroll = false;

//     for (let i = 0; i < sections.length; i++) {
//       if (sections[i].classList.contains("active")) {
//         let newIndex = i;

//         if (e.deltaY > 0 && i < sections.length - 1) {
//           newIndex = i + 1;
//         } else if (e.deltaY < 0 && i > 0) {
//           newIndex = i - 1;
//         }

//         activateSection(sections[newIndex].id);
//         window.location.hash = sections[newIndex].id;
//         console.log(newIndex);

//         break;
//       }
//     }

//     setTimeout(() => {
//       canScroll = true;
//     }, 500);
//   });


  // Certificates Animation
  const certificates = document.querySelectorAll(".certificate");
  const buttonCertificates = document.querySelector(".button-certificates");

  console.log(buttonCertificates);
  

  certificates.forEach((certificate, index) => {
    certificate.style.animationDelay = `${index * 0.2 + 0.5}s`;
  })

  buttonCertificates.style.animationDelay = `${certificates.length * 0.2 + 0.5}s`;

  // Projects Animation
  const projects = document.querySelectorAll(".card");
  const buttonProjects = document.querySelector(".button-projects");

  projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.2 + 0.5}s`;
  })

  buttonProjects.style.animationDelay = `${projects.length * 0.2 + 0.5}s`;

  // Contact Animation
  const contact = document.querySelectorAll(".contact");
  const copyright = document.querySelector(".copyright");

  contact.forEach((contact, index) => {
    contact.style.animationDelay = `${index * 0.2 + 1.5}s`;
  })
  copyright.style.animationDelay = `${contact.length * 0.2 + 1.5}s`;

  // Toggle
  const toggle = document.querySelector("#toggle");
  const nav = document.querySelector("#nav-list");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
  })

});
