
export default function updateMdlJs(targetNode) {
  const mdlJsNodes = targetNode.querySelectorAll('[class*="mdl-js-"]:not(.is-upgraded)');
  mdlJsNodes.forEach(node => componentHandler.upgradeElement(node));
}
