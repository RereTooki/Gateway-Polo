import { useState } from "react";

const MembershipForm = () => {
  // Define the type for form data
  type FormDataType = {
    name: string;
    dob: string;
    gender: string;
    phone: string;
    email: string;
    occupation: string;
    attractsYou: string[];
    attractsYouOutdoor: string[];
    sustainability: string;
    wellnessActivities: string;
    contribution: string;
    qualities: string;
    visitedBefore: string;
    investingInterest: string;
    membershipPackage: string;
    reason: string;
    additionalComments: string;
  };

  // Initialize form data with default values
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    occupation: "",
    attractsYou: [],
    attractsYouOutdoor: [],
    sustainability: "",
    wellnessActivities: "",
    contribution: "",
    qualities: "",
    visitedBefore: "",
    investingInterest: "",
    membershipPackage: "",
    reason: "",
    additionalComments: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked; // Ensure checkbox handling
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...(prevData[name as keyof FormDataType] as string[]), value]
          : (prevData[name as keyof FormDataType] as string[]).filter(
              (item) => item !== value
            ),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Membership Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />

          {/* Date of Birth */}
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />

          {/* Gender */}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />

          {/* Occupation */}
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Occupation"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />

          {/* What attracts you? (Multiple Choice) */}
          <fieldset className="border p-4 rounded-md">
            <legend className="font-semibold">
              What attracts you to Gateway Polo & Racecourse? (Select all that
              apply)
            </legend>
            {["Wellness", "Leisure", "Polo", "Lifestyle", "Investments"].map(
              (option) => (
                <label key={option} className="block">
                  <input
                    type="checkbox"
                    name="attractsYou"
                    value={option}
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  {option}
                </label>
              )
            )}
          </fieldset>

          {/* Outdoor Activities */}
          <fieldset className="border p-4 rounded-md">
            <legend className="font-semibold">
              What attracts you to Gateway Polo & Racecourse? (Select all that
              apply)
            </legend>
            {[
              "Outdoor Activities (e.g Polo, Hiking)",
              "Socializing at Exclusive Events",
              "Relaxing in Nature",
              "Other",
            ].map((option) => (
              <label key={option} className="block">
                <input
                  type="checkbox"
                  name="attractsYouOutdoor"
                  value={option}
                  onChange={handleChange}
                  className="mr-2"
                />{" "}
                {option}
              </label>
            ))}
          </fieldset>

          {/* Sustainability */}
          <select
            name="sustainability"
            value={formData.sustainability}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">
              Are you passionate about sustainability and eco-friendly living?
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {/* Wellness Activities */}
          <input
            type="text"
            name="wellnessActivities"
            value={formData.wellnessActivities}
            onChange={handleChange}
            placeholder="Do you currently engage in any wellness-focused activities?"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />

          {/* Contribution */}
          <textarea
            name="contribution"
            value={formData.contribution}
            onChange={handleChange}
            placeholder="How do you see yourself contributing to the Gateway Polo & Racecourse Community?"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          ></textarea>

          {/* Qualities */}
          <textarea
            name="qualities"
            value={formData.qualities}
            onChange={handleChange}
            placeholder="What qualities are you looking for in Gateway Polo & Racecourse community?"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          ></textarea>

          {/* Visited Before */}
          <select
            name="visitedBefore"
            value={formData.visitedBefore}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">
              Have you visited Gateway Polo & Racecourse before?
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {/* Investing Interest */}
          <select
            name="investingInterest"
            value={formData.investingInterest}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">
              Are you open to investing in premium eco-luxury living
              experiences?
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {/* Membership Package */}
          <input
            type="text"
            name="membershipPackage"
            value={formData.membershipPackage}
            onChange={handleChange}
            placeholder="Which membership package or experience aligns with your interests?"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />

          {/* Reason */}
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Tell us briefly why you would like to be part of the Gateway Polo & Racecourse community"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          ></textarea>

          {/* Additional Comments */}
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
            placeholder="Any additional questions or comments?"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;
