function search() {
    console.group('Saerch called');
    const Id = document.getElementById('log_id').value.trim();
    if (Id) {
        const Element = document.getElementById(Id);
        if (Element) {
            Element.scrollIntoView({ behavior: 'smooth' });
            console.log('Turing done')
        } else {
            console.warn('Unknown item');
            alert('搜索项不存在');
        }
    } else {
        alert('请输入搜索项');
        console.warn('Empty value')
    }
    console.groupEnd();
}