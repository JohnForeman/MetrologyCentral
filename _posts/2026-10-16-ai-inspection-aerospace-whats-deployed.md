---
layout: post
title: "AI Inspection in Aerospace: What's Actually Deployed (and What's Still R&D)"
permalink: /guides/ai-inspection-aerospace-whats-deployed/
description: "A sourced look at AI inspection in aerospace: GE/Waygate borescopes, Pratt & Whitney Percept, Boeing part validation, Spirit robotic NDI, and Airbus/ZAero composite projects."
categories: [guides]
tags: [AI inspection, aerospace, borescope, composites, MRO]
---

Aerospace AI inspection gets plenty of headlines, but much less is in production than in automotive. Here is what the [AI Inspection Atlas](/atlas/) can actually source. It's split into **deployed**, **MRO** (maintenance) and **still R&D**, and every number is quoted from the source.

## In production or commercially released

**Boeing: AI part validation on the 737 line (Renton).** Inspectors photograph part tags, then optical character recognition (OCR) reads the text and checks it against a parts dictionary. The training set was "more than 2,250 part images ... and manually labeled nearly 38,100 text boxes." Boeing says it improved "inspection time by more than 17 hours per airplane." [Case](/atlas/boeing-ocr-part-validation/)

**Spirit AeroSystems: robotic NDI for composite structures (Wichita).** Two robots share seven sensors to inspect parts up to 200 feet long, "sometimes up to 40 percent faster." Spirit says analysis "can be automated through machine learning." Note that this is ultrasonic NDI (non-destructive inspection), not camera vision. [Case](/atlas/spirit-robotic-ndi/)

## MRO: engine borescope inspection

**GE Aerospace + Waygate Technologies.** AI-assisted defect recognition for High Pressure Compressor borescope inspections, used on GEnx and CFM LEAP. The model was trained on "thousands of new representative images" taken from GE inspection videos. It is said to "help increase detection rates by ~34%, while reducing false alerts by >13%." A 2026 follow-up added guided Menu Directed Inspection templates for GEnx HPT blades. [HPC case](/atlas/ge-waygate-hpc-borescope/) · [MDI case](/atlas/ge-waygate-genx-mdi/)

**Pratt & Whitney + Awiros: Percept.** Phone-based computer vision for pre- and post-lease engine checks on GTF and V2500 engines. It "reduces time taken by nearly 90%." [Case](/atlas/pw-awiros-percept/)

## Still R&D or pilot

- **Airbus Atlantic + IRT Jules Verne:** cosmetic defects on acoustic panels. "successfully tested on real parts, under industrial conditions," with production integration planned "within two years." [Case](/atlas/airbus-atlantic-acoustic-panels/)
- **ZAero (EU project):** inline inspection during automated fiber placement on CFRP wingskins. It published goals, not measured production results. [Case](/atlas/zaero-afp-inspection/)
- **Boeing SMART-VIStA (MxD):** AI inspection of adhesive dots on space-grade solar panels, as a development project. [Case](/atlas/boeing-smart-vista/)

## Why aerospace lags automotive

- **Volume:** a car plant can build ~1,000+ vehicles a day. Aerospace builds far fewer, so there are fewer images to train on.
- **Certification:** inspection results feed airworthiness records, so AI tends to *assist* inspectors (GE, Pratt & Whitney) rather than replace their sign-off.
- **The highest-value targets are often internal defects** in composites, which need ultrasound or CT rather than cameras.

**Takeaway:** the proven aerospace use cases today are **assistive** ones: borescope defect recognition, OCR and traceability, and robot-collected NDI data. For new-part camera inspection, treat vendor claims as pilots until you see a production reference.

**Next:** [How to scope an AI inspection pilot](/guides/how-to-scope-an-ai-inspection-pilot/) · [All aerospace cases](/atlas/)
