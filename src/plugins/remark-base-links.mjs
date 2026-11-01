// Les pages écrivent leurs liens internes en absolu (`/dashboard/...`) ; le site
// étant servi sous `/docs`, on préfixe ces liens au build plutôt que dans 140 fichiers.
const BASE = '/docs';

const needsBase = (url) =>
  typeof url === 'string' &&
  url.startsWith('/') &&
  !url.startsWith('//') &&
  url !== BASE &&
  !url.startsWith(`${BASE}/`);

function walk(node) {
  if (node.type === 'link' && needsBase(node.url)) node.url = BASE + node.url;
  if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
    for (const attr of node.attributes ?? []) {
      if ((attr.name === 'href' || attr.name === 'src') && needsBase(attr.value)) {
        attr.value = BASE + attr.value;
      }
    }
  }
  node.children?.forEach(walk);
}

export default function remarkBaseLinks() {
  return (tree) => walk(tree);
}
