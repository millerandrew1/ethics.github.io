import React from 'react';

const Article: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start', // Align items to the top
      height: '100vh',
      lineHeight: 1.5
    }}>
    <div className="font-sans max-w-2xl mx-auto bg-black-100 p-8 rounded-lg">
    <img src="brain_logo.jpg" alt="logo" className="absolute top-0 left-0 w-32 h-18" />
      <h1 className="text-center text-white font-bold text-3xl mb-4">Brain Human Interface</h1>

      <section className="mb-4">
        <h2 className="text-white-600 font-bold text-lg mb-2">Background</h2>
        <p>Neuralink is a company that is developing implantable brain–machine interfaces (BMIs). 
          The company was founded by Elon Musk and eight others, and is focused on creating devices that can be implanted in the human brain, with the eventual purpose of helping human beings merge with software and keep pace with advancements in artificial intelligence.</p>
        <p>This is a controversial topic and there are several considerations but the most central is the right to data privacy.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-white-600 font-bold text-lg mb-2">Problem Statement</h2>
        <p>**Insert Problem Statement Here**</p>
      </section>

      <section className="mb-4">
        <h2 className="text-white-600 font-bold text-lg mb-2">Ecosystem</h2>
        <p>High level employees and stakeholders</p>
        <p>Types of software and hardware engineers</p>
        <p>Government and regulatory bodies</p>
        <p>Human testers</p>
        <p>General public</p>
        </section>

      <section className="mb-4">
      
        <h2 className="text-white-600 font-bold text-lg mb-2">Leading Corporations and Competitors</h2>
        // subheading for each company followed by a quote or data
        <h2 className="text-white-600 font-bold text-lg mb-2">&nbsp;-&nbsp;&nbsp;Neuralink</h2>
        <p>How do they balance the need for data privacy with the need for data to train their models?</p>
        <p>Insert subheadings with quotes and data</p>

        <h3 className="text-white-600 font-bold text-lg mb-2">&nbsp;-&nbsp;&nbsp;Synchron</h3>
        <p>Differences and quotes</p>

        <h3 className="text-white-600 font-bold text-lg mb-2">&nbsp;-&nbsp;&nbsp;Precision Neuroscience</h3>
        <p>Differences and quotes</p>

      </section>

      <section className="mb-4">
        <h2 className="text-white-600 font-bold text-lg mb-2">References</h2>
        <p>Links</p>
        <p>People contacted</p>
        
      </section>


      <section className="mb-4">
        <h2 className="text-white-600 font-bold text-lg mb-2">Data Privacy</h2>
        <p>Who is the most at risk? </p>
        <p>People who need the Neuralink for medical reasons</p>
        <p>People with spinal or other brain injuries</p>
        <p>People with neurological disorders</p>
        <p>Human Testers</p>
      </section>
      <section className="mb-4">
        <h2 className="text-white-600 font-bold text-lg mb-2">Animal testing or something</h2>
        <p>Animal testing is necessary before human testing but possible cruelty considerations.</p>
      </section>
      <img src="monkey.jpg" alt="Brain Human Interface" className="mx-auto mb-8 rounded-lg" style={{ width: '300px', height: 'auto' }}/>
      <section className="mb-4">
        <h2 className="text-white-600 font-bold text-lg mb-2">Human testing</h2>
        <p>This is dangerous ... blah blah blah</p>
      </section>
      <section>
        <h2 className="text-white-600 font-bold text-lg mb-2">Societal Impact</h2>
        <p>How will this affect society? What does this mean for our future?</p>
      </section>
      <section>
        <h2 className="text-white-600 font-bold text-lg mb-2">Benefits</h2>
        <p>Despite the danger involved, this technology could provide a lot of good outcomes on society</p>
        <p> People with spinal injuries and other medical uses</p>
      </section>
      <section>
        <h2 className="text-white-600 font-bold text-lg mb-2">Lessons Learned</h2>
        <p>In conclusion, ...</p>
      </section>
    </div>
  </div>
  );
};

export default Article;
