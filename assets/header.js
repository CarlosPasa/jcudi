// assets/header.js
(function () {
  const onReady = (fn) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  };

  onReady(function () {
    const root = document.getElementById("site-header");
    if (!root) {
      console.warn("[header.js] No se encontró #site-header en el DOM");
      return;
    }

    const SUBJECTS = Array.isArray(window.SUBJECTS) ? window.SUBJECTS : [];
    const MENU = Array.isArray(window.MENU) ? window.MENU : [];
    const EXTRA_BTN = window.EXTRA_BTN || {
      label: "Join Now",
      url: "#",
      class: "btn btn-primary py-2 px-4 ml-auto d-none d-lg-block",
    };

    const esc = (s) =>
      String(s ?? "").replace(/[&<>"']/g, (m) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m])
      );

    const currentPage = (location.pathname.split("/").pop() || "index.html");
    const isActive = (url) => (url && url.split("/").pop()) === currentPage;
    const subHasActive = (subs = []) => subs.some((s) => isActive(s.url));

    const buildSubjects = () => `
      <div class="col-lg-3 d-none d-lg-block">
        <a class="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none"
           data-toggle="collapse" href="#navbar-vertical" style="height:67px;padding:0 30px;">
          <h5 class="text-primary m-0"><i class="fa fa-book-open mr-2"></i>Subjects</h5>
          <i class="fa fa-angle-down text-primary"></i>
        </a>
        <nav class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
             id="navbar-vertical" style="width:calc(100% - 30px);z-index:9;">
          <div class="navbar-nav w-100">
            ${
              SUBJECTS.map((s) => {
                if (s.subitems && s.subitems.length) {
                  const parentActive = subHasActive(s.subitems);
                  return `
                    <div class="nav-item dropdown">
                      <a href="${esc(s.url || "#")}" class="nav-link ${parentActive ? "active" : ""}" data-toggle="dropdown">
                        ${esc(s.label)} <i class="fa fa-angle-down float-right mt-1"></i>
                      </a>
                      <div class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                        ${s.subitems
                          .map(
                            (si) => `
                              <a href="${esc(si.url)}" class="dropdown-item ${isActive(si.url) ? "active" : ""}">
                                ${esc(si.label)}
                              </a>`
                          )
                          .join("")}
                      </div>
                    </div>
                  `;
                } else {
                  return `
                    <a href="${esc(s.url)}" class="nav-item nav-link ${isActive(s.url) ? "active" : ""}">
                      ${esc(s.label)}
                    </a>`;
                }
              }).join("")
            }
          </div>
        </nav>
      </div>
    `;

    const buildMainMenu = () => `
      <div class="col-lg-9">
        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
          <a href="index.html" class="text-decoration-none d-block d-lg-none">
            <h1 class="m-0"><span class="text-primary">E</span>COURSES</h1>
          </a>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav py-0">
              ${
                MENU.map((it) => {
                  if (it.subitems && it.subitems.length) {
                    const parentActive = subHasActive(it.subitems);
                    return `
                      <div class="nav-item dropdown">
                        <a href="${esc(it.url || "#")}" class="nav-link dropdown-toggle ${parentActive ? "active" : ""}" data-toggle="dropdown">
                          ${esc(it.label)}
                        </a>
                        <div class="dropdown-menu rounded-0 m-0">
                          ${it.subitems
                            .map(
                              (sub) => `
                                <a href="${esc(sub.url)}" class="dropdown-item ${isActive(sub.url) ? "active" : ""}">
                                  ${esc(sub.label)}
                                </a>`
                            )
                            .join("")}
                        </div>
                      </div>
                    `;
                  } else {
                    return `
                      <a href="${esc(it.url)}" class="nav-item nav-link ${isActive(it.url) ? "active" : ""}">
                        ${esc(it.label)}
                      </a>`;
                  }
                }).join("")
              }
            </div>
            <a href="${esc(EXTRA_BTN.url || "#")}" class="${esc(EXTRA_BTN.class || "")}">
              ${esc(EXTRA_BTN.label || "Join Now")}
            </a>
          </div>
        </nav>
      </div>
    `;

    // Topbar + Navbar
    root.innerHTML = `
      <div class="container-fluid d-none d-lg-block">
        <div class="row align-items-center py-4 px-xl-5">
          <div class="col-lg-3">
            <a href="index.html" class="text-decoration-none">
              <h1 class="m-0"><span class="text-primary">JC</span>GUIA</h1>
            </a>
          </div>
          <div class="col-lg-3 text-right">
            <div class="d-inline-flex align-items-center">
              <i class="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
              <div class="text-left">
                <h6 class="font-weight-semi-bold mb-1">Nosotros</h6>
                <small>123 Street, New York, USA</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 text-right">
            <div class="d-inline-flex align-items-center">
              <i class="fa fa-2x fa-envelope text-primary mr-3"></i>
              <div class="text-left">
                <h6 class="font-weight-semi-bold mb-1">Email</h6>
                <small>jc@gmail.com</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 text-right">
            <div class="d-inline-flex align-items-center">
              <i class="fa fa-2x fa-phone text-primary mr-3"></i>
              <div class="text-left">
                <h6 class="font-weight-semi-bold mb-1">Contáctanos</h6>
                <small>+51 345 6789</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row border-top px-xl-5">
          ${buildSubjects()}
          ${buildMainMenu()}
        </div>
      </div>
    `;

    console.log("[header.js] header renderizado ✔");
  });
})();
