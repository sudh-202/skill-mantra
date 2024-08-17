import { FC } from "react";

interface IconWrapperProps {
  icon: FC;
  size?: string;
  color?: string;
}

const IconWrapper: FC<IconWrapperProps> = ({ icon: Icon, size = '4rem', color = '#21355C' }) => (
  <div style={{ width: size, height: size, color }}>
    <Icon />
  </div>
);

export default IconWrapper;