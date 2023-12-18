## 11328068

## Hospital Backend
This is a backend application for managing patient information, encounters, and vitals in a hospital setting. The application is built using Node.js, MongoDB, and Express.

## Prerequisites
Before running the application, make sure you have the following installed:

Node.js
MongoDB
Getting Started
Clone the repository:

bash
Copy code
git clone 
Install dependencies:

bash
Copy code
cd hospital-backend
npm install
Configure MongoDB:

Make sure your MongoDB server is running.
Adjust the MongoDB connection string in app.js if needed.

## Run the application:

bash
Copy code
node app.js
The server will start running on http://localhost:3000.

API Endpoints
1. Register Patient
Endpoint: POST /register

Request Body:

json
Copy code
{
  "patientId": "unique_patient_id",
  "dateTime": "2023-01-01T12:00:00Z",
  "otherNames": "John Doe",
  "gender": "Male",
  "phone": "1234567890",
  "residentialAddress": "123 Main St",
  "emergencyName": "Emergency Contact",
  "emergencyContact": "9876543210",
  "relationship": "Family"
}
2. Start Encounter
Endpoint: POST /start-encounter

Request Body:

json
Copy code
{
  "patientId": "existing_patient_id",
  "dateTime": "2023-01-02T14:30:00Z",
  "encounterType": "Emergency"
}
3. Submit Vitals
Endpoint: POST /submit-vitals

Request Body:

json
Copy code
{
  "patientId": "existing_patient_id",
  "bloodPressure": "120/80",
  "temperature": "98.6 F",
  "pulse": "75",
  "spO2": "98%"
}
4. List Patients
Endpoint: GET /list-patients

5. Patient Details
Endpoint: GET /patient-details/:patientId

Replace :patientId with the actual patient ID.

## Contributing

Feel free to contribute to this project by opening issues or creating pull requests.
