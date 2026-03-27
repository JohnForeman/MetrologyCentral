---
layout: post
title: "Why a CMM Is Often the Wrong Final Tool for Tight Hole Size Verification"
date: 2026-03-27
author: John Foreman
description: "Why a general-purpose CMM is often the wrong final acceptance tool for tight hole size verification, and why functional gages, air gages, and bore gages often answer the real question better."
categories: [Metrology, CMM Programming, Inspection & Measurement, Quality Systems, Manufacturing Quality]
tags: [CMM hole size, hole size verification, functional gaging, plug gage, air gage, bore gage, TP20, ring gage, measurement uncertainty, dimensional metrology]
---

A recent discussion started with a familiar complaint: someone said they could not get a Renishaw TP20 to report a certified ring gage correctly. Predictably, the replies split into the usual camps. Some assumed the machine had to be faulty. Others assumed operator error. Still others flatly rejected the premise, as though a CMM struggling with a ring gage were too absurd to consider.

I do not find it absurd at all.

In fact, that kind of result often reveals a deeper metrology problem—one that many people in manufacturing still resist admitting. A coordinate measuring machine can be an excellent tool for locating holes, relating them to datums, and evaluating positional geometry. But that does not automatically make it the preferred final tool for verifying hole size, especially when tolerances are tight and functional size matters.

That distinction is where a lot of arguments go off the rails.

## The wrong argument happens first

Whenever this subject comes up, somebody usually responds with some variation of: “A CMM can measure diameter just fine.”

That statement is true, but it misses the point.

Of course a CMM can measure diameter. The real question is whether a general-purpose CMM is the **best final authority** for a specific hole-size decision. Those are not the same thing.

A CMM does not directly perceive “true hole size.” It samples points, applies stylus compensation, reconstructs geometry, and reports a derived diameter based on a chosen strategy and fitting method. That result can be useful, repeatable, and even highly accurate under the right conditions. But it is still a conditional result, not a magical one.

And when people compare CMM output to a plug gage, air gage, bore gage, or functional gage, they often act as though all these methods are simply alternative ways of measuring the same thing. They are not.

A plug gage asks a functional boundary question. An air gage gives a very sensitive comparative reading over a defined region of the bore. A bore gage reports a size at the diameter its contacts locate. A CMM reports a mathematically reconstructed diameter based on sampled data and software interpretation.

Those methods can correlate. They can also diverge honestly.

When they diverge, the CMM is often granted automatic credibility simply because it produces more digits and comes wrapped in more expensive hardware. That is not metrology. That is brand worship.

## Hole location is not the same problem as hole size

This is the first thing experience teaches you.

CMMs are coordinate instruments. They are naturally strong at coordinate problems. Give a CMM a task involving datums, spacing, orientation, axis construction, center points, or true position, and it is very often the right tool. Even when the hole itself is not perfect, the machine can often estimate an axis or center in a way that is highly useful and highly repeatable.

That is one reason CMMs are so valuable in modern manufacturing.

But hole size is a different kind of problem.

When you are finding location, some local form variation may average out. When you are deciding size, the local form variation may be the whole story.

A real hole is rarely a perfect cylinder. It may contain lobing, taper, bellmouth, barrel shape, straightness error, waviness, axis tilt, burrs, local restriction, or out-of-round conditions that a sparse point pattern will never see. The CMM may still report a diameter. The question is: what diameter did it really report?

Least-squares diameter? Maximum inscribed? Minimum circumscribed? A derived substitute local size? A diameter reconstructed from eight points because that was the default routine ten years ago and nobody questioned it since?

That is why the statement “the CMM said the hole is good” can be almost meaningless without context.

## The literature supports what experienced users already know

This is not just shop-floor opinion.

A foundational source on this issue is NISTIR 5698, **The Estimation of Measurement Uncertainty of Small Circular Features Measured by CMMs**, by Phillips, Borchardt, and Estler. That paper makes an important point that every serious metrologist should keep in mind: uncertainty in circular-feature measurement can be strongly dependent on sampling strategy. NIST showed that uncertainty could vary by **four orders of magnitude** depending on the number and angular distribution of the measured points (Phillips, Borchardt, and Estler, 1995).

That result alone should cure people of the habit of talking about “a diameter measurement” as though there were only one meaningful way to obtain it.

