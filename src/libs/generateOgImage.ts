import * as playwright from 'playwright-aws-lambda';
import { getAbsoluteURL } from 'src/libs/getAbsoluteUrl';

export const generateOgImage = async (slug: string) => {
    // Start the browser with the AWS Lambda wrapper (playwright-aws-lambda)
    const browser = await playwright.launchChromium({ headless: true });

    // Create a page with the Open Graph image size best practise
    const page = await browser.newPage({
        viewport: {
            width: 1200,
            height: 630
        }
    });
    // Generate the full URL out of the given path (GET parameter)
    const url = getAbsoluteURL(`/post-image?slug=${slug}` || "")

    console.log("🚀 ~ file: generateOgImage.ts ~ line 17 ~ generateOgImage ~ url", url)

    await page.goto(url, {
        waitUntil: 'networkidle',
        timeout: 15 * 1000
    })
    const data = await page.screenshot({
        type: "png"
    })
    await browser.close()
    // Set the s-maxage property which caches the images then on the Vercel edge

    return data
}