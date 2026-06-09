# 🎵 Quick Start: Add Music to Your Monthsary Website

## ⚡ 30-Second Setup

### Step 1: Get a Music File
- Find a song you want to add (or use free music from [Pixabay](https://pixabay.com/music/))
- Upload it to [Imgbb.com](https://imgbb.com) (or any free music hosting)
- **Copy the direct link** (should end with `.mp3`)

### Step 2: Get an Album Image
- Choose an image to represent the song
- Upload to [Imgbb.com](https://imgbb.com)
- **Copy the direct link** (should end with `.jpg` or `.png`)

### Step 3: Update Your Website
- Open `script.js`
- Find the section that says `const playlist = [`
- Replace one of the song entries with your music:

```javascript
{
    title: "YOUR SONG NAME",
    artist: "YOUR NAME",
    url: "PASTE YOUR MUSIC LINK HERE",
    image: "PASTE YOUR IMAGE LINK HERE",
    duration: 240  // Change to song length in seconds
}
```

### Step 4: Save & Test
- Save the file
- Refresh your browser (Ctrl+R or Cmd+R)
- Click the ▶ button to play!

---

## 📋 Complete Example

Replace this in `script.js`:
```javascript
const playlist = [
    {
        title: "Our Special Song",
        artist: "Your Favorite Artist",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        image: "https://via.placeholder.com/300x300/a8d5ba/ffffff?text=Your+Song+1",
        duration: 360
    },
    // ... other songs ...
];
```

With your songs like this:
```javascript
const playlist = [
    {
        title: "First Date",
        artist: "Our Love",
        url: "https://yourdomain.com/first-date.mp3",
        image: "https://yourdomain.com/album1.jpg",
        duration: 180
    },
    {
        title: "Our Song",
        artist: "Us",
        url: "https://yourdomain.com/our-song.mp3",
        image: "https://yourdomain.com/album2.jpg",
        duration: 200
    }
];
```

---

## ✅ Checklist

- [ ] Music file uploaded and link copied
- [ ] Album image uploaded and link copied
- [ ] Song title updated
- [ ] Artist name updated
- [ ] URL links pasted (not URLs with text before them)
- [ ] Duration in seconds updated
- [ ] File saved
- [ ] Browser refreshed
- [ ] ▶ button clicks and plays music

---

## 🆘 Troubleshooting

### Music won't play
- Paste the URL in your browser address bar - if it doesn't work there, it won't work here
- Make sure the link ends with `.mp3` (not `.html` or `.jpg`)

### Image won't show
- Try a different image hosting site
- Make sure link ends with `.jpg` or `.png`
- Image should be 300x300 pixels

### Duration shows wrong time
- Count the song length in seconds
- Update the `duration` number manually
- Example: 3:45 song = 225 seconds

---

## 🎶 Free Music Sources

- **Pixabay Music** - https://pixabay.com/music/
- **Bensound** - https://www.bensound.com/
- **YouTube Audio Library** - https://www.youtube.com/audiolibrary
- **Free Music Archive** - https://freemusicarchive.org/

---

## 📱 Test on Mobile

Your music player works on phones too!
- Open on your phone
- Test all buttons
- Adjust volume
- Tap songs in playlist

---

**Need more details? See [MUSIC_PLAYLIST_GUIDE.md](MUSIC_PLAYLIST_GUIDE.md) for the complete guide.**

🎉 Enjoy your music! 💚
