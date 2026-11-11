#!/usr/bin/env node
// Builds _data/guides.json from the Markdown summaries in knowledge/.
// Run after every knowledge export: npm run build:data
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://www.ai2boxy.com'

const CATEGORIES = [
  ['codex', 'Codex'],
  [/(payment|recharge|topup|price|mastercard|order|without-password)/, '充值与付款'],
  [/(plans|pro-|upgrade|plus-vs)/, '套餐选择'],
  [/(security|safety|jiangzhi|memory|projects)/, '账号与使用'],
  [/./, '产品动态']
]

function category(slug) {
  for (const [rule, label] of CATEGORIES) {
    if (typeof rule === 'string' ? slug.includes(rule) : rule.test(slug)) return label
  }
}

export function parseGuide(slug, markdown) {
  const lines = markdown.split('\n')
  const title = (lines.find((l) => l.startsWith('# ')) || '').slice(2).trim()
  const date = (markdown.match(/更新于\s*(\d{4}-\d{2}-\d{2})/) || [])[1] || ''
  const blocks = markdown.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean)
  const summary = (blocks.find((b) => !b.startsWith('#') && !b.startsWith('更新于') && !b.startsWith('|') && !b.startsWith('-') && !b.startsWith('[')) || '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim()
  const pointsBlock = markdown.split(/^## 要点\s*$/m)[1]
  const points = pointsBlock ? pointsBlock.trim().split('\n\n')[0].split('\n').filter((l) => l.startsWith('- ')).map((l) => l.slice(2).trim()) : []
  const full = (markdown.match(/\[阅读官网完整指南\]\((https:\/\/www\.ai2boxy\.com\/zh\/guides\/[a-z0-9-]+\/)\?[^)]*\)/) || [])[1] || ''
  return {
    slug,
    title,
    date,
    summary,
    points,
    category: category(slug),
    source_url: full,
    cta_url: `${full || `${SITE}/zh/`}?utm_source=githubpages&utm_medium=guide&utm_campaign=knowledge_summary`
  }
}

export function collectGuides() {
  const files = [
    ...fs.readdirSync(path.join(root, 'knowledge/guides')).map((f) => `knowledge/guides/${f}`),
    ...fs.readdirSync(path.join(root, 'knowledge')).filter((f) => f.endsWith('.md') && f !== 'README.md').map((f) => `knowledge/${f}`)
  ].filter((f) => f.endsWith('.md'))
  return files
    .map((file) => ({...parseGuide(path.basename(file, '.md'), fs.readFileSync(path.join(root, file), 'utf8')), file}))
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const guides = collectGuides()
  fs.writeFileSync(path.join(root, '_data/guides.json'), `${JSON.stringify(guides, null, 2)}\n`)
  console.log(`Wrote ${guides.length} guides to _data/guides.json`)
}
