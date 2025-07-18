---
title: Chapter 6 - Containerization
layout: custom
parent: Topic 3 - DevSecOps Fundamentals
has_children: true
has_toc: false
nav_order: 6
topic: topic3
chapter: chapter6
---

# Chapter 6 - Definition of Containerization

**Containerization in cloud computing is a method of packaging, distributing, and running applications using containers. A *container* is a:**
- Standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably in different computing environments
- Unlike virtual machines that require an entire virtual operating system, **containers** share the machine's OS kernel and do not require the overhead of starting an OS, booting up, and then running the application.
- Pros: This makes them lightweight, allowing a server to host more containers than if using virtual machines.
- Containerization ensures that software runs reliably when moved from one computing environment to another. This is because the container encapsulates everything the software needs to run: the application itself, along with its runtime, libraries, and system settings.

The standardized packaging of containers, managed by orchestration tools like **Kubernetes**, allows for automation in deploying, managing, scaling, and networking of containers. This brings about a high level of efficiency and scalability for applications, especially in cloud computing environments where resources need to be allocated and managed dynamically. 



<div style="text-align: center;">
    <img src="https://ikarus.sg/content/images/size/w2000/2020/08/dashboard-wide-cropped.png" alt="Kubernetes Dashboard" style="max-width:100%;height:auto;"/>
    <p><em>Example of Functioning Kubernetes Dashboard</em></p>
    <p><em>Source: <a href="https://ikarus.sg/k8s-dashboard/">ikarus</a></em></p>
</div>


Containerization also supports microservices architectures, allowing for the segmentation of parts of a large application into small, independent services that are easier to develop, deploy, and maintain. This approach improves system resilience and scalability. In the cloud, these benefits are enhanced due to the inherent elasticity and resource management capabilities of cloud services. Overall, containerization is a crucial aspect of modern software development and deployment, enabling more efficient use of resources, faster deployment times, and greater consistency across environments.


## Use Cases

- Cloud Migration: Cloud migration is a software strategy that involves encapsulating legacy applications in containers and deploying them in a cloud computing environment. Organizations can modernize their applications without rewriting the entire software code.
- Microservices Architecture: The microservice architecture is a software development approach that uses multiple, interdependent software components to deliver a functional application. Each microservice has a unique and specific function. A modern cloud application consists of multiple microservices, containerization provides the software tool to pack microservices as deployable programs on different platforms.
- IoT Devices: Internet of Things (IoT) devices contain limited computing resources, making manual software updating a complex process. Containerization allows developers to deploy and update applications across IoT devices easily.


## Advantages

**Benefits of Containerization**

- Isolation of Applications - Each container acts like a small, self-contained unit where a specific application and all its dependencies (libraries, frameworks, etc.) are packaged together. Applications in the container can run reliably and consistently across different computing environments because it has everything it needs to work/access within the container.
- Portability - Software developers can use containerization to deploy applications in multiple environments now without re-writing the program code. A single application can be deployed into multiple operating systems.
- Scalability - Can easily handle various technologies, packages, and containers on a single virtual machine. The container cluster can use computing resources from the a shared operating system, but one container doesn't interfere with the operation of other containers.
- Fault Tolerance - A single faulty container does not affect the other containers. This allows multiple containers to run micro-services on the cloud, increasing the resilience and availability of the application.
- Agility - Software developers can use this isolated environment to troubleshoot and change the application code without interfering with the operating system, hardware, and other services. This can shorten software release cycles and work on updates quicker.


{: .lab}
[Lab 1 - Containerizing a React Application](./lab/containerization-lab-1.html){: .btn .btn-purple .btn-fill }

## Artifact vs. Artifactory

### Artifact:
 An "artifact" typically refers to a container image. This image is a read-only template that contains a snapshot of an application and its dependencies at a specific point in time. It's essentially a lightweight, portable, and reproducible package that can be used to create multiple containers with identical configurations. This image includes all necessary files, libraries, and configurations required to run an application. Container images are often built using a set of instructions that specify the software and configuration needed to create them. These images adhere to the Open Container Initiative (OCI) image specification, providing a standardized format for creating container images. Once created, these images can be stored and distributed in a registry, facilitating easy sharing across different environments. 

