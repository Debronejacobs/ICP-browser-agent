<div align="center">

# AIbrowser: Autonomous AI Agents for the Web, Supercharged by ICP

**Your personal team of AI agents that browse, research, and automate tasks on the web, with all your data and session history secured on the decentralized Internet Computer.**

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/Debronejacobs/ICP-browser-agent)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Project Status](https://img.shields.io/badge/status-in_development-orange)](https://github.com/Debronejacobs/ICP-browser-agent/issues)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Debronejacobs/ICP-browser-agent/pulls)

</div>

This project enhances the open-source **AIbrowser** with **Internet Computer (ICP)** integration, transforming a powerful browser automation tool into a persistent, private, and truly autonomous agentic system.

<br>

<div align="center">
<img src="https://github.com/user-attachments/assets/112c4385-7b03-4b81-a352-4f348093351b" width="600" alt="AIbrowser Demo GIF" />
<p><em>Watch AIbrowser's agent team in action: The <b>Planner</b> designs a task, the <b>Navigator</b> executes web actions, and the <b>Validator</b> checks the work, all in real-time. This fork stores the results and user identity on ICP.</em></p>
</div>

## 🤖 What is AIbrowser? The Power of an Agent Team

AIbrowser isn't just a chatbot that answers questions; it's a **fully autonomous multi-agent system** that lives in your browser. It gives a team of specialized AI agents direct control over a web browser to accomplish complex tasks on your behalf.

### How the AI Agent Team Works

When you give AIbrowser a goal, a collaborative process begins:

1.  🧠 **The Planner (The Strategist):** This agent analyzes your high-level goal and breaks it down into a concrete, step-by-step plan. For example, "find top speakers" becomes "1. Navigate to Amazon. 2. Search for 'Bluetooth speakers'. 3. Filter by 'water-resistant'. 4. Extract results."

2.  🖱️ **The Navigator (The Operator):** This agent executes the plan. It's the one that actually clicks buttons, types into search bars, scrolls pages, and extracts data from the web page's content.

3.  ✅ **The Validator (The Quality Analyst):** After each step, this agent reviews the Navigator's work. Did it successfully navigate to the right page? Did it extract the correct information? If not, it provides feedback so the team can self-correct and try again.

This continuous loop of **Plan -> Execute -> Validate** allows AIbrowser to tackle dynamic and complex workflows that a simple script could not.

## ✨ Why Supercharge Agents with the Internet Computer (ICP)?

While powerful, standard browser agents have a major limitation: they are stateless and forgetful. Close the browser, and their memory is gone. This fork (`Debronejacobs/ICP-browser-agent`) solves this by integrating with ICP, giving your agent team:

-   **🔐 A Secure, Persistent Memory:** Conversation history, agent preferences, and task results are stored securely on the decentralized Internet Computer, not just your local machine. Your agents remember you and your past interactions across sessions and devices.
-   **👤 A Sovereign Identity:** Instead of relying on traditional logins, we are implementing Internet Identity. You own and control your access, ensuring a private and secure user experience.
-   **🚀 Unstoppable & Resilient Backend:** By leveraging ICP's decentralized architecture, the "backend" for your agents is robust, tamper-proof, and always available, free from single points of failure.
-   **💸 100% Free & Open:** AIbrowser remains completely free. You bring your own LLM keys, and the ICP integration provides a powerful, privacy-preserving alternative to costly cloud services.

## 🔥 Key Features

-   🧠 **Autonomous Multi-Agent System:** A team of Planner, Navigator, and Validator agents collaborate to achieve your goals.
-   💬 **Interactive Side Panel:** Command your agents and see their real-time progress through an intuitive chat interface.
-   🔄 **Contextual Follow-up:** Ask follow-up questions and refine tasks; the agents remember the context.
-   🔌 **Flexible LLM Support:** Connect to OpenAI, Anthropic, Gemini, Groq, Ollama, and other providers. You can even assign different models to different agents for optimal performance and cost!
-   **[✨ ICP Enhanced] Persistent, Decentralized History:** Securely store and access your full conversation history on the Internet Computer.
-   **[✨ ICP Enhanced] Decentralized Configuration:** Your agent settings and API keys can be stored securely on-chain.
-   **[✨ ICP Planned] Secure & Sovereign Login:** Authenticate using Internet Identity for a passwordless, privacy-first experience.

## 💡 See The Agent Team In Action

These examples showcase the kind of complex tasks the agentic system can handle:

> "Go to GitHub's trending page for Python. Find the top 3 repositories. For each one, visit its page, find its primary license, and tell me how many stars it has. Compile the results in a table."

> "I need a recipe for vegan lasagna. Search for a highly-rated one on Google, navigate to the recipe page, and extract the full list of ingredients and the step-by-step instructions."

> "Research the new 'Claude 3.7 Sonnet' model. Go to the official Anthropic blog, find the announcement post, and summarize the key improvements over the previous model in three bullet points."

---

## 🚀 Quick Start

1.  **Install this Fork Manually:**
    *   Since this is a developmental fork, you must install it from the source code in this repository. Follow the "Manually Install" instructions below.

2.  **Configure Agents:**
    *   Open the AIbrowser sidebar in your browser and click the `Settings` icon.
    *   Add your preferred LLM provider API keys.
    *   Choose which models to use for the Planner, Navigator, and Validator agents.
    *   *(ICP Specific)*: As development progresses, canister and identity configuration will appear here.

## 🔧 Manually Install Latest Version

1.  **Download:**
    *   Go to the [Releases page of this repository](https://github.com/Debronejacobs/ICP-browser-agent/releases).
    *   Download the latest release ZIP file (e.g., `ICP-browser-agent.zip`).

2.  **Install:**
    *   Unzip the downloaded file.
    *   Open `chrome://extensions/` in Chrome or `edge://extensions/` in Edge.
    *   Enable **Developer mode** (usually a toggle in the top-right corner).
    *   Click `Load unpacked` and select the unzipped folder you just created.

3.  **Pin the Extension:**
    *   Click the puzzle piece icon in your browser's toolbar and pin AIbrowser for easy access.

## 🛠️ Build from Source

1.  **Prerequisites**:
    *   Node.js (v22.12.0+) & pnpm (v9.15.1+)
    *   (For Canister Dev) DFINITY Canister SDK (`dfx`). See [ICP docs](https://internetcomputer.org/docs/current/developer-docs/setup/install/).

2.  **Clone This Repository**:
    ```bash
    git clone https://github.com/Debronejacobs/ICP-browser-agent.git
    cd ICP-browser-agent
    ```

3.  **Install Dependencies**: `pnpm install`
4.  **Build the Extension**: `pnpm build`
5.  **Load in Browser**: The built extension is in the `dist` folder. Follow step 2 from the "Manually Install" section.

---

## 🛠️ Roadmap (This ICP Fork)

Our primary focus is on seamlessly blending the core agentic capabilities with the power of the Internet Computer.

*   ✅ **Core AIbrowser Functionality**: Ensure base agent stability.
*   🔄 **ICP Data Storage**: Implement secure storage for conversation history and settings on ICP.
*   🔐 **ICP Secure Login**: Integrate Internet Identity for canister-based sessions.
*   🛡️ **Data Privacy & Control**: Explore on-chain encryption and fine-grained access control.
*   🔌 **Refined Canister Interaction**: Optimize communication between the browser extension and ICP canisters.
*   📚 **Enhanced Documentation**: Provide clear guides for using and developing the ICP-integrated features.

Track our progress in this repository's **[Issues](https://github.com/Debronejacobs/ICP-browser-agent/issues)** and **[Discussions](https://github.com/Debronejacobs/ICP-browser-agent/discussions)**.

## 🤝 Contributing

We welcome contributions! If you have expertise in React, Browser Extensions, or the Internet Computer, we'd love your help.

*   **Develop ICP Features**: Help build out the canister logic or the frontend integration.
*   **Test & Report Bugs**: Install the extension and report any issues you find in **[this repository's Issues](https://github.com/Debronejacobs/ICP-browser-agent/issues)**.
*   **Contribute Code**: Fork the repo, make your changes, and submit a Pull Request.

## 👏 Acknowledgments
-   The original **[AIbrowser](https://github.com/AIbrowser/AIbrowser)** team for creating an incredible open-source agentic system.
-   The **Internet Computer Community** for building the future of the decentralized web.
-   The **NanoBrowser Project**.
-   Key dependencies like [LangChain](https://github.com/langchain-ai/langchainjs) and [Browser Use](https://github.com/browser-use/browser-use).

## 📄 License
This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
