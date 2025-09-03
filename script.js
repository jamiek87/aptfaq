document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // 현재 클릭한 항목이 이미 열려있는지 확인
            const isActive = item.classList.contains('active');
            // 모든 faq 항목의 'active' 클래스 제거
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            // 클릭한 항목이 닫혀있었다면 'active' 클래스 추가하여 펼치기
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});