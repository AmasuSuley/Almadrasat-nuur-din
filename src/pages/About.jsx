import React from 'react';
import { FaBook, FaMosque, FaUserGraduate, FaHistory } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Space for Navbar */}
      <div className="pt-16"></div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-arabic">
            Kuhusu Madrasa Yetu
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Taarifa kuhusu historia, malengo na utaratibu wa masomo
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-800 font-arabic">
                Dhamira Yetu
              </h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  Madrasa ya Quran ina dhamira ya kuelimisha na kukuza wanafunzi kupitia mafunzo ya Qurani Takatifu, Sunnah na maadili ya Kiislamu.
                </p>
                <p>
                  Tunazingatia ujuzi wa kusoma Qurani kwa tartil, kukariri, na kuelewa maana zake, pamoja na mafunzo ya lugha ya Kiarabu.
                </p>
                <p>
                  Lengo kuu ni kumjenga mwanafunzi kwa ujuzi wa dini na maadili mema ya Kiislamu.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <FaBook className="text-blue-600 text-6xl mx-auto mb-6" />
              <h3 className="text-xl font-bold text-center mb-4">Kauli Mbiu</h3>
              <p className="text-center text-gray-600 italic">
                "Elimu ni mwanga, na mwanga wa Mwenyezi Mungu huongozwa kwa anayetaka"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800 font-arabic">
            Historia Yetu
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <FaHistory className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Mwanzoni</h3>
              <p className="text-gray-600">
                Madrasa ilianzishwa mwaka 2000 kwa lengo la kufundisha Qurani kwa watoto wa mtaani.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <FaMosque className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Maendeleo</h3>
              <p className="text-gray-600">
                Kwa sasa tuna majengo mawili na waalimu 10 wenye ujuzi wa kufundisha Qurani na masomo ya Dini.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <FaUserGraduate className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Mafanikio</h3>
              <p className="text-gray-600">
                Tumehitimu wanafunzi 150+ waliokariri Qurani nzima na kujiunga na vyuo vya Kiislamu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800 font-arabic">
            Waalimu Wetu
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Ustadh Mshani Ali", role: "Mwalimu Mkuu", specialty: "Tajweed na Qiraat" },
              { name: "Ustadh Yunus Assaa", role: "Mwalimu wa Kiarabu", specialty: "Lugha na Sarufi" },
              { name: "Ustadha Fatma Juma", role: "Mwalimu wa Watoto", specialty: "Quran kwa Watoto" },
              { name: "Sheikh Sule", role: "Mwalimu wa Fiqh", specialty: "Masuala ya Sharia" }
            ].map((teacher, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600 text-4xl">
                  {teacher.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold">{teacher.name}</h3>
                <p className="text-blue-600 mb-2">{teacher.role}</p>
                <p className="text-gray-600">{teacher.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;