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
          The company was founded by Elon Musk and seven others, and is focused on creating devices that can be implanted in the human brain, with the eventual purpose of helping human beings merge with software and keep pace with advancements in artificial intelligence.</p>
        <p>This is a controversial topic and there are several considerations, but our focus will be the right to data privacy.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-white-600 font-bold text-lg mb-2">Problem Statement</h2>
        <p>Individuals, especially those who are disabled, that receive a brain-machine implant such as Neuralink could risk breaches or unethical uses of their private data, especially due to the absence of updated regulations.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-white-600 font-bold text-lg mb-2">Ethical Considerations</h2>
        <p>Our team realized the pace of neural implant development is rapidly increasing, which led us to consider who is most at risk due to this technology. 
          This technology has many potential applications but, at the current state, it is mostly aimed to help those with spinal cord injuries. </p>
          <br></br>
          <img src="tiny-neural-implant-spinal-injury-control-limbs.webp" alt="Brain Human Interface" className="mx-auto mb-8 rounded-lg" style={{ width: '350px', height: 'auto' }}/>
          <p>These early adapters are most at risk due to the developing nature of the technology and potential data breaches. </p>
          <p>
          Aside from unintentional data breaches, there is also the fact that as technology rapidly advances, oftentimes regulations are slow to keep up. 
          Regulations regarding the protection of this data is paramount. 
          There is concern about how HIPAA will apply to this technology and it is likely that laws and regulations will need to adapt to the protection of the vast amount and private nature of this data. 
            The main issue is that direct-to-consumer products do not need to abide by HIPAA which means that as this becomes available to the general public, the limited protection that HIPAA provides will no longer protect consumer data <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6814252/" style={{ color: '#87CEEB' }}target="_blank">[1]</a>. 
            There is no current national standard for this neural data protection, leaving individual states to write their own regulations with varying degrees of protection <a href="https://www.vox.com/future-perfect/24078512/brain-tech-privacy-rights-neurorights-colorado-yuste" style={{ color: '#87CEEB' }}target="_blank">[2]</a>.</p>
          <br></br>
          <p>Our group believes that there must be a robust regulatory framework established to this emerging issue. 
            We also believe that this data is too valuable to play catch up with regulations as breaches inevitably occur. </p>
            <p>
            For this reason, our group believes that awareness needs to be raised in order to protect the most vulnerable. 
            We need to ensure that those receiving this implant are aware of the data privacy risks that this imposes. 
            These early adopters are most at risk and should have the knowledge and agency to make informed decisions about the use of this neural interface technology<a href="https://blogs.ischool.berkeley.edu/w231/2021/07/09/brain-machine-interfaces-and-neuralink-privacy-and-ethical-concerns/" style={{ color: '#87CEEB' }}target="_blank">[3]</a>.
            They should be aware that letting a device access their brain waves could mean they are risking “identity theft, password hacking, and blackmail” <a href="https://www.fastcompany.com/91029453/unpacking-the-ethical-issues-swirling-around-neuralink" style={{ color: '#87CEEB' }}target="_blank">[4]</a>.</p>
            <p>It is necessary that Neuralink and other companies in this field are transparent and accountable with the handling, storage, and protection of user data.
</p>
      </section>


      <section className="mb-4">
        <h2 className="text-white-600 font-bold text-lg mb-2">Ecosystem</h2>
        <p>During our research, we identified two main companies that are focused on creating brain-machine interfaces.</p>
        <br></br>
        <p>The first, and most recognizable, company is Neuralink, as previously mentioned. Neuralink has performed human trials, and have reportedly enabled a paralyzed individual to control a computer mouse with their mind. The company has faced scrutiny for ethical issues realted to animal testing, and no employees responded to our requests for a comment.</p>
        <br></br>
        <p>The second company we have identified is Precision Neuroscience, founded in 2021 by Benjamin Rapoport, a cofounder of Neuralink, as well as Demetrios Papageorgiou and Mark Hettick. The company is focused on creating a device that requires the most minimally invasive surgery, and has performed human trials.</p>
        <br></br>
        <p>During our research, we made contact with Kostas Hatzianestis from Precision Neuroscience, and his comments are mentioned below.</p>
        <br></br>
        <p>The most important, and most vulnerable, members of this ecosystem are the patients undergoing the surgery.  At this time, all devices are being targeted towards disabled individuals.  Our chief concern is the privacy of the data of the user, which should be protected to the highest degree.  Disabled individuals have been historically marginalized, and a lapse in ethical procedures or regulations could have real consequences. Furthermore, individuals such as Elon Musk have expressed their desire to move beyond only disabled persons and produce implants for able-bodied individuals, which will drastically increase the scale of privacy concerns.</p>
        <br></br>
        <p>These privacy concerns should therefore be addressed from the start, with comprehensive regulations for user privacy or an inclusion into HIPPA laws, which will ensure that the public is protected.</p>
        </section>

      
      <section className="mb-4">
      
        <h2 className="text-white-600 font-bold text-lg mb-2">Solutions</h2>
      
        <p>     In order to protect people’s private data one potential solution is to make sure that companies implement strong protocols that in the case the data gets hacked the hacker will not be able to see the data. 
          Luckily we talked with Kostas Hatzianestis, Head of Wireless and System Integration at Precision Neuroscience, and he assured us that “digital data encryption is common in protecting private data.” </p>
         <br></br></section>
      <img src="project.png" alt="Brain Human Interface" className="mx-auto mb-8 rounded-lg" style={{ width: '150px', height: 'auto' }}/>     <p>Kostas Hatzianestis - Head of Wireless and System Integration at Precision Neuroscience
