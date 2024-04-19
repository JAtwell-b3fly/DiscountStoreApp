# Discount Store App
Introduction
The Discount Store App offers a custom discount code generator for a web application developed using Remix, Polaris, React and Shopify’s ecosystem to create, manage and track discount code for Shopify store owners by offering this admin functionality. The aim of this project is to provide an interface for shop owners to create, read, update, and delete discount codes which results in enhancing their ability to attract and retain customers through their targeted promotions.
Project Overview
Shopify store owners rely on discount codes to drive sales and incentivise purchases. This app aims to automate the discount code management process by automating the generation and administration of the discount codes within the Shopify environment.
The significance of this project is that it addresses the limitation of Shopify’s native discount code functionality. Shopify allows shop owners to create only one discount code at a time while requiring them to specify the parameters of usage for each code individually.
Key features:
•	Authentication: The application allows Shopify shop owners to securely log in or sign-up using Shopify OAuth authentication to ensure a trusted user experience.
•	Dashboard: A comprehensive dashboard providing essential information about each discount code available such as the code name, discount value, expiration date and usage limits.
•	Generate Discount Codes: The Shopify shop owners can specify parameters that would automatically generate the discount codes for them through a simple click of a button. 
•	Code Management: Shop owners have full control over their discount codes where they can create, update, view and delete codes where needed.
Specify any constraints or limitations:
The app operates within certain constraints and limitations, including:
•	Inability to Generate Codes Using Shopify's Admin API: Due to limited experience with Shopify, Remix, Polaris, and APIs, the app does not directly generate discount codes using Shopify's Admin API. Instead, it relies on custom-built logic to generate unique codes based on user-provided parameters.
•	Authentication Implementation: The app currently does not include authentication functionality as intended, as challenges were encountered during implementation.
Due to limited familiarity with Shopify, Remix, Polaris, and APIs, the app's functionality is constrained. However, it provides a foundational framework for discount code generation and management, with room for future enhancements and improvements as proficiency in these technologies grows.
Development Environment Setup
To set up the development environment for the Custom Discount Code Generator app, follow these steps:
1.	Install Node.js: Ensure that you have Node.js installed on your system. Shopify requires Node.js version 18 or higher. Install the latest version of Node.js (version 20) on your computer.
2.	Sign up for Shopify Partners: Visit the Shopify Partners website and create an account to access developer tools and resources.
3.	Install Shopify CLI: Open your terminal and use the command >>>npm install -g @shopify/cli to install the Shopify CLI globally on your system. This command allows you to interact with Shopify's development tools from the command line.
4.	Generate Starter Code: Use the Shopify CLI to generate starter code for your app by running >>>shopify app init. Follow the prompts to create a new app, and name the project "discount-store-app".
5.	Create Remix App: Once the starter code is generated, create a Remix app within the project directory. Choose JavaScript as the template language for the Remix app.
6.	Open Project in Visual Studio Code: Open the project folder in Visual Studio Code, or your preferred code editor.
7.	Start Local Development Server: In the terminal within Visual Studio Code, run >>>npm run dev to start the local development server. This command will launch the app, allowing you to preview and test your changes as you develop.
8.	Access App via HTTPS URL: Shopify CLI uses Cloudflare to create a tunnel, enabling your app to be accessed using an HTTPS URL. This provides a secure connection for testing your app locally.
9.	Install App on Development Store: Log in to your Shopify partner account and install the app on your development store. This step allows you to test the app within a Shopify environment and access necessary data.
10.	Create Screens and Navigation: Within Visual Studio Code, create the necessary screens for the app, including the dashboard, authentication, coupon selection, and new coupon screens. Organize these screens as JSX files under the "routes" folder within the app directory. Update the navigation links in the app.jsx file to navigate between these screens.
By following these steps, you'll have a fully functional development environment set up for building the Custom Discount Code Generator app.
Architecture and Technology Stack
The Custom Discount Code Generator app is built using a combination of technologies and tools to provide a seamless user experience and efficient backend functionality.
Frontend Development:
JSX Files: The main screens of the app, including the authentication, dashboard, selected coupons, and new coupon screens, are implemented as JSX files. These files define the structure and layout of each screen using React components.
React: React is used for the frontend functionality of the screens, allowing for dynamic rendering, state management, and user interaction.
Polaris: The app's UI components are built using Polaris, Shopify's design system for creating consistent and visually appealing interfaces. Polaris components ensure that the app aligns with Shopify's design language and provides a familiar experience for users.
State Management: React's useState hook is utilized for managing state within the app, allowing for dynamic updates and rendering based on user actions.
Backend Development:
Data Management: Initially, the app utilizes JSON files as a basic form of data storage to manage discount coupons. However, due to limitations and scalability concerns with this approach, a more robust solution using Prisma is recommended.
Prisma Integration (Not Implemented): Prisma offers a powerful ORM (Object-Relational Mapping) solution that integrates seamlessly with Shopify's API. By defining a schema and utilizing Shopify's API, Prisma can handle data management tasks such as creating, updating, and deleting discount coupons with ease.
Shopify's API (Not Implemented): Shopify's API serves as the backbone for interacting with the Shopify platform, allowing the app to access store data, create discount codes, and perform other administrative tasks.
Development Environment:
Node.js: The app is developed using Node.js, providing a runtime environment for executing JavaScript code outside of a web browser.
Visual Studio Code: Visual Studio Code is used as the primary code editor for developing the app, providing features such as syntax highlighting, code completion, and integrated terminal for running commands.
Shopify CLI: Shopify CLI is utilized for initializing the app, managing app configuration, and interacting with Shopify's development tools from the command line.
Cloudflare Tunnel: Shopify CLI utilizes Cloudflare to create a secure tunnel, allowing the app to be accessed locally via an HTTPS URL for testing purposes.
User Interface Design
Introduction:
For the user interface design, I opted for a straightforward approach, leveraging basic layout components from the Polaris library to create a clean and intuitive interface. The goal was to ensure ease of navigation and clarity of information for the user.
UI Components:
The main UI components utilized in the app include cards, buttons, and layout structures provided by the Polaris library. These components offer a cohesive and visually appealing layout for presenting discount codes and managing them.
Design Principles:
While I did not create wireframes or prototypes, I adhered to basic design principles outlined in the Polaris documentation. This involved maintaining consistency in layout, typography, and colour schemes to ensure a harmonious user experience. Additionally, I customized button sizes and colours to emphasize key actions and draw users' attention to important features.
Screenshots:
Below are screenshots of the main screens in the application:
Authentication Screen:
 
 
Dashboard Screen:
 
