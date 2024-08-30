# E-Commerce Application in DZ Workspace Cluster with Kafka as Message Broker

## Table of Contents
- [Project Overview](#project-overview)
- [Objectives](#objectives)
- [Tech Stack](#tech-stack)
- [Architecture Diagram](#architecture-diagram)
- [Project Structure](#project-structure)
- [User Interface](#user-interface)
- [Usage](#usage)

## Project Overview
This project demonstrates a basic e-commerce single-page application (SPA) deployed in DevZero Workspace Cluster. The application uses Kafka as a message broker for handling asynchronous communication between different microservices, such as order processing and inventory management. The frontend is built with React, and the backend services are implemented using Node.js.

We're leveraging DevZero's built-in infrastructure template to simplify and accelerate the setup process. With DevZero, tools like kubectl, Helm, Terraform, and others are already configured, making it easier to set up Kafka and seamlessly integrate it with the rest of the services in our workspace. This eliminates the overhead of managing these tools manually and allows us to focus on building and deploying our application efficiently.

## Objectives
Scalable Infrastructure: Deploy the application in a DevZero Workspace Cluster to achieve scalability and high availability.
Event-Driven Architecture: Utilize Kafka as a message broker to decouple services and enable asynchronous processing.
Modern Web Application: Develop a responsive and dynamic single-page application using React and JavaScript.

## Tech Stack
### Backend
Node.js: Handles API requests, business logic, and communicates with Kafka.
Kafka: Used for message brokering between microservices (e.g., order service, inventory service).
### Frontend
React: Builds the user interface for the e-commerce application.
JavaScript: Core programming language for frontend logic and interactivity.
### Infrastructure
Docker: Used for containerizing the application components.
Kubernetes: Manages containerized applications across multiple hosts.
Kafka: Facilitates event-driven communication between microservices.

## Architecture Diagram
![image](https://github.com/user-attachments/assets/1ae915fe-0d5a-4e80-b001-49c52cb82e23)

## Project Structure

```bash
e-commerce-app
├── backend/
│   ├── order-service/
│   └──inventory-service/
├── frontend/
│   └── react-app/
├── inventory-ui/
│   └── react-app/
├── k8s/
│   ├── order-service.yaml
│   ├── inventory-service.yaml
│   ├── kafka.yaml
│   ├── zookeeper.yaml
│   ├── inventory-ui.yaml
│   └── frontend.yaml
└── README.md
```
backend/: Contains Node.js microservices for order and inventory management, along with Kafka producer and consumer.
frontend/: Contains the React SPA for the e-commerce platform.
inventory-ui/: Contains the React SPA for the inventory page.
k8s/: Kubernetes configuration files for deployments, services, and Kafka setup.

## User Interface

## Usage

Once deployed, you can access the e-commerce application through the provided IP address or domain. The React SPA will communicate with the backend services, which are decoupled using Kafka for message brokering.