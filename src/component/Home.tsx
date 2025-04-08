import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const images = [
    { src: "/home1.webp", padding: "pt-32 pr-20", width: "w-[650px]", height: "h-[450px]" },
    { src: "/img2.png", padding: "pt-32 pr-20", width: "w-[650px]", height: "h-[450px]" },
    // { src: "/img3.png", padding: "pt-32 pr-20", width: "w-[650px]", height: "h-[450px]" },
    { src: "/img4.png", padding: "pt-32 pr-20", width: "w-[650px]", height: "h-[450px]" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setIsFading(false);
      }, 3000); // fade duration
    }, 4000); // change every 6 sec

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  const current = images[currentImageIndex];
  const next = images[nextImageIndex];

  return (
    <div className="min-h-screen bg-[#5364cd] text-gray-800 relative overflow-hidden">

      {/* Current Image */}
      <img
        src={current.src}
        alt="Hero"
        className={`fixed top-0 object-contain object-center right-0 hidden md:block rounded-2xl z-0 
          transition-opacity duration-[2000ms] ease-in-out
          ${current.padding} 
          ${current.width}
         
            h-xl
          ${isFading ? "opacity-0" : "opacity-100"}`}
      />

      {/* Next Image on top */}
      <img
        src={next.src}
        alt="Hero next"
        className={`fixed top-0 right-0 hidden md:block rounded-4xl z-0 object-contain object-center 
          transition-opacity duration-[2000ms] ease-in-out
          ${next.padding} ${next.width} ${next.height} max-w-[50%]
          ${isFading ? "opacity-100" : "opacity-0"}`}
      />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 bg-[#5364cd] text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <div className="text-xl font-semibold">
            <img className="w-20" src="/logo-icon.png" alt="McAfee Activate" />
          </div>
          <div className="flex items-center text-xl font-medium">
            <a href="#Start-Download">
              <button className="hover:bg-[red] py-3 px-4 rounded-lg">Get Download</button>
            </a>
            <button className="hover:bg-[red] py-3 px-4 rounded-lg">Blog</button>
            <a href="#Contacts">
              <button className="hover:bg-[red] py-3 px-4 rounded-lg">Contacts</button>
            </a>
          </div>
        </div>
      </nav>

      {/* Content Wrapper */}
      <div className="relative z-10 pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-20 py-16 text-white max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
            Activate McAfee LiveSafe with Your 25-Digit Code
          </h1>
          <p className="text-lg mb-6">
            Follow this guide to securely activate your McAfee subscription and protect your devices within minutes.
          </p>
          <button
            onClick={() => navigate('/entercode')}
            className="bg-red-600 hover:bg-red-700 transition-all text-white px-6 py-3 rounded font-semibold"
          >
            Enter Activation Code
          </button>
        </section>

        {/* Steps Overview */}
        <section className="bg-white py-14 px-6 md:px-20">
          <h2 className="text-2xl md:text-4xl font-bold text-[#333] mb-8 text-center">Getting Started</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-2">Step 1: Visit Activation Page</h3>
              <p>
                Go to <span className="text-blue-600 font-medium">www.mcafee.com/activate</span> in your browser.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Step 2: Sign In or Create Account</h3>
              <p>
                Use your McAfee account to sign in, or quickly register a new one if you're a first-time user.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Step 3: Enter 25-digit Code</h3>
              <p>
                Enter the code you received with your purchase. This will link the subscription to your account.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Step 4: Download & Install</h3>
              <p>
                Once the code is verified, download the installer and follow the on-screen installation steps.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Steps Section */}
        <section id="Start-Download" className="py-10 bg-gray-50 px-6 md:px-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Visual Guide</h2>
          <div className="max-w-4xl mx-auto">
            <img src="/EmbeddedImage copy.png" alt="McAfee Steps" className="rounded-lg w-full" />
            <div className="flex justify-center">
              <button
                className="bg-[#e62626] hover:bg-[#fa3c58] font-bold text-white px-6 py-3 rounded-lg"
                onClick={() => navigate('/EnterCode')}
              >
                Start Download
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-14 px-6 md:px-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Why Choose McAfee?</h2>
          <ul className="space-y-4 text-gray-700 max-w-4xl mx-auto">
            <li>✔️ Real-time Threat Detection</li>
            <li>✔️ Password Manager & Web Protection</li>
            <li>✔️ Coverage for All Your Devices</li>
            <li>✔️ Parental Controls for Safer Browsing</li>
            <li>✔️ 24/7 Support & Security Updates</li>
          </ul>
        </section>

        {/* Redeem Card Section */}
        <section className="bg-white py-16 px-6 md:px-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">How to Redeem Your McAfee Card</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
            <p>
              If you purchased a McAfee activation card from a retail store, follow these steps to redeem it and start your protection:
            </p>
            <ol className="list-decimal list-inside space-y-3">
              <li>Scratch off the silver panel on the back of your card to reveal the 25-digit activation code.</li>
              <li>Go to <span className="text-blue-600 font-medium">www.mcafee.com/activate</span>.</li>
              <li>Sign in or create a new McAfee account if you don’t have one.</li>
              <li>Enter the 25-digit code when prompted and click “Submit.”</li>
              <li>Your subscription will now be linked to your account. You can download your McAfee product immediately.</li>
            </ol>
            <p>
              Make sure to redeem the card within the validity period mentioned. Lost cards or used codes cannot be reissued.
            </p>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="bg-gray-50 py-16 px-6 md:px-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Common Activation Issues & Fixes</h2>
          <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
            <div>
              <h3 className="font-semibold text-xl mb-2">🚫 Invalid Activation Code</h3>
              <p>
                Double-check the 25-digit code for typos. Make sure you're entering it exactly as printed, including dashes if required.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">⚠️ Account Not Recognized</h3>
              <p>
                Ensure you’re using the same email address that you registered with. If needed, reset your password or create a new account.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">📥 Download Not Starting</h3>
              <p>
                Disable browser pop-up blockers or antivirus software temporarily. Try another browser if the issue persists.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">🛑 Installation Errors</h3>
              <p>
                Remove any old antivirus programs from your device before installing McAfee. Restart your system and try again.
              </p>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="Contacts" className="bg-gray-100 py-14 px-6 md:px-20 md:py-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Need Help?</h2>
          <p className="max-w-3xl mx-auto text-center text-gray-700 mb-4">
            If you run into any issues during activation or installation, our experts are available to help.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/entercode")}
              className="bg-[#3b82f6] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
            >
              Contact Support
            </button>
          </div>
        </section>

        {/* Disclaimer */}
        <footer className="text-center px-6 py-8 text-sm text-gray-900">
          <p>
            Disclaimer: This website is an independent resource and is not affiliated with McAfee or Intel Security. All product names, logos, and trademarks are the property of their respective owners.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
