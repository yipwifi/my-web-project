// 获取 HTML 元素
const dropdown = document.getElementById('myDropdown');
const selectBtn = document.getElementById('selectBtn');
const selectedText = document.getElementById('selectedText');
const menuItems = document.querySelectorAll('.item');

// 1. 点击选择框：切换 .open 类 (显示/隐藏列表)
selectBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // 阻止点击事件传给 document
    dropdown.classList.toggle('open');
});

// 2. 点击列表项：更新文字并关闭
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        selectedText.innerText = item.innerText; // 更新文字
        
        // 移除其他项的高亮，给当前项加高亮
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        dropdown.classList.remove('open'); // 选择后关闭列表
    });
});

// 3. 点击页面其他地方：自动关闭列表
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});