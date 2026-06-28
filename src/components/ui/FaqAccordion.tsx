import { useState } from "react";
import { FAQ_DATA } from "../../lib/faqData";
import { FaqItem } from "./FaqItem";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3 faq-list" id="faq_accordion_wrapper">
      {FAQ_DATA.map((faq, index) => (
        <FaqItem
          key={faq.id}
          faq={faq}
          isOpen={openId === faq.id}
          onToggle={() => toggleFaq(faq.id)}
          index={index}
        />
      ))}
    </div>
  );
}
