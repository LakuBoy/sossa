import { Link } from "react-router-dom";
import { Eye, Target, Award, Users, Shield, Heart, Handshake, Compass } from "lucide-react";

export default function About() {
  const coreValues = [
    { title: "Professionalism", icon: <Shield className="w-8 h-8" /> },
    { title: "Transparency & Accountability", icon: <Eye className="w-8 h-8" /> },
    { title: "Integrity", icon: <Award className="w-8 h-8" /> },
    { title: "Humanity", icon: <Heart className="w-8 h-8" /> },
    { title: "Compassion", icon: <Heart className="w-8 h-8" /> },
    { title: "Partnership", icon: <Handshake className="w-8 h-8" /> },
    { title: "Respect for All", icon: <Users className="w-8 h-8" /> },
    { title: "Collective Action", icon: <Compass className="w-8 h-8" /> },
  ];

  const whyChoose = [
    { title: "Experienced Coaches", icon: <Users className="w-8 h-8" /> },
    { title: "Structured Programs", icon: <Target className="w-8 h-8" /> },
    { title: "Modern Facilities", icon: <Award className="w-8 h-8" /> },
    { title: "Proven Track Record", icon: <Shield className="w-8 h-8" /> },
  ];

  return (
    <div className="w-full">
      {/* Hero / Banner Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-500 text-white py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building Champions On and Off the Court
          </h1>
          <p className="text-xl md:text-2xl text-teal-100">
            Empowering players with skills, discipline, and teamwork
          </p>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-100 text-teal-600 mb-6">
            <Eye className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            SOSSA is committed to creating a vibrant society through sports training
            and value addition to the youth of South Sudan in order to enhance peace in the country.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-6">
            <Target className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            To create positive impact through sports and application of educational
            technology and experimental learning. The organization aims at developing
            and learning skills, enhancing career traits, expanding personal values
            and ultimately empower and inspire self-reliance.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core <span className="text-teal-500">Values</span>
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <div className="relative p-8 text-center z-10">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-white transition">
                    {value.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / History */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-teal-500">Story</span>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">Dear Parents/Guardians,</strong>
                <br />
                I would like to begin by thanking you all for the continuous support
                and guidance towards your children in their daily lives.
              </p>
              <p>
                At Solid Skills Academy, we are committed to nurturing not only
                athletic talent but also the overall development of our young athletes.
              </p>
              <p>
                We guide them through the process of securing both athletic and
                academic scholarships and make your child's dream a reality whether
                it's in the NBA Academy Africa, USA, Uganda, or other parts of the
                world by finding the perfect fit for their athletic and academic aspirations.
              </p>
              <p>
                We firmly believe that sports can be a powerful tool for educational
                advancement, character building, and personal growth. Through our
                basketball program, your child has the opportunity to earn scholarships
                that can open doors to higher education and a brighter future.
              </p>
              <p className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-xl">
                <strong className="text-teal-700">
                  We don't just offer opportunities — we create pathways to success
                  with 100% rate of securing scholarships for our athletes.
                </strong>
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/wal-about.jpeg"
              alt="Academy History"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-black">100%</p>
              <p className="text-sm">Scholarship Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-teal-500">Choose Us?</span>
            </h2>
            <p className="text-lg text-gray-600">
              The SOSSA advantage
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:bg-teal-500 group-hover:text-white transition">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take Your Game to the Next Level?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Join SOSSA and start your journey to success today.
          </p>
          <Link
            to="/register"
            className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 inline-block"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
}