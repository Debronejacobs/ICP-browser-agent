

<!-- This badge points to YOUR fork -->


</div>


## 🌐 AIbrowser with ICP Integration

AIbrowser is an open-source AI web automation tool that runs in your browser. This fork extends its capabilities by integrating with the Internet Computer Protocol (ICP). Our goal is to leverage ICP for decentralized data storage (e.g., conversation history, user preferences) and secure login mechanisms. We aim to provide a free, privacy-centric alternative to tools like OpenAI Operator, with flexible LLM options, a multi-agent system, and the added benefits of ICP's decentralized infrastructure.







<div align="center">
<img src="https://github.com/user-attachments/assets/112c4385-7b03-4b81-a352-4f348093351b" width="600" alt="AIbrowser Demo GIF" />
<p><em>AIbrowser's multi-agent system analyzing HuggingFace in real-time. This fork aims to store interaction data and manage user sessions via ICP.</em></p>
</div>

## 🔥 Why AIbrowser with ICP?

Building upon the strengths of the original AIbrowser, this fork (`Debronejacobs/ICP-browser-agent`) introduces ICP integration to further enhance its capabilities:

-   **100% Free**: No subscription fees. Use your own API keys for LLMs.
-   **Privacy-Focused**: Runs in your local browser. Credentials stay local.
-   **Flexible LLM Options**: Connect to preferred LLM providers.
-   **Fully Open Source**: Transparent browser automation.
-   **✨ ICP-Powered Data Persistence (In Progress in this fork)**: User data, conversation history, and configurations can be securely stored on the Internet Computer.
-   **✨ ICP-Powered Secure Login (Planned for this fork)**: Leverage Internet Identity or canister-based authentication.
-   **✨ Enhanced Data Privacy & Robustness (Goal of this fork)**: Utilize ICP's architecture for greater user control and a decentralized backend.

> **Note:** LLM provider support currently includes OpenAI, Anthropic, Gemini, Ollama, Groq, Cerebras and custom OpenAI-Compatible providers (from the original project).

## 📊 Key Features (Including Planned ICP Enhancements in this Fork)

-   **Multi-agent System**: Specialized AI agents collaborate on web workflows.
-   **Interactive Side Panel**: Intuitive chat interface with real-time updates.
-   **Task Automation**: Automate repetitive web tasks.
-   **Follow-up Questions**: Contextual follow-ups on completed tasks.
-   **Conversation History**: Access and manage interaction history.
    -   **ICP Enhancement (This Fork)**: Store history securely and persistently on the Internet Computer.
-   **Multiple LLM Support**: Connect preferred LLMs, assign different models to agents.
-   **Secure User Authentication (Planned for this fork via ICP)**: Robust and decentralized login.
-   **Decentralized Data Storage (In Progress in this fork via ICP)**: Store user settings on-chain.

## 🌐 Browser Support

**Officially Supported (for base AIbrowser functionality from the original project):**
-   **Chrome** - Full support
-   **Edge** - Full support

**Not Supported (by the original project):**
-   Firefox, Safari, and other Chromium variants (Opera, Arc, etc.)

> **Note**: While AIbrowser may function on other Chromium-based browsers, Chrome or Edge are recommended.

## 🚀 Quick Start (This ICP Fork: `Debronejacobs/ICP-browser-agent`)

1.  **Install this Fork Manually:**
    *   Since this is a developmental fork with ICP integration, follow the "Manually Install Latest Version" or "Build from Source" instructions below, using the code from **this repository (`https://github.com/Debronejacobs/ICP-browser-agent`)**.

2.  **Configure Agent Models**:
    *   Open AIbrowser sidebar, click `Settings`.
    *   Add LLM API keys.
    *   Choose models for agents.
    *   *(ICP Specific)*: Configuration for ICP endpoint/canister IDs will be added here as development progresses in this fork.

## 🔧 Manually Install Latest Version (This ICP Fork: `Debronejacobs/ICP-browser-agent`)

To get the most recent version of this ICP-enhanced fork:

1.  **Download**
    *   Download the latest release ZIP (e.g., `ICP-browser-agent.zip`) from **this repository's Releases page**: [https://github.com/Debronejacobs/ICP-browser-agent/releases](https://github.com/Debronejacobs/ICP-browser-agent/releases).

2.  **Install**:
    *   Unzip the downloaded file.
    *   Open `chrome://extensions/` in Chrome. Enable `Developer mode`.
    *   Click `Load unpacked` and select the unzipped folder.

3.  **Configure Agent Models & ICP Settings**
    *   As described in the "Quick Start" section.

4.  **Upgrading**:
    *   Download the latest release ZIP from **this repository's Releases page**.
    *   Unzip and replace existing files. Refresh the extension in `chrome://extensions/`.

## 🛠️ Build from Source (This ICP Fork: `Debronejacobs/ICP-browser-agent`)

