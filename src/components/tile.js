import { size } from '../config'


export default (item) => `
<div class='tile' id=${item} style="background: tomato; left: ${size}px; width: ${size}px; height: ${size}px">
  tile ${item}
</div>`

