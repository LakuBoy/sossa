import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Trophy, Users, Heart, Star, Sparkles } from "lucide-react";

export default function Magazine() {
  const stories = [
    {
      title: "Athian Kuol",
      subtitle: "From Refugee Camp to Kampala",
      img: "/team-training.jpeg",
      tag: "Success Story",
    },
    {
      title: "Alier Bech Kuch",
      subtitle: "From Kiryandongo to the USA",
      img: "/group-training.jpeg",
      tag: "Success Story",
    },
    {
      title: "Majok Mayul Chuol",
      subtitle: "From Nyumazi to Sierra Canyon",
      img: "/private-training.jpeg",
      tag: "Success Story",
    },
    {
      title: "Khaman Madit Maluach",
      subtitle: "From Local Courts to the World Stage",
      img: "/clinics-camps.jpeg",
      tag: "Success Story",
    },
    {
      title: "Asunta Nyibol Ring",
      subtitle: "The Rise of Ladies Basketball",
      img: "/shooting-school.jpeg",
      tag: "Ladies Basketball",
    },
    {
      title: "The Growth of Ladies Basketball",
      subtitle: "Empowering Female Athletes",
      img: "/wal-about.jpeg",
      tag: "Feature",
    },
  ];

  return (
    <div className="w-full">
      {/* Magazine Cover Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">SOSSA Magazine</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Dribbling to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Success
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
            The inspiring stories of Solid Skills Sports Academy — from refugee
            camps to the world's biggest basketball stages.
          </p>
          <Link
            to="/magazine/stories"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-orange-500/40 transition-all duration-300"
          >
            <BookOpen className="w-5 h-5" />
            Open the Magazine
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Magazine Preview / Stories Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Inside This <span className="text-orange-500">Magazine</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stories of determination, resilience, and triumph from our athletes and coaches.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <Link
                key={idx}
                to="/magazine/stories"
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={story.img}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {story.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold">{story.title}</h3>
                    <p className="text-sm text-orange-200 font-medium">{story.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/magazine/stories"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-orange-500/40 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              Read the Full Magazine
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Magazine <span className="text-orange-500">Highlights</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What makes SOSSA's story so special
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Trophy className="w-10 h-10 text-yellow-500" />,
                title: "100% Scholarship Rate",
                desc: "Every dedicated athlete secures a pathway to success.",
              },
              {
                icon: <Users className="w-10 h-10 text-blue-600" />,
                title: "From Refugee Camps",
                desc: "Athletes rising from camps in Uganda to global stages.",
              },
              {
                icon: <Star className="w-10 h-10 text-red-500" />,
                title: "NBA & FIBA Stars",
                desc: "Alumni playing in NBA Academy, BAL, and the World Cup.",
              },
              {
                icon: <Heart className="w-10 h-10 text-pink-500" />,
                title: "Ladies Basketball",
                desc: "Empowering female athletes to lead and inspire.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gray-50 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}