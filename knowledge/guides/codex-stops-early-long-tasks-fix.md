# Codex 长任务改几个文件就停下来汇报？用 /goal、AGENTS.md 和新对话让它一口气做完一个阶段

更新于 2026-11-14 · AI Boxy

按 OpenAI 官方文档整理 Codex 长任务的做法。ChatGPT Learn《Long-running work》：多步骤工作要给出明确结果、约束和完成标准；在 ChatGPT 桌面 App、Codex CLI 和 IDE 扩展里输入 /goal 启动 Goal 模式，目标文字既是第一条提示也是完成标准，可暂停、恢复、编辑、清除；需要决定时会暂停，沙箱和审批策略不变；目标不清楚时先用 /plan。Codex 配置参考：features.goals（持久目标和自动继续）为稳定功能、默认开启；model_auto_compact_token_limit 控制自动压缩阈值。CLI 命令文档：/compact 用摘要替换早期对话释放上下文，/new 和 /clear 开新对话，/fork 复制当前对话，/status 查看上下文用量，/init 生成 AGENTS.md。AGENTS.md 文档：Codex 每次开工前读取全局 ~/.codex/AGENTS.md 和项目内 AGENTS.md。Best practices：提示词写清 Goal、Context、Constraints、Done when；一个连贯的工作单元用一个对话。Troubleshooting：对话卡住时先看是否在等审批，再用更小、更聚焦的提示开新对话。Codex CLI 0.169.0 changelog：计划模式选 Yes, clear context and implement 会把完整计划交给新会话。截至北京时间 2026-11-14 09:00，OpenAI 状态页未登记 11 月 13–14 日的 Codex 故障。

## 要点

- Codex 中途停下多半是任务没写清完成标准、在等审批，或对话太长触发了上下文压缩。
- 用 /goal 写清「做到什么算完」，把「做完整个阶段再汇报」写进 AGENTS.md。
- 遇到 remote compact 报错或对话越来越慢，让它写交接摘要，开新对话接着做。

[阅读官网完整指南](https://www.ai2boxy.com/zh/guides/codex-stops-early-long-tasks-fix/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

具体套餐可用性、价格及交付方式以官网当前页面为准。
