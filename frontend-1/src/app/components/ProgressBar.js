import React from 'react';

const ProgressBar = ({ currentStep }) => {
  const steps = [
    'Frontend',
    'Order Service',
    'Kafka',
    'Inventory Service',
    'Inventory UI',
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step} className="relative flex-1 flex items-center">
            {/* Step Indicator */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 ${index <= currentStep ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white' : 'bg-gray-300 text-gray-500'}`}
            >
              {index + 1}
            </div>
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-2">
                <div
                  className={`h-full rounded transition-all duration-500 ${index < currentStep ? 'bg-blue-600' : 'bg-gray-300'}`}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`text-sm flex-1 ${index < steps.length - 1 ? 'mr-2' : ''} transition-all duration-500 ${index <= currentStep ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;


