import '@testing-library/jest-dom/extend-expect'
import jsdom from 'jsdom'

const dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>')
global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator
global.Node = dom.window.Node
require('mutationobserver-shim')
global.MutationObserver = global.window.MutationObserver
