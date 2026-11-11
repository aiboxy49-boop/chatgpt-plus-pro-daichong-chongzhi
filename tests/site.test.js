const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

const root = path.resolve(__dirname, '..')
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')
const frontMatter = (file) => {
  const match = read(file).match(/^---\n([\s\S]*?)\n---\n/)
  assert.ok(match, `${file} needs front matter`)
  return Object.fromEntries(match[1].split('\n').filter((l) => /^[a-z_]+: /.test(l)).map((l) => [l.slice(0, l.indexOf(':')), l.slice(l.indexOf(':') + 2).trim()]))
}

const pages = [
  'articles/chatgpt-plus-recharge.html',
  'articles/payment-options.html',
  'articles/account-safety.html'
]
const templates = ['index.html', 'guides/index.html', 'chatgpt-plus-guide.md', '404.html', '_layouts/default.html', '_layouts/article.html', '_layouts/guide.html', '_includes/head.html', '_includes/header.html', '_includes/footer.html', '_includes/cta-band.html', '_includes/guide-card.html']
const BASE = 'https://aiboxy49-boop.github.io/chatgpt-plus-pro-daichong-chongzhi'

test('publishes a core guide and three distinct long-tail articles with SEO front matter', () => {
  assert.equal(fs.existsSync(path.join(root, 'README.md')), true)
  const metas = pages.map(frontMatter)
  assert.equal(new Set(metas.map((m) => m.seo_title)).size, 3)
  for (const meta of [...metas, frontMatter('index.html'), frontMatter('guides/index.html'), frontMatter('chatgpt-plus-guide.md')]) {
    assert.ok(meta.title || meta.seo_title)
    assert.ok((meta.description || '').length >= 20, `description too short: ${meta.description}`)
  }
  for (const file of pages) assert.doesNotMatch(read(file), /<html|<head|<body/, `${file} must use the shared layout`)
})

test('shared head renders language, viewport, description, canonical, Open Graph and stylesheet', () => {
  const layout = read('_layouts/default.html')
  const head = read('_includes/head.html')
  assert.match(layout, /<html lang="zh-CN">/)
  assert.match(layout, /{% include head.html %}/)
  for (const pattern of [/name="viewport"/, /name="description"/, /rel="canonical"/, /property="og:title"/, /property="og:description"/, /property="og:image"/, /property="og:url"/, /name="twitter:card"/, /styles\.css/]) {
    assert.match(head, pattern)
  }
  assert.ok(fs.existsSync(path.join(root, 'assets/og-cover.png')))
  const config = read('_config.yml')
  assert.match(config, /^url: https:\/\/aiboxy49-boop\.github\.io$/m)
  assert.match(config, /^baseurl: \/chatgpt-plus-pro-daichong-chongzhi$/m)
})

