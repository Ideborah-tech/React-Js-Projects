import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  // Track the typed password
  const [password, setPassword] = useState("");
  // Show/hide password
  const [showPassword, setShowPassword] = useState(false);
  // Store submitted password
  const [createdPassword, setCreatedPassword] = useState("");

  //function to check if there is uppercase letter
  const hasUpperCase = (str: string) => {
    for (const char of str) {
      //used lexicographical order
      if (char >= "A" && char <= "Z") return true;
    }
    return false;
  };
  //function to check if there is lowercase letter
  const hasLowerCase = (str: string) => {
    for (const char of str) {
      //used lexicographical order
      if (char >= "a" && char <= "z") return true;
    }
    return false;
  };
  //function to check if there is a digit
  const hasDigit = (str: string) => {
    for (const char of str) {
      if (char >= "0" && char <= "9") return true;
    }
    return false;
  };
  //function to check if there is special character
  const hasSpecialChar = (str: string) => {
    const specialChar = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
    for (const char of str) {
      if (specialChar.includes(char)) return true;
    }
    return false;
  };
  //function to hadle submit button click
  const handleClick = () => {
    setCreatedPassword(password); //save typed password
    setPassword(""); //clear input field
  };

  return (
    <div className="app">
      <h1>Password Checker</h1>
      <div>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <button onClick={handleClick}>Submit</button>

      {createdPassword && (
        <div>
          <h2>Password Requirements:</h2>
          <ul>
            <li
              style={{ color: hasUpperCase(createdPassword) ? "green" : "red" }}
            >
              Uppercase letter: {hasUpperCase(createdPassword) ? "✓" : "✗"}
            </li>
            <li
              style={{ color: hasLowerCase(createdPassword) ? "green" : "red" }}
            >
              Lowercase letter: {hasLowerCase(createdPassword) ? "✓" : "✗"}
            </li>
            <li style={{ color: hasDigit(createdPassword) ? "green" : "red" }}>
              Digit: {hasDigit(createdPassword) ? "✓" : "✗"}
            </li>
            <li
              style={{
                color: hasSpecialChar(createdPassword) ? "green" : "red",
              }}
            >
              Special character: {hasSpecialChar(createdPassword) ? "✓" : "✗"}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
