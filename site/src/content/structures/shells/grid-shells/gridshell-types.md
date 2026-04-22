---
title: "Gridshell Types: A Survey"
description: "A taxonomy of gridshell surface gridding methods — pattern families, mapping techniques, and generative workflows."
tags: ["gridshells", "shells", "efficient-structures"]
date: 2026-04-21
maturity: seed
related: ["shells"]
---

## Overview

This article catalogs the approaches used to design the grid pattern of a structural gridshell.
Three questions frame the taxonomy:

1. **What topology or pattern family** is being used?
2. **How is that pattern mapped** onto a doubly-curved surface?
3. **Is an algorithm or optimization process** used to generate or refine the result?

## Pattern families

### Geodesic subdivision
Recursive subdivision of platonic polyhedral bases, projecting onto spherical or freeform targets.
Produces mostly triangular meshes. Closely associated with Fuller-style geodesic domes.

### Lamella / Zollinger
Overlapping short members in diagonal rhombic families. Historically important for timber lattice
shells; efficient for repetitive fabrication.

### Meridian-parallel / rib-and-hoop
Grids aligned with meridians, parallels, or arch-like ribs — following the global directional logic
of the surface. Otto's line systems fall here.

### Regular quadrilateral grids
Square or rectangular lattices deformed into double curvature. Common in bending-active timber
gridshells because the flat starting geometry is easy to fabricate and erect.

### Triangular grids
Purely triangulated networks. Geometrically stable and structurally direct; less suited to
bending-active erection.

### Hexagonal / cellular polygon grids
Honeycomb-like or mixed-polygon systems. Require more careful node detailing than two-family lattices.

## Surface layout methods

| Method | Character |
|---|---|
| Orthogonal projection | Fast; creates distortion at strong curvatures |
| Parametric UV mapping | CAD-friendly; quality depends on surface parameterization |
| Geodesic tracing | Follows shortest-path lines; reduces distortion |
| Curvature-guided alignment | Aligns with principal curvature directions |
| Flattening and remapping | Useful for fabrication logic; limited on strongly doubly-curved surfaces |
| Boundary-aware adaptive layout | Adjusts spacing and orientation for complex edges and openings |

## Generative and optimization methods

These are workflows that produce or improve a grid, not pattern families in themselves.

- **Form finding** — hanging chain, force density, dynamic relaxation. Determines surface shape; gridding comes after or in parallel.
- **Coupled form finding + grid optimization** — surface and grid adjusted together.
- **Voronoi / CVT** — cell-generating method; best understood as a generative tool, not a peer to geodesic or lamella.
- **Bubble and packing methods** — self-organizing, bio-inspired surface partitions.
- **Ground-structure methods** — dense member field pruned by structural demand.
- **Topology optimization** — produces a density field, not a ready-made grid; requires post-processing.

## Active-bending gridshells

The erection method constrains which grids are practical. Regular quad and lamella layouts dominate
because they deform from flat stock into double curvature with manageable member stresses.

## Sources

- Frei Otto, Bodo Rasch — *Finding Form* (1995)
- John Chilton, Gabriel Tang — *Timber Gridshells* (2016)
- R. Harris — ICE Structures and Buildings (2011)
- Richardson, Adriaenssens et al. — *Engineering Structures* 52 (2013)
- Wang, Ye, Shepherd et al. — *Computer-Aided Design* 113 (2019)
- L. du Peloux — PhD thesis, Université Paris-Est (2017)
