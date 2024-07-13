import HomeButton from "../_components/HomeButton";
import { createUserName } from "../actions/createUserName";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HomeButton />
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        <div className="space-y-8">
          {/* Profile Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>
            <div className="bg-gray-800 rounded-lg p-6 space-y-4">
              <div>
              <form action={createUserName} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Username</label>
                    <input 
                    type="text" 
                    name="username"
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500" 
                    placeholder="Username" 
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
                </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500" placeholder="Email" />
              </div>
            </div>
          </section>

          {/* Account Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Account</h2>
            <div className="bg-gray-800 rounded-lg p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input type="password" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500" placeholder="Password" />
              </div>
              <div>
                <label className="block text-sm font-medium">Confirm Password</label>
                <input type="password" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500" placeholder="Confirm Password" />
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Preferences</h2>
            <div className="bg-gray-800 rounded-lg p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium">Language</label>
                <select className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Timezone</label>
                <select className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500">
                  <option>GMT</option>
                  <option>PST</option>
                  <option>EST</option>
                  <option>CET</option>
                </select>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}