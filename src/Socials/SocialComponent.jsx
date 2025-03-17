export default function SocialComponent({ link, image, name }) {
    return (
      <div className="flex items-center space-x-3">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="text-center">
            <img
              src={image}
              alt={name}
              className="mx-auto"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
        </a>
      </div>
    );
  }
  