import ScrollReveal from "@/components/ScrollReveal";

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="font-sans text-sm text-muted-foreground mb-10">Last Updated: July, 28, 2026</p>

          <div className="font-sans text-[15px] text-foreground/80 leading-relaxed space-y-6">
            <p>
              Mier &amp; Murphy Builders ("we," "us," or "our") operates the website{" "}
              <a
                href="https://www.mierandmurphybuilders.com"
                className="text-primary underline hover:text-primary/80"
              >
                www.mierandmurphybuilders.com
              </a>{" "}
              (the "Site"). This Privacy Policy explains how we collect, use, disclose, and protect
              information when you visit our Site or communicate with us, including via SMS text messaging.
            </p>
            <p>By using our Site or providing your information to us, you agree to the terms of this Privacy Policy.</p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Contact Information:</strong> Name, phone number, email address, mailing address</li>
              <li><strong className="text-foreground">Communication Data:</strong> Messages, inquiries, and information you provide through our chat widget, contact forms, or phone calls</li>
              <li><strong className="text-foreground">Usage Data:</strong> IP address, browser type, pages visited, and general Site interaction data</li>
              <li><strong className="text-foreground">SMS Opt-In Data:</strong> Your phone number and consent status when you opt in to receive text messages from us</li>
            </ul>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send appointment reminders, updates, and service-related communications</li>
              <li>Send marketing or promotional messages, where you have consented to receive them</li>
              <li>Improve our Site, services, and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">3. SMS Text Messaging Communications</h2>
            <p>If you provide your phone number and opt in to receive text messages from Mier &amp; Murphy Builders:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Consent:</strong> By submitting your phone number through our chat widget or forms, you consent to receive SMS text messages from us related to appointment reminders, service updates, and promotional offers.</li>
              <li><strong className="text-foreground">Message Frequency:</strong> Message frequency may vary based on your interactions with us.</li>
              <li><strong className="text-foreground">Message and Data Rates:</strong> Message and data rates may apply, depending on your mobile carrier and plan.</li>
              <li><strong className="text-foreground">Opt-Out:</strong> You may opt out of receiving text messages at any time by replying STOP to any message. You will receive one final message confirming your opt-out, and no further messages will be sent.</li>
              <li><strong className="text-foreground">Help:</strong> Reply HELP to any message for assistance, or contact us directly at <a  href="mailto:info@mierandmurphy.com"
                className="text-primary underline hover:text-primary/80"
              >info@mierandmurphy.com
              </a>
              <br />
              </li>
              <li><strong className="text-foreground">No Third-Party Sharing of SMS Data:</strong> We do not share, sell, or disclose your mobile phone number or SMS opt-in consent data with any third parties for their own marketing or promotional purposes. Your SMS information is used solely by Mier &amp; Murphy Builders for the purposes described in this Policy.</li>
            </ul>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">4. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Service Providers:</strong> Third-party vendors who help us operate our Site and deliver services (e.g., CRM, scheduling, and communication platforms), bound by confidentiality obligations</li>
              <li><strong className="text-foreground">Legal Compliance:</strong> When required by law, subpoena, or to protect our rights, property, or safety, or that of others</li>
            </ul>
            <p>Text messaging originator opt-in data and consent are never shared with any third party for marketing purposes, under any circumstance.</p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">5. Data Retention</h2>
            <p>We retain your information for as long as necessary to fulfill the purposes described in this Policy, comply with legal obligations, resolve disputes, and enforce our agreements.</p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">6. Data Security</h2>
            <p>We implement reasonable administrative, technical, and physical safeguards designed to protect your information from unauthorized access, use, or disclosure. However, no method of transmission or storage is 100% secure.</p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">7. Your Choices and Rights</h2>
            <p>You may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Opt out of SMS communications at any time by replying STOP</li>
              <li>Request access to, correction of, or deletion of your personal information by contacting us at               <a
                href="mailto:info@mierandmurphy.com"
                className="text-primary underline hover:text-primary/80"
              >info@mierandmurphy.com
              </a></li>
              <li>Unsubscribe from marketing emails using the unsubscribe link in any email</li>
            </ul>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">8. Children's Privacy</h2>
            <p>Our Site and services are not directed to individuals under the age of 18 (or under 13, where applicable), and we do not knowingly collect personal information from children.</p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">9. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our Site after changes are posted constitutes acceptance of the updated Policy.</p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices, contact us at:</p>
            <p className="not-italic">
              Mier &amp; Murphy Builders
              <br />
              Thousand Oaks, California
              <br />
              <a
                href="mailto:info@mierandmurphy.com"
                className="text-primary underline hover:text-primary/80"
              >info@mierandmurphy.com
              </a>
              <br />
              <a
                href="tel: 805-555-0199"
                className="text-primary underline hover:text-primary/80"
              >(805) 998-9082
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PrivacyPolicy;