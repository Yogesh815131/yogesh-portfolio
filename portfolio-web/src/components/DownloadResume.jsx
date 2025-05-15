import React from "react";

const DownloadResume = () => {
  // Replace with your actual resume PDF file path (stored in public folder)
  const resumeUrl = "/resume/yogesh_jadhav.pdf"; 

  const handleDownload = () => {
    // Create a temporary anchor tag
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Yogesh_Jadhav_cv.pdf"; // Customize the downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
    >
      Download CV
    </button>
  );
};

export default DownloadResume;