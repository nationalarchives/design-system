import Prism from "prismjs";

window.TNAFrontend.initAll();

const cookies = new window.TNAFrontend.Cookies({
  path: "/design-system/",
});

const setTheme = (theme) => {
  if (theme === "light") {
    document.documentElement.classList.remove("tna-template--dark-theme");
    document.documentElement.classList.remove("tna-template--system-theme");
  } else {
    document.documentElement.classList.add(`tna-template--${theme}-theme`);
  }
};

setTheme(cookies.exists("theme") ? cookies.get("theme") : "light");

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
      cookies.set("cookie_preferences_set", "true");

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

cookies.on("changePolicy", (data) => {
  updateCookiePreferenceDisplays();
  if (Object.prototype.hasOwnProperty.call(data, "settings")) {
    if (data.settings !== true) {
      cookies.delete("theme");
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

document.querySelectorAll("details[name]").forEach(($details) => {
  $details.addEventListener("toggle", (e) => {
    const name = $details.getAttribute("name");
    if (e.newState == "open") {
      document
        .querySelectorAll(`details[name=${name}][open]`)
        .forEach(($openDetails) => {
          if (!($openDetails === $details)) {
            $openDetails.removeAttribute("open");
          }
        });
    }
  });
});
