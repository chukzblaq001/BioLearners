
import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const button = form.querySelector("button");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  button.disabled = true;
  message.textContent = "Logging in...";

  try {
    await signInWithEmailAndPassword(auth, email, password);

    message.textContent = "Login successful! Opening BioLearn...";
    window.location.href = "index.html";

  } catch (error) {
    const errors = {
      "auth/invalid-credential": "Incorrect email or password.",
      "auth/user-not-found": "No account found. Please register first.",
      "auth/wrong-password": "Incorrect email or password.",
      "auth/invalid-email": "Please enter a valid email address.",
      "auth/network-request-failed": "Check your internet connection."
    };

    message.textContent =
      errors[error.code] || "Login failed. Please try again.";
    button.disabled = false;
  }
});
