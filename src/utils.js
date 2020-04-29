export function getEntryUrl (name) {
  if (weex.config.env.platform === 'Web') {
    return `./${name}.html`
  }
  let bundle = weex.config.bundleUrl.split('/')
  bundle.pop()
  bundle.push(`${name}.js`)
  return bundle.join('/')
}
