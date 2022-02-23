<script>
import * as Vue from 'vue'
export default function render(_props, _context) {
  const context = {
    ..._context,
    props: _props,
    data: _context.attr,
    children: _context.slots,
  }
  const { icon, title } = context.props
  const vnodes = []

  if (icon) {
    if (icon.includes('el-icon')) {
      vnodes.push(<i class={[icon, 'sub-el-icon']} />)
    } else {
      vnodes.push(<svg-icon icon-class={icon} />)
    }
  }

  if (title) {
    vnodes.push(<span slot="title">{title}</span>)
  }
  return vnodes
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
