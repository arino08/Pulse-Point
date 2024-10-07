Sure, here's a 

README.md

 file for your project:

```markdown
# PulsePoint

PulsePoint is a web application that allows users to register, log in, view a catalog of doctors, book appointments, and view their upcoming appointments.

## Features

- User registration and login
- View catalog of doctors
- Filter doctors by name and specialization
- Book appointments with doctors
- View upcoming appointments

## Technologies Used

- Node.js
- Express.js
- MySQL
- bcrypt.js
- Bootstrap

## Getting Started

### Prerequisites

- Node.js
- MySQL

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/pulsepoint.git
   cd pulsepoint
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up the MySQL database:

   ```sql
   CREATE DATABASE pulsepoint;

   USE pulsepoint;

   CREATE TABLE doctors (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       specialization VARCHAR(255) NOT NULL,
       description TEXT,
       image VARCHAR(255)
   );

   CREATE TABLE patients (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL UNIQUE,
       password VARCHAR(255) NOT NULL
   );

   CREATE TABLE appointments (
       id INT AUTO_INCREMENT PRIMARY KEY,
       doctor_id INT NOT NULL,
       patient_id INT NOT NULL,
       appointment_date DATE NOT NULL,
       FOREIGN KEY (doctor_id) REFERENCES doctors(id),
       FOREIGN KEY (patient_id) REFERENCES patients(id)
   );
   ```

4. Configure the database connection:

   Create a `db.js` file in the `src/models` directory with the following content:

   ```javascript
   const mysql = require('mysql');

   const connection = mysql.createConnection({
       host: 'localhost',
       user:'your_mysql_user',
       password: 'your_mysql_password',
       database: 'pulsepoint'
   });

   connection.connect(err => {
       if (err) throw err;
       console.log('Connected to MySQL database');
   });

   module.exports = connection;
   ```

5. Start the server:

   ```sh
   node src/server.js
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
pulsepoint/
├── public/
│   ├── assets/
│   │   ├── bootstrap/
│   │   ├── css/
│   │   ├── img/
│   │   ├── js/
│   ├── catalog-page.html
│   ├── appointments.html
│   ├── login.html
│   ├── registration.html
│   ├── index.html
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── doctorController.js
│   │   ├── appointmentController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── models/
│   │   ├── db.js
│   │   ├── patientModel.js
│   │   ├── doctorModel.js
│   │   ├── appointmentModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── doctorRoutes.js
│   │   ├── appointmentRoutes.js
│   ├── server.js
├── 

package.json


├── 

README.md


```

## Usage

### Register

1. Open `registration.html`.
2. Fill in the registration form and submit.

### Login

1. Open `login.html`.
2. Fill in the login form and submit.

### View Catalog

1. Open `catalog-page.html`.
2. Use the filters to search for doctors by name or specialization.
3. Click "Book Appointment" to book an appointment with a doctor.

### View Appointments

1. Open `appointments.html`.
2. View your upcoming appointments.

## License

This project is licensed under the MIT License.
```

This 

README.md

 file provides an overview of the project, installation instructions, project structure, and usage instructions. Adjust the content as needed to fit your specific project details.