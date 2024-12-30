import Button from "@/components/button/button";
import { Dictionary } from "@/types/types";

type Props = {
    translations: Dictionary
};

export default function ContactView({ translations }: Props) {
    return (
        <div id="contact" className="bg-[#080A24] flex flex-col items-center p-8 w-full">
            <div className="w-full max-w-[1400px]">
                <div className="flex flex-col items-start w-full">
                    <h1 className="text-[36px] sm:text-[48px] font-semibold leading-[1.2] text-white mb-6">
                        {translations.contact.title}
                    </h1>

                    <form action="" className="w-full flex flex-col gap-6">
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
                            />
                        </div>

                        <div className="w-full flex justify-end">
                            <Button
                                variant="primary"
                                size="lg"
                                className="text-white font-extrabold text-xl bg-[#528BFD] border border-[#528BFD] hover:bg-[#396BDB] rounded-lg px-6 py-3 transition-all"
                            >
                                {translations.contact.send}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}