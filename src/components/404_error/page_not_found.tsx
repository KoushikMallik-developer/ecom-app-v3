import React, { useEffect } from 'react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/src/components/404_error/js/404.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/src/components/404_error/css/404.css';
    document.head.appendChild(link);
  }, []);

  return (
    <>
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1752YPLP7H"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-1752YPLP7H");
          `}
        </script>

        <title>Space | tsParticles 404</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="../images/tsParticles-64.png"
        />
      </head>

      <body className="permission_denied">
        <div id="tsparticles"></div>
        <div className="denied__wrapper">
          <h1>404</h1>
          <h3>
            LOST IN <span>SPACE</span> Shoppixa? Hmm, looks like that page
            doesn't exist.
          </h3>
          <img
            id="astronaut"
            src="/src/components/404_error/images/astronaut.svg"
            alt="Astronaut"
          />
          <img
            id="planet"
            src="/src/components/404_error/images/planet.svg"
            alt="Planet"
          />
          <a href="/">
            <button className="denied__link">Go Home</button>
          </a>
        </div>

        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"
        ></script>
      </body>
    </html>
    </>
  );
};

export default NotFoundPage;
