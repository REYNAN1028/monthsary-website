# 💚 Monthsary Website - A Romantic Digital Love Letter

A beautiful, modern, and romantic monthsary website designed for couples to celebrate their love story. Built with HTML, CSS, and JavaScript with smooth animations, interactive features, and a calming green color palette.

## 🎨 Design Features

### Color Palette
- **Sage Green**: `#9caf88` - Primary accent color
- **Emerald Green**: `#2d5016` - Text and dark accents
- **Pastel Green**: `#b8e6d5` - Soft highlights
- **Soft Cream**: `#faf8f3` - Background and text
- **Blush Pink**: `#fde4e8` - Accent color

### Design Elements
✨ Glassmorphism cards with blur effects
🌷 Animated flower petals and decorations
💫 Floating particles and firefly animations
💚 Glowing heart animations
🌸 Smooth fade-in and scroll animations
🎵 Elegant vinyl record music player
📝 Interactive love letter with envelope opening effect
⏰ Countdown timer to next monthsary
📸 Responsive photo gallery with hover effects

## 🎵 Music Playlist Feature (NEW!)

Your monthsary website now includes a **fully functional music player** with playlist support!

### Features:
✅ **Play/Pause Control** - Start and pause your music  
✅ **Album Artwork** - Display custom images for each song  
✅ **Spinning Vinyl Animation** - Classic vinyl record animation while playing  
✅ **Volume Control** - Adjust volume with slider  
✅ **Progress Bar** - See and control current playback position  
✅ **Next/Previous Buttons** - Navigate through your playlist  
✅ **Interactive Playlist** - Click songs to play them  
✅ **Auto-advance** - Automatically plays next song when current ends  
✅ **Time Display** - Shows current time and total duration  
✅ **Fully Responsive** - Works beautifully on mobile devices  

### Quick Setup:

**For detailed instructions, see [MUSIC_PLAYLIST_GUIDE.md](MUSIC_PLAYLIST_GUIDE.md)**

1. Open `script.js` and find the `playlist` array
2. Replace the example songs with your music URLs
3. Add custom album images
4. Save and refresh your browser

### Example:
```javascript
const playlist = [
    {
        title: "Our Special Song",
        artist: "Your Names",
        url: "https://example.com/song.mp3",
        image: "https://example.com/image.jpg",
        duration: 240
    }
];
```

