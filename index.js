const textBox=document.getElementById('text-box')
const addButton=document.getElementById('add-button')
const todoArea=document.getElementById('todo-area')

let count=0;

const user={
  id:'',
  name:'',
  email:'',
};

const users=[
  {
    id:'1',
    name:'matsumoto',
    email:'softbank.jp',
  },
  {
    id:'2',
    name:'matsumoto',
    email:'softbank.jp',
  },
  {
    id:'3',
    name:'matsumoto',
    email:'softbank.jp',
  }
];

addButton.onclick=()=>{
  const id = count;
  console.log(textBox.value);
  const todoElement = `<p>${textBox.value}<button id="detete-${id}">delete</button></p>`;
  todoArea.insertAdjacentHTML('afterbegin', todoElement);

  const deleteButton=document.getElementById(`detete-${id}`);
  const parent=deleteButton.parentNode;
  deleteButton.onclick=()=>{
    console.log(parent);
    parent.remove();
  }

  count++;
}