1.  **Prerequisites**:
    *   Node.js (v22.12.0+), pnpm (v9.15.1+)
    *   **(Potentially)** DFINITY Canister SDK (`dfx`) for ICP canister development. See [ICP docs](https://internetcomputer.org/docs/current/developer-docs/setup/install/).

2.  **Clone This Repository**:
    ```bash
    git clone https://github.com/Debronejacobs/ICP-browser-agent.git
    cd ICP-browser-agent
    ```

3.  **Install Dependencies**: `pnpm install`
4.  **Build the Extension**: `pnpm build`
    *   *(ICP Specific)*: Additional build steps for canisters (e.g., `dfx build`) will be detailed here as integration matures.

5.  **Load the Extension**: Built extension is in `dist`. Follow "Manually Install" steps.
6.  **Development Mode** (frontend): `pnpm dev`

## 🤖 Choosing Your Models

(This section is inherited from the original AIbrowser project and applies to this fork as well.)
AIbrowser allows different LLM models for each agent. Recommended configurations:

### Better Performance
- **Planner & Validator**: Claude 3.7 Sonnet
- **Navigator**: Claude 3.5 Haiku

### Cost-Effective Configuration
- **Planner & Validator**: Claude Haiku or GPT-4o
- **Navigator**: Gemini 2.0 Flash or GPT-4o-mini

### Local Models
- **Setup**: Ollama or custom OpenAI-compatible providers.
- **Recommended**: Qwen3 14B, Falcon3 10B, Qwen 2.5 Coder 14B, Mistral Small 24B.
- **Prompting**: Local models need specific prompts.

> **Note**: Cost-effective config may be less stable. Experiment and share!

## 💡 See It In Action (Base AIbrowser Functionality)

(These examples showcase the core agent system from the original AIbrowser.)
1.  **News Summary**: > "Go to TechCrunch and extract top 10 headlines from the last 24 hours"
2.  **GitHub Research**: > "Look for the trending Python repositories on GitHub with most stars"
3.  **Shopping Research**: > "Find a portable Bluetooth speaker on Amazon with a water-resistant design, under $50. Minimum battery life of 10 hours"
*The ICP integration in this fork will primarily affect data storage and user authentication.*

## 🛠️ Roadmap (This ICP Fork: `Debronejacobs/ICP-browser-agent`)

Focus for this fork:
*   ✅ **Core AIbrowser Functionality**: Ensure stability.
*   🔄 **ICP Data Storage**: Securely store conversation history, settings on ICP.
*   🔐 **ICP Secure Login**: Integrate Internet Identity, canister-based sessions.
*   🛡️ **Data Privacy & Control**: On-chain encryption, access control.
*   🔌 **Canister Interaction**: Refine extension-canister communication.
*   📚 **Documentation**: Guides for ICP-integrated features.

Track progress in **this repository's Issues and Discussions**:
-   Issues: [https://github.com/Debronejacobs/ICP-browser-agent/issues](https://github.com/Debronejacobs/ICP-browser-agent/issues)
-   Discussions: [https://github.com/Debronejacobs/ICP-browser-agent/discussions](https://github.com/Debronejacobs/ICP-browser-agent/discussions)
(Original project roadmap: [AIbrowser/AIbrowser/discussions/85](https://github.com/AIbrowser/AIbrowser/discussions/85))

## 🤝 Contributing to this ICP Fork (`Debronejacobs/ICP-browser-agent`)

Help make this ICP-enhanced AIbrowser a reality!
*   **Share ICP Expertise**.
*   **Develop ICP Features**: Canister logic, frontend integration.
*   **Test ICP Integration**.
*   **Provide Feedback**: Use **this repository's Issues**.
*   **Contribute Code**:
    *   Check `CONTRIBUTING.md` (if available in this fork).
    *   Submit PRs to **this repository** (`Debronejacobs/ICP-browser-agent`).

## 🔒 Security

For vulnerabilities in **this fork (`Debronejacobs/ICP-browser-agent`)**, especially related to ICP:
Report responsibly via a **GitHub Security Advisory on this repository**:
[https://github.com/Debronejacobs/ICP-browser-agent/security/advisories/new](https://github.com/Debronejacobs/ICP-browser-agent/security/advisories/new)

(For original AIbrowser security, see their policy.)

## 💬 Community

-   **This Fork's Development (`Debronejacobs/ICP-browser-agent`):**
    -   GitHub Issues: [https://github.com/Debronejacobs/ICP-browser-agent/issues](https://github.com/Debronejacobs/ICP-browser-agent/issues)
    -   GitHub Discussions: [https://github.com/Debronejacobs/ICP-browser-agent/discussions](https://github.com/Debronejacobs/ICP-browser-agent/discussions)

## 👏 Acknowledgments
-   Dependencies: [Browser Use](https://github.com/browser-use/browser-use), [Puppeteer (ref: Agent-E)](https://github.com/EmergenceAI/Agent-E), [Chrome Extension Boilerplate](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite), [LangChain](https://github.com/langchain-ai/langchainjs).
-   **The Internet Computer Community**.
-   The NanoBrowser Project

Thanks to their creators and contributors!

## 📄 License

This project, like the original AIbrowser, is licensed under Apache License 2.0. See [LICENSE](LICENSE).

