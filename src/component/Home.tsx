// import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen bg-[#5364cd] overflow-hidden">
      {/* Fixed Top Right Image */}
      <img
        src="/women.png"
        alt="woman"
        className="fixed top-0 pr-20 right-0 w-[450px] max-w-[50%] h-auto z-0 hidden md:block"
      />

      {/* Scrollable Content */}
      <div className="relative z-10 h-full overflow-y-auto">
        {/* Header Section */}
        <header className="text-white py-32 px-4 sm:px-8 md:px-40 md:pr-[480px]">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug">
              How to Quickly Activate McAfee LiveSafe with Your Purchase Code
            </h1>
            <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded text-lg font-semibold hover:bg-red-600 transition duration-300">
              GET STARTED
            </button>
          </div>
        </header>

        {/* Main White Section */}
        <div className="bg-white px-4 py-10">
          {/* Disclaimer */}
          <section className="flex justify-center py-4 text-sm text-gray-600">
            <p className="w-full max-w-5xl px-4 text-center md:text-left">
              Disclaimer: This website (mcafee.com/activate) is an independent guide created to help users understand the process of downloading, installing, and activating McAfee products such as McAfee Total Protection and McAfee LiveSafe.
              We are not affiliated with McAfee, Intel Security, or any other antivirus company. All product names, logos, and brands are the property of their respective owners and are used for informational purposes only.
            </p>
          </section>

          {/* Activation Section */}
          <section className="max-w-5xl mx-auto py-10 px-4">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-[#605b5b]">
              www.mcafee.com/activate
            </h2>
            <p className="text-gray-700 mt-4">
              McAfee provides all-in-one security solutions to keep your devices and personal data safe from online threats. With McAfee antivirus installed, you can enjoy peace of mind knowing that your system is shielded from viruses, malware, and cyberattacks.
              <br /><br />
              Each McAfee plan comes packed with advanced features like Password Manager, Parental Controls, Web Protection, and the ability to secure multiple devices under a single subscription.
              <br /><br />
              Whether you're browsing, shopping, or working online, McAfee’s award-winning protection ensures your privacy is never compromised.
              <br /><br />
              If you're new to McAfee or facing trouble setting it up, we’re here to assist you. This guide will walk you through every step—downloading, installing, and activating your McAfee subscription using the official site: www.mcafee.com/activate.
            </p>
          </section>

          {/* Steps Section */}
          <section className="max-w-4xl mx-auto py-10 px-4">
            <img src="/EmbeddedImage.png" alt="Steps" className="w-full h-auto rounded" />
            <div className="flex justify-center">

            <button className="bg-[#e62626] hover:bg-[#fa3c58] font-bold text-white rounded-lg px-4 py-3 mt-4">
              Get Start Download
            </button>
            </div>
            <h3 className="text-xl mt-10 font-semibold">How to Download McAfee</h3>
            <p className="text-gray-700">
              Downloading McAfee is the first and most crucial step to getting your device protected. Whether you're new to antivirus software or just upgrading, follow these clear instructions to download your McAfee product easily:
            </p>
            <ul className="list-decimal list-inside mt-2 space-y-2 text-gray-700">
              <li>
                Open Your Web Browser: <span className="text-blue-600">www.mcafee.com/activate</span>
              </li>
              <li>Explore McAfee Products</li>
              <li>Choose the Right Protection Plan</li>
              <li>Click on “Install Now”</li>
              <li>Proceed with Purchase or Login</li>
              <li>Download the Installer File</li>
            </ul>
          </section>

          {/* Installation Steps */}
          <section className="max-w-4xl mx-auto py-10 px-4">
            <h3 className="text-xl font-semibold">How to Install McAfee Antivirus</h3>
            <p className="text-gray-700">
              Once you’ve successfully downloaded McAfee from www.mcafee.com/activate, the next step is to install it properly on your device. Follow the steps below to complete the installation smoothly:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
              <li>Launch the Installer</li>
              <li>Review the License Agreement</li>
              <li>Accept the Terms</li>
              <li>Click Next to Continue</li>
              <li>Begin Installation</li>
            </ul>
          </section>

          {/* Activation Key Section */}
          <section className="max-w-4xl mx-auto py-10 px-4">
            <h3 className="text-xl font-semibold">Redeem Your McAfee Activation Key</h3>
            <p className="text-gray-700">
              Before activating your McAfee security product, you’ll first need to redeem the activation key you received during purchase. This key links your subscription to your McAfee account and unlocks access to full protection.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
              <li>Visit the Official Redemption Page</li>
              <li>Enter Your Activation Code</li>
              <li>Follow the On-Screen Instructions</li>
              <li>Link to Your McAfee Account</li>
              <li>Redemption Complete!</li>
            </ul>
          </section>

          {/* Final Activation Steps */}
          <section className="max-w-4xl mx-auto py-10 px-4">
            <h3 className="text-xl font-semibold">Steps for McAfee Activation</h3>
            <ul className="list-decimal list-inside mt-2 space-y-2 text-gray-700">
              <li>Launch the McAfee Application</li>
              <li>Click on "Continue"</li>
              <li>Enter your activation key.</li>
              <li>Submit and Authenticate</li>
              <li>Confirmation</li>
            </ul>
          </section>

          {/* Footer Disclaimer */}
          <footer className="text-center py-6 text-sm text-gray-600 px-4">
            <p>
              Disclaimer: This website is only a guide for users...
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
