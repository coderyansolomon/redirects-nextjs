import HomeButton from "./_components/HomeButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Next.js Redirects Guide</h1>
          <p className="text-xl mb-8">Your one-stop solution for all your redirect needs.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Get Started Redirecting
          </button>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Feature One</h2>
            <p className="mb-4">Description of feature one. Highlighting its benefits and key points.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Feature Two</h2>
            <p className="mb-4">Description of feature two. Highlighting its benefits and key points.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Feature Three</h2>
            <p className="mb-4">Description of feature three. Highlighting its benefits and key points.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="mb-4">"This app has changed my life! Highly recommend to everyone."</p>
              <p className="font-semibold">- User One</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="mb-4">"Incredible features and amazing support."</p>
              <p className="font-semibold">- User Two</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="mb-4">"A must-have app for anyone looking to improve their workflow."</p>
              <p className="font-semibold">- User Three</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join us today and experience the difference.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Sign Up Now
          </button>
        </section>
      </div>
    </div>
  );
}
