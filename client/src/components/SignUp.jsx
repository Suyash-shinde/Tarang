import { useState } from "react";
const genders = [
  "-Select-",
  "Male",
  "Female",
  "Non-Binary",
  "Prefer not to say",
];
const timeAvailabilities = ["Weekdays", "Weekends", "Specific Hours"];
const indianStates = [
  "-Select-",
  "Maharashtra",
  "Punjab",
  "Gujarat",
  "Rajasthan",
  "Kerala",
];
const interests_expertises = ["Environmental", "Health-Care", "Education"];
const volunteer_types = ["On-site", "Remote", "Events"];
const indianStates_cities = [
  "-Select-",
  "Pune",
  "Akurdi",
  "Ravet",
  "PCMC",
  "Nigdi",
];

const departments = [
  "-Select-",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electronics and Telecommunication",
  "Information Technology",
  "Computer Engineering",
];
const graduation_years = ["-Select-", "2026", "2027", "2028", "2029", "2030"];

const SignUp = () => {
  const [user, setUser] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    console.log(name);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setUser(user + 1);
    e.currentTarget.reset();
  };
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-auto text-slate-700">
        <div className="flex justify-center">
          <span className="text-center text-3xl mt-3 font-bold font-sans">
            Registration
          </span>
        </div>
        <div>
          <form className="h-full m-8 rounded-xl" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:grow-0 sm:m-3 p-3 border-t-2 border-gray-200">
              <div className="w-full sm:w-1/3 sm:h-auto text-center">
                Personal Information
              </div>
              <div className="w-full flex flex-wrap md:w-2/3">
                <div className="flex flex-col w-full sm:flex-row  flex-wrap">
                  <div className=" grow sm:grow-0 md:w-1/2 lg:w-1/3 px-2 my-3">
                    <label
                      htmlFor="first_name"
                      className="col-span-1 block text-sm font-medium text-left m-2"
                    >
                      First Name
                    </label>
                    <div>
                      <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        autoComplete="text"
                        required
                        className="w-full  border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  <div className="grow sm:grow-0  md:w-1/2 lg:w-1/3 px-2 my-3">
                    <label
                      htmlFor="middle_name"
                      className="col-span-1 block text-sm font-medium text-left m-2"
                    >
                      Middle Name
                    </label>
                    <div>
                      <input
                        id="middle_name"
                        name="middle_name"
                        type="text"
                        autoComplete="text"
                        required
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  <div className=" grow sm:grow-0 md:w-1/2 lg:w-1/3 px-2 my-3">
                    <label
                      htmlFor="last_name"
                      className="col-span-1 block text-sm font-medium text-left m-2"
                    >
                      Last Name
                    </label>
                    <div>
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        autoComplete="text"
                        required
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w2/3 md:grow-0 lg:w-1/2 px-2 my-3">
                  <label
                    htmlFor="dob"
                    className="col-span-1 block text-sm font-medium text-left m-2"
                  >
                    Date of Birth
                  </label>
                  <div className="col-span-1">
                    <input
                      id="dob"
                      name="dob"
                      type="date"
                      autoComplete="bday-day"
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                <div className="w-full md:grow-0 sm:w-1/2 px-2 my-3">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium m-2 text-left col-span-1"
                  >
                    Gender
                  </label>
                  <div>
                    <select
                      name="gender"
                      id="gender"
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      {genders.map((gender) => {
                        return <option key={gender}>{gender}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="w-full sm:w-2/3 md:grow-0 lg:w-1/2 px-2 my-3">
                  <label
                    htmlFor="mobile"
                    className="w-full block text-sm font-medium m-2 text-left"
                  >
                    Mobile no.
                  </label>
                  <div className="col-span-1">
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      autoComplete="mobile"
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-2/3 md:grow-0 lg:w-1/2 px-2 my-3">
                  <label
                    htmlFor="email"
                    className="col-span-1 block text-sm font-medium text-left m-2"
                  >
                    Email address
                  </label>
                  <div className="col-span-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-2/3 md:grow-0 lg:w-1/2 px-2 my-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium m-2 text-left"
                  >
                    Password
                  </label>
                  <div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-2/3 md:grow-0 lg:w-1/2 px-2 my-3">
                  <label
                    htmlFor="confirm_password"
                    className="block text-sm font-medium m-2 text-left"
                  >
                    Confirm Password
                  </label>
                  <div>
                    <input
                      id="confirm_password"
                      name="confirm_password"
                      type="password"
                      autoComplete="password"
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:grow-0 sm:m-3 p-3 border-t-2 border-gray-200">
              <div className="w-full sm:w-1/2 sm:h-auto text-center">
                Address Information
              </div>
              <div className="w-full flex flex-wrap sm:w-2/3">
                <div className="w-full md:grow-0 px-2 my-3">
                  <label
                    htmlFor="streetAddress"
                    className="col-span-1 block text-sm font-medium text-left m-2"
                  >
                    Street Address
                  </label>
                  <div className="col-span-1">
                    <input
                      id="streetAddress"
                      name="streetAddress"
                      type="text"
                      autoComplete="address-line1"
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                <div className="w-full md:grow-0 sm:w-1/2 px-2 my-3">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium m-2 text-left col-span-1"
                  >
                    State
                  </label>
                  <div>
                    <select
                      name="state"
                      id="state"
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      {indianStates.map((state) => {
                        return <option key={state}>{state}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="w-full md:grow-0 sm:w-1/2 px-2 my-3">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium m-2 text-left col-span-1"
                  >
                    City
                  </label>
                  <div>
                    <select
                      name="city"
                      id="city"
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      {indianStates_cities.map((city) => {
                        return <option key={city}>{city}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="w-full sm:w-2/3 md:grow-0 lg:w-1/2 px-2 my-3">
                  <label
                    htmlFor="zipcode"
                    className="w-full block text-sm font-medium m-2 text-left"
                  >
                    Zip Code
                  </label>
                  <div className="col-span-1">
                    <input
                      id="zipcode"
                      name="zipcode"
                      type="text"
                      autoComplete="zipcode"
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:grow-0 sm:m-3 p-3 border-t-2 border-gray-200">
              <div className="w-full sm:w-1/3 sm:h-auto text-center">
                Volunteer Preferences
              </div>
              <div className="w-full flex flex-wrap sm:w-2/3">
                <div className="space-x-12 flex flex-grow">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-900">
                      Areas of Interest/Expertise
                    </label>
                    <div>Yet to be coded.</div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-900">
                      Preferred Type of Volunteer Work
                    </label>

                    <div className="mt-6 space-y-6">
                      {volunteer_types.map((volunteer_type) => {
                        return (
                          <div className="flex items-center gap-x-3">
                            <input
                              id="volunteer_type"
                              name="volunteer_type"
                              type="checkbox"
                              value={volunteer_type}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              for="volunteer_type"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              {volunteer_type}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-900">
                      Time Availability
                    </label>

                    <div className="mt-6 space-y-6">
                      {timeAvailabilities.map((timeAvailability) => {
                        return (
                          <div className="flex items-center gap-x-3">
                            <input
                              id="timeAvailability"
                              name="timeAvailability"
                              type="radio"
                              value={timeAvailability}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              for="timeAvailability"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              {timeAvailability}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:grow-0 sm:m-3 p-3 border-t-2 border-gray-200">
              <div className="w-full sm:w-1/3 sm:h-auto text-center">
                Academic Details
              </div>
              <div className="w-full flex flex-wrap sm:w-2/3">
                <div className="w-full md:grow-0 sm:w-1/2 px-2 my-3">
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium m-2 text-left col-span-1"
                  >
                    Department
                  </label>
                  <div>
                    <select
                      name="department"
                      id="department"
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      {departments.map((department) => {
                        return <option key={department}>{department}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="w-full md:grow-0 sm:w-1/2 px-2 my-3">
                  <label
                    htmlFor="graduation"
                    className="block text-sm font-medium m-2 text-left col-span-1"
                  >
                    Graduation Year
                  </label>
                  <div>
                    <select
                      name="graduation_year"
                      id="graduation_year"
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      {graduation_years.map((graduation_year) => {
                        return (
                          <option key={graduation_year}>
                            {graduation_year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:grow-0 sm:m-3 p-3 border-y-2 border-gray-200">
              <div className="w-full sm:w-1/3 sm:h-auto text-center">
                Profile Credentials
              </div>
              <div className="w-full flex flex-wrap md:w-2/3">
                <div className="col-span-full">
                  <label
                    for="photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <svg
                      className="h-12 w-12 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    for="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          for="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <button
                type="button"
                className="p-2 border border-black bg-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="p-2 border border-black bg-white"
              >
                Submit
              </button>
              <button type="reset" className="p-2 border border-black bg-white">
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
