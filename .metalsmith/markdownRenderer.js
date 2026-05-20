import { marked } from "marked";

import uuid4 from "../node_modules/@nationalarchives/frontend/nationalarchives/lib/uuid.mjs";

const escape = (input) => {
    const escapeReplacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return input.replace(/[&<>"']/g, (ch) => escapeReplacements[ch] || ch);
  },
  markdownRenderer = new marked.Renderer(),
  slugify = (text) =>
    encodeURIComponent(
      text
        .replace(/(?:&(?:#?)(?:\w+);)/g, "")
        .toLowerCase()
        .trim()
        .replace(/[\s./]/g, "-")
        .replace(/[^\w\d-]/g, ""),
    );

markdownRenderer.heading = function (text, level) {
  let headingSize = "s";
  switch (level) {
    /* eslint-disable no-magic-numbers */
    case 1:
      headingSize = "xl";
      break;
    /* eslint-disable no-magic-numbers */
    case 2:
      headingSize = "l";
      break;
    /* eslint-disable no-magic-numbers */
    case 3:
      headingSize = "m";
      break;
    default:
      break;
  }
  const slug = slugify(text);
  /* eslint-disable no-magic-numbers */
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
  return /^\s*&lt;/u.test(text) || /^\s*\{/u.test(text)
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

  let caption = "",
    newBody = body;
  const captionMatch = /<caption class="tna-table__caption">.*<\/caption>/u;
  if (captionMatch.test(body)) {
    [caption] = captionMatch.exec(body);
    caption = caption.replace("<caption", `<caption id="table-${uuid}"`);
    newBody = newBody.replace(captionMatch, "");
  }

  return `<div class="tna-table-wrapper" tabindex="0" role="region"${caption ? ` aria-labelledby="table-${uuid}"` : ""}>
    <table class="tna-table">
      ${caption}
      <thead class="tna-table__head">
        ${head}
      </thead>
      <tbody class="tna-table__body">
        ${newBody}
      </tbody>
    </table>
  </div>`;
};

markdownRenderer.tablerow = function (row) {
  const captionMatch = /\{caption:(?<caption>.*)\}/u;
  if (captionMatch.test(row)) {
    return `<caption class="tna-table__caption">${captionMatch.exec(row).groups.caption.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")}</caption>`;
  }
  return `<tr class="tna-table__row">
    ${row
      // First cell to th
      .replace(/\s*<td>(?:.*)<\/td>/u, '<th class="tna-table__header">$1</th>')
      .replace(/<th>/g, '<th class="tna-table__header">')
      .replace(/<td>/g, '<td class="tna-table__cell">')}
    </tr>`;
};

markdownRenderer.code = function (code, infostring) {
  /* eslint-disable no-magic-numbers */
  const langAndName = (infostring || "").match(/^\S*/u)?.[0],
    langAndNameMatch = /^(?<lang>\w+)(?::(?<name>.+))?$/u.exec(langAndName);
  const lang = langAndNameMatch?.groups?.lang,
    name = langAndNameMatch?.groups?.name,
    newCode = `${code.replace(/\n$/u, "")}\n`;

  if (!lang) {
    return newCode;
  }

  return `<div class="tna-code-block"${name ? ` title="${escape(name)}"` : ""}><pre class="tna-code-block__pre"><code class="language-${escape(lang)}">${escape(
    newCode,
  )}</code></pre></div>\n`;
};

export default markdownRenderer;
