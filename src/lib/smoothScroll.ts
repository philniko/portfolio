// src/lib/smoothScroll.ts
export function smoothScrollTo(elementId: string) {
  // Special case for scrolling to the top of the page
  if (elementId === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }

  const element = document.getElementById(elementId);
  if (element) {
    // For other sections, we can account for the navbar height
    const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
