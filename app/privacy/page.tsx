import Image from "next/image";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">

      {/* Logo */}
      <div className="mb-12 flex justify-center">
        <Image
          src="/logo.png"
          alt="Mudball Golf"
          width={90}
          height={90}
          priority
        />
      </div>

      {/* Header */}
      <h1 className="mb-4 text-center text-4xl font-bold text-white">
        Privacy Policy
      </h1>

      <p className="mb-12 text-center text-white">
        Last updated: August 2026
      </p>


      <section className="space-y-10 text-base leading-7 text-white">

        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            1. Introduction
          </h2>

          <p>
            Welcome to Mudball Golf. This Privacy Policy explains how we collect, use, store and
            protect your personal information when you visit our website mudballgolf.uk
          </p>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            2. Who We Are
          </h2>

          <p>
            Mudball Golf is an independent golf media and lifestyle brand.
          </p>

          <p className="mt-3">
            Through our website and future channels, we aim to build a
            community around the stories, culture and experiences that make
            golf meaningful.
          </p>

          <p className="mt-3">
            As Mudball Golf develops, our content, products, services and ways
            of connecting with our community may evolve.
          </p>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            3. Information We Collect
          </h2>

          <p>
            We only collect information that is necessary for the purposes
            described in this Privacy Policy.
          </p>

          <p className="mt-3">
            When you register your interest with Mudball Golf, we collect:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Your email address</li>
          </ul>

          <p className="mt-3">
            You may also provide additional information if you contact us
            directly.
          </p>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            4. How We Collect Your Information
          </h2>

          <p>
            We collect information directly from you when you:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Register your interest through our website</li>
            <li>Contact us by email</li>
            <li>Communicate with us</li>
          </ul>

          <p className="mt-3">
            Limited technical information may also be processed automatically
            by the services that help us operate our website.
          </p>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            5. How We Use Your Information
          </h2>

          <p>
            We use your information to:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Confirm your registration of interest</li>
            <li>Send an automated confirmation email</li>
            <li>Share updates as Mudball Golf moves closer to launch</li>
            <li>Communicate relevant announcements and developments</li>
          </ul>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            6. Legal Basis for Processing Your Information
          </h2>

          <p>
            Under UK data protection law, we rely on the following legal bases:
          </p>

          <h3 className="mt-5 text-lg font-semibold text-[#E8D5B7]">
            Consent
          </h3>

          <p className="mt-2">
            When you choose to register your interest and provide your email
            address, you consent to us contacting you with updates from
            Mudball Golf.
          </p>

          <h3 className="mt-5 text-lg font-semibold text-[#E8D5B7]">
            Legitimate interests
          </h3>

          <p className="mt-2">
            We may process information where necessary to operate, maintain and
            improve our website and develop Mudball Golf.
          </p>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            7. Email Communications
          </h2>

          <p>
            If you register your interest with Mudball Golf, you may receive
            emails relating to your registration, launch information and
            Mudball Golf updates.
          </p>

          <p className="mt-3">
            You can unsubscribe at any time by following the unsubscribe
            instructions included in our emails or by contacting hello@mudballgolf.uk
          </p>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            8. How We Store and Protect Your Information
          </h2>

          <p>
            We use trusted third-party service providers to help us operate
            Mudball Golf.
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Supabase</strong> — used to store information submitted
              through our website.
            </li>

            <li>
              <strong>Vercel</strong> — used to host and deliver our website.
            </li>

            <li>
              <strong>Zoho Mail</strong> — used for business email
              communication.
            </li>
          </ul>

          <p className="mt-3">
            We take reasonable steps to protect personal information from loss,
            misuse, unauthorised access or disclosure.
          </p>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            9. Sharing Your Information
          </h2>

          <p>
            We do not sell your personal information or rent your email address
            to third parties. We may share information with trusted service providers who help us
            operate Mudball Golf.
          </p>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            10. Cookies
          </h2>

          <p>
            At present, Mudball Golf does not use non-essential cookies or
            advertising tracking technologies. If we introduce analytics or other tracking technologies in the
            future, we will update this Privacy Policy accordingly.
          </p>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            11. Data Retention
          </h2>

          <p>
            We retain personal information only for as long as necessary for
            the purposes described in this Privacy Policy.
          </p>

          <p className="mt-3">
            You may request deletion of your information at any time by
            contacting hello@mudballgolf.uk
          </p>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            12. Your Rights
          </h2>

          <p>
            Under UK data protection law, you have rights including:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>The right to access your personal information</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to withdraw consent</li>
            <li>The right to object to certain processing activities</li>
          </ul>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            13. Third-Party Links
          </h2>

          <p>
            Our website may contain links to third-party websites, including
            social media platforms. We are not responsible for the privacy practices, content or
            security of external websites.
          </p>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            14. Changes to This Privacy Policy
          </h2>

          <p>
            We may update this Privacy Policy from time to time as Mudball Golf
            develops.
          </p>
        </div>


        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#E8D5B7]">
            15. Contact Us
          </h2>

          <p>
            If you have questions about this Privacy Policy, please contact hello@mudballgolf.uk
          </p>
        </div>

      </section>

    </main>
  );
}