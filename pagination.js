const results = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10',
  'Item 11',
  'Item 12',
  'Item 13',
  'Item 14',
  'Item 15',
  'Item 16',
  'Item 17',
  'Item 18',
];

const listElemets = document.getElementById('list');
const paginationElements = document.getElementById('pagination');

let currentPage = 1;
const rowsPerPage = 2;
let rows = 3;
const window = 5;

function displayList(items, wrapper, rowsPerPage, page) {
  wrapper.innerHTML = '';
  page--;

  let start = rowsPerPage * page;
  let end = start + rowsPerPage;
  let paginatedItems = results.slice(start, end);
  console.log(paginatedItems);
  for (let i = 0; i < paginatedItems.length; i++) {
    console.log(items[i]);
    let item = paginatedItems[i];

    let itemElements = document.createElement('div');
    itemElements.classList.add('item');
    itemElements.innerText = item;

    wrapper.appendChild(itemElements);
  }
}

function setUpPagination(items, wrapper, rowsPerPage) {
  wrapper.innerHTML = '';

  let pageCount = Math.ceil(items.length / rowsPerPage);

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginattionBtn(i, items);
    wrapper.appendChild(btn);
  }
}

function paginattionBtn(page, items) {
  const paginationElements = document.getElementById('pagination');
  let button = document.createElement('button');
  button.innerText = page;

  if (currentPage === page) button.classList.add('active');

  button.addEventListener('click', function () {
    currentPage = page;
    displayList(results, listElemets, rows, currentPage);

    let currentBtn = document.querySelector('.pagenumbers button.active');
    currentBtn.classList.remove('active');

    button.classList.add('active');
  });
  return button;
}

displayList(results, listElemets, rows, currentPage);
setUpPagination(results, paginationElements, rowsPerPage);
