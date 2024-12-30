import Button from "@/components/button/button";
import { Dictionary } from "@/types/types";

type Props = {
    translations: Dictionary
};

export default function ContactView({ translations }: Props) {
    return (
        <div id="contact" className='bg-[#080A24] flex flex-col items-center p-8 w-full'>

            <div className="w-full max-w-[1400px]">

                <div className='flex flex-col items-start w-full'>
                    <h1 className='text-[48px] font-semibold leading-[79px] text-white mb-4'>Sent Me A Messege</h1>

                    <form action="" className="w-full flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="flex flex-col items-start justify-start gap-2">
                                <label htmlFor="name" className="text-white">Name *</label>
                                <input type="text" name="name" id="name" className="form-input px-4 py-3 bg-[#FBFBFE1C] w-full" />
                            </div>

                            <div className="flex flex-col items-start justify-start gap-2">
                                <label htmlFor="email" className="text-white">Email *</label>
                                <input type="email" name="email" id="email" className="form-input px-4 py-3 bg-[#FBFBFE1C] w-full" />
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-2 w-full">
                            <label htmlFor="name" className="text-white">Subject *</label>
                            <input type="text" name="subject" id="subject" className="form-input px-4 py-3 bg-[#FBFBFE1C] w-full" />
                        </div>

                        <div className="flex flex-col items-start justify-start gap-2 w-full">
                            <label htmlFor="name" className="text-white">Message *</label>
                            <textarea name="message" id="message" rows={5} className="form-input px-4 py-3 bg-[#FBFBFE1C] w-full" />
                        </div>

                        <div className="w-full flex justify-end">
                            <Button variant="primary" size="lg" className='text-white font-extrabold text-xl border border-[#528BFD] rounded-lg w-[81px]'>Send</Button>
                        </div>
                    </form>
                </div>

            </div>
        </div>)
}