import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/constants"

export function FAQS() {
    return (
        <section className="max-w-5xl mx-auto text-white py-20 px-10 md:px-0">
            <h2 className="text-xl text-center md:text-3xl lg:text-5xl font-abril ml-4 font-semibold text-white mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full text-xl ">
                {faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="py-3">
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
