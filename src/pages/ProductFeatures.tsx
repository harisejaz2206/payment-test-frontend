import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrescriptionBottle, faUserMd, faChartLine, faClinicMedical, faMobileAlt, faBarcode, faComments, faShieldVirus, faCogs, faCalendar, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

const ProductFeatures: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Product Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1: Medication Management */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faPrescriptionBottle} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Medication Management</h3>
            <p className="text-gray-600">
              Streamline medication management and dispensing for pharmacies.
            </p>
          </div>

          {/* Feature 2: Healthcare Professionals */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faUserMd} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Healthcare Professionals</h3>
            <p className="text-gray-600">
              Connect with healthcare professionals and provide quality care.
            </p>
          </div>

          {/* Feature 3: Analytics and Insights */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Analytics and Insights</h3>
            <p className="text-gray-600">
              Gain valuable insights and data-driven decision-making capabilities.
            </p>
          </div>

          {/* Feature 4: Clinical Integration */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faClinicMedical} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clinical Integration</h3>
            <p className="text-gray-600">
              Seamlessly integrate with clinical systems for better patient care.
            </p>
          </div>

          {/* Feature 5: Mobile Access */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile Access</h3>
            <p className="text-gray-600">
              Access your pharmacy application on mobile devices for convenience.
            </p>
          </div>

          {/* Feature 6: Barcode Scanning */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faBarcode} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Barcode Scanning</h3>
            <p className="text-gray-600">
              Effortlessly scan barcodes for quick and accurate inventory management.
            </p>
          </div>

          {/* Feature 7: Secure Messaging */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Messaging</h3>
            <p className="text-gray-600">
              Communicate securely with patients and healthcare providers.
            </p>
          </div>

          {/* Feature 8: Data Security */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faShieldVirus} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Security</h3>
            <p className="text-gray-600">
              Ensure the highest level of data security and compliance standards.
            </p>
          </div>

          {/* Feature 9: Automation */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faCogs} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Automation</h3>
            <p className="text-gray-600">
              Implement automation for repetitive tasks to save time and reduce errors.
            </p>
          </div>

          {/* Feature 10: Appointment Scheduling */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Appointment Scheduling</h3>
            <p className="text-gray-600">
              Allow patients to schedule appointments and manage their health online.
            </p>
          </div>

          {/* Feature 11: Electronic Health Records */}
          <div className="p-4 border rounded-lg shadow-xl bg-white text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faNotesMedical} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Electronic Health Records</h3>
            <p className="text-gray-600">
              Maintain digital health records to streamline patient care and documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
