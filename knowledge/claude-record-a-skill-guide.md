# Claude 录屏教技能怎么用？Cowork「Record a skill」教程（2026 年 10 月）

更新于 2026-10-20 · AI Boxy

Claude 的「Record a skill」可以把一次屏幕演示整理成可复用的技能：你做一遍重复任务，说明每一步的判断，Claude 再提出技能草稿，由你检查、保存。以后遇到类似任务，就可以复用这些步骤。

下面依据 Anthropic 官方帮助文档整理，重点是使用条件、录制步骤和录制后留下哪些资料。

## 先看你能不能用

截至本文核对时，录屏生成技能的条件如下：

| 条件 | 要求 |
| --- | --- |
| 套餐 | Claude Pro、Max、Team |
| 设备 | Mac 版 Claude 桌面应用 |
| 入口 | Cowork |
| 暂不支持 | 普通聊天、Windows、Free 和 Enterprise 套餐 |

Skills 本身与录屏创建是两回事。官方说明 Skills 对 Free、Pro、Max、Team 和 Enterprise 用户开放，并要求启用代码执行；录屏生成技能的范围更窄。不要因为能使用 Skills，就认为自己的设备和套餐一定有录制入口。

## 录之前先做三件事

1. 把 Mac 版 Claude 更新到最新版。
2. 按提示授予 macOS 辅助功能和屏幕录制权限。前者用于记录鼠标和键盘操作，后者用于读取屏幕；系统可能要求重启 Claude。
3. 关掉不希望被录到的文件、应用和对话。录制会捕获屏幕及你说的话，不要输入密码、密钥，也不要展示私人聊天和敏感资料。

## 正式录制：五步完成

1. 打开 Mac 版 Claude，进入 Cowork。
2. 点输入框旁的「+」，选「Record a skill」。另一条入口是 Customize → Skills → Add → Record your screen。
3. 点「Start recording」。需要边做边讲时保留麦克风，也可以静音或切换输入设备。
4. 按平时的方式完成任务。录制栏会显示录制状态和已捕获的步骤数量。
5. 完成后点「Done」；不想创建技能就点「Discard」。

一次录制约可持续 10 分钟。剩余约一分钟时会显示倒计时，到时间会自动停止并将已录内容发送给 Claude，效果与点击 Done 相同。先挑十分钟内能演示清楚的流程。

## 边做边讲，说明判断依据

屏幕能展示你点了哪里，讲解能补充你为什么这样做。官方建议在操作时说明选择和跳过步骤的理由。下面是教学示例：

- “我选这个文件，因为它是已经确认的定稿。”
- “这条还没有审批，所以先跳过。”
- “信息缺失时，先列出来，不要自行补全。”
- “上传之前先确认访问权限，再由我决定是否公开。”

不要假定 Claude 一定能分清所有误操作。点错或漏讲后，在保存前检查它整理出的流程，补上关键条件。

## 点完 Done 之后会发生什么

Claude 会启动一个 Cowork 任务检查录制内容，再提出技能建议：

- 新技能：提案卡片标记 NEW，点 Save 保存，或点 Dismiss 放弃。
- 已有技能更新：录制内容与现有技能重合时，可能建议更新该技能。卡片会显示基于哪个技能，点 Update 应用，或点 Dismiss 放弃。

先展开卡片的 Content，检查步骤、触发条件和例外处理，再决定是否保存。保存后的技能位于 Customize → Skills，可以像其他技能一样编辑、分享和删除。

## 录像会不会一直留着

官方说明，录制的视频和音频不会保留；生成技能后，会留下这次演示的一组截图，可以在 Cowork 任务的 Recorded demonstration 步骤里查看。

因此，“不保留视频和音频”不等于“没有任何资料留下”。截图仍可能包含敏感信息。官方说明删除该 Cowork 任务会移除其中的截图，具体删除和保留规则应同时查看 Cowork 文档。

## 录屏生成与手写技能怎么配合

Skills 用来说明什么时候执行任务、按什么步骤做、要遵守哪些规则。录屏是把流程交给 Claude 整理的一种创建方式，生成后仍应人工审阅。

可以先录一遍取得草稿，再补上文件命名、审批要求和不能自动执行的操作。流程变了，可以再次演示；若与现有技能重合，Claude 可能提出更新建议，最终仍由你确认。

## 哪些任务适合录成技能

可以从重复、步骤相对稳定的工作开始，例如按固定格式汇总周报、整理文件、套用报告模板、把会议纪要转成待办清单。

先用不含敏感资料的样本试跑，检查文件结果与执行记录。涉及付款、删除或对外发送时，把人工确认要求明确写进技能，并在相应工具里设置权限；技能文字不能代替实际权限控制。

## 购买前先核对使用条件

先确认设备、地区可用性、套餐和 Cowork 入口，不要把付费当作功能必然可用的保证。只想使用现有 Skills 的用户，也不应把录屏功能的付费门槛当成所有 Skills 的门槛。

AI Boxy 提供本人账户充值服务，Claude Pro、ChatGPT Plus / Pro 的当前价格和可购买状态，以 [官网套餐页面](https://www.ai2boxy.com/zh/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base#plans) 为准。网站展示的支付方式均经对应支付平台认证，退款按 [公开退款规则](https://www.ai2boxy.com/zh/refund/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base) 执行。支付平台认证不代表 Anthropic 或 OpenAI 对服务背书。

不要向客服或公开 Issue 提交账户密码、验证码、Session、2FA 恢复码或订单凭证。订单资料仅按官网订单页要求提交，已有有效订阅时先确认续费规则。

## 官方参考

- [Anthropic：How to create custom skills，含 Record a skill 的条件、步骤与录制保留说明](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills)
- [Anthropic：Use skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude)
- [Anthropic：Claude 套餐与价格](https://claude.com/pricing)

AI Boxy 为独立第三方服务，与 Anthropic、OpenAI 均无隶属关系。本文包含自有服务介绍，信息核对于 2026 年 10 月 20 日，功能范围以官方说明和账号实际权限为准。
