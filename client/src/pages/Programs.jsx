import { Link } from "react-router-dom";
import { Dumbbell, Users, Trophy, Flame, Target, ArrowRight } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Private/Individual Training",
      desc: "One-on-one training allows our coaches to direct all their attention and basketball knowledge into breaking down and assessing the strengths and weaknesses of a player.",
      img: "/private-training.jpeg",
      icon: <Dumbbell className="w-6 h-6" />,
    },
    {
      title: "Group Training",
      desc: "Our group training sessions consists of a total game tune-up focusing on ball handling, game moves, shooting, conditioning, footwork, and more.",
      img: "/group-training.jpeg",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Team Training",
      desc: "Our team training sessions are great ways to prepare a team for pre-season, post season and the playoffs.",
      img: "/team-training.jpeg",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: "Clinics & Camps",
      desc: "Our clinics/camps focus on developing and strengthening fundamentals, while introducing new skills to players.",
      img: "/clinics-camps.jpeg",
      icon: <Flame className="w-6 h-6" />,
    },
    {
      title: "Shooting School",
      desc: "Our shooting workouts help players to develop confidence in shooting the basketball in games.",
      img: "/shooting-school.jpeg",
      icon: <Target className="w-6 h-6" />,
    },
  ];

  const reasons = [
    {
      title: "Expert Coaching",
      desc: "Learn from experienced coaches who've trained competitive athletes.",
      icon: <Dumbbell className="w-8 h-8" />,
    },
    {
      title: "Skill Development",
      desc: "From fundamentals to advanced techniques, we sharpen every skill.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Teamwork & Discipline",
      desc: "Basketball is about more than scoring – we teach values that matter.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Path to Competition",
      desc: "Opportunities to join tournaments and showcase your progress.",
      icon: <Trophy className="w-8 h-8" />,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-500 text-white py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl md:text-2xl text-indigo-100">
            Training designed for every level of athlete.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Programs We <span className="text-indigo-500">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive training programs designed to develop complete basketball players.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={prog.img}
                    alt={prog.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm text-indigo-600 flex items-center justify-center shadow-lg">
                    {prog.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {prog.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Join Our <span className="text-indigo-500">Programs?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what makes SOSSA training different
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <div className="relative p-8 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-white transition">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-100 transition leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Training?
          </h2>
          <p className="text-xl mb-10 text-indigo-100">
            Join our programs and take your game to the next level.
          </p>
          <Link
            to="/register"
            className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Register Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}