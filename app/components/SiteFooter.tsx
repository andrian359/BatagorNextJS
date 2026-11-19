const footerLinks = [
  {
    href: "https://wa.me/6281234567890?text=Halo%20tim%20Batagor!",
    icon: "💬",
    name: "WhatsApp",
    info: "Chat dengan admin",
  },
  {
    href: "https://instagram.com/batagor.edu",
    icon: "📸",
    name: "Instagram",
    info: "@batagor.edu",
  },
  {
    href: "mailto:halo@batagor-edu.id",
    icon: "✉️",
    name: "Email",
    info: "halo@batagor-edu.id",
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        {footerLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="footer-link-item"
          >
            <span className="footer-link-icon" aria-hidden="true">
              {link.icon}
            </span>
            <div className="footer-link-text">
              <span className="footer-link-name">{link.name}</span>
              <span className="footer-link-info">{link.info}</span>
            </div>
          </a>
        ))}
      </div>
    </footer>
  );
}
