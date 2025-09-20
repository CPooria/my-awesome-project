document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.terminal-section');
    const cursorLine = document.querySelector('.cursor-line');
    
    // تابعی برای ایجاد تاخیر
    const delay = ms => new Promise(res => setTimeout(res, ms));

    // تابع اصلی برای تایپ کردن یک دستور
    const typeCommand = async (element) => {
        const commandText = element.getAttribute('data-command');
        element.textContent = ''; // خالی کردن محتوای اولیه
        
        for (let i = 0; i < commandText.length; i++) {
            element.textContent += commandText.charAt(i);
            await delay(Math.random() * 100 + 50); // تاخیر تصادفی برای طبیعی‌تر شدن
        }
    };

    // تابع برای اجرای انیمیشن‌ها به ترتیب
    const runAnimations = async () => {
        // یکی‌یکی روی هر بخش حرکت می‌کنیم
        for (const section of sections) {
            section.style.opacity = '1'; // بخش را نمایش بده
            const commandElement = section.querySelector('.command');
            
            await typeCommand(commandElement); // منتظر بمان تا تایپ دستور تمام شود
            
            await delay(500); // یک مکث کوتاه بعد از هر دستور
        }
        
        // در انتها، خط فرمان نهایی را با کرسر نمایش بده
        cursorLine.style.opacity = '1';
    };

    // اجرای انیمیشن‌ها پس از بارگذاری کامل صفحه
    runAnimations();
});
