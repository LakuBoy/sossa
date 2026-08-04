import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Quote, Trophy, Users, Target, Heart, Shield, Eye, Award, Handshake, Compass, Sparkles } from "lucide-react";

export default function MagazineStories() {
  const coreValues = [
    { title: "Professionalism", icon: <Shield className="w-6 h-6" /> },
    { title: "Transparency & Accountability", icon: <Eye className="w-6 h-6" /> },
    { title: "Integrity", icon: <Award className="w-6 h-6" /> },
    { title: "Humanity", icon: <Heart className="w-6 h-6" /> },
    { title: "Compassion", icon: <Heart className="w-6 h-6" /> },
    { title: "Partnership", icon: <Handshake className="w-6 h-6" /> },
    { title: "Respect for All", icon: <Users className="w-6 h-6" /> },
    { title: "Collective Action", icon: <Compass className="w-6 h-6" /> },
  ];

  const aims = [
    "To demonstrate the knowledge and skills necessary to succeed as a professional in the chosen sports discipline.",
    "To synthesize and evaluate theoretical information and integrate it into practice by explaining the issues and trends in sports, generating professional development in sports throughout South Sudan.",
    "To provide nationally recognized professional development program that offers quality assured training opportunities as part of the qualification for those involved in the sports development.",
    "To present the views of those involved in sports development relevant external agencies.",
    "To improve the lives of vulnerable children country wide through provision of education and discipline in South Sudan.",
    "To improve counselling and vacation trainings and skills in South Sudan.",
    "To ensure that protection and wellbeing of internally displaced persons (IDPs) and refugees in the global and South Sudan humanitarian context.",
    "To improve food security situations of the vulnerable groups in South Sudan.",
    "To promote behavioral change and communication on BCC in relation to WASH activities.",
    "To build resilience of vulnerable communities towards shocks and stresses and promote psycho-social support to the war affected people of South Sudan.",
    "To promote peace building and enhance community resilience.",
    "To promote peace building activities, sharing ideas and experience for peaceful coexistence and sustainable development.",
    "To improve the quality and relevance of education and sports in all of South Sudan communities.",
    "To engage in and promote peace or/and support empowering communities through enhancement of sports activities amongst the communities of South Sudan by establishing sports centers.",
    "To campaign, raise funds and lobby government to make available educational resources for a literate and peaceful community.",
    "To provide life saving and sustaining food assistances to improve food consumption, dietary diversity and coping strategies for the most vulnerable and at-risk communities.",
    "To promote, improve engage in and encourage complementing educational and sports activities in areas by helping by schools and entire communities of Jonglei state by urging institutions involved in education sector, to put resources located to the sector into maximum use.",
    "To engage in poverty eradicating programs amongst the vulnerable and poor communities of South Sudan through providing skills and knowledge to promote better agricultural activities especially in the animal and crop farming.",
    "To provide pro-poor socio-economic livelihood capacity building training and empowerment and adaptation of new innovations for rural transformation, and engage in promotion of agriculture/ fishing, production of local foods etc.",
    "To encourage spirit of hard work amongst the youth and discourage dependency to conduct skills development on training to enhance the skills of youths for self-substance.",
    "To serve and support child right activities in vulnerable and poor communities which are in dire need of socio-economic empowerment through poverty eradication programs.",
    "To campaign and create awareness against gender-based violence, rehabilitation of victims of gender-based violence.",
    "To encourage relief activities by providing food and shelter to those that are displaced in war turn countries.",
    "To provide veteran activities in the society of South Sudan.",
    "To campaign and support equality forum and anti-domestic violence programs to alleviate and eradicate the hideous practice of domestic violence and other similar practices that disenfranchises women, the elderly people with social needs and disabled persons etc.",
    "To provide clean water and sanitation and improve health conditions of the rural communities through sensitization on hygiene and sanitation.",
    "To establish programs and projects aimed at uplifting the standards of social life within the local communities of South Sudan for example the housing activities.",
    "To promote girl child's education in South Sudan and discourage earlier marriage.",
    "To carry out any charitable purposes or activities.",
  ];

  const athleteStories = [
    {
      name: "Athian Kuol",
      title: "From Refugee Camp to Kampala",
      img: "/team-training.jpeg",
      tag: "SOSSA Alumni",
      content: [
        {
          heading: "From Refugee Camp to Kampala",
          text: "It began in a refugee camp, where I discovered passion for basketball. Through sheer determination and dedication, I caught the attention of Solid Skills Sports Academy. Recognizing my potential, they provided me with an opportunity to pursue my education and basketball dreams in Kampala. This marked the first significant step in my journey.",
        },
        {
          heading: "Setback with F1 Student Visa in April 2021",
          text: "My path to success was not without its challenges. In April 2021, I faced a setback when my F1 visa application for the USA was denied at the consulate in Kampala. It was a tough moment, but Akech and Wal, my coaches, never lost faith in my abilities. They continued to support and encourage me, knowing that setbacks are a part of any great journey.",
        },
        {
          heading: "NBA Academy Trials in Senegal, June 2021",
          text: "A further opportunity presented itself when I got the chance to participate in NBA Academy trials in Senegal in June 2021. While I gave in all, the competition was fierce, and I was not selected. This could have been discouraging, but my resilience shone through, and I continued to pursue my dreams.",
        },
        {
          heading: "Second Chance at Orange Wood Academy, USA",
          text: "The turning point came when I received another chance to chase my dreams, this time at Orange Wood Academy in the USA. Through my talent and the support of my coaches, I earned a scholarship to study at Orange Wood while continuing my basketball journey.",
        },
      ],
      quote: "My story embodies the spirit of perseverance and resilience. It showcases the power of mentorship and the importance of not giving up in the face of adversity.",
      author: "By Alier Bech Kuch Alier, SOSSA Alumni",
    },
    {
      name: "Alier Bech Kuch",
      title: "A Journey of Determination",
      img: "/group-training.jpeg",
      tag: "SOSSA Alumni",
      content: [
        {
          heading: "A Remarkable Testament",
          text: "My basketball journey is a remarkable testament to my determination, resilience, and the unwavering support of coaches Akech and Wal from Solid Skills Sports Academy. A journey from a refugee camp in Kiryandongo settlement in Uganda to pursuing my dreams in the USA is truly inspiring.",
        },
      ],
      quote: "With the guidance of coaches Akech and Wal and my own unyielding determination, I am on a path to not only excel in basketball but also to fulfill my dreams and build a better future for myself.",
      author: "SOSSA Alumni",
    },
    {
      name: "Majok Mayul Chuol",
      title: "From Nyumazi to Sierra Canyon",
      img: "/private-training.jpeg",
      tag: "SOSSA Alumni",
      content: [
        {
          heading: "From Refugee Camp to Kampala Scholarship",
          text: "My name is Majok Mayul Chuol, my journey began in a refugee camp, where my passion for sports ignited. Being at a refugee camp with no facilities for other sports I was into football but one of my cousins who was playing basketball knew about Solid Skills Sports Academy who were giving scholarships in basketball so he brought me to tennis and with my height at that time 7 feet, they gave me the opportunity to play basketball under their mentorship opening doors to a brighter future that was beginning of 2019.",
        },
        {
          heading: "Tournament in Nairobi, Kenya, and US Scholarship Opportunity",
          text: "In August 2019, while playing for my school team from Uganda, I had the opportunity to compete in a tournament in Nairobi, Kenya. Where I had exceptional performance there led to a life-changing scholarship opportunity in the USA through Renaissance Academy. The dedicated efforts of my coaches, Akech and Wal, helped navigate the complex documentation process.",
        },
        {
          heading: "Interviews and Transition to the USA",
          text: "My journey took another significant step when I traveled to Nairobi, Kenya with my Mother for interviews in January 2020 where I was granted a visa to USA. However, the world was soon hit by the COVID-19 pandemic, causing travel restrictions and delays. Despite the challenges, I persisted.",
        },
        {
          heading: "Joining Sierra Canyon High School",
          text: "In 2021, my dream came true as I finally made the journey to the USA. I was not only able to attend school but also transferred to one of the best high school basketball teams, Sierra Canyon. Here, I found myself playing alongside the sons of Los Angeles Lakers superstar LeBron James. Additionally, being coached by LeBron James himself on occasion is a remarkable opportunity that few could ever imagine.",
        },
      ],
      quote: "My basketball journey is a testament to my talent, dedication, and the support of my coaches and mentors. My story is an inspiration to aspiring athletes worldwide, demonstrating that with hard work, resilience, and the right opportunities, dreams can become a reality, even against the most challenging odds.",
      author: "Majok Mayul Chuol",
    },
    {
      name: "Khaman Madit Maluach",
      title: "From Local Courts to the World Stage",
      img: "/clinics-camps.jpeg",
      tag: "SOSSA Alumni",
      content: [
        {
          heading: "The Beginning",
          text: "My name is Khaman Madit Maluach, my journey began in 2020 when a boda boda guy came across me on the road side and asked me to play basketball which I later thought about and went to K.I.U basketball court where I saw my heightmates playing the game and I became passionate about it. Then guided by the words of my late cousin Swampi Monytouch Ater (R.I.P), he trusted the wisdom to follow Coach Akech, a renowned South Sudanese coach. With Coach Akech's guidance, I earned a scholarship to high school, overcoming financial obstacles that once hindered my education.",
        },
        {
          heading: "Rising Through the Ranks",
          text: "Training alongside Coach Akech and Wal, my skills flourished. The culmination of my efforts resulted in a triumphant victory at a high tournament, marking my first championship with Bethel Covenant, where the two coaches were instrumental. However, the onset of the COVID-19 pandemic disrupted the normalcy of schools in Uganda.",
        },
        {
          heading: "NBA Academy Africa",
          text: "Undeterred, I persisted in my trainings under the mentorship of the coaches at Solid Skills Sports Academy. Their connections paved the way for me to join the NBA Academy Africa in Senegal. With relentless dedication, I improved significantly and entered the basketball limelight.",
        },
        {
          heading: "The Global Stage",
          text: "In 2022, I proudly represented Cobra Basketball Club in the Basketball Africa League (BAL). The following year, I continued my ascent in the basketball world by playing for AS DOUANES of Senegal. My remarkable journey reached new heights when I secured a spot on the roster for the South Sudan National Team in the FIBA 2023 World Cup held in the Philippines.",
        },
      ],
      quote: "Against all odds, my resilience, talent, and the guidance of my coaches propelled me from the local courts of Uganda to the global stage, where I proudly represented my nation on the world basketball stage.",
      author: "Khaman Madit Maluach",
    },
    {
      name: "Asunta Nyibol Ring",
      title: "The Rise of Ladies Basketball",
      img: "/shooting-school.jpeg",
      tag: "Ladies Basketball",
      content: [
        {
          heading: "Finding the Passion",
          text: "My name is Asunta Nyibol Ring also known as Nivil, born on 05.03.2006, South Sudanese female athlete. My basketball began in Uganda 2022. In that year I didn't have much interest in basketball because I wanted to focus on my academics as a basic life knowledge. I got inspired by coach Wal Deng, Coach Akec Wuoi and my elder brother Wol William who told me 'With your height, you could be a good basketball player if you're determined and work hard', and when I watched South Sudan women's basketball team play in their first Afro Basket in 2021, I picked much interest because my first goal was to work hard and make it to the team someday.",
        },
        {
          heading: "Overcoming Challenges",
          text: "I made up in heart and determined, spending most of my times attending Solid Skills Academy practice. I had less knowledge about the game but coach Wal told me not worry about it since I was attending daily practice schedule. I would watch high school basketball and it really made me love the game more, fuelled by the belief that with enough hard work anything is possible. I faced a lot of challenges with parents, relatives, since I'm a girl and girls aren't allowed to participate much in sports in my native home because they had less knowledge about the game and its capabilities. I wasn't allowed to practice at some point. And as a rookie in the game, I was willing and still on the verge of learning more about game. Yet with each setback, I emerged stronger and more determined than ever, fuelled by a burning desire to succeed.",
        },
        {
          heading: "Basketball Without Borders",
          text: "The academy played a pivotal role in shaping my basketball journey and enhancing my skills in a structured environment focused on developing fundamental skills such as ball handling, passing, shooting and defensive techniques. One morning, I woke up and got a call from coach Wal Deng, saying I was invited for BWB in South Africa. I was filled with a lot of excitement since it was my first time getting such a great basketball opportunity because I never imagined anything like it would happen. And with the opportunity to attend Basketball Without Borders, the basketball camp for young athletes, I felt like I was on the brink of something extraordinary.",
        },
        {
          heading: "A Scholarship to the USA",
          text: "And Solid Skills did much more by helping me secure a basketball scholarship to the United States. Through their assistance, I was able to cross continents to pursue my higher education and chasing my dreams of playing basketball at a higher level and I'm not stopping any sooner. I am grateful for every opportunity I have right now. And I am looking forward to the challenges and triumphs lying ahead.",
        },
      ],
      quote: "I really appreciate my family for the chance, the coaches, relatives and friends who are still playing a strong pivotal role in my journey and I am still willing and determined to work hard and finish what I started and dreamt of.",
      author: "Asunta Nyibol Ring",
    },
  ];

  return (
    <div className="w-full">
      {/* Magazine Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            to="/magazine"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Magazine
          </Link>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium">SOSSA Magazine</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Dribbling to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Success</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            The complete story of Solid Skills Sports Academy — our vision, our
            people, and the athletes who turned dreams into reality.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 mb-6">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to SOSSA</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We are Solid Skills Sports Academy, herein abbreviated (SOSSA);
              urged by a vision to create a vibrant society that is self reliant
              and resilient towards shocks and stress by providing services that
              create and promote such a society in the war-ravaged country.
            </p>
            <p>
              Cognizant of epidemic diseases, poverty, malnutrition, illiteracy
              and human rights abuses and cherishes social justice, harmony,
              sharing ideas, coexistence and love for human dignity and race
              effectively and efficiently utilizes the available human and
              material resources to propel the youth into creative thinking
              leading to self-reliance for sustainability and prosperity.
            </p>
            <p>
              Motivated to work with the youth and rural poor communities and
              vulnerable groups to improve their livelihood and increase
              self-reliance through awareness creation, education and support,
              food security and health nutrition improvement, capacity building,
              training and policy & advocacy for gender equality and human
              rights recognition and protection, the need to promote
              transparency, environment conservation through environmental
              awareness campaigns.
            </p>
            <p>
              Cognizant of the need to grow and develop through self-reliance
              strategies in this country as a means to cope up with actual needs,
              demands and challenges for the young people and the vulnerable.
            </p>
            <p>
              Realizing the need to equip and empower South Sudanese nationals
              through sharing ideas, peace building, trainings, seminars, and
              workshops.
            </p>
            <p>
              SOSSA is committed to empowering and supporting internally
              displaced persons (IDPs), refugees' youths, disadvantaged groups,
              vulnerable and poor communities, women, girl children and elderly
              people through community led initiatives to be productive and
              self-reliant, to restore hope to the vulnerable and poor
              communities. To restore hope and human dignity to those
              communities through youth empowerment.
            </p>
            <p>
              SOSSA is deeply committed to mitigate the impacts and effects of
              increasing poverty, illiteracy among the youth and local
              communities of South Sudan, persisting tribal clashes and
              conflicts, domestic violence, gender based violence (GBV), health
              and sanitation challenges, massive food insecurity, environmental
              and climatic changes, building capacities of the young people,
              vulnerable and poor communities within South Sudan, ordinary men
              and women to be able to eradicate poverty at all levels. Address
              human rights related abuses and revive positive cultural/traditional
              norms or values in our societies.
            </p>
          </div>
        </div>
      </section>

      {/* Aims & Objectives */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Aims & <span className="text-blue-500">Objectives</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Solid Skills Sports Academy as a humanitarian and developmental
              organisation shall have the mission of eradicating illiteracy,
              poverty and empowering communities to live productively in harmony
              and with dignity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {aims.map((aim, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm p-5 flex gap-4 hover:shadow-md transition"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{aim}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Letter */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 text-red-500 mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A Letter from Our <span className="text-red-500">Founder</span>
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-red-500">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-gray-900">Dear Supporters, Parents, and Sports Enthusiasts,</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              I am thrilled to reflect upon the journey of Solid Skills Sports
              Academy since its inception in 2017 right here in Uganda. Our
              mission to foster athletic excellence, character development, and
              community engagement has been the driving force behind our program.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Solid Skills Sports Academy was founded with the vision of providing
              youth in Uganda with a structured platform to develop their sporting
              talents while nurturing essential life skills. Our primary aim was
              to harness the incredible potential that exists within our young
              athletes and empower them to become not only exceptional
              sportspeople but also responsible, confident, and resilient
              individuals.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Since our humble beginnings, our core objectives have remained
              unwavering:
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-orange-50 rounded-xl p-5">
                <h3 className="font-bold text-orange-700 mb-2">SPORTS EXCELLENCE</h3>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to identifying and nurturing talent in various
                  sports disciplines, from football to athletics and beyond,
                  providing top-notch coaching, facilities, and opportunities for
                  our young athletes to excel at regional, national, and
                  international levels.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-2">CHARACTER DEVELOPMENT</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our holistic approach emphasizes the importance of discipline,
                  teamwork, leadership, and sportsmanship. We believe that these
                  values are as crucial on the field as they are in life.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-5">
                <h3 className="font-bold text-green-700 mb-2">COMMUNITY ENGAGEMENT</h3>
                <p className="text-gray-700 leading-relaxed">
                  Solid Skills Sports Academy has always been more than just a
                  training ground. We aim to instil a sense of responsibility in
                  our athletes towards their communities. We encourage community
                  service and involvement to create well-rounded individuals who
                  give back.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              As we look to the future, our long-term plans include:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Expansion:</strong> We aspire to expand our reach across Uganda, opening more academies and providing access to our programs for even more talented youth.</li>
              <li><strong>Scholarship Programs:</strong> Inclusivity is at the heart of our mission. We plan to establish scholarship programs to ensure that financial constraints do not hinder promising young athletes from pursuing their dreams.</li>
              <li><strong>International Exposure:</strong> We intend to facilitate international exposure and opportunities for our athletes, enabling them to compete on the global stage and bring recognition to Ugandan sports.</li>
              <li><strong>State-of-the-Art Facilities:</strong> Our vision includes the construction of modern sports facilities that meet international standards, allowing our athletes to train in the best possible environment.</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-8">
              Running our program as a youth-focused sports academy involves
              dedication, continuous improvement, and unwavering support from our
              dedicated team of coaches, mentors, and administrators. Together, we
              strive to nurture the next generation of sports stars and
              responsible citizens.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              We would like to express our heartfelt gratitude to all our
              supporters, parents, and the community for their unwavering support.
              Together, we have made remarkable strides, and the future holds even
              greater promise for Solid Skills Sports Academy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              Thank you for being a part of our incredible journey.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="font-bold text-gray-900 text-lg">AKECH WUOI GARANG</p>
              <p className="text-gray-500">Co-Founder, Solid Skills Sports Academy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-100 text-teal-600 mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vision, Mission & <span className="text-teal-500">Core Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">1) VISION</h3>
              <p className="text-gray-700 leading-relaxed">
                SOSSA is committed to creating a vibrant society through sports
                training and value addition to the youth of South Sudan in order
                to enhance peace in the country.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">2) MISSION</h3>
              <p className="text-gray-700 leading-relaxed">
                To create positive impact through sports and application of
                educational technology and experimental learning. The organization
                aims at developing and learning skills, enhancing career traits,
                expanding personal values and ultimately empower and inspire
                self-reliance.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">3) CORE VALUES</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl p-4 text-center hover:bg-teal-50 transition"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                    {value.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-800">{value.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coach Wal's Letter */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 mb-6">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Empowering Your Child Through <span className="text-indigo-500">Sports</span>
            </h2>
            <p className="text-lg text-gray-600">By Coach Wal Deng</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-indigo-500">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-gray-900">Dear Parents/Guardians,</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              I would like to begin by thanking you all for the continued support
              and guidance towards your children in their daily lives.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Solid Skills Sports Academy, we are committed to nurturing not
              only athletic talent but also the overall development of our young
              athletes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We guide them through the process of securing both athletic and
              academic scholarships and make your child's dream a reality whether
              it's in the NBA Academy Africa, USA, Uganda, or other part of the
              world by finding the perfect fit for their athletic and academic
              aspirations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We firmly believe that sports can be a powerful tool for educational
              advancement, character building, and personal growth. Through our
              basketball program, your child has the opportunity to earn
              scholarships that can open doors to higher education and a brighter
              future.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl mb-8">
              <p className="text-indigo-800 font-semibold">
                We don't just offer opportunities — we create pathways to success
                with 100% rate of securing scholarships for our athletes. Our
                dedicated approach ensures that your child's talent gets the
                recognition and support it deserves both locally and
                internationally.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              The benefits of sports participation extend far beyond the court.
              When your child joins our academy, they will experience:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { title: "Physical Fitness", desc: "Regular physical activity is crucial for maintaining good health. Our program helps your child stay active and build a strong foundation for a healthy lifestyle." },
                { title: "Teamwork and Leadership", desc: "Through team sports like basketball, your child will learn the value of collaboration, communication, and leadership, which are essential life skills." },
                { title: "Discipline and Time Management", desc: "Sports require dedication and commitment, teaching your child valuable lessons in discipline and time management that will benefit them in academics and their future careers." },
                { title: "Confidence and Self-Esteem", desc: "Achieving success in sports fosters self-confidence and self-esteem, helping your child tackle challenges with resilience and positivity." },
                { title: "Social Connections", desc: "Your child will form lasting friendships and create a sense of belonging within our academy, promoting social growth and emotional well-being." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed mb-8">
              I strongly encourage your child to become a part of our sports
              family at Solid Skills. Whether they dream of becoming a
              professional athlete, pursuing higher education through
              scholarships, or simply enjoying the many benefits of sports, we
              are here to support and guide them every step of the way.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Please don't hesitate to reach out if you have any questions or
              would like to learn more about our program. We look forward to
              welcoming your child to Solid Skills Sports Academy, where we
              believe in the power of sports to shape brighter futures and
              inspire generations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">Warm regards,</p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="font-bold text-gray-900 text-lg">WAL DENG MAYEN</p>
              <p className="text-gray-500">Co-Founder, Solid Skills Sports Academy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live to Inspire Others */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-600 mb-6">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Live to <span className="text-yellow-500">Inspire Others</span>
            </h2>
            <p className="text-lg text-gray-600">By Wal Deng Mayen, Co-Founder</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              My name is Wal Deng Mayen, Co-founder of the Solid Skills Sports
              Academy, one of the driving forces behind the growth of the program
              with a rich background in youth sports development. I want to share
              with you some exciting information about our program, the
              opportunities it offers to your children, and the invaluable
              benefits of engaging in sports activities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              In the competitive realm of youth basketball, one academy stands
              out as a breeding ground for future stars. The Solid Skills Sports
              Academy. Renowned for its commitment to excellence, this academy
              has crafted a winning formula that goes beyond the court, shaping
              not just athletes but well-rounded individuals.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-xl mb-6">
              <h3 className="font-bold text-yellow-700 mb-2">Winning Formula in Basketball</h3>
              <p className="text-gray-700 leading-relaxed">
                The academy's success is evident in the rising stars it has
                produced. Several alumni have gone on to secure scholarships at
                prestigious universities and colleges, while others have made a
                mark in professional basketball leagues. Solid Skills takes pride
                in its ability to nurture talent and provide a launchpad for
                young athletes to achieve their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Athlete Success Stories */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 mb-6">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success <span className="text-orange-500">Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the individuals who turn setbacks into comebacks, transforming
              adversity into fuel for their success.
            </p>
          </div>

          <div className="space-y-16">
            {athleteStories.map((story, idx) => (
              <article
                key={idx}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-72 md:h-full overflow-hidden">
                    <img
                      src={story.img}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {story.tag}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-3xl font-black">{story.name}</h3>
                      <p className="text-orange-200 font-medium">{story.title}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10">
                    <div className="space-y-6">
                      {story.content.map((section, sIdx) => (
                        <div key={sIdx}>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            {section.heading}
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {section.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="mt-8 bg-orange-50 rounded-2xl p-6 border-l-4 border-orange-500">
                      <Quote className="w-6 h-6 text-orange-400 mb-3" />
                      <p className="text-gray-700 italic leading-relaxed mb-3">
                        "{story.quote}"
                      </p>
                      <p className="text-sm font-semibold text-orange-600">
                        {story.author}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ladies Basketball Feature */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-100 text-pink-600 mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Growth of <span className="text-pink-500">Ladies Basketball</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Solid Skills Sports Academy has long been synonymous with excellence
              in sports development, and its commitment to nurturing talent
              extends to every corner of the athletic world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Skill Development Programs</h3>
              <p className="text-gray-700 leading-relaxed">
                Under the banner of Solid Skills Sports Academy, ladies'
                basketball programs have been meticulously designed to cultivate
                not only physical prowess but also strategic acumen. Through
                structured training sessions, athletes are honing their
                fundamental skills, such as dribbling, shooting, and defensive
                techniques. The emphasis on a solid skill foundation lays the
                groundwork for a new generation of proficient and versatile
                basketball players.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowering Female Athletes</h3>
              <p className="text-gray-700 leading-relaxed">
                Beyond the court, Solid Skills Sports Academy places a strong
                emphasis on empowering female athletes. Through mentorship
                programs and inspirational talks, players are encouraged to not
                only excel in sports but also to become leaders and role models
                in their communities. The academy recognizes the importance of
                instilling confidence and resilience in these athletes, fostering
                a sense of empowerment that extends far beyond the basketball
                court.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Quote className="w-8 h-8 text-pink-400" />
              <h3 className="text-2xl font-bold text-gray-900">A Supportive Environment</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              It's about creating an environment where female athletes can
              thrive, lead, and inspire.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In many cases, participation in sports has opened doors to
              educational opportunities through scholarships and grants. This has
              empowered women to pursue higher education and career paths they
              might not have considered otherwise.
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-8 text-center">
            <Quote className="w-8 h-8 mx-auto mb-4 opacity-80" />
            <p className="text-2xl font-bold italic mb-4">
              "The love for the game knows no gender boundaries."
            </p>
            <p className="text-pink-100">
              — Margret Adakjang Marieu & Umi Emanuel Nyantoto, SOSSA
            </p>
          </div>
        </div>
      </section>

      {/* Male Athletes Feature */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exploring the Grit and Determination of <span className="text-blue-500">Top Male Athletes</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Meet the individuals who turn setbacks into comebacks, transforming
            adversity into fuel for their success. Through interviews and
            behind-the-scenes access, we aim to capture the essence of their
            relentless pursuit of excellence.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full font-semibold">
            <Sparkles className="w-5 h-5" />
            Inspiring Others
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of the Next Success Story
          </h2>
          <p className="text-xl mb-10 text-orange-100 max-w-2xl mx-auto">
            Join Solid Skills Sports Academy and start your journey to greatness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Register Now
            </Link>
            <Link
              to="/magazine"
              className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-white/30 transition-all duration-300"
            >
              Back to Magazine
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}