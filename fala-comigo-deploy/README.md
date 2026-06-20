# Fala Comigo — Deployment Guide
## Get your own Portuguese learning app live in ~15 minutes

---

## STEP 1: Get Your Anthropic API Key (5 minutes)

This is what powers Bia (the AI conversation partner).

1. Open **https://console.anthropic.com** in your browser
2. Click **"Sign Up"** and create an account (email + password)
3. Once logged in, click **"Settings"** in the left sidebar
4. Click **"API Keys"**
5. Click **"Create Key"**
6. Give it a name like "fala-comigo" and click **Create**
7. **COPY THE KEY** — it starts with `sk-ant-...` — save it somewhere safe (notepad, notes app). You won't be able to see it again.
8. Now click **"Plans & Billing"** in the left sidebar
9. Click **"Add credits"** and add **$5.00**
   - This lasts 2-3 months at 30 min/day usage
   - The app costs ~$1-2/month in API calls on Sonnet

---

## STEP 2: Upload the Code to GitHub (5 minutes)

GitHub stores your code so Vercel can deploy it.

1. Open **https://github.com** in your browser
2. Create an account if you don't have one (it's free)
3. Once logged in, go to **https://github.com/new**
4. In "Repository name" type: **fala-comigo**
5. Leave it as "Public" (this is fine — your API key is NOT in the code)
6. Click the green **"Create repository"** button
7. On the next page, you'll see a blue link that says **"uploading an existing file"** — click it
8. **Unzip the fala-comigo-deploy.zip** file on your computer
9. Open the unzipped folder so you can see all the files inside
10. **Select ALL the files and folders** inside `fala-comigo-deploy` and **drag them** into the GitHub upload area
    - You should see: `src/`, `api/`, `public/`, `package.json`, `index.html`, `vite.config.js`, `vercel.json`, `.env.example`, `.gitignore`, `README.md`
11. Scroll down and click the green **"Commit changes"** button
12. Done — your code is on GitHub.

---

## STEP 3: Deploy on Vercel (5 minutes)

Vercel hosts your app for free and gives you a URL.

1. Open **https://vercel.com** in your browser
2. Click **"Sign Up"** → choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. Once in the Vercel dashboard, click **"Add New..."** → **"Project"**
5. You should see your `fala-comigo` repository listed — click **"Import"**
6. **IMPORTANT — Before clicking Deploy, expand "Environment Variables"**
7. In the **"Key"** field, type exactly: `ANTHROPIC_API_KEY`
8. In the **"Value"** field, paste your API key (the `sk-ant-...` you saved earlier)
9. Click **"Add"**
10. Now click **"Deploy"**
11. Wait about 60 seconds while it builds
12. You'll see a **"Congratulations!"** screen with your URL

Your app is now live at something like: **https://fala-comigo.vercel.app**

---

## STEP 4: Use It!

- Open the URL on your **phone** or **computer**
- On iPhone: tap Share → "Add to Home Screen" — it works like an app
- On Android: tap the three dots → "Add to Home Screen"
- All your progress saves automatically in your browser
- The exercises, flashcards, and pronunciation guide work with **zero API cost**
- Bia (chat) and pronunciation drill feedback use the API (~$1-2/month)

---

## Troubleshooting

**"Couldn't reach Bia" error when chatting:**
- Go to your Vercel dashboard → your project → Settings → Environment Variables
- Make sure `ANTHROPIC_API_KEY` is set correctly
- Click "Redeploy" from the Deployments tab

**App loads but looks broken:**
- Make sure you uploaded ALL files including the `src/` and `api/` folders
- Check that `vercel.json` is in the root (not inside a subfolder)

**Want to update the app later:**
- Edit files on GitHub → Vercel auto-redeploys in ~60 seconds

---

## Costs Summary

| What | Cost |
|------|------|
| GitHub | Free |
| Vercel hosting | Free |
| Anthropic API (~30 min/day) | ~$1-2/month |
| **Total** | **~$1-2/month** |

Initial $5 API credit purchase lasts 2-3 months.

---

## Adding More Content Later

The app is built to expand. Come back to Claude and ask for:
- More vocabulary (scale toward 1500+ words)
- New levels and units
- Grammar lessons
- Sentence-building exercises
- Reading comprehension
- Cultural notes and tips

The architecture supports it — we just add more data to the same app.
