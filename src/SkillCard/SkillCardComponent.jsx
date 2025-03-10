import PropTypes from 'prop-types';

export default function SkillCardComponent({ image, name }) {
    return (
        <div className="card d-inline-block text-center mx-2 align-items-center" style={{ width: '100px', padding: '10px', border: 'none', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <img src={image} alt={name} className="card-img-top img-fluid" style={{ maxHeight: '50px', objectFit: 'contain' }} />
            <div className="card-body p-1 d-flex justify-content-center">
                <p className="card-text small mb-0 text-center" style={{ minHeight: '20px' }}>{name}</p>
            </div>
        </div>
    );
}

SkillCardComponent.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
