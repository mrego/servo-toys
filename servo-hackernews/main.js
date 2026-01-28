import { Key, remote } from 'webdriverio'

let search_term = process.argv[2]
if (search_term == undefined)
  search_term = 'servo'
console.log(search_term)

const browser = await remote({
    hostname: '127.0.0.1',
    port: 7002,
    capabilities: {  }
})

await browser.navigateTo('https://news.ycombinator.com/')

const search_input = await browser.$('input[name="q"]')
await search_input.waitForDisplayed()
await search_input.setValue(search_term)
await browser.keys(Key.Enter)

const sort_select = await browser.$('#downshift-1-label')
await sort_select.waitForDisplayed()
await sort_select.click()

const date_select = await browser.$('#downshift-1-item-1 > button')
await date_select.waitForDisplayed()
await date_select.click()

const last_story = await browser.$('.Story_title:first-child')
await last_story.waitForDisplayed()
const text = await last_story.getText()
console.log("\n\nMore recent story")
console.log(text)
console.log("\n\n")

const stories = await browser.$$('.Story_title')
let stories_text = []
for (let i=0; i < Math.min(10, stories.length); i++) {
  const story = stories[i]
  const text = await story.getText()
  stories_text.push(text)
}

console.log("\n\nMore recent top 10 stories")
console.log(stories_text)
console.log("\n\n")

await browser.deleteSession()

