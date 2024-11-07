const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(inputs => inputs.addEventListener('change', handleUpdate));
inputs.forEach(inputs => inputs.addEventListener('mousemove', handleUpdate));