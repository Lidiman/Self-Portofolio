---
title: "NeuroMotion"
tagline: "Edge-AI Microsleep & Fatigue Early-Warning System"
description: "Sistem IoT cerdas berbasis ESP32-S3 Camera dan 6-DOF IMU untuk deteksi dini microsleep dan anomali postur berkendara secara on-device dengan feedback audio-haptic instan."
category: "embedded"
featured: true
order: 3
tags: ["C/C++", "ESP32-S3", "FreeRTOS", "EdgeAI", "TinyML"]
repoUrl: "https://github.com/Lidiman/NeuroMotion"
demoUrl: "https://github.com/Lidiman/NeuroMotion"
role: "Embedded Hardware & Firmware Engineer"
metrics: ["< 80ms alert response time", "94% eye-closure detection accuracy", "3.3V battery-optimized runtime"]
highlights:
  - "Custom FreeRTOS task scheduling untuk inferensi visual dan telemetry concurrent"
  - "Low-power deep sleep state dengan threshold interrupt wake-up"
  - "Serial telemetry bridge untuk visualisasi metrik real-time"
icon: "cpu"
---

NeuroMotion mengeksekusi pipeline computer vision ringan langsung di edge micro-controller tanpa memerlukan koneksi cloud, menjamin privasi pengguna dan respon deterministik saat kelelahan terdeteksi.
