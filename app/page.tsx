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
        <p>People who get the neurolink chips implanted into their heads are at risk of having their private data be insecure due to lack of regulations regarding the chip implant.</p>
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
      
        <h2 className="text-white-600 font-bold text-lg mb-2">Solutions</h2>
      
        <p>     In order to protect people’s private data one potential solution is to make sure that companies implement strong protocols that in the case the data gets hacked the hacker will not be able to see the data. Luckily we talked with Kostas Hatzianestis, Head of Wireless and System Integration at Precision Neuroscience, and he assured us that “digital data encryption is common in protecting private data.” </p>
         <br></br></section>
      <img src="project.png" alt="Brain Human Interface" className="mx-auto mb-8 rounded-lg" style={{ width: '150px', height: 'auto' }}/>     <p>Kostas Hatzianestis - Head of Wireless and System Integration at Precision Neuroscience
</p>
      <section className="mb-4">
   <br></br> <p>   However when doing research on he subject we looked at other medical devices that also store data like Pacemakers. Pacemakers are subject to strict regulations to ensure confidentiality and prevent unauthorized access. They must adhere to laws such as HIPAA (Health Insurance Portability and Accountability Act). The Neuralink however, since it is so new, has not had any sort of regulations placed on it. Due to the fact that the implant will be on the brian it will have access to very sensitive information so it is important that regulations are put in place to protect the users. </p>
          <br></br><p>   Another thing that can help solve this ethical dilemma is for Neurolink to be transparent with their users and inform them of everything that they plan to collect, and do with the data. The customers should be fully informed and given the choice to not have their data collected or be able to opt out at any time.
</p>
        

       

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
