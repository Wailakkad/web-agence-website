export interface FaqItemType {
  id: number;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItemType[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We offer three core services: custom React & Next.js website development, premium React/Next.js template sales, and template customization. Whether you need a website built from scratch or want to launch faster with a premium template — we've got you covered."
  },
  {
    id: 2,
    question: "How much do your services cost?",
    answer: "Our templates start from $49 for single-use licenses. Custom website development projects start from $1,500 depending on complexity and scope. Template customization packages start from $299. We offer transparent pricing with no hidden fees — book a call for a custom quote."
  },
  {
    id: 3,
    question: "How long does it take to complete a project?",
    answer: "Template customizations typically take 3-7 business days. Custom website builds range from 2-6 weeks depending on the project scope and complexity. We always provide a clear timeline before starting and keep you updated throughout the process."
  },
  {
    id: 4,
    question: "Do you offer ongoing support?",
    answer: "Yes! All projects include 30 days of post-launch support. We also offer monthly maintenance packages that include performance monitoring, updates, bug fixes, and priority support. Templates include lifetime access to updates."
  },
  {
    id: 5,
    question: "How do I get started?",
    answer: "Getting started is simple: browse our templates to find one you love, or book a discovery call to discuss a custom project. We'll scope the work, agree on a timeline, and kick off with a 50% deposit to begin development."
  },
  {
    id: 6,
    question: "Who owns the rights to the final website?",
    answer: "You own 100% of the final website code and design once the project is complete and payment is finalized. For templates, you receive a commercial license for single-project use. Extended licenses are available for multiple projects or client work."
  }
];
