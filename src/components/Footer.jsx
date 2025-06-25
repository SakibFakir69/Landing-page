import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer   sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <img width="48" height="48" src="https://img.icons8.com/fluency/48/ai-generated-code.png" alt="ai-generated-code"/>
          <h2 className="md:text-4xl text-3xl font-semibold "> Codext Ltd.</h2>
          <p>
     
          
            Providing reliable tech since 2025
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="/contact">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
