import React from 'react';

const Article: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
  }}>
    <div className="font-sans max-w-2xl mx-auto bg-blue-100 p-8 rounded-lg">
      <h1 className="text-center text-gray-800 text-2xl mb-4">Brain Human Interface</h1>
      <img src="brain_logo.jpg" alt="logo" className="absolute top-0 left-0 w-8 h-8" />

      <section className="mb-4">
        <h2 className="text-gray-600 text-lg mb-2">Introduction</h2>
        <p>This is a controversial topic and there are several considerations...</p>
      </section>
      <section className="mb-4">
        <h2 className="text-gray-600 text-lg mb-2">Consideration 1: Animal testing or something</h2>
        <p>Animal testing is necessary before human testing but possible cruelty considerations.</p>
      </section>
      <img src="monkey.jpg" alt="Brain Human Interface" className="mx-auto mb-8 rounded-lg" style={{ width: '300px', height: 'auto' }}/>
      <section className="mb-4">
        <h2 className="text-gray-600 text-lg mb-2">Human testing</h2>
        <p>This is dangerous ... blah blah blah</p>
      </section>
      <section>
        <h2 className="text-gray-600 text-lg mb-2">Societal Impact</h2>
        <p>How will this affect society? What does this mean for our future?</p>
      </section>
      <section>
        <h2 className="text-gray-600 text-lg mb-2">Benefits</h2>
        <p>Despite the danger involved, this technology could provide a lot of good outcomes on society</p>
        <p> People with spinal injuries and other medical uses</p>
      </section>
      <section>
        <h2 className="text-gray-600 text-lg mb-2">Conclusion</h2>
        <p>In conclusion, ...</p>
      </section>
    </div>
  </div>
  );
};

export default Article;
