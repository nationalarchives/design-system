import Prism from "prismjs";
import TNAFrontend from "./TNAFrontend";

const selectThemeFromCookie = () => {
  if (cookies.hasValue("dark-theme", "true")) {
    document.documentElement.classList.remove("tna-template--light-theme");
    document.documentElement.classList.add(`tna-template--dark-theme`);
  } else {
    document.documentElement.classList.remove("tna-template--dark-theme");
    document.documentElement.classList.add(`tna-template--light-theme`);
  }
};

const cookies = new TNAFrontend.Cookies();
if (cookies.isPolicyAccepted("settings")) {
  if (cookies.exists("dark-theme")) {
    selectThemeFromCookie();
  } else {
    cookies.set("dark-theme", false);
  }

  const themeSwitcher = document.createElement("nav");
  themeSwitcher.classList.add(
    "tna-footer__navigation-block",
    "tna-columns__block",
  );
  themeSwitcher.setAttribute("aria-label", "Theme switcher");
  themeSwitcher.innerHTML = `<h3 class="tna-footer__navigation-block-heading tna-heading-m">Themes</h3>
  <ul class="tna-footer__navigation-block-items tna-ul tna-ul--plain"></ul>`;

  const themeSwitcherItems = themeSwitcher.querySelector(
    ".tna-footer__navigation-block-items",
  );

  for (const theme of ["light", "dark"]) {
    const themeSwitcherItem = document.createElement("li");
    themeSwitcherItem.classList.add("tna-footer__navigation-block-item");

    const themeSwitcherButton = document.createElement("button");
    themeSwitcherButton.classList.add("tna-footer__navigation-block-item-link");
    themeSwitcherButton.innerText = `Switch to ${theme} theme`;
    themeSwitcherButton.addEventListener("click", () => {
      cookies.set("dark-theme", theme === "dark");
      selectThemeFromCookie();
    });

    themeSwitcherItem.appendChild(themeSwitcherButton);
    themeSwitcherItems.appendChild(themeSwitcherItem);
  }

  const footerNavigation = document.querySelector(".tna-footer__navigation");
  footerNavigation.appendChild(themeSwitcher);
}

if (navigator.clipboard) {
  const htmlBlocks = document.querySelectorAll(
    ".tna-ds-component-example__code:has(code)",
  );
  htmlBlocks.forEach((htmlBlock) => {
    const copyButton = document.createElement("button");
    copyButton.innerText = "Copy code";
    copyButton.classList.add(
      "tna-ds-component-example__code-copy",
      "tna-button",
      "tna-button--small",
      "tna-button--accent",
      "tna-button--solid-hover",
    );
    copyButton.setAttribute("aria-live", "assertive");
    htmlBlock.appendChild(copyButton);
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(
          htmlBlock.querySelector("code").innerText,
        );
        console.log("Content copied to clipboard");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
      copyButton.innerText = "Code copied";
    });
    copyButton.addEventListener("blur", () => {
      copyButton.innerText = "Copy code";
    });
  });
}

// const exampleCodeBlocks = document.querySelectorAll(
//   ".tna-ds-component-example__code > pre[tabindex='0']",
// );
// exampleCodeBlocks.forEach((exampleCodeBlock) => {
//   exampleCodeBlock.setAttribute("tabindex", "-1");
// });
