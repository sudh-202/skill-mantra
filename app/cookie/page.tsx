import { NextPage } from 'next';
import Link from 'next/link';

const CookiesPolicy: NextPage = () => {
  return (
    <div className='max-w-4xl mx-auto p-6 space-y-6'>
      <h1 className='text-3xl font-bold mb-4'>Cookies Policy</h1>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>What Are Cookies?</h2>
        <p className='text-gray-700'>
          Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They serve various purposes, including improving user experience, analyzing site traffic, and remembering user preferences.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>How We Use Cookies</h2>
        <p className='text-gray-700 mb-2'>
          At SkillMantra LMS, we use cookies for the following purposes:
        </p>
        <ul className='list-disc pl-6 text-gray-700 space-y-2'>
          <li>
            <strong className='font-semibold'>Essential Cookies:</strong> These cookies are necessary for the proper functioning of our website. They enable features such as user authentication, session management, and security.
          </li>
          <li>
            <strong className='font-semibold'>Analytics Cookies:</strong> We use analytics tools (e.g., Google Analytics) to collect information about how visitors interact with our site. This helps us understand user behavior, improve content, and optimize our website.
          </li>
          <li>
            <strong className='font-semibold'>Preference Cookies:</strong> These cookies remember your preferences (e.g., language, font size) so that you don’t have to set them each time you visit.
          </li>
          <li>
            <strong className='font-semibold'>Third-Party Cookies:</strong> Some content on our site (such as embedded videos or social media buttons) may be provided by third-party services. These services may set their own cookies. We have no control over these cookies; please refer to the respective third-party privacy policies.
          </li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>Managing Cookies</h2>
        <p className='text-gray-700'>
          You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. Keep in mind that disabling cookies may affect certain features of our website.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>Consent</h2>
        <p className='text-gray-700'>
          By using our website, you consent to the use of cookies as described in this policy.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>Updates to this Policy</h2>
        <p className='text-gray-700'>
          We may update our Cookies Policy from time to time. Any changes will be reflected here, so please check periodically.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>Contact Us</h2>
        <p className='text-gray-700'>
          If you have any questions about our use of cookies, feel free to <Link href="/contact" className='text-blue-500 hover:underline'>contact us</Link>.
        </p>
      </section>
    </div>
  );
};

export default CookiesPolicy;
