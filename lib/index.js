import Prism from "prismjs";
import { initAll } from "@nationalarchives/frontend/nationalarchives/all.mjs";

// window.addEventListener("onload", function () {
initAll();
// });

if (navigator.clipboard) {
  const htmlBlocks = document.querySelectorAll(
    "code.language-html, code.language-javascript",
  );
  htmlBlocks.forEach((htmlBlock) => {
    const copyButton = document.createElement("button");
    copyButton.innerText = "Copy code";
    copyButton.classList.add("html-copy");
    htmlBlock.parentElement.appendChild(copyButton);
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(htmlBlock.innerText);
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
