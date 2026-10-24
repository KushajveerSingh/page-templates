'use strict';

const total_pages = 2;

const fragment = document.createDocumentFragment();
const template_row_ele = document.getElementById('template_row');
const template_header_ele = document.getElementById('template_header');
const template_row_header_ele = document.getElementById('template_row_header');

for (let page_num = 1; page_num <= total_pages; page_num++) {
  const is_right_page = page_num % 2 === 1;

  const page_ele = document.createElement('div');
  page_ele.className = 'page';

  if (is_right_page) {
    const header_ele = template_header_ele.content.cloneNode(true);
    page_ele.append(header_ele);
  }

  if (template_row_header_ele) {
    const row_header_ele = template_row_header_ele.content.cloneNode(true);
    page_ele.append(row_header_ele);
  }

  let rows_per_page = is_right_page ? 36 : 37;
  if (template_row_header_ele) {
    rows_per_page -= 1;
  }

  for (let row_num = 1; row_num <= rows_per_page; row_num++) {
    const row_ele = template_row_ele.content.cloneNode(true);
    page_ele.append(row_ele);
  }

  fragment.append(page_ele);
}

document.getElementById('container').append(fragment);
