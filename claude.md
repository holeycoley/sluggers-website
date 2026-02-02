# Sluggers Baseball Hawai'i Website

## Project Overview
Website for Sluggers Baseball Hawai'i, a 501(c)(3) nonprofit youth baseball organization. The primary purpose is to share information about the team and collect donations for their Cooperstown trip in summer 2026.

## Organization Details
- **Name:** Sluggers Baseball Hawai'i
- **Type:** 501(c)(3) public charity
- **EIN:** 88-3408232
- **Email:** sluggersbaseballhawaii@gmail.com
- **Team Level:** 12U Travel Baseball

### Board of Directors
- President: Kristen Lau
- Treasurer: Cori Oshiro
- Secretary: Nicole Altman

### Coaching Staff
- Regan Medeiros
- Royce Rapozo
- Shannon Rapozo
- Gordon Blailes
- Brandon Oshiro
- Wes Fujii

### 2026 Season Roster
| # | Player |
|---|--------|
| 5 | Ian Kim |
| 8 | Marcus Ellingwood |
| 9 | Drew Oshiro |
| 12 | Xander Ah Loo |
| 13 | Connor Kishaba |
| 15 | Blas Blailes |
| 21 | Greyson Rapozo |
| 23 | Jaron Yabes |
| 24 | Bryant Ellingwood |
| 28 | Marcus Sunio |
| 30 | Sage Kawasaki-Fujii |
| 42 | Malosi Stowers |
| 44 | Kasen Lau |
| 59 | Dylan Gallagher |

## Fundraising
- **PayPal Giving Fund:** https://www.paypal.com/us/fundraiser/charity/4696960
- **Current Campaign:** Cooperstown Dreams Park 2026 (starts June 18, 2026)

## Social Media
- **Instagram:** https://www.instagram.com/sluggersbaseball808/

## Technical Details

### Stack
- Static HTML/CSS
- Google Fonts (Montserrat)
- Vanilla JavaScript (countdown timer only)

### File Structure
```
SluggersWebsite/
├── index.html          # Home page (photo, mission + blurb, Cooperstown info, donate)
├── roster.html         # Team roster page (players in grid, coaches in 3 columns)
├── about.html          # Board of directors, contact info, nonprofit info
├── styles.css          # All styling
├── countdown.js        # Live countdown to Cooperstown (June 18, 2026)
├── CLAUDE.md           # This file
└── assets/
    └── images/
        ├── logo.jpeg       # Team logo (navy blue & silver, Hawaiian islands)
        └── team-photo.jpg  # Team photo from Myrtle Beach Nationals
```

### Design
- **Colors:** Navy blue (#1e3a5f), silver/gray (#a8b5c4) - matches team logo
- **Font:** Montserrat
- **Features:**
  - Animated wave before footer (Hawaiian/ocean theme)
  - Hover effects on logo, nav, donate button, player cards
  - Responsive design for mobile

### Mission Statement
> "Building character through baseball—one player, one game, one moment at a time."

## Design Decisions
1. **Multi-page structure** - Home, Roster, About tabs to keep home page focused
2. **Mission statement on home page** - featured quote style with supporting blurb paragraphs
3. **Cooperstown on home page** - directly tied to donation CTA, reduces friction
4. **Roster labeled "2026 Season"** - indicates it's current, not static (important for 501(c)(3) compliance)
5. **501(c)(3) language** - proper tax-deductibility disclaimers included
6. **No baseball stitching** - removed per user preference
7. **Wave animation** - subtle Hawaiian flair without being over the top

## Deployment
- **Domain:** sluggersbaseballhawaii.org (purchased via GoDaddy)
- **Hosting:** GitHub Pages
- **Repo:** https://github.com/holeycoley/sluggers-website
- **Live URL:** https://sluggersbaseballhawaii.org

### DNS Configuration (GoDaddy)
| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | holeycoley.github.io |

## Notes
- Team photo is from Myrtle Beach Nationals 2025 tournament (South Carolina)
- They're going to Cooperstown (not "earned" their way - just registered to attend)
- Bylaws purpose: "enable and support youth baseball, promote good sportsmanship, educate youth participants and conduct other educational activities"
