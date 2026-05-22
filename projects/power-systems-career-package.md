# Power Systems Engineering and Economics Career Package

Evidence source: `D:\OneDrive - University of Edinburgh\Sem2\ps\ps`

Evidence discipline:
- Use as coursework simulation / academic engineering analysis.
- Do not describe as live utility operation, client project, hardware testing, protection-setting work, or commissioned engineering delivery.
- Items marked "not evidenced" require user confirmation before entering a CV.

## 1. Project Overview Table

| Module | Professional project name | Evidence in materials | Main tools | Safe value statement |
|---|---|---|---|---|
| Assignment 1 | Three-Bus Load Flow and PowerWorld Verification | Submitted report and Assignment 1 brief | PowerWorld, manual calculation | Built a simple transmission-network model and verified bus/line power-flow behaviour. |
| Assignment 2 | Ybus, Fault Level and Voltage Stability Study | Submitted report and Assignment 2 brief | MATLAB, PowerWorld | Solved Ybus equations and studied fault, outage and reactive-load voltage risks. |
| Assignment 3 | 24-Hour Loading and OLTC Voltage Control Study | Submitted report and Assignment 3 brief | PowerWorld, time-step load data | Converted daily load data into operating studies and identified peak-load voltage/thermal risks. |
| Assignment 4 | Economic Dispatch, Secure Redispatch and DG Impact Study | Submitted report and Assignment 4 brief | MATLAB, PowerWorld ED/OPF | Compared least-cost dispatch with network-security constraints and discussed DG/protection impacts. |

## 2. Project Experience Cards

### Assignment 1 - Three-Bus Load Flow and PowerWorld Verification

Project type: coursework simulation, power-system load-flow analysis.

Background:
The brief required a three-bus transmission network with 100 MVA and 400 kV base values. The report converts line impedance from ohms to per-unit, classifies buses, and compares hand calculations with PowerWorld output. This is a small case, but it demonstrates the base workflow used in larger network studies: parameter conversion, model setup, bus-type reasoning, simulation and engineering explanation.

Technical route:
Problem background -> line R/X and length -> per-unit conversion -> Slack/PV/PQ bus classification -> hand line-flow calculation -> PowerWorld simulation -> comparison and engineering explanation.

Key evidence:
- Line 1-2 impedance converted to 0.02 + j0.04 pu; Line 1-3 to 0.0125 + j0.025 pu; Line 2-3 to 0.01 + j0.02 pu.
- Bus 1 is used as slack bus; Bus 2 is treated as PQ when generation is disconnected; Bus 3 is treated as PV with voltage control.
- Report compares line-flow calculations with PowerWorld results and discusses voltage angle changes after +/-50 MW generation change at Bus 3 and load changes at Bus 2.

What it proves:
- Electrical engineering fundamentals.
- Per-unit system understanding.
- Power-flow interpretation.
- Ability to explain Slack/PV/PQ bus roles in interviews.

CV bullet - Chinese:
- 使用 PowerWorld 建立三母线输电网络模型，完成线路阻抗标幺化、Slack/PV/PQ 节点识别、线路潮流计算和仿真结果校验。
- 分析 Bus 3 发电增减 50 MW 及 Bus 2 负荷变化对母线相角、线路潮流和 Slack bus 出力的影响，解释系统功率平衡机制。

CV bullet - English:
- Built a three-bus transmission-network model in PowerWorld, converting line impedances into per-unit values and validating manual line-flow calculations against simulation output.
- Analysed the impact of +/-50 MW generation changes and load variations on bus voltage angles, line flows and slack-bus balancing behaviour.

LinkedIn version:
Converted a three-bus coursework case into a recruiter-readable load-flow study, showing how per-unit conversion, bus-type classification and PowerWorld verification connect theory with engineering analysis.

Limitations:
Small academic network; no real field data; no protection settings; no N-1 contingency study.

Safe interview answer:
"This was not a real utility project. I use it as evidence that I understand the basic modelling workflow and can explain what the software is solving."

### Assignment 2 - Ybus, Fault Level and Voltage Stability Study

Project type: MATLAB/PowerWorld simulation, fault and voltage-stability analysis.

Technical route:
Network data -> admittance matrix -> MATLAB nodal solution -> line current and complex power -> PowerWorld network model -> three-phase fault analysis -> outage and reactive-load voltage-risk analysis.

Key evidence:
- MATLAB solution gives bus voltages including V1 = 0.9744∠-17.7638°, V2 = 0.9722∠-17.9985°, V3 = 0.9936∠-15.8685°, V4 = 0.9527∠-20.1599°.
- Report uses `S = V I*`, Ohm's law for line current, and matrix inversion for bus-voltage solving.
- Report discusses PowerWorld fault analysis and fault-level formula using fault current, voltage and 100 MVA base.
- High reactive load case shows Bus 13 voltage falling below 0.6 pu near maximum reactive load, described as voltage-collapse risk.

