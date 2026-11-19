import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ThankYou = () => {
  useEffect(() => {
    (window as any).gtag?.("event", "generate_lead", { form_location: "website" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Thank You | Mier & Murphy Builders</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="pt-40 pb-24 bg-background">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Thank You</h1>
          <p className="font-sans text-[15px] text-muted-foreground mb-8">
            We received your request and will contact you soon. If it is urgent, call{" "}
            <a href="tel:+18059989082" className="text-primary font-medium">(805) 998-9082</a>.
          </p>
          <Link to="/" className="text-primary font-medium underline">Return to Home</Link>
        </div>
      </div>
    </>
  );
};

export default ThankYou;