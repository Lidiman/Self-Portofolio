---
title: "Asentinel"
tagline: "Cloud-Native Observability & Server Fleet Sentinel"
description: "Platform monitoring & alerting open-source berbobot ringan untuk infrastruktur microservices, memantau metrik host Linux, container Docker, dan latency jaringan secara real-time."
category: "devops"
featured: true
order: 1
tags: ["Go", "Docker", "Prometheus", "Linux", "Grafana"]
repoUrl: "https://github.com/Lidiman/Asentinel"
demoUrl: "https://github.com/Lidiman/Asentinel"
role: "Lead Infrastructure & Backend Architect"
metrics: ["< 15MB RAM footprint per agent", "99.99% alert delivery reliability", "Sub-second polling cycle"]
highlights:
  - "Arsitektur multi-agent asynchronous berbasis Go channel dan lightweight daemon"
  - "Integrasi Docker socket listener untuk monitoring container lifecycle otomatis"
  - "Zero-dependency single binary deployment dengan static linking"
icon: "activity"
---

Asentinel dibangun untuk mengatasi overhead resource pada agent monitoring tradisional. Didesain khusus untuk environment VPS berdaya rendah hingga cluster multi-node, Asentinel mengumpulkan metrik CPU, RAM, disk I/O, dan container state dengan overhead CPU di bawah 0.5%.
