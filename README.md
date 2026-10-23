# CPU Scheduling Simulator (CSE513 Assignment 1)

Browser-based simulator for FCFS, SJF (non-preemptive), SRTF and Round Robin.

## Run locally
No installation or dependencies. Open `index.html` in any modern browser (double-click it). No server, backend or network access is needed.

Optional self-test (Node.js 16+): `node tests.js` runs the five workloads through every algorithm and prints timelines, averages and the property checks.

## Files
- `index.html` — whole application (HTML, CSS, JavaScript). The scheduling logic is the `simulate` function between the `SIM-START` and `SIM-END` markers; `checks` verifies the required properties.
- `tests.js` — Node script that reads the simulation code out of `index.html` and prints results.

## Model and rules
One CPU, one burst per process, no I/O, zero-cost context switches. Intervals are [start, end). Ties are broken by earlier arrival, then earlier position in the input list. SRTF preempts only for a strictly shorter remaining time. In Round Robin, processes arriving exactly at a quantum boundary join the queue before the preempted process; finished processes never rejoin. Idle intervals are shown when the ready queue is empty.

## Limitations
Integer times only. It models policies, not the real Ubuntu scheduler. SRTF is simulated in one-unit steps, which is exact for integer inputs. Very large bursts make the Gantt chart wide (it scrolls horizontally).
