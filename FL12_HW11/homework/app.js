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

// Todo: your code goes here
for (let i = 0; i < structure.length; i += 1) {
  let obj = structure[i];
  //   console.log(obj.folder);
  // if (obj.folder = true){

  //   console.log(`${obj.folder}`);
  // }
  for (let key in obj) {
    let value = obj[key];
    console.log(obj)
    console.log(`key: ${key}, value: ${value}`);
    console.log(`${key}: ${value}`);
    console.log(obj.folder)
    //     if(obj.folder)

    // }
  }
}