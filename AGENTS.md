# Project Guide

## Overview

This repository contains a one-page cinematic portfolio for Ahmed Sabith, known professionally as Soulahmd. It is a TanStack Start application deployed on Netlify and designed around custom photography, AI video services, performance marketing, brand work, and professional recognition.

## Architecture

- `src/routes/__root.tsx` defines document metadata and the shared HTML shell.
- `src/routes/index.tsx` contains the portfolio content, section data, and achievement lightbox state.
- `src/styles.css` contains the complete design system and responsive implementation.
- `public/images/` stores the user-supplied portrait and event assets used by the homepage.
- `content/` and the additional starter routes are inherited from the portfolio scaffold but are not linked from the primary experience.

## Conventions

- Keep the homepage data-driven where repeated cards or rails are involved.
- Use semantic sections, descriptive alternative text, and visible keyboard focus states.
- Use the existing CSS custom properties for palette changes.
- Animate only opacity and transforms, and preserve the reduced-motion rules.
- Keep contact actions as direct links unless a persistent form is explicitly requested.
- Avoid adding generic card grids or unrelated UI libraries; the visual language is intentionally editorial and asymmetric.

## Design Decisions

- The visual direction references streaming interfaces without copying Netflix branding or proprietary UI.
- Headlines use compressed display typography while body copy uses a restrained editorial serif/sans pairing.
- Achievement cards are horizontally scrollable and open into an accessible modal detail view.
- Uploaded photography remains unaltered on disk and is treated through crop, contrast, saturation, overlays, and framing in CSS.

## Development

Use `pnpm dev` for normal local development. Netlify-specific local behavior can be tested with Netlify Dev on port `8889`.
