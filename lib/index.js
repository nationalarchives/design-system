import Prism from "prismjs";

window.TNAFrontend.initAll();

class CookieEventHandler {
  events = {};

  constructor() {
    if (CookieEventHandler._instance) {
      return CookieEventHandler._instance;
    }
    CookieEventHandler._instance = this;
  }

  /**
   * Add an event listener.
   * @param {string} event - The event to add a listener for.
   * @param {function} callback - The callback function to call when the event is triggered.
   */
  on(event, callback) {
    if (!Object.prototype.hasOwnProperty.call(this.events, event)) {
      this.events[event] = [];
    }
    this.events[event] = [...this.events[event], callback];
  }

  /** @protected */
  trigger(event, data = {}) {
    if (Object.prototype.hasOwnProperty.call(this.events, event)) {
      this.events[event].forEach((eventToTrigger) =>
        eventToTrigger.call(this, data),
      );
    }
  }
}

/**
 * Class to handle cookies.
 * @class Cookies
 * @constructor
 * @public
 */
class Cookies {
  /** @protected */
  extraPolicies = [];
  /** @protected */
  domain = "";
  /** @protected */
  secure = true;
  /** @protected */
  policiesKey = "";

  /**
   * Create a cookie handler.
   * @param {string[]} [extraPolicies=[]] - The extra cookie policies to manage in addition to essential, settings and usage.
   * @param {string} [options.domain=""] - The domain to register the cookie with.
   * @param {string} [options.secure=true] - Only set cookie in HTTPS environments.
   * @param {string} [options.policiesKey=cookies_policy] - The name of the cookie.
   */
  constructor(extraPolicies = [], options = {}) {
    const {
      domain = "",
      secure = true,
      policiesKey = "cookies_policy",
    } = options;
    this.extraPolicies = extraPolicies;
    this.domain = domain;
    this.secure = secure;
    this.policiesKey = policiesKey;
    this.events = new CookieEventHandler();
    this.init();
  }

  /** @protected */
  init() {
    this.savePolicies({
      ...Object.fromEntries(
        this.extraPolicies.map((k) => [k.toLowerCase(), false]),
      ),
      usage: false,
      settings: false,
      ...this.policies,
      essential: true,
    });
  }

  get all() {
    const deserialised = {};
    document.cookie
      .split("; ")
      .filter((x) => x)
      .forEach((cookie) => {
        const parts = cookie.trim().split("=");
        if (parts[0]) {
          deserialised[parts[0]] = parts[1];
        }
      });
    return deserialised;
  }

  get policies() {
    try {
      return JSON.parse(this.get(this.policiesKey) || "{}");
    } catch (e) {
      return {};
    }
  }

  /**
   * Check to see whether a cookie exists or not.
   * @param {string} key - The cookie name.
   * @returns {boolean}
   */
  exists(key) {
    return Object.prototype.hasOwnProperty.call(this.all, key);
  }

  /**
   * Check to see whether a cookie has a particular value.
   * @param {string} key - The cookie name.
   * @param {string|number|boolean} value - The value to check against.
   * @returns
   */
  hasValue(key, value) {
    return this.get(key) == value;
  }

  /**
   * Get a cookie.
   * @param {string} key - The cookie name.
   * @returns {string|number|boolean}
   */
  get(key) {
    return this.exists(key) ? decodeURIComponent(this.all[key]) : null;
  }

