import ScrollReveal from "@/components/ScrollReveal";

const TermsAndConditions = () => {
  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Terms &amp; Conditions</h1>
          <p className="font-sans text-sm text-muted-foreground mb-10">Last Updated: [Month Day, Year]</p>

          <div className="font-sans text-[15px] text-foreground/80 leading-relaxed space-y-6">
            <p>
              Welcome to{" "}
              <a
                href="https://www.mierandmurphybuilders.com"
                className="text-primary underline hover:text-primary/80"
              >
                www.mierandmurphybuilders.com
              </a>{" "}
              (the "Site"), operated by Mier &amp; Murphy Builders ("we," "us," or "our"). By accessing or
              using our Site, our services, or opting in to receive text messages from us, you agree to be
              bound by these Terms &amp; Conditions ("Terms"). If you do not agree to these Terms, please do
              not use our Site or services.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">1. Use of Our Site</h2>
            <p>
              You agree to use our Site only for lawful purposes and in a manner that does not infringe the
              rights of, restrict, or inhibit the use of the Site by any third party. You may not use our
              Site to transmit any unlawful, harassing, defamatory, abusive, or otherwise objectionable
              material.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">2. Our Services</h2>
            <p>
              Mier &amp; Murphy Builders provides [brief description of services, e.g., "general contracting,
              remodeling, and remediation services"]. Any services described on our Site are subject to
              availability, quote, and mutual agreement between you and Mier &amp; Murphy Builders.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">3. SMS Text Messaging Terms</h2>
            <p>By providing your phone number and opting in through our chat widget, forms, or other means, you agree to the following terms:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Consent to Receive Messages:</strong> You consent to receive SMS text messages from Mier &amp; Murphy Builders related to appointment reminders, service updates, and promotional offers. Consent to receive text messages is not a condition of purchasing any goods or services.</li>
              <li><strong className="text-foreground">Message Frequency:</strong> Message frequency varies depending on your interactions with us and the services you request.</li>
              <li><strong className="text-foreground">Message and Data Rates:</strong> Message and data rates may apply based on your mobile carrier and plan. Mier &amp; Murphy Builders is not responsible for any charges from your mobile carrier.</li>
              <li><strong className="text-foreground">Opt-Out:</strong> You may opt out of receiving text messages at any time by replying STOP to any message. You will receive a one-time confirmation message, and no further messages will be sent unless you opt in again.</li>
              <li><strong className="text-foreground">Help:</strong> Reply HELP to any message, or contact us at              <a
                href="mailto:info@mierandmurphy.com"
                className="text-primary underline hover:text-primary/80"
              >info@mierandmurphy.com
              </a> for assistance.</li>
              <li><strong className="text-foreground">Supported Carriers:</strong> Carriers are not liable for delayed or undelivered messages. Message delivery is subject to effective transmission from your network provider.</li>
              <li><strong className="text-foreground">No Sharing of Opt-In Data:</strong> Your mobile phone number and SMS consent information will not be shared or sold to any third party for marketing or promotional purposes.</li>
            </ul>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">4. Accuracy of Information</h2>
            <p>
              We make reasonable efforts to ensure the information on our Site is accurate and up to date,
              but we make no warranties or representations regarding the completeness, accuracy, or
              reliability of any content on the Site.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">5. Intellectual Property</h2>
            <p>
              All content on this Site, including text, graphics, logos, and images, is the property of Mier
              &amp; Murphy Builders or its licensors and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative works from this content without
              our prior written consent.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">6. Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites. We are not responsible for the content,
              privacy practices, or terms of any third-party websites, and inclusion of such links does not
              imply endorsement.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Mier &amp; Murphy Builders shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising out of or related to
              your use of the Site or our services, including but not limited to SMS communications.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Mier &amp; Murphy Builders, its officers, employees,
              and agents from any claims, damages, losses, or expenses arising out of your use of the Site
              or violation of these Terms.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of
              [State], without regard to its conflict of law principles.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">10. Changes to These Terms</h2>
            <p>
              We reserve the right to update or modify these Terms at any time. Changes will be posted on
              this page with an updated "Last Updated" date. Continued use of the Site after changes are
              posted constitutes your acceptance of the revised Terms.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-bold mt-10 mb-3 text-foreground">11. Contact Us</h2>
            <p>If you have questions about these Terms &amp; Conditions, contact us at:</p>
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
                href="tel: 805-998-9082"
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

export default TermsAndConditions;