const $sidebarItems = document.querySelectorAll(
  '.tna-ds-sidebar .tna-ds-sidebar__section-link[href^="#"]',
);
const $sectionsHeadings = Array.from(
  document.querySelectorAll(
    'h1[id]:has(a[href^="#"]),h2[id]:has(a[href^="#"]),h3[id]:has(a[href^="#"]),h4[id]:has(a[href^="#"]),h5[id]:has(a[href^="#"]),h6[id]:has(a[href^="#"])',
  ),
).filter((heading) =>
  document.querySelector(
    `.tna-ds-sidebar .tna-ds-sidebar__section-link[href="#${heading.getAttribute(
      "id",
    )}"]`,
  ),
);

if ($sidebarItems) {
  let currentSectionId = "";
  const currentSectionFromTop = 0.15;

  const highlightCurrentSection = () => {
    const $topSection = Array.from($sectionsHeadings)
      .reverse()
      .find(
        ($sectionsHeading) =>
          $sectionsHeading.getBoundingClientRect().top <
          window.innerHeight * currentSectionFromTop,
      );
    console.log($topSection);
    const topSectionId = $topSection && $topSection.getAttribute("id");
    if (topSectionId && topSectionId !== currentSectionId) {
      currentSectionId = topSectionId;
      if ($topSection) {
        $sidebarItems.forEach(($sidebarItem) =>
          $sidebarItem.getAttribute("href") === `#${currentSectionId}`
            ? $sidebarItem.classList.add(
                "tna-ds-sidebar__section-link--current",
              )
            : $sidebarItem.classList.remove(
                "tna-ds-sidebar__section-link--current",
              ),
        );
      }
    }
  };

  window.addEventListener("scroll", highlightCurrentSection);
  window.addEventListener("resize", highlightCurrentSection);
  highlightCurrentSection();
}
