const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
  const chapter = input.value.trim();

  if (chapter !== '') {
    const normalized = chapter.toLowerCase();

    const isDuplicate = Array.from(list.children).some(
      (item) => item.dataset.chapter === normalized
    );

    if (isDuplicate) {
      alert(`"${chapter}" is already in your list.`);
      input.select();
      return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.dataset.chapter = normalized;
    li.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    input.value = '';
  }
  input.focus();
});