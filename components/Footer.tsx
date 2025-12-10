import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Vinsta Trafikskola</h3>
            <p className="text-gray-300 mb-6">
              Din pålitliga partner för körkortutbildning. Vi hjälper dig att bli en säker och ansvarsfull bilförare med professionell utbildning och personlig service.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span>01266163</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span>info@vinstatrafikskola.se</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hem</a></li>
              <li><a href="#tjanster" className="text-gray-300 hover:text-white transition-colors">Våra tjänster</a></li>
              <li><a href="#kontakt" className="text-gray-300 hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Boka lektion</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Våra tjänster</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Intensivkurs</span></li>
              <li><span className="text-gray-300">Traditionell kurs</span></li>
              <li><span className="text-gray-300">Uppkörning</span></li>
              <li><span className="text-gray-300">Teorilektioner</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Vinsta Trafikskola. Alla rättigheter förbehållna.
          </p>
          <p className="text-gray-400 text-sm">
            Skapad av <span className="text-blue-400">Noory Solution</span>
          </p>
        </div>
      </div>
    </footer>
  )
}