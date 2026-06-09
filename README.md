# Blinkit React Native UI Clone

A static, pixel-oriented React Native/Expo implementation of a Blinkit-style grocery home screen. The code is intentionally frontend-only: it does not call Blinkit services, collect user credentials, or integrate with any production backend.

## What is included

- Yellow Blinkit-style delivery header with location, profile affordance, and search bar.
- Brand lockup, quick action cards, hero promotion, service tiles, category grid, bestseller product rail, and floating bottom navigation.
- Local catalog data separated from the UI for easy visual tuning.

## Run locally

```bash
npm install
npm run start
```

Then open the Expo app on a simulator, device, or web target.

## Quality note

The original repository contains a decompiled Blinkit Android APK resource tree. This React Native app recreates the visual language as a static demonstration while keeping the implementation independent and safe for review.
