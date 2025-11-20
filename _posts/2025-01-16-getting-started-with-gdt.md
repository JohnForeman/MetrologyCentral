---
layout: post
title: "Getting Started with Geometric Dimensioning and Tolerancing (GD&T)"
date: 2025-01-16
categories: [gd&t, fundamentals, tutorial]
author: Metrology Central Team
---

Geometric Dimensioning and Tolerancing (GD&T) is a symbolic language used to communicate design intent and tolerancing requirements on engineering drawings. Understanding GD&T is essential for anyone working in dimensional metrology and quality control.

## What is GD&T?

GD&T provides a standardized way to specify:

- **Form tolerances**: Straightness, flatness, circularity, cylindricity
- **Orientation tolerances**: Perpendicularity, angularity, parallelism
- **Location tolerances**: Position, concentricity, symmetry
- **Runout tolerances**: Circular runout, total runout

## Key Concepts

### Datum Reference Frame

A datum reference frame (DRF) establishes a coordinate system for measurement. It consists of:

- **Primary datum (A)**: Establishes the first plane of reference
- **Secondary datum (B)**: Establishes the second plane, perpendicular to the primary
- **Tertiary datum (C)**: Establishes the third plane, perpendicular to both primary and secondary

### Feature Control Frame

The feature control frame communicates tolerance requirements:

```
┌─────┬─────┬─────┬─────┬─────┐
│  ∅  │0.05 │  M  │  A  │  B  │
└─────┴─────┴─────┴─────┴─────┘
 │     │     │     │     │
 │     │     │     │     └─ Tertiary Datum
 │     │     │     └─ Secondary Datum
 │     │     └─ Primary Datum
 │     └─ Tolerance Value
 └─ Geometric Characteristic Symbol
```

## Common Symbols

- **Position (⌖)**: Specifies the location of features relative to a datum reference frame
- **Flatness (⏥)**: Controls how flat a surface must be
- **Perpendicularity (⟂)**: Controls how perpendicular a feature must be to a datum
- **Circularity (○)**: Controls the roundness of a circular feature

## Best Practices

1. **Start Simple**: Begin with basic form controls before moving to complex position tolerances
2. **Use Appropriate Datums**: Select datums that reflect part function and manufacturing methods
3. **Consider Manufacturing**: GD&T should reflect how the part will be made and inspected
4. **Document Clearly**: Ensure inspection plans align with GD&T requirements

## Coming Up

In future posts, we'll dive deeper into:
- Position tolerance calculation
- Material condition modifiers (MMC, LMC, RFS)
- Inspection methods for GD&T
- Common GD&T mistakes and how to avoid them

Have questions about GD&T? Let us know what topics you'd like to see covered!

