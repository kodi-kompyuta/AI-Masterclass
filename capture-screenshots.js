const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 }, // iPhone X size
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  console.log('📸 Capturing screenshots of AI Masterclass UI...\n');

  // Navigate to the app
  await page.goto('http://localhost:8080/');
  await page.waitForTimeout(1000);

  // 1. Hero Section
  console.log('1️⃣ Capturing Hero Section...');
  await page.screenshot({
    path: 'screenshot-1-hero.png',
    fullPage: false
  });

  // 2. Scroll to modules section
  console.log('2️⃣ Capturing Modules Section...');
  await page.evaluate(() => {
    document.getElementById('modules').scrollIntoView({ behavior: 'smooth' });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'screenshot-2-modules.png',
    fullPage: false
  });

  // 3. Open Module 1
  console.log('3️⃣ Capturing Lesson Modal...');
  await page.click('.module-card[data-module="1"]');
  await page.waitForTimeout(800);
  await page.screenshot({
    path: 'screenshot-3-lesson.png',
    fullPage: false
  });

  // 4. Open Quiz
  console.log('4️⃣ Capturing Quiz Interface...');
  await page.click('button.btn-primary:has-text("Take Quiz")');
  await page.waitForTimeout(800);
  await page.screenshot({
    path: 'screenshot-4-quiz.png',
    fullPage: false
  });

  // 5. Select an answer to show interaction
  console.log('5️⃣ Capturing Quiz with Answer Selected...');
  await page.click('.answer-option:first-child');
  await page.waitForTimeout(500);
  await page.screenshot({
    path: 'screenshot-5-quiz-answered.png',
    fullPage: false
  });

  console.log('\n✅ All screenshots captured successfully!');
  console.log('📁 Screenshots saved in current directory\n');

  await browser.close();
})();
