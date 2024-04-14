# Node.js Login System with MongoDB

This is a simple web application built with Node.js and MongoDB that allows users to register and login with their credentials.

## Features

- User registration: Users can create an account by providing a username and password.
- User login: Registered users can log in with their credentials.
- Password hashing: User passwords are securely hashed using bcrypt before storing them in the database.
- Session management: Sessions are used to keep track of logged-in users.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/nodejs-login-system.git
    ```

2. **Install dependencies:**

    ```bash
    cd nodejs-login-system
    npm install
    ```

3. **Configure MongoDB:**
   - Ensure MongoDB is installed and running on your system.
   - Update the MongoDB connection URI in `mongo.js` to point to your MongoDB instance.

4. **Start the server:**

    ```bash
    npm start
    ```

5. **Open your web browser and navigate to `http://localhost:3000` to access the application.**

## Usage

- **Register:** Navigate to the registration page (`/register`) and enter your desired username and password.
- **Login:** After registering, you can log in with your credentials on the login page (`/login`).
- **Logout:** To log out, simply close the browser or clear the session manually.

## Dependencies

- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for storing user information.
- bcrypt: Library for hashing passwords securely.
- express-session: Middleware for managing sessions in Express.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project was inspired by [mention any inspiration if applicable].
- Special thanks to [mention any contributors or resources you'd like to acknowledge].
