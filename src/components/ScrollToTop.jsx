import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      // Scroll the main window
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });

      // Fallback for older browsers
      window.scrollTo(0, 0);

      // Also scroll the document element and body
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Find and scroll any overflow containers (like admin layout)
      const overflowContainers = document.querySelectorAll('[class*="overflow-auto"], [class*="overflow-y-auto"], [class*="overflow-scroll"]');
      overflowContainers.forEach(container => {
        container.scrollTop = 0;
        container.scrollLeft = 0;
      });

      // Specifically target admin layout main content if it exists
      const adminMainContent = document.querySelector('.flex-1.overflow-auto');
      if (adminMainContent) {
        adminMainContent.scrollTop = 0;
      }

      // Also check for any element with specific scroll behavior
      const scrollableElements = document.querySelectorAll('main, .main-content, [data-scroll="true"]');
      scrollableElements.forEach(element => {
        element.scrollTop = 0;
      });
    };

    // Execute immediately
    scrollToTop();

    // Also execute after a short delay to handle async content
    setTimeout(scrollToTop, 0);
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 100);
  }, [pathname]);

  return null;
}