</p>
      <section className="mb-4">
   <br></br> <p>   However when doing research on he subject we looked at other medical devices that also store data like Pacemakers. 
    Pacemakers are subject to strict regulations to ensure confidentiality and prevent unauthorized access. 
    They must adhere to laws such as HIPAA (Health Insurance Portability and Accountability Act). 
    The Neuralink however, since it is so new, has not had any sort of regulations placed on it. 
    Due to the fact that the implant will be on the brian it will have access to very sensitive information so it is important that regulations are put in place to protect the users. </p>
          <br></br><p>   Another thing that can help solve this ethical dilemma is for Neuralink to be transparent with their users and inform them of everything that they plan to collect, and do with the data. 
            The customers should be fully informed and given the choice to not have their data collected or be able to opt out at any time.
</p>
        
<br></br>
       
      <section>
        <h2 className="text-white-600 font-bold text-lg mb-2">Societal Impact</h2>
        <p>How will this affect society? What does this mean for our future?</p><br></br>
      </section>
      <section>
        <h2 className="text-white-600 font-bold text-lg mb-2">Benefits</h2>
        <p>Despite the danger involved, this technology could provide a lot of good outcomes on society</p>
        <p> People with spinal injuries and other medical uses</p><br></br>
      </section>
      <section>
        <h2 className="text-white-600 font-bold text-lg mb-2">Lessons Learned</h2>
        <p>During the completion of this project, one of the lessons we learned was that ethical issues surrounding emerging technologies are complex and require careful consideration from multiple angles. Many times, issues like bias and prejudice can get in the way of properly examining ethics, therefore, it is important to be honest and impartial.
         <br></br><br></br> Another lesson we learned came from contacting relevant stakeholder. While it was challenging to get a response that was helpful to us, we developed effective strategies that helped us, such as research and targeting, regular updates and communication within our group, and using various media outlets to reach out. 
          <br></br><br></br>Additionally, the importance of transparency in technology, especially concerning data privacy and consumer rights, was something we all learned as well. No matter what the new technology or breakthrough is, there is always a necessity to check for any outlying ethical issues that may pop up currently or even in the future. 
          We used various ethical decision-making frameworks, such as utilitarianism and principle-based ethics, to evaluate options and navigate complex dilemmas effectively. 
          Our project emphasized the need for ongoing learning and adaptation to address evolving ethical challenges like bias, discrimination, and privacy.
</p>
      </section>

      </section>

      <section className="mb-4">
        <h2 className="text-white-600 font-bold text-lg mb-2">References</h2>
        <p>{"[1] https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6814252/"}</p>
        <p>{"[2] https://www.vox.com/future-perfect/24078512/brain-tech-privacy-rights-neurorights-colorado-yuste"}</p>
        <p>{"[3] https://blogs.ischool.berkeley.edu/w231/2021/07/09/brain-machine-interfaces-and-neuralink-privacy-and-ethical-concerns/"}</p>
        <p>{"[4] https://www.fastcompany.com/91029453/unpacking-the-ethical-issues-swirling-around-neuralink"}</p>

        <br></br>
        <h2 className="text-white-600 font-bold text-lg mb-2">People Contacted</h2>
        <p>Ruthie Forney</p>
        <p>  Product Development Leader at Precision Neuroscience</p>
         <p> No response</p><br></br>
        <p>  Randy Glein</p>
        <p>  Tech Investor for Neuralink</p>
         <p> No response </p><br></br>
         <p> Michael Moran</p>
          <p>Production facility coordinator for Neuralink & SpaceX</p>
          <p>No response
</p>
      </section>


      
    </div>
  </div>
  );
};

export default Article;
