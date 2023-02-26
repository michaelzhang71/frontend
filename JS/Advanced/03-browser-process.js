/*
 * How browser works?
 * 1. download index.html and parse to generate DOM tree
 * 2. download css and generate css rules (do not blocking DOM tree)
 * 3. attach css rules to DOM tree to generate render tree
 * 4. layout: initial size, position drawing
 * 5. paint: initial color/style drawing
 * 6. ongoing process reacting to changes
 *  - reflow: further layout process after initial display
 *  - repaint: color/style changes
 *
 * Attention: reflow is expensive and should minimize this operation or batch operation
 *
 * optimization: composite
 * using layers to process standard flow and offline flow
 * special attributes for new layer:
 * - 3D transform
 * - video, canvas, iframe,
 * - opacity transition
 * - position: fixed
 * - will-change
 * - animation/transition: opactity and transform
 *
 *  */
