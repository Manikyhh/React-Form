import React, { useState } from "react";

// Modify RegistrionForm function to accept a title prop
function RegistrionForm({ title }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about
        );
        // Add your form submission logic here
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        // Reset all state variables here
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

    return (
        <div className="container">
            <div className="App">
                {/* Use the title prop in the h1 */}
                <h1>{title}</h1>
                <fieldset>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstname">First Name*</label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter First Name"
                            required
                        />
                        <label htmlFor="lastname">Last Name*</label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter Last Name"
                            required
                        />
                        <label htmlFor="email">Enter Email*</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            required
                        />
                        <label htmlFor="tel">Contact*</label>
                        <input
                            type="tel"
                            name="contact"
                            id="contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder="Enter Mobile number"
                            required
                        />
                        <label htmlFor="gender">Gender*</label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            checked={gender === "male"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Male
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            id="female"
                            checked={gender === "female"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            id="other"
                            checked={gender === "other"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Other
                        <label htmlFor="lang">Your best Subject</label>
                        <input
                            type="checkbox"
                            name="lang"
                            id="english"
                            checked={subjects.english === true}
                            onChange={() => handleSubjectChange("english")}
                        />
                        English
                        <input
                            type="checkbox"
                            name="lang"
                            id="maths"
                            checked={subjects.maths === true}
                            onChange={() => handleSubjectChange("maths")}
                        />
                        Maths
                        <input
                            type="checkbox"
                            name="lang"
                            id="physics"
                            checked={subjects.physics === true}
                            onChange={() => handleSubjectChange("physics")}
                        />
                        Physics
                        <label htmlFor="file">Upload Resume*</label>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            onChange={(e) => setResume(e.target.files[0])}
                            placeholder="Upload Resume"
                            required
                        />
                        <label htmlFor="url">Enter URL*</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Enter URL"
                            required
                        />
                        <label>Select your choice</label>
                        <select
                            name="select"
                            id="select"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            <option value="" disabled>
                                Select your Answer
                            </option>
                            <optgroup label="Beginners">
                                <option value="1">HTML</option>
                                <option value="2">CSS</option>
                                <option value="3">JavaScript</option>
                            </optgroup>
                            <optgroup label="Advanced">
                                <option value="4">React</option>
                                <option value="5">Node</option>
                                <option value="6">Express</option>
                                <option value="t">MongoDB</option>
                            </optgroup>
                        </select>
                        <label htmlFor="about">About</label>
                        <textarea
                            name="about"
                            id="about"
                            cols="30"
                            rows="10"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            placeholder="About yourself"
                            required
                        ></textarea>
                        <button type="reset" onClick={handleReset}>
                            Reset
                        </button>
                        <button type="submit">Submit</button>
                    </form>
                </fieldset>
            </div>
        </div>
    );
}

export default RegistrionForm;
