---
title: When a Private SMS Link Becomes a Public Data Leak
date: '2026-10-06'
permalink: /research/sms-private-links/
research: true
paper_year: 2026
paper_venue: ACM Conference on Computer and Communications Security (CCS)
excerpt: Private links delivered over SMS can act as bearer credentials. We show how a single exposed URL can reveal sensitive records and, in some services, expand into a much larger leak.
tags:
- web security
- privacy
---

A link in a text message can make an everyday task easier: resume a session, check a document, or view a personal record without signing in again. That convenience often comes from treating possession of the URL as evidence that the visitor is the intended recipient.

Our paper, **The Tragedy of Convenience: Cascading User-Data Leakage from SMS-delivered URLs**, examines what happens when that assumption breaks. An exposed link may reveal one person's information, but it can also become the starting point for a much wider leak.

## The URL becomes the credential

A private URL can function as a bearer credential: anyone who holds it can obtain access. Its protection then depends on keeping the link private and ensuring that the service enforces appropriate access controls.

SMS handling can expose links beyond the intended recipient. Shortened or predictable URLs introduce another concern: discovering one valid link may reveal a pattern that makes other records discoverable.

## Studying the problem

Using public SMS gateways as an ethical lens, we analyzed more than **322,000 unique SMS-delivered URLs** from over 33 million messages across more than 30,000 phone numbers.

We identified at least **177 services across 701 URLs** that effectively treated private URLs as bearer credentials. The exposed information included sensitive records such as financial details and national identifiers.

## How isolated exposure cascades

Among those services, **125 were vulnerable to user enumeration**. This means that a single exposed URL could enable discovery of additional users' records, turning an isolated disclosure into a broader problem.

The study also found information returned by services that was not visible in the interface: 76 services overfetched data. Other findings included 15 services that allowed records to be edited, eight that exposed additional information through interaction, and six that permitted account takeover. These findings concern overlapping behaviors; they should not be read as separate populations of affected services.

Five services added a second authentication layer, but some still partially revealed information before authentication. Four of those five had a secondary check vulnerable to brute-force attacks.

## From findings to fixes

Our disclosures led to acknowledgments from **18 services**. At the time reported in the paper, seven had fixed the issues, positively impacting at least 120 million users.

The broader lesson is that a convenient link needs a clear security model. Keeping the URL obscure is only one part of the problem: a service also needs to control which records a visitor can access and which information it returns.

## Read the research

[Read the paper](https://arxiv.org/pdf/2601.09232) · [Paper details and citation](/publication/2026-private-links-public-leaks)
