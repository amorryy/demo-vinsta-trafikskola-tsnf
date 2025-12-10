import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Car, Check, Star, Phone, Mail, Clock, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Din väg till körkortet
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Vinsta Trafikskola - Professionell körkortutbildning med erfarna instruktörer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#kontakt" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Boka körlektion
              </a>
              <a href="#tjanster" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                Våra tjänster
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tjänster Section */}
      <section id="tjanster" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Våra tjänster
            </h2>
            <p className="text-xl text-gray-600">
              Komplett körkortutbildning för alla behov
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Car className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Intensivkurs</h3>
              <p className="text-gray-600 mb-6">
                Få ditt körkort snabbt med vår intensivkurs. Perfekt för dig som vill komma igång fort.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Snabb utbildning</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Flexibla tider</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Erfarna instruktörer</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Clock className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Traditionell kurs</h3>
              <p className="text-gray-600 mb-6">
                Grundlig utbildning i lugn takt. Ta dig tid att lära dig ordentligt.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Grundlig utbildning</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Egen takt</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Personlig utveckling</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Star className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Uppkörning</h3>
              <p className="text-gray-600 mb-6">
                Professionell uppkörning med våra certifierade trafiklärarinstruktörer.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Certifierade instruktörer</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Moderna fordon</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />Hög godkännandeprocent</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Om oss Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Om Vinsta Trafikskola
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Vi är en etablerad trafikskola med många års erfarenhet av körkortutbildning. Våra kvalificerade och erfarna instruktörer hjälper dig att bli en säker och ansvarsfull bilförare.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Hos oss får du en professionell och trygg utbildning i en avslappnad miljö. Vi anpassar undervisningen efter dina behov och din inlärningsstil.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">500+</div>
                  <div className="text-gray-600">Nöjda elever</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">95%</div>
                  <div className="text-gray-600">Godkännandeprocent</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-700 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-semibold mb-6">Varför välja oss?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Erfarna och certifierade instruktörer</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Moderna och säkra övningsfordon</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Flexibla tider som passar dig</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Personlig och trygg undervisning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Konkurrenskraftiga priser</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kontakta oss
            </h2>
            <p className="text-xl text-gray-600">
              Redo att börja din körkortutbildning? Hör av dig till oss!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Kom i kontakt</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-700 mr-4" />
                  <div>
                    <div className="font-semibold">Telefon</div>
                    <div className="text-gray-600">01266163</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-700 mr-4" />
                  <div>
                    <div className="font-semibold">E-post</div>
                    <div className="text-gray-600">info@vinstatrafikskola.se</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-700 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold">Öppettider</div>
                    <div className="text-gray-600">
                      Måndag - Fredag: 08:00 - 18:00<br />
                      Lördag: 09:00 - 15:00<br />
                      Söndag: Stängt
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Boka körlektion</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Namn</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-post</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Meddelande</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Skicka meddelande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}