// Configuración global de menús
window.SUBJECTS = [
  {
    label: "Web Design",
    url: "#",
    subitems: [
      { label: "HTML", url: "html.html" },
      { label: "CSS", url: "css.html" },
      { label: "jQuery", url: "jquery.html" },
      { label: "Python", url: "python.html" }
    ]
  },
  { label: "Apps Design", url: "apps.html" },
  { label: "Marketing", url: "marketing.html" },
  { label: "Research", url: "research.html" },
  { label: "SEO", url: "seo.html" }
];

window.MENU = [
  { label: "Home", url: "index.html" },
  { label: "About", url: "about.html" },
  { label: "Cursos", url: "course.html" },
  { label: "Profesores", url: "teacher.html" },
  {
    label: "Blog",
    url: "#",
    subitems: [
      { label: "Blog List", url: "blog.html" },
      { label: "Blog Detail", url: "single.html" }
    ]
  },
  { label: "Contact", url: "contact.html" }
];

window.EXTRA_BTN = {
  label: "Join Now",
  url: "#",
  class: "btn btn-primary py-2 px-4 ml-auto d-none d-lg-block"
};
