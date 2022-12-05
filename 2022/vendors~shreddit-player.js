// https://www.redditstatic.com/desktop2x/vendors~shreddit-player.2920aa0bfca03131bc57.js
// Retrieved at 12/5/2022, 1:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~shreddit-player"], {
		"./node_modules/@reddit/faceplate/lib/custom-event.js": function(e, t, n) {
			"use strict";

			function r(e, t, n = !0) {
				return new CustomEvent(e, {
					composed: !0,
					bubbles: n,
					cancelable: !0,
					detail: t
				})
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./node_modules/@reddit/shreddit.components.shreddit-player/dist/index.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "ShredditPlayer", (function() {
				return zn
			}));
			var r = n("./node_modules/lit/index.js"),
				i = n("./node_modules/lit/decorators.js"),
				o = n("./node_modules/lit-html/lit-html.js");
			const s = e => null != e ? e : o.d;
			var a = n("./node_modules/tslib/tslib.es6.js");
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
				_$AT(e, t, n) {
					this._$Ct = e, this._$AM = t, this._$Ci = n
				}
				_$AS(e, t) {
					return this.update(e, t)
				}
				update(e, t) {
					return this.render(...t)
				}
			}
			const h = d(class extends c {
				constructor(e) {
					var t;
					if (super(e), e.type !== l.ATTRIBUTE || "style" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")
				}
				render(e) {
					return Object.keys(e).reduce((t, n) => {
						const r = e[n];
						return null == r ? t : t + `${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`
					}, "")
				}
				update(e, [t]) {
					const {
						style: n
					} = e.element;
					if (void 0 === this.vt) {
						this.vt = new Set;
						for (const e in t) this.vt.add(e);
						return this.render(t)
					}
					this.vt.forEach(e => {
						null == t[e] && (this.vt.delete(e), e.includes("-") ? n.removeProperty(e) : n[e] = "")
					});
					for (const r in t) {
						const e = t[r];
						null != e && (this.vt.add(r), r.includes("-") ? n.setProperty(r, e) : n[r] = e)
					}
					return o.c
				}
			});
			var u = n("./node_modules/@reddit/faceplate/lib/custom-event.js");
			const p = {
					rootMargin: "200px"
				},
				v = new Map;

			function g(e, t) {
				return !v.has(e) && t && v.set(e, function(e) {
					return new IntersectionObserver(e => {
						for (const t of e) {
							const e = t.target,
								n = t.isIntersecting ? Object(u.a)("faceplate-enter", t, !1) : Object(u.a)("faceplate-leave", t, !1);
							e.dispatchEvent(n)
						}
					}, e)
				}(t)), v.get(e)
			}
			class b {
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
			const f = Symbol("mixins/user-action");
			var _, y, w;
			! function(e) {
				e[e.emergency = 0] = "emergency", e[e.alert = 1] = "alert", e[e.critical = 2] = "critical", e[e.error = 3] = "error", e[e.warning = 4] = "warning", e[e.notice = 5] = "notice", e[e.info = 6] = "info", e[e.success = 7] = "success", e[e.debug = 8] = "debug", e[e.none = 9] = "none"
			}(_ || (_ = {})),
			function(e) {
				e.Programmatic = "programmatic", e.Eager = "eager", e.Action = "action", e.Intent = "intent", e.Lazy = "lazy", e.Preload = "preload"
			}(y || (y = {})),
			function(e) {
				e.Get = "get", e.Post = "post", e.Dialog = "dialog", e.Log = "log"
			}(w || (w = {}));
			let x = class extends(function(e) {
				if (f in e) return e;
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
				return t[f] = !0, t
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
						this._observer || (this._observer = new b(e), this._observer.observe(this), this.addEventListener("faceplate-enter", this._handleEnter), this.addEventListener("faceplate-leave", this._handleLeave))
					}
					disableObserver() {
						this._observer && (this._observer.unobserve(this), this._observer = null, this.removeEventListener("faceplate-enter", this._handleEnter), this.removeEventListener("faceplate-leave", this._handleLeave))
					}
					observerIsIntersectingCallback(e) {}
					observerIsNotIntersectingCallback(e) {}
				}
				return t[m] = !0, t
			}(r.a))) {
				constructor() {
					super(...arguments), this.src = "", this.srcset = "", this.sizes = "", this.loading = y.Lazy, this.width = 0, this.height = 0, this.perfmark = "", this.objectfit = void 0, this.isRequestInProgress = !1
				}
				static get styles() {
					return r.b`
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
					this.loading === y.Lazy ? this.enableObserver() : this.loading === y.Action ? this.enableUserActions() : this.loading === y.Eager && this.loadContent()
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
						const e = Object(u.a)("faceplate-load", {
							resource: t.src,
							src: this.src
						});
						this.dispatchEvent(e)
					}, t.onerror = () => {
						const e = new Error("Image failed to load"),
							t = Object(u.a)("faceplate-error", e);
						this.dispatchEvent(t)
					}, this.isRequestInProgress = !0, t.src = e
				}
				render() {
					const e = this.isRequestInProgress && this.loading === y.Action;
					let t = r.c`
      <slot name=${s(e?"loading":void 0)}></slot>
    `;
					const n = this.objectfit ? h({
						objectFit: encodeURIComponent(this.objectfit)
					}) : void 0;
					return this.img && (t = r.c`
        <img
          src="${this.img.src}"
          srcset="${s(this.srcset)}"
          sizes="${s(this.sizes)}"
          alt="${s(this.alt)}"
          style="${s(n)}"
        />
      `), r.c`
      <div
        class="${this.img?"loaded":"placeholder"}"
        style="${h({width:this.width?this.width+"px":"inherit",height:this.height?this.height+"px":"inherit"})}"
        tabindex=${s(this.isActionable?0:void 0)}
      >
        ${t}
      </div>
    `
				}
			};

			function k(e) {
				const t = [e];
				return t.raw = t, Object(r.b)(t)
			}
			Object(a.h)([Object(i.b)({
				type: String
			})], x.prototype, "src", void 0), Object(a.h)([Object(i.b)({
				type: String
			})], x.prototype, "srcset", void 0), Object(a.h)([Object(i.b)({
				type: String
			})], x.prototype, "sizes", void 0), Object(a.h)([Object(i.b)({
				type: String
			})], x.prototype, "loading", void 0), Object(a.h)([Object(i.b)({
				type: Number
			})], x.prototype, "width", void 0), Object(a.h)([Object(i.b)({
				type: Number
			})], x.prototype, "height", void 0), Object(a.h)([Object(i.b)({
				type: String
			})], x.prototype, "perfmark", void 0), Object(a.h)([Object(i.b)({
				type: String
			})], x.prototype, "objectfit", void 0), Object(a.h)([Object(i.b)({
				type: String
			})], x.prototype, "alt", void 0), x = Object(a.h)([Object(i.a)("faceplate-img")], x);
			r.b;
			var E = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			let S = class extends x {
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
					return r.c`
      <div
        class="${e?"loaded":"placeholder"}"
        style="${h(t)}"
        tabindex="${s(this.isActionable?0:void 0)}"
      >
        ${this.content}
      </div>
    `
				}
				static get styles() {
					return [super.styles, k(".shreddit-img__image{height:100%;max-height:inherit}")]
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
					let e = r.c`
      <img
        class="shreddit-img__image"
        alt="${s(this.alt)}"
        src="${this.src}"
        style="${h(this.imageStyle)}"
      />
    `;
					return this.shouldRenderImageLink && (e = r.c`
        <a
          href="${this.linkHref||this.src}"
          title="${s(this.linkTitle)}"
          rel="${s(this.linkRel)}"
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
					return e && this.loading === y.Action ? this.loadingSlot : this.defaultSlot
				}
				get loadingSlot() {
					return r.c`<slot name="loading"></slot>`
				}
				get defaultSlot() {
					return r.c`<slot></slot>`
				}
			};
			E([Object(i.b)({
				type: String
			})], S.prototype, "alt", void 0), E([Object(i.b)({
				type: Boolean,
				attribute: "should-render-image-link"
			})], S.prototype, "shouldRenderImageLink", void 0), E([Object(i.b)({
				type: String,
				attribute: "link-title"
			})], S.prototype, "linkTitle", void 0), E([Object(i.b)({
				type: String,
				attribute: "link-href"
			})], S.prototype, "linkHref", void 0), E([Object(i.b)({
				type: String,
				attribute: "link-rel"
			})], S.prototype, "linkRel", void 0), S = E([Object(i.a)("shreddit-img")], S);
			class C extends c {
				constructor(e) {
					if (super(e), this.it = o.d, e.type !== l.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings")
				}
				render(e) {
					if (e === o.d || null == e) return this._t = void 0, this.it = e;
					if (e === o.c) return e;
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
			C.directiveName = "unsafeHTML", C.resultType = 1;
			d(C);
			class O extends C {}
			O.directiveName = "unsafeSVG", O.resultType = 2;
			const A = d(O);
			var P;
			! function(e) {
				e.Small = "sm", e.Medium = "md", e.Large = "lg", e.ExtraLarge = "xl"
			}(P || (P = {}));
			const j = r.b`
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

			function $(e, t, n, o = j) {
				if (n) {
					class s extends r.a {
						constructor() {
							super(...arguments), this.size = P.Small, this.fill = !1
						}
						static get styles() {
							return o
						}
						render() {
							return this.fill ? n : t
						}
					}
					Object(a.h)([Object(i.b)({
						type: String,
						reflect: !0
					})], s.prototype, "size", void 0), Object(a.h)([Object(i.b)({
						type: Boolean
					})], s.prototype, "fill", void 0), window.customElements.define(e, s)
				} else {
					class n extends r.a {
						constructor() {
							super(...arguments), this.size = P.Small
						}
						static get styles() {
							return o
						}
						render() {
							return t
						}
					}
					Object(a.h)([Object(i.b)({
						type: String,
						reflect: !0
					})], n.prototype, "size", void 0), window.customElements.define(e, n)
				}
			}
			$("icon-checkmark", r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 15.583a.72.72 0 01-.513-.212L1.558 9.942l.884-.884L7.5 14.116 18.058 3.558l.884.884-10.93 10.929a.723.723 0 01-.512.212z"/></svg>')}`, r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 15.958a1.102 1.102 0 01-.778-.322l-5.429-5.429 1.414-1.414L7.5 13.586 17.793 3.293l1.414 1.414L8.278 15.636a1.101 1.101 0 01-.778.322z"/></svg>')}`);
			$("icon-collapse-left", r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M18.183 19.067L12.3 13.179v3.491h-1.25v-5a.625.625 0 01.624-.625h5V12.3H13.18l5.887 5.888-.884.879zM7.75 6.866L1.862.979l-.884.883L6.866 7.75H3.375V9h5A.625.625 0 009 8.375v-5H7.75v3.491z"/></svg>')}`, r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9 3.375v5A.625.625 0 018.375 9h-5a.625.625 0 01-.442-1.067L4.726 6.14.714 2.127 2.128.713 6.14 4.726l1.793-1.793A.625.625 0 019 3.375zm10.332 14.543l-4.058-4.058 1.793-1.793A.626.626 0 0016.625 11h-5a.625.625 0 00-.625.625v5a.626.626 0 001.067.442l1.793-1.793 4.058 4.058 1.414-1.414z"/></svg>')}`);
			$("icon-expand-left", r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.134 3.25l4.933 4.933-.884.884L3.25 4.134v3.491H2v-5A.625.625 0 012.625 2h5v1.25H4.134zm12.616 9.125v3.491l-4.933-4.933-.884.884 4.933 4.933h-3.491V18h5a.624.624 0 00.625-.625v-5h-1.25z"/></svg>')}`, r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.274 4.86l3.058 3.058-1.414 1.414L4.86 6.274 3.067 8.067A.625.625 0 012 7.625v-5A.625.625 0 012.625 2h5a.625.625 0 01.442 1.067L6.274 4.86zm11.34 6.94a.627.627 0 00-.681.136l-1.793 1.79-3.058-3.058-1.414 1.414 3.058 3.058-1.793 1.793A.625.625 0 0012.375 18h5a.624.624 0 00.625-.625v-5a.626.626 0 00-.386-.575z"/></svg>')}`);
			$("icon-gif-post", r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_616_22)"><path d="M4.711 12.664A2.8 2.8 0 013.6 11.583 3.108 3.108 0 013.2 10a3.052 3.052 0 01.411-1.583c.267-.46.659-.834 1.129-1.082a3.37 3.37 0 011.616-.385c.333 0 .664.043.986.128.309.081.605.205.879.369l-.5 1.169a1.314 1.314 0 00-.563-.357 2.3 2.3 0 00-.754-.124 1.733 1.733 0 00-1.863 1.848c-.006.344.073.684.232.99a1.7 1.7 0 001.542.925c.258.004.513-.051.746-.162.209-.097.387-.25.513-.443.121-.185.185-.401.183-.622H6.124V9.619L9 9.6v.928a2.4 2.4 0 01-1.293 2.193 2.955 2.955 0 01-1.417.328 3.247 3.247 0 01-1.579-.385zm5.471-5.648H11.5v5.968h-1.318V7.016zm2.862 0H16.5v1.169h-2.138v1.392h1.79v1.169h-1.79v2.238h-1.318V7.016zM10 20a18.04 18.04 0 01-6.369-1.162 4.226 4.226 0 01-2.469-2.47 18.033 18.033 0 010-12.737 4.228 4.228 0 012.469-2.469 18.116 18.116 0 0112.738 0 4.228 4.228 0 012.469 2.469 18.035 18.035 0 010 12.738 4.225 4.225 0 01-2.469 2.469A18.04 18.04 0 0110 20zm0-18.75a16.8 16.8 0 00-5.929 1.082 2.978 2.978 0 00-1.739 1.739 16.783 16.783 0 000 11.857 2.98 2.98 0 001.739 1.74 16.858 16.858 0 0011.858 0 2.978 2.978 0 001.739-1.739 16.785 16.785 0 000-11.858 2.978 2.978 0 00-1.739-1.739A16.8 16.8 0 0010 1.25z"/></g><defs><clipPath id="clip0_616_22"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_616_23)"><path d="M18.838 3.631a4.228 4.228 0 00-2.469-2.469 18.116 18.116 0 00-12.738 0 4.228 4.228 0 00-2.469 2.469 18.033 18.033 0 000 12.737 4.226 4.226 0 002.469 2.47 18.035 18.035 0 0012.738 0 4.226 4.226 0 002.469-2.469 18.035 18.035 0 000-12.738zM9 10.53a2.4 2.4 0 01-1.293 2.193 2.955 2.955 0 01-1.417.328 3.246 3.246 0 01-1.579-.386A2.811 2.811 0 013.6 11.583 3.108 3.108 0 013.2 10a3.052 3.052 0 01.411-1.583c.267-.46.659-.834 1.129-1.082a3.37 3.37 0 011.616-.385c.333 0 .664.043.986.128.309.081.605.205.879.369l-.5 1.169a1.314 1.314 0 00-.563-.357 2.3 2.3 0 00-.754-.124 1.733 1.733 0 00-1.863 1.848c-.006.344.073.684.232.99a1.7 1.7 0 001.542.925c.258.004.513-.051.746-.162.209-.097.387-.25.513-.443.121-.185.185-.401.183-.622H6.124V9.619L9 9.6v.93zm2.5 2.454H10V7.016h1.5v5.968zm5-4.8h-2.138v1.393h1.79v1.169h-1.79v2.238H13V7.016h3.5v1.168z"/></g><defs><clipPath id="clip0_616_23"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			$("icon-play", r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.125 19.543A1.124 1.124 0 013 18.418V1.582A1.125 1.125 0 014.735.636l13.048 8.419a1.125 1.125 0 010 1.89L4.735 19.364a1.129 1.129 0 01-.61.179zM4.25 1.811v16.378L16.942 10 4.25 1.811z"/></svg>')}`, r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.125 19.543A1.126 1.126 0 013 18.418V1.582A1.125 1.125 0 014.735.636l13.048 8.418a1.126 1.126 0 010 1.891L4.735 19.363a1.13 1.13 0 01-.61.18z"/></svg>')}`);
			$("icon-pause", r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.875 19h-3.75A1.126 1.126 0 012 17.875V2.125A1.127 1.127 0 013.125 1h3.75A1.127 1.127 0 018 2.125v15.75A1.126 1.126 0 016.875 19zM3.25 17.75h3.5V2.25h-3.5v15.5zM16.875 19h-3.75A1.126 1.126 0 0112 17.875V2.125A1.127 1.127 0 0113.125 1h3.75A1.127 1.127 0 0118 2.125v15.75A1.126 1.126 0 0116.875 19zm-3.625-1.25h3.5V2.25h-3.5v15.5z"/></svg>')}`, r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.875 19h-3.75A1.127 1.127 0 012 17.875V2.125A1.127 1.127 0 013.125 1h3.75A1.127 1.127 0 018 2.125v15.75A1.127 1.127 0 016.875 19zm10 0h-3.75A1.127 1.127 0 0112 17.875V2.125A1.127 1.127 0 0113.125 1h3.75A1.127 1.127 0 0118 2.125v15.75A1.127 1.127 0 0116.875 19z"/></svg>')}`);
			$("icon-volume", r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.891 19.854c-.25 0-.494-.087-.687-.247l-5.389-4.662H2.108A1.125 1.125 0 011 13.807V6.193a1.125 1.125 0 011.108-1.138h1.707L9.19.405a1.089 1.089 0 011.168-.153A1.129 1.129 0 0111 1.285v17.43a1.129 1.129 0 01-.643 1.033c-.145.07-.305.106-.466.106zM2.251 13.7h2.03l5.47 4.727V1.572L4.28 6.305h-2.03V13.7zM16.124 10A3.13 3.13 0 0013 6.875v1.25a1.875 1.875 0 110 3.75v1.25A3.129 3.129 0 0016.125 10zM20 10a7.008 7.008 0 00-7-7v1.25a5.75 5.75 0 110 11.5V17a7.008 7.008 0 007-7z"/></svg>')}`, r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13 13.5v-2a1.5 1.5 0 100-3v-2a3.5 3.5 0 110 7zM13 3v2a5 5 0 110 10v2a7 7 0 100-14zM10.357.252A1.091 1.091 0 009.19.405l-5.374 4.65H2.108A1.125 1.125 0 001 6.193v7.614a1.125 1.125 0 001.108 1.138h1.707l5.39 4.663a1.081 1.081 0 001.153.14A1.131 1.131 0 0011 18.715V1.285a1.13 1.13 0 00-.643-1.033z"/></svg>')}`);
			$("icon-volume-mute", r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M16.784 9.5l2.558 2.558-.884.884-2.558-2.558-2.558 2.558-.884-.884L15.016 9.5l-2.558-2.558.884-.884L15.9 8.616l2.558-2.558.884.884L16.784 9.5zm-6.427 10.248A1.128 1.128 0 0011 18.715V1.286a1.131 1.131 0 00-.643-1.034A1.091 1.091 0 009.19.405L3.815 5.056H2.108A1.124 1.124 0 001 6.194v7.613a1.124 1.124 0 001.108 1.138h1.707L9.2 19.608a1.084 1.084 0 001.157.14zM2.25 6.306h2.031l5.47-4.733v16.855L4.28 13.7h-2.03V6.306z"/></svg>')}`, r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M11 1.285v17.43a1.131 1.131 0 01-.642 1.033 1.081 1.081 0 01-1.153-.14l-5.39-4.663H2.108A1.125 1.125 0 011 13.807V6.193a1.125 1.125 0 011.108-1.138h1.707L9.19.405a1.09 1.09 0 011.168-.153A1.129 1.129 0 0111 1.285zm8.607 5.922l-1.414-1.414L15.9 8.086l-2.293-2.293-1.414 1.414L14.486 9.5l-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414L17.314 9.5l2.293-2.293z"/></svg>')}`);
			$("icon-refresh", r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_457_91)"><path d="M16.75 11.5A7.25 7.25 0 119.5 4.25h4.069L11.31 6.133l.8.96 3.59-2.988a.626.626 0 000-.96L12.109.157l-.8.96L13.569 3H9.5a8.5 8.5 0 108.5 8.5h-1.25z"/></g><defs><clipPath id="clip0_457_91"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_457_79)"><path d="M16 11.5A6.5 6.5 0 119.5 5H11v1.914a1 1 0 001.665.747l3.318-2.951a1 1 0 000-1.495L12.665.265A1 1 0 0011 1.012V3H9.5a8.5 8.5 0 108.5 8.5h-2zm-2.214-7.512v-.05l.028.025-.028.025z"/></g><defs><clipPath id="clip0_457_79"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			$("icon-settings", r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_79)"><path d="M10 20c-.401 0-.802-.027-1.2-.079a1.145 1.145 0 01-.992-1.137v-1.073a.97.97 0 00-.627-.878A.98.98 0 006.1 17l-.755.753a1.149 1.149 0 01-1.521.1 10.16 10.16 0 01-1.671-1.671 1.149 1.149 0 01.1-1.523L3 13.906a.97.97 0 00.176-1.069.98.98 0 00-.887-.649H1.216A1.145 1.145 0 01.079 11.2a9.1 9.1 0 010-2.393 1.145 1.145 0 011.137-.992h1.073a.97.97 0 00.878-.627A.979.979 0 003 6.1l-.754-.754a1.15 1.15 0 01-.1-1.522 10.16 10.16 0 011.673-1.676 1.155 1.155 0 011.522.1L6.1 3a.966.966 0 001.068.176.98.98 0 00.649-.887V1.216A1.145 1.145 0 018.8.079a9.129 9.129 0 012.393 0 1.144 1.144 0 01.991 1.137v1.073a.971.971 0 00.628.878A.977.977 0 0013.905 3l.754-.754a1.152 1.152 0 011.522-.1c.62.49 1.18 1.05 1.671 1.671a1.15 1.15 0 01-.1 1.522L17 6.1a.967.967 0 00-.176 1.068.98.98 0 00.887.649h1.073a1.145 1.145 0 011.137.991 9.096 9.096 0 010 2.392 1.145 1.145 0 01-1.137.992h-1.073A1.041 1.041 0 0017 13.905l.753.755a1.149 1.149 0 01.1 1.521c-.49.62-1.05 1.18-1.671 1.671a1.149 1.149 0 01-1.522-.1L13.906 17a.97.97 0 00-1.069-.176.981.981 0 00-.65.887v1.073a1.144 1.144 0 01-.99 1.137A9.431 9.431 0 0110 20zm-.938-1.307a7.638 7.638 0 001.875 0v-.982a2.292 2.292 0 013.853-1.6l.693.694a8.796 8.796 0 001.326-1.326l-.694-.694a2.29 2.29 0 011.6-3.851h.982a7.746 7.746 0 000-1.876h-.982a2.213 2.213 0 01-2.034-1.4 2.223 2.223 0 01.438-2.451l.694-.693a8.76 8.76 0 00-1.327-1.326l-.692.694a2.219 2.219 0 01-2.434.445 2.221 2.221 0 01-1.419-2.041v-.979a7.638 7.638 0 00-1.875 0v.982a2.213 2.213 0 01-1.4 2.034 2.23 2.23 0 01-2.456-.438l-.693-.694a8.757 8.757 0 00-1.326 1.327l.694.692a2.216 2.216 0 01.445 2.434 2.22 2.22 0 01-2.041 1.418h-.982a7.746 7.746 0 000 1.876h.982a2.213 2.213 0 012.034 1.4 2.223 2.223 0 01-.438 2.451l-.694.693c.394.488.838.933 1.326 1.326l.694-.694a2.218 2.218 0 012.433-.445 2.22 2.22 0 011.418 2.041v.983zM10 13.229a3.23 3.23 0 110-6.458 3.23 3.23 0 010 6.458zm0-5.208a1.979 1.979 0 100 3.958 1.979 1.979 0 000-3.958z"/></g><defs><clipPath id="clip0_473_79"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, r.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_76)"><path d="M19.921 8.8a1.145 1.145 0 00-1.137-.991h-1.073a.98.98 0 01-.887-.649A.969.969 0 0117 6.1l.754-.754a1.15 1.15 0 00.1-1.522 10.16 10.16 0 00-1.671-1.671 1.152 1.152 0 00-1.522.1L13.905 3a.975.975 0 01-1.09.167.97.97 0 01-.628-.878V1.216A1.144 1.144 0 0011.2.079a9.129 9.129 0 00-2.4 0 1.145 1.145 0 00-.991 1.137v1.073a.98.98 0 01-.649.887A.966.966 0 016.1 3l-.754-.754a1.152 1.152 0 00-1.522-.1 10.16 10.16 0 00-1.676 1.673 1.15 1.15 0 00.1 1.522L3 6.1a.979.979 0 01.167 1.09.97.97 0 01-.878.627H1.216A1.145 1.145 0 00.079 8.8a9.1 9.1 0 000 2.393 1.145 1.145 0 001.137.991h1.073a.98.98 0 01.887.649A.97.97 0 013 13.906l-.751.752a1.149 1.149 0 00-.1 1.523c.49.62 1.05 1.18 1.671 1.671a1.148 1.148 0 001.521-.1L6.1 17a.98.98 0 011.09-.167.97.97 0 01.627.878v1.073a1.145 1.145 0 00.983 1.137 9.103 9.103 0 002.393 0 1.144 1.144 0 00.99-1.137v-1.073a.981.981 0 01.65-.887.968.968 0 011.073.176l.753.753a1.149 1.149 0 001.522.1c.62-.49 1.18-1.05 1.671-1.671a1.149 1.149 0 00-.1-1.521L17 13.905a1.04 1.04 0 01.711-1.717h1.073a1.145 1.145 0 001.137-.992 9.096 9.096 0 000-2.392V8.8zM11.979 10a1.98 1.98 0 11-3.958 0 1.98 1.98 0 013.958 0z"/></g><defs><clipPath id="clip0_473_76"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			var M, R;
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function T() {}

			function L(e) {
				return null === e
			}

			function V(e) {
				return void 0 === e
			}

			function q(e) {
				return L(e) || V(e)
			}

			function D(e) {
				return "number" == typeof e && !Number.isNaN(e)
			}

			function I(e) {
				return "string" == typeof e
			}

			function H(e) {
				return "function" == typeof e
			}

			function z(e) {
				return Array.isArray(e)
			}
			const F = "undefined" != typeof window,
				U = F ? null === (M = window.navigator) || void 0 === M ? void 0 : M.userAgent.toLowerCase() : "",
				N = /iphone|ipad|ipod|ios|CriOS|FxiOS/.test(U),
				B = (/android/.test(U), F && /(iPhone|iPod)/gi.test(null === (R = window.navigator) || void 0 === R ? void 0 : R.platform), /firefox/.test(U), F && !!window.chrome);
			F && !B && (window.safari || N || /(apple|safari)/.test(U)), F && "file:" !== window.location.protocol && (window.location.protocol, window.location.hostname);

			function W() {
				const e = null !== (t = null === (n = window) || void 0 === n ? void 0 : n.MediaSource) && void 0 !== t ? t : null === (r = window) || void 0 === r ? void 0 : r.WebKitMediaSource;
				var t, n, r;
				if (V(e)) return !1;
				const i = e && H(e.isTypeSupported) && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
					o = null !== (s = null === (a = window) || void 0 === a ? void 0 : a.SourceBuffer) && void 0 !== s ? s : null === (l = window) || void 0 === l ? void 0 : l.WebKitSourceBuffer;
				var s, a, l;
				const d = V(o) || !V(o.prototype) && H(o.prototype.appendBuffer) && H(o.prototype.remove);
				return !!i && !!d
			}

			function Y(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : F;
				const r = n && !V(window.customElements.get(e));
				n && !r && window.customElements.define(e, t)
			}

			function Q(e, t, n) {
				if (q(n) || !1 === n) e.removeAttribute(t);
				else {
					const r = I(n) ? n : "";
					e.setAttribute(t, r)
				}
			}

			function K(e, t, n) {
				e.hasAttribute(t) || e.setAttribute(t, n)
			}

			function X(e, t, n) {
				let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vds";
				e.style.setProperty(`--${r}-${t}`, n || null)
			}
			var G = n("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");
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
				var n;
				(null !== (n = ee(e)) && void 0 !== n ? n : e).triggerEvent = t
			}
			const ne = new Map,
				re = new Map;

			function ie(e, t, n) {
				const r = {
					host: e,
					callback: n
				};
				e.addController({
					hostConnected: () => {
						var i;
						for (const {
								element: r,
								onDisconnect: o
							} of function(e, t) {
								var n;
								return Array.from(null !== (n = re.get(t)) && void 0 !== n ? n : []).filter(t => {
									let {
										element: n
									} = t;
									return e !== n && e.contains(n)
								})
							}(e, t)) n(r, o);
						ne.set(t, (null !== (i = ne.get(t)) && void 0 !== i ? i : new Set).add(r))
					},
					hostDisconnected: () => {
						var e;
						null === (e = ne.get(t)) || void 0 === e || e.delete(r)
					}
				})
			}

			function oe(e, t) {
				const n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).register,
					r = new G.a,
					i = e => {
						r.add(e)
					},
					o = {
						element: e,
						onDisconnect: i
					};
				e.addController({
					hostConnected() {
						const r = Z(t, {
							bubbles: !0,
							composed: !0,
							detail: o
						});
						var s;
						(e.dispatchEvent(r), n) && (re.set(n, (null !== (s = re.get(n)) && void 0 !== s ? s : new Set).add(o)), function(e, t, n) {
							for (const {
									host: i,
									callback: o
								} of Array.from(null !== (r = ne.get(t)) && void 0 !== r ? r : [])) {
								var r;
								i !== e && i.contains(e) && o(e, n)
							}
						}(e, n, i))
					},
					hostDisconnected() {
						var e;
						(r.empty(), n) && (null === (e = re.get(n)) || void 0 === e || e.delete(o))
					}
				})
			}
			var se = function(e, t, n) {
				var r = null,
					i = null,
					o = function() {
						r && (clearTimeout(r), i = null, r = null)
					},
					s = function() {
						if (!t) return e.apply(this, arguments);
						var s = this,
							a = arguments,
							l = n && !r;
						return o(), i = function() {
							e.apply(s, a)
						}, r = setTimeout((function() {
							if (r = null, !l) {
								var e = i;
								return i = null, e()
							}
						}), t), l ? i() : void 0
					};
				return s.cancel = o, s.flush = function() {
					var e = i;
					o(), e && e()
				}, s
			};

			function ae() {
				let e = T,
					t = T;
				return {
					promise: new Promise((n, r) => {
						e = n, t = r
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
			const he = [];

			function ue(e) {
				let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T;
				const r = new Set;

				function i(n) {
					if (function(e, t) {
							return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
						}(e, n) && (e = n, t)) {
						const t = !he.length;
						for (const n of r) n[1](), he.push(n, e);
						if (t) {
							for (let e = 0; e < he.length; e += 2) he[e][0](he[e + 1]);
							he.length = 0
						}
					}
				}
				return {
					initialValue: e,
					set: i,
					update: function(t) {
						i(t(e))
					},
					subscribe: function(o) {
						const s = [o, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T];
						return r.add(s), 1 === r.size && (t = n(i) || T), o(e), () => {
							var e;
							(r.delete(s), 0 === r.size) && (null === (e = t) || void 0 === e || e(), t = null)
						}
					}
				}
			}

			function pe(e, t, n) {
				const r = !Array.isArray(e),
					i = r ? [e] : e,
					o = t.length < 2;
				return {
					initialValue: s = n,
					subscribe: ue(s, e => {
						let n = !1;
						const s = [];
						let a = 0,
							l = T;
						const d = () => {
								if (a) return;
								l();
								const n = t(r ? s[0] : s, e);
								o ? e(n) : l = H(n) ? n : T
							},
							c = i.map((e, t) => e.subscribe(e => {
								s[t] = e, a &= ~(1 << t), n && d()
							}, () => {
								a |= 1 << t
							}));
						return n = !0, d(),
							function() {
								c.forEach(e => e()), l()
							}
					}).subscribe
				};
				var s
			}

			function ve(e) {
				let t;
				return e.subscribe(e => t = e)(), t
			}

			function ge(e, t, n) {
				let r, i;
				const o = () => {
					var e, o, s;
					i = null === (e = null !== (o = null === (s = r) || void 0 === s ? void 0 : s.value) && void 0 !== o ? o : t) || void 0 === e ? void 0 : e.subscribe(n)
				};
				de(t) && (r = t.consume(e)), e.addController({
					hostConnected() {
						de(t) ? r.whenRegistered(o) : o()
					},
					hostDisconnected() {
						var e;
						null === (e = i) || void 0 === e || e()
					}
				})
			}

			function be(e, t, n, r) {
				if (!de(t)) return ge(e, t[n], r); {
					const i = t.consume(e);
					let o;
					const s = () => {
						o = i.value[n].subscribe(r)
					};
					e.addController({
						hostConnected: () => {
							i.whenRegistered(s)
						},
						hostDisconnected: () => {
							var e;
							null === (e = o) || void 0 === e || e()
						}
					})
				}
			}

			function me(e) {
				return new Proxy(e, {
					get: (e, t) => ve(e[t]),
					has: (e, t) => Reflect.has(e, t),
					ownKeys: e => Reflect.ownKeys(e),
					getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e, t)
				})
			}

			function fe(e) {
				const t = new le;
				return e.addController({
					hostConnected: t.start.bind(t),
					hostDisconnected: t.destroy.bind(t)
				}), t
			}
			class _e {
				constructor(e) {
					this._host = e, this._isScreenOrientationLocked = !1, this._updateScreenOrientation(), this._listenerDisposal = new G.a, e.addController({
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
					return F && !V(screen.orientation) && H(screen.orientation.lock) && H(screen.orientation.unlock)
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
					return Object(G.e)(screen.orientation, "change", this._handleOrientationChange.bind(this))
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
					this._screenOrientation = F ? null === (e = window.screen) || void 0 === e ? void 0 : null === (t = e.orientation) || void 0 === t ? void 0 : t.type : void 0
				}
				_throwIfScreenOrientationUnavailable() {
					if (!this.canOrient) throw Error("Screen orientation API is not available.")
				}
			}
			var ye = n("./node_modules/fscreen/dist/fscreen.esm.js");
			class we {
				constructor(e, t) {
					this._host = e, this._screenOrientationController = t, this._listenerDisposal = new G.a, e.addController({
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
					return ye.a.fullscreenEnabled
				}
				get isFullscreen() {
					return this.isNativeFullscreen
				}
				get isNativeFullscreen() {
					if (ye.a.fullscreenElement === this._host) return !0;
					try {
						return this._host.matches(ye.a.fullscreenPseudoClass)
					} catch (e) {
						return !1
					}
				}
				_addFullscreenChangeEventListener(e) {
					if (!this.isSupported) return T;
					const t = Object(G.e)(ye.a, "fullscreenchange", e);
					return () => {
						t()
					}
				}
				_addFullscreenErrorEventListener(e) {
					if (!this.isSupported) return T;
					const t = Object(G.e)(ye.a, "fullscreenerror", e);
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
					return ye.a.requestFullscreen(this._host)
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
					return ye.a.exitFullscreen()
				}
				_shouldOrientScreen() {
					return this._screenOrientationController.canOrient && !V(this.screenOrientationLock)
				}
				async _lockScreenOrientation() {
					!V(this.screenOrientationLock) && this._shouldOrientScreen() && await this._screenOrientationController.lock(this.screenOrientationLock)
				}
				async _unlockScreenOrientation() {
					this._shouldOrientScreen() && await this._screenOrientationController.unlock()
				}
				_throwIfNoFullscreenSupport() {
					if (!this.isSupported) throw Error("Fullscreen API is not enabled or supported in this environment.")
				}
			}
			class xe {
				constructor(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
					this._skipInitial = !1, this._unobservedUpdate = !1, this._host = e, this._callback = n;
					const {
						target: r,
						skipInitial: i,
						...o
					} = t;
					this._target = null != r ? r : void 0, this._skipInitial = null != i ? i : this._skipInitial, window.IntersectionObserver && (this._observer = new IntersectionObserver(e => {
						const t = this._unobservedUpdate;
						this._unobservedUpdate = !1, this._skipInitial && t || (this.handleChanges(e), this._host.requestUpdate())
					}, o), e.addController(this))
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

			function ke(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
				return Number(e.toFixed(t))
			}

			function Ee(e, t, n) {
				return Math.max(e, Math.min(n, t))
			}

			function Se(e) {
				var t, n;
				return null !== (t = null === (n = String(e).split(".")[1]) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0
			}
			const Ce = new Map;
			class Oe {
				constructor(e, t, n) {
					this._host = e, this.initialValue = t, this._options = n, this._registrationCallbacks = [], e.addController({
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
						const n = null !== (t = Ce.get(this.id)) && void 0 !== t ? t : [];
						n.push({
							host: this._host,
							setValue: e
						}), Ce.set(this.id, n)
					}
				}
				whenRegistered(e) {
					var t;
					this.registered ? e(this.value) : null === (t = this._registrationCallbacks) || void 0 === t || t.push(e)
				}
			}
			class Ae {
				constructor(e, t, n) {
					this._host = e, this._initValue = t, this._options = n, this._stopDisposal = new G.a, this._value = t(), e.addController({
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
					const e = Object(G.e)(this._host, "vds-context-consumer-connect", this._handleConsumerConnect.bind(this));
					for (const t of function(e, t) {
							var n;
							const r = null !== (n = Ce.get(e)) && void 0 !== n ? n : [],
								i = r.filter(e => {
									let {
										host: n
									} = e;
									return t.contains(n)
								});
							return Ce.set(e, r.filter(e => {
								let {
									host: n
								} = e;
								return !t.contains(n)
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

			function Pe(e) {
				const t = Symbol("@vidstack/context");
				return {
					id: t,
					consume: n => new Oe(n, e(), {
						id: t
					}),
					provide: n => new Ae(n, e, {
						id: t
					})
				}
			}
			var je, $e = n("./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js");

			function Me(e, t, n, r) {
				return function(e, t, n) {
					if (!D(t) || t < 0 || t > n) throw new Error(`Failed to execute '${e}' on 'TimeRanges': The index provided (${t}) is non-numeric or out of bounds (0-${n}).`)
				}(e, r, n.length - 1), n[r][t]
			}

			function Re(e) {
				if (V(e) || 0 === e.length) {
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
					start: Me.bind(null, "start", 0, e),
					end: Me.bind(null, "end", 1, e)
				}
			}

			function Te(e, t) {
				return z(e) ? Re(e) : V(e) || V(t) ? Re() : Re([
					[e, t]
				])
			}! function(e) {
				e.Unknown = "unknown", e.Audio = "audio", e.Video = "video"
			}(je || (je = {}));
			const Le = {
				autoplay: !1,
				autoplayError: void 0,
				buffered: Te(),
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
				mediaType: $e.a.Unknown,
				muted: !1,
				paused: !0,
				played: Te(),
				playing: !1,
				playsinline: !1,
				seekable: Te(),
				seekableAmount: 0,
				seeking: !1,
				src: [],
				started: !1,
				viewType: je.Unknown,
				volume: 1,
				waiting: !1
			};

			function Ve() {
				const e = {};
				for (const t of ce(Le)) e[t] = ue(Le[t]);
				return e
			}
			const qe = new Set(["autoplay", "canFullscreen", "canLoad", "controls", "currentSrc", "loop", "muted", "playsinline", "poster", "src", "viewType", "volume"]);
			const De = Pe(Ve);

			function Ie(e, t, n) {
				return be(e, De, t, n)
			}
			var He = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			const ze = Symbol("@vidstack/media-provider-discovery");
			class Fe extends r.a {
				constructor() {
					super(), this._disconnectDisposal = new G.a, this.manualPaused = !1, this.loading = "lazy", this._attemptingAutoplay = !1, this.autoplayControlledByMediaVisibility = !1, this.controllerQueue = new le, this._store = Ve(), this._state = me(this._store), this.connectedQueue = fe(this), this.mediaQueue = new le, this.screenOrientationController = new _e(this), this.fullscreenController = new we(this, this.screenOrientationController), oe(this, "vds-media-provider-connect", {
						register: ze
					});
					const e = function() {
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						return new xe(...t)
					}(this, {
						target: this,
						threshold: 0
					}, t => {
						var n;
						null !== (n = t[0]) && void 0 !== n && n.isIntersecting && "lazy" === this.loading && (this.startLoadingMedia(), e.hostDisconnected())
					})
				}
				connectedCallback() {
					super.connectedCallback(), Q(this, "paused", this.paused), window.requestAnimationFrame(() => {
						V(this.canLoadPoster) && (this.canLoadPoster = !0)
					})
				}
				firstUpdated(e) {
					super.firstUpdated(e), this.dispatchEvent(Z("vds-fullscreen-support-change", {
						detail: this.canFullscreen
					})), "eager" === this.loading && this.startLoadingMedia()
				}
				render() {
					return r.c`<slot @slotchange="${this.handleDefaultSlotChange}"></slot>`
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
							n = Ee(0, e, 1);
						t !== n && (this._setVolume(n), this.requestUpdate("volume", t))
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
					if (this.state.viewType !== je.Video) throw Error("Player is currently not in a video view.")
				}
				async _handleMediaReady(e) {
					let {
						event: t,
						duration: n
					} = e;
					this.state.canPlay || (this.dispatchEvent(Z("vds-can-play", {
						triggerEvent: t,
						detail: {
							duration: n
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
						this.controllerQueue.destroy(), this._controller = void 0, this._store = Ve(), this._state = me(this._store)
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
			He([Object(i.b)({
				type: Number,
				reflect: !0
			})], Fe.prototype, "volume", null), He([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], Fe.prototype, "paused", null), He([Object(i.b)({
				type: Boolean
			})], Fe.prototype, "manualPaused", void 0), He([Object(i.b)({
				type: Number
			})], Fe.prototype, "currentTime", null), He([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], Fe.prototype, "muted", null), He([Object(i.b)({
				reflect: !0
			})], Fe.prototype, "poster", null), He([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], Fe.prototype, "loop", null), He([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], Fe.prototype, "controls", null), He([Object(i.d)()], Fe.prototype, "canLoadPoster", void 0), He([Object(i.b)({
				attribute: "loading"
			})], Fe.prototype, "loading", void 0), He([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], Fe.prototype, "autoplay", null), He([Object(i.b)({
				attribute: "idle-delay",
				type: Number
			})], Fe.prototype, "idleDelay", null), He([Object(i.b)({
				attribute: "fullscreen-orientation"
			})], Fe.prototype, "fullscreenOrientation", null);
			var Ue = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			const Ne = new Set;
			let Be, We = !1,
				Ye = !1;
			const Qe = e => {
				const {
					muted: t,
					volume: n
				} = e.detail;
				Be = {
					muted: t,
					volume: n
				}
			};
			class Ke extends r.a {
				constructor() {
					super(), this.singlePlayback = !1, this.syncVolume = !1, this._providerDisposal = new G.a, ie(this, ze, (e, t) => {
						this._handleMediaProviderConnect(e, t)
					})
				}
				static get styles() {
					return r.b`
      :host {
        display: contents;
      }
    `
				}
				disconnectedCallback() {
					super.disconnectedCallback(), this._providerDisposal.empty()
				}
				render() {
					return r.c`<slot></slot>`
				}
				get provider() {
					return this._provider
				}
				_handleMediaProviderConnect(e, t) {
					if (this._provider = e, Ne.add(e), this.singlePlayback) {
						const t = Object(G.e)(e, "vds-play", this._handleMediaPlay.bind(this));
						this._providerDisposal.add(t)
					}
					if (this.syncVolume) {
						const t = Object(G.e)(e, "vds-volume-change", se(this._handleMediaVolumeChange.bind(this), 10, !0));
						this._providerDisposal.add(t)
					}
					window.requestAnimationFrame(() => {
						var t;
						Be && this._provider && (this._provider.volume = Be.volume, this._provider.muted = Be.muted);
						const n = Object(G.e)(e, "vds-volume-change", Qe);
						this._providerDisposal.add(n), !Be && null !== (t = this._provider) && void 0 !== t && t.autoplay && (this._provider.muted = !0)
					}), t(() => {
						Ne.delete(e), this._provider = void 0, this._providerDisposal.empty()
					})
				}
				_handleMediaPlay() {
					We || (We = !0, Ne.forEach(e => {
						e !== this._provider && (e.paused = !0)
					}), We = !1)
				}
				_handleMediaVolumeChange(e) {
					if (Ye) return;
					Ye = !0;
					const {
						volume: t,
						muted: n
					} = e.detail;
					Ne.forEach(e => {
						e !== this._provider && (e.volume = t, e.muted = n)
					}), this.dispatchEvent(Z("vds-media-volume-sync", {
						bubbles: !0,
						composed: !0,
						detail: e.detail
					})), Ye = !1
				}
			}
			Ue([Object(i.b)({
				type: Boolean,
				attribute: "single-playback"
			})], Ke.prototype, "singlePlayback", void 0), Ue([Object(i.b)({
				type: Boolean,
				attribute: "sync-volume"
			})], Ke.prototype, "syncVolume", void 0), Y("vds-media-sync", Ke);
			var Xe = n("./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js"),
				Ge = function(e, t, n, r) {
					var i, o = arguments.length,
						s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
					if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
					else
						for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
					return o > 3 && s && Object.defineProperty(t, n, s), s
				};
			class Je extends r.a {
				constructor() {
					super(), this.viewportEnterDelay = 0, this.pageChangeType = "state", this.pageEnterDelay = 0, this.intersectionThreshold = 1, this._isIntersecting = !1, this._providerDisposal = new G.a, this._hasIntersected = !1, this.intersectionController = new xe(this, {
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
							visibility: n
						} = e;
						if (window.clearTimeout(this._pageTimeout), !this.isIntersecting) return;
						"hidden" === ("state" === this.pageChangeType ? t : n) ? this._triggerOnExit(this.exitPage): this.enterViewport && (this._pageTimeout = window.setTimeout(() => {
							this._triggerOnEnter(this.enterPage), this._pageTimeout = void 0
						}, this.pageEnterDelay)), this._dispatchVisibilityChange()
					}), ie(this, ze, (e, t) => {
						this._handleMediaProviderConnect(e, t)
					})
				}
				static get styles() {
					return r.b`
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
					return r.c`<slot></slot>`
				}
				get provider() {
					return this._provider
				}
				_handleMediaProviderConnect(e, t) {
					this._provider = e;
					const n = this.intersectionController.observe(this);
					t(() => {
						n(), this._provider = void 0, this._providerDisposal.empty()
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
			Ge([Object(i.b)({
				attribute: "enter-viewport"
			})], Je.prototype, "enterViewport", void 0), Ge([Object(i.b)({
				attribute: "exit-viewport"
			})], Je.prototype, "exitViewport", void 0), Ge([Object(i.b)({
				type: Number,
				attribute: "viewport-enter-delay"
			})], Je.prototype, "viewportEnterDelay", void 0), Ge([Object(i.b)({
				attribute: "enter-page"
			})], Je.prototype, "enterPage", void 0), Ge([Object(i.b)({
				attribute: "exit-page"
			})], Je.prototype, "exitPage", void 0), Ge([Object(i.b)({
				attribute: "page-change-type"
			})], Je.prototype, "pageChangeType", void 0), Ge([Object(i.b)({
				type: Number,
				attribute: "page-enter-delay"
			})], Je.prototype, "pageEnterDelay", void 0), Ge([Object(i.b)({
				attribute: "intersection-root"
			})], Je.prototype, "intersectionRoot", void 0), Ge([Object(i.b)({
				type: Number,
				attribute: "intersection-threshold"
			})], Je.prototype, "intersectionThreshold", void 0), Y("vds-media-visibility", Je);
			var Ze = n("./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js"),
				et = function(e, t, n) {
					var r = null,
						i = null,
						o = n && n.leading,
						s = n && n.trailing;
					null == o && (o = !0);
					null == s && (s = !o);
					1 == o && (s = !1);
					var a = function() {
							r && (clearTimeout(r), r = null)
						},
						l = function() {
							var n = o && !r,
								a = this,
								l = arguments;
							if (i = function() {
									return e.apply(a, l)
								}, r || (r = setTimeout((function() {
									if (r = null, s) return i()
								}), t)), n) return n = !1, i()
						};
					return l.cancel = a, l.flush = function() {
						var e = i;
						a(), e && e()
					}, l
				};
			var tt = n("./node_modules/hls.js/dist/hls.js"),
				nt = n.n(tt);
			const rt = Pe(() => ue(void 0));
			class it {
				constructor(e, t) {
					this._host = e, this._mediaStore = t, this._idle = !1, this._mediaPaused = !1, this._idlingPaused = !1, this._isMouseOver = !1, this._disposal = new G.a, this.delay = 1500, e.addController(this)
				}
				get paused() {
					return this._idlingPaused || this._mediaPaused
				}
				set paused(e) {
					this._idlingPaused = e, this._handleIdleChange()
				}
				hostConnected() {
					this._disposal.add(this._mediaStore.paused.subscribe(e => {
						this._mediaPaused = e, this._handleIdleChange()
					}));
					["pointerdown", "pointermove", "focus", "keydown"].forEach(e => {
						const t = Object(G.e)(this._host, e, se(this._handleIdleChange.bind(this), 250, !0));
						this._disposal.add(t)
					});
					const e = Object(G.e)(this._host, "mouseenter", () => {
						this._isMouseOver = !0
					});
					this._disposal.add(e);
					const t = Object(G.e)(this._host, "mouseleave", () => {
						this._isMouseOver = !1
					});
					this._disposal.add(t)
				}
				hostDisconnected() {
					this._disposal.empty(), this._stopIdleTimer()
				}
				_handleIdleChange() {
					this.paused ? this._stopIdleTimer() : this._startIdleTimer(this._isMouseOver ? this.delay : 0)
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
			class ot {
				constructor(e) {
					this._host = e, this._disconnectDisposal = new G.a, this.providerQueue = new le, this.providerDisposal = new G.a, this._providerContext = rt.provide(this._host), this._mediaStoreProvider = De.provide(this._host), this.state = me(this._store), this._userIdleController = new it(this._host, this._store), this._handleIdleChange = Object(Ze.a)(this._host, "vds-user-idle-change", e => {
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
						var n, r;
						"media" === (null !== (t = e.detail) && void 0 !== t ? t : "media") && this._host.canFullscreen ? (this._pendingMediaRequests.fullscreen.push(e), await (null === (n = (r = this._host).enterFullscreen) || void 0 === n ? void 0 : n.call(r))) : this.provider && (this._pendingMediaRequests.fullscreen.push(e), await this.provider.enterFullscreen())
					})), this._handleExitFullscreenRequest = Object(Ze.a)(this._host, "vds-exit-fullscreen-request", this._createMediaRequestHandler("fullscreen", async e => {
						var t;
						if (!this.state.fullscreen) return;
						var n, r;
						"media" === (null !== (t = e.detail) && void 0 !== t ? t : "media") && this._host.canFullscreen ? (this._pendingMediaRequests.fullscreen.push(e), await (null === (n = (r = this._host).exitFullscreen) || void 0 === n ? void 0 : n.call(r))) : this.provider && (this._pendingMediaRequests.fullscreen.push(e), await this.provider.exitFullscreen())
					})), this._handleResumeIdlingRequest = Object(Ze.a)(this._host, "vds-resume-user-idle-request", e => {
						this._mediaRequestEventGateway(e) && (this._pendingMediaRequests.userIdle.push(e), this._userIdleController.paused = !1)
					}), this._handlePauseIdlingRequest = Object(Ze.a)(this._host, "vds-pause-user-idle-request", e => {
						this._mediaRequestEventGateway(e) && (this._pendingMediaRequests.userIdle.push(e), this._userIdleController.paused = !0)
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
									const n = async () => {
										var e;
										t.loadingUserLevel = !1, this._store.waiting.set(!1), this._store.playing.set(!0), null === (e = t.hlsEngine) || void 0 === e || e.off(nt.a.Events.BUFFER_EOS, n)
									};
									t.hlsEngine.on(nt.a.Events.BUFFER_EOS, n)
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
					}), this._fireWaiting = se(() => {
						var e;
						if (!this._originalWaitingEvent) return;
						this._firingWaiting = !0;
						const t = Z("vds-waiting", this._originalWaitingEvent);
						this._mediaEvents.push(t), this._store.waiting.set(!0), this._store.playing.set(!1), null === (e = this._provider) || void 0 === e || e.dispatchEvent(t), this._originalWaitingEvent = void 0, this._firingWaiting = !1
					}, 300), this._skipInitialSrcChange = !0, ie(e, ze, (e, t) => {
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
					q(this.provider) && this.provider !== e && (this._handleMediaProviderDisconnect(), this._provider = e, this._providerContext.value.set(e), function(e, t) {
						for (const n of ce(e)) {
							const r = e[n],
								i = t[n];
							if (!r || !i) continue;
							const o = ve(r);
							o !== ve(i) && i.set(o)
						}
					}(this._provider._store, this._store), this._attachMediaEventListeners(), e.attachMediaController(this, e => this._disconnectDisposal.add(e)), this._flushMediaProviderConnectedQueue(), t(this._handleMediaProviderDisconnect.bind(this)))
				}
				_handleMediaProviderDisconnect() {
					q(this.provider) || (this.providerQueue.destroy(), this.providerDisposal.empty(), this._provider = void 0, this._providerContext.value.set(void 0), function(e) {
						for (const t of ce(Le)) e[t].set(Le[t])
					}(this._store), this._store.viewType.set(je.Unknown))
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
					return this._userIdleController.delay
				}
				set idleDelay(e) {
					this._userIdleController.delay = e
				}
				_clearPendingMediaRequests() {
					ce(this._pendingMediaRequests).forEach(e => {
						this._pendingMediaRequests[e] = []
					})
				}
				_satisfyMediaRequest(e, t) {
					const n = this._pendingMediaRequests[e].shift();
					n && (t.requestEvent = n, te(t, n))
				}
				_mediaRequestEventGateway(e) {
					return e.stopPropagation(), !0
				}
				_createMediaRequestHandler(e, t) {
					return n => {
						this._mediaRequestEventGateway(n) && (this._provider ? t(n) : this.providerQueue.queue(e, () => {
							t(n)
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
						const n = e[t].bind(this);
						this.providerDisposal.add(Object(G.e)(this._provider, t, n))
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
					this._mediaEvents.push(e), te(e, this._findLastMediaEvent("vds-load-start"))
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
							const n = Z("vds-replay", {
								triggerEvent: e
							});
							null === (t = this._provider) || void 0 === t || t.dispatchEvent(n)
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
					var n;
					this.state.started || (this._store.started.set(!0), null === (n = this._provider) || void 0 === n || n.dispatchEvent(Z("vds-started", {
						triggerEvent: e
					})))
				}
				_handlePause(e) {
					this._isLooping ? e.stopImmediatePropagation() : (te(e, this._findLastMediaEvent("vds-seeked")), this._satisfyMediaRequest("pause", e), this._store.paused.set(!0), this._store.playing.set(!1), this._store.seeking.set(!1), this._stopWaiting(), this._clearMediaStateTracking())
				}
				_handleTimeUpdate(e) {
					const {
						currentTime: t,
						played: n
					} = e.detail;
					this._store.currentTime.set(t), this._store.played.set(n), this.provider.loadingUserLevel || this._store.waiting.set(!1)
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
						qe.has(e) || t[e].set(t[e].initialValue)
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
						seekable: n
					} = e.detail, r = 0 === t.length ? 0 : t.end(t.length - 1), i = 0 === n.length ? 0 : n.end(n.length - 1);
					this._store.buffered.set(t), this._store.bufferedAmount.set(r), this._store.seekable.set(n), this._store.seekableAmount.set(i)
				}
				_handleSrcChange(e) {
					this._store.src.set(e.detail)
				}
				_handleViewTypeChange(e) {
					this._store.viewType.set(e.detail)
				}
			}
			class st {
				constructor(e, t, n) {
					this._host = e, this._store = t, this._mediaProps = n, this._disposal = new G.a, this._host.addController({
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
								const n = this._getMediaAttrName(e),
									r = t.subscribe(t => {
										window.requestAnimationFrame(() => {
											this._handleValueChange(e, n, t)
										})
									});
								this._disposal.add(r)
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
			class at extends st {
				_handleValueChange(e, t, n) {
					window.requestAnimationFrame(() => {
						Q(this._host, t, I(n) || D(n) ? String(n) : !!n)
					})
				}
				_handleDisconnect(e, t) {
					this._host.removeAttribute(t)
				}
			}
			class lt extends st {
				_handleValueChange(e, t, n) {
					window.requestAnimationFrame(() => {
						this._host.style.setProperty(this._getCssPropName(t), I(n) || D(n) ? String(n) : null)
					})
				}
				_getCssPropName(e) {
					return `--vds-${e}`
				}
				_handleDisconnect(e, t) {
					this._host.style.setProperty(this._getCssPropName(t), null)
				}
			}
			var dt = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			const ct = Symbol("@vidstack/media-discovery");
			class ht extends r.a {
				constructor() {
					super(), this.controller = new ot(this), this.__mediaFullscreen = !1, this.__mediaIsVideoView = !1, this.__mediaPlaysinline = !1, this.screenOrientationController = new _e(this), this.fullscreenController = new we(this, this.screenOrientationController), oe(this, "vds-media-connect", {
						register: ct
					}), Ie(this, "fullscreen", e => {
						this.__mediaFullscreen = e
					}), Ie(this, "viewType", e => {
						this.__mediaIsVideoView = e === je.Video
					}), Ie(this, "playsinline", e => {
						this.__mediaPlaysinline = e
					}), this._bindMediaAttributes(), this._bindMediaCSSProperties()
				}
				static get styles() {
					return [r.b`
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
					Q(this, "hide-ui", this._shouldHideMediaUI()), super.update(e)
				}
				render() {
					return r.c`<slot></slot>`
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
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						new at(...t)
					}(this, this.controller.store, ["autoplay", "autoplayError", "canLoad", "canPlay", "canFullscreen", "ended", "error", "fullscreen", "userIdle", "loop", "mediaType", "muted", "paused", "playing", "playsinline", "seeking", "started", "viewType", "waiting"])
				}
				_bindMediaCSSProperties() {
					! function() {
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						new lt(...t)
					}(this, this.controller.store, ["bufferedAmount", "currentTime", "duration", "seekableAmount"])
				}
				_shouldHideMediaUI() {
					return N && this.__mediaIsVideoView && (!this.__mediaPlaysinline || this.__mediaFullscreen)
				}
			}
			dt([Object(i.d)()], ht.prototype, "__mediaFullscreen", void 0), dt([Object(i.d)()], ht.prototype, "__mediaIsVideoView", void 0), dt([Object(i.d)()], ht.prototype, "__mediaPlaysinline", void 0), dt([Object(i.b)({
				attribute: "fullscreen-orientation"
			})], ht.prototype, "fullscreenOrientation", null), Y("vds-media", ht);
			var ut = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			const pt = new Map;
			class vt extends r.a {
				constructor() {
					super(), this._disposal = new G.a, this.repeat = 0, this.priority = 10, this._mediaCurrentTime = 0, this._currentToggleState = !1, this._mediaStoreConsumer = De.consume(this), ge(this, rt, e => {
						this._mediaProviderElement = e
					})
				}
				static get styles() {
					return [r.b`
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
					let t, n = this.action;
					this.action.startsWith("toggle:") && (n = this._getToggleEventType()), this.action.startsWith("seek:") && (n = "seek", t = this._mediaCurrentTime + Number(this.action.split(":")[1])), this.dispatchEvent(Z(`vds-${n}-request`, {
						bubbles: !0,
						composed: !0,
						detail: t,
						triggerEvent: e
					}))
				}
				_attachListener() {
					var e = this;
					if (this._disposal.empty(), !this._mediaProviderElement || !this.type || !this.action) return;
					let t, n = 0;
					const r = Object(G.e)(this._mediaProviderElement, this.type, r => {
						if (this._validateEvent(r)) {
							var i;
							if (r.preventDefault(), 0 == n) null === (i = this._pendingActions) || void 0 === i || i.set(this, [r, ae()]);
							! function() {
								let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								n += 1, window.clearTimeout(t), t = window.setTimeout(() => {
									var t;
									const i = null === (t = e._pendingAction) || void 0 === t ? void 0 : t[1];
									var o;
									r && (null === (o = e._pendingActions) || void 0 === o || o.delete(e));
									bt(e._mediaProviderElement), n = 0, null == i || i.resolve()
								}, 250)
							}(n < this.repeat)
						}
					});
					this._disposal.add(r)
				}
				_validateEvent(e) {
					if (Object(G.c)(e) || Object(G.b)(e) || Object(G.d)(e)) {
						var t, n;
						const r = Object(G.d)(e) ? e.touches[0] : void 0,
							i = null !== (t = null == r ? void 0 : r.clientX) && void 0 !== t ? t : e.clientX,
							o = null !== (n = null == r ? void 0 : r.clientY) && void 0 !== n ? n : e.clientY,
							s = this.getBoundingClientRect(),
							a = o >= s.top && o <= s.bottom && i >= s.left && i <= s.right;
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
					const n = this.action.split(":")[1],
						r = null === (t = this._mediaStore[n]) || void 0 === t ? void 0 : t.subscribe(e => {
							this._currentToggleState = !!e
						});
					r && this._disposal.add(r)
				}
			}
			ut([Object(i.b)()], vt.prototype, "type", void 0), ut([Object(i.b)({
				type: Number
			})], vt.prototype, "repeat", void 0), ut([Object(i.b)({
				type: Number
			})], vt.prototype, "priority", void 0), ut([Object(i.b)()], vt.prototype, "action", void 0);
			const gt = new WeakSet;
			async function bt(e) {
				if (gt.has(e)) return;
				const t = pt.get(e);
				if (!t) return;
				gt.add(e);
				const n = Array.from(t.values()).map(e => e[1].promise);
				await Promise.all(n);
				const r = Array.from(t.keys()),
					i = Math.min(...r.map(e => e.priority));
				r.filter(e => e.priority <= i).map(e => {
					const n = t.get(e)[0];
					e.performAction(n)
				}), t.clear(), gt.delete(e)
			}
			Y("vds-gesture", vt);
			class mt {
				static async load(e) {
					return new Promise((t, n) => {
						this.pendingRequests[e] ? this.pendingRequests[e].push({
							resolve: t,
							reject: n
						}) : (this.pendingRequests[e] = [{
							resolve: t,
							reject: n
						}], async function(e) {
							if (!L(document.querySelector(`script[src="${e}"]`))) return;
							const t = document.createElement("script"),
								n = ae();
							t.src = e, t.onload = n.resolve, t.onerror = n.reject;
							const r = document.getElementsByTagName("script")[0];
							return q(r.parentNode) || r.parentNode.insertBefore(t, r), n.promise
						}(e).then(() => {
							this.pendingRequests[e].forEach(e => e.resolve()), delete this.pendingRequests[e]
						}).catch(t => {
							this.pendingRequests[e].forEach(e => e.reject(t)), delete this.pendingRequests[e]
						}))
					})
				}
			}
			var ft;
			mt.pendingRequests = {},
				function(e) {
					e[e.Aborted = 1] = "Aborted", e[e.Network = 2] = "Network", e[e.Decode = 3] = "Decode", e[e.SrcNotSupported = 4] = "SrcNotSupported"
				}(ft || (ft = {}));
			const _t = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
				yt = /\.(mp4|og[gv]|webm|mov|m4v|avi)($|\?)/i;
			class wt extends Fe {
				constructor() {
					super(...arguments), this.preload = "metadata", this._timeRAF = void 0, this._hasMediaElementConnected = !1, this._mediaElementDisposal = new G.a, this._isMediaWaiting = !1, this._ignoreNextAbortEvent = !1, this._ignoreNextEmptiedEvent = !1
				}
				get mediaElement() {
					return this._mediaElement
				}
				disconnectedCallback() {
					this._isMediaWaiting = !1, super.disconnectedCallback(), this._cancelTimeUpdates()
				}
				_cancelTimeUpdates() {
					D(this._timeRAF) && window.cancelAnimationFrame(this._timeRAF), this._timeRAF = void 0
				}
				_requestTimeUpdates() {
					V(this._timeRAF) && this._requestTimeUpdate()
				}
				_requestTimeUpdate() {
					var e, t;
					const n = null !== (e = null === (t = this.mediaElement) || void 0 === t ? void 0 : t.currentTime) && void 0 !== e ? e : 0;
					this.state.currentTime !== n && this._updateCurrentTime(n), this._timeRAF = window.requestAnimationFrame(() => {
						V(this._timeRAF) || this._requestTimeUpdate()
					})
				}
				_updateCurrentTime(e, t) {
					var n, r;
					this.dispatchEvent(Z("vds-time-update", {
						detail: {
							currentTime: Math.min(e, null !== (n = null === (r = this.mediaElement) || void 0 === r ? void 0 : r.duration) && void 0 !== n ? n : 0),
							played: this.mediaElement.played
						},
						triggerEvent: t
					}))
				}
				handleDefaultSlotChange() {
					window.requestAnimationFrame(() => {
						const e = function(e, t) {
							var n, r;
							const i = t ? `slot[name="${t}"]` : "slot:not([name])",
								o = null === (n = e.shadowRoot) || void 0 === n ? void 0 : n.querySelector(i),
								s = null !== (r = null == o ? void 0 : o.assignedNodes({
									flatten: !0
								})) && void 0 !== r ? r : [];
							return Array.prototype.filter.call(s, e => e.nodeType == Node.ELEMENT_NODE)
						}(this)[0];
						this._handleMediaElementDisconnect(), this._mediaElement = null != e ? e : void 0, this._handleMediaElementConnect()
					})
				}
				get _canMediaElementConnect() {
					return this.canLoad && !q(this.mediaElement) && !this._hasMediaElementConnected
				}
				_handleMediaElementConnect() {
					if (!this._canMediaElementConnect) return;
					this.dispatchEvent(Z("vds-media-element-connected"));
					const e = this.mediaElement;
					e.hasAttribute("loop") && (this.loop = !0), e.removeAttribute("loop"), e.removeAttribute("poster"), Q(e, "controls", this.controls), this._attachMediaEventListeners(), this._observePlaysinline(), this._observeMediaSources(), this.canLoadPoster && this.poster.length > 0 && e.setAttribute("poster", this.poster), this._startPreloadingMedia(), this._hasMediaElementConnected = !0, this._disconnectDisposal.add(this._handleMediaElementDisconnect.bind(this))
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
					var e, t, n;
					const r = [null === (e = this.mediaElement) || void 0 === e ? void 0 : e.src, ...Array.from(null !== (t = null === (n = this.mediaElement) || void 0 === n ? void 0 : n.querySelectorAll("source")) && void 0 !== t ? t : []).map(e => e.src)].filter(Boolean);
					return Array.from(new Set(r))
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
					if (q(this.mediaElement)) return;
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
						const n = e[t].bind(this),
							r = Object(G.e)(this.mediaElement, t, async e => {
								await n(e)
							});
						this._mediaElementDisposal.add(r)
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
					const n = this.mediaElement.currentTime;
					if (Math.trunc(n) === Math.trunc(this.mediaElement.duration) && Se(this.mediaElement.duration) > Se(n) && (this._updateCurrentTime(this.mediaElement.duration, e), !this.mediaElement.ended)) try {
						this.play()
					} catch (r) {}
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
					V(this.mediaElement.controls) && (this.mediaElement.controls = !1), this.dispatchEvent(Z("vds-loop-request", {
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
					return e = this.state.currentSrc, _t.test(e) ? $e.a.Audio : yt.test(e) ? $e.a.Video : $e.a.Unknown;
					var e
				}
			}(function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				o > 3 && s && Object.defineProperty(t, n, s)
			})([Object(i.b)({
				reflect: !0
			})], wt.prototype, "preload", void 0);
			class xt extends we {
				constructor(e, t, n) {
					super(e, t), this._presentationController = n
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
					return this.isSupportedNatively ? super._addFullscreenChangeEventListener(e) : this.isSupportedOnSafari ? Object(G.e)(this._host, "vds-video-presentation-change", this._handlePresentationModeChange.bind(this)) : T
				}
				_handlePresentationModeChange(e) {
					this._handleFullscreenChange(e)
				}
				_addFullscreenErrorEventListener(e) {
					return this.isSupportedNatively ? super._addFullscreenErrorEventListener(e) : T
				}
			}

			function kt(e, t) {
				var n;
				if (t.bubbles && t.composed) return;
				const r = new J(t.type, {
					triggerEvent: null !== (n = t.triggerEvent) && void 0 !== n ? n : t,
					detail: t.detail,
					bubbles: t.bubbles,
					cancelable: t.cancelable,
					composed: t.composed
				});
				e.dispatchEvent(r)
			}
			class Et {
				constructor(e) {
					this._host = e, this._listenerDisposal = new G.a;
					const t = e.firstUpdated;
					e.firstUpdated = n => {
						null == t || t.call(e, n), this._listenerDisposal.add(Object(G.e)(e, "vds-media-element-connected", () => {
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
					return H(null === (e = this._host.videoElement) || void 0 === e ? void 0 : e.webkitSetPresentationMode)
				}
				setPresentationMode(e) {
					var t, n;
					null === (t = this._host.videoElement) || void 0 === t || null === (n = t.webkitSetPresentationMode) || void 0 === n || n.call(t, e)
				}
				_addPresentationModeChangeEventListener() {
					return !this.isSupported || q(this._host.videoElement) ? T : Object(G.e)(this._host.videoElement, "webkitpresentationmodechanged", this._handlePresentationModeChange.bind(this))
				}
				_handlePresentationModeChange(e) {
					kt(this._host, e), this._host.dispatchEvent(Z("vds-video-presentation-change", {
						detail: this.presentationMode,
						triggerEvent: e
					}))
				}
			}
			class St extends wt {
				constructor() {
					super(...arguments), this.presentationController = new Et(this), this.fullscreenController = new xt(this, this.screenOrientationController, this.presentationController)
				}
				static get styles() {
					return [r.b`
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
						detail: je.Video
					}))
				}
				get videoElement() {
					return this.mediaElement
				}
			}
			const Ct = new Map;

			function Ot(e) {
				return function(e) {
					return e.replace(/-./g, e => e[1].toUpperCase())
				}(e.replace("vds-", ""))
			}
			const At = "vds-hls-",
				Pt = ["lib-load", "instance", "unsupported"];

			function jt(e) {
				return e.startsWith(At) && !Pt.some(t => e.startsWith(`${At}${t}`))
			}
			var $t = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			const Mt = /\.(m3u8)($|\?)/i,
				Rt = (new Set(["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"]), "https://cdn.jsdelivr.net/npm/hls.js@^1.0.0/dist/hls.light.min.js");
			class Tt extends St {
				constructor() {
					super(), this._isHlsEngineAttached = !1, this.hlsConfig = {}, this._loadingUserLevel = !1, this.hlsLibrary = Rt, this._currentHlsSrc = "", this._hlsEventListeners = [], Object.defineProperty(this, "hls-config", {
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
					super.update(e), e.has("hlsLibrary") && W() && this._preconnectToHlsLibDownload()
				}
				disconnectedCallback() {
					this._destroyHlsEngine(), super.disconnectedCallback()
				}
				get isHlsSupported() {
					var e, t;
					return null !== (e = null === (t = this.Hls) || void 0 === t ? void 0 : t.isSupported()) && void 0 !== e ? e : W()
				}
				get isHlsStream() {
					return this.state.src.some(e => Mt.test(e))
				}
				_preconnectToHlsLibDownload() {
					var e;
					this.canLoad || !I(this.hlsLibrary) || (e = this.hlsLibrary, Ct.has(e)) || function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "preconnect";
						if (!(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : F)) return !1;
						if (!L(document.querySelector(`link[href="${e}"]`))) return !0;
						const n = document.createElement("link");
						n.rel = t, n.href = e, n.crossOrigin = "true", document.head.append(n)
					}(this.hlsLibrary)
				}
				async _buildHlsEngine() {
					var e, t;
					let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					if (q(this.videoElement) && !n && !V(this.hlsEngine)) return;
					V(this.hlsEngine) || this._destroyHlsEngine();
					const r = {
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
									code: ft.SrcNotSupported
								}
							}))
						}
					};
					if (this._Hls = await async function(e) {
							var t;
							let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							if (I(e)) {
								if (Ct.has(e)) return Ct.get(e);
								null === (t = n.onLoadStart) || void 0 === t || t.call(n);
								try {
									var r;
									if (await mt.load(e), !H(window.Hls)) throw Error("[vds]: Failed loading `hls.js`. Could not find a valid constructor at `window.Hls`.");
									const t = window.Hls;
									return null === (r = n.onLoaded) || void 0 === r || r.call(n, t), Ct.set(e, t), t
								} catch (o) {
									var i;
									null === (i = n.onLoadError) || void 0 === i || i.call(n, o)
								}
							}
						}(this.hlsLibrary, r), V(this._Hls) && !I(this.hlsLibrary) && (this._Hls = await async function(e) {
							var t;
							let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							if (V(e)) return;
							var r;
							if (null === (t = n.onLoadStart) || void 0 === t || t.call(n), !H(e)) return null === (r = n.onLoaded) || void 0 === r || r.call(n, e), e;
							const i = String(e);
							if (Ct.has(i)) {
								var o;
								const e = Ct.get(i);
								return null === (o = n.onLoaded) || void 0 === o || o.call(n, e), e
							}
							try {
								var s;
								const t = null === (s = await e()) || void 0 === s ? void 0 : s.default;
								if (!t || !t.isSupported) throw Error("[vds]: Failed importing `hls.js`. Dynamic import returned invalid constructor.");
								var a;
								return null === (a = n.onLoaded) || void 0 === a || a.call(n, t), Ct.set(i, t), t
							} catch (d) {
								var l;
								null === (l = n.onLoadError) || void 0 === l || l.call(n, d)
							}
						}(this.hlsLibrary, r)), this.Hls) {
						if (null === (e = this.Hls) || void 0 === e || null === (t = e.isSupported) || void 0 === t || !t.call(e)) {
							const e = "[vds]: `hls.js` is not supported in this environment";
							return this.dispatchEvent(Z("vds-hls-unsupported")), void this.dispatchEvent(Z("vds-error", {
								detail: {
									message: e,
									code: ft.SrcNotSupported
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
					this.isHlsEngineAttached || V(this.hlsEngine) || q(this.videoElement) || (this.hlsEngine.attachMedia(this.videoElement), this._isHlsEngineAttached = !0)
				}
				_detachHlsEngine() {
					var e;
					this.isHlsEngineAttached && (null === (e = this.hlsEngine) || void 0 === e || e.detachMedia(), this._isHlsEngineAttached = !1, this._currentHlsSrc = "")
				}
				_loadSrcOnHlsEngine(e) {
					!q(this.hlsEngine) && this.isHlsStream && e !== this._currentHlsSrc && (this.hlsEngine.loadSource(e), this._currentHlsSrc = e)
				}
				_getMediaType() {
					return this.state.mediaType === $e.a.LiveVideo ? $e.a.LiveVideo : this.isHlsStream ? $e.a.Video : super._getMediaType()
				}
				_handleSrcChange(e) {
					this._currentHlsSrc.length > 0 && !e.includes(this._currentHlsSrc) && e.push(this._currentHlsSrc), super._handleSrcChange(e)
				}
				_handleAbort(e) {
					if (this.isHlsSupported)
						for (const t of this.state.src)
							if (Mt.test(t)) return void this._handleHlsSrcChange(t);
					super._handleAbort(e)
				}
				async _handleHlsSrcChange(e) {
					this._currentHlsSrc !== e && this.hasUpdated && this.canLoad && (this.isHlsStream ? q(this.hlsLibrary) || (V(this.hlsEngine) && await this._buildHlsEngine(), this._attachHlsEngine(), this._loadSrcOnHlsEngine(e)) : this._detachHlsEngine())
				}
				_handleLoadedMetadata(e) {
					super._handleLoadedMetadata(e), this._handleMediaReady({
						event: e,
						duration: this.mediaElement.duration
					})
				}
				_listenToHlsEngine() {
					V(this.hlsEngine) || V(this.Hls) || (this.hlsEngine.on(this.Hls.Events.LEVEL_LOADED, this._handleHlsLevelLoaded.bind(this)), this._hlsEventListeners.forEach(e => {
						var t;
						let {
							type: n,
							listener: r,
							options: i
						} = e;
						null === (t = this.hlsEngine) || void 0 === t || t[null != i && i.once ? "once" : "on"](n, r, null == i ? void 0 : i.context)
					}), this.hlsEngine.on(this.Hls.Events.ERROR, this._handleHlsError.bind(this)))
				}
				_handleHlsError(e, t) {
					if (!V(this.Hls))
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
							var n;
							null === (n = this.hlsEngine) || void 0 === n || n.startLoad()
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
						live: n,
						totalduration: r
					} = t.details, i = new J(e, {
						detail: t
					}), o = n ? $e.a.LiveVideo : $e.a.Video;
					this.state.mediaType !== o && this.dispatchEvent(Z("vds-media-type-change", {
						detail: o,
						triggerEvent: i
					})), this.state.duration !== r && this.dispatchEvent(Z("vds-duration-change", {
						detail: r,
						triggerEvent: i
					}))
				}
				addEventListener(e, t, n) {
					if (!jt(e)) return super.addEventListener(e, t, n); {
						const i = Ot(e);
						var r;
						this._hlsEventListeners.some(e => e.type === i && e.listener === t) || (this._hlsEventListeners.push({
							type: i,
							listener: t,
							options: n
						}), null === (r = this.hlsEngine) || void 0 === r || r[null != n && n.once ? "once" : "on"](i, t, null == n ? void 0 : n.context))
					}
				}
				removeEventListener(e, t, n) {
					if (jt(e)) {
						var r;
						const i = Ot(e);
						return this._hlsEventListeners = this._hlsEventListeners.filter(e => e.type === i && e.listener === t), void(null === (r = this.hlsEngine) || void 0 === r || r.off(i, t, null == n ? void 0 : n.context, null == n ? void 0 : n.once))
					}
					return super.removeEventListener(e, t, n)
				}
			}
			$t([Object(i.b)({
				type: Object,
				attribute: "hls-config"
			})], Tt.prototype, "hlsConfig", void 0), $t([Object(i.b)({
				type: Boolean,
				attribute: !1
			})], Tt.prototype, "_loadingUserLevel", void 0), Y("vds-hls", Tt);
			class Lt {
				constructor(e) {
					this._host = e, this._connectedQueue = fe(this._host)
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
						const n = Z(e, {
							...t,
							bubbles: !0,
							composed: !0
						});
						this._host.dispatchEvent(n)
					})
				}
			}
			class Vt {
				constructor(e) {
					this._host = e;
					const t = new G.a;
					let n = !1;
					t.add(Object(G.e)(document, "pointerdown", () => {
						n = !1
					})), Object(Ze.a)(e, "keydown", e => {
						e.metaKey || e.altKey || e.ctrlKey || (n = !0)
					}), Object(Ze.a)(e, "focus", () => {
						n && e.classList.add("focus-visible")
					}), Object(Ze.a)(e, "blur", () => {
						e.classList.remove("focus-visible")
					}), e.addController({
						hostDisconnected: () => {
							t.empty()
						}
					})
				}
			}

			function qt(e) {
				return new Vt(e)
			}

			function Dt(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.type.startsWith("key")) && void 0 !== t && t
			}
			const It = r.b`
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
			var Ht = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			class zt extends r.a {
				constructor() {
					super(), this.pressed = !1, this.disabled = !1, this._handleButtonClickCapture = Object(Ze.a)(this, "click", e => {
						this.disabled && (e.preventDefault(), e.stopImmediatePropagation())
					}, {
						capture: !0
					}), qt(this), ["pointerup", "keydown"].forEach(e => {
						Object(Ze.a)(this, e, e => {
							this.disabled || Dt(e) && ! function(e) {
								return Dt(e) && ("Enter" === e.key || " " === e.key)
							}(e) || this._handleButtonClick(e)
						})
					})
				}
				static get styles() {
					return [It]
				}
				static get parts() {
					return []
				}
				connectedCallback() {
					super.connectedCallback(), K(this, "tabindex", "0"), K(this, "role", "button"), this._updateAriaPressedAttr()
				}
				updated(e) {
					e.has("pressed") && this._updateAriaPressedAttr()
				}
				_updateAriaPressedAttr() {
					Q(this, "aria-pressed", this.pressed ? "true" : "false")
				}
				render() {
					return this._renderDefaultSlot()
				}
				_renderDefaultSlot() {
					return r.c`<slot></slot>`
				}
				_handleButtonClick(e) {
					this.pressed = !this.pressed
				}
			}
			Ht([Object(i.b)({
				type: Boolean
			})], zt.prototype, "pressed", void 0), Ht([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], zt.prototype, "disabled", void 0);
			class Ft extends zt {
				constructor() {
					super(), this._mediaRemote = new Lt(this), Ie(this, "fullscreen", e => {
						this.pressed = e, Q(this, "fullscreen", e)
					}), Ie(this, "canFullscreen", e => {
						Q(this, "hidden", !e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), K(this, "aria-label", "Fullscreen")
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.exitFullscreen(this.fullscreenTarget, e) : this._mediaRemote.enterFullscreen(this.fullscreenTarget, e))
				}
			}(function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				o > 3 && s && Object.defineProperty(t, n, s)
			})([Object(i.b)({
				attribute: "fullscreen-target"
			})], Ft.prototype, "fullscreenTarget", void 0), Y("vds-fullscreen-button", Ft);
			class Ut extends zt {
				constructor() {
					super(), this._mediaRemote = new Lt(this), this._volume = 1, this._muted = !1, this.disabled = !1, Ie(this, "volume", e => {
						this._volume = e, this._handleMutedChange()
					}), Ie(this, "muted", e => {
						this._muted = e, this._handleMutedChange()
					})
				}
				connectedCallback() {
					super.connectedCallback(), K(this, "aria-label", "Mute")
				}
				_handleMutedChange() {
					const e = this._muted || 0 === this._volume;
					this.pressed = e, Q(this, "muted", e)
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.unmute(e) : this._mediaRemote.mute(e))
				}
			}(function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				o > 3 && s && Object.defineProperty(t, n, s)
			})([Object(i.b)({
				type: Boolean,
				reflect: !0
			})], Ut.prototype, "disabled", void 0), Y("vds-mute-button", Ut);
			Y("vds-play-button", class extends zt {
				constructor() {
					super(), this._mediaRemote = new Lt(this), Ie(this, "paused", e => {
						this.pressed = !e, Q(this, "paused", e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), K(this, "aria-label", "Play")
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.pause(e) : this._mediaRemote.play(e))
				}
			});
			const Nt = (e, t, n) => {
					let r = e[0];
					for (let i = 1; i < e.length; i++) r += t[n ? n[i - 1] : i - 1], r += e[i];
					return r
				},
				Bt = e => (e => "string" != typeof e && "strTag" in e)(e) ? Nt(e.strings, e.values) : e;
			class Wt {
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
			const Yt = [];
			for (let Fn = 0; Fn < 256; Fn++) Yt[Fn] = (Fn >> 4 & 15).toString(16) + (15 & Fn).toString(16);
			new WeakMap, new Map;
			let Qt = new Wt;
			Qt.resolve();
			let Kt = Bt;
			var Xt = k(n("./node_modules/@reddit/shreddit.styles/dist/tailwind-build.css").a);
			const Gt = r.b`
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
			var Jt = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			const Zt = [1080, 720, 540, 480, 360, 240];
			class en extends r.a {
				constructor() {
					super(...arguments), this.showAutoplayToggle = !1, this.showOptions = !1, this.selectedLevel = -1
				}
				static get styles() {
					return [Xt, Gt]
				}
				connectedCallback() {
					super.connectedCallback(), K(this, "aria-label", "Quality level")
				}
				levelsToDisplay() {
					const {
						levels: e = []
					} = this.hlsEngine || {}, t = e.map((e, t) => ({
						...e,
						levelIndex: t
					})).sort((e, t) => t.height - e.height);
					return Zt.map((e, n) => {
						const r = t.filter(t => t.height >= e && (0 === n || t.height < Zt[n - 1])),
							i = r[r.length - 1];
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
					return r.c`
      <span class="pr-2xs"> ${e?r.c`<icon-checkmark></icon-checkmark>`:""} </span>
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
						n = -1 === this.selectedLevel;
					return r.c`
      <icon-settings
        @click="${this.toggleOptions}"
        fill
        class="control flex items-center justify-center text-18 cursor-pointer ease duration-150 scale-100"
      ></icon-settings>
      <div
        class="popup-element flex flex-col border-r-md z-10 absolute left-1/2 -translate-x-1/2 ${this.showOptions?"opacity-100":"opacity-0 pointer-events-none"}"
      >
        ${this.showAutoplayToggle?r.c`
              <button
                class="px-sm py-xs flex justify-center border-none cursor-pointer ${t?"active":""}"
                @click="${this.changeAutoplayPref}"
                data-testid="autoplay-toggle"
              >
                ${this.renderCheckmark(t)}
                <span>
                  ${Kt("Autoplay",{desc:"Button: Toggle whether media should autoplay"})}</span
                >
              </button>
              <div class="separator opacity-50 mx-auto"></div>
            `:""}
        ${null===(e=this.levelsToDisplay())||void 0===e?void 0:e.map(e=>e?r.c`
                <button
                  class="px-sm py-xs flex justify-center border-none cursor-pointer ${this.selectedLevel===e.levelIndex?"active":""}"
                  @click="${t=>this.handleOptionSelection(t,e.levelIndex)}"
                >
                  ${this.renderCheckmark(this.selectedLevel===e.levelIndex)}
                  <span>${e.resolution}p</span>
                </button>
              `:"")}
        <button
          class="px-sm py-xs flex justify-center border-none cursor-pointer ${n?"active":""}"
          @click="${e=>this.handleOptionSelection(e,-1)}"
        >
          ${this.renderCheckmark(n)}
          <span>
            ${Kt("Auto",{desc:"Button: Automatic quality option"})}</span
          >
        </button>
      </div>
    `
				}
			}

			function tn(e, t) {
				const n = String(e),
					r = n.length;
				if (r < t) {
					return `${"0".repeat(t-r)}${e}`
				}
				return n
			}
			var nn;

			function rn(e) {
				const t = Math.trunc(e / 3600),
					n = Math.trunc(e % 3600 / 60),
					r = Math.trunc(e % 60),
					i = Number((e - Math.trunc(e)).toPrecision(3));
				return {
					[nn.Hours]: t,
					[nn.Minutes]: n,
					[nn.Seconds]: r,
					[nn.Fraction]: i
				}
			}

			function on(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const {
					hours: r,
					minutes: i,
					seconds: o
				} = rn(e), s = t ? tn(r, 2) : r, a = tn(i, 2), l = tn(o, 2);
				return r > 0 || n ? `${s}:${a}:${l}` : `${i}:${l}`
			}

			function sn(e) {
				const t = [],
					{
						hours: n,
						minutes: r,
						seconds: i
					} = rn(e),
					o = (e, t) => 1 === e ? t : `${t}s`;
				return n > 0 && t.push(`${n} ${o(n,"hour")}`), r > 0 && t.push(`${r} ${o(r,"minute")}`), (i > 0 || 0 === t.length) && t.push(`${i} ${o(i,"second")}`), t.join(", ")
			}
			Jt([Object(i.b)({
					attribute: !1
				})], en.prototype, "hlsEngine", void 0), Jt([Object(i.b)({
					attribute: !1
				})], en.prototype, "showAutoplayToggle", void 0), Jt([Object(i.b)({
					attribute: !1
				})], en.prototype, "autoplayPref", void 0), Jt([Object(i.d)()], en.prototype, "showOptions", void 0), Jt([Object(i.d)()], en.prototype, "selectedLevel", void 0), Y("vds-quality-switcher", en),
				function(e) {
					e.Hours = "hours", e.Minutes = "minutes", e.Seconds = "seconds", e.Fraction = "fraction"
				}(nn || (nn = {}));
			var an = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			class ln extends r.a {
				constructor() {
					super(...arguments), this._disposal = new G.a, this._mediaStoreConsumer = De.consume(this), this.__seconds = 0, this.type = "current", this.showHours = !1, this.padHours = !1, this.remainder = !1
				}
				static get styles() {
					return [r.b`
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
					return r.c`${this._getFormattedTime()}`
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
						let [t, n] = e;
						return Math.max(0, n - t)
					})
				}
				_getFormattedTime() {
					return on(this.__seconds, this.padHours, this.showHours)
				}
			}

			function dn(e) {
				let t;
				const n = () => !V(t);

				function r() {
					for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
					n() || (t = window.requestAnimationFrame(() => {
						e.apply(this, i), t = void 0
					}))
				}
				return r.cancel = () => {
					V(t) || (window.cancelAnimationFrame(t), t = void 0)
				}, r.pending = n, r
			}
			an([Object(i.d)()], ln.prototype, "__seconds", void 0), an([Object(i.b)()], ln.prototype, "type", void 0), an([Object(i.b)({
				attribute: "show-hours",
				type: Boolean
			})], ln.prototype, "showHours", void 0), an([Object(i.b)({
				attribute: "pad-hours",
				type: Boolean
			})], ln.prototype, "padHours", void 0), an([Object(i.b)({
				type: Boolean
			})], ln.prototype, "remainder", void 0), Y("vds-time", ln);
			const cn = Pe((function() {
					const e = ue(!1),
						t = ue(!1);
					return {
						value: ue(50),
						pointerValue: ue(0),
						min: ue(0),
						max: ue(100),
						dragging: e,
						pointing: t,
						interactive: pe([e, t], e => {
							let [t, n] = e;
							return t || n
						})
					}
				})),
				hn = r.b`
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
			var un, pn, vn = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			! function(e) {
				e[e.Left = -1] = "Left", e[e.ArrowLeft = -1] = "ArrowLeft", e[e.Up = -1] = "Up", e[e.ArrowUp = -1] = "ArrowUp", e[e.Right = 1] = "Right", e[e.ArrowRight = 1] = "ArrowRight", e[e.Down = 1] = "Down", e[e.ArrowDown = 1] = "ArrowDown"
			}(un || (un = {})),
			function(e) {
				e.Horizontal = "horizontal", e.Vertical = "vertical"
			}(pn || (pn = {}));
			class gn extends r.a {
				constructor() {
					super(), this._sliderStoreProvider = cn.provide(this), this.disabled = !1, this.value = 50, this._step = 1, this.direction = pn.Horizontal, this._keyboardStep = 1, this.shiftKeyMultiplier = 5, this.customValueText = !1, this._mediaRemote = new Lt(this), this._disconnectDisposal = new G.a, this._handlePointerEnter = Object(Ze.a)(this, "pointerenter", () => {
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
							shiftKey: n
						} = e;
						if (!Object.keys(un).includes(t)) return;
						const r = (n ? this.keyboardStep * this.shiftKeyMultiplier : this.keyboardStep) * Number(un[t]),
							i = (this.value + r) / this.step,
							o = this.step * i;
						this.value = this._getClampedValue(o), this._dispatchValueChange(e)
					}), this._handleFillValueChange = Object(Ze.a)(this, "vds-slider-value-change", this._updateFillCSSProps.bind(this)), this._handlePointerValueChange = Object(Ze.a)(this, "vds-slider-pointer-value-change", this._updatePointerCSSProps.bind(this)), this._onDrag = dn(e => {
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
					}), this._lastDispatchedValue = this.value, this._dispatchValueChange = dn(e => {
						this.value !== this._lastDispatchedValue && (this.dispatchEvent(Z("vds-slider-value-change", {
							detail: this.value,
							triggerEvent: e
						})), this._lastDispatchedValue = this.value)
					}), this._lastDispatchedPointerValue = this.pointerValue, this._dispatchPointerValueChange = dn(e => {
						if (this.pointerValue === this._lastDispatchedPointerValue) return;
						["vds-slider-pointer-value-change", this.isDragging && "vds-slider-drag-value-change"].forEach(t => {
							t && this.dispatchEvent(Z(t, {
								detail: this.pointerValue,
								triggerEvent: e
							}))
						}), this._lastDispatchedPointerValue = this.pointerValue
					}), qt(this)
				}
				static get styles() {
					return [hn]
				}
				static get parts() {
					return []
				}
				get store() {
					return this._sliderStoreProvider.value
				}
				get min() {
					return ve(this.store.min)
				}
				set min(e) {
					this.store.min.set(e)
				}
				get max() {
					return ve(this.store.max)
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
					return ve(this.store.dragging)
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
					return ve(this.store.pointerValue)
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
						Q(this, "interactive", e)
					}))
				}
				willUpdate(e) {
					(e.has("value") || e.has("min") || e.has("max")) && (this.value = this._getClampedValue(this.value), this.store.value.set(this.value), this._updateFillCSSProps(), this._dispatchValueChange()), e.has("disabled") && this.disabled && (this.store.dragging.set(!1), this.store.pointing.set(!1), this.removeAttribute("dragging"), this.removeAttribute("pointing"), this.removeAttribute("interactive"), Q(this, "aria-disabled", this.disabled)), this.customValueText || this._updateAriaValueAttrs(), super.willUpdate(e)
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
					return r.c`${this._renderDefaultSlot()}`
				}
				_renderDefaultSlot() {
					return r.c`<slot></slot>`
				}
				_setupAriaAttrs() {
					K(this, "role", "slider"), K(this, "tabindex", "0"), K(this, "aria-orientation", this.direction === pn.Vertical ? "vertical" : "horizontal"), K(this, "autocomplete", "off")
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
					return `${ke(this.value/this.max*100,2)}%`
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
					return Ee(this.min, ke(e, Se(this.step)), this.max)
				}
				_getValueFromRate(e) {
					const t = Ee(0, e, 1),
						n = (this.max - this.min) * t,
						r = Math.round(n / this.step),
						i = this.step * r;
					return this.min + i
				}
				_getValueBasedOnThumbPosition(e) {
					if (this.direction === pn.Vertical) {
						const t = e.clientY,
							{
								bottom: n,
								height: r
							} = this.getBoundingClientRect(),
							i = (n - t) / r;
						return this._getValueFromRate(i)
					} {
						const t = e.clientX,
							{
								left: n,
								width: r
							} = this.getBoundingClientRect(),
							i = (t - n) / r;
						return this._getValueFromRate(i)
					}
				}
			}
			vn([Object(i.b)({
				reflect: !0,
				type: Number
			})], gn.prototype, "min", null), vn([Object(i.b)({
				reflect: !0,
				type: Number
			})], gn.prototype, "max", null), vn([Object(i.b)({
				reflect: !0,
				type: Boolean
			})], gn.prototype, "disabled", void 0), vn([Object(i.b)({
				reflect: !0,
				type: Number
			})], gn.prototype, "value", void 0), vn([Object(i.b)({
				type: Number,
				reflect: !0
			})], gn.prototype, "step", null), vn([Object(i.b)({
				attribute: "direction",
				type: pn
			})], gn.prototype, "direction", void 0), vn([Object(i.b)({
				attribute: "keyboard-step",
				type: Number,
				reflect: !0
			})], gn.prototype, "keyboardStep", null), vn([Object(i.b)({
				attribute: "shift-key-multiplier",
				type: Number
			})], gn.prototype, "shiftKeyMultiplier", void 0), vn([Object(i.b)({
				type: Boolean,
				attribute: "custom-value-text"
			})], gn.prototype, "customValueText", void 0);
			const bn = r.b``;
			var mn = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			class fn extends gn {
				constructor() {
					super(), this._step = .1, this.value = 0, this.valueText = "{currentTime} out of {duration}", this.pauseWhileDragging = !1, this.seekingRequestThrottle = 100, this.__mediaDuration = 0, this.__mediaPaused = !0, this._handleSliderDragStart = Object(Ze.a)(this, "vds-slider-drag-start", e => {
						this._togglePlaybackWhileDragging(e)
					}), this._handleSliderValueChange = Object(Ze.a)(this, "vds-slider-value-change", e => {
						Dt(e.originEvent) && (this._dispatchSeekingRequest.cancel(), this._mediaRemote.seek(this.value, e))
					}), this._handleSliderDragValueChange = Object(Ze.a)(this, "vds-slider-drag-value-change", e => {
						this._dispatchSeekingRequest(e)
					}), this._handleSliderDragEnd = Object(Ze.a)(this, "vds-slider-drag-end", e => {
						this._dispatchSeekingRequest.cancel(), this._mediaRemote.seek(this.value, e), this._togglePlaybackWhileDragging(e)
					}), this._dispatchSeekingRequest = et(e => {
						this._mediaRemote.seeking(this.value, e)
					}, this.seekingRequestThrottle), this._wasPlayingBeforeDragStart = !1, Ie(this, "currentTime", e => {
						this.value = e
					}), Ie(this, "duration", e => {
						this.__mediaDuration = e, this.requestUpdate("max")
					}), Ie(this, "paused", e => {
						this.__mediaPaused = e
					})
				}
				static get styles() {
					return [super.styles, bn]
				}
				connectedCallback() {
					super.connectedCallback(), K(this, "aria-label", "Media time")
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
					return this.valueText.replace("{currentTime}", sn(this.value)).replace("{duration}", sn(this.__mediaDuration))
				}
				_getValueMax() {
					return "100%"
				}
				_togglePlaybackWhileDragging(e) {
					this.pauseWhileDragging && (this.isDragging && !this.__mediaPaused ? (this._wasPlayingBeforeDragStart = !0, this._mediaRemote.pause(e)) : this._wasPlayingBeforeDragStart && !this.isDragging && this.__mediaPaused && (this._wasPlayingBeforeDragStart = !1, this._mediaRemote.play(e)))
				}
			}
			mn([Object(i.b)({
				attribute: !1,
				state: !0
			})], fn.prototype, "value", void 0), mn([Object(i.b)({
				attribute: !1
			})], fn.prototype, "min", null), mn([Object(i.b)({
				attribute: !1
			})], fn.prototype, "max", null), mn([Object(i.b)({
				attribute: "value-text"
			})], fn.prototype, "valueText", void 0), mn([Object(i.b)({
				attribute: "pause-while-dragging",
				type: Boolean
			})], fn.prototype, "pauseWhileDragging", void 0), mn([Object(i.b)({
				attribute: "seeking-request-throttle",
				type: Number
			})], fn.prototype, "seekingRequestThrottle", void 0), mn([Object(i.d)()], fn.prototype, "__mediaDuration", void 0), mn([Object(i.d)()], fn.prototype, "__mediaPaused", void 0), Y("vds-time-slider", fn);
			var _n = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			class yn extends r.a {
				constructor() {
					super(...arguments), this._disposal = new G.a, this._sliderStoreConsumer = cn.consume(this), this.__value = 0, this.type = "current", this.showHours = !1, this.padHours = !1, this.decimalPlaces = 2
				}
				static get styles() {
					return [r.b`
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
					return r.c`${this._getValueText()}`
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
						let [t, n, r] = e;
						return t / (r - n) * 100
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
					return `${ke(this.__value,this.decimalPlaces)}%`
				}
				_getTimeFormat() {
					return on(this.__value, this.padHours, this.showHours)
				}
			}
			_n([Object(i.d)()], yn.prototype, "__value", void 0), _n([Object(i.b)()], yn.prototype, "type", void 0), _n([Object(i.b)()], yn.prototype, "format", void 0), _n([Object(i.b)({
				attribute: "show-hours",
				type: Boolean
			})], yn.prototype, "showHours", void 0), _n([Object(i.b)({
				attribute: "pad-hours",
				type: Boolean
			})], yn.prototype, "padHours", void 0), _n([Object(i.b)({
				attribute: "decimal-places",
				type: Number
			})], yn.prototype, "decimalPlaces", void 0), Y("vds-slider-value-text", yn);
			const {
				H: wn
			} = o.a, xn = e => void 0 === e.strings, kn = (e, t) => {
				var n, r;
				const i = e._$AN;
				if (void 0 === i) return !1;
				for (const o of i) null === (r = (n = o)._$AO) || void 0 === r || r.call(n, t, !1), kn(o, t);
				return !0
			}, En = e => {
				let t, n;
				do {
					if (void 0 === (t = e._$AM)) break;
					(n = t._$AN).delete(e), e = t
				} while (0 === (null == n ? void 0 : n.size))
			}, Sn = e => {
				for (let t; t = e._$AM; e = t) {
					let n = t._$AN;
					if (void 0 === n) t._$AN = n = new Set;
					else if (n.has(e)) break;
					n.add(e), An(t)
				}
			};

			function Cn(e) {
				void 0 !== this._$AN ? (En(this), this._$AM = e, Sn(this)) : this._$AM = e
			}

			function On(e, t = !1, n = 0) {
				const r = this._$AH,
					i = this._$AN;
				if (void 0 !== i && 0 !== i.size)
					if (t)
						if (Array.isArray(r))
							for (let o = n; o < r.length; o++) kn(r[o], !1), En(r[o]);
						else null != r && (kn(r, !1), En(r));
				else kn(this, e)
			}
			const An = e => {
				var t, n, r, i;
				e.type == l.CHILD && (null !== (t = (r = e)._$AP) && void 0 !== t || (r._$AP = On), null !== (n = (i = e)._$AQ) && void 0 !== n || (i._$AQ = Cn))
			};
			class Pn extends c {
				constructor() {
					super(...arguments), this._$AN = void 0
				}
				_$AT(e, t, n) {
					super._$AT(e, t, n), Sn(this), this.isConnected = e._$AU
				}
				_$AO(e, t = !0) {
					var n, r;
					e !== this.isConnected && (this.isConnected = e, e ? null === (n = this.reconnected) || void 0 === n || n.call(this) : null === (r = this.disconnected) || void 0 === r || r.call(this)), t && (kn(this, e), En(this))
				}
				setValue(e) {
					if (xn(this._$Ct)) this._$Ct._$AI(e, this);
					else {
						const t = [...this._$Ct._$AH];
						t[this._$Ci] = e, this._$Ct._$AI(t, this, 0)
					}
				}
				disconnected() {}
				reconnected() {}
			}
			const jn = () => new $n;
			class $n {}
			const Mn = new WeakMap,
				Rn = d(class extends Pn {
					render(e) {
						return o.d
					}
					update(e, [t]) {
						var n;
						const r = t !== this.Y;
						return r && void 0 !== this.Y && this.rt(void 0), (r || this.lt !== this.dt) && (this.Y = t, this.ct = null === (n = e.options) || void 0 === n ? void 0 : n.host, this.rt(this.dt = e.element)), o.d
					}
					rt(e) {
						var t;
						if ("function" == typeof this.Y) {
							const n = null !== (t = this.ct) && void 0 !== t ? t : globalThis;
							let r = Mn.get(n);
							void 0 === r && (r = new WeakMap, Mn.set(n, r)), void 0 !== r.get(this.Y) && this.Y.call(this.ct, void 0), r.set(this.Y, e), void 0 !== e && this.Y.call(this.ct, e)
						} else this.Y.value = e
					}
					get lt() {
						var e, t, n;
						return "function" == typeof this.Y ? null === (t = Mn.get(null !== (e = this.ct) && void 0 !== e ? e : globalThis)) || void 0 === t ? void 0 : t.get(this.Y) : null === (n = this.Y) || void 0 === n ? void 0 : n.value
					}
					disconnected() {
						this.lt === this.dt && this.rt(void 0)
					}
					reconnected() {
						this.rt(this.dt)
					}
				});
			var Tn = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			class Ln extends r.a {
				constructor() {
					super(), this._videoRef = jn(), this.__canPlay = !1, this.__hasError = !1, be(this, cn, "pointerValue", e => {
						this._updateCurrentTime(e)
					})
				}
				static get styles() {
					return [r.b`
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
					return r.c`
      <video
        part="video"
        muted
        playsinline
        preload="auto"
        src="${e=this.src,s(""===e||"undefined"===e?void 0:e)}"
        @canplay="${this._handleCanPlay}"
        @error="${this._handleError}"
        ${Rn(this._videoRef)}
      ></video>
    `;
					var e
				}
				async _handleCanPlay(e) {
					this.__canPlay = !0, this.setAttribute("video-can-play", ""), kt(this, e)
				}
				_handleError(e) {
					this.__hasError = !0, this.setAttribute("video-error", ""), kt(this, e)
				}
			}
			Tn([Object(i.b)()], Ln.prototype, "src", void 0), Tn([Object(i.d)()], Ln.prototype, "__canPlay", void 0), Tn([Object(i.d)()], Ln.prototype, "__hasError", void 0), Y("vds-slider-video", Ln);
			var Vn = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			class qn extends gn {
				constructor() {
					super(), this.value = 100, this._handleSliderValueChange = Object(Ze.a)(this, "vds-slider-value-change", this._changeVolume.bind(this)), this._handleSliderDragValueChange = Object(Ze.a)(this, "vds-slider-drag-value-change", this._changeVolume.bind(this)), Ie(this, "volume", e => {
						this.value = 100 * Math.sqrt(e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), K(this, "aria-label", "Media volume")
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
						n = ke(Math.pow(t / 100, 2), 3);
					this._mediaRemote.changeVolume(n, e)
				}
			}
			Vn([Object(i.b)({
				attribute: !1
			})], qn.prototype, "min", null), Vn([Object(i.b)({
				attribute: !1
			})], qn.prototype, "max", null), Vn([Object(i.b)({
				attribute: !1,
				state: !0
			})], qn.prototype, "value", void 0), Y("vds-volume-slider", qn);
			var Dn = r.b`
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
			const In = {
				capLevelToPlayerSize: !0
			};
			var Hn = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			let zn = class extends r.a {
				constructor() {
					super(...arguments), this.hlsLibrary = () => n.e(3).then(n.t.bind(null, "./node_modules/@reddit/shreddit.components.shreddit-player/node_modules/hls.js/dist/hls.min.js", 7)), this.autoplay = !1, this.autoplayPref = !1, this.showAutoplayToggle = !1, this.gif = !1, this.playOutOfViewport = !1, this.ui = "mobile", this.objectFit = "contain", this.mediaLoadRequested = !1, this.disableMuteButton = !1, this.handleLoadMediaClick = () => {
						var e;
						this.mediaLoadRequested = !0, null === (e = this.hlsElement) || void 0 === e || e.startLoadingMedia()
					}
				}
				static get styles() {
					return [Xt, Dn]
				}
				connectedCallback() {
					super.connectedCallback(), requestAnimationFrame(() => {
						var e, t, n;
						null === (e = this.hlsElement) || void 0 === e || e.addEventListener("vds-loaded-metadata", () => {
							var e;
							this.hlsEngine = null === (e = this.hlsElement) || void 0 === e ? void 0 : e.hlsEngine
						}), null === (t = this.volumeSlider) || void 0 === t || t.addEventListener("vds-slider-drag-start", () => {
							this.disableMuteButton = !0
						}), null === (n = this.volumeSlider) || void 0 === n || n.addEventListener("vds-slider-drag-end", () => {
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
					const n = this.gif ? "gif" : "",
						i = "desktop" === this.ui,
						o = "absolute inset-0 w-full h-full flex items-center justify-center opacity-0 ease duration-150";
					var a;
					return this.shouldShowPreviewPoster() ? r.c`
        <div class="preview-poster-container absolute inset-0 bg-black">
          <shreddit-img
            alt="media poster"
            loading="lazy"
            objectfit="contain"
            src="${s(null!==(a=this.getAttribute("poster"))&&void 0!==a?a:void 0)}"
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
      ` : r.c`
      <div
        class="media-controls h-full w-full text-white absolute inset-0 pointer-events-none ${n}"
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
                <icon-play fill class="play-icon text-18 ${o}"></icon-play>
                <icon-refresh fill class="refresh-icon text-24 ${o}"></icon-refresh>
                <icon-pause fill class="pause-icon text-18 ${o}"></icon-pause>
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
                    src="${s(this.preview)}"
                  ></vds-slider-video>
                  <vds-slider-value-text
                    class="text-14 font-semibold px-2xs bg-black bg-opacity-50 rounded-sm"
                    type="pointer"
                    format="time"
                  ></vds-slider-value-text>
                </div>
              </vds-time-slider>

              <vds-time type="current" class="flex font-semibold ml-2xs"></vds-time>

              ${i?r.c`
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
                <icon-expand-left fill class="expand-icon text-18 ${o}"></icon-expand-left>
                <icon-collapse-left
                  fill
                  class="collapse-icon text-18 ${o}"
                ></icon-collapse-left>
              </vds-fullscreen-button>
            </div>
            <div class="mute-volume-container flex flex-col gap-xs pointer-events-auto">
              ${i?r.c`
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
              ${this.gif?r.c`
                    <icon-gif-post
                      class="control gif-icon inset-0 flex items-center justify-center text-18"
                    ></icon-gif-post>
                  `:r.c`
                    <vds-mute-button
                      class="control rounded-sm cursor-pointer ${"ease duration-150"}"
                      .disabled="${this.disableMuteButton}"
                    >
                      <icon-volume fill class="unmute-icon text-18 ${o}"></icon-volume>
                      <icon-volume-mute
                        fill
                        class="mute-icon text-18 ${o}"
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
          src="${s(null!==(t=this.getAttribute("poster"))&&void 0!==t?t:void 0)}"
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
					return r.c`
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
					const n = this.gif ? "gif" : "",
						i = "desktop" === this.ui;
					return r.c`
      <vds-media-sync ?single-playback="${!this.gif}" sync-volume>
        <vds-media-visibility
          intersection-threshold="1"
          enter-page="${s(this.autoplay||this.gif?"play":void 0)}"
          enter-viewport="${s(this.autoplay||this.gif?"play":void 0)}"
          exit-page="${s(i||this.gif?void 0:"pause")}"
          exit-viewport="${s(this.playOutOfViewport||this.gif?void 0:"pause")}"
          page-enter-delay="200"
          viewport-enter-delay="200"
        >
          <vds-media class="h-full w-full ${`${n}`}">
            <vds-hls
              class="h-full w-full"
              .hlsConfig="${In}"
              .hlsLibrary="${this.hlsLibrary}"
              preload="${this.autoplay?"auto":"none"}"
              loading="${this.autoplay?"lazy":"custom"}"
              ?autoplay="${this.autoplay}"
              ?gif="${this.gif}"
              ?loop="${this.gif}"
              ?muted="${this.gif}"
              poster="${s(null!==(e=this.getAttribute("poster"))&&void 0!==e?e:void 0)}"
              preview="${s(null!==(t=this.getAttribute("preview"))&&void 0!==t?t:void 0)}"
            >
              <video
                src="${s(this.src)}"
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
			Hn([Object(i.b)({
				type: String,
				attribute: "src"
			})], zn.prototype, "src", void 0), Hn([Object(i.b)({
				type: Boolean,
				attribute: "autoplay",
				reflect: !0
			})], zn.prototype, "autoplay", void 0), Hn([Object(i.b)({
				type: Boolean,
				attribute: "autoplay-pref"
			})], zn.prototype, "autoplayPref", void 0), Hn([Object(i.b)({
				type: Boolean,
				attribute: "show-autoplay-toggle"
			})], zn.prototype, "showAutoplayToggle", void 0), Hn([Object(i.b)({
				type: Boolean,
				attribute: "gif",
				reflect: !0
			})], zn.prototype, "gif", void 0), Hn([Object(i.b)({
				type: String,
				attribute: "preview"
			})], zn.prototype, "preview", void 0), Hn([Object(i.b)({
				type: Boolean,
				attribute: "play-out-of-viewport"
			})], zn.prototype, "playOutOfViewport", void 0), Hn([Object(i.b)({
				type: String,
				attribute: "ui"
			})], zn.prototype, "ui", void 0), Hn([Object(i.b)({
				type: String,
				attribute: "object-fit"
			})], zn.prototype, "objectFit", void 0), Hn([Object(i.d)()], zn.prototype, "mediaLoadRequested", void 0), Hn([Object(i.d)()], zn.prototype, "hlsEngine", void 0), Hn([Object(i.d)()], zn.prototype, "disableMuteButton", void 0), Hn([Object(i.c)("vds-hls")], zn.prototype, "hlsElement", void 0), Hn([Object(i.c)("vds-volume-slider")], zn.prototype, "volumeSlider", void 0), zn = Hn([Object(i.a)("shreddit-player")], zn)
		},
		"./node_modules/@reddit/shreddit.components.shreddit-player/dist/media-telemetry-observer/media-telemetry-observer.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "MediaTelemetryObserver", (function() {
				return ye
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js"),
				i = n("./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js"),
				o = n("./node_modules/lit/index.js"),
				s = n("./node_modules/lit/decorators.js");
			const a = 3e4,
				l = 1e4,
				d = [25, 50, 75, 95, 100],
				c = [2, 3, 5, 10],
				h = 2e3,
				u = 3e3;
			var p = n("./node_modules/@reddit/faceplate/lib/custom-event.js");
			const v = e => t => {
					const n = (e => {
						const {
							originEvent: {
								timeStamp: t
							},
							target: {
								state: n,
								mediaElement: r
							}
						} = e, {
							currentTime: i,
							muted: o,
							paused: s,
							volume: a
						} = null != n ? n : {}, {
							duration: l
						} = null != r ? r : {};
						let {
							fullscreen: d
						} = null != n ? n : {};
						return "vds-fullscreen-change" === e.type && (d = e.detail), {
							currentTime: i,
							duration: l,
							fullscreen: d,
							muted: o,
							paused: s,
							timeStamp: t,
							volume: a
						}
					})(t);
					return [Object(p.a)(e, n)]
				},
				g = [{
					"vds-fullscreen-change": v("ad-media-fullscreenchange"),
					"vds-pause": v("ad-media-pause"),
					"vds-play": v("ad-media-play"),
					"vds-time-update": v("ad-media-timeupdate"),
					"vds-volume-change": v("ad-media-volumechange"),
					"vds-seeking": v("ad-media-seeking"),
					"vds-seeked": v("ad-media-seeked")
				}];
			var b, m, f, _, y, w, x, k, E, S, C, O, A, P, j, $ = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				M = n("./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js");
			class R {
				constructor(e) {
					this._timer = null, this._expectedAt = 1 / 0, this._handleInterval = () => {
						var e;
						const t = Date.now(),
							{
								_expectedAt: n,
								_interval: r
							} = this,
							i = t - n,
							o = {
								timestamp: t,
								latency: i,
								accuracy: 1 - Math.abs(i) / r
							};
						null === (e = this._callback) || void 0 === e || e.call(this, o), this._expectedAt = t + r
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
			class T {
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
					} = this, n = e[e.length - 1], r = {
						time: n ? t - n.cumulativeTime : t,
						cumulativeTime: t
					};
					return e.push(r), r
				}
			}
			class L {
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
						const n = this._thresholds[0];
						if (e < n) return t;
						this._thresholds.shift(), t.push(n)
					}
					return t
				}
			}
			class V {
				constructor(e) {
					this._stopwatch = new T, this._buffering = !1, this._playing = !1, this._viewable = !1, this._visible = !1, this._audible = e.audible, this._fullscreen = e.fullscreen, this._thresholdObserver = new L(e.duration)
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

			function q(e, t, n) {
				return {
					...e,
					media: I(t, n),
					playback: D(t, n)
				}
			}

			function D(e, t) {
				var n, r, i, o, s, a;
				const {
					levels: l,
					currentLevel: d,
					audioTracks: c,
					audioTrack: h
				} = null !== (n = e.hlsEngine) && void 0 !== n ? n : {}, {
					currentTime: u = 0,
					duration: p = 0,
					muted: v,
					volume: g = 0
				} = null !== (r = e.state) && void 0 !== r ? r : {}, b = l && void 0 !== d ? null === (i = l[d]) || void 0 === i ? void 0 : i.bitrate : void 0, m = c && void 0 !== h && (null === (o = c[h]) || void 0 === o ? void 0 : o.bitrate) > 0 ? null === (s = c[h]) || void 0 === s ? void 0 : s.bitrate : void 0, {
					height: f,
					width: y
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
					state: H(e),
					error: z(e),
					watch_duration_ms: Math.round(t._stopwatch.time),
					heartbeat_duration_ms: null,
					playhead_offset_ms: Math.round(1e3 * (p - u)),
					timestamp_ms: Math.round(1e3 * u),
					start_time_ms: t.startedAt,
					volume: v ? 0 : Math.round(100 * g),
					total_bitrate: (null != b ? b : 0) + (null != m ? m : 0),
					video_bitrate: b,
					audio_bitrate: m,
					player_type: null !== (a = t._playbackPlayerType) && void 0 !== a ? a : null,
					player_width: y,
					player_height: f,
					autoplay_setting: t._firstPlayTrusted ? _.Click : _.Autoplay,
					sequence_number: t._sequenceNumber += 1
				}
			}

			function I(e, t) {
				var n, r, i, o, s, a;
				const {
					levels: l,
					currentLevel: d,
					audioTrack: c,
					streamController: h
				} = null !== (n = e.hlsEngine) && void 0 !== n ? n : {}, {
					duration: u,
					mediaType: p
				} = null !== (r = e.state) && void 0 !== r ? r : {}, {
					height: v,
					width: g
				} = function(e) {
					const t = e.videoElement;
					return {
						height: (null == t ? void 0 : t.videoHeight) || 0,
						width: (null == t ? void 0 : t.videoWidth) || 0
					}
				}(e), m = g >= v ? b.Landscape : b.Portrait, _ = e.currentHlsSrc || (null === (i = e.mediaElement) || void 0 === i ? void 0 : i.src), {
					hostname: y,
					pathname: w,
					id: x
				} = function(e) {
					let t, n, r = "";
					try {
						const i = new URL(e);
						t = i.hostname, n = i.pathname, "v.redd.it" === t && (r = n.split("/")[1] || "")
					} catch {}
					return {
						hostname: t,
						pathname: n,
						id: r
					}
				}(_), k = null == h ? void 0 : null === (o = h.fragCurrent) || void 0 === o ? void 0 : o.byteRange;
				let E;
				Array.isArray(k) && 2 === k.length && (E = k[1] - k[0]);
				const S = l && void 0 !== d ? null === (s = l[d]) || void 0 === s ? void 0 : s.codecSet : void 0;
				return {
					duration: Math.round(1e3 * u),
					height: v,
					width: g,
					id: x,
					domain: y,
					orientation: m,
					origin: null !== (a = t._mediaOrigin) && void 0 !== a ? a : null,
					size: E,
					type: p,
					packaging_format: e.isHlsStream ? f.Hls : f.SingleFile,
					byte_range: Array.isArray(k) ? k.toString() : void 0,
					format: S,
					has_audio: void 0 !== c && c > -1,
					file_name: w
				}
			}

			function H(e) {
				var t;
				const {
					waiting: n,
					playing: r,
					paused: i
				} = null !== (t = e.state) && void 0 !== t ? t : {};
				return n ? y.Buffering : r ? y.Playing : i ? y.Paused : y.Buffering
			}

			function z(e) {
				var t;
				const {
					error: n
				} = null !== (t = e.state) && void 0 !== t ? t : {};
				if (!n || !n.message) return;
				const {
					message: r,
					code: i,
					mediaError: o
				} = n;
				let s = `[${i}]: ${r}`;
				return o && (o.code || o.message) && (s = `${s}. MediaError[${o.code}]: ${o.message}`), s
			}

			function F(e) {
				return H(e) === y.Playing
			}

			function U(e) {
				return !e.state.muted && e.state.volume > 0
			}! function(e) {
				e.Landscape = "landscape", e.Portrait = "portrait"
			}(b || (b = {})),
			function(e) {
				e.DirectUpload = "direct_upload", e.ScrapedLink = "scraped_link", e.ImageOptimizer = "image_optimizer"
			}(m || (m = {})),
			function(e) {
				e.Hls = "hls", e.SingleFile = "single_file"
			}(f || (f = {})),
			function(e) {
				e.Autoplay = "autoplay", e.Click = "click"
			}(_ || (_ = {})),
			function(e) {
				e.Buffering = "buffering", e.Paused = "paused", e.Playing = "playing"
			}(y || (y = {})),
			function(e) {
				e.InFeedPlayer = "in_feed_player", e.PostDetailScreen = "post_detail_screen", e.GalleryMode = "gallery_mode", e.VideoFeedV1 = "video_feed_v1", e.LiveFeedV1 = "live_feed_v1", e.TheaterMode = "theater_mode", e.DiscoveryUnit = "discovery_unit"
			}(w || (w = {})),
			function(e) {
				e["2g"] = "2g", e["3g"] = "3g", e["4g"] = "4g", e["slow-2g"] = "slow-2g", e.unknown = "unknown"
			}(x || (x = {})),
			function(e) {
				e.Videoplayer = "videoplayer"
			}(k || (k = {})),
			function(e) {
				e.Background = "background", e.Click = "click", e.End = "end", e.Error = "error", e.Scroll = "scroll", e.Start = "start", e.Switch = "switch", e.View = "view"
			}(E || (E = {})),
			function(e) {
				e.Autoplay = "autoplay", e.Bitrate = "bitrate", e.Download = "download", e.Pause = "pause", e.Play = "play", e.Rebuffer = "rebuffer", e.Video = "video"
			}(S || (S = {})),
			function(e) {
				e.Videoplayer = "videoplayer"
			}(C || (C = {})),
			function(e) {
				e.Click = "click", e.Continue = "continue", e.IsFullyViewable = "is_fully_viewable", e.IsViewable = "is_viewable", e.Pause = "pause", e.PlayExpanded = "play_expanded", e.PlayWithSound = "play_with_sound", e.Start = "start", e.Watch = "watch", e.WatchPercent25 = "watch_25_percent", e.WatchPercent50 = "watch_50_percent", e.WatchPercent75 = "watch_75_percent", e.WatchPercent95 = "watch_95_percent", e.WatchPercent100 = "watch_100_percent", e.WatchSeconds2 = "watch_2_seconds", e.WatchSeconds3 = "watch_3_seconds", e.WatchSeconds5 = "watch_5_seconds", e.WatchSeconds10 = "watch_10_seconds"
			}(O || (O = {})),
			function(e) {
				e.Pause = "pause", e.Play = "play", e.Seek = "seek", e.Mute = "mute", e.Unmute = "unmute", e.Replay = "replay", e.Video = "video"
			}(A || (A = {})),
			function(e) {
				e.Autoplay = "autoplay", e.Manual = "manual"
			}(P || (P = {})),
			function(e) {
				e.Auto = "auto", e.Buffer = "buffer", e.Manual = "manual"
			}(j || (j = {}));
			class N {
				constructor(e, t) {
					var n, r, i, o;
					this._handleHeartbeat = e => {
						this._validateHeartbeat(e) && this._watch()
					}, this._validateHeartbeat = e => e.latency < l, this._mediaOrigin = null == t ? void 0 : null === (n = t.media) || void 0 === n ? void 0 : n.origin, this._playbackPlayerType = null == t ? void 0 : null === (r = t.playback) || void 0 === r ? void 0 : r.playerType, this._player = e, this._pulse = new R({
						interval: a
					}), this._stopwatch = new T, this._firstPlayTrusted = !1, this.id = Object($.a)(), this._lastContinueReason = j.Auto, this._live = (null === (i = this._player.state) || void 0 === i ? void 0 : i.mediaType) === M.a.LiveVideo, this.hasLooped = !1, this._playedInFullscreen = !1, this._playedWithSound = !1, this.startedAt = 0, this._waiting = !1, this._sequenceNumber = -1, this._pulse.onHeartbeat(this._handleHeartbeat), this._watchPercentThresholdObserver = new L(d), this._watchSecondsThresholdObserver = new L(c);
					const s = U(this._player),
						{
							fullscreen: p = !1
						} = null !== (o = this._player.state) && void 0 !== o ? o : {};
					this._viewableImpressionObserver = new V({
						audible: s,
						duration: h,
						fullscreen: p
					}), this._viewableImpressionObserver.onImpression(() => {
						this._player.dispatchEvent(new Event("viewable-impression", {
							bubbles: !1
						}))
					}), this._fullyViewableImpressionObserver = new V({
						audible: s,
						duration: u,
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
					this._viewableImpressionObserver.fullscreen = e, this._fullyViewableImpressionObserver.fullscreen = e, F(this._player) && !this._playedInFullscreen && (this._playedInFullscreen = !0)
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
					null !== (t = this._player.state) && void 0 !== t && t.started || (this._firstPlayTrusted = e), this._lastContinueReason = e ? j.Manual : j.Auto
				}
				playing() {
					this._resumeSession(), this._waiting = !1, this._viewableImpressionObserver.buffering = !1, this._fullyViewableImpressionObserver.buffering = !1, this._lastContinueReason = j.Auto
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
					const t = U(e);
					t && F(e) && !this._playedWithSound && (this._playedWithSound = !0), this._viewableImpressionObserver.audible = t, this._fullyViewableImpressionObserver.audible = t
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
						currentTime: n,
						duration: r
					} = null !== (t = this._player.state) && void 0 !== t ? t : {}, i = 100 * (r >= n ? n / r : 0);
					return this._watchPercentThresholdObserver.test(i)
				}
				checkWatchSecondsThreshold() {
					if (this._watchSecondsThresholdObserver.complete) return [];
					const e = this._stopwatch.time / 1e3;
					return this._watchSecondsThresholdObserver.test(e)
				}
			}
			const B = Symbol("mixins/with-tracking");
			var W = n("./node_modules/js-cookie/dist/js.cookie.js"),
				Y = n.n(W),
				Q = n("./node_modules/@reddit/adblock-detection/browser.js");
			const K = [{
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
						width: n
					} = window.screen, r = window.devicePixelRatio;
					return n && t && r ? e.find(e => r === e.dpi && t === e.height && n === e.width) : void 0
				}(K);
				if (e) return {
					deviceName: e.version.toLowerCase().replace(" ", "-"),
					yearClass: e.yearClass
				}
			}
			const G = "high",
				J = new Map([
					[2011, "low"],
					[2012, "moderately_low"],
					[2014, "medium"],
					[2016, "moderately_high"]
				]);

			function Z(e) {
				for (const [t, n] of J)
					if (e <= t) return n;
				return G
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
				ne = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = "",
						n = "";
					const r = e.split(".");
					if (r.length >= 3) {
						t = `t2_${r[0].replace(/\b0+/g,"")}`, n = r[2]
					}
					return {
						id: t,
						cookie_created_timestamp: parseInt(n, 10)
					}
				},
				re = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
					const t = e.split("."),
						n = t[0],
						r = parseInt(t[2], 10);
					return {
						id: n,
						created_timestamp: r
					}
				};
			let ie = null;
			const oe = () => {
					const e = Y.a.get("session_tracker"),
						{
							domain: t,
							url: n
						} = ae();
					return {
						...re(e),
						referrer_domain: t,
						referrer_url: n
					}
				},
				se = () => {
					var e, t;
					const n = Y.a.get("loid");
					return {
						...n ? ne(n) : "",
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
					enabled: Object(Q.hasAdblock)(),
					acceptable_ads: Object(Q.hasAcceptableAds)()
				}),
				de = e => {
					let t = {};
					try {
						var n, r, i;
						t = JSON.parse(null !== (n = null === (r = document.getElementsByTagName("shreddit-screenview-data")) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.getAttribute("data")) && void 0 !== n ? n : "{}")
					} catch (o) {
						throw new Error("Unable to parse screenview data")
					}
					return t[e]
				},
				ce = () => {
					const {
						hostname: e,
						origin: t,
						pathname: n,
						search: r
					} = window.location, i = `${t}${n}`;
					return {
						base_url: r ? `${i}${r}` : i,
						canonical_url: void 0,
						domain: e,
						user_agent: window.navigator.userAgent
					}
				},
				he = () => {
					var e, t;
					const n = null !== (e = null === (t = X()) || void 0 === t ? void 0 : t.yearClass) && void 0 !== e ? e : null;
					return {
						year_class: n,
						device_tier: n ? Z(n) : void 0
					}
				},
				ue = () => ({
					adblock: le(),
					referrer: ae(),
					session: oe(),
					user: se(),
					client_timestamp: Date.now(),
					platform: he(),
					...ee,
					...te
				}),
				pe = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : de;
					if (null != t && t[e]) return {};
					const r = n(e);
					return r ? {
						[e]: r
					} : {}
				},
				ve = e => (e.request = {
					...ce(),
					...e.request || {}
				}, ie ? (e.request.google_client_id = ie, e) : e);
			var ge = function(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			};
			const be = [{
				"vds-ended": (e, t) => t.ended(),
				"vds-pause": (e, t, n) => {
					const r = we(e.requestEvent);
					return t.pause(), me(t, n, r)
				},
				"vds-fullscreen-change": (e, t, n) => {
					const r = e.detail,
						i = [];
					return F(n._player) && !t._playedInFullscreen && i.push(q({
						source: C.Videoplayer,
						action: O.PlayExpanded,
						noun: A.Video
					}, n._player, t)), t.fullscreen(r), i
				},
				"vds-play": (e, t, n) => {
					var r;
					const i = we(e.requestEvent),
						o = [];
					if (U(n._player) && !t._playedWithSound) {
						t._playedWithSound = !0;
						const e = q({
							source: C.Videoplayer,
							action: O.PlayWithSound,
							noun: A.Video
						}, n._player, t);
						o.push(e)
					}
					if (null !== (r = n._player.state) && void 0 !== r && r.fullscreen && !t._playedInFullscreen) {
						t._playedInFullscreen = !0;
						const e = q({
							source: C.Videoplayer,
							action: O.PlayExpanded,
							noun: A.Video
						}, n._player, t);
						o.push(e)
					}
					return t.play(i), n._userReplayRequest = !1, o
				},
				"vds-can-autoplay": (e, t, n) => n.autoplayEventInView ? [] : [q({
					source: k.Videoplayer,
					action: E.View,
					noun: S.Autoplay
				}, n._player, t)],
				"vds-autoplay": (e, t, n) => !0 === n.autoplayEventInView ? [q({
					source: k.Videoplayer,
					action: E.View,
					noun: S.Autoplay
				}, n._player, t)] : [],
				"vds-can-load": (e, t, n) => {
					var r, i;
					null !== (r = n._player) && void 0 !== r && null !== (i = r.state) && void 0 !== i && i.ended && (n._userReplayRequest = !0)
				},
				"vds-manual-load": (e, t, n) => [q({
					source: k.Videoplayer,
					action: E.Click,
					noun: S.Play
				}, n._player, t)],
				"vds-end": (e, t, n) => {
					var r, i, o;
					if (null !== (r = n._player) && void 0 !== r && r.loop || null !== (i = n._player) && void 0 !== i && null !== (o = i.state) && void 0 !== o && o.loop) return t.looped()
				},
				"vds-error": (e, t, n) => {
					var r;
					return (null == e ? void 0 : null === (r = e.detail) || void 0 === r ? void 0 : r.message) && console.error(`vds-error: [${e.detail.code}] ${e.detail.message}`), [q({
						source: k.Videoplayer,
						action: E.Error,
						noun: S.Video
					}, n._player, t)]
				},
				"vds-hls-level-switched": (e, t, n) => [q({
					source: k.Videoplayer,
					action: E.Switch,
					noun: S.Bitrate
				}, n._player, t)],
				"vds-hls-manifest-loading": (e, t, n) => [q({
					source: k.Videoplayer,
					action: E.Start,
					noun: S.Download
				}, n._player, t)],
				"vds-hls-manifest-loaded": (e, t, n) => [q({
					source: k.Videoplayer,
					action: E.End,
					noun: S.Download
				}, n._player, t)],
				"vds-playing": (e, t, n) => {
					var r;
					const i = "vds-triggeredBySeeked" === (null === (r = e.triggerEvent) || void 0 === r ? void 0 : r.type),
						o = !t._stopwatch.time,
						s = [];
					if (t._waiting) {
						t._lastContinueReason = j.Buffer;
						const e = q({
							source: k.Videoplayer,
							action: E.End,
							noun: S.Rebuffer
						}, n._player, t);
						s.push(e)
					}
					if (o) {
						const e = t._firstPlayTrusted ? P.Manual : P.Autoplay,
							r = q({
								source: k.Videoplayer,
								action: E.Start,
								noun: S.Video,
								action_info: {
									reason: e
								}
							}, n._player, t);
						s.push(r)
					} else if (!i || t._waiting) {
						const e = q({
							source: C.Videoplayer,
							action: O.Continue,
							noun: A.Video,
							action_info: {
								reason: t._lastContinueReason
							}
						}, n._player, t);
						s.push(e)
					}
					return t.playing(), s
				},
				"vds-replay": (e, t, n) => {
					var r, i, o;
					return n._userReplayRequest = !0, (null !== (r = n._player) && void 0 !== r && r.loop || null !== (i = n._player) && void 0 !== i && null !== (o = i.state) && void 0 !== o && o.loop) && t.replay(), [q({
						source: C.Videoplayer,
						action: O.Click,
						noun: A.Replay
					}, n._player, t)]
				},
				"vds-seeking": (e, t) => t.seeking(),
				"vds-seeked": (e, t, n) => {
					const r = [];
					return we(e.requestEvent) && r.push(q({
						source: C.Videoplayer,
						action: O.Click,
						noun: A.Seek
					}, n._player, t)), r
				},
				"vds-time-update": (e, t, n) => {
					const r = [],
						i = t.checkWatchPercentThreshold();
					for (const s of i) r.push(q({
						source: C.Videoplayer,
						action: ke(`WatchPercent${s}`),
						noun: A.Video
					}, n._player, t));
					const o = t.checkWatchSecondsThreshold();
					for (const s of o) r.push(q({
						source: C.Videoplayer,
						action: ke(`WatchSeconds${s}`),
						noun: A.Video
					}, n._player, t));
					return t.timeUpdate(), r
				},
				"vds-volume-change": (e, t, n) => {
					var r;
					const i = we(e.requestEvent),
						o = [],
						s = null === (r = e.requestEvent) || void 0 === r ? void 0 : r.type;
					if ("vds-mute-request" !== s && "vds-unmute-request" !== s || i && o.push(q({
							source: C.Videoplayer,
							action: O.Click,
							noun: "vds-mute-request" === s ? A.Mute : A.Unmute
						}, n._player, t)), U(n._player) && F(n._player) && !t._playedWithSound) {
						const e = q({
							source: C.Videoplayer,
							action: O.PlayWithSound,
							noun: A.Video
						}, n._player, t);
						o.push(e)
					}
					return t.volumeChange(n._player), o.filter(Boolean)
				},
				"vds-waiting": (e, t, n) => {
					var r, i;
					const o = [];
					return t.waiting(), null !== (r = n._player) && void 0 !== r && null !== (i = r.state) && void 0 !== i && i.started && o.push(q({
						source: k.Videoplayer,
						action: E.Start,
						noun: S.Rebuffer
					}, n._player, t), q({
						source: C.Videoplayer,
						action: O.Pause,
						noun: A.Video,
						action_info: {
							reason: j.Buffer
						}
					}, n._player, t)), o
				},
				"viewable-impression": (e, t, n) => {
					return [q({
						source: C.Videoplayer,
						action: O.IsViewable,
						noun: A.Video
					}, n._player, t)]
				},
				"fully-viewable-impression": (e, t, n) => {
					return [q({
						source: C.Videoplayer,
						action: O.IsFullyViewable,
						noun: A.Video
					}, n._player, t)]
				},
				"video-heartbeat": (e, t, n) => {
					return [fe(t, n)]
				}
			}];

			function me(e, t, n) {
				e.pause();
				const r = [];
				if (n) {
					const n = q({
						source: k.Videoplayer,
						action: E.Click,
						noun: S.Pause
					}, t._player, e);
					r.push(n)
				} else if (t._isVisible) {
					const n = q({
						source: k.Videoplayer,
						action: E.Scroll,
						noun: S.Pause
					}, t._player, e);
					r.push(n)
				} else {
					const n = q({
						source: k.Videoplayer,
						action: E.Background,
						noun: S.Video
					}, t._player, e);
					r.push(n)
				}
				r.push(fe(e, t));
				const i = n ? j.Manual : j.Auto,
					o = q({
						source: C.Videoplayer,
						action: O.Pause,
						noun: A.Video,
						action_info: {
							reason: i
						}
					}, t._player, e);
				return r.push(o), r
			}

			function fe(e, t) {
				const n = q({
					source: C.Videoplayer,
					action: O.Watch,
					noun: A.Video
				}, t._player, e);
				return n.playback.heartbeat_duration_ms = e._stopwatch.lap().time, n
			}
			var _e;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Ads = 1] = "Ads"
			}(_e || (_e = {}));
			let ye = class extends(function(e) {
				if (B in e) return e;
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
				return t[B] = !0, t
			}(o.a)) {
				constructor() {
					super(...arguments), this.set = _e.Default, this._userReplayRequest = !1, this._isVisible = !1, this._pageController = new r.a(this, e => {
						var t;
						let {
							state: n
						} = e;
						const r = "hidden" === n;
						this._isVisible = !r, null === (t = this._mediaSession) || void 0 === t || t.isVisible(!r)
					}), this._connect = Object(i.a)(this, "vds-media-provider-connect", e => {
						if (this._mediaSession) return;
						const {
							element: t,
							onDisconnect: n
						} = e.detail;
						this._player = t, this._createMediaSession();
						let r = be;
						this.set === _e.Ads && (r = [...be, ...g]);
						for (const i of r)
							for (const [e, r] of Object.entries(i)) {
								const i = e => this._runListener(e, r);
								t.addEventListener(e, i), n(() => {
									t.removeEventListener(e, i)
								})
							}
						n(() => {
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
					var t, n, r;
					const {
						source: i,
						action: o,
						noun: s,
						media: a,
						playback: l,
						action_info: d
					} = e, c = function(e) {
						let {
							source: t,
							action: n,
							noun: r,
							...i
						} = e, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return {
							...ve(o),
							source: t,
							action: n,
							noun: r,
							uuid: Object($.a)(),
							...ue(),
							...pe("post", o),
							...i
						}
					}({
						source: i,
						action: o,
						noun: s
					}, {
						media: a,
						playback: {
							...l,
							player_type: null !== (t = this.playerType) && void 0 !== t ? t : null
						},
						action_info: d,
						post: {
							id: this.postId,
							nsfw: null !== (n = this.postNsfw) && void 0 !== n && n,
							score: this.postScore,
							spoiler: null !== (r = this.postSpoiler) && void 0 !== r && r,
							subreddit_name: this.subredditName
						},
						subreddit: {
							name: this.subredditName
						}
					});
					this.trackEvent(c)
				}
				_runListener(e, t) {
					const n = t(e, this._mediaSession, this);
					n && this._dispatchEvents(n)
				}
				_dispatchEvents(e) {
					for (const t of e) xe(t) ? this.handleSessionEvent(t) : this.dispatchEvent(t)
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
					this._mediaSession = new N(this._player, t), this._createIntersectionObservers(), null === (e = this._mediaSession) || void 0 === e || e.isVisible("hidden" !== this._pageController.state)
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
					return o.c`<slot></slot>`
				}
			};

			function we(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.isOriginTrusted) && void 0 !== t && t
			}

			function xe(e) {
				return !!e.source && !!e.noun
			}

			function ke(e) {
				return O[e]
			}
			ge([Object(s.b)({
				type: String,
				attribute: "media-origin"
			})], ye.prototype, "mediaOrigin", void 0), ge([Object(s.b)({
				type: String,
				attribute: "playback-playertype"
			})], ye.prototype, "playbackPlayerType", void 0), ge([Object(s.b)({
				type: Number,
				attribute: "set"
			})], ye.prototype, "set", void 0), ge([Object(s.b)({
				type: String,
				attribute: "player-type"
			})], ye.prototype, "playerType", void 0), ge([Object(s.b)({
				type: String,
				attribute: "post-id"
			})], ye.prototype, "postId", void 0), ge([Object(s.b)({
				type: Boolean,
				attribute: "post-nsfw"
			})], ye.prototype, "postNsfw", void 0), ge([Object(s.b)({
				type: Number,
				attribute: "post-score"
			})], ye.prototype, "postScore", void 0), ge([Object(s.b)({
				type: Boolean,
				attribute: "post-spoiler"
			})], ye.prototype, "postSpoiler", void 0), ge([Object(s.b)({
				type: String,
				attribute: "subreddit-name"
			})], ye.prototype, "subredditName", void 0), ge([Object(s.b)({
				type: Boolean,
				attribute: "autoplay-event-in-view"
			})], ye.prototype, "autoplayEventInView", void 0), ye = ge([Object(s.a)("media-telemetry-observer")], ye)
		},
		"./node_modules/@reddit/shreddit.styles/dist/tailwind-build.css": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/css-loader/dist/runtime/api.js"),
				i = n.n(r)()(!1);
			i.push([e.i, "/*\n * This is a Tailwind CSS file, it must be run through the PostCSS compiler\n * with the Tailwind plugin, not Less. The `postcss-import` plugin is also\n * needed, if you have other additions to your Tailwind entry point CSS.\n *\n * @example\n * // tailwind.css\n * @import '@reddit/faceplate/styles/tailwind-components.css'\n * @tailwind components;\n * @tailwind utilities;\n *\n * // styles.less\n * @import (less) '@reddit/faceplate/faceplate.css';\n * @import (less) './tailwind-build.css';\n */\n.-translate-y-1\\/2, .-translate-x-1\\/2, .translate-x-0, .translate-y-md, .rotate-90, .scale-75, .scale-150, .scale-100, .-scale-x-100, .transform {\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n}\n.ordinal {\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n}\n.shadow-none, .shadow-sm, .shadow-md {\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n}\n.ring {\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n}\n.container {\n    width: 100%;\n}\n.\\!container {\n    width: 100% !important;\n}\n@media (min-width: 1024px) {\n    .container {\n        max-width: 1024px;\n    }\n    .\\!container {\n        max-width: 1024px !important;\n    }\n}\n/* Anchor component*/\n.a {\n    border: var(--line-a-focus) solid transparent;\n    border-radius: 2px;\n    color: var(--color-a-default);\n    font-size: 1em;\n    padding: 0 var(--spacer-a-px);\n    margin: calc(-1 * var(--line-a-focus)) calc(-1 * (var(--spacer-a-px) + var(--line-a-focus)));\n    text-decoration: none;\n  }\n.\\!a {\n    border: var(--line-a-focus) solid transparent !important;\n    border-radius: 2px !important;\n    color: var(--color-a-default) !important;\n    font-size: 1em !important;\n    padding: 0 var(--spacer-a-px) !important;\n    margin: calc(-1 * var(--line-a-focus)) calc(-1 * (var(--spacer-a-px) + var(--line-a-focus))) !important;\n    text-decoration: none !important;\n  }\n.a:hover {\n    color: var(--color-a-hover);\n  }\n.\\!a:hover {\n    color: var(--color-a-hover) !important;\n  }\n.a:visited:not(.no-visited),\n  .a.visited:not(.no-visited) {\n    color: var(--color-a-visited);\n  }\n.\\!a:visited:not(.no-visited),\n  .\\!a.visited:not(.no-visited) {\n    color: var(--color-a-visited) !important;\n  }\n.a:focus {\n    border-color: var(--color-global-focus, transparent);\n    outline: var(--line-a-outline-moz) dotted #212121;\n    outline: var(--line-a-outline-wb) auto -webkit-focus-ring-color;\n  }\n.\\!a:focus {\n    border-color: var(--color-global-focus, transparent) !important;\n    outline: var(--line-a-outline-moz) dotted #212121 !important;\n    outline: var(--line-a-outline-wb) auto -webkit-focus-ring-color !important;\n  }\n.a:focus:not(:focus-visible) {\n    border-color: transparent;\n  }\n.\\!a:focus:not(:focus-visible) {\n    border-color: transparent !important;\n  }\n/* Button component */\n.button {\n    background: var(--button-color-background);\n    border-radius: 999px;\n    border: none;\n    border: var(--button-border-width, 0) solid var(--button-border-color, transparent);\n    box-shadow: var(--button-shadow);\n    box-sizing: border-box;\n    color: var(--button-color-text);\n    cursor: pointer;\n    display: inline-block;\n    font: var(--button-font);\n    height: var(--button-height);\n    line-height: calc(var(--button-height) - (2 * var(--button-border-width, 0px)));\n    outline: none;\n    overflow: hidden;\n    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px));\n    text-align: center;\n    text-decoration: none;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    --button-border-color: var(--button-border-color-default);\n    --button-border-width: var(--button-border-width-default);\n    --button-color-background: var(--button-color-background-default);\n    --button-color-text: var(--button-color-text-default);\n    /* This is :active, AKA Pressed */\n    /* This is Selected */\n  }\n.\\!button {\n    background: var(--button-color-background) !important;\n    border-radius: 999px !important;\n    border: none !important;\n    border: var(--button-border-width, 0) solid var(--button-border-color, transparent) !important;\n    box-shadow: var(--button-shadow) !important;\n    box-sizing: border-box !important;\n    color: var(--button-color-text) !important;\n    cursor: pointer !important;\n    display: inline-block !important;\n    font: var(--button-font) !important;\n    height: var(--button-height) !important;\n    line-height: calc(var(--button-height) - (2 * var(--button-border-width, 0px))) !important;\n    outline: none !important;\n    overflow: hidden !important;\n    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px)) !important;\n    text-align: center !important;\n    text-decoration: none !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    --button-border-color: var(--button-border-color-default) !important;\n    --button-border-width: var(--button-border-width-default) !important;\n    --button-color-background: var(--button-color-background-default) !important;\n    --button-color-text: var(--button-color-text-default) !important;\n    /* This is :active, AKA Pressed */\n    /* This is Selected */\n  }\n.button .button-icon {\n    margin-right: var(--spacer-xs);\n  }\n.\\!button .button-icon {\n    margin-right: var(--spacer-xs) !important;\n  }\n.button .dropdown-icon {\n    transform: rotate(0deg);\n    transition: transform 0.2s ease-in-out;\n  }\n.\\!button .dropdown-icon {\n    transform: rotate(0deg) !important;\n    transition: transform 0.2s ease-in-out !important;\n  }\n.button:focus,\n  .button:hover {\n    --button-color-overlay: var(--color-button-overlay-focus);\n  }\n.\\!button:focus,\n  .\\!button:hover {\n    --button-color-overlay: var(--color-button-overlay-focus) !important;\n  }\n.button:hover {\n    --button-border-color: var(--button-border-color-hover);\n    --button-color-background: var(--button-color-background-hover);\n  }\n.\\!button:hover {\n    --button-border-color: var(--button-border-color-hover) !important;\n    --button-color-background: var(--button-color-background-hover) !important;\n  }\n.button:focus {\n    --button-shadow: var(--elevation-button-focus);\n  }\n.\\!button:focus {\n    --button-shadow: var(--elevation-button-focus) !important;\n  }\n.button:focus:not(:focus-visible) {\n    --button-shadow: 0 0 0 var(--line-l) transparent;\n  }\n.\\!button:focus:not(:focus-visible) {\n    --button-shadow: 0 0 0 var(--line-l) transparent !important;\n  }\n.button:active {\n    --button-color-overlay: var(--color-button-overlay-active);\n    --button-color-background: linear-gradient(var(--color-interactive-pressed), var(--color-interactive-pressed)),\n      var(--button-color-background-active);\n  }\n.\\!button:active {\n    --button-color-overlay: var(--color-button-overlay-active) !important;\n    --button-color-background: linear-gradient(var(--color-interactive-pressed), var(--color-interactive-pressed)),\n      var(--button-color-background-active) !important;\n  }\n.button:focus,\n  .button:hover,\n  .button:active {\n    position: relative;\n  }\n.\\!button:focus,\n  .\\!button:hover,\n  .\\!button:active {\n    position: relative !important;\n  }\n.button:focus::before,\n  .button:hover::before,\n  .button:active::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: block;\n    background: var(--button-color-overlay);\n    border-radius: inherit;\n    pointer-events: none;\n  }\n.\\!button:focus::before,\n  .\\!button:hover::before,\n  .\\!button:active::before {\n    content: '' !important;\n    position: absolute !important;\n    left: 0 !important;\n    right: 0 !important;\n    top: 0 !important;\n    bottom: 0 !important;\n    display: block !important;\n    background: var(--button-color-overlay) !important;\n    border-radius: inherit !important;\n    pointer-events: none !important;\n  }\n.button:disabled {\n    --button-color-background: var(--button-color-background-disabled);\n    --button-color-text: var(--button-color-text-disabled);\n    cursor: not-allowed;\n  }\n.\\!button:disabled {\n    --button-color-background: var(--button-color-background-disabled) !important;\n    --button-color-text: var(--button-color-text-disabled) !important;\n    cursor: not-allowed !important;\n  }\n.button:disabled::before {\n    display: none;\n  }\n.\\!button:disabled::before {\n    display: none !important;\n  }\n.button.button-activated {\n    --button-border-width: var(--button-border-width-activated);\n    --button-color-background: var(--button-color-background-activated);\n    --button-color-text: var(--button-color-text-activated);\n  }\n.\\!button.button-activated {\n    --button-border-width: var(--button-border-width-activated) !important;\n    --button-color-background: var(--button-color-background-activated) !important;\n    --button-color-text: var(--button-color-text-activated) !important;\n  }\n.button.button-activated span.dropdown-icon {\n    transform: rotate(180deg);\n    transition: transform 0.22s ease-in-out;\n  }\n.\\!button.button-activated span.dropdown-icon {\n    transform: rotate(180deg) !important;\n    transition: transform 0.22s ease-in-out !important;\n  }\n.button-shell {\n    background: var(--button-color-background);\n    border-radius: 999px;\n    border: none;\n    border: var(--button-border-width, 0) solid var(--button-border-color, transparent);\n    box-shadow: var(--button-shadow);\n    box-sizing: border-box;\n    color: var(--button-color-text);\n    cursor: pointer;\n    display: inline-block;\n    font: var(--button-font);\n    height: var(--button-height);\n    line-height: calc(var(--button-height) - (2 * var(--button-border-width, 0px)));\n    outline: none;\n    overflow: hidden;\n    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px));\n    text-align: center;\n    text-decoration: none;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    --button-border-color: var(--button-border-color-default);\n    --button-border-width: var(--button-border-width-default);\n    --button-color-background: var(--button-color-background-default);\n    --button-color-text: var(--button-color-text-default);\n  }\n.button-large {\n    --button-height: var(--size-button-lg-h);\n    --button-padding: var(--spacer-xs);\n    --button-font: var(--font-button-lg);\n    --button-border-width-default: var(--line-button-lg-border);\n    --button-border-width-activated: var(--line-button-border-activated);\n  }\n.button-medium {\n    --button-height: var(--size-button-md-h);\n    --button-padding: var(--spacer-xs);\n    --button-font: var(--font-button-md);\n    --button-border-width-default: var(--line-button-md-border);\n    --button-border-width-activated: var(--line-button-border-activated);\n  }\n.button-small {\n    --button-height: var(--size-button-sm-h);\n    --button-padding: var(--spacer-2xs);\n    --button-font: var(--font-button-sm);\n    --button-border-width-default: var(--line-button-sm-border);\n    --button-border-width-activated: var(--line-button-border-activated);\n  }\n.button-x-small {\n    --button-height: var(--size-button-xs-h);\n    --button-padding: var(--spacer-sm);\n    --button-font: var(--font-button-xs);\n    --button-border-width-default: var(--line-button-xs-border);\n    --button-border-width-activated: var(--line-button-border-activated);\n  }\n.button-icon {\n    --button-padding: 0;\n    width: var(--button-height);\n  }\n.button-primary {\n    --button-color-background-default: var(--color-primary-background);\n    --button-color-background-focus: var(--color-primary-background);\n    --button-color-background-hover: var(--color-button-primary-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-button-primary-background-hover), var(--color-button-primary-background-hover));\n    --button-color-background-disabled: var(--color-button-primary-background-disabled);\n    --button-color-background-activated: var(--color-global-white);\n    --button-color-text-default: var(--color-global-white);\n    --button-color-text-disabled: var(--color-button-primary-text-disabled);\n    --button-color-text-activated: var(--color-button-primary-text-activated);\n    --button-border-color-default: transparent;\n  }\n.button-secondary {\n    --button-color-background-default: var(--color-button-secondary-background);\n    --button-color-background-focus: var(--color-button-secondary-background-focus);\n    --button-color-background-hover: var(--color-button-secondary-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-button-secondary-background-hover), var(--color-button-secondary-background-hover));\n    --button-color-background-disabled: var(--color-button-secondary-background-disabled);\n    --button-color-background-activated: var(--color-button-secondary-background-activated);\n    --button-color-text-default: var(--color-button-secondary-text);\n    --button-color-text-disabled: var(--color-button-secondary-text-disabled);\n    --button-color-text-activated: var(--color-button-secondary-text-activated);\n    --button-border-color-default: var(--color-button-secondary-border);\n  }\n.button-tertiary {\n    --button-color-background-default: var(--color-button-tertiary-background);\n    --button-color-background-focus: var(--color-button-tertiary-background-focus);\n    --button-color-background-hover: var(--color-button-tertiary-background-hover);\n    --button-color-background-disabled: var(--color-button-tertiary-background-disabled);\n    --button-color-background-activated: var(--color-button-tertiary-background-activated);\n    --button-color-text-default: var(--color-button-tertiary-text);\n    --button-color-text-disabled: var(--color-button-tertiary-text-disabled);\n    --button-color-text-activated: var(--color-button-tertiary-text-activated);\n    --button-border-color-default: transparent;\n  }\n.button-plain {\n    --button-color-background-default: transparent;\n    --button-color-background-focus: transparent;\n    --button-color-background-hover: var(--color-button-plain-background-hover);\n    --button-color-background-disabled: var(--color-button-plain-background-disabled);\n    --button-color-background-activated: var(--color-button-plain-background-activated);\n    --button-color-background-active: linear-gradient(var(--color-button-secondary-background-hover), var(--color-button-secondary-background-hover));\n    --button-color-text-default: var(--color-button-plain-text);\n    --button-color-text-disabled: var(--color-button-plain-text-disabled);\n    --button-color-text-activated: var(--color-button-plain-text-activated);\n    --button-border-color-default: transparent;\n  }\n.button-outline {\n    --button-color-background-default: transparent;\n    --button-color-background-focus: transparent;\n    --button-color-background-hover: transparent;\n    --button-color-background-active: linear-gradient(transparent, transparent);\n    --button-color-background-disabled: transparent;\n    --button-color-background-activated: transparent;\n    --button-color-text-default: var(--color-neutral-content);\n    --button-color-text-disabled: var(--color-neutral-content-disabled);\n    --button-color-text-activated: var(--color-neutral-content-strong);\n    --button-border-color-default: var(--color-neutral-content-weak);\n    --button-border-color-hover: var(--color-neutral-content-disabled);\n    --button-border-color-active: var(--color-neutral-content);\n    --button-border-color-activated: var(--color-neutral-content-strong);\n    --button-border-color-disabled: var(--color-neutral-content-disabled);\n    --button-border-width-default: var(--line-md);\n    --button-border-width-activated: var(--line-md);\n  }\n.button-destructive {\n    --button-color-background-default: var(--color-danger-background);\n    --button-color-background-focus: var(--color-danger-background-hover);\n    --button-color-background-hover: var(--color-danger-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-danger-background-hover), var(--color-danger-background-hover));\n    --button-color-background-disabled: var(--color-danger-background);\n    --button-color-text-default: var(--color-danger-content-default);\n    --button-color-text-disabled: var(--color-danger-content-default);\n    --button-border-color-default: transparent;\n    --button-border-color-hover: transparent;\n    --button-border-color-active: transparent;\n  }\n.button-media {\n    --button-color-background-default: var(--color-media-background);\n    --button-color-background-focus: var(--color-media-background-hover);\n    --button-color-background-hover: var(--color-media-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-media-background-hover), var(--color-media-background-hover));\n    --button-color-text-default: white;\n    --button-color-text-disabled: var(--color-media-onbackground-disabled);\n    --button-color-background-disabled: var(--color-media-background);\n  }\n.button-brand {\n    --button-color-background-default: var(--color-brand-background);\n    --button-color-background-hover: var(--color-brand-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-brand-background-hover), var(--color-brand-background-hover));\n    --button-color-background-disabled: var(--color-neutral-background-disabled);\n    --button-color-text-default: var(--color-danger-content-default);\n    --button-color-text-disabled: var(--color-neutral-content-disabled);\n    --button-border-color-default: transparent;\n    --button-border-width-default: 0px;\n  }\n.button-success {\n    --button-color-background-default: var(--color-success-background);\n    --button-color-background-focus: var(--color-success-background-hover);\n    --button-color-background-hover: var(--color-success-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-success-background-hover), var(--color-success-background-hover));\n    --button-color-background-disabled: var(--color-button-primary-background-disabled);\n    --button-color-text-default: var(--color-success-onBackground);\n    --button-color-text-disabled: var(--color-button-primary-text-disabled);\n    --button-border-color-default: transparent;\n  }\n.button-plain-inverted {\n    --button-color-background-default: transparent;\n    --button-color-background-focus: var(--color-neutral-content);\n    --button-color-background-hover: var(--color-neutral-content);\n    --button-color-background-active: var(--color-interactive-pressed);\n    --button-color-background-disabled: transparent;\n    --button-color-text-default: var(--color-neutral-background-weak);\n    --button-color-text-disabled: var(--color-neutral-content);\n    --button-border-color-default: transparent;\n  }\n/* Featured avatar */\n.featured-avatar-xs {\n    --featured-avatar-xs-size: var(--rem48);\n    height: var(--featured-avatar-xs-size);\n    width: var(--featured-avatar-xs-size);\n  }\n.featured-avatar-sm {\n    --featured-avatar-sm-size: var(--rem64);\n    height: var(--featured-avatar-sm-size);\n    width: var(--featured-avatar-sm-size);\n  }\n.featured-avatar-md {\n    --featured-avatar-md-size: var(--rem88);\n    height: var(--featured-avatar-md-size);\n    width: var(--featured-avatar-md-size);\n  }\n.featured-avatar-lg {\n    --featured-avatar-lg-size: var(--rem144);\n    height: var(--featured-avatar-lg-size);\n    width: var(--featured-avatar-lg-size);\n  }\n.featured-avatar-xl {\n    --featured-avatar-xl-size: var(--rem192);\n    height: var(--featured-avatar-xl-size);\n    width: var(--featured-avatar-xl-size);\n  }\n.featured-avatar-2xl {\n    --featured-avatar-2xl-size: var(--rem320);\n    height: var(--featured-avatar-2xl-size);\n    width: var(--featured-avatar-2xl-size);\n  }\n.pointer-events-none {\n    pointer-events: none;\n}\n.pointer-events-auto {\n    pointer-events: auto;\n}\n.visible {\n    visibility: visible;\n}\n.\\!visible {\n    visibility: visible !important;\n}\n.invisible {\n    visibility: hidden;\n}\n.static {\n    position: static;\n}\n.fixed {\n    position: fixed;\n}\n.absolute {\n    position: absolute;\n}\n.relative {\n    position: relative;\n}\n.sticky {\n    position: sticky;\n}\n.\\!sticky {\n    position: sticky !important;\n}\n.inset-0 {\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n}\n.top-0 {\n    top: 0px;\n}\n.left-0 {\n    left: 0px;\n}\n.right-0 {\n    right: 0px;\n}\n.top-1\\/2 {\n    top: 50%;\n}\n.bottom-2xl {\n    bottom: 3rem;\n}\n.left-1\\/2 {\n    left: 50%;\n}\n.bottom-0 {\n    bottom: 0px;\n}\n.left-xs {\n    left: 0.5rem;\n}\n.top-2xs {\n    top: 0.25rem;\n}\n.right-2xs {\n    right: 0.25rem;\n}\n.right-xs {\n    right: 0.5rem;\n}\n.right-sm {\n    right: 0.75rem;\n}\n.top-sm {\n    top: 0.75rem;\n}\n.left-md {\n    left: 1rem;\n}\n.top-md {\n    top: 1rem;\n}\n.top-100 {\n    top: 100%;\n}\n.left-lg {\n    left: 1.5rem;\n}\n.top-3xl {\n    top: 4rem;\n}\n.-right-\\[0\\.0625rem\\] {\n    right: -0.0625rem;\n}\n.-right-\\[0\\.0825rem\\] {\n    right: -0.0825rem;\n}\n.-right-\\[0\\.125rem\\] {\n    right: -0.125rem;\n}\n.-right-\\[\\.65rem\\] {\n    right: -.65rem;\n}\n.-right-\\[\\.75rem\\] {\n    right: -.75rem;\n}\n.isolate {\n    isolation: isolate;\n}\n.z-\\[80\\] {\n    z-index: 80;\n}\n.z-0 {\n    z-index: 0;\n}\n.z-10 {\n    z-index: 10;\n}\n.z-20 {\n    z-index: 20;\n}\n.z-50 {\n    z-index: 50;\n}\n.z-\\[2\\] {\n    z-index: 2;\n}\n.z-\\[3\\] {\n    z-index: 3;\n}\n.col-span-full {\n    grid-column: 1 / -1;\n}\n.col-span-6 {\n    grid-column: span 6 / span 6;\n}\n.col-span-1 {\n    grid-column: span 1 / span 1;\n}\n.col-span-4 {\n    grid-column: span 4 / span 4;\n}\n.col-span-2 {\n    grid-column: span 2 / span 2;\n}\n.col-start-2 {\n    grid-column-start: 2;\n}\n.col-start-3 {\n    grid-column-start: 3;\n}\n.col-start-1 {\n    grid-column-start: 1;\n}\n.col-end-1 {\n    grid-column-end: 1;\n}\n.col-end-4 {\n    grid-column-end: 4;\n}\n.col-end-2 {\n    grid-column-end: 2;\n}\n.row-start-1 {\n    grid-row-start: 1;\n}\n.row-end-auto {\n    grid-row-end: auto;\n}\n.float-right {\n    float: right;\n}\n.m-xs {\n    margin: 0.5rem;\n}\n.m-0 {\n    margin: 0px;\n}\n.m-auto {\n    margin: auto;\n}\n.m-sm {\n    margin: 0.75rem;\n}\n.m-md {\n    margin: 1rem;\n}\n.mx-sm {\n    margin-left: 0.75rem;\n    margin-right: 0.75rem;\n}\n.mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n}\n.mx-xs {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n}\n.mx-md {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n.my-sm {\n    margin-top: 0.75rem;\n    margin-bottom: 0.75rem;\n}\n.my-0 {\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.mx-2xs {\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n}\n.-mx-md {\n    margin-left: -1rem;\n    margin-right: -1rem;\n}\n.mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n}\n.my-md {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n.my-xs {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n}\n.ml-2xs {\n    margin-left: 0.25rem;\n}\n.mr-2xs {\n    margin-right: 0.25rem;\n}\n.ml-sm {\n    margin-left: 0.75rem;\n}\n.mt-sm {\n    margin-top: 0.75rem;\n}\n.ml-xs {\n    margin-left: 0.5rem;\n}\n.mr-sm {\n    margin-right: 0.75rem;\n}\n.mt-md {\n    margin-top: 1rem;\n}\n.ml-auto {\n    margin-left: auto;\n}\n.mb-0 {\n    margin-bottom: 0px;\n}\n.mb-md {\n    margin-bottom: 1rem;\n}\n.mt-lg {\n    margin-top: 1.5rem;\n}\n.mb-lg {\n    margin-bottom: 1.5rem;\n}\n.mt-2xs {\n    margin-top: 0.25rem;\n}\n.mt-0 {\n    margin-top: 0px;\n}\n.mt-xs {\n    margin-top: 0.5rem;\n}\n.mr-xs {\n    margin-right: 0.5rem;\n}\n.mb-xs {\n    margin-bottom: 0.5rem;\n}\n.mb-sm {\n    margin-bottom: 0.75rem;\n}\n.mt-xl {\n    margin-top: 2rem;\n}\n.-mt-xl {\n    margin-top: -2rem;\n}\n.mr-0 {\n    margin-right: 0px;\n}\n.mb-2xs {\n    margin-bottom: 0.25rem;\n}\n.ml-md {\n    margin-left: 1rem;\n}\n.mr-md {\n    margin-right: 1rem;\n}\n.-ml-sm {\n    margin-left: -0.75rem;\n}\n.mr-auto {\n    margin-right: auto;\n}\n.ml-0 {\n    margin-left: 0px;\n}\n.-ml-md {\n    margin-left: -1rem;\n}\n.-mt-sm {\n    margin-top: -0.75rem;\n}\n.mb-2xl {\n    margin-bottom: 3rem;\n}\n.ml-px {\n    margin-left: 1px;\n}\n.ml-xl {\n    margin-left: 2rem;\n}\n.-ml-\\[var\\(--rem4\\)\\] {\n    margin-left: calc(var(--rem4) * -1);\n}\n.-ml-\\[var\\(--rem6\\)\\] {\n    margin-left: calc(var(--rem6) * -1);\n}\n.-ml-\\[var\\(--rem8\\)\\] {\n    margin-left: calc(var(--rem8) * -1);\n}\n.-ml-\\[var\\(--rem10\\)\\] {\n    margin-left: calc(var(--rem10) * -1);\n}\n.-ml-\\[var\\(--rem12\\)\\] {\n    margin-left: calc(var(--rem12) * -1);\n}\n.-ml-\\[var\\(--rem14\\)\\] {\n    margin-left: calc(var(--rem14) * -1);\n}\n.-ml-\\[var\\(--rem16\\)\\] {\n    margin-left: calc(var(--rem16) * -1);\n}\n.-ml-\\[var\\(--rem18\\)\\] {\n    margin-left: calc(var(--rem18) * -1);\n}\n.-ml-\\[var\\(--rem20\\)\\] {\n    margin-left: calc(var(--rem20) * -1);\n}\n.mr-\\[length\\:var\\(--rem6\\)\\] {\n    margin-right: var(--rem6);\n}\n.mt-\\[-0\\.125rem\\] {\n    margin-top: -0.125rem;\n}\n.ml-\\[-\\.25rem\\] {\n    margin-left: -.25rem;\n}\n.mt-\\[-0\\.25rem\\] {\n    margin-top: -0.25rem;\n}\n.box-border {\n    box-sizing: border-box;\n}\n.block {\n    display: block;\n}\n.\\!block {\n    display: block !important;\n}\n.inline-block {\n    display: inline-block;\n}\n.inline {\n    display: inline;\n}\n.flex {\n    display: flex;\n}\n.inline-flex {\n    display: inline-flex;\n}\n.table {\n    display: table;\n}\n.\\!table {\n    display: table !important;\n}\n.table-cell {\n    display: table-cell;\n}\n.grid {\n    display: grid;\n}\n.contents {\n    display: contents;\n}\n.list-item {\n    display: list-item;\n}\n.hidden {\n    display: none;\n}\n.\\!hidden {\n    display: none !important;\n}\n.aspect-square {\n    aspect-ratio: 1 / 1;\n}\n.h-full {\n    height: 100%;\n}\n.h-3xl {\n    height: 4rem;\n}\n.h-2xl {\n    height: 3rem;\n}\n.h-2xs {\n    height: 0.25rem;\n}\n.h-lg {\n    height: 1.5rem;\n}\n.h-md {\n    height: 1rem;\n}\n.h-sm {\n    height: 0.75rem;\n}\n.h-xs {\n    height: 0.5rem;\n}\n.h-px {\n    height: 1px;\n}\n.h-auto {\n    height: auto;\n}\n.h-xl {\n    height: 2rem;\n}\n.h-4xl {\n    height: 6rem;\n}\n.h-100 {\n    height: 100%;\n}\n.h-screen {\n    height: 100vh;\n}\n.h-0 {\n    height: 0px;\n}\n.h-\\[1rem\\] {\n    height: 1rem;\n}\n.h-\\[1\\.25rem\\] {\n    height: 1.25rem;\n}\n.h-\\[1\\.5rem\\] {\n    height: 1.5rem;\n}\n.h-\\[2rem\\] {\n    height: 2rem;\n}\n.h-\\[2\\.5rem\\] {\n    height: 2.5rem;\n}\n.h-\\[3rem\\] {\n    height: 3rem;\n}\n.h-\\[2\\.87rem\\] {\n    height: 2.87rem;\n}\n.h-\\[3\\.25rem\\] {\n    height: 3.25rem;\n}\n.h-\\[4\\.5rem\\] {\n    height: 4.5rem;\n}\n.h-\\[3\\.5rem\\] {\n    height: 3.5rem;\n}\n.h-\\[4rem\\] {\n    height: 4rem;\n}\n.h-\\[5\\.5rem\\] {\n    height: 5.5rem;\n}\n.h-\\[\\.25rem\\] {\n    height: .25rem;\n}\n.h-\\[\\.375rem\\] {\n    height: .375rem;\n}\n.h-\\[\\.625rem\\] {\n    height: .625rem;\n}\n.h-\\[length\\:var\\(--size-button-md-h\\)\\] {\n    height: var(--size-button-md-h);\n}\n.max-h-full {\n    max-height: 100%;\n}\n.max-h-\\[240px\\] {\n    max-height: 240px;\n}\n.max-h-\\[253px\\] {\n    max-height: 253px;\n}\n.min-h-\\[20px\\] {\n    min-height: 20px;\n}\n.min-h-screen {\n    min-height: 100vh;\n}\n.min-h-full {\n    min-height: 100%;\n}\n.min-h-\\[1rem\\] {\n    min-height: 1rem;\n}\n.w-100 {\n    width: 100%;\n}\n.w-full {\n    width: 100%;\n}\n.w-3xl {\n    width: 4rem;\n}\n.w-lg {\n    width: 1.5rem;\n}\n.w-md {\n    width: 1rem;\n}\n.w-xs {\n    width: 0.5rem;\n}\n.w-5xl {\n    width: 8rem;\n}\n.w-xl {\n    width: 2rem;\n}\n.w-fit {\n    width: fit-content;\n}\n.w-auto {\n    width: auto;\n}\n.w-screen {\n    width: 100vw;\n}\n.w-2xl {\n    width: 3rem;\n}\n.w-px {\n    width: 1px;\n}\n.w-\\[1rem\\] {\n    width: 1rem;\n}\n.w-\\[1\\.25rem\\] {\n    width: 1.25rem;\n}\n.w-\\[1\\.5rem\\] {\n    width: 1.5rem;\n}\n.w-\\[2rem\\] {\n    width: 2rem;\n}\n.w-\\[2\\.5rem\\] {\n    width: 2.5rem;\n}\n.w-\\[3rem\\] {\n    width: 3rem;\n}\n.w-\\[2\\.87rem\\] {\n    width: 2.87rem;\n}\n.w-\\[3\\.25rem\\] {\n    width: 3.25rem;\n}\n.w-\\[4\\.5rem\\] {\n    width: 4.5rem;\n}\n.w-\\[3\\.5rem\\] {\n    width: 3.5rem;\n}\n.w-\\[4rem\\] {\n    width: 4rem;\n}\n.w-\\[5\\.5rem\\] {\n    width: 5.5rem;\n}\n.w-\\[\\.25rem\\] {\n    width: .25rem;\n}\n.w-\\[\\.375rem\\] {\n    width: .375rem;\n}\n.w-\\[\\.625rem\\] {\n    width: .625rem;\n}\n.min-w-\\[20px\\] {\n    min-width: 20px;\n}\n.min-w-0 {\n    min-width: 0px;\n}\n.min-w-full {\n    min-width: 100%;\n}\n.min-w-\\[0\\.5rem\\] {\n    min-width: 0.5rem;\n}\n.max-w-full {\n    max-width: 100%;\n}\n.max-w-\\[240px\\] {\n    max-width: 240px;\n}\n.max-w-none {\n    max-width: none;\n}\n.max-w-\\[480px\\] {\n    max-width: 480px;\n}\n.flex-1 {\n    flex: 1 1 0%;\n}\n.flex-auto {\n    flex: 1 1 auto;\n}\n.flex-none {\n    flex: none;\n}\n.flex-shrink-0 {\n    flex-shrink: 0;\n}\n.flex-shrink {\n    flex-shrink: 1;\n}\n.shrink {\n    flex-shrink: 1;\n}\n.shrink-0 {\n    flex-shrink: 0;\n}\n.flex-grow-0 {\n    flex-grow: 0;\n}\n.flex-grow {\n    flex-grow: 1;\n}\n.grow {\n    flex-grow: 1;\n}\n.grow-0 {\n    flex-grow: 0;\n}\n.basis-0 {\n    flex-basis: 0px;\n}\n.basis-2xl {\n    flex-basis: 3rem;\n}\n.basis-full {\n    flex-basis: 100%;\n}\n.border-separate {\n    border-collapse: separate;\n}\n.-translate-y-1\\/2 {\n    --tw-translate-y: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-1\\/2 {\n    --tw-translate-x: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-0 {\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-md {\n    --tw-translate-y: 1rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-90 {\n    --tw-rotate: 90deg;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-75 {\n    --tw-scale-x: .75;\n    --tw-scale-y: .75;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-150 {\n    --tw-scale-x: 1.5;\n    --tw-scale-y: 1.5;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-100 {\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-scale-x-100 {\n    --tw-scale-x: -1;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform-gpu {\n    transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n.animate-spin {\n    animation: spin 1s linear infinite;\n}\n.cursor-pointer {\n    cursor: pointer;\n}\n.cursor-default {\n    cursor: default;\n}\n.cursor-none {\n    cursor: none;\n}\n.select-none {\n    user-select: none;\n}\n.resize-y {\n    resize: vertical;\n}\n.resize {\n    resize: both;\n}\n.list-none {\n    list-style-type: none;\n}\n.columns-1 {\n    columns: 1;\n}\n.grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n}\n.grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.flex-row {\n    flex-direction: row;\n}\n.flex-col {\n    flex-direction: column;\n}\n.flex-wrap {\n    flex-wrap: wrap;\n}\n.flex-nowrap {\n    flex-wrap: nowrap;\n}\n.items-start {\n    align-items: flex-start;\n}\n.items-end {\n    align-items: flex-end;\n}\n.items-center {\n    align-items: center;\n}\n.items-stretch {\n    align-items: stretch;\n}\n.justify-start {\n    justify-content: flex-start;\n}\n.justify-end {\n    justify-content: flex-end;\n}\n.justify-center {\n    justify-content: center;\n}\n.justify-between {\n    justify-content: space-between;\n}\n.justify-around {\n    justify-content: space-around;\n}\n.justify-items-start {\n    justify-items: start;\n}\n.justify-items-center {\n    justify-items: center;\n}\n.gap-xs {\n    gap: 0.5rem;\n}\n.gap-sm {\n    gap: 0.75rem;\n}\n.gap-md {\n    gap: 1rem;\n}\n.gap-2xs {\n    gap: 0.25rem;\n}\n.gap-\\[1rem\\] {\n    gap: 1rem;\n}\n.gap-\\[length\\:var\\(--rem12\\)\\] {\n    gap: var(--rem12);\n}\n.gap-x-md {\n    column-gap: 1rem;\n}\n.self-end {\n    align-self: flex-end;\n}\n.self-center {\n    align-self: center;\n}\n.self-baseline {\n    align-self: baseline;\n}\n.overflow-auto {\n    overflow: auto;\n}\n.overflow-hidden {\n    overflow: hidden;\n}\n.overflow-visible {\n    overflow: visible;\n}\n.overflow-scroll {\n    overflow: scroll;\n}\n.overflow-y-auto {\n    overflow-y: auto;\n}\n.overflow-x-hidden {\n    overflow-x: hidden;\n}\n.overflow-x-scroll {\n    overflow-x: scroll;\n}\n.scroll-smooth {\n    scroll-behavior: smooth;\n}\n.truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.overflow-ellipsis {\n    text-overflow: ellipsis;\n}\n.text-ellipsis {\n    text-overflow: ellipsis;\n}\n.whitespace-normal {\n    white-space: normal;\n}\n.whitespace-nowrap {\n    white-space: nowrap;\n}\n.break-normal {\n    overflow-wrap: normal;\n    word-break: normal;\n}\n.rounded-sm {\n    border-radius: 0.25rem;\n}\n.rounded-full {\n    border-radius: 624.9375rem;\n}\n.rounded-lg {\n    border-radius: 2rem;\n}\n.rounded-none {\n    border-radius: 0rem;\n}\n.rounded-\\[\\.5rem\\] {\n    border-radius: .5rem;\n}\n.rounded-l-sm {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n}\n.rounded-t-lg {\n    border-top-left-radius: 2rem;\n    border-top-right-radius: 2rem;\n}\n.rounded-r-sm {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n}\n.rounded-r-lg {\n    border-top-right-radius: 2rem;\n    border-bottom-right-radius: 2rem;\n}\n.rounded-b-none {\n    border-bottom-right-radius: 0rem;\n    border-bottom-left-radius: 0rem;\n}\n.rounded-br-none {\n    border-bottom-right-radius: 0rem;\n}\n.border {\n    border-width: 0.0625rem;\n}\n.border-sm {\n    border-width: 0.0625rem;\n}\n.border-lg {\n    border-width: 0.25rem;\n}\n.border-0 {\n    border-width: 0rem;\n}\n.border-md {\n    border-width: 0.125rem;\n}\n.border-y-sm {\n    border-top-width: 0.0625rem;\n    border-bottom-width: 0.0625rem;\n}\n.border-x-0 {\n    border-left-width: 0rem;\n    border-right-width: 0rem;\n}\n.border-y-0 {\n    border-top-width: 0rem;\n    border-bottom-width: 0rem;\n}\n.border-r-sm {\n    border-right-width: 0.0625rem;\n}\n.border-t-sm {\n    border-top-width: 0.0625rem;\n}\n.border-b-0 {\n    border-bottom-width: 0rem;\n}\n.border-r-0 {\n    border-right-width: 0rem;\n}\n.border-l-0 {\n    border-left-width: 0rem;\n}\n.border-b-sm {\n    border-bottom-width: 0.0625rem;\n}\n.border-t-0 {\n    border-top-width: 0rem;\n}\n.border-t {\n    border-top-width: 0.0625rem;\n}\n.border-l-sm {\n    border-left-width: 0.0625rem;\n}\n.border-b {\n    border-bottom-width: 0.0625rem;\n}\n.border-r-md {\n    border-right-width: 0.125rem;\n}\n.border-r {\n    border-right-width: 0.0625rem;\n}\n.border-l-lg {\n    border-left-width: 0.25rem;\n}\n.border-solid {\n    border-style: solid;\n}\n.border-none {\n    border-style: none;\n}\n.border-global-white {\n    border-color: var(--color-global-white);\n}\n.border-tone-2 {\n    border-color: var(--color-tone-2);\n}\n.border-neutral-content {\n    border-color: var(--color-neutral-content);\n}\n.border-tone-4 {\n    border-color: var(--color-tone-4);\n}\n.border-action-secondary {\n    border-color: var(--color-action-secondary);\n}\n.border-tone-7 {\n    border-color: var(--color-tone-7);\n}\n.border-neutral-border-weak {\n    border-color: var(--color-neutral-border-weak);\n}\n.border-tone-5 {\n    border-color: var(--color-tone-5);\n}\n.border-danger-content {\n    border-color: var(--color-danger-content);\n}\n.border-tone-6 {\n    border-color: var(--color-tone-6);\n}\n.border-tone-3 {\n    border-color: var(--color-tone-3);\n}\n.border-coolgray-350 {\n    --tw-border-opacity: 1;\n    border-color: rgb(184 197 201 / var(--tw-border-opacity));\n}\n.border-transparent {\n    border-color: transparent;\n}\n.border-alert-negative {\n    border-color: var(--color-alert-negative);\n}\n.border-white {\n    --tw-border-opacity: 1;\n    border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.border-global-orangered {\n    border-color: var(--color-global-orangered);\n}\n.border-neutral-border {\n    border-color: var(--color-neutral-border);\n}\n.border-neutral-border-medium {\n    border-color: var(--color-neutral-border-medium);\n}\n.border-coolgray-100 {\n    --tw-border-opacity: 1;\n    border-color: rgb(242 244 245 / var(--tw-border-opacity));\n}\n.border-action-primary {\n    border-color: var(--color-action-primary);\n}\n.border-alert-caution {\n    border-color: var(--color-alert-caution);\n}\n.border-neutral-background {\n    border-color: var(--color-neutral-background);\n}\n.border-secondary-background-selected {\n    border-color: var(--color-secondary-background-selected);\n}\n.border-action-upvote {\n    border-color: var(--color-action-upvote);\n}\n.border-action-downvote {\n    border-color: var(--color-action-downvote);\n}\n.border-r-neutral-border-weak {\n    border-right-color: var(--color-neutral-border-weak);\n}\n.bg-neutral-background-disabled {\n    background-color: var(--color-neutral-background-disabled);\n}\n.bg-black {\n    --tw-bg-opacity: 1;\n    background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n.bg-white {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-opacity-50 {\n    background-color: var(--color-opacity-50);\n}\n.bg-scrim {\n    background-color: var(--color-scrim);\n}\n.bg-tone-7 {\n    background-color: var(--color-tone-7);\n}\n.bg-transparent {\n    background-color: transparent;\n}\n.bg-tone-6 {\n    background-color: var(--color-tone-6);\n}\n.bg-tone-4 {\n    background-color: var(--color-tone-4);\n}\n.bg-neutral-background {\n    background-color: var(--color-neutral-background);\n}\n.bg-ui-modalbackground {\n    background-color: var(--color-ui-modalbackground);\n}\n.bg-tone-5 {\n    background-color: var(--color-tone-5);\n}\n.bg-neutral-background-weak {\n    background-color: var(--color-neutral-background-weak);\n}\n.bg-tone-1 {\n    background-color: var(--color-tone-1);\n}\n.bg-global-orangered {\n    background-color: var(--color-global-orangered);\n}\n.bg-secondary-background {\n    background-color: var(--color-secondary-background);\n}\n.bg-neutral-background-hover {\n    background-color: var(--color-neutral-background-hover);\n}\n.bg-primary-background {\n    background-color: var(--color-primary-background);\n}\n.bg-global-white {\n    background-color: var(--color-global-white);\n}\n.bg-brand-background {\n    background-color: var(--color-brand-background);\n}\n.bg-global-alienblue {\n    background-color: var(--color-global-alienblue);\n}\n.bg-secondary-weak {\n    background-color: var(--color-secondary-weak);\n}\n.bg-kiwigreen-400 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(85 189 70 / var(--tw-bg-opacity));\n}\n.bg-kiwigreen-600 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(10 96 0 / var(--tw-bg-opacity));\n}\n.bg-yelloworange-400 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 156 26 / var(--tw-bg-opacity));\n}\n.bg-action-primary {\n    background-color: var(--color-action-primary);\n}\n.bg-orangered-300 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 190 166 / var(--tw-bg-opacity));\n}\n.bg-coolgray-200 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(226 231 233 / var(--tw-bg-opacity));\n}\n.bg-online {\n    background-color: var(--color-online);\n}\n.bg-secondary-background-selected {\n    background-color: var(--color-secondary-background-selected);\n}\n.bg-warning-content {\n    background-color: var(--color-warning-content);\n}\n.bg-success-content {\n    background-color: var(--color-success-content);\n}\n.bg-neutral-content {\n    background-color: var(--color-neutral-content);\n}\n.bg-danger-content {\n    background-color: var(--color-danger-content);\n}\n.bg-neutral-content-disabled {\n    background-color: var(--color-neutral-content-disabled);\n}\n.bg-brand-onBackground {\n    background-color: var(--color-brand-onBackground);\n}\n.bg-action-upvote {\n    background-color: var(--color-action-upvote);\n}\n.bg-action-downvote {\n    background-color: var(--color-action-downvote);\n}\n.bg-interactive-background-disabled {\n    background-color: var(--color-interactive-background-disabled);\n}\n.bg-\\[color\\:var\\(--color-button-plain-background-disabled\\)\\] {\n    background-color: var(--color-button-plain-background-disabled);\n}\n.bg-opacity-25 {\n    --tw-bg-opacity: 0.25;\n}\n.bg-opacity-50 {\n    --tw-bg-opacity: 0.5;\n}\n.bg-gradient-to-r {\n    background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.bg-gradient-to-l {\n    background-image: linear-gradient(to left, var(--tw-gradient-stops));\n}\n.bg-gradient-to-t {\n    background-image: linear-gradient(to top, var(--tw-gradient-stops));\n}\n.from-white {\n    --tw-gradient-from: #ffffff;\n    --tw-gradient-to: rgb(255 255 255 / 0);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-transparent {\n    --tw-gradient-from: transparent;\n    --tw-gradient-to: rgb(0 0 0 / 0);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.via-white {\n    --tw-gradient-to: rgb(255 255 255 / 0);\n    --tw-gradient-stops: var(--tw-gradient-from), #ffffff, var(--tw-gradient-to);\n}\n.fill-brand-background {\n    fill: var(--color-brand-background);\n}\n.fill-current {\n    fill: currentColor;\n}\n.stroke-tone-2 {\n    stroke: var(--color-tone-2);\n}\n.object-contain {\n    object-fit: contain;\n}\n.p-px {\n    padding: 1px;\n}\n.p-0 {\n    padding: 0px;\n}\n.p-sm {\n    padding: 0.75rem;\n}\n.p-md {\n    padding: 1rem;\n}\n.p-2xs {\n    padding: 0.25rem;\n}\n.p-xs {\n    padding: 0.5rem;\n}\n.p-lg {\n    padding: 1.5rem;\n}\n.px-2xs {\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n}\n.py-lg {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n}\n.px-sm {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n}\n.px-md {\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n.py-xs {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n}\n.py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n}\n.py-2xs {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n}\n.px-2xl {\n    padding-left: 3rem;\n    padding-right: 3rem;\n}\n.px-xs {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n}\n.px-lg {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n}\n.py-sm {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n}\n.py-md {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n.px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n.px-\\[length\\:var\\(--rem10\\)\\] {\n    padding-left: var(--rem10);\n    padding-right: var(--rem10);\n}\n.px-\\[length\\:var\\(--rem6\\)\\] {\n    padding-left: var(--rem6);\n    padding-right: var(--rem6);\n}\n.px-\\[length\\:var\\(--rem14\\)\\] {\n    padding-left: var(--rem14);\n    padding-right: var(--rem14);\n}\n.px-\\[length\\:var\\(--rem8\\)\\] {\n    padding-left: var(--rem8);\n    padding-right: var(--rem8);\n}\n.px-\\[length\\:var\\(--rem12\\)\\] {\n    padding-left: var(--rem12);\n    padding-right: var(--rem12);\n}\n.py-\\[length\\:var\\(--rem2\\)\\] {\n    padding-top: var(--rem2);\n    padding-bottom: var(--rem2);\n}\n.py-\\[length\\:var\\(--rem8\\)\\] {\n    padding-top: var(--rem8);\n    padding-bottom: var(--rem8);\n}\n.py-\\[length\\:var\\(--rem10\\)\\] {\n    padding-top: var(--rem10);\n    padding-bottom: var(--rem10);\n}\n.py-\\[length\\:var\\(--rem14\\)\\] {\n    padding-top: var(--rem14);\n    padding-bottom: var(--rem14);\n}\n.pl-sm {\n    padding-left: 0.75rem;\n}\n.pt-0 {\n    padding-top: 0px;\n}\n.pr-0 {\n    padding-right: 0px;\n}\n.pt-px {\n    padding-top: 1px;\n}\n.pt-xs {\n    padding-top: 0.5rem;\n}\n.pl-xs {\n    padding-left: 0.5rem;\n}\n.pr-xs {\n    padding-right: 0.5rem;\n}\n.pt-sm {\n    padding-top: 0.75rem;\n}\n.pb-lg {\n    padding-bottom: 1.5rem;\n}\n.pb-sm {\n    padding-bottom: 0.75rem;\n}\n.pb-xs {\n    padding-bottom: 0.5rem;\n}\n.pl-2xs {\n    padding-left: 0.25rem;\n}\n.pr-sm {\n    padding-right: 0.75rem;\n}\n.pl-lg {\n    padding-left: 1.5rem;\n}\n.pr-lg {\n    padding-right: 1.5rem;\n}\n.pl-md {\n    padding-left: 1rem;\n}\n.pt-md {\n    padding-top: 1rem;\n}\n.pr-2xs {\n    padding-right: 0.25rem;\n}\n.pt-2xs {\n    padding-top: 0.25rem;\n}\n.pr-md {\n    padding-right: 1rem;\n}\n.pb-0 {\n    padding-bottom: 0px;\n}\n.pb-md {\n    padding-bottom: 1rem;\n}\n.pb-xl {\n    padding-bottom: 2rem;\n}\n.pt-xl {\n    padding-top: 2rem;\n}\n.pr-xl {\n    padding-right: 2rem;\n}\n.pb-2xs {\n    padding-bottom: 0.25rem;\n}\n.pr-2xl {\n    padding-right: 3rem;\n}\n.pr-3xl {\n    padding-right: 4rem;\n}\n.pl-0 {\n    padding-left: 0px;\n}\n.pt-lg {\n    padding-top: 1.5rem;\n}\n.pl-\\[length\\:var\\(--rem10\\)\\] {\n    padding-left: var(--rem10);\n}\n.pr-\\[length\\:var\\(--rem14\\)\\] {\n    padding-right: var(--rem14);\n}\n.pr-\\[length\\:var\\(--rem6\\)\\] {\n    padding-right: var(--rem6);\n}\n.pl-\\[length\\:var\\(--rem14\\)\\] {\n    padding-left: var(--rem14);\n}\n.pr-\\[length\\:var\\(--rem10\\)\\] {\n    padding-right: var(--rem10);\n}\n.pl-\\[0\\.125rem\\] {\n    padding-left: 0.125rem;\n}\n.pl-\\[length\\:var\\(--rem12\\)\\] {\n    padding-left: var(--rem12);\n}\n.pr-\\[length\\:var\\(--rem12\\)\\] {\n    padding-right: var(--rem12);\n}\n.pr-\\[length\\:var\\(--rem16\\)\\] {\n    padding-right: var(--rem16);\n}\n.pr-\\[length\\:var\\(--rem8\\)\\] {\n    padding-right: var(--rem8);\n}\n.pl-\\[length\\:var\\(--rem16\\)\\] {\n    padding-left: var(--rem16);\n}\n.text-left {\n    text-align: left;\n}\n.text-center {\n    text-align: center;\n}\n.text-right {\n    text-align: right;\n}\n.indent-0 {\n    text-indent: 0px;\n}\n.align-top {\n    vertical-align: top;\n}\n.align-middle {\n    vertical-align: middle;\n}\n.align-text-bottom {\n    vertical-align: text-bottom;\n}\n.font-mono {\n    font-family: var(--font-mono);\n}\n.font-sans {\n    font-family: var(--font-sans);\n}\n.text-32 {\n    font-size: 2rem;\n    line-height: 2.25rem;\n}\n.text-18 {\n    font-size: 1.125rem;\n    line-height: 1.5rem;\n}\n.text-24 {\n    font-size: 1.5rem;\n    line-height: 1.75rem;\n}\n.text-14 {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n}\n.text-12 {\n    font-size: 0.75rem;\n    line-height: 1rem;\n}\n.text-20 {\n    font-size: 1.25rem;\n    line-height: 1.25rem;\n}\n.text-16 {\n    font-size: 1rem;\n    line-height: 1.25rem;\n}\n.text-64 {\n    font-size: 4rem;\n    line-height: 4rem;\n}\n.text-10 {\n    font-size: 0.625rem;\n    line-height: 1rem;\n}\n.text-48 {\n    font-size: 3rem;\n    line-height: 3rem;\n}\n.font-semibold {\n    font-weight: 600;\n}\n.font-normal {\n    font-weight: 400;\n}\n.font-bold {\n    font-weight: 700;\n}\n.uppercase {\n    text-transform: uppercase;\n}\n.lowercase {\n    text-transform: lowercase;\n}\n.capitalize {\n    text-transform: capitalize;\n}\n.italic {\n    font-style: italic;\n}\n.not-italic {\n    font-style: normal;\n}\n.ordinal {\n    --tw-ordinal: ordinal;\n    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n}\n.leading-none {\n    line-height: 1;\n}\n.leading-5 {\n    line-height: 1.25rem;\n}\n.leading-3 {\n    line-height: .75rem;\n}\n.leading-4 {\n    line-height: 1rem;\n}\n.leading-8 {\n    line-height: 2rem;\n}\n.leading-6 {\n    line-height: 1.5rem;\n}\n.leading-normal {\n    line-height: 1.5;\n}\n.leading-9 {\n    line-height: 2.25rem;\n}\n.leading-7 {\n    line-height: 1.75rem;\n}\n.leading-\\[0\\.875rem\\] {\n    line-height: 0.875rem;\n}\n.tracking-normal {\n    letter-spacing: 0em;\n}\n.text-neutral-content-weak {\n    color: var(--color-neutral-content-weak);\n}\n.text-neutral-content-strong {\n    color: var(--color-neutral-content-strong);\n}\n.text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-global-white {\n    color: var(--color-global-white);\n}\n.text-tone-3 {\n    color: var(--color-tone-3);\n}\n.text-primary {\n    color: var(--color-primary);\n}\n.text-global-alienblue {\n    color: var(--color-global-alienblue);\n}\n.text-tone-1 {\n    color: var(--color-tone-1);\n}\n.text-action-secondary {\n    color: var(--color-action-secondary);\n}\n.text-primary-background-hover {\n    color: var(--color-primary-background-hover);\n}\n.text-category-nsfw {\n    color: var(--color-category-nsfw);\n}\n.text-tone-2 {\n    color: var(--color-tone-2);\n}\n.text-neutral-content {\n    color: var(--color-neutral-content);\n}\n.text-puregray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(172 172 172 / var(--tw-text-opacity));\n}\n.text-danger-content {\n    color: var(--color-danger-content);\n}\n.text-tone-7 {\n    color: var(--color-tone-7);\n}\n.text-action-primary {\n    color: var(--color-action-primary);\n}\n.text-primary-background {\n    color: var(--color-primary-background);\n}\n.text-identity-moderator {\n    color: var(--color-identity-moderator);\n}\n.text-secondary-weak {\n    color: var(--color-secondary-weak);\n}\n.text-alert-negative {\n    color: var(--color-alert-negative);\n}\n.text-coolgray-850 {\n    --tw-text-opacity: 1;\n    color: rgb(15 26 28 / var(--tw-text-opacity));\n}\n.text-coolgray-650 {\n    --tw-text-opacity: 1;\n    color: rgb(42 60 66 / var(--tw-text-opacity));\n}\n.text-coolgray-550 {\n    --tw-text-opacity: 1;\n    color: rgb(75 96 102 / var(--tw-text-opacity));\n}\n.text-neutral-background-strong {\n    color: var(--color-neutral-background-strong);\n}\n.text-periwinkle-500 {\n    --tw-text-opacity: 1;\n    color: rgb(106 92 255 / var(--tw-text-opacity));\n}\n.text-coolgray-0 {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-coolgray-950 {\n    --tw-text-opacity: 1;\n    color: rgb(4 9 10 / var(--tw-text-opacity));\n}\n.text-action-downvote {\n    color: var(--color-action-downvote);\n}\n.text-global-black {\n    color: var(--color-global-black);\n}\n.text-secondary {\n    color: var(--color-secondary);\n}\n.text-alert-caution {\n    color: var(--color-alert-caution);\n}\n.text-current {\n    color: currentColor;\n}\n.text-category-spoiler {\n    color: var(--color-category-spoiler);\n}\n.text-warning-content {\n    color: var(--color-warning-content);\n}\n.text-primary-onBackground {\n    color: var(--color-primary-onBackground);\n}\n.text-brand-onBackground {\n    color: var(--color-brand-onBackground);\n}\n.text-neutral-content-disabled {\n    color: var(--color-neutral-content-disabled);\n}\n.text-\\[color\\:var\\(--color-button-secondary-text-disabled\\)\\] {\n    color: var(--color-button-secondary-text-disabled);\n}\n.text-\\[color\\:var\\(--color-button-plain-text-disabled\\)\\] {\n    color: var(--color-button-plain-text-disabled);\n}\n.underline {\n    text-decoration-line: underline;\n}\n.line-through {\n    text-decoration-line: line-through;\n}\n.no-underline {\n    text-decoration-line: none;\n}\n.opacity-25 {\n    opacity: 0.25;\n}\n.opacity-75 {\n    opacity: 0.75;\n}\n.opacity-0 {\n    opacity: 0;\n}\n.opacity-100 {\n    opacity: 1;\n}\n.opacity-30 {\n    opacity: 0.3;\n}\n.opacity-50 {\n    opacity: 0.5;\n}\n.opacity-20 {\n    opacity: 0.2;\n}\n.opacity-60 {\n    opacity: 0.6;\n}\n.opacity-40 {\n    opacity: 0.4;\n}\n.shadow-none {\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n    --tw-shadow: var(--elevation-sm);\n    --tw-shadow-colored: var(--elevation-sm);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n    --tw-shadow: var(--elevation-md);\n    --tw-shadow-colored: var(--elevation-md);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline-none {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n}\n.outline {\n    outline-style: solid;\n}\n.ring {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.drop-shadow {\n    --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.grayscale {\n    --tw-grayscale: grayscale(100%);\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.invert {\n    --tw-invert: invert(100%);\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.transition-transform {\n    transition-property: transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.transition-opacity {\n    transition-property: opacity;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.duration-150 {\n    transition-duration: 150ms;\n}\n.duration-300 {\n    transition-duration: 300ms;\n}\n.duration-100 {\n    transition-duration: 100ms;\n}\n.duration-1000 {\n    transition-duration: 1000ms;\n}\n.ease-out {\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.ease-in-out {\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-linear {\n    transition-timing-function: linear;\n}\n.scrollbar-hide {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\n.scrollbar-hide::-webkit-scrollbar {\n    display: none;\n}\n.before\\:absolute::before {\n    content: var(--tw-content);\n    position: absolute;\n}\n.before\\:top-\\[28px\\]::before {\n    content: var(--tw-content);\n    top: 28px;\n}\n.before\\:left-\\[9px\\]::before {\n    content: var(--tw-content);\n    left: 9px;\n}\n.before\\:top-\\[-3px\\]::before {\n    content: var(--tw-content);\n    top: -3px;\n}\n.before\\:left-\\[-16\\.5px\\]::before {\n    content: var(--tw-content);\n    left: -16.5px;\n}\n.before\\:top-0::before {\n    content: var(--tw-content);\n    top: 0px;\n}\n.before\\:left-\\[16\\.5px\\]::before {\n    content: var(--tw-content);\n    left: 16.5px;\n}\n.before\\:h-\\[calc\\(100\\%-28px\\)\\]::before {\n    content: var(--tw-content);\n    height: calc(100% - 28px);\n}\n.before\\:h-full::before {\n    content: var(--tw-content);\n    height: 100%;\n}\n.before\\:h-\\[calc\\(100\\%\\+6px\\)\\]::before {\n    content: var(--tw-content);\n    height: calc(100% + 6px);\n}\n.before\\:border-y-0::before {\n    content: var(--tw-content);\n    border-top-width: 0rem;\n    border-bottom-width: 0rem;\n}\n.before\\:border-l-\\[1px\\]::before {\n    content: var(--tw-content);\n    border-left-width: 1px;\n}\n.before\\:border-r-\\[0px\\]::before {\n    content: var(--tw-content);\n    border-right-width: 0px;\n}\n.before\\:border-solid::before {\n    content: var(--tw-content);\n    border-style: solid;\n}\n.before\\:border-tone-4::before {\n    content: var(--tw-content);\n    border-color: var(--color-tone-4);\n}\n.before\\:content-\\[\\'\\'\\]::before {\n    --tw-content: '';\n    content: var(--tw-content);\n}\n.after\\:absolute::after {\n    content: var(--tw-content);\n    position: absolute;\n}\n.after\\:-top-sm::after {\n    content: var(--tw-content);\n    top: -0.75rem;\n}\n.after\\:left-\\[-16\\.5px\\]::after {\n    content: var(--tw-content);\n    left: -16.5px;\n}\n.after\\:bottom-\\[15px\\]::after {\n    content: var(--tw-content);\n    bottom: 15px;\n}\n.after\\:left-\\[3\\.5px\\]::after {\n    content: var(--tw-content);\n    left: 3.5px;\n}\n.after\\:h-\\[30px\\]::after {\n    content: var(--tw-content);\n    height: 30px;\n}\n.after\\:h-\\[54px\\]::after {\n    content: var(--tw-content);\n    height: 54px;\n}\n.after\\:w-md::after {\n    content: var(--tw-content);\n    width: 1rem;\n}\n.after\\:w-\\[23px\\]::after {\n    content: var(--tw-content);\n    width: 23px;\n}\n.after\\:rounded-bl-\\[12px\\]::after {\n    content: var(--tw-content);\n    border-bottom-left-radius: 12px;\n}\n.after\\:border-y-0::after {\n    content: var(--tw-content);\n    border-top-width: 0rem;\n    border-bottom-width: 0rem;\n}\n.after\\:border-l-\\[1px\\]::after {\n    content: var(--tw-content);\n    border-left-width: 1px;\n}\n.after\\:border-r-\\[0px\\]::after {\n    content: var(--tw-content);\n    border-right-width: 0px;\n}\n.after\\:border-b-\\[1px\\]::after {\n    content: var(--tw-content);\n    border-bottom-width: 1px;\n}\n.after\\:border-solid::after {\n    content: var(--tw-content);\n    border-style: solid;\n}\n.after\\:border-tone-4::after {\n    content: var(--tw-content);\n    border-color: var(--color-tone-4);\n}\n.after\\:content-\\[\\'\\'\\]::after {\n    --tw-content: '';\n    content: var(--tw-content);\n}\n.hover\\:border-secondary-background-selected:hover {\n    border-color: var(--color-secondary-background-selected);\n}\n.hover\\:border-secondary-background-hover:hover {\n    border-color: var(--color-secondary-background-hover);\n}\n.hover\\:bg-neutral-background-hover:hover {\n    background-color: var(--color-neutral-background-hover);\n}\n.hover\\:bg-secondary-background-selected:hover {\n    background-color: var(--color-secondary-background-selected);\n}\n.hover\\:bg-secondary-background-hover:hover {\n    background-color: var(--color-secondary-background-hover);\n}\n.hover\\:bg-transparent-background-hover:hover {\n    background-color: var(--color-transparent-background-hover);\n}\n.hover\\:bg-brand-background-hover:hover {\n    background-color: var(--color-brand-background-hover);\n}\n.hover\\:text-secondary:hover {\n    color: var(--color-secondary);\n}\n.hover\\:text-global-white:hover {\n    color: var(--color-global-white);\n}\n.hover\\:text-action-upvote:hover {\n    color: var(--color-action-upvote);\n}\n.hover\\:text-action-downvote:hover {\n    color: var(--color-action-downvote);\n}\n.hover\\:underline:hover {\n    text-decoration-line: underline;\n}\n.hover\\:no-underline:hover {\n    text-decoration-line: none;\n}\n.focus\\:rounded-sm:focus {\n    border-radius: 0.25rem;\n}\n.focus\\:border-global-focus:focus {\n    border-color: var(--color-global-focus);\n}\n.focus\\:outline-none:focus {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n}\n.focus-visible\\:text-action-upvote:focus-visible {\n    color: var(--color-action-upvote);\n}\n.focus-visible\\:text-action-downvote:focus-visible {\n    color: var(--color-action-downvote);\n}\n.active\\:bg-secondary-background:active {\n    background-color: var(--color-secondary-background);\n}\n.disabled\\:text-interactive-content-disabled:disabled {\n    color: var(--color-interactive-content-disabled);\n}\n", ""]), t.a = i
		},
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");

			function i(e, t, n, i) {
				let o;

				function s() {
					var s;
					o || (o = Object(r.e)(null !== (s = null == i ? void 0 : i.target) && void 0 !== s ? s : e, t, n, i))
				}
				s(), e.addController({
					hostConnected() {
						s()
					},
					hostDisconnected() {
						var e;
						null === (e = o) || void 0 === e || e(), o = void 0
					}
				})
			}
		},
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r, i = n("./node_modules/fscreen/dist/fscreen.esm.js"),
				o = n("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");
			const s = "undefined" != typeof window && "object" == typeof window.safari && (null === (r = window) || void 0 === r ? void 0 : r.safari.pushNotification);
			class a {
				constructor(e, t) {
					this._host = e, this._callback = t, this._state = this._determinePageState(), this._visibility = document.visibilityState, this._disposal = new o.a, e.addController(this)
				}
				get state() {
					return this._state
				}
				get visibility() {
					return this._visibility
				}
				hostConnected() {
					this._state = this._determinePageState(), this._visibility = document.visibilityState, ["focus", "blur", "visibilitychange", "pageshow", "pagehide"].forEach(e => {
						const t = Object(o.e)(window, e, this._handlePageEvent.bind(this));
						this._disposal.add(t)
					}), s && this._disposal.add(Object(o.e)(window, "beforeunload", e => {
						this._safariBeforeUnloadTimeout = setTimeout(() => {
							e.defaultPrevented || e.returnValue.length > 0 || (this._state = "hidden", this._visibility = "hidden", this._triggerCallback())
						}, 0)
					}))
				}
				hostDisconnected() {
					this._disposal.empty()
				}
				_handlePageEvent(e) {
					s && window.clearTimeout(this._safariBeforeUnloadTimeout);
					const t = this._state,
						n = this._visibility;
					"blur" === e.type && "active" !== this.state || (this._state = this._determinePageState(e), this._visibility = "hidden" == document.visibilityState ? "hidden" : "visible"), this.state === t && this.visibility === n || this._triggerCallback()
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
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js": function(e, t, n) {
			"use strict";

			function r(e, t, n, r) {
				return e.addEventListener(t, n, r), () => {
					e.removeEventListener(t, n, r)
				}
			}

			function i(e, t) {
				return t.some(t => {
					var n;
					return null !== (n = null == e ? void 0 : e.type.includes(t)) && void 0 !== n && n
				})
			}

			function o(e) {
				return i(e, ["pointer"])
			}

			function s(e) {
				return i(e, ["touch"])
			}

			function a(e) {
				return i(e, ["click", "mouse"])
			}
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return l
			}));
			class l {
				constructor() {
					var e;
					this._disposal = null !== (e = this._disposal) && void 0 !== e ? e : []
				}
				add() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					t && t.forEach(e => {
						this._disposal.push(e)
					})
				}
				empty() {
					this._disposal.forEach(e => e()), this._disposal = []
				}
			}
		},
		"./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Unknown = "unknown", e.Audio = "audio", e.Video = "video", e.LiveVideo = "live-video"
				}(r || (r = {}))
		},
		"./node_modules/css-loader/dist/runtime/api.js": function(e, t, n) {
			"use strict";
			e.exports = function(e) {
				var t = [];
				return t.toString = function() {
					return this.map((function(t) {
						var n = function(e, t) {
							var n = e[1] || "",
								r = e[3];
							if (!r) return n;
							if (t && "function" == typeof btoa) {
								var i = (s = r, a = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a), "/*# ".concat(l, " */")),
									o = r.sources.map((function(e) {
										return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
									}));
								return [n].concat(o).concat([i]).join("\n")
							}
							var s, a, l;
							return [n].join("\n")
						}(t, e);
						return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
					})).join("")
				}, t.i = function(e, n, r) {
					"string" == typeof e && (e = [
						[null, e, ""]
					]);
					var i = {};
					if (r)
						for (var o = 0; o < this.length; o++) {
							var s = this[o][0];
							null != s && (i[s] = !0)
						}
					for (var a = 0; a < e.length; a++) {
						var l = [].concat(e[a]);
						r && i[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l))
					}
				}, t
			}
		},
		"./node_modules/fscreen/dist/fscreen.esm.js": function(e, t, n) {
			"use strict";
			var r = {
					fullscreenEnabled: 0,
					fullscreenElement: 1,
					requestFullscreen: 2,
					exitFullscreen: 3,
					fullscreenchange: 4,
					fullscreenerror: 5,
					fullscreen: 6
				},
				i = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
				o = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
				s = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"],
				a = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
				l = "fullscreenEnabled" in a && Object.keys(r) || i[0] in a && i || o[0] in a && o || s[0] in a && s || [],
				d = {
					requestFullscreen: function(e) {
						return e[l[r.requestFullscreen]]()
					},
					requestFullscreenFunction: function(e) {
						return e[l[r.requestFullscreen]]
					},
					get exitFullscreen() {
						return a[l[r.exitFullscreen]].bind(a)
					},
					get fullscreenPseudoClass() {
						return ":" + l[r.fullscreen]
					},
					addEventListener: function(e, t, n) {
						return a.addEventListener(l[r[e]], t, n)
					},
					removeEventListener: function(e, t, n) {
						return a.removeEventListener(l[r[e]], t, n)
					},
					get fullscreenEnabled() {
						return Boolean(a[l[r.fullscreenEnabled]])
					},
					set fullscreenEnabled(e) {},
					get fullscreenElement() {
						return a[l[r.fullscreenElement]]
					},
					set fullscreenElement(e) {},
					get onfullscreenchange() {
						return a[("on" + l[r.fullscreenchange]).toLowerCase()]
					},
					set onfullscreenchange(e) {
						return a[("on" + l[r.fullscreenchange]).toLowerCase()] = e
					},
					get onfullscreenerror() {
						return a[("on" + l[r.fullscreenerror]).toLowerCase()]
					},
					set onfullscreenerror(e) {
						return a[("on" + l[r.fullscreenerror]).toLowerCase()] = e
					}
				};
			t.a = d
		},
		"./node_modules/lit-html/lit-html.js": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
				return z
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "f", (function() {
				return E
			}));
			const i = window,
				o = i.trustedTypes,
				s = o ? o.createPolicy("lit-html", {
					createHTML: e => e
				}) : void 0,
				a = `lit$${(Math.random()+"").slice(9)}$`,
				l = "?" + a,
				d = `<${l}>`,
				c = document,
				h = (e = "") => c.createComment(e),
				u = e => null === e || "object" != typeof e && "function" != typeof e,
				p = Array.isArray,
				v = e => p(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator]),
				g = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
				b = /-->/g,
				m = />/g,
				f = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
				_ = /'/g,
				y = /"/g,
				w = /^(?:script|style|textarea|title)$/i,
				x = e => (t, ...n) => ({
					_$litType$: e,
					strings: t,
					values: n
				}),
				k = x(1),
				E = x(2),
				S = Symbol.for("lit-noChange"),
				C = Symbol.for("lit-nothing"),
				O = new WeakMap,
				A = (e, t, n) => {
					var r, i;
					const o = null !== (r = null == n ? void 0 : n.renderBefore) && void 0 !== r ? r : t;
					let s = o._$litPart$;
					if (void 0 === s) {
						const e = null !== (i = null == n ? void 0 : n.renderBefore) && void 0 !== i ? i : null;
						o._$litPart$ = s = new T(t.insertBefore(h(), e), e, void 0, null != n ? n : {})
					}
					return s._$AI(e), s
				},
				P = c.createTreeWalker(c, 129, null, !1),
				j = (e, t) => {
					const n = e.length - 1,
						r = [];
					let i, o = 2 === t ? "<svg>" : "",
						l = g;
					for (let s = 0; s < n; s++) {
						const t = e[s];
						let n, c, h = -1,
							u = 0;
						for (; u < t.length && (l.lastIndex = u, null !== (c = l.exec(t)));) u = l.lastIndex, l === g ? "!--" === c[1] ? l = b : void 0 !== c[1] ? l = m : void 0 !== c[2] ? (w.test(c[2]) && (i = RegExp("</" + c[2], "g")), l = f) : void 0 !== c[3] && (l = f) : l === f ? ">" === c[0] ? (l = null != i ? i : g, h = -1) : void 0 === c[1] ? h = -2 : (h = l.lastIndex - c[2].length, n = c[1], l = void 0 === c[3] ? f : '"' === c[3] ? y : _) : l === y || l === _ ? l = f : l === b || l === m ? l = g : (l = f, i = void 0);
						const p = l === f && e[s + 1].startsWith("/>") ? " " : "";
						o += l === g ? t + d : h >= 0 ? (r.push(n), t.slice(0, h) + "$lit$" + t.slice(h) + a + p) : t + a + (-2 === h ? (r.push(void 0), s) : p)
					}
					const c = o + (e[n] || "<?>") + (2 === t ? "</svg>" : "");
					if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
					return [void 0 !== s ? s.createHTML(c) : c, r]
				};
			class $ {
				constructor({
					strings: e,
					_$litType$: t
				}, n) {
					let r;
					this.parts = [];
					let i = 0,
						s = 0;
					const d = e.length - 1,
						c = this.parts,
						[u, p] = j(e, t);
					if (this.el = $.createElement(u, n), P.currentNode = this.el.content, 2 === t) {
						const e = this.el.content,
							t = e.firstChild;
						t.remove(), e.append(...t.childNodes)
					}
					for (; null !== (r = P.nextNode()) && c.length < d;) {
						if (1 === r.nodeType) {
							if (r.hasAttributes()) {
								const e = [];
								for (const t of r.getAttributeNames())
									if (t.endsWith("$lit$") || t.startsWith(a)) {
										const n = p[s++];
										if (e.push(t), void 0 !== n) {
											const e = r.getAttribute(n.toLowerCase() + "$lit$").split(a),
												t = /([.?@])?(.*)/.exec(n);
											c.push({
												type: 1,
												index: i,
												name: t[2],
												strings: e,
												ctor: "." === t[1] ? V : "?" === t[1] ? D : "@" === t[1] ? I : L
											})
										} else c.push({
											type: 6,
											index: i
										})
									} for (const t of e) r.removeAttribute(t)
							}
							if (w.test(r.tagName)) {
								const e = r.textContent.split(a),
									t = e.length - 1;
								if (t > 0) {
									r.textContent = o ? o.emptyScript : "";
									for (let n = 0; n < t; n++) r.append(e[n], h()), P.nextNode(), c.push({
										type: 2,
										index: ++i
									});
									r.append(e[t], h())
								}
							}
						} else if (8 === r.nodeType)
							if (r.data === l) c.push({
								type: 2,
								index: i
							});
							else {
								let e = -1;
								for (; - 1 !== (e = r.data.indexOf(a, e + 1));) c.push({
									type: 7,
									index: i
								}), e += a.length - 1
							} i++
					}
				}
				static createElement(e, t) {
					const n = c.createElement("template");
					return n.innerHTML = e, n
				}
			}

			function M(e, t, n = e, r) {
				var i, o, s, a;
				if (t === S) return t;
				let l = void 0 !== r ? null === (i = n._$Cl) || void 0 === i ? void 0 : i[r] : n._$Cu;
				const d = u(t) ? void 0 : t._$litDirective$;
				return (null == l ? void 0 : l.constructor) !== d && (null === (o = null == l ? void 0 : l._$AO) || void 0 === o || o.call(l, !1), void 0 === d ? l = void 0 : (l = new d(e))._$AT(e, n, r), void 0 !== r ? (null !== (s = (a = n)._$Cl) && void 0 !== s ? s : a._$Cl = [])[r] = l : n._$Cu = l), void 0 !== l && (t = M(e, l._$AS(e, t.values), l, r)), t
			}
			class R {
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
							content: n
						},
						parts: r
					} = this._$AD, i = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : c).importNode(n, !0);
					P.currentNode = i;
					let o = P.nextNode(),
						s = 0,
						a = 0,
						l = r[0];
					for (; void 0 !== l;) {
						if (s === l.index) {
							let t;
							2 === l.type ? t = new T(o, o.nextSibling, this, e) : 1 === l.type ? t = new l.ctor(o, l.name, l.strings, this, e) : 6 === l.type && (t = new H(o, this, e)), this.v.push(t), l = r[++a]
						}
						s !== (null == l ? void 0 : l.index) && (o = P.nextNode(), s++)
					}
					return i
				}
				m(e) {
					let t = 0;
					for (const n of this.v) void 0 !== n && (void 0 !== n.strings ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++
				}
			}
			class T {
				constructor(e, t, n, r) {
					var i;
					this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$C_ = null === (i = null == r ? void 0 : r.isConnected) || void 0 === i || i
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
					e = M(this, e, t), u(e) ? e === C || null == e || "" === e ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== S && this.$(e) : void 0 !== e._$litType$ ? this.T(e) : void 0 !== e.nodeType ? this.k(e) : v(e) ? this.O(e) : this.$(e)
				}
				S(e, t = this._$AB) {
					return this._$AA.parentNode.insertBefore(e, t)
				}
				k(e) {
					this._$AH !== e && (this._$AR(), this._$AH = this.S(e))
				}
				$(e) {
					this._$AH !== C && u(this._$AH) ? this._$AA.nextSibling.data = e : this.k(c.createTextNode(e)), this._$AH = e
				}
				T(e) {
					var t;
					const {
						values: n,
						_$litType$: r
					} = e, i = "number" == typeof r ? this._$AC(e) : (void 0 === r.el && (r.el = $.createElement(r.h, this.options)), r);
					if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === i) this._$AH.m(n);
					else {
						const e = new R(i, this),
							t = e.p(this.options);
						e.m(n), this.k(t), this._$AH = e
					}
				}
				_$AC(e) {
					let t = O.get(e.strings);
					return void 0 === t && O.set(e.strings, t = new $(e)), t
				}
				O(e) {
					p(this._$AH) || (this._$AH = [], this._$AR());
					const t = this._$AH;
					let n, r = 0;
					for (const i of e) r === t.length ? t.push(n = new T(this.S(h()), this.S(h()), this, this.options)) : n = t[r], n._$AI(i), r++;
					r < t.length && (this._$AR(n && n._$AB.nextSibling, r), t.length = r)
				}
				_$AR(e = this._$AA.nextSibling, t) {
					var n;
					for (null === (n = this._$AP) || void 0 === n || n.call(this, !1, !0, t); e && e !== this._$AB;) {
						const t = e.nextSibling;
						e.remove(), e = t
					}
				}
				setConnected(e) {
					var t;
					void 0 === this._$AM && (this._$C_ = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
				}
			}
			class L {
				constructor(e, t, n, r, i) {
					this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || "" !== n[0] || "" !== n[1] ? (this._$AH = Array(n.length - 1).fill(new String), this.strings = n) : this._$AH = C
				}
				get tagName() {
					return this.element.tagName
				}
				get _$AU() {
					return this._$AM._$AU
				}
				_$AI(e, t = this, n, r) {
					const i = this.strings;
					let o = !1;
					if (void 0 === i) e = M(this, e, t, 0), (o = !u(e) || e !== this._$AH && e !== S) && (this._$AH = e);
					else {
						const r = e;
						let s, a;
						for (e = i[0], s = 0; s < i.length - 1; s++)(a = M(this, r[n + s], t, s)) === S && (a = this._$AH[s]), o || (o = !u(a) || a !== this._$AH[s]), a === C ? e = C : e !== C && (e += (null != a ? a : "") + i[s + 1]), this._$AH[s] = a
					}
					o && !r && this.P(e)
				}
				P(e) {
					e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
				}
			}
			class V extends L {
				constructor() {
					super(...arguments), this.type = 3
				}
				P(e) {
					this.element[this.name] = e === C ? void 0 : e
				}
			}
			const q = o ? o.emptyScript : "";
			class D extends L {
				constructor() {
					super(...arguments), this.type = 4
				}
				P(e) {
					e && e !== C ? this.element.setAttribute(this.name, q) : this.element.removeAttribute(this.name)
				}
			}
			class I extends L {
				constructor(e, t, n, r, i) {
					super(e, t, n, r, i), this.type = 5
				}
				_$AI(e, t = this) {
					var n;
					if ((e = null !== (n = M(this, e, t, 0)) && void 0 !== n ? n : C) === S) return;
					const r = this._$AH,
						i = e === C && r !== C || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive,
						o = e !== C && (r === C || i);
					i && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, e), this._$AH = e
				}
				handleEvent(e) {
					var t, n;
					"function" == typeof this._$AH ? this._$AH.call(null !== (n = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== n ? n : this.element, e) : this._$AH.handleEvent(e)
				}
			}
			class H {
				constructor(e, t, n) {
					this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n
				}
				get _$AU() {
					return this._$AM._$AU
				}
				_$AI(e) {
					M(this, e)
				}
			}
			const z = {
					A: "$lit$",
					M: a,
					C: l,
					L: 1,
					R: j,
					D: R,
					V: v,
					I: M,
					H: T,
					N: L,
					U: D,
					B: I,
					F: V,
					W: H
				},
				F = i.litHtmlPolyfillSupport;
			null == F || F($, T), (null !== (r = i.litHtmlVersions) && void 0 !== r ? r : i.litHtmlVersions = []).push("2.3.1")
		},
		"./node_modules/lit/decorators.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return l
			}));
			const r = e => t => "function" == typeof t ? ((e, t) => (customElements.define(e, t), t))(e, t) : ((e, t) => {
					const {
						kind: n,
						elements: r
					} = t;
					return {
						kind: n,
						elements: r,
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
					finisher(n) {
						n.createProperty(t.key, e)
					}
				} : {
					...t,
					finisher(n) {
						n.createProperty(t.key, e)
					}
				};

			function o(e) {
				return (t, n) => void 0 !== n ? ((e, t, n) => {
					t.constructor.createProperty(n, e)
				})(e, t, n) : i(e, t)
			}

			function s(e) {
				return o({
					...e,
					state: !0
				})
			}
			const a = ({
				finisher: e,
				descriptor: t
			}) => (n, r) => {
				var i;
				if (void 0 === r) {
					const r = null !== (i = n.originalKey) && void 0 !== i ? i : n.key,
						o = null != t ? {
							kind: "method",
							placement: "prototype",
							key: r,
							descriptor: t(n.key)
						} : {
							...n,
							key: r
						};
					return null != e && (o.finisher = function(t) {
						e(t, r)
					}), o
				} {
					const i = n.constructor;
					void 0 !== t && Object.defineProperty(n, r, t(r)), null == e || e(i, r)
				}
			};

			function l(e, t) {
				return a({
					descriptor: n => {
						const r = {
							get() {
								var t, n;
								return null !== (n = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e)) && void 0 !== n ? n : null
							},
							enumerable: !0,
							configurable: !0
						};
						if (t) {
							const t = "symbol" == typeof n ? Symbol() : "__" + n;
							r.get = function() {
								var n, r;
								return void 0 === this[t] && (this[t] = null !== (r = null === (n = this.renderRoot) || void 0 === n ? void 0 : n.querySelector(e)) && void 0 !== r ? r : null), this[t]
							}
						}
						return r
					}
				})
			}
			var d;
			null === (d = window.HTMLSlotElement) || void 0 === d || d.prototype.assignedElements
		},
		"./node_modules/lit/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return x.b
			})), n.d(t, "d", (function() {
				return x.f
			})), n.d(t, "a", (function() {
				return k
			}));
			const r = window,
				i = r.ShadowRoot && (void 0 === r.ShadyCSS || r.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
				o = Symbol(),
				s = new WeakMap;
			class a {
				constructor(e, t, n) {
					if (this._$cssResult$ = !0, n !== o) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
					this.cssText = e, this.t = t
				}
				get styleSheet() {
					let e = this.o;
					const t = this.t;
					if (i && void 0 === e) {
						const n = void 0 !== t && 1 === t.length;
						n && (e = s.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), n && s.set(t, e))
					}
					return e
				}
				toString() {
					return this.cssText
				}
			}
			const l = (e, ...t) => {
					const n = 1 === e.length ? e[0] : t.reduce((t, n, r) => t + (e => {
						if (!0 === e._$cssResult$) return e.cssText;
						if ("number" == typeof e) return e;
						throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
					})(n) + e[r + 1], e[0]);
					return new a(n, e, o)
				},
				d = (e, t) => {
					i ? e.adoptedStyleSheets = t.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach(t => {
						const n = document.createElement("style"),
							i = r.litNonce;
						void 0 !== i && n.setAttribute("nonce", i), n.textContent = t.cssText, e.appendChild(n)
					})
				},
				c = i ? e => e : e => e instanceof CSSStyleSheet ? (e => {
					let t = "";
					for (const n of e.cssRules) t += n.cssText;
					return (e => new a("string" == typeof e ? e : e + "", void 0, o))(t)
				})(e) : e;
			var h;
			const u = window,
				p = u.trustedTypes,
				v = p ? p.emptyScript : "",
				g = u.reactiveElementPolyfillSupport,
				b = {
					toAttribute(e, t) {
						switch (t) {
							case Boolean:
								e = e ? v : null;
								break;
							case Object:
							case Array:
								e = null == e ? e : JSON.stringify(e)
						}
						return e
					},
					fromAttribute(e, t) {
						let n = e;
						switch (t) {
							case Boolean:
								n = null !== e;
								break;
							case Number:
								n = null === e ? null : Number(e);
								break;
							case Object:
							case Array:
								try {
									n = JSON.parse(e)
								} catch (e) {
									n = null
								}
						}
						return n
					}
				},
				m = (e, t) => t !== e && (t == t || e == e),
				f = {
					attribute: !0,
					type: String,
					converter: b,
					reflect: !1,
					hasChanged: m
				};
			class _ extends HTMLElement {
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
					return this.elementProperties.forEach((t, n) => {
						const r = this._$Ep(n, t);
						void 0 !== r && (this._$Ev.set(r, n), e.push(r))
					}), e
				}
				static createProperty(e, t = f) {
					if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
						const n = "symbol" == typeof e ? Symbol() : "__" + e,
							r = this.getPropertyDescriptor(e, n, t);
						void 0 !== r && Object.defineProperty(this.prototype, e, r)
					}
				}
				static getPropertyDescriptor(e, t, n) {
					return {
						get() {
							return this[t]
						},
						set(r) {
							const i = this[e];
							this[t] = r, this.requestUpdate(e, i, n)
						},
						configurable: !0,
						enumerable: !0
					}
				}
				static getPropertyOptions(e) {
					return this.elementProperties.get(e) || f
				}
				static finalize() {
					if (this.hasOwnProperty("finalized")) return !1;
					this.finalized = !0;
					const e = Object.getPrototypeOf(this);
					if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
						const e = this.properties,
							t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
						for (const n of t) this.createProperty(n, e[n])
					}
					return this.elementStyles = this.finalizeStyles(this.styles), !0
				}
				static finalizeStyles(e) {
					const t = [];
					if (Array.isArray(e)) {
						const n = new Set(e.flat(1 / 0).reverse());
						for (const e of n) t.unshift(c(e))
					} else void 0 !== e && t.push(c(e));
					return t
				}
				static _$Ep(e, t) {
					const n = t.attribute;
					return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof e ? e.toLowerCase() : void 0
				}
				u() {
					var e;
					this._$E_ = new Promise(e => this.enableUpdating = e), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (e = this.constructor.h) || void 0 === e || e.forEach(e => e(this))
				}
				addController(e) {
					var t, n;
					(null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (n = e.hostConnected) || void 0 === n || n.call(e))
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
				attributeChangedCallback(e, t, n) {
					this._$AK(e, n)
				}
				_$EO(e, t, n = f) {
					var r;
					const i = this.constructor._$Ep(e, n);
					if (void 0 !== i && !0 === n.reflect) {
						const o = (void 0 !== (null === (r = n.converter) || void 0 === r ? void 0 : r.toAttribute) ? n.converter : b).toAttribute(t, n.type);
						this._$El = e, null == o ? this.removeAttribute(i) : this.setAttribute(i, o), this._$El = null
					}
				}
				_$AK(e, t) {
					var n;
					const r = this.constructor,
						i = r._$Ev.get(e);
					if (void 0 !== i && this._$El !== i) {
						const e = r.getPropertyOptions(i),
							o = "function" == typeof e.converter ? {
								fromAttribute: e.converter
							} : void 0 !== (null === (n = e.converter) || void 0 === n ? void 0 : n.fromAttribute) ? e.converter : b;
						this._$El = i, this[i] = o.fromAttribute(t, e.type), this._$El = null
					}
				}
				requestUpdate(e, t, n) {
					let r = !0;
					void 0 !== e && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || m)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === n.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(e, n))) : r = !1), !this.isUpdatePending && r && (this._$E_ = this._$Ej())
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
					const n = this._$AL;
					try {
						(t = this.shouldUpdate(n)) ? (this.willUpdate(n), null === (e = this._$ES) || void 0 === e || e.forEach(e => {
							var t;
							return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
						}), this.update(n)) : this._$Ek()
					} catch (e) {
						throw t = !1, this._$Ek(), e
					}
					t && this._$AE(n)
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
			_.finalized = !0, _.elementProperties = new Map, _.elementStyles = [], _.shadowRootOptions = {
				mode: "open"
			}, null == g || g({
				ReactiveElement: _
			}), (null !== (h = u.reactiveElementVersions) && void 0 !== h ? h : u.reactiveElementVersions = []).push("1.4.1");
			var y, w, x = n("./node_modules/lit-html/lit-html.js");
			class k extends _ {
				constructor() {
					super(...arguments), this.renderOptions = {
						host: this
					}, this._$Do = void 0
				}
				createRenderRoot() {
					var e, t;
					const n = super.createRenderRoot();
					return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = n.firstChild), n
				}
				update(e) {
					const t = this.render();
					this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Object(x.e)(t, this.renderRoot, this.renderOptions)
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
					return x.c
				}
			}
			k.finalized = !0, k._$litElement$ = !0, null === (y = globalThis.litElementHydrateSupport) || void 0 === y || y.call(globalThis, {
				LitElement: k
			});
			const E = globalThis.litElementPolyfillSupport;
			null == E || E({
				LitElement: k
			});
			(null !== (w = globalThis.litElementVersions) && void 0 !== w ? w : globalThis.litElementVersions = []).push("3.2.2")
		},
		"./node_modules/tslib/tslib.es6.js": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "l", (function() {
				return s
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "j", (function() {
				return d
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return m
			}));
			var r = function(e, t) {
				return (r = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			};

			function i(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

				function n() {
					this.constructor = e
				}
				r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}
			var o = function() {
				return (o = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++)
						for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e
				}).apply(this, arguments)
			};

			function s(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
				}
				return n
			}

			function a(e, t, n, r) {
				var i, o = arguments.length,
					s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
				return o > 3 && s && Object.defineProperty(t, n, s), s
			}

			function l(e, t, n, r) {
				return new(n || (n = Promise))((function(i, o) {
					function s(e) {
						try {
							l(r.next(e))
						} catch (t) {
							o(t)
						}
					}

					function a(e) {
						try {
							l(r.throw(e))
						} catch (t) {
							o(t)
						}
					}

					function l(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
							e(t)
						}))).then(s, a)
					}
					l((r = r.apply(e, t || [])).next())
				}))
			}

			function d(e, t) {
				var n, r, i, o, s = {
					label: 0,
					sent: function() {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return o = {
					next: a(0),
					throw: a(1),
					return: a(2)
				}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
					return this
				}), o;

				function a(o) {
					return function(a) {
						return function(o) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; s;) try {
								if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
								switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
									case 0:
									case 1:
										i = o;
										break;
									case 4:
										return s.label++, {
											value: o[1],
											done: !1
										};
									case 5:
										s.label++, r = o[1], o = [0];
										continue;
									case 7:
										o = s.ops.pop(), s.trys.pop();
										continue;
									default:
										if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
											s = 0;
											continue
										}
										if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
											s.label = o[1];
											break
										}
										if (6 === o[0] && s.label < i[1]) {
											s.label = i[1], i = o;
											break
										}
										if (i && s.label < i[2]) {
											s.label = i[2], s.ops.push(o);
											break
										}
										i[2] && s.ops.pop(), s.trys.pop();
										continue
								}
								o = t.call(e, s)
							} catch (a) {
								o = [6, a], r = 0
							} finally {
								n = i = 0
							}
							if (5 & o[0]) throw o[1];
							return {
								value: o[0] ? o[1] : void 0,
								done: !0
							}
						}([o, a])
					}
				}
			}
			Object.create;

			function c(e) {
				var t = "function" == typeof Symbol && Symbol.iterator,
					n = t && e[t],
					r = 0;
				if (n) return n.call(e);
				if (e && "number" == typeof e.length) return {
					next: function() {
						return e && r >= e.length && (e = void 0), {
							value: e && e[r++],
							done: !e
						}
					}
				};
				throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
			}

			function h(e, t) {
				var n = "function" == typeof Symbol && e[Symbol.iterator];
				if (!n) return e;
				var r, i, o = n.call(e),
					s = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
				} catch (a) {
					i = {
						error: a
					}
				} finally {
					try {
						r && !r.done && (n = o.return) && n.call(o)
					} finally {
						if (i) throw i.error
					}
				}
				return s
			}

			function u(e, t, n) {
				if (n || 2 === arguments.length)
					for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
				return e.concat(r || t)
			}

			function p(e) {
				return this instanceof p ? (this.v = e, this) : new p(e)
			}

			function v(e, t, n) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var r, i = n.apply(e, t || []),
					o = [];
				return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
					return this
				}, r;

				function s(e) {
					i[e] && (r[e] = function(t) {
						return new Promise((function(n, r) {
							o.push([e, t, n, r]) > 1 || a(e, t)
						}))
					})
				}

				function a(e, t) {
					try {
						(n = i[e](t)).value instanceof p ? Promise.resolve(n.value.v).then(l, d) : c(o[0][2], n)
					} catch (r) {
						c(o[0][3], r)
					}
					var n
				}

				function l(e) {
					a("next", e)
				}

				function d(e) {
					a("throw", e)
				}

				function c(e, t) {
					e(t), o.shift(), o.length && a(o[0][0], o[0][1])
				}
			}

			function g(e) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var t, n = e[Symbol.asyncIterator];
				return n ? n.call(e) : (e = c(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
					return this
				}, t);

				function r(n) {
					t[n] = e[n] && function(t) {
						return new Promise((function(r, i) {
							(function(e, t, n, r) {
								Promise.resolve(r).then((function(t) {
									e({
										value: t,
										done: n
									})
								}), t)
							})(r, i, (t = e[n](t)).done, t.value)
						}))
					}
				}
			}
			Object.create;

			function b(e, t, n, r) {
				if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
				if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
				return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
			}

			function m(e, t, n, r, i) {
				if ("m" === r) throw new TypeError("Private method is not writable");
				if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
				if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
				return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~shreddit-player.2920aa0bfca03131bc57.js.map