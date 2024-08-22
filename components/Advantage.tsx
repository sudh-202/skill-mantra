import { FC } from "react";
import { featuresNew } from "@/constants";
import IconWrapper from '@/components/iconWrapper'; // Import the wrapper component
import styles from '@/styles/index';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: FC; // Using a React component for the icon
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md md:rounded-xl flex flex-col items-start h-[30vh] justify-center">
      <div className="">
        {/* <IconWrapper icon={Icon}  color="#21355C" size="45px"/> */}
      </div>
      <h3 className="mdtext-[1.8vw] text-[5vw] font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 md:text-sm text-gray-700">{description}</p>
    </div>
  );
};

const FeaturesSection: FC = () => {
  return (
    <section className="py-12 px-[10vw] md:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between">
        {featuresNew.map((feature, index) => (
          <div className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] mb-6 " key={index}>
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
