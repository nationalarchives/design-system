window.TNAFrontend.initAll();

const now = new Date();
/* eslint-disable no-magic-numbers */
const iso8601DateString = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}-${String(now.getUTCDate()).padStart(2, "0")}`;
const logoAdornmentsCss = document.getElementById("logo-adornments-css");
if (logoAdornmentsCss) {
  const url = logoAdornmentsCss.getAttribute("href");
  logoAdornmentsCss.setAttribute("href", `${url}?date=${iso8601DateString}`);
}
const logoAdornmentsJs = document.getElementById("logo-adornments-js");
if (logoAdornmentsJs) {
  const url = logoAdornmentsJs.getAttribute("src");
  logoAdornmentsJs.setAttribute("src", `${url}?date=${iso8601DateString}`);
}

const cookies = new window.TNAFrontend.Cookies(),
  setTheme = (theme) => {
    if (theme === "light") {
      document.documentElement.classList.remove("tna-template--dark-theme");
      document.documentElement.classList.remove("tna-template--system-theme");
    } else {
      document.documentElement.classList.add(`tna-template--${theme}-theme`);
    }
  };

if (cookies.exists("theme")) {
  setTheme(cookies.get("theme"));
} else {
  setTheme("system");
}

cookies.on("changePolicy", (data) => {
  if (Object.hasOwn(data, "settings")) {
    if (data.settings !== true) {
      cookies.delete("theme");
    }
  }
});

const resizeExampleIframe = ($iframe) => {
    const $body = $iframe.contentDocument.body;
    if (!$body) {
      return;
    }
    $body.style.height = "auto";
    const height = Math.ceil($body.getBoundingClientRect().height);

    let extraHeight = 0;

    if (
      $iframe.classList.contains(
        "tna-ds-example__frame--extra-expandable-height",
      )
    ) {
      /* eslint-disable no-magic-numbers */
      extraHeight = 100;
    }
    $iframe.style.height = `${height + extraHeight}px`;
  },
  resizeExampleIframes = () => {
    document
      .querySelectorAll(
        ".tna-ds-example__frame:not(.tna-ds-example__frame--fixed-height, .tna-ds-example__frame--fixed-height-on-load)",
      )
      .forEach(($iframe) =>
        $iframe.addEventListener(
          "load",
          resizeExampleIframe.bind(null, $iframe),
        ),
      );
  };
resizeExampleIframes();

window.addEventListener("resize", () =>
  document
    .querySelectorAll(
      ".tna-ds-example__frame:not(.tna-ds-example__frame--fixed-height)",
    )
    .forEach(($iframe) => resizeExampleIframe($iframe)),
);
