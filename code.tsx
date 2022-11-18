const { widget } = figma
const { Frame } = widget

figma.showUI(__html__, { themeColors: true })

figma.ui.onmessage = () => {
  figma.createNodeFromJSXAsync(<Frame width={100} height={100} fill="#000" />)
}
