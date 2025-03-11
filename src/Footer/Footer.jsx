export default function Footer() {
    return (
        <footer className="text-center mt-4 p-3" style={{ backgroundColor: "#f8f9fa", borderTop: "1px solid #dee2e6" }}>
            <p className="mb-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
            <p className="mb-0"> +91-8812949911 |  anshgogoi201@gmail.com</p>
        </footer>
    );
}