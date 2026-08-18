export const projects = [
  {
    id: "apple-intelligence-center",
    number: "01",
    title: "Apple Product Intelligence Center",
    tagline: "Analytics + ML pricing, in one dashboard.",
    description:
      "An AI-powered Apple product analytics platform combining interactive data visualization, machine learning price prediction and intelligent product insights.",
    tech: ["Python", "Streamlit", "Pandas", "Scikit-learn", "XGBoost", "Plotly", "Jupyter notebook", "Generative AI", "RAG based AI Assistence"],
    github: "https://github.com/Chirayu0703/Apple-Product-Intelligence-Center",
    demo: "https://apple-price-intelligence.streamlit.app/",
    detail: {
      problem:
        "Apple's product catalog spans years of releases with scattered specs and pricing data, making it hard to compare products or predict fair pricing for new configurations.",
      solution:
        "Built a Streamlit application that consolidates product data into a single interactive workspace, with a trained regression model that predicts price from device specifications.",
      architecture: [
        "Data ingestion & cleaning pipeline (Pandas / NumPy)",
        "Feature engineering on product specs and categories",
        "XGBoost regression model for price prediction",
        "Plotly dashboards for interactive exploration",
        "Generative AI layer for natural-language product summaries",
      ],
      features: [
        "Interactive filtering across product lines and specs",
        "ML-driven price prediction with confidence range",
        "Auto-generated product insight summaries",
        "Exportable visual reports",
      ],
      results:
        "Delivered a working end-to-end analytics tool that turns raw product data into pricing intelligence and shareable visual insight.",
    },
  },
  {
    id: "apple-rag-chatbot",
    number: "02",
    title: "Apple Product RAG Chatbot",
    tagline: "Ask a question, get a grounded answer.",
    description:
      "An AI-powered RAG chatbot that retrieves relevant product information from a vector database and generates contextual answers using an LLM.",
    tech: ["Python", "LangChain", "Qdrant", "Hugging Face", "Embeddings", "Gemini", "RAG"],
    github: "https://github.com/Chirayu0703",
    demo: "",
    isRag: true,
    detail: {
      problem:
        "Static product documentation is slow to search and doesn't answer specific, conversational questions about Apple products.",
      solution:
        "Built a retrieval-augmented generation pipeline: product data is embedded and stored in a vector database, and a chatbot retrieves the most relevant chunks before generating a grounded answer.",
      architecture: [
        "Document chunking and embedding generation (Hugging Face models)",
        "Vector storage and similarity search (Qdrant)",
        "LangChain orchestration for retrieval + prompting",
        "Gemini LLM for final answer generation",
      ],
      features: [
        "Context-grounded answers with source retrieval",
        "Low-latency vector similarity search",
        "Conversational follow-up handling",
      ],
      results:
        "Produced accurate, context-aware answers to product questions, reducing reliance on manual documentation search.",
    },
  },
  {
    id: "youtube-performance-analysis",
    number: "03",
    title: "YouTube Channel Performance Analysis",
    tagline: "What actually drives engagement?",
    description:
      "Analyzed YouTube channel performance using data cleaning, EDA, feature engineering and machine learning to identify engagement and revenue drivers.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "Matplotlib"],
    github: "https://github.com/Chirayu0703",
    demo: "",
    detail: {
      problem:
        "Channel growth metrics were scattered across exports with no clear view of which factors actually moved engagement and revenue.",
      solution:
        "Cleaned and consolidated raw channel data, ran exploratory analysis to surface patterns, then trained a Random Forest model to rank the drivers of engagement.",
      architecture: [
        "Data cleaning and consolidation pipeline",
        "Exploratory data analysis with Matplotlib visualizations",
        "Feature engineering on watch-time and engagement metrics",
        "Random Forest model for feature importance ranking",
      ],
      features: [
        "Engagement driver ranking",
        "Trend visualizations across upload history",
        "Revenue correlation analysis",
      ],
      results:
        "Identified the strongest predictors of video performance, turning raw exports into a clear set of actionable insights.",
    },
  },
  {
    id: "financial-performance-dashboard",
    number: "04",
    title: "Financial Performance Dashboard",
    tagline: "KPIs, trends and DAX, in one view.",
    description:
      "Interactive Power BI dashboard designed to analyze financial performance, trends and business KPIs.",
    tech: ["Power BI", "Excel", "Data Analytics", "DAX", "Data Visualization"],
    github: "https://github.com/Chirayu0703",
    demo: "",
    detail: {
      problem:
        "Financial reports were spread across static spreadsheets, making trend analysis and KPI tracking slow and error-prone.",
      solution:
        "Modeled the financial dataset in Power BI with DAX measures, then built an interactive dashboard for drilling into trends and KPIs by period and category.",
      architecture: [
        "Data modeling and relationships in Power BI",
        "DAX measures for KPI calculations",
        "Interactive filtering and drill-through pages",
      ],
      features: [
        "Real-time KPI tracking",
        "Trend breakdowns by category and period",
        "Drill-through detail views",
      ],
      results:
        "Replaced static spreadsheet reporting with a single interactive dashboard for faster financial decision-making.",
    },
  },
];
