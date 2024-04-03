import React from 'react';

const Article: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start', // Align items to the top
      height: '100vh'
  }}>
    <div className="font-sans max-w-2xl mx-auto bg-black-100 p-8 rounded-lg">
    <img src="brain_logo.jpg" alt="logo" className="absolute top-0 left-0 w-32 h-18" />
      <h1 className="text-center text-white font-bold text-3xl mb-4">Brain Human Interface</h1>

      <section className="mb-4">
        <h2 className="text-white-600 font-bold text-lg mb-2">Introduction</h2>
        <p>This is a controversial topic and there are several considerations...</p>
        <p> Primary ethical concern: Right to Data Privacy</p>
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
        <h2 className="text-white-600 font-bold text-lg mb-2">Conclusion</h2>
        <p>In conclusion, ...</p>
      </section>
    </div>
  </div>
  );
};

export default Article;
