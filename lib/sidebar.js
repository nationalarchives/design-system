const $sidebarItems = document.querySelectorAll(
  '.tna-ds-sidebar:not(.tna-ds-sidebar--sticky) .tna-ds-sidebar__section-link[href^="#"]',
);
const $sectionsHeadings = Array.from(
  /*document.querySelectorAll(
    ':is(h1,h2,h3,h4,h5,h6)[id]:has(a[href^="#"])',
  ) || */ document.querySelectorAll(":is(h1,h2,h3,h4,h5,h6)[id]"),
).filter(
  (heading) =>
    heading.querySelector(`a[href^="#"]`) &&
    document.querySelector(
      `.tna-ds-sidebar .tna-ds-sidebar__section-link[href="#${heading.getAttribute(
        "id",
      )}"]`,
    ),
);

if ($sidebarItems) {
  let currentSectionId = "";
  const currentSectionFromTop = 0.2;
  const highlightCurrentSection = () => {
    const $topSection = Array.from($sectionsHeadings)
      .reverse()
      .find(
        ($sectionsHeading) =>
          $sectionsHeading.getBoundingClientRect().top <
          window.innerHeight * currentSectionFromTop,
      );
    const topSectionId = $topSection && $topSection.getAttribute("id");
    if (topSectionId) {
      if (topSectionId !== currentSectionId) {
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
    } else {
      currentSectionId = "";
      $sidebarItems.forEach(($sidebarItem) =>
        $sidebarItem.classList.remove("tna-ds-sidebar__section-link--current"),
      );
    }
  };
  window.addEventListener("scroll", highlightCurrentSection);
  window.addEventListener("resize", highlightCurrentSection);
  highlightCurrentSection();
}
