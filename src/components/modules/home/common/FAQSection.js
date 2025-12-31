"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState(1);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const htmlTheme = document.documentElement.getAttribute("data-bs-theme");
    setTheme(htmlTheme || "light");
  }, []);

  const toggleAccordion = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question: "What does this tool do?",
      answer:
        "This is an artificial intelligence integrated tool by which you can automate your PTE and IELTS mock test systems in your educational systems.",
    },
    {
      id: 2,
      question: "What are the disadvantages of online trading?",
      answer:
        "You don’t need to worry, the interface is user-friendly. Anyone can use it smoothly. Our user manual will help you to solve your problem. If you do find yourself needing some help, feel free to reach out to our support team.",
    },
    {
      id: 3,
      question: "Is online trading safe?",
      answer:
        "Definitely, you can give permission to all of your team members and can set their roles based on their position to manage it in your institution.",
    },
    {
      id: 4,
      question: "What is online trading, and how does it work?",
      answer:
        "Definitely, you can give permission to all of your team members and can set their roles based on their position to manage it in your institution.",
    },
    {
      id: 5,
      question: "Which app is best for online trading?",
      answer:
        "Definitely, you can give permission to all of your team members and can set their roles based on their position to manage it in your institution.",
    },
    {
      id: 6,
      question: "How to create a trading account?",
      answer:
        "Definitely, you can give permission to all of your team members and can set their roles based on their position to manage it in your institution.",
    },
  ];

  if (!mounted) return null;
  const getImageSrc = () =>
    theme === "dark" ? "/images/others/1-dark.png" : "/images/others/1.png";

  return (
    <section className="faq padding-top padding-bottom of-hidden bg-color-4">
      <div className="section-header section-header--max57">
        <h2 className="mb-15 mt-minus-10">
          <span>Frequently</span> Asked questions
        </h2>
        <p>
          Hey there! Got questions? We've got answers. Check out our FAQ page
          for all the deets. Still not satisfied? Hit us up.
        </p>
      </div>
      <div className="container">
        <div className="faq__wrapper">
          <div className="row g-5 align-items-center justify-content-between">
            {/* Accordion */}
            <div className="col-lg-6">
              <div
                className="accordion accordion--style1"
                id="faqAccordion1"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="row">
                  {faqData.map((item) => (
                    <div className="col-12" key={item.id}>
                      <div
                        className={`accordion__item ${
                          item.id === 6 ? "border-0" : ""
                        }`}
                      >
                        <div className="accordion__header" id={`faq${item.id}`}>
                          <button
                            className={`accordion__button ${
                              openItem === item.id ? "" : "collapsed"
                            }`}
                            type="button"
                            onClick={() => toggleAccordion(item.id)}
                            aria-expanded={openItem === item.id}
                            aria-controls={`faqBody${item.id}`}
                          >
                            <span className="accordion__button-content">
                              {item.question}
                            </span>
                            <span className="accordion__button-plusicon"></span>
                          </button>
                        </div>
                        <div
                          id={`faqBody${item.id}`}
                          className={`accordion-collapse collapse ${
                            openItem === item.id ? "show" : ""
                          }`}
                          aria-labelledby={`faq${item.id}`}
                          data-bs-parent="#faqAccordion1"
                        >
                          <div className="accordion__body">
                            <p className="mb-15">{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6">
              <div
                className="faq__thumb"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <Image
                  className="dark"
                  src={getImageSrc()}
                  alt="faq-thumb"
                  width={600}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
