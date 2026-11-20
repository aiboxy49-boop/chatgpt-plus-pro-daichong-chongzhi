# Codex 额度烧得太快怎么办？按任务选模型和推理强度，让 Plus 的 5 小时额度撑得更久

更新于 2026-11-20 · AI Boxy

依据 OpenAI 官方文档（ChatGPT Learn Pricing、Models、Developer commands、AGENTS.md 指南，帮助中心 Managing usage with GPT-6 Astra in Work and Codex、About ChatGPT Pro tiers、Using Codex with your ChatGPT plan）：Codex 与 ChatGPT Work 共用套餐额度，额度不对应固定消息数，消耗取决于模型、上下文、推理强度、工具调用、检索、缓存和速度模式，相似任务也可能消耗不同。Plus 同时有 5 小时窗口和每周窗口，两者都要有余量才能继续；5 小时窗口从上一个窗口结束后的第一条消息开始计算。官方给出的 Plus 每 5 小时本地消息估算：GPT-6 Astra 5–45、GPT-6.1 Sol 15–160、GPT-6.1 Terra 35–285、GPT-6 Sol 15–150、GPT-6 Luna 350–3,000，云端任务更费，另有每周限制。Pro 100/200/500 目前在 Work 和 Codex 中没有 5 小时限制，但仍有包含额度，Pro 200 多于 Pro 100，Pro 500 最多。Ultrafast：Pro 500 的 GPT-6.2 Astra 和 Sol 都能用；Pro 200 以官方 GPT-6.2 Ultrafast 分档说明为准，目前开放的是 Sol；帮助中心《About ChatGPT Pro tiers》仍写 Ultrafast 只在 Pro 500，以账号里实际能选到的速度模式为准。Codex 积分费率（每百万输入/缓存输入/输出 token）：GPT-6.2 Astra 200/10/1,000，GPT-6.2 Sol 与 GPT-6.1 Sol 均为 50/2.5/250，GPT-6 Astra 250/25/1,250，GPT-6.1 Terra 25/1.25/125，GPT-6 Luna 2.5/0.25/12.5。GPT-6.2 的 Fast 按 2 倍、Ultrafast 按 6 倍消耗包含额度；旧模型 Fast 仍按 2.5 倍、Ultrafast 仍按 8 倍。生图平均快 3–5 倍。推理强度越高用 token 越多，官方建议从默认档开始，Astra 从 Light（CLI 为 low）起步，Luna 从 High 起步，并指出 Astra 低强度可能优于 Sol 高强度、提高强度不一定更好。剩余额度在 Settings → Usage 查看，CLI 中用 /status 或 /usage。省额度官方建议：精简提示、只给相关文件、限定输出、用嵌套 AGENTS.md 控制注入的上下文（project_doc_max_bytes 默认 32 KiB）、关闭不用的 MCP；CLI 的 /compact 可把早前对话压缩成摘要。新开聊天、切换模型都不会恢复额度；额度用完可等重置、购买积分或升级。

## 要点

- Codex 额度不是按条数算的：模型、推理强度、上下文和工具调用都会影响消耗，看起来差不多的任务，用掉的额度也可能差很多。
- 日常写代码先用 GPT-6.2 Sol 默认档，简单重复的活交给 Terra 或 Luna，真难的问题才上 Astra。GPT-6.2 Sol 积分费率和 6.1 Sol 一样，Plus 每 5 小时估算更高。
- Plus 有 5 小时和每周两道限制；Pro 三档目前没有 5 小时限制，每天靠 Codex 干活的人升级 Pro 更省心。

[阅读官网完整指南](https://www.ai2boxy.com/zh/guides/codex-usage-limit-model-reasoning-guide/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

具体套餐可用性、价格及交付方式以官网当前页面为准。
