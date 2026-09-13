const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const root = path.resolve(__dirname,'..')

test('README links to the public GitHub knowledge library without replacing existing guides',()=>{
  const readme = fs.readFileSync(path.join(root,'README.md'),'utf8')
  assert.match(readme,/https:\/\/github.com\/aiboxy49-boop\/chatgpt-plus-cn-guide\/tree\/main\/knowledge/)
  assert.match(readme,/方法一/)
})

test('knowledge summaries have canonical article links and contain no credential or app files',()=>{
  const index = fs.readFileSync(path.join(root,'knowledge/README.md'),'utf8')
  const files = fs.readdirSync(path.join(root,'knowledge/guides'))
  assert.ok(files.length>=8)
  for(const file of files){
    assert.match(file,/^[a-z0-9-]+\.md$/)
    assert.ok(index.includes(`guides/${file}`))
    const content=fs.readFileSync(path.join(root,'knowledge/guides',file),'utf8')
    assert.match(content,/https:\/\/www.ai2boxy.com\/zh\/guides\/[a-z0-9-]+\/\?utm_source=github&/)
    assert.doesNotMatch(content,/(?:github_pat_|ghp_)[A-Za-z0-9_]{20,}|BEGIN.*PRIVATE KEY|MANAGE_API_SHARED_SECRET|<script/i)
    assert.doesNotMatch(content,/\\&/)
  }
})
