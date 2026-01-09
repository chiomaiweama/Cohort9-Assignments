const continents = ['Asia', 'Africa', 'North America', 'South America', 'Antarctia', 'Europe', 'Australia'];
const continentList = document.getElementById('continentList');
const continentForm = document.getElementById('continentForm');
const continentInput = document.getElementById('continentInput');



//to convert input to title case
    function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Handle form submit (button click OR Enter key)
function handleSubmit() {
    const rawInput = continentInput.value.trim();
    if (!rawInput) {
        alert('Please enter a continent!');
        return;
    }

    const continentName = toTitleCase(rawInput);

    if (!continents.includes(continentName)) {
        alert('Please enter a valid continent!');
        return;
    }

    if (continentList.children.length >= 7) {
        alert("You've listed all 7 continents!");
        return;
    }

    const existingContinents = Array.from(
        continentList.querySelectorAll('span')
    ).map(span => span.textContent);

    if (existingContinents.includes(continentName)) {
        alert('This continent is already listed!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${continentName}</span>
            <button class="ml-3 border border-red-600 rounded-md px-1 cursor-pointer" style="height:26px;">
                <ion-icon name="close" class="text-2xl text-red-600"></ion-icon>
            </button>
        </div>
    `;

    continentList.appendChild(li);
    continentInput.value = '';
}

// Form submit (Enter + button)
continentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
});

// ✅ ONE delete handler for ALL buttons (default + added)
continentList.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('button');
    if (!deleteBtn) return;

    const listItem = deleteBtn.closest('li');
    const continentName = listItem.querySelector('span').textContent;

    const isConfirmed = confirm(
        `Are you sure you want to delete ${continentName}?`
    );

    if (isConfirmed) {
        listItem.remove();
    }
});
