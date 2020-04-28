const SocialIcons: React.FunctionComponent = () => {
  return (
    <div className="flex items-center">
      {/*Twitter Icon*/}
      <div className="h-6 w-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.2 112.2">
          <circle cx="56.1" cy="56.1" r="56.1" style={{ fill: '#55acee' }} />
          <path
            d="M90.46,40.32a27.18,27.18,0,0,1-7.7,2.11A13.5,13.5,0,0,0,88.66,35a26.88,26.88,0,0,1-8.52,3.25A13.42,13.42,0,0,0,57.29,50.49a38.07,38.07,0,0,1-27.64-14,13.44,13.44,0,0,0,4.15,17.9,13.24,13.24,0,0,1-6.07-1.68v.17A13.41,13.41,0,0,0,38.48,66a13.43,13.43,0,0,1-6,.23A13.42,13.42,0,0,0,45,75.57,26.94,26.94,0,0,1,28.3,81.31a28.2,28.2,0,0,1-3.2-.19,38,38,0,0,0,20.56,6c24.66,0,38.15-20.43,38.15-38.15,0-.58,0-1.16,0-1.73a27.25,27.25,0,0,0,6.69-6.94Z"
            transform="translate(0)"
            style={{ fill: '#f1f2f2' }}
          />
        </svg>
      </div>
      {/*Pinterest Icon*/}
      <div className="h-6 w-6 ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.2 112.2">
          <circle cx="56.1" cy="56.1" r="56.1" style={{ fill: '#cb2027' }} />
          <path
            d="M60.63,75.12c-4.24-.33-6-2.43-9.35-4.45-1.83,9.59-4.06,18.79-10.68,23.59-2.05-14.5,3-25.38,5.34-36.94-4-6.72.48-20.25,8.9-16.91,10.36,4.09-9,25,4,27.59C72.4,70.73,77.93,44.49,69.53,36,57.38,23.63,34.18,35.67,37,53.31c.69,4.31,5.15,5.62,1.78,11.57C31,63.16,28.73,57,29,48.86c.49-13.37,12-22.74,23.59-24C67.25,23.19,81,30.2,82.88,44,85,59.5,76.28,76.33,60.63,75.12Z"
            transform="translate(0 0)"
            style={{ fill: '#f1f2f2' }}
          />
        </svg>
      </div>
      {/*Linkedin Icon*/}
      <div className="h-6 w-6 ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.2 112.2">
          <circle cx="56.1" cy="56.1" r="56.1" style={{ fill: '#007ab9' }} />
          <path
            d="M89.62,60.61V83.74H76.21V62.16c0-5.42-1.94-9.12-6.79-9.12A7.33,7.33,0,0,0,62.54,58a9.18,9.18,0,0,0-.45,3.26V83.74H48.68s.18-36.55,0-40.33H62.09v5.71c0,.05-.06.09-.08.14h.08v-.14a13.34,13.34,0,0,1,12.09-6.66c8.82,0,15.44,5.77,15.44,18.15ZM34.66,24c-4.59,0-7.59,3-7.59,7s2.91,7,7.41,7h.09c4.67,0,7.58-3.1,7.58-7s-2.91-7-7.49-7Zm-6.8,59.77H41.27V43.41H27.86Z"
            transform="translate(0 0)"
            style={{ fill: '#f1f2f2' }}
          />
        </svg>
      </div>
      {/*Youtube Icon*/}
      <div className="h-6 w-6 ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.32 291.32">
          <path
            d="M145.66,0A145.66,145.66,0,1,1,0,145.66,145.66,145.66,0,0,1,145.66,0Z"
            style={{ fill: '#c4302b' }}
          />
          <path
            d="M142.15,118.36A17.18,17.18,0,0,0,153,114.81a10.41,10.41,0,0,0,3.93-8.61V84.12a9.69,9.69,0,0,0-4-8A16.37,16.37,0,0,0,142.6,73q-6.9,0-11,2.93a9.25,9.25,0,0,0-4.09,7.91V106a10.61,10.61,0,0,0,4,8.68A16.58,16.58,0,0,0,142.15,118.36Zm-4.82-33.42a2.37,2.37,0,0,1,1.3-2,6.6,6.6,0,0,1,3.39-.77,7.41,7.41,0,0,1,3.65.77,2.33,2.33,0,0,1,1.38,2v21a2.77,2.77,0,0,1-1.36,2.45,6.75,6.75,0,0,1-3.67.88,5.87,5.87,0,0,1-3.48-.87,2.84,2.84,0,0,1-1.21-2.46Zm35.3,33.39c1.61,0,3.26-.93,5-1.86a18.63,18.63,0,0,0,5-4.13v4.91h8.6V73h-8.6v33.62a12.5,12.5,0,0,1-2.65,2.37,4.91,4.91,0,0,1-2.41.94,2,2,0,0,1-1.74-.71,3.63,3.63,0,0,1-.57-2.26V73h-8.58v37a9.78,9.78,0,0,0,1.51,5.93A5.64,5.64,0,0,0,172.63,118.33Zm25,18.31h-104c-16.53,0-29.93,12.88-29.93,28.75V189.7c0,15.87,13.4,28.75,29.93,28.75h104c16.52,0,29.92-12.88,29.92-28.75V165.39C227.57,149.52,214.16,136.64,197.64,136.64Zm-88.5,24.67H100v38.07H91.06V161.31h-9.2v-6.49h27.29Zm27.44,38.6H127V196a20.84,20.84,0,0,1-5.55,3.32,14.59,14.59,0,0,1-5.56,1.16,7,7,0,0,1-5-1.62A6.39,6.39,0,0,1,109.2,194V164h9.59v27.57a2.5,2.5,0,0,0,.58,1.84,2.79,2.79,0,0,0,2,.57,6.6,6.6,0,0,0,2.67-.76,12.38,12.38,0,0,0,3-1.93v-27.3h9.58Zm36.29-6.85a6.74,6.74,0,0,1-2.23,5.42c-1.47,1.27-3.63,1.88-6.43,1.88a15.71,15.71,0,0,1-5-.71,12.6,12.6,0,0,1-4.05-2.26v2.55h-9.57V154.82h9.57v14.54a15.35,15.35,0,0,1,4.06-2.31,12.4,12.4,0,0,1,4.37-.8c3,0,5.28.7,6.85,2.12a7.88,7.88,0,0,1,2.39,6.22Zm36.47-10.15H191.68v6.5a5.91,5.91,0,0,0,.9,3.78,4,4,0,0,0,3.13,1.05,4.62,4.62,0,0,0,3.23-.89c.6-.61.92-1.91.92-3.95v-1.56h9.5v1.76c0,3.54-1.14,6.19-3.49,8s-5.77,2.67-10.37,2.67q-6.21,0-9.77-2.84a9.42,9.42,0,0,1-3.57-7.81V174.12a8.66,8.66,0,0,1,3.93-7.32c2.61-1.88,6-2.81,10.11-2.81s7.47.87,9.75,2.61a8.92,8.92,0,0,1,3.39,7.51ZM104,118.46h10.86V92L127.5,54.67h-11l-6.72,25.51H109l-7-25.51h-11L104,93.19Zm55.17,53.07-2,.33-2,1v20.74a8.1,8.1,0,0,0,2.25,1.17l2.29.36a3.77,3.77,0,0,0,2.55-.71,2.88,2.88,0,0,0,.82-2.28V175a3.15,3.15,0,0,0-1-2.55A4.46,4.46,0,0,0,159.16,171.53Z"
            style={{ fill: '#fff' }}
          />
          <path
            d="M196.22,170a4.39,4.39,0,0,0-3.17.95,4.2,4.2,0,0,0-.94,3.09v3.48h8.16v-3.48a4.17,4.17,0,0,0-1-3.09A4.23,4.23,0,0,0,196.22,170Z"
            style={{ fill: '#fff' }}
          />
        </svg>
      </div>
    </div>
  );
};

export default SocialIcons;
