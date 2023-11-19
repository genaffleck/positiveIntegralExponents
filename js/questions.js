// Array of objects
/* 
  {
    q: "Count the triangles in the picture below.",
    options: ["7", "9", "12", "13"],
    answer: 3,
    img: "img/triangle.jpg",
  },
  {
    q: `Solve for \\(x\\)`,
    options: [`\\(7\\)`, `\\(9\\)`, `\\(12\\)`, `\\(13\\)`],
    answer: 3,
  },
 */
const quiz = [
  {
    /* Multiplication of Powers */
    q: `Simplify \\(x^2\\cdot x^5\\)`,
    options: [
        `\\(x^{7}\\)`,
        `\\(x^{10}\\)`,
        `\\(x^3\\)`,
        `\\(x^{-3}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `Simplify \\(x^2\\cdot x^5\\)`,
    options: [
        `\\(x^{7}\\)`,
        `\\(x^{10}\\)`,
        `\\(x^3\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `Simplify \\(\\left(2y^3\\right)\\left( -8y^4\\right)\\)`,
    options: [
        `\\(-16y^{7}\\)`,
        `\\(-6y^{12}\\)`,
        `\\(-6y^7\\)`,
        `\\(-16y^{12}\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `Simplify \\(\\left(2y^3\\right)\\left( -8y^4\\right)\\)`,
    options: [
        `\\(-16y^{7}\\)`,
        // `\\(-6y^{12}\\)`,
        `\\(-6y^7\\)`,
        `\\(-16y^{12}\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Division of Powers */
    q: `Simplify: \\(\\dfrac{w^{12}}{w^2}\\)`,
    options: [
        `\\(w^{10}\\)`,
        `\\(w^{6}\\)`,
        `\\(w^{24}\\)`,
        `\\(w^{14}\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Division of Powers */
    q: `Simplify: \\(\\dfrac{w^{12}}{w^2}\\)`,
    options: [
        `\\(w^{10}\\)`,
        `\\(w^{6}\\)`,
        `\\(w^{24}\\)`,
        // `\\(w^{14}\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Division of Powers */
    q: `Simplify: \\(\\dfrac{4z^{9}}{8z^{3}}\\)`,
    options: [
        `\\(\\dfrac{z^6}{2}\\)`,
        `\\(\\dfrac{z^3}{2}\\)`,
        `\\(2z^6\\)`,
        `\\(\\dfrac{1}{2}z^{3}\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Division of Powers */
    q: `Simplify: \\(\\dfrac{4z^{9}}{8z^{3}}\\)`,
    options: [
        `\\(\\dfrac{z^6}{2}\\)`,
        `\\(\\dfrac{z^3}{2}\\)`,
        `\\(2z^6\\)`,
        // `\\(\\dfrac{1}{2}z^{3}\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Division of Powers */
    q: `Simplify: \\(\\dfrac{6a^{15}}{9a^{3}}\\)`,
    options: [
        `\\(\\dfrac{2a^{12}}{3}\\)`,
        `\\(\\dfrac{2a^{5}}{3}\\)`,
        `\\(\\dfrac{3}{2}a^5\\)`,
        `\\(\\dfrac{2}{3}a^{18}\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Division of Powers */
    q: `Simplify: \\(\\dfrac{6a^{15}}{9a^{3}}\\)`,
    options: [
        `\\(\\dfrac{2a^{12}}{3}\\)`,
        `\\(\\dfrac{2a^{5}}{3}\\)`,
        `\\(\\dfrac{3}{2}a^5\\)`,
        // `\\(\\dfrac{2}{3}a^{18}\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Power of Powers */
    q: `Simplify: \\(\\left(4x^3\\right)^2\\)`,
    options: [
        `\\(16x^6\\)`,
        `\\(8x^6\\)`,
        `\\(16x^5\\)`,
        `\\(8x^5\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Power of Powers */
    q: `Simplify: \\(\\left(4x^3\\right)^2\\)`,
    options: [
        // `\\(16x^6\\)`,
        `\\(8x^6\\)`,
        `\\(16x^5\\)`,
        `\\(8x^5\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 3,
  },
  {
    /* Power of Powers */
    q: `Simplify: \\(\\left(2b^4\\right)^3\\)`,
    options: [
        `\\(8b^{12}\\)`,
        `\\(8b^7\\)`,
        `\\(6b^{12}\\)`,
        `\\(6b^7\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Power of Powers */
    q: `Simplify: \\(\\left(2b^4\\right)^3\\)`,
    options: [
        `\\(8b^{12}\\)`,
        `\\(8b^7\\)`,
        `\\(6b^{12}\\)`,
        // `\\(6b^7\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Power of Powers */
    q: `Simplify: \\(\\left(a^3b^4\\right)^2\\)`,
    options: [
        `\\(a^6b^8\\)`,
        `\\(a^5b^6\\)`,
        `\\(a^6b^6\\)`,
        `\\(a^5b^8\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Power of Powers */
    q: `Simplify: \\(\\left(2a^4b^5\\right)^3\\)`,
    options: [
        `\\(8a^{12}b^{15}\\)`,
        `\\(6a^{12}b^{15}\\)`,
        `\\(8a^{7}b^{8}\\)`,
        `\\(6a^{7}b^{8}\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Power of Powers */
    q: `Simplify: \\(\\left(a^3b^4\\right)^2\\)`,
    options: [
        // `\\(a^6b^8\\)`,
        `\\(a^5b^6\\)`,
        `\\(a^6b^6\\)`,
        `\\(a^5b^8\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 3,
  },
  {
    /* Power of Powers */
    q: `Evaluate: \\(2^3\\cdot 2^2\\)`,
    options: [
        `\\(32\\)`,
        `\\(64\\)`,
        `\\(16\\)`,
        `\\(8\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Power of Powers */
    q: `Evaluate: \\(2^3\\cdot 2^2\\)`,
    options: [
        `\\(32\\)`,
        `\\(64\\)`,
        `\\(16\\)`,
        // `\\(8\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Power of Powers */
    q: `Evaluate: \\(2^3\\cdot 2^4\\)`,
    options: [
        `\\(128\\)`,
        `\\(64\\)`,
        `\\(32\\)`,
        // `\\(8\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Power of Powers */
    q: `What value of \\(n\\) will make the statement true: \\(\\dfrac{c^8}{c^2}=c^n\\)`,
    options: [
        `\\(6\\)`,
        `\\(4\\)`,
        `\\(2\\)`,
        `\\(16\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Power of Powers */
    q: `What value of \\(n\\) will make the statement true: \\(\\dfrac{c^8}{c^2}=c^n\\)`,
    options: [
        `\\(6\\)`,
        `\\(4\\)`,
        `\\(2\\)`,
        // `\\(16\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Power of Powers */
    q: `\\(\\left(b^3\\right)\\left(c^2\\right)\\left(b^4\\right)\\left(c^5\\right)\\)`,
    options: [
        `\\(b^7c^7\\)`,
        `\\(b^{12}c^{10}\\)`,
        `\\(b^{12}c^{7}\\)`,
        `\\(b^{7}c^{10}\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Power of Powers */
    q: `\\(\\left(b^3\\right)\\left(c^2\\right)\\left(b^4\\right)\\left(c^5\\right)\\)`,
    options: [
        // `\\(b^7c^7\\)`,
        `\\(b^{12}c^{10}\\)`,
        `\\(b^{12}c^{7}\\)`,
        `\\(b^{7}c^{10}\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 3,
  },
  {
    /* Multiplication of Powers */
    q: `If \\(c^{5}\\cdot c^{x}= c^{10}\\), what is the value of \\(x\\)?`,
    options: [
        `\\(5\\)`,
        `\\(2\\)`,
        `\\(15\\)`,
        `\\(\\dfrac{1}{2}\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `If \\(c^{5}\\cdot c^{x}= c^{10}\\), what is the value of \\(x\\)?`,
    options: [
        `\\(5\\)`,
        `\\(2\\)`,
        // `\\(15\\)`,
        `\\(\\dfrac{1}{2}\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `Evaluate \\(2^4\\)`,
    options: [
        `\\(16\\)`,
        `\\(8\\)`,
        `\\(6\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `Evaluate \\(2^3+2^3+2^3\\)`,
    options: [
        `\\(24\\)`,
        `\\(2^9\\)`,
        `\\(2^{27}\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `Evaluate \\(x^a\\cdot x^b\\) if \\(x=2\\), \\(a=3\\) and \\(b=4\\)`,
    options: [
        `\\(128\\)`,
        `\\(64\\)`,
        `\\(256\\)`,
        `\\(1024\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `Simplify \\(-8^2\\)`,
    options: [
        `\\(-64\\)`,
        `\\(64\\)`,
        `\\(-16\\)`,
        `\\(16\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `Find the product of  \\(4x^4\\cdot 5x\\)`,
    options: [
        `\\(20x^5\\)`,
        `\\(20x^4\\)`,
        `\\(9x^5\\)`,
        `\\(9x^4\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `Simplify  \\(\\dfrac{12x^5y^7}{6x^2y^3}\\)`,
    options: [
        `\\(2x^3y^4\\)`,
        `\\(2x^{10}y^{10}\\)`,
        `\\(\\dfrac{1}{2}x^{3}y^{4}\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `Simplify  \\(\\left(-\\dfrac{3}{4}x^3\\right)\\left(12x^6\\right)\\)`,
    options: [
        `\\(-9x^9\\)`,
        `\\(8x^9\\)`,
        `\\(-8x^{18}\\)`,
        `\\(9x^{18}\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `Simplify  \\(\\left(-\\dfrac{3}{4}x^3\\right)\\left(12x^6\\right)\\)`,
    options: [
        `\\(-9x^9\\)`,
        `\\(-9x^{18}\\)`,
        `\\(-8x^{18}\\)`,
        // `\\(9x^{18}\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `Multiply:  \\(4x^2(2x^2-3x)\\)`,
    options: [
        `\\(8x^4-12x^3\\)`,
        `\\(8x^4-12x^2\\)`,
        `\\(6x^4-12x^2\\)`,
        `\\(6x^4-x^3\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    /* Multiplication of Powers */
    q: `Multiply:  \\(4x^2(2x^2-3x)\\)`,
    options: [
        `\\(8x^4-12x^3\\)`,
        `\\(8x^4-12x^2\\)`,
        // `\\(6x^4-12x^2\\)`,
        `\\(6x^4-x^3\\)`,
        `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
  },
  {
    q: `Find the area of the given rectangle`,
    options: [
        `\\(15x^4y^7\\)`,
        `\\(15x^3y^6\\)`,
        `\\(8x^4y^6\\)`,
        `\\(8x^4y^7\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
    img: "img/rectangleArea.png",
  },
  {
    q: `Find the area of the given triangle`,
    options: [
        `\\(\\dfrac{3}{2}a^5b^9\\)`,
        `\\(\\dfrac{3}{2}a^6b^{20}\\)`,
        `\\(3a^5b^9\\)`,
        `\\(3a^6b^{20}\\)`,
        // `\\(\\textrm{none of the above}\\)`
    ],
    answer: 0,
    img: "img/triangleArea.png",
  },
];
