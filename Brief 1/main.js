function hovered(num, limit, kind) {
  for (let i = 1; i <= limit; i += 1) {
    if (i === num) {
      continue;
    }
    document.querySelector(`#${kind}${i}`).classList.add("hovered");
  }
}

function unhovered(limit, kind) {
  for (let i = 1; i <= limit; i += 1) {
    document.querySelector(`#${kind}${i}`).classList.remove("hovered");
  }
}
