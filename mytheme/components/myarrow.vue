<template>
  <svg class="w-full h-full" style="position: absolute" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g>
      <defs>
        <marker id="775d5fd9-02b4-644d-2905-eb557f04049b" viewBox="0 -5 10 10" refX="5" refY="0" markerWidth="4" markerHeight="4" orient="auto">
          <path fill="#ff595e" d="M0,-5L10,0L0,5"></path>
        </marker>
      </defs>
      <line fill="transparent" stroke="#ff595e" stroke-width="4" stroke-linecap="round" x1="234.08" y1="170.40" x2="472.94" y2="162.16" marker-end="url(#775d5fd9-02b4-644d-2905-eb557f04049b)"></line>
    </g>
  </svg>
</template>
<script>
export default {
  props {
    x1, y1, x2, y2
  },
  data() {
    return {
    }
  }
}
</script>

