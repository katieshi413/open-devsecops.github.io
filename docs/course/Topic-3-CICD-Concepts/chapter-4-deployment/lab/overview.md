---
title: Labs Overview
layout: custom
grand_parent: Topic 3 - CI/CD Fundamentals
parent: Chapter 4 - Deployment
nav_order: 1
---

## Introduction
In Chapter 1, we explored the fundamentals of containerization and how to manually build and push Docker images to a shared container registry - AWS ECR. This manual process, however, introduces potential for human error.

Transitioning from these manual workflows, Chapter 2 aims to streamline and automate these processes through the introduction of a basic CI/CD pipeline using Jenkins. By automating builds, tests, and deployments, we can significantly reduce the risk of errors, ensure consistency across environments, and accelerate the delivery of software updates.

## Labs Overview

| Topic                                          |
|------------------------------------------------|
| [Configuring a Simple CI/CD Pipeline](deployment-lab-1)  |

## Prerequisites

### Tools

Before you begin this lab, ensure you have the following tools installed and ready on your machine:

| Name          | Description                                                                                    | Installation Guide |
|---------------| ---------------------------------------------------------------------------------------------- | ------------------ |
| Docker        | Used for building and running containerized applications.                                      | [Download Link](https://docs.docker.com/get-docker/){: .btn .btn-purple .btn-fill } |
| Git           | For version control and forking the reference application repository.                          | [Download Link](https://git-scm.com/downloads){: .btn .btn-purple .btn-fill }|
| Wireguard VPN | For establishing a VPN tunnel to connect to the internal network.                              | [Download Link](https://www.wireguard.com/install/){: .btn .btn-purple .btn-fill } |

### Skills and Knowledge
Below are the skills and knowledge expected to successfully complete the lab exercises:
- Basic Understanding of CI/CD Concepts
- Basic Docker Fundamentals: Building, Pushing, Pulling, and Running an image.