  /**
   * Set a cookie.
   * @param {string} key - The cookie name.
   * @param {string|number|boolean} value - The cookie value.
   * @param {Object} options
   * @param {number} [options.maxAge=31536000] - The maximum age of the cookie in seconds.
   * @param {string} [options.path=/] - The path to register the cookie for.
   * @param {string} [options.sameSite=Lax] - The sameSite attribute.
   * @param {string} [options.domain=this.domain] - The domain to register the cookie with.
   * @param {string} [options.secure=this.secure] - Only set cookie in HTTPS environments.
   */
  set(key, value, options = {}) {
    const {
      maxAge = 60 * 60 * 24 * 365,
      path = "/",
      sameSite = "Lax",
      domain = this.domain,
      secure = this.secure,
    } = options;
    if (!key) {
      return;
    }
    const cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)};${
      domain ? ` domain=${domain}; ` : ""
    } samesite=${sameSite}; path=${path}; max-age=${maxAge}${
      secure ? "; secure" : ""
    }`;
    document.cookie = cookie;
    this.events.trigger("setCookie", {
      key,
      value,
      maxAge,
      path,
      sameSite,
      domain,
      secure,
      cookie,
    });
  }

  /**
   * Delete a cookie.
   * @param {string} key - The cookie name.
   * @param {string} [path=/] - The path to the cookie is registered on.
   */
  delete(key, path = "/", domain = null) {
    const options = { maxAge: -1, path, domain: domain || undefined };
    this.set(key, "", options);
    this.events.trigger("deleteCookie", { key, ...options });
  }

  /**
   * Delete all cookies.
   */
  deleteAll(path = "/", domain = null) {
    Object.keys(this.all).forEach((cookie) => {
      this.delete(cookie, path, domain);
    });
    this.events.trigger("deleteAllCookies", { path, domain });
  }

  /**
   * Accept a policy.
   * @param {string} policy - The name of the policy.
   */
  acceptPolicy(policy) {
    this.setPolicy(policy, true);
    this.events.trigger("acceptPolicy", policy);
    this.events.trigger("changePolicy", { [policy]: true });
  }

  /**
   * Reject a policy.
   * @param {string} policy - The name of the policy.
   */
  rejectPolicy(policy) {
    this.setPolicy(policy, false);
    this.events.trigger("rejectPolicy", policy);
    this.events.trigger("changePolicy", { [policy]: false });
  }

  /**
   * Set a policy.
   * @param {string} policy - The name of the policy.
   * @param {boolean} accepted - Whether the policy is accepted or not.
   */
  setPolicy(policy, accepted) {
    if (policy === "essential") {
      return;
    }
    this.savePolicies({
      ...this.policies,
      [policy]: accepted,
      essential: true,
    });
    this.events.trigger("changePolicy", { [policy]: accepted });
  }

  /**
   * Accept all the cookie policies.
   */
  acceptAllPolicies() {
    const allPolicies = Object.fromEntries(
      Object.keys(this.policies).map((k) => [k.toLowerCase(), true]),
    );
    this.savePolicies(allPolicies);
    this.events.trigger("acceptAllPolicies");
    this.events.trigger("changePolicy", allPolicies);
  }

  /**
   * Reject all the cookie policies.
   */
  rejectAllPolicies() {
    const allPolicies = {
      ...Object.fromEntries(
        Object.keys(this.policies).map((k) => [k.toLowerCase(), false]),
      ),
      essential: true,
    };
    this.savePolicies(allPolicies);
    this.events.trigger("rejectAllPolicies");
    this.events.trigger("changePolicy", allPolicies);
  }

  /**
   * Commit policy preferences to the browser.
   * @param {object} policies - The policies to commit.
   */
  savePolicies(policies) {
    this.set(this.policiesKey, JSON.stringify(policies));
  }

  /**
   * Get the acceptance status of a policy.
   * @param {string} policy - The name of the policy.
   * @returns {boolean}
   */
  isPolicyAccepted(policy) {
    return Object.prototype.hasOwnProperty.call(this.policies, policy)
      ? this.policies[policy] === true
      : null;
  }

  /**
   * Add an event listener.
   * @param {string} event - The event to add a listener for.
   * @param {function} callback - The callback function to call when the event is triggered.
   */
  on(event, callback) {
    this.events.on(event, callback);
  }
}

// const cookies = window.TNAFrontend?.Cookies
//   ? new window.TNAFrontend.Cookies()
//   : new Cookies();
const cookies = new Cookies();

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
