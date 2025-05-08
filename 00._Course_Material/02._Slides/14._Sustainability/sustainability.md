
<div class="title-card">
    <h1>Sustainability</h1>
</div>

---

# Let's talk about sustainability

The agenda:

1. Let's talk about the general problem.

2. How we can measure it for web development.

3. How we can measure it for code (server-side).

But first:

*What does sustainability in computer science mean to you?*

---

# Sustainability is **our** problem

> Climate change is the problem of our time, it’s everyone’s problem, and most of our problem-solvers are assuming that someone else will solve it.

> A good way to think about it, via Saul Griffith, is that it’s the role of technologists to create options for policy-makers.

[Bret Victor - What can a technologist do about climate change? (A personal View)](https://worrydream.com/ClimateChange/)


---

# What can **you** do as a tech consumer? 

*Suggestions?*

---

# Good practices as a conscious tech consumer

Many points can be made but the following two require little effort but result in a big impact:

* Use devices for longer rather than replacing them

* Use cloud services wisely

The rest of the presentation will focus on *you* as a developer.

---

# The UN's 17 Sustainable Development Goals (SDGs)

https://sdgs.un.org/goals

*Which of these goals does our field pertain to?*

---

# The problem: Data centers, networks and devices

> "*In 2020, the information and communication technology sector as a whole, including data centers, networks and user devices, consumed about 915 TWh of electricity, or **4-6%** of all electricity used in the world.*"

[Computing is using more energy than ever](https://frontiergroup.org/resources/fact-file-computing-is-using-more-energy-than-ever/)

> "*In 2022, data centers consumed 240-340 terawatt-hours (TWh) of electricity, accounting for **1.0-1.3%** of total global electricity use.*"

[Computing is using more energy than ever](https://frontiergroup.org/resources/fact-file-computing-is-using-more-energy-than-ever/)

> "*That’s comparable to the electricity consumption of the entire United Kingdom.*"

[Electricity consumption by country](https://worldpopulationreview.com/country-rankings/electricity-consumption-by-country)

> "*A typical data center can use between **11 and 19 million liters** of water per day.*"

[Sustainable Web Design](https://sustainablewebdesign.org/)

---

# Inspired by circularity, powered by innovation– Microsoft Circular Centers scale sustainability

[![ Inspired by circularity, powered by innovation– Microsoft Circular Centers scale sustainability ](http://img.youtube.com/vi/IcWg7F85puY/0.jpg)](https://www.youtube.com/watch?v=IcWg7F85puY)


---

# Sustainable Data Centers

[![A datacenter in the deep](http://img.youtube.com/vi/S6laWfQU7yk/0.jpg)](https://www.youtube.com/watch?v=S6laWfQU7yk)


---

# Browse around for different guidelines

https://sustainablewebdesign.org/guidelines/

*If any catches your attention, skim it and talk about it with your neighbor.* 

---

# Let's try the Website Carbon Calculator

https://www.websitecarbon.com/

---

# How does it work?

https://www.websitecarbon.com/how-does-it-work/

*Read it first and then explain to the class how it works.*

---

# erooM law

> Tristan Nitot (ex Mozilla Europe) theorized something he calls the “erooM law” (a reversed Moore’s law): he suggests that because the Moore’s law is dead (hardware is not twice more powerful every year anymore), our industry should invest in making the software twice faster every other year. This way we could:

> * Avoid our hardware to feel slower after every software upgrade, which makes us throw away perfectly capable hardware
    
[Source](https://lobste.rs/s/xig9z9/reducing_co_emissions_with_faster#c_yo6hpp) [Source 2](https://www.youtube.com/watch?v=7k4rtBNs7Ug)

---

# The energy consumption of CPUs

> When your CPU core isn’t running instructions, it will (in most configurations) be automatically switched to a mode where it uses less power. Conversely, when a CPU core on your computer runs CPU instructions, it uses more electricity.

[Reducing CO₂ emissions with faster software](https://pythonspeed.com/articles/co2-emissions-software/)

The blog post uses measurement to conclude that we can reduce electricity usage in two ways:

1. Reducing computation by writing more efficient code.

2. Utilizing multiple cores by adding parallelism.

---

# Parallelism doesn’t reduce computation… but it does reduce power usage!

The following study has found that:

> a non-linear relationship between number of cores and power usage, and concluded that “on [their] experimental platform, aggressively parallelizing programs is nearly always an energy-efficient choice.

[It’s Not Easy Being Green: On the Energy Efficiency of Programming Languages](https://arxiv.org/pdf/2410.05460v1)

---

# Example: Using perf to output energy consumption (built into Linux)


```python
import time
start = time.time()
while time.time() - start < 5:
    sum(range(1_000_000))
```

```bash
$ perf stat -e power/energy-pkg/ -- python spin.py

 Performance counter stats for 'system wide':

            138.91 Joules power/energy-pkg/

       5.027640326 seconds time elapsed
```

[Source](https://pythonspeed.com/articles/co2-emissions-software/)

<span style="font-size: medium;">**Note**: `perf` requires RAPL provided by Intel (ARM processors only) for Linux.</span>

---

# Let's try the `Impact Framework`

Green Software Foundation has created a framework to measure and report environmental impact of systems:

https://if.greensoftware.foundation/users/quick-start

It offers a unified way to report impact.

One could add them to their CI/CD pipeline to measure the impact of their code.

It is currently an incubation project but looks promising.

---

# Microservices vs. Monoliths

This serves as a contrast to DLS and there are no right answers. 

There is a movement to bring back monoliths for multiple reasons.

*What do you think is the impact of both in regards to sustainability?*

---

# Further Reading