Another relevant source is the NIST work on **Geometric Effects When Measuring Small Holes With Micro Contact Probes**. Although its focus is micro-features, the lesson is broader: once the geometry becomes constrained, effects that seem negligible in ordinary work become significant. Probe-axis misalignment, probe-tip compensation, and mechanical filtering all begin to matter more than many users expect. Internal features are unforgiving, and a probing task that looks simple on paper can become highly sensitive in practice.

NIST’s broader work on CMM uncertainty reinforces the same principle from another direction: machine specification is not the same thing as task-specific uncertainty. A machine can be healthy, calibrated, and within spec and still be the wrong final method for a given hole-size decision (NISTIR 5170).

That is not a contradiction. That is simply how metrology works.

## Why the ring gage example matters

A certified ring gage is a useful reality check because it strips away some of the excuses.

If a machine, stylus system, calibration procedure, probing pattern, fitting method, and environmental setup are all appropriate, a certified ring should give a result that makes sense. If it does not, then something important is being exposed.

That “something” may be any number of things:
- probe lobing
- stylus qualification problems
- poor point distribution
- incorrect fit choice
- ring alignment error
- temperature instability
- pretravel variation
- machine geometry effects
- head behavior under a specific stylus build
- poor software defaults for the task

None of those automatically means the machine is junk. But they do prove a more important point: measuring a bore or ring correctly is not trivial. If a CMM struggles to correlate on a certified ring under controlled conditions, people should think very carefully before declaring it the unquestioned final authority for tight production bores with imperfect form, rougher surfaces, and functional acceptance requirements.

## Why CMMs and functional gages often disagree

When a plug gage rejects a hole and a CMM says the diameter is in tolerance, the instinct in many shops is to assume the plug gage must be crude and the CMM must be telling the truth.

That instinct is often wrong.

A plug gage may be detecting exactly what matters to function: a local restriction, lobing condition, taper, or other boundary behavior that a sparse-point CMM routine does not capture. The CMM may produce a clean, repeatable, mathematically defensible diameter that still fails to represent how the hole behaves in assembly.

Hill Cox addressed this issue directly in *Quality Magazine* in **When Everyone Disagrees: A Look at Method Points to Resolution**. The critical question is not which instrument looks more sophisticated. The real question is which method best represents the feature’s **functional size** for the application (Cox, *When Everyone Disagrees*).

That distinction is everything.

A related article by Cox, **CMMs vs. Thread Gages**, makes the same point through threaded features: a CMM may return a calculated size that is not equivalent to the functional result provided by a gage. Threads are not plain holes, but the metrology lesson is the same. Mathematical size and functional size are not automatically identical (Cox, *CMMs vs. Thread Gages*).

## Why manufacturers often prefer other tools for final hole-size acceptance

This is not a rejection of CMM technology. It is simply sensible process control.

In many production environments, once hole size becomes truly tight, manufacturers often rely on other methods for final acceptance, including:
- air gages
- plug or functional gages
- dedicated bore gages
- three-point comparative ID tools
- roundness or form instruments where form drives function

Why? Because those tools often match the acceptance question more directly.

If the requirement is functional pass/fail, a functional gage is usually the right language. If the requirement is fast, sensitive comparative bore measurement, an air gage may be ideal. If the requirement is a local internal diameter at a defined section, a bore gage may give a more relevant answer. If the requirement is understanding form itself, then a dedicated form instrument may tell the truth more directly than a general-purpose CMM routine.

Meanwhile, the CMM remains outstanding for what it does best:
- locating holes
- building datums and alignments
- evaluating true position
- analyzing feature relationships
- studying taper and axis behavior
- supporting root-cause work
- comparing process shifts over time
- providing broader geometric context

That is a major role. It just is not always the final acceptance role for size.

## The traps people keep falling into

After enough years in CMM work, the patterns become familiar.

### Too few points

People still use point patterns that are hopelessly thin for the form conditions they are trying to judge.

### Poor point distribution

Even when the point count sounds respectable, the angular distribution may be bad enough to undermine the result. NISTIR 5698 is particularly relevant here.

### Wrong fit for the decision

Least-squares is often treated like neutral truth when in reality it is just one mathematical interpretation.

### Misalignment masquerading as diameter error

If the feature axis is not handled correctly, diameter results can be corrupted by alignment and orientation effects.

### Stylus and probe limitations

