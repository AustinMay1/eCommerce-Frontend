import jwtDecode from "jwt-decode";

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFsZXhNIiwiZW1haWwiOiJhbGV4YW5kZXIuai5tZXNzaWVyQGdtYWlsLmNvbSIsImlkIjoiY2FlZmEzOTEtMjAxZC00ZGM0LWE1MmQtMWExNjUyZDJhZDhjIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsImV4cCI6MTYzNTM3MDgyNiwiaXNzIjoiZUNvbW1lcmNlV2ViQVBJIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSJ9.fwiSyqjiFofJcNQNTZu3yVH3WvAYuKbmuDFw3ZUlTKk"
var decoded = jwtDecode(token);

console.log(decoded);
