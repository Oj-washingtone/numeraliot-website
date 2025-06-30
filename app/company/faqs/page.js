"use client";

import React, { useState } from "react";
import Banner from "@/components/hero/Banner";
import "./faqs.css";
import { faqsData } from "@/data/faqs";

export default function FAQs() {
  const title = "Have Questions?\nFind Answers Here!";
  const description =
    "If you can’t find the answer to your question here, feel free to reach out to our support team. We’re here\nto help and provide any additional information you may need.";

  const [activeLeft, setActiveLeft] = useState(0);
  const [activeRight, setActiveRight] = useState(1);

  const leftFaqs = faqsData.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqsData.filter((_, i) => i % 2 !== 0);

  return (
    <div className="faqs-wrapper">
      <Banner title={title} description={description} tag="FAQs" />

      <div className="faq-container container">
        <div className="faq-columns">
          <div className="faq-column">
            {leftFaqs.map((faq, idx) => {
              const actualIndex = idx * 2;
              const isOpen = activeLeft === actualIndex;

              return (
                <article key={actualIndex}>
                  <div
                    className={`faq-item ${isOpen ? "active" : ""}`}
                    onClick={() => setActiveLeft(isOpen ? null : actualIndex)}
                  >
                    <div className="faq-question">{faq.question}</div>
                  </div>

                  {isOpen && <div className="faq-answer">{faq.answer}</div>}
                </article>
              );
            })}
          </div>

          <div className="faq-column">
            {rightFaqs.map((faq, idx) => {
              const actualIndex = idx * 2 + 1;
              const isOpen = activeRight === actualIndex;

              return (
                <article key={actualIndex}>
                  <div
                    className={`faq-item ${isOpen ? "active" : ""}`}
                    onClick={() => setActiveRight(isOpen ? null : actualIndex)}
                  >
                    <div className="faq-question">{faq.question}</div>
                  </div>

                  {isOpen && <div className="faq-answer">{faq.answer}</div>}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
