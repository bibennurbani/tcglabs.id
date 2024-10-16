import Ticket from '@/app/components/Ticket';

export default function Home() {
  return (
    <main className="flex justify-between items-center min-h-screen px-8 py-16">
      {/* Left Content Area */}
      <div className="text-white max-w-lg space-y-8">
        <h1 className="text-5xl font-bold">
          See you online on <span className="text-blue-500">October 24th.</span>
        </h1>
        <p className="text-lg">
          You’ll receive an email with logistical details shortly.
        </p>
        
        {/* Share Buttons */}
        <div className="space-x-4">
          <button className="bg-blue-600 px-6 py-2 text-white rounded">Share <img className="inline ml-2" src="/linkedin.svg" alt="LinkedIn" /></button>
          <button className="bg-blue-600 px-6 py-2 text-white rounded">Share <img className="inline ml-2" src="/x.svg" alt="X (Twitter)" /></button>
        </div>

        {/* Links Section */}
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="text-blue-500">ADD NEXT.JS CONF TO YOUR CALENDAR</a> on <a href="#" className="text-blue-500">ICAL</a>, <a href="#" className="text-blue-500">GOOGLE</a>, or <a href="#" className="text-blue-500">OUTLOOK</a>
          </li>
          <li>
            <a href="#" className="text-blue-500">NEED TO CHANGE YOUR DETAILS?</a> EDIT BADGE
          </li>
          <li>
            <a href="#" className="text-blue-500">WANT TO JOIN US IN-PERSON?</a> BUY A TICKET
          </li>
          <li>
            <a href="#" className="text-blue-500">LEARN HOW TO USE NEXT.JS</a> START LEARNING
          </li>
          <li>
            <a href="#" className="text-blue-500">READY TO GET STARTED WITH NEXT.JS & VERCEL</a> DEPLOY NOW
          </li>
        </ul>
      </div>

      {/* Right Ticket Area */}
      <div className="w-1/3 flex justify-center">
        <Ticket />
      </div>
    </main>
  );
}