// https://www.redditstatic.com/desktop2x/vendors~shreddit-player.bb8ce5149625a3990b16.js
// Retrieved at 6/1/2023, 7:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~shreddit-player"], {
		"./node_modules/@reddit/shreddit.components.shreddit-player/dist/index.js": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "ShredditPlayer", (function() {
				return ps
			}));
			var s = i("./node_modules/lit/index.js"),
				n = i("./node_modules/lit/decorators.js"),
				r = i("./node_modules/lit-html/lit-html.js");
			const o = e => null != e ? e : r.d;
			var a = i("./node_modules/@lit/localize/lit-localize.js"),
				l = i("./node_modules/tslib/tslib.es6.js"),
				d = i("./node_modules/lit-html/directive.js");
			const h = Object(d.c)(class extends d.a {
				constructor(e) {
					var t;
					if (super(e), e.type !== d.b.ATTRIBUTE || "style" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")
				}
				render(e) {
					return Object.keys(e).reduce((t, i) => {
						const s = e[i];
						return null == s ? t : t + `${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`
					}, "")
				}
				update(e, [t]) {
					const {
						style: i
					} = e.element;
					if (void 0 === this.vt) {
						this.vt = new Set;
						for (const e in t) this.vt.add(e);
						return this.render(t)
					}
					this.vt.forEach(e => {
						null == t[e] && (this.vt.delete(e), e.includes("-") ? i.removeProperty(e) : i[e] = "")
					});
					for (const s in t) {
						const e = t[s];
						null != e && (this.vt.add(s), s.includes("-") ? i.setProperty(s, e) : i[s] = e)
					}
					return r.c
				}
			});
			var c = i("./node_modules/@reddit/faceplate/lib/custom-event.js");
			const u = {
					rootMargin: "200px"
				},
				p = new Map;

			function v(e, t) {
				return !p.has(e) && t && p.set(e, function(e) {
					return new IntersectionObserver(e => {
						for (const t of e) {
							const e = t.target,
								i = t.isIntersecting ? Object(c.a)("faceplate-enter", t, !1) : Object(c.a)("faceplate-leave", t, !1);
							e.dispatchEvent(i)
						}
					}, e)
				}(t)), p.get(e)
			}
			class g {
				constructor(e = u) {
					this._observer = v(JSON.stringify(e), e)
				}
				observe(e) {
					this._observer.observe(e)
				}
				unobserve(e) {
					this._observer.unobserve(e)
				}
			}
			const _ = Symbol("mixins/observer");
			const m = Symbol("mixins/user-action");
			var b, y, f;
			! function(e) {
				e[e.emergency = 0] = "emergency", e[e.alert = 1] = "alert", e[e.critical = 2] = "critical", e[e.error = 3] = "error", e[e.warning = 4] = "warning", e[e.notice = 5] = "notice", e[e.info = 6] = "info", e[e.success = 7] = "success", e[e.debug = 8] = "debug", e[e.none = 9] = "none"
			}(b || (b = {})),
			function(e) {
				e.Programmatic = "programmatic", e.Eager = "eager", e.Action = "action", e.Intent = "intent", e.Lazy = "lazy", e.Preload = "preload"
			}(y || (y = {})),
			function(e) {
				e.Get = "get", e.Post = "post", e.Dialog = "dialog", e.Log = "log"
			}(f || (f = {}));
			let w = class extends(function(e) {
				if (m in e) return e;
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
				return t[m] = !0, t
			}(function(e) {
				if (_ in e) return e;
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
						this._observer || (this._observer = new g(e), this._observer.observe(this), this.addEventListener("faceplate-enter", this._handleEnter), this.addEventListener("faceplate-leave", this._handleLeave))
					}
					disableObserver() {
						this._observer && (this._observer.unobserve(this), this._observer = null, this.removeEventListener("faceplate-enter", this._handleEnter), this.removeEventListener("faceplate-leave", this._handleLeave))
					}
					observerIsIntersectingCallback(e) {}
					observerIsNotIntersectingCallback(e) {}
				}
				return t[_] = !0, t
			}(s.a))) {
				constructor() {
					super(...arguments), this.src = "", this.srcset = "", this.sizes = "", this.loading = y.Lazy, this.width = 0, this.height = 0, this.perfmark = "", this.objectfit = void 0, this.isRequestInProgress = !1
				}
				static get styles() {
					return s.b`
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
						const e = Object(c.a)("faceplate-load", {
							resource: t.src,
							src: this.src
						});
						this.dispatchEvent(e)
					}, t.onerror = () => {
						const e = new Error("Image failed to load"),
							t = Object(c.a)("faceplate-error", e);
						this.dispatchEvent(t)
					}, this.isRequestInProgress = !0, t.src = e
				}
				render() {
					const e = this.isRequestInProgress && this.loading === y.Action;
					let t = s.c`
      <slot name=${o(e?"loading":void 0)}></slot>
    `;
					const i = this.objectfit ? h({
						objectFit: encodeURIComponent(this.objectfit)
					}) : void 0;
					return this.img && (t = s.c`
        <img
          src="${this.img.src}"
          srcset="${o(this.srcset)}"
          sizes="${o(this.sizes)}"
          alt="${o(this.alt)}"
          style="${o(i)}"
        />
      `), s.c`
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
			Object(l.h)([Object(n.b)({
				type: String
			})], w.prototype, "src", void 0), Object(l.h)([Object(n.b)({
				type: String
			})], w.prototype, "srcset", void 0), Object(l.h)([Object(n.b)({
				type: String
			})], w.prototype, "sizes", void 0), Object(l.h)([Object(n.b)({
				type: String
			})], w.prototype, "loading", void 0), Object(l.h)([Object(n.b)({
				type: Number
			})], w.prototype, "width", void 0), Object(l.h)([Object(n.b)({
				type: Number
			})], w.prototype, "height", void 0), Object(l.h)([Object(n.b)({
				type: String
			})], w.prototype, "perfmark", void 0), Object(l.h)([Object(n.b)({
				type: String
			})], w.prototype, "objectfit", void 0), Object(l.h)([Object(n.b)({
				type: String
			})], w.prototype, "alt", void 0), w = Object(l.h)([Object(n.a)("faceplate-img")], w);
			var E = i("./node_modules/@reddit/faceplate-ui/lib/IconSize.js");
			const {
				H: S
			} = r.a, k = e => void 0 === e.strings, O = () => document.createComment(""), C = (e, t, i) => {
				var s;
				const n = e._$AA.parentNode,
					r = void 0 === t ? e._$AB : t._$AA;
				if (void 0 === i) {
					const t = n.insertBefore(O(), r),
						s = n.insertBefore(O(), r);
					i = new S(t, s, e, e.options)
				} else {
					const t = i._$AB.nextSibling,
						o = i._$AM,
						a = o !== e;
					if (a) {
						let t;
						null === (s = i._$AQ) || void 0 === s || s.call(i, e), i._$AM = e, void 0 !== i._$AP && (t = e._$AU) !== o._$AU && i._$AP(t)
					}
					if (t !== r || a) {
						let e = i._$AA;
						for (; e !== t;) {
							const t = e.nextSibling;
							n.insertBefore(e, r), e = t
						}
					}
				}
				return i
			}, P = (e, t, i = e) => (e._$AI(t, i), e), j = {}, M = e => {
				var t;
				null === (t = e._$AP) || void 0 === t || t.call(e, !1, !0);
				let i = e._$AA;
				const s = e._$AB.nextSibling;
				for (; i !== s;) {
					const e = i.nextSibling;
					i.remove(), i = e
				}
			}, A = (e, t, i) => {
				const s = new Map;
				for (let n = t; n <= i; n++) s.set(e[n], n);
				return s
			}, x = Object(d.c)(class extends d.a {
				constructor(e) {
					if (super(e), e.type !== d.b.CHILD) throw Error("repeat() can only be used in text expressions")
				}
				ht(e, t, i) {
					let s;
					void 0 === i ? i = t : void 0 !== t && (s = t);
					const n = [],
						r = [];
					let o = 0;
					for (const a of e) n[o] = s ? s(a, o) : o, r[o] = i(a, o), o++;
					return {
						values: r,
						keys: n
					}
				}
				render(e, t, i) {
					return this.ht(e, t, i).values
				}
				update(e, [t, i, s]) {
					var n;
					const o = (e => e._$AH)(e),
						{
							values: a,
							keys: l
						} = this.ht(t, i, s);
					if (!Array.isArray(o)) return this.ut = l, a;
					const d = null !== (n = this.ut) && void 0 !== n ? n : this.ut = [],
						h = [];
					let c, u, p = 0,
						v = o.length - 1,
						g = 0,
						_ = a.length - 1;
					for (; p <= v && g <= _;)
						if (null === o[p]) p++;
						else if (null === o[v]) v--;
					else if (d[p] === l[g]) h[g] = P(o[p], a[g]), p++, g++;
					else if (d[v] === l[_]) h[_] = P(o[v], a[_]), v--, _--;
					else if (d[p] === l[_]) h[_] = P(o[p], a[_]), C(e, h[_ + 1], o[p]), p++, _--;
					else if (d[v] === l[g]) h[g] = P(o[v], a[g]), C(e, o[p], o[v]), v--, g++;
					else if (void 0 === c && (c = A(l, g, _), u = A(d, p, v)), c.has(d[p]))
						if (c.has(d[v])) {
							const t = u.get(l[g]),
								i = void 0 !== t ? o[t] : null;
							if (null === i) {
								const t = C(e, o[p]);
								P(t, a[g]), h[g] = t
							} else h[g] = P(i, a[g]), C(e, o[p], i), o[t] = null;
							g++
						} else M(o[v]), v--;
					else M(o[p]), p++;
					for (; g <= _;) {
						const t = C(e, h[_ + 1]);
						P(t, a[g]), h[g++] = t
					}
					for (; p <= v;) {
						const e = o[p++];
						null !== e && M(e)
					}
					return this.ut = l, ((e, t = j) => e._$AH = t)(e, h), r.c
				}
			});
			class L extends d.a {
				constructor(e) {
					if (super(e), this._previousAttrs = new Set, e.type !== d.b.ELEMENT) throw new Error("attrs directive must be used on element")
				}
				render(e) {
					return s.d
				}
				update(e, [t]) {
					const i = e.element;
					this._previousAttrs.forEach(e => {
						e in t || i.removeAttribute(e)
					}), this._previousAttrs.clear();
					for (const s in t) {
						const e = t[s];
						if (!e) continue;
						const n = "boolean" == typeof e ? "" : e.toString();
						i.setAttribute(s, n), this._previousAttrs.add(s)
					}
					return s.d
				}
			}
			const R = Object(d.c)(L),
				T = {
					templateRenderingStrategy: null
				};
			let q = Object.assign({}, T);
			const V = () => Object.assign({}, q),
				I = () => {
					const {
						templateRenderingStrategy: e = null
					} = V();
					if (null == e) throw new Error("Faceplate-ui templateRenderingStrategy is undefined.\n\n      Please import a templateRenderingStrategy so that faceplate-ui can render\n      template components properly for your environment. For example:\n\n      import '@reddit/faceplate-ui/templateRenderingStrategy/clientStrategy.js'\n\n      or, for a server environment:\n\n      import '@reddit/faceplate-ui/templateRenderingStrategy/serverStrategy.js'\n      ");
					return e
				};

			function $(e, t) {
				return "className" !== e && (null == t || "string" == typeof t || "number" == typeof t || "boolean" == typeof t)
			}! function(e) {
				var t;
				const i = null === (t = V().templateRenderingStrategy) || void 0 === t ? void 0 : t.getType();
				if (null != i && i !== e) throw new Error(`\nFaceplate UI templateRenderingStrategy is being set to ${e}, but it has already been set to ${i}.\ntemplateRenderingStrategy cannot be changed once it has been set because it is not possible to switch from the client to the server.\n  \nThis usually happens when mixing imports from faceplate-ui/templates/client and faceplate-ui/templates/server, since these imports\nautomatically set templateRenderingStrategy, but can also happen if multiple calls to setConfig try to set conflicting strategies.\n  `)
			}("client");
			const D = s.c,
				F = s.g,
				H = e => {
					const t = {};
					for (const i in e) {
						const s = e[i];
						Object.prototype.hasOwnProperty.call(e, i) && $(i, s) && (t[i] = s)
					}
					return t
				};
			var N;
			N = {
				templateRenderingStrategy: {
					_toHtml_TEST_ONLY: e => {
						const t = document.createElement("div");
						return Object(s.f)(e, t), t.children[0]
					},
					attrs: e => null == e ? s.e : R(H(e)),
					getType: () => "client",
					html: D,
					ifDefined: o,
					repeat: x,
					styleMap: h,
					svg: F
				}
			}, q = Object.assign(Object.assign({}, q), N);
			const U = {
					xs: 12,
					sm: 16,
					md: 20,
					lg: 24,
					xl: 32,
					"2xl": 48
				},
				B = (e, t, i) => s => {
					var n, r, o;
					const {
						attrs: a,
						svg: l,
						ifDefined: d
					} = I(), h = null !== (n = null == s ? void 0 : s.attributes) && void 0 !== n ? n : {}, c = null !== (r = null == s ? void 0 : s.size) && void 0 !== r ? r : E.a.Medium;
					return h.xmlns = "http://www.w3.org/2000/svg", h.viewBox = t, h.width = h.height = U[c], h["icon-name"] = i, h.fill = null !== (o = null == h ? void 0 : h.fill) && void 0 !== o ? o : "currentColor", l`<svg
        rpl
        class="${d(h.className)}"
        ${a(h)}
      >${e}</svg>`
				},
				{
					svg: z
				} = I();
			var W = B(z`<path d="M9 3.375v5A.625.625 0 018.375 9h-5a.625.625 0 01-.442-1.067L4.726 6.14.714 2.127 2.128.713 6.14 4.726l1.793-1.793A.625.625 0 019 3.375zm10.332 14.543l-4.058-4.058 1.793-1.793A.626.626 0 0016.625 11h-5a.625.625 0 00-.625.625v5a.626.626 0 001.067.442l1.793-1.793 4.058 4.058 1.414-1.414z"></path>`, "0 0 20 20", "collapse-left-fill");
			const {
				svg: Q
			} = I();
			var K = B(Q`<path d="M6.274 4.86l3.058 3.058-1.414 1.414L4.86 6.274 3.067 8.067A.625.625 0 012 7.625v-5A.625.625 0 012.625 2h5a.625.625 0 01.442 1.067L6.274 4.86zm11.34 6.94a.627.627 0 00-.681.136l-1.793 1.79-3.058-3.058-1.414 1.414 3.058 3.058-1.793 1.793A.625.625 0 0012.375 18h5a.624.624 0 00.625-.625v-5a.626.626 0 00-.386-.575z"></path>`, "0 0 20 20", "expand-left-fill");
			const {
				svg: Y
			} = I();
			var G = B(Y`<g clip-path="url(#clip0_616_22)"><path d="M4.711 12.664A2.8 2.8 0 013.6 11.583 3.108 3.108 0 013.2 10a3.052 3.052 0 01.411-1.583c.267-.46.659-.834 1.129-1.082a3.37 3.37 0 011.616-.385c.333 0 .664.043.986.128.309.081.605.205.879.369l-.5 1.169a1.314 1.314 0 00-.563-.357 2.3 2.3 0 00-.754-.124 1.733 1.733 0 00-1.863 1.848c-.006.344.073.684.232.99a1.7 1.7 0 001.542.925c.258.004.513-.051.746-.162.209-.097.387-.25.513-.443.121-.185.185-.401.183-.622H6.124V9.619L9 9.6v.928a2.4 2.4 0 01-1.293 2.193 2.955 2.955 0 01-1.417.328 3.247 3.247 0 01-1.579-.385zm5.471-5.648H11.5v5.968h-1.318V7.016zm2.862 0H16.5v1.169h-2.138v1.392h1.79v1.169h-1.79v2.238h-1.318V7.016zM10 20a18.04 18.04 0 01-6.369-1.162 4.226 4.226 0 01-2.469-2.47 18.033 18.033 0 010-12.737 4.228 4.228 0 012.469-2.469 18.116 18.116 0 0112.738 0 4.228 4.228 0 012.469 2.469 18.035 18.035 0 010 12.738 4.225 4.225 0 01-2.469 2.469A18.04 18.04 0 0110 20zm0-18.75a16.8 16.8 0 00-5.929 1.082 2.978 2.978 0 00-1.739 1.739 16.783 16.783 0 000 11.857 2.98 2.98 0 001.739 1.74 16.858 16.858 0 0011.858 0 2.978 2.978 0 001.739-1.739 16.785 16.785 0 000-11.858 2.978 2.978 0 00-1.739-1.739A16.8 16.8 0 0010 1.25z"></path></g><defs ><clipPath id="clip0_616_22"><path d="M0 0h20v20H0z"></path></clipPath></defs>`, "0 0 20 20", "gif-post-outline");
			const {
				svg: J
			} = I();
			var X = B(J`<path d="M6.875 19h-3.75A1.127 1.127 0 012 17.875V2.125A1.127 1.127 0 013.125 1h3.75A1.127 1.127 0 018 2.125v15.75A1.127 1.127 0 016.875 19zm10 0h-3.75A1.127 1.127 0 0112 17.875V2.125A1.127 1.127 0 0113.125 1h3.75A1.127 1.127 0 0118 2.125v15.75A1.127 1.127 0 0116.875 19z"></path>`, "0 0 20 20", "pause-fill");
			const {
				svg: Z
			} = I();
			var ee = B(Z`<path d="M4.125 19.543A1.126 1.126 0 013 18.418V1.582A1.125 1.125 0 014.735.636l13.048 8.418a1.126 1.126 0 010 1.891L4.735 19.363a1.13 1.13 0 01-.61.18z"></path>`, "0 0 20 20", "play-fill");
			const {
				svg: te
			} = I();
			var ie = B(te`<g clip-path="url(#clip0_457_79)"><path d="M16 11.5A6.5 6.5 0 119.5 5H11v1.914a1 1 0 001.665.747l3.318-2.951a1 1 0 000-1.495L12.665.265A1 1 0 0011 1.012V3H9.5a8.5 8.5 0 108.5 8.5h-2zm-2.214-7.512v-.05l.028.025-.028.025z"></path></g><defs ><clipPath id="clip0_457_79"><path d="M0 0h20v20H0z"></path></clipPath></defs>`, "0 0 20 20", "refresh-fill");
			const {
				svg: se
			} = I();
			var ne = B(se`<path d="M13 13.5v-2a1.5 1.5 0 100-3v-2a3.5 3.5 0 110 7zM13 3v2a5 5 0 110 10v2a7 7 0 100-14zM10.357.252A1.091 1.091 0 009.19.405l-5.374 4.65H2.108A1.125 1.125 0 001 6.193v7.614a1.125 1.125 0 001.108 1.138h1.707l5.39 4.663a1.081 1.081 0 001.153.14A1.131 1.131 0 0011 18.715V1.285a1.13 1.13 0 00-.643-1.033z"></path>`, "0 0 20 20", "volume-fill");
			const {
				svg: re
			} = I();
			var oe, ae, le = B(re`<path d="M11 1.285v17.43a1.131 1.131 0 01-.642 1.033 1.081 1.081 0 01-1.153-.14l-5.39-4.663H2.108A1.125 1.125 0 011 13.807V6.193a1.125 1.125 0 011.108-1.138h1.707L9.19.405a1.09 1.09 0 011.168-.153A1.129 1.129 0 0111 1.285zm8.607 5.922l-1.414-1.414L15.9 8.086l-2.293-2.293-1.414 1.414L14.486 9.5l-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414L17.314 9.5l2.293-2.293z"></path>`, "0 0 20 20", "volume-mute-fill");
			i("./node_modules/core-js/modules/web.dom.iterable.js");

			function de() {}

			function he(e) {
				return null === e
			}

			function ce(e) {
				return void 0 === e
			}

			function ue(e) {
				return he(e) || ce(e)
			}

			function pe(e) {
				return "number" == typeof e && !Number.isNaN(e)
			}

			function ve(e) {
				return "string" == typeof e
			}

			function ge(e) {
				return "function" == typeof e
			}

			function _e(e) {
				return Array.isArray(e)
			}
			const me = "undefined" != typeof window,
				be = me ? null === (oe = window.navigator) || void 0 === oe ? void 0 : oe.userAgent.toLowerCase() : "",
				ye = /iphone|ipad|ipod|ios|CriOS|FxiOS/.test(be),
				fe = (/android/.test(be), me && /(iPhone|iPod)/gi.test(null === (ae = window.navigator) || void 0 === ae ? void 0 : ae.platform), /firefox/.test(be), me && !!window.chrome);
			me && !fe && (window.safari || ye || /(apple|safari)/.test(be)), me && "file:" !== window.location.protocol && (window.location.protocol, window.location.hostname);

			function we() {
				const e = null !== (t = null === (i = window) || void 0 === i ? void 0 : i.MediaSource) && void 0 !== t ? t : null === (s = window) || void 0 === s ? void 0 : s.WebKitMediaSource;
				var t, i, s;
				if (ce(e)) return !1;
				const n = e && ge(e.isTypeSupported) && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
					r = null !== (o = null === (a = window) || void 0 === a ? void 0 : a.SourceBuffer) && void 0 !== o ? o : null === (l = window) || void 0 === l ? void 0 : l.WebKitSourceBuffer;
				var o, a, l;
				const d = ce(r) || !ce(r.prototype) && ge(r.prototype.appendBuffer) && ge(r.prototype.remove);
				return !!n && !!d
			}

			function Ee(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : me;
				const s = i && !ce(window.customElements.get(e));
				i && !s && window.customElements.define(e, t)
			}

			function Se(e, t, i) {
				if (ue(i) || !1 === i) e.removeAttribute(t);
				else {
					const s = ve(i) ? i : "";
					e.setAttribute(t, s)
				}
			}

			function ke(e, t, i) {
				e.hasAttribute(t) || e.setAttribute(t, i)
			}

			function Oe(e, t, i) {
				let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vds";
				e.style.setProperty(`--${s}-${t}`, i || null)
			}
			var Ce = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");
			class Pe extends CustomEvent {
				constructor(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					super(e, t), this.triggerEvent = t.triggerEvent, this.hasOwnProperty("originEvent") || Object.defineProperties(this, {
						originEvent: {
							get() {
								var e;
								return null !== (e = Me(this)) && void 0 !== e ? e : this
							}
						},
						isOriginTrusted: {
							get() {
								var e, t;
								return null !== (e = null === (t = Me(this)) || void 0 === t ? void 0 : t.isTrusted) && void 0 !== e && e
							}
						}
					})
				}
				get originEvent() {
					var e;
					return null !== (e = Me(this)) && void 0 !== e ? e : this
				}
				get isOriginTrusted() {
					var e, t;
					return null !== (e = null === (t = this.originEvent) || void 0 === t ? void 0 : t.isTrusted) && void 0 !== e && e
				}
			}

			function je(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return new Pe(e, t)
			}

			function Me(e) {
				let t = e.triggerEvent;
				for (; t && t.triggerEvent;) t = t.triggerEvent;
				return t
			}

			function Ae(e, t) {
				var i;
				(null !== (i = Me(e)) && void 0 !== i ? i : e).triggerEvent = t
			}
			const xe = new Map,
				Le = new Map;

			function Re(e, t, i) {
				const s = {
					host: e,
					callback: i
				};
				e.addController({
					hostConnected: () => {
						var n;
						for (const {
								element: s,
								onDisconnect: r
							} of function(e, t) {
								var i;
								return Array.from(null !== (i = Le.get(t)) && void 0 !== i ? i : []).filter(t => {
									let {
										element: i
									} = t;
									return e !== i && e.contains(i)
								})
							}(e, t)) i(s, r);
						xe.set(t, (null !== (n = xe.get(t)) && void 0 !== n ? n : new Set).add(s))
					},
					hostDisconnected: () => {
						var e;
						null === (e = xe.get(t)) || void 0 === e || e.delete(s)
					}
				})
			}

			function Te(e, t) {
				const i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).register,
					s = new Ce.a,
					n = e => {
						s.add(e)
					},
					r = {
						element: e,
						onDisconnect: n
					};
				e.addController({
					hostConnected() {
						const s = je(t, {
							bubbles: !0,
							composed: !0,
							detail: r
						});
						var o;
						(e.dispatchEvent(s), i) && (Le.set(i, (null !== (o = Le.get(i)) && void 0 !== o ? o : new Set).add(r)), function(e, t, i) {
							for (const {
									host: n,
									callback: r
								} of Array.from(null !== (s = xe.get(t)) && void 0 !== s ? s : [])) {
								var s;
								n !== e && n.contains(e) && r(e, i)
							}
						}(e, i, n))
					},
					hostDisconnected() {
						var e;
						(s.empty(), i) && (null === (e = Le.get(i)) || void 0 === e || e.delete(r))
					}
				})
			}
			var qe, Ve = function(e, t, i) {
				var s = null,
					n = null,
					r = function() {
						s && (clearTimeout(s), n = null, s = null)
					},
					o = function() {
						if (!t) return e.apply(this, arguments);
						var o = this,
							a = arguments,
							l = i && !s;
						return r(), n = function() {
							e.apply(o, a)
						}, s = setTimeout((function() {
							if (s = null, !l) {
								var e = n;
								return n = null, e()
							}
						}), t), l ? n() : void 0
					};
				return o.cancel = r, o.flush = function() {
					var e = n;
					r(), e && e()
				}, o
			};
			! function(e) {
				e.AdRefocusStart = "time-before-unfocus", e.CatInTheAppUi = "cat-in-the-app-ui", e.LastClickedAdId = "last-clicked-ad-id", e.ImpressionId = "last-clicked-impression-id", e.RecentPages = "recent-subreddits-store", e.FeatureTestLocalStorageKey = "🤘shreddit_local_storage_feature_test🤘", e.DisclaimerStore = "disclaimer_store", e.GoodVisit = "good-visit-status", e.GoodVisitFS = "good-visit-feeds-search", e.ModalBlocking = "modal-blocking-status", e.XpromoConsolidation = "xpromo-consolidation", e.XpromoEducationalDeeplinkPrompt = "xpromo-educational-deeplink-prompt"
			}(qe || (qe = {}));
			const Ie = new class {
				getStorage() {
					try {
						return window.localStorage
					} catch (e) {
						return
					}
				}
				clear() {
					var e;
					null === (e = this.getStorage()) || void 0 === e || e.clear()
				}
				getItem(e) {
					var t;
					return (null === (t = this.getStorage()) || void 0 === t ? void 0 : t.getItem(e)) || null
				}
				removeItem(e) {
					var t;
					null === (t = this.getStorage()) || void 0 === t || t.removeItem(e)
				}
				setItem(e, t) {
					var i;
					null === (i = this.getStorage()) || void 0 === i || i.setItem(e, t)
				}
				isAvailable() {
					return this.setItem(qe.FeatureTestLocalStorageKey, "yes"), "yes" === this.getItem(qe.FeatureTestLocalStorageKey)
				}
			};

			function $e() {
				let e = de,
					t = de;
				return {
					promise: new Promise((i, s) => {
						e = i, t = s
					}),
					resolve: e,
					reject: t
				}
			}
			class De {
				constructor() {
					this._requestQueue = new Map, this._requestKeys = [], this._pendingFlush = $e(), this._isServing = !1
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
					this._pendingFlush.resolve(), this._pendingFlush = $e()
				}
				stop() {
					this._isServing = !1
				}
				destroy() {
					this.stop(), this._empty(), this._release()
				}
			}

			function Fe(e) {
				return "symbol" == typeof(null == e ? void 0 : e.id) && "@vidstack/context" === e.id.description
			}

			function He(e) {
				return Object.keys(e)
			}
			const Ne = [];

			function Ue(e) {
				let t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : de;
				const s = new Set;

				function n(i) {
					if (r = i, ((n = e) != n ? r == r : n !== r || n && "object" == typeof n || "function" == typeof n) && (e = i, t)) {
						const t = !Ne.length;
						for (const i of s) i[1](), Ne.push(i, e);
						if (t) {
							for (let e = 0; e < Ne.length; e += 2) Ne[e][0](Ne[e + 1]);
							Ne.length = 0
						}
					}
					var n, r
				}
				return {
					initialValue: e,
					set: n,
					update: function(t) {
						n(t(e))
					},
					subscribe: function(r) {
						const o = [r, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : de];
						return s.add(o), 1 === s.size && (t = i(n) || de), r(e), () => {
							var e;
							(s.delete(o), 0 === s.size) && (null === (e = t) || void 0 === e || e(), t = null)
						}
					}
				}
			}

			function Be(e, t, i) {
				const s = !Array.isArray(e),
					n = s ? [e] : e,
					r = t.length < 2;
				return {
					initialValue: o = i,
					subscribe: Ue(o, e => {
						let i = !1;
						const o = [];
						let a = 0,
							l = de;
						const d = () => {
								if (a) return;
								l();
								const i = t(s ? o[0] : o, e);
								r ? e(i) : l = ge(i) ? i : de
							},
							h = n.map((e, t) => e.subscribe(e => {
								o[t] = e, a &= ~(1 << t), i && d()
							}, () => {
								a |= 1 << t
							}));
						return i = !0, d(),
							function() {
								h.forEach(e => e()), l()
							}
					}).subscribe
				};
				var o
			}

			function ze(e) {
				let t;
				return e.subscribe(e => t = e)(), t
			}

			function We(e, t, i) {
				let s, n;
				const r = () => {
					var e, r, o;
					n = null === (e = null !== (r = null === (o = s) || void 0 === o ? void 0 : o.value) && void 0 !== r ? r : t) || void 0 === e ? void 0 : e.subscribe(i)
				};
				Fe(t) && (s = t.consume(e)), e.addController({
					hostConnected() {
						Fe(t) ? s.whenRegistered(r) : r()
					},
					hostDisconnected() {
						var e;
						null === (e = n) || void 0 === e || e()
					}
				})
			}

			function Qe(e, t, i, s) {
				if (!Fe(t)) return We(e, t[i], s); {
					const n = t.consume(e);
					let r;
					const o = () => {
						r = n.value[i].subscribe(s)
					};
					e.addController({
						hostConnected: () => {
							n.whenRegistered(o)
						},
						hostDisconnected: () => {
							var e;
							null === (e = r) || void 0 === e || e()
						}
					})
				}
			}

			function Ke(e) {
				return new Proxy(e, {
					get: (e, t) => ze(e[t]),
					has: (e, t) => Reflect.has(e, t),
					ownKeys: e => Reflect.ownKeys(e),
					getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e, t)
				})
			}

			function Ye(e) {
				const t = new De;
				return e.addController({
					hostConnected: t.start.bind(t),
					hostDisconnected: t.destroy.bind(t)
				}), t
			}
			class Ge {
				constructor(e) {
					this._host = e, this._isScreenOrientationLocked = !1, this._updateScreenOrientation(), this._listenerDisposal = new Ce.a, e.addController({
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
					return me && !ce(screen.orientation) && ge(screen.orientation.lock) && ge(screen.orientation.unlock)
				}
				get isLocked() {
					return this._isScreenOrientationLocked
				}
				async lock(e) {
					this._throwIfScreenOrientationUnavailable(), await screen.orientation.lock(e), this._isScreenOrientationLocked = !0, this._host.dispatchEvent(je("vds-screen-orientation-lock-change", {
						bubbles: !0,
						composed: !0,
						detail: e
					}))
				}
				async unlock() {
					this._throwIfScreenOrientationUnavailable(), await screen.orientation.unlock(), this._isScreenOrientationLocked = !1, this._host.dispatchEvent(je("vds-screen-orientation-lock-change", {
						bubbles: !0,
						composed: !0,
						detail: screen.orientation.type
					}))
				}
				_addScreenOrientationEventListeners() {
					this.canOrient && this._listenerDisposal.add(this._addScreenOrientationChangeEventListener())
				}
				_addScreenOrientationChangeEventListener() {
					return Object(Ce.e)(screen.orientation, "change", this._handleOrientationChange.bind(this))
				}
				_handleOrientationChange(e) {
					this._screenOrientation = window.screen.orientation.type, this._host.dispatchEvent(je("vds-screen-orientation-change", {
						bubbles: !0,
						composed: !0,
						detail: this._screenOrientation,
						triggerEvent: e
					}))
				}
				_updateScreenOrientation() {
					var e, t;
					this._screenOrientation = me ? null === (e = window.screen) || void 0 === e ? void 0 : null === (t = e.orientation) || void 0 === t ? void 0 : t.type : void 0
				}
				_throwIfScreenOrientationUnavailable() {
					if (!this.canOrient) throw Error("Screen orientation API is not available.")
				}
			}
			var Je = i("./node_modules/fscreen/dist/fscreen.esm.js");
			class Xe {
				constructor(e, t) {
					this._host = e, this._screenOrientationController = t, this._listenerDisposal = new Ce.a, e.addController({
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
					return Je.a.fullscreenEnabled
				}
				get isFullscreen() {
					return this.isNativeFullscreen
				}
				get isNativeFullscreen() {
					if (Je.a.fullscreenElement === this._host) return !0;
					try {
						return this._host.matches(Je.a.fullscreenPseudoClass)
					} catch (e) {
						return !1
					}
				}
				_addFullscreenChangeEventListener(e) {
					if (!this.isSupported) return de;
					const t = Object(Ce.e)(Je.a, "fullscreenchange", e);
					return () => {
						t()
					}
				}
				_addFullscreenErrorEventListener(e) {
					if (!this.isSupported) return de;
					const t = Object(Ce.e)(Je.a, "fullscreenerror", e);
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
					return Je.a.requestFullscreen(this._host)
				}
				_handleFullscreenChange(e) {
					this.isFullscreen || this._listenerDisposal.empty(), this._host.dispatchEvent(je("vds-fullscreen-change", {
						bubbles: !0,
						composed: !0,
						detail: this.isFullscreen,
						triggerEvent: e
					}))
				}
				_handleFullscreenError(e) {
					this._host.dispatchEvent(je("vds-fullscreen-error", {
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
					return Je.a.exitFullscreen()
				}
				_shouldOrientScreen() {
					return this._screenOrientationController.canOrient && !ce(this.screenOrientationLock)
				}
				async _lockScreenOrientation() {
					!ce(this.screenOrientationLock) && this._shouldOrientScreen() && await this._screenOrientationController.lock(this.screenOrientationLock)
				}
				async _unlockScreenOrientation() {
					this._shouldOrientScreen() && await this._screenOrientationController.unlock()
				}
				_throwIfNoFullscreenSupport() {
					if (!this.isSupported) throw Error("Fullscreen API is not enabled or supported in this environment.")
				}
			}
			class Ze {
				constructor(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
					this._skipInitial = !1, this._unobservedUpdate = !1, this._host = e, this._callback = i;
					const {
						target: s,
						skipInitial: n,
						...r
					} = t;
					this._target = null != s ? s : void 0, this._skipInitial = null != n ? n : this._skipInitial, window.IntersectionObserver && (this._observer = new IntersectionObserver(e => {
						const t = this._unobservedUpdate;
						this._unobservedUpdate = !1, this._skipInitial && t || (this.handleChanges(e), this._host.requestUpdate())
					}, r), e.addController(this))
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

			function et(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
				return Number(e.toFixed(t))
			}

			function tt(e, t, i) {
				return Math.max(e, Math.min(i, t))
			}

			function it(e) {
				var t, i;
				return null !== (t = null === (i = String(e).split(".")[1]) || void 0 === i ? void 0 : i.length) && void 0 !== t ? t : 0
			}
			const st = new Map;
			class nt {
				constructor(e, t, i) {
					this._host = e, this.initialValue = t, this._options = i, this._registrationCallbacks = [], e.addController({
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
					if (this._host.dispatchEvent(je("vds-context-consumer-connect", {
							bubbles: !0,
							composed: !0,
							detail: {
								id: this.id,
								setValue: e
							}
						})), !this.registered) {
						var t;
						const i = null !== (t = st.get(this.id)) && void 0 !== t ? t : [];
						i.push({
							host: this._host,
							setValue: e
						}), st.set(this.id, i)
					}
				}
				whenRegistered(e) {
					var t;
					this.registered ? e(this.value) : null === (t = this._registrationCallbacks) || void 0 === t || t.push(e)
				}
			}
			class rt {
				constructor(e, t, i) {
					this._host = e, this._initValue = t, this._options = i, this._stopDisposal = new Ce.a, this._value = t(), e.addController({
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
					const e = Object(Ce.e)(this._host, "vds-context-consumer-connect", this._handleConsumerConnect.bind(this));
					for (const t of function(e, t) {
							var i;
							const s = null !== (i = st.get(e)) && void 0 !== i ? i : [],
								n = s.filter(e => {
									let {
										host: i
									} = e;
									return t.contains(i)
								});
							return st.set(e, s.filter(e => {
								let {
									host: i
								} = e;
								return !t.contains(i)
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

			function ot(e) {
				const t = Symbol("@vidstack/context");
				return {
					id: t,
					consume: i => new nt(i, e(), {
						id: t
					}),
					provide: i => new rt(i, e, {
						id: t
					})
				}
			}
			var at, lt = i("./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js");

			function dt(e, t, i, s) {
				return function(e, t, i) {
					if (!pe(t) || t < 0 || t > i) throw new Error(`Failed to execute '${e}' on 'TimeRanges': The index provided (${t}) is non-numeric or out of bounds (0-${i}).`)
				}(e, s, i.length - 1), i[s][t]
			}

			function ht(e) {
				if (ce(e) || 0 === e.length) {
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
					start: dt.bind(null, "start", 0, e),
					end: dt.bind(null, "end", 1, e)
				}
			}

			function ct(e, t) {
				return _e(e) ? ht(e) : ce(e) || ce(t) ? ht() : ht([
					[e, t]
				])
			}! function(e) {
				e.Unknown = "unknown", e.Audio = "audio", e.Video = "video"
			}(at || (at = {}));
			const ut = {
				autoplay: !1,
				autoplayError: void 0,
				buffered: ct(),
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
				mediaType: lt.a.Unknown,
				muted: !1,
				paused: !0,
				played: ct(),
				playing: !1,
				playsinline: !1,
				seekable: ct(),
				seekableAmount: 0,
				seeking: !1,
				src: [],
				started: !1,
				viewType: at.Unknown,
				volume: 1,
				waiting: !1
			};

			function pt() {
				const e = {};
				for (const t of He(ut)) e[t] = Ue(ut[t]);
				return e
			}
			const vt = new Set(["autoplay", "canFullscreen", "canLoad", "controls", "currentSrc", "loop", "muted", "playsinline", "poster", "src", "viewType", "volume"]);
			const gt = ot(pt);

			function _t(e, t, i) {
				return Qe(e, gt, t, i)
			}
			var mt = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			const bt = Symbol("@vidstack/media-provider-discovery");
			class yt extends s.a {
				constructor() {
					super(), this._disconnectDisposal = new Ce.a, this.manualPaused = !1, this.loading = "lazy", this._attemptingAutoplay = !1, this.muteToggledManually = !1, this.controllerQueue = new De, this._store = pt(), this._state = Ke(this._store), this.connectedQueue = Ye(this), this.mediaQueue = new De, this.screenOrientationController = new Ge(this), this.fullscreenController = new Xe(this, this.screenOrientationController), Te(this, "vds-media-provider-connect", {
						register: bt
					});
					const e = function() {
						for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
						return new Ze(...t)
					}(this, {
						target: this,
						threshold: 0
					}, t => {
						var i;
						null !== (i = t[0]) && void 0 !== i && i.isIntersecting && "lazy" === this.loading && (this.startLoadingMedia(), e.hostDisconnected())
					})
				}
				connectedCallback() {
					super.connectedCallback(), Se(this, "paused", this.paused), window.requestAnimationFrame(() => {
						ce(this.canLoadPoster) && (this.canLoadPoster = !0)
					})
				}
				firstUpdated(e) {
					super.firstUpdated(e), this.dispatchEvent(je("vds-fullscreen-support-change", {
						detail: this.canFullscreen
					})), "eager" === this.loading && this.startLoadingMedia()
				}
				render() {
					return s.c`<slot @slotchange="${this.handleDefaultSlotChange}"></slot>`
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
							i = tt(0, e, 1);
						t !== i && (this._setVolume(i), this.requestUpdate("volume", t))
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
					t !== e && (this.dispatchEvent(je("vds-poster-change", {
						detail: e
					})), this.requestUpdate("poster", t))
				}
				get loop() {
					return this.state.loop
				}
				set loop(e) {
					const t = this.loop;
					t !== e && (this.dispatchEvent(je("vds-loop-change", {
						detail: e
					})), this.requestUpdate("loop", t))
				}
				get controls() {
					return this.state.controls
				}
				set controls(e) {
					const t = this.controls;
					t !== e && (this.dispatchEvent(je("vds-controls-change", {
						detail: e
					})), this.requestUpdate("controls", t))
				}
				get canLoad() {
					return this.state.canLoad
				}
				startLoadingMedia() {
					this.controllerQueue, this.dispatchEvent(je("vds-can-load")), this.autoplay ? this.dispatchEvent(je("vds-can-autoplay")) : this.dispatchEvent(je("vds-manual-load"))
				}
				_throwIfNotReadyForPlayback() {
					if (!this.state.canPlay) throw Error("Media is not ready - wait for `vds-can-play` event.")
				}
				async _resetPlaybackIfEnded() {
					if (this.state.ended && 0 !== this.state.currentTime) return this._setCurrentTime(0)
				}
				_throwIfNotVideoView() {
					if (this.state.viewType !== at.Video) throw Error("Player is currently not in a video view.")
				}
				async _handleMediaReady(e) {
					let {
						event: t,
						duration: i
					} = e;
					this.state.canPlay || (this.dispatchEvent(je("vds-can-play", {
						triggerEvent: t,
						detail: {
							duration: i
						}
					})), this.mediaQueue.start())
				}
				_handleCurrentSrcChange(e, t) {
					this.state.currentSrc !== e && (this.mediaQueue.stop(), this.dispatchEvent(je("vds-current-src-change", {
						detail: e,
						triggerEvent: t
					})))
				}
				get autoplay() {
					return this.state.autoplay
				}
				set autoplay(e) {
					this.autoplay !== e && (this.dispatchEvent(je("vds-autoplay-change", {
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
							this.dispatchEvent(je("vds-autoplay", {
								detail: {
									muted: this.muted
								}
							})), await this.play()
						} catch (e) {
							this.dispatchEvent(je("vds-autoplay-fail", {
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
						this.controllerQueue.destroy(), this._controller = void 0, this._store = pt(), this._state = Ke(this._store)
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
			mt([Object(n.b)({
				type: Number,
				reflect: !0
			})], yt.prototype, "volume", null), mt([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], yt.prototype, "paused", null), mt([Object(n.b)({
				type: Boolean
			})], yt.prototype, "manualPaused", void 0), mt([Object(n.b)({
				type: Number
			})], yt.prototype, "currentTime", null), mt([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], yt.prototype, "muted", null), mt([Object(n.b)({
				reflect: !0
			})], yt.prototype, "poster", null), mt([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], yt.prototype, "loop", null), mt([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], yt.prototype, "controls", null), mt([Object(n.d)()], yt.prototype, "canLoadPoster", void 0), mt([Object(n.b)({
				attribute: "loading"
			})], yt.prototype, "loading", void 0), mt([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], yt.prototype, "autoplay", null), mt([Object(n.b)({
				attribute: "idle-delay",
				type: Number
			})], yt.prototype, "idleDelay", null), mt([Object(n.b)({
				attribute: "fullscreen-orientation"
			})], yt.prototype, "fullscreenOrientation", null);
			var ft = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			const wt = "@reddit/shreddit-player-media-volume",
				Et = new Set;
			let St = !1,
				kt = !1;
			class Ot extends s.a {
				constructor() {
					super(), this.singlePlayback = !1, this.syncVolume = !1, this._providerDisposal = new Ce.a, Re(this, bt, (e, t) => {
						this._handleMediaProviderConnect(e, t)
					})
				}
				static get styles() {
					return s.b`
      :host {
        display: contents;
      }
    `
				}
				disconnectedCallback() {
					super.disconnectedCallback(), this._providerDisposal.empty()
				}
				render() {
					return s.c`<slot></slot>`
				}
				get provider() {
					return this._provider
				}
				_handleMediaProviderConnect(e, t) {
					if (this._provider = e, Et.add(e), this.singlePlayback) {
						const t = Object(Ce.e)(e, "vds-play", this._handleMediaPlay.bind(this));
						this._providerDisposal.add(t)
					}
					if (this.syncVolume) {
						const t = Object(Ce.e)(e, "vds-volume-change", Ve(this._handleMediaVolumeChange.bind(this), 10, !0));
						this._providerDisposal.add(t)
					}
					window.requestAnimationFrame(() => {
						if (this._provider) {
							const e = this._getSavedMediaVolume();
							if (pe(null == e ? void 0 : e.volume) && (this._provider.volume = e.volume), this._provider.autoplay)
								if (!1 === (null == e ? void 0 : e.muted)) {
									const e = [...Et].some(e => e.muteToggledManually);
									this._provider.muted = !e
								} else this._provider.muted = !0;
							else ce(null == e ? void 0 : e.muted) || (this._provider.muted = e.muted)
						}
					}), t(() => {
						Et.delete(e), this._provider = void 0, this._providerDisposal.empty()
					})
				}
				_handleMediaPlay() {
					St || (St = !0, Et.forEach(e => {
						e !== this._provider && (e.paused = !0)
					}), St = !1)
				}
				_handleMediaVolumeChange(e) {
					if (kt) return;
					kt = !0;
					const {
						volume: t,
						muted: i
					} = e.detail;
					Et.forEach(e => {
						e !== this._provider && (e.volume = t, e.muted = i)
					}), this.dispatchEvent(je("vds-media-volume-sync", {
						bubbles: !0,
						composed: !0,
						detail: e.detail
					})), kt = !1
				}
				_getSavedMediaVolume() {
					try {
						return JSON.parse(Ie.getItem(wt))
					} catch (e) {
						return
					}
				}
			}
			ft([Object(n.b)({
				type: Boolean,
				attribute: "single-playback"
			})], Ot.prototype, "singlePlayback", void 0), ft([Object(n.b)({
				type: Boolean,
				attribute: "sync-volume"
			})], Ot.prototype, "syncVolume", void 0), Ee("vds-media-sync", Ot);
			var Ct = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js"),
				Pt = function(e, t, i, s) {
					var n, r = arguments.length,
						o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
					if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
					else
						for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
					return r > 3 && o && Object.defineProperty(t, i, o), o
				};
			class jt extends s.a {
				constructor() {
					super(), this.viewportEnterDelay = 0, this.pageChangeType = "state", this.pageEnterDelay = 0, this.intersectionThreshold = 1, this._isIntersecting = !1, this._providerDisposal = new Ce.a, this._hasIntersected = !1, this.pageController = new Ct.a(this, e => {
						let {
							state: t,
							visibility: i
						} = e;
						if (window.clearTimeout(this._pageTimeout), !this.isIntersecting) return;
						"hidden" === ("state" === this.pageChangeType ? t : i) ? this._triggerOnExit(this.exitPage): this.enterViewport && (this._pageTimeout = window.setTimeout(() => {
							this._triggerOnEnter(this.enterPage), this._pageTimeout = void 0
						}, this.pageEnterDelay)), this._dispatchVisibilityChange()
					}), Re(this, bt, (e, t) => {
						this._handleMediaProviderConnect(e, t)
					})
				}
				static get styles() {
					return s.b`
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
					return s.c`<slot></slot>`
				}
				get provider() {
					return this._provider
				}
				_handleMediaProviderConnect(e, t) {
					this._provider = e;
					let i = () => {};
					this._provider.addEventListener("vds-can-play", () => {
						this.intersectionController = this.initializeIntersectionController(), this.initializeScrollListener(), i = this.intersectionController.observe(this)
					}), t(() => {
						i(), this._provider = void 0, this._providerDisposal.empty(), this._scrollListener && window.removeEventListener("scroll", this._scrollListener)
					})
				}
				initializeIntersectionController() {
					return new Ze(this, {
						root: this.intersectionRoot ? document.querySelector(this.intersectionRoot) : null,
						threshold: this.intersectionThreshold
					}, e => {
						window.clearTimeout(this._intersectionTimeout);
						const t = e[0];
						this._isIntersecting = t.isIntersecting, t.isIntersecting ? this._hasIntersected ? this._intersectionTimeout = window.setTimeout(() => {
							this._triggerOnEnter(this.enterViewport), this._intersectionTimeout = void 0
						}, this.viewportEnterDelay) : this._triggerOnEnter(this.enterViewport) : this.exitViewport && this._triggerOnExit(this.exitViewport), this._hasIntersected = !0, this._dispatchVisibilityChange()
					})
				}
				initializeScrollListener() {
					this._scrollListener = Ve(() => {
						var e;
						!this.isIntersecting && null !== (e = this.provider) && void 0 !== e && e.state.playing && this._triggerOnExit(this.exitViewport)
					}, 100, !1), window.addEventListener("scroll", this._scrollListener)
				}
				_triggerOnEnter(e) {
					this._provider && ("play" === e ? !1 === this._provider.state.started ? this._provider.attemptAutoplay() : this._provider.manualPaused || (this._provider.paused = !1) : "unmute" === e && (this._provider.muted = !1))
				}
				_triggerOnExit(e) {
					this._provider && ("pause" === e ? this._provider.paused = !0 : "mute" === e && (this._provider.muted = !0))
				}
				_dispatchVisibilityChange() {
					this._provider && this.dispatchEvent(je("vds-media-visibility-change", {
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
			Pt([Object(n.b)({
				attribute: "enter-viewport"
			})], jt.prototype, "enterViewport", void 0), Pt([Object(n.b)({
				attribute: "exit-viewport"
			})], jt.prototype, "exitViewport", void 0), Pt([Object(n.b)({
				type: Number,
				attribute: "viewport-enter-delay"
			})], jt.prototype, "viewportEnterDelay", void 0), Pt([Object(n.b)({
				attribute: "enter-page"
			})], jt.prototype, "enterPage", void 0), Pt([Object(n.b)({
				attribute: "exit-page"
			})], jt.prototype, "exitPage", void 0), Pt([Object(n.b)({
				attribute: "page-change-type"
			})], jt.prototype, "pageChangeType", void 0), Pt([Object(n.b)({
				type: Number,
				attribute: "page-enter-delay"
			})], jt.prototype, "pageEnterDelay", void 0), Pt([Object(n.b)({
				attribute: "intersection-root"
			})], jt.prototype, "intersectionRoot", void 0), Pt([Object(n.b)({
				type: Number,
				attribute: "intersection-threshold"
			})], jt.prototype, "intersectionThreshold", void 0), Ee("vds-media-visibility", jt);
			var Mt = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js"),
				At = function(e, t, i) {
					var s = null,
						n = null,
						r = i && i.leading,
						o = i && i.trailing;
					null == r && (r = !0);
					null == o && (o = !r);
					1 == r && (o = !1);
					var a = function() {
							s && (clearTimeout(s), s = null)
						},
						l = function() {
							var i = r && !s,
								a = this,
								l = arguments;
							if (n = function() {
									return e.apply(a, l)
								}, s || (s = setTimeout((function() {
									if (s = null, o) return n()
								}), t)), i) return i = !1, n()
						};
					return l.cancel = a, l.flush = function() {
						var e = n;
						a(), e && e()
					}, l
				};
			const xt = ot(() => Ue(void 0));
			class Lt {
				constructor(e, t) {
					this._host = e, this._mediaStore = t, this._idle = !1, this._mediaPaused = !1, this._idlingPaused = !1, this._isMouseOverMedia = !0, this._isMouseOverUIControls = !1, this._disposal = new Ce.a, this.delay = 1500, e.addController(this)
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
						const t = Object(Ce.e)(this._host, e, Ve(this._handleIdleChange.bind(this), 1, !0));
						this._disposal.add(t)
					});
					const t = Object(Ce.e)(this._host, "mouseenter", () => {
							this._isMouseOverMedia = !0
						}),
						i = Object(Ce.e)(this._host, "mouseleave", () => {
							this._isMouseOverMedia = !1, this._handleIdleChange()
						});
					this._disposal.add(t), this._disposal.add(i);
					const s = null === (e = this._host) || void 0 === e ? void 0 : e.querySelector(".disappearing-controls");
					if (s) {
						const e = Object(Ce.e)(s, "mouseenter", () => {
								this._isMouseOverUIControls = !0
							}),
							t = Object(Ce.e)(s, "mouseleave", () => {
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
					this._idle !== e && (this._host.dispatchEvent(je("vds-user-idle-change", {
						detail: e
					})), this._idle = e)
				}
			}
			class Rt {
				constructor(e) {
					this._host = e, this._disconnectDisposal = new Ce.a, this.providerQueue = new De, this.providerDisposal = new Ce.a, this._providerContext = xt.provide(this._host), this._mediaStoreProvider = gt.provide(this._host), this.state = Ke(this._store), this._handleIdleChange = Object(Mt.a)(this._host, "vds-user-idle-change", e => {
						this._store.userIdle.set(e.detail), this._satisfyMediaRequest("userIdle", e)
					}), this._pendingMediaRequests = {
						play: [],
						pause: [],
						volume: [],
						fullscreen: [],
						seeked: [],
						seeking: [],
						userIdle: []
					}, this._handleMuteRequest = Object(Mt.a)(this._host, "vds-mute-request", this._createMediaRequestHandler("muted", e => {
						this.state.muted || (this._pendingMediaRequests.volume.push(e), this.provider.muted = !0, this.provider.muteToggledManually = !0, this._persistVolumeSetting({
							volume: this.state.volume,
							muted: !0
						}))
					})), this._handleUnmuteRequest = Object(Mt.a)(this._host, "vds-unmute-request", this._createMediaRequestHandler("muted", e => {
						this.state.muted && (this._pendingMediaRequests.volume.push(e), this.provider.muted = !1, this.provider.muteToggledManually = !0, this._persistVolumeSetting({
							volume: this.state.volume,
							muted: !1
						}), 0 === this.state.volume && (this._pendingMediaRequests.volume.push(e), this.provider.volume = .25))
					})), this._handlePlayRequest = Object(Mt.a)(this._host, "vds-play-request", this._createMediaRequestHandler("paused", e => {
						this.state.paused && (this._pendingMediaRequests.play.push(e), this.provider.paused = !1, this.provider.manualPaused = !1)
					})), this._handlePauseRequest = Object(Mt.a)(this._host, "vds-pause-request", this._createMediaRequestHandler("paused", e => {
						this.state.paused || (this._pendingMediaRequests.pause.push(e), this.provider.paused = !0, this.provider.manualPaused = !0)
					})), this._isSeekingRequestPending = !1, this._handleSeekingRequest = Object(Mt.a)(this._host, "vds-seeking-request", this._createMediaRequestHandler("seeking", e => {
						this._stopWaiting(), this._pendingMediaRequests.seeking.push(e), this._isSeekingRequestPending = !0, this._store.seeking.set(!0)
					})), this._handleSeekRequest = Object(Mt.a)(this._host, "vds-seek-request", this._createMediaRequestHandler("seeking", e => {
						this.store.ended && (this._isReplay = !0), this._pendingMediaRequests.seeked.push(e), this._isSeekingRequestPending = !1;
						let t = e.detail;
						this.state.duration - e.detail < .25 && (t = this.state.duration), this.provider.currentTime = t
					})), this._handleVolumeChangeRequest = Object(Mt.a)(this._host, "vds-volume-change-request", this._createMediaRequestHandler("volume", e => {
						const t = e.detail;
						this.state.volume !== t && (this._pendingMediaRequests.volume.push(e), this.provider.volume = t, t > 0 && this.state.muted && (this.provider.muted = !1), this._persistVolumeSetting({
							volume: t,
							muted: 0 === t
						}))
					})), this._handleEnterFullscreenRequest = Object(Mt.a)(this._host, "vds-enter-fullscreen-request", this._createMediaRequestHandler("fullscreen", async e => {
						var t;
						if (this.state.fullscreen) return;
						var i, s;
						"media" === (null !== (t = e.detail) && void 0 !== t ? t : "media") && this._host.canFullscreen ? (this._pendingMediaRequests.fullscreen.push(e), await (null === (i = (s = this._host).enterFullscreen) || void 0 === i ? void 0 : i.call(s))) : this.provider && (this._pendingMediaRequests.fullscreen.push(e), await this.provider.enterFullscreen())
					})), this._handleExitFullscreenRequest = Object(Mt.a)(this._host, "vds-exit-fullscreen-request", this._createMediaRequestHandler("fullscreen", async e => {
						var t;
						if (!this.state.fullscreen) return;
						var i, s;
						"media" === (null !== (t = e.detail) && void 0 !== t ? t : "media") && this._host.canFullscreen ? (this._pendingMediaRequests.fullscreen.push(e), await (null === (i = (s = this._host).exitFullscreen) || void 0 === i ? void 0 : i.call(s))) : this.provider && (this._pendingMediaRequests.fullscreen.push(e), await this.provider.exitFullscreen())
					})), this._handleResumeIdlingRequest = Object(Mt.a)(this._host, "vds-resume-user-idle-request", e => {
						this._mediaRequestEventGateway(e) && (this._pendingMediaRequests.userIdle.push(e), this._userIdleController && (this._userIdleController.paused = !1))
					}), this._handlePauseIdlingRequest = Object(Mt.a)(this._host, "vds-pause-user-idle-request", e => {
						this._mediaRequestEventGateway(e) && (this._pendingMediaRequests.userIdle.push(e), this._userIdleController && (this._userIdleController.paused = !0))
					}), this._handleShowPosterRequest = Object(Mt.a)(this._host, "vds-show-poster-request", this._createMediaRequestHandler("poster", () => {
						this._provider.canLoadPoster = !0
					})), this._handleHidePosterRequest = Object(Mt.a)(this._host, "vds-hide-poster-request", this._createMediaRequestHandler("poster", () => {
						this._provider.canLoadPoster = !1
					})), this._handleLoopRequest = Object(Mt.a)(this._host, "vds-loop-request", this._createMediaRequestHandler("loop", () => {
						window.requestAnimationFrame(async () => {
							try {
								this._isLooping = !0, this._isReplay = !0, await this._provider.play()
							} catch (e) {
								this._isReplay = !1, this._isLooping = !1
							}
						})
					})), this._handleManualHlsLevelChange = Object(Mt.a)(this._host, "vds-hls-manual-level-change", this._createMediaRequestHandler("hls-level-change", e => {
						const t = this.provider;
						window.requestAnimationFrame(async () => {
							try {
								if (null != t && t.hlsEngine) {
									t.loadingUserLevel = !0, this._store.waiting.set(!0), this._store.playing.set(!1), t.hlsEngine.currentLevel = e.detail;
									const i = async () => {
										var e;
										t.loadingUserLevel = !1, this._store.waiting.set(!1), this._store.playing.set(!0), null === (e = t.hlsEngine) || void 0 === e || e.off("hlsBufferEos", i)
									};
									t.hlsEngine.on("hlsBufferEos", i)
								}
							} catch {
								null != t && t.hlsEngine && (t.loadingUserLevel = !1, this._store.waiting.set(!1), this._store.playing.set(!0))
							}
						})
					})), this._handleFullscreenChange = Object(Mt.a)(this._host, "vds-fullscreen-change", e => {
						var t;
						this._store.fullscreen.set(e.detail), e.target === this._host && (this._satisfyMediaRequest("fullscreen", e), null === (t = this._provider) || void 0 === t || t.dispatchEvent(je("vds-fullscreen-change", {
							detail: e.detail,
							triggerEvent: e
						})))
					}), this._handleFullscreenError = Object(Mt.a)(this._host, "vds-fullscreen-error", e => {
						var t;
						e.target === this._host && (this._satisfyMediaRequest("fullscreen", e), null === (t = this._provider) || void 0 === t || t.dispatchEvent(je("vds-fullscreen-error", {
							detail: e.detail,
							triggerEvent: e
						})))
					}), this._isReplay = !1, this._isLooping = !1, this._firingWaiting = !1, this._mediaEvents = [], this._handleSeeking = At(e => {
						this._mediaEvents.push(e), this._store.seeking.set(!0), this._store.currentTime.set(e.detail), this._satisfyMediaRequest("seeking", e)
					}, 150, {
						leading: !0
					}), this._fireWaiting = Ve(() => {
						var e;
						if (!this._originalWaitingEvent) return;
						this._firingWaiting = !0;
						const t = je("vds-waiting", this._originalWaitingEvent);
						this._mediaEvents.push(t), this._store.waiting.set(!0), this._store.playing.set(!1), null === (e = this._provider) || void 0 === e || e.dispatchEvent(t), this._originalWaitingEvent = void 0, this._firingWaiting = !1
					}, 300), this._skipInitialSrcChange = !0, Re(e, bt, (e, t) => {
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
					ue(this.provider) && this.provider !== e && (this._handleMediaProviderDisconnect(), this._provider = e, this._providerContext.value.set(e), function(e, t) {
						for (const i of He(e)) {
							const s = e[i],
								n = t[i];
							if (!s || !n) continue;
							const r = ze(s);
							r !== ze(n) && n.set(r)
						}
					}(this._provider._store, this._store), this._attachMediaEventListeners(), e.attachMediaController(this, e => this._disconnectDisposal.add(e)), this._flushMediaProviderConnectedQueue(), t(this._handleMediaProviderDisconnect.bind(this)))
				}
				_handleMediaProviderDisconnect() {
					ue(this.provider) || (this.providerQueue.destroy(), this.providerDisposal.empty(), this._provider = void 0, this._providerContext.value.set(void 0), function(e) {
						for (const t of He(ut)) e[t].set(ut[t])
					}(this._store), this._store.viewType.set(at.Unknown))
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
					He(this._pendingMediaRequests).forEach(e => {
						this._pendingMediaRequests[e] = []
					})
				}
				_satisfyMediaRequest(e, t) {
					const i = this._pendingMediaRequests[e].shift();
					i && (t.requestEvent = i, Ae(t, i))
				}
				_mediaRequestEventGateway(e) {
					return e.stopPropagation(), !0
				}
				_createMediaRequestHandler(e, t) {
					return i => {
						this._mediaRequestEventGateway(i) && (this._provider ? t(i) : this.providerQueue.queue(e, () => {
							t(i)
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
					for (const t of He(e)) {
						const i = e[t].bind(this);
						this.providerDisposal.add(Object(Ce.e)(this._provider, t, i))
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
					this._updateMetadata(e.detail), this._mediaEvents.push(e), Ae(e, this._findLastMediaEvent("vds-src-change"))
				}
				_handleLoadedData(e) {
					this._mediaEvents.push(e), Ae(e, this._findLastMediaEvent("vds-load-start")), this._userIdleController = new Lt(this._host, this._store)
				}
				_handleLoadedMetadata(e) {
					this._updateMetadata(e.detail), this._mediaEvents.push(e), Ae(e, this._findLastMediaEvent("vds-load-start"))
				}
				_handleCanPlay(e) {
					var t;
					this._mediaEvents.push(e), "loadedmetadata" !== (null === (t = e.triggerEvent) || void 0 === t ? void 0 : t.type) && Ae(e, this._findLastMediaEvent("vds-loaded-metadata")), this._store.canPlay.set(!0), this._store.duration.set(e.detail.duration)
				}
				_handleCanPlayThrough(e) {
					this._store.canPlay.set(!0), this._store.duration.set(e.detail.duration), Ae(e, this._findLastMediaEvent("vds-can-play"))
				}
				_handleAutoplay(e) {
					this._mediaEvents.push(e), Ae(e, this._findLastMediaEvent("vds-play")), Ae(e, this._findLastMediaEvent("vds-can-play")), this._store.autoplayError.set(void 0)
				}
				_handleAutoplayFail(e) {
					Ae(e, this._findLastMediaEvent("vds-play-fail")), Ae(e, this._findLastMediaEvent("vds-can-play")), this._store.autoplayError.set(e.detail), this._clearMediaStateTracking()
				}
				_handlePlay(e) {
					if (!this._isLooping && this.state.paused) {
						if (this._mediaEvents.push(e), Ae(e, this._findLastMediaEvent("vds-waiting")), this._satisfyMediaRequest("play", e), this._store.paused.set(!1), this._store.autoplayError.set(void 0), this.state.ended || this._isReplay) {
							var t;
							this._isReplay = !1, this._store.ended.set(!1);
							const i = je("vds-replay", {
								triggerEvent: e
							});
							null === (t = this._provider) || void 0 === t || t.dispatchEvent(i)
						}
					} else e.stopImmediatePropagation()
				}
				_handlePlayFail(e) {
					this._mediaEvents.push(e), this._stopWaiting(), Ae(e, this._findLastMediaEvent("vds-play")), this._store.paused.set(!0), this._store.playing.set(!1), this._satisfyMediaRequest("play", e), this._clearMediaStateTracking()
				}
				_handlePlaying(e) {
					this._mediaEvents.push(e);
					const t = this._findLastMediaEvent("vds-play");
					if (t ? (Ae(e, this._findLastMediaEvent("vds-waiting")), Ae(e, t)) : Ae(e, this._findLastMediaEvent("vds-seeked")), this._stopWaiting(), this._clearMediaStateTracking(), this._store.paused.set(!1), this._store.playing.set(!0), this._store.seeking.set(!1), this._store.ended.set(!1), this._isLooping) return e.stopImmediatePropagation(), void(this._isLooping = !1);
					var i;
					this.state.started || (this._store.started.set(!0), null === (i = this._provider) || void 0 === i || i.dispatchEvent(je("vds-started", {
						triggerEvent: e
					})))
				}
				_handlePause(e) {
					this._isLooping ? e.stopImmediatePropagation() : (Ae(e, this._findLastMediaEvent("vds-seeked")), this._satisfyMediaRequest("pause", e), this._store.paused.set(!0), this._store.playing.set(!1), this._store.seeking.set(!1), this._stopWaiting(), this._clearMediaStateTracking())
				}
				_handleTimeUpdate(e) {
					const {
						currentTime: t,
						played: i
					} = e.detail;
					this._store.currentTime.set(t), this._store.played.set(i), this.provider.loadingUserLevel || this._store.waiting.set(!1)
				}
				_handleVolumeChange(e) {
					this._store.volume.set(e.detail.volume), this._store.muted.set(e.detail.muted || 0 === e.detail.volume), this._satisfyMediaRequest("volume", e)
				}
				_handleSeeked(e) {
					this._isSeekingRequestPending ? (this._store.seeking.set(!0), e.stopImmediatePropagation()) : this.state.seeking && (this._mediaEvents.push(e), Ae(e, this._findLastMediaEvent("vds-waiting")), Ae(e, this._findLastMediaEvent("vds-seeking")), this.state.paused && this._stopWaiting(), this._store.seeking.set(!1), e.detail !== this.state.duration && this._store.ended.set(!1), this._store.currentTime.set(e.detail), this._satisfyMediaRequest("seeked", e))
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
					(this._store.currentSrc.set(e.detail), this._skipInitialSrcChange) ? this._skipInitialSrcChange = !1: (this._clearMediaStateTracking(), He(t = this._store).forEach(e => {
						vt.has(e) || t[e].set(t[e].initialValue)
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
						seekable: i
					} = e.detail, s = 0 === t.length ? 0 : t.end(t.length - 1), n = 0 === i.length ? 0 : i.end(i.length - 1);
					this._store.buffered.set(t), this._store.bufferedAmount.set(s), this._store.seekable.set(i), this._store.seekableAmount.set(n)
				}
				_handleSrcChange(e) {
					this._store.src.set(e.detail)
				}
				_handleViewTypeChange(e) {
					this._store.viewType.set(e.detail)
				}
				_persistVolumeSetting(e) {
					Ie.setItem(wt, JSON.stringify(e))
				}
			}
			class Tt {
				constructor(e, t, i) {
					this._host = e, this._store = t, this._mediaProps = i, this._disposal = new Ce.a, this._host.addController({
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
								const i = this._getMediaAttrName(e),
									s = t.subscribe(t => {
										window.requestAnimationFrame(() => {
											this._handleValueChange(e, i, t)
										})
									});
								this._disposal.add(s)
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
			class qt extends Tt {
				_handleValueChange(e, t, i) {
					window.requestAnimationFrame(() => {
						Se(this._host, t, ve(i) || pe(i) ? String(i) : !!i)
					})
				}
				_handleDisconnect(e, t) {
					this._host.removeAttribute(t)
				}
			}
			class Vt extends Tt {
				_handleValueChange(e, t, i) {
					window.requestAnimationFrame(() => {
						this._host.style.setProperty(this._getCssPropName(t), ve(i) || pe(i) ? String(i) : null)
					})
				}
				_getCssPropName(e) {
					return `--vds-${e}`
				}
				_handleDisconnect(e, t) {
					this._host.style.setProperty(this._getCssPropName(t), null)
				}
			}
			var It = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			const $t = Symbol("@vidstack/media-discovery");
			class Dt extends s.a {
				constructor() {
					super(), this.controller = new Rt(this), this.__mediaFullscreen = !1, this.__mediaIsVideoView = !1, this.__mediaPlaysinline = !1, this.screenOrientationController = new Ge(this), this.fullscreenController = new Xe(this, this.screenOrientationController), Te(this, "vds-media-connect", {
						register: $t
					}), _t(this, "fullscreen", e => {
						this.__mediaFullscreen = e
					}), _t(this, "viewType", e => {
						this.__mediaIsVideoView = e === at.Video
					}), _t(this, "playsinline", e => {
						this.__mediaPlaysinline = e
					}), this._bindMediaAttributes(), this._bindMediaCSSProperties()
				}
				static get styles() {
					return [s.b`
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
					Se(this, "hide-ui", this._shouldHideMediaUI()), super.update(e)
				}
				render() {
					return s.c`<slot></slot>`
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
						for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
						new qt(...t)
					}(this, this.controller.store, ["autoplay", "autoplayError", "canLoad", "canPlay", "canFullscreen", "ended", "error", "fullscreen", "userIdle", "loop", "mediaType", "muted", "paused", "playing", "playsinline", "seeking", "started", "viewType", "waiting"])
				}
				_bindMediaCSSProperties() {
					! function() {
						for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
						new Vt(...t)
					}(this, this.controller.store, ["bufferedAmount", "currentTime", "duration", "seekableAmount"])
				}
				_shouldHideMediaUI() {
					return ye && this.__mediaIsVideoView && (!this.__mediaPlaysinline || this.__mediaFullscreen)
				}
			}
			It([Object(n.d)()], Dt.prototype, "__mediaFullscreen", void 0), It([Object(n.d)()], Dt.prototype, "__mediaIsVideoView", void 0), It([Object(n.d)()], Dt.prototype, "__mediaPlaysinline", void 0), It([Object(n.b)({
				attribute: "fullscreen-orientation"
			})], Dt.prototype, "fullscreenOrientation", null), Ee("vds-media", Dt);
			var Ft = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			const Ht = new Map;
			class Nt extends s.a {
				constructor() {
					super(), this._disposal = new Ce.a, this.repeat = 0, this.priority = 10, this._mediaCurrentTime = 0, this._currentToggleState = !1, this._mediaStoreConsumer = gt.consume(this), We(this, xt, e => {
						this._mediaProviderElement = e
					})
				}
				static get styles() {
					return [s.b`
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
					return this._mediaProviderElement ? Ht.get(this._mediaProviderElement) : void 0
				}
				get _pendingAction() {
					var e;
					return null === (e = this._pendingActions) || void 0 === e ? void 0 : e.get(this)
				}
				connectedCallback() {
					super.connectedCallback(), window.requestAnimationFrame(() => {
						this._mediaProviderElement && Ht.set(this._mediaProviderElement, new Map)
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
					let t, i = this.action;
					this.action.startsWith("toggle:") && (i = this._getToggleEventType()), this.action.startsWith("seek:") && (i = "seek", t = this._mediaCurrentTime + Number(this.action.split(":")[1])), this.dispatchEvent(je(`vds-${i}-request`, {
						bubbles: !0,
						composed: !0,
						detail: t,
						triggerEvent: e
					}))
				}
				_attachListener() {
					var e = this;
					if (this._disposal.empty(), !this._mediaProviderElement || !this.type || !this.action) return;
					let t, i = 0;
					const s = Object(Ce.e)(this._mediaProviderElement, this.type, s => {
						if (this._validateEvent(s)) {
							var n;
							if (s.preventDefault(), 0 == i) null === (n = this._pendingActions) || void 0 === n || n.set(this, [s, $e()]);
							! function() {
								let s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								i += 1, window.clearTimeout(t), t = window.setTimeout(() => {
									var t;
									const n = null === (t = e._pendingAction) || void 0 === t ? void 0 : t[1];
									var r;
									s && (null === (r = e._pendingActions) || void 0 === r || r.delete(e));
									Bt(e._mediaProviderElement), i = 0, null == n || n.resolve()
								}, 250)
							}(i < this.repeat)
						}
					});
					this._disposal.add(s)
				}
				_validateEvent(e) {
					if (Object(Ce.c)(e) || Object(Ce.b)(e) || Object(Ce.d)(e)) {
						var t, i;
						const s = Object(Ce.d)(e) ? e.touches[0] : void 0,
							n = null !== (t = null == s ? void 0 : s.clientX) && void 0 !== t ? t : e.clientX,
							r = null !== (i = null == s ? void 0 : s.clientY) && void 0 !== i ? i : e.clientY,
							o = this.getBoundingClientRect(),
							a = r >= o.top && r <= o.bottom && n >= o.left && n <= o.right;
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
					const i = this.action.split(":")[1],
						s = null === (t = this._mediaStore[i]) || void 0 === t ? void 0 : t.subscribe(e => {
							this._currentToggleState = !!e
						});
					s && this._disposal.add(s)
				}
			}
			Ft([Object(n.b)()], Nt.prototype, "type", void 0), Ft([Object(n.b)({
				type: Number
			})], Nt.prototype, "repeat", void 0), Ft([Object(n.b)({
				type: Number
			})], Nt.prototype, "priority", void 0), Ft([Object(n.b)()], Nt.prototype, "action", void 0);
			const Ut = new WeakSet;
			async function Bt(e) {
				if (Ut.has(e)) return;
				const t = Ht.get(e);
				if (!t) return;
				Ut.add(e);
				const i = Array.from(t.values()).map(e => e[1].promise);
				await Promise.all(i);
				const s = Array.from(t.keys()),
					n = Math.min(...s.map(e => e.priority));
				s.filter(e => e.priority <= n).map(e => {
					const i = t.get(e)[0];
					e.performAction(i)
				}), t.clear(), Ut.delete(e)
			}
			Ee("vds-gesture", Nt);
			class zt {
				static async load(e) {
					return new Promise((t, i) => {
						this.pendingRequests[e] ? this.pendingRequests[e].push({
							resolve: t,
							reject: i
						}) : (this.pendingRequests[e] = [{
							resolve: t,
							reject: i
						}], async function(e) {
							if (!he(document.querySelector(`script[src="${e}"]`))) return;
							const t = document.createElement("script"),
								i = $e();
							t.src = e, t.onload = i.resolve, t.onerror = i.reject;
							const s = document.getElementsByTagName("script")[0];
							return ue(s.parentNode) || s.parentNode.insertBefore(t, s), i.promise
						}(e).then(() => {
							this.pendingRequests[e].forEach(e => e.resolve()), delete this.pendingRequests[e]
						}).catch(t => {
							this.pendingRequests[e].forEach(e => e.reject(t)), delete this.pendingRequests[e]
						}))
					})
				}
			}
			var Wt;
			zt.pendingRequests = {},
				function(e) {
					e[e.Aborted = 1] = "Aborted", e[e.Network = 2] = "Network", e[e.Decode = 3] = "Decode", e[e.SrcNotSupported = 4] = "SrcNotSupported"
				}(Wt || (Wt = {}));
			const Qt = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
				Kt = /\.(mp4|og[gv]|webm|mov|m4v|avi)($|\?)/i;
			class Yt extends yt {
				constructor() {
					super(...arguments), this.preload = "metadata", this._timeRAF = void 0, this._hasMediaElementConnected = !1, this._mediaElementDisposal = new Ce.a, this._isMediaWaiting = !1, this._ignoreNextAbortEvent = !1, this._ignoreNextEmptiedEvent = !1
				}
				get mediaElement() {
					return this._mediaElement
				}
				disconnectedCallback() {
					this._isMediaWaiting = !1, super.disconnectedCallback(), this._cancelTimeUpdates()
				}
				_cancelTimeUpdates() {
					pe(this._timeRAF) && window.cancelAnimationFrame(this._timeRAF), this._timeRAF = void 0
				}
				_requestTimeUpdates() {
					ce(this._timeRAF) && this._requestTimeUpdate()
				}
				_requestTimeUpdate() {
					var e, t;
					const i = null !== (e = null === (t = this.mediaElement) || void 0 === t ? void 0 : t.currentTime) && void 0 !== e ? e : 0;
					this.state.currentTime !== i && this._updateCurrentTime(i), this._timeRAF = window.requestAnimationFrame(() => {
						ce(this._timeRAF) || this._requestTimeUpdate()
					})
				}
				_updateCurrentTime(e, t) {
					var i, s;
					this.dispatchEvent(je("vds-time-update", {
						detail: {
							currentTime: Math.min(e, null !== (i = null === (s = this.mediaElement) || void 0 === s ? void 0 : s.duration) && void 0 !== i ? i : 0),
							played: this.mediaElement.played
						},
						triggerEvent: t
					}))
				}
				handleDefaultSlotChange() {
					window.requestAnimationFrame(() => {
						const e = function(e, t) {
							var i, s;
							const n = t ? `slot[name="${t}"]` : "slot:not([name])",
								r = null === (i = e.shadowRoot) || void 0 === i ? void 0 : i.querySelector(n),
								o = null !== (s = null == r ? void 0 : r.assignedNodes({
									flatten: !0
								})) && void 0 !== s ? s : [];
							return Array.prototype.filter.call(o, e => e.nodeType == Node.ELEMENT_NODE)
						}(this)[0];
						this._handleMediaElementDisconnect(), this._mediaElement = null != e ? e : void 0, this._handleMediaElementConnect()
					})
				}
				get _canMediaElementConnect() {
					return this.canLoad && !ue(this.mediaElement) && !this._hasMediaElementConnected
				}
				_handleMediaElementConnect() {
					if (!this._canMediaElementConnect) return;
					this.dispatchEvent(je("vds-media-element-connected"));
					const e = this.mediaElement;
					e.hasAttribute("loop") && (this.loop = !0), e.removeAttribute("loop"), Se(e, "controls", this.controls), this._attachMediaEventListeners(), this._observePlaysinline(), this._observeMediaSources(), this._startPreloadingMedia(), this._hasMediaElementConnected = !0, this._disconnectDisposal.add(this._handleMediaElementDisconnect.bind(this))
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
					this.dispatchEvent(je("vds-playsinline-change", {
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
					this.dispatchEvent(je("vds-src-change", {
						detail: e
					}))
				}
				_getMediaSources() {
					var e, t, i;
					const s = [null === (e = this.mediaElement) || void 0 === e ? void 0 : e.src, ...Array.from(null !== (t = null === (i = this.mediaElement) || void 0 === i ? void 0 : i.querySelectorAll("source")) && void 0 !== t ? t : []).map(e => e.src)].filter(Boolean);
					return Array.from(new Set(s))
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
					if (ue(this.mediaElement)) return;
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
					He(e).forEach(t => {
						const i = e[t].bind(this),
							s = Object(Ce.e)(this.mediaElement, t, async e => {
								await i(e)
							});
						this._mediaElementDisposal.add(s)
					})
				}
				_handleAbort(e) {
					this._ignoreNextAbortEvent || (this.dispatchEvent(je("vds-abort", {
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
					this.state.started || this.dispatchEvent(je("vds-can-play-through", {
						triggerEvent: e,
						detail: {
							duration: this.mediaElement.duration
						}
					}))
				}
				_handleLoadStart(e) {
					this._handleCurrentSrcChange(this.mediaElement.currentSrc, e), "" !== this.mediaElement.currentSrc ? this.dispatchEvent(je("vds-load-start", {
						triggerEvent: e,
						detail: this._getMediaMetadata()
					})) : this._handleAbort()
				}
				_handleEmptied(e) {
					this._ignoreNextEmptiedEvent || this.dispatchEvent(je("vds-emptied", {
						triggerEvent: e
					}))
				}
				_handleLoadedData(e) {
					this.dispatchEvent(je("vds-loaded-data", {
						triggerEvent: e
					}))
				}
				_handleLoadedMetadata(e) {
					this.dispatchEvent(je("vds-loaded-metadata", {
						triggerEvent: e,
						detail: this._getMediaMetadata()
					}))
				}
				_determineMediaType(e) {
					this.dispatchEvent(je("vds-media-type-change", {
						detail: this._getMediaType(),
						triggerEvent: e
					}))
				}
				_handlePlay(e) {
					const t = je("vds-play", {
						triggerEvent: e
					});
					t.autoplay = this._attemptingAutoplay, this.dispatchEvent(t)
				}
				_handlePause(e) {
					(1 !== this.mediaElement.readyState || this._isMediaWaiting) && (this._isMediaWaiting = !1, this._cancelTimeUpdates(), this.dispatchEvent(je("vds-pause", {
						triggerEvent: e
					})))
				}
				_handlePlaying(e) {
					this._isMediaWaiting = !1;
					const t = je("vds-playing", {
						triggerEvent: e
					});
					this.dispatchEvent(t), this._requestTimeUpdates()
				}
				_handleDurationChange(e) {
					this.mediaElement.ended && this._updateCurrentTime(this.mediaElement.duration, e), this.dispatchEvent(je("vds-duration-change", {
						detail: this.mediaElement.duration,
						triggerEvent: e
					}))
				}
				_handleProgress(e) {
					this.dispatchEvent(je("vds-progress", {
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
					this.dispatchEvent(je("vds-seeking", {
						detail: this.mediaElement.currentTime,
						triggerEvent: e
					}))
				}
				_handleSeeked(e) {
					const t = je("vds-seeked", {
						detail: this.mediaElement.currentTime,
						triggerEvent: e
					});
					this.dispatchEvent(t);
					const i = this.mediaElement.currentTime;
					if (Math.trunc(i) === Math.trunc(this.mediaElement.duration) && it(this.mediaElement.duration) > it(i) && (this._updateCurrentTime(this.mediaElement.duration, e), !this.mediaElement.ended)) try {
						this.play()
					} catch (s) {}
				}
				_handleStalled(e) {
					this.dispatchEvent(je("vds-stalled", {
						triggerEvent: e
					})), this.mediaElement.readyState < 3 && (this._isMediaWaiting = !0, this.dispatchEvent(je("vds-waiting", {
						triggerEvent: e
					})))
				}
				_handleVolumeChange(e) {
					this.dispatchEvent(je("vds-volume-change", {
						detail: {
							volume: this.mediaElement.volume,
							muted: this.mediaElement.muted
						},
						triggerEvent: e
					}))
				}
				_handleWaiting(e) {
					this.mediaElement.readyState < 3 && (this._isMediaWaiting = !0, this.dispatchEvent(je("vds-waiting", {
						triggerEvent: e
					})))
				}
				_handleSuspend(e) {
					const t = je("vds-suspend", {
						triggerEvent: e
					});
					this.dispatchEvent(t)
				}
				_handleEnded(e) {
					this._cancelTimeUpdates(), this._updateCurrentTime(this.mediaElement.duration, e);
					const t = je("vds-end", {
						triggerEvent: e
					});
					this.dispatchEvent(t), this.state.loop ? this._handleLoop() : this.dispatchEvent(je("vds-ended", {
						triggerEvent: e
					}))
				}
				_handleLoop() {
					ce(this.mediaElement.controls) && (this.mediaElement.controls = !1), this.dispatchEvent(je("vds-loop-request", {
						bubbles: !0,
						composed: !0
					}))
				}
				_handleError(e) {
					const t = this.mediaElement.error;
					t && this.dispatchEvent(je("vds-error", {
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
						const e = je("vds-play-fail");
						throw e.autoplay = this._attemptingAutoplay, e.error = t, t
					}
				}
				async pause() {
					var e;
					return this._throwIfNotReadyForPlayback(), null === (e = this.mediaElement) || void 0 === e ? void 0 : e.pause()
				}
				_getMediaType() {
					return e = this.state.currentSrc, Qt.test(e) ? lt.a.Audio : Kt.test(e) ? lt.a.Video : lt.a.Unknown;
					var e
				}
			}(function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				r > 3 && o && Object.defineProperty(t, i, o)
			})([Object(n.b)({
				reflect: !0
			})], Yt.prototype, "preload", void 0);
			class Gt extends Xe {
				constructor(e, t, i) {
					super(e, t), this._presentationController = i
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
					return this.isSupportedNatively ? super._addFullscreenChangeEventListener(e) : this.isSupportedOnSafari ? Object(Ce.e)(this._host, "vds-video-presentation-change", this._handlePresentationModeChange.bind(this)) : de
				}
				_handlePresentationModeChange(e) {
					this._handleFullscreenChange(e)
				}
				_addFullscreenErrorEventListener(e) {
					return this.isSupportedNatively ? super._addFullscreenErrorEventListener(e) : de
				}
			}

			function Jt(e, t) {
				var i;
				if (t.bubbles && t.composed) return;
				const s = new Pe(t.type, {
					triggerEvent: null !== (i = t.triggerEvent) && void 0 !== i ? i : t,
					detail: t.detail,
					bubbles: t.bubbles,
					cancelable: t.cancelable,
					composed: t.composed
				});
				e.dispatchEvent(s)
			}
			class Xt {
				constructor(e) {
					this._host = e, this._listenerDisposal = new Ce.a;
					const t = e.firstUpdated;
					e.firstUpdated = i => {
						null == t || t.call(e, i), this._listenerDisposal.add(Object(Ce.e)(e, "vds-media-element-connected", () => {
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
					return ge(null === (e = this._host.videoElement) || void 0 === e ? void 0 : e.webkitSetPresentationMode)
				}
				setPresentationMode(e) {
					var t, i;
					null === (t = this._host.videoElement) || void 0 === t || null === (i = t.webkitSetPresentationMode) || void 0 === i || i.call(t, e)
				}
				_addPresentationModeChangeEventListener() {
					return !this.isSupported || ue(this._host.videoElement) ? de : Object(Ce.e)(this._host.videoElement, "webkitpresentationmodechanged", this._handlePresentationModeChange.bind(this))
				}
				_handlePresentationModeChange(e) {
					Jt(this._host, e), this._host.dispatchEvent(je("vds-video-presentation-change", {
						detail: this.presentationMode,
						triggerEvent: e
					}))
				}
			}
			class Zt extends Yt {
				constructor() {
					super(...arguments), this.resolution = void 0, this.presentationController = new Xt(this), this.fullscreenController = new Gt(this, this.screenOrientationController, this.presentationController)
				}
				static get styles() {
					return [s.b`
        :host {
          display: inline-block;
          background-color: var(--vds-video-bg-color, transparent);
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
				get isHlsStream() {
					return !1
				}
				changeSrc(e, t, i) {
					this.dispatchEvent(je("vds-video-src-change", {
						detail: {
							src: e,
							timestamp: t,
							userQualityChange: i
						}
					}))
				}
				connectedCallback() {
					super.connectedCallback(), this.dispatchEvent(je("vds-view-type-change", {
						detail: at.Video
					}))
				}
				get videoElement() {
					return this.mediaElement
				}
			}(function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				r > 3 && o && Object.defineProperty(t, i, o)
			})([Object(n.b)()], Zt.prototype, "resolution", void 0);
			const ei = new Map;

			function ti(e) {
				return e.replace("vds-", "").replace(/-./g, e => e[1].toUpperCase())
			}
			const ii = "vds-hls-",
				si = ["lib-load", "instance", "unsupported"];

			function ni(e) {
				return e.startsWith(ii) && !si.some(t => e.startsWith(`${ii}${t}`))
			}
			var ri = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			const oi = /\.(m3u8)($|\?)/i,
				ai = (new Set(["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"]), "https://cdn.jsdelivr.net/npm/hls.js@^1.0.0/dist/hls.light.min.js");
			class li extends Zt {
				constructor() {
					super(), this._isHlsEngineAttached = !1, this.hlsConfig = {}, this._loadingUserLevel = !1, this.hlsLibrary = ai, this._currentHlsSrc = "", this._hlsEventListeners = [], Object.defineProperty(this, "hls-config", {
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
					super.update(e), e.has("hlsLibrary") && we() && this._preconnectToHlsLibDownload()
				}
				disconnectedCallback() {
					this._destroyHlsEngine(), super.disconnectedCallback()
				}
				get isHlsSupported() {
					var e, t;
					return null !== (e = null === (t = this.Hls) || void 0 === t ? void 0 : t.isSupported()) && void 0 !== e ? e : we()
				}
				get isHlsStream() {
					return this.state.src.some(e => oi.test(e))
				}
				_preconnectToHlsLibDownload() {
					var e;
					this.canLoad || !ve(this.hlsLibrary) || (e = this.hlsLibrary, ei.has(e)) || function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "preconnect";
						if (!(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : me)) return !1;
						if (!he(document.querySelector(`link[href="${e}"]`))) return !0;
						const i = document.createElement("link");
						i.rel = t, i.href = e, i.crossOrigin = "true", document.head.append(i)
					}(this.hlsLibrary)
				}
				async _buildHlsEngine() {
					var e, t;
					let i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					if (ue(this.videoElement) && !i && !ce(this.hlsEngine)) return;
					ce(this.hlsEngine) || this._destroyHlsEngine();
					const s = {
						onLoadStart: () => {
							this.dispatchEvent(je("vds-hls-lib-load-start"))
						},
						onLoaded: e => {
							this.dispatchEvent(je("vds-hls-lib-loaded", {
								detail: e
							}))
						},
						onLoadError: e => {
							this.dispatchEvent(je("vds-hls-lib-load-error", {
								detail: e
							})), this.dispatchEvent(je("vds-error", {
								detail: {
									message: e.message,
									code: Wt.SrcNotSupported
								}
							}))
						}
					};
					if (this._Hls = await async function(e) {
							var t;
							let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							if (ve(e)) {
								if (ei.has(e)) return ei.get(e);
								null === (t = i.onLoadStart) || void 0 === t || t.call(i);
								try {
									var s;
									if (await zt.load(e), !ge(window.Hls)) throw Error("[vds]: Failed loading `hls.js`. Could not find a valid constructor at `window.Hls`.");
									const t = window.Hls;
									return null === (s = i.onLoaded) || void 0 === s || s.call(i, t), ei.set(e, t), t
								} catch (r) {
									var n;
									null === (n = i.onLoadError) || void 0 === n || n.call(i, r)
								}
							}
						}(this.hlsLibrary, s), ce(this._Hls) && !ve(this.hlsLibrary) && (this._Hls = await async function(e) {
							var t;
							let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							if (ce(e)) return;
							var s;
							if (null === (t = i.onLoadStart) || void 0 === t || t.call(i), !ge(e)) return null === (s = i.onLoaded) || void 0 === s || s.call(i, e), e;
							const n = String(e);
							if (ei.has(n)) {
								var r;
								const e = ei.get(n);
								return null === (r = i.onLoaded) || void 0 === r || r.call(i, e), e
							}
							try {
								var o;
								const t = null === (o = await e()) || void 0 === o ? void 0 : o.default;
								if (!t || !t.isSupported) throw Error("[vds]: Failed importing `hls.js`. Dynamic import returned invalid constructor.");
								var a;
								return null === (a = i.onLoaded) || void 0 === a || a.call(i, t), ei.set(n, t), t
							} catch (d) {
								var l;
								null === (l = i.onLoadError) || void 0 === l || l.call(i, d)
							}
						}(this.hlsLibrary, s)), this.Hls) {
						if (null === (e = this.Hls) || void 0 === e || null === (t = e.isSupported) || void 0 === t || !t.call(e)) {
							const e = "[vds]: `hls.js` is not supported in this environment";
							return this.dispatchEvent(je("vds-hls-unsupported")), void this.dispatchEvent(je("vds-error", {
								detail: {
									message: e,
									code: Wt.SrcNotSupported
								}
							}))
						}
						this._hlsEngine = new this.Hls(this.hlsConfig), this.dispatchEvent(je("vds-hls-instance", {
							detail: this.hlsEngine
						})), this._listenToHlsEngine()
					}
				}
				_destroyHlsEngine() {
					var e;
					null === (e = this.hlsEngine) || void 0 === e || e.destroy(), this._currentHlsSrc = "", this._hlsEngine = void 0, this._isHlsEngineAttached = !1
				}
				_attachHlsEngine() {
					this.isHlsEngineAttached || ce(this.hlsEngine) || ue(this.videoElement) || (this.hlsEngine.attachMedia(this.videoElement), this._isHlsEngineAttached = !0)
				}
				_detachHlsEngine() {
					var e;
					this.isHlsEngineAttached && (null === (e = this.hlsEngine) || void 0 === e || e.detachMedia(), this._isHlsEngineAttached = !1, this._currentHlsSrc = "")
				}
				_loadSrcOnHlsEngine(e) {
					!ue(this.hlsEngine) && this.isHlsStream && e !== this._currentHlsSrc && (this.hlsEngine.loadSource(e), this._currentHlsSrc = e)
				}
				_getMediaType() {
					return this.state.mediaType === lt.a.LiveVideo ? lt.a.LiveVideo : this.isHlsStream ? lt.a.Video : super._getMediaType()
				}
				_handleSrcChange(e) {
					this._currentHlsSrc.length > 0 && !e.includes(this._currentHlsSrc) && e.push(this._currentHlsSrc), super._handleSrcChange(e)
				}
				_handleAbort(e) {
					if (this.isHlsSupported)
						for (const t of this.state.src)
							if (oi.test(t)) return void this._handleHlsSrcChange(t);
					super._handleAbort(e)
				}
				async _handleHlsSrcChange(e) {
					this._currentHlsSrc !== e && this.hasUpdated && this.canLoad && (this.isHlsStream ? ue(this.hlsLibrary) || (ce(this.hlsEngine) && await this._buildHlsEngine(), this._attachHlsEngine(), this._loadSrcOnHlsEngine(e)) : this._detachHlsEngine())
				}
				_handleLoadedMetadata(e) {
					super._handleLoadedMetadata(e), this._handleMediaReady({
						event: e,
						duration: this.mediaElement.duration
					})
				}
				_handleError(e) {
					var t;
					const i = null === (t = this.mediaElement) || void 0 === t ? void 0 : t.error;
					4 === (null == i ? void 0 : i.code) || super._handleError(e)
				}
				_listenToHlsEngine() {
					ce(this.hlsEngine) || ce(this.Hls) || (this.hlsEngine.on(this.Hls.Events.LEVEL_LOADED, this._handleHlsLevelLoaded.bind(this)), this._hlsEventListeners.forEach(e => {
						var t;
						let {
							type: i,
							listener: s,
							options: n
						} = e;
						null === (t = this.hlsEngine) || void 0 === t || t[null != n && n.once ? "once" : "on"](i, s, null == n ? void 0 : n.context)
					}), this.hlsEngine.on(this.Hls.Events.ERROR, this._handleHlsError.bind(this)))
				}
				_handleHlsError(e, t) {
					var i, s;
					if (ce(this.Hls)) return;
					const n = null === (i = this.currentHlsSrc) || void 0 === i ? void 0 : i.split("?")[0],
						r = window.Sentry;
					if (t.fatal) switch (t.type) {
						case "networkError":
							null == r || r.captureMessage(`shreddit-player network error for src ${n}. [${t.details}]`), this._handleHlsNetworkError();
							break;
						case "mediaError":
							"audioTrackLoadError" === t.details ? (this.hlsEngine.audioTrack = 0, null == r || r.captureMessage(`shreddit-player media error: audioTrackLoadError for src ${n}`)) : (this._handleHlsMediaError(), null == r || r.captureMessage(`shreddit-player media error for src ${n}. [${t.details}]`));
							break;
						default:
							null == r || r.captureMessage(`shreddit-player irrecoverable error for src ${n}. [${t.details}]`), this._handleHlsIrrecoverableError()
					} else if ("bufferStalledError" === t.details) {
						var o;
						null == r || r.captureMessage(`shreddit-player buffer stalled error for src ${n}. [${t.details}]`), null === (o = this.hlsEngine) || void 0 === o || o.startLoad()
					} else 403 === (null === (s = t.networkDetails) || void 0 === s ? void 0 : s.status) && (this._handleHlsIrrecoverableError(), null == r || r.captureMessage(`shreddit-player removed src ${n}. [${t.details}]`), this.dispatchEvent(je("vds-error", {
						detail: {
							code: 2,
							message: "Media unavailable"
						}
					})))
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
						live: i,
						totalduration: s
					} = t.details, n = new Pe(e, {
						detail: t
					}), r = i ? lt.a.LiveVideo : lt.a.Video;
					this.state.mediaType !== r && this.dispatchEvent(je("vds-media-type-change", {
						detail: r,
						triggerEvent: n
					})), this.state.duration !== s && this.dispatchEvent(je("vds-duration-change", {
						detail: s,
						triggerEvent: n
					}))
				}
				addEventListener(e, t, i) {
					if (!ni(e)) return super.addEventListener(e, t, i); {
						const n = ti(e);
						var s;
						this._hlsEventListeners.some(e => e.type === n && e.listener === t) || (this._hlsEventListeners.push({
							type: n,
							listener: t,
							options: i
						}), null === (s = this.hlsEngine) || void 0 === s || s[null != i && i.once ? "once" : "on"](n, t, null == i ? void 0 : i.context))
					}
				}
				removeEventListener(e, t, i) {
					if (ni(e)) {
						var s;
						const n = ti(e);
						return this._hlsEventListeners = this._hlsEventListeners.filter(e => e.type === n && e.listener === t), void(null === (s = this.hlsEngine) || void 0 === s || s.off(n, t, null == i ? void 0 : i.context, null == i ? void 0 : i.once))
					}
					return super.removeEventListener(e, t, i)
				}
			}
			ri([Object(n.b)({
				type: Object,
				attribute: "hls-config"
			})], li.prototype, "hlsConfig", void 0), ri([Object(n.b)({
				type: Boolean,
				attribute: !1
			})], li.prototype, "_loadingUserLevel", void 0), Ee("vds-hls", li);
			class di {
				constructor(e) {
					this._host = e, this._connectedQueue = Ye(this._host)
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
						const i = je(e, {
							...t,
							bubbles: !0,
							composed: !0
						});
						this._host.dispatchEvent(i)
					})
				}
			}
			class hi {
				constructor(e) {
					this._host = e;
					const t = new Ce.a;
					let i = !1;
					t.add(Object(Ce.e)(document, "pointerdown", () => {
						i = !1
					})), Object(Mt.a)(e, "keydown", e => {
						e.metaKey || e.altKey || e.ctrlKey || (i = !0)
					}), Object(Mt.a)(e, "focus", () => {
						i && e.classList.add("focus-visible")
					}), Object(Mt.a)(e, "blur", () => {
						e.classList.remove("focus-visible")
					}), e.addController({
						hostDisconnected: () => {
							t.empty()
						}
					})
				}
			}

			function ci(e) {
				return new hi(e)
			}

			function ui(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.type.startsWith("key")) && void 0 !== t && t
			}
			const pi = s.b`
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
			var vi = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			class gi extends s.a {
				constructor() {
					super(), this.pressed = !1, this.disabled = !1, this._handleButtonClickCapture = Object(Mt.a)(this, "click", e => {
						this.disabled && (e.preventDefault(), e.stopImmediatePropagation())
					}, {
						capture: !0
					}), ci(this), ["pointerup", "keydown"].forEach(e => {
						Object(Mt.a)(this, e, e => {
							this.disabled || ui(e) && ! function(e) {
								return ui(e) && ("Enter" === e.key || " " === e.key)
							}(e) || this._handleButtonClick(e)
						})
					})
				}
				static get styles() {
					return [pi]
				}
				static get parts() {
					return []
				}
				connectedCallback() {
					super.connectedCallback(), ke(this, "tabindex", "0"), ke(this, "role", "button"), this._updateAriaPressedAttr()
				}
				updated(e) {
					e.has("pressed") && this._updateAriaPressedAttr()
				}
				_updateAriaPressedAttr() {
					Se(this, "aria-pressed", this.pressed ? "true" : "false")
				}
				render() {
					return this._renderDefaultSlot()
				}
				_renderDefaultSlot() {
					return s.c`<slot></slot>`
				}
				_handleButtonClick(e) {
					this.pressed = !this.pressed
				}
			}
			vi([Object(n.b)({
				type: Boolean
			})], gi.prototype, "pressed", void 0), vi([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], gi.prototype, "disabled", void 0);
			class _i extends gi {
				constructor() {
					super(), this._mediaRemote = new di(this), _t(this, "fullscreen", e => {
						this.pressed = e, Se(this, "fullscreen", e)
					}), _t(this, "canFullscreen", e => {
						Se(this, "hidden", !e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), ke(this, "aria-label", "Fullscreen")
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.exitFullscreen(this.fullscreenTarget, e) : this._mediaRemote.enterFullscreen(this.fullscreenTarget, e))
				}
			}(function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				r > 3 && o && Object.defineProperty(t, i, o)
			})([Object(n.b)({
				attribute: "fullscreen-target"
			})], _i.prototype, "fullscreenTarget", void 0), Ee("vds-fullscreen-button", _i);
			class mi extends gi {
				constructor() {
					super(), this._mediaRemote = new di(this), this._volume = 1, this._muted = !1, this.disabled = !1, _t(this, "volume", e => {
						this._volume = e, this._handleMutedChange()
					}), _t(this, "muted", e => {
						this._muted = e, this._handleMutedChange()
					})
				}
				connectedCallback() {
					super.connectedCallback(), ke(this, "aria-label", "Mute")
				}
				_handleMutedChange() {
					const e = this._muted || 0 === this._volume;
					this.pressed = e, Se(this, "muted", e)
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.unmute(e) : this._mediaRemote.mute(e))
				}
			}(function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				r > 3 && o && Object.defineProperty(t, i, o)
			})([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], mi.prototype, "disabled", void 0), Ee("vds-mute-button", mi);
			Ee("vds-play-button", class extends gi {
				constructor() {
					super(), this._mediaRemote = new di(this), _t(this, "paused", e => {
						this.pressed = !e, Se(this, "paused", e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), ke(this, "aria-label", "Play")
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.pause(e) : this._mediaRemote.play(e))
				}
			});
			var bi = i("./node_modules/@reddit/shreddit.styles/dist/index.js");
			const yi = s.b`
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
`,
				fi = "@reddit/shreddit-player-media-quality";

			function wi(e) {
				return e >= 1080 ? 1080 : e >= 720 ? 720 : e >= 540 ? 540 : e >= 480 ? 480 : e >= 360 ? 360 : e >= 240 ? 240 : 144
			}

			function Ei() {
				return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).sort((e, t) => e.quality > t.quality ? -1 : 1)
			}

			function Si(e, t) {
				for (let i = 0; i < t.length; i++)
					if (e >= t[i].quality) return i;
				return t.length - 1
			}
			const {
				svg: ki
			} = I();
			var Oi = B(ki`<path d="M7.5 15.958a1.102 1.102 0 01-.778-.322l-5.429-5.429 1.414-1.414L7.5 13.586 17.793 3.293l1.414 1.414L8.278 15.636a1.101 1.101 0 01-.778.322z"></path>`, "0 0 20 20", "checkmark-fill");
			const {
				svg: Ci
			} = I();
			var Pi, ji = B(Ci`<g clip-path="url(#clip0_473_76)"><path d="M19.921 8.8a1.145 1.145 0 00-1.137-.991h-1.073a.98.98 0 01-.887-.649A.969.969 0 0117 6.1l.754-.754a1.15 1.15 0 00.1-1.522 10.16 10.16 0 00-1.671-1.671 1.152 1.152 0 00-1.522.1L13.905 3a.975.975 0 01-1.09.167.97.97 0 01-.628-.878V1.216A1.144 1.144 0 0011.2.079a9.129 9.129 0 00-2.4 0 1.145 1.145 0 00-.991 1.137v1.073a.98.98 0 01-.649.887A.966.966 0 016.1 3l-.754-.754a1.152 1.152 0 00-1.522-.1 10.16 10.16 0 00-1.676 1.673 1.15 1.15 0 00.1 1.522L3 6.1a.979.979 0 01.167 1.09.97.97 0 01-.878.627H1.216A1.145 1.145 0 00.079 8.8a9.1 9.1 0 000 2.393 1.145 1.145 0 001.137.991h1.073a.98.98 0 01.887.649A.97.97 0 013 13.906l-.751.752a1.149 1.149 0 00-.1 1.523c.49.62 1.05 1.18 1.671 1.671a1.148 1.148 0 001.521-.1L6.1 17a.98.98 0 011.09-.167.97.97 0 01.627.878v1.073a1.145 1.145 0 00.983 1.137 9.103 9.103 0 002.393 0 1.144 1.144 0 00.99-1.137v-1.073a.981.981 0 01.65-.887.968.968 0 011.073.176l.753.753a1.149 1.149 0 001.522.1c.62-.49 1.18-1.05 1.671-1.671a1.149 1.149 0 00-.1-1.521L17 13.905a1.04 1.04 0 01.711-1.717h1.073a1.145 1.145 0 001.137-.992 9.096 9.096 0 000-2.392V8.8zM11.979 10a1.98 1.98 0 11-3.958 0 1.98 1.98 0 013.958 0z"></path></g><defs ><clipPath id="clip0_473_76"><path d="M0 0h20v20H0z"></path></clipPath></defs>`, "0 0 20 20", "settings-fill"),
				Mi = function(e, t, i, s) {
					var n, r = arguments.length,
						o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
					if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
					else
						for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
					return r > 3 && o && Object.defineProperty(t, i, o), o
				};
			class Ai extends s.a {
				constructor() {
					super(...arguments), this.showAutoplayToggle = !1, this.showOptions = !1, this.selectedLevel = -1, this.qualityLevels = []
				}
				static get styles() {
					return [bi.a, yi]
				}
				connectedCallback() {
					if (super.connectedCallback(), ke(this, "aria-label", "Quality level"), this.isStreaming) this.qualityLevels = function(e) {
						const t = [];
						return ((null == e ? void 0 : e.levels) || []).forEach((e, i) => {
							const s = wi(null == e ? void 0 : e.height);
							s && -1 === t.map(e => e.quality).indexOf(s) && t.push({
								hlsLevelIndex: i,
								quality: s
							})
						}), Ei(t)
					}(this.hlsEngine), this.selectedLevel = function(e, t) {
						const i = parseInt(Ie.getItem(fi) || "");
						if (i) {
							var s;
							const n = null === (s = e.filter(e => e.quality === i)[0]) || void 0 === s ? void 0 : s.hlsLevelIndex;
							if (!ce(n)) return t.startLevel = n, t.loadLevel = n, n
						}
						return t.startLevel = -1, -1
					}(this.qualityLevels, this.hlsEngine);
					else if (this.mp4Sources) {
						var e, t, i, s;
						this.qualityLevels = function(e) {
							const t = [];
							return (e || []).forEach((e, i) => {
								const s = wi(e.source.dimensions.height);
								s && -1 === t.map(e => e.quality).indexOf(s) && t.push({
									mp4SourceIndex: i,
									quality: s
								})
							}), Ei(t)
						}(this.mp4Sources), this.selectedLevel = function(e) {
							const t = parseInt(Ie.getItem(fi) || "");
							if (t) {
								var i;
								const s = null === (i = e.filter(e => e.quality === t)[0]) || void 0 === i ? void 0 : i.mp4SourceIndex;
								if (!ce(s)) return s
							}
							return -1
						}(this.qualityLevels);
						let n = this.selectedLevel; - 1 === n && (n = this.defaultMp4Level);
						const r = null === (e = this.mp4Sources[n]) || void 0 === e ? void 0 : e.source.url,
							o = null === (t = this.mp4Sources[n]) || void 0 === t ? void 0 : null === (i = t.source) || void 0 === i ? void 0 : null === (s = i.dimensions) || void 0 === s ? void 0 : s.height;
						this.provider.changeSrc(r, 0, !1), this.provider.resolution = o
					}
				}
				get defaultMp4Level() {
					var e, t, i, s, n;
					let r = 0;
					const o = (null === (e = navigator) || void 0 === e ? void 0 : e.connection) || (null === (t = navigator) || void 0 === t ? void 0 : t.mozConnection) || (null === (i = navigator) || void 0 === i ? void 0 : i.webkitConnection),
						a = null == o ? void 0 : o.effectiveType,
						l = null !== (s = null == o ? void 0 : o.downlink) && void 0 !== s ? s : 0;
					return r = "4g" === a || l > 1 ? 0 : Si("3g" === a ? 540 : "2g" === a ? 360 : "slow-2g" === a ? 144 : 540, this.qualityLevels), null !== (n = this.qualityLevels[r].mp4SourceIndex) && void 0 !== n ? n : 0
				}
				toggleOptions() {
					this.showOptions = !this.showOptions
				}
				handleOptionSelection(e, t) {
					let i;
					if (e.stopPropagation(), this.isStreaming) {
						var s;
						i = null !== (s = null == t ? void 0 : t.hlsLevelIndex) && void 0 !== s ? s : -1, this.dispatchEvent(je("vds-hls-manual-level-change", {
							bubbles: !0,
							composed: !0,
							detail: i
						}))
					} else {
						var n, r, o, a, l, d;
						const e = -1 === (i = null !== (n = null == t ? void 0 : t.mp4SourceIndex) && void 0 !== n ? n : -1) ? this.defaultMp4Level : i,
							s = null === (r = this.mp4Sources[e]) || void 0 === r ? void 0 : r.source.url,
							h = null !== (o = this.provider.currentTime) && void 0 !== o ? o : 0,
							c = null === (a = this.mp4Sources[e]) || void 0 === a ? void 0 : null === (l = a.source) || void 0 === l ? void 0 : null === (d = l.dimensions) || void 0 === d ? void 0 : d.height;
						this.provider.changeSrc(s, h, !0), this.provider.resolution = c
					}
					var h;
					ce(h = null == t ? void 0 : t.quality) ? Ie.removeItem(fi) : Ie.setItem(fi, h.toString()), this.selectedLevel = i
				}
				renderCheckmark(e) {
					return s.c`
      <span class="pr-2xs icon-checkmark">
        ${e?Oi({size:E.a.ExtraSmall}):""}
      </span>
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
					if (this.hideQualitySwitcher) return null;
					const t = !0 === this.autoplayPref,
						i = -1 === this.selectedLevel,
						n = e => this.selectedLevel === (this.isStreaming ? e.hlsLevelIndex : e.mp4SourceIndex);
					return s.c`
      <vds-toggle-button
        class="control settings-control block visible cursor-pointer ease duration-150"
        @click="${this.toggleOptions}"
      >
        ${ji({attributes:{className:"absolute top-0 bottom-0 left-0 right-0 m-auto"}})}
      </vds-toggle-button>
      <div
        class="popup-element flex flex-col border-r-md z-10 absolute left-1/2 -translate-x-1/2 ${this.showOptions?"opacity-100":"opacity-0 pointer-events-none"}"
      >
        ${this.showAutoplayToggle?s.c`
              <button
                class="px-sm py-xs flex justify-center border-none cursor-pointer ${t?"active":""}"
                @click="${this.changeAutoplayPref}"
                data-testid="autoplay-toggle"
              >
                ${this.renderCheckmark(t)}
                <span>
                  ${Object(a.b)("Autoplay",{desc:"Button: Toggle whether media should autoplay"})}</span
                >
              </button>
              <div class="separator opacity-50 mx-auto"></div>
            `:""}
        ${null===(e=this.qualityLevels)||void 0===e?void 0:e.map(e=>e?s.c`
                <button
                  class="px-sm py-xs flex justify-center border-none cursor-pointer ${n(e)?"active":""}"
                  @click="${t=>this.handleOptionSelection(t,e)}"
                >
                  ${this.renderCheckmark(n(e))}
                  <span>${e.quality}p</span>
                </button>
              `:"")}
        <button
          class="px-sm py-xs flex justify-center border-none cursor-pointer ${i?"active":""}"
          @click="${e=>this.handleOptionSelection(e)}"
        >
          ${this.renderCheckmark(i)}
          <span>
            ${Object(a.b)("Auto",{desc:"Button: Automatic quality option"})}</span
          >
        </button>
      </div>
    `
				}
			}

			function xi(e, t) {
				const i = String(e),
					s = i.length;
				if (s < t) {
					return `${"0".repeat(t-s)}${e}`
				}
				return i
			}

			function Li(e) {
				const t = Math.trunc(e / 3600),
					i = Math.trunc(e % 3600 / 60),
					s = Math.trunc(e % 60),
					n = Number((e - Math.trunc(e)).toPrecision(3));
				return {
					[Pi.Hours]: t,
					[Pi.Minutes]: i,
					[Pi.Seconds]: s,
					[Pi.Fraction]: n
				}
			}

			function Ri(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const {
					hours: s,
					minutes: n,
					seconds: r
				} = Li(e), o = t ? xi(s, 2) : s, a = xi(n, 2), l = xi(r, 2);
				return s > 0 || i ? `${o}:${a}:${l}` : `${n}:${l}`
			}

			function Ti(e) {
				const t = [],
					{
						hours: i,
						minutes: s,
						seconds: n
					} = Li(e),
					r = (e, t) => 1 === e ? t : `${t}s`;
				return i > 0 && t.push(`${i} ${r(i,"hour")}`), s > 0 && t.push(`${s} ${r(s,"minute")}`), (n > 0 || 0 === t.length) && t.push(`${n} ${r(n,"second")}`), t.join(", ")
			}
			Mi([Object(n.b)({
					attribute: !1
				})], Ai.prototype, "isStreaming", void 0), Mi([Object(n.b)({
					attribute: !1
				})], Ai.prototype, "provider", void 0), Mi([Object(n.b)({
					attribute: !1
				})], Ai.prototype, "hlsEngine", void 0), Mi([Object(n.b)({
					attribute: !1
				})], Ai.prototype, "mp4Sources", void 0), Mi([Object(n.b)({
					attribute: !1
				})], Ai.prototype, "showAutoplayToggle", void 0), Mi([Object(n.b)({
					attribute: !1
				})], Ai.prototype, "autoplayPref", void 0), Mi([Object(n.b)({
					attribute: !1
				})], Ai.prototype, "hideQualitySwitcher", void 0), Mi([Object(n.d)()], Ai.prototype, "showOptions", void 0), Mi([Object(n.d)()], Ai.prototype, "selectedLevel", void 0), Mi([Object(n.d)()], Ai.prototype, "qualityLevels", void 0), Ee("vds-quality-switcher", Ai),
				function(e) {
					e.Hours = "hours", e.Minutes = "minutes", e.Seconds = "seconds", e.Fraction = "fraction"
				}(Pi || (Pi = {}));
			var qi = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			class Vi extends s.a {
				constructor() {
					super(...arguments), this._disposal = new Ce.a, this._mediaStoreConsumer = gt.consume(this), this.__seconds = 0, this.type = "current", this.showHours = !1, this.padHours = !1, this.remainder = !1
				}
				static get styles() {
					return [s.b`
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
					return s.c`${this._getFormattedTime()}`
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
					return Be([e, this._mediaStore.duration], e => {
						let [t, i] = e;
						return Math.max(0, i - t)
					})
				}
				_getFormattedTime() {
					return Ri(this.__seconds, this.padHours, this.showHours)
				}
			}

			function Ii(e) {
				let t;
				const i = () => !ce(t);

				function s() {
					for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];
					i() || (t = window.requestAnimationFrame(() => {
						e.apply(this, n), t = void 0
					}))
				}
				return s.cancel = () => {
					ce(t) || (window.cancelAnimationFrame(t), t = void 0)
				}, s.pending = i, s
			}
			qi([Object(n.d)()], Vi.prototype, "__seconds", void 0), qi([Object(n.b)()], Vi.prototype, "type", void 0), qi([Object(n.b)({
				attribute: "show-hours",
				type: Boolean
			})], Vi.prototype, "showHours", void 0), qi([Object(n.b)({
				attribute: "pad-hours",
				type: Boolean
			})], Vi.prototype, "padHours", void 0), qi([Object(n.b)({
				type: Boolean
			})], Vi.prototype, "remainder", void 0), Ee("vds-time", Vi);
			const $i = ot((function() {
					const e = Ue(!1),
						t = Ue(!1);
					return {
						value: Ue(50),
						pointerValue: Ue(0),
						min: Ue(0),
						max: Ue(100),
						dragging: e,
						pointing: t,
						interactive: Be([e, t], e => {
							let [t, i] = e;
							return t || i
						})
					}
				})),
				Di = s.b`
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
			var Fi, Hi, Ni = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			! function(e) {
				e[e.Left = -1] = "Left", e[e.ArrowLeft = -1] = "ArrowLeft", e[e.Up = -1] = "Up", e[e.ArrowUp = -1] = "ArrowUp", e[e.Right = 1] = "Right", e[e.ArrowRight = 1] = "ArrowRight", e[e.Down = 1] = "Down", e[e.ArrowDown = 1] = "ArrowDown"
			}(Fi || (Fi = {})),
			function(e) {
				e.Horizontal = "horizontal", e.Vertical = "vertical"
			}(Hi || (Hi = {}));
			class Ui extends s.a {
				constructor() {
					super(), this._sliderStoreProvider = $i.provide(this), this.disabled = !1, this.value = 50, this._step = 1, this.direction = Hi.Horizontal, this._keyboardStep = 1, this.shiftKeyMultiplier = 5, this.customValueText = !1, this._mediaRemote = new di(this), this._disconnectDisposal = new Ce.a, this._handlePointerEnter = Object(Mt.a)(this, "pointerenter", () => {
						this.disabled || (this.setAttribute("pointing", ""), this.store.pointing.set(!0))
					}), this._handlePointerMove = Object(Mt.a)(this, "pointermove", e => {
						if (this.disabled || this.isDragging) return;
						const t = this._getValueBasedOnThumbPosition(e);
						this.store.pointerValue.set(t), this._dispatchPointerValueChange(e)
					}), this._handlePointerLeave = Object(Mt.a)(this, "pointerleave", () => {
						this.disabled || (this.removeAttribute("pointing"), this.store.pointing.set(!1))
					}), this._handlePointerDown = Object(Mt.a)(this, "pointerdown", e => {
						this.disabled || (this._startDragging(e), this._onDrag(e))
					}), this._handleKeydown = Object(Mt.a)(this, "keydown", e => {
						if (this.disabled) return;
						const {
							key: t,
							shiftKey: i
						} = e;
						if (!Object.keys(Fi).includes(t)) return;
						const s = (i ? this.keyboardStep * this.shiftKeyMultiplier : this.keyboardStep) * Number(Fi[t]),
							n = (this.value + s) / this.step,
							r = this.step * n;
						this.value = this._getClampedValue(r), this._dispatchValueChange(e)
					}), this._handleFillValueChange = Object(Mt.a)(this, "vds-slider-value-change", this._updateFillCSSProps.bind(this)), this._handlePointerValueChange = Object(Mt.a)(this, "vds-slider-pointer-value-change", this._updatePointerCSSProps.bind(this)), this._onDrag = Ii(e => {
						if (this.disabled || !this.isDragging) return;
						const t = this._getValueBasedOnThumbPosition(e);
						this.store.pointerValue.set(t), this._dispatchPointerValueChange(e)
					}), this._handleDocumentPointerUp = Object(Mt.a)(this, "pointerup", e => {
						!this.disabled && this.isDragging && this._stopDragging(e)
					}, {
						target: document
					}), this._handleDocumentTouchMove = Object(Mt.a)(this, "touchmove", e => {
						!this.disabled && this.isDragging && e.preventDefault()
					}, {
						target: document,
						passive: !1
					}), this._handleDocumentPointerMove = Object(Mt.a)(this, "pointermove", e => {
						!this.disabled && this.isDragging && this._onDrag(e)
					}, {
						target: document
					}), this._lastDispatchedValue = this.value, this._dispatchValueChange = Ii(e => {
						this.value !== this._lastDispatchedValue && (this.dispatchEvent(je("vds-slider-value-change", {
							detail: this.value,
							triggerEvent: e
						})), this._lastDispatchedValue = this.value)
					}), this._lastDispatchedPointerValue = this.pointerValue, this._dispatchPointerValueChange = Ii(e => {
						if (this.pointerValue === this._lastDispatchedPointerValue) return;
						["vds-slider-pointer-value-change", this.isDragging && "vds-slider-drag-value-change"].forEach(t => {
							t && this.dispatchEvent(je(t, {
								detail: this.pointerValue,
								triggerEvent: e
							}))
						}), this._lastDispatchedPointerValue = this.pointerValue
					}), ci(this)
				}
				static get styles() {
					return [Di]
				}
				static get parts() {
					return []
				}
				get store() {
					return this._sliderStoreProvider.value
				}
				get min() {
					return ze(this.store.min)
				}
				set min(e) {
					this.store.min.set(e)
				}
				get max() {
					return ze(this.store.max)
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
					return ze(this.store.dragging)
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
					return ze(this.store.pointerValue)
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
						Se(this, "interactive", e)
					}))
				}
				willUpdate(e) {
					(e.has("value") || e.has("min") || e.has("max")) && (this.value = this._getClampedValue(this.value), this.store.value.set(this.value), this._updateFillCSSProps(), this._dispatchValueChange()), e.has("disabled") && this.disabled && (this.store.dragging.set(!1), this.store.pointing.set(!1), this.removeAttribute("dragging"), this.removeAttribute("pointing"), this.removeAttribute("interactive"), Se(this, "aria-disabled", this.disabled)), this.customValueText || this._updateAriaValueAttrs(), super.willUpdate(e)
				}
				disconnectedCallback() {
					this._onDrag.cancel(), this._disconnectDisposal.empty(), super.disconnectedCallback()
				}
				_updateFillCSSProps() {
					Oe(this, "fill-value", `${this.value}`), Oe(this, "fill-rate", `${this.fillRate}`), Oe(this, "fill-percent", `${this.fillPercent}%`)
				}
				_updatePointerCSSProps() {
					Oe(this, "pointer-value", `${this.pointerValue}`), Oe(this, "pointer-rate", `${this.pointerRate}`), Oe(this, "pointer-percent", `${this.pointerPercent}%`)
				}
				render() {
					return this._renderSlider()
				}
				_renderSlider() {
					return s.c`${this._renderDefaultSlot()}`
				}
				_renderDefaultSlot() {
					return s.c`<slot></slot>`
				}
				_setupAriaAttrs() {
					ke(this, "role", "slider"), ke(this, "tabindex", "0"), ke(this, "aria-orientation", this.direction === Hi.Vertical ? "vertical" : "horizontal"), ke(this, "autocomplete", "off")
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
					return `${et(this.value/this.max*100,2)}%`
				}
				_startDragging(e) {
					if (this.isDragging) return;
					this.store.dragging.set(!0), this.setAttribute("dragging", "");
					const t = this._getValueBasedOnThumbPosition(e);
					this.store.pointerValue.set(t), this._dispatchPointerValueChange(e), this.dispatchEvent(je("vds-slider-drag-start", {
						triggerEvent: e,
						detail: this.value,
						bubbles: !0
					})), this._mediaRemote.pauseUserIdle(e)
				}
				_stopDragging(e) {
					if (!this.isDragging) return;
					this.store.dragging.set(!1), this._dispatchValueChange.cancel(), this.removeAttribute("dragging");
					const t = this._getValueBasedOnThumbPosition(e);
					this.value = t, this.store.pointerValue.set(t), this._dispatchValueChange(e), this._dispatchPointerValueChange(e), this.dispatchEvent(je("vds-slider-drag-end", {
						triggerEvent: e,
						detail: this.value,
						bubbles: !0
					})), this._mediaRemote.resumeUserIdle(e)
				}
				_getClampedValue(e) {
					return tt(this.min, et(e, it(this.step)), this.max)
				}
				_getValueFromRate(e) {
					const t = tt(0, e, 1),
						i = (this.max - this.min) * t,
						s = Math.round(i / this.step),
						n = this.step * s;
					return this.min + n
				}
				_getValueBasedOnThumbPosition(e) {
					if (this.direction === Hi.Vertical) {
						const t = e.clientY,
							{
								bottom: i,
								height: s
							} = this.getBoundingClientRect(),
							n = (i - t) / s;
						return this._getValueFromRate(n)
					} {
						const t = e.clientX,
							{
								left: i,
								width: s
							} = this.getBoundingClientRect(),
							n = (t - i) / s;
						return this._getValueFromRate(n)
					}
				}
			}
			Ni([Object(n.b)({
				reflect: !0,
				type: Number
			})], Ui.prototype, "min", null), Ni([Object(n.b)({
				reflect: !0,
				type: Number
			})], Ui.prototype, "max", null), Ni([Object(n.b)({
				reflect: !0,
				type: Boolean
			})], Ui.prototype, "disabled", void 0), Ni([Object(n.b)({
				reflect: !0,
				type: Number
			})], Ui.prototype, "value", void 0), Ni([Object(n.b)({
				type: Number,
				reflect: !0
			})], Ui.prototype, "step", null), Ni([Object(n.b)({
				attribute: "direction",
				type: Hi
			})], Ui.prototype, "direction", void 0), Ni([Object(n.b)({
				attribute: "keyboard-step",
				type: Number,
				reflect: !0
			})], Ui.prototype, "keyboardStep", null), Ni([Object(n.b)({
				attribute: "shift-key-multiplier",
				type: Number
			})], Ui.prototype, "shiftKeyMultiplier", void 0), Ni([Object(n.b)({
				type: Boolean,
				attribute: "custom-value-text"
			})], Ui.prototype, "customValueText", void 0);
			const Bi = s.b``;
			var zi = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			class Wi extends Ui {
				constructor() {
					super(), this._step = .1, this.value = 0, this.valueText = "{currentTime} out of {duration}", this.pauseWhileDragging = !1, this.seekingRequestThrottle = 100, this.__mediaDuration = 0, this.__mediaPaused = !0, this._handleSliderDragStart = Object(Mt.a)(this, "vds-slider-drag-start", e => {
						this._togglePlaybackWhileDragging(e)
					}), this._handleSliderValueChange = Object(Mt.a)(this, "vds-slider-value-change", e => {
						ui(e.originEvent) && (this._dispatchSeekingRequest.cancel(), this._mediaRemote.seek(this.value, e))
					}), this._handleSliderDragValueChange = Object(Mt.a)(this, "vds-slider-drag-value-change", e => {
						this._dispatchSeekingRequest(e)
					}), this._handleSliderDragEnd = Object(Mt.a)(this, "vds-slider-drag-end", e => {
						this._dispatchSeekingRequest.cancel(), this._mediaRemote.seek(this.value, e), this._togglePlaybackWhileDragging(e)
					}), this._dispatchSeekingRequest = At(e => {
						this._mediaRemote.seeking(this.value, e)
					}, this.seekingRequestThrottle), this._wasPlayingBeforeDragStart = !1, _t(this, "currentTime", e => {
						this.value = e
					}), _t(this, "duration", e => {
						this.__mediaDuration = e, this.requestUpdate("max")
					}), _t(this, "paused", e => {
						this.__mediaPaused = e
					})
				}
				static get styles() {
					return [super.styles, Bi]
				}
				connectedCallback() {
					super.connectedCallback(), ke(this, "aria-label", "Media time")
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
					return this.valueText.replace("{currentTime}", Ti(this.value)).replace("{duration}", Ti(this.__mediaDuration))
				}
				_getValueMax() {
					return "100%"
				}
				_togglePlaybackWhileDragging(e) {
					this.pauseWhileDragging && (this.isDragging && !this.__mediaPaused ? (this._wasPlayingBeforeDragStart = !0, this._mediaRemote.pause(e)) : this._wasPlayingBeforeDragStart && !this.isDragging && this.__mediaPaused && (this._wasPlayingBeforeDragStart = !1, this._mediaRemote.play(e)))
				}
			}
			zi([Object(n.b)({
				attribute: !1,
				state: !0
			})], Wi.prototype, "value", void 0), zi([Object(n.b)({
				attribute: !1
			})], Wi.prototype, "min", null), zi([Object(n.b)({
				attribute: !1
			})], Wi.prototype, "max", null), zi([Object(n.b)({
				attribute: "value-text"
			})], Wi.prototype, "valueText", void 0), zi([Object(n.b)({
				attribute: "pause-while-dragging",
				type: Boolean
			})], Wi.prototype, "pauseWhileDragging", void 0), zi([Object(n.b)({
				attribute: "seeking-request-throttle",
				type: Number
			})], Wi.prototype, "seekingRequestThrottle", void 0), zi([Object(n.d)()], Wi.prototype, "__mediaDuration", void 0), zi([Object(n.d)()], Wi.prototype, "__mediaPaused", void 0), Ee("vds-time-slider", Wi);
			var Qi = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			class Ki extends s.a {
				constructor() {
					super(...arguments), this._disposal = new Ce.a, this._sliderStoreConsumer = $i.consume(this), this.__value = 0, this.type = "current", this.showHours = !1, this.padHours = !1, this.decimalPlaces = 2
				}
				static get styles() {
					return [s.b`
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
					return s.c`${this._getValueText()}`
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
					return Be([e, this._sliderStore.min, this._sliderStore.max], e => {
						let [t, i, s] = e;
						return t / (s - i) * 100
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
					return `${et(this.__value,this.decimalPlaces)}%`
				}
				_getTimeFormat() {
					return Ri(this.__value, this.padHours, this.showHours)
				}
			}
			Qi([Object(n.d)()], Ki.prototype, "__value", void 0), Qi([Object(n.b)()], Ki.prototype, "type", void 0), Qi([Object(n.b)()], Ki.prototype, "format", void 0), Qi([Object(n.b)({
				attribute: "show-hours",
				type: Boolean
			})], Ki.prototype, "showHours", void 0), Qi([Object(n.b)({
				attribute: "pad-hours",
				type: Boolean
			})], Ki.prototype, "padHours", void 0), Qi([Object(n.b)({
				attribute: "decimal-places",
				type: Number
			})], Ki.prototype, "decimalPlaces", void 0), Ee("vds-slider-value-text", Ki);
			const Yi = (e, t) => {
					var i, s;
					const n = e._$AN;
					if (void 0 === n) return !1;
					for (const r of n) null === (s = (i = r)._$AO) || void 0 === s || s.call(i, t, !1), Yi(r, t);
					return !0
				},
				Gi = e => {
					let t, i;
					do {
						if (void 0 === (t = e._$AM)) break;
						(i = t._$AN).delete(e), e = t
					} while (0 === (null == i ? void 0 : i.size))
				},
				Ji = e => {
					for (let t; t = e._$AM; e = t) {
						let i = t._$AN;
						if (void 0 === i) t._$AN = i = new Set;
						else if (i.has(e)) break;
						i.add(e), es(t)
					}
				};

			function Xi(e) {
				void 0 !== this._$AN ? (Gi(this), this._$AM = e, Ji(this)) : this._$AM = e
			}

			function Zi(e, t = !1, i = 0) {
				const s = this._$AH,
					n = this._$AN;
				if (void 0 !== n && 0 !== n.size)
					if (t)
						if (Array.isArray(s))
							for (let r = i; r < s.length; r++) Yi(s[r], !1), Gi(s[r]);
						else null != s && (Yi(s, !1), Gi(s));
				else Yi(this, e)
			}
			const es = e => {
				var t, i, s, n;
				e.type == d.b.CHILD && (null !== (t = (s = e)._$AP) && void 0 !== t || (s._$AP = Zi), null !== (i = (n = e)._$AQ) && void 0 !== i || (n._$AQ = Xi))
			};
			class ts extends d.a {
				constructor() {
					super(...arguments), this._$AN = void 0
				}
				_$AT(e, t, i) {
					super._$AT(e, t, i), Ji(this), this.isConnected = e._$AU
				}
				_$AO(e, t = !0) {
					var i, s;
					e !== this.isConnected && (this.isConnected = e, e ? null === (i = this.reconnected) || void 0 === i || i.call(this) : null === (s = this.disconnected) || void 0 === s || s.call(this)), t && (Yi(this, e), Gi(this))
				}
				setValue(e) {
					if (k(this._$Ct)) this._$Ct._$AI(e, this);
					else {
						const t = [...this._$Ct._$AH];
						t[this._$Ci] = e, this._$Ct._$AI(t, this, 0)
					}
				}
				disconnected() {}
				reconnected() {}
			}
			const is = () => new ss;
			class ss {}
			const ns = new WeakMap,
				rs = Object(d.c)(class extends ts {
					render(e) {
						return r.d
					}
					update(e, [t]) {
						var i;
						const s = t !== this.Y;
						return s && void 0 !== this.Y && this.rt(void 0), (s || this.lt !== this.dt) && (this.Y = t, this.ct = null === (i = e.options) || void 0 === i ? void 0 : i.host, this.rt(this.dt = e.element)), r.d
					}
					rt(e) {
						var t;
						if ("function" == typeof this.Y) {
							const i = null !== (t = this.ct) && void 0 !== t ? t : globalThis;
							let s = ns.get(i);
							void 0 === s && (s = new WeakMap, ns.set(i, s)), void 0 !== s.get(this.Y) && this.Y.call(this.ct, void 0), s.set(this.Y, e), void 0 !== e && this.Y.call(this.ct, e)
						} else this.Y.value = e
					}
					get lt() {
						var e, t, i;
						return "function" == typeof this.Y ? null === (t = ns.get(null !== (e = this.ct) && void 0 !== e ? e : globalThis)) || void 0 === t ? void 0 : t.get(this.Y) : null === (i = this.Y) || void 0 === i ? void 0 : i.value
					}
					disconnected() {
						this.lt === this.dt && this.rt(void 0)
					}
					reconnected() {
						this.rt(this.dt)
					}
				});
			var os = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			class as extends s.a {
				constructor() {
					super(), this._videoRef = is(), this.__canPlay = !1, this.__hasError = !1, Qe(this, $i, "pointerValue", e => {
						this._updateCurrentTime(e)
					})
				}
				static get styles() {
					return [s.b`
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
					return s.c`
      <video
        part="video"
        muted
        playsinline
        preload="auto"
        src="${e=this.src,o(""===e||"undefined"===e?void 0:e)}"
        @canplay="${this._handleCanPlay}"
        @error="${this._handleError}"
        ${rs(this._videoRef)}
      ></video>
    `;
					var e
				}
				async _handleCanPlay(e) {
					this.__canPlay = !0, this.setAttribute("video-can-play", ""), Jt(this, e)
				}
				_handleError(e) {
					this.__hasError = !0, this.setAttribute("video-error", ""), Jt(this, e)
				}
			}
			os([Object(n.b)()], as.prototype, "src", void 0), os([Object(n.d)()], as.prototype, "__canPlay", void 0), os([Object(n.d)()], as.prototype, "__hasError", void 0), Ee("vds-slider-video", as), Ee("vds-video", Zt);
			var ls = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			class ds extends Ui {
				constructor() {
					super(), this.value = 100, this._handleSliderValueChange = Object(Mt.a)(this, "vds-slider-value-change", this._changeVolume.bind(this)), this._handleSliderDragValueChange = Object(Mt.a)(this, "vds-slider-drag-value-change", this._changeVolume.bind(this)), _t(this, "volume", e => {
						this.value = 100 * Math.sqrt(e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), ke(this, "aria-label", "Media volume")
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
						i = et(Math.pow(t / 100, 2), 3);
					this._mediaRemote.changeVolume(i, e)
				}
			}
			ls([Object(n.b)({
				attribute: !1
			})], ds.prototype, "min", null), ls([Object(n.b)({
				attribute: !1
			})], ds.prototype, "max", null), ls([Object(n.b)({
				attribute: !1,
				state: !0
			})], ds.prototype, "value", void 0), Ee("vds-volume-slider", ds);
			var hs = s.b`
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

  vds-media-visibility,
  vds-media-sync {
    user-select: none;
    -webkit-user-select: none;
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

  vds-media .preview-poster-container .preview-image,
  vds-media:not([can-play]) .preview-image {
    visibility: visible;
  }

  /*
   * -------------------------------------------------------------------------------------------
   * Scrim
   * -------------------------------------------------------------------------------------------
   */

  .scrim {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 40px, transparent 80px);
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
   * Time
   * -------------------------------------------------------------------------------------------
   */

  .vds-time-spacer {
    /* This works around a bug where the element becomes LESS opaque when opacity equals 1. */
    opacity: 0.99;
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

    .gif-control:hover {
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
			const cs = {
				capLevelToPlayerSize: !0
			};
			var us = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			let ps = class extends s.a {
				constructor() {
					super(...arguments), this.hlsLibrary = () => i.e(4).then(i.t.bind(null, "./node_modules/@reddit/shreddit.components.shreddit-player/node_modules/hls.js/dist/hls.min.js", 7)), this.autoplay = !1, this.autoplayPref = !1, this.showAutoplayToggle = !1, this.gif = !1, this.playOutOfViewport = !1, this.ui = "mobile", this.objectFit = "contain", this.isEmbed = !1, this.mediaLoadRequested = !1, this.disableMuteButton = !1, this.hideBufferingPoster = !1, this.handleLoadMediaClick = () => {
						this.mediaLoadRequested || (this.mediaLoadRequested = !0, setTimeout(() => {
							var e;
							null === (e = this.provider) || void 0 === e || e.startLoadingMedia()
						}, 1))
					}
				}
				static get styles() {
					return [bi.a, hs]
				}
				connectedCallback() {
					var e, t, i;
					super.connectedCallback();
					const s = this.getAttribute("packaged-media-json");
					if (s) try {
						this.packagedMedia = JSON.parse(s)
					} catch (o) {
						var n;
						null === (n = window.Sentry) || void 0 === n || n.captureException(`Could not parse packaged-media-json for src ${this.getAttribute("src")}`, o)
					}
					var r;
					(null !== (e = null === (t = this.packagedMedia) || void 0 === t ? void 0 : null === (i = t.playbackMp4s) || void 0 === i ? void 0 : i.permutations) && void 0 !== e ? e : []).length > 0 ? this.isStreaming = !1 : this.isStreaming = null === (r = this.getAttribute("src")) || void 0 === r ? void 0 : r.includes(".m3u8");
					requestAnimationFrame(() => {
						var e, t;
						null === (e = this.hlsProviderElement) || void 0 === e || e.addEventListener("vds-hls-manifest-parsed", () => {
							var e;
							this.hlsEngine = null === (e = this.hlsProviderElement) || void 0 === e ? void 0 : e.hlsEngine
						}), null === (t = this.hlsProviderElement) || void 0 === t || t.addEventListener("vds-error", e => {
							this.mediaError = e.detail
						}), this.provider = this.isStreaming ? this.hlsProviderElement : this.videoProviderElement
					})
				}
				handleVolumeSliderDragStart() {
					this.disableMuteButton = !0
				}
				handleVolumeSliderDragEnd() {
					this.disableMuteButton = !1
				}
				changeSrc(e) {
					const {
						src: t,
						timestamp: i
					} = e.detail || {};
					if (t) {
						var s;
						const e = `${t}#t=${null!=i?i:0}`;
						this.src = e, i > 0 && (this.hideBufferingPoster = !0), null !== (s = this.provider) && void 0 !== s && s.canLoad && this.play()
					}
				}
				shouldShowPreviewPoster() {
					var e, t;
					return !(this.autoplay || this.mediaLoadRequested || null !== (e = this.provider) && void 0 !== e && null !== (t = e.videoElement) && void 0 !== t && t.readyState)
				}
				async play() {
					var e;
					return null === (e = this.provider) || void 0 === e ? void 0 : e.play()
				}
				async pause() {
					var e;
					return null === (e = this.provider) || void 0 === e ? void 0 : e.pause()
				}
				renderPreviewImage() {
					var e;
					return s.c`
      <faceplate-img
        alt="media poster"
        loading="lazy"
        objectfit="contain"
        src="${o(null!==(e=this.getAttribute("poster"))&&void 0!==e?e:void 0)}"
        class="preview-image h-full w-full invisible ease absolute inset-0 object-contain bg-black"
      ></faceplate-img>
    `
				}
				renderUi() {
					var e, t;
					const i = this.gif ? "gif" : "",
						n = "desktop" === this.ui,
						r = "absolute top-0 bottom-0 left-0 right-0 m-auto opacity-0 ease duration-150",
						l = n && !this.gif,
						d = this.isStreaming && !this.hlsEngine;

					function h(e, t) {
						let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.a.Medium;
						return e({
							attributes: {
								className: `${r} ${t}`
							},
							size: i
						})
					}
					if (this.mediaError) {
						let e;
						return e = 2 === this.mediaError.code ? Object(a.b)("This video is no longer available.", {
							desc: "Notify user that the video has been removed and is no longer available."
						}) : Object(a.b)("This video cannot be played.", {
							desc: "Notify user that the video had an error during playback and cannot be played."
						}), s.c`
        <div class="absolute inset-0 bg-black" data-testid="error-message">
          <p class="h-full w-full absolute flex items-center justify-center text-white">
            ${e}
          </p>
        </div>
      `
					}
					return this.shouldShowPreviewPoster() ? s.c`
        <div class="preview-poster-container absolute inset-0 bg-black">
          ${this.renderPreviewImage()}
          <div class="absolute inset-0 bg-black bg-opacity-25">
            <vds-play-button
              class="h-full w-full text-white control flex items-center justify-center rounded-sm cursor-pointer relative ${"ease duration-150"}"
              @click="${this.handleLoadMediaClick}"
            >
              ${h(ee,"play-icon inset-0 flex items-center justify-center",E.a.ExtraLarge)}
            </vds-play-button>
          </div>
        </div>
      ` : s.c`
      <div
        class="media-controls h-full w-full text-white absolute inset-0 pointer-events-none ${i}"
      >
        <div class="controls flex flex-col justify-end h-full w-full pointer-events-none">
          <div
            class="scrim h-full w-full absolute inset-0 z-0 opacity-0 ease duration-300 pointer-events-none"
          ></div>

          <div class="control-bar px-2xs flex ${this.isEmbed&&this.gif?"justify-end":""}">
            <div
              class="disappearing-controls flex items-center w-full opacity-100 visible ease duration-300"
            >
              <vds-play-button
                class="control ${this.isEmbed?"embed-xs:absolute embed-xs:z-10 embed-xs:!min-w-[43px]":""}  rounded-sm cursor-pointer pointer-events-auto relative ${"ease duration-150"}"
              >
                ${h(ee,"play-icon")}
                ${h(ie,"refresh-icon")}
                ${h(X,"pause-icon")}
              </vds-play-button>

              <vds-time-slider
                step="0.1"
                class="flex-1 flex items-center z-0 cursor-pointer pointer-events-auto h-2xl mx-sm ${this.isEmbed?"embed-xs:mx-0":""}  relative"
              >
                <div
                  class="slider-track w-full h-2xs ${this.isEmbed?"embed-xs:h-[2px]":""}  absolute top-1/2 left-0 z-0 pointer-events-none -translate-y-1/2"
                ></div>

                <div
                  class="slider-track-fill z-10 absolute top-1/2 left-0 w-full h-2xs ${this.isEmbed?"embed-xs:h-[2px]":""} pointer-events-none "
                ></div>

                <div
                  class="slider-thumb-container ${this.isEmbed?"embed-xs:hidden":""} absolute top-0 w-lg h-full z-20 -translate-x-1/2"
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

              <span class="flex ml-2xs font-semibold">
                <vds-time type="current"></vds-time>
                ${this.isEmbed?"":s.c`<span class="vds-time-spacer px-2xs">/</span>
                      <vds-time type="duration"></vds-time>`}
              </span>

              ${d||!this.provider?"":s.c`
                    <vds-quality-switcher
                      class="pointer-events-auto relative"
                      .isStreaming="${this.isStreaming}"
                      .provider="${this.provider}"
                      .hlsEngine="${this.hlsEngine}"
                      .mp4Sources="${null===(e=this.packagedMedia)||void 0===e?void 0:null===(t=e.playbackMp4s)||void 0===t?void 0:t.permutations}"
                      .showAutoplayToggle="${this.showAutoplayToggle}"
                      .autoplayPref="${this.autoplayPref}"
                      .hideQualitySwitcher="${!n||this.gif}"
                    ></vds-quality-switcher>
                  `}

              <vds-fullscreen-button
                class="control ${this.isEmbed?"embed-xs:!min-w-[40px] embed-xs:ml-md":""} flex items-center justify-center rounded-sm cursor-pointer pointer-events-auto relative ${"ease duration-150"}"
              >
                ${h(K,"expand-icon")}
                ${h(W,"collapse-icon")}
              </vds-fullscreen-button>
            </div>
            <div class="mute-volume-container flex flex-col gap-xs pointer-events-auto">
              ${l?s.c`
                    <div class="volume-slider-backdrop py-lg">
                      <vds-volume-slider
                        @vds-slider-drag-start="${this.handleVolumeSliderDragStart}"
                        @vds-slider-drag-end="${this.handleVolumeSliderDragEnd}"
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
              ${this.gif?s.c`
                    <div class="control gif-control relative">
                      ${h(G,"gif-icon opacity-75")}
                    </div>
                  `:s.c`
                    <vds-mute-button
                      class="control relative rounded-sm cursor-pointer ${"ease duration-150"}"
                      .disabled="${this.disableMuteButton}"
                    >
                      ${h(ne,"unmute-icon")}
                      ${h(le,"mute-icon")}
                    </vds-mute-button>
                  `}
            </div>
          </div>
        </div>

        ${!this.hideBufferingPoster&&this.renderPreviewImage()}

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
					return s.c`
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
				renderProvider() {
					var e, t, i, n;
					const r = s.c`
      <video
        src="${o(this.src)}"
        class="bg-black ${this.isEmbed&&this.gif?"rounded-[16px]":""}"
        preload="none"
        playsinline
        style="object-fit:${this.objectFit};"
      >
        <slot></slot>
      </video>
    `;
					return this.isStreaming ? s.c`
          <vds-hls
            class="h-full w-full"
            .hlsConfig="${cs}"
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
            ${r}
          </vds-hls>
        ` : s.c`
          <vds-video
            @vds-video-src-change="${this.changeSrc}"
            class="h-full w-full"
            preload="${this.autoplay?"auto":"none"}"
            loading="${this.autoplay?"lazy":"custom"}"
            ?autoplay="${this.autoplay}"
            ?gif="${this.gif}"
            ?loop="${this.gif}"
            ?muted="${this.gif}"
            poster="${o(null!==(i=this.getAttribute("poster"))&&void 0!==i?i:void 0)}"
            preview="${o(null!==(n=this.getAttribute("preview"))&&void 0!==n?n:void 0)}"
          >
            ${r}
          </vds-video>
        `
				}
				render() {
					const e = this.gif ? "gif" : "",
						t = "desktop" === this.ui;
					return s.c`
      <vds-media-sync ?single-playback="${!this.gif}" sync-volume>
        <vds-media-visibility
          intersection-threshold="1"
          enter-page="${o(this.autoplay||this.gif?"play":void 0)}"
          enter-viewport="${o(this.autoplay||this.gif?"play":void 0)}"
          exit-page="${o(t||this.gif?void 0:"pause")}"
          exit-viewport="${o(this.playOutOfViewport||this.gif?void 0:"pause")}"
          page-enter-delay="200"
          viewport-enter-delay="200"
        >
          <vds-media class="h-full w-full ${`${e}`}">
            ${this.renderProvider()} ${this.renderUi()} ${this.gif?"":this.renderGestures()}
          </vds-media>
        </vds-media-visibility>
      </vds-media-sync>
    `
				}
			};
			us([Object(n.b)({
				type: String,
				attribute: "src",
				reflect: !0
			})], ps.prototype, "src", void 0), us([Object(n.b)({
				type: String,
				attribute: "packaged-media-json"
			})], ps.prototype, "packagedMediaJSON", void 0), us([Object(n.b)()], ps.prototype, "packagedMedia", void 0), us([Object(n.b)()], ps.prototype, "provider", void 0), us([Object(n.b)({
				type: Boolean,
				attribute: "autoplay",
				reflect: !0
			})], ps.prototype, "autoplay", void 0), us([Object(n.b)({
				type: Boolean,
				attribute: "autoplay-pref"
			})], ps.prototype, "autoplayPref", void 0), us([Object(n.b)({
				type: Boolean,
				attribute: "show-autoplay-toggle"
			})], ps.prototype, "showAutoplayToggle", void 0), us([Object(n.b)({
				type: Boolean,
				attribute: "gif",
				reflect: !0
			})], ps.prototype, "gif", void 0), us([Object(n.b)({
				type: String,
				attribute: "preview"
			})], ps.prototype, "preview", void 0), us([Object(n.b)({
				type: Boolean,
				attribute: "play-out-of-viewport"
			})], ps.prototype, "playOutOfViewport", void 0), us([Object(n.b)({
				type: String,
				attribute: "ui"
			})], ps.prototype, "ui", void 0), us([Object(n.b)({
				type: String,
				attribute: "object-fit"
			})], ps.prototype, "objectFit", void 0), us([Object(n.b)({
				type: Boolean,
				attribute: "is-embed"
			})], ps.prototype, "isEmbed", void 0), us([Object(n.d)()], ps.prototype, "mediaLoadRequested", void 0), us([Object(n.d)()], ps.prototype, "hlsEngine", void 0), us([Object(n.d)()], ps.prototype, "isStreaming", void 0), us([Object(n.d)()], ps.prototype, "disableMuteButton", void 0), us([Object(n.d)()], ps.prototype, "hideBufferingPoster", void 0), us([Object(n.d)()], ps.prototype, "mediaError", void 0), us([Object(n.c)("vds-hls")], ps.prototype, "hlsProviderElement", void 0), us([Object(n.c)("vds-video")], ps.prototype, "videoProviderElement", void 0), ps = us([Object(n.a)("shreddit-player")], ps)
		},
		"./node_modules/@reddit/shreddit.components.shreddit-player/dist/media-telemetry-observer/media-telemetry-observer.js": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "MediaTelemetryObserver", (function() {
				return Se
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js"),
				n = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js"),
				r = i("./node_modules/lit/index.js"),
				o = i("./node_modules/lit/decorators.js");
			const a = 3e4,
				l = 1e4,
				d = [25, 50, 75, 95, 100],
				h = [2, 3, 5, 10],
				c = 2e3,
				u = 3e3;
			var p = i("./node_modules/@reddit/faceplate/lib/custom-event.js");
			const v = e => t => {
					const i = (e => {
						const {
							originEvent: {
								timeStamp: t
							},
							target: {
								state: i,
								mediaElement: s
							}
						} = e, {
							currentTime: n,
							muted: r,
							paused: o,
							volume: a
						} = null != i ? i : {}, {
							duration: l
						} = null != s ? s : {};
						let {
							fullscreen: d
						} = null != i ? i : {};
						return "vds-fullscreen-change" === e.type && (d = e.detail), {
							currentTime: n,
							duration: l,
							fullscreen: d,
							muted: r,
							paused: o,
							timeStamp: t,
							volume: a
						}
					})(t);
					return [Object(p.a)(e, i)]
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
			var _, m, b, y, f, w, E, S, k, O, C, P, j, M, A, x = i("./node_modules/uuid/dist/esm-browser/v4.js"),
				L = i("./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js");
			class R {
				constructor(e) {
					this._timer = null, this._expectedAt = 1 / 0, this._handleInterval = () => {
						var e;
						const t = Date.now(),
							{
								_expectedAt: i,
								_interval: s
							} = this,
							n = t - i,
							r = {
								timestamp: t,
								latency: n,
								accuracy: 1 - Math.abs(n) / s
							};
						null === (e = this._callback) || void 0 === e || e.call(this, r), this._expectedAt = t + s
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
					} = this, i = e[e.length - 1], s = {
						time: i ? t - i.cumulativeTime : t,
						cumulativeTime: t
					};
					return e.push(s), s
				}
			}
			class q {
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
						const i = this._thresholds[0];
						if (e < i) return t;
						this._thresholds.shift(), t.push(i)
					}
					return t
				}
			}
			class V {
				constructor(e) {
					this._stopwatch = new T, this._buffering = !1, this._playing = !1, this._viewable = !1, this._visible = !1, this._audible = e.audible, this._fullscreen = e.fullscreen, this._thresholdObserver = new q(e.duration)
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

			function I(e, t, i) {
				return {
					...e,
					media: D(t, i),
					playback: $(e, t, i),
					video_error_report: F(t)
				}
			}

			function $(e, t, i) {
				var s, n, r, o;
				let a, l, d;
				var h, c, u, p;
				"hlsEngine" in t ? (a = null === (h = B(t)) || void 0 === h ? void 0 : h.bitrate, l = null !== (c = t.hlsEngine) && void 0 !== c && c.audioTracks ? null === (u = t.hlsEngine) || void 0 === u ? void 0 : null === (p = u.audioTracks[t.hlsEngine.audioTrack]) || void 0 === p ? void 0 : p.bitrate : void 0) : a = t.resolution;
				const {
					currentTime: v = 0,
					duration: g = 0,
					muted: _,
					volume: m = 0
				} = null !== (s = t.state) && void 0 !== s ? s : {}, {
					height: b,
					width: f
				} = function(e) {
					const t = e.videoElement;
					return {
						height: (null == t ? void 0 : t.clientHeight) || 0,
						width: (null == t ? void 0 : t.clientWidth) || 0
					}
				}(t), w = e.source === S.Videoplayer && e.action === k.Switch && e.noun === O.Bitrate;
				w && (d = w ? !t.isHlsStream || t.loadingUserLevel : void 0);
				const E = F(t),
					C = E ? `[${E.error_code}] ${E.error_message}` : void 0;
				return {
					id: i.id,
					is_live: i._live,
					is_looped: i.hasLooped,
					state: H(t),
					error: C,
					watch_duration_ms: Math.round(i._stopwatch.time),
					heartbeat_duration_ms: null,
					playhead_offset_ms: Math.round(1e3 * (g - v)),
					timestamp_ms: Math.round(1e3 * v),
					start_time_ms: i.startedAt,
					volume: _ ? 0 : Math.round(100 * m),
					total_bitrate: (null !== (n = a) && void 0 !== n ? n : 0) + (null !== (r = l) && void 0 !== r ? r : 0),
					video_bitrate: a,
					audio_bitrate: l,
					player_type: null !== (o = i._playbackPlayerType) && void 0 !== o ? o : null,
					player_width: f,
					player_height: b,
					autoplay_setting: i._firstPlayTrusted ? y.Click : y.Autoplay,
					sequence_number: i._sequenceNumber += 1,
					user_bitrate_switch: d
				}
			}

			function D(e, t) {
				var i, s, n;
				let r, o, a;
				if ("hlsEngine" in e) {
					var l, d, h, c, u;
					o = null === (l = B(e)) || void 0 === l ? void 0 : l.codecSet;
					const t = null === (d = e.hlsEngine) || void 0 === d ? void 0 : d.audioTrack;
					a = void 0 !== t && t > -1, r = null === (h = e.hlsEngine) || void 0 === h ? void 0 : null === (c = h.streamController) || void 0 === c ? void 0 : null === (u = c.fragCurrent) || void 0 === u ? void 0 : u.byteRange
				} else {
					var p, v;
					const t = null === (p = e.mediaElement) || void 0 === p ? void 0 : p.src;
					null != t && t.includes(".mp4") ? o = "mp4" : null != t && t.includes(".gif") && (o = "gif");
					const i = e.mediaElement;
					a = (null == i ? void 0 : i.mozHasAudio) || Boolean(null == i ? void 0 : i.webkitAudioDecodedByteCount) || Boolean(null == i ? void 0 : null === (v = i.audioTracks) || void 0 === v ? void 0 : v.length)
				}
				const {
					currentTime: g,
					duration: m,
					fullscreen: y,
					mediaType: f
				} = null !== (i = e.state) && void 0 !== i ? i : {}, {
					height: w,
					width: E
				} = function(e) {
					const t = e.videoElement;
					return {
						height: (null == t ? void 0 : t.videoHeight) || 0,
						width: (null == t ? void 0 : t.videoWidth) || 0
					}
				}(e), S = E >= w ? _.Landscape : _.Portrait, k = "currentHlsSrc" in e ? e.currentHlsSrc : null === (s = e.mediaElement) || void 0 === s ? void 0 : s.src, {
					hostname: O,
					pathname: C,
					id: P
				} = function(e) {
					let t, i, s = "";
					try {
						const n = new URL(e);
						t = n.hostname, i = n.pathname, "v.redd.it" === t && (s = i.split("/")[1] || "")
					} catch {}
					return {
						hostname: t,
						pathname: i,
						id: s
					}
				}(k);
				let j;
				return Array.isArray(r) && 2 === r.length && (j = r[1] - r[0]), {
					duration: Math.round(1e3 * m),
					height: w,
					width: E,
					id: P,
					domain: O,
					orientation: S,
					origin: null !== (n = t._mediaOrigin) && void 0 !== n ? n : null,
					size: j,
					type: f,
					packaging_format: e.isHlsStream ? b.Hls : b.SingleFile,
					byte_range: Array.isArray(r) ? r.toString() : void 0,
					time: Math.round(1e3 * g),
					zoomed: y,
					format: o,
					has_audio: a,
					file_name: C,
					url: k
				}
			}

			function F(e) {
				var t;
				const {
					error: i
				} = null !== (t = e.state) && void 0 !== t ? t : {};
				if (i) return {
					error_code: i.code,
					error_message: i.message
				}
			}

			function H(e) {
				var t;
				const {
					waiting: i,
					playing: s,
					paused: n
				} = null !== (t = e.state) && void 0 !== t ? t : {};
				return i ? f.Buffering : s ? f.Playing : n ? f.Paused : f.Buffering
			}

			function N(e) {
				return H(e) === f.Playing
			}

			function U(e) {
				return !e.state.muted && e.state.volume > 0
			}

			function B(e) {
				var t, i;
				return null !== (t = e.hlsEngine) && void 0 !== t && t.levels && void 0 !== (null === (i = e.hlsEngine) || void 0 === i ? void 0 : i.currentLevel) ? e.hlsEngine.levels[e.hlsEngine.currentLevel] : void 0
			}! function(e) {
				e.Landscape = "landscape", e.Portrait = "portrait"
			}(_ || (_ = {})),
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
			}(f || (f = {})),
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
			}(k || (k = {})),
			function(e) {
				e.Autoplay = "autoplay", e.Bitrate = "bitrate", e.Download = "download", e.Pause = "pause", e.Play = "play", e.Rebuffer = "rebuffer", e.Video = "video"
			}(O || (O = {})),
			function(e) {
				e.Videoplayer = "videoplayer"
			}(C || (C = {})),
			function(e) {
				e.Click = "click", e.Continue = "continue", e.IsFullyViewable = "is_fully_viewable", e.IsViewable = "is_viewable", e.Pause = "pause", e.PlayExpanded = "play_expanded", e.PlayWithSound = "play_with_sound", e.Start = "start", e.Watch = "watch", e.WatchPercent25 = "watch_25_percent", e.WatchPercent50 = "watch_50_percent", e.WatchPercent75 = "watch_75_percent", e.WatchPercent95 = "watch_95_percent", e.WatchPercent100 = "watch_100_percent", e.WatchSeconds2 = "watch_2_seconds", e.WatchSeconds3 = "watch_3_seconds", e.WatchSeconds5 = "watch_5_seconds", e.WatchSeconds10 = "watch_10_seconds"
			}(P || (P = {})),
			function(e) {
				e.Pause = "pause", e.Play = "play", e.Seek = "seek", e.Mute = "mute", e.Unmute = "unmute", e.Replay = "replay", e.Video = "video"
			}(j || (j = {})),
			function(e) {
				e.Autoplay = "autoplay", e.Manual = "manual"
			}(M || (M = {})),
			function(e) {
				e.Auto = "auto", e.Buffer = "buffer", e.Manual = "manual"
			}(A || (A = {}));
			class z {
				constructor(e, t) {
					var i, s, n, r;
					this._handleHeartbeat = e => {
						this._validateHeartbeat(e) && this._watch()
					}, this._validateHeartbeat = e => e.latency < l, this._mediaOrigin = null == t ? void 0 : null === (i = t.media) || void 0 === i ? void 0 : i.origin, this._playbackPlayerType = null == t ? void 0 : null === (s = t.playback) || void 0 === s ? void 0 : s.playerType, this._player = e, this._pulse = new R({
						interval: a
					}), this._stopwatch = new T, this._firstPlayTrusted = !1, this.id = Object(x.a)(), this._lastContinueReason = A.Auto, this._live = (null === (n = this._player.state) || void 0 === n ? void 0 : n.mediaType) === L.a.LiveVideo, this.hasLooped = !1, this._playedInFullscreen = !1, this._playedWithSound = !1, this.startedAt = 0, this._waiting = !1, this._sequenceNumber = -1, this._pulse.onHeartbeat(this._handleHeartbeat), this._watchPercentThresholdObserver = new q(d), this._watchSecondsThresholdObserver = new q(h);
					const o = U(this._player),
						{
							fullscreen: p = !1
						} = null !== (r = this._player.state) && void 0 !== r ? r : {};
					this._viewableImpressionObserver = new V({
						audible: o,
						duration: c,
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
					this._viewableImpressionObserver.fullscreen = e, this._fullyViewableImpressionObserver.fullscreen = e, N(this._player) && !this._playedInFullscreen && (this._playedInFullscreen = !0)
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
					null !== (t = this._player.state) && void 0 !== t && t.started || (this._firstPlayTrusted = e), this._lastContinueReason = e ? A.Manual : A.Auto
				}
				playing() {
					this._resumeSession(), this._waiting = !1, this._viewableImpressionObserver.buffering = !1, this._fullyViewableImpressionObserver.buffering = !1, this._lastContinueReason = A.Auto
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
					t && N(e) && !this._playedWithSound && (this._playedWithSound = !0), this._viewableImpressionObserver.audible = t, this._fullyViewableImpressionObserver.audible = t
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
						currentTime: i,
						duration: s
					} = null !== (t = this._player.state) && void 0 !== t ? t : {}, n = 100 * (s >= i ? i / s : 0);
					return this._watchPercentThresholdObserver.test(n)
				}
				checkWatchSecondsThreshold() {
					if (this._watchSecondsThresholdObserver.complete) return [];
					const e = this._stopwatch.time / 1e3;
					return this._watchSecondsThresholdObserver.test(e)
				}
			}
			const W = Symbol("mixins/with-tracking");
			var Q = i("./node_modules/js-cookie/dist/js.cookie.js"),
				K = i.n(Q),
				Y = i("./node_modules/@reddit/adblock-detection/browser.js"),
				G = i("./node_modules/@reddit/faceplate/lib/device.js"),
				J = i("./node_modules/@reddit/baseplate/lib/device/getDeviceTierForYearClass.js");
			const X = {
					screen: {
						view_type: "card"
					}
				},
				Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = "",
						i = "";
					const s = e.split(".");
					if (s.length >= 3) {
						t = `t2_${s[0].replace(/\b0+/g,"")}`, i = s[2]
					}
					return {
						id: t,
						cookie_created_timestamp: parseInt(i, 10)
					}
				},
				ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
					const t = e.split("."),
						i = t[0],
						s = parseInt(t[2], 10);
					return {
						id: i,
						created_timestamp: s
					}
				};
			var te;
			! function(e) {
				e.Mobile = "mweb3x", e.Desktop = "web3x"
			}(te || (te = {}));
			const ie = te.Mobile,
				se = Object.values(te);
			let ne;
			const re = () => {
				var e, t;
				return void 0 !== ne ? ne : ((e => {
					var t, i;
					void 0 !== e && se.includes(e) ? ne = e : (ne = ie, null === (t = window.Sentry) || void 0 === t || null === (i = t.captureMessage) || void 0 === i || i.call(t, "`app-name`: Default app_name value was used"))
				})(null !== (e = null === (t = document.querySelector("shreddit-app")) || void 0 === t ? void 0 : t.appName) && void 0 !== e ? e : void 0), ne)
			};
			let oe = null;
			const ae = () => ({
					app: {
						name: re()
					}
				}),
				le = () => {
					const e = K.a.get("session_tracker"),
						{
							domain: t,
							url: i
						} = he();
					return {
						...ee(e),
						referrer_domain: t,
						referrer_url: i
					}
				},
				de = () => {
					var e, t, i;
					const s = K.a.get("loid") || (null === (e = document.querySelector("shreddit-app")) || void 0 === e ? void 0 : e.loid);
					return {
						...s ? Z(s) : "",
						logged_in: null !== (t = null === (i = document.querySelector("shreddit-app")) || void 0 === i ? void 0 : i.hasAttribute("user-logged-in")) && void 0 !== t && t
					}
				},
				he = () => {
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
				ce = () => ({
					enabled: Object(Y.hasAdblock)(),
					acceptable_ads: Object(Y.hasAcceptableAds)()
				}),
				ue = e => {
					let t = {};
					try {
						var i, s, n;
						t = JSON.parse(null !== (i = null === (s = document.getElementsByTagName("shreddit-screenview-data")) || void 0 === s ? void 0 : null === (n = s[0]) || void 0 === n ? void 0 : n.getAttribute("data")) && void 0 !== i ? i : "{}")
					} catch (r) {
						throw new Error("Unable to parse screenview data")
					}
					return t[e]
				},
				pe = () => {
					const {
						hostname: e,
						origin: t,
						pathname: i,
						search: s
					} = window.location, n = `${t}${i}`;
					return {
						base_url: s ? `${n}${s}` : n,
						canonical_url: void 0,
						domain: e,
						user_agent: window.navigator.userAgent
					}
				},
				ve = () => {
					var e, t;
					const i = null !== (e = null === (t = Object(G.a)()) || void 0 === t ? void 0 : t.yearClass) && void 0 !== e ? e : null;
					return {
						year_class: i,
						device_tier: i ? Object(J.a)(i) : void 0
					}
				},
				ge = () => ({
					adblock: ce(),
					referrer: he(),
					session: le(),
					user: de(),
					client_timestamp: Date.now(),
					platform: ve(),
					...X,
					...ae()
				}),
				_e = function(e, t) {
					let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ue;
					if (null != t && t[e]) return {};
					const s = i(e);
					return s ? {
						[e]: s
					} : {}
				},
				me = e => (e.request = {
					...pe(),
					...e.request || {}
				}, oe ? (e.request.google_client_id = oe, e) : e);
			var be = function(e, t, i, s) {
				var n, r = arguments.length,
					o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
				return r > 3 && o && Object.defineProperty(t, i, o), o
			};
			const ye = [{
				"vds-ended": (e, t) => t.ended(),
				"vds-pause": (e, t, i) => {
					const s = ke(e.requestEvent);
					return t.pause(), fe(t, i, s)
				},
				"vds-fullscreen-change": (e, t, i) => {
					const s = e.detail,
						n = [];
					return N(i._player) && !t._playedInFullscreen && n.push(I({
						source: C.Videoplayer,
						action: P.PlayExpanded,
						noun: j.Video
					}, i._player, t)), t.fullscreen(s), n
				},
				"vds-play": (e, t, i) => {
					var s;
					const n = ke(e.requestEvent),
						r = [];
					if (U(i._player) && !t._playedWithSound) {
						t._playedWithSound = !0;
						const e = I({
							source: C.Videoplayer,
							action: P.PlayWithSound,
							noun: j.Video
						}, i._player, t);
						r.push(e)
					}
					if (null !== (s = i._player.state) && void 0 !== s && s.fullscreen && !t._playedInFullscreen) {
						t._playedInFullscreen = !0;
						const e = I({
							source: C.Videoplayer,
							action: P.PlayExpanded,
							noun: j.Video
						}, i._player, t);
						r.push(e)
					}
					return t.play(n), i._userReplayRequest = !1, r
				},
				"vds-autoplay": (e, t, i) => [I({
					source: S.Videoplayer,
					action: k.View,
					noun: O.Autoplay
				}, i._player, t)],
				"vds-can-load": (e, t, i) => {
					var s, n;
					null !== (s = i._player) && void 0 !== s && null !== (n = s.state) && void 0 !== n && n.ended && (i._userReplayRequest = !0)
				},
				"vds-manual-load": (e, t, i) => [I({
					source: S.Videoplayer,
					action: k.Click,
					noun: O.Play
				}, i._player, t)],
				"vds-end": (e, t, i) => {
					var s, n, r;
					if (null !== (s = i._player) && void 0 !== s && s.loop || null !== (n = i._player) && void 0 !== n && null !== (r = n.state) && void 0 !== r && r.loop) return t.looped()
				},
				"vds-error": (e, t, i) => {
					var s;
					return (null == e ? void 0 : null === (s = e.detail) || void 0 === s ? void 0 : s.message) && console.error(`vds-error: [${e.detail.code}] ${e.detail.message}`), [I({
						source: S.Videoplayer,
						action: k.Error,
						noun: O.Video
					}, i._player, t)]
				},
				"vds-video-src-change": (e, t, i) => {
					var s;
					return null !== (s = e.detail) && void 0 !== s && s.userQualityChange ? [I({
						source: S.Videoplayer,
						action: k.Switch,
						noun: O.Bitrate
					}, i._player, t)] : []
				},
				"vds-hls-level-switched": (e, t, i) => [I({
					source: S.Videoplayer,
					action: k.Switch,
					noun: O.Bitrate
				}, i._player, t)],
				"vds-hls-manifest-loading": (e, t, i) => [I({
					source: S.Videoplayer,
					action: k.Start,
					noun: O.Download
				}, i._player, t)],
				"vds-hls-manifest-loaded": (e, t, i) => [I({
					source: S.Videoplayer,
					action: k.End,
					noun: O.Download
				}, i._player, t)],
				"vds-playing": (e, t, i) => {
					var s;
					const n = "vds-triggeredBySeeked" === (null === (s = e.triggerEvent) || void 0 === s ? void 0 : s.type),
						r = !t._stopwatch.time,
						o = [];
					if (t._waiting) {
						t._lastContinueReason = A.Buffer;
						const e = I({
							source: S.Videoplayer,
							action: k.End,
							noun: O.Rebuffer
						}, i._player, t);
						o.push(e)
					}
					if (r) {
						const e = t._firstPlayTrusted ? M.Manual : M.Autoplay,
							s = I({
								source: S.Videoplayer,
								action: k.Start,
								noun: O.Video,
								action_info: {
									reason: e
								}
							}, i._player, t);
						o.push(s)
					} else if (!n || t._waiting) {
						const e = I({
							source: C.Videoplayer,
							action: P.Continue,
							noun: j.Video,
							action_info: {
								reason: t._lastContinueReason
							}
						}, i._player, t);
						o.push(e)
					}
					return t.playing(), o
				},
				"vds-replay": (e, t, i) => {
					var s, n, r;
					return i._userReplayRequest = !0, (null !== (s = i._player) && void 0 !== s && s.loop || null !== (n = i._player) && void 0 !== n && null !== (r = n.state) && void 0 !== r && r.loop) && t.replay(), [I({
						source: C.Videoplayer,
						action: P.Click,
						noun: j.Replay
					}, i._player, t)]
				},
				"vds-seeking": (e, t) => t.seeking(),
				"vds-seeked": (e, t, i) => {
					const s = [];
					return ke(e.requestEvent) && s.push(I({
						source: C.Videoplayer,
						action: P.Click,
						noun: j.Seek
					}, i._player, t)), s
				},
				"vds-time-update": (e, t, i) => {
					const s = [],
						n = t.checkWatchPercentThreshold();
					for (const o of n) s.push(I({
						source: C.Videoplayer,
						action: Ce(`WatchPercent${o}`),
						noun: j.Video
					}, i._player, t));
					const r = t.checkWatchSecondsThreshold();
					for (const o of r) s.push(I({
						source: C.Videoplayer,
						action: Ce(`WatchSeconds${o}`),
						noun: j.Video
					}, i._player, t));
					return t.timeUpdate(), s
				},
				"vds-volume-change": (e, t, i) => {
					var s;
					const n = ke(e.requestEvent),
						r = [],
						o = null === (s = e.requestEvent) || void 0 === s ? void 0 : s.type;
					if ("vds-mute-request" !== o && "vds-unmute-request" !== o || n && r.push(I({
							source: C.Videoplayer,
							action: P.Click,
							noun: "vds-mute-request" === o ? j.Mute : j.Unmute
						}, i._player, t)), U(i._player) && N(i._player) && !t._playedWithSound) {
						const e = I({
							source: C.Videoplayer,
							action: P.PlayWithSound,
							noun: j.Video
						}, i._player, t);
						r.push(e)
					}
					return t.volumeChange(i._player), r.filter(Boolean)
				},
				"vds-waiting": (e, t, i) => {
					var s, n;
					const r = [];
					return t.waiting(), null !== (s = i._player) && void 0 !== s && null !== (n = s.state) && void 0 !== n && n.started && r.push(I({
						source: S.Videoplayer,
						action: k.Start,
						noun: O.Rebuffer
					}, i._player, t), I({
						source: C.Videoplayer,
						action: P.Pause,
						noun: j.Video,
						action_info: {
							reason: A.Buffer
						}
					}, i._player, t)), r
				},
				"viewable-impression": (e, t, i) => {
					return [I({
						source: C.Videoplayer,
						action: P.IsViewable,
						noun: j.Video
					}, i._player, t)]
				},
				"fully-viewable-impression": (e, t, i) => {
					return [I({
						source: C.Videoplayer,
						action: P.IsFullyViewable,
						noun: j.Video
					}, i._player, t)]
				},
				"video-heartbeat": (e, t, i) => {
					return [we(t, i)]
				}
			}];

			function fe(e, t, i) {
				e.pause();
				const s = [];
				if (i) {
					const i = I({
						source: S.Videoplayer,
						action: k.Click,
						noun: O.Pause
					}, t._player, e);
					s.push(i)
				} else if (t._isVisible) {
					const i = I({
						source: S.Videoplayer,
						action: k.Scroll,
						noun: O.Pause
					}, t._player, e);
					s.push(i)
				} else {
					const i = I({
						source: S.Videoplayer,
						action: k.Background,
						noun: O.Video
					}, t._player, e);
					s.push(i)
				}
				s.push(we(e, t));
				const n = i ? A.Manual : A.Auto,
					r = I({
						source: C.Videoplayer,
						action: P.Pause,
						noun: j.Video,
						action_info: {
							reason: n
						}
					}, t._player, e);
				return s.push(r), s
			}

			function we(e, t) {
				const i = I({
					source: C.Videoplayer,
					action: P.Watch,
					noun: j.Video
				}, t._player, e);
				return i.playback.heartbeat_duration_ms = e._stopwatch.lap().time, i
			}
			var Ee;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Ads = 1] = "Ads"
			}(Ee || (Ee = {}));
			let Se = class extends(function(e) {
				if (W in e) return e;
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
				return t[W] = !0, t
			}(r.a)) {
				constructor() {
					super(...arguments), this.set = Ee.Default, this._userReplayRequest = !1, this._isVisible = !1, this._pageController = new s.a(this, e => {
						var t;
						let {
							state: i
						} = e;
						const s = "hidden" === i;
						this._isVisible = !s, null === (t = this._mediaSession) || void 0 === t || t.isVisible(!s)
					}), this._connect = Object(n.a)(this, "vds-media-provider-connect", e => {
						if (this._mediaSession) return;
						const {
							element: t,
							onDisconnect: i
						} = e.detail;
						this._player = t, this._createMediaSession();
						let s = ye;
						this.set === Ee.Ads && (s = [...ye, ...g]);
						for (const n of s)
							for (const [e, s] of Object.entries(n)) {
								const n = e => this._runListener(e, s);
								t.addEventListener(e, n), i(() => {
									t.removeEventListener(e, n)
								})
							}
						i(() => {
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
					var t, i, s;
					const {
						source: n,
						action: r,
						noun: o,
						media: a,
						playback: l,
						video_error_report: d,
						action_info: h
					} = e, c = function(e) {
						let {
							source: t,
							action: i,
							noun: s,
							...n
						} = e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return {
							...me(r),
							source: t,
							action: i,
							noun: s,
							uuid: Object(x.a)(),
							...ge(),
							..._e("post", r),
							...n
						}
					}({
						source: n,
						action: r,
						noun: o
					}, {
						media: a,
						playback: {
							...l,
							player_type: null !== (t = this.playerType) && void 0 !== t ? t : null
						},
						action_info: h,
						post: {
							id: this.postId,
							nsfw: null !== (i = this.postNsfw) && void 0 !== i && i,
							score: this.postScore,
							spoiler: null !== (s = this.postSpoiler) && void 0 !== s && s,
							subreddit_name: this.subredditName
						},
						subreddit: {
							name: this.subredditName
						},
						video_error_report: d
					});
					this.trackEvent(c)
				}
				_runListener(e, t) {
					const i = t(e, this._mediaSession, this);
					i && this._dispatchEvents(i)
				}
				_dispatchEvents(e) {
					for (const t of e) Oe(t) ? this.handleSessionEvent(t) : this.dispatchEvent(t)
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
					this._mediaSession = new z(this._player, t), this._createIntersectionObservers(), null === (e = this._mediaSession) || void 0 === e || e.isVisible("hidden" !== this._pageController.state)
				}
				_destroyMediaSession() {
					var e, t;
					if (this._destroyIntersectionObservers(), this._player && (null === (e = this._player.state) || void 0 === e || !e.paused) && this._mediaSession) {
						const e = fe(this._mediaSession, this);
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
					return r.c`<slot></slot>`
				}
			};

			function ke(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.isOriginTrusted) && void 0 !== t && t
			}

			function Oe(e) {
				return !!e.source && !!e.noun
			}

			function Ce(e) {
				return P[e]
			}
			be([Object(o.b)({
				type: String,
				attribute: "media-origin"
			})], Se.prototype, "mediaOrigin", void 0), be([Object(o.b)({
				type: String,
				attribute: "playback-playertype"
			})], Se.prototype, "playbackPlayerType", void 0), be([Object(o.b)({
				type: Number,
				attribute: "set"
			})], Se.prototype, "set", void 0), be([Object(o.b)({
				type: String,
				attribute: "player-type"
			})], Se.prototype, "playerType", void 0), be([Object(o.b)({
				type: String,
				attribute: "post-id"
			})], Se.prototype, "postId", void 0), be([Object(o.b)({
				type: Boolean,
				attribute: "post-nsfw"
			})], Se.prototype, "postNsfw", void 0), be([Object(o.b)({
				type: Number,
				attribute: "post-score"
			})], Se.prototype, "postScore", void 0), be([Object(o.b)({
				type: Boolean,
				attribute: "post-spoiler"
			})], Se.prototype, "postSpoiler", void 0), be([Object(o.b)({
				type: String,
				attribute: "subreddit-name"
			})], Se.prototype, "subredditName", void 0), Se = be([Object(o.a)("media-telemetry-observer")], Se)
		},
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			var s = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");

			function n(e, t, i, n) {
				let r;

				function o() {
					var o;
					r || (r = Object(s.e)(null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : e, t, i, n))
				}
				o(), e.addController({
					hostConnected() {
						o()
					},
					hostDisconnected() {
						var e;
						null === (e = r) || void 0 === e || e(), r = void 0
					}
				})
			}
		},
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			}));
			var s, n = i("./node_modules/fscreen/dist/fscreen.esm.js"),
				r = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");
			const o = "undefined" != typeof window && "object" == typeof window.safari && (null === (s = window) || void 0 === s ? void 0 : s.safari.pushNotification);
			class a {
				constructor(e, t) {
					this._host = e, this._callback = t, this._state = this._determinePageState(), this._visibility = document.visibilityState, this._disposal = new r.a, e.addController(this)
				}
				get state() {
					return this._state
				}
				get visibility() {
					return this._visibility
				}
				hostConnected() {
					this._state = this._determinePageState(), this._visibility = document.visibilityState, ["focus", "blur", "visibilitychange", "pageshow", "pagehide"].forEach(e => {
						const t = Object(r.e)(window, e, this._handlePageEvent.bind(this));
						this._disposal.add(t)
					}), o && this._disposal.add(Object(r.e)(window, "beforeunload", e => {
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
						i = this._visibility;
					"blur" === e.type && "active" !== this.state || (this._state = this._determinePageState(e), this._visibility = "hidden" == document.visibilityState ? "hidden" : "visible"), this.state === t && this.visibility === i || this._triggerCallback()
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
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js": function(e, t, i) {
			"use strict";

			function s(e, t, i, s) {
				return e.addEventListener(t, i, s), () => {
					e.removeEventListener(t, i, s)
				}
			}

			function n(e, t) {
				return t.some(t => {
					var i;
					return null !== (i = null == e ? void 0 : e.type.includes(t)) && void 0 !== i && i
				})
			}

			function r(e) {
				return n(e, ["pointer"])
			}

			function o(e) {
				return n(e, ["touch"])
			}

			function a(e) {
				return n(e, ["click", "mouse"])
			}
			i.d(t, "e", (function() {
				return s
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "d", (function() {
				return o
			})), i.d(t, "b", (function() {
				return a
			})), i.d(t, "a", (function() {
				return l
			}));
			class l {
				constructor() {
					var e;
					this._disposal = null !== (e = this._disposal) && void 0 !== e ? e : []
				}
				add() {
					for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
					t && t.forEach(e => {
						this._disposal.push(e)
					})
				}
				empty() {
					this._disposal.forEach(e => e()), this._disposal = []
				}
			}
		},
		"./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js": function(e, t, i) {
			"use strict";
			var s;
			i.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Unknown = "unknown", e.Audio = "audio", e.Video = "video", e.LiveVideo = "live-video"
				}(s || (s = {}))
		},
		"./node_modules/fscreen/dist/fscreen.esm.js": function(e, t, i) {
			"use strict";
			var s = {
					fullscreenEnabled: 0,
					fullscreenElement: 1,
					requestFullscreen: 2,
					exitFullscreen: 3,
					fullscreenchange: 4,
					fullscreenerror: 5,
					fullscreen: 6
				},
				n = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
				r = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
				o = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"],
				a = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
				l = "fullscreenEnabled" in a && Object.keys(s) || n[0] in a && n || r[0] in a && r || o[0] in a && o || [],
				d = {
					requestFullscreen: function(e) {
						return e[l[s.requestFullscreen]]()
					},
					requestFullscreenFunction: function(e) {
						return e[l[s.requestFullscreen]]
					},
					get exitFullscreen() {
						return a[l[s.exitFullscreen]].bind(a)
					},
					get fullscreenPseudoClass() {
						return ":" + l[s.fullscreen]
					},
					addEventListener: function(e, t, i) {
						return a.addEventListener(l[s[e]], t, i)
					},
					removeEventListener: function(e, t, i) {
						return a.removeEventListener(l[s[e]], t, i)
					},
					get fullscreenEnabled() {
						return Boolean(a[l[s.fullscreenEnabled]])
					},
					set fullscreenEnabled(e) {},
					get fullscreenElement() {
						return a[l[s.fullscreenElement]]
					},
					set fullscreenElement(e) {},
					get onfullscreenchange() {
						return a[("on" + l[s.fullscreenchange]).toLowerCase()]
					},
					set onfullscreenchange(e) {
						return a[("on" + l[s.fullscreenchange]).toLowerCase()] = e
					},
					get onfullscreenerror() {
						return a[("on" + l[s.fullscreenerror]).toLowerCase()]
					},
					set onfullscreenerror(e) {
						return a[("on" + l[s.fullscreenerror]).toLowerCase()] = e
					}
				};
			t.a = d
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~shreddit-player.bb8ce5149625a3990b16.js.map