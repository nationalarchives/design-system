if (navigator.clipboard) {
  const htmlBlocks = document.querySelectorAll(
    ".tna-ds-example__code:has(pre > code)",
  );
  htmlBlocks.forEach((htmlBlock) => {
    const copyButton = document.createElement("button");
    copyButton.innerText = "Copy code";
    copyButton.classList.add(
      "tna-ds-example__code-copy",
      "tna-button",
      "tna-button--small",
    );
    copyButton.setAttribute("aria-live", "assertive");
    htmlBlock.querySelector('pre[class*="language-"]').classList.add("padded");
    htmlBlock.appendChild(copyButton);
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(
          htmlBlock.querySelector("code").innerText,
        );
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
