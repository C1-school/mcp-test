// 습관 완료 버튼 클릭 이벤트
document.addEventListener('DOMContentLoaded', function() {
    const completeButtons = document.querySelectorAll('.btn-complete');
    
    completeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const habitCard = this.closest('.habit-card');
            const habitName = habitCard.querySelector('.habit-name').textContent;
            const progressFill = habitCard.querySelector('.progress-fill');
            const progressText = habitCard.querySelector('.progress-text');
            
            // 버튼 상태 변경
            if (this.textContent === '완료하기' && !this.disabled) {
                this.textContent = '완료됨';
                this.style.backgroundColor = '#28a745';
                this.disabled = true;
                
                // 진행률 업데이트
                const currentWidth = parseFloat(progressFill.style.width) || 0;
                if (currentWidth < 100) {
                    const newWidth = Math.min(currentWidth + 14.28, 100);
                    progressFill.style.width = newWidth + '%';
                    
                    // 진행률 텍스트 업데이트
                    const progressMatch = progressText.textContent.match(/(\d+)\/7일/);
                    if (progressMatch) {
                        const currentDays = parseInt(progressMatch[1]);
                        const newDays = Math.min(currentDays + 1, 7);
                        progressText.textContent = `이번 주 ${newDays}/7일 완료`;
                    }
                }
                
                // 완료 메시지
                console.log(`${habitName} 습관이 완료되었습니다!`);
            }
        });
    });

    // 로그인 버튼 클릭 이벤트
    const loginButton = document.querySelector('.btn-login');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            alert('로그인 페이지로 이동합니다.');
            // 실제로는 로그인 페이지로 리다이렉트
            // window.location.href = '/login';
        });
    }

    // 회원가입 버튼 클릭 이벤트
    const signupButton = document.querySelector('.btn-signup');
    if (signupButton) {
        signupButton.addEventListener('click', function() {
            alert('회원가입 페이지로 이동합니다.');
            // 실제로는 회원가입 페이지로 리다이렉트
            // window.location.href = '/signup';
        });
    }

    // 네비게이션 메뉴 클릭 이벤트
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const menuText = this.textContent;
            console.log(`${menuText} 메뉴 클릭됨`);
            // 실제로는 해당 페이지로 이동
        });
    });

    // 로고 클릭 이벤트
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = '/';
        });
    }
});
