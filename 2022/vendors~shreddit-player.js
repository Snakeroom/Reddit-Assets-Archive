// https://www.redditstatic.com/desktop2x/vendors~shreddit-player.9fcdabddac32a6ccb93d.js
// Retrieved at 10/5/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~shreddit-player"], {
		"./node_modules/@reddit/faceplate/lib/custom-event.js": function(e, t, r) {
			"use strict";

			function i(e, t, r = !0) {
				return new CustomEvent(e, {
					composed: !0,
					bubbles: r,
					cancelable: !0,
					detail: t
				})
			}
			r.d(t, "a", (function() {
				return i
			}))
		},
		"./node_modules/@reddit/shreddit.components.shreddit-player/dist/index.js": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "ShredditPlayer", (function() {
				return jr
			}));
			var i = r("./node_modules/lit/index.js"),
				n = r("./node_modules/lit/decorators.js"),
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
			const h = d(class extends c {
				constructor(e) {
					var t;
					if (super(e), e.type !== l.ATTRIBUTE || "style" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")
				}
				render(e) {
					return Object.keys(e).reduce((t, r) => {
						const i = e[r];
						return null == i ? t : t + `${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`
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
					for (const i in t) {
						const e = t[i];
						null != e && (this.vt.add(i), i.includes("-") ? r.setProperty(i, e) : r[i] = e)
					}
					return s.c
				}
			});
			var u = r("./node_modules/@reddit/faceplate/lib/custom-event.js");
			const p = {
					rootMargin: "200px"
				},
				v = new Map;

			function g(e, t) {
				return !v.has(e) && t && v.set(e, function(e) {
					return new IntersectionObserver(e => {
						for (const t of e) {
							const e = t.target,
								r = t.isIntersecting ? Object(u.a)("faceplate-enter", t, !1) : Object(u.a)("faceplate-leave", t, !1);
							e.dispatchEvent(r)
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
			}(i.a))) {
				constructor() {
					super(...arguments), this.src = "", this.srcset = "", this.sizes = "", this.loading = y.Lazy, this.width = 0, this.height = 0, this.perfmark = "", this.objectfit = void 0, this.isRequestInProgress = !1
				}
				static get styles() {
					return i.b`
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
					let t = i.c`
      <slot name=${o(e?"loading":void 0)}></slot>
    `;
					const r = this.objectfit ? h({
						objectFit: encodeURIComponent(this.objectfit)
					}) : void 0;
					return this.img && (t = i.c`
        <img
          src="${this.img.src}"
          srcset="${o(this.srcset)}"
          sizes="${o(this.sizes)}"
          alt="${o(this.alt)}"
          style="${o(r)}"
        />
      `), i.c`
      <div
        class="${this.img?"loaded":"placeholder"}"
        style="${h({width:this.width?this.width+"px":"inherit",height:this.height?this.height+"px":"inherit"})}"
        tabindex=${o(this.isActionable?0:void 0)}
      >
        ${t}
      </div>
    `
				}
			};

			function k(e) {
				const t = [e];
				return t.raw = t, Object(i.b)(t)
			}
			Object(a.h)([Object(n.b)({
				type: String
			})], x.prototype, "src", void 0), Object(a.h)([Object(n.b)({
				type: String
			})], x.prototype, "srcset", void 0), Object(a.h)([Object(n.b)({
				type: String
			})], x.prototype, "sizes", void 0), Object(a.h)([Object(n.b)({
				type: String
			})], x.prototype, "loading", void 0), Object(a.h)([Object(n.b)({
				type: Number
			})], x.prototype, "width", void 0), Object(a.h)([Object(n.b)({
				type: Number
			})], x.prototype, "height", void 0), Object(a.h)([Object(n.b)({
				type: String
			})], x.prototype, "perfmark", void 0), Object(a.h)([Object(n.b)({
				type: String
			})], x.prototype, "objectfit", void 0), Object(a.h)([Object(n.b)({
				type: String
			})], x.prototype, "alt", void 0), x = Object(a.h)([Object(n.a)("faceplate-img")], x);
			i.b;
			var E = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
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
					return i.c`
      <div
        class="${e?"loaded":"placeholder"}"
        style="${h(t)}"
        tabindex="${o(this.isActionable?0:void 0)}"
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
					let e = i.c`
      <img
        class="shreddit-img__image"
        alt="${o(this.alt)}"
        src="${this.src}"
        style="${h(this.imageStyle)}"
      />
    `;
					return this.shouldRenderImageLink && (e = i.c`
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
					return e && this.loading === y.Action ? this.loadingSlot : this.defaultSlot
				}
				get loadingSlot() {
					return i.c`<slot name="loading"></slot>`
				}
				get defaultSlot() {
					return i.c`<slot></slot>`
				}
			};
			E([Object(n.b)({
				type: String
			})], S.prototype, "alt", void 0), E([Object(n.b)({
				type: Boolean,
				attribute: "should-render-image-link"
			})], S.prototype, "shouldRenderImageLink", void 0), E([Object(n.b)({
				type: String,
				attribute: "link-title"
			})], S.prototype, "linkTitle", void 0), E([Object(n.b)({
				type: String,
				attribute: "link-href"
			})], S.prototype, "linkHref", void 0), E([Object(n.b)({
				type: String,
				attribute: "link-rel"
			})], S.prototype, "linkRel", void 0), S = E([Object(n.a)("shreddit-img")], S);
			class C extends c {
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
			C.directiveName = "unsafeHTML", C.resultType = 1;
			d(C);
			class O extends C {}
			O.directiveName = "unsafeSVG", O.resultType = 2;
			const A = d(O);
			var P;
			! function(e) {
				e.Small = "sm", e.Medium = "md", e.Large = "lg", e.ExtraLarge = "xl"
			}(P || (P = {}));
			const j = i.b`
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

			function $(e, t, r, s = j) {
				if (r) {
					class o extends i.a {
						constructor() {
							super(...arguments), this.size = P.Small, this.fill = !1
						}
						static get styles() {
							return s
						}
						render() {
							return this.fill ? r : t
						}
					}
					Object(a.h)([Object(n.b)({
						type: String,
						reflect: !0
					})], o.prototype, "size", void 0), Object(a.h)([Object(n.b)({
						type: Boolean
					})], o.prototype, "fill", void 0), window.customElements.define(e, o)
				} else {
					class r extends i.a {
						constructor() {
							super(...arguments), this.size = P.Small
						}
						static get styles() {
							return s
						}
						render() {
							return t
						}
					}
					Object(a.h)([Object(n.b)({
						type: String,
						reflect: !0
					})], r.prototype, "size", void 0), window.customElements.define(e, r)
				}
			}
			$("icon-checkmark", i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 15.583a.72.72 0 01-.513-.212L1.558 9.942l.884-.884L7.5 14.116 18.058 3.558l.884.884-10.93 10.929a.723.723 0 01-.512.212z"/></svg>')}`, i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 15.958a1.102 1.102 0 01-.778-.322l-5.429-5.429 1.414-1.414L7.5 13.586 17.793 3.293l1.414 1.414L8.278 15.636a1.101 1.101 0 01-.778.322z"/></svg>')}`);
			$("icon-collapse-left", i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M18.183 19.067L12.3 13.179v3.491h-1.25v-5a.625.625 0 01.624-.625h5V12.3H13.18l5.887 5.888-.884.879zM7.75 6.866L1.862.979l-.884.883L6.866 7.75H3.375V9h5A.625.625 0 009 8.375v-5H7.75v3.491z"/></svg>')}`, i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9 3.375v5A.625.625 0 018.375 9h-5a.625.625 0 01-.442-1.067L4.726 6.14.714 2.127 2.128.713 6.14 4.726l1.793-1.793A.625.625 0 019 3.375zm10.332 14.543l-4.058-4.058 1.793-1.793A.626.626 0 0016.625 11h-5a.625.625 0 00-.625.625v5a.626.626 0 001.067.442l1.793-1.793 4.058 4.058 1.414-1.414z"/></svg>')}`);
			$("icon-expand-left", i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.134 3.25l4.933 4.933-.884.884L3.25 4.134v3.491H2v-5A.625.625 0 012.625 2h5v1.25H4.134zm12.616 9.125v3.491l-4.933-4.933-.884.884 4.933 4.933h-3.491V18h5a.624.624 0 00.625-.625v-5h-1.25z"/></svg>')}`, i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.274 4.86l3.058 3.058-1.414 1.414L4.86 6.274 3.067 8.067A.625.625 0 012 7.625v-5A.625.625 0 012.625 2h5a.625.625 0 01.442 1.067L6.274 4.86zm11.34 6.94a.627.627 0 00-.681.136l-1.793 1.79-3.058-3.058-1.414 1.414 3.058 3.058-1.793 1.793A.625.625 0 0012.375 18h5a.624.624 0 00.625-.625v-5a.626.626 0 00-.386-.575z"/></svg>')}`);
			$("icon-play", i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.125 19.543A1.124 1.124 0 013 18.418V1.582A1.125 1.125 0 014.735.636l13.048 8.419a1.125 1.125 0 010 1.89L4.735 19.364a1.129 1.129 0 01-.61.179zM4.25 1.811v16.378L16.942 10 4.25 1.811z"/></svg>')}`, i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.125 19.543A1.126 1.126 0 013 18.418V1.582A1.125 1.125 0 014.735.636l13.048 8.418a1.126 1.126 0 010 1.891L4.735 19.363a1.13 1.13 0 01-.61.18z"/></svg>')}`);
			$("icon-pause", i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.875 19h-3.75A1.126 1.126 0 012 17.875V2.125A1.127 1.127 0 013.125 1h3.75A1.127 1.127 0 018 2.125v15.75A1.126 1.126 0 016.875 19zM3.25 17.75h3.5V2.25h-3.5v15.5zM16.875 19h-3.75A1.126 1.126 0 0112 17.875V2.125A1.127 1.127 0 0113.125 1h3.75A1.127 1.127 0 0118 2.125v15.75A1.126 1.126 0 0116.875 19zm-3.625-1.25h3.5V2.25h-3.5v15.5z"/></svg>')}`, i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.875 19h-3.75A1.127 1.127 0 012 17.875V2.125A1.127 1.127 0 013.125 1h3.75A1.127 1.127 0 018 2.125v15.75A1.127 1.127 0 016.875 19zm10 0h-3.75A1.127 1.127 0 0112 17.875V2.125A1.127 1.127 0 0113.125 1h3.75A1.127 1.127 0 0118 2.125v15.75A1.127 1.127 0 0116.875 19z"/></svg>')}`);
			$("icon-volume", i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.891 19.854c-.25 0-.494-.087-.687-.247l-5.389-4.662H2.108A1.125 1.125 0 011 13.807V6.193a1.125 1.125 0 011.108-1.138h1.707L9.19.405a1.089 1.089 0 011.168-.153A1.129 1.129 0 0111 1.285v17.43a1.129 1.129 0 01-.643 1.033c-.145.07-.305.106-.466.106zM2.251 13.7h2.03l5.47 4.727V1.572L4.28 6.305h-2.03V13.7zM16.124 10A3.13 3.13 0 0013 6.875v1.25a1.875 1.875 0 110 3.75v1.25A3.129 3.129 0 0016.125 10zM20 10a7.008 7.008 0 00-7-7v1.25a5.75 5.75 0 110 11.5V17a7.008 7.008 0 007-7z"/></svg>')}`, i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13 13.5v-2a1.5 1.5 0 100-3v-2a3.5 3.5 0 110 7zM13 3v2a5 5 0 110 10v2a7 7 0 100-14zM10.357.252A1.091 1.091 0 009.19.405l-5.374 4.65H2.108A1.125 1.125 0 001 6.193v7.614a1.125 1.125 0 001.108 1.138h1.707l5.39 4.663a1.081 1.081 0 001.153.14A1.131 1.131 0 0011 18.715V1.285a1.13 1.13 0 00-.643-1.033z"/></svg>')}`);
			$("icon-volume-mute", i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M16.784 9.5l2.558 2.558-.884.884-2.558-2.558-2.558 2.558-.884-.884L15.016 9.5l-2.558-2.558.884-.884L15.9 8.616l2.558-2.558.884.884L16.784 9.5zm-6.427 10.248A1.128 1.128 0 0011 18.715V1.286a1.131 1.131 0 00-.643-1.034A1.091 1.091 0 009.19.405L3.815 5.056H2.108A1.124 1.124 0 001 6.194v7.613a1.124 1.124 0 001.108 1.138h1.707L9.2 19.608a1.084 1.084 0 001.157.14zM2.25 6.306h2.031l5.47-4.733v16.855L4.28 13.7h-2.03V6.306z"/></svg>')}`, i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M11 1.285v17.43a1.131 1.131 0 01-.642 1.033 1.081 1.081 0 01-1.153-.14l-5.39-4.663H2.108A1.125 1.125 0 011 13.807V6.193a1.125 1.125 0 011.108-1.138h1.707L9.19.405a1.09 1.09 0 011.168-.153A1.129 1.129 0 0111 1.285zm8.607 5.922l-1.414-1.414L15.9 8.086l-2.293-2.293-1.414 1.414L14.486 9.5l-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414L17.314 9.5l2.293-2.293z"/></svg>')}`);
			$("icon-refresh", i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_457_91)"><path d="M16.75 11.5A7.25 7.25 0 119.5 4.25h4.069L11.31 6.133l.8.96 3.59-2.988a.626.626 0 000-.96L12.109.157l-.8.96L13.569 3H9.5a8.5 8.5 0 108.5 8.5h-1.25z"/></g><defs><clipPath id="clip0_457_91"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_457_79)"><path d="M16 11.5A6.5 6.5 0 119.5 5H11v1.914a1 1 0 001.665.747l3.318-2.951a1 1 0 000-1.495L12.665.265A1 1 0 0011 1.012V3H9.5a8.5 8.5 0 108.5 8.5h-2zm-2.214-7.512v-.05l.028.025-.028.025z"/></g><defs><clipPath id="clip0_457_79"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			$("icon-settings", i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_79)"><path d="M10 20c-.401 0-.802-.027-1.2-.079a1.145 1.145 0 01-.992-1.137v-1.073a.97.97 0 00-.627-.878A.98.98 0 006.1 17l-.755.753a1.149 1.149 0 01-1.521.1 10.16 10.16 0 01-1.671-1.671 1.149 1.149 0 01.1-1.523L3 13.906a.97.97 0 00.176-1.069.98.98 0 00-.887-.649H1.216A1.145 1.145 0 01.079 11.2a9.1 9.1 0 010-2.393 1.145 1.145 0 011.137-.992h1.073a.97.97 0 00.878-.627A.979.979 0 003 6.1l-.754-.754a1.15 1.15 0 01-.1-1.522 10.16 10.16 0 011.673-1.676 1.155 1.155 0 011.522.1L6.1 3a.966.966 0 001.068.176.98.98 0 00.649-.887V1.216A1.145 1.145 0 018.8.079a9.129 9.129 0 012.393 0 1.144 1.144 0 01.991 1.137v1.073a.971.971 0 00.628.878A.977.977 0 0013.905 3l.754-.754a1.152 1.152 0 011.522-.1c.62.49 1.18 1.05 1.671 1.671a1.15 1.15 0 01-.1 1.522L17 6.1a.967.967 0 00-.176 1.068.98.98 0 00.887.649h1.073a1.145 1.145 0 011.137.991 9.096 9.096 0 010 2.392 1.145 1.145 0 01-1.137.992h-1.073A1.041 1.041 0 0017 13.905l.753.755a1.149 1.149 0 01.1 1.521c-.49.62-1.05 1.18-1.671 1.671a1.149 1.149 0 01-1.522-.1L13.906 17a.97.97 0 00-1.069-.176.981.981 0 00-.65.887v1.073a1.144 1.144 0 01-.99 1.137A9.431 9.431 0 0110 20zm-.938-1.307a7.638 7.638 0 001.875 0v-.982a2.292 2.292 0 013.853-1.6l.693.694a8.796 8.796 0 001.326-1.326l-.694-.694a2.29 2.29 0 011.6-3.851h.982a7.746 7.746 0 000-1.876h-.982a2.213 2.213 0 01-2.034-1.4 2.223 2.223 0 01.438-2.451l.694-.693a8.76 8.76 0 00-1.327-1.326l-.692.694a2.219 2.219 0 01-2.434.445 2.221 2.221 0 01-1.419-2.041v-.979a7.638 7.638 0 00-1.875 0v.982a2.213 2.213 0 01-1.4 2.034 2.23 2.23 0 01-2.456-.438l-.693-.694a8.757 8.757 0 00-1.326 1.327l.694.692a2.216 2.216 0 01.445 2.434 2.22 2.22 0 01-2.041 1.418h-.982a7.746 7.746 0 000 1.876h.982a2.213 2.213 0 012.034 1.4 2.223 2.223 0 01-.438 2.451l-.694.693c.394.488.838.933 1.326 1.326l.694-.694a2.218 2.218 0 012.433-.445 2.22 2.22 0 011.418 2.041v.983zM10 13.229a3.23 3.23 0 110-6.458 3.23 3.23 0 010 6.458zm0-5.208a1.979 1.979 0 100 3.958 1.979 1.979 0 000-3.958z"/></g><defs><clipPath id="clip0_473_79"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, i.d`${A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_76)"><path d="M19.921 8.8a1.145 1.145 0 00-1.137-.991h-1.073a.98.98 0 01-.887-.649A.969.969 0 0117 6.1l.754-.754a1.15 1.15 0 00.1-1.522 10.16 10.16 0 00-1.671-1.671 1.152 1.152 0 00-1.522.1L13.905 3a.975.975 0 01-1.09.167.97.97 0 01-.628-.878V1.216A1.144 1.144 0 0011.2.079a9.129 9.129 0 00-2.4 0 1.145 1.145 0 00-.991 1.137v1.073a.98.98 0 01-.649.887A.966.966 0 016.1 3l-.754-.754a1.152 1.152 0 00-1.522-.1 10.16 10.16 0 00-1.676 1.673 1.15 1.15 0 00.1 1.522L3 6.1a.979.979 0 01.167 1.09.97.97 0 01-.878.627H1.216A1.145 1.145 0 00.079 8.8a9.1 9.1 0 000 2.393 1.145 1.145 0 001.137.991h1.073a.98.98 0 01.887.649A.97.97 0 013 13.906l-.751.752a1.149 1.149 0 00-.1 1.523c.49.62 1.05 1.18 1.671 1.671a1.148 1.148 0 001.521-.1L6.1 17a.98.98 0 011.09-.167.97.97 0 01.627.878v1.073a1.145 1.145 0 00.983 1.137 9.103 9.103 0 002.393 0 1.144 1.144 0 00.99-1.137v-1.073a.981.981 0 01.65-.887.968.968 0 011.073.176l.753.753a1.149 1.149 0 001.522.1c.62-.49 1.18-1.05 1.671-1.671a1.149 1.149 0 00-.1-1.521L17 13.905a1.04 1.04 0 01.711-1.717h1.073a1.145 1.145 0 001.137-.992 9.096 9.096 0 000-2.392V8.8zM11.979 10a1.98 1.98 0 11-3.958 0 1.98 1.98 0 013.958 0z"/></g><defs><clipPath id="clip0_473_76"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			var M, R;
			r("./node_modules/core-js/modules/web.dom.iterable.js");

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

			function F(e) {
				return Array.isArray(e)
			}
			const z = "undefined" != typeof window,
				N = z ? null === (M = window.navigator) || void 0 === M ? void 0 : M.userAgent.toLowerCase() : "",
				U = /iphone|ipad|ipod|ios|CriOS|FxiOS/.test(N),
				B = (/android/.test(N), z && /(iPhone|iPod)/gi.test(null === (R = window.navigator) || void 0 === R ? void 0 : R.platform), /firefox/.test(N), z && !!window.chrome);
			z && !B && (window.safari || U || /(apple|safari)/.test(N)), z && "file:" !== window.location.protocol && (window.location.protocol, window.location.hostname);

			function W() {
				const e = null !== (t = null === (r = window) || void 0 === r ? void 0 : r.MediaSource) && void 0 !== t ? t : null === (i = window) || void 0 === i ? void 0 : i.WebKitMediaSource;
				var t, r, i;
				if (V(e)) return !1;
				const n = e && H(e.isTypeSupported) && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
					s = null !== (o = null === (a = window) || void 0 === a ? void 0 : a.SourceBuffer) && void 0 !== o ? o : null === (l = window) || void 0 === l ? void 0 : l.WebKitSourceBuffer;
				var o, a, l;
				const d = V(s) || !V(s.prototype) && H(s.prototype.appendBuffer) && H(s.prototype.remove);
				return !!n && !!d
			}

			function Y(e, t) {
				let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : z;
				const i = r && !V(window.customElements.get(e));
				r && !i && window.customElements.define(e, t)
			}

			function Q(e, t, r) {
				if (q(r) || !1 === r) e.removeAttribute(t);
				else {
					const i = I(r) ? r : "";
					e.setAttribute(t, i)
				}
			}

			function X(e, t, r) {
				e.hasAttribute(t) || e.setAttribute(t, r)
			}

			function K(e, t, r) {
				let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vds";
				e.style.setProperty(`--${i}-${t}`, r || null)
			}
			var G = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");
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
				ie = new Map;

			function ne(e, t, r) {
				const i = {
					host: e,
					callback: r
				};
				e.addController({
					hostConnected: () => {
						var n;
						for (const {
								element: i,
								onDisconnect: s
							} of function(e, t) {
								var r;
								return Array.from(null !== (r = ie.get(t)) && void 0 !== r ? r : []).filter(t => {
									let {
										element: r
									} = t;
									return e !== r && e.contains(r)
								})
							}(e, t)) r(i, s);
						re.set(t, (null !== (n = re.get(t)) && void 0 !== n ? n : new Set).add(i))
					},
					hostDisconnected: () => {
						var e;
						null === (e = re.get(t)) || void 0 === e || e.delete(i)
					}
				})
			}

			function se(e, t) {
				const r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).register,
					i = new G.a,
					n = e => {
						i.add(e)
					},
					s = {
						element: e,
						onDisconnect: n
					};
				e.addController({
					hostConnected() {
						const i = Z(t, {
							bubbles: !0,
							composed: !0,
							detail: s
						});
						var o;
						(e.dispatchEvent(i), r) && (ie.set(r, (null !== (o = ie.get(r)) && void 0 !== o ? o : new Set).add(s)), function(e, t, r) {
							for (const {
									host: n,
									callback: s
								} of Array.from(null !== (i = re.get(t)) && void 0 !== i ? i : [])) {
								var i;
								n !== e && n.contains(e) && s(e, r)
							}
						}(e, r, n))
					},
					hostDisconnected() {
						var e;
						(i.empty(), r) && (null === (e = ie.get(r)) || void 0 === e || e.delete(s))
					}
				})
			}
			var oe = function(e, t, r) {
				var i = null,
					n = null,
					s = function() {
						i && (clearTimeout(i), n = null, i = null)
					},
					o = function() {
						if (!t) return e.apply(this, arguments);
						var o = this,
							a = arguments,
							l = r && !i;
						return s(), n = function() {
							e.apply(o, a)
						}, i = setTimeout((function() {
							if (i = null, !l) {
								var e = n;
								return n = null, e()
							}
						}), t), l ? n() : void 0
					};
				return o.cancel = s, o.flush = function() {
					var e = n;
					s(), e && e()
				}, o
			};

			function ae() {
				let e = T,
					t = T;
				return {
					promise: new Promise((r, i) => {
						e = r, t = i
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
				let t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T;
				const i = new Set;

				function n(r) {
					if (function(e, t) {
							return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
						}(e, r) && (e = r, t)) {
						const t = !he.length;
						for (const r of i) r[1](), he.push(r, e);
						if (t) {
							for (let e = 0; e < he.length; e += 2) he[e][0](he[e + 1]);
							he.length = 0
						}
					}
				}
				return {
					initialValue: e,
					set: n,
					update: function(t) {
						n(t(e))
					},
					subscribe: function(s) {
						const o = [s, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T];
						return i.add(o), 1 === i.size && (t = r(n) || T), s(e), () => {
							var e;
							(i.delete(o), 0 === i.size) && (null === (e = t) || void 0 === e || e(), t = null)
						}
					}
				}
			}

			function pe(e, t, r) {
				const i = !Array.isArray(e),
					n = i ? [e] : e,
					s = t.length < 2;
				return {
					initialValue: o = r,
					subscribe: ue(o, e => {
						let r = !1;
						const o = [];
						let a = 0,
							l = T;
						const d = () => {
								if (a) return;
								l();
								const r = t(i ? o[0] : o, e);
								s ? e(r) : l = H(r) ? r : T
							},
							c = n.map((e, t) => e.subscribe(e => {
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

			function ve(e) {
				let t;
				return e.subscribe(e => t = e)(), t
			}

			function ge(e, t, r) {
				let i, n;
				const s = () => {
					var e, s, o;
					n = null === (e = null !== (s = null === (o = i) || void 0 === o ? void 0 : o.value) && void 0 !== s ? s : t) || void 0 === e ? void 0 : e.subscribe(r)
				};
				de(t) && (i = t.consume(e)), e.addController({
					hostConnected() {
						de(t) ? i.whenRegistered(s) : s()
					},
					hostDisconnected() {
						var e;
						null === (e = n) || void 0 === e || e()
					}
				})
			}

			function be(e, t, r, i) {
				if (!de(t)) return ge(e, t[r], i); {
					const n = t.consume(e);
					let s;
					const o = () => {
						s = n.value[r].subscribe(i)
					};
					e.addController({
						hostConnected: () => {
							n.whenRegistered(o)
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
					return z && !V(screen.orientation) && H(screen.orientation.lock) && H(screen.orientation.unlock)
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
					this._screenOrientation = z ? null === (e = window.screen) || void 0 === e ? void 0 : null === (t = e.orientation) || void 0 === t ? void 0 : t.type : void 0
				}
				_throwIfScreenOrientationUnavailable() {
					if (!this.canOrient) throw Error("Screen orientation API is not available.")
				}
			}
			var ye = r("./node_modules/fscreen/dist/fscreen.esm.js");
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
						r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
					this._skipInitial = !1, this._unobservedUpdate = !1, this._host = e, this._callback = r;
					const {
						target: i,
						skipInitial: n,
						...s
					} = t;
					this._target = null != i ? i : void 0, this._skipInitial = null != n ? n : this._skipInitial, window.IntersectionObserver && (this._observer = new IntersectionObserver(e => {
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

			function ke(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
				return Number(e.toFixed(t))
			}

			function Ee(e, t, r) {
				return Math.max(e, Math.min(r, t))
			}

			function Se(e) {
				var t, r;
				return null !== (t = null === (r = String(e).split(".")[1]) || void 0 === r ? void 0 : r.length) && void 0 !== t ? t : 0
			}
			const Ce = new Map;
			class Oe {
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
						const r = null !== (t = Ce.get(this.id)) && void 0 !== t ? t : [];
						r.push({
							host: this._host,
							setValue: e
						}), Ce.set(this.id, r)
					}
				}
				whenRegistered(e) {
					var t;
					this.registered ? e(this.value) : null === (t = this._registrationCallbacks) || void 0 === t || t.push(e)
				}
			}
			class Ae {
				constructor(e, t, r) {
					this._host = e, this._initValue = t, this._options = r, this._stopDisposal = new G.a, this._value = t(), e.addController({
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
							var r;
							const i = null !== (r = Ce.get(e)) && void 0 !== r ? r : [],
								n = i.filter(e => {
									let {
										host: r
									} = e;
									return t.contains(r)
								});
							return Ce.set(e, i.filter(e => {
								let {
									host: r
								} = e;
								return !t.contains(r)
							})), n
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
					consume: r => new Oe(r, e(), {
						id: t
					}),
					provide: r => new Ae(r, e, {
						id: t
					})
				}
			}
			var je, $e = r("./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js");

			function Me(e, t, r, i) {
				return function(e, t, r) {
					if (!D(t) || t < 0 || t > r) throw new Error(`Failed to execute '${e}' on 'TimeRanges': The index provided (${t}) is non-numeric or out of bounds (0-${r}).`)
				}(e, i, r.length - 1), r[i][t]
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
				return F(e) ? Re(e) : V(e) || V(t) ? Re() : Re([
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

			function Ie(e, t, r) {
				return be(e, De, t, r)
			}
			var He = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const Fe = Symbol("@vidstack/media-provider-discovery");
			class ze extends i.a {
				constructor() {
					super(), this._disconnectDisposal = new G.a, this.loading = "lazy", this._attemptingAutoplay = !1, this.autoplayControlledByMediaVisibility = !1, this.controllerQueue = new le, this._store = Ve(), this._state = me(this._store), this.connectedQueue = fe(this), this.mediaQueue = new le, this.screenOrientationController = new _e(this), this.fullscreenController = new we(this, this.screenOrientationController), se(this, "vds-media-provider-connect", {
						register: Fe
					});
					const e = function() {
						for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
						return new xe(...t)
					}(this, {
						target: this,
						threshold: 0
					}, t => {
						var r;
						"lazy" === this.loading ? null !== (r = t[0]) && void 0 !== r && r.isIntersecting && (this.startLoadingMedia(), e.hostDisconnected()) : e.hostDisconnected()
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
					return i.c`<slot @slotchange="${this.handleDefaultSlotChange}"></slot>`
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
							r = Ee(0, e, 1);
						t !== r && (this._setVolume(r), this.requestUpdate("volume", t))
					})
				}
				get paused() {
					return this._getPaused()
				}
				set paused(e) {
					this.mediaQueue.queue("paused", async () => {
						if (this.paused !== e) try {
							e ? await this.pause() : await this.play(), this.requestUpdate("paused", !e)
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
					this.controllerQueue, this.dispatchEvent(Z("vds-can-load")), this.autoplay && this.dispatchEvent(Z("vds-can-autoplay"))
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
						duration: r
					} = e;
					this.state.canPlay || (this.dispatchEvent(Z("vds-can-play", {
						triggerEvent: t,
						detail: {
							duration: r
						}
					})), this.mediaQueue.start(), this.autoplayControlledByMediaVisibility || await this._attemptAutoplay())
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
					})), this.requestUpdate("autoplay", !e)), this._attemptAutoplay()
				}
				get _canAttemptAutoplay() {
					return this.state.canPlay && this.state.autoplay && !this.state.started
				}
				async _attemptAutoplay() {
					if (this._canAttemptAutoplay) {
						this._attemptingAutoplay = !0;
						try {
							await this.play(), this.dispatchEvent(Z("vds-autoplay", {
								detail: {
									muted: this.muted
								}
							}))
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
			He([Object(n.b)({
				type: Number,
				reflect: !0
			})], ze.prototype, "volume", null), He([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], ze.prototype, "paused", null), He([Object(n.b)({
				type: Number
			})], ze.prototype, "currentTime", null), He([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], ze.prototype, "muted", null), He([Object(n.b)({
				reflect: !0
			})], ze.prototype, "poster", null), He([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], ze.prototype, "loop", null), He([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], ze.prototype, "controls", null), He([Object(n.d)()], ze.prototype, "canLoadPoster", void 0), He([Object(n.b)({
				attribute: "loading"
			})], ze.prototype, "loading", void 0), He([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], ze.prototype, "autoplay", null), He([Object(n.b)({
				attribute: "idle-delay",
				type: Number
			})], ze.prototype, "idleDelay", null), He([Object(n.b)({
				attribute: "fullscreen-orientation"
			})], ze.prototype, "fullscreenOrientation", null);
			var Ne = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const Ue = new Set;
			let Be, We = !1,
				Ye = !1;
			const Qe = e => {
				const {
					muted: t,
					volume: r
				} = e.detail;
				Be = {
					muted: t,
					volume: r
				}
			};
			class Xe extends i.a {
				constructor() {
					super(), this.singlePlayback = !1, this.syncVolume = !1, this._providerDisposal = new G.a, ne(this, Fe, (e, t) => {
						this._handleMediaProviderConnect(e, t)
					})
				}
				static get styles() {
					return i.b`
      :host {
        display: contents;
      }
    `
				}
				disconnectedCallback() {
					super.disconnectedCallback(), this._providerDisposal.empty()
				}
				render() {
					return i.c`<slot></slot>`
				}
				get provider() {
					return this._provider
				}
				_handleMediaProviderConnect(e, t) {
					if (this._provider = e, Ue.add(e), this.singlePlayback) {
						const t = Object(G.e)(e, "vds-play", this._handleMediaPlay.bind(this));
						this._providerDisposal.add(t)
					}
					if (this.syncVolume) {
						const t = Object(G.e)(e, "vds-volume-change", oe(this._handleMediaVolumeChange.bind(this), 10, !0));
						this._providerDisposal.add(t)
					}
					window.requestAnimationFrame(() => {
						var t;
						Be && this._provider && (this._provider.volume = Be.volume, this._provider.muted = Be.muted);
						const r = Object(G.e)(e, "vds-volume-change", Qe);
						this._providerDisposal.add(r), !Be && null !== (t = this._provider) && void 0 !== t && t.autoplay && (this._provider.muted = !0)
					}), t(() => {
						Ue.delete(e), this._provider = void 0, this._providerDisposal.empty()
					})
				}
				_handleMediaPlay() {
					We || (We = !0, Ue.forEach(e => {
						e !== this._provider && (e.paused = !0)
					}), We = !1)
				}
				_handleMediaVolumeChange(e) {
					if (Ye) return;
					Ye = !0;
					const {
						volume: t,
						muted: r
					} = e.detail;
					Ue.forEach(e => {
						e !== this._provider && (e.volume = t, e.muted = r)
					}), this.dispatchEvent(Z("vds-media-volume-sync", {
						bubbles: !0,
						composed: !0,
						detail: e.detail
					})), Ye = !1
				}
			}
			Ne([Object(n.b)({
				type: Boolean,
				attribute: "single-playback"
			})], Xe.prototype, "singlePlayback", void 0), Ne([Object(n.b)({
				type: Boolean,
				attribute: "sync-volume"
			})], Xe.prototype, "syncVolume", void 0), Y("vds-media-sync", Xe);
			var Ke = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js"),
				Ge = function(e, t, r, i) {
					var n, s = arguments.length,
						o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
					if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
					else
						for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
					return s > 3 && o && Object.defineProperty(t, r, o), o
				};
			class Je extends i.a {
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
					}), this.pageController = new Ke.a(this, e => {
						let {
							state: t,
							visibility: r
						} = e;
						if (window.clearTimeout(this._pageTimeout), !this.isIntersecting) return;
						"hidden" === ("state" === this.pageChangeType ? t : r) ? this._triggerOnExit(this.exitPage): this.enterViewport && (this._pageTimeout = window.setTimeout(() => {
							this._triggerOnEnter(this.enterPage), this._pageTimeout = void 0
						}, this.pageEnterDelay)), this._dispatchVisibilityChange()
					}), ne(this, Fe, (e, t) => {
						this._handleMediaProviderConnect(e, t)
					})
				}
				static get styles() {
					return i.b`
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
					return i.c`<slot></slot>`
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
					this._provider && ("play" === e ? this._provider.paused = !1 : "unmute" === e && (this._provider.muted = !1))
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
			Ge([Object(n.b)({
				attribute: "enter-viewport"
			})], Je.prototype, "enterViewport", void 0), Ge([Object(n.b)({
				attribute: "exit-viewport"
			})], Je.prototype, "exitViewport", void 0), Ge([Object(n.b)({
				type: Number,
				attribute: "viewport-enter-delay"
			})], Je.prototype, "viewportEnterDelay", void 0), Ge([Object(n.b)({
				attribute: "enter-page"
			})], Je.prototype, "enterPage", void 0), Ge([Object(n.b)({
				attribute: "exit-page"
			})], Je.prototype, "exitPage", void 0), Ge([Object(n.b)({
				attribute: "page-change-type"
			})], Je.prototype, "pageChangeType", void 0), Ge([Object(n.b)({
				type: Number,
				attribute: "page-enter-delay"
			})], Je.prototype, "pageEnterDelay", void 0), Ge([Object(n.b)({
				attribute: "intersection-root"
			})], Je.prototype, "intersectionRoot", void 0), Ge([Object(n.b)({
				type: Number,
				attribute: "intersection-threshold"
			})], Je.prototype, "intersectionThreshold", void 0), Y("vds-media-visibility", Je);
			var Ze = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js"),
				et = function(e, t, r) {
					var i = null,
						n = null,
						s = r && r.leading,
						o = r && r.trailing;
					null == s && (s = !0);
					null == o && (o = !s);
					1 == s && (o = !1);
					var a = function() {
							i && (clearTimeout(i), i = null)
						},
						l = function() {
							var r = s && !i,
								a = this,
								l = arguments;
							if (n = function() {
									return e.apply(a, l)
								}, i || (i = setTimeout((function() {
									if (i = null, o) return n()
								}), t)), r) return r = !1, n()
						};
					return l.cancel = a, l.flush = function() {
						var e = n;
						a(), e && e()
					}, l
				};
			const tt = Pe(() => ue(void 0));
			class rt {
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
						const t = Object(G.e)(this._host, e, oe(this._handleIdleChange.bind(this), 250, !0));
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
			class it {
				constructor(e) {
					this._host = e, this._disconnectDisposal = new G.a, this.providerQueue = new le, this.providerDisposal = new G.a, this._providerContext = tt.provide(this._host), this._mediaStoreProvider = De.provide(this._host), this.state = me(this._store), this._userIdleController = new rt(this._host, this._store), this._handleIdleChange = Object(Ze.a)(this._host, "vds-user-idle-change", e => {
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
						this.state.paused && (this._pendingMediaRequests.play.push(e), this.provider.paused = !1)
					})), this._handlePauseRequest = Object(Ze.a)(this._host, "vds-pause-request", this._createMediaRequestHandler("paused", e => {
						this.state.paused || (this._pendingMediaRequests.pause.push(e), this.provider.paused = !0)
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
						var r, i;
						"media" === (null !== (t = e.detail) && void 0 !== t ? t : "media") && this._host.canFullscreen ? (this._pendingMediaRequests.fullscreen.push(e), await (null === (r = (i = this._host).enterFullscreen) || void 0 === r ? void 0 : r.call(i))) : this.provider && (this._pendingMediaRequests.fullscreen.push(e), await this.provider.enterFullscreen())
					})), this._handleExitFullscreenRequest = Object(Ze.a)(this._host, "vds-exit-fullscreen-request", this._createMediaRequestHandler("fullscreen", async e => {
						var t;
						if (!this.state.fullscreen) return;
						var r, i;
						"media" === (null !== (t = e.detail) && void 0 !== t ? t : "media") && this._host.canFullscreen ? (this._pendingMediaRequests.fullscreen.push(e), await (null === (r = (i = this._host).exitFullscreen) || void 0 === r ? void 0 : r.call(i))) : this.provider && (this._pendingMediaRequests.fullscreen.push(e), await this.provider.exitFullscreen())
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
					}, 300), this._skipInitialSrcChange = !0, ne(e, Fe, (e, t) => {
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
						for (const r of ce(e)) {
							const i = e[r],
								n = t[r];
							if (!i || !n) continue;
							const s = ve(i);
							s !== ve(n) && n.set(s)
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
						this.providerDisposal.add(Object(G.e)(this._provider, t, r))
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
					this._store.currentTime.set(t), this._store.played.set(r), this._store.waiting.set(!1)
				}
				_handleVolumeChange(e) {
					this._store.volume.set(e.detail.volume), this._store.muted.set(e.detail.muted), this._satisfyMediaRequest("volume", e)
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
					this._store.duration.set(e.detail)
				}
				_handleProgress(e) {
					const {
						buffered: t,
						seekable: r
					} = e.detail, i = 0 === t.length ? 0 : t.end(t.length - 1), n = 0 === r.length ? 0 : r.end(r.length - 1);
					this._store.buffered.set(t), this._store.bufferedAmount.set(i), this._store.seekable.set(r), this._store.seekableAmount.set(n)
				}
				_handleSrcChange(e) {
					this._store.src.set(e.detail)
				}
				_handleViewTypeChange(e) {
					this._store.viewType.set(e.detail)
				}
			}
			class nt {
				constructor(e, t, r) {
					this._host = e, this._store = t, this._mediaProps = r, this._disposal = new G.a, this._host.addController({
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
									i = t.subscribe(t => {
										window.requestAnimationFrame(() => {
											this._handleValueChange(e, r, t)
										})
									});
								this._disposal.add(i)
							}
						}
					})
				}
				_hostDisconnected() {
					for (const e of this._mediaProps) this._handleDisconnect(e, this._getMediaAttrName(e));
					this._disposal.empty()
				}
				_getMediaAttrName(e) {
					return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
				}
			}
			class st extends nt {
				_handleValueChange(e, t, r) {
					window.requestAnimationFrame(() => {
						Q(this._host, t, I(r) || D(r) ? String(r) : !!r)
					})
				}
				_handleDisconnect(e, t) {
					this._host.removeAttribute(t)
				}
			}
			class ot extends nt {
				_handleValueChange(e, t, r) {
					window.requestAnimationFrame(() => {
						this._host.style.setProperty(this._getCssPropName(t), I(r) || D(r) ? String(r) : null)
					})
				}
				_getCssPropName(e) {
					return `--vds-${e}`
				}
				_handleDisconnect(e, t) {
					this._host.style.setProperty(this._getCssPropName(t), null)
				}
			}
			var at = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const lt = Symbol("@vidstack/media-discovery");
			class dt extends i.a {
				constructor() {
					super(), this.controller = new it(this), this.__mediaFullscreen = !1, this.__mediaIsVideoView = !1, this.__mediaPlaysinline = !1, this.screenOrientationController = new _e(this), this.fullscreenController = new we(this, this.screenOrientationController), se(this, "vds-media-connect", {
						register: lt
					}), Ie(this, "fullscreen", e => {
						this.__mediaFullscreen = e
					}), Ie(this, "viewType", e => {
						this.__mediaIsVideoView = e === je.Video
					}), Ie(this, "playsinline", e => {
						this.__mediaPlaysinline = e
					}), this._bindMediaAttributes(), this._bindMediaCSSProperties()
				}
				static get styles() {
					return [i.b`
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
					return i.c`<slot></slot>`
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
						new st(...t)
					}(this, this.controller.store, ["autoplay", "autoplayError", "canLoad", "canPlay", "canFullscreen", "ended", "error", "fullscreen", "userIdle", "loop", "mediaType", "muted", "paused", "playing", "playsinline", "seeking", "started", "viewType", "waiting"])
				}
				_bindMediaCSSProperties() {
					! function() {
						for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
						new ot(...t)
					}(this, this.controller.store, ["bufferedAmount", "currentTime", "duration", "seekableAmount"])
				}
				_shouldHideMediaUI() {
					return U && this.__mediaIsVideoView && (!this.__mediaPlaysinline || this.__mediaFullscreen)
				}
			}
			at([Object(n.d)()], dt.prototype, "__mediaFullscreen", void 0), at([Object(n.d)()], dt.prototype, "__mediaIsVideoView", void 0), at([Object(n.d)()], dt.prototype, "__mediaPlaysinline", void 0), at([Object(n.b)({
				attribute: "fullscreen-orientation"
			})], dt.prototype, "fullscreenOrientation", null), Y("vds-media", dt);
			var ct = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const ht = new Map;
			class ut extends i.a {
				constructor() {
					super(), this._disposal = new G.a, this.repeat = 0, this.priority = 10, this._mediaCurrentTime = 0, this._currentToggleState = !1, this._mediaStoreConsumer = De.consume(this), ge(this, tt, e => {
						this._mediaProviderElement = e
					})
				}
				static get styles() {
					return [i.b`
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
					return this._mediaProviderElement ? ht.get(this._mediaProviderElement) : void 0
				}
				get _pendingAction() {
					var e;
					return null === (e = this._pendingActions) || void 0 === e ? void 0 : e.get(this)
				}
				connectedCallback() {
					super.connectedCallback(), window.requestAnimationFrame(() => {
						this._mediaProviderElement && ht.set(this._mediaProviderElement, new Map)
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
					const i = Object(G.e)(this._mediaProviderElement, this.type, i => {
						if (this._validateEvent(i)) {
							var n;
							if (i.preventDefault(), 0 == r) null === (n = this._pendingActions) || void 0 === n || n.set(this, [i, ae()]);
							! function() {
								let i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								r += 1, window.clearTimeout(t), t = window.setTimeout(() => {
									var t;
									const n = null === (t = e._pendingAction) || void 0 === t ? void 0 : t[1];
									var s;
									i && (null === (s = e._pendingActions) || void 0 === s || s.delete(e));
									vt(e._mediaProviderElement), r = 0, null == n || n.resolve()
								}, 250)
							}(r < this.repeat)
						}
					});
					this._disposal.add(i)
				}
				_validateEvent(e) {
					if (Object(G.c)(e) || Object(G.b)(e) || Object(G.d)(e)) {
						var t, r;
						const i = Object(G.d)(e) ? e.touches[0] : void 0,
							n = null !== (t = null == i ? void 0 : i.clientX) && void 0 !== t ? t : e.clientX,
							s = null !== (r = null == i ? void 0 : i.clientY) && void 0 !== r ? r : e.clientY,
							o = this.getBoundingClientRect(),
							a = s >= o.top && s <= o.bottom && n >= o.left && n <= o.right;
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
						i = null === (t = this._mediaStore[r]) || void 0 === t ? void 0 : t.subscribe(e => {
							this._currentToggleState = !!e
						});
					i && this._disposal.add(i)
				}
			}
			ct([Object(n.b)()], ut.prototype, "type", void 0), ct([Object(n.b)({
				type: Number
			})], ut.prototype, "repeat", void 0), ct([Object(n.b)({
				type: Number
			})], ut.prototype, "priority", void 0), ct([Object(n.b)()], ut.prototype, "action", void 0);
			const pt = new WeakSet;
			async function vt(e) {
				if (pt.has(e)) return;
				const t = ht.get(e);
				if (!t) return;
				pt.add(e);
				const r = Array.from(t.values()).map(e => e[1].promise);
				await Promise.all(r);
				const i = Array.from(t.keys()),
					n = Math.min(...i.map(e => e.priority));
				i.filter(e => e.priority <= n).map(e => {
					const r = t.get(e)[0];
					e.performAction(r)
				}), t.clear(), pt.delete(e)
			}
			Y("vds-gesture", ut);
			class gt {
				static async load(e) {
					return new Promise((t, r) => {
						this.pendingRequests[e] ? this.pendingRequests[e].push({
							resolve: t,
							reject: r
						}) : (this.pendingRequests[e] = [{
							resolve: t,
							reject: r
						}], async function(e) {
							if (!L(document.querySelector(`script[src="${e}"]`))) return;
							const t = document.createElement("script"),
								r = ae();
							t.src = e, t.onload = r.resolve, t.onerror = r.reject;
							const i = document.getElementsByTagName("script")[0];
							return q(i.parentNode) || i.parentNode.insertBefore(t, i), r.promise
						}(e).then(() => {
							this.pendingRequests[e].forEach(e => e.resolve()), delete this.pendingRequests[e]
						}).catch(t => {
							this.pendingRequests[e].forEach(e => e.reject(t)), delete this.pendingRequests[e]
						}))
					})
				}
			}
			var bt;
			gt.pendingRequests = {},
				function(e) {
					e[e.Aborted = 1] = "Aborted", e[e.Network = 2] = "Network", e[e.Decode = 3] = "Decode", e[e.SrcNotSupported = 4] = "SrcNotSupported"
				}(bt || (bt = {}));
			const mt = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
				ft = /\.(mp4|og[gv]|webm|mov|m4v|avi)($|\?)/i;
			class _t extends ze {
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
					const r = null !== (e = null === (t = this.mediaElement) || void 0 === t ? void 0 : t.currentTime) && void 0 !== e ? e : 0;
					this.state.currentTime !== r && this._updateCurrentTime(r), this._timeRAF = window.requestAnimationFrame(() => {
						V(this._timeRAF) || this._requestTimeUpdate()
					})
				}
				_updateCurrentTime(e, t) {
					var r, i;
					this.dispatchEvent(Z("vds-time-update", {
						detail: {
							currentTime: Math.min(e, null !== (r = null === (i = this.mediaElement) || void 0 === i ? void 0 : i.duration) && void 0 !== r ? r : 0),
							played: this.mediaElement.played
						},
						triggerEvent: t
					}))
				}
				handleDefaultSlotChange() {
					window.requestAnimationFrame(() => {
						const e = function(e, t) {
							var r, i;
							const n = t ? `slot[name="${t}"]` : "slot:not([name])",
								s = null === (r = e.shadowRoot) || void 0 === r ? void 0 : r.querySelector(n),
								o = null !== (i = null == s ? void 0 : s.assignedNodes({
									flatten: !0
								})) && void 0 !== i ? i : [];
							return Array.prototype.filter.call(o, e => e.nodeType == Node.ELEMENT_NODE)
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
					var e, t, r;
					const i = [null === (e = this.mediaElement) || void 0 === e ? void 0 : e.src, ...Array.from(null !== (t = null === (r = this.mediaElement) || void 0 === r ? void 0 : r.querySelectorAll("source")) && void 0 !== t ? t : []).map(e => e.src)].filter(Boolean);
					return Array.from(new Set(i))
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
						const r = e[t].bind(this),
							i = Object(G.e)(this.mediaElement, t, async e => {
								await r(e)
							});
						this._mediaElementDisposal.add(i)
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
					if (Math.trunc(r) === Math.trunc(this.mediaElement.duration) && Se(this.mediaElement.duration) > Se(r) && (this._updateCurrentTime(this.mediaElement.duration, e), !this.mediaElement.ended)) try {
						this.play()
					} catch (i) {}
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
					return e = this.state.currentSrc, mt.test(e) ? $e.a.Audio : ft.test(e) ? $e.a.Video : $e.a.Unknown;
					var e
				}
			}(function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				s > 3 && o && Object.defineProperty(t, r, o)
			})([Object(n.b)({
				reflect: !0
			})], _t.prototype, "preload", void 0);
			class yt extends we {
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
					return this.isSupportedNatively ? super._addFullscreenChangeEventListener(e) : this.isSupportedOnSafari ? Object(G.e)(this._host, "vds-video-presentation-change", this._handlePresentationModeChange.bind(this)) : T
				}
				_handlePresentationModeChange(e) {
					this._handleFullscreenChange(e)
				}
				_addFullscreenErrorEventListener(e) {
					return this.isSupportedNatively ? super._addFullscreenErrorEventListener(e) : T
				}
			}

			function wt(e, t) {
				var r;
				if (t.bubbles && t.composed) return;
				const i = new J(t.type, {
					triggerEvent: null !== (r = t.triggerEvent) && void 0 !== r ? r : t,
					detail: t.detail,
					bubbles: t.bubbles,
					cancelable: t.cancelable,
					composed: t.composed
				});
				e.dispatchEvent(i)
			}
			class xt {
				constructor(e) {
					this._host = e, this._listenerDisposal = new G.a;
					const t = e.firstUpdated;
					e.firstUpdated = r => {
						null == t || t.call(e, r), this._listenerDisposal.add(Object(G.e)(e, "vds-media-element-connected", () => {
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
					var t, r;
					null === (t = this._host.videoElement) || void 0 === t || null === (r = t.webkitSetPresentationMode) || void 0 === r || r.call(t, e)
				}
				_addPresentationModeChangeEventListener() {
					return !this.isSupported || q(this._host.videoElement) ? T : Object(G.e)(this._host.videoElement, "webkitpresentationmodechanged", this._handlePresentationModeChange.bind(this))
				}
				_handlePresentationModeChange(e) {
					wt(this._host, e), this._host.dispatchEvent(Z("vds-video-presentation-change", {
						detail: this.presentationMode,
						triggerEvent: e
					}))
				}
			}
			class kt extends _t {
				constructor() {
					super(...arguments), this.presentationController = new xt(this), this.fullscreenController = new yt(this, this.screenOrientationController, this.presentationController)
				}
				static get styles() {
					return [i.b`
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
			const Et = new Map;

			function St(e) {
				return e.replace("vds-", "").replace(/-./g, e => e[1].toUpperCase())
			}
			const Ct = "vds-hls-",
				Ot = ["lib-load", "instance", "unsupported"];

			function At(e) {
				return e.startsWith(Ct) && !Ot.some(t => e.startsWith(`${Ct}${t}`))
			}
			var Pt = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const jt = /\.(m3u8)($|\?)/i,
				$t = (new Set(["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"]), "https://cdn.jsdelivr.net/npm/hls.js@^1.0.0/dist/hls.light.min.js");
			class Mt extends kt {
				constructor() {
					super(), this._isHlsEngineAttached = !1, this.hlsConfig = {}, this.hlsLibrary = $t, this._currentHlsSrc = "", this._hlsEventListeners = [], Object.defineProperty(this, "hls-config", {
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
					return this.state.src.some(e => jt.test(e))
				}
				_preconnectToHlsLibDownload() {
					var e;
					this.canLoad || !I(this.hlsLibrary) || (e = this.hlsLibrary, Et.has(e)) || function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "preconnect";
						if (!(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : z)) return !1;
						if (!L(document.querySelector(`link[href="${e}"]`))) return !0;
						const r = document.createElement("link");
						r.rel = t, r.href = e, r.crossOrigin = "true", document.head.append(r)
					}(this.hlsLibrary)
				}
				async _buildHlsEngine() {
					var e, t;
					let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					if (q(this.videoElement) && !r && !V(this.hlsEngine)) return;
					V(this.hlsEngine) || this._destroyHlsEngine();
					const i = {
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
							if (I(e)) {
								if (Et.has(e)) return Et.get(e);
								null === (t = r.onLoadStart) || void 0 === t || t.call(r);
								try {
									var i;
									if (await gt.load(e), !H(window.Hls)) throw Error("[vds]: Failed loading `hls.js`. Could not find a valid constructor at `window.Hls`.");
									const t = window.Hls;
									return null === (i = r.onLoaded) || void 0 === i || i.call(r, t), Et.set(e, t), t
								} catch (s) {
									var n;
									null === (n = r.onLoadError) || void 0 === n || n.call(r, s)
								}
							}
						}(this.hlsLibrary, i), V(this._Hls) && !I(this.hlsLibrary) && (this._Hls = await async function(e) {
							var t;
							let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							if (V(e)) return;
							var i;
							if (null === (t = r.onLoadStart) || void 0 === t || t.call(r), !H(e)) return null === (i = r.onLoaded) || void 0 === i || i.call(r, e), e;
							const n = String(e);
							if (Et.has(n)) {
								var s;
								const e = Et.get(n);
								return null === (s = r.onLoaded) || void 0 === s || s.call(r, e), e
							}
							try {
								var o;
								const t = null === (o = await e()) || void 0 === o ? void 0 : o.default;
								if (!t || !t.isSupported) throw Error("[vds]: Failed importing `hls.js`. Dynamic import returned invalid constructor.");
								var a;
								return null === (a = r.onLoaded) || void 0 === a || a.call(r, t), Et.set(n, t), t
							} catch (d) {
								var l;
								null === (l = r.onLoadError) || void 0 === l || l.call(r, d)
							}
						}(this.hlsLibrary, i)), this.Hls) {
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
							if (jt.test(t)) return void this._handleHlsSrcChange(t);
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
							type: r,
							listener: i,
							options: n
						} = e;
						null === (t = this.hlsEngine) || void 0 === t || t[null != n && n.once ? "once" : "on"](r, i, null == n ? void 0 : n.context)
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
						totalduration: i
					} = t.details, n = new J(e, {
						detail: t
					}), s = r ? $e.a.LiveVideo : $e.a.Video;
					this.state.mediaType !== s && this.dispatchEvent(Z("vds-media-type-change", {
						detail: s,
						triggerEvent: n
					})), this.state.duration !== i && this.dispatchEvent(Z("vds-duration-change", {
						detail: i,
						triggerEvent: n
					}))
				}
				addEventListener(e, t, r) {
					if (!At(e)) return super.addEventListener(e, t, r); {
						const n = St(e);
						var i;
						this._hlsEventListeners.some(e => e.type === n && e.listener === t) || (this._hlsEventListeners.push({
							type: n,
							listener: t,
							options: r
						}), null === (i = this.hlsEngine) || void 0 === i || i[null != r && r.once ? "once" : "on"](n, t, null == r ? void 0 : r.context))
					}
				}
				removeEventListener(e, t, r) {
					if (At(e)) {
						var i;
						const n = St(e);
						return this._hlsEventListeners = this._hlsEventListeners.filter(e => e.type === n && e.listener === t), void(null === (i = this.hlsEngine) || void 0 === i || i.off(n, t, null == r ? void 0 : r.context, null == r ? void 0 : r.once))
					}
					return super.removeEventListener(e, t, r)
				}
			}
			Pt([Object(n.b)({
				type: Object,
				attribute: "hls-config"
			})], Mt.prototype, "hlsConfig", void 0), Y("vds-hls", Mt);
			class Rt {
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
						const r = Z(e, {
							...t,
							bubbles: !0,
							composed: !0
						});
						this._host.dispatchEvent(r)
					})
				}
			}
			class Tt {
				constructor(e) {
					this._host = e;
					const t = new G.a;
					let r = !1;
					t.add(Object(G.e)(document, "pointerdown", () => {
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

			function Lt(e) {
				return new Tt(e)
			}

			function Vt(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.type.startsWith("key")) && void 0 !== t && t
			}
			const qt = i.b`
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
			var Dt = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			class It extends i.a {
				constructor() {
					super(), this.pressed = !1, this.disabled = !1, this._handleButtonClickCapture = Object(Ze.a)(this, "click", e => {
						this.disabled && (e.preventDefault(), e.stopImmediatePropagation())
					}, {
						capture: !0
					}), Lt(this), ["pointerup", "keydown"].forEach(e => {
						Object(Ze.a)(this, e, e => {
							this.disabled || Vt(e) && ! function(e) {
								return Vt(e) && ("Enter" === e.key || " " === e.key)
							}(e) || this._handleButtonClick(e)
						})
					})
				}
				static get styles() {
					return [qt]
				}
				static get parts() {
					return []
				}
				connectedCallback() {
					super.connectedCallback(), X(this, "tabindex", "0"), X(this, "role", "button"), this._updateAriaPressedAttr()
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
					return i.c`<slot></slot>`
				}
				_handleButtonClick(e) {
					this.pressed = !this.pressed
				}
			}
			Dt([Object(n.b)({
				type: Boolean
			})], It.prototype, "pressed", void 0), Dt([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], It.prototype, "disabled", void 0);
			class Ht extends It {
				constructor() {
					super(), this._mediaRemote = new Rt(this), Ie(this, "fullscreen", e => {
						this.pressed = e, Q(this, "fullscreen", e)
					}), Ie(this, "canFullscreen", e => {
						Q(this, "hidden", !e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), X(this, "aria-label", "Fullscreen")
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.exitFullscreen(this.fullscreenTarget, e) : this._mediaRemote.enterFullscreen(this.fullscreenTarget, e))
				}
			}(function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				s > 3 && o && Object.defineProperty(t, r, o)
			})([Object(n.b)({
				attribute: "fullscreen-target"
			})], Ht.prototype, "fullscreenTarget", void 0), Y("vds-fullscreen-button", Ht);
			Y("vds-mute-button", class extends It {
				constructor() {
					super(), this._mediaRemote = new Rt(this), this._volume = 1, this._muted = !1, Ie(this, "volume", e => {
						this._volume = e, this._handleMutedChange()
					}), Ie(this, "muted", e => {
						this._muted = e, this._handleMutedChange()
					})
				}
				connectedCallback() {
					super.connectedCallback(), X(this, "aria-label", "Mute")
				}
				_handleMutedChange() {
					const e = this._muted || 0 === this._volume;
					this.pressed = e, Q(this, "muted", e)
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.unmute(e) : this._mediaRemote.mute(e))
				}
			});
			Y("vds-play-button", class extends It {
				constructor() {
					super(), this._mediaRemote = new Rt(this), Ie(this, "paused", e => {
						this.pressed = !e, Q(this, "paused", e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), X(this, "aria-label", "Play")
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.pause(e) : this._mediaRemote.play(e))
				}
			});
			var Ft = k(".-translate-y-1\\/2,.-translate-x-1\\/2,.-translate-y-\\[115\\%\\],.-translate-x-\\[110\\%\\],.scale-150,.scale-75,.scale-\\[1\\.15\\],.scale-100,.transform,.group-open\\:rotate-180{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1}.shadow-sm,.shadow-none,.shadow-md{--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:960px){.container{max-width:960px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1200px){.container{max-width:1200px}}@media (min-width:1416px){.container{max-width:1416px}}@media (min-width:1920px){.container{max-width:1920px}}.a{border:var(--line-a-focus) solid transparent;border-radius:2px;color:var(--color-a-default);font-size:1em;padding:0 var(--spacer-a-px);margin:calc(-1 * var(--line-a-focus)) calc(-1 * (var(--spacer-a-px) + var(--line-a-focus)));text-decoration:none}.a:hover{color:var(--color-a-hover)}.a:visited:not(.no-visited),.a.visited:not(.no-visited){color:var(--color-a-visited)}.a:focus{border-color:var(--color-global-focus, transparent);outline:var(--line-a-outline-moz) dotted #212121;outline:var(--line-a-outline-wb) auto -webkit-focus-ring-color}.a:focus:not(:focus-visible){border-color:transparent}.button{background:var(--button-color-background);border-radius:999px;border:none;border:var(--button-border-width, 0) solid var(--button-border-color, transparent);box-shadow:var(--button-shadow);box-sizing:border-box;color:var(--button-color-text);cursor:pointer;display:inline-block;font:var(--button-font);height:var(--button-height);line-height:calc(var(--button-height) - (2 * var(--button-border-width, 0)));outline:none;overflow:hidden;padding:0 calc(var(--button-padding) - var(--button-border-width, 0));text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;--button-border-color:var(--button-border-color-default);--button-border-width:var(--button-border-width-default);--button-color-background:var(--button-color-background-default);--button-color-text:var(--button-color-text-default)}.button .button-icon{margin-right:var(--spacer-xs)}.button .dropdown-icon{transform:rotate(0deg);transition:transform .2s ease-in-out}.button:focus,.button:hover{--button-color-overlay:var(--color-button-overlay-focus)}.button:hover{--button-border-color:var(--button-border-color-hover);--button-color-background:var(--button-color-background-hover)}.button:focus{--button-shadow:var(--elevation-button-focus)}.button:focus:not(:focus-visible){--button-shadow:0 0 0 var(--line-l) transparent}.button:active{--button-border-color:var(--button-border-color-active);--button-color-overlay:var(--color-button-overlay-active);--button-color-background:linear-gradient(var(--color-interactive-pressed), var(--color-interactive-pressed)),\n      var(--button-color-background-active)}.button:focus,.button:hover,.button:active{position:relative}.button:focus::before,.button:hover::before,.button:active::before{content:'';position:absolute;left:0;right:0;top:0;bottom:0;display:block;background:var(--button-color-overlay);border-radius:inherit;pointer-events:none}.button:disabled{--button-border-color:var(--button-border-color-disabled);--button-color-background:var(--button-color-background-disabled);--button-color-text:var(--button-color-text-disabled);cursor:not-allowed}.button:disabled::before{display:none}.button.button-activated{--button-border-color:var(--button-border-color-activated);--button-border-width:var(--button-border-width-activated);--button-color-background:var(--button-color-background-activated);--button-color-text:var(--button-color-text-activated)}.button.button-activated span.dropdown-icon{transform:rotate(180deg);transition:transform .22s ease-in-out}.button-shell{background:var(--button-color-background);border-radius:999px;border:none;border:var(--button-border-width, 0) solid var(--button-border-color, transparent);box-shadow:var(--button-shadow);box-sizing:border-box;color:var(--button-color-text);cursor:pointer;display:inline-block;font:var(--button-font);height:var(--button-height);line-height:calc(var(--button-height) - (2 * var(--button-border-width, 0)));outline:none;overflow:hidden;padding:0 calc(var(--button-padding) - var(--button-border-width, 0));text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;--button-border-color:var(--button-border-color-default);--button-border-width:var(--button-border-width-default);--button-color-background:var(--button-color-background-default);--button-color-text:var(--button-color-text-default)}.button-large{--button-height:var(--size-button-lg-h);--button-padding:var(--spacer-xs);--button-font:var(--font-button-lg);--button-border-width-default:var(--line-button-lg-border);--button-border-width-activated:var(--line-button-border-activated)}.button-medium{--button-height:var(--size-button-md-h);--button-padding:var(--spacer-xs);--button-font:var(--font-button-md);--button-border-width-default:var(--line-button-md-border);--button-border-width-activated:var(--line-button-border-activated)}.button-small{--button-height:var(--size-button-sm-h);--button-padding:var(--spacer-2xs);--button-font:var(--font-button-sm);--button-border-width-default:var(--line-button-sm-border);--button-border-width-activated:var(--line-button-border-activated)}.button-x-small{--button-height:var(--size-button-xs-h);--button-padding:var(--spacer-sm);--button-font:var(--font-button-xs);--button-border-width-default:var(--line-button-xs-border);--button-border-width-activated:var(--line-button-border-activated)}.button-icon{--button-padding:0;width:var(--button-height)}.button-primary{--button-color-background-default:var(--color-primary-background);--button-color-background-focus:var(--color-primary-background);--button-color-background-hover:var(--color-button-primary-background-hover);--button-color-background-active:linear-gradient(var(--color-button-primary-background-hover), var(--color-button-primary-background-hover));--button-color-background-disabled:var(--color-button-primary-background-disabled);--button-color-background-activated:var(--color-global-white);--button-color-text-default:var(--color-global-white);--button-color-text-disabled:var(--color-button-primary-text-disabled);--button-color-text-activated:var(--color-button-primary-text-activated);--button-border-color-default:transparent;--button-border-color-hover:var(--color-button-primary-border-hover);--button-border-color-active:var(--color-button-primary-border-active);--button-border-color-activated:var(--color-button-primary-border-activated);--button-border-color-disabled:var(--color-button-primary-border-disabled)}.button-secondary{--button-color-background-default:var(--color-button-secondary-background);--button-color-background-focus:var(--color-button-secondary-background-focus);--button-color-background-hover:var(--color-button-secondary-background-hover);--button-color-background-active:linear-gradient(var(--color-button-secondary-background-hover), var(--color-button-secondary-background-hover));--button-color-background-disabled:var(--color-button-secondary-background-disabled);--button-color-background-activated:var(--color-button-secondary-background-activated);--button-color-text-default:var(--color-button-secondary-text);--button-color-text-disabled:var(--color-button-secondary-text-disabled);--button-color-text-activated:var(--color-button-secondary-text-activated);--button-border-color-default:var(--color-button-secondary-border);--button-border-color-hover:var(--color-button-secondary-border-hover);--button-border-color-active:var(--color-button-secondary-border-active);--button-border-color-activated:var(--color-button-secondary-border-activated);--button-border-color-disabled:var(--color-button-secondary-border-disabled)}.button-tertiary{--button-color-background-default:var(--color-button-tertiary-background);--button-color-background-focus:var(--color-button-tertiary-background-focus);--button-color-background-hover:var(--color-button-tertiary-background-hover);--button-color-background-disabled:var(--color-button-tertiary-background-disabled);--button-color-background-activated:var(--color-button-tertiary-background-activated);--button-color-text-default:var(--color-button-tertiary-text);--button-color-text-disabled:var(--color-button-tertiary-text-disabled);--button-color-text-activated:var(--color-button-tertiary-text-activated);--button-border-color-default:transparent;--button-border-color-hover:var(--color-button-tertiary-border-hover);--button-border-color-active:var(--color-button-tertiary-border-active);--button-border-color-activated:transparent;--button-border-color-disabled:transparent}.button-plain{--button-color-background-default:transparent;--button-color-background-focus:transparent;--button-color-background-hover:var(--color-button-plain-background-hover);--button-color-background-disabled:var(--color-button-plain-background-disabled);--button-color-background-activated:var(--color-button-plain-background-activated);--button-color-background-active:linear-gradient(var(--color-button-secondary-background-hover), var(--color-button-secondary-background-hover));--button-color-text-default:var(--color-button-plain-text);--button-color-text-disabled:var(--color-button-plain-text-disabled);--button-color-text-activated:var(--color-button-plain-text-activated);--button-border-color-default:transparent;--button-border-color-hover:var(--color-button-plain-border-hover);--button-border-color-active:var(--color-button-plain-border-active);--button-border-color-activated:transparent;--button-border-color-disabled:transparent}.button-outline{--button-color-background-default:transparent;--button-color-background-focus:transparent;--button-color-background-hover:transparent;--button-color-background-active:linear-gradient(transparent, transparent);--button-color-background-disabled:transparent;--button-color-background-activated:transparent;--button-color-text-default:var(--color-neutral-content);--button-color-text-disabled:var(--color-neutral-content-disabled);--button-color-text-activated:var(--color-neutral-content-strong);--button-border-color-default:var(--color-neutral-content-weak);--button-border-color-hover:var(--color-neutral-content-disabled);--button-border-color-active:var(--color-neutral-content);--button-border-color-activated:var(--color-neutral-content-strong);--button-border-color-disabled:var(--color-neutral-content-disabled);--button-border-width-default:var(--line-md);--button-border-width-activated:var(--line-md)}.button-destructive{--button-color-background-default:var(--color-danger-background);--button-color-background-focus:var(--color-danger-background-hover);--button-color-background-hover:var(--color-danger-background-hover);--button-color-background-active:linear-gradient(var(--color-danger-background-hover), var(--color-danger-background-hover));--button-color-background-disabled:var(--color-danger-background);--button-color-text-default:var(--color-danger-content-default);--button-color-text-disabled:var(--color-danger-content-default);--button-border-color-default:transparent;--button-border-color-hover:transparent;--button-border-color-active:transparent}.button-media{--button-color-background-default:var(--color-media-background);--button-color-background-focus:var(--color-media-background-hover);--button-color-background-hover:var(--color-media-background-hover);--button-color-background-active:linear-gradient(var(--color-media-background-hover), var(--color-media-background-hover));--button-color-text-default:white;--button-color-text-disabled:var(--color-media-onbackground-disabled);--button-color-background-disabled:var(--color-media-background);--button-border-color-default:transparent;--button-border-color-hover:transparent;--button-border-color-active:transparent;--button-border-color-activated:white}.button-brand{--button-color-background-default:var(--color-brand-background);--button-color-background-hover:var(--color-brand-background-hover);--button-color-background-active:linear-gradient(var(--color-brand-background-hover), var(--color-brand-background-hover));--button-color-background-disabled:var(--color-neutral-background-disabled);--button-color-text-default:var(--color-danger-content-default);--button-color-text-disabled:var(--color-neutral-content-disabled);--button-border-color-default:transparent;--button-border-color-hover:transparent;--button-border-color-active:transparent;--button-border-width-default:0}.button-success{--button-color-background-default:var(--color-success-background);--button-color-background-focus:var(--color-success-background-hover);--button-color-background-hover:var(--color-success-background-hover);--button-color-background-active:linear-gradient(var(--color-success-background-hover), var(--color-success-background-hover));--button-color-background-disabled:var(--color-button-primary-background-disabled);--button-color-text-default:var(--color-success-onBackground);--button-color-text-disabled:var(--color-button-primary-text-disabled);--button-border-color-default:transparent;--button-border-color-hover:transparent;--button-border-color-active:transparent}.button-plain-inverted{--button-color-background-default:transparent;--button-color-background-focus:var(--color-neutral-content);--button-color-background-hover:var(--color-neutral-content);--button-color-background-active:var(--color-interactive-pressed);--button-color-background-disabled:transparent;--button-color-text-default:var(--color-neutral-background-weak);--button-color-text-disabled:var(--color-neutral-content);--button-border-color-default:transparent;--button-border-color-hover:transparent;--button-border-color-active:transparent}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.invisible{visibility:hidden}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.\\!absolute{position:absolute !important}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0px;right:0px;bottom:0px;left:0px}.top-0{top:0px}.left-0{left:0px}.left-xs{left:.5rem}.top-\\[-4px\\]{top:-4px}.top-\\[8px\\]{top:8px}.right-\\[90px\\]{right:90px}.right-sm{right:.75rem}.top-sm{top:.75rem}.left-md{left:1rem}.top-md{top:1rem}.right-0{right:0px}.bottom-0{bottom:0px}.top-100{top:100%}.right-\\[-\\.875rem\\]{right:-0.875rem}.top-\\[12px\\]{top:12px}.right-\\[12px\\]{right:12px}.left-lg{left:1.5rem}.top-\\[14px\\]{top:14px}.right-\\[-7px\\]{right:-7px}.top-2xs{top:.25rem}.right-2xs{right:.25rem}.top-1\\/2{top:50%}.bottom-2xl{bottom:3rem}.-right-\\[0\\.0625rem\\]{right:-0.0625rem}.-right-\\[0\\.0825rem\\]{right:-0.0825rem}.-right-\\[0\\.125rem\\]{right:-0.125rem}.-right-\\[\\.65rem\\]{right:-0.65rem}.-right-\\[\\.75rem\\]{right:-0.75rem}.isolate{isolation:isolate}.z-\\[3\\]{z-index:3}.z-10{z-index:10}.z-\\[4\\]{z-index:4}.z-0{z-index:0}.z-20{z-index:20}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.col-span-4{grid-column:span 4 / span 4}.col-span-2{grid-column:span 2 / span 2}.col-span-full{grid-column:1 / -1}.col-span-7{grid-column:span 7 / span 7}.col-span-1{grid-column:span 1 / span 1}.col-start-2{grid-column-start:2}.float-right{float:right}.m-xs{margin:.5rem}.m-0{margin:0px}.m-auto{margin:auto}.m-sm{margin:.75rem}.my-sm{margin-top:.75rem;margin-bottom:.75rem}.mx-auto{margin-left:auto;margin-right:auto}.mx-xs{margin-left:.5rem;margin-right:.5rem}.mx-md{margin-left:1rem;margin-right:1rem}.mx-0{margin-left:0px;margin-right:0px}.mx-2xs{margin-left:.25rem;margin-right:.25rem}.-mx-md{margin-left:-1rem;margin-right:-1rem}.my-0{margin-top:0px;margin-bottom:0px}.mx-sm{margin-left:.75rem;margin-right:.75rem}.ml-\\[0\\.375rem\\]{margin-left:.375rem}.mr-md{margin-right:1rem}.ml-2xs{margin-left:.25rem}.mt-\\[0\\.4375rem\\]{margin-top:.4375rem}.mt-sm{margin-top:.75rem}.mt-2xs{margin-top:.25rem}.ml-\\[13px\\]{margin-left:13px}.mt-md{margin-top:1rem}.ml-sm{margin-left:.75rem}.ml-auto{margin-left:auto}.mt-\\[10px\\]{margin-top:10px}.mb-0{margin-bottom:0px}.mb-md{margin-bottom:1rem}.mt-lg{margin-top:1.5rem}.mb-lg{margin-bottom:1.5rem}.ml-xs{margin-left:.5rem}.mt-0{margin-top:0px}.mt-xs{margin-top:.5rem}.mt-\\[-66px\\]{margin-top:-66px}.mr-xs{margin-right:.5rem}.mb-xs{margin-bottom:.5rem}.mr-sm{margin-right:.75rem}.mt-\\[2px\\]{margin-top:2px}.mb-sm{margin-bottom:.75rem}.mt-\\[-12px\\]{margin-top:-12px}.mb-\\[-22px\\]{margin-bottom:-22px}.mt-xl{margin-top:2rem}.-mt-xl{margin-top:-2rem}.ml-\\[14px\\]{margin-left:14px}.mr-0{margin-right:0px}.mb-2xs{margin-bottom:.25rem}.mt-\\[1\\.25rem\\]{margin-top:1.25rem}.ml-md{margin-left:1rem}.mt-\\[6px\\]{margin-top:6px}.mr-auto{margin-right:auto}.ml-0{margin-left:0px}.mb-\\[10px\\]{margin-bottom:10px}.-ml-md{margin-left:-1rem}.-mr-\\[20px\\]{margin-right:-20px}.-mt-sm{margin-top:-0.75rem}.mt-\\[20px\\]{margin-top:20px}.mr-2xs{margin-right:.25rem}.mr-\\[6px\\]{margin-right:6px}.mb-\\[14px\\]{margin-bottom:14px}.mt-\\[14px\\]{margin-top:14px}.mb-2xl{margin-bottom:3rem}.mt-\\[0\\.375rem\\]{margin-top:.375rem}.ml-\\[-0\\.875rem\\]{margin-left:-0.875rem}.mt-\\[1\\.5rem\\]{margin-top:1.5rem}.mb-\\[0\\.5rem\\]{margin-bottom:.5rem}.-ml-\\[var\\(--rem4\\)\\]{margin-left:calc(var(--rem4) * -1)}.-ml-\\[var\\(--rem6\\)\\]{margin-left:calc(var(--rem6) * -1)}.-ml-\\[var\\(--rem8\\)\\]{margin-left:calc(var(--rem8) * -1)}.-ml-\\[var\\(--rem10\\)\\]{margin-left:calc(var(--rem10) * -1)}.-ml-\\[var\\(--rem12\\)\\]{margin-left:calc(var(--rem12) * -1)}.-ml-\\[var\\(--rem14\\)\\]{margin-left:calc(var(--rem14) * -1)}.-ml-\\[var\\(--rem16\\)\\]{margin-left:calc(var(--rem16) * -1)}.-ml-\\[var\\(--rem18\\)\\]{margin-left:calc(var(--rem18) * -1)}.-ml-\\[var\\(--rem20\\)\\]{margin-left:calc(var(--rem20) * -1)}.mr-\\[length\\:var\\(--rem6\\)\\]{margin-right:var(--rem6)}.mt-\\[-0\\.125rem\\]{margin-top:-0.125rem}.ml-\\[-\\.25rem\\]{margin-left:-0.25rem}.mt-\\[-0\\.25rem\\]{margin-top:-0.25rem}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.list-item{display:list-item}.hidden{display:none}.\\!hidden{display:none !important}.aspect-square{aspect-ratio:1 / 1}.h-\\[3rem\\]{height:3rem}.h-xl{height:2rem}.h-\\[2rem\\]{height:2rem}.h-\\[88px\\]{height:88px}.h-full{height:100%}.h-xs{height:.5rem}.h-md{height:1rem}.h-px{height:1px}.h-lg{height:1.5rem}.h-\\[length\\:var\\(--size-button-md-h\\)\\]{height:var(--size-button-md-h)}.h-\\[28px\\]{height:28px}.h-\\[66px\\]{height:66px}.h-\\[0\\.875rem\\]{height:.875rem}.h-2xl{height:3rem}.h-3xl{height:4rem}.h-\\[20px\\]{height:20px}.h-auto{height:auto}.h-\\[1\\.75rem\\]{height:1.75rem}.h-\\[640px\\]{height:640px}.h-\\[650px\\]{height:650px}.h-\\[40px\\]{height:40px}.h-100{height:100%}.h-sm{height:.75rem}.h-\\[1\\.25rem\\]{height:1.25rem}.h-2xs{height:.25rem}.h-screen{height:100vh}.h-\\[12rem\\]{height:12rem}.h-\\[2\\.5rem\\]{height:2.5rem}.h-4xl{height:6rem}.h-\\[1rem\\]{height:1rem}.h-\\[1\\.5rem\\]{height:1.5rem}.h-\\[2\\.87rem\\]{height:2.87rem}.h-\\[3\\.25rem\\]{height:3.25rem}.h-\\[4\\.5rem\\]{height:4.5rem}.h-\\[3\\.5rem\\]{height:3.5rem}.h-\\[4rem\\]{height:4rem}.h-\\[5\\.5rem\\]{height:5.5rem}.h-\\[\\.25rem\\]{height:.25rem}.h-\\[\\.375rem\\]{height:.375rem}.h-\\[\\.625rem\\]{height:.625rem}.max-h-\\[253px\\]{max-height:253px}.max-h-\\[100vw\\]{max-height:100vw}.max-h-\\[calc\\(100vh-var\\(--shreddit-header-height\\)-15px-10px\\)\\]{max-height:calc(100vh - var(--shreddit-header-height) - 15px - 10px)}.max-h-\\[calc\\(100vh-var\\(--shreddit-header-height\\)-15px\\)\\]{max-height:calc(100vh - var(--shreddit-header-height) - 15px)}.max-h-full{max-height:100%}.min-h-\\[1rem\\]{min-height:1rem}.w-100{width:100%}.w-auto{width:auto}.w-full{width:100%}.w-xs{width:.5rem}.w-md{width:1rem}.w-\\[calc\\(100\\%-20px\\)\\]{width:calc(100% - 20px)}.w-3xl{width:4rem}.w-\\[inherit\\]{width:inherit}.w-\\[400px\\]{width:400px}.w-\\[850px\\]{width:850px}.w-xl{width:2rem}.w-\\[600px\\]{width:600px}.w-fit{width:fit-content}.w-lg{width:1.5rem}.w-1\\/2{width:50%}.w-5xl{width:8rem}.w-\\[1rem\\]{width:1rem}.w-\\[1\\.25rem\\]{width:1.25rem}.w-\\[1\\.5rem\\]{width:1.5rem}.w-\\[2rem\\]{width:2rem}.w-\\[2\\.5rem\\]{width:2.5rem}.w-\\[3rem\\]{width:3rem}.w-\\[2\\.87rem\\]{width:2.87rem}.w-\\[3\\.25rem\\]{width:3.25rem}.w-\\[4\\.5rem\\]{width:4.5rem}.w-\\[3\\.5rem\\]{width:3.5rem}.w-\\[4rem\\]{width:4rem}.w-\\[5\\.5rem\\]{width:5.5rem}.w-\\[\\.25rem\\]{width:.25rem}.w-\\[\\.375rem\\]{width:.375rem}.w-\\[\\.625rem\\]{width:.625rem}.min-w-0{min-width:0px}.min-w-\\[2rem\\]{min-width:2rem}.min-w-\\[0\\.5rem\\]{min-width:.5rem}.max-w-full{max-width:100%}.max-w-none{max-width:none}.max-w-\\[7\\.5rem\\]{max-width:7.5rem}.max-w-\\[calc\\(100vw-4rem\\)\\]{max-width:calc(100vw - 4rem)}.max-w-\\[50\\%\\]{max-width:50%}.max-w-\\[550px\\]{max-width:550px}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.flex-grow{flex-grow:1}.grow{flex-grow:1}.grow-0{flex-grow:0}.basis-0{flex-basis:0px}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[115\\%\\]{--tw-translate-y:-115%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-\\[110\\%\\]{--tw-translate-x:-110%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-150{--tw-scale-x:1.5;--tw-scale-y:1.5;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-75{--tw-scale-x:.75;--tw-scale-y:.75;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-\\[1\\.15\\]{--tw-scale-x:1.15;--tw-scale-y:1.15;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-gpu{transform:translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.cursor-none{cursor:none}.select-none{user-select:none}.resize-y{resize:vertical}.resize{resize:both}.list-none{list-style-type:none}.grid-cols-left-nav{grid-template-columns:1rem 2.875rem 1fr 3.875rem}.grid-cols-8{grid-template-columns:repeat(8, minmax(0, 1fr))}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-items-center{justify-items:center}.gap-xs{gap:.5rem}.gap-\\[2px\\]{gap:2px}.gap-sm{gap:.75rem}.gap-2xs{gap:.25rem}.gap-\\[1rem\\]{gap:1rem}.gap-\\[length\\:var\\(--rem12\\)\\]{gap:var(--rem12)}.self-end{align-self:flex-end}.self-center{align-self:center}.self-baseline{align-self:baseline}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-scroll{overflow:scroll}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.overflow-ellipsis{text-overflow:ellipsis}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.break-normal{overflow-wrap:normal;word-break:normal}.rounded-full{border-radius:624.9375rem}.rounded-lg{border-radius:2rem}.rounded-\\[16px\\]{border-radius:16px}.rounded-\\[24px\\]{border-radius:24px}.rounded-none{border-radius:0rem}.rounded-\\[1\\.25rem\\]{border-radius:1.25rem}.rounded-\\[12px\\]{border-radius:12px}.rounded-\\[20px\\]{border-radius:20px}.rounded-sm{border-radius:.25rem}.rounded-\\[14px\\]{border-radius:14px}.rounded-\\[40px\\]{border-radius:40px}.rounded-\\[\\.5rem\\]{border-radius:.5rem}.rounded-t-lg{border-top-left-radius:2rem;border-top-right-radius:2rem}.rounded-r-sm{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-r-lg{border-top-right-radius:2rem;border-bottom-right-radius:2rem}.rounded-br-none{border-bottom-right-radius:0rem}.border-0{border-width:0rem}.border{border-width:.0625rem}.border-\\[1px\\]{border-width:1px}.border-sm{border-width:.0625rem}.border-lg{border-width:.25rem}.border-\\[0\\.125rem\\]{border-width:.125rem}.border-md{border-width:.125rem}.border-y-sm{border-top-width:.0625rem;border-bottom-width:.0625rem}.border-x-0{border-left-width:0rem;border-right-width:0rem}.border-b-sm{border-bottom-width:.0625rem}.border-t-sm{border-top-width:.0625rem}.border-b-0{border-bottom-width:0rem}.border-r-0{border-right-width:0rem}.border-l-0{border-left-width:0rem}.border-l-sm{border-left-width:.0625rem}.border-b{border-bottom-width:.0625rem}.border-r-md{border-right-width:.125rem}.border-solid{border-style:solid}.border-none{border-style:none}.border-tone-2{border-color:var(--color-tone-2)}.border-neutral-content{border-color:var(--color-neutral-content)}.border-tone-4{border-color:var(--color-tone-4)}.border-action-secondary{border-color:var(--color-action-secondary)}.border-tone-7{border-color:var(--color-tone-7)}.border-neutral-border-weak{border-color:var(--color-neutral-border-weak)}.border-tone-5{border-color:var(--color-tone-5)}.border-danger-content{border-color:var(--color-danger-content)}.border-tone-6{border-color:var(--color-tone-6)}.border-\\[\\#dadce0\\]{--tw-border-opacity:1;border-color:rgb(218 220 224 / var(--tw-border-opacity))}.border-tone-3{border-color:var(--color-tone-3)}.border-coolgray-350{--tw-border-opacity:1;border-color:rgb(184 197 201 / var(--tw-border-opacity))}.border-global-white{border-color:var(--color-global-white)}.border-transparent{border-color:transparent}.border-alert-negative{border-color:var(--color-alert-negative)}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.border-neutral-border{border-color:var(--color-neutral-border)}.border-neutral-background{border-color:var(--color-neutral-background)}.border-secondary-background-selected{border-color:var(--color-secondary-background-selected)}.border-action-upvote{border-color:var(--color-action-upvote)}.border-action-downvote{border-color:var(--color-action-downvote)}.border-b-neutral-border{border-bottom-color:var(--color-neutral-border)}.bg-transparent{background-color:transparent}.bg-scrim{background-color:var(--color-scrim)}.bg-tone-7{background-color:var(--color-tone-7)}.bg-tone-6{background-color:var(--color-tone-6)}.bg-tone-4{background-color:var(--color-tone-4)}.bg-neutral-background{background-color:var(--color-neutral-background)}.bg-ui-modalbackground{background-color:var(--color-ui-modalbackground)}.bg-tone-5{background-color:var(--color-tone-5)}.bg-\\[\\#d7dfe2\\]{--tw-bg-opacity:1;background-color:rgb(215 223 226 / var(--tw-bg-opacity))}.bg-\\[color\\:var\\(--color-tone-6\\)\\]{background-color:var(--color-tone-6)}.bg-neutral-background-weak{background-color:var(--color-neutral-background-weak)}.bg-global-orangered{background-color:var(--color-global-orangered)}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-opacity-50{background-color:var(--color-opacity-50)}.bg-secondary-background{background-color:var(--color-secondary-background)}.bg-neutral-background-hover{background-color:var(--color-neutral-background-hover)}.bg-primary-background{background-color:var(--color-primary-background)}.bg-online{background-color:var(--color-online)}.bg-secondary-background-selected{background-color:var(--color-secondary-background-selected)}.bg-warning-content{background-color:var(--color-warning-content)}.bg-success-content{background-color:var(--color-success-content)}.bg-neutral-content{background-color:var(--color-neutral-content)}.bg-danger-content{background-color:var(--color-danger-content)}.bg-neutral-content-disabled{background-color:var(--color-neutral-content-disabled)}.bg-brand-background{background-color:var(--color-brand-background)}.bg-brand-onBackground{background-color:var(--color-brand-onBackground)}.bg-action-upvote{background-color:var(--color-action-upvote)}.bg-action-downvote{background-color:var(--color-action-downvote)}.bg-interactive-background-disabled{background-color:var(--color-interactive-background-disabled)}.bg-\\[color\\:var\\(--color-button-plain-background-disabled\\)\\]{background-color:var(--color-button-plain-background-disabled)}.bg-opacity-25{--tw-bg-opacity:.25}.bg-opacity-50{--tw-bg-opacity:.5}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.bg-gradient-to-l{background-image:linear-gradient(to left, var(--tw-gradient-stops))}.from-white{--tw-gradient-from:#ffffff;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0))}.from-transparent{--tw-gradient-from:transparent;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgb(0 0 0 / 0))}.via-white{--tw-gradient-stops:var(--tw-gradient-from), #ffffff, var(--tw-gradient-to, rgb(255 255 255 / 0))}.to-\\[var\\(--color-neutral-border\\)\\]{--tw-gradient-to:var(--color-neutral-border)}.stroke-tone-2{stroke:var(--color-tone-2)}.stroke-\\[2px\\]{stroke-width:2px}.object-contain{object-fit:contain}.p-md{padding:1rem}.p-0{padding:0px}.p-sm{padding:.75rem}.p-\\[8px\\]{padding:8px}.p-2xs{padding:.25rem}.p-\\[100px\\]{padding:100px}.p-xs{padding:.5rem}.p-px{padding:1px}.px-md{padding-left:1rem;padding-right:1rem}.py-xs{padding-top:.5rem;padding-bottom:.5rem}.px-2xs{padding-left:.25rem;padding-right:.25rem}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.py-\\[8px\\]{padding-top:8px;padding-bottom:8px}.py-0{padding-top:0px;padding-bottom:0px}.px-\\[0\\.25rem\\]{padding-left:.25rem;padding-right:.25rem}.px-sm{padding-left:.75rem;padding-right:.75rem}.py-2xs{padding-top:.25rem;padding-bottom:.25rem}.px-2xl{padding-left:3rem;padding-right:3rem}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.py-\\[\\.75rem\\]{padding-top:.75rem;padding-bottom:.75rem}.px-xs{padding-left:.5rem;padding-right:.5rem}.py-\\[6px\\]{padding-top:6px;padding-bottom:6px}.py-\\[0\\.125rem\\]{padding-top:.125rem;padding-bottom:.125rem}.px-\\[length\\:var\\(--rem14\\)\\]{padding-left:var(--rem14);padding-right:var(--rem14)}.px-lg{padding-left:1.5rem;padding-right:1.5rem}.px-\\[2px\\]{padding-left:2px;padding-right:2px}.px-\\[length\\:var\\(--rem10\\)\\]{padding-left:var(--rem10);padding-right:var(--rem10)}.px-\\[length\\:var\\(--rem6\\)\\]{padding-left:var(--rem6);padding-right:var(--rem6)}.px-\\[length\\:var\\(--rem8\\)\\]{padding-left:var(--rem8);padding-right:var(--rem8)}.px-\\[length\\:var\\(--rem12\\)\\]{padding-left:var(--rem12);padding-right:var(--rem12)}.py-\\[length\\:var\\(--rem2\\)\\]{padding-top:var(--rem2);padding-bottom:var(--rem2)}.py-\\[length\\:var\\(--rem8\\)\\]{padding-top:var(--rem8);padding-bottom:var(--rem8)}.py-\\[length\\:var\\(--rem10\\)\\]{padding-top:var(--rem10);padding-bottom:var(--rem10)}.py-\\[length\\:var\\(--rem14\\)\\]{padding-top:var(--rem14);padding-bottom:var(--rem14)}.pl-sm{padding-left:.75rem}.pt-0{padding-top:0px}.pr-0{padding-right:0px}.pt-px{padding-top:1px}.pt-xs{padding-top:.5rem}.pl-xs{padding-left:.5rem}.pr-xs{padding-right:.5rem}.pt-sm{padding-top:.75rem}.pb-lg{padding-bottom:1.5rem}.pb-xs{padding-bottom:.5rem}.pl-2xs{padding-left:.25rem}.pr-sm{padding-right:.75rem}.pt-\\[20px\\]{padding-top:20px}.pl-lg{padding-left:1.5rem}.pr-lg{padding-right:1.5rem}.pb-\\[9px\\]{padding-bottom:9px}.pt-md{padding-top:1rem}.pb-sm{padding-bottom:.75rem}.pl-md{padding-left:1rem}.pr-\\[20px\\]{padding-right:20px}.pr-\\[1\\.25rem\\]{padding-right:1.25rem}.pt-\\[100px\\]{padding-top:100px}.pr-\\[0\\.125rem\\]{padding-right:.125rem}.pr-2xs{padding-right:.25rem}.pt-2xs{padding-top:.25rem}.pr-md{padding-right:1rem}.pb-0{padding-bottom:0px}.pb-md{padding-bottom:1rem}.pl-\\[length\\:var\\(--rem10\\)\\]{padding-left:var(--rem10)}.pr-\\[length\\:var\\(--rem14\\)\\]{padding-right:var(--rem14)}.pr-\\[length\\:var\\(--rem6\\)\\]{padding-right:var(--rem6)}.pl-\\[length\\:var\\(--rem14\\)\\]{padding-left:var(--rem14)}.pr-\\[length\\:var\\(--rem10\\)\\]{padding-right:var(--rem10)}.pl-\\[0\\.125rem\\]{padding-left:.125rem}.pl-\\[length\\:var\\(--rem12\\)\\]{padding-left:var(--rem12)}.pr-\\[length\\:var\\(--rem12\\)\\]{padding-right:var(--rem12)}.pr-\\[length\\:var\\(--rem16\\)\\]{padding-right:var(--rem16)}.pr-\\[length\\:var\\(--rem8\\)\\]{padding-right:var(--rem8)}.pl-\\[length\\:var\\(--rem16\\)\\]{padding-left:var(--rem16)}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.align-text-bottom{vertical-align:text-bottom}.font-sans{font-family:var(--font-sans)}.text-20{font-size:1.25rem;line-height:1.25rem}.text-14{font-size:.875rem;line-height:1.25rem}.text-12{font-size:.75rem;line-height:1rem}.text-18{font-size:1.125rem;line-height:1.5rem}.text-\\[14px\\]{font-size:14px}.text-16{font-size:1rem;line-height:1.25rem}.text-\\[30px\\]{font-size:30px}.text-\\[2\\.625rem\\]{font-size:2.625rem}.text-64{font-size:4rem;line-height:4rem}.text-\\[16px\\]{font-size:16px}.text-\\[22px\\]{font-size:22px}.text-\\[20px\\]{font-size:20px}.text-24{font-size:1.5rem;line-height:1.75rem}.text-32{font-size:2rem;line-height:2.25rem}.text-10{font-size:.625rem;line-height:1rem}.text-\\[2rem\\]{font-size:2rem}.text-\\[2\\.5rem\\]{font-size:2.5rem}.font-normal{font-weight:400}.font-semibold{font-weight:600}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.lowercase{text-transform:lowercase}.capitalize{text-transform:capitalize}.italic{font-style:italic}.not-italic{font-style:normal}.leading-\\[17px\\]{line-height:17px}.leading-none{line-height:1}.leading-5{line-height:1.25rem}.leading-3{line-height:.75rem}.leading-4{line-height:1rem}.leading-\\[0\\.875rem\\]{line-height:.875rem}.text-neutral-content-weak{color:var(--color-neutral-content-weak)}.text-primary-background{color:var(--color-primary-background)}.text-primary-background-hover{color:var(--color-primary-background-hover)}.text-global-white{color:var(--color-global-white)}.text-tone-3{color:var(--color-tone-3)}.text-primary{color:var(--color-primary)}.text-global-alienblue{color:var(--color-global-alienblue)}.text-tone-1{color:var(--color-tone-1)}.text-action-secondary{color:var(--color-action-secondary)}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-category-nsfw{color:var(--color-category-nsfw)}.text-tone-2{color:var(--color-tone-2)}.text-neutral-content{color:var(--color-neutral-content)}.text-puregray-400{--tw-text-opacity:1;color:rgb(172 172 172 / var(--tw-text-opacity))}.text-danger-content{color:var(--color-danger-content)}.text-tone-7{color:var(--color-tone-7)}.text-action-primary{color:var(--color-action-primary)}.text-neutral-content-strong{color:var(--color-neutral-content-strong)}.text-identity-moderator{color:var(--color-identity-moderator)}.text-secondary-weak{color:var(--color-secondary-weak)}.text-alert-negative{color:var(--color-alert-negative)}.text-secondary{color:var(--color-secondary)}.text-category-spoiler{color:var(--color-category-spoiler)}.text-warning-content{color:var(--color-warning-content)}.text-primary-onBackground{color:var(--color-primary-onBackground)}.text-brand-onBackground{color:var(--color-brand-onBackground)}.text-neutral-content-disabled{color:var(--color-neutral-content-disabled)}.text-\\[color\\:var\\(--color-button-secondary-text-disabled\\)\\]{color:var(--color-button-secondary-text-disabled)}.text-\\[color\\:var\\(--color-button-plain-text-disabled\\)\\]{color:var(--color-button-plain-text-disabled)}.underline{text-decoration-line:underline}.overline{text-decoration-line:overline}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.opacity-50{opacity:.5}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-25{opacity:.25}.opacity-75{opacity:.75}.opacity-60{opacity:.6}.opacity-40{opacity:.4}.shadow-sm{--tw-shadow:var(--elevation-sm);--tw-shadow-colored:var(--elevation-sm);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:var(--elevation-md);--tw-shadow-colored:var(--elevation-md);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4, 0, .2, 1);transition-duration:150ms}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4, 0, .2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.duration-150{transition-duration:150ms}.duration-100{transition-duration:100ms}.ease-out{transition-timing-function:cubic-bezier(0, 0, .2, 1)}.ease-linear{transition-timing-function:linear}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide::-webkit-scrollbar{display:none}.placeholder\\:text-transparent::placeholder{color:transparent}.before\\:absolute::before{content:var(--tw-content);position:absolute}.before\\:top-\\[28px\\]::before{content:var(--tw-content);top:28px}.before\\:left-\\[9px\\]::before{content:var(--tw-content);left:9px}.before\\:top-\\[-3px\\]::before{content:var(--tw-content);top:-3px}.before\\:left-\\[-16\\.5px\\]::before{content:var(--tw-content);left:-16.5px}.before\\:top-0::before{content:var(--tw-content);top:0px}.before\\:left-\\[16\\.5px\\]::before{content:var(--tw-content);left:16.5px}.before\\:h-\\[calc\\(100\\%-28px\\)\\]::before{content:var(--tw-content);height:calc(100% - 28px)}.before\\:h-full::before{content:var(--tw-content);height:100%}.before\\:h-\\[calc\\(100\\%\\+6px\\)\\]::before{content:var(--tw-content);height:calc(100% + 6px)}.before\\:border-y-0::before{content:var(--tw-content);border-top-width:0rem;border-bottom-width:0rem}.before\\:border-l-\\[1px\\]::before{content:var(--tw-content);border-left-width:1px}.before\\:border-r-\\[0px\\]::before{content:var(--tw-content);border-right-width:0px}.before\\:border-solid::before{content:var(--tw-content);border-style:solid}.before\\:border-tone-4::before{content:var(--tw-content);border-color:var(--color-tone-4)}.before\\:content-\\[\\'\\'\\]::before{--tw-content:'';content:var(--tw-content)}.after\\:absolute::after{content:var(--tw-content);position:absolute}.after\\:-top-sm::after{content:var(--tw-content);top:-0.75rem}.after\\:left-\\[-16\\.5px\\]::after{content:var(--tw-content);left:-16.5px}.after\\:bottom-\\[15px\\]::after{content:var(--tw-content);bottom:15px}.after\\:left-\\[3\\.5px\\]::after{content:var(--tw-content);left:3.5px}.after\\:h-\\[30px\\]::after{content:var(--tw-content);height:30px}.after\\:h-\\[54px\\]::after{content:var(--tw-content);height:54px}.after\\:w-md::after{content:var(--tw-content);width:1rem}.after\\:w-\\[23px\\]::after{content:var(--tw-content);width:23px}.after\\:rounded-bl-\\[12px\\]::after{content:var(--tw-content);border-bottom-left-radius:12px}.after\\:border-y-0::after{content:var(--tw-content);border-top-width:0rem;border-bottom-width:0rem}.after\\:border-l-\\[1px\\]::after{content:var(--tw-content);border-left-width:1px}.after\\:border-r-\\[0px\\]::after{content:var(--tw-content);border-right-width:0px}.after\\:border-b-\\[1px\\]::after{content:var(--tw-content);border-bottom-width:1px}.after\\:border-solid::after{content:var(--tw-content);border-style:solid}.after\\:border-tone-4::after{content:var(--tw-content);border-color:var(--color-tone-4)}.after\\:content-\\[\\'\\'\\]::after{--tw-content:'';content:var(--tw-content)}.visited\\:bg-transparent:visited{background-color:transparent}.visited\\:no-underline:visited{text-decoration-line:none}.hover\\:fixed:hover{position:fixed}.hover\\:border-secondary-background-selected:hover{border-color:var(--color-secondary-background-selected)}.hover\\:border-secondary-background-hover:hover{border-color:var(--color-secondary-background-hover)}.hover\\:bg-transparent:hover{background-color:transparent}.hover\\:bg-secondary-background-hover:hover{background-color:var(--color-secondary-background-hover)}.hover\\:bg-secondary-background-selected:hover{background-color:var(--color-secondary-background-selected)}.hover\\:bg-transparent-background-hover:hover{background-color:var(--color-transparent-background-hover)}.hover\\:bg-brand-background-hover:hover{background-color:var(--color-brand-background-hover)}.hover\\:text-secondary:hover{color:var(--color-secondary)}.hover\\:text-global-white:hover{color:var(--color-global-white)}.hover\\:text-action-upvote:hover{color:var(--color-action-upvote)}.hover\\:text-action-downvote:hover{color:var(--color-action-downvote)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:no-underline:hover{text-decoration-line:none}.focus\\:fixed:focus{position:fixed}.focus\\:rounded-sm:focus{border-radius:.25rem}.focus\\:border-global-focus:focus{border-color:var(--color-global-focus)}.focus\\:bg-transparent:focus{background-color:transparent}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:text-action-upvote:focus-visible{color:var(--color-action-upvote)}.focus-visible\\:text-action-downvote:focus-visible{color:var(--color-action-downvote)}.active\\:fixed:active{position:fixed}.active\\:border-0:active{border-width:0rem}.active\\:bg-transparent:active{background-color:transparent}.active\\:bg-secondary-background:active{background-color:var(--color-secondary-background)}.active\\:bg-none:active{background-image:none}.active\\:no-underline:active{text-decoration-line:none}.disabled\\:text-interactive-content-disabled:disabled{color:var(--color-interactive-content-disabled)}.group[open] .group-open\\:rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.nd\\:visible:not(:defined){visibility:visible}@media (prefers-color-scheme:dark){.dark\\:from-neutral-background{--tw-gradient-from:var(--color-neutral-background);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0))}.dark\\:via-neutral-background{--tw-gradient-stops:var(--tw-gradient-from), var(--color-neutral-background), var(--tw-gradient-to, rgb(255 255 255 / 0))}.dark\\:text-coolgray-1000{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}}@media (min-width:640px){.xs\\:right-\\[-30px\\]{right:-30px}.xs\\:z-10{z-index:10}.xs\\:my-md{margin-top:1rem;margin-bottom:1rem}.xs\\:ml-0{margin-left:0px}.xs\\:mb-lg{margin-bottom:1.5rem}.xs\\:block{display:block}.xs\\:flex{display:flex}.xs\\:rounded-\\[16px\\]{border-radius:16px}.xs\\:rounded-b-\\[16px\\]{border-bottom-right-radius:16px;border-bottom-left-radius:16px}.xs\\:rounded-t-\\[16px\\]{border-top-left-radius:16px;border-top-right-radius:16px}.xs\\:border-x-sm{border-left-width:.0625rem;border-right-width:.0625rem}.xs\\:border-solid{border-style:solid}.xs\\:border-tone-4{border-color:var(--color-tone-4)}.xs\\:px-0{padding-left:0px;padding-right:0px}}@media (min-width:960px){.s\\:max-h-\\[318px\\]{max-height:318px}.s\\:px-sm{padding-left:.75rem;padding-right:.75rem}}@media (min-width:1200px){.m\\:ml-sm{margin-left:.75rem}.m\\:max-h-\\[337px\\]{max-height:337px}}@media (min-width:1416px){.l\\:max-h-\\[352px\\]{max-height:352px}}@media (min-width:1920px){.xl\\:max-h-\\[452px\\]{max-height:452px}}");
			const zt = i.b`
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

  .quality-options {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 2px;
    bottom: 44px;
  }

  .quality-options button {
    background: none;
    opacity: 0.75;
    white-space: nowrap;
  }
  .quality-options button:hover {
    opacity: 1;
  }
`;
			var Nt = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const Ut = [1080, 720, 540, 480, 360, 240];
			class Bt extends i.a {
				constructor() {
					super(...arguments), this.showOptions = !1, this.selectedLevel = -1
				}
				static get styles() {
					return [Ft, zt]
				}
				connectedCallback() {
					super.connectedCallback(), X(this, "aria-label", "Quality level")
				}
				levelsToDisplay() {
					const {
						levels: e = []
					} = this.hlsEngine || {}, t = e.map((e, t) => ({
						...e,
						levelIndex: t
					})).sort((e, t) => t.height - e.height);
					return Ut.map((e, r) => {
						const i = t.filter(t => t.height >= e && (0 === r || t.height < Ut[r - 1])),
							n = i[i.length - 1];
						return n ? {
							levelIndex: n.levelIndex,
							resolution: e
						} : void 0
					}).filter(Boolean)
				}
				toggleOptions() {
					this.showOptions = !this.showOptions
				}
				handleOptionSelection(e) {
					this.hlsEngine && (this.hlsEngine.currentLevel = e), this.selectedLevel = e
				}
				render() {
					var e;
					return i.c`
      <div class="relative">
        <icon-settings
          @click="${this.toggleOptions}"
          fill
          class="control flex items-center justify-center text-18 cursor-pointer ease duration-150 scale-100"
        ></icon-settings>
        <!-- Quality options -->
        <div
          class="quality-options flex-col border-r-md absolute z-10 bottom-0 ${this.showOptions?"flex":"hidden"}"
        >
          ${null===(e=this.levelsToDisplay())||void 0===e?void 0:e.map(e=>e?i.c`
                  <button
                    class="px-sm py-2xs text-left border-none text-white cursor-pointer"
                    @click="${()=>this.handleOptionSelection(e.levelIndex)}"
                  >
                    ${e.resolution}p
                    ${this.selectedLevel===e.levelIndex?i.c`<icon-checkmark></icon-checkmark>`:""}
                  </button>
                `:"")}
          <button
            class="px-sm py-2xs text-left border-none text-white cursor-pointer"
            @click="${()=>this.handleOptionSelection(-1)}"
          >
            Auto ${-1===this.selectedLevel?i.c`<icon-checkmark></icon-checkmark>`:""}
          </button>
        </div>
      </div>
    `
				}
			}

			function Wt(e, t) {
				const r = String(e),
					i = r.length;
				if (i < t) {
					return `${"0".repeat(t-i)}${e}`
				}
				return r
			}
			var Yt;

			function Qt(e) {
				const t = Math.trunc(e / 3600),
					r = Math.trunc(e % 3600 / 60),
					i = Math.trunc(e % 60),
					n = Number((e - Math.trunc(e)).toPrecision(3));
				return {
					[Yt.Hours]: t,
					[Yt.Minutes]: r,
					[Yt.Seconds]: i,
					[Yt.Fraction]: n
				}
			}

			function Xt(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const {
					hours: i,
					minutes: n,
					seconds: s
				} = Qt(e), o = t ? Wt(i, 2) : i, a = Wt(n, 2), l = Wt(s, 2);
				return i > 0 || r ? `${o}:${a}:${l}` : `${n}:${l}`
			}

			function Kt(e) {
				const t = [],
					{
						hours: r,
						minutes: i,
						seconds: n
					} = Qt(e),
					s = (e, t) => 1 === e ? t : `${t}s`;
				return r > 0 && t.push(`${r} ${s(r,"hour")}`), i > 0 && t.push(`${i} ${s(i,"minute")}`), (n > 0 || 0 === t.length) && t.push(`${n} ${s(n,"second")}`), t.join(", ")
			}
			Nt([Object(n.b)({
					attribute: !1
				})], Bt.prototype, "hlsEngine", void 0), Nt([Object(n.d)()], Bt.prototype, "showOptions", void 0), Nt([Object(n.d)()], Bt.prototype, "selectedLevel", void 0), Y("vds-quality-switcher", Bt),
				function(e) {
					e.Hours = "hours", e.Minutes = "minutes", e.Seconds = "seconds", e.Fraction = "fraction"
				}(Yt || (Yt = {}));
			var Gt = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			class Jt extends i.a {
				constructor() {
					super(...arguments), this._disposal = new G.a, this._mediaStoreConsumer = De.consume(this), this.__seconds = 0, this.type = "current", this.showHours = !1, this.padHours = !1, this.remainder = !1
				}
				static get styles() {
					return [i.b`
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
					return i.c`${this._getFormattedTime()}`
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
					return Xt(this.__seconds, this.padHours, this.showHours)
				}
			}

			function Zt(e) {
				let t;
				const r = () => !V(t);

				function i() {
					for (var i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
					r() || (t = window.requestAnimationFrame(() => {
						e.apply(this, n), t = void 0
					}))
				}
				return i.cancel = () => {
					V(t) || (window.cancelAnimationFrame(t), t = void 0)
				}, i.pending = r, i
			}
			Gt([Object(n.d)()], Jt.prototype, "__seconds", void 0), Gt([Object(n.b)()], Jt.prototype, "type", void 0), Gt([Object(n.b)({
				attribute: "show-hours",
				type: Boolean
			})], Jt.prototype, "showHours", void 0), Gt([Object(n.b)({
				attribute: "pad-hours",
				type: Boolean
			})], Jt.prototype, "padHours", void 0), Gt([Object(n.b)({
				type: Boolean
			})], Jt.prototype, "remainder", void 0), Y("vds-time", Jt);
			const er = Pe((function() {
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
							let [t, r] = e;
							return t || r
						})
					}
				})),
				tr = i.b`
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
			var rr, ir = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			! function(e) {
				e[e.Left = -1] = "Left", e[e.ArrowLeft = -1] = "ArrowLeft", e[e.Up = -1] = "Up", e[e.ArrowUp = -1] = "ArrowUp", e[e.Right = 1] = "Right", e[e.ArrowRight = 1] = "ArrowRight", e[e.Down = 1] = "Down", e[e.ArrowDown = 1] = "ArrowDown"
			}(rr || (rr = {}));
			class nr extends i.a {
				constructor() {
					super(), this._sliderStoreProvider = er.provide(this), this.disabled = !1, this.value = 50, this._step = 1, this._keyboardStep = 1, this.shiftKeyMultiplier = 5, this.customValueText = !1, this._mediaRemote = new Rt(this), this._disconnectDisposal = new G.a, this._handlePointerEnter = Object(Ze.a)(this, "pointerenter", () => {
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
						if (!Object.keys(rr).includes(t)) return;
						const i = (r ? this.keyboardStep * this.shiftKeyMultiplier : this.keyboardStep) * Number(rr[t]),
							n = (this.value + i) / this.step,
							s = this.step * n;
						this.value = this._getClampedValue(s), this._dispatchValueChange(e)
					}), this._handleFillValueChange = Object(Ze.a)(this, "vds-slider-value-change", this._updateFillCSSProps.bind(this)), this._handlePointerValueChange = Object(Ze.a)(this, "vds-slider-pointer-value-change", this._updatePointerCSSProps.bind(this)), this._onDrag = Zt(e => {
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
					}), this._lastDispatchedValue = this.value, this._dispatchValueChange = Zt(e => {
						this.value !== this._lastDispatchedValue && (this.dispatchEvent(Z("vds-slider-value-change", {
							detail: this.value,
							triggerEvent: e
						})), this._lastDispatchedValue = this.value)
					}), this._lastDispatchedPointerValue = this.pointerValue, this._dispatchPointerValueChange = Zt(e => {
						if (this.pointerValue === this._lastDispatchedPointerValue) return;
						["vds-slider-pointer-value-change", this.isDragging && "vds-slider-drag-value-change"].forEach(t => {
							t && this.dispatchEvent(Z(t, {
								detail: this.pointerValue,
								triggerEvent: e
							}))
						}), this._lastDispatchedPointerValue = this.pointerValue
					}), Lt(this)
				}
				static get styles() {
					return [tr]
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
					K(this, "fill-value", `${this.value}`), K(this, "fill-rate", `${this.fillRate}`), K(this, "fill-percent", `${this.fillPercent}%`)
				}
				_updatePointerCSSProps() {
					K(this, "pointer-value", `${this.pointerValue}`), K(this, "pointer-rate", `${this.pointerRate}`), K(this, "pointer-percent", `${this.pointerPercent}%`)
				}
				render() {
					return this._renderSlider()
				}
				_renderSlider() {
					return i.c`${this._renderDefaultSlot()}`
				}
				_renderDefaultSlot() {
					return i.c`<slot></slot>`
				}
				_setupAriaAttrs() {
					X(this, "role", "slider"), X(this, "tabindex", "0"), X(this, "aria-orientation", "horizontal"), X(this, "autocomplete", "off")
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
						detail: this.value
					})), this._mediaRemote.pauseUserIdle(e)
				}
				_stopDragging(e) {
					if (!this.isDragging) return;
					this.store.dragging.set(!1), this._dispatchValueChange.cancel(), this.removeAttribute("dragging");
					const t = this._getValueBasedOnThumbPosition(e);
					this.value = t, this.store.pointerValue.set(t), this._dispatchValueChange(e), this._dispatchPointerValueChange(e), this.dispatchEvent(Z("vds-slider-drag-end", {
						triggerEvent: e,
						detail: this.value
					})), this._mediaRemote.resumeUserIdle(e)
				}
				_getClampedValue(e) {
					return Ee(this.min, ke(e, Se(this.step)), this.max)
				}
				_getValueFromRate(e) {
					const t = Ee(0, e, 1),
						r = (this.max - this.min) * t,
						i = Math.round(r / this.step),
						n = this.step * i;
					return this.min + n
				}
				_getValueBasedOnThumbPosition(e) {
					const t = e.clientX,
						{
							left: r,
							width: i
						} = this.getBoundingClientRect(),
						n = (t - r) / i;
					return this._getValueFromRate(n)
				}
			}
			ir([Object(n.b)({
				reflect: !0,
				type: Number
			})], nr.prototype, "min", null), ir([Object(n.b)({
				reflect: !0,
				type: Number
			})], nr.prototype, "max", null), ir([Object(n.b)({
				reflect: !0,
				type: Boolean
			})], nr.prototype, "disabled", void 0), ir([Object(n.b)({
				reflect: !0,
				type: Number
			})], nr.prototype, "value", void 0), ir([Object(n.b)({
				type: Number,
				reflect: !0
			})], nr.prototype, "step", null), ir([Object(n.b)({
				attribute: "keyboard-step",
				type: Number
			})], nr.prototype, "keyboardStep", null), ir([Object(n.b)({
				attribute: "shift-key-multiplier",
				type: Number
			})], nr.prototype, "shiftKeyMultiplier", void 0), ir([Object(n.b)({
				type: Boolean,
				attribute: "custom-value-text"
			})], nr.prototype, "customValueText", void 0);
			const sr = i.b``;
			var or = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			class ar extends nr {
				constructor() {
					super(), this._step = .1, this.value = 0, this.valueText = "{currentTime} out of {duration}", this.pauseWhileDragging = !1, this.seekingRequestThrottle = 100, this.__mediaDuration = 0, this.__mediaPaused = !0, this._handleSliderDragStart = Object(Ze.a)(this, "vds-slider-drag-start", e => {
						this._togglePlaybackWhileDragging(e)
					}), this._handleSliderValueChange = Object(Ze.a)(this, "vds-slider-value-change", e => {
						Vt(e.originEvent) && (this._dispatchSeekingRequest.cancel(), this._mediaRemote.seek(this.value, e))
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
					return [super.styles, sr]
				}
				connectedCallback() {
					super.connectedCallback(), X(this, "aria-label", "Media time")
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
					return this.valueText.replace("{currentTime}", Kt(this.value)).replace("{duration}", Kt(this.__mediaDuration))
				}
				_getValueMax() {
					return "100%"
				}
				_togglePlaybackWhileDragging(e) {
					this.pauseWhileDragging && (this.isDragging && !this.__mediaPaused ? (this._wasPlayingBeforeDragStart = !0, this._mediaRemote.pause(e)) : this._wasPlayingBeforeDragStart && !this.isDragging && this.__mediaPaused && (this._wasPlayingBeforeDragStart = !1, this._mediaRemote.play(e)))
				}
			}
			or([Object(n.b)({
				attribute: !1,
				state: !0
			})], ar.prototype, "value", void 0), or([Object(n.b)({
				attribute: !1
			})], ar.prototype, "min", null), or([Object(n.b)({
				attribute: !1
			})], ar.prototype, "max", null), or([Object(n.b)({
				attribute: "value-text"
			})], ar.prototype, "valueText", void 0), or([Object(n.b)({
				attribute: "pause-while-dragging",
				type: Boolean
			})], ar.prototype, "pauseWhileDragging", void 0), or([Object(n.b)({
				attribute: "seeking-request-throttle",
				type: Number
			})], ar.prototype, "seekingRequestThrottle", void 0), or([Object(n.d)()], ar.prototype, "__mediaDuration", void 0), or([Object(n.d)()], ar.prototype, "__mediaPaused", void 0), Y("vds-time-slider", ar);
			var lr = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			class dr extends i.a {
				constructor() {
					super(...arguments), this._disposal = new G.a, this._sliderStoreConsumer = er.consume(this), this.__value = 0, this.type = "current", this.showHours = !1, this.padHours = !1, this.decimalPlaces = 2
				}
				static get styles() {
					return [i.b`
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
					return i.c`${this._getValueText()}`
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
						let [t, r, i] = e;
						return t / (i - r) * 100
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
					return Xt(this.__value, this.padHours, this.showHours)
				}
			}
			lr([Object(n.d)()], dr.prototype, "__value", void 0), lr([Object(n.b)()], dr.prototype, "type", void 0), lr([Object(n.b)()], dr.prototype, "format", void 0), lr([Object(n.b)({
				attribute: "show-hours",
				type: Boolean
			})], dr.prototype, "showHours", void 0), lr([Object(n.b)({
				attribute: "pad-hours",
				type: Boolean
			})], dr.prototype, "padHours", void 0), lr([Object(n.b)({
				attribute: "decimal-places",
				type: Number
			})], dr.prototype, "decimalPlaces", void 0), Y("vds-slider-value-text", dr);
			const {
				H: cr
			} = s.a, hr = e => void 0 === e.strings, ur = (e, t) => {
				var r, i;
				const n = e._$AN;
				if (void 0 === n) return !1;
				for (const s of n) null === (i = (r = s)._$AO) || void 0 === i || i.call(r, t, !1), ur(s, t);
				return !0
			}, pr = e => {
				let t, r;
				do {
					if (void 0 === (t = e._$AM)) break;
					(r = t._$AN).delete(e), e = t
				} while (0 === (null == r ? void 0 : r.size))
			}, vr = e => {
				for (let t; t = e._$AM; e = t) {
					let r = t._$AN;
					if (void 0 === r) t._$AN = r = new Set;
					else if (r.has(e)) break;
					r.add(e), mr(t)
				}
			};

			function gr(e) {
				void 0 !== this._$AN ? (pr(this), this._$AM = e, vr(this)) : this._$AM = e
			}

			function br(e, t = !1, r = 0) {
				const i = this._$AH,
					n = this._$AN;
				if (void 0 !== n && 0 !== n.size)
					if (t)
						if (Array.isArray(i))
							for (let s = r; s < i.length; s++) ur(i[s], !1), pr(i[s]);
						else null != i && (ur(i, !1), pr(i));
				else ur(this, e)
			}
			const mr = e => {
				var t, r, i, n;
				e.type == l.CHILD && (null !== (t = (i = e)._$AP) && void 0 !== t || (i._$AP = br), null !== (r = (n = e)._$AQ) && void 0 !== r || (n._$AQ = gr))
			};
			class fr extends c {
				constructor() {
					super(...arguments), this._$AN = void 0
				}
				_$AT(e, t, r) {
					super._$AT(e, t, r), vr(this), this.isConnected = e._$AU
				}
				_$AO(e, t = !0) {
					var r, i;
					e !== this.isConnected && (this.isConnected = e, e ? null === (r = this.reconnected) || void 0 === r || r.call(this) : null === (i = this.disconnected) || void 0 === i || i.call(this)), t && (ur(this, e), pr(this))
				}
				setValue(e) {
					if (hr(this._$Ct)) this._$Ct._$AI(e, this);
					else {
						const t = [...this._$Ct._$AH];
						t[this._$Ci] = e, this._$Ct._$AI(t, this, 0)
					}
				}
				disconnected() {}
				reconnected() {}
			}
			const _r = () => new yr;
			class yr {}
			const wr = new WeakMap,
				xr = d(class extends fr {
					render(e) {
						return s.d
					}
					update(e, [t]) {
						var r;
						const i = t !== this.Y;
						return i && void 0 !== this.Y && this.rt(void 0), (i || this.lt !== this.dt) && (this.Y = t, this.ct = null === (r = e.options) || void 0 === r ? void 0 : r.host, this.rt(this.dt = e.element)), s.d
					}
					rt(e) {
						var t;
						if ("function" == typeof this.Y) {
							const r = null !== (t = this.ct) && void 0 !== t ? t : globalThis;
							let i = wr.get(r);
							void 0 === i && (i = new WeakMap, wr.set(r, i)), void 0 !== i.get(this.Y) && this.Y.call(this.ct, void 0), i.set(this.Y, e), void 0 !== e && this.Y.call(this.ct, e)
						} else this.Y.value = e
					}
					get lt() {
						var e, t, r;
						return "function" == typeof this.Y ? null === (t = wr.get(null !== (e = this.ct) && void 0 !== e ? e : globalThis)) || void 0 === t ? void 0 : t.get(this.Y) : null === (r = this.Y) || void 0 === r ? void 0 : r.value
					}
					disconnected() {
						this.lt === this.dt && this.rt(void 0)
					}
					reconnected() {
						this.rt(this.dt)
					}
				});
			var kr = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			class Er extends i.a {
				constructor() {
					super(), this._videoRef = _r(), this.__canPlay = !1, this.__hasError = !1, be(this, er, "pointerValue", e => {
						this._updateCurrentTime(e)
					})
				}
				static get styles() {
					return [i.b`
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
					return i.c`
      <video
        part="video"
        muted
        playsinline
        preload="auto"
        src="${e=this.src,o(""===e||"undefined"===e?void 0:e)}"
        @canplay="${this._handleCanPlay}"
        @error="${this._handleError}"
        ${xr(this._videoRef)}
      ></video>
    `;
					var e
				}
				async _handleCanPlay(e) {
					this.__canPlay = !0, this.setAttribute("video-can-play", ""), wt(this, e)
				}
				_handleError(e) {
					this.__hasError = !0, this.setAttribute("video-error", ""), wt(this, e)
				}
			}
			kr([Object(n.b)()], Er.prototype, "src", void 0), kr([Object(n.d)()], Er.prototype, "__canPlay", void 0), kr([Object(n.d)()], Er.prototype, "__hasError", void 0), Y("vds-slider-video", Er);
			var Sr = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			class Cr extends nr {
				constructor() {
					super(), this.value = 100, this._handleSliderValueChange = Object(Ze.a)(this, "vds-slider-value-change", this._changeVolume.bind(this)), this._handleSliderDragValueChange = Object(Ze.a)(this, "vds-slider-drag-value-change", this._changeVolume.bind(this)), Ie(this, "volume", e => {
						this.value = 100 * e
					})
				}
				connectedCallback() {
					super.connectedCallback(), X(this, "aria-label", "Media volume")
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
					const t = ke(e.detail / 100, 3);
					this._mediaRemote.changeVolume(t, e)
				}
			}
			Sr([Object(n.b)({
				attribute: !1
			})], Cr.prototype, "min", null), Sr([Object(n.b)({
				attribute: !1
			})], Cr.prototype, "max", null), Sr([Object(n.b)({
				attribute: !1,
				state: !0
			})], Cr.prototype, "value", void 0), Y("vds-volume-slider", Cr);
			var Or = i.b`
  :host {
    --player-theme: #ff5700;
    --player-theme-rgb: rgb(255, 86, 0);
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

  vds-media[user-idle] .controls,
  vds-media:not([can-play]) .controls {
    cursor: none;
    opacity: 0;
    visibility: hidden;
  }

  vds-media.gif .controls {
    opacity: 0 !important;
    visibility: hidden !important;
  }

  /* show controls when an autoplay-error occurs to let users self heal */
  vds-media.gif[autoplay-error] .controls {
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

  /*
   * -------------------------------------------------------------------------------------------
   * Sliders
   * -------------------------------------------------------------------------------------------
   */

  .slider-track {
    background-color: #ccccca;
  }

  .slider-track-fill {
    background-color: var(--player-theme);
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

  vds-volume-slider[dragging] .slider-thumb-container {
    left: var(--vds-pointer-percent);
  }

  vds-volume-slider[dragging] .slider-thumb {
    transform: translateY(-50%) scale(1);
  }

  vds-volume-slider {
    height: var(--height);
  }

  vds-volume-slider .slider-track {
    background-color: #999;
  }

  vds-volume-slider .slider-track-fill {
    transform-origin: left center;
    transform: translateY(-50%) scaleX(var(--vds-fill-rate));
    will-change: transform;
    background-color: white;
  }

  vds-volume-slider .slider-thumb-container {
    left: var(--vds-fill-percent);
    will-change: left;
  }

  vds-volume-slider[dragging] .slider-thumb-container {
    left: var(--vds-pointer-percent);
  }

  vds-volume-slider .slider-thumb {
    border-radius: 9999px;
  }

  vds-volume-slider {
    opacity: 0;
  }
  .mute-volume-container:hover vds-volume-slider {
    opacity: 1;
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
			const Ar = {
				startPosition: -1,
				capLevelToPlayerSize: !0,
				maxBufferLength: 10,
				maxMaxBufferLength: 10,
				startLevel: -1
			};
			var Pr = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			let jr = class extends i.a {
				constructor() {
					super(...arguments), this.hlsLibrary = () => r.e(7).then(r.t.bind(null, "./node_modules/@reddit/shreddit.components.shreddit-player/node_modules/hls.js/dist/hls.min.js", 7)), this.autoplay = !1, this.gif = !1, this.playWhileHidden = !1, this.ui = "mobile", this.objectFit = "contain", this.showPreviewPoster = !0, this.handleLoadMediaClick = () => {
						var e;
						null === (e = this.hlsElement) || void 0 === e || e.startLoadingMedia(), this.showPreviewPoster = !1
					}
				}
				static get styles() {
					return [Ft, Or]
				}
				connectedCallback() {
					super.connectedCallback(), this.autoplay && (this.showPreviewPoster = !1), requestAnimationFrame(() => {
						var e;
						null === (e = this.hlsElement) || void 0 === e || e.addEventListener("vds-loaded-metadata", () => {
							var e;
							this.hlsEngine = null === (e = this.hlsElement) || void 0 === e ? void 0 : e.hlsEngine
						})
					})
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
						n = "desktop" === this.ui;
					var s;
					return this.showPreviewPoster ? i.c`
        <div class="preview-poster-container absolute inset-0 bg-black">
          <shreddit-img
            alt="media poster"
            loading="lazy"
            objectfit="contain"
            src="${o(null!==(s=this.getAttribute("poster"))&&void 0!==s?s:void 0)}"
            class="h-full w-full visible ease absolute inset-0 object-contain bg-black"
          ></shreddit-img>
          <div class="absolute inset-0 bg-black bg-opacity-25">
            <vds-play-button
              class="h-full w-full text-white control flex items-center justify-center rounded-sm cursor-pointer relative ease duration-150"
            >
              <icon-play
                fill
                class="play-icon absolute inset-0 flex items-center justify-center text-32 ease duration-150"
                @click="${this.handleLoadMediaClick}"
              ></icon-play>
            </vds-play-button>
          </div>
        </div>
      ` : i.c`
      <div
        class="media-controls h-full w-full text-white absolute inset-0 pointer-events-none ${`${r}`}"
      >
        <div
          class="controls flex flex-col justify-end opacity-100 h-full w-full visible ease duration-300 pointer-events-none"
        >
          <div
            class="scrim h-full w-full absolute inset-0 z-0 opacity-0 ease duration-300 pointer-events-none"
          ></div>

          <div
            class="mute-volume-container flex gap-sm absolute top-2xs right-2xs pointer-events-auto"
          >
            ${n?i.c`
                  <vds-volume-slider class="flex z-0 cursor-pointer w-3xl h-2xl ease duration-150">
                    <div
                      class="slider-track w-full h-2xs absolute top-1/2 left-0 z-0 -translate-y-1/2"
                    ></div>
                    <div
                      class="slider-track-fill z-10 absolute top-1/2 left-0 w-full h-2xs rounded-sm pointer-events-none"
                    ></div>
                    <div
                      class="slider-thumb-container absolute top-0 h-full w-md -translate-x-1/2 z-20"
                    >
                      <div
                        class="slider-thumb absolute top-1/2 left-0 bg-white h-md w-md -translate-y-1/2"
                      ></div>
                    </div>
                  </vds-volume-slider>
                `:""}
            <vds-mute-button class="control rounded-sm cursor-pointer ease duration-150">
              <icon-volume
                fill
                class="unmute-icon absolute inset-0 w-full h-full flex items-center justify-center text-18 opacity-0 ease duration-150"
              ></icon-volume>
              <icon-volume-mute
                fill
                class="mute-icon absolute inset-0 w-full h-full flex items-center justify-center text-18 opacity-0 ease duration-150"
              ></icon-volume-mute>
            </vds-mute-button>
          </div>

          <div class="px-2xs flex items-center">
            <vds-play-button
              class="control flex items-center justify-center rounded-sm cursor-pointer pointer-events-auto relative ease duration-150"
            >
              <icon-play
                fill
                class="play-icon absolute inset-0 w-full h-full flex items-center justify-center text-18 opacity-0 ease duration-150"
              ></icon-play>
              <icon-refresh
                fill
                class="refresh-icon absolute inset-0 w-full h-full flex items-center justify-center text-24 opacity-0 ease duration-150"
              ></icon-refresh>
              <icon-pause
                fill
                class="pause-icon absolute inset-0 w-full h-full flex items-center justify-center text-18 opacity-0 ease duration-150"
              ></icon-pause>
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

              <div class="slider-thumb-container absolute top-0 w-lg h-full z-20 -translate-x-1/2">
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

            ${n?i.c`
                  <vds-quality-switcher
                    class="pointer-events-auto"
                    .hlsEngine="${null===(e=this.hlsElement)||void 0===e?void 0:e.hlsEngine}"
                  ></vds-quality-switcher>
                `:""}

            <vds-fullscreen-button
              class="control flex items-center justify-center rounded-sm cursor-pointer pointer-events-auto relative ease duration-150"
            >
              <icon-expand-left
                fill
                class="expand-icon absolute inset-0 w-full h-full flex items-center justify-center text-18 opacity-0 ease duration-150"
              ></icon-expand-left>
              <icon-collapse-left
                fill
                class="collapse-icon absolute inset-0 w-full h-full flex items-center justify-center text-18 opacity-0 ease duration-150"
              ></icon-collapse-left>
            </vds-fullscreen-button>
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
					return i.c`
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
					const r = this.gif ? "gif" : "";
					return i.c`
      <vds-media-sync ?single-playback="${!this.gif}" sync-volume>
        <vds-media-visibility
          intersection-threshold="1"
          enter-page="${o(this.autoplay||this.gif?"play":void 0)}"
          enter-viewport="${o(this.autoplay||this.gif?"play":void 0)}"
          exit-page="${o(this.playWhileHidden||this.gif?void 0:"pause")}"
          exit-viewport="${o(this.playWhileHidden||this.gif?void 0:"pause")}"
          page-enter-delay="200"
          viewport-enter-delay="200"
        >
          <vds-media class="h-full w-full ${`${r}`}">
            <vds-hls
              class="h-full w-full"
              .hlsConfig="${Ar}"
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
			Pr([Object(n.b)()], jr.prototype, "src", void 0), Pr([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], jr.prototype, "autoplay", void 0), Pr([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], jr.prototype, "gif", void 0), Pr([Object(n.b)()], jr.prototype, "preview", void 0), Pr([Object(n.b)({
				type: Boolean
			})], jr.prototype, "playWhileHidden", void 0), Pr([Object(n.b)()], jr.prototype, "ui", void 0), Pr([Object(n.b)({
				type: String,
				attribute: "object-fit"
			})], jr.prototype, "objectFit", void 0), Pr([Object(n.d)()], jr.prototype, "showPreviewPoster", void 0), Pr([Object(n.d)()], jr.prototype, "hlsEngine", void 0), Pr([Object(n.c)("vds-hls")], jr.prototype, "hlsElement", void 0), jr = Pr([Object(n.a)("shreddit-player")], jr)
		},
		"./node_modules/@reddit/shreddit.components.shreddit-player/dist/media-telemetry-observer/media-telemetry-observer.js": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "MediaTelemetryObserver", (function() {
				return ye
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js"),
				n = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js"),
				s = r("./node_modules/lit/index.js"),
				o = r("./node_modules/lit/decorators.js");
			const a = 3e4,
				l = 1e4,
				d = [25, 50, 75, 95, 100],
				c = [2, 3, 5, 10],
				h = 2e3,
				u = 3e3;
			var p = r("./node_modules/@reddit/faceplate/lib/custom-event.js");
			const v = e => t => {
					const r = (e => {
						const {
							originEvent: {
								timeStamp: t
							},
							target: {
								state: r,
								mediaElement: i
							}
						} = e, {
							currentTime: n,
							muted: s,
							paused: o,
							volume: a
						} = null != r ? r : {}, {
							duration: l
						} = null != i ? i : {};
						let {
							fullscreen: d
						} = null != r ? r : {};
						return "vds-fullscreen-change" === e.type && (d = e.detail), {
							currentTime: n,
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
					"vds-fullscreen-change": v("ad-media-fullscreenchange"),
					"vds-pause": v("ad-media-pause"),
					"vds-play": v("ad-media-play"),
					"vds-time-update": v("ad-media-timeupdate"),
					"vds-volume-change": v("ad-media-volumechange"),
					"vds-seeking": v("ad-media-seeking"),
					"vds-seeked": v("ad-media-seeked")
				}];
			var b, m, f, _, y, w, x, k, E, S, C, O, A, P, j, $ = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				M = r("./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js");
			class R {
				constructor(e) {
					this._timer = null, this._expectedAt = 1 / 0, this._handleInterval = () => {
						var e;
						const t = Date.now(),
							{
								_expectedAt: r,
								_interval: i
							} = this,
							n = t - r,
							s = {
								timestamp: t,
								latency: n,
								accuracy: 1 - Math.abs(n) / i
							};
						null === (e = this._callback) || void 0 === e || e.call(this, s), this._expectedAt = t + i
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
					} = this, r = e[e.length - 1], i = {
						time: r ? t - r.cumulativeTime : t,
						cumulativeTime: t
					};
					return e.push(i), i
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
						const r = this._thresholds[0];
						if (e < r) return t;
						this._thresholds.shift(), t.push(r)
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

			function q(e, t, r) {
				return {
					...e,
					media: I(t, r),
					playback: D(t, r)
				}
			}

			function D(e, t) {
				var r, i, n, s, o, a;
				const {
					levels: l,
					currentLevel: d,
					audioTracks: c,
					audioTrack: h
				} = null !== (r = e.hlsEngine) && void 0 !== r ? r : {}, {
					currentTime: u = 0,
					duration: p = 0,
					muted: v,
					volume: g = 0
				} = null !== (i = e.state) && void 0 !== i ? i : {}, b = l && void 0 !== d ? null === (n = l[d]) || void 0 === n ? void 0 : n.bitrate : void 0, m = c && void 0 !== h && (null === (s = c[h]) || void 0 === s ? void 0 : s.bitrate) > 0 ? null === (o = c[h]) || void 0 === o ? void 0 : o.bitrate : void 0, {
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
					error: F(e),
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
				var r, i, n, s, o, a;
				const {
					levels: l,
					currentLevel: d,
					audioTrack: c,
					streamController: h
				} = null !== (r = e.hlsEngine) && void 0 !== r ? r : {}, {
					duration: u,
					mediaType: p
				} = null !== (i = e.state) && void 0 !== i ? i : {}, {
					height: v,
					width: g
				} = function(e) {
					const t = e.videoElement;
					return {
						height: (null == t ? void 0 : t.videoHeight) || 0,
						width: (null == t ? void 0 : t.videoWidth) || 0
					}
				}(e), m = g >= v ? b.Landscape : b.Portrait, _ = e.currentHlsSrc || (null === (n = e.mediaElement) || void 0 === n ? void 0 : n.src), {
					hostname: y,
					pathname: w,
					id: x
				} = function(e) {
					let t, r, i = "";
					try {
						const n = new URL(e);
						t = n.hostname, r = n.pathname, "v.redd.it" === t && (i = r.split("/")[1] || "")
					} catch {}
					return {
						hostname: t,
						pathname: r,
						id: i
					}
				}(_), k = null == h ? void 0 : null === (s = h.fragCurrent) || void 0 === s ? void 0 : s.byteRange;
				let E;
				Array.isArray(k) && 2 === k.length && (E = k[1] - k[0]);
				const S = l && void 0 !== d ? null === (o = l[d]) || void 0 === o ? void 0 : o.codecSet : void 0;
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
					waiting: r,
					playing: i,
					paused: n
				} = null !== (t = e.state) && void 0 !== t ? t : {};
				return r ? y.Buffering : i ? y.Playing : n ? y.Paused : y.Buffering
			}

			function F(e) {
				var t;
				const {
					error: r
				} = null !== (t = e.state) && void 0 !== t ? t : {};
				if (!r || !r.message) return;
				const {
					message: i,
					code: n,
					mediaError: s
				} = r;
				let o = `[${n}]: ${i}`;
				return s && (s.code || s.message) && (o = `${o}. MediaError[${s.code}]: ${s.message}`), o
			}

			function z(e) {
				return H(e) === y.Playing
			}

			function N(e) {
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
			class U {
				constructor(e, t) {
					var r, i, n, s;
					this._handleHeartbeat = e => {
						this._validateHeartbeat(e) && this._watch()
					}, this._validateHeartbeat = e => e.latency < l, this._mediaOrigin = null == t ? void 0 : null === (r = t.media) || void 0 === r ? void 0 : r.origin, this._playbackPlayerType = null == t ? void 0 : null === (i = t.playback) || void 0 === i ? void 0 : i.playerType, this._player = e, this._pulse = new R({
						interval: a
					}), this._stopwatch = new T, this._firstPlayTrusted = !1, this.id = Object($.a)(), this._lastContinueReason = j.Auto, this._live = (null === (n = this._player.state) || void 0 === n ? void 0 : n.mediaType) === M.a.LiveVideo, this.hasLooped = !1, this._playedInFullscreen = !1, this._playedWithSound = !1, this.startedAt = 0, this._waiting = !1, this._sequenceNumber = -1, this._pulse.onHeartbeat(this._handleHeartbeat), this._watchPercentThresholdObserver = new L(d), this._watchSecondsThresholdObserver = new L(c);
					const o = N(this._player),
						{
							fullscreen: p = !1
						} = null !== (s = this._player.state) && void 0 !== s ? s : {};
					this._viewableImpressionObserver = new V({
						audible: o,
						duration: h,
						fullscreen: p
					}), this._viewableImpressionObserver.onImpression(() => {
						this._player.dispatchEvent(new Event("viewable-impression", {
							bubbles: !1
						}))
					}), this._fullyViewableImpressionObserver = new V({
						audible: o,
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
					this._viewableImpressionObserver.fullscreen = e, this._fullyViewableImpressionObserver.fullscreen = e, z(this._player) && !this._playedInFullscreen && (this._playedInFullscreen = !0)
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
					const t = N(e);
					t && z(e) && !this._playedWithSound && (this._playedWithSound = !0), this._viewableImpressionObserver.audible = t, this._fullyViewableImpressionObserver.audible = t
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
						duration: i
					} = null !== (t = this._player.state) && void 0 !== t ? t : {}, n = 100 * (i >= r ? r / i : 0);
					return this._watchPercentThresholdObserver.test(n)
				}
				checkWatchSecondsThreshold() {
					if (this._watchSecondsThresholdObserver.complete) return [];
					const e = this._stopwatch.time / 1e3;
					return this._watchSecondsThresholdObserver.test(e)
				}
			}
			const B = Symbol("mixins/with-tracking");
			var W = r("./node_modules/js-cookie/dist/js.cookie.js"),
				Y = r.n(W),
				Q = r("./node_modules/@reddit/adblock-detection/browser.js");
			const X = [{
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

			function K() {
				const e = function(e) {
					if (!window.screen || !window.devicePixelRatio) return;
					const {
						height: t,
						width: r
					} = window.screen, i = window.devicePixelRatio;
					return r && t && i ? e.find(e => i === e.dpi && t === e.height && r === e.width) : void 0
				}(X);
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
				for (const [t, r] of J)
					if (e <= t) return r;
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
				re = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = "",
						r = "";
					const i = e.split(".");
					if (i.length >= 3) {
						t = `t2_${i[0].replace(/\b0+/g,"")}`, r = i[2]
					}
					return {
						id: t,
						cookie_created_timestamp: parseInt(r, 10)
					}
				},
				ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
					const t = e.split("."),
						r = t[0],
						i = parseInt(t[2], 10);
					return {
						id: r,
						created_timestamp: i
					}
				};
			let ne = null;
			const se = () => {
					const e = Y.a.get("session_tracker"),
						{
							domain: t,
							url: r
						} = ae();
					return {
						...ie(e),
						referrer_domain: t,
						referrer_url: r
					}
				},
				oe = () => {
					var e, t;
					const r = Y.a.get("loid");
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
					enabled: Object(Q.hasAdblock)(),
					acceptable_ads: Object(Q.hasAcceptableAds)()
				}),
				de = e => {
					let t = {};
					try {
						var r, i, n;
						t = JSON.parse(null !== (r = null === (i = document.getElementsByTagName("shreddit-screenview-data")) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.getAttribute("data")) && void 0 !== r ? r : "{}")
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
						search: i
					} = window.location, n = `${t}${r}`;
					return {
						base_url: i ? `${n}${i}` : n,
						canonical_url: void 0,
						domain: e,
						user_agent: window.navigator.userAgent
					}
				},
				he = () => {
					var e, t;
					const r = null !== (e = null === (t = K()) || void 0 === t ? void 0 : t.yearClass) && void 0 !== e ? e : null;
					return {
						year_class: r,
						device_tier: r ? Z(r) : void 0
					}
				},
				ue = () => ({
					adblock: le(),
					referrer: ae(),
					session: se(),
					user: oe(),
					client_timestamp: Date.now(),
					platform: he(),
					...ee,
					...te
				}),
				pe = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : de;
					if (null != t && t[e]) return {};
					const i = r(e);
					return i ? {
						[e]: i
					} : {}
				},
				ve = e => (e.request = {
					...ce(),
					...e.request || {}
				}, ne ? (e.request.google_client_id = ne, e) : e);
			var ge = function(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			};
			const be = [{
				"vds-ended": (e, t) => t.ended(),
				"vds-pause": (e, t, r) => {
					const i = we(e.requestEvent);
					return t.pause(), me(t, r, i)
				},
				"vds-fullscreen-change": (e, t, r) => {
					const i = e.detail,
						n = [];
					return z(r._player) && !t._playedInFullscreen && n.push(q({
						source: C.Videoplayer,
						action: O.PlayExpanded,
						noun: A.Video
					}, r._player, t)), t.fullscreen(i), n
				},
				"vds-play": (e, t, r) => {
					var i;
					const n = we(e.requestEvent),
						s = [];
					if (N(r._player) && !t._playedWithSound) {
						t._playedWithSound = !0;
						const e = q({
							source: C.Videoplayer,
							action: O.PlayWithSound,
							noun: A.Video
						}, r._player, t);
						s.push(e)
					}
					if (null !== (i = r._player.state) && void 0 !== i && i.fullscreen && !t._playedInFullscreen) {
						t._playedInFullscreen = !0;
						const e = q({
							source: C.Videoplayer,
							action: O.PlayExpanded,
							noun: A.Video
						}, r._player, t);
						s.push(e)
					}
					return t.play(n), r._userReplayRequest = !1, s
				},
				"vds-can-autoplay": (e, t, r) => [q({
					source: k.Videoplayer,
					action: E.View,
					noun: S.Autoplay
				}, r._player, t)],
				"vds-can-load": (e, t, r) => {
					var i, n;
					return null !== (i = r._player) && void 0 !== i && null !== (n = i.state) && void 0 !== n && n.ended && (r._userReplayRequest = !0), [q({
						source: k.Videoplayer,
						action: E.Click,
						noun: r._userReplayRequest ? A.Replay : S.Play
					}, r._player, t)]
				},
				"vds-end": (e, t, r) => {
					var i, n, s;
					if (null !== (i = r._player) && void 0 !== i && i.loop || null !== (n = r._player) && void 0 !== n && null !== (s = n.state) && void 0 !== s && s.loop) return t.looped()
				},
				"vds-error": (e, t, r) => {
					var i;
					return (null == e ? void 0 : null === (i = e.detail) || void 0 === i ? void 0 : i.message) && console.error(`vds-error: [${e.detail.code}] ${e.detail.message}`), [q({
						source: k.Videoplayer,
						action: E.Error,
						noun: S.Video
					}, r._player, t)]
				},
				"vds-hls-level-switched": (e, t, r) => [q({
					source: k.Videoplayer,
					action: E.Switch,
					noun: S.Bitrate
				}, r._player, t)],
				"vds-hls-manifest-loading": (e, t, r) => [q({
					source: k.Videoplayer,
					action: E.Start,
					noun: S.Download
				}, r._player, t)],
				"vds-hls-manifest-loaded": (e, t, r) => [q({
					source: k.Videoplayer,
					action: E.End,
					noun: S.Download
				}, r._player, t)],
				"vds-playing": (e, t, r) => {
					var i;
					const n = "vds-triggeredBySeeked" === (null === (i = e.triggerEvent) || void 0 === i ? void 0 : i.type),
						s = !t._stopwatch.time,
						o = [];
					if (t._waiting) {
						t._lastContinueReason = j.Buffer;
						const e = q({
							source: k.Videoplayer,
							action: E.End,
							noun: S.Rebuffer
						}, r._player, t);
						o.push(e)
					}
					if (s) {
						const e = t._firstPlayTrusted ? P.Manual : P.Autoplay,
							i = q({
								source: k.Videoplayer,
								action: E.Start,
								noun: S.Video,
								action_info: {
									reason: e
								}
							}, r._player, t);
						o.push(i)
					} else if (!n || t._waiting) {
						const e = q({
							source: C.Videoplayer,
							action: O.Continue,
							noun: A.Video,
							action_info: {
								reason: t._lastContinueReason
							}
						}, r._player, t);
						o.push(e)
					}
					return t.playing(), o
				},
				"vds-replay": (e, t, r) => {
					var i, n, s;
					if (null !== (i = r._player) && void 0 !== i && i.loop || null !== (n = r._player) && void 0 !== n && null !== (s = n.state) && void 0 !== s && s.loop) return t.replay()
				},
				"vds-seeking": (e, t) => t.seeking(),
				"vds-seeked": (e, t, r) => {
					const i = [];
					return we(e.requestEvent) && i.push(q({
						source: C.Videoplayer,
						action: O.Click,
						noun: A.Seek
					}, r._player, t)), i
				},
				"vds-time-update": (e, t, r) => {
					const i = [],
						n = t.checkWatchPercentThreshold();
					for (const o of n) i.push(q({
						source: C.Videoplayer,
						action: ke(`WatchPercent${o}`),
						noun: A.Video
					}, r._player, t));
					const s = t.checkWatchSecondsThreshold();
					for (const o of s) i.push(q({
						source: C.Videoplayer,
						action: ke(`WatchSeconds${o}`),
						noun: A.Video
					}, r._player, t));
					return t.timeUpdate(), i
				},
				"vds-volume-change": (e, t, r) => {
					var i;
					const n = we(e.requestEvent),
						s = [],
						o = null === (i = e.requestEvent) || void 0 === i ? void 0 : i.type;
					if ("vds-mute-request" !== o && "vds-unmute-request" !== o || n && s.push(q({
							source: C.Videoplayer,
							action: O.Click,
							noun: "vds-mute-request" === o ? A.Mute : A.Unmute
						}, r._player, t)), N(r._player) && z(r._player) && !t._playedWithSound) {
						const e = q({
							source: C.Videoplayer,
							action: O.PlayWithSound,
							noun: A.Video
						}, r._player, t);
						s.push(e)
					}
					return t.volumeChange(r._player), s.filter(Boolean)
				},
				"vds-waiting": (e, t, r) => {
					var i, n;
					const s = [];
					return t.waiting(), null !== (i = r._player) && void 0 !== i && null !== (n = i.state) && void 0 !== n && n.started && s.push(q({
						source: k.Videoplayer,
						action: E.Start,
						noun: S.Rebuffer
					}, r._player, t), q({
						source: C.Videoplayer,
						action: O.Pause,
						noun: A.Video,
						action_info: {
							reason: j.Buffer
						}
					}, r._player, t)), s
				},
				"viewable-impression": (e, t, r) => {
					return [q({
						source: C.Videoplayer,
						action: O.IsViewable,
						noun: A.Video
					}, r._player, t)]
				},
				"fully-viewable-impression": (e, t, r) => {
					return [q({
						source: C.Videoplayer,
						action: O.IsFullyViewable,
						noun: A.Video
					}, r._player, t)]
				},
				"video-heartbeat": (e, t, r) => {
					return [fe(t, r)]
				}
			}];

			function me(e, t, r) {
				e.pause();
				const i = [];
				if (r) {
					const r = q({
						source: k.Videoplayer,
						action: E.Click,
						noun: S.Pause
					}, t._player, e);
					i.push(r)
				} else if (t._isVisible) {
					const r = q({
						source: k.Videoplayer,
						action: E.Scroll,
						noun: S.Pause
					}, t._player, e);
					i.push(r)
				} else {
					const r = q({
						source: k.Videoplayer,
						action: E.Background,
						noun: S.Video
					}, t._player, e);
					i.push(r)
				}
				i.push(fe(e, t));
				const n = r ? j.Manual : j.Auto,
					s = q({
						source: C.Videoplayer,
						action: O.Pause,
						noun: A.Video,
						action_info: {
							reason: n
						}
					}, t._player, e);
				return i.push(s), i
			}

			function fe(e, t) {
				const r = q({
					source: C.Videoplayer,
					action: O.Watch,
					noun: A.Video
				}, t._player, e);
				return r.playback.heartbeat_duration_ms = e._stopwatch.lap().time, r
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
			}(s.a)) {
				constructor() {
					super(...arguments), this.set = _e.Default, this._userReplayRequest = !1, this._isVisible = !1, this._pageController = new i.a(this, e => {
						var t;
						let {
							state: r
						} = e;
						const i = "hidden" === r;
						this._isVisible = !i, null === (t = this._mediaSession) || void 0 === t || t.isVisible(!i)
					}), this._connect = Object(n.a)(this, "vds-media-provider-connect", e => {
						if (this._mediaSession) return;
						const {
							element: t,
							onDisconnect: r
						} = e.detail;
						this._player = t, this._createMediaSession();
						let i = be;
						this.set === _e.Ads && (i = [...be, ...g]);
						for (const n of i)
							for (const [e, i] of Object.entries(n)) {
								const n = e => this._runListener(e, i);
								t.addEventListener(e, n), r(() => {
									t.removeEventListener(e, n)
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
					var t, r, i;
					const {
						source: n,
						action: s,
						noun: o,
						media: a,
						playback: l,
						action_info: d
					} = e, c = function(e) {
						let {
							source: t,
							action: r,
							noun: i,
							...n
						} = e, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return {
							...ve(s),
							source: t,
							action: r,
							noun: i,
							uuid: Object($.a)(),
							...ue(),
							...pe("post", s),
							...n
						}
					}({
						source: n,
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
							spoiler: null !== (i = this.postSpoiler) && void 0 !== i && i,
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
					this._mediaSession = new U(this._player, t), this._createIntersectionObservers(), null === (e = this._mediaSession) || void 0 === e || e.isVisible("hidden" !== this._pageController.state)
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

			function xe(e) {
				return !!e.source && !!e.noun
			}

			function ke(e) {
				return O[e]
			}
			ge([Object(o.b)({
				type: String,
				attribute: "media-origin"
			})], ye.prototype, "mediaOrigin", void 0), ge([Object(o.b)({
				type: String,
				attribute: "playback-playertype"
			})], ye.prototype, "playbackPlayerType", void 0), ge([Object(o.b)({
				type: Number,
				attribute: "set"
			})], ye.prototype, "set", void 0), ge([Object(o.b)({
				type: String,
				attribute: "player-type"
			})], ye.prototype, "playerType", void 0), ge([Object(o.b)({
				type: String,
				attribute: "post-id"
			})], ye.prototype, "postId", void 0), ge([Object(o.b)({
				type: Boolean,
				attribute: "post-nsfw"
			})], ye.prototype, "postNsfw", void 0), ge([Object(o.b)({
				type: Number,
				attribute: "post-score"
			})], ye.prototype, "postScore", void 0), ge([Object(o.b)({
				type: Boolean,
				attribute: "post-spoiler"
			})], ye.prototype, "postSpoiler", void 0), ge([Object(o.b)({
				type: String,
				attribute: "subreddit-name"
			})], ye.prototype, "subredditName", void 0), ye = ge([Object(o.a)("media-telemetry-observer")], ye)
		},
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var i = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");

			function n(e, t, r, n) {
				let s;

				function o() {
					var o;
					s || (s = Object(i.e)(null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : e, t, r, n))
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
			var i, n = r("./node_modules/fscreen/dist/fscreen.esm.js"),
				s = r("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");
			const o = "undefined" != typeof window && "object" == typeof window.safari && (null === (i = window) || void 0 === i ? void 0 : i.safari.pushNotification);
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
					return n.a.fullscreenElement || "blur" !== (null == e ? void 0 : e.type) && "hidden" !== document.visibilityState ? document.hasFocus() ? "active" : "passive" : "hidden"
				}
			}
		},
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js": function(e, t, r) {
			"use strict";

			function i(e, t, r, i) {
				return e.addEventListener(t, r, i), () => {
					e.removeEventListener(t, r, i)
				}
			}

			function n(e, t) {
				return t.some(t => {
					var r;
					return null !== (r = null == e ? void 0 : e.type.includes(t)) && void 0 !== r && r
				})
			}

			function s(e) {
				return n(e, ["pointer"])
			}

			function o(e) {
				return n(e, ["touch"])
			}

			function a(e) {
				return n(e, ["click", "mouse"])
			}
			r.d(t, "e", (function() {
				return i
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
			var i;
			r.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.Unknown = "unknown", e.Audio = "audio", e.Video = "video", e.LiveVideo = "live-video"
				}(i || (i = {}))
		},
		"./node_modules/fscreen/dist/fscreen.esm.js": function(e, t, r) {
			"use strict";
			var i = {
					fullscreenEnabled: 0,
					fullscreenElement: 1,
					requestFullscreen: 2,
					exitFullscreen: 3,
					fullscreenchange: 4,
					fullscreenerror: 5,
					fullscreen: 6
				},
				n = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
				s = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
				o = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"],
				a = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
				l = "fullscreenEnabled" in a && Object.keys(i) || n[0] in a && n || s[0] in a && s || o[0] in a && o || [],
				d = {
					requestFullscreen: function(e) {
						return e[l[i.requestFullscreen]]()
					},
					requestFullscreenFunction: function(e) {
						return e[l[i.requestFullscreen]]
					},
					get exitFullscreen() {
						return a[l[i.exitFullscreen]].bind(a)
					},
					get fullscreenPseudoClass() {
						return ":" + l[i.fullscreen]
					},
					addEventListener: function(e, t, r) {
						return a.addEventListener(l[i[e]], t, r)
					},
					removeEventListener: function(e, t, r) {
						return a.removeEventListener(l[i[e]], t, r)
					},
					get fullscreenEnabled() {
						return Boolean(a[l[i.fullscreenEnabled]])
					},
					set fullscreenEnabled(e) {},
					get fullscreenElement() {
						return a[l[i.fullscreenElement]]
					},
					set fullscreenElement(e) {},
					get onfullscreenchange() {
						return a[("on" + l[i.fullscreenchange]).toLowerCase()]
					},
					set onfullscreenchange(e) {
						return a[("on" + l[i.fullscreenchange]).toLowerCase()] = e
					},
					get onfullscreenerror() {
						return a[("on" + l[i.fullscreenerror]).toLowerCase()]
					},
					set onfullscreenerror(e) {
						return a[("on" + l[i.fullscreenerror]).toLowerCase()] = e
					}
				};
			t.a = d
		},
		"./node_modules/lit-html/lit-html.js": function(e, t, r) {
			"use strict";
			var i;
			r.d(t, "a", (function() {
				return F
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "f", (function() {
				return E
			}));
			const n = window,
				s = n.trustedTypes,
				o = s ? s.createPolicy("lit-html", {
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
				x = e => (t, ...r) => ({
					_$litType$: e,
					strings: t,
					values: r
				}),
				k = x(1),
				E = x(2),
				S = Symbol.for("lit-noChange"),
				C = Symbol.for("lit-nothing"),
				O = new WeakMap,
				A = (e, t, r) => {
					var i, n;
					const s = null !== (i = null == r ? void 0 : r.renderBefore) && void 0 !== i ? i : t;
					let o = s._$litPart$;
					if (void 0 === o) {
						const e = null !== (n = null == r ? void 0 : r.renderBefore) && void 0 !== n ? n : null;
						s._$litPart$ = o = new T(t.insertBefore(h(), e), e, void 0, null != r ? r : {})
					}
					return o._$AI(e), o
				},
				P = c.createTreeWalker(c, 129, null, !1),
				j = (e, t) => {
					const r = e.length - 1,
						i = [];
					let n, s = 2 === t ? "<svg>" : "",
						l = g;
					for (let o = 0; o < r; o++) {
						const t = e[o];
						let r, c, h = -1,
							u = 0;
						for (; u < t.length && (l.lastIndex = u, null !== (c = l.exec(t)));) u = l.lastIndex, l === g ? "!--" === c[1] ? l = b : void 0 !== c[1] ? l = m : void 0 !== c[2] ? (w.test(c[2]) && (n = RegExp("</" + c[2], "g")), l = f) : void 0 !== c[3] && (l = f) : l === f ? ">" === c[0] ? (l = null != n ? n : g, h = -1) : void 0 === c[1] ? h = -2 : (h = l.lastIndex - c[2].length, r = c[1], l = void 0 === c[3] ? f : '"' === c[3] ? y : _) : l === y || l === _ ? l = f : l === b || l === m ? l = g : (l = f, n = void 0);
						const p = l === f && e[o + 1].startsWith("/>") ? " " : "";
						s += l === g ? t + d : h >= 0 ? (i.push(r), t.slice(0, h) + "$lit$" + t.slice(h) + a + p) : t + a + (-2 === h ? (i.push(void 0), o) : p)
					}
					const c = s + (e[r] || "<?>") + (2 === t ? "</svg>" : "");
					if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
					return [void 0 !== o ? o.createHTML(c) : c, i]
				};
			class $ {
				constructor({
					strings: e,
					_$litType$: t
				}, r) {
					let i;
					this.parts = [];
					let n = 0,
						o = 0;
					const d = e.length - 1,
						c = this.parts,
						[u, p] = j(e, t);
					if (this.el = $.createElement(u, r), P.currentNode = this.el.content, 2 === t) {
						const e = this.el.content,
							t = e.firstChild;
						t.remove(), e.append(...t.childNodes)
					}
					for (; null !== (i = P.nextNode()) && c.length < d;) {
						if (1 === i.nodeType) {
							if (i.hasAttributes()) {
								const e = [];
								for (const t of i.getAttributeNames())
									if (t.endsWith("$lit$") || t.startsWith(a)) {
										const r = p[o++];
										if (e.push(t), void 0 !== r) {
											const e = i.getAttribute(r.toLowerCase() + "$lit$").split(a),
												t = /([.?@])?(.*)/.exec(r);
											c.push({
												type: 1,
												index: n,
												name: t[2],
												strings: e,
												ctor: "." === t[1] ? V : "?" === t[1] ? D : "@" === t[1] ? I : L
											})
										} else c.push({
											type: 6,
											index: n
										})
									} for (const t of e) i.removeAttribute(t)
							}
							if (w.test(i.tagName)) {
								const e = i.textContent.split(a),
									t = e.length - 1;
								if (t > 0) {
									i.textContent = s ? s.emptyScript : "";
									for (let r = 0; r < t; r++) i.append(e[r], h()), P.nextNode(), c.push({
										type: 2,
										index: ++n
									});
									i.append(e[t], h())
								}
							}
						} else if (8 === i.nodeType)
							if (i.data === l) c.push({
								type: 2,
								index: n
							});
							else {
								let e = -1;
								for (; - 1 !== (e = i.data.indexOf(a, e + 1));) c.push({
									type: 7,
									index: n
								}), e += a.length - 1
							} n++
					}
				}
				static createElement(e, t) {
					const r = c.createElement("template");
					return r.innerHTML = e, r
				}
			}

			function M(e, t, r = e, i) {
				var n, s, o, a;
				if (t === S) return t;
				let l = void 0 !== i ? null === (n = r._$Cl) || void 0 === n ? void 0 : n[i] : r._$Cu;
				const d = u(t) ? void 0 : t._$litDirective$;
				return (null == l ? void 0 : l.constructor) !== d && (null === (s = null == l ? void 0 : l._$AO) || void 0 === s || s.call(l, !1), void 0 === d ? l = void 0 : (l = new d(e))._$AT(e, r, i), void 0 !== i ? (null !== (o = (a = r)._$Cl) && void 0 !== o ? o : a._$Cl = [])[i] = l : r._$Cu = l), void 0 !== l && (t = M(e, l._$AS(e, t.values), l, i)), t
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
							content: r
						},
						parts: i
					} = this._$AD, n = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : c).importNode(r, !0);
					P.currentNode = n;
					let s = P.nextNode(),
						o = 0,
						a = 0,
						l = i[0];
					for (; void 0 !== l;) {
						if (o === l.index) {
							let t;
							2 === l.type ? t = new T(s, s.nextSibling, this, e) : 1 === l.type ? t = new l.ctor(s, l.name, l.strings, this, e) : 6 === l.type && (t = new H(s, this, e)), this.v.push(t), l = i[++a]
						}
						o !== (null == l ? void 0 : l.index) && (s = P.nextNode(), o++)
					}
					return n
				}
				m(e) {
					let t = 0;
					for (const r of this.v) void 0 !== r && (void 0 !== r.strings ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++
				}
			}
			class T {
				constructor(e, t, r, i) {
					var n;
					this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = i, this._$C_ = null === (n = null == i ? void 0 : i.isConnected) || void 0 === n || n
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
						values: r,
						_$litType$: i
					} = e, n = "number" == typeof i ? this._$AC(e) : (void 0 === i.el && (i.el = $.createElement(i.h, this.options)), i);
					if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === n) this._$AH.m(r);
					else {
						const e = new R(n, this),
							t = e.p(this.options);
						e.m(r), this.k(t), this._$AH = e
					}
				}
				_$AC(e) {
					let t = O.get(e.strings);
					return void 0 === t && O.set(e.strings, t = new $(e)), t
				}
				O(e) {
					p(this._$AH) || (this._$AH = [], this._$AR());
					const t = this._$AH;
					let r, i = 0;
					for (const n of e) i === t.length ? t.push(r = new T(this.S(h()), this.S(h()), this, this.options)) : r = t[i], r._$AI(n), i++;
					i < t.length && (this._$AR(r && r._$AB.nextSibling, i), t.length = i)
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
			class L {
				constructor(e, t, r, i, n) {
					this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = n, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = C
				}
				get tagName() {
					return this.element.tagName
				}
				get _$AU() {
					return this._$AM._$AU
				}
				_$AI(e, t = this, r, i) {
					const n = this.strings;
					let s = !1;
					if (void 0 === n) e = M(this, e, t, 0), (s = !u(e) || e !== this._$AH && e !== S) && (this._$AH = e);
					else {
						const i = e;
						let o, a;
						for (e = n[0], o = 0; o < n.length - 1; o++)(a = M(this, i[r + o], t, o)) === S && (a = this._$AH[o]), s || (s = !u(a) || a !== this._$AH[o]), a === C ? e = C : e !== C && (e += (null != a ? a : "") + n[o + 1]), this._$AH[o] = a
					}
					s && !i && this.P(e)
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
			const q = s ? s.emptyScript : "";
			class D extends L {
				constructor() {
					super(...arguments), this.type = 4
				}
				P(e) {
					e && e !== C ? this.element.setAttribute(this.name, q) : this.element.removeAttribute(this.name)
				}
			}
			class I extends L {
				constructor(e, t, r, i, n) {
					super(e, t, r, i, n), this.type = 5
				}
				_$AI(e, t = this) {
					var r;
					if ((e = null !== (r = M(this, e, t, 0)) && void 0 !== r ? r : C) === S) return;
					const i = this._$AH,
						n = e === C && i !== C || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive,
						s = e !== C && (i === C || n);
					n && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e
				}
				handleEvent(e) {
					var t, r;
					"function" == typeof this._$AH ? this._$AH.call(null !== (r = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== r ? r : this.element, e) : this._$AH.handleEvent(e)
				}
			}
			class H {
				constructor(e, t, r) {
					this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r
				}
				get _$AU() {
					return this._$AM._$AU
				}
				_$AI(e) {
					M(this, e)
				}
			}
			const F = {
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
				z = n.litHtmlPolyfillSupport;
			null == z || z($, T), (null !== (i = n.litHtmlVersions) && void 0 !== i ? i : n.litHtmlVersions = []).push("2.3.1")
		},
		"./node_modules/lit/decorators.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "c", (function() {
				return l
			}));
			const i = e => t => "function" == typeof t ? ((e, t) => (customElements.define(e, t), t))(e, t) : ((e, t) => {
					const {
						kind: r,
						elements: i
					} = t;
					return {
						kind: r,
						elements: i,
						finisher(t) {
							customElements.define(e, t)
						}
					}
				})(e, t),
				n = (e, t) => "method" !== t.kind || !t.descriptor || "value" in t.descriptor ? {
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
				})(e, t, r) : n(e, t)
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
			}) => (r, i) => {
				var n;
				if (void 0 === i) {
					const i = null !== (n = r.originalKey) && void 0 !== n ? n : r.key,
						s = null != t ? {
							kind: "method",
							placement: "prototype",
							key: i,
							descriptor: t(r.key)
						} : {
							...r,
							key: i
						};
					return null != e && (s.finisher = function(t) {
						e(t, i)
					}), s
				} {
					const n = r.constructor;
					void 0 !== t && Object.defineProperty(r, i, t(i)), null == e || e(n, i)
				}
			};

			function l(e, t) {
				return a({
					descriptor: r => {
						const i = {
							get() {
								var t, r;
								return null !== (r = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e)) && void 0 !== r ? r : null
							},
							enumerable: !0,
							configurable: !0
						};
						if (t) {
							const t = "symbol" == typeof r ? Symbol() : "__" + r;
							i.get = function() {
								var r, i;
								return void 0 === this[t] && (this[t] = null !== (i = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e)) && void 0 !== i ? i : null), this[t]
							}
						}
						return i
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
				return x.b
			})), r.d(t, "d", (function() {
				return x.f
			})), r.d(t, "a", (function() {
				return k
			}));
			const i = window,
				n = i.ShadowRoot && (void 0 === i.ShadyCSS || i.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
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
					if (n && void 0 === e) {
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
					const r = 1 === e.length ? e[0] : t.reduce((t, r, i) => t + (e => {
						if (!0 === e._$cssResult$) return e.cssText;
						if ("number" == typeof e) return e;
						throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
					})(r) + e[i + 1], e[0]);
					return new a(r, e, s)
				},
				d = (e, t) => {
					n ? e.adoptedStyleSheets = t.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach(t => {
						const r = document.createElement("style"),
							n = i.litNonce;
						void 0 !== n && r.setAttribute("nonce", n), r.textContent = t.cssText, e.appendChild(r)
					})
				},
				c = n ? e => e : e => e instanceof CSSStyleSheet ? (e => {
					let t = "";
					for (const r of e.cssRules) t += r.cssText;
					return (e => new a("string" == typeof e ? e : e + "", void 0, s))(t)
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
					return this.elementProperties.forEach((t, r) => {
						const i = this._$Ep(r, t);
						void 0 !== i && (this._$Ev.set(i, r), e.push(i))
					}), e
				}
				static createProperty(e, t = f) {
					if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
						const r = "symbol" == typeof e ? Symbol() : "__" + e,
							i = this.getPropertyDescriptor(e, r, t);
						void 0 !== i && Object.defineProperty(this.prototype, e, i)
					}
				}
				static getPropertyDescriptor(e, t, r) {
					return {
						get() {
							return this[t]
						},
						set(i) {
							const n = this[e];
							this[t] = i, this.requestUpdate(e, n, r)
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
				_$EO(e, t, r = f) {
					var i;
					const n = this.constructor._$Ep(e, r);
					if (void 0 !== n && !0 === r.reflect) {
						const s = (void 0 !== (null === (i = r.converter) || void 0 === i ? void 0 : i.toAttribute) ? r.converter : b).toAttribute(t, r.type);
						this._$El = e, null == s ? this.removeAttribute(n) : this.setAttribute(n, s), this._$El = null
					}
				}
				_$AK(e, t) {
					var r;
					const i = this.constructor,
						n = i._$Ev.get(e);
					if (void 0 !== n && this._$El !== n) {
						const e = i.getPropertyOptions(n),
							s = "function" == typeof e.converter ? {
								fromAttribute: e.converter
							} : void 0 !== (null === (r = e.converter) || void 0 === r ? void 0 : r.fromAttribute) ? e.converter : b;
						this._$El = n, this[n] = s.fromAttribute(t, e.type), this._$El = null
					}
				}
				requestUpdate(e, t, r) {
					let i = !0;
					void 0 !== e && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || m)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === r.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(e, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej())
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
			_.finalized = !0, _.elementProperties = new Map, _.elementStyles = [], _.shadowRootOptions = {
				mode: "open"
			}, null == g || g({
				ReactiveElement: _
			}), (null !== (h = u.reactiveElementVersions) && void 0 !== h ? h : u.reactiveElementVersions = []).push("1.4.1");
			var y, w, x = r("./node_modules/lit-html/lit-html.js");
			class k extends _ {
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
		"./node_modules/tslib/tslib.es6.js": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return n
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
				return h
			})), r.d(t, "m", (function() {
				return u
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "g", (function() {
				return m
			}));
			var i = function(e, t) {
				return (i = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					})(e, t)
			};

			function n(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

				function r() {
					this.constructor = e
				}
				i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
			}
			var s = function() {
				return (s = Object.assign || function(e) {
					for (var t, r = 1, i = arguments.length; r < i; r++)
						for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					return e
				}).apply(this, arguments)
			};

			function o(e, t) {
				var r = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]])
				}
				return r
			}

			function a(e, t, r, i) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			}

			function l(e, t, r, i) {
				return new(r || (r = Promise))((function(n, s) {
					function o(e) {
						try {
							l(i.next(e))
						} catch (t) {
							s(t)
						}
					}

					function a(e) {
						try {
							l(i.throw(e))
						} catch (t) {
							s(t)
						}
					}

					function l(e) {
						var t;
						e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(o, a)
					}
					l((i = i.apply(e, t || [])).next())
				}))
			}

			function d(e, t) {
				var r, i, n, s, o = {
					label: 0,
					sent: function() {
						if (1 & n[0]) throw n[1];
						return n[1]
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
								if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
								switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
									case 0:
									case 1:
										n = s;
										break;
									case 4:
										return o.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										o.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = o.ops.pop(), o.trys.pop();
										continue;
									default:
										if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
											o = 0;
											continue
										}
										if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
											o.label = s[1];
											break
										}
										if (6 === s[0] && o.label < n[1]) {
											o.label = n[1], n = s;
											break
										}
										if (n && o.label < n[2]) {
											o.label = n[2], o.ops.push(s);
											break
										}
										n[2] && o.ops.pop(), o.trys.pop();
										continue
								}
								s = t.call(e, o)
							} catch (a) {
								s = [6, a], i = 0
							} finally {
								r = n = 0
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
					i = 0;
				if (r) return r.call(e);
				if (e && "number" == typeof e.length) return {
					next: function() {
						return e && i >= e.length && (e = void 0), {
							value: e && e[i++],
							done: !e
						}
					}
				};
				throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
			}

			function h(e, t) {
				var r = "function" == typeof Symbol && e[Symbol.iterator];
				if (!r) return e;
				var i, n, s = r.call(e),
					o = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
				} catch (a) {
					n = {
						error: a
					}
				} finally {
					try {
						i && !i.done && (r = s.return) && r.call(s)
					} finally {
						if (n) throw n.error
					}
				}
				return o
			}

			function u(e, t, r) {
				if (r || 2 === arguments.length)
					for (var i, n = 0, s = t.length; n < s; n++) !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
				return e.concat(i || t)
			}

			function p(e) {
				return this instanceof p ? (this.v = e, this) : new p(e)
			}

			function v(e, t, r) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var i, n = r.apply(e, t || []),
					s = [];
				return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
					return this
				}, i;

				function o(e) {
					n[e] && (i[e] = function(t) {
						return new Promise((function(r, i) {
							s.push([e, t, r, i]) > 1 || a(e, t)
						}))
					})
				}

				function a(e, t) {
					try {
						(r = n[e](t)).value instanceof p ? Promise.resolve(r.value.v).then(l, d) : c(s[0][2], r)
					} catch (i) {
						c(s[0][3], i)
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
				return r ? r.call(e) : (e = c(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
					return this
				}, t);

				function i(r) {
					t[r] = e[r] && function(t) {
						return new Promise((function(i, n) {
							(function(e, t, r, i) {
								Promise.resolve(i).then((function(t) {
									e({
										value: t,
										done: r
									})
								}), t)
							})(i, n, (t = e[r](t)).done, t.value)
						}))
					}
				}
			}
			Object.create;

			function b(e, t, r, i) {
				if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
				if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
				return "m" === r ? i : "a" === r ? i.call(e) : i ? i.value : t.get(e)
			}

			function m(e, t, r, i, n) {
				if ("m" === i) throw new TypeError("Private method is not writable");
				if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
				if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
				return "a" === i ? n.call(e, r) : n ? n.value = r : t.set(e, r), r
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~shreddit-player.9fcdabddac32a6ccb93d.js.map