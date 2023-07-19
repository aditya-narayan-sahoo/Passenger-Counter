let count = 0
function increment() {
    count += 1
    document.getElementById("count-el").textContent = count
}
function save() {
    let counter = count + " - "
    document.getElementById("save-el").textContent += counter
    console.log(count)
    document.getElementById("count-el").textContent = 0
    count = 0
}