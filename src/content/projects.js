export const projects = [
  {
    title: "PowerEar",
    status: "Published",
    summary:
      "An acoustic eavesdropping attack that leverages the USB power side channel to reconstruct any audio played by a mobile device's loudspeaker. Uses signal processing and generative techniques to map power consumption to audio playback, enabling unconstrained-vocabulary speech recovery in realistic settings.",
    tags: ["Acoustic Eavesdropping", "Power Side-Channel", "Mobile Privacy", "Spectrogram Enhancement"],
    links: [
      { label: "Project Page", href: "https://powerear.spolaor.com" },
      { label: "Paper", href: "https://ieeexplore.ieee.org/document/11303333" }
    ]
  },
  {
    title: "CovertPower",
    status: "Published",
    summary:
      "A covert channel attack that exfiltrates data from Android devices by modulating power consumption via the USB power line. Achieves up to 10 bps with high bit-sequence similarity across 14 devices.",
    tags: ["Android Security", "Side-Channel", "Covert Channel", "Power Analysis"],
    links: [
      { label: "Paper", href: "https://doi.org/10.1109/TDSC.2025.3556468" }
    ]
  },
  {
    title: "AccEar",
    status: "Published",
    summary:
      "An accelerometer-based acoustic eavesdropping attack that reconstructs arbitrary audio from a smartphone's loudspeaker using a conditional Generative Adversarial Network (cGAN), without prior vocabulary constraints.",
    tags: ["Acoustic Eavesdropping", "Sensor Security", "GAN", "Mobile Privacy"],
    links: [
      { label: "Paper", href: "https://arxiv.org/html/2212.01042v1" }
    ]
  },
  {
    title: "mmEcho",
    status: "Published",
    summary:
      "A mmWave-based acoustic eavesdropping system that reconstructs audio from micrometer-level vibrations on surrounding objects, penetrating sound-insulating materials without prior knowledge of the victim.",
    tags: ["mmWave", "Acoustic Eavesdropping", "Signal Processing", "Privacy"],
    links: [
      { label: "Paper", href: "https://dlnext.acm.org/doi/epdf/10.1145/3603165.3607440" }
    ]
  },
  {
    title: "PowerID (Plug and Power)",
    status: "Published",
    summary:
      "A method to fingerprint USB peripherals (type, model, activity, identity) based on their power consumption traces, evaluated on 82 devices across 35 models and 8 types.",
    tags: ["USB Security", "Power Side-Channel", "Hardware Fingerprinting"],
    links: [
      { label: "Paper", href: "https://doi.org/10.1109/INFOCOM53939.2023.10229048" }
    ]
  },
  {
    title: "DELTA: Data Extraction and Logging Tool for Android",
    status: "Open Source",
    summary:
      "A modular, research-focused Android logging tool with fine-grained tuning, extensibility, and a low performance/battery impact. Published in IEEE Transactions on Mobile Computing.",
    tags: ["Android", "Logging", "Research Tool", "Open Source"],
    links: [
      { label: "Code", href: "https://github.com/tarockx/DELTA" }
    ]
  },
];
