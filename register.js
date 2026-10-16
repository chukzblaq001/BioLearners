
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const form = document.getElementById("registerForm");
const message = document.getElementById("message");
const button = form.querySelector("button");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name) {
    message.textContent = "Please enter your name.";
    return;
  }

  button.disabled = true;
  message.textContent = "Creating your account...";

  try {
    const result = await createUserWithEmailAndPassword(
      auth, email, password
    );

    await updateProfile(result.user, {
      displayName: name
    });

    message.textContent = "Account created! Opening BioLearn...";
    window.location.href = "index.html";

  } catch (error) {
    const errors = {
      "auth/email-already-in-use": "This email is already registered. Please log in.",
      "auth/invalid-email": "Please enter a valid email address.",
      "auth/weak-password": "Choose a stronger password with at least 6 characters.",
      "auth/network-request-failed": "Check your internet connection."
    };

    message.textContent =
      errors[error.code] || "Registration failed. Please try again.";
    button.disabled = false;
  }
});
