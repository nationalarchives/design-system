import { marked } from "marked";

const markdownRenderer = new marked.Renderer();

const slugify = (text) =>
  encodeURIComponent(text.toLowerCase().trim().replace(/[\s]/g, "-"));

markdownRenderer.heading = function (text, level) {
  let headingSize = "";
  switch (level) {
    case 1:
      headingSize = "tna-heading--xl";
      break;
    case 2:
      headingSize = "tna-heading--l";
      break;
    case 3:
      headingSize = "tna-heading--m";
      break;
    case 4:
    case 5:
    case 6:
      headingSize = "tna-heading--s";
      break;
  }
  const slug = slugify(text);
  return `
  <h${level} id="${slug}" class="tna-heading ${headingSize} tna-heading--no-link-arrow">
    ${text} <a href="#${slug}" aria-hidden="true"><i class="fa-solid fa-link"></i></a>
  </h${level}>`;
};

markdownRenderer.list = function (body, ordered) {
  const element = ordered ? "ol" : "ul";
  return `
  <${element} class="tna-ul">
    ${body}
  </${element}>`;
};

markdownRenderer.paragraph = function (text) {
  return /^\s*&lt;/.test(text) || /^\s*\{/.test(text)
    ? text
    : `
  <p class="tna-p">
    ${text}
  </p>`;
};

const escapeTest = /[&<>"']/;
const escapeReplace = new RegExp(escapeTest.source, "g");
const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
const escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];

function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

markdownRenderer.code = function (code, infostring, escaped) {
  const lang = (infostring || "").match(/^\S*/)?.[0];

  code = code.replace(/\n$/, "") + "\n";

  if (!lang) {
    return code;
  }

  return `<pre><code class="language-${escape(lang)}">${
    escaped ? code : escape(code, true)
  }</code></pre>\n`;
};

export default markdownRenderer;
