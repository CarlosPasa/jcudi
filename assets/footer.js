(function () {
  const root = document.getElementById("site-footer");
  if (!root) return;

  // ----------------- helpers -----------------
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (m) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m])
    );

  const y = new Date().getFullYear();

  const cfg = Object.assign(
    {
      brand: { name: "ECOURSES", slogan: "Best education from your home", logoUrl: null },
      contact: { address: "123 Street, New York, USA", email: "info@example.com", phone: "+1 234 567 890", hours: "Mon - Fri: 9:00 - 18:00" },
      social: [
        { icon: "fab fa-twitter", url: "#" },
        { icon: "fab fa-facebook-f", url: "#" },
        { icon: "fab fa-linkedin-in", url: "#" }
      ],
      quickLinks1: [],
      quickLinks2: [],
      newsletter: { enabled: true, action: "#", placeholder: "Your email", cta: "Subscribe" },
      bottom: {
        leftText: "© {YEAR} ECOURSES. All Rights Reserved.",
        rightLinks: []
      }
    },
    window.FOOTER_CONFIG || {}
  );

  // ----------------- building blocks -----------------
  const brandBlock = () => {
    const hasLogo = !!cfg.brand.logoUrl;
    return `
      <div class="col-lg-3 col-md-6 mb-5">
        <h1 class="text-white mb-3">
          ${
            hasLogo
              ? `<img src="${esc(cfg.brand.logoUrl)}" alt="${esc(cfg.brand.name)}" style="max-height:48px;">`
              : `<span class="text-primary">${esc(cfg.brand.name.charAt(0) || "E")}</span>${esc(cfg.brand.name.slice(1) || "COURSES")}`
          }
        </h1>
        <p>${esc(cfg.brand.slogan)}</p>
        <div class="d-flex justify-content-start mt-4">
          ${cfg.social
            .map(
              (s) => `
            <a class="btn btn-outline-light btn-square mr-2" href="${esc(s.url)}" aria-label="${esc(s.icon)}" rel="noopener">
              <i class="${esc(s.icon)}"></i>
            </a>`
            )
            .join("")}
        </div>
      </div>
    `;
  };

  const contactBlock = () => `
    <div class="col-lg-3 col-md-6 mb-5">
      <h4 class="text-white mb-4">Contáctanos</h4>
      <p><i class="fa fa-map-marker-alt mr-2"></i>${esc(cfg.contact.address)}</p>
      <p><i class="fa fa-envelope mr-2"></i>${esc(cfg.contact.email)}</p>
      <p><i class="fa fa-phone-alt mr-2"></i>${esc(cfg.contact.phone)}</p>
      <p><i class="fa fa-clock mr-2"></i>${esc(cfg.contact.hours)}</p>
    </div>
  `;

  const linksList = (title, items) => `
    <div class="col-lg-3 col-md-6 mb-5">
      <h4 class="text-white mb-4">${esc(title)}</h4>
      <div class="d-flex flex-column justify-content-start">
        ${items
          .map(
            (it) => `
          <a class="text-white-50 mb-2" href="${esc(it.url)}"><i class="fa fa-angle-right mr-2"></i>${esc(it.label)}</a>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  const newsletterBlock = () => {
    if (!cfg.newsletter.enabled) return "";
    return `
      <div class="col-lg-3 col-md-6 mb-5">
        <h4 class="text-white mb-4">Newsletter</h4>
        <form action="${esc(cfg.newsletter.action)}" method="post" onsubmit="return false;">
          <div class="form-group">
            <input type="email" class="form-control border-0 py-3" placeholder="${esc(cfg.newsletter.placeholder)}" required>
          </div>
          <button class="btn btn-primary btn-block border-0 py-3" type="submit">${esc(cfg.newsletter.cta)}</button>
        </form>
      </div>
    `;
  };

  const bottomBar = () => {
    const left = esc(cfg.bottom.leftText.replace("{YEAR}", String(y)));
    const right = (cfg.bottom.rightLinks || [])
      .map((l, i) => `<a class="text-white-50" href="${esc(l.url)}">${esc(l.label)}</a>`)
      .join(' <span class="px-2">|</span> ');
    return `
        <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style="border-color: rgba(256, 256, 256, .1) !important;">
            <div class="row">
                <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                    <p class="m-0 text-white">&copy; <a href="#">JC </a>. All Rights Reserved. Designed by <a href="#">JC</a>
                    </p>
                </div>
                <div class="col-lg-6 text-center text-md-right">
                    <ul class="nav d-inline-flex">
                        <li class="nav-item">
                            <a class="nav-link text-white py-0" href="#">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white py-0" href="#">Terms</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white py-0" href="#">FAQs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white py-0" href="#">Help</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
  };

  // ----------------- layout -----------------
  root.innerHTML = `
    <!-- Footer Start -->
    <!--div class="container-fluid bg-dark text-white-50 pt-5 mt-5">
      <div class="container pt-5">
        <div class="row">
          ${brandBlock()}
          ${contactBlock()}
          ${linksList("Enlaces Rápidos", cfg.quickLinks1)}
          ${cfg.newsletter.enabled ? newsletterBlock() : linksList("Recursos", cfg.quickLinks2)}
        </div>
      </div>
    </div-->
    ${bottomBar()}
    <!-- Footer End -->
  `;

  // Si quieres manejar el submit del newsletter sin recargar:
  root.querySelectorAll('form[action="#"]').forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]')?.value || "";
      if (!email) return;
      alert("Gracias por suscribirte: " + email);
      form.reset();
    });
  });
})();
