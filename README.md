<h1 align="center">
    <img src="https://github.com/user-attachments/assets/ec60b0c4-87ba-48f4-981a-c55ed0e8497b" height="100" width="375" alt="banner" /><br>
    Nanobrowser (ICP Enhanced Fork)
</h1>

<div align="center">

<!-- IMPORTANT: This GitHub link now points to your forked repository -->
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Debronejacobs/ICP-browser-agent)
[![Original Project](https://img.shields.io/badge/Original_Nanobrowser-181717?style=for-the-badge&logo=github&logoColor=lightgrey)](https://github.com/nanobrowser/nanobrowser)
[![Twitter](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/nanobrowser_ai) <!-- Links to original project's Twitter -->
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/NN3ABHggMK) <!-- Links to original project's Discord -->
[<img src="https://deepwiki.com/badge.svg" height="28" alt="Ask DeepWiki about Original Nanobrowser">](https://deepwiki.com/nanobrowser/nanobrowser)

</div>

**Note:** This is a fork of the original [Nanobrowser](https://github.com/nanobrowser/nanobrowser) project, maintained at `https://github.com/Debronejacobs/ICP-browser-agent`. This version is being adapted to integrate with the **Internet Computer Protocol (ICP)** for decentralized data storage and secure login, aiming to enhance robustness and data privacy.

## 🌐 Nanobrowser with ICP Integration

Nanobrowser is an open-source AI web automation tool that runs in your browser. This fork extends its capabilities by integrating with the Internet Computer Protocol (ICP) for decentralized data storage (e.g., conversation history, user preferences) and secure login mechanisms. We aim to provide a free, privacy-centric alternative to tools like OpenAI Operator, with flexible LLM options, a multi-agent system, and the added benefits of ICP's decentralized infrastructure.

⬇️ For the original Nanobrowser experience, you can get it from the [Chrome Web Store](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal).
**This ICP-enhanced fork requires manual installation (see "Manually Install Latest Version" or "Build from Source" below).**

👏 Join the original Nanobrowser community in [Discord](https://discord.gg/NN3ABHggMK) | [X](https://x.com/nanobrowser_ai)

❤️ Loving Nanobrowser? Give the original project a star 🌟 and consider starring this fork if you're interested in the ICP integration!

<div align="center">
<img src="https://github.com/user-attachments/assets/112c4385-7b03-4b81-a352-4f348093351b" width="600" alt="Nanobrowser Demo GIF" />
<p><em>Nanobrowser's multi-agent system analyzing HuggingFace in real-time, with the Planner intelligently self-correcting when encountering obstacles and dynamically instructing the Navigator to adjust its approach—all running locally in your browser. This fork aims to store interaction data and manage user sessions via ICP.</em></p>
</div>

## 🔥 Why Nanobrowser with ICP?

Building upon the strengths of the original Nanobrowser, this fork introduces ICP integration to further enhance its capabilities:

-   **100% Free**: No subscription fees. Use your own API keys for LLMs.
-   **Privacy-Focused**: Runs in your local browser. Credentials stay local.
-   **Flexible LLM Options**: Connect to preferred LLM providers.
-   **Fully Open Source**: Transparent browser automation.
-   **✨ ICP-Powered Data Persistence (In Progress)**: User data, conversation history, and configurations can be securely stored on the Internet Computer, offering robustness, resilience, and user control.
-   **✨ ICP-Powered Secure Login (Planned)**: Leverage Internet Identity or canister-based authentication for enhanced security and decentralized user management.
-   **✨ Enhanced Data Privacy & Robustness through ICP**: Utilize ICP's architecture to provide users with greater control over their data and benefit from a decentralized, fault-tolerant backend.

> **Note:** LLM provider support currently includes OpenAI, Anthropic, Gemini, Ollama, Groq, Cerebras and custom OpenAI-Compatible providers. More providers will be supported.

## 📊 Key Features (Including Planned ICP Enhancements)

-   **Multi-agent System**: Specialized AI agents collaborate on web workflows.
-   **Interactive Side Panel**: Intuitive chat interface with real-time updates.
-   **Task Automation**: Automate repetitive web tasks.
-   **Follow-up Questions**: Contextual follow-ups on completed tasks.
-   **Conversation History**: Access and manage interaction history.
    -   **ICP Enhancement**: Store history securely and persistently on the Internet Computer.
-   **Multiple LLM Support**: Connect preferred LLMs, assign different models to agents.
-   **Secure User Authentication (Planned via ICP)**: Robust and decentralized login using ICP's identity solutions.
-   **Decentralized Data Storage (In Progress via ICP)**: Store user settings, preferences, and agent states on-chain.

## 🌐 Browser Support

**Officially Supported (for base Nanobrowser functionality):**
-   **Chrome** - Full support with all features
-   **Edge** - Full support with all features

**Not Supported:**
-   Firefox, Safari, and other Chromium variants (Opera, Arc, etc.)

> **Note**: While Nanobrowser may function on other Chromium-based browsers, we recommend using Chrome or Edge for the best experience.

## 🚀 Quick Start (This ICP Fork)

1.  **Install this Fork Manually:**
    *   Since this is a developmental fork with ICP integration, follow the "Manually Install Latest Version" or "Build from Source" instructions below, using the code from **this repository (`Debronejacobs/ICP-browser-agent`)**.

2.  **Configure Agent Models**:
    *   Click the Nanobrowser icon in your toolbar to open the sidebar.
    *   Click the `Settings` icon (top right).
    *   Add your LLM API keys.
    *   Choose which model to use for different agents (Navigator, Planner, Validator).
    *   *(ICP Specific)*: Configuration for ICP endpoint/canister IDs will be added here as development progresses.

## 🔧 Manually Install Latest Version (This ICP Fork)

To get the most recent version of this ICP-enhanced fork:

1.  **Download**
    *   Download the latest release ZIP file (e.g., `nanobrowser-icp.zip` or a name like `ICP-browser-agent.zip`) from this repository's [Releases page](https://github.com/Debronejacobs/ICP-browser-agent/releases).

2.  **Install**:
    *   Unzip the downloaded file.
    *   Open `chrome://extensions/` in Chrome.
    *   Enable `Developer mode` (top right).
    *   Click `Load unpacked` (top left).
    *   Select the unzipped folder (e.g., the folder named `nanobrowser-icp` or `ICP-browser-agent` after unzipping).

3.  **Configure Agent Models & ICP Settings**
    *   As described in the "Quick Start" section.

4.  **Upgrading**:
    *   Download the latest release ZIP from this repository's [Releases page](https://github.com/Debronejacobs/ICP-browser-agent/releases).
    *   Unzip and replace your existing extension files.
    *   Go to `chrome://extensions/` in Chrome and click the refresh icon on the Nanobrowser (ICP Fork) card.

## 🛠️ Build from Source (This ICP Fork)

If you prefer to build this fork yourself:

1.  **Prerequisites**:
    *   [Node.js](https://nodejs.org/) (v22.12.0 or higher)
    *   [pnpm](https://pnpm.io/installation) (v9.15.1 or higher)
    *   **(Potentially)** DFINITY Canister SDK (`dfx`) if you are working on the ICP canister code. See [ICP documentation](https://internetcomputer.org/docs/current/developer-docs/setup/install/) for `dfx` installation.

2.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Debronejacobs/ICP-browser-agent.git
    cd ICP-browser-agent
    ```

3.  **Install Dependencies**:
    ```bash
    pnpm install
    ```

4.  **Build the Extension**:
    ```bash
    pnpm build
    ```
    *   *(ICP Specific)*: Additional build steps for canisters might be required (e.g., `dfx build`). These will be detailed as the integration matures.

5.  **Load the Extension**:
    *   The built extension will be in the `dist` directory.
    *   Follow the installation steps from the "Manually Install Latest Version" section to load the extension into your browser.

6.  **Development Mode** (optional for frontend):
    ```bash
    pnpm dev
    ```

## 🤖 Choosing Your Models

Nanobrowser allows you to configure different LLM models for each agent to balance performance and cost. This remains unchanged in this fork. Here are recommended configurations from the original project:

### Better Performance
- **Planner & Validator**: Claude 3.7 Sonnet
- **Navigator**: Claude 3.5 Haiku

### Cost-Effective Configuration
- **Planner & Validator**: Claude Haiku or GPT-4o
- **Navigator**: Gemini 2.0 Flash or GPT-4o-mini

### Local Models
- **Setup Options**: Use Ollama or other custom OpenAI-compatible providers.
- **Recommended Models**: Qwen3 14B, Falcon3 10B, Qwen 2.5 Coder 14B, Mistral Small 24B.
- **Prompt Engineering**: Local models require more specific prompts.

> **Note**: The cost-effective configuration may produce less stable outputs.
> **Tip**: Experiment and share your model configurations!

## 💡 See It In Action (Base Nanobrowser Functionality)

These examples showcase the power of the core Nanobrowser agent system:

1.  **News Summary**:
    > "Go to TechCrunch and extract top 10 headlines from the last 24 hours"

2.  **GitHub Research**:
    > "Look for the trending Python repositories on GitHub with most stars"

3.  **Shopping Research**:
    > "Find a portable Bluetooth speaker on Amazon with a water-resistant design, under $50. It should have a minimum battery life of 10 hours"

*The ICP integration will primarily affect how data from these interactions is stored and how users are authenticated, rather than changing these core commands.*

## 🛠️ Roadmap (This ICP Fork)

We're actively developing this fork of Nanobrowser with a focus on deep ICP integration:

*   ✅ **Core Nanobrowser Functionality**: Ensure all base features are stable in this fork.
*   🔄 **ICP Data Storage**:
    *   Implement secure storage of conversation history on ICP.
    *   Store user settings and LLM configurations on ICP.
    *   Explore storing agent states or preferences on ICP.
*   🔐 **ICP Secure Login**:
    *   Integrate with Internet Identity for user authentication.
    *   Develop canister-based user session management.
*   🛡️ **Data Privacy & Control**:
    *   Investigate on-chain data encryption options.
    *   Design fine-grained access control for user data stored on ICP.
*   🔌 **Canister Interaction**: Refine communication between the browser extension and ICP canisters.
*   📚 **Documentation**: Provide clear guides for setting up and using the ICP-integrated features.

Check out this repository's [Issues](https://github.com/Debronejacobs/ICP-browser-agent/issues) and [Discussions](https://github.com/Debronejacobs/ICP-browser-agent/discussions) for detailed progress and to contribute ideas. The original project's roadmap can be found in their [GitHub Discussions](https://github.com/nanobrowser/nanobrowser/discussions/85).

## 🤝 Contributing to this ICP Fork

**Your help is invaluable in making this ICP-enhanced Nanobrowser a reality!** Contributions are welcome:

*   **Share ICP Expertise**: If you have experience with Internet Computer development, your insights are highly valuable.
*   **Develop ICP Features**: Help build out the canister logic, frontend integrations for ICP, or authentication mechanisms.
*   **Test ICP Integration**: As features are developed, help test the robustness and security of the ICP integration.
*   **Provide Feedback**: Try this fork and give feedback on its performance, usability, or suggest improvements, especially concerning the ICP aspects. Use this repository's [Issues](https://github.com/Debronejacobs/ICP-browser-agent/issues).
*   **Contribute Code**:
    *   Check out our `CONTRIBUTING.md` (if you create one for this fork) for guidelines.
    *   Submit pull requests to **this repository** (`Debronejacobs/ICP-browser-agent`) for bug fixes, ICP features, or documentation.

Join us in building the future of web automation with the power of decentralization!

## 🔒 Security

If you discover a security vulnerability in **this fork**, especially related to the ICP integration or how it handles user data:

Please **DO NOT** disclose it publicly. Instead, create a [GitHub Security Advisory](https://github.com/Debronejacobs/ICP-browser-agent/security/advisories/new) on **this repository** to report it responsibly.

For security issues related to the original Nanobrowser, please refer to their security policy.

## 💬 Community

-   **This Fork's Development (`Debronejacobs/ICP-browser-agent`):**
    -   [GitHub Issues](https://github.com/Debronejacobs/ICP-browser-agent/issues) - For bug reports and feature requests specific to this ICP fork.
    -   [GitHub Discussions](https://github.com/Debronejacobs/ICP-browser-agent/discussions) - For broader ideas and Q&A about this fork.
-   **Original Nanobrowser Community (for general Nanobrowser questions & community):**
    -   [Discord](https://discord.gg/NN3ABHggMK) - Chat with the original team and community.
    -   [Twitter](https://x.com/nanobrowser_ai) - Follow for original project updates.

## 👏 Acknowledgments

This project is a fork of and builds upon the incredible work of the original **Nanobrowser** team and its dependencies:

-   [Nanobrowser (Original)](https://github.com/nanobrowser/nanobrowser)
-   [Browser Use](https://github.com/browser-use/browser-use)
-   [Puppeteer (reference in original, likely for Agent-E which seems to be EmergenceAI/Agent-E)](https://github.com/EmergenceAI/Agent-E)
-   [Chrome Extension Boilerplate](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite)
-   [LangChain](https://github.com/langchain-ai/langchainjs)
-   **The Internet Computer Community**: For their pioneering work in decentralized computing.

Huge thanks to their creators and contributors!

## 📄 License

This project, like the original Nanobrowser, is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Debronejacobs (fork maintainer) and the original Nanobrowser Team.

Interested in the ICP integration? Give this fork a star 🌟!
For general Nanobrowser love, star the [original project](https://github.com/nanobrowser/nanobrowser) and join them on [Discord](https://discord.gg/NN3ABHggMK) | [X](https://x.com/nanobrowser_ai).