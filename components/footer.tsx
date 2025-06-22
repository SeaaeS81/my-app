import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-blue-100 text-blue-800 text-center py-5 text-sm font-sans"
    >
      <p className="font-semibold">Help & Support</p>
      <p>
        Please contact us on{" "}
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-800"
        >
          Discord
        </a>{" "}
        (#support channel)
      </p>
    </footer>
  );
};

export default Footer;