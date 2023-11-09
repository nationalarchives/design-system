import Prism from "prismjs";

window.TNAFrontend.initAll();

class Cookies {
  events = {};

  constructor(
    policies = ["usage", "settings"],
    cookiesPolicyKey = "cookies_policy",
  ) {
    this.cookiesPolicyKey = cookiesPolicyKey;
    let allPolicies = {};
    policies.forEach((policy) => {
      allPolicies[policy.toLowerCase()] = false;
    });
    allPolicies = {
      ...allPolicies,
      ...this.policies,
      essential: true,
    };
    this.savePolicies(allPolicies);
  }

  get all() {
    const deserialised = {};
    document.cookie.split(";").forEach((cookie) => {
      const parts = cookie.trim().split("=");
      deserialised[parts[0]] = parts[1];
    });
    return deserialised;
  }

  get policies() {
    return JSON.parse(this.get(this.cookiesPolicyKey) || "{}");
  }

  exists(key) {
    return Object.prototype.hasOwnProperty.call(this.all, key);
  }

  hasValue(key, value) {
    return this.get(key) == value;
  }

  get(key) {
    return this.exists(key) ? decodeURIComponent(this.all[key]) : null;
  }

  set(key, value, options = {}) {
    const {
      maxAge = 60 * 60 * 24 * 365,
      path = "/",
      sameSite = "Lax",
    } = options;
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
      value,
    )}; SameSite=${sameSite}; path=${path}; max-age=${maxAge}; Secure`;
    this.trigger("setCookie", { key, value, maxAge, path, sameSite });
  }

  delete(key, path = "/") {
    this.set(key, "", -1, path);
    this.trigger("deleteCookie", { key, path });
  }

  acceptPolicy(policy) {
    this.setPolicy(policy, true);
    this.trigger("acceptPolicy", { policy });
    this.trigger("changePolicy", { policy });
  }

  rejectPolicy(policy) {
    this.setPolicy(policy, false);
    this.trigger("rejectPolicy", { policy });
    this.trigger("changePolicy", { policy });
  }

  setPolicy(policy, accepted) {
    if (policy === "essential") {
      return;
    }
    this.savePolicies({
      ...this.policies,
      [policy]: accepted,
      essential: true,
    });
    this.trigger("changePolicy", { policy, accepted });
  }

  savePolicies(policies) {
    this.set(this.cookiesPolicyKey, JSON.stringify(policies));
  }

  acceptAllPolicies() {
    const allPolicies = {
      ...this.policies,
    };
    Object.keys(allPolicies).forEach((policy) => (allPolicies[policy] = true));
    this.savePolicies(allPolicies);
    this.trigger("acceptAllPolicies");
  }

  rejectAllPolicies() {
    const allPolicies = {
      ...this.policies,
    };
    Object.keys(allPolicies).forEach((policy) => (allPolicies[policy] = false));
    this.savePolicies(allPolicies);
    this.trigger("rejectAllPolicies");
  }

  isPolicyAccepted(policy) {
    return Object.prototype.hasOwnProperty.call(this.policies, policy)
      ? this.policies[policy] === true
      : null;
  }

  on(event, callback) {
    if (!Object.prototype.hasOwnProperty.call(this.events, event)) {
      this.events[event] = [];
    }
    this.events[event] = [...this.events[event], callback];
  }

  trigger(event, data = {}) {
    if (Object.prototype.hasOwnProperty.call(this.events, event)) {
      this.events[event].forEach((eventToTrigger) =>
        eventToTrigger.call(this, data),
      );
    }
  }
}

const cookies = new Cookies();
// const cookies = new window.TNAFrontend.Cookies();

const setThemeFromCookie = () => {
  if (cookies.hasValue("dark_theme", "true")) {
    document.documentElement.classList.remove("tna-template--light-theme");
    document.documentElement.classList.add(`tna-template--dark-theme`);
    document
      .getElementById("prism-css")
      .setAttribute(
        "href",
        "/design-system/static/styles/prism-tomorrow.min.css",
      );
  } else {
    document.documentElement.classList.remove("tna-template--dark-theme");
    document.documentElement.classList.add(`tna-template--light-theme`);
    document
      .getElementById("prism-css")
      .setAttribute("href", "/design-system/static/styles/prism.min.css");
  }
};

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

const addThemeSwitcher = () => {
  if (document.getElementById("theme-switcher")) {
    return;
  }

  const topNavigation = document.querySelector(
    ".tna-header__top-navigation-items",
  );

  const themeButtonsWrapper = document.createElement("li");
  themeButtonsWrapper.classList.add("tna-header__top-navigation-item");
  themeButtonsWrapper.setAttribute("id", "theme-switcher");

  const lightThemeButton = document.createElement("button");
  lightThemeButton.classList.add(
    "tna-header__top-navigation-item-link",
    "tna-header__top-navigation-item-link--light",
  );
  lightThemeButton.innerHTML = `<i class="fa-solid fa-fw fa-sun"></i>Switch to light theme`;

  const darkThemeButton = document.createElement("button");
  darkThemeButton.classList.add(
    "tna-header__top-navigation-item-link",
    "tna-header__top-navigation-item-link--dark",
  );
  darkThemeButton.innerHTML = `<i class="fa-solid fa-fw fa-moon"></i>Switch to dark theme`;

  lightThemeButton.addEventListener("click", () => {
    cookies.set("dark_theme", false);
    setThemeFromCookie();
    darkThemeButton.focus();
  });

  darkThemeButton.addEventListener("click", () => {
    cookies.set("dark_theme", true);
    setThemeFromCookie();
    lightThemeButton.focus();
  });

  themeButtonsWrapper.appendChild(lightThemeButton);
  themeButtonsWrapper.appendChild(darkThemeButton);
  topNavigation.prepend(themeButtonsWrapper);
};

const removeThemeSwitcher = () => {
  const themeSwitcher = document.getElementById("theme-switcher");
  if (themeSwitcher) {
    themeSwitcher.remove();
  }
};

document
  .querySelectorAll("[data-setcookiepreference][data-setcookiepreferencevalue]")
  .forEach((setCookiePreference) => {
    setCookiePreference.addEventListener("click", () => {
      if (
        setCookiePreference.getAttribute("data-setcookiepreferencevalue") ===
        "true"
      ) {
        cookies.acceptPolicy(
          setCookiePreference.getAttribute("data-setcookiepreference"),
        );
      } else {
        cookies.rejectPolicy(
          setCookiePreference.getAttribute("data-setcookiepreference"),
        );
      }
    });
  });

if (cookies.isPolicyAccepted("settings")) {
  if (cookies.exists("dark_theme")) {
    setThemeFromCookie();
  } else {
    cookies.set("dark_theme", false);
  }
  addThemeSwitcher();
}

cookies.on("changePolicy", (data) => {
  updateCookiePreferenceDisplays();
});

cookies.on("acceptPolicy", (data) => {
  if (data.policy === "settings") {
    addThemeSwitcher();
  }
});

cookies.on("rejectPolicy", (data) => {
  if (data.policy === "settings") {
    cookies.delete("dark_theme");
    removeThemeSwitcher();
    setThemeFromCookie();
  }
});

if (navigator.clipboard) {
  const htmlBlocks = document.querySelectorAll(
    ".tna-ds-component-example__code:has(pre > code)",
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
    htmlBlock.querySelector('pre[class*="language-"]').classList.add("padded");
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

const showOnJsBlocks = document.querySelectorAll(".tna-ds--show-on-js");
showOnJsBlocks.forEach((hideOnJsBlock) => {
  hideOnJsBlock.classList.remove("tna-ds--show-on-js");
});
