import logo from './logo.svg';
import './App.css';
import './Component/icon.css'
import styled from 'styled-components';

// import Tree from './Component/Tree/Tree'
import Filecomp from './Component/File/Filecomp'
import Folder from './Component/Folder/Folder'

const StyledTree = styled.div`
line-height: 1.5;
`;



const structure = [
  {
    type: "folder",
    name: "Vice Chancellor: Dr. Ahmed",
    childrens: [
      {
        type: "folder",
        name: "Faculty Head: Dr. Farin",
        childrens: [
          {
            type: 'folder',
            name: 'Department Head: Dr. Mim',
            childrens: [
              {
                type: 'folder',
                name: 'Professor',
                childrens: [
                  {
                    type: 'folder',
                    name: 'Dr. Ahmed',
                    childrens: [
                      {
                        type: 'file',
                        name: 'Vice chancellor'
                      }
                    ]
                  },
                  {
                    type: 'folder',
                    name: 'Dr. Farin',
                    childrens: [
                      {
                        type: 'file',
                        name: 'Faculty Head'
                      }
                    ]
                  },
                  {
                    type: 'folder',
                    name: 'Dr. Mim',
                    childrens: [
                      { type: 'file', name: 'Department Head' },
                      { type: 'file', name: 'Admission in charge' }
                    ]
                  }
                ]
              },
              {
                type: 'folder',
                name: 'Associate Professor',
                childrens: [
                  {
                    type: 'folder',
                    name: 'Dr. Ratan',
                    childrens: [ { type: 'file', name: 'students welfare in charge' } ]
                  },
                  { type: 'file', name: 'Dr. Mason' },
                  {
                    type: 'folder',
                    name: 'Mr. Samim',
                    childrens: [ { type: 'file', name: 'students welfare in charge' } ]
                  },
                  { type: 'file', name: 'Mr. Rahim' }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'folder',
        name: 'Students welfare in charge',
        childrens: [
          { type: 'file', name: 'Dr. Ratan' },
          { type: 'file', name: 'Mr. Samin' }
        ]
      },
      {
        type: 'folder',
        name: 'Admission in charge',
        childrens: [
          { type: 'file', name: 'Dr. Mim' },
          { type: 'file', name: 'Mr. Yatin' }
        ]
      }
    ]
  }
];

const TreeRecursive = ({ data }) => {
  // loop through the data
  return data.map(item => {
    // if its a file render <File />
    if (item.type === 'file') {
      return <Filecomp name={item.name} />;
    }
    // if its a folder render <Folder />
    if (item.type === 'folder') {
      return (
        <Folder name={item.name}>
          {/* Call the <TreeRecursive /> component with the current item.childrens */}
          <TreeRecursive data={item.childrens} />
        </Folder>
      );
    }
  });
};

const Tree = ({ data, children }) => {
  const isImperative = data && !children;

  return <StyledTree>{isImperative ? <TreeRecursive data={data} /> : children}</StyledTree>;
};

Tree.File = Filecomp;
Tree.Folder = Folder;

function App() {
  return (
    <div className="App">
      <Tree data={structure} />
    </div>
  );
}

export default App;
