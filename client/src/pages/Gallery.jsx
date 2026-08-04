import { useState } from "react";
import { X, Play, Camera, Video, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const photos = [
    { src: "/group-training.jpeg", caption: "Training Session" },
    { src: "/clinics-camps.jpeg", caption: "Champions" },
    { src: "/coach-wal.jpeg", caption: "Academy Life" },
    { src: "/clinics-camps.jpeg", caption: "Game Day" },
    { src: "/private-training.jpeg", caption: "Team Practice" },
    { src: "/clinics-camps.jpeg", caption: "Skills Development" },
  ];

  const videos = [
    { src: "/We had an amazing time in Uganda collaborating with our guys at solid_skills_sports_academy.mp4", title: "Collaboration in Uganda" },
    { src: "/Big S-O to Coach alexvictor06🇨🇦 from iowaunitedprep🇺🇸 for coming over to work with our guy.mp4", title: "International Coaching Session" },
    { src: "/Our alumni matong_muorwel 🇸🇸 from NBA Academy Africa served as one of the coaches in our camp.mp4", title: "Alumni Coaching Camp" },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openPhoto = (index) => setSelectedPhoto(index);
  const closePhoto = () => setSelectedPhoto(null);
  const nextPhoto = () => setSelectedPhoto((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setSelectedPhoto((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl md:text-2xl text-purple-100">
            Explore our academy moments in pictures and videos.
          </p>
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 mb-6">
              <Camera className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Photo <span className="text-purple-500">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Moments captured from our training sessions, games, and academy life.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="group relative mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
                onClick={() => openPhoto(idx)}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    idx % 3 === 0 ? "h-64" : idx % 3 === 1 ? "h-48" : "h-80"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-6">
              <Video className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Video <span className="text-blue-500">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our athletes in action with training and game highlights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <video
                  src={video.src}
                  controls
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-5 h-5 fill-white" />
                    </div>
                    <p className="font-semibold">{video.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closePhoto}
        >
          <button
            onClick={closePhoto}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].caption}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <p className="text-center text-white mt-4 text-lg font-medium">
              {photos[selectedPhoto].caption}
            </p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </div>
  );
}