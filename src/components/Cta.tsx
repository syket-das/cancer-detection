'use client';
import React, { useEffect } from 'react';
import { Container } from '@/components/Container';
import toast from 'react-hot-toast';

export const Cta = () => {
  const [file, setFile] = React.useState<File | null>(null);

  const [loading, setLoading] = React.useState(false);

  const predict = () => {
    toast('Match Found 80%', {
      icon: '👩‍💻',
    });
  };

  return (
    <Container id="try-now">
      <div className="flex flex-col flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Input an Image & Get a Prediction
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Get started with our AI-powered colorectal cancer detection system
            today. Upload an image, and receive a real-time prediction.
          </p>
        </div>

        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setFile(file);

                  predict();
                }
              }}
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="w-full"></div>
    </Container>
  );
};
