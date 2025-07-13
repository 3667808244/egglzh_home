function search_log() {
    console.log('search_log called');
    const logId = document.getElementById('log_id').value.trim();
    if (logId) {
        const logElement = document.getElementById(logId);
        if (logElement) {
            logElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('日志ID不存在');
        }
    } else {
        alert('请输入日志ID');
    }
}