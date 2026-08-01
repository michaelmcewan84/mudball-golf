export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#173629] text-[#E8D5B7] px-6 py-16">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-10 text-4xl font-light">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-[#D8C5A7] leading-8">

          <p>
            Mudball Golf respects your privacy.
          </p>

          <p>
            When you sign up, we collect your name, email address and postcode
            so we can keep you informed about the launch of Mudball Golf.
          </p>

          <p>
            We will never sell your personal information or share it with third
            parties for marketing purposes.
          </p>

          <p>
            Your information is securely stored using Supabase and will only be
            used to contact you about Mudball Golf.
          </p>

          <p>
            You can unsubscribe at any time by contacting us or using the
            unsubscribe link included in future emails.
          </p>

          <p>
            If you have any questions about this policy, please contact us at:
          </p>

          <p className="font-semibold">
            hello@mudballgolf.co.uk
          </p>

        </div>

      </div>
    </main>
  );
}