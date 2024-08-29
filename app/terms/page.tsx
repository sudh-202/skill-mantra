import { NextPage } from 'next';
import Link from 'next/link';

const TermsAndConditions: NextPage = () => {
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-4'>Terms and Conditions</h1>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Welcome to SkillMantra LMS!</h2>
        <p>
          By accessing and using our website, you agree to comply with the following terms and conditions:
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Use of Content</h2>
        <p>
          The content on SkillMantra LMS—including text, images, videos, and downloadable materials—is provided for educational purposes only. You may not reproduce, distribute, or modify our content without proper authorization.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>User Accounts</h2>
        <p>
          When creating an account, you agree to provide accurate and complete information.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials.
        </p>
        <p>
          You must notify us immediately if you suspect any unauthorized use of your account.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Privacy</h2>
        <p>
          We respect your privacy. Please refer to our <Link href="/privacy-policy" className='text-blue-500 hover:underline'>Privacy Policy</Link> for details on how we collect, use, and protect your personal information.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Intellectual Property</h2>
        <p>
          All trademarks, logos, and intellectual property displayed on SkillMantra LMS are the property of their respective owners.
        </p>
        <p>
          You may not use our branding or content without explicit permission.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Prohibited Activities</h2>
        <p>Do not engage in any unlawful, harmful, or disruptive behavior on our website.</p>
        <p>Do not attempt to hack, reverse engineer, or interfere with our systems.</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Third-Party Links</h2>
        <p>
          SkillMantra LMS may contain links to external websites. We are not responsible for the content or practices of these third-party sites.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Disclaimer</h2>
        <p>
          While we strive for accuracy, we do not guarantee the completeness or correctness of the information provided.
        </p>
        <p>Use the content on SkillMantra LMS at your own risk.</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Modifications</h2>
        <p>
          We reserve the right to update or modify these terms and conditions at any time. Changes will be effective upon posting.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Governing Law</h2>
        <p>
          These terms and conditions are governed by the laws of [Your Jurisdiction].
        </p>
      </section>

      <footer className='mt-6'>
        <p>
          If you have any questions or concerns regarding these terms, please <Link href="/" className='text-blue-500 hover:underline'>contact us</Link>.
        </p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
