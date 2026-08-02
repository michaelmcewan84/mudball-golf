import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8D5B7]/20 px-6 py-8 text-center text-sm text-white">

      {/* Footer Logo */}
      <div className="mb-5 flex justify-center">
        <Image
          src="/logo.png"
          alt="Mudball Golf"
          width={48}
          height={48}
        />
      </div>

      {/* Copyright */}
      <p className="mb-4">
        © Mudball Golf
      </p>

      {/* Footer Links */}
      <div className="flex justify-center gap-3">

        <Link
          href="/privacy"
          className="transition-colors hover:text-[#E8D5B7]"
        >
          Privacy Policy
        </Link>

        <span className="text-[#E8D5B7]">
          /
        </span>

        <Link
          href="/terms"
          className="transition-colors hover:text-[#E8D5B7]"
        >
          Terms & Conditions
        </Link>

        <span className="text-[#E8D5B7]">
          /
        </span>

        <a
          href="mailto:hello@mudballgolf.uk"
          className="transition-colors hover:text-[#E8D5B7]"
        >
          Contact
        </a>

      </div>

    </footer>
  );
}