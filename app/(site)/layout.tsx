import { LanguageProvider } from "../components/LanguageProvider";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "./style.css";
import "./responsive.css";
import "./extras.css";

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
