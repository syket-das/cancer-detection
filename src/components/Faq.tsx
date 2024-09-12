'use client';
import React from 'react';
import { Container } from '@/components/Container';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question:
      'What is deep learning, and how does it help in colorectal cancer detection?',
    answer:
      'Deep learning is a subset of artificial intelligence (AI) that uses neural networks to learn from large datasets. In colorectal cancer detection, it helps by analyzing gastrointestinal endoscopy images, identifying polyps or lesions that may indicate cancer, and providing real-time feedback to healthcare professionals.',
  },
  {
    question: 'How accurate is AI in detecting colorectal cancer?',
    answer:
      'AI-powered systems can achieve high accuracy, often surpassing traditional manual analysis. With access to curated datasets and continuous learning, deep learning models can significantly reduce false positives and negatives in detecting colorectal cancer.',
  },
  {
    question: ' How does the AI system work with medical professionals? ',
    answer:
      'The AI system assists healthcare professionals by providing real-time analysis during endoscopic procedures. It highlights potential abnormalities, allowing doctors to focus on specific areas for further investigation, improving the overall accuracy of diagnosis.',
  },
  {
    question: ' Is AI-based colorectal cancer detection safe to use?',
    answer:
      'Yes, AI systems are designed to support and enhance human expertise, not replace it. All AI-generated insights are validated by medical professionals, ensuring that the final diagnosis is safe, accurate, and reliable.',
  },
];
