import Link from "next/link"
import { Leaf, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-emerald-700">ReWear</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Promoting sustainable fashion through community-driven clothing exchange. Together, we're reducing waste
              and creating a more sustainable future.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} ReWear. All rights reserved. Made with 💚 for a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  )
}
