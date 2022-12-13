// https://www.redditstatic.com/desktop2x/vendors~shreddit-player.64c7ce0358a17a1c8254.js
// Retrieved at 12/13/2022, 6:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~shreddit-player"], {
		"./node_modules/@reddit/faceplate/lib/custom-event.js": function(e, t, r) {
			"use strict";

			function n(e, t, r = !0) {
				return new CustomEvent(e, {
					composed: !0,
					bubbles: r,
					cancelable: !0,
					detail: t
				})
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./node_modules/@reddit/shreddit.components.shreddit-player/dist/index.js": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "ShredditPlayer", (function() {
				return Br
			}));
			var n = r("./node_modules/lit/index.js"),
				i = r("./node_modules/lit/decorators.js"),
				s = r("./node_modules/lit-html/lit-html.js");
			const o = e => null != e ? e : s.d;
			var a = r("./node_modules/tslib/tslib.es6.js");
			const l = {
					ATTRIBUTE: 1,
					CHILD: 2,
					PROPERTY: 3,
					BOOLEAN_ATTRIBUTE: 4,
					EVENT: 5,
					ELEMENT: 6
				},
				d = e => (...t) => ({
					_$litDirective$: e,
					values: t
				});
			class c {
				constructor(e) {}
				get _$AU() {
					return this._$AM._$AU
				}
				_$AT(e, t, r) {
					this._$Ct = e, this._$AM = t, this._$Ci = r
				}
				_$AS(e, t) {
					return this.update(e, t)
				}
				update(e, t) {
					return this.render(...t)
				}
			}
			const u = d(class extends c {
				constructor(e) {
					var t;
					if (super(e), e.type !== l.ATTRIBUTE || "style" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")
				}
				render(e) {
					return Object.keys(e).reduce((t, r) => {
						const n = e[r];
						return null == n ? t : t + `${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`
					}, "")
				}
				update(e, [t]) {
					const {
						style: r
					} = e.element;
					if (void 0 === this.vt) {
						this.vt = new Set;
						for (const e in t) this.vt.add(e);
						return this.render(t)
					}
					this.vt.forEach(e => {
						null == t[e] && (this.vt.delete(e), e.includes("-") ? r.removeProperty(e) : r[e] = "")
					});
					for (const n in t) {
						const e = t[n];
						null != e && (this.vt.add(n), n.includes("-") ? r.setProperty(n, e) : r[n] = e)
					}
					return s.c
				}
			});
			var h = r("./node_modules/@reddit/faceplate/lib/custom-event.js");
			const p = {
					rootMargin: "200px"
				},
				f = new Map;

			function g(e, t) {
				return !f.has(e) && t && f.set(e, function(e) {
					return new IntersectionObserver(e => {
						for (const t of e) {
							const e = t.target,
								r = t.isIntersecting ? Object(h.a)("faceplate-enter", t, !1) : Object(h.a)("faceplate-leave", t, !1);
							e.dispatchEvent(r)
						}
					}, e)
				}(t)), f.get(e)
			}
			class v {
				constructor(e = p) {
					this._observer = g(JSON.stringify(e), e)
				}
				observe(e) {
					this._observer.observe(e)
				}
				unobserve(e) {
					this._observer.unobserve(e)
				}
			}
			const m = Symbol("mixins/observer");
			const b = Symbol("mixins/user-action");
			var y, _, w;
			! function(e) {
				e[e.emergency = 0] = "emergency", e[e.alert = 1] = "alert", e[e.critical = 2] = "critical", e[e.error = 3] = "error", e[e.warning = 4] = "warning", e[e.notice = 5] = "notice", e[e.info = 6] = "info", e[e.success = 7] = "success", e[e.debug = 8] = "debug", e[e.none = 9] = "none"
			}(y || (y = {})),
			function(e) {
				e.Programmatic = "programmatic", e.Eager = "eager", e.Action = "action", e.Intent = "intent", e.Lazy = "lazy", e.Preload = "preload"
			}(_ || (_ = {})),
			function(e) {
				e.Get = "get", e.Post = "post", e.Dialog = "dialog", e.Log = "log"
			}(w || (w = {}));
			let E = class extends(function(e) {
				if (b in e) return e;
				class t extends e {
					constructor() {
						super(...arguments), this._userActionEnabled = !1, this._loadingHandleClick = () => {
							this._userActionEnabled && this.userActionCallback()
						}, this._loadingHandleKeyDown = e => {
							this._userActionEnabled && ("Enter" !== e.code && "Space" !== e.code || (e.preventDefault(), e.stopPropagation(), this.userActionCallback()))
						}
					}
					get isActionable() {
						return this._userActionEnabled
					}
					enableUserActions() {
						this._userActionEnabled || (this._userActionEnabled = !0, this.addEventListener("click", this._loadingHandleClick), this.addEventListener("keydown", this._loadingHandleKeyDown))
					}
					disableUserActions() {
						this._userActionEnabled && (this._userActionEnabled = !1, this.removeEventListener("click", this._loadingHandleClick), this.removeEventListener("keydown", this._loadingHandleKeyDown))
					}
					userActionCallback() {}
				}
				return t[b] = !0, t
			}(function(e) {
				if (m in e) return e;
				class t extends e {
					constructor() {
						super(...arguments), this._observer = null, this._handleEnter = e => {
							this.observerIsIntersectingCallback(e.detail)
						}, this._handleLeave = e => {
							this.observerIsNotIntersectingCallback(e.detail)
						}
					}
					get isObserved() {
						return !!this._observer
					}
					enableObserver(e) {
						this._observer || (this._observer = new v(e), this._observer.observe(this), this.addEventListener("faceplate-enter", this._handleEnter), this.addEventListener("faceplate-leave", this._handleLeave))
					}
					disableObserver() {
						this._observer && (this._observer.unobserve(this), this._observer = null, this.removeEventListener("faceplate-enter", this._handleEnter), this.removeEventListener("faceplate-leave", this._handleLeave))
					}
					observerIsIntersectingCallback(e) {}
					observerIsNotIntersectingCallback(e) {}
				}
				return t[m] = !0, t
			}(n.a))) {
				constructor() {
					super(...arguments), this.src = "", this.srcset = "", this.sizes = "", this.loading = _.Lazy, this.width = 0, this.height = 0, this.perfmark = "", this.objectfit = void 0, this.isRequestInProgress = !1
				}
				static get styles() {
					return n.b`
      :host {
        display: inline-block;
      }

      :host([loading='action']) div.placeholder {
        cursor: pointer;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: inherit;
        width: inherit;
        margin: auto;
        position: relative;
        overflow: hidden;
        border-radius: inherit;
      }

      img {
        width: 100%;
        height: 100%;
      }

      * {
        max-height: inherit;
        max-width: inherit;
        min-height: inherit;
        min-width: inherit;
        object-fit: inherit;
      }
    `
				}
				connectedCallback() {
					super.connectedCallback(), this.img || this.executeLoadingStrategy()
				}
				update(e) {
					e.has("src") && (this.img = void 0, this.isRequestInProgress = !1, this.executeLoadingStrategy()), super.update(e)
				}
				executeLoadingStrategy() {
					this.loading === _.Lazy ? this.enableObserver() : this.loading === _.Action ? this.enableUserActions() : this.loading === _.Eager && this.loadContent()
				}
				observerIsIntersectingCallback() {
					this.isObserved && this.disableObserver(), this.isRequestInProgress || this.loadContent()
				}
				userActionCallback() {
					this.isActionable && this.disableUserActions(), this.isRequestInProgress || this.loadContent()
				}
				disconnectedCallback() {
					super.disconnectedCallback(), this.isObserved && this.disableObserver(), this.isActionable && this.disableUserActions()
				}
				async loadContent() {
					const {
						src: e
					} = this, t = new Image;
					t.onload = () => {
						if (t.src !== new URL(this.src, location.origin).href) return;
						this.isRequestInProgress = !1, this.img = t, this.requestUpdate(), this.perfmark && this.updateComplete.then(() => {
							performance.mark(this.perfmark)
						});
						const e = Object(h.a)("faceplate-load", {
							resource: t.src,
							src: this.src
						});
						this.dispatchEvent(e)
					}, t.onerror = () => {
						const e = new Error("Image failed to load"),
							t = Object(h.a)("faceplate-error", e);
						this.dispatchEvent(t)
					}, this.isRequestInProgress = !0, t.src = e
				}
				render() {
					const e = this.isRequestInProgress && this.loading === _.Action;
					let t = n.c`
      <slot name=${o(e?"loading":void 0)}></slot>
    `;
					const r = this.objectfit ? u({
						objectFit: encodeURIComponent(this.objectfit)
					}) : void 0;
					return this.img && (t = n.c`
        <img
          src="${this.img.src}"
          srcset="${o(this.srcset)}"
          sizes="${o(this.sizes)}"
          alt="${o(this.alt)}"
          style="${o(r)}"
        />
      `), n.c`
      <div
        class="${this.img?"loaded":"placeholder"}"
        style="${u({width:this.width?this.width+"px":"inherit",height:this.height?this.height+"px":"inherit"})}"
        tabindex=${o(this.isActionable?0:void 0)}
      >
        ${t}
      </div>
    `
				}
			};

			function S(e) {
				const t = [e];
				return t.raw = t, Object(n.b)(t)
			}
			Object(a.h)([Object(i.b)({
				type: String
			})], E.prototype, "src", void 0), Object(a.h)([Object(i.b)({
				type: String
			})], E.prototype, "srcset", void 0), Object(a.h)([Object(i.b)({
				type: String
			})], E.prototype, "sizes", void 0), Object(a.h)([Object(i.b)({
				type: String
			})], E.prototype, "loading", void 0), Object(a.h)([Object(i.b)({
				type: Number
			})], E.prototype, "width", void 0), Object(a.h)([Object(i.b)({
				type: Number
			})], E.prototype, "height", void 0), Object(a.h)([Object(i.b)({
				type: String
			})], E.prototype, "perfmark", void 0), Object(a.h)([Object(i.b)({
				type: String
			})], E.prototype, "objectfit", void 0), Object(a.h)([Object(i.b)({
				type: String
			})], E.prototype, "alt", void 0), E = Object(a.h)([Object(i.a)("faceplate-img")], E);
			n.b;
			var T = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			let k = class extends E {
				constructor() {
					super(...arguments), this.shouldRenderImageLink = !1
				}
				render() {
					const {
						img: e
					} = this, t = {
						width: this.width ? this.width + "px" : "inherit",
						height: this.height ? this.height + "px" : "inherit"
					};
					return n.c`
      <div
        class="${e?"loaded":"placeholder"}"
        style="${u(t)}"
        tabindex="${o(this.isActionable?0:void 0)}"
      >
        ${this.content}
      </div>
    `
				}
				static get styles() {
					return [super.styles, S(".shreddit-img__image{height:100%;max-height:inherit}")]
				}
				get content() {
					const {
						img: e
					} = this;
					return e ? this.image : this.placeholder
				}
				get imageStyle() {
					const e = {};
					return this.objectfit && (e.objectFit = encodeURIComponent(this.objectfit)), e
				}
				get image() {
					let e = n.c`
      <img
        class="shreddit-img__image"
        alt="${o(this.alt)}"
        src="${this.src}"
        style="${u(this.imageStyle)}"
      />
    `;
					return this.shouldRenderImageLink && (e = n.c`
        <a
          href="${this.linkHref||this.src}"
          title="${o(this.linkTitle)}"
          rel="${o(this.linkRel)}"
          target="_blank"
        >
          ${e}
        </a>
      `), e
				}
				get placeholder() {
					const {
						isRequestInProgress: e
					} = this;
					return e && this.loading === _.Action ? this.loadingSlot : this.defaultSlot
				}
				get loadingSlot() {
					return n.c`<slot name="loading"></slot>`
				}
				get defaultSlot() {
					return n.c`<slot></slot>`
				}
			};
			T([Object(i.b)({
				type: String
			})], k.prototype, "alt", void 0), T([Object(i.b)({
				type: Boolean,
				attribute: "should-render-image-link"
			})], k.prototype, "shouldRenderImageLink", void 0), T([Object(i.b)({
				type: String,
				attribute: "link-title"
			})], k.prototype, "linkTitle", void 0), T([Object(i.b)({
				type: String,
				attribute: "link-href"
			})], k.prototype, "linkHref", void 0), T([Object(i.b)({
				type: String,
				attribute: "link-rel"
			})], k.prototype, "linkRel", void 0), k = T([Object(i.a)("shreddit-img")], k);
			class A extends c {
				constructor(e) {
					if (super(e), this.it = s.d, e.type !== l.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings")
				}
				render(e) {
					if (e === s.d || null == e) return this._t = void 0, this.it = e;
					if (e === s.c) return e;
					if ("string" != typeof e) throw Error(this.constructor.directiveName + "() called with a non-string value");
					if (e === this.it) return this._t;
					this.it = e;
					const t = [e];
					return t.raw = t, this._t = {
						_$litType$: this.constructor.resultType,
						strings: t,
						values: []
					}
				}
			}
			A.directiveName = "unsafeHTML", A.resultType = 1;
			d(A);
			class x extends A {}
			x.directiveName = "unsafeSVG", x.resultType = 2;
			const R = d(x);
			var O;
			! function(e) {
				e.Small = "sm", e.Medium = "md", e.Large = "lg", e.ExtraLarge = "xl"
			}(O || (O = {}));
			const L = n.b`
  :host {
    display: inline-block;
    fill: currentColor;
    vertical-align: middle;
    line-height: 1em;
  }

  svg {
    fill: currentColor;
    width: auto;
  }

  :host([size='sm']) > svg {
    height: 1em;
  }

  :host([size='md']) > svg {
    height: 1.25em;
  }

  :host([size='lg']) > svg {
    height: 1.5em;
  }

  :host([size='xl']) > svg {
    height: 2em;
  }
`;

			function C(e, t, r, s = L) {
				if (r) {
					class o extends n.a {
						constructor() {
							super(...arguments), this.size = O.Small, this.fill = !1
						}
						static get styles() {
							return s
						}
						render() {
							return this.fill ? r : t
						}
					}
					Object(a.h)([Object(i.b)({
						type: String,
						reflect: !0
					})], o.prototype, "size", void 0), Object(a.h)([Object(i.b)({
						type: Boolean
					})], o.prototype, "fill", void 0), window.customElements.define(e, o)
				} else {
					class r extends n.a {
						constructor() {
							super(...arguments), this.size = O.Small
						}
						static get styles() {
							return s
						}
						render() {
							return t
						}
					}
					Object(a.h)([Object(i.b)({
						type: String,
						reflect: !0
					})], r.prototype, "size", void 0), window.customElements.define(e, r)
				}
			}
			C("icon-checkmark", n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 15.583a.72.72 0 01-.513-.212L1.558 9.942l.884-.884L7.5 14.116 18.058 3.558l.884.884-10.93 10.929a.723.723 0 01-.512.212z"/></svg>')}`, n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 15.958a1.102 1.102 0 01-.778-.322l-5.429-5.429 1.414-1.414L7.5 13.586 17.793 3.293l1.414 1.414L8.278 15.636a1.101 1.101 0 01-.778.322z"/></svg>')}`);
			C("icon-collapse-left", n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M18.183 19.067L12.3 13.179v3.491h-1.25v-5a.625.625 0 01.624-.625h5V12.3H13.18l5.887 5.888-.884.879zM7.75 6.866L1.862.979l-.884.883L6.866 7.75H3.375V9h5A.625.625 0 009 8.375v-5H7.75v3.491z"/></svg>')}`, n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9 3.375v5A.625.625 0 018.375 9h-5a.625.625 0 01-.442-1.067L4.726 6.14.714 2.127 2.128.713 6.14 4.726l1.793-1.793A.625.625 0 019 3.375zm10.332 14.543l-4.058-4.058 1.793-1.793A.626.626 0 0016.625 11h-5a.625.625 0 00-.625.625v5a.626.626 0 001.067.442l1.793-1.793 4.058 4.058 1.414-1.414z"/></svg>')}`);
			C("icon-expand-left", n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.134 3.25l4.933 4.933-.884.884L3.25 4.134v3.491H2v-5A.625.625 0 012.625 2h5v1.25H4.134zm12.616 9.125v3.491l-4.933-4.933-.884.884 4.933 4.933h-3.491V18h5a.624.624 0 00.625-.625v-5h-1.25z"/></svg>')}`, n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.274 4.86l3.058 3.058-1.414 1.414L4.86 6.274 3.067 8.067A.625.625 0 012 7.625v-5A.625.625 0 012.625 2h5a.625.625 0 01.442 1.067L6.274 4.86zm11.34 6.94a.627.627 0 00-.681.136l-1.793 1.79-3.058-3.058-1.414 1.414 3.058 3.058-1.793 1.793A.625.625 0 0012.375 18h5a.624.624 0 00.625-.625v-5a.626.626 0 00-.386-.575z"/></svg>')}`);
			C("icon-gif-post", n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_616_22)"><path d="M4.711 12.664A2.8 2.8 0 013.6 11.583 3.108 3.108 0 013.2 10a3.052 3.052 0 01.411-1.583c.267-.46.659-.834 1.129-1.082a3.37 3.37 0 011.616-.385c.333 0 .664.043.986.128.309.081.605.205.879.369l-.5 1.169a1.314 1.314 0 00-.563-.357 2.3 2.3 0 00-.754-.124 1.733 1.733 0 00-1.863 1.848c-.006.344.073.684.232.99a1.7 1.7 0 001.542.925c.258.004.513-.051.746-.162.209-.097.387-.25.513-.443.121-.185.185-.401.183-.622H6.124V9.619L9 9.6v.928a2.4 2.4 0 01-1.293 2.193 2.955 2.955 0 01-1.417.328 3.247 3.247 0 01-1.579-.385zm5.471-5.648H11.5v5.968h-1.318V7.016zm2.862 0H16.5v1.169h-2.138v1.392h1.79v1.169h-1.79v2.238h-1.318V7.016zM10 20a18.04 18.04 0 01-6.369-1.162 4.226 4.226 0 01-2.469-2.47 18.033 18.033 0 010-12.737 4.228 4.228 0 012.469-2.469 18.116 18.116 0 0112.738 0 4.228 4.228 0 012.469 2.469 18.035 18.035 0 010 12.738 4.225 4.225 0 01-2.469 2.469A18.04 18.04 0 0110 20zm0-18.75a16.8 16.8 0 00-5.929 1.082 2.978 2.978 0 00-1.739 1.739 16.783 16.783 0 000 11.857 2.98 2.98 0 001.739 1.74 16.858 16.858 0 0011.858 0 2.978 2.978 0 001.739-1.739 16.785 16.785 0 000-11.858 2.978 2.978 0 00-1.739-1.739A16.8 16.8 0 0010 1.25z"/></g><defs><clipPath id="clip0_616_22"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_616_23)"><path d="M18.838 3.631a4.228 4.228 0 00-2.469-2.469 18.116 18.116 0 00-12.738 0 4.228 4.228 0 00-2.469 2.469 18.033 18.033 0 000 12.737 4.226 4.226 0 002.469 2.47 18.035 18.035 0 0012.738 0 4.226 4.226 0 002.469-2.469 18.035 18.035 0 000-12.738zM9 10.53a2.4 2.4 0 01-1.293 2.193 2.955 2.955 0 01-1.417.328 3.246 3.246 0 01-1.579-.386A2.811 2.811 0 013.6 11.583 3.108 3.108 0 013.2 10a3.052 3.052 0 01.411-1.583c.267-.46.659-.834 1.129-1.082a3.37 3.37 0 011.616-.385c.333 0 .664.043.986.128.309.081.605.205.879.369l-.5 1.169a1.314 1.314 0 00-.563-.357 2.3 2.3 0 00-.754-.124 1.733 1.733 0 00-1.863 1.848c-.006.344.073.684.232.99a1.7 1.7 0 001.542.925c.258.004.513-.051.746-.162.209-.097.387-.25.513-.443.121-.185.185-.401.183-.622H6.124V9.619L9 9.6v.93zm2.5 2.454H10V7.016h1.5v5.968zm5-4.8h-2.138v1.393h1.79v1.169h-1.79v2.238H13V7.016h3.5v1.168z"/></g><defs><clipPath id="clip0_616_23"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			C("icon-play", n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.125 19.543A1.124 1.124 0 013 18.418V1.582A1.125 1.125 0 014.735.636l13.048 8.419a1.125 1.125 0 010 1.89L4.735 19.364a1.129 1.129 0 01-.61.179zM4.25 1.811v16.378L16.942 10 4.25 1.811z"/></svg>')}`, n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.125 19.543A1.126 1.126 0 013 18.418V1.582A1.125 1.125 0 014.735.636l13.048 8.418a1.126 1.126 0 010 1.891L4.735 19.363a1.13 1.13 0 01-.61.18z"/></svg>')}`);
			C("icon-pause", n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.875 19h-3.75A1.126 1.126 0 012 17.875V2.125A1.127 1.127 0 013.125 1h3.75A1.127 1.127 0 018 2.125v15.75A1.126 1.126 0 016.875 19zM3.25 17.75h3.5V2.25h-3.5v15.5zM16.875 19h-3.75A1.126 1.126 0 0112 17.875V2.125A1.127 1.127 0 0113.125 1h3.75A1.127 1.127 0 0118 2.125v15.75A1.126 1.126 0 0116.875 19zm-3.625-1.25h3.5V2.25h-3.5v15.5z"/></svg>')}`, n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.875 19h-3.75A1.127 1.127 0 012 17.875V2.125A1.127 1.127 0 013.125 1h3.75A1.127 1.127 0 018 2.125v15.75A1.127 1.127 0 016.875 19zm10 0h-3.75A1.127 1.127 0 0112 17.875V2.125A1.127 1.127 0 0113.125 1h3.75A1.127 1.127 0 0118 2.125v15.75A1.127 1.127 0 0116.875 19z"/></svg>')}`);
			C("icon-volume", n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.891 19.854c-.25 0-.494-.087-.687-.247l-5.389-4.662H2.108A1.125 1.125 0 011 13.807V6.193a1.125 1.125 0 011.108-1.138h1.707L9.19.405a1.089 1.089 0 011.168-.153A1.129 1.129 0 0111 1.285v17.43a1.129 1.129 0 01-.643 1.033c-.145.07-.305.106-.466.106zM2.251 13.7h2.03l5.47 4.727V1.572L4.28 6.305h-2.03V13.7zM16.124 10A3.13 3.13 0 0013 6.875v1.25a1.875 1.875 0 110 3.75v1.25A3.129 3.129 0 0016.125 10zM20 10a7.008 7.008 0 00-7-7v1.25a5.75 5.75 0 110 11.5V17a7.008 7.008 0 007-7z"/></svg>')}`, n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13 13.5v-2a1.5 1.5 0 100-3v-2a3.5 3.5 0 110 7zM13 3v2a5 5 0 110 10v2a7 7 0 100-14zM10.357.252A1.091 1.091 0 009.19.405l-5.374 4.65H2.108A1.125 1.125 0 001 6.193v7.614a1.125 1.125 0 001.108 1.138h1.707l5.39 4.663a1.081 1.081 0 001.153.14A1.131 1.131 0 0011 18.715V1.285a1.13 1.13 0 00-.643-1.033z"/></svg>')}`);
			C("icon-volume-mute", n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M16.784 9.5l2.558 2.558-.884.884-2.558-2.558-2.558 2.558-.884-.884L15.016 9.5l-2.558-2.558.884-.884L15.9 8.616l2.558-2.558.884.884L16.784 9.5zm-6.427 10.248A1.128 1.128 0 0011 18.715V1.286a1.131 1.131 0 00-.643-1.034A1.091 1.091 0 009.19.405L3.815 5.056H2.108A1.124 1.124 0 001 6.194v7.613a1.124 1.124 0 001.108 1.138h1.707L9.2 19.608a1.084 1.084 0 001.157.14zM2.25 6.306h2.031l5.47-4.733v16.855L4.28 13.7h-2.03V6.306z"/></svg>')}`, n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M11 1.285v17.43a1.131 1.131 0 01-.642 1.033 1.081 1.081 0 01-1.153-.14l-5.39-4.663H2.108A1.125 1.125 0 011 13.807V6.193a1.125 1.125 0 011.108-1.138h1.707L9.19.405a1.09 1.09 0 011.168-.153A1.129 1.129 0 0111 1.285zm8.607 5.922l-1.414-1.414L15.9 8.086l-2.293-2.293-1.414 1.414L14.486 9.5l-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414L17.314 9.5l2.293-2.293z"/></svg>')}`);
			C("icon-refresh", n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_457_91)"><path d="M16.75 11.5A7.25 7.25 0 119.5 4.25h4.069L11.31 6.133l.8.96 3.59-2.988a.626.626 0 000-.96L12.109.157l-.8.96L13.569 3H9.5a8.5 8.5 0 108.5 8.5h-1.25z"/></g><defs><clipPath id="clip0_457_91"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_457_79)"><path d="M16 11.5A6.5 6.5 0 119.5 5H11v1.914a1 1 0 001.665.747l3.318-2.951a1 1 0 000-1.495L12.665.265A1 1 0 0011 1.012V3H9.5a8.5 8.5 0 108.5 8.5h-2zm-2.214-7.512v-.05l.028.025-.028.025z"/></g><defs><clipPath id="clip0_457_79"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			C("icon-settings", n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_79)"><path d="M10 20c-.401 0-.802-.027-1.2-.079a1.145 1.145 0 01-.992-1.137v-1.073a.97.97 0 00-.627-.878A.98.98 0 006.1 17l-.755.753a1.149 1.149 0 01-1.521.1 10.16 10.16 0 01-1.671-1.671 1.149 1.149 0 01.1-1.523L3 13.906a.97.97 0 00.176-1.069.98.98 0 00-.887-.649H1.216A1.145 1.145 0 01.079 11.2a9.1 9.1 0 010-2.393 1.145 1.145 0 011.137-.992h1.073a.97.97 0 00.878-.627A.979.979 0 003 6.1l-.754-.754a1.15 1.15 0 01-.1-1.522 10.16 10.16 0 011.673-1.676 1.155 1.155 0 011.522.1L6.1 3a.966.966 0 001.068.176.98.98 0 00.649-.887V1.216A1.145 1.145 0 018.8.079a9.129 9.129 0 012.393 0 1.144 1.144 0 01.991 1.137v1.073a.971.971 0 00.628.878A.977.977 0 0013.905 3l.754-.754a1.152 1.152 0 011.522-.1c.62.49 1.18 1.05 1.671 1.671a1.15 1.15 0 01-.1 1.522L17 6.1a.967.967 0 00-.176 1.068.98.98 0 00.887.649h1.073a1.145 1.145 0 011.137.991 9.096 9.096 0 010 2.392 1.145 1.145 0 01-1.137.992h-1.073A1.041 1.041 0 0017 13.905l.753.755a1.149 1.149 0 01.1 1.521c-.49.62-1.05 1.18-1.671 1.671a1.149 1.149 0 01-1.522-.1L13.906 17a.97.97 0 00-1.069-.176.981.981 0 00-.65.887v1.073a1.144 1.144 0 01-.99 1.137A9.431 9.431 0 0110 20zm-.938-1.307a7.638 7.638 0 001.875 0v-.982a2.292 2.292 0 013.853-1.6l.693.694a8.796 8.796 0 001.326-1.326l-.694-.694a2.29 2.29 0 011.6-3.851h.982a7.746 7.746 0 000-1.876h-.982a2.213 2.213 0 01-2.034-1.4 2.223 2.223 0 01.438-2.451l.694-.693a8.76 8.76 0 00-1.327-1.326l-.692.694a2.219 2.219 0 01-2.434.445 2.221 2.221 0 01-1.419-2.041v-.979a7.638 7.638 0 00-1.875 0v.982a2.213 2.213 0 01-1.4 2.034 2.23 2.23 0 01-2.456-.438l-.693-.694a8.757 8.757 0 00-1.326 1.327l.694.692a2.216 2.216 0 01.445 2.434 2.22 2.22 0 01-2.041 1.418h-.982a7.746 7.746 0 000 1.876h.982a2.213 2.213 0 012.034 1.4 2.223 2.223 0 01-.438 2.451l-.694.693c.394.488.838.933 1.326 1.326l.694-.694a2.218 2.218 0 012.433-.445 2.22 2.22 0 011.418 2.041v.983zM10 13.229a3.23 3.23 0 110-6.458 3.23 3.23 0 010 6.458zm0-5.208a1.979 1.979 0 100 3.958 1.979 1.979 0 000-3.958z"/></g><defs><clipPath id="clip0_473_79"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, n.d`${R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_76)"><path d="M19.921 8.8a1.145 1.145 0 00-1.137-.991h-1.073a.98.98 0 01-.887-.649A.969.969 0 0117 6.1l.754-.754a1.15 1.15 0 00.1-1.522 10.16 10.16 0 00-1.671-1.671 1.152 1.152 0 00-1.522.1L13.905 3a.975.975 0 01-1.09.167.97.97 0 01-.628-.878V1.216A1.144 1.144 0 0011.2.079a9.129 9.129 0 00-2.4 0 1.145 1.145 0 00-.991 1.137v1.073a.98.98 0 01-.649.887A.966.966 0 016.1 3l-.754-.754a1.152 1.152 0 00-1.522-.1 10.16 10.16 0 00-1.676 1.673 1.15 1.15 0 00.1 1.522L3 6.1a.979.979 0 01.167 1.09.97.97 0 01-.878.627H1.216A1.145 1.145 0 00.079 8.8a9.1 9.1 0 000 2.393 1.145 1.145 0 001.137.991h1.073a.98.98 0 01.887.649A.97.97 0 013 13.906l-.751.752a1.149 1.149 0 00-.1 1.523c.49.62 1.05 1.18 1.671 1.671a1.148 1.148 0 001.521-.1L6.1 17a.98.98 0 011.09-.167.97.97 0 01.627.878v1.073a1.145 1.145 0 00.983 1.137 9.103 9.103 0 002.393 0 1.144 1.144 0 00.99-1.137v-1.073a.981.981 0 01.65-.887.968.968 0 011.073.176l.753.753a1.149 1.149 0 001.522.1c.62-.49 1.18-1.05 1.671-1.671a1.149 1.149 0 00-.1-1.521L17 13.905a1.04 1.04 0 01.711-1.717h1.073a1.145 1.145 0 001.137-.992 9.096 9.096 0 000-2.392V8.8zM11.979 10a1.98 1.98 0 11-3.958 0 1.98 1.98 0 013.958 0z"/></g><defs><clipPath id="clip0_473_76"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			var P, D;
			r("./node_modules/core-js/modules/web.dom.iterable.js");

			function I() {}

			function M(e) {
				return null === e
			}

			function j(e) {
				return void 0 === e
			}

			function F(e) {
				return M(e) || j(e)
			}

			function N(e) {
				return "number" == typeof e && !Number.isNaN(e)
			}

			function U(e) {
				return "string" == typeof e
			}

			function B(e) {
				return "function" == typeof e
			}

			function V(e) {
				return Array.isArray(e)
			}
			const $ = "undefined" != typeof window,
				G = $ ? null === (P = window.navigator) || void 0 === P ? void 0 : P.userAgent.toLowerCase() : "",
				H = /iphone|ipad|ipod|ios|CriOS|FxiOS/.test(G),
				q = (/android/.test(G), $ && /(iPhone|iPod)/gi.test(null === (D = window.navigator) || void 0 === D ? void 0 : D.platform), /firefox/.test(G), $ && !!window.chrome);
			$ && !q && (window.safari || H || /(apple|safari)/.test(G)), $ && "file:" !== window.location.protocol && (window.location.protocol, window.location.hostname);

			function z() {
				const e = null !== (t = null === (r = window) || void 0 === r ? void 0 : r.MediaSource) && void 0 !== t ? t : null === (n = window) || void 0 === n ? void 0 : n.WebKitMediaSource;
				var t, r, n;
				if (j(e)) return !1;
				const i = e && B(e.isTypeSupported) && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
					s = null !== (o = null === (a = window) || void 0 === a ? void 0 : a.SourceBuffer) && void 0 !== o ? o : null === (l = window) || void 0 === l ? void 0 : l.WebKitSourceBuffer;
				var o, a, l;
				const d = j(s) || !j(s.prototype) && B(s.prototype.appendBuffer) && B(s.prototype.remove);
				return !!i && !!d
			}

			function K(e, t) {
				let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : $;
				const n = r && !j(window.customElements.get(e));
				r && !n && window.customElements.define(e, t)
			}

			function W(e, t, r) {
				if (F(r) || !1 === r) e.removeAttribute(t);
				else {
					const n = U(r) ? r : "";
					e.setAttribute(t, n)
				}
			}

			function Y(e, t, r) {
				e.hasAttribute(t) || e.setAttribute(t, r)
			}

			function X(e, t, r) {
				let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vds";
				e.style.setProperty(`--${n}-${t}`, r || null)
			}
			var Q = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");
			class J extends CustomEvent {
				constructor(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					super(e, t), this.triggerEvent = t.triggerEvent, this.hasOwnProperty("originEvent") || Object.defineProperties(this, {
						originEvent: {
							get() {
								var e;
								return null !== (e = ee(this)) && void 0 !== e ? e : this
							}
						},
						isOriginTrusted: {
							get() {
								var e, t;
								return null !== (e = null === (t = ee(this)) || void 0 === t ? void 0 : t.isTrusted) && void 0 !== e && e
							}
						}
					})
				}
				get originEvent() {
					var e;
					return null !== (e = ee(this)) && void 0 !== e ? e : this
				}
				get isOriginTrusted() {
					var e, t;
					return null !== (e = null === (t = this.originEvent) || void 0 === t ? void 0 : t.isTrusted) && void 0 !== e && e
				}
			}

			function Z(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return new J(e, t)
			}

			function ee(e) {
				let t = e.triggerEvent;
				for (; t && t.triggerEvent;) t = t.triggerEvent;
				return t
			}

			function te(e, t) {
				var r;
				(null !== (r = ee(e)) && void 0 !== r ? r : e).triggerEvent = t
			}
			const re = new Map,
				ne = new Map;

			function ie(e, t, r) {
				const n = {
					host: e,
					callback: r
				};
				e.addController({
					hostConnected: () => {
						var i;
						for (const {
								element: n,
								onDisconnect: s
							} of function(e, t) {
								var r;
								return Array.from(null !== (r = ne.get(t)) && void 0 !== r ? r : []).filter(t => {
									let {
										element: r
									} = t;
									return e !== r && e.contains(r)
								})
							}(e, t)) r(n, s);
						re.set(t, (null !== (i = re.get(t)) && void 0 !== i ? i : new Set).add(n))
					},
					hostDisconnected: () => {
						var e;
						null === (e = re.get(t)) || void 0 === e || e.delete(n)
					}
				})
			}

			function se(e, t) {
				const r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).register,
					n = new Q.a,
					i = e => {
						n.add(e)
					},
					s = {
						element: e,
						onDisconnect: i
					};
				e.addController({
					hostConnected() {
						const n = Z(t, {
							bubbles: !0,
							composed: !0,
							detail: s
						});
						var o;
						(e.dispatchEvent(n), r) && (ne.set(r, (null !== (o = ne.get(r)) && void 0 !== o ? o : new Set).add(s)), function(e, t, r) {
							for (const {
									host: i,
									callback: s
								} of Array.from(null !== (n = re.get(t)) && void 0 !== n ? n : [])) {
								var n;
								i !== e && i.contains(e) && s(e, r)
							}
						}(e, r, i))
					},
					hostDisconnected() {
						var e;
						(n.empty(), r) && (null === (e = ne.get(r)) || void 0 === e || e.delete(s))
					}
				})
			}
			var oe = function(e, t, r) {
				var n = null,
					i = null,
					s = function() {
						n && (clearTimeout(n), i = null, n = null)
					},
					o = function() {
						if (!t) return e.apply(this, arguments);
						var o = this,
							a = arguments,
							l = r && !n;
						return s(), i = function() {
							e.apply(o, a)
						}, n = setTimeout((function() {
							if (n = null, !l) {
								var e = i;
								return i = null, e()
							}
						}), t), l ? i() : void 0
					};
				return o.cancel = s, o.flush = function() {
					var e = i;
					s(), e && e()
				}, o
			};

			function ae() {
				let e = I,
					t = I;
				return {
					promise: new Promise((r, n) => {
						e = r, t = n
					}),
					resolve: e,
					reject: t
				}
			}
			class le {
				constructor() {
					this._requestQueue = new Map, this._requestKeys = [], this._pendingFlush = ae(), this._isServing = !1
				}
				get isServing() {
					return this._isServing
				}
				get size() {
					return this._requestQueue.size
				}
				async waitForFlush() {
					this._isServing || await this._pendingFlush.promise
				}
				queue(e, t) {
					this._isServing ? t() : (this._requestKeys = [...this._requestKeys.filter(t => t !== e), e], this._requestQueue.set(e, t))
				}
				serve(e) {
					var t;
					null === (t = this._requestQueue.get(e)) || void 0 === t || t(), this._requestQueue.delete(e)
				}
				start() {
					this._flush(), this._isServing = !0, this._requestQueue.size > 0 && this._flush()
				}
				_flush() {
					for (const e of this._requestKeys) this.serve(e);
					this._requestKeys = [], this._release()
				}
				_empty() {
					this._requestQueue.clear()
				}
				_release() {
					this._pendingFlush.resolve(), this._pendingFlush = ae()
				}
				stop() {
					this._isServing = !1
				}
				destroy() {
					this.stop(), this._empty(), this._release()
				}
			}

			function de(e) {
				return "symbol" == typeof(null == e ? void 0 : e.id) && "@vidstack/context" === e.id.description
			}

			function ce(e) {
				return Object.keys(e)
			}
			const ue = [];

			function he(e) {
				let t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
				const n = new Set;

				function i(r) {
					if (function(e, t) {
							return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
						}(e, r) && (e = r, t)) {
						const t = !ue.length;
						for (const r of n) r[1](), ue.push(r, e);
						if (t) {
							for (let e = 0; e < ue.length; e += 2) ue[e][0](ue[e + 1]);
							ue.length = 0
						}
					}
				}
				return {
					initialValue: e,
					set: i,
					update: function(t) {
						i(t(e))
					},
					subscribe: function(s) {
						const o = [s, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I];
						return n.add(o), 1 === n.size && (t = r(i) || I), s(e), () => {
							var e;
							(n.delete(o), 0 === n.size) && (null === (e = t) || void 0 === e || e(), t = null)
						}
					}
				}
			}

			function pe(e, t, r) {
				const n = !Array.isArray(e),
					i = n ? [e] : e,
					s = t.length < 2;
				return {
					initialValue: o = r,
					subscribe: he(o, e => {
						let r = !1;
						const o = [];
						let a = 0,
							l = I;
						const d = () => {
								if (a) return;
								l();
								const r = t(n ? o[0] : o, e);
								s ? e(r) : l = B(r) ? r : I
							},
							c = i.map((e, t) => e.subscribe(e => {
								o[t] = e, a &= ~(1 << t), r && d()
							}, () => {
								a |= 1 << t
							}));
						return r = !0, d(),
							function() {
								c.forEach(e => e()), l()
							}
					}).subscribe
				};
				var o
			}

			function fe(e) {
				let t;
				return e.subscribe(e => t = e)(), t
			}

			function ge(e, t, r) {
				let n, i;
				const s = () => {
					var e, s, o;
					i = null === (e = null !== (s = null === (o = n) || void 0 === o ? void 0 : o.value) && void 0 !== s ? s : t) || void 0 === e ? void 0 : e.subscribe(r)
				};
				de(t) && (n = t.consume(e)), e.addController({
					hostConnected() {
						de(t) ? n.whenRegistered(s) : s()
					},
					hostDisconnected() {
						var e;
						null === (e = i) || void 0 === e || e()
					}
				})
			}

			function ve(e, t, r, n) {
				if (!de(t)) return ge(e, t[r], n); {
					const i = t.consume(e);
					let s;
					const o = () => {
						s = i.value[r].subscribe(n)
					};
					e.addController({
						hostConnected: () => {
							i.whenRegistered(o)
						},
						hostDisconnected: () => {
							var e;
							null === (e = s) || void 0 === e || e()
						}
					})
				}
			}

			function me(e) {
				return new Proxy(e, {
					get: (e, t) => fe(e[t]),
					has: (e, t) => Reflect.has(e, t),
					ownKeys: e => Reflect.ownKeys(e),
					getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e, t)
				})
			}

			function be(e) {
				const t = new le;
				return e.addController({
					hostConnected: t.start.bind(t),
					hostDisconnected: t.destroy.bind(t)
				}), t
			}
			class ye {
				constructor(e) {
					this._host = e, this._isScreenOrientationLocked = !1, this._updateScreenOrientation(), this._listenerDisposal = new Q.a, e.addController({
						hostConnected: this._handleHostConnected.bind(this),
						hostDisconnected: this._handleHostDisconnected.bind(this)
					})
				}
				async _handleHostConnected() {
					this._updateScreenOrientation(), this._addScreenOrientationEventListeners()
				}
				async _handleHostDisconnected() {
					this.canOrient && this._isScreenOrientationLocked && await this.unlock(), this._listenerDisposal.empty()
				}
				get currentOrientation() {
					return this._screenOrientation
				}
				get canOrient() {
					return $ && !j(screen.orientation) && B(screen.orientation.lock) && B(screen.orientation.unlock)
				}
				get isLocked() {
					return this._isScreenOrientationLocked
				}
				async lock(e) {
					this._throwIfScreenOrientationUnavailable(), await screen.orientation.lock(e), this._isScreenOrientationLocked = !0, this._host.dispatchEvent(Z("vds-screen-orientation-lock-change", {
						bubbles: !0,
						composed: !0,
						detail: e
					}))
				}
				async unlock() {
					this._throwIfScreenOrientationUnavailable(), await screen.orientation.unlock(), this._isScreenOrientationLocked = !1, this._host.dispatchEvent(Z("vds-screen-orientation-lock-change", {
						bubbles: !0,
						composed: !0,
						detail: screen.orientation.type
					}))
				}
				_addScreenOrientationEventListeners() {
					this.canOrient && this._listenerDisposal.add(this._addScreenOrientationChangeEventListener())
				}
				_addScreenOrientationChangeEventListener() {
					return Object(Q.e)(screen.orientation, "change", this._handleOrientationChange.bind(this))
				}
				_handleOrientationChange(e) {
					this._screenOrientation = window.screen.orientation.type, this._host.dispatchEvent(Z("vds-screen-orientation-change", {
						bubbles: !0,
						composed: !0,
						detail: this._screenOrientation,
						triggerEvent: e
					}))
				}
				_updateScreenOrientation() {
					var e, t;
					this._screenOrientation = $ ? null === (e = window.screen) || void 0 === e ? void 0 : null === (t = e.orientation) || void 0 === t ? void 0 : t.type : void 0
				}
				_throwIfScreenOrientationUnavailable() {
					if (!this.canOrient) throw Error("Screen orientation API is not available.")
				}
			}
			var _e = r("./node_modules/fscreen/dist/fscreen.esm.js");
			class we {
				constructor(e, t) {
					this._host = e, this._screenOrientationController = t, this._listenerDisposal = new Q.a, e.addController({
						hostDisconnected: this._handleHostDisconnected.bind(this)
					})
				}
				async _handleHostDisconnected() {
					this.isFullscreen && await this.exitFullscreen(), this._listenerDisposal.empty()
				}
				get isSupported() {
					return this.isSupportedNatively
				}
				get isSupportedNatively() {
					return _e.a.fullscreenEnabled
				}
				get isFullscreen() {
					return this.isNativeFullscreen
				}
				get isNativeFullscreen() {
					if (_e.a.fullscreenElement === this._host) return !0;
					try {
						return this._host.matches(_e.a.fullscreenPseudoClass)
					} catch (e) {
						return !1
					}
				}
				_addFullscreenChangeEventListener(e) {
					if (!this.isSupported) return I;
					const t = Object(Q.e)(_e.a, "fullscreenchange", e);
					return () => {
						t()
					}
				}
				_addFullscreenErrorEventListener(e) {
					if (!this.isSupported) return I;
					const t = Object(Q.e)(_e.a, "fullscreenerror", e);
					return () => {
						t()
					}
				}
				async enterFullscreen() {
					if (this.isFullscreen) return;
					this._throwIfNoFullscreenSupport(), this._listenerDisposal.add(this._addFullscreenChangeEventListener(this._handleFullscreenChange.bind(this))), this._listenerDisposal.add(this._addFullscreenErrorEventListener(this._handleFullscreenError.bind(this)));
					const e = await this._makeEnterFullscreenRequest();
					return await this._lockScreenOrientation(), e
				}
				async _makeEnterFullscreenRequest() {
					return _e.a.requestFullscreen(this._host)
				}
				_handleFullscreenChange(e) {
					this.isFullscreen || this._listenerDisposal.empty(), this._host.dispatchEvent(Z("vds-fullscreen-change", {
						bubbles: !0,
						composed: !0,
						detail: this.isFullscreen,
						triggerEvent: e
					}))
				}
				_handleFullscreenError(e) {
					this._host.dispatchEvent(Z("vds-fullscreen-error", {
						bubbles: !0,
						composed: !0,
						triggerEvent: e
					}))
				}
				async exitFullscreen() {
					if (!this.isFullscreen) return;
					this._throwIfNoFullscreenSupport();
					const e = await this._makeExitFullscreenRequest();
					return await this._unlockScreenOrientation(), e
				}
				async _makeExitFullscreenRequest() {
					return _e.a.exitFullscreen()
				}
				_shouldOrientScreen() {
					return this._screenOrientationController.canOrient && !j(this.screenOrientationLock)
				}
				async _lockScreenOrientation() {
					!j(this.screenOrientationLock) && this._shouldOrientScreen() && await this._screenOrientationController.lock(this.screenOrientationLock)
				}
				async _unlockScreenOrientation() {
					this._shouldOrientScreen() && await this._screenOrientationController.unlock()
				}
				_throwIfNoFullscreenSupport() {
					if (!this.isSupported) throw Error("Fullscreen API is not enabled or supported in this environment.")
				}
			}
			class Ee {
				constructor(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
					this._skipInitial = !1, this._unobservedUpdate = !1, this._host = e, this._callback = r;
					const {
						target: n,
						skipInitial: i,
						...s
					} = t;
					this._target = null != n ? n : void 0, this._skipInitial = null != i ? i : this._skipInitial, window.IntersectionObserver && (this._observer = new IntersectionObserver(e => {
						const t = this._unobservedUpdate;
						this._unobservedUpdate = !1, this._skipInitial && t || (this.handleChanges(e), this._host.requestUpdate())
					}, s), e.addController(this))
				}
				handleChanges(e) {
					this.value = this._callback(e, this._observer)
				}
				hostConnected() {
					this._target && this.observe(this._target)
				}
				hostDisconnected() {
					this._disconnect()
				}
				async hostUpdated() {
					const e = this._observer.takeRecords();
					e.length && this.handleChanges(e)
				}
				observe(e) {
					return this._observer.observe(e), this._unobservedUpdate = !0, () => {
						this._observer.unobserve(e)
					}
				}
				_disconnect() {
					this._observer.disconnect()
				}
			}

			function Se(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
				return Number(e.toFixed(t))
			}

			function Te(e, t, r) {
				return Math.max(e, Math.min(r, t))
			}

			function ke(e) {
				var t, r;
				return null !== (t = null === (r = String(e).split(".")[1]) || void 0 === r ? void 0 : r.length) && void 0 !== t ? t : 0
			}
			const Ae = new Map;
			class xe {
				constructor(e, t, r) {
					this._host = e, this.initialValue = t, this._options = r, this._registrationCallbacks = [], e.addController({
						hostConnected: () => {
							this._connect()
						},
						hostDisconnected: () => {
							delete this._host[this.id]
						}
					})
				}
				get id() {
					return this._options.id
				}
				get value() {
					var e;
					return null !== (e = this._host[this.id]) && void 0 !== e ? e : this.initialValue
				}
				get registered() {
					return this.id in this._host
				}
				_connect() {
					if (this.id in this._host) return;
					const e = e => {
						var t;
						this._host[this.id] = e, null === (t = this._registrationCallbacks) || void 0 === t || t.forEach(t => t(e)), this._registrationCallbacks = void 0
					};
					if (this._host.dispatchEvent(Z("vds-context-consumer-connect", {
							bubbles: !0,
							composed: !0,
							detail: {
								id: this.id,
								setValue: e
							}
						})), !this.registered) {
						var t;
						const r = null !== (t = Ae.get(this.id)) && void 0 !== t ? t : [];
						r.push({
							host: this._host,
							setValue: e
						}), Ae.set(this.id, r)
					}
				}
				whenRegistered(e) {
					var t;
					this.registered ? e(this.value) : null === (t = this._registrationCallbacks) || void 0 === t || t.push(e)
				}
			}
			class Re {
				constructor(e, t, r) {
					this._host = e, this._initValue = t, this._options = r, this._stopDisposal = new Q.a, this._value = t(), e.addController({
						hostConnected: this.start.bind(this),
						hostDisconnected: this.stop.bind(this)
					})
				}
				get id() {
					return this._options.id
				}
				get value() {
					return this._value
				}
				start() {
					const e = Object(Q.e)(this._host, "vds-context-consumer-connect", this._handleConsumerConnect.bind(this));
					for (const t of function(e, t) {
							var r;
							const n = null !== (r = Ae.get(e)) && void 0 !== r ? r : [],
								i = n.filter(e => {
									let {
										host: r
									} = e;
									return t.contains(r)
								});
							return Ae.set(e, n.filter(e => {
								let {
									host: r
								} = e;
								return !t.contains(r)
							})), i
						}(this.id, this._host)) t.setValue(this._value);
					this._stopDisposal.add(e)
				}
				stop() {
					this._stopDisposal.empty()
				}
				_handleConsumerConnect(e) {
					const t = e.detail;
					t.id === this.id && (e.stopImmediatePropagation(), t.setValue(this._value))
				}
			}

			function Oe(e) {
				const t = Symbol("@vidstack/context");
				return {
					id: t,
					consume: r => new xe(r, e(), {
						id: t
					}),
					provide: r => new Re(r, e, {
						id: t
					})
				}
			}
			var Le, Ce = r("./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js");

			function Pe(e, t, r, n) {
				return function(e, t, r) {
					if (!N(t) || t < 0 || t > r) throw new Error(`Failed to execute '${e}' on 'TimeRanges': The index provided (${t}) is non-numeric or out of bounds (0-${r}).`)
				}(e, n, r.length - 1), r[n][t]
			}

			function De(e) {
				if (j(e) || 0 === e.length) {
					const e = () => {
						throw new Error("This TimeRanges object is empty")
					};
					return {
						length: 0,
						start: e,
						end: e
					}
				}
				return {
					length: e.length,
					start: Pe.bind(null, "start", 0, e),
					end: Pe.bind(null, "end", 1, e)
				}
			}

			function Ie(e, t) {
				return V(e) ? De(e) : j(e) || j(t) ? De() : De([
					[e, t]
				])
			}! function(e) {
				e.Unknown = "unknown", e.Audio = "audio", e.Video = "video"
			}(Le || (Le = {}));
			const Me = {
				autoplay: !1,
				autoplayError: void 0,
				buffered: Ie(),
				duration: 0,
				bufferedAmount: 0,
				canLoad: !1,
				canPlay: !1,
				canFullscreen: !1,
				controls: !1,
				poster: "",
				currentSrc: "",
				currentTime: 0,
				ended: !1,
				error: void 0,
				fullscreen: !1,
				userIdle: !1,
				loop: !1,
				mediaType: Ce.a.Unknown,
				muted: !1,
				paused: !0,
				played: Ie(),
				playing: !1,
				playsinline: !1,
				seekable: Ie(),
				seekableAmount: 0,
				seeking: !1,
				src: [],
				started: !1,
				viewType: Le.Unknown,
				volume: 1,
				waiting: !1
			};

			function je() {
				const e = {};
				for (const t of ce(Me)) e[t] = he(Me[t]);
				return e
			}
			const Fe = new Set(["autoplay", "canFullscreen", "canLoad", "controls", "currentSrc", "loop", "muted", "playsinline", "poster", "src", "viewType", "volume"]);
			const Ne = Oe(je);

			function Ue(e, t, r) {
				return ve(e, Ne, t, r)
			}
			var Be = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const Ve = Symbol("@vidstack/media-provider-discovery");
			class $e extends n.a {
				constructor() {
					super(), this._disconnectDisposal = new Q.a, this.manualPaused = !1, this.loading = "lazy", this._attemptingAutoplay = !1, this.autoplayControlledByMediaVisibility = !1, this.controllerQueue = new le, this._store = je(), this._state = me(this._store), this.connectedQueue = be(this), this.mediaQueue = new le, this.screenOrientationController = new ye(this), this.fullscreenController = new we(this, this.screenOrientationController), se(this, "vds-media-provider-connect", {
						register: Ve
					});
					const e = function() {
						for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
						return new Ee(...t)
					}(this, {
						target: this,
						threshold: 0
					}, t => {
						var r;
						null !== (r = t[0]) && void 0 !== r && r.isIntersecting && "lazy" === this.loading && (this.startLoadingMedia(), e.hostDisconnected())
					})
				}
				connectedCallback() {
					super.connectedCallback(), W(this, "paused", this.paused), window.requestAnimationFrame(() => {
						j(this.canLoadPoster) && (this.canLoadPoster = !0)
					})
				}
				firstUpdated(e) {
					super.firstUpdated(e), this.dispatchEvent(Z("vds-fullscreen-support-change", {
						detail: this.canFullscreen
					})), "eager" === this.loading && this.startLoadingMedia()
				}
				render() {
					return n.c`<slot @slotchange="${this.handleDefaultSlotChange}"></slot>`
				}
				disconnectedCallback() {
					super.disconnectedCallback(), this.mediaQueue.destroy(), this._disconnectDisposal.empty()
				}
				get volume() {
					return this._getVolume()
				}
				set volume(e) {
					this.mediaQueue.queue("volume", () => {
						const t = this.volume,
							r = Te(0, e, 1);
						t !== r && (this._setVolume(r), this.requestUpdate("volume", t))
					})
				}
				get paused() {
					return this._getPaused()
				}
				set paused(e) {
					this.mediaQueue.queue("paused", async () => {
						if (this.paused !== e) try {
							e ? await this.pause() : (this.manualPaused = !1, await this.play()), this.requestUpdate("paused", !e)
						} catch (t) {}
					})
				}
				get currentTime() {
					return this._getCurrentTime()
				}
				set currentTime(e) {
					this.mediaQueue.queue("current-time", () => {
						const t = this.currentTime;
						t !== e && (this._setCurrentTime(e), this.requestUpdate("currentTime", t))
					})
				}
				get muted() {
					return this._getMuted()
				}
				set muted(e) {
					this.mediaQueue.queue("muted", () => {
						const t = this.muted;
						t !== e && (this._setMuted(e), this.requestUpdate("muted", t))
					})
				}
				get poster() {
					return this.state.poster
				}
				set poster(e) {
					const t = this.poster;
					t !== e && (this.dispatchEvent(Z("vds-poster-change", {
						detail: e
					})), this.requestUpdate("poster", t))
				}
				get loop() {
					return this.state.loop
				}
				set loop(e) {
					const t = this.loop;
					t !== e && (this.dispatchEvent(Z("vds-loop-change", {
						detail: e
					})), this.requestUpdate("loop", t))
				}
				get controls() {
					return this.state.controls
				}
				set controls(e) {
					const t = this.controls;
					t !== e && (this.dispatchEvent(Z("vds-controls-change", {
						detail: e
					})), this.requestUpdate("controls", t))
				}
				get canLoad() {
					return this.state.canLoad
				}
				startLoadingMedia() {
					this.controllerQueue, this.dispatchEvent(Z("vds-can-load")), this.autoplay ? this.dispatchEvent(Z("vds-can-autoplay")) : this.dispatchEvent(Z("vds-manual-load"))
				}
				_throwIfNotReadyForPlayback() {
					if (!this.state.canPlay) throw Error("Media is not ready - wait for `vds-can-play` event.")
				}
				async _resetPlaybackIfEnded() {
					if (this.state.ended && 0 !== this.state.currentTime) return this._setCurrentTime(0)
				}
				_throwIfNotVideoView() {
					if (this.state.viewType !== Le.Video) throw Error("Player is currently not in a video view.")
				}
				async _handleMediaReady(e) {
					let {
						event: t,
						duration: r
					} = e;
					this.state.canPlay || (this.dispatchEvent(Z("vds-can-play", {
						triggerEvent: t,
						detail: {
							duration: r
						}
					})), this.mediaQueue.start(), this.autoplayControlledByMediaVisibility || await this.attemptAutoplay())
				}
				_handleCurrentSrcChange(e, t) {
					this.state.currentSrc !== e && (this.mediaQueue.stop(), this.dispatchEvent(Z("vds-current-src-change", {
						detail: e,
						triggerEvent: t
					})))
				}
				get autoplay() {
					return this.state.autoplay
				}
				set autoplay(e) {
					this.autoplay !== e && (this.dispatchEvent(Z("vds-autoplay-change", {
						detail: e
					})), this.requestUpdate("autoplay", !e)), this.attemptAutoplay()
				}
				get _canAttemptAutoplay() {
					return this.state.canPlay && this.state.autoplay && !this.state.started
				}
				async attemptAutoplay() {
					if (this._canAttemptAutoplay) {
						this._attemptingAutoplay = !0;
						try {
							this.dispatchEvent(Z("vds-autoplay", {
								detail: {
									muted: this.muted
								}
							})), await this.play()
						} catch (e) {
							this.dispatchEvent(Z("vds-autoplay-fail", {
								detail: {
									muted: this.muted,
									error: e
								}
							})), this.requestUpdate()
						}
						this._attemptingAutoplay = !1
					}
				}
				get controller() {
					return this._controller
				}
				get idleDelay() {
					var e, t;
					return null !== (e = null === (t = this._controller) || void 0 === t ? void 0 : t.idleDelay) && void 0 !== e ? e : 0
				}
				set idleDelay(e) {
					this.controllerQueue.queue("idle-delay", () => {
						this._controller.idleDelay = e
					})
				}
				attachMediaController(e, t) {
					this._controller = e, this._store = e._store, this._state = e.state, this.controllerQueue.start(), t(() => {
						this.controllerQueue.destroy(), this._controller = void 0, this._store = je(), this._state = me(this._store)
					})
				}
				dispatchEvent(e) {
					return !this._controller && e.type.startsWith("vds-") ? (this.controllerQueue.queue(e.type, () => {
						super.dispatchEvent(e)
					}), !1) : super.dispatchEvent(e)
				}
				store() {
					return this._store
				}
				get state() {
					return this._state
				}
				get canFullscreen() {
					return this.fullscreenController.isSupported
				}
				get fullscreen() {
					return this.fullscreenController.isFullscreen
				}
				get fullscreenOrientation() {
					return this.fullscreenController.screenOrientationLock
				}
				set fullscreenOrientation(e) {
					const t = this.fullscreenController.screenOrientationLock;
					t !== e && (this.fullscreenController.screenOrientationLock = e, this.requestUpdate("fullscreen-orientation", t))
				}
				enterFullscreen() {
					return this.fullscreenController.enterFullscreen()
				}
				exitFullscreen() {
					return this.fullscreenController.exitFullscreen()
				}
			}
			Be([Object(i.b)({
				type: Number,
				reflect: !0
			})], $e.prototype, "volume", null), Be([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], $e.prototype, "paused", null), Be([Object(i.b)({
				type: Boolean
			})], $e.prototype, "manualPaused", void 0), Be([Object(i.b)({
				type: Number
			})], $e.prototype, "currentTime", null), Be([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], $e.prototype, "muted", null), Be([Object(i.b)({
				reflect: !0
			})], $e.prototype, "poster", null), Be([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], $e.prototype, "loop", null), Be([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], $e.prototype, "controls", null), Be([Object(i.d)()], $e.prototype, "canLoadPoster", void 0), Be([Object(i.b)({
				attribute: "loading"
			})], $e.prototype, "loading", void 0), Be([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], $e.prototype, "autoplay", null), Be([Object(i.b)({
				attribute: "idle-delay",
				type: Number
			})], $e.prototype, "idleDelay", null), Be([Object(i.b)({
				attribute: "fullscreen-orientation"
			})], $e.prototype, "fullscreenOrientation", null);
			var Ge = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const He = new Set;
			let qe, ze = !1,
				Ke = !1;
			const We = e => {
				const {
					muted: t,
					volume: r
				} = e.detail;
				qe = {
					muted: t,
					volume: r
				}
			};
			class Ye extends n.a {
				constructor() {
					super(), this.singlePlayback = !1, this.syncVolume = !1, this._providerDisposal = new Q.a, ie(this, Ve, (e, t) => {
						this._handleMediaProviderConnect(e, t)
					})
				}
				static get styles() {
					return n.b`
      :host {
        display: contents;
      }
    `
				}
				disconnectedCallback() {
					super.disconnectedCallback(), this._providerDisposal.empty()
				}
				render() {
					return n.c`<slot></slot>`
				}
				get provider() {
					return this._provider
				}
				_handleMediaProviderConnect(e, t) {
					if (this._provider = e, He.add(e), this.singlePlayback) {
						const t = Object(Q.e)(e, "vds-play", this._handleMediaPlay.bind(this));
						this._providerDisposal.add(t)
					}
					if (this.syncVolume) {
						const t = Object(Q.e)(e, "vds-volume-change", oe(this._handleMediaVolumeChange.bind(this), 10, !0));
						this._providerDisposal.add(t)
					}
					window.requestAnimationFrame(() => {
						var t;
						qe && this._provider && (this._provider.volume = qe.volume, this._provider.muted = qe.muted);
						const r = Object(Q.e)(e, "vds-volume-change", We);
						this._providerDisposal.add(r), !qe && null !== (t = this._provider) && void 0 !== t && t.autoplay && (this._provider.muted = !0)
					}), t(() => {
						He.delete(e), this._provider = void 0, this._providerDisposal.empty()
					})
				}
				_handleMediaPlay() {
					ze || (ze = !0, He.forEach(e => {
						e !== this._provider && (e.paused = !0)
					}), ze = !1)
				}
				_handleMediaVolumeChange(e) {
					if (Ke) return;
					Ke = !0;
					const {
						volume: t,
						muted: r
					} = e.detail;
					He.forEach(e => {
						e !== this._provider && (e.volume = t, e.muted = r)
					}), this.dispatchEvent(Z("vds-media-volume-sync", {
						bubbles: !0,
						composed: !0,
						detail: e.detail
					})), Ke = !1
				}
			}
			Ge([Object(i.b)({
				type: Boolean,
				attribute: "single-playback"
			})], Ye.prototype, "singlePlayback", void 0), Ge([Object(i.b)({
				type: Boolean,
				attribute: "sync-volume"
			})], Ye.prototype, "syncVolume", void 0), K("vds-media-sync", Ye);
			var Xe = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js"),
				Qe = function(e, t, r, n) {
					var i, s = arguments.length,
						o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
					if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
					else
						for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
					return s > 3 && o && Object.defineProperty(t, r, o), o
				};
			class Je extends n.a {
				constructor() {
					super(), this.viewportEnterDelay = 0, this.pageChangeType = "state", this.pageEnterDelay = 0, this.intersectionThreshold = 1, this._isIntersecting = !1, this._providerDisposal = new Q.a, this._hasIntersected = !1, this.intersectionController = new Ee(this, {
						root: this.intersectionRoot ? document.querySelector(this.intersectionRoot) : null,
						threshold: this.intersectionThreshold
					}, e => {
						window.clearTimeout(this._intersectionTimeout);
						const t = e[0];
						this._isIntersecting = t.isIntersecting, this._hasIntersected ? t.isIntersecting ? this._intersectionTimeout = window.setTimeout(() => {
							this._triggerOnEnter(this.enterViewport), this._intersectionTimeout = void 0
						}, this.viewportEnterDelay) : this.exitViewport && (this._isIntersecting = !1, this._triggerOnExit(this.exitViewport)) : !t.isIntersecting && this._provider && (this._provider.autoplayControlledByMediaVisibility = !0), this._hasIntersected = !0, this._dispatchVisibilityChange()
					}), this.pageController = new Xe.a(this, e => {
						let {
							state: t,
							visibility: r
						} = e;
						if (window.clearTimeout(this._pageTimeout), !this.isIntersecting) return;
						"hidden" === ("state" === this.pageChangeType ? t : r) ? this._triggerOnExit(this.exitPage): this.enterViewport && (this._pageTimeout = window.setTimeout(() => {
							this._triggerOnEnter(this.enterPage), this._pageTimeout = void 0
						}, this.pageEnterDelay)), this._dispatchVisibilityChange()
					}), ie(this, Ve, (e, t) => {
						this._handleMediaProviderConnect(e, t)
					})
				}
				static get styles() {
					return n.b`
      :host {
        display: contents;
      }
    `
				}
				get isIntersecting() {
					return this._isIntersecting
				}
				disconnectedCallback() {
					super.disconnectedCallback(), this._hasIntersected = !1, this._providerDisposal.empty()
				}
				render() {
					return n.c`<slot></slot>`
				}
				get provider() {
					return this._provider
				}
				_handleMediaProviderConnect(e, t) {
					this._provider = e;
					const r = this.intersectionController.observe(this);
					t(() => {
						r(), this._provider = void 0, this._providerDisposal.empty()
					})
				}
				_triggerOnEnter(e) {
					this._provider && ("play" === e ? this._provider.autoplayControlledByMediaVisibility && !1 === this._provider.state.started ? this._provider.attemptAutoplay() : this._provider.manualPaused || (this._provider.paused = !1) : "unmute" === e && (this._provider.muted = !1))
				}
				_triggerOnExit(e) {
					this._provider && ("pause" === e ? this._provider.paused = !0 : "mute" === e && (this._provider.muted = !0))
				}
				_dispatchVisibilityChange() {
					this._provider && this.dispatchEvent(Z("vds-media-visibility-change", {
						bubbles: !0,
						composed: !0,
						detail: {
							provider: this._provider,
							viewport: {
								isIntersecting: this.isIntersecting
							},
							page: {
								state: this.pageController.state,
								visibility: this.pageController.visibility
							}
						}
					}))
				}
			}
			Qe([Object(i.b)({
				attribute: "enter-viewport"
			})], Je.prototype, "enterViewport", void 0), Qe([Object(i.b)({
				attribute: "exit-viewport"
			})], Je.prototype, "exitViewport", void 0), Qe([Object(i.b)({
				type: Number,
				attribute: "viewport-enter-delay"
			})], Je.prototype, "viewportEnterDelay", void 0), Qe([Object(i.b)({
				attribute: "enter-page"
			})], Je.prototype, "enterPage", void 0), Qe([Object(i.b)({
				attribute: "exit-page"
			})], Je.prototype, "exitPage", void 0), Qe([Object(i.b)({
				attribute: "page-change-type"
			})], Je.prototype, "pageChangeType", void 0), Qe([Object(i.b)({
				type: Number,
				attribute: "page-enter-delay"
			})], Je.prototype, "pageEnterDelay", void 0), Qe([Object(i.b)({
				attribute: "intersection-root"
			})], Je.prototype, "intersectionRoot", void 0), Qe([Object(i.b)({
				type: Number,
				attribute: "intersection-threshold"
			})], Je.prototype, "intersectionThreshold", void 0), K("vds-media-visibility", Je);
			var Ze = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js"),
				et = function(e, t, r) {
					var n = null,
						i = null,
						s = r && r.leading,
						o = r && r.trailing;
					null == s && (s = !0);
					null == o && (o = !s);
					1 == s && (o = !1);
					var a = function() {
							n && (clearTimeout(n), n = null)
						},
						l = function() {
							var r = s && !n,
								a = this,
								l = arguments;
							if (i = function() {
									return e.apply(a, l)
								}, n || (n = setTimeout((function() {
									if (n = null, o) return i()
								}), t)), r) return r = !1, i()
						};
					return l.cancel = a, l.flush = function() {
						var e = i;
						a(), e && e()
					}, l
				};
			var tt = r("./node_modules/hls.js/dist/hls.js"),
				rt = r.n(tt);
			const nt = Oe(() => he(void 0));
			class it {
				constructor(e, t) {
					this._host = e, this._mediaStore = t, this._idle = !1, this._mediaPaused = !1, this._idlingPaused = !1, this._isMouseOverMedia = !0, this._isMouseOverUIControls = !1, this._disposal = new Q.a, this.delay = 1500, e.addController(this)
				}
				get paused() {
					return this._idlingPaused || this._mediaPaused
				}
				set paused(e) {
					this._idlingPaused = e, this._handleIdleChange()
				}
				hostConnected() {
					var e;
					this._disposal.add(this._mediaStore.paused.subscribe(e => {
						this._mediaPaused = e, this._handleIdleChange()
					}));
					["pointerdown", "pointermove", "focus", "keydown"].forEach(e => {
						const t = Object(Q.e)(this._host, e, oe(this._handleIdleChange.bind(this), 250, !0));
						this._disposal.add(t)
					});
					const t = Object(Q.e)(this._host, "mouseenter", () => {
							this._isMouseOverMedia = !0
						}),
						r = Object(Q.e)(this._host, "mouseleave", () => {
							this._isMouseOverMedia = !1, this._handleIdleChange()
						});
					this._disposal.add(t), this._disposal.add(r);
					const n = null === (e = this._host) || void 0 === e ? void 0 : e.querySelector(".disappearing-controls");
					if (n) {
						const e = Object(Q.e)(n, "mouseenter", () => {
								this._isMouseOverUIControls = !0
							}),
							t = Object(Q.e)(n, "mouseleave", () => {
								this._isMouseOverUIControls = !1, this._handleIdleChange()
							});
						this._disposal.add(e), this._disposal.add(t)
					}
				}
				hostDisconnected() {
					this._disposal.empty(), this._stopIdleTimer()
				}
				_handleIdleChange() {
					this.paused || this._isMouseOverUIControls ? this._stopIdleTimer() : this._startIdleTimer(this._isMouseOverMedia ? this.delay : 0)
				}
				_startIdleTimer(e) {
					this._stopIdleTimer(), this._idleTimeout = window.setTimeout(() => {
						this._dispatchIdleChange(!this.paused)
					}, e)
				}
				_stopIdleTimer() {
					window.clearTimeout(this._idleTimeout), this._idleTimeout = void 0, this._dispatchIdleChange(!1)
				}
				_dispatchIdleChange(e) {
					this._idle !== e && (this._host.dispatchEvent(Z("vds-user-idle-change", {
						detail: e
					})), this._idle = e)
				}
			}
			class st {
				constructor(e) {
					this._host = e, this._disconnectDisposal = new Q.a, this.providerQueue = new le, this.providerDisposal = new Q.a, this._providerContext = nt.provide(this._host), this._mediaStoreProvider = Ne.provide(this._host), this.state = me(this._store), this._handleIdleChange = Object(Ze.a)(this._host, "vds-user-idle-change", e => {
						this._store.userIdle.set(e.detail), this._satisfyMediaRequest("userIdle", e)
					}), this._pendingMediaRequests = {
						play: [],
						pause: [],
						volume: [],
						fullscreen: [],
						seeked: [],
						seeking: [],
						userIdle: []
					}, this._handleMuteRequest = Object(Ze.a)(this._host, "vds-mute-request", this._createMediaRequestHandler("muted", e => {
						this.state.muted || (this._pendingMediaRequests.volume.push(e), this.provider.muted = !0)
					})), this._handleUnmuteRequest = Object(Ze.a)(this._host, "vds-unmute-request", this._createMediaRequestHandler("muted", e => {
						this.state.muted && (this._pendingMediaRequests.volume.push(e), this.provider.muted = !1, 0 === this.state.volume && (this._pendingMediaRequests.volume.push(e), this.provider.volume = .25))
					})), this._handlePlayRequest = Object(Ze.a)(this._host, "vds-play-request", this._createMediaRequestHandler("paused", e => {
						this.state.paused && (this._pendingMediaRequests.play.push(e), this.provider.paused = !1, this.provider.manualPaused = !1)
					})), this._handlePauseRequest = Object(Ze.a)(this._host, "vds-pause-request", this._createMediaRequestHandler("paused", e => {
						this.state.paused || (this._pendingMediaRequests.pause.push(e), this.provider.paused = !0, this.provider.manualPaused = !0)
					})), this._isSeekingRequestPending = !1, this._handleSeekingRequest = Object(Ze.a)(this._host, "vds-seeking-request", this._createMediaRequestHandler("seeking", e => {
						this._stopWaiting(), this._pendingMediaRequests.seeking.push(e), this._isSeekingRequestPending = !0, this._store.seeking.set(!0)
					})), this._handleSeekRequest = Object(Ze.a)(this._host, "vds-seek-request", this._createMediaRequestHandler("seeking", e => {
						this.store.ended && (this._isReplay = !0), this._pendingMediaRequests.seeked.push(e), this._isSeekingRequestPending = !1;
						let t = e.detail;
						this.state.duration - e.detail < .25 && (t = this.state.duration), this.provider.currentTime = t
					})), this._handleVolumeChangeRequest = Object(Ze.a)(this._host, "vds-volume-change-request", this._createMediaRequestHandler("volume", e => {
						const t = e.detail;
						this.state.volume !== t && (this._pendingMediaRequests.volume.push(e), this.provider.volume = t, t > 0 && this.state.muted && (this.provider.muted = !1))
					})), this._handleEnterFullscreenRequest = Object(Ze.a)(this._host, "vds-enter-fullscreen-request", this._createMediaRequestHandler("fullscreen", async e => {
						var t;
						if (this.state.fullscreen) return;
						var r, n;
						"media" === (null !== (t = e.detail) && void 0 !== t ? t : "media") && this._host.canFullscreen ? (this._pendingMediaRequests.fullscreen.push(e), await (null === (r = (n = this._host).enterFullscreen) || void 0 === r ? void 0 : r.call(n))) : this.provider && (this._pendingMediaRequests.fullscreen.push(e), await this.provider.enterFullscreen())
					})), this._handleExitFullscreenRequest = Object(Ze.a)(this._host, "vds-exit-fullscreen-request", this._createMediaRequestHandler("fullscreen", async e => {
						var t;
						if (!this.state.fullscreen) return;
						var r, n;
						"media" === (null !== (t = e.detail) && void 0 !== t ? t : "media") && this._host.canFullscreen ? (this._pendingMediaRequests.fullscreen.push(e), await (null === (r = (n = this._host).exitFullscreen) || void 0 === r ? void 0 : r.call(n))) : this.provider && (this._pendingMediaRequests.fullscreen.push(e), await this.provider.exitFullscreen())
					})), this._handleResumeIdlingRequest = Object(Ze.a)(this._host, "vds-resume-user-idle-request", e => {
						this._mediaRequestEventGateway(e) && (this._pendingMediaRequests.userIdle.push(e), this._userIdleController && (this._userIdleController.paused = !1))
					}), this._handlePauseIdlingRequest = Object(Ze.a)(this._host, "vds-pause-user-idle-request", e => {
						this._mediaRequestEventGateway(e) && (this._pendingMediaRequests.userIdle.push(e), this._userIdleController && (this._userIdleController.paused = !0))
					}), this._handleShowPosterRequest = Object(Ze.a)(this._host, "vds-show-poster-request", this._createMediaRequestHandler("poster", () => {
						this._provider.canLoadPoster = !0
					})), this._handleHidePosterRequest = Object(Ze.a)(this._host, "vds-hide-poster-request", this._createMediaRequestHandler("poster", () => {
						this._provider.canLoadPoster = !1
					})), this._handleLoopRequest = Object(Ze.a)(this._host, "vds-loop-request", this._createMediaRequestHandler("loop", () => {
						window.requestAnimationFrame(async () => {
							try {
								this._isLooping = !0, this._isReplay = !0, await this._provider.play()
							} catch (e) {
								this._isReplay = !1, this._isLooping = !1
							}
						})
					})), this._handleManualHlsLevelChange = Object(Ze.a)(this._host, "vds-hls-manual-level-change", this._createMediaRequestHandler("hls-level-change", e => {
						const t = this.provider;
						window.requestAnimationFrame(async () => {
							try {
								if (null != t && t.hlsEngine) {
									t.loadingUserLevel = !0, this._store.waiting.set(!0), this._store.playing.set(!1), t.hlsEngine.currentLevel = e.detail;
									const r = async () => {
										var e;
										t.loadingUserLevel = !1, this._store.waiting.set(!1), this._store.playing.set(!0), null === (e = t.hlsEngine) || void 0 === e || e.off(rt.a.Events.BUFFER_EOS, r)
									};
									t.hlsEngine.on(rt.a.Events.BUFFER_EOS, r)
								}
							} catch {
								null != t && t.hlsEngine && (t.loadingUserLevel = !1, this._store.waiting.set(!1), this._store.playing.set(!0))
							}
						})
					})), this._handleFullscreenChange = Object(Ze.a)(this._host, "vds-fullscreen-change", e => {
						var t;
						this._store.fullscreen.set(e.detail), e.target === this._host && (this._satisfyMediaRequest("fullscreen", e), null === (t = this._provider) || void 0 === t || t.dispatchEvent(Z("vds-fullscreen-change", {
							detail: e.detail,
							triggerEvent: e
						})))
					}), this._handleFullscreenError = Object(Ze.a)(this._host, "vds-fullscreen-error", e => {
						var t;
						e.target === this._host && (this._satisfyMediaRequest("fullscreen", e), null === (t = this._provider) || void 0 === t || t.dispatchEvent(Z("vds-fullscreen-error", {
							detail: e.detail,
							triggerEvent: e
						})))
					}), this._isReplay = !1, this._isLooping = !1, this._firingWaiting = !1, this._mediaEvents = [], this._handleSeeking = et(e => {
						this._mediaEvents.push(e), this._store.seeking.set(!0), this._store.currentTime.set(e.detail), this._satisfyMediaRequest("seeking", e)
					}, 150, {
						leading: !0
					}), this._fireWaiting = oe(() => {
						var e;
						if (!this._originalWaitingEvent) return;
						this._firingWaiting = !0;
						const t = Z("vds-waiting", this._originalWaitingEvent);
						this._mediaEvents.push(t), this._store.waiting.set(!0), this._store.playing.set(!1), null === (e = this._provider) || void 0 === e || e.dispatchEvent(t), this._originalWaitingEvent = void 0, this._firingWaiting = !1
					}, 300), this._skipInitialSrcChange = !0, ie(e, Ve, (e, t) => {
						this.attachMediaProvider(e, t)
					}), e.addController({
						hostDisconnected: () => {
							this._clearMediaStateTracking(), this._clearPendingMediaRequests(), this.providerQueue.destroy(), this.providerDisposal.empty(), this._skipInitialSrcChange = !0, this._disconnectDisposal.empty()
						}
					})
				}
				get provider() {
					return this._provider
				}
				attachMediaProvider(e, t) {
					F(this.provider) && this.provider !== e && (this._handleMediaProviderDisconnect(), this._provider = e, this._providerContext.value.set(e), function(e, t) {
						for (const r of ce(e)) {
							const n = e[r],
								i = t[r];
							if (!n || !i) continue;
							const s = fe(n);
							s !== fe(i) && i.set(s)
						}
					}(this._provider._store, this._store), this._attachMediaEventListeners(), e.attachMediaController(this, e => this._disconnectDisposal.add(e)), this._flushMediaProviderConnectedQueue(), t(this._handleMediaProviderDisconnect.bind(this)))
				}
				_handleMediaProviderDisconnect() {
					F(this.provider) || (this.providerQueue.destroy(), this.providerDisposal.empty(), this._provider = void 0, this._providerContext.value.set(void 0), function(e) {
						for (const t of ce(Me)) e[t].set(Me[t])
					}(this._store), this._store.viewType.set(Le.Unknown))
				}
				_flushMediaProviderConnectedQueue() {
					this.providerQueue.start(), this.providerDisposal.add(() => {
						this.providerQueue.stop()
					})
				}
				get store() {
					return this._mediaStoreProvider.value
				}
				get _store() {
					return this._mediaStoreProvider.value
				}
				get idleDelay() {
					var e, t;
					return null !== (e = null === (t = this._userIdleController) || void 0 === t ? void 0 : t.delay) && void 0 !== e ? e : 0
				}
				set idleDelay(e) {
					this._userIdleController && (this._userIdleController.delay = e)
				}
				_clearPendingMediaRequests() {
					ce(this._pendingMediaRequests).forEach(e => {
						this._pendingMediaRequests[e] = []
					})
				}
				_satisfyMediaRequest(e, t) {
					const r = this._pendingMediaRequests[e].shift();
					r && (t.requestEvent = r, te(t, r))
				}
				_mediaRequestEventGateway(e) {
					return e.stopPropagation(), !0
				}
				_createMediaRequestHandler(e, t) {
					return r => {
						this._mediaRequestEventGateway(r) && (this._provider ? t(r) : this.providerQueue.queue(e, () => {
							t(r)
						}))
					}
				}
				_attachMediaEventListeners() {
					if (!this._provider) return;
					const e = {
						"vds-can-load": this._handleCanLoad,
						"vds-load-start": this._handleLoadStart,
						"vds-loaded-data": this._handleLoadedData,
						"vds-loaded-metadata": this._handleLoadedMetadata,
						"vds-can-play": this._handleCanPlay,
						"vds-can-play-through": this._handleCanPlayThrough,
						"vds-current-src-change": this._handleCurrentSrcChange,
						"vds-autoplay": this._handleAutoplay,
						"vds-autoplay-fail": this._handleAutoplayFail,
						"vds-play": this._handlePlay,
						"vds-play-fail": this._handlePlayFail,
						"vds-playing": this._handlePlaying,
						"vds-pause": this._handlePause,
						"vds-time-update": this._handleTimeUpdate,
						"vds-volume-change": this._handleVolumeChange,
						"vds-seeking": this._handleSeeking,
						"vds-seeked": this._handleSeeked,
						"vds-waiting": this._handleWaiting,
						"vds-ended": this._handleEnded,
						"vds-autoplay-change": this._handleAutoplayChange,
						"vds-error": this._handleError,
						"vds-fullscreen-support-change": this._handleFullscreenSupportChange,
						"vds-poster-change": this._handlePosterChange,
						"vds-loop-change": this._handleLoopChange,
						"vds-playsinline-change": this._handlePlaysinlineChange,
						"vds-controls-change": this._handleControlsChange,
						"vds-media-type-change": this._handleMediaTypeChange,
						"vds-view-type-change": this._handleViewTypeChange,
						"vds-duration-change": this._handleDurationChange,
						"vds-progress": this._handleProgress,
						"vds-src-change": this._handleSrcChange
					};
					for (const t of ce(e)) {
						const r = e[t].bind(this);
						this.providerDisposal.add(Object(Q.e)(this._provider, t, r))
					}
				}
				_clearMediaStateTracking() {
					this._isReplay = !1, this._isLooping = !1, this._firingWaiting = !1, this._originalWaitingEvent = void 0, this._mediaEvents = []
				}
				_findLastMediaEvent(e) {
					return this._mediaEvents[this._mediaEvents.map(e => e.type).lastIndexOf(e)]
				}
				_handleCanLoad() {
					this._store.canLoad.set(!0)
				}
				_updateMetadata(e) {
					this._store.currentSrc.set(e.currentSrc), this._store.mediaType.set(e.mediaType), this._store.viewType.set(e.viewType)
				}
				_handleLoadStart(e) {
					this._updateMetadata(e.detail), this._mediaEvents.push(e), te(e, this._findLastMediaEvent("vds-src-change"))
				}
				_handleLoadedData(e) {
					this._mediaEvents.push(e), te(e, this._findLastMediaEvent("vds-load-start")), this._userIdleController = new it(this._host, this._store)
				}
				_handleLoadedMetadata(e) {
					this._updateMetadata(e.detail), this._mediaEvents.push(e), te(e, this._findLastMediaEvent("vds-load-start"))
				}
				_handleCanPlay(e) {
					var t;
					this._mediaEvents.push(e), "loadedmetadata" !== (null === (t = e.triggerEvent) || void 0 === t ? void 0 : t.type) && te(e, this._findLastMediaEvent("vds-loaded-metadata")), this._store.canPlay.set(!0), this._store.duration.set(e.detail.duration)
				}
				_handleCanPlayThrough(e) {
					this._store.canPlay.set(!0), this._store.duration.set(e.detail.duration), te(e, this._findLastMediaEvent("vds-can-play"))
				}
				_handleAutoplay(e) {
					this._mediaEvents.push(e), te(e, this._findLastMediaEvent("vds-play")), te(e, this._findLastMediaEvent("vds-can-play")), this._store.autoplayError.set(void 0)
				}
				_handleAutoplayFail(e) {
					te(e, this._findLastMediaEvent("vds-play-fail")), te(e, this._findLastMediaEvent("vds-can-play")), this._store.autoplayError.set(e.detail), this._clearMediaStateTracking()
				}
				_handlePlay(e) {
					if (!this._isLooping && this.state.paused) {
						if (this._mediaEvents.push(e), te(e, this._findLastMediaEvent("vds-waiting")), this._satisfyMediaRequest("play", e), this._store.paused.set(!1), this._store.autoplayError.set(void 0), this.state.ended || this._isReplay) {
							var t;
							this._isReplay = !1, this._store.ended.set(!1);
							const r = Z("vds-replay", {
								triggerEvent: e
							});
							null === (t = this._provider) || void 0 === t || t.dispatchEvent(r)
						}
					} else e.stopImmediatePropagation()
				}
				_handlePlayFail(e) {
					this._mediaEvents.push(e), this._stopWaiting(), te(e, this._findLastMediaEvent("vds-play")), this._store.paused.set(!0), this._store.playing.set(!1), this._satisfyMediaRequest("play", e), this._clearMediaStateTracking()
				}
				_handlePlaying(e) {
					this._mediaEvents.push(e);
					const t = this._findLastMediaEvent("vds-play");
					if (t ? (te(e, this._findLastMediaEvent("vds-waiting")), te(e, t)) : te(e, this._findLastMediaEvent("vds-seeked")), this._stopWaiting(), this._clearMediaStateTracking(), this._store.paused.set(!1), this._store.playing.set(!0), this._store.seeking.set(!1), this._store.ended.set(!1), this._isLooping) return e.stopImmediatePropagation(), void(this._isLooping = !1);
					var r;
					this.state.started || (this._store.started.set(!0), null === (r = this._provider) || void 0 === r || r.dispatchEvent(Z("vds-started", {
						triggerEvent: e
					})))
				}
				_handlePause(e) {
					this._isLooping ? e.stopImmediatePropagation() : (te(e, this._findLastMediaEvent("vds-seeked")), this._satisfyMediaRequest("pause", e), this._store.paused.set(!0), this._store.playing.set(!1), this._store.seeking.set(!1), this._stopWaiting(), this._clearMediaStateTracking())
				}
				_handleTimeUpdate(e) {
					const {
						currentTime: t,
						played: r
					} = e.detail;
					this._store.currentTime.set(t), this._store.played.set(r), this.provider.loadingUserLevel || this._store.waiting.set(!1)
				}
				_handleVolumeChange(e) {
					this._store.volume.set(e.detail.volume), this._store.muted.set(e.detail.muted || 0 === e.detail.volume), this._satisfyMediaRequest("volume", e)
				}
				_handleSeeked(e) {
					this._isSeekingRequestPending ? (this._store.seeking.set(!0), e.stopImmediatePropagation()) : this.state.seeking && (this._mediaEvents.push(e), te(e, this._findLastMediaEvent("vds-waiting")), te(e, this._findLastMediaEvent("vds-seeking")), this.state.paused && this._stopWaiting(), this._store.seeking.set(!1), e.detail !== this.state.duration && this._store.ended.set(!1), this._store.currentTime.set(e.detail), this._satisfyMediaRequest("seeked", e))
				}
				_stopWaiting() {
					this._fireWaiting.cancel(), this._store.waiting.set(!1)
				}
				_handleWaiting(e) {
					this._firingWaiting || (e.stopImmediatePropagation(), this._originalWaitingEvent = e, this._fireWaiting())
				}
				_handleEnded(e) {
					this._isLooping ? e.stopImmediatePropagation() : (this._stopWaiting(), this._store.paused.set(!0), this._store.playing.set(!1), this._store.seeking.set(!1), this._store.ended.set(!0), this._clearMediaStateTracking())
				}
				_handleAutoplayChange(e) {
					this._store.autoplay.set(e.detail)
				}
				_handleCurrentSrcChange(e) {
					var t;
					(this._store.currentSrc.set(e.detail), this._skipInitialSrcChange) ? this._skipInitialSrcChange = !1: (this._clearMediaStateTracking(), ce(t = this._store).forEach(e => {
						Fe.has(e) || t[e].set(t[e].initialValue)
					}))
				}
				_handleError(e) {
					this._store.error.set(e.detail)
				}
				_handleFullscreenSupportChange(e) {
					this._store.canFullscreen.set(e.detail)
				}
				_handlePosterChange(e) {
					this._store.poster.set(e.detail)
				}
				_handleLoopChange(e) {
					this._store.loop.set(e.detail)
				}
				_handlePlaysinlineChange(e) {
					this._store.playsinline.set(e.detail)
				}
				_handleControlsChange(e) {
					this._store.controls.set(e.detail)
				}
				_handleMediaTypeChange(e) {
					this._store.mediaType.set(e.detail)
				}
				_handleDurationChange(e) {
					const t = e.detail;
					this._store.duration.set(isNaN(t) ? 0 : t)
				}
				_handleProgress(e) {
					const {
						buffered: t,
						seekable: r
					} = e.detail, n = 0 === t.length ? 0 : t.end(t.length - 1), i = 0 === r.length ? 0 : r.end(r.length - 1);
					this._store.buffered.set(t), this._store.bufferedAmount.set(n), this._store.seekable.set(r), this._store.seekableAmount.set(i)
				}
				_handleSrcChange(e) {
					this._store.src.set(e.detail)
				}
				_handleViewTypeChange(e) {
					this._store.viewType.set(e.detail)
				}
			}
			class ot {
				constructor(e, t, r) {
					this._host = e, this._store = t, this._mediaProps = r, this._disposal = new Q.a, this._host.addController({
						hostConnected: this._hostConnected.bind(this),
						hostDisconnected: this._hostDisconnected.bind(this)
					})
				}
				_hostConnected() {
					var e;
					(null !== (e = window.requestIdleCallback) && void 0 !== e ? e : e => e())(() => {
						for (const e of this._mediaProps) {
							const t = this._store[e];
							if (t) {
								const r = this._getMediaAttrName(e),
									n = t.subscribe(t => {
										window.requestAnimationFrame(() => {
											this._handleValueChange(e, r, t)
										})
									});
								this._disposal.add(n)
							}
						}
					})
				}
				_hostDisconnected() {
					for (const e of this._mediaProps) this._handleDisconnect(e, this._getMediaAttrName(e));
					this._disposal.empty()
				}
				_getMediaAttrName(e) {
					return function(e) {
						return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
					}(e)
				}
			}
			class at extends ot {
				_handleValueChange(e, t, r) {
					window.requestAnimationFrame(() => {
						W(this._host, t, U(r) || N(r) ? String(r) : !!r)
					})
				}
				_handleDisconnect(e, t) {
					this._host.removeAttribute(t)
				}
			}
			class lt extends ot {
				_handleValueChange(e, t, r) {
					window.requestAnimationFrame(() => {
						this._host.style.setProperty(this._getCssPropName(t), U(r) || N(r) ? String(r) : null)
					})
				}
				_getCssPropName(e) {
					return `--vds-${e}`
				}
				_handleDisconnect(e, t) {
					this._host.style.setProperty(this._getCssPropName(t), null)
				}
			}
			var dt = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const ct = Symbol("@vidstack/media-discovery");
			class ut extends n.a {
				constructor() {
					super(), this.controller = new st(this), this.__mediaFullscreen = !1, this.__mediaIsVideoView = !1, this.__mediaPlaysinline = !1, this.screenOrientationController = new ye(this), this.fullscreenController = new we(this, this.screenOrientationController), se(this, "vds-media-connect", {
						register: ct
					}), Ue(this, "fullscreen", e => {
						this.__mediaFullscreen = e
					}), Ue(this, "viewType", e => {
						this.__mediaIsVideoView = e === Le.Video
					}), Ue(this, "playsinline", e => {
						this.__mediaPlaysinline = e
					}), this._bindMediaAttributes(), this._bindMediaCSSProperties()
				}
				static get styles() {
					return [n.b`
        :host {
          display: inline-block;
          position: relative;
          contain: content;
        }

        :host([hidden]) {
          display: none;
        }
      `]
				}
				get provider() {
					return this.controller.provider
				}
				update(e) {
					W(this, "hide-ui", this._shouldHideMediaUI()), super.update(e)
				}
				render() {
					return n.c`<slot></slot>`
				}
				get canFullscreen() {
					return this.fullscreenController.isSupported
				}
				get fullscreen() {
					return this.fullscreenController.isFullscreen
				}
				get fullscreenOrientation() {
					return this.fullscreenController.screenOrientationLock
				}
				set fullscreenOrientation(e) {
					const t = this.fullscreenController.screenOrientationLock;
					t !== e && (this.fullscreenController.screenOrientationLock = e, this.requestUpdate("fullscreen-orientation", t))
				}
				enterFullscreen() {
					return this.fullscreenController.enterFullscreen()
				}
				exitFullscreen() {
					return this.fullscreenController.exitFullscreen()
				}
				_bindMediaAttributes() {
					! function() {
						for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
						new at(...t)
					}(this, this.controller.store, ["autoplay", "autoplayError", "canLoad", "canPlay", "canFullscreen", "ended", "error", "fullscreen", "userIdle", "loop", "mediaType", "muted", "paused", "playing", "playsinline", "seeking", "started", "viewType", "waiting"])
				}
				_bindMediaCSSProperties() {
					! function() {
						for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
						new lt(...t)
					}(this, this.controller.store, ["bufferedAmount", "currentTime", "duration", "seekableAmount"])
				}
				_shouldHideMediaUI() {
					return H && this.__mediaIsVideoView && (!this.__mediaPlaysinline || this.__mediaFullscreen)
				}
			}
			dt([Object(i.d)()], ut.prototype, "__mediaFullscreen", void 0), dt([Object(i.d)()], ut.prototype, "__mediaIsVideoView", void 0), dt([Object(i.d)()], ut.prototype, "__mediaPlaysinline", void 0), dt([Object(i.b)({
				attribute: "fullscreen-orientation"
			})], ut.prototype, "fullscreenOrientation", null), K("vds-media", ut);
			var ht = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const pt = new Map;
			class ft extends n.a {
				constructor() {
					super(), this._disposal = new Q.a, this.repeat = 0, this.priority = 10, this._mediaCurrentTime = 0, this._currentToggleState = !1, this._mediaStoreConsumer = Ne.consume(this), ge(this, nt, e => {
						this._mediaProviderElement = e
					})
				}
				static get styles() {
					return [n.b`
        :host {
          display: block;
          contain: content;
          z-index: 0;
          opacity: 0;
          visibility: hidden;
          pointer-events: none !important;
        }

        :host([hidden]) {
          display: none;
        }
      `]
				}
				get _pendingActions() {
					return this._mediaProviderElement ? pt.get(this._mediaProviderElement) : void 0
				}
				get _pendingAction() {
					var e;
					return null === (e = this._pendingActions) || void 0 === e ? void 0 : e.get(this)
				}
				connectedCallback() {
					super.connectedCallback(), window.requestAnimationFrame(() => {
						this._mediaProviderElement && pt.set(this._mediaProviderElement, new Map)
					})
				}
				willUpdate(e) {
					this._attachListener(), this._subscribeToToggleStore(), this._subscribeToSeekStore(), super.willUpdate(e)
				}
				disconnectedCallback() {
					var e, t;
					this._disposal.empty(), null === (e = this._pendingAction) || void 0 === e || e[1].resolve(), null === (t = this._pendingActions) || void 0 === t || t.delete(this), super.disconnectedCallback()
				}
				performAction(e) {
					if (!this.action) return;
					let t, r = this.action;
					this.action.startsWith("toggle:") && (r = this._getToggleEventType()), this.action.startsWith("seek:") && (r = "seek", t = this._mediaCurrentTime + Number(this.action.split(":")[1])), this.dispatchEvent(Z(`vds-${r}-request`, {
						bubbles: !0,
						composed: !0,
						detail: t,
						triggerEvent: e
					}))
				}
				_attachListener() {
					var e = this;
					if (this._disposal.empty(), !this._mediaProviderElement || !this.type || !this.action) return;
					let t, r = 0;
					const n = Object(Q.e)(this._mediaProviderElement, this.type, n => {
						if (this._validateEvent(n)) {
							var i;
							if (n.preventDefault(), 0 == r) null === (i = this._pendingActions) || void 0 === i || i.set(this, [n, ae()]);
							! function() {
								let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								r += 1, window.clearTimeout(t), t = window.setTimeout(() => {
									var t;
									const i = null === (t = e._pendingAction) || void 0 === t ? void 0 : t[1];
									var s;
									n && (null === (s = e._pendingActions) || void 0 === s || s.delete(e));
									vt(e._mediaProviderElement), r = 0, null == i || i.resolve()
								}, 250)
							}(r < this.repeat)
						}
					});
					this._disposal.add(n)
				}
				_validateEvent(e) {
					if (Object(Q.c)(e) || Object(Q.b)(e) || Object(Q.d)(e)) {
						var t, r;
						const n = Object(Q.d)(e) ? e.touches[0] : void 0,
							i = null !== (t = null == n ? void 0 : n.clientX) && void 0 !== t ? t : e.clientX,
							s = null !== (r = null == n ? void 0 : n.clientY) && void 0 !== r ? r : e.clientY,
							o = this.getBoundingClientRect(),
							a = s >= o.top && s <= o.bottom && i >= o.left && i <= o.right;
						return e.type.includes("leave") ? !a : a
					}
					return !0
				}
				_subscribeToSeekStore() {
					var e;
					if (null === (e = this.action) || void 0 === e || !e.startsWith("seek")) return;
					const t = this._mediaStore.currentTime.subscribe(e => {
						this._mediaCurrentTime = e
					});
					this._disposal.add(t)
				}
				get _mediaStore() {
					return this._mediaStoreConsumer.value
				}
				_getToggleEventType() {
					var e;
					switch (null === (e = this.action) || void 0 === e ? void 0 : e.split(":")[1]) {
						case "paused":
							return this._currentToggleState ? "play" : "pause";
						case "muted":
							return this._currentToggleState ? "unmute" : "mute";
						case "fullscreen":
							return `${this._currentToggleState?"exit":"enter"}-fullscreen`;
						default:
							return ""
					}
				}
				_subscribeToToggleStore() {
					var e, t;
					if (null === (e = this.action) || void 0 === e || !e.startsWith("toggle:")) return;
					const r = this.action.split(":")[1],
						n = null === (t = this._mediaStore[r]) || void 0 === t ? void 0 : t.subscribe(e => {
							this._currentToggleState = !!e
						});
					n && this._disposal.add(n)
				}
			}
			ht([Object(i.b)()], ft.prototype, "type", void 0), ht([Object(i.b)({
				type: Number
			})], ft.prototype, "repeat", void 0), ht([Object(i.b)({
				type: Number
			})], ft.prototype, "priority", void 0), ht([Object(i.b)()], ft.prototype, "action", void 0);
			const gt = new WeakSet;
			async function vt(e) {
				if (gt.has(e)) return;
				const t = pt.get(e);
				if (!t) return;
				gt.add(e);
				const r = Array.from(t.values()).map(e => e[1].promise);
				await Promise.all(r);
				const n = Array.from(t.keys()),
					i = Math.min(...n.map(e => e.priority));
				n.filter(e => e.priority <= i).map(e => {
					const r = t.get(e)[0];
					e.performAction(r)
				}), t.clear(), gt.delete(e)
			}
			K("vds-gesture", ft);
			class mt {
				static async load(e) {
					return new Promise((t, r) => {
						this.pendingRequests[e] ? this.pendingRequests[e].push({
							resolve: t,
							reject: r
						}) : (this.pendingRequests[e] = [{
							resolve: t,
							reject: r
						}], async function(e) {
							if (!M(document.querySelector(`script[src="${e}"]`))) return;
							const t = document.createElement("script"),
								r = ae();
							t.src = e, t.onload = r.resolve, t.onerror = r.reject;
							const n = document.getElementsByTagName("script")[0];
							return F(n.parentNode) || n.parentNode.insertBefore(t, n), r.promise
						}(e).then(() => {
							this.pendingRequests[e].forEach(e => e.resolve()), delete this.pendingRequests[e]
						}).catch(t => {
							this.pendingRequests[e].forEach(e => e.reject(t)), delete this.pendingRequests[e]
						}))
					})
				}
			}
			var bt;
			mt.pendingRequests = {},
				function(e) {
					e[e.Aborted = 1] = "Aborted", e[e.Network = 2] = "Network", e[e.Decode = 3] = "Decode", e[e.SrcNotSupported = 4] = "SrcNotSupported"
				}(bt || (bt = {}));
			const yt = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
				_t = /\.(mp4|og[gv]|webm|mov|m4v|avi)($|\?)/i;
			class wt extends $e {
				constructor() {
					super(...arguments), this.preload = "metadata", this._timeRAF = void 0, this._hasMediaElementConnected = !1, this._mediaElementDisposal = new Q.a, this._isMediaWaiting = !1, this._ignoreNextAbortEvent = !1, this._ignoreNextEmptiedEvent = !1
				}
				get mediaElement() {
					return this._mediaElement
				}
				disconnectedCallback() {
					this._isMediaWaiting = !1, super.disconnectedCallback(), this._cancelTimeUpdates()
				}
				_cancelTimeUpdates() {
					N(this._timeRAF) && window.cancelAnimationFrame(this._timeRAF), this._timeRAF = void 0
				}
				_requestTimeUpdates() {
					j(this._timeRAF) && this._requestTimeUpdate()
				}
				_requestTimeUpdate() {
					var e, t;
					const r = null !== (e = null === (t = this.mediaElement) || void 0 === t ? void 0 : t.currentTime) && void 0 !== e ? e : 0;
					this.state.currentTime !== r && this._updateCurrentTime(r), this._timeRAF = window.requestAnimationFrame(() => {
						j(this._timeRAF) || this._requestTimeUpdate()
					})
				}
				_updateCurrentTime(e, t) {
					var r, n;
					this.dispatchEvent(Z("vds-time-update", {
						detail: {
							currentTime: Math.min(e, null !== (r = null === (n = this.mediaElement) || void 0 === n ? void 0 : n.duration) && void 0 !== r ? r : 0),
							played: this.mediaElement.played
						},
						triggerEvent: t
					}))
				}
				handleDefaultSlotChange() {
					window.requestAnimationFrame(() => {
						const e = function(e, t) {
							var r, n;
							const i = t ? `slot[name="${t}"]` : "slot:not([name])",
								s = null === (r = e.shadowRoot) || void 0 === r ? void 0 : r.querySelector(i),
								o = null !== (n = null == s ? void 0 : s.assignedNodes({
									flatten: !0
								})) && void 0 !== n ? n : [];
							return Array.prototype.filter.call(o, e => e.nodeType == Node.ELEMENT_NODE)
						}(this)[0];
						this._handleMediaElementDisconnect(), this._mediaElement = null != e ? e : void 0, this._handleMediaElementConnect()
					})
				}
				get _canMediaElementConnect() {
					return this.canLoad && !F(this.mediaElement) && !this._hasMediaElementConnected
				}
				_handleMediaElementConnect() {
					if (!this._canMediaElementConnect) return;
					this.dispatchEvent(Z("vds-media-element-connected"));
					const e = this.mediaElement;
					e.hasAttribute("loop") && (this.loop = !0), e.removeAttribute("loop"), e.removeAttribute("poster"), W(e, "controls", this.controls), this._attachMediaEventListeners(), this._observePlaysinline(), this._observeMediaSources(), this.canLoadPoster && this.poster.length > 0 && e.setAttribute("poster", this.poster), this._startPreloadingMedia(), this._hasMediaElementConnected = !0, this._disconnectDisposal.add(this._handleMediaElementDisconnect.bind(this))
				}
				_handleMediaElementDisconnect() {
					this._cancelTimeUpdates(), this._mediaElementDisposal.empty(), this._mediaElement = void 0, this._hasMediaElementConnected = !1
				}
				startLoadingMedia() {
					super.startLoadingMedia(), this._handleMediaElementConnect()
				}
				_startPreloadingMedia() {
					this.mediaElement.setAttribute("preload", this.preload);
					const e = this.mediaElement.networkState >= 1;
					this._ignoreNextAbortEvent = e, this._ignoreNextEmptiedEvent = e, this.mediaElement.load(), setTimeout(() => {
						this._ignoreNextAbortEvent = !1, this._ignoreNextEmptiedEvent = !1
					}, 0)
				}
				_observePlaysinline() {
					const e = () => this.mediaElement.hasAttribute("playsinline");
					this._handlePlaysinlineChange(e());
					const t = new MutationObserver(() => this._handlePlaysinlineChange(e()));
					t.observe(this.mediaElement, {
						attributeFilter: ["playsinline"]
					}), this._mediaElementDisposal.add(() => t.disconnect())
				}
				_handlePlaysinlineChange(e) {
					this.dispatchEvent(Z("vds-playsinline-change", {
						detail: e
					}))
				}
				_observeMediaSources() {
					this._handleSrcChange(this._getMediaSources());
					const e = new MutationObserver(() => this._handleSrcChange(this._getMediaSources()));
					e.observe(this.mediaElement, {
						attributeFilter: ["src"],
						subtree: !0
					}), this._mediaElementDisposal.add(() => e.disconnect())
				}
				_handleSrcChange(e) {
					this.dispatchEvent(Z("vds-src-change", {
						detail: e
					}))
				}
				_getMediaSources() {
					var e, t, r;
					const n = [null === (e = this.mediaElement) || void 0 === e ? void 0 : e.src, ...Array.from(null !== (t = null === (r = this.mediaElement) || void 0 === r ? void 0 : r.querySelectorAll("source")) && void 0 !== t ? t : []).map(e => e.src)].filter(Boolean);
					return Array.from(new Set(n))
				}
				_getMediaMetadata() {
					return {
						src: this.state.src,
						currentSrc: this.mediaElement.currentSrc,
						duration: this.mediaElement.duration || 0,
						poster: this.mediaElement.poster,
						mediaType: this._getMediaType(),
						viewType: this.state.viewType
					}
				}
				_attachMediaEventListeners() {
					if (F(this.mediaElement)) return;
					const e = {
						abort: this._handleAbort,
						canplay: this._handleCanPlay,
						canplaythrough: this._handleCanPlayThrough,
						durationchange: this._handleDurationChange,
						emptied: this._handleEmptied,
						ended: this._handleEnded,
						error: this._handleError,
						loadeddata: this._handleLoadedData,
						loadedmetadata: this._handleLoadedMetadata,
						loadstart: this._handleLoadStart,
						pause: this._handlePause,
						play: this._handlePlay,
						playing: this._handlePlaying,
						progress: this._handleProgress,
						ratechange: this._handleRateChange,
						seeked: this._handleSeeked,
						seeking: this._handleSeeking,
						stalled: this._handleStalled,
						suspend: this._handleSuspend,
						volumechange: this._handleVolumeChange,
						waiting: this._handleWaiting
					};
					ce(e).forEach(t => {
						const r = e[t].bind(this),
							n = Object(Q.e)(this.mediaElement, t, async e => {
								await r(e)
							});
						this._mediaElementDisposal.add(n)
					})
				}
				_handleAbort(e) {
					this._ignoreNextAbortEvent || (this.dispatchEvent(Z("vds-abort", {
						triggerEvent: e
					})), this._handleCurrentSrcChange("", e))
				}
				_handleCanPlay(e) {
					this._handleMediaReady({
						event: e,
						duration: this.mediaElement.duration
					})
				}
				_handleCanPlayThrough(e) {
					this.state.started || this.dispatchEvent(Z("vds-can-play-through", {
						triggerEvent: e,
						detail: {
							duration: this.mediaElement.duration
						}
					}))
				}
				_handleLoadStart(e) {
					this._handleCurrentSrcChange(this.mediaElement.currentSrc, e), "" !== this.mediaElement.currentSrc ? this.dispatchEvent(Z("vds-load-start", {
						triggerEvent: e,
						detail: this._getMediaMetadata()
					})) : this._handleAbort()
				}
				_handleEmptied(e) {
					this._ignoreNextEmptiedEvent || this.dispatchEvent(Z("vds-emptied", {
						triggerEvent: e
					}))
				}
				_handleLoadedData(e) {
					this.dispatchEvent(Z("vds-loaded-data", {
						triggerEvent: e
					}))
				}
				_handleLoadedMetadata(e) {
					this.dispatchEvent(Z("vds-loaded-metadata", {
						triggerEvent: e,
						detail: this._getMediaMetadata()
					}))
				}
				_determineMediaType(e) {
					this.dispatchEvent(Z("vds-media-type-change", {
						detail: this._getMediaType(),
						triggerEvent: e
					}))
				}
				_handlePlay(e) {
					const t = Z("vds-play", {
						triggerEvent: e
					});
					t.autoplay = this._attemptingAutoplay, this.dispatchEvent(t)
				}
				_handlePause(e) {
					(1 !== this.mediaElement.readyState || this._isMediaWaiting) && (this._isMediaWaiting = !1, this._cancelTimeUpdates(), this.dispatchEvent(Z("vds-pause", {
						triggerEvent: e
					})))
				}
				_handlePlaying(e) {
					this._isMediaWaiting = !1;
					const t = Z("vds-playing", {
						triggerEvent: e
					});
					this.dispatchEvent(t), this._requestTimeUpdates()
				}
				_handleDurationChange(e) {
					this.mediaElement.ended && this._updateCurrentTime(this.mediaElement.duration, e), this.dispatchEvent(Z("vds-duration-change", {
						detail: this.mediaElement.duration,
						triggerEvent: e
					}))
				}
				_handleProgress(e) {
					this.dispatchEvent(Z("vds-progress", {
						triggerEvent: e,
						detail: {
							buffered: this.mediaElement.buffered,
							seekable: this.mediaElement.seekable
						}
					}))
				}
				_handleRateChange() {
					throw Error("Not implemented")
				}
				_handleSeeking(e) {
					this.dispatchEvent(Z("vds-seeking", {
						detail: this.mediaElement.currentTime,
						triggerEvent: e
					}))
				}
				_handleSeeked(e) {
					const t = Z("vds-seeked", {
						detail: this.mediaElement.currentTime,
						triggerEvent: e
					});
					this.dispatchEvent(t);
					const r = this.mediaElement.currentTime;
					if (Math.trunc(r) === Math.trunc(this.mediaElement.duration) && ke(this.mediaElement.duration) > ke(r) && (this._updateCurrentTime(this.mediaElement.duration, e), !this.mediaElement.ended)) try {
						this.play()
					} catch (n) {}
				}
				_handleStalled(e) {
					this.dispatchEvent(Z("vds-stalled", {
						triggerEvent: e
					})), this.mediaElement.readyState < 3 && (this._isMediaWaiting = !0, this.dispatchEvent(Z("vds-waiting", {
						triggerEvent: e
					})))
				}
				_handleVolumeChange(e) {
					this.dispatchEvent(Z("vds-volume-change", {
						detail: {
							volume: this.mediaElement.volume,
							muted: this.mediaElement.muted
						},
						triggerEvent: e
					}))
				}
				_handleWaiting(e) {
					this.mediaElement.readyState < 3 && (this._isMediaWaiting = !0, this.dispatchEvent(Z("vds-waiting", {
						triggerEvent: e
					})))
				}
				_handleSuspend(e) {
					const t = Z("vds-suspend", {
						triggerEvent: e
					});
					this.dispatchEvent(t)
				}
				_handleEnded(e) {
					this._cancelTimeUpdates(), this._updateCurrentTime(this.mediaElement.duration, e);
					const t = Z("vds-end", {
						triggerEvent: e
					});
					this.dispatchEvent(t), this.state.loop ? this._handleLoop() : this.dispatchEvent(Z("vds-ended", {
						triggerEvent: e
					}))
				}
				_handleLoop() {
					j(this.mediaElement.controls) && (this.mediaElement.controls = !1), this.dispatchEvent(Z("vds-loop-request", {
						bubbles: !0,
						composed: !0
					}))
				}
				_handleError(e) {
					const t = this.mediaElement.error;
					t && this.dispatchEvent(Z("vds-error", {
						detail: {
							message: t.message,
							code: t.code,
							mediaError: t
						},
						triggerEvent: e
					}))
				}
				_getPaused() {
					var e, t;
					return null === (e = null === (t = this.mediaElement) || void 0 === t ? void 0 : t.paused) || void 0 === e || e
				}
				_getVolume() {
					var e, t;
					return null !== (e = null === (t = this.mediaElement) || void 0 === t ? void 0 : t.volume) && void 0 !== e ? e : 1
				}
				_setVolume(e) {
					this.mediaElement.volume = e
				}
				_getCurrentTime() {
					var e, t;
					return null !== (e = null === (t = this.mediaElement) || void 0 === t ? void 0 : t.currentTime) && void 0 !== e ? e : 0
				}
				_setCurrentTime(e) {
					this.mediaElement.currentTime !== e && (this.mediaElement.currentTime = e)
				}
				_getMuted() {
					var e, t;
					return null !== (e = null === (t = this.mediaElement) || void 0 === t ? void 0 : t.muted) && void 0 !== e && e
				}
				_setMuted(e) {
					this.mediaElement.muted = e
				}
				async play() {
					try {
						var e;
						return this._throwIfNotReadyForPlayback(), await this._resetPlaybackIfEnded(), null === (e = this.mediaElement) || void 0 === e ? void 0 : e.play()
					} catch (t) {
						const e = Z("vds-play-fail");
						throw e.autoplay = this._attemptingAutoplay, e.error = t, t
					}
				}
				async pause() {
					var e;
					return this._throwIfNotReadyForPlayback(), null === (e = this.mediaElement) || void 0 === e ? void 0 : e.pause()
				}
				_getMediaType() {
					return e = this.state.currentSrc, yt.test(e) ? Ce.a.Audio : _t.test(e) ? Ce.a.Video : Ce.a.Unknown;
					var e
				}
			}(function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				s > 3 && o && Object.defineProperty(t, r, o)
			})([Object(i.b)({
				reflect: !0
			})], wt.prototype, "preload", void 0);
			class Et extends we {
				constructor(e, t, r) {
					super(e, t), this._presentationController = r
				}
				get isFullscreen() {
					return this.isSupportedNatively ? this.isNativeFullscreen : this._presentationController.isFullscreenMode
				}
				get isSupported() {
					return this.isSupportedNatively || this.isSupportedOnSafari
				}
				get isSupportedOnSafari() {
					return this._presentationController.isSupported
				}
				async _makeEnterFullscreenRequest() {
					return this.isSupportedNatively ? super._makeEnterFullscreenRequest() : this._makeFullscreenRequestOnSafari()
				}
				async _makeFullscreenRequestOnSafari() {
					return this._presentationController.setPresentationMode("fullscreen")
				}
				async _makeExitFullscreenRequest() {
					return this.isSupportedNatively ? super._makeExitFullscreenRequest() : this._makeExitFullscreenRequestOnSafari()
				}
				async _makeExitFullscreenRequestOnSafari() {
					return this._presentationController.setPresentationMode("inline")
				}
				_addFullscreenChangeEventListener(e) {
					return this.isSupportedNatively ? super._addFullscreenChangeEventListener(e) : this.isSupportedOnSafari ? Object(Q.e)(this._host, "vds-video-presentation-change", this._handlePresentationModeChange.bind(this)) : I
				}
				_handlePresentationModeChange(e) {
					this._handleFullscreenChange(e)
				}
				_addFullscreenErrorEventListener(e) {
					return this.isSupportedNatively ? super._addFullscreenErrorEventListener(e) : I
				}
			}

			function St(e, t) {
				var r;
				if (t.bubbles && t.composed) return;
				const n = new J(t.type, {
					triggerEvent: null !== (r = t.triggerEvent) && void 0 !== r ? r : t,
					detail: t.detail,
					bubbles: t.bubbles,
					cancelable: t.cancelable,
					composed: t.composed
				});
				e.dispatchEvent(n)
			}
			class Tt {
				constructor(e) {
					this._host = e, this._listenerDisposal = new Q.a;
					const t = e.firstUpdated;
					e.firstUpdated = r => {
						null == t || t.call(e, r), this._listenerDisposal.add(Object(Q.e)(e, "vds-media-element-connected", () => {
							this._listenerDisposal.add(this._addPresentationModeChangeEventListener())
						}))
					}, e.addController({
						hostDisconnected: this._handleHostDisconnected.bind(this)
					})
				}
				_handleHostDisconnected() {
					this.setPresentationMode("inline"), this._listenerDisposal.empty()
				}
				get presentationMode() {
					var e;
					return null === (e = this._host.videoElement) || void 0 === e ? void 0 : e.webkitPresentationMode
				}
				get isInlineMode() {
					return "inline" === this.presentationMode
				}
				get isPictureInPictureMode() {
					return "inline" === this.presentationMode
				}
				get isFullscreenMode() {
					return "fullscreen" === this.presentationMode
				}
				get isSupported() {
					var e;
					return B(null === (e = this._host.videoElement) || void 0 === e ? void 0 : e.webkitSetPresentationMode)
				}
				setPresentationMode(e) {
					var t, r;
					null === (t = this._host.videoElement) || void 0 === t || null === (r = t.webkitSetPresentationMode) || void 0 === r || r.call(t, e)
				}
				_addPresentationModeChangeEventListener() {
					return !this.isSupported || F(this._host.videoElement) ? I : Object(Q.e)(this._host.videoElement, "webkitpresentationmodechanged", this._handlePresentationModeChange.bind(this))
				}
				_handlePresentationModeChange(e) {
					St(this._host, e), this._host.dispatchEvent(Z("vds-video-presentation-change", {
						detail: this.presentationMode,
						triggerEvent: e
					}))
				}
			}
			class kt extends wt {
				constructor() {
					super(...arguments), this.presentationController = new Tt(this), this.fullscreenController = new Et(this, this.screenOrientationController, this.presentationController)
				}
				static get styles() {
					return [n.b`
        :host {
          display: inline-block;
          background-color: var(--vds-video-bg-color, #000);
        }

        :host([hidden]) {
          display: none;
        }

        ::slotted(video:not([width])) {
          width: var(--vds-video-width, 100%);
        }

        ::slotted(video:not([height])) {
          height: var(--vds-video-height, auto);
        }
      `]
				}
				connectedCallback() {
					super.connectedCallback(), this.dispatchEvent(Z("vds-view-type-change", {
						detail: Le.Video
					}))
				}
				get videoElement() {
					return this.mediaElement
				}
			}
			const At = new Map;

			function xt(e) {
				return function(e) {
					return e.replace(/-./g, e => e[1].toUpperCase())
				}(e.replace("vds-", ""))
			}
			const Rt = "vds-hls-",
				Ot = ["lib-load", "instance", "unsupported"];

			function Lt(e) {
				return e.startsWith(Rt) && !Ot.some(t => e.startsWith(`${Rt}${t}`))
			}
			var Ct = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const Pt = /\.(m3u8)($|\?)/i,
				Dt = (new Set(["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"]), "https://cdn.jsdelivr.net/npm/hls.js@^1.0.0/dist/hls.light.min.js");
			class It extends kt {
				constructor() {
					super(), this._isHlsEngineAttached = !1, this.hlsConfig = {}, this._loadingUserLevel = !1, this.hlsLibrary = Dt, this._currentHlsSrc = "", this._hlsEventListeners = [], Object.defineProperty(this, "hls-config", {
						set: e => {
							this.hlsConfig = e
						}
					}), Object.defineProperty(this, "hls-library", {
						set: e => {
							this.hlsLibrary = e
						}
					})
				}
				get Hls() {
					return this._Hls
				}
				get hlsEngine() {
					return this._hlsEngine
				}
				get isHlsEngineAttached() {
					return this._isHlsEngineAttached
				}
				get currentHlsSrc() {
					return this._currentHlsSrc
				}
				get loadingUserLevel() {
					return this._loadingUserLevel
				}
				set loadingUserLevel(e) {
					this.mediaElement && (this.mediaElement.playbackRate = e ? 0 : 1, this._loadingUserLevel = e)
				}
				async update(e) {
					super.update(e), e.has("hlsLibrary") && z() && this._preconnectToHlsLibDownload()
				}
				disconnectedCallback() {
					this._destroyHlsEngine(), super.disconnectedCallback()
				}
				get isHlsSupported() {
					var e, t;
					return null !== (e = null === (t = this.Hls) || void 0 === t ? void 0 : t.isSupported()) && void 0 !== e ? e : z()
				}
				get isHlsStream() {
					return this.state.src.some(e => Pt.test(e))
				}
				_preconnectToHlsLibDownload() {
					var e;
					this.canLoad || !U(this.hlsLibrary) || (e = this.hlsLibrary, At.has(e)) || function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "preconnect";
						if (!(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : $)) return !1;
						if (!M(document.querySelector(`link[href="${e}"]`))) return !0;
						const r = document.createElement("link");
						r.rel = t, r.href = e, r.crossOrigin = "true", document.head.append(r)
					}(this.hlsLibrary)
				}
				async _buildHlsEngine() {
					var e, t;
					let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					if (F(this.videoElement) && !r && !j(this.hlsEngine)) return;
					j(this.hlsEngine) || this._destroyHlsEngine();
					const n = {
						onLoadStart: () => {
							this.dispatchEvent(Z("vds-hls-lib-load-start"))
						},
						onLoaded: e => {
							this.dispatchEvent(Z("vds-hls-lib-loaded", {
								detail: e
							}))
						},
						onLoadError: e => {
							this.dispatchEvent(Z("vds-hls-lib-load-error", {
								detail: e
							})), this.dispatchEvent(Z("vds-error", {
								detail: {
									message: e.message,
									code: bt.SrcNotSupported
								}
							}))
						}
					};
					if (this._Hls = await async function(e) {
							var t;
							let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							if (U(e)) {
								if (At.has(e)) return At.get(e);
								null === (t = r.onLoadStart) || void 0 === t || t.call(r);
								try {
									var n;
									if (await mt.load(e), !B(window.Hls)) throw Error("[vds]: Failed loading `hls.js`. Could not find a valid constructor at `window.Hls`.");
									const t = window.Hls;
									return null === (n = r.onLoaded) || void 0 === n || n.call(r, t), At.set(e, t), t
								} catch (s) {
									var i;
									null === (i = r.onLoadError) || void 0 === i || i.call(r, s)
								}
							}
						}(this.hlsLibrary, n), j(this._Hls) && !U(this.hlsLibrary) && (this._Hls = await async function(e) {
							var t;
							let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							if (j(e)) return;
							var n;
							if (null === (t = r.onLoadStart) || void 0 === t || t.call(r), !B(e)) return null === (n = r.onLoaded) || void 0 === n || n.call(r, e), e;
							const i = String(e);
							if (At.has(i)) {
								var s;
								const e = At.get(i);
								return null === (s = r.onLoaded) || void 0 === s || s.call(r, e), e
							}
							try {
								var o;
								const t = null === (o = await e()) || void 0 === o ? void 0 : o.default;
								if (!t || !t.isSupported) throw Error("[vds]: Failed importing `hls.js`. Dynamic import returned invalid constructor.");
								var a;
								return null === (a = r.onLoaded) || void 0 === a || a.call(r, t), At.set(i, t), t
							} catch (d) {
								var l;
								null === (l = r.onLoadError) || void 0 === l || l.call(r, d)
							}
						}(this.hlsLibrary, n)), this.Hls) {
						if (null === (e = this.Hls) || void 0 === e || null === (t = e.isSupported) || void 0 === t || !t.call(e)) {
							const e = "[vds]: `hls.js` is not supported in this environment";
							return this.dispatchEvent(Z("vds-hls-unsupported")), void this.dispatchEvent(Z("vds-error", {
								detail: {
									message: e,
									code: bt.SrcNotSupported
								}
							}))
						}
						this._hlsEngine = new this.Hls(this.hlsConfig), this.dispatchEvent(Z("vds-hls-instance", {
							detail: this.hlsEngine
						})), this._listenToHlsEngine()
					}
				}
				_destroyHlsEngine() {
					var e;
					null === (e = this.hlsEngine) || void 0 === e || e.destroy(), this._currentHlsSrc = "", this._hlsEngine = void 0, this._isHlsEngineAttached = !1
				}
				_attachHlsEngine() {
					this.isHlsEngineAttached || j(this.hlsEngine) || F(this.videoElement) || (this.hlsEngine.attachMedia(this.videoElement), this._isHlsEngineAttached = !0)
				}
				_detachHlsEngine() {
					var e;
					this.isHlsEngineAttached && (null === (e = this.hlsEngine) || void 0 === e || e.detachMedia(), this._isHlsEngineAttached = !1, this._currentHlsSrc = "")
				}
				_loadSrcOnHlsEngine(e) {
					!F(this.hlsEngine) && this.isHlsStream && e !== this._currentHlsSrc && (this.hlsEngine.loadSource(e), this._currentHlsSrc = e)
				}
				_getMediaType() {
					return this.state.mediaType === Ce.a.LiveVideo ? Ce.a.LiveVideo : this.isHlsStream ? Ce.a.Video : super._getMediaType()
				}
				_handleSrcChange(e) {
					this._currentHlsSrc.length > 0 && !e.includes(this._currentHlsSrc) && e.push(this._currentHlsSrc), super._handleSrcChange(e)
				}
				_handleAbort(e) {
					if (this.isHlsSupported)
						for (const t of this.state.src)
							if (Pt.test(t)) return void this._handleHlsSrcChange(t);
					super._handleAbort(e)
				}
				async _handleHlsSrcChange(e) {
					this._currentHlsSrc !== e && this.hasUpdated && this.canLoad && (this.isHlsStream ? F(this.hlsLibrary) || (j(this.hlsEngine) && await this._buildHlsEngine(), this._attachHlsEngine(), this._loadSrcOnHlsEngine(e)) : this._detachHlsEngine())
				}
				_handleLoadedMetadata(e) {
					super._handleLoadedMetadata(e), this._handleMediaReady({
						event: e,
						duration: this.mediaElement.duration
					})
				}
				_handleError(e) {
					(!this.isHlsStream || null != this && this.isHlsEngineAttached) && super._handleError(e)
				}
				_listenToHlsEngine() {
					j(this.hlsEngine) || j(this.Hls) || (this.hlsEngine.on(this.Hls.Events.LEVEL_LOADED, this._handleHlsLevelLoaded.bind(this)), this._hlsEventListeners.forEach(e => {
						var t;
						let {
							type: r,
							listener: n,
							options: i
						} = e;
						null === (t = this.hlsEngine) || void 0 === t || t[null != i && i.once ? "once" : "on"](r, n, null == i ? void 0 : i.context)
					}), this.hlsEngine.on(this.Hls.Events.ERROR, this._handleHlsError.bind(this)))
				}
				_handleHlsError(e, t) {
					if (!j(this.Hls))
						if (t.fatal) switch (t.type) {
							case "networkError":
								this._handleHlsNetworkError();
								break;
							case "mediaError":
								this._handleHlsMediaError();
								break;
							default:
								this._handleHlsIrrecoverableError()
						} else if ("bufferStalledError" === t.details) {
							var r;
							null === (r = this.hlsEngine) || void 0 === r || r.startLoad()
						}
				}
				_handleHlsNetworkError() {
					var e;
					null === (e = this.hlsEngine) || void 0 === e || e.startLoad()
				}
				_handleHlsMediaError() {
					var e;
					null === (e = this.hlsEngine) || void 0 === e || e.recoverMediaError()
				}
				_handleHlsIrrecoverableError() {
					this._destroyHlsEngine()
				}
				_handleHlsLevelLoaded(e, t) {
					this.state.canPlay || this._handleHlsMediaReady(e, t)
				}
				_handleHlsMediaReady(e, t) {
					const {
						live: r,
						totalduration: n
					} = t.details, i = new J(e, {
						detail: t
					}), s = r ? Ce.a.LiveVideo : Ce.a.Video;
					this.state.mediaType !== s && this.dispatchEvent(Z("vds-media-type-change", {
						detail: s,
						triggerEvent: i
					})), this.state.duration !== n && this.dispatchEvent(Z("vds-duration-change", {
						detail: n,
						triggerEvent: i
					}))
				}
				addEventListener(e, t, r) {
					if (!Lt(e)) return super.addEventListener(e, t, r); {
						const i = xt(e);
						var n;
						this._hlsEventListeners.some(e => e.type === i && e.listener === t) || (this._hlsEventListeners.push({
							type: i,
							listener: t,
							options: r
						}), null === (n = this.hlsEngine) || void 0 === n || n[null != r && r.once ? "once" : "on"](i, t, null == r ? void 0 : r.context))
					}
				}
				removeEventListener(e, t, r) {
					if (Lt(e)) {
						var n;
						const i = xt(e);
						return this._hlsEventListeners = this._hlsEventListeners.filter(e => e.type === i && e.listener === t), void(null === (n = this.hlsEngine) || void 0 === n || n.off(i, t, null == r ? void 0 : r.context, null == r ? void 0 : r.once))
					}
					return super.removeEventListener(e, t, r)
				}
			}
			Ct([Object(i.b)({
				type: Object,
				attribute: "hls-config"
			})], It.prototype, "hlsConfig", void 0), Ct([Object(i.b)({
				type: Boolean,
				attribute: !1
			})], It.prototype, "_loadingUserLevel", void 0), K("vds-hls", It);
			class Mt {
				constructor(e) {
					this._host = e, this._connectedQueue = be(this._host)
				}
				play(e) {
					this._dispatchRequest("vds-play-request", {
						triggerEvent: e
					})
				}
				pause(e) {
					this._dispatchRequest("vds-pause-request", {
						triggerEvent: e
					})
				}
				mute(e) {
					this._dispatchRequest("vds-mute-request", {
						triggerEvent: e
					})
				}
				unmute(e) {
					this._dispatchRequest("vds-unmute-request", {
						triggerEvent: e
					})
				}
				enterFullscreen(e, t) {
					this._dispatchRequest("vds-enter-fullscreen-request", {
						triggerEvent: t,
						detail: e
					})
				}
				exitFullscreen(e, t) {
					this._dispatchRequest("vds-exit-fullscreen-request", {
						triggerEvent: t,
						detail: e
					})
				}
				seeking(e, t) {
					this._dispatchRequest("vds-seeking-request", {
						detail: e,
						triggerEvent: t
					})
				}
				seek(e, t) {
					this._dispatchRequest("vds-seek-request", {
						detail: e,
						triggerEvent: t
					})
				}
				changeVolume(e, t) {
					this._dispatchRequest("vds-volume-change-request", {
						detail: e,
						triggerEvent: t
					})
				}
				resumeUserIdle(e) {
					this._dispatchRequest("vds-resume-user-idle-request", {
						triggerEvent: e
					})
				}
				pauseUserIdle(e) {
					this._dispatchRequest("vds-pause-user-idle-request", {
						triggerEvent: e
					})
				}
				showPoster(e) {
					this._dispatchRequest("vds-show-poster-request", {
						triggerEvent: e
					})
				}
				hidePoster(e) {
					this._dispatchRequest("vds-hide-poster-request", {
						triggerEvent: e
					})
				}
				_dispatchRequest(e, t) {
					this._connectedQueue.queue(e, () => {
						const r = Z(e, {
							...t,
							bubbles: !0,
							composed: !0
						});
						this._host.dispatchEvent(r)
					})
				}
			}
			class jt {
				constructor(e) {
					this._host = e;
					const t = new Q.a;
					let r = !1;
					t.add(Object(Q.e)(document, "pointerdown", () => {
						r = !1
					})), Object(Ze.a)(e, "keydown", e => {
						e.metaKey || e.altKey || e.ctrlKey || (r = !0)
					}), Object(Ze.a)(e, "focus", () => {
						r && e.classList.add("focus-visible")
					}), Object(Ze.a)(e, "blur", () => {
						e.classList.remove("focus-visible")
					}), e.addController({
						hostDisconnected: () => {
							t.empty()
						}
					})
				}
			}

			function Ft(e) {
				return new jt(e)
			}

			function Nt(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.type.startsWith("key")) && void 0 !== t && t
			}
			const Ut = n.b`
  :host {
    display: table;
    contain: content;
    user-select: none;
    cursor: pointer;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none;
  }

  :host(:focus) {
    outline: none;
  }
  :host(:focus-visible) {
    outline: 1px auto Highlight;
    outline: 1px auto -webkit-focus-ring-color;
  }
  :host(.focus-visible) {
    outline: 1px auto Highlight;
    outline: 1px auto -webkit-focus-ring-color;
  }
`;
			var Bt = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			class Vt extends n.a {
				constructor() {
					super(), this.pressed = !1, this.disabled = !1, this._handleButtonClickCapture = Object(Ze.a)(this, "click", e => {
						this.disabled && (e.preventDefault(), e.stopImmediatePropagation())
					}, {
						capture: !0
					}), Ft(this), ["pointerup", "keydown"].forEach(e => {
						Object(Ze.a)(this, e, e => {
							this.disabled || Nt(e) && ! function(e) {
								return Nt(e) && ("Enter" === e.key || " " === e.key)
							}(e) || this._handleButtonClick(e)
						})
					})
				}
				static get styles() {
					return [Ut]
				}
				static get parts() {
					return []
				}
				connectedCallback() {
					super.connectedCallback(), Y(this, "tabindex", "0"), Y(this, "role", "button"), this._updateAriaPressedAttr()
				}
				updated(e) {
					e.has("pressed") && this._updateAriaPressedAttr()
				}
				_updateAriaPressedAttr() {
					W(this, "aria-pressed", this.pressed ? "true" : "false")
				}
				render() {
					return this._renderDefaultSlot()
				}
				_renderDefaultSlot() {
					return n.c`<slot></slot>`
				}
				_handleButtonClick(e) {
					this.pressed = !this.pressed
				}
			}
			Bt([Object(i.b)({
				type: Boolean
			})], Vt.prototype, "pressed", void 0), Bt([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], Vt.prototype, "disabled", void 0);
			class $t extends Vt {
				constructor() {
					super(), this._mediaRemote = new Mt(this), Ue(this, "fullscreen", e => {
						this.pressed = e, W(this, "fullscreen", e)
					}), Ue(this, "canFullscreen", e => {
						W(this, "hidden", !e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), Y(this, "aria-label", "Fullscreen")
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.exitFullscreen(this.fullscreenTarget, e) : this._mediaRemote.enterFullscreen(this.fullscreenTarget, e))
				}
			}(function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				s > 3 && o && Object.defineProperty(t, r, o)
			})([Object(i.b)({
				attribute: "fullscreen-target"
			})], $t.prototype, "fullscreenTarget", void 0), K("vds-fullscreen-button", $t);
			class Gt extends Vt {
				constructor() {
					super(), this._mediaRemote = new Mt(this), this._volume = 1, this._muted = !1, this.disabled = !1, Ue(this, "volume", e => {
						this._volume = e, this._handleMutedChange()
					}), Ue(this, "muted", e => {
						this._muted = e, this._handleMutedChange()
					})
				}
				connectedCallback() {
					super.connectedCallback(), Y(this, "aria-label", "Mute")
				}
				_handleMutedChange() {
					const e = this._muted || 0 === this._volume;
					this.pressed = e, W(this, "muted", e)
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.unmute(e) : this._mediaRemote.mute(e))
				}
			}(function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				s > 3 && o && Object.defineProperty(t, r, o)
			})([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], Gt.prototype, "disabled", void 0), K("vds-mute-button", Gt);
			K("vds-play-button", class extends Vt {
				constructor() {
					super(), this._mediaRemote = new Mt(this), Ue(this, "paused", e => {
						this.pressed = !e, W(this, "paused", e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), Y(this, "aria-label", "Play")
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.pause(e) : this._mediaRemote.play(e))
				}
			});
			const Ht = (e, t, r) => {
					let n = e[0];
					for (let i = 1; i < e.length; i++) n += t[r ? r[i - 1] : i - 1], n += e[i];
					return n
				},
				qt = e => (e => "string" != typeof e && "strTag" in e)(e) ? Ht(e.strings, e.values) : e;
			class zt {
				constructor() {
					this.settled = !1, this.promise = new Promise((e, t) => {
						this._resolve = e, this._reject = t
					})
				}
				resolve(e) {
					this.settled = !0, this._resolve(e)
				}
				reject(e) {
					this.settled = !0, this._reject(e)
				}
			}
			const Kt = [];
			for (let Vr = 0; Vr < 256; Vr++) Kt[Vr] = (Vr >> 4 & 15).toString(16) + (15 & Vr).toString(16);
			new WeakMap, new Map;
			let Wt = new zt;
			Wt.resolve();
			let Yt = qt;
			var Xt = S(r("./node_modules/@reddit/shreddit.styles/dist/tailwind-build.css").a);
			const Qt = n.b`
  .control {
    min-width: 48px;
    min-height: 48px;
    -webkit-tap-highlight-color: transparent;
  }

  @media (hover: hover) and (pointer: fine) {
    .control:hover {
      transform: scale(1.2);
    }
  }

  .control:focus:not(:focus-visible) {
    outline: none;
  }

  icon-settings {
    margin: 0 0 0 8px;
  }

  .popup-element {
    background-color: rgba(0, 0, 0, 0.6);
    bottom: 44px;
    min-width: 94px;
    transition: opacity 100ms ease-in;
    border-radius: 8px;
  }

  .popup-element button {
    background: none;
    white-space: nowrap;
    text-align: center;
    user-select: none;
    color: #82959b;
  }
  .popup-element button.active {
    color: #fff;
  }

  .separator {
    height: 1px;
    width: calc(100% - 1rem);
    background-color: #82959b;
  }
`;
			var Jt = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const Zt = [1080, 720, 540, 480, 360, 240];
			class er extends n.a {
				constructor() {
					super(...arguments), this.showAutoplayToggle = !1, this.showOptions = !1, this.selectedLevel = -1
				}
				static get styles() {
					return [Xt, Qt]
				}
				connectedCallback() {
					super.connectedCallback(), Y(this, "aria-label", "Quality level")
				}
				levelsToDisplay() {
					const {
						levels: e = []
					} = this.hlsEngine || {}, t = e.map((e, t) => ({
						...e,
						levelIndex: t
					})).sort((e, t) => t.height - e.height);
					return Zt.map((e, r) => {
						const n = t.filter(t => t.height >= e && (0 === r || t.height < Zt[r - 1])),
							i = n[n.length - 1];
						return i ? {
							levelIndex: i.levelIndex,
							resolution: e
						} : void 0
					}).filter(Boolean)
				}
				toggleOptions() {
					this.showOptions = !this.showOptions
				}
				handleOptionSelection(e, t) {
					e.stopPropagation(), this.dispatchEvent(Z("vds-hls-manual-level-change", {
						bubbles: !0,
						composed: !0,
						detail: t
					})), this.selectedLevel = t
				}
				renderCheckmark(e) {
					return n.c`
      <span class="pr-2xs"> ${e?n.c`<icon-checkmark></icon-checkmark>`:""} </span>
    `
				}
				changeAutoplayPref() {
					const e = new CustomEvent("change-autoplay-pref", {
						bubbles: !0,
						composed: !0,
						detail: {
							newValue: !this.autoplayPref
						}
					});
					this.dispatchEvent(e)
				}
				render() {
					var e;
					const t = !0 === this.autoplayPref,
						r = -1 === this.selectedLevel;
					return n.c`
      <icon-settings
        @click="${this.toggleOptions}"
        fill
        class="control flex items-center justify-center text-18 cursor-pointer ease duration-150 scale-100"
      ></icon-settings>
      <div
        class="popup-element flex flex-col border-r-md z-10 absolute left-1/2 -translate-x-1/2 ${this.showOptions?"opacity-100":"opacity-0 pointer-events-none"}"
      >
        ${this.showAutoplayToggle?n.c`
              <button
                class="px-sm py-xs flex justify-center border-none cursor-pointer ${t?"active":""}"
                @click="${this.changeAutoplayPref}"
                data-testid="autoplay-toggle"
              >
                ${this.renderCheckmark(t)}
                <span>
                  ${Yt("Autoplay",{desc:"Button: Toggle whether media should autoplay"})}</span
                >
              </button>
              <div class="separator opacity-50 mx-auto"></div>
            `:""}
        ${null===(e=this.levelsToDisplay())||void 0===e?void 0:e.map(e=>e?n.c`
                <button
                  class="px-sm py-xs flex justify-center border-none cursor-pointer ${this.selectedLevel===e.levelIndex?"active":""}"
                  @click="${t=>this.handleOptionSelection(t,e.levelIndex)}"
                >
                  ${this.renderCheckmark(this.selectedLevel===e.levelIndex)}
                  <span>${e.resolution}p</span>
                </button>
              `:"")}
        <button
          class="px-sm py-xs flex justify-center border-none cursor-pointer ${r?"active":""}"
          @click="${e=>this.handleOptionSelection(e,-1)}"
        >
          ${this.renderCheckmark(r)}
          <span>
            ${Yt("Auto",{desc:"Button: Automatic quality option"})}</span
          >
        </button>
      </div>
    `
				}
			}

			function tr(e, t) {
				const r = String(e),
					n = r.length;
				if (n < t) {
					return `${"0".repeat(t-n)}${e}`
				}
				return r
			}
			var rr;

			function nr(e) {
				const t = Math.trunc(e / 3600),
					r = Math.trunc(e % 3600 / 60),
					n = Math.trunc(e % 60),
					i = Number((e - Math.trunc(e)).toPrecision(3));
				return {
					[rr.Hours]: t,
					[rr.Minutes]: r,
					[rr.Seconds]: n,
					[rr.Fraction]: i
				}
			}

			function ir(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const {
					hours: n,
					minutes: i,
					seconds: s
				} = nr(e), o = t ? tr(n, 2) : n, a = tr(i, 2), l = tr(s, 2);
				return n > 0 || r ? `${o}:${a}:${l}` : `${i}:${l}`
			}

			function sr(e) {
				const t = [],
					{
						hours: r,
						minutes: n,
						seconds: i
					} = nr(e),
					s = (e, t) => 1 === e ? t : `${t}s`;
				return r > 0 && t.push(`${r} ${s(r,"hour")}`), n > 0 && t.push(`${n} ${s(n,"minute")}`), (i > 0 || 0 === t.length) && t.push(`${i} ${s(i,"second")}`), t.join(", ")
			}
			Jt([Object(i.b)({
					attribute: !1
				})], er.prototype, "hlsEngine", void 0), Jt([Object(i.b)({
					attribute: !1
				})], er.prototype, "showAutoplayToggle", void 0), Jt([Object(i.b)({
					attribute: !1
				})], er.prototype, "autoplayPref", void 0), Jt([Object(i.d)()], er.prototype, "showOptions", void 0), Jt([Object(i.d)()], er.prototype, "selectedLevel", void 0), K("vds-quality-switcher", er),
				function(e) {
					e.Hours = "hours", e.Minutes = "minutes", e.Seconds = "seconds", e.Fraction = "fraction"
				}(rr || (rr = {}));
			var or = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			class ar extends n.a {
				constructor() {
					super(...arguments), this._disposal = new Q.a, this._mediaStoreConsumer = Ne.consume(this), this.__seconds = 0, this.type = "current", this.showHours = !1, this.padHours = !1, this.remainder = !1
				}
				static get styles() {
					return [n.b`
        :host {
          display: inline-block;
          contain: content;
        }

        :host([hidden]) {
          display: none;
        }
      `]
				}
				get _mediaStore() {
					return this._mediaStoreConsumer.value
				}
				connectedCallback() {
					super.connectedCallback(), this._handleTypeChange()
				}
				update(e) {
					(e.has("type") || e.has("remainder")) && this._handleTypeChange(), super.update(e)
				}
				disconnectedCallback() {
					this._disposal.empty(), super.disconnectedCallback()
				}
				render() {
					return n.c`${this._getFormattedTime()}`
				}
				_handleTypeChange() {
					this._disposal.empty();
					const e = this._getTypeStore(),
						t = (this.remainder ? this._createRemainderStore(e) : e).subscribe(e => {
							this.__seconds = e
						});
					this._disposal.add(t)
				}
				_getTypeStore() {
					switch (this.type) {
						case "buffered":
							return this._mediaStore.bufferedAmount;
						case "seekable":
							return this._mediaStore.seekableAmount;
						case "duration":
							return this._mediaStore.duration;
						default:
							return this._mediaStore.currentTime
					}
				}
				_createRemainderStore(e) {
					return pe([e, this._mediaStore.duration], e => {
						let [t, r] = e;
						return Math.max(0, r - t)
					})
				}
				_getFormattedTime() {
					return ir(this.__seconds, this.padHours, this.showHours)
				}
			}

			function lr(e) {
				let t;
				const r = () => !j(t);

				function n() {
					for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s];
					r() || (t = window.requestAnimationFrame(() => {
						e.apply(this, i), t = void 0
					}))
				}
				return n.cancel = () => {
					j(t) || (window.cancelAnimationFrame(t), t = void 0)
				}, n.pending = r, n
			}
			or([Object(i.d)()], ar.prototype, "__seconds", void 0), or([Object(i.b)()], ar.prototype, "type", void 0), or([Object(i.b)({
				attribute: "show-hours",
				type: Boolean
			})], ar.prototype, "showHours", void 0), or([Object(i.b)({
				attribute: "pad-hours",
				type: Boolean
			})], ar.prototype, "padHours", void 0), or([Object(i.b)({
				type: Boolean
			})], ar.prototype, "remainder", void 0), K("vds-time", ar);
			const dr = Oe((function() {
					const e = he(!1),
						t = he(!1);
					return {
						value: he(50),
						pointerValue: he(0),
						min: he(0),
						max: he(100),
						dragging: e,
						pointing: t,
						interactive: pe([e, t], e => {
							let [t, r] = e;
							return t || r
						})
					}
				})),
				cr = n.b`
  * {
    box-sizing: border-box;
    touch-action: none;
  }

  :host {
    display: block;
    contain: layout;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none;
  }

  :host(:focus) {
    outline: none;
  }
  :host(:focus-visible) {
    outline: 1px auto Highlight;
    outline: 1px auto -webkit-focus-ring-color;
  }
  :host(.focus-visible) {
    outline: 1px auto Highlight;
    outline: 1px auto -webkit-focus-ring-color;
  }
`;
			var ur, hr, pr = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			! function(e) {
				e[e.Left = -1] = "Left", e[e.ArrowLeft = -1] = "ArrowLeft", e[e.Up = -1] = "Up", e[e.ArrowUp = -1] = "ArrowUp", e[e.Right = 1] = "Right", e[e.ArrowRight = 1] = "ArrowRight", e[e.Down = 1] = "Down", e[e.ArrowDown = 1] = "ArrowDown"
			}(ur || (ur = {})),
			function(e) {
				e.Horizontal = "horizontal", e.Vertical = "vertical"
			}(hr || (hr = {}));
			class fr extends n.a {
				constructor() {
					super(), this._sliderStoreProvider = dr.provide(this), this.disabled = !1, this.value = 50, this._step = 1, this.direction = hr.Horizontal, this._keyboardStep = 1, this.shiftKeyMultiplier = 5, this.customValueText = !1, this._mediaRemote = new Mt(this), this._disconnectDisposal = new Q.a, this._handlePointerEnter = Object(Ze.a)(this, "pointerenter", () => {
						this.disabled || (this.setAttribute("pointing", ""), this.store.pointing.set(!0))
					}), this._handlePointerMove = Object(Ze.a)(this, "pointermove", e => {
						if (this.disabled || this.isDragging) return;
						const t = this._getValueBasedOnThumbPosition(e);
						this.store.pointerValue.set(t), this._dispatchPointerValueChange(e)
					}), this._handlePointerLeave = Object(Ze.a)(this, "pointerleave", () => {
						this.disabled || (this.removeAttribute("pointing"), this.store.pointing.set(!1))
					}), this._handlePointerDown = Object(Ze.a)(this, "pointerdown", e => {
						this.disabled || (this._startDragging(e), this._onDrag(e))
					}), this._handleKeydown = Object(Ze.a)(this, "keydown", e => {
						if (this.disabled) return;
						const {
							key: t,
							shiftKey: r
						} = e;
						if (!Object.keys(ur).includes(t)) return;
						const n = (r ? this.keyboardStep * this.shiftKeyMultiplier : this.keyboardStep) * Number(ur[t]),
							i = (this.value + n) / this.step,
							s = this.step * i;
						this.value = this._getClampedValue(s), this._dispatchValueChange(e)
					}), this._handleFillValueChange = Object(Ze.a)(this, "vds-slider-value-change", this._updateFillCSSProps.bind(this)), this._handlePointerValueChange = Object(Ze.a)(this, "vds-slider-pointer-value-change", this._updatePointerCSSProps.bind(this)), this._onDrag = lr(e => {
						if (this.disabled || !this.isDragging) return;
						const t = this._getValueBasedOnThumbPosition(e);
						this.store.pointerValue.set(t), this._dispatchPointerValueChange(e)
					}), this._handleDocumentPointerUp = Object(Ze.a)(this, "pointerup", e => {
						!this.disabled && this.isDragging && this._stopDragging(e)
					}, {
						target: document
					}), this._handleDocumentTouchMove = Object(Ze.a)(this, "touchmove", e => {
						!this.disabled && this.isDragging && e.preventDefault()
					}, {
						target: document,
						passive: !1
					}), this._handleDocumentPointerMove = Object(Ze.a)(this, "pointermove", e => {
						!this.disabled && this.isDragging && this._onDrag(e)
					}, {
						target: document
					}), this._lastDispatchedValue = this.value, this._dispatchValueChange = lr(e => {
						this.value !== this._lastDispatchedValue && (this.dispatchEvent(Z("vds-slider-value-change", {
							detail: this.value,
							triggerEvent: e
						})), this._lastDispatchedValue = this.value)
					}), this._lastDispatchedPointerValue = this.pointerValue, this._dispatchPointerValueChange = lr(e => {
						if (this.pointerValue === this._lastDispatchedPointerValue) return;
						["vds-slider-pointer-value-change", this.isDragging && "vds-slider-drag-value-change"].forEach(t => {
							t && this.dispatchEvent(Z(t, {
								detail: this.pointerValue,
								triggerEvent: e
							}))
						}), this._lastDispatchedPointerValue = this.pointerValue
					}), Ft(this)
				}
				static get styles() {
					return [cr]
				}
				static get parts() {
					return []
				}
				get store() {
					return this._sliderStoreProvider.value
				}
				get min() {
					return fe(this.store.min)
				}
				set min(e) {
					this.store.min.set(e)
				}
				get max() {
					return fe(this.store.max)
				}
				set max(e) {
					this.store.max.set(e)
				}
				get step() {
					return this._step
				}
				set step(e) {
					this._step = e
				}
				get keyboardStep() {
					return this._keyboardStep
				}
				set keyboardStep(e) {
					this._keyboardStep = e
				}
				get isDragging() {
					return fe(this.store.dragging)
				}
				get fillRate() {
					const e = this.max - this.min,
						t = this.value - this.min;
					return e > 0 ? t / e : 0
				}
				get fillPercent() {
					return 100 * this.fillRate
				}
				get pointerValue() {
					return fe(this.store.pointerValue)
				}
				get pointerRate() {
					const e = this.max - this.min,
						t = this.pointerValue - this.min;
					return e > 0 ? t / e : 0
				}
				get pointerPercent() {
					return 100 * this.pointerRate
				}
				connectedCallback() {
					super.connectedCallback(), this._setupAriaAttrs(), this._updateFillCSSProps(), this._updatePointerCSSProps(), this._disconnectDisposal.add(this.store.interactive.subscribe(e => {
						W(this, "interactive", e)
					}))
				}
				willUpdate(e) {
					(e.has("value") || e.has("min") || e.has("max")) && (this.value = this._getClampedValue(this.value), this.store.value.set(this.value), this._updateFillCSSProps(), this._dispatchValueChange()), e.has("disabled") && this.disabled && (this.store.dragging.set(!1), this.store.pointing.set(!1), this.removeAttribute("dragging"), this.removeAttribute("pointing"), this.removeAttribute("interactive"), W(this, "aria-disabled", this.disabled)), this.customValueText || this._updateAriaValueAttrs(), super.willUpdate(e)
				}
				disconnectedCallback() {
					this._onDrag.cancel(), this._disconnectDisposal.empty(), super.disconnectedCallback()
				}
				_updateFillCSSProps() {
					X(this, "fill-value", `${this.value}`), X(this, "fill-rate", `${this.fillRate}`), X(this, "fill-percent", `${this.fillPercent}%`)
				}
				_updatePointerCSSProps() {
					X(this, "pointer-value", `${this.pointerValue}`), X(this, "pointer-rate", `${this.pointerRate}`), X(this, "pointer-percent", `${this.pointerPercent}%`)
				}
				render() {
					return this._renderSlider()
				}
				_renderSlider() {
					return n.c`${this._renderDefaultSlot()}`
				}
				_renderDefaultSlot() {
					return n.c`<slot></slot>`
				}
				_setupAriaAttrs() {
					Y(this, "role", "slider"), Y(this, "tabindex", "0"), Y(this, "aria-orientation", this.direction === hr.Vertical ? "vertical" : "horizontal"), Y(this, "autocomplete", "off")
				}
				_updateAriaValueAttrs() {
					this.setAttribute("aria-valuemin", this._getValueMin()), this.setAttribute("aria-valuenow", this._getValueNow()), this.setAttribute("aria-valuemax", this._getValueMax()), this.setAttribute("aria-valuetext", this._getValueText())
				}
				_getValueMin() {
					return String(this.min)
				}
				_getValueNow() {
					return String(this.value)
				}
				_getValueMax() {
					return String(this.max)
				}
				_getValueText() {
					return `${Se(this.value/this.max*100,2)}%`
				}
				_startDragging(e) {
					if (this.isDragging) return;
					this.store.dragging.set(!0), this.setAttribute("dragging", "");
					const t = this._getValueBasedOnThumbPosition(e);
					this.store.pointerValue.set(t), this._dispatchPointerValueChange(e), this.dispatchEvent(Z("vds-slider-drag-start", {
						triggerEvent: e,
						detail: this.value,
						bubbles: !0
					})), this._mediaRemote.pauseUserIdle(e)
				}
				_stopDragging(e) {
					if (!this.isDragging) return;
					this.store.dragging.set(!1), this._dispatchValueChange.cancel(), this.removeAttribute("dragging");
					const t = this._getValueBasedOnThumbPosition(e);
					this.value = t, this.store.pointerValue.set(t), this._dispatchValueChange(e), this._dispatchPointerValueChange(e), this.dispatchEvent(Z("vds-slider-drag-end", {
						triggerEvent: e,
						detail: this.value,
						bubbles: !0
					})), this._mediaRemote.resumeUserIdle(e)
				}
				_getClampedValue(e) {
					return Te(this.min, Se(e, ke(this.step)), this.max)
				}
				_getValueFromRate(e) {
					const t = Te(0, e, 1),
						r = (this.max - this.min) * t,
						n = Math.round(r / this.step),
						i = this.step * n;
					return this.min + i
				}
				_getValueBasedOnThumbPosition(e) {
					if (this.direction === hr.Vertical) {
						const t = e.clientY,
							{
								bottom: r,
								height: n
							} = this.getBoundingClientRect(),
							i = (r - t) / n;
						return this._getValueFromRate(i)
					} {
						const t = e.clientX,
							{
								left: r,
								width: n
							} = this.getBoundingClientRect(),
							i = (t - r) / n;
						return this._getValueFromRate(i)
					}
				}
			}
			pr([Object(i.b)({
				reflect: !0,
				type: Number
			})], fr.prototype, "min", null), pr([Object(i.b)({
				reflect: !0,
				type: Number
			})], fr.prototype, "max", null), pr([Object(i.b)({
				reflect: !0,
				type: Boolean
			})], fr.prototype, "disabled", void 0), pr([Object(i.b)({
				reflect: !0,
				type: Number
			})], fr.prototype, "value", void 0), pr([Object(i.b)({
				type: Number,
				reflect: !0
			})], fr.prototype, "step", null), pr([Object(i.b)({
				attribute: "direction",
				type: hr
			})], fr.prototype, "direction", void 0), pr([Object(i.b)({
				attribute: "keyboard-step",
				type: Number,
				reflect: !0
			})], fr.prototype, "keyboardStep", null), pr([Object(i.b)({
				attribute: "shift-key-multiplier",
				type: Number
			})], fr.prototype, "shiftKeyMultiplier", void 0), pr([Object(i.b)({
				type: Boolean,
				attribute: "custom-value-text"
			})], fr.prototype, "customValueText", void 0);
			const gr = n.b``;
			var vr = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			class mr extends fr {
				constructor() {
					super(), this._step = .1, this.value = 0, this.valueText = "{currentTime} out of {duration}", this.pauseWhileDragging = !1, this.seekingRequestThrottle = 100, this.__mediaDuration = 0, this.__mediaPaused = !0, this._handleSliderDragStart = Object(Ze.a)(this, "vds-slider-drag-start", e => {
						this._togglePlaybackWhileDragging(e)
					}), this._handleSliderValueChange = Object(Ze.a)(this, "vds-slider-value-change", e => {
						Nt(e.originEvent) && (this._dispatchSeekingRequest.cancel(), this._mediaRemote.seek(this.value, e))
					}), this._handleSliderDragValueChange = Object(Ze.a)(this, "vds-slider-drag-value-change", e => {
						this._dispatchSeekingRequest(e)
					}), this._handleSliderDragEnd = Object(Ze.a)(this, "vds-slider-drag-end", e => {
						this._dispatchSeekingRequest.cancel(), this._mediaRemote.seek(this.value, e), this._togglePlaybackWhileDragging(e)
					}), this._dispatchSeekingRequest = et(e => {
						this._mediaRemote.seeking(this.value, e)
					}, this.seekingRequestThrottle), this._wasPlayingBeforeDragStart = !1, Ue(this, "currentTime", e => {
						this.value = e
					}), Ue(this, "duration", e => {
						this.__mediaDuration = e, this.requestUpdate("max")
					}), Ue(this, "paused", e => {
						this.__mediaPaused = e
					})
				}
				static get styles() {
					return [super.styles, gr]
				}
				connectedCallback() {
					super.connectedCallback(), Y(this, "aria-label", "Media time")
				}
				get min() {
					return 0
				}
				set min(e) {}
				get max() {
					return this.__mediaDuration
				}
				set max(e) {}
				update(e) {
					e.has("disabled") && this.disabled && this._dispatchSeekingRequest.cancel(), super.update(e)
				}
				disconnectedCallback() {
					this._dispatchSeekingRequest.cancel(), super.disconnectedCallback()
				}
				_getValueMin() {
					return "0%"
				}
				_getValueNow() {
					return `${Math.round(this.fillPercent)}%`
				}
				_getValueText() {
					return this.valueText.replace("{currentTime}", sr(this.value)).replace("{duration}", sr(this.__mediaDuration))
				}
				_getValueMax() {
					return "100%"
				}
				_togglePlaybackWhileDragging(e) {
					this.pauseWhileDragging && (this.isDragging && !this.__mediaPaused ? (this._wasPlayingBeforeDragStart = !0, this._mediaRemote.pause(e)) : this._wasPlayingBeforeDragStart && !this.isDragging && this.__mediaPaused && (this._wasPlayingBeforeDragStart = !1, this._mediaRemote.play(e)))
				}
			}
			vr([Object(i.b)({
				attribute: !1,
				state: !0
			})], mr.prototype, "value", void 0), vr([Object(i.b)({
				attribute: !1
			})], mr.prototype, "min", null), vr([Object(i.b)({
				attribute: !1
			})], mr.prototype, "max", null), vr([Object(i.b)({
				attribute: "value-text"
			})], mr.prototype, "valueText", void 0), vr([Object(i.b)({
				attribute: "pause-while-dragging",
				type: Boolean
			})], mr.prototype, "pauseWhileDragging", void 0), vr([Object(i.b)({
				attribute: "seeking-request-throttle",
				type: Number
			})], mr.prototype, "seekingRequestThrottle", void 0), vr([Object(i.d)()], mr.prototype, "__mediaDuration", void 0), vr([Object(i.d)()], mr.prototype, "__mediaPaused", void 0), K("vds-time-slider", mr);
			var br = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			class yr extends n.a {
				constructor() {
					super(...arguments), this._disposal = new Q.a, this._sliderStoreConsumer = dr.consume(this), this.__value = 0, this.type = "current", this.showHours = !1, this.padHours = !1, this.decimalPlaces = 2
				}
				static get styles() {
					return [n.b`
        :host {
          display: inline-block;
          contain: content;
        }

        :host([hidden]) {
          display: none;
        }
      `]
				}
				get _sliderStore() {
					return this._sliderStoreConsumer.value
				}
				connectedCallback() {
					super.connectedCallback(), this._handleTypeChange()
				}
				update(e) {
					(e.has("type") || e.has("format")) && this._handleTypeChange(), super.update(e)
				}
				disconnectedCallback() {
					this._disposal.empty(), super.disconnectedCallback()
				}
				render() {
					return n.c`${this._getValueText()}`
				}
				_handleTypeChange() {
					this._disposal.empty();
					const e = this._sliderStore["current" === this.type ? "value" : "pointerValue"],
						t = ("percent" === this.format ? this._createPercentStore(e) : e).subscribe(e => {
							this.__value = e
						});
					this._disposal.add(t)
				}
				_createPercentStore(e) {
					return pe([e, this._sliderStore.min, this._sliderStore.max], e => {
						let [t, r, n] = e;
						return t / (n - r) * 100
					})
				}
				_getValueText() {
					switch (this.format) {
						case "percent":
							return this._getPercentFormat();
						case "time":
							return this._getTimeFormat();
						default:
							return `${this.__value}`
					}
				}
				_getPercentFormat() {
					return `${Se(this.__value,this.decimalPlaces)}%`
				}
				_getTimeFormat() {
					return ir(this.__value, this.padHours, this.showHours)
				}
			}
			br([Object(i.d)()], yr.prototype, "__value", void 0), br([Object(i.b)()], yr.prototype, "type", void 0), br([Object(i.b)()], yr.prototype, "format", void 0), br([Object(i.b)({
				attribute: "show-hours",
				type: Boolean
			})], yr.prototype, "showHours", void 0), br([Object(i.b)({
				attribute: "pad-hours",
				type: Boolean
			})], yr.prototype, "padHours", void 0), br([Object(i.b)({
				attribute: "decimal-places",
				type: Number
			})], yr.prototype, "decimalPlaces", void 0), K("vds-slider-value-text", yr);
			const {
				H: _r
			} = s.a, wr = e => void 0 === e.strings, Er = (e, t) => {
				var r, n;
				const i = e._$AN;
				if (void 0 === i) return !1;
				for (const s of i) null === (n = (r = s)._$AO) || void 0 === n || n.call(r, t, !1), Er(s, t);
				return !0
			}, Sr = e => {
				let t, r;
				do {
					if (void 0 === (t = e._$AM)) break;
					(r = t._$AN).delete(e), e = t
				} while (0 === (null == r ? void 0 : r.size))
			}, Tr = e => {
				for (let t; t = e._$AM; e = t) {
					let r = t._$AN;
					if (void 0 === r) t._$AN = r = new Set;
					else if (r.has(e)) break;
					r.add(e), xr(t)
				}
			};

			function kr(e) {
				void 0 !== this._$AN ? (Sr(this), this._$AM = e, Tr(this)) : this._$AM = e
			}

			function Ar(e, t = !1, r = 0) {
				const n = this._$AH,
					i = this._$AN;
				if (void 0 !== i && 0 !== i.size)
					if (t)
						if (Array.isArray(n))
							for (let s = r; s < n.length; s++) Er(n[s], !1), Sr(n[s]);
						else null != n && (Er(n, !1), Sr(n));
				else Er(this, e)
			}
			const xr = e => {
				var t, r, n, i;
				e.type == l.CHILD && (null !== (t = (n = e)._$AP) && void 0 !== t || (n._$AP = Ar), null !== (r = (i = e)._$AQ) && void 0 !== r || (i._$AQ = kr))
			};
			class Rr extends c {
				constructor() {
					super(...arguments), this._$AN = void 0
				}
				_$AT(e, t, r) {
					super._$AT(e, t, r), Tr(this), this.isConnected = e._$AU
				}
				_$AO(e, t = !0) {
					var r, n;
					e !== this.isConnected && (this.isConnected = e, e ? null === (r = this.reconnected) || void 0 === r || r.call(this) : null === (n = this.disconnected) || void 0 === n || n.call(this)), t && (Er(this, e), Sr(this))
				}
				setValue(e) {
					if (wr(this._$Ct)) this._$Ct._$AI(e, this);
					else {
						const t = [...this._$Ct._$AH];
						t[this._$Ci] = e, this._$Ct._$AI(t, this, 0)
					}
				}
				disconnected() {}
				reconnected() {}
			}
			const Or = () => new Lr;
			class Lr {}
			const Cr = new WeakMap,
				Pr = d(class extends Rr {
					render(e) {
						return s.d
					}
					update(e, [t]) {
						var r;
						const n = t !== this.Y;
						return n && void 0 !== this.Y && this.rt(void 0), (n || this.lt !== this.dt) && (this.Y = t, this.ct = null === (r = e.options) || void 0 === r ? void 0 : r.host, this.rt(this.dt = e.element)), s.d
					}
					rt(e) {
						var t;
						if ("function" == typeof this.Y) {
							const r = null !== (t = this.ct) && void 0 !== t ? t : globalThis;
							let n = Cr.get(r);
							void 0 === n && (n = new WeakMap, Cr.set(r, n)), void 0 !== n.get(this.Y) && this.Y.call(this.ct, void 0), n.set(this.Y, e), void 0 !== e && this.Y.call(this.ct, e)
						} else this.Y.value = e
					}
					get lt() {
						var e, t, r;
						return "function" == typeof this.Y ? null === (t = Cr.get(null !== (e = this.ct) && void 0 !== e ? e : globalThis)) || void 0 === t ? void 0 : t.get(this.Y) : null === (r = this.Y) || void 0 === r ? void 0 : r.value
					}
					disconnected() {
						this.lt === this.dt && this.rt(void 0)
					}
					reconnected() {
						this.rt(this.dt)
					}
				});
			var Dr = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			class Ir extends n.a {
				constructor() {
					super(), this._videoRef = Or(), this.__canPlay = !1, this.__hasError = !1, ve(this, dr, "pointerValue", e => {
						this._updateCurrentTime(e)
					})
				}
				static get styles() {
					return [n.b`
        :host {
          display: inline-block;
          contain: content;
        }

        :host([hidden]) {
          display: none;
        }

        video {
          display: block;
          width: 100%;
          height: auto;
        }
      `]
				}
				get videoElement() {
					return this._videoRef.value
				}
				_updateCurrentTime(e) {
					!this.__hasError && this.__canPlay && this.videoElement.currentTime !== e && (this.videoElement.currentTime = e)
				}
				willUpdate(e) {
					e.has("src") && (this.__canPlay = !1, this.__hasError = !1, this.removeAttribute("video-can-play"), this.removeAttribute("video-error")), super.willUpdate(e)
				}
				render() {
					return this._renderVideo()
				}
				_renderVideo() {
					return n.c`
      <video
        part="video"
        muted
        playsinline
        preload="auto"
        src="${e=this.src,o(""===e||"undefined"===e?void 0:e)}"
        @canplay="${this._handleCanPlay}"
        @error="${this._handleError}"
        ${Pr(this._videoRef)}
      ></video>
    `;
					var e
				}
				async _handleCanPlay(e) {
					this.__canPlay = !0, this.setAttribute("video-can-play", ""), St(this, e)
				}
				_handleError(e) {
					this.__hasError = !0, this.setAttribute("video-error", ""), St(this, e)
				}
			}
			Dr([Object(i.b)()], Ir.prototype, "src", void 0), Dr([Object(i.d)()], Ir.prototype, "__canPlay", void 0), Dr([Object(i.d)()], Ir.prototype, "__hasError", void 0), K("vds-slider-video", Ir);
			var Mr = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			class jr extends fr {
				constructor() {
					super(), this.value = 100, this._handleSliderValueChange = Object(Ze.a)(this, "vds-slider-value-change", this._changeVolume.bind(this)), this._handleSliderDragValueChange = Object(Ze.a)(this, "vds-slider-drag-value-change", this._changeVolume.bind(this)), Ue(this, "volume", e => {
						this.value = 100 * Math.sqrt(e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), Y(this, "aria-label", "Media volume")
				}
				get min() {
					return 0
				}
				set min(e) {}
				get max() {
					return 100
				}
				set max(e) {}
				_changeVolume(e) {
					const t = e.detail,
						r = Se(Math.pow(t / 100, 2), 3);
					this._mediaRemote.changeVolume(r, e)
				}
			}
			Mr([Object(i.b)({
				attribute: !1
			})], jr.prototype, "min", null), Mr([Object(i.b)({
				attribute: !1
			})], jr.prototype, "max", null), Mr([Object(i.b)({
				attribute: !1,
				state: !0
			})], jr.prototype, "value", void 0), K("vds-volume-slider", jr);
			var Fr = n.b`
  :host {
    --control-backdrop: rgba(0, 0, 0, 0.6);
    --slider-fg: #fff;
    --time-slider-bg: #434343;
    --volume-slider-bg: rgba(255, 255, 255, 0.2);
  }

  vds-hls,
  vds-media-visibility {
    display: block;
    height: 100%;
  }

  video {
    width: 100% !important;
    height: 100% !important;
    max-height: none !important;
  }

  /*
   * -------------------------------------------------------------------------------------------
   * Media UI
   * -------------------------------------------------------------------------------------------
   */

  vds-media .control-bar {
    align-items: flex-end;
  }

  vds-media[user-idle] .disappearing-controls,
  vds-media:not([can-play]) .disappearing-controls {
    cursor: none;
    opacity: 0;
    visibility: hidden;
  }

  vds-media.gif .disappearing-controls,
  vds-media.gif .scrim {
    opacity: 0 !important;
    visibility: hidden !important;
  }

  /* show controls when an error occurs to let users self heal */
  vds-media[autoplay-error] .disappearing-controls,
  vds-media[error] .disappearing-controls {
    opacity: 1 !important;
    visibility: visible !important;
  }

  /*
   * -------------------------------------------------------------------------------------------
   * Poster
   * -------------------------------------------------------------------------------------------
   */

  vds-media[can-play] shreddit-img {
    opacity: 0;
    visibility: hidden;
  }

  /*
   * -------------------------------------------------------------------------------------------
   * Scrim
   * -------------------------------------------------------------------------------------------
   */

  .scrim {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent, rgba(0, 0, 0, 0.25));
  }

  vds-media[paused] .scrim,
  vds-media[seeking] .scrim,
  vds-media:not([user-idle]) .scrim {
    opacity: 1;
  }

  vds-media[seeking] .control {
    pointer-events: none;
  }

  /*
   * -------------------------------------------------------------------------------------------
   * Sliders
   * -------------------------------------------------------------------------------------------
   */

  .slider-track {
    background-color: var(--time-slider-bg);
  }

  .slider-track-fill {
    background-color: var(--slider-fg);
    transform-origin: left center;
    transform: translateY(-50%) scaleX(var(--vds-fill-rate));
    will-change: transform;
  }

  .slider-thumb-container {
    left: var(--vds-fill-percent);
    will-change: left;
  }

  /*
   * -------------------------------------------------------------------------------------------
   * Time Slider
   * -------------------------------------------------------------------------------------------
   */

  vds-time-slider[dragging] .slider-thumb-container {
    left: var(--vds-pointer-percent);
  }

  vds-time-slider[dragging] .slider-thumb {
    transform: translateY(-50%) scale(1);
  }

  vds-slider-video:not([src]),
  vds-slider-video[video-error] {
    display: none;
  }

  .slider-preview-container {
    width: 150px;
    display: flex;
    opacity: 0;
    visibility: hidden;
    left: var(--vds-pointer-percent);
    will-change: left;
    transition: opacity 100ms ease-in;
  }

  /* interactive = dragging or pointing. */
  vds-time-slider[interactive] .slider-preview-container {
    opacity: 1;
    visibility: visible;
  }
  vds-time-slider[interactive] .slider-preview-container vds-slider-video:not([video-can-play]) {
    display: none;
  }

  vds-slider-value-text {
    margin-top: 6px;
  }

  /*
   * -------------------------------------------------------------------------------------------
   * Volume Slider & Mute Button
   * -------------------------------------------------------------------------------------------
   */

  .volume-slider-backdrop {
    background-color: var(--control-backdrop);
    opacity: 0;
    transition: opacity 100ms ease-in;
    border-radius: 8px;
    position: relative;
    bottom: -8px;
  }
  .mute-volume-container:hover .volume-slider-backdrop {
    opacity: 1;
  }

  vds-volume-slider[dragging] .slider-thumb-container {
    bottom: var(--vds-pointer-percent);
  }

  vds-volume-slider {
    height: 75px;
  }

  vds-volume-slider .slider-track,
  vds-volume-slider .slider-track-fill {
    width: 0.2rem;
  }

  vds-volume-slider .slider-track {
    background-color: var(--volume-slider-bg);
  }

  vds-volume-slider .slider-track-fill {
    transform-origin: bottom center;
    transform: translate(-50%, 0%) scaleY(var(--vds-fill-rate));
    will-change: transform;
  }

  vds-volume-slider .slider-thumb-container {
    bottom: var(--vds-fill-percent);
    transform: translateY(50%) scale(1);
    left: 0;
    will-change: bottom;
  }

  vds-volume-slider[dragging] .slider-thumb-container {
    bottom: var(--vds-pointer-percent);
    left: 0;
  }

  vds-volume-slider .slider-thumb {
    border-radius: 9999px;
  }

  /*
   * -------------------------------------------------------------------------------------------
   * Control
   * -------------------------------------------------------------------------------------------
   */

  .control {
    min-width: 48px;
    min-height: 48px;
    -webkit-tap-highlight-color: transparent;
  }

  @media (hover: hover) and (pointer: fine) {
    .control:hover {
      transform: scale(1.2);
    }

    .gif-icon:hover {
      transform: none;
    }
  }

  .control:focus:not(:focus-visible) {
    outline: none;
  }

  vds-media[ended] .refresh-icon,
  vds-media[paused]:not([ended]) .play-icon,
  vds-media:not([paused]) .pause-icon,
  vds-media[ended] .repeat-icon,
  vds-media:not([muted]) .unmute-icon,
  vds-media[muted] .mute-icon,
  vds-media[fullscreen] .collapse-icon,
  vds-media:not([fullscreen]) .expand-icon {
    opacity: 1;
  }

  /*
   * -------------------------------------------------------------------------------------------
   * Buffering Indicator
   * -------------------------------------------------------------------------------------------
   */

  vds-media:not([can-play]) .buffering-indicator,
  vds-media[waiting] .buffering-indicator {
    opacity: 1;
    visibility: visible;
  }

  .buffering-track-fill {
    stroke-dasharray: 100;
    stroke-dashoffset: 50;
  }
`;
			const Nr = {
				capLevelToPlayerSize: !0
			};
			var Ur = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			let Br = class extends n.a {
				constructor() {
					super(...arguments), this.hlsLibrary = () => r.e(3).then(r.t.bind(null, "./node_modules/@reddit/shreddit.components.shreddit-player/node_modules/hls.js/dist/hls.min.js", 7)), this.autoplay = !1, this.autoplayPref = !1, this.showAutoplayToggle = !1, this.gif = !1, this.playOutOfViewport = !1, this.ui = "mobile", this.objectFit = "contain", this.mediaLoadRequested = !1, this.disableMuteButton = !1, this.handleLoadMediaClick = () => {
						var e;
						this.mediaLoadRequested = !0, null === (e = this.hlsElement) || void 0 === e || e.startLoadingMedia()
					}
				}
				static get styles() {
					return [Xt, Fr]
				}
				connectedCallback() {
					super.connectedCallback(), requestAnimationFrame(() => {
						var e, t, r;
						null === (e = this.hlsElement) || void 0 === e || e.addEventListener("vds-loaded-metadata", () => {
							var e;
							this.hlsEngine = null === (e = this.hlsElement) || void 0 === e ? void 0 : e.hlsEngine
						}), null === (t = this.volumeSlider) || void 0 === t || t.addEventListener("vds-slider-drag-start", () => {
							this.disableMuteButton = !0
						}), null === (r = this.volumeSlider) || void 0 === r || r.addEventListener("vds-slider-drag-end", () => {
							this.disableMuteButton = !1
						})
					})
				}
				shouldShowPreviewPoster() {
					var e, t;
					return !(this.autoplay || this.mediaLoadRequested || null !== (e = this.hlsElement) && void 0 !== e && null !== (t = e.videoElement) && void 0 !== t && t.readyState)
				}
				async play() {
					var e;
					return null === (e = this.hlsElement) || void 0 === e ? void 0 : e.play()
				}
				async pause() {
					var e;
					return null === (e = this.hlsElement) || void 0 === e ? void 0 : e.pause()
				}
				renderUi() {
					var e, t;
					const r = this.gif ? "gif" : "",
						i = "desktop" === this.ui,
						s = "absolute inset-0 w-full h-full flex items-center justify-center opacity-0 ease duration-150";
					var a;
					return this.shouldShowPreviewPoster() ? n.c`
        <div class="preview-poster-container absolute inset-0 bg-black">
          <shreddit-img
            alt="media poster"
            loading="lazy"
            objectfit="contain"
            src="${o(null!==(a=this.getAttribute("poster"))&&void 0!==a?a:void 0)}"
            class="h-full w-full visible ease absolute inset-0 object-contain bg-black"
          ></shreddit-img>
          <div class="absolute inset-0 bg-black bg-opacity-25">
            <vds-play-button
              class="h-full w-full text-white control flex items-center justify-center rounded-sm cursor-pointer relative ${"ease duration-150"}"
            >
              <icon-play
                fill
                class="play-icon absolute inset-0 flex items-center justify-center text-32 ${"ease duration-150"}"
                @click="${this.handleLoadMediaClick}"
              ></icon-play>
            </vds-play-button>
          </div>
        </div>
      ` : n.c`
      <div
        class="media-controls h-full w-full text-white absolute inset-0 pointer-events-none ${r}"
      >
        <div class="controls flex flex-col justify-end h-full w-full pointer-events-none">
          <div
            class="scrim h-full w-full absolute inset-0 z-0 opacity-0 ease duration-300 pointer-events-none"
          ></div>

          <div class="control-bar px-2xs flex">
            <div
              class="disappearing-controls flex items-center w-full opacity-100 visible ease duration-300"
            >
              <vds-play-button
                class="control flex items-center justify-center rounded-sm cursor-pointer pointer-events-auto relative ${"ease duration-150"}"
              >
                <icon-play fill class="play-icon text-18 ${s}"></icon-play>
                <icon-refresh fill class="refresh-icon text-24 ${s}"></icon-refresh>
                <icon-pause fill class="pause-icon text-18 ${s}"></icon-pause>
              </vds-play-button>

              <vds-time-slider
                step="0.1"
                class="flex-1 flex items-center z-0 cursor-pointer pointer-events-auto h-2xl mx-sm relative"
              >
                <div
                  class="slider-track w-full h-2xs absolute top-1/2 left-0 z-0 pointer-events-none -translate-y-1/2"
                ></div>

                <div
                  class="slider-track-fill z-10 absolute top-1/2 left-0 w-full h-2xs pointer-events-none "
                ></div>

                <div
                  class="slider-thumb-container absolute top-0 w-lg h-full z-20 -translate-x-1/2"
                >
                  <div
                    class="
                    slider-thumb absolute top-1/2 left-0 w-lg h-lg rounded-full cursor-pointer bg-white
                    -translate-y-1/2 transition-transform scale-75 duration-100 ease-out
                  "
                  ></div>
                </div>

                <div
                  class="slider-preview-container flex-col items-center justify-center absolute bottom-2xl -translate-x-1/2 text-center"
                >
                  <vds-slider-video
                    class="border border-solid border-global-white rounded-sm"
                    src="${o(this.preview)}"
                  ></vds-slider-video>
                  <vds-slider-value-text
                    class="text-14 font-semibold px-2xs bg-black bg-opacity-50 rounded-sm"
                    type="pointer"
                    format="time"
                  ></vds-slider-value-text>
                </div>
              </vds-time-slider>

              <vds-time type="current" class="flex font-semibold ml-2xs"></vds-time>

              ${i?n.c`
                    <vds-quality-switcher
                      class="pointer-events-auto relative"
                      .hlsEngine="${null===(e=this.hlsElement)||void 0===e?void 0:e.hlsEngine}"
                      .showAutoplayToggle="${this.showAutoplayToggle}"
                      .autoplayPref="${this.autoplayPref}"
                    ></vds-quality-switcher>
                  `:""}

              <vds-fullscreen-button
                class="control flex items-center justify-center rounded-sm cursor-pointer pointer-events-auto relative ${"ease duration-150"}"
              >
                <icon-expand-left fill class="expand-icon text-18 ${s}"></icon-expand-left>
                <icon-collapse-left
                  fill
                  class="collapse-icon text-18 ${s}"
                ></icon-collapse-left>
              </vds-fullscreen-button>
            </div>
            <div class="mute-volume-container flex flex-col gap-xs pointer-events-auto">
              ${i?n.c`
                    <div class="volume-slider-backdrop py-lg">
                      <vds-volume-slider
                        direction="vertical"
                        class="flex justify-center relative z-0 cursor-pointer ${"ease duration-150"}"
                      >
                        <div
                          class="slider-track absolute left-1/2 -translate-x-1/2 h-full z-0"
                        ></div>
                        <div
                          class="slider-track-fill absolute left-1/2 h-full z-10 rounded-sm pointer-events-none"
                        ></div>
                        <div
                          class="slider-thumb-container absolute flex justify-center w-full h-md z-20"
                        >
                          <div class="slider-thumb absolute bottom-0 bg-white w-md h-md"></div>
                        </div>
                      </vds-volume-slider>
                    </div>
                  `:""}
              ${this.gif?n.c`
                    <icon-gif-post
                      class="control gif-icon inset-0 flex items-center justify-center text-18"
                    ></icon-gif-post>
                  `:n.c`
                    <vds-mute-button
                      class="control rounded-sm cursor-pointer ${"ease duration-150"}"
                      .disabled="${this.disableMuteButton}"
                    >
                      <icon-volume fill class="unmute-icon text-18 ${s}"></icon-volume>
                      <icon-volume-mute
                        fill
                        class="mute-icon text-18 ${s}"
                      ></icon-volume-mute>
                    </vds-mute-button>
                  `}
            </div>
          </div>
        </div>

        <shreddit-img
          alt="media poster"
          loading="lazy"
          objectfit="contain"
          src="${o(null!==(t=this.getAttribute("poster"))&&void 0!==t?t:void 0)}"
          class="opacity-100 h-full w-full visible ease absolute inset-0 object-contain"
        ></shreddit-img>

        <div
          class="buffering-indicator h-full w-full absolute flex items-center justify-center opacity-0 invisible ease inset-0"
        >
          <svg
            aria-hidden="true"
            class="w-3xl h-3xl animate-spin"
            fill="none"
            viewBox="0 0 120 120"
          >
            <circle
              class="opacity-25"
              cx="60"
              cy="60"
              r="54"
              stroke="currentColor"
              stroke-width="8"
            ></circle>
            <circle
              class="buffering-track-fill opacity-75"
              cx="60"
              cy="60"
              r="54"
              stroke="currentColor"
              stroke-width="10"
              pathLength="100"
            ></circle>
          </svg>
        </div>
      </div>
    `
				}
				renderGestures() {
					return n.c`
      <!-- Click anywhere to pause/play -->
      <vds-gesture class="absolute inset-0" type="click" action="toggle:paused"></vds-gesture>
      <!-- Doubleclick to toggle fullscreen -->
      <vds-gesture
        class="absolute inset-0"
        type="click"
        repeat="1"
        priority="1"
        action="toggle:fullscreen"
      ></vds-gesture>
    `
				}
				render() {
					var e, t;
					const r = this.gif ? "gif" : "",
						i = "desktop" === this.ui;
					return n.c`
      <vds-media-sync ?single-playback="${!this.gif}" sync-volume>
        <vds-media-visibility
          intersection-threshold="1"
          enter-page="${o(this.autoplay||this.gif?"play":void 0)}"
          enter-viewport="${o(this.autoplay||this.gif?"play":void 0)}"
          exit-page="${o(i||this.gif?void 0:"pause")}"
          exit-viewport="${o(this.playOutOfViewport||this.gif?void 0:"pause")}"
          page-enter-delay="200"
          viewport-enter-delay="200"
        >
          <vds-media class="h-full w-full ${`${r}`}">
            <vds-hls
              class="h-full w-full"
              .hlsConfig="${Nr}"
              .hlsLibrary="${this.hlsLibrary}"
              preload="${this.autoplay?"auto":"none"}"
              loading="${this.autoplay?"lazy":"custom"}"
              ?autoplay="${this.autoplay}"
              ?gif="${this.gif}"
              ?loop="${this.gif}"
              ?muted="${this.gif}"
              poster="${o(null!==(e=this.getAttribute("poster"))&&void 0!==e?e:void 0)}"
              preview="${o(null!==(t=this.getAttribute("preview"))&&void 0!==t?t:void 0)}"
            >
              <video
                src="${o(this.src)}"
                preload="none"
                playsinline
                style="object-fit:${this.objectFit};"
              >
                <slot></slot>
              </video>
            </vds-hls>

            ${this.renderUi()} ${this.gif?"":this.renderGestures()}
          </vds-media>
        </vds-media-visibility>
      </vds-media-sync>
    `
				}
			};
			Ur([Object(i.b)({
				type: String,
				attribute: "src"
			})], Br.prototype, "src", void 0), Ur([Object(i.b)({
				type: Boolean,
				attribute: "autoplay",
				reflect: !0
			})], Br.prototype, "autoplay", void 0), Ur([Object(i.b)({
				type: Boolean,
				attribute: "autoplay-pref"
			})], Br.prototype, "autoplayPref", void 0), Ur([Object(i.b)({
				type: Boolean,
				attribute: "show-autoplay-toggle"
			})], Br.prototype, "showAutoplayToggle", void 0), Ur([Object(i.b)({
				type: Boolean,
				attribute: "gif",
				reflect: !0
			})], Br.prototype, "gif", void 0), Ur([Object(i.b)({
				type: String,
				attribute: "preview"
			})], Br.prototype, "preview", void 0), Ur([Object(i.b)({
				type: Boolean,
				attribute: "play-out-of-viewport"
			})], Br.prototype, "playOutOfViewport", void 0), Ur([Object(i.b)({
				type: String,
				attribute: "ui"
			})], Br.prototype, "ui", void 0), Ur([Object(i.b)({
				type: String,
				attribute: "object-fit"
			})], Br.prototype, "objectFit", void 0), Ur([Object(i.d)()], Br.prototype, "mediaLoadRequested", void 0), Ur([Object(i.d)()], Br.prototype, "hlsEngine", void 0), Ur([Object(i.d)()], Br.prototype, "disableMuteButton", void 0), Ur([Object(i.c)("vds-hls")], Br.prototype, "hlsElement", void 0), Ur([Object(i.c)("vds-volume-slider")], Br.prototype, "volumeSlider", void 0), Br = Ur([Object(i.a)("shreddit-player")], Br)
		},
		"./node_modules/@reddit/shreddit.components.shreddit-player/dist/media-telemetry-observer/media-telemetry-observer.js": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "MediaTelemetryObserver", (function() {
				return _e
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js"),
				i = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js"),
				s = r("./node_modules/lit/index.js"),
				o = r("./node_modules/lit/decorators.js");
			const a = 3e4,
				l = 1e4,
				d = [25, 50, 75, 95, 100],
				c = [2, 3, 5, 10],
				u = 2e3,
				h = 3e3;
			var p = r("./node_modules/@reddit/faceplate/lib/custom-event.js");
			const f = e => t => {
					const r = (e => {
						const {
							originEvent: {
								timeStamp: t
							},
							target: {
								state: r,
								mediaElement: n
							}
						} = e, {
							currentTime: i,
							muted: s,
							paused: o,
							volume: a
						} = null != r ? r : {}, {
							duration: l
						} = null != n ? n : {};
						let {
							fullscreen: d
						} = null != r ? r : {};
						return "vds-fullscreen-change" === e.type && (d = e.detail), {
							currentTime: i,
							duration: l,
							fullscreen: d,
							muted: s,
							paused: o,
							timeStamp: t,
							volume: a
						}
					})(t);
					return [Object(p.a)(e, r)]
				},
				g = [{
					"vds-fullscreen-change": f("ad-media-fullscreenchange"),
					"vds-pause": f("ad-media-pause"),
					"vds-play": f("ad-media-play"),
					"vds-time-update": f("ad-media-timeupdate"),
					"vds-volume-change": f("ad-media-volumechange"),
					"vds-seeking": f("ad-media-seeking"),
					"vds-seeked": f("ad-media-seeked")
				}];
			var v, m, b, y, _, w, E, S, T, k, A, x, R, O, L, C = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				P = r("./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js");
			class D {
				constructor(e) {
					this._timer = null, this._expectedAt = 1 / 0, this._handleInterval = () => {
						var e;
						const t = Date.now(),
							{
								_expectedAt: r,
								_interval: n
							} = this,
							i = t - r,
							s = {
								timestamp: t,
								latency: i,
								accuracy: 1 - Math.abs(i) / n
							};
						null === (e = this._callback) || void 0 === e || e.call(this, s), this._expectedAt = t + n
					}, this._interval = e.interval
				}
				onHeartbeat(e) {
					this._callback = e
				}
				destroy() {
					this._callback = void 0
				}
				start() {
					this._timer || (this._timer = window.setInterval(this._handleInterval, this._interval), this._expectedAt = Date.now() + this._interval)
				}
				stop() {
					this._timer && (window.clearInterval(this._timer), this._timer = null, this._expectedAt = 1 / 0)
				}
			}
			class I {
				constructor() {
					this._laps = [], this._startedAt = null, this._time = 0
				}
				get paused() {
					return null === this._startedAt
				}
				get startedAt() {
					return null !== this._startedAt ? this._startedAt : 0
				}
				get time() {
					if (this.paused) return this._time;
					const e = Date.now() - this._startedAt;
					return this._time + e
				}
				start() {
					this.paused && (this._startedAt = Date.now())
				}
				pause() {
					this.paused || (this._time = this.time, this._startedAt = null)
				}
				reset() {
					this._laps = [], this._startedAt = null, this._time = 0
				}
				lap() {
					const {
						_laps: e,
						time: t
					} = this, r = e[e.length - 1], n = {
						time: r ? t - r.cumulativeTime : t,
						cumulativeTime: t
					};
					return e.push(n), n
				}
			}
			class M {
				constructor(e) {
					const t = Array.isArray(e) ? Array.from(e) : [e];
					this._thresholds = t.sort((e, t) => e - t)
				}
				get complete() {
					return 0 === this._thresholds.length
				}
				test(e) {
					const t = [];
					for (; !this.complete;) {
						const r = this._thresholds[0];
						if (e < r) return t;
						this._thresholds.shift(), t.push(r)
					}
					return t
				}
			}
			class j {
				constructor(e) {
					this._stopwatch = new I, this._buffering = !1, this._playing = !1, this._viewable = !1, this._visible = !1, this._audible = e.audible, this._fullscreen = e.fullscreen, this._thresholdObserver = new M(e.duration)
				}
				set audible(e) {
					var t;
					this._audible !== e && (this._audible = e, e && (null === (t = this.subscriber) || void 0 === t || t.call(this, 1 / 0)))
				}
				set fullscreen(e) {
					var t;
					this._fullscreen !== e && (e && (null === (t = this.subscriber) || void 0 === t || t.call(this, 1 / 0)))
				}
				set buffering(e) {
					this._buffering !== e && (this._buffering = e, this._handleStateChange())
				}
				get buffering() {
					return this._buffering
				}
				set playing(e) {
					this._playing !== e && (this._playing = e, this._handleStateChange())
				}
				get playing() {
					return this._playing
				}
				set viewable(e) {
					this._viewable !== e && (this._viewable = e, this._handleStateChange())
				}
				get viewable() {
					return this._viewable
				}
				set visible(e) {
					this._visible !== e && (this._visible = e, this._handleStateChange())
				}
				get visible() {
					return this._visible
				}
				get watching() {
					return !this._stopwatch.paused
				}
				_handleStateChange() {
					this.visible && this.viewable && this.playing ? this._stopwatch.start() : this.buffering ? this._stopwatch.pause() : this._stopwatch.reset()
				}
				test() {
					var e;
					if (!this.watching) return !1;
					const t = this._thresholdObserver.test(this._stopwatch.time);
					return t.length > 0 && (null === (e = this.subscriber) || void 0 === e || e.call(this, t[0])), !!t.length
				}
				onImpression(e) {
					this.subscriber = e
				}
			}

			function F(e, t, r) {
				return {
					...e,
					media: U(t, r),
					playback: N(t, r)
				}
			}

			function N(e, t) {
				var r, n, i, s, o, a;
				const {
					levels: l,
					currentLevel: d,
					audioTracks: c,
					audioTrack: u
				} = null !== (r = e.hlsEngine) && void 0 !== r ? r : {}, {
					currentTime: h = 0,
					duration: p = 0,
					muted: f,
					volume: g = 0
				} = null !== (n = e.state) && void 0 !== n ? n : {}, v = l && void 0 !== d ? null === (i = l[d]) || void 0 === i ? void 0 : i.bitrate : void 0, m = c && void 0 !== u && (null === (s = c[u]) || void 0 === s ? void 0 : s.bitrate) > 0 ? null === (o = c[u]) || void 0 === o ? void 0 : o.bitrate : void 0, {
					height: b,
					width: _
				} = function(e) {
					const t = e.videoElement;
					return {
						height: (null == t ? void 0 : t.clientHeight) || 0,
						width: (null == t ? void 0 : t.clientWidth) || 0
					}
				}(e);
				return {
					id: t.id,
					is_live: t._live,
					is_looped: t.hasLooped,
					state: B(e),
					error: V(e),
					watch_duration_ms: Math.round(t._stopwatch.time),
					heartbeat_duration_ms: null,
					playhead_offset_ms: Math.round(1e3 * (p - h)),
					timestamp_ms: Math.round(1e3 * h),
					start_time_ms: t.startedAt,
					volume: f ? 0 : Math.round(100 * g),
					total_bitrate: (null != v ? v : 0) + (null != m ? m : 0),
					video_bitrate: v,
					audio_bitrate: m,
					player_type: null !== (a = t._playbackPlayerType) && void 0 !== a ? a : null,
					player_width: _,
					player_height: b,
					autoplay_setting: t._firstPlayTrusted ? y.Click : y.Autoplay,
					sequence_number: t._sequenceNumber += 1
				}
			}

			function U(e, t) {
				var r, n, i, s, o, a;
				const {
					levels: l,
					currentLevel: d,
					audioTrack: c,
					streamController: u
				} = null !== (r = e.hlsEngine) && void 0 !== r ? r : {}, {
					duration: h,
					mediaType: p
				} = null !== (n = e.state) && void 0 !== n ? n : {}, {
					height: f,
					width: g
				} = function(e) {
					const t = e.videoElement;
					return {
						height: (null == t ? void 0 : t.videoHeight) || 0,
						width: (null == t ? void 0 : t.videoWidth) || 0
					}
				}(e), m = g >= f ? v.Landscape : v.Portrait, y = e.currentHlsSrc || (null === (i = e.mediaElement) || void 0 === i ? void 0 : i.src), {
					hostname: _,
					pathname: w,
					id: E
				} = function(e) {
					let t, r, n = "";
					try {
						const i = new URL(e);
						t = i.hostname, r = i.pathname, "v.redd.it" === t && (n = r.split("/")[1] || "")
					} catch {}
					return {
						hostname: t,
						pathname: r,
						id: n
					}
				}(y), S = null == u ? void 0 : null === (s = u.fragCurrent) || void 0 === s ? void 0 : s.byteRange;
				let T;
				Array.isArray(S) && 2 === S.length && (T = S[1] - S[0]);
				const k = l && void 0 !== d ? null === (o = l[d]) || void 0 === o ? void 0 : o.codecSet : void 0;
				return {
					duration: Math.round(1e3 * h),
					height: f,
					width: g,
					id: E,
					domain: _,
					orientation: m,
					origin: null !== (a = t._mediaOrigin) && void 0 !== a ? a : null,
					size: T,
					type: p,
					packaging_format: e.isHlsStream ? b.Hls : b.SingleFile,
					byte_range: Array.isArray(S) ? S.toString() : void 0,
					format: k,
					has_audio: void 0 !== c && c > -1,
					file_name: w
				}
			}

			function B(e) {
				var t;
				const {
					waiting: r,
					playing: n,
					paused: i
				} = null !== (t = e.state) && void 0 !== t ? t : {};
				return r ? _.Buffering : n ? _.Playing : i ? _.Paused : _.Buffering
			}

			function V(e) {
				var t;
				const {
					error: r
				} = null !== (t = e.state) && void 0 !== t ? t : {};
				if (!r || !r.message) return;
				const {
					message: n,
					code: i,
					mediaError: s
				} = r;
				let o = `[${i}]: ${n}`;
				return s && (s.code || s.message) && (o = `${o}. MediaError[${s.code}]: ${s.message}`), o
			}

			function $(e) {
				return B(e) === _.Playing
			}

			function G(e) {
				return !e.state.muted && e.state.volume > 0
			}! function(e) {
				e.Landscape = "landscape", e.Portrait = "portrait"
			}(v || (v = {})),
			function(e) {
				e.DirectUpload = "direct_upload", e.ScrapedLink = "scraped_link", e.ImageOptimizer = "image_optimizer"
			}(m || (m = {})),
			function(e) {
				e.Hls = "hls", e.SingleFile = "single_file"
			}(b || (b = {})),
			function(e) {
				e.Autoplay = "autoplay", e.Click = "click"
			}(y || (y = {})),
			function(e) {
				e.Buffering = "buffering", e.Paused = "paused", e.Playing = "playing"
			}(_ || (_ = {})),
			function(e) {
				e.InFeedPlayer = "in_feed_player", e.PostDetailScreen = "post_detail_screen", e.GalleryMode = "gallery_mode", e.VideoFeedV1 = "video_feed_v1", e.LiveFeedV1 = "live_feed_v1", e.TheaterMode = "theater_mode", e.DiscoveryUnit = "discovery_unit"
			}(w || (w = {})),
			function(e) {
				e["2g"] = "2g", e["3g"] = "3g", e["4g"] = "4g", e["slow-2g"] = "slow-2g", e.unknown = "unknown"
			}(E || (E = {})),
			function(e) {
				e.Videoplayer = "videoplayer"
			}(S || (S = {})),
			function(e) {
				e.Background = "background", e.Click = "click", e.End = "end", e.Error = "error", e.Scroll = "scroll", e.Start = "start", e.Switch = "switch", e.View = "view"
			}(T || (T = {})),
			function(e) {
				e.Autoplay = "autoplay", e.Bitrate = "bitrate", e.Download = "download", e.Pause = "pause", e.Play = "play", e.Rebuffer = "rebuffer", e.Video = "video"
			}(k || (k = {})),
			function(e) {
				e.Videoplayer = "videoplayer"
			}(A || (A = {})),
			function(e) {
				e.Click = "click", e.Continue = "continue", e.IsFullyViewable = "is_fully_viewable", e.IsViewable = "is_viewable", e.Pause = "pause", e.PlayExpanded = "play_expanded", e.PlayWithSound = "play_with_sound", e.Start = "start", e.Watch = "watch", e.WatchPercent25 = "watch_25_percent", e.WatchPercent50 = "watch_50_percent", e.WatchPercent75 = "watch_75_percent", e.WatchPercent95 = "watch_95_percent", e.WatchPercent100 = "watch_100_percent", e.WatchSeconds2 = "watch_2_seconds", e.WatchSeconds3 = "watch_3_seconds", e.WatchSeconds5 = "watch_5_seconds", e.WatchSeconds10 = "watch_10_seconds"
			}(x || (x = {})),
			function(e) {
				e.Pause = "pause", e.Play = "play", e.Seek = "seek", e.Mute = "mute", e.Unmute = "unmute", e.Replay = "replay", e.Video = "video"
			}(R || (R = {})),
			function(e) {
				e.Autoplay = "autoplay", e.Manual = "manual"
			}(O || (O = {})),
			function(e) {
				e.Auto = "auto", e.Buffer = "buffer", e.Manual = "manual"
			}(L || (L = {}));
			class H {
				constructor(e, t) {
					var r, n, i, s;
					this._handleHeartbeat = e => {
						this._validateHeartbeat(e) && this._watch()
					}, this._validateHeartbeat = e => e.latency < l, this._mediaOrigin = null == t ? void 0 : null === (r = t.media) || void 0 === r ? void 0 : r.origin, this._playbackPlayerType = null == t ? void 0 : null === (n = t.playback) || void 0 === n ? void 0 : n.playerType, this._player = e, this._pulse = new D({
						interval: a
					}), this._stopwatch = new I, this._firstPlayTrusted = !1, this.id = Object(C.a)(), this._lastContinueReason = L.Auto, this._live = (null === (i = this._player.state) || void 0 === i ? void 0 : i.mediaType) === P.a.LiveVideo, this.hasLooped = !1, this._playedInFullscreen = !1, this._playedWithSound = !1, this.startedAt = 0, this._waiting = !1, this._sequenceNumber = -1, this._pulse.onHeartbeat(this._handleHeartbeat), this._watchPercentThresholdObserver = new M(d), this._watchSecondsThresholdObserver = new M(c);
					const o = G(this._player),
						{
							fullscreen: p = !1
						} = null !== (s = this._player.state) && void 0 !== s ? s : {};
					this._viewableImpressionObserver = new j({
						audible: o,
						duration: u,
						fullscreen: p
					}), this._viewableImpressionObserver.onImpression(() => {
						this._player.dispatchEvent(new Event("viewable-impression", {
							bubbles: !1
						}))
					}), this._fullyViewableImpressionObserver = new j({
						audible: o,
						duration: h,
						fullscreen: p
					}), this._fullyViewableImpressionObserver.onImpression(() => {
						this._player.dispatchEvent(new Event("fully-viewable-impression", {
							bubbles: !1
						}))
					})
				}
				destroy() {
					const e = this._watch();
					return this._pulse.destroy(), delete this._player, [e]
				}
				ended() {
					this.hasLooped = !0
				}
				fullscreen(e) {
					this._viewableImpressionObserver.fullscreen = e, this._fullyViewableImpressionObserver.fullscreen = e, $(this._player) && !this._playedInFullscreen && (this._playedInFullscreen = !0)
				}
				isFullyViewable(e) {
					this._fullyViewableImpressionObserver.viewable = e
				}
				isViewable(e) {
					this._viewableImpressionObserver.viewable = e
				}
				isVisible(e) {
					this._viewableImpressionObserver.visible = e, this._fullyViewableImpressionObserver.visible = e
				}
				looped() {
					this._watch(), this.hasLooped = !0
				}
				pause() {
					this._waiting = !1, this._viewableImpressionObserver.buffering = !1, this._fullyViewableImpressionObserver.buffering = !1, this._pauseSession()
				}
				play(e) {
					var t;
					null !== (t = this._player.state) && void 0 !== t && t.started || (this._firstPlayTrusted = e), this._lastContinueReason = e ? L.Manual : L.Auto
				}
				playing() {
					this._resumeSession(), this._waiting = !1, this._viewableImpressionObserver.buffering = !1, this._fullyViewableImpressionObserver.buffering = !1, this._lastContinueReason = L.Auto
				}
				replay() {
					this._resumeSession()
				}
				seeking() {
					this._pauseSession()
				}
				timeUpdate() {
					this._viewableImpressionObserver.test(), this._fullyViewableImpressionObserver.test()
				}
				volumeChange(e) {
					const t = G(e);
					t && $(e) && !this._playedWithSound && (this._playedWithSound = !0), this._viewableImpressionObserver.audible = t, this._fullyViewableImpressionObserver.audible = t
				}
				waiting() {
					this._waiting || (this._waiting = !0, this._viewableImpressionObserver.buffering = !0, this._fullyViewableImpressionObserver.buffering = !0, this._pauseSession())
				}
				_pauseSession() {
					this._stopwatch.pause(), this._pulse.stop(), this._viewableImpressionObserver.playing = !1, this._fullyViewableImpressionObserver.playing = !1
				}
				_resumeSession() {
					var e;
					this._stopwatch.start(), this.startedAt = this.startedAt || (null !== (e = this._stopwatch.startedAt) && void 0 !== e ? e : 0), this._pulse.start(), this._viewableImpressionObserver.playing = !0, this._fullyViewableImpressionObserver.playing = !0
				}
				_watch() {
					this._player.dispatchEvent(new Event("video-heartbeat", {
						bubbles: !1
					}))
				}
				checkWatchPercentThreshold() {
					var e, t;
					if (null === (e = this._player.state) || void 0 === e || !e.started || this._watchPercentThresholdObserver.complete) return [];
					const {
						currentTime: r,
						duration: n
					} = null !== (t = this._player.state) && void 0 !== t ? t : {}, i = 100 * (n >= r ? r / n : 0);
					return this._watchPercentThresholdObserver.test(i)
				}
				checkWatchSecondsThreshold() {
					if (this._watchSecondsThresholdObserver.complete) return [];
					const e = this._stopwatch.time / 1e3;
					return this._watchSecondsThresholdObserver.test(e)
				}
			}
			const q = Symbol("mixins/with-tracking");
			var z = r("./node_modules/js-cookie/dist/js.cookie.js"),
				K = r.n(z),
				W = r("./node_modules/@reddit/adblock-detection/browser.js");
			const Y = [{
				dpi: 3,
				height: 926,
				width: 428,
				version: "iphone 12 Pro Max",
				yearClass: 2020
			}, {
				dpi: 3,
				height: 896,
				width: 414,
				version: "iphone 11 Pro Max",
				yearClass: 2019
			}, {
				dpi: 3,
				height: 844,
				width: 390,
				version: "iphone 12",
				yearClass: 2020
			}, {
				dpi: 3,
				height: 812,
				width: 375,
				version: "iphone 7",
				yearClass: 2016
			}, {
				dpi: 3,
				height: 736,
				width: 414,
				version: "iphone 8 Plus",
				yearClass: 2017
			}, {
				dpi: 2,
				height: 896,
				width: 414,
				version: "iphone 11",
				yearClass: 2019
			}, {
				dpi: 2,
				height: 667,
				width: 375,
				version: "iphone SE 2nd Gen",
				yearClass: 2020
			}, {
				dpi: 2,
				height: 568,
				width: 320,
				version: "iphone 5S",
				yearClass: 2013
			}, {
				dpi: 2,
				height: 480,
				width: 320,
				version: "iphone 4S",
				yearClass: 2011
			}];

			function X() {
				const e = function(e) {
					if (!window.screen || !window.devicePixelRatio) return;
					const {
						height: t,
						width: r
					} = window.screen, n = window.devicePixelRatio;
					return r && t && n ? e.find(e => n === e.dpi && t === e.height && r === e.width) : void 0
				}(Y);
				if (e) return {
					deviceName: e.version.toLowerCase().replace(" ", "-"),
					yearClass: e.yearClass
				}
			}
			const Q = "high",
				J = new Map([
					[2011, "low"],
					[2012, "moderately_low"],
					[2014, "medium"],
					[2016, "moderately_high"]
				]);

			function Z(e) {
				for (const [t, r] of J)
					if (e <= t) return r;
				return Q
			}
			const ee = {
					screen: {
						view_type: "card"
					}
				},
				te = {
					app: {
						name: "mweb3x"
					}
				},
				re = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = "",
						r = "";
					const n = e.split(".");
					if (n.length >= 3) {
						t = `t2_${n[0].replace(/\b0+/g,"")}`, r = n[2]
					}
					return {
						id: t,
						cookie_created_timestamp: parseInt(r, 10)
					}
				},
				ne = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
					const t = e.split("."),
						r = t[0],
						n = parseInt(t[2], 10);
					return {
						id: r,
						created_timestamp: n
					}
				};
			let ie = null;
			const se = () => {
					const e = K.a.get("session_tracker"),
						{
							domain: t,
							url: r
						} = ae();
					return {
						...ne(e),
						referrer_domain: t,
						referrer_url: r
					}
				},
				oe = () => {
					var e, t;
					const r = K.a.get("loid");
					return {
						...r ? re(r) : "",
						logged_in: null !== (e = null === (t = document.querySelector("shreddit-app")) || void 0 === t ? void 0 : t.hasAttribute("user-logged-in")) && void 0 !== e && e
					}
				},
				ae = () => {
					const e = document.referrer;
					let t = "";
					if (e) {
						t = new URL(document.referrer).hostname
					}
					return {
						url: e,
						domain: t
					}
				},
				le = () => ({
					enabled: Object(W.hasAdblock)(),
					acceptable_ads: Object(W.hasAcceptableAds)()
				}),
				de = e => {
					let t = {};
					try {
						var r, n, i;
						t = JSON.parse(null !== (r = null === (n = document.getElementsByTagName("shreddit-screenview-data")) || void 0 === n ? void 0 : null === (i = n[0]) || void 0 === i ? void 0 : i.getAttribute("data")) && void 0 !== r ? r : "{}")
					} catch (s) {
						throw new Error("Unable to parse screenview data")
					}
					return t[e]
				},
				ce = () => {
					const {
						hostname: e,
						origin: t,
						pathname: r,
						search: n
					} = window.location, i = `${t}${r}`;
					return {
						base_url: n ? `${i}${n}` : i,
						canonical_url: void 0,
						domain: e,
						user_agent: window.navigator.userAgent
					}
				},
				ue = () => {
					var e, t;
					const r = null !== (e = null === (t = X()) || void 0 === t ? void 0 : t.yearClass) && void 0 !== e ? e : null;
					return {
						year_class: r,
						device_tier: r ? Z(r) : void 0
					}
				},
				he = () => ({
					adblock: le(),
					referrer: ae(),
					session: se(),
					user: oe(),
					client_timestamp: Date.now(),
					platform: ue(),
					...ee,
					...te
				}),
				pe = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : de;
					if (null != t && t[e]) return {};
					const n = r(e);
					return n ? {
						[e]: n
					} : {}
				},
				fe = e => (e.request = {
					...ce(),
					...e.request || {}
				}, ie ? (e.request.google_client_id = ie, e) : e);
			var ge = function(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const ve = [{
				"vds-ended": (e, t) => t.ended(),
				"vds-pause": (e, t, r) => {
					const n = we(e.requestEvent);
					return t.pause(), me(t, r, n)
				},
				"vds-fullscreen-change": (e, t, r) => {
					const n = e.detail,
						i = [];
					return $(r._player) && !t._playedInFullscreen && i.push(F({
						source: A.Videoplayer,
						action: x.PlayExpanded,
						noun: R.Video
					}, r._player, t)), t.fullscreen(n), i
				},
				"vds-play": (e, t, r) => {
					var n;
					const i = we(e.requestEvent),
						s = [];
					if (G(r._player) && !t._playedWithSound) {
						t._playedWithSound = !0;
						const e = F({
							source: A.Videoplayer,
							action: x.PlayWithSound,
							noun: R.Video
						}, r._player, t);
						s.push(e)
					}
					if (null !== (n = r._player.state) && void 0 !== n && n.fullscreen && !t._playedInFullscreen) {
						t._playedInFullscreen = !0;
						const e = F({
							source: A.Videoplayer,
							action: x.PlayExpanded,
							noun: R.Video
						}, r._player, t);
						s.push(e)
					}
					return t.play(i), r._userReplayRequest = !1, s
				},
				"vds-can-autoplay": (e, t, r) => r.autoplayEventInView ? [] : [F({
					source: S.Videoplayer,
					action: T.View,
					noun: k.Autoplay
				}, r._player, t)],
				"vds-autoplay": (e, t, r) => !0 === r.autoplayEventInView ? [F({
					source: S.Videoplayer,
					action: T.View,
					noun: k.Autoplay
				}, r._player, t)] : [],
				"vds-can-load": (e, t, r) => {
					var n, i;
					null !== (n = r._player) && void 0 !== n && null !== (i = n.state) && void 0 !== i && i.ended && (r._userReplayRequest = !0)
				},
				"vds-manual-load": (e, t, r) => [F({
					source: S.Videoplayer,
					action: T.Click,
					noun: k.Play
				}, r._player, t)],
				"vds-end": (e, t, r) => {
					var n, i, s;
					if (null !== (n = r._player) && void 0 !== n && n.loop || null !== (i = r._player) && void 0 !== i && null !== (s = i.state) && void 0 !== s && s.loop) return t.looped()
				},
				"vds-error": (e, t, r) => {
					var n;
					return (null == e ? void 0 : null === (n = e.detail) || void 0 === n ? void 0 : n.message) && console.error(`vds-error: [${e.detail.code}] ${e.detail.message}`), [F({
						source: S.Videoplayer,
						action: T.Error,
						noun: k.Video
					}, r._player, t)]
				},
				"vds-hls-level-switched": (e, t, r) => [F({
					source: S.Videoplayer,
					action: T.Switch,
					noun: k.Bitrate
				}, r._player, t)],
				"vds-hls-manifest-loading": (e, t, r) => [F({
					source: S.Videoplayer,
					action: T.Start,
					noun: k.Download
				}, r._player, t)],
				"vds-hls-manifest-loaded": (e, t, r) => [F({
					source: S.Videoplayer,
					action: T.End,
					noun: k.Download
				}, r._player, t)],
				"vds-playing": (e, t, r) => {
					var n;
					const i = "vds-triggeredBySeeked" === (null === (n = e.triggerEvent) || void 0 === n ? void 0 : n.type),
						s = !t._stopwatch.time,
						o = [];
					if (t._waiting) {
						t._lastContinueReason = L.Buffer;
						const e = F({
							source: S.Videoplayer,
							action: T.End,
							noun: k.Rebuffer
						}, r._player, t);
						o.push(e)
					}
					if (s) {
						const e = t._firstPlayTrusted ? O.Manual : O.Autoplay,
							n = F({
								source: S.Videoplayer,
								action: T.Start,
								noun: k.Video,
								action_info: {
									reason: e
								}
							}, r._player, t);
						o.push(n)
					} else if (!i || t._waiting) {
						const e = F({
							source: A.Videoplayer,
							action: x.Continue,
							noun: R.Video,
							action_info: {
								reason: t._lastContinueReason
							}
						}, r._player, t);
						o.push(e)
					}
					return t.playing(), o
				},
				"vds-replay": (e, t, r) => {
					var n, i, s;
					return r._userReplayRequest = !0, (null !== (n = r._player) && void 0 !== n && n.loop || null !== (i = r._player) && void 0 !== i && null !== (s = i.state) && void 0 !== s && s.loop) && t.replay(), [F({
						source: A.Videoplayer,
						action: x.Click,
						noun: R.Replay
					}, r._player, t)]
				},
				"vds-seeking": (e, t) => t.seeking(),
				"vds-seeked": (e, t, r) => {
					const n = [];
					return we(e.requestEvent) && n.push(F({
						source: A.Videoplayer,
						action: x.Click,
						noun: R.Seek
					}, r._player, t)), n
				},
				"vds-time-update": (e, t, r) => {
					const n = [],
						i = t.checkWatchPercentThreshold();
					for (const o of i) n.push(F({
						source: A.Videoplayer,
						action: Se(`WatchPercent${o}`),
						noun: R.Video
					}, r._player, t));
					const s = t.checkWatchSecondsThreshold();
					for (const o of s) n.push(F({
						source: A.Videoplayer,
						action: Se(`WatchSeconds${o}`),
						noun: R.Video
					}, r._player, t));
					return t.timeUpdate(), n
				},
				"vds-volume-change": (e, t, r) => {
					var n;
					const i = we(e.requestEvent),
						s = [],
						o = null === (n = e.requestEvent) || void 0 === n ? void 0 : n.type;
					if ("vds-mute-request" !== o && "vds-unmute-request" !== o || i && s.push(F({
							source: A.Videoplayer,
							action: x.Click,
							noun: "vds-mute-request" === o ? R.Mute : R.Unmute
						}, r._player, t)), G(r._player) && $(r._player) && !t._playedWithSound) {
						const e = F({
							source: A.Videoplayer,
							action: x.PlayWithSound,
							noun: R.Video
						}, r._player, t);
						s.push(e)
					}
					return t.volumeChange(r._player), s.filter(Boolean)
				},
				"vds-waiting": (e, t, r) => {
					var n, i;
					const s = [];
					return t.waiting(), null !== (n = r._player) && void 0 !== n && null !== (i = n.state) && void 0 !== i && i.started && s.push(F({
						source: S.Videoplayer,
						action: T.Start,
						noun: k.Rebuffer
					}, r._player, t), F({
						source: A.Videoplayer,
						action: x.Pause,
						noun: R.Video,
						action_info: {
							reason: L.Buffer
						}
					}, r._player, t)), s
				},
				"viewable-impression": (e, t, r) => {
					return [F({
						source: A.Videoplayer,
						action: x.IsViewable,
						noun: R.Video
					}, r._player, t)]
				},
				"fully-viewable-impression": (e, t, r) => {
					return [F({
						source: A.Videoplayer,
						action: x.IsFullyViewable,
						noun: R.Video
					}, r._player, t)]
				},
				"video-heartbeat": (e, t, r) => {
					return [be(t, r)]
				}
			}];

			function me(e, t, r) {
				e.pause();
				const n = [];
				if (r) {
					const r = F({
						source: S.Videoplayer,
						action: T.Click,
						noun: k.Pause
					}, t._player, e);
					n.push(r)
				} else if (t._isVisible) {
					const r = F({
						source: S.Videoplayer,
						action: T.Scroll,
						noun: k.Pause
					}, t._player, e);
					n.push(r)
				} else {
					const r = F({
						source: S.Videoplayer,
						action: T.Background,
						noun: k.Video
					}, t._player, e);
					n.push(r)
				}
				n.push(be(e, t));
				const i = r ? L.Manual : L.Auto,
					s = F({
						source: A.Videoplayer,
						action: x.Pause,
						noun: R.Video,
						action_info: {
							reason: i
						}
					}, t._player, e);
				return n.push(s), n
			}

			function be(e, t) {
				const r = F({
					source: A.Videoplayer,
					action: x.Watch,
					noun: R.Video
				}, t._player, e);
				return r.playback.heartbeat_duration_ms = e._stopwatch.lap().time, r
			}
			var ye;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Ads = 1] = "Ads"
			}(ye || (ye = {}));
			let _e = class extends(function(e) {
				if (q in e) return e;
				class t extends e {
					constructor() {
						super(...arguments), this.trackEvent = e => {
							const t = Object(p.a)("track-event", {
								details: e
							});
							this.dispatchEvent(t)
						}
					}
				}
				return t[q] = !0, t
			}(s.a)) {
				constructor() {
					super(...arguments), this.set = ye.Default, this._userReplayRequest = !1, this._isVisible = !1, this._pageController = new n.a(this, e => {
						var t;
						let {
							state: r
						} = e;
						const n = "hidden" === r;
						this._isVisible = !n, null === (t = this._mediaSession) || void 0 === t || t.isVisible(!n)
					}), this._connect = Object(i.a)(this, "vds-media-provider-connect", e => {
						if (this._mediaSession) return;
						const {
							element: t,
							onDisconnect: r
						} = e.detail;
						this._player = t, this._createMediaSession();
						let n = ve;
						this.set === ye.Ads && (n = [...ve, ...g]);
						for (const i of n)
							for (const [e, n] of Object.entries(i)) {
								const i = e => this._runListener(e, n);
								t.addEventListener(e, i), r(() => {
									t.removeEventListener(e, i)
								})
							}
						r(() => {
							this._destroy()
						})
					})
				}
				disconnectedCallback() {
					super.disconnectedCallback(), this._destroy()
				}
				_destroy() {
					this._destroyMediaSession(), this._destroyIntersectionObservers(), this._player = void 0
				}
				handleSessionEvent(e) {
					var t, r, n;
					const {
						source: i,
						action: s,
						noun: o,
						media: a,
						playback: l,
						action_info: d
					} = e, c = function(e) {
						let {
							source: t,
							action: r,
							noun: n,
							...i
						} = e, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return {
							...fe(s),
							source: t,
							action: r,
							noun: n,
							uuid: Object(C.a)(),
							...he(),
							...pe("post", s),
							...i
						}
					}({
						source: i,
						action: s,
						noun: o
					}, {
						media: a,
						playback: {
							...l,
							player_type: null !== (t = this.playerType) && void 0 !== t ? t : null
						},
						action_info: d,
						post: {
							id: this.postId,
							nsfw: null !== (r = this.postNsfw) && void 0 !== r && r,
							score: this.postScore,
							spoiler: null !== (n = this.postSpoiler) && void 0 !== n && n,
							subreddit_name: this.subredditName
						},
						subreddit: {
							name: this.subredditName
						}
					});
					this.trackEvent(c)
				}
				_runListener(e, t) {
					const r = t(e, this._mediaSession, this);
					r && this._dispatchEvents(r)
				}
				_dispatchEvents(e) {
					for (const t of e) Ee(t) ? this.handleSessionEvent(t) : this.dispatchEvent(t)
				}
				_createMediaSession() {
					var e;
					if (!this._player || this._mediaSession) return;
					const t = {
						media: {
							origin: this.mediaOrigin
						},
						playback: {
							playerType: this.playbackPlayerType
						}
					};
					this._mediaSession = new H(this._player, t), this._createIntersectionObservers(), null === (e = this._mediaSession) || void 0 === e || e.isVisible("hidden" !== this._pageController.state)
				}
				_destroyMediaSession() {
					var e, t;
					if (this._destroyIntersectionObservers(), this._player && (null === (e = this._player.state) || void 0 === e || !e.paused) && this._mediaSession) {
						const e = me(this._mediaSession, this);
						e && this._dispatchEvents(e)
					}
					null === (t = this._mediaSession) || void 0 === t || t.destroy(), this._mediaSession = void 0
				}
				_createIntersectionObservers() {
					var e, t;
					this._player && (this._viewableIntersectionObserver = new IntersectionObserver(this._handleViewableIntersection.bind(this), {
						threshold: .5
					}), this._fullyViewableIntersectionObserver = new IntersectionObserver(this._handleFullyViewableIntersection.bind(this), {
						threshold: 1
					}), null === (e = this._viewableIntersectionObserver) || void 0 === e || e.observe(this._player), null === (t = this._fullyViewableIntersectionObserver) || void 0 === t || t.observe(this._player))
				}
				_destroyIntersectionObservers() {
					var e, t;
					null === (e = this._viewableIntersectionObserver) || void 0 === e || e.disconnect(), this._viewableIntersectionObserver = void 0, null === (t = this._fullyViewableIntersectionObserver) || void 0 === t || t.disconnect(), this._fullyViewableIntersectionObserver = void 0
				}
				_handleViewableIntersection(e) {
					e.forEach(e => {
						var t;
						e.target === this._player && (null === (t = this._mediaSession) || void 0 === t || t.isViewable(e.isIntersecting))
					})
				}
				_handleFullyViewableIntersection(e) {
					e.forEach(e => {
						var t;
						e.target === this._player && (null === (t = this._mediaSession) || void 0 === t || t.isFullyViewable(e.isIntersecting))
					})
				}
				render() {
					return s.c`<slot></slot>`
				}
			};

			function we(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.isOriginTrusted) && void 0 !== t && t
			}

			function Ee(e) {
				return !!e.source && !!e.noun
			}

			function Se(e) {
				return x[e]
			}
			ge([Object(o.b)({
				type: String,
				attribute: "media-origin"
			})], _e.prototype, "mediaOrigin", void 0), ge([Object(o.b)({
				type: String,
				attribute: "playback-playertype"
			})], _e.prototype, "playbackPlayerType", void 0), ge([Object(o.b)({
				type: Number,
				attribute: "set"
			})], _e.prototype, "set", void 0), ge([Object(o.b)({
				type: String,
				attribute: "player-type"
			})], _e.prototype, "playerType", void 0), ge([Object(o.b)({
				type: String,
				attribute: "post-id"
			})], _e.prototype, "postId", void 0), ge([Object(o.b)({
				type: Boolean,
				attribute: "post-nsfw"
			})], _e.prototype, "postNsfw", void 0), ge([Object(o.b)({
				type: Number,
				attribute: "post-score"
			})], _e.prototype, "postScore", void 0), ge([Object(o.b)({
				type: Boolean,
				attribute: "post-spoiler"
			})], _e.prototype, "postSpoiler", void 0), ge([Object(o.b)({
				type: String,
				attribute: "subreddit-name"
			})], _e.prototype, "subredditName", void 0), ge([Object(o.b)({
				type: Boolean,
				attribute: "autoplay-event-in-view"
			})], _e.prototype, "autoplayEventInView", void 0), _e = ge([Object(o.a)("media-telemetry-observer")], _e)
		},
		"./node_modules/@reddit/shreddit.styles/dist/tailwind-build.css": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/css-loader/dist/runtime/api.js"),
				i = r.n(n)()(!1);
			i.push([e.i, "/*\n * This is a Tailwind CSS file, it must be run through the PostCSS compiler\n * with the Tailwind plugin, not Less. The `postcss-import` plugin is also\n * needed, if you have other additions to your Tailwind entry point CSS.\n *\n * @example\n * // tailwind.css\n * @import '@reddit/faceplate/styles/tailwind-components.css'\n * @tailwind components;\n * @tailwind utilities;\n *\n * // styles.less\n * @import (less) '@reddit/faceplate/faceplate.css';\n * @import (less) './tailwind-build.css';\n */\n.-translate-y-1\\/2, .-translate-x-1\\/2, .translate-x-0, .translate-y-md, .rotate-90, .scale-75, .scale-150, .scale-100, .-scale-x-100, .transform {\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n}\n.ordinal {\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n}\n.shadow-none, .shadow-sm, .shadow-md {\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n}\n.ring {\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n}\n.container {\n    width: 100%;\n}\n.\\!container {\n    width: 100% !important;\n}\n@media (min-width: 1024px) {\n    .container {\n        max-width: 1024px;\n    }\n    .\\!container {\n        max-width: 1024px !important;\n    }\n}\n/* Anchor component*/\n.a {\n    border: var(--line-a-focus) solid transparent;\n    border-radius: 2px;\n    color: var(--color-a-default);\n    font-size: 1em;\n    padding: 0 var(--spacer-a-px);\n    margin: calc(-1 * var(--line-a-focus)) calc(-1 * (var(--spacer-a-px) + var(--line-a-focus)));\n    text-decoration: none;\n  }\n.\\!a {\n    border: var(--line-a-focus) solid transparent !important;\n    border-radius: 2px !important;\n    color: var(--color-a-default) !important;\n    font-size: 1em !important;\n    padding: 0 var(--spacer-a-px) !important;\n    margin: calc(-1 * var(--line-a-focus)) calc(-1 * (var(--spacer-a-px) + var(--line-a-focus))) !important;\n    text-decoration: none !important;\n  }\n.a:hover {\n    color: var(--color-a-hover);\n  }\n.\\!a:hover {\n    color: var(--color-a-hover) !important;\n  }\n.a:visited:not(.no-visited),\n  .a.visited:not(.no-visited) {\n    color: var(--color-a-visited);\n  }\n.\\!a:visited:not(.no-visited),\n  .\\!a.visited:not(.no-visited) {\n    color: var(--color-a-visited) !important;\n  }\n.a:focus {\n    border-color: var(--color-global-focus, transparent);\n    outline: var(--line-a-outline-moz) dotted #212121;\n    outline: var(--line-a-outline-wb) auto -webkit-focus-ring-color;\n  }\n.\\!a:focus {\n    border-color: var(--color-global-focus, transparent) !important;\n    outline: var(--line-a-outline-moz) dotted #212121 !important;\n    outline: var(--line-a-outline-wb) auto -webkit-focus-ring-color !important;\n  }\n.a:focus:not(:focus-visible) {\n    border-color: transparent;\n  }\n.\\!a:focus:not(:focus-visible) {\n    border-color: transparent !important;\n  }\n/* Button component */\n.button {\n    background: var(--button-color-background);\n    border-radius: 999px;\n    border: none;\n    border: var(--button-border-width, 0) solid var(--button-border-color, transparent);\n    box-shadow: var(--button-shadow);\n    box-sizing: border-box;\n    color: var(--button-color-text);\n    cursor: pointer;\n    display: inline-block;\n    font: var(--button-font);\n    height: var(--button-height);\n    line-height: calc(var(--button-height) - (2 * var(--button-border-width, 0px)));\n    outline: none;\n    overflow: hidden;\n    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px));\n    text-align: center;\n    text-decoration: none;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    --button-border-color: var(--button-border-color-default);\n    --button-border-width: var(--button-border-width-default);\n    --button-color-background: var(--button-color-background-default);\n    --button-color-text: var(--button-color-text-default);\n    /* This is :active, AKA Pressed */\n    /* This is Selected */\n  }\n.\\!button {\n    background: var(--button-color-background) !important;\n    border-radius: 999px !important;\n    border: none !important;\n    border: var(--button-border-width, 0) solid var(--button-border-color, transparent) !important;\n    box-shadow: var(--button-shadow) !important;\n    box-sizing: border-box !important;\n    color: var(--button-color-text) !important;\n    cursor: pointer !important;\n    display: inline-block !important;\n    font: var(--button-font) !important;\n    height: var(--button-height) !important;\n    line-height: calc(var(--button-height) - (2 * var(--button-border-width, 0px))) !important;\n    outline: none !important;\n    overflow: hidden !important;\n    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px)) !important;\n    text-align: center !important;\n    text-decoration: none !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    --button-border-color: var(--button-border-color-default) !important;\n    --button-border-width: var(--button-border-width-default) !important;\n    --button-color-background: var(--button-color-background-default) !important;\n    --button-color-text: var(--button-color-text-default) !important;\n    /* This is :active, AKA Pressed */\n    /* This is Selected */\n  }\n.button .button-icon {\n    margin-right: var(--spacer-xs);\n  }\n.\\!button .button-icon {\n    margin-right: var(--spacer-xs) !important;\n  }\n.button .dropdown-icon {\n    transform: rotate(0deg);\n    transition: transform 0.2s ease-in-out;\n  }\n.\\!button .dropdown-icon {\n    transform: rotate(0deg) !important;\n    transition: transform 0.2s ease-in-out !important;\n  }\n.button:focus,\n  .button:hover {\n    --button-color-overlay: var(--color-button-overlay-focus);\n  }\n.\\!button:focus,\n  .\\!button:hover {\n    --button-color-overlay: var(--color-button-overlay-focus) !important;\n  }\n.button:hover {\n    --button-border-color: var(--button-border-color-hover);\n    --button-color-background: var(--button-color-background-hover);\n  }\n.\\!button:hover {\n    --button-border-color: var(--button-border-color-hover) !important;\n    --button-color-background: var(--button-color-background-hover) !important;\n  }\n.button:focus {\n    --button-shadow: var(--elevation-button-focus);\n  }\n.\\!button:focus {\n    --button-shadow: var(--elevation-button-focus) !important;\n  }\n.button:focus:not(:focus-visible) {\n    --button-shadow: 0 0 0 var(--line-l) transparent;\n  }\n.\\!button:focus:not(:focus-visible) {\n    --button-shadow: 0 0 0 var(--line-l) transparent !important;\n  }\n.button:active {\n    --button-color-overlay: var(--color-button-overlay-active);\n    --button-color-background: linear-gradient(var(--color-interactive-pressed), var(--color-interactive-pressed)),\n      var(--button-color-background-active);\n  }\n.\\!button:active {\n    --button-color-overlay: var(--color-button-overlay-active) !important;\n    --button-color-background: linear-gradient(var(--color-interactive-pressed), var(--color-interactive-pressed)),\n      var(--button-color-background-active) !important;\n  }\n.button:focus,\n  .button:hover,\n  .button:active {\n    position: relative;\n  }\n.\\!button:focus,\n  .\\!button:hover,\n  .\\!button:active {\n    position: relative !important;\n  }\n.button:focus::before,\n  .button:hover::before,\n  .button:active::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: block;\n    background: var(--button-color-overlay);\n    border-radius: inherit;\n    pointer-events: none;\n  }\n.\\!button:focus::before,\n  .\\!button:hover::before,\n  .\\!button:active::before {\n    content: '' !important;\n    position: absolute !important;\n    left: 0 !important;\n    right: 0 !important;\n    top: 0 !important;\n    bottom: 0 !important;\n    display: block !important;\n    background: var(--button-color-overlay) !important;\n    border-radius: inherit !important;\n    pointer-events: none !important;\n  }\n.button:disabled {\n    --button-color-background: var(--button-color-background-disabled);\n    --button-color-text: var(--button-color-text-disabled);\n    cursor: not-allowed;\n  }\n.\\!button:disabled {\n    --button-color-background: var(--button-color-background-disabled) !important;\n    --button-color-text: var(--button-color-text-disabled) !important;\n    cursor: not-allowed !important;\n  }\n.button:disabled::before {\n    display: none;\n  }\n.\\!button:disabled::before {\n    display: none !important;\n  }\n.button.button-activated {\n    --button-border-width: var(--button-border-width-activated);\n    --button-color-background: var(--button-color-background-activated);\n    --button-color-text: var(--button-color-text-activated);\n  }\n.\\!button.button-activated {\n    --button-border-width: var(--button-border-width-activated) !important;\n    --button-color-background: var(--button-color-background-activated) !important;\n    --button-color-text: var(--button-color-text-activated) !important;\n  }\n.button.button-activated span.dropdown-icon {\n    transform: rotate(180deg);\n    transition: transform 0.22s ease-in-out;\n  }\n.\\!button.button-activated span.dropdown-icon {\n    transform: rotate(180deg) !important;\n    transition: transform 0.22s ease-in-out !important;\n  }\n.button-shell {\n    background: var(--button-color-background);\n    border-radius: 999px;\n    border: none;\n    border: var(--button-border-width, 0) solid var(--button-border-color, transparent);\n    box-shadow: var(--button-shadow);\n    box-sizing: border-box;\n    color: var(--button-color-text);\n    cursor: pointer;\n    display: inline-block;\n    font: var(--button-font);\n    height: var(--button-height);\n    line-height: calc(var(--button-height) - (2 * var(--button-border-width, 0px)));\n    outline: none;\n    overflow: hidden;\n    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px));\n    text-align: center;\n    text-decoration: none;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    --button-border-color: var(--button-border-color-default);\n    --button-border-width: var(--button-border-width-default);\n    --button-color-background: var(--button-color-background-default);\n    --button-color-text: var(--button-color-text-default);\n  }\n.button-large {\n    --button-height: var(--size-button-lg-h);\n    --button-padding: var(--spacer-xs);\n    --button-font: var(--font-button-lg);\n    --button-border-width-default: var(--line-button-lg-border);\n    --button-border-width-activated: var(--line-button-border-activated);\n  }\n.button-medium {\n    --button-height: var(--size-button-md-h);\n    --button-padding: var(--spacer-xs);\n    --button-font: var(--font-button-md);\n    --button-border-width-default: var(--line-button-md-border);\n    --button-border-width-activated: var(--line-button-border-activated);\n  }\n.button-small {\n    --button-height: var(--size-button-sm-h);\n    --button-padding: var(--spacer-2xs);\n    --button-font: var(--font-button-sm);\n    --button-border-width-default: var(--line-button-sm-border);\n    --button-border-width-activated: var(--line-button-border-activated);\n  }\n.button-x-small {\n    --button-height: var(--size-button-xs-h);\n    --button-padding: var(--spacer-sm);\n    --button-font: var(--font-button-xs);\n    --button-border-width-default: var(--line-button-xs-border);\n    --button-border-width-activated: var(--line-button-border-activated);\n  }\n.button-icon {\n    --button-padding: 0;\n    width: var(--button-height);\n  }\n.button-primary {\n    --button-color-background-default: var(--color-primary-background);\n    --button-color-background-focus: var(--color-primary-background);\n    --button-color-background-hover: var(--color-button-primary-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-button-primary-background-hover), var(--color-button-primary-background-hover));\n    --button-color-background-disabled: var(--color-button-primary-background-disabled);\n    --button-color-background-activated: var(--color-global-white);\n    --button-color-text-default: var(--color-global-white);\n    --button-color-text-disabled: var(--color-button-primary-text-disabled);\n    --button-color-text-activated: var(--color-button-primary-text-activated);\n    --button-border-color-default: transparent;\n  }\n.button-secondary {\n    --button-color-background-default: var(--color-button-secondary-background);\n    --button-color-background-focus: var(--color-button-secondary-background-focus);\n    --button-color-background-hover: var(--color-button-secondary-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-button-secondary-background-hover), var(--color-button-secondary-background-hover));\n    --button-color-background-disabled: var(--color-button-secondary-background-disabled);\n    --button-color-background-activated: var(--color-button-secondary-background-activated);\n    --button-color-text-default: var(--color-button-secondary-text);\n    --button-color-text-disabled: var(--color-button-secondary-text-disabled);\n    --button-color-text-activated: var(--color-button-secondary-text-activated);\n    --button-border-color-default: var(--color-button-secondary-border);\n  }\n.button-tertiary {\n    --button-color-background-default: var(--color-button-tertiary-background);\n    --button-color-background-focus: var(--color-button-tertiary-background-focus);\n    --button-color-background-hover: var(--color-button-tertiary-background-hover);\n    --button-color-background-disabled: var(--color-button-tertiary-background-disabled);\n    --button-color-background-activated: var(--color-button-tertiary-background-activated);\n    --button-color-text-default: var(--color-button-tertiary-text);\n    --button-color-text-disabled: var(--color-button-tertiary-text-disabled);\n    --button-color-text-activated: var(--color-button-tertiary-text-activated);\n    --button-border-color-default: transparent;\n  }\n.button-plain {\n    --button-color-background-default: transparent;\n    --button-color-background-focus: transparent;\n    --button-color-background-hover: var(--color-button-plain-background-hover);\n    --button-color-background-disabled: var(--color-button-plain-background-disabled);\n    --button-color-background-activated: var(--color-button-plain-background-activated);\n    --button-color-background-active: linear-gradient(var(--color-button-secondary-background-hover), var(--color-button-secondary-background-hover));\n    --button-color-text-default: var(--color-button-plain-text);\n    --button-color-text-disabled: var(--color-button-plain-text-disabled);\n    --button-color-text-activated: var(--color-button-plain-text-activated);\n    --button-border-color-default: transparent;\n  }\n.button-outline {\n    --button-color-background-default: transparent;\n    --button-color-background-focus: transparent;\n    --button-color-background-hover: transparent;\n    --button-color-background-active: linear-gradient(transparent, transparent);\n    --button-color-background-disabled: transparent;\n    --button-color-background-activated: transparent;\n    --button-color-text-default: var(--color-neutral-content);\n    --button-color-text-disabled: var(--color-neutral-content-disabled);\n    --button-color-text-activated: var(--color-neutral-content-strong);\n    --button-border-color-default: var(--color-neutral-content-weak);\n    --button-border-color-hover: var(--color-neutral-content-disabled);\n    --button-border-color-active: var(--color-neutral-content);\n    --button-border-color-activated: var(--color-neutral-content-strong);\n    --button-border-color-disabled: var(--color-neutral-content-disabled);\n    --button-border-width-default: var(--line-md);\n    --button-border-width-activated: var(--line-md);\n  }\n.button-destructive {\n    --button-color-background-default: var(--color-danger-background);\n    --button-color-background-focus: var(--color-danger-background-hover);\n    --button-color-background-hover: var(--color-danger-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-danger-background-hover), var(--color-danger-background-hover));\n    --button-color-background-disabled: var(--color-danger-background);\n    --button-color-text-default: var(--color-danger-content-default);\n    --button-color-text-disabled: var(--color-danger-content-default);\n    --button-border-color-default: transparent;\n    --button-border-color-hover: transparent;\n    --button-border-color-active: transparent;\n  }\n.button-media {\n    --button-color-background-default: var(--color-media-background);\n    --button-color-background-focus: var(--color-media-background-hover);\n    --button-color-background-hover: var(--color-media-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-media-background-hover), var(--color-media-background-hover));\n    --button-color-text-default: white;\n    --button-color-text-disabled: var(--color-media-onbackground-disabled);\n    --button-color-background-disabled: var(--color-media-background);\n  }\n.button-brand {\n    --button-color-background-default: var(--color-brand-background);\n    --button-color-background-hover: var(--color-brand-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-brand-background-hover), var(--color-brand-background-hover));\n    --button-color-background-disabled: var(--color-neutral-background-disabled);\n    --button-color-text-default: var(--color-danger-content-default);\n    --button-color-text-disabled: var(--color-neutral-content-disabled);\n    --button-border-color-default: transparent;\n    --button-border-width-default: 0px;\n  }\n.button-success {\n    --button-color-background-default: var(--color-success-background);\n    --button-color-background-focus: var(--color-success-background-hover);\n    --button-color-background-hover: var(--color-success-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-success-background-hover), var(--color-success-background-hover));\n    --button-color-background-disabled: var(--color-button-primary-background-disabled);\n    --button-color-text-default: var(--color-success-onBackground);\n    --button-color-text-disabled: var(--color-button-primary-text-disabled);\n    --button-border-color-default: transparent;\n  }\n.button-plain-inverted {\n    --button-color-background-default: transparent;\n    --button-color-background-focus: var(--color-neutral-content);\n    --button-color-background-hover: var(--color-neutral-content);\n    --button-color-background-active: var(--color-interactive-pressed);\n    --button-color-background-disabled: transparent;\n    --button-color-text-default: var(--color-neutral-background-weak);\n    --button-color-text-disabled: var(--color-neutral-content);\n    --button-border-color-default: transparent;\n  }\n/* Featured avatar */\n.featured-avatar-xs {\n    --featured-avatar-xs-size: var(--rem48);\n    height: var(--featured-avatar-xs-size);\n    width: var(--featured-avatar-xs-size);\n  }\n.featured-avatar-sm {\n    --featured-avatar-sm-size: var(--rem64);\n    height: var(--featured-avatar-sm-size);\n    width: var(--featured-avatar-sm-size);\n  }\n.featured-avatar-md {\n    --featured-avatar-md-size: var(--rem88);\n    height: var(--featured-avatar-md-size);\n    width: var(--featured-avatar-md-size);\n  }\n.featured-avatar-lg {\n    --featured-avatar-lg-size: var(--rem144);\n    height: var(--featured-avatar-lg-size);\n    width: var(--featured-avatar-lg-size);\n  }\n.featured-avatar-xl {\n    --featured-avatar-xl-size: var(--rem192);\n    height: var(--featured-avatar-xl-size);\n    width: var(--featured-avatar-xl-size);\n  }\n.featured-avatar-2xl {\n    --featured-avatar-2xl-size: var(--rem320);\n    height: var(--featured-avatar-2xl-size);\n    width: var(--featured-avatar-2xl-size);\n  }\n.pointer-events-none {\n    pointer-events: none;\n}\n.pointer-events-auto {\n    pointer-events: auto;\n}\n.visible {\n    visibility: visible;\n}\n.\\!visible {\n    visibility: visible !important;\n}\n.invisible {\n    visibility: hidden;\n}\n.static {\n    position: static;\n}\n.fixed {\n    position: fixed;\n}\n.absolute {\n    position: absolute;\n}\n.relative {\n    position: relative;\n}\n.sticky {\n    position: sticky;\n}\n.\\!sticky {\n    position: sticky !important;\n}\n.inset-0 {\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n}\n.top-0 {\n    top: 0px;\n}\n.left-0 {\n    left: 0px;\n}\n.right-0 {\n    right: 0px;\n}\n.top-1\\/2 {\n    top: 50%;\n}\n.bottom-2xl {\n    bottom: 3rem;\n}\n.left-1\\/2 {\n    left: 50%;\n}\n.bottom-0 {\n    bottom: 0px;\n}\n.left-xs {\n    left: 0.5rem;\n}\n.top-2xs {\n    top: 0.25rem;\n}\n.right-2xs {\n    right: 0.25rem;\n}\n.right-xs {\n    right: 0.5rem;\n}\n.right-sm {\n    right: 0.75rem;\n}\n.top-sm {\n    top: 0.75rem;\n}\n.left-md {\n    left: 1rem;\n}\n.top-md {\n    top: 1rem;\n}\n.top-100 {\n    top: 100%;\n}\n.left-lg {\n    left: 1.5rem;\n}\n.top-3xl {\n    top: 4rem;\n}\n.-right-\\[0\\.0625rem\\] {\n    right: -0.0625rem;\n}\n.-right-\\[0\\.0825rem\\] {\n    right: -0.0825rem;\n}\n.-right-\\[0\\.125rem\\] {\n    right: -0.125rem;\n}\n.-right-\\[\\.65rem\\] {\n    right: -.65rem;\n}\n.-right-\\[\\.75rem\\] {\n    right: -.75rem;\n}\n.isolate {\n    isolation: isolate;\n}\n.z-\\[80\\] {\n    z-index: 80;\n}\n.z-0 {\n    z-index: 0;\n}\n.z-10 {\n    z-index: 10;\n}\n.z-20 {\n    z-index: 20;\n}\n.z-50 {\n    z-index: 50;\n}\n.z-\\[2\\] {\n    z-index: 2;\n}\n.z-\\[3\\] {\n    z-index: 3;\n}\n.col-span-full {\n    grid-column: 1 / -1;\n}\n.col-span-6 {\n    grid-column: span 6 / span 6;\n}\n.col-span-1 {\n    grid-column: span 1 / span 1;\n}\n.col-span-4 {\n    grid-column: span 4 / span 4;\n}\n.col-span-2 {\n    grid-column: span 2 / span 2;\n}\n.col-start-2 {\n    grid-column-start: 2;\n}\n.col-start-3 {\n    grid-column-start: 3;\n}\n.col-start-1 {\n    grid-column-start: 1;\n}\n.col-end-1 {\n    grid-column-end: 1;\n}\n.col-end-4 {\n    grid-column-end: 4;\n}\n.col-end-2 {\n    grid-column-end: 2;\n}\n.row-start-1 {\n    grid-row-start: 1;\n}\n.row-end-auto {\n    grid-row-end: auto;\n}\n.float-right {\n    float: right;\n}\n.m-0 {\n    margin: 0px;\n}\n.m-xs {\n    margin: 0.5rem;\n}\n.m-auto {\n    margin: auto;\n}\n.m-sm {\n    margin: 0.75rem;\n}\n.m-md {\n    margin: 1rem;\n}\n.my-0 {\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n}\n.mx-sm {\n    margin-left: 0.75rem;\n    margin-right: 0.75rem;\n}\n.mx-xs {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n}\n.mx-md {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n.my-sm {\n    margin-top: 0.75rem;\n    margin-bottom: 0.75rem;\n}\n.mx-2xs {\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n}\n.-mx-md {\n    margin-left: -1rem;\n    margin-right: -1rem;\n}\n.mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n}\n.my-md {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n.my-xs {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n}\n.mt-\\[2px\\] {\n    margin-top: 2px;\n}\n.ml-2xs {\n    margin-left: 0.25rem;\n}\n.mr-2xs {\n    margin-right: 0.25rem;\n}\n.ml-sm {\n    margin-left: 0.75rem;\n}\n.mt-sm {\n    margin-top: 0.75rem;\n}\n.ml-xs {\n    margin-left: 0.5rem;\n}\n.mr-sm {\n    margin-right: 0.75rem;\n}\n.mt-md {\n    margin-top: 1rem;\n}\n.ml-auto {\n    margin-left: auto;\n}\n.mb-0 {\n    margin-bottom: 0px;\n}\n.mb-md {\n    margin-bottom: 1rem;\n}\n.mt-lg {\n    margin-top: 1.5rem;\n}\n.mb-lg {\n    margin-bottom: 1.5rem;\n}\n.mt-2xs {\n    margin-top: 0.25rem;\n}\n.mt-0 {\n    margin-top: 0px;\n}\n.mt-xs {\n    margin-top: 0.5rem;\n}\n.mr-xs {\n    margin-right: 0.5rem;\n}\n.mb-xs {\n    margin-bottom: 0.5rem;\n}\n.mb-sm {\n    margin-bottom: 0.75rem;\n}\n.mt-xl {\n    margin-top: 2rem;\n}\n.-mt-xl {\n    margin-top: -2rem;\n}\n.mr-0 {\n    margin-right: 0px;\n}\n.mb-2xs {\n    margin-bottom: 0.25rem;\n}\n.ml-md {\n    margin-left: 1rem;\n}\n.mr-md {\n    margin-right: 1rem;\n}\n.-ml-sm {\n    margin-left: -0.75rem;\n}\n.mr-auto {\n    margin-right: auto;\n}\n.ml-0 {\n    margin-left: 0px;\n}\n.-ml-md {\n    margin-left: -1rem;\n}\n.-mt-sm {\n    margin-top: -0.75rem;\n}\n.mb-2xl {\n    margin-bottom: 3rem;\n}\n.ml-px {\n    margin-left: 1px;\n}\n.ml-xl {\n    margin-left: 2rem;\n}\n.-ml-\\[var\\(--rem4\\)\\] {\n    margin-left: calc(var(--rem4) * -1);\n}\n.-ml-\\[var\\(--rem6\\)\\] {\n    margin-left: calc(var(--rem6) * -1);\n}\n.-ml-\\[var\\(--rem8\\)\\] {\n    margin-left: calc(var(--rem8) * -1);\n}\n.-ml-\\[var\\(--rem10\\)\\] {\n    margin-left: calc(var(--rem10) * -1);\n}\n.-ml-\\[var\\(--rem12\\)\\] {\n    margin-left: calc(var(--rem12) * -1);\n}\n.-ml-\\[var\\(--rem14\\)\\] {\n    margin-left: calc(var(--rem14) * -1);\n}\n.-ml-\\[var\\(--rem16\\)\\] {\n    margin-left: calc(var(--rem16) * -1);\n}\n.-ml-\\[var\\(--rem18\\)\\] {\n    margin-left: calc(var(--rem18) * -1);\n}\n.-ml-\\[var\\(--rem20\\)\\] {\n    margin-left: calc(var(--rem20) * -1);\n}\n.mr-\\[length\\:var\\(--rem6\\)\\] {\n    margin-right: var(--rem6);\n}\n.mt-\\[-0\\.125rem\\] {\n    margin-top: -0.125rem;\n}\n.ml-\\[-\\.25rem\\] {\n    margin-left: -.25rem;\n}\n.mt-\\[-0\\.25rem\\] {\n    margin-top: -0.25rem;\n}\n.box-border {\n    box-sizing: border-box;\n}\n.block {\n    display: block;\n}\n.\\!block {\n    display: block !important;\n}\n.inline-block {\n    display: inline-block;\n}\n.inline {\n    display: inline;\n}\n.flex {\n    display: flex;\n}\n.inline-flex {\n    display: inline-flex;\n}\n.table {\n    display: table;\n}\n.\\!table {\n    display: table !important;\n}\n.table-cell {\n    display: table-cell;\n}\n.grid {\n    display: grid;\n}\n.contents {\n    display: contents;\n}\n.list-item {\n    display: list-item;\n}\n.hidden {\n    display: none;\n}\n.\\!hidden {\n    display: none !important;\n}\n.aspect-square {\n    aspect-ratio: 1 / 1;\n}\n.h-full {\n    height: 100%;\n}\n.h-3xl {\n    height: 4rem;\n}\n.h-2xl {\n    height: 3rem;\n}\n.h-2xs {\n    height: 0.25rem;\n}\n.h-lg {\n    height: 1.5rem;\n}\n.h-md {\n    height: 1rem;\n}\n.h-sm {\n    height: 0.75rem;\n}\n.h-xs {\n    height: 0.5rem;\n}\n.h-px {\n    height: 1px;\n}\n.h-auto {\n    height: auto;\n}\n.h-xl {\n    height: 2rem;\n}\n.h-4xl {\n    height: 6rem;\n}\n.h-100 {\n    height: 100%;\n}\n.h-screen {\n    height: 100vh;\n}\n.h-0 {\n    height: 0px;\n}\n.h-\\[1rem\\] {\n    height: 1rem;\n}\n.h-\\[1\\.25rem\\] {\n    height: 1.25rem;\n}\n.h-\\[1\\.5rem\\] {\n    height: 1.5rem;\n}\n.h-\\[2rem\\] {\n    height: 2rem;\n}\n.h-\\[2\\.5rem\\] {\n    height: 2.5rem;\n}\n.h-\\[3rem\\] {\n    height: 3rem;\n}\n.h-\\[2\\.87rem\\] {\n    height: 2.87rem;\n}\n.h-\\[3\\.25rem\\] {\n    height: 3.25rem;\n}\n.h-\\[4\\.5rem\\] {\n    height: 4.5rem;\n}\n.h-\\[3\\.5rem\\] {\n    height: 3.5rem;\n}\n.h-\\[4rem\\] {\n    height: 4rem;\n}\n.h-\\[5\\.5rem\\] {\n    height: 5.5rem;\n}\n.h-\\[\\.25rem\\] {\n    height: .25rem;\n}\n.h-\\[\\.375rem\\] {\n    height: .375rem;\n}\n.h-\\[\\.625rem\\] {\n    height: .625rem;\n}\n.h-\\[length\\:var\\(--size-button-md-h\\)\\] {\n    height: var(--size-button-md-h);\n}\n.max-h-full {\n    max-height: 100%;\n}\n.max-h-\\[240px\\] {\n    max-height: 240px;\n}\n.max-h-\\[253px\\] {\n    max-height: 253px;\n}\n.min-h-\\[20px\\] {\n    min-height: 20px;\n}\n.min-h-screen {\n    min-height: 100vh;\n}\n.min-h-full {\n    min-height: 100%;\n}\n.min-h-\\[1rem\\] {\n    min-height: 1rem;\n}\n.w-100 {\n    width: 100%;\n}\n.w-\\[539px\\] {\n    width: 539px;\n}\n.w-full {\n    width: 100%;\n}\n.w-3xl {\n    width: 4rem;\n}\n.w-lg {\n    width: 1.5rem;\n}\n.w-md {\n    width: 1rem;\n}\n.w-xs {\n    width: 0.5rem;\n}\n.w-5xl {\n    width: 8rem;\n}\n.w-xl {\n    width: 2rem;\n}\n.w-fit {\n    width: fit-content;\n}\n.w-auto {\n    width: auto;\n}\n.w-screen {\n    width: 100vw;\n}\n.w-2xl {\n    width: 3rem;\n}\n.w-px {\n    width: 1px;\n}\n.w-\\[1rem\\] {\n    width: 1rem;\n}\n.w-\\[1\\.25rem\\] {\n    width: 1.25rem;\n}\n.w-\\[1\\.5rem\\] {\n    width: 1.5rem;\n}\n.w-\\[2rem\\] {\n    width: 2rem;\n}\n.w-\\[2\\.5rem\\] {\n    width: 2.5rem;\n}\n.w-\\[3rem\\] {\n    width: 3rem;\n}\n.w-\\[2\\.87rem\\] {\n    width: 2.87rem;\n}\n.w-\\[3\\.25rem\\] {\n    width: 3.25rem;\n}\n.w-\\[4\\.5rem\\] {\n    width: 4.5rem;\n}\n.w-\\[3\\.5rem\\] {\n    width: 3.5rem;\n}\n.w-\\[4rem\\] {\n    width: 4rem;\n}\n.w-\\[5\\.5rem\\] {\n    width: 5.5rem;\n}\n.w-\\[\\.25rem\\] {\n    width: .25rem;\n}\n.w-\\[\\.375rem\\] {\n    width: .375rem;\n}\n.w-\\[\\.625rem\\] {\n    width: .625rem;\n}\n.min-w-\\[500px\\] {\n    min-width: 500px;\n}\n.min-w-\\[20px\\] {\n    min-width: 20px;\n}\n.min-w-0 {\n    min-width: 0px;\n}\n.min-w-full {\n    min-width: 100%;\n}\n.min-w-\\[0\\.5rem\\] {\n    min-width: 0.5rem;\n}\n.max-w-\\[12rem\\] {\n    max-width: 12rem;\n}\n.max-w-full {\n    max-width: 100%;\n}\n.max-w-\\[240px\\] {\n    max-width: 240px;\n}\n.max-w-none {\n    max-width: none;\n}\n.max-w-\\[480px\\] {\n    max-width: 480px;\n}\n.flex-1 {\n    flex: 1 1 0%;\n}\n.flex-auto {\n    flex: 1 1 auto;\n}\n.flex-none {\n    flex: none;\n}\n.flex-shrink-0 {\n    flex-shrink: 0;\n}\n.flex-shrink {\n    flex-shrink: 1;\n}\n.shrink {\n    flex-shrink: 1;\n}\n.shrink-0 {\n    flex-shrink: 0;\n}\n.flex-grow-0 {\n    flex-grow: 0;\n}\n.flex-grow {\n    flex-grow: 1;\n}\n.grow {\n    flex-grow: 1;\n}\n.grow-0 {\n    flex-grow: 0;\n}\n.basis-0 {\n    flex-basis: 0px;\n}\n.basis-2xl {\n    flex-basis: 3rem;\n}\n.basis-full {\n    flex-basis: 100%;\n}\n.border-separate {\n    border-collapse: separate;\n}\n.-translate-y-1\\/2 {\n    --tw-translate-y: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-1\\/2 {\n    --tw-translate-x: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-0 {\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-md {\n    --tw-translate-y: 1rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-90 {\n    --tw-rotate: 90deg;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-75 {\n    --tw-scale-x: .75;\n    --tw-scale-y: .75;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-150 {\n    --tw-scale-x: 1.5;\n    --tw-scale-y: 1.5;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-100 {\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-scale-x-100 {\n    --tw-scale-x: -1;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform-gpu {\n    transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n.animate-spin {\n    animation: spin 1s linear infinite;\n}\n.cursor-pointer {\n    cursor: pointer;\n}\n.cursor-default {\n    cursor: default;\n}\n.cursor-none {\n    cursor: none;\n}\n.select-none {\n    user-select: none;\n}\n.resize-y {\n    resize: vertical;\n}\n.resize {\n    resize: both;\n}\n.list-none {\n    list-style-type: none;\n}\n.columns-1 {\n    columns: 1;\n}\n.grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n}\n.grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.flex-row {\n    flex-direction: row;\n}\n.flex-col {\n    flex-direction: column;\n}\n.flex-wrap {\n    flex-wrap: wrap;\n}\n.flex-nowrap {\n    flex-wrap: nowrap;\n}\n.items-start {\n    align-items: flex-start;\n}\n.items-end {\n    align-items: flex-end;\n}\n.items-center {\n    align-items: center;\n}\n.items-stretch {\n    align-items: stretch;\n}\n.justify-start {\n    justify-content: flex-start;\n}\n.justify-end {\n    justify-content: flex-end;\n}\n.justify-center {\n    justify-content: center;\n}\n.justify-between {\n    justify-content: space-between;\n}\n.justify-around {\n    justify-content: space-around;\n}\n.justify-items-start {\n    justify-items: start;\n}\n.justify-items-center {\n    justify-items: center;\n}\n.gap-xs {\n    gap: 0.5rem;\n}\n.gap-sm {\n    gap: 0.75rem;\n}\n.gap-md {\n    gap: 1rem;\n}\n.gap-2xs {\n    gap: 0.25rem;\n}\n.gap-\\[1rem\\] {\n    gap: 1rem;\n}\n.gap-\\[length\\:var\\(--rem12\\)\\] {\n    gap: var(--rem12);\n}\n.gap-x-md {\n    column-gap: 1rem;\n}\n.self-end {\n    align-self: flex-end;\n}\n.self-center {\n    align-self: center;\n}\n.self-baseline {\n    align-self: baseline;\n}\n.overflow-auto {\n    overflow: auto;\n}\n.overflow-hidden {\n    overflow: hidden;\n}\n.overflow-visible {\n    overflow: visible;\n}\n.overflow-scroll {\n    overflow: scroll;\n}\n.overflow-y-auto {\n    overflow-y: auto;\n}\n.overflow-x-hidden {\n    overflow-x: hidden;\n}\n.overflow-x-scroll {\n    overflow-x: scroll;\n}\n.scroll-smooth {\n    scroll-behavior: smooth;\n}\n.truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.overflow-ellipsis {\n    text-overflow: ellipsis;\n}\n.text-ellipsis {\n    text-overflow: ellipsis;\n}\n.whitespace-normal {\n    white-space: normal;\n}\n.whitespace-nowrap {\n    white-space: nowrap;\n}\n.break-normal {\n    overflow-wrap: normal;\n    word-break: normal;\n}\n.rounded-sm {\n    border-radius: 0.25rem;\n}\n.rounded-full {\n    border-radius: 624.9375rem;\n}\n.rounded-lg {\n    border-radius: 2rem;\n}\n.rounded-none {\n    border-radius: 0rem;\n}\n.rounded-\\[\\.5rem\\] {\n    border-radius: .5rem;\n}\n.rounded-l-sm {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n}\n.rounded-t-lg {\n    border-top-left-radius: 2rem;\n    border-top-right-radius: 2rem;\n}\n.rounded-r-sm {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n}\n.rounded-r-lg {\n    border-top-right-radius: 2rem;\n    border-bottom-right-radius: 2rem;\n}\n.rounded-b-none {\n    border-bottom-right-radius: 0rem;\n    border-bottom-left-radius: 0rem;\n}\n.rounded-br-none {\n    border-bottom-right-radius: 0rem;\n}\n.border {\n    border-width: 0.0625rem;\n}\n.border-sm {\n    border-width: 0.0625rem;\n}\n.border-lg {\n    border-width: 0.25rem;\n}\n.border-0 {\n    border-width: 0rem;\n}\n.border-md {\n    border-width: 0.125rem;\n}\n.border-y-sm {\n    border-top-width: 0.0625rem;\n    border-bottom-width: 0.0625rem;\n}\n.border-x-0 {\n    border-left-width: 0rem;\n    border-right-width: 0rem;\n}\n.border-y-0 {\n    border-top-width: 0rem;\n    border-bottom-width: 0rem;\n}\n.border-r-sm {\n    border-right-width: 0.0625rem;\n}\n.border-t-sm {\n    border-top-width: 0.0625rem;\n}\n.border-b-0 {\n    border-bottom-width: 0rem;\n}\n.border-r-0 {\n    border-right-width: 0rem;\n}\n.border-l-0 {\n    border-left-width: 0rem;\n}\n.border-b-sm {\n    border-bottom-width: 0.0625rem;\n}\n.border-t-0 {\n    border-top-width: 0rem;\n}\n.border-t {\n    border-top-width: 0.0625rem;\n}\n.border-l-sm {\n    border-left-width: 0.0625rem;\n}\n.border-b {\n    border-bottom-width: 0.0625rem;\n}\n.border-r-md {\n    border-right-width: 0.125rem;\n}\n.border-r {\n    border-right-width: 0.0625rem;\n}\n.border-l-lg {\n    border-left-width: 0.25rem;\n}\n.border-solid {\n    border-style: solid;\n}\n.border-none {\n    border-style: none;\n}\n.border-white {\n    --tw-border-opacity: 1;\n    border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.border-global-white {\n    border-color: var(--color-global-white);\n}\n.border-tone-2 {\n    border-color: var(--color-tone-2);\n}\n.border-neutral-content {\n    border-color: var(--color-neutral-content);\n}\n.border-tone-4 {\n    border-color: var(--color-tone-4);\n}\n.border-action-secondary {\n    border-color: var(--color-action-secondary);\n}\n.border-tone-7 {\n    border-color: var(--color-tone-7);\n}\n.border-neutral-border-weak {\n    border-color: var(--color-neutral-border-weak);\n}\n.border-tone-5 {\n    border-color: var(--color-tone-5);\n}\n.border-danger-content {\n    border-color: var(--color-danger-content);\n}\n.border-tone-6 {\n    border-color: var(--color-tone-6);\n}\n.border-tone-3 {\n    border-color: var(--color-tone-3);\n}\n.border-coolgray-350 {\n    --tw-border-opacity: 1;\n    border-color: rgb(184 197 201 / var(--tw-border-opacity));\n}\n.border-transparent {\n    border-color: transparent;\n}\n.border-alert-negative {\n    border-color: var(--color-alert-negative);\n}\n.border-global-orangered {\n    border-color: var(--color-global-orangered);\n}\n.border-neutral-border {\n    border-color: var(--color-neutral-border);\n}\n.border-neutral-border-medium {\n    border-color: var(--color-neutral-border-medium);\n}\n.border-coolgray-100 {\n    --tw-border-opacity: 1;\n    border-color: rgb(242 244 245 / var(--tw-border-opacity));\n}\n.border-action-primary {\n    border-color: var(--color-action-primary);\n}\n.border-alert-caution {\n    border-color: var(--color-alert-caution);\n}\n.border-neutral-background {\n    border-color: var(--color-neutral-background);\n}\n.border-secondary-background-selected {\n    border-color: var(--color-secondary-background-selected);\n}\n.border-action-upvote {\n    border-color: var(--color-action-upvote);\n}\n.border-action-downvote {\n    border-color: var(--color-action-downvote);\n}\n.border-r-neutral-border-weak {\n    border-right-color: var(--color-neutral-border-weak);\n}\n.bg-neutral-background-disabled {\n    background-color: var(--color-neutral-background-disabled);\n}\n.bg-black {\n    --tw-bg-opacity: 1;\n    background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n.bg-white {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-opacity-50 {\n    background-color: var(--color-opacity-50);\n}\n.bg-scrim {\n    background-color: var(--color-scrim);\n}\n.bg-tone-7 {\n    background-color: var(--color-tone-7);\n}\n.bg-transparent {\n    background-color: transparent;\n}\n.bg-tone-6 {\n    background-color: var(--color-tone-6);\n}\n.bg-tone-4 {\n    background-color: var(--color-tone-4);\n}\n.bg-neutral-background {\n    background-color: var(--color-neutral-background);\n}\n.bg-ui-modalbackground {\n    background-color: var(--color-ui-modalbackground);\n}\n.bg-tone-5 {\n    background-color: var(--color-tone-5);\n}\n.bg-neutral-background-weak {\n    background-color: var(--color-neutral-background-weak);\n}\n.bg-tone-1 {\n    background-color: var(--color-tone-1);\n}\n.bg-global-orangered {\n    background-color: var(--color-global-orangered);\n}\n.bg-secondary-background {\n    background-color: var(--color-secondary-background);\n}\n.bg-neutral-background-hover {\n    background-color: var(--color-neutral-background-hover);\n}\n.bg-primary-background {\n    background-color: var(--color-primary-background);\n}\n.bg-global-white {\n    background-color: var(--color-global-white);\n}\n.bg-brand-background {\n    background-color: var(--color-brand-background);\n}\n.bg-global-alienblue {\n    background-color: var(--color-global-alienblue);\n}\n.bg-secondary-weak {\n    background-color: var(--color-secondary-weak);\n}\n.bg-kiwigreen-400 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(85 189 70 / var(--tw-bg-opacity));\n}\n.bg-kiwigreen-600 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(10 96 0 / var(--tw-bg-opacity));\n}\n.bg-yelloworange-400 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 156 26 / var(--tw-bg-opacity));\n}\n.bg-action-primary {\n    background-color: var(--color-action-primary);\n}\n.bg-orangered-300 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 190 166 / var(--tw-bg-opacity));\n}\n.bg-coolgray-200 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(226 231 233 / var(--tw-bg-opacity));\n}\n.bg-online {\n    background-color: var(--color-online);\n}\n.bg-secondary-background-selected {\n    background-color: var(--color-secondary-background-selected);\n}\n.bg-warning-content {\n    background-color: var(--color-warning-content);\n}\n.bg-success-content {\n    background-color: var(--color-success-content);\n}\n.bg-neutral-content {\n    background-color: var(--color-neutral-content);\n}\n.bg-danger-content {\n    background-color: var(--color-danger-content);\n}\n.bg-neutral-content-disabled {\n    background-color: var(--color-neutral-content-disabled);\n}\n.bg-brand-onBackground {\n    background-color: var(--color-brand-onBackground);\n}\n.bg-action-upvote {\n    background-color: var(--color-action-upvote);\n}\n.bg-action-downvote {\n    background-color: var(--color-action-downvote);\n}\n.bg-interactive-background-disabled {\n    background-color: var(--color-interactive-background-disabled);\n}\n.bg-\\[color\\:var\\(--color-button-plain-background-disabled\\)\\] {\n    background-color: var(--color-button-plain-background-disabled);\n}\n.bg-opacity-25 {\n    --tw-bg-opacity: 0.25;\n}\n.bg-opacity-50 {\n    --tw-bg-opacity: 0.5;\n}\n.bg-gradient-to-r {\n    background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.bg-gradient-to-l {\n    background-image: linear-gradient(to left, var(--tw-gradient-stops));\n}\n.bg-gradient-to-t {\n    background-image: linear-gradient(to top, var(--tw-gradient-stops));\n}\n.from-white {\n    --tw-gradient-from: #ffffff;\n    --tw-gradient-to: rgb(255 255 255 / 0);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-transparent {\n    --tw-gradient-from: transparent;\n    --tw-gradient-to: rgb(0 0 0 / 0);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.via-white {\n    --tw-gradient-to: rgb(255 255 255 / 0);\n    --tw-gradient-stops: var(--tw-gradient-from), #ffffff, var(--tw-gradient-to);\n}\n.fill-brand-background {\n    fill: var(--color-brand-background);\n}\n.fill-current {\n    fill: currentColor;\n}\n.stroke-tone-2 {\n    stroke: var(--color-tone-2);\n}\n.object-contain {\n    object-fit: contain;\n}\n.p-\\[32px\\] {\n    padding: 32px;\n}\n.p-md {\n    padding: 1rem;\n}\n.p-px {\n    padding: 1px;\n}\n.p-0 {\n    padding: 0px;\n}\n.p-sm {\n    padding: 0.75rem;\n}\n.p-2xs {\n    padding: 0.25rem;\n}\n.p-xs {\n    padding: 0.5rem;\n}\n.p-lg {\n    padding: 1.5rem;\n}\n.px-\\[length\\:var\\(--rem8\\)\\] {\n    padding-left: var(--rem8);\n    padding-right: var(--rem8);\n}\n.py-\\[32px\\] {\n    padding-top: 32px;\n    padding-bottom: 32px;\n}\n.px-2xs {\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n}\n.py-lg {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n}\n.px-sm {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n}\n.px-md {\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n.py-xs {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n}\n.py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n}\n.py-2xs {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n}\n.px-2xl {\n    padding-left: 3rem;\n    padding-right: 3rem;\n}\n.px-xs {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n}\n.px-lg {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n}\n.py-sm {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n}\n.py-md {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n.px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n.px-\\[length\\:var\\(--rem10\\)\\] {\n    padding-left: var(--rem10);\n    padding-right: var(--rem10);\n}\n.px-\\[length\\:var\\(--rem6\\)\\] {\n    padding-left: var(--rem6);\n    padding-right: var(--rem6);\n}\n.px-\\[length\\:var\\(--rem14\\)\\] {\n    padding-left: var(--rem14);\n    padding-right: var(--rem14);\n}\n.px-\\[length\\:var\\(--rem12\\)\\] {\n    padding-left: var(--rem12);\n    padding-right: var(--rem12);\n}\n.py-\\[length\\:var\\(--rem2\\)\\] {\n    padding-top: var(--rem2);\n    padding-bottom: var(--rem2);\n}\n.py-\\[length\\:var\\(--rem8\\)\\] {\n    padding-top: var(--rem8);\n    padding-bottom: var(--rem8);\n}\n.py-\\[length\\:var\\(--rem10\\)\\] {\n    padding-top: var(--rem10);\n    padding-bottom: var(--rem10);\n}\n.py-\\[length\\:var\\(--rem14\\)\\] {\n    padding-top: var(--rem14);\n    padding-bottom: var(--rem14);\n}\n.pl-sm {\n    padding-left: 0.75rem;\n}\n.pt-0 {\n    padding-top: 0px;\n}\n.pr-0 {\n    padding-right: 0px;\n}\n.pt-px {\n    padding-top: 1px;\n}\n.pt-xs {\n    padding-top: 0.5rem;\n}\n.pl-xs {\n    padding-left: 0.5rem;\n}\n.pr-xs {\n    padding-right: 0.5rem;\n}\n.pt-sm {\n    padding-top: 0.75rem;\n}\n.pb-lg {\n    padding-bottom: 1.5rem;\n}\n.pb-sm {\n    padding-bottom: 0.75rem;\n}\n.pb-xs {\n    padding-bottom: 0.5rem;\n}\n.pl-2xs {\n    padding-left: 0.25rem;\n}\n.pr-sm {\n    padding-right: 0.75rem;\n}\n.pl-lg {\n    padding-left: 1.5rem;\n}\n.pr-lg {\n    padding-right: 1.5rem;\n}\n.pl-md {\n    padding-left: 1rem;\n}\n.pt-md {\n    padding-top: 1rem;\n}\n.pr-2xs {\n    padding-right: 0.25rem;\n}\n.pt-2xs {\n    padding-top: 0.25rem;\n}\n.pr-md {\n    padding-right: 1rem;\n}\n.pb-0 {\n    padding-bottom: 0px;\n}\n.pb-md {\n    padding-bottom: 1rem;\n}\n.pb-xl {\n    padding-bottom: 2rem;\n}\n.pt-xl {\n    padding-top: 2rem;\n}\n.pr-xl {\n    padding-right: 2rem;\n}\n.pb-2xs {\n    padding-bottom: 0.25rem;\n}\n.pr-2xl {\n    padding-right: 3rem;\n}\n.pr-3xl {\n    padding-right: 4rem;\n}\n.pl-0 {\n    padding-left: 0px;\n}\n.pt-lg {\n    padding-top: 1.5rem;\n}\n.pl-\\[length\\:var\\(--rem10\\)\\] {\n    padding-left: var(--rem10);\n}\n.pr-\\[length\\:var\\(--rem14\\)\\] {\n    padding-right: var(--rem14);\n}\n.pr-\\[length\\:var\\(--rem6\\)\\] {\n    padding-right: var(--rem6);\n}\n.pl-\\[length\\:var\\(--rem14\\)\\] {\n    padding-left: var(--rem14);\n}\n.pr-\\[length\\:var\\(--rem10\\)\\] {\n    padding-right: var(--rem10);\n}\n.pl-\\[0\\.125rem\\] {\n    padding-left: 0.125rem;\n}\n.pl-\\[length\\:var\\(--rem12\\)\\] {\n    padding-left: var(--rem12);\n}\n.pr-\\[length\\:var\\(--rem12\\)\\] {\n    padding-right: var(--rem12);\n}\n.pr-\\[length\\:var\\(--rem16\\)\\] {\n    padding-right: var(--rem16);\n}\n.pr-\\[length\\:var\\(--rem8\\)\\] {\n    padding-right: var(--rem8);\n}\n.pl-\\[length\\:var\\(--rem16\\)\\] {\n    padding-left: var(--rem16);\n}\n.text-left {\n    text-align: left;\n}\n.text-center {\n    text-align: center;\n}\n.text-right {\n    text-align: right;\n}\n.indent-0 {\n    text-indent: 0px;\n}\n.align-top {\n    vertical-align: top;\n}\n.align-middle {\n    vertical-align: middle;\n}\n.align-text-bottom {\n    vertical-align: text-bottom;\n}\n.font-mono {\n    font-family: var(--font-mono);\n}\n.font-sans {\n    font-family: var(--font-sans);\n}\n.text-\\[32px\\] {\n    font-size: 32px;\n}\n.text-20 {\n    font-size: 1.25rem;\n    line-height: 1.25rem;\n}\n.text-16 {\n    font-size: 1rem;\n    line-height: 1.25rem;\n}\n.text-32 {\n    font-size: 2rem;\n    line-height: 2.25rem;\n}\n.text-18 {\n    font-size: 1.125rem;\n    line-height: 1.5rem;\n}\n.text-24 {\n    font-size: 1.5rem;\n    line-height: 1.75rem;\n}\n.text-14 {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n}\n.text-12 {\n    font-size: 0.75rem;\n    line-height: 1rem;\n}\n.text-64 {\n    font-size: 4rem;\n    line-height: 4rem;\n}\n.text-10 {\n    font-size: 0.625rem;\n    line-height: 1rem;\n}\n.text-48 {\n    font-size: 3rem;\n    line-height: 3rem;\n}\n.font-bold {\n    font-weight: 700;\n}\n.font-semibold {\n    font-weight: 600;\n}\n.font-normal {\n    font-weight: 400;\n}\n.uppercase {\n    text-transform: uppercase;\n}\n.lowercase {\n    text-transform: lowercase;\n}\n.capitalize {\n    text-transform: capitalize;\n}\n.italic {\n    font-style: italic;\n}\n.not-italic {\n    font-style: normal;\n}\n.ordinal {\n    --tw-ordinal: ordinal;\n    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n}\n.leading-none {\n    line-height: 1;\n}\n.leading-5 {\n    line-height: 1.25rem;\n}\n.leading-3 {\n    line-height: .75rem;\n}\n.leading-4 {\n    line-height: 1rem;\n}\n.leading-8 {\n    line-height: 2rem;\n}\n.leading-6 {\n    line-height: 1.5rem;\n}\n.leading-normal {\n    line-height: 1.5;\n}\n.leading-9 {\n    line-height: 2.25rem;\n}\n.leading-7 {\n    line-height: 1.75rem;\n}\n.leading-\\[0\\.875rem\\] {\n    line-height: 0.875rem;\n}\n.tracking-normal {\n    letter-spacing: 0em;\n}\n.text-neutral-content-weak {\n    color: var(--color-neutral-content-weak);\n}\n.text-neutral-content-strong {\n    color: var(--color-neutral-content-strong);\n}\n.text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-global-white {\n    color: var(--color-global-white);\n}\n.text-tone-3 {\n    color: var(--color-tone-3);\n}\n.text-primary {\n    color: var(--color-primary);\n}\n.text-global-alienblue {\n    color: var(--color-global-alienblue);\n}\n.text-tone-1 {\n    color: var(--color-tone-1);\n}\n.text-action-secondary {\n    color: var(--color-action-secondary);\n}\n.text-primary-background-hover {\n    color: var(--color-primary-background-hover);\n}\n.text-category-nsfw {\n    color: var(--color-category-nsfw);\n}\n.text-tone-2 {\n    color: var(--color-tone-2);\n}\n.text-neutral-content {\n    color: var(--color-neutral-content);\n}\n.text-puregray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(172 172 172 / var(--tw-text-opacity));\n}\n.text-danger-content {\n    color: var(--color-danger-content);\n}\n.text-tone-7 {\n    color: var(--color-tone-7);\n}\n.text-action-primary {\n    color: var(--color-action-primary);\n}\n.text-primary-background {\n    color: var(--color-primary-background);\n}\n.text-identity-moderator {\n    color: var(--color-identity-moderator);\n}\n.text-secondary-weak {\n    color: var(--color-secondary-weak);\n}\n.text-alert-negative {\n    color: var(--color-alert-negative);\n}\n.text-coolgray-850 {\n    --tw-text-opacity: 1;\n    color: rgb(15 26 28 / var(--tw-text-opacity));\n}\n.text-coolgray-650 {\n    --tw-text-opacity: 1;\n    color: rgb(42 60 66 / var(--tw-text-opacity));\n}\n.text-coolgray-550 {\n    --tw-text-opacity: 1;\n    color: rgb(75 96 102 / var(--tw-text-opacity));\n}\n.text-neutral-background-strong {\n    color: var(--color-neutral-background-strong);\n}\n.text-periwinkle-500 {\n    --tw-text-opacity: 1;\n    color: rgb(106 92 255 / var(--tw-text-opacity));\n}\n.text-coolgray-0 {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-coolgray-950 {\n    --tw-text-opacity: 1;\n    color: rgb(4 9 10 / var(--tw-text-opacity));\n}\n.text-action-downvote {\n    color: var(--color-action-downvote);\n}\n.text-global-black {\n    color: var(--color-global-black);\n}\n.text-secondary {\n    color: var(--color-secondary);\n}\n.text-alert-caution {\n    color: var(--color-alert-caution);\n}\n.text-current {\n    color: currentColor;\n}\n.text-category-spoiler {\n    color: var(--color-category-spoiler);\n}\n.text-warning-content {\n    color: var(--color-warning-content);\n}\n.text-primary-onBackground {\n    color: var(--color-primary-onBackground);\n}\n.text-brand-onBackground {\n    color: var(--color-brand-onBackground);\n}\n.text-neutral-content-disabled {\n    color: var(--color-neutral-content-disabled);\n}\n.text-\\[color\\:var\\(--color-button-secondary-text-disabled\\)\\] {\n    color: var(--color-button-secondary-text-disabled);\n}\n.text-\\[color\\:var\\(--color-button-plain-text-disabled\\)\\] {\n    color: var(--color-button-plain-text-disabled);\n}\n.underline {\n    text-decoration-line: underline;\n}\n.line-through {\n    text-decoration-line: line-through;\n}\n.no-underline {\n    text-decoration-line: none;\n}\n.opacity-25 {\n    opacity: 0.25;\n}\n.opacity-75 {\n    opacity: 0.75;\n}\n.opacity-0 {\n    opacity: 0;\n}\n.opacity-100 {\n    opacity: 1;\n}\n.opacity-30 {\n    opacity: 0.3;\n}\n.opacity-50 {\n    opacity: 0.5;\n}\n.opacity-20 {\n    opacity: 0.2;\n}\n.opacity-60 {\n    opacity: 0.6;\n}\n.opacity-40 {\n    opacity: 0.4;\n}\n.shadow-none {\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n    --tw-shadow: var(--elevation-sm);\n    --tw-shadow-colored: var(--elevation-sm);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n    --tw-shadow: var(--elevation-md);\n    --tw-shadow-colored: var(--elevation-md);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline-none {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n}\n.outline {\n    outline-style: solid;\n}\n.ring {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.drop-shadow {\n    --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.grayscale {\n    --tw-grayscale: grayscale(100%);\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.invert {\n    --tw-invert: invert(100%);\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.transition-transform {\n    transition-property: transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.transition-opacity {\n    transition-property: opacity;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.duration-150 {\n    transition-duration: 150ms;\n}\n.duration-300 {\n    transition-duration: 300ms;\n}\n.duration-100 {\n    transition-duration: 100ms;\n}\n.duration-1000 {\n    transition-duration: 1000ms;\n}\n.ease-out {\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.ease-in-out {\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-linear {\n    transition-timing-function: linear;\n}\n.scrollbar-hide {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\n.scrollbar-hide::-webkit-scrollbar {\n    display: none;\n}\n.before\\:absolute::before {\n    content: var(--tw-content);\n    position: absolute;\n}\n.before\\:top-\\[28px\\]::before {\n    content: var(--tw-content);\n    top: 28px;\n}\n.before\\:left-\\[9px\\]::before {\n    content: var(--tw-content);\n    left: 9px;\n}\n.before\\:top-\\[-3px\\]::before {\n    content: var(--tw-content);\n    top: -3px;\n}\n.before\\:left-\\[-16\\.5px\\]::before {\n    content: var(--tw-content);\n    left: -16.5px;\n}\n.before\\:top-0::before {\n    content: var(--tw-content);\n    top: 0px;\n}\n.before\\:left-\\[16\\.5px\\]::before {\n    content: var(--tw-content);\n    left: 16.5px;\n}\n.before\\:h-\\[calc\\(100\\%-28px\\)\\]::before {\n    content: var(--tw-content);\n    height: calc(100% - 28px);\n}\n.before\\:h-full::before {\n    content: var(--tw-content);\n    height: 100%;\n}\n.before\\:h-\\[calc\\(100\\%\\+6px\\)\\]::before {\n    content: var(--tw-content);\n    height: calc(100% + 6px);\n}\n.before\\:border-y-0::before {\n    content: var(--tw-content);\n    border-top-width: 0rem;\n    border-bottom-width: 0rem;\n}\n.before\\:border-l-\\[1px\\]::before {\n    content: var(--tw-content);\n    border-left-width: 1px;\n}\n.before\\:border-r-\\[0px\\]::before {\n    content: var(--tw-content);\n    border-right-width: 0px;\n}\n.before\\:border-solid::before {\n    content: var(--tw-content);\n    border-style: solid;\n}\n.before\\:border-tone-4::before {\n    content: var(--tw-content);\n    border-color: var(--color-tone-4);\n}\n.before\\:content-\\[\\'\\'\\]::before {\n    --tw-content: '';\n    content: var(--tw-content);\n}\n.after\\:absolute::after {\n    content: var(--tw-content);\n    position: absolute;\n}\n.after\\:-top-sm::after {\n    content: var(--tw-content);\n    top: -0.75rem;\n}\n.after\\:left-\\[-16\\.5px\\]::after {\n    content: var(--tw-content);\n    left: -16.5px;\n}\n.after\\:bottom-\\[15px\\]::after {\n    content: var(--tw-content);\n    bottom: 15px;\n}\n.after\\:left-\\[3\\.5px\\]::after {\n    content: var(--tw-content);\n    left: 3.5px;\n}\n.after\\:h-\\[30px\\]::after {\n    content: var(--tw-content);\n    height: 30px;\n}\n.after\\:h-\\[54px\\]::after {\n    content: var(--tw-content);\n    height: 54px;\n}\n.after\\:w-md::after {\n    content: var(--tw-content);\n    width: 1rem;\n}\n.after\\:w-\\[23px\\]::after {\n    content: var(--tw-content);\n    width: 23px;\n}\n.after\\:rounded-bl-\\[12px\\]::after {\n    content: var(--tw-content);\n    border-bottom-left-radius: 12px;\n}\n.after\\:border-y-0::after {\n    content: var(--tw-content);\n    border-top-width: 0rem;\n    border-bottom-width: 0rem;\n}\n.after\\:border-l-\\[1px\\]::after {\n    content: var(--tw-content);\n    border-left-width: 1px;\n}\n.after\\:border-r-\\[0px\\]::after {\n    content: var(--tw-content);\n    border-right-width: 0px;\n}\n.after\\:border-b-\\[1px\\]::after {\n    content: var(--tw-content);\n    border-bottom-width: 1px;\n}\n.after\\:border-solid::after {\n    content: var(--tw-content);\n    border-style: solid;\n}\n.after\\:border-tone-4::after {\n    content: var(--tw-content);\n    border-color: var(--color-tone-4);\n}\n.after\\:content-\\[\\'\\'\\]::after {\n    --tw-content: '';\n    content: var(--tw-content);\n}\n.hover\\:border-secondary-background-selected:hover {\n    border-color: var(--color-secondary-background-selected);\n}\n.hover\\:border-secondary-background-hover:hover {\n    border-color: var(--color-secondary-background-hover);\n}\n.hover\\:bg-neutral-background-hover:hover {\n    background-color: var(--color-neutral-background-hover);\n}\n.hover\\:bg-secondary-background-selected:hover {\n    background-color: var(--color-secondary-background-selected);\n}\n.hover\\:bg-secondary-background-hover:hover {\n    background-color: var(--color-secondary-background-hover);\n}\n.hover\\:bg-transparent-background-hover:hover {\n    background-color: var(--color-transparent-background-hover);\n}\n.hover\\:bg-brand-background-hover:hover {\n    background-color: var(--color-brand-background-hover);\n}\n.hover\\:text-secondary:hover {\n    color: var(--color-secondary);\n}\n.hover\\:text-global-white:hover {\n    color: var(--color-global-white);\n}\n.hover\\:text-action-upvote:hover {\n    color: var(--color-action-upvote);\n}\n.hover\\:text-action-downvote:hover {\n    color: var(--color-action-downvote);\n}\n.hover\\:underline:hover {\n    text-decoration-line: underline;\n}\n.hover\\:no-underline:hover {\n    text-decoration-line: none;\n}\n.focus\\:rounded-sm:focus {\n    border-radius: 0.25rem;\n}\n.focus\\:border-global-focus:focus {\n    border-color: var(--color-global-focus);\n}\n.focus\\:outline-none:focus {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n}\n.focus-visible\\:text-action-upvote:focus-visible {\n    color: var(--color-action-upvote);\n}\n.focus-visible\\:text-action-downvote:focus-visible {\n    color: var(--color-action-downvote);\n}\n.active\\:bg-secondary-background:active {\n    background-color: var(--color-secondary-background);\n}\n.disabled\\:text-interactive-content-disabled:disabled {\n    color: var(--color-interactive-content-disabled);\n}\n", ""]), t.a = i
		},
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");

			function i(e, t, r, i) {
				let s;

				function o() {
					var o;
					s || (s = Object(n.e)(null !== (o = null == i ? void 0 : i.target) && void 0 !== o ? o : e, t, r, i))
				}
				o(), e.addController({
					hostConnected() {
						o()
					},
					hostDisconnected() {
						var e;
						null === (e = s) || void 0 === e || e(), s = void 0
					}
				})
			}
		},
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n, i = r("./node_modules/fscreen/dist/fscreen.esm.js"),
				s = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");
			const o = "undefined" != typeof window && "object" == typeof window.safari && (null === (n = window) || void 0 === n ? void 0 : n.safari.pushNotification);
			class a {
				constructor(e, t) {
					this._host = e, this._callback = t, this._state = this._determinePageState(), this._visibility = document.visibilityState, this._disposal = new s.a, e.addController(this)
				}
				get state() {
					return this._state
				}
				get visibility() {
					return this._visibility
				}
				hostConnected() {
					this._state = this._determinePageState(), this._visibility = document.visibilityState, ["focus", "blur", "visibilitychange", "pageshow", "pagehide"].forEach(e => {
						const t = Object(s.e)(window, e, this._handlePageEvent.bind(this));
						this._disposal.add(t)
					}), o && this._disposal.add(Object(s.e)(window, "beforeunload", e => {
						this._safariBeforeUnloadTimeout = setTimeout(() => {
							e.defaultPrevented || e.returnValue.length > 0 || (this._state = "hidden", this._visibility = "hidden", this._triggerCallback())
						}, 0)
					}))
				}
				hostDisconnected() {
					this._disposal.empty()
				}
				_handlePageEvent(e) {
					o && window.clearTimeout(this._safariBeforeUnloadTimeout);
					const t = this._state,
						r = this._visibility;
					"blur" === e.type && "active" !== this.state || (this._state = this._determinePageState(e), this._visibility = "hidden" == document.visibilityState ? "hidden" : "visible"), this.state === t && this.visibility === r || this._triggerCallback()
				}
				_triggerCallback() {
					this._callback({
						state: this.state,
						visibility: this.visibility
					})
				}
				_determinePageState(e) {
					return i.a.fullscreenElement || "blur" !== (null == e ? void 0 : e.type) && "hidden" !== document.visibilityState ? document.hasFocus() ? "active" : "passive" : "hidden"
				}
			}
		},
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js": function(e, t, r) {
			"use strict";

			function n(e, t, r, n) {
				return e.addEventListener(t, r, n), () => {
					e.removeEventListener(t, r, n)
				}
			}

			function i(e, t) {
				return t.some(t => {
					var r;
					return null !== (r = null == e ? void 0 : e.type.includes(t)) && void 0 !== r && r
				})
			}

			function s(e) {
				return i(e, ["pointer"])
			}

			function o(e) {
				return i(e, ["touch"])
			}

			function a(e) {
				return i(e, ["click", "mouse"])
			}
			r.d(t, "e", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return l
			}));
			class l {
				constructor() {
					var e;
					this._disposal = null !== (e = this._disposal) && void 0 !== e ? e : []
				}
				add() {
					for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
					t && t.forEach(e => {
						this._disposal.push(e)
					})
				}
				empty() {
					this._disposal.forEach(e => e()), this._disposal = []
				}
			}
		},
		"./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Unknown = "unknown", e.Audio = "audio", e.Video = "video", e.LiveVideo = "live-video"
				}(n || (n = {}))
		},
		"./node_modules/css-loader/dist/runtime/api.js": function(e, t, r) {
			"use strict";
			e.exports = function(e) {
				var t = [];
				return t.toString = function() {
					return this.map((function(t) {
						var r = function(e, t) {
							var r = e[1] || "",
								n = e[3];
							if (!n) return r;
							if (t && "function" == typeof btoa) {
								var i = (o = n, a = btoa(unescape(encodeURIComponent(JSON.stringify(o)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a), "/*# ".concat(l, " */")),
									s = n.sources.map((function(e) {
										return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */")
									}));
								return [r].concat(s).concat([i]).join("\n")
							}
							var o, a, l;
							return [r].join("\n")
						}(t, e);
						return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r
					})).join("")
				}, t.i = function(e, r, n) {
					"string" == typeof e && (e = [
						[null, e, ""]
					]);
					var i = {};
					if (n)
						for (var s = 0; s < this.length; s++) {
							var o = this[s][0];
							null != o && (i[o] = !0)
						}
					for (var a = 0; a < e.length; a++) {
						var l = [].concat(e[a]);
						n && i[l[0]] || (r && (l[2] ? l[2] = "".concat(r, " and ").concat(l[2]) : l[2] = r), t.push(l))
					}
				}, t
			}
		},
		"./node_modules/fscreen/dist/fscreen.esm.js": function(e, t, r) {
			"use strict";
			var n = {
					fullscreenEnabled: 0,
					fullscreenElement: 1,
					requestFullscreen: 2,
					exitFullscreen: 3,
					fullscreenchange: 4,
					fullscreenerror: 5,
					fullscreen: 6
				},
				i = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
				s = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
				o = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"],
				a = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
				l = "fullscreenEnabled" in a && Object.keys(n) || i[0] in a && i || s[0] in a && s || o[0] in a && o || [],
				d = {
					requestFullscreen: function(e) {
						return e[l[n.requestFullscreen]]()
					},
					requestFullscreenFunction: function(e) {
						return e[l[n.requestFullscreen]]
					},
					get exitFullscreen() {
						return a[l[n.exitFullscreen]].bind(a)
					},
					get fullscreenPseudoClass() {
						return ":" + l[n.fullscreen]
					},
					addEventListener: function(e, t, r) {
						return a.addEventListener(l[n[e]], t, r)
					},
					removeEventListener: function(e, t, r) {
						return a.removeEventListener(l[n[e]], t, r)
					},
					get fullscreenEnabled() {
						return Boolean(a[l[n.fullscreenEnabled]])
					},
					set fullscreenEnabled(e) {},
					get fullscreenElement() {
						return a[l[n.fullscreenElement]]
					},
					set fullscreenElement(e) {},
					get onfullscreenchange() {
						return a[("on" + l[n.fullscreenchange]).toLowerCase()]
					},
					set onfullscreenchange(e) {
						return a[("on" + l[n.fullscreenchange]).toLowerCase()] = e
					},
					get onfullscreenerror() {
						return a[("on" + l[n.fullscreenerror]).toLowerCase()]
					},
					set onfullscreenerror(e) {
						return a[("on" + l[n.fullscreenerror]).toLowerCase()] = e
					}
				};
			t.a = d
		},
		"./node_modules/hls.js/dist/hls.js": function(e, t, r) {
			var n;
			"undefined" != typeof window && (n = function() {
				return function(e) {
					var t = {};

					function r(n) {
						if (t[n]) return t[n].exports;
						var i = t[n] = {
							i: n,
							l: !1,
							exports: {}
						};
						return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
					}
					return r.m = e, r.c = t, r.d = function(e, t, n) {
						r.o(e, t) || Object.defineProperty(e, t, {
							enumerable: !0,
							get: n
						})
					}, r.r = function(e) {
						"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
							value: "Module"
						}), Object.defineProperty(e, "__esModule", {
							value: !0
						})
					}, r.t = function(e, t) {
						if (1 & t && (e = r(e)), 8 & t) return e;
						if (4 & t && "object" == typeof e && e && e.__esModule) return e;
						var n = Object.create(null);
						if (r.r(n), Object.defineProperty(n, "default", {
								enumerable: !0,
								value: e
							}), 2 & t && "string" != typeof e)
							for (var i in e) r.d(n, i, function(t) {
								return e[t]
							}.bind(null, i));
						return n
					}, r.n = function(e) {
						var t = e && e.__esModule ? function() {
							return e.default
						} : function() {
							return e
						};
						return r.d(t, "a", t), t
					}, r.o = function(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					}, r.p = "/dist/", r(r.s = "./src/hls.js")
				}({
					"./node_modules/eventemitter3/index.js": function(e, t, r) {
						"use strict";
						var n = Object.prototype.hasOwnProperty,
							i = "~";

						function s() {}

						function o(e, t, r) {
							this.fn = e, this.context = t, this.once = r || !1
						}

						function a(e, t, r, n, s) {
							if ("function" != typeof r) throw new TypeError("The listener must be a function");
							var a = new o(r, n || e, s),
								l = i ? i + t : t;
							return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], a] : e._events[l].push(a) : (e._events[l] = a, e._eventsCount++), e
						}

						function l(e, t) {
							0 == --e._eventsCount ? e._events = new s : delete e._events[t]
						}

						function d() {
							this._events = new s, this._eventsCount = 0
						}
						Object.create && (s.prototype = Object.create(null), (new s).__proto__ || (i = !1)), d.prototype.eventNames = function() {
							var e, t, r = [];
							if (0 === this._eventsCount) return r;
							for (t in e = this._events) n.call(e, t) && r.push(i ? t.slice(1) : t);
							return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
						}, d.prototype.listeners = function(e) {
							var t = i ? i + e : e,
								r = this._events[t];
							if (!r) return [];
							if (r.fn) return [r.fn];
							for (var n = 0, s = r.length, o = new Array(s); n < s; n++) o[n] = r[n].fn;
							return o
						}, d.prototype.listenerCount = function(e) {
							var t = i ? i + e : e,
								r = this._events[t];
							return r ? r.fn ? 1 : r.length : 0
						}, d.prototype.emit = function(e, t, r, n, s, o) {
							var a = i ? i + e : e;
							if (!this._events[a]) return !1;
							var l, d, c = this._events[a],
								u = arguments.length;
							if (c.fn) {
								switch (c.once && this.removeListener(e, c.fn, void 0, !0), u) {
									case 1:
										return c.fn.call(c.context), !0;
									case 2:
										return c.fn.call(c.context, t), !0;
									case 3:
										return c.fn.call(c.context, t, r), !0;
									case 4:
										return c.fn.call(c.context, t, r, n), !0;
									case 5:
										return c.fn.call(c.context, t, r, n, s), !0;
									case 6:
										return c.fn.call(c.context, t, r, n, s, o), !0
								}
								for (d = 1, l = new Array(u - 1); d < u; d++) l[d - 1] = arguments[d];
								c.fn.apply(c.context, l)
							} else {
								var h, p = c.length;
								for (d = 0; d < p; d++) switch (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), u) {
									case 1:
										c[d].fn.call(c[d].context);
										break;
									case 2:
										c[d].fn.call(c[d].context, t);
										break;
									case 3:
										c[d].fn.call(c[d].context, t, r);
										break;
									case 4:
										c[d].fn.call(c[d].context, t, r, n);
										break;
									default:
										if (!l)
											for (h = 1, l = new Array(u - 1); h < u; h++) l[h - 1] = arguments[h];
										c[d].fn.apply(c[d].context, l)
								}
							}
							return !0
						}, d.prototype.on = function(e, t, r) {
							return a(this, e, t, r, !1)
						}, d.prototype.once = function(e, t, r) {
							return a(this, e, t, r, !0)
						}, d.prototype.removeListener = function(e, t, r, n) {
							var s = i ? i + e : e;
							if (!this._events[s]) return this;
							if (!t) return l(this, s), this;
							var o = this._events[s];
							if (o.fn) o.fn !== t || n && !o.once || r && o.context !== r || l(this, s);
							else {
								for (var a = 0, d = [], c = o.length; a < c; a++)(o[a].fn !== t || n && !o[a].once || r && o[a].context !== r) && d.push(o[a]);
								d.length ? this._events[s] = 1 === d.length ? d[0] : d : l(this, s)
							}
							return this
						}, d.prototype.removeAllListeners = function(e) {
							var t;
							return e ? (t = i ? i + e : e, this._events[t] && l(this, t)) : (this._events = new s, this._eventsCount = 0), this
						}, d.prototype.off = d.prototype.removeListener, d.prototype.addListener = d.prototype.on, d.prefixed = i, d.EventEmitter = d, e.exports = d
					},
					"./node_modules/node-libs-browser/node_modules/events/events.js": function(e, t) {
						function r() {
							this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
						}

						function n(e) {
							return "function" == typeof e
						}

						function i(e) {
							return "object" == typeof e && null !== e
						}

						function s(e) {
							return void 0 === e
						}
						e.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) {
							if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
							return this._maxListeners = e, this
						}, r.prototype.emit = function(e) {
							var t, r, o, a, l, d;
							if (this._events || (this._events = {}), "error" === e && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
								if ((t = arguments[1]) instanceof Error) throw t;
								var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
								throw c.context = t, c
							}
							if (s(r = this._events[e])) return !1;
							if (n(r)) switch (arguments.length) {
								case 1:
									r.call(this);
									break;
								case 2:
									r.call(this, arguments[1]);
									break;
								case 3:
									r.call(this, arguments[1], arguments[2]);
									break;
								default:
									a = Array.prototype.slice.call(arguments, 1), r.apply(this, a)
							} else if (i(r))
								for (a = Array.prototype.slice.call(arguments, 1), o = (d = r.slice()).length, l = 0; l < o; l++) d[l].apply(this, a);
							return !0
						}, r.prototype.addListener = function(e, t) {
							var o;
							if (!n(t)) throw TypeError("listener must be a function");
							return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, n(t.listener) ? t.listener : t), this._events[e] ? i(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, i(this._events[e]) && !this._events[e].warned && (o = s(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
						}, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
							if (!n(t)) throw TypeError("listener must be a function");
							var r = !1;

							function i() {
								this.removeListener(e, i), r || (r = !0, t.apply(this, arguments))
							}
							return i.listener = t, this.on(e, i), this
						}, r.prototype.removeListener = function(e, t) {
							var r, s, o, a;
							if (!n(t)) throw TypeError("listener must be a function");
							if (!this._events || !this._events[e]) return this;
							if (o = (r = this._events[e]).length, s = -1, r === t || n(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
							else if (i(r)) {
								for (a = o; a-- > 0;)
									if (r[a] === t || r[a].listener && r[a].listener === t) {
										s = a;
										break
									} if (s < 0) return this;
								1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(s, 1), this._events.removeListener && this.emit("removeListener", e, t)
							}
							return this
						}, r.prototype.removeAllListeners = function(e) {
							var t, r;
							if (!this._events) return this;
							if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
							if (0 === arguments.length) {
								for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
								return this.removeAllListeners("removeListener"), this._events = {}, this
							}
							if (n(r = this._events[e])) this.removeListener(e, r);
							else if (r)
								for (; r.length;) this.removeListener(e, r[r.length - 1]);
							return delete this._events[e], this
						}, r.prototype.listeners = function(e) {
							return this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
						}, r.prototype.listenerCount = function(e) {
							if (this._events) {
								var t = this._events[e];
								if (n(t)) return 1;
								if (t) return t.length
							}
							return 0
						}, r.listenerCount = function(e, t) {
							return e.listenerCount(t)
						}
					},
					"./node_modules/url-toolkit/src/url-toolkit.js": function(e, t, r) {
						var n, i, s, o, a;
						n = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, i = /^([^\/?#]*)(.*)$/, s = /(?:\/|^)\.(?=\/)/g, o = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, a = {
							buildAbsoluteURL: function(e, t, r) {
								if (r = r || {}, e = e.trim(), !(t = t.trim())) {
									if (!r.alwaysNormalize) return e;
									var n = a.parseURL(e);
									if (!n) throw new Error("Error trying to parse base URL.");
									return n.path = a.normalizePath(n.path), a.buildURLFromParts(n)
								}
								var s = a.parseURL(t);
								if (!s) throw new Error("Error trying to parse relative URL.");
								if (s.scheme) return r.alwaysNormalize ? (s.path = a.normalizePath(s.path), a.buildURLFromParts(s)) : t;
								var o = a.parseURL(e);
								if (!o) throw new Error("Error trying to parse base URL.");
								if (!o.netLoc && o.path && "/" !== o.path[0]) {
									var l = i.exec(o.path);
									o.netLoc = l[1], o.path = l[2]
								}
								o.netLoc && !o.path && (o.path = "/");
								var d = {
									scheme: o.scheme,
									netLoc: s.netLoc,
									path: null,
									params: s.params,
									query: s.query,
									fragment: s.fragment
								};
								if (!s.netLoc && (d.netLoc = o.netLoc, "/" !== s.path[0]))
									if (s.path) {
										var c = o.path,
											u = c.substring(0, c.lastIndexOf("/") + 1) + s.path;
										d.path = a.normalizePath(u)
									} else d.path = o.path, s.params || (d.params = o.params, s.query || (d.query = o.query));
								return null === d.path && (d.path = r.alwaysNormalize ? a.normalizePath(s.path) : s.path), a.buildURLFromParts(d)
							},
							parseURL: function(e) {
								var t = n.exec(e);
								return t ? {
									scheme: t[1] || "",
									netLoc: t[2] || "",
									path: t[3] || "",
									params: t[4] || "",
									query: t[5] || "",
									fragment: t[6] || ""
								} : null
							},
							normalizePath: function(e) {
								for (e = e.split("").reverse().join("").replace(s, ""); e.length !== (e = e.replace(o, "")).length;);
								return e.split("").reverse().join("")
							},
							buildURLFromParts: function(e) {
								return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
							}
						}, e.exports = a
					},
					"./node_modules/webworkify-webpack/index.js": function(e, t, r) {
						function n(e) {
							var t = {};

							function r(n) {
								if (t[n]) return t[n].exports;
								var i = t[n] = {
									i: n,
									l: !1,
									exports: {}
								};
								return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
							}
							r.m = e, r.c = t, r.i = function(e) {
								return e
							}, r.d = function(e, t, n) {
								r.o(e, t) || Object.defineProperty(e, t, {
									configurable: !1,
									enumerable: !0,
									get: n
								})
							}, r.r = function(e) {
								Object.defineProperty(e, "__esModule", {
									value: !0
								})
							}, r.n = function(e) {
								var t = e && e.__esModule ? function() {
									return e.default
								} : function() {
									return e
								};
								return r.d(t, "a", t), t
							}, r.o = function(e, t) {
								return Object.prototype.hasOwnProperty.call(e, t)
							}, r.p = "/", r.oe = function(e) {
								throw console.error(e), e
							};
							var n = r(r.s = ENTRY_MODULE);
							return n.default || n
						}
						var i = "[\\.|\\-|\\+|\\w|/|@]+",
							s = "\\((/\\*.*?\\*/)?s?.*?(" + i + ").*?\\)";

						function o(e) {
							return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
						}

						function a(e, t, n) {
							var a = {};
							a[n] = [];
							var l = t.toString(),
								d = l.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
							if (!d) return a;
							for (var c, u = d[1], h = new RegExp("(\\\\n|\\W)" + o(u) + s, "g"); c = h.exec(l);) "dll-reference" !== c[3] && a[n].push(c[3]);
							for (h = new RegExp("\\(" + o(u) + '\\("(dll-reference\\s(' + i + '))"\\)\\)' + s, "g"); c = h.exec(l);) e[c[2]] || (a[n].push(c[1]), e[c[2]] = r(c[1]).m), a[c[2]] = a[c[2]] || [], a[c[2]].push(c[4]);
							for (var p, f = Object.keys(a), g = 0; g < f.length; g++)
								for (var v = 0; v < a[f[g]].length; v++) p = a[f[g]][v], isNaN(1 * p) || (a[f[g]][v] = 1 * a[f[g]][v]);
							return a
						}

						function l(e) {
							return Object.keys(e).reduce((function(t, r) {
								return t || e[r].length > 0
							}), !1)
						}
						e.exports = function(e, t) {
							t = t || {};
							var i = {
									main: r.m
								},
								s = t.all ? {
									main: Object.keys(i.main)
								} : function(e, t) {
									for (var r = {
											main: [t]
										}, n = {
											main: []
										}, i = {
											main: {}
										}; l(r);)
										for (var s = Object.keys(r), o = 0; o < s.length; o++) {
											var d = s[o],
												c = r[d].pop();
											if (i[d] = i[d] || {}, !i[d][c] && e[d][c]) {
												i[d][c] = !0, n[d] = n[d] || [], n[d].push(c);
												for (var u = a(e, e[d][c], d), h = Object.keys(u), p = 0; p < h.length; p++) r[h[p]] = r[h[p]] || [], r[h[p]] = r[h[p]].concat(u[h[p]])
											}
										}
									return n
								}(i, e),
								o = "";
							Object.keys(s).filter((function(e) {
								return "main" !== e
							})).forEach((function(e) {
								for (var t = 0; s[e][t];) t++;
								s[e].push(t), i[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", o = o + "var " + e + " = (" + n.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + s[e].map((function(t) {
									return JSON.stringify(t) + ": " + i[e][t].toString()
								})).join(",") + "});\n"
							})), o = o + "new ((" + n.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + s.main.map((function(e) {
								return JSON.stringify(e) + ": " + i.main[e].toString()
							})).join(",") + "}))(self);";
							var d = new window.Blob([o], {
								type: "text/javascript"
							});
							if (t.bare) return d;
							var c = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(d),
								u = new window.Worker(c);
							return u.objectURL = c, u
						}
					},
					"./src/config.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/controller/abr-controller.js"),
							i = r("./src/controller/buffer-controller.js"),
							s = r("./src/controller/cap-level-controller.js"),
							o = r("./src/controller/fps-controller.js"),
							a = r("./src/utils/xhr-loader.js"),
							l = r("./src/controller/audio-track-controller.js"),
							d = r("./src/controller/audio-stream-controller.js"),
							c = r("./src/utils/cues.js"),
							u = r("./src/controller/timeline-controller.js"),
							h = r("./src/controller/subtitle-track-controller.js"),
							p = r("./src/controller/subtitle-stream-controller.js"),
							f = r("./src/controller/eme-controller.js"),
							g = r("./src/utils/mediakeys-helper.js");
						t.hlsDefaultConfig = {
							autoStartLoad: !0,
							startPosition: -1,
							defaultAudioCodec: void 0,
							debug: !1,
							capLevelOnFPSDrop: !1,
							capLevelToPlayerSize: !1,
							initialLiveManifestSize: 1,
							maxBufferLength: 30,
							maxBufferSize: 6e7,
							maxBufferHole: .5,
							lowBufferWatchdogPeriod: .5,
							highBufferWatchdogPeriod: 3,
							nudgeOffset: .1,
							nudgeMaxRetry: 3,
							maxFragLookUpTolerance: .25,
							liveSyncDurationCount: 3,
							liveMaxLatencyDurationCount: 1 / 0,
							liveSyncDuration: void 0,
							liveMaxLatencyDuration: void 0,
							liveDurationInfinity: !1,
							liveBackBufferLength: 1 / 0,
							maxMaxBufferLength: 600,
							enableWorker: !0,
							enableSoftwareAES: !0,
							manifestLoadingTimeOut: 1e4,
							manifestLoadingMaxRetry: 1,
							manifestLoadingRetryDelay: 1e3,
							manifestLoadingMaxRetryTimeout: 64e3,
							startLevel: void 0,
							levelLoadingTimeOut: 1e4,
							levelLoadingMaxRetry: 4,
							levelLoadingRetryDelay: 1e3,
							levelLoadingMaxRetryTimeout: 64e3,
							fragLoadingTimeOut: 2e4,
							fragLoadingMaxRetry: 6,
							fragLoadingRetryDelay: 1e3,
							fragLoadingMaxRetryTimeout: 64e3,
							startFragPrefetch: !1,
							fpsDroppedMonitoringPeriod: 5e3,
							fpsDroppedMonitoringThreshold: .2,
							appendErrorMaxRetry: 3,
							loader: a.default,
							fLoader: void 0,
							pLoader: void 0,
							xhrSetup: void 0,
							licenseXhrSetup: void 0,
							abrController: n.default,
							bufferController: i.default,
							capLevelController: s.default,
							fpsController: o.default,
							stretchShortVideoTrack: !1,
							maxAudioFramesDrift: 1,
							forceKeyFrameOnDiscontinuity: !0,
							abrEwmaFastLive: 3,
							abrEwmaSlowLive: 9,
							abrEwmaFastVoD: 3,
							abrEwmaSlowVoD: 9,
							abrEwmaDefaultEstimate: 5e5,
							abrBandWidthFactor: .95,
							abrBandWidthUpFactor: .7,
							abrMaxWithRealBitrate: !1,
							maxStarvationDelay: 4,
							maxLoadingDelay: 4,
							minAutoBitrate: 0,
							emeEnabled: !1,
							widevineLicenseUrl: void 0,
							requestMediaKeySystemAccessFunc: g.requestMediaKeySystemAccess
						}, t.hlsDefaultConfig.subtitleStreamController = p.SubtitleStreamController, t.hlsDefaultConfig.subtitleTrackController = h.default, t.hlsDefaultConfig.timelineController = u.default, t.hlsDefaultConfig.cueHandler = c, t.hlsDefaultConfig.enableCEA708Captions = !0, t.hlsDefaultConfig.enableWebVTT = !0, t.hlsDefaultConfig.captionsTextTrack1Label = "English", t.hlsDefaultConfig.captionsTextTrack1LanguageCode = "en", t.hlsDefaultConfig.captionsTextTrack2Label = "Spanish", t.hlsDefaultConfig.captionsTextTrack2LanguageCode = "es", t.hlsDefaultConfig.audioStreamController = d.default, t.hlsDefaultConfig.audioTrackController = l.default, t.hlsDefaultConfig.emeController = f.default
					},
					"./src/controller/abr-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var s = r("./src/events.js"),
								o = r("./src/event-handler.js"),
								a = r("./src/utils/buffer-helper.js"),
								l = r("./src/errors.js"),
								d = r("./src/utils/logger.js"),
								c = r("./src/utils/ewma-bandwidth-estimator.js"),
								u = window.performance,
								h = function(t) {
									function r(e) {
										var r = t.call(this, e, s.default.FRAG_LOADING, s.default.FRAG_LOADED, s.default.FRAG_BUFFERED, s.default.ERROR) || this;
										return r.lastLoadedFragLevel = 0, r._nextAutoLevel = -1, r.hls = e, r.timer = null, r._bwEstimator = null, r.onCheck = r._abandonRulesCheck.bind(r), r
									}
									return i(r, t), r.prototype.destroy = function() {
										this.clearTimer(), o.default.prototype.destroy.call(this)
									}, r.prototype.onFragLoading = function(e) {
										var t = e.frag;
										if ("main" === t.type && (this.timer || (this.fragCurrent = t, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) {
											var r = this.hls,
												n = r.config,
												i = t.level,
												s = void 0,
												o = void 0;
											r.levels[i].details.live ? (s = n.abrEwmaFastLive, o = n.abrEwmaSlowLive) : (s = n.abrEwmaFastVoD, o = n.abrEwmaSlowVoD), this._bwEstimator = new c.default(r, o, s, n.abrEwmaDefaultEstimate)
										}
									}, r.prototype._abandonRulesCheck = function() {
										var e = this.hls,
											t = e.media,
											r = this.fragCurrent;
										if (r) {
											var n = r.loader,
												i = e.minAutoLevel;
											if (!n || n.stats && n.stats.aborted) return d.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
											var o = n.stats;
											if (t && o && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {
												var l = u.now() - o.trequest,
													c = Math.abs(t.playbackRate);
												if (l > 500 * r.duration / c) {
													var h = e.levels,
														p = Math.max(1, o.bw ? o.bw / 8 : 1e3 * o.loaded / l),
														f = h[r.level],
														g = f.realBitrate ? Math.max(f.realBitrate, f.bitrate) : f.bitrate,
														v = o.total ? o.total : Math.max(o.loaded, Math.round(r.duration * g / 8)),
														m = t.currentTime,
														b = (v - o.loaded) / p,
														y = (a.BufferHelper.bufferInfo(t, m, e.config.maxBufferHole).end - m) / c;
													if (y < 2 * r.duration / c && b > y) {
														var _ = void 0,
															w = void 0;
														for (w = r.level - 1; w > i; w--) {
															var E = h[w].realBitrate ? Math.max(h[w].realBitrate, h[w].bitrate) : h[w].bitrate;
															if ((_ = r.duration * E / (6.4 * p)) < y) break
														}
														_ < b && (d.logger.warn("loading too slow, abort fragment loading and switch to level " + w + ":fragLoadedDelay[" + w + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + _.toFixed(1) + "<" + b.toFixed(1) + ":" + y.toFixed(1)), e.nextLoadLevel = w, this._bwEstimator.sample(l, o.loaded), n.abort(), this.clearTimer(), e.trigger(s.default.FRAG_LOAD_EMERGENCY_ABORTED, {
															frag: r,
															stats: o
														}))
													}
												}
											}
										}
									}, r.prototype.onFragLoaded = function(t) {
										var r = t.frag;
										if ("main" === r.type && e.isFinite(r.sn)) {
											if (this.clearTimer(), this.lastLoadedFragLevel = r.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
												var n = this.hls.levels[r.level],
													i = (n.loaded ? n.loaded.bytes : 0) + t.stats.loaded,
													s = (n.loaded ? n.loaded.duration : 0) + t.frag.duration;
												n.loaded = {
													bytes: i,
													duration: s
												}, n.realBitrate = Math.round(8 * i / s)
											}
											if (t.frag.bitrateTest) {
												var o = t.stats;
												o.tparsed = o.tbuffered = o.tload, this.onFragBuffered(t)
											}
										}
									}, r.prototype.onFragBuffered = function(t) {
										var r = t.stats,
											n = t.frag;
										if (!0 !== r.aborted && "main" === n.type && e.isFinite(n.sn) && (!n.bitrateTest || r.tload === r.tbuffered)) {
											var i = r.tparsed - r.trequest;
											d.logger.log("latency/loading/parsing/append/kbps:" + Math.round(r.tfirst - r.trequest) + "/" + Math.round(r.tload - r.tfirst) + "/" + Math.round(r.tparsed - r.tload) + "/" + Math.round(r.tbuffered - r.tparsed) + "/" + Math.round(8 * r.loaded / (r.tbuffered - r.trequest))), this._bwEstimator.sample(i, r.loaded), r.bwEstimate = this._bwEstimator.getEstimate(), n.bitrateTest ? this.bitrateTestDelay = i / 1e3 : this.bitrateTestDelay = 0
										}
									}, r.prototype.onError = function(e) {
										switch (e.details) {
											case l.ErrorDetails.FRAG_LOAD_ERROR:
											case l.ErrorDetails.FRAG_LOAD_TIMEOUT:
												this.clearTimer()
										}
									}, r.prototype.clearTimer = function() {
										clearInterval(this.timer), this.timer = null
									}, Object.defineProperty(r.prototype, "nextAutoLevel", {
										get: function() {
											var e = this._nextAutoLevel,
												t = this._bwEstimator;
											if (!(-1 === e || t && t.canEstimate())) return e;
											var r = this._nextABRAutoLevel;
											return -1 !== e && (r = Math.min(e, r)), r
										},
										set: function(e) {
											this._nextAutoLevel = e
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(r.prototype, "_nextABRAutoLevel", {
										get: function() {
											var e = this.hls,
												t = e.maxAutoLevel,
												r = e.levels,
												n = e.config,
												i = e.minAutoLevel,
												s = e.media,
												o = this.lastLoadedFragLevel,
												l = this.fragCurrent ? this.fragCurrent.duration : 0,
												c = s ? s.currentTime : 0,
												u = s && 0 !== s.playbackRate ? Math.abs(s.playbackRate) : 1,
												h = this._bwEstimator ? this._bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
												p = (a.BufferHelper.bufferInfo(s, c, n.maxBufferHole).end - c) / u,
												f = this._findBestLevel(o, l, h, i, t, p, n.abrBandWidthFactor, n.abrBandWidthUpFactor, r);
											if (f >= 0) return f;
											d.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
											var g = l ? Math.min(l, n.maxStarvationDelay) : n.maxStarvationDelay,
												v = n.abrBandWidthFactor,
												m = n.abrBandWidthUpFactor;
											if (0 === p) {
												var b = this.bitrateTestDelay;
												b && (g = (l ? Math.min(l, n.maxLoadingDelay) : n.maxLoadingDelay) - b, d.logger.trace("bitrate test took " + Math.round(1e3 * b) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"), v = m = 1)
											}
											return f = this._findBestLevel(o, l, h, i, t, p + g, v, m, r), Math.max(f, 0)
										},
										enumerable: !0,
										configurable: !0
									}), r.prototype._findBestLevel = function(e, t, r, n, i, s, o, a, l) {
										for (var c = i; c >= n; c--) {
											var u = l[c];
											if (u) {
												var h = u.details,
													p = h ? h.totalduration / h.fragments.length : t,
													f = !!h && h.live,
													g = void 0;
												g = c <= e ? o * r : a * r;
												var v = l[c].realBitrate ? Math.max(l[c].realBitrate, l[c].bitrate) : l[c].bitrate,
													m = v * p / g;
												if (d.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + c + "/" + Math.round(g) + "/" + v + "/" + p + "/" + s + "/" + m), g > v && (!m || f && !this.bitrateTestDelay || m < s)) return c
											}
										}
										return -1
									}, r
								}(o.default);
							t.default = h
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/audio-stream-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var s = r("./src/utils/binary-search.js"),
								o = r("./src/utils/buffer-helper.js"),
								a = r("./src/demux/demuxer.js"),
								l = r("./src/events.js"),
								d = r("./src/controller/level-helper.js"),
								c = r("./src/utils/time-ranges.js"),
								u = r("./src/errors.js"),
								h = r("./src/utils/logger.js"),
								p = r("./src/utils/discontinuities.js"),
								f = r("./src/controller/fragment-tracker.js"),
								g = r("./src/loader/fragment.js"),
								v = r("./src/controller/base-stream-controller.js"),
								m = window.performance,
								b = function(t) {
									function r(e, r) {
										var n = t.call(this, e, l.default.MEDIA_ATTACHED, l.default.MEDIA_DETACHING, l.default.AUDIO_TRACKS_UPDATED, l.default.AUDIO_TRACK_SWITCHING, l.default.AUDIO_TRACK_LOADED, l.default.KEY_LOADED, l.default.FRAG_LOADED, l.default.FRAG_PARSING_INIT_SEGMENT, l.default.FRAG_PARSING_DATA, l.default.FRAG_PARSED, l.default.ERROR, l.default.BUFFER_RESET, l.default.BUFFER_CREATED, l.default.BUFFER_APPENDED, l.default.BUFFER_FLUSHED, l.default.INIT_PTS_FOUND) || this;
										return n.fragmentTracker = r, n.config = e.config, n.audioCodecSwap = !1, n._state = v.State.STOPPED, n.initPTS = [], n.waitingFragment = null, n.videoTrackCC = null, n
									}
									return i(r, t), r.prototype.onInitPtsFound = function(e) {
										var t = e.id,
											r = e.frag.cc,
											n = e.initPTS;
										"main" === t && (this.initPTS[r] = n, this.videoTrackCC = r, h.logger.log("InitPTS for cc: " + r + " found from video track: " + n), this.state === v.State.WAITING_INIT_PTS && this.tick())
									}, r.prototype.startLoad = function(e) {
										if (this.tracks) {
											var t = this.lastCurrentTime;
											this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, t > 0 && -1 === e ? (h.logger.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = v.State.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e, this.state = v.State.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
										} else this.startPosition = e, this.state = v.State.STOPPED
									}, Object.defineProperty(r.prototype, "state", {
										get: function() {
											return this._state
										},
										set: function(e) {
											if (this.state !== e) {
												var t = this.state;
												this._state = e, h.logger.log("audio stream:" + t + "->" + e)
											}
										},
										enumerable: !0,
										configurable: !0
									}), r.prototype.doTick = function() {
										var t, r, n, i = this.hls,
											a = i.config;
										switch (this.state) {
											case v.State.ERROR:
											case v.State.PAUSED:
											case v.State.BUFFER_FLUSHING:
												break;
											case v.State.STARTING:
												this.state = v.State.WAITING_TRACK, this.loadedmetadata = !1;
												break;
											case v.State.IDLE:
												var d = this.tracks;
												if (!d) break;
												if (!this.media && (this.startFragRequested || !a.startFragPrefetch)) break;
												if (this.loadedmetadata) t = this.media.currentTime;
												else if (void 0 === (t = this.nextLoadPosition)) break;
												var c = this.mediaBuffer ? this.mediaBuffer : this.media,
													u = this.videoBuffer ? this.videoBuffer : this.media,
													g = o.BufferHelper.bufferInfo(c, t, a.maxBufferHole),
													b = o.BufferHelper.bufferInfo(u, t, a.maxBufferHole),
													y = g.len,
													_ = g.end,
													w = this.fragPrevious,
													E = Math.min(a.maxBufferLength, a.maxMaxBufferLength),
													S = Math.max(E, b.len),
													T = this.audioSwitch,
													k = this.trackId;
												if ((y < S || T) && k < d.length) {
													if (void 0 === (n = d[k].details)) {
														this.state = v.State.WAITING_TRACK;
														break
													}
													if (!T && this._streamEnded(g, n)) return this.hls.trigger(l.default.BUFFER_EOS, {
														type: "audio"
													}), void(this.state = v.State.ENDED);
													var A = n.fragments,
														x = A.length,
														R = A[0].start,
														O = A[x - 1].start + A[x - 1].duration,
														L = void 0;
													if (T)
														if (n.live && !n.PTSKnown) h.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"), _ = 0;
														else if (_ = t, n.PTSKnown && t < R) {
														if (!(g.end > R || g.nextStart)) return;
														h.logger.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = R + .05
													}
													if (n.initSegment && !n.initSegment.data) L = n.initSegment;
													else if (_ <= R) {
														if (L = A[0], null !== this.videoTrackCC && L.cc !== this.videoTrackCC && (L = p.findFragWithCC(A, this.videoTrackCC)), n.live && L.loadIdx && L.loadIdx === this.fragLoadIdx) {
															var C = g.nextStart ? g.nextStart : R;
															return h.logger.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (C + .05)), void(this.media.currentTime = C + .05)
														}
													} else {
														var P = void 0,
															D = a.maxFragLookUpTolerance,
															I = w ? A[w.sn - A[0].sn + 1] : void 0,
															M = function(e) {
																var t = Math.min(D, e.duration);
																return e.start + e.duration - t <= _ ? 1 : e.start - t > _ && e.start ? -1 : 0
															};
														_ < O ? (_ > O - D && (D = 0), P = I && !M(I) ? I : s.default.search(A, M)) : P = A[x - 1], P && (L = P, R = P.start, w && L.level === w.level && L.sn === w.sn && (L.sn < n.endSN ? (L = A[L.sn + 1 - n.startSN], h.logger.log("SN just loaded, load next one: " + L.sn)) : L = null))
													}
													L && (L.encrypted ? (h.logger.log("Loading key for " + L.sn + " of [" + n.startSN + " ," + n.endSN + "],track " + k), this.state = v.State.KEY_LOADING, i.trigger(l.default.KEY_LOADING, {
														frag: L
													})) : (h.logger.log("Loading " + L.sn + ", cc: " + L.cc + " of [" + n.startSN + " ," + n.endSN + "],track " + k + ", currentTime:" + t + ",bufferEnd:" + _.toFixed(3)), this.fragCurrent = L, (T || this.fragmentTracker.getState(L) === f.FragmentState.NOT_LOADED) && (this.startFragRequested = !0, e.isFinite(L.sn) && (this.nextLoadPosition = L.start + L.duration), i.trigger(l.default.FRAG_LOADING, {
														frag: L
													}), this.state = v.State.FRAG_LOADING)))
												}
												break;
											case v.State.WAITING_TRACK:
												(r = this.tracks[this.trackId]) && r.details && (this.state = v.State.IDLE);
												break;
											case v.State.FRAG_LOADING_WAITING_RETRY:
												var j = m.now(),
													F = this.retryDate,
													N = (c = this.media) && c.seeking;
												(!F || j >= F || N) && (h.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = v.State.IDLE);
												break;
											case v.State.WAITING_INIT_PTS:
												var U = this.videoTrackCC;
												if (void 0 === this.initPTS[U]) break;
												var B = this.waitingFragment;
												if (B) {
													var V = B.frag.cc;
													U !== V ? (r = this.tracks[this.trackId]).details && r.details.live && (h.logger.warn("Waiting fragment CC (" + V + ") does not match video track CC (" + U + ")"), this.waitingFragment = null, this.state = v.State.IDLE) : (this.state = v.State.FRAG_LOADING, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
												} else this.state = v.State.IDLE;
												break;
											case v.State.STOPPED:
											case v.State.FRAG_LOADING:
											case v.State.PARSING:
											case v.State.PARSED:
											case v.State.ENDED:
										}
									}, r.prototype.onMediaAttached = function(e) {
										var t = this.media = this.mediaBuffer = e.media;
										this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("ended", this.onvended);
										var r = this.config;
										this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
									}, r.prototype.onMediaDetaching = function() {
										var e = this.media;
										e && e.ended && (h.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.stopLoad()
									}, r.prototype.onAudioTracksUpdated = function(e) {
										h.logger.log("audio tracks updated"), this.tracks = e.audioTracks
									}, r.prototype.onAudioTrackSwitching = function(e) {
										var t = !!e.url;
										this.trackId = e.id, this.fragCurrent = null, this.state = v.State.PAUSED, this.waitingFragment = null, t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), t && (this.audioSwitch = !0, this.state = v.State.IDLE), this.tick()
									}, r.prototype.onAudioTrackLoaded = function(t) {
										var r = t.details,
											n = t.id,
											i = this.tracks[n],
											s = r.totalduration,
											o = 0;
										if (h.logger.log("track " + n + " loaded [" + r.startSN + "," + r.endSN + "],duration:" + s), r.live) {
											var a = i.details;
											a && r.fragments.length > 0 ? (d.mergeDetails(a, r), o = r.fragments[0].start, r.PTSKnown ? h.logger.log("live audio playlist sliding:" + o.toFixed(3)) : h.logger.log("live audio playlist - outdated PTS, unknown sliding")) : (r.PTSKnown = !1, h.logger.log("live audio playlist - first load, unknown sliding"))
										} else r.PTSKnown = !1;
										if (i.details = r, !this.startFragRequested) {
											if (-1 === this.startPosition) {
												var l = r.startTimeOffset;
												e.isFinite(l) ? (h.logger.log("start time offset found in playlist, adjust startPosition to " + l), this.startPosition = l) : this.startPosition = 0
											}
											this.nextLoadPosition = this.startPosition
										}
										this.state === v.State.WAITING_TRACK && (this.state = v.State.IDLE), this.tick()
									}, r.prototype.onKeyLoaded = function() {
										this.state === v.State.KEY_LOADING && (this.state = v.State.IDLE, this.tick())
									}, r.prototype.onFragLoaded = function(e) {
										var t = this.fragCurrent,
											r = e.frag;
										if (this.state === v.State.FRAG_LOADING && t && "audio" === r.type && r.level === t.level && r.sn === t.sn) {
											var n = this.tracks[this.trackId],
												i = n.details,
												s = i.totalduration,
												o = t.level,
												d = t.sn,
												c = t.cc,
												u = this.config.defaultAudioCodec || n.audioCodec || "mp4a.40.2",
												p = this.stats = e.stats;
											if ("initSegment" === d) this.state = v.State.IDLE, p.tparsed = p.tbuffered = m.now(), i.initSegment.data = e.payload, this.hls.trigger(l.default.FRAG_BUFFERED, {
												stats: p,
												frag: t,
												id: "audio"
											}), this.tick();
											else {
												this.state = v.State.PARSING, this.appended = !1, this.demuxer || (this.demuxer = new a.default(this.hls, "audio"));
												var f = this.initPTS[c],
													g = i.initSegment ? i.initSegment.data : [];
												i.initSegment || void 0 !== f ? (this.pendingBuffering = !0, h.logger.log("Demuxing " + d + " of [" + i.startSN + " ," + i.endSN + "],track " + o), this.demuxer.push(e.payload, g, u, null, t, s, !1, f)) : (h.logger.log("unknown video PTS for continuity counter " + c + ", waiting for video PTS before demuxing audio frag " + d + " of [" + i.startSN + " ," + i.endSN + "],track " + o), this.waitingFragment = e, this.state = v.State.WAITING_INIT_PTS)
											}
										}
										this.fragLoadError = 0
									}, r.prototype.onFragParsingInitSegment = function(e) {
										var t = this.fragCurrent,
											r = e.frag;
										if (t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === v.State.PARSING) {
											var n = e.tracks,
												i = void 0;
											if (n.video && delete n.video, i = n.audio) {
												i.levelCodec = i.codec, i.id = e.id, this.hls.trigger(l.default.BUFFER_CODECS, n), h.logger.log("audio track:audio,container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
												var s = i.initSegment;
												if (s) {
													var o = {
														type: "audio",
														data: s,
														parent: "audio",
														content: "initSegment"
													};
													this.audioSwitch ? this.pendingData = [o] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(l.default.BUFFER_APPENDING, o))
												}
												this.tick()
											}
										}
									}, r.prototype.onFragParsingData = function(t) {
										var r = this,
											n = this.fragCurrent,
											i = t.frag;
										if (n && "audio" === t.id && "audio" === t.type && i.sn === n.sn && i.level === n.level && this.state === v.State.PARSING) {
											var s = this.trackId,
												o = this.tracks[s],
												a = this.hls;
											e.isFinite(t.endPTS) || (t.endPTS = t.startPTS + n.duration, t.endDTS = t.startDTS + n.duration), n.addElementaryStream(g.default.ElementaryStreamTypes.AUDIO), h.logger.log("parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb), d.updateFragPTSDTS(o.details, n, t.startPTS, t.endPTS);
											var c = this.audioSwitch,
												p = this.media,
												f = !1;
											if (c && p)
												if (p.readyState) {
													var m = p.currentTime;
													h.logger.log("switching audio track : currentTime:" + m), m >= t.startPTS && (h.logger.log("switching audio track : flushing all audio"), this.state = v.State.BUFFER_FLUSHING, a.trigger(l.default.BUFFER_FLUSHING, {
														startOffset: 0,
														endOffset: e.POSITIVE_INFINITY,
														type: "audio"
													}), f = !0, this.audioSwitch = !1, a.trigger(l.default.AUDIO_TRACK_SWITCHED, {
														id: s
													}))
												} else this.audioSwitch = !1, a.trigger(l.default.AUDIO_TRACK_SWITCHED, {
													id: s
												});
											var b = this.pendingData;
											if (!b) return h.logger.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"), void a.trigger(l.default.ERROR, {
												type: u.ErrorTypes.MEDIA_ERROR,
												details: null,
												fatal: !0
											});
											this.audioSwitch || ([t.data1, t.data2].forEach((function(e) {
												e && e.length && b.push({
													type: t.type,
													data: e,
													parent: "audio",
													content: "data"
												})
											})), !f && b.length && (b.forEach((function(e) {
												r.state === v.State.PARSING && (r.pendingBuffering = !0, r.hls.trigger(l.default.BUFFER_APPENDING, e))
											})), this.pendingData = [], this.appended = !0)), this.tick()
										}
									}, r.prototype.onFragParsed = function(e) {
										var t = this.fragCurrent,
											r = e.frag;
										t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === v.State.PARSING && (this.stats.tparsed = m.now(), this.state = v.State.PARSED, this._checkAppendedParsed())
									}, r.prototype.onBufferReset = function() {
										this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
									}, r.prototype.onBufferCreated = function(e) {
										var t = e.tracks.audio;
										t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
									}, r.prototype.onBufferAppended = function(e) {
										if ("audio" === e.parent) {
											var t = this.state;
											t !== v.State.PARSING && t !== v.State.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
										}
									}, r.prototype._checkAppendedParsed = function() {
										if (!(this.state !== v.State.PARSED || this.appended && this.pendingBuffering)) {
											var e = this.fragCurrent,
												t = this.stats,
												r = this.hls;
											if (e) {
												this.fragPrevious = e, t.tbuffered = m.now(), r.trigger(l.default.FRAG_BUFFERED, {
													stats: t,
													frag: e,
													id: "audio"
												});
												var n = this.mediaBuffer ? this.mediaBuffer : this.media;
												h.logger.log("audio buffered : " + c.default.toString(n.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger(l.default.AUDIO_TRACK_SWITCHED, {
													id: this.trackId
												})), this.state = v.State.IDLE
											}
											this.tick()
										}
									}, r.prototype.onError = function(t) {
										var r = t.frag;
										if (!r || "audio" === r.type) switch (t.details) {
											case u.ErrorDetails.FRAG_LOAD_ERROR:
											case u.ErrorDetails.FRAG_LOAD_TIMEOUT:
												var n = t.frag;
												if (n && "audio" !== n.type) break;
												if (!t.fatal) {
													var i = this.fragLoadError;
													if (i ? i++ : i = 1, i <= (a = this.config).fragLoadingMaxRetry) {
														this.fragLoadError = i;
														var s = Math.min(Math.pow(2, i - 1) * a.fragLoadingRetryDelay, a.fragLoadingMaxRetryTimeout);
														h.logger.warn("AudioStreamController: frag loading failed, retry in " + s + " ms"), this.retryDate = m.now() + s, this.state = v.State.FRAG_LOADING_WAITING_RETRY
													} else h.logger.error("AudioStreamController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = v.State.ERROR
												}
												break;
											case u.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
											case u.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
											case u.ErrorDetails.KEY_LOAD_ERROR:
											case u.ErrorDetails.KEY_LOAD_TIMEOUT:
												this.state !== v.State.ERROR && (this.state = t.fatal ? v.State.ERROR : v.State.IDLE, h.logger.warn("AudioStreamController: " + t.details + " while loading frag, now switching to " + this.state + " state ..."));
												break;
											case u.ErrorDetails.BUFFER_FULL_ERROR:
												if ("audio" === t.parent && (this.state === v.State.PARSING || this.state === v.State.PARSED)) {
													var a, d = this.mediaBuffer,
														c = this.media.currentTime;
													d && o.BufferHelper.isBuffered(d, c) && o.BufferHelper.isBuffered(d, c + .5) ? ((a = this.config).maxMaxBufferLength >= a.maxBufferLength && (a.maxMaxBufferLength /= 2, h.logger.warn("AudioStreamController: reduce max buffer length to " + a.maxMaxBufferLength + "s")), this.state = v.State.IDLE) : (h.logger.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = v.State.BUFFER_FLUSHING, this.hls.trigger(l.default.BUFFER_FLUSHING, {
														startOffset: 0,
														endOffset: e.POSITIVE_INFINITY,
														type: "audio"
													}))
												}
										}
									}, r.prototype.onBufferFlushed = function() {
										var e = this,
											t = this.pendingData;
										t && t.length ? (h.logger.log("AudioStreamController: appending pending audio data after buffer flushed"), t.forEach((function(t) {
											e.hls.trigger(l.default.BUFFER_APPENDING, t)
										})), this.appended = !0, this.pendingData = [], this.state = v.State.PARSED) : (this.state = v.State.IDLE, this.fragPrevious = null, this.tick())
									}, r
								}(v.default);
							t.default = b
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/audio-track-controller.js": function(e, t, r) {
						"use strict";
						var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var s = r("./src/events.js"),
							o = r("./src/task-loop.js"),
							a = r("./src/utils/logger.js"),
							l = r("./src/errors.js"),
							d = function(e) {
								function t(t) {
									var r = e.call(this, t, s.default.MANIFEST_LOADING, s.default.MANIFEST_PARSED, s.default.AUDIO_TRACK_LOADED, s.default.AUDIO_TRACK_SWITCHED, s.default.LEVEL_LOADED, s.default.ERROR) || this;
									return r._trackId = -1, r._selectDefaultTrack = !0, r.tracks = [], r.trackIdBlacklist = Object.create(null), r.audioGroupId = null, r
								}
								return i(t, e), t.prototype.onManifestLoading = function() {
									this.tracks = [], this._trackId = -1, this._selectDefaultTrack = !0
								}, t.prototype.onManifestParsed = function(e) {
									var t = this.tracks = e.audioTracks || [];
									this.hls.trigger(s.default.AUDIO_TRACKS_UPDATED, {
										audioTracks: t
									})
								}, t.prototype.onAudioTrackLoaded = function(e) {
									if (e.id >= this.tracks.length) a.logger.warn("Invalid audio track id:", e.id);
									else {
										if (a.logger.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.hasInterval()) {
											var t = 1e3 * e.details.targetduration;
											this.setInterval(t)
										}!e.details.live && this.hasInterval() && this.clearInterval()
									}
								}, t.prototype.onAudioTrackSwitched = function(e) {
									var t = this.tracks[e.id].groupId;
									t && this.audioGroupId !== t && (this.audioGroupId = t)
								}, t.prototype.onLevelLoaded = function(e) {
									var t = this.hls.levels[e.level];
									if (t.audioGroupIds) {
										var r = t.audioGroupIds[t.urlId];
										this.audioGroupId !== r && (this.audioGroupId = r, this._selectInitialAudioTrack())
									}
								}, t.prototype.onError = function(e) {
									e.type === l.ErrorTypes.NETWORK_ERROR && (e.fatal && this.clearInterval(), e.details === l.ErrorDetails.AUDIO_TRACK_LOAD_ERROR && (a.logger.warn("Network failure on audio-track id:", e.context.id), this._handleLoadError()))
								}, Object.defineProperty(t.prototype, "audioTracks", {
									get: function() {
										return this.tracks
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "audioTrack", {
									get: function() {
										return this._trackId
									},
									set: function(e) {
										this._setAudioTrack(e), this._selectDefaultTrack = !1
									},
									enumerable: !0,
									configurable: !0
								}), t.prototype._setAudioTrack = function(e) {
									if (this._trackId === e && this.tracks[this._trackId].details) a.logger.debug("Same id as current audio-track passed, and track details available -> no-op");
									else if (e < 0 || e >= this.tracks.length) a.logger.warn("Invalid id passed to audio-track controller");
									else {
										var t = this.tracks[e];
										a.logger.log("Now switching to audio-track index " + e), this.clearInterval(), this._trackId = e;
										var r = t.url,
											n = t.type,
											i = t.id;
										this.hls.trigger(s.default.AUDIO_TRACK_SWITCHING, {
											id: i,
											type: n,
											url: r
										}), this._loadTrackDetailsIfNeeded(t)
									}
								}, t.prototype.doTick = function() {
									this._updateTrack(this._trackId)
								}, t.prototype._selectInitialAudioTrack = function() {
									var e = this,
										t = this.tracks;
									if (t.length) {
										var r = this.tracks[this._trackId],
											n = null;
										if (r && (n = r.name), this._selectDefaultTrack) {
											var i = t.filter((function(e) {
												return e.default
											}));
											i.length ? t = i : a.logger.warn("No default audio tracks defined")
										}
										var o = !1,
											d = function() {
												t.forEach((function(t) {
													o || e.audioGroupId && t.groupId !== e.audioGroupId || n && n !== t.name || (e._setAudioTrack(t.id), o = !0)
												}))
											};
										d(), o || (n = null, d()), o || (a.logger.error("No track found for running audio group-ID: " + this.audioGroupId), this.hls.trigger(s.default.ERROR, {
											type: l.ErrorTypes.MEDIA_ERROR,
											details: l.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
											fatal: !0
										}))
									}
								}, t.prototype._needsTrackLoading = function(e) {
									var t = e.details,
										r = e.url;
									return !(t && !t.live || !r)
								}, t.prototype._loadTrackDetailsIfNeeded = function(e) {
									if (this._needsTrackLoading(e)) {
										var t = e.url,
											r = e.id;
										a.logger.log("loading audio-track playlist for id: " + r), this.hls.trigger(s.default.AUDIO_TRACK_LOADING, {
											url: t,
											id: r
										})
									}
								}, t.prototype._updateTrack = function(e) {
									if (!(e < 0 || e >= this.tracks.length)) {
										this.clearInterval(), this._trackId = e, a.logger.log("trying to update audio-track " + e);
										var t = this.tracks[e];
										this._loadTrackDetailsIfNeeded(t)
									}
								}, t.prototype._handleLoadError = function() {
									this.trackIdBlacklist[this._trackId] = !0;
									var e = this._trackId,
										t = this.tracks[e],
										r = t.name,
										n = t.language,
										i = t.groupId;
									a.logger.warn("Loading failed on audio track id: " + e + ", group-id: " + i + ', name/language: "' + r + '" / "' + n + '"');
									for (var s = e, o = 0; o < this.tracks.length; o++)
										if (!this.trackIdBlacklist[o] && this.tracks[o].name === r) {
											s = o;
											break
										} s !== e ? (a.logger.log("Attempting audio-track fallback id:", s, "group-id:", this.tracks[s].groupId), this._setAudioTrack(s)) : a.logger.warn('No fallback audio-track found for name/language: "' + r + '" / "' + n + '"')
								}, t
							}(o.default);
						t.default = d
					},
					"./src/controller/base-stream-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var s = r("./src/task-loop.js"),
								o = r("./src/controller/fragment-tracker.js"),
								a = r("./src/utils/buffer-helper.js"),
								l = r("./src/utils/logger.js");
							t.State = {
								STOPPED: "STOPPED",
								STARTING: "STARTING",
								IDLE: "IDLE",
								PAUSED: "PAUSED",
								KEY_LOADING: "KEY_LOADING",
								FRAG_LOADING: "FRAG_LOADING",
								FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
								WAITING_TRACK: "WAITING_TRACK",
								PARSING: "PARSING",
								PARSED: "PARSED",
								BUFFER_FLUSHING: "BUFFER_FLUSHING",
								ENDED: "ENDED",
								ERROR: "ERROR",
								WAITING_INIT_PTS: "WAITING_INIT_PTS",
								WAITING_LEVEL: "WAITING_LEVEL"
							};
							var d = function(r) {
								function n() {
									return null !== r && r.apply(this, arguments) || this
								}
								return i(n, r), n.prototype.doTick = function() {}, n.prototype.startLoad = function() {}, n.prototype.stopLoad = function() {
									var e = this.fragCurrent;
									e && (e.loader && e.loader.abort(), this.fragmentTracker.removeFragment(e)), this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = t.State.STOPPED
								}, n.prototype._streamEnded = function(e, t) {
									var r = this.fragCurrent,
										n = this.fragmentTracker;
									if (!t.live && r && !r.backtracked && r.sn === t.endSN && !e.nextStart) {
										var i = n.getState(r);
										return i === o.FragmentState.PARTIAL || i === o.FragmentState.OK
									}
									return !1
								}, n.prototype.onMediaSeeking = function() {
									var r = this.config,
										n = this.media,
										i = this.mediaBuffer,
										s = this.state,
										o = n ? n.currentTime : null,
										d = a.BufferHelper.bufferInfo(i || n, o, this.config.maxBufferHole);
									if (e.isFinite(o) && l.logger.log("media seeking to " + o.toFixed(3)), s === t.State.FRAG_LOADING) {
										var c = this.fragCurrent;
										if (0 === d.len && c) {
											var u = r.maxFragLookUpTolerance,
												h = c.start - u,
												p = c.start + c.duration + u;
											o < h || o > p ? (c.loader && (l.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), c.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = t.State.IDLE) : l.logger.log("seeking outside of buffer but within currently loaded fragment range")
										}
									} else s === t.State.ENDED && (0 === d.len && (this.fragPrevious = null, this.fragCurrent = null), this.state = t.State.IDLE);
									n && (this.lastCurrentTime = o), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = o), this.tick()
								}, n.prototype.onMediaEnded = function() {
									this.startPosition = this.lastCurrentTime = 0
								}, n.prototype.onHandlerDestroying = function() {
									this.stopLoad(), r.prototype.onHandlerDestroying.call(this)
								}, n.prototype.onHandlerDestroyed = function() {
									this.state = t.State.STOPPED, this.fragmentTracker = null
								}, n
							}(s.default);
							t.default = d
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/buffer-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var s = r("./src/events.js"),
								o = r("./src/event-handler.js"),
								a = r("./src/utils/logger.js"),
								l = r("./src/errors.js"),
								d = r("./src/utils/mediasource-helper.js").getMediaSource(),
								c = function(t) {
									function r(e) {
										var r = t.call(this, e, s.default.MEDIA_ATTACHING, s.default.MEDIA_DETACHING, s.default.MANIFEST_PARSED, s.default.BUFFER_RESET, s.default.BUFFER_APPENDING, s.default.BUFFER_CODECS, s.default.BUFFER_EOS, s.default.BUFFER_FLUSHING, s.default.LEVEL_PTS_UPDATED, s.default.LEVEL_UPDATED) || this;
										return r._msDuration = null, r._levelDuration = null, r._levelTargetDuration = 10, r._live = null, r._objectUrl = null, r.bufferCodecEventsExpected = 0, r.onsbue = r.onSBUpdateEnd.bind(r), r.onsbe = r.onSBUpdateError.bind(r), r.pendingTracks = {}, r.tracks = {}, r
									}
									return i(r, t), r.prototype.destroy = function() {
										o.default.prototype.destroy.call(this)
									}, r.prototype.onLevelPtsUpdated = function(e) {
										var t = e.type,
											r = this.tracks.audio;
										if ("audio" === t && r && "audio/mpeg" === r.container) {
											var n = this.sourceBuffer.audio;
											if (Math.abs(n.timestampOffset - e.start) > .1) {
												var i = n.updating;
												try {
													n.abort()
												} catch (s) {
													a.logger.warn("can not abort audio buffer: " + s)
												}
												i ? this.audioTimestampOffset = e.start : (a.logger.warn("change mpeg audio timestamp offset from " + n.timestampOffset + " to " + e.start), n.timestampOffset = e.start)
											}
										}
									}, r.prototype.onManifestParsed = function(e) {
										this.bufferCodecEventsExpected = e.altAudio ? 2 : 1, a.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
									}, r.prototype.onMediaAttaching = function(e) {
										var t = this.media = e.media;
										if (t) {
											var r = this.mediaSource = new d;
											this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), r.addEventListener("sourceopen", this.onmso), r.addEventListener("sourceended", this.onmse), r.addEventListener("sourceclose", this.onmsc), t.src = window.URL.createObjectURL(r), this._objectUrl = t.src
										}
									}, r.prototype.onMediaDetaching = function() {
										a.logger.log("media source detaching");
										var e = this.mediaSource;
										if (e) {
											if ("open" === e.readyState) try {
												e.endOfStream()
											} catch (t) {
												a.logger.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
											}
											e.removeEventListener("sourceopen", this.onmso), e.removeEventListener("sourceended", this.onmse), e.removeEventListener("sourceclose", this.onmsc), this.media && (window.URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : a.logger.warn("media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
										}
										this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(s.default.MEDIA_DETACHED)
									}, r.prototype.onMediaSourceOpen = function() {
										a.logger.log("media source opened"), this.hls.trigger(s.default.MEDIA_ATTACHED, {
											media: this.media
										});
										var e = this.mediaSource;
										e && e.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks()
									}, r.prototype.checkPendingTracks = function() {
										var e = this.bufferCodecEventsExpected,
											t = this.pendingTracks,
											r = Object.keys(t).length;
										(r && !e || 2 === r) && (this.createSourceBuffers(t), this.pendingTracks = {}, this.doAppending())
									}, r.prototype.onMediaSourceClose = function() {
										a.logger.log("media source closed")
									}, r.prototype.onMediaSourceEnded = function() {
										a.logger.log("media source ended")
									}, r.prototype.onSBUpdateEnd = function() {
										if (this.audioTimestampOffset) {
											var e = this.sourceBuffer.audio;
											a.logger.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + this.audioTimestampOffset), e.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset
										}
										this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1;
										var t = this.parent,
											r = this.segments.reduce((function(e, r) {
												return r.parent === t ? e + 1 : e
											}), 0),
											n = {},
											i = this.sourceBuffer;
										for (var o in i) n[o] = i[o].buffered;
										this.hls.trigger(s.default.BUFFER_APPENDED, {
											parent: t,
											pending: r,
											timeRanges: n
										}), this._needsFlush || this.doAppending(), this.updateMediaElementDuration(), 0 === r && this.flushLiveBackBuffer()
									}, r.prototype.onSBUpdateError = function(e) {
										a.logger.error("sourceBuffer error:", e), this.hls.trigger(s.default.ERROR, {
											type: l.ErrorTypes.MEDIA_ERROR,
											details: l.ErrorDetails.BUFFER_APPENDING_ERROR,
											fatal: !1
										})
									}, r.prototype.onBufferReset = function() {
										var e = this.sourceBuffer;
										for (var t in e) {
											var r = e[t];
											try {
												this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this.onsbue), r.removeEventListener("error", this.onsbe)
											} catch (n) {}
										}
										this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
									}, r.prototype.onBufferCodecs = function(e) {
										var t = this;
										if (!Object.keys(this.sourceBuffer).length) {
											Object.keys(e).forEach((function(r) {
												t.pendingTracks[r] = e[r]
											}));
											var r = this.mediaSource;
											this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), r && "open" === r.readyState && this.checkPendingTracks()
										}
									}, r.prototype.createSourceBuffers = function(e) {
										var t = this.sourceBuffer,
											r = this.mediaSource;
										for (var n in e)
											if (!t[n]) {
												var i = e[n],
													o = i.levelCodec || i.codec,
													d = i.container + ";codecs=" + o;
												a.logger.log("creating sourceBuffer(" + d + ")");
												try {
													var c = t[n] = r.addSourceBuffer(d);
													c.addEventListener("updateend", this.onsbue), c.addEventListener("error", this.onsbe), this.tracks[n] = {
														codec: o,
														container: i.container
													}, i.buffer = c
												} catch (u) {
													a.logger.error("error while trying to add sourceBuffer:" + u.message), this.hls.trigger(s.default.ERROR, {
														type: l.ErrorTypes.MEDIA_ERROR,
														details: l.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
														fatal: !1,
														err: u,
														mimeType: d
													})
												}
											} this.hls.trigger(s.default.BUFFER_CREATED, {
											tracks: e
										})
									}, r.prototype.onBufferAppending = function(e) {
										this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending())
									}, r.prototype.onBufferAppendFail = function(e) {
										a.logger.error("sourceBuffer error:", e.event), this.hls.trigger(s.default.ERROR, {
											type: l.ErrorTypes.MEDIA_ERROR,
											details: l.ErrorDetails.BUFFER_APPENDING_ERROR,
											fatal: !1
										})
									}, r.prototype.onBufferEos = function(e) {
										var t = this.sourceBuffer,
											r = e.type;
										for (var n in t) r && n !== r || t[n].ended || (t[n].ended = !0, a.logger.log(n + " sourceBuffer now EOS"));
										this.checkEos()
									}, r.prototype.checkEos = function() {
										var e = this.sourceBuffer,
											t = this.mediaSource;
										if (t && "open" === t.readyState) {
											for (var r in e) {
												var n = e[r];
												if (!n.ended) return;
												if (n.updating) return void(this._needsEos = !0)
											}
											a.logger.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");
											try {
												t.endOfStream()
											} catch (i) {
												a.logger.warn("exception while calling mediaSource.endOfStream()")
											}
											this._needsEos = !1
										} else this._needsEos = !1
									}, r.prototype.onBufferFlushing = function(e) {
										this.flushRange.push({
											start: e.startOffset,
											end: e.endOffset,
											type: e.type
										}), this.flushBufferCounter = 0, this.doFlush()
									}, r.prototype.flushLiveBackBuffer = function() {
										if (this._live) {
											var e = this.hls.config.liveBackBufferLength;
											if (isFinite(e) && !(e < 0))
												for (var t = this.media.currentTime, r = this.sourceBuffer, n = Object.keys(r), i = t - Math.max(e, this._levelTargetDuration), s = n.length - 1; s >= 0; s--) {
													var o = n[s],
														a = r[o].buffered;
													a.length > 0 && i > a.start(0) && this.removeBufferRange(o, r[o], 0, i)
												}
										}
									}, r.prototype.onLevelUpdated = function(e) {
										var t = e.details;
										t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start, this._levelTargetDuration = t.averagetargetduration || t.targetduration || 10, this._live = t.live, this.updateMediaElementDuration())
									}, r.prototype.updateMediaElementDuration = function() {
										var t, r = this.hls.config;
										if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
											for (var n in this.sourceBuffer)
												if (!0 === this.sourceBuffer[n].updating) return;
											t = this.media.duration, null === this._msDuration && (this._msDuration = this.mediaSource.duration), !0 === this._live && !0 === r.liveDurationInfinity ? (a.logger.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > t || !e.isFinite(t)) && (a.logger.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
										}
									}, r.prototype.doFlush = function() {
										for (; this.flushRange.length;) {
											var e = this.flushRange[0];
											if (!this.flushBuffer(e.start, e.end, e.type)) return void(this._needsFlush = !0);
											this.flushRange.shift(), this.flushBufferCounter = 0
										}
										if (0 === this.flushRange.length) {
											this._needsFlush = !1;
											var t = 0,
												r = this.sourceBuffer;
											try {
												for (var n in r) t += r[n].buffered.length
											} catch (i) {
												a.logger.error("error while accessing sourceBuffer.buffered")
											}
											this.appended = t, this.hls.trigger(s.default.BUFFER_FLUSHED)
										}
									}, r.prototype.doAppending = function() {
										var e = this.hls,
											t = this.segments,
											r = this.sourceBuffer;
										if (Object.keys(r).length) {
											if (this.media.error) return this.segments = [], void a.logger.error("trying to append although a media error occured, flush segment and abort");
											if (this.appending) return;
											if (t && t.length) {
												var n = t.shift();
												try {
													var i = r[n.type];
													i ? i.updating ? t.unshift(n) : (i.ended = !1, this.parent = n.parent, i.appendBuffer(n.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
												} catch (d) {
													a.logger.error("error while trying to append buffer:" + d.message), t.unshift(n);
													var o = {
														type: l.ErrorTypes.MEDIA_ERROR,
														parent: n.parent
													};
													22 !== d.code ? (this.appendError ? this.appendError++ : this.appendError = 1, o.details = l.ErrorDetails.BUFFER_APPEND_ERROR, this.appendError > e.config.appendErrorMaxRetry ? (a.logger.log("fail " + e.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), this.segments = [], o.fatal = !0, e.trigger(s.default.ERROR, o)) : (o.fatal = !1, e.trigger(s.default.ERROR, o))) : (this.segments = [], o.details = l.ErrorDetails.BUFFER_FULL_ERROR, o.fatal = !1, e.trigger(s.default.ERROR, o))
												}
											}
										}
									}, r.prototype.flushBuffer = function(e, t, r) {
										var n, i = this.sourceBuffer;
										if (Object.keys(i).length) {
											if (a.logger.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + e + "/" + t), this.flushBufferCounter < this.appended) {
												for (var s in i)
													if (!r || s === r) {
														if ((n = i[s]).ended = !1, n.updating) return a.logger.warn("cannot flush, sb updating in progress"), !1;
														if (this.removeBufferRange(s, n, e, t)) return this.flushBufferCounter++, !1
													}
											} else a.logger.warn("abort flushing too many retries");
											a.logger.log("buffer flushed")
										}
										return !0
									}, r.prototype.removeBufferRange = function(e, t, r, n) {
										try {
											for (var i = 0; i < t.buffered.length; i++) {
												var s = t.buffered.start(i),
													o = t.buffered.end(i),
													l = Math.max(s, r),
													d = Math.min(o, n);
												if (Math.min(d, o) - l > .5) return a.logger.log("sb remove " + e + " [" + l + "," + d + "], of [" + s + "," + o + "], pos:" + this.media.currentTime), t.remove(l, d), !0
											}
										} catch (c) {
											a.logger.warn("removeBufferRange failed", c)
										}
										return !1
									}, r
								}(o.default);
							t.default = c
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/cap-level-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var s = r("./src/events.js"),
								o = function(t) {
									function r(r) {
										var n = t.call(this, r, s.default.FPS_DROP_LEVEL_CAPPING, s.default.MEDIA_ATTACHING, s.default.MANIFEST_PARSED, s.default.BUFFER_CODECS, s.default.MEDIA_DETACHING) || this;
										return n.autoLevelCapping = e.POSITIVE_INFINITY, n.firstLevel = null, n.levels = [], n.media = null, n.restrictedLevels = [], n.timer = null, n
									}
									return i(r, t), r.prototype.destroy = function() {
										this.hls.config.capLevelToPlayerSize && (this.media = null, this._stopCapping())
									}, r.prototype.onFpsDropLevelCapping = function(e) {
										r.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel)
									}, r.prototype.onMediaAttaching = function(e) {
										this.media = e.media instanceof window.HTMLVideoElement ? e.media : null
									}, r.prototype.onManifestParsed = function(e) {
										var t = this.hls;
										this.restrictedLevels = [], this.levels = e.levels, this.firstLevel = e.firstLevel, t.config.capLevelToPlayerSize && e.video && this._startCapping()
									}, r.prototype.onBufferCodecs = function(e) {
										this.hls.config.capLevelToPlayerSize && e.video && this._startCapping()
									}, r.prototype.onLevelsUpdated = function(e) {
										this.levels = e.levels
									}, r.prototype.onMediaDetaching = function() {
										this._stopCapping()
									}, r.prototype.detectPlayerSize = function() {
										if (this.media) {
											var e = this.levels ? this.levels.length : 0;
											if (e) {
												var t = this.hls;
												t.autoLevelCapping = this.getMaxLevel(e - 1), t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping
											}
										}
									}, r.prototype.getMaxLevel = function(e) {
										var t = this;
										if (!this.levels) return -1;
										var n = this.levels.filter((function(n, i) {
											return r.isLevelAllowed(i, t.restrictedLevels) && i <= e
										}));
										return r.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight)
									}, r.prototype._startCapping = function() {
										this.timer || (this.autoLevelCapping = e.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
									}, r.prototype._stopCapping = function() {
										this.restrictedLevels = [], this.firstLevel = null, this.autoLevelCapping = e.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer), this.timer = null)
									}, Object.defineProperty(r.prototype, "mediaWidth", {
										get: function() {
											var e, t = this.media;
											return t && (e = t.width || t.clientWidth || t.offsetWidth, e *= r.contentScaleFactor), e
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(r.prototype, "mediaHeight", {
										get: function() {
											var e, t = this.media;
											return t && (e = t.height || t.clientHeight || t.offsetHeight, e *= r.contentScaleFactor), e
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(r, "contentScaleFactor", {
										get: function() {
											var e = 1;
											try {
												e = window.devicePixelRatio
											} catch (t) {}
											return e
										},
										enumerable: !0,
										configurable: !0
									}), r.isLevelAllowed = function(e, t) {
										return void 0 === t && (t = []), -1 === t.indexOf(e)
									}, r.getMaxLevelByMediaSize = function(e, t, r) {
										if (!e || e && !e.length) return -1;
										for (var n, i, s = e.length - 1, o = 0; o < e.length; o += 1) {
											var a = e[o];
											if ((a.width >= t || a.height >= r) && (n = a, !(i = e[o + 1]) || n.width !== i.width || n.height !== i.height)) {
												s = o;
												break
											}
										}
										return s
									}, r
								}(r("./src/event-handler.js").default);
							t.default = o
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/eme-controller.js": function(e, t, r) {
						"use strict";
						var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var s = r("./src/event-handler.js"),
							o = r("./src/events.js"),
							a = r("./src/errors.js"),
							l = r("./src/utils/logger.js"),
							d = window.XMLHttpRequest,
							c = "com.widevine.alpha",
							u = "com.microsoft.playready",
							h = function(e) {
								function t(t) {
									var r = e.call(this, t, o.default.MEDIA_ATTACHED, o.default.MANIFEST_PARSED) || this;
									return r._widevineLicenseUrl = t.config.widevineLicenseUrl, r._licenseXhrSetup = t.config.licenseXhrSetup, r._emeEnabled = t.config.emeEnabled, r._requestMediaKeySystemAccess = t.config.requestMediaKeySystemAccessFunc, r._mediaKeysList = [], r._media = null, r._hasSetMediaKeys = !1, r._isMediaEncrypted = !1, r._requestLicenseFailureCount = 0, r
								}
								return i(t, e), t.prototype.getLicenseServerUrl = function(e) {
									var t;
									switch (e) {
										case c:
											t = this._widevineLicenseUrl;
											break;
										default:
											t = null
									}
									return t || (l.logger.error('No license server URL configured for key-system "' + e + '"'), this.hls.trigger(o.default.ERROR, {
										type: a.ErrorTypes.KEY_SYSTEM_ERROR,
										details: a.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
										fatal: !0
									})), t
								}, t.prototype._attemptKeySystemAccess = function(e, t, r) {
									var n = this,
										i = function(e, t, r) {
											switch (e) {
												case c:
													return function(e, t, r) {
														var n = {
															videoCapabilities: []
														};
														return t.forEach((function(e) {
															n.videoCapabilities.push({
																contentType: 'video/mp4; codecs="' + e + '"'
															})
														})), [n]
													}(0, r);
												default:
													throw Error("Unknown key-system: " + e)
											}
										}(e, 0, r);
									i ? (l.logger.log("Requesting encrypted media key-system access"), this.requestMediaKeySystemAccess(e, i).then((function(t) {
										n._onMediaKeySystemAccessObtained(e, t)
									})).catch((function(t) {
										l.logger.error('Failed to obtain key-system "' + e + '" access:', t)
									}))) : l.logger.warn("Can not create config for key-system (maybe because platform is not supported):", e)
								}, Object.defineProperty(t.prototype, "requestMediaKeySystemAccess", {
									get: function() {
										if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
										return this._requestMediaKeySystemAccess
									},
									enumerable: !0,
									configurable: !0
								}), t.prototype._onMediaKeySystemAccessObtained = function(e, t) {
									var r = this;
									l.logger.log('Access for key-system "' + e + '" obtained');
									var n = {
										mediaKeys: null,
										mediaKeysSession: null,
										mediaKeysSessionInitialized: !1,
										mediaKeySystemAccess: t,
										mediaKeySystemDomain: e
									};
									this._mediaKeysList.push(n), t.createMediaKeys().then((function(t) {
										n.mediaKeys = t, l.logger.log('Media-keys created for key-system "' + e + '"'), r._onMediaKeysCreated()
									})).catch((function(e) {
										l.logger.error("Failed to create media-keys:", e)
									}))
								}, t.prototype._onMediaKeysCreated = function() {
									var e = this;
									this._mediaKeysList.forEach((function(t) {
										t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), e._onNewMediaKeySession(t.mediaKeysSession))
									}))
								}, t.prototype._onNewMediaKeySession = function(e) {
									var t = this;
									l.logger.log("New key-system session " + e.sessionId), e.addEventListener("message", (function(r) {
										t._onKeySessionMessage(e, r.message)
									}), !1)
								}, t.prototype._onKeySessionMessage = function(e, t) {
									l.logger.log("Got EME message event, creating license request"), this._requestLicense(t, (function(t) {
										l.logger.log("Received license data, updating key-session"), e.update(t)
									}))
								}, t.prototype._onMediaEncrypted = function(e, t) {
									l.logger.log('Media is encrypted using "' + e + '" init data type'), this._isMediaEncrypted = !0, this._mediaEncryptionInitDataType = e, this._mediaEncryptionInitData = t, this._attemptSetMediaKeys(), this._generateRequestWithPreferredKeySession()
								}, t.prototype._attemptSetMediaKeys = function() {
									if (!this._hasSetMediaKeys) {
										var e = this._mediaKeysList[0];
										if (!e || !e.mediaKeys) return l.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(o.default.ERROR, {
											type: a.ErrorTypes.KEY_SYSTEM_ERROR,
											details: a.ErrorDetails.KEY_SYSTEM_NO_KEYS,
											fatal: !0
										});
										l.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(e.mediaKeys), this._hasSetMediaKeys = !0
									}
								}, t.prototype._generateRequestWithPreferredKeySession = function() {
									var e = this,
										t = this._mediaKeysList[0];
									if (!t) return l.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(o.default.ERROR, {
										type: a.ErrorTypes.KEY_SYSTEM_ERROR,
										details: a.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
										fatal: !0
									});
									if (t.mediaKeysSessionInitialized) l.logger.warn("Key-Session already initialized but requested again");
									else {
										var r = t.mediaKeysSession;
										r || (l.logger.error("Fatal: Media is encrypted but no key-session existing"), this.hls.trigger(o.default.ERROR, {
											type: a.ErrorTypes.KEY_SYSTEM_ERROR,
											details: a.ErrorDetails.KEY_SYSTEM_NO_SESSION,
											fatal: !0
										}));
										var n = this._mediaEncryptionInitDataType,
											i = this._mediaEncryptionInitData;
										l.logger.log('Generating key-session request for "' + n + '" init data type'), t.mediaKeysSessionInitialized = !0, r.generateRequest(n, i).then((function() {
											l.logger.debug("Key-session generation succeeded")
										})).catch((function(t) {
											l.logger.error("Error generating key-session request:", t), e.hls.trigger(o.default.ERROR, {
												type: a.ErrorTypes.KEY_SYSTEM_ERROR,
												details: a.ErrorDetails.KEY_SYSTEM_NO_SESSION,
												fatal: !1
											})
										}))
									}
								}, t.prototype._createLicenseXhr = function(e, t, r) {
									var n = new d,
										i = this._licenseXhrSetup;
									try {
										if (i) try {
											i(n, e)
										} catch (s) {
											n.open("POST", e, !0), i(n, e)
										}
										n.readyState || n.open("POST", e, !0)
									} catch (s) {
										return l.logger.error("Error setting up key-system license XHR", s), void this.hls.trigger(o.default.ERROR, {
											type: a.ErrorTypes.KEY_SYSTEM_ERROR,
											details: a.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
											fatal: !0
										})
									}
									return n.responseType = "arraybuffer", n.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, n, e, t, r), n
								}, t.prototype._onLicenseRequestReadyStageChange = function(e, t, r, n) {
									switch (e.readyState) {
										case 4:
											if (200 === e.status) this._requestLicenseFailureCount = 0, l.logger.log("License request succeeded"), n(e.response);
											else {
												if (l.logger.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount <= 3) {
													var i = 3 - this._requestLicenseFailureCount + 1;
													return l.logger.warn("Retrying license request, " + i + " attempts left"), void this._requestLicense(r, n)
												}
												this.hls.trigger(o.default.ERROR, {
													type: a.ErrorTypes.KEY_SYSTEM_ERROR,
													details: a.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
													fatal: !0
												})
											}
									}
								}, t.prototype._generateLicenseRequestChallenge = function(e, t) {
									var r;
									return e.mediaKeySystemDomain === u ? l.logger.error("PlayReady is not supported (yet)") : e.mediaKeySystemDomain === c ? r = t : l.logger.error("Unsupported key-system:", e.mediaKeySystemDomain), r
								}, t.prototype._requestLicense = function(e, t) {
									l.logger.log("Requesting content license for key-system");
									var r = this._mediaKeysList[0];
									if (!r) return l.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(o.default.ERROR, {
										type: a.ErrorTypes.KEY_SYSTEM_ERROR,
										details: a.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
										fatal: !0
									});
									var n = this.getLicenseServerUrl(r.mediaKeySystemDomain),
										i = this._createLicenseXhr(n, e, t);
									l.logger.log("Sending license request to URL: " + n), i.send(this._generateLicenseRequestChallenge(r, e))
								}, t.prototype.onMediaAttached = function(e) {
									var t = this;
									if (this._emeEnabled) {
										var r = e.media;
										this._media = r, r.addEventListener("encrypted", (function(e) {
											t._onMediaEncrypted(e.initDataType, e.initData)
										}))
									}
								}, t.prototype.onManifestParsed = function(e) {
									if (this._emeEnabled) {
										var t = e.levels.map((function(e) {
												return e.audioCodec
											})),
											r = e.levels.map((function(e) {
												return e.videoCodec
											}));
										this._attemptKeySystemAccess(c, t, r)
									}
								}, t
							}(s.default);
						t.default = h
					},
					"./src/controller/fps-controller.js": function(e, t, r) {
						"use strict";
						var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var s = r("./src/events.js"),
							o = r("./src/event-handler.js"),
							a = r("./src/utils/logger.js"),
							l = window.performance,
							d = function(e) {
								function t(t) {
									return e.call(this, t, s.default.MEDIA_ATTACHING) || this
								}
								return i(t, e), t.prototype.destroy = function() {
									this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
								}, t.prototype.onMediaAttaching = function(e) {
									var t = this.hls.config;
									t.capLevelOnFPSDrop && ("function" == typeof(this.video = e.media instanceof window.HTMLVideoElement ? e.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod))
								}, t.prototype.checkFPS = function(e, t, r) {
									var n = l.now();
									if (t) {
										if (this.lastTime) {
											var i = n - this.lastTime,
												o = r - this.lastDroppedFrames,
												d = t - this.lastDecodedFrames,
												c = 1e3 * o / i,
												u = this.hls;
											if (u.trigger(s.default.FPS_DROP, {
													currentDropped: o,
													currentDecoded: d,
													totalDroppedFrames: r
												}), c > 0 && o > u.config.fpsDroppedMonitoringThreshold * d) {
												var h = u.currentLevel;
												a.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + h), h > 0 && (-1 === u.autoLevelCapping || u.autoLevelCapping >= h) && (h -= 1, u.trigger(s.default.FPS_DROP_LEVEL_CAPPING, {
													level: h,
													droppedLevel: u.currentLevel
												}), u.autoLevelCapping = h, u.streamController.nextLevelSwitch())
											}
										}
										this.lastTime = n, this.lastDroppedFrames = r, this.lastDecodedFrames = t
									}
								}, t.prototype.checkFPSInterval = function() {
									var e = this.video;
									if (e)
										if (this.isVideoPlaybackQualityAvailable) {
											var t = e.getVideoPlaybackQuality();
											this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
										} else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
								}, t
							}(o.default);
						t.default = d
					},
					"./src/controller/fragment-finders.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/utils/binary-search.js");

							function i(e, t, r) {
								void 0 === e && (e = 0), void 0 === t && (t = 0);
								var n = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
								return r.start + r.duration - n <= e ? 1 : r.start - n > e && r.start ? -1 : 0
							}

							function s(e, t, r) {
								var n = 1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
								return r.endProgramDateTime - n > e
							}
							t.findFragmentByPDT = function(t, r, n) {
								if (!Array.isArray(t) || !t.length || !e.isFinite(r)) return null;
								if (r < t[0].programDateTime) return null;
								if (r >= t[t.length - 1].endProgramDateTime) return null;
								n = n || 0;
								for (var i = 0; i < t.length; ++i) {
									var o = t[i];
									if (s(r, n, o)) return o
								}
								return null
							}, t.findFragmentByPTS = function(e, t, r, s) {
								void 0 === r && (r = 0), void 0 === s && (s = 0);
								var o = e ? t[e.sn - t[0].sn + 1] : null;
								return o && !i(r, s, o) ? o : n.default.search(t, i.bind(null, r, s))
							}, t.fragmentWithinToleranceTest = i, t.pdtWithinToleranceTest = s
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/fragment-tracker.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var s = r("./src/event-handler.js"),
								o = r("./src/events.js");
							t.FragmentState = {
								NOT_LOADED: "NOT_LOADED",
								APPENDING: "APPENDING",
								PARTIAL: "PARTIAL",
								OK: "OK"
							};
							var a = function(r) {
								function n(e) {
									var t = r.call(this, e, o.default.BUFFER_APPENDED, o.default.FRAG_BUFFERED, o.default.FRAG_LOADED) || this;
									return t.bufferPadding = .2, t.fragments = Object.create(null), t.timeRanges = Object.create(null), t.config = e.config, t
								}
								return i(n, r), n.prototype.destroy = function() {
									this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.config = null, s.default.prototype.destroy.call(this), r.prototype.destroy.call(this)
								}, n.prototype.getBufferedFrag = function(e, t) {
									var r = this.fragments,
										n = Object.keys(r).filter((function(n) {
											var i = r[n];
											if (i.body.type !== t) return !1;
											if (!i.buffered) return !1;
											var s = i.body;
											return s.startPTS <= e && e <= s.endPTS
										}));
									if (0 === n.length) return null;
									var i = n.pop();
									return r[i].body
								}, n.prototype.detectEvictedFragments = function(e, t) {
									var r, n, i = this;
									Object.keys(this.fragments).forEach((function(s) {
										var o = i.fragments[s];
										if (!0 === o.buffered) {
											var a = o.range[e];
											if (a) {
												r = a.time;
												for (var l = 0; l < r.length; l++)
													if (n = r[l], !1 === i.isTimeBuffered(n.startPTS, n.endPTS, t)) {
														i.removeFragment(o.body);
														break
													}
											}
										}
									}))
								}, n.prototype.detectPartialFragments = function(e) {
									var t = this,
										r = this.getFragmentKey(e),
										n = this.fragments[r];
									n && (n.buffered = !0, Object.keys(this.timeRanges).forEach((function(r) {
										if (e.hasElementaryStream(r)) {
											var i = t.timeRanges[r];
											n.range[r] = t.getBufferedTimes(e.startPTS, e.endPTS, i)
										}
									})))
								}, n.prototype.getBufferedTimes = function(e, t, r) {
									for (var n, i, s = [], o = !1, a = 0; a < r.length; a++) {
										if (n = r.start(a) - this.bufferPadding, i = r.end(a) + this.bufferPadding, e >= n && t <= i) {
											s.push({
												startPTS: Math.max(e, r.start(a)),
												endPTS: Math.min(t, r.end(a))
											});
											break
										}
										if (e < i && t > n) s.push({
											startPTS: Math.max(e, r.start(a)),
											endPTS: Math.min(t, r.end(a))
										}), o = !0;
										else if (t <= n) break
									}
									return {
										time: s,
										partial: o
									}
								}, n.prototype.getFragmentKey = function(e) {
									return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
								}, n.prototype.getPartialFragment = function(e) {
									var t, r, n, i = this,
										s = null,
										o = 0;
									return Object.keys(this.fragments).forEach((function(a) {
										var l = i.fragments[a];
										i.isPartial(l) && (r = l.body.startPTS - i.bufferPadding, n = l.body.endPTS + i.bufferPadding, e >= r && e <= n && (t = Math.min(e - r, n - e), o <= t && (s = l.body, o = t)))
									})), s
								}, n.prototype.getState = function(e) {
									var r = this.getFragmentKey(e),
										n = this.fragments[r],
										i = t.FragmentState.NOT_LOADED;
									return void 0 !== n && (i = n.buffered ? !0 === this.isPartial(n) ? t.FragmentState.PARTIAL : t.FragmentState.OK : t.FragmentState.APPENDING), i
								}, n.prototype.isPartial = function(e) {
									return !0 === e.buffered && (void 0 !== e.range.video && !0 === e.range.video.partial || void 0 !== e.range.audio && !0 === e.range.audio.partial)
								}, n.prototype.isTimeBuffered = function(e, t, r) {
									for (var n, i, s = 0; s < r.length; s++) {
										if (n = r.start(s) - this.bufferPadding, i = r.end(s) + this.bufferPadding, e >= n && t <= i) return !0;
										if (t <= n) return !1
									}
									return !1
								}, n.prototype.onFragLoaded = function(t) {
									var r = t.frag;
									e.isFinite(r.sn) && !r.bitrateTest && (this.fragments[this.getFragmentKey(r)] = {
										body: r,
										range: Object.create(null),
										buffered: !1
									})
								}, n.prototype.onBufferAppended = function(e) {
									var t = this;
									this.timeRanges = e.timeRanges, Object.keys(this.timeRanges).forEach((function(e) {
										var r = t.timeRanges[e];
										t.detectEvictedFragments(e, r)
									}))
								}, n.prototype.onFragBuffered = function(e) {
									this.detectPartialFragments(e.frag)
								}, n.prototype.hasFragment = function(e) {
									var t = this.getFragmentKey(e);
									return void 0 !== this.fragments[t]
								}, n.prototype.removeFragment = function(e) {
									var t = this.getFragmentKey(e);
									delete this.fragments[t]
								}, n.prototype.removeAllFragments = function() {
									this.fragments = Object.create(null)
								}, n
							}(s.default);
							t.FragmentTracker = a
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/gap-controller.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/utils/buffer-helper.js"),
							i = r("./src/errors.js"),
							s = r("./src/events.js"),
							o = r("./src/utils/logger.js"),
							a = function() {
								function e(e, t, r, n) {
									this.config = e, this.media = t, this.fragmentTracker = r, this.hls = n, this.stallReported = !1
								}
								return e.prototype.poll = function(e, t) {
									var r = this.config,
										i = this.media,
										s = i.currentTime,
										a = window.performance.now();
									if (s !== e) return this.stallReported && (o.logger.warn("playback not stuck anymore @" + s + ", after " + Math.round(a - this.stalled) + "ms"), this.stallReported = !1), this.stalled = null, void(this.nudgeRetry = 0);
									if (!(i.ended || !i.buffered.length || i.readyState > 2 || i.seeking && n.BufferHelper.isBuffered(i, s))) {
										var l = a - this.stalled,
											d = n.BufferHelper.bufferInfo(i, s, r.maxBufferHole);
										this.stalled ? (l >= 1e3 && this._reportStall(d.len), this._tryFixBufferStall(d, l)) : this.stalled = a
									}
								}, e.prototype._tryFixBufferStall = function(e, t) {
									var r = this.config,
										n = this.fragmentTracker,
										i = this.media.currentTime,
										s = n.getPartialFragment(i);
									s && this._trySkipBufferHole(s), e.len > .5 && t > 1e3 * r.highBufferWatchdogPeriod && (this.stalled = null, this._tryNudgeBuffer())
								}, e.prototype._reportStall = function(e) {
									var t = this.hls,
										r = this.media;
									this.stallReported || (this.stallReported = !0, o.logger.warn("Playback stalling at @" + r.currentTime + " due to low buffer"), t.trigger(s.default.ERROR, {
										type: i.ErrorTypes.MEDIA_ERROR,
										details: i.ErrorDetails.BUFFER_STALLED_ERROR,
										fatal: !1,
										buffer: e
									}))
								}, e.prototype._trySkipBufferHole = function(e) {
									for (var t = this.hls, r = this.media, n = r.currentTime, a = 0, l = 0; l < r.buffered.length; l++) {
										var d = r.buffered.start(l);
										if (n >= a && n < d) return r.currentTime = Math.max(d, r.currentTime + .1), o.logger.warn("skipping hole, adjusting currentTime from " + n + " to " + r.currentTime), this.stalled = null, void t.trigger(s.default.ERROR, {
											type: i.ErrorTypes.MEDIA_ERROR,
											details: i.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
											fatal: !1,
											reason: "fragment loaded with buffer holes, seeking from " + n + " to " + r.currentTime,
											frag: e
										});
										a = r.buffered.end(l)
									}
								}, e.prototype._tryNudgeBuffer = function() {
									var e = this.config,
										t = this.hls,
										r = this.media,
										n = r.currentTime,
										a = (this.nudgeRetry || 0) + 1;
									if (this.nudgeRetry = a, a < e.nudgeMaxRetry) {
										var l = n + a * e.nudgeOffset;
										o.logger.log("adjust currentTime from " + n + " to " + l), r.currentTime = l, t.trigger(s.default.ERROR, {
											type: i.ErrorTypes.MEDIA_ERROR,
											details: i.ErrorDetails.BUFFER_NUDGE_ON_STALL,
											fatal: !1
										})
									} else o.logger.error("still stuck in high buffer @" + n + " after " + e.nudgeMaxRetry + ", raise fatal error"), t.trigger(s.default.ERROR, {
										type: i.ErrorTypes.MEDIA_ERROR,
										details: i.ErrorDetails.BUFFER_STALLED_ERROR,
										fatal: !0
									})
								}, e
							}();
						t.default = a
					},
					"./src/controller/id3-track-controller.js": function(e, t, r) {
						"use strict";
						var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var s = r("./src/events.js"),
							o = r("./src/event-handler.js"),
							a = r("./src/demux/id3.js"),
							l = r("./src/utils/texttrack-utils.js"),
							d = function(e) {
								function t(t) {
									var r = e.call(this, t, s.default.MEDIA_ATTACHED, s.default.MEDIA_DETACHING, s.default.FRAG_PARSING_METADATA) || this;
									return r.id3Track = void 0, r.media = void 0, r
								}
								return i(t, e), t.prototype.destroy = function() {
									o.default.prototype.destroy.call(this)
								}, t.prototype.onMediaAttached = function(e) {
									this.media = e.media, this.media
								}, t.prototype.onMediaDetaching = function() {
									l.clearCurrentCues(this.id3Track), this.id3Track = void 0, this.media = void 0
								}, t.prototype.getID3Track = function(e) {
									for (var t = 0; t < e.length; t++) {
										var r = e[t];
										if ("metadata" === r.kind && "id3" === r.label) return l.sendAddTrackEvent(r, this.media), r
									}
									return this.media.addTextTrack("metadata", "id3")
								}, t.prototype.onFragParsingMetadata = function(e) {
									var t = e.frag,
										r = e.samples;
									this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
									for (var n = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, i = 0; i < r.length; i++) {
										var s = a.default.getID3Frames(r[i].data);
										if (s) {
											var o = r[i].pts,
												l = i < r.length - 1 ? r[i + 1].pts : t.endPTS;
											o === l && (l += 1e-4);
											for (var d = 0; d < s.length; d++) {
												var c = s[d];
												if (!a.default.isTimeStampFrame(c)) {
													var u = new n(o, l, "");
													u.value = c, this.id3Track.addCue(u)
												}
											}
										}
									}
								}, t
							}(o.default);
						t.default = d
					},
					"./src/controller/level-controller.js": function(e, t, r) {
						"use strict";
						var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var s, o = r("./src/events.js"),
							a = r("./src/event-handler.js"),
							l = r("./src/utils/logger.js"),
							d = r("./src/errors.js"),
							c = r("./src/utils/codecs.js"),
							u = r("./src/controller/level-helper.js"),
							h = (window.performance, function(e) {
								function t(t) {
									var r = e.call(this, t, o.default.MANIFEST_LOADED, o.default.LEVEL_LOADED, o.default.AUDIO_TRACK_SWITCHED, o.default.FRAG_LOADED, o.default.ERROR) || this;
									return r.canload = !1, r.currentLevelIndex = null, r.manualLevelIndex = -1, r.timer = null, s = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), r
								}
								return i(t, e), t.prototype.onHandlerDestroying = function() {
									this.clearTimer(), this.manualLevelIndex = -1
								}, t.prototype.clearTimer = function() {
									null !== this.timer && (clearTimeout(this.timer), this.timer = null)
								}, t.prototype.startLoad = function() {
									var e = this._levels;
									this.canload = !0, this.levelRetryCount = 0, e && e.forEach((function(e) {
										e.loadError = 0;
										var t = e.details;
										t && t.live && (e.details = void 0)
									})), null !== this.timer && this.loadLevel()
								}, t.prototype.stopLoad = function() {
									this.canload = !1
								}, t.prototype.onManifestLoaded = function(e) {
									var t, r = [],
										n = [],
										i = {},
										a = null,
										h = !1,
										p = !1;
									if (e.levels.forEach((function(e) {
											var t = e.attrs;
											e.loadError = 0, e.fragmentError = !1, h = h || !!e.videoCodec, p = p || !!e.audioCodec, s && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0), (a = i[e.bitrate]) ? a.url.push(e.url) : (e.url = [e.url], e.urlId = 0, i[e.bitrate] = e, r.push(e)), t && (t.AUDIO && (p = !0, u.addGroupId(a || e, "audio", t.AUDIO)), t.SUBTITLES && u.addGroupId(a || e, "text", t.SUBTITLES))
										})), h && p && (r = r.filter((function(e) {
											return !!e.videoCodec
										}))), r = r.filter((function(e) {
											var t = e.audioCodec,
												r = e.videoCodec;
											return (!t || c.isCodecSupportedInMp4(t, "audio")) && (!r || c.isCodecSupportedInMp4(r, "video"))
										})), e.audioTracks && (n = e.audioTracks.filter((function(e) {
											return !e.audioCodec || c.isCodecSupportedInMp4(e.audioCodec, "audio")
										}))).forEach((function(e, t) {
											e.id = t
										})), r.length > 0) {
										t = r[0].bitrate, r.sort((function(e, t) {
											return e.bitrate - t.bitrate
										})), this._levels = r;
										for (var f = 0; f < r.length; f++)
											if (r[f].bitrate === t) {
												this._firstLevel = f, l.logger.log("manifest loaded," + r.length + " level(s) found, first bitrate:" + t);
												break
											} this.hls.trigger(o.default.MANIFEST_PARSED, {
											levels: r,
											audioTracks: n,
											firstLevel: this._firstLevel,
											stats: e.stats,
											audio: p,
											video: h,
											altAudio: n.some((function(e) {
												return !!e.url
											}))
										})
									} else this.hls.trigger(o.default.ERROR, {
										type: d.ErrorTypes.MEDIA_ERROR,
										details: d.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
										fatal: !0,
										url: this.hls.url,
										reason: "no level with compatible codecs found in manifest"
									})
								}, Object.defineProperty(t.prototype, "levels", {
									get: function() {
										return this._levels
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "level", {
									get: function() {
										return this.currentLevelIndex
									},
									set: function(e) {
										var t = this._levels;
										t && (e = Math.min(e, t.length - 1), this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
									},
									enumerable: !0,
									configurable: !0
								}), t.prototype.setLevelInternal = function(e) {
									var t = this._levels,
										r = this.hls;
									if (e >= 0 && e < t.length) {
										if (this.clearTimer(), this.currentLevelIndex !== e) {
											l.logger.log("switching to level " + e), this.currentLevelIndex = e;
											var n = t[e];
											n.level = e, r.trigger(o.default.LEVEL_SWITCHING, n)
										}
										var i = t[e],
											s = i.details;
										if (!s || s.live) {
											var a = i.urlId;
											r.trigger(o.default.LEVEL_LOADING, {
												url: i.url[a],
												level: e,
												id: a
											})
										}
									} else r.trigger(o.default.ERROR, {
										type: d.ErrorTypes.OTHER_ERROR,
										details: d.ErrorDetails.LEVEL_SWITCH_ERROR,
										level: e,
										fatal: !1,
										reason: "invalid level idx"
									})
								}, Object.defineProperty(t.prototype, "manualLevel", {
									get: function() {
										return this.manualLevelIndex
									},
									set: function(e) {
										this.manualLevelIndex = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e)
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "firstLevel", {
									get: function() {
										return this._firstLevel
									},
									set: function(e) {
										this._firstLevel = e
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "startLevel", {
									get: function() {
										if (void 0 === this._startLevel) {
											var e = this.hls.config.startLevel;
											return void 0 !== e ? e : this._firstLevel
										}
										return this._startLevel
									},
									set: function(e) {
										this._startLevel = e
									},
									enumerable: !0,
									configurable: !0
								}), t.prototype.onError = function(e) {
									if (e.fatal) e.type === d.ErrorTypes.NETWORK_ERROR && this.clearTimer();
									else {
										var t, r = !1,
											n = !1;
										switch (e.details) {
											case d.ErrorDetails.FRAG_LOAD_ERROR:
											case d.ErrorDetails.FRAG_LOAD_TIMEOUT:
											case d.ErrorDetails.KEY_LOAD_ERROR:
											case d.ErrorDetails.KEY_LOAD_TIMEOUT:
												t = e.frag.level, n = !0;
												break;
											case d.ErrorDetails.LEVEL_LOAD_ERROR:
											case d.ErrorDetails.LEVEL_LOAD_TIMEOUT:
												t = e.context.level, r = !0;
												break;
											case d.ErrorDetails.REMUX_ALLOC_ERROR:
												t = e.level, r = !0
										}
										void 0 !== t && this.recoverLevel(e, t, r, n)
									}
								}, t.prototype.recoverLevel = function(e, t, r, n) {
									var i, s, o, a = this,
										d = this.hls.config,
										c = e.details,
										u = this._levels[t];
									if (u.loadError++, u.fragmentError = n, r) {
										if (!(this.levelRetryCount + 1 <= d.levelLoadingMaxRetry)) return l.logger.error("level controller, cannot recover from " + c + " error"), this.currentLevelIndex = null, this.clearTimer(), void(e.fatal = !0);
										s = Math.min(Math.pow(2, this.levelRetryCount) * d.levelLoadingRetryDelay, d.levelLoadingMaxRetryTimeout), this.timer = setTimeout((function() {
											return a.loadLevel()
										}), s), e.levelRetry = !0, this.levelRetryCount++, l.logger.warn("level controller, " + c + ", retry in " + s + " ms, current retry count is " + this.levelRetryCount)
									}(r || n) && ((i = u.url.length) > 1 && u.loadError < i ? (u.urlId = (u.urlId + 1) % i, u.details = void 0, l.logger.warn("level controller, " + c + " for level " + t + ": switching to redundant URL-id " + u.urlId)) : -1 === this.manualLevelIndex ? (o = 0 === t ? this._levels.length - 1 : t - 1, l.logger.warn("level controller, " + c + ": switch to " + o), this.hls.nextAutoLevel = this.currentLevelIndex = o) : n && (l.logger.warn("level controller, " + c + ": reload a fragment"), this.currentLevelIndex = null))
								}, t.prototype.onFragLoaded = function(e) {
									var t = e.frag;
									if (void 0 !== t && "main" === t.type) {
										var r = this._levels[t.level];
										void 0 !== r && (r.fragmentError = !1, r.loadError = 0, this.levelRetryCount = 0)
									}
								}, t.prototype.onLevelLoaded = function(e) {
									var t = this,
										r = e.level,
										n = e.details;
									if (r === this.currentLevelIndex) {
										var i = this._levels[r];
										if (i.fragmentError || (i.loadError = 0, this.levelRetryCount = 0), n.live) {
											var s = u.computeReloadInterval(i.details, n, e.stats.trequest);
											l.logger.log("live playlist, reload in " + Math.round(s) + " ms"), this.timer = setTimeout((function() {
												return t.loadLevel()
											}), s)
										} else this.clearTimer()
									}
								}, t.prototype.onAudioTrackSwitched = function(e) {
									var t = this.hls.audioTracks[e.id].groupId,
										r = this.hls.levels[this.currentLevelIndex];
									if (r && r.audioGroupIds) {
										for (var n = -1, i = 0; i < r.audioGroupIds.length; i++)
											if (r.audioGroupIds[i] === t) {
												n = i;
												break
											} n !== r.urlId && (r.urlId = n, this.startLoad())
									}
								}, t.prototype.loadLevel = function() {
									if (l.logger.debug("call to loadLevel"), null !== this.currentLevelIndex && this.canload) {
										var e = this._levels[this.currentLevelIndex];
										if ("object" == typeof e && e.url.length > 0) {
											var t = this.currentLevelIndex,
												r = e.urlId,
												n = e.url[r];
											l.logger.log("Attempt loading level index " + t + " with URL-id " + r), this.hls.trigger(o.default.LEVEL_LOADING, {
												url: n,
												level: t,
												id: r
											})
										}
									}
								}, Object.defineProperty(t.prototype, "nextLoadLevel", {
									get: function() {
										return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
									},
									set: function(e) {
										this.level = e, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
									},
									enumerable: !0,
									configurable: !0
								}), t
							}(a.default));
						t.default = h
					},
					"./src/controller/level-helper.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/utils/logger.js");

							function i(t, r, i) {
								var s = t[r],
									o = t[i],
									a = o.startPTS;
								e.isFinite(a) ? i > r ? (s.duration = a - s.start, s.duration < 0 && n.logger.warn("negative duration computed for frag " + s.sn + ",level " + s.level + ", there should be some duration drift between playlist and fragment!")) : (o.duration = s.start - a, o.duration < 0 && n.logger.warn("negative duration computed for frag " + o.sn + ",level " + o.level + ", there should be some duration drift between playlist and fragment!")) : o.start = i > r ? s.start + s.duration : Math.max(s.start - o.duration, 0)
							}

							function s(t, r, n, s, o, a) {
								var l = n;
								if (e.isFinite(r.startPTS)) {
									var d = Math.abs(r.startPTS - n);
									e.isFinite(r.deltaPTS) ? r.deltaPTS = Math.max(d, r.deltaPTS) : r.deltaPTS = d, l = Math.max(n, r.startPTS), n = Math.min(n, r.startPTS), s = Math.max(s, r.endPTS), o = Math.min(o, r.startDTS), a = Math.max(a, r.endDTS)
								}
								var c = n - r.start;
								r.start = r.startPTS = n, r.maxStartPTS = l, r.endPTS = s, r.startDTS = o, r.endDTS = a, r.duration = s - n;
								var u, h, p, f = r.sn;
								if (!t || f < t.startSN || f > t.endSN) return 0;
								for (u = f - t.startSN, (h = t.fragments)[u] = r, p = u; p > 0; p--) i(h, p, p - 1);
								for (p = u; p < h.length - 1; p++) i(h, p, p + 1);
								return t.PTSKnown = !0, c
							}

							function o(e, t, r) {
								if (e && t)
									for (var n = Math.max(e.startSN, t.startSN) - t.startSN, i = Math.min(e.endSN, t.endSN) - t.startSN, s = t.startSN - e.startSN, o = n; o <= i; o++) {
										var a = e.fragments[s + o],
											l = t.fragments[o];
										if (!a || !l) break;
										r(a, l, o)
									}
							}

							function a(e, t) {
								var r = t.startSN - e.startSN,
									n = e.fragments,
									i = t.fragments;
								if (!(r < 0 || r > n.length))
									for (var s = 0; s < i.length; s++) i[s].start += n[r].start
							}
							t.addGroupId = function(e, t, r) {
								switch (t) {
									case "audio":
										e.audioGroupIds || (e.audioGroupIds = []), e.audioGroupIds.push(r);
										break;
									case "text":
										e.textGroupIds || (e.textGroupIds = []), e.textGroupIds.push(r)
								}
							}, t.updatePTS = i, t.updateFragPTSDTS = s, t.mergeDetails = function(t, r) {
								r.initSegment && t.initSegment && (r.initSegment = t.initSegment);
								var i, l = 0;
								if (o(t, r, (function(t, n) {
										l = t.cc - n.cc, e.isFinite(t.startPTS) && (n.start = n.startPTS = t.startPTS, n.endPTS = t.endPTS, n.duration = t.duration, n.backtracked = t.backtracked, n.dropped = t.dropped, i = n), r.PTSKnown = !0
									})), r.PTSKnown) {
									if (l) {
										n.logger.log("discontinuity sliding from playlist, take drift into account");
										for (var d = r.fragments, c = 0; c < d.length; c++) d[c].cc += l
									}
									i ? s(r, i, i.startPTS, i.endPTS, i.startDTS, i.endDTS) : a(t, r), r.PTSKnown = t.PTSKnown
								}
							}, t.mergeSubtitlePlaylists = function(e, t, r) {
								void 0 === r && (r = 0);
								var n = -1;
								o(e, t, (function(e, t, r) {
									t.start = e.start, n = r
								}));
								var i = t.fragments;
								if (n < 0) i.forEach((function(e) {
									e.start += r
								}));
								else
									for (var s = n + 1; s < i.length; s++) i[s].start = i[s - 1].start + i[s - 1].duration
							}, t.mapFragmentIntersection = o, t.adjustSliding = a, t.computeReloadInterval = function(e, t, r) {
								var n = 1e3 * (t.averagetargetduration ? t.averagetargetduration : t.targetduration),
									i = n / 2;
								return e && t.endSN === e.endSN && (n = i), r && (n = Math.max(i, n - (window.performance.now() - r))), Math.round(n)
							}
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/stream-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var s = r("./src/utils/binary-search.js"),
								o = r("./src/utils/buffer-helper.js"),
								a = r("./src/demux/demuxer.js"),
								l = r("./src/events.js"),
								d = r("./src/controller/fragment-tracker.js"),
								c = r("./src/loader/fragment.js"),
								u = r("./src/loader/playlist-loader.js"),
								h = r("./src/controller/level-helper.js"),
								p = r("./src/utils/time-ranges.js"),
								f = r("./src/errors.js"),
								g = r("./src/utils/logger.js"),
								v = r("./src/utils/discontinuities.js"),
								m = r("./src/controller/fragment-finders.js"),
								b = r("./src/controller/gap-controller.js"),
								y = r("./src/controller/base-stream-controller.js"),
								_ = function(t) {
									function r(e, r) {
										var n = t.call(this, e, l.default.MEDIA_ATTACHED, l.default.MEDIA_DETACHING, l.default.MANIFEST_LOADING, l.default.MANIFEST_PARSED, l.default.LEVEL_LOADED, l.default.KEY_LOADED, l.default.FRAG_LOADED, l.default.FRAG_LOAD_EMERGENCY_ABORTED, l.default.FRAG_PARSING_INIT_SEGMENT, l.default.FRAG_PARSING_DATA, l.default.FRAG_PARSED, l.default.ERROR, l.default.AUDIO_TRACK_SWITCHING, l.default.AUDIO_TRACK_SWITCHED, l.default.BUFFER_CREATED, l.default.BUFFER_APPENDED, l.default.BUFFER_FLUSHED) || this;
										return n.fragmentTracker = r, n.config = e.config, n.audioCodecSwap = !1, n._state = y.State.STOPPED, n.stallReported = !1, n.gapController = null, n
									}
									return i(r, t), r.prototype.startLoad = function(e) {
										if (this.levels) {
											var t = this.lastCurrentTime,
												r = this.hls;
											if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
												var n = r.startLevel; - 1 === n && (n = 0, this.bitrateTest = !0), this.level = r.nextLoadLevel = n, this.loadedmetadata = !1
											}
											t > 0 && -1 === e && (g.logger.log("override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t), this.state = y.State.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
										} else this.forceStartLoad = !0, this.state = y.State.STOPPED
									}, r.prototype.stopLoad = function() {
										this.forceStartLoad = !1, t.prototype.stopLoad.call(this)
									}, r.prototype.doTick = function() {
										switch (this.state) {
											case y.State.BUFFER_FLUSHING:
												this.fragLoadError = 0;
												break;
											case y.State.IDLE:
												this._doTickIdle();
												break;
											case y.State.WAITING_LEVEL:
												var e = this.levels[this.level];
												e && e.details && (this.state = y.State.IDLE);
												break;
											case y.State.FRAG_LOADING_WAITING_RETRY:
												var t = window.performance.now(),
													r = this.retryDate;
												(!r || t >= r || this.media && this.media.seeking) && (g.logger.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = y.State.IDLE);
												break;
											case y.State.ERROR:
											case y.State.STOPPED:
											case y.State.FRAG_LOADING:
											case y.State.PARSING:
											case y.State.PARSED:
											case y.State.ENDED:
										}
										this._checkBuffer(), this._checkFragmentChanged()
									}, r.prototype._doTickIdle = function() {
										var e = this.hls,
											t = e.config,
											r = this.media;
										if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && t.startFragPrefetch)) {
											var n;
											n = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
											var i = e.nextLoadLevel,
												s = this.levels[i];
											if (s) {
												var a, d = s.bitrate;
												a = d ? Math.max(8 * t.maxBufferSize / d, t.maxBufferLength) : t.maxBufferLength, a = Math.min(a, t.maxMaxBufferLength);
												var c = o.BufferHelper.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, n, t.maxBufferHole),
													u = c.len;
												if (!(u >= a)) {
													g.logger.trace("buffer length of " + u.toFixed(3) + " is below max of " + a.toFixed(3) + ". checking for more payload ..."), this.level = e.nextLoadLevel = i;
													var h = s.details;
													if (!h || h.live && this.levelLastLoaded !== i) this.state = y.State.WAITING_LEVEL;
													else {
														if (this._streamEnded(c, h)) {
															var p = {};
															return this.altAudio && (p.type = "video"), this.hls.trigger(l.default.BUFFER_EOS, p), void(this.state = y.State.ENDED)
														}
														this._fetchPayloadOrEos(n, c, h)
													}
												}
											}
										}
									}, r.prototype._fetchPayloadOrEos = function(e, t, r) {
										var n = this.fragPrevious,
											i = this.level,
											s = r.fragments,
											o = s.length;
										if (0 !== o) {
											var a, l = s[0].start,
												d = s[o - 1].start + s[o - 1].duration,
												c = t.end;
											if (r.initSegment && !r.initSegment.data) a = r.initSegment;
											else if (r.live) {
												var u = this.config.initialLiveManifestSize;
												if (o < u) return void g.logger.warn("Can not start playback of a level, reason: not enough fragments " + o + " < " + u);
												if (null === (a = this._ensureFragmentAtLivePoint(r, c, l, d, n, s, o))) return
											} else c < l && (a = s[0]);
											a || (a = this._findFragment(l, n, o, s, c, d, r)), a && (a.encrypted ? (g.logger.log("Loading key for " + a.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + i), this._loadKey(a)) : (g.logger.log("Loading " + a.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + i + ", currentTime:" + e.toFixed(3) + ",bufferEnd:" + c.toFixed(3)), this._loadFragment(a)))
										}
									}, r.prototype._ensureFragmentAtLivePoint = function(e, t, r, n, i, o, a) {
										var l, d = this.hls.config,
											c = this.media,
											u = void 0 !== d.liveMaxLatencyDuration ? d.liveMaxLatencyDuration : d.liveMaxLatencyDurationCount * e.targetduration;
										if (t < Math.max(r - d.maxFragLookUpTolerance, n - u)) {
											var h = this.liveSyncPosition = this.computeLivePosition(r, e);
											g.logger.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + h.toFixed(3)), t = h, c && c.readyState && c.duration > h && (c.currentTime = h), this.nextLoadPosition = h
										}
										if (e.PTSKnown && t > n && c && c.readyState) return null;
										if (this.startFragRequested && !e.PTSKnown) {
											if (i)
												if (e.hasProgramDateTime) g.logger.log("live playlist, switching playlist, load frag with same PDT: " + i.programDateTime), l = m.findFragmentByPDT(o, i.endProgramDateTime, d.maxFragLookUpTolerance);
												else {
													var p = i.sn + 1;
													if (p >= e.startSN && p <= e.endSN) {
														var f = o[p - e.startSN];
														i.cc === f.cc && (l = f, g.logger.log("live playlist, switching playlist, load frag with next SN: " + l.sn))
													}
													l || (l = s.default.search(o, (function(e) {
														return i.cc - e.cc
													}))) && g.logger.log("live playlist, switching playlist, load frag with same CC: " + l.sn)
												} l || (l = o[Math.min(a - 1, Math.round(a / 2))], g.logger.log("live playlist, switching playlist, unknown, load middle frag : " + l.sn))
										}
										return l
									}, r.prototype._findFragment = function(e, t, r, n, i, s, o) {
										var a, l = this.hls.config;
										if (i < s) {
											var d = i > s - l.maxFragLookUpTolerance ? 0 : l.maxFragLookUpTolerance;
											a = m.findFragmentByPTS(t, n, i, d)
										} else a = n[r - 1];
										if (a) {
											var c = a.sn - o.startSN,
												u = t && a.level === t.level,
												h = n[c - 1],
												p = n[c + 1];
											if (t && a.sn === t.sn)
												if (u && !a.backtracked)
													if (a.sn < o.endSN) {
														var f = t.deltaPTS;
														f && f > l.maxBufferHole && t.dropped && c ? (a = h, g.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")) : (a = p, g.logger.log("SN just loaded, load next one: " + a.sn, a))
													} else a = null;
											else a.backtracked && (p && p.backtracked ? (g.logger.warn("Already backtracked from fragment " + p.sn + ", will not backtrack to fragment " + a.sn + ". Loading fragment " + p.sn), a = p) : (g.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), a.dropped = 0, h ? (a = h).backtracked = !0 : c && (a = null)))
										}
										return a
									}, r.prototype._loadKey = function(e) {
										this.state = y.State.KEY_LOADING, this.hls.trigger(l.default.KEY_LOADING, {
											frag: e
										})
									}, r.prototype._loadFragment = function(t) {
										var r = this.fragmentTracker.getState(t);
										this.fragCurrent = t, this.startFragRequested = !0, e.isFinite(t.sn) && !t.bitrateTest && (this.nextLoadPosition = t.start + t.duration), t.backtracked || r === d.FragmentState.NOT_LOADED || r === d.FragmentState.PARTIAL ? (t.autoLevel = this.hls.autoLevelEnabled, t.bitrateTest = this.bitrateTest, this.hls.trigger(l.default.FRAG_LOADING, {
											frag: t
										}), this.demuxer || (this.demuxer = new a.default(this.hls, "main")), this.state = y.State.FRAG_LOADING) : r === d.FragmentState.APPENDING && this._reduceMaxBufferLength(t.duration) && this.fragmentTracker.removeFragment(t)
									}, Object.defineProperty(r.prototype, "state", {
										get: function() {
											return this._state
										},
										set: function(e) {
											if (this.state !== e) {
												var t = this.state;
												this._state = e, g.logger.log("main stream:" + t + "->" + e), this.hls.trigger(l.default.STREAM_STATE_TRANSITION, {
													previousState: t,
													nextState: e
												})
											}
										},
										enumerable: !0,
										configurable: !0
									}), r.prototype.getBufferedFrag = function(e) {
										return this.fragmentTracker.getBufferedFrag(e, u.default.LevelType.MAIN)
									}, Object.defineProperty(r.prototype, "currentLevel", {
										get: function() {
											var e = this.media;
											if (e) {
												var t = this.getBufferedFrag(e.currentTime);
												if (t) return t.level
											}
											return -1
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(r.prototype, "nextBufferedFrag", {
										get: function() {
											var e = this.media;
											return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null
										},
										enumerable: !0,
										configurable: !0
									}), r.prototype.followingBufferedFrag = function(e) {
										return e ? this.getBufferedFrag(e.endPTS + .5) : null
									}, Object.defineProperty(r.prototype, "nextLevel", {
										get: function() {
											var e = this.nextBufferedFrag;
											return e ? e.level : -1
										},
										enumerable: !0,
										configurable: !0
									}), r.prototype._checkFragmentChanged = function() {
										var e, t, r = this.media;
										if (r && r.readyState && !1 === r.seeking && ((t = r.currentTime) > this.lastCurrentTime && (this.lastCurrentTime = t), o.BufferHelper.isBuffered(r, t) ? e = this.getBufferedFrag(t) : o.BufferHelper.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)), e)) {
											var n = e;
											if (n !== this.fragPlaying) {
												this.hls.trigger(l.default.FRAG_CHANGED, {
													frag: n
												});
												var i = n.level;
												this.fragPlaying && this.fragPlaying.level === i || this.hls.trigger(l.default.LEVEL_SWITCHED, {
													level: i
												}), this.fragPlaying = n
											}
										}
									}, r.prototype.immediateLevelSwitch = function() {
										if (g.logger.log("immediateLevelSwitch"), !this.immediateSwitch) {
											this.immediateSwitch = !0;
											var t = this.media,
												r = void 0;
											t ? (r = t.paused, t.pause()) : r = !0, this.previouslyPaused = r
										}
										var n = this.fragCurrent;
										n && n.loader && n.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(0, e.POSITIVE_INFINITY)
									}, r.prototype.immediateLevelSwitchEnd = function() {
										var e = this.media;
										e && e.buffered.length && (this.immediateSwitch = !1, o.BufferHelper.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play())
									}, r.prototype.nextLevelSwitch = function() {
										var t = this.media;
										if (t && t.readyState) {
											var r, n = void 0,
												i = void 0;
											if ((r = this.getBufferedFrag(t.currentTime)) && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), t.paused) n = 0;
											else {
												var s = this.hls.nextLoadLevel,
													o = this.levels[s],
													a = this.fragLastKbps;
												n = a && this.fragCurrent ? this.fragCurrent.duration * o.bitrate / (1e3 * a) + 1 : 0
											}
											if ((i = this.getBufferedFrag(t.currentTime + n)) && (i = this.followingBufferedFrag(i))) {
												var l = this.fragCurrent;
												l && l.loader && l.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(i.maxStartPTS, e.POSITIVE_INFINITY)
											}
										}
									}, r.prototype.flushMainBuffer = function(e, t) {
										this.state = y.State.BUFFER_FLUSHING;
										var r = {
											startOffset: e,
											endOffset: t
										};
										this.altAudio && (r.type = "video"), this.hls.trigger(l.default.BUFFER_FLUSHING, r)
									}, r.prototype.onMediaAttached = function(e) {
										var t = this.media = this.mediaBuffer = e.media;
										this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("seeked", this.onvseeked), t.addEventListener("ended", this.onvended);
										var r = this.config;
										this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition), this.gapController = new b.default(r, t, this.fragmentTracker, this.hls)
									}, r.prototype.onMediaDetaching = function() {
										var e = this.media;
										e && e.ended && (g.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
										var t = this.levels;
										t && t.forEach((function(e) {
											e.details && e.details.fragments.forEach((function(e) {
												e.backtracked = void 0
											}))
										})), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
									}, r.prototype.onMediaSeeked = function() {
										var t = this.media,
											r = t ? t.currentTime : void 0;
										e.isFinite(r) && g.logger.log("media seeked to " + r.toFixed(3)), this.tick()
									}, r.prototype.onManifestLoading = function() {
										g.logger.log("trigger BUFFER_RESET"), this.hls.trigger(l.default.BUFFER_RESET), this.fragmentTracker.removeAllFragments(), this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
									}, r.prototype.onManifestParsed = function(e) {
										var t, r = !1,
											n = !1;
										e.levels.forEach((function(e) {
											(t = e.audioCodec) && (-1 !== t.indexOf("mp4a.40.2") && (r = !0), -1 !== t.indexOf("mp4a.40.5") && (n = !0))
										})), this.audioCodecSwitch = r && n, this.audioCodecSwitch && g.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startFragRequested = !1;
										var i = this.config;
										(i.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(i.startPosition)
									}, r.prototype.onLevelLoaded = function(t) {
										var r = t.details,
											n = t.level,
											i = this.levels[this.levelLastLoaded],
											s = this.levels[n],
											o = r.totalduration,
											a = 0;
										if (g.logger.log("level " + n + " loaded [" + r.startSN + "," + r.endSN + "],duration:" + o), r.live) {
											var d = s.details;
											d && r.fragments.length > 0 ? (h.mergeDetails(d, r), a = r.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(a, d), r.PTSKnown && e.isFinite(a) ? g.logger.log("live playlist sliding:" + a.toFixed(3)) : (g.logger.log("live playlist - outdated PTS, unknown sliding"), v.alignStream(this.fragPrevious, i, r))) : (g.logger.log("live playlist - first load, unknown sliding"), r.PTSKnown = !1, v.alignStream(this.fragPrevious, i, r))
										} else r.PTSKnown = !1;
										if (s.details = r, this.levelLastLoaded = n, this.hls.trigger(l.default.LEVEL_UPDATED, {
												details: r,
												level: n
											}), !1 === this.startFragRequested) {
											if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
												var c = r.startTimeOffset;
												e.isFinite(c) ? (c < 0 && (g.logger.log("negative start time offset " + c + ", count from end of last fragment"), c = a + o + c), g.logger.log("start time offset found in playlist, adjust startPosition to " + c), this.startPosition = c) : r.live ? (this.startPosition = this.computeLivePosition(a, r), g.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0, this.lastCurrentTime = this.startPosition
											}
											this.nextLoadPosition = this.startPosition
										}
										this.state === y.State.WAITING_LEVEL && (this.state = y.State.IDLE), this.tick()
									}, r.prototype.onKeyLoaded = function() {
										this.state === y.State.KEY_LOADING && (this.state = y.State.IDLE, this.tick())
									}, r.prototype.onFragLoaded = function(e) {
										var t = this.fragCurrent,
											r = this.hls,
											n = this.levels,
											i = this.media,
											s = e.frag;
										if (this.state === y.State.FRAG_LOADING && t && "main" === s.type && s.level === t.level && s.sn === t.sn) {
											var o = e.stats,
												d = n[t.level],
												c = d.details;
											if (this.bitrateTest = !1, this.stats = o, g.logger.log("Loaded " + t.sn + " of [" + c.startSN + " ," + c.endSN + "],level " + t.level), s.bitrateTest && r.nextLoadLevel) this.state = y.State.IDLE, this.startFragRequested = !1, o.tparsed = o.tbuffered = window.performance.now(), r.trigger(l.default.FRAG_BUFFERED, {
												stats: o,
												frag: t,
												id: "main"
											}), this.tick();
											else if ("initSegment" === s.sn) this.state = y.State.IDLE, o.tparsed = o.tbuffered = window.performance.now(), c.initSegment.data = e.payload, r.trigger(l.default.FRAG_BUFFERED, {
												stats: o,
												frag: t,
												id: "main"
											}), this.tick();
											else {
												g.logger.log("Parsing " + t.sn + " of [" + c.startSN + " ," + c.endSN + "],level " + t.level + ", cc " + t.cc), this.state = y.State.PARSING, this.pendingBuffering = !0, this.appended = !1, s.bitrateTest && (s.bitrateTest = !1, this.fragmentTracker.onFragLoaded({
													frag: s
												}));
												var u = !(i && i.seeking) && (c.PTSKnown || !c.live),
													h = c.initSegment ? c.initSegment.data : [],
													p = this._getAudioCodec(d);
												(this.demuxer = this.demuxer || new a.default(this.hls, "main")).push(e.payload, h, p, d.videoCodec, t, c.totalduration, u)
											}
										}
										this.fragLoadError = 0
									}, r.prototype.onFragParsingInitSegment = function(e) {
										var t = this.fragCurrent,
											r = e.frag;
										if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === y.State.PARSING) {
											var n = e.tracks,
												i = void 0,
												s = void 0;
											if (n.audio && this.altAudio && delete n.audio, s = n.audio) {
												var o = this.levels[this.level].audioCodec,
													a = navigator.userAgent.toLowerCase();
												o && this.audioCodecSwap && (g.logger.log("swapping playlist audio codec"), o = -1 !== o.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== s.metadata.channelCount && -1 === a.indexOf("firefox") && (o = "mp4a.40.5"), -1 !== a.indexOf("android") && "audio/mpeg" !== s.container && (o = "mp4a.40.2", g.logger.log("Android: force audio codec to " + o)), s.levelCodec = o, s.id = e.id
											}
											for (i in (s = n.video) && (s.levelCodec = this.levels[this.level].videoCodec, s.id = e.id), this.hls.trigger(l.default.BUFFER_CODECS, n), n) {
												s = n[i], g.logger.log("main track:" + i + ",container:" + s.container + ",codecs[level/parsed]=[" + s.levelCodec + "/" + s.codec + "]");
												var d = s.initSegment;
												d && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(l.default.BUFFER_APPENDING, {
													type: i,
													data: d,
													parent: "main",
													content: "initSegment"
												}))
											}
											this.tick()
										}
									}, r.prototype.onFragParsingData = function(t) {
										var r = this,
											n = this.fragCurrent,
											i = t.frag;
										if (n && "main" === t.id && i.sn === n.sn && i.level === n.level && ("audio" !== t.type || !this.altAudio) && this.state === y.State.PARSING) {
											var s = this.levels[this.level],
												o = n;
											if (e.isFinite(t.endPTS) || (t.endPTS = t.startPTS + n.duration, t.endDTS = t.startDTS + n.duration), !0 === t.hasAudio && o.addElementaryStream(c.default.ElementaryStreamTypes.AUDIO), !0 === t.hasVideo && o.addElementaryStream(c.default.ElementaryStreamTypes.VIDEO), g.logger.log("Parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb + ",dropped:" + (t.dropped || 0)), "video" === t.type)
												if (o.dropped = t.dropped, o.dropped)
													if (o.backtracked) g.logger.warn("Already backtracked on this fragment, appending with the gap", o.sn);
													else {
														var a = s.details;
														if (!a || o.sn !== a.startSN) return g.logger.warn("missing video frame(s), backtracking fragment", o.sn), this.fragmentTracker.removeFragment(o), o.backtracked = !0, this.nextLoadPosition = t.startPTS, this.state = y.State.IDLE, this.fragPrevious = o, void this.tick();
														g.logger.warn("missing video frame(s) on first frag, appending with gap", o.sn)
													}
											else o.backtracked = !1;
											var d = h.updateFragPTSDTS(s.details, o, t.startPTS, t.endPTS, t.startDTS, t.endDTS),
												u = this.hls;
											u.trigger(l.default.LEVEL_PTS_UPDATED, {
												details: s.details,
												level: this.level,
												drift: d,
												type: t.type,
												start: t.startPTS,
												end: t.endPTS
											}), [t.data1, t.data2].forEach((function(e) {
												e && e.length && r.state === y.State.PARSING && (r.appended = !0, r.pendingBuffering = !0, u.trigger(l.default.BUFFER_APPENDING, {
													type: t.type,
													data: e,
													parent: "main",
													content: "data"
												}))
											})), this.tick()
										}
									}, r.prototype.onFragParsed = function(e) {
										var t = this.fragCurrent,
											r = e.frag;
										t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === y.State.PARSING && (this.stats.tparsed = window.performance.now(), this.state = y.State.PARSED, this._checkAppendedParsed())
									}, r.prototype.onAudioTrackSwitching = function(t) {
										var r = !!t.url,
											n = t.id;
										if (!r) {
											if (this.mediaBuffer !== this.media) {
												g.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
												var i = this.fragCurrent;
												i.loader && (g.logger.log("switching to main audio track, cancel main fragment load"), i.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = y.State.IDLE
											}
											var s = this.hls;
											s.trigger(l.default.BUFFER_FLUSHING, {
												startOffset: 0,
												endOffset: e.POSITIVE_INFINITY,
												type: "audio"
											}), s.trigger(l.default.AUDIO_TRACK_SWITCHED, {
												id: n
											}), this.altAudio = !1
										}
									}, r.prototype.onAudioTrackSwitched = function(e) {
										var t = e.id,
											r = !!this.hls.audioTracks[t].url;
										if (r) {
											var n = this.videoBuffer;
											n && this.mediaBuffer !== n && (g.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n)
										}
										this.altAudio = r, this.tick()
									}, r.prototype.onBufferCreated = function(e) {
										var t, r, n = e.tracks,
											i = !1;
										for (var s in n) {
											var o = n[s];
											"main" === o.id ? (r = s, t = o, "video" === s && (this.videoBuffer = n[s].buffer)) : i = !0
										}
										i && t ? (g.logger.log("alternate track found, use " + r + ".buffered to schedule main fragment loading"), this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media
									}, r.prototype.onBufferAppended = function(e) {
										if ("main" === e.parent) {
											var t = this.state;
											t !== y.State.PARSING && t !== y.State.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
										}
									}, r.prototype._checkAppendedParsed = function() {
										if (!(this.state !== y.State.PARSED || this.appended && this.pendingBuffering)) {
											var e = this.fragCurrent;
											if (e) {
												var t = this.mediaBuffer ? this.mediaBuffer : this.media;
												g.logger.log("main buffered : " + p.default.toString(t.buffered)), this.fragPrevious = e;
												var r = this.stats;
												r.tbuffered = window.performance.now(), this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)), this.hls.trigger(l.default.FRAG_BUFFERED, {
													stats: r,
													frag: e,
													id: "main"
												}), this.state = y.State.IDLE
											}
											this.tick()
										}
									}, r.prototype.onError = function(t) {
										var r = t.frag || this.fragCurrent;
										if (!r || "main" === r.type) {
											var n = !!this.media && o.BufferHelper.isBuffered(this.media, this.media.currentTime) && o.BufferHelper.isBuffered(this.media, this.media.currentTime + .5);
											switch (t.details) {
												case f.ErrorDetails.FRAG_LOAD_ERROR:
												case f.ErrorDetails.FRAG_LOAD_TIMEOUT:
												case f.ErrorDetails.KEY_LOAD_ERROR:
												case f.ErrorDetails.KEY_LOAD_TIMEOUT:
													if (!t.fatal)
														if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
															var i = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
															g.logger.warn("mediaController: frag loading failed, retry in " + i + " ms"), this.retryDate = window.performance.now() + i, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = y.State.FRAG_LOADING_WAITING_RETRY
														} else g.logger.error("mediaController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = y.State.ERROR;
													break;
												case f.ErrorDetails.LEVEL_LOAD_ERROR:
												case f.ErrorDetails.LEVEL_LOAD_TIMEOUT:
													this.state !== y.State.ERROR && (t.fatal ? (this.state = y.State.ERROR, g.logger.warn("streamController: " + t.details + ",switch to " + this.state + " state ...")) : t.levelRetry || this.state !== y.State.WAITING_LEVEL || (this.state = y.State.IDLE));
													break;
												case f.ErrorDetails.BUFFER_FULL_ERROR:
													"main" !== t.parent || this.state !== y.State.PARSING && this.state !== y.State.PARSED || (n ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = y.State.IDLE) : (g.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, e.POSITIVE_INFINITY)))
											}
										}
									}, r.prototype._reduceMaxBufferLength = function(e) {
										var t = this.config;
										return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, g.logger.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"), !0)
									}, r.prototype._checkBuffer = function() {
										var e = this.media;
										if (e && 0 !== e.readyState) {
											var t = (this.mediaBuffer ? this.mediaBuffer : e).buffered;
											!this.loadedmetadata && t.length ? (this.loadedmetadata = !0, this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, t)
										}
									}, r.prototype.onFragLoadEmergencyAborted = function() {
										this.state = y.State.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick()
									}, r.prototype.onBufferFlushed = function() {
										var e = this.mediaBuffer ? this.mediaBuffer : this.media;
										e && this.fragmentTracker.detectEvictedFragments(c.default.ElementaryStreamTypes.VIDEO, e.buffered), this.state = y.State.IDLE, this.fragPrevious = null
									}, r.prototype.swapAudioCodec = function() {
										this.audioCodecSwap = !this.audioCodecSwap
									}, r.prototype.computeLivePosition = function(e, t) {
										var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;
										return e + Math.max(0, t.totalduration - r)
									}, r.prototype._seekToStartPos = function() {
										var e = this.media,
											t = e.currentTime,
											r = e.seeking ? t : this.startPosition;
										t !== r && (g.logger.log("target start position not buffered, seek to buffered.start(0) " + r + " from current time " + t + " "), e.currentTime = r)
									}, r.prototype._getAudioCodec = function(e) {
										var t = this.config.defaultAudioCodec || e.audioCodec;
										return this.audioCodecSwap && (g.logger.log("swapping playlist audio codec"), t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), t
									}, Object.defineProperty(r.prototype, "liveSyncPosition", {
										get: function() {
											return this._liveSyncPosition
										},
										set: function(e) {
											this._liveSyncPosition = e
										},
										enumerable: !0,
										configurable: !0
									}), r
								}(y.default);
							t.default = _
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/subtitle-stream-controller.js": function(e, t, r) {
						"use strict";
						var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var s = r("./src/events.js"),
							o = r("./src/utils/logger.js"),
							a = r("./src/crypt/decrypter.js"),
							l = r("./src/utils/buffer-helper.js"),
							d = r("./src/controller/fragment-finders.js"),
							c = r("./src/controller/fragment-tracker.js"),
							u = r("./src/controller/base-stream-controller.js"),
							h = r("./src/controller/level-helper.js"),
							p = window.performance,
							f = function(e) {
								function t(t, r) {
									var n = e.call(this, t, s.default.MEDIA_ATTACHED, s.default.MEDIA_DETACHING, s.default.ERROR, s.default.KEY_LOADED, s.default.FRAG_LOADED, s.default.SUBTITLE_TRACKS_UPDATED, s.default.SUBTITLE_TRACK_SWITCH, s.default.SUBTITLE_TRACK_LOADED, s.default.SUBTITLE_FRAG_PROCESSED, s.default.LEVEL_UPDATED) || this;
									return n.fragmentTracker = r, n.config = t.config, n.state = u.State.STOPPED, n.tracks = [], n.tracksBuffered = [], n.currentTrackId = -1, n.decrypter = new a.default(t, t.config), n.lastAVStart = 0, n._onMediaSeeking = n.onMediaSeeking.bind(n), n
								}
								return i(t, e), t.prototype.onSubtitleFragProcessed = function(e) {
									var t = e.frag,
										r = e.success;
									if (this.fragPrevious = t, this.state = u.State.IDLE, r) {
										var n = this.tracksBuffered[this.currentTrackId];
										if (n) {
											for (var i, s = t.start, o = 0; o < n.length; o++)
												if (s >= n[o].start && s <= n[o].end) {
													i = n[o];
													break
												} var a = t.start + t.duration;
											i ? i.end = a : (i = {
												start: s,
												end: a
											}, n.push(i))
										}
									}
								}, t.prototype.onMediaAttached = function(e) {
									var t = e.media;
									this.media = t, t.addEventListener("seeking", this._onMediaSeeking), this.state = u.State.IDLE
								}, t.prototype.onMediaDetaching = function() {
									this.media.removeEventListener("seeking", this._onMediaSeeking), this.media = null, this.state = u.State.STOPPED
								}, t.prototype.onError = function(e) {
									var t = e.frag;
									t && "subtitle" === t.type && (this.state = u.State.IDLE)
								}, t.prototype.onSubtitleTracksUpdated = function(e) {
									var t = this;
									o.logger.log("subtitle tracks updated"), this.tracksBuffered = [], this.tracks = e.subtitleTracks, this.tracks.forEach((function(e) {
										t.tracksBuffered[e.id] = []
									}))
								}, t.prototype.onSubtitleTrackSwitch = function(e) {
									if (this.currentTrackId = e.id, this.tracks && -1 !== this.currentTrackId) {
										var t = this.tracks[this.currentTrackId];
										t && t.details && this.setInterval(500)
									} else this.clearInterval()
								}, t.prototype.onSubtitleTrackLoaded = function(e) {
									var t = e.id,
										r = e.details,
										n = this.currentTrackId,
										i = this.tracks,
										s = i[n];
									t >= i.length || t !== n || !s || (r.live && h.mergeSubtitlePlaylists(s.details, r, this.lastAVStart), s.details = r, this.setInterval(500))
								}, t.prototype.onKeyLoaded = function() {
									this.state === u.State.KEY_LOADING && (this.state = u.State.IDLE)
								}, t.prototype.onFragLoaded = function(e) {
									var t = this.fragCurrent,
										r = e.frag.decryptdata,
										n = e.frag,
										i = this.hls;
									if (this.state === u.State.FRAG_LOADING && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && r && r.key && "AES-128" === r.method) {
										var o = p.now();
										this.decrypter.decrypt(e.payload, r.key.buffer, r.iv.buffer, (function(e) {
											var t = p.now();
											i.trigger(s.default.FRAG_DECRYPTED, {
												frag: n,
												payload: e,
												stats: {
													tstart: o,
													tdecrypt: t
												}
											})
										}))
									}
								}, t.prototype.onLevelUpdated = function(e) {
									var t = e.details.fragments;
									this.lastAVStart = t.length ? t[0].start : 0
								}, t.prototype.doTick = function() {
									if (this.media) switch (this.state) {
										case u.State.IDLE:
											var e = this,
												t = e.config,
												r = e.currentTrackId,
												n = e.fragmentTracker,
												i = e.media,
												a = e.tracks;
											if (!a || !a[r] || !a[r].details) break;
											var h = t.maxBufferHole,
												p = t.maxFragLookUpTolerance,
												f = Math.min(t.maxBufferLength, t.maxMaxBufferLength),
												g = l.BufferHelper.bufferedInfo(this._getBuffered(), i.currentTime, h),
												v = g.end,
												m = g.len,
												b = a[r].details,
												y = b.fragments,
												_ = y.length,
												w = y[_ - 1].start + y[_ - 1].duration;
											if (m > f) return;
											var E = void 0,
												S = this.fragPrevious;
											v < w ? (S && b.hasProgramDateTime && (E = d.findFragmentByPDT(y, S.endProgramDateTime, p)), E || (E = d.findFragmentByPTS(S, y, v, p))) : E = y[_ - 1], E && E.encrypted ? (o.logger.log("Loading key for " + E.sn), this.state = u.State.KEY_LOADING, this.hls.trigger(s.default.KEY_LOADING, {
												frag: E
											})) : E && n.getState(E) === c.FragmentState.NOT_LOADED && (this.fragCurrent = E, this.state = u.State.FRAG_LOADING, this.hls.trigger(s.default.FRAG_LOADING, {
												frag: E
											}))
									} else this.state = u.State.IDLE
								}, t.prototype.stopLoad = function() {
									this.lastAVStart = 0, e.prototype.stopLoad.call(this)
								}, t.prototype._getBuffered = function() {
									return this.tracksBuffered[this.currentTrackId] || []
								}, t.prototype.onMediaSeeking = function() {
									this.fragPrevious = null
								}, t
							}(u.default);
						t.SubtitleStreamController = f
					},
					"./src/controller/subtitle-track-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var s = r("./src/events.js"),
								o = r("./src/event-handler.js"),
								a = r("./src/utils/logger.js"),
								l = r("./src/controller/level-helper.js"),
								d = function(t) {
									function r(e) {
										var r = t.call(this, e, s.default.MEDIA_ATTACHED, s.default.MEDIA_DETACHING, s.default.MANIFEST_LOADED, s.default.SUBTITLE_TRACK_LOADED) || this;
										return r.tracks = [], r.trackId = -1, r.media = null, r.stopped = !0, r.subtitleDisplay = !0, r
									}
									return i(r, t), r.prototype.destroy = function() {
										o.default.prototype.destroy.call(this)
									}, r.prototype.onMediaAttached = function(e) {
										var t = this;
										this.media = e.media, this.media && (this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack, delete this.queuedDefaultTrack), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval((function() {
											t.trackChangeListener()
										}), 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
									}, r.prototype.onMediaDetaching = function() {
										this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), this.media = null)
									}, r.prototype.onManifestLoaded = function(e) {
										var t = this,
											r = e.subtitles || [];
										this.tracks = r, this.hls.trigger(s.default.SUBTITLE_TRACKS_UPDATED, {
											subtitleTracks: r
										}), r.forEach((function(e) {
											e.default && (t.media ? t.subtitleTrack = e.id : t.queuedDefaultTrack = e.id)
										}))
									}, r.prototype.onSubtitleTrackLoaded = function(e) {
										var t = this,
											r = e.id,
											n = e.details,
											i = this.trackId,
											s = this.tracks,
											o = s[i];
										if (r >= s.length || r !== i || !o || this.stopped) this._clearReloadTimer();
										else if (a.logger.log("subtitle track " + r + " loaded"), n.live) {
											var d = l.computeReloadInterval(o.details, n, e.stats.trequest);
											a.logger.log("Reloading live subtitle playlist in " + d + "ms"), this.timer = setTimeout((function() {
												t._loadCurrentTrack()
											}), d)
										} else this._clearReloadTimer()
									}, r.prototype.startLoad = function() {
										this.stopped = !1, this._loadCurrentTrack()
									}, r.prototype.stopLoad = function() {
										this.stopped = !0, this._clearReloadTimer()
									}, Object.defineProperty(r.prototype, "subtitleTracks", {
										get: function() {
											return this.tracks
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(r.prototype, "subtitleTrack", {
										get: function() {
											return this.trackId
										},
										set: function(e) {
											this.trackId !== e && (this._toggleTrackModes(e), this._setSubtitleTrackInternal(e))
										},
										enumerable: !0,
										configurable: !0
									}), r.prototype._clearReloadTimer = function() {
										this.timer && (clearTimeout(this.timer), this.timer = null)
									}, r.prototype._loadCurrentTrack = function() {
										var e = this.trackId,
											t = this.tracks,
											r = this.hls,
											n = t[e];
										e < 0 || !n || n.details && !n.details.live || (a.logger.log("Loading subtitle track " + e), r.trigger(s.default.SUBTITLE_TRACK_LOADING, {
											url: n.url,
											id: e
										}))
									}, r.prototype._toggleTrackModes = function(e) {
										var t = this.media,
											r = this.subtitleDisplay,
											n = this.trackId;
										if (t) {
											var i = c(t.textTracks);
											if (-1 === e)[].slice.call(i).forEach((function(e) {
												e.mode = "disabled"
											}));
											else {
												var s = i[n];
												s && (s.mode = "disabled")
											}
											var o = i[e];
											o && (o.mode = r ? "showing" : "hidden")
										}
									}, r.prototype._setSubtitleTrackInternal = function(t) {
										var r = this.hls,
											n = this.tracks;
										!e.isFinite(t) || t < -1 || t >= n.length || (this.trackId = t, a.logger.log("Switching to subtitle track " + t), r.trigger(s.default.SUBTITLE_TRACK_SWITCH, {
											id: t
										}), this._loadCurrentTrack())
									}, r.prototype._onTextTracksChanged = function() {
										if (this.media) {
											for (var e = -1, t = c(this.media.textTracks), r = 0; r < t.length; r++)
												if ("hidden" === t[r].mode) e = r;
												else if ("showing" === t[r].mode) {
												e = r;
												break
											}
											this.subtitleTrack = e
										}
									}, r
								}(o.default);

							function c(e) {
								for (var t = [], r = 0; r < e.length; r++) {
									var n = e[r];
									"subtitles" === n.kind && n.label && t.push(e[r])
								}
								return t
							}
							t.default = d
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/controller/timeline-controller.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var s = r("./src/events.js"),
								o = r("./src/event-handler.js"),
								a = r("./src/utils/cea-608-parser.js"),
								l = r("./src/utils/output-filter.js"),
								d = r("./src/utils/webvtt-parser.js"),
								c = r("./src/utils/logger.js"),
								u = r("./src/utils/texttrack-utils.js");

							function h(e, t) {
								return e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
							}
							var p = function(t) {
								function r(e) {
									var r = t.call(this, e, s.default.MEDIA_ATTACHING, s.default.MEDIA_DETACHING, s.default.FRAG_PARSING_USERDATA, s.default.FRAG_DECRYPTED, s.default.MANIFEST_LOADING, s.default.MANIFEST_LOADED, s.default.FRAG_LOADED, s.default.LEVEL_SWITCHING, s.default.INIT_PTS_FOUND) || this;
									if (r.hls = e, r.config = e.config, r.enabled = !0, r.Cues = e.config.cueHandler, r.textTracks = [], r.tracks = [], r.unparsedVttFrags = [], r.initPTS = [], r.cueRanges = [], r.captionsTracks = {}, r.captionsProperties = {
											textTrack1: {
												label: r.config.captionsTextTrack1Label,
												languageCode: r.config.captionsTextTrack1LanguageCode
											},
											textTrack2: {
												label: r.config.captionsTextTrack2Label,
												languageCode: r.config.captionsTextTrack2LanguageCode
											}
										}, r.config.enableCEA708Captions) {
										var n = new l.default(r, "textTrack1"),
											i = new l.default(r, "textTrack2");
										r.cea608Parser = new a.default(0, n, i)
									}
									return r
								}
								return i(r, t), r.prototype.addCues = function(e, t, r, n) {
									for (var i, s, o, a, l = this.cueRanges, d = !1, c = l.length; c--;) {
										var u = l[c],
											h = (i = u[0], s = u[1], o = t, a = r, Math.min(s, a) - Math.max(i, o));
										if (h >= 0 && (u[0] = Math.min(u[0], t), u[1] = Math.max(u[1], r), d = !0, h / (r - t) > .5)) return
									}
									d || l.push([t, r]), this.Cues.newCue(this.captionsTracks[e], t, r, n)
								}, r.prototype.onInitPtsFound = function(e) {
									var t = this;
									if ("main" === e.id && (this.initPTS[e.frag.cc] = e.initPTS), this.unparsedVttFrags.length) {
										var r = this.unparsedVttFrags;
										this.unparsedVttFrags = [], r.forEach((function(e) {
											t.onFragLoaded(e)
										}))
									}
								}, r.prototype.getExistingTrack = function(e) {
									var t = this.media;
									if (t)
										for (var r = 0; r < t.textTracks.length; r++) {
											var n = t.textTracks[r];
											if (n[e]) return n
										}
									return null
								}, r.prototype.createCaptionsTrack = function(e) {
									var t = this.captionsProperties[e],
										r = t.label,
										n = t.languageCode,
										i = this.captionsTracks;
									if (!i[e]) {
										var s = this.getExistingTrack(e);
										if (s) i[e] = s, u.clearCurrentCues(i[e]), u.sendAddTrackEvent(i[e], this.media);
										else {
											var o = this.createTextTrack("captions", r, n);
											o && (o[e] = !0, i[e] = o)
										}
									}
								}, r.prototype.createTextTrack = function(e, t, r) {
									var n = this.media;
									if (n) return n.addTextTrack(e, t, r)
								}, r.prototype.destroy = function() {
									o.default.prototype.destroy.call(this)
								}, r.prototype.onMediaAttaching = function(e) {
									this.media = e.media, this._cleanTracks()
								}, r.prototype.onMediaDetaching = function() {
									var e = this.captionsTracks;
									Object.keys(e).forEach((function(t) {
										u.clearCurrentCues(e[t]), delete e[t]
									}))
								}, r.prototype.onManifestLoading = function() {
									this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
										ccOffset: 0,
										presentationOffset: 0,
										0: {
											start: 0,
											prevCC: -1,
											new: !1
										}
									}, this._cleanTracks()
								}, r.prototype._cleanTracks = function() {
									var e = this.media;
									if (e) {
										var t = e.textTracks;
										if (t)
											for (var r = 0; r < t.length; r++) u.clearCurrentCues(t[r])
									}
								}, r.prototype.onManifestLoaded = function(e) {
									var t = this;
									if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.cueRanges = [], this.config.enableWebVTT) {
										this.tracks = e.subtitles || [];
										var r = this.media ? this.media.textTracks : [];
										this.tracks.forEach((function(e, n) {
											var i;
											if (n < r.length) {
												for (var s = null, o = 0; o < r.length; o++)
													if (h(r[o], e)) {
														s = r[o];
														break
													} s && (i = s)
											}
											i || (i = t.createTextTrack("subtitles", e.name, e.lang)), e.default ? i.mode = t.hls.subtitleDisplay ? "showing" : "hidden" : i.mode = "disabled", t.textTracks.push(i)
										}))
									}
								}, r.prototype.onLevelSwitching = function() {
									this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
								}, r.prototype.onFragLoaded = function(t) {
									var r = t.frag,
										n = t.payload;
									if ("main" === r.type) {
										var i = r.sn;
										if (i !== this.lastSn + 1) {
											var o = this.cea608Parser;
											o && o.reset()
										}
										this.lastSn = i
									} else if ("subtitle" === r.type)
										if (n.byteLength) {
											if (!e.isFinite(this.initPTS[r.cc])) return this.unparsedVttFrags.push(t), void(this.initPTS.length && this.hls.trigger(s.default.SUBTITLE_FRAG_PROCESSED, {
												success: !1,
												frag: r
											}));
											var a = r.decryptdata;
											null != a && null != a.key && "AES-128" === a.method || this._parseVTTs(r, n)
										} else this.hls.trigger(s.default.SUBTITLE_FRAG_PROCESSED, {
											success: !1,
											frag: r
										})
								}, r.prototype._parseVTTs = function(e, t) {
									var r = this.vttCCs;
									r[e.cc] || (r[e.cc] = {
										start: e.start,
										prevCC: this.prevCC,
										new: !0
									}, this.prevCC = e.cc);
									var n = this.textTracks,
										i = this.hls;
									d.default.parse(t, this.initPTS[e.cc], r, e.cc, (function(t) {
										var r = n[e.level];
										"disabled" !== r.mode ? (t.forEach((function(e) {
											if (!r.cues.getCueById(e.id)) try {
												r.addCue(e)
											} catch (n) {
												var t = new window.TextTrackCue(e.startTime, e.endTime, e.text);
												t.id = e.id, r.addCue(t)
											}
										})), i.trigger(s.default.SUBTITLE_FRAG_PROCESSED, {
											success: !0,
											frag: e
										})) : i.trigger(s.default.SUBTITLE_FRAG_PROCESSED, {
											success: !1,
											frag: e
										})
									}), (function(t) {
										c.logger.log("Failed to parse VTT cue: " + t), i.trigger(s.default.SUBTITLE_FRAG_PROCESSED, {
											success: !1,
											frag: e
										})
									}))
								}, r.prototype.onFragDecrypted = function(t) {
									var r = t.payload,
										n = t.frag;
									if ("subtitle" === n.type) {
										if (!e.isFinite(this.initPTS[n.cc])) return void this.unparsedVttFrags.push(t);
										this._parseVTTs(n, r)
									}
								}, r.prototype.onFragParsingUserdata = function(e) {
									if (this.enabled && this.config.enableCEA708Captions)
										for (var t = 0; t < e.samples.length; t++) {
											var r = this.extractCea608Data(e.samples[t].bytes);
											this.cea608Parser.addData(e.samples[t].pts, r)
										}
								}, r.prototype.extractCea608Data = function(e) {
									for (var t, r, n, i = 31 & e[0], s = 2, o = [], a = 0; a < i; a++) t = e[s++], r = 127 & e[s++], n = 127 & e[s++], 0 === r && 0 === n || 0 != (4 & t) && 0 == (3 & t) && (o.push(r), o.push(n));
									return o
								}, r
							}(o.default);
							t.default = p
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/crypt/aes-crypto.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = function() {
							function e(e, t) {
								this.subtle = e, this.aesIV = t
							}
							return e.prototype.decrypt = function(e, t) {
								return this.subtle.decrypt({
									name: "AES-CBC",
									iv: this.aesIV
								}, t, e)
							}, e
						}();
						t.default = n
					},
					"./src/crypt/aes-decryptor.js": function(e, t, r) {
						"use strict";

						function n(e) {
							var t = e.byteLength,
								r = t && new DataView(e).getUint8(t - 1);
							return r ? e.slice(0, t - r) : e
						}
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.removePadding = n;
						var i = function() {
							function e() {
								this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
							}
							return e.prototype.uint8ArrayToUint32Array_ = function(e) {
								for (var t = new DataView(e), r = new Uint32Array(4), n = 0; n < 4; n++) r[n] = t.getUint32(4 * n);
								return r
							}, e.prototype.initTable = function() {
								var e = this.sBox,
									t = this.invSBox,
									r = this.subMix,
									n = r[0],
									i = r[1],
									s = r[2],
									o = r[3],
									a = this.invSubMix,
									l = a[0],
									d = a[1],
									c = a[2],
									u = a[3],
									h = new Uint32Array(256),
									p = 0,
									f = 0,
									g = 0;
								for (g = 0; g < 256; g++) h[g] = g < 128 ? g << 1 : g << 1 ^ 283;
								for (g = 0; g < 256; g++) {
									var v = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4;
									v = v >>> 8 ^ 255 & v ^ 99, e[p] = v, t[v] = p;
									var m = h[p],
										b = h[m],
										y = h[b],
										_ = 257 * h[v] ^ 16843008 * v;
									n[p] = _ << 24 | _ >>> 8, i[p] = _ << 16 | _ >>> 16, s[p] = _ << 8 | _ >>> 24, o[p] = _, _ = 16843009 * y ^ 65537 * b ^ 257 * m ^ 16843008 * p, l[v] = _ << 24 | _ >>> 8, d[v] = _ << 16 | _ >>> 16, c[v] = _ << 8 | _ >>> 24, u[v] = _, p ? (p = m ^ h[h[h[y ^ m]]], f ^= h[h[f]]) : p = f = 1
								}
							}, e.prototype.expandKey = function(e) {
								for (var t = this.uint8ArrayToUint32Array_(e), r = !0, n = 0; n < t.length && r;) r = t[n] === this.key[n], n++;
								if (!r) {
									this.key = t;
									var i = this.keySize = t.length;
									if (4 !== i && 6 !== i && 8 !== i) throw new Error("Invalid aes key size=" + i);
									var s, o, a, l, d = this.ksRows = 4 * (i + 6 + 1),
										c = this.keySchedule = new Uint32Array(d),
										u = this.invKeySchedule = new Uint32Array(d),
										h = this.sBox,
										p = this.rcon,
										f = this.invSubMix,
										g = f[0],
										v = f[1],
										m = f[2],
										b = f[3];
									for (s = 0; s < d; s++) s < i ? a = c[s] = t[s] : (l = a, s % i == 0 ? (l = h[(l = l << 8 | l >>> 24) >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l], l ^= p[s / i | 0] << 24) : i > 6 && s % i == 4 && (l = h[l >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l]), c[s] = a = (c[s - i] ^ l) >>> 0);
									for (o = 0; o < d; o++) s = d - o, l = 3 & o ? c[s] : c[s - 4], u[o] = o < 4 || s <= 4 ? l : g[h[l >>> 24]] ^ v[h[l >>> 16 & 255]] ^ m[h[l >>> 8 & 255]] ^ b[h[255 & l]], u[o] = u[o] >>> 0
								}
							}, e.prototype.networkToHostOrderSwap = function(e) {
								return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
							}, e.prototype.decrypt = function(e, t, r, i) {
								for (var s, o, a, l, d, c, u, h, p, f, g, v, m, b, y = this.keySize + 6, _ = this.invKeySchedule, w = this.invSBox, E = this.invSubMix, S = E[0], T = E[1], k = E[2], A = E[3], x = this.uint8ArrayToUint32Array_(r), R = x[0], O = x[1], L = x[2], C = x[3], P = new Int32Array(e), D = new Int32Array(P.length), I = this.networkToHostOrderSwap; t < P.length;) {
									for (p = I(P[t]), f = I(P[t + 1]), g = I(P[t + 2]), v = I(P[t + 3]), d = p ^ _[0], c = v ^ _[1], u = g ^ _[2], h = f ^ _[3], m = 4, b = 1; b < y; b++) s = S[d >>> 24] ^ T[c >> 16 & 255] ^ k[u >> 8 & 255] ^ A[255 & h] ^ _[m], o = S[c >>> 24] ^ T[u >> 16 & 255] ^ k[h >> 8 & 255] ^ A[255 & d] ^ _[m + 1], a = S[u >>> 24] ^ T[h >> 16 & 255] ^ k[d >> 8 & 255] ^ A[255 & c] ^ _[m + 2], l = S[h >>> 24] ^ T[d >> 16 & 255] ^ k[c >> 8 & 255] ^ A[255 & u] ^ _[m + 3], d = s, c = o, u = a, h = l, m += 4;
									s = w[d >>> 24] << 24 ^ w[c >> 16 & 255] << 16 ^ w[u >> 8 & 255] << 8 ^ w[255 & h] ^ _[m], o = w[c >>> 24] << 24 ^ w[u >> 16 & 255] << 16 ^ w[h >> 8 & 255] << 8 ^ w[255 & d] ^ _[m + 1], a = w[u >>> 24] << 24 ^ w[h >> 16 & 255] << 16 ^ w[d >> 8 & 255] << 8 ^ w[255 & c] ^ _[m + 2], l = w[h >>> 24] << 24 ^ w[d >> 16 & 255] << 16 ^ w[c >> 8 & 255] << 8 ^ w[255 & u] ^ _[m + 3], m += 3, D[t] = I(s ^ R), D[t + 1] = I(l ^ O), D[t + 2] = I(a ^ L), D[t + 3] = I(o ^ C), R = p, O = f, L = g, C = v, t += 4
								}
								return i ? n(D.buffer) : D.buffer
							}, e.prototype.destroy = function() {
								this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0
							}, e
						}();
						t.default = i
					},
					"./src/crypt/decrypter.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/crypt/aes-crypto.js"),
							i = r("./src/crypt/fast-aes-key.js"),
							s = r("./src/crypt/aes-decryptor.js"),
							o = r("./src/errors.js"),
							a = r("./src/utils/logger.js"),
							l = r("./src/events.js"),
							d = r("./src/utils/get-self-scope.js").getSelfScope(),
							c = function() {
								function e(e, t, r) {
									var n = (void 0 === r ? {} : r).removePKCS7Padding,
										i = void 0 === n || n;
									if (this.logEnabled = !0, this.observer = e, this.config = t, this.removePKCS7Padding = i, i) try {
										var s = d.crypto;
										s && (this.subtle = s.subtle || s.webkitSubtle)
									} catch (o) {}
									this.disableWebCrypto = !this.subtle
								}
								return e.prototype.isSync = function() {
									return this.disableWebCrypto && this.config.enableSoftwareAES
								}, e.prototype.decrypt = function(e, t, r, o) {
									var l = this;
									if (this.disableWebCrypto && this.config.enableSoftwareAES) {
										this.logEnabled && (a.logger.log("JS AES decrypt"), this.logEnabled = !1);
										var d = this.decryptor;
										d || (this.decryptor = d = new s.default), d.expandKey(t), o(d.decrypt(e, 0, r, this.removePKCS7Padding))
									} else {
										this.logEnabled && (a.logger.log("WebCrypto AES decrypt"), this.logEnabled = !1);
										var c = this.subtle;
										this.key !== t && (this.key = t, this.fastAesKey = new i.default(c, t)), this.fastAesKey.expandKey().then((function(i) {
											new n.default(c, r).decrypt(e, i).catch((function(n) {
												l.onWebCryptoError(n, e, t, r, o)
											})).then((function(e) {
												o(e)
											}))
										})).catch((function(n) {
											l.onWebCryptoError(n, e, t, r, o)
										}))
									}
								}, e.prototype.onWebCryptoError = function(e, t, r, n, i) {
									this.config.enableSoftwareAES ? (a.logger.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, r, n, i)) : (a.logger.error("decrypting error : " + e.message), this.observer.trigger(l.default.ERROR, {
										type: o.ErrorTypes.MEDIA_ERROR,
										details: o.ErrorDetails.FRAG_DECRYPT_ERROR,
										fatal: !0,
										reason: e.message
									}))
								}, e.prototype.destroy = function() {
									var e = this.decryptor;
									e && (e.destroy(), this.decryptor = void 0)
								}, e
							}();
						t.default = c
					},
					"./src/crypt/fast-aes-key.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = function() {
							function e(e, t) {
								this.subtle = e, this.key = t
							}
							return e.prototype.expandKey = function() {
								return this.subtle.importKey("raw", this.key, {
									name: "AES-CBC"
								}, !1, ["encrypt", "decrypt"])
							}, e
						}();
						t.default = n
					},
					"./src/demux/aacdemuxer.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/demux/adts.js"),
								i = r("./src/utils/logger.js"),
								s = r("./src/demux/id3.js"),
								o = function() {
									function t(e, t, r) {
										this.observer = e, this.config = r, this.remuxer = t
									}
									return t.prototype.resetInitSegment = function(e, t, r, n) {
										this._audioTrack = {
											container: "audio/adts",
											type: "audio",
											id: 0,
											sequenceNumber: 0,
											isAAC: !0,
											samples: [],
											len: 0,
											manifestCodec: t,
											duration: n,
											inputTimeScale: 9e4
										}
									}, t.prototype.resetTimeStamp = function() {}, t.probe = function(e) {
										if (!e) return !1;
										for (var t = (s.default.getID3Data(e, 0) || []).length, r = e.length; t < r; t++)
											if (n.probe(e, t)) return i.logger.log("ADTS sync word found !"), !0;
										return !1
									}, t.prototype.append = function(t, r, o, a) {
										for (var l = this._audioTrack, d = s.default.getID3Data(t, 0) || [], c = s.default.getTimeStamp(d), u = e.isFinite(c) ? 90 * c : 9e4 * r, h = 0, p = u, f = t.length, g = d.length, v = [{
												pts: p,
												dts: p,
												data: d
											}]; g < f - 1;)
											if (n.isHeader(t, g) && g + 5 < f) {
												n.initTrackConfig(l, this.observer, t, g, l.manifestCodec);
												var m = n.appendFrame(l, t, g, u, h);
												if (!m) {
													i.logger.log("Unable to parse AAC frame");
													break
												}
												g += m.length, p = m.sample.pts, h++
											} else s.default.isHeader(t, g) ? (d = s.default.getID3Data(t, g), v.push({
												pts: p,
												dts: p,
												data: d
											}), g += d.length) : g++;
										this.remuxer.remux(l, {
											samples: []
										}, {
											samples: v,
											inputTimeScale: 9e4
										}, {
											samples: []
										}, r, o, a)
									}, t.prototype.destroy = function() {}, t
								}();
							t.default = o
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/demux/adts.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/utils/logger.js"),
							i = r("./src/errors.js"),
							s = r("./src/events.js");

						function o(e, t, r, o) {
							var a, l, d, c, u, h = navigator.userAgent.toLowerCase(),
								p = o,
								f = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
							if (a = 1 + ((192 & t[r + 2]) >>> 6), !((l = (60 & t[r + 2]) >>> 2) > f.length - 1)) return c = (1 & t[r + 2]) << 2, c |= (192 & t[r + 3]) >>> 6, n.logger.log("manifest codec:" + o + ",ADTS data:type:" + a + ",sampleingIndex:" + l + "[" + f[l] + "Hz],channelConfig:" + c), /firefox/i.test(h) ? l >= 6 ? (a = 5, u = new Array(4), d = l - 3) : (a = 2, u = new Array(2), d = l) : -1 !== h.indexOf("android") ? (a = 2, u = new Array(2), d = l) : (a = 5, u = new Array(4), o && (-1 !== o.indexOf("mp4a.40.29") || -1 !== o.indexOf("mp4a.40.5")) || !o && l >= 6 ? d = l - 3 : ((o && -1 !== o.indexOf("mp4a.40.2") && (l >= 6 && 1 === c || /vivaldi/i.test(h)) || !o && 1 === c) && (a = 2, u = new Array(2)), d = l)), u[0] = a << 3, u[0] |= (14 & l) >> 1, u[1] |= (1 & l) << 7, u[1] |= c << 3, 5 === a && (u[1] |= (14 & d) >> 1, u[2] = (1 & d) << 7, u[2] |= 8, u[3] = 0), {
								config: u,
								samplerate: f[l],
								channelCount: c,
								codec: "mp4a.40." + a,
								manifestCodec: p
							};
							e.trigger(s.default.ERROR, {
								type: i.ErrorTypes.MEDIA_ERROR,
								details: i.ErrorDetails.FRAG_PARSING_ERROR,
								fatal: !0,
								reason: "invalid ADTS sampling index:" + l
							})
						}

						function a(e, t) {
							return 255 === e[t] && 240 == (246 & e[t + 1])
						}

						function l(e, t) {
							return 1 & e[t + 1] ? 7 : 9
						}

						function d(e, t) {
							return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
						}

						function c(e) {
							return 9216e4 / e
						}

						function u(e, t, r, n, i) {
							var s, o, a = e.length;
							if (s = l(e, t), o = d(e, t), (o -= s) > 0 && t + s + o <= a) return {
								headerLength: s,
								frameLength: o,
								stamp: r + n * i
							}
						}
						t.getAudioConfig = o, t.isHeaderPattern = a, t.getHeaderLength = l, t.getFullFrameLength = d, t.isHeader = function(e, t) {
							return !!(t + 1 < e.length && a(e, t))
						}, t.probe = function(e, t) {
							if (t + 1 < e.length && a(e, t)) {
								var r = l(e, t);
								t + 5 < e.length && (r = d(e, t));
								var n = t + r;
								if (n === e.length || n + 1 < e.length && a(e, n)) return !0
							}
							return !1
						}, t.initTrackConfig = function(e, t, r, i, s) {
							if (!e.samplerate) {
								var a = o(t, r, i, s);
								e.config = a.config, e.samplerate = a.samplerate, e.channelCount = a.channelCount, e.codec = a.codec, e.manifestCodec = a.manifestCodec, n.logger.log("parsed codec:" + e.codec + ",rate:" + a.samplerate + ",nb channel:" + a.channelCount)
							}
						}, t.getFrameDuration = c, t.parseFrameHeader = u, t.appendFrame = function(e, t, r, n, i) {
							var s = u(t, r, n, i, c(e.samplerate));
							if (s) {
								var o = s.stamp,
									a = s.headerLength,
									l = s.frameLength,
									d = {
										unit: t.subarray(r + a, r + a + l),
										pts: o,
										dts: o
									};
								return e.samples.push(d), e.len += l, {
									sample: d,
									length: l + a
								}
							}
						}
					},
					"./src/demux/demuxer-inline.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n, i = r("./src/events.js"),
							s = r("./src/errors.js"),
							o = r("./src/crypt/decrypter.js"),
							a = r("./src/demux/aacdemuxer.js"),
							l = r("./src/demux/mp4demuxer.js"),
							d = r("./src/demux/tsdemuxer.js"),
							c = r("./src/demux/mp3demuxer.js"),
							u = r("./src/remux/mp4-remuxer.js"),
							h = r("./src/remux/passthrough-remuxer.js"),
							p = r("./src/utils/get-self-scope.js"),
							f = r("./src/utils/logger.js"),
							g = p.getSelfScope();
						try {
							n = g.performance.now.bind(g.performance)
						} catch (m) {
							f.logger.debug("Unable to use Performance API on this environment"), n = g.Date.now
						}
						var v = function() {
							function e(e, t, r, n) {
								this.observer = e, this.typeSupported = t, this.config = r, this.vendor = n
							}
							return e.prototype.destroy = function() {
								var e = this.demuxer;
								e && e.destroy()
							}, e.prototype.push = function(e, t, r, s, a, l, d, c, u, h, p, f) {
								var g = this;
								if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
									var v = this.decrypter;
									null == v && (v = this.decrypter = new o.default(this.observer, this.config));
									var m = n();
									v.decrypt(e, t.key.buffer, t.iv.buffer, (function(e) {
										var o = n();
										g.observer.trigger(i.default.FRAG_DECRYPTED, {
											stats: {
												tstart: m,
												tdecrypt: o
											}
										}), g.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), s, a, l, d, c, u, h, p, f)
									}))
								} else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), s, a, l, d, c, u, h, p, f)
							}, e.prototype.pushDecrypted = function(e, t, r, n, o, p, f, g, v, m, b, y) {
								var _ = this.demuxer;
								if (!_ || (f || g) && !this.probe(e)) {
									for (var w = this.observer, E = this.typeSupported, S = this.config, T = [{
											demux: d.default,
											remux: u.default
										}, {
											demux: l.default,
											remux: h.default
										}, {
											demux: a.default,
											remux: u.default
										}, {
											demux: c.default,
											remux: u.default
										}], k = 0, A = T.length; k < A; k++) {
										var x = T[k],
											R = x.demux.probe;
										if (R(e)) {
											var O = this.remuxer = new x.remux(w, S, E, this.vendor);
											_ = new x.demux(w, O, S, E), this.probe = R;
											break
										}
									}
									if (!_) return void w.trigger(i.default.ERROR, {
										type: s.ErrorTypes.MEDIA_ERROR,
										details: s.ErrorDetails.FRAG_PARSING_ERROR,
										fatal: !0,
										reason: "no demux matching with content found"
									});
									this.demuxer = _
								}
								var L = this.remuxer;
								(f || g) && (_.resetInitSegment(r, n, o, m), L.resetInitSegment()), f && (_.resetTimeStamp(y), L.resetTimeStamp(y)), "function" == typeof _.setDecryptData && _.setDecryptData(t), _.append(e, p, v, b)
							}, e
						}();
						t.default = v
					},
					"./src/demux/demuxer-worker.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/demux/demuxer-inline.js"),
							i = r("./src/events.js"),
							s = r("./src/utils/logger.js"),
							o = r("./node_modules/node-libs-browser/node_modules/events/events.js");
						t.default = function(e) {
							var t = new o.EventEmitter;
							t.trigger = function(e) {
								for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
								t.emit.apply(t, [e, e].concat(r))
							}, t.off = function(e) {
								for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
								t.removeListener.apply(t, [e].concat(r))
							};
							var r = function(t, r) {
								e.postMessage({
									event: t,
									data: r
								})
							};
							e.addEventListener("message", (function(i) {
								var o = i.data;
								switch (o.cmd) {
									case "init":
										var a = JSON.parse(o.config);
										e.demuxer = new n.default(t, o.typeSupported, a, o.vendor), s.enableLogs(a.debug), r("init", null);
										break;
									case "demux":
										e.demuxer.push(o.data, o.decryptdata, o.initSegment, o.audioCodec, o.videoCodec, o.timeOffset, o.discontinuity, o.trackSwitch, o.contiguous, o.duration, o.accurateTimeOffset, o.defaultInitPTS)
								}
							})), t.on(i.default.FRAG_DECRYPTED, r), t.on(i.default.FRAG_PARSING_INIT_SEGMENT, r), t.on(i.default.FRAG_PARSED, r), t.on(i.default.ERROR, r), t.on(i.default.FRAG_PARSING_METADATA, r), t.on(i.default.FRAG_PARSING_USERDATA, r), t.on(i.default.INIT_PTS_FOUND, r), t.on(i.default.FRAG_PARSING_DATA, (function(t, r) {
								var n = [],
									i = {
										event: t,
										data: r
									};
								r.data1 && (i.data1 = r.data1.buffer, n.push(r.data1.buffer), delete r.data1), r.data2 && (i.data2 = r.data2.buffer, n.push(r.data2.buffer), delete r.data2), e.postMessage(i, n)
							}))
						}
					},
					"./src/demux/demuxer.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./node_modules/webworkify-webpack/index.js"),
								i = r("./src/events.js"),
								s = r("./src/demux/demuxer-inline.js"),
								o = r("./src/utils/logger.js"),
								a = r("./src/errors.js"),
								l = r("./src/utils/mediasource-helper.js"),
								d = r("./src/utils/get-self-scope.js"),
								c = r("./src/observer.js"),
								u = d.getSelfScope(),
								h = l.getMediaSource(),
								p = function() {
									function t(e, t) {
										var r = this;
										this.hls = e, this.id = t;
										var l = this.observer = new c.Observer,
											d = e.config,
											p = function(t, n) {
												(n = n || {}).frag = r.frag, n.id = r.id, e.trigger(t, n)
											};
										l.on(i.default.FRAG_DECRYPTED, p), l.on(i.default.FRAG_PARSING_INIT_SEGMENT, p), l.on(i.default.FRAG_PARSING_DATA, p), l.on(i.default.FRAG_PARSED, p), l.on(i.default.ERROR, p), l.on(i.default.FRAG_PARSING_METADATA, p), l.on(i.default.FRAG_PARSING_USERDATA, p), l.on(i.default.INIT_PTS_FOUND, p);
										var f = {
												mp4: h.isTypeSupported("video/mp4"),
												mpeg: h.isTypeSupported("audio/mpeg"),
												mp3: h.isTypeSupported('audio/mp4; codecs="mp3"')
											},
											g = navigator.vendor;
										if (d.enableWorker && "undefined" != typeof Worker) {
											o.logger.log("demuxing in webworker");
											var v = void 0;
											try {
												v = this.w = n("./src/demux/demuxer-worker.js"), this.onwmsg = this.onWorkerMessage.bind(this), v.addEventListener("message", this.onwmsg), v.onerror = function(t) {
													e.trigger(i.default.ERROR, {
														type: a.ErrorTypes.OTHER_ERROR,
														details: a.ErrorDetails.INTERNAL_EXCEPTION,
														fatal: !0,
														event: "demuxerWorker",
														err: {
															message: t.message + " (" + t.filename + ":" + t.lineno + ")"
														}
													})
												}, v.postMessage({
													cmd: "init",
													typeSupported: f,
													vendor: g,
													id: t,
													config: JSON.stringify(d)
												})
											} catch (m) {
												o.logger.warn("Error in worker:", m), o.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"), v && u.URL.revokeObjectURL(v.objectURL), this.demuxer = new s.default(l, f, d, g), this.w = void 0
											}
										} else this.demuxer = new s.default(l, f, d, g)
									}
									return t.prototype.destroy = function() {
										var e = this.w;
										if (e) e.removeEventListener("message", this.onwmsg), e.terminate(), this.w = null;
										else {
											var t = this.demuxer;
											t && (t.destroy(), this.demuxer = null)
										}
										var r = this.observer;
										r && (r.removeAllListeners(), this.observer = null)
									}, t.prototype.push = function(t, r, n, i, s, a, l, d) {
										var c = this.w,
											u = e.isFinite(s.startPTS) ? s.startPTS : s.start,
											h = s.decryptdata,
											p = this.frag,
											f = !(p && s.cc === p.cc),
											g = !(p && s.level === p.level),
											v = p && s.sn === p.sn + 1,
											m = !g && v;
										if (f && o.logger.log(this.id + ":discontinuity detected"), g && o.logger.log(this.id + ":switch detected"), this.frag = s, c) c.postMessage({
											cmd: "demux",
											data: t,
											decryptdata: h,
											initSegment: r,
											audioCodec: n,
											videoCodec: i,
											timeOffset: u,
											discontinuity: f,
											trackSwitch: g,
											contiguous: m,
											duration: a,
											accurateTimeOffset: l,
											defaultInitPTS: d
										}, t instanceof ArrayBuffer ? [t] : []);
										else {
											var b = this.demuxer;
											b && b.push(t, h, r, n, i, u, f, g, m, a, l, d)
										}
									}, t.prototype.onWorkerMessage = function(e) {
										var t = e.data,
											r = this.hls;
										switch (t.event) {
											case "init":
												u.URL.revokeObjectURL(this.w.objectURL);
												break;
											case i.default.FRAG_PARSING_DATA:
												t.data.data1 = new Uint8Array(t.data1), t.data2 && (t.data.data2 = new Uint8Array(t.data2));
											default:
												t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, r.trigger(t.event, t.data)
										}
									}, t
								}();
							t.default = p
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/demux/exp-golomb.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/utils/logger.js"),
							i = function() {
								function e(e) {
									this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
								}
								return e.prototype.loadWord = function() {
									var e = this.data,
										t = this.bytesAvailable,
										r = e.byteLength - t,
										n = new Uint8Array(4),
										i = Math.min(4, t);
									if (0 === i) throw new Error("no bytes available");
									n.set(e.subarray(r, r + i)), this.word = new DataView(n.buffer).getUint32(0), this.bitsAvailable = 8 * i, this.bytesAvailable -= i
								}, e.prototype.skipBits = function(e) {
									var t;
									this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, e -= (t = e >> 3) >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
								}, e.prototype.readBits = function(e) {
									var t = Math.min(this.bitsAvailable, e),
										r = this.word >>> 32 - t;
									return e > 32 && n.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), (t = e - t) > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r
								}, e.prototype.skipLZ = function() {
									var e;
									for (e = 0; e < this.bitsAvailable; ++e)
										if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
									return this.loadWord(), e + this.skipLZ()
								}, e.prototype.skipUEG = function() {
									this.skipBits(1 + this.skipLZ())
								}, e.prototype.skipEG = function() {
									this.skipBits(1 + this.skipLZ())
								}, e.prototype.readUEG = function() {
									var e = this.skipLZ();
									return this.readBits(e + 1) - 1
								}, e.prototype.readEG = function() {
									var e = this.readUEG();
									return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
								}, e.prototype.readBoolean = function() {
									return 1 === this.readBits(1)
								}, e.prototype.readUByte = function() {
									return this.readBits(8)
								}, e.prototype.readUShort = function() {
									return this.readBits(16)
								}, e.prototype.readUInt = function() {
									return this.readBits(32)
								}, e.prototype.skipScalingList = function(e) {
									var t, r = 8,
										n = 8;
									for (t = 0; t < e; t++) 0 !== n && (n = (r + this.readEG() + 256) % 256), r = 0 === n ? r : n
								}, e.prototype.readSPS = function() {
									var e, t, r, n, i, s, o, a = 0,
										l = 0,
										d = 0,
										c = 0,
										u = this.readUByte.bind(this),
										h = this.readBits.bind(this),
										p = this.readUEG.bind(this),
										f = this.readBoolean.bind(this),
										g = this.skipBits.bind(this),
										v = this.skipEG.bind(this),
										m = this.skipUEG.bind(this),
										b = this.skipScalingList.bind(this);
									if (u(), e = u(), h(5), g(3), u(), m(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
										var y = p();
										if (3 === y && g(1), m(), m(), g(1), f())
											for (s = 3 !== y ? 8 : 12, o = 0; o < s; o++) f() && b(o < 6 ? 16 : 64)
									}
									m();
									var _ = p();
									if (0 === _) p();
									else if (1 === _)
										for (g(1), v(), v(), t = p(), o = 0; o < t; o++) v();
									m(), g(1), r = p(), n = p(), 0 === (i = h(1)) && g(1), g(1), f() && (a = p(), l = p(), d = p(), c = p());
									var w = [1, 1];
									if (f() && f()) switch (u()) {
										case 1:
											w = [1, 1];
											break;
										case 2:
											w = [12, 11];
											break;
										case 3:
											w = [10, 11];
											break;
										case 4:
											w = [16, 11];
											break;
										case 5:
											w = [40, 33];
											break;
										case 6:
											w = [24, 11];
											break;
										case 7:
											w = [20, 11];
											break;
										case 8:
											w = [32, 11];
											break;
										case 9:
											w = [80, 33];
											break;
										case 10:
											w = [18, 11];
											break;
										case 11:
											w = [15, 11];
											break;
										case 12:
											w = [64, 33];
											break;
										case 13:
											w = [160, 99];
											break;
										case 14:
											w = [4, 3];
											break;
										case 15:
											w = [3, 2];
											break;
										case 16:
											w = [2, 1];
											break;
										case 255:
											w = [u() << 8 | u(), u() << 8 | u()]
									}
									return {
										width: Math.ceil(16 * (r + 1) - 2 * a - 2 * l),
										height: (2 - i) * (n + 1) * 16 - (i ? 2 : 4) * (d + c),
										pixelRatio: w
									}
								}, e.prototype.readSliceType = function() {
									return this.readUByte(), this.readUEG(), this.readUEG()
								}, e
							}();
						t.default = i
					},
					"./src/demux/id3.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = function() {
								function e() {}
								return e.isHeader = function(e, t) {
									return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
								}, e.isFooter = function(e, t) {
									return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
								}, e.getID3Data = function(t, r) {
									for (var n = r, i = 0; e.isHeader(t, r);) i += 10, i += e._readSize(t, r + 6), e.isFooter(t, r + 10) && (i += 10), r += i;
									if (i > 0) return t.subarray(n, n + i)
								}, e._readSize = function(e, t) {
									var r = 0;
									return r = (127 & e[t]) << 21, r |= (127 & e[t + 1]) << 14, r |= (127 & e[t + 2]) << 7, r |= 127 & e[t + 3]
								}, e.getTimeStamp = function(t) {
									for (var r = e.getID3Frames(t), n = 0; n < r.length; n++) {
										var i = r[n];
										if (e.isTimeStampFrame(i)) return e._readTimeStamp(i)
									}
								}, e.isTimeStampFrame = function(e) {
									return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
								}, e._getFrameData = function(t) {
									var r = String.fromCharCode(t[0], t[1], t[2], t[3]),
										n = e._readSize(t, 4);
									return {
										type: r,
										size: n,
										data: t.subarray(10, 10 + n)
									}
								}, e.getID3Frames = function(t) {
									for (var r = 0, n = []; e.isHeader(t, r);) {
										for (var i = e._readSize(t, r + 6), s = (r += 10) + i; r + 8 < s;) {
											var o = e._getFrameData(t.subarray(r)),
												a = e._decodeFrame(o);
											a && n.push(a), r += o.size + 10
										}
										e.isFooter(t, r) && (r += 10)
									}
									return n
								}, e._decodeFrame = function(t) {
									return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : void 0
								}, e._readTimeStamp = function(e) {
									if (8 === e.data.byteLength) {
										var t = new Uint8Array(e.data),
											r = 1 & t[3],
											n = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
										return n /= 45, r && (n += 47721858.84), Math.round(n)
									}
								}, e._decodePrivFrame = function(t) {
									if (!(t.size < 2)) {
										var r = e._utf8ArrayToStr(t.data, !0),
											n = new Uint8Array(t.data.subarray(r.length + 1));
										return {
											key: t.type,
											info: r,
											data: n.buffer
										}
									}
								}, e._decodeTextFrame = function(t) {
									if (!(t.size < 2)) {
										if ("TXXX" === t.type) {
											var r = 1,
												n = e._utf8ArrayToStr(t.data.subarray(r));
											r += n.length + 1;
											var i = e._utf8ArrayToStr(t.data.subarray(r));
											return {
												key: t.type,
												info: n,
												data: i
											}
										}
										var s = e._utf8ArrayToStr(t.data.subarray(1));
										return {
											key: t.type,
											data: s
										}
									}
								}, e._decodeURLFrame = function(t) {
									if ("WXXX" === t.type) {
										if (t.size < 2) return;
										var r = 1,
											n = e._utf8ArrayToStr(t.data.subarray(r));
										r += n.length + 1;
										var i = e._utf8ArrayToStr(t.data.subarray(r));
										return {
											key: t.type,
											info: n,
											data: i
										}
									}
									var s = e._utf8ArrayToStr(t.data);
									return {
										key: t.type,
										data: s
									}
								}, e._utf8ArrayToStr = function(e, t) {
									void 0 === t && (t = !1);
									for (var r, n, i, s = e.length, o = "", a = 0; a < s;) {
										if (0 === (r = e[a++]) && t) return o;
										if (0 !== r && 3 !== r) switch (r >> 4) {
											case 0:
											case 1:
											case 2:
											case 3:
											case 4:
											case 5:
											case 6:
											case 7:
												o += String.fromCharCode(r);
												break;
											case 12:
											case 13:
												n = e[a++], o += String.fromCharCode((31 & r) << 6 | 63 & n);
												break;
											case 14:
												n = e[a++], i = e[a++], o += String.fromCharCode((15 & r) << 12 | (63 & n) << 6 | (63 & i) << 0)
										}
									}
									return o
								}, e
							}(),
							i = n._utf8ArrayToStr;
						t.utf8ArrayToStr = i, t.default = n
					},
					"./src/demux/mp3demuxer.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/demux/id3.js"),
							i = r("./src/utils/logger.js"),
							s = r("./src/demux/mpegaudio.js"),
							o = function() {
								function e(e, t, r) {
									this.observer = e, this.config = r, this.remuxer = t
								}
								return e.prototype.resetInitSegment = function(e, t, r, n) {
									this._audioTrack = {
										container: "audio/mpeg",
										type: "audio",
										id: -1,
										sequenceNumber: 0,
										isAAC: !1,
										samples: [],
										len: 0,
										manifestCodec: t,
										duration: n,
										inputTimeScale: 9e4
									}
								}, e.prototype.resetTimeStamp = function() {}, e.probe = function(e) {
									var t, r, o = n.default.getID3Data(e, 0);
									if (o && void 0 !== n.default.getTimeStamp(o))
										for (t = o.length, r = Math.min(e.length - 1, t + 100); t < r; t++)
											if (s.default.probe(e, t)) return i.logger.log("MPEG Audio sync word found !"), !0;
									return !1
								}, e.prototype.append = function(e, t, r, i) {
									for (var o = n.default.getID3Data(e, 0), a = n.default.getTimeStamp(o), l = a ? 90 * a : 9e4 * t, d = o.length, c = e.length, u = 0, h = 0, p = this._audioTrack, f = [{
											pts: l,
											dts: l,
											data: o
										}]; d < c;)
										if (s.default.isHeader(e, d)) {
											var g = s.default.appendFrame(p, e, d, l, u);
											if (!g) break;
											d += g.length, h = g.sample.pts, u++
										} else n.default.isHeader(e, d) ? (o = n.default.getID3Data(e, d), f.push({
											pts: h,
											dts: h,
											data: o
										}), d += o.length) : d++;
									this.remuxer.remux(p, {
										samples: []
									}, {
										samples: f,
										inputTimeScale: 9e4
									}, {
										samples: []
									}, t, r, i)
								}, e.prototype.destroy = function() {}, e
							}();
						t.default = o
					},
					"./src/demux/mp4demuxer.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/utils/logger.js"),
							i = r("./src/events.js"),
							s = Math.pow(2, 32) - 1,
							o = function() {
								function e(e, t) {
									this.observer = e, this.remuxer = t
								}
								return e.prototype.resetTimeStamp = function(e) {
									this.initPTS = e
								}, e.prototype.resetInitSegment = function(t, r, n, s) {
									if (t && t.byteLength) {
										var o = this.initData = e.parseInitSegment(t);
										null == r && (r = "mp4a.40.5"), null == n && (n = "avc1.42e01e");
										var a = {};
										o.audio && o.video ? a.audiovideo = {
											container: "video/mp4",
											codec: r + "," + n,
											initSegment: s ? t : null
										} : (o.audio && (a.audio = {
											container: "audio/mp4",
											codec: r,
											initSegment: s ? t : null
										}), o.video && (a.video = {
											container: "video/mp4",
											codec: n,
											initSegment: s ? t : null
										})), this.observer.trigger(i.default.FRAG_PARSING_INIT_SEGMENT, {
											tracks: a
										})
									} else r && (this.audioCodec = r), n && (this.videoCodec = n)
								}, e.probe = function(t) {
									return e.findBox({
										data: t,
										start: 0,
										end: Math.min(t.length, 16384)
									}, ["moof"]).length > 0
								}, e.bin2str = function(e) {
									return String.fromCharCode.apply(null, e)
								}, e.readUint16 = function(e, t) {
									e.data && (t += e.start, e = e.data);
									var r = e[t] << 8 | e[t + 1];
									return r < 0 ? 65536 + r : r
								}, e.readUint32 = function(e, t) {
									e.data && (t += e.start, e = e.data);
									var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
									return r < 0 ? 4294967296 + r : r
								}, e.writeUint32 = function(e, t, r) {
									e.data && (t += e.start, e = e.data), e[t] = r >> 24, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r
								}, e.findBox = function(t, r) {
									var n, i, s, o, a, l, d = [];
									if (t.data ? (a = t.start, s = t.end, t = t.data) : (a = 0, s = t.byteLength), !r.length) return null;
									for (n = a; n < s;) l = (i = e.readUint32(t, n)) > 1 ? n + i : s, e.bin2str(t.subarray(n + 4, n + 8)) === r[0] && (1 === r.length ? d.push({
										data: t,
										start: n + 8,
										end: l
									}) : (o = e.findBox({
										data: t,
										start: n + 8,
										end: l
									}, r.slice(1))).length && (d = d.concat(o))), n = l;
									return d
								}, e.parseSegmentIndex = function(t) {
									var r, n = e.findBox(t, ["moov"])[0],
										i = n ? n.end : null,
										s = 0,
										o = e.findBox(t, ["sidx"]);
									if (!o || !o[0]) return null;
									r = [];
									var a = (o = o[0]).data[0];
									s = 0 === a ? 8 : 16;
									var l = e.readUint32(o, s);
									s += 4, s += 0 === a ? 8 : 16, s += 2;
									var d = o.end + 0,
										c = e.readUint16(o, s);
									s += 2;
									for (var u = 0; u < c; u++) {
										var h = s,
											p = e.readUint32(o, h);
										h += 4;
										var f = 2147483647 & p;
										if (1 == (2147483648 & p) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
										var g = e.readUint32(o, h);
										h += 4, r.push({
											referenceSize: f,
											subsegmentDuration: g,
											info: {
												duration: g / l,
												start: d,
												end: d + f - 1
											}
										}), d += f, s = h += 4
									}
									return {
										earliestPresentationTime: 0,
										timescale: l,
										version: a,
										referencesCount: c,
										references: r,
										moovEndOffset: i
									}
								}, e.parseInitSegment = function(t) {
									var r = [];
									return e.findBox(t, ["moov", "trak"]).forEach((function(t) {
										var i = e.findBox(t, ["tkhd"])[0];
										if (i) {
											var s = i.data[i.start],
												o = 0 === s ? 12 : 20,
												a = e.readUint32(i, o),
												l = e.findBox(t, ["mdia", "mdhd"])[0];
											if (l) {
												o = 0 === (s = l.data[l.start]) ? 12 : 20;
												var d = e.readUint32(l, o),
													c = e.findBox(t, ["mdia", "hdlr"])[0];
												if (c) {
													var u = {
														soun: "audio",
														vide: "video"
													} [e.bin2str(c.data.subarray(c.start + 8, c.start + 12))];
													if (u) {
														var h = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
														if (h.length) {
															h = h[0];
															var p = e.bin2str(h.data.subarray(h.start + 12, h.start + 16));
															n.logger.log("MP4Demuxer:" + u + ":" + p + " found")
														}
														r[a] = {
															timescale: d,
															type: u
														}, r[u] = {
															timescale: d,
															id: a
														}
													}
												}
											}
										}
									})), r
								}, e.getStartDTS = function(t, r) {
									var n, i, s;
									return n = e.findBox(r, ["moof", "traf"]), i = [].concat.apply([], n.map((function(r) {
										return e.findBox(r, ["tfhd"]).map((function(n) {
											var i, s;
											return i = e.readUint32(n, 4), s = t[i].timescale || 9e4, e.findBox(r, ["tfdt"]).map((function(t) {
												var r, n;
												return r = t.data[t.start], n = e.readUint32(t, 4), 1 === r && (n *= Math.pow(2, 32), n += e.readUint32(t, 8)), n
											}))[0] / s
										}))
									}))), s = Math.min.apply(null, i), isFinite(s) ? s : 0
								}, e.offsetStartDTS = function(t, r, n) {
									e.findBox(r, ["moof", "traf"]).map((function(r) {
										return e.findBox(r, ["tfhd"]).map((function(i) {
											var o = e.readUint32(i, 4),
												a = t[o].timescale || 9e4;
											e.findBox(r, ["tfdt"]).map((function(t) {
												var r = t.data[t.start],
													i = e.readUint32(t, 4);
												if (0 === r) e.writeUint32(t, 4, i - n * a);
												else {
													i *= Math.pow(2, 32), i += e.readUint32(t, 8), i -= n * a, i = Math.max(i, 0);
													var o = Math.floor(i / (s + 1)),
														l = Math.floor(i % (s + 1));
													e.writeUint32(t, 4, o), e.writeUint32(t, 8, l)
												}
											}))
										}))
									}))
								}, e.prototype.append = function(t, r, n, s) {
									var o = this.initData;
									o || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), o = this.initData);
									var a, l = this.initPTS;
									if (void 0 === l) {
										var d = e.getStartDTS(o, t);
										this.initPTS = l = d - r, this.observer.trigger(i.default.INIT_PTS_FOUND, {
											initPTS: l
										})
									}
									e.offsetStartDTS(o, t, l), a = e.getStartDTS(o, t), this.remuxer.remux(o.audio, o.video, null, null, a, n, s, t)
								}, e.prototype.destroy = function() {}, e
							}();
						t.default = o
					},
					"./src/demux/mpegaudio.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = {
							BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
							SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
							SamplesCoefficients: [
								[0, 72, 144, 12],
								[0, 0, 0, 0],
								[0, 72, 144, 12],
								[0, 144, 144, 12]
							],
							BytesInSlot: [0, 1, 1, 4],
							appendFrame: function(e, t, r, n, i) {
								if (!(r + 24 > t.length)) {
									var s = this.parseHeader(t, r);
									if (s && r + s.frameLength <= t.length) {
										var o = n + i * (9e4 * s.samplesPerFrame / s.sampleRate),
											a = {
												unit: t.subarray(r, r + s.frameLength),
												pts: o,
												dts: o
											};
										return e.config = [], e.channelCount = s.channelCount, e.samplerate = s.sampleRate, e.samples.push(a), e.len += s.frameLength, {
											sample: a,
											length: s.frameLength
										}
									}
								}
							},
							parseHeader: function(e, t) {
								var r = e[t + 1] >> 3 & 3,
									i = e[t + 1] >> 1 & 3,
									s = e[t + 2] >> 4 & 15,
									o = e[t + 2] >> 2 & 3,
									a = e[t + 2] >> 1 & 1;
								if (1 !== r && 0 !== s && 15 !== s && 3 !== o) {
									var l = 3 === r ? 3 - i : 3 === i ? 3 : 4,
										d = 1e3 * n.BitratesMap[14 * l + s - 1],
										c = 3 === r ? 0 : 2 === r ? 1 : 2,
										u = n.SamplingRateMap[3 * c + o],
										h = e[t + 3] >> 6 == 3 ? 1 : 2,
										p = n.SamplesCoefficients[r][i],
										f = n.BytesInSlot[i],
										g = 8 * p * f;
									return {
										sampleRate: u,
										channelCount: h,
										frameLength: parseInt(p * d / u + a, 10) * f,
										samplesPerFrame: g
									}
								}
							},
							isHeaderPattern: function(e, t) {
								return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
							},
							isHeader: function(e, t) {
								return !!(t + 1 < e.length && this.isHeaderPattern(e, t))
							},
							probe: function(e, t) {
								if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
									var r = this.parseHeader(e, t),
										n = 4;
									r && r.frameLength && (n = r.frameLength);
									var i = t + n;
									if (i === e.length || i + 1 < e.length && this.isHeaderPattern(e, i)) return !0
								}
								return !1
							}
						};
						t.default = n
					},
					"./src/demux/sample-aes.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/crypt/decrypter.js"),
							i = function() {
								function e(e, t, r, i) {
									this.decryptdata = r, this.discardEPB = i, this.decrypter = new n.default(e, t, {
										removePKCS7Padding: !1
									})
								}
								return e.prototype.decryptBuffer = function(e, t) {
									this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
								}, e.prototype.decryptAacSample = function(e, t, r, n) {
									var i = e[t].unit,
										s = i.subarray(16, i.length - i.length % 16),
										o = s.buffer.slice(s.byteOffset, s.byteOffset + s.length),
										a = this;
									this.decryptBuffer(o, (function(s) {
										s = new Uint8Array(s), i.set(s, 16), n || a.decryptAacSamples(e, t + 1, r)
									}))
								}, e.prototype.decryptAacSamples = function(e, t, r) {
									for (;; t++) {
										if (t >= e.length) return void r();
										if (!(e[t].unit.length < 32)) {
											var n = this.decrypter.isSync();
											if (this.decryptAacSample(e, t, r, n), !n) return
										}
									}
								}, e.prototype.getAvcEncryptedData = function(e) {
									for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), n = 0, i = 32; i <= e.length - 16; i += 160, n += 16) r.set(e.subarray(i, i + 16), n);
									return r
								}, e.prototype.getAvcDecryptedUnit = function(e, t) {
									t = new Uint8Array(t);
									for (var r = 0, n = 32; n <= e.length - 16; n += 160, r += 16) e.set(t.subarray(r, r + 16), n);
									return e
								}, e.prototype.decryptAvcSample = function(e, t, r, n, i, s) {
									var o = this.discardEPB(i.data),
										a = this.getAvcEncryptedData(o),
										l = this;
									this.decryptBuffer(a.buffer, (function(a) {
										i.data = l.getAvcDecryptedUnit(o, a), s || l.decryptAvcSamples(e, t, r + 1, n)
									}))
								}, e.prototype.decryptAvcSamples = function(e, t, r, n) {
									for (;; t++, r = 0) {
										if (t >= e.length) return void n();
										for (var i = e[t].units; !(r >= i.length); r++) {
											var s = i[r];
											if (!(s.length <= 48 || 1 !== s.type && 5 !== s.type)) {
												var o = this.decrypter.isSync();
												if (this.decryptAvcSample(e, t, r, n, s, o), !o) return
											}
										}
									}
								}, e
							}();
						t.default = i
					},
					"./src/demux/tsdemuxer.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/demux/adts.js"),
							i = r("./src/demux/mpegaudio.js"),
							s = r("./src/events.js"),
							o = r("./src/demux/exp-golomb.js"),
							a = r("./src/demux/sample-aes.js"),
							l = r("./src/utils/logger.js"),
							d = r("./src/errors.js"),
							c = {
								video: 1,
								audio: 2,
								id3: 3,
								text: 4
							},
							u = function() {
								function e(e, t, r, n) {
									this.observer = e, this.config = r, this.typeSupported = n, this.remuxer = t, this.sampleAes = null
								}
								return e.prototype.setDecryptData = function(e) {
									null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new a.default(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null
								}, e.probe = function(t) {
									var r = e._syncOffset(t);
									return !(r < 0 || (r && l.logger.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), 0))
								}, e._syncOffset = function(e) {
									for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) {
										if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376]) return r;
										r++
									}
									return -1
								}, e.createTrack = function(e, t) {
									return {
										container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
										type: e,
										id: c[e],
										pid: -1,
										inputTimeScale: 9e4,
										sequenceNumber: 0,
										samples: [],
										len: 0,
										dropped: "video" === e ? 0 : void 0,
										isAAC: "audio" === e || void 0,
										duration: "audio" === e ? t : void 0
									}
								}, e.prototype.resetInitSegment = function(t, r, n, i) {
									this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = e.createTrack("video", i), this._audioTrack = e.createTrack("audio", i), this._id3Track = e.createTrack("id3", i), this._txtTrack = e.createTrack("text", i), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = r, this.videoCodec = n, this._duration = i
								}, e.prototype.resetTimeStamp = function() {}, e.prototype.append = function(t, r, n, i) {
									var o, a, c, u, h, p = t.length,
										f = !1;
									this.contiguous = n;
									var g = this.pmtParsed,
										v = this._avcTrack,
										m = this._audioTrack,
										b = this._id3Track,
										y = v.pid,
										_ = m.pid,
										w = b.pid,
										E = this._pmtId,
										S = v.pesData,
										T = m.pesData,
										k = b.pesData,
										A = this._parsePAT,
										x = this._parsePMT,
										R = this._parsePES,
										O = this._parseAVCPES.bind(this),
										L = this._parseAACPES.bind(this),
										C = this._parseMPEGPES.bind(this),
										P = this._parseID3PES.bind(this),
										D = e._syncOffset(t);
									for (p -= (p + D) % 188, o = D; o < p; o += 188)
										if (71 === t[o]) {
											if (a = !!(64 & t[o + 1]), c = ((31 & t[o + 1]) << 8) + t[o + 2], (48 & t[o + 3]) >> 4 > 1) {
												if ((u = o + 5 + t[o + 4]) === o + 188) continue
											} else u = o + 4;
											switch (c) {
												case y:
													a && (S && (h = R(S)) && void 0 !== h.pts && O(h, !1), S = {
														data: [],
														size: 0
													}), S && (S.data.push(t.subarray(u, o + 188)), S.size += o + 188 - u);
													break;
												case _:
													a && (T && (h = R(T)) && void 0 !== h.pts && (m.isAAC ? L(h) : C(h)), T = {
														data: [],
														size: 0
													}), T && (T.data.push(t.subarray(u, o + 188)), T.size += o + 188 - u);
													break;
												case w:
													a && (k && (h = R(k)) && void 0 !== h.pts && P(h), k = {
														data: [],
														size: 0
													}), k && (k.data.push(t.subarray(u, o + 188)), k.size += o + 188 - u);
													break;
												case 0:
													a && (u += t[u] + 1), E = this._pmtId = A(t, u);
													break;
												case E:
													a && (u += t[u] + 1);
													var I = x(t, u, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
													(y = I.avc) > 0 && (v.pid = y), (_ = I.audio) > 0 && (m.pid = _, m.isAAC = I.isAAC), (w = I.id3) > 0 && (b.pid = w), f && !g && (l.logger.log("reparse from beginning"), f = !1, o = D - 188), g = this.pmtParsed = !0;
													break;
												case 17:
												case 8191:
													break;
												default:
													f = !0
											}
										} else this.observer.trigger(s.default.ERROR, {
											type: d.ErrorTypes.MEDIA_ERROR,
											details: d.ErrorDetails.FRAG_PARSING_ERROR,
											fatal: !1,
											reason: "TS packet did not start with 0x47"
										});
									S && (h = R(S)) && void 0 !== h.pts ? (O(h, !0), v.pesData = null) : v.pesData = S, T && (h = R(T)) && void 0 !== h.pts ? (m.isAAC ? L(h) : C(h), m.pesData = null) : (T && T.size && l.logger.log("last AAC PES packet truncated,might overlap between fragments"), m.pesData = T), k && (h = R(k)) && void 0 !== h.pts ? (P(h), b.pesData = null) : b.pesData = k, null == this.sampleAes ? this.remuxer.remux(m, v, b, this._txtTrack, r, n, i) : this.decryptAndRemux(m, v, b, this._txtTrack, r, n, i)
								}, e.prototype.decryptAndRemux = function(e, t, r, n, i, s, o) {
									if (e.samples && e.isAAC) {
										var a = this;
										this.sampleAes.decryptAacSamples(e.samples, 0, (function() {
											a.decryptAndRemuxAvc(e, t, r, n, i, s, o)
										}))
									} else this.decryptAndRemuxAvc(e, t, r, n, i, s, o)
								}, e.prototype.decryptAndRemuxAvc = function(e, t, r, n, i, s, o) {
									if (t.samples) {
										var a = this;
										this.sampleAes.decryptAvcSamples(t.samples, 0, 0, (function() {
											a.remuxer.remux(e, t, r, n, i, s, o)
										}))
									} else this.remuxer.remux(e, t, r, n, i, s, o)
								}, e.prototype.destroy = function() {
									this._initPTS = this._initDTS = void 0, this._duration = 0
								}, e.prototype._parsePAT = function(e, t) {
									return (31 & e[t + 10]) << 8 | e[t + 11]
								}, e.prototype._parsePMT = function(e, t, r, n) {
									var i, s, o = {
										audio: -1,
										avc: -1,
										id3: -1,
										isAAC: !0
									};
									for (i = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4, t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < i;) {
										switch (s = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
											case 207:
												if (!n) {
													l.logger.log("unkown stream type:" + e[t]);
													break
												}
												case 15:
													-1 === o.audio && (o.audio = s);
													break;
												case 21:
													-1 === o.id3 && (o.id3 = s);
													break;
												case 219:
													if (!n) {
														l.logger.log("unkown stream type:" + e[t]);
														break
													}
													case 27:
														-1 === o.avc && (o.avc = s);
														break;
													case 3:
													case 4:
														r ? -1 === o.audio && (o.audio = s, o.isAAC = !1) : l.logger.log("MPEG audio found, not supported in this browser for now");
														break;
													case 36:
														l.logger.warn("HEVC stream type found, not supported for now");
														break;
													default:
														l.logger.log("unkown stream type:" + e[t])
										}
										t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
									}
									return o
								}, e.prototype._parsePES = function(e) {
									var t, r, n, i, s, o, a, d, c = 0,
										u = e.data;
									if (!e || 0 === e.size) return null;
									for (; u[0].length < 19 && u.length > 1;) {
										var h = new Uint8Array(u[0].length + u[1].length);
										h.set(u[0]), h.set(u[1], u[0].length), u[0] = h, u.splice(1, 1)
									}
									if (1 === ((t = u[0])[0] << 16) + (t[1] << 8) + t[2]) {
										if ((n = (t[4] << 8) + t[5]) && n > e.size - 6) return null;
										192 & (r = t[7]) && ((o = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2) > 4294967295 && (o -= 8589934592), 64 & r ? ((a = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 4294967295 && (a -= 8589934592), o - a > 54e5 && (l.logger.warn(Math.round((o - a) / 9e4) + "s delta between PTS and DTS, align them"), o = a)) : a = o), d = (i = t[8]) + 9, e.size -= d, s = new Uint8Array(e.size);
										for (var p = 0, f = u.length; p < f; p++) {
											var g = (t = u[p]).byteLength;
											if (d) {
												if (d > g) {
													d -= g;
													continue
												}
												t = t.subarray(d), g -= d, d = 0
											}
											s.set(t, c), c += g
										}
										return n && (n -= i + 3), {
											data: s,
											pts: o,
											dts: a,
											len: n
										}
									}
									return null
								}, e.prototype.pushAccesUnit = function(e, t) {
									if (e.units.length && e.frame) {
										var r = t.samples,
											n = r.length;
										!this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (n || this.contiguous) ? (e.id = n, r.push(e)) : t.dropped++
									}
									e.debug.length && l.logger.log(e.pts + "/" + e.dts + ":" + e.debug)
								}, e.prototype._parseAVCPES = function(e, t) {
									var r, n, i, s = this,
										a = this._avcTrack,
										l = this._parseAVCNALu(e.data),
										d = this.avcSample,
										c = !1,
										u = this.pushAccesUnit.bind(this),
										h = function(e, t, r, n) {
											return {
												key: e,
												pts: t,
												dts: r,
												units: [],
												debug: n
											}
										};
									e.data = null, d && l.length && !a.audFound && (u(d, a), d = this.avcSample = h(!1, e.pts, e.dts, "")), l.forEach((function(t) {
										switch (t.type) {
											case 1:
												n = !0, d || (d = s.avcSample = h(!0, e.pts, e.dts, "")), d.frame = !0;
												var l = t.data;
												if (c && l.length > 4) {
													var p = new o.default(l).readSliceType();
													2 !== p && 4 !== p && 7 !== p && 9 !== p || (d.key = !0)
												}
												break;
											case 5:
												n = !0, d || (d = s.avcSample = h(!0, e.pts, e.dts, "")), d.key = !0, d.frame = !0;
												break;
											case 6:
												n = !0, (r = new o.default(s.discardEPB(t.data))).readUByte();
												for (var f = 0, g = 0, v = !1, m = 0; !v && r.bytesAvailable > 1;) {
													f = 0;
													do {
														f += m = r.readUByte()
													} while (255 === m);
													g = 0;
													do {
														g += m = r.readUByte()
													} while (255 === m);
													if (4 === f && 0 !== r.bytesAvailable) {
														if (v = !0, 181 === r.readUByte() && 49 === r.readUShort() && 1195456820 === r.readUInt() && 3 === r.readUByte()) {
															var b = r.readUByte(),
																y = 31 & b,
																_ = [b, r.readUByte()];
															for (i = 0; i < y; i++) _.push(r.readUByte()), _.push(r.readUByte()), _.push(r.readUByte());
															s._insertSampleInOrder(s._txtTrack.samples, {
																type: 3,
																pts: e.pts,
																bytes: _
															})
														}
													} else if (g < r.bytesAvailable)
														for (i = 0; i < g; i++) r.readUByte()
												}
												break;
											case 7:
												if (n = !0, c = !0, !a.sps) {
													var w = (r = new o.default(t.data)).readSPS();
													a.width = w.width, a.height = w.height, a.pixelRatio = w.pixelRatio, a.sps = [t.data], a.duration = s._duration;
													var E = t.data.subarray(1, 4),
														S = "avc1.";
													for (i = 0; i < 3; i++) {
														var T = E[i].toString(16);
														T.length < 2 && (T = "0" + T), S += T
													}
													a.codec = S
												}
												break;
											case 8:
												n = !0, a.pps || (a.pps = [t.data]);
												break;
											case 9:
												n = !1, a.audFound = !0, d && u(d, a), d = s.avcSample = h(!1, e.pts, e.dts, "");
												break;
											case 12:
												n = !1;
												break;
											default:
												n = !1, d && (d.debug += "unknown NAL " + t.type + " ")
										}
										d && n && d.units.push(t)
									})), t && d && (u(d, a), this.avcSample = null)
								}, e.prototype._insertSampleInOrder = function(e, t) {
									var r = e.length;
									if (r > 0) {
										if (t.pts >= e[r - 1].pts) e.push(t);
										else
											for (var n = r - 1; n >= 0; n--)
												if (t.pts < e[n].pts) {
													e.splice(n, 0, t);
													break
												}
									} else e.push(t)
								}, e.prototype._getLastNalUnit = function() {
									var e, t = this.avcSample;
									if (!t || 0 === t.units.length) {
										var r = this._avcTrack.samples;
										t = r[r.length - 1]
									}
									if (t) {
										var n = t.units;
										e = n[n.length - 1]
									}
									return e
								}, e.prototype._parseAVCNALu = function(e) {
									var t, r, n, i, s = 0,
										o = e.byteLength,
										a = this._avcTrack,
										l = a.naluState || 0,
										d = l,
										c = [],
										u = -1;
									for (-1 === l && (u = 0, i = 31 & e[0], l = 0, s = 1); s < o;)
										if (t = e[s++], l)
											if (1 !== l)
												if (t)
													if (1 === t) {
														var h, p;
														u >= 0 ? (n = {
															data: e.subarray(u, s - l - 1),
															type: i
														}, c.push(n)) : (h = this._getLastNalUnit()) && (d && s <= 4 - d && h.state && (h.data = h.data.subarray(0, h.data.byteLength - d)), (r = s - l - 1) > 0 && ((p = new Uint8Array(h.data.byteLength + r)).set(h.data, 0), p.set(e.subarray(0, r), h.data.byteLength), h.data = p)), s < o ? (u = s, i = 31 & e[s], l = 0) : l = -1
													} else l = 0;
									else l = 3;
									else l = t ? 0 : 2;
									else l = t ? 0 : 1;
									return u >= 0 && l >= 0 && (n = {
										data: e.subarray(u, o),
										type: i,
										state: l
									}, c.push(n)), 0 === c.length && (h = this._getLastNalUnit()) && ((p = new Uint8Array(h.data.byteLength + e.byteLength)).set(h.data, 0), p.set(e, h.data.byteLength), h.data = p), a.naluState = l, c
								}, e.prototype.discardEPB = function(e) {
									for (var t, r, n = e.byteLength, i = [], s = 1; s < n - 2;) 0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2] ? (i.push(s + 2), s += 2) : s++;
									if (0 === i.length) return e;
									t = n - i.length, r = new Uint8Array(t);
									var o = 0;
									for (s = 0; s < t; o++, s++) o === i[0] && (o++, i.shift()), r[s] = e[o];
									return r
								}, e.prototype._parseAACPES = function(e) {
									var t, r, i, o, a, c = this._audioTrack,
										u = e.data,
										h = e.pts,
										p = this.aacOverFlow,
										f = this.aacLastPTS;
									if (p) {
										var g = new Uint8Array(p.byteLength + u.byteLength);
										g.set(p, 0), g.set(u, p.byteLength), u = g
									}
									for (i = 0, a = u.length; i < a - 1 && !n.isHeader(u, i); i++);
									if (i) {
										var v = void 0,
											m = void 0;
										if (i < a - 1 ? (v = "AAC PES did not start with ADTS header,offset:" + i, m = !1) : (v = "no ADTS header found in AAC PES", m = !0), l.logger.warn("parsing error:" + v), this.observer.trigger(s.default.ERROR, {
												type: d.ErrorTypes.MEDIA_ERROR,
												details: d.ErrorDetails.FRAG_PARSING_ERROR,
												fatal: m,
												reason: v
											}), m) return
									}
									if (n.initTrackConfig(c, this.observer, u, i, this.audioCodec), r = 0, t = n.getFrameDuration(c.samplerate), p && f) {
										var b = f + t;
										Math.abs(b - h) > 1 && (l.logger.log("AAC: align PTS for overlapping frames by " + Math.round((b - h) / 90)), h = b)
									}
									for (; i < a;)
										if (n.isHeader(u, i) && i + 5 < a) {
											var y = n.appendFrame(c, u, i, h, r);
											if (!y) break;
											i += y.length, o = y.sample.pts, r++
										} else i++;
									p = i < a ? u.subarray(i, a) : null, this.aacOverFlow = p, this.aacLastPTS = o
								}, e.prototype._parseMPEGPES = function(e) {
									for (var t = e.data, r = t.length, n = 0, s = 0, o = e.pts; s < r;)
										if (i.default.isHeader(t, s)) {
											var a = i.default.appendFrame(this._audioTrack, t, s, o, n);
											if (!a) break;
											s += a.length, n++
										} else s++
								}, e.prototype._parseID3PES = function(e) {
									this._id3Track.samples.push(e)
								}, e
							}();
						t.default = u
					},
					"./src/errors.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.ErrorTypes = {
							NETWORK_ERROR: "networkError",
							MEDIA_ERROR: "mediaError",
							KEY_SYSTEM_ERROR: "keySystemError",
							MUX_ERROR: "muxError",
							OTHER_ERROR: "otherError"
						}, t.ErrorDetails = {
							KEY_SYSTEM_NO_KEYS: "keySystemNoKeys",
							KEY_SYSTEM_NO_ACCESS: "keySystemNoAccess",
							KEY_SYSTEM_NO_SESSION: "keySystemNoSession",
							KEY_SYSTEM_LICENSE_REQUEST_FAILED: "keySystemLicenseRequestFailed",
							MANIFEST_LOAD_ERROR: "manifestLoadError",
							MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
							MANIFEST_PARSING_ERROR: "manifestParsingError",
							MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
							LEVEL_LOAD_ERROR: "levelLoadError",
							LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
							LEVEL_SWITCH_ERROR: "levelSwitchError",
							AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
							AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
							FRAG_LOAD_ERROR: "fragLoadError",
							FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
							FRAG_DECRYPT_ERROR: "fragDecryptError",
							FRAG_PARSING_ERROR: "fragParsingError",
							REMUX_ALLOC_ERROR: "remuxAllocError",
							KEY_LOAD_ERROR: "keyLoadError",
							KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
							BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
							BUFFER_APPEND_ERROR: "bufferAppendError",
							BUFFER_APPENDING_ERROR: "bufferAppendingError",
							BUFFER_STALLED_ERROR: "bufferStalledError",
							BUFFER_FULL_ERROR: "bufferFullError",
							BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
							BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
							INTERNAL_EXCEPTION: "internalException"
						}
					},
					"./src/event-handler.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/utils/logger.js"),
							i = r("./src/errors.js"),
							s = r("./src/events.js"),
							o = {
								hlsEventGeneric: !0,
								hlsHandlerDestroying: !0,
								hlsHandlerDestroyed: !0
							},
							a = function() {
								function e(e) {
									for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
									this.hls = e, this.onEvent = this.onEvent.bind(this), this.handledEvents = t, this.useGenericHandler = !0, this.registerListeners()
								}
								return e.prototype.destroy = function() {
									this.onHandlerDestroying(), this.unregisterListeners(), this.onHandlerDestroyed()
								}, e.prototype.onHandlerDestroying = function() {}, e.prototype.onHandlerDestroyed = function() {}, e.prototype.isEventHandler = function() {
									return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent
								}, e.prototype.registerListeners = function() {
									this.isEventHandler() && this.handledEvents.forEach((function(e) {
										if (o[e]) throw new Error("Forbidden event-name: " + e);
										this.hls.on(e, this.onEvent)
									}), this)
								}, e.prototype.unregisterListeners = function() {
									this.isEventHandler() && this.handledEvents.forEach((function(e) {
										this.hls.off(e, this.onEvent)
									}), this)
								}, e.prototype.onEvent = function(e, t) {
									this.onEventGeneric(e, t)
								}, e.prototype.onEventGeneric = function(e, t) {
									try {
										(function(e, t) {
											var r = "on" + e.replace("hls", "");
											if ("function" != typeof this[r]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
											return this[r].bind(this, t)
										}).call(this, e, t).call()
									} catch (r) {
										n.logger.error("An internal error happened while handling event " + e + '. Error message: "' + r.message + '". Here is a stacktrace:', r), this.hls.trigger(s.default.ERROR, {
											type: i.ErrorTypes.OTHER_ERROR,
											details: i.ErrorDetails.INTERNAL_EXCEPTION,
											fatal: !1,
											event: e,
											err: r
										})
									}
								}, e
							}();
						t.default = a
					},
					"./src/events.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = {
							MEDIA_ATTACHING: "hlsMediaAttaching",
							MEDIA_ATTACHED: "hlsMediaAttached",
							MEDIA_DETACHING: "hlsMediaDetaching",
							MEDIA_DETACHED: "hlsMediaDetached",
							BUFFER_RESET: "hlsBufferReset",
							BUFFER_CODECS: "hlsBufferCodecs",
							BUFFER_CREATED: "hlsBufferCreated",
							BUFFER_APPENDING: "hlsBufferAppending",
							BUFFER_APPENDED: "hlsBufferAppended",
							BUFFER_EOS: "hlsBufferEos",
							BUFFER_FLUSHING: "hlsBufferFlushing",
							BUFFER_FLUSHED: "hlsBufferFlushed",
							MANIFEST_LOADING: "hlsManifestLoading",
							MANIFEST_LOADED: "hlsManifestLoaded",
							MANIFEST_PARSED: "hlsManifestParsed",
							LEVEL_SWITCHING: "hlsLevelSwitching",
							LEVEL_SWITCHED: "hlsLevelSwitched",
							LEVEL_LOADING: "hlsLevelLoading",
							LEVEL_LOADED: "hlsLevelLoaded",
							LEVEL_UPDATED: "hlsLevelUpdated",
							LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
							AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
							AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
							AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
							AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
							AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
							SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
							SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
							SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
							SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
							SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
							INIT_PTS_FOUND: "hlsInitPtsFound",
							FRAG_LOADING: "hlsFragLoading",
							FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
							FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
							FRAG_LOADED: "hlsFragLoaded",
							FRAG_DECRYPTED: "hlsFragDecrypted",
							FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
							FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
							FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
							FRAG_PARSING_DATA: "hlsFragParsingData",
							FRAG_PARSED: "hlsFragParsed",
							FRAG_BUFFERED: "hlsFragBuffered",
							FRAG_CHANGED: "hlsFragChanged",
							FPS_DROP: "hlsFpsDrop",
							FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
							ERROR: "hlsError",
							DESTROYING: "hlsDestroying",
							KEY_LOADING: "hlsKeyLoading",
							KEY_LOADED: "hlsKeyLoaded",
							STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
						}
					},
					"./src/hls.js": function(e, t, r) {
						"use strict";
						var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var s = r("./node_modules/url-toolkit/src/url-toolkit.js"),
							o = r("./src/errors.js"),
							a = r("./src/loader/playlist-loader.js"),
							l = r("./src/loader/fragment-loader.js"),
							d = r("./src/loader/key-loader.js"),
							c = r("./src/controller/fragment-tracker.js"),
							u = r("./src/controller/stream-controller.js"),
							h = r("./src/controller/level-controller.js"),
							p = r("./src/controller/id3-track-controller.js"),
							f = r("./src/is-supported.js"),
							g = r("./src/utils/logger.js"),
							v = r("./src/config.js"),
							m = r("./src/events.js"),
							b = function(e) {
								function t(r) {
									void 0 === r && (r = {});
									var n = e.call(this) || this,
										i = t.DefaultConfig;
									if ((r.liveSyncDurationCount || r.liveMaxLatencyDurationCount) && (r.liveSyncDuration || r.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
									for (var s in i) s in r || (r[s] = i[s]);
									if (void 0 !== r.liveMaxLatencyDurationCount && r.liveMaxLatencyDurationCount <= r.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
									if (void 0 !== r.liveMaxLatencyDuration && (r.liveMaxLatencyDuration <= r.liveSyncDuration || void 0 === r.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
									g.enableLogs(r.debug), n.config = r, n._autoLevelCapping = -1;
									var o = n.abrController = new r.abrController(n),
										f = new r.bufferController(n),
										v = new r.capLevelController(n),
										m = new r.fpsController(n),
										b = new a.default(n),
										y = new l.default(n),
										_ = new d.default(n),
										w = new p.default(n),
										E = n.levelController = new h.default(n),
										S = new c.FragmentTracker(n),
										T = [E, n.streamController = new u.default(n, S)],
										k = r.audioStreamController;
									k && T.push(new k(n, S)), n.networkControllers = T;
									var A = [b, y, _, o, f, v, m, w, S];
									if (k = r.audioTrackController) {
										var x = new k(n);
										n.audioTrackController = x, A.push(x)
									}
									if (k = r.subtitleTrackController) {
										var R = new k(n);
										n.subtitleTrackController = R, T.push(R)
									}
									if (k = r.emeController) {
										var O = new k(n);
										n.emeController = O, A.push(O)
									}
									return (k = r.subtitleStreamController) && T.push(new k(n, S)), (k = r.timelineController) && A.push(new k(n)), n.coreComponents = A, n
								}
								return i(t, e), Object.defineProperty(t, "version", {
									get: function() {
										return "0.12.4"
									},
									enumerable: !0,
									configurable: !0
								}), t.isSupported = function() {
									return f.isSupported()
								}, Object.defineProperty(t, "Events", {
									get: function() {
										return m.default
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t, "ErrorTypes", {
									get: function() {
										return o.ErrorTypes
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t, "ErrorDetails", {
									get: function() {
										return o.ErrorDetails
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t, "DefaultConfig", {
									get: function() {
										return t.defaultConfig ? t.defaultConfig : v.hlsDefaultConfig
									},
									set: function(e) {
										t.defaultConfig = e
									},
									enumerable: !0,
									configurable: !0
								}), t.prototype.destroy = function() {
									g.logger.log("destroy"), this.trigger(m.default.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach((function(e) {
										e.destroy()
									})), this.url = null, this.removeAllListeners(), this._autoLevelCapping = -1
								}, t.prototype.attachMedia = function(e) {
									g.logger.log("attachMedia"), this.media = e, this.trigger(m.default.MEDIA_ATTACHING, {
										media: e
									})
								}, t.prototype.detachMedia = function() {
									g.logger.log("detachMedia"), this.trigger(m.default.MEDIA_DETACHING), this.media = null
								}, t.prototype.loadSource = function(e) {
									e = s.buildAbsoluteURL(window.location.href, e, {
										alwaysNormalize: !0
									}), g.logger.log("loadSource:" + e), this.url = e, this.trigger(m.default.MANIFEST_LOADING, {
										url: e
									})
								}, t.prototype.startLoad = function(e) {
									void 0 === e && (e = -1), g.logger.log("startLoad(" + e + ")"), this.networkControllers.forEach((function(t) {
										t.startLoad(e)
									}))
								}, t.prototype.stopLoad = function() {
									g.logger.log("stopLoad"), this.networkControllers.forEach((function(e) {
										e.stopLoad()
									}))
								}, t.prototype.swapAudioCodec = function() {
									g.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
								}, t.prototype.recoverMediaError = function() {
									g.logger.log("recoverMediaError");
									var e = this.media;
									this.detachMedia(), this.attachMedia(e)
								}, Object.defineProperty(t.prototype, "levels", {
									get: function() {
										return this.levelController.levels
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "currentLevel", {
									get: function() {
										return this.streamController.currentLevel
									},
									set: function(e) {
										g.logger.log("set currentLevel:" + e), this.loadLevel = e, this.streamController.immediateLevelSwitch()
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "nextLevel", {
									get: function() {
										return this.streamController.nextLevel
									},
									set: function(e) {
										g.logger.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch()
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "loadLevel", {
									get: function() {
										return this.levelController.level
									},
									set: function(e) {
										g.logger.log("set loadLevel:" + e), this.levelController.manualLevel = e
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "nextLoadLevel", {
									get: function() {
										return this.levelController.nextLoadLevel
									},
									set: function(e) {
										this.levelController.nextLoadLevel = e
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "firstLevel", {
									get: function() {
										return Math.max(this.levelController.firstLevel, this.minAutoLevel)
									},
									set: function(e) {
										g.logger.log("set firstLevel:" + e), this.levelController.firstLevel = e
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "startLevel", {
									get: function() {
										return this.levelController.startLevel
									},
									set: function(e) {
										g.logger.log("set startLevel:" + e), -1 !== e && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "autoLevelCapping", {
									get: function() {
										return this._autoLevelCapping
									},
									set: function(e) {
										g.logger.log("set autoLevelCapping:" + e), this._autoLevelCapping = e
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "autoLevelEnabled", {
									get: function() {
										return -1 === this.levelController.manualLevel
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "manualLevel", {
									get: function() {
										return this.levelController.manualLevel
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "minAutoLevel", {
									get: function() {
										for (var e = this.levels, t = this.config.minAutoBitrate, r = e ? e.length : 0, n = 0; n < r; n++)
											if ((e[n].realBitrate ? Math.max(e[n].realBitrate, e[n].bitrate) : e[n].bitrate) > t) return n;
										return 0
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "maxAutoLevel", {
									get: function() {
										var e = this.levels,
											t = this.autoLevelCapping;
										return -1 === t && e && e.length ? e.length - 1 : t
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "nextAutoLevel", {
									get: function() {
										return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
									},
									set: function(e) {
										this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "audioTracks", {
									get: function() {
										var e = this.audioTrackController;
										return e ? e.audioTracks : []
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "audioTrack", {
									get: function() {
										var e = this.audioTrackController;
										return e ? e.audioTrack : -1
									},
									set: function(e) {
										var t = this.audioTrackController;
										t && (t.audioTrack = e)
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "liveSyncPosition", {
									get: function() {
										return this.streamController.liveSyncPosition
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "subtitleTracks", {
									get: function() {
										var e = this.subtitleTrackController;
										return e ? e.subtitleTracks : []
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "subtitleTrack", {
									get: function() {
										var e = this.subtitleTrackController;
										return e ? e.subtitleTrack : -1
									},
									set: function(e) {
										var t = this.subtitleTrackController;
										t && (t.subtitleTrack = e)
									},
									enumerable: !0,
									configurable: !0
								}), Object.defineProperty(t.prototype, "subtitleDisplay", {
									get: function() {
										var e = this.subtitleTrackController;
										return !!e && e.subtitleDisplay
									},
									set: function(e) {
										var t = this.subtitleTrackController;
										t && (t.subtitleDisplay = e)
									},
									enumerable: !0,
									configurable: !0
								}), t
							}(r("./src/observer.js").Observer);
						t.default = b
					},
					"./src/is-supported.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/utils/mediasource-helper.js");
						t.isSupported = function() {
							var e = n.getMediaSource(),
								t = window.SourceBuffer || window.WebKitSourceBuffer,
								r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
								i = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
							return !!r && !!i
						}
					},
					"./src/loader/fragment-loader.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var s = r("./src/events.js"),
								o = r("./src/event-handler.js"),
								a = r("./src/errors.js"),
								l = r("./src/utils/logger.js"),
								d = function(t) {
									function r(e) {
										var r = t.call(this, e, s.default.FRAG_LOADING) || this;
										return r.loaders = {}, r
									}
									return i(r, t), r.prototype.destroy = function() {
										var e = this.loaders;
										for (var r in e) {
											var n = e[r];
											n && n.destroy()
										}
										this.loaders = {}, t.prototype.destroy.call(this)
									}, r.prototype.onFragLoading = function(t) {
										var r = t.frag,
											n = r.type,
											i = this.loaders,
											s = this.hls.config,
											o = s.fLoader,
											a = s.loader;
										r.loaded = 0;
										var d, c, u, h = i[n];
										h && (l.logger.warn("abort previous fragment loader for type: " + n), h.abort()), h = i[n] = r.loader = s.fLoader ? new o(s) : new a(s), d = {
											url: r.url,
											frag: r,
											responseType: "arraybuffer",
											progressData: !1
										};
										var p = r.byteRangeStartOffset,
											f = r.byteRangeEndOffset;
										e.isFinite(p) && e.isFinite(f) && (d.rangeStart = p, d.rangeEnd = f), c = {
											timeout: s.fragLoadingTimeOut,
											maxRetry: 0,
											retryDelay: 0,
											maxRetryDelay: s.fragLoadingMaxRetryTimeout
										}, u = {
											onSuccess: this.loadsuccess.bind(this),
											onError: this.loaderror.bind(this),
											onTimeout: this.loadtimeout.bind(this),
											onProgress: this.loadprogress.bind(this)
										}, h.load(d, c, u)
									}, r.prototype.loadsuccess = function(e, t, r, n) {
										void 0 === n && (n = null);
										var i = e.data,
											o = r.frag;
										o.loader = void 0, this.loaders[o.type] = void 0, this.hls.trigger(s.default.FRAG_LOADED, {
											payload: i,
											frag: o,
											stats: t,
											networkDetails: n
										})
									}, r.prototype.loaderror = function(e, t, r) {
										void 0 === r && (r = null);
										var n = t.frag,
											i = n.loader;
										i && i.abort(), this.loaders[n.type] = void 0, this.hls.trigger(s.default.ERROR, {
											type: a.ErrorTypes.NETWORK_ERROR,
											details: a.ErrorDetails.FRAG_LOAD_ERROR,
											fatal: !1,
											frag: t.frag,
											response: e,
											networkDetails: r
										})
									}, r.prototype.loadtimeout = function(e, t, r) {
										void 0 === r && (r = null);
										var n = t.frag,
											i = n.loader;
										i && i.abort(), this.loaders[n.type] = void 0, this.hls.trigger(s.default.ERROR, {
											type: a.ErrorTypes.NETWORK_ERROR,
											details: a.ErrorDetails.FRAG_LOAD_TIMEOUT,
											fatal: !1,
											frag: t.frag,
											networkDetails: r
										})
									}, r.prototype.loadprogress = function(e, t, r, n) {
										void 0 === n && (n = null);
										var i = t.frag;
										i.loaded = e.loaded, this.hls.trigger(s.default.FRAG_LOAD_PROGRESS, {
											frag: i,
											stats: e,
											networkDetails: n
										})
									}, r
								}(o.default);
							t.default = d
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/loader/fragment.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./node_modules/url-toolkit/src/url-toolkit.js"),
								i = r("./src/loader/level-key.js"),
								s = function() {
									function t() {
										var e;
										this._url = null, this._byteRange = null, this._decryptdata = null, this.tagList = [], this.programDateTime = null, this.rawProgramDateTime = null, this._elementaryStreams = ((e = {})[t.ElementaryStreamTypes.AUDIO] = !1, e[t.ElementaryStreamTypes.VIDEO] = !1, e)
									}
									return Object.defineProperty(t, "ElementaryStreamTypes", {
										get: function() {
											return {
												AUDIO: "audio",
												VIDEO: "video"
											}
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "url", {
										get: function() {
											return !this._url && this.relurl && (this._url = n.buildAbsoluteURL(this.baseurl, this.relurl, {
												alwaysNormalize: !0
											})), this._url
										},
										set: function(e) {
											this._url = e
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "byteRange", {
										get: function() {
											if (!this._byteRange && !this.rawByteRange) return [];
											if (this._byteRange) return this._byteRange;
											var e = [];
											if (this.rawByteRange) {
												var t = this.rawByteRange.split("@", 2);
												if (1 === t.length) {
													var r = this.lastByteRangeEndOffset;
													e[0] = r || 0
												} else e[0] = parseInt(t[1]);
												e[1] = parseInt(t[0]) + e[0], this._byteRange = e
											}
											return e
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "byteRangeStartOffset", {
										get: function() {
											return this.byteRange[0]
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "byteRangeEndOffset", {
										get: function() {
											return this.byteRange[1]
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "decryptdata", {
										get: function() {
											return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), this._decryptdata
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "endProgramDateTime", {
										get: function() {
											if (!e.isFinite(this.programDateTime)) return null;
											var t = e.isFinite(this.duration) ? this.duration : 0;
											return this.programDateTime + 1e3 * t
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(t.prototype, "encrypted", {
										get: function() {
											return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
										},
										enumerable: !0,
										configurable: !0
									}), t.prototype.addElementaryStream = function(e) {
										this._elementaryStreams[e] = !0
									}, t.prototype.hasElementaryStream = function(e) {
										return !0 === this._elementaryStreams[e]
									}, t.prototype.createInitializationVector = function(e) {
										for (var t = new Uint8Array(16), r = 12; r < 16; r++) t[r] = e >> 8 * (15 - r) & 255;
										return t
									}, t.prototype.fragmentDecryptdataFromLevelkey = function(e, t) {
										var r = e;
										return e && e.method && e.uri && !e.iv && ((r = new i.default).method = e.method, r.baseuri = e.baseuri, r.reluri = e.reluri, r.iv = this.createInitializationVector(t)), r
									}, t
								}();
							t.default = s
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/loader/key-loader.js": function(e, t, r) {
						"use strict";
						var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var s = r("./src/events.js"),
							o = r("./src/event-handler.js"),
							a = r("./src/errors.js"),
							l = r("./src/utils/logger.js"),
							d = function(e) {
								function t(t) {
									var r = e.call(this, t, s.default.KEY_LOADING) || this;
									return r.loaders = {}, r.decryptkey = null, r.decrypturl = null, r
								}
								return i(t, e), t.prototype.destroy = function() {
									for (var e in this.loaders) {
										var t = this.loaders[e];
										t && t.destroy()
									}
									this.loaders = {}, o.default.prototype.destroy.call(this)
								}, t.prototype.onKeyLoading = function(e) {
									var t = e.frag,
										r = t.type,
										n = this.loaders[r],
										i = t.decryptdata,
										o = i.uri;
									if (o !== this.decrypturl || null === this.decryptkey) {
										var a, d, c, u = this.hls.config;
										n && (l.logger.warn("abort previous key loader for type:" + r), n.abort()), t.loader = this.loaders[r] = new u.loader(u), this.decrypturl = o, this.decryptkey = null, a = {
											url: o,
											frag: t,
											responseType: "arraybuffer"
										}, d = {
											timeout: u.fragLoadingTimeOut,
											maxRetry: 0,
											retryDelay: u.fragLoadingRetryDelay,
											maxRetryDelay: u.fragLoadingMaxRetryTimeout
										}, c = {
											onSuccess: this.loadsuccess.bind(this),
											onError: this.loaderror.bind(this),
											onTimeout: this.loadtimeout.bind(this)
										}, t.loader.load(a, d, c)
									} else this.decryptkey && (i.key = this.decryptkey, this.hls.trigger(s.default.KEY_LOADED, {
										frag: t
									}))
								}, t.prototype.loadsuccess = function(e, t, r) {
									var n = r.frag;
									this.decryptkey = n.decryptdata.key = new Uint8Array(e.data), n.loader = void 0, this.loaders[n.type] = void 0, this.hls.trigger(s.default.KEY_LOADED, {
										frag: n
									})
								}, t.prototype.loaderror = function(e, t) {
									var r = t.frag,
										n = r.loader;
									n && n.abort(), this.loaders[t.type] = void 0, this.hls.trigger(s.default.ERROR, {
										type: a.ErrorTypes.NETWORK_ERROR,
										details: a.ErrorDetails.KEY_LOAD_ERROR,
										fatal: !1,
										frag: r,
										response: e
									})
								}, t.prototype.loadtimeout = function(e, t) {
									var r = t.frag,
										n = r.loader;
									n && n.abort(), this.loaders[t.type] = void 0, this.hls.trigger(s.default.ERROR, {
										type: a.ErrorTypes.NETWORK_ERROR,
										details: a.ErrorDetails.KEY_LOAD_TIMEOUT,
										fatal: !1,
										frag: r
									})
								}, t
							}(o.default);
						t.default = d
					},
					"./src/loader/level-key.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./node_modules/url-toolkit/src/url-toolkit.js"),
							i = function() {
								function e() {
									this.method = null, this.key = null, this.iv = null, this._uri = null
								}
								return Object.defineProperty(e.prototype, "uri", {
									get: function() {
										return !this._uri && this.reluri && (this._uri = n.buildAbsoluteURL(this.baseuri, this.reluri, {
											alwaysNormalize: !0
										})), this._uri
									},
									enumerable: !0,
									configurable: !0
								}), e
							}();
						t.default = i
					},
					"./src/loader/level.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var r = function() {
								function t(e) {
									this.endCC = 0, this.endSN = 0, this.fragments = [], this.initSegment = null, this.live = !0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = e, this.version = null
								}
								return Object.defineProperty(t.prototype, "hasProgramDateTime", {
									get: function() {
										return !(!this.fragments[0] || !e.isFinite(this.fragments[0].programDateTime))
									},
									enumerable: !0,
									configurable: !0
								}), t
							}();
							t.default = r
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/loader/m3u8-parser.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./node_modules/url-toolkit/src/url-toolkit.js"),
								i = r("./src/loader/fragment.js"),
								s = r("./src/loader/level.js"),
								o = r("./src/loader/level-key.js"),
								a = r("./src/utils/attr-list.js"),
								l = r("./src/utils/logger.js"),
								d = r("./src/utils/codecs.js"),
								c = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
								u = /#EXT-X-MEDIA:(.*)/g,
								h = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
								p = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
								f = /\.(mp4|m4s|m4v|m4a)$/i,
								g = function() {
									function t() {}
									return t.findGroup = function(e, t) {
										if (!e) return null;
										for (var r = null, n = 0; n < e.length; n++) {
											var i = e[n];
											i.id === t && (r = i)
										}
										return r
									}, t.convertAVC1ToAVCOTI = function(e) {
										var t, r = e.split(".");
										return r.length > 2 ? (t = r.shift() + ".", t += parseInt(r.shift()).toString(16), t += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : t = e, t
									}, t.resolve = function(e, t) {
										return n.buildAbsoluteURL(t, e, {
											alwaysNormalize: !0
										})
									}, t.parseMasterPlaylist = function(e, r) {
										var n, i = [];

										function s(e, t) {
											["video", "audio"].forEach((function(r) {
												var n = e.filter((function(e) {
													return d.isCodecType(e, r)
												}));
												if (n.length) {
													var i = n.filter((function(e) {
														return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
													}));
													t[r + "Codec"] = i.length > 0 ? i[0] : n[0], e = e.filter((function(e) {
														return -1 === n.indexOf(e)
													}))
												}
											})), t.unknownCodecs = e
										}
										for (c.lastIndex = 0; null != (n = c.exec(e));) {
											var o = {},
												l = o.attrs = new a.default(n[1]);
											o.url = t.resolve(n[2], r);
											var u = l.decimalResolution("RESOLUTION");
											u && (o.width = u.width, o.height = u.height), o.bitrate = l.decimalInteger("AVERAGE-BANDWIDTH") || l.decimalInteger("BANDWIDTH"), o.name = l.NAME, s([].concat((l.CODECS || "").split(/[ ,]+/)), o), o.videoCodec && -1 !== o.videoCodec.indexOf("avc1") && (o.videoCodec = t.convertAVC1ToAVCOTI(o.videoCodec)), i.push(o)
										}
										return i
									}, t.parseMasterPlaylistMedia = function(e, r, n, i) {
										var s;
										void 0 === i && (i = []);
										var o = [],
											l = 0;
										for (u.lastIndex = 0; null !== (s = u.exec(e));) {
											var d = {},
												c = new a.default(s[1]);
											if (c.TYPE === n) {
												if (d.groupId = c["GROUP-ID"], d.name = c.NAME, d.type = n, d.default = "YES" === c.DEFAULT, d.autoselect = "YES" === c.AUTOSELECT, d.forced = "YES" === c.FORCED, c.URI && (d.url = t.resolve(c.URI, r)), d.lang = c.LANGUAGE, d.name || (d.name = d.lang), i.length) {
													var h = t.findGroup(i, d.groupId);
													d.audioCodec = h ? h.codec : i[0].codec
												}
												d.id = l++, o.push(d)
											}
										}
										return o
									}, t.parseLevelPlaylist = function(t, r, n, d, c) {
										var u, g, m = 0,
											b = 0,
											y = new s.default(r),
											_ = new o.default,
											w = 0,
											E = null,
											S = new i.default,
											T = null;
										for (h.lastIndex = 0; null !== (u = h.exec(t));) {
											var k = u[1];
											if (k) {
												S.duration = parseFloat(k);
												var A = (" " + u[2]).slice(1);
												S.title = A || null, S.tagList.push(A ? ["INF", k, A] : ["INF", k])
											} else if (u[3]) {
												if (e.isFinite(S.duration)) {
													var x = m++;
													S.type = d, S.start = b, S.levelkey = _, S.sn = x, S.level = n, S.cc = w, S.urlId = c, S.baseurl = r, S.relurl = (" " + u[3]).slice(1), v(S, E), y.fragments.push(S), E = S, b += S.duration, S = new i.default
												}
											} else if (u[4]) {
												if (S.rawByteRange = (" " + u[4]).slice(1), E) {
													var R = E.byteRangeEndOffset;
													R && (S.lastByteRangeEndOffset = R)
												}
											} else if (u[5]) S.rawProgramDateTime = (" " + u[5]).slice(1), S.tagList.push(["PROGRAM-DATE-TIME", S.rawProgramDateTime]), null === T && (T = y.fragments.length);
											else {
												for (u = u[0].match(p), g = 1; g < u.length && void 0 === u[g]; g++);
												var O = (" " + u[g + 1]).slice(1),
													L = (" " + u[g + 2]).slice(1);
												switch (u[g]) {
													case "#":
														S.tagList.push(L ? [O, L] : [O]);
														break;
													case "PLAYLIST-TYPE":
														y.type = O.toUpperCase();
														break;
													case "MEDIA-SEQUENCE":
														m = y.startSN = parseInt(O);
														break;
													case "TARGETDURATION":
														y.targetduration = parseFloat(O);
														break;
													case "VERSION":
														y.version = parseInt(O);
														break;
													case "EXTM3U":
														break;
													case "ENDLIST":
														y.live = !1;
														break;
													case "DIS":
														w++, S.tagList.push(["DIS"]);
														break;
													case "DISCONTINUITY-SEQ":
														w = parseInt(O);
														break;
													case "KEY":
														var C = O,
															P = new a.default(C),
															D = P.enumeratedString("METHOD"),
															I = P.URI,
															M = P.hexadecimalInteger("IV");
														D && (_ = new o.default, I && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(D) >= 0 && (_.method = D, _.baseuri = r, _.reluri = I, _.key = null, _.iv = M));
														break;
													case "START":
														var j = O,
															F = new a.default(j).decimalFloatingPoint("TIME-OFFSET");
														e.isFinite(F) && (y.startTimeOffset = F);
														break;
													case "MAP":
														var N = new a.default(O);
														S.relurl = N.URI, S.rawByteRange = N.BYTERANGE, S.baseurl = r, S.level = n, S.type = d, S.sn = "initSegment", y.initSegment = S, (S = new i.default).rawProgramDateTime = y.initSegment.rawProgramDateTime;
														break;
													default:
														l.logger.warn("line parsed but not handled: " + u)
												}
											}
										}
										return (S = E) && !S.relurl && (y.fragments.pop(), b -= S.duration), y.totalduration = b, y.averagetargetduration = b / y.fragments.length, y.endSN = m - 1, y.startCC = y.fragments[0] ? y.fragments[0].cc : 0, y.endCC = w, !y.initSegment && y.fragments.length && y.fragments.every((function(e) {
											return f.test(e.relurl)
										})) && (l.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (S = new i.default).relurl = y.fragments[0].relurl, S.baseurl = r, S.level = n, S.type = d, S.sn = "initSegment", y.initSegment = S, y.needSidxRanges = !0), T && function(e, t) {
											for (var r = e[t], n = t - 1; n >= 0; n--) {
												var i = e[n];
												i.programDateTime = r.programDateTime - 1e3 * i.duration, r = i
											}
										}(y.fragments, T), y
									}, t
								}();

							function v(t, r) {
								t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : r && r.programDateTime && (t.programDateTime = r.endProgramDateTime), e.isFinite(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
							}
							t.default = g
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/loader/playlist-loader.js": function(e, t, r) {
						"use strict";
						(function(e) {
							var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(e, t) {
									e.__proto__ = t
								} || function(e, t) {
									for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
								},
								function(e, t) {
									function r() {
										this.constructor = e
									}
									n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
								});
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var s = r("./src/events.js"),
								o = r("./src/event-handler.js"),
								a = r("./src/errors.js"),
								l = r("./src/utils/logger.js"),
								d = r("./src/demux/mp4demuxer.js"),
								c = r("./src/loader/m3u8-parser.js"),
								u = window.performance,
								h = {
									MANIFEST: "manifest",
									LEVEL: "level",
									AUDIO_TRACK: "audioTrack",
									SUBTITLE_TRACK: "subtitleTrack"
								},
								p = {
									MAIN: "main",
									AUDIO: "audio",
									SUBTITLE: "subtitle"
								},
								f = function(t) {
									function r(e) {
										var r = t.call(this, e, s.default.MANIFEST_LOADING, s.default.LEVEL_LOADING, s.default.AUDIO_TRACK_LOADING, s.default.SUBTITLE_TRACK_LOADING) || this;
										return r.loaders = {}, r
									}
									return i(r, t), Object.defineProperty(r, "ContextType", {
										get: function() {
											return h
										},
										enumerable: !0,
										configurable: !0
									}), Object.defineProperty(r, "LevelType", {
										get: function() {
											return p
										},
										enumerable: !0,
										configurable: !0
									}), r.canHaveQualityLevels = function(e) {
										return e !== h.AUDIO_TRACK && e !== h.SUBTITLE_TRACK
									}, r.mapContextToLevelType = function(e) {
										switch (e.type) {
											case h.AUDIO_TRACK:
												return p.AUDIO;
											case h.SUBTITLE_TRACK:
												return p.SUBTITLE;
											default:
												return p.MAIN
										}
									}, r.getResponseUrl = function(e, t) {
										var r = e.url;
										return void 0 !== r && 0 !== r.indexOf("data:") || (r = t.url), r
									}, r.prototype.createInternalLoader = function(e) {
										var t = this.hls.config,
											r = t.pLoader,
											n = t.loader,
											i = new(r || n)(t);
										return e.loader = i, this.loaders[e.type] = i, i
									}, r.prototype.getInternalLoader = function(e) {
										return this.loaders[e.type]
									}, r.prototype.resetInternalLoader = function(e) {
										this.loaders[e] && delete this.loaders[e]
									}, r.prototype.destroyInternalLoaders = function() {
										for (var e in this.loaders) {
											var t = this.loaders[e];
											t && t.destroy(), this.resetInternalLoader(e)
										}
									}, r.prototype.destroy = function() {
										this.destroyInternalLoaders(), t.prototype.destroy.call(this)
									}, r.prototype.onManifestLoading = function(e) {
										this.load(e.url, {
											type: h.MANIFEST,
											level: 0,
											id: null
										})
									}, r.prototype.onLevelLoading = function(e) {
										this.load(e.url, {
											type: h.LEVEL,
											level: e.level,
											id: e.id
										})
									}, r.prototype.onAudioTrackLoading = function(e) {
										this.load(e.url, {
											type: h.AUDIO_TRACK,
											level: null,
											id: e.id
										})
									}, r.prototype.onSubtitleTrackLoading = function(e) {
										this.load(e.url, {
											type: h.SUBTITLE_TRACK,
											level: null,
											id: e.id
										})
									}, r.prototype.load = function(e, t) {
										var r = this.hls.config;
										l.logger.debug("Loading playlist of type " + t.type + ", level: " + t.level + ", id: " + t.id);
										var n, i, s, o, a = this.getInternalLoader(t);
										if (a) {
											var d = a.context;
											if (d && d.url === e) return l.logger.trace("playlist request ongoing"), !1;
											l.logger.warn("aborting previous loader for type: " + t.type), a.abort()
										}
										switch (t.type) {
											case h.MANIFEST:
												n = r.manifestLoadingMaxRetry, i = r.manifestLoadingTimeOut, s = r.manifestLoadingRetryDelay, o = r.manifestLoadingMaxRetryTimeout;
												break;
											case h.LEVEL:
												n = 0, i = r.levelLoadingTimeOut;
												break;
											default:
												n = r.levelLoadingMaxRetry, i = r.levelLoadingTimeOut, s = r.levelLoadingRetryDelay, o = r.levelLoadingMaxRetryTimeout
										}
										a = this.createInternalLoader(t), t.url = e, t.responseType = t.responseType || "";
										var c = {
												timeout: i,
												maxRetry: n,
												retryDelay: s,
												maxRetryDelay: o
											},
											u = {
												onSuccess: this.loadsuccess.bind(this),
												onError: this.loaderror.bind(this),
												onTimeout: this.loadtimeout.bind(this)
											};
										return l.logger.debug("Calling internal loader delegate for URL: " + e), a.load(t, c, u), !0
									}, r.prototype.loadsuccess = function(e, t, r, n) {
										if (void 0 === n && (n = null), r.isSidxRequest) return this._handleSidxRequest(e, r), void this._handlePlaylistLoaded(e, t, r, n);
										this.resetInternalLoader(r.type);
										var i = e.data;
										t.tload = u.now(), 0 === i.indexOf("#EXTM3U") ? i.indexOf("#EXTINF:") > 0 || i.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, r, n) : this._handleMasterPlaylist(e, t, r, n) : this._handleManifestParsingError(e, r, "no EXTM3U delimiter", n)
									}, r.prototype.loaderror = function(e, t, r) {
										void 0 === r && (r = null), this._handleNetworkError(t, r, !1, e)
									}, r.prototype.loadtimeout = function(e, t, r) {
										void 0 === r && (r = null), this._handleNetworkError(t, r, !0)
									}, r.prototype._handleMasterPlaylist = function(e, t, n, i) {
										var o = this.hls,
											a = e.data,
											d = r.getResponseUrl(e, n),
											u = c.default.parseMasterPlaylist(a, d);
										if (u.length) {
											var h = u.map((function(e) {
													return {
														id: e.attrs.AUDIO,
														codec: e.audioCodec
													}
												})),
												p = c.default.parseMasterPlaylistMedia(a, d, "AUDIO", h),
												f = c.default.parseMasterPlaylistMedia(a, d, "SUBTITLES");
											if (p.length) {
												var g = !1;
												p.forEach((function(e) {
													e.url || (g = !0)
												})), !1 === g && u[0].audioCodec && !u[0].attrs.AUDIO && (l.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), p.unshift({
													type: "main",
													name: "main"
												}))
											}
											o.trigger(s.default.MANIFEST_LOADED, {
												levels: u,
												audioTracks: p,
												subtitles: f,
												url: d,
												stats: t,
												networkDetails: i
											})
										} else this._handleManifestParsingError(e, n, "no level found in manifest", i)
									}, r.prototype._handleTrackOrLevelPlaylist = function(t, n, i, o) {
										var a = this.hls,
											l = i.id,
											d = i.level,
											p = i.type,
											f = r.getResponseUrl(t, i),
											g = e.isFinite(l) ? l : 0,
											v = e.isFinite(d) ? d : g,
											m = r.mapContextToLevelType(i),
											b = c.default.parseLevelPlaylist(t.data, f, v, m, g);
										if (b.tload = n.tload, p === h.MANIFEST) {
											var y = {
												url: f,
												details: b
											};
											a.trigger(s.default.MANIFEST_LOADED, {
												levels: [y],
												audioTracks: [],
												url: f,
												stats: n,
												networkDetails: o
											})
										}
										if (n.tparsed = u.now(), b.needSidxRanges) {
											var _ = b.initSegment.url;
											this.load(_, {
												isSidxRequest: !0,
												type: p,
												level: d,
												levelDetails: b,
												id: l,
												rangeStart: 0,
												rangeEnd: 2048,
												responseType: "arraybuffer"
											})
										} else i.levelDetails = b, this._handlePlaylistLoaded(t, n, i, o)
									}, r.prototype._handleSidxRequest = function(e, t) {
										var r = d.default.parseSegmentIndex(new Uint8Array(e.data));
										if (r) {
											var n = r.references,
												i = t.levelDetails;
											n.forEach((function(e, t) {
												var r = e.info,
													n = i.fragments[t];
												0 === n.byteRange.length && (n.rawByteRange = String(1 + r.end - r.start) + "@" + String(r.start))
											})), i.initSegment.rawByteRange = String(r.moovEndOffset) + "@0"
										}
									}, r.prototype._handleManifestParsingError = function(e, t, r, n) {
										this.hls.trigger(s.default.ERROR, {
											type: a.ErrorTypes.NETWORK_ERROR,
											details: a.ErrorDetails.MANIFEST_PARSING_ERROR,
											fatal: !0,
											url: e.url,
											reason: r,
											networkDetails: n
										})
									}, r.prototype._handleNetworkError = function(e, t, r, n) {
										var i, o;
										void 0 === r && (r = !1), void 0 === n && (n = null), l.logger.info("A network error occured while loading a " + e.type + "-type playlist");
										var d = this.getInternalLoader(e);
										switch (e.type) {
											case h.MANIFEST:
												i = r ? a.ErrorDetails.MANIFEST_LOAD_TIMEOUT : a.ErrorDetails.MANIFEST_LOAD_ERROR, o = !0;
												break;
											case h.LEVEL:
												i = r ? a.ErrorDetails.LEVEL_LOAD_TIMEOUT : a.ErrorDetails.LEVEL_LOAD_ERROR, o = !1;
												break;
											case h.AUDIO_TRACK:
												i = r ? a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, o = !1;
												break;
											default:
												o = !1
										}
										d && (d.abort(), this.resetInternalLoader(e.type));
										var c = {
											type: a.ErrorTypes.NETWORK_ERROR,
											details: i,
											fatal: o,
											url: d.url,
											loader: d,
											context: e,
											networkDetails: t
										};
										n && (c.response = n), this.hls.trigger(s.default.ERROR, c)
									}, r.prototype._handlePlaylistLoaded = function(e, t, n, i) {
										var o = n.type,
											a = n.level,
											l = n.id,
											d = n.levelDetails;
										if (d.targetduration)
											if (r.canHaveQualityLevels(n.type)) this.hls.trigger(s.default.LEVEL_LOADED, {
												details: d,
												level: a || 0,
												id: l || 0,
												stats: t,
												networkDetails: i
											});
											else switch (o) {
												case h.AUDIO_TRACK:
													this.hls.trigger(s.default.AUDIO_TRACK_LOADED, {
														details: d,
														id: l,
														stats: t,
														networkDetails: i
													});
													break;
												case h.SUBTITLE_TRACK:
													this.hls.trigger(s.default.SUBTITLE_TRACK_LOADED, {
														details: d,
														id: l,
														stats: t,
														networkDetails: i
													})
											} else this._handleManifestParsingError(e, n, "invalid target duration", i)
									}, r
								}(o.default);
							t.default = f
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/observer.js": function(e, t, r) {
						"use strict";
						var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var s = function(e) {
							function t() {
								return null !== e && e.apply(this, arguments) || this
							}
							return i(t, e), t.prototype.trigger = function(e) {
								for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
								this.emit.apply(this, [e, e].concat(t))
							}, t
						}(r("./node_modules/eventemitter3/index.js").EventEmitter);
						t.Observer = s
					},
					"./src/polyfills/number.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/utils/get-self-scope.js").getSelfScope().Number;
						t.Number = n, n.isFinite = n.isFinite || function(e) {
							return "number" == typeof e && isFinite(e)
						}
					},
					"./src/remux/aac-helper.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = function() {
							function e() {}
							return e.getSilentFrame = function(e, t) {
								switch (e) {
									case "mp4a.40.2":
										if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
										if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
										if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
										if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
										if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
										if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
										break;
									default:
										if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
										if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
										if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
								}
								return null
							}, e
						}();
						t.default = n
					},
					"./src/remux/mp4-generator.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = Math.pow(2, 32) - 1,
							i = function() {
								function e() {}
								return e.init = function() {
									var t;
									for (t in e.types = {
											avc1: [],
											avcC: [],
											btrt: [],
											dinf: [],
											dref: [],
											esds: [],
											ftyp: [],
											hdlr: [],
											mdat: [],
											mdhd: [],
											mdia: [],
											mfhd: [],
											minf: [],
											moof: [],
											moov: [],
											mp4a: [],
											".mp3": [],
											mvex: [],
											mvhd: [],
											pasp: [],
											sdtp: [],
											stbl: [],
											stco: [],
											stsc: [],
											stsd: [],
											stsz: [],
											stts: [],
											tfdt: [],
											tfhd: [],
											traf: [],
											trak: [],
											trun: [],
											trex: [],
											tkhd: [],
											vmhd: [],
											smhd: []
										}, e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
									var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
										n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
									e.HDLR_TYPES = {
										video: r,
										audio: n
									};
									var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
										s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
									e.STTS = e.STSC = e.STCO = s, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
									var o = new Uint8Array([105, 115, 111, 109]),
										a = new Uint8Array([97, 118, 99, 49]),
										l = new Uint8Array([0, 0, 0, 1]);
									e.FTYP = e.box(e.types.ftyp, o, l, o, a), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, i))
								}, e.box = function(e) {
									for (var t, r = Array.prototype.slice.call(arguments, 1), n = 8, i = r.length, s = i; i--;) n += r[i].byteLength;
									for ((t = new Uint8Array(n))[0] = n >> 24 & 255, t[1] = n >> 16 & 255, t[2] = n >> 8 & 255, t[3] = 255 & n, t.set(e, 4), i = 0, n = 8; i < s; i++) t.set(r[i], n), n += r[i].byteLength;
									return t
								}, e.hdlr = function(t) {
									return e.box(e.types.hdlr, e.HDLR_TYPES[t])
								}, e.mdat = function(t) {
									return e.box(e.types.mdat, t)
								}, e.mdhd = function(t, r) {
									r *= t;
									var i = Math.floor(r / (n + 1)),
										s = Math.floor(r % (n + 1));
									return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, 85, 196, 0, 0]))
								}, e.mdia = function(t) {
									return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
								}, e.mfhd = function(t) {
									return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
								}, e.minf = function(t) {
									return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
								}, e.moof = function(t, r, n) {
									return e.box(e.types.moof, e.mfhd(t), e.traf(n, r))
								}, e.moov = function(t) {
									for (var r = t.length, n = []; r--;) n[r] = e.trak(t[r]);
									return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(n).concat(e.mvex(t)))
								}, e.mvex = function(t) {
									for (var r = t.length, n = []; r--;) n[r] = e.trex(t[r]);
									return e.box.apply(null, [e.types.mvex].concat(n))
								}, e.mvhd = function(t, r) {
									r *= t;
									var i = Math.floor(r / (n + 1)),
										s = Math.floor(r % (n + 1)),
										o = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
									return e.box(e.types.mvhd, o)
								}, e.sdtp = function(t) {
									var r, n, i = t.samples || [],
										s = new Uint8Array(4 + i.length);
									for (n = 0; n < i.length; n++) r = i[n].flags, s[n + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
									return e.box(e.types.sdtp, s)
								}, e.stbl = function(t) {
									return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
								}, e.avc1 = function(t) {
									var r, n, i, s = [],
										o = [];
									for (r = 0; r < t.sps.length; r++) i = (n = t.sps[r]).byteLength, s.push(i >>> 8 & 255), s.push(255 & i), s = s.concat(Array.prototype.slice.call(n));
									for (r = 0; r < t.pps.length; r++) i = (n = t.pps[r]).byteLength, o.push(i >>> 8 & 255), o.push(255 & i), o = o.concat(Array.prototype.slice.call(n));
									var a = e.box(e.types.avcC, new Uint8Array([1, s[3], s[4], s[5], 255, 224 | t.sps.length].concat(s).concat([t.pps.length]).concat(o))),
										l = t.width,
										d = t.height,
										c = t.pixelRatio[0],
										u = t.pixelRatio[1];
									return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, d >> 8 & 255, 255 & d, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), a, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c, u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u])))
								}, e.esds = function(e) {
									var t = e.config.length;
									return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
								}, e.mp4a = function(t) {
									var r = t.samplerate;
									return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)))
								}, e.mp3 = function(t) {
									var r = t.samplerate;
									return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
								}, e.stsd = function(t) {
									return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
								}, e.tkhd = function(t) {
									var r = t.id,
										i = t.duration * t.timescale,
										s = t.width,
										o = t.height,
										a = Math.floor(i / (n + 1)),
										l = Math.floor(i % (n + 1));
									return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, s >> 8 & 255, 255 & s, 0, 0, o >> 8 & 255, 255 & o, 0, 0]))
								}, e.traf = function(t, r) {
									var i = e.sdtp(t),
										s = t.id,
										o = Math.floor(r / (n + 1)),
										a = Math.floor(r % (n + 1));
									return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), e.trun(t, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
								}, e.trak = function(t) {
									return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t))
								}, e.trex = function(t) {
									var r = t.id;
									return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
								}, e.trun = function(t, r) {
									var n, i, s, o, a, l, d = t.samples || [],
										c = d.length,
										u = 12 + 16 * c,
										h = new Uint8Array(u);
									for (r += 8 + u, h.set([0, 0, 15, 1, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), n = 0; n < c; n++) s = (i = d[n]).duration, o = i.size, a = i.flags, l = i.cts, h.set([s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, a.isLeading << 2 | a.dependsOn, a.isDependedOn << 6 | a.hasRedundancy << 4 | a.paddingValue << 1 | a.isNonSync, 61440 & a.degradPrio, 15 & a.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * n);
									return e.box(e.types.trun, h)
								}, e.initSegment = function(t) {
									e.types || e.init();
									var r, n = e.moov(t);
									return (r = new Uint8Array(e.FTYP.byteLength + n.byteLength)).set(e.FTYP), r.set(n, e.FTYP.byteLength), r
								}, e
							}();
						t.default = i
					},
					"./src/remux/mp4-remuxer.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/remux/aac-helper.js"),
							i = r("./src/remux/mp4-generator.js"),
							s = r("./src/events.js"),
							o = r("./src/errors.js"),
							a = r("./src/utils/logger.js"),
							l = function() {
								function e(e, t, r, n) {
									this.observer = e, this.config = t, this.typeSupported = r;
									var i = navigator.userAgent;
									this.isSafari = n && n.indexOf("Apple") > -1 && i && !i.match("CriOS"), this.ISGenerated = !1
								}
								return e.prototype.destroy = function() {}, e.prototype.resetTimeStamp = function(e) {
									this._initPTS = this._initDTS = e
								}, e.prototype.resetInitSegment = function() {
									this.ISGenerated = !1
								}, e.prototype.remux = function(e, t, r, n, i, o, l) {
									if (this.ISGenerated || this.generateIS(e, t, i), this.ISGenerated) {
										var d = e.samples.length,
											c = t.samples.length,
											u = i,
											h = i;
										if (d && c) {
											var p = (e.samples[0].pts - t.samples[0].pts) / t.inputTimeScale;
											u += Math.max(0, p), h += Math.max(0, -p)
										}
										if (d) {
											e.timescale || (a.logger.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, i));
											var f = this.remuxAudio(e, u, o, l);
											if (c) {
												var g = void 0;
												f && (g = f.endPTS - f.startPTS), t.timescale || (a.logger.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, i)), this.remuxVideo(t, h, o, g, l)
											}
										} else if (c) {
											var v = this.remuxVideo(t, h, o, 0, l);
											v && e.codec && this.remuxEmptyAudio(e, u, o, v)
										}
									}
									r.samples.length && this.remuxID3(r, i), n.samples.length && this.remuxText(n, i), this.observer.trigger(s.default.FRAG_PARSED)
								}, e.prototype.generateIS = function(e, t, r) {
									var n, l, d = this.observer,
										c = e.samples,
										u = t.samples,
										h = this.typeSupported,
										p = "audio/mp4",
										f = {},
										g = {
											tracks: f
										},
										v = void 0 === this._initPTS;
									if (v && (n = l = 1 / 0), e.config && c.length && (e.timescale = e.samplerate, a.logger.log("audio sampling rate : " + e.samplerate), e.isAAC || (h.mpeg ? (p = "audio/mpeg", e.codec = "") : h.mp3 && (e.codec = "mp3")), f.audio = {
											container: p,
											codec: e.codec,
											initSegment: !e.isAAC && h.mpeg ? new Uint8Array : i.default.initSegment([e]),
											metadata: {
												channelCount: e.channelCount
											}
										}, v && (n = l = c[0].pts - e.inputTimeScale * r)), t.sps && t.pps && u.length) {
										var m = t.inputTimeScale;
										t.timescale = m, f.video = {
											container: "video/mp4",
											codec: t.codec,
											initSegment: i.default.initSegment([t]),
											metadata: {
												width: t.width,
												height: t.height
											}
										}, v && (n = Math.min(n, u[0].pts - m * r), l = Math.min(l, u[0].dts - m * r), this.observer.trigger(s.default.INIT_PTS_FOUND, {
											initPTS: n
										}))
									}
									Object.keys(f).length ? (d.trigger(s.default.FRAG_PARSING_INIT_SEGMENT, g), this.ISGenerated = !0, v && (this._initPTS = n, this._initDTS = l)) : d.trigger(s.default.ERROR, {
										type: o.ErrorTypes.MEDIA_ERROR,
										details: o.ErrorDetails.FRAG_PARSING_ERROR,
										fatal: !1,
										reason: "no audio/video samples found"
									})
								}, e.prototype.remuxVideo = function(e, t, r, n, l) {
									var d, c, u, h, p, f, g, v = 8,
										m = e.timescale,
										b = e.samples,
										y = [],
										_ = b.length,
										w = this._PTSNormalize,
										E = this._initPTS,
										S = this.nextAvcDts,
										T = this.isSafari;
									if (0 !== _) {
										T && (r |= b.length && S && (l && Math.abs(t - S / m) < .1 || Math.abs(b[0].pts - S - E) < m / 5)), r || (S = t * m), b.forEach((function(e) {
											e.pts = w(e.pts - E, S), e.dts = w(e.dts - E, S)
										})), b.sort((function(e, t) {
											var r = e.dts - t.dts,
												n = e.pts - t.pts;
											return r || n || e.id - t.id
										}));
										var k = b.reduce((function(e, t) {
											return Math.max(Math.min(e, t.pts - t.dts), -18e3)
										}), 0);
										if (k < 0) {
											a.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(k / 90) + " ms to overcome this issue");
											for (var A = 0; A < b.length; A++) b[A].dts += k
										}
										var x = b[0];
										p = Math.max(x.dts, 0), h = Math.max(x.pts, 0);
										var R = Math.round((p - S) / 90);
										r && R && (R > 1 ? a.logger.log("AVC:" + R + " ms hole between fragments detected,filling it") : R < -1 && a.logger.log("AVC:" + -R + " ms overlapping between fragments detected"), p = S, b[0].dts = p, h = Math.max(h - R, S), b[0].pts = h, a.logger.log("Video/PTS/DTS adjusted: " + Math.round(h / 90) + "/" + Math.round(p / 90) + ",delta:" + R + " ms")), x = b[b.length - 1], g = Math.max(x.dts, 0), f = Math.max(x.pts, 0, g), T && (d = Math.round((g - p) / (b.length - 1)));
										var O = 0,
											L = 0;
										for (A = 0; A < _; A++) {
											for (var C = b[A], P = C.units, D = P.length, I = 0, M = 0; M < D; M++) I += P[M].data.length;
											L += I, O += D, C.length = I, C.dts = T ? p + A * d : Math.max(C.dts, p), C.pts = Math.max(C.pts, C.dts)
										}
										var j = L + 4 * O + 8;
										try {
											c = new Uint8Array(j)
										} catch (Z) {
											return void this.observer.trigger(s.default.ERROR, {
												type: o.ErrorTypes.MUX_ERROR,
												details: o.ErrorDetails.REMUX_ALLOC_ERROR,
												fatal: !1,
												bytes: j,
												reason: "fail allocating video mdat " + j
											})
										}
										var F = new DataView(c.buffer);
										for (F.setUint32(0, j), c.set(i.default.types.mdat, 4), A = 0; A < _; A++) {
											var N = b[A],
												U = N.units,
												B = 0,
												V = void 0;
											for (M = 0, D = U.length; M < D; M++) {
												var $ = U[M],
													G = $.data,
													H = $.data.byteLength;
												F.setUint32(v, H), v += 4, c.set(G, v), v += H, B += 4 + H
											}
											if (T) V = Math.max(0, d * Math.round((N.pts - N.dts) / d));
											else {
												if (A < _ - 1) d = b[A + 1].dts - N.dts;
												else {
													var q = this.config,
														z = N.dts - b[A > 0 ? A - 1 : A].dts;
													if (q.stretchShortVideoTrack) {
														var K = q.maxBufferHole,
															W = Math.floor(K * m),
															Y = (n ? h + n * m : this.nextAudioPts) - N.pts;
														Y > W ? ((d = Y - z) < 0 && (d = z), a.logger.log("It is approximately " + Y / 90 + " ms to the next segment; using duration " + d / 90 + " ms for the last video frame.")) : d = z
													} else d = z
												}
												V = Math.round(N.pts - N.dts)
											}
											y.push({
												size: B,
												duration: d,
												cts: V,
												flags: {
													isLeading: 0,
													isDependedOn: 0,
													hasRedundancy: 0,
													degradPrio: 0,
													dependsOn: N.key ? 2 : 1,
													isNonSync: N.key ? 0 : 1
												}
											})
										}
										this.nextAvcDts = g + d;
										var X = e.dropped;
										if (e.len = 0, e.nbNalu = 0, e.dropped = 0, y.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
											var Q = y[0].flags;
											Q.dependsOn = 2, Q.isNonSync = 0
										}
										e.samples = y, u = i.default.moof(e.sequenceNumber++, p, e), e.samples = [];
										var J = {
											data1: u,
											data2: c,
											startPTS: h / m,
											endPTS: (f + d) / m,
											startDTS: p / m,
											endDTS: this.nextAvcDts / m,
											type: "video",
											hasAudio: !1,
											hasVideo: !0,
											nb: y.length,
											dropped: X
										};
										return this.observer.trigger(s.default.FRAG_PARSING_DATA, J), J
									}
								}, e.prototype.remuxAudio = function(e, t, r, l) {
									var d, c, u, h, p, f, g, v = e.inputTimeScale,
										m = e.timescale,
										b = v / m,
										y = (e.isAAC ? 1024 : 1152) * b,
										_ = this._PTSNormalize,
										w = this._initPTS,
										E = !e.isAAC && this.typeSupported.mpeg,
										S = e.samples,
										T = [],
										k = this.nextAudioPts;
									if (r |= S.length && k && (l && Math.abs(t - k / v) < .1 || Math.abs(S[0].pts - k - w) < 20 * y), S.forEach((function(e) {
											e.pts = e.dts = _(e.pts - w, t * v)
										})), 0 !== (S = S.filter((function(e) {
											return e.pts >= 0
										}))).length) {
										if (r || (k = l ? t * v : S[0].pts), e.isAAC)
											for (var A = this.config.maxAudioFramesDrift, x = 0, R = k; x < S.length;) {
												var O, L = S[x];
												O = (N = L.pts) - R;
												var C = Math.abs(1e3 * O / v);
												if (O <= -A * y) a.logger.warn("Dropping 1 audio frame @ " + (R / v).toFixed(3) + "s due to " + Math.round(C) + " ms overlap."), S.splice(x, 1), e.len -= L.unit.length;
												else if (O >= A * y && C < 1e4 && R) {
													var P = Math.round(O / y);
													a.logger.warn("Injecting " + P + " audio frame @ " + (R / v).toFixed(3) + "s due to " + Math.round(1e3 * O / v) + " ms gap.");
													for (var D = 0; D < P; D++) {
														var I = Math.max(R, 0);
														(u = n.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (a.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), u = L.unit.subarray()), S.splice(x, 0, {
															unit: u,
															pts: I,
															dts: I
														}), e.len += u.length, R += y, x++
													}
													L.pts = L.dts = R, R += y, x++
												} else Math.abs(O), L.pts = L.dts = R, R += y, x++
											}
										D = 0;
										for (var M = S.length; D < M; D++) {
											var j = S[D],
												F = j.unit,
												N = j.pts;
											if (void 0 !== g) c.duration = Math.round((N - g) / b);
											else {
												var U = Math.round(1e3 * (N - k) / v),
													B = 0;
												if (r && e.isAAC && U) {
													if (U > 0 && U < 1e4) B = Math.round((N - k) / y), a.logger.log(U + " ms hole between AAC samples detected,filling it"), B > 0 && ((u = n.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (u = F.subarray()), e.len += B * u.length);
													else if (U < -12) {
														a.logger.log("drop overlapping AAC sample, expected/parsed/delta:" + (k / v).toFixed(3) + "s/" + (N / v).toFixed(3) + "s/" + -U + "ms"), e.len -= F.byteLength;
														continue
													}
													N = k
												}
												if (f = N, !(e.len > 0)) return;
												var V = E ? e.len : e.len + 8;
												d = E ? 0 : 8;
												try {
													h = new Uint8Array(V)
												} catch (W) {
													return void this.observer.trigger(s.default.ERROR, {
														type: o.ErrorTypes.MUX_ERROR,
														details: o.ErrorDetails.REMUX_ALLOC_ERROR,
														fatal: !1,
														bytes: V,
														reason: "fail allocating audio mdat " + V
													})
												}
												for (E || (new DataView(h.buffer).setUint32(0, V), h.set(i.default.types.mdat, 4)), x = 0; x < B; x++)(u = n.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (a.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), u = F.subarray()), h.set(u, d), d += u.byteLength, c = {
													size: u.byteLength,
													cts: 0,
													duration: 1024,
													flags: {
														isLeading: 0,
														isDependedOn: 0,
														hasRedundancy: 0,
														degradPrio: 0,
														dependsOn: 1
													}
												}, T.push(c)
											}
											h.set(F, d);
											var $ = F.byteLength;
											d += $, c = {
												size: $,
												cts: 0,
												duration: 0,
												flags: {
													isLeading: 0,
													isDependedOn: 0,
													hasRedundancy: 0,
													degradPrio: 0,
													dependsOn: 1
												}
											}, T.push(c), g = N
										}
										var G = 0,
											H = T.length;
										if (H >= 2 && (G = T[H - 2].duration, c.duration = G), H) {
											this.nextAudioPts = k = g + b * G, e.len = 0, e.samples = T, p = E ? new Uint8Array : i.default.moof(e.sequenceNumber++, f / b, e), e.samples = [];
											var q = f / v,
												z = k / v,
												K = {
													data1: p,
													data2: h,
													startPTS: q,
													endPTS: z,
													startDTS: q,
													endDTS: z,
													type: "audio",
													hasAudio: !0,
													hasVideo: !1,
													nb: H
												};
											return this.observer.trigger(s.default.FRAG_PARSING_DATA, K), K
										}
										return null
									}
								}, e.prototype.remuxEmptyAudio = function(e, t, r, i) {
									var s = e.inputTimeScale,
										o = s / (e.samplerate ? e.samplerate : s),
										l = this.nextAudioPts,
										d = (void 0 !== l ? l : i.startDTS * s) + this._initDTS,
										c = i.endDTS * s + this._initDTS,
										u = 1024 * o,
										h = Math.ceil((c - d) / u),
										p = n.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
									if (a.logger.warn("remux empty Audio"), p) {
										for (var f = [], g = 0; g < h; g++) {
											var v = d + g * u;
											f.push({
												unit: p,
												pts: v,
												dts: v
											}), e.len += p.length
										}
										e.samples = f, this.remuxAudio(e, t, r)
									} else a.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
								}, e.prototype.remuxID3 = function(e) {
									var t, r = e.samples.length,
										n = e.inputTimeScale,
										i = this._initPTS,
										o = this._initDTS;
									if (r) {
										for (var a = 0; a < r; a++)(t = e.samples[a]).pts = (t.pts - i) / n, t.dts = (t.dts - o) / n;
										this.observer.trigger(s.default.FRAG_PARSING_METADATA, {
											samples: e.samples
										})
									}
									e.samples = []
								}, e.prototype.remuxText = function(e) {
									e.samples.sort((function(e, t) {
										return e.pts - t.pts
									}));
									var t, r = e.samples.length,
										n = e.inputTimeScale,
										i = this._initPTS;
									if (r) {
										for (var o = 0; o < r; o++)(t = e.samples[o]).pts = (t.pts - i) / n;
										this.observer.trigger(s.default.FRAG_PARSING_USERDATA, {
											samples: e.samples
										})
									}
									e.samples = []
								}, e.prototype._PTSNormalize = function(e, t) {
									var r;
									if (void 0 === t) return e;
									for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += r;
									return e
								}, e
							}();
						t.default = l
					},
					"./src/remux/passthrough-remuxer.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/events.js"),
							i = function() {
								function e(e) {
									this.observer = e
								}
								return e.prototype.destroy = function() {}, e.prototype.resetTimeStamp = function() {}, e.prototype.resetInitSegment = function() {}, e.prototype.remux = function(e, t, r, i, s, o, a, l) {
									var d = this.observer,
										c = "";
									e && (c += "audio"), t && (c += "video"), d.trigger(n.default.FRAG_PARSING_DATA, {
										data1: l,
										startPTS: s,
										startDTS: s,
										type: c,
										hasAudio: !!e,
										hasVideo: !!t,
										nb: 1,
										dropped: 0
									}), d.trigger(n.default.FRAG_PARSED)
								}, e
							}();
						t.default = i
					},
					"./src/task-loop.js": function(e, t, r) {
						"use strict";
						var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
								__proto__: []
							}
							instanceof Array && function(e, t) {
								e.__proto__ = t
							} || function(e, t) {
								for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
							},
							function(e, t) {
								function r() {
									this.constructor = e
								}
								n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
							});
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var s = function(e) {
							function t(t) {
								for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
								var i = e.apply(this, [t].concat(r)) || this;
								return i._tickInterval = null, i._tickTimer = null, i._tickCallCount = 0, i._boundTick = i.tick.bind(i), i
							}
							return i(t, e), t.prototype.onHandlerDestroying = function() {
								this.clearNextTick(), this.clearInterval()
							}, t.prototype.hasInterval = function() {
								return !!this._tickInterval
							}, t.prototype.hasNextTick = function() {
								return !!this._tickTimer
							}, t.prototype.setInterval = function(e) {
								return !this._tickInterval && (this._tickInterval = setInterval(this._boundTick, e), !0)
							}, t.prototype.clearInterval = function() {
								return !!this._tickInterval && (clearInterval(this._tickInterval), this._tickInterval = null, !0)
							}, t.prototype.clearNextTick = function() {
								return !!this._tickTimer && (clearTimeout(this._tickTimer), this._tickTimer = null, !0)
							}, t.prototype.tick = function() {
								this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && (this.clearNextTick(), this._tickTimer = setTimeout(this._boundTick, 0)), this._tickCallCount = 0)
							}, t.prototype.doTick = function() {}, t
						}(r("./src/event-handler.js").default);
						t.default = s
					},
					"./src/utils/attr-list.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var r = /^(\d+)x(\d+)$/,
								n = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
								i = function() {
									function t(e) {
										for (var r in "string" == typeof e && (e = t.parseAttrList(e)), e) e.hasOwnProperty(r) && (this[r] = e[r])
									}
									return t.prototype.decimalInteger = function(t) {
										var r = parseInt(this[t], 10);
										return r > e.MAX_SAFE_INTEGER ? 1 / 0 : r
									}, t.prototype.hexadecimalInteger = function(e) {
										if (this[e]) {
											var t = (this[e] || "0x").slice(2);
											t = (1 & t.length ? "0" : "") + t;
											for (var r = new Uint8Array(t.length / 2), n = 0; n < t.length / 2; n++) r[n] = parseInt(t.slice(2 * n, 2 * n + 2), 16);
											return r
										}
										return null
									}, t.prototype.hexadecimalIntegerAsNumber = function(t) {
										var r = parseInt(this[t], 16);
										return r > e.MAX_SAFE_INTEGER ? 1 / 0 : r
									}, t.prototype.decimalFloatingPoint = function(e) {
										return parseFloat(this[e])
									}, t.prototype.enumeratedString = function(e) {
										return this[e]
									}, t.prototype.decimalResolution = function(e) {
										var t = r.exec(this[e]);
										if (null !== t) return {
											width: parseInt(t[1], 10),
											height: parseInt(t[2], 10)
										}
									}, t.parseAttrList = function(e) {
										var t, r = {};
										for (n.lastIndex = 0; null !== (t = n.exec(e));) {
											var i = t[2];
											0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)), r[t[1]] = i
										}
										return r
									}, t
								}();
							t.default = i
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/utils/binary-search.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = {
							search: function(e, t) {
								for (var r = 0, n = e.length - 1, i = null, s = null; r <= n;) {
									var o = t(s = e[i = (r + n) / 2 | 0]);
									if (o > 0) r = i + 1;
									else {
										if (!(o < 0)) return s;
										n = i - 1
									}
								}
								return null
							}
						}
					},
					"./src/utils/buffer-helper.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = function() {
							function e() {}
							return e.isBuffered = function(e, t) {
								try {
									if (e)
										for (var r = e.buffered, n = 0; n < r.length; n++)
											if (t >= r.start(n) && t <= r.end(n)) return !0
								} catch (i) {}
								return !1
							}, e.bufferInfo = function(e, t, r) {
								try {
									if (e) {
										var n = e.buffered,
											i = [],
											s = void 0;
										for (s = 0; s < n.length; s++) i.push({
											start: n.start(s),
											end: n.end(s)
										});
										return this.bufferedInfo(i, t, r)
									}
								} catch (o) {}
								return {
									len: 0,
									start: t,
									end: t,
									nextStart: void 0
								}
							}, e.bufferedInfo = function(e, t, r) {
								var n, i, s, o, a, l = [];
								for (e.sort((function(e, t) {
										var r = e.start - t.start;
										return r || t.end - e.end
									})), a = 0; a < e.length; a++) {
									var d = l.length;
									if (d) {
										var c = l[d - 1].end;
										e[a].start - c < r ? e[a].end > c && (l[d - 1].end = e[a].end) : l.push(e[a])
									} else l.push(e[a])
								}
								for (a = 0, n = 0, i = s = t; a < l.length; a++) {
									var u = l[a].start,
										h = l[a].end;
									if (t + r >= u && t < h) i = u, n = (s = h) - t;
									else if (t + r < u) {
										o = u;
										break
									}
								}
								return {
									len: n,
									start: i,
									end: s,
									nextStart: o
								}
							}, e
						}();
						t.BufferHelper = n
					},
					"./src/utils/cea-608-parser.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = {
								42: 225,
								92: 233,
								94: 237,
								95: 243,
								96: 250,
								123: 231,
								124: 247,
								125: 209,
								126: 241,
								127: 9608,
								128: 174,
								129: 176,
								130: 189,
								131: 191,
								132: 8482,
								133: 162,
								134: 163,
								135: 9834,
								136: 224,
								137: 32,
								138: 232,
								139: 226,
								140: 234,
								141: 238,
								142: 244,
								143: 251,
								144: 193,
								145: 201,
								146: 211,
								147: 218,
								148: 220,
								149: 252,
								150: 8216,
								151: 161,
								152: 42,
								153: 8217,
								154: 9473,
								155: 169,
								156: 8480,
								157: 8226,
								158: 8220,
								159: 8221,
								160: 192,
								161: 194,
								162: 199,
								163: 200,
								164: 202,
								165: 203,
								166: 235,
								167: 206,
								168: 207,
								169: 239,
								170: 212,
								171: 217,
								172: 249,
								173: 219,
								174: 171,
								175: 187,
								176: 195,
								177: 227,
								178: 205,
								179: 204,
								180: 236,
								181: 210,
								182: 242,
								183: 213,
								184: 245,
								185: 123,
								186: 125,
								187: 92,
								188: 94,
								189: 95,
								190: 124,
								191: 8764,
								192: 196,
								193: 228,
								194: 214,
								195: 246,
								196: 223,
								197: 165,
								198: 164,
								199: 9475,
								200: 197,
								201: 229,
								202: 216,
								203: 248,
								204: 9487,
								205: 9491,
								206: 9495,
								207: 9499
							},
							i = function(e) {
								var t = e;
								return n.hasOwnProperty(e) && (t = n[e]), String.fromCharCode(t)
							},
							s = 15,
							o = 100,
							a = {
								17: 1,
								18: 3,
								21: 5,
								22: 7,
								23: 9,
								16: 11,
								19: 12,
								20: 14
							},
							l = {
								17: 2,
								18: 4,
								21: 6,
								22: 8,
								23: 10,
								19: 13,
								20: 15
							},
							d = {
								25: 1,
								26: 3,
								29: 5,
								30: 7,
								31: 9,
								24: 11,
								27: 12,
								28: 14
							},
							c = {
								25: 2,
								26: 4,
								29: 6,
								30: 8,
								31: 10,
								27: 13,
								28: 15
							},
							u = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
							h = {
								verboseFilter: {
									DATA: 3,
									DEBUG: 3,
									INFO: 2,
									WARNING: 2,
									TEXT: 1,
									ERROR: 0
								},
								time: null,
								verboseLevel: 0,
								setTime: function(e) {
									this.time = e
								},
								log: function(e, t) {
									this.verboseFilter[e], this.verboseLevel
								}
							},
							p = function(e) {
								for (var t = [], r = 0; r < e.length; r++) t.push(e[r].toString(16));
								return t
							},
							f = function() {
								function e(e, t, r, n, i) {
									this.foreground = e || "white", this.underline = t || !1, this.italics = r || !1, this.background = n || "black", this.flash = i || !1
								}
								return e.prototype.reset = function() {
									this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
								}, e.prototype.setStyles = function(e) {
									for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
										var n = t[r];
										e.hasOwnProperty(n) && (this[n] = e[n])
									}
								}, e.prototype.isDefault = function() {
									return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
								}, e.prototype.equals = function(e) {
									return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
								}, e.prototype.copy = function(e) {
									this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
								}, e.prototype.toString = function() {
									return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
								}, e
							}(),
							g = function() {
								function e(e, t, r, n, i, s) {
									this.uchar = e || " ", this.penState = new f(t, r, n, i, s)
								}
								return e.prototype.reset = function() {
									this.uchar = " ", this.penState.reset()
								}, e.prototype.setChar = function(e, t) {
									this.uchar = e, this.penState.copy(t)
								}, e.prototype.setPenState = function(e) {
									this.penState.copy(e)
								}, e.prototype.equals = function(e) {
									return this.uchar === e.uchar && this.penState.equals(e.penState)
								}, e.prototype.copy = function(e) {
									this.uchar = e.uchar, this.penState.copy(e.penState)
								}, e.prototype.isEmpty = function() {
									return " " === this.uchar && this.penState.isDefault()
								}, e
							}(),
							v = function() {
								function e() {
									this.chars = [];
									for (var e = 0; e < o; e++) this.chars.push(new g);
									this.pos = 0, this.currPenState = new f
								}
								return e.prototype.equals = function(e) {
									for (var t = !0, r = 0; r < o; r++)
										if (!this.chars[r].equals(e.chars[r])) {
											t = !1;
											break
										} return t
								}, e.prototype.copy = function(e) {
									for (var t = 0; t < o; t++) this.chars[t].copy(e.chars[t])
								}, e.prototype.isEmpty = function() {
									for (var e = !0, t = 0; t < o; t++)
										if (!this.chars[t].isEmpty()) {
											e = !1;
											break
										} return e
								}, e.prototype.setCursor = function(e) {
									this.pos !== e && (this.pos = e), this.pos < 0 ? (h.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > o && (h.log("ERROR", "Too large cursor position " + this.pos), this.pos = o)
								}, e.prototype.moveCursor = function(e) {
									var t = this.pos + e;
									if (e > 1)
										for (var r = this.pos + 1; r < t + 1; r++) this.chars[r].setPenState(this.currPenState);
									this.setCursor(t)
								}, e.prototype.backSpace = function() {
									this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
								}, e.prototype.insertChar = function(e) {
									e >= 144 && this.backSpace();
									var t = i(e);
									this.pos >= o ? h.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1))
								}, e.prototype.clearFromPos = function(e) {
									var t;
									for (t = e; t < o; t++) this.chars[t].reset()
								}, e.prototype.clear = function() {
									this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
								}, e.prototype.clearToEndOfRow = function() {
									this.clearFromPos(this.pos)
								}, e.prototype.getTextString = function() {
									for (var e = [], t = !0, r = 0; r < o; r++) {
										var n = this.chars[r].uchar;
										" " !== n && (t = !1), e.push(n)
									}
									return t ? "" : e.join("")
								}, e.prototype.setPenStyles = function(e) {
									this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState)
								}, e
							}(),
							m = function() {
								function e() {
									this.rows = [];
									for (var e = 0; e < s; e++) this.rows.push(new v);
									this.currRow = s - 1, this.nrRollUpRows = null, this.reset()
								}
								return e.prototype.reset = function() {
									for (var e = 0; e < s; e++) this.rows[e].clear();
									this.currRow = s - 1
								}, e.prototype.equals = function(e) {
									for (var t = !0, r = 0; r < s; r++)
										if (!this.rows[r].equals(e.rows[r])) {
											t = !1;
											break
										} return t
								}, e.prototype.copy = function(e) {
									for (var t = 0; t < s; t++) this.rows[t].copy(e.rows[t])
								}, e.prototype.isEmpty = function() {
									for (var e = !0, t = 0; t < s; t++)
										if (!this.rows[t].isEmpty()) {
											e = !1;
											break
										} return e
								}, e.prototype.backSpace = function() {
									this.rows[this.currRow].backSpace()
								}, e.prototype.clearToEndOfRow = function() {
									this.rows[this.currRow].clearToEndOfRow()
								}, e.prototype.insertChar = function(e) {
									this.rows[this.currRow].insertChar(e)
								}, e.prototype.setPen = function(e) {
									this.rows[this.currRow].setPenStyles(e)
								}, e.prototype.moveCursor = function(e) {
									this.rows[this.currRow].moveCursor(e)
								}, e.prototype.setCursor = function(e) {
									h.log("INFO", "setCursor: " + e), this.rows[this.currRow].setCursor(e)
								}, e.prototype.setPAC = function(e) {
									h.log("INFO", "pacData = " + JSON.stringify(e));
									var t = e.row - 1;
									if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
										for (var r = 0; r < s; r++) this.rows[r].clear();
										var n = this.currRow + 1 - this.nrRollUpRows,
											i = this.lastOutputScreen;
										if (i) {
											var o = i.rows[n].cueStartTime;
											if (o && o < h.time)
												for (r = 0; r < this.nrRollUpRows; r++) this.rows[t - this.nrRollUpRows + r + 1].copy(i.rows[n + r])
										}
									}
									this.currRow = t;
									var a = this.rows[this.currRow];
									if (null !== e.indent) {
										var l = e.indent,
											d = Math.max(l - 1, 0);
										a.setCursor(e.indent), e.color = a.chars[d].penState.foreground
									}
									var c = {
										foreground: e.color,
										underline: e.underline,
										italics: e.italics,
										background: "black",
										flash: !1
									};
									this.setPen(c)
								}, e.prototype.setBkgData = function(e) {
									h.log("INFO", "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
								}, e.prototype.setRollUpRows = function(e) {
									this.nrRollUpRows = e
								}, e.prototype.rollUp = function() {
									if (null !== this.nrRollUpRows) {
										h.log("TEXT", this.getDisplayText());
										var e = this.currRow + 1 - this.nrRollUpRows,
											t = this.rows.splice(e, 1)[0];
										t.clear(), this.rows.splice(this.currRow, 0, t), h.log("INFO", "Rolling up")
									} else h.log("DEBUG", "roll_up but nrRollUpRows not set yet")
								}, e.prototype.getDisplayText = function(e) {
									e = e || !1;
									for (var t = [], r = "", n = -1, i = 0; i < s; i++) {
										var o = this.rows[i].getTextString();
										o && (n = i + 1, e ? t.push("Row " + n + ": '" + o + "'") : t.push(o.trim()))
									}
									return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")), r
								}, e.prototype.getTextAndFormat = function() {
									return this.rows
								}, e
							}(),
							b = function() {
								function e(e, t) {
									this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new m, this.nonDisplayedMemory = new m, this.lastOutputScreen = new m, this.currRollUpRow = this.displayedMemory.rows[s - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
								}
								return e.prototype.reset = function() {
									this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[s - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
								}, e.prototype.getHandler = function() {
									return this.outputFilter
								}, e.prototype.setHandler = function(e) {
									this.outputFilter = e
								}, e.prototype.setPAC = function(e) {
									this.writeScreen.setPAC(e)
								}, e.prototype.setBkgData = function(e) {
									this.writeScreen.setBkgData(e)
								}, e.prototype.setMode = function(e) {
									e !== this.mode && (this.mode = e, h.log("INFO", "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
								}, e.prototype.insertChars = function(e) {
									for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
									var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
									h.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (h.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
								}, e.prototype.ccRCL = function() {
									h.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
								}, e.prototype.ccBS = function() {
									h.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
								}, e.prototype.ccAOF = function() {}, e.prototype.ccAON = function() {}, e.prototype.ccDER = function() {
									h.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
								}, e.prototype.ccRU = function(e) {
									h.log("INFO", "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
								}, e.prototype.ccFON = function() {
									h.log("INFO", "FON - Flash On"), this.writeScreen.setPen({
										flash: !0
									})
								}, e.prototype.ccRDC = function() {
									h.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
								}, e.prototype.ccTR = function() {
									h.log("INFO", "TR"), this.setMode("MODE_TEXT")
								}, e.prototype.ccRTD = function() {
									h.log("INFO", "RTD"), this.setMode("MODE_TEXT")
								}, e.prototype.ccEDM = function() {
									h.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
								}, e.prototype.ccCR = function() {
									h.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
								}, e.prototype.ccENM = function() {
									h.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
								}, e.prototype.ccEOC = function() {
									if (h.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
										var e = this.displayedMemory;
										this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, h.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
									}
									this.outputDataUpdate(!0)
								}, e.prototype.ccTO = function(e) {
									h.log("INFO", "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e)
								}, e.prototype.ccMIDROW = function(e) {
									var t = {
										flash: !1
									};
									if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";
									else {
										var r = Math.floor(e / 2) - 16;
										t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
									}
									h.log("INFO", "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
								}, e.prototype.outputDataUpdate = function(e) {
									void 0 === e && (e = !1);
									var t = h.time;
									null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), !0 === e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue()), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
								}, e.prototype.cueSplitAtTime = function(e) {
									this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
								}, e
							}(),
							y = function() {
								function e(e, t, r) {
									this.field = e || 1, this.outputs = [t, r], this.channels = [new b(1, t), new b(2, r)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
										padding: 0,
										char: 0,
										cmd: 0,
										other: 0
									}
								}
								return e.prototype.getHandler = function(e) {
									return this.channels[e].getHandler()
								}, e.prototype.setHandler = function(e, t) {
									this.channels[e].setHandler(t)
								}, e.prototype.addData = function(e, t) {
									var r, n, i, s = !1;
									this.lastTime = e, h.setTime(e);
									for (var o = 0; o < t.length; o += 2) n = 127 & t[o], i = 127 & t[o + 1], 0 !== n || 0 !== i ? (h.log("DATA", "[" + p([t[o], t[o + 1]]) + "] -> (" + p([n, i]) + ")"), (r = this.parseCmd(n, i)) || (r = this.parseMidrow(n, i)), r || (r = this.parsePAC(n, i)), r || (r = this.parseBackgroundAttributes(n, i)), r || (s = this.parseChars(n, i)) && (this.currChNr && this.currChNr >= 0 ? this.channels[this.currChNr - 1].insertChars(s) : h.log("WARNING", "No channel found yet. TEXT-MODE?")), r ? this.dataCounters.cmd += 2 : s ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, h.log("WARNING", "Couldn't parse cleaned data " + p([n, i]) + " orig: " + p([t[o], t[o + 1]])))) : this.dataCounters.padding += 2
								}, e.prototype.parseCmd = function(e, t) {
									var r = null;
									if (!((20 === e || 28 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 33 && t <= 35)) return !1;
									if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, h.log("DEBUG", "Repeated command (" + p([e, t]) + ") is dropped"), !0;
									r = 20 === e || 23 === e ? 1 : 2;
									var n = this.channels[r - 1];
									return 20 === e || 28 === e ? 32 === t ? n.ccRCL() : 33 === t ? n.ccBS() : 34 === t ? n.ccAOF() : 35 === t ? n.ccAON() : 36 === t ? n.ccDER() : 37 === t ? n.ccRU(2) : 38 === t ? n.ccRU(3) : 39 === t ? n.ccRU(4) : 40 === t ? n.ccFON() : 41 === t ? n.ccRDC() : 42 === t ? n.ccTR() : 43 === t ? n.ccRTD() : 44 === t ? n.ccEDM() : 45 === t ? n.ccCR() : 46 === t ? n.ccENM() : 47 === t && n.ccEOC() : n.ccTO(t - 32), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
								}, e.prototype.parseMidrow = function(e, t) {
									var r = null;
									return (17 === e || 25 === e) && t >= 32 && t <= 47 && ((r = 17 === e ? 1 : 2) !== this.currChNr ? (h.log("ERROR", "Mismatch channel in midrow parsing"), !1) : (this.channels[r - 1].ccMIDROW(t), h.log("DEBUG", "MIDROW (" + p([e, t]) + ")"), !0))
								}, e.prototype.parsePAC = function(e, t) {
									var r, n = null;
									if (!((e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127 || (16 === e || 24 === e) && t >= 64 && t <= 95)) return !1;
									if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
									r = e <= 23 ? 1 : 2, n = t >= 64 && t <= 95 ? 1 === r ? a[e] : d[e] : 1 === r ? l[e] : c[e];
									var i = this.interpretPAC(n, t);
									return this.channels[r - 1].setPAC(i), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
								}, e.prototype.interpretPAC = function(e, t) {
									var r = t,
										n = {
											color: null,
											italics: !1,
											indent: null,
											underline: !1,
											row: e
										};
									return r = t > 95 ? t - 96 : t - 64, n.underline = 1 == (1 & r), r <= 13 ? n.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (n.italics = !0, n.color = "white") : n.indent = 4 * Math.floor((r - 16) / 2), n
								}, e.prototype.parseChars = function(e, t) {
									var r = null,
										n = null,
										s = null;
									if (e >= 25 ? (r = 2, s = e - 8) : (r = 1, s = e), s >= 17 && s <= 19) {
										var o = t;
										o = 17 === s ? t + 80 : 18 === s ? t + 112 : t + 144, h.log("INFO", "Special char '" + i(o) + "' in channel " + r), n = [o]
									} else e >= 32 && e <= 127 && (n = 0 === t ? [e] : [e, t]);
									if (n) {
										var a = p(n);
										h.log("DEBUG", "Char codes =  " + a.join(",")), this.lastCmdA = null, this.lastCmdB = null
									}
									return n
								}, e.prototype.parseBackgroundAttributes = function(e, t) {
									var r, n, i;
									return ((16 === e || 24 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 45 && t <= 47) && (r = {}, 16 === e || 24 === e ? (n = Math.floor((t - 32) / 2), r.background = u[n], t % 2 == 1 && (r.background = r.background + "_semi")) : 45 === t ? r.background = "transparent" : (r.foreground = "black", 47 === t && (r.underline = !0)), i = e < 24 ? 1 : 2, this.channels[i - 1].setBkgData(r), this.lastCmdA = null, this.lastCmdB = null, !0)
								}, e.prototype.reset = function() {
									for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].reset();
									this.lastCmdA = null, this.lastCmdB = null
								}, e.prototype.cueSplitAtTime = function(e) {
									for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e)
								}, e
							}();
						t.default = y
					},
					"./src/utils/codecs.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = {
							audio: {
								a3ds: !0,
								"ac-3": !0,
								"ac-4": !0,
								alac: !0,
								alaw: !0,
								dra1: !0,
								"dts+": !0,
								"dts-": !0,
								dtsc: !0,
								dtse: !0,
								dtsh: !0,
								"ec-3": !0,
								enca: !0,
								g719: !0,
								g726: !0,
								m4ae: !0,
								mha1: !0,
								mha2: !0,
								mhm1: !0,
								mhm2: !0,
								mlpa: !0,
								mp4a: !0,
								"raw ": !0,
								Opus: !0,
								samr: !0,
								sawb: !0,
								sawp: !0,
								sevc: !0,
								sqcp: !0,
								ssmv: !0,
								twos: !0,
								ulaw: !0
							},
							video: {
								avc1: !0,
								avc2: !0,
								avc3: !0,
								avc4: !0,
								avcp: !0,
								drac: !0,
								dvav: !0,
								dvhe: !0,
								encv: !0,
								hev1: !0,
								hvc1: !0,
								mjp2: !0,
								mp4v: !0,
								mvc1: !0,
								mvc2: !0,
								mvc3: !0,
								mvc4: !0,
								resv: !0,
								rv60: !0,
								s263: !0,
								svc1: !0,
								svc2: !0,
								"vc-1": !0,
								vp08: !0,
								vp09: !0
							}
						};
						t.isCodecType = function(e, t) {
							var r = n[t];
							return !!r && !0 === r[e.slice(0, 4)]
						}, t.isCodecSupportedInMp4 = function(e, t) {
							return window.MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
						}
					},
					"./src/utils/cues.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/utils/vttparser.js");
						t.newCue = function(e, t, r, i) {
							for (var s, o, a, l, d, c = window.VTTCue || window.TextTrackCue, u = 0; u < i.rows.length; u++)
								if (a = !0, l = 0, d = "", !(s = i.rows[u]).isEmpty()) {
									for (var h = 0; h < s.chars.length; h++) s.chars[h].uchar.match(/\s/) && a ? l++ : (d += s.chars[h].uchar, a = !1);
									s.cueStartTime = t, t === r && (r += 1e-4), o = new c(t, r, n.fixLineBreaks(d.trim())), l >= 16 ? l-- : l++, navigator.userAgent.match(/Firefox\//) ? o.line = u + 1 : o.line = u > 7 ? u - 2 : u + 1, o.align = "left", o.position = Math.max(0, Math.min(100, l / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))), e.addCue(o)
								}
						}
					},
					"./src/utils/discontinuities.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/utils/binary-search.js"),
								i = r("./src/utils/logger.js");

							function s(e, t) {
								for (var r = null, n = 0; n < e.length; n += 1) {
									var i = e[n];
									if (i && i.cc === t) {
										r = i;
										break
									}
								}
								return r
							}

							function o(e, t, r) {
								var n = !1;
								return t && t.details && r && (r.endCC > r.startCC || e && e.cc < r.startCC) && (n = !0), n
							}

							function a(e, t) {
								var r = e.fragments,
									n = t.fragments;
								if (n.length && r.length) {
									var o = s(r, n[0].cc);
									if (o && (!o || o.startPTS)) return o;
									i.logger.log("No frag in previous level to align on")
								} else i.logger.log("No fragments to align")
							}

							function l(e, t) {
								t.fragments.forEach((function(t) {
									if (t) {
										var r = t.start + e;
										t.start = t.startPTS = r, t.endPTS = r + t.duration
									}
								})), t.PTSKnown = !0
							}

							function d(e, t, r) {
								if (o(e, r, t)) {
									var n = a(r.details, t);
									n && (i.logger.log("Adjusting PTS using last level due to CC increase within current level"), l(n.start, t))
								}
							}

							function c(t, r) {
								if (r && r.fragments.length) {
									if (!t.hasProgramDateTime || !r.hasProgramDateTime) return;
									var n = r.fragments[0].programDateTime,
										s = (t.fragments[0].programDateTime - n) / 1e3 + r.fragments[0].start;
									e.isFinite(s) && (i.logger.log("adjusting PTS using programDateTime delta, sliding:" + s.toFixed(3)), l(s, t))
								}
							}
							t.findFirstFragWithCC = s, t.findFragWithCC = function(e, t) {
								return n.default.search(e, (function(e) {
									return e.cc < t ? 1 : e.cc > t ? -1 : 0
								}))
							}, t.shouldAlignOnDiscontinuities = o, t.findDiscontinuousReferenceFrag = a, t.adjustPts = l, t.alignStream = function(e, t, r) {
								d(e, r, t), !r.PTSKnown && t && c(r, t.details)
							}, t.alignDiscontinuities = d, t.alignPDT = c
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/utils/ewma-bandwidth-estimator.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/utils/ewma.js"),
							i = function() {
								function e(e, t, r, i) {
									this.hls = e, this.defaultEstimate_ = i, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new n.default(t), this.fast_ = new n.default(r)
								}
								return e.prototype.sample = function(e, t) {
									var r = 8e3 * t / (e = Math.max(e, this.minDelayMs_)),
										n = e / 1e3;
									this.fast_.sample(n, r), this.slow_.sample(n, r)
								}, e.prototype.canEstimate = function() {
									var e = this.fast_;
									return e && e.getTotalWeight() >= this.minWeight_
								}, e.prototype.getEstimate = function() {
									return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
								}, e.prototype.destroy = function() {}, e
							}();
						t.default = i
					},
					"./src/utils/ewma.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = function() {
							function e(e) {
								this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = 0, this.totalWeight_ = 0
							}
							return e.prototype.sample = function(e, t) {
								var r = Math.pow(this.alpha_, e);
								this.estimate_ = t * (1 - r) + r * this.estimate_, this.totalWeight_ += e
							}, e.prototype.getTotalWeight = function() {
								return this.totalWeight_
							}, e.prototype.getEstimate = function() {
								if (this.alpha_) {
									var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
									return this.estimate_ / e
								}
								return this.estimate_
							}, e
						}();
						t.default = n
					},
					"./src/utils/get-self-scope.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.getSelfScope = function() {
							return "undefined" == typeof window ? self : window
						}
					},
					"./src/utils/logger.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/utils/get-self-scope.js");

						function i() {}
						var s = {
								trace: i,
								debug: i,
								log: i,
								warn: i,
								info: i,
								error: i
							},
							o = s;

						function a(e, t) {
							return t = "[" + e + "] > " + t
						}
						var l = n.getSelfScope();

						function d(e) {
							for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
							t.forEach((function(t) {
								o[t] = e[t] ? e[t].bind(e) : function(e) {
									var t = l.console[e];
									return t ? function() {
										for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
										r[0] && (r[0] = a(e, r[0])), t.apply(l.console, r)
									} : i
								}(t)
							}))
						}
						t.enableLogs = function(e) {
							if (!0 === e || "object" == typeof e) {
								d(e, "debug", "log", "info", "warn", "error");
								try {
									o.log()
								} catch (t) {
									o = s
								}
							} else o = s
						}, t.logger = o
					},
					"./src/utils/mediakeys-helper.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null;
						t.requestMediaKeySystemAccess = n
					},
					"./src/utils/mediasource-helper.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.getMediaSource = function() {
							if ("undefined" != typeof window) return window.MediaSource || window.WebKitMediaSource
						}
					},
					"./src/utils/output-filter.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = function() {
							function e(e, t) {
								this.timelineController = e, this.trackName = t, this.startTime = null, this.endTime = null, this.screen = null
							}
							return e.prototype.dispatchCue = function() {
								null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen), this.startTime = null)
							}, e.prototype.newCue = function(e, t, r) {
								(null === this.startTime || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName)
							}, e
						}();
						t.default = n
					},
					"./src/utils/texttrack-utils.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.sendAddTrackEvent = function(e, t) {
							var r = null;
							try {
								r = new window.Event("addtrack")
							} catch (n) {
								(r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
							}
							r.track = e, t.dispatchEvent(r)
						}, t.clearCurrentCues = function(e) {
							if (e && e.cues)
								for (; e.cues.length > 0;) e.removeCue(e.cues[0])
						}
					},
					"./src/utils/time-ranges.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = {
							toString: function(e) {
								for (var t = "", r = e.length, n = 0; n < r; n++) t += "[" + e.start(n).toFixed(3) + "," + e.end(n).toFixed(3) + "]";
								return t
							}
						}
					},
					"./src/utils/vttcue.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						}), t.default = function() {
							if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
							var e = "auto",
								t = {
									"": !0,
									lr: !0,
									rl: !0
								},
								r = {
									start: !0,
									middle: !0,
									end: !0,
									left: !0,
									right: !0
								};

							function n(e) {
								return "string" == typeof e && !!r[e.toLowerCase()] && e.toLowerCase()
							}

							function i(e) {
								for (var t = 1; t < arguments.length; t++) {
									var r = arguments[t];
									for (var n in r) e[n] = r[n]
								}
								return e
							}

							function s(r, s, o) {
								var a = this,
									l = function() {
										if ("undefined" != typeof navigator) return /MSIE\s8\.0/.test(navigator.userAgent)
									}(),
									d = {};
								l ? a = document.createElement("custom") : d.enumerable = !0, a.hasBeenReset = !1;
								var c = "",
									u = !1,
									h = r,
									p = s,
									f = o,
									g = null,
									v = "",
									m = !0,
									b = "auto",
									y = "start",
									_ = 50,
									w = "middle",
									E = 50,
									S = "middle";
								if (Object.defineProperty(a, "id", i({}, d, {
										get: function() {
											return c
										},
										set: function(e) {
											c = "" + e
										}
									})), Object.defineProperty(a, "pauseOnExit", i({}, d, {
										get: function() {
											return u
										},
										set: function(e) {
											u = !!e
										}
									})), Object.defineProperty(a, "startTime", i({}, d, {
										get: function() {
											return h
										},
										set: function(e) {
											if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
											h = e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(a, "endTime", i({}, d, {
										get: function() {
											return p
										},
										set: function(e) {
											if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
											p = e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(a, "text", i({}, d, {
										get: function() {
											return f
										},
										set: function(e) {
											f = "" + e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(a, "region", i({}, d, {
										get: function() {
											return g
										},
										set: function(e) {
											g = e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(a, "vertical", i({}, d, {
										get: function() {
											return v
										},
										set: function(e) {
											var r = function(e) {
												return "string" == typeof e && !!t[e.toLowerCase()] && e.toLowerCase()
											}(e);
											if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
											v = r, this.hasBeenReset = !0
										}
									})), Object.defineProperty(a, "snapToLines", i({}, d, {
										get: function() {
											return m
										},
										set: function(e) {
											m = !!e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(a, "line", i({}, d, {
										get: function() {
											return b
										},
										set: function(t) {
											if ("number" != typeof t && t !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
											b = t, this.hasBeenReset = !0
										}
									})), Object.defineProperty(a, "lineAlign", i({}, d, {
										get: function() {
											return y
										},
										set: function(e) {
											var t = n(e);
											if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
											y = t, this.hasBeenReset = !0
										}
									})), Object.defineProperty(a, "position", i({}, d, {
										get: function() {
											return _
										},
										set: function(e) {
											if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
											_ = e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(a, "positionAlign", i({}, d, {
										get: function() {
											return w
										},
										set: function(e) {
											var t = n(e);
											if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
											w = t, this.hasBeenReset = !0
										}
									})), Object.defineProperty(a, "size", i({}, d, {
										get: function() {
											return E
										},
										set: function(e) {
											if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
											E = e, this.hasBeenReset = !0
										}
									})), Object.defineProperty(a, "align", i({}, d, {
										get: function() {
											return S
										},
										set: function(e) {
											var t = n(e);
											if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
											S = t, this.hasBeenReset = !0
										}
									})), a.displayState = void 0, l) return a
							}
							return s.prototype.getCueAsHTML = function() {
								return window.WebVTT.convertCueToDOMTree(window, this.text)
							}, s
						}()
					},
					"./src/utils/vttparser.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/utils/vttcue.js"),
							i = function() {
								return {
									decode: function(e) {
										if (!e) return "";
										if ("string" != typeof e) throw new Error("Error - expected string data.");
										return decodeURIComponent(encodeURIComponent(e))
									}
								}
							};

						function s() {
							this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new i, this.regionList = []
						}

						function o() {
							this.values = Object.create(null)
						}

						function a(e, t, r, n) {
							var i = n ? e.split(n) : [e];
							for (var s in i)
								if ("string" == typeof i[s]) {
									var o = i[s].split(r);
									2 === o.length && t(o[0], o[1])
								}
						}
						o.prototype = {
							set: function(e, t) {
								this.get(e) || "" === t || (this.values[e] = t)
							},
							get: function(e, t, r) {
								return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t
							},
							has: function(e) {
								return e in this.values
							},
							alt: function(e, t, r) {
								for (var n = 0; n < r.length; ++n)
									if (t === r[n]) {
										this.set(e, t);
										break
									}
							},
							integer: function(e, t) {
								/^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
							},
							percent: function(e, t) {
								return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0)
							}
						};
						var l = new n.default(0, 0, 0),
							d = "middle" === l.align ? "middle" : "center";

						function c(e, t, r) {
							var n = e;

							function i() {
								var t = function(e) {
									function t(e, t, r, n) {
										return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | n) / 1e3
									}
									var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
									return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null
								}(e);
								if (null === t) throw new Error("Malformed timestamp: " + n);
								return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
							}

							function s() {
								e = e.replace(/^\s+/, "")
							}
							if (s(), t.startTime = i(), s(), "--\x3e" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + n);
							e = e.substr(3), s(), t.endTime = i(), s(),
								function(e, t) {
									var n = new o;
									a(e, (function(e, t) {
										switch (e) {
											case "region":
												for (var i = r.length - 1; i >= 0; i--)
													if (r[i].id === t) {
														n.set(e, r[i].region);
														break
													} break;
											case "vertical":
												n.alt(e, t, ["rl", "lr"]);
												break;
											case "line":
												var s = t.split(","),
													o = s[0];
												n.integer(e, o), n.percent(e, o) && n.set("snapToLines", !1), n.alt(e, o, ["auto"]), 2 === s.length && n.alt("lineAlign", s[1], ["start", d, "end"]);
												break;
											case "position":
												s = t.split(","), n.percent(e, s[0]), 2 === s.length && n.alt("positionAlign", s[1], ["start", d, "end", "line-left", "line-right", "auto"]);
												break;
											case "size":
												n.percent(e, t);
												break;
											case "align":
												n.alt(e, t, ["start", d, "end", "left", "right"])
										}
									}), /:/, /\s/), t.region = n.get("region", null), t.vertical = n.get("vertical", "");
									var i = n.get("line", "auto");
									"auto" === i && -1 === l.line && (i = -1), t.line = i, t.lineAlign = n.get("lineAlign", "start"), t.snapToLines = n.get("snapToLines", !0), t.size = n.get("size", 100), t.align = n.get("align", d);
									var s = n.get("position", "auto");
									"auto" === s && 50 === l.position && (s = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50), t.position = s
								}(e, t)
						}

						function u(e) {
							return e.replace(/<br(?: \/)?>/gi, "\n")
						}
						t.fixLineBreaks = u, s.prototype = {
							parse: function(e) {
								var t = this;

								function r() {
									var e = t.buffer,
										r = 0;
									for (e = u(e); r < e.length && "\r" !== e[r] && "\n" !== e[r];) ++r;
									var n = e.substr(0, r);
									return "\r" === e[r] && ++r, "\n" === e[r] && ++r, t.buffer = e.substr(r), n
								}
								e && (t.buffer += t.decoder.decode(e, {
									stream: !0
								}));
								try {
									var i = void 0;
									if ("INITIAL" === t.state) {
										if (!/\r\n|\n/.test(t.buffer)) return this;
										var s = (i = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
										if (!s || !s[0]) throw new Error("Malformed WebVTT signature.");
										t.state = "HEADER"
									}
									for (var o = !1; t.buffer;) {
										if (!/\r\n|\n/.test(t.buffer)) return this;
										switch (o ? o = !1 : i = r(), t.state) {
											case "HEADER":
												/:/.test(i) ? a(i, (function(e, t) {}), /:/) : i || (t.state = "ID");
												continue;
											case "NOTE":
												i || (t.state = "ID");
												continue;
											case "ID":
												if (/^NOTE($|[ \t])/.test(i)) {
													t.state = "NOTE";
													break
												}
												if (!i) continue;
												if (t.cue = new n.default(0, 0, ""), t.state = "CUE", -1 === i.indexOf("--\x3e")) {
													t.cue.id = i;
													continue
												}
												case "CUE":
													try {
														c(i, t.cue, t.regionList)
													} catch (d) {
														t.cue = null, t.state = "BADCUE";
														continue
													}
													t.state = "CUETEXT";
													continue;
												case "CUETEXT":
													var l = -1 !== i.indexOf("--\x3e");
													if (!i || l && (o = !0)) {
														t.oncue && t.oncue(t.cue), t.cue = null, t.state = "ID";
														continue
													}
													t.cue.text && (t.cue.text += "\n"), t.cue.text += i;
													continue;
												case "BADCUE":
													i || (t.state = "ID");
													continue
										}
									}
								} catch (d) {
									"CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
								}
								return this
							},
							flush: function() {
								try {
									if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new Error("Malformed WebVTT signature.")
								} catch (e) {
									throw e
								}
								return this.onflush && this.onflush(), this
							}
						}, t.default = s
					},
					"./src/utils/webvtt-parser.js": function(e, t, r) {
						"use strict";
						(function(e) {
							Object.defineProperty(t, "__esModule", {
								value: !0
							});
							var n = r("./src/utils/vttparser.js"),
								i = r("./src/demux/id3.js"),
								s = function(e, t, r) {
									return e.substr(r || 0, t.length) === t
								},
								o = function(e) {
									for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
									return (t >>> 0).toString()
								},
								a = {
									parse: function(t, r, a, l, d, c) {
										var u, h = i.utf8ArrayToStr(new Uint8Array(t)).trim().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n"),
											p = "00:00.000",
											f = 0,
											g = 0,
											v = 0,
											m = [],
											b = !0,
											y = new n.default;
										y.oncue = function(e) {
											var t = a[l],
												r = a.ccOffset;
											t && t.new && (void 0 !== g ? r = a.ccOffset = t.start : function(e, t, r) {
												var n = e[t],
													i = e[n.prevCC];
												if (!i || !i.new && n.new) return e.ccOffset = e.presentationOffset = n.start, void(n.new = !1);
												for (; i && i.new;) e.ccOffset += n.start - i.start, n.new = !1, i = e[(n = i).prevCC];
												e.presentationOffset = r
											}(a, l, v)), v && (r = v - a.presentationOffset), e.startTime += r - g, e.endTime += r - g, e.id = o(e.startTime.toString()) + o(e.endTime.toString()) + o(e.text), e.text = decodeURIComponent(encodeURIComponent(e.text)), e.endTime > 0 && m.push(e)
										}, y.onparsingerror = function(e) {
											u = e
										}, y.onflush = function() {
											u && c ? c(u) : d(m)
										}, h.forEach((function(t) {
											if (b) {
												if (s(t, "X-TIMESTAMP-MAP=")) {
													b = !1, t.substr(16).split(",").forEach((function(e) {
														s(e, "LOCAL:") ? p = e.substr(6) : s(e, "MPEGTS:") && (f = parseInt(e.substr(7)))
													}));
													try {
														r + (9e4 * a[l].start || 0) < 0 && (r += 8589934592), f -= r, n = p, i = parseInt(n.substr(-3)), o = parseInt(n.substr(-6, 2)), d = parseInt(n.substr(-9, 2)), c = n.length > 9 ? parseInt(n.substr(0, n.indexOf(":"))) : 0, g = (e.isFinite(i) && e.isFinite(o) && e.isFinite(d) && e.isFinite(c) ? (i += 1e3 * o, i += 6e4 * d, i += 36e5 * c) : -1) / 1e3, v = f / 9e4, -1 === g && (u = new Error("Malformed X-TIMESTAMP-MAP: " + t))
													} catch (h) {
														u = new Error("Malformed X-TIMESTAMP-MAP: " + t)
													}
													return
												}
												"" === t && (b = !1)
											}
											var n, i, o, d, c;
											y.parse(t + "\n")
										})), y.flush()
									}
								};
							t.default = a
						}).call(this, r("./src/polyfills/number.js").Number)
					},
					"./src/utils/xhr-loader.js": function(e, t, r) {
						"use strict";
						Object.defineProperty(t, "__esModule", {
							value: !0
						});
						var n = r("./src/utils/logger.js"),
							i = window.performance,
							s = window.XMLHttpRequest,
							o = function() {
								function e(e) {
									e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
								}
								return e.prototype.destroy = function() {
									this.abort(), this.loader = null
								}, e.prototype.abort = function() {
									var e = this.loader;
									e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
								}, e.prototype.load = function(e, t, r) {
									this.context = e, this.config = t, this.callbacks = r, this.stats = {
										trequest: i.now(),
										retry: 0
									}, this.retryDelay = t.retryDelay, this.loadInternal()
								}, e.prototype.loadInternal = function() {
									var e, t = this.context;
									e = this.loader = new s;
									var r = this.stats;
									r.tfirst = 0, r.loaded = 0;
									var n = this.xhrSetup;
									try {
										if (n) try {
											n(e, t.url)
										} catch (i) {
											e.open("GET", t.url, !0), n(e, t.url)
										}
										e.readyState || e.open("GET", t.url, !0)
									} catch (i) {
										return void this.callbacks.onError({
											code: e.status,
											text: i.message
										}, t, e)
									}
									t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send()
								}, e.prototype.readystatechange = function(e) {
									var t = e.currentTarget,
										r = t.readyState,
										s = this.stats,
										o = this.context,
										a = this.config;
									if (!s.aborted && r >= 2)
										if (window.clearTimeout(this.requestTimeout), 0 === s.tfirst && (s.tfirst = Math.max(i.now(), s.trequest)), 4 === r) {
											var l = t.status;
											if (l >= 200 && l < 300) {
												s.tload = Math.max(s.tfirst, i.now());
												var d = void 0,
													c = void 0;
												c = "arraybuffer" === o.responseType ? (d = t.response).byteLength : (d = t.responseText).length, s.loaded = s.total = c;
												var u = {
													url: t.responseURL,
													data: d
												};
												this.callbacks.onSuccess(u, s, o, t)
											} else s.retry >= a.maxRetry || l >= 400 && l < 499 ? (n.logger.error(l + " while loading " + o.url), this.callbacks.onError({
												code: l,
												text: t.statusText
											}, o, t)) : (n.logger.warn(l + " while loading " + o.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), s.retry++)
										} else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout)
								}, e.prototype.loadtimeout = function() {
									n.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
								}, e.prototype.loadprogress = function(e) {
									var t = e.currentTarget,
										r = this.stats;
									r.loaded = e.loaded, e.lengthComputable && (r.total = e.total);
									var n = this.callbacks.onProgress;
									n && n(r, this.context, null, t)
								}, e
							}();
						t.default = o
					}
				}).default
			}, e.exports = n())
		},
		"./node_modules/lit-html/lit-html.js": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
				return V
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "f", (function() {
				return T
			}));
			const i = window,
				s = i.trustedTypes,
				o = s ? s.createPolicy("lit-html", {
					createHTML: e => e
				}) : void 0,
				a = `lit$${(Math.random()+"").slice(9)}$`,
				l = "?" + a,
				d = `<${l}>`,
				c = document,
				u = (e = "") => c.createComment(e),
				h = e => null === e || "object" != typeof e && "function" != typeof e,
				p = Array.isArray,
				f = e => p(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator]),
				g = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
				v = /-->/g,
				m = />/g,
				b = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
				y = /'/g,
				_ = /"/g,
				w = /^(?:script|style|textarea|title)$/i,
				E = e => (t, ...r) => ({
					_$litType$: e,
					strings: t,
					values: r
				}),
				S = E(1),
				T = E(2),
				k = Symbol.for("lit-noChange"),
				A = Symbol.for("lit-nothing"),
				x = new WeakMap,
				R = (e, t, r) => {
					var n, i;
					const s = null !== (n = null == r ? void 0 : r.renderBefore) && void 0 !== n ? n : t;
					let o = s._$litPart$;
					if (void 0 === o) {
						const e = null !== (i = null == r ? void 0 : r.renderBefore) && void 0 !== i ? i : null;
						s._$litPart$ = o = new I(t.insertBefore(u(), e), e, void 0, null != r ? r : {})
					}
					return o._$AI(e), o
				},
				O = c.createTreeWalker(c, 129, null, !1),
				L = (e, t) => {
					const r = e.length - 1,
						n = [];
					let i, s = 2 === t ? "<svg>" : "",
						l = g;
					for (let o = 0; o < r; o++) {
						const t = e[o];
						let r, c, u = -1,
							h = 0;
						for (; h < t.length && (l.lastIndex = h, null !== (c = l.exec(t)));) h = l.lastIndex, l === g ? "!--" === c[1] ? l = v : void 0 !== c[1] ? l = m : void 0 !== c[2] ? (w.test(c[2]) && (i = RegExp("</" + c[2], "g")), l = b) : void 0 !== c[3] && (l = b) : l === b ? ">" === c[0] ? (l = null != i ? i : g, u = -1) : void 0 === c[1] ? u = -2 : (u = l.lastIndex - c[2].length, r = c[1], l = void 0 === c[3] ? b : '"' === c[3] ? _ : y) : l === _ || l === y ? l = b : l === v || l === m ? l = g : (l = b, i = void 0);
						const p = l === b && e[o + 1].startsWith("/>") ? " " : "";
						s += l === g ? t + d : u >= 0 ? (n.push(r), t.slice(0, u) + "$lit$" + t.slice(u) + a + p) : t + a + (-2 === u ? (n.push(void 0), o) : p)
					}
					const c = s + (e[r] || "<?>") + (2 === t ? "</svg>" : "");
					if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
					return [void 0 !== o ? o.createHTML(c) : c, n]
				};
			class C {
				constructor({
					strings: e,
					_$litType$: t
				}, r) {
					let n;
					this.parts = [];
					let i = 0,
						o = 0;
					const d = e.length - 1,
						c = this.parts,
						[h, p] = L(e, t);
					if (this.el = C.createElement(h, r), O.currentNode = this.el.content, 2 === t) {
						const e = this.el.content,
							t = e.firstChild;
						t.remove(), e.append(...t.childNodes)
					}
					for (; null !== (n = O.nextNode()) && c.length < d;) {
						if (1 === n.nodeType) {
							if (n.hasAttributes()) {
								const e = [];
								for (const t of n.getAttributeNames())
									if (t.endsWith("$lit$") || t.startsWith(a)) {
										const r = p[o++];
										if (e.push(t), void 0 !== r) {
											const e = n.getAttribute(r.toLowerCase() + "$lit$").split(a),
												t = /([.?@])?(.*)/.exec(r);
											c.push({
												type: 1,
												index: i,
												name: t[2],
												strings: e,
												ctor: "." === t[1] ? j : "?" === t[1] ? N : "@" === t[1] ? U : M
											})
										} else c.push({
											type: 6,
											index: i
										})
									} for (const t of e) n.removeAttribute(t)
							}
							if (w.test(n.tagName)) {
								const e = n.textContent.split(a),
									t = e.length - 1;
								if (t > 0) {
									n.textContent = s ? s.emptyScript : "";
									for (let r = 0; r < t; r++) n.append(e[r], u()), O.nextNode(), c.push({
										type: 2,
										index: ++i
									});
									n.append(e[t], u())
								}
							}
						} else if (8 === n.nodeType)
							if (n.data === l) c.push({
								type: 2,
								index: i
							});
							else {
								let e = -1;
								for (; - 1 !== (e = n.data.indexOf(a, e + 1));) c.push({
									type: 7,
									index: i
								}), e += a.length - 1
							} i++
					}
				}
				static createElement(e, t) {
					const r = c.createElement("template");
					return r.innerHTML = e, r
				}
			}

			function P(e, t, r = e, n) {
				var i, s, o, a;
				if (t === k) return t;
				let l = void 0 !== n ? null === (i = r._$Cl) || void 0 === i ? void 0 : i[n] : r._$Cu;
				const d = h(t) ? void 0 : t._$litDirective$;
				return (null == l ? void 0 : l.constructor) !== d && (null === (s = null == l ? void 0 : l._$AO) || void 0 === s || s.call(l, !1), void 0 === d ? l = void 0 : (l = new d(e))._$AT(e, r, n), void 0 !== n ? (null !== (o = (a = r)._$Cl) && void 0 !== o ? o : a._$Cl = [])[n] = l : r._$Cu = l), void 0 !== l && (t = P(e, l._$AS(e, t.values), l, n)), t
			}
			class D {
				constructor(e, t) {
					this.v = [], this._$AN = void 0, this._$AD = e, this._$AM = t
				}
				get parentNode() {
					return this._$AM.parentNode
				}
				get _$AU() {
					return this._$AM._$AU
				}
				p(e) {
					var t;
					const {
						el: {
							content: r
						},
						parts: n
					} = this._$AD, i = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : c).importNode(r, !0);
					O.currentNode = i;
					let s = O.nextNode(),
						o = 0,
						a = 0,
						l = n[0];
					for (; void 0 !== l;) {
						if (o === l.index) {
							let t;
							2 === l.type ? t = new I(s, s.nextSibling, this, e) : 1 === l.type ? t = new l.ctor(s, l.name, l.strings, this, e) : 6 === l.type && (t = new B(s, this, e)), this.v.push(t), l = n[++a]
						}
						o !== (null == l ? void 0 : l.index) && (s = O.nextNode(), o++)
					}
					return i
				}
				m(e) {
					let t = 0;
					for (const r of this.v) void 0 !== r && (void 0 !== r.strings ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++
				}
			}
			class I {
				constructor(e, t, r, n) {
					var i;
					this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = n, this._$C_ = null === (i = null == n ? void 0 : n.isConnected) || void 0 === i || i
				}
				get _$AU() {
					var e, t;
					return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$C_
				}
				get parentNode() {
					let e = this._$AA.parentNode;
					const t = this._$AM;
					return void 0 !== t && 11 === e.nodeType && (e = t.parentNode), e
				}
				get startNode() {
					return this._$AA
				}
				get endNode() {
					return this._$AB
				}
				_$AI(e, t = this) {
					e = P(this, e, t), h(e) ? e === A || null == e || "" === e ? (this._$AH !== A && this._$AR(), this._$AH = A) : e !== this._$AH && e !== k && this.$(e) : void 0 !== e._$litType$ ? this.T(e) : void 0 !== e.nodeType ? this.k(e) : f(e) ? this.O(e) : this.$(e)
				}
				S(e, t = this._$AB) {
					return this._$AA.parentNode.insertBefore(e, t)
				}
				k(e) {
					this._$AH !== e && (this._$AR(), this._$AH = this.S(e))
				}
				$(e) {
					this._$AH !== A && h(this._$AH) ? this._$AA.nextSibling.data = e : this.k(c.createTextNode(e)), this._$AH = e
				}
				T(e) {
					var t;
					const {
						values: r,
						_$litType$: n
					} = e, i = "number" == typeof n ? this._$AC(e) : (void 0 === n.el && (n.el = C.createElement(n.h, this.options)), n);
					if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === i) this._$AH.m(r);
					else {
						const e = new D(i, this),
							t = e.p(this.options);
						e.m(r), this.k(t), this._$AH = e
					}
				}
				_$AC(e) {
					let t = x.get(e.strings);
					return void 0 === t && x.set(e.strings, t = new C(e)), t
				}
				O(e) {
					p(this._$AH) || (this._$AH = [], this._$AR());
					const t = this._$AH;
					let r, n = 0;
					for (const i of e) n === t.length ? t.push(r = new I(this.S(u()), this.S(u()), this, this.options)) : r = t[n], r._$AI(i), n++;
					n < t.length && (this._$AR(r && r._$AB.nextSibling, n), t.length = n)
				}
				_$AR(e = this._$AA.nextSibling, t) {
					var r;
					for (null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, t); e && e !== this._$AB;) {
						const t = e.nextSibling;
						e.remove(), e = t
					}
				}
				setConnected(e) {
					var t;
					void 0 === this._$AM && (this._$C_ = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
				}
			}
			class M {
				constructor(e, t, r, n, i) {
					this.type = 1, this._$AH = A, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = i, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = A
				}
				get tagName() {
					return this.element.tagName
				}
				get _$AU() {
					return this._$AM._$AU
				}
				_$AI(e, t = this, r, n) {
					const i = this.strings;
					let s = !1;
					if (void 0 === i) e = P(this, e, t, 0), (s = !h(e) || e !== this._$AH && e !== k) && (this._$AH = e);
					else {
						const n = e;
						let o, a;
						for (e = i[0], o = 0; o < i.length - 1; o++)(a = P(this, n[r + o], t, o)) === k && (a = this._$AH[o]), s || (s = !h(a) || a !== this._$AH[o]), a === A ? e = A : e !== A && (e += (null != a ? a : "") + i[o + 1]), this._$AH[o] = a
					}
					s && !n && this.P(e)
				}
				P(e) {
					e === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
				}
			}
			class j extends M {
				constructor() {
					super(...arguments), this.type = 3
				}
				P(e) {
					this.element[this.name] = e === A ? void 0 : e
				}
			}
			const F = s ? s.emptyScript : "";
			class N extends M {
				constructor() {
					super(...arguments), this.type = 4
				}
				P(e) {
					e && e !== A ? this.element.setAttribute(this.name, F) : this.element.removeAttribute(this.name)
				}
			}
			class U extends M {
				constructor(e, t, r, n, i) {
					super(e, t, r, n, i), this.type = 5
				}
				_$AI(e, t = this) {
					var r;
					if ((e = null !== (r = P(this, e, t, 0)) && void 0 !== r ? r : A) === k) return;
					const n = this._$AH,
						i = e === A && n !== A || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive,
						s = e !== A && (n === A || i);
					i && this.element.removeEventListener(this.name, this, n), s && this.element.addEventListener(this.name, this, e), this._$AH = e
				}
				handleEvent(e) {
					var t, r;
					"function" == typeof this._$AH ? this._$AH.call(null !== (r = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== r ? r : this.element, e) : this._$AH.handleEvent(e)
				}
			}
			class B {
				constructor(e, t, r) {
					this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r
				}
				get _$AU() {
					return this._$AM._$AU
				}
				_$AI(e) {
					P(this, e)
				}
			}
			const V = {
					A: "$lit$",
					M: a,
					C: l,
					L: 1,
					R: L,
					D,
					V: f,
					I: P,
					H: I,
					N: M,
					U: N,
					B: U,
					F: j,
					W: B
				},
				$ = i.litHtmlPolyfillSupport;
			null == $ || $(C, I), (null !== (n = i.litHtmlVersions) && void 0 !== n ? n : i.litHtmlVersions = []).push("2.3.1")
		},
		"./node_modules/lit/decorators.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "c", (function() {
				return l
			}));
			const n = e => t => "function" == typeof t ? ((e, t) => (customElements.define(e, t), t))(e, t) : ((e, t) => {
					const {
						kind: r,
						elements: n
					} = t;
					return {
						kind: r,
						elements: n,
						finisher(t) {
							customElements.define(e, t)
						}
					}
				})(e, t),
				i = (e, t) => "method" !== t.kind || !t.descriptor || "value" in t.descriptor ? {
					kind: "field",
					key: Symbol(),
					placement: "own",
					descriptor: {},
					originalKey: t.key,
					initializer() {
						"function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
					},
					finisher(r) {
						r.createProperty(t.key, e)
					}
				} : {
					...t,
					finisher(r) {
						r.createProperty(t.key, e)
					}
				};

			function s(e) {
				return (t, r) => void 0 !== r ? ((e, t, r) => {
					t.constructor.createProperty(r, e)
				})(e, t, r) : i(e, t)
			}

			function o(e) {
				return s({
					...e,
					state: !0
				})
			}
			const a = ({
				finisher: e,
				descriptor: t
			}) => (r, n) => {
				var i;
				if (void 0 === n) {
					const n = null !== (i = r.originalKey) && void 0 !== i ? i : r.key,
						s = null != t ? {
							kind: "method",
							placement: "prototype",
							key: n,
							descriptor: t(r.key)
						} : {
							...r,
							key: n
						};
					return null != e && (s.finisher = function(t) {
						e(t, n)
					}), s
				} {
					const i = r.constructor;
					void 0 !== t && Object.defineProperty(r, n, t(n)), null == e || e(i, n)
				}
			};

			function l(e, t) {
				return a({
					descriptor: r => {
						const n = {
							get() {
								var t, r;
								return null !== (r = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e)) && void 0 !== r ? r : null
							},
							enumerable: !0,
							configurable: !0
						};
						if (t) {
							const t = "symbol" == typeof r ? Symbol() : "__" + r;
							n.get = function() {
								var r, n;
								return void 0 === this[t] && (this[t] = null !== (n = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e)) && void 0 !== n ? n : null), this[t]
							}
						}
						return n
					}
				})
			}
			var d;
			null === (d = window.HTMLSlotElement) || void 0 === d || d.prototype.assignedElements
		},
		"./node_modules/lit/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return E.b
			})), r.d(t, "d", (function() {
				return E.f
			})), r.d(t, "a", (function() {
				return S
			}));
			const n = window,
				i = n.ShadowRoot && (void 0 === n.ShadyCSS || n.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
				s = Symbol(),
				o = new WeakMap;
			class a {
				constructor(e, t, r) {
					if (this._$cssResult$ = !0, r !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
					this.cssText = e, this.t = t
				}
				get styleSheet() {
					let e = this.o;
					const t = this.t;
					if (i && void 0 === e) {
						const r = void 0 !== t && 1 === t.length;
						r && (e = o.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), r && o.set(t, e))
					}
					return e
				}
				toString() {
					return this.cssText
				}
			}
			const l = (e, ...t) => {
					const r = 1 === e.length ? e[0] : t.reduce((t, r, n) => t + (e => {
						if (!0 === e._$cssResult$) return e.cssText;
						if ("number" == typeof e) return e;
						throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
					})(r) + e[n + 1], e[0]);
					return new a(r, e, s)
				},
				d = (e, t) => {
					i ? e.adoptedStyleSheets = t.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach(t => {
						const r = document.createElement("style"),
							i = n.litNonce;
						void 0 !== i && r.setAttribute("nonce", i), r.textContent = t.cssText, e.appendChild(r)
					})
				},
				c = i ? e => e : e => e instanceof CSSStyleSheet ? (e => {
					let t = "";
					for (const r of e.cssRules) t += r.cssText;
					return (e => new a("string" == typeof e ? e : e + "", void 0, s))(t)
				})(e) : e;
			var u;
			const h = window,
				p = h.trustedTypes,
				f = p ? p.emptyScript : "",
				g = h.reactiveElementPolyfillSupport,
				v = {
					toAttribute(e, t) {
						switch (t) {
							case Boolean:
								e = e ? f : null;
								break;
							case Object:
							case Array:
								e = null == e ? e : JSON.stringify(e)
						}
						return e
					},
					fromAttribute(e, t) {
						let r = e;
						switch (t) {
							case Boolean:
								r = null !== e;
								break;
							case Number:
								r = null === e ? null : Number(e);
								break;
							case Object:
							case Array:
								try {
									r = JSON.parse(e)
								} catch (e) {
									r = null
								}
						}
						return r
					}
				},
				m = (e, t) => t !== e && (t == t || e == e),
				b = {
					attribute: !0,
					type: String,
					converter: v,
					reflect: !1,
					hasChanged: m
				};
			class y extends HTMLElement {
				constructor() {
					super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u()
				}
				static addInitializer(e) {
					var t;
					null !== (t = this.h) && void 0 !== t || (this.h = []), this.h.push(e)
				}
				static get observedAttributes() {
					this.finalize();
					const e = [];
					return this.elementProperties.forEach((t, r) => {
						const n = this._$Ep(r, t);
						void 0 !== n && (this._$Ev.set(n, r), e.push(n))
					}), e
				}
				static createProperty(e, t = b) {
					if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
						const r = "symbol" == typeof e ? Symbol() : "__" + e,
							n = this.getPropertyDescriptor(e, r, t);
						void 0 !== n && Object.defineProperty(this.prototype, e, n)
					}
				}
				static getPropertyDescriptor(e, t, r) {
					return {
						get() {
							return this[t]
						},
						set(n) {
							const i = this[e];
							this[t] = n, this.requestUpdate(e, i, r)
						},
						configurable: !0,
						enumerable: !0
					}
				}
				static getPropertyOptions(e) {
					return this.elementProperties.get(e) || b
				}
				static finalize() {
					if (this.hasOwnProperty("finalized")) return !1;
					this.finalized = !0;
					const e = Object.getPrototypeOf(this);
					if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
						const e = this.properties,
							t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
						for (const r of t) this.createProperty(r, e[r])
					}
					return this.elementStyles = this.finalizeStyles(this.styles), !0
				}
				static finalizeStyles(e) {
					const t = [];
					if (Array.isArray(e)) {
						const r = new Set(e.flat(1 / 0).reverse());
						for (const e of r) t.unshift(c(e))
					} else void 0 !== e && t.push(c(e));
					return t
				}
				static _$Ep(e, t) {
					const r = t.attribute;
					return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof e ? e.toLowerCase() : void 0
				}
				u() {
					var e;
					this._$E_ = new Promise(e => this.enableUpdating = e), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (e = this.constructor.h) || void 0 === e || e.forEach(e => e(this))
				}
				addController(e) {
					var t, r;
					(null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (r = e.hostConnected) || void 0 === r || r.call(e))
				}
				removeController(e) {
					var t;
					null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1)
				}
				_$Eg() {
					this.constructor.elementProperties.forEach((e, t) => {
						this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t])
					})
				}
				createRenderRoot() {
					var e;
					const t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
					return d(t, this.constructor.elementStyles), t
				}
				connectedCallback() {
					var e;
					void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$ES) || void 0 === e || e.forEach(e => {
						var t;
						return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
					})
				}
				enableUpdating(e) {}
				disconnectedCallback() {
					var e;
					null === (e = this._$ES) || void 0 === e || e.forEach(e => {
						var t;
						return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
					})
				}
				attributeChangedCallback(e, t, r) {
					this._$AK(e, r)
				}
				_$EO(e, t, r = b) {
					var n;
					const i = this.constructor._$Ep(e, r);
					if (void 0 !== i && !0 === r.reflect) {
						const s = (void 0 !== (null === (n = r.converter) || void 0 === n ? void 0 : n.toAttribute) ? r.converter : v).toAttribute(t, r.type);
						this._$El = e, null == s ? this.removeAttribute(i) : this.setAttribute(i, s), this._$El = null
					}
				}
				_$AK(e, t) {
					var r;
					const n = this.constructor,
						i = n._$Ev.get(e);
					if (void 0 !== i && this._$El !== i) {
						const e = n.getPropertyOptions(i),
							s = "function" == typeof e.converter ? {
								fromAttribute: e.converter
							} : void 0 !== (null === (r = e.converter) || void 0 === r ? void 0 : r.fromAttribute) ? e.converter : v;
						this._$El = i, this[i] = s.fromAttribute(t, e.type), this._$El = null
					}
				}
				requestUpdate(e, t, r) {
					let n = !0;
					void 0 !== e && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || m)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === r.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(e, r))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej())
				}
				async _$Ej() {
					this.isUpdatePending = !0;
					try {
						await this._$E_
					} catch (e) {
						Promise.reject(e)
					}
					const e = this.scheduleUpdate();
					return null != e && await e, !this.isUpdatePending
				}
				scheduleUpdate() {
					return this.performUpdate()
				}
				performUpdate() {
					var e;
					if (!this.isUpdatePending) return;
					this.hasUpdated, this._$Ei && (this._$Ei.forEach((e, t) => this[t] = e), this._$Ei = void 0);
					let t = !1;
					const r = this._$AL;
					try {
						(t = this.shouldUpdate(r)) ? (this.willUpdate(r), null === (e = this._$ES) || void 0 === e || e.forEach(e => {
							var t;
							return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
						}), this.update(r)) : this._$Ek()
					} catch (e) {
						throw t = !1, this._$Ek(), e
					}
					t && this._$AE(r)
				}
				willUpdate(e) {}
				_$AE(e) {
					var t;
					null === (t = this._$ES) || void 0 === t || t.forEach(e => {
						var t;
						return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
					}), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
				}
				_$Ek() {
					this._$AL = new Map, this.isUpdatePending = !1
				}
				get updateComplete() {
					return this.getUpdateComplete()
				}
				getUpdateComplete() {
					return this._$E_
				}
				shouldUpdate(e) {
					return !0
				}
				update(e) {
					void 0 !== this._$EC && (this._$EC.forEach((e, t) => this._$EO(t, this[t], e)), this._$EC = void 0), this._$Ek()
				}
				updated(e) {}
				firstUpdated(e) {}
			}
			y.finalized = !0, y.elementProperties = new Map, y.elementStyles = [], y.shadowRootOptions = {
				mode: "open"
			}, null == g || g({
				ReactiveElement: y
			}), (null !== (u = h.reactiveElementVersions) && void 0 !== u ? u : h.reactiveElementVersions = []).push("1.4.1");
			var _, w, E = r("./node_modules/lit-html/lit-html.js");
			class S extends y {
				constructor() {
					super(...arguments), this.renderOptions = {
						host: this
					}, this._$Do = void 0
				}
				createRenderRoot() {
					var e, t;
					const r = super.createRenderRoot();
					return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = r.firstChild), r
				}
				update(e) {
					const t = this.render();
					this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Object(E.e)(t, this.renderRoot, this.renderOptions)
				}
				connectedCallback() {
					var e;
					super.connectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!0)
				}
				disconnectedCallback() {
					var e;
					super.disconnectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!1)
				}
				render() {
					return E.c
				}
			}
			S.finalized = !0, S._$litElement$ = !0, null === (_ = globalThis.litElementHydrateSupport) || void 0 === _ || _.call(globalThis, {
				LitElement: S
			});
			const T = globalThis.litElementPolyfillSupport;
			null == T || T({
				LitElement: S
			});
			(null !== (w = globalThis.litElementVersions) && void 0 !== w ? w : globalThis.litElementVersions = []).push("3.2.2")
		},
		"./node_modules/tslib/tslib.es6.js": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return i
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "l", (function() {
				return o
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "n", (function() {
				return c
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "m", (function() {
				return h
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "g", (function() {
				return m
			}));
			var n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					})(e, t)
			};

			function i(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

				function r() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
			}
			var s = function() {
				return (s = Object.assign || function(e) {
					for (var t, r = 1, n = arguments.length; r < n; r++)
						for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e
				}).apply(this, arguments)
			};

			function o(e, t) {
				var r = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
				}
				return r
			}

			function a(e, t, r, n) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			}

			function l(e, t, r, n) {
				return new(r || (r = Promise))((function(i, s) {
					function o(e) {
						try {
							l(n.next(e))
						} catch (t) {
							s(t)
						}
					}

					function a(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							s(t)
						}
					}

					function l(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(o, a)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			}

			function d(e, t) {
				var r, n, i, s, o = {
					label: 0,
					sent: function() {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return s = {
					next: a(0),
					throw: a(1),
					return: a(2)
				}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
					return this
				}), s;

				function a(s) {
					return function(a) {
						return function(s) {
							if (r) throw new TypeError("Generator is already executing.");
							for (; o;) try {
								if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
								switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
									case 0:
									case 1:
										i = s;
										break;
									case 4:
										return o.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										o.label++, n = s[1], s = [0];
										continue;
									case 7:
										s = o.ops.pop(), o.trys.pop();
										continue;
									default:
										if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
											o = 0;
											continue
										}
										if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
											o.label = s[1];
											break
										}
										if (6 === s[0] && o.label < i[1]) {
											o.label = i[1], i = s;
											break
										}
										if (i && o.label < i[2]) {
											o.label = i[2], o.ops.push(s);
											break
										}
										i[2] && o.ops.pop(), o.trys.pop();
										continue
								}
								s = t.call(e, o)
							} catch (a) {
								s = [6, a], n = 0
							} finally {
								r = i = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, a])
					}
				}
			}
			Object.create;

			function c(e) {
				var t = "function" == typeof Symbol && Symbol.iterator,
					r = t && e[t],
					n = 0;
				if (r) return r.call(e);
				if (e && "number" == typeof e.length) return {
					next: function() {
						return e && n >= e.length && (e = void 0), {
							value: e && e[n++],
							done: !e
						}
					}
				};
				throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
			}

			function u(e, t) {
				var r = "function" == typeof Symbol && e[Symbol.iterator];
				if (!r) return e;
				var n, i, s = r.call(e),
					o = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(n = s.next()).done;) o.push(n.value)
				} catch (a) {
					i = {
						error: a
					}
				} finally {
					try {
						n && !n.done && (r = s.return) && r.call(s)
					} finally {
						if (i) throw i.error
					}
				}
				return o
			}

			function h(e, t, r) {
				if (r || 2 === arguments.length)
					for (var n, i = 0, s = t.length; i < s; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
				return e.concat(n || t)
			}

			function p(e) {
				return this instanceof p ? (this.v = e, this) : new p(e)
			}

			function f(e, t, r) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var n, i = r.apply(e, t || []),
					s = [];
				return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
					return this
				}, n;

				function o(e) {
					i[e] && (n[e] = function(t) {
						return new Promise((function(r, n) {
							s.push([e, t, r, n]) > 1 || a(e, t)
						}))
					})
				}

				function a(e, t) {
					try {
						(r = i[e](t)).value instanceof p ? Promise.resolve(r.value.v).then(l, d) : c(s[0][2], r)
					} catch (n) {
						c(s[0][3], n)
					}
					var r
				}

				function l(e) {
					a("next", e)
				}

				function d(e) {
					a("throw", e)
				}

				function c(e, t) {
					e(t), s.shift(), s.length && a(s[0][0], s[0][1])
				}
			}

			function g(e) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var t, r = e[Symbol.asyncIterator];
				return r ? r.call(e) : (e = c(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
					return this
				}, t);

				function n(r) {
					t[r] = e[r] && function(t) {
						return new Promise((function(n, i) {
							(function(e, t, r, n) {
								Promise.resolve(n).then((function(t) {
									e({
										value: t,
										done: r
									})
								}), t)
							})(n, i, (t = e[r](t)).done, t.value)
						}))
					}
				}
			}
			Object.create;

			function v(e, t, r, n) {
				if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
				if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
				return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
			}

			function m(e, t, r, n, i) {
				if ("m" === n) throw new TypeError("Private method is not writable");
				if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
				if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
				return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~shreddit-player.64c7ce0358a17a1c8254.js.map