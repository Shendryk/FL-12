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



function derevo (arr) {
 
  for (let i = 0; i < arr.length; i += 1) {
    let obj = arr[i];
    console.log(obj);
    
    if(obj.folder === true){

      let li = document.createElement('li');
      let ul = document.createElement('ul');
      ul.appendChild(li).innerHTML = obj.title;
      rootNode.appendChild(ul);

      if(obj.children !== null || obj.children !== false) {
        derevo(obj.children)
      }
    } else {
      let li = document.createElement('li');
      let ul = document.createElement('ul');
      ul.appendChild(li).innerHTML = obj.title;
      rootNode.appendChild(ul);
    }
  }
}
// rootNode.appendChild(ul);
// rootNode.appendChild(catalog);

 derevo(structure);
