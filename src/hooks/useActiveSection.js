import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently most visible in the viewport,
 * so the navbar can highlight the active link as the user scrolls.
 */
export function useActiveSection(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    // Keep track of the visible height of all observed sections
    const visibleHeights = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleHeights[entry.target.id] = entry.intersectionRect.height;
          } else {
            delete visibleHeights[entry.target.id];
          }
        });

        // Find the section with the largest visible height in the viewport
        let maxId = null;
        let maxHeight = -1;

        Object.entries(visibleHeights).forEach(([id, height]) => {
          if (height > maxHeight) {
            maxHeight = height;
            maxId = id;
          }
        });

        if (maxId) {
          setActiveId(maxId);
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
        ...options,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeId;
}
