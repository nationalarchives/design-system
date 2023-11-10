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

const cookies = window.TNAFrontend?.Cookies
  ? new window.TNAFrontend.Cookies()
  : new Cookies();

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
    "[data-showcookiepreference][data-showcookiepreferenceonaccepted][data-showcookiepreferenceonrejected]",
  );
  cookiePreferenceDisplays.forEach((cookiePreferenceDisplay) => {
    cookiePreferenceDisplay.textContent = cookies.isPolicyAccepted(
      cookiePreferenceDisplay.getAttribute("data-showcookiepreference"),
    )
      ? cookiePreferenceDisplay.getAttribute(
          "data-showcookiepreferenceonaccepted",
        )
      : cookiePreferenceDisplay.getAttribute(
          "data-showcookiepreferenceonrejected",
        );
  });

  document
    .querySelectorAll(
      "[data-setcookiepreference][data-setcookiepreferencevalue]",
    )
    .forEach((setCookiePreference) => {
      if (
        (cookies.isPolicyAccepted(
          setCookiePreference.getAttribute("data-setcookiepreference"),
        ) &&
          setCookiePreference.getAttribute("data-setcookiepreferencevalue") ===
            "true") ||
        (!cookies.isPolicyAccepted(
          setCookiePreference.getAttribute("data-setcookiepreference"),
        ) &&
          setCookiePreference.getAttribute("data-setcookiepreferencevalue") ===
            "false")
      ) {
        // setCookiePreference.setAttribute("disabled", true);
        setCookiePreference.setAttribute("tabindex", "-1");
      } else {
        // setCookiePreference.removeAttribute("disabled");
        setCookiePreference.setAttribute("tabindex", "0");
      }
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

      const setCookiePreferenceParent = setCookiePreference.parentElement;
      if (setCookiePreferenceParent.classList.contains("tna-button-group")) {
        if (setCookiePreferenceParent.querySelector(".tna-chip[aria-live]")) {
          setCookiePreferenceParent
            .querySelector(".tna-chip[aria-live]")
            .remove();
        }
        const notificationChip = document.createElement("div");
        notificationChip.classList.add("tna-chip");
        notificationChip.setAttribute("aria-live", "assertive");
        notificationChip.innerHTML =
          '<span class="tna-visually-hidden">Cookie preference</span> saved';
        setCookiePreferenceParent.appendChild(notificationChip);
        setTimeout(() => {
          notificationChip.remove();
        }, 3000);
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
  if (Object.prototype.hasOwnProperty.call(data, "settings")) {
    if (data.settings === true) {
      addThemeSwitcher();
    } else {
      cookies.delete("dark_theme");
      setThemeFromCookie();
      removeThemeSwitcher();
    }
  }
});

const hideOnJsBlocks = document.querySelectorAll(".tna-ds--hide-on-js");
hideOnJsBlocks.forEach((hideOnJsBlock) => {
  hideOnJsBlock.style.display = "none";
});

const showOnJsBlocks = document.querySelectorAll(".tna-ds--show-on-js");
showOnJsBlocks.forEach((hideOnJsBlock) => {
  hideOnJsBlock.classList.remove("tna-ds--show-on-js");
});
