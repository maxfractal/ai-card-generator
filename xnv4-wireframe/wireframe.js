const menuButton = document.querySelector(".wf-menu-button");
const siteMenu = document.querySelector("#site-menu");

if (menuButton && siteMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteMenu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-tabs]").forEach((tabs) => {
  const buttons = Array.from(tabs.querySelectorAll("[role='tab']"));
  const panels = Array.from(tabs.querySelectorAll("[role='tabpanel']"));

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => {
        item.classList.toggle("is-active", item === button);
        item.setAttribute("aria-selected", String(item === button));
      });

      panels.forEach((panel) => {
        const isTarget = panel.id === button.getAttribute("aria-controls");
        panel.classList.toggle("is-active", isTarget);
        panel.hidden = !isTarget;
      });
    });
  });
});
