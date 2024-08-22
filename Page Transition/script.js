function navigateTo(pageId) {
  const activePage = document.querySelector(".page.active");
  const targetPage = document.getElementById(pageId);

  gsap.to(activePage, {
    opacity: 0,
    x: -100,
    duration: 0.5,
    onComplete: () => {
      activePage.classList.remove("active");
      gsap.set(activePage, { x: 100 });
      targetPage.classList.add("active");
      gsap.fromTo(
        targetPage,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
    },
  });
}
// Initial page load
document.getElementById("page1").classList.add("active");
