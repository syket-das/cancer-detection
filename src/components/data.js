import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

import benefitOneImg from '../../public/img/benefit-one.png';
import benefitTwoImg from '../../public/img/benefit-two.png';

const benefitOne = {
  title: 'How It Works',
  desc: 'Our AI-powered colorectal cancer detection system simplifies the process of identifying abnormalities in gastrointestinal endoscopy images. By leveraging advanced deep learning algorithms, we ensure faster, more accurate detection. Here’s a brief overview of how it works:',
  image:
    'https://images.unsplash.com/photo-1630959302862-82cec6653d60?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  bullets: [
    {
      title: 'Image Acquisition',
      desc: 'Endoscopy images are captured during a standard gastrointestinal endoscopy procedure, which provides a real-time view of the colon and rectum.',
      icon: <FaceSmileIcon />,
    },
    {
      title: 'Data Preprocessing',
      desc: 'The images undergo preprocessing to enhance image quality and standardize formats. This step reduces noise and improves the accuracy of deep learning models.',
      icon: <ChartBarSquareIcon />,
    },
    {
      title: ' Deep Learning Model Analysis',
      desc: 'A pre-trained deep learning model, specifically designed for medical imaging, processes the endoscopic images. The model is capable of detecting potential cancerous lesions, polyps, or abnormal growths with precision.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: ' Diagnosis and Reporting',
      desc: 'The AI-generated diagnosis is validated by medical experts. A detailed report is prepared, outlining any detected abnormalities, along with recommended follow-up steps or treatments.',
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: 'Benefits of AI-Driven Colorectal Cancer Detection',
  desc: 'Using AI for colorectal cancer detection brings significant advantages over traditional methods. By harnessing the power of deep learning, our system enhances diagnostic accuracy, speeds up analysis, and ensures more reliable results. Here are some key benefits of AI-driven detection:',
  image:
    'https://images.unsplash.com/photo-1631049122761-ebf51910f814?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  bullets: [
    {
      title: 'Increased Accuracy',
      desc: 'Deep learning algorithms reduce the risk of missed polyps and other signs of colorectal cancer.',
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: 'Faster Diagnosis',
      desc: 'AI can analyze images in real-time, providing instant feedback to healthcare professionals.',
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: 'Cost-Effective',
      desc: 'Automating the analysis of endoscopy images reduces manual labor and associated costs.',
      icon: <SunIcon />,
    },
    {
      title: 'Early Detection',
      desc: 'Early identification of potential cancerous lesions improves survival rates and treatment outcomes.',
      icon: <SunIcon />,
    },
    {
      title: 'Consistency',
      desc: 'AI eliminates variability in diagnoses that may arise from human fatigue or subjective interpretation.',
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
