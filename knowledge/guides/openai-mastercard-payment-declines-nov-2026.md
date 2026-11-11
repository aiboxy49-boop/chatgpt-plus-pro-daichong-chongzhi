# OpenAI 付款被拒？先看卡号前 6 位：11 月美国 Mastercard 商务卡扣款故障说明

更新于 2026-11-11 · AI Boxy

OpenAI 状态页（2026-11-06 美东）：部分美国 Mastercard 商务卡付款被拒，卡号前缀 544015、546400、543502、543799、512998，及部分 513989。API 客户的自动充值和单次额度购买可能失败，余额用完后请求会报错。官方建议下次扣款前换一张其他发卡行的卡；已失败的额度购买用新卡重试。截至 11 月 8 日上午（北京时间）状态为 Monitoring。

## 要点

- 受影响的是部分美国 Mastercard 商务卡，判断依据是卡号前 6 位。
- API 用户最要紧：自动充值可能扣不上，余额见底后请求会失败。
- 官方建议：下次扣款前换一张其他发卡行的卡，已失败的购买用新卡重试。

[阅读官网完整指南](https://www.ai2boxy.com/zh/guides/openai-mastercard-payment-declines-nov-2026/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

具体套餐可用性、价格及交付方式以官网当前页面为准。
