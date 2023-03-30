var table = document.getElementById('map-table')
var x = 20
var y = 10
let cnt = 0
for (let i = 0; i < x; i++) {
  let row = document.createElement('tr')
  table.appendChild(row)
  for (let j = 0; j < y; j++) {
    let d = document.createElement('td')
    d.id = `${cnt}-${i}-${j}`
    d.classList = 'table-td'
    d.addEventListener('mouseover', onMouseover)
    d.addEventListener('mouseout', onMouseout)
    row.appendChild(d)
    cnt += 1
  }
}

function forEach2d(arr, func) {
  arr.forEach((row) => {
    row.forEach((item) => {
      func(item)
    })
  })
}

function forEachIndex(h, w, func) {
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      func(i, j)
    }
  }
}

function onMouseover(e) {
  let target = e.target.id.split('-')
  forEachIndex(x, y, (i, j) => {
    if (i != target[1] || j != target[2]) {
      let ele = document.getElementById(`${i * y + j}-${i}-${j}`)
      setColor(ele, i == target[1] || j == target[2])
    }
  })
}

function onMouseout(e) {
  let target = e.target.id.split('-')
  forEachIndex(x, y, (i, j) => {
    let ele = document.getElementById(`${i * y + j}-${i}-${j}`)
    setColor(ele, false)
  })
}

function setColor(ele, ifSet) {
  let classes = ele.className.split(' ')
  if (classes.includes('table-td-highlight')) {
    if (!ifSet) {
      let i = classes.indexOf('table-td-highlight')
      classes.splice(i, 1)
      ele.className = classes.join(' ')
    }
  } else {
    if (ifSet) {
      ele.className += ' table-td-highlight'
    }
  }
}
