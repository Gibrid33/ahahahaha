function solve() {
    // Про x=a^2 + b * 10 - 20 кнопка
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    document.getElementById('otvet').innerText = a**2 + b * 10 - 20
}