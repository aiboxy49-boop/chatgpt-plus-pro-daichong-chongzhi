# ChatGPT Pro 每月送的 API 额度怎么领？在 Billing 里激活一次，当月不用就过期

更新于 2026-11-20 · AI Boxy

依据 OpenAI 开发者文档《API credits for ChatGPT subscribers》和帮助中心《API credits benefit for eligible ChatGPT subscriptions》（核对于 2026-11-19）：符合条件的 ChatGPT Pro 订阅可领取免费 API 额度，Pro 100 美元档每月 100 美元、200 美元档每月 200 美元、500 美元档每月 500 美元；Business 按付费席位计算，工作区每月上限 500 美元。Plus、免费试用和赠送订阅不符合条件，Enterprise、Edu 也不在范围内。领取条件：付费订阅已生效至少 7 天；你是该订阅的所有者，同时是接收额度的 API 组织的所有者；ChatGPT 账号与 API 账号使用同一个邮箱；还需要能管理该 API 组织的账单。新用户可关联个人 API 组织，在 ChatGPT 中领取前不必先完成 API 开通流程。领取路径一：在 ChatGPT 打开 Settings → Billing，找到 API credits 权益并开始领取，核对接收的 API 组织（拥有多个时选择一个），确认激活。路径二：用同一邮箱登录 API Platform，选择要关联的组织，在 Billing 中找到该权益，选择订阅并确认。一个订阅只能关联一个 API 组织，一个 API 组织也只能有一个这样的有效关联，要更换需联系支持。激活一次即可，之后每次续费自动发放；第一期按当期剩余时间折算；每期额度在订阅账单周期结束时过期，不结转。使用 API 不需要绑定付款方式，免费额度优先于购买的额度扣减；全部用完且无余额时请求返回 HTTP 429 和 credit_balance_exhausted。额度覆盖关联组织的 Responses、Chat Completions、Agents、Decisions、GPT-Live 与 Realtime、Images 及内置工具等付费 API 用量；不覆盖通过 API Key 使用 Codex，也不会增加 ChatGPT 或登录状态下 Codex 的使用额度。额度不会解除速率、模型和组织限制。升级 Pro 档位可能获得当期折算的额外额度；取消订阅不会收回已发放额度，但之后不再发放；降级到 Plus、Go 或 Free 会在账单周期结束时解除关联；批准的全额退款会移除对应的未使用额度。看不到权益时，帮助中心建议检查套餐、订阅付费天数、所选工作区和账号邮箱，并说明可用性还取决于开放批次和国家或地区。

## 要点

- Pro 100、200、500 每月分别附带 100、200、500 美元 API 额度；Plus 和免费试用没有。
- 订阅付费满 7 天后，在 ChatGPT 的 Settings → Billing 找到 API credits，选一个你本人拥有、邮箱相同的 API 组织确认，激活一次以后每月自动到账。
- 额度当期不用就过期，不结转；只能用于普通 API 调用，通过 API Key 跑 Codex 不算在内，也不会给 ChatGPT 或 Codex 加额度。

[阅读官网完整指南](https://www.ai2boxy.com/zh/guides/chatgpt-pro-api-credits-claim/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)

具体套餐可用性、价格及交付方式以官网当前页面为准。