Selected Coupon Screen:
 
New Coupon Screen:
 
Backend Logic
Backend Logic Implementation:
For the backend logic, a JSON file was employed to store coupon information, facilitating data manipulation. While this approach was suitable for the current project's scope, it would have been more efficient to leverage Prisma for improved integration feasibility with Shopify, scalability, and enhanced security measures. Utilizing Prisma would have provided seamless integration with Shopify APIs and better support for complex data structures.
Data Processing and Validation:
Data processing and validation were primarily handled within the application logic. This involved ensuring that coupon data adhered to specified formats and constraints, such as valid discount values, expiry dates, and usage limits. While basic validation was implemented, more robust validation mechanisms could have been integrated with Prisma's schema validation features.
Challenges Faced:
The main challenge encountered was the lack of experience with API integration, Remix, Prisma, and Shopify functions. As a result, the decision was made to rely on simpler data storage methods such as JSON files. While this approach met immediate requirements, it limited the potential for seamless integration with external platforms and imposed constraints on scalability and security.
Optimization and Performance Considerations:
Given the project's scale and requirements, optimization and performance considerations were relatively minimal. However, transitioning to a database solution like Prisma would have offered performance improvements, especially as the volume of coupon data increased. Additionally, leveraging Remix for server-side rendering and data fetching could have enhanced overall application performance and user experience.
Security Measures
Introduction:
Security measures are essential to safeguard user data and prevent unauthorized access to sensitive information. While the application aims to provide a secure environment, certain security measures could not be fully implemented due to constraints and limitations.
Authentication:
Authentication of shop owners through signup and sign in forms is a critical aspect of user security. However, due to challenges faced during implementation, the authentication feature remains incomplete. As a result, the app currently lacks a robust authentication mechanism to verify user identities.
Data Encryption:
Data encryption is vital for protecting sensitive information from unauthorized access. However, encryption methods were not integrated into the application due to technical constraints. As a result, data stored within the app may be vulnerable to security threats.
Summary:
Despite efforts to prioritize security, certain measures such as authentication and data encryption could not be fully implemented within the application. As a result, there may be potential security vulnerabilities that need to be addressed in future iterations of the app.
Testing
Testing Strategy:
The testing strategy for the application primarily focused on validating the functionality of core features related to coupon management, including adding, deleting, and viewing coupon information from the coupons list stored in the JSON file. The following testing methods were employed:
Unit Tests:
Unit tests were conducted to verify the individual functions responsible for adding, deleting, and viewing coupon information. These tests ensured that each function performed its intended task accurately and reliably. Specifically, unit tests were designed to assess the functionality of buttons associated with adding, deleting, and viewing coupons, as well as the state management mechanisms governing the manipulation of coupon data.
Outcome:
Unit tests confirmed the correct behaviour of the application's core features, including the ability to add, delete, and view coupons stored in the JSON file. By validating the functionality of these features at the unit level, potential defects or errors were identified and addressed early in the development process, contributing to the overall reliability and stability of the application.
Deployment
As the application was not deployed to a production environment, specific deployment instructions and scripts are not available. However, considerations for future deployment and scalability were explored during development.
Considerations for Deployment and Scaling:
Given the current state of the application and plans for optimization and scalability, the following considerations are relevant:
Utilizing Prisma: Integrating Prisma for database management can enhance scalability, security, and data integrity. Prisma offers robust ORM capabilities and facilitates seamless integration with various databases, providing a scalable foundation for managing coupon data efficiently.
API Integration: Leveraging APIs, particularly Shopify's API, can enhance the application's functionality and integration with Shopify stores. By integrating with Shopify's API, the application can access store data, manage discount codes directly within Shopify, and streamline the user experience for shop owners.
Shopify Functions: Utilizing Shopify Functions, such as webhook triggers and serverless execution, can enhance the application's interaction with Shopify's ecosystem. Shopify Functions allow for custom logic to be executed in response to events within the Shopify environment, providing opportunities for automation, real-time updates, and seamless integration with Shopify's platform.
Deployment and Scaling Considerations: When deploying the application to a production environment, considerations should include infrastructure setup, configuration management, and performance optimization. While specific deployment instructions are not provided, deploying the application on scalable infrastructure (e.g., cloud platforms like AWS, Google Cloud) and implementing load balancing, auto-scaling, and monitoring solutions can ensure reliability, performance, and scalability.
Continuous Optimization: Continuous optimization of the application architecture and database performance are essential for maintaining scalability and performance.
Usage Instructions
Below are detailed instructions on navigating through the app and using each feature.
1. Authentication:
Upon launching the application, users are prompted to authenticate by signing up or signing in. To sign up, users should click on the "Sign Up" button and provide the required information, including full name, email, and password. To sign in, users should click on the "Sign In" button and enter their credentials. Once authenticated, users are redirected to the dashboard.
2. Dashboard:
The dashboard serves as the central hub where users can view all existing discount codes associated with their Shopify store. Each discount code is displayed as a card, providing essential details such as code name, discount value, expiration date, and usage limits. Users can scroll through the dashboard to browse all available discount codes. At the top of the dashboard is a new coupon button which navigates the user to the new coupon screen where they can create a new coupon and add it to their coupon list.
3. Selected Coupons:
Upon selecting a discount code from the dashboard, users are navigated to the Selected Coupons screen. Here, users can view detailed information about the selected discount code, including its name, value, expiration date, and usage limits. Users can navigate back to the dashboard by clicking on the "Back" button. Users can also edit the coupon information by clicking on the edit button or delete the coupon from the list by clicking the delete button.
4. New Coupon Creation:
To create a new discount code, users should navigate to the dashboard and click on the "New Coupon" button. This action redirects users to the New Coupon screen, where they can specify parameters for the new discount code, such as discount value, expiration date, and usage limits. Once all required fields are filled, users can click on the "Generate Coupon" button to create the new discount code. This will create the discount code name. Clicking on the save button will create the discount code. Clicking on the cancel button will clear the form. Clicking on the back button will navigate the user back to the dashboard screen.
5. Coupon Management:
Users can manage their discount codes directly from the dashboard. To update an existing discount code, users can click on the "Edit" button on the respective card and make the necessary modifications. To delete a discount code, users can click on the "Delete" button on the respective card and confirm the deletion.
Known Issues and Future Enhancements
Known Issues:
1.	OAuth Integration: OAuth authentication was not successfully implemented and integrated into the application. This limitation prevents seamless authentication with Shopify, affecting the overall user experience for shop owners.
2.	Database Management: The application does not utilize Prisma for database management, and it lacks integration with Shopify's Admin API for efficient data handling. This hinders scalability, security, and data management capabilities within the application.
3.	Underutilization of Shopify Functions: The application does not make use of Shopify's functions, such as webhooks and serverless execution, which could enhance automation, real-time updates, and integration with Shopify's platform.
4.	UI Design: While the application utilizes Polaris components, it may not fully adhere to Shopify's UI design guidelines. Enhancements in UI design and structure are necessary to ensure consistency and acceptability within the Shopify ecosystem.
Future Enhancements:
1.	OAuth Integration: Implement robust OAuth authentication to enable seamless login and authentication for Shopify store owners. This enhancement will improve the user experience and security of the application.
2.	Database Management with Prisma: Integrate Prisma for efficient database management, data modeling, and ORM capabilities. Leveraging Prisma will enhance scalability, security, and data integrity within the application.
3.	Integration with Shopify's Admin API: Utilize Shopify's Admin API for seamless integration with Shopify stores, enabling efficient data handling, discount code management, and synchronization with Shopify's platform.
4.	Utilization of Shopify Functions: Explore and implement Shopify's functions, such as webhooks and serverless execution, to enhance automation, event-driven functionality, and integration capabilities with Shopify's ecosystem.
5.	UI Design Enhancement: Improve UI design and adherence to Shopify's UI design guidelines to ensure consistency, acceptability, and familiarity for Shopify store owners. Enhancements in UI design will enhance the overall user experience and usability of the application.
6.	Bug Fixing - Generate Code Button: Address the issue with the generate code button not functioning correctly. Debugging and fixing this issue will ensure the proper execution of code generation functionality, enhancing the application's core feature set.
Conclusion
In summary, the project's overall success is hampered by the inability to fully incorporate essential functionality. It serves as a valuable learning experience, highlighting areas for improvement and growth in technology adoption and implementation.
Key takeaways from the project include the recognition of the need to expand knowledge and proficiency in new technologies at a faster pace. Additionally, there's a realization of the importance of exploring efficient learning methods to accelerate the adoption of new technologies within projects.
The project underscores the importance of continuous learning and skill development, particularly in mastering new languages and technologies and effectively integrating them into applications. While the project faced limitations in functionality, it serves as a foundation for future endeavors, offering opportunities for improvement and refinement.
Given more time and dedication to skill enhancement, the project could have achieved greater functionality and success. Moving forward, there's a commitment to enhancing proficiency in technology adoption and implementation to deliver more robust and comprehensive solutions in future projects.
References and Resources
1. Prisma Documentation
Link: Prisma Documentation
Description: Prisma documentation provided essential guidance on database management and integration with Remix.
2. Shopify App Development Documentation
Link: Shopify App Development Documentation
Description: Shopify's official documentation served as a valuable resource for understanding app development, authentication, and interaction with the Shopify Admin API.
3. Polaris Documentation
Link: Polaris Documentation
Description: Polaris documentation provided guidance on UI components and design principles, ensuring consistency with Shopify's design language.
4. Remix Documentation
Link: Remix Documentation
Description: Remix documentation offered insights into server-side rendering (SSR) and building web applications with React and Remix.
5. CodeInspire YouTube Channel - Shopify App Development with Remix
Link: CodeInspire YouTube Playlist
Description: The CodeInspire YouTube channel provided video tutorials and guides on Shopify app development using Remix, offering practical demonstrations and insights.
6. Github Repository
Link: https://github.com/JAtwell-b3fly/DiscountStoreApp.git
Description: This is the link to the GitHub repository containing the source code for the Discount Store App.
