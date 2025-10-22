
import { PlaceHolderImages } from './placeholder-images';

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  imageHint?: string;
};

const getImageUrlAndHint = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  return {
    imageUrl: image?.imageUrl,
    imageHint: image?.imageHint,
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-ultimate-guide-to-solar-energy',
    title: 'The Ultimate Guide to Solar Energy for Indian Homes',
    date: '2024-07-15',
    author: 'Priya Sharma',
    ...getImageUrlAndHint('blog-post-thumbnail-1'),
    excerpt:
      'Thinking about switching to solar? This comprehensive guide covers everything you need to know, from the benefits and costs to the installation process in India.',
    content: `
      <p>Solar energy is rapidly becoming one of the most popular renewable energy sources for homeowners across India, and for good reason. Harnessing the power of the sun offers a multitude of benefits that are both economically and environmentally sound.</p>
      <h2>Why Make the Switch?</h2>
      <p>The primary driver for many homeowners is the significant reduction in electricity bills. By generating your own power, you can lower or even eliminate your dependence on the local electricity board. Furthermore, with government subsidies and incentives, the initial investment in solar panels is more affordable than ever.</p>
      <h2>Environmental Impact</h2>
      <p>Beyond the financial savings, going solar is a powerful way to reduce your carbon footprint. Traditional electricity in India is often generated from coal, which releases harmful greenhouse gases. Solar power, on the other hand, is a clean, green energy source that helps combat climate change.</p>
      <h2>The Installation Process</h2>
      <p>Our team at Surya Solar makes the transition seamless. It starts with a free consultation to assess your energy needs and property. We then design a custom system tailored to you, handle all the permits, and complete the installation with our certified professionals. In no time, you'll be producing your own clean energy.</p>
    `,
  },
  {
    slug: 'how-solar-panels-increase-property-value',
    title: 'How Solar Panels Can Increase Your Property Value in India',
    date: '2024-06-28',
    author: 'Rohan Mehta',
    ...getImageUrlAndHint('blog-post-thumbnail-2'),
    excerpt:
      'Investing in solar is not just about saving on bills; it’s also a smart investment in your home. Discover how solar panels can significantly boost your property’s market value in the Indian real estate market.',
    content: `
      <p>When considering home improvements, homeowners often look for projects with a high return on investment (ROI). Solar panel installation is one of the few upgrades that not only pays for itself over time through energy savings but also adds significant value to your property from day one.</p>
      <h2>Studies Show a Clear Increase</h2>
      <p>Recent studies in the Indian real estate market have shown that homes with solar panel systems sell for a premium compared to homes without them. On average, this increase can be around 3-5% of the home's value, which is a significant amount in today's market.</p>
      <h2>What Buyers Want</h2>
      <p>Today's homebuyers are increasingly environmentally conscious and savvy about long-term costs. A home with a pre-installed solar system is highly attractive because it promises lower utility bills, especially with rising electricity tariffs, and a smaller carbon footprint. This makes your home stand out in a competitive market and can lead to a faster sale.</p>
      <p>Investing in solar is a win-win: you enjoy the benefits of clean energy and reduced costs while you live in your home, and you reap the financial rewards when it's time to sell.</p>
    `,
  },
  {
    slug: 'navigating-solar-financing-and-incentives',
    title: 'Navigating Solar Financing and Subsidies in India',
    date: '2024-06-10',
    author: 'Ananya Gupta',
    ...getImageUrlAndHint('blog-post-thumbnail-3'),
    excerpt:
      'The cost of going solar is more accessible than ever, thanks to a variety of financing options and government subsidies. Learn how you can make the switch without breaking the bank.',
    content: `
      <p>One of the biggest myths about solar energy is that it's prohibitively expensive. While the initial investment is a consideration, a wide range of financing options, loans, and government subsidies makes it accessible to almost everyone in India.</p>
      <h2>Government Subsidies</h2>
      <p>The most significant incentive is the Central Financial Assistance (CFA) provided under the PM Surya Ghar: Muft Bijli Yojana. This scheme offers substantial subsidies for rooftop solar systems. Many state governments also offer their own additional incentives and benefits.</p>
      <h2>Financing Options</h2>
      <ul>
        <li><strong>Solar Loans:</strong> Many banks and NBFCs in India offer specific loans for solar installations at competitive interest rates, often with simplified paperwork.</li>
        <li><strong>EMI Options:</strong> We partner with financial institutions to provide easy EMI options, making the purchase as simple as buying any other home appliance.</li>
        <li><strong>Home Improvement Loans:</strong> You can also leverage your existing home loan or apply for a top-up to finance your solar project.</li>
      </ul>
      <p>Our experts at Surya Solar can walk you through all the available options and help you find the best financial path to your energy independence.</p>
    `,
  },
  {
    slug: 'the-importance-of-solar-panel-maintenance',
    title: 'The Importance of Regular Solar Panel Maintenance in India',
    date: '2024-05-22',
    author: 'Vikram Singh',
    ...getImageUrlAndHint('blog-post-thumbnail-4'),
    excerpt:
      'Your solar panels are a long-term investment. To ensure they operate at peak efficiency in Indian weather conditions, regular maintenance is key. Here’s what you need to know.',
    content: `
      <p>Solar panel systems are designed to be durable and require minimal maintenance. However, to ensure you're getting the most out of your investment, especially given the dust and weather conditions in India, a little bit of care goes a long way.</p>
      <h2>Keeping Them Clean</h2>
      <p>Over time, dust, pollen, bird droppings, and other debris can accumulate on your panels, which can significantly reduce the amount of sunlight they absorb and decrease their efficiency. Regular cleaning, especially before and after the monsoon season, can restore their performance.</p>
      <h2>Professional Inspections</h2>
      <p>While you can handle basic cleaning, it's a good idea to have a professional inspection every year or two. A certified technician can check for any potential issues with the wiring, mounting, and inverters that you might not be able to see. They can ensure all components are functioning correctly and safely, which is crucial for the system's longevity.</p>
      <p>At Surya Solar, we offer comprehensive Annual Maintenance Contracts (AMCs) to protect your investment and keep your system running at peak performance for its entire lifespan, ensuring you maximize your energy production and savings.</p>
    `,
  },
];
