# Codex 更新后发消息直接打断任务？是“追加消息”默认改成了 Steer，改回 Queue 只要一步

更新于 2026-11-12 · AI Boxy

整理自 linux.do 帖子《GPT更新以后把队列砍了？》（https://linux.do/t/topic/3144144，2026-11-09）。楼主发现 Codex 更新后，任务进行中发送的下一步指令会直接中断并插入当前任务；回帖指出默认变为 Steer（引导），可在设置里搜索 queue 改回 Queue（排队），也有人反映更新后偶尔被改回默认。官方核对：ChatGPT Learn 设置文档写明 General 下 Follow-up behavior 可选择任务运行中发送的消息是引导当前运行还是等待下一轮；Codex CLI 0.163.0（2026-10-15）说明在 Codex 回复时发送追加消息会立即引导；ChatGPT iOS 1.2026.300（2026-11-02）说明追加消息默认引导正在运行的任务，除非已保存其他偏好。

## 要点

- linux.do 网友发现更新后“队列没了”，其实是追加消息默认改成了 Steer。
- 在设置的 General 里找 Follow-up behavior，就能改回 Queue（排队等下一轮）。
- 想纠偏用 Steer，想排好下一步再走用 Queue；更新后最好回设置看一眼。

[阅读官网完整指南](https://www.ai2boxy.com/zh/guides/codex-steer-vs-queue-follow-up/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

具体套餐可用性、价格及交付方式以官网当前页面为准。
