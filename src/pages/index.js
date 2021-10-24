import Layout from "../components/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <Layout>
      <div className="text-white flex flex-col justify-center items-center">
        <div className="w-full px-6">
          <div className="text-left pt-[60px] text-white" id="hero">
            <div className="font-bold text-[32px]">
              Hello, I am Jason<br />
              A Front End Developer<br />
            </div>
            <div className="py-[12px]">
              I develop mobile applications and websites
            </div>
            <button className="py-[6px] px-[18px] border rounded-full font-semibold hover:bg-white hover:bg-opacity-20">
              <a href="/contact">Get in touch</a>
            </button>
            <span className="px-[8px]" />
            <button className="py-[6px] px-[18px] border rounded-full font-semibold hover:bg-white hover:bg-opacity-20">
              <a href="/resume.pdf">My resume</a>
            </button>
            <div className="pt-[24px]">
              <a href="https://github.com/jasonleung101" rel="noreferrer noopener" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} className="text-[32px]" />
              </a>
              <span className="px-[6px]" />
              <a href="https://www.linkedin.com/in/wing-chung-jason-leung-814587162/" rel="noreferrer noopener" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="text-[32px]" />
              </a>
            </div>
          </div>
          <hr className="my-[24px]" />
          <div id="tech-stack">
            <div className="font-bold text-[32px]">
              Tech Stack
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full py-4 px-8 bg-white shadow-lg rounded-lg bg-opacity-20 my-[12px] sm:mx-[12px] sm:my-0">
                <div>
                  <img src="/images/Google-flutter-logo.svg" className="mb-[24px] max-h-[80px] max-w-full" />
                  <p className="mt-2 text-white">
                    This is my favourite mobile application framework<br /><br />
                    Experience: 2 years
                  </p>
                </div>
              </div>
              <div className="w-full py-4 px-8 bg-white shadow-lg rounded-lg bg-opacity-20 my-[12px] sm:mx-[12px] sm:my-0">
                <div>
                  <img src="/images/Nextjs-logo.svg" className="mb-[24px] max-h-[80px] max-w-full" />
                  <p className="mt-2 text-white">
                    This is my favourite static website JS framework<br /><br />
                    Experience: half year
                  </p>
                </div>
              </div>
              <a href="/my-work">
                Learn More &gt;
              </a>
            </div>
          </div>
          <hr className="my-[24px]" />
          <div id="job-exp">
            <div className="font-bold text-[32px]">
              Job Experience
            </div>
            <div className="w-full py-4 px-8 bg-white shadow-lg rounded-lg bg-opacity-20 my-[12px] sm:mx-[12px] sm:my-0">
              <div>
                <p className="text-white font-bold text-[26px]">Oct 2020 - Current</p>
                <img src="/images/pwh.png" className="my-[24px] max-h-[80px] max-w-full" />
                <p>Job highlight : </p>
                <ul className="list-disc">
                  <li className="my-[6px]">
                    Working on the Project team
                  </li>
                  <li className="my-[6px]">
                    Design and build iOS and Android application using Flutter, Android Studio, and XCode
                  </li>
                  <li className="my-[6px]">
                    Using Gitlab Runner, AWS including CodePipeline, S3, EC2, and RDS to create CI/CD
                  </li>
                </ul>
                <p>Achievements : </p>
                <ul className="list-disc">
                  <li className="my-[6px]">
                    Virtual Bank – Pre-lending System Project
                  </li>
                  <li className="my-[6px]">
                    Official Mobile app – Powerhouse Technologies
                  </li>
                  <li className="my-[6px]">
                    Trading App partner with a Financial Institutions
                  </li>
                </ul>
                <a href="/my-work" className="pt-[12px]">
                  Learn More &gt;
                </a>
              </div>
            </div>
            <div className="w-full py-4 px-8 bg-white shadow-lg rounded-lg bg-opacity-20 my-[12px] sm:mx-[12px] sm:my-0">
              <div>
                <p className="text-white font-bold text-[26px]">Aug 2020 - Oct 2020</p>
                <img src="/images/origo-logo.svg" className="my-[24px] max-h-[80px] max-w-full" />
                <p>Job highlight : </p>
                <ul className="list-disc">
                  <li className="my-[6px]">
                  Creating scalable and functional websites and applications using HTML5/CSS3/JS
                  </li>
                  <li className="my-[6px]">
                  Collaborate with design and backend teams for web development
                  </li>
                  <li className="my-[6px]">
                  Translating designs and wireframes into actual and reusable code
                  </li>
                </ul>
                <a href="/my-work" className="pt-[12px]">
                  Learn More &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
