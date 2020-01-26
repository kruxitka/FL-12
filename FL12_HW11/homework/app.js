const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

function buildList(tree, root) {
  const folderList = document.createElement('ul'); // ul
  root.appendChild(folderList);
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].folder === true) {
      const item = document.createElement('li'); //li
      const text = document.createElement('p');
      item.setAttribute('class', 'folder')
      const icon = document.createElement('i');
      const span = document.createElement('span')
      icon.setAttribute('class', 'material-icons md-25');
      icon.textContent = 'folder'
      icon.textContent = item.getAttribute('class')
      text.appendChild(span)
      span.appendChild(icon)
      const title = document.createTextNode(tree[i].title);
      text.appendChild(title);
      folderList.appendChild(item);
      item.appendChild(text)
      item.addEventListener('click', function () {
        item.classList.toggle('folder-open');
        event.stopImmediatePropagation();
      })
      if (tree[i].children) {
        buildList(tree[i].children, item);
      } else {
        const emptyFolder = document.createElement('div');
        const emptyText = document.createTextNode('Folder is empty');
        emptyFolder.setAttribute('class', 'empty')
        emptyFolder.appendChild(emptyText);
        item.appendChild(emptyFolder);
      }
    } else {
      const fileItem = document.createElement('li')
      const file = document.createElement('p');
      fileItem.setAttribute('class', 'item')
      const icon = document.createElement('i');
      const span = document.createElement('span')
      icon.setAttribute('class', 'material-icons md-18');
      icon.textContent = 'insert_drive_file'
      fileItem.appendChild(file)
      file.appendChild(span)
      span.appendChild(icon)
      const titleItem = document.createTextNode(tree[i].title)
      file.appendChild(titleItem)
      folderList.appendChild(fileItem)
      file.addEventListener('click', function () {
        event.stopImmediatePropagation();
      })
    }
  }
}

buildList(structure, rootNode);