What it proves:
- Matrix-based power-system modelling.
- MATLAB numerical calculation.
- Fault-level reasoning.
- Reactive-power and voltage-stability interpretation.

CV bullet - Chinese:
- 使用 MATLAB 构建 Ybus 导纳矩阵并求解节点电压、线路电流和复功率，输出母线电压幅值/相角并与 PowerWorld 模型结果交叉验证。
- 在 PowerWorld 中完成三相故障水平、负荷切除、发电机断开和高无功负荷场景分析，识别远端母线电压崩溃风险。

CV bullet - English:
- Solved Ybus-based load-flow equations in MATLAB, calculating bus-voltage phasors, line currents and complex power flows for comparison with PowerWorld simulation results.
- Evaluated three-phase fault level, outage response and reactive-load voltage-stability risk, identifying voltage-collapse behaviour under high reactive demand.

LinkedIn version:
Used MATLAB and PowerWorld together to move beyond screenshots: the project connects admittance matrices, fault-level calculation and voltage-stability interpretation into one evidence-based analysis workflow.

Limitations:
The report uses coursework data and simulation assumptions. It does not include real protection-device settings, measured load data or field validation.

### Assignment 3 - 24-Hour Loading and OLTC Voltage Control Study

Project type: time-series operation analysis, voltage-control simulation.

Technical route:
Time-varying load table -> MW/MVAr conversion -> average-load simulation -> maximum-load simulation -> transformer/line loading analysis -> worst-case hour identification -> OLTC voltage-control evaluation.

Key evidence:
- Initial solved network reports bus voltage magnitudes for buses 4-10, including Bus 10 at 0.94828 pu.
- Average and maximum loading cases are built from active/reactive load calculations.
- Worst-case operating condition identified at 11:00 AM.
- Line 9-10 reaches 110.79% loading at 11:00 AM.
- Worst-case voltage table includes Bus 10 at 0.87 pu.
- T3 transformer peak loading is close to 85%-90%; 33 kV line L67 is close to 80%-85%.
- After OLTC action, Bus 8/9/10 voltage magnitudes are reported as 0.99793, 0.97571 and 0.95339 pu.

What it proves:
- Time-series operating analysis.
- Ability to convert load profiles into simulation cases.
- Voltage and thermal-risk identification.
- Understanding of OLTC as a voltage-control mechanism.

CV bullet - Chinese:
- 将 24 小时时序负荷数据转换为 MW/MVAr 输入，比较平均与最大负荷工况，识别 11:00 AM 最严重运行状态。
- 分析 T3 变压器、33 kV L67 线路和远端母线低电压风险，并评估 OLTC 调压后 Bus 8/9/10 电压改善效果。

CV bullet - English:
- Converted 24-hour time-series load data into MW/MVAr simulation inputs, comparing average and maximum loading cases and identifying 11:00 AM as the worst operating condition.
- Analysed transformer T3, 33 kV line L67 and downstream undervoltage risks, then evaluated OLTC voltage-control improvement for remote buses.

LinkedIn version:
Extended static power-flow analysis into a daily operation case study, using PowerWorld to identify when and where the network becomes stressed and how OLTC action can improve downstream voltage.

Limitations:
The project uses provided load tables and a coursework network; it does not validate against measured SCADA data or real transformer tap settings.

### Assignment 4 - Economic Dispatch, Secure Redispatch and DG Impact Study

Project type: economic dispatch, OPF/ED comparison, network security, renewable integration discussion.

Technical route:
Two-bus Lagrange dispatch -> B7FLAT network setup -> 180% load scenario -> ED without network constraints -> overload diagnosis -> manual redispatch -> OPF/ED interpretation -> renewable incentive and DG protection discussion.

Key evidence:
- MATLAB Lagrange method gives total generation 201.19 MW for 200 MW demand plus approximately 1.19 MW losses.
- Manual redispatch reduces G1 from 400 to 131 MW, G2 from 447 to 130 MW, keeps G4 at 200 MW, raises G6 from 321 to 489 MW, and keeps G7 as slack.
- Before redispatch, multiple lines were overloaded: Bus 1 -> Bus 3 at 185% MVA, Bus 1 -> Bus 2 at 192% MVA, Bus 2 -> Bus 6 at 133% MVA, Bus 2 -> Bus 5 at 288% MVA, Bus 4 -> Bus 5 at 154% MVA.
- After redispatch, all lines remained within <=100% MVA; hourly cost increased from 26,465 GBP/h to 28,817 GBP/h.
- ED mode reports system Lagrange multiplier about 16.95 GBP/MWh.
- Report discusses FiT, RPS, TGC and DG impacts on fault levels/protection coordination.

