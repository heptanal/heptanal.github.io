document.querySelectorAll("[data-copy-target]").forEach((copyButton) => {
  copyButton.addEventListener("click", async () => {
    const target = document.getElementById(copyButton.dataset.copyTarget);
    if (!target) return;

    if (!navigator.clipboard) {
      copyButton.textContent = "select text";
      return;
    }

    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      copyButton.textContent = "copied";
      window.setTimeout(() => {
        copyButton.textContent = "copy";
      }, 1600);
    } catch {
      copyButton.textContent = "select text";
    }
  });
});
