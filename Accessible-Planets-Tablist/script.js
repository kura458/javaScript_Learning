
const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

function activateTab(selectedTab) {
  tabs.forEach(tab => {
    const isSelected = tab === selectedTab;

    tab.setAttribute("aria-selected", String(isSelected));
    tab.setAttribute("tabindex", isSelected ? "0" : "-1");
  });

  panels.forEach(panel => {
    panel.hidden = true;
  });

  const associatedPanel = selectedTab.getAttribute("aria-controls");
  const panel = document.getElementById(associatedPanel);

  panel.hidden = false;
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    activateTab(tab);
  });

  tab.addEventListener("keydown", event => {
    const currentIndex = Array.from(tabs).indexOf(tab);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();

    tabs[nextIndex].focus();
    activateTab(tabs[nextIndex]);
  });
});
