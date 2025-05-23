---
title: Chapter 2 - Security Risks and Vulnerabilities in the SDLC
layout: custom
parent: Topic 4 - Cybersecurity
has_toc: false
nav_order: 2
topic: topic4
chapter: chapter2
---

# Chapter 2 - Security Risks and Vulnerabilities in the SDLC
## Understanding Software Vulnerabilities in the SDLC

To understand how to protect software by integrating security into every step of the SDLC, it is vital to first understand what makes software vulnerable.

---

## Causes of Common Vulnerabilities

| **Risk**                          | **Definition**                                                                 | **Example Mitigation Strategy**                                                                 |
|----------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Improper Access Control**      | Users can access data or systems they shouldn’t be allowed to                 | Role Based Access Controls                                                                      |
| **Injections**                   | User input sends malicious code into system                                   | Sanitize user input                                                                             |
| **SQL Injections**               | User inputted malicious SQL queries that are used to gain manipulate the database | Parameterized queries and prepared statements to validate user input                            |
| **Cross-Site Scripting (XSS)**   | Injection of malicious scripts into websites usually using JavaScript         | Use output encoding when displaying user input on a web page                                    |
| **Cryptographic Risks**          | Weak or outdated data encryption                                              | Modern encryption methods                                                                       |
| **Improper Authentication**      | Weak or outdated login systems                                                | Requiring Multi-factor Authentication (MFA)                                                     |
| **Insufficient Logging and Monitoring** | Weak identification and alerting of suspicious activity in a system           | Regular log reviews and real-time alerts of suspicious network and system activity             |
| **Misconfiguration**             | Systems are set up incorrectly                                                 | Automated scanning and testing tools and have a separate dev and production project to ensure no misconfigurations are live |

---

{% include quiz.html
  id="topic4-chapter2"
  data=site.data.quizzes.topic4.chapter2
%}

---

## Resources for Further Information

- **OWASP Top Ten**: List of the ten most critical security risks to a web application  
  [https://owasp.org/www-project-top-ten/](https://owasp.org/www-project-top-ten/)

- **Common Vulnerabilities and Exposures (CVE)**: Public database of all known software vulnerabilities  
  [https://www.cve.org/](https://www.cve.org/)

- **CISA’s Known Exploited Vulnerabilities**: The US government catalog of real-world cyber attacks  
  [https://www.cisa.gov/known-exploited-vulnerabilities-catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)

---

<div style="display: flex; justify-content: space-between; margin-top: 2rem;">
  <a href="../chapter-1-intro-to-cybersecurity/" style="text-decoration: none;">⬅️ Chapter 1</a>
  <a href="../chapter-3-security-checks-in-CICD/" style="text-decoration: none;">Chapter 3 ➡️</a>
</div>