What it proves:
- Economic dispatch fundamentals.
- Cost vs security trade-off reasoning.
- PowerWorld ED/OPF workflow familiarity.
- Ability to connect renewable policy and grid technical consequences.

CV bullet - Chinese:
- 使用 MATLAB 拉格朗日法求解含损耗经济调度，并在 PowerWorld B7FLAT 网络中比较 ED/OPF 和网络约束对调度结果的影响。
- 在高负荷场景下识别多条线路超载，通过降低 G1/G2、提高 G6 输出将线路负载恢复至 100% MVA 限值以内，解释小时成本从 26,465 GBP/h 增至 28,817 GBP/h 的安全约束代价。

CV bullet - English:
- Applied a MATLAB Lagrange method for economic dispatch with losses, then used PowerWorld B7FLAT to compare ED/OPF behaviour under network constraints.
- Identified severe line overloads under high loading and demonstrated secure redispatch by reducing G1/G2 and increasing G6 output, restoring all lines within the 100% MVA limit while explaining the hourly cost increase from 26,465 to 28,817 GBP/h.

LinkedIn version:
This project helped me understand a practical power-system lesson: the least-cost dispatch can violate network constraints. I used PowerWorld and MATLAB to compare cost, line loading, voltage behaviour and redispatch decisions.

Limitations:
Manual redispatch is coursework analysis, not a real-time operator action. Real dispatch would need automated OPF, contingency screening, generator ramp-rate limits, reserve constraints and market rules.

## 3. Ability Matrix

| Ability | Evidence | Strength level for interviews |
|---|---|---|
| Power-flow modelling | Assignments 1-3 | Strong academic evidence |
| MATLAB numerical analysis | Assignments 2 and 4 | Good evidence |
| PowerWorld simulation | All four assignments | Strong evidence |
| Fault-level reasoning | Assignment 2 and DG essay | Good evidence |
| Voltage stability | Assignments 2 and 3 | Strong evidence |
| Economic dispatch | Assignment 4 | Strong evidence |
| Renewable integration awareness | Assignment 4 essay | Conceptual evidence |
| English technical writing | Four submitted English reports | Strong evidence |
| Real engineering delivery | Not evidenced | Do not claim |

## 4. Role Matching Table

| Role | Relevant modules | Emphasise | Avoid |
|---|---|---|---|
| Electrical Engineer | A1-A4 | load flow, voltage, constraints, reporting | "I operated a real grid" |
| Power System Analyst | A1-A4 | Ybus, fault, voltage stability, ED/OPF | unsupported N-1 or protection-setting claims |
| Renewable Integration Engineer | A3-A4 | voltage support, DG fault/protection impact | overclaiming renewable plant design |
| Technical Support Engineer | A1-A4 | tool use, troubleshooting, explaining results | making the project sound like customer delivery |
| Pre-sales / Overseas Technical Service | A3-A4 | English reporting, cost-security trade-off, clear explanation | excessive academic jargon |
| PV / Storage System Engineer | A2-A4 plus other PV-BESS project | grid connection, voltage, dispatch | claiming storage control was modelled here |

## 5. Interview Q&A Bank

### HR Questions

Q: Why is this coursework worth showing?
A: Because it is not just a written essay. It contains modelling, calculation, simulation, result interpretation and English reporting. It shows I can take an engineering problem, build a model, evaluate results and communicate the implications.
Do not say: "It is equivalent to industry experience."
Evidence: four reports, MATLAB appendix, PowerWorld screenshots.

Q: What ability does it show most clearly?
A: It shows structured engineering analysis. I can move from parameters to models, from models to simulation outputs, and from outputs to operational decisions such as voltage support or secure redispatch.

### Technical Questions

Q: What is the role of the slack bus?
A: In load-flow analysis, the slack bus balances the mismatch between scheduled generation, load and system losses. It also provides the voltage-angle reference. In Assignment 1, Bus 1 served this role.

Q: Why can reactive load cause voltage collapse?
A: Reactive demand increases current and voltage drop across line reactance. As voltage falls, some loads draw more current, which can create a reinforcing cycle. Assignment 2 shows voltage dropping below 0.6 pu under high reactive loading.

Q: Why did ED cause overload?
A: ED minimises generation cost but may ignore network constraints. If cheap generation is concentrated in one area, power flows through limited corridors and overloads lines. Assignment 4 showed that secure redispatch increased cost but restored line loading within limits.

### Pressure Questions

