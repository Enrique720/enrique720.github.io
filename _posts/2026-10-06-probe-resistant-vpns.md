---
title: Why Probe-Resistant VPNs Can Still Be Identified
date: '2026-10-06'
permalink: /research/probe-resistant-vpns/
research: true
paper_year: 2027
paper_venue: IEEE Symposium on Security and Privacy (S&P)
excerpt: When a VPN server hosts multiple protocols, a probe-sensitive protocol can expose an otherwise probe-resistant service. Our study examines this weak-link problem across commercial VPN deployments.
tags:
- VPN security
- censorship circumvention
---

VPNs help people reach information when networks restrict access. As censors become better at recognizing VPN traffic, providers have introduced protocols designed to resist active probing. A probe-resistant service aims to avoid revealing what it is when an unfamiliar client contacts it.

Our paper, **Exposing Probe-Resistant VPNs via Protocol Coexistence**, asks what happens when that service shares a server with other VPN protocols. The answer shows why the security of a deployment depends on more than its most resistant protocol.

## The weak link in a shared server

A provider may offer several ways to connect to the same server. The paper studies deployments in which probe-resistant protocols, such as WireGuard, coexist with probe-sensitive protocols, such as IKE. A censor can learn about the shared server through the more revealing protocol, even when the protocol a user actually relies on resists probing.

The problem is therefore a property of the combined deployment. Making one protocol harder to identify does not necessarily make the server that hosts it harder to discover.

## What we found

We analyzed 13 VPN applications. The weak-link vulnerability appeared in an average of **90.1% of analyzed servers**, and nine providers exhibited it in more than 95% of their servers. The study includes popular providers such as ProtonVPN, NordVPN, and Surfshark.

The weakness affected servers running WireGuard at least 90% of the time and affected NordWhisper, a protocol intended for censorship resistance, in 99.1% of servers. We also found the issue in four providers offering enhanced configurations such as double-hop VPNs. Four case studies demonstrate how protocol coexistence can expose VPN infrastructure.

## Why this matters

A VPN's resistance to detection needs to be assessed across all services exposed by its servers. Features such as a probe-resistant protocol or an additional hop do not, by themselves, establish that the whole deployment is resistant to discovery.

For researchers and providers, the study highlights protocol coexistence as a deployment concern that deserves explicit testing. For users, it explains why a protocol-level claim about censorship resistance may leave important questions about the surrounding infrastructure unanswered.

## Read the research

This note summarizes the paper listed in my publications for **IEEE S&P 2027**.

[Paper details and citation](/publication/2027-probe-resistant-vpn-coexistence)
