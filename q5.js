
function validateSignup(email, password) {
  if (!email.includes("@")) {
    return "Rejected: invalid email";
  }

  if (password.length < 8) {
    return "Rejected: password too short";
  }

  return "Signup accepted";
}

// Simulate a direct request to the backend
console.log(validateSignup("wrongemail", "1234"));