Long stylus builds, head behavior, stiffness, trigger characteristics, qualification quality, and pretravel variation all matter more than many users admit.

### Confusing repeatability with accuracy

A machine can repeat a wrong answer beautifully.

### Treating machine specification as proof of suitability

A brochure spec is not evidence that a particular hole-size measurement method is fit for purpose.

### Ignoring function

This may be the biggest trap of all. A printed diameter result may not reflect what the feature actually does in the product.

## What about scanning?

Scanning often helps. In many cases it helps a great deal.

Higher point density can expose form that sparse touch-trigger methods miss, and scanning may improve both understanding and correlation. But scanning does not make the problem disappear. It still depends on stylus quality, machine behavior, filter settings, fitting strategy, alignment, surface condition, and a clear understanding of what size definition is actually relevant.

More data is better than less data. But more data is not the same thing as automatic truth.

## The right response is not disbelief. It is testing.

When somebody says a TP20 would not check a certified ring gage correctly, I do not laugh. I start asking questions.

What stylus build was used? How was it qualified? What fit method was chosen? How many points? What point pattern? What ring size? What temperature control? What repeatability study? What cross-check against air gaging, bore gaging, or functional masters?

That is how experienced metrologists think.

And if there is one recommendation I would make to anyone entering this field, it is this: **run your own tests**.

Do not settle arguments by confidence, volume, price tag, or software aesthetics. Build evidence.

Measure certified rings with multiple strategies. Measure bores with known form conditions. Compare touch-trigger routines against scans. Compare least-squares fits against other interpretations. Correlate CMM results with air gages, bore gages, plug gages, and functional performance. Move the part. Requalify the stylus. Rebuild the probe. Study thermal effects. Learn where your process is stable and where it lies to you.

That is how real judgment is developed.

Some of the most important lessons in metrology come from discovering that a result you trusted changes when you vary one factor you assumed was irrelevant.

That is not failure. That is education.

## The position worth defending

After decades of CMM use, programming, and measurement study, my position is simple:

- A CMM is often an outstanding tool for hole location and geometric analysis.
- A CMM can measure hole size, and in some applications it may be entirely adequate.
- But for final verification of tight hole size—especially where functional size governs acceptance—a general-purpose CMM is often **not** the preferred tool.

That view is not anti-CMM. It is pro-metrology.

If somebody disagrees, I would not argue emotionally. I would invite them to test it properly.

Measure certified rings. Measure real bores. Compare strategies. Compare methods. Compare results to function.

Then believe the evidence.

That is how this subject should be discussed.

## References

1. Phillips, Steven D., Bruce R. Borchardt, and William T. Estler. 1995. *The Estimation of Measurement Uncertainty of Small Circular Features Measured by CMMs*. NISTIR 5698. National Institute of Standards and Technology. https://www.nist.gov/publications/estimation-measurement-uncertainty-small-circular-features-measured-cmms
2. Phillips, Steven D., Bruce R. Borchardt, and William T. Estler. 1995. *The Estimation of Measurement Uncertainty of Small Circular Features Measured by CMMs* (PDF). NISTIR 5698. https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nistir5698.pdf
3. Phillips, Steven D., et al. *Geometric Effects When Measuring Small Holes With Micro Contact Probes*. National Center for Biotechnology Information / PMC. https://pmc.ncbi.nlm.nih.gov/articles/PMC4550338/
4. Phillips, Steven D., et al. *Measurement Uncertainty Considerations for Coordinate Measuring Machines*. NISTIR 5170. National Institute of Standards and Technology. https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nistir5170.pdf
5. Muralikrishnan, B., Jack A. Stone Jr., John R. Stoup, and Chittaranjan Sahay. 2010. *Micro-feature dimensional and form measurements with the NIST fiber probe on a CMM*. National Institute of Standards and Technology. https://www.nist.gov/publications/micro-feature-dimensional-and-form-measurements-nist-fiber-probe-cmm
6. Cox, Hill. *When Everyone Disagrees: A Look at Method Points to Resolution*. Quality Magazine. https://www.qualitymag.com/articles/96378-when-everyone-disagrees-a-look-at-method-points-to-resolution
7. Cox, Hill. *CMMs vs. Thread Gages*. Quality Magazine. https://www.qualitymag.com/articles/93395-cmms-vs-thread-gages
