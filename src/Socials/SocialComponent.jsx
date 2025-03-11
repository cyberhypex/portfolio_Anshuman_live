export default function SocialComponent({ link, image ,name}) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 text-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={name} className="mx-auto" style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50%" }} />
            </a>
        </div>
    );
}
