---
layout: post
title: "How to Scope an AI Visual Inspection Pilot (Lessons from Real Deployments)"
permalink: /guides/how-to-scope-an-ai-inspection-pilot/
description: "A practical checklist for scoping an AI visual inspection pilot in automotive or aerospace: defect definition, imaging, training data, metrics, cycle time and validation, grounded in published cases."
categories: [guides]
tags: [AI inspection, pilot, machine vision, quality engineering, checklist]
---

Most AI inspection pilots fail on scoping, not on the model. This checklist draws on the published deployments in the [AI Inspection Atlas](/atlas/). Where a case illustrates a point, it's linked.

## 1. Pick one part, one station, one defect family

Good first pilots have a clear, costly problem that rules-based vision handles badly:

- **False rejects on a cosmetic surface.** BMW's press shop confused dust and oil with fine cracks; the AI was added so that "these pseudo-defects no longer occur." ([case](/atlas/bmw-dingolfing-press-cracks/))
- **An existing vision system that lets defects escape.** UnitX replaced a failing transfer-case system ([case](/atlas/unitx-transfer-case/)).
- **Assembly verification** such as clips, connectors and labels: Ford, Cognex/NTH, Porsche and Yamaha ([Atlas](/atlas/fit/?defect=Assembly%20%2F%20missing%20part)).

## 2. Write the defect catalogue before you buy anything

List each defect class, a rule for what counts as acceptable versus a reject, and photos of both. Panasonic's case shows why. "Fine vertical scratches" were acceptable while "fiber waste adhesion" and "welding spattering" were rejects, and rule-based tools over-flagged them ([case](/atlas/mvtec-panasonic-battery/)). Separate critical from cosmetic defects. UnitX reports different false-accept limits for each ([pump housing](/atlas/unitx-pump-housing/)).

## 3. Fix the imaging first

Published setups range from a single mobile camera (BMW) to eight cameras (Audi spatter, Yamaha labels), "12 x GigE PC cameras with external lights" (Toyota UK), robot-held optics for 360° coverage (UnitX connecting rods and shafts) and 15,000 photos per car (Nissan paint). Lighting and part presentation decide what's possible. Prove that the defect is visible in the images before you talk about models.

## 4. Size the training data honestly

- **Supervised:** BMW used "around 100 real images per feature" (good, dust, oil, crack...).
- **Anomaly detection:** DGH needed "mainly 'good images'" of welds ([case](/atlas/mvtec-dgh-biw-welds/)), useful when defects are rare.
- **OCR or complex tasks:** Boeing labeled "nearly 38,100 text boxes" ([case](/atlas/boeing-ocr-part-validation/)).

Plan how you'll collect rare defects: seeded parts, scrap bins, or retraining once the system is live.

## 5. Agree success metrics up front

Avoid a single "accuracy" number. Specify:

- **False accept (escape) rate** for critical defects. Often the target is 0%.
- **False reject rate**, which drives scrap and re-inspection cost.
- **Cycle time** against takt time. Published examples range from 0.39 s ([transfer case](/atlas/unitx-transfer-case/)) to ≤26 s ([three-way valve](/atlas/unitx-three-way-valve/)).
- The **baseline** (human or legacy vision), measured on the same parts.

## 6. Plan validation and ownership

- Run the system in **shadow mode** next to current inspection, then do a formal acceptance. UnitX reports 5 days to site acceptance testing (SAT) on one project.
- Decide who retrains the model. Automation NTH handed retraining to the customer's maintenance staff ([case](/atlas/cognex-nth-rocker-arm/)).
- For regulated or audited processes, document how decisions are made. Audi developed its weld AI with DGQ and Fraunhofer to make it audit- and certification-proof ([case](/atlas/audi-neckarsulm-spot-welds/)).

## 7. Plan the scale-up path

Toyota UK started with a first phase, then expanded ([case](/atlas/toyota-tmuk-acrovision/)). Audi retrained its model for each plant's weld settings. Ford now runs 1,000+ phone-based workstations ([case](/atlas/ford-maivs-ibm/)). Budget for integration (PLC, MES, traceability), not just the model.

### One-page pilot scope template

| Item | Your answer |
|---|---|
| Part / station / takt | |
| Defect classes (critical / cosmetic) | |
| Current method and baseline escape/false reject rates | |
| Imaging concept (cameras, lighting, presentation) | |
| Training images available / needed | |
| Target false accept / false reject / cycle time | |
| Validation plan and owner | |
| MES/PLC integration and traceability | |

**Need help?** Browse the [integrator directory](/integrators/) or see [which tools fit your defect](/atlas/fit/).