Q: Did this project use real data?
A: It used coursework data and simulation cases, not live utility data. The value is method training: modelling, calculation, risk identification and engineering communication.

Q: What would you improve in a real project?
A: I would add real load profiles, equipment ratings, protection settings, N-1 contingency checks, sensitivity analysis, generator ramp limits and automated OPF.

### English Interview Answer

Prompt: "Tell me about this power systems project."

Answer:
This was a coursework-based power-system analysis portfolio from my MSc course. I worked on four connected reports using PowerWorld and MATLAB. The first part focused on load-flow fundamentals, such as per-unit conversion, slack bus behaviour and line-flow verification. The second part used MATLAB to solve Ybus equations and PowerWorld to study fault level and voltage-stability risks. The third part extended the analysis into 24-hour loading and OLTC voltage control. The final part compared economic dispatch with network-constrained operation and showed that the cheapest dispatch can overload lines. I would not present it as an industry project, but it is strong evidence that I can build models, interpret simulation results and explain power-system constraints clearly.

## 6. Personal Positioning Scripts

### 1-minute HR Chinese introduction

我想重点介绍一个电力系统工程与经济课程项目。它不是企业真实项目，所以我不会夸大，但它能很好证明我的工程分析基础。我用 PowerWorld 和 MATLAB 完成了四类分析：潮流计算、故障水平和电压稳定、24 小时时序负荷与 OLTC 调压、以及经济调度和网络约束重调度。这个项目让我把课堂公式转化成可运行模型和英文技术报告，也训练了我解释复杂结果的能力，比如为什么无功不足会造成低电压，为什么最低成本调度可能导致线路过载。对电气工程、新能源并网、技术支持或售前技术岗位来说，它能证明我具备建模、仿真、分析和沟通的基础能力。

### 2-minute technical Chinese introduction

这个项目可以看成一组从基础到运行约束的电力系统分析案例。第一份报告从三母线网络开始，我完成线路阻抗标幺化、Slack/PV/PQ 节点判断、潮流手算和 PowerWorld 校验。第二份报告进入矩阵建模，我用 MATLAB 构建 Ybus 并求解节点电压、线路电流和复功率，同时用 PowerWorld 做故障水平和电压稳定分析，其中高无功负荷场景显示远端母线电压可跌至 0.6 pu 以下。第三份报告把静态潮流扩展到 24 小时时序运行，识别 11:00 AM 为最严重工况，9-10 线路负载率达到 110.79%，并评估 OLTC 对 Bus 8/9/10 电压的改善。第四份报告关注经济调度与网络安全之间的冲突，ED 结果导致多条线路超载，我通过降低 G1/G2、提高 G6 输出，把所有线路恢复到 100% MVA 限值以内，但小时成本从 26,465 GBP/h 增至 28,817 GBP/h。这个项目的核心价值不是规模，而是完整方法链：建模、计算、仿真、约束识别、结果解释和英文报告表达。

### 1-minute English introduction

This project is a coursework-based power-system analysis portfolio from my MSc course. I used PowerWorld and MATLAB across four connected reports. The work covered load-flow modelling, Ybus-based calculation, fault-level assessment, voltage-stability analysis, 24-hour loading, OLTC voltage control, economic dispatch and secure redispatch. One key lesson was that the least-cost dispatch is not always physically secure. In one case, economic dispatch created severe line overloads, so I redistributed generation by reducing G1 and G2 and increasing G6. This restored all line loading within the 100% MVA limit, although the hourly operating cost increased. I would present this honestly as academic simulation work, but it is strong evidence of my ability to model power systems, interpret simulation results and communicate technical findings in English.

## 7. Interview Risk List

- Risk: Overstating coursework as industry project. Fix: say "coursework simulation".
- Risk: Claiming team leadership or role ownership. Fix: say "I completed the submitted analysis/report"; ask user to confirm any team context.
- Risk: Claiming real data. Fix: "provided coursework data and simulation cases".
- Risk: Claiming protection-setting capability. Fix: "understood protection coordination impact conceptually; did not perform relay setting study".
- Risk: Claiming OPF implementation from scratch. Fix: "used PowerWorld ED/OPF functions and interpreted results; MATLAB was used for Lagrange economic dispatch calculations".

## 8. Follow-up Strengthening Suggestions

- Add one clean screenshot per assignment to the website if image rights and clarity are acceptable.
- Re-run one simplified MATLAB calculation and save code as a portfolio appendix.
- Add a short "What I would do in industry" paragraph for each module.
- Add N-1 contingency and sensitivity analysis as a future independent mini-project.
- Prepare a two-minute whiteboard explanation of Slack/PV/PQ buses, Q-V voltage collapse and ED vs OPF.
