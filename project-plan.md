# Project Plan

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Project Scope](#2-project-scope)

   1. [Goals](#21-goals)
   2. [Delivery](#22-delivery)
   3. [Out of Scope](#23-out-of-scope)

3. [Project Timeline](#3-project-timeline)
4. [Technical Requirements](#4-technical-requirements)
5. [Features Overview](#5-features-overview)

   1. [User Management & Administration](#51-user-management--administration)
   2. [Project Management](#52-project-management)
   3. [Messaging & Communication](#53-messaging--communication)
   4. [Payments Management](#54-payments-management)
   5. [Analytics](#55-analytics)

6. [Security & Risk Management](#6-security--risk-management)

   1. [Risks](#61-risks)
   2. [Mitigation Strategies](#62-mitigation-strategies)

## 1. Executive Summary

| Key              | Summary                                                                                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project Name     | The Bridge Project                                                                                                                                                                                               |
| Objective        | Build a professional platform that streamlines project management end-to-end for freelancers and clients by facilitating seamless communication, project briefing, task/status tracking, payment and onboarding. |
| Target Users     | Independent freelancers and clients in need of organized project management and collaboration.                                                                                                                   |
| Project Duration | Est. 3-6 Months                                                                                                                                                                                                  |
| Medium           | Software, Web-based                                                                                                                                                                                              |

## 2. Project Scope

### 2.1 Goals

- Build a web-based platform that facilitates and streamlines end-to-end project management for freelancers and clients.
- Implement core pillars of the application such as user & account management, feature-rich project management, client-freelancer communication, payment handling and ease of onboarding.
- Secure the application with security best-practices, activity logging and administrative features.
- Implement a support and dispute resolution system in order for users to escalate disputes and for admins to resolve them fairly and seamlessly.
- Comply with data protection laws in order to supply a fair, privacy-rich and user-first platform.

### 2.2 Delivery

- The platform will be delivered as a web application.
- The platform will be free-to-use.
- Project completion is expected to take anywhere from between 3 to 6 months depending on various factors such as productivity and complexity of development.

### 2.3 Out of Scope

- For the time-being, the platform will not be delivered in other mediums such as mobile or desktop-based applications.
- For the time-being, the platform will align its focus with the core goals of creating an end-to-end project management solution for freelancers and clients, and will not act in other capacities such as a search tool for new clients, freelancers or projects.

## 3. Project Timeline

- **Phase 1**: Planning (est. 1-2 days)

  - Complete project outlines and plans

- **Phase 2**: UI/UX design (est. 1-2 weeks)

  - Wireframes (e.g landing page, client & freelancer dashboards, project view etc.)
  - User flow diagrams
  - Screen designs (desktop, mobile etc.)
  - Typography, branding (logos, wordmarks, etc.), color schemes

- **Phase 3**: Pre-development (est. 2-3 days)

  - Learn basics of necessary technologies (TypeScript)

- **Phase 4**: Development (est. 2-4 months)

  - Frontend: User flows & interfaces, features, pages (e.g dashboard, landing page, project view, etc.)
  - Backend: API, database integration, authentication & authorization
  - Integrations: Payment gateway, notifications, messaging system
  - Testing: Develop feature-based and code-based tests throughout the development period with appropriate strategies (unit, integration, E2E etc.)

- **Phase 5**: Deployment & Launch (est. 2 weeks)

  - Deployment on hosting platform
  - Setup of production environment variables and configurations
  - Setup of CI/CD pipelines
  - Detailed README for Git repository
  - User onboarding documentation
  - User guidelines, privacy policy, cookie policy, TOS and compliance.

## 4. Technical Requirements

- **Frontend**

  - Language: TypeScript
  - Framework: Next.js
  - UI Library: Chakra UI

- **Backend**

  - Language: Node.js + TypeScript **or** Java
  - Framework: Nest.js **or** Spring Boot
  - Database: SQL (e.g MySQL, PostgreSQL)
  - Caching?: Redis

- **Authentication**

  - JWT-based or session-based
  - OAuth Integration (e.g Google, GitHub)

- **Integrations**

  - Payment Processor: Stripe
  - Messaging: Real-time messaging API (e.g Firebase or custom WebSocket setup)
  - Email Correspondence: Mailgun, SendGrid, etc.

- **Hosting**

  - Cloud Provider: Firebase/Google Cloud
  - CI/CD: GitHub Actions or other (e.g CircleCI)
  - Containerization?: Docker
  - Deployment: **TBD**

- **Testing**

  - Unit Testing: Jest
  - Integration & E2E Testing: Cypress (and/or with automation setup)

- **Version Control**:

  - Git with GitHub

## 5. Features Overview

### 5.1 User Management & Administration

#### User Registration & Authentication

- **Registration**: Allow users to sign up as a freelancer, client, or admin with basic credentials, or through OAuth2.
- **Login & Authentication**: Implement a standard and secure auth flow based on an authentication strategy (e.g JWTs, session-based).
- **Password Recovery**: Allow users to reset their passwords securely through a side-channel (email).

#### Account Management

- **Two-Factor Authentication (2FA)**: Option to enable 2FA for enhanced security; recommended especially for admin accounts.
- **Password Management**: Option to securely reset user password in accordance with web security guidelines (OWASP).
- **Account Deactivation/Deletion**: Option to delete or deactive account with a smooth resolution to ongoing projects.
- **Account Details**: Users can add/edit basic details such as profile picture and name.

#### Administrative & Security Features

- **Access Control**: Define and implement specific permissions for freelancers, clients, and admins to access relevant features with an access control strategy (e.g RBAC, ABAC).
- **Admin Account/Dashboard**: An admin account that allows for viewing of platform data and management.
- **Dispute Resolution**: A ticketing system for handling disputes between clients and freelancers, with options for admins to review project history and messages.
- **User Management**: View, edit, or deactivate user accounts and enforce platform guidelines or resolve disputes if necessary.
- **Activity Logs**: Track key activities, such as logins, payment transactions, and project updates, for security auditing.
- **Error Monitoring**: Detect and log system errors for proactive troubleshooting and maintenance.

### 5.2 Project Management

#### Project Creation System

- **Initilization**: Clients and freelancers should be able to create/start new projects on their respective dashboards.
- **Project Briefs**: Clients should be able to create a detailed project brief, specifying requirements, budget and deadlines associated with a project allowing revisions if necessary.
- **Onboarding**: Each project should have a link that allows a freelancer/client to gain access to the project and their respective project management features for their role, as well as shared resources for the project (e.g project briefs).
- **Project Proposals**: Freelancers can submit proposals outlining how they'd approach the project, estimated costs, rate quotes and timelines allowing revisions if necessary.
- **Proposal Comparison**: Enable clients to compare proposals based on cost, timeline and other project variables.
- **Negotiation**: Allow freelancers and clients to negotiate terms directly through the platform.
- **Proposal Management**: Clients should be able to respond to proposals with different actions (e.g, reject, accept, follow-up)
- **SOW and Contracts**: Include a feature to outline the Statement of Work (SOW) and allow for contracts to be signed digitally within the platform.

#### Project Tracking System

- **Task Tracking**: An interactive Kanban board or task list where projects are divided into smaller, manageable tasks, milestones and deliverables. Tasks can have set: deadlines, statuses, priority-levels etc.
- **Timeline/Notifications**: Automatic timeline/notification updates for significant events such as new client/freelancer onboarded, brief/proposal updates, payment status changes, task updates and project closure.
- **File Storage & Organization**: Centralized file management where all documents related to the project are securely stored and easily accessible.
- **Deadline Reminders**: Automated in-app reminders and emails for approaching deadlines.
- **Searching & Filtering**: Filter tasks by priority, due date, or completion status.

### 5.3 Messaging & Communication

#### Messaging System

- **In-Platform Messaging**: Real-time chat or messaging functionality for instant communication. This could also support file sharing (documents, images, etc.).
- **Notification Updates**: Automatic notifications for new messages.
- **Revision Requests & Feedback**: Clients should be able to request revisions on deliverables and have an obvious medium to provide feedback to freelancers.
- **Email Notifications**: Email alerts for critical events like milestone completion, payment updates,

### 5.4 Payments Management

#### Payments System

- **Payment Processing**: Integrate with payment processors to handle client payments securely and flexibly, supporting multiple payment methods.
- **Escrow System**: An escrow payment system to hold funds until project milestones are met or final deliverables are approved.

#### Invoicing

- **Automatic Invoicing & Receipts**: Auto-generate invoices and receipts based on completed milestones or tasks for transparency.
- **Custom Invoices**: Option for freelancers to create customized invoices manually if needed.

### 5.5 Analytics

#### Project & Task Analytics

- **Project Status Reports**: Overview of all active and completed projects, showing progress metrics, task status, and completion rates.
- **Task Completion Metrics**: Track the completion rate of tasks and milestones to assess project progress and freelancer performance.

#### Financial Analytics

- **Expense Tracking**: Freelancers can add project expenses for clients to approve, allowing both to track project expenses.
- **Invoice & Payment Analytics**: Track paid, pending, and overdue invoices with insights into cash flow.

## 6. Security & Risk Management

### 6.1 Risks

#### Security Risks

- **Data Breaches**: Unauthorized access to sensitive client or freelancer information.
- **Payment Vulnerabilities**: Potential exposure to financial information or transaction interception.
- **Authentication Weaknesses**: Risks associated with weak password policies, insufficient identity verification, session hijacking or brute force attacks.
- **Cross-Site Scripting (XSS) & Cross-Site Request Forgery (CSRF)**: Potential for malicious scripts that exploit the website's trust in user browsers.
- **Injection Attacks (e.g., SQL, Command Injection)**: Potential for attackers to manipulate backend code or database queries by injecting malicious commands.

#### Compliance Risks

- **Data Protection**: Risks of non-compliance with data protection laws (e.g., GDPR, CCPA) and industry standards.

#### User Risks

- **Platform Misuse**: Potential for users to engage in fraudulent activity on the platform.
- **User Disputes**: Potential for client-freelancer disputes to occur on the platform.

### 6.2 Mitigation Strategies

#### Security Best-Practices

- Encrypt sensitive user data (e.g, passwords, payment details) both in transit and at rest using a suitable encryption algorithm.
- Implement access control with an appropriate strategy (e.g RBAC, ABAC), limiting access based on the least privileges necessary.
- Multi-Factor Authentication (MFA): Optional but recommended for users (especially admins) to enhance account security.
- Implement secure cookie settings (e.g, `HttpOnly`, `Secure`, `SameSite` attributes) to protect session data.
- Enable session expiration policies to prevent long-lived sessions and minimize session hijacking risks.
- Set up request rate-limiting to mitigate Denial of Service (DOS) attacks.
- Validate and sanitize all user input client and server-side to prevent injection attacks.
- Implement CSRF tokens for forms and Content Security Policies (CSP) to mitigate XSS vulnerabilities.
- See the [OWASP Cheatsheet Series](https://cheatsheetseries.owasp.org/index.html) for more best-practices.

#### Compliance

- Ensure platform compliance with applicable data protection laws (e.g, GDPR, CCPA).
- Allow users to request data deletion or account deactivation in accordance with regulations.

#### User Support

- Implement a support/ticketing system for users to escalate disputes and for an admin to resolve with the relevant tools.
- Implement admin user management tools to view, edit, or deactivate user accounts and enforce platform guidelines.
- Track key activities, such as logins, payment transactions, and project updates, for security auditing and ease of dispute resolution.
