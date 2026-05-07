import { marked } from "marked";
import uuid4 from "../node_modules/@nationalarchives/frontend/nationalarchives/lib/uuid.mjs";

const markdownRenderer = new marked.Renderer();

const slugify = (text) =>
  encodeURIComponent(
    text
      .replace(/(&(#?)(\w+);)/g, "")
      .toLowerCase()
      .trim()
      .replace(/[\s\.\/]/g, "-")
      .replace(/[^\w\d\-]/g, ""),
  );

const escape = (input) => {
  const escapeTest = /[&<>"']/;
  const escapeReplace = new RegExp(escapeTest.source, "g");
  const escapeReplacements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  const getEscapeReplacement = (ch) => escapeReplacements[ch];

  if (escapeTest.test(input)) {
    return input.replace(escapeReplace, getEscapeReplacement);
  }

  return input;
};

markdownRenderer.heading = function (text, level) {
  let headingSize = "s";
  switch (level) {
    case 1:
      headingSize = "xl";
      break;
    case 2:
      headingSize = "l";
      break;
    case 3:
      headingSize = "m";
      break;
  }
  const slug = slugify(text);
  return level === 1
    ? `
  <h${level} class="tna-heading-${headingSize}">
    ${text}
  </h${level}>`
    : `
  <h${level} id="${slug}" class="tna-heading-${headingSize} tna-heading--no-link-arrow">
    ${text} <a href="#${slug}" aria-hidden="true" title="Jump to heading: ${text.replace(
      '"',
      "'",
    )}" tabindex="-1"><i class="fa-solid fa-link"></i></a>
  </h${level}>`;
};

markdownRenderer.list = function (body, ordered) {
  const element = ordered ? "ol" : "ul";
  return `
  <${element} class="tna-${element}">
    ${body}
  </${element}>`;
};

markdownRenderer.paragraph = function (text) {
  return /^\s*&lt;/.test(text) || /^\s*\{/.test(text)
    ? text
    : `
  <p>
    ${text}
  </p>`;
};

markdownRenderer.link = function (href, title, text) {
  return `<a href="${href}"${title ? ` title="${title}"` : ""}>${text}</a>`;
};

markdownRenderer.blockquote = function (body) {
  return `
  <div class="tna-blockquote tna-blockquote--noquotes">
    <blockquote class="tna-blockquote__quote">
      ${body}
    </blockquote>
  </div>`;
};

markdownRenderer.table = function (head, body) {
  const uuid = uuid4();

  let caption = "";
  const captionMatch = /<caption class="tna-table__caption">.*<\/caption>/;
  if (captionMatch.test(body)) {
    caption = captionMatch.exec(body)[0];
    caption = caption.replace("<caption", `<caption id="table-${uuid}"`);
    body = body.replace(captionMatch, "");
  }

  return `<div class="tna-table-wrapper" tabindex="0" role="region"${caption ? ` aria-labelledby="table-${uuid}"` : ""}>
    <table class="tna-table">
      ${caption}
      <thead class="tna-table__head">
        ${head}
      </thead>
      <tbody class="tna-table__body">
        ${body}
      </tbody>
    </table>
  </div>`;
};

markdownRenderer.tablerow = function (row) {
  const captionMatch = /\{caption:(.*)\}/;
  if (captionMatch.test(row)) {
    return `<caption class="tna-table__caption">${captionMatch.exec(row)[1]}</caption>`;
  }
  return `<tr class="tna-table__row">
    ${row
      .replace(/\s*<td>(.*)<\/td>/, '<th class="tna-table__header">$1</th>') // First cell to th
      .replace(/<th>/g, '<th class="tna-table__header">')
      .replace(/<td>/g, '<td class="tna-table__cell">')}
    </tr>`;
};

markdownRenderer.code = function (code, infostring, escaped) {
  const langAndName = (infostring || "").match(/^\S*/)?.[0];
  const langNameRegex = /^(\w+)(:(.+))?$/;
  const langAndNameMatch = langNameRegex.exec(langAndName);
  const lang = langAndNameMatch?.[1];
  const name = langAndNameMatch?.[3];

  code = code.replace(/\n$/, "") + "\n";

  if (!lang) {
    return code;
  }

  return `<div class="tna-code-block tna-code-block--copy-"${name ? ` title="${escape(name)}"` : ""}><pre class="tna-code-block__pre"><code class="language-${escape(lang)}">${escape(
    code,
  )}</code></pre></div>\n`;
};

export default markdownRenderer;
