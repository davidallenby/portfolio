import { debounce } from "@lib/common";
import { useEffect, useState } from "react";

/**
 * This hook returns boolean values for each breakpoint. We can deconstruct this
 * in components and use it to define different layouts/elements depending on
 * the screen size
 */
export const useBreakpointBoolean = function() {
  const [width, setWidth] = useState<number>(0);
  // This is required because there's a delay between the DOM loading and the
  // window event figuring out whether or not this is a mobile device or not.
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set the screen size in state
    function handleResize() {
      const size = window.innerWidth;
      setWidth(size)
      if (!isLoaded) { setIsLoaded(true) }
    }
    // Run handleResize on page load (window is not available outside useEffect)
    handleResize();  

    // Create a version of handleResize with debounce attached
    const debounceResize = debounce(handleResize, 100)
    window.addEventListener("resize", debounceResize);

    return () => {
      window.removeEventListener("resize", debounceResize);
    }
  }, [width, setWidth]);

  return {
    isMobile: (isLoaded && width <= 767),
    isTablet: (isLoaded && width >= 768 && width <= 1199),
    isDesktop: (isLoaded && width >= 1200)
  }
}