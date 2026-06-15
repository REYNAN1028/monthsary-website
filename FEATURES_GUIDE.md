# New Features Guide 💚

## 1. Full Image Viewer (Gallery)

Your "Our Beautiful Moments" gallery now has an amazing full-screen image viewer!

### How it works:
- **Click on any gallery image** to open the full-screen viewer
- **Click the "View Full Image 👁️" button** in the overlay for a more explicit action
- **Navigate** using the arrow buttons (◀ ▶) on the sides or use keyboard arrows
- **Close** by clicking the X button or pressing Escape
- **Keyboard shortcuts:**
  - Left Arrow (←) → Previous image
  - Right Arrow (→) → Next image
  - Escape → Close viewer

### To customize gallery images:
Edit the gallery items in `index.html` (around line 253):
```html
<div class="gallery-item" data-fullimage="YOUR_FULL_IMAGE_URL">
    <img src="YOUR_THUMBNAIL_URL" alt="Memory">
    ...
</div>
```

---

## 2. Load More Images Button

- Click the **"Load More Images ➕"** button to add 3 more photos to your gallery
- The new images are currently using placeholder images
- Edit the `moreImages` array in `script.js` (around line 695) to customize with your own photos:

```javascript
const moreImages = [
    { 
        thumb: 'YOUR_THUMBNAIL_URL', 
        full: 'YOUR_FULL_IMAGE_URL', 
        caption: '💚 Your Caption' 
    },
    // ... more images
];
```

---

## 3. Background Image for "Why I Love You" Section

The "Reasons Why I Love You" section now has a beautiful background image!

### To change the background image:
1. Open `index.html`
2. Find the `<section id="reasons">` tag (around line 194)
3. Replace the `background-image` URL with your image:

```html
<section id="reasons" class="reasons-section" 
    style="background-image: url('YOUR_IMAGE_URL_HERE'); ...">
```

### Tips for best results:
- Use high-resolution images (1920x1080 or higher)
- The image has a semi-transparent white overlay (opacity 0.85) so the text remains readable
- Use images that complement the green color scheme
- Consider images with:
  - Soft, blurred backgrounds
  - Portraits or couple photos
  - Pastel or nature themes

### To adjust the overlay opacity:
Edit the `reasons-section::before` CSS in `styles.css` (around line 697):
```css
background: rgba(250, 248, 243, 0.85); /* Change 0.85 to adjust transparency */
```
- Lower number (e.g., 0.7) = More visible background image
- Higher number (e.g., 0.9) = More text readability

---

## 4. Image URLs

All placeholder images use `via.placeholder.com`. Replace these with your own images:

### Free image sources:
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com
- **Your own photos**: Upload to a service like Imgur, Cloudinary, or Firebase

---

## Installation & Setup

No additional installation needed! The feature uses vanilla JavaScript and CSS.

### Files modified:
- `index.html` - Added modal structure and gallery data attributes
- `styles.css` - Added modal styling, buttons, and background support
- `script.js` - Added image viewer functionality

---

Enjoy your beautiful monthsary website! 💚✨
