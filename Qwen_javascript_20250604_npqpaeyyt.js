// Register Form Validation
if (document.getElementById("registerForm")) {
  const form = document.getElementById("registerForm");
  const message = document.getElementById("message");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !password || !confirmPassword) {
      message.textContent = "يرجى ملء جميع الحقول.";
      message.style.color = "red";
      return;
    }

    if (password.length < 6) {
      message.textContent = "كلمة المرور يجب أن تكون 6 أحرف على الأقل.";
      message.style.color = "red";
      return;
    }

    if (password !== confirmPassword) {
      message.textContent = "كلمتا المرور غير متطابقتين.";
      message.style.color = "red";
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    message.textContent = "تم إنشاء الحساب بنجاح!";
    message.style.color = "green";

    setTimeout(() => window.location.href = "dashboard.html", 1000);
  });
}

// Login Form Validation
if (document.getElementById("loginForm")) {
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      loginMessage.textContent = "لا يوجد مستخدم مسجل.";
      loginMessage.style.color = "red";
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      loginMessage.textContent = "تم تسجيل الدخول بنجاح!";
      loginMessage.style.color = "green";
      localStorage.setItem("isLoggedIn", "true");

      setTimeout(() => window.location.href = "dashboard.html", 1000);
    } else {
      loginMessage.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
      loginMessage.style.color = "red";
    }
  });
}

// Dashboard User Info
if (document.getElementById("userInfo")) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (isLoggedIn && storedUser) {
    document.getElementById("userInfo").innerHTML = `
      <p><strong>مرحبًا:</strong> ${storedUser.name}</p>
      <p><strong>بريدك الإلكتروني:</strong> ${storedUser.email}</p>
    `;
  } else {
    window.location.href = "login.html";
  }
}

// Logout Function
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}