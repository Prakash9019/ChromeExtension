const btn = document.querySelector('.changeColorBtn');
const title = document.querySelector('.selectedColor');
// const colorValue = document.querySelector('.colorValue');

btn.addEventListener('click', async () => {
    chrome.storage.sync.get('color', ({ color }) => {
        console.log('color: ', color);
    });
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log(tab);
    title.innerHTML = tab.title;
});