💡 **Tip:** Use free music from [Pixabay Music](https://pixabay.com/music/) or upload your own music to a free host like [Imgbb](https://imgbb.com).

---

## 📦 Project Structure

```
Montsary website/
├── index.html                  # Main HTML file with all sections
├── styles.css                  # Complete styling and animations
├── script.js                   # Interactive features and music player
├── README.md                   # Project documentation
└── MUSIC_PLAYLIST_GUIDE.md    # Detailed music setup guide
```

## 🚀 Quick Start

### How to Open
1. Open the `index.html` file in any modern web browser
2. No installation or server setup required
3. Works offline (except for placeholder images)

### Customization Guide

#### 1. **Edit the Couple's Information**

Open `index.html` and find these sections to customize:

**Hero Section Title** (Line ~45)
```html
<h1 class="hero-title">Happy Monthsary, My Love</h1>
<p class="hero-subtitle">Another month of loving you more than yesterday</p>
```

**Timeline Events** (Lines ~120-150)
Update the months, titles, and stories:
```html
<div class="timeline-date">Month 1</div>
<h3>The Beginning</h3>
<p>When I first saw you, my heart knew it had found its home.</p>
```

**Reasons Why I Love You** (Lines ~160-185)
Customize the 6 reason cards with your own reasons:
```html
<div class="reason-card">
    <div class="reason-icon">✨</div>
    <h3>Your Smile</h3>
    <p>It lights up my entire world and makes everything feel right.</p>
</div>
```

**Love Letter** (Lines ~220-245)
Edit the emotional love letter in the letter section:
```html
<p class="letter-closing">
    Forever yours,<br>
    <span class="handwritten">Your Love</span>
</p>
```

#### 2. **Add Your Photos**

Replace the placeholder images with your couple photos:

In `index.html`, find these lines and replace the image URLs:

**Hero Section Photos** (Lines ~60-65)
```html
<div class="photo-frame frame-1">
    <img src="https://via.placeholder.com/200x250/a8d5ba/ffffff?text=You+%26+Me" alt="Couple photo">
</div>
```
Change to your photo path:
```html
<img src="path/to/your/photo.jpg" alt="Couple photo">
```

**Gallery Section** (Lines ~190-215)
Replace all 6 placeholder gallery images:
```html
<div class="gallery-item">
    <img src="https://via.placeholder.com/300x300/a8d5ba/ffffff?text=Memory+1" alt="Memory">
</div>
```

#### 3. **Change Colors**

Edit the color palette in `styles.css` (Lines ~6-15):

```css
:root {
    --sage-green: #9caf88;      /* Change this */
    --emerald-green: #2d5016;   /* Change this */
    --pastel-green: #b8e6d5;    /* Change this */
    --light-sage: #c8dcc4;
    --dark-sage: #6b8e6f;
    --soft-cream: #faf8f3;
    --blush-pink: #fde4e8;
    --gold-accent: #d4af37;
}
```

**Popular color combinations:**
- Forest Theme: `#2d5016`, `#3d6637`, `#6b8e6f`
- Pastel Theme: `#a8d5ba`, `#c8dcc4`, `#e8f5f0`
- Rose Gold: `#d4a5a5`, `#e8b4b8`, `#fde4e8`

#### 4. **Customize Fonts**

The website uses:
- **Playfair Display** - Elegant serif for titles
- **Poppins** - Modern sans-serif for body text
- **Great Vibes** - Handwritten style for love letter

Change in `index.html` line ~5:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@300;400;600;700&family=Great+Vibes&display=swap" rel="stylesheet">
```

#### 5. **Update the Countdown Timer**

The countdown automatically calculates to 28 days (next monthsary). To change:

In `script.js`, find the `updateCountdown()` function and modify:
```javascript
nextMonthsary.setDate(nextMonthsary.getDate() + 28); // Change 28 to desired days
```

#### 6. **Enable Sound Effects**

Uncomment the sound effects section in `script.js` (around line ~220):

```javascript
function playSound(frequency = 440, duration = 100) {
    // ... sound implementation
}
```

## 🎯 Sections Overview

### 1. **Hero Section**
- Large romantic title
- Beautiful couple photo showcase
- Glowing animated hearts
- Call-to-action button

### 2. **Countdown Timer**
- Days, hours, minutes, seconds until next monthsary
- Elegant glowing design
- Auto-calculates based on current date

### 3. **Love Story Timeline**
- Important milestones and memories
- Left-right alternating layout
- Smooth hover animations
- Customizable events

### 4. **Reasons Why I Love You**
- 6 interactive reason cards
- Heart pop animation on click
- Smooth hover effects
- Customizable reasons

### 5. **Gallery Section**
- Photo grid with smooth transitions
- Overlay text on hover
- Responsive layout
- Beautiful aspect ratios

### 6. **Music Player**
- Animated vinyl record
- Play/Pause controls
- Volume slider
- Previous/Next buttons

### 7. **Love Letter**
- Interactive envelope opening effect
- Handwritten-style letter
- Current date display
- Smooth animations

### 8. **Footer**
- Romantic closing message
- Animated firefly effects
- Flower decorations
- Current date display

## 📱 Responsive Design

The website is fully responsive and works on:
- 💻 Desktop (1920px and above)
- 📱 Tablet (768px - 1024px)
- 📲 Mobile (320px - 767px)

All animations and effects scale appropriately for smaller screens.

## 🎨 Customization Examples

### Change Theme Color
Replace all instances of `--sage-green` in `styles.css`:
```css
/* From sage green */
--sage-green: #9caf88;

/* To rose gold */
--sage-green: #d4a5a5;
```

### Adjust Animation Speed
Find animations in `styles.css` and modify duration:
```css
@keyframes fadeInUp {
    /* Default 0.8s - change to 1s, 1.5s, etc. */
    animation: fadeInUp 0.8s ease-out;
}
```

### Modify Font Sizes
Adjust hero title size in `styles.css`:
```css
.hero-title {
    font-size: 3.5rem;  /* Change this value */
}
```

## 🔧 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Opera: ✅ Full support
- IE11: ⚠️ Limited support (consider upgrade)

## 🎁 Tips for Maximum Impact

1. **Use High-Quality Photos** - Couple photos are the centerpiece
2. **Personal Touches** - Write genuine, heartfelt reasons and stories
3. **Add Your Songs** - Customize the music player with your playlist
4. **Update Regularly** - Add new memories to the timeline
5. **Share the Link** - Easy to share with your loved one

## 🖼️ Image Recommendations

- **Hero Photos**: 200x250px or similar aspect ratio
- **Gallery Photos**: 300x300px or square format
- **High Quality**: Use high-res images (at least 72 DPI)
- **Format**: JPG or PNG work best

## 📝 License

This website is created with love for couples to celebrate their relationships. Feel free to customize and share with your loved one!

## 💌 Final Notes

This monthsary website is designed to feel personal, romantic, and intimate. Every element has been crafted to create an emotional, dreamy experience. Take time to customize it with your own photos, stories, and heartfelt messages.

---

**Made with 💚 for Love**

Feel free to modify, customize, and make this website uniquely yours. Happy celebrating! 🎉

For questions or customization help, refer to the HTML, CSS, and JavaScript files - they're well-commented for easy editing.
