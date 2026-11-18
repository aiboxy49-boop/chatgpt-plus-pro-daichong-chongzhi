# Codex 额度掉得特别快？费额度的设置自查、异常反馈和省额度办法

更新于 2026-11-18 · AI Boxy

依据 ChatGPT Learn《Pricing》（核对于 2026-11-18）：Fast 模式下 GPT-6.2 Astra / Sol 按 2 倍、更早的模型按 2.5 倍消耗包含额度；Ultrafast 下 GPT-6.2 按 6 倍、GPT-6 Astra 和 GPT-6.1 Sol 按 8 倍；图片生成平均快 3 到 5 倍；云端任务可能比本地消息更费；MCP 服务器和过大的 AGENTS.md 也会增加上下文。剩余额度在用量面板和 CLI 的 /status 查看；怀疑计量异常用 /feedback 提交；额度不够可买积分、用 API Key 跑本地对话或升级 Pro。

## 要点

- Fast 模式按 2 到 2.5 倍、Ultrafast 按 6 到 8 倍消耗包含额度（看模型），图片生成平均快 3 到 5 倍，先排查这几项。
- 用量面板和 Codex CLI 里的 /status 能看到剩余额度和重置时间。
- 怀疑计量出错就对受影响的会话用 /feedback 提交，别靠反复重开会话碰运气。

[阅读官网完整指南](https://www.ai2boxy.com/zh/guides/codex-usage-limit-draining-fast/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

具体套餐可用性、价格及交付方式以官网当前页面为准。
