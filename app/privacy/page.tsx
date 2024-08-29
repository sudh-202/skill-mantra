import { NextPage } from 'next';
import Link from 'next/link';

const PrivacyPolicy: NextPage = () => {
  return (
    <div className='max-w-4xl mx-auto p-6 space-y-6 mt-[10vw]'>
      <h1 className='text-5xl  text-center font-bold mb-10'>Privacy Policy</h1>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Who We Are</h2>
        <p>
          Our website address is: <a href="/" target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>Skill Mantra</a>.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Comments</h2>
        <p>
          When visitors leave comments on the site, we collect the data shown in the comments form, as well as the visitor’s IP address and browser user agent string to help with spam detection.
        </p>
        <p>
          An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. After approval of your comment, your profile picture is visible to the public in the context of your comment.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Media</h2>
        <p>
          If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Cookies</h2>
        <p>
          If you leave a comment on our site, you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
        </p>
        <p>
          If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
        </p>
        <p>
          When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
        </p>
        <p>
          If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Embedded Content from Other Websites</h2>
        <p>
          Articles on this site may include embedded content (e.g., videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
        </p>
        <p>
          These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Who We Share Your Data With</h2>
        <p>If you request a password reset, your IP address will be included in the reset email.</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>How Long We Retain Your Data</h2>
        <p>
          If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
        </p>
        <p>
          For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>What Rights You Have Over Your Data</h2>
        <p>
          If you have an account on this site or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Where Your Data Is Sent</h2>
        <p>Visitor comments may be checked through an automated spam detection service.</p>
      </section>

      <footer className='mt-6'>
        <p>
          For more details, you can visit our <Link href="/" className='text-blue-500 hover:underline'>home page</Link>.
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