In simpler terms, think of an artifact like a recipe for an app. This recipe includes everything the app needs to work (like code, tools, and settings). But it's just a set of instructions, not the running app itself. When you want to run the app, you use this recipe to create a "container," which is like a mini-computer inside your main computer. It has everything the app needs to run, based on the recipe. This container is isolated, meaning it doesn't interfere with other things on your computer. So, an artifact in containerization is basically the recipe or blueprint for creating a container that can run an app

This concept of container images as artifacts is fundamental in containerization, enabling the portability, agility, and scalability of applications within the cloud computing and DevOps landscapes

### Artifactory:

A repository manager developed by JFrog that supports software packages created by different languages and technologies. It integrates seamlessly with various build tools and CI/CD pipelines, Artifactory is crucial for automating software development and deployment processes. It accommodates multiple package formats like Maven, NuGet, and Docker, providing a unified platform for artifact management. Additionally, it offers version control and secure storage for these artifacts. With its scalability and reliability, Artifactory is designed to meet the demands of both small and large-scale software development projects

### Summary of Differences

An "artifact" refers to any file or collection of files that are produced as a result of a software development process. These can include compiled source code, libraries, executables, configuration files, and even Docker images. Artifacts are essentially the tangible outputs of your software development lifecycle, crucial for the functioning of the software project.

On the other hand, "Artifactory" is a product developed by JFrog. It functions as a universal repository manager, capable of handling various types of artifacts. Artifactory provides a centralized solution for storing and distributing different types of artifacts, including container images, software packages, binaries, and more. It supports a wide range of package formats. Artifactory also offers integration with various build tools, CI/CD pipelines, and development environments, making it a versatile tool for managing artifacts in a software development process.

So, while an "artifact" is a product of the software development process, "Artifactory" is a tool for managing these products. It's a repository where various artifacts, including those from containerization processes, can be stored, managed, and distributed efficiently


{: .lab}
[Lab 2 - Accessing Corporate Network and AWS ECR](./lab/containerization-lab-2.html){: .btn .btn-purple .btn-fill }

---
{% include quiz.html
  id="topic3-chapter6"
  data=site.data.quizzes.topic3.chapter6
%}

---



### References

**1.** "What is Containerization?" *AWS*, [https://aws.amazon.com/what-is/containerization/#:~:text=Containerization%20involves%20building%20self%2Dsufficient,to%20run%20a%20containerized%20application](https://aws.amazon.com/what-is/containerization/#:~:text=Containerization%20involves%20building%20self%2Dsufficient,to%20run%20a%20containerized%20application). Accessed 20 Feb. 2024.

**2.** "What is containerization? Overview, definition, benefits, and tools", *Log Rocket*, [https://blog.logrocket.com/product-management/what-is-containerization-definition-benefits-tools/](https://blog.logrocket.com/product-management/what-is-containerization-definition-benefits-tools/). Accessed 20 Feb. 2024.

**3.** "What is containerization?", *Red Hat*, [https://www.redhat.com/en/topics/cloud-native-apps/what-is-containerization](https://www.redhat.com/en/topics/cloud-native-apps/what-is-containerization). Accessed 20 Feb. 2024.

**4.** "Decoding the Difference: Artifacts vs Packages in Software Development", *cloudsmith*, [https://cloudsmith.com/blog/artifacts-vs-packages-what-is-the-difference](https://cloudsmith.com/blog/artifacts-vs-packages-what-is-the-difference). Accessed 20 Feb. 2024.

**5.** "Azure Container Registry between Artifactory: Exploring the Differences", *LevInfo*, [https://ievinfo.com/azure-container-registry-between-artifactory-differenc/](https://ievinfo.com/azure-container-registry-between-artifactory-differenc/). Accessed 20 Feb. 2024.

<div style="display: flex; justify-content: space-between; margin-top: 2rem;">
  <a href="../chapter-5-webhooks/" style="text-decoration: none;">⬅️ Chapter 5</a>
  <a href="./lab/overview" style="text-decoration: none;">Labs Overview ➡️</a>
</div>