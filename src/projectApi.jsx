const projectApi = [
  {
    id: 1,
    headline: "Catalyst",
    des:
      "Catalyst is an ERP manufacturing tool that streamlines core processes like product lifecycle management, sales orders, planning, inventory, and warehouse management. It enables real-time tracking and efficient organization of resources, helping manufacturers optimize productivity and maintain accurate inventory across plants and warehouses. \n\n" +
      "MY Work - \n" +
      "- Improved API response time by 80% through the use of MongoDB aggregation pipelines and reduced the database calls. \n" +
      "- Refactored the frontend codebase by introducing TypeScript, Storybook, JSDocs, and Formik, improving code quality and reducing form-related bugs by 30%. \n" +
      "- Built M2M and role-based authentication in AWS Cognito with custom tokens using Lambda and verified via authorization dependencies. \n" +
      "- Configured API Gateway using Azure API Management and developed a custom developer portal, integrating OpenAPI, JWT, caching, and rate-limiting policies. \n" +
      "- Implemented a microservice architecture using Kafka and Azure API Management for 6 modules, enhancing scalability and system resilience. \n" +
      "- Built 2 monitoring dashboards using Azure Application Insights & Grafana to track API performance, Kafka health, and system exceptions.",
    img: require("./images/catalyst.jpg"),
    where: "Associate With Techdome Solution",
  },
  {
    id: 2,
    headline: "US Connect",
    des:
      "Implemented a secure and scalable communication platform. \n" +
      "Led the full-stack development of Agent Portal and SIM Portal, managing both frontend and backend. \n " +
      "Engineered 3 interactive IVR flows for customer service using Twilio. \n" +
      "Integrated Stripe for secure payment processing in the SIM activation portal, improving transaction speed. \n " +
      "Integrated Zoho CRM via webhook for real-time inventory data sync, streamlining updates.",
    img: require("./images/telecom.jpg"),
    where: "Associate With Techdome Solution",
  },
  {
    id: 3,
    headline: "Zerokar",
    des: `Zerokar is a tax filing application that allows users to interact with a WhatsApp bot to get answers to their tax-related queries and submit document requests. The system manages all tax processes automatically, with comprehensive user information and pending requests accessible via an admin panel. Additionally, a dedicated CA panel enables chartered accountants to review queries, access charts, and monitor all relevant data.
  
    My Work:
    - Developed a marketing website for the bot.
    - Enhanced the admin panel by implementing a live chat feature.
    - Designed the user interface for the CA panel.
    - Fixed bugs across the entire application.`,
    img: require("./images/zerokar.jpg"),
    where: "Associate With Techdome Solution",
  },
  {
    id: 4,
    headline: "Ticket-Vista",
    des: `Developed a ticket management system with real-time updates:  
    - Built the entire frontend using MUI, Tailwind CSS, and RTK Query.  
    - Integrated Socket.io for real-time ticket fetching and updates.  
    - Implemented a notification system using Firebase.  
    - Optimized performance and user experience for seamless interactions.`,

    img: require("./images/no-preview.jpg"),
    where: "Associate With Techdome Solution",
  },
  {
    id: 5,
    headline: "Aand Shakh Sahkari Sanstha",
    des: `Developed a banking application for managing daily collections, loan applications, and interest calculations:  
    - Built the entire frontend of the application.  
    - Implemented logic for all financial calculations.  
    - Designed a dashboard with charts to display daily, weekly, and monthly payments.  
    - Integrated a collection machine with the web app to automate data transfer.`,
    img: require("./images/no-preview.jpg"),
    where: "Codes For Tomorrow",
  },
  {
    id: 6,
    headline: "XGen",
    des: `Developed XGen, an insurance platform that collaborates with 3+ insurance brands to facilitate insured payments, data visualization, and agent management:  
    - Built APIs to extract insured information from legacy brand applications and store it in our database via a nightly worker process.  
    - Developed an API to convert bank details into NACHA file format.  
    - Integrated payment gateways, including Stripe and ACH transactions.  
    - Designed and implemented the frontend for the agent dashboard, displaying insured details under each agent.  
    - Created a logging and monitoring dashboard using Application Insights and set up alert rules for failed payments.`,
    img: require("./images/insurance.jpg"),
    where: "Associate With Technogriff Solutions",
  },
  {
    id: 7,
    headline: "Pet Store",
    des: `Pet Store is a personal project I built two years ago to showcase my frontend skills as a fresher. It includes various features such as:  
    - Add to cart functionality  
    - Responsive design  
    - Category-wise filtering for pets  
    - Grid and list view options  
    - Color-based filtering  
    - Search functionality  
    - Mail-sending feature for user inquiries`,

    img: require("./images/no-preview.jpg"),
    where: "Personal",
    url: "https://github.com/mandliyarajendra11/pet-store",
  },
  {
    id: 8,
    headline: "Portfolio",
    des: `This portfolio website was originally created two years ago to showcase my skills and work. Recently, I revamped it with additional features and updated content to better reflect my experience and projects.`,
    img: require("./images/no-preview.jpg"),
    where: "Personal",
    url: "https://github.com/mandliyarajendra11/personal-website",
  },
  {
    id: 9,
    headline: "Library management system",
    des: `The Library Management System is a personal project I developed two years ago. It is a book store application designed to manage books efficiently. I integrated the Google Books API to showcase book details, and the app includes features like a search functionality, category-based suggestions, a buy button that redirects users to the book purchase page, and an email-sending feature for notifications.`,
    img: require("./images/no-preview.jpg"),
    where: "Personal",
    url: "https://github.com/mandliyarajendra11/LMS",
  },
];

export default projectApi;
