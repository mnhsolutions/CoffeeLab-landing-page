import { useEffect } from "react";

export default function useNavbarColorOnScroll(navbarRef, sentinelRef) {
  useEffect(() => {
    const navbar = navbarRef.current;
    const sentinel = sentinelRef.current;

    if (!navbar || !sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          navbar.classList.remove(
            "text-black",
            "backdrop-blur-md",
            "bg-white/70",
            "shadow-md"
          );
          navbar.classList.add("text-white", "bg-transparent");
        } else {
          navbar.classList.remove("text-white", "bg-transparent");
          navbar.classList.add(
            "text-black",
            "backdrop-blur-md",
            "bg-white/70",
            "shadow-md"
          );
        }
      },
      {
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [navbarRef, sentinelRef]);
}
