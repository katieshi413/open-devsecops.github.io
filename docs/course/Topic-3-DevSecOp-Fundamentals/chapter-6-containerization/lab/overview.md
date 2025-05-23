---
title: Labs Overview
layout: custom
grand_parent: Topic 3 - DevSecOps Fundamentals
parent: Chapter 6 - Containerization
nav_order: 1
---

## Introduction
This lab introduces the concepts of containerization with Docker and the use of AWS Elastic Container Registry (ECR) as a shared container registry. You'll gain hands-on experience by containerizing a React application and pushing the container image to a shared registry. This exercise is crucial for understanding how applications are packaged and distributed in a DevSecOps workflow.

## Labs Overview

| Topic                                          |
|------------------------------------------------|
| [Containerizing a React Application](containerization-lab-1)            |
| [Connecting to the Internal Network & Pushing Image to AWS ECR](containerization-lab-2) |

## Prerequisites

### Tools

Before you begin this lab, ensure you have the following tools installed and ready on your machine:

| Name          | Description                                                                                    | Installation Guide |
|---------------| ---------------------------------------------------------------------------------------------- | ------------------ |
| Docker        | Used for building and running containerized applications.                                      | [Download Link](https://docs.docker.com/get-docker/){: .btn .btn-purple .btn-fill } |
| Node.js       | To run the React application locally.                                                          | [Download Link](https://nodejs.org/en/download){: .btn .btn-purple .btn-fill }|
| Git           | For version control and forking the reference application repository.                          | [Download Link](https://git-scm.com/downloads){: .btn .btn-purple .btn-fill }|
| AWS CLI       | To interact with Amazon Web Services and push images to a shared container registry (AWS ECR). | [Download Link](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html){: .btn .btn-purple .btn-fill } |
| Wireguard VPN | For establishing a VPN tunnel to connect to the internal network.                              | [Download Link](https://www.wireguard.com/install/){: .btn .btn-purple .btn-fill } |

### Skills and Knowledge
Below are the skills and knowledge expected to successfully complete the lab exercises:
- Basic command-line operations: You are comfortable navigating and executing commands in a terminal.
- Basic Git operations: cloning, forking, committing, pushing.
- Basic React knowledge: You understand how to run a React application locally

<div style="display: flex; justify-content: space-between; margin-top: 2rem;">
  <a href="../" style="text-decoration: none;">⬅️ Chapter 6</a>
  <a href="./containerization-lab-1" style="text-decoration: none;">Lab 1 ➡️</a>
</div>