export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  tagline: string;
  problemStatement: string;
  objective: string;
  approach: string;
  methodology: string[];
  blockDiagramText: string;
  blockDiagramSvgPath?: string;
  simulationImageDescription: string;
  hardwarePhotoDescription: string;
  pcbDesignDescription: string;
  results: string;
  performanceMetrics: { metric: string; value: string }[];
  challenges: string;
  solutions: string;
  futureScope: string;
  technologiesUsed: string[];
  myContribution: string;
  githubUrl?: string;
  reportUrl?: string;
  demoUrl?: string;
  references?: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  abstract: string;
  keywords: string[];
  doi: string;
  citation: string;
  pdfUrl?: string;
  slidesUrl?: string;
  posterUrl?: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  organization: string;
  location: string;
  duration: string;
  type: 'internship' | 'research' | 'industrial' | 'workshop';
  responsibilities: string[];
  learnings: string[];
  technologies: string[];
}

export interface Leadership {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string;
  responsibilities: string[];
  impact: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  badgeType: 'ansys' | 'keysight' | 'iit' | 'nptel' | 'ieee' | 'google' | 'hackerrank' | 'kaggle';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'lab' | 'pcb' | 'hfss' | 'cst' | 'prototype';
  description: string;
  technicalDetails: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  organization: string;
  text: string;
  relationship: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Ashutosh Nimbalkar",
    title: "Electronics & Computer Engineering Student",
    subTitle: "Aspiring R&D Engineer | Embedded Systems & VLSI",
    tagline: "Embedded Systems | VLSI Design | FPGA | Data Analytics | Antenna Simulation",
    bio: "An innovative Electronics & Computer Engineering (ECE) student dedicated to bridging the gap between high-speed digital logic and real-world embedded hardware. I bring a track record of hands-on R&D, from simulating RF antenna feeds at NCRA-GMRT to implementing Verilog/VLSI designs at eChipHub and engineering predictive telemetry models at Amdocs. A natural leader and tech evangelist, I serve as the CSMSS IEEE Student Branch Chair and a Google Gemini Student Ambassador, passionate about designing the next generation of intelligent silicon and hardware-software systems.",
    email: "ashutoshnimbalkar9@gmail.com",
    phone: "+91 91568 78951 / +91 96997 52302",
    location: "Pune, Maharashtra, India",
    socials: {
      linkedin: "https://www.linkedin.com/in/ashutosh-nimbalkar-52818a363/",
      github: "https://github.com/ashutosh-nimbalkar",
      scholar: "https://scholar.google.com/citations?user=ashutosh-nimbalkar",
      orcid: "https://orcid.org/0009-0000-1234-5678"
    },
    philosophy: "Engineering is about converting raw data and mathematical theories into optimized digital circuits and physical hardware that address structural communication and analysis constraints.",
    interests: [
      { title: "Semiconductor & VLSI Design", desc: "Digital design workflows, logic gate optimization, and Verilog simulations for custom integrated circuit modeling." },
      { title: "Embedded Systems & IoT", desc: "Designing firmware and sensor networks utilizing STM32, ESP32, and Arduino platforms with communication protocols." },
      { title: "FPGA & Digital Design", desc: "Implementing parallel processing logic and digital state machines mapped to Xilinx Artix-7/Vivado environments." },
      { title: "Data Analytics & ML", desc: "Building regression and classification pipelines using Python, SQL, and PowerBI to perform diagnostic analytics." }
    ]
  },
  
  stats: [
    { label: "Completed Projects", value: 10, suffix: "+" },
    { label: "R&D Internship Months", value: 9, suffix: "" },
    { label: "IEEE Society Memberships", value: 11, suffix: "" },
    { label: "Conference & Hackathons", value: 5, suffix: "+" },
    { label: "Technical Workshops Led", value: 6, suffix: "" },
    { label: "Simulation & Synthesis Hours", value: 450, suffix: "+" }
  ] as Stat[],

  skills: {
    programming: ["Python (Pandas/NumPy)", "Verilog HDL", "SQL (PostgreSQL)", "C/C++", "VHDL", "Embedded C"],
    simulation: ["Ansys HFSS", "Xilinx Vivado", "ModelSim", "KiCad", "MATLAB", "LTspice"],
    hardware: ["STM32 (ARM Cortex)", "ESP32", "Arduino & AVR", "Xilinx Artix-7 FPGA", "FPGA Development Boards"],
    communication: ["SPI / I2C / UART", "Modbus / RS-485", "LoRaWAN", "Coaxial Feed Networks", "IEEE Standards"],
    engineering: ["Digital Logic Synthesis", "S-Parameter Simulation", "Exploratory Data Analysis (EDA)", "Machine Learning (Scikit-Learn)", "Technical Writing"]
  },

  projects: [
    {
      id: "mimo-5g-antenna", // Maintain ID to prevent UI breakdown
      title: "Co-axial Antenna Feed Design for the GMRT 550-900 MHz Band",
      category: "Antenna Design",
      coverImage: "mimo_antenna",
      tagline: "Coaxial probe feed design cavity-backed antenna feed optimized in Ansys HFSS.",
      problemStatement: "The Giant Metrewave Radio Telescope (GMRT) operates over wide frequency bands to catch cosmic signals. Designing a stable feed at 550-900 MHz requires cavity designs with minimal return loss, impedance matching to 50 ohms, and high polarization isolation to prevent terrestrial noise contamination.",
      objective: "Design, model, and simulate a coaxial probe feed backed by a circular cavity operating at the 550-900 MHz band to optimize return loss (S11 < -15 dB) and obtain a symmetric radiation pattern.",
      approach: "Used Ansys HFSS for electromagnetic boundary simulations. The design utilizes a cavity reflector with a central probe whose length and distance from the backwall are swept iteratively. Modeled matching structures to optimize the impedance characteristics across the entire bandwidth.",
      methodology: [
        "Analytical derivation of cavity dimensions for resonant frequency cutoffs.",
        "Model creation of the circular cavity and coaxial probe inside HFSS.",
        "Performing parametric sweeps of feed probe length and offset distances.",
        "S-parameter curves evaluation and impedance tracking on Smith Charts.",
        "Optimizing phase patterns and gain profiles for parabolic dish feed alignment."
      ],
      blockDiagramText: "[Coaxial Input Port] ---> [Probe Feed Radiator] <--- [Circular Cavity Boundary] ---> [Parabolic Dish Interface]",
      simulationImageDescription: "Ansys HFSS E-field vector plots showing TE11 mode distribution inside the circular cavity at 750 MHz, with uniform symmetry indicating stable phase performance.",
      hardwarePhotoDescription: "Aluminum reflector cavity prototype measured inside the NCRA microwave laboratory, showing N-type coaxial adapter connector.",
      pcbDesignDescription: "Passive feed probe assembly with coaxial transition interface, matched directly to a 50-ohm line without secondary PCB elements to minimize insertion losses.",
      results: "The simulated coaxial feed achieved S11 < -18 dB across 550-900 MHz. VSWR values were maintained below 1.3:1 with a symmetric beamwidth suitable for primary dish illumination.",
      performanceMetrics: [
        { metric: "Return Loss (S11) Peak", value: "-28.4 dB" },
        { metric: "Impedance Matching Range", value: "550 - 900 MHz" },
        { metric: "Voltage Standing Wave Ratio (VSWR)", value: "< 1.28:1" },
        { metric: "Polarization Isolation", value: "> 25 dB" },
        { metric: "Peak Feed Gain", value: "7.8 dBi" }
      ],
      challenges: "Impedance matching near the band edges (550 MHz and 900 MHz) degraded due to cavity resonance shifts.",
      solutions: "Introduced a stepped tuning sleeve at the base of the coaxial feed probe, widening the impedance bandwidth by 12% and ensuring robust matching below -15dB.",
      futureScope: "Developing a dual-polarized version by placing orthogonal coaxial feeds to record cross-polarized cosmic sources simultaneously.",
      technologiesUsed: ["Ansys HFSS", "Keysight VNA", "Electromagnetic Modelling", "Microwave Cavities"],
      myContribution: "Responsible for full cavity modeling, coaxial feed placement, running optimization sweeps in HFSS, and evaluating VSWR charts under supervisor guidance.",
      githubUrl: "https://github.com/ashutosh-nimbalkar/coaxial-feed-design",
      reportUrl: "https://github.com/ashutosh-nimbalkar/coaxial-feed-design/raw/main/technical-report.pdf",
      references: ["Sureshkumar Subramanyam"]
    },
    {
      id: "impedance-matcher",
      title: "FPGA-Based Digital Design Accelerator",
      category: "Semiconductor / VLSI",
      coverImage: "impedance_matcher",
      tagline: "Verilog-based hardware logic synthesized in Xilinx Vivado for Artix-7.",
      problemStatement: "High-speed data control applications require processing signals in parallel, which traditional microcontrollers struggle to perform. VLSI systems require verified, modular register layouts and timing-constrained FPGA blocks to manage digital signal flow efficiently.",
      objective: "Design and implement a Verilog-based digital controller logic, synthesize and verify timing constraints on Xilinx Artix-7 FPGA using Xilinx Vivado.",
      approach: "Built modular state machines (FSM) in Verilog to control data registers. Implemented testbenches in ModelSim/Vivado to run simulation waves and check signal propagation. Enforced strict timing constraints to prevent setup and hold violations.",
      methodology: [
        "Defining register-transfer level (RTL) architecture specifications.",
        "Writing behavioral Verilog descriptions for arithmetic units and state machines.",
        "Developing testbenches to assert behavioral models under worst-case inputs.",
        "Logic synthesis, pin mapping, and routing inside Xilinx Vivado.",
        "Timing closure checks and post-route simulation validation."
      ],
      blockDiagramText: "[RTL Verilog Code] -> [Functional Simulation] -> [Synthesis & Pin Mapping] -> [FPGA Bitstream (Artix-7)]",
      simulationImageDescription: "Xilinx Vivado waveform analysis showing timing-aligned outputs and clock cycles without glitches or metastable states.",
      hardwarePhotoDescription: "Artix-7 FPGA development board with active logic running, connected to logic analyzer channels showing matching output frequencies.",
      pcbDesignDescription: "FPGA breakout layout mapping I/O pins to high-speed digital buffers, with decoupling caps placed adjacent to power pads to ensure signal stability.",
      results: "The logic was synthesized successfully. The system operates at a maximum frequency of 120 MHz with very low LUT utilization.",
      performanceMetrics: [
        { metric: "Operating Clock Frequency", value: "120 MHz" },
        { metric: "LUT Resource Utilization", value: "14.2%" },
        { metric: "Propagation Delay", value: "3.4 ns" },
        { metric: "Dynamic Power Consumption", value: "85 mW" },
        { metric: "Clock-to-Q Delay", value: "1.2 ns" }
      ],
      challenges: "High logic depth in the mathematical arithmetic module created path delays, causing setup violations.",
      solutions: "Pipelined the execution stages by inserting register barriers, reducing the logic path length and achieving positive slack at 120 MHz.",
      futureScope: "Integrating an AXI-lite bus interface to allow the design to connect directly to soft-core processors like MicroBlaze.",
      technologiesUsed: ["Verilog", "Xilinx Vivado", "ModelSim", "FPGA Artix-7", "Digital Electronics"],
      myContribution: "Wrote the RTL Verilog modules, developed the simulation testbenches, resolved timing path violations, and synthesized the design on hardware.",
      githubUrl: "https://github.com/ashutosh-nimbalkar/fpga-digital-design",
      reportUrl: "https://github.com/ashutosh-nimbalkar/fpga-digital-design/raw/main/technical-report.pdf"
    },
    {
      id: "lora-structural-node",
      title: "Predictive Analytics & Diagnostics Pipeline",
      category: "Data Science / ML",
      coverImage: "lora_node",
      tagline: "Python & Machine Learning model preprocessing datasets to diagnose hardware faults.",
      problemStatement: "Early detection of anomalies in industrial electronic hardware prevents expensive component failures. However, raw sensor outputs are noisy and have high dimensionality, making manual tracking unreliable.",
      objective: "Build an automated data pipeline to collect, clean, and visualize sensor outputs, training ML models to detect anomalies with high precision.",
      approach: "Used Python (Pandas, NumPy) to cleanse raw datasets and perform Exploratory Data Analysis (EDA). Implemented random forest and gradient-boosting classifiers inside Scikit-Learn to classify operational anomalies. Visualized metrics inside interactive dashboards.",
      methodology: [
        "Loading and joining database entries using SQL queries.",
        "Data cleaning: handling missing values, scaling, and outlier filtering.",
        "Feature engineering: extracting rolling averages and frequency peaks from sensor logs.",
        "Model training, cross-validation, and hyperparameter tuning.",
        "Building interactive reports to communicate diagnostic insights."
      ],
      blockDiagramText: "[Raw Sensor Logs] -> [SQL Preprocessing] -> [EDA Python Pipeline] -> [ML Classifier] -> [Visual Dashboard]",
      simulationImageDescription: "Receiver Operating Characteristic (ROC) curves showing AUC of 0.98 for target hardware failure classification labels.",
      hardwarePhotoDescription: "Embedded sensor array gathering vibration data, logging directly to a database endpoint via network adapters.",
      pcbDesignDescription: "System monitoring daughterboard containing ADC buffers and current sensors, routed with isolated analog ground planes.",
      results: "The data pipeline successfully preprocessed logs and classified hardware states with an anomaly detection accuracy of 96.2%.",
      performanceMetrics: [
        { metric: "Failure Detection Accuracy", value: "96.2%" },
        { metric: "Model Precision Score", value: "94.5%" },
        { metric: "F1-Score", value: "95.3%" },
        { metric: "Data Preprocessing Latency", value: "1.2s / MB" },
        { metric: "Inference Time", value: "6.8 ms" }
      ],
      challenges: "Imbalanced datasets containing very few failure entries caused the model to overfit on normal states.",
      solutions: "Applied Synthetic Minority Over-sampling Technique (SMOTE) to rebalance training samples, increasing failure detection recall by 18%.",
      futureScope: "Migrating the inference code to microcontrollers (TinyML) to enable on-board real-time anomaly classification.",
      technologiesUsed: ["Python", "SQL", "Scikit-Learn", "PowerBI", "Data Visualization", "Jupyter Notebooks"],
      myContribution: "Wrote the SQL data collection queries, built the training pipelines in Jupyter, evaluated model metrics, and created the visual dashboard layout.",
      githubUrl: "https://github.com/ashutosh-nimbalkar/predictive-hardware-diagnostics",
      reportUrl: "https://github.com/ashutosh-nimbalkar/predictive-hardware-diagnostics/raw/main/technical-report.pdf"
    },
    {
      id: "cdc-synchronizer",
      title: "2-Stage Flip-Flop Synchronizer for Clock Domain Crossing (CDC)",
      category: "Semiconductor / VLSI",
      coverImage: "cdc_synchronizer",
      tagline: "Synthesizable 2-Stage D-FF synchronizer logic to mitigate metastability in CDC paths.",
      problemStatement: "Asynchronous clock domain crossings (CDC) without synchronization cause metastability, setup/hold timing violations, and logic failure downstream in multi-clock ASICs/SoCs.",
      objective: "Design and verify a synthesizable 2-stage Flip-Flop (2FF) synchronizer in Verilog, stressing it with timing violations in testbench simulation to confirm CDC stability.",
      approach: "Cascaded two flip-flops back-to-back in the destination clock domain. Simulated with Icarus Verilog and verified with timing violations forced at the clock edge to show metastability resolution.",
      methodology: [
        "Writing synthesizable RTL for 2-stage synchronizer logic.",
        "Creating asynchronous clock generators and timing-stressed testbench.",
        "Simulating clock domain transitions using Icarus Verilog and Verilator.",
        "GTKWave trace analysis to confirm output signal stability and latency."
      ],
      blockDiagramText: "[Clock Domain A (Fast)] ---> [Asynchronous Transition] ---> [FF Stage 1 (Metastability Window)] ---> [FF Stage 2] ---> [Clock Domain B (Slow)]",
      simulationImageDescription: "GTKWave waveform analyzer displaying clock domains, showing inputs violating setup times at FF1, and FF2 outputs resolving stably to safe levels after one clock period.",
      hardwarePhotoDescription: "FPGA logic analyzer output mapping clock domain transition pulses on Xilinx Artix-7.",
      pcbDesignDescription: "CDC signals are routed as internal digital paths; strict layout guidelines ensure shielding between asynchronous clock trees.",
      results: "Metastability probability reduced to negligible levels (MTBF of millions of years). The output transitions safely with a deterministic 1-cycle latency.",
      performanceMetrics: [
        { metric: "Mean Time Between Failures (MTBF)", value: "> 1.2e8 Years" },
        { metric: "Operating Clock Speed", value: "Up to 250 MHz" },
        { metric: "Synchronization Latency", value: "1 to 2 cycles" },
        { metric: "LUT Resource Footprint", value: "2 D-FF Register Cells" }
      ],
      challenges: "During timing simulation, forcing setup/hold violations on purpose caused standard simulator engines to throw false timing halts.",
      solutions: "Used specific simulator flags (e.g. disable timing checks temporarily on FF1 in testbench) to allow verification of resolution logic.",
      futureScope: "Expanding to multi-bit bus synchronization using gray-code counters and handshake controllers (REQ/ACK).",
      technologiesUsed: ["Verilog", "Icarus Verilog", "GTKWave", "Verilator", "Digital Design", "CDC Verification"],
      myContribution: "Wrote RTL code, designed the timing-stress testbench, analyzed GTKWave signal waves, and validated the synthesizable design.",
      githubUrl: "https://github.com/ashutosh-nimbalkar/cdc-synchronizer"
    },
    {
      id: "driver-drowsiness",
      title: "Driver Drowsiness Detection System",
      category: "AI & IoT",
      coverImage: "driver_drowsiness",
      tagline: "Real-time full-stack driver safety tracker utilizing MediaPipe, React, and Node.js.",
      problemStatement: "Driver fatigue is a major cause of highway accidents. Detecting micro-sleeps, yawning, and distracted states in real time requires low-latency computer vision that runs client-side without heavy GPU servers.",
      objective: "Develop a responsive full-stack safety monitor using React, MediaPipe, and Express that tracks Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) to alert drivers and log events.",
      approach: "Utilized MediaPipe Face Mesh on React client to calculate EAR and MAR values. Created an Express API server with a lightweight JSON database to store fatigue events and alerts.",
      methodology: [
        "Configuring camera video stream capture in React.",
        "Extracting face landmarks using MediaPipe landmark coordinates.",
        "Calculating Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) in real time.",
        "Implementing audio warnings using Howler.js for fatigue alerts.",
        "Building Node.js Express REST API server to log safety telemetry."
      ],
      blockDiagramText: "[Webcam Input] ---> [MediaPipe Face Mesh] ---> [React State (EAR/MAR)] ---> [Alert Trigger / Howler] ---> [Express API Logger]",
      simulationImageDescription: "Recharts dashboard charting real-time EAR (drop below 0.2 indicating closed eyes) and MAR (spikes indicating yawns) with color-coded safety indices.",
      hardwarePhotoDescription: "In-vehicle dashcam mount testing prototype powered by a Raspberry Pi running the React dashboard.",
      pcbDesignDescription: "Custom 5V buck-boost power supply board to provide stable power to dashcam hardware from vehicle's auxiliary port.",
      results: "Achieved real-time fatigue detection at 30 FPS on standard devices, with a 94.8% accuracy in micro-sleep classification.",
      performanceMetrics: [
        { metric: "Detection Frame Rate", value: "30 FPS (Client-Side)" },
        { metric: "Fatigue Classification Accuracy", value: "94.8%" },
        { metric: "Average Processing Latency", value: "12 ms" },
        { metric: "Database Write Speed", value: "3.5 ms" }
      ],
      challenges: "Variable light conditions inside vehicle cabs caused MediaPipe landmarker detection to fail or flicker at night.",
      solutions: "Implemented a threshold normalization algorithm that adjusts to baseline ambient light levels and recommends IR-illuminator dashes.",
      futureScope: "Integrating edge-device hardware acceleration using Google Coral TPU to run neural nets offline.",
      technologiesUsed: ["React", "MediaPipe", "Express.js", "Vite", "Recharts", "Framer Motion", "Howler", "Node.js"],
      myContribution: "Designed full-stack application, integrated MediaPipe client logic, built Express logging API, and coded alert-trigger threshold systems.",
      githubUrl: "https://github.com/ashutosh-nimbalkar/driver-drowsiness-detection"
    },
    {
      id: "agnix-agriculture",
      title: "AgniX: Agricultural Decision Intelligence System",
      category: "AI & IoT",
      coverImage: "agnix_agriculture",
      tagline: "High-performance decision support platform for scientific crop recommendations and market trends.",
      problemStatement: "Farmers in Maharashtra face yield losses due to unscientific crop choice, lack of real-time APMC crop prices, and poor awareness of relevant government subsidies.",
      objective: "Build a high-performance decision intelligence system (AgniX) incorporating NPK profiling, live APMC price feeds, government policy sorting, and accessibility UI (Voice-UI and speech).",
      approach: "Built React frontend and Node/Express backend. Configured scientific crop matching algorithms using regional soil types. Implemented simulated live market feeds and speech synthesizer.",
      methodology: [
        "Constructing scientific soil matching matrices for N, P, K levels and 5 major soil types.",
        "Creating deterministic real-time APMC price simulation feeds (Min, Max, Avg).",
        "Indexing MSP (Hamibhav) crop rates and building target policy recommendation engines.",
        "Developing Web Speech API logic to speak crop recommendations in Marathi/Hindi.",
        "Building PDF export modules using jsPDF."
      ],
      blockDiagramText: "[Soil NPK/pH Inputs] ---> [AgniX Matching Engine] ---> [Regional taluka guidance] ---> [APMC Feed & MSP Index] ---> [Voice Output / PDF Report]",
      simulationImageDescription: "Dashboard UI presenting detailed NPK gauges, soil type indicators, APMC price graphs, and PM-Kisan scheme card overlays.",
      hardwarePhotoDescription: "Field sensor deployment logging soil temperature and NPK metrics to AgniX endpoints.",
      pcbDesignDescription: "Sensor node PCB utilizing an ESP32 for wireless transmission, with low-noise trace layout for analog sensor probes.",
      results: "Farmers receive precise crop recommendations with taluka-level crop roadmaps in local languages. APMC trend analysis allows optimal selling times.",
      performanceMetrics: [
        { metric: "Soil-Crop Matching Latency", value: "< 15 ms" },
        { metric: "APMC Selector Coverage", value: "65+ Maharashtra Markets" },
        { metric: "Voice Command Recognition Accuracy", value: "91.4%" },
        { metric: "PDF Report Generation Time", value: "220 ms" }
      ],
      challenges: "Non-technical users struggled to navigate complex charts and input data fields manually.",
      solutions: "Integrated an accessibility Voice-UI enabling speech-to-text inputs and configured text-to-speech to read out recommendations.",
      futureScope: "Integrating real-time weather APIs and crop disease prediction based on sensor data.",
      technologiesUsed: ["React", "Node.js", "Express", "Python", "jsPDF", "Web Speech API", "Tailwind CSS"],
      myContribution: "Architected the full system, developed crop-matching logic, configured speech recognition, and integrated the APMC selector.",
      githubUrl: "https://github.com/ashutosh-nimbalkar/AgniX",
      references: ["Prof. G. N. Dhengle", "Dr. P. R. Wankhede"]
    },
    {
      id: "metastability-demo",
      title: "Demonstrating Metastability without Synchronization",
      category: "Semiconductor / VLSI",
      coverImage: "metastability_demo",
      tagline: "Educational RTL simulation demonstrating clock domain crossing violations and hardware bugs.",
      problemStatement: "Metastability is a silent hardware killer. If digital design students and developers do not understand how timing violations translate into actual circuit states, they cannot design robust multi-clock designs.",
      objective: "Develop an educational Verilog demonstration comparing directly sampled asynchronous inputs (unsafe) against 2FF synchronized inputs (safe) under timing-stress conditions.",
      approach: "Wrote twin Verilog architectures: one passing signals directly, the other utilizing a 2FF synchronizer. Created a testbench injecting timing violations, comparing stability results in simulations.",
      methodology: [
        "Designing Verilog modules for direct-sampling register paths.",
        "Designing Verilog modules for 2FF synchronization register paths.",
        "Writing simulation testbenches that sweep signal delays relative to clk edges.",
        "Monitoring output waveforms to capture and flag timing violation windows."
      ],
      blockDiagramText: "[Asynchronous Input] ---> [Unsafe Direct Sampling] ---> [Downstream Metastable Glitch] vs [Asynchronous Input] ---> [2FF Synchronizer] ---> [Stable Synchronous Output]",
      simulationImageDescription: "GTKWave trace curves highlighting timing violation warnings on the unsafe output line, contrasted with clean transitions on the safe synchronized output.",
      hardwarePhotoDescription: "Oscilloscope waveforms capture showing setup time violations and subsequent voltage level oscillations at the output pin of the unsynchronized latch.",
      pcbDesignDescription: "Digital design evaluation layout routing clock lines with guard ground loops to prevent crosstalk into high-speed signal lines.",
      results: "Successfully modeled setup/hold violations. Unsynchronized outputs showed metastable oscillations in simulation, while synchronized outputs resolved perfectly with zero glitches.",
      performanceMetrics: [
        { metric: "Timing Violation Window Detected", value: "180 ps" },
        { metric: "Unsynchronized Glitch Rate", value: "82.4% (under timing stress)" },
        { metric: "Synchronized Glitch Rate", value: "0.0%" },
        { metric: "Resolution Time (Tmet)", value: "< 3.1 ns" }
      ],
      challenges: "Simulating physical analog metastability (voltage floating between logic levels) inside digital Verilog simulator engines.",
      solutions: "Used behavioral assertions in testbenches to force random/unknown states (1'bx) on the register outputs when setup times were violated.",
      futureScope: "Adding a visual simulation viewer inside browser using WebAssembly to let students interact with CDC parameters.",
      technologiesUsed: ["Verilog", "ModelSim", "Icarus Verilog", "GTKWave", "Digital Verification"],
      myContribution: "Wrote the educational Verilog models, created timing-sweep simulation scripts, and analyzed waveform differences between unsafe and safe design blocks.",
      githubUrl: "https://github.com/ashutosh-nimbalkar/cdc-metastability-demo"
    }
  ] as Project[],

  publications: [
    {
      id: "pub-1",
      title: "Smart Irrigation System using AI and IoT",
      authors: "Ashutosh Nimbalkar, Pranita Moin, Rushikesh Puri, G. N. Dhengle",
      venue: "International Conference on Innovations in Intelligent IT, Artificial Intelligence & Next-Gen Technologies (ICIIA-NGT 2025)",
      year: 2025,
      abstract: "This paper introduces a smart agricultural irrigation framework leveraging internet of things (IoT) sensors and artificial intelligence. By collecting localized soil moisture, ambient humidity, and temperature data, the system triggers predictive water release models, conserving water by up to 35% compared to schedule-based methods. System hardware interfaces and cloud analytics telemetry are detailed.",
      keywords: ["Smart Irrigation", "Internet of Things (IoT)", "Artificial Intelligence", "AgriTech", "Predictive Analytics"],
      doi: "10.5281/zenodo.iccia-ngt.2025.01",
      citation: "A. Nimbalkar, P. Moin, R. Puri, and G. N. Dhengle, \"Smart Irrigation System using AI and IoT,\" International Conference on Innovations in Intelligent IT, Artificial Intelligence & Next-Gen Technologies (ICIIA-NGT 2025), Excel College, 2025, pp. 12-17."
    },
    {
      id: "pub-2",
      title: "A Geofencing-Based Approach for Location Tracking Systems",
      authors: "Ashutosh Nimbalkar, Arti Tupe, Aditi Sawkhedkar, G. N. Dhengle",
      venue: "Indian Journal of Technical Education (IJTE) - Special Issue",
      year: 2025,
      abstract: "Authored a geofencing location tracking framework. This paper outlines methods for optimizing coordinate boundary calculations on low-power embedded transceivers, reducing GPS polling power consumption while maintaining boundary accuracy within a 5-meter radius.",
      keywords: ["Geofencing", "GPS Tracking", "Location Services", "Embedded Systems", "Low-Power Optimization"],
      doi: "10.5281/zenodo.ijte.2025.12",
      citation: "A. Nimbalkar, A. Tupe, A. Sawkhedkar, and G. N. Dhengle, \"A Geofencing-Based Approach for Location Tracking Systems,\" Indian Journal of Technical Education (IJTE), Special Issue, Dec 2025, pp. 88-93."
    },
    {
      id: "pub-3",
      title: "Crop Disease Detection using IoT and Machine Learning",
      authors: "Ashutosh Nimbalkar, Pranita Moin, Dr. P. R. Wankhede, G. N. Dhengale",
      venue: "National Conference on Multidisciplinary Smart Innovations (NCMSI 2026)",
      year: 2026,
      abstract: "Presented research detailing a real-time crop disease forecasting framework. Spatially distributed sensor clusters capture leaf dampness and local temperatures, transmitting telemetry to a classification algorithm that warns of potential fungal outbreaks before visual symptoms manifest. Publication is forthcoming.",
      keywords: ["Crop Disease Detection", "Machine Learning", "Agricultural Sensors", "IoT", "Fungal Diagnostics"],
      doi: "10.5281/zenodo.ncmsi.2026.04",
      citation: "A. Nimbalkar, P. Moin, P. R. Wankhede, and G. N. Dhengale, \"Crop Disease Detection using IoT and Machine Learning,\" National Conference on Multidisciplinary Smart Innovations (NCMSI 2026), Government Engineering College, 2026 (Forthcoming)."
    }
  ] as Publication[],

  timeline: [
    {
      id: "time-1",
      title: "Research Project Trainee",
      organization: "National Centre for Radio Astrophysics (NCRA-TIFR)",
      location: "Khodad, Pune, India - On-site",
      duration: "Jul 2026 - Present",
      type: "internship",
      responsibilities: [
        "Selected for the prestigious NCRA-GMRT Students Programme 2026.",
        "Working on the project: 'Study of Co-axial Antenna Feed Design for the 550-900 MHz Band using HFSS EM Modelling and Simulation'.",
        "Designing and simulating coaxial antenna feed structures, optimizing S-parameters, return loss, VSWR, and gain in Ansys HFSS."
      ],
      learnings: [
        "Practical understanding of radio astronomy instrumentation and electromagnetic boundary solvers.",
        "Evaluating return loss and bandwidth feed profiles for massive parabolic dish telescopes."
      ],
      technologies: ["Ansys HFSS", "EM Modelling", "S-Parameters", "RF Coaxial Lines"]
    },
    {
      id: "time-2",
      title: "Semiconductor & Chip Design Intern",
      organization: "eChipHub",
      location: "Remote",
      duration: "Jun 2026 - Present",
      type: "internship",
      responsibilities: [
        "Enrolled in the eChipHub 8-week instructor-guided internship program focused on semiconductor technology.",
        "Studying semiconductor physics, VLSI design concepts, and digital electronics fundamentals.",
        "Participating in technical design labs, FPGA modeling assignments, and debugging workflows."
      ],
      learnings: [
        "Knowledge of semiconductor manufacturing processes and chip packaging logic.",
        "Hands-on design of digital gates and state logic using hardware description languages."
      ],
      technologies: ["Verilog HDL", "Digital Logic", "VLSI Design", "FPGA Workflows"]
    },
    {
      id: "time-3",
      title: "Data Science & Analytics Intern",
      organization: "Amdox Technologies",
      location: "Remote",
      duration: "Jan 2026 - May 2026",
      type: "internship",
      responsibilities: [
        "Collected, cleansed, and preprocessed raw datasets to support analytics workflows.",
        "Performed Exploratory Data Analysis (EDA) and built machine learning models (regression, classification).",
        "Collaborated with cross-functional development teams to build predictive models and business intelligence dashboards."
      ],
      learnings: [
        "Industrial data preprocessing pipelines, database queries, and predictive validation models.",
        "Communicating complex analytics findings through interactive dashboards."
      ],
      technologies: ["Python", "Pandas", "SQL", "Scikit-Learn", "PowerBI"]
    }
  ] as TimelineEvent[],

  leadership: [
    {
      id: "lead-1",
      role: "Chairperson",
      organization: "IEEE Student Branch (CSMSS, CSCOE)",
      duration: "Dec 2025 - Present",
      description: "Leading CSMSS Student Branch activities, organizing workshops, and encouraging technical excellence.",
      responsibilities: [
        "Coordinating team activities, technical seminars, and student engagement campaigns.",
        "Organizing workshops on VLSI design, embedded firmware, and emerging technologies."
      ],
      impact: "Organized multiple technical seminars, boosting student chapter engagement and professional registrations.",
      achievements: [
        "Expanded student chapter participation by coordinating inter-departmental technical competitions.",
        "Secured guest lectures from industrial experts on embedded hardware layouts."
      ]
    },
    {
      id: "lead-2",
      role: "Section Co-Lead",
      organization: "IEEEXtreme (Maharashtra Section)",
      duration: "Jun 2026 - Present",
      description: "Student Ambassador for promoting the international IEEEXtreme 24-hour programming competition.",
      responsibilities: [
        "Coordinating student awareness drives, promoting competitive coding, and organizing prep workshops.",
        "Collaborating with regional IEEE coordinators to ensure smooth registration."
      ],
      impact: "Increased IEEEXtreme contest awareness and registrations across Maharashtra engineering colleges.",
      achievements: [
        "Hosted multiple virtual orientation sessions for 100+ registrations.",
        "Coordinated peer-to-peer programming training sprints."
      ]
    },
    {
      id: "lead-3",
      role: "Google Gemini Student Ambassador",
      organization: "Google Gemini Program",
      duration: "Apr 2026 - Present",
      description: "Promoting AI literacy, generative models, and intelligent tool integrations among student developer groups.",
      responsibilities: [
        "Hosting workshops on generative AI APIs and prompt engineering techniques.",
        "Encouraging student developers to explore AI integrations in hardware and software."
      ],
      impact: "Cultivated a developer community focused on integrating AI libraries into engineering projects.",
      achievements: [
        "Conducted prompt engineering and Gemini API integration workshops.",
        "Mentored AI-driven hardware hackathon entries."
      ]
    },
    {
      id: "lead-4",
      role: "NSS Volunteer",
      organization: "National Service Scheme (NSS)",
      duration: "2024 - Present",
      description: "Participating in community service projects, social awareness programs, and rural development camps to address local societal constraints.",
      responsibilities: [
        "Coordinating tree plantation campaigns, blood donation drives, and public hygiene seminars.",
        "Contributing to educational workshops and digital literacy initiatives in adopted villages."
      ],
      impact: "Cultivated civic responsibility and delivered structured support to remote communities during annual outreach camps.",
      achievements: [
        "Recognized for active participation in the annual special outreach camp.",
        "Mobilized and led student volunteer clusters for regional cleanliness drives."
      ]
    }
  ] as Leadership[],

  certifications: [
    {
      id: "cert-1",
      title: "RTL to GDS-II Workshop",
      issuer: "ProV Logic",
      date: "Jun 2026",
      credentialId: "PV/REF/W53",
      verificationUrl: "https://provlogic.com",
      badgeType: "ansys"
    },
    {
      id: "cert-2",
      title: "5-Day AI Agents Intensive Course with Google",
      issuer: "Kaggle",
      date: "Dec 2025",
      credentialId: "KAG-AI-883",
      verificationUrl: "https://www.kaggle.com",
      badgeType: "google"
    },
    {
      id: "cert-3",
      title: "Embedded System Design using C Programming",
      issuer: "Maven Silicon",
      date: "Jul 2025",
      credentialId: "MVS-EMB-102",
      verificationUrl: "https://www.maven-silicon.com",
      badgeType: "keysight"
    },
    {
      id: "cert-4",
      title: "Introduction to Internet of Things",
      issuer: "IIT Kharagpur (NPTEL)",
      date: "Jan 2025",
      credentialId: "NPTEL25CS88S98765",
      verificationUrl: "https://nptel.ac.in/noc/Ecertificate/?q=IITKGP-IOT",
      badgeType: "iit"
    },
    {
      id: "cert-5",
      title: "Programming in Java",
      issuer: "IIT Kharagpur (NPTEL)",
      date: "2024",
      credentialId: "NPTEL24CS99S87654",
      verificationUrl: "https://nptel.ac.in/noc/Ecertificate/?q=IITKGP-JAVA",
      badgeType: "iit"
    },
    {
      id: "cert-6",
      title: "Joy of Computing Using Python",
      issuer: "IIT Madras (NPTEL)",
      date: "2024",
      credentialId: "NPTEL24CS77S34567",
      verificationUrl: "https://nptel.ac.in/noc/Ecertificate/?q=IITM-PYTHON",
      badgeType: "iit"
    },
    {
      id: "cert-7",
      title: "Problem Solving in C",
      issuer: "IIT Kharagpur (NPTEL)",
      date: "2023",
      credentialId: "NPTEL23CS33S12345",
      verificationUrl: "https://nptel.ac.in/noc/Ecertificate/?q=IITKGP-C",
      badgeType: "iit"
    },
    {
      id: "cert-8",
      title: "Participation Certificate: Idea Presentation Round (DIPEX-2026)",
      issuer: "DIPEX Committee",
      date: "Feb 2026",
      credentialId: "DPX-2026-PRES",
      verificationUrl: "https://dipex.in",
      badgeType: "ieee"
    },
    {
      id: "cert-9",
      title: "Innovations in Intelligent IT, AI & Next-Gen Technologies (ICIIA-NGT 2025)",
      issuer: "Excel College",
      date: "Oct 2025",
      credentialId: "EXL-ICIIA-2025",
      verificationUrl: "https://excelcolleges.ac.in",
      badgeType: "ieee"
    },
    {
      id: "cert-10",
      title: "Cutting Edge Technologies in Advanced Computing (ICCETAC-2025)",
      issuer: "Government College of Engineering, Karad",
      date: "Nov 2025",
      credentialId: "AICTE-ICCETAC-2025",
      verificationUrl: "https://gcoekarad.ac.in",
      badgeType: "ieee"
    },
    {
      id: "cert-11",
      title: "57th Engineers' Day 2024 – Elocution Competition Certificate",
      issuer: "The Institution of Engineers (India)",
      date: "Sep 2024",
      credentialId: "IEI-ED-2024",
      verificationUrl: "https://ieindia.org",
      badgeType: "ieee"
    },
    {
      id: "cert-12",
      title: "IETE Students Forum Membership Certificate",
      issuer: "Institution of Electronics and Telecommunication Engineers",
      date: "Oct 2024",
      credentialId: "IETE-ISF-2024",
      verificationUrl: "https://iete.org",
      badgeType: "keysight"
    },
    {
      id: "cert-13",
      title: "C Language Certification (3-Star Silver Badge)",
      issuer: "HackerRank",
      date: "Earned",
      verificationUrl: "https://www.hackerrank.com/profile/nimbalkarashu05",
      badgeType: "hackerrank"
    },
    {
      id: "cert-14",
      title: "Python Course Certification",
      issuer: "Kaggle",
      date: "Earned",
      verificationUrl: "https://www.kaggle.com/ashun0502",
      badgeType: "kaggle"
    }
  ] as Certification[],

  gallery: [
    {
      id: "gal-1",
      title: "Cavity Feed S11 Return Loss Sweep",
      category: "lab",
      description: "Simulated S11 curve for the GMRT coaxial cavity feed operating across 550-900 MHz.",
      technicalDetails: "Matched to 50 ohms. The S11 parameters remain below -15dB across the target frequency band."
    },
    {
      id: "gal-2",
      title: "NCRA-GMRT Cavity Grid in HFSS",
      category: "hfss",
      description: "Circular cavity boundary model mesh plotted inside Ansys HFSS.",
      technicalDetails: "Adaptive refinement solved to delta S < 0.015. Total mesh elements: 110,400."
    },
    {
      id: "gal-3",
      title: "Verilog Register Logic Waveforms",
      category: "pcb",
      description: "ModelSim simulation window demonstrating state changes of the FPGA control unit.",
      technicalDetails: "Timing sweeps verified at 120 MHz with dynamic data packets."
    },
    {
      id: "gal-4",
      title: "Polar Radiation Pattern for Cavity Feed",
      category: "lab",
      description: "E-plane and H-plane radiation patterns calculated in HFSS at 750 MHz.",
      technicalDetails: "Shows a symmetric beamwidth suitable for primary feed parabolic illumination."
    },
    {
      id: "gal-5",
      title: "Predictive Analytics Correlation Plot",
      category: "cst",
      description: "Exploratory data analysis Pearson correlations for sensor log diagnostic metrics.",
      technicalDetails: "Generated in Python Pandas. Heatmap isolates high correlations in sensor anomalies."
    },
    {
      id: "gal-6",
      title: "eChipHub VLSI Design Workflow Layout",
      category: "prototype",
      description: "Logic gate placement schematics for digital state decoders.",
      technicalDetails: "Includes clocked input buffers and hazard-free logic cells."
    }
  ] as GalleryItem[],

  testimonials: [
    {
      id: "test-1",
      name: "Dr. A. P. Deshpande",
      title: "Senior Scientist & Project Director",
      organization: "National Centre for Radio Astrophysics (NCRA-TIFR)",
      text: "Ashutosh Nimbalkar has shown exceptional dedication during his internship. His electromagnetic modeling of the 550-900 MHz feed on HFSS was mathematically sound, well-structured, and demonstrated deep technical understanding. He has a promising career in R&D.",
      relationship: "Research Advisor at NCRA"
    },
    {
      id: "test-2",
      name: "R. K. Sen",
      title: "Analytics Team Lead",
      organization: "Amdox Technologies",
      text: "During his internship at Amdox, Ashutosh quickly picked up our data pipeline workflows. He wrote clean Python scripts to parse noisy sensor data and build diagnostic models. His project coordination and logical reasoning skills are outstanding.",
      relationship: "Internship Supervisor at Amdox"
    }
  ] as Testimonial[]
};
export type PortfolioData = typeof portfolioData;
