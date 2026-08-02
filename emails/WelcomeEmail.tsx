export default function WelcomeEmail({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "#173629",
        color: "#E8D5B7",
        fontFamily: "Arial, Helvetica, sans-serif",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#173629",
          padding: "45px 30px",
          textAlign: "center",
        }}
      >
        <img
          src="https://mudballgolf.uk/logo.png"
          alt="Mudball Golf"
          style={{
            width: "180px",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Welcome */}
      <div
        style={{
          backgroundColor: "#E8D5B7",
          color: "#173629",
          padding: "40px 30px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "38px",
            fontWeight: "400",
            margin: "0 0 20px",
          }}
        >
          You're on the list!
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.5",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Thank you for your interest in Mudball Golf, a golf media,
          lifestyle and apparel brand exploring the stories, culture,
          people and ideas that make the game meaningful.
        </p>
      </div>

      {/* Launch message */}
      <div
        style={{
          backgroundColor: "#E8D5B7",
          color: "#173629",
          padding: "25px 30px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.5",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          We’re currently preparing for our full launch - date TBC -
          but as soon as there is more to say, you’ll be the first to know.
        </p>
      </div>

      {/* Follow */}
      <div
        style={{
          backgroundColor: "#E8D5B7",
          color: "#173629",
          padding: "40px 30px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "38px",
            fontWeight: "400",
            margin: "0 0 20px",
          }}
        >
          Follow our journey
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.5",
            margin: 0,
          }}
        >
          <a
            href="https://www.instagram.com/mudballgolfofficial/"
            style={{
              color: "#173629",
              textDecoration: "underline",
              marginRight: "35px",
            }}
          >
            Instagram
          </a>

          <a
            href="https://x.com/mud_ball_golf"
            style={{
              color: "#173629",
              textDecoration: "underline",
            }}
          >
            X
          </a>
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#173629",
          padding: "35px 30px",
          textAlign: "center",
        }}
      >
        <img
          src="https://mudballgolf.uk/logo.png"
          alt="Mudball Golf"
          style={{
            width: "75px",
            display: "block",
            margin: "0 auto",
          }}
        />

        <p
          style={{
            marginTop: "15px",
            fontSize: "13px",
            color: "#E8D5B7",
          }}
        >
          © Mudball Golf
        </p>

        <p
          style={{
            marginTop: "10px",
            fontSize: "12px",
          }}
        >
          <a
            href={`https://mudballgolf.uk/unsubscribe?email=${email}`}
            style={{
              color: "#E8D5B7",
              textDecoration: "underline",
            }}
          >
            Unsubscribe
          </a>
        </p>
      </div>
    </div>
  );
}