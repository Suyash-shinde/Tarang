import SocialMediaTab from "./SocialMediaTab";
import { CgProfile } from "react-icons/cg";
import { MdVolunteerActivism } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { FaAward } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import India from "./ProfilePage_assets/india.png";
import Person from "./ProfilePage_assets/Person.jpg";
import Navbar from "../Navbar";
const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className="flex w-full h-screen py-4">
      <div className="w-3/4 h-full pl-4 pr-2">
        <div className="border-2 h-1/3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-t-3xl "></div>
        <div className="my-1 bg-white border-2 shadow-lg h-5/12 rounded-b-3xl">
          <div className="flex flex-col items-start h-full p-6 ml-64 ">
            <div className="font-sans text-2xl font-bold">Pradnesh Tilekar</div>
            <div className="flex items-center mt-2">
              <FaLocationDot className="w-4 h-4" />
              <p className="ml-2">Pune, India</p>
            </div>
            <div className="px-6 py-3 mt-3 space-y-3 rounded-3xl bg-slate-50">
              <p className="text-base font-semibold">Interests</p>
              <div className="space-x-3">
                {[
                  "Education",
                  "Health-Care",
                  "Environment",
                  "Human-Rights",
                ].map((title, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border-gray-300 bg-emerald-100 rounded-3xl hover:bg-cyan-50"
                  >
                    {title}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center w-auto px-6 mt-3 space-x-5 rounded-3xl bg-slate-50">
              <p>Connect</p>
              <div className="px-4 border-l">
                <SocialMediaTab />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex ml-20 -mt-96 ">
          <div className="w-40 h-40 bg-white border-2 rounded-full shadow-md border-slate-300">
            <img
              src={Person}
              alt={<CgProfile size="100%" />}
              className="object-cover w-full h-full rounded-full"
            />
          </div>

          <span className="relative flex w-5 h-5 mt-6 -ml-7">
            <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-5 h-5 bg-green-500 rounded-full"></span>
          </span>
        </div>
        <div className="h-auto px-24 py-10 mt-1 bg-white border shadow-xl rounded-3xl">
          <h1 className="my-1 text-4xl font-semibold">About</h1>
          <p className="mt-8 font-sans text-lg">
            As a dedicated volunteer, I am passionate about making a positive
            impact in my community. With a heart for service and a desire to
            contribute to meaningful causes, I have actively sought out
            opportunities to lend a helping hand wherever I can. Whether it's
            assisting at local food drives, participating in environmental
            clean-up initiatives, or supporting educational programs, I am
            committed to making a difference in the lives of others.
          </p>
          <p className="mt-3 font-sans text-lg">
            Through my volunteer experiences, I have developed invaluable skills
            such as teamwork, communication, and problem-solving. I thrive in
            environments where collaboration is key and where every effort, no
            matter how small, contributes to a greater good. By joining your
            team, I am eager to continue my journey of service and contribute to
            the success of your organization's mission. Together, let's make a
            lasting impact and inspire others to join in the spirit of
            volunteerism.
          </p>
        </div>
      </div>
      <div className="w-1/4 pl-2 pr-4 h-2/5">
        <div className="p-6 bg-white border shadow-lg rounded-3xl">
          <p className="text-2xl font-semibold">Summary</p>
          <div className="py-3 mt-3 space-y-3 border-t">
            <div className="flex items-center">
              <img src={India} alt="India" className="object-cover w-5 h-5 " />
              <p className="ml-3">Pune, India</p>
            </div>
            <div className="flex items-center">
              <MdVolunteerActivism className="w-5 h-5" />
              <p className="ml-3">3 years of experience</p>
            </div>
            <div className="flex items-center">
              <HiUserGroup className="w-5 h-5" />
              <p className="ml-3">15 volunteer participations</p>
            </div>
            <div className="flex items-center">
              <FaAward className="w-5 h-5" />
              <p className="ml-3">2 Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
     </>
  );
 
};

export default Profile;
