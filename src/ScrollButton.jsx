import React, { useState, useEffect } from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-10">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="py-4 px-6 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
