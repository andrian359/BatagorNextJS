import { LanguageProvider } from "../components/LanguageProvider";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "./style.css";
import "../components/SiteHeader.css";
import "../components/SiteFooter.css";
import "./responsive.css";
import "./beranda/page.css";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </LanguageProvider>
  );
}
