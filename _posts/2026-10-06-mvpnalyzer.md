---
title: 'Looking Beyond the VPN Badge: Auditing Mobile VPN Apps'
date: '2026-10-06'
permalink: /research/mvpnalyzer/
research: true
paper_year: 2026
paper_venue: Network and Distributed System Security Symposium (NDSS)
excerpt: MVPNalyzer audits the security and privacy of Android VPN apps. Our investigation of 281 apps found traffic leaks, unencrypted communication, tracking, and weaknesses in security practices.
tags:
- VPN security
- mobile security
- privacy
---

A mobile VPN sits in a privileged position. It intercepts traffic that would otherwise go directly through the user's network, and people often install it to reduce tracking, surveillance, or censorship. That arrangement changes who must be trusted: the VPN provider gains a role that was previously held by the local network.

Our paper, **MVPNalyzer: An Investigative Framework for Auditing the Security & Privacy of Mobile VPNs**, investigates whether mobile VPN apps deliver the protections that users expect.

## A framework for examining behavior

MVPNalyzer is an extensible framework for analyzing Android VPN applications across network layers. It is designed around the practical challenges of the Android VPN ecosystem and supports investigation of how apps handle traffic, protect communications, and expose users to tracking.

We applied it to **281 popular VPN apps from Google Play**. Rather than assuming that an active VPN connection implies protection, the study examines what the applications actually do.

## What the audit revealed

The investigation found several kinds of failures:

- **61 apps** transmitted unencrypted data. Five sent sensitive VPN configuration files in cleartext, creating a risk of VPN tunnel hijacking.
- **29 apps** leaked user traffic, including DNS, outside the VPN tunnel.
- **169 apps** failed to obfuscate traffic sufficiently to avoid trivial blocking.
- **76 apps** transmitted the Advertising ID, an identifier used for tracking.
- **107 apps** failed to implement the security practices examined in the study.

These categories can overlap: an app may exhibit more than one problem. The findings describe the audited sample and should not be interpreted as a claim about every mobile VPN.

## Encryption is only one part of protection

A VPN can establish an encrypted tunnel while still leaking some traffic or sending other sensitive information without encryption. An application may also provide a tunnel while participating in tracking.

Censorship resistance raises a further question. Protecting the contents of a connection does not necessarily prevent a network observer from recognizing and blocking that connection.

## Why auditing matters

Collectively, the audited apps had hundreds of millions of installs. Their failures show how app behavior, provider practices, and the enforcement of security requirements can undermine protections at a large scale.

The study argues for assessing mobile VPNs through observed behavior across multiple layers. A connection indicator or a broad privacy claim does not answer whether traffic stays in the tunnel, sensitive communications are protected, or tracking identifiers are transmitted.

## Read the research

[Read the NDSS paper](https://www.ndss-symposium.org/wp-content/uploads/2026-s1573-paper.pdf) · [Paper details and citation](/publication/2026-mvpn-ndss)
