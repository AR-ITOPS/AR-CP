import { BrandsTicker } from "@/components/brands-ticker";
import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { IntroductionSection } from "@/components/introduction-section";
import { OrganizationSection } from "@/components/organization-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandsTicker />
      <IntroductionSection />
      <FeaturesSection />
      <IntegrationsSection />
      <OrganizationSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
