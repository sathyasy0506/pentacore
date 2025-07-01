// components/ImageLayoutSection.jsx
import React from "react";

const ImageLayoutSection = () => {
  return (
    <div className="py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-full">
        <div
          className="scroll-container flex gap-8 overflow-x-auto"
          style={{ width: "100%" }}
        >
          {[...Array(2)].map((_, index) => (
            <div className="flex-shrink-0 flex flex-col gap-4" key={index}>
              {/* Large Image */}
              <div className="w-96 h-64 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Large Image"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Two Medium Images */}
              <div className="flex gap-4">
                <div className="w-44 h-40 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Medium Image 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-44 h-40 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Medium Image 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Another Large Image */}
              <div className="w-96 h-64 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1314543/pexels-photo-1314543.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Large Image 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Another Two Medium Images */}
              <div className="flex gap-4">
                <div className="w-44 h-40 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Medium Image 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-44 h-40 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Medium Image 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageLayoutSection;
