const faqs = [
    {
        question: "What are the eligibility requirements for admission?",
        answer: "Students must meet grade-level standards and pass the entrance assessment. Transcripts and supporting documents are required for evaluation."
    },
    {
        question: "When is the application deadline?",
        answer: "Applications are accepted year-round, but we recommend submitting before March for the following academic year. Spaces fill on a first-come, first-served basis."
    },
    {
        question: "What documents do I need to submit?",
        answer: "Required documents include: completed application form, recent birth certificate, previous school transcripts, medical records, and four passport-sized photos."
    },
    {
        question: "Is there a scholarship program available?",
        answer: "Yes, we offer merit-based and need-based scholarships. Contact the admissions office for details on eligibility and the application process."
    },
    {
        question: "What is the entrance assessment like?",
        answer: "The assessment evaluates academic competencies in English, Mathematics, and Reasoning. It typically takes 2-3 hours and is administered in a controlled environment."
    },
    {
        question: "Can students transfer from other schools?",
        answer: "Yes, we accept transfers throughout the year, subject to space availability and successful completion of our assessment process."
    }
];

function renderFAQs() {
    const faqList = document.getElementById('faqList');
    faqList.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item">
            <button class="faq-question">${faq.question}</button>
            <div class="faq-answer">${faq.answer}</div>
        </div>
    `).join('');

    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const answer = button.nextElementSibling;

            document.querySelectorAll('.faq-item.active').forEach(openItem => {
                if (openItem !== item) {
                    openItem.classList.remove('active');
                    openItem.querySelector('.faq-answer').classList.remove('show');
                }
            });

            item.classList.toggle('active');
            answer.classList.toggle('show');
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderFAQs();
});