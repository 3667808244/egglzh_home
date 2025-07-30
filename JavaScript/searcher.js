function search() {
    console.log('search_log called');
    const Id = document.getElementById('log_id').value.trim();
    if (Id) {
        const Element = document.getElementById(Id);
        if (Element) {
            Element.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('搜索项不存在');
        }
    } else {
        alert('请输入搜索项');
    }
}