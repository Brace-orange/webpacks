import queryString from 'query-string'
import { format } from  'date-fns'
import './index.scss'
import Icon from './asset/image/icon-choose-on3x.png'
import app from './app'

const obj = {
  a: '111',
  b: '222'
}

function component() {
  var element = document.createElement('div');
  const a = {
    jsons: 'aafdfdffd'
  }

  element.innerHTML = format(new Date(2014, 1, 11), 'mm/dd/yyyy') + queryString.stringify(obj)
  element.classList.add('hi');
  
  // 顺序问题，要放到上述的后面
  var image = new Image()
  image.src = Icon
  element.appendChild(image)

  return element;
}

app.a()

document.body.appendChild(component());

// const b =queryString(obj)

// export default b

