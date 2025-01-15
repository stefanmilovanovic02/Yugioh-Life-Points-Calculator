// Add click event to redirect to the correct page
document.querySelectorAll(".series").forEach((series) => {
  series.addEventListener("click", () => {
    const link = series.getAttribute("data-link");
    window.location.href = link;
  });
});
