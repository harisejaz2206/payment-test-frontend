import Typewriter from 'typewriter-effect';
import { FiCheck, FiUsers, FiShield, FiActivity,FiLock, FiList} from 'react-icons/fi';

function Homepage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-white text-gray-800 py-28">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8">
            <Typewriter
              options={{
                strings: ['Welcome to DotBrand'],
                autoStart: true,
                loop: true,
                delay: 100, // Delay between each character typing
                deleteSpeed: 50, // Speed of character deletion
              }}
            />
          </h1>
          <p className="text-xl mb-8">Your White Label Solution for Pharmacies</p>
          <a
  href="#features"
  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 animate-bounce">

<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black hover:text-white rounded-md group-hover:bg-opacity-0">
      Learn More
  </span>
</a>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-36">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
            <div className="p-4 w-72 h-32 border rounded-lg shadow-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-800 via-violet-900 to-purple-800 text-white">
              <h3 className="text-xl font-semibold mb-2 ">Efficient Management</h3>
              <p className="text-gray-100">Streamline pharmacy operations.</p>
            </div>
            <div className="p-4 w-72 h-32 border rounded-lg shadow-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500 to-lime-600 text-white">
              <h3 className="text-xl font-semibold mb-2">Customer Engagement</h3>
              <p className="text-gray-100">Enhance patient care and engagement.</p>
            </div>
            <div className="p-4 w-72 h-32 border rounded-lg shadow-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 text-white">
              <h3 className="text-xl font-semibold mb-2">Analytics and Insights</h3>
              <p className="text-gray-100">Gain valuable insights and data-driven decisions.</p>
            </div>
            <div className="p-4 w-72 h-32 border rounded-lg shadow-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-700 to-pink-600 text-white">
              <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
              <p className="text-gray-100">Efficiently track and manage inventory.</p>
            </div>
            <div className="p-4 w-72 h-32 border rounded-lg shadow-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-600 to-red-600 text-white">
              <h3 className="text-xl font-semibold mb-2">Online Ordering</h3>
              <p className="text-gray-100">Enable online orders for convenience.</p>
            </div>
            <div className="p-4 w-72 h-32 border rounded-lg shadow-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white">
              <h3 className="text-xl font-semibold mb-2">Reporting and Analytics</h3>
              <p className="text-gray-100">Generate detailed reports.</p>
            </div>
            <div className="p-4 w-72 h-32 border rounded-lg shadow-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600 text-white">
              <h3 className="text-xl font-semibold mb-2">Reporting and Analytics</h3>
              <p className="text-gray-100">Generate detailed reports.</p>
            </div>
            <div className="p-4 w-72 h-32 border rounded-lg shadow-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400 text-white">
              <h3 className="text-xl font-semibold mb-2">Reporting and Analytics</h3>
              <p className="text-gray-100">Generate detailed reports.</p>
            </div>
          </div>
        </div>
      </section>

     {/* Benefits Section */}
<section id="benefits" className="py-32 bg-gray-200">
  <div className="container mx-auto text-center">
    <h2 className="text-2xl font-bold mb-12 ">Benefits</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="text-center">
         <div className="flex flex-col items-center ">
            <FiCheck size={45} color="#1E90FF" />
            <h3 className="text-xl font-semibold mb-2 mt-2 ">Optimized Workflow</h3>
          </div>
          <p className="text-gray-600">
                Maximize efficiency and minimize errors in your pharmacy's daily processes.
          </p>
      </div>
      <div className="text-center">
      <div className="flex flex-col items-center ">
         <FiUsers size={45} color="#32CD32" />
         <h3 className="text-xl font-semibold mb-2 mt-2 ">Patient Satisfaction</h3>
      </div>
      <p className="text-gray-600">
          Boost patient satisfaction and loyalty with improved services.
      </p>
      </div>
      <div className="text-center">
      <div className="flex flex-col items-center ">
        <FiShield size={45} color="#FF6347" />
        <h3 className="text-xl font-semibold mb-2 mt-2">Compliance & Security</h3>
        </div>
        <p className="text-gray-600">
          Ensure data security and compliance with industry standards.
        </p>
      </div>
      {/* Additional Benefits */}
      <div className="text-center mt-2">
      <div className="flex flex-col items-center ">
        <FiList size={45} color="#FFA500" />
        <h3 className="text-xl font-semibold mb-2 mt-2 ">Enhanced Efficiency</h3>
        </div>
        <p className="text-gray-600">
          Improve overall efficiency in pharmacy operations.
        </p>
      </div>
      <div className="text-center mt-2">
      <div className="flex flex-col items-center ">
        <FiActivity size={45} color="#00BFFF" />
        <h3 className="text-xl font-semibold mb-2 mt-2">Inventory Optimization</h3>
      </div>
        <p className="text-gray-600">
          Optimize inventory management and reduce waste.
        </p>
      </div>
      <div className="text-center mt-2 ">
      <div className="flex flex-col items-center ">
        <FiLock size={45} color="#FF1493" />
        <h3 className="text-xl font-semibold mb-2 mt-2">Data Security</h3>
        </div>
        <p className="text-gray-600">
          Protect sensitive patient data with robust security measures.
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Homepage;
