const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  // Desktop view
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const desktopPage = await desktopContext.newPage();

  console.log('📸 Capturing Resume Optimizer Landing Page Screenshots...\n');

  // Navigate to the landing page
  await desktopPage.goto('http://localhost:8080/resume-optimizer-landing.html');
  await desktopPage.waitForTimeout(1000);

  // 1. Full page screenshot (desktop)
  console.log('1️⃣ Capturing Full Desktop View...');
  await desktopPage.screenshot({
    path: 'landing-preview-desktop.png',
    fullPage: true
  });

  // 2. Hero section only
  console.log('2️⃣ Capturing Hero Section...');
  const heroSection = await desktopPage.$('.hero');
  await heroSection.screenshot({
    path: 'landing-preview-hero.png'
  });

  // 3. Features section
  console.log('3️⃣ Capturing Features Section...');
  await desktopPage.evaluate(() => {
    document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
  });
  await desktopPage.waitForTimeout(800);
  const featuresSection = await desktopPage.$('#features');
  await featuresSection.screenshot({
    path: 'landing-preview-features.png'
  });

  // Mobile view
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 }, // iPhone X
    deviceScaleFactor: 2,
  });
  const mobilePage = await mobileContext.newPage();

  console.log('4️⃣ Capturing Mobile View...');
  await mobilePage.goto('http://localhost:8080/resume-optimizer-landing.html');
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({
    path: 'landing-preview-mobile.png',
    fullPage: true
  });

  console.log('\n✅ All screenshots captured successfully!');
  console.log('📁 Screenshots:');
  console.log('   - landing-preview-desktop.png (full page)');
  console.log('   - landing-preview-hero.png (hero section)');
  console.log('   - landing-preview-features.png (features)');
  console.log('   - landing-preview-mobile.png (mobile view)\n');

  await browser.close();
})();
