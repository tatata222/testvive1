document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    const loginButton = document.getElementById('loginButton');
    const errorMessage = document.getElementById('errorMessage');
    const loginContainer = document.getElementById('loginContainer');
    const mainContent = document.getElementById('mainContent');
    const testButton = document.getElementById('testButton');

    const CORRECT_PASSWORD = 'mysecretpassword'; // ここにパスワードを設定してください

    // 認証状態をチェック
    if (sessionStorage.getItem('authenticated') === 'true') {
        showMainContent();
    } else {
        showLoginContainer();
    }

    loginButton.addEventListener('click', function() {
        if (passwordInput.value === CORRECT_PASSWORD) {
            sessionStorage.setItem('authenticated', 'true');
            showMainContent();
        } else {
            errorMessage.style.display = 'block';
            passwordInput.value = ''; // パスワードをクリア
        }
    });

    // Enterキーでのログインを有効にする
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            loginButton.click();
        }
    });

    testButton.addEventListener('click', function() {
        alert('ボタンがクリックされました！');
    });

    function showMainContent() {
        loginContainer.style.display = 'none';
        mainContent.style.display = 'block';
    }

    function showLoginContainer() {
        loginContainer.style.display = 'block';
        mainContent.style.display = 'none';
    }
});