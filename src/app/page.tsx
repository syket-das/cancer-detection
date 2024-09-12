import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { SectionTitle } from '@/components/SectionTitle';
import { Benefits } from '@/components/Benefits';
import { Video } from '@/components/Video';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { Cta } from '@/components/Cta';

import { benefitOne, benefitTwo } from '@/components/data';
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="AI Detection Benefits"
        title=" Why AI for Colorectal Cancer Detection?"
      >
        Deep learning has transformed the medical imaging field, especially in
        cancer detection. By analyzing gastrointestinal endoscopy images, AI
        models can detect polyps and other abnormalities more accurately and
        swiftly than traditional methods, significantly improving early
        diagnosis and treatment outcomes.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Our Technology"
        title="Learn how to fullfil your needs"
      >
        Harnessing the power of convolutional neural networks (CNNs) and
        advanced image segmentation techniques, our system has been trained on
        thousands of annotated endoscopic images. With a deep understanding of
        medical imaging, our AI model continually evolves to stay ahead in
        detecting even the smallest signs of colorectal cancer.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
