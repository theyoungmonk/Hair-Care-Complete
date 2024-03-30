console.log('HEHE!');
const FAQData = [
  {
    question: 'How does it work?',
    answer: [
      `Ayurvedic hair oil products work by nourishing the scalp, strengthening hair follicles, and promoting overall hair health. These oils are typically infused with a blend of herbal extracts, essential oils, and other natural ingredients that have been used for centuries in Ayurvedic medicine to address various hair concerns, including hair loss, dandruff, and scalp dryness. The oils penetrate the scalp, delivering essential nutrients and antioxidants to the hair roots, which helps stimulate hair growth, improve hair texture, and reduce damage.`,
    ],
  },
  {
    question: 'Is it safe to use?',
    answer: [
      `You can rest assured that our Ayurvedic hair oil is crafted with gentle, natural ingredients, making it safe for regular use. Our formula is thoughtfully curated to provide effective nourishment and care without compromising on safety. While rare, we recommend checking the ingredients list to ensure compatibility with any allergies. `,
    ],
  },
  {
    question: 'How often should I use it?',
    answer: [
      `Our Ayurvedic hair oil is designed for daily use, providing nourishment and care to your hair and scalp every day. Using it regularly can help maintain the health and vitality of your hair. While many of our customers find that using it 2-3 times a week yields optimal results, feel free to adjust the frequency to suit your hair's unique needs and your personal preferences.`,
    ],
  },
  {
    question: 'Can it be used on colored hair?',
    answer: [
      `Yes, Ayurvedic hair oil products are generally safe to use on colored hair. However, it's advisable to perform a patch test before applying the oil to your entire scalp and hair, especially if you have recently colored your hair or have sensitive skin. This helps ensure that there are no adverse reactions or interactions with the hair dye.`,
    ],
  },
  {
    question: 'How long until I see results?',
    answer: [
      `The time it takes to see results may vary depending on individual hair types and conditions. However, many users start noticing improvements in hair health, such as reduced hair fall, increased shine, and improved texture, within a few weeks of regular use. For best results, it's recommended to use the product consistently as directed.`,
    ],
  },
];

const FAQContainer = document.querySelector('.faq__container');

const removeAllExpanded = () => {
  const questionContainers = document.querySelectorAll(
    '.faq__container .faq__question-container'
  );

  questionContainers.forEach((q) => {
    q.classList.remove('expanded');
    const answerContainer = q.querySelector('.faq__answer-container');
    answerContainer.style.maxHeight = '0';
  });
};

const displayFAQ = () => {
  FAQData.forEach((q) => {
    const answerHTML = q.answer
      .map(
        (a) => `<div class="faq__answer">
          <span class="faq__answer-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          ${a}
        </div>`
      )
      .join('');

    const html = `<div class="faq__question">
            ${q.question}
            <span class="faq__question-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
  
          <div class="faq__answer-container">
            ${answerHTML}
          </div>`;

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('faq__question-container');
    questionContainer.innerHTML = html;

    FAQContainer.appendChild(questionContainer);

    const question = questionContainer.querySelector('.faq__question');

    question.addEventListener('click', () => {
      if (!questionContainer.classList.contains('expanded')) {
        removeAllExpanded();
      }

      questionContainer.classList.toggle('expanded');
      const isExpanded = questionContainer.classList.contains('expanded');

      const answerContainer = questionContainer.querySelector(
        '.faq__answer-container'
      );
      const contentHeight = answerContainer.scrollHeight;
      answerContainer.style.maxHeight = isExpanded ? `${contentHeight}px` : '0';
    });
  });
};

displayFAQ();
