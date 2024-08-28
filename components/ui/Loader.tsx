// components/ui/Loader.tsx

import React from 'react';

interface LoaderProps {
    className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => {
    return (
        <div className={`spinner ${className}`}>
            <style jsx>{`
                .spinner {
                    border: 4px solid rgba(0, 0, 0, 0.1);
                    border-radius: 50%;
                    border-top: 4px solid #3498db;
                    width: 24px;
                    height: 24px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Loader;
