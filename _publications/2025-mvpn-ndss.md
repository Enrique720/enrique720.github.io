---
title: "MVPNalyzer: An Investigative Framework for the Security & Privacy Audit of Mobile VPNs"
collection: publications
category: conferences
permalink: /publication/2026-mvpn-ndss
excerpt: ''
date: 2026-02-23
venue: 'The Network and Distributed System Security (NDSS) Symposium'
citation: 'Wayne Wang*, Aaron Ortwein*, Enrique Sobrados*, Robert Stanley, Piyush Kumar, Afsah Anwar, and Roya Ensafi. MVPNalyzer: An Investigative Framework for the Security & Privacy Audit of Mobile VPNs. In The Network and Distributed System Security (NDSS) Symposium, 2026.'
#paperurl: 'http://academicpages.github.io/files/paper3.pdf'
---
 
# ABSTRACT
Mobile users increasingly rely on Virtual Private
Networks (VPNs) to protect themselves from tracking, surveil-
lance, and censorship. VPN apps operate from a privileged
position by requiring interception of user traffic. While this safe-
guards end user traffic from malicious network intermediaries
(e.g. surveilling ISPs), it leads to a critical “transfer of trust” from
such network intermediaries to VPN providers. Yet, despite the
sensitivity of this role, VPN apps, especially on mobile platforms,
remain insufficiently audited.
In this work, we present MVPN-Audit, an extensible framework
for systematically analyzing Android VPN apps. Designed to
handle the unique challenges of the Android VPN ecosystem,
MVPN-Audit enables detailed investigation of VPN applications’
behavior across the network layers. We apply our framework to
281 popular VPN apps from the Google Play Store and uncover
fundamental and critical issues: 61 apps transmit unencrypted
data, with 5 sending sensitive VPN configuration files in cleartext,
allowing an attacker to hijack the VPN tunnel connection; 29
apps leak user traffic (including DNS) outside the tunnel; 169
apps fail to obfuscate the traffic to avoid trivial blocking; 76
apps transmit Advertising ID, the device-unique ID widely used
for device and user tracking; and 107 apps fail to implement
the best security practices in their VPN configuration files.
Collectively, these apps have hundreds of millions of installs,
highlighting the scale of users being impacted. Our findings
reveal a troubling pattern of developer negligence, highlighting
how poor enforcement, transparency, and maintenance practices
continue to undermine even fundamental security guarantees