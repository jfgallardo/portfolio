import Button from "@/components/button/button";
import { Dictionary } from "@/types/types";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";


type Props = {
    translations: Dictionary
};

export default function ContactView({ translations }: Props) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean | null>(null);
    const ready = formData.name && formData.email && formData.subject && formData.message;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        setLoading(true);

        try {
            if (!ready) return;
            await emailjs.send(
                "service_0696fmk", // Reemplaza con tu Service ID de EmailJS
                "template_1t2dh0a", // Reemplaza con tu Template ID
                formData,
                "LTLuD8YRAO-E8-2hA" // Reemplaza con tu Public Key de EmailJS
            );
            setSuccess(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Error al enviar el correo:", error);
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setTimeout(() => setSuccess(null), 4000);
    }, [success]);


    return (
        <div id="contact" className="bg-[#080A24] flex flex-col items-center p-8 w-full">
            <div className="w-full max-w-[1400px]">
                <div className="flex flex-col items-start w-full">
                    <h1 className="text-[36px] sm:text-[48px] font-semibold leading-[1.2] text-white mb-6">
                        {translations.contact.title}
                    </h1>

                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col items-start gap-2">
                                <label htmlFor="name" className="text-white">
                                    {translations.contact.name}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-input px-4 py-3 bg-[#FBFBFE1C] text-white w-full rounded-lg outline-none focus:ring-2 focus:ring-[#528BFD]"
                                    value={formData.name}
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col items-start gap-2">
                                <label htmlFor="email" className="text-white">
                                    {translations.contact.email}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-input px-4 py-3 bg-[#FBFBFE1C] text-white w-full rounded-lg outline-none focus:ring-2 focus:ring-[#528BFD]"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="subject" className="text-white">
                                {translations.contact.subject}
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                className="form-input px-4 py-3 bg-[#FBFBFE1C] text-white w-full rounded-lg outline-none focus:ring-2 focus:ring-[#528BFD]"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="message" className="text-white">
                                {translations.contact.message}
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                className="form-input px-4 py-3 bg-[#FBFBFE1C] text-white w-full rounded-lg outline-none focus:ring-2 focus:ring-[#528BFD]"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="w-full flex justify-end">
                            <Button
                                isDisabled={loading || !ready}
                                onClick={handleSubmit}
                                variant="primary"
                                size="lg"
                                className="text-white font-extrabold text-xl bg-[#528BFD] border border-[#528BFD] hover:bg-[#396BDB] rounded-lg px-6 py-3 transition-all"
                            >
                                {loading ? "Enviando..." : translations.contact.send}
                            </Button>
                        </div>
                    </form>

                    {success !== null && (
                        <p
                            className={`mt-4 text-center ${success ? "text-green-500" : "text-red-500"
                                }`}
                        >
                            {success
                                ? "¡Correo enviado con éxito!"
                                : "Hubo un error al enviar el correo. Inténtalo nuevamente."}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}