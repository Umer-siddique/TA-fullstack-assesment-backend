# Currency Converter API Backend

This is the backend server for the **Currency Converter** application. It provides an API to fetch real-time exchange rates and convert currencies based on those rates. The server is built using **Node.js**, **Express**, **TypeScript**, and **Axios**.

---

## 🧑‍💻 **Features**

- **Exchange Rates API**: Provides real-time exchange rates for currencies.
- **Currency Conversion**: Converts between selected currencies using the fetched exchange rates.
- **API Key Authentication**: The backend uses an API key to fetch data from the external currency API.
- **CORS Support**: Allows requests from frontend apps via CORS middleware.
- **Environment Configurations**: Server settings and API credentials are stored in environment variables for security.

---

## 📦 **Technologies Used**

- **Node.js**: JavaScript runtime built on Chrome's V8 engine.
- **Express**: Web framework for Node.js.
- **Axios**: Promise-based HTTP client for making API requests.
- **TypeScript**: Type-safe language built on JavaScript for improved development.
- **Dotenv**: Loads environment variables from a `.env` file.
- **Body-parser**: Middleware to parse incoming request bodies.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Nodemon**: Automatically restarts the server during development.

---

## 📋 **Setup Instructions**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Umer-siddique/TA-fullstack-assesment-backend.git
   ```

````

2. **Navigate to the project directory:**

   ```bash
   cd currency-converter-api
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file** in the root of the project and add your API key and other configurations:

   ```dotenv
   NODE_ENV=development
   PORT=8000
   API_KEY=your-api-key-here
   API_URL=https://api.freecurrencyapi.com/v1/latest
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

   The server will be running on [http://localhost:8000](http://localhost:8000).

---

## 🚀 **API Endpoints**

### `GET /`

- **Description**: Returns a simple message confirming that the server is up and running.
- **Response**:
  ```json
  {
    "message": "Hello👋, Server is up and running👍"
  }
  ```

### `GET /api/v1/rates`

- **Description**: Fetches the latest exchange rates from the API provider.
- **Query Parameters**:
  - `apikey`: Your API key (set in `.env`).
- **Response**:
  ```json
  {
    "data": {
      "USD": {
        "EUR": 0.85,
        "GBP": 0.75
      },
      "EUR": {
        "USD": 1.18,
        "GBP": 0.88
      }
      // Additional currencies...
    }
  }
  ```
- **Error Handling**:
  If there is an issue fetching the exchange rates, the response will be:
  ```json
  {
    "message": "Error fetching rates",
    "error": "Detailed error message"
  }
  ```

---

## ⚙️ **Running in Production**

1. **Build the app for production**:

   ```bash
   npm run build
   ```

2. **Start the production server**:

   ```bash
   npm start
   ```

   This will run the server in production mode using the built files.

---

## 📝 **Environment Variables**

- **`NODE_ENV`**: The environment mode (e.g., `development` or `production`).
- **`PORT`**: The port on which the server will run (default: `8000`).
- **`API_KEY`**: Your API key for fetching exchange rates.
- **`API_URL`**: The URL of the API providing exchange rates.

---

## 📂 **Folder Structure**

```
/currency-converter-api
│
├── /src
│   └── index.ts             # Routes backend setup and External API call logic using Axios
├── /node_modules            # Node.js modules (installed dependencies)
├── .env                     # Environment variables file
├── .gitignore               # Git ignore file
├── package.json             # Project configuration and dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

---

## 💾 **LocalStorage of Conversion Records (Frontend)**

The frontend of the currency converter app saves conversion records in the local storage of the browser. This allows users to track past conversions and see a history of their exchange activities.

---

## 💡 **Future Improvements**

- **Error Handling**: Improve error handling for specific cases like invalid API responses or invalid API keys.
- **Enhanced API Features**: Add endpoints for historical exchange rates and multiple currency conversion.
- **Authentication**: Introduce API authentication to secure the endpoints.
- **Better Rate Limiting**: Introduce rate limiting for API calls to manage external service quotas.

---

Happy coding! 🚀
````
