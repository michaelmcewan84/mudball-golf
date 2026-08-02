export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mudball Golf",
    "url": "https://mudballgolf.uk",
    "logo": "https://mudballgolf.uk/logo.png",
    "description":
      "Mudball Golf is a golf media and lifestyle brand exploring the stories, culture, people and ideas that make the game meaningful."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}