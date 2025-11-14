// An array of links for navigation bar
const navBarLinks = [
  { name: "Accueil", url: "/" },
  { name: "Articles", url: "/blog" },
  { name: "Solutions", url: "/services" },
  
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" },
    ],
  },
  {
    section: "Notre organisation",
    links: [
      { name: "A propos de nous", url: "#" },
      { name: "Blog", url: "/blog" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
