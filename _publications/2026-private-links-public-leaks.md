---
title: "The Tragedy of Convenience: Cascading User-Data Leakage from SMS-delivered URLs"
collection: publications
category: conferences
permalink: /publication/2026-private-links-public-leaks
excerpt: ''
date: 2026-11-01
venue: 'ACM SIGSAC Conference on Computer and Communications Security (CCS)'
paperurl: 'https://arxiv.org/pdf/2601.09232'
authors: 'Muhammad Danish, <strong>Enrique Sobrados</strong>, Priya Kaushik, Bhupendra Acharya, Muhammad Saad, Abdullah Mueen, Sazzadur Rahaman, and Afsah Anwar'
citation: 'Muhammad Danish, <strong>Enrique Sobrados</strong>, Priya Kaushik, Bhupendra Acharya, Muhammad Saad, Abdullah Mueen, Sazzadur Rahaman, and Afsah Anwar. The Tragedy of Convenience: Cascading User-Data Leakage from SMS-delivered URLs. In ACM SIGSAC Conference on Computer and Communications Security (CCS), 2026.'
---

# ABSTRACT
Digital services increasingly trade stronger authentication for frictionless access by sending private URLs over SMS, allowing users to resume sessions with a single click. While convenient, this design shifts trust from explicit authentication to a potentially vulnerable communication channel. The vulnerability lies in the assumption that the link will only be accessed by the intended user, which can be violated by mishandling of SMS data. Additionally, the services operate under character limits imposed by SMS protocols, which might lead to shortened URLs with predictable patterns.

In this paper, we show how this assumption fails and how seemingly isolated link exposure can cascade into a wider data leak. Using public SMS gateways as an ethical lens, we analyze more than 322K unique SMS-delivered URLs extracted from over 33 million messages across 30K+ phone numbers. We find that at least 177 services across 701 URLs effectively treat private URLs as bearer credentials, enabling unauthorized access to sensitive user information (e.g., financial details, national IDs) once a link is exposed.

Alarmingly, we show that 125 out of the 177 services are vulnerable to user enumeration, meaning that a single URL can lead to a cascading effect, resulting in the data leakage of their entire user base. Among the 177 services, we observed that 5 of them use a secondary layer of authentication. Interestingly, although these services also treat URLs as private, they (1) partially reveal account information before authentication is completed, and (2) rely on lightweight authentication mechanisms (e.g., DoB, Zip Code). To make matters worse, in 4 out of these 5 services, the secondary authentication is vulnerable to brute-force attacks. We further uncover that 76 services overfetch some of the sensitive data, as those data elements are not visible in the UI, 15 allow edit access to user records, 8 expose more data through UI interaction, and 6 permit account takeover. Our disclosures led to acknowledgments from 18 services, 7 of which have already been fixed, positively impacting at least 120 million users.
