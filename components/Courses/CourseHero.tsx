import Image from 'next/image';
import FormSection from '@/components/Courses/FormSection';
import { MdDownloadForOffline } from 'react-icons/md';
import { useParams } from 'next/navigation';
import { Coursesdata, STATIC_OFFER_DETAILS, COURSE_TITLES, COURSE_IMAGES } from '@/constants';

const CourseHero = () => {
    const { slug } = useParams(); // Get slug from URL parameters

    // Find the course based on slug
    const course = Coursesdata.find(course => course.slug === slug);

    if (!course) {
        return <div>Course not found</div>;
    }

    // Get static offer details
    const {
        offerText,
        scholarshipText,
        downloadText,
        downloadLink,
        countdown
    } = STATIC_OFFER_DETAILS;

    // Get dynamic title and image based on course slug
    const title = COURSE_TITLES[slug as keyof typeof COURSE_TITLES] || 'Course Title';
    const image = COURSE_IMAGES[slug as keyof typeof COURSE_IMAGES] || '/courses/default.webp'; // Default image if dynamic image is not found

    return (
        <>
            <section className="flex flex-col items-center justify-center bg-[#AABDE1] pb-[5vw]">
                <div className="flex flex-col md:flex-row items-center justify-center pt-8 gap-[10vw]">
                    <div className="relative rounded-full overflow-hidden w-[35vw] h-[35vw]">
                        <Image src={image} alt="Offer Image" layout="fill" objectFit="cover" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="bg-blue-90 text-white px-10 py-16 rounded-2xl flex flex-col items-center justify-center">
                            <h3 className="text-[1.5vw]">{offerText}</h3>
                            <p className="mt-2 text-[2vw] font-semibold">{scholarshipText}</p>
                            <a
                                href={downloadLink}
                                className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded-lg font-bold text-[2.4vw] flex gap-3 items-center"
                            >
                                <MdDownloadForOffline />
                                {downloadText}
                            </a>
                            <div className="flex justify-between mt-[5vw] text-center gap-10">
                                <div className="bg-white text-blue-90 py-4 px-8 rounded-2xl">
                                    <span className="block text-2xl font-bold">{countdown.days}</span>
                                    <span className="block text-sm">Days</span>
                                </div>
                                <div className="bg-white text-blue-90 py-4 px-8 rounded-2xl">
                                    <span className="block text-2xl font-bold">{countdown.hours}</span>
                                    <span className="block text-sm">Hours</span>
                                </div>
                                <div className="bg-white text-blue-90 py-4 px-8 rounded-2xl">
                                    <span className="block text-2xl font-bold">{countdown.minutes}</span>
                                    <span className="block text-sm">Minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-[5vw] font-bold text-center text-blue-90">{title}</h2>
            </section>
            <FormSection />
        </>
    );
};

export default CourseHero;
