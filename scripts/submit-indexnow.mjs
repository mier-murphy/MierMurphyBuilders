import fs from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const SITE_URL = "https://www.mierandmurphybuilders.com";
const INDEXNOW_URL = "https://api.indexnow.org/indexnow";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const SITEMAP_PATH = "./public/sitemap.xml";

console.log("IndexNow script started.");

async function main() {
  if (!INDEXNOW_KEY) {
    throw new Error("INDEXNOW_KEY is missing from .env");
  }

  console.log("Key loaded:", true);
  console.log("Key length:", INDEXNOW_KEY.length);

  const sitemap = await fs.readFile(SITEMAP_PATH, "utf8");

  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => match[1].trim())
    .filter((url) => url.startsWith(`${SITE_URL}/`));

  console.log(`Found ${urls.length} URLs in sitemap.`);

  if (urls.length === 0) {
    throw new Error("No URLs found.");
  }

  const payload = JSON.stringify({
    host: "www.mierandmurphybuilders.com",
    key: INDEXNOW_KEY,
    urlList: urls,
  });

  console.log(`Submitting ${urls.length} URLs...`);
  console.log("Using curl.exe...");

  const { stdout, stderr } = await execFileAsync(
    "curl.exe",
    [
      "-s",
      "-w",
      "\nHTTP_STATUS:%{http_code}",
      "-X",
      "POST",
      INDEXNOW_URL,
      "-H",
      "Content-Type: application/json; charset=utf-8",
      "-d",
      payload,
    ],
    {
      maxBuffer: 1024 * 1024,
      windowsHide: true,
    }
  );

  console.log("IndexNow response:");
  console.log(stdout);

  if (stderr) {
    console.error("curl stderr:");
    console.error(stderr);
  }

  const match = stdout.match(/HTTP_STATUS:(\d+)/);

  if (!match) {
    throw new Error("Could not determine HTTP status.");
  }

  const status = Number(match[1]);

  if (status < 200 || status >= 300) {
    throw new Error(`IndexNow returned HTTP ${status}`);
  }

  console.log("✅ IndexNow submission successful.");
}

main().catch((error) => {
  console.error("❌ IndexNow error:");
  console.error(error);
  process.exit(1);
});