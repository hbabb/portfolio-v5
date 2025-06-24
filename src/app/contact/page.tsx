import { ContactForm } from "@/app/contact/contactForm";

export default function ContactPage() {
  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/blueCloudBackground.jpg)" }}
    >
      <ContactForm />
    </div>
  );
}
