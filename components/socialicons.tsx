import React from 'react';

const SocialIcons: React.FunctionComponent = () => {
  return (
    <div className="flex w-full justify-around py-4">
      <div className="flex items-center transform scale-90">
        {/*Twitter Icon*/}
        <div className="h-6 w-8 transform hover:scale-125">
          <a
            href="https://twitter.com/keldrik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 416"
              className="fill-current text-gray-900 hover:text-blue-500"
            >
              <path
                d="M512,97.25a218.64,218.64,0,0,1-60.48,16.57,104.36,104.36,0,0,0,46.18-58,210,210,0,0,1-66.56,25.41A105,105,0,0,0,249.57,153,108,108,0,0,0,252,176.93C164.74,172.67,87.52,130.85,35.65,67.14A105,105,0,0,0,67.9,207.42,103.69,103.69,0,0,1,20.48,194.5v1.15a105.43,105.43,0,0,0,84.1,103.13,104.65,104.65,0,0,1-27.52,3.46,92.77,92.77,0,0,1-19.88-1.79c13.6,41.57,52.2,72.13,98.08,73.12A210.93,210.93,0,0,1,25.12,418.34,197.72,197.72,0,0,1,0,416.9,295.54,295.54,0,0,0,161,464c193.16,0,298.76-160,298.76-298.69,0-4.64-.16-9.12-.39-13.57A209.29,209.29,0,0,0,512,97.25Z"
                transform="translate(0 -48)"
              />
            </svg>
          </a>
        </div>
        {/*Pinterest Icon*/}
        <div className="h-6 w-5 ml-4 transform hover:scale-125">
          <a
            href="https://www.pinterest.de/Keldrik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 415.98 511.99"
              className="fill-current text-gray-900 hover:text-red-700"
            >
              <path
                d="M263,0C122.6,0,48,89.94,48,188c0,45.46,25.41,102.19,66.09,120.17,11.61,5.23,10.07-1.15,20-39.34a9,9,0,0,0-2.17-8.89C73.81,192.66,120.62,54.38,254.66,54.38c194,0,157.73,268.41,33.75,268.41-32,0-55.77-25.08-48.24-56.12,9.13-37,27-76.72,27-103.36,0-67.16-100.05-57.2-100.05,31.78,0,27.5,9.72,46.06,9.72,46.06s-32.19,130-38.16,154.35c-10.11,41.13,1.36,107.71,2.37,113.45.61,3.16,4.16,4.16,6.14,1.56,3.18-4.16,42.09-59.67,53-99.8,4-14.61,20.25-73.92,20.25-73.92,10.73,19.37,41.66,35.58,74.62,35.58,98.05,0,168.92-86.18,168.92-193.13C463.64,76.71,375.89,0,263,0Z"
                transform="translate(-48)"
              />
            </svg>
          </a>
        </div>
        {/*Linkedin Icon*/}
        <div className="h-6 w-6 ml-4 transform hover:scale-125">
          <a
            href="https://de.linkedin.com/in/wiegold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-current text-gray-900 hover:text-blue-700"
            >
              <path d="M256,0C114.64,0,0,114.64,0,256S114.64,512,256,512,512,397.36,512,256,397.36,0,256,0ZM181.61,387H119.26V199.43h62.35ZM150.44,173.81H150c-20.92,0-34.45-14.4-34.45-32.4,0-18.41,13.94-32.41,35.27-32.41s34.45,14,34.86,32.41C185.71,159.41,172.18,173.81,150.44,173.81ZM406.42,387H344.08V286.65c0-25.22-9-42.42-31.58-42.42-17.23,0-27.48,11.61-32,22.81-1.65,4-2.05,9.6-2.05,15.21V387H216.11s.82-170,0-187.57h62.35V226c8.28-12.78,23.11-31,56.18-31,41,0,71.78,26.81,71.78,84.43Z" />
            </svg>
          </a>
        </div>
        {/*Youtube Icon*/}
        <div className="h-6 w-8 ml-4 transform hover:scale-125">
          <a
            href="https://www.youtube.com/channel/UCaWQBJQFo8QiQ9xEotyU0dA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 352"
              className="fill-current text-gray-900 hover:text-red-600"
            >
              <path
                d="M490.24,113.92c-13.89-24.7-29-29.25-59.65-31C399.94,80.86,322.85,80,256.06,80s-144,.86-174.65,2.91c-30.63,1.76-45.73,6.27-59.75,31C7.36,138.59,0,181.09,0,255.9v.26c0,74.5,7.36,117.31,21.66,141.73,14,24.7,29.09,29.18,59.72,31.26C112,430.94,189.15,432,256.06,432s143.88-1.06,174.56-2.82c30.69-2.08,45.76-6.56,59.65-31.26C504.7,373.5,512,330.69,512,256.19v-.25C512,181.09,504.7,138.59,490.24,113.92ZM192,352V160l160,96Z"
                transform="translate(0 -80)"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
