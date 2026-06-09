# 🎵 Music Playlist Customization Guide

## Overview
Your monthsary website now includes a fully functional music player with a customizable playlist! Follow this guide to add your own songs and images.

---

## 📋 Table of Contents
1. [How the Music Player Works](#how-the-music-player-works)
2. [Adding Your Own Music](#adding-your-own-music)
3. [Changing Album Images](#changing-album-images)
4. [Common Issues & Troubleshooting](#common-issues--troubleshooting)

---

## How the Music Player Works

### Components:
- **Music Player Section** (HTML) - Located in `index.html`
- **Styling** (CSS) - Located in `styles.css`
- **Functionality** (JavaScript) - Located in `script.js`

### Features:
✅ Play/Pause button  
✅ Next/Previous song navigation  
✅ Progress bar with time tracking  
✅ Volume control  
✅ Album artwork display  
✅ Vinyl record animation (spins while playing)  
✅ Interactive playlist with clickable songs  
✅ Auto-play next song when current ends  

---

## Adding Your Own Music

### Step 1: Prepare Your Music Files

You have **two options**:

#### **Option A: Host Music Online (RECOMMENDED)**
- Upload your music files to a free hosting service:
  - **Imgbb** (supports audio): https://imgbb.com
  - **Firebase Storage**: https://firebase.google.com
  - **AWS S3**: https://aws.amazon.com/s3/
  - **Cloud Drive** (Google Drive, Dropbox) - get shareable link
  - **Sound hosting** (SoundCloud, Bandcamp)

- Formats supported:
  - MP3 ✓
  - WAV ✓
  - OGG ✓
  - M4A ✓

#### **Option B: Store Locally (Advanced)**
- Create a `music` folder in your project directory
- Place MP3 files in that folder
- Update paths (see Step 2)

---

### Step 2: Edit the Playlist in `script.js`

Open `script.js` and find the playlist array (near the top of the file):

```javascript
const playlist = [
    {
        title: "Our Special Song",
        artist: "Your Favorite Artist",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        image: "https://via.placeholder.com/300x300/a8d5ba/ffffff?text=Your+Song+1",
        duration: 360
    },
    // ... more songs
];
```

### Step 3: Replace Each Song Entry

#### For Each Song, Update:

**`title`** - Song name
```javascript
title: "Your Love Song",
```

**`artist`** - Artist/creator name
```javascript
artist: "Your Name or Band",
```

**`url`** - Link to your music file
```javascript
// Example with online hosting:
url: "https://example-music-host.com/your-song.mp3",

// Example with local file:
url: "music/your-song.mp3",
```

**`image`** - Link to album artwork (see next section)
```javascript
image: "https://example.com/album-art.jpg",
```

**`duration`** - Song length in seconds
```javascript
duration: 240  // 4 minutes
```

---

### Complete Example:

Replace the entire playlist with your songs:

```javascript
const playlist = [
    {
        title: "First Dance",
        artist: "Our Love",
        url: "https://yourdomain.com/first-dance.mp3",
        image: "https://yourdomain.com/image1.jpg",
        duration: 240
    },
    {
        title: "Our Song",
        artist: "Us Together",
        url: "https://yourdomain.com/our-song.mp3",
        image: "https://yourdomain.com/image2.jpg",
        duration: 180
    },
    {
        title: "Forever",
        artist: "Your Loves",
        url: "https://yourdomain.com/forever.mp3",
        image: "https://yourdomain.com/image3.jpg",
        duration: 300
    }
];
```

---

## Changing Album Images

### Where to Find Image URLs

1. **Use Your Own Images:**
   - Take screenshots, use your photos
   - Upload to free image hosting:
     - **Imgbb**: https://imgbb.com (free, no signup needed)
     - **Imgur**: https://imgur.com
     - **Cloudinary**: https://cloudinary.com
   - Copy the direct link

2. **Generate Placeholder Images:**
   - **Placeholder.com**: https://via.placeholder.com/300x300/color/textcolor?text=CustomText
   - **LoremPicsum**: https://picsum.photos/300/300

3. **From Your Website:**
   - Save images in a folder (e.g., `/images/`)
   - Use relative path: `images/album1.jpg`

### How to Add Images

In `script.js`, update the `image` field:

```javascript
// Online image
image: "https://example.com/my-photo.jpg",

// Local image from folder
image: "images/album-art-1.png",

// Placeholder (good for testing)
image: "https://via.placeholder.com/300x300/a8d5ba/ffffff?text=Our+Song",
```

### Image Requirements:
- Recommended size: **300x300 pixels** (square)
- Formats: JPG, PNG, GIF, WebP
- File size: Keep under 500KB for fast loading

---

## Testing Your Music Player

### Step 1: Save All Changes
- Save `script.js` after editing the playlist
- Refresh your browser (Ctrl+R or Cmd+R)

### Step 2: Check Player Functionality

1. **Audio Plays:**
   - Click the ▶ (Play) button
   - You should see the vinyl record spin
   - Button changes to ⏸ (Pause)

2. **Volume Works:**
   - Move the volume slider 🔊
   - Audio should get louder/quieter

3. **Progress Bar Works:**
   - Click/drag on the progress bar
   - Song should skip to that time

4. **Playlist Switches:**
   - Click songs in the playlist
   - Song should change and start playing

5. **Next/Previous Works:**
   - Click ⏮ and ⏭ buttons
   - Songs should change in order

---

## 🔧 Common Issues & Troubleshooting

### **Issue: Music Won't Play**

**Solution 1: Check File Format**
- Ensure your music file is in a supported format (MP3, WAV, OGG)
- Try converting to MP3 at https://www.freeconvert.com/

**Solution 2: Check URL**
- Copy the music URL into browser address bar
- It should download or play directly
- If it doesn't work in browser, it won't work in player

**Solution 3: CORS Error** (if hosting your own)
- Local files need to be on same domain
- Use online hosting instead (easier)

**Solution 4: Browser Cache**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)

---

### **Issue: Images Not Loading**

**Solution 1: Check Image URL**
- Paste image URL in new browser tab
- If image doesn't appear, URL is wrong

**Solution 2: Check File Path**
- If using local images: verify folder name is correct
- Path is relative to `index.html` location

**Solution 3: Re-upload Image**
- Try uploading to Imgbb again
- Copy new URL

---

### **Issue: Player Buttons Don't Work**

**Solution 1: Check for JavaScript Errors**
- Open browser Developer Tools (F12 or Ctrl+Shift+I)
- Look for red errors in Console tab
- Check if script.js is loaded

**Solution 2: Refresh Page**
- Fully refresh: Ctrl+Shift+R
- Close and reopen tab

---

### **Issue: Wrong Duration Displaying**

**Solution 1: Update Duration Manually**
- Count song length in seconds
- Update `duration` field in `script.js`

```javascript
// 3 minutes 45 seconds = 225 seconds
duration: 225
```

---

## 🎨 Advanced Customization

### Change Player Colors

Edit `styles.css` and modify these color variables:

```css
:root {
    --sage-green: #9caf88;      /* Primary green */
    --emerald-green: #2d5016;   /* Dark green text */
    --pastel-green: #b8e6d5;    /* Light green */
}
```

### Change Button Text/Icons

Edit these in `index.html`:

```html
<button class="player-btn" id="playBtn" title="Play/Pause">▶</button>
<button class="player-btn" id="nextBtn" title="Next Song">⏭</button>
<button class="player-btn" id="prevBtn" title="Previous Song">⏮</button>
```

### Add More Songs

Just add more objects to the `playlist` array in `script.js`:

```javascript
const playlist = [
    // ... existing songs ...
    {
        title: "New Song",
        artist: "New Artist",
        url: "https://example.com/new-song.mp3",
        image: "https://example.com/image.jpg",
        duration: 200
    }
];
```

---

## 📱 Mobile Support

The music player is **fully responsive** on mobile:
- Player adapts to smaller screens
- Touch-friendly buttons
- Playlist scrolls on small screens

---

## 🎉 Tips for Best Experience

1. **Keep songs under 5MB** - Faster loading
2. **Use high-quality images** - 300x300 minimum for best quality
3. **Mix of song lengths** - Good for variety
4. **Test on mobile** - Check how it looks on phone
5. **Keep it under 5 songs** - Better for loading speed

---

## 📞 Need Help?

If you encounter issues:

1. **Check browser console** (F12 → Console tab)
2. **Verify all URLs work** (paste in address bar)
3. **Ensure proper JSON format** in script.js
4. **Try with placeholder music first** to test functionality

---

## 🎵 Getting Free Music

Looking for royalty-free music to use?

- **Pixabay Music**: https://pixabay.com/music/
- **Bensound**: https://www.bensound.com/
- **YouTube Audio Library**: https://www.youtube.com/audiolibrary
- **Incompetech**: https://www.incompetech.com/
- **Free Music Archive**: https://freemusicarchive.org/

All are free to use for personal projects!

---

**Happy listening! 💚🎵**
