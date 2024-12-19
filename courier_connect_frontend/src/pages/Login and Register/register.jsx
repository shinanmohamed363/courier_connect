// src/pages/Register/Login.jsx

import Form from '../../components/Form';  // relative path to Form.jsx
import Background from '../../components/Background';  // relative path to Background.jsx
import ToggleButton from '../../components/ToggleButton';

export default function Register() {
  return (
    <div className="isolate bg-white dark:bg-gray-900 px-6 py-4 sm:py-32 lg:px-5 min-h-screen">
      <Background />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Create Your Account
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">Please fill in the details to register.</p>
      </div>
     
      <div className="flex items-center justify-center ">
        <Form /> 
      </div>
    </div>
  );
}
