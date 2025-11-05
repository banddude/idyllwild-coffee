import Link from 'next/link';
import { TrendingUp, Users, DollarSign, MapPin, Clock, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511497584788-876760111969?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">Idyllwild Coffee</h1>
          <p className="text-2xl md:text-3xl font-light mb-8">Premium Mountain Coffee Shop Opportunity</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/executive-summary" className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition">
              View Executive Summary
            </Link>
            <Link href="/business-plan" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
              Full Business Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Investment Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
              <DollarSign className="w-16 h-16 mx-auto mb-4 text-emerald-700" />
              <h3 className="text-3xl font-bold text-emerald-900 mb-2">$225k-250k</h3>
              <p className="text-gray-700 font-medium">Startup Investment</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-blue-700" />
              <h3 className="text-3xl font-bold text-blue-900 mb-2">$90k/year</h3>
              <p className="text-gray-700 font-medium">Year 3 Net Profit</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
              <Award className="w-16 h-16 mx-auto mb-4 text-purple-700" />
              <h3 className="text-3xl font-bold text-purple-900 mb-2">36% ROI</h3>
              <p className="text-gray-700 font-medium">Annual Return Year 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">The Opportunity</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-emerald-900">Strong Market Foundation</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Premium Location</h4>
                    <p className="text-gray-700">Mountain resort town 2 hours from LA/San Diego, 1 hour from Palm Springs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Affluent Demographics</h4>
                    <p className="text-gray-700">3,000-4,000 residents with $83k median income, plus tens of thousands of annual tourists</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Proven Demand</h4>
                    <p className="text-gray-700">6 existing coffee shops demonstrate market demand, but all have critical gaps</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-emerald-900">Competitive Advantage</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Consistent Hours</h4>
                    <p className="text-gray-700">6 AM - 7 PM, 7 days/week when competitors close at noon or have limited schedules</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Superior Service</h4>
                    <p className="text-gray-700">Addressing widespread customer service complaints at existing venues</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Third Place Environment</h4>
                    <p className="text-gray-700">Comfortable gathering space with WiFi, local art, and community focus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Financial Projections</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-emerald-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Year</th>
                  <th className="px-6 py-4 text-right font-semibold">Revenue</th>
                  <th className="px-6 py-4 text-right font-semibold">Net Profit</th>
                  <th className="px-6 py-4 text-right font-semibold">Margin</th>
                  <th className="px-6 py-4 text-right font-semibold">Monthly Avg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-semibold">Year 1</td>
                  <td className="px-6 py-4 text-right">$348,300</td>
                  <td className="px-6 py-4 text-right">$48,000</td>
                  <td className="px-6 py-4 text-right">13.8%</td>
                  <td className="px-6 py-4 text-right">$29,025</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-semibold">Year 2</td>
                  <td className="px-6 py-4 text-right">$466,200</td>
                  <td className="px-6 py-4 text-right">$70,000</td>
                  <td className="px-6 py-4 text-right">15.0%</td>
                  <td className="px-6 py-4 text-right">$38,850</td>
                </tr>
                <tr className="hover:bg-gray-50 transition bg-emerald-50">
                  <td className="px-6 py-4 font-bold">Year 3</td>
                  <td className="px-6 py-4 text-right font-bold">$540,000</td>
                  <td className="px-6 py-4 text-right font-bold">$90,000</td>
                  <td className="px-6 py-4 text-right font-bold">16.7%</td>
                  <td className="px-6 py-4 text-right font-bold">$45,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 text-lg mb-4">Break-even: Month 4-6 | Payback Period: 3-4 years</p>
            <Link href="/business-plan" className="inline-block bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition">
              View Detailed Financials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-xl mb-8 opacity-90">Explore the complete market research and business plan with detailed analysis, competitive landscape, and implementation strategy.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/executive-summary" className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition">
              Executive Summary
            </Link>
            <Link href="/market-research" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
              Market Research
            </Link>
            <Link href="/business-plan" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
              Business Plan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
