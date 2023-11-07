import Prism from "prismjs";
import TNAFrontend from "./TNAFrontend";

const setThemeFromCookie = () => {
  if (cookies.hasValue("dark-theme", "true")) {
    document.documentElement.classList.remove("tna-template--light-theme");
    document.documentElement.classList.add(`tna-template--dark-theme`);
  } else {
    document.documentElement.classList.remove("tna-template--dark-theme");
    document.documentElement.classList.add(`tna-template--light-theme`);
  }
};

const cookies = new TNAFrontend.Cookies();

const updateCookiePreferenceDisplays = () => {
  const cookiePreferenceDisplays = document.querySelectorAll(
    "[data-showcookiepreference]",
  );
  cookiePreferenceDisplays.forEach((cookiePreferenceDisplay) => {
    cookiePreferenceDisplay.innerText = cookies.isPolicyAccepted(
      cookiePreferenceDisplay.getAttribute("data-showcookiepreference"),
    )
      ? "accepted"
      : "declined";
  });
};
updateCookiePreferenceDisplays();

const setCookiePreferences = document.querySelectorAll(
  "[data-setcookiepreference][data-setcookiepreferencevalue]",
);
setCookiePreferences.forEach((setCookiePreference) => {
  setCookiePreference.addEventListener("click", () => {
    console.log(cookies.policies);
    console.log(cookies.allPolicies);
    if (
      setCookiePreference.getAttribute("data-setcookiepreferencevalue") ===
      "true"
    ) {
      console.log(
        "A",
        setCookiePreference.getAttribute("data-setcookiepreference"),
      );
      cookies.acceptPolicy(
        setCookiePreference.getAttribute("data-setcookiepreference"),
      );
    } else {
      console.log(
        "R",
        setCookiePreference.getAttribute("data-setcookiepreference"),
      );
      cookies.rejectPolicy(
        setCookiePreference.getAttribute("data-setcookiepreference"),
      );
    }
    console.log(cookies.policies);
    console.log(cookies.allPolicies);
    updateCookiePreferenceDisplays();
  });
});

const addThemeSwitcher = () => {
  const topNavigation = document.querySelector(
    ".tna-header__top-navigation-items",
  );

  const themeButtonsWrapper = document.createElement("li");
  themeButtonsWrapper.classList.add("tna-header__top-navigation-item");

  const lightThemeButton = document.createElement("button");
  lightThemeButton.classList.add(
    "tna-header__top-navigation-item-link",
    "tna-header__top-navigation-item-link--light",
  );
  lightThemeButton.innerHTML = `<i class="fa-solid fa-sun"></i>Switch to light theme`;

  const darkThemeButton = document.createElement("button");
  darkThemeButton.classList.add(
    "tna-header__top-navigation-item-link",
    "tna-header__top-navigation-item-link--dark",
  );
  darkThemeButton.innerHTML = `<i class="fa-solid fa-moon"></i>Switch to dark theme`;

  lightThemeButton.addEventListener("click", () => {
    cookies.set("dark-theme", false);
    setThemeFromCookie();
    darkThemeButton.focus();
  });

  darkThemeButton.addEventListener("click", () => {
    cookies.set("dark-theme", true);
    setThemeFromCookie();
    lightThemeButton.focus();
  });

  themeButtonsWrapper.appendChild(lightThemeButton);
  themeButtonsWrapper.appendChild(darkThemeButton);
  topNavigation.prepend(themeButtonsWrapper);
};

if (cookies.isPolicyAccepted("settings")) {
  if (cookies.exists("dark-theme")) {
    setThemeFromCookie();
  } else {
    cookies.set("dark-theme", false);
  }
  addThemeSwitcher();
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

const hideOnJsBlocks = document.querySelectorAll(".tna-ds--hide-on-js");
hideOnJsBlocks.forEach((hideOnJsBlock) => {
  hideOnJsBlock.style.display = "none";
});
