const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

const root = path.resolve(__dirname, '..')
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')

const pages = [
  'articles/chatgpt-plus-recharge.html',
  'articles/payment-options.html',
  'articles/account-safety.html'
]

test('publishes a core guide and three distinct long-tail articles', () => {
  assert.equal(fs.existsSync(path.join(root, 'README.md')), true)
  assert.equal(pages.filter((file) => fs.existsSync(path.join(root, file))).length, 3)
  const titles = pages.map((file) => read(file).match(/<title>(.*?)<\/title>/)?.[1])
  assert.equal(new Set(titles).size, 3)
})

test('every page has description, canonical URL, viewport, and Chinese language', () => {
  for (const file of pages) {
    const html = read(file)
    assert.match(html, /<html lang="zh-CN">/)
    assert.match(html, /name="viewport"/)
    assert.match(html, /name="description" content="[^"]{20,}"/)
    assert.match(html, /rel="canonical" href="https:\/\/aiboxy49-boop\.github\.io\/chatgpt-plus-cn-guide\//)
  }
})

test('AI Boxy links use HTTPS and source-specific UTM tracking', () => {
  for (const file of ['README.md', ...pages]) {
    const html = read(file)
    const links = [...html.matchAll(/(https:\/\/www\.ai2boxy\.com\/zh\/purchase\/\?[^)"\s]+)/g)]
    assert.ok(links.length > 0, `${file} needs an AI Boxy purchase link`)
    for (const [, href] of links) {
      assert.match(href, /utm_source=githubpages/)
      assert.match(href, /utm_medium=(guide|article)/)
      assert.match(href, /utm_campaign=[a-z_]+/)
    }
  }
})

test('home page discloses the commercial relationship and safety boundary', () => {
  const html = read('README.md')
  assert.match(html, /AI Boxy 是本指南关联的自有服务/)
  assert.match(html, /不代表 OpenAI、Anthropic 或 Apple/)
  assert.match(html, /不要把 ChatGPT 密码、验证码/)
})

test('pages avoid copied competitor branding and forbidden dash characters', () => {
  for (const file of ['README.md', ...pages]) {
    const html = read(file)
    assert.doesNotMatch(html, /PayAI/i)
    assert.doesNotMatch(html, /[—–]/)
  }
})

test('sitemap and robots point to every public page', () => {
  const sitemap = read('sitemap.xml')
  const robots = read('robots.txt')
  for (const file of pages) {
    const suffix = file
    assert.match(sitemap, new RegExp(`chatgpt-plus-cn-guide/${suffix.replaceAll('.', '\\.')}`))
  }
  assert.match(robots, /Sitemap: https:\/\/aiboxy49-boop\.github\.io\/chatgpt-plus-cn-guide\/sitemap\.xml/)
})
