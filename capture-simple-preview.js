const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });

  // Desktop view
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  console.log('📸 Capturing Resume Optimizer Landing Page Preview...\n');

  // Navigate to the landing page
  await page.goto('http://localhost:8080/resume-optimizer-landing.html');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);

  // 1. Hero section only (viewport capture)
  console.log('1️⃣ Capturing Hero Section...');
  await page.screenshot({
    path: 'landing-preview.png',
    fullPage: false,
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });

  console.log('\n✅ Screenshot captured successfully!');
  console.log('📁 Screenshot: landing-preview.png\n');

  await browser.close();
})();
