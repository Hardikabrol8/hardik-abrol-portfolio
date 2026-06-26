export const projects = [
  {
    id: "mental-health-predictor",
    title: "Mental Health Predictor App",
    tagline:
      "Interpretable ML system that flags individuals who may need clinical mental health support.",
    description:
      "An interactive Streamlit dashboard that explores mental health trends in the tech industry and uses a CatBoost classifier to predict whether an individual might benefit from mental health support — built to surface insight, not just a verdict.",
    overview:
      "Built on the Mental Health in Tech Survey dataset, the app pairs an exploratory data dashboard with a quiz-style predictor. Every prediction ships with a SHAP-driven explanation, so the 'why' behind the model's call is never a black box — a deliberate choice given how sensitive this domain is to trust.",
    features: [
      "EDA dashboard with demographic and mental-health visualizations",
      "Quiz-based treatment predictor powered by CatBoost",
      "SHAP-based feature importance for full model transparency",
      "Responsive Streamlit UI with custom theming",
    ],
    challenges:
      "High-dimensional, mostly categorical survey data made naive encoding noisy. Solved it with Cramér's V correlation analysis for feature selection and Chi-square tests to confirm which categorical variables were actually statistically significant — keeping the model lean and the explanations honest.",
    tech: ["Python", "CatBoost", "Scikit-learn", "Streamlit", "SHAP", "Pandas"],
    metrics: [
      { label: "F1-score", value: "0.74" },
      { label: "Recall (needs treatment)", value: "0.83" },
      { label: "Live test users served", value: "200+" },
    ],
    githubUrl: "https://github.com/Hardikabrol8/Mental_Health_Predictor",
    liveUrl: "https://mental-health-predictor-app-n1lays1ngh.streamlit.app/",
    source: "resume + github",
    featured: true,
  },
  {
    id: "bike-rental-system",
    title: "Bike Rental System",
    tagline: "A normalized relational database engineered for real-time shared-mobility operations.",
    description:
      "A DBMS capstone project that designs the full data backbone for a shared-bike service — users, inventory, multi-location bookings, and billing — with the logic to keep it consistent under concurrent load.",
    overview:
      "Rather than treating the database as an afterthought, this project starts from the ER model: six core entities (User, Admin, Bike, Location, Booking, Payment) normalized to BCNF, then wraps that schema in PL/SQL automation so the database enforces its own business rules instead of relying on the application layer.",
    features: [
      "Normalized schema (optimized to BCNF) across 10+ entities",
      "PL/SQL triggers for real-time cost calculation and stock updates",
      "Concurrency control to prevent double-booking during peak hours",
      "Modular stored procedures for booking, cancellation & availability checks",
    ],
    challenges:
      "Peak-hour double-booking was the central risk in a rental system — two users reserving the same bike in the same instant. Addressed with row-level locking patterns inside the booking stored procedure and triggers that update availability the moment a transaction commits, not after.",
    tech: ["MySQL", "SQL", "PL/SQL", "Database Design", "ER Modeling"],
    metrics: [
      { label: "Entities modeled", value: "10+" },
      { label: "Normal form", value: "BCNF" },
    ],
    githubUrl: "https://github.com/Hardikabrol8/Bike_Rental_System",
    liveUrl: null,
    source: "resume + github",
    featured: true,
  },
  {
    id: "topsis",
    title: "TOPSIS Decision-Ranking Toolkit",
    tagline: "A CLI, a published PyPI package, and a hosted web service for multi-criteria decision analysis.",
    description:
      "A three-part implementation of TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution) — taken from a classroom assignment all the way to a real, installable Python package and a live web tool that emails results back to users.",
    overview:
      "Most TOPSIS assignments stop at a script. This one ships in three layers: a command-line tool for direct use, a distributable PyPI package (`Topsis-Hardik-102303945`) so anyone can `pip install` the algorithm, and a Flask web service where users upload a CSV, set weights and impacts, and get ranked results delivered to their inbox.",
    features: [
      "CLI tool: normalization → weighting → ideal best/worst → ranked score",
      "Published, pip-installable Python package on PyPI",
      "Flask web service with CSV upload and email delivery of results",
      "Deployed and live on Vercel",
    ],
    challenges:
      "Packaging the same core logic for three very different consumption modes (terminal, library import, web request) meant isolating the TOPSIS math from all I/O concerns early, so the CLI, the package, and the web service could each wrap it differently without duplicating the algorithm.",
    tech: ["Python", "Pandas", "NumPy", "Flask", "SMTP", "Vercel"],
    metrics: [
      { label: "Distribution channels", value: "3" },
      { label: "PyPI package", value: "Published" },
    ],
    githubUrl: "https://github.com/Hardikabrol8/Topsis",
    liveUrl: "https://topsis-khaki.vercel.app/",
    pypiUrl: "https://pypi.org/project/Topsis-Hardik-102303945/",
    source: "github only",
    featured: false,
  },
];