test('knowledge summaries are published on Pages with canonical links to the full AI Boxy article', () => {
  const config = read('_config.yml')
  assert.doesNotMatch(config, /^\s+- knowledge\s*$/m, 'knowledge must not be excluded')
  assert.match(config, /path: "knowledge"[\s\S]*layout: guide[\s\S]*permalink: \/guides\/:basename\//)
  const head = read('_includes/head.html')
  assert.match(head, /assign canonical = guide\.source_url/)
  const layout = read('_layouts/guide.html')
  assert.match(layout, /guide\.cta_url/)
  const guides = JSON.parse(read('_data/guides.json'))
  for (const guide of guides) {
    if (guide.file.startsWith('knowledge/guides/')) {
      assert.equal(guide.source_url, `https://www.ai2boxy.com/zh/guides/${guide.slug}/`)
      assert.match(guide.cta_url, /utm_source=githubpages&utm_medium=guide&utm_campaign=knowledge_summary/)
    }
    assert.ok(guide.title && guide.date && guide.summary, `${guide.slug} is missing metadata`)
  }
})

test('guide data is in sync with the knowledge Markdown', async () => {
  const {collectGuides} = await import(path.join(root, 'scripts/build-guides-data.mjs'))
  assert.deepEqual(JSON.parse(read('_data/guides.json')), collectGuides(), 'run npm run build:data')
})

test('AI Boxy links use safe HTTPS destinations and tracking', () => {
  const readme = read('README.md')
  assert.match(readme, /https:\/\/www\.ai2boxy\.com\/zh\/purchase\//)
  assert.doesNotMatch(readme, /\\&/)
  for (const file of pages) {
    const links = [...read(file).matchAll(/(https:\/\/www\.ai2boxy\.com\/zh\/purchase\/\?[^)"\s]+)/g)]
    assert.ok(links.length > 0, `${file} needs an AI Boxy purchase link`)
    for (const [, href] of links) {
      assert.match(href, /utm_source=githubpages/)
      assert.match(href, /utm_medium=(guide|article)/)
      assert.match(href, /utm_campaign=[a-z_]+/)
    }
  }
  const home = read('index.html')
  assert.match(home, /https:\/\/www\.ai2boxy\.com\/zh\/\?{{ utm }}&amp;utm_campaign=hero/)
  assert.match(home, /utm_source=githubpages&amp;utm_medium=home/)
})

test('home page presents AI Boxy, after-sales warranty and the safety boundary', () => {
  const home = read('index.html')
  assert.match(home, /AI Boxy/)
  assert.match(home, /售后质保/)
  assert.match(home, /无需提供(账号)?密码/)
  assert.match(read('README.md'), /不要把 ChatGPT 密码、验证码/)
})

test('README bold labels render correctly on GitHub', () => {
  assert.doesNotMatch(read('README.md'), /(?:^|\n)(?:-\s+)?\*\*[^*\n]+\*\*[^\s\n]/)
})

test('README explains card declines and AI Boxy support', () => {
  const markdown = read('README.md')
  assert.match(markdown, /卡片触发支付风控/)
  assert.match(markdown, /扣款被拒/)
  assert.match(markdown, /AI Boxy 在线客服/)
  assert.match(markdown, /及时回复并继续跟进处理/)
})

test('pages avoid competitor branding, other brands and forbidden dash characters', () => {
  for (const file of ['README.md', ...pages, ...templates]) {
    const html = read(file)
    assert.doesNotMatch(html, /PayAI/i)
    assert.doesNotMatch(html, /wild\s*gpt/i, `${file} must not mention another brand`)
    assert.doesNotMatch(html, /[—–]/)
  }
})

test('no self-discrediting or risk disclaimers anywhere in the public content', () => {
  const banned = /代充不是官方购买渠道|账号有一定风险|零风险|不保证有效|不保证|不是官方规定|无隶属关系|独立第三方|不代表 OpenAI|背书|不承诺/
  const files = ['README.md', ...pages, ...templates, 'knowledge/README.md',
    ...fs.readdirSync(path.join(root, 'knowledge')).filter((f) => f.endsWith('.md')).map((f) => `knowledge/${f}`),
    ...fs.readdirSync(path.join(root, 'knowledge/guides')).map((f) => `knowledge/guides/${f}`)]
  for (const file of files) assert.doesNotMatch(read(file), banned, file)
})

test('sitemap and robots point to every public page', () => {
  const sitemap = read('sitemap.xml')
  for (const file of pages) assert.match(sitemap, new RegExp(`/${file.replaceAll('.', '\\.')}</loc>`))
  assert.match(sitemap, /{{ base }}\/chatgpt-plus-guide\.html/)
  assert.match(sitemap, /{%- for g in site\.data\.guides %}[\s\S]*{{ base }}\/guides\/{{ g\.slug }}\//)
  assert.match(read('_config.yml'), /^url: https:\/\/aiboxy49-boop\.github\.io$/m)
  assert.match(read('robots.txt'), new RegExp(`Sitemap: ${BASE.replaceAll('.', '\\.')}/sitemap\\.xml`))
})
