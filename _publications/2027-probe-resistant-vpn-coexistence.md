---
title: "Exposing Probe-Resistant VPNs via Protocol Coexistence"
collection: publications
category: conferences
permalink: /publication/2027-probe-resistant-vpn-coexistence
excerpt: ''
date: 2027-05-01
venue: 'IEEE Symposium on Security and Privacy (S&P Oakland)'
acceptance_rate: '15.8%'
authors: '<strong>Enrique Sobrados</strong>, Muhammad Danish, Jack Vanlyssel, Roya Ensafi, and Afsah Anwar'
citation: '<strong>Enrique Sobrados</strong>, Muhammad Danish, Jack Vanlyssel, Roya Ensafi, and Afsah Anwar. Exposing Probe-Resistant VPNs via Protocol Coexistence. In IEEE Symposium on Security and Privacy (S&P Oakland), 2027.'
---

# ABSTRACT
Governments and ISPs have been increasingly enforcing strict censorship regulations over the last decade. This has led users to rely on VPN solutions to bypass content restrictions. In response, censors have begun blocking VPN connections through active probing and passive traffic analysis. Now, VPN providers are deploying protocols with probe-resistant features to avoid being detected by censors.

In this paper, we find that commercial VPN providers often deploy a collection of VPN protocols---including probe-resistant protocols like WireGuard and probe-sensitive protocols like IKE---in the same server. We show this coexistence leads to a weak-link vulnerability that can be abused by an adversary (censor) to identify and block VPN proxies. More, we uncover that the weak-link vulnerability is unfortunately overlooked and prevalent in most popular VPN providers including ProtonVPN, NordVPN, and Surfshark.

In our analysis of 13 VPN applications, we discover that the weak-link vulnerability is present in an average of 90.1% of analyzed servers, with 9 providers exhibiting it in more than 95% of their servers. We find that the weak-link affects servers running the WireGuard protocol at least 90% of the time and NordWhisper, a censorship-oriented proprietary VPN protocol, is affected in 99.1% of servers. Further, we show that the weak-link affects four providers deploying an enhanced topology, such as a double hop, which is intended to protect users against censorship by routing traffic through multiple servers. Finally, we demonstrate how censors can exploit the weak-link vulnerability to reliably identify and map entire VPN infrastructures through four case studies.
