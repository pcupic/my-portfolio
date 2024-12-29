import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <div className="bg-contact-page-image bg-cover bg-center min-h-screen w-full flex items-center">
            <div className="flex flex-row items-center justify-center w-5/6 mx-auto">
                <div className="w-1/2 flex justify-center">
                    <ContactForm />
                </div>
                <div className="wrapper relative w-1/2 p-2 flex justify-center">
                    <div className="content p-6 bg-white rounded-lg shadow-md relative z-10">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h2>
                        <p className="mb-4 text-center">
                            I would love to hear from you! Please reach out with any questions or comments.
                        </p>
                        <h3 className="font-semibold text-center">Contact Information:</h3>
                        <p className="mt-2 text-center"><strong>Phone:</strong> (123) 456-7890</p>
                        <p className="mt-2 text-center"><strong>Fax:</strong> (123) 456-7891</p>
                        <p className="mt-2 text-center"><strong>Email:</strong> contact@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;