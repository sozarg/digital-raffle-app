# 📁 CSS Architecture - Digital Reward Chest

## 📂 File Structure

```
src/styles/
├── base.css              # 🎨 Fonts, CSS Variables, Reset
├── layout.css            # 📱 Main layout, containers, sections
├── animations.css        # ✨ Keyframes, transitions, effects
├── responsive.css        # 📱 All media queries organized
├── components/
│   ├── navbar.css        # 🧭 Navigation bar styles
│   ├── hero.css          # 🦸‍♂️ Hero section & chest container
│   ├── cards.css         # 🃏 Info cards styling
│   ├── chest.css         # 📦 Chest component & lottie
│   ├── buttons.css       # 🔘 All button styles
│   ├── forms.css         # 📝 Forms, modals, inputs
│   └── footer.css        # 🦶 Footer sections
└── README.md            # 📖 This guide
```

## 🚀 Quick Edit Guide

### 🎨 Want to change colors?
**Edit**: `base.css`
```css
:root {
  --primary-green: #2B8232;      /* Main green color */
  --primary-light-green: #2BF924; /* Bright green for hovers */
  --secondary-green: #A6CA6A;     /* Light green for accents */
}
```

### 🔘 Need to adjust buttons?
**Edit**: `components/buttons.css`
- `.chest-button` - Main "Abrir Cofre" button
- `.register-button` - Registration buttons
- `.secondary-button` - Secondary actions

### 📦 Chest positioning issues?
**Edit**: `components/chest.css`
- `.chest-section` - Chest positioning (current: `translateY(-60px) translateX(40px)`)
- `.chest-main-container` - Fine-tuning positioning
- `.chest-lottie-container` - Lottie scaling and overflow

### 🃏 Card styling changes?
**Edit**: `components/cards.css`
- `.cards-container` - Container layout and spacing
- `.info-card` - Individual card styling
- `.card-content` - Content layout inside cards

### 📱 Mobile responsiveness?
**Edit**: `responsive.css`
- Organized by breakpoints: 991px (tablet), 768px (mobile), 480px (small mobile)
- All responsive rules in one place

### 🧭 Navigation issues?
**Edit**: `components/navbar.css`
- `.navbar` - Main nav styling
- `.nav-links` - Navigation menu
- `.nav-check-button` - "Ya me anoté" button

### ✨ Animations not working?
**Edit**: `animations.css`
- All `@keyframes` definitions
- `.flying-number`, `.ticket-popup` animations
- Transition effects

## 📏 CSS Variables (Design System)

### Colors
- `--primary-green`: Main brand color
- `--primary-light-green`: Hover states, highlights
- `--secondary-green`: Secondary elements
- `--text-primary`: Main text color
- `--text-secondary`: Secondary text
- `--text-white`: White text

### Spacing
- `--spacing-sm`: 0.5rem (8px)
- `--spacing-md`: 1rem (16px)
- `--spacing-lg`: 1.5rem (24px)
- `--spacing-xl`: 2rem (32px)
- `--spacing-xxl`: 3rem (48px)

### Effects
- `--border-radius`: 8px
- `--border-radius-lg`: 12px
- `--shadow-sm`: Small shadow
- `--shadow-md`: Medium shadow
- `--shadow-lg`: Large shadow
- `--transition-fast`: 0.2s ease
- `--transition-normal`: 0.3s ease

## 🔧 Common Tasks

### Change chest position
1. Open `components/chest.css`
2. Find `.chest-section`
3. Modify `transform: translateY(-60px) translateX(40px)`

### Change card spacing
1. Open `components/cards.css`
2. Find `.cards-container`
3. Modify `gap` property

### Change button colors
1. Open `base.css` to change CSS variables globally
2. Or edit `components/buttons.css` for specific buttons

### Add new breakpoint
1. Open `responsive.css`
2. Add new `@media` query in organized structure

### Modify animations
1. Open `animations.css`
2. Find the specific `@keyframes` or animation class
3. Adjust timing, easing, or properties

## 💡 Benefits of This Structure

✅ **Easy to find**: Each component has its own file  
✅ **Maintainable**: Changes are isolated and predictable  
✅ **Scalable**: Easy to add new components  
✅ **Consistent**: CSS variables ensure design consistency  
✅ **Mobile-first**: Responsive design centralized  
✅ **Performance**: Better CSS organization and loading  

## 🚨 Important Notes

- **Always edit the modular files**, not the main `style.css`
- **CSS variables** in `base.css` affect the entire site
- **Responsive rules** are all in `responsive.css` for easier management
- **Import order matters** - base styles load first, then components 