import React from "react";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <span>Copyright © 2022</span>&nbsp;&nbsp;
      <a href="https://beian.miit.gov.cn/">蜀ICP备2022021813号-1</a>
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
