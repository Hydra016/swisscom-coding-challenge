import{a3 as o,a5 as n,a7 as i}from"./RPqdvl64.js";import{E as a,c as r,G as d,h as c,t as s}from"./DrTE1gcP.js";const l=`/*New*/
:host,
*,
*:before,
*:after {
  box-sizing: border-box;
}

.button-group {
  display: flex;
  margin: -8px -8px;
  flex-wrap: wrap;
}
.button-group .button {
  margin: 8px 8px;
}

.button-group--responsive {
  flex-direction: row-reverse;
}
.button-group--responsive .button {
  width: 100%;
}
@media (min-width: 480px) {
  .button-group--responsive .button {
    width: auto;
  }
}

.button-group--left {
  justify-content: flex-end;
}

@media (min-width: 480px) {
  .button-group--fill {
    flex-wrap: nowrap;
  }
}
.button-group--fill .button {
  width: 100%;
  min-width: 0;
  flex: 0 1 auto;
}

.button-group + .button-group {
  margin-top: 8px;
}

button,
.button {
  cursor: pointer;
}

button {
  font: inherit;
}

.button {
  line-height: 24px;
  letter-spacing: -0.1px;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  display: inline-block;
  position: relative;
  transition: all 150ms cubic-bezier(0.4, 0, 0.6, 1);
  margin: 0;
  outline: none;
  border: 0;
  border-bottom-style: none;
  border-radius: 8px;
  background: none;
  cursor: pointer;
  padding: 12px 24px;
  min-width: 160px;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  transform-origin: 50% 50%;
  user-select: none;
}
.button:active {
  transform: scale(0.98);
}
.button.disabled, .button:disabled {
  cursor: not-allowed;
}
.button.disabled:active, .button:disabled:active {
  pointer-events: none;
  transform: none;
}
.button, .button--primary {
  background-color: #086adb;
  color: #fff;
  height: 48px;
  border: 1px solid #086adb;
}
.button.disabled, .button:disabled, .button--primary.disabled, .button--primary:disabled {
  color: rgba(255, 255, 255, 0.6);
  border: 0;
  background-color: rgba(8, 106, 219, 0.4);
}
.button:active, .button--primary:active {
  background-color: #0048cf;
  color: #fff;
  border: 1px solid #0048cf;
}
@media (hover: hover) {
  .button:hover, .button--primary:hover {
    background-color: #0048cf;
    color: #fff;
    border: 1px solid #0048cf;
  }
}
.button--secondary {
  background-color: #fff;
  color: #086adb;
  height: 48px;
  border: 1px solid #086adb;
}
.button--secondary.disabled, .button--secondary:disabled {
  color: rgba(8, 106, 219, 0.4);
  border: 1px solid rgba(8, 106, 219, 0.4);
  background-color: #fff;
}
.button--secondary:active {
  background-color: #d1e6f9;
  color: #086adb;
  border: 1px solid #0048cf;
  color: #0048cf;
}
@media (hover: hover) {
  .button--secondary:hover {
    background-color: #d1e6f9;
    color: #086adb;
    border: 1px solid #0048cf;
    color: #0048cf;
  }
}
.button--confirm {
  background-color: #1b8712;
  color: #fff;
  height: 48px;
  border: 1px solid #1b8712;
}
.button--confirm.disabled, .button--confirm:disabled {
  color: rgba(255, 255, 255, 0.6);
  border: 0;
  background-color: rgba(27, 135, 18, 0.4);
}
.button--confirm:active {
  background-color: #0d6f2c;
  color: #fff;
  border: 1px solid #0d6f2c;
}
@media (hover: hover) {
  .button--confirm:hover {
    background-color: #0d6f2c;
    color: #fff;
    border: 1px solid #0d6f2c;
  }
}
.button__icon {
  padding: 12px 24px 12px 16px;
}
.button .icon {
  margin-right: 7px;
  font-size: 18px;
}

.button--thin,
.bg--dark .button {
  padding: 11px 23px;
}
.button--thin, .button--thin.button--primary,
.bg--dark .button {
  border: 1px solid #086adb;
  background-color: transparent;
  color: #fff;
}
.button--thin:active, .button--thin:hover, .button--thin:focus-visible, .button--thin.button--primary:active, .button--thin.button--primary:hover, .button--thin.button--primary:focus-visible,
.bg--dark .button:active,
.bg--dark .button:hover,
.bg--dark .button:focus-visible {
  border-color: #0048cf;
  background-color: rgba(8, 106, 219, 0.15);
  color: #fff;
}
.button--thin.disabled, .button--thin:disabled, .button--thin.button--primary.disabled, .button--thin.button--primary:disabled,
.bg--dark .disabled.button,
.bg--dark .button:disabled {
  border-color: rgba(8, 106, 219, 0.4);
  background-color: transparent;
  color: rgba(255, 255, 255, 0.4);
}
.button--thin.button--secondary,
.bg--dark .button--secondary.button {
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
}
.button--thin.button--secondary:active, .button--thin.button--secondary:hover, .button--thin.button--secondary:focus-visible,
.bg--dark .button--secondary.button:active,
.bg--dark .button--secondary.button:hover,
.bg--dark .button--secondary.button:focus-visible {
  border-color: #d1e6f9;
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.button--thin.button--secondary.disabled, .button--thin.button--secondary:disabled,
.bg--dark .button--secondary.disabled.button,
.bg--dark .button--secondary.button:disabled {
  border-color: rgba(255, 255, 255, 0.4);
  background-color: transparent;
  color: rgba(255, 255, 255, 0.4);
}
.button--thin.button--confirm,
.bg--dark .button--confirm.button {
  border: 1px solid #1b8712;
  background-color: transparent;
  color: #fff;
}
.button--thin.button--confirm:active, .button--thin.button--confirm:hover, .button--thin.button--confirm:focus-visible,
.bg--dark .button--confirm.button:active,
.bg--dark .button--confirm.button:hover,
.bg--dark .button--confirm.button:focus-visible {
  border-color: #0d6f2c;
  background-color: rgba(27, 135, 18, 0.15);
  color: #fff;
}
.button--thin.button--confirm.disabled, .button--thin.button--confirm:disabled,
.bg--dark .button--confirm.disabled.button,
.bg--dark .button--confirm.button:disabled {
  border-color: rgba(27, 135, 18, 0.4);
  background-color: transparent;
  color: rgba(255, 255, 255, 0.4);
}

.bg--dark a.button:focus {
  outline: 1px dotted #0048cf;
}

.button-group--responsive .button--full,
.button--full,
input[type=submit].button--full,
input[type=reset].button--full,
input[type=button].button--full {
  display: block;
  width: 100%;
}
.button-group--responsive .button--full:active,
.button--full:active,
input[type=submit].button--full:active,
input[type=reset].button--full:active,
input[type=button].button--full:active {
  transform: scale(0.9925, 0.98);
}

.button--responsive,
input[type=submit].button--responsive,
input[type=reset].button--responsive,
input[type=button].button--responsive {
  width: 100%;
}
@media (min-width: 480px) {
  .button--responsive,
  input[type=submit].button--responsive,
  input[type=reset].button--responsive,
  input[type=button].button--responsive {
    width: auto;
  }
}

.sdx--dark-theme .button--secondary {
  background-color: transparent;
  color: #4294ff;
  height: 48px;
  border: 1px solid #4294ff;
}
.sdx--dark-theme .button--secondary.disabled, .sdx--dark-theme .button--secondary:disabled {
  color: rgba(66, 148, 255, 0.4);
  border: 1px solid rgba(66, 148, 255, 0.4);
  background-color: transparent;
}
.sdx--dark-theme .button--secondary:active {
  background-color: rgba(66, 148, 255, 0.15);
  border: 1px solid #5ca3ff;
  color: #5ca3ff;
}
@media (hover: hover) {
  .sdx--dark-theme .button--secondary:hover {
    background-color: rgba(66, 148, 255, 0.15);
    border: 1px solid #5ca3ff;
    color: #5ca3ff;
  }
}

figure {
  margin: 0;
}

.image {
  width: 100%;
}
.image--unscaled {
  width: auto;
}
.image--frame-light {
  padding: 16px;
  border: 1px solid #d6d6d6;
}
.image--frame-dark {
  padding: 16px;
  background-color: #eef3f6;
}
.image--rounded {
  border-radius: 12px;
}

.sdx--dark-theme .image--frame-light {
  border-color: #5c5c5c;
}
.sdx--dark-theme .image--frame-dark {
  background-color: #242424;
}

a,
a.link,
button.link {
  position: relative;
  transition: color 200ms cubic-bezier(0.4, 0, 0.6, 1), text-decoration-color 200ms cubic-bezier(0.4, 0, 0.6, 1);
  outline: none;
  text-decoration: underline;
  text-underline-offset: 5px;
  color: #086adb;
}
a:where(:any-link, button):active,
a.link:where(:any-link, button):active,
button.link:where(:any-link, button):active {
  text-decoration-thickness: 2px;
  color: #0048cf;
  text-decoration-color: #0048cf;
}
@media (hover: hover) {
  a:where(:any-link, button):hover,
  a.link:where(:any-link, button):hover,
  button.link:where(:any-link, button):hover {
    text-decoration-thickness: 2px;
    color: #0048cf;
    text-decoration-color: #0048cf;
  }
}
a:where(:any-link, button):focus-visible,
a.link:where(:any-link, button):focus-visible,
button.link:where(:any-link, button):focus-visible {
  outline: 2px solid #086adb;
  outline-offset: -2px;
  border-radius: 8px;
  transition: none;
  outline-offset: initial;
  border-radius: 5px;
}
a + a, a + a.link, a + button.link,
a.link + a,
a.link + a.link,
a.link + button.link,
button.link + a,
button.link + a.link,
button.link + button.link {
  margin-left: 24px;
}
a[class*=icon-], a.link--standalone, a.link--external, a.link--anchor,
a.link[class*=icon-],
a.link.link--standalone,
a.link.link--external,
a.link.link--anchor,
button.link[class*=icon-],
button.link.link--standalone,
button.link.link--external,
button.link.link--anchor {
  display: inline-block;
  margin-left: 24px;
  text-decoration-color: transparent;
}
a[class*=icon-]:active, a.link--standalone:active, a.link--external:active, a.link--anchor:active,
a.link[class*=icon-]:active,
a.link.link--standalone:active,
a.link.link--external:active,
a.link.link--anchor:active,
button.link[class*=icon-]:active,
button.link.link--standalone:active,
button.link.link--external:active,
button.link.link--anchor:active {
  text-decoration-color: unset;
}
@media (hover: hover) {
  a[class*=icon-]:hover, a.link--standalone:hover, a.link--external:hover, a.link--anchor:hover,
  a.link[class*=icon-]:hover,
  a.link.link--standalone:hover,
  a.link.link--external:hover,
  a.link.link--anchor:hover,
  button.link[class*=icon-]:hover,
  button.link.link--standalone:hover,
  button.link.link--external:hover,
  button.link.link--anchor:hover {
    text-decoration-color: unset;
  }
}
a[class*=icon-]::before, a.link--standalone::before, a.link--external::before, a.link--anchor::before,
a.link[class*=icon-]::before,
a.link.link--standalone::before,
a.link.link--external::before,
a.link.link--anchor::before,
button.link[class*=icon-]::before,
button.link.link--standalone::before,
button.link.link--external::before,
button.link.link--anchor::before {
  margin-left: -24px;
  display: inline-block;
  font-family: sdx-icons;
  padding-right: 6px;
  position: relative;
}
a.link--standalone::before,
a.link.link--standalone::before,
button.link.link--standalone::before {
  content: "\\e004";
}
a.link--external::before,
a.link.link--external::before,
button.link.link--external::before {
  content: "\\e030";
}
a.link--anchor::before,
a.link.link--anchor::before,
button.link.link--anchor::before {
  content: "\\e002";
}

a:not(:any-link) {
  text-decoration: none;
}

p a + a, p a + a.link, p a + button.link,
p a.link + a,
p a.link + a.link,
p a.link + button.link,
p button.link + a,
p button.link + a.link,
p button.link + button.link,
.list a + a,
.list a + a.link,
.list a + button.link,
.list a.link + a,
.list a.link + a.link,
.list a.link + button.link,
.list button.link + a,
.list button.link + a.link,
.list button.link + button.link {
  margin-left: 0;
}

.sdx--dark-theme a,
.sdx--dark-theme a.link,
.sdx--dark-theme button.link {
  color: #4294ff;
}
.sdx--dark-theme a:focus-visible,
.sdx--dark-theme a.link:focus-visible,
.sdx--dark-theme button.link:focus-visible {
  outline: 2px solid #e6e6e6;
  outline-offset: -2px;
  border-radius: 8px;
  transition: none;
  outline-offset: initial;
  border-radius: 5px;
}
.sdx--dark-theme a:active,
.sdx--dark-theme a.link:active,
.sdx--dark-theme button.link:active {
  color: #5ca3ff;
  text-decoration-color: #5ca3ff;
}
@media (hover: hover) {
  .sdx--dark-theme a:hover,
  .sdx--dark-theme a.link:hover,
  .sdx--dark-theme button.link:hover {
    color: #5ca3ff;
    text-decoration-color: #5ca3ff;
  }
}

.bg--dark a,
.bg--dark a.link,
.bg--dark button.link,
a.link.link--dark,
a.link.link--white,
button.link.link--dark,
button.link.link--dark,
a.link--dark,
a.link--white,
button.link--dark,
button.link--white {
  color: #fff;
}
.bg--dark a:active,
.bg--dark a.link:active,
.bg--dark button.link:active,
a.link.link--dark:active,
a.link.link--white:active,
button.link.link--dark:active,
button.link.link--dark:active,
a.link--dark:active,
a.link--white:active,
button.link--dark:active,
button.link--white:active {
  color: #fff;
  text-decoration-color: #fff;
}
@media (hover: hover) {
  .bg--dark a:hover,
  .bg--dark a.link:hover,
  .bg--dark button.link:hover,
  a.link.link--dark:hover,
  a.link.link--white:hover,
  button.link.link--dark:hover,
  button.link.link--dark:hover,
  a.link--dark:hover,
  a.link--white:hover,
  button.link--dark:hover,
  button.link--white:hover {
    color: #fff;
    text-decoration-color: #fff;
  }
}
.bg--dark a:focus-visible,
.bg--dark a.link:focus-visible,
.bg--dark button.link:focus-visible,
a.link.link--dark:focus-visible,
a.link.link--white:focus-visible,
button.link.link--dark:focus-visible,
button.link.link--dark:focus-visible,
a.link--dark:focus-visible,
a.link--white:focus-visible,
button.link--dark:focus-visible,
button.link--white:focus-visible {
  outline: 2px solid #fff;
  outline-offset: -4px;
  border-radius: 8px;
  transition: none;
  outline-offset: initial;
  border-radius: 5px;
}

.text-body-1,
.text-standard {
  line-height: 24px;
  letter-spacing: -0.1px;
  font-size: 18px;
}

.text-body-2,
.text-small {
  line-height: 21px;
  letter-spacing: 0;
  font-size: 16px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  text-align: left;
  word-wrap: break-word;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
.hero,
.d1,
.d2,
.d3 {
  color: #015;
}

.h1,
.text-h1,
h1 {
  line-height: 40px;
  letter-spacing: -1px;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
}
@media (min-width: 1024px) {
  .h1,
  .text-h1,
  h1 {
    line-height: 48px;
    letter-spacing: -1.2px;
    font-size: 40px;
  }
}
@media (min-width: 1024px) {
  .h1,
  .text-h1,
  h1 {
    margin-bottom: 32px;
  }
}

.h2,
.text-h2,
h2 {
  line-height: 32px;
  letter-spacing: -0.75px;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
}
@media (min-width: 1024px) {
  .h2,
  .text-h2,
  h2 {
    line-height: 40px;
    letter-spacing: -1px;
    font-size: 32px;
  }
}
@media (min-width: 1024px) {
  .h2,
  .text-h2,
  h2 {
    margin-bottom: 24px;
  }
}

.h3,
.h4,
.text-h3,
.text-h4,
h3,
h4 {
  margin-bottom: 16px;
}
@media (min-width: 1024px) {
  .h3,
  .h4,
  .text-h3,
  .text-h4,
  h3,
  h4 {
    margin-bottom: 20px;
  }
}

.h3,
.text-h3,
h3 {
  line-height: 32px;
  letter-spacing: -0.35px;
  font-size: 24px;
  font-weight: 600;
}
@media (min-width: 1024px) {
  .h3,
  .text-h3,
  h3 {
    line-height: 32px;
    letter-spacing: -0.75px;
    font-size: 28px;
  }
}

.h4,
.text-h4,
h4 {
  line-height: 24px;
  letter-spacing: -0.1px;
  font-size: 20px;
  font-weight: 600;
}
@media (min-width: 1024px) {
  .h4,
  .text-h4,
  h4 {
    line-height: 32px;
    letter-spacing: -0.35px;
    font-size: 24px;
  }
}

.text-h3.text-compact {
  line-height: 31px;
}

.text-h4.text-compact {
  line-height: 27px;
}

.h5,
.h6,
.text-h5,
.text-h6,
h5,
h6 {
  margin-bottom: 8px;
}

.h5,
.text-h5,
h5 {
  line-height: 24px;
  letter-spacing: -0.1px;
  font-size: 18px;
  font-weight: 600;
}

.h6,
.text-h6,
h6 {
  line-height: 24px;
  letter-spacing: -0.1px;
  font-size: 16px;
  font-weight: 600;
}

.paragraph,
p {
  line-height: 24px;
  letter-spacing: -0.1px;
  font-size: 18px;
  margin-bottom: 20px;
}
@media (min-width: 1024px) {
  .paragraph,
  p {
    margin-bottom: 24px;
  }
}
.paragraph:last-child,
p:last-child {
  margin-bottom: 0;
}

.hero,
.text-hero,
.d1,
.text-d1,
.d2,
.text-d2,
.d3,
.text-d3 {
  font-weight: 700;
}

.hero,
.text-hero {
  line-height: 80px;
  letter-spacing: -1.75px;
  font-size: 70px;
}
@media (min-width: 1024px) {
  .hero,
  .text-hero {
    line-height: 104px;
    letter-spacing: -2px;
    font-size: 96px;
  }
}

.d1,
.text-d1 {
  line-height: 64px;
  letter-spacing: -1.35px;
  font-size: 54px;
}
@media (min-width: 1024px) {
  .d1,
  .text-d1 {
    line-height: 80px;
    letter-spacing: -1.75px;
    font-size: 70px;
  }
}

.d2,
.text-d2 {
  line-height: 56px;
  letter-spacing: -1.2px;
  font-size: 48px;
}
@media (min-width: 1024px) {
  .d2,
  .text-d2 {
    line-height: 64px;
    letter-spacing: -1.35px;
    font-size: 54px;
  }
}

.d3,
.text-d3 {
  line-height: 48px;
  letter-spacing: -1.2px;
  font-size: 40px;
}
@media (min-width: 1024px) {
  .d3,
  .text-d3 {
    line-height: 56px;
    letter-spacing: -1.2px;
    font-size: 48px;
  }
}

.text-b1 {
  line-height: 24px;
  letter-spacing: -0.1px;
  font-size: 18px;
  font-weight: 400;
}

.text-b2 {
  line-height: 21px;
  letter-spacing: 0;
  font-size: 16px;
  font-weight: 400;
}

.text-sm,
.text-smaller {
  line-height: 18px;
  letter-spacing: 0.1px;
  font-size: 14px;
  font-weight: 400;
}

.text-compact {
  line-height: 21px;
}

.figcaption {
  line-height: 18px;
  letter-spacing: 0.1px;
  font-size: 14px;
}

.code {
  font-family: monospace;
  background-color: #f8fafb;
  border-radius: 4px;
  border: 1px solid #d6d6d6;
  color: #474747;
  font-size: 16px;
  padding: 0 6px;
}

address {
  font-style: normal;
}

strong {
  font-weight: 600;
}

em {
  font-style: italic;
}

.font {
  font-family: TheSans, sans-serif;
}
.font--sans {
  font-family: TheSans, sans-serif;
}
.font--serif {
  font-family: TheSerif, serif;
}
.font--light {
  font-weight: 300;
}
.font--semi-light {
  font-weight: 400;
}
.font--semi-bold {
  font-weight: 600;
}

.sdx--dark-theme .h1,
.sdx--dark-theme .h2,
.sdx--dark-theme .h3,
.sdx--dark-theme .h4,
.sdx--dark-theme .h5,
.sdx--dark-theme .h6,
.sdx--dark-theme .hero,
.sdx--dark-theme .d1,
.sdx--dark-theme .d2,
.sdx--dark-theme .d3 {
  color: unset;
}
.sdx--dark-theme .h1,
.sdx--dark-theme .text-h1,
.sdx--dark-theme h1,
.sdx--dark-theme .h2,
.sdx--dark-theme .text-h2,
.sdx--dark-theme h2,
.sdx--dark-theme .h3,
.sdx--dark-theme .text-h3,
.sdx--dark-theme h3,
.sdx--dark-theme .h4,
.sdx--dark-theme .text-h4,
.sdx--dark-theme h4,
.sdx--dark-theme .d1,
.sdx--dark-theme .text-d1,
.sdx--dark-theme .d2,
.sdx--dark-theme .text-d2,
.sdx--dark-theme .d3,
.sdx--dark-theme .text-d3 {
  font-weight: 600;
}
.sdx--dark-theme .p,
.sdx--dark-theme .paragraph,
.sdx--dark-theme p {
  font-weight: 500;
}
.sdx--dark-theme .h1,
.sdx--dark-theme .text-h1,
.sdx--dark-theme h1 {
  letter-spacing: -0.8px;
}
.sdx--dark-theme .h2,
.sdx--dark-theme .text-h2,
.sdx--dark-theme h2 {
  letter-spacing: -0.6px;
}
.sdx--dark-theme .h3,
.sdx--dark-theme .text-h3,
.sdx--dark-theme h3 {
  letter-spacing: -0.5px;
}
.sdx--dark-theme .h4,
.sdx--dark-theme .text-h4,
.sdx--dark-theme h4 {
  letter-spacing: -0.2px;
}
.sdx--dark-theme .h5,
.sdx--dark-theme .text-h5,
.sdx--dark-theme h5 {
  letter-spacing: -0.1px;
}
.sdx--dark-theme .h6,
.sdx--dark-theme .text-h6,
.sdx--dark-theme h6 {
  letter-spacing: 0px;
}
.sdx--dark-theme .d1,
.sdx--dark-theme .text-d1 {
  letter-spacing: -1.4px;
}
.sdx--dark-theme .d2,
.sdx--dark-theme .text-d2 {
  letter-spacing: -1px;
}
.sdx--dark-theme .d3,
.sdx--dark-theme .text-d3 {
  letter-spacing: -0.9px;
}
.sdx--dark-theme .code {
  background-color: #242424;
  border: 1px solid #b1b9be;
  border-radius: 4px;
  color: #cfd5d9;
  font-size: 16px;
}
.sdx--dark-theme strong,
.sdx--dark-theme b {
  color: #fff;
}

:host {
  padding-top: 0 !important;
  height: auto !important;
  display: inline !important;
}

.component {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  border: 1px solid transparent;
  box-shadow: 0 4px 20px 0 transparent;
  user-select: none;
  container-type: inline-size;
}
.component.animated {
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
}
.component:hover:where(:not(.is-touchscreen)).card, .component:hover:where(:not(.is-touchscreen)).product, .component:hover:where(:not(.is-touchscreen)).product-out-of-stock, .component:hover:where(:not(.is-touchscreen)).product-button, .component:focus-visible.card, .component:focus-visible.product, .component:focus-visible.product-out-of-stock, .component:focus-visible.product-button {
  border-color: #666;
  box-shadow: 0 4px 20px 0 rgba(51, 51, 51, 0.16);
}
.component:hover:where(:not(.is-touchscreen)) .image, .component:focus-visible .image {
  transition-duration: 800ms;
  transform: scale(1.05);
}
.component:hover:where(:not(.is-touchscreen)) .link, .component:focus-visible .link {
  text-decoration-thickness: 2px;
  color: #0048cf;
  text-decoration-color: #0048cf;
}
.component:hover:where(:not(.is-touchscreen)) .link.link--white, .component:focus-visible .link.link--white {
  color: #fff;
  text-decoration-color: #fff;
}
.component:hover:where(:not(.is-touchscreen)) .button.button--secondary, .component:focus-visible .button.button--secondary {
  background-color: #d1e6f9;
  border: 1px solid #0048cf;
  color: #0048cf;
}
.component .first {
  overflow: hidden;
}
.component .first .image {
  display: block;
  aspect-ratio: 4/3;
  object-fit: cover;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.component .second {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  min-height: 153px;
}
@media (min-width: 480px) {
  .component .second {
    padding: 24px;
  }
}
.component .second .tag,
.component .second .stock-counter,
.component .second .time-counter,
.component .second .reserved-space {
  height: 44px;
}
.component .second .tag {
  margin: -2px 0 2px 0;
}
.component .second .time-counter {
  padding-top: 6px;
}
.component .second .label {
  margin-bottom: 8px;
}
.component .second .description {
  color: #474747;
  margin-bottom: 16px;
  flex-grow: 1;
}
.component .second .description.empty {
  margin: 0;
}
.component.auto .second {
  hyphens: auto;
}
.component.split, .component.split-sidekick, .component.standard:where(.has-image) {
  background: #eef3f6;
  height: auto;
  flex-direction: column-reverse;
  background-position: center;
  --gradient-width: 100%;
}
.component.split .first,
.component.split .second, .component.split-sidekick .first,
.component.split-sidekick .second, .component.standard:where(.has-image) .first,
.component.standard:where(.has-image) .second {
  flex-basis: auto;
}
@media (min-width: 768px) {
  .component.split, .component.split-sidekick, .component.standard:where(.has-image) {
    --gradient-width: 55%;
    flex-direction: row-reverse;
  }
  .component.split .first,
  .component.split .second, .component.split-sidekick .first,
  .component.split-sidekick .second, .component.standard:where(.has-image) .first,
  .component.standard:where(.has-image) .second {
    flex-basis: 50%;
  }
}
.component.split .second, .component.split-sidekick .second, .component.standard:where(.has-image) .second {
  padding: 24px 16px 40px;
}
.component.split .second .description, .component.split-sidekick .second .description, .component.standard:where(.has-image) .second .description {
  color: #015;
}
.component.split .second .description ::slotted(ul), .component.split-sidekick .second .description ::slotted(ul), .component.standard:where(.has-image) .second .description ::slotted(ul) {
  line-height: 32px;
}
.component.split.has-dark-background .label,
.component.split.has-dark-background .description, .component.split-sidekick.has-dark-background .label,
.component.split-sidekick.has-dark-background .description, .component.standard:where(.has-image).has-dark-background .label,
.component.standard:where(.has-image).has-dark-background .description {
  color: #fff;
}
.component.split .image, .component.split-sidekick .image, .component.standard:where(.has-image) .image {
  border-radius: 0;
  object-fit: scale-down;
  height: 100%;
}
.component.split.white, .component.split-sidekick.white, .component.standard:where(.has-image).white {
  background: #fff;
}
.component.split.white.border, .component.split-sidekick.white.border, .component.standard:where(.has-image).white.border {
  border: 1px solid #666;
}
.component.gradient-sidekick, .component.standard.has-dark-background:not(.has-image) {
  border: 0;
  background: radial-gradient(110% 220% at 0% 140%, #13a3f4 0%, rgba(22, 158, 255, 0.5) 40%, rgba(16, 136, 222, 0) 100%), radial-gradient(290% 800% at 220% -440%, #dd1122 30%, #001155 100%);
}
.component.gradient-sidekick.gradient-1, .component.standard.has-dark-background:not(.has-image).gradient-1 {
  background: radial-gradient(110% 240% at 0% 130%, rgba(19, 163, 244, 0.9) 0%, rgba(22, 158, 255, 0.5) 55%, rgba(16, 136, 222, 0) 130%), #001155;
}
.component.gradient-sidekick.gradient-3, .component.standard.has-dark-background:not(.has-image).gradient-3 {
  background: linear-gradient(to right bottom, #5d1082, #4d137b, #3d1473, #2d146a, #1d1361, #191a66, #14206b, #0d266f, #163683, #1f4797, #2758ab, #2e6ac0);
}
.component.gradient-sidekick .first, .component.standard.has-dark-background:not(.has-image) .first {
  display: none;
  visibility: hidden;
}
.component.gradient-sidekick .label,
.component.gradient-sidekick .description, .component.standard.has-dark-background:not(.has-image) .label,
.component.standard.has-dark-background:not(.has-image) .description {
  color: #fff;
}
.component.cover, .component.cover-sidekick, .component.standard.has-bg-image:where(:not(.has-image)) {
  border: 0;
  background-position: center;
  --gradient-width: 100%;
}
@media (min-width: 480px) {
  .component.cover, .component.cover-sidekick, .component.standard.has-bg-image:where(:not(.has-image)) {
    --gradient-width: 55%;
  }
}
.component.cover .first, .component.cover-sidekick .first, .component.standard.has-bg-image:where(:not(.has-image)) .first {
  display: none;
  visibility: hidden;
}
.component.cover .label,
.component.cover .description, .component.cover-sidekick .label,
.component.cover-sidekick .description, .component.standard.has-bg-image:where(:not(.has-image)) .label,
.component.standard.has-bg-image:where(:not(.has-image)) .description {
  color: #fff;
  overflow-wrap: break-word;
}
.component.cover .label ::slotted(ul),
.component.cover .description ::slotted(ul), .component.cover-sidekick .label ::slotted(ul),
.component.cover-sidekick .description ::slotted(ul), .component.standard.has-bg-image:where(:not(.has-image)) .label ::slotted(ul),
.component.standard.has-bg-image:where(:not(.has-image)) .description ::slotted(ul) {
  line-height: 32px;
}
@media (min-width: 480px) {
  .component.cover .label,
  .component.cover .description, .component.cover-sidekick .label,
  .component.cover-sidekick .description, .component.standard.has-bg-image:where(:not(.has-image)) .label,
  .component.standard.has-bg-image:where(:not(.has-image)) .description {
    max-width: min(55%, 340px);
  }
}
.component.split {
  min-height: 520px;
}
@media (min-width: 768px) {
  .component.split {
    min-height: 0;
  }
}
.component.cover .second {
  min-height: 520px;
}
@media (min-width: 768px) {
  .component.split .second, .component.cover .second {
    min-height: 480px;
  }
}
@media (min-width: 1280px) {
  .component.split .second, .component.cover .second {
    min-height: 560px;
  }
}
.component.split-sidekick .second, .component.gradient-sidekick .second, .component.cover-sidekick .second {
  min-height: 340px;
}
@media (min-width: 768px) {
  .component.split-sidekick .second, .component.gradient-sidekick .second, .component.cover-sidekick .second {
    min-height: 432px;
  }
}
.component.split-sidekick {
  min-height: 340px;
}
@media (min-width: 768px) {
  .component.split-sidekick {
    min-height: 432px;
  }
}
.component.split-sidekick .second {
  min-height: 0;
}
.component.standard {
  border: 0;
  height: 100%;
  background: #eef3f6;
}
.component.standard:not(.has-image) .first {
  display: none;
  visibility: hidden;
}
.component.standard .ratio-1-1 {
  aspect-ratio: 1/1;
}
.component.standard .ratio-16-9 {
  aspect-ratio: 16/9;
}
.component.standard.content-bottom .first,
.component.standard.content-bottom .second, .component.standard.content-top .first,
.component.standard.content-top .second {
  flex-basis: auto;
}
.component.standard.content-bottom {
  flex-direction: column;
}
.component.standard.content-top {
  flex-direction: column-reverse;
}
.component.standard.gradient-1 {
  border: 0;
  background: radial-gradient(110% 240% at 0% 130%, rgba(19, 163, 244, 0.9) 0%, rgba(22, 158, 255, 0.5) 55%, rgba(16, 136, 222, 0) 130%), #001155;
}
.component.standard.gradient-2 {
  border: 0;
  background: radial-gradient(110% 220% at 0% 140%, #13a3f4 0%, rgba(22, 158, 255, 0.5) 40%, rgba(16, 136, 222, 0) 100%), radial-gradient(290% 800% at 220% -440%, #dd1122 30%, #001155 100%);
}
.component.standard.gradient-3 {
  border: 0;
  background: linear-gradient(to right bottom, #5d1082, #4d137b, #3d1473, #2d146a, #1d1361, #191a66, #14206b, #0d266f, #163683, #1f4797, #2758ab, #2e6ac0);
}
.component.standard.cloud {
  background: #f9f9f9;
}
.component.standard.white {
  background: #fff;
}
.component.standard.white.border {
  border: 1px solid #666;
}
.component.standard.content-bottom .label,
.component.standard.content-bottom .description, .component.standard.content-top .label,
.component.standard.content-top .description {
  max-width: none;
  flex-grow: unset;
}
.component.standard.content-bottom {
  --gradient-direction: 0deg;
}
.component.standard.content-bottom .label,
.component.standard.content-bottom .tag {
  margin-top: auto;
}
.component.standard.content-bottom .tag + .label {
  margin-top: 0;
}
.component.standard.content-bottom.has-contained-image .second {
  padding-top: 0;
}
.component.standard.content-top {
  --gradient-direction: 180deg;
}
.component.standard.content-top.has-contained-image .second {
  padding-bottom: 0;
}
.component.split .second, .component.split-sidekick .second, .component.gradient-sidekick .second, .component.cover .second, .component.cover-sidekick .second {
  padding: 24px 16px;
}
@media (min-width: 480px) {
  .component.split .second, .component.split-sidekick .second, .component.gradient-sidekick .second, .component.cover .second, .component.cover-sidekick .second {
    padding: 48px 32px 32px;
  }
}
.component.standard .second {
  padding: 24px 16px;
}
@media (min-width: 480px) {
  .component.standard .second {
    padding: 32px;
  }
  @container (width < 436px) {
    .component.standard .second {
      padding: 24px;
    }
  }
}
.component.product .image, .component.product-out-of-stock .image, .component.product-button .image {
  aspect-ratio: 1/1;
  object-fit: contain;
}
.component.product .description, .component.product-out-of-stock .description, .component.product-button .description {
  line-height: 24px;
  letter-spacing: -0.1px;
  font-size: 20px;
  font-weight: 600;
  color: #015;
  margin-bottom: 24px;
}
@media (min-width: 1024px) {
  .component.product .description, .component.product-out-of-stock .description, .component.product-button .description {
    line-height: 32px;
    letter-spacing: -0.35px;
    font-size: 24px;
  }
}
.component.product button, .component.product-out-of-stock button, .component.product-button button {
  min-width: 156px;
  min-height: 48px;
}
.component.product button sdx-icon, .component.product-out-of-stock button sdx-icon, .component.product-button button sdx-icon {
  margin-right: 8px;
}
@media (min-width: 1024px) {
  .component.product .first, .component.product-out-of-stock .first, .component.product-button .first {
    padding: 32px;
  }
  .component.product .second, .component.product-out-of-stock .second, .component.product-button .second {
    padding: 0 32px 40px;
  }
  .component.product .label, .component.product-out-of-stock .label, .component.product-button .label {
    margin-bottom: 4px;
  }
  .component.product .link, .component.product-out-of-stock .link, .component.product-button .link {
    opacity: 0;
  }
  .component.product .link.animated, .component.product-out-of-stock .link.animated, .component.product-button .link.animated {
    transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .component.product:hover .link, .component.product:focus .link, .component.product-out-of-stock:hover .link, .component.product-out-of-stock:focus .link, .component.product-button:hover .link, .component.product-button:focus .link {
    opacity: 1;
  }
}
@media (max-width: 1023px) {
  .component.product, .component.product-out-of-stock, .component.product-button {
    border-radius: 0;
  }
  .component.product .image, .component.product-out-of-stock .image, .component.product-button .image {
    transform: scale(1);
  }
  .component.product .label,
  .component.product .description, .component.product-out-of-stock .label,
  .component.product-out-of-stock .description, .component.product-button .label,
  .component.product-button .description {
    line-height: 24px;
    letter-spacing: -0.1px;
    font-size: 18px;
    font-weight: 600;
  }
  .component.product .second, .component.product-out-of-stock .second, .component.product-button .second {
    padding: 16px 0 0;
  }
  .component.product:hover, .component.product:focus, .component.product-out-of-stock:hover, .component.product-out-of-stock:focus, .component.product-button:hover, .component.product-button:focus {
    border-color: transparent;
    box-shadow: none;
  }
}
.component.product.product-out-of-stock .image, .component.product-out-of-stock.product-out-of-stock .image, .component.product-button.product-out-of-stock .image {
  opacity: 0.5;
}

.component.sdx--dark-theme:not(.gradient-sidekick,
.gradient-1,
.gradient-2,
.gradient-3) {
  background-color: #222;
}
.component.sdx--dark-theme:not(.gradient-sidekick,
.gradient-1,
.gradient-2,
.gradient-3).cloud {
  background-color: #242424;
}
@media (max-width: 1023px) {
  .component.sdx--dark-theme:not(.gradient-sidekick,
  .gradient-1,
  .gradient-2,
  .gradient-3).product, .component.sdx--dark-theme:not(.gradient-sidekick,
  .gradient-1,
  .gradient-2,
  .gradient-3).product-out-of-stock, .component.sdx--dark-theme:not(.gradient-sidekick,
  .gradient-1,
  .gradient-2,
  .gradient-3).product-button {
    background-color: transparent;
  }
}
.component.sdx--dark-theme:not(.gradient-sidekick,
.gradient-1,
.gradient-2,
.gradient-3):hover {
  box-shadow: none;
}
.component.sdx--dark-theme:not(.gradient-sidekick,
.gradient-1,
.gradient-2,
.gradient-3):hover.card, .component.sdx--dark-theme:not(.gradient-sidekick,
.gradient-1,
.gradient-2,
.gradient-3):focus-visible.card {
  border-color: #b1b9be;
}
.component.sdx--dark-theme:not(.gradient-sidekick,
.gradient-1,
.gradient-2,
.gradient-3):hover .link, .component.sdx--dark-theme:not(.gradient-sidekick,
.gradient-1,
.gradient-2,
.gradient-3):focus-visible .link {
  color: #5ca3ff;
  text-decoration-color: #5ca3ff;
}
.component.sdx--dark-theme:not(.gradient-sidekick,
.gradient-1,
.gradient-2,
.gradient-3):hover .link.link--white, .component.sdx--dark-theme:not(.gradient-sidekick,
.gradient-1,
.gradient-2,
.gradient-3):focus-visible .link.link--white {
  color: #fff;
  text-decoration-color: #fff;
}
.component.sdx--dark-theme:not(.gradient-sidekick,
.gradient-1,
.gradient-2,
.gradient-3):hover .button.button--secondary, .component.sdx--dark-theme:not(.gradient-sidekick,
.gradient-1,
.gradient-2,
.gradient-3):focus-visible .button.button--secondary {
  background-color: rgba(66, 148, 255, 0.15);
  border: 1px solid #5ca3ff;
  color: #5ca3ff;
}
.component.sdx--dark-theme:not(.gradient-sidekick,
.gradient-1,
.gradient-2,
.gradient-3) .second .label {
  color: #e6e6e6;
}
.component.sdx--dark-theme:not(.gradient-sidekick,
.gradient-1,
.gradient-2,
.gradient-3) .second .description {
  color: #d6d6d6;
}`,p=l,h=class{constructor(t){o(this,t),this.layout="card",this.background="",this.contentPosition="left",this.backgroundColor="",this.border=!1,this.theme=void 0,this.label=void 0,this.labelAriaLevel=void 0,this.labelVisualLevel=void 0,this.tagLabel=void 0,this.tagTheme="standard",this.tagIconName=void 0,this.buttonIconName=void 0,this.date=void 0,this.stockAmount=0,this.stockTotal=0,this.imageSrc="",this.imageLoading="lazy",this.imageFetchPriority="auto",this.imageAspectRatio="4:3",this.imageAlt="",this.backgroundSize="cover",this.backgroundImageSrc=void 0,this.objectFit=void 0,this.href=void 0,this.hrefLabel=" ",this.hrefAriaLabel=void 0,this.target=void 0,this.hyphens="manual",this.animated=!0}isLayout(t){return{split:["split","split-sidekick"],cover:["cover","cover-sidekick"],gradient:["gradient-sidekick"],product:["product","product-out-of-stock","product-button"],standard:["standard"]}[t].includes(this.layout)}hasDarkBackground(){return this.isLayout("cover")||this.isLayout("gradient")||this.isLayout("split")&&!!this.backgroundImageSrc||this.isLayout("standard")&&!!this.backgroundImageSrc||this.isLayout("standard")&&!!this.background}getHeading(){let t="h3";return this.isLayout("standard")&&this.labelVisualLevel?t=`h${this.labelVisualLevel}`:this.isLayout("cover")||this.isLayout("split")||this.isLayout("gradient")||this.isLayout("standard")?t="h2":this.isLayout("product")&&(t="h4"),t}hasContainedImage(){return!!this.imageSrc&&this.objectFit!=="cover"&&this.objectFit!=="fill"}getComponentClassNames(){return{component:!0,[this.layout]:!0,[r(this.el)]:!0,[this.background]:!0,[this.hyphens]:!0,"is-touchscreen":a(),"has-dark-background":this.hasDarkBackground(),"has-image":!!this.imageSrc,"has-contained-image":this.hasContainedImage(),"has-bg-image":!!this.backgroundImageSrc,[`content-${this.contentPosition}`]:this.isLayout("standard"),[this.backgroundColor]:this.isLayout("standard")||this.isLayout("split"),animated:this.animated,border:this.border}}getLinkClassNames(){const{target:t,href:e}=this;return{[d(e,t)]:!0,"link--white":this.hasDarkBackground(),animated:this.animated}}getLabelClassNames(){return{label:!0,[this.getHeading()]:!0}}getImageClassNames(){return{image:!0,"image--rounded":!0,[`ratio-${this.imageAspectRatio.replace(/:/,"-")}`]:this.isLayout("standard")}}getBackgroundStyles(){return!this.isLayout("cover")&&!(this.isLayout("split")&&this.backgroundImageSrc)&&!(this.isLayout("standard")&&this.backgroundImageSrc)?void 0:{backgroundImage:`linear-gradient(var(--gradient-direction, 90deg), #1d1d1d 0%, transparent var(--gradient-width, 55%)), url(${this.isLayout("split")||this.isLayout("standard")?this.backgroundImageSrc:this.imageSrc})`,backgroundSize:`${this.backgroundSize}, ${this.backgroundSize}`}}render(){return n("a",{key:"b4b3871a16efa346a3a8812d586cbf9bc58af42f",class:this.getComponentClassNames(),style:this.getBackgroundStyles(),href:this.href,target:this.target,draggable:!1},n("div",{key:"aca66300843fa3c8e47470f7c6720e1fe8021cc9",class:"first"},n("img",{key:"0d1a5de3b4b445f3380e04c90222e9a9a6fc34af",class:this.getImageClassNames(),src:this.imageSrc,alt:this.imageAlt,draggable:!1,style:(this.isLayout("split")||this.isLayout("standard"))&&this.objectFit?{objectFit:this.objectFit}:void 0,loading:this.imageLoading,ref:t=>t.fetchPriority=this.imageFetchPriority})),n("div",{key:"00a224dc1db5aabbc3b240eb08acd6b5d65d0917",class:"second"},!this.date&&!this.stockAmount&&this.tagLabel&&n("sdx-tag",{key:"d822717d4c3772ba539a0e0cfe483a38e18c134b",class:"tag",label:this.tagLabel,theme:this.theme||this.tagTheme,"icon-name":this.tagIconName,background:this.hasDarkBackground()?"dark":"light"}),this.date&&n("sdx-countdown",{key:"64a4fd14246175d9a22f7d0919d18923e5f687fb",class:"time-counter",size:"small",date:this.date}),!!this.stockAmount&&n("sdx-stock-counter",{key:"ab9bcdf3536d737c3f5dc6142ed81ffc3088331a",class:"stock-counter",theme:this.theme,amount:this.stockAmount,total:this.stockTotal}),this.isLayout("product")&&!this.date&&!this.stockAmount&&!this.tagLabel&&n("div",{key:"00dbb1646c769292e175bfc1a7a0129f1202ac9c",class:"reserved-space"}),this.label&&n("div",{key:"118408acd510d0e27a0196f6f9cb01bef3dd1db6",class:this.getLabelClassNames(),role:this.labelAriaLevel?"heading":void 0,"aria-level":this.labelAriaLevel},this.label),n("div",{key:"2f21ad90b7920b3bf0f5221efb1845519d266067",class:c(this.el)?"description":"empty description"},n("slot",{key:"e02ecf8736210c0fa13d815bb157e8508dbf8c75"})),this.layout==="product-button"&&n("button",{key:"c3dfbc5c67736392453d2d7ff3ec330eefaef38c",class:"button button--secondary"},!!this.buttonIconName&&n("sdx-icon",{key:"14bd32f24863810d53b0018350150f639ce29161","icon-name":this.buttonIconName}),this.hrefLabel||s("Add to cart",this.el.lang)),this.layout!=="product-button"&&n("a",{key:"6bae4d75c1a0c214aac623c83c1460e14c2e35ea",href:this.href,class:this.getLinkClassNames(),"aria-label":this.hrefAriaLabel,target:this.target},this.hrefLabel)))}get el(){return i(this)}};h.style=p;export{h as sdx_teaser};
