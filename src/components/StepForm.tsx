// @ts-nocheck
'use client';
import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';

const steps = [
  { id: 'personal' },
  { id: 'symptoms' },
  { id: 'lifestyle' },
  { id: 'upload' },
  { id: 'review' },
];

const defaultData = {
  firstName: '',
  lastName: '',
  age: '',
  bloodInStool: '',
  changeInBowelHabits: '',
  familyHistory: '',
  diet: '',
  physicalActivity: '',
  photo: null,
};

const StepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  const renderStep = () => {
    switch (id) {
      case 'personal':
        return <PersonalInfo {...props} />;
      case 'symptoms':
        return <Symptoms {...props} />;
      case 'lifestyle':
        return <Lifestyle {...props} />;
      case 'upload':
        return <Upload {...props} />;
      case 'review':
        return <Review {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold my-16 ">Colorectal Cancer Screening</h1>

      <div className="">{renderStep()}</div>
    </div>
  );
};

const PersonalInfo = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, age } = formData;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={setForm}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 border"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={setForm}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 border"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-white">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={setForm}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 border"
          />
        </div>
      </div>
      <button
        onClick={navigation.next}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Next
      </button>
    </div>
  );
};

const Symptoms = ({ formData, setForm, navigation }) => {
  const { bloodInStool, changeInBowelHabits } = formData;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Symptoms</h2>
      <div className="space-y-4">
        <div>
          <p className="block text-sm font-medium text-white">
            Have you noticed blood in your stool?
          </p>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="bloodInStool"
                value="yes"
                checked={bloodInStool === 'yes'}
                onChange={setForm}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="bloodInStool"
                value="no"
                checked={bloodInStool === 'no'}
                onChange={setForm}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <div>
          <p className="block text-sm font-medium text-white">
            Have you experienced changes in bowel habits?
          </p>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="changeInBowelHabits"
                value="yes"
                checked={changeInBowelHabits === 'yes'}
                onChange={setForm}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="changeInBowelHabits"
                value="no"
                checked={changeInBowelHabits === 'no'}
                onChange={setForm}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={navigation.previous}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Previous
        </button>
        <button
          onClick={navigation.next}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Lifestyle = ({ formData, setForm, navigation }) => {
  const { familyHistory, diet, physicalActivity } = formData;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Lifestyle</h2>
      <div className="space-y-4">
        <div>
          <p className="block text-sm font-medium text-white">
            Do you have a family history of colorectal cancer?
          </p>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="familyHistory"
                value="yes"
                checked={familyHistory === 'yes'}
                onChange={setForm}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="familyHistory"
                value="no"
                checked={familyHistory === 'no'}
                onChange={setForm}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <div>
          <label
            htmlFor="diet"
            className="block text-sm font-medium text-white"
          >
            Describe your diet:
          </label>
          <input
            type="text"
            id="diet"
            name="diet"
            value={diet}
            onChange={setForm}
            placeholder="e.g., balanced, high in fiber, low in red meat"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 border"
          />
        </div>
        <div>
          <label
            htmlFor="physicalActivity"
            className="block text-sm font-medium text-white"
          >
            Describe your physical activity level:
          </label>
          <input
            type="text"
            id="physicalActivity"
            name="physicalActivity"
            value={physicalActivity}
            onChange={setForm}
            placeholder="e.g., sedentary, moderate, active"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 border"
          />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={navigation.previous}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Previous
        </button>
        <button
          onClick={navigation.next}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Upload = ({ formData, setForm, navigation }) => {
  const handleFileChange = (e) => {
    setForm({
      target: {
        name: 'photo',
        value: e.target.files[0],
      },
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Upload Photo</h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-white"
          >
            Upload a relevant medical image:
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            accept="image/*"
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={navigation.previous}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Previous
        </button>
        <button
          onClick={navigation.next}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Review
        </button>
      </div>
    </div>
  );
};

const Review = ({ formData, navigation }) => {
  const handleSubmit = () => {
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review Your Information</h2>
      <div className="space-y-2">
        <p>
          <strong>Name:</strong> {formData.firstName} {formData.lastName}
        </p>
        <p>
          <strong>Age:</strong> {formData.age}
        </p>
        <p>
          <strong>Blood in Stool:</strong> {formData.bloodInStool}
        </p>
        <p>
          <strong>Changes in Bowel Habits:</strong>{' '}
          {formData.changeInBowelHabits}
        </p>
        <p>
          <strong>Family History:</strong> {formData.familyHistory}
        </p>
        <p>
          <strong>Diet:</strong> {formData.diet}
        </p>
        <p>
          <strong>Physical Activity:</strong> {formData.physicalActivity}
        </p>
        <p>
          <strong>Photo Uploaded:</strong> {formData.photo ? 'Yes' : 'No'}
        </p>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={navigation.previous}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepForm;
