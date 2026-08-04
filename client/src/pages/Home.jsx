import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Users, Target, Heart, Sparkles, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-44 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Est. Solid Skills Sports Academy</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Building Champions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              On and Off the Court
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100">
            Empowering young athletes with skills, discipline, and teamwork.
            Your journey to greatness starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Join the Academy
            </Link>
            <Link
              to="/donate"
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-red-300/40 transition-all duration-300"
            >
              Support Us
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-red-500">SOSSA?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide world-class training and development opportunities for young athletes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Trophy className="w-10 h-10 text-yellow-500" />,
                title: "Proven Track Record",
                desc: "100% rate of securing scholarships for our athletes.",
              },
              {
                icon: <Users className="w-10 h-10 text-blue-600" />,
                title: "Expert Coaches",
                desc: "Learn from experienced coaches who've trained competitive athletes.",
              },
              {
                icon: <Target className="w-10 h-10 text-red-500" />,
                title: "Skill Development",
                desc: "From fundamentals to advanced techniques, we sharpen every skill.",
              },
              {
                icon: <Heart className="w-10 h-10 text-pink-500" />,
                title: "Holistic Growth",
                desc: "We develop athletes academically, personally, and on the court.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gray-50 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-500">Programs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Training designed for every level of athlete.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Private Training",
                desc: "One-on-one coaching focused on your specific strengths and weaknesses.",
                img: "/private-training.jpeg",
              },
              {
                title: "Group Training",
                desc: "Team-oriented sessions covering ball handling, shooting, and conditioning.",
                img: "/group-training.jpeg",
              },
              {
                title: "Camps & Clinics",
                desc: "Intensive training camps to develop fundamentals and introduce new skills.",
                img: "/clinics-camps.jpeg",
              },
            ].map((prog, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={prog.img}
                    alt={prog.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {prog.title}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed flex-1">{prog.desc}</p>
                  <Link
                    to="/programs"
                    className="text-red-500 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAGAZINE PREVIEW */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-semibold">SOSSA Magazine</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dribbling to <span className="text-red-500">Success</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Read the inspiring stories of our athletes — from refugee camps
                in Uganda to the NBA Academy, Basketball Africa League, and the
                FIBA World Cup. Discover the winning formula that shapes not
                just athletes, but well-rounded individuals.
              </p>
              <Link
                to="/magazine"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-red-300/40 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                Read the Magazine
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl shadow-2xl p-8 md:p-10 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-gray-400">SOLID SKILLS SPORTS ACADEMY</span>
                  <BookOpen className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-3">
                  Dribbling to
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    Success
                  </span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  The stories behind our champions — resilience, mentorship,
                  and dreams turned into reality.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["100% Scholarships", "NBA Academy", "FIBA World Cup", "Ladies Basketball"].map((tag) => (
                    <div
                      key={tag}
                      className="bg-white/10 rounded-xl px-4 py-3 text-center text-sm font-semibold"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-orange-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take Your Game to the Next Level?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-red-100">
            Join SOSSA today and start your journey to becoming a champion.
          </p>
          <Link
            to="/register"
            className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 inline-block"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}