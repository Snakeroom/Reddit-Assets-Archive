// https://www.redditstatic.com/desktop2x/vendors~shreddit-player.969d00a312b1fd782e03.js
// Retrieved at 6/23/2023, 5:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~shreddit-player"], {
		"./node_modules/@reddit/shreddit.components.shreddit-player/dist/index.js": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "ShredditPlayer", (function() {
				return gd
			}));
			var s = i("./node_modules/lit/index.js"),
				r = i("./node_modules/lit/decorators.js"),
				n = i("./node_modules/lit-html/lit-html.js");
			const a = e => null != e ? e : n.d;
			var o = i("./node_modules/@lit/localize/lit-localize.js"),
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
					return n.c
				}
			});
			var c = i("./node_modules/@reddit/faceplate/lib/custom-event.js");
			const u = {
					rootMargin: "200px"
				},
				f = new Map;

			function g(e, t) {
				return !f.has(e) && t && f.set(e, function(e) {
					return new IntersectionObserver(e => {
						for (const t of e) {
							const e = t.target,
								i = t.isIntersecting ? Object(c.a)("faceplate-enter", t, !1) : Object(c.a)("faceplate-leave", t, !1);
							e.dispatchEvent(i)
						}
					}, e)
				}(t)), f.get(e)
			}
			class p {
				constructor(e = u) {
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
			const v = Symbol("mixins/user-action");
			var y, E, _;
			! function(e) {
				e[e.emergency = 0] = "emergency", e[e.alert = 1] = "alert", e[e.critical = 2] = "critical", e[e.error = 3] = "error", e[e.warning = 4] = "warning", e[e.notice = 5] = "notice", e[e.info = 6] = "info", e[e.success = 7] = "success", e[e.debug = 8] = "debug", e[e.none = 9] = "none"
			}(y || (y = {})),
			function(e) {
				e.Programmatic = "programmatic", e.Eager = "eager", e.Action = "action", e.Intent = "intent", e.Lazy = "lazy", e.Preload = "preload"
			}(E || (E = {})),
			function(e) {
				e.Get = "get", e.Post = "post", e.Dialog = "dialog", e.Log = "log"
			}(_ || (_ = {}));
			let b = class extends(function(e) {
				if (v in e) return e;
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
				return t[v] = !0, t
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
						this._observer || (this._observer = new p(e), this._observer.observe(this), this.addEventListener("faceplate-enter", this._handleEnter), this.addEventListener("faceplate-leave", this._handleLeave))
					}
					disableObserver() {
						this._observer && (this._observer.unobserve(this), this._observer = null, this.removeEventListener("faceplate-enter", this._handleEnter), this.removeEventListener("faceplate-leave", this._handleLeave))
					}
					observerIsIntersectingCallback(e) {}
					observerIsNotIntersectingCallback(e) {}
				}
				return t[m] = !0, t
			}(s.a))) {
				constructor() {
					super(...arguments), this.src = "", this.srcset = "", this.sizes = "", this.loading = E.Lazy, this.width = 0, this.height = 0, this.perfmark = "", this.objectfit = void 0, this.isRequestInProgress = !1
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
					this.loading === E.Lazy ? this.enableObserver() : this.loading === E.Action ? this.enableUserActions() : this.loading === E.Eager && this.loadContent()
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
					const e = this.isRequestInProgress && this.loading === E.Action;
					let t = s.c`
      <slot name=${a(e?"loading":void 0)}></slot>
    `;
					const i = this.objectfit ? h({
						objectFit: encodeURIComponent(this.objectfit)
					}) : void 0;
					return this.img && (t = s.c`
        <img
          src="${this.img.src}"
          srcset="${a(this.srcset)}"
          sizes="${a(this.sizes)}"
          alt="${a(this.alt)}"
          style="${a(i)}"
        />
      `), s.c`
      <div
        class="${this.img?"loaded":"placeholder"}"
        style="${h({width:this.width?this.width+"px":"inherit",height:this.height?this.height+"px":"inherit"})}"
        tabindex=${a(this.isActionable?0:void 0)}
      >
        ${t}
      </div>
    `
				}
			};
			Object(l.h)([Object(r.b)({
				type: String
			})], b.prototype, "src", void 0), Object(l.h)([Object(r.b)({
				type: String
			})], b.prototype, "srcset", void 0), Object(l.h)([Object(r.b)({
				type: String
			})], b.prototype, "sizes", void 0), Object(l.h)([Object(r.b)({
				type: String
			})], b.prototype, "loading", void 0), Object(l.h)([Object(r.b)({
				type: Number
			})], b.prototype, "width", void 0), Object(l.h)([Object(r.b)({
				type: Number
			})], b.prototype, "height", void 0), Object(l.h)([Object(r.b)({
				type: String
			})], b.prototype, "perfmark", void 0), Object(l.h)([Object(r.b)({
				type: String
			})], b.prototype, "objectfit", void 0), Object(l.h)([Object(r.b)({
				type: String
			})], b.prototype, "alt", void 0), b = Object(l.h)([Object(r.a)("faceplate-img")], b);
			var T = i("./node_modules/@reddit/faceplate-ui/lib/IconSize.js");
			const {
				H: S
			} = n.a, A = e => void 0 === e.strings, L = () => document.createComment(""), R = (e, t, i) => {
				var s;
				const r = e._$AA.parentNode,
					n = void 0 === t ? e._$AB : t._$AA;
				if (void 0 === i) {
					const t = r.insertBefore(L(), n),
						s = r.insertBefore(L(), n);
					i = new S(t, s, e, e.options)
				} else {
					const t = i._$AB.nextSibling,
						a = i._$AM,
						o = a !== e;
					if (o) {
						let t;
						null === (s = i._$AQ) || void 0 === s || s.call(i, e), i._$AM = e, void 0 !== i._$AP && (t = e._$AU) !== a._$AU && i._$AP(t)
					}
					if (t !== n || o) {
						let e = i._$AA;
						for (; e !== t;) {
							const t = e.nextSibling;
							r.insertBefore(e, n), e = t
						}
					}
				}
				return i
			}, w = (e, t, i = e) => (e._$AI(t, i), e), k = {}, I = e => {
				var t;
				null === (t = e._$AP) || void 0 === t || t.call(e, !1, !0);
				let i = e._$AA;
				const s = e._$AB.nextSibling;
				for (; i !== s;) {
					const e = i.nextSibling;
					i.remove(), i = e
				}
			}, D = (e, t, i) => {
				const s = new Map;
				for (let r = t; r <= i; r++) s.set(e[r], r);
				return s
			}, C = Object(d.c)(class extends d.a {
				constructor(e) {
					if (super(e), e.type !== d.b.CHILD) throw Error("repeat() can only be used in text expressions")
				}
				ht(e, t, i) {
					let s;
					void 0 === i ? i = t : void 0 !== t && (s = t);
					const r = [],
						n = [];
					let a = 0;
					for (const o of e) r[a] = s ? s(o, a) : a, n[a] = i(o, a), a++;
					return {
						values: n,
						keys: r
					}
				}
				render(e, t, i) {
					return this.ht(e, t, i).values
				}
				update(e, [t, i, s]) {
					var r;
					const a = (e => e._$AH)(e),
						{
							values: o,
							keys: l
						} = this.ht(t, i, s);
					if (!Array.isArray(a)) return this.ut = l, o;
					const d = null !== (r = this.ut) && void 0 !== r ? r : this.ut = [],
						h = [];
					let c, u, f = 0,
						g = a.length - 1,
						p = 0,
						m = o.length - 1;
					for (; f <= g && p <= m;)
						if (null === a[f]) f++;
						else if (null === a[g]) g--;
					else if (d[f] === l[p]) h[p] = w(a[f], o[p]), f++, p++;
					else if (d[g] === l[m]) h[m] = w(a[g], o[m]), g--, m--;
					else if (d[f] === l[m]) h[m] = w(a[f], o[m]), R(e, h[m + 1], a[f]), f++, m--;
					else if (d[g] === l[p]) h[p] = w(a[g], o[p]), R(e, a[f], a[g]), g--, p++;
					else if (void 0 === c && (c = D(l, p, m), u = D(d, f, g)), c.has(d[f]))
						if (c.has(d[g])) {
							const t = u.get(l[p]),
								i = void 0 !== t ? a[t] : null;
							if (null === i) {
								const t = R(e, a[f]);
								w(t, o[p]), h[p] = t
							} else h[p] = w(i, o[p]), R(e, a[f], i), a[t] = null;
							p++
						} else I(a[g]), g--;
					else I(a[f]), f++;
					for (; p <= m;) {
						const t = R(e, h[m + 1]);
						w(t, o[p]), h[p++] = t
					}
					for (; f <= g;) {
						const e = a[f++];
						null !== e && I(e)
					}
					return this.ut = l, ((e, t = k) => e._$AH = t)(e, h), n.c
				}
			});
			class P extends d.a {
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
						const r = "boolean" == typeof e ? "" : e.toString();
						i.setAttribute(s, r), this._previousAttrs.add(s)
					}
					return s.d
				}
			}
			const O = Object(d.c)(P),
				x = {
					templateRenderingStrategy: null
				};
			let M = Object.assign({}, x);
			const F = () => Object.assign({}, M),
				N = () => {
					const {
						templateRenderingStrategy: e = null
					} = F();
					if (null == e) throw new Error("Faceplate-ui templateRenderingStrategy is undefined.\n\n      Please import a templateRenderingStrategy so that faceplate-ui can render\n      template components properly for your environment. For example:\n\n      import '@reddit/faceplate-ui/templateRenderingStrategy/clientStrategy.js'\n\n      or, for a server environment:\n\n      import '@reddit/faceplate-ui/templateRenderingStrategy/serverStrategy.js'\n      ");
					return e
				};

			function U(e, t) {
				return "className" !== e && (null == t || "string" == typeof t || "number" == typeof t || "boolean" == typeof t)
			}! function(e) {
				var t;
				const i = null === (t = F().templateRenderingStrategy) || void 0 === t ? void 0 : t.getType();
				if (null != i && i !== e) throw new Error(`\nFaceplate UI templateRenderingStrategy is being set to ${e}, but it has already been set to ${i}.\ntemplateRenderingStrategy cannot be changed once it has been set because it is not possible to switch from the client to the server.\n  \nThis usually happens when mixing imports from faceplate-ui/templates/client and faceplate-ui/templates/server, since these imports\nautomatically set templateRenderingStrategy, but can also happen if multiple calls to setConfig try to set conflicting strategies.\n  `)
			}("client");
			const B = s.c,
				$ = s.g,
				V = e => {
					const t = {};
					for (const i in e) {
						const s = e[i];
						Object.prototype.hasOwnProperty.call(e, i) && U(i, s) && (t[i] = s)
					}
					return t
				};
			var G;
			G = {
				templateRenderingStrategy: {
					_toHtml_TEST_ONLY: e => {
						const t = document.createElement("div");
						return Object(s.f)(e, t), t.children[0]
					},
					attrs: e => null == e ? s.e : O(V(e)),
					getType: () => "client",
					html: B,
					ifDefined: a,
					repeat: C,
					styleMap: h,
					svg: $
				}
			}, M = Object.assign(Object.assign({}, M), G);
			const j = {
					xs: 12,
					sm: 16,
					md: 20,
					lg: 24,
					xl: 32,
					"2xl": 48
				},
				H = (e, t, i) => s => {
					var r, n, a;
					const {
						attrs: o,
						svg: l,
						ifDefined: d
					} = N(), h = null !== (r = null == s ? void 0 : s.attributes) && void 0 !== r ? r : {}, c = null !== (n = null == s ? void 0 : s.size) && void 0 !== n ? n : T.a.Medium;
					return h.xmlns = "http://www.w3.org/2000/svg", h.viewBox = t, h.width = h.height = j[c], h["icon-name"] = i, h.fill = null !== (a = null == h ? void 0 : h.fill) && void 0 !== a ? a : "currentColor", l`<svg
        rpl
        class="${d(h.className)}"
        ${o(h)}
      >${e}</svg>`
				},
				{
					svg: K
				} = N();
			var q = H(K`<path d="M9 3.375v5A.625.625 0 018.375 9h-5a.625.625 0 01-.442-1.067L4.726 6.14.714 2.127 2.128.713 6.14 4.726l1.793-1.793A.625.625 0 019 3.375zm10.332 14.543l-4.058-4.058 1.793-1.793A.626.626 0 0016.625 11h-5a.625.625 0 00-.625.625v5a.626.626 0 001.067.442l1.793-1.793 4.058 4.058 1.414-1.414z"></path>`, "0 0 20 20", "collapse-left-fill");
			const {
				svg: W
			} = N();
			var Y = H(W`<path d="M6.274 4.86l3.058 3.058-1.414 1.414L4.86 6.274 3.067 8.067A.625.625 0 012 7.625v-5A.625.625 0 012.625 2h5a.625.625 0 01.442 1.067L6.274 4.86zm11.34 6.94a.627.627 0 00-.681.136l-1.793 1.79-3.058-3.058-1.414 1.414 3.058 3.058-1.793 1.793A.625.625 0 0012.375 18h5a.624.624 0 00.625-.625v-5a.626.626 0 00-.386-.575z"></path>`, "0 0 20 20", "expand-left-fill");
			const {
				svg: z
			} = N();
			var X = H(z`<g clip-path="url(#clip0_616_22)"><path d="M4.711 12.664A2.8 2.8 0 013.6 11.583 3.108 3.108 0 013.2 10a3.052 3.052 0 01.411-1.583c.267-.46.659-.834 1.129-1.082a3.37 3.37 0 011.616-.385c.333 0 .664.043.986.128.309.081.605.205.879.369l-.5 1.169a1.314 1.314 0 00-.563-.357 2.3 2.3 0 00-.754-.124 1.733 1.733 0 00-1.863 1.848c-.006.344.073.684.232.99a1.7 1.7 0 001.542.925c.258.004.513-.051.746-.162.209-.097.387-.25.513-.443.121-.185.185-.401.183-.622H6.124V9.619L9 9.6v.928a2.4 2.4 0 01-1.293 2.193 2.955 2.955 0 01-1.417.328 3.247 3.247 0 01-1.579-.385zm5.471-5.648H11.5v5.968h-1.318V7.016zm2.862 0H16.5v1.169h-2.138v1.392h1.79v1.169h-1.79v2.238h-1.318V7.016zM10 20a18.04 18.04 0 01-6.369-1.162 4.226 4.226 0 01-2.469-2.47 18.033 18.033 0 010-12.737 4.228 4.228 0 012.469-2.469 18.116 18.116 0 0112.738 0 4.228 4.228 0 012.469 2.469 18.035 18.035 0 010 12.738 4.225 4.225 0 01-2.469 2.469A18.04 18.04 0 0110 20zm0-18.75a16.8 16.8 0 00-5.929 1.082 2.978 2.978 0 00-1.739 1.739 16.783 16.783 0 000 11.857 2.98 2.98 0 001.739 1.74 16.858 16.858 0 0011.858 0 2.978 2.978 0 001.739-1.739 16.785 16.785 0 000-11.858 2.978 2.978 0 00-1.739-1.739A16.8 16.8 0 0010 1.25z"></path></g><defs ><clipPath id="clip0_616_22"><path d="M0 0h20v20H0z"></path></clipPath></defs>`, "0 0 20 20", "gif-post-outline");
			const {
				svg: Q
			} = N();
			var J = H(Q`<path d="M6.875 19h-3.75A1.127 1.127 0 012 17.875V2.125A1.127 1.127 0 013.125 1h3.75A1.127 1.127 0 018 2.125v15.75A1.127 1.127 0 016.875 19zm10 0h-3.75A1.127 1.127 0 0112 17.875V2.125A1.127 1.127 0 0113.125 1h3.75A1.127 1.127 0 0118 2.125v15.75A1.127 1.127 0 0116.875 19z"></path>`, "0 0 20 20", "pause-fill");
			const {
				svg: Z
			} = N();
			var ee = H(Z`<path d="M4.125 19.543A1.126 1.126 0 013 18.418V1.582A1.125 1.125 0 014.735.636l13.048 8.418a1.126 1.126 0 010 1.891L4.735 19.363a1.13 1.13 0 01-.61.18z"></path>`, "0 0 20 20", "play-fill");
			const {
				svg: te
			} = N();
			var ie = H(te`<g clip-path="url(#clip0_457_79)"><path d="M16 11.5A6.5 6.5 0 119.5 5H11v1.914a1 1 0 001.665.747l3.318-2.951a1 1 0 000-1.495L12.665.265A1 1 0 0011 1.012V3H9.5a8.5 8.5 0 108.5 8.5h-2zm-2.214-7.512v-.05l.028.025-.028.025z"></path></g><defs ><clipPath id="clip0_457_79"><path d="M0 0h20v20H0z"></path></clipPath></defs>`, "0 0 20 20", "refresh-fill");
			const {
				svg: se
			} = N();
			var re = H(se`<path d="M13 13.5v-2a1.5 1.5 0 100-3v-2a3.5 3.5 0 110 7zM13 3v2a5 5 0 110 10v2a7 7 0 100-14zM10.357.252A1.091 1.091 0 009.19.405l-5.374 4.65H2.108A1.125 1.125 0 001 6.193v7.614a1.125 1.125 0 001.108 1.138h1.707l5.39 4.663a1.081 1.081 0 001.153.14A1.131 1.131 0 0011 18.715V1.285a1.13 1.13 0 00-.643-1.033z"></path>`, "0 0 20 20", "volume-fill");
			const {
				svg: ne
			} = N();
			var ae, oe, le = H(ne`<path d="M11 1.285v17.43a1.131 1.131 0 01-.642 1.033 1.081 1.081 0 01-1.153-.14l-5.39-4.663H2.108A1.125 1.125 0 011 13.807V6.193a1.125 1.125 0 011.108-1.138h1.707L9.19.405a1.09 1.09 0 011.168-.153A1.129 1.129 0 0111 1.285zm8.607 5.922l-1.414-1.414L15.9 8.086l-2.293-2.293-1.414 1.414L14.486 9.5l-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414L17.314 9.5l2.293-2.293z"></path>`, "0 0 20 20", "volume-mute-fill");
			i("./node_modules/core-js/modules/web.dom.iterable.js");

			function de() {}

			function he(e) {
				return void 0 === e
			}

			function ce(e) {
				return function(e) {
					return null === e
				}(e) || he(e)
			}

			function ue(e) {
				return "number" == typeof e && !Number.isNaN(e)
			}

			function fe(e) {
				return "string" == typeof e
			}

			function ge(e) {
				return "function" == typeof e
			}
			const pe = "undefined" != typeof window,
				me = pe ? null === (ae = window.navigator) || void 0 === ae ? void 0 : ae.userAgent.toLowerCase() : "",
				ve = /iphone|ipad|ipod|ios|CriOS|FxiOS/.test(me),
				ye = (/android/.test(me), pe && /(iPhone|iPod)/gi.test(null === (oe = window.navigator) || void 0 === oe ? void 0 : oe.platform), /firefox/.test(me), pe && !!window.chrome);
			pe && !ye && (window.safari || ve || /(apple|safari)/.test(me)), pe && "file:" !== window.location.protocol && (window.location.protocol, window.location.hostname);

			function Ee() {
				const e = null !== (t = null === (i = window) || void 0 === i ? void 0 : i.MediaSource) && void 0 !== t ? t : null === (s = window) || void 0 === s ? void 0 : s.WebKitMediaSource;
				var t, i, s;
				if (he(e)) return !1;
				const r = e && ge(e.isTypeSupported) && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
					n = null !== (a = null === (o = window) || void 0 === o ? void 0 : o.SourceBuffer) && void 0 !== a ? a : null === (l = window) || void 0 === l ? void 0 : l.WebKitSourceBuffer;
				var a, o, l;
				const d = he(n) || !he(n.prototype) && ge(n.prototype.appendBuffer) && ge(n.prototype.remove);
				return !!r && !!d
			}

			function _e(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pe;
				const s = i && !he(window.customElements.get(e));
				i && !s && window.customElements.define(e, t)
			}

			function be(e, t, i) {
				if (ce(i) || !1 === i) e.removeAttribute(t);
				else {
					const s = fe(i) ? i : "";
					e.setAttribute(t, s)
				}
			}

			function Te(e, t, i) {
				e.hasAttribute(t) || e.setAttribute(t, i)
			}

			function Se(e, t, i) {
				let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vds";
				e.style.setProperty(`--${s}-${t}`, i || null)
			}
			var Ae = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");
			class Le extends CustomEvent {
				constructor(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					super(e, t), this.triggerEvent = t.triggerEvent, this.hasOwnProperty("originEvent") || Object.defineProperties(this, {
						originEvent: {
							get() {
								var e;
								return null !== (e = we(this)) && void 0 !== e ? e : this
							}
						},
						isOriginTrusted: {
							get() {
								var e, t;
								return null !== (e = null === (t = we(this)) || void 0 === t ? void 0 : t.isTrusted) && void 0 !== e && e
							}
						}
					})
				}
				get originEvent() {
					var e;
					return null !== (e = we(this)) && void 0 !== e ? e : this
				}
				get isOriginTrusted() {
					var e, t;
					return null !== (e = null === (t = this.originEvent) || void 0 === t ? void 0 : t.isTrusted) && void 0 !== e && e
				}
			}

			function Re(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return new Le(e, t)
			}

			function we(e) {
				let t = e.triggerEvent;
				for (; t && t.triggerEvent;) t = t.triggerEvent;
				return t
			}

			function ke(e, t) {
				var i;
				(null !== (i = we(e)) && void 0 !== i ? i : e).triggerEvent = t
			}
			const Ie = new Map,
				De = new Map;

			function Ce(e, t, i) {
				const s = {
					host: e,
					callback: i
				};
				e.addController({
					hostConnected: () => {
						var r;
						for (const {
								element: s,
								onDisconnect: n
							} of function(e, t) {
								var i;
								return Array.from(null !== (i = De.get(t)) && void 0 !== i ? i : []).filter(t => {
									let {
										element: i
									} = t;
									return e !== i && e.contains(i)
								})
							}(e, t)) i(s, n);
						Ie.set(t, (null !== (r = Ie.get(t)) && void 0 !== r ? r : new Set).add(s))
					},
					hostDisconnected: () => {
						var e;
						null === (e = Ie.get(t)) || void 0 === e || e.delete(s)
					}
				})
			}

			function Pe(e, t) {
				const i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).register,
					s = new Ae.a,
					r = e => {
						s.add(e)
					},
					n = {
						element: e,
						onDisconnect: r
					};
				e.addController({
					hostConnected() {
						const s = Re(t, {
							bubbles: !0,
							composed: !0,
							detail: n
						});
						var a;
						(e.dispatchEvent(s), i) && (De.set(i, (null !== (a = De.get(i)) && void 0 !== a ? a : new Set).add(n)), function(e, t, i) {
							for (const {
									host: r,
									callback: n
								} of Array.from(null !== (s = Ie.get(t)) && void 0 !== s ? s : [])) {
								var s;
								r !== e && r.contains(e) && n(e, i)
							}
						}(e, i, r))
					},
					hostDisconnected() {
						var e;
						(s.empty(), i) && (null === (e = De.get(i)) || void 0 === e || e.delete(n))
					}
				})
			}
			var Oe, xe = function(e, t, i) {
				var s = null,
					r = null,
					n = function() {
						s && (clearTimeout(s), r = null, s = null)
					},
					a = function() {
						if (!t) return e.apply(this, arguments);
						var a = this,
							o = arguments,
							l = i && !s;
						return n(), r = function() {
							e.apply(a, o)
						}, s = setTimeout((function() {
							if (s = null, !l) {
								var e = r;
								return r = null, e()
							}
						}), t), l ? r() : void 0
					};
				return a.cancel = n, a.flush = function() {
					var e = r;
					n(), e && e()
				}, a
			};
			! function(e) {
				e.AdRefocusStart = "time-before-unfocus", e.CatInTheAppUi = "cat-in-the-app-ui", e.LastClickedAdId = "last-clicked-ad-id", e.ImpressionId = "last-clicked-impression-id", e.RecentPages = "recent-subreddits-store", e.FeatureTestLocalStorageKey = "🤘shreddit_local_storage_feature_test🤘", e.DisclaimerStore = "disclaimer_store", e.GoodVisit = "good-visit-status", e.GoodVisitFS = "good-visit-feeds-search", e.ModalBlocking = "modal-blocking-status", e.XpromoConsolidation = "xpromo-consolidation", e.XpromoEducationalDeeplinkPrompt = "xpromo-educational-deeplink-prompt"
			}(Oe || (Oe = {}));
			const Me = new class {
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
					return this.setItem(Oe.FeatureTestLocalStorageKey, "yes"), "yes" === this.getItem(Oe.FeatureTestLocalStorageKey)
				}
			};

			function Fe() {
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
			class Ne {
				constructor() {
					this._requestQueue = new Map, this._requestKeys = [], this._pendingFlush = Fe(), this._isServing = !1
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
					this._pendingFlush.resolve(), this._pendingFlush = Fe()
				}
				stop() {
					this._isServing = !1
				}
				destroy() {
					this.stop(), this._empty(), this._release()
				}
			}

			function Ue(e) {
				return "symbol" == typeof(null == e ? void 0 : e.id) && "@vidstack/context" === e.id.description
			}

			function Be(e) {
				return Object.keys(e)
			}
			const $e = [];

			function Ve(e) {
				let t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : de;
				const s = new Set;

				function r(i) {
					if (n = i, ((r = e) != r ? n == n : r !== n || r && "object" == typeof r || "function" == typeof r) && (e = i, t)) {
						const t = !$e.length;
						for (const i of s) i[1](), $e.push(i, e);
						if (t) {
							for (let e = 0; e < $e.length; e += 2) $e[e][0]($e[e + 1]);
							$e.length = 0
						}
					}
					var r, n
				}
				return {
					initialValue: e,
					set: r,
					update: function(t) {
						r(t(e))
					},
					subscribe: function(n) {
						const a = [n, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : de];
						return s.add(a), 1 === s.size && (t = i(r) || de), n(e), () => {
							var e;
							(s.delete(a), 0 === s.size) && (null === (e = t) || void 0 === e || e(), t = null)
						}
					}
				}
			}

			function Ge(e, t, i) {
				const s = !Array.isArray(e),
					r = s ? [e] : e,
					n = t.length < 2;
				return {
					initialValue: a = i,
					subscribe: Ve(a, e => {
						let i = !1;
						const a = [];
						let o = 0,
							l = de;
						const d = () => {
								if (o) return;
								l();
								const i = t(s ? a[0] : a, e);
								n ? e(i) : l = ge(i) ? i : de
							},
							h = r.map((e, t) => e.subscribe(e => {
								a[t] = e, o &= ~(1 << t), i && d()
							}, () => {
								o |= 1 << t
							}));
						return i = !0, d(),
							function() {
								h.forEach(e => e()), l()
							}
					}).subscribe
				};
				var a
			}

			function je(e) {
				let t;
				return e.subscribe(e => t = e)(), t
			}

			function He(e, t, i) {
				let s, r;
				const n = () => {
					var e, n, a;
					r = null === (e = null !== (n = null === (a = s) || void 0 === a ? void 0 : a.value) && void 0 !== n ? n : t) || void 0 === e ? void 0 : e.subscribe(i)
				};
				Ue(t) && (s = t.consume(e)), e.addController({
					hostConnected() {
						Ue(t) ? s.whenRegistered(n) : n()
					},
					hostDisconnected() {
						var e;
						null === (e = r) || void 0 === e || e()
					}
				})
			}

			function Ke(e, t, i, s) {
				if (!Ue(t)) return He(e, t[i], s); {
					const r = t.consume(e);
					let n;
					const a = () => {
						n = r.value[i].subscribe(s)
					};
					e.addController({
						hostConnected: () => {
							r.whenRegistered(a)
						},
						hostDisconnected: () => {
							var e;
							null === (e = n) || void 0 === e || e()
						}
					})
				}
			}

			function qe(e) {
				return new Proxy(e, {
					get: (e, t) => je(e[t]),
					has: (e, t) => Reflect.has(e, t),
					ownKeys: e => Reflect.ownKeys(e),
					getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e, t)
				})
			}

			function We(e) {
				const t = new Ne;
				return e.addController({
					hostConnected: t.start.bind(t),
					hostDisconnected: t.destroy.bind(t)
				}), t
			}
			class Ye {
				constructor(e) {
					this._host = e, this._isScreenOrientationLocked = !1, this._updateScreenOrientation(), this._listenerDisposal = new Ae.a, e.addController({
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
					return pe && !he(screen.orientation) && ge(screen.orientation.lock) && ge(screen.orientation.unlock)
				}
				get isLocked() {
					return this._isScreenOrientationLocked
				}
				async lock(e) {
					this._throwIfScreenOrientationUnavailable(), await screen.orientation.lock(e), this._isScreenOrientationLocked = !0, this._host.dispatchEvent(Re("vds-screen-orientation-lock-change", {
						bubbles: !0,
						composed: !0,
						detail: e
					}))
				}
				async unlock() {
					this._throwIfScreenOrientationUnavailable(), await screen.orientation.unlock(), this._isScreenOrientationLocked = !1, this._host.dispatchEvent(Re("vds-screen-orientation-lock-change", {
						bubbles: !0,
						composed: !0,
						detail: screen.orientation.type
					}))
				}
				_addScreenOrientationEventListeners() {
					this.canOrient && this._listenerDisposal.add(this._addScreenOrientationChangeEventListener())
				}
				_addScreenOrientationChangeEventListener() {
					return Object(Ae.e)(screen.orientation, "change", this._handleOrientationChange.bind(this))
				}
				_handleOrientationChange(e) {
					this._screenOrientation = window.screen.orientation.type, this._host.dispatchEvent(Re("vds-screen-orientation-change", {
						bubbles: !0,
						composed: !0,
						detail: this._screenOrientation,
						triggerEvent: e
					}))
				}
				_updateScreenOrientation() {
					var e, t;
					this._screenOrientation = pe ? null === (e = window.screen) || void 0 === e ? void 0 : null === (t = e.orientation) || void 0 === t ? void 0 : t.type : void 0
				}
				_throwIfScreenOrientationUnavailable() {
					if (!this.canOrient) throw Error("Screen orientation API is not available.")
				}
			}
			var ze = i("./node_modules/fscreen/dist/fscreen.esm.js");
			class Xe {
				constructor(e, t) {
					this._host = e, this._screenOrientationController = t, this._listenerDisposal = new Ae.a, e.addController({
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
					return ze.a.fullscreenEnabled
				}
				get isFullscreen() {
					return this.isNativeFullscreen
				}
				get isNativeFullscreen() {
					if (ze.a.fullscreenElement === this._host) return !0;
					try {
						return this._host.matches(ze.a.fullscreenPseudoClass)
					} catch (e) {
						return !1
					}
				}
				_addFullscreenChangeEventListener(e) {
					if (!this.isSupported) return de;
					const t = Object(Ae.e)(ze.a, "fullscreenchange", e);
					return () => {
						t()
					}
				}
				_addFullscreenErrorEventListener(e) {
					if (!this.isSupported) return de;
					const t = Object(Ae.e)(ze.a, "fullscreenerror", e);
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
					return ze.a.requestFullscreen(this._host)
				}
				_handleFullscreenChange(e) {
					this.isFullscreen || this._listenerDisposal.empty(), this._host.dispatchEvent(Re("vds-fullscreen-change", {
						bubbles: !0,
						composed: !0,
						detail: this.isFullscreen,
						triggerEvent: e
					}))
				}
				_handleFullscreenError(e) {
					this._host.dispatchEvent(Re("vds-fullscreen-error", {
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
					return ze.a.exitFullscreen()
				}
				_shouldOrientScreen() {
					return this._screenOrientationController.canOrient && !he(this.screenOrientationLock)
				}
				async _lockScreenOrientation() {
					!he(this.screenOrientationLock) && this._shouldOrientScreen() && await this._screenOrientationController.lock(this.screenOrientationLock)
				}
				async _unlockScreenOrientation() {
					this._shouldOrientScreen() && await this._screenOrientationController.unlock()
				}
				_throwIfNoFullscreenSupport() {
					if (!this.isSupported) throw Error("Fullscreen API is not enabled or supported in this environment.")
				}
			}
			class Qe {
				constructor(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
					this._skipInitial = !1, this._unobservedUpdate = !1, this._host = e, this._callback = i;
					const {
						target: s,
						skipInitial: r,
						...n
					} = t;
					this._target = null != s ? s : void 0, this._skipInitial = null != r ? r : this._skipInitial, window.IntersectionObserver && (this._observer = new IntersectionObserver(e => {
						const t = this._unobservedUpdate;
						this._unobservedUpdate = !1, this._skipInitial && t || (this.handleChanges(e), this._host.requestUpdate())
					}, n), e.addController(this))
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

			function Je() {
				for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
				return new Qe(...t)
			}

			function Ze(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
				return Number(e.toFixed(t))
			}

			function et(e, t, i) {
				return Math.max(e, Math.min(i, t))
			}

			function tt(e) {
				var t, i;
				return null !== (t = null === (i = String(e).split(".")[1]) || void 0 === i ? void 0 : i.length) && void 0 !== t ? t : 0
			}
			const it = new Map;
			class st {
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
					if (this._host.dispatchEvent(Re("vds-context-consumer-connect", {
							bubbles: !0,
							composed: !0,
							detail: {
								id: this.id,
								setValue: e
							}
						})), !this.registered) {
						var t;
						const i = null !== (t = it.get(this.id)) && void 0 !== t ? t : [];
						i.push({
							host: this._host,
							setValue: e
						}), it.set(this.id, i)
					}
				}
				whenRegistered(e) {
					var t;
					this.registered ? e(this.value) : null === (t = this._registrationCallbacks) || void 0 === t || t.push(e)
				}
			}
			class rt {
				constructor(e, t, i) {
					this._host = e, this._initValue = t, this._options = i, this._stopDisposal = new Ae.a, this._value = t(), e.addController({
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
					const e = Object(Ae.e)(this._host, "vds-context-consumer-connect", this._handleConsumerConnect.bind(this));
					for (const t of function(e, t) {
							var i;
							const s = null !== (i = it.get(e)) && void 0 !== i ? i : [],
								r = s.filter(e => {
									let {
										host: i
									} = e;
									return t.contains(i)
								});
							return it.set(e, s.filter(e => {
								let {
									host: i
								} = e;
								return !t.contains(i)
							})), r
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

			function nt(e) {
				const t = Symbol("@vidstack/context");
				return {
					id: t,
					consume: i => new st(i, e(), {
						id: t
					}),
					provide: i => new rt(i, e, {
						id: t
					})
				}
			}
			var at, ot = i("./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js");

			function lt(e, t, i, s) {
				return function(e, t, i) {
					if (!ue(t) || t < 0 || t > i) throw new Error(`Failed to execute '${e}' on 'TimeRanges': The index provided (${t}) is non-numeric or out of bounds (0-${i}).`)
				}(e, s, i.length - 1), i[s][t]
			}

			function dt(e) {
				if (he(e) || 0 === e.length) {
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
					start: lt.bind(null, "start", 0, e),
					end: lt.bind(null, "end", 1, e)
				}
			}

			function ht(e, t) {
				return i = e, Array.isArray(i) ? dt(e) : he(e) || he(t) ? dt() : dt([
					[e, t]
				]);
				var i
			}! function(e) {
				e.Unknown = "unknown", e.Audio = "audio", e.Video = "video"
			}(at || (at = {}));
			const ct = {
				autoplay: !1,
				autoplayError: void 0,
				buffered: ht(),
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
				mediaType: ot.a.Unknown,
				muted: !1,
				paused: !0,
				played: ht(),
				playing: !1,
				playsinline: !1,
				seekable: ht(),
				seekableAmount: 0,
				seeking: !1,
				src: [],
				started: !1,
				viewType: at.Unknown,
				volume: 1,
				waiting: !1
			};

			function ut() {
				const e = {};
				for (const t of Be(ct)) e[t] = Ve(ct[t]);
				return e
			}
			const ft = new Set(["autoplay", "canFullscreen", "canLoad", "controls", "currentSrc", "loop", "muted", "playsinline", "poster", "src", "viewType", "volume"]);
			const gt = nt(ut);

			function pt(e, t, i) {
				return Ke(e, gt, t, i)
			}
			var mt = function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				return n > 3 && a && Object.defineProperty(t, i, a), a
			};
			const vt = Symbol("@vidstack/media-provider-discovery");
			class yt extends s.a {
				constructor() {
					super(), this._disconnectDisposal = new Ae.a, this.manualPaused = !1, this.loading = "lazy", this._attemptingAutoplay = !1, this.muteToggledManually = !1, this.controllerQueue = new Ne, this._store = ut(), this._state = qe(this._store), this.connectedQueue = We(this), this.mediaQueue = new Ne, this.screenOrientationController = new Ye(this), this.fullscreenController = new Xe(this, this.screenOrientationController), Pe(this, "vds-media-provider-connect", {
						register: vt
					});
					const e = Je(this, {
						target: this,
						threshold: 0,
						delay: 250
					}, t => {
						var i;
						null !== (i = t[0]) && void 0 !== i && i.isIntersecting && "lazy" === this.loading && (this.startLoadingMedia(), e.hostDisconnected())
					})
				}
				connectedCallback() {
					super.connectedCallback(), window.requestAnimationFrame(() => {
						he(this.canLoadPoster) && (this.canLoadPoster = !0)
					})
				}
				firstUpdated(e) {
					super.firstUpdated(e), this.dispatchEvent(Re("vds-fullscreen-support-change", {
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
							i = et(0, e, 1);
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
					t !== e && (this.dispatchEvent(Re("vds-poster-change", {
						detail: e
					})), this.requestUpdate("poster", t))
				}
				get loop() {
					return this.state.loop
				}
				set loop(e) {
					const t = this.loop;
					t !== e && (this.dispatchEvent(Re("vds-loop-change", {
						detail: e
					})), this.requestUpdate("loop", t))
				}
				get controls() {
					return this.state.controls
				}
				set controls(e) {
					const t = this.controls;
					t !== e && (this.dispatchEvent(Re("vds-controls-change", {
						detail: e
					})), this.requestUpdate("controls", t))
				}
				get canLoad() {
					return this.state.canLoad
				}
				startLoadingMedia() {
					this.controllerQueue, this.dispatchEvent(Re("vds-can-load")), this.autoplay ? this.dispatchEvent(Re("vds-can-autoplay")) : this.dispatchEvent(Re("vds-manual-load"))
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
					this.state.canPlay || (this.dispatchEvent(Re("vds-can-play", {
						triggerEvent: t,
						detail: {
							duration: i
						}
					})), this.mediaQueue.start())
				}
				_handleCurrentSrcChange(e, t) {
					this.state.currentSrc !== e && (this.mediaQueue.stop(), this.dispatchEvent(Re("vds-current-src-change", {
						detail: e,
						triggerEvent: t
					})))
				}
				get autoplay() {
					return this.state.autoplay
				}
				set autoplay(e) {
					this.autoplay !== e && (this.dispatchEvent(Re("vds-autoplay-change", {
						detail: e
					})), this.requestUpdate("autoplay", !e))
				}
				get _canAttemptAutoplay() {
					return this.state.canPlay && this.state.autoplay && !this.state.started && !this.state.error
				}
				async attemptAutoplay() {
					if (this._canAttemptAutoplay) {
						this._attemptingAutoplay = !0;
						try {
							this.dispatchEvent(Re("vds-autoplay", {
								detail: {
									muted: this.muted
								}
							})), await this.play()
						} catch (e) {
							this.dispatchEvent(Re("vds-autoplay-fail", {
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
						this.controllerQueue.destroy(), this._controller = void 0, this._store = ut(), this._state = qe(this._store)
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
			mt([Object(r.b)({
				type: Number,
				reflect: !0
			})], yt.prototype, "volume", null), mt([Object(r.b)({
				type: Boolean,
				reflect: !0
			})], yt.prototype, "paused", null), mt([Object(r.b)({
				type: Boolean
			})], yt.prototype, "manualPaused", void 0), mt([Object(r.b)({
				type: Number
			})], yt.prototype, "currentTime", null), mt([Object(r.b)({
				type: Boolean,
				reflect: !0
			})], yt.prototype, "muted", null), mt([Object(r.b)({
				reflect: !0
			})], yt.prototype, "poster", null), mt([Object(r.b)({
				type: Boolean,
				reflect: !0
			})], yt.prototype, "loop", null), mt([Object(r.b)({
				type: Boolean,
				reflect: !0
			})], yt.prototype, "controls", null), mt([Object(r.d)()], yt.prototype, "canLoadPoster", void 0), mt([Object(r.b)({
				attribute: "loading"
			})], yt.prototype, "loading", void 0), mt([Object(r.b)({
				type: Boolean,
				reflect: !0
			})], yt.prototype, "autoplay", null), mt([Object(r.b)({
				attribute: "idle-delay",
				type: Number
			})], yt.prototype, "idleDelay", null), mt([Object(r.b)({
				attribute: "fullscreen-orientation"
			})], yt.prototype, "fullscreenOrientation", null);
			var Et = function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				return n > 3 && a && Object.defineProperty(t, i, a), a
			};
			const _t = "@reddit/shreddit-player-media-volume",
				bt = new Set;
			let Tt = !1,
				St = !1;
			class At extends s.a {
				constructor() {
					super(), this.singlePlayback = !1, this.syncVolume = !1, this._providerDisposal = new Ae.a, Ce(this, vt, (e, t) => {
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
					if (this._provider = e, bt.add(e), this.singlePlayback) {
						const t = Object(Ae.e)(e, "vds-play", this._handleMediaPlay.bind(this));
						this._providerDisposal.add(t)
					}
					if (this.syncVolume) {
						const t = Object(Ae.e)(e, "vds-volume-change", xe(this._handleMediaVolumeChange.bind(this), 10, !0));
						this._providerDisposal.add(t)
					}
					window.requestAnimationFrame(() => {
						if (this._provider) {
							const e = this._getSavedMediaVolume();
							if (ue(null == e ? void 0 : e.volume) && (this._provider.volume = e.volume), this._provider.autoplay)
								if (!1 === (null == e ? void 0 : e.muted)) {
									const e = [...bt].some(e => e.muteToggledManually);
									this._provider.muted = !e
								} else this._provider.muted = !0;
							else he(null == e ? void 0 : e.muted) || (this._provider.muted = e.muted)
						}
					}), t(() => {
						bt.delete(e), this._provider = void 0, this._providerDisposal.empty()
					})
				}
				_handleMediaPlay() {
					Tt || (Tt = !0, bt.forEach(e => {
						e !== this._provider && (e.paused = !0)
					}), Tt = !1)
				}
				_handleMediaVolumeChange(e) {
					if (St) return;
					St = !0;
					const {
						volume: t,
						muted: i
					} = e.detail;
					bt.forEach(e => {
						e !== this._provider && (e.volume = t, e.muted = i)
					}), this.dispatchEvent(Re("vds-media-volume-sync", {
						bubbles: !0,
						composed: !0,
						detail: e.detail
					})), St = !1
				}
				_getSavedMediaVolume() {
					try {
						return JSON.parse(Me.getItem(_t))
					} catch (e) {
						return
					}
				}
			}
			Et([Object(r.b)({
				type: Boolean,
				attribute: "single-playback"
			})], At.prototype, "singlePlayback", void 0), Et([Object(r.b)({
				type: Boolean,
				attribute: "sync-volume"
			})], At.prototype, "syncVolume", void 0), _e("vds-media-sync", At);
			var Lt = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js"),
				Rt = function(e, t, i, s) {
					var r, n = arguments.length,
						a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
					if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
					else
						for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
					return n > 3 && a && Object.defineProperty(t, i, a), a
				};
			class wt extends s.a {
				constructor() {
					super(), this.viewportEnterDelay = 0, this.pageChangeType = "state", this.pageEnterDelay = 0, this.intersectionThreshold = 1, this._isIntersecting = !1, this._providerDisposal = new Ae.a, this.pageController = new Lt.a(this, e => {
						let {
							state: t,
							visibility: i
						} = e;
						if (window.clearTimeout(this._pageTimeout), !this.isIntersecting) return;
						"hidden" === ("state" === this.pageChangeType ? t : i) ? this._triggerOnExit(this.exitPage): this.enterViewport && (this._pageTimeout = window.setTimeout(() => {
							this._triggerOnEnter(this.enterPage), this._pageTimeout = void 0
						}, this.pageEnterDelay)), this._dispatchVisibilityChange()
					}), Ce(this, vt, (e, t) => {
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
					super.disconnectedCallback(), this._providerDisposal.empty()
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
					return new Qe(this, {
						root: this.intersectionRoot ? document.querySelector(this.intersectionRoot) : null,
						threshold: this.intersectionThreshold,
						delay: this.viewportEnterDelay
					}, e => {
						const t = e[0];
						this._isIntersecting = t.isIntersecting, t.isIntersecting ? this._triggerOnEnter(this.enterViewport) : this.exitViewport && this._triggerOnExit(this.exitViewport), this._dispatchVisibilityChange()
					})
				}
				initializeScrollListener() {
					this._scrollListener = xe(() => {
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
					this._provider && this.dispatchEvent(Re("vds-media-visibility-change", {
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
			Rt([Object(r.b)({
				attribute: "enter-viewport"
			})], wt.prototype, "enterViewport", void 0), Rt([Object(r.b)({
				attribute: "exit-viewport"
			})], wt.prototype, "exitViewport", void 0), Rt([Object(r.b)({
				type: Number,
				attribute: "viewport-enter-delay"
			})], wt.prototype, "viewportEnterDelay", void 0), Rt([Object(r.b)({
				attribute: "enter-page"
			})], wt.prototype, "enterPage", void 0), Rt([Object(r.b)({
				attribute: "exit-page"
			})], wt.prototype, "exitPage", void 0), Rt([Object(r.b)({
				attribute: "page-change-type"
			})], wt.prototype, "pageChangeType", void 0), Rt([Object(r.b)({
				type: Number,
				attribute: "page-enter-delay"
			})], wt.prototype, "pageEnterDelay", void 0), Rt([Object(r.b)({
				attribute: "intersection-root"
			})], wt.prototype, "intersectionRoot", void 0), Rt([Object(r.b)({
				type: Number,
				attribute: "intersection-threshold"
			})], wt.prototype, "intersectionThreshold", void 0), _e("vds-media-visibility", wt);
			var kt = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js"),
				It = function(e, t, i) {
					var s = null,
						r = null,
						n = i && i.leading,
						a = i && i.trailing;
					null == n && (n = !0);
					null == a && (a = !n);
					1 == n && (a = !1);
					var o = function() {
							s && (clearTimeout(s), s = null)
						},
						l = function() {
							var i = n && !s,
								o = this,
								l = arguments;
							if (r = function() {
									return e.apply(o, l)
								}, s || (s = setTimeout((function() {
									if (s = null, a) return r()
								}), t)), i) return i = !1, r()
						};
					return l.cancel = o, l.flush = function() {
						var e = r;
						o(), e && e()
					}, l
				};
			const Dt = nt(() => Ve(void 0));
			class Ct {
				constructor(e, t) {
					this._host = e, this._mediaStore = t, this._idle = !1, this._mediaPaused = !1, this._idlingPaused = !1, this._isMouseOverMedia = !0, this._isMouseOverUIControls = !1, this._disposal = new Ae.a, this.delay = 1500, e.addController(this)
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
						const t = Object(Ae.e)(this._host, e, xe(this._handleIdleChange.bind(this), 1, !0));
						this._disposal.add(t)
					});
					const t = Object(Ae.e)(this._host, "mouseenter", () => {
							this._isMouseOverMedia = !0
						}),
						i = Object(Ae.e)(this._host, "mouseleave", () => {
							this._isMouseOverMedia = !1, this._handleIdleChange()
						});
					this._disposal.add(t), this._disposal.add(i);
					const s = null === (e = this._host) || void 0 === e ? void 0 : e.querySelector(".disappearing-controls");
					if (s) {
						const e = Object(Ae.e)(s, "mouseenter", () => {
								this._isMouseOverUIControls = !0
							}),
							t = Object(Ae.e)(s, "mouseleave", () => {
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
					this._idle !== e && (this._host.dispatchEvent(Re("vds-user-idle-change", {
						detail: e
					})), this._idle = e)
				}
			}
			class Pt {
				constructor(e) {
					this._host = e, this._disconnectDisposal = new Ae.a, this.providerQueue = new Ne, this.providerDisposal = new Ae.a, this._providerContext = Dt.provide(this._host), this._mediaStoreProvider = gt.provide(this._host), this.state = qe(this._store), this._handleIdleChange = Object(kt.a)(this._host, "vds-user-idle-change", e => {
						this._store.userIdle.set(e.detail), this._satisfyMediaRequest("userIdle", e)
					}), this._pendingMediaRequests = {
						play: [],
						pause: [],
						volume: [],
						fullscreen: [],
						seeked: [],
						seeking: [],
						userIdle: []
					}, this._handleMuteRequest = Object(kt.a)(this._host, "vds-mute-request", this._createMediaRequestHandler("muted", e => {
						this.state.muted || (this._pendingMediaRequests.volume.push(e), this.provider.muted = !0, this.provider.muteToggledManually = !0, this._persistVolumeSetting({
							volume: this.state.volume,
							muted: !0
						}))
					})), this._handleUnmuteRequest = Object(kt.a)(this._host, "vds-unmute-request", this._createMediaRequestHandler("muted", e => {
						this.state.muted && (this._pendingMediaRequests.volume.push(e), this.provider.muted = !1, this.provider.muteToggledManually = !0, this._persistVolumeSetting({
							volume: this.state.volume,
							muted: !1
						}), 0 === this.state.volume && (this._pendingMediaRequests.volume.push(e), this.provider.volume = .25))
					})), this._handlePlayRequest = Object(kt.a)(this._host, "vds-play-request", this._createMediaRequestHandler("paused", e => {
						this.state.paused && (this._pendingMediaRequests.play.push(e), this.provider.paused = !1, this.provider.manualPaused = !1)
					})), this._handlePauseRequest = Object(kt.a)(this._host, "vds-pause-request", this._createMediaRequestHandler("paused", e => {
						this.state.paused || (this._pendingMediaRequests.pause.push(e), this.provider.paused = !0, this.provider.manualPaused = !0)
					})), this._isSeekingRequestPending = !1, this._handleSeekingRequest = Object(kt.a)(this._host, "vds-seeking-request", this._createMediaRequestHandler("seeking", e => {
						this._stopWaiting(), this._pendingMediaRequests.seeking.push(e), this._isSeekingRequestPending = !0, this._store.seeking.set(!0)
					})), this._handleSeekRequest = Object(kt.a)(this._host, "vds-seek-request", this._createMediaRequestHandler("seeking", e => {
						this.store.ended && (this._isReplay = !0), this._pendingMediaRequests.seeked.push(e), this._isSeekingRequestPending = !1;
						let t = e.detail;
						this.state.duration - e.detail < .25 && (t = this.state.duration), this.provider.currentTime = t
					})), this._handleVolumeChangeRequest = Object(kt.a)(this._host, "vds-volume-change-request", this._createMediaRequestHandler("volume", e => {
						const t = e.detail;
						this.state.volume !== t && (this._pendingMediaRequests.volume.push(e), this.provider.volume = t, t > 0 && this.state.muted && (this.provider.muted = !1), this._persistVolumeSetting({
							volume: t,
							muted: 0 === t
						}))
					})), this._handleEnterFullscreenRequest = Object(kt.a)(this._host, "vds-enter-fullscreen-request", this._createMediaRequestHandler("fullscreen", async e => {
						var t;
						if (this.state.fullscreen) return;
						var i, s;
						"media" === (null !== (t = e.detail) && void 0 !== t ? t : "media") && this._host.canFullscreen ? (this._pendingMediaRequests.fullscreen.push(e), await (null === (i = (s = this._host).enterFullscreen) || void 0 === i ? void 0 : i.call(s))) : this.provider && (this._pendingMediaRequests.fullscreen.push(e), await this.provider.enterFullscreen())
					})), this._handleExitFullscreenRequest = Object(kt.a)(this._host, "vds-exit-fullscreen-request", this._createMediaRequestHandler("fullscreen", async e => {
						var t;
						if (!this.state.fullscreen) return;
						var i, s;
						"media" === (null !== (t = e.detail) && void 0 !== t ? t : "media") && this._host.canFullscreen ? (this._pendingMediaRequests.fullscreen.push(e), await (null === (i = (s = this._host).exitFullscreen) || void 0 === i ? void 0 : i.call(s))) : this.provider && (this._pendingMediaRequests.fullscreen.push(e), await this.provider.exitFullscreen())
					})), this._handleResumeIdlingRequest = Object(kt.a)(this._host, "vds-resume-user-idle-request", e => {
						this._mediaRequestEventGateway(e) && (this._pendingMediaRequests.userIdle.push(e), this._userIdleController && (this._userIdleController.paused = !1))
					}), this._handlePauseIdlingRequest = Object(kt.a)(this._host, "vds-pause-user-idle-request", e => {
						this._mediaRequestEventGateway(e) && (this._pendingMediaRequests.userIdle.push(e), this._userIdleController && (this._userIdleController.paused = !0))
					}), this._handleShowPosterRequest = Object(kt.a)(this._host, "vds-show-poster-request", this._createMediaRequestHandler("poster", () => {
						this._provider.canLoadPoster = !0
					})), this._handleHidePosterRequest = Object(kt.a)(this._host, "vds-hide-poster-request", this._createMediaRequestHandler("poster", () => {
						this._provider.canLoadPoster = !1
					})), this._handleLoopRequest = Object(kt.a)(this._host, "vds-loop-request", this._createMediaRequestHandler("loop", () => {
						window.requestAnimationFrame(async () => {
							try {
								this._isLooping = !0, this._isReplay = !0, await this._provider.play()
							} catch (e) {
								this._isReplay = !1, this._isLooping = !1
							}
						})
					})), this._handleManualHlsLevelChange = Object(kt.a)(this._host, "vds-hls-manual-level-change", this._createMediaRequestHandler("hls-level-change", e => {
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
					})), this._handleFullscreenChange = Object(kt.a)(this._host, "vds-fullscreen-change", e => {
						var t;
						this._store.fullscreen.set(e.detail), e.target === this._host && (this._satisfyMediaRequest("fullscreen", e), null === (t = this._provider) || void 0 === t || t.dispatchEvent(Re("vds-fullscreen-change", {
							detail: e.detail,
							triggerEvent: e
						})))
					}), this._handleFullscreenError = Object(kt.a)(this._host, "vds-fullscreen-error", e => {
						var t;
						e.target === this._host && (this._satisfyMediaRequest("fullscreen", e), null === (t = this._provider) || void 0 === t || t.dispatchEvent(Re("vds-fullscreen-error", {
							detail: e.detail,
							triggerEvent: e
						})))
					}), this._isReplay = !1, this._isLooping = !1, this._firingWaiting = !1, this._mediaEvents = [], this._handleSeeking = It(e => {
						this._mediaEvents.push(e), this._store.seeking.set(!0), this._store.currentTime.set(e.detail), this._satisfyMediaRequest("seeking", e)
					}, 150, {
						leading: !0
					}), this._fireWaiting = xe(() => {
						var e;
						if (!this._originalWaitingEvent) return;
						this._firingWaiting = !0;
						const t = Re("vds-waiting", this._originalWaitingEvent);
						this._mediaEvents.push(t), this._store.waiting.set(!0), this._store.playing.set(!1), null === (e = this._provider) || void 0 === e || e.dispatchEvent(t), this._originalWaitingEvent = void 0, this._firingWaiting = !1
					}, 300), this._skipInitialSrcChange = !0, Ce(e, vt, (e, t) => {
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
					ce(this.provider) && this.provider !== e && (this._handleMediaProviderDisconnect(), this._provider = e, this._providerContext.value.set(e), function(e, t) {
						for (const i of Be(e)) {
							const s = e[i],
								r = t[i];
							if (!s || !r) continue;
							const n = je(s);
							n !== je(r) && r.set(n)
						}
					}(this._provider._store, this._store), this._attachMediaEventListeners(), e.attachMediaController(this, e => this._disconnectDisposal.add(e)), this._flushMediaProviderConnectedQueue(), t(this._handleMediaProviderDisconnect.bind(this)))
				}
				_handleMediaProviderDisconnect() {
					ce(this.provider) || (this.providerQueue.destroy(), this.providerDisposal.empty(), this._provider = void 0, this._providerContext.value.set(void 0), function(e) {
						for (const t of Be(ct)) e[t].set(ct[t])
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
					Be(this._pendingMediaRequests).forEach(e => {
						this._pendingMediaRequests[e] = []
					})
				}
				_satisfyMediaRequest(e, t) {
					const i = this._pendingMediaRequests[e].shift();
					i && (t.requestEvent = i, ke(t, i))
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
					for (const t of Be(e)) {
						const i = e[t].bind(this);
						this.providerDisposal.add(Object(Ae.e)(this._provider, t, i))
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
					this._updateMetadata(e.detail), this._mediaEvents.push(e), ke(e, this._findLastMediaEvent("vds-src-change"))
				}
				_handleLoadedData(e) {
					this._mediaEvents.push(e), ke(e, this._findLastMediaEvent("vds-load-start")), this._userIdleController = new Ct(this._host, this._store)
				}
				_handleLoadedMetadata(e) {
					this._updateMetadata(e.detail), this._mediaEvents.push(e), ke(e, this._findLastMediaEvent("vds-load-start"))
				}
				_handleCanPlay(e) {
					var t;
					this._mediaEvents.push(e), "loadedmetadata" !== (null === (t = e.triggerEvent) || void 0 === t ? void 0 : t.type) && ke(e, this._findLastMediaEvent("vds-loaded-metadata")), this._store.canPlay.set(!0), this._store.duration.set(e.detail.duration)
				}
				_handleCanPlayThrough(e) {
					this._store.canPlay.set(!0), this._store.duration.set(e.detail.duration), ke(e, this._findLastMediaEvent("vds-can-play"))
				}
				_handleAutoplay(e) {
					this._mediaEvents.push(e), ke(e, this._findLastMediaEvent("vds-play")), ke(e, this._findLastMediaEvent("vds-can-play")), this._store.autoplayError.set(void 0)
				}
				_handleAutoplayFail(e) {
					ke(e, this._findLastMediaEvent("vds-play-fail")), ke(e, this._findLastMediaEvent("vds-can-play")), this._store.autoplayError.set(e.detail), this._clearMediaStateTracking()
				}
				_handlePlay(e) {
					if (!this._isLooping && this.state.paused) {
						if (this._mediaEvents.push(e), ke(e, this._findLastMediaEvent("vds-waiting")), this._satisfyMediaRequest("play", e), this._store.paused.set(!1), this._store.autoplayError.set(void 0), this.state.ended || this._isReplay) {
							var t;
							this._isReplay = !1, this._store.ended.set(!1);
							const i = Re("vds-replay", {
								triggerEvent: e
							});
							null === (t = this._provider) || void 0 === t || t.dispatchEvent(i)
						}
					} else e.stopImmediatePropagation()
				}
				_handlePlayFail(e) {
					this._mediaEvents.push(e), this._stopWaiting(), ke(e, this._findLastMediaEvent("vds-play")), this._store.paused.set(!0), this._store.playing.set(!1), this._satisfyMediaRequest("play", e), this._clearMediaStateTracking()
				}
				_handlePlaying(e) {
					this._mediaEvents.push(e);
					const t = this._findLastMediaEvent("vds-play");
					if (t ? (ke(e, this._findLastMediaEvent("vds-waiting")), ke(e, t)) : ke(e, this._findLastMediaEvent("vds-seeked")), this._stopWaiting(), this._clearMediaStateTracking(), this._store.paused.set(!1), this._store.playing.set(!0), this._store.seeking.set(!1), this._store.ended.set(!1), this._isLooping) return e.stopImmediatePropagation(), void(this._isLooping = !1);
					var i;
					this.state.started || (this._store.started.set(!0), null === (i = this._provider) || void 0 === i || i.dispatchEvent(Re("vds-started", {
						triggerEvent: e
					})))
				}
				_handlePause(e) {
					this._isLooping ? e.stopImmediatePropagation() : (ke(e, this._findLastMediaEvent("vds-seeked")), this._satisfyMediaRequest("pause", e), this._store.paused.set(!0), this._store.playing.set(!1), this._store.seeking.set(!1), this._stopWaiting(), this._clearMediaStateTracking())
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
					this._isSeekingRequestPending ? (this._store.seeking.set(!0), e.stopImmediatePropagation()) : this.state.seeking && (this._mediaEvents.push(e), ke(e, this._findLastMediaEvent("vds-waiting")), ke(e, this._findLastMediaEvent("vds-seeking")), this.state.paused && this._stopWaiting(), this._store.seeking.set(!1), e.detail !== this.state.duration && this._store.ended.set(!1), this._store.currentTime.set(e.detail), this._satisfyMediaRequest("seeked", e))
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
					(this._store.currentSrc.set(e.detail), this._skipInitialSrcChange) ? this._skipInitialSrcChange = !1: (this._clearMediaStateTracking(), Be(t = this._store).forEach(e => {
						ft.has(e) || t[e].set(t[e].initialValue)
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
					} = e.detail, s = 0 === t.length ? 0 : t.end(t.length - 1), r = 0 === i.length ? 0 : i.end(i.length - 1);
					this._store.buffered.set(t), this._store.bufferedAmount.set(s), this._store.seekable.set(i), this._store.seekableAmount.set(r)
				}
				_handleSrcChange(e) {
					this._store.src.set(e.detail)
				}
				_handleViewTypeChange(e) {
					this._store.viewType.set(e.detail)
				}
				_persistVolumeSetting(e) {
					Me.setItem(_t, JSON.stringify(e))
				}
			}
			class Ot {
				constructor(e, t, i) {
					this._host = e, this._store = t, this._mediaProps = i, this._disposal = new Ae.a, this._host.addController({
						hostConnected: this._hostConnected.bind(this),
						hostDisconnected: this._hostDisconnected.bind(this)
					})
				}
				_hostConnected() {
					if (this._host.useInitOptimization)
						for (const t of this._mediaProps) {
							const e = this._store[t];
							if (e) {
								const i = this._getMediaAttrName(t),
									s = e.subscribe(e => {
										window.requestAnimationFrame(() => {
											this._handleValueChange(t, i, e)
										})
									});
								this._disposal.add(s)
							}
						} else {
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
				}
				_hostDisconnected() {
					for (const e of this._mediaProps) this._handleDisconnect(e, this._getMediaAttrName(e));
					this._disposal.empty()
				}
				_getMediaAttrName(e) {
					return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
				}
			}
			class xt extends Ot {
				_handleValueChange(e, t, i) {
					be(this._host, t, fe(i) || ue(i) ? String(i) : !!i)
				}
				_handleDisconnect(e, t) {
					this._host.removeAttribute(t)
				}
			}
			class Mt extends Ot {
				_handleValueChange(e, t, i) {
					window.requestAnimationFrame(() => {
						this._host.style.setProperty(this._getCssPropName(t), fe(i) || ue(i) ? String(i) : null)
					})
				}
				_getCssPropName(e) {
					return `--vds-${e}`
				}
				_handleDisconnect(e, t) {
					this._host.style.setProperty(this._getCssPropName(t), null)
				}
			}
			var Ft = function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				return n > 3 && a && Object.defineProperty(t, i, a), a
			};
			const Nt = Symbol("@vidstack/media-discovery");
			class Ut extends s.a {
				constructor() {
					super(), this.controller = new Pt(this), this.__mediaFullscreen = !1, this.__mediaIsVideoView = !1, this.__mediaPlaysinline = !1, this.useInitOptimization = !1, this.screenOrientationController = new Ye(this), this.fullscreenController = new Xe(this, this.screenOrientationController), Pe(this, "vds-media-connect", {
						register: Nt
					}), pt(this, "fullscreen", e => {
						this.__mediaFullscreen = e
					}), pt(this, "viewType", e => {
						this.__mediaIsVideoView = e === at.Video
					}), pt(this, "playsinline", e => {
						this.__mediaPlaysinline = e
					})
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
				connectedCallback() {
					if (super.connectedCallback(), this.useInitOptimization) {
						const e = Je(this, {
							target: this,
							threshold: 0,
							delay: 250
						}, t => {
							var i;
							null !== (i = t[0]) && void 0 !== i && i.isIntersecting && (this._bindMediaAttributes(), e.hostDisconnected())
						})
					} else this._bindMediaAttributes(), this._bindMediaCSSProperties()
				}
				update(e) {
					be(this, "hide-ui", this._shouldHideMediaUI()), super.update(e)
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
						new xt(...t)
					}(this, this.controller.store, ["autoplay", "autoplayError", "canLoad", "canPlay", "canFullscreen", "ended", "error", "fullscreen", "userIdle", "loop", "mediaType", "muted", "paused", "playing", "playsinline", "seeking", "started", "viewType", "waiting"])
				}
				_bindMediaCSSProperties() {
					! function() {
						for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
						new Mt(...t)
					}(this, this.controller.store, ["bufferedAmount", "currentTime", "duration", "seekableAmount"])
				}
				_shouldHideMediaUI() {
					return ve && this.__mediaIsVideoView && (!this.__mediaPlaysinline || this.__mediaFullscreen)
				}
			}
			Ft([Object(r.d)()], Ut.prototype, "__mediaFullscreen", void 0), Ft([Object(r.d)()], Ut.prototype, "__mediaIsVideoView", void 0), Ft([Object(r.d)()], Ut.prototype, "__mediaPlaysinline", void 0), Ft([Object(r.b)({
				type: Boolean,
				attribute: "use-init-optimization"
			})], Ut.prototype, "useInitOptimization", void 0), Ft([Object(r.b)({
				attribute: "fullscreen-orientation"
			})], Ut.prototype, "fullscreenOrientation", null), _e("vds-media", Ut);
			var Bt = function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				return n > 3 && a && Object.defineProperty(t, i, a), a
			};
			const $t = new Map;
			class Vt extends s.a {
				constructor() {
					super(), this._disposal = new Ae.a, this.repeat = 0, this.priority = 10, this._mediaCurrentTime = 0, this._currentToggleState = !1, this._mediaStoreConsumer = gt.consume(this), He(this, Dt, e => {
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
					return this._mediaProviderElement ? $t.get(this._mediaProviderElement) : void 0
				}
				get _pendingAction() {
					var e;
					return null === (e = this._pendingActions) || void 0 === e ? void 0 : e.get(this)
				}
				connectedCallback() {
					super.connectedCallback(), window.requestAnimationFrame(() => {
						this._mediaProviderElement && $t.set(this._mediaProviderElement, new Map)
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
					this.action.startsWith("toggle:") && (i = this._getToggleEventType()), this.action.startsWith("seek:") && (i = "seek", t = this._mediaCurrentTime + Number(this.action.split(":")[1])), this.dispatchEvent(Re(`vds-${i}-request`, {
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
					const s = Object(Ae.e)(this._mediaProviderElement, this.type, s => {
						if (this._validateEvent(s)) {
							var r;
							if (s.preventDefault(), 0 === i) null === (r = this._pendingActions) || void 0 === r || r.set(this, [s, Fe()]);
							! function() {
								let s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								i += 1, window.clearTimeout(t), t = window.setTimeout(() => {
									var t;
									const r = null === (t = e._pendingAction) || void 0 === t ? void 0 : t[1];
									var n;
									s && (null === (n = e._pendingActions) || void 0 === n || n.delete(e));
									jt(e._mediaProviderElement), i = 0, null == r || r.resolve()
								}, 250)
							}(i < this.repeat)
						}
					});
					this._disposal.add(s)
				}
				_validateEvent(e) {
					if (Object(Ae.c)(e) || Object(Ae.b)(e) || Object(Ae.d)(e)) {
						var t, i;
						const s = Object(Ae.d)(e) ? e.touches[0] : void 0,
							r = null !== (t = null == s ? void 0 : s.clientX) && void 0 !== t ? t : e.clientX,
							n = null !== (i = null == s ? void 0 : s.clientY) && void 0 !== i ? i : e.clientY,
							a = this.getBoundingClientRect(),
							o = n >= a.top && n <= a.bottom && r >= a.left && r <= a.right;
						return e.type.includes("leave") ? !o : o
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
			Bt([Object(r.b)()], Vt.prototype, "type", void 0), Bt([Object(r.b)({
				type: Number
			})], Vt.prototype, "repeat", void 0), Bt([Object(r.b)({
				type: Number
			})], Vt.prototype, "priority", void 0), Bt([Object(r.b)()], Vt.prototype, "action", void 0);
			const Gt = new WeakSet;
			async function jt(e) {
				if (Gt.has(e)) return;
				const t = $t.get(e);
				if (!t) return;
				Gt.add(e);
				const i = Array.from(t.values()).map(e => e[1].promise);
				await Promise.all(i);
				const s = Array.from(t.keys()),
					r = Math.min(...s.map(e => e.priority));
				s.filter(e => e.priority <= r).map(e => {
					const i = t.get(e)[0];
					e.performAction(i)
				}), t.clear(), Gt.delete(e)
			}

			function Ht(e) {
				return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
			}
			_e("vds-gesture", Vt);
			var Kt = {
				exports: {}
			};
			! function(e, t) {
				var i, s, r, n, a;
				i = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, s = /^(?=([^\/?#]*))\1([^]*)$/, r = /(?:\/|^)\.(?=\/)/g, n = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, a = {
					buildAbsoluteURL: function(e, t, i) {
						if (i = i || {}, e = e.trim(), !(t = t.trim())) {
							if (!i.alwaysNormalize) return e;
							var r = a.parseURL(e);
							if (!r) throw new Error("Error trying to parse base URL.");
							return r.path = a.normalizePath(r.path), a.buildURLFromParts(r)
						}
						var n = a.parseURL(t);
						if (!n) throw new Error("Error trying to parse relative URL.");
						if (n.scheme) return i.alwaysNormalize ? (n.path = a.normalizePath(n.path), a.buildURLFromParts(n)) : t;
						var o = a.parseURL(e);
						if (!o) throw new Error("Error trying to parse base URL.");
						if (!o.netLoc && o.path && "/" !== o.path[0]) {
							var l = s.exec(o.path);
							o.netLoc = l[1], o.path = l[2]
						}
						o.netLoc && !o.path && (o.path = "/");
						var d = {
							scheme: o.scheme,
							netLoc: n.netLoc,
							path: null,
							params: n.params,
							query: n.query,
							fragment: n.fragment
						};
						if (!n.netLoc && (d.netLoc = o.netLoc, "/" !== n.path[0]))
							if (n.path) {
								var h = o.path,
									c = h.substring(0, h.lastIndexOf("/") + 1) + n.path;
								d.path = a.normalizePath(c)
							} else d.path = o.path, n.params || (d.params = o.params, n.query || (d.query = o.query));
						return null === d.path && (d.path = i.alwaysNormalize ? a.normalizePath(n.path) : n.path), a.buildURLFromParts(d)
					},
					parseURL: function(e) {
						var t = i.exec(e);
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
						for (e = e.split("").reverse().join("").replace(r, ""); e.length !== (e = e.replace(n, "")).length;);
						return e.split("").reverse().join("")
					},
					buildURLFromParts: function(e) {
						return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
					}
				}, e.exports = a
			}(Kt);
			var qt = Kt.exports;

			function Wt(e, t) {
				var i = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					t && (s = s.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), i.push.apply(i, s)
				}
				return i
			}

			function Yt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var i = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Wt(Object(i), !0).forEach((function(t) {
						zt(e, t, i[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Wt(Object(i)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
					}))
				}
				return e
			}

			function zt(e, t, i) {
				return (t = function(e) {
					var t = function(e, t) {
						if ("object" != typeof e || null === e) return e;
						var i = e[Symbol.toPrimitive];
						if (void 0 !== i) {
							var s = i.call(e, t || "default");
							if ("object" != typeof s) return s;
							throw new TypeError("@@toPrimitive must return a primitive value.")
						}
						return ("string" === t ? String : Number)(e)
					}(e, "string");
					return "symbol" == typeof t ? t : String(t)
				}(t)) in e ? Object.defineProperty(e, t, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = i, e
			}

			function Xt() {
				return (Xt = Object.assign ? Object.assign.bind() : function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Qt = Number.isFinite || function(e) {
				return "number" == typeof e && isFinite(e)
			};
			let Jt = function(e) {
					return e.MEDIA_ATTACHING = "hlsMediaAttaching", e.MEDIA_ATTACHED = "hlsMediaAttached", e.MEDIA_DETACHING = "hlsMediaDetaching", e.MEDIA_DETACHED = "hlsMediaDetached", e.BUFFER_RESET = "hlsBufferReset", e.BUFFER_CODECS = "hlsBufferCodecs", e.BUFFER_CREATED = "hlsBufferCreated", e.BUFFER_APPENDING = "hlsBufferAppending", e.BUFFER_APPENDED = "hlsBufferAppended", e.BUFFER_EOS = "hlsBufferEos", e.BUFFER_FLUSHING = "hlsBufferFlushing", e.BUFFER_FLUSHED = "hlsBufferFlushed", e.MANIFEST_LOADING = "hlsManifestLoading", e.MANIFEST_LOADED = "hlsManifestLoaded", e.MANIFEST_PARSED = "hlsManifestParsed", e.LEVEL_SWITCHING = "hlsLevelSwitching", e.LEVEL_SWITCHED = "hlsLevelSwitched", e.LEVEL_LOADING = "hlsLevelLoading", e.LEVEL_LOADED = "hlsLevelLoaded", e.LEVEL_UPDATED = "hlsLevelUpdated", e.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", e.LEVELS_UPDATED = "hlsLevelsUpdated", e.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", e.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", e.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", e.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", e.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", e.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", e.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", e.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", e.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", e.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", e.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", e.CUES_PARSED = "hlsCuesParsed", e.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", e.INIT_PTS_FOUND = "hlsInitPtsFound", e.FRAG_LOADING = "hlsFragLoading", e.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", e.FRAG_LOADED = "hlsFragLoaded", e.FRAG_DECRYPTED = "hlsFragDecrypted", e.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", e.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", e.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", e.FRAG_PARSED = "hlsFragParsed", e.FRAG_BUFFERED = "hlsFragBuffered", e.FRAG_CHANGED = "hlsFragChanged", e.FPS_DROP = "hlsFpsDrop", e.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", e.ERROR = "hlsError", e.DESTROYING = "hlsDestroying", e.KEY_LOADING = "hlsKeyLoading", e.KEY_LOADED = "hlsKeyLoaded", e.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", e.BACK_BUFFER_REACHED = "hlsBackBufferReached", e
				}({}),
				Zt = function(e) {
					return e.NETWORK_ERROR = "networkError", e.MEDIA_ERROR = "mediaError", e.KEY_SYSTEM_ERROR = "keySystemError", e.MUX_ERROR = "muxError", e.OTHER_ERROR = "otherError", e
				}({}),
				ei = function(e) {
					return e.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", e.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", e.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", e.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", e.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", e.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", e.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", e.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", e.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", e.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", e.MANIFEST_LOAD_ERROR = "manifestLoadError", e.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", e.MANIFEST_PARSING_ERROR = "manifestParsingError", e.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", e.LEVEL_EMPTY_ERROR = "levelEmptyError", e.LEVEL_LOAD_ERROR = "levelLoadError", e.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", e.LEVEL_PARSING_ERROR = "levelParsingError", e.LEVEL_SWITCH_ERROR = "levelSwitchError", e.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", e.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", e.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", e.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", e.FRAG_LOAD_ERROR = "fragLoadError", e.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", e.FRAG_DECRYPT_ERROR = "fragDecryptError", e.FRAG_PARSING_ERROR = "fragParsingError", e.FRAG_GAP = "fragGap", e.REMUX_ALLOC_ERROR = "remuxAllocError", e.KEY_LOAD_ERROR = "keyLoadError", e.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", e.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", e.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", e.BUFFER_APPEND_ERROR = "bufferAppendError", e.BUFFER_APPENDING_ERROR = "bufferAppendingError", e.BUFFER_STALLED_ERROR = "bufferStalledError", e.BUFFER_FULL_ERROR = "bufferFullError", e.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", e.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", e.INTERNAL_EXCEPTION = "internalException", e.INTERNAL_ABORTED = "aborted", e.UNKNOWN = "unknown", e
				}({});
			const ti = function() {},
				ii = {
					trace: ti,
					debug: ti,
					log: ti,
					warn: ti,
					info: ti,
					error: ti
				};
			let si = ii;

			function ri(e, ...t) {
				t.forEach((function(t) {
					si[t] = e[t] ? e[t].bind(e) : function(e) {
						const t = self.console[e];
						return t ? t.bind(self.console, `[${e}] >`) : ti
					}(t)
				}))
			}
			const ni = si,
				ai = /^(\d+)x(\d+)$/,
				oi = /(.+?)=(".*?"|.*?)(?:,|$)/g;
			class li {
				constructor(e) {
					"string" == typeof e && (e = li.parseAttrList(e));
					for (const t in e) e.hasOwnProperty(t) && ("X-" === t.substring(0, 2) && (this.clientAttrs = this.clientAttrs || [], this.clientAttrs.push(t)), this[t] = e[t])
				}
				decimalInteger(e) {
					const t = parseInt(this[e], 10);
					return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
				}
				hexadecimalInteger(e) {
					if (this[e]) {
						let t = (this[e] || "0x").slice(2);
						t = (1 & t.length ? "0" : "") + t;
						const i = new Uint8Array(t.length / 2);
						for (let e = 0; e < t.length / 2; e++) i[e] = parseInt(t.slice(2 * e, 2 * e + 2), 16);
						return i
					}
					return null
				}
				hexadecimalIntegerAsNumber(e) {
					const t = parseInt(this[e], 16);
					return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
				}
				decimalFloatingPoint(e) {
					return parseFloat(this[e])
				}
				optionalFloat(e, t) {
					const i = this[e];
					return i ? parseFloat(i) : t
				}
				enumeratedString(e) {
					return this[e]
				}
				bool(e) {
					return "YES" === this[e]
				}
				decimalResolution(e) {
					const t = ai.exec(this[e]);
					if (null !== t) return {
						width: parseInt(t[1], 10),
						height: parseInt(t[2], 10)
					}
				}
				static parseAttrList(e) {
					let t;
					const i = {};
					for (oi.lastIndex = 0; null !== (t = oi.exec(e));) {
						let e = t[2];
						0 === e.indexOf('"') && e.lastIndexOf('"') === e.length - 1 && (e = e.slice(1, -1)), i[t[1].trim()] = e
					}
					return i
				}
			}

			function di(e) {
				return "SCTE35-OUT" === e || "SCTE35-IN" === e
			}
			class hi {
				constructor(e, t) {
					if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, t) {
						const i = t.attr;
						for (const t in i)
							if (Object.prototype.hasOwnProperty.call(e, t) && e[t] !== i[t]) {
								ni.warn(`DATERANGE tag attribute: "${t}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId = t;
								break
							} e = Xt(new li({}), i, e)
					}
					if (this.attr = e, this._startDate = new Date(e["START-DATE"]), "END-DATE" in this.attr) {
						const e = new Date(this.attr["END-DATE"]);
						Qt(e.getTime()) && (this._endDate = e)
					}
				}
				get id() {
					return this.attr.ID
				}
				get class() {
					return this.attr.CLASS
				}
				get startDate() {
					return this._startDate
				}
				get endDate() {
					if (this._endDate) return this._endDate;
					const e = this.duration;
					return null !== e ? new Date(this._startDate.getTime() + 1e3 * e) : null
				}
				get duration() {
					if ("DURATION" in this.attr) {
						const e = this.attr.decimalFloatingPoint("DURATION");
						if (Qt(e)) return e
					} else if (this._endDate) return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
					return null
				}
				get plannedDuration() {
					return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null
				}
				get endOnNext() {
					return this.attr.bool("END-ON-NEXT")
				}
				get isValid() {
					return !!this.id && !this._badValueForSameId && Qt(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class)
				}
			}
			class ci {
				constructor() {
					this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
						start: 0,
						first: 0,
						end: 0
					}, this.parsing = {
						start: 0,
						end: 0
					}, this.buffering = {
						start: 0,
						first: 0,
						end: 0
					}
				}
			}
			var ui = {
				AUDIO: "audio",
				VIDEO: "video",
				AUDIOVIDEO: "audiovideo"
			};
			class fi {
				constructor(e) {
					this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = {
						[ui.AUDIO]: null,
						[ui.VIDEO]: null,
						[ui.AUDIOVIDEO]: null
					}, this.baseurl = e
				}
				setByteRange(e, t) {
					const i = e.split("@", 2),
						s = [];
					1 === i.length ? s[0] = t ? t.byteRangeEndOffset : 0 : s[0] = parseInt(i[1]), s[1] = parseInt(i[0]) + s[0], this._byteRange = s
				}
				get byteRange() {
					return this._byteRange ? this._byteRange : []
				}
				get byteRangeStartOffset() {
					return this.byteRange[0]
				}
				get byteRangeEndOffset() {
					return this.byteRange[1]
				}
				get url() {
					return !this._url && this.baseurl && this.relurl && (this._url = qt.buildAbsoluteURL(this.baseurl, this.relurl, {
						alwaysNormalize: !0
					})), this._url || ""
				}
				set url(e) {
					this._url = e
				}
			}
			class gi extends fi {
				constructor(e, t) {
					super(t), this._decryptdata = null, this.rawProgramDateTime = null, this.programDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.stats = new ci, this.urlId = 0, this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.type = e
				}
				get decryptdata() {
					const {
						levelkeys: e
					} = this;
					if (!e && !this._decryptdata) return null;
					if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
						const e = this.levelkeys.identity;
						if (e) this._decryptdata = e.getDecryptData(this.sn);
						else {
							const e = Object.keys(this.levelkeys);
							if (1 === e.length) return this._decryptdata = this.levelkeys[e[0]].getDecryptData(this.sn)
						}
					}
					return this._decryptdata
				}
				get end() {
					return this.start + this.duration
				}
				get endProgramDateTime() {
					if (null === this.programDateTime) return null;
					if (!Qt(this.programDateTime)) return null;
					const e = Qt(this.duration) ? this.duration : 0;
					return this.programDateTime + 1e3 * e
				}
				get encrypted() {
					var e;
					if (null != (e = this._decryptdata) && e.encrypted) return !0;
					if (this.levelkeys) {
						const e = Object.keys(this.levelkeys),
							t = e.length;
						if (t > 1 || 1 === t && this.levelkeys[e[0]].encrypted) return !0
					}
					return !1
				}
				setKeyFormat(e) {
					if (this.levelkeys) {
						const t = this.levelkeys[e];
						t && !this._decryptdata && (this._decryptdata = t.getDecryptData(this.sn))
					}
				}
				abortRequests() {
					var e, t;
					null == (e = this.loader) || e.abort(), null == (t = this.keyLoader) || t.abort()
				}
				setElementaryStreamInfo(e, t, i, s, r, n = !1) {
					const {
						elementaryStreams: a
					} = this, o = a[e];
					o ? (o.startPTS = Math.min(o.startPTS, t), o.endPTS = Math.max(o.endPTS, i), o.startDTS = Math.min(o.startDTS, s), o.endDTS = Math.max(o.endDTS, r)) : a[e] = {
						startPTS: t,
						endPTS: i,
						startDTS: s,
						endDTS: r,
						partial: n
					}
				}
				clearElementaryStreamInfo() {
					const {
						elementaryStreams: e
					} = this;
					e[ui.AUDIO] = null, e[ui.VIDEO] = null, e[ui.AUDIOVIDEO] = null
				}
			}
			class pi extends fi {
				constructor(e, t, i, s, r) {
					super(i), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.stats = new ci, this.duration = e.decimalFloatingPoint("DURATION"), this.gap = e.bool("GAP"), this.independent = e.bool("INDEPENDENT"), this.relurl = e.enumeratedString("URI"), this.fragment = t, this.index = s;
					const n = e.enumeratedString("BYTERANGE");
					n && this.setByteRange(n, r), r && (this.fragOffset = r.fragOffset + r.duration)
				}
				get start() {
					return this.fragment.start + this.fragOffset
				}
				get end() {
					return this.start + this.duration
				}
				get loaded() {
					const {
						elementaryStreams: e
					} = this;
					return !!(e.audio || e.video || e.audiovideo)
				}
			}
			const mi = 10;
			class vi {
				constructor(e) {
					this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e
				}
				reloaded(e) {
					if (!e) return this.advanced = !0, void(this.updated = !0);
					const t = this.lastPartSn - e.lastPartSn,
						i = this.lastPartIndex - e.lastPartIndex;
					this.updated = this.endSN !== e.endSN || !!i || !!t, this.advanced = this.endSN > e.endSN || t > 0 || 0 === t && i > 0, this.updated || this.advanced ? this.misses = Math.floor(.6 * e.misses) : this.misses = e.misses + 1, this.availabilityDelay = e.availabilityDelay
				}
				get hasProgramDateTime() {
					return !!this.fragments.length && Qt(this.fragments[this.fragments.length - 1].programDateTime)
				}
				get levelTargetDuration() {
					return this.averagetargetduration || this.targetduration || mi
				}
				get drift() {
					const e = this.driftEndTime - this.driftStartTime;
					if (e > 0) {
						return 1e3 * (this.driftEnd - this.driftStart) / e
					}
					return 1
				}
				get edge() {
					return this.partEnd || this.fragmentEnd
				}
				get partEnd() {
					var e;
					return null != (e = this.partList) && e.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
				}
				get fragmentEnd() {
					var e;
					return null != (e = this.fragments) && e.length ? this.fragments[this.fragments.length - 1].end : 0
				}
				get age() {
					return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
				}
				get lastPartIndex() {
					var e;
					return null != (e = this.partList) && e.length ? this.partList[this.partList.length - 1].index : -1
				}
				get lastPartSn() {
					var e;
					return null != (e = this.partList) && e.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
				}
			}

			function yi(e) {
				return Uint8Array.from(atob(e), e => e.charCodeAt(0))
			}

			function Ei(e) {
				const t = e.split(":");
				let i = null;
				if ("data" === t[0] && 2 === t.length) {
					const e = t[1].split(";"),
						s = e[e.length - 1].split(",");
					if (2 === s.length) {
						const t = "base64" === s[0],
							r = s[1];
						t ? (e.splice(-1, 1), i = yi(r)) : i = function(e) {
							const t = _i(e).subarray(0, 16),
								i = new Uint8Array(16);
							return i.set(t, 16 - t.length), i
						}(r)
					}
				}
				return i
			}

			function _i(e) {
				return Uint8Array.from(unescape(encodeURIComponent(e)), e => e.charCodeAt(0))
			}
			var bi = {
					CLEARKEY: "org.w3.clearkey",
					FAIRPLAY: "com.apple.fps",
					PLAYREADY: "com.microsoft.playready",
					WIDEVINE: "com.widevine.alpha"
				},
				Ti = {
					CLEARKEY: "org.w3.clearkey",
					FAIRPLAY: "com.apple.streamingkeydelivery",
					PLAYREADY: "com.microsoft.playready",
					WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
				};

			function Si(e) {
				switch (e) {
					case Ti.FAIRPLAY:
						return bi.FAIRPLAY;
					case Ti.PLAYREADY:
						return bi.PLAYREADY;
					case Ti.WIDEVINE:
						return bi.WIDEVINE;
					case Ti.CLEARKEY:
						return bi.CLEARKEY
				}
			}
			var Ai = {
				WIDEVINE: "edef8ba979d64acea3c827dcd51d21ed"
			};

			function Li(e) {
				switch (e) {
					case bi.FAIRPLAY:
						return Ti.FAIRPLAY;
					case bi.PLAYREADY:
						return Ti.PLAYREADY;
					case bi.WIDEVINE:
						return Ti.WIDEVINE;
					case bi.CLEARKEY:
						return Ti.CLEARKEY
				}
			}

			function Ri(e) {
				const {
					drmSystems: t,
					widevineLicenseUrl: i
				} = e, s = t ? [bi.FAIRPLAY, bi.WIDEVINE, bi.PLAYREADY, bi.CLEARKEY].filter(e => !!t[e]) : [];
				return !s[bi.WIDEVINE] && i && s.push(bi.WIDEVINE), s
			}
			const wi = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;

			function ki(e, t, i) {
				return Uint8Array.prototype.slice ? e.slice(t, i) : new Uint8Array(Array.prototype.slice.call(e, t, i))
			}
			const Ii = (e, t) => t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128,
				Di = (e, t) => t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128,
				Ci = (e, t) => {
					const i = t;
					let s = 0;
					for (; Ii(e, t);) {
						s += 10, s += Pi(e, t + 6), Di(e, t + 10) && (s += 10), t += s
					}
					if (s > 0) return e.subarray(i, i + s)
				},
				Pi = (e, t) => {
					let i = 0;
					return i = (127 & e[t]) << 21, i |= (127 & e[t + 1]) << 14, i |= (127 & e[t + 2]) << 7, i |= 127 & e[t + 3]
				},
				Oi = (e, t) => Ii(e, t) && Pi(e, t + 6) + 10 <= e.length - t,
				xi = e => {
					const t = Ni(e);
					for (let i = 0; i < t.length; i++) {
						const e = t[i];
						if (Mi(e)) return Gi(e)
					}
				},
				Mi = e => e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info,
				Fi = e => {
					const t = String.fromCharCode(e[0], e[1], e[2], e[3]),
						i = Pi(e, 4);
					return {
						type: t,
						size: i,
						data: e.subarray(10, 10 + i)
					}
				},
				Ni = e => {
					let t = 0;
					const i = [];
					for (; Ii(e, t);) {
						const s = Pi(e, t + 6),
							r = (t += 10) + s;
						for (; t + 8 < r;) {
							const s = Fi(e.subarray(t)),
								r = Ui(s);
							r && i.push(r), t += s.size + 10
						}
						Di(e, t) && (t += 10)
					}
					return i
				},
				Ui = e => "PRIV" === e.type ? Bi(e) : "W" === e.type[0] ? Vi(e) : $i(e),
				Bi = e => {
					if (e.size < 2) return;
					const t = ji(e.data, !0),
						i = new Uint8Array(e.data.subarray(t.length + 1));
					return {
						key: e.type,
						info: t,
						data: i.buffer
					}
				},
				$i = e => {
					if (e.size < 2) return;
					if ("TXXX" === e.type) {
						let t = 1;
						const i = ji(e.data.subarray(t), !0);
						t += i.length + 1;
						const s = ji(e.data.subarray(t));
						return {
							key: e.type,
							info: i,
							data: s
						}
					}
					const t = ji(e.data.subarray(1));
					return {
						key: e.type,
						data: t
					}
				},
				Vi = e => {
					if ("WXXX" === e.type) {
						if (e.size < 2) return;
						let t = 1;
						const i = ji(e.data.subarray(t), !0);
						t += i.length + 1;
						const s = ji(e.data.subarray(t));
						return {
							key: e.type,
							info: i,
							data: s
						}
					}
					const t = ji(e.data);
					return {
						key: e.type,
						data: t
					}
				},
				Gi = e => {
					if (8 === e.data.byteLength) {
						const t = new Uint8Array(e.data),
							i = 1 & t[3];
						let s = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
						return s /= 45, i && (s += 47721858.84), Math.round(s)
					}
				},
				ji = (e, t = !1) => {
					const i = Ki();
					if (i) {
						const s = i.decode(e);
						if (t) {
							const e = s.indexOf("\0");
							return -1 !== e ? s.substring(0, e) : s
						}
						return s.replace(/\0/g, "")
					}
					const s = e.length;
					let r, n, a, o = "",
						l = 0;
					for (; l < s;) {
						if (0 === (r = e[l++]) && t) return o;
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
								n = e[l++], o += String.fromCharCode((31 & r) << 6 | 63 & n);
								break;
							case 14:
								n = e[l++], a = e[l++], o += String.fromCharCode((15 & r) << 12 | (63 & n) << 6 | (63 & a) << 0)
						}
					}
					return o
				};
			let Hi;

			function Ki() {
				return Hi || void 0 === self.TextDecoder || (Hi = new self.TextDecoder("utf-8")), Hi
			}
			const qi = {
					hexDump: function(e) {
						let t = "";
						for (let i = 0; i < e.length; i++) {
							let s = e[i].toString(16);
							s.length < 2 && (s = "0" + s), t += s
						}
						return t
					}
				},
				Wi = Math.pow(2, 32) - 1,
				Yi = [].push,
				zi = {
					video: 1,
					audio: 2,
					id3: 3,
					text: 4
				};

			function Xi(e) {
				return String.fromCharCode.apply(null, e)
			}

			function Qi(e, t) {
				const i = e[t] << 8 | e[t + 1];
				return i < 0 ? 65536 + i : i
			}

			function Ji(e, t) {
				const i = Zi(e, t);
				return i < 0 ? 4294967296 + i : i
			}

			function Zi(e, t) {
				return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
			}

			function es(e, t, i) {
				e[t] = i >> 24, e[t + 1] = i >> 16 & 255, e[t + 2] = i >> 8 & 255, e[t + 3] = 255 & i
			}

			function ts(e, t) {
				const i = [];
				if (!t.length) return i;
				const s = e.byteLength;
				for (let r = 0; r < s;) {
					const n = Ji(e, r),
						a = n > 1 ? r + n : s;
					if (Xi(e.subarray(r + 4, r + 8)) === t[0])
						if (1 === t.length) i.push(e.subarray(r + 8, a));
						else {
							const s = ts(e.subarray(r + 8, a), t.slice(1));
							s.length && Yi.apply(i, s)
						} r = a
				}
				return i
			}

			function is(e) {
				const t = [],
					i = e[0];
				let s = 8;
				const r = Ji(e, s);
				s += 4;
				s += 0 === i ? 8 : 16, s += 2;
				let n = e.length + 0;
				const a = Qi(e, s);
				s += 2;
				for (let o = 0; o < a; o++) {
					let i = s;
					const a = Ji(e, i);
					i += 4;
					const o = 2147483647 & a;
					if (1 === (2147483648 & a) >>> 31) return ni.warn("SIDX has hierarchical references (not supported)"), null;
					const l = Ji(e, i);
					i += 4, t.push({
						referenceSize: o,
						subsegmentDuration: l,
						info: {
							duration: l / r,
							start: n,
							end: n + o - 1
						}
					}), n += o, s = i += 4
				}
				return {
					earliestPresentationTime: 0,
					timescale: r,
					version: i,
					referencesCount: a,
					references: t
				}
			}

			function ss(e) {
				const t = [],
					i = ts(e, ["moov", "trak"]);
				for (let s = 0; s < i.length; s++) {
					const e = i[s],
						r = ts(e, ["tkhd"])[0];
					if (r) {
						let i = r[0],
							s = 0 === i ? 12 : 20;
						const n = Ji(r, s),
							a = ts(e, ["mdia", "mdhd"])[0];
						if (a) {
							const r = Ji(a, s = 0 === (i = a[0]) ? 12 : 20),
								o = ts(e, ["mdia", "hdlr"])[0];
							if (o) {
								const i = Xi(o.subarray(8, 12)),
									s = {
										soun: ui.AUDIO,
										vide: ui.VIDEO
									} [i];
								if (s) {
									const i = ts(e, ["mdia", "minf", "stbl", "stsd"])[0];
									let a;
									i && (a = Xi(i.subarray(12, 16))), t[n] = {
										timescale: r,
										type: s
									}, t[s] = {
										timescale: r,
										id: n,
										codec: a
									}
								}
							}
						}
					}
				}
				return ts(e, ["moov", "mvex", "trex"]).forEach(e => {
					const i = Ji(e, 4),
						s = t[i];
					s && (s.default = {
						duration: Ji(e, 12),
						flags: Ji(e, 20)
					})
				}), t
			}

			function rs(e) {
				const t = ts(e, ["schm"])[0];
				if (t) {
					const i = Xi(t.subarray(4, 8));
					if ("cbcs" === i || "cenc" === i) return ts(e, ["schi", "tenc"])[0]
				}
				return ni.error("[eme] missing 'schm' box"), null
			}

			function ns(e) {
				const t = Ji(e, 0);
				let i = 8;
				1 & t && (i += 4), 4 & t && (i += 4);
				let s = 0;
				const r = Ji(e, 4);
				for (let n = 0; n < r; n++) {
					if (256 & t) {
						s += Ji(e, i), i += 4
					}
					512 & t && (i += 4), 1024 & t && (i += 4), 2048 & t && (i += 4)
				}
				return s
			}

			function as(e, t) {
				const i = new Uint8Array(e.length + t.length);
				return i.set(e), i.set(t, e.length), i
			}

			function os(e, t) {
				const i = [],
					s = t.samples,
					r = t.timescale,
					n = t.id;
				let a = !1;
				return ts(s, ["moof"]).map(o => {
					const l = o.byteOffset - 8;
					ts(o, ["traf"]).map(o => {
						const d = ts(o, ["tfdt"]).map(e => {
							const t = e[0];
							let i = Ji(e, 4);
							return 1 === t && (i *= Math.pow(2, 32), i += Ji(e, 8)), i / r
						})[0];
						return void 0 !== d && (e = d), ts(o, ["tfhd"]).map(d => {
							const h = Ji(d, 4),
								c = 16777215 & Ji(d, 0);
							let u = 0;
							const f = 0 != (16 & c);
							let g = 0;
							const p = 0 != (32 & c);
							let m = 8;
							h === n && (0 != (1 & c) && (m += 8), 0 != (2 & c) && (m += 4), 0 != (8 & c) && (u = Ji(d, m), m += 4), f && (g = Ji(d, m), m += 4), p && (m += 4), "video" === t.type && (a = function(e) {
								if (!e) return !1;
								const t = e.indexOf("."),
									i = t < 0 ? e : e.substring(0, t);
								return "hvc1" === i || "hev1" === i || "dvh1" === i || "dvhe" === i
							}(t.codec)), ts(o, ["trun"]).map(n => {
								const o = n[0],
									d = 16777215 & Ji(n, 0),
									h = 0 != (1 & d);
								let c = 0;
								const f = 0 != (4 & d),
									p = 0 != (256 & d);
								let m = 0;
								const v = 0 != (512 & d);
								let y = 0;
								const E = 0 != (1024 & d),
									_ = 0 != (2048 & d);
								let b = 0;
								const T = Ji(n, 4);
								let S = 8;
								h && (c = Ji(n, S), S += 4), f && (S += 4);
								let A = c + l;
								for (let l = 0; l < T; l++) {
									if (p ? (m = Ji(n, S), S += 4) : m = u, v ? (y = Ji(n, S), S += 4) : y = g, E && (S += 4), _ && (b = 0 === o ? Ji(n, S) : Zi(n, S), S += 4), t.type === ui.VIDEO) {
										let t = 0;
										for (; t < y;) {
											const n = Ji(s, A);
											if (ls(a, s[A += 4])) {
												ds(s.subarray(A, A + n), a ? 2 : 1, e + b / r, i)
											}
											A += n, t += n + 4
										}
									}
									e += m / r
								}
							}))
						})
					})
				}), i
			}

			function ls(e, t) {
				if (e) {
					const e = t >> 1 & 63;
					return 39 === e || 40 === e
				}
				return 6 === (31 & t)
			}

			function ds(e, t, i, s) {
				const r = hs(e);
				let n = 0;
				n += t;
				let a = 0,
					o = 0,
					l = !1,
					d = 0;
				for (; n < r.length;) {
					a = 0;
					do {
						if (n >= r.length) break;
						a += d = r[n++]
					} while (255 === d);
					o = 0;
					do {
						if (n >= r.length) break;
						o += d = r[n++]
					} while (255 === d);
					const e = r.length - n;
					if (!l && 4 === a && n < r.length) {
						if (l = !0, 181 === r[n++]) {
							const e = Qi(r, n);
							if (n += 2, 49 === e) {
								const e = Ji(r, n);
								if (n += 4, 1195456820 === e) {
									const e = r[n++];
									if (3 === e) {
										const t = r[n++],
											o = 31 & t,
											l = 64 & t,
											d = l ? 2 + 3 * o : 0,
											h = new Uint8Array(d);
										if (l) {
											h[0] = t;
											for (let e = 1; e < d; e++) h[e] = r[n++]
										}
										s.push({
											type: e,
											payloadType: a,
											pts: i,
											bytes: h
										})
									}
								}
							}
						}
					} else if (5 === a && o < e) {
						if (l = !0, o > 16) {
							const e = [];
							for (let i = 0; i < 16; i++) {
								const t = r[n++].toString(16);
								e.push(1 == t.length ? "0" + t : t), 3 !== i && 5 !== i && 7 !== i && 9 !== i || e.push("-")
							}
							const t = o - 16,
								l = new Uint8Array(t);
							for (let i = 0; i < t; i++) l[i] = r[n++];
							s.push({
								payloadType: a,
								pts: i,
								uuid: e.join(""),
								userData: ji(l),
								userDataBytes: l
							})
						}
					} else if (o < e) n += o;
					else if (o > e) break
				}
			}

			function hs(e) {
				const t = e.byteLength,
					i = [];
				let s = 1;
				for (; s < t - 2;) 0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2] ? (i.push(s + 2), s += 2) : s++;
				if (0 === i.length) return e;
				const r = t - i.length,
					n = new Uint8Array(r);
				let a = 0;
				for (s = 0; s < r; a++, s++) a === i[0] && (a++, i.shift()), n[s] = e[a];
				return n
			}

			function cs(e, t, i) {
				if (16 !== e.byteLength) throw new RangeError("Invalid system id");
				let s, r, n;
				if (t) {
					s = 1, r = new Uint8Array(16 * t.length);
					for (let e = 0; e < t.length; e++) {
						const i = t[e];
						if (16 !== i.byteLength) throw new RangeError("Invalid key");
						r.set(i, 16 * e)
					}
				} else s = 0, r = new Uint8Array;
				s > 0 ? (n = new Uint8Array(4), t.length > 0 && new DataView(n.buffer).setUint32(0, t.length, !1)) : n = new Uint8Array;
				const a = new Uint8Array(4);
				return i && i.byteLength > 0 && new DataView(a.buffer).setUint32(0, i.byteLength, !1),
					function(e, ...t) {
						const i = t.length;
						let s = 8,
							r = i;
						for (; r--;) s += t[r].byteLength;
						const n = new Uint8Array(s);
						for (n[0] = s >> 24 & 255, n[1] = s >> 16 & 255, n[2] = s >> 8 & 255, n[3] = 255 & s, n.set(e, 4), r = 0, s = 8; r < i; r++) n.set(t[r], s), s += t[r].byteLength;
						return n
					}([112, 115, 115, 104], new Uint8Array([s, 0, 0, 0]), e, n, r, a, i || new Uint8Array)
			}
			let us = {};
			class fs {
				static clearKeyUriToKeyIdMap() {
					us = {}
				}
				constructor(e, t, i, s = [1], r = null) {
					this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e, this.uri = t, this.keyFormat = i, this.keyFormatVersions = s, this.iv = r, this.encrypted = !!e && "NONE" !== e, this.isCommonEncryption = this.encrypted && "AES-128" !== e
				}
				isSupported() {
					if (this.method) {
						if ("AES-128" === this.method || "NONE" === this.method) return !0;
						if ("identity" === this.keyFormat) return "SAMPLE-AES" === this.method;
						switch (this.keyFormat) {
							case Ti.FAIRPLAY:
							case Ti.WIDEVINE:
							case Ti.PLAYREADY:
							case Ti.CLEARKEY:
								return -1 !== ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method)
						}
					}
					return !1
				}
				getDecryptData(e) {
					if (!this.encrypted || !this.uri) return null;
					if ("AES-128" === this.method && this.uri && !this.iv) {
						"number" != typeof e && ("AES-128" !== this.method || this.iv || ni.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e = 0);
						const t = function(e) {
							const t = new Uint8Array(16);
							for (let i = 12; i < 16; i++) t[i] = e >> 8 * (15 - i) & 255;
							return t
						}(e);
						return new fs(this.method, this.uri, "identity", this.keyFormatVersions, t)
					}
					const t = Ei(this.uri);
					if (t) switch (this.keyFormat) {
						case Ti.WIDEVINE:
							this.pssh = t, t.length >= 22 && (this.keyId = t.subarray(t.length - 22, t.length - 6));
							break;
						case Ti.PLAYREADY: {
							const e = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
							this.pssh = cs(e, null, t);
							const i = new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2),
								s = String.fromCharCode.apply(null, Array.from(i)),
								r = s.substring(s.indexOf("<"), s.length),
								n = (new DOMParser).parseFromString(r, "text/xml").getElementsByTagName("KID")[0];
							if (n) {
								const e = n.childNodes[0] ? n.childNodes[0].nodeValue : n.getAttribute("VALUE");
								if (e) {
									const t = yi(e).subarray(0, 16);
									! function(e) {
										const t = function(e, t, i) {
											const s = e[t];
											e[t] = e[i], e[i] = s
										};
										t(e, 0, 3), t(e, 1, 2), t(e, 4, 5), t(e, 6, 7)
									}(t), this.keyId = t
								}
							}
							break
						}
						default: {
							let e = t.subarray(0, 16);
							if (16 !== e.length) {
								const t = new Uint8Array(16);
								t.set(e, 16 - e.length), e = t
							}
							this.keyId = e;
							break
						}
					}
					if (!this.keyId || 16 !== this.keyId.byteLength) {
						let e = us[this.uri];
						if (!e) {
							const t = Object.keys(us).length % Number.MAX_SAFE_INTEGER;
							e = new Uint8Array(16), new DataView(e.buffer, 12, 4).setUint32(0, t), us[this.uri] = e
						}
						this.keyId = e
					}
					return this
				}
			}
			const gs = /\{\$([a-zA-Z0-9-_]+)\}/g;

			function ps(e) {
				return gs.test(e)
			}

			function ms(e, t, i) {
				if (null !== e.variableList || e.hasVariableRefs)
					for (let s = i.length; s--;) {
						const r = i[s],
							n = t[r];
						n && (t[r] = vs(e, n))
					}
			}

			function vs(e, t) {
				if (null !== e.variableList || e.hasVariableRefs) {
					const i = e.variableList;
					return t.replace(gs, t => {
						const s = t.substring(2, t.length - 1),
							r = null == i ? void 0 : i[s];
						return void 0 === r ? (e.playlistParsingError || (e.playlistParsingError = new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${s}"`)), t) : r
					})
				}
				return t
			}

			function ys(e, t, i) {
				let s, r, n = e.variableList;
				if (n || (e.variableList = n = {}), "QUERYPARAM" in t) {
					s = t.QUERYPARAM;
					try {
						const e = new self.URL(i).searchParams;
						if (!e.has(s)) throw new Error(`"${s}" does not match any query parameter in URI: "${i}"`);
						r = e.get(s)
					} catch (a) {
						e.playlistParsingError || (e.playlistParsingError = new Error(`EXT-X-DEFINE QUERYPARAM: ${a.message}`))
					}
				} else s = t.NAME, r = t.VALUE;
				s in n ? e.playlistParsingError || (e.playlistParsingError = new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${s}"`)) : n[s] = r || ""
			}

			function Es(e, t, i) {
				const s = t.IMPORT;
				if (i && s in i) {
					let t = e.variableList;
					t || (e.variableList = t = {}), t[s] = i[s]
				} else e.playlistParsingError || (e.playlistParsingError = new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${s}"`))
			}

			function _s() {
				if ("undefined" != typeof self) return self.MediaSource || self.WebKitMediaSource
			}
			const bs = {
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
						opus: !0,
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
						av01: !0,
						drac: !0,
						dva1: !0,
						dvav: !0,
						dvh1: !0,
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
					},
					text: {
						stpp: !0,
						wvtt: !0
					}
				},
				Ts = _s();

			function Ss(e, t) {
				var i;
				return null != (i = null == Ts ? void 0 : Ts.isTypeSupported(`${t||"video"}/mp4;codecs="${e}"`)) && i
			}
			const As = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
				Ls = /#EXT-X-MEDIA:(.*)/g,
				Rs = /^#EXT(?:INF|-X-TARGETDURATION):/m,
				ws = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
				ks = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
			class Is {
				static findGroup(e, t) {
					for (let i = 0; i < e.length; i++) {
						const s = e[i];
						if (s.id === t) return s
					}
				}
				static convertAVC1ToAVCOTI(e) {
					const t = e.split(".");
					if (t.length > 2) {
						let e = t.shift() + ".";
						return e += parseInt(t.shift()).toString(16), e += ("000" + parseInt(t.shift()).toString(16)).slice(-4)
					}
					return e
				}
				static resolve(e, t) {
					return qt.buildAbsoluteURL(t, e, {
						alwaysNormalize: !0
					})
				}
				static isMediaPlaylist(e) {
					return Rs.test(e)
				}
				static parseMasterPlaylist(e, t) {
					const i = {
							contentSteering: null,
							levels: [],
							playlistParsingError: null,
							sessionData: null,
							sessionKeys: null,
							startTimeOffset: null,
							variableList: null,
							hasVariableRefs: ps(e)
						},
						s = [];
					let r;
					for (As.lastIndex = 0; null != (r = As.exec(e));)
						if (r[1]) {
							var n;
							const e = new li(r[1]);
							ms(i, e, ["CODECS", "SUPPLEMENTAL-CODECS", "ALLOWED-CPC", "PATHWAY-ID", "STABLE-VARIANT-ID", "AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS", "NAME"]);
							const a = vs(i, r[2]),
								o = {
									attrs: e,
									bitrate: e.decimalInteger("AVERAGE-BANDWIDTH") || e.decimalInteger("BANDWIDTH"),
									name: e.NAME,
									url: Is.resolve(a, t)
								},
								l = e.decimalResolution("RESOLUTION");
							l && (o.width = l.width, o.height = l.height), Ps((e.CODECS || "").split(/[ ,]+/).filter(e => e), o), o.videoCodec && -1 !== o.videoCodec.indexOf("avc1") && (o.videoCodec = Is.convertAVC1ToAVCOTI(o.videoCodec)), null != (n = o.unknownCodecs) && n.length || s.push(o), i.levels.push(o)
						} else if (r[3]) {
						const e = r[3],
							s = r[4];
						switch (e) {
							case "SESSION-DATA": {
								const e = new li(s);
								ms(i, e, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
								const t = e["DATA-ID"];
								t && (null === i.sessionData && (i.sessionData = {}), i.sessionData[t] = e);
								break
							}
							case "SESSION-KEY": {
								const e = Ds(s, t, i);
								e.encrypted && e.isSupported() ? (null === i.sessionKeys && (i.sessionKeys = []), i.sessionKeys.push(e)) : ni.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${s}"`);
								break
							}
							case "DEFINE": {
								const e = new li(s);
								ms(i, e, ["NAME", "VALUE", "QUERYPARAM"]), ys(i, e, t)
							}
							break;
						case "CONTENT-STEERING": {
							const e = new li(s);
							ms(i, e, ["SERVER-URI", "PATHWAY-ID"]), i.contentSteering = {
								uri: Is.resolve(e["SERVER-URI"], t),
								pathwayId: e["PATHWAY-ID"] || "."
							};
							break
						}
						case "START":
							i.startTimeOffset = Cs(s)
						}
					}
					const a = s.length > 0 && s.length < i.levels.length;
					return i.levels = a ? s : i.levels, 0 === i.levels.length && (i.playlistParsingError = new Error("no levels found in manifest")), i
				}
				static parseMasterPlaylistMedia(e, t, i) {
					let s;
					const r = {},
						n = i.levels,
						a = {
							AUDIO: n.map(e => ({
								id: e.attrs.AUDIO,
								audioCodec: e.audioCodec
							})),
							SUBTITLES: n.map(e => ({
								id: e.attrs.SUBTITLES,
								textCodec: e.textCodec
							})),
							"CLOSED-CAPTIONS": []
						};
					let o = 0;
					for (Ls.lastIndex = 0; null !== (s = Ls.exec(e));) {
						const e = new li(s[1]),
							n = e.TYPE;
						if (n) {
							const s = a[n],
								l = r[n] || [];
							r[n] = l, ms(i, e, ["URI", "GROUP-ID", "LANGUAGE", "ASSOC-LANGUAGE", "STABLE-RENDITION-ID", "NAME", "INSTREAM-ID", "CHARACTERISTICS", "CHANNELS"]);
							const d = {
								attrs: e,
								bitrate: 0,
								id: o++,
								groupId: e["GROUP-ID"] || "",
								instreamId: e["INSTREAM-ID"],
								name: e.NAME || e.LANGUAGE || "",
								type: n,
								default: e.bool("DEFAULT"),
								autoselect: e.bool("AUTOSELECT"),
								forced: e.bool("FORCED"),
								lang: e.LANGUAGE,
								url: e.URI ? Is.resolve(e.URI, t) : ""
							};
							if (null != s && s.length) {
								const e = Is.findGroup(s, d.groupId) || s[0];
								Os(d, e, "audioCodec"), Os(d, e, "textCodec")
							}
							l.push(d)
						}
					}
					return r
				}
				static parseLevelPlaylist(e, t, i, s, r, n) {
					const a = new vi(t),
						o = a.fragments;
					let l, d, h, c = null,
						u = 0,
						f = 0,
						g = 0,
						p = 0,
						m = null,
						v = new gi(s, t),
						y = -1,
						E = !1;
					for (ws.lastIndex = 0, a.m3u8 = e, a.hasVariableRefs = ps(e); null !== (l = ws.exec(e));) {
						E && (E = !1, (v = new gi(s, t)).start = g, v.sn = u, v.cc = p, v.level = i, c && (v.initSegment = c, v.rawProgramDateTime = c.rawProgramDateTime, c.rawProgramDateTime = null));
						const e = l[1];
						if (e) {
							v.duration = parseFloat(e);
							const t = (" " + l[2]).slice(1);
							v.title = t || null, v.tagList.push(t ? ["INF", e, t] : ["INF", e])
						} else if (l[3]) {
							if (Qt(v.duration)) {
								v.start = g, h && Fs(v, h, a), v.sn = u, v.level = i, v.cc = p, v.urlId = r, o.push(v);
								const e = (" " + l[3]).slice(1);
								v.relurl = vs(a, e), xs(v, m), m = v, g += v.duration, u++, f = 0, E = !0
							}
						} else if (l[4]) {
							const e = (" " + l[4]).slice(1);
							m ? v.setByteRange(e, m) : v.setByteRange(e)
						} else if (l[5]) v.rawProgramDateTime = (" " + l[5]).slice(1), v.tagList.push(["PROGRAM-DATE-TIME", v.rawProgramDateTime]), -1 === y && (y = o.length);
						else {
							if (!(l = l[0].match(ks))) {
								ni.warn("No matches on slow regex match for level playlist!");
								continue
							}
							for (d = 1; d < l.length && void 0 === l[d]; d++);
							const e = (" " + l[d]).slice(1),
								r = (" " + l[d + 1]).slice(1),
								g = l[d + 2] ? (" " + l[d + 2]).slice(1) : "";
							switch (e) {
								case "PLAYLIST-TYPE":
									a.type = r.toUpperCase();
									break;
								case "MEDIA-SEQUENCE":
									u = a.startSN = parseInt(r);
									break;
								case "SKIP": {
									const e = new li(r);
									ms(a, e, ["RECENTLY-REMOVED-DATERANGES"]);
									const t = e.decimalInteger("SKIPPED-SEGMENTS");
									if (Qt(t)) {
										a.skippedSegments = t;
										for (let e = t; e--;) o.unshift(null);
										u += t
									}
									const i = e.enumeratedString("RECENTLY-REMOVED-DATERANGES");
									i && (a.recentlyRemovedDateranges = i.split("\t"));
									break
								}
								case "TARGETDURATION":
									a.targetduration = Math.max(parseInt(r), 1);
									break;
								case "VERSION":
									a.version = parseInt(r);
									break;
								case "EXTM3U":
									break;
								case "ENDLIST":
									a.live = !1;
									break;
								case "#":
									(r || g) && v.tagList.push(g ? [r, g] : [r]);
									break;
								case "DISCONTINUITY":
									p++, v.tagList.push(["DIS"]);
									break;
								case "GAP":
									v.gap = !0, v.tagList.push([e]);
									break;
								case "BITRATE":
									v.tagList.push([e, r]);
									break;
								case "DATERANGE": {
									const e = new li(r);
									ms(a, e, ["ID", "CLASS", "START-DATE", "END-DATE", "SCTE35-CMD", "SCTE35-OUT", "SCTE35-IN"]), ms(a, e, e.clientAttrs);
									const t = new hi(e, a.dateRanges[e.ID]);
									t.isValid || a.skippedSegments ? a.dateRanges[t.id] = t : ni.warn(`Ignoring invalid DATERANGE tag: "${r}"`), v.tagList.push(["EXT-X-DATERANGE", r]);
									break
								}
								case "DEFINE": {
									const e = new li(r);
									ms(a, e, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]), "IMPORT" in e ? Es(a, e, n) : ys(a, e, t)
								}
								break;
							case "DISCONTINUITY-SEQUENCE":
								p = parseInt(r);
								break;
							case "KEY": {
								const e = Ds(r, t, a);
								if (e.isSupported()) {
									if ("NONE" === e.method) {
										h = void 0;
										break
									}
									h || (h = {}), h[e.keyFormat] && (h = Xt({}, h)), h[e.keyFormat] = e
								} else ni.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${r}"`);
								break
							}
							case "START":
								a.startTimeOffset = Cs(r);
								break;
							case "MAP": {
								const e = new li(r);
								if (ms(a, e, ["BYTERANGE", "URI"]), v.duration) {
									const r = new gi(s, t);
									Ms(r, e, i, h), c = r, v.initSegment = c, c.rawProgramDateTime && !v.rawProgramDateTime && (v.rawProgramDateTime = c.rawProgramDateTime)
								} else Ms(v, e, i, h), c = v, E = !0;
								break
							}
							case "SERVER-CONTROL": {
								const e = new li(r);
								a.canBlockReload = e.bool("CAN-BLOCK-RELOAD"), a.canSkipUntil = e.optionalFloat("CAN-SKIP-UNTIL", 0), a.canSkipDateRanges = a.canSkipUntil > 0 && e.bool("CAN-SKIP-DATERANGES"), a.partHoldBack = e.optionalFloat("PART-HOLD-BACK", 0), a.holdBack = e.optionalFloat("HOLD-BACK", 0);
								break
							}
							case "PART-INF": {
								const e = new li(r);
								a.partTarget = e.decimalFloatingPoint("PART-TARGET");
								break
							}
							case "PART": {
								let e = a.partList;
								e || (e = a.partList = []);
								const i = f > 0 ? e[e.length - 1] : void 0,
									s = f++,
									n = new li(r);
								ms(a, n, ["BYTERANGE", "URI"]);
								const o = new pi(n, v, t, s, i);
								e.push(o), v.duration += o.duration;
								break
							}
							case "PRELOAD-HINT": {
								const e = new li(r);
								ms(a, e, ["URI"]), a.preloadHint = e;
								break
							}
							case "RENDITION-REPORT": {
								const e = new li(r);
								ms(a, e, ["URI"]), a.renditionReports = a.renditionReports || [], a.renditionReports.push(e);
								break
							}
							default:
								ni.warn(`line parsed but not handled: ${l}`)
							}
						}
					}
					m && !m.relurl ? (o.pop(), g -= m.duration, a.partList && (a.fragmentHint = m)) : a.partList && (xs(v, m), v.cc = p, a.fragmentHint = v, h && Fs(v, h, a));
					const _ = o.length,
						b = o[0],
						T = o[_ - 1];
					if ((g += a.skippedSegments * a.targetduration) > 0 && _ && T) {
						a.averagetargetduration = g / _;
						const e = T.sn;
						a.endSN = "initSegment" !== e ? e : 0, a.live || (T.endList = !0), b && (a.startCC = b.cc)
					} else a.endSN = 0, a.startCC = 0;
					return a.fragmentHint && (g += a.fragmentHint.duration), a.totalduration = g, a.endCC = p, y > 0 && function(e, t) {
						let i = e[t];
						for (let s = t; s--;) {
							const t = e[s];
							if (!t) return;
							t.programDateTime = i.programDateTime - 1e3 * t.duration, i = t
						}
					}(o, y), a
				}
			}

			function Ds(e, t, i) {
				var s, r;
				const n = new li(e);
				ms(i, n, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
				const a = null != (s = n.METHOD) ? s : "",
					o = n.URI,
					l = n.hexadecimalInteger("IV"),
					d = n.KEYFORMATVERSIONS,
					h = null != (r = n.KEYFORMAT) ? r : "identity";
				o && n.IV && !l && ni.error(`Invalid IV: ${n.IV}`);
				const c = o ? Is.resolve(o, t) : "",
					u = (d || "1").split("/").map(Number).filter(Number.isFinite);
				return new fs(a, c, h, u, l)
			}

			function Cs(e) {
				const t = new li(e).decimalFloatingPoint("TIME-OFFSET");
				return Qt(t) ? t : null
			}

			function Ps(e, t) {
				["video", "audio", "text"].forEach(i => {
					const s = e.filter(e => (function(e, t) {
						const i = bs[t];
						return !!i && !0 === i[e.slice(0, 4)]
					})(e, i));
					if (s.length) {
						const r = s.filter(e => 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0));
						t[`${i}Codec`] = r.length > 0 ? r[0] : s[0], e = e.filter(e => -1 === s.indexOf(e))
					}
				}), t.unknownCodecs = e
			}

			function Os(e, t, i) {
				const s = t[i];
				s && (e[i] = s)
			}

			function xs(e, t) {
				e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : null != t && t.programDateTime && (e.programDateTime = t.endProgramDateTime), Qt(e.programDateTime) || (e.programDateTime = null, e.rawProgramDateTime = null)
			}

			function Ms(e, t, i, s) {
				e.relurl = t.URI, t.BYTERANGE && e.setByteRange(t.BYTERANGE), e.level = i, e.sn = "initSegment", s && (e.levelkeys = s), e.initSegment = null
			}

			function Fs(e, t, i) {
				e.levelkeys = t;
				const {
					encryptedFragments: s
				} = i;
				s.length && s[s.length - 1].levelkeys === t || !Object.keys(t).some(e => t[e].isCommonEncryption) || s.push(e)
			}
			var Ns = {
					MANIFEST: "manifest",
					LEVEL: "level",
					AUDIO_TRACK: "audioTrack",
					SUBTITLE_TRACK: "subtitleTrack"
				},
				Us = {
					MAIN: "main",
					AUDIO: "audio",
					SUBTITLE: "subtitle"
				};

			function Bs(e) {
				const {
					type: t
				} = e;
				switch (t) {
					case Ns.AUDIO_TRACK:
						return Us.AUDIO;
					case Ns.SUBTITLE_TRACK:
						return Us.SUBTITLE;
					default:
						return Us.MAIN
				}
			}

			function $s(e, t) {
				let i = e.url;
				return void 0 !== i && 0 !== i.indexOf("data:") || (i = t.url), i
			}
			class Vs {
				constructor(e) {
					this.hls = void 0, this.loaders = Object.create(null), this.variableList = null, this.hls = e, this.registerListeners()
				}
				startLoad(e) {}
				stopLoad() {
					this.destroyInternalLoaders()
				}
				registerListeners() {
					const {
						hls: e
					} = this;
					e.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.on(Jt.LEVEL_LOADING, this.onLevelLoading, this), e.on(Jt.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(Jt.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
				}
				unregisterListeners() {
					const {
						hls: e
					} = this;
					e.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.off(Jt.LEVEL_LOADING, this.onLevelLoading, this), e.off(Jt.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(Jt.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
				}
				createInternalLoader(e) {
					const t = this.hls.config,
						i = t.pLoader,
						s = t.loader,
						r = new(i || s)(t);
					return this.loaders[e.type] = r, r
				}
				getInternalLoader(e) {
					return this.loaders[e.type]
				}
				resetInternalLoader(e) {
					this.loaders[e] && delete this.loaders[e]
				}
				destroyInternalLoaders() {
					for (const e in this.loaders) {
						const t = this.loaders[e];
						t && t.destroy(), this.resetInternalLoader(e)
					}
				}
				destroy() {
					this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders()
				}
				onManifestLoading(e, t) {
					const {
						url: i
					} = t;
					this.variableList = null, this.load({
						id: null,
						level: 0,
						responseType: "text",
						type: Ns.MANIFEST,
						url: i,
						deliveryDirectives: null
					})
				}
				onLevelLoading(e, t) {
					const {
						id: i,
						level: s,
						url: r,
						deliveryDirectives: n
					} = t;
					this.load({
						id: i,
						level: s,
						responseType: "text",
						type: Ns.LEVEL,
						url: r,
						deliveryDirectives: n
					})
				}
				onAudioTrackLoading(e, t) {
					const {
						id: i,
						groupId: s,
						url: r,
						deliveryDirectives: n
					} = t;
					this.load({
						id: i,
						groupId: s,
						level: null,
						responseType: "text",
						type: Ns.AUDIO_TRACK,
						url: r,
						deliveryDirectives: n
					})
				}
				onSubtitleTrackLoading(e, t) {
					const {
						id: i,
						groupId: s,
						url: r,
						deliveryDirectives: n
					} = t;
					this.load({
						id: i,
						groupId: s,
						level: null,
						responseType: "text",
						type: Ns.SUBTITLE_TRACK,
						url: r,
						deliveryDirectives: n
					})
				}
				load(e) {
					var t;
					const i = this.hls.config;
					let s, r = this.getInternalLoader(e);
					if (r) {
						const t = r.context;
						if (t && t.url === e.url) return void ni.trace("[playlist-loader]: playlist request ongoing");
						ni.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), r.abort()
					}
					if (s = e.type === Ns.MANIFEST ? i.manifestLoadPolicy.default : Xt({}, i.playlistLoadPolicy.default, {
							timeoutRetry: null,
							errorRetry: null
						}), r = this.createInternalLoader(e), null != (t = e.deliveryDirectives) && t.part) {
						let t;
						if (e.type === Ns.LEVEL && null !== e.level ? t = this.hls.levels[e.level].details : e.type === Ns.AUDIO_TRACK && null !== e.id ? t = this.hls.audioTracks[e.id].details : e.type === Ns.SUBTITLE_TRACK && null !== e.id && (t = this.hls.subtitleTracks[e.id].details), t) {
							const e = t.partTarget,
								i = t.targetduration;
							if (e && i) {
								const t = 1e3 * Math.max(3 * e, .8 * i);
								s = Xt({}, s, {
									maxTimeToFirstByteMs: Math.min(t, s.maxTimeToFirstByteMs),
									maxLoadTimeMs: Math.min(t, s.maxTimeToFirstByteMs)
								})
							}
						}
					}
					const n = s.errorRetry || s.timeoutRetry || {},
						a = {
							loadPolicy: s,
							timeout: s.maxLoadTimeMs,
							maxRetry: n.maxNumRetry || 0,
							retryDelay: n.retryDelayMs || 0,
							maxRetryDelay: n.maxRetryDelayMs || 0
						},
						o = {
							onSuccess: (e, t, i, s) => {
								const r = this.getInternalLoader(i);
								this.resetInternalLoader(i.type);
								const n = e.data;
								0 === n.indexOf("#EXTM3U") ? (t.parsing.start = performance.now(), Is.isMediaPlaylist(n) ? this.handleTrackOrLevelPlaylist(e, t, i, s || null, r) : this.handleMasterPlaylist(e, t, i, s)) : this.handleManifestParsingError(e, i, new Error("no EXTM3U delimiter"), s || null, t)
							},
							onError: (e, t, i, s) => {
								this.handleNetworkError(t, i, !1, e, s)
							},
							onTimeout: (e, t, i) => {
								this.handleNetworkError(t, i, !0, void 0, e)
							}
						};
					r.load(e, a, o)
				}
				handleMasterPlaylist(e, t, i, s) {
					const r = this.hls,
						n = e.data,
						a = $s(e, i),
						o = Is.parseMasterPlaylist(n, a);
					if (o.playlistParsingError) return void this.handleManifestParsingError(e, i, o.playlistParsingError, s, t);
					const {
						contentSteering: l,
						levels: d,
						sessionData: h,
						sessionKeys: c,
						startTimeOffset: u,
						variableList: f
					} = o;
					this.variableList = f;
					const {
						AUDIO: g = [],
						SUBTITLES: p,
						"CLOSED-CAPTIONS": m
					} = Is.parseMasterPlaylistMedia(n, a, o);
					if (g.length) {
						g.some(e => !e.url) || !d[0].audioCodec || d[0].attrs.AUDIO || (ni.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), g.unshift({
							type: "main",
							name: "main",
							groupId: "main",
							default: !1,
							autoselect: !1,
							forced: !1,
							id: -1,
							attrs: new li({}),
							bitrate: 0,
							url: ""
						}))
					}
					r.trigger(Jt.MANIFEST_LOADED, {
						levels: d,
						audioTracks: g,
						subtitles: p,
						captions: m,
						contentSteering: l,
						url: a,
						stats: t,
						networkDetails: s,
						sessionData: h,
						sessionKeys: c,
						startTimeOffset: u,
						variableList: f
					})
				}
				handleTrackOrLevelPlaylist(e, t, i, s, r) {
					const n = this.hls,
						{
							id: a,
							level: o,
							type: l
						} = i,
						d = $s(e, i),
						h = Qt(a) ? a : 0,
						c = Qt(o) ? o : h,
						u = Bs(i),
						f = Is.parseLevelPlaylist(e.data, d, c, u, h, this.variableList);
					if (l === Ns.MANIFEST) {
						const e = {
							attrs: new li({}),
							bitrate: 0,
							details: f,
							name: "",
							url: d
						};
						n.trigger(Jt.MANIFEST_LOADED, {
							levels: [e],
							audioTracks: [],
							url: d,
							stats: t,
							networkDetails: s,
							sessionData: null,
							sessionKeys: null,
							contentSteering: null,
							startTimeOffset: null,
							variableList: null
						})
					}
					t.parsing.end = performance.now(), i.levelDetails = f, this.handlePlaylistLoaded(f, e, t, i, s, r)
				}
				handleManifestParsingError(e, t, i, s, r) {
					this.hls.trigger(Jt.ERROR, {
						type: Zt.NETWORK_ERROR,
						details: ei.MANIFEST_PARSING_ERROR,
						fatal: t.type === Ns.MANIFEST,
						url: e.url,
						err: i,
						error: i,
						reason: i.message,
						response: e,
						context: t,
						networkDetails: s,
						stats: r
					})
				}
				handleNetworkError(e, t, i = !1, s, r) {
					let n = `A network ${i?"timeout":"error"+(s?" (status "+s.code+")":"")} occurred while loading ${e.type}`;
					e.type === Ns.LEVEL ? n += `: ${e.level} id: ${e.id}` : e.type !== Ns.AUDIO_TRACK && e.type !== Ns.SUBTITLE_TRACK || (n += ` id: ${e.id} group-id: "${e.groupId}"`);
					const a = new Error(n);
					ni.warn(`[playlist-loader]: ${n}`);
					let o = ei.UNKNOWN,
						l = !1;
					const d = this.getInternalLoader(e);
					switch (e.type) {
						case Ns.MANIFEST:
							o = i ? ei.MANIFEST_LOAD_TIMEOUT : ei.MANIFEST_LOAD_ERROR, l = !0;
							break;
						case Ns.LEVEL:
							o = i ? ei.LEVEL_LOAD_TIMEOUT : ei.LEVEL_LOAD_ERROR, l = !1;
							break;
						case Ns.AUDIO_TRACK:
							o = i ? ei.AUDIO_TRACK_LOAD_TIMEOUT : ei.AUDIO_TRACK_LOAD_ERROR, l = !1;
							break;
						case Ns.SUBTITLE_TRACK:
							o = i ? ei.SUBTITLE_TRACK_LOAD_TIMEOUT : ei.SUBTITLE_LOAD_ERROR, l = !1
					}
					d && this.resetInternalLoader(e.type);
					const h = {
						type: Zt.NETWORK_ERROR,
						details: o,
						fatal: l,
						url: e.url,
						loader: d,
						context: e,
						error: a,
						networkDetails: t,
						stats: r
					};
					if (s) {
						const i = (null == t ? void 0 : t.url) || e.url;
						h.response = Yt({
							url: i,
							data: void 0
						}, s)
					}
					this.hls.trigger(Jt.ERROR, h)
				}
				handlePlaylistLoaded(e, t, i, s, r, n) {
					const a = this.hls,
						{
							type: o,
							level: l,
							id: d,
							groupId: h,
							deliveryDirectives: c
						} = s,
						u = $s(t, s),
						f = Bs(s),
						g = "number" == typeof s.level && f === Us.MAIN ? l : void 0;
					if (!e.fragments.length) {
						const e = new Error("No Segments found in Playlist");
						return void a.trigger(Jt.ERROR, {
							type: Zt.NETWORK_ERROR,
							details: ei.LEVEL_EMPTY_ERROR,
							fatal: !1,
							url: u,
							error: e,
							reason: e.message,
							response: t,
							context: s,
							level: g,
							parent: f,
							networkDetails: r,
							stats: i
						})
					}
					e.targetduration || (e.playlistParsingError = new Error("Missing Target Duration"));
					const p = e.playlistParsingError;
					if (p) a.trigger(Jt.ERROR, {
						type: Zt.NETWORK_ERROR,
						details: ei.LEVEL_PARSING_ERROR,
						fatal: !1,
						url: u,
						error: p,
						reason: p.message,
						response: t,
						context: s,
						level: g,
						parent: f,
						networkDetails: r,
						stats: i
					});
					else switch (e.live && n && (n.getCacheAge && (e.ageHeader = n.getCacheAge() || 0), n.getCacheAge && !isNaN(e.ageHeader) || (e.ageHeader = 0)), o) {
						case Ns.MANIFEST:
						case Ns.LEVEL:
							a.trigger(Jt.LEVEL_LOADED, {
								details: e,
								level: g || 0,
								id: d || 0,
								stats: i,
								networkDetails: r,
								deliveryDirectives: c
							});
							break;
						case Ns.AUDIO_TRACK:
							a.trigger(Jt.AUDIO_TRACK_LOADED, {
								details: e,
								id: d || 0,
								groupId: h || "",
								stats: i,
								networkDetails: r,
								deliveryDirectives: c
							});
							break;
						case Ns.SUBTITLE_TRACK:
							a.trigger(Jt.SUBTITLE_TRACK_LOADED, {
								details: e,
								id: d || 0,
								groupId: h || "",
								stats: i,
								networkDetails: r,
								deliveryDirectives: c
							})
					}
				}
			}

			function Gs(e, t) {
				let i;
				try {
					i = new Event("addtrack")
				} catch (s) {
					(i = document.createEvent("Event")).initEvent("addtrack", !1, !1)
				}
				i.track = e, t.dispatchEvent(i)
			}

			function js(e, t) {
				const i = e.mode;
				if ("disabled" === i && (e.mode = "hidden"), e.cues && !e.cues.getCueById(t.id)) try {
					if (e.addCue(t), !e.cues.getCueById(t.id)) throw new Error(`addCue is failed for: ${t}`)
				} catch (s) {
					ni.debug(`[texttrack-utils]: ${s}`);
					const i = new self.TextTrackCue(t.startTime, t.endTime, t.text);
					i.id = t.id, e.addCue(i)
				}
				"disabled" === i && (e.mode = i)
			}

			function Hs(e) {
				const t = e.mode;
				if ("disabled" === t && (e.mode = "hidden"), e.cues)
					for (let i = e.cues.length; i--;) e.removeCue(e.cues[i]);
				"disabled" === t && (e.mode = t)
			}

			function Ks(e, t, i, s) {
				const r = e.mode;
				if ("disabled" === r && (e.mode = "hidden"), e.cues && e.cues.length > 0) {
					const r = function(e, t, i) {
						const s = [],
							r = function(e, t) {
								if (t < e[0].startTime) return 0;
								const i = e.length - 1;
								if (t > e[i].endTime) return -1;
								let s = 0,
									r = i;
								for (; s <= r;) {
									const n = Math.floor((r + s) / 2);
									if (t < e[n].startTime) r = n - 1;
									else {
										if (!(t > e[n].startTime && s < i)) return n;
										s = n + 1
									}
								}
								return e[s].startTime - t < t - e[r].startTime ? s : r
							}(e, t);
						if (r > -1)
							for (let n = r, a = e.length; n < a; n++) {
								const r = e[n];
								if (r.startTime >= t && r.endTime <= i) s.push(r);
								else if (r.startTime > i) return s
							}
						return s
					}(e.cues, t, i);
					for (let t = 0; t < r.length; t++) s && !s(r[t]) || e.removeCue(r[t])
				}
				"disabled" === r && (e.mode = r)
			}
			var qs = {
				audioId3: "org.id3",
				dateRange: "com.apple.quicktime.HLS",
				emsg: "https://aomedia.org/emsg/ID3"
			};
			const Ws = .25;

			function Ys() {
				if ("undefined" != typeof self) return self.WebKitDataCue || self.VTTCue || self.TextTrackCue
			}
			const zs = (() => {
				const e = Ys();
				try {
					new e(0, Number.POSITIVE_INFINITY, "")
				} catch (t) {
					return Number.MAX_VALUE
				}
				return Number.POSITIVE_INFINITY
			})();

			function Xs(e, t) {
				return e.getTime() / 1e3 - t
			}
			class Qs {
				constructor(e) {
					this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = e, this._registerListeners()
				}
				destroy() {
					this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null
				}
				_registerListeners() {
					const {
						hls: e
					} = this;
					e.on(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.on(Jt.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.on(Jt.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(Jt.LEVEL_UPDATED, this.onLevelUpdated, this)
				}
				_unregisterListeners() {
					const {
						hls: e
					} = this;
					e.off(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.off(Jt.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.off(Jt.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(Jt.LEVEL_UPDATED, this.onLevelUpdated, this)
				}
				onMediaAttached(e, t) {
					this.media = t.media
				}
				onMediaDetaching() {
					this.id3Track && (Hs(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {})
				}
				onManifestLoading() {
					this.dateRangeCuesAppended = {}
				}
				createTrack(e) {
					const t = this.getID3Track(e.textTracks);
					return t.mode = "hidden", t
				}
				getID3Track(e) {
					if (this.media) {
						for (let t = 0; t < e.length; t++) {
							const i = e[t];
							if ("metadata" === i.kind && "id3" === i.label) return Gs(i, this.media), i
						}
						return this.media.addTextTrack("metadata", "id3")
					}
				}
				onFragParsingMetadata(e, t) {
					if (!this.media) return;
					const {
						hls: {
							config: {
								enableEmsgMetadataCues: i,
								enableID3MetadataCues: s
							}
						}
					} = this;
					if (!i && !s) return;
					const {
						samples: r
					} = t;
					this.id3Track || (this.id3Track = this.createTrack(this.media));
					const n = Ys();
					for (let a = 0; a < r.length; a++) {
						const e = r[a].type;
						if (e === qs.emsg && !i || !s) continue;
						const t = Ni(r[a].data);
						if (t) {
							const i = r[a].pts;
							let s = i + r[a].duration;
							s > zs && (s = zs), s - i <= 0 && (s = i + Ws);
							for (let r = 0; r < t.length; r++) {
								const a = t[r];
								if (!Mi(a)) {
									this.updateId3CueEnds(i, e);
									const t = new n(i, s, "");
									t.value = a, e && (t.type = e), this.id3Track.addCue(t)
								}
							}
						}
					}
				}
				updateId3CueEnds(e, t) {
					var i;
					const s = null == (i = this.id3Track) ? void 0 : i.cues;
					if (s)
						for (let r = s.length; r--;) {
							const i = s[r];
							i.type === t && i.startTime < e && i.endTime === zs && (i.endTime = e)
						}
				}
				onBufferFlushing(e, {
					startOffset: t,
					endOffset: i,
					type: s
				}) {
					const {
						id3Track: r,
						hls: n
					} = this;
					if (!n) return;
					const {
						config: {
							enableEmsgMetadataCues: a,
							enableID3MetadataCues: o
						}
					} = n;
					if (r && (a || o)) {
						let e;
						Ks(r, t, i, e = "audio" === s ? e => e.type === qs.audioId3 && o : "video" === s ? e => e.type === qs.emsg && a : e => e.type === qs.audioId3 && o || e.type === qs.emsg && a)
					}
				}
				onLevelUpdated(e, {
					details: t
				}) {
					if (!this.media || !t.hasProgramDateTime || !this.hls.config.enableDateRangeMetadataCues) return;
					const {
						dateRangeCuesAppended: i,
						id3Track: s
					} = this, {
						dateRanges: r
					} = t, n = Object.keys(r);
					if (s) {
						const e = Object.keys(i).filter(e => !n.includes(e));
						for (let t = e.length; t--;) {
							const r = e[t];
							Object.keys(i[r].cues).forEach(e => {
								s.removeCue(i[r].cues[e])
							}), delete i[r]
						}
					}
					const a = t.fragments[t.fragments.length - 1];
					if (0 === n.length || !Qt(null == a ? void 0 : a.programDateTime)) return;
					this.id3Track || (this.id3Track = this.createTrack(this.media));
					const o = a.programDateTime / 1e3 - a.start,
						l = Ys();
					for (let c = 0; c < n.length; c++) {
						const e = n[c],
							t = r[e],
							s = i[e],
							a = (null == s ? void 0 : s.cues) || {};
						let u = (null == s ? void 0 : s.durationKnown) || !1;
						const f = Xs(t.startDate, o);
						let g = zs;
						const p = t.endDate;
						if (p) g = Xs(p, o), u = !0;
						else if (t.endOnNext && !u) {
							const e = n.reduce((e, i) => {
								const s = r[i];
								return s.class === t.class && s.id !== i && s.startDate > t.startDate && e.push(s), e
							}, []).sort((e, t) => e.startDate.getTime() - t.startDate.getTime())[0];
							e && (g = Xs(e.startDate, o), u = !0)
						}
						const m = Object.keys(t.attr);
						for (let i = 0; i < m.length; i++) {
							const r = m[i];
							if ("ID" === (h = r) || "CLASS" === h || "START-DATE" === h || "DURATION" === h || "END-DATE" === h || "END-ON-NEXT" === h) continue;
							let n = a[r];
							if (n) u && !s.durationKnown && (n.endTime = g);
							else {
								let i = t.attr[r];
								n = new l(f, g, ""), di(r) && (d = i, i = Uint8Array.from(d.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer), n.value = {
									key: r,
									data: i
								}, n.type = qs.dateRange, n.id = e, this.id3Track.addCue(n), a[r] = n
							}
						}
						i[e] = {
							cues: a,
							dateRange: t,
							durationKnown: u
						}
					}
					var d, h
				}
			}
			class Js {
				constructor(e) {
					this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = () => this.timeupdate(), this.hls = e, this.config = e.config, this.registerListeners()
				}
				get latency() {
					return this._latency || 0
				}
				get maxLatency() {
					const {
						config: e,
						levelDetails: t
					} = this;
					return void 0 !== e.liveMaxLatencyDuration ? e.liveMaxLatencyDuration : t ? e.liveMaxLatencyDurationCount * t.targetduration : 0
				}
				get targetLatency() {
					const {
						levelDetails: e
					} = this;
					if (null === e) return null;
					const {
						holdBack: t,
						partHoldBack: i,
						targetduration: s
					} = e, {
						liveSyncDuration: r,
						liveSyncDurationCount: n,
						lowLatencyMode: a
					} = this.config, o = this.hls.userConfig;
					let l = a && i || t;
					(o.liveSyncDuration || o.liveSyncDurationCount || 0 === l) && (l = void 0 !== r ? r : n * s);
					const d = s;
					return l + Math.min(1 * this.stallCount, d)
				}
				get liveSyncPosition() {
					const e = this.estimateLiveEdge(),
						t = this.targetLatency,
						i = this.levelDetails;
					if (null === e || null === t || null === i) return null;
					const s = i.edge,
						r = e - t - this.edgeStalled,
						n = s - i.totalduration,
						a = s - (this.config.lowLatencyMode && i.partTarget || i.targetduration);
					return Math.min(Math.max(n, r), a)
				}
				get drift() {
					const {
						levelDetails: e
					} = this;
					return null === e ? 1 : e.drift
				}
				get edgeStalled() {
					const {
						levelDetails: e
					} = this;
					if (null === e) return 0;
					const t = 3 * (this.config.lowLatencyMode && e.partTarget || e.targetduration);
					return Math.max(e.age - t, 0)
				}
				get forwardBufferLength() {
					const {
						media: e,
						levelDetails: t
					} = this;
					if (!e || !t) return 0;
					const i = e.buffered.length;
					return (i ? e.buffered.end(i - 1) : t.edge) - this.currentTime
				}
				destroy() {
					this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null
				}
				registerListeners() {
					this.hls.on(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(Jt.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(Jt.ERROR, this.onError, this)
				}
				unregisterListeners() {
					this.hls.off(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(Jt.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(Jt.ERROR, this.onError, this)
				}
				onMediaAttached(e, t) {
					this.media = t.media, this.media.addEventListener("timeupdate", this.timeupdateHandler)
				}
				onMediaDetaching() {
					this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null)
				}
				onManifestLoading() {
					this.levelDetails = null, this._latency = null, this.stallCount = 0
				}
				onLevelUpdated(e, {
					details: t
				}) {
					this.levelDetails = t, t.advanced && this.timeupdate(), !t.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler)
				}
				onError(e, t) {
					var i;
					t.details === ei.BUFFER_STALLED_ERROR && (this.stallCount++, null != (i = this.levelDetails) && i.live && ni.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
				}
				timeupdate() {
					const {
						media: e,
						levelDetails: t
					} = this;
					if (!e || !t) return;
					this.currentTime = e.currentTime;
					const i = this.computeLatency();
					if (null === i) return;
					this._latency = i;
					const {
						lowLatencyMode: s,
						maxLiveSyncPlaybackRate: r
					} = this.config;
					if (!s || 1 === r) return;
					const n = this.targetLatency;
					if (null === n) return;
					const a = i - n,
						o = a < Math.min(this.maxLatency, n + t.targetduration);
					if (t.live && o && a > .05 && this.forwardBufferLength > 1) {
						const t = Math.min(2, Math.max(1, r)),
							i = Math.round(2 / (1 + Math.exp(-.75 * a - this.edgeStalled)) * 20) / 20;
						e.playbackRate = Math.min(t, Math.max(1, i))
					} else 1 !== e.playbackRate && 0 !== e.playbackRate && (e.playbackRate = 1)
				}
				estimateLiveEdge() {
					const {
						levelDetails: e
					} = this;
					return null === e ? null : e.edge + e.age
				}
				computeLatency() {
					const e = this.estimateLiveEdge();
					return null === e ? null : e - this.currentTime
				}
			}
			const Zs = ["NONE", "TYPE-0", "TYPE-1", null];
			var er = {
				No: "",
				Yes: "YES",
				v2: "v2"
			};
			class tr {
				constructor(e, t, i) {
					this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e, this.part = t, this.skip = i
				}
				addDirectives(e) {
					const t = new self.URL(e);
					return void 0 !== this.msn && t.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href
				}
			}
			class ir {
				constructor(e) {
					this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [e.url], this._attrs = [e.attrs], this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.unknownCodecs = e.unknownCodecs, this.codecSet = [e.videoCodec, e.audioCodec].filter(e => e).join(",").replace(/\.[^.,]+/g, "")
				}
				get maxBitrate() {
					return Math.max(this.realBitrate, this.bitrate)
				}
				get attrs() {
					return this._attrs[this._urlId]
				}
				get pathwayId() {
					return this.attrs["PATHWAY-ID"] || "."
				}
				get uri() {
					return this.url[this._urlId] || ""
				}
				get urlId() {
					return this._urlId
				}
				set urlId(e) {
					const t = e % this.url.length;
					this._urlId !== t && (this.fragmentError = 0, this.loadError = 0, this.details = void 0, this._urlId = t)
				}
				get audioGroupId() {
					var e;
					return null == (e = this.audioGroupIds) ? void 0 : e[this.urlId]
				}
				get textGroupId() {
					var e;
					return null == (e = this.textGroupIds) ? void 0 : e[this.urlId]
				}
				addFallback(e) {
					this.url.push(e.url), this._attrs.push(e.attrs)
				}
			}

			function sr(e, t) {
				const i = t.startPTS;
				if (Qt(i)) {
					let s, r = 0;
					t.sn > e.sn ? (r = i - e.start, s = e) : (r = e.start - i, s = t), s.duration !== r && (s.duration = r)
				} else if (t.sn > e.sn) {
					e.cc === t.cc && e.minEndPTS ? t.start = e.start + (e.minEndPTS - e.start) : t.start = e.start + e.duration
				} else t.start = Math.max(e.start - t.duration, 0)
			}

			function rr(e, t, i, s, r, n) {
				s - i <= 0 && (ni.warn("Fragment should have a positive duration", t), s = i + t.duration, n = r + t.duration);
				let a = i,
					o = s;
				const l = t.startPTS,
					d = t.endPTS;
				if (Qt(l)) {
					const e = Math.abs(l - i);
					Qt(t.deltaPTS) ? t.deltaPTS = Math.max(e, t.deltaPTS) : t.deltaPTS = e, a = Math.max(i, l), i = Math.min(i, l), r = Math.min(r, t.startDTS), o = Math.min(s, d), s = Math.max(s, d), n = Math.max(n, t.endDTS)
				}
				const h = i - t.start;
				0 !== t.start && (t.start = i), t.duration = s - t.start, t.startPTS = i, t.maxStartPTS = a, t.startDTS = r, t.endPTS = s, t.minEndPTS = o, t.endDTS = n;
				const c = t.sn;
				if (!e || c < e.startSN || c > e.endSN) return 0;
				let u;
				const f = c - e.startSN,
					g = e.fragments;
				for (g[f] = t, u = f; u > 0; u--) sr(g[u], g[u - 1]);
				for (u = f; u < g.length - 1; u++) sr(g[u], g[u + 1]);
				return e.fragmentHint && sr(g[g.length - 1], e.fragmentHint), e.PTSKnown = e.alignedSliding = !0, h
			}

			function nr(e, t) {
				let i = null;
				const s = e.fragments;
				for (let l = s.length - 1; l >= 0; l--) {
					const e = s[l].initSegment;
					if (e) {
						i = e;
						break
					}
				}
				e.fragmentHint && delete e.fragmentHint.endPTS;
				let r, n = 0;
				if (function(e, t, i) {
						const s = t.skippedSegments,
							r = Math.max(e.startSN, t.startSN) - t.startSN,
							n = (e.fragmentHint ? 1 : 0) + (s ? t.endSN : Math.min(e.endSN, t.endSN)) - t.startSN,
							a = t.startSN - e.startSN,
							o = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments,
							l = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments;
						for (let d = r; d <= n; d++) {
							const e = l[a + d];
							let r = o[d];
							s && !r && d < s && (r = t.fragments[d] = e), e && r && i(e, r)
						}
					}(e, t, (e, s) => {
						e.relurl && (n = e.cc - s.cc), Qt(e.startPTS) && Qt(e.endPTS) && (s.start = s.startPTS = e.startPTS, s.startDTS = e.startDTS, s.maxStartPTS = e.maxStartPTS, s.endPTS = e.endPTS, s.endDTS = e.endDTS, s.minEndPTS = e.minEndPTS, s.duration = e.endPTS - e.startPTS, s.duration && (r = s), t.PTSKnown = t.alignedSliding = !0), s.elementaryStreams = e.elementaryStreams, s.loader = e.loader, s.stats = e.stats, s.urlId = e.urlId, e.initSegment && (s.initSegment = e.initSegment, i = e.initSegment)
					}), i) {
					(t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments).forEach(e => {
						var t;
						e.initSegment && e.initSegment.relurl !== (null == (t = i) ? void 0 : t.relurl) || (e.initSegment = i)
					})
				}
				if (t.skippedSegments)
					if (t.deltaUpdateFailed = t.fragments.some(e => !e), t.deltaUpdateFailed) {
						ni.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
						for (let e = t.skippedSegments; e--;) t.fragments.shift();
						t.startSN = t.fragments[0].sn, t.startCC = t.fragments[0].cc
					} else t.canSkipDateRanges && (t.dateRanges = function(e, t, i) {
						const s = Xt({}, e);
						i && i.forEach(e => {
							delete s[e]
						});
						return Object.keys(t).forEach(e => {
							const i = new hi(t[e].attr, s[e]);
							i.isValid ? s[e] = i : ni.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(t[e].attr)}"`)
						}), s
					}(e.dateRanges, t.dateRanges, t.recentlyRemovedDateranges));
				const a = t.fragments;
				if (n) {
					ni.warn("discontinuity sliding from playlist, take drift into account");
					for (let e = 0; e < a.length; e++) a[e].cc += n
				}
				t.skippedSegments && (t.startCC = t.fragments[0].cc),
					function(e, t, i) {
						if (e && t) {
							let s = 0;
							for (let r = 0, n = e.length; r <= n; r++) {
								const n = e[r],
									a = t[r + s];
								n && a && n.index === a.index && n.fragment.sn === a.fragment.sn ? i(n, a) : s--
							}
						}
					}(e.partList, t.partList, (e, t) => {
						t.elementaryStreams = e.elementaryStreams, t.stats = e.stats
					}), r ? rr(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : ar(e, t), a.length && (t.totalduration = t.edge - a[0].start), t.driftStartTime = e.driftStartTime, t.driftStart = e.driftStart;
				const o = t.advancedDateTime;
				if (t.advanced && o) {
					const e = t.edge;
					t.driftStart || (t.driftStartTime = o, t.driftStart = e), t.driftEndTime = o, t.driftEnd = e
				} else t.driftEndTime = e.driftEndTime, t.driftEnd = e.driftEnd, t.advancedDateTime = e.advancedDateTime
			}

			function ar(e, t) {
				const i = t.startSN + t.skippedSegments - e.startSN,
					s = e.fragments;
				i < 0 || i >= s.length || or(t, s[i].start)
			}

			function or(e, t) {
				if (t) {
					const i = e.fragments;
					for (let s = e.skippedSegments; s < i.length; s++) i[s].start += t;
					e.fragmentHint && (e.fragmentHint.start += t)
				}
			}

			function lr(e, t, i) {
				var s;
				return null != e && e.details ? dr(null == (s = e.details) ? void 0 : s.partList, t, i) : null
			}

			function dr(e, t, i) {
				if (e)
					for (let s = e.length; s--;) {
						const r = e[s];
						if (r.index === i && r.fragment.sn === t) return r
					}
				return null
			}

			function hr(e) {
				switch (e.details) {
					case ei.FRAG_LOAD_TIMEOUT:
					case ei.KEY_LOAD_TIMEOUT:
					case ei.LEVEL_LOAD_TIMEOUT:
					case ei.MANIFEST_LOAD_TIMEOUT:
						return !0
				}
				return !1
			}

			function cr(e, t) {
				const i = hr(t);
				return e.default[`${i?"timeout":"error"}Retry`]
			}

			function ur(e, t) {
				const i = "linear" === e.backoff ? 1 : Math.pow(2, t);
				return Math.min(i * e.retryDelayMs, e.maxRetryDelayMs)
			}

			function fr(e) {
				return Yt(Yt({}, e), {
					errorRetry: null,
					timeoutRetry: null
				})
			}

			function gr(e, t, i, s) {
				return !!e && t < e.maxNumRetry && (function(e) {
					return 0 === e && !1 === navigator.onLine || !!e && (e < 400 || e > 499)
				}(s) || !!i)
			}
			const pr = {
				search: function(e, t) {
					let i = 0,
						s = e.length - 1,
						r = null,
						n = null;
					for (; i <= s;) {
						const a = t(n = e[r = (i + s) / 2 | 0]);
						if (a > 0) i = r + 1;
						else {
							if (!(a < 0)) return n;
							s = r - 1
						}
					}
					return null
				}
			};

			function mr(e, t, i = 0, s = 0) {
				let r = null;
				if (e ? r = t[e.sn - t[0].sn + 1] || null : 0 === i && 0 === t[0].start && (r = t[0]), r && 0 === vr(i, s, r)) return r;
				const n = pr.search(t, vr.bind(null, i, s));
				return !n || n === e && r ? r : n
			}

			function vr(e = 0, t = 0, i) {
				if (i.start <= e && i.start + i.duration > e) return 0;
				const s = Math.min(t, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
				return i.start + i.duration - s <= e ? 1 : i.start - s > e && i.start ? -1 : 0
			}

			function yr(e, t, i) {
				const s = 1e3 * Math.min(t, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
				return (i.endProgramDateTime || 0) - s > e
			}
			const Er = 3e5;
			var _r = {
					DoNothing: 0,
					SendEndCallback: 1,
					SendAlternateToPenaltyBox: 2,
					RemoveAlternatePermanently: 3,
					InsertDiscontinuity: 4,
					RetryRequest: 5
				},
				br = {
					None: 0,
					MoveAllAlternatesMatchingHost: 1,
					MoveAllAlternatesMatchingHDCP: 2,
					SwitchToSDR: 4
				};

			function Tr(e, t, i) {
				if (performance.now() - e.lastErrorPerfMs > Er) return !0;
				const s = e.details;
				if (t.details === ei.FRAG_GAP && s && t.frag) {
					const e = t.frag.start,
						i = mr(null, s.fragments, e);
					if (i && !i.gap) return !0
				}
				if (i && e.errors.length < i.errors.length) {
					const i = e.errors[e.errors.length - 1];
					if (s && i.frag && t.frag && Math.abs(i.frag.start - t.frag.start) > 3 * s.targetduration) return !0
				}
				return !1
			}
			class Sr {
				constructor(e, t) {
					this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = !1, this.log = void 0, this.warn = void 0, this.log = ni.log.bind(ni, `${t}:`), this.warn = ni.warn.bind(ni, `${t}:`), this.hls = e
				}
				destroy() {
					this.clearTimer(), this.hls = this.log = this.warn = null
				}
				clearTimer() {
					clearTimeout(this.timer), this.timer = -1
				}
				startLoad() {
					this.canLoad = !0, this.requestScheduled = -1, this.loadPlaylist()
				}
				stopLoad() {
					this.canLoad = !1, this.clearTimer()
				}
				switchParams(e, t) {
					const i = null == t ? void 0 : t.renditionReports;
					if (i) {
						let r = -1;
						for (let n = 0; n < i.length; n++) {
							const a = i[n];
							let o;
							try {
								o = new self.URL(a.URI, t.url).href
							} catch (s) {
								ni.warn(`Could not construct new URL for Rendition Report: ${s}`), o = a.URI || ""
							}
							if (o === e) {
								r = n;
								break
							}
							o === e.substring(0, o.length) && (r = n)
						}
						if (-1 !== r) {
							const e = i[r],
								s = parseInt(e["LAST-MSN"]) || (null == t ? void 0 : t.lastPartSn);
							let n = parseInt(e["LAST-PART"]) || (null == t ? void 0 : t.lastPartIndex);
							if (this.hls.config.lowLatencyMode) {
								const e = Math.min(t.age - t.partTarget, t.targetduration);
								n >= 0 && e > t.partTarget && (n += 1)
							}
							return new tr(s, n >= 0 ? n : void 0, er.No)
						}
					}
				}
				loadPlaylist(e) {
					-1 === this.requestScheduled && (this.requestScheduled = self.performance.now())
				}
				shouldLoadPlaylist(e) {
					return this.canLoad && !!e && !!e.url && (!e.details || e.details.live)
				}
				shouldReloadPlaylist(e) {
					return -1 === this.timer && -1 === this.requestScheduled && this.shouldLoadPlaylist(e)
				}
				playlistLoaded(e, t, i) {
					const {
						details: s,
						stats: r
					} = t, n = self.performance.now(), a = r.loading.first ? Math.max(0, n - r.loading.first) : 0;
					if (s.advancedDateTime = Date.now() - a, s.live || null != i && i.live) {
						if (s.reloaded(i), i && this.log(`live playlist ${e} ${s.advanced?"REFRESHED "+s.lastPartSn+"-"+s.lastPartIndex:"MISSED"}`), i && s.fragments.length > 0 && nr(i, s), !this.canLoad || !s.live) return;
						let a, o = void 0,
							l = void 0;
						if (s.canBlockReload && s.endSN && s.advanced) {
							const e = this.hls.config.lowLatencyMode,
								r = s.lastPartSn,
								n = s.endSN,
								d = s.lastPartIndex,
								h = r === n,
								c = e ? 0 : d; - 1 !== d ? (o = h ? n + 1 : r, l = h ? c : d + 1) : o = n + 1;
							const u = s.age,
								f = u + s.ageHeader;
							let g = Math.min(f - s.partTarget, 1.5 * s.targetduration);
							if (g > 0) {
								if (i && g > i.tuneInGoal) this.warn(`CDN Tune-in goal increased from: ${i.tuneInGoal} to: ${g} with playlist age: ${s.age}`), g = 0;
								else {
									const e = Math.floor(g / s.targetduration);
									if (o += e, void 0 !== l) {
										l += Math.round(g % s.targetduration / s.partTarget)
									}
									this.log(`CDN Tune-in age: ${s.ageHeader}s last advanced ${u.toFixed(2)}s goal: ${g} skip sn ${e} to part ${l}`)
								}
								s.tuneInGoal = g
							}
							if (a = this.getDeliveryDirectives(s, t.deliveryDirectives, o, l), e || !h) return void this.loadPlaylist(a)
						} else s.canBlockReload && (a = this.getDeliveryDirectives(s, t.deliveryDirectives, o, l));
						const d = this.hls.mainForwardBufferInfo,
							h = d ? d.end - d.len : 0,
							c = function(e, t = 1 / 0) {
								let i = 1e3 * e.targetduration;
								if (e.updated) {
									const s = e.fragments,
										r = 4;
									if (s.length && i * r > t) {
										const e = 1e3 * s[s.length - 1].duration;
										e < i && (i = e)
									}
								} else i /= 2;
								return Math.round(i)
							}(s, 1e3 * (s.edge - h));
						s.updated && n > this.requestScheduled + c && (this.requestScheduled = r.loading.start), void 0 !== o && s.canBlockReload ? this.requestScheduled = r.loading.first + c - (1e3 * s.partTarget || 1e3) : -1 === this.requestScheduled || this.requestScheduled + c < n ? this.requestScheduled = n : this.requestScheduled - n <= 0 && (this.requestScheduled += c);
						let u = this.requestScheduled - n;
						u = Math.max(0, u), this.log(`reload live playlist ${e} in ${Math.round(u)} ms`), this.timer = self.setTimeout(() => this.loadPlaylist(a), u)
					} else this.clearTimer()
				}
				getDeliveryDirectives(e, t, i, s) {
					let r = function(e, t) {
						const {
							canSkipUntil: i,
							canSkipDateRanges: s,
							endSN: r
						} = e;
						return i && (void 0 !== t ? t - r : 0) < i ? s ? er.v2 : er.Yes : er.No
					}(e, i);
					return null != t && t.skip && e.deltaUpdateFailed && (i = t.msn, s = t.part, r = er.No), new tr(i, s, r)
				}
				checkRetry(e) {
					const t = e.details,
						i = hr(e),
						s = e.errorAction,
						{
							action: r,
							retryCount: n = 0,
							retryConfig: a
						} = s || {},
						o = !!s && !!a && (r === _r.RetryRequest || !s.resolved && r === _r.SendAlternateToPenaltyBox);
					if (o) {
						var l;
						if (this.requestScheduled = -1, n >= a.maxNumRetry) return !1;
						if (i && null != (l = e.context) && l.deliveryDirectives) this.warn(`Retrying playlist loading ${n+1}/${a.maxNumRetry} after "${t}" without delivery-directives`), this.loadPlaylist();
						else {
							const e = ur(a, n);
							this.timer = self.setTimeout(() => this.loadPlaylist(), e), this.warn(`Retrying playlist loading ${n+1}/${a.maxNumRetry} after "${t}" in ${e}ms`)
						}
						e.levelRetry = !0, s.resolved = !0
					}
					return o
				}
			}
			let Ar;
			class Lr extends Sr {
				constructor(e, t) {
					super(e, "[level-controller]"), this._levels = [], this._firstLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = t, this._registerListeners()
				}
				_registerListeners() {
					const {
						hls: e
					} = this;
					e.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.on(Jt.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(Jt.LEVEL_LOADED, this.onLevelLoaded, this), e.on(Jt.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(Jt.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(Jt.FRAG_LOADED, this.onFragLoaded, this), e.on(Jt.ERROR, this.onError, this)
				}
				_unregisterListeners() {
					const {
						hls: e
					} = this;
					e.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.off(Jt.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(Jt.LEVEL_LOADED, this.onLevelLoaded, this), e.off(Jt.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(Jt.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(Jt.FRAG_LOADED, this.onFragLoaded, this), e.off(Jt.ERROR, this.onError, this)
				}
				destroy() {
					this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy()
				}
				startLoad() {
					this._levels.forEach(e => {
						e.loadError = 0, e.fragmentError = 0
					}), super.startLoad()
				}
				resetLevels() {
					this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = []
				}
				onManifestLoading(e, t) {
					this.resetLevels()
				}
				onManifestLoaded(e, t) {
					const i = [],
						s = {};
					let r;
					t.levels.forEach(e => {
						var t;
						const n = e.attrs; - 1 !== (null == (t = e.audioCodec) ? void 0 : t.indexOf("mp4a.40.34")) && (Ar || (Ar = /chrome|firefox/i.test(navigator.userAgent)), Ar && (e.audioCodec = void 0));
						const {
							AUDIO: a,
							CODECS: o,
							"FRAME-RATE": l,
							"PATHWAY-ID": d,
							RESOLUTION: h,
							SUBTITLES: c
						} = n, u = `${`${d||"."}-`}${e.bitrate}-${h}-${l}-${o}`;
						(r = s[u]) ? r.addFallback(e): (r = new ir(e), s[u] = r, i.push(r)), Rr(r, "audio", a), Rr(r, "text", c)
					}), this.filterAndSortMediaOptions(i, t)
				}
				filterAndSortMediaOptions(e, t) {
					let i = [],
						s = [],
						r = !1,
						n = !1,
						a = !1,
						o = e.filter(({
							audioCodec: e,
							videoCodec: t,
							width: i,
							height: s,
							unknownCodecs: o
						}) => (r || (r = !(!i || !s)), n || (n = !!t), a || (a = !!e), !(null != o && o.length) && (!e || Ss(e, "audio")) && (!t || Ss(t, "video"))));
					if ((r || n) && a && (o = o.filter(({
							videoCodec: e,
							width: t,
							height: i
						}) => !!e || !(!t || !i))), 0 === o.length) return void Promise.resolve().then(() => {
						if (this.hls) {
							const e = new Error("no level with compatible codecs found in manifest");
							this.hls.trigger(Jt.ERROR, {
								type: Zt.MEDIA_ERROR,
								details: ei.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
								fatal: !0,
								url: t.url,
								error: e,
								reason: e.message
							})
						}
					});
					t.audioTracks && wr(i = t.audioTracks.filter(e => !e.audioCodec || Ss(e.audioCodec, "audio"))), t.subtitles && wr(s = t.subtitles);
					const l = o.slice(0);
					o.sort((e, t) => e.attrs["HDCP-LEVEL"] !== t.attrs["HDCP-LEVEL"] ? (e.attrs["HDCP-LEVEL"] || "") > (t.attrs["HDCP-LEVEL"] || "") ? 1 : -1 : e.bitrate !== t.bitrate ? e.bitrate - t.bitrate : e.attrs["FRAME-RATE"] !== t.attrs["FRAME-RATE"] ? e.attrs.decimalFloatingPoint("FRAME-RATE") - t.attrs.decimalFloatingPoint("FRAME-RATE") : e.attrs.SCORE !== t.attrs.SCORE ? e.attrs.decimalFloatingPoint("SCORE") - t.attrs.decimalFloatingPoint("SCORE") : r && e.height !== t.height ? e.height - t.height : 0);
					let d = l[0];
					if (this.steering && (o = this.steering.filterParsedLevels(o)).length !== l.length)
						for (let u = 0; u < l.length; u++)
							if (l[u].pathwayId === o[0].pathwayId) {
								d = l[u];
								break
							} this._levels = o;
					for (let u = 0; u < o.length; u++)
						if (o[u] === d) {
							this._firstLevel = u, this.log(`manifest loaded, ${o.length} level(s) found, first bitrate: ${d.bitrate}`);
							break
						} const h = a && !n,
						c = {
							levels: o,
							audioTracks: i,
							subtitleTracks: s,
							sessionData: t.sessionData,
							sessionKeys: t.sessionKeys,
							firstLevel: this._firstLevel,
							stats: t.stats,
							audio: a,
							video: n,
							altAudio: !h && i.some(e => !!e.url)
						};
					this.hls.trigger(Jt.MANIFEST_PARSED, c), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
				}
				get levels() {
					return 0 === this._levels.length ? null : this._levels
				}
				get level() {
					return this.currentLevelIndex
				}
				set level(e) {
					const t = this._levels;
					if (0 === t.length) return;
					if (e < 0 || e >= t.length) {
						const i = new Error("invalid level idx"),
							s = e < 0;
						if (this.hls.trigger(Jt.ERROR, {
								type: Zt.OTHER_ERROR,
								details: ei.LEVEL_SWITCH_ERROR,
								level: e,
								fatal: s,
								error: i,
								reason: i.message
							}), s) return;
						e = Math.min(e, t.length - 1)
					}
					const i = this.currentLevelIndex,
						s = this.currentLevel,
						r = s ? s.attrs["PATHWAY-ID"] : void 0,
						n = t[e],
						a = n.attrs["PATHWAY-ID"];
					if (this.currentLevelIndex = e, this.currentLevel = n, i === e && n.details && s && r === a) return;
					this.log(`Switching to level ${e}${a?" with Pathway "+a:""} from level ${i}${r?" with Pathway "+r:""}`);
					const o = Xt({}, n, {
						level: e,
						maxBitrate: n.maxBitrate,
						attrs: n.attrs,
						uri: n.uri,
						urlId: n.urlId
					});
					delete o._attrs, delete o._urlId, this.hls.trigger(Jt.LEVEL_SWITCHING, o);
					const l = n.details;
					if (!l || l.live) {
						const e = this.switchParams(n.uri, null == s ? void 0 : s.details);
						this.loadPlaylist(e)
					}
				}
				get manualLevel() {
					return this.manualLevelIndex
				}
				set manualLevel(e) {
					this.manualLevelIndex = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e)
				}
				get firstLevel() {
					return this._firstLevel
				}
				set firstLevel(e) {
					this._firstLevel = e
				}
				get startLevel() {
					if (void 0 === this._startLevel) {
						const e = this.hls.config.startLevel;
						return void 0 !== e ? e : this._firstLevel
					}
					return this._startLevel
				}
				set startLevel(e) {
					this._startLevel = e
				}
				onError(e, t) {
					!t.fatal && t.context && t.context.type === Ns.LEVEL && t.context.level === this.level && this.checkRetry(t)
				}
				onFragLoaded(e, {
					frag: t
				}) {
					if (void 0 !== t && t.type === Us.MAIN) {
						const e = this._levels[t.level];
						void 0 !== e && (e.loadError = 0)
					}
				}
				onLevelLoaded(e, t) {
					var i;
					const {
						level: s,
						details: r
					} = t, n = this._levels[s];
					var a;
					if (!n) return this.warn(`Invalid level index ${s}`), void(null != (a = t.deliveryDirectives) && a.skip && (r.deltaUpdateFailed = !0));
					s === this.currentLevelIndex ? (0 === n.fragmentError && (n.loadError = 0), this.playlistLoaded(s, t, n.details)) : null != (i = t.deliveryDirectives) && i.skip && (r.deltaUpdateFailed = !0)
				}
				onAudioTrackSwitched(e, t) {
					const i = this.currentLevel;
					if (!i) return;
					const s = this.hls.audioTracks[t.id].groupId;
					if (i.audioGroupIds && i.audioGroupId !== s) {
						let e = -1;
						for (let t = 0; t < i.audioGroupIds.length; t++)
							if (i.audioGroupIds[t] === s) {
								e = t;
								break
							} - 1 !== e && e !== i.urlId && (i.urlId = e, this.canLoad && this.startLoad())
					}
				}
				loadPlaylist(e) {
					super.loadPlaylist();
					const t = this.currentLevelIndex,
						i = this.currentLevel;
					if (i && this.shouldLoadPlaylist(i)) {
						const r = i.urlId;
						let n = i.uri;
						if (e) try {
							n = e.addDirectives(n)
						} catch (s) {
							this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`)
						}
						const a = i.attrs["PATHWAY-ID"];
						this.log(`Loading level index ${t}${void 0!==(null==e?void 0:e.msn)?" at sn "+e.msn+" part "+e.part:""} with${a?" Pathway "+a:""} URI ${r+1}/${i.url.length} ${n}`), this.clearTimer(), this.hls.trigger(Jt.LEVEL_LOADING, {
							url: n,
							level: t,
							id: r,
							deliveryDirectives: e || null
						})
					}
				}
				get nextLoadLevel() {
					return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
				}
				set nextLoadLevel(e) {
					this.level = e, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
				}
				removeLevel(e, t) {
					const i = (e, i) => i !== t,
						s = this._levels.filter((s, r) => r !== e || (s.url.length > 1 && void 0 !== t ? (s.url = s.url.filter(i), s.audioGroupIds && (s.audioGroupIds = s.audioGroupIds.filter(i)), s.textGroupIds && (s.textGroupIds = s.textGroupIds.filter(i)), s.urlId = 0, !0) : (this.steering && this.steering.removeLevel(s), !1)));
					this.hls.trigger(Jt.LEVELS_UPDATED, {
						levels: s
					})
				}
				onLevelsUpdated(e, {
					levels: t
				}) {
					t.forEach((e, t) => {
						const {
							details: i
						} = e;
						null != i && i.fragments && i.fragments.forEach(e => {
							e.level = t
						})
					}), this._levels = t
				}
			}

			function Rr(e, t, i) {
				i && ("audio" === t ? (e.audioGroupIds || (e.audioGroupIds = []), e.audioGroupIds[e.url.length - 1] = i) : "text" === t && (e.textGroupIds || (e.textGroupIds = []), e.textGroupIds[e.url.length - 1] = i))
			}

			function wr(e) {
				const t = {};
				e.forEach(e => {
					const i = e.groupId || "";
					e.id = t[i] = t[i] || 0, t[i]++
				})
			}
			var kr = {
				NOT_LOADED: "NOT_LOADED",
				APPENDING: "APPENDING",
				PARTIAL: "PARTIAL",
				OK: "OK"
			};
			class Ir {
				constructor(e) {
					this.activePartLists = Object.create(null), this.endListFragments = Object.create(null), this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = void 0, this.hasGaps = !1, this.hls = e, this._registerListeners()
				}
				_registerListeners() {
					const {
						hls: e
					} = this;
					e.on(Jt.BUFFER_APPENDED, this.onBufferAppended, this), e.on(Jt.FRAG_BUFFERED, this.onFragBuffered, this), e.on(Jt.FRAG_LOADED, this.onFragLoaded, this)
				}
				_unregisterListeners() {
					const {
						hls: e
					} = this;
					e.off(Jt.BUFFER_APPENDED, this.onBufferAppended, this), e.off(Jt.FRAG_BUFFERED, this.onFragBuffered, this), e.off(Jt.FRAG_LOADED, this.onFragLoaded, this)
				}
				destroy() {
					this._unregisterListeners(), this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null
				}
				getAppendedFrag(e, t) {
					const i = this.activePartLists[t];
					if (i)
						for (let s = i.length; s--;) {
							const t = i[s];
							if (!t) break;
							const r = t.end;
							if (t.start <= e && null !== r && e <= r) return t
						}
					return this.getBufferedFrag(e, t)
				}
				getBufferedFrag(e, t) {
					const {
						fragments: i
					} = this, s = Object.keys(i);
					for (let r = s.length; r--;) {
						const n = i[s[r]];
						if ((null == n ? void 0 : n.body.type) === t && n.buffered) {
							const t = n.body;
							if (t.start <= e && e <= t.end) return t
						}
					}
					return null
				}
				detectEvictedFragments(e, t, i, s) {
					this.timeRanges && (this.timeRanges[e] = t);
					const r = (null == s ? void 0 : s.fragment.sn) || -1;
					Object.keys(this.fragments).forEach(s => {
						const n = this.fragments[s];
						if (!n) return;
						if (r >= n.body.sn) return;
						if (!n.buffered && !n.loaded) return void(n.body.type === i && this.removeFragment(n.body));
						const a = n.range[e];
						a && a.time.some(e => {
							const i = !this.isTimeBuffered(e.startPTS, e.endPTS, t);
							return i && this.removeFragment(n.body), i
						})
					})
				}
				detectPartialFragments(e) {
					const t = this.timeRanges,
						{
							frag: i,
							part: s
						} = e;
					if (!t || "initSegment" === i.sn) return;
					const r = Cr(i),
						n = this.fragments[r];
					if (!n) return;
					const a = !i.relurl;
					Object.keys(t).forEach(e => {
						const r = i.elementaryStreams[e];
						if (!r) return;
						const o = t[e],
							l = a || !0 === r.partial;
						n.range[e] = this.getBufferedTimes(i, s, l, o)
					}), n.loaded = null, Object.keys(n.range).length ? (n.buffered = !0, n.body.endList && (this.endListFragments[n.body.type] = n), Dr(n) || this.removeParts(i.sn - 1, i.type)) : this.removeFragment(n.body)
				}
				removeParts(e, t) {
					const i = this.activePartLists[t];
					i && (this.activePartLists[t] = i.filter(t => t.fragment.sn >= e))
				}
				fragBuffered(e, t) {
					const i = Cr(e);
					let s = this.fragments[i];
					!s && t && (s = this.fragments[i] = {
						body: e,
						appendedPTS: null,
						loaded: null,
						buffered: !1,
						range: Object.create(null)
					}, e.gap && (this.hasGaps = !0)), s && (s.loaded = null, s.buffered = !0)
				}
				getBufferedTimes(e, t, i, s) {
					const r = {
							time: [],
							partial: i
						},
						n = e.start,
						a = e.end,
						o = e.minEndPTS || a,
						l = e.maxStartPTS || n;
					for (let d = 0; d < s.length; d++) {
						const e = s.start(d) - this.bufferPadding,
							t = s.end(d) + this.bufferPadding;
						if (l >= e && o <= t) {
							r.time.push({
								startPTS: Math.max(n, s.start(d)),
								endPTS: Math.min(a, s.end(d))
							});
							break
						}
						if (n < t && a > e) r.partial = !0, r.time.push({
							startPTS: Math.max(n, s.start(d)),
							endPTS: Math.min(a, s.end(d))
						});
						else if (a <= e) break
					}
					return r
				}
				getPartialFragment(e) {
					let t, i, s, r = null,
						n = 0;
					const {
						bufferPadding: a,
						fragments: o
					} = this;
					return Object.keys(o).forEach(l => {
						const d = o[l];
						d && Dr(d) && (i = d.body.start - a, s = d.body.end + a, e >= i && e <= s && (t = Math.min(e - i, s - e), n <= t && (r = d.body, n = t)))
					}), r
				}
				isEndListAppended(e) {
					const t = this.endListFragments[e];
					return void 0 !== t && (t.buffered || Dr(t))
				}
				getState(e) {
					const t = Cr(e),
						i = this.fragments[t];
					return i ? i.buffered ? Dr(i) ? kr.PARTIAL : kr.OK : kr.APPENDING : kr.NOT_LOADED
				}
				isTimeBuffered(e, t, i) {
					let s, r;
					for (let n = 0; n < i.length; n++) {
						if (s = i.start(n) - this.bufferPadding, r = i.end(n) + this.bufferPadding, e >= s && t <= r) return !0;
						if (t <= s) return !1
					}
					return !1
				}
				onFragLoaded(e, t) {
					const {
						frag: i,
						part: s
					} = t;
					if ("initSegment" === i.sn || i.bitrateTest) return;
					const r = s ? null : t,
						n = Cr(i);
					this.fragments[n] = {
						body: i,
						appendedPTS: null,
						loaded: r,
						buffered: !1,
						range: Object.create(null)
					}
				}
				onBufferAppended(e, t) {
					const {
						frag: i,
						part: s,
						timeRanges: r
					} = t;
					if ("initSegment" === i.sn) return;
					const n = i.type;
					if (s) {
						let e = this.activePartLists[n];
						e || (this.activePartLists[n] = e = []), e.push(s)
					}
					this.timeRanges = r, Object.keys(r).forEach(e => {
						const t = r[e];
						this.detectEvictedFragments(e, t, n, s)
					})
				}
				onFragBuffered(e, t) {
					this.detectPartialFragments(t)
				}
				hasFragment(e) {
					const t = Cr(e);
					return !!this.fragments[t]
				}
				hasParts(e) {
					var t;
					return !(null == (t = this.activePartLists[e]) || !t.length)
				}
				removeFragmentsInRange(e, t, i, s, r) {
					s && !this.hasGaps || Object.keys(this.fragments).forEach(n => {
						const a = this.fragments[n];
						if (!a) return;
						const o = a.body;
						o.type !== i || s && !o.gap || o.start < t && o.end > e && (a.buffered || r) && this.removeFragment(o)
					})
				}
				removeFragment(e) {
					const t = Cr(e);
					e.stats.loaded = 0, e.clearElementaryStreamInfo();
					const i = this.activePartLists[e.type];
					if (i) {
						const t = e.sn;
						this.activePartLists[e.type] = i.filter(e => e.fragment.sn !== t)
					}
					delete this.fragments[t], e.endList && delete this.endListFragments[e.type]
				}
				removeAllFragments() {
					this.fragments = Object.create(null), this.endListFragments = Object.create(null), this.activePartLists = Object.create(null), this.hasGaps = !1
				}
			}

			function Dr(e) {
				var t, i, s;
				return e.buffered && (e.body.gap || (null == (t = e.range.video) ? void 0 : t.partial) || (null == (i = e.range.audio) ? void 0 : i.partial) || (null == (s = e.range.audiovideo) ? void 0 : s.partial))
			}

			function Cr(e) {
				return `${e.type}_${e.level}_${e.urlId}_${e.sn}`
			}
			const Pr = Math.pow(2, 17);
			class Or {
				constructor(e) {
					this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e
				}
				destroy() {
					this.loader && (this.loader.destroy(), this.loader = null)
				}
				abort() {
					this.loader && this.loader.abort()
				}
				load(e, t) {
					const i = e.url;
					if (!i) return Promise.reject(new LoadError({
						type: Zt.NETWORK_ERROR,
						details: ei.FRAG_LOAD_ERROR,
						fatal: !1,
						frag: e,
						error: new Error(`Fragment does not have a ${i?"part list":"url"}`),
						networkDetails: null
					}));
					this.abort();
					const s = this.config,
						r = s.fLoader,
						n = s.loader;
					return new Promise((a, o) => {
						if (this.loader && this.loader.destroy(), e.gap) return void o(Mr(e));
						const l = this.loader = e.loader = r ? new r(s) : new n(s),
							d = xr(e),
							h = fr(s.fragLoadPolicy.default),
							c = {
								loadPolicy: h,
								timeout: h.maxLoadTimeMs,
								maxRetry: 0,
								retryDelay: 0,
								maxRetryDelay: 0,
								highWaterMark: "initSegment" === e.sn ? 1 / 0 : Pr
							};
						e.stats = l.stats, l.load(d, c, {
							onSuccess: (t, i, s, r) => {
								this.resetLoader(e, l);
								let n = t.data;
								s.resetIV && e.decryptdata && (e.decryptdata.iv = new Uint8Array(n.slice(0, 16)), n = n.slice(16)), a({
									frag: e,
									part: null,
									payload: n,
									networkDetails: r
								})
							},
							onError: (t, s, r, n) => {
								this.resetLoader(e, l), o(new LoadError({
									type: Zt.NETWORK_ERROR,
									details: ei.FRAG_LOAD_ERROR,
									fatal: !1,
									frag: e,
									response: Yt({
										url: i,
										data: void 0
									}, t),
									error: new Error(`HTTP Error ${t.code} ${t.text}`),
									networkDetails: r,
									stats: n
								}))
							},
							onAbort: (t, i, s) => {
								this.resetLoader(e, l), o(new LoadError({
									type: Zt.NETWORK_ERROR,
									details: ei.INTERNAL_ABORTED,
									fatal: !1,
									frag: e,
									error: new Error("Aborted"),
									networkDetails: s,
									stats: t
								}))
							},
							onTimeout: (t, i, s) => {
								this.resetLoader(e, l), o(new LoadError({
									type: Zt.NETWORK_ERROR,
									details: ei.FRAG_LOAD_TIMEOUT,
									fatal: !1,
									frag: e,
									error: new Error(`Timeout after ${c.timeout}ms`),
									networkDetails: s,
									stats: t
								}))
							},
							onProgress: (i, s, r, n) => {
								t && t({
									frag: e,
									part: null,
									payload: r,
									networkDetails: n
								})
							}
						})
					})
				}
				loadPart(e, t, i) {
					this.abort();
					const s = this.config,
						r = s.fLoader,
						n = s.loader;
					return new Promise((a, o) => {
						if (this.loader && this.loader.destroy(), e.gap || t.gap) return void o(Mr(e, t));
						const l = this.loader = e.loader = r ? new r(s) : new n(s),
							d = xr(e, t),
							h = fr(s.fragLoadPolicy.default),
							c = {
								loadPolicy: h,
								timeout: h.maxLoadTimeMs,
								maxRetry: 0,
								retryDelay: 0,
								maxRetryDelay: 0,
								highWaterMark: Pr
							};
						t.stats = l.stats, l.load(d, c, {
							onSuccess: (s, r, n, o) => {
								this.resetLoader(e, l), this.updateStatsFromPart(e, t);
								const d = {
									frag: e,
									part: t,
									payload: s.data,
									networkDetails: o
								};
								i(d), a(d)
							},
							onError: (i, s, r, n) => {
								this.resetLoader(e, l), o(new LoadError({
									type: Zt.NETWORK_ERROR,
									details: ei.FRAG_LOAD_ERROR,
									fatal: !1,
									frag: e,
									part: t,
									response: Yt({
										url: d.url,
										data: void 0
									}, i),
									error: new Error(`HTTP Error ${i.code} ${i.text}`),
									networkDetails: r,
									stats: n
								}))
							},
							onAbort: (i, s, r) => {
								e.stats.aborted = t.stats.aborted, this.resetLoader(e, l), o(new LoadError({
									type: Zt.NETWORK_ERROR,
									details: ei.INTERNAL_ABORTED,
									fatal: !1,
									frag: e,
									part: t,
									error: new Error("Aborted"),
									networkDetails: r,
									stats: i
								}))
							},
							onTimeout: (i, s, r) => {
								this.resetLoader(e, l), o(new LoadError({
									type: Zt.NETWORK_ERROR,
									details: ei.FRAG_LOAD_TIMEOUT,
									fatal: !1,
									frag: e,
									part: t,
									error: new Error(`Timeout after ${c.timeout}ms`),
									networkDetails: r,
									stats: i
								}))
							}
						})
					})
				}
				updateStatsFromPart(e, t) {
					const i = e.stats,
						s = t.stats,
						r = s.total;
					if (i.loaded += s.loaded, r) {
						const s = Math.round(e.duration / t.duration),
							n = Math.min(Math.round(i.loaded / r), s),
							a = (s - n) * Math.round(i.loaded / n);
						i.total = i.loaded + a
					} else i.total = Math.max(i.loaded, i.total);
					const n = i.loading,
						a = s.loading;
					n.start ? n.first += a.first - a.start : (n.start = a.start, n.first = a.first), n.end = a.end
				}
				resetLoader(e, t) {
					e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy()
				}
			}

			function xr(e, t = null) {
				const i = t || e,
					s = {
						frag: e,
						part: t,
						responseType: "arraybuffer",
						url: i.url,
						headers: {},
						rangeStart: 0,
						rangeEnd: 0
					},
					r = i.byteRangeStartOffset,
					n = i.byteRangeEndOffset;
				if (Qt(r) && Qt(n)) {
					var a;
					let t = r,
						i = n;
					if ("initSegment" === e.sn && "AES-128" === (null == (a = e.decryptdata) ? void 0 : a.method)) {
						const e = n - r;
						e % 16 && (i = n + (16 - e % 16)), 0 !== r && (s.resetIV = !0, t = r - 16)
					}
					s.rangeStart = t, s.rangeEnd = i
				}
				return s
			}

			function Mr(e, t) {
				const i = new Error(`GAP ${e.gap?"tag":"attribute"} found`),
					s = {
						type: Zt.MEDIA_ERROR,
						details: ei.FRAG_GAP,
						fatal: !1,
						frag: e,
						error: i,
						networkDetails: null
					};
				return t && (s.part = t), (t || e).stats.aborted = !0, new LoadError(s)
			}
			class LoadError extends Error {
				constructor(e) {
					super(e.error.message), this.data = void 0, this.data = e
				}
			}
			class Fr {
				constructor(e) {
					this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = e
				}
				abort(e) {
					for (const t in this.keyUriToKeyInfo) {
						const i = this.keyUriToKeyInfo[t].loader;
						if (i) {
							if (e && e !== i.context.frag.type) return;
							i.abort()
						}
					}
				}
				detach() {
					for (const e in this.keyUriToKeyInfo) {
						const t = this.keyUriToKeyInfo[e];
						(t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[e]
					}
				}
				destroy() {
					this.detach();
					for (const e in this.keyUriToKeyInfo) {
						const t = this.keyUriToKeyInfo[e].loader;
						t && t.destroy()
					}
					this.keyUriToKeyInfo = {}
				}
				createKeyLoadError(e, t = ei.KEY_LOAD_ERROR, i, s, r) {
					return new LoadError({
						type: Zt.NETWORK_ERROR,
						details: t,
						fatal: !1,
						frag: e,
						response: r,
						error: i,
						networkDetails: s
					})
				}
				loadClear(e, t) {
					if (this.emeController && this.config.emeEnabled) {
						const {
							sn: i,
							cc: s
						} = e;
						for (let e = 0; e < t.length; e++) {
							const r = t[e];
							if (s <= r.cc && ("initSegment" === i || "initSegment" === r.sn || i < r.sn)) {
								this.emeController.selectKeySystemFormat(r).then(e => {
									r.setKeyFormat(e)
								});
								break
							}
						}
					}
				}
				load(e) {
					return !e.decryptdata && e.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(e).then(t => this.loadInternal(e, t)) : this.loadInternal(e)
				}
				loadInternal(e, t) {
					var i, s;
					t && e.setKeyFormat(t);
					const r = e.decryptdata;
					if (!r) {
						const i = new Error(t ? `Expected frag.decryptdata to be defined after setting format ${t}` : "Missing decryption data on fragment in onKeyLoading");
						return Promise.reject(this.createKeyLoadError(e, ei.KEY_LOAD_ERROR, i))
					}
					const n = r.uri;
					if (!n) return Promise.reject(this.createKeyLoadError(e, ei.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${n}"`)));
					let a = this.keyUriToKeyInfo[n];
					if (null != (i = a) && i.decryptdata.key) return r.key = a.decryptdata.key, Promise.resolve({
						frag: e,
						keyInfo: a
					});
					var o;
					if (null != (s = a) && s.keyLoadPromise) switch (null == (o = a.mediaKeySessionContext) ? void 0 : o.keyStatus) {
						case void 0:
						case "status-pending":
						case "usable":
						case "usable-in-future":
							return a.keyLoadPromise.then(t => (r.key = t.keyInfo.decryptdata.key, {
								frag: e,
								keyInfo: a
							}))
					}
					switch (a = this.keyUriToKeyInfo[n] = {
						decryptdata: r,
						keyLoadPromise: null,
						loader: null,
						mediaKeySessionContext: null
					}, r.method) {
						case "ISO-23001-7":
						case "SAMPLE-AES":
						case "SAMPLE-AES-CENC":
						case "SAMPLE-AES-CTR":
							return "identity" === r.keyFormat ? this.loadKeyHTTP(a, e) : this.loadKeyEME(a, e);
						case "AES-128":
							return this.loadKeyHTTP(a, e);
						default:
							return Promise.reject(this.createKeyLoadError(e, ei.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${r.method}"`)))
					}
				}
				loadKeyEME(e, t) {
					const i = {
						frag: t,
						keyInfo: e
					};
					if (this.emeController && this.config.emeEnabled) {
						const t = this.emeController.loadKey(i);
						if (t) return (e.keyLoadPromise = t.then(t => (e.mediaKeySessionContext = t, i))).catch(t => {
							throw e.keyLoadPromise = null, t
						})
					}
					return Promise.resolve(i)
				}
				loadKeyHTTP(e, t) {
					const i = this.config,
						s = new(0, i.loader)(i);
					return t.keyLoader = e.loader = s, e.keyLoadPromise = new Promise((r, n) => {
						const a = {
								keyInfo: e,
								frag: t,
								responseType: "arraybuffer",
								url: e.decryptdata.uri
							},
							o = i.keyLoadPolicy.default,
							l = {
								loadPolicy: o,
								timeout: o.maxLoadTimeMs,
								maxRetry: 0,
								retryDelay: 0,
								maxRetryDelay: 0
							},
							d = {
								onSuccess: (e, t, i, s) => {
									const {
										frag: a,
										keyInfo: o,
										url: l
									} = i;
									if (!a.decryptdata || o !== this.keyUriToKeyInfo[l]) return n(this.createKeyLoadError(a, ei.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), s));
									o.decryptdata.key = a.decryptdata.key = new Uint8Array(e.data), a.keyLoader = null, o.loader = null, r({
										frag: a,
										keyInfo: o
									})
								},
								onError: (e, i, s, r) => {
									this.resetLoader(i), n(this.createKeyLoadError(t, ei.KEY_LOAD_ERROR, new Error(`HTTP Error ${e.code} loading key ${e.text}`), s, Yt({
										url: a.url,
										data: void 0
									}, e)))
								},
								onTimeout: (e, i, s) => {
									this.resetLoader(i), n(this.createKeyLoadError(t, ei.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), s))
								},
								onAbort: (e, i, s) => {
									this.resetLoader(i), n(this.createKeyLoadError(t, ei.INTERNAL_ABORTED, new Error("key loading aborted"), s))
								}
							};
						s.load(a, l, d)
					})
				}
				resetLoader(e) {
					const {
						frag: t,
						keyInfo: i,
						url: s
					} = e, r = i.loader;
					t.keyLoader === r && (t.keyLoader = null, i.loader = null), delete this.keyUriToKeyInfo[s], r && r.destroy()
				}
			}
			class Nr {
				constructor() {
					this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this)
				}
				destroy() {
					this.onHandlerDestroying(), this.onHandlerDestroyed()
				}
				onHandlerDestroying() {
					this.clearNextTick(), this.clearInterval()
				}
				onHandlerDestroyed() {}
				hasInterval() {
					return !!this._tickInterval
				}
				hasNextTick() {
					return !!this._tickTimer
				}
				setInterval(e) {
					return !this._tickInterval && (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e), !0)
				}
				clearInterval() {
					return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
				}
				clearNextTick() {
					return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
				}
				tick() {
					this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0)
				}
				tickImmediate() {
					this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)
				}
				doTick() {}
			}
			const Ur = {
				length: 0,
				start: () => 0,
				end: () => 0
			};
			class Br {
				static isBuffered(e, t) {
					try {
						if (e) {
							const i = Br.getBuffered(e);
							for (let e = 0; e < i.length; e++)
								if (t >= i.start(e) && t <= i.end(e)) return !0
						}
					} catch (i) {}
					return !1
				}
				static bufferInfo(e, t, i) {
					try {
						if (e) {
							const s = Br.getBuffered(e),
								r = [];
							let n;
							for (n = 0; n < s.length; n++) r.push({
								start: s.start(n),
								end: s.end(n)
							});
							return this.bufferedInfo(r, t, i)
						}
					} catch (s) {}
					return {
						len: 0,
						start: t,
						end: t,
						nextStart: void 0
					}
				}
				static bufferedInfo(e, t, i) {
					t = Math.max(0, t), e.sort((function(e, t) {
						const i = e.start - t.start;
						return i || t.end - e.end
					}));
					let s = [];
					if (i)
						for (let l = 0; l < e.length; l++) {
							const t = s.length;
							if (t) {
								const r = s[t - 1].end;
								e[l].start - r < i ? e[l].end > r && (s[t - 1].end = e[l].end) : s.push(e[l])
							} else s.push(e[l])
						} else s = e;
					let r, n = 0,
						a = t,
						o = t;
					for (let l = 0; l < s.length; l++) {
						const e = s[l].start,
							d = s[l].end;
						if (t + i >= e && t < d) a = e, n = (o = d) - t;
						else if (t + i < e) {
							r = e;
							break
						}
					}
					return {
						len: n,
						start: a || 0,
						end: o || 0,
						nextStart: r
					}
				}
				static getBuffered(e) {
					try {
						return e.buffered
					} catch (t) {
						return ni.log("failed to get media.buffered", t), Ur
					}
				}
			}
			class $r {
				constructor(e, t, i, s = 0, r = -1, n = !1) {
					this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = {
						start: 0,
						executeStart: 0,
						executeEnd: 0,
						end: 0
					}, this.buffering = {
						audio: {
							start: 0,
							executeStart: 0,
							executeEnd: 0,
							end: 0
						},
						video: {
							start: 0,
							executeStart: 0,
							executeEnd: 0,
							end: 0
						},
						audiovideo: {
							start: 0,
							executeStart: 0,
							executeEnd: 0,
							end: 0
						}
					}, this.level = e, this.sn = t, this.id = i, this.size = s, this.part = r, this.partial = n
				}
			}

			function Vr(e, t) {
				let i = null;
				for (let s = 0, r = e.length; s < r; s++) {
					const r = e[s];
					if (r && r.cc === t) {
						i = r;
						break
					}
				}
				return i
			}

			function Gr(e, t) {
				if (e) {
					const i = e.start + t;
					e.start = e.startPTS = i, e.endPTS = i + e.duration
				}
			}

			function jr(e, t) {
				const i = t.fragments;
				for (let s = 0, r = i.length; s < r; s++) Gr(i[s], e);
				t.fragmentHint && Gr(t.fragmentHint, e), t.alignedSliding = !0
			}

			function Hr(e, t, i) {
				t && (! function(e, t, i) {
					if (function(e, t, i) {
							return !(!t.details || !(i.endCC > i.startCC || e && e.cc < i.startCC))
						}(e, i, t)) {
						const e = function(e, t, i = 0) {
							const s = e.fragments,
								r = t.fragments;
							if (!r.length || !s.length) return void ni.log("No fragments to align");
							const n = Vr(s, r[0].cc);
							if (n && (!n || n.startPTS)) return n;
							ni.log("No frag in previous level to align on")
						}(i.details, t);
						e && Qt(e.start) && (ni.log(`Adjusting PTS using last level due to CC increase within current level ${t.url}`), jr(e.start, t))
					}
				}(e, i, t), !i.alignedSliding && t.details && function(e, t) {
					if (!t.fragments.length || !e.hasProgramDateTime || !t.hasProgramDateTime) return;
					const i = t.fragments[0].programDateTime,
						s = e.fragments[0].programDateTime,
						r = (s - i) / 1e3 + t.fragments[0].start;
					r && Qt(r) && (ni.log(`Adjusting PTS using programDateTime delta ${s-i}ms, sliding:${r.toFixed(3)} ${e.url} `), jr(r, e))
				}(i, t.details), i.alignedSliding || !t.details || i.skippedSegments || ar(t.details, i))
			}

			function Kr(e, t) {
				if (!e.hasProgramDateTime || !t.hasProgramDateTime) return;
				const i = e.fragments,
					s = t.fragments;
				if (!i.length || !s.length) return;
				const r = s[Math.round(s.length / 2) - 1],
					n = Vr(i, r.cc) || i[Math.round(i.length / 2) - 1],
					a = r.programDateTime,
					o = n.programDateTime;
				null !== a && null !== o && jr((o - a) / 1e3 - (n.start - r.start), e)
			}
			class qr {
				constructor(e, t) {
					this.subtle = void 0, this.aesIV = void 0, this.subtle = e, this.aesIV = t
				}
				decrypt(e, t) {
					return this.subtle.decrypt({
						name: "AES-CBC",
						iv: this.aesIV
					}, t, e)
				}
			}
			class Wr {
				constructor(e, t) {
					this.subtle = void 0, this.key = void 0, this.subtle = e, this.key = t
				}
				expandKey() {
					return this.subtle.importKey("raw", this.key, {
						name: "AES-CBC"
					}, !1, ["encrypt", "decrypt"])
				}
			}
			class Yr {
				constructor() {
					this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable()
				}
				uint8ArrayToUint32Array_(e) {
					const t = new DataView(e),
						i = new Uint32Array(4);
					for (let s = 0; s < 4; s++) i[s] = t.getUint32(4 * s);
					return i
				}
				initTable() {
					const e = this.sBox,
						t = this.invSBox,
						i = this.subMix,
						s = i[0],
						r = i[1],
						n = i[2],
						a = i[3],
						o = this.invSubMix,
						l = o[0],
						d = o[1],
						h = o[2],
						c = o[3],
						u = new Uint32Array(256);
					let f = 0,
						g = 0,
						p = 0;
					for (p = 0; p < 256; p++) u[p] = p < 128 ? p << 1 : p << 1 ^ 283;
					for (p = 0; p < 256; p++) {
						let i = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
						i = i >>> 8 ^ 255 & i ^ 99, e[f] = i, t[i] = f;
						const o = u[f],
							p = u[o],
							m = u[p];
						let v = 257 * u[i] ^ 16843008 * i;
						s[f] = v << 24 | v >>> 8, r[f] = v << 16 | v >>> 16, n[f] = v << 8 | v >>> 24, a[f] = v, v = 16843009 * m ^ 65537 * p ^ 257 * o ^ 16843008 * f, l[i] = v << 24 | v >>> 8, d[i] = v << 16 | v >>> 16, h[i] = v << 8 | v >>> 24, c[i] = v, f ? (f = o ^ u[u[u[m ^ o]]], g ^= u[u[g]]) : f = g = 1
					}
				}
				expandKey(e) {
					const t = this.uint8ArrayToUint32Array_(e);
					let i = !0,
						s = 0;
					for (; s < t.length && i;) i = t[s] === this.key[s], s++;
					if (i) return;
					this.key = t;
					const r = this.keySize = t.length;
					if (4 !== r && 6 !== r && 8 !== r) throw new Error("Invalid aes key size=" + r);
					const n = this.ksRows = 4 * (r + 6 + 1);
					let a, o;
					const l = this.keySchedule = new Uint32Array(n),
						d = this.invKeySchedule = new Uint32Array(n),
						h = this.sBox,
						c = this.rcon,
						u = this.invSubMix,
						f = u[0],
						g = u[1],
						p = u[2],
						m = u[3];
					let v, y;
					for (a = 0; a < n; a++) a < r ? v = l[a] = t[a] : (y = v, a % r == 0 ? (y = h[(y = y << 8 | y >>> 24) >>> 24] << 24 | h[y >>> 16 & 255] << 16 | h[y >>> 8 & 255] << 8 | h[255 & y], y ^= c[a / r | 0] << 24) : r > 6 && a % r == 4 && (y = h[y >>> 24] << 24 | h[y >>> 16 & 255] << 16 | h[y >>> 8 & 255] << 8 | h[255 & y]), l[a] = v = (l[a - r] ^ y) >>> 0);
					for (o = 0; o < n; o++) a = n - o, y = 3 & o ? l[a] : l[a - 4], d[o] = o < 4 || a <= 4 ? y : f[h[y >>> 24]] ^ g[h[y >>> 16 & 255]] ^ p[h[y >>> 8 & 255]] ^ m[h[255 & y]], d[o] = d[o] >>> 0
				}
				networkToHostOrderSwap(e) {
					return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
				}
				decrypt(e, t, i) {
					const s = this.keySize + 6,
						r = this.invKeySchedule,
						n = this.invSBox,
						a = this.invSubMix,
						o = a[0],
						l = a[1],
						d = a[2],
						h = a[3],
						c = this.uint8ArrayToUint32Array_(i);
					let u = c[0],
						f = c[1],
						g = c[2],
						p = c[3];
					const m = new Int32Array(e),
						v = new Int32Array(m.length);
					let y, E, _, b, T, S, A, L, R, w, k, I, D, C;
					const P = this.networkToHostOrderSwap;
					for (; t < m.length;) {
						for (R = P(m[t]), w = P(m[t + 1]), k = P(m[t + 2]), I = P(m[t + 3]), T = R ^ r[0], S = I ^ r[1], A = k ^ r[2], L = w ^ r[3], D = 4, C = 1; C < s; C++) y = o[T >>> 24] ^ l[S >> 16 & 255] ^ d[A >> 8 & 255] ^ h[255 & L] ^ r[D], E = o[S >>> 24] ^ l[A >> 16 & 255] ^ d[L >> 8 & 255] ^ h[255 & T] ^ r[D + 1], _ = o[A >>> 24] ^ l[L >> 16 & 255] ^ d[T >> 8 & 255] ^ h[255 & S] ^ r[D + 2], b = o[L >>> 24] ^ l[T >> 16 & 255] ^ d[S >> 8 & 255] ^ h[255 & A] ^ r[D + 3], T = y, S = E, A = _, L = b, D += 4;
						y = n[T >>> 24] << 24 ^ n[S >> 16 & 255] << 16 ^ n[A >> 8 & 255] << 8 ^ n[255 & L] ^ r[D], E = n[S >>> 24] << 24 ^ n[A >> 16 & 255] << 16 ^ n[L >> 8 & 255] << 8 ^ n[255 & T] ^ r[D + 1], _ = n[A >>> 24] << 24 ^ n[L >> 16 & 255] << 16 ^ n[T >> 8 & 255] << 8 ^ n[255 & S] ^ r[D + 2], b = n[L >>> 24] << 24 ^ n[T >> 16 & 255] << 16 ^ n[S >> 8 & 255] << 8 ^ n[255 & A] ^ r[D + 3], v[t] = P(y ^ u), v[t + 1] = P(b ^ f), v[t + 2] = P(_ ^ g), v[t + 3] = P(E ^ p), u = R, f = w, g = k, p = I, t += 4
					}
					return v.buffer
				}
			}
			const zr = 16;
			class Xr {
				constructor(e, {
					removePKCS7Padding: t = !0
				} = {}) {
					if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = e.enableSoftwareAES, this.removePKCS7Padding = t, t) try {
						const e = self.crypto;
						e && (this.subtle = e.subtle || e.webkitSubtle)
					} catch (i) {}
					null === this.subtle && (this.useSoftware = !0)
				}
				destroy() {
					this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null
				}
				isSync() {
					return this.useSoftware
				}
				flush() {
					const {
						currentResult: e,
						remainderData: t
					} = this;
					if (!e || t) return this.reset(), null;
					const i = new Uint8Array(e);
					return this.reset(), this.removePKCS7Padding ? function(e) {
						const t = e.byteLength,
							i = t && new DataView(e.buffer).getUint8(t - 1);
						return i ? ki(e, 0, t - i) : e
					}(i) : i
				}
				reset() {
					this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null)
				}
				decrypt(e, t, i) {
					return this.useSoftware ? new Promise((s, r) => {
						this.softwareDecrypt(new Uint8Array(e), t, i);
						const n = this.flush();
						n ? s(n.buffer) : r(new Error("[softwareDecrypt] Failed to decrypt data"))
					}) : this.webCryptoDecrypt(new Uint8Array(e), t, i)
				}
				softwareDecrypt(e, t, i) {
					const {
						currentIV: s,
						currentResult: r,
						remainderData: n
					} = this;
					this.logOnce("JS AES decrypt"), n && (e = as(n, e), this.remainderData = null);
					const a = this.getValidChunk(e);
					if (!a.length) return null;
					s && (i = s);
					let o = this.softwareDecrypter;
					o || (o = this.softwareDecrypter = new Yr), o.expandKey(t);
					const l = r;
					return this.currentResult = o.decrypt(a.buffer, 0, i), this.currentIV = ki(a, -16).buffer, l || null
				}
				webCryptoDecrypt(e, t, i) {
					const s = this.subtle;
					return this.key === t && this.fastAesKey || (this.key = t, this.fastAesKey = new Wr(s, t)), this.fastAesKey.expandKey().then(t => {
						if (!s) return Promise.reject(new Error("web crypto not initialized"));
						return this.logOnce("WebCrypto AES decrypt"), new qr(s, new Uint8Array(i)).decrypt(e.buffer, t)
					}).catch(s => (ni.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${s.name}: ${s.message}`), this.onWebCryptoError(e, t, i)))
				}
				onWebCryptoError(e, t, i) {
					this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(e, t, i);
					const s = this.flush();
					if (s) return s.buffer;
					throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data")
				}
				getValidChunk(e) {
					let t = e;
					const i = e.length - e.length % zr;
					return i !== e.length && (t = ki(e, 0, i), this.remainderData = ki(e, i)), t
				}
				logOnce(e) {
					this.logEnabled && (ni.log(`[decrypter]: ${e}`), this.logEnabled = !1)
				}
			}
			const Qr = {
					toString: function(e) {
						let t = "";
						const i = e.length;
						for (let s = 0; s < i; s++) t += `[${e.start(s).toFixed(3)}-${e.end(s).toFixed(3)}]`;
						return t
					}
				},
				Jr = {
					STOPPED: "STOPPED",
					IDLE: "IDLE",
					KEY_LOADING: "KEY_LOADING",
					FRAG_LOADING: "FRAG_LOADING",
					FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
					WAITING_TRACK: "WAITING_TRACK",
					PARSING: "PARSING",
					PARSED: "PARSED",
					ENDED: "ENDED",
					ERROR: "ERROR",
					WAITING_INIT_PTS: "WAITING_INIT_PTS",
					WAITING_LEVEL: "WAITING_LEVEL"
				};
			class Zr extends Nr {
				constructor(e, t, i, s, r) {
					super(), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = Jr.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.loadedmetadata = !1, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.onvseeking = null, this.onvended = null, this.logPrefix = "", this.log = void 0, this.warn = void 0, this.playlistType = r, this.logPrefix = s, this.log = ni.log.bind(ni, `${s}:`), this.warn = ni.warn.bind(ni, `${s}:`), this.hls = e, this.fragmentLoader = new Or(e.config), this.keyLoader = i, this.fragmentTracker = t, this.config = e.config, this.decrypter = new Xr(e.config), e.on(Jt.MANIFEST_LOADED, this.onManifestLoaded, this)
				}
				doTick() {
					this.onTickEnd()
				}
				onTickEnd() {}
				startLoad(e) {}
				stopLoad() {
					this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
					const e = this.fragCurrent;
					null != e && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = Jr.STOPPED
				}
				_streamEnded(e, t) {
					if (t.live || e.nextStart || !e.end || !this.media) return !1;
					const i = t.partList;
					if (null != i && i.length) {
						const e = i[i.length - 1];
						return Br.isBuffered(this.media, e.start + e.duration / 2)
					}
					const s = t.fragments[t.fragments.length - 1].type;
					return this.fragmentTracker.isEndListAppended(s)
				}
				getLevelDetails() {
					var e;
					if (this.levels && null !== this.levelLastLoaded) return null == (e = this.levels[this.levelLastLoaded]) ? void 0 : e.details
				}
				onMediaAttached(e, t) {
					const i = this.media = this.mediaBuffer = t.media;
					this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), i.addEventListener("seeking", this.onvseeking), i.addEventListener("ended", this.onvended);
					const s = this.config;
					this.levels && s.autoStartLoad && this.state === Jr.STOPPED && this.startLoad(s.startPosition)
				}
				onMediaDetaching() {
					const e = this.media;
					null != e && e.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && this.onvseeking && this.onvended && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
				}
				onMediaSeeking() {
					const {
						config: e,
						fragCurrent: t,
						media: i,
						mediaBuffer: s,
						state: r
					} = this, n = i ? i.currentTime : 0, a = Br.bufferInfo(s || i, n, e.maxBufferHole);
					if (this.log(`media seeking to ${Qt(n)?n.toFixed(3):n}, state: ${r}`), this.state === Jr.ENDED) this.resetLoadingState();
					else if (t) {
						const i = e.maxFragLookUpTolerance,
							s = t.start - i,
							r = t.start + t.duration + i;
						if (!a.len || r < a.start || s > a.end) {
							const e = n > r;
							(n < s || e) && (e && t.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), t.abortRequests(), this.resetLoadingState()), this.fragPrevious = null)
						}
					}
					i && (this.fragmentTracker.removeFragmentsInRange(n, 1 / 0, this.playlistType, !0), this.lastCurrentTime = n), this.loadedmetadata || a.len || (this.nextLoadPosition = this.startPosition = n), this.tickImmediate()
				}
				onMediaEnded() {
					this.startPosition = this.lastCurrentTime = 0
				}
				onManifestLoaded(e, t) {
					this.startTimeOffset = t.startTimeOffset, this.initPTS = []
				}
				onHandlerDestroying() {
					this.stopLoad(), super.onHandlerDestroying()
				}
				onHandlerDestroyed() {
					this.state = Jr.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed()
				}
				loadFragment(e, t, i) {
					this._loadFragForPlayback(e, t, i)
				}
				_loadFragForPlayback(e, t, i) {
					this._doFragLoad(e, t, i, t => {
						if (this.fragContextChanged(e)) return this.warn(`Fragment ${e.sn}${t.part?" p: "+t.part.index:""} of level ${e.level} was dropped during download.`), void this.fragmentTracker.removeFragment(e);
						e.stats.chunkCount++, this._handleFragmentLoadProgress(t)
					}).then(t => {
						if (!t) return;
						const i = this.state;
						this.fragContextChanged(e) ? (i === Jr.FRAG_LOADING || !this.fragCurrent && i === Jr.PARSING) && (this.fragmentTracker.removeFragment(e), this.state = Jr.IDLE) : ("payload" in t && (this.log(`Loaded fragment ${e.sn} of level ${e.level}`), this.hls.trigger(Jt.FRAG_LOADED, t)), this._handleFragmentLoadComplete(t))
					}).catch(t => {
						this.state !== Jr.STOPPED && this.state !== Jr.ERROR && (this.warn(t), this.resetFragmentLoading(e))
					})
				}
				clearTrackerIfNeeded(e) {
					var t;
					const {
						fragmentTracker: i
					} = this;
					if (i.getState(e) === kr.APPENDING) {
						const t = e.type,
							s = this.getFwdBufferInfo(this.mediaBuffer, t),
							r = Math.max(e.duration, s ? s.len : this.config.maxBufferLength);
						this.reduceMaxBufferLength(r) && i.removeFragment(e)
					} else 0 === (null == (t = this.mediaBuffer) ? void 0 : t.buffered.length) ? i.removeAllFragments() : i.hasParts(e.type) && (i.detectPartialFragments({
						frag: e,
						part: null,
						stats: e.stats,
						id: e.type
					}), i.getState(e) === kr.PARTIAL && i.removeFragment(e))
				}
				flushMainBuffer(e, t, i = null) {
					if (!(e - t)) return;
					const s = {
						startOffset: e,
						endOffset: t,
						type: i
					};
					this.hls.trigger(Jt.BUFFER_FLUSHING, s)
				}
				_loadInitSegment(e, t) {
					this._doFragLoad(e, t).then(t => {
						if (!t || this.fragContextChanged(e) || !this.levels) throw new Error("init load aborted");
						return t
					}).then(t => {
						const {
							hls: i
						} = this, {
							payload: s
						} = t, r = e.decryptdata;
						if (s && s.byteLength > 0 && r && r.key && r.iv && "AES-128" === r.method) {
							const n = self.performance.now();
							return this.decrypter.decrypt(new Uint8Array(s), r.key.buffer, r.iv.buffer).catch(t => {
								throw i.trigger(Jt.ERROR, {
									type: Zt.MEDIA_ERROR,
									details: ei.FRAG_DECRYPT_ERROR,
									fatal: !1,
									error: t,
									reason: t.message,
									frag: e
								}), t
							}).then(s => {
								const r = self.performance.now();
								return i.trigger(Jt.FRAG_DECRYPTED, {
									frag: e,
									payload: s,
									stats: {
										tstart: n,
										tdecrypt: r
									}
								}), t.payload = s, t
							})
						}
						return t
					}).then(i => {
						const {
							fragCurrent: s,
							hls: r,
							levels: n
						} = this;
						if (!n) throw new Error("init load aborted, missing levels");
						const a = e.stats;
						this.state = Jr.IDLE, t.fragmentError = 0, e.data = new Uint8Array(i.payload), a.parsing.start = a.buffering.start = self.performance.now(), a.parsing.end = a.buffering.end = self.performance.now(), i.frag === s && r.trigger(Jt.FRAG_BUFFERED, {
							stats: a,
							frag: s,
							part: null,
							id: e.type
						}), this.tick()
					}).catch(t => {
						this.state !== Jr.STOPPED && this.state !== Jr.ERROR && (this.warn(t), this.resetFragmentLoading(e))
					})
				}
				fragContextChanged(e) {
					const {
						fragCurrent: t
					} = this;
					return !e || !t || e.level !== t.level || e.sn !== t.sn || e.urlId !== t.urlId
				}
				fragBufferedComplete(e, t) {
					var i, s, r, n;
					const a = this.mediaBuffer ? this.mediaBuffer : this.media;
					this.log(`Buffered ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.playlistType===Us.MAIN?"level":"track"} ${e.level} (frag:[${(null!=(i=e.startPTS)?i:NaN).toFixed(3)}-${(null!=(s=e.endPTS)?s:NaN).toFixed(3)}] > buffer:${a?Qr.toString(Br.getBuffered(a)):"(detached)"})`), this.state = Jr.IDLE, a && (!this.loadedmetadata && e.type == Us.MAIN && a.buffered.length && (null == (r = this.fragCurrent) ? void 0 : r.sn) === (null == (n = this.fragPrevious) ? void 0 : n.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick())
				}
				seekToStartPos() {}
				_handleFragmentLoadComplete(e) {
					const {
						transmuxer: t
					} = this;
					if (!t) return;
					const {
						frag: i,
						part: s,
						partsLoaded: r
					} = e, n = !r || 0 === r.length || r.some(e => !e), a = new $r(i.level, i.sn, i.stats.chunkCount + 1, 0, s ? s.index : -1, !n);
					t.flush(a)
				}
				_handleFragmentLoadProgress(e) {}
				_doFragLoad(e, t, i = null, s) {
					var r;
					const n = null == t ? void 0 : t.details;
					if (!this.levels || !n) throw new Error(`frag load aborted, missing level${n?"":" detail"}s`);
					let a = null;
					if (!e.encrypted || null != (r = e.decryptdata) && r.key ? !e.encrypted && n.encryptedFragments.length && this.keyLoader.loadClear(e, n.encryptedFragments) : (this.log(`Loading key for ${e.sn} of [${n.startSN}-${n.endSN}], ${"[stream-controller]"===this.logPrefix?"level":"track"} ${e.level}`), this.state = Jr.KEY_LOADING, this.fragCurrent = e, a = this.keyLoader.load(e).then(e => {
							if (!this.fragContextChanged(e.frag)) return this.hls.trigger(Jt.KEY_LOADED, e), this.state === Jr.KEY_LOADING && (this.state = Jr.IDLE), e
						}), this.hls.trigger(Jt.KEY_LOADING, {
							frag: e
						}), null === this.fragCurrent && (a = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))), i = Math.max(e.start, i || 0), this.config.lowLatencyMode && "initSegment" !== e.sn) {
						const r = n.partList;
						if (r && s) {
							i > e.end && n.fragmentHint && (e = n.fragmentHint);
							const o = this.getNextPart(r, e, i);
							if (o > -1) {
								const l = r[o];
								let d;
								return this.log(`Loading part sn: ${e.sn} p: ${l.index} cc: ${e.cc} of playlist [${n.startSN}-${n.endSN}] parts [0-${o}-${r.length-1}] ${"[stream-controller]"===this.logPrefix?"level":"track"}: ${e.level}, target: ${parseFloat(i.toFixed(3))}`), this.nextLoadPosition = l.start + l.duration, this.state = Jr.FRAG_LOADING, d = a ? a.then(i => !i || this.fragContextChanged(i.frag) ? null : this.doFragPartsLoad(e, l, t, s)).catch(e => this.handleFragLoadError(e)) : this.doFragPartsLoad(e, l, t, s).catch(e => this.handleFragLoadError(e)), this.hls.trigger(Jt.FRAG_LOADING, {
									frag: e,
									part: l,
									targetBufferTime: i
								}), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : d
							}
							if (!e.url || this.loadedEndOfParts(r, i)) return Promise.resolve(null)
						}
					}
					this.log(`Loading fragment ${e.sn} cc: ${e.cc} ${n?"of ["+n.startSN+"-"+n.endSN+"] ":""}${"[stream-controller]"===this.logPrefix?"level":"track"}: ${e.level}, target: ${parseFloat(i.toFixed(3))}`), Qt(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = Jr.FRAG_LOADING;
					const o = this.config.progressive;
					let l;
					return l = o && a ? a.then(t => !t || this.fragContextChanged(null == t ? void 0 : t.frag) ? null : this.fragmentLoader.load(e, s)).catch(e => this.handleFragLoadError(e)) : Promise.all([this.fragmentLoader.load(e, o ? s : void 0), a]).then(([e]) => (!o && e && s && s(e), e)).catch(e => this.handleFragLoadError(e)), this.hls.trigger(Jt.FRAG_LOADING, {
						frag: e,
						targetBufferTime: i
					}), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : l
				}
				doFragPartsLoad(e, t, i, s) {
					return new Promise((r, n) => {
						var a;
						const o = [],
							l = null == (a = i.details) ? void 0 : a.partList,
							d = t => {
								this.fragmentLoader.loadPart(e, t, s).then(s => {
									o[t.index] = s;
									const n = s.part;
									this.hls.trigger(Jt.FRAG_LOADED, s);
									const a = lr(i, e.sn, t.index + 1) || dr(l, e.sn, t.index + 1);
									if (!a) return r({
										frag: e,
										part: n,
										partsLoaded: o
									});
									d(a)
								}).catch(n)
							};
						d(t)
					})
				}
				handleFragLoadError(e) {
					if ("data" in e) {
						const t = e.data;
						e.data && t.details === ei.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : this.hls.trigger(Jt.ERROR, t)
					} else this.hls.trigger(Jt.ERROR, {
						type: Zt.OTHER_ERROR,
						details: ei.INTERNAL_EXCEPTION,
						err: e,
						error: e,
						fatal: !0
					});
					return null
				}
				_handleTransmuxerFlush(e) {
					const t = this.getCurrentContext(e);
					if (!t || this.state !== Jr.PARSING) return void(this.fragCurrent || this.state === Jr.STOPPED || this.state === Jr.ERROR || (this.state = Jr.IDLE));
					const {
						frag: i,
						part: s,
						level: r
					} = t, n = self.performance.now();
					i.stats.parsing.end = n, s && (s.stats.parsing.end = n), this.updateLevelTiming(i, s, r, e.partial)
				}
				getCurrentContext(e) {
					const {
						levels: t,
						fragCurrent: i
					} = this, {
						level: s,
						sn: r,
						part: n
					} = e;
					if (null == t || !t[s]) return this.warn(`Levels object was unset while buffering fragment ${r} of level ${s}. The current chunk will not be buffered.`), null;
					const a = t[s],
						o = n > -1 ? lr(a, r, n) : null,
						l = o ? o.fragment : function(e, t, i) {
							if (null == e || !e.details) return null;
							const s = e.details;
							let r = s.fragments[t - s.startSN];
							return r || ((r = s.fragmentHint) && r.sn === t ? r : t < s.startSN && i && i.sn === t ? i : null)
						}(a, r, i);
					return l ? (i && i !== l && (l.stats = i.stats), {
						frag: l,
						part: o,
						level: a
					}) : null
				}
				bufferFragmentData(e, t, i, s) {
					var r;
					if (!e || this.state !== Jr.PARSING) return;
					const {
						data1: n,
						data2: a
					} = e;
					let o = n;
					if (n && a && (o = as(n, a)), null == (r = o) || !r.length) return;
					const l = {
						type: e.type,
						frag: t,
						part: i,
						chunkMeta: s,
						parent: t.type,
						data: o
					};
					this.hls.trigger(Jt.BUFFER_APPENDING, l), e.dropped && e.independent && !i && this.flushBufferGap(t)
				}
				flushBufferGap(e) {
					const t = this.media;
					if (!t) return;
					if (!Br.isBuffered(t, t.currentTime)) return void this.flushMainBuffer(0, e.start);
					const i = t.currentTime,
						s = Br.bufferInfo(t, i, 0),
						r = e.duration,
						n = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * r),
						a = Math.max(Math.min(e.start - n, s.end - n), i + n);
					e.start - a > n && this.flushMainBuffer(a, e.start)
				}
				getFwdBufferInfo(e, t) {
					const i = this.getLoadPosition();
					return Qt(i) ? this.getFwdBufferInfoAtPos(e, i, t) : null
				}
				getFwdBufferInfoAtPos(e, t, i) {
					const {
						config: {
							maxBufferHole: s
						}
					} = this, r = Br.bufferInfo(e, t, s);
					if (0 === r.len && void 0 !== r.nextStart) {
						const n = this.fragmentTracker.getBufferedFrag(t, i);
						if (n && r.nextStart < n.end) return Br.bufferInfo(e, t, Math.max(r.nextStart, s))
					}
					return r
				}
				getMaxBufferLength(e) {
					const {
						config: t
					} = this;
					let i;
					return i = e ? Math.max(8 * t.maxBufferSize / e, t.maxBufferLength) : t.maxBufferLength, Math.min(i, t.maxMaxBufferLength)
				}
				reduceMaxBufferLength(e) {
					const t = this.config,
						i = e || t.maxBufferLength;
					return t.maxMaxBufferLength >= i && (t.maxMaxBufferLength /= 2, this.warn(`Reduce max buffer length to ${t.maxMaxBufferLength}s`), !0)
				}
				getAppendedFrag(e, t = Us.MAIN) {
					const i = this.fragmentTracker.getAppendedFrag(e, Us.MAIN);
					return i && "fragment" in i ? i.fragment : i
				}
				getNextFragment(e, t) {
					const i = t.fragments,
						s = i.length;
					if (!s) return null;
					const {
						config: r
					} = this, n = i[0].start;
					let a;
					if (t.live) {
						const n = r.initialLiveManifestSize;
						if (s < n) return this.warn(`Not enough fragments to start playback (have: ${s}, need: ${n})`), null;
						t.PTSKnown || this.startFragRequested || -1 !== this.startPosition || (a = this.getInitialLiveFragment(t, i), this.startPosition = a ? this.hls.liveSyncPosition || a.start : e)
					} else e <= n && (a = i[0]);
					if (!a) {
						const i = r.lowLatencyMode ? t.partEnd : t.fragmentEnd;
						a = this.getFragmentAtPosition(e, i, t)
					}
					return this.mapToInitFragWhenRequired(a)
				}
				isLoopLoading(e, t) {
					const i = this.fragmentTracker.getState(e);
					return (i === kr.OK || i === kr.PARTIAL && !!e.gap) && this.nextLoadPosition > t
				}
				getNextFragmentLoopLoading(e, t, i, s, r) {
					const n = e.gap,
						a = this.getNextFragment(this.nextLoadPosition, t);
					if (null === a) return a;
					if (e = a, n && e && !e.gap && i.nextStart) {
						const t = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, i.nextStart, s);
						if (null !== t && i.len + t.len >= r) return this.log(`buffer full after gaps in "${s}" playlist starting at sn: ${e.sn}`), null
					}
					return e
				}
				mapToInitFragWhenRequired(e) {
					return null == e || !e.initSegment || null != e && e.initSegment.data || this.bitrateTest ? e : e.initSegment
				}
				getNextPart(e, t, i) {
					let s = -1,
						r = !1,
						n = !0;
					for (let a = 0, o = e.length; a < o; a++) {
						const o = e[a];
						if (n = n && !o.independent, s > -1 && i < o.start) break;
						const l = o.loaded;
						l ? s = -1 : (r || o.independent || n) && o.fragment === t && (s = a), r = l
					}
					return s
				}
				loadedEndOfParts(e, t) {
					const i = e[e.length - 1];
					return i && t > i.start && i.loaded
				}
				getInitialLiveFragment(e, t) {
					const i = this.fragPrevious;
					let s = null;
					if (i) {
						if (e.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${i.programDateTime}`), s = function(e, t, i) {
								if (null === t || !Array.isArray(e) || !e.length || !Qt(t)) return null;
								if (t < (e[0].programDateTime || 0)) return null;
								if (t >= (e[e.length - 1].endProgramDateTime || 0)) return null;
								i = i || 0;
								for (let s = 0; s < e.length; ++s) {
									const r = e[s];
									if (yr(t, i, r)) return r
								}
								return null
							}(t, i.endProgramDateTime, this.config.maxFragLookUpTolerance)), !s) {
							const r = i.sn + 1;
							if (r >= e.startSN && r <= e.endSN) {
								const n = t[r - e.startSN];
								i.cc === n.cc && (s = n, this.log(`Live playlist, switching playlist, load frag with next SN: ${s.sn}`))
							}
							s || (s = function(e, t) {
								return pr.search(e, e => e.cc < t ? 1 : e.cc > t ? -1 : 0)
							}(t, i.cc)) && this.log(`Live playlist, switching playlist, load frag with same CC: ${s.sn}`)
						}
					} else {
						const t = this.hls.liveSyncPosition;
						null !== t && (s = this.getFragmentAtPosition(t, this.bitrateTest ? e.fragmentEnd : e.edge, e))
					}
					return s
				}
				getFragmentAtPosition(e, t, i) {
					const {
						config: s
					} = this;
					let {
						fragPrevious: r
					} = this, {
						fragments: n,
						endSN: a
					} = i;
					const {
						fragmentHint: o
					} = i, l = s.maxFragLookUpTolerance, d = i.partList, h = !!(s.lowLatencyMode && null != d && d.length && o);
					let c;
					if (h && o && !this.bitrateTest && (n = n.concat(o), a = o.sn), e < t) {
						c = mr(r, n, e, e > t - l ? 0 : l)
					} else c = n[n.length - 1];
					if (c) {
						const e = c.sn - i.startSN,
							t = this.fragmentTracker.getState(c);
						if ((t === kr.OK || t === kr.PARTIAL && c.gap) && (r = c), r && c.sn === r.sn && (!h || d[0].fragment.sn > c.sn)) {
							if (r && c.level === r.level) {
								const t = n[e + 1];
								c = c.sn < a && this.fragmentTracker.getState(t) !== kr.OK ? t : null
							}
						}
					}
					return c
				}
				synchronizeToLiveEdge(e) {
					const {
						config: t,
						media: i
					} = this;
					if (!i) return;
					const s = this.hls.liveSyncPosition,
						r = i.currentTime,
						n = e.fragments[0].start,
						a = e.edge,
						o = r >= n - t.maxFragLookUpTolerance && r <= a;
					if (null !== s && i.duration > s && (r < s || !o)) {
						const n = void 0 !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
						(!o && i.readyState < 4 || r < a - n) && (this.loadedmetadata || (this.nextLoadPosition = s), i.readyState && (this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${a}, reset currentTime to : ${s.toFixed(3)}`), i.currentTime = s))
					}
				}
				alignPlaylists(e, t) {
					const {
						levels: i,
						levelLastLoaded: s,
						fragPrevious: r
					} = this, n = null !== s ? i[s] : null, a = e.fragments.length;
					if (!a) return this.warn("No fragments in live playlist"), 0;
					const o = e.fragments[0].start,
						l = !t,
						d = e.alignedSliding && Qt(o);
					if (l || !d && !o) {
						Hr(r, n, e);
						const i = e.fragments[0].start;
						return this.log(`Live playlist sliding: ${i.toFixed(2)} start-sn: ${t?t.startSN:"na"}->${e.startSN} prev-sn: ${r?r.sn:"na"} fragments: ${a}`), i
					}
					return o
				}
				waitForCdnTuneIn(e) {
					return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, 3 * e.partTarget)
				}
				setStartPosition(e, t) {
					let i = this.startPosition;
					if (i < t && (i = -1), -1 === i || -1 === this.lastCurrentTime) {
						const s = null !== this.startTimeOffset,
							r = s ? this.startTimeOffset : e.startTimeOffset;
						null !== r && Qt(r) ? (i = t + r, r < 0 && (i += e.totalduration), i = Math.min(Math.max(t, i), t + e.totalduration), this.log(`Start time offset ${r} found in ${s?"multivariant":"media"} playlist, adjust startPosition to ${i}`), this.startPosition = i) : e.live ? i = this.hls.liveSyncPosition || t : this.startPosition = i = 0, this.lastCurrentTime = i
					}
					this.nextLoadPosition = i
				}
				getLoadPosition() {
					const {
						media: e
					} = this;
					let t = 0;
					return this.loadedmetadata && e ? t = e.currentTime : this.nextLoadPosition && (t = this.nextLoadPosition), t
				}
				handleFragLoadAborted(e, t) {
					this.transmuxer && "initSegment" !== e.sn && e.stats.aborted && (this.warn(`Fragment ${e.sn}${t?" part "+t.index:""} of level ${e.level} was aborted`), this.resetFragmentLoading(e))
				}
				resetFragmentLoading(e) {
					this.fragCurrent && (this.fragContextChanged(e) || this.state === Jr.FRAG_LOADING_WAITING_RETRY) || (this.state = Jr.IDLE)
				}
				onFragmentOrKeyLoadError(e, t) {
					if (t.chunkMeta && !t.frag) {
						const e = this.getCurrentContext(t.chunkMeta);
						e && (t.frag = e.frag)
					}
					const i = t.frag;
					if (!i || i.type !== e || !this.levels) return;
					var s;
					if (this.fragContextChanged(i)) return void this.warn(`Frag load error must match current frag to retry ${i.url} > ${null==(s=this.fragCurrent)?void 0:s.url}`);
					const r = t.details === ei.FRAG_GAP;
					r && this.fragmentTracker.fragBuffered(i, !0);
					const n = t.errorAction,
						{
							action: a,
							retryCount: o = 0,
							retryConfig: l
						} = n || {};
					if (n && a === _r.RetryRequest && l) {
						this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition);
						const s = ur(l, o);
						this.warn(`Fragment ${i.sn} of ${e} ${i.level} errored with ${t.details}, retrying loading ${o+1}/${l.maxNumRetry} in ${s}ms`), n.resolved = !0, this.retryDate = self.performance.now() + s, this.state = Jr.FRAG_LOADING_WAITING_RETRY
					} else l && n ? (this.resetFragmentErrors(e), o < l.maxNumRetry ? r || (n.resolved = !0) : ni.warn(`${t.details} reached or exceeded max retry (${o})`)) : this.state = Jr.ERROR;
					this.tickImmediate()
				}
				reduceLengthAndFlushBuffer(e) {
					if (this.state === Jr.PARSING || this.state === Jr.PARSED) {
						const t = e.parent,
							i = this.getFwdBufferInfo(this.mediaBuffer, t),
							s = i && i.len > .5;
						s && this.reduceMaxBufferLength(i.len);
						const r = !s;
						return r && this.warn(`Buffer full error while media.currentTime is not buffered, flush ${t} buffer`), e.frag && (this.fragmentTracker.removeFragment(e.frag), this.nextLoadPosition = e.frag.start), this.resetLoadingState(), r
					}
					return !1
				}
				resetFragmentErrors(e) {
					e === Us.AUDIO && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = !1), this.state !== Jr.STOPPED && (this.state = Jr.IDLE)
				}
				afterBufferFlushed(e, t, i) {
					if (!e) return;
					const s = Br.getBuffered(e);
					this.fragmentTracker.detectEvictedFragments(t, s, i), this.state === Jr.ENDED && this.resetLoadingState()
				}
				resetLoadingState() {
					this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = Jr.IDLE
				}
				resetStartWhenNotLoaded(e) {
					if (!this.loadedmetadata) {
						this.startFragRequested = !1;
						const t = this.levels ? this.levels[e].details : null;
						null != t && t.live ? (this.startPosition = -1, this.setStartPosition(t, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition
					}
				}
				resetWhenMissingContext(e) {
					this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(e.level), this.resetLoadingState()
				}
				removeUnbufferedFrags(e = 0) {
					this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, !1, !0)
				}
				updateLevelTiming(e, t, i, s) {
					var r;
					const n = i.details;
					if (n) {
						if (Object.keys(e.elementaryStreams).reduce((t, r) => {
								const a = e.elementaryStreams[r];
								if (a) {
									const o = a.endPTS - a.startPTS;
									if (o <= 0) return this.warn(`Could not parse fragment ${e.sn} ${r} duration reliably (${o})`), t || !1;
									const l = s ? 0 : rr(n, e, a.startPTS, a.endPTS, a.startDTS, a.endDTS);
									return this.hls.trigger(Jt.LEVEL_PTS_UPDATED, {
										details: n,
										level: i,
										drift: l,
										type: r,
										frag: e,
										start: a.startPTS,
										end: a.endPTS
									}), !0
								}
								return t
							}, !1)) i.fragmentError = 0;
						else if (null === (null == (r = this.transmuxer) ? void 0 : r.error)) {
							const t = new Error(`Found no media in fragment ${e.sn} of level ${i.id} resetting transmuxer to fallback to playlist timing`);
							if (this.warn(t.message), this.hls.trigger(Jt.ERROR, {
									type: Zt.MEDIA_ERROR,
									details: ei.FRAG_PARSING_ERROR,
									fatal: !1,
									error: t,
									frag: e,
									reason: `Found no media in msn ${e.sn} of level "${i.url}"`
								}), !this.hls) return;
							this.resetTransmuxer()
						}
						this.state = Jr.PARSED, this.hls.trigger(Jt.FRAG_PARSED, {
							frag: e,
							part: t
						})
					} else this.warn("level.details undefined")
				}
				resetTransmuxer() {
					this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
				}
				recoverWorkerError(e) {
					"demuxerWorker" === e.event && (this.resetTransmuxer(), this.resetLoadingState())
				}
				set state(e) {
					const t = this._state;
					t !== e && (this._state = e, this.log(`${t}->${e}`))
				}
				get state() {
					return this._state
				}
			}

			function en() {
				return self.SourceBuffer || self.WebKitSourceBuffer
			}

			function tn(e = "", t = 9e4) {
				return {
					type: e,
					id: -1,
					pid: -1,
					inputTimeScale: t,
					sequenceNumber: -1,
					samples: [],
					dropped: 0
				}
			}
			class sn {
				constructor() {
					this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null
				}
				resetInitSegment(e, t, i, s) {
					this._id3Track = {
						type: "id3",
						id: 3,
						pid: -1,
						inputTimeScale: 9e4,
						sequenceNumber: 0,
						samples: [],
						dropped: 0
					}
				}
				resetTimeStamp(e) {
					this.initPTS = e, this.resetContiguity()
				}
				resetContiguity() {
					this.basePTS = null, this.lastPTS = null, this.frameIndex = 0
				}
				canParse(e, t) {
					return !1
				}
				appendFrame(e, t, i) {}
				demux(e, t) {
					this.cachedData && (e = as(this.cachedData, e), this.cachedData = null);
					let i, s = Ci(e, 0),
						r = s ? s.length : 0;
					const n = this._audioTrack,
						a = this._id3Track,
						o = s ? xi(s) : void 0,
						l = e.length;
					for ((null === this.basePTS || 0 === this.frameIndex && Qt(o)) && (this.basePTS = rn(o, t, this.initPTS), this.lastPTS = this.basePTS), null === this.lastPTS && (this.lastPTS = this.basePTS), s && s.length > 0 && a.samples.push({
							pts: this.lastPTS,
							dts: this.lastPTS,
							data: s,
							type: qs.audioId3,
							duration: Number.POSITIVE_INFINITY
						}); r < l;) {
						if (this.canParse(e, r)) {
							const t = this.appendFrame(n, e, r);
							t ? (this.frameIndex++, this.lastPTS = t.sample.pts, i = r += t.length) : r = l
						} else Oi(e, r) ? (s = Ci(e, r), a.samples.push({
							pts: this.lastPTS,
							dts: this.lastPTS,
							data: s,
							type: qs.audioId3,
							duration: Number.POSITIVE_INFINITY
						}), i = r += s.length) : r++;
						if (r === l && i !== l) {
							const t = ki(e, i);
							this.cachedData ? this.cachedData = as(this.cachedData, t) : this.cachedData = t
						}
					}
					return {
						audioTrack: n,
						videoTrack: tn(),
						id3Track: a,
						textTrack: tn()
					}
				}
				demuxSampleAes(e, t, i) {
					return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`))
				}
				flush(e) {
					const t = this.cachedData;
					return t && (this.cachedData = null, this.demux(t, 0)), {
						audioTrack: this._audioTrack,
						videoTrack: tn(),
						id3Track: this._id3Track,
						textTrack: tn()
					}
				}
				destroy() {}
			}
			const rn = (e, t, i) => {
				if (Qt(e)) return 90 * e;
				return 9e4 * t + (i ? 9e4 * i.baseTime / i.timescale : 0)
			};

			function nn(e, t) {
				return 255 === e[t] && 240 == (246 & e[t + 1])
			}

			function an(e, t) {
				return 1 & e[t + 1] ? 7 : 9
			}

			function on(e, t) {
				return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
			}

			function ln(e, t) {
				return t + 1 < e.length && nn(e, t)
			}

			function dn(e, t) {
				if (ln(e, t)) {
					const i = an(e, t);
					if (t + i >= e.length) return !1;
					const s = on(e, t);
					if (s <= i) return !1;
					const r = t + s;
					return r === e.length || ln(e, r)
				}
				return !1
			}

			function hn(e, t, i, s, r) {
				if (!e.samplerate) {
					const n = function(e, t, i, s) {
						let r, n, a, o;
						const l = navigator.userAgent.toLowerCase(),
							d = s,
							h = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
						r = 1 + ((192 & t[i + 2]) >>> 6);
						const c = (60 & t[i + 2]) >>> 2;
						if (!(c > h.length - 1)) return a = (1 & t[i + 2]) << 2, a |= (192 & t[i + 3]) >>> 6, ni.log(`manifest codec:${s}, ADTS type:${r}, samplingIndex:${c}`), /firefox/i.test(l) ? c >= 6 ? (r = 5, o = new Array(4), n = c - 3) : (r = 2, o = new Array(2), n = c) : -1 !== l.indexOf("android") ? (r = 2, o = new Array(2), n = c) : (r = 5, o = new Array(4), s && (-1 !== s.indexOf("mp4a.40.29") || -1 !== s.indexOf("mp4a.40.5")) || !s && c >= 6 ? n = c - 3 : ((s && -1 !== s.indexOf("mp4a.40.2") && (c >= 6 && 1 === a || /vivaldi/i.test(l)) || !s && 1 === a) && (r = 2, o = new Array(2)), n = c)), o[0] = r << 3, o[0] |= (14 & c) >> 1, o[1] |= (1 & c) << 7, o[1] |= a << 3, 5 === r && (o[1] |= (14 & n) >> 1, o[2] = (1 & n) << 7, o[2] |= 8, o[3] = 0), {
							config: o,
							samplerate: h[c],
							channelCount: a,
							codec: "mp4a.40." + r,
							manifestCodec: d
						};
						e.trigger(Jt.ERROR, {
							type: Zt.MEDIA_ERROR,
							details: ei.FRAG_PARSING_ERROR,
							fatal: !0,
							reason: `invalid ADTS sampling index:${c}`
						})
					}(t, i, s, r);
					if (!n) return;
					e.config = n.config, e.samplerate = n.samplerate, e.channelCount = n.channelCount, e.codec = n.codec, e.manifestCodec = n.manifestCodec, ni.log(`parsed codec:${e.codec}, rate:${n.samplerate}, channels:${n.channelCount}`)
				}
			}

			function cn(e) {
				return 9216e4 / e
			}

			function un(e, t, i, s, r) {
				const n = s + r * cn(e.samplerate),
					a = function(e, t) {
						const i = an(e, t);
						if (t + i <= e.length) {
							const s = on(e, t) - i;
							if (s > 0) return {
								headerLength: i,
								frameLength: s
							}
						}
					}(t, i);
				let o;
				if (a) {
					const {
						frameLength: s,
						headerLength: r
					} = a, l = r + s, d = Math.max(0, i + l - t.length);
					d ? (o = new Uint8Array(l - r)).set(t.subarray(i + r, t.length), 0) : o = t.subarray(i + r, i + l);
					const h = {
						unit: o,
						pts: n
					};
					return d || e.samples.push(h), {
						sample: h,
						length: l,
						missing: d
					}
				}
				const l = t.length - i;
				return (o = new Uint8Array(l)).set(t.subarray(i, t.length), 0), {
					sample: {
						unit: o,
						pts: n
					},
					length: l,
					missing: -1
				}
			}
			const fn = /\/emsg[-/]ID3/i;
			let gn = null;
			const pn = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
				mn = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
				vn = [
					[0, 72, 144, 12],
					[0, 0, 0, 0],
					[0, 72, 144, 12],
					[0, 144, 144, 12]
				],
				yn = [0, 1, 1, 4];

			function En(e, t, i, s, r) {
				if (i + 24 > t.length) return;
				const n = _n(t, i);
				if (n && i + n.frameLength <= t.length) {
					const a = s + r * (9e4 * n.samplesPerFrame / n.sampleRate),
						o = {
							unit: t.subarray(i, i + n.frameLength),
							pts: a,
							dts: a
						};
					return e.config = [], e.channelCount = n.channelCount, e.samplerate = n.sampleRate, e.samples.push(o), {
						sample: o,
						length: n.frameLength,
						missing: 0
					}
				}
			}

			function _n(e, t) {
				const i = e[t + 1] >> 3 & 3,
					s = e[t + 1] >> 1 & 3,
					r = e[t + 2] >> 4 & 15,
					n = e[t + 2] >> 2 & 3;
				if (1 !== i && 0 !== r && 15 !== r && 3 !== n) {
					const a = e[t + 2] >> 1 & 1,
						o = e[t + 3] >> 6,
						l = 1e3 * pn[14 * (3 === i ? 3 - s : 3 === s ? 3 : 4) + r - 1],
						d = mn[3 * (3 === i ? 0 : 2 === i ? 1 : 2) + n],
						h = 3 === o ? 1 : 2,
						c = vn[i][s],
						u = yn[s],
						f = 8 * c * u,
						g = Math.floor(c * l / d + a) * u;
					if (null === gn) {
						const e = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
						gn = e ? parseInt(e[1]) : 0
					}
					return !!gn && gn <= 87 && 2 === s && l >= 224e3 && 0 === o && (e[t + 3] = 128 | e[t + 3]), {
						sampleRate: d,
						channelCount: h,
						frameLength: g,
						samplesPerFrame: f
					}
				}
			}

			function bn(e, t) {
				return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
			}

			function Tn(e, t) {
				return t + 1 < e.length && bn(e, t)
			}

			function Sn(e, t) {
				if (t + 1 < e.length && bn(e, t)) {
					const i = 4,
						s = _n(e, t);
					let r = i;
					null != s && s.frameLength && (r = s.frameLength);
					const n = t + r;
					return n === e.length || Tn(e, n)
				}
				return !1
			}
			class An {
				constructor(e) {
					this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
				}
				loadWord() {
					const e = this.data,
						t = this.bytesAvailable,
						i = e.byteLength - t,
						s = new Uint8Array(4),
						r = Math.min(4, t);
					if (0 === r) throw new Error("no bytes available");
					s.set(e.subarray(i, i + r)), this.word = new DataView(s.buffer).getUint32(0), this.bitsAvailable = 8 * r, this.bytesAvailable -= r
				}
				skipBits(e) {
					let t;
					e = Math.min(e, 8 * this.bytesAvailable + this.bitsAvailable), this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, e -= (t = e >> 3) << 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
				}
				readBits(e) {
					let t = Math.min(this.bitsAvailable, e);
					const i = this.word >>> 32 - t;
					if (e > 32 && ni.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0) this.word <<= t;
					else {
						if (!(this.bytesAvailable > 0)) throw new Error("no bits available");
						this.loadWord()
					}
					return (t = e - t) > 0 && this.bitsAvailable ? i << t | this.readBits(t) : i
				}
				skipLZ() {
					let e;
					for (e = 0; e < this.bitsAvailable; ++e)
						if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
					return this.loadWord(), e + this.skipLZ()
				}
				skipUEG() {
					this.skipBits(1 + this.skipLZ())
				}
				skipEG() {
					this.skipBits(1 + this.skipLZ())
				}
				readUEG() {
					const e = this.skipLZ();
					return this.readBits(e + 1) - 1
				}
				readEG() {
					const e = this.readUEG();
					return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
				}
				readBoolean() {
					return 1 === this.readBits(1)
				}
				readUByte() {
					return this.readBits(8)
				}
				readUShort() {
					return this.readBits(16)
				}
				readUInt() {
					return this.readBits(32)
				}
				skipScalingList(e) {
					let t, i = 8,
						s = 8;
					for (let r = 0; r < e; r++) 0 !== s && (s = (i + (t = this.readEG()) + 256) % 256), i = 0 === s ? i : s
				}
				readSPS() {
					let e, t, i, s = 0,
						r = 0,
						n = 0,
						a = 0;
					const o = this.readUByte.bind(this),
						l = this.readBits.bind(this),
						d = this.readUEG.bind(this),
						h = this.readBoolean.bind(this),
						c = this.skipBits.bind(this),
						u = this.skipEG.bind(this),
						f = this.skipUEG.bind(this),
						g = this.skipScalingList.bind(this);
					o();
					const p = o();
					if (l(5), c(3), o(), f(), 100 === p || 110 === p || 122 === p || 244 === p || 44 === p || 83 === p || 86 === p || 118 === p || 128 === p) {
						const e = d();
						if (3 === e && c(1), f(), f(), c(1), h())
							for (t = 3 !== e ? 8 : 12, i = 0; i < t; i++) h() && g(i < 6 ? 16 : 64)
					}
					f();
					const m = d();
					if (0 === m) d();
					else if (1 === m)
						for (c(1), u(), u(), e = d(), i = 0; i < e; i++) u();
					f(), c(1);
					const v = d(),
						y = d(),
						E = l(1);
					0 === E && c(1), c(1), h() && (s = d(), r = d(), n = d(), a = d());
					let _ = [1, 1];
					if (h() && h()) {
						switch (o()) {
							case 1:
								_ = [1, 1];
								break;
							case 2:
								_ = [12, 11];
								break;
							case 3:
								_ = [10, 11];
								break;
							case 4:
								_ = [16, 11];
								break;
							case 5:
								_ = [40, 33];
								break;
							case 6:
								_ = [24, 11];
								break;
							case 7:
								_ = [20, 11];
								break;
							case 8:
								_ = [32, 11];
								break;
							case 9:
								_ = [80, 33];
								break;
							case 10:
								_ = [18, 11];
								break;
							case 11:
								_ = [15, 11];
								break;
							case 12:
								_ = [64, 33];
								break;
							case 13:
								_ = [160, 99];
								break;
							case 14:
								_ = [4, 3];
								break;
							case 15:
								_ = [3, 2];
								break;
							case 16:
								_ = [2, 1];
								break;
							case 255:
								_ = [o() << 8 | o(), o() << 8 | o()]
						}
					}
					return {
						width: Math.ceil(16 * (v + 1) - 2 * s - 2 * r),
						height: (2 - E) * (y + 1) * 16 - (E ? 2 : 4) * (n + a),
						pixelRatio: _
					}
				}
				readSliceType() {
					return this.readUByte(), this.readUEG(), this.readUEG()
				}
			}
			class Ln {
				constructor(e, t, i) {
					this.keyData = void 0, this.decrypter = void 0, this.keyData = i, this.decrypter = new Xr(t, {
						removePKCS7Padding: !1
					})
				}
				decryptBuffer(e) {
					return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer)
				}
				decryptAacSample(e, t, i) {
					const s = e[t].unit;
					if (s.length <= 16) return;
					const r = s.subarray(16, s.length - s.length % 16),
						n = r.buffer.slice(r.byteOffset, r.byteOffset + r.length);
					this.decryptBuffer(n).then(r => {
						const n = new Uint8Array(r);
						s.set(n, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, i)
					})
				}
				decryptAacSamples(e, t, i) {
					for (;; t++) {
						if (t >= e.length) return void i();
						if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, i), !this.decrypter.isSync())) return
					}
				}
				getAvcEncryptedData(e) {
					const t = 16 * Math.floor((e.length - 48) / 160) + 16,
						i = new Int8Array(t);
					let s = 0;
					for (let r = 32; r < e.length - 16; r += 160, s += 16) i.set(e.subarray(r, r + 16), s);
					return i
				}
				getAvcDecryptedUnit(e, t) {
					const i = new Uint8Array(t);
					let s = 0;
					for (let r = 32; r < e.length - 16; r += 160, s += 16) e.set(i.subarray(s, s + 16), r);
					return e
				}
				decryptAvcSample(e, t, i, s, r) {
					const n = hs(r.data),
						a = this.getAvcEncryptedData(n);
					this.decryptBuffer(a.buffer).then(a => {
						r.data = this.getAvcDecryptedUnit(n, a), this.decrypter.isSync() || this.decryptAvcSamples(e, t, i + 1, s)
					})
				}
				decryptAvcSamples(e, t, i, s) {
					if (e instanceof Uint8Array) throw new Error("Cannot decrypt samples of type Uint8Array");
					for (;; t++, i = 0) {
						if (t >= e.length) return void s();
						const r = e[t].units;
						for (; !(i >= r.length); i++) {
							const n = r[i];
							if (!(n.data.length <= 48 || 1 !== n.type && 5 !== n.type || (this.decryptAvcSample(e, t, i, s, n), this.decrypter.isSync()))) return
						}
					}
				}
			}
			const Rn = 188;
			class wn {
				constructor(e, t, i) {
					this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = e, this.config = t, this.typeSupported = i
				}
				static probe(e) {
					const t = wn.syncOffset(e);
					return t > 0 && ni.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`), -1 !== t
				}
				static syncOffset(e) {
					const t = e.length;
					let i = Math.min(5 * Rn, e.length - Rn) + 1,
						s = 0;
					for (; s < i;) {
						let r = !1,
							n = -1,
							a = 0;
						for (let o = s; o < t; o += Rn) {
							if (71 !== e[o]) {
								if (a) return -1;
								break
							}
							if (a++, -1 === n && 0 !== (n = o) && (i = Math.min(n + 99 * Rn, e.length - Rn) + 1), r || (r = 0 === In(e, o)), r && a > 1 && (0 === n && a > 2 || o + Rn > i)) return n
						}
						s++
					}
					return -1
				}
				static createTrack(e, t) {
					return {
						container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
						type: e,
						id: zi[e],
						pid: -1,
						inputTimeScale: 9e4,
						sequenceNumber: 0,
						samples: [],
						dropped: 0,
						duration: "audio" === e ? t : void 0
					}
				}
				resetInitSegment(e, t, i, s) {
					this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = wn.createTrack("video"), this._audioTrack = wn.createTrack("audio", s), this._id3Track = wn.createTrack("id3"), this._txtTrack = wn.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.audioCodec = t, this.videoCodec = i, this._duration = s
				}
				resetTimeStamp() {}
				resetContiguity() {
					const {
						_audioTrack: e,
						_avcTrack: t,
						_id3Track: i
					} = this;
					e && (e.pesData = null), t && (t.pesData = null), i && (i.pesData = null), this.aacOverFlow = null, this.avcSample = null, this.remainderData = null
				}
				demux(e, t, i = !1, s = !1) {
					let r;
					i || (this.sampleAes = null);
					const n = this._avcTrack,
						a = this._audioTrack,
						o = this._id3Track,
						l = this._txtTrack;
					let d = n.pid,
						h = n.pesData,
						c = a.pid,
						u = o.pid,
						f = a.pesData,
						g = o.pesData,
						p = null,
						m = this.pmtParsed,
						v = this._pmtId,
						y = e.length;
					if (this.remainderData && (y = (e = as(this.remainderData, e)).length, this.remainderData = null), y < Rn && !s) return this.remainderData = e, {
						audioTrack: a,
						videoTrack: n,
						id3Track: o,
						textTrack: l
					};
					const E = Math.max(0, wn.syncOffset(e));
					(y -= (y - E) % Rn) < e.byteLength && !s && (this.remainderData = new Uint8Array(e.buffer, y, e.buffer.byteLength - y));
					let _ = 0;
					for (let T = E; T < y; T += Rn)
						if (71 === e[T]) {
							const t = !!(64 & e[T + 1]),
								s = In(e, T);
							let y;
							if ((48 & e[T + 3]) >> 4 > 1) {
								if ((y = T + 5 + e[T + 4]) === T + Rn) continue
							} else y = T + 4;
							switch (s) {
								case d:
									t && (h && (r = Pn(h)) && this.parseAVCPES(n, l, r, !1), h = {
										data: [],
										size: 0
									}), h && (h.data.push(e.subarray(y, T + Rn)), h.size += T + Rn - y);
									break;
								case c:
									if (t) {
										if (f && (r = Pn(f))) switch (a.segmentCodec) {
											case "aac":
												this.parseAACPES(a, r);
												break;
											case "mp3":
												this.parseMPEGPES(a, r)
										}
										f = {
											data: [],
											size: 0
										}
									}
									f && (f.data.push(e.subarray(y, T + Rn)), f.size += T + Rn - y);
									break;
								case u:
									t && (g && (r = Pn(g)) && this.parseID3PES(o, r), g = {
										data: [],
										size: 0
									}), g && (g.data.push(e.subarray(y, T + Rn)), g.size += T + Rn - y);
									break;
								case 0:
									t && (y += e[y] + 1), v = this._pmtId = Dn(e, y);
									break;
								case v: {
									t && (y += e[y] + 1);
									const s = Cn(e, y, this.typeSupported, i);
									(d = s.avc) > 0 && (n.pid = d), (c = s.audio) > 0 && (a.pid = c, a.segmentCodec = s.segmentCodec), (u = s.id3) > 0 && (o.pid = u), null === p || m || (ni.warn(`MPEG-TS PMT found at ${T} after unknown PID '${p}'. Backtracking to sync byte @${E} to parse all TS packets.`), p = null, T = E - 188), m = this.pmtParsed = !0;
									break
								}
								case 17:
								case 8191:
									break;
								default:
									p = s
							}
						} else _++;
					if (_ > 0) {
						const e = new Error(`Found ${_} TS packet/s that do not start with 0x47`);
						this.observer.emit(Jt.ERROR, Jt.ERROR, {
							type: Zt.MEDIA_ERROR,
							details: ei.FRAG_PARSING_ERROR,
							fatal: !1,
							error: e,
							reason: e.message
						})
					}
					n.pesData = h, a.pesData = f, o.pesData = g;
					const b = {
						audioTrack: a,
						videoTrack: n,
						id3Track: o,
						textTrack: l
					};
					return s && this.extractRemainingSamples(b), b
				}
				flush() {
					const {
						remainderData: e
					} = this;
					let t;
					return this.remainderData = null, t = e ? this.demux(e, -1, !1, !0) : {
						videoTrack: this._avcTrack,
						audioTrack: this._audioTrack,
						id3Track: this._id3Track,
						textTrack: this._txtTrack
					}, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t
				}
				extractRemainingSamples(e) {
					const {
						audioTrack: t,
						videoTrack: i,
						id3Track: s,
						textTrack: r
					} = e, n = i.pesData, a = t.pesData, o = s.pesData;
					let l;
					if (n && (l = Pn(n)) ? (this.parseAVCPES(i, r, l, !0), i.pesData = null) : i.pesData = n, a && (l = Pn(a))) {
						switch (t.segmentCodec) {
							case "aac":
								this.parseAACPES(t, l);
								break;
							case "mp3":
								this.parseMPEGPES(t, l)
						}
						t.pesData = null
					} else null != a && a.size && ni.log("last AAC PES packet truncated,might overlap between fragments"), t.pesData = a;
					o && (l = Pn(o)) ? (this.parseID3PES(s, l), s.pesData = null) : s.pesData = o
				}
				demuxSampleAes(e, t, i) {
					const s = this.demux(e, i, !0, !this.config.progressive),
						r = this.sampleAes = new Ln(this.observer, this.config, t);
					return this.decrypt(s, r)
				}
				decrypt(e, t) {
					return new Promise(i => {
						const {
							audioTrack: s,
							videoTrack: r
						} = e;
						s.samples && "aac" === s.segmentCodec ? t.decryptAacSamples(s.samples, 0, () => {
							r.samples ? t.decryptAvcSamples(r.samples, 0, 0, () => {
								i(e)
							}) : i(e)
						}) : r.samples && t.decryptAvcSamples(r.samples, 0, 0, () => {
							i(e)
						})
					})
				}
				destroy() {
					this._duration = 0
				}
				parseAVCPES(e, t, i, s) {
					const r = this.parseAVCNALu(e, i.data);
					let n, a = this.avcSample,
						o = !1;
					i.data = null, a && r.length && !e.audFound && (On(a, e), a = this.avcSample = kn(!1, i.pts, i.dts, "")), r.forEach(s => {
						switch (s.type) {
							case 1: {
								n = !0, a || (a = this.avcSample = kn(!0, i.pts, i.dts, "")), a.frame = !0;
								const e = s.data;
								if (o && e.length > 4) {
									const t = new An(e).readSliceType();
									2 !== t && 4 !== t && 7 !== t && 9 !== t || (a.key = !0)
								}
								break
							}
							case 5:
								n = !0, a || (a = this.avcSample = kn(!0, i.pts, i.dts, "")), a.key = !0, a.frame = !0;
								break;
							case 6:
								n = !0, ds(s.data, 1, i.pts, t.samples);
								break;
							case 7:
								if (n = !0, o = !0, !e.sps) {
									const t = s.data,
										i = new An(t).readSPS();
									e.width = i.width, e.height = i.height, e.pixelRatio = i.pixelRatio, e.sps = [t], e.duration = this._duration;
									const r = t.subarray(1, 4);
									let n = "avc1.";
									for (let e = 0; e < 3; e++) {
										let t = r[e].toString(16);
										t.length < 2 && (t = "0" + t), n += t
									}
									e.codec = n
								}
								break;
							case 8:
								n = !0, e.pps || (e.pps = [s.data]);
								break;
							case 9:
								n = !1, e.audFound = !0, a && On(a, e), a = this.avcSample = kn(!1, i.pts, i.dts, "");
								break;
							case 12:
								n = !0;
								break;
							default:
								n = !1, a && (a.debug += "unknown NAL " + s.type + " ")
						}
						if (a && n) {
							a.units.push(s)
						}
					}), s && a && (On(a, e), this.avcSample = null)
				}
				getLastNalUnit(e) {
					var t;
					let i, s = this.avcSample;
					if (s && 0 !== s.units.length || (s = e[e.length - 1]), null != (t = s) && t.units) {
						const e = s.units;
						i = e[e.length - 1]
					}
					return i
				}
				parseAVCNALu(e, t) {
					const i = t.byteLength;
					let s = e.naluState || 0;
					const r = s,
						n = [];
					let a, o, l, d = 0,
						h = -1,
						c = 0;
					for (-1 === s && (h = 0, c = 31 & t[0], s = 0, d = 1); d < i;)
						if (a = t[d++], s)
							if (1 !== s)
								if (a)
									if (1 === a) {
										if (h >= 0) {
											const e = {
												data: t.subarray(h, d - s - 1),
												type: c
											};
											n.push(e)
										} else {
											const i = this.getLastNalUnit(e.samples);
											if (i && (r && d <= 4 - r && i.state && (i.data = i.data.subarray(0, i.data.byteLength - r)), (o = d - s - 1) > 0)) {
												const e = new Uint8Array(i.data.byteLength + o);
												e.set(i.data, 0), e.set(t.subarray(0, o), i.data.byteLength), i.data = e, i.state = 0
											}
										}
										d < i ? (h = d, c = l = 31 & t[d], s = 0) : s = -1
									} else s = 0;
					else s = 3;
					else s = a ? 0 : 2;
					else s = a ? 0 : 1;
					if (h >= 0 && s >= 0) {
						const e = {
							data: t.subarray(h, i),
							type: c,
							state: s
						};
						n.push(e)
					}
					if (0 === n.length) {
						const i = this.getLastNalUnit(e.samples);
						if (i) {
							const e = new Uint8Array(i.data.byteLength + t.byteLength);
							e.set(i.data, 0), e.set(t, i.data.byteLength), i.data = e
						}
					}
					return e.naluState = s, n
				}
				parseAACPES(e, t) {
					let i = 0;
					const s = this.aacOverFlow;
					let r, n, a, o = t.data;
					if (s) {
						this.aacOverFlow = null;
						const t = s.missing,
							r = s.sample.unit.byteLength;
						if (-1 === t) {
							const e = new Uint8Array(r + o.byteLength);
							e.set(s.sample.unit, 0), e.set(o, r), o = e
						} else {
							const n = r - t;
							s.sample.unit.set(o.subarray(0, t), n), e.samples.push(s.sample), i = s.missing
						}
					}
					for (r = i, n = o.length; r < n - 1 && !ln(o, r); r++);
					if (r !== i) {
						let e;
						const t = r < n - 1;
						e = t ? `AAC PES did not start with ADTS header,offset:${r}` : "No ADTS header found in AAC PES";
						const i = new Error(e);
						if (ni.warn(`parsing error: ${e}`), this.observer.emit(Jt.ERROR, Jt.ERROR, {
								type: Zt.MEDIA_ERROR,
								details: ei.FRAG_PARSING_ERROR,
								fatal: !1,
								levelRetry: t,
								error: i,
								reason: e
							}), !t) return
					}
					if (hn(e, this.observer, o, r, this.audioCodec), void 0 !== t.pts) a = t.pts;
					else {
						if (!s) return void ni.warn("[tsdemuxer]: AAC PES unknown PTS"); {
							const t = cn(e.samplerate);
							a = s.sample.pts + t
						}
					}
					let l, d = 0;
					for (; r < n;) {
						if (r += (l = un(e, o, r, a, d)).length, l.missing) {
							this.aacOverFlow = l;
							break
						}
						for (d++; r < n - 1 && !ln(o, r); r++);
					}
				}
				parseMPEGPES(e, t) {
					const i = t.data,
						s = i.length;
					let r = 0,
						n = 0;
					const a = t.pts;
					if (void 0 !== a)
						for (; n < s;)
							if (Tn(i, n)) {
								const t = En(e, i, n, a, r);
								if (!t) break;
								n += t.length, r++
							} else n++;
					else ni.warn("[tsdemuxer]: MPEG PES unknown PTS")
				}
				parseID3PES(e, t) {
					if (void 0 === t.pts) return void ni.warn("[tsdemuxer]: ID3 PES unknown PTS");
					const i = Xt({}, t, {
						type: this._avcTrack ? qs.emsg : qs.audioId3,
						duration: Number.POSITIVE_INFINITY
					});
					e.samples.push(i)
				}
			}

			function kn(e, t, i, s) {
				return {
					key: e,
					frame: !1,
					pts: t,
					dts: i,
					units: [],
					debug: s,
					length: 0
				}
			}

			function In(e, t) {
				return ((31 & e[t + 1]) << 8) + e[t + 2]
			}

			function Dn(e, t) {
				return (31 & e[t + 10]) << 8 | e[t + 11]
			}

			function Cn(e, t, i, s) {
				const r = {
						audio: -1,
						avc: -1,
						id3: -1,
						segmentCodec: "aac"
					},
					n = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4;
				for (t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < n;) {
					const n = In(e, t);
					switch (e[t]) {
						case 207:
							if (!s) {
								ni.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
								break
							}
							case 15:
								-1 === r.audio && (r.audio = n);
								break;
							case 21:
								-1 === r.id3 && (r.id3 = n);
								break;
							case 219:
								if (!s) {
									ni.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
									break
								}
								case 27:
									-1 === r.avc && (r.avc = n);
									break;
								case 3:
								case 4:
									!0 !== i.mpeg && !0 !== i.mp3 ? ni.log("MPEG audio found, not supported in this browser") : -1 === r.audio && (r.audio = n, r.segmentCodec = "mp3");
									break;
								case 36:
									ni.warn("Unsupported HEVC stream type found")
					}
					t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
				}
				return r
			}

			function Pn(e) {
				let t, i, s, r, n, a = 0;
				const o = e.data;
				if (!e || 0 === e.size) return null;
				for (; o[0].length < 19 && o.length > 1;) {
					const e = new Uint8Array(o[0].length + o[1].length);
					e.set(o[0]), e.set(o[1], o[0].length), o[0] = e, o.splice(1, 1)
				}
				if (1 === ((t = o[0])[0] << 16) + (t[1] << 8) + t[2]) {
					if ((i = (t[4] << 8) + t[5]) && i > e.size - 6) return null;
					const l = t[7];
					192 & l && (r = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2, 64 & l ? r - (n = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 54e5 && (ni.warn(`${Math.round((r-n)/9e4)}s delta between PTS and DTS, align them`), r = n) : n = r);
					let d = (s = t[8]) + 9;
					if (e.size <= d) return null;
					e.size -= d;
					const h = new Uint8Array(e.size);
					for (let e = 0, i = o.length; e < i; e++) {
						let i = (t = o[e]).byteLength;
						if (d) {
							if (d > i) {
								d -= i;
								continue
							}
							t = t.subarray(d), i -= d, d = 0
						}
						h.set(t, a), a += i
					}
					return i && (i -= s + 3), {
						data: h,
						pts: r,
						dts: n,
						len: i
					}
				}
				return null
			}

			function On(e, t) {
				if (e.units.length && e.frame) {
					if (void 0 === e.pts) {
						const i = t.samples,
							s = i.length;
						if (!s) return void t.dropped++; {
							const t = i[s - 1];
							e.pts = t.pts, e.dts = t.dts
						}
					}
					t.samples.push(e)
				}
				e.debug.length && ni.log(e.pts + "/" + e.dts + ":" + e.debug)
			}
			class xn {
				static getSilentFrame(e, t) {
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
				}
			}
			const Mn = Math.pow(2, 32) - 1;
			class Fn {
				static init() {
					let e;
					for (e in Fn.types = {
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
						}, Fn.types) Fn.types.hasOwnProperty(e) && (Fn.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
					const t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
						i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
					Fn.HDLR_TYPES = {
						video: t,
						audio: i
					};
					const s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
						r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
					Fn.STTS = Fn.STSC = Fn.STCO = r, Fn.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Fn.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), Fn.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), Fn.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
					const n = new Uint8Array([105, 115, 111, 109]),
						a = new Uint8Array([97, 118, 99, 49]),
						o = new Uint8Array([0, 0, 0, 1]);
					Fn.FTYP = Fn.box(Fn.types.ftyp, n, o, n, a), Fn.DINF = Fn.box(Fn.types.dinf, Fn.box(Fn.types.dref, s))
				}
				static box(e, ...t) {
					let i = 8,
						s = t.length;
					const r = s;
					for (; s--;) i += t[s].byteLength;
					const n = new Uint8Array(i);
					for (n[0] = i >> 24 & 255, n[1] = i >> 16 & 255, n[2] = i >> 8 & 255, n[3] = 255 & i, n.set(e, 4), s = 0, i = 8; s < r; s++) n.set(t[s], i), i += t[s].byteLength;
					return n
				}
				static hdlr(e) {
					return Fn.box(Fn.types.hdlr, Fn.HDLR_TYPES[e])
				}
				static mdat(e) {
					return Fn.box(Fn.types.mdat, e)
				}
				static mdhd(e, t) {
					t *= e;
					const i = Math.floor(t / (Mn + 1)),
						s = Math.floor(t % (Mn + 1));
					return Fn.box(Fn.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, 85, 196, 0, 0]))
				}
				static mdia(e) {
					return Fn.box(Fn.types.mdia, Fn.mdhd(e.timescale, e.duration), Fn.hdlr(e.type), Fn.minf(e))
				}
				static mfhd(e) {
					return Fn.box(Fn.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
				}
				static minf(e) {
					return "audio" === e.type ? Fn.box(Fn.types.minf, Fn.box(Fn.types.smhd, Fn.SMHD), Fn.DINF, Fn.stbl(e)) : Fn.box(Fn.types.minf, Fn.box(Fn.types.vmhd, Fn.VMHD), Fn.DINF, Fn.stbl(e))
				}
				static moof(e, t, i) {
					return Fn.box(Fn.types.moof, Fn.mfhd(e), Fn.traf(i, t))
				}
				static moov(e) {
					let t = e.length;
					const i = [];
					for (; t--;) i[t] = Fn.trak(e[t]);
					return Fn.box.apply(null, [Fn.types.moov, Fn.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(Fn.mvex(e)))
				}
				static mvex(e) {
					let t = e.length;
					const i = [];
					for (; t--;) i[t] = Fn.trex(e[t]);
					return Fn.box.apply(null, [Fn.types.mvex, ...i])
				}
				static mvhd(e, t) {
					t *= e;
					const i = Math.floor(t / (Mn + 1)),
						s = Math.floor(t % (Mn + 1)),
						r = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
					return Fn.box(Fn.types.mvhd, r)
				}
				static sdtp(e) {
					const t = e.samples || [],
						i = new Uint8Array(4 + t.length);
					let s, r;
					for (s = 0; s < t.length; s++) r = t[s].flags, i[s + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
					return Fn.box(Fn.types.sdtp, i)
				}
				static stbl(e) {
					return Fn.box(Fn.types.stbl, Fn.stsd(e), Fn.box(Fn.types.stts, Fn.STTS), Fn.box(Fn.types.stsc, Fn.STSC), Fn.box(Fn.types.stsz, Fn.STSZ), Fn.box(Fn.types.stco, Fn.STCO))
				}
				static avc1(e) {
					let t, i, s, r = [],
						n = [];
					for (t = 0; t < e.sps.length; t++) s = (i = e.sps[t]).byteLength, r.push(s >>> 8 & 255), r.push(255 & s), r = r.concat(Array.prototype.slice.call(i));
					for (t = 0; t < e.pps.length; t++) s = (i = e.pps[t]).byteLength, n.push(s >>> 8 & 255), n.push(255 & s), n = n.concat(Array.prototype.slice.call(i));
					const a = Fn.box(Fn.types.avcC, new Uint8Array([1, r[3], r[4], r[5], 255, 224 | e.sps.length].concat(r).concat([e.pps.length]).concat(n))),
						o = e.width,
						l = e.height,
						d = e.pixelRatio[0],
						h = e.pixelRatio[1];
					return Fn.box(Fn.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, o >> 8 & 255, 255 & o, l >> 8 & 255, 255 & l, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), a, Fn.box(Fn.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), Fn.box(Fn.types.pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h])))
				}
				static esds(e) {
					const t = e.config.length;
					return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
				}
				static mp4a(e) {
					const t = e.samplerate;
					return Fn.box(Fn.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, t >> 8 & 255, 255 & t, 0, 0]), Fn.box(Fn.types.esds, Fn.esds(e)))
				}
				static mp3(e) {
					const t = e.samplerate;
					return Fn.box(Fn.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, t >> 8 & 255, 255 & t, 0, 0]))
				}
				static stsd(e) {
					return "audio" === e.type ? "mp3" === e.segmentCodec && "mp3" === e.codec ? Fn.box(Fn.types.stsd, Fn.STSD, Fn.mp3(e)) : Fn.box(Fn.types.stsd, Fn.STSD, Fn.mp4a(e)) : Fn.box(Fn.types.stsd, Fn.STSD, Fn.avc1(e))
				}
				static tkhd(e) {
					const t = e.id,
						i = e.duration * e.timescale,
						s = e.width,
						r = e.height,
						n = Math.floor(i / (Mn + 1)),
						a = Math.floor(i % (Mn + 1));
					return Fn.box(Fn.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, s >> 8 & 255, 255 & s, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
				}
				static traf(e, t) {
					const i = Fn.sdtp(e),
						s = e.id,
						r = Math.floor(t / (Mn + 1)),
						n = Math.floor(t % (Mn + 1));
					return Fn.box(Fn.types.traf, Fn.box(Fn.types.tfhd, new Uint8Array([0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), Fn.box(Fn.types.tfdt, new Uint8Array([1, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), Fn.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
				}
				static trak(e) {
					return e.duration = e.duration || 4294967295, Fn.box(Fn.types.trak, Fn.tkhd(e), Fn.mdia(e))
				}
				static trex(e) {
					const t = e.id;
					return Fn.box(Fn.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
				}
				static trun(e, t) {
					const i = e.samples || [],
						s = i.length,
						r = 12 + 16 * s,
						n = new Uint8Array(r);
					let a, o, l, d, h, c;
					for (t += 8 + r, n.set(["video" === e.type ? 1 : 0, 0, 15, 1, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0), a = 0; a < s; a++) l = (o = i[a]).duration, d = o.size, h = o.flags, c = o.cts, n.set([l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d, h.isLeading << 2 | h.dependsOn, h.isDependedOn << 6 | h.hasRedundancy << 4 | h.paddingValue << 1 | h.isNonSync, 61440 & h.degradPrio, 15 & h.degradPrio, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c], 12 + 16 * a);
					return Fn.box(Fn.types.trun, n)
				}
				static initSegment(e) {
					Fn.types || Fn.init();
					const t = Fn.moov(e),
						i = new Uint8Array(Fn.FTYP.byteLength + t.byteLength);
					return i.set(Fn.FTYP), i.set(t, Fn.FTYP.byteLength), i
				}
			}
			Fn.types = void 0, Fn.HDLR_TYPES = void 0, Fn.STTS = void 0, Fn.STSC = void 0, Fn.STCO = void 0, Fn.STSZ = void 0, Fn.VMHD = void 0, Fn.SMHD = void 0, Fn.STSD = void 0, Fn.FTYP = void 0, Fn.DINF = void 0;
			const Nn = 9e4;

			function Un(e, t, i = 1, s = !1) {
				const r = e * t * i;
				return s ? Math.round(r) : r
			}

			function Bn(e, t = !1) {
				return Un(e, 1e3, 1 / Nn, t)
			}
			const $n = 1e4,
				Vn = 1024,
				Gn = 1152;
			let jn, Hn = null,
				Kn = null;
			class qn {
				constructor(e, t, i, s = "") {
					if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = e, this.config = t, this.typeSupported = i, this.ISGenerated = !1, null === Hn) {
						const e = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
						Hn = e ? parseInt(e[1]) : 0
					}
					if (null === Kn) {
						const e = navigator.userAgent.match(/Safari\/(\d+)/i);
						Kn = e ? parseInt(e[1]) : 0
					}
				}
				destroy() {}
				resetTimeStamp(e) {
					ni.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = e
				}
				resetNextTimestamp() {
					ni.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1
				}
				resetInitSegment() {
					ni.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1
				}
				getVideoStartPts(e) {
					let t = !1;
					const i = e.reduce((e, i) => {
						const s = i.pts - e;
						return s < -4294967296 ? (t = !0, Wn(e, i.pts)) : s > 0 ? e : i.pts
					}, e[0].pts);
					return t && ni.debug("PTS rollover detected"), i
				}
				remux(e, t, i, s, r, n, a, o) {
					let l, d, h, c, u, f, g = r,
						p = r;
					const m = e.pid > -1,
						v = t.pid > -1,
						y = t.samples.length,
						E = e.samples.length > 0,
						_ = a && y > 0 || y > 1;
					if ((!m || E) && (!v || _) || this.ISGenerated || a) {
						this.ISGenerated || (h = this.generateIS(e, t, r, n));
						const i = this.isVideoContiguous;
						let s, a = -1;
						if (_ && (a = function(e) {
								for (let t = 0; t < e.length; t++)
									if (e[t].key) return t;
								return -1
							}(t.samples), !i && this.config.forceKeyFrameOnDiscontinuity))
							if (f = !0, a > 0) {
								ni.warn(`[mp4-remuxer]: Dropped ${a} out of ${y} video samples due to a missing keyframe`);
								const e = this.getVideoStartPts(t.samples);
								t.samples = t.samples.slice(a), t.dropped += a, s = p += (t.samples[0].pts - e) / t.inputTimeScale
							} else -1 === a && (ni.warn(`[mp4-remuxer]: No keyframe found out of ${y} video samples`), f = !1);
						if (this.ISGenerated) {
							if (E && _) {
								const i = this.getVideoStartPts(t.samples),
									s = (Wn(e.samples[0].pts, i) - i) / t.inputTimeScale;
								g += Math.max(0, s), p += Math.max(0, -s)
							}
							if (E) {
								if (e.samplerate || (ni.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), h = this.generateIS(e, t, r, n)), d = this.remuxAudio(e, g, this.isAudioContiguous, n, v || _ || o === Us.AUDIO ? p : void 0), _) {
									const s = d ? d.endPTS - d.startPTS : 0;
									t.inputTimeScale || (ni.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), h = this.generateIS(e, t, r, n)), l = this.remuxVideo(t, p, i, s)
								}
							} else _ && (l = this.remuxVideo(t, p, i, 0));
							l && (l.firstKeyFrame = a, l.independent = -1 !== a, l.firstKeyFramePTS = s)
						}
					}
					return this.ISGenerated && this._initPTS && this._initDTS && (i.samples.length && (u = Yn(i, r, this._initPTS, this._initDTS)), s.samples.length && (c = zn(s, r, this._initPTS))), {
						audio: d,
						video: l,
						initSegment: h,
						independent: f,
						text: c,
						id3: u
					}
				}
				generateIS(e, t, i, s) {
					const r = e.samples,
						n = t.samples,
						a = this.typeSupported,
						o = {},
						l = this._initPTS;
					let d, h, c, u = !l || s,
						f = "audio/mp4";
					if (u && (d = h = 1 / 0), e.config && r.length) {
						switch (e.timescale = e.samplerate, e.segmentCodec) {
							case "mp3":
								a.mpeg ? (f = "audio/mpeg", e.codec = "") : a.mp3 && (e.codec = "mp3")
						}
						o.audio = {
							id: "audio",
							container: f,
							codec: e.codec,
							initSegment: "mp3" === e.segmentCodec && a.mpeg ? new Uint8Array(0) : Fn.initSegment([e]),
							metadata: {
								channelCount: e.channelCount
							}
						}, u && (c = e.inputTimeScale, l && c === l.timescale ? u = !1 : d = h = r[0].pts - Math.round(c * i))
					}
					if (t.sps && t.pps && n.length && (t.timescale = t.inputTimeScale, o.video = {
							id: "main",
							container: "video/mp4",
							codec: t.codec,
							initSegment: Fn.initSegment([t]),
							metadata: {
								width: t.width,
								height: t.height
							}
						}, u))
						if (c = t.inputTimeScale, l && c === l.timescale) u = !1;
						else {
							const e = this.getVideoStartPts(n),
								t = Math.round(c * i);
							h = Math.min(h, Wn(n[0].dts, e) - t), d = Math.min(d, e - t)
						} if (Object.keys(o).length) return this.ISGenerated = !0, u ? (this._initPTS = {
						baseTime: d,
						timescale: c
					}, this._initDTS = {
						baseTime: h,
						timescale: c
					}) : d = c = void 0, {
						tracks: o,
						initPTS: d,
						timescale: c
					}
				}
				remuxVideo(e, t, i, s) {
					const r = e.inputTimeScale,
						n = e.samples,
						a = [],
						o = n.length,
						l = this._initPTS;
					let d, h, c = this.nextAvcDts,
						u = 8,
						f = this.videoSampleDuration,
						g = Number.POSITIVE_INFINITY,
						p = Number.NEGATIVE_INFINITY,
						m = !1;
					if (!i || null === c) {
						c = t * r - (n[0].pts - Wn(n[0].dts, n[0].pts))
					}
					const v = l.baseTime * r / l.timescale;
					for (let P = 0; P < o; P++) {
						const e = n[P];
						e.pts = Wn(e.pts - v, c), e.dts = Wn(e.dts - v, c), e.dts < n[P > 0 ? P - 1 : P].dts && (m = !0)
					}
					m && n.sort((function(e, t) {
						const i = e.dts - t.dts,
							s = e.pts - t.pts;
						return i || s
					})), d = n[0].dts;
					const y = (h = n[n.length - 1].dts) - d,
						E = y ? Math.round(y / (o - 1)) : f || e.inputTimeScale / 30;
					if (i) {
						const e = d - c,
							t = e > E,
							i = e < -1;
						if ((t || i) && (t ? ni.warn(`AVC: ${Bn(e,!0)} ms (${e}dts) hole between fragments detected, filling it`) : ni.warn(`AVC: ${Bn(-e,!0)} ms (${e}dts) overlapping between fragments detected`), !i || c >= n[0].pts)) {
							d = c;
							const t = n[0].pts - e;
							n[0].dts = d, n[0].pts = t, ni.log(`Video: First PTS/DTS adjusted: ${Bn(t,!0)}/${Bn(d,!0)}, delta: ${Bn(e,!0)} ms`)
						}
					}
					d = Math.max(0, d);
					let _ = 0,
						b = 0;
					for (let P = 0; P < o; P++) {
						const e = n[P],
							t = e.units,
							i = t.length;
						let s = 0;
						for (let r = 0; r < i; r++) s += t[r].data.length;
						b += s, _ += i, e.length = s, e.dts = Math.max(e.dts, d), g = Math.min(e.pts, g), p = Math.max(e.pts, p)
					}
					h = n[o - 1].dts;
					const T = b + 4 * _ + 8;
					let S;
					try {
						S = new Uint8Array(T)
					} catch (C) {
						return void this.observer.emit(Jt.ERROR, Jt.ERROR, {
							type: Zt.MUX_ERROR,
							details: ei.REMUX_ALLOC_ERROR,
							fatal: !1,
							error: C,
							bytes: T,
							reason: `fail allocating video mdat ${T}`
						})
					}
					const A = new DataView(S.buffer);
					A.setUint32(0, T), S.set(Fn.types.mdat, 4);
					let L = !1,
						R = Number.POSITIVE_INFINITY,
						w = Number.POSITIVE_INFINITY,
						k = Number.NEGATIVE_INFINITY,
						I = Number.NEGATIVE_INFINITY;
					for (let P = 0; P < o; P++) {
						const e = n[P],
							t = e.units;
						let i, l = 0;
						for (let s = 0, r = t.length; s < r; s++) {
							const e = t[s],
								i = e.data,
								r = e.data.byteLength;
							A.setUint32(u, r), u += 4, S.set(i, u), u += r, l += 4 + r
						}
						if (P < o - 1) f = n[P + 1].dts - e.dts, i = n[P + 1].pts - e.pts;
						else {
							const t = this.config,
								a = P > 0 ? e.dts - n[P - 1].dts : E;
							if (i = P > 0 ? e.pts - n[P - 1].pts : E, t.stretchShortVideoTrack && null !== this.nextAudioPts) {
								const i = Math.floor(t.maxBufferHole * r),
									n = (s ? g + s * r : this.nextAudioPts) - e.pts;
								n > i ? ((f = n - a) < 0 ? f = a : L = !0, ni.log(`[mp4-remuxer]: It is approximately ${n/90} ms to the next segment; using duration ${f/90} ms for the last video frame.`)) : f = a
							} else f = a
						}
						const d = Math.round(e.pts - e.dts);
						R = Math.min(R, f), k = Math.max(k, f), w = Math.min(w, i), I = Math.max(I, i), a.push(new Xn(e.key, f, l, d))
					}
					if (a.length)
						if (Hn) {
							if (Hn < 70) {
								const e = a[0].flags;
								e.dependsOn = 2, e.isNonSync = 0
							}
						} else if (Kn && I - w < k - R && E / k < .025 && 0 === a[0].cts) {
						ni.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
						let e = d;
						for (let t = 0, i = a.length; t < i; t++) {
							const s = e + a[t].duration,
								r = e + a[t].cts;
							if (t < i - 1) {
								const e = s + a[t + 1].cts;
								a[t].duration = e - r
							} else a[t].duration = t ? a[t - 1].duration : E;
							a[t].cts = 0, e = s
						}
					}
					f = L || !f ? E : f, this.nextAvcDts = c = h + f, this.videoSampleDuration = f, this.isVideoContiguous = !0;
					const D = {
						data1: Fn.moof(e.sequenceNumber++, d, Xt({}, e, {
							samples: a
						})),
						data2: S,
						startPTS: g / r,
						endPTS: (p + f) / r,
						startDTS: d / r,
						endDTS: c / r,
						type: "video",
						hasAudio: !1,
						hasVideo: !0,
						nb: a.length,
						dropped: e.dropped
					};
					return e.samples = [], e.dropped = 0, D
				}
				remuxAudio(e, t, i, s, r) {
					const n = e.inputTimeScale,
						a = n / (e.samplerate ? e.samplerate : n),
						o = "aac" === e.segmentCodec ? Vn : Gn,
						l = o * a,
						d = this._initPTS,
						h = "mp3" === e.segmentCodec && this.typeSupported.mpeg,
						c = [],
						u = void 0 !== r;
					let f = e.samples,
						g = h ? 0 : 8,
						p = this.nextAudioPts || -1;
					const m = t * n,
						v = d.baseTime * n / d.timescale;
					if (this.isAudioContiguous = i = i || f.length && p > 0 && (s && Math.abs(m - p) < 9e3 || Math.abs(Wn(f[0].pts - v, m) - p) < 20 * l), f.forEach((function(e) {
							e.pts = Wn(e.pts - v, m)
						})), !i || p < 0) {
						if (!(f = f.filter(e => e.pts >= 0)).length) return;
						p = 0 === r ? 0 : s && !u ? Math.max(0, m) : f[0].pts
					}
					if ("aac" === e.segmentCodec) {
						const t = this.config.maxAudioFramesDrift;
						for (let i = 0, s = p; i < f.length; i++) {
							const r = f[i],
								a = r.pts,
								o = a - s,
								d = Math.abs(1e3 * o / n);
							if (o <= -t * l && u) 0 === i && (ni.warn(`Audio frame @ ${(a/n).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*o/n)} ms.`), this.nextAudioPts = p = s = a);
							else if (o >= t * l && d < $n && u) {
								let t = Math.round(o / l);
								(s = a - t * l) < 0 && (t--, s += l), 0 === i && (this.nextAudioPts = p = s), ni.warn(`[mp4-remuxer]: Injecting ${t} audio frame @ ${(s/n).toFixed(3)}s due to ${Math.round(1e3*o/n)} ms gap.`);
								for (let n = 0; n < t; n++) {
									const t = Math.max(s, 0);
									let n = xn.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
									n || (ni.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), n = r.unit.subarray()), f.splice(i, 0, {
										unit: n,
										pts: t
									}), s += l, i++
								}
							}
							r.pts = s, s += l
						}
					}
					let y, E = null,
						_ = null,
						b = 0,
						T = f.length;
					for (; T--;) b += f[T].unit.byteLength;
					for (let D = 0, C = f.length; D < C; D++) {
						const t = f[D],
							s = t.unit;
						let r = t.pts;
						if (null !== _) {
							c[D - 1].duration = Math.round((r - _) / a)
						} else {
							if (i && "aac" === e.segmentCodec && (r = p), E = r, !(b > 0)) return;
							b += g;
							try {
								y = new Uint8Array(b)
							} catch (I) {
								return void this.observer.emit(Jt.ERROR, Jt.ERROR, {
									type: Zt.MUX_ERROR,
									details: ei.REMUX_ALLOC_ERROR,
									fatal: !1,
									error: I,
									bytes: b,
									reason: `fail allocating audio mdat ${b}`
								})
							}
							if (!h) {
								new DataView(y.buffer).setUint32(0, b), y.set(Fn.types.mdat, 4)
							}
						}
						y.set(s, g);
						const n = s.byteLength;
						g += n, c.push(new Xn(!0, o, n, 0)), _ = r
					}
					const S = c.length;
					if (!S) return;
					const A = c[c.length - 1];
					this.nextAudioPts = p = _ + a * A.duration;
					const L = h ? new Uint8Array(0) : Fn.moof(e.sequenceNumber++, E / a, Xt({}, e, {
						samples: c
					}));
					e.samples = [];
					const R = E / n,
						w = p / n,
						k = {
							data1: L,
							data2: y,
							startPTS: R,
							endPTS: w,
							startDTS: R,
							endDTS: w,
							type: "audio",
							hasAudio: !0,
							hasVideo: !1,
							nb: S
						};
					return this.isAudioContiguous = !0, k
				}
				remuxEmptyAudio(e, t, i, s) {
					const r = e.inputTimeScale,
						n = r / (e.samplerate ? e.samplerate : r),
						a = this.nextAudioPts,
						o = this._initDTS,
						l = 9e4 * o.baseTime / o.timescale,
						d = (null !== a ? a : s.startDTS * r) + l,
						h = s.endDTS * r + l,
						c = n * Vn,
						u = Math.ceil((h - d) / c),
						f = xn.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
					if (ni.warn("[mp4-remuxer]: remux empty Audio"), !f) return void ni.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
					const g = [];
					for (let p = 0; p < u; p++) {
						const e = d + p * c;
						g.push({
							unit: f,
							pts: e,
							dts: e
						})
					}
					return e.samples = g, this.remuxAudio(e, t, i, !1)
				}
			}

			function Wn(e, t) {
				let i;
				if (null === t) return e;
				for (i = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += i;
				return e
			}

			function Yn(e, t, i, s) {
				const r = e.samples.length;
				if (!r) return;
				const n = e.inputTimeScale;
				for (let o = 0; o < r; o++) {
					const r = e.samples[o];
					r.pts = Wn(r.pts - i.baseTime * n / i.timescale, t * n) / n, r.dts = Wn(r.dts - s.baseTime * n / s.timescale, t * n) / n
				}
				const a = e.samples;
				return e.samples = [], {
					samples: a
				}
			}

			function zn(e, t, i) {
				const s = e.samples.length;
				if (!s) return;
				const r = e.inputTimeScale;
				for (let a = 0; a < s; a++) {
					const s = e.samples[a];
					s.pts = Wn(s.pts - 9e4 * i.baseTime / i.timescale, t * r) / r
				}
				e.samples.sort((e, t) => e.pts - t.pts);
				const n = e.samples;
				return e.samples = [], {
					samples: n
				}
			}
			class Xn {
				constructor(e, t, i, s) {
					this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = t, this.size = i, this.cts = s, this.flags = new Qn(e)
				}
			}
			class Qn {
				constructor(e) {
					this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = e ? 2 : 1, this.isNonSync = e ? 0 : 1
				}
			}

			function Jn(e, t) {
				const i = null == e ? void 0 : e.codec;
				return i && i.length > 4 ? i : "hvc1" === i || "hev1" === i ? "hvc1.1.6.L120.90" : "av01" === i ? "av01.0.04M.08" : "avc1" === i || t === ui.VIDEO ? "avc1.42e01e" : "mp4a.40.5"
			}
			try {
				jn = self.performance.now.bind(self.performance)
			} catch (pd) {
				ni.debug("Unable to use Performance API on this environment"), jn = "undefined" != typeof self && self.Date.now
			}
			const Zn = [{
				demux: class {
					constructor(e, t) {
						this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t
					}
					resetTimeStamp() {}
					resetInitSegment(e, t, i, s) {
						const r = this.videoTrack = tn("video", 1),
							n = this.audioTrack = tn("audio", 1),
							a = this.txtTrack = tn("text", 1);
						if (this.id3Track = tn("id3", 1), this.timeOffset = 0, null == e || !e.byteLength) return;
						const o = ss(e);
						if (o.video) {
							const {
								id: e,
								timescale: t,
								codec: i
							} = o.video;
							r.id = e, r.timescale = a.timescale = t, r.codec = i
						}
						if (o.audio) {
							const {
								id: e,
								timescale: t,
								codec: i
							} = o.audio;
							n.id = e, n.timescale = t, n.codec = i
						}
						a.id = zi.text, r.sampleDuration = 0, r.duration = n.duration = s
					}
					resetContiguity() {
						this.remainderData = null
					}
					static probe(e) {
						return ts(e = e.length > 16384 ? e.subarray(0, 16384) : e, ["moof"]).length > 0
					}
					demux(e, t) {
						this.timeOffset = t;
						let i = e;
						const s = this.videoTrack,
							r = this.txtTrack;
						if (this.config.progressive) {
							this.remainderData && (i = as(this.remainderData, e));
							const t = function(e) {
								const t = {
										valid: null,
										remainder: null
									},
									i = ts(e, ["moof"]);
								if (!i) return t;
								if (i.length < 2) return t.remainder = e, t;
								const s = i[i.length - 1];
								return t.valid = ki(e, 0, s.byteOffset - 8), t.remainder = ki(e, s.byteOffset - 8), t
							}(i);
							this.remainderData = t.remainder, s.samples = t.valid || new Uint8Array
						} else s.samples = i;
						const n = this.extractID3Track(s, t);
						return r.samples = os(t, s), {
							videoTrack: s,
							audioTrack: this.audioTrack,
							id3Track: n,
							textTrack: this.txtTrack
						}
					}
					flush() {
						const e = this.timeOffset,
							t = this.videoTrack,
							i = this.txtTrack;
						t.samples = this.remainderData || new Uint8Array, this.remainderData = null;
						const s = this.extractID3Track(t, this.timeOffset);
						return i.samples = os(e, t), {
							videoTrack: t,
							audioTrack: tn(),
							id3Track: s,
							textTrack: tn()
						}
					}
					extractID3Track(e, t) {
						const i = this.id3Track;
						if (e.samples.length) {
							const s = ts(e.samples, ["emsg"]);
							s && s.forEach(e => {
								const s = function(e) {
									const t = e[0];
									let i = "",
										s = "",
										r = 0,
										n = 0,
										a = 0,
										o = 0,
										l = 0,
										d = 0;
									if (0 === t) {
										for (;
											"\0" !== Xi(e.subarray(d, d + 1));) i += Xi(e.subarray(d, d + 1)), d += 1;
										for (i += Xi(e.subarray(d, d + 1)), d += 1;
											"\0" !== Xi(e.subarray(d, d + 1));) s += Xi(e.subarray(d, d + 1)), d += 1;
										s += Xi(e.subarray(d, d + 1)), d += 1, r = Ji(e, 12), n = Ji(e, 16), o = Ji(e, 20), l = Ji(e, 24), d = 28
									} else if (1 === t) {
										r = Ji(e, d += 4);
										const t = Ji(e, d += 4),
											n = Ji(e, d += 4);
										for (d += 4, a = 2 ** 32 * t + n, Number.isSafeInteger(a) || (a = Number.MAX_SAFE_INTEGER, ni.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = Ji(e, d), l = Ji(e, d += 4), d += 4;
											"\0" !== Xi(e.subarray(d, d + 1));) i += Xi(e.subarray(d, d + 1)), d += 1;
										for (i += Xi(e.subarray(d, d + 1)), d += 1;
											"\0" !== Xi(e.subarray(d, d + 1));) s += Xi(e.subarray(d, d + 1)), d += 1;
										s += Xi(e.subarray(d, d + 1)), d += 1
									}
									return {
										schemeIdUri: i,
										value: s,
										timeScale: r,
										presentationTime: a,
										presentationTimeDelta: n,
										eventDuration: o,
										id: l,
										payload: e.subarray(d, e.byteLength)
									}
								}(e);
								if (fn.test(s.schemeIdUri)) {
									const e = Qt(s.presentationTime) ? s.presentationTime / s.timeScale : t + s.presentationTimeDelta / s.timeScale;
									let r = 4294967295 === s.eventDuration ? Number.POSITIVE_INFINITY : s.eventDuration / s.timeScale;
									r <= .001 && (r = Number.POSITIVE_INFINITY);
									const n = s.payload;
									i.samples.push({
										data: n,
										len: n.byteLength,
										dts: e,
										pts: e,
										type: qs.emsg,
										duration: r
									})
								}
							})
						}
						return i
					}
					demuxSampleAes(e, t, i) {
						return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
					}
					destroy() {}
				},
				remux: class {
					constructor() {
						this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null
					}
					destroy() {}
					resetTimeStamp(e) {
						this.initPTS = e, this.lastEndTime = null
					}
					resetNextTimestamp() {
						this.lastEndTime = null
					}
					resetInitSegment(e, t, i, s) {
						this.audioCodec = t, this.videoCodec = i, this.generateInitSegment(function(e, t) {
							if (!e || !t) return e;
							const i = t.keyId;
							if (i && t.isCommonEncryption) {
								ts(e, ["moov", "trak"]).forEach(e => {
									const t = ts(e, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8);
									let s = ts(t, ["enca"]);
									const r = s.length > 0;
									r || (s = ts(t, ["encv"])), s.forEach(e => {
										ts(r ? e.subarray(28) : e.subarray(78), ["sinf"]).forEach(e => {
											const t = rs(e);
											if (t) {
												const e = t.subarray(8, 24);
												e.some(e => 0 !== e) || (ni.log(`[eme] Patching keyId in 'enc${r?"a":"v"}>sinf>>tenc' box: ${qi.hexDump(e)} -> ${qi.hexDump(i)}`), t.set(i, 8))
											}
										})
									})
								})
							}
							return e
						}(e, s)), this.emitInitSegment = !0
					}
					generateInitSegment(e) {
						let {
							audioCodec: t,
							videoCodec: i
						} = this;
						if (null == e || !e.byteLength) return this.initTracks = void 0, void(this.initData = void 0);
						const s = this.initData = ss(e);
						t || (t = Jn(s.audio, ui.AUDIO)), i || (i = Jn(s.video, ui.VIDEO));
						const r = {};
						s.audio && s.video ? r.audiovideo = {
							container: "video/mp4",
							codec: t + "," + i,
							initSegment: e,
							id: "main"
						} : s.audio ? r.audio = {
							container: "audio/mp4",
							codec: t,
							initSegment: e,
							id: "audio"
						} : s.video ? r.video = {
							container: "video/mp4",
							codec: i,
							initSegment: e,
							id: "main"
						} : ni.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = r
					}
					remux(e, t, i, s, r, n) {
						var a, o;
						let {
							initPTS: l,
							lastEndTime: d
						} = this;
						const h = {
							audio: void 0,
							video: void 0,
							text: s,
							id3: i,
							initSegment: void 0
						};
						Qt(d) || (d = this.lastEndTime = r || 0);
						const c = t.samples;
						if (null == c || !c.length) return h;
						const u = {
							initPTS: void 0,
							timescale: 1
						};
						let f = this.initData;
						if (null != (a = f) && a.length || (this.generateInitSegment(c), f = this.initData), null == (o = f) || !o.length) return ni.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), h;
						this.emitInitSegment && (u.tracks = this.initTracks, this.emitInitSegment = !1);
						const g = function(e, t) {
								let i = 0,
									s = 0,
									r = 0;
								const n = ts(e, ["moof", "traf"]);
								for (let a = 0; a < n.length; a++) {
									const e = n[a],
										o = ts(e, ["tfhd"])[0],
										l = t[Ji(o, 4)];
									if (!l) continue;
									const d = l.default,
										h = Ji(o, 0) | (null == d ? void 0 : d.flags);
									let c = null == d ? void 0 : d.duration;
									8 & h && (c = Ji(o, 2 & h ? 12 : 8));
									const u = l.timescale || 9e4,
										f = ts(e, ["trun"]);
									for (let t = 0; t < f.length; t++) {
										if (!(i = ns(f[t])) && c) {
											i = c * Ji(f[t], 4)
										}
										l.type === ui.VIDEO ? s += i / u : l.type === ui.AUDIO && (r += i / u)
									}
								}
								if (0 === s && 0 === r) {
									let t = 0;
									const i = ts(e, ["sidx"]);
									for (let e = 0; e < i.length; e++) {
										const s = is(i[e]);
										null != s && s.references && (t += s.references.reduce((e, t) => e + t.info.duration || 0, 0))
									}
									return t
								}
								return s || r
							}(c, f),
							p = function(e, t) {
								return ts(t, ["moof", "traf"]).reduce((t, i) => {
									const s = ts(i, ["tfdt"])[0],
										r = s[0],
										n = ts(i, ["tfhd"]).reduce((t, i) => {
											const n = Ji(i, 4),
												a = e[n];
											if (a) {
												let e = Ji(s, 4);
												if (1 === r) {
													if (e === Wi) return ni.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), t;
													e *= Wi + 1, e += Ji(s, 8)
												}
												const i = e / (a.timescale || 9e4);
												if (isFinite(i) && (null === t || i < t)) return i
											}
											return t
										}, null);
									return null !== n && isFinite(n) && (null === t || n < t) ? n : t
								}, null)
							}(f, c),
							m = null === p ? r : p;
						(function(e, t, i, s) {
							if (null === e) return !0;
							const r = Math.max(s, 1),
								n = t - e.baseTime / e.timescale;
							return Math.abs(n - i) > r
						}(l, m, r, g) || u.timescale !== l.timescale && n) && (u.initPTS = m - r, l && 1 === l.timescale && ni.warn(`Adjusting initPTS by ${u.initPTS-l.baseTime}`), this.initPTS = l = {
							baseTime: u.initPTS,
							timescale: 1
						});
						const v = e ? m - l.baseTime / l.timescale : d,
							y = v + g;
						! function(e, t, i) {
							ts(t, ["moof", "traf"]).forEach(t => {
								ts(t, ["tfhd"]).forEach(s => {
									const r = Ji(s, 4),
										n = e[r];
									if (!n) return;
									const a = n.timescale || 9e4;
									ts(t, ["tfdt"]).forEach(e => {
										const t = e[0];
										let s = Ji(e, 4);
										if (0 === t) s -= i * a, es(e, 4, s = Math.max(s, 0));
										else {
											s *= Math.pow(2, 32), s += Ji(e, 8), s -= i * a, s = Math.max(s, 0);
											const t = Math.floor(s / (Wi + 1)),
												r = Math.floor(s % (Wi + 1));
											es(e, 4, t), es(e, 8, r)
										}
									})
								})
							})
						}(f, c, l.baseTime / l.timescale), g > 0 ? this.lastEndTime = y : (ni.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
						const E = !!f.audio,
							_ = !!f.video;
						let b = "";
						E && (b += "audio"), _ && (b += "video");
						const T = {
							data1: c,
							startPTS: v,
							startDTS: v,
							endPTS: y,
							endDTS: y,
							type: b,
							hasAudio: E,
							hasVideo: _,
							nb: 1,
							dropped: 0
						};
						return h.audio = "audio" === T.type ? T : void 0, h.video = "audio" !== T.type ? T : void 0, h.initSegment = u, h.id3 = Yn(i, r, l, l), s.samples.length && (h.text = zn(s, r, l)), h
					}
				}
			}, {
				demux: wn,
				remux: qn
			}, {
				demux: class extends sn {
					constructor(e, t) {
						super(), this.observer = void 0, this.config = void 0, this.observer = e, this.config = t
					}
					resetInitSegment(e, t, i, s) {
						super.resetInitSegment(e, t, i, s), this._audioTrack = {
							container: "audio/adts",
							type: "audio",
							id: 2,
							pid: -1,
							sequenceNumber: 0,
							segmentCodec: "aac",
							samples: [],
							manifestCodec: t,
							duration: s,
							inputTimeScale: 9e4,
							dropped: 0
						}
					}
					static probe(e) {
						if (!e) return !1;
						let t = (Ci(e, 0) || []).length;
						for (let i = e.length; t < i; t++)
							if (dn(e, t)) return ni.log("ADTS sync word found !"), !0;
						return !1
					}
					canParse(e, t) {
						return function(e, t) {
							return function(e, t) {
								return t + 5 < e.length
							}(e, t) && nn(e, t) && on(e, t) <= e.length - t
						}(e, t)
					}
					appendFrame(e, t, i) {
						hn(e, this.observer, t, i, e.manifestCodec);
						const s = un(e, t, i, this.basePTS, this.frameIndex);
						if (s && 0 === s.missing) return s
					}
				},
				remux: qn
			}, {
				demux: class extends sn {
					resetInitSegment(e, t, i, s) {
						super.resetInitSegment(e, t, i, s), this._audioTrack = {
							container: "audio/mpeg",
							type: "audio",
							id: 2,
							pid: -1,
							sequenceNumber: 0,
							segmentCodec: "mp3",
							samples: [],
							manifestCodec: t,
							duration: s,
							inputTimeScale: 9e4,
							dropped: 0
						}
					}
					static probe(e) {
						if (!e) return !1;
						let t = (Ci(e, 0) || []).length;
						for (let i = e.length; t < i; t++)
							if (Sn(e, t)) return ni.log("MPEG Audio sync word found !"), !0;
						return !1
					}
					canParse(e, t) {
						return function(e, t) {
							return bn(e, t) && 4 <= e.length - t
						}(e, t)
					}
					appendFrame(e, t, i) {
						if (null !== this.basePTS) return En(e, t, i, this.basePTS, this.frameIndex)
					}
				},
				remux: qn
			}];
			class ea {
				constructor(e, t, i, s, r) {
					this.async = !1, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e, this.typeSupported = t, this.config = i, this.vendor = s, this.id = r
				}
				configure(e) {
					this.transmuxConfig = e, this.decrypter && this.decrypter.reset()
				}
				push(e, t, i, s) {
					const r = i.transmuxing;
					r.executeStart = jn();
					let n = new Uint8Array(e);
					const {
						currentTransmuxState: a,
						transmuxConfig: o
					} = this;
					s && (this.currentTransmuxState = s);
					const {
						contiguous: l,
						discontinuity: d,
						trackSwitch: h,
						accurateTimeOffset: c,
						timeOffset: u,
						initSegmentChange: f
					} = s || a, {
						audioCodec: g,
						videoCodec: p,
						defaultInitPts: m,
						duration: v,
						initSegmentData: y
					} = o, E = function(e, t) {
						let i = null;
						e.byteLength > 0 && null != t && null != t.key && null !== t.iv && null != t.method && (i = t);
						return i
					}(n, t);
					if (E && "AES-128" === E.method) {
						const e = this.getDecrypter();
						if (!e.isSync()) return this.decryptionPromise = e.webCryptoDecrypt(n, E.key.buffer, E.iv.buffer).then(e => {
							const t = this.push(e, null, i);
							return this.decryptionPromise = null, t
						}), this.decryptionPromise; {
							let t = e.softwareDecrypt(n, E.key.buffer, E.iv.buffer);
							if (i.part > -1 && (t = e.flush()), !t) return r.executeEnd = jn(), ta(i);
							n = new Uint8Array(t)
						}
					}
					const _ = this.needsProbing(d, h);
					if (_) {
						const e = this.configureTransmuxer(n);
						if (e) return ni.warn(`[transmuxer] ${e.message}`), this.observer.emit(Jt.ERROR, Jt.ERROR, {
							type: Zt.MEDIA_ERROR,
							details: ei.FRAG_PARSING_ERROR,
							fatal: !1,
							error: e,
							reason: e.message
						}), r.executeEnd = jn(), ta(i)
					}(d || h || f || _) && this.resetInitSegment(y, g, p, v, t), (d || f || _) && this.resetInitialTimestamp(m), l || this.resetContiguity();
					const b = this.transmux(n, E, u, c, i),
						T = this.currentTransmuxState;
					return T.contiguous = !0, T.discontinuity = !1, T.trackSwitch = !1, r.executeEnd = jn(), b
				}
				flush(e) {
					const t = e.transmuxing;
					t.executeStart = jn();
					const {
						decrypter: i,
						currentTransmuxState: s,
						decryptionPromise: r
					} = this;
					if (r) return r.then(() => this.flush(e));
					const n = [],
						{
							timeOffset: a
						} = s;
					if (i) {
						const t = i.flush();
						t && n.push(this.push(t, null, e))
					}
					const {
						demuxer: o,
						remuxer: l
					} = this;
					if (!o || !l) return t.executeEnd = jn(), [ta(e)];
					const d = o.flush(a);
					return ia(d) ? d.then(t => (this.flushRemux(n, t, e), n)) : (this.flushRemux(n, d, e), n)
				}
				flushRemux(e, t, i) {
					const {
						audioTrack: s,
						videoTrack: r,
						id3Track: n,
						textTrack: a
					} = t, {
						accurateTimeOffset: o,
						timeOffset: l
					} = this.currentTransmuxState;
					ni.log(`[transmuxer.ts]: Flushed fragment ${i.sn}${i.part>-1?" p: "+i.part:""} of level ${i.level}`);
					const d = this.remuxer.remux(s, r, n, a, l, o, !0, this.id);
					e.push({
						remuxResult: d,
						chunkMeta: i
					}), i.transmuxing.executeEnd = jn()
				}
				resetInitialTimestamp(e) {
					const {
						demuxer: t,
						remuxer: i
					} = this;
					t && i && (t.resetTimeStamp(e), i.resetTimeStamp(e))
				}
				resetContiguity() {
					const {
						demuxer: e,
						remuxer: t
					} = this;
					e && t && (e.resetContiguity(), t.resetNextTimestamp())
				}
				resetInitSegment(e, t, i, s, r) {
					const {
						demuxer: n,
						remuxer: a
					} = this;
					n && a && (n.resetInitSegment(e, t, i, s), a.resetInitSegment(e, t, i, r))
				}
				destroy() {
					this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
				}
				transmux(e, t, i, s, r) {
					let n;
					return n = t && "SAMPLE-AES" === t.method ? this.transmuxSampleAes(e, t, i, s, r) : this.transmuxUnencrypted(e, i, s, r)
				}
				transmuxUnencrypted(e, t, i, s) {
					const {
						audioTrack: r,
						videoTrack: n,
						id3Track: a,
						textTrack: o
					} = this.demuxer.demux(e, t, !1, !this.config.progressive);
					return {
						remuxResult: this.remuxer.remux(r, n, a, o, t, i, !1, this.id),
						chunkMeta: s
					}
				}
				transmuxSampleAes(e, t, i, s, r) {
					return this.demuxer.demuxSampleAes(e, t, i).then(e => {
						return {
							remuxResult: this.remuxer.remux(e.audioTrack, e.videoTrack, e.id3Track, e.textTrack, i, s, !1, this.id),
							chunkMeta: r
						}
					})
				}
				configureTransmuxer(e) {
					const {
						config: t,
						observer: i,
						typeSupported: s,
						vendor: r
					} = this;
					let n;
					for (let h = 0, c = Zn.length; h < c; h++)
						if (Zn[h].demux.probe(e)) {
							n = Zn[h];
							break
						} if (!n) return new Error("Failed to find demuxer by probing fragment data");
					const a = this.demuxer,
						o = this.remuxer,
						l = n.remux,
						d = n.demux;
					o && o instanceof l || (this.remuxer = new l(i, t, s, r)), a && a instanceof d || (this.demuxer = new d(i, t, s), this.probe = d.probe)
				}
				needsProbing(e, t) {
					return !this.demuxer || !this.remuxer || e || t
				}
				getDecrypter() {
					let e = this.decrypter;
					return e || (e = this.decrypter = new Xr(this.config)), e
				}
			}
			const ta = e => ({
				remuxResult: {},
				chunkMeta: e
			});

			function ia(e) {
				return "then" in e && e.then instanceof Function
			}
			class sa {
				constructor(e, t, i, s, r) {
					this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = i, this.duration = s, this.defaultInitPts = r || null
				}
			}
			class ra {
				constructor(e, t, i, s, r, n) {
					this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = i, this.trackSwitch = s, this.timeOffset = r, this.initSegmentChange = n
				}
			}
			var na = {
				exports: {}
			};
			! function(e) {
				var t = Object.prototype.hasOwnProperty,
					i = "~";

				function s() {}

				function r(e, t, i) {
					this.fn = e, this.context = t, this.once = i || !1
				}

				function n(e, t, s, n, a) {
					if ("function" != typeof s) throw new TypeError("The listener must be a function");
					var o = new r(s, n || e, a),
						l = i ? i + t : t;
					return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], o] : e._events[l].push(o) : (e._events[l] = o, e._eventsCount++), e
				}

				function a(e, t) {
					0 == --e._eventsCount ? e._events = new s : delete e._events[t]
				}

				function o() {
					this._events = new s, this._eventsCount = 0
				}
				Object.create && (s.prototype = Object.create(null), (new s).__proto__ || (i = !1)), o.prototype.eventNames = function() {
					var e, s, r = [];
					if (0 === this._eventsCount) return r;
					for (s in e = this._events) t.call(e, s) && r.push(i ? s.slice(1) : s);
					return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
				}, o.prototype.listeners = function(e) {
					var t = i ? i + e : e,
						s = this._events[t];
					if (!s) return [];
					if (s.fn) return [s.fn];
					for (var r = 0, n = s.length, a = new Array(n); r < n; r++) a[r] = s[r].fn;
					return a
				}, o.prototype.listenerCount = function(e) {
					var t = i ? i + e : e,
						s = this._events[t];
					return s ? s.fn ? 1 : s.length : 0
				}, o.prototype.emit = function(e, t, s, r, n, a) {
					var o = i ? i + e : e;
					if (!this._events[o]) return !1;
					var l, d, h = this._events[o],
						c = arguments.length;
					if (h.fn) {
						switch (h.once && this.removeListener(e, h.fn, void 0, !0), c) {
							case 1:
								return h.fn.call(h.context), !0;
							case 2:
								return h.fn.call(h.context, t), !0;
							case 3:
								return h.fn.call(h.context, t, s), !0;
							case 4:
								return h.fn.call(h.context, t, s, r), !0;
							case 5:
								return h.fn.call(h.context, t, s, r, n), !0;
							case 6:
								return h.fn.call(h.context, t, s, r, n, a), !0
						}
						for (d = 1, l = new Array(c - 1); d < c; d++) l[d - 1] = arguments[d];
						h.fn.apply(h.context, l)
					} else {
						var u, f = h.length;
						for (d = 0; d < f; d++) switch (h[d].once && this.removeListener(e, h[d].fn, void 0, !0), c) {
							case 1:
								h[d].fn.call(h[d].context);
								break;
							case 2:
								h[d].fn.call(h[d].context, t);
								break;
							case 3:
								h[d].fn.call(h[d].context, t, s);
								break;
							case 4:
								h[d].fn.call(h[d].context, t, s, r);
								break;
							default:
								if (!l)
									for (u = 1, l = new Array(c - 1); u < c; u++) l[u - 1] = arguments[u];
								h[d].fn.apply(h[d].context, l)
						}
					}
					return !0
				}, o.prototype.on = function(e, t, i) {
					return n(this, e, t, i, !1)
				}, o.prototype.once = function(e, t, i) {
					return n(this, e, t, i, !0)
				}, o.prototype.removeListener = function(e, t, s, r) {
					var n = i ? i + e : e;
					if (!this._events[n]) return this;
					if (!t) return a(this, n), this;
					var o = this._events[n];
					if (o.fn) o.fn !== t || r && !o.once || s && o.context !== s || a(this, n);
					else {
						for (var l = 0, d = [], h = o.length; l < h; l++)(o[l].fn !== t || r && !o[l].once || s && o[l].context !== s) && d.push(o[l]);
						d.length ? this._events[n] = 1 === d.length ? d[0] : d : a(this, n)
					}
					return this
				}, o.prototype.removeAllListeners = function(e) {
					var t;
					return e ? (t = i ? i + e : e, this._events[t] && a(this, t)) : (this._events = new s, this._eventsCount = 0), this
				}, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = i, o.EventEmitter = o, e.exports = o
			}(na);
			var aa = Ht(na.exports);
			const oa = _s() || {
				isTypeSupported: () => !1
			};
			class la {
				constructor(e, t, i, s) {
					this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
					const r = e.config;
					this.hls = e, this.id = t, this.useWorker = !!r.enableWorker, this.onTransmuxComplete = i, this.onFlush = s;
					const n = (e, t) => {
						(t = t || {}).frag = this.frag, t.id = this.id, e === Jt.ERROR && (this.error = t.error), this.hls.trigger(e, t)
					};
					this.observer = new aa, this.observer.on(Jt.FRAG_DECRYPTED, n), this.observer.on(Jt.ERROR, n);
					const a = {
							mp4: oa.isTypeSupported("video/mp4"),
							mpeg: oa.isTypeSupported("audio/mpeg"),
							mp3: oa.isTypeSupported('audio/mp4; codecs="mp3"')
						},
						o = navigator.vendor;
					if (this.useWorker && "undefined" != typeof Worker) {
						if (r.workerPath || "function" == typeof __HLS_WORKER_BUNDLE__) {
							try {
								r.workerPath ? (ni.log(`loading Web Worker ${r.workerPath} for "${t}"`), this.workerContext = function(e) {
									const t = new self.URL(e, self.location.href).href;
									return {
										worker: new self.Worker(t),
										scriptURL: t
									}
								}(r.workerPath)) : (ni.log(`injecting Web Worker for "${t}"`), this.workerContext = function() {
									const e = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
											type: "text/javascript"
										}),
										t = self.URL.createObjectURL(e);
									return {
										worker: new self.Worker(t),
										objectURL: t
									}
								}()), this.onwmsg = e => this.onWorkerMessage(e);
								const {
									worker: e
								} = this.workerContext;
								e.addEventListener("message", this.onwmsg), e.onerror = e => {
									const i = new Error(`${e.message}  (${e.filename}:${e.lineno})`);
									r.enableWorker = !1, ni.warn(`Error in "${t}" Web Worker, fallback to inline`), this.hls.trigger(Jt.ERROR, {
										type: Zt.OTHER_ERROR,
										details: ei.INTERNAL_EXCEPTION,
										fatal: !1,
										event: "demuxerWorker",
										error: i
									})
								}, e.postMessage({
									cmd: "init",
									typeSupported: a,
									vendor: o,
									id: t,
									config: JSON.stringify(r)
								})
							} catch (pd) {
								ni.warn(`Error setting up "${t}" Web Worker, fallback to inline`, pd), this.resetWorker(), this.error = null, this.transmuxer = new ea(this.observer, a, r, o, t)
							}
							return
						}
					}
					this.transmuxer = new ea(this.observer, a, r, o, t)
				}
				resetWorker() {
					if (this.workerContext) {
						const {
							worker: e,
							objectURL: t
						} = this.workerContext;
						t && self.URL.revokeObjectURL(t), e.removeEventListener("message", this.onwmsg), e.onerror = null, e.terminate(), this.workerContext = null
					}
				}
				destroy() {
					if (this.workerContext) this.resetWorker(), this.onwmsg = void 0;
					else {
						const e = this.transmuxer;
						e && (e.destroy(), this.transmuxer = null)
					}
					const e = this.observer;
					e && e.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null
				}
				push(e, t, i, s, r, n, a, o, l, d) {
					var h, c;
					l.transmuxing.start = self.performance.now();
					const {
						transmuxer: u
					} = this, f = n ? n.start : r.start, g = r.decryptdata, p = this.frag, m = !(p && r.cc === p.cc), v = !(p && l.level === p.level), y = p ? l.sn - p.sn : -1, E = this.part ? l.part - this.part.index : -1, _ = 0 === y && l.id > 1 && l.id === (null == p ? void 0 : p.stats.chunkCount), b = !v && (1 === y || 0 === y && (1 === E || _ && E <= 0)), T = self.performance.now();
					(v || y || 0 === r.stats.parsing.start) && (r.stats.parsing.start = T), !n || !E && b || (n.stats.parsing.start = T);
					const S = !(p && (null == (h = r.initSegment) ? void 0 : h.url) === (null == (c = p.initSegment) ? void 0 : c.url)),
						A = new ra(m, b, o, v, f, S);
					if (!b || m || S) {
						ni.log(`[transmuxer-interface, ${r.type}]: Starting new transmux session for sn: ${l.sn} p: ${l.part} level: ${l.level} id: ${l.id}\n        discontinuity: ${m}\n        trackSwitch: ${v}\n        contiguous: ${b}\n        accurateTimeOffset: ${o}\n        timeOffset: ${f}\n        initSegmentChange: ${S}`);
						const e = new sa(i, s, t, a, d);
						this.configureTransmuxer(e)
					}
					if (this.frag = r, this.part = n, this.workerContext) this.workerContext.worker.postMessage({
						cmd: "demux",
						data: e,
						decryptdata: g,
						chunkMeta: l,
						state: A
					}, e instanceof ArrayBuffer ? [e] : []);
					else if (u) {
						const t = u.push(e, g, l, A);
						ia(t) ? (u.async = !0, t.then(e => {
							this.handleTransmuxComplete(e)
						}).catch(e => {
							this.transmuxerError(e, l, "transmuxer-interface push error")
						})) : (u.async = !1, this.handleTransmuxComplete(t))
					}
				}
				flush(e) {
					e.transmuxing.start = self.performance.now();
					const {
						transmuxer: t
					} = this;
					if (this.workerContext) this.workerContext.worker.postMessage({
						cmd: "flush",
						chunkMeta: e
					});
					else if (t) {
						let i = t.flush(e);
						ia(i) || t.async ? (ia(i) || (i = Promise.resolve(i)), i.then(t => {
							this.handleFlushResult(t, e)
						}).catch(t => {
							this.transmuxerError(t, e, "transmuxer-interface flush error")
						})) : this.handleFlushResult(i, e)
					}
				}
				transmuxerError(e, t, i) {
					this.hls && (this.error = e, this.hls.trigger(Jt.ERROR, {
						type: Zt.MEDIA_ERROR,
						details: ei.FRAG_PARSING_ERROR,
						chunkMeta: t,
						fatal: !1,
						error: e,
						err: e,
						reason: i
					}))
				}
				handleFlushResult(e, t) {
					e.forEach(e => {
						this.handleTransmuxComplete(e)
					}), this.onFlush(t)
				}
				onWorkerMessage(e) {
					const t = e.data,
						i = this.hls;
					switch (t.event) {
						case "init": {
							var s;
							const e = null == (s = this.workerContext) ? void 0 : s.objectURL;
							e && self.URL.revokeObjectURL(e);
							break
						}
						case "transmuxComplete":
							this.handleTransmuxComplete(t.data);
							break;
						case "flush":
							this.onFlush(t.data);
							break;
						case "workerLog":
							ni[t.data.logType] && ni[t.data.logType](t.data.message);
							break;
						default:
							t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, i.trigger(t.event, t.data)
					}
				}
				configureTransmuxer(e) {
					const {
						transmuxer: t
					} = this;
					this.workerContext ? this.workerContext.worker.postMessage({
						cmd: "configure",
						config: e
					}) : t && t.configure(e)
				}
				handleTransmuxComplete(e) {
					e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e)
				}
			}
			const da = 250,
				ha = 2,
				ca = .1,
				ua = .05;
			class fa {
				constructor(e, t, i, s) {
					this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = e, this.media = t, this.fragmentTracker = i, this.hls = s
				}
				destroy() {
					this.media = null, this.hls = this.fragmentTracker = null
				}
				poll(e, t) {
					const {
						config: i,
						media: s,
						stalled: r
					} = this;
					if (null === s) return;
					const {
						currentTime: n,
						seeking: a
					} = s, o = this.seeking && !a, l = !this.seeking && a;
					if (this.seeking = a, n !== e) {
						if (this.moved = !0, null !== r) {
							if (this.stallReported) {
								const e = self.performance.now() - r;
								ni.warn(`playback not stuck anymore @${n}, after ${Math.round(e)}ms`), this.stallReported = !1
							}
							this.stalled = null, this.nudgeRetry = 0
						}
						return
					}
					if (l || o) return void(this.stalled = null);
					if (s.paused && !a || s.ended || 0 === s.playbackRate || !Br.getBuffered(s).length) return;
					const d = Br.bufferInfo(s, n, 0),
						h = d.len > 0,
						c = d.nextStart || 0;
					if (!h && !c) return;
					if (a) {
						const e = d.len > ha,
							i = !c || t && t.start <= n || c - n > ha && !this.fragmentTracker.getPartialFragment(n);
						if (e || i) return;
						this.moved = !1
					}
					if (!this.moved && null !== this.stalled) {
						var u;
						const e = Math.max(c, d.start || 0) - n,
							t = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
							i = (null == t ? void 0 : null == (u = t.details) ? void 0 : u.live) ? 2 * t.details.targetduration : ha,
							s = this.fragmentTracker.getPartialFragment(n);
						if (e > 0 && (e <= i || s)) return void this._trySkipBufferHole(s)
					}
					const f = self.performance.now();
					if (null === r) return void(this.stalled = f);
					const g = f - r;
					if (!a && g >= da && (this._reportStall(d), !this.media)) return;
					const p = Br.bufferInfo(s, n, i.maxBufferHole);
					this._tryFixBufferStall(p, g)
				}
				_tryFixBufferStall(e, t) {
					const {
						config: i,
						fragmentTracker: s,
						media: r
					} = this;
					if (null === r) return;
					const n = r.currentTime,
						a = s.getPartialFragment(n);
					if (a) {
						if (this._trySkipBufferHole(a) || !this.media) return
					}(e.len > i.maxBufferHole || e.nextStart && e.nextStart - n < i.maxBufferHole) && t > 1e3 * i.highBufferWatchdogPeriod && (ni.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
				}
				_reportStall(e) {
					const {
						hls: t,
						media: i,
						stallReported: s
					} = this;
					if (!s && i) {
						this.stallReported = !0;
						const s = new Error(`Playback stalling at @${i.currentTime} due to low buffer (${JSON.stringify(e)})`);
						ni.warn(s.message), t.trigger(Jt.ERROR, {
							type: Zt.MEDIA_ERROR,
							details: ei.BUFFER_STALLED_ERROR,
							fatal: !1,
							error: s,
							buffer: e.len
						})
					}
				}
				_trySkipBufferHole(e) {
					const {
						config: t,
						hls: i,
						media: s
					} = this;
					if (null === s) return 0;
					const r = s.currentTime,
						n = Br.bufferInfo(s, r, 0),
						a = r < n.start ? n.start : n.nextStart;
					if (a) {
						const o = n.len <= t.maxBufferHole,
							l = n.len > 0 && n.len < 1 && s.readyState < 3,
							d = a - r;
						if (d > 0 && (o || l)) {
							if (d > t.maxBufferHole) {
								const {
									fragmentTracker: t
								} = this;
								let i = !1;
								if (0 === r) {
									const e = t.getAppendedFrag(0, Us.MAIN);
									e && a < e.end && (i = !0)
								}
								if (!i) {
									const i = e || t.getAppendedFrag(r, Us.MAIN);
									if (i) {
										let e = !1,
											s = i.end;
										for (; s < a;) {
											const i = t.getPartialFragment(s);
											if (!i) {
												e = !0;
												break
											}
											s += i.duration
										}
										if (e) return 0
									}
								}
							}
							const n = Math.max(a + ua, r + ca);
							if (ni.warn(`skipping hole, adjusting currentTime from ${r} to ${n}`), this.moved = !0, this.stalled = null, s.currentTime = n, e && !e.gap) {
								const t = new Error(`fragment loaded with buffer holes, seeking from ${r} to ${n}`);
								i.trigger(Jt.ERROR, {
									type: Zt.MEDIA_ERROR,
									details: ei.BUFFER_SEEK_OVER_HOLE,
									fatal: !1,
									error: t,
									reason: t.message,
									frag: e
								})
							}
							return n
						}
					}
					return 0
				}
				_tryNudgeBuffer() {
					const {
						config: e,
						hls: t,
						media: i,
						nudgeRetry: s
					} = this;
					if (null === i) return;
					const r = i.currentTime;
					if (this.nudgeRetry++, s < e.nudgeMaxRetry) {
						const n = r + (s + 1) * e.nudgeOffset,
							a = new Error(`Nudging 'currentTime' from ${r} to ${n}`);
						ni.warn(a.message), i.currentTime = n, t.trigger(Jt.ERROR, {
							type: Zt.MEDIA_ERROR,
							details: ei.BUFFER_NUDGE_ON_STALL,
							error: a,
							fatal: !1
						})
					} else {
						const i = new Error(`Playhead still not moving while enough data buffered @${r} after ${e.nudgeMaxRetry} nudges`);
						ni.error(i.message), t.trigger(Jt.ERROR, {
							type: Zt.MEDIA_ERROR,
							details: ei.BUFFER_STALLED_ERROR,
							error: i,
							fatal: !0
						})
					}
				}
			}
			const ga = 100;
			class pa extends Zr {
				constructor(e, t, i) {
					super(e, t, i, "[stream-controller]", Us.MAIN), this.audioCodecSwap = !1, this.gapController = null, this.level = -1, this._forceStartLoad = !1, this.altAudio = !1, this.audioOnly = !1, this.fragPlaying = null, this.onvplaying = null, this.onvseeked = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this._registerListeners()
				}
				_registerListeners() {
					const {
						hls: e
					} = this;
					e.on(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.on(Jt.MANIFEST_PARSED, this.onManifestParsed, this), e.on(Jt.LEVEL_LOADING, this.onLevelLoading, this), e.on(Jt.LEVEL_LOADED, this.onLevelLoaded, this), e.on(Jt.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(Jt.ERROR, this.onError, this), e.on(Jt.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(Jt.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(Jt.BUFFER_CREATED, this.onBufferCreated, this), e.on(Jt.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(Jt.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(Jt.FRAG_BUFFERED, this.onFragBuffered, this)
				}
				_unregisterListeners() {
					const {
						hls: e
					} = this;
					e.off(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.off(Jt.MANIFEST_PARSED, this.onManifestParsed, this), e.off(Jt.LEVEL_LOADED, this.onLevelLoaded, this), e.off(Jt.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(Jt.ERROR, this.onError, this), e.off(Jt.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(Jt.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(Jt.BUFFER_CREATED, this.onBufferCreated, this), e.off(Jt.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(Jt.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(Jt.FRAG_BUFFERED, this.onFragBuffered, this)
				}
				onHandlerDestroying() {
					this._unregisterListeners(), this.onMediaDetaching()
				}
				startLoad(e) {
					if (this.levels) {
						const {
							lastCurrentTime: t,
							hls: i
						} = this;
						if (this.stopLoad(), this.setInterval(ga), this.level = -1, !this.startFragRequested) {
							let e = i.startLevel; - 1 === e && (i.config.testBandwidth && this.levels.length > 1 ? (e = 0, this.bitrateTest = !0) : e = i.nextAutoLevel), this.level = i.nextLoadLevel = e, this.loadedmetadata = !1
						}
						t > 0 && -1 === e && (this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t), this.state = Jr.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
					} else this._forceStartLoad = !0, this.state = Jr.STOPPED
				}
				stopLoad() {
					this._forceStartLoad = !1, super.stopLoad()
				}
				doTick() {
					switch (this.state) {
						case Jr.WAITING_LEVEL: {
							var e;
							const {
								levels: t,
								level: i
							} = this, s = null == t ? void 0 : null == (e = t[i]) ? void 0 : e.details;
							if (s && (!s.live || this.levelLastLoaded === this.level)) {
								if (this.waitForCdnTuneIn(s)) break;
								this.state = Jr.IDLE;
								break
							}
							if (this.hls.nextLoadLevel !== this.level) {
								this.state = Jr.IDLE;
								break
							}
							break
						}
						case Jr.FRAG_LOADING_WAITING_RETRY: {
							var t;
							const e = self.performance.now(),
								i = this.retryDate;
							(!i || e >= i || null != (t = this.media) && t.seeking) && (this.resetStartWhenNotLoaded(this.level), this.state = Jr.IDLE)
						}
					}
					this.state === Jr.IDLE && this.doTickIdle(), this.onTickEnd()
				}
				onTickEnd() {
					super.onTickEnd(), this.checkBuffer(), this.checkFragmentChanged()
				}
				doTickIdle() {
					const {
						hls: e,
						levelLastLoaded: t,
						levels: i,
						media: s
					} = this, {
						config: r,
						nextLoadLevel: n
					} = e;
					if (null === t || !s && (this.startFragRequested || !r.startFragPrefetch)) return;
					if (this.altAudio && this.audioOnly) return;
					if (null == i || !i[n]) return;
					const a = i[n],
						o = this.getMainFwdBufferInfo();
					if (null === o) return;
					const l = this.getLevelDetails();
					if (l && this._streamEnded(o, l)) {
						const e = {};
						return this.altAudio && (e.type = "video"), this.hls.trigger(Jt.BUFFER_EOS, e), void(this.state = Jr.ENDED)
					}
					e.loadLevel !== n && -1 === e.manualLevel && this.log(`Adapting to level ${n} from level ${this.level}`), this.level = e.nextLoadLevel = n;
					const d = a.details;
					if (!d || this.state === Jr.WAITING_LEVEL || d.live && this.levelLastLoaded !== n) return this.level = n, void(this.state = Jr.WAITING_LEVEL);
					const h = o.len,
						c = this.getMaxBufferLength(a.maxBitrate);
					if (h >= c) return;
					this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null);
					const u = this.backtrackFragment ? this.backtrackFragment.start : o.end;
					let f = this.getNextFragment(u, d);
					if (this.couldBacktrack && !this.fragPrevious && f && "initSegment" !== f.sn && this.fragmentTracker.getState(f) !== kr.OK) {
						var g;
						const e = (null != (g = this.backtrackFragment) ? g : f).sn - d.startSN,
							t = d.fragments[e - 1];
						t && f.cc === t.cc && (f = t, this.fragmentTracker.removeFragment(t))
					} else this.backtrackFragment && o.len && (this.backtrackFragment = null);
					if (f && this.isLoopLoading(f, u)) {
						if (!f.gap) {
							const e = this.audioOnly && !this.altAudio ? ui.AUDIO : ui.VIDEO,
								t = (e === ui.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
							t && this.afterBufferFlushed(t, e, Us.MAIN)
						}
						f = this.getNextFragmentLoopLoading(f, d, o, Us.MAIN, c)
					}
					f && (!f.initSegment || f.initSegment.data || this.bitrateTest || (f = f.initSegment), this.loadFragment(f, a, u))
				}
				loadFragment(e, t, i) {
					const s = this.fragmentTracker.getState(e);
					this.fragCurrent = e, s === kr.NOT_LOADED || s === kr.PARTIAL ? "initSegment" === e.sn ? this._loadInitSegment(e, t) : this.bitrateTest ? (this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e, t)) : (this.startFragRequested = !0, super.loadFragment(e, t, i)) : this.clearTrackerIfNeeded(e)
				}
				getBufferedFrag(e) {
					return this.fragmentTracker.getBufferedFrag(e, Us.MAIN)
				}
				followingBufferedFrag(e) {
					return e ? this.getBufferedFrag(e.end + .5) : null
				}
				immediateLevelSwitch() {
					this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
				}
				nextLevelSwitch() {
					const {
						levels: e,
						media: t
					} = this;
					if (null != t && t.readyState) {
						let i;
						const s = this.getAppendedFrag(t.currentTime);
						s && s.start > 1 && this.flushMainBuffer(0, s.start - 1);
						const r = this.getLevelDetails();
						if (null != r && r.live) {
							const e = this.getMainFwdBufferInfo();
							if (!e || e.len < 2 * r.targetduration) return
						}
						if (!t.paused && e) {
							const t = e[this.hls.nextLoadLevel],
								s = this.fragLastKbps;
							i = s && this.fragCurrent ? this.fragCurrent.duration * t.maxBitrate / (1e3 * s) + 1 : 0
						} else i = 0;
						const n = this.getBufferedFrag(t.currentTime + i);
						if (n) {
							const e = this.followingBufferedFrag(n);
							if (e) {
								this.abortCurrentFrag();
								const t = e.maxStartPTS ? e.maxStartPTS : e.start,
									i = e.duration,
									s = Math.max(n.end, t + Math.min(Math.max(i - this.config.maxFragLookUpTolerance, .5 * i), .75 * i));
								this.flushMainBuffer(s, Number.POSITIVE_INFINITY)
							}
						}
					}
				}
				abortCurrentFrag() {
					const e = this.fragCurrent;
					switch (this.fragCurrent = null, this.backtrackFragment = null, e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.state) {
						case Jr.KEY_LOADING:
						case Jr.FRAG_LOADING:
						case Jr.FRAG_LOADING_WAITING_RETRY:
						case Jr.PARSING:
						case Jr.PARSED:
							this.state = Jr.IDLE
					}
					this.nextLoadPosition = this.getLoadPosition()
				}
				flushMainBuffer(e, t) {
					super.flushMainBuffer(e, t, this.altAudio ? "video" : null)
				}
				onMediaAttached(e, t) {
					super.onMediaAttached(e, t);
					const i = t.media;
					this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), i.addEventListener("playing", this.onvplaying), i.addEventListener("seeked", this.onvseeked), this.gapController = new fa(this.config, i, this.fragmentTracker, this.hls)
				}
				onMediaDetaching() {
					const {
						media: e
					} = this;
					e && this.onvplaying && this.onvseeked && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), super.onMediaDetaching()
				}
				onMediaPlaying() {
					this.tick()
				}
				onMediaSeeked() {
					const e = this.media,
						t = e ? e.currentTime : null;
					Qt(t) && this.log(`Media seeked to ${t.toFixed(3)}`);
					const i = this.getMainFwdBufferInfo();
					null !== i && 0 !== i.len ? this.tick() : this.warn(`Main forward buffer length on "seeked" event ${i?i.len:"empty"})`)
				}
				onManifestLoading() {
					this.log("Trigger BUFFER_RESET"), this.hls.trigger(Jt.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = 0, this.levels = this.fragPlaying = this.backtrackFragment = null, this.altAudio = this.audioOnly = !1
				}
				onManifestParsed(e, t) {
					let i, s = !1,
						r = !1;
					t.levels.forEach(e => {
						(i = e.audioCodec) && (-1 !== i.indexOf("mp4a.40.2") && (s = !0), -1 !== i.indexOf("mp4a.40.5") && (r = !0))
					}), this.audioCodecSwitch = s && r && ! function() {
						var e;
						const t = en();
						return "function" == typeof(null == t ? void 0 : null == (e = t.prototype) ? void 0 : e.changeType)
					}(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1
				}
				onLevelLoading(e, t) {
					const {
						levels: i
					} = this;
					if (!i || this.state !== Jr.IDLE) return;
					const s = i[t.level];
					(!s.details || s.details.live && this.levelLastLoaded !== t.level || this.waitForCdnTuneIn(s.details)) && (this.state = Jr.WAITING_LEVEL)
				}
				onLevelLoaded(e, t) {
					var i;
					const {
						levels: s
					} = this, r = t.level, n = t.details, a = n.totalduration;
					if (!s) return void this.warn(`Levels were reset while loading level ${r}`);
					this.log(`Level ${r} loaded [${n.startSN},${n.endSN}]${n.lastPartSn?`[part-${n.lastPartSn}-${n.lastPartIndex}]`:""}, cc [${n.startCC}, ${n.endCC}] duration:${a}`);
					const o = s[r],
						l = this.fragCurrent;
					!l || this.state !== Jr.FRAG_LOADING && this.state !== Jr.FRAG_LOADING_WAITING_RETRY || l.level === t.level && l.urlId === o.urlId || !l.loader || this.abortCurrentFrag();
					let d = 0;
					if (n.live || null != (i = o.details) && i.live) {
						if (n.fragments[0] || (n.deltaUpdateFailed = !0), n.deltaUpdateFailed) return;
						d = this.alignPlaylists(n, o.details)
					}
					if (o.details = n, this.levelLastLoaded = r, this.hls.trigger(Jt.LEVEL_UPDATED, {
							details: n,
							level: r
						}), this.state === Jr.WAITING_LEVEL) {
						if (this.waitForCdnTuneIn(n)) return;
						this.state = Jr.IDLE
					}
					this.startFragRequested ? n.live && this.synchronizeToLiveEdge(n) : this.setStartPosition(n, d), this.tick()
				}
				_handleFragmentLoadProgress(e) {
					var t;
					const {
						frag: i,
						part: s,
						payload: r
					} = e, {
						levels: n
					} = this;
					if (!n) return void this.warn(`Levels were reset while fragment load was in progress. Fragment ${i.sn} of level ${i.level} will not be buffered`);
					const a = n[i.level],
						o = a.details;
					if (!o) return this.warn(`Dropping fragment ${i.sn} of level ${i.level} after level details were reset`), void this.fragmentTracker.removeFragment(i);
					const l = a.videoCodec,
						d = o.PTSKnown || !o.live,
						h = null == (t = i.initSegment) ? void 0 : t.data,
						c = this._getAudioCodec(a),
						u = this.transmuxer = this.transmuxer || new la(this.hls, Us.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
						f = s ? s.index : -1,
						g = -1 !== f,
						p = new $r(i.level, i.sn, i.stats.chunkCount, r.byteLength, f, g),
						m = this.initPTS[i.cc];
					u.push(r, h, c, l, i, s, o.totalduration, d, p, m)
				}
				onAudioTrackSwitching(e, t) {
					const i = this.altAudio;
					if (!!!t.url) {
						if (this.mediaBuffer !== this.media) {
							this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
							const e = this.fragCurrent;
							e && (this.log("Switching to main audio track, cancel main fragment load"), e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.resetLoadingState()
						} else this.audioOnly && this.resetTransmuxer();
						const e = this.hls;
						i && (e.trigger(Jt.BUFFER_FLUSHING, {
							startOffset: 0,
							endOffset: Number.POSITIVE_INFINITY,
							type: null
						}), this.fragmentTracker.removeAllFragments()), e.trigger(Jt.AUDIO_TRACK_SWITCHED, t)
					}
				}
				onAudioTrackSwitched(e, t) {
					const i = t.id,
						s = !!this.hls.audioTracks[i].url;
					if (s) {
						const e = this.videoBuffer;
						e && this.mediaBuffer !== e && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = e)
					}
					this.altAudio = s, this.tick()
				}
				onBufferCreated(e, t) {
					const i = t.tracks;
					let s, r, n = !1;
					for (const a in i) {
						const e = i[a];
						if ("main" === e.id) {
							if (r = a, s = e, "video" === a) {
								const e = i[a];
								e && (this.videoBuffer = e.buffer)
							}
						} else n = !0
					}
					n && s ? (this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`), this.mediaBuffer = s.buffer) : this.mediaBuffer = this.media
				}
				onFragBuffered(e, t) {
					const {
						frag: i,
						part: s
					} = t;
					if (i && i.type !== Us.MAIN) return;
					if (this.fragContextChanged(i)) return this.warn(`Fragment ${i.sn}${s?" p: "+s.index:""} of level ${i.level} finished buffering, but was aborted. state: ${this.state}`), void(this.state === Jr.PARSED && (this.state = Jr.IDLE));
					const r = s ? s.stats : i.stats;
					this.fragLastKbps = Math.round(8 * r.total / (r.buffering.end - r.loading.first)), "initSegment" !== i.sn && (this.fragPrevious = i), this.fragBufferedComplete(i, s)
				}
				onError(e, t) {
					var i;
					if (t.fatal) this.state = Jr.ERROR;
					else switch (t.details) {
						case ei.FRAG_GAP:
						case ei.FRAG_PARSING_ERROR:
						case ei.FRAG_DECRYPT_ERROR:
						case ei.FRAG_LOAD_ERROR:
						case ei.FRAG_LOAD_TIMEOUT:
						case ei.KEY_LOAD_ERROR:
						case ei.KEY_LOAD_TIMEOUT:
							this.onFragmentOrKeyLoadError(Us.MAIN, t);
							break;
						case ei.LEVEL_LOAD_ERROR:
						case ei.LEVEL_LOAD_TIMEOUT:
						case ei.LEVEL_PARSING_ERROR:
							t.levelRetry || this.state !== Jr.WAITING_LEVEL || (null == (i = t.context) ? void 0 : i.type) !== Ns.LEVEL || (this.state = Jr.IDLE);
							break;
						case ei.BUFFER_FULL_ERROR:
							if (!t.parent || "main" !== t.parent) return;
							this.reduceLengthAndFlushBuffer(t) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
							break;
						case ei.INTERNAL_EXCEPTION:
							this.recoverWorkerError(t)
					}
				}
				checkBuffer() {
					const {
						media: e,
						gapController: t
					} = this;
					if (e && t && e.readyState) {
						if (this.loadedmetadata || !Br.getBuffered(e).length) {
							const e = this.state !== Jr.IDLE ? this.fragCurrent : null;
							t.poll(this.lastCurrentTime, e)
						}
						this.lastCurrentTime = e.currentTime
					}
				}
				onFragLoadEmergencyAborted() {
					this.state = Jr.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate()
				}
				onBufferFlushed(e, {
					type: t
				}) {
					if (t !== ui.AUDIO || this.audioOnly && !this.altAudio) {
						const e = (t === ui.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
						this.afterBufferFlushed(e, t, Us.MAIN)
					}
				}
				onLevelsUpdated(e, t) {
					this.levels = t.levels
				}
				swapAudioCodec() {
					this.audioCodecSwap = !this.audioCodecSwap
				}
				seekToStartPos() {
					const {
						media: e
					} = this;
					if (!e) return;
					const t = e.currentTime;
					let i = this.startPosition;
					if (i >= 0 && t < i) {
						if (e.seeking) return void this.log(`could not seek to ${i}, already seeking at ${t}`);
						const s = Br.getBuffered(e),
							r = (s.length ? s.start(0) : 0) - i;
						r > 0 && (r < this.config.maxBufferHole || r < this.config.maxFragLookUpTolerance) && (this.log(`adjusting start position by ${r} to match buffer start`), i += r, this.startPosition = i), this.log(`seek to target start position ${i} from current time ${t}`), e.currentTime = i
					}
				}
				_getAudioCodec(e) {
					let t = this.config.defaultAudioCodec || e.audioCodec;
					return this.audioCodecSwap && t && (this.log("Swapping audio codec"), t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), t
				}
				_loadBitrateTestFrag(e, t) {
					e.bitrateTest = !0, this._doFragLoad(e, t).then(i => {
						const {
							hls: s
						} = this;
						if (!i || this.fragContextChanged(e)) return;
						t.fragmentError = 0, this.state = Jr.IDLE, this.startFragRequested = !1, this.bitrateTest = !1;
						const r = e.stats;
						r.parsing.start = r.parsing.end = r.buffering.start = r.buffering.end = self.performance.now(), s.trigger(Jt.FRAG_LOADED, i), e.bitrateTest = !1
					})
				}
				_handleTransmuxComplete(e) {
					var t;
					const i = "main",
						{
							hls: s
						} = this,
						{
							remuxResult: r,
							chunkMeta: n
						} = e,
						a = this.getCurrentContext(n);
					if (!a) return void this.resetWhenMissingContext(n);
					const {
						frag: o,
						part: l,
						level: d
					} = a, {
						video: h,
						text: c,
						id3: u,
						initSegment: f
					} = r, {
						details: g
					} = d, p = this.altAudio ? void 0 : r.audio;
					if (this.fragContextChanged(o)) this.fragmentTracker.removeFragment(o);
					else {
						if (this.state = Jr.PARSING, f) {
							if (null != f && f.tracks) {
								const e = o.initSegment || o;
								this._bufferInitSegment(d, f.tracks, e, n), s.trigger(Jt.FRAG_PARSING_INIT_SEGMENT, {
									frag: e,
									id: i,
									tracks: f.tracks
								})
							}
							const e = f.initPTS,
								t = f.timescale;
							Qt(e) && (this.initPTS[o.cc] = {
								baseTime: e,
								timescale: t
							}, s.trigger(Jt.INIT_PTS_FOUND, {
								frag: o,
								id: i,
								initPTS: e,
								timescale: t
							}))
						}
						if (h && !1 !== r.independent) {
							if (g) {
								const {
									startPTS: e,
									endPTS: t,
									startDTS: i,
									endDTS: s
								} = h;
								if (l) l.elementaryStreams[h.type] = {
									startPTS: e,
									endPTS: t,
									startDTS: i,
									endDTS: s
								};
								else if (h.firstKeyFrame && h.independent && 1 === n.id && (this.couldBacktrack = !0), h.dropped && h.independent) {
									const i = this.getMainFwdBufferInfo();
									if ((i ? i.end : this.getLoadPosition()) + this.config.maxBufferHole < (h.firstKeyFramePTS ? h.firstKeyFramePTS : e) - this.config.maxBufferHole) return void this.backtrack(o);
									o.setElementaryStreamInfo(h.type, o.start, t, o.start, s, !0)
								}
								o.setElementaryStreamInfo(h.type, e, t, i, s), this.backtrackFragment && (this.backtrackFragment = o), this.bufferFragmentData(h, o, l, n)
							}
						} else if (!1 === r.independent) return void this.backtrack(o);
						if (p) {
							const {
								startPTS: e,
								endPTS: t,
								startDTS: i,
								endDTS: s
							} = p;
							l && (l.elementaryStreams[ui.AUDIO] = {
								startPTS: e,
								endPTS: t,
								startDTS: i,
								endDTS: s
							}), o.setElementaryStreamInfo(ui.AUDIO, e, t, i, s), this.bufferFragmentData(p, o, l, n)
						}
						if (g && null != u && null != (t = u.samples) && t.length) {
							const e = {
								id: i,
								frag: o,
								details: g,
								samples: u.samples
							};
							s.trigger(Jt.FRAG_PARSING_METADATA, e)
						}
						if (g && c) {
							const e = {
								id: i,
								frag: o,
								details: g,
								samples: c.samples
							};
							s.trigger(Jt.FRAG_PARSING_USERDATA, e)
						}
					}
				}
				_bufferInitSegment(e, t, i, s) {
					if (this.state !== Jr.PARSING) return;
					this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && delete t.audio;
					const {
						audio: r,
						video: n,
						audiovideo: a
					} = t;
					if (r) {
						let t = e.audioCodec;
						const i = navigator.userAgent.toLowerCase();
						this.audioCodecSwitch && (t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== r.metadata.channelCount && -1 === i.indexOf("firefox") && (t = "mp4a.40.5")), -1 !== i.indexOf("android") && "audio/mpeg" !== r.container && (t = "mp4a.40.2", this.log(`Android: force audio codec to ${t}`)), e.audioCodec && e.audioCodec !== t && this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${t}"`), r.levelCodec = t, r.id = "main", this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${t||""}/${e.audioCodec||""}/${r.codec}]`)
					}
					n && (n.levelCodec = e.videoCodec, n.id = "main", this.log(`Init video buffer, container:${n.container}, codecs[level/parsed]=[${e.videoCodec||""}/${n.codec}]`)), a && this.log(`Init audiovideo buffer, container:${a.container}, codecs[level/parsed]=[${e.attrs.CODECS||""}/${a.codec}]`), this.hls.trigger(Jt.BUFFER_CODECS, t), Object.keys(t).forEach(e => {
						const r = t[e].initSegment;
						null != r && r.byteLength && this.hls.trigger(Jt.BUFFER_APPENDING, {
							type: e,
							data: r,
							frag: i,
							part: null,
							chunkMeta: s,
							parent: i.type
						})
					}), this.tick()
				}
				getMainFwdBufferInfo() {
					return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, Us.MAIN)
				}
				backtrack(e) {
					this.couldBacktrack = !0, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = Jr.IDLE
				}
				checkFragmentChanged() {
					const e = this.media;
					let t = null;
					if (e && e.readyState > 1 && !1 === e.seeking) {
						const i = e.currentTime;
						if (Br.isBuffered(e, i) ? t = this.getAppendedFrag(i) : Br.isBuffered(e, i + .1) && (t = this.getAppendedFrag(i + .1)), t) {
							this.backtrackFragment = null;
							const e = this.fragPlaying,
								i = t.level;
							e && t.sn === e.sn && e.level === i && t.urlId === e.urlId || (this.fragPlaying = t, this.hls.trigger(Jt.FRAG_CHANGED, {
								frag: t
							}), e && e.level === i || this.hls.trigger(Jt.LEVEL_SWITCHED, {
								level: i
							}))
						}
					}
				}
				get nextLevel() {
					const e = this.nextBufferedFrag;
					return e ? e.level : -1
				}
				get currentFrag() {
					const e = this.media;
					return e ? this.fragPlaying || this.getAppendedFrag(e.currentTime) : null
				}
				get currentProgramDateTime() {
					const e = this.media;
					if (e) {
						const t = e.currentTime,
							i = this.currentFrag;
						if (i && Qt(t) && Qt(i.programDateTime)) {
							const e = i.programDateTime + 1e3 * (t - i.start);
							return new Date(e)
						}
					}
					return null
				}
				get currentLevel() {
					const e = this.currentFrag;
					return e ? e.level : -1
				}
				get nextBufferedFrag() {
					const e = this.currentFrag;
					return e ? this.followingBufferedFrag(e) : null
				}
				get forceStartLoad() {
					return this._forceStartLoad
				}
			}
			class ma {
				constructor(e, t = 0, i = 0) {
					this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e, this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = t, this.totalWeight_ = i
				}
				sample(e, t) {
					const i = Math.pow(this.alpha_, e);
					this.estimate_ = t * (1 - i) + i * this.estimate_, this.totalWeight_ += e
				}
				getTotalWeight() {
					return this.totalWeight_
				}
				getEstimate() {
					if (this.alpha_) {
						const e = 1 - Math.pow(this.alpha_, this.totalWeight_);
						if (e) return this.estimate_ / e
					}
					return this.estimate_
				}
			}
			class va {
				constructor(e, t, i, s = 100) {
					this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = i, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new ma(e), this.fast_ = new ma(t), this.defaultTTFB_ = s, this.ttfb_ = new ma(e)
				}
				update(e, t) {
					const {
						slow_: i,
						fast_: s,
						ttfb_: r
					} = this;
					i.halfLife !== e && (this.slow_ = new ma(e, i.getEstimate(), i.getTotalWeight())), s.halfLife !== t && (this.fast_ = new ma(t, s.getEstimate(), s.getTotalWeight())), r.halfLife !== e && (this.ttfb_ = new ma(e, r.getEstimate(), r.getTotalWeight()))
				}
				sample(e, t) {
					const i = (e = Math.max(e, this.minDelayMs_)) / 1e3,
						s = 8 * t / i;
					this.fast_.sample(i, s), this.slow_.sample(i, s)
				}
				sampleTTFB(e) {
					const t = e / 1e3,
						i = Math.sqrt(2) * Math.exp(-Math.pow(t, 2) / 2);
					this.ttfb_.sample(i, Math.max(e, 5))
				}
				canEstimate() {
					return this.fast_.getTotalWeight() >= this.minWeight_
				}
				getEstimate() {
					return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
				}
				getEstimateTTFB() {
					return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_
				}
				destroy() {}
			}
			class ya {
				constructor() {
					this.chunks = [], this.dataLength = 0
				}
				push(e) {
					this.chunks.push(e), this.dataLength += e.length
				}
				flush() {
					const {
						chunks: e,
						dataLength: t
					} = this;
					let i;
					return e.length ? (i = 1 === e.length ? e[0] : function(e, t) {
						const i = new Uint8Array(t);
						let s = 0;
						for (let r = 0; r < e.length; r++) {
							const t = e[r];
							i.set(t, s), s += t.length
						}
						return i
					}(e, t), this.reset(), i) : new Uint8Array(0)
				}
				reset() {
					this.chunks.length = 0, this.dataLength = 0
				}
			}
			const Ea = 100;

			function _a(e, t) {
				if (e.length !== t.length) return !1;
				for (let i = 0; i < e.length; i++)
					if (!ba(e[i].attrs, t[i].attrs)) return !1;
				return !0
			}

			function ba(e, t) {
				const i = e["STABLE-RENDITION-ID"];
				return i ? i === t["STABLE-RENDITION-ID"] : !["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED"].some(i => e[i] !== t[i])
			}
			const Ta = 500;
			class Sa {
				constructor(e) {
					this.buffered = void 0;
					const t = (t, i, s) => {
						if ((i >>>= 0) > s - 1) throw new DOMException(`Failed to execute '${t}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${s})`);
						return e[i][t]
					};
					this.buffered = {
						get length() {
							return e.length
						},
						end: i => t("end", i, e.length),
						start: i => t("start", i, e.length)
					}
				}
			}

			function Aa(e) {
				const t = [];
				for (let i = 0; i < e.length; i++) {
					const s = e[i];
					"subtitles" !== s.kind && "captions" !== s.kind || !s.label || t.push(e[i])
				}
				return t
			}
			class La {
				constructor(e) {
					this.buffers = void 0, this.queues = {
						video: [],
						audio: [],
						audiovideo: []
					}, this.buffers = e
				}
				append(e, t) {
					const i = this.queues[t];
					i.push(e), 1 === i.length && this.buffers[t] && this.executeNext(t)
				}
				insertAbort(e, t) {
					this.queues[t].unshift(e), this.executeNext(t)
				}
				appendBlocker(e) {
					let t;
					const i = new Promise(e => {
							t = e
						}),
						s = {
							execute: t,
							onStart: () => {},
							onComplete: () => {},
							onError: () => {}
						};
					return this.append(s, e), i
				}
				executeNext(e) {
					const {
						buffers: t,
						queues: i
					} = this, s = t[e], r = i[e];
					if (r.length) {
						const t = r[0];
						try {
							t.execute()
						} catch (n) {
							ni.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), t.onError(n), null != s && s.updating || (r.shift(), this.executeNext(e))
						}
					}
				}
				shiftAndExecuteNext(e) {
					this.queues[e].shift(), this.executeNext(e)
				}
				current(e) {
					return this.queues[e][0]
				}
			}
			const Ra = _s(),
				wa = /([ha]vc.)(?:\.[^.,]+)+/;
			const ka = {
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
				Ia = function(e) {
					let t = e;
					return ka.hasOwnProperty(e) && (t = ka[e]), String.fromCharCode(t)
				},
				Da = 15,
				Ca = 100,
				Pa = {
					17: 1,
					18: 3,
					21: 5,
					22: 7,
					23: 9,
					16: 11,
					19: 12,
					20: 14
				},
				Oa = {
					17: 2,
					18: 4,
					21: 6,
					22: 8,
					23: 10,
					19: 13,
					20: 15
				},
				xa = {
					25: 1,
					26: 3,
					29: 5,
					30: 7,
					31: 9,
					24: 11,
					27: 12,
					28: 14
				},
				Ma = {
					25: 2,
					26: 4,
					29: 6,
					30: 8,
					31: 10,
					27: 13,
					28: 15
				},
				Fa = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
			class Na {
				constructor() {
					this.time = null, this.verboseLevel = 0
				}
				log(e, t) {
					if (this.verboseLevel >= e) {
						const i = "function" == typeof t ? t() : t;
						ni.log(`${this.time} [${e}] ${i}`)
					}
				}
			}
			const Ua = function(e) {
				const t = [];
				for (let i = 0; i < e.length; i++) t.push(e[i].toString(16));
				return t
			};
			class Ba {
				constructor(e, t, i, s, r) {
					this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = e || "white", this.underline = t || !1, this.italics = i || !1, this.background = s || "black", this.flash = r || !1
				}
				reset() {
					this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
				}
				setStyles(e) {
					const t = ["foreground", "underline", "italics", "background", "flash"];
					for (let i = 0; i < t.length; i++) {
						const s = t[i];
						e.hasOwnProperty(s) && (this[s] = e[s])
					}
				}
				isDefault() {
					return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
				}
				equals(e) {
					return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
				}
				copy(e) {
					this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
				}
				toString() {
					return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
				}
			}
			class $a {
				constructor(e, t, i, s, r, n) {
					this.uchar = void 0, this.penState = void 0, this.uchar = e || " ", this.penState = new Ba(t, i, s, r, n)
				}
				reset() {
					this.uchar = " ", this.penState.reset()
				}
				setChar(e, t) {
					this.uchar = e, this.penState.copy(t)
				}
				setPenState(e) {
					this.penState.copy(e)
				}
				equals(e) {
					return this.uchar === e.uchar && this.penState.equals(e.penState)
				}
				copy(e) {
					this.uchar = e.uchar, this.penState.copy(e.penState)
				}
				isEmpty() {
					return " " === this.uchar && this.penState.isDefault()
				}
			}
			class Va {
				constructor(e) {
					this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
					for (let t = 0; t < Ca; t++) this.chars.push(new $a);
					this.logger = e, this.pos = 0, this.currPenState = new Ba
				}
				equals(e) {
					let t = !0;
					for (let i = 0; i < Ca; i++)
						if (!this.chars[i].equals(e.chars[i])) {
							t = !1;
							break
						} return t
				}
				copy(e) {
					for (let t = 0; t < Ca; t++) this.chars[t].copy(e.chars[t])
				}
				isEmpty() {
					let e = !0;
					for (let t = 0; t < Ca; t++)
						if (!this.chars[t].isEmpty()) {
							e = !1;
							break
						} return e
				}
				setCursor(e) {
					this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > Ca && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = Ca)
				}
				moveCursor(e) {
					const t = this.pos + e;
					if (e > 1)
						for (let i = this.pos + 1; i < t + 1; i++) this.chars[i].setPenState(this.currPenState);
					this.setCursor(t)
				}
				backSpace() {
					this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
				}
				insertChar(e) {
					e >= 144 && this.backSpace();
					const t = Ia(e);
					this.pos >= Ca ? this.logger.log(0, () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1))
				}
				clearFromPos(e) {
					let t;
					for (t = e; t < Ca; t++) this.chars[t].reset()
				}
				clear() {
					this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
				}
				clearToEndOfRow() {
					this.clearFromPos(this.pos)
				}
				getTextString() {
					const e = [];
					let t = !0;
					for (let i = 0; i < Ca; i++) {
						const s = this.chars[i].uchar;
						" " !== s && (t = !1), e.push(s)
					}
					return t ? "" : e.join("")
				}
				setPenStyles(e) {
					this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState)
				}
			}
			class Ga {
				constructor(e) {
					this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
					for (let t = 0; t < Da; t++) this.rows.push(new Va(e));
					this.logger = e, this.currRow = Da - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset()
				}
				reset() {
					for (let e = 0; e < Da; e++) this.rows[e].clear();
					this.currRow = Da - 1
				}
				equals(e) {
					let t = !0;
					for (let i = 0; i < Da; i++)
						if (!this.rows[i].equals(e.rows[i])) {
							t = !1;
							break
						} return t
				}
				copy(e) {
					for (let t = 0; t < Da; t++) this.rows[t].copy(e.rows[t])
				}
				isEmpty() {
					let e = !0;
					for (let t = 0; t < Da; t++)
						if (!this.rows[t].isEmpty()) {
							e = !1;
							break
						} return e
				}
				backSpace() {
					this.rows[this.currRow].backSpace()
				}
				clearToEndOfRow() {
					this.rows[this.currRow].clearToEndOfRow()
				}
				insertChar(e) {
					this.rows[this.currRow].insertChar(e)
				}
				setPen(e) {
					this.rows[this.currRow].setPenStyles(e)
				}
				moveCursor(e) {
					this.rows[this.currRow].moveCursor(e)
				}
				setCursor(e) {
					this.logger.log(2, "setCursor: " + e), this.rows[this.currRow].setCursor(e)
				}
				setPAC(e) {
					this.logger.log(2, () => "pacData = " + JSON.stringify(e));
					let t = e.row - 1;
					if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
						for (let t = 0; t < Da; t++) this.rows[t].clear();
						const e = this.currRow + 1 - this.nrRollUpRows,
							i = this.lastOutputScreen;
						if (i) {
							const s = i.rows[e].cueStartTime,
								r = this.logger.time;
							if (s && null !== r && s < r)
								for (let n = 0; n < this.nrRollUpRows; n++) this.rows[t - this.nrRollUpRows + n + 1].copy(i.rows[e + n])
						}
					}
					this.currRow = t;
					const i = this.rows[this.currRow];
					if (null !== e.indent) {
						const t = e.indent,
							s = Math.max(t - 1, 0);
						i.setCursor(e.indent), e.color = i.chars[s].penState.foreground
					}
					const s = {
						foreground: e.color,
						underline: e.underline,
						italics: e.italics,
						background: "black",
						flash: !1
					};
					this.setPen(s)
				}
				setBkgData(e) {
					this.logger.log(2, () => "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
				}
				setRollUpRows(e) {
					this.nrRollUpRows = e
				}
				rollUp() {
					if (null === this.nrRollUpRows) return void this.logger.log(3, "roll_up but nrRollUpRows not set yet");
					this.logger.log(1, () => this.getDisplayText());
					const e = this.currRow + 1 - this.nrRollUpRows,
						t = this.rows.splice(e, 1)[0];
					t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(2, "Rolling up")
				}
				getDisplayText(e) {
					e = e || !1;
					const t = [];
					let i = "",
						s = -1;
					for (let r = 0; r < Da; r++) {
						const i = this.rows[r].getTextString();
						i && (s = r + 1, e ? t.push("Row " + s + ": '" + i + "'") : t.push(i.trim()))
					}
					return t.length > 0 && (i = e ? "[" + t.join(" | ") + "]" : t.join("\n")), i
				}
				getTextAndFormat() {
					return this.rows
				}
			}
			class ja {
				constructor(e, t, i) {
					this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new Ga(i), this.nonDisplayedMemory = new Ga(i), this.lastOutputScreen = new Ga(i), this.currRollUpRow = this.displayedMemory.rows[Da - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = i
				}
				reset() {
					this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[Da - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
				}
				getHandler() {
					return this.outputFilter
				}
				setHandler(e) {
					this.outputFilter = e
				}
				setPAC(e) {
					this.writeScreen.setPAC(e)
				}
				setBkgData(e) {
					this.writeScreen.setBkgData(e)
				}
				setMode(e) {
					e !== this.mode && (this.mode = e, this.logger.log(2, () => "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
				}
				insertChars(e) {
					for (let i = 0; i < e.length; i++) this.writeScreen.insertChar(e[i]);
					const t = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
					this.logger.log(2, () => t + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
				}
				ccRCL() {
					this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
				}
				ccBS() {
					this.logger.log(2, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
				}
				ccAOF() {}
				ccAON() {}
				ccDER() {
					this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
				}
				ccRU(e) {
					this.logger.log(2, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
				}
				ccFON() {
					this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({
						flash: !0
					})
				}
				ccRDC() {
					this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
				}
				ccTR() {
					this.logger.log(2, "TR"), this.setMode("MODE_TEXT")
				}
				ccRTD() {
					this.logger.log(2, "RTD"), this.setMode("MODE_TEXT")
				}
				ccEDM() {
					this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
				}
				ccCR() {
					this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
				}
				ccENM() {
					this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
				}
				ccEOC() {
					if (this.logger.log(2, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
						const e = this.displayedMemory;
						this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText())
					}
					this.outputDataUpdate(!0)
				}
				ccTO(e) {
					this.logger.log(2, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e)
				}
				ccMIDROW(e) {
					const t = {
						flash: !1
					};
					if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";
					else {
						const i = Math.floor(e / 2) - 16,
							s = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
						t.foreground = s[i]
					}
					this.logger.log(2, "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
				}
				outputDataUpdate(e = !1) {
					const t = this.logger.time;
					null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
				}
				cueSplitAtTime(e) {
					this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
				}
			}
			class Ha {
				constructor(e, t, i) {
					this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
					const s = new Na;
					this.channels = [null, new ja(e, t, s), new ja(e + 1, i, s)], this.cmdHistory = {
						a: null,
						b: null
					}, this.logger = s
				}
				getHandler(e) {
					return this.channels[e].getHandler()
				}
				setHandler(e, t) {
					this.channels[e].setHandler(t)
				}
				addData(e, t) {
					let i, s, r, n = !1;
					this.logger.time = e;
					for (let a = 0; a < t.length; a += 2)
						if (s = 127 & t[a], r = 127 & t[a + 1], 0 !== s || 0 !== r) {
							if (this.logger.log(3, "[" + Ua([t[a], t[a + 1]]) + "] -> (" + Ua([s, r]) + ")"), (i = this.parseCmd(s, r)) || (i = this.parseMidrow(s, r)), i || (i = this.parsePAC(s, r)), i || (i = this.parseBackgroundAttributes(s, r)), !i && (n = this.parseChars(s, r))) {
								const e = this.currentChannel;
								if (e && e > 0) {
									this.channels[e].insertChars(n)
								} else this.logger.log(2, "No channel found yet. TEXT-MODE?")
							}
							i || n || this.logger.log(2, "Couldn't parse cleaned data " + Ua([s, r]) + " orig: " + Ua([t[a], t[a + 1]]))
						}
				}
				parseCmd(e, t) {
					const {
						cmdHistory: i
					} = this;
					if (!((20 === e || 28 === e || 21 === e || 29 === e) && t >= 32 && t <= 47) && !((23 === e || 31 === e) && t >= 33 && t <= 35)) return !1;
					if (qa(e, t, i)) return Ka(null, null, i), this.logger.log(3, "Repeated command (" + Ua([e, t]) + ") is dropped"), !0;
					const s = 20 === e || 21 === e || 23 === e ? 1 : 2,
						r = this.channels[s];
					return 20 === e || 21 === e || 28 === e || 29 === e ? 32 === t ? r.ccRCL() : 33 === t ? r.ccBS() : 34 === t ? r.ccAOF() : 35 === t ? r.ccAON() : 36 === t ? r.ccDER() : 37 === t ? r.ccRU(2) : 38 === t ? r.ccRU(3) : 39 === t ? r.ccRU(4) : 40 === t ? r.ccFON() : 41 === t ? r.ccRDC() : 42 === t ? r.ccTR() : 43 === t ? r.ccRTD() : 44 === t ? r.ccEDM() : 45 === t ? r.ccCR() : 46 === t ? r.ccENM() : 47 === t && r.ccEOC() : r.ccTO(t - 32), Ka(e, t, i), this.currentChannel = s, !0
				}
				parseMidrow(e, t) {
					let i = 0;
					if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
						if ((i = 17 === e ? 1 : 2) !== this.currentChannel) return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
						const s = this.channels[i];
						return !!s && (s.ccMIDROW(t), this.logger.log(3, "MIDROW (" + Ua([e, t]) + ")"), !0)
					}
					return !1
				}
				parsePAC(e, t) {
					let i;
					const s = this.cmdHistory;
					if (!((e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127) && !((16 === e || 24 === e) && t >= 64 && t <= 95)) return !1;
					if (qa(e, t, s)) return Ka(null, null, s), !0;
					const r = e <= 23 ? 1 : 2;
					i = t >= 64 && t <= 95 ? 1 === r ? Pa[e] : xa[e] : 1 === r ? Oa[e] : Ma[e];
					const n = this.channels[r];
					return !!n && (n.setPAC(this.interpretPAC(i, t)), Ka(e, t, s), this.currentChannel = r, !0)
				}
				interpretPAC(e, t) {
					let i;
					const s = {
						color: null,
						italics: !1,
						indent: null,
						underline: !1,
						row: e
					};
					return i = t > 95 ? t - 96 : t - 64, s.underline = 1 == (1 & i), i <= 13 ? s.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(i / 2)] : i <= 15 ? (s.italics = !0, s.color = "white") : s.indent = 4 * Math.floor((i - 16) / 2), s
				}
				parseChars(e, t) {
					let i, s = null,
						r = null;
					if (e >= 25 ? (i = 2, r = e - 8) : (i = 1, r = e), r >= 17 && r <= 19) {
						let e;
						e = 17 === r ? t + 80 : 18 === r ? t + 112 : t + 144, this.logger.log(2, "Special char '" + Ia(e) + "' in channel " + i), s = [e]
					} else e >= 32 && e <= 127 && (s = 0 === t ? [e] : [e, t]);
					if (s) {
						const i = Ua(s);
						this.logger.log(3, "Char codes =  " + i.join(",")), Ka(e, t, this.cmdHistory)
					}
					return s
				}
				parseBackgroundAttributes(e, t) {
					if (!((16 === e || 24 === e) && t >= 32 && t <= 47) && !((23 === e || 31 === e) && t >= 45 && t <= 47)) return !1;
					let i;
					const s = {};
					16 === e || 24 === e ? (i = Math.floor((t - 32) / 2), s.background = Fa[i], t % 2 == 1 && (s.background = s.background + "_semi")) : 45 === t ? s.background = "transparent" : (s.foreground = "black", 47 === t && (s.underline = !0));
					const r = e <= 23 ? 1 : 2;
					return this.channels[r].setBkgData(s), Ka(e, t, this.cmdHistory), !0
				}
				reset() {
					for (let e = 0; e < Object.keys(this.channels).length; e++) {
						const t = this.channels[e];
						t && t.reset()
					}
					this.cmdHistory = {
						a: null,
						b: null
					}
				}
				cueSplitAtTime(e) {
					for (let t = 0; t < this.channels.length; t++) {
						const i = this.channels[t];
						i && i.cueSplitAtTime(e)
					}
				}
			}

			function Ka(e, t, i) {
				i.a = e, i.b = t
			}

			function qa(e, t, i) {
				return i.a === e && i.b === t
			}
			class Wa {
				constructor(e, t) {
					this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t
				}
				dispatchCue() {
					null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
				}
				newCue(e, t, i) {
					(null === this.startTime || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = i, this.timelineController.createCaptionsTrack(this.trackName)
				}
				reset() {
					this.cueRanges = [], this.startTime = null
				}
			}
			var Ya = function() {
				if ("undefined" != typeof self && self.VTTCue) return self.VTTCue;
				const e = ["", "lr", "rl"],
					t = ["start", "middle", "end", "left", "right"];

				function i(e, t) {
					if ("string" != typeof t) return !1;
					if (!Array.isArray(e)) return !1;
					const i = t.toLowerCase();
					return !!~e.indexOf(i) && i
				}

				function s(e) {
					return i(t, e)
				}

				function r(e, ...t) {
					let i = 1;
					for (; i < arguments.length; i++) {
						const t = arguments[i];
						for (const i in t) e[i] = t[i]
					}
					return e
				}

				function n(t, n, a) {
					const o = this,
						l = {
							enumerable: !0
						};
					o.hasBeenReset = !1;
					let d = "",
						h = !1,
						c = t,
						u = n,
						f = a,
						g = null,
						p = "",
						m = !0,
						v = "auto",
						y = "start",
						E = 50,
						_ = "middle",
						b = 50,
						T = "middle";
					Object.defineProperty(o, "id", r({}, l, {
						get: function() {
							return d
						},
						set: function(e) {
							d = "" + e
						}
					})), Object.defineProperty(o, "pauseOnExit", r({}, l, {
						get: function() {
							return h
						},
						set: function(e) {
							h = !!e
						}
					})), Object.defineProperty(o, "startTime", r({}, l, {
						get: function() {
							return c
						},
						set: function(e) {
							if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
							c = e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(o, "endTime", r({}, l, {
						get: function() {
							return u
						},
						set: function(e) {
							if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
							u = e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(o, "text", r({}, l, {
						get: function() {
							return f
						},
						set: function(e) {
							f = "" + e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(o, "region", r({}, l, {
						get: function() {
							return g
						},
						set: function(e) {
							g = e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(o, "vertical", r({}, l, {
						get: function() {
							return p
						},
						set: function(t) {
							const s = function(t) {
								return i(e, t)
							}(t);
							if (!1 === s) throw new SyntaxError("An invalid or illegal string was specified.");
							p = s, this.hasBeenReset = !0
						}
					})), Object.defineProperty(o, "snapToLines", r({}, l, {
						get: function() {
							return m
						},
						set: function(e) {
							m = !!e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(o, "line", r({}, l, {
						get: function() {
							return v
						},
						set: function(e) {
							if ("number" != typeof e && "auto" !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
							v = e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(o, "lineAlign", r({}, l, {
						get: function() {
							return y
						},
						set: function(e) {
							const t = s(e);
							if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
							y = t, this.hasBeenReset = !0
						}
					})), Object.defineProperty(o, "position", r({}, l, {
						get: function() {
							return E
						},
						set: function(e) {
							if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
							E = e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(o, "positionAlign", r({}, l, {
						get: function() {
							return _
						},
						set: function(e) {
							const t = s(e);
							if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
							_ = t, this.hasBeenReset = !0
						}
					})), Object.defineProperty(o, "size", r({}, l, {
						get: function() {
							return b
						},
						set: function(e) {
							if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
							b = e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(o, "align", r({}, l, {
						get: function() {
							return T
						},
						set: function(e) {
							const t = s(e);
							if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
							T = t, this.hasBeenReset = !0
						}
					})), o.displayState = void 0
				}
				return n.prototype.getCueAsHTML = function() {
					return self.WebVTT.convertCueToDOMTree(self, this.text)
				}, n
			}();
			class za {
				decode(e, t) {
					if (!e) return "";
					if ("string" != typeof e) throw new Error("Error - expected string data.");
					return decodeURIComponent(encodeURIComponent(e))
				}
			}

			function Xa(e) {
				function t(e, t, i, s) {
					return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + parseFloat(s || 0)
				}
				const i = e.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
				return i ? parseFloat(i[2]) > 59 ? t(i[2], i[3], 0, i[4]) : t(i[1], i[2], i[3], i[4]) : null
			}
			class Qa {
				constructor() {
					this.values = Object.create(null)
				}
				set(e, t) {
					this.get(e) || "" === t || (this.values[e] = t)
				}
				get(e, t, i) {
					return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
				}
				has(e) {
					return e in this.values
				}
				alt(e, t, i) {
					for (let s = 0; s < i.length; ++s)
						if (t === i[s]) {
							this.set(e, t);
							break
						}
				}
				integer(e, t) {
					/^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
				}
				percent(e, t) {
					if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
						const i = parseFloat(t);
						if (i >= 0 && i <= 100) return this.set(e, i), !0
					}
					return !1
				}
			}

			function Ja(e, t, i, s) {
				const r = s ? e.split(s) : [e];
				for (const n in r) {
					if ("string" != typeof r[n]) continue;
					const e = r[n].split(i);
					2 === e.length && t(e[0], e[1])
				}
			}
			const Za = new Ya(0, 0, ""),
				eo = "middle" === Za.align ? "middle" : "center";

			function to(e, t, i) {
				const s = e;

				function r() {
					const t = Xa(e);
					if (null === t) throw new Error("Malformed timestamp: " + s);
					return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
				}

				function n() {
					e = e.replace(/^\s+/, "")
				}
				if (n(), t.startTime = r(), n(), "--\x3e" !== e.slice(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + s);
				e = e.slice(3), n(), t.endTime = r(), n(),
					function(e, t) {
						const s = new Qa;
						Ja(e, (function(e, t) {
							let r;
							switch (e) {
								case "region":
									for (let r = i.length - 1; r >= 0; r--)
										if (i[r].id === t) {
											s.set(e, i[r].region);
											break
										} break;
								case "vertical":
									s.alt(e, t, ["rl", "lr"]);
									break;
								case "line":
									r = t.split(","), s.integer(e, r[0]), s.percent(e, r[0]) && s.set("snapToLines", !1), s.alt(e, r[0], ["auto"]), 2 === r.length && s.alt("lineAlign", r[1], ["start", eo, "end"]);
									break;
								case "position":
									r = t.split(","), s.percent(e, r[0]), 2 === r.length && s.alt("positionAlign", r[1], ["start", eo, "end", "line-left", "line-right", "auto"]);
									break;
								case "size":
									s.percent(e, t);
									break;
								case "align":
									s.alt(e, t, ["start", eo, "end", "left", "right"])
							}
						}), /:/, /\s/), t.region = s.get("region", null), t.vertical = s.get("vertical", "");
						let r = s.get("line", "auto");
						"auto" === r && -1 === Za.line && (r = -1), t.line = r, t.lineAlign = s.get("lineAlign", "start"), t.snapToLines = s.get("snapToLines", !0), t.size = s.get("size", 100), t.align = s.get("align", eo);
						let n = s.get("position", "auto");
						"auto" === n && 50 === Za.position && (n = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50), t.position = n
					}(e, t)
			}

			function io(e) {
				return e.replace(/<br(?: \/)?>/gi, "\n")
			}
			class so {
				constructor() {
					this.state = "INITIAL", this.buffer = "", this.decoder = new za, this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0
				}
				parse(e) {
					const t = this;

					function i() {
						let e = t.buffer,
							i = 0;
						for (e = io(e); i < e.length && "\r" !== e[i] && "\n" !== e[i];) ++i;
						const s = e.slice(0, i);
						return "\r" === e[i] && ++i, "\n" === e[i] && ++i, t.buffer = e.slice(i), s
					}
					e && (t.buffer += t.decoder.decode(e, {
						stream: !0
					}));
					try {
						let e = "";
						if ("INITIAL" === t.state) {
							if (!/\r\n|\n/.test(t.buffer)) return this;
							const s = (e = i()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
							if (null == s || !s[0]) throw new Error("Malformed WebVTT signature.");
							t.state = "HEADER"
						}
						let r = !1;
						for (; t.buffer;) {
							if (!/\r\n|\n/.test(t.buffer)) return this;
							switch (r ? r = !1 : e = i(), t.state) {
								case "HEADER":
									/:/.test(e) ? Ja(e, (function(e, t) {}), /:/) : e || (t.state = "ID");
									continue;
								case "NOTE":
									e || (t.state = "ID");
									continue;
								case "ID":
									if (/^NOTE($|[ \t])/.test(e)) {
										t.state = "NOTE";
										break
									}
									if (!e) continue;
									if (t.cue = new Ya(0, 0, ""), t.state = "CUE", -1 === e.indexOf("--\x3e")) {
										t.cue.id = e;
										continue
									}
									case "CUE":
										if (!t.cue) {
											t.state = "BADCUE";
											continue
										}
										try {
											to(e, t.cue, t.regionList)
										} catch (s) {
											t.cue = null, t.state = "BADCUE";
											continue
										}
										t.state = "CUETEXT";
										continue;
									case "CUETEXT": {
										const i = -1 !== e.indexOf("--\x3e");
										if (!e || i && (r = !0)) {
											t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
											continue
										}
										if (null === t.cue) continue;
										t.cue.text && (t.cue.text += "\n"), t.cue.text += e
									}
									continue;
								case "BADCUE":
									e || (t.state = "ID")
							}
						}
					} catch (s) {
						"CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
					}
					return this
				}
				flush() {
					const e = this;
					try {
						if ((e.cue || "HEADER" === e.state) && (e.buffer += "\n\n", e.parse()), "INITIAL" === e.state || "BADWEBVTT" === e.state) throw new Error("Malformed WebVTT signature.")
					} catch (t) {
						e.onparsingerror && e.onparsingerror(t)
					}
					return e.onflush && e.onflush(), this
				}
			}
			const ro = /\r\n|\n\r|\n|\r/g,
				no = function(e, t, i = 0) {
					return e.slice(i, i + t.length) === t
				},
				ao = function(e) {
					let t = parseInt(e.slice(-3));
					const i = parseInt(e.slice(-6, -4)),
						s = parseInt(e.slice(-9, -7)),
						r = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
					if (!(Qt(t) && Qt(i) && Qt(s) && Qt(r))) throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
					return t += 1e3 * i, t += 6e4 * s, t += 36e5 * r
				},
				oo = function(e) {
					let t = 5381,
						i = e.length;
					for (; i;) t = 33 * t ^ e.charCodeAt(--i);
					return (t >>> 0).toString()
				};

			function lo(e, t, i) {
				return oo(e.toString()) + oo(t.toString()) + oo(i)
			}
			const ho = function(e, t, i) {
				let s = e[t],
					r = e[s.prevCC];
				if (!r || !r.new && s.new) return e.ccOffset = e.presentationOffset = s.start, void(s.new = !1);
				for (; null != (n = r) && n.new;) {
					var n;
					e.ccOffset += s.start - r.start, s.new = !1, r = e[(s = r).prevCC]
				}
				e.presentationOffset = i
			};

			function co(e, t, i, s, r, n, a) {
				const o = new so,
					l = ji(new Uint8Array(e)).trim().replace(ro, "\n").split("\n"),
					d = [],
					h = function(e, t = 1) {
						return Un(e, Nn, 1 / t)
					}(t.baseTime, t.timescale);
				let c, u = "00:00.000",
					f = 0,
					g = 0,
					p = !0;
				o.oncue = function(e) {
					const t = i[s];
					let n = i.ccOffset;
					const a = (f - h) / 9e4;
					null != t && t.new && (void 0 !== g ? n = i.ccOffset = t.start : ho(i, s, a)), a && (n = a - i.presentationOffset);
					const o = e.endTime - e.startTime,
						l = Wn(9e4 * (e.startTime + n - g), 9e4 * r) / 9e4;
					e.startTime = Math.max(l, 0), e.endTime = Math.max(l + o, 0);
					const c = e.text.trim();
					e.text = decodeURIComponent(encodeURIComponent(c)), e.id || (e.id = lo(e.startTime, e.endTime, c)), e.endTime > 0 && d.push(e)
				}, o.onparsingerror = function(e) {
					c = e
				}, o.onflush = function() {
					c ? a(c) : n(d)
				}, l.forEach(e => {
					if (p) {
						if (no(e, "X-TIMESTAMP-MAP=")) {
							p = !1, e.slice(16).split(",").forEach(e => {
								no(e, "LOCAL:") ? u = e.slice(6) : no(e, "MPEGTS:") && (f = parseInt(e.slice(7)))
							});
							try {
								g = ao(u) / 1e3
							} catch (t) {
								c = t
							}
							return
						}
						"" === e && (p = !1)
					}
					o.parse(e + "\n")
				}), o.flush()
			}
			const uo = "stpp.ttml.im1t",
				fo = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
				go = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
				po = {
					left: "start",
					center: "center",
					right: "end",
					start: "start",
					end: "end"
				};

			function mo(e, t, i, s) {
				const r = ts(new Uint8Array(e), ["mdat"]);
				if (0 === r.length) return void s(new Error("Could not parse IMSC1 mdat"));
				const n = r.map(e => ji(e)),
					a = function(e, t, i = 1, s = !1) {
						return Un(e, t, 1 / i, s)
					}(t.baseTime, 1, t.timescale);
				try {
					n.forEach(e => i(function(e, t) {
						const i = (new DOMParser).parseFromString(e, "text/xml").getElementsByTagName("tt")[0];
						if (!i) throw new Error("Invalid ttml");
						const s = {
								frameRate: 30,
								subFrameRate: 1,
								frameRateMultiplier: 0,
								tickRate: 0
							},
							r = Object.keys(s).reduce((e, t) => (e[t] = i.getAttribute(`ttp:${t}`) || s[t], e), {}),
							n = "preserve" !== i.getAttribute("xml:space"),
							a = yo(vo(i, "styling", "style")),
							o = yo(vo(i, "layout", "region")),
							l = vo(i, "body", "[begin]");
						return [].map.call(l, e => {
							const i = function e(t, i) {
								return [].slice.call(t.childNodes).reduce((t, s, r) => {
									var n;
									return "br" === s.nodeName && r ? t + "\n" : null != (n = s.childNodes) && n.length ? e(s, i) : i ? t + s.textContent.trim().replace(/\s+/g, " ") : t + s.textContent
								}, "")
							}(e, n);
							if (!i || !e.hasAttribute("begin")) return null;
							const s = bo(e.getAttribute("begin"), r),
								l = bo(e.getAttribute("dur"), r);
							let d = bo(e.getAttribute("end"), r);
							if (null === s) throw _o(e);
							if (null === d) {
								if (null === l) throw _o(e);
								d = s + l
							}
							const h = new Ya(s - t, d - t, i);
							h.id = lo(h.startTime, h.endTime, h.text);
							const c = function(e, t, i) {
									const s = "http://www.w3.org/ns/ttml#styling";
									let r = null;
									const n = null != e && e.hasAttribute("style") ? e.getAttribute("style") : null;
									n && i.hasOwnProperty(n) && (r = i[n]);
									return ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce((i, n) => {
										const a = Eo(t, s, n) || Eo(e, s, n) || Eo(r, s, n);
										return a && (i[n] = a), i
									}, {})
								}(o[e.getAttribute("region")], a[e.getAttribute("style")], a),
								{
									textAlign: u
								} = c;
							if (u) {
								const e = po[u];
								e && (h.lineAlign = e), h.align = u
							}
							return Xt(h, c), h
						}).filter(e => null !== e)
					}(e, a)))
				} catch (o) {
					s(o)
				}
			}

			function vo(e, t, i) {
				const s = e.getElementsByTagName(t)[0];
				return s ? [].slice.call(s.querySelectorAll(i)) : []
			}

			function yo(e) {
				return e.reduce((e, t) => {
					const i = t.getAttribute("xml:id");
					return i && (e[i] = t), e
				}, {})
			}

			function Eo(e, t, i) {
				return e && e.hasAttributeNS(t, i) ? e.getAttributeNS(t, i) : null
			}

			function _o(e) {
				return new Error(`Could not parse ttml timestamp ${e}`)
			}

			function bo(e, t) {
				if (!e) return null;
				let i = Xa(e);
				return null === i && (fo.test(e) ? i = function(e, t) {
					const i = fo.exec(e),
						s = (0 | i[4]) + (0 | i[5]) / t.subFrameRate;
					return 3600 * (0 | i[1]) + 60 * (0 | i[2]) + (0 | i[3]) + s / t.frameRate
				}(e, t) : go.test(e) && (i = function(e, t) {
					const i = go.exec(e),
						s = Number(i[1]);
					switch (i[2]) {
						case "h":
							return 3600 * s;
						case "m":
							return 60 * s;
						case "ms":
							return 1e3 * s;
						case "f":
							return s / t.frameRate;
						case "t":
							return s / t.tickRate
					}
					return s
				}(e, t))), i
			}

			function To(e, t) {
				return !!e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
			}
			class So {
				constructor(e) {
					this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners()
				}
				setStreamController(e) {
					this.streamController = e
				}
				destroy() {
					this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null
				}
				registerListeners() {
					const {
						hls: e
					} = this;
					e.on(Jt.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(Jt.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(Jt.MANIFEST_PARSED, this.onManifestParsed, this), e.on(Jt.BUFFER_CODECS, this.onBufferCodecs, this), e.on(Jt.MEDIA_DETACHING, this.onMediaDetaching, this)
				}
				unregisterListener() {
					const {
						hls: e
					} = this;
					e.off(Jt.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(Jt.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(Jt.MANIFEST_PARSED, this.onManifestParsed, this), e.off(Jt.BUFFER_CODECS, this.onBufferCodecs, this), e.off(Jt.MEDIA_DETACHING, this.onMediaDetaching, this)
				}
				onFpsDropLevelCapping(e, t) {
					const i = this.hls.levels[t.droppedLevel];
					this.isLevelAllowed(i) && this.restrictedLevels.push({
						bitrate: i.bitrate,
						height: i.height,
						width: i.width
					})
				}
				onMediaAttaching(e, t) {
					this.media = t.media instanceof HTMLVideoElement ? t.media : null, this.clientRect = null
				}
				onManifestParsed(e, t) {
					const i = this.hls;
					this.restrictedLevels = [], this.firstLevel = t.firstLevel, i.config.capLevelToPlayerSize && t.video && this.startCapping()
				}
				onBufferCodecs(e, t) {
					this.hls.config.capLevelToPlayerSize && t.video && this.startCapping()
				}
				onMediaDetaching() {
					this.stopCapping()
				}
				detectPlayerSize() {
					if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
						const e = this.hls.levels;
						if (e.length) {
							const t = this.hls;
							t.autoLevelCapping = this.getMaxLevel(e.length - 1), t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping
						}
					}
				}
				getMaxLevel(e) {
					const t = this.hls.levels;
					if (!t.length) return -1;
					const i = t.filter((t, i) => this.isLevelAllowed(t) && i <= e);
					return this.clientRect = null, So.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight)
				}
				startCapping() {
					this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
				}
				stopCapping() {
					this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0)
				}
				getDimensions() {
					if (this.clientRect) return this.clientRect;
					const e = this.media,
						t = {
							width: 0,
							height: 0
						};
					if (e) {
						const i = e.getBoundingClientRect();
						t.width = i.width, t.height = i.height, t.width || t.height || (t.width = i.right - i.left || e.width || 0, t.height = i.bottom - i.top || e.height || 0)
					}
					return this.clientRect = t, t
				}
				get mediaWidth() {
					return this.getDimensions().width * this.contentScaleFactor
				}
				get mediaHeight() {
					return this.getDimensions().height * this.contentScaleFactor
				}
				get contentScaleFactor() {
					let e = 1;
					if (!this.hls.config.ignoreDevicePixelRatio) try {
						e = self.devicePixelRatio
					} catch (t) {}
					return e
				}
				isLevelAllowed(e) {
					return !this.restrictedLevels.some(t => e.bitrate === t.bitrate && e.width === t.width && e.height === t.height)
				}
				static getMaxLevelByMediaSize(e, t, i) {
					if (null == e || !e.length) return -1;
					const s = (e, t) => !t || (e.width !== t.width || e.height !== t.height);
					let r = e.length - 1;
					for (let n = 0; n < e.length; n += 1) {
						const a = e[n];
						if ((a.width >= t || a.height >= i) && s(a, e[n + 1])) {
							r = n;
							break
						}
					}
					return r
				}
			}
			const Ao = "[eme]";
			class Lo {
				constructor(e) {
					this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = Lo.CDMCleanupPromise ? [Lo.CDMCleanupPromise] : [], this.onMediaEncrypted = this._onMediaEncrypted.bind(this), this.onWaitingForKey = this._onWaitingForKey.bind(this), this.debug = ni.debug.bind(ni, Ao), this.log = ni.log.bind(ni, Ao), this.warn = ni.warn.bind(ni, Ao), this.error = ni.error.bind(ni, Ao), this.hls = e, this.config = e.config, this.registerListeners()
				}
				destroy() {
					this.unregisterListeners(), this.onMediaDetached();
					const e = this.config;
					e.requestMediaKeySystemAccessFunc = null, e.licenseXhrSetup = e.licenseResponseCallback = void 0, e.drmSystems = e.drmSystemOptions = {}, this.hls = this.onMediaEncrypted = this.onWaitingForKey = this.keyIdToKeySessionPromise = null, this.config = null
				}
				registerListeners() {
					this.hls.on(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(Jt.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(Jt.MANIFEST_LOADED, this.onManifestLoaded, this)
				}
				unregisterListeners() {
					this.hls.off(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(Jt.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(Jt.MANIFEST_LOADED, this.onManifestLoaded, this)
				}
				getLicenseServerUrl(e) {
					const {
						drmSystems: t,
						widevineLicenseUrl: i
					} = this.config, s = t[e];
					if (s) return s.licenseUrl;
					if (e === bi.WIDEVINE && i) return i;
					throw new Error(`no license server URL configured for key-system "${e}"`)
				}
				getServerCertificateUrl(e) {
					const {
						drmSystems: t
					} = this.config, i = t[e];
					if (i) return i.serverCertificateUrl;
					this.log(`No Server Certificate in config.drmSystems["${e}"]`)
				}
				attemptKeySystemAccess(e) {
					const t = this.hls.levels,
						i = (e, t, i) => !!e && i.indexOf(e) === t,
						s = t.map(e => e.audioCodec).filter(i),
						r = t.map(e => e.videoCodec).filter(i);
					return s.length + r.length === 0 && r.push("avc1.42e01e"), new Promise((t, i) => {
						const n = e => {
							const a = e.shift();
							this.getMediaKeysPromise(a, s, r).then(e => t({
								keySystem: a,
								mediaKeys: e
							})).catch(t => {
								e.length ? n(e) : i(t instanceof EMEKeyError ? t : new EMEKeyError({
									type: Zt.KEY_SYSTEM_ERROR,
									details: ei.KEY_SYSTEM_NO_ACCESS,
									error: t,
									fatal: !0
								}, t.message))
							})
						};
						n(e)
					})
				}
				requestMediaKeySystemAccess(e, t) {
					const {
						requestMediaKeySystemAccessFunc: i
					} = this.config;
					if ("function" != typeof i) {
						let e = `Configured requestMediaKeySystemAccess is not a function ${i}`;
						return null === wi && "http:" === self.location.protocol && (e = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(new Error(e))
					}
					return i(e, t)
				}
				getMediaKeysPromise(e, t, i) {
					const s = function(e, t, i, s) {
							let r;
							switch (e) {
								case bi.FAIRPLAY:
									r = ["cenc", "sinf"];
									break;
								case bi.WIDEVINE:
								case bi.PLAYREADY:
									r = ["cenc"];
									break;
								case bi.CLEARKEY:
									r = ["cenc", "keyids"];
									break;
								default:
									throw new Error(`Unknown key-system: ${e}`)
							}
							return function(e, t, i, s) {
								return [{
									initDataTypes: e,
									persistentState: s.persistentState || "not-allowed",
									distinctiveIdentifier: s.distinctiveIdentifier || "not-allowed",
									sessionTypes: s.sessionTypes || [s.sessionType || "temporary"],
									audioCapabilities: t.map(e => ({
										contentType: `audio/mp4; codecs="${e}"`,
										robustness: s.audioRobustness || "",
										encryptionScheme: s.audioEncryptionScheme || null
									})),
									videoCapabilities: i.map(e => ({
										contentType: `video/mp4; codecs="${e}"`,
										robustness: s.videoRobustness || "",
										encryptionScheme: s.videoEncryptionScheme || null
									}))
								}]
							}(r, t, i, s)
						}(e, t, i, this.config.drmSystemOptions),
						r = this.keySystemAccessPromises[e];
					let n = null == r ? void 0 : r.keySystemAccess;
					if (!n) {
						this.log(`Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(s)}`), n = this.requestMediaKeySystemAccess(e, s);
						const t = this.keySystemAccessPromises[e] = {
							keySystemAccess: n
						};
						return n.catch(t => {
							this.log(`Failed to obtain access to key-system "${e}": ${t}`)
						}), n.then(i => {
							this.log(`Access for key-system "${i.keySystem}" obtained`);
							const s = this.fetchServerCertificate(e);
							return this.log(`Create media-keys for "${e}"`), t.mediaKeys = i.createMediaKeys().then(t => (this.log(`Media-keys created for "${e}"`), s.then(i => i ? this.setMediaKeysServerCertificate(t, e, i) : t))), t.mediaKeys.catch(t => {
								this.error(`Failed to create media-keys for "${e}"}: ${t}`)
							}), t.mediaKeys
						})
					}
					return n.then(() => r.mediaKeys)
				}
				createMediaKeySessionContext({
					decryptdata: e,
					keySystem: t,
					mediaKeys: i
				}) {
					this.log(`Creating key-system session "${t}" keyId: ${qi.hexDump(e.keyId||[])}`);
					const s = i.createSession(),
						r = {
							decryptdata: e,
							keySystem: t,
							mediaKeys: i,
							mediaKeysSession: s,
							keyStatus: "status-pending"
						};
					return this.mediaKeySessions.push(r), r
				}
				renewKeySession(e) {
					const t = e.decryptdata;
					if (t.pssh) {
						const i = this.createMediaKeySessionContext(e),
							s = this.getKeyIdString(t),
							r = "cenc";
						this.keyIdToKeySessionPromise[s] = this.generateRequestWithPreferredKeySession(i, r, t.pssh, "expired")
					} else this.warn("Could not renew expired session. Missing pssh initData.");
					this.removeSession(e)
				}
				getKeyIdString(e) {
					if (!e) throw new Error("Could not read keyId of undefined decryptdata");
					if (null === e.keyId) throw new Error("keyId is null");
					return qi.hexDump(e.keyId)
				}
				updateKeySession(e, t) {
					var i;
					const s = e.mediaKeysSession;
					return this.log(`Updating key-session "${s.sessionId}" for keyID ${qi.hexDump((null==(i=e.decryptdata)?void 0:i.keyId)||[])}\n      } (data length: ${t?t.byteLength:t})`), s.update(t)
				}
				selectKeySystemFormat(e) {
					const t = Object.keys(e.levelkeys || {});
					return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(t)), this.keyFormatPromise
				}
				getKeyFormatPromise(e) {
					return new Promise((t, i) => {
						const s = Ri(this.config),
							r = e.map(Si).filter(e => !!e && -1 !== s.indexOf(e));
						return this.getKeySystemSelectionPromise(r).then(({
							keySystem: e
						}) => {
							const s = Li(e);
							s ? t(s) : i(new Error(`Unable to find format for key-system "${e}"`))
						}).catch(i)
					})
				}
				loadKey(e) {
					const t = e.keyInfo.decryptdata,
						i = this.getKeyIdString(t),
						s = `(keyId: ${i} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
					this.log(`Starting session for key ${s}`);
					let r = this.keyIdToKeySessionPromise[i];
					return r || (r = this.keyIdToKeySessionPromise[i] = this.getKeySystemForKeyPromise(t).then(({
						keySystem: i,
						mediaKeys: r
					}) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${s}`), this.attemptSetMediaKeys(i, r).then(() => {
						this.throwIfDestroyed();
						const e = this.createMediaKeySessionContext({
							keySystem: i,
							mediaKeys: r,
							decryptdata: t
						});
						return this.generateRequestWithPreferredKeySession(e, "cenc", t.pssh, "playlist-key")
					})))).catch(e => this.handleError(e)), r
				}
				throwIfDestroyed(e = "Invalid state") {
					if (!this.hls) throw new Error("invalid state")
				}
				handleError(e) {
					this.hls && (this.error(e.message), e instanceof EMEKeyError ? this.hls.trigger(Jt.ERROR, e.data) : this.hls.trigger(Jt.ERROR, {
						type: Zt.KEY_SYSTEM_ERROR,
						details: ei.KEY_SYSTEM_NO_KEYS,
						error: e,
						fatal: !0
					}))
				}
				getKeySystemForKeyPromise(e) {
					const t = this.getKeyIdString(e),
						i = this.keyIdToKeySessionPromise[t];
					if (!i) {
						const t = Si(e.keyFormat),
							i = t ? [t] : Ri(this.config);
						return this.attemptKeySystemAccess(i)
					}
					return i
				}
				getKeySystemSelectionPromise(e) {
					if (e.length || (e = Ri(this.config)), 0 === e.length) throw new EMEKeyError({
						type: Zt.KEY_SYSTEM_ERROR,
						details: ei.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
						fatal: !0
					}, `Missing key-system license configuration options ${JSON.stringify({drmSystems:this.config.drmSystems})}`);
					return this.attemptKeySystemAccess(e)
				}
				_onMediaEncrypted(e) {
					const {
						initDataType: t,
						initData: i
					} = e;
					if (this.debug(`"${e.type}" event: init data type: "${t}"`), null === i) return;
					let s, r;
					if ("sinf" === t && this.config.drmSystems[bi.FAIRPLAY]) {
						const e = Xi(new Uint8Array(i));
						try {
							const t = yi(JSON.parse(e).sinf),
								i = rs(new Uint8Array(t));
							if (!i) return;
							s = i.subarray(8, 24), r = bi.FAIRPLAY
						} catch (d) {
							return void this.warn('Failed to parse sinf "encrypted" event message initData')
						}
					} else {
						const e = function(e) {
							if (!(e instanceof ArrayBuffer) || e.byteLength < 32) return null;
							const t = {
									version: 0,
									systemId: "",
									kids: null,
									data: null
								},
								i = new DataView(e),
								s = i.getUint32(0);
							if (e.byteLength !== s && s > 44) return null;
							if (1886614376 !== i.getUint32(4)) return null;
							if (t.version = i.getUint32(8) >>> 24, t.version > 1) return null;
							t.systemId = qi.hexDump(new Uint8Array(e, 12, 16));
							const r = i.getUint32(28);
							if (0 === t.version) {
								if (s - 32 < r) return null;
								t.data = new Uint8Array(e, 32, r)
							} else if (1 === t.version) {
								t.kids = [];
								for (let i = 0; i < r; i++) t.kids.push(new Uint8Array(e, 32 + 16 * i, 16))
							}
							return t
						}(i);
						if (null === e) return;
						0 === e.version && e.systemId === Ai.WIDEVINE && e.data && (s = e.data.subarray(8, 24)), r = function(e) {
							if (e === Ai.WIDEVINE) return bi.WIDEVINE
						}(e.systemId)
					}
					if (!r || !s) return;
					const n = qi.hexDump(s),
						{
							keyIdToKeySessionPromise: a,
							mediaKeySessions: o
						} = this;
					let l = a[n];
					for (let h = 0; h < o.length; h++) {
						const e = o[h],
							r = e.decryptdata;
						if (r.pssh || !r.keyId) continue;
						const d = qi.hexDump(r.keyId);
						if (n === d || -1 !== r.uri.replace(/-/g, "").indexOf(n)) {
							l = a[d], delete a[d], r.pssh = new Uint8Array(i), r.keyId = s, l = a[n] = l.then(() => this.generateRequestWithPreferredKeySession(e, t, i, "encrypted-event-key-match"));
							break
						}
					}
					l || (l = a[n] = this.getKeySystemSelectionPromise([r]).then(({
						keySystem: e,
						mediaKeys: r
					}) => {
						var a;
						this.throwIfDestroyed();
						const o = new fs("ISO-23001-7", n, null != (a = Li(e)) ? a : "");
						return o.pssh = new Uint8Array(i), o.keyId = s, this.attemptSetMediaKeys(e, r).then(() => {
							this.throwIfDestroyed();
							const s = this.createMediaKeySessionContext({
								decryptdata: o,
								keySystem: e,
								mediaKeys: r
							});
							return this.generateRequestWithPreferredKeySession(s, t, i, "encrypted-event-no-match")
						})
					})), l.catch(e => this.handleError(e))
				}
				_onWaitingForKey(e) {
					this.log(`"${e.type}" event`)
				}
				attemptSetMediaKeys(e, t) {
					const i = this.setMediaKeysQueue.slice();
					this.log(`Setting media-keys for "${e}"`);
					const s = Promise.all(i).then(() => {
						if (!this.media) throw new Error("Attempted to set mediaKeys without media element attached");
						return this.media.setMediaKeys(t)
					});
					return this.setMediaKeysQueue.push(s), s.then(() => {
						this.log(`Media-keys set for "${e}"`), i.push(s), this.setMediaKeysQueue = this.setMediaKeysQueue.filter(e => -1 === i.indexOf(e))
					})
				}
				generateRequestWithPreferredKeySession(e, t, i, s) {
					var r, n;
					const a = null == (r = this.config.drmSystems) ? void 0 : null == (n = r[e.keySystem]) ? void 0 : n.generateRequest;
					if (a) try {
						const s = a.call(this.hls, t, i, e);
						if (!s) throw new Error("Invalid response from configured generateRequest filter");
						t = s.initDataType, i = e.decryptdata.pssh = s.initData ? new Uint8Array(s.initData) : null
					} catch (c) {
						var o;
						if (this.warn(c.message), null != (o = this.hls) && o.config.debug) throw c
					}
					if (null === i) return this.log(`Skipping key-session request for "${s}" (no initData)`), Promise.resolve(e);
					const l = this.getKeyIdString(e.decryptdata);
					this.log(`Generating key-session request for "${s}": ${l} (init data type: ${t} length: ${i?i.byteLength:null})`);
					const d = new aa;
					e.mediaKeysSession.onmessage = t => {
						const i = e.mediaKeysSession;
						if (!i) return void d.emit("error", new Error("invalid state"));
						const {
							messageType: s,
							message: r
						} = t;
						this.log(`"${s}" message event for session "${i.sessionId}" message size: ${r.byteLength}`), "license-request" === s || "license-renewal" === s ? this.renewLicense(e, r).catch(e => {
							this.handleError(e), d.emit("error", e)
						}) : "license-release" === s ? e.keySystem === bi.FAIRPLAY && (this.updateKeySession(e, _i("acknowledged")), this.removeSession(e)) : this.warn(`unhandled media key message type "${s}"`)
					}, e.mediaKeysSession.onkeystatuseschange = t => {
						if (!e.mediaKeysSession) return void d.emit("error", new Error("invalid state"));
						this.onKeyStatusChange(e);
						const i = e.keyStatus;
						d.emit("keyStatus", i), "expired" === i && (this.warn(`${e.keySystem} expired for key ${l}`), this.renewKeySession(e))
					};
					const h = new Promise((e, t) => {
						d.on("error", t), d.on("keyStatus", i => {
							i.startsWith("usable") ? e() : "output-restricted" === i ? t(new EMEKeyError({
								type: Zt.KEY_SYSTEM_ERROR,
								details: ei.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
								fatal: !1
							}, "HDCP level output restricted")) : "internal-error" === i ? t(new EMEKeyError({
								type: Zt.KEY_SYSTEM_ERROR,
								details: ei.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
								fatal: !0
							}, `key status changed to "${i}"`)) : "expired" === i ? t(new Error("key expired while generating request")) : this.warn(`unhandled key status change "${i}"`)
						})
					});
					return e.mediaKeysSession.generateRequest(t, i).then(() => {
						var t;
						this.log(`Request generated for key-session "${null==(t=e.mediaKeysSession)?void 0:t.sessionId}" keyId: ${l}`)
					}).catch(e => {
						throw new EMEKeyError({
							type: Zt.KEY_SYSTEM_ERROR,
							details: ei.KEY_SYSTEM_NO_SESSION,
							error: e,
							fatal: !1
						}, `Error generating key-session request: ${e}`)
					}).then(() => h).catch(t => {
						throw d.removeAllListeners(), this.removeSession(e), t
					}).then(() => (d.removeAllListeners(), e))
				}
				onKeyStatusChange(e) {
					e.mediaKeysSession.keyStatuses.forEach((t, i) => {
						this.log(`key status change "${t}" for keyStatuses keyId: ${qi.hexDump("buffer"in i?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i))} session keyId: ${qi.hexDump(new Uint8Array(e.decryptdata.keyId||[]))} uri: ${e.decryptdata.uri}`), e.keyStatus = t
					})
				}
				fetchServerCertificate(e) {
					const t = this.config,
						i = new(0, t.loader)(t),
						s = this.getServerCertificateUrl(e);
					return s ? (this.log(`Fetching serverCertificate for "${e}"`), new Promise((r, n) => {
						const a = {
								responseType: "arraybuffer",
								url: s
							},
							o = t.certLoadPolicy.default,
							l = {
								loadPolicy: o,
								timeout: o.maxLoadTimeMs,
								maxRetry: 0,
								retryDelay: 0,
								maxRetryDelay: 0
							},
							d = {
								onSuccess: (e, t, i, s) => {
									r(e.data)
								},
								onError: (t, i, r, o) => {
									n(new EMEKeyError({
										type: Zt.KEY_SYSTEM_ERROR,
										details: ei.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
										fatal: !0,
										networkDetails: r,
										response: Yt({
											url: a.url,
											data: void 0
										}, t)
									}, `"${e}" certificate request failed (${s}). Status: ${t.code} (${t.text})`))
								},
								onTimeout: (t, i, r) => {
									n(new EMEKeyError({
										type: Zt.KEY_SYSTEM_ERROR,
										details: ei.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
										fatal: !0,
										networkDetails: r,
										response: {
											url: a.url,
											data: void 0
										}
									}, `"${e}" certificate request timed out (${s})`))
								},
								onAbort: (e, t, i) => {
									n(new Error("aborted"))
								}
							};
						i.load(a, l, d)
					})) : Promise.resolve()
				}
				setMediaKeysServerCertificate(e, t, i) {
					return new Promise((s, r) => {
						e.setServerCertificate(i).then(r => {
							this.log(`setServerCertificate ${r?"success":"not supported by CDM"} (${null==i?void 0:i.byteLength}) on "${t}"`), s(e)
						}).catch(e => {
							r(new EMEKeyError({
								type: Zt.KEY_SYSTEM_ERROR,
								details: ei.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
								error: e,
								fatal: !0
							}, e.message))
						})
					})
				}
				renewLicense(e, t) {
					return this.requestLicense(e, new Uint8Array(t)).then(t => this.updateKeySession(e, new Uint8Array(t)).catch(e => {
						throw new EMEKeyError({
							type: Zt.KEY_SYSTEM_ERROR,
							details: ei.KEY_SYSTEM_SESSION_UPDATE_FAILED,
							error: e,
							fatal: !0
						}, e.message)
					}))
				}
				setupLicenseXHR(e, t, i, s) {
					const r = this.config.licenseXhrSetup;
					return r ? Promise.resolve().then(() => {
						if (!i.decryptdata) throw new Error("Key removed");
						return r.call(this.hls, e, t, i, s)
					}).catch(n => {
						if (!i.decryptdata) throw n;
						return e.open("POST", t, !0), r.call(this.hls, e, t, i, s)
					}).then(i => {
						return e.readyState || e.open("POST", t, !0), {
							xhr: e,
							licenseChallenge: i || s
						}
					}) : (e.open("POST", t, !0), Promise.resolve({
						xhr: e,
						licenseChallenge: s
					}))
				}
				requestLicense(e, t) {
					const i = this.config.keyLoadPolicy.default;
					return new Promise((s, r) => {
						const n = this.getLicenseServerUrl(e.keySystem);
						this.log(`Sending license request to URL: ${n}`);
						const a = new XMLHttpRequest;
						a.responseType = "arraybuffer", a.onreadystatechange = () => {
							if (!this.hls || !e.mediaKeysSession) return r(new Error("invalid state"));
							if (4 === a.readyState)
								if (200 === a.status) {
									this._requestLicenseFailureCount = 0;
									let t = a.response;
									this.log(`License received ${t instanceof ArrayBuffer?t.byteLength:t}`);
									const i = this.config.licenseResponseCallback;
									if (i) try {
										t = i.call(this.hls, a, n, e)
									} catch (o) {
										this.error(o)
									}
									s(t)
								} else {
									const o = i.errorRetry,
										l = o ? o.maxNumRetry : 0;
									if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > l || a.status >= 400 && a.status < 500) r(new EMEKeyError({
										type: Zt.KEY_SYSTEM_ERROR,
										details: ei.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
										fatal: !0,
										networkDetails: a,
										response: {
											url: n,
											data: void 0,
											code: a.status,
											text: a.statusText
										}
									}, `License Request XHR failed (${n}). Status: ${a.status} (${a.statusText})`));
									else {
										const i = l - this._requestLicenseFailureCount + 1;
										this.warn(`Retrying license request, ${i} attempts left`), this.requestLicense(e, t).then(s, r)
									}
								}
						}, e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(), e.licenseXhr = a, this.setupLicenseXHR(a, n, e, t).then(({
							xhr: e,
							licenseChallenge: t
						}) => {
							e.send(t)
						})
					})
				}
				onMediaAttached(e, t) {
					if (!this.config.emeEnabled) return;
					const i = t.media;
					this.media = i, i.addEventListener("encrypted", this.onMediaEncrypted), i.addEventListener("waitingforkey", this.onWaitingForKey)
				}
				onMediaDetached() {
					const e = this.media,
						t = this.mediaKeySessions;
					e && (e.removeEventListener("encrypted", this.onMediaEncrypted), e.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, fs.clearKeyUriToKeyIdMap();
					const i = t.length;
					Lo.CDMCleanupPromise = Promise.all(t.map(e => this.removeSession(e)).concat(null == e ? void 0 : e.setMediaKeys(null).catch(t => {
						this.log(`Could not clear media keys: ${t}. media.src: ${null==e?void 0:e.src}`)
					}))).then(() => {
						i && (this.log("finished closing key sessions and clearing media keys"), t.length = 0)
					}).catch(t => {
						this.log(`Could not close sessions and clear media keys: ${t}. media.src: ${null==e?void 0:e.src}`)
					})
				}
				onManifestLoading() {
					this.keyFormatPromise = null
				}
				onManifestLoaded(e, {
					sessionKeys: t
				}) {
					if (t && this.config.emeEnabled && !this.keyFormatPromise) {
						const e = t.reduce((e, t) => (-1 === e.indexOf(t.keyFormat) && e.push(t.keyFormat), e), []);
						this.log(`Selecting key-system from session-keys ${e.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(e)
					}
				}
				removeSession(e) {
					const {
						mediaKeysSession: t,
						licenseXhr: i
					} = e;
					if (t) {
						this.log(`Remove licenses and keys and close session ${t.sessionId}`), t.onmessage = null, t.onkeystatuseschange = null, i && i.readyState !== XMLHttpRequest.DONE && i.abort(), e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0;
						const s = this.mediaKeySessions.indexOf(e);
						return s > -1 && this.mediaKeySessions.splice(s, 1), t.remove().catch(e => {
							this.log(`Could not remove session: ${e}`)
						}).then(() => t.close()).catch(e => {
							this.log(`Could not close session: ${e}`)
						})
					}
				}
			}
			Lo.CDMCleanupPromise = void 0;
			class EMEKeyError extends Error {
				constructor(e, t) {
					super(t), this.data = void 0, e.error || (e.error = new Error(t)), this.data = e, e.err = e.error
				}
			}
			const Ro = 1;
			var wo = {
				MANIFEST: "m",
				AUDIO: "a",
				VIDEO: "v",
				MUXED: "av",
				INIT: "i",
				CAPTION: "c",
				TIMED_TEXT: "tt",
				KEY: "k",
				OTHER: "o"
			};
			const ko = "h";
			class Io {
				constructor(e) {
					this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
						this.initialized && (this.starved = !0), this.buffering = !0
					}, this.onPlaying = () => {
						this.initialized || (this.initialized = !0), this.buffering = !1
					}, this.applyPlaylistData = e => {
						try {
							this.apply(e, {
								ot: wo.MANIFEST,
								su: !this.initialized
							})
						} catch (t) {
							ni.warn("Could not generate manifest CMCD data.", t)
						}
					}, this.applyFragmentData = e => {
						try {
							const t = e.frag,
								i = this.hls.levels[t.level],
								s = this.getObjectType(t),
								r = {
									d: 1e3 * t.duration,
									ot: s
								};
							s !== wo.VIDEO && s !== wo.AUDIO && s != wo.MUXED || (r.br = i.bitrate / 1e3, r.tb = this.getTopBandwidth(s) / 1e3, r.bl = this.getBufferLength(s)), this.apply(e, r)
						} catch (t) {
							ni.warn("Could not generate segment CMCD data.", t)
						}
					}, this.hls = e;
					const t = this.config = e.config,
						{
							cmcd: i
						} = t;
					null != i && (t.pLoader = this.createPlaylistLoader(), t.fLoader = this.createFragmentLoader(), this.sid = i.sessionId || Io.uuid(), this.cid = i.contentId, this.useHeaders = !0 === i.useHeaders, this.registerListeners())
				}
				registerListeners() {
					const e = this.hls;
					e.on(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(Jt.MEDIA_DETACHED, this.onMediaDetached, this), e.on(Jt.BUFFER_CREATED, this.onBufferCreated, this)
				}
				unregisterListeners() {
					const e = this.hls;
					e.off(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(Jt.MEDIA_DETACHED, this.onMediaDetached, this), e.off(Jt.BUFFER_CREATED, this.onBufferCreated, this)
				}
				destroy() {
					this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null
				}
				onMediaAttached(e, t) {
					this.media = t.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying)
				}
				onMediaDetached() {
					this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null)
				}
				onBufferCreated(e, t) {
					var i, s;
					this.audioBuffer = null == (i = t.tracks.audio) ? void 0 : i.buffer, this.videoBuffer = null == (s = t.tracks.video) ? void 0 : s.buffer
				}
				createData() {
					var e;
					return {
						v: Ro,
						sf: ko,
						sid: this.sid,
						cid: this.cid,
						pr: null == (e = this.media) ? void 0 : e.playbackRate,
						mtp: this.hls.bandwidthEstimate / 1e3
					}
				}
				apply(e, t = {}) {
					Xt(t, this.createData());
					const i = t.ot === wo.INIT || t.ot === wo.VIDEO || t.ot === wo.MUXED;
					if (this.starved && i && (t.bs = !0, t.su = !0, this.starved = !1), null == t.su && (t.su = this.buffering), this.useHeaders) {
						const i = Io.toHeaders(t);
						if (!Object.keys(i).length) return;
						e.headers || (e.headers = {}), Xt(e.headers, i)
					} else {
						const i = Io.toQuery(t);
						if (!i) return;
						e.url = Io.appendQueryToUri(e.url, i)
					}
				}
				getObjectType(e) {
					const {
						type: t
					} = e;
					return "subtitle" === t ? wo.TIMED_TEXT : "initSegment" === e.sn ? wo.INIT : "audio" === t ? wo.AUDIO : "main" === t ? this.hls.audioTracks.length ? wo.VIDEO : wo.MUXED : void 0
				}
				getTopBandwidth(e) {
					let t, i = 0;
					const s = this.hls;
					if (e === wo.AUDIO) t = s.audioTracks;
					else {
						const e = s.maxAutoLevel,
							i = e > -1 ? e + 1 : s.levels.length;
						t = s.levels.slice(0, i)
					}
					for (const r of t) r.bitrate > i && (i = r.bitrate);
					return i > 0 ? i : NaN
				}
				getBufferLength(e) {
					const t = this.hls.media,
						i = e === wo.AUDIO ? this.audioBuffer : this.videoBuffer;
					return i && t ? 1e3 * Br.bufferInfo(i, t.currentTime, this.config.maxBufferHole).len : NaN
				}
				createPlaylistLoader() {
					const {
						pLoader: e
					} = this.config, t = this.applyPlaylistData, i = e || this.config.loader;
					return class {
						constructor(e) {
							this.loader = void 0, this.loader = new i(e)
						}
						get stats() {
							return this.loader.stats
						}
						get context() {
							return this.loader.context
						}
						destroy() {
							this.loader.destroy()
						}
						abort() {
							this.loader.abort()
						}
						load(e, i, s) {
							t(e), this.loader.load(e, i, s)
						}
					}
				}
				createFragmentLoader() {
					const {
						fLoader: e
					} = this.config, t = this.applyFragmentData, i = e || this.config.loader;
					return class {
						constructor(e) {
							this.loader = void 0, this.loader = new i(e)
						}
						get stats() {
							return this.loader.stats
						}
						get context() {
							return this.loader.context
						}
						destroy() {
							this.loader.destroy()
						}
						abort() {
							this.loader.abort()
						}
						load(e, i, s) {
							t(e), this.loader.load(e, i, s)
						}
					}
				}
				static uuid() {
					const e = URL.createObjectURL(new Blob),
						t = e.toString();
					return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1)
				}
				static serialize(e) {
					const t = [],
						i = e => !Number.isNaN(e) && null != e && "" !== e && !1 !== e,
						s = e => Math.round(e),
						r = e => 100 * s(e / 100),
						n = {
							br: s,
							d: s,
							bl: r,
							dl: r,
							mtp: r,
							nor: e => encodeURIComponent(e),
							rtp: r,
							tb: s
						},
						a = Object.keys(e || {}).sort();
					for (const o of a) {
						let s = e[o];
						if (!i(s)) continue;
						if ("v" === o && 1 === s) continue;
						if ("pr" == o && 1 === s) continue;
						const r = n[o];
						r && (s = r(s));
						const a = typeof s;
						let l;
						l = "ot" === o || "sf" === o || "st" === o ? `${o}=${s}` : "boolean" === a ? o : "number" === a ? `${o}=${s}` : `${o}=${JSON.stringify(s)}`, t.push(l)
					}
					return t.join(",")
				}
				static toHeaders(e) {
					const t = Object.keys(e),
						i = {},
						s = ["Object", "Request", "Session", "Status"],
						r = [{}, {}, {}, {}],
						n = {
							br: 0,
							d: 0,
							ot: 0,
							tb: 0,
							bl: 1,
							dl: 1,
							mtp: 1,
							nor: 1,
							nrr: 1,
							su: 1,
							cid: 2,
							pr: 2,
							sf: 2,
							sid: 2,
							st: 2,
							v: 2,
							bs: 3,
							rtp: 3
						};
					for (const a of t) {
						r[null != n[a] ? n[a] : 1][a] = e[a]
					}
					for (let a = 0; a < r.length; a++) {
						const e = Io.serialize(r[a]);
						e && (i[`CMCD-${s[a]}`] = e)
					}
					return i
				}
				static toQuery(e) {
					return `CMCD=${encodeURIComponent(Io.serialize(e))}`
				}
				static appendQueryToUri(e, t) {
					if (!t) return e;
					const i = e.includes("?") ? "&" : "?";
					return `${e}${i}${t}`
				}
			}
			const Do = 3e5;

			function Co(e, t, i, s) {
				e && Object.keys(t).forEach(r => {
					const n = e.filter(e => e.groupId === r).map(e => {
						const n = Xt({}, e);
						return n.details = void 0, n.attrs = new li(n.attrs), n.url = n.attrs.URI = Po(e.url, e.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", i), n.groupId = n.attrs["GROUP-ID"] = t[r], n.attrs["PATHWAY-ID"] = s, n
					});
					e.push(...n)
				})
			}

			function Po(e, t, i, s) {
				const {
					HOST: r,
					PARAMS: n,
					[i]: a
				} = s;
				let o;
				t && (o = null == a ? void 0 : a[t]) && (e = o);
				const l = new self.URL(e);
				return r && !o && (l.host = r), n && Object.keys(n).sort().forEach(e => {
					e && l.searchParams.set(e, n[e])
				}), l.href
			}
			const Oo = /^age:\s*[\d.]+\s*$/im;
			class xo {
				constructor(e) {
					this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = e && e.xhrSetup || null, this.stats = new ci, this.retryDelay = 0
				}
				destroy() {
					this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null
				}
				abortInternal() {
					const e = this.loader;
					self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e && (e.onreadystatechange = null, e.onprogress = null, 4 !== e.readyState && (this.stats.aborted = !0, e.abort()))
				}
				abort() {
					var e;
					this.abortInternal(), null != (e = this.callbacks) && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
				}
				load(e, t, i) {
					if (this.stats.loading.start) throw new Error("Loader can only be used once.");
					this.stats.loading.start = self.performance.now(), this.context = e, this.config = t, this.callbacks = i, this.loadInternal()
				}
				loadInternal() {
					const {
						config: e,
						context: t
					} = this;
					if (!e) return;
					const i = this.loader = new self.XMLHttpRequest,
						s = this.stats;
					s.loading.first = 0, s.loaded = 0;
					const r = this.xhrSetup;
					r ? Promise.resolve().then(() => {
						if (!this.stats.aborted) return r(i, t.url)
					}).catch(e => (i.open("GET", t.url, !0), r(i, t.url))).then(() => {
						this.stats.aborted || this.openAndSendXhr(i, t, e)
					}).catch(e => {
						this.callbacks.onError({
							code: i.status,
							text: e.message
						}, t, i, s)
					}) : this.openAndSendXhr(i, t, e)
				}
				openAndSendXhr(e, t, i) {
					e.readyState || e.open("GET", t.url, !0);
					const s = this.context.headers,
						{
							maxTimeToFirstByteMs: r,
							maxLoadTimeMs: n
						} = i.loadPolicy;
					if (s)
						for (const a in s) e.setRequestHeader(a, s[a]);
					t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, self.clearTimeout(this.requestTimeout), i.timeout = r && Qt(r) ? r : n, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), i.timeout), e.send()
				}
				readystatechange() {
					const {
						context: e,
						loader: t,
						stats: i
					} = this;
					if (!e || !t) return;
					const s = t.readyState,
						r = this.config;
					if (!i.aborted && s >= 2 && (0 === i.loading.first && (i.loading.first = Math.max(self.performance.now(), i.loading.start), r.timeout !== r.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), r.timeout = r.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.loadPolicy.maxLoadTimeMs - (i.loading.first - i.loading.start)))), 4 === s)) {
						self.clearTimeout(this.requestTimeout), t.onreadystatechange = null, t.onprogress = null;
						const s = t.status,
							n = "text" !== t.responseType;
						if (s >= 200 && s < 300 && (n && t.response || null !== t.responseText)) {
							i.loading.end = Math.max(self.performance.now(), i.loading.first);
							const r = n ? t.response : t.responseText,
								a = "arraybuffer" === t.responseType ? r.byteLength : r.length;
							if (i.loaded = i.total = a, i.bwEstimate = 8e3 * i.total / (i.loading.end - i.loading.first), !this.callbacks) return;
							const o = this.callbacks.onProgress;
							if (o && o(i, e, r, t), !this.callbacks) return;
							const l = {
								url: t.responseURL,
								data: r,
								code: s
							};
							this.callbacks.onSuccess(l, i, e, t)
						} else {
							const n = r.loadPolicy.errorRetry;
							gr(n, i.retry, !1, s) ? this.retry(n) : (ni.error(`${s} while loading ${e.url}`), this.callbacks.onError({
								code: s,
								text: t.statusText
							}, e, t, i))
						}
					}
				}
				loadtimeout() {
					var e;
					const t = null == (e = this.config) ? void 0 : e.loadPolicy.timeoutRetry;
					if (gr(t, this.stats.retry, !0)) this.retry(t);
					else {
						ni.warn(`timeout while loading ${this.context.url}`);
						const e = this.callbacks;
						e && (this.abortInternal(), e.onTimeout(this.stats, this.context, this.loader))
					}
				}
				retry(e) {
					const {
						context: t,
						stats: i
					} = this;
					this.retryDelay = ur(e, i.retry), i.retry++, ni.warn(`${status?"HTTP Status "+status:"Timeout"} while loading ${t.url}, retrying ${i.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay)
				}
				loadprogress(e) {
					const t = this.stats;
					t.loaded = e.loaded, e.lengthComputable && (t.total = e.total)
				}
				getCacheAge() {
					let e = null;
					if (this.loader && Oo.test(this.loader.getAllResponseHeaders())) {
						const t = this.loader.getResponseHeader("age");
						e = t ? parseFloat(t) : null
					}
					return e
				}
				getResponseHeader(e) {
					return this.loader && new RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e) : null
				}
			}
			const Mo = /(\d+)-(\d+)\/(\d+)/;
			class Fo {
				constructor(e) {
					this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e.fetchSetup || No, this.controller = new self.AbortController, this.stats = new ci
				}
				destroy() {
					this.loader = this.callbacks = null, this.abortInternal()
				}
				abortInternal() {
					const e = this.response;
					null != e && e.ok || (this.stats.aborted = !0, this.controller.abort())
				}
				abort() {
					var e;
					this.abortInternal(), null != (e = this.callbacks) && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
				}
				load(e, t, i) {
					const s = this.stats;
					if (s.loading.start) throw new Error("Loader can only be used once.");
					s.loading.start = self.performance.now();
					const r = function(e, t) {
							const i = {
								method: "GET",
								mode: "cors",
								credentials: "same-origin",
								signal: t,
								headers: new self.Headers(Xt({}, e.headers))
							};
							e.rangeEnd && i.headers.set("Range", "bytes=" + e.rangeStart + "-" + String(e.rangeEnd - 1));
							return i
						}(e, this.controller.signal),
						n = i.onProgress,
						a = "arraybuffer" === e.responseType,
						o = a ? "byteLength" : "length",
						{
							maxTimeToFirstByteMs: l,
							maxLoadTimeMs: d
						} = t.loadPolicy;
					this.context = e, this.config = t, this.callbacks = i, this.request = this.fetchSetup(e, r), self.clearTimeout(this.requestTimeout), t.timeout = l && Qt(l) ? l : d, this.requestTimeout = self.setTimeout(() => {
						this.abortInternal(), i.onTimeout(s, e, this.response)
					}, t.timeout), self.fetch(this.request).then(r => {
						this.response = this.loader = r;
						const o = Math.max(self.performance.now(), s.loading.start);
						if (self.clearTimeout(this.requestTimeout), t.timeout = d, this.requestTimeout = self.setTimeout(() => {
								this.abortInternal(), i.onTimeout(s, e, this.response)
							}, d - (o - s.loading.start)), !r.ok) {
							const {
								status: e,
								statusText: t
							} = r;
							throw new FetchError(t || "fetch, bad network response", e, r)
						}
						return s.loading.first = o, s.total = function(e) {
							const t = e.get("Content-Range");
							if (t) {
								const e = function(e) {
									const t = Mo.exec(e);
									if (t) return parseInt(t[2]) - parseInt(t[1]) + 1
								}(t);
								if (Qt(e)) return e
							}
							const i = e.get("Content-Length");
							if (i) return parseInt(i)
						}(r.headers) || s.total, n && Qt(t.highWaterMark) ? this.loadProgressively(r, s, e, t.highWaterMark, n) : a ? r.arrayBuffer() : "json" === e.responseType ? r.json() : r.text()
					}).then(r => {
						const {
							response: a
						} = this;
						self.clearTimeout(this.requestTimeout), s.loading.end = Math.max(self.performance.now(), s.loading.first);
						const l = r[o];
						l && (s.loaded = s.total = l);
						const d = {
							url: a.url,
							data: r,
							code: a.status
						};
						n && !Qt(t.highWaterMark) && n(s, e, r, a), i.onSuccess(d, s, e, a)
					}).catch(t => {
						if (self.clearTimeout(this.requestTimeout), s.aborted) return;
						const r = t && t.code || 0,
							n = t ? t.message : null;
						i.onError({
							code: r,
							text: n
						}, e, t ? t.details : null, s)
					})
				}
				getCacheAge() {
					let e = null;
					if (this.response) {
						const t = this.response.headers.get("age");
						e = t ? parseFloat(t) : null
					}
					return e
				}
				getResponseHeader(e) {
					return this.response ? this.response.headers.get(e) : null
				}
				loadProgressively(e, t, i, s = 0, r) {
					const n = new ya,
						a = e.body.getReader(),
						o = () => a.read().then(a => {
							if (a.done) return n.dataLength && r(t, i, n.flush(), e), Promise.resolve(new ArrayBuffer(0));
							const l = a.value,
								d = l.length;
							return t.loaded += d, d < s || n.dataLength ? (n.push(l), n.dataLength >= s && r(t, i, n.flush(), e)) : r(t, i, l, e), o()
						}).catch(() => Promise.reject());
					return o()
				}
			}

			function No(e, t) {
				return new self.Request(e.url, t)
			}
			class FetchError extends Error {
				constructor(e, t, i) {
					super(e), this.code = void 0, this.details = void 0, this.code = t, this.details = i
				}
			}
			const Uo = /\s/,
				Bo = Yt(Yt({
					autoStartLoad: !0,
					startPosition: -1,
					defaultAudioCodec: void 0,
					debug: !1,
					capLevelOnFPSDrop: !1,
					capLevelToPlayerSize: !1,
					ignoreDevicePixelRatio: !1,
					initialLiveManifestSize: 1,
					maxBufferLength: 30,
					backBufferLength: 1 / 0,
					maxBufferSize: 6e7,
					maxBufferHole: .1,
					highBufferWatchdogPeriod: 2,
					nudgeOffset: .1,
					nudgeMaxRetry: 3,
					maxFragLookUpTolerance: .25,
					liveSyncDurationCount: 3,
					liveMaxLatencyDurationCount: 1 / 0,
					liveSyncDuration: void 0,
					liveMaxLatencyDuration: void 0,
					maxLiveSyncPlaybackRate: 1,
					liveDurationInfinity: !1,
					liveBackBufferLength: null,
					maxMaxBufferLength: 600,
					enableWorker: !0,
					workerPath: null,
					enableSoftwareAES: !0,
					startLevel: void 0,
					startFragPrefetch: !1,
					fpsDroppedMonitoringPeriod: 5e3,
					fpsDroppedMonitoringThreshold: .2,
					appendErrorMaxRetry: 3,
					loader: xo,
					fLoader: void 0,
					pLoader: void 0,
					xhrSetup: void 0,
					licenseXhrSetup: void 0,
					licenseResponseCallback: void 0,
					abrController: class {
						constructor(e) {
							this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = -1, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = e;
							const t = e.config;
							this.bwEstimator = new va(t.abrEwmaSlowVoD, t.abrEwmaFastVoD, t.abrEwmaDefaultEstimate), this.registerListeners()
						}
						registerListeners() {
							const {
								hls: e
							} = this;
							e.on(Jt.FRAG_LOADING, this.onFragLoading, this), e.on(Jt.FRAG_LOADED, this.onFragLoaded, this), e.on(Jt.FRAG_BUFFERED, this.onFragBuffered, this), e.on(Jt.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(Jt.LEVEL_LOADED, this.onLevelLoaded, this)
						}
						unregisterListeners() {
							const {
								hls: e
							} = this;
							e.off(Jt.FRAG_LOADING, this.onFragLoading, this), e.off(Jt.FRAG_LOADED, this.onFragLoaded, this), e.off(Jt.FRAG_BUFFERED, this.onFragBuffered, this), e.off(Jt.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(Jt.LEVEL_LOADED, this.onLevelLoaded, this)
						}
						destroy() {
							this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null
						}
						onFragLoading(e, t) {
							var i;
							const s = t.frag;
							this.ignoreFragment(s) || (this.fragCurrent = s, this.partCurrent = null != (i = t.part) ? i : null, this.clearTimer(), this.timer = self.setInterval(this.onCheck, 100))
						}
						onLevelSwitching(e, t) {
							this.clearTimer()
						}
						getTimeToLoadFrag(e, t, i, s) {
							return e + i / t + (s ? this.lastLevelLoadSec : 0)
						}
						onLevelLoaded(e, t) {
							const i = this.hls.config,
								{
									total: s,
									bwEstimate: r
								} = t.stats;
							Qt(s) && Qt(r) && (this.lastLevelLoadSec = 8 * s / r), t.details.live ? this.bwEstimator.update(i.abrEwmaSlowLive, i.abrEwmaFastLive) : this.bwEstimator.update(i.abrEwmaSlowVoD, i.abrEwmaFastVoD)
						}
						_abandonRulesCheck() {
							const {
								fragCurrent: e,
								partCurrent: t,
								hls: i
							} = this, {
								autoLevelEnabled: s,
								media: r
							} = i;
							if (!e || !r) return;
							const n = performance.now(),
								a = t ? t.stats : e.stats,
								o = t ? t.duration : e.duration,
								l = n - a.loading.start;
							if (a.aborted || a.loaded && a.loaded === a.total || 0 === e.level) return this.clearTimer(), void(this._nextAutoLevel = -1);
							if (!s || r.paused || !r.playbackRate || !r.readyState) return;
							const d = i.mainForwardBufferInfo;
							if (null === d) return;
							const h = this.bwEstimator.getEstimateTTFB(),
								c = Math.abs(r.playbackRate);
							if (l <= Math.max(h, o / (2 * c) * 1e3)) return;
							const u = d.len / c;
							if (u >= 2 * o / c) return;
							const f = a.loading.first ? a.loading.first - a.loading.start : -1,
								g = a.loaded && f > -1,
								p = this.bwEstimator.getEstimate(),
								{
									levels: m,
									minAutoLevel: v
								} = i,
								y = m[e.level],
								E = a.total || Math.max(a.loaded, Math.round(o * y.maxBitrate / 8));
							let _ = l - f;
							_ < 1 && g && (_ = Math.min(l, 8 * a.loaded / p));
							const b = g ? 1e3 * a.loaded / _ : 0,
								T = b ? (E - a.loaded) / b : 8 * E / p + h / 1e3;
							if (T <= u) return;
							const S = b ? 8 * b : p;
							let A, L = Number.POSITIVE_INFINITY;
							for (A = e.level - 1; A > v; A--) {
								const e = m[A].maxBitrate;
								if ((L = this.getTimeToLoadFrag(h / 1e3, S, o * e, !m[A].details)) < u) break
							}
							L >= T || L > 10 * o || (i.nextLoadLevel = A, g ? this.bwEstimator.sample(l - Math.min(h, f), a.loaded) : this.bwEstimator.sampleTTFB(l), this.clearTimer(), ni.warn(`[abr] Fragment ${e.sn}${t?" part "+t.index:""} of level ${e.level} is loading too slowly;\n      Time to underbuffer: ${u.toFixed(3)} s\n      Estimated load time for current fragment: ${T.toFixed(3)} s\n      Estimated load time for down switch fragment: ${L.toFixed(3)} s\n      TTFB estimate: ${f}\n      Current BW estimate: ${Qt(p)?(p/1024).toFixed(3):"Unknown"} Kb/s\n      New BW estimate: ${(this.bwEstimator.getEstimate()/1024).toFixed(3)} Kb/s\n      Aborting and switching to level ${A}`), e.loader && (this.fragCurrent = this.partCurrent = null, e.abortRequests()), i.trigger(Jt.FRAG_LOAD_EMERGENCY_ABORTED, {
								frag: e,
								part: t,
								stats: a
							}))
						}
						onFragLoaded(e, {
							frag: t,
							part: i
						}) {
							const s = i ? i.stats : t.stats;
							if (t.type === Us.MAIN && this.bwEstimator.sampleTTFB(s.loading.first - s.loading.start), !this.ignoreFragment(t)) {
								if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
									const e = i ? i.duration : t.duration,
										r = this.hls.levels[t.level],
										n = (r.loaded ? r.loaded.bytes : 0) + s.loaded,
										a = (r.loaded ? r.loaded.duration : 0) + e;
									r.loaded = {
										bytes: n,
										duration: a
									}, r.realBitrate = Math.round(8 * n / a)
								}
								if (t.bitrateTest) {
									const e = {
										stats: s,
										frag: t,
										part: i,
										id: t.type
									};
									this.onFragBuffered(Jt.FRAG_BUFFERED, e), t.bitrateTest = !1
								}
							}
						}
						onFragBuffered(e, t) {
							const {
								frag: i,
								part: s
							} = t, r = null != s && s.stats.loaded ? s.stats : i.stats;
							if (r.aborted) return;
							if (this.ignoreFragment(i)) return;
							const n = r.parsing.end - r.loading.start - Math.min(r.loading.first - r.loading.start, this.bwEstimator.getEstimateTTFB());
							this.bwEstimator.sample(n, r.loaded), r.bwEstimate = this.bwEstimator.getEstimate(), i.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0
						}
						ignoreFragment(e) {
							return e.type !== Us.MAIN || "initSegment" === e.sn
						}
						clearTimer() {
							self.clearInterval(this.timer)
						}
						get nextAutoLevel() {
							const e = this._nextAutoLevel,
								t = this.bwEstimator;
							if (-1 !== e && !t.canEstimate()) return e;
							let i = this.getNextABRAutoLevel();
							if (-1 !== e) {
								const t = this.hls.levels;
								if (t.length > Math.max(e, i) && t[e].loadError <= t[i].loadError) return e
							}
							return -1 !== e && (i = Math.min(e, i)), i
						}
						getNextABRAutoLevel() {
							const {
								fragCurrent: e,
								partCurrent: t,
								hls: i
							} = this, {
								maxAutoLevel: s,
								config: r,
								minAutoLevel: n,
								media: a
							} = i, o = t ? t.duration : e ? e.duration : 0, l = a && 0 !== a.playbackRate ? Math.abs(a.playbackRate) : 1, d = this.bwEstimator ? this.bwEstimator.getEstimate() : r.abrEwmaDefaultEstimate, h = i.mainForwardBufferInfo, c = (h ? h.len : 0) / l;
							let u = this.findBestLevel(d, n, s, c, r.abrBandWidthFactor, r.abrBandWidthUpFactor);
							if (u >= 0) return u;
							ni.trace(`[abr] ${c?"rebuffering expected":"buffer is empty"}, finding optimal quality level`);
							let f = o ? Math.min(o, r.maxStarvationDelay) : r.maxStarvationDelay,
								g = r.abrBandWidthFactor,
								p = r.abrBandWidthUpFactor;
							if (!c) {
								const e = this.bitrateTestDelay;
								if (e) {
									f = (o ? Math.min(o, r.maxLoadingDelay) : r.maxLoadingDelay) - e, ni.trace(`[abr] bitrate test took ${Math.round(1e3*e)}ms, set first fragment max fetchDuration to ${Math.round(1e3*f)} ms`), g = p = 1
								}
							}
							return u = this.findBestLevel(d, n, s, c + f, g, p), Math.max(u, 0)
						}
						findBestLevel(e, t, i, s, r, n) {
							var a;
							const {
								fragCurrent: o,
								partCurrent: l,
								lastLoadedFragLevel: d
							} = this, {
								levels: h
							} = this.hls, c = h[d], u = !(null == c || null == (a = c.details) || !a.live), f = null == c ? void 0 : c.codecSet, g = l ? l.duration : o ? o.duration : 0, p = this.bwEstimator.getEstimateTTFB() / 1e3;
							let m = t,
								v = -1;
							for (let y = i; y >= t; y--) {
								const t = h[y];
								if (!t || f && t.codecSet !== f) {
									t && (m = Math.min(y, m), v = Math.max(y, v));
									continue
								} - 1 !== v && ni.trace(`[abr] Skipped level(s) ${m}-${v} with CODECS:"${h[v].attrs.CODECS}"; not compatible with "${c.attrs.CODECS}"`);
								const i = t.details,
									a = (l ? null == i ? void 0 : i.partTarget : null == i ? void 0 : i.averagetargetduration) || g;
								let o;
								o = y <= d ? r * e : n * e;
								const E = h[y].maxBitrate,
									_ = this.getTimeToLoadFrag(p, o, E * a, void 0 === i);
								if (ni.trace(`[abr] level:${y} adjustedbw-bitrate:${Math.round(o-E)} avgDuration:${a.toFixed(1)} maxFetchDuration:${s.toFixed(1)} fetchDuration:${_.toFixed(1)}`), o > E && (0 === _ || !Qt(_) || u && !this.bitrateTestDelay || _ < s)) return y
							}
							return -1
						}
						set nextAutoLevel(e) {
							this._nextAutoLevel = e
						}
					},
					bufferController: class {
						constructor(e) {
							this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = () => {
								const {
									media: e,
									mediaSource: t
								} = this;
								ni.log("[buffer-controller]: Media source opened"), e && (e.removeEventListener("emptied", this._onMediaEmptied), this.updateMediaElementDuration(), this.hls.trigger(Jt.MEDIA_ATTACHED, {
									media: e
								})), t && t.removeEventListener("sourceopen", this._onMediaSourceOpen), this.checkPendingTracks()
							}, this._onMediaSourceClose = () => {
								ni.log("[buffer-controller]: Media source closed")
							}, this._onMediaSourceEnded = () => {
								ni.log("[buffer-controller]: Media source ended")
							}, this._onMediaEmptied = () => {
								const {
									media: e,
									_objectUrl: t
								} = this;
								e && e.src !== t && ni.error(`Media element src was set while attaching MediaSource (${t} > ${e.src})`)
							}, this.hls = e, this._initSourceBuffer(), this.registerListeners()
						}
						hasSourceTypes() {
							return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
						}
						destroy() {
							this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null
						}
						registerListeners() {
							const {
								hls: e
							} = this;
							e.on(Jt.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.on(Jt.MANIFEST_PARSED, this.onManifestParsed, this), e.on(Jt.BUFFER_RESET, this.onBufferReset, this), e.on(Jt.BUFFER_APPENDING, this.onBufferAppending, this), e.on(Jt.BUFFER_CODECS, this.onBufferCodecs, this), e.on(Jt.BUFFER_EOS, this.onBufferEos, this), e.on(Jt.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(Jt.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(Jt.FRAG_PARSED, this.onFragParsed, this), e.on(Jt.FRAG_CHANGED, this.onFragChanged, this)
						}
						unregisterListeners() {
							const {
								hls: e
							} = this;
							e.off(Jt.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.off(Jt.MANIFEST_PARSED, this.onManifestParsed, this), e.off(Jt.BUFFER_RESET, this.onBufferReset, this), e.off(Jt.BUFFER_APPENDING, this.onBufferAppending, this), e.off(Jt.BUFFER_CODECS, this.onBufferCodecs, this), e.off(Jt.BUFFER_EOS, this.onBufferEos, this), e.off(Jt.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(Jt.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(Jt.FRAG_PARSED, this.onFragParsed, this), e.off(Jt.FRAG_CHANGED, this.onFragChanged, this)
						}
						_initSourceBuffer() {
							this.sourceBuffer = {}, this.operationQueue = new La(this.sourceBuffer), this.listeners = {
								audio: [],
								video: [],
								audiovideo: []
							}, this.lastMpegAudioChunk = null
						}
						onManifestLoading() {
							this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null
						}
						onManifestParsed(e, t) {
							let i = 2;
							(t.audio && !t.video || !t.altAudio) && (i = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = i, ni.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`)
						}
						onMediaAttaching(e, t) {
							const i = this.media = t.media;
							if (i && Ra) {
								const e = this.mediaSource = new Ra;
								e.addEventListener("sourceopen", this._onMediaSourceOpen), e.addEventListener("sourceended", this._onMediaSourceEnded), e.addEventListener("sourceclose", this._onMediaSourceClose), i.src = self.URL.createObjectURL(e), this._objectUrl = i.src, i.addEventListener("emptied", this._onMediaEmptied)
							}
						}
						onMediaDetaching() {
							const {
								media: e,
								mediaSource: t,
								_objectUrl: i
							} = this;
							if (t) {
								if (ni.log("[buffer-controller]: media source detaching"), "open" === t.readyState) try {
									t.endOfStream()
								} catch (pd) {
									ni.warn(`[buffer-controller]: onMediaDetaching: ${pd.message} while calling endOfStream`)
								}
								this.onBufferReset(), t.removeEventListener("sourceopen", this._onMediaSourceOpen), t.removeEventListener("sourceended", this._onMediaSourceEnded), t.removeEventListener("sourceclose", this._onMediaSourceClose), e && (e.removeEventListener("emptied", this._onMediaEmptied), i && self.URL.revokeObjectURL(i), e.src === i ? (e.removeAttribute("src"), e.load()) : ni.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}
							}
							this.hls.trigger(Jt.MEDIA_DETACHED, void 0)
						}
						onBufferReset() {
							this.getSourceBufferTypes().forEach(e => {
								const t = this.sourceBuffer[e];
								try {
									t && (this.removeBufferListeners(e), this.mediaSource && this.mediaSource.removeSourceBuffer(t), this.sourceBuffer[e] = void 0)
								} catch (pd) {
									ni.warn(`[buffer-controller]: Failed to reset the ${e} buffer`, pd)
								}
							}), this._initSourceBuffer()
						}
						onBufferCodecs(e, t) {
							const i = this.getSourceBufferTypes().length;
							Object.keys(t).forEach(e => {
								if (i) {
									const i = this.tracks[e];
									if (i && "function" == typeof i.buffer.changeType) {
										const {
											id: s,
											codec: r,
											levelCodec: n,
											container: a,
											metadata: o
										} = t[e], l = (i.levelCodec || i.codec).replace(wa, "$1"), d = (n || r).replace(wa, "$1");
										if (l !== d) {
											const t = `${a};codecs=${n||r}`;
											this.appendChangeType(e, t), ni.log(`[buffer-controller]: switching codec ${l} to ${d}`), this.tracks[e] = {
												buffer: i.buffer,
												codec: r,
												container: a,
												levelCodec: n,
												metadata: o,
												id: s
											}
										}
									}
								} else this.pendingTracks[e] = t[e]
							}), i || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
						}
						appendChangeType(e, t) {
							const {
								operationQueue: i
							} = this, s = {
								execute: () => {
									const s = this.sourceBuffer[e];
									s && (ni.log(`[buffer-controller]: changing ${e} sourceBuffer type to ${t}`), s.changeType(t)), i.shiftAndExecuteNext(e)
								},
								onStart: () => {},
								onComplete: () => {},
								onError: t => {
									ni.warn(`[buffer-controller]: Failed to change ${e} SourceBuffer type`, t)
								}
							};
							i.append(s, e)
						}
						onBufferAppending(e, t) {
							const {
								hls: i,
								operationQueue: s,
								tracks: r
							} = this, {
								data: n,
								type: a,
								frag: o,
								part: l,
								chunkMeta: d
							} = t, h = d.buffering[a], c = self.performance.now();
							h.start = c;
							const u = o.stats.buffering,
								f = l ? l.stats.buffering : null;
							0 === u.start && (u.start = c), f && 0 === f.start && (f.start = c);
							const g = r.audio;
							let p = !1;
							"audio" === a && "audio/mpeg" === (null == g ? void 0 : g.container) && (p = !this.lastMpegAudioChunk || 1 === d.id || this.lastMpegAudioChunk.sn !== d.sn, this.lastMpegAudioChunk = d);
							const m = o.start,
								v = {
									execute: () => {
										if (h.executeStart = self.performance.now(), p) {
											const e = this.sourceBuffer[a];
											if (e) {
												const t = m - e.timestampOffset;
												Math.abs(t) >= .1 && (ni.log(`[buffer-controller]: Updating audio SourceBuffer timestampOffset to ${m} (delta: ${t}) sn: ${o.sn})`), e.timestampOffset = m)
											}
										}
										this.appendExecutor(n, a)
									},
									onStart: () => {},
									onComplete: () => {
										const e = self.performance.now();
										h.executeEnd = h.end = e, 0 === u.first && (u.first = e), f && 0 === f.first && (f.first = e);
										const {
											sourceBuffer: t
										} = this, i = {};
										for (const s in t) i[s] = Br.getBuffered(t[s]);
										this.appendError = 0, this.hls.trigger(Jt.BUFFER_APPENDED, {
											type: a,
											frag: o,
											part: l,
											chunkMeta: d,
											parent: o.type,
											timeRanges: i
										})
									},
									onError: e => {
										ni.error(`[buffer-controller]: Error encountered while trying to append to the ${a} SourceBuffer`, e);
										const t = {
											type: Zt.MEDIA_ERROR,
											parent: o.type,
											details: ei.BUFFER_APPEND_ERROR,
											frag: o,
											part: l,
											chunkMeta: d,
											error: e,
											err: e,
											fatal: !1
										};
										e.code === DOMException.QUOTA_EXCEEDED_ERR ? t.details = ei.BUFFER_FULL_ERROR : (this.appendError++, t.details = ei.BUFFER_APPEND_ERROR, this.appendError > i.config.appendErrorMaxRetry && (ni.error(`[buffer-controller]: Failed ${i.config.appendErrorMaxRetry} times to append segment in sourceBuffer`), t.fatal = !0)), i.trigger(Jt.ERROR, t)
									}
								};
							s.append(v, a)
						}
						onBufferFlushing(e, t) {
							const {
								operationQueue: i
							} = this, s = e => ({
								execute: this.removeExecutor.bind(this, e, t.startOffset, t.endOffset),
								onStart: () => {},
								onComplete: () => {
									this.hls.trigger(Jt.BUFFER_FLUSHED, {
										type: e
									})
								},
								onError: t => {
									ni.warn(`[buffer-controller]: Failed to remove from ${e} SourceBuffer`, t)
								}
							});
							t.type ? i.append(s(t.type), t.type) : this.getSourceBufferTypes().forEach(e => {
								i.append(s(e), e)
							})
						}
						onFragParsed(e, t) {
							const {
								frag: i,
								part: s
							} = t, r = [], n = s ? s.elementaryStreams : i.elementaryStreams;
							n[ui.AUDIOVIDEO] ? r.push("audiovideo") : (n[ui.AUDIO] && r.push("audio"), n[ui.VIDEO] && r.push("video"));
							0 === r.length && ni.warn(`Fragments must have at least one ElementaryStreamType set. type: ${i.type} level: ${i.level} sn: ${i.sn}`), this.blockBuffers(() => {
								const e = self.performance.now();
								i.stats.buffering.end = e, s && (s.stats.buffering.end = e);
								const t = s ? s.stats : i.stats;
								this.hls.trigger(Jt.FRAG_BUFFERED, {
									frag: i,
									part: s,
									stats: t,
									id: i.type
								})
							}, r)
						}
						onFragChanged(e, t) {
							this.flushBackBuffer()
						}
						onBufferEos(e, t) {
							this.getSourceBufferTypes().reduce((e, i) => {
								const s = this.sourceBuffer[i];
								return !s || t.type && t.type !== i || (s.ending = !0, s.ended || (s.ended = !0, ni.log(`[buffer-controller]: ${i} sourceBuffer now EOS`))), e && !(s && !s.ended)
							}, !0) && (ni.log("[buffer-controller]: Queueing mediaSource.endOfStream()"), this.blockBuffers(() => {
								this.getSourceBufferTypes().forEach(e => {
									const t = this.sourceBuffer[e];
									t && (t.ending = !1)
								});
								const {
									mediaSource: e
								} = this;
								e && "open" === e.readyState ? (ni.log("[buffer-controller]: Calling mediaSource.endOfStream()"), e.endOfStream()) : e && ni.info(`[buffer-controller]: Could not call mediaSource.endOfStream(). mediaSource.readyState: ${e.readyState}`)
							}))
						}
						onLevelUpdated(e, {
							details: t
						}) {
							t.fragments.length && (this.details = t, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
						}
						flushBackBuffer() {
							const {
								hls: e,
								details: t,
								media: i,
								sourceBuffer: s
							} = this;
							if (!i || null === t) return;
							const r = this.getSourceBufferTypes();
							if (!r.length) return;
							const n = t.live && null !== e.config.liveBackBufferLength ? e.config.liveBackBufferLength : e.config.backBufferLength;
							if (!Qt(n) || n < 0) return;
							const a = i.currentTime,
								o = t.levelTargetDuration,
								l = Math.max(n, o),
								d = Math.floor(a / o) * o - l;
							r.forEach(i => {
								const r = s[i];
								if (r) {
									const s = Br.getBuffered(r);
									if (s.length > 0 && d > s.start(0)) {
										if (e.trigger(Jt.BACK_BUFFER_REACHED, {
												bufferEnd: d
											}), t.live) e.trigger(Jt.LIVE_BACK_BUFFER_REACHED, {
											bufferEnd: d
										});
										else if (r.ended && s.end(s.length - 1) - a < 2 * o) return void ni.info(`[buffer-controller]: Cannot flush ${i} back buffer while SourceBuffer is in ended state`);
										e.trigger(Jt.BUFFER_FLUSHING, {
											startOffset: 0,
											endOffset: d,
											type: i
										})
									}
								}
							})
						}
						updateMediaElementDuration() {
							if (!this.details || !this.media || !this.mediaSource || "open" !== this.mediaSource.readyState) return;
							const {
								details: e,
								hls: t,
								media: i,
								mediaSource: s
							} = this, r = e.fragments[0].start + e.totalduration, n = i.duration, a = Qt(s.duration) ? s.duration : 0;
							e.live && t.config.liveDurationInfinity ? (ni.log("[buffer-controller]: Media Source duration is set to Infinity"), s.duration = 1 / 0, this.updateSeekableRange(e)) : (r > a && r > n || !Qt(n)) && (ni.log(`[buffer-controller]: Updating Media Source duration to ${r.toFixed(3)}`), s.duration = r)
						}
						updateSeekableRange(e) {
							const t = this.mediaSource,
								i = e.fragments;
							if (i.length && e.live && null != t && t.setLiveSeekableRange) {
								const s = Math.max(0, i[0].start),
									r = Math.max(s, s + e.totalduration);
								t.setLiveSeekableRange(s, r)
							}
						}
						checkPendingTracks() {
							const {
								bufferCodecEventsExpected: e,
								operationQueue: t,
								pendingTracks: i
							} = this, s = Object.keys(i).length;
							if (s && !e || 2 === s) {
								this.createSourceBuffers(i), this.pendingTracks = {};
								const e = this.getSourceBufferTypes();
								if (e.length) this.hls.trigger(Jt.BUFFER_CREATED, {
									tracks: this.tracks
								}), e.forEach(e => {
									t.executeNext(e)
								});
								else {
									const e = new Error("could not create source buffer for media codec(s)");
									this.hls.trigger(Jt.ERROR, {
										type: Zt.MEDIA_ERROR,
										details: ei.BUFFER_INCOMPATIBLE_CODECS_ERROR,
										fatal: !0,
										error: e,
										reason: e.message
									})
								}
							}
						}
						createSourceBuffers(e) {
							const {
								sourceBuffer: t,
								mediaSource: i
							} = this;
							if (!i) throw Error("createSourceBuffers called when mediaSource was null");
							for (const s in e)
								if (!t[s]) {
									const r = e[s];
									if (!r) throw Error(`source buffer exists for track ${s}, however track does not`);
									const n = r.levelCodec || r.codec,
										a = `${r.container};codecs=${n}`;
									ni.log(`[buffer-controller]: creating sourceBuffer(${a})`);
									try {
										const e = t[s] = i.addSourceBuffer(a),
											o = s;
										this.addBufferListener(o, "updatestart", this._onSBUpdateStart), this.addBufferListener(o, "updateend", this._onSBUpdateEnd), this.addBufferListener(o, "error", this._onSBUpdateError), this.tracks[s] = {
											buffer: e,
											codec: n,
											container: r.container,
											levelCodec: r.levelCodec,
											metadata: r.metadata,
											id: r.id
										}
									} catch (pd) {
										ni.error(`[buffer-controller]: error while trying to add sourceBuffer: ${pd.message}`), this.hls.trigger(Jt.ERROR, {
											type: Zt.MEDIA_ERROR,
											details: ei.BUFFER_ADD_CODEC_ERROR,
											fatal: !1,
											error: pd,
											mimeType: a
										})
									}
								}
						}
						_onSBUpdateStart(e) {
							const {
								operationQueue: t
							} = this;
							t.current(e).onStart()
						}
						_onSBUpdateEnd(e) {
							const {
								operationQueue: t
							} = this;
							t.current(e).onComplete(), t.shiftAndExecuteNext(e)
						}
						_onSBUpdateError(e, t) {
							const i = new Error(`${e} SourceBuffer error`);
							ni.error(`[buffer-controller]: ${i}`, t), this.hls.trigger(Jt.ERROR, {
								type: Zt.MEDIA_ERROR,
								details: ei.BUFFER_APPENDING_ERROR,
								error: i,
								fatal: !1
							});
							const s = this.operationQueue.current(e);
							s && s.onError(t)
						}
						removeExecutor(e, t, i) {
							const {
								media: s,
								mediaSource: r,
								operationQueue: n,
								sourceBuffer: a
							} = this, o = a[e];
							if (!s || !r || !o) return ni.warn(`[buffer-controller]: Attempting to remove from the ${e} SourceBuffer, but it does not exist`), void n.shiftAndExecuteNext(e);
							const l = Qt(s.duration) ? s.duration : 1 / 0,
								d = Qt(r.duration) ? r.duration : 1 / 0,
								h = Math.max(0, t),
								c = Math.min(i, l, d);
							c > h && !o.ending ? (o.ended = !1, ni.log(`[buffer-controller]: Removing [${h},${c}] from the ${e} SourceBuffer`), o.remove(h, c)) : n.shiftAndExecuteNext(e)
						}
						appendExecutor(e, t) {
							const {
								operationQueue: i,
								sourceBuffer: s
							} = this, r = s[t];
							if (!r) return ni.warn(`[buffer-controller]: Attempting to append to the ${t} SourceBuffer, but it does not exist`), void i.shiftAndExecuteNext(t);
							r.ended = !1, r.appendBuffer(e)
						}
						blockBuffers(e, t = this.getSourceBufferTypes()) {
							if (!t.length) return ni.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve().then(e);
							const {
								operationQueue: i
							} = this, s = t.map(e => i.appendBlocker(e));
							Promise.all(s).then(() => {
								e(), t.forEach(e => {
									const t = this.sourceBuffer[e];
									null != t && t.updating || i.shiftAndExecuteNext(e)
								})
							})
						}
						getSourceBufferTypes() {
							return Object.keys(this.sourceBuffer)
						}
						addBufferListener(e, t, i) {
							const s = this.sourceBuffer[e];
							if (!s) return;
							const r = i.bind(this, e);
							this.listeners[e].push({
								event: t,
								listener: r
							}), s.addEventListener(t, r)
						}
						removeBufferListeners(e) {
							const t = this.sourceBuffer[e];
							t && this.listeners[e].forEach(e => {
								t.removeEventListener(e.event, e.listener)
							})
						}
					},
					capLevelController: So,
					errorController: class {
						constructor(e) {
							this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = e, this.log = ni.log.bind(ni, "[info]:"), this.warn = ni.warn.bind(ni, "[warning]:"), this.error = ni.error.bind(ni, "[error]:"), this.registerListeners()
						}
						registerListeners() {
							const e = this.hls;
							e.on(Jt.ERROR, this.onError, this), e.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.on(Jt.LEVEL_UPDATED, this.onLevelUpdated, this)
						}
						unregisterListeners() {
							const e = this.hls;
							e && (e.off(Jt.ERROR, this.onError, this), e.off(Jt.ERROR, this.onErrorOut, this), e.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.off(Jt.LEVEL_UPDATED, this.onLevelUpdated, this))
						}
						destroy() {
							this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {}
						}
						startLoad(e) {
							this.playlistError = 0
						}
						stopLoad() {}
						getVariantLevelIndex(e) {
							return (null == e ? void 0 : e.type) === Us.MAIN ? e.level : this.hls.loadLevel
						}
						onManifestLoading() {
							this.playlistError = 0, this.penalizedRenditions = {}
						}
						onLevelUpdated() {
							this.playlistError = 0
						}
						onError(e, t) {
							var i;
							if (t.fatal) return;
							const s = this.hls,
								r = t.context;
							switch (t.details) {
								case ei.FRAG_LOAD_ERROR:
								case ei.FRAG_LOAD_TIMEOUT:
								case ei.KEY_LOAD_ERROR:
								case ei.KEY_LOAD_TIMEOUT:
									return void(t.errorAction = this.getFragRetryOrSwitchAction(t));
								case ei.FRAG_GAP:
								case ei.FRAG_PARSING_ERROR:
								case ei.FRAG_DECRYPT_ERROR:
									return t.errorAction = this.getFragRetryOrSwitchAction(t), void(t.errorAction.action = _r.SendAlternateToPenaltyBox);
								case ei.LEVEL_EMPTY_ERROR:
								case ei.LEVEL_PARSING_ERROR: {
									var n, a;
									const e = t.parent === Us.MAIN ? t.level : s.loadLevel;
									t.details === ei.LEVEL_EMPTY_ERROR && null != (n = t.context) && null != (a = n.levelDetails) && a.live ? t.errorAction = this.getPlaylistRetryOrSwitchAction(t, e) : (t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, e))
								}
								return;
							case ei.LEVEL_LOAD_ERROR:
							case ei.LEVEL_LOAD_TIMEOUT:
								return void("number" == typeof(null == r ? void 0 : r.level) && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, r.level)));
							case ei.AUDIO_TRACK_LOAD_ERROR:
							case ei.AUDIO_TRACK_LOAD_TIMEOUT:
							case ei.SUBTITLE_LOAD_ERROR:
							case ei.SUBTITLE_TRACK_LOAD_TIMEOUT:
								if (r) {
									const e = s.levels[s.loadLevel];
									if (e && (r.type === Ns.AUDIO_TRACK && r.groupId === e.audioGroupId || r.type === Ns.SUBTITLE_TRACK && r.groupId === e.textGroupId)) return t.errorAction = this.getPlaylistRetryOrSwitchAction(t, s.loadLevel), t.errorAction.action = _r.SendAlternateToPenaltyBox, void(t.errorAction.flags = br.MoveAllAlternatesMatchingHost)
								}
								return;
							case ei.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED: {
								const e = s.levels[s.loadLevel],
									i = null == e ? void 0 : e.attrs["HDCP-LEVEL"];
								i && (t.errorAction = {
									action: _r.SendAlternateToPenaltyBox,
									flags: br.MoveAllAlternatesMatchingHDCP,
									hdcpLevel: i
								})
							}
							return;
							case ei.BUFFER_ADD_CODEC_ERROR:
							case ei.REMUX_ALLOC_ERROR:
								return void(t.errorAction = this.getLevelSwitchAction(t, null != (i = t.level) ? i : s.loadLevel));
							case ei.INTERNAL_EXCEPTION:
							case ei.BUFFER_APPENDING_ERROR:
							case ei.BUFFER_APPEND_ERROR:
							case ei.BUFFER_FULL_ERROR:
							case ei.LEVEL_SWITCH_ERROR:
							case ei.BUFFER_STALLED_ERROR:
							case ei.BUFFER_SEEK_OVER_HOLE:
							case ei.BUFFER_NUDGE_ON_STALL:
								return void(t.errorAction = {
									action: _r.DoNothing,
									flags: br.None
								})
							}
							if (t.type === Zt.KEY_SYSTEM_ERROR) {
								const e = this.getVariantLevelIndex(t.frag);
								return t.levelRetry = !1, void(t.errorAction = this.getLevelSwitchAction(t, e))
							}
						}
						getPlaylistRetryOrSwitchAction(e, t) {
							var i;
							const s = cr(this.hls.config.playlistLoadPolicy, e),
								r = this.playlistError++,
								n = null == (i = e.response) ? void 0 : i.code;
							if (gr(s, r, hr(e), n)) return {
								action: _r.RetryRequest,
								flags: br.None,
								retryConfig: s,
								retryCount: r
							};
							const a = this.getLevelSwitchAction(e, t);
							return s && (a.retryConfig = s, a.retryCount = r), a
						}
						getFragRetryOrSwitchAction(e) {
							const t = this.hls,
								i = this.getVariantLevelIndex(e.frag),
								s = t.levels[i],
								{
									fragLoadPolicy: r,
									keyLoadPolicy: n
								} = t.config,
								a = cr(e.details.startsWith("key") ? n : r, e),
								o = t.levels.reduce((e, t) => e + t.fragmentError, 0);
							if (s) {
								var l;
								e.details !== ei.FRAG_GAP && s.fragmentError++;
								const t = null == (l = e.response) ? void 0 : l.code;
								if (gr(a, o, hr(e), t)) return {
									action: _r.RetryRequest,
									flags: br.None,
									retryConfig: a,
									retryCount: o
								}
							}
							const d = this.getLevelSwitchAction(e, i);
							return a && (d.retryConfig = a, d.retryCount = o), d
						}
						getLevelSwitchAction(e, t) {
							const i = this.hls;
							null == t && (t = i.loadLevel);
							const s = this.hls.levels[t];
							if (s && (s.loadError++, i.autoLevelEnabled)) {
								var r, n;
								let t = -1;
								const {
									levels: a,
									loadLevel: o,
									minAutoLevel: l,
									maxAutoLevel: d
								} = i, h = null == (r = e.frag) ? void 0 : r.type, {
									type: c,
									groupId: u
								} = null != (n = e.context) ? n : {};
								for (let i = a.length; i--;) {
									const r = (i + o) % a.length;
									if (r !== o && r >= l && r <= d && 0 === a[r].loadError) {
										const i = a[r];
										if (e.details === ei.FRAG_GAP && e.frag) {
											const t = a[r].details;
											if (t) {
												const i = mr(e.frag, t.fragments, e.frag.start);
												if (null != i && i.gap) continue
											}
										} else {
											if (c === Ns.AUDIO_TRACK && u === i.audioGroupId || c === Ns.SUBTITLE_TRACK && u === i.textGroupId) continue;
											if (h === Us.AUDIO && s.audioGroupId === i.audioGroupId || h === Us.SUBTITLE && s.textGroupId === i.textGroupId) continue
										}
										t = r;
										break
									}
								}
								if (t > -1 && i.loadLevel !== t) return e.levelRetry = !0, this.playlistError = 0, {
									action: _r.SendAlternateToPenaltyBox,
									flags: br.None,
									nextAutoLevel: t
								}
							}
							return {
								action: _r.SendAlternateToPenaltyBox,
								flags: br.MoveAllAlternatesMatchingHost
							}
						}
						onErrorOut(e, t) {
							var i;
							switch (null == (i = t.errorAction) ? void 0 : i.action) {
								case _r.DoNothing:
									break;
								case _r.SendAlternateToPenaltyBox:
									this.sendAlternateToPenaltyBox(t), t.errorAction.resolved || t.details === ei.FRAG_GAP || (t.fatal = !0)
							}
							t.fatal && this.hls.stopLoad()
						}
						sendAlternateToPenaltyBox(e) {
							const t = this.hls,
								i = e.errorAction;
							if (!i) return;
							const {
								flags: s,
								hdcpLevel: r,
								nextAutoLevel: n
							} = i;
							switch (s) {
								case br.None:
									this.switchLevel(e, n);
									break;
								case br.MoveAllAlternatesMatchingHost:
									i.resolved || (i.resolved = this.redundantFailover(e));
									break;
								case br.MoveAllAlternatesMatchingHDCP:
									r && (t.maxHdcpLevel = Zs[Zs.indexOf(r) - 1], i.resolved = !0), this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`)
							}
							i.resolved || this.switchLevel(e, n)
						}
						switchLevel(e, t) {
							void 0 !== t && e.errorAction && (this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel = t, e.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel)
						}
						redundantFailover(e) {
							const {
								hls: t,
								penalizedRenditions: i
							} = this, s = e.parent === Us.MAIN ? e.level : t.loadLevel, r = t.levels[s], n = r.url.length, a = e.frag ? e.frag.urlId : r.urlId;
							r.urlId !== a || e.frag && !r.details || this.penalizeRendition(r, e);
							for (let o = 1; o < n; o++) {
								const l = (a + o) % n,
									d = i[l];
								if (!d || Tr(d, e, i[a])) return this.warn(`Switching to Redundant Stream ${l+1}/${n}: "${r.url[l]}" after ${e.details}`), this.playlistError = 0, t.levels.forEach(e => {
									e.urlId = l
								}), t.nextLoadLevel = s, !0
							}
							return !1
						}
						penalizeRendition(e, t) {
							const {
								penalizedRenditions: i
							} = this, s = i[e.urlId] || {
								lastErrorPerfMs: 0,
								errors: [],
								details: void 0
							};
							s.lastErrorPerfMs = performance.now(), s.errors.push(t), s.details = e.details, i[e.urlId] = s
						}
					},
					fpsController: class {
						constructor(e) {
							this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e, this.registerListeners()
						}
						setStreamController(e) {
							this.streamController = e
						}
						registerListeners() {
							this.hls.on(Jt.MEDIA_ATTACHING, this.onMediaAttaching, this)
						}
						unregisterListeners() {
							this.hls.off(Jt.MEDIA_ATTACHING, this.onMediaAttaching, this)
						}
						destroy() {
							this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null
						}
						onMediaAttaching(e, t) {
							const i = this.hls.config;
							if (i.capLevelOnFPSDrop) {
								const e = t.media instanceof self.HTMLVideoElement ? t.media : null;
								this.media = e, e && "function" == typeof e.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), i.fpsDroppedMonitoringPeriod)
							}
						}
						checkFPS(e, t, i) {
							const s = performance.now();
							if (t) {
								if (this.lastTime) {
									const e = s - this.lastTime,
										r = i - this.lastDroppedFrames,
										n = t - this.lastDecodedFrames,
										a = 1e3 * r / e,
										o = this.hls;
									if (o.trigger(Jt.FPS_DROP, {
											currentDropped: r,
											currentDecoded: n,
											totalDroppedFrames: i
										}), a > 0 && r > o.config.fpsDroppedMonitoringThreshold * n) {
										let e = o.currentLevel;
										ni.warn("drop FPS ratio greater than max allowed value for currentLevel: " + e), e > 0 && (-1 === o.autoLevelCapping || o.autoLevelCapping >= e) && (e -= 1, o.trigger(Jt.FPS_DROP_LEVEL_CAPPING, {
											level: e,
											droppedLevel: o.currentLevel
										}), o.autoLevelCapping = e, this.streamController.nextLevelSwitch())
									}
								}
								this.lastTime = s, this.lastDroppedFrames = i, this.lastDecodedFrames = t
							}
						}
						checkFPSInterval() {
							const e = this.media;
							if (e)
								if (this.isVideoPlaybackQualityAvailable) {
									const t = e.getVideoPlaybackQuality();
									this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
								} else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
						}
					},
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
					drmSystems: {},
					drmSystemOptions: {},
					requestMediaKeySystemAccessFunc: wi,
					testBandwidth: !0,
					progressive: !1,
					lowLatencyMode: !0,
					cmcd: void 0,
					enableDateRangeMetadataCues: !0,
					enableEmsgMetadataCues: !0,
					enableID3MetadataCues: !0,
					certLoadPolicy: {
						default: {
							maxTimeToFirstByteMs: 8e3,
							maxLoadTimeMs: 2e4,
							timeoutRetry: null,
							errorRetry: null
						}
					},
					keyLoadPolicy: {
						default: {
							maxTimeToFirstByteMs: 8e3,
							maxLoadTimeMs: 2e4,
							timeoutRetry: {
								maxNumRetry: 1,
								retryDelayMs: 1e3,
								maxRetryDelayMs: 2e4,
								backoff: "linear"
							},
							errorRetry: {
								maxNumRetry: 8,
								retryDelayMs: 1e3,
								maxRetryDelayMs: 2e4,
								backoff: "linear"
							}
						}
					},
					manifestLoadPolicy: {
						default: {
							maxTimeToFirstByteMs: 1 / 0,
							maxLoadTimeMs: 2e4,
							timeoutRetry: {
								maxNumRetry: 2,
								retryDelayMs: 0,
								maxRetryDelayMs: 0
							},
							errorRetry: {
								maxNumRetry: 1,
								retryDelayMs: 1e3,
								maxRetryDelayMs: 8e3
							}
						}
					},
					playlistLoadPolicy: {
						default: {
							maxTimeToFirstByteMs: 1e4,
							maxLoadTimeMs: 2e4,
							timeoutRetry: {
								maxNumRetry: 2,
								retryDelayMs: 0,
								maxRetryDelayMs: 0
							},
							errorRetry: {
								maxNumRetry: 2,
								retryDelayMs: 1e3,
								maxRetryDelayMs: 8e3
							}
						}
					},
					fragLoadPolicy: {
						default: {
							maxTimeToFirstByteMs: 1e4,
							maxLoadTimeMs: 12e4,
							timeoutRetry: {
								maxNumRetry: 4,
								retryDelayMs: 0,
								maxRetryDelayMs: 0
							},
							errorRetry: {
								maxNumRetry: 6,
								retryDelayMs: 1e3,
								maxRetryDelayMs: 8e3
							}
						}
					},
					steeringManifestLoadPolicy: {
						default: {
							maxTimeToFirstByteMs: 1e4,
							maxLoadTimeMs: 2e4,
							timeoutRetry: {
								maxNumRetry: 2,
								retryDelayMs: 0,
								maxRetryDelayMs: 0
							},
							errorRetry: {
								maxNumRetry: 1,
								retryDelayMs: 1e3,
								maxRetryDelayMs: 8e3
							}
						}
					},
					manifestLoadingTimeOut: 1e4,
					manifestLoadingMaxRetry: 1,
					manifestLoadingRetryDelay: 1e3,
					manifestLoadingMaxRetryTimeout: 64e3,
					levelLoadingTimeOut: 1e4,
					levelLoadingMaxRetry: 4,
					levelLoadingRetryDelay: 1e3,
					levelLoadingMaxRetryTimeout: 64e3,
					fragLoadingTimeOut: 2e4,
					fragLoadingMaxRetry: 6,
					fragLoadingRetryDelay: 1e3,
					fragLoadingMaxRetryTimeout: 64e3
				}, {
					cueHandler: {
						newCue(e, t, i, s) {
							const r = [];
							let n, a, o, l, d;
							const h = self.VTTCue || self.TextTrackCue;
							for (let u = 0; u < s.rows.length; u++)
								if (o = !0, l = 0, d = "", !(n = s.rows[u]).isEmpty()) {
									var c;
									for (let e = 0; e < n.chars.length; e++) Uo.test(n.chars[e].uchar) && o ? l++ : (d += n.chars[e].uchar, o = !1);
									n.cueStartTime = t, t === i && (i += 1e-4), l >= 16 ? l-- : l++;
									const s = io(d.trim()),
										f = lo(t, i, s);
									null != e && null != (c = e.cues) && c.getCueById(f) || ((a = new h(t, i, s)).id = f, a.line = u + 1, a.align = "left", a.position = 10 + Math.min(80, 10 * Math.floor(8 * l / 32)), r.push(a))
								} return e && r.length && (r.sort((e, t) => "auto" === e.line || "auto" === t.line ? 0 : e.line > 8 && t.line > 8 ? t.line - e.line : e.line - t.line), r.forEach(t => js(e, t))), r
						}
					},
					enableWebVTT: !0,
					enableIMSC1: !0,
					enableCEA708Captions: !0,
					captionsTextTrack1Label: "English",
					captionsTextTrack1LanguageCode: "en",
					captionsTextTrack2Label: "Spanish",
					captionsTextTrack2LanguageCode: "es",
					captionsTextTrack3Label: "Unknown CC",
					captionsTextTrack3LanguageCode: "",
					captionsTextTrack4Label: "Unknown CC",
					captionsTextTrack4LanguageCode: "",
					renderTextTracksNatively: !0
				}), {}, {
					subtitleStreamController: class extends Zr {
						constructor(e, t, i) {
							super(e, t, i, "[subtitle-stream-controller]", Us.SUBTITLE), this.levels = [], this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this._registerListeners()
						}
						onHandlerDestroying() {
							this._unregisterListeners(), this.mainDetails = null
						}
						_registerListeners() {
							const {
								hls: e
							} = this;
							e.on(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.on(Jt.LEVEL_LOADED, this.onLevelLoaded, this), e.on(Jt.ERROR, this.onError, this), e.on(Jt.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(Jt.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(Jt.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(Jt.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.on(Jt.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(Jt.FRAG_BUFFERED, this.onFragBuffered, this)
						}
						_unregisterListeners() {
							const {
								hls: e
							} = this;
							e.off(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.off(Jt.LEVEL_LOADED, this.onLevelLoaded, this), e.off(Jt.ERROR, this.onError, this), e.off(Jt.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(Jt.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(Jt.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(Jt.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.off(Jt.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(Jt.FRAG_BUFFERED, this.onFragBuffered, this)
						}
						startLoad(e) {
							this.stopLoad(), this.state = Jr.IDLE, this.setInterval(Ta), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
						}
						onManifestLoading() {
							this.mainDetails = null, this.fragmentTracker.removeAllFragments()
						}
						onMediaDetaching() {
							this.tracksBuffered = [], super.onMediaDetaching()
						}
						onLevelLoaded(e, t) {
							this.mainDetails = t.details
						}
						onSubtitleFragProcessed(e, t) {
							const {
								frag: i,
								success: s
							} = t;
							if (this.fragPrevious = i, this.state = Jr.IDLE, !s) return;
							const r = this.tracksBuffered[this.currentTrackId];
							if (!r) return;
							let n;
							const a = i.start;
							for (let l = 0; l < r.length; l++)
								if (a >= r[l].start && a <= r[l].end) {
									n = r[l];
									break
								} const o = i.start + i.duration;
							n ? n.end = o : (n = {
								start: a,
								end: o
							}, r.push(n)), this.fragmentTracker.fragBuffered(i)
						}
						onBufferFlushing(e, t) {
							const {
								startOffset: i,
								endOffset: s
							} = t;
							if (0 === i && s !== Number.POSITIVE_INFINITY) {
								const {
									currentTrackId: e,
									levels: r
								} = this;
								if (!r.length || !r[e] || !r[e].details) return;
								const n = s - r[e].details.targetduration;
								if (n <= 0) return;
								t.endOffsetSubtitles = Math.max(0, n), this.tracksBuffered.forEach(e => {
									for (let t = 0; t < e.length;)
										if (e[t].end <= n) e.shift();
										else {
											if (!(e[t].start < n)) break;
											e[t].start = n, t++
										}
								}), this.fragmentTracker.removeFragmentsInRange(i, n, Us.SUBTITLE)
							}
						}
						onFragBuffered(e, t) {
							var i;
							this.loadedmetadata || t.frag.type !== Us.MAIN || null != (i = this.media) && i.buffered.length && (this.loadedmetadata = !0)
						}
						onError(e, t) {
							const i = t.frag;
							(null == i ? void 0 : i.type) === Us.SUBTITLE && (this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== Jr.STOPPED && (this.state = Jr.IDLE))
						}
						onSubtitleTracksUpdated(e, {
							subtitleTracks: t
						}) {
							_a(this.levels, t) ? this.levels = t.map(e => new ir(e)) : (this.tracksBuffered = [], this.levels = t.map(e => {
								const t = new ir(e);
								return this.tracksBuffered[t.id] = [], t
							}), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, Us.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null)
						}
						onSubtitleTrackSwitch(e, t) {
							if (this.currentTrackId = t.id, !this.levels.length || -1 === this.currentTrackId) return void this.clearInterval();
							const i = this.levels[this.currentTrackId];
							null != i && i.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, i && this.setInterval(Ta)
						}
						onSubtitleTrackLoaded(e, t) {
							var i;
							const {
								details: s,
								id: r
							} = t, {
								currentTrackId: n,
								levels: a
							} = this;
							if (!a.length) return;
							const o = a[n];
							if (r >= a.length || r !== n || !o) return;
							this.mediaBuffer = this.mediaBufferTimeRanges;
							let l = 0;
							if (s.live || null != (i = o.details) && i.live) {
								const e = this.mainDetails;
								if (s.deltaUpdateFailed || !e) return;
								const t = e.fragments[0];
								o.details ? 0 === (l = this.alignPlaylists(s, o.details)) && t && or(s, l = t.start) : s.hasProgramDateTime && e.hasProgramDateTime ? (Kr(s, e), l = s.fragments[0].start) : t && or(s, l = t.start)
							}
							if (o.details = s, this.levelLastLoaded = r, this.startFragRequested || !this.mainDetails && s.live || this.setStartPosition(o.details, l), this.tick(), s.live && !this.fragCurrent && this.media && this.state === Jr.IDLE) {
								mr(null, s.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), o.details = void 0)
							}
						}
						_handleFragmentLoadComplete(e) {
							const {
								frag: t,
								payload: i
							} = e, s = t.decryptdata, r = this.hls;
							if (!this.fragContextChanged(t) && i && i.byteLength > 0 && s && s.key && s.iv && "AES-128" === s.method) {
								const e = performance.now();
								this.decrypter.decrypt(new Uint8Array(i), s.key.buffer, s.iv.buffer).catch(e => {
									throw r.trigger(Jt.ERROR, {
										type: Zt.MEDIA_ERROR,
										details: ei.FRAG_DECRYPT_ERROR,
										fatal: !1,
										error: e,
										reason: e.message,
										frag: t
									}), e
								}).then(i => {
									const s = performance.now();
									r.trigger(Jt.FRAG_DECRYPTED, {
										frag: t,
										payload: i,
										stats: {
											tstart: e,
											tdecrypt: s
										}
									})
								}).catch(e => {
									this.warn(`${e.name}: ${e.message}`), this.state = Jr.IDLE
								})
							}
						}
						doTick() {
							if (this.media) {
								if (this.state === Jr.IDLE) {
									const {
										currentTrackId: e,
										levels: t
									} = this, i = t[e];
									if (!t.length || !i || !i.details) return;
									const s = i.details,
										r = s.targetduration,
										{
											config: n
										} = this,
										a = this.getLoadPosition(),
										o = Br.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], a - r, n.maxBufferHole),
										{
											end: l,
											len: d
										} = o,
										h = this.getFwdBufferInfo(this.media, Us.MAIN);
									if (d > this.getMaxBufferLength(null == h ? void 0 : h.len) + r) return;
									const c = s.fragments,
										u = c.length,
										f = s.edge;
									let g = null;
									const p = this.fragPrevious;
									if (l < f) {
										const {
											maxFragLookUpTolerance: e
										} = n;
										!(g = mr(p, c, Math.max(c[0].start, l), e)) && p && p.start < c[0].start && (g = c[0])
									} else g = c[u - 1];
									if (!g) return;
									g = this.mapToInitFragWhenRequired(g), this.fragmentTracker.getState(g) === kr.NOT_LOADED && this.loadFragment(g, i, l)
								}
							} else this.state = Jr.IDLE
						}
						getMaxBufferLength(e) {
							const t = super.getMaxBufferLength();
							return e ? Math.max(t, e) : t
						}
						loadFragment(e, t, i) {
							this.fragCurrent = e, "initSegment" === e.sn ? this._loadInitSegment(e, t) : (this.startFragRequested = !0, super.loadFragment(e, t, i))
						}
						get mediaBufferTimeRanges() {
							return new Sa(this.tracksBuffered[this.currentTrackId] || [])
						}
					},
					subtitleTrackController: class extends Sr {
						constructor(e) {
							super(e, "[subtitle-track-controller]"), this.media = null, this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.trackChangeListener = () => this.onTextTracksChanged(), this.asyncPollTrackChange = () => this.pollTrackChange(0), this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.registerListeners()
						}
						destroy() {
							this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, super.destroy()
						}
						get subtitleDisplay() {
							return this._subtitleDisplay
						}
						set subtitleDisplay(e) {
							this._subtitleDisplay = e, this.trackId > -1 && this.toggleTrackModes(this.trackId)
						}
						registerListeners() {
							const {
								hls: e
							} = this;
							e.on(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.on(Jt.MANIFEST_PARSED, this.onManifestParsed, this), e.on(Jt.LEVEL_LOADING, this.onLevelLoading, this), e.on(Jt.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(Jt.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(Jt.ERROR, this.onError, this)
						}
						unregisterListeners() {
							const {
								hls: e
							} = this;
							e.off(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.off(Jt.MANIFEST_PARSED, this.onManifestParsed, this), e.off(Jt.LEVEL_LOADING, this.onLevelLoading, this), e.off(Jt.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(Jt.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(Jt.ERROR, this.onError, this)
						}
						onMediaAttached(e, t) {
							this.media = t.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
						}
						pollTrackChange(e) {
							self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, e)
						}
						onMediaDetaching() {
							if (!this.media) return;
							self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), Aa(this.media.textTracks).forEach(e => {
								Hs(e)
							}), this.subtitleTrack = -1, this.media = null
						}
						onManifestLoading() {
							this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0
						}
						onManifestParsed(e, t) {
							this.tracks = t.subtitleTracks
						}
						onSubtitleTrackLoaded(e, t) {
							const {
								id: i,
								details: s
							} = t, {
								trackId: r
							} = this, n = this.tracksInGroup[r];
							if (!n) return void this.warn(`Invalid subtitle track id ${i}`);
							const a = n.details;
							n.details = t.details, this.log(`subtitle track ${i} loaded [${s.startSN}-${s.endSN}]`), i === this.trackId && this.playlistLoaded(i, t, a)
						}
						onLevelLoading(e, t) {
							this.switchLevel(t.level)
						}
						onLevelSwitching(e, t) {
							this.switchLevel(t.level)
						}
						switchLevel(e) {
							const t = this.hls.levels[e];
							if (null == t || !t.textGroupIds) return;
							const i = t.textGroupIds[t.urlId],
								s = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
							if (this.groupId !== i) {
								const e = this.tracks.filter(e => !i || e.groupId === i);
								this.tracksInGroup = e;
								const t = this.findTrackId(null == s ? void 0 : s.name) || this.findTrackId();
								this.groupId = i || null;
								const r = {
									subtitleTracks: e
								};
								this.log(`Updating subtitle tracks, ${e.length} track(s) found in "${i}" group-id`), this.hls.trigger(Jt.SUBTITLE_TRACKS_UPDATED, r), -1 !== t && this.setSubtitleTrack(t, s)
							} else this.shouldReloadPlaylist(s) && this.setSubtitleTrack(this.trackId, s)
						}
						findTrackId(e) {
							const t = this.tracksInGroup;
							for (let i = 0; i < t.length; i++) {
								const s = t[i];
								if ((!this.selectDefaultTrack || s.default) && (!e || e === s.name)) return s.id
							}
							return -1
						}
						onError(e, t) {
							!t.fatal && t.context && t.context.type === Ns.SUBTITLE_TRACK && t.context.id === this.trackId && t.context.groupId === this.groupId && this.checkRetry(t)
						}
						get subtitleTracks() {
							return this.tracksInGroup
						}
						get subtitleTrack() {
							return this.trackId
						}
						set subtitleTrack(e) {
							this.selectDefaultTrack = !1;
							const t = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
							this.setSubtitleTrack(e, t)
						}
						loadPlaylist(e) {
							super.loadPlaylist();
							const t = this.tracksInGroup[this.trackId];
							if (this.shouldLoadPlaylist(t)) {
								const s = t.id,
									r = t.groupId;
								let n = t.url;
								if (e) try {
									n = e.addDirectives(n)
								} catch (i) {
									this.warn(`Could not construct new URL with HLS Delivery Directives: ${i}`)
								}
								this.log(`Loading subtitle playlist for id ${s}`), this.hls.trigger(Jt.SUBTITLE_TRACK_LOADING, {
									url: n,
									id: s,
									groupId: r,
									deliveryDirectives: e || null
								})
							}
						}
						toggleTrackModes(e) {
							const {
								media: t,
								trackId: i
							} = this;
							if (!t) return;
							const s = Aa(t.textTracks),
								r = s.filter(e => e.groupId === this.groupId);
							if (-1 === e)[].slice.call(s).forEach(e => {
								e.mode = "disabled"
							});
							else {
								const e = r[i];
								e && (e.mode = "disabled")
							}
							const n = r[e];
							n && (n.mode = this.subtitleDisplay ? "showing" : "hidden")
						}
						setSubtitleTrack(e, t) {
							var i;
							const s = this.tracksInGroup;
							if (!this.media) return void(this.queuedDefaultTrack = e);
							if (this.trackId !== e && this.toggleTrackModes(e), this.trackId === e && (-1 === e || null != (i = s[e]) && i.details) || e < -1 || e >= s.length) return;
							this.clearTimer();
							const r = s[e];
							if (this.log(`Switching to subtitle-track ${e}` + (r ? ` "${r.name}" lang:${r.lang} group:${r.groupId}` : "")), this.trackId = e, r) {
								const {
									id: e,
									groupId: i = "",
									name: s,
									type: n,
									url: a
								} = r;
								this.hls.trigger(Jt.SUBTITLE_TRACK_SWITCH, {
									id: e,
									groupId: i,
									name: s,
									type: n,
									url: a
								});
								const o = this.switchParams(r.url, null == t ? void 0 : t.details);
								this.loadPlaylist(o)
							} else this.hls.trigger(Jt.SUBTITLE_TRACK_SWITCH, {
								id: e
							})
						}
						onTextTracksChanged() {
							if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively) return;
							let e = -1;
							const t = Aa(this.media.textTracks);
							for (let i = 0; i < t.length; i++)
								if ("hidden" === t[i].mode) e = i;
								else if ("showing" === t[i].mode) {
								e = i;
								break
							}
							this.subtitleTrack !== e && (this.subtitleTrack = e)
						}
					},
					timelineController: class {
						constructor(e) {
							if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
									ccOffset: 0,
									presentationOffset: 0,
									0: {
										start: 0,
										prevCC: -1,
										new: !0
									}
								}, this.captionsProperties = void 0, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = {
									textTrack1: {
										label: this.config.captionsTextTrack1Label,
										languageCode: this.config.captionsTextTrack1LanguageCode
									},
									textTrack2: {
										label: this.config.captionsTextTrack2Label,
										languageCode: this.config.captionsTextTrack2LanguageCode
									},
									textTrack3: {
										label: this.config.captionsTextTrack3Label,
										languageCode: this.config.captionsTextTrack3LanguageCode
									},
									textTrack4: {
										label: this.config.captionsTextTrack4Label,
										languageCode: this.config.captionsTextTrack4LanguageCode
									}
								}, this.config.enableCEA708Captions) {
								const e = new Wa(this, "textTrack1"),
									t = new Wa(this, "textTrack2"),
									i = new Wa(this, "textTrack3"),
									s = new Wa(this, "textTrack4");
								this.cea608Parser1 = new Ha(1, e, t), this.cea608Parser2 = new Ha(3, i, s)
							}
							e.on(Jt.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.on(Jt.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(Jt.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(Jt.FRAG_LOADING, this.onFragLoading, this), e.on(Jt.FRAG_LOADED, this.onFragLoaded, this), e.on(Jt.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(Jt.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(Jt.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(Jt.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(Jt.BUFFER_FLUSHING, this.onBufferFlushing, this)
						}
						destroy() {
							const {
								hls: e
							} = this;
							e.off(Jt.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.off(Jt.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(Jt.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(Jt.FRAG_LOADING, this.onFragLoading, this), e.off(Jt.FRAG_LOADED, this.onFragLoaded, this), e.off(Jt.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(Jt.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(Jt.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(Jt.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(Jt.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null
						}
						addCues(e, t, i, s, r) {
							let n = !1;
							for (let h = r.length; h--;) {
								const e = r[h],
									s = (a = e[0], o = e[1], l = t, d = i, Math.min(o, d) - Math.max(a, l));
								if (s >= 0 && (e[0] = Math.min(e[0], t), e[1] = Math.max(e[1], i), n = !0, s / (i - t) > .5)) return
							}
							var a, o, l, d;
							if (n || r.push([t, i]), this.config.renderTextTracksNatively) {
								const r = this.captionsTracks[e];
								this.Cues.newCue(r, t, i, s)
							} else {
								const r = this.Cues.newCue(null, t, i, s);
								this.hls.trigger(Jt.CUES_PARSED, {
									type: "captions",
									cues: r,
									track: e
								})
							}
						}
						onInitPtsFound(e, {
							frag: t,
							id: i,
							initPTS: s,
							timescale: r
						}) {
							const {
								unparsedVttFrags: n
							} = this;
							"main" === i && (this.initPTS[t.cc] = {
								baseTime: s,
								timescale: r
							}), n.length && (this.unparsedVttFrags = [], n.forEach(e => {
								this.onFragLoaded(Jt.FRAG_LOADED, e)
							}))
						}
						getExistingTrack(e) {
							const {
								media: t
							} = this;
							if (t)
								for (let i = 0; i < t.textTracks.length; i++) {
									const s = t.textTracks[i];
									if (s[e]) return s
								}
							return null
						}
						createCaptionsTrack(e) {
							this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e)
						}
						createNativeTrack(e) {
							if (this.captionsTracks[e]) return;
							const {
								captionsProperties: t,
								captionsTracks: i,
								media: s
							} = this, {
								label: r,
								languageCode: n
							} = t[e], a = this.getExistingTrack(e);
							if (a) i[e] = a, Hs(i[e]), Gs(i[e], s);
							else {
								const t = this.createTextTrack("captions", r, n);
								t && (t[e] = !0, i[e] = t)
							}
						}
						createNonNativeTrack(e) {
							if (this.nonNativeCaptionsTracks[e]) return;
							const t = this.captionsProperties[e];
							if (!t) return;
							const i = {
								_id: e,
								label: t.label,
								kind: "captions",
								default: !!t.media && !!t.media.default,
								closedCaptions: t.media
							};
							this.nonNativeCaptionsTracks[e] = i, this.hls.trigger(Jt.NON_NATIVE_TEXT_TRACKS_FOUND, {
								tracks: [i]
							})
						}
						createTextTrack(e, t, i) {
							const s = this.media;
							if (s) return s.addTextTrack(e, t, i)
						}
						onMediaAttaching(e, t) {
							this.media = t.media, this._cleanTracks()
						}
						onMediaDetaching() {
							const {
								captionsTracks: e
							} = this;
							Object.keys(e).forEach(t => {
								Hs(e[t]), delete e[t]
							}), this.nonNativeCaptionsTracks = {}
						}
						onManifestLoading() {
							this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
								ccOffset: 0,
								presentationOffset: 0,
								0: {
									start: 0,
									prevCC: -1,
									new: !0
								}
							}, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
						}
						_cleanTracks() {
							const {
								media: e
							} = this;
							if (!e) return;
							const t = e.textTracks;
							if (t)
								for (let i = 0; i < t.length; i++) Hs(t[i])
						}
						onSubtitleTracksUpdated(e, t) {
							const i = t.subtitleTracks || [],
								s = i.some(e => e.textCodec === uo);
							if (this.config.enableWebVTT || s && this.config.enableIMSC1) {
								if (_a(this.tracks, i)) return void(this.tracks = i);
								if (this.textTracks = [], this.tracks = i, this.config.renderTextTracksNatively) {
									const e = this.media ? this.media.textTracks : null;
									this.tracks.forEach((t, i) => {
										let s;
										if (e && i < e.length) {
											let i = null;
											for (let s = 0; s < e.length; s++)
												if (To(e[s], t)) {
													i = e[s];
													break
												} i && (s = i)
										}
										if (s) Hs(s);
										else {
											const e = this._captionsOrSubtitlesFromCharacteristics(t);
											(s = this.createTextTrack(e, t.name, t.lang)) && (s.mode = "disabled")
										}
										s && (s.groupId = t.groupId, this.textTracks.push(s))
									})
								} else if (this.tracks.length) {
									const e = this.tracks.map(e => ({
										label: e.name,
										kind: e.type.toLowerCase(),
										default: e.default,
										subtitleTrack: e
									}));
									this.hls.trigger(Jt.NON_NATIVE_TEXT_TRACKS_FOUND, {
										tracks: e
									})
								}
							}
						}
						_captionsOrSubtitlesFromCharacteristics(e) {
							if (e.attrs.CHARACTERISTICS) {
								const t = /transcribes-spoken-dialog/gi.test(e.attrs.CHARACTERISTICS),
									i = /describes-music-and-sound/gi.test(e.attrs.CHARACTERISTICS);
								if (t && i) return "captions"
							}
							return "subtitles"
						}
						onManifestLoaded(e, t) {
							this.config.enableCEA708Captions && t.captions && t.captions.forEach(e => {
								const t = /(?:CC|SERVICE)([1-4])/.exec(e.instreamId);
								if (!t) return;
								const i = `textTrack${t[1]}`,
									s = this.captionsProperties[i];
								s && (s.label = e.name, e.lang && (s.languageCode = e.lang), s.media = e)
							})
						}
						closedCaptionsForLevel(e) {
							const t = this.hls.levels[e.level];
							return null == t ? void 0 : t.attrs["CLOSED-CAPTIONS"]
						}
						onFragLoading(e, t) {
							const {
								cea608Parser1: i,
								cea608Parser2: s,
								lastSn: r,
								lastPartIndex: n
							} = this;
							if (this.enabled && i && s && t.frag.type === Us.MAIN) {
								var a, o;
								const e = t.frag.sn,
									l = null != (a = null == t ? void 0 : null == (o = t.part) ? void 0 : o.index) ? a : -1;
								e === r + 1 || e === r && l === n + 1 || (i.reset(), s.reset()), this.lastSn = e, this.lastPartIndex = l
							}
						}
						onFragLoaded(e, t) {
							const {
								frag: i,
								payload: s
							} = t, {
								initPTS: r,
								unparsedVttFrags: n
							} = this;
							if (i.type === Us.SUBTITLE)
								if (s.byteLength) {
									if (!r[i.cc]) return n.push(t), void(r.length && this.hls.trigger(Jt.SUBTITLE_FRAG_PROCESSED, {
										success: !1,
										frag: i,
										error: new Error("Missing initial subtitle PTS")
									}));
									const e = i.decryptdata,
										a = "stats" in t;
									if (null == e || !e.encrypted || a) {
										const e = this.tracks[i.level],
											t = this.vttCCs;
										t[i.cc] || (t[i.cc] = {
											start: i.start,
											prevCC: this.prevCC,
											new: !0
										}, this.prevCC = i.cc), e && e.textCodec === uo ? this._parseIMSC1(i, s) : this._parseVTTs(i, s, t)
									}
								} else this.hls.trigger(Jt.SUBTITLE_FRAG_PROCESSED, {
									success: !1,
									frag: i,
									error: new Error("Empty subtitle payload")
								})
						}
						_parseIMSC1(e, t) {
							const i = this.hls;
							mo(t, this.initPTS[e.cc], t => {
								this._appendCues(t, e.level), i.trigger(Jt.SUBTITLE_FRAG_PROCESSED, {
									success: !0,
									frag: e
								})
							}, t => {
								ni.log(`Failed to parse IMSC1: ${t}`), i.trigger(Jt.SUBTITLE_FRAG_PROCESSED, {
									success: !1,
									frag: e,
									error: t
								})
							})
						}
						_parseVTTs(e, t, i) {
							var s;
							const r = this.hls;
							co(null != (s = e.initSegment) && s.data ? as(e.initSegment.data, new Uint8Array(t)) : t, this.initPTS[e.cc], i, e.cc, e.start, t => {
								this._appendCues(t, e.level), r.trigger(Jt.SUBTITLE_FRAG_PROCESSED, {
									success: !0,
									frag: e
								})
							}, i => {
								this._fallbackToIMSC1(e, t), ni.log(`Failed to parse VTT cue: ${i}`), r.trigger(Jt.SUBTITLE_FRAG_PROCESSED, {
									success: !1,
									frag: e,
									error: i
								})
							})
						}
						_fallbackToIMSC1(e, t) {
							const i = this.tracks[e.level];
							i.textCodec || mo(t, this.initPTS[e.cc], () => {
								i.textCodec = uo, this._parseIMSC1(e, t)
							}, () => {
								i.textCodec = "wvtt"
							})
						}
						_appendCues(e, t) {
							const i = this.hls;
							if (this.config.renderTextTracksNatively) {
								const i = this.textTracks[t];
								if (!i || "disabled" === i.mode) return;
								e.forEach(e => js(i, e))
							} else {
								const s = this.tracks[t];
								if (!s) return;
								const r = s.default ? "default" : "subtitles" + t;
								i.trigger(Jt.CUES_PARSED, {
									type: "subtitles",
									cues: e,
									track: r
								})
							}
						}
						onFragDecrypted(e, t) {
							const {
								frag: i
							} = t;
							if (i.type === Us.SUBTITLE) {
								if (!this.initPTS[i.cc]) return void this.unparsedVttFrags.push(t);
								this.onFragLoaded(Jt.FRAG_LOADED, t)
							}
						}
						onSubtitleTracksCleared() {
							this.tracks = [], this.captionsTracks = {}
						}
						onFragParsingUserdata(e, t) {
							const {
								cea608Parser1: i,
								cea608Parser2: s
							} = this;
							if (!this.enabled || !i || !s) return;
							const {
								frag: r,
								samples: n
							} = t;
							if (r.type !== Us.MAIN || "NONE" !== this.closedCaptionsForLevel(r))
								for (let a = 0; a < n.length; a++) {
									const e = n[a].bytes;
									if (e) {
										const t = this.extractCea608Data(e);
										i.addData(n[a].pts, t[0]), s.addData(n[a].pts, t[1])
									}
								}
						}
						onBufferFlushing(e, {
							startOffset: t,
							endOffset: i,
							endOffsetSubtitles: s,
							type: r
						}) {
							const {
								media: n
							} = this;
							if (n && !(n.currentTime < i)) {
								if (!r || "video" === r) {
									const {
										captionsTracks: e
									} = this;
									Object.keys(e).forEach(s => Ks(e[s], t, i))
								}
								if (this.config.renderTextTracksNatively && 0 === t && void 0 !== s) {
									const {
										textTracks: e
									} = this;
									Object.keys(e).forEach(i => Ks(e[i], t, s))
								}
							}
						}
						extractCea608Data(e) {
							const t = [
									[],
									[]
								],
								i = 31 & e[0];
							let s = 2;
							for (let r = 0; r < i; r++) {
								const i = e[s++],
									r = 127 & e[s++],
									n = 127 & e[s++];
								if ((0 !== r || 0 !== n) && 0 != (4 & i)) {
									const e = 3 & i;
									0 !== e && 1 !== e || (t[e].push(r), t[e].push(n))
								}
							}
							return t
						}
					},
					audioStreamController: class extends Zr {
						constructor(e, t, i) {
							super(e, t, i, "[audio-stream-controller]", Us.AUDIO), this.videoBuffer = null, this.videoTrackCC = -1, this.waitingVideoCC = -1, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this._registerListeners()
						}
						onHandlerDestroying() {
							this._unregisterListeners(), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null
						}
						_registerListeners() {
							const {
								hls: e
							} = this;
							e.on(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.on(Jt.LEVEL_LOADED, this.onLevelLoaded, this), e.on(Jt.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.on(Jt.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(Jt.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(Jt.ERROR, this.onError, this), e.on(Jt.BUFFER_RESET, this.onBufferReset, this), e.on(Jt.BUFFER_CREATED, this.onBufferCreated, this), e.on(Jt.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(Jt.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(Jt.FRAG_BUFFERED, this.onFragBuffered, this)
						}
						_unregisterListeners() {
							const {
								hls: e
							} = this;
							e.off(Jt.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(Jt.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.off(Jt.LEVEL_LOADED, this.onLevelLoaded, this), e.off(Jt.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.off(Jt.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(Jt.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(Jt.ERROR, this.onError, this), e.off(Jt.BUFFER_RESET, this.onBufferReset, this), e.off(Jt.BUFFER_CREATED, this.onBufferCreated, this), e.off(Jt.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(Jt.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(Jt.FRAG_BUFFERED, this.onFragBuffered, this)
						}
						onInitPtsFound(e, {
							frag: t,
							id: i,
							initPTS: s,
							timescale: r
						}) {
							if ("main" === i) {
								const e = t.cc;
								this.initPTS[t.cc] = {
									baseTime: s,
									timescale: r
								}, this.log(`InitPTS for cc: ${e} found from main: ${s}`), this.videoTrackCC = e, this.state === Jr.WAITING_INIT_PTS && this.tick()
							}
						}
						startLoad(e) {
							if (!this.levels) return this.startPosition = e, void(this.state = Jr.STOPPED);
							const t = this.lastCurrentTime;
							this.stopLoad(), this.setInterval(Ea), t > 0 && -1 === e ? (this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t, this.state = Jr.IDLE) : (this.loadedmetadata = !1, this.state = Jr.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
						}
						doTick() {
							switch (this.state) {
								case Jr.IDLE:
									this.doTickIdle();
									break;
								case Jr.WAITING_TRACK: {
									var e;
									const {
										levels: t,
										trackId: i
									} = this, s = null == t ? void 0 : null == (e = t[i]) ? void 0 : e.details;
									if (s) {
										if (this.waitForCdnTuneIn(s)) break;
										this.state = Jr.WAITING_INIT_PTS
									}
									break
								}
								case Jr.FRAG_LOADING_WAITING_RETRY: {
									var t;
									const e = performance.now(),
										i = this.retryDate;
									(!i || e >= i || null != (t = this.media) && t.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded(this.trackId), this.state = Jr.IDLE);
									break
								}
								case Jr.WAITING_INIT_PTS: {
									const e = this.waitingData;
									if (e) {
										const {
											frag: t,
											part: i,
											cache: s,
											complete: r
										} = e;
										if (void 0 !== this.initPTS[t.cc]) {
											this.waitingData = null, this.waitingVideoCC = -1, this.state = Jr.FRAG_LOADING;
											const e = {
												frag: t,
												part: i,
												payload: s.flush(),
												networkDetails: null
											};
											this._handleFragmentLoadProgress(e), r && super._handleFragmentLoadComplete(e)
										} else if (this.videoTrackCC !== this.waitingVideoCC) this.log(`Waiting fragment cc (${t.cc}) cancelled because video is at cc ${this.videoTrackCC}`), this.clearWaitingFragment();
										else {
											const e = this.getLoadPosition(),
												i = Br.bufferInfo(this.mediaBuffer, e, this.config.maxBufferHole);
											vr(i.end, this.config.maxFragLookUpTolerance, t) < 0 && (this.log(`Waiting fragment cc (${t.cc}) @ ${t.start} cancelled because another fragment at ${i.end} is needed`), this.clearWaitingFragment())
										}
									} else this.state = Jr.IDLE
								}
							}
							this.onTickEnd()
						}
						clearWaitingFragment() {
							const e = this.waitingData;
							e && (this.fragmentTracker.removeFragment(e.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = Jr.IDLE)
						}
						resetLoadingState() {
							this.clearWaitingFragment(), super.resetLoadingState()
						}
						onTickEnd() {
							const {
								media: e
							} = this;
							null != e && e.readyState && (this.lastCurrentTime = e.currentTime)
						}
						doTickIdle() {
							const {
								hls: e,
								levels: t,
								media: i,
								trackId: s
							} = this, r = e.config;
							if (null == t || !t[s]) return;
							if (!i && (this.startFragRequested || !r.startFragPrefetch)) return;
							const n = t[s],
								a = n.details;
							if (!a || a.live && this.levelLastLoaded !== s || this.waitForCdnTuneIn(a)) return void(this.state = Jr.WAITING_TRACK);
							const o = this.mediaBuffer ? this.mediaBuffer : this.media;
							this.bufferFlushed && o && (this.bufferFlushed = !1, this.afterBufferFlushed(o, ui.AUDIO, Us.AUDIO));
							const l = this.getFwdBufferInfo(o, Us.AUDIO);
							if (null === l) return;
							const {
								bufferedTrack: d,
								switchingTrack: h
							} = this;
							if (!h && this._streamEnded(l, a)) return e.trigger(Jt.BUFFER_EOS, {
								type: "audio"
							}), void(this.state = Jr.ENDED);
							const c = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, Us.MAIN),
								u = l.len,
								f = this.getMaxBufferLength(null == c ? void 0 : c.len);
							if (u >= f && !h) return;
							const g = a.fragments[0].start;
							let p = l.end;
							if (h && i) {
								const e = this.getLoadPosition();
								d && h.attrs !== d.attrs && (p = e), a.PTSKnown && e < g && (l.end > g || l.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), i.currentTime = g + .05)
							}
							let m = this.getNextFragment(p, a),
								v = !1;
							if (m && this.isLoopLoading(m, p) && (v = !!m.gap, m = this.getNextFragmentLoopLoading(m, a, l, Us.MAIN, f)), !m) return void(this.bufferFlushed = !0);
							const y = c && m.start > c.end + a.targetduration;
							if (y || (null == c || !c.len) && l.len) {
								const e = this.getAppendedFrag(m.start, Us.MAIN);
								if (null === e) return;
								if (v || (v = !!e.gap || !!y && 0 === c.len), y && !v || v && l.nextStart && l.nextStart < e.end) return
							}
							this.loadFragment(m, n, p)
						}
						getMaxBufferLength(e) {
							const t = super.getMaxBufferLength();
							return e ? Math.min(Math.max(t, e), this.config.maxMaxBufferLength) : t
						}
						onMediaDetaching() {
							this.videoBuffer = null, super.onMediaDetaching()
						}
						onAudioTracksUpdated(e, {
							audioTracks: t
						}) {
							this.resetTransmuxer(), this.levels = t.map(e => new ir(e))
						}
						onAudioTrackSwitching(e, t) {
							const i = !!t.url;
							this.trackId = t.id;
							const {
								fragCurrent: s
							} = this;
							s && (s.abortRequests(), this.removeUnbufferedFrags(s.start)), this.resetLoadingState(), i ? this.setInterval(Ea) : this.resetTransmuxer(), i ? (this.switchingTrack = t, this.state = Jr.IDLE) : (this.switchingTrack = null, this.bufferedTrack = t, this.state = Jr.STOPPED), this.tick()
						}
						onManifestLoading() {
							this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = !1, this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.startFragRequested = !1, this.trackId = this.videoTrackCC = this.waitingVideoCC = -1
						}
						onLevelLoaded(e, t) {
							this.mainDetails = t.details, null !== this.cachedTrackLoadedData && (this.hls.trigger(Jt.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null)
						}
						onAudioTrackLoaded(e, t) {
							var i;
							if (null == this.mainDetails) return void(this.cachedTrackLoadedData = t);
							const {
								levels: s
							} = this, {
								details: r,
								id: n
							} = t;
							if (!s) return void this.warn(`Audio tracks were reset while loading level ${n}`);
							this.log(`Track ${n} loaded [${r.startSN},${r.endSN}]${r.lastPartSn?`[part-${r.lastPartSn}-${r.lastPartIndex}]`:""},duration:${r.totalduration}`);
							const a = s[n];
							let o = 0;
							if (r.live || null != (i = a.details) && i.live) {
								const e = this.mainDetails;
								if (r.fragments[0] || (r.deltaUpdateFailed = !0), r.deltaUpdateFailed || !e) return;
								!a.details && r.hasProgramDateTime && e.hasProgramDateTime ? (Kr(r, e), o = r.fragments[0].start) : o = this.alignPlaylists(r, a.details)
							}
							a.details = r, this.levelLastLoaded = n, this.startFragRequested || !this.mainDetails && r.live || this.setStartPosition(a.details, o), this.state !== Jr.WAITING_TRACK || this.waitForCdnTuneIn(r) || (this.state = Jr.IDLE), this.tick()
						}
						_handleFragmentLoadProgress(e) {
							var t;
							const {
								frag: i,
								part: s,
								payload: r
							} = e, {
								config: n,
								trackId: a,
								levels: o
							} = this;
							if (!o) return void this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${i.sn} of level ${i.level} will not be buffered`);
							const l = o[a];
							if (!l) return void this.warn("Audio track is undefined on fragment load progress");
							const d = l.details;
							if (!d) return this.warn("Audio track details undefined on fragment load progress"), void this.removeUnbufferedFrags(i.start);
							const h = n.defaultAudioCodec || l.audioCodec || "mp4a.40.2";
							let c = this.transmuxer;
							c || (c = this.transmuxer = new la(this.hls, Us.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
							const u = this.initPTS[i.cc],
								f = null == (t = i.initSegment) ? void 0 : t.data;
							if (void 0 !== u) {
								const e = !1,
									t = s ? s.index : -1,
									n = -1 !== t,
									a = new $r(i.level, i.sn, i.stats.chunkCount, r.byteLength, t, n);
								c.push(r, f, h, "", i, s, d.totalduration, e, a, u)
							} else {
								this.log(`Unknown video PTS for cc ${i.cc}, waiting for video PTS before demuxing audio frag ${i.sn} of [${d.startSN} ,${d.endSN}],track ${a}`);
								const {
									cache: e
								} = this.waitingData = this.waitingData || {
									frag: i,
									part: s,
									cache: new ya,
									complete: !1
								};
								e.push(new Uint8Array(r)), this.waitingVideoCC = this.videoTrackCC, this.state = Jr.WAITING_INIT_PTS
							}
						}
						_handleFragmentLoadComplete(e) {
							this.waitingData ? this.waitingData.complete = !0 : super._handleFragmentLoadComplete(e)
						}
						onBufferReset() {
							this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
						}
						onBufferCreated(e, t) {
							const i = t.tracks.audio;
							i && (this.mediaBuffer = i.buffer || null), t.tracks.video && (this.videoBuffer = t.tracks.video.buffer || null)
						}
						onFragBuffered(e, t) {
							const {
								frag: i,
								part: s
							} = t;
							if (i.type === Us.AUDIO)
								if (this.fragContextChanged(i)) this.warn(`Fragment ${i.sn}${s?" p: "+s.index:""} of level ${i.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`);
								else {
									if ("initSegment" !== i.sn) {
										this.fragPrevious = i;
										const e = this.switchingTrack;
										e && (this.bufferedTrack = e, this.switchingTrack = null, this.hls.trigger(Jt.AUDIO_TRACK_SWITCHED, Yt({}, e)))
									}
									this.fragBufferedComplete(i, s)
								}
							else if (!this.loadedmetadata && i.type === Us.MAIN) {
								const e = this.videoBuffer || this.media;
								if (e) {
									Br.getBuffered(e).length && (this.loadedmetadata = !0)
								}
							}
						}
						onError(e, t) {
							var i;
							if (t.fatal) this.state = Jr.ERROR;
							else switch (t.details) {
								case ei.FRAG_GAP:
								case ei.FRAG_PARSING_ERROR:
								case ei.FRAG_DECRYPT_ERROR:
								case ei.FRAG_LOAD_ERROR:
								case ei.FRAG_LOAD_TIMEOUT:
								case ei.KEY_LOAD_ERROR:
								case ei.KEY_LOAD_TIMEOUT:
									this.onFragmentOrKeyLoadError(Us.AUDIO, t);
									break;
								case ei.AUDIO_TRACK_LOAD_ERROR:
								case ei.AUDIO_TRACK_LOAD_TIMEOUT:
								case ei.LEVEL_PARSING_ERROR:
									t.levelRetry || this.state !== Jr.WAITING_TRACK || (null == (i = t.context) ? void 0 : i.type) !== Ns.AUDIO_TRACK || (this.state = Jr.IDLE);
									break;
								case ei.BUFFER_FULL_ERROR:
									if (!t.parent || "audio" !== t.parent) return;
									this.reduceLengthAndFlushBuffer(t) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
									break;
								case ei.INTERNAL_EXCEPTION:
									this.recoverWorkerError(t)
							}
						}
						onBufferFlushed(e, {
							type: t
						}) {
							t === ui.AUDIO && (this.bufferFlushed = !0, this.state === Jr.ENDED && (this.state = Jr.IDLE))
						}
						_handleTransmuxComplete(e) {
							var t;
							const i = "audio",
								{
									hls: s
								} = this,
								{
									remuxResult: r,
									chunkMeta: n
								} = e,
								a = this.getCurrentContext(n);
							if (!a) return void this.resetWhenMissingContext(n);
							const {
								frag: o,
								part: l,
								level: d
							} = a, {
								details: h
							} = d, {
								audio: c,
								text: u,
								id3: f,
								initSegment: g
							} = r;
							if (!this.fragContextChanged(o) && h) {
								if (this.state = Jr.PARSING, this.switchingTrack && c && this.completeAudioSwitch(this.switchingTrack), null != g && g.tracks) {
									const e = o.initSegment || o;
									this._bufferInitSegment(g.tracks, e, n), s.trigger(Jt.FRAG_PARSING_INIT_SEGMENT, {
										frag: e,
										id: i,
										tracks: g.tracks
									})
								}
								if (c) {
									const {
										startPTS: e,
										endPTS: t,
										startDTS: i,
										endDTS: s
									} = c;
									l && (l.elementaryStreams[ui.AUDIO] = {
										startPTS: e,
										endPTS: t,
										startDTS: i,
										endDTS: s
									}), o.setElementaryStreamInfo(ui.AUDIO, e, t, i, s), this.bufferFragmentData(c, o, l, n)
								}
								if (null != f && null != (t = f.samples) && t.length) {
									const e = Xt({
										id: i,
										frag: o,
										details: h
									}, f);
									s.trigger(Jt.FRAG_PARSING_METADATA, e)
								}
								if (u) {
									const e = Xt({
										id: i,
										frag: o,
										details: h
									}, u);
									s.trigger(Jt.FRAG_PARSING_USERDATA, e)
								}
							} else this.fragmentTracker.removeFragment(o)
						}
						_bufferInitSegment(e, t, i) {
							if (this.state !== Jr.PARSING) return;
							e.video && delete e.video;
							const s = e.audio;
							if (!s) return;
							s.levelCodec = s.codec, s.id = "audio", this.log(`Init audio buffer, container:${s.container}, codecs[parsed]=[${s.codec}]`), this.hls.trigger(Jt.BUFFER_CODECS, e);
							const r = s.initSegment;
							if (null != r && r.byteLength) {
								const e = {
									type: "audio",
									frag: t,
									part: null,
									chunkMeta: i,
									parent: t.type,
									data: r
								};
								this.hls.trigger(Jt.BUFFER_APPENDING, e)
							}
							this.tick()
						}
						loadFragment(e, t, i) {
							const s = this.fragmentTracker.getState(e);
							var r;
							(this.fragCurrent = e, this.switchingTrack || s === kr.NOT_LOADED || s === kr.PARTIAL) ? "initSegment" === e.sn ? this._loadInitSegment(e, t) : null != (r = t.details) && r.live && !this.initPTS[e.cc] ? (this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`), this.state = Jr.WAITING_INIT_PTS) : (this.startFragRequested = !0, super.loadFragment(e, t, i)): this.clearTrackerIfNeeded(e)
						}
						completeAudioSwitch(e) {
							const {
								hls: t,
								media: i,
								bufferedTrack: s
							} = this, r = null == s ? void 0 : s.attrs, n = e.attrs;
							i && r && (r.CHANNELS !== n.CHANNELS || r.NAME !== n.NAME || r.LANGUAGE !== n.LANGUAGE) && (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio")), this.bufferedTrack = e, this.switchingTrack = null, t.trigger(Jt.AUDIO_TRACK_SWITCHED, Yt({}, e))
						}
					},
					audioTrackController: class extends Sr {
						constructor(e) {
							super(e, "[audio-track-controller]"), this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners()
						}
						registerListeners() {
							const {
								hls: e
							} = this;
							e.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.on(Jt.MANIFEST_PARSED, this.onManifestParsed, this), e.on(Jt.LEVEL_LOADING, this.onLevelLoading, this), e.on(Jt.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(Jt.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(Jt.ERROR, this.onError, this)
						}
						unregisterListeners() {
							const {
								hls: e
							} = this;
							e.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.off(Jt.MANIFEST_PARSED, this.onManifestParsed, this), e.off(Jt.LEVEL_LOADING, this.onLevelLoading, this), e.off(Jt.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(Jt.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(Jt.ERROR, this.onError, this)
						}
						destroy() {
							this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy()
						}
						onManifestLoading() {
							this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0
						}
						onManifestParsed(e, t) {
							this.tracks = t.audioTracks || []
						}
						onAudioTrackLoaded(e, t) {
							const {
								id: i,
								groupId: s,
								details: r
							} = t, n = this.tracksInGroup[i];
							if (!n || n.groupId !== s) return void this.warn(`Track with id:${i} and group:${s} not found in active group ${n.groupId}`);
							const a = n.details;
							n.details = t.details, this.log(`audio-track ${i} "${n.name}" lang:${n.lang} group:${s} loaded [${r.startSN}-${r.endSN}]`), i === this.trackId && this.playlistLoaded(i, t, a)
						}
						onLevelLoading(e, t) {
							this.switchLevel(t.level)
						}
						onLevelSwitching(e, t) {
							this.switchLevel(t.level)
						}
						switchLevel(e) {
							const t = this.hls.levels[e];
							if (null == t || !t.audioGroupIds) return;
							const i = t.audioGroupIds[t.urlId];
							if (this.groupId !== i) {
								this.groupId = i || null;
								const e = this.tracks.filter(e => !i || e.groupId === i);
								this.selectDefaultTrack && !e.some(e => e.default) && (this.selectDefaultTrack = !1), this.tracksInGroup = e;
								const t = {
									audioTracks: e
								};
								this.log(`Updating audio tracks, ${e.length} track(s) found in group:${i}`), this.hls.trigger(Jt.AUDIO_TRACKS_UPDATED, t), this.selectInitialTrack()
							} else this.shouldReloadPlaylist(this.currentTrack) && this.setAudioTrack(this.trackId)
						}
						onError(e, t) {
							!t.fatal && t.context && t.context.type === Ns.AUDIO_TRACK && t.context.id === this.trackId && t.context.groupId === this.groupId && (this.requestScheduled = -1, this.checkRetry(t))
						}
						get audioTracks() {
							return this.tracksInGroup
						}
						get audioTrack() {
							return this.trackId
						}
						set audioTrack(e) {
							this.selectDefaultTrack = !1, this.setAudioTrack(e)
						}
						setAudioTrack(e) {
							const t = this.tracksInGroup;
							if (e < 0 || e >= t.length) return void this.warn("Invalid id passed to audio-track controller");
							this.clearTimer();
							const i = this.currentTrack;
							t[this.trackId];
							const s = t[e],
								{
									groupId: r,
									name: n
								} = s;
							if (this.log(`Switching to audio-track ${e} "${n}" lang:${s.lang} group:${r}`), this.trackId = e, this.currentTrack = s, this.selectDefaultTrack = !1, this.hls.trigger(Jt.AUDIO_TRACK_SWITCHING, Yt({}, s)), s.details && !s.details.live) return;
							const a = this.switchParams(s.url, null == i ? void 0 : i.details);
							this.loadPlaylist(a)
						}
						selectInitialTrack() {
							const e = this.tracksInGroup,
								t = this.findTrackId(this.currentTrack) | this.findTrackId(null);
							if (-1 !== t) this.setAudioTrack(t);
							else {
								const t = new Error(`No track found for running audio group-ID: ${this.groupId} track count: ${e.length}`);
								this.warn(t.message), this.hls.trigger(Jt.ERROR, {
									type: Zt.MEDIA_ERROR,
									details: ei.AUDIO_TRACK_LOAD_ERROR,
									fatal: !0,
									error: t
								})
							}
						}
						findTrackId(e) {
							const t = this.tracksInGroup;
							for (let i = 0; i < t.length; i++) {
								const s = t[i];
								if (!this.selectDefaultTrack || s.default) {
									if (!e || void 0 !== e.attrs["STABLE-RENDITION-ID"] && e.attrs["STABLE-RENDITION-ID"] === s.attrs["STABLE-RENDITION-ID"]) return s.id;
									if (e.name === s.name && e.lang === s.lang) return s.id
								}
							}
							return -1
						}
						loadPlaylist(e) {
							super.loadPlaylist();
							const t = this.tracksInGroup[this.trackId];
							if (this.shouldLoadPlaylist(t)) {
								const s = t.id,
									r = t.groupId;
								let n = t.url;
								if (e) try {
									n = e.addDirectives(n)
								} catch (i) {
									this.warn(`Could not construct new URL with HLS Delivery Directives: ${i}`)
								}
								this.log(`loading audio-track playlist ${s} "${t.name}" lang:${t.lang} group:${r}`), this.clearTimer(), this.hls.trigger(Jt.AUDIO_TRACK_LOADING, {
									url: n,
									id: s,
									groupId: r,
									deliveryDirectives: e || null
								})
							}
						}
					},
					emeController: Lo,
					cmcdController: Io,
					contentSteeringController: class {
						constructor(e) {
							this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e, this.log = ni.log.bind(ni, "[content-steering]:"), this.registerListeners()
						}
						registerListeners() {
							const e = this.hls;
							e.on(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.on(Jt.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(Jt.MANIFEST_PARSED, this.onManifestParsed, this), e.on(Jt.ERROR, this.onError, this)
						}
						unregisterListeners() {
							const e = this.hls;
							e && (e.off(Jt.MANIFEST_LOADING, this.onManifestLoading, this), e.off(Jt.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(Jt.MANIFEST_PARSED, this.onManifestParsed, this), e.off(Jt.ERROR, this.onError, this))
						}
						startLoad() {
							if (this.started = !0, self.clearTimeout(this.reloadTimer), this.enabled && this.uri)
								if (this.updated) {
									const e = Math.max(1e3 * this.timeToLoad - (performance.now() - this.updated), 0);
									this.scheduleRefresh(this.uri, e)
								} else this.loadSteeringManifest(this.uri)
						}
						stopLoad() {
							this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), self.clearTimeout(this.reloadTimer)
						}
						destroy() {
							this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null
						}
						removeLevel(e) {
							const t = this.levels;
							t && (this.levels = t.filter(t => t !== e))
						}
						onManifestLoading() {
							this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null
						}
						onManifestLoaded(e, t) {
							const {
								contentSteering: i
							} = t;
							null !== i && (this.pathwayId = i.pathwayId, this.uri = i.uri, this.started && this.startLoad())
						}
						onManifestParsed(e, t) {
							this.audioTracks = t.audioTracks, this.subtitleTracks = t.subtitleTracks
						}
						onError(e, t) {
							const {
								errorAction: i
							} = t;
							if ((null == i ? void 0 : i.action) === _r.SendAlternateToPenaltyBox && i.flags === br.MoveAllAlternatesMatchingHost) {
								let e = this.pathwayPriority;
								const t = this.pathwayId;
								this.penalizedPathways[t] || (this.penalizedPathways[t] = performance.now()), !e && this.levels && (e = this.levels.reduce((e, t) => (-1 === e.indexOf(t.pathwayId) && e.push(t.pathwayId), e), [])), e && e.length > 1 && (this.updatePathwayPriority(e), i.resolved = this.pathwayId !== t)
							}
						}
						filterParsedLevels(e) {
							this.levels = e;
							let t = this.getLevelsForPathway(this.pathwayId);
							if (0 === t.length) {
								const i = e[0].pathwayId;
								this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${i}"`), t = this.getLevelsForPathway(i), this.pathwayId = i
							}
							return t.length !== e.length ? (this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t) : e
						}
						getLevelsForPathway(e) {
							return null === this.levels ? [] : this.levels.filter(t => e === t.pathwayId)
						}
						updatePathwayPriority(e) {
							let t;
							this.pathwayPriority = e;
							const i = this.penalizedPathways,
								s = performance.now();
							Object.keys(i).forEach(e => {
								s - i[e] > Do && delete i[e]
							});
							for (let r = 0; r < e.length; r++) {
								const s = e[r];
								if (i[s]) continue;
								if (s === this.pathwayId) return;
								const n = this.hls.nextLoadLevel,
									a = this.hls.levels[n];
								if ((t = this.getLevelsForPathway(s)).length > 0) {
									this.log(`Setting Pathway to "${s}"`), this.pathwayId = s, this.hls.trigger(Jt.LEVELS_UPDATED, {
										levels: t
									});
									const e = this.hls.levels[n];
									a && e && this.levels && (e.attrs["STABLE-VARIANT-ID"] !== a.attrs["STABLE-VARIANT-ID"] && e.bitrate !== a.bitrate && this.log(`Unstable Pathways change from bitrate ${a.bitrate} to ${e.bitrate}`), this.hls.nextLoadLevel = n);
									break
								}
							}
						}
						clonePathways(e) {
							const t = this.levels;
							if (!t) return;
							const i = {},
								s = {};
							e.forEach(e => {
								const {
									ID: r,
									"BASE-ID": n,
									"URI-REPLACEMENT": a
								} = e;
								if (t.some(e => e.pathwayId === r)) return;
								const o = this.getLevelsForPathway(n).map(e => {
									const t = Xt({}, e);
									t.details = void 0, t.url = Po(e.uri, e.attrs["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", a);
									const n = new li(e.attrs);
									n["PATHWAY-ID"] = r;
									const o = n.AUDIO && `${n.AUDIO}_clone_${r}`,
										l = n.SUBTITLES && `${n.SUBTITLES}_clone_${r}`;
									o && (i[n.AUDIO] = o, n.AUDIO = o), l && (s[n.SUBTITLES] = l, n.SUBTITLES = l), t.attrs = n;
									const d = new ir(t);
									return Rr(d, "audio", o), Rr(d, "text", l), d
								});
								t.push(...o), Co(this.audioTracks, i, a, r), Co(this.subtitleTracks, s, a, r)
							})
						}
						loadSteeringManifest(e) {
							const t = this.hls.config,
								i = t.loader;
							let s;
							this.loader && this.loader.destroy(), this.loader = new i(t);
							try {
								s = new self.URL(e)
							} catch (d) {
								return this.enabled = !1, void this.log(`Failed to parse Steering Manifest URI: ${e}`)
							}
							if ("data:" !== s.protocol) {
								const e = 0 | (this.hls.bandwidthEstimate || t.abrEwmaDefaultEstimate);
								s.searchParams.set("_HLS_pathway", this.pathwayId), s.searchParams.set("_HLS_throughput", "" + e)
							}
							const r = {
									responseType: "json",
									url: s.href
								},
								n = t.steeringManifestLoadPolicy.default,
								a = n.errorRetry || n.timeoutRetry || {},
								o = {
									loadPolicy: n,
									timeout: n.maxLoadTimeMs,
									maxRetry: a.maxNumRetry || 0,
									retryDelay: a.retryDelayMs || 0,
									maxRetryDelay: a.maxRetryDelayMs || 0
								},
								l = {
									onSuccess: (e, t, i, r) => {
										this.log(`Loaded steering manifest: "${s}"`);
										const n = e.data;
										if (1 !== n.VERSION) return void this.log(`Steering VERSION ${n.VERSION} not supported!`);
										this.updated = performance.now(), this.timeToLoad = n.TTL;
										const {
											"RELOAD-URI": a,
											"PATHWAY-CLONES": o,
											"PATHWAY-PRIORITY": l
										} = n;
										if (a) try {
											this.uri = new self.URL(a, s).href
										} catch (d) {
											return this.enabled = !1, void this.log(`Failed to parse Steering Manifest RELOAD-URI: ${a}`)
										}
										this.scheduleRefresh(this.uri || i.url), o && this.clonePathways(o), l && this.updatePathwayPriority(l)
									},
									onError: (e, t, i, s) => {
										if (this.log(`Error loading steering manifest: ${e.code} ${e.text} (${t.url})`), this.stopLoad(), 410 === e.code) return this.enabled = !1, void this.log(`Steering manifest ${t.url} no longer available`);
										let r = 1e3 * this.timeToLoad;
										if (429 !== e.code) this.scheduleRefresh(this.uri || t.url, r);
										else {
											const e = this.loader;
											if ("function" == typeof(null == e ? void 0 : e.getResponseHeader)) {
												const t = e.getResponseHeader("Retry-After");
												t && (r = 1e3 * parseFloat(t))
											}
											this.log(`Steering manifest ${t.url} rate limited`)
										}
									},
									onTimeout: (e, t, i) => {
										this.log(`Timeout loading steering manifest (${t.url})`), this.scheduleRefresh(this.uri || t.url)
									}
								};
							this.log(`Requesting steering manifest: ${s}`), this.loader.load(r, o, l)
						}
						scheduleRefresh(e, t = 1e3 * this.timeToLoad) {
							self.clearTimeout(this.reloadTimer), this.reloadTimer = self.setTimeout(() => {
								this.loadSteeringManifest(e)
							}, t)
						}
					}
				});

			function $o(e) {
				return e && "object" == typeof e ? Array.isArray(e) ? e.map($o) : Object.keys(e).reduce((t, i) => (t[i] = $o(e[i]), t), {}) : e
			}

			function Vo(e) {
				const t = e.loader;
				if (t !== Fo && t !== xo) ni.log("[config]: Custom loader detected, cannot enable progressive streaming"), e.progressive = !1;
				else {
					(function() {
						if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
							return new self.ReadableStream({}), !0
						} catch (e) {}
						return !1
					})() && (e.loader = Fo, e.progressive = !0, e.enableSoftwareAES = !0, ni.log("[config]: Progressive streaming enabled, using FetchLoader"))
				}
			}
			class Go {
				static get version() {
					return "1.4.6"
				}
				static isSupported() {
					return function() {
						const e = _s();
						if (!e) return !1;
						const t = en(),
							i = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
							s = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
						return !!i && !!s
					}()
				}
				static get Events() {
					return Jt
				}
				static get ErrorTypes() {
					return Zt
				}
				static get ErrorDetails() {
					return ei
				}
				static get DefaultConfig() {
					return Go.defaultConfig ? Go.defaultConfig : Bo
				}
				static set DefaultConfig(e) {
					Go.defaultConfig = e
				}
				constructor(e = {}) {
					this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new aa, this._autoLevelCapping = void 0, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null,
						function(e, t) {
							if (self.console && !0 === e || "object" == typeof e) {
								ri(e, "debug", "log", "info", "warn", "error");
								try {
									si.log(`Debug logs enabled for "${t}" in hls.js version 1.4.6`)
								} catch (i) {
									si = ii
								}
							} else si = ii
						}(e.debug || !1, "Hls instance");
					const t = this.config = function(e, t) {
						if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
						if (void 0 !== t.liveMaxLatencyDurationCount && (void 0 === t.liveSyncDurationCount || t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
						if (void 0 !== t.liveMaxLatencyDuration && (void 0 === t.liveSyncDuration || t.liveMaxLatencyDuration <= t.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
						const i = $o(e),
							s = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
						return ["manifest", "level", "frag"].forEach(e => {
							const r = `${"level"===e?"playlist":e}LoadPolicy`,
								n = void 0 === t[r],
								a = [];
							s.forEach(s => {
								const o = `${e}Loading${s}`,
									l = t[o];
								if (void 0 !== l && n) {
									a.push(o);
									const e = i[r].default;
									switch (t[r] = {
										default: e
									}, s) {
										case "TimeOut":
											e.maxLoadTimeMs = l, e.maxTimeToFirstByteMs = l;
											break;
										case "MaxRetry":
											e.errorRetry.maxNumRetry = l, e.timeoutRetry.maxNumRetry = l;
											break;
										case "RetryDelay":
											e.errorRetry.retryDelayMs = l, e.timeoutRetry.retryDelayMs = l;
											break;
										case "MaxRetryTimeout":
											e.errorRetry.maxRetryDelayMs = l, e.timeoutRetry.maxRetryDelayMs = l
									}
								}
							}), a.length && ni.warn(`hls.js config: "${a.join('", "')}" setting(s) are deprecated, use "${r}": ${JSON.stringify(t[r])}`)
						}), Yt(Yt({}, i), t)
					}(Go.DefaultConfig, e);
					this.userConfig = e, this._autoLevelCapping = -1, t.progressive && Vo(t);
					const {
						abrController: i,
						bufferController: s,
						capLevelController: r,
						errorController: n,
						fpsController: a
					} = t, o = new n(this), l = this.abrController = new i(this), d = this.bufferController = new s(this), h = this.capLevelController = new r(this), c = new a(this), u = new Vs(this), f = new Qs(this), g = t.contentSteeringController, p = g ? new g(this) : null, m = this.levelController = new Lr(this, p), v = new Ir(this), y = new Fr(this.config), E = this.streamController = new pa(this, v, y);
					h.setStreamController(E), c.setStreamController(E);
					const _ = [u, m, E];
					p && _.splice(1, 0, p), this.networkControllers = _;
					const b = [l, d, h, c, f, v];
					this.audioTrackController = this.createController(t.audioTrackController, _);
					const T = t.audioStreamController;
					T && _.push(new T(this, v, y)), this.subtitleTrackController = this.createController(t.subtitleTrackController, _);
					const S = t.subtitleStreamController;
					S && _.push(new S(this, v, y)), this.createController(t.timelineController, b), y.emeController = this.emeController = this.createController(t.emeController, b), this.cmcdController = this.createController(t.cmcdController, b), this.latencyController = this.createController(Js, b), this.coreComponents = b, _.push(o);
					const A = o.onErrorOut;
					"function" == typeof A && this.on(Jt.ERROR, A, o)
				}
				createController(e, t) {
					if (e) {
						const i = new e(this);
						return t && t.push(i), i
					}
					return null
				}
				on(e, t, i = this) {
					this._emitter.on(e, t, i)
				}
				once(e, t, i = this) {
					this._emitter.once(e, t, i)
				}
				removeAllListeners(e) {
					this._emitter.removeAllListeners(e)
				}
				off(e, t, i = this, s) {
					this._emitter.off(e, t, i, s)
				}
				listeners(e) {
					return this._emitter.listeners(e)
				}
				emit(e, t, i) {
					return this._emitter.emit(e, t, i)
				}
				trigger(e, t) {
					if (this.config.debug) return this.emit(e, e, t);
					try {
						return this.emit(e, e, t)
					} catch (i) {
						ni.error("An internal error happened while handling event " + e + '. Error message: "' + i.message + '". Here is a stacktrace:', i), this.trigger(Jt.ERROR, {
							type: Zt.OTHER_ERROR,
							details: ei.INTERNAL_EXCEPTION,
							fatal: !1,
							event: e,
							error: i
						})
					}
					return !1
				}
				listenerCount(e) {
					return this._emitter.listenerCount(e)
				}
				destroy() {
					ni.log("destroy"), this.trigger(Jt.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach(e => e.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach(e => e.destroy()), this.coreComponents.length = 0;
					const e = this.config;
					e.xhrSetup = e.fetchSetup = void 0, this.userConfig = null
				}
				attachMedia(e) {
					ni.log("attachMedia"), this._media = e, this.trigger(Jt.MEDIA_ATTACHING, {
						media: e
					})
				}
				detachMedia() {
					ni.log("detachMedia"), this.trigger(Jt.MEDIA_DETACHING, void 0), this._media = null
				}
				loadSource(e) {
					this.stopLoad();
					const t = this.media,
						i = this.url,
						s = this.url = qt.buildAbsoluteURL(self.location.href, e, {
							alwaysNormalize: !0
						});
					ni.log(`loadSource:${s}`), t && i && (i !== s || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)), this.trigger(Jt.MANIFEST_LOADING, {
						url: e
					})
				}
				startLoad(e = -1) {
					ni.log(`startLoad(${e})`), this.networkControllers.forEach(t => {
						t.startLoad(e)
					})
				}
				stopLoad() {
					ni.log("stopLoad"), this.networkControllers.forEach(e => {
						e.stopLoad()
					})
				}
				swapAudioCodec() {
					ni.log("swapAudioCodec"), this.streamController.swapAudioCodec()
				}
				recoverMediaError() {
					ni.log("recoverMediaError");
					const e = this._media;
					this.detachMedia(), e && this.attachMedia(e)
				}
				removeLevel(e, t = 0) {
					this.levelController.removeLevel(e, t)
				}
				get levels() {
					const e = this.levelController.levels;
					return e || []
				}
				get currentLevel() {
					return this.streamController.currentLevel
				}
				set currentLevel(e) {
					ni.log(`set currentLevel:${e}`), this.loadLevel = e, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch()
				}
				get nextLevel() {
					return this.streamController.nextLevel
				}
				set nextLevel(e) {
					ni.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch()
				}
				get loadLevel() {
					return this.levelController.level
				}
				set loadLevel(e) {
					ni.log(`set loadLevel:${e}`), this.levelController.manualLevel = e
				}
				get nextLoadLevel() {
					return this.levelController.nextLoadLevel
				}
				set nextLoadLevel(e) {
					this.levelController.nextLoadLevel = e
				}
				get firstLevel() {
					return Math.max(this.levelController.firstLevel, this.minAutoLevel)
				}
				set firstLevel(e) {
					ni.log(`set firstLevel:${e}`), this.levelController.firstLevel = e
				}
				get startLevel() {
					return this.levelController.startLevel
				}
				set startLevel(e) {
					ni.log(`set startLevel:${e}`), -1 !== e && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e
				}
				get capLevelToPlayerSize() {
					return this.config.capLevelToPlayerSize
				}
				set capLevelToPlayerSize(e) {
					const t = !!e;
					t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t)
				}
				get autoLevelCapping() {
					return this._autoLevelCapping
				}
				get bandwidthEstimate() {
					const {
						bwEstimator: e
					} = this.abrController;
					return e ? e.getEstimate() : NaN
				}
				get ttfbEstimate() {
					const {
						bwEstimator: e
					} = this.abrController;
					return e ? e.getEstimateTTFB() : NaN
				}
				set autoLevelCapping(e) {
					this._autoLevelCapping !== e && (ni.log(`set autoLevelCapping:${e}`), this._autoLevelCapping = e)
				}
				get maxHdcpLevel() {
					return this._maxHdcpLevel
				}
				set maxHdcpLevel(e) {
					Zs.indexOf(e) > -1 && (this._maxHdcpLevel = e)
				}
				get autoLevelEnabled() {
					return -1 === this.levelController.manualLevel
				}
				get manualLevel() {
					return this.levelController.manualLevel
				}
				get minAutoLevel() {
					const {
						levels: e,
						config: {
							minAutoBitrate: t
						}
					} = this;
					if (!e) return 0;
					const i = e.length;
					for (let s = 0; s < i; s++)
						if (e[s].maxBitrate >= t) return s;
					return 0
				}
				get maxAutoLevel() {
					const {
						levels: e,
						autoLevelCapping: t,
						maxHdcpLevel: i
					} = this;
					let s;
					if (s = -1 === t && e && e.length ? e.length - 1 : t, i)
						for (let r = s; r--;) {
							const t = e[r].attrs["HDCP-LEVEL"];
							if (t && t <= i) return r
						}
					return s
				}
				get nextAutoLevel() {
					return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
				}
				set nextAutoLevel(e) {
					this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
				}
				get playingDate() {
					return this.streamController.currentProgramDateTime
				}
				get mainForwardBufferInfo() {
					return this.streamController.getMainFwdBufferInfo()
				}
				get audioTracks() {
					const e = this.audioTrackController;
					return e ? e.audioTracks : []
				}
				get audioTrack() {
					const e = this.audioTrackController;
					return e ? e.audioTrack : -1
				}
				set audioTrack(e) {
					const t = this.audioTrackController;
					t && (t.audioTrack = e)
				}
				get subtitleTracks() {
					const e = this.subtitleTrackController;
					return e ? e.subtitleTracks : []
				}
				get subtitleTrack() {
					const e = this.subtitleTrackController;
					return e ? e.subtitleTrack : -1
				}
				get media() {
					return this._media
				}
				set subtitleTrack(e) {
					const t = this.subtitleTrackController;
					t && (t.subtitleTrack = e)
				}
				get subtitleDisplay() {
					const e = this.subtitleTrackController;
					return !!e && e.subtitleDisplay
				}
				set subtitleDisplay(e) {
					const t = this.subtitleTrackController;
					t && (t.subtitleDisplay = e)
				}
				get lowLatencyMode() {
					return this.config.lowLatencyMode
				}
				set lowLatencyMode(e) {
					this.config.lowLatencyMode = e
				}
				get liveSyncPosition() {
					return this.latencyController.liveSyncPosition
				}
				get latency() {
					return this.latencyController.latency
				}
				get maxLatency() {
					return this.latencyController.maxLatency
				}
				get targetLatency() {
					return this.latencyController.targetLatency
				}
				get drift() {
					return this.latencyController.drift
				}
				get forceStartLoad() {
					return this.streamController.forceStartLoad
				}
			}
			var jo;
			Go.defaultConfig = void 0,
				function(e) {
					e[e.Aborted = 1] = "Aborted", e[e.Network = 2] = "Network", e[e.Decode = 3] = "Decode", e[e.SrcNotSupported = 4] = "SrcNotSupported"
				}(jo || (jo = {}));
			const Ho = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
				Ko = /\.(mp4|og[gv]|webm|mov|m4v|avi)($|\?)/i;
			class qo extends yt {
				constructor() {
					super(...arguments), this.preload = "metadata", this._timeRAF = void 0, this._hasMediaElementConnected = !1, this._mediaElementDisposal = new Ae.a, this._isMediaWaiting = !1, this._ignoreNextAbortEvent = !1, this._ignoreNextEmptiedEvent = !1
				}
				get mediaElement() {
					return this._mediaElement
				}
				disconnectedCallback() {
					this._isMediaWaiting = !1, super.disconnectedCallback(), this._cancelTimeUpdates()
				}
				_cancelTimeUpdates() {
					ue(this._timeRAF) && window.cancelAnimationFrame(this._timeRAF), this._timeRAF = void 0
				}
				_requestTimeUpdates() {
					he(this._timeRAF) && this._requestTimeUpdate()
				}
				_requestTimeUpdate() {
					var e, t;
					const i = null !== (e = null === (t = this.mediaElement) || void 0 === t ? void 0 : t.currentTime) && void 0 !== e ? e : 0;
					this.state.currentTime !== i && this._updateCurrentTime(i), this._timeRAF = window.requestAnimationFrame(() => {
						he(this._timeRAF) || this._requestTimeUpdate()
					})
				}
				_updateCurrentTime(e, t) {
					var i, s;
					this.dispatchEvent(Re("vds-time-update", {
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
							const r = t ? `slot[name="${t}"]` : "slot:not([name])",
								n = null === (i = e.shadowRoot) || void 0 === i ? void 0 : i.querySelector(r),
								a = null !== (s = null == n ? void 0 : n.assignedNodes({
									flatten: !0
								})) && void 0 !== s ? s : [];
							return Array.prototype.filter.call(a, e => e.nodeType == Node.ELEMENT_NODE)
						}(this)[0];
						this._handleMediaElementDisconnect(), this._mediaElement = null != e ? e : void 0, this._handleMediaElementConnect()
					})
				}
				get _canMediaElementConnect() {
					return this.canLoad && !ce(this.mediaElement) && !this._hasMediaElementConnected
				}
				_handleMediaElementConnect() {
					if (!this._canMediaElementConnect) return;
					this.dispatchEvent(Re("vds-media-element-connected"));
					const e = this.mediaElement;
					e.hasAttribute("loop") && (this.loop = !0), e.removeAttribute("loop"), be(e, "controls", this.controls), this._attachMediaEventListeners(), this._observePlaysinline(), this._observeMediaSources(), this._startPreloadingMedia(), this._hasMediaElementConnected = !0, this._disconnectDisposal.add(this._handleMediaElementDisconnect.bind(this))
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
					this.dispatchEvent(Re("vds-playsinline-change", {
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
					e && e.length > 0 ? this.dispatchEvent(Re("vds-src-change", {
						detail: e
					})) : this.dispatchEvent(Re("vds-error", {
						detail: {
							message: "Missing media source",
							code: 4
						},
						triggerEvent: event
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
					if (ce(this.mediaElement)) return;
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
					Be(e).forEach(t => {
						const i = e[t].bind(this),
							s = Object(Ae.e)(this.mediaElement, t, async e => {
								await i(e)
							});
						this._mediaElementDisposal.add(s)
					})
				}
				_handleAbort(e) {
					this._ignoreNextAbortEvent || (this.dispatchEvent(Re("vds-abort", {
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
					this.state.started || this.dispatchEvent(Re("vds-can-play-through", {
						triggerEvent: e,
						detail: {
							duration: this.mediaElement.duration
						}
					}))
				}
				_handleLoadStart(e) {
					this._handleCurrentSrcChange(this.mediaElement.currentSrc, e), "" !== this.mediaElement.currentSrc ? this.dispatchEvent(Re("vds-load-start", {
						triggerEvent: e,
						detail: this._getMediaMetadata()
					})) : this._handleAbort()
				}
				_handleEmptied(e) {
					this._ignoreNextEmptiedEvent || this.dispatchEvent(Re("vds-emptied", {
						triggerEvent: e
					}))
				}
				_handleLoadedData(e) {
					this.dispatchEvent(Re("vds-loaded-data", {
						triggerEvent: e
					}))
				}
				_handleLoadedMetadata(e) {
					this.dispatchEvent(Re("vds-loaded-metadata", {
						triggerEvent: e,
						detail: this._getMediaMetadata()
					}))
				}
				_determineMediaType(e) {
					this.dispatchEvent(Re("vds-media-type-change", {
						detail: this._getMediaType(),
						triggerEvent: e
					}))
				}
				_handlePlay(e) {
					const t = Re("vds-play", {
						triggerEvent: e
					});
					t.autoplay = this._attemptingAutoplay, this.dispatchEvent(t)
				}
				_handlePause(e) {
					(1 !== this.mediaElement.readyState || this._isMediaWaiting) && (this._isMediaWaiting = !1, this._cancelTimeUpdates(), this.dispatchEvent(Re("vds-pause", {
						triggerEvent: e
					})))
				}
				_handlePlaying(e) {
					this._isMediaWaiting = !1;
					const t = Re("vds-playing", {
						triggerEvent: e
					});
					this.dispatchEvent(t), this._requestTimeUpdates()
				}
				_handleDurationChange(e) {
					this.mediaElement.ended && this._updateCurrentTime(this.mediaElement.duration, e), this.dispatchEvent(Re("vds-duration-change", {
						detail: this.mediaElement.duration,
						triggerEvent: e
					}))
				}
				_handleProgress(e) {
					this.dispatchEvent(Re("vds-progress", {
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
					this.dispatchEvent(Re("vds-seeking", {
						detail: this.mediaElement.currentTime,
						triggerEvent: e
					}))
				}
				_handleSeeked(e) {
					const t = Re("vds-seeked", {
						detail: this.mediaElement.currentTime,
						triggerEvent: e
					});
					this.dispatchEvent(t);
					const i = this.mediaElement.currentTime;
					if (Math.trunc(i) === Math.trunc(this.mediaElement.duration) && tt(this.mediaElement.duration) > tt(i) && (this._updateCurrentTime(this.mediaElement.duration, e), !this.mediaElement.ended)) try {
						this.play()
					} catch (s) {}
				}
				_handleStalled(e) {
					this.dispatchEvent(Re("vds-stalled", {
						triggerEvent: e
					})), this.mediaElement.readyState < 3 && (this._isMediaWaiting = !0, this.dispatchEvent(Re("vds-waiting", {
						triggerEvent: e
					})))
				}
				_handleVolumeChange(e) {
					this.dispatchEvent(Re("vds-volume-change", {
						detail: {
							volume: this.mediaElement.volume,
							muted: this.mediaElement.muted
						},
						triggerEvent: e
					}))
				}
				_handleWaiting(e) {
					this.mediaElement.readyState < 3 && (this._isMediaWaiting = !0, this.dispatchEvent(Re("vds-waiting", {
						triggerEvent: e
					})))
				}
				_handleSuspend(e) {
					const t = Re("vds-suspend", {
						triggerEvent: e
					});
					this.dispatchEvent(t)
				}
				_handleEnded(e) {
					this._cancelTimeUpdates(), this._updateCurrentTime(this.mediaElement.duration, e);
					const t = Re("vds-end", {
						triggerEvent: e
					});
					this.dispatchEvent(t), this.state.loop ? this._handleLoop() : this.dispatchEvent(Re("vds-ended", {
						triggerEvent: e
					}))
				}
				_handleLoop() {
					he(this.mediaElement.controls) && (this.mediaElement.controls = !1), this.dispatchEvent(Re("vds-loop-request", {
						bubbles: !0,
						composed: !0
					}))
				}
				_handleError(e) {
					const t = this.mediaElement.error;
					t && this.dispatchEvent(Re("vds-error", {
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
						const e = Re("vds-play-fail");
						throw e.autoplay = this._attemptingAutoplay, e.error = t, t
					}
				}
				async pause() {
					var e;
					return this._throwIfNotReadyForPlayback(), null === (e = this.mediaElement) || void 0 === e ? void 0 : e.pause()
				}
				_getMediaType() {
					return e = this.state.currentSrc, Ho.test(e) ? ot.a.Audio : Ko.test(e) ? ot.a.Video : ot.a.Unknown;
					var e
				}
			}(function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				n > 3 && a && Object.defineProperty(t, i, a)
			})([Object(r.b)({
				reflect: !0
			})], qo.prototype, "preload", void 0);
			class Wo extends Xe {
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
					return this.isSupportedNatively ? super._addFullscreenChangeEventListener(e) : this.isSupportedOnSafari ? Object(Ae.e)(this._host, "vds-video-presentation-change", this._handlePresentationModeChange.bind(this)) : de
				}
				_handlePresentationModeChange(e) {
					this._handleFullscreenChange(e)
				}
				_addFullscreenErrorEventListener(e) {
					return this.isSupportedNatively ? super._addFullscreenErrorEventListener(e) : de
				}
			}

			function Yo(e, t) {
				var i;
				if (t.bubbles && t.composed) return;
				const s = new Le(t.type, {
					triggerEvent: null !== (i = t.triggerEvent) && void 0 !== i ? i : t,
					detail: t.detail,
					bubbles: t.bubbles,
					cancelable: t.cancelable,
					composed: t.composed
				});
				e.dispatchEvent(s)
			}
			class zo {
				constructor(e) {
					this._host = e, this._listenerDisposal = new Ae.a;
					const t = e.firstUpdated;
					e.firstUpdated = i => {
						null == t || t.call(e, i), this._listenerDisposal.add(Object(Ae.e)(e, "vds-media-element-connected", () => {
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
					return !this.isSupported || ce(this._host.videoElement) ? de : Object(Ae.e)(this._host.videoElement, "webkitpresentationmodechanged", this._handlePresentationModeChange.bind(this))
				}
				_handlePresentationModeChange(e) {
					Yo(this._host, e), this._host.dispatchEvent(Re("vds-video-presentation-change", {
						detail: this.presentationMode,
						triggerEvent: e
					}))
				}
			}
			class Xo extends qo {
				constructor() {
					super(...arguments), this.resolution = void 0, this.presentationController = new zo(this), this.fullscreenController = new Wo(this, this.screenOrientationController, this.presentationController)
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
					this.dispatchEvent(Re("vds-video-src-change", {
						detail: {
							src: e,
							timestamp: t,
							userQualityChange: i
						}
					}))
				}
				connectedCallback() {
					super.connectedCallback(), this.dispatchEvent(Re("vds-view-type-change", {
						detail: at.Video
					}))
				}
				get videoElement() {
					return this.mediaElement
				}
			}

			function Qo(e) {
				return e.replace("vds-", "").replace(/-./g, e => e[1].toUpperCase())
			}(function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				n > 3 && a && Object.defineProperty(t, i, a)
			})([Object(r.b)()], Xo.prototype, "resolution", void 0);
			const Jo = "vds-hls-",
				Zo = ["lib-load", "instance", "unsupported"];

			function el(e) {
				return e.startsWith(Jo) && !Zo.some(t => e.startsWith(`${Jo}${t}`))
			}
			var tl = function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				return n > 3 && a && Object.defineProperty(t, i, a), a
			};
			const il = /\.(m3u8)($|\?)/i,
				sl = (new Set(["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"]), 5);
			class rl extends Xo {
				constructor() {
					super(), this._isHlsEngineAttached = !1, this._retryCount = 0, this.hlsConfig = {}, this._loadingUserLevel = !1, this.useInitOptimization = !1, this._currentHlsSrc = "", this._hlsEventListeners = [], Object.defineProperty(this, "hls-config", {
						set: e => {
							this.hlsConfig = e
						}
					})
				}
				get Hls() {
					return Go
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
				disconnectedCallback() {
					this._destroyHlsEngine(), super.disconnectedCallback()
				}
				get isHlsSupported() {
					var e, t;
					return null !== (e = null === (t = this.Hls) || void 0 === t ? void 0 : t.isSupported()) && void 0 !== e ? e : Ee()
				}
				get isHlsStream() {
					return this.state.src.some(e => il.test(e))
				}
				async _buildHlsEngine() {
					var e, t;
					let i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					if ((!ce(this.videoElement) || i || he(this.hlsEngine)) && (he(this.hlsEngine) || this._destroyHlsEngine(), this.Hls)) {
						if (null === (e = this.Hls) || void 0 === e || null === (t = e.isSupported) || void 0 === t || !t.call(e)) {
							const e = "[vds]: `hls.js` is not supported in this environment";
							return this.dispatchEvent(Re("vds-hls-unsupported")), void this.dispatchEvent(Re("vds-error", {
								detail: {
									message: e,
									code: jo.SrcNotSupported
								}
							}))
						}
						this._hlsEngine = new this.Hls(this.hlsConfig), this.dispatchEvent(Re("vds-hls-instance", {
							detail: this.hlsEngine
						})), this._listenToHlsEngine()
					}
				}
				_destroyHlsEngine() {
					var e;
					null === (e = this.hlsEngine) || void 0 === e || e.destroy(), this._hlsEngine = void 0, this._isHlsEngineAttached = !1
				}
				_attachHlsEngine() {
					this.isHlsEngineAttached || he(this.hlsEngine) || ce(this.videoElement) || (this.hlsEngine.attachMedia(this.videoElement), this._isHlsEngineAttached = !0)
				}
				_detachHlsEngine() {
					var e;
					this.isHlsEngineAttached && (null === (e = this.hlsEngine) || void 0 === e || e.detachMedia(), this._isHlsEngineAttached = !1, this._currentHlsSrc = "")
				}
				_loadSrcOnHlsEngine(e) {
					!ce(this.hlsEngine) && this.isHlsStream && e !== this._currentHlsSrc && (this.hlsEngine.loadSource(e), this._currentHlsSrc = e)
				}
				async _startPreloadingMedia() {
					var e;
					this.useInitOptimization && this.isHlsSupported && await this._handleHlsSrcChange(this.state.src[0] || (null === (e = this.mediaElement) || void 0 === e ? void 0 : e.src) || "");
					super._startPreloadingMedia()
				}
				_getMediaType() {
					return this.state.mediaType === ot.a.LiveVideo ? ot.a.LiveVideo : this.isHlsStream ? ot.a.Video : super._getMediaType()
				}
				_handleSrcChange(e) {
					this._currentHlsSrc.length > 0 && !e.includes(this._currentHlsSrc) && e.push(this._currentHlsSrc), super._handleSrcChange(e)
				}
				_handleAbort(e) {
					if (this.isHlsSupported)
						for (const t of this.state.src)
							if (il.test(t)) return void this._handleHlsSrcChange(t);
					super._handleAbort(e)
				}
				async _handleHlsSrcChange(e) {
					this._currentHlsSrc !== e && this.hasUpdated && this.canLoad && (this.isHlsStream ? (he(this.hlsEngine) && await this._buildHlsEngine(), this._attachHlsEngine(), this._loadSrcOnHlsEngine(e)) : this._detachHlsEngine())
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
					he(this.hlsEngine) || he(this.Hls) || (this.hlsEngine.on(this.Hls.Events.LEVEL_LOADED, this._handleHlsLevelLoaded.bind(this)), this._hlsEventListeners.forEach(e => {
						var t;
						let {
							type: i,
							listener: s,
							options: r
						} = e;
						null === (t = this.hlsEngine) || void 0 === t || t[null != r && r.once ? "once" : "on"](i, s, null == r ? void 0 : r.context)
					}), this.hlsEngine.on(this.Hls.Events.ERROR, this._handleHlsError.bind(this)))
				}
				_handleHlsError(e, t) {
					var i, s, r;
					if (he(this.Hls)) return;
					const n = null === (i = this.currentHlsSrc) || void 0 === i ? void 0 : i.split("?")[0],
						a = window.Sentry;
					if (this._retryCount += 1, this._retryCount > sl) this._handleHlsIrrecoverableError(n, t.details);
					else if (t.fatal) switch (t.type) {
						case "networkError":
							null == a || a.captureMessage(`shreddit-player network error for src ${n}. [${t.details}]`), 500 === (null === (s = t.networkDetails) || void 0 === s ? void 0 : s.status) ? this._handleHlsIrrecoverableError(n, t.details) : this._handleHlsNetworkError();
							break;
						case "mediaError":
							"audioTrackLoadError" === t.details ? (this.hlsEngine.audioTrack = 0, null == a || a.captureMessage(`shreddit-player media error: audioTrackLoadError for src ${n}`)) : (this._handleHlsMediaError(), null == a || a.captureMessage(`shreddit-player media error for src ${n}. [${t.details}]`));
							break;
						default:
							null == a || a.captureMessage(`shreddit-player irrecoverable error for src ${n}. [${t.details}]`), this._handleHlsIrrecoverableError(n, t.details)
					} else if ("bufferStalledError" === t.details) {
						var o;
						null == a || a.captureMessage(`shreddit-player buffer stalled error for src ${n}. [${t.details}]`), null === (o = this.hlsEngine) || void 0 === o || o.startLoad()
					} else 403 === (null === (r = t.networkDetails) || void 0 === r ? void 0 : r.status) && (this._handleHlsIrrecoverableError(n, t.details), null == a || a.captureMessage(`shreddit-player removed src ${n}. [${t.details}]`))
				}
				_handleHlsNetworkError() {
					var e;
					null === (e = this.hlsEngine) || void 0 === e || e.startLoad()
				}
				_handleHlsMediaError() {
					var e;
					null === (e = this.hlsEngine) || void 0 === e || e.recoverMediaError()
				}
				_handleHlsIrrecoverableError(e, t) {
					this.dispatchEvent(Re("vds-error", {
						detail: {
							code: 2,
							message: `Media unavailable for src ${e}. [${t}]`
						}
					})), this._destroyHlsEngine()
				}
				_handleHlsLevelLoaded(e, t) {
					this.state.canPlay || this._handleHlsMediaReady(e, t)
				}
				_handleHlsMediaReady(e, t) {
					const {
						live: i,
						totalduration: s
					} = t.details, r = new Le(e, {
						detail: t
					}), n = i ? ot.a.LiveVideo : ot.a.Video;
					this.state.mediaType !== n && this.dispatchEvent(Re("vds-media-type-change", {
						detail: n,
						triggerEvent: r
					})), this.state.duration !== s && this.dispatchEvent(Re("vds-duration-change", {
						detail: s,
						triggerEvent: r
					}))
				}
				addEventListener(e, t, i) {
					if (!el(e)) return super.addEventListener(e, t, i); {
						const r = Qo(e);
						var s;
						this._hlsEventListeners.some(e => e.type === r && e.listener === t) || (this._hlsEventListeners.push({
							type: r,
							listener: t,
							options: i
						}), null === (s = this.hlsEngine) || void 0 === s || s[null != i && i.once ? "once" : "on"](r, t, null == i ? void 0 : i.context))
					}
				}
				removeEventListener(e, t, i) {
					if (el(e)) {
						var s;
						const r = Qo(e);
						return this._hlsEventListeners = this._hlsEventListeners.filter(e => e.type === r && e.listener === t), void(null === (s = this.hlsEngine) || void 0 === s || s.off(r, t, null == i ? void 0 : i.context, null == i ? void 0 : i.once))
					}
					return super.removeEventListener(e, t, i)
				}
			}
			tl([Object(r.b)({
				type: Object,
				attribute: "hls-config"
			})], rl.prototype, "hlsConfig", void 0), tl([Object(r.b)({
				type: Boolean,
				attribute: !1
			})], rl.prototype, "_loadingUserLevel", void 0), tl([Object(r.b)({
				type: Boolean,
				attribute: "use-init-optimization"
			})], rl.prototype, "useInitOptimization", void 0), _e("vds-hls", rl);
			class nl {
				constructor(e) {
					this._host = e, this._connectedQueue = We(this._host)
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
						const i = Re(e, {
							...t,
							bubbles: !0,
							composed: !0
						});
						this._host.dispatchEvent(i)
					})
				}
			}
			class al {
				constructor(e) {
					this._host = e;
					const t = new Ae.a;
					let i = !1;
					t.add(Object(Ae.e)(document, "pointerdown", () => {
						i = !1
					})), Object(kt.a)(e, "keydown", e => {
						e.metaKey || e.altKey || e.ctrlKey || (i = !0)
					}), Object(kt.a)(e, "focus", () => {
						i && e.classList.add("focus-visible")
					}), Object(kt.a)(e, "blur", () => {
						e.classList.remove("focus-visible")
					}), e.addController({
						hostDisconnected: () => {
							t.empty()
						}
					})
				}
			}

			function ol(e) {
				return new al(e)
			}

			function ll(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.type.startsWith("key")) && void 0 !== t && t
			}
			const dl = s.b`
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
			var hl = function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				return n > 3 && a && Object.defineProperty(t, i, a), a
			};
			class cl extends s.a {
				constructor() {
					super(), this.pressed = !1, this.disabled = !1, this._handleButtonClickCapture = Object(kt.a)(this, "click", e => {
						this.disabled && (e.preventDefault(), e.stopImmediatePropagation())
					}, {
						capture: !0
					}), ol(this), ["pointerup", "keydown"].forEach(e => {
						Object(kt.a)(this, e, e => {
							this.disabled || ll(e) && ! function(e) {
								return ll(e) && ("Enter" === e.key || " " === e.key)
							}(e) || this._handleButtonClick(e)
						})
					})
				}
				static get styles() {
					return [dl]
				}
				static get parts() {
					return []
				}
				connectedCallback() {
					super.connectedCallback(), Te(this, "tabindex", "0"), Te(this, "role", "button"), this._updateAriaPressedAttr()
				}
				updated(e) {
					e.has("pressed") && this._updateAriaPressedAttr()
				}
				_updateAriaPressedAttr() {
					be(this, "aria-pressed", this.pressed ? "true" : "false")
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
			hl([Object(r.b)({
				type: Boolean
			})], cl.prototype, "pressed", void 0), hl([Object(r.b)({
				type: Boolean,
				reflect: !0
			})], cl.prototype, "disabled", void 0);
			class ul extends cl {
				constructor() {
					super(), this._mediaRemote = new nl(this), pt(this, "fullscreen", e => {
						this.pressed = e, be(this, "fullscreen", e)
					}), pt(this, "canFullscreen", e => {
						be(this, "hidden", !e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), Te(this, "aria-label", "Fullscreen")
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.exitFullscreen(this.fullscreenTarget, e) : this._mediaRemote.enterFullscreen(this.fullscreenTarget, e))
				}
			}(function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				n > 3 && a && Object.defineProperty(t, i, a)
			})([Object(r.b)({
				attribute: "fullscreen-target"
			})], ul.prototype, "fullscreenTarget", void 0), _e("vds-fullscreen-button", ul);
			class fl extends cl {
				constructor() {
					super(), this._mediaRemote = new nl(this), this._volume = 1, this._muted = !1, this.disabled = !1, pt(this, "volume", e => {
						this._volume = e, this._handleMutedChange()
					}), pt(this, "muted", e => {
						this._muted = e, this._handleMutedChange()
					})
				}
				connectedCallback() {
					super.connectedCallback(), Te(this, "aria-label", "Mute")
				}
				_handleMutedChange() {
					const e = this._muted || 0 === this._volume;
					this.pressed = e, be(this, "muted", e)
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.unmute(e) : this._mediaRemote.mute(e))
				}
			}(function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				n > 3 && a && Object.defineProperty(t, i, a)
			})([Object(r.b)({
				type: Boolean,
				reflect: !0
			})], fl.prototype, "disabled", void 0), _e("vds-mute-button", fl);
			_e("vds-play-button", class extends cl {
				constructor() {
					super(), this._mediaRemote = new nl(this), pt(this, "paused", e => {
						this.pressed = !e, be(this, "paused", e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), Te(this, "aria-label", "Play")
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.pause(e) : this._mediaRemote.play(e))
				}
			});
			var gl = i("./node_modules/@reddit/shreddit.styles/dist/index.js");
			const pl = s.b`
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
				ml = "@reddit/shreddit-player-media-quality";

			function vl(e) {
				return e >= 1080 ? 1080 : e >= 720 ? 720 : e >= 540 ? 540 : e >= 480 ? 480 : e >= 360 ? 360 : e >= 240 ? 240 : 144
			}

			function yl(e) {
				let {
					hlsEngine: t,
					mp4Sources: i
				} = e;
				return i ? i.some(e => e.source.dimensions.height > e.source.dimensions.width && e.source.dimensions.height > 768) : !!t && t.levels.some(e => e.height > e.width && e.height > 768)
			}

			function El() {
				return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).sort((e, t) => e.quality > t.quality ? -1 : 1)
			}

			function _l(e, t) {
				for (let i = 0; i < t.length; i++)
					if (e >= t[i].quality) return i;
				return t.length - 1
			}
			const {
				svg: bl
			} = N();
			var Tl = H(bl`<path d="M7.5 15.958a1.102 1.102 0 01-.778-.322l-5.429-5.429 1.414-1.414L7.5 13.586 17.793 3.293l1.414 1.414L8.278 15.636a1.101 1.101 0 01-.778.322z"></path>`, "0 0 20 20", "checkmark-fill");
			const {
				svg: Sl
			} = N();
			var Al, Ll = H(Sl`<g clip-path="url(#clip0_473_76)"><path d="M19.921 8.8a1.145 1.145 0 00-1.137-.991h-1.073a.98.98 0 01-.887-.649A.969.969 0 0117 6.1l.754-.754a1.15 1.15 0 00.1-1.522 10.16 10.16 0 00-1.671-1.671 1.152 1.152 0 00-1.522.1L13.905 3a.975.975 0 01-1.09.167.97.97 0 01-.628-.878V1.216A1.144 1.144 0 0011.2.079a9.129 9.129 0 00-2.4 0 1.145 1.145 0 00-.991 1.137v1.073a.98.98 0 01-.649.887A.966.966 0 016.1 3l-.754-.754a1.152 1.152 0 00-1.522-.1 10.16 10.16 0 00-1.676 1.673 1.15 1.15 0 00.1 1.522L3 6.1a.979.979 0 01.167 1.09.97.97 0 01-.878.627H1.216A1.145 1.145 0 00.079 8.8a9.1 9.1 0 000 2.393 1.145 1.145 0 001.137.991h1.073a.98.98 0 01.887.649A.97.97 0 013 13.906l-.751.752a1.149 1.149 0 00-.1 1.523c.49.62 1.05 1.18 1.671 1.671a1.148 1.148 0 001.521-.1L6.1 17a.98.98 0 011.09-.167.97.97 0 01.627.878v1.073a1.145 1.145 0 00.983 1.137 9.103 9.103 0 002.393 0 1.144 1.144 0 00.99-1.137v-1.073a.981.981 0 01.65-.887.968.968 0 011.073.176l.753.753a1.149 1.149 0 001.522.1c.62-.49 1.18-1.05 1.671-1.671a1.149 1.149 0 00-.1-1.521L17 13.905a1.04 1.04 0 01.711-1.717h1.073a1.145 1.145 0 001.137-.992 9.096 9.096 0 000-2.392V8.8zM11.979 10a1.98 1.98 0 11-3.958 0 1.98 1.98 0 013.958 0z"></path></g><defs ><clipPath id="clip0_473_76"><path d="M0 0h20v20H0z"></path></clipPath></defs>`, "0 0 20 20", "settings-fill"),
				Rl = function(e, t, i, s) {
					var r, n = arguments.length,
						a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
					if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
					else
						for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
					return n > 3 && a && Object.defineProperty(t, i, a), a
				};
			class wl extends s.a {
				constructor() {
					super(...arguments), this.showAutoplayToggle = !1, this.showOptions = !1, this.selectedLevel = -1, this.qualityLevels = []
				}
				static get styles() {
					return [gl.a, pl]
				}
				connectedCallback() {
					if (super.connectedCallback(), Te(this, "aria-label", "Quality level"), this.isStreaming) this.qualityLevels = function(e) {
						const t = [],
							i = yl({
								hlsEngine: e
							});
						return ((null == e ? void 0 : e.levels) || []).map((e, t) => ({
							...e,
							hlsLevelIndex: t
						})).sort((e, t) => e.bitrate > t.bitrate ? -1 : 1).forEach(e => {
							const s = vl(i ? null == e ? void 0 : e.width : null == e ? void 0 : e.height);
							s && -1 === t.map(e => e.quality).indexOf(s) && t.push({
								hlsLevelIndex: e.hlsLevelIndex,
								quality: s
							})
						}), El(t)
					}(this.hlsEngine), this.selectedLevel = function(e, t) {
						const i = parseInt(Me.getItem(ml) || "");
						if (i) {
							var s;
							const r = null === (s = e.filter(e => e.quality === i)[0]) || void 0 === s ? void 0 : s.hlsLevelIndex;
							if (!he(r)) return t.startLevel = r, t.loadLevel = r, r
						}
						return -1
					}(this.qualityLevels, this.hlsEngine);
					else if (this.mp4Sources) {
						var e, t, i;
						this.qualityLevels = function(e) {
							const t = [],
								i = yl({
									mp4Sources: e
								});
							return (e || []).forEach((e, s) => {
								const r = vl(i ? e.source.dimensions.width : e.source.dimensions.height);
								r && -1 === t.map(e => e.quality).indexOf(r) && t.push({
									mp4SourceIndex: s,
									quality: r
								})
							}), El(t)
						}(this.mp4Sources), this.selectedLevel = function(e) {
							const t = parseInt(Me.getItem(ml) || "");
							if (t) {
								var i;
								const s = null === (i = e.filter(e => e.quality === t)[0]) || void 0 === i ? void 0 : i.mp4SourceIndex;
								if (!he(s)) return s
							}
							return -1
						}(this.qualityLevels);
						let s = this.selectedLevel; - 1 === s && (s = this.defaultMp4Level);
						const r = null === (e = this.mp4Sources[s]) || void 0 === e ? void 0 : e.source,
							n = yl({
								mp4Sources: this.mp4Sources
							}) ? null == r ? void 0 : null === (t = r.dimensions) || void 0 === t ? void 0 : t.width : null == r ? void 0 : null === (i = r.dimensions) || void 0 === i ? void 0 : i.height;
						this.provider.changeSrc(null == r ? void 0 : r.url, 0, !1), this.provider.resolution = n
					}
				}
				get defaultMp4Level() {
					var e, t, i, s, r;
					let n = 0;
					const a = (null === (e = navigator) || void 0 === e ? void 0 : e.connection) || (null === (t = navigator) || void 0 === t ? void 0 : t.mozConnection) || (null === (i = navigator) || void 0 === i ? void 0 : i.webkitConnection),
						o = null == a ? void 0 : a.effectiveType,
						l = null !== (s = null == a ? void 0 : a.downlink) && void 0 !== s ? s : 0;
					return n = "4g" === o || l > 1 ? 0 : _l("3g" === o ? 540 : "2g" === o ? 360 : "slow-2g" === o ? 144 : 540, this.qualityLevels), null !== (r = this.qualityLevels[n].mp4SourceIndex) && void 0 !== r ? r : 0
				}
				toggleOptions() {
					this.showOptions = !this.showOptions
				}
				handleOptionSelection(e, t) {
					let i;
					if (e.stopPropagation(), this.isStreaming) {
						var s;
						i = null !== (s = null == t ? void 0 : t.hlsLevelIndex) && void 0 !== s ? s : -1, this.dispatchEvent(Re("vds-hls-manual-level-change", {
							bubbles: !0,
							composed: !0,
							detail: i
						}))
					} else {
						var r, n, a, o, l;
						const e = -1 === (i = null !== (r = null == t ? void 0 : t.mp4SourceIndex) && void 0 !== r ? r : -1) ? this.defaultMp4Level : i,
							s = null !== (n = this.provider.currentTime) && void 0 !== n ? n : 0,
							d = null === (a = this.mp4Sources[e]) || void 0 === a ? void 0 : a.source,
							h = yl({
								mp4Sources: this.mp4Sources
							}) ? null == d ? void 0 : null === (o = d.dimensions) || void 0 === o ? void 0 : o.width : null == d ? void 0 : null === (l = d.dimensions) || void 0 === l ? void 0 : l.height;
						this.provider.changeSrc(null == d ? void 0 : d.url, s, !0), this.provider.resolution = h
					}
					var d;
					he(d = null == t ? void 0 : t.quality) ? Me.removeItem(ml) : Me.setItem(ml, d.toString()), this.selectedLevel = i
				}
				renderCheckmark(e) {
					return s.c`
      <span class="pr-2xs icon-checkmark">
        ${e?Tl({size:T.a.ExtraSmall}):""}
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
						r = e => this.selectedLevel === (this.isStreaming ? e.hlsLevelIndex : e.mp4SourceIndex);
					return s.c`
      <vds-toggle-button
        class="control settings-control block visible cursor-pointer ease duration-150"
        @click="${this.toggleOptions}"
      >
        ${Ll({attributes:{className:"absolute top-0 bottom-0 left-0 right-0 m-auto"}})}
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
                  ${Object(o.b)("Autoplay",{desc:"Button: Toggle whether media should autoplay"})}</span
                >
              </button>
              <div class="separator opacity-50 mx-auto"></div>
            `:""}
        ${null===(e=this.qualityLevels)||void 0===e?void 0:e.map(e=>e?s.c`
                <button
                  class="px-sm py-xs flex justify-center border-none cursor-pointer ${r(e)?"active":""}"
                  @click="${t=>this.handleOptionSelection(t,e)}"
                >
                  ${this.renderCheckmark(r(e))}
                  <span>${e.quality}p</span>
                </button>
              `:"")}
        <button
          class="px-sm py-xs flex justify-center border-none cursor-pointer ${i?"active":""}"
          @click="${e=>this.handleOptionSelection(e)}"
        >
          ${this.renderCheckmark(i)}
          <span>
            ${Object(o.b)("Auto",{desc:"Button: Automatic quality option"})}</span
          >
        </button>
      </div>
    `
				}
			}

			function kl(e, t) {
				const i = String(e),
					s = i.length;
				if (s < t) {
					return `${"0".repeat(t-s)}${e}`
				}
				return i
			}

			function Il(e) {
				const t = Math.trunc(e / 3600),
					i = Math.trunc(e % 3600 / 60),
					s = Math.trunc(e % 60),
					r = Number((e - Math.trunc(e)).toPrecision(3));
				return {
					[Al.Hours]: t,
					[Al.Minutes]: i,
					[Al.Seconds]: s,
					[Al.Fraction]: r
				}
			}

			function Dl(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const {
					hours: s,
					minutes: r,
					seconds: n
				} = Il(e), a = t ? kl(s, 2) : s, o = kl(r, 2), l = kl(n, 2);
				return s > 0 || i ? `${a}:${o}:${l}` : `${r}:${l}`
			}

			function Cl(e) {
				const t = [],
					{
						hours: i,
						minutes: s,
						seconds: r
					} = Il(e),
					n = (e, t) => 1 === e ? t : `${t}s`;
				return i > 0 && t.push(`${i} ${n(i,"hour")}`), s > 0 && t.push(`${s} ${n(s,"minute")}`), (r > 0 || 0 === t.length) && t.push(`${r} ${n(r,"second")}`), t.join(", ")
			}
			Rl([Object(r.b)({
					attribute: !1
				})], wl.prototype, "isStreaming", void 0), Rl([Object(r.b)({
					attribute: !1
				})], wl.prototype, "provider", void 0), Rl([Object(r.b)({
					attribute: !1
				})], wl.prototype, "hlsEngine", void 0), Rl([Object(r.b)({
					attribute: !1
				})], wl.prototype, "mp4Sources", void 0), Rl([Object(r.b)({
					attribute: !1
				})], wl.prototype, "showAutoplayToggle", void 0), Rl([Object(r.b)({
					attribute: !1
				})], wl.prototype, "autoplayPref", void 0), Rl([Object(r.b)({
					attribute: !1
				})], wl.prototype, "hideQualitySwitcher", void 0), Rl([Object(r.d)()], wl.prototype, "showOptions", void 0), Rl([Object(r.d)()], wl.prototype, "selectedLevel", void 0), Rl([Object(r.d)()], wl.prototype, "qualityLevels", void 0), _e("vds-quality-switcher", wl),
				function(e) {
					e.Hours = "hours", e.Minutes = "minutes", e.Seconds = "seconds", e.Fraction = "fraction"
				}(Al || (Al = {}));
			var Pl = function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				return n > 3 && a && Object.defineProperty(t, i, a), a
			};
			class Ol extends s.a {
				constructor() {
					super(...arguments), this._disposal = new Ae.a, this._mediaStoreConsumer = gt.consume(this), this.__seconds = 0, this.type = "current", this.showHours = !1, this.padHours = !1, this.remainder = !1
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
					return Ge([e, this._mediaStore.duration], e => {
						let [t, i] = e;
						return Math.max(0, i - t)
					})
				}
				_getFormattedTime() {
					return Dl(this.__seconds, this.padHours, this.showHours)
				}
			}

			function xl(e) {
				let t;
				const i = () => !he(t);

				function s() {
					for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
					i() || (t = window.requestAnimationFrame(() => {
						e.apply(this, r), t = void 0
					}))
				}
				return s.cancel = () => {
					he(t) || (window.cancelAnimationFrame(t), t = void 0)
				}, s.pending = i, s
			}
			Pl([Object(r.d)()], Ol.prototype, "__seconds", void 0), Pl([Object(r.b)()], Ol.prototype, "type", void 0), Pl([Object(r.b)({
				attribute: "show-hours",
				type: Boolean
			})], Ol.prototype, "showHours", void 0), Pl([Object(r.b)({
				attribute: "pad-hours",
				type: Boolean
			})], Ol.prototype, "padHours", void 0), Pl([Object(r.b)({
				type: Boolean
			})], Ol.prototype, "remainder", void 0), _e("vds-time", Ol);
			const Ml = nt((function() {
					const e = Ve(!1),
						t = Ve(!1);
					return {
						value: Ve(50),
						pointerValue: Ve(0),
						min: Ve(0),
						max: Ve(100),
						dragging: e,
						pointing: t,
						interactive: Ge([e, t], e => {
							let [t, i] = e;
							return t || i
						})
					}
				})),
				Fl = s.b`
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
			var Nl, Ul, Bl = function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				return n > 3 && a && Object.defineProperty(t, i, a), a
			};
			! function(e) {
				e[e.Left = -1] = "Left", e[e.ArrowLeft = -1] = "ArrowLeft", e[e.Up = -1] = "Up", e[e.ArrowUp = -1] = "ArrowUp", e[e.Right = 1] = "Right", e[e.ArrowRight = 1] = "ArrowRight", e[e.Down = 1] = "Down", e[e.ArrowDown = 1] = "ArrowDown"
			}(Nl || (Nl = {})),
			function(e) {
				e.Horizontal = "horizontal", e.Vertical = "vertical"
			}(Ul || (Ul = {}));
			class $l extends s.a {
				constructor() {
					super(), this._sliderStoreProvider = Ml.provide(this), this.disabled = !1, this.value = 50, this._step = 1, this.direction = Ul.Horizontal, this._keyboardStep = 1, this.shiftKeyMultiplier = 5, this.customValueText = !1, this._mediaRemote = new nl(this), this._disconnectDisposal = new Ae.a, this._handlePointerEnter = Object(kt.a)(this, "pointerenter", () => {
						this.disabled || (this.setAttribute("pointing", ""), this.store.pointing.set(!0))
					}), this._handlePointerMove = Object(kt.a)(this, "pointermove", e => {
						if (this.disabled || this.isDragging) return;
						const t = this._getValueBasedOnThumbPosition(e);
						this.store.pointerValue.set(t), this._dispatchPointerValueChange(e)
					}), this._handlePointerLeave = Object(kt.a)(this, "pointerleave", () => {
						this.disabled || (this.removeAttribute("pointing"), this.store.pointing.set(!1))
					}), this._handlePointerDown = Object(kt.a)(this, "pointerdown", e => {
						this.disabled || (this._startDragging(e), this._onDrag(e))
					}), this._handleKeydown = Object(kt.a)(this, "keydown", e => {
						if (this.disabled) return;
						const {
							key: t,
							shiftKey: i
						} = e;
						if (!Object.keys(Nl).includes(t)) return;
						const s = (i ? this.keyboardStep * this.shiftKeyMultiplier : this.keyboardStep) * Number(Nl[t]),
							r = (this.value + s) / this.step,
							n = this.step * r;
						this.value = this._getClampedValue(n), this._dispatchValueChange(e)
					}), this._handleFillValueChange = Object(kt.a)(this, "vds-slider-value-change", this._updateFillCSSProps.bind(this)), this._handlePointerValueChange = Object(kt.a)(this, "vds-slider-pointer-value-change", this._updatePointerCSSProps.bind(this)), this._onDrag = xl(e => {
						if (this.disabled || !this.isDragging) return;
						const t = this._getValueBasedOnThumbPosition(e);
						this.store.pointerValue.set(t), this._dispatchPointerValueChange(e)
					}), this._handleDocumentPointerUp = Object(kt.a)(this, "pointerup", e => {
						!this.disabled && this.isDragging && this._stopDragging(e)
					}, {
						target: document
					}), this._handleDocumentTouchMove = Object(kt.a)(this, "touchmove", e => {
						!this.disabled && this.isDragging && e.preventDefault()
					}, {
						target: document,
						passive: !1
					}), this._handleDocumentPointerMove = Object(kt.a)(this, "pointermove", e => {
						!this.disabled && this.isDragging && this._onDrag(e)
					}, {
						target: document
					}), this._lastDispatchedValue = this.value, this._dispatchValueChange = xl(e => {
						this.value !== this._lastDispatchedValue && (this.dispatchEvent(Re("vds-slider-value-change", {
							detail: this.value,
							triggerEvent: e
						})), this._lastDispatchedValue = this.value)
					}), this._lastDispatchedPointerValue = this.pointerValue, this._dispatchPointerValueChange = xl(e => {
						if (this.pointerValue === this._lastDispatchedPointerValue) return;
						["vds-slider-pointer-value-change", this.isDragging && "vds-slider-drag-value-change"].forEach(t => {
							t && this.dispatchEvent(Re(t, {
								detail: this.pointerValue,
								triggerEvent: e
							}))
						}), this._lastDispatchedPointerValue = this.pointerValue
					}), ol(this)
				}
				static get styles() {
					return [Fl]
				}
				static get parts() {
					return []
				}
				get store() {
					return this._sliderStoreProvider.value
				}
				get min() {
					return je(this.store.min)
				}
				set min(e) {
					this.store.min.set(e)
				}
				get max() {
					return je(this.store.max)
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
					return je(this.store.dragging)
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
					return je(this.store.pointerValue)
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
						be(this, "interactive", e)
					}))
				}
				willUpdate(e) {
					(e.has("value") || e.has("min") || e.has("max")) && (this.value = this._getClampedValue(this.value), this.store.value.set(this.value), this._updateFillCSSProps(), this._dispatchValueChange()), e.has("disabled") && this.disabled && (this.store.dragging.set(!1), this.store.pointing.set(!1), this.removeAttribute("dragging"), this.removeAttribute("pointing"), this.removeAttribute("interactive"), be(this, "aria-disabled", this.disabled)), this.customValueText || this._updateAriaValueAttrs(), super.willUpdate(e)
				}
				disconnectedCallback() {
					this._onDrag.cancel(), this._disconnectDisposal.empty(), super.disconnectedCallback()
				}
				_updateFillCSSProps() {
					Se(this, "fill-value", `${this.value}`), Se(this, "fill-rate", `${this.fillRate}`), Se(this, "fill-percent", `${this.fillPercent}%`)
				}
				_updatePointerCSSProps() {
					Se(this, "pointer-value", `${this.pointerValue}`), Se(this, "pointer-rate", `${this.pointerRate}`), Se(this, "pointer-percent", `${this.pointerPercent}%`)
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
					Te(this, "role", "slider"), Te(this, "tabindex", "0"), Te(this, "aria-orientation", this.direction === Ul.Vertical ? "vertical" : "horizontal"), Te(this, "autocomplete", "off")
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
					return `${Ze(this.value/this.max*100,2)}%`
				}
				_startDragging(e) {
					if (this.isDragging) return;
					this.store.dragging.set(!0), this.setAttribute("dragging", "");
					const t = this._getValueBasedOnThumbPosition(e);
					this.store.pointerValue.set(t), this._dispatchPointerValueChange(e), this.dispatchEvent(Re("vds-slider-drag-start", {
						triggerEvent: e,
						detail: this.value,
						bubbles: !0
					})), this._mediaRemote.pauseUserIdle(e)
				}
				_stopDragging(e) {
					if (!this.isDragging) return;
					this.store.dragging.set(!1), this._dispatchValueChange.cancel(), this.removeAttribute("dragging");
					const t = this._getValueBasedOnThumbPosition(e);
					this.value = t, this.store.pointerValue.set(t), this._dispatchValueChange(e), this._dispatchPointerValueChange(e), this.dispatchEvent(Re("vds-slider-drag-end", {
						triggerEvent: e,
						detail: this.value,
						bubbles: !0
					})), this._mediaRemote.resumeUserIdle(e)
				}
				_getClampedValue(e) {
					return et(this.min, Ze(e, tt(this.step)), this.max)
				}
				_getValueFromRate(e) {
					const t = et(0, e, 1),
						i = (this.max - this.min) * t,
						s = Math.round(i / this.step),
						r = this.step * s;
					return this.min + r
				}
				_getValueBasedOnThumbPosition(e) {
					if (this.direction === Ul.Vertical) {
						const t = e.clientY,
							{
								bottom: i,
								height: s
							} = this.getBoundingClientRect(),
							r = (i - t) / s;
						return this._getValueFromRate(r)
					} {
						const t = e.clientX,
							{
								left: i,
								width: s
							} = this.getBoundingClientRect(),
							r = (t - i) / s;
						return this._getValueFromRate(r)
					}
				}
			}
			Bl([Object(r.b)({
				reflect: !0,
				type: Number
			})], $l.prototype, "min", null), Bl([Object(r.b)({
				reflect: !0,
				type: Number
			})], $l.prototype, "max", null), Bl([Object(r.b)({
				reflect: !0,
				type: Boolean
			})], $l.prototype, "disabled", void 0), Bl([Object(r.b)({
				reflect: !0,
				type: Number
			})], $l.prototype, "value", void 0), Bl([Object(r.b)({
				type: Number,
				reflect: !0
			})], $l.prototype, "step", null), Bl([Object(r.b)({
				attribute: "direction",
				type: Ul
			})], $l.prototype, "direction", void 0), Bl([Object(r.b)({
				attribute: "keyboard-step",
				type: Number,
				reflect: !0
			})], $l.prototype, "keyboardStep", null), Bl([Object(r.b)({
				attribute: "shift-key-multiplier",
				type: Number
			})], $l.prototype, "shiftKeyMultiplier", void 0), Bl([Object(r.b)({
				type: Boolean,
				attribute: "custom-value-text"
			})], $l.prototype, "customValueText", void 0);
			const Vl = s.b``;
			var Gl = function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				return n > 3 && a && Object.defineProperty(t, i, a), a
			};
			class jl extends $l {
				constructor() {
					super(), this._step = .1, this.value = 0, this.valueText = "{currentTime} out of {duration}", this.pauseWhileDragging = !1, this.seekingRequestThrottle = 100, this.__mediaDuration = 0, this.__mediaPaused = !0, this._handleSliderDragStart = Object(kt.a)(this, "vds-slider-drag-start", e => {
						this._togglePlaybackWhileDragging(e)
					}), this._handleSliderValueChange = Object(kt.a)(this, "vds-slider-value-change", e => {
						ll(e.originEvent) && (this._dispatchSeekingRequest.cancel(), this._mediaRemote.seek(this.value, e))
					}), this._handleSliderDragValueChange = Object(kt.a)(this, "vds-slider-drag-value-change", e => {
						this._dispatchSeekingRequest(e)
					}), this._handleSliderDragEnd = Object(kt.a)(this, "vds-slider-drag-end", e => {
						this._dispatchSeekingRequest.cancel(), this._mediaRemote.seek(this.value, e), this._togglePlaybackWhileDragging(e)
					}), this._dispatchSeekingRequest = It(e => {
						this._mediaRemote.seeking(this.value, e)
					}, this.seekingRequestThrottle), this._wasPlayingBeforeDragStart = !1, pt(this, "currentTime", e => {
						this.value = e
					}), pt(this, "duration", e => {
						this.__mediaDuration = e, this.requestUpdate("max")
					}), pt(this, "paused", e => {
						this.__mediaPaused = e
					})
				}
				static get styles() {
					return [super.styles, Vl]
				}
				connectedCallback() {
					super.connectedCallback(), Te(this, "aria-label", "Media time")
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
					return this.valueText.replace("{currentTime}", Cl(this.value)).replace("{duration}", Cl(this.__mediaDuration))
				}
				_getValueMax() {
					return "100%"
				}
				_togglePlaybackWhileDragging(e) {
					this.pauseWhileDragging && (this.isDragging && !this.__mediaPaused ? (this._wasPlayingBeforeDragStart = !0, this._mediaRemote.pause(e)) : this._wasPlayingBeforeDragStart && !this.isDragging && this.__mediaPaused && (this._wasPlayingBeforeDragStart = !1, this._mediaRemote.play(e)))
				}
			}
			Gl([Object(r.b)({
				attribute: !1,
				state: !0
			})], jl.prototype, "value", void 0), Gl([Object(r.b)({
				attribute: !1
			})], jl.prototype, "min", null), Gl([Object(r.b)({
				attribute: !1
			})], jl.prototype, "max", null), Gl([Object(r.b)({
				attribute: "value-text"
			})], jl.prototype, "valueText", void 0), Gl([Object(r.b)({
				attribute: "pause-while-dragging",
				type: Boolean
			})], jl.prototype, "pauseWhileDragging", void 0), Gl([Object(r.b)({
				attribute: "seeking-request-throttle",
				type: Number
			})], jl.prototype, "seekingRequestThrottle", void 0), Gl([Object(r.d)()], jl.prototype, "__mediaDuration", void 0), Gl([Object(r.d)()], jl.prototype, "__mediaPaused", void 0), _e("vds-time-slider", jl);
			var Hl = function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				return n > 3 && a && Object.defineProperty(t, i, a), a
			};
			class Kl extends s.a {
				constructor() {
					super(...arguments), this._disposal = new Ae.a, this._sliderStoreConsumer = Ml.consume(this), this.__value = 0, this.type = "current", this.showHours = !1, this.padHours = !1, this.decimalPlaces = 2
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
					return Ge([e, this._sliderStore.min, this._sliderStore.max], e => {
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
					return `${Ze(this.__value,this.decimalPlaces)}%`
				}
				_getTimeFormat() {
					return Dl(this.__value, this.padHours, this.showHours)
				}
			}
			Hl([Object(r.d)()], Kl.prototype, "__value", void 0), Hl([Object(r.b)()], Kl.prototype, "type", void 0), Hl([Object(r.b)()], Kl.prototype, "format", void 0), Hl([Object(r.b)({
				attribute: "show-hours",
				type: Boolean
			})], Kl.prototype, "showHours", void 0), Hl([Object(r.b)({
				attribute: "pad-hours",
				type: Boolean
			})], Kl.prototype, "padHours", void 0), Hl([Object(r.b)({
				attribute: "decimal-places",
				type: Number
			})], Kl.prototype, "decimalPlaces", void 0), _e("vds-slider-value-text", Kl);
			const ql = (e, t) => {
					var i, s;
					const r = e._$AN;
					if (void 0 === r) return !1;
					for (const n of r) null === (s = (i = n)._$AO) || void 0 === s || s.call(i, t, !1), ql(n, t);
					return !0
				},
				Wl = e => {
					let t, i;
					do {
						if (void 0 === (t = e._$AM)) break;
						(i = t._$AN).delete(e), e = t
					} while (0 === (null == i ? void 0 : i.size))
				},
				Yl = e => {
					for (let t; t = e._$AM; e = t) {
						let i = t._$AN;
						if (void 0 === i) t._$AN = i = new Set;
						else if (i.has(e)) break;
						i.add(e), Ql(t)
					}
				};

			function zl(e) {
				void 0 !== this._$AN ? (Wl(this), this._$AM = e, Yl(this)) : this._$AM = e
			}

			function Xl(e, t = !1, i = 0) {
				const s = this._$AH,
					r = this._$AN;
				if (void 0 !== r && 0 !== r.size)
					if (t)
						if (Array.isArray(s))
							for (let n = i; n < s.length; n++) ql(s[n], !1), Wl(s[n]);
						else null != s && (ql(s, !1), Wl(s));
				else ql(this, e)
			}
			const Ql = e => {
				var t, i, s, r;
				e.type == d.b.CHILD && (null !== (t = (s = e)._$AP) && void 0 !== t || (s._$AP = Xl), null !== (i = (r = e)._$AQ) && void 0 !== i || (r._$AQ = zl))
			};
			class Jl extends d.a {
				constructor() {
					super(...arguments), this._$AN = void 0
				}
				_$AT(e, t, i) {
					super._$AT(e, t, i), Yl(this), this.isConnected = e._$AU
				}
				_$AO(e, t = !0) {
					var i, s;
					e !== this.isConnected && (this.isConnected = e, e ? null === (i = this.reconnected) || void 0 === i || i.call(this) : null === (s = this.disconnected) || void 0 === s || s.call(this)), t && (ql(this, e), Wl(this))
				}
				setValue(e) {
					if (A(this._$Ct)) this._$Ct._$AI(e, this);
					else {
						const t = [...this._$Ct._$AH];
						t[this._$Ci] = e, this._$Ct._$AI(t, this, 0)
					}
				}
				disconnected() {}
				reconnected() {}
			}
			const Zl = () => new ed;
			class ed {}
			const td = new WeakMap,
				id = Object(d.c)(class extends Jl {
					render(e) {
						return n.d
					}
					update(e, [t]) {
						var i;
						const s = t !== this.Y;
						return s && void 0 !== this.Y && this.rt(void 0), (s || this.lt !== this.dt) && (this.Y = t, this.ct = null === (i = e.options) || void 0 === i ? void 0 : i.host, this.rt(this.dt = e.element)), n.d
					}
					rt(e) {
						var t;
						if ("function" == typeof this.Y) {
							const i = null !== (t = this.ct) && void 0 !== t ? t : globalThis;
							let s = td.get(i);
							void 0 === s && (s = new WeakMap, td.set(i, s)), void 0 !== s.get(this.Y) && this.Y.call(this.ct, void 0), s.set(this.Y, e), void 0 !== e && this.Y.call(this.ct, e)
						} else this.Y.value = e
					}
					get lt() {
						var e, t, i;
						return "function" == typeof this.Y ? null === (t = td.get(null !== (e = this.ct) && void 0 !== e ? e : globalThis)) || void 0 === t ? void 0 : t.get(this.Y) : null === (i = this.Y) || void 0 === i ? void 0 : i.value
					}
					disconnected() {
						this.lt === this.dt && this.rt(void 0)
					}
					reconnected() {
						this.rt(this.dt)
					}
				});
			var sd = function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				return n > 3 && a && Object.defineProperty(t, i, a), a
			};
			class rd extends s.a {
				constructor() {
					super(), this._videoRef = Zl(), this.__canPlay = !1, this.__hasError = !1, Ke(this, Ml, "pointerValue", e => {
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
        src="${e=this.src,a(""===e||"undefined"===e?void 0:e)}"
        @canplay="${this._handleCanPlay}"
        @error="${this._handleError}"
        ${id(this._videoRef)}
      ></video>
    `;
					var e
				}
				async _handleCanPlay(e) {
					this.__canPlay = !0, this.setAttribute("video-can-play", ""), Yo(this, e)
				}
				_handleError(e) {
					this.__hasError = !0, this.setAttribute("video-error", ""), Yo(this, e)
				}
			}
			sd([Object(r.b)()], rd.prototype, "src", void 0), sd([Object(r.d)()], rd.prototype, "__canPlay", void 0), sd([Object(r.d)()], rd.prototype, "__hasError", void 0), _e("vds-slider-video", rd), _e("vds-video", Xo);
			var nd = function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				return n > 3 && a && Object.defineProperty(t, i, a), a
			};
			class ad extends $l {
				constructor() {
					super(), this.value = 100, this._handleSliderValueChange = Object(kt.a)(this, "vds-slider-value-change", this._changeVolume.bind(this)), this._handleSliderDragValueChange = Object(kt.a)(this, "vds-slider-drag-value-change", this._changeVolume.bind(this)), pt(this, "volume", e => {
						this.value = 100 * Math.sqrt(e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), Te(this, "aria-label", "Media volume")
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
						i = Ze(Math.pow(t / 100, 2), 3);
					this._mediaRemote.changeVolume(i, e)
				}
			}
			nd([Object(r.b)({
				attribute: !1
			})], ad.prototype, "min", null), nd([Object(r.b)({
				attribute: !1
			})], ad.prototype, "max", null), nd([Object(r.b)({
				attribute: !1,
				state: !0
			})], ad.prototype, "value", void 0), _e("vds-volume-slider", ad);
			var od = s.b`
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

  vds-media[can-load]:not([can-play]) .buffering-indicator,
  vds-media[waiting] .buffering-indicator {
    opacity: 1;
    visibility: visible;
  }

  .buffering-track-fill {
    stroke-dasharray: 100;
    stroke-dashoffset: 50;
  }
`;
			const ld = {
				capLevelToPlayerSize: !0
			};
			var dd = i("./node_modules/@reddit/shreddit.components.shreddit-player/node_modules/@reddit/adblock-detection/browser.js");
			let hd = window.location;
			const cd = "forceAutoplay";
			class ud {
				constructor(e) {
					(this.host = e).addController(this)
				}
				hostConnected() {
					if (!this.host.isPromoted) return;
					const e = Object(dd.hasAdblock)(),
						t = "true" === new URL(hd.href).searchParams.get(cd);
					e || this.host.autoplay ? e && this.host.autoplay && !t && (this.host.autoplay = !1) : this.host.autoplay = !0
				}
			}
			var fd = function(e, t, i, s) {
				var r, n = arguments.length,
					a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
				return n > 3 && a && Object.defineProperty(t, i, a), a
			};
			let gd = class extends s.a {
				constructor() {
					super(...arguments), this.autoplay = !1, this.autoplayPref = !1, this.showAutoplayToggle = !1, this.gif = !1, this.playOutOfViewport = !1, this.ui = "mobile", this.objectFit = "contain", this.isEmbed = !1, this.isPromoted = !1, this.useInitOptimization = !1, this.mediaLoadRequested = !1, this.disableMuteButton = !1, this.hideBufferingPoster = !1, this.adblockController = new ud(this), this.handleLoadMediaClick = () => {
						this.mediaLoadRequested || (this.mediaLoadRequested = !0, setTimeout(() => {
							var e;
							null === (e = this.provider) || void 0 === e || e.startLoadingMedia()
						}, 1))
					}
				}
				static get styles() {
					return [gl.a, od]
				}
				connectedCallback() {
					var e, t, i;
					super.connectedCallback();
					const s = this.getAttribute("packaged-media-json");
					if (s) try {
						this.packagedMedia = JSON.parse(s)
					} catch (a) {
						var r;
						null === (r = window.Sentry) || void 0 === r || r.captureException(`Could not parse packaged-media-json for src ${this.getAttribute("src")}`, a)
					}
					var n;
					(null !== (e = null === (t = this.packagedMedia) || void 0 === t ? void 0 : null === (i = t.playbackMp4s) || void 0 === i ? void 0 : i.permutations) && void 0 !== e ? e : []).length > 0 ? this.isStreaming = !1 : this.isStreaming = null === (n = this.getAttribute("src")) || void 0 === n ? void 0 : n.includes(".m3u8");
					requestAnimationFrame(() => {
						var e, t;
						null === (e = this.hlsProviderElement) || void 0 === e || e.addEventListener("vds-hls-manifest-parsed", () => {
							var e;
							this.hlsEngine = null === (e = this.hlsProviderElement) || void 0 === e ? void 0 : e.hlsEngine
						}), this.provider = this.isStreaming ? this.hlsProviderElement : this.videoProviderElement, null === (t = this.provider) || void 0 === t || t.addEventListener("vds-error", e => {
							this.mediaError = e.detail
						})
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
        src="${a(null!==(e=this.getAttribute("poster"))&&void 0!==e?e:void 0)}"
        class="preview-image h-full w-full invisible ease absolute inset-0 object-contain bg-black"
      ></faceplate-img>
    `
				}
				renderUi() {
					var e, t;
					const i = this.gif ? "gif" : "",
						r = "desktop" === this.ui,
						n = "absolute top-0 bottom-0 left-0 right-0 m-auto opacity-0 ease duration-150",
						l = r && !this.gif,
						d = this.isStreaming && !this.hlsEngine;

					function h(e, t) {
						let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.a.Medium;
						return e({
							attributes: {
								className: `${n} ${t}`
							},
							size: i
						})
					}
					if (this.mediaError) {
						let e;
						return e = 2 === this.mediaError.code ? Object(o.b)("This video is no longer available.", {
							desc: "Notify user that the video has been removed and is no longer available."
						}) : Object(o.b)("This video cannot be played.", {
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
              ${h(ee,"play-icon inset-0 flex items-center justify-center",T.a.ExtraLarge)}
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
                ${h(J,"pause-icon")}
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
                    src="${a(this.preview)}"
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
                      .hideQualitySwitcher="${!r||this.gif}"
                    ></vds-quality-switcher>
                  `}

              <vds-fullscreen-button
                class="control ${this.isEmbed?"embed-xs:!min-w-[40px] embed-xs:ml-md":""} flex items-center justify-center rounded-sm cursor-pointer pointer-events-auto relative ${"ease duration-150"}"
              >
                ${h(Y,"expand-icon")}
                ${h(q,"collapse-icon")}
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
                      ${h(X,"gif-icon opacity-75")}
                    </div>
                  `:s.c`
                    <vds-mute-button
                      class="control relative rounded-sm cursor-pointer ${"ease duration-150"}"
                      .disabled="${this.disableMuteButton}"
                    >
                      ${h(re,"unmute-icon")}
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
					var e, t, i, r;
					const n = s.c`
      <video
        src="${a(this.src)}"
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
            .hlsConfig="${ld}"
            preload="${this.autoplay?"auto":"none"}"
            loading="${this.autoplay?"lazy":"custom"}"
            ?autoplay="${this.autoplay}"
            ?gif="${this.gif}"
            ?loop="${this.gif}"
            ?muted="${this.gif}"
            poster="${a(null!==(e=this.getAttribute("poster"))&&void 0!==e?e:void 0)}"
            preview="${a(null!==(t=this.getAttribute("preview"))&&void 0!==t?t:void 0)}"
            ?use-init-optimization="${this.useInitOptimization}"
          >
            ${n}
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
            poster="${a(null!==(i=this.getAttribute("poster"))&&void 0!==i?i:void 0)}"
            preview="${a(null!==(r=this.getAttribute("preview"))&&void 0!==r?r:void 0)}"
          >
            ${n}
          </vds-video>
        `
				}
				render() {
					const e = this.gif ? "gif" : "",
						t = "desktop" === this.ui;
					return s.c`
      <vds-media-sync ?single-playback="${!this.gif}" sync-volume>
        <vds-media-visibility
          intersection-threshold="${this.useInitOptimization?"0.75":"1"}"
          enter-page="${a(this.autoplay||this.gif?"play":void 0)}"
          enter-viewport="${a(this.autoplay||this.gif?"play":void 0)}"
          exit-page="${a(t||this.gif?void 0:"pause")}"
          exit-viewport="${a(this.playOutOfViewport||this.gif?void 0:"pause")}"
          page-enter-delay="${this.useInitOptimization?"250":"200"}"
          viewport-enter-delay="${this.useInitOptimization?"250":"200"}"
        >
          <vds-media
            class="h-full w-full ${`${e}`}"
            ?use-init-optimization="${this.useInitOptimization}"
          >
            ${this.renderProvider()} ${this.renderUi()} ${this.gif?"":this.renderGestures()}
          </vds-media>
        </vds-media-visibility>
      </vds-media-sync>
    `
				}
			};
			fd([Object(r.b)({
				type: String,
				attribute: "src",
				reflect: !0
			})], gd.prototype, "src", void 0), fd([Object(r.b)({
				type: String,
				attribute: "packaged-media-json"
			})], gd.prototype, "packagedMediaJSON", void 0), fd([Object(r.b)()], gd.prototype, "packagedMedia", void 0), fd([Object(r.b)()], gd.prototype, "provider", void 0), fd([Object(r.b)({
				type: Boolean,
				attribute: "autoplay",
				reflect: !0
			})], gd.prototype, "autoplay", void 0), fd([Object(r.b)({
				type: Boolean,
				attribute: "autoplay-pref"
			})], gd.prototype, "autoplayPref", void 0), fd([Object(r.b)({
				type: Boolean,
				attribute: "show-autoplay-toggle"
			})], gd.prototype, "showAutoplayToggle", void 0), fd([Object(r.b)({
				type: Boolean,
				attribute: "gif",
				reflect: !0
			})], gd.prototype, "gif", void 0), fd([Object(r.b)({
				type: String,
				attribute: "preview"
			})], gd.prototype, "preview", void 0), fd([Object(r.b)({
				type: Boolean,
				attribute: "play-out-of-viewport"
			})], gd.prototype, "playOutOfViewport", void 0), fd([Object(r.b)({
				type: String,
				attribute: "ui"
			})], gd.prototype, "ui", void 0), fd([Object(r.b)({
				type: String,
				attribute: "object-fit"
			})], gd.prototype, "objectFit", void 0), fd([Object(r.b)({
				type: Boolean,
				attribute: "is-embed"
			})], gd.prototype, "isEmbed", void 0), fd([Object(r.b)({
				type: Boolean,
				attribute: "is-promoted"
			})], gd.prototype, "isPromoted", void 0), fd([Object(r.b)({
				type: Boolean,
				attribute: "use-init-optimization"
			})], gd.prototype, "useInitOptimization", void 0), fd([Object(r.d)()], gd.prototype, "mediaLoadRequested", void 0), fd([Object(r.d)()], gd.prototype, "hlsEngine", void 0), fd([Object(r.d)()], gd.prototype, "isStreaming", void 0), fd([Object(r.d)()], gd.prototype, "disableMuteButton", void 0), fd([Object(r.d)()], gd.prototype, "hideBufferingPoster", void 0), fd([Object(r.d)()], gd.prototype, "mediaError", void 0), fd([Object(r.c)("vds-hls")], gd.prototype, "hlsProviderElement", void 0), fd([Object(r.c)("vds-video")], gd.prototype, "videoProviderElement", void 0), gd = fd([Object(r.a)("shreddit-player")], gd)
		},
		"./node_modules/@reddit/shreddit.components.shreddit-player/dist/media-telemetry-observer/media-telemetry-observer.js": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "MediaTelemetryObserver", (function() {
				return Z
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js"),
				r = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js"),
				n = i("./node_modules/lit/index.js"),
				a = i("./node_modules/lit/decorators.js");
			const o = 3e4,
				l = 1e4,
				d = [25, 50, 75, 95, 100],
				h = [2, 3, 5, 10],
				c = 2e3,
				u = 3e3;
			var f = i("./node_modules/@reddit/faceplate/lib/custom-event.js");
			const g = e => t => {
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
							currentTime: r,
							muted: n,
							paused: a,
							volume: o
						} = null != i ? i : {}, {
							duration: l
						} = null != s ? s : {};
						let {
							fullscreen: d
						} = null != i ? i : {};
						return "vds-fullscreen-change" === e.type && (d = e.detail), {
							currentTime: r,
							duration: l,
							fullscreen: d,
							muted: n,
							paused: a,
							timeStamp: t,
							volume: o
						}
					})(t);
					return [Object(f.a)(e, i)]
				},
				p = [{
					"vds-fullscreen-change": g("ad-media-fullscreenchange"),
					"vds-pause": g("ad-media-pause"),
					"vds-play": g("ad-media-play"),
					"vds-time-update": g("ad-media-timeupdate"),
					"vds-volume-change": g("ad-media-volumechange"),
					"vds-seeking": g("ad-media-seeking"),
					"vds-seeked": g("ad-media-seeked")
				}];
			var m, v, y, E, _, b, T, S, A, L, R, w, k, I, D, C = i("./node_modules/uuid/dist/esm-browser/v4.js"),
				P = i("./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js");
			class O {
				constructor(e) {
					this._timer = null, this._expectedAt = 1 / 0, this._handleInterval = () => {
						var e;
						const t = Date.now(),
							{
								_expectedAt: i,
								_interval: s
							} = this,
							r = t - i,
							n = {
								timestamp: t,
								latency: r,
								accuracy: 1 - Math.abs(r) / s
							};
						null === (e = this._callback) || void 0 === e || e.call(this, n), this._expectedAt = t + s
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
			class x {
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
						const i = this._thresholds[0];
						if (e < i) return t;
						this._thresholds.shift(), t.push(i)
					}
					return t
				}
			}
			class F {
				constructor(e) {
					this._stopwatch = new x, this._buffering = !1, this._playing = !1, this._viewable = !1, this._visible = !1, this._audible = e.audible, this._fullscreen = e.fullscreen, this._thresholdObserver = new M(e.duration)
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

			function N(e, t, i) {
				return {
					...e,
					media: B(t, i),
					playback: U(e, t, i),
					video_error_report: $(t)
				}
			}

			function U(e, t, i) {
				var s, r, n, a;
				let o, l, d;
				var h, c, u, f;
				"hlsEngine" in t ? (o = null === (h = H(t)) || void 0 === h ? void 0 : h.bitrate, l = null !== (c = t.hlsEngine) && void 0 !== c && c.audioTracks ? null === (u = t.hlsEngine) || void 0 === u ? void 0 : null === (f = u.audioTracks[t.hlsEngine.audioTrack]) || void 0 === f ? void 0 : f.bitrate : void 0) : o = t.resolution;
				const {
					currentTime: g = 0,
					duration: p = 0,
					muted: m,
					volume: v = 0
				} = null !== (s = t.state) && void 0 !== s ? s : {}, {
					height: y,
					width: _
				} = function(e) {
					const t = e.videoElement;
					return {
						height: (null == t ? void 0 : t.clientHeight) || 0,
						width: (null == t ? void 0 : t.clientWidth) || 0
					}
				}(t), b = e.source === S.Videoplayer && e.action === A.Switch && e.noun === L.Bitrate;
				b && (d = b ? !t.isHlsStream || t.loadingUserLevel : void 0);
				const T = $(t),
					R = T ? `[${T.error_code}] ${T.error_message}` : void 0;
				return {
					id: i.id,
					is_live: i._live,
					is_looped: i.hasLooped,
					state: V(t),
					error: R,
					watch_duration_ms: Math.round(i._stopwatch.time),
					heartbeat_duration_ms: null,
					playhead_offset_ms: Math.round(1e3 * (p - g)),
					timestamp_ms: Math.round(1e3 * g),
					start_time_ms: i.startedAt,
					volume: m ? 0 : Math.round(100 * v),
					total_bitrate: (null !== (r = o) && void 0 !== r ? r : 0) + (null !== (n = l) && void 0 !== n ? n : 0),
					video_bitrate: o,
					audio_bitrate: l,
					player_type: null !== (a = i._playbackPlayerType) && void 0 !== a ? a : null,
					player_width: _,
					player_height: y,
					autoplay_setting: i._firstPlayTrusted ? E.Click : E.Autoplay,
					sequence_number: i._sequenceNumber += 1,
					user_bitrate_switch: d
				}
			}

			function B(e, t) {
				var i, s, r;
				let n, a, o;
				if ("hlsEngine" in e) {
					var l, d, h, c, u;
					a = null === (l = H(e)) || void 0 === l ? void 0 : l.codecSet;
					const t = null === (d = e.hlsEngine) || void 0 === d ? void 0 : d.audioTrack;
					o = void 0 !== t && t > -1, n = null === (h = e.hlsEngine) || void 0 === h ? void 0 : null === (c = h.streamController) || void 0 === c ? void 0 : null === (u = c.fragCurrent) || void 0 === u ? void 0 : u.byteRange
				} else {
					var f, g;
					const t = null === (f = e.mediaElement) || void 0 === f ? void 0 : f.src;
					null != t && t.includes(".mp4") ? a = "mp4" : null != t && t.includes(".gif") && (a = "gif");
					const i = e.mediaElement;
					o = (null == i ? void 0 : i.mozHasAudio) || Boolean(null == i ? void 0 : i.webkitAudioDecodedByteCount) || Boolean(null == i ? void 0 : null === (g = i.audioTracks) || void 0 === g ? void 0 : g.length)
				}
				const {
					currentTime: p,
					duration: v,
					fullscreen: E,
					mediaType: _
				} = null !== (i = e.state) && void 0 !== i ? i : {}, {
					height: b,
					width: T
				} = function(e) {
					const t = e.videoElement;
					return {
						height: (null == t ? void 0 : t.videoHeight) || 0,
						width: (null == t ? void 0 : t.videoWidth) || 0
					}
				}(e), S = T >= b ? m.Landscape : m.Portrait, A = "currentHlsSrc" in e ? e.currentHlsSrc : null === (s = e.mediaElement) || void 0 === s ? void 0 : s.src, {
					hostname: L,
					pathname: R,
					id: w
				} = function(e) {
					let t, i, s = "";
					try {
						const r = new URL(e);
						t = r.hostname, i = r.pathname, "v.redd.it" === t && (s = i.split("/")[1] || "")
					} catch {}
					return {
						hostname: t,
						pathname: i,
						id: s
					}
				}(A);
				let k;
				return Array.isArray(n) && 2 === n.length && (k = n[1] - n[0]), {
					duration: Math.round(1e3 * v),
					height: b,
					width: T,
					id: w,
					domain: L,
					orientation: S,
					origin: null !== (r = t._mediaOrigin) && void 0 !== r ? r : null,
					size: k,
					type: _,
					packaging_format: e.isHlsStream ? y.Hls : y.SingleFile,
					byte_range: Array.isArray(n) ? n.toString() : void 0,
					time: Math.round(1e3 * p),
					zoomed: E,
					format: a,
					has_audio: o,
					file_name: R,
					url: A
				}
			}

			function $(e) {
				var t;
				const {
					error: i
				} = null !== (t = e.state) && void 0 !== t ? t : {};
				if (i) return {
					error_code: i.code,
					error_message: i.message
				}
			}

			function V(e) {
				var t;
				const {
					waiting: i,
					playing: s,
					paused: r
				} = null !== (t = e.state) && void 0 !== t ? t : {};
				return i ? _.Buffering : s ? _.Playing : r ? _.Paused : _.Buffering
			}

			function G(e) {
				return V(e) === _.Playing
			}

			function j(e) {
				return !e.state.muted && e.state.volume > 0
			}

			function H(e) {
				var t, i;
				return null !== (t = e.hlsEngine) && void 0 !== t && t.levels && void 0 !== (null === (i = e.hlsEngine) || void 0 === i ? void 0 : i.currentLevel) ? e.hlsEngine.levels[e.hlsEngine.currentLevel] : void 0
			}! function(e) {
				e.Landscape = "landscape", e.Portrait = "portrait"
			}(m || (m = {})),
			function(e) {
				e.DirectUpload = "direct_upload", e.ScrapedLink = "scraped_link", e.ImageOptimizer = "image_optimizer"
			}(v || (v = {})),
			function(e) {
				e.Hls = "hls", e.SingleFile = "single_file"
			}(y || (y = {})),
			function(e) {
				e.Autoplay = "autoplay", e.Click = "click"
			}(E || (E = {})),
			function(e) {
				e.Buffering = "buffering", e.Paused = "paused", e.Playing = "playing"
			}(_ || (_ = {})),
			function(e) {
				e.InFeedPlayer = "in_feed_player", e.PostDetailScreen = "post_detail_screen", e.GalleryMode = "gallery_mode", e.VideoFeedV1 = "video_feed_v1", e.LiveFeedV1 = "live_feed_v1", e.TheaterMode = "theater_mode", e.DiscoveryUnit = "discovery_unit"
			}(b || (b = {})),
			function(e) {
				e["2g"] = "2g", e["3g"] = "3g", e["4g"] = "4g", e["slow-2g"] = "slow-2g", e.unknown = "unknown"
			}(T || (T = {})),
			function(e) {
				e.Videoplayer = "videoplayer"
			}(S || (S = {})),
			function(e) {
				e.Background = "background", e.Click = "click", e.End = "end", e.Error = "error", e.Scroll = "scroll", e.Start = "start", e.Switch = "switch", e.View = "view"
			}(A || (A = {})),
			function(e) {
				e.Autoplay = "autoplay", e.Bitrate = "bitrate", e.Download = "download", e.Pause = "pause", e.Play = "play", e.Rebuffer = "rebuffer", e.Video = "video"
			}(L || (L = {})),
			function(e) {
				e.Videoplayer = "videoplayer"
			}(R || (R = {})),
			function(e) {
				e.Click = "click", e.Continue = "continue", e.IsFullyViewable = "is_fully_viewable", e.IsViewable = "is_viewable", e.Pause = "pause", e.PlayExpanded = "play_expanded", e.PlayWithSound = "play_with_sound", e.Start = "start", e.Watch = "watch", e.WatchPercent25 = "watch_25_percent", e.WatchPercent50 = "watch_50_percent", e.WatchPercent75 = "watch_75_percent", e.WatchPercent95 = "watch_95_percent", e.WatchPercent100 = "watch_100_percent", e.WatchSeconds2 = "watch_2_seconds", e.WatchSeconds3 = "watch_3_seconds", e.WatchSeconds5 = "watch_5_seconds", e.WatchSeconds10 = "watch_10_seconds"
			}(w || (w = {})),
			function(e) {
				e.Pause = "pause", e.Play = "play", e.Seek = "seek", e.Mute = "mute", e.Unmute = "unmute", e.Replay = "replay", e.Video = "video"
			}(k || (k = {})),
			function(e) {
				e.Autoplay = "autoplay", e.Manual = "manual"
			}(I || (I = {})),
			function(e) {
				e.Auto = "auto", e.Buffer = "buffer", e.Manual = "manual"
			}(D || (D = {}));
			class K {
				constructor(e, t) {
					var i, s, r, n;
					this._handleHeartbeat = e => {
						this._validateHeartbeat(e) && this._watch()
					}, this._validateHeartbeat = e => e.latency < l, this._mediaOrigin = null == t ? void 0 : null === (i = t.media) || void 0 === i ? void 0 : i.origin, this._playbackPlayerType = null == t ? void 0 : null === (s = t.playback) || void 0 === s ? void 0 : s.playerType, this._player = e, this._pulse = new O({
						interval: o
					}), this._stopwatch = new x, this._firstPlayTrusted = !1, this.id = Object(C.a)(), this._lastContinueReason = D.Auto, this._live = (null === (r = this._player.state) || void 0 === r ? void 0 : r.mediaType) === P.a.LiveVideo, this.hasLooped = !1, this._playedInFullscreen = !1, this._playedWithSound = !1, this.startedAt = 0, this._waiting = !1, this._sequenceNumber = -1, this._pulse.onHeartbeat(this._handleHeartbeat), this._watchPercentThresholdObserver = new M(d), this._watchSecondsThresholdObserver = new M(h);
					const a = j(this._player),
						{
							fullscreen: f = !1
						} = null !== (n = this._player.state) && void 0 !== n ? n : {};
					this._viewableImpressionObserver = new F({
						audible: a,
						duration: c,
						fullscreen: f
					}), this._viewableImpressionObserver.onImpression(() => {
						this._player.dispatchEvent(new Event("viewable-impression", {
							bubbles: !1
						}))
					}), this._fullyViewableImpressionObserver = new F({
						audible: a,
						duration: u,
						fullscreen: f
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
					this._viewableImpressionObserver.fullscreen = e, this._fullyViewableImpressionObserver.fullscreen = e, G(this._player) && !this._playedInFullscreen && (this._playedInFullscreen = !0)
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
					null !== (t = this._player.state) && void 0 !== t && t.started || (this._firstPlayTrusted = e), this._lastContinueReason = e ? D.Manual : D.Auto
				}
				playing() {
					this._resumeSession(), this._waiting = !1, this._viewableImpressionObserver.buffering = !1, this._fullyViewableImpressionObserver.buffering = !1, this._lastContinueReason = D.Auto
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
					const t = j(e);
					t && G(e) && !this._playedWithSound && (this._playedWithSound = !0), this._viewableImpressionObserver.audible = t, this._fullyViewableImpressionObserver.audible = t
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
					} = null !== (t = this._player.state) && void 0 !== t ? t : {}, r = 100 * (s >= i ? i / s : 0);
					return this._watchPercentThresholdObserver.test(r)
				}
				checkWatchSecondsThreshold() {
					if (this._watchSecondsThresholdObserver.complete) return [];
					const e = this._stopwatch.time / 1e3;
					return this._watchSecondsThresholdObserver.test(e)
				}
			}
			const q = Symbol("mixins/with-tracking");
			var W = i("./node_modules/@reddit/shreddit.lib.client-telemetry/dist/eventV2JSONUtils.js"),
				Y = function(e, t, i, s) {
					var r, n = arguments.length,
						a = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
					if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
					else
						for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
					return n > 3 && a && Object.defineProperty(t, i, a), a
				};
			const z = [{
				"vds-ended": (e, t) => t.ended(),
				"vds-pause": (e, t, i) => {
					const s = ee(e.requestEvent);
					return t.pause(), X(t, i, s)
				},
				"vds-fullscreen-change": (e, t, i) => {
					const s = e.detail,
						r = [];
					return G(i._player) && !t._playedInFullscreen && r.push(N({
						source: R.Videoplayer,
						action: w.PlayExpanded,
						noun: k.Video
					}, i._player, t)), t.fullscreen(s), r
				},
				"vds-play": (e, t, i) => {
					var s;
					const r = ee(e.requestEvent),
						n = [];
					if (j(i._player) && !t._playedWithSound) {
						t._playedWithSound = !0;
						const e = N({
							source: R.Videoplayer,
							action: w.PlayWithSound,
							noun: k.Video
						}, i._player, t);
						n.push(e)
					}
					if (null !== (s = i._player.state) && void 0 !== s && s.fullscreen && !t._playedInFullscreen) {
						t._playedInFullscreen = !0;
						const e = N({
							source: R.Videoplayer,
							action: w.PlayExpanded,
							noun: k.Video
						}, i._player, t);
						n.push(e)
					}
					return t.play(r), i._userReplayRequest = !1, n
				},
				"vds-autoplay": (e, t, i) => [N({
					source: S.Videoplayer,
					action: A.View,
					noun: L.Autoplay
				}, i._player, t)],
				"vds-can-load": (e, t, i) => {
					var s, r;
					null !== (s = i._player) && void 0 !== s && null !== (r = s.state) && void 0 !== r && r.ended && (i._userReplayRequest = !0)
				},
				"vds-manual-load": (e, t, i) => [N({
					source: S.Videoplayer,
					action: A.Click,
					noun: L.Play
				}, i._player, t)],
				"vds-end": (e, t, i) => {
					var s, r, n;
					if (null !== (s = i._player) && void 0 !== s && s.loop || null !== (r = i._player) && void 0 !== r && null !== (n = r.state) && void 0 !== n && n.loop) return t.looped()
				},
				"vds-error": (e, t, i) => {
					var s;
					return (null == e ? void 0 : null === (s = e.detail) || void 0 === s ? void 0 : s.message) && console.error(`vds-error: [${e.detail.code}] ${e.detail.message}`), [N({
						source: S.Videoplayer,
						action: A.Error,
						noun: L.Video
					}, i._player, t)]
				},
				"vds-video-src-change": (e, t, i) => {
					var s;
					return null !== (s = e.detail) && void 0 !== s && s.userQualityChange ? [N({
						source: S.Videoplayer,
						action: A.Switch,
						noun: L.Bitrate
					}, i._player, t)] : []
				},
				"vds-hls-level-switched": (e, t, i) => [N({
					source: S.Videoplayer,
					action: A.Switch,
					noun: L.Bitrate
				}, i._player, t)],
				"vds-hls-manifest-loading": (e, t, i) => [N({
					source: S.Videoplayer,
					action: A.Start,
					noun: L.Download
				}, i._player, t)],
				"vds-hls-manifest-loaded": (e, t, i) => [N({
					source: S.Videoplayer,
					action: A.End,
					noun: L.Download
				}, i._player, t)],
				"vds-playing": (e, t, i) => {
					var s;
					const r = "vds-triggeredBySeeked" === (null === (s = e.triggerEvent) || void 0 === s ? void 0 : s.type),
						n = !t._stopwatch.time,
						a = [];
					if (t._waiting) {
						t._lastContinueReason = D.Buffer;
						const e = N({
							source: S.Videoplayer,
							action: A.End,
							noun: L.Rebuffer
						}, i._player, t);
						a.push(e)
					}
					if (n) {
						const e = t._firstPlayTrusted ? I.Manual : I.Autoplay,
							s = N({
								source: S.Videoplayer,
								action: A.Start,
								noun: L.Video,
								action_info: {
									reason: e
								}
							}, i._player, t);
						a.push(s)
					} else if (!r || t._waiting) {
						const e = N({
							source: R.Videoplayer,
							action: w.Continue,
							noun: k.Video,
							action_info: {
								reason: t._lastContinueReason
							}
						}, i._player, t);
						a.push(e)
					}
					return t.playing(), a
				},
				"vds-replay": (e, t, i) => {
					var s, r, n;
					return i._userReplayRequest = !0, (null !== (s = i._player) && void 0 !== s && s.loop || null !== (r = i._player) && void 0 !== r && null !== (n = r.state) && void 0 !== n && n.loop) && t.replay(), [N({
						source: R.Videoplayer,
						action: w.Click,
						noun: k.Replay
					}, i._player, t)]
				},
				"vds-seeking": (e, t) => t.seeking(),
				"vds-seeked": (e, t, i) => {
					const s = [];
					return ee(e.requestEvent) && s.push(N({
						source: R.Videoplayer,
						action: w.Click,
						noun: k.Seek
					}, i._player, t)), s
				},
				"vds-time-update": (e, t, i) => {
					const s = [],
						r = t.checkWatchPercentThreshold();
					for (const a of r) s.push(N({
						source: R.Videoplayer,
						action: ie(`WatchPercent${a}`),
						noun: k.Video
					}, i._player, t));
					const n = t.checkWatchSecondsThreshold();
					for (const a of n) s.push(N({
						source: R.Videoplayer,
						action: ie(`WatchSeconds${a}`),
						noun: k.Video
					}, i._player, t));
					return t.timeUpdate(), s
				},
				"vds-volume-change": (e, t, i) => {
					var s;
					const r = ee(e.requestEvent),
						n = [],
						a = null === (s = e.requestEvent) || void 0 === s ? void 0 : s.type;
					if ("vds-mute-request" !== a && "vds-unmute-request" !== a || r && n.push(N({
							source: R.Videoplayer,
							action: w.Click,
							noun: "vds-mute-request" === a ? k.Mute : k.Unmute
						}, i._player, t)), j(i._player) && G(i._player) && !t._playedWithSound) {
						const e = N({
							source: R.Videoplayer,
							action: w.PlayWithSound,
							noun: k.Video
						}, i._player, t);
						n.push(e)
					}
					return t.volumeChange(i._player), n.filter(Boolean)
				},
				"vds-waiting": (e, t, i) => {
					var s, r;
					const n = [];
					return t.waiting(), null !== (s = i._player) && void 0 !== s && null !== (r = s.state) && void 0 !== r && r.started && n.push(N({
						source: S.Videoplayer,
						action: A.Start,
						noun: L.Rebuffer
					}, i._player, t), N({
						source: R.Videoplayer,
						action: w.Pause,
						noun: k.Video,
						action_info: {
							reason: D.Buffer
						}
					}, i._player, t)), n
				},
				"viewable-impression": (e, t, i) => {
					return [N({
						source: R.Videoplayer,
						action: w.IsViewable,
						noun: k.Video
					}, i._player, t)]
				},
				"fully-viewable-impression": (e, t, i) => {
					return [N({
						source: R.Videoplayer,
						action: w.IsFullyViewable,
						noun: k.Video
					}, i._player, t)]
				},
				"video-heartbeat": (e, t, i) => {
					return [Q(t, i)]
				}
			}];

			function X(e, t, i) {
				e.pause();
				const s = [];
				if (i) {
					const i = N({
						source: S.Videoplayer,
						action: A.Click,
						noun: L.Pause
					}, t._player, e);
					s.push(i)
				} else if (t._isVisible) {
					const i = N({
						source: S.Videoplayer,
						action: A.Scroll,
						noun: L.Pause
					}, t._player, e);
					s.push(i)
				} else {
					const i = N({
						source: S.Videoplayer,
						action: A.Background,
						noun: L.Video
					}, t._player, e);
					s.push(i)
				}
				s.push(Q(e, t));
				const r = i ? D.Manual : D.Auto,
					n = N({
						source: R.Videoplayer,
						action: w.Pause,
						noun: k.Video,
						action_info: {
							reason: r
						}
					}, t._player, e);
				return s.push(n), s
			}

			function Q(e, t) {
				const i = N({
					source: R.Videoplayer,
					action: w.Watch,
					noun: k.Video
				}, t._player, e);
				return i.playback.heartbeat_duration_ms = e._stopwatch.lap().time, i
			}
			var J;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Ads = 1] = "Ads"
			}(J || (J = {}));
			let Z = class extends(function(e) {
				if (q in e) return e;
				class t extends e {
					constructor() {
						super(...arguments), this.trackEvent = e => {
							const t = Object(f.a)("track-event", {
								details: e
							});
							this.dispatchEvent(t)
						}
					}
				}
				return t[q] = !0, t
			}(n.a)) {
				constructor() {
					super(...arguments), this.set = J.Default, this._userReplayRequest = !1, this._isVisible = !1, this._pageController = new s.a(this, e => {
						var t;
						let {
							state: i
						} = e;
						const s = "hidden" === i;
						this._isVisible = !s, null === (t = this._mediaSession) || void 0 === t || t.isVisible(!s)
					}), this._connect = Object(r.a)(this, "vds-media-provider-connect", e => {
						if (this._mediaSession) return;
						const {
							element: t,
							onDisconnect: i
						} = e.detail;
						this._player = t, this._createMediaSession();
						let s = z;
						this.set === J.Ads && (s = [...z, ...p]);
						for (const r of s)
							for (const [e, s] of Object.entries(r)) {
								const r = e => this._runListener(e, s);
								t.addEventListener(e, r), i(() => {
									t.removeEventListener(e, r)
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
						source: r,
						action: n,
						noun: a,
						media: o,
						playback: l,
						video_error_report: d,
						action_info: h
					} = e, c = Object(W.a)({
						source: r,
						action: n,
						noun: a
					}, {
						media: o,
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
					for (const t of e) te(t) ? this.handleSessionEvent(t) : this.dispatchEvent(t)
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
					this._mediaSession = new K(this._player, t), this._createIntersectionObservers(), null === (e = this._mediaSession) || void 0 === e || e.isVisible("hidden" !== this._pageController.state)
				}
				_destroyMediaSession() {
					var e, t;
					if (this._destroyIntersectionObservers(), this._player && (null === (e = this._player.state) || void 0 === e || !e.paused) && this._mediaSession) {
						const e = X(this._mediaSession, this);
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
					return n.c`<slot></slot>`
				}
			};

			function ee(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.isOriginTrusted) && void 0 !== t && t
			}

			function te(e) {
				return !!e.source && !!e.noun
			}

			function ie(e) {
				return w[e]
			}
			Y([Object(a.b)({
				type: String,
				attribute: "media-origin"
			})], Z.prototype, "mediaOrigin", void 0), Y([Object(a.b)({
				type: String,
				attribute: "playback-playertype"
			})], Z.prototype, "playbackPlayerType", void 0), Y([Object(a.b)({
				type: Number,
				attribute: "set"
			})], Z.prototype, "set", void 0), Y([Object(a.b)({
				type: String,
				attribute: "player-type"
			})], Z.prototype, "playerType", void 0), Y([Object(a.b)({
				type: String,
				attribute: "post-id"
			})], Z.prototype, "postId", void 0), Y([Object(a.b)({
				type: Boolean,
				attribute: "post-nsfw"
			})], Z.prototype, "postNsfw", void 0), Y([Object(a.b)({
				type: Number,
				attribute: "post-score"
			})], Z.prototype, "postScore", void 0), Y([Object(a.b)({
				type: Boolean,
				attribute: "post-spoiler"
			})], Z.prototype, "postSpoiler", void 0), Y([Object(a.b)({
				type: String,
				attribute: "subreddit-name"
			})], Z.prototype, "subredditName", void 0), Z = Y([Object(a.a)("media-telemetry-observer")], Z)
		},
		"./node_modules/@reddit/shreddit.components.shreddit-player/node_modules/@reddit/adblock-detection/browser.js": function(e, t, i) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			const s = e => {
					if (!e || e.hidden) return !0;
					const t = window.getComputedStyle(e);
					return "none" === t.display || "hidden" === t.visibility || !!e.parentElement && s(e.parentElement)
				},
				r = () => {
					const e = document.getElementById("adblocktest");
					if (!e) return !0;
					const t = null == e ? void 0 : e.getBoundingClientRect();
					return !((null == t ? void 0 : t.height) || (null == t ? void 0 : t.width))
				};
			t.acceptableAdsElement = () => {
				const e = document.createElement("div");
				return e.id = "acceptabletest", e.className = "promotedlink", e.style.width = e.style.height = "1px", e.style.position = "absolute", e.style.top = "0", e.style.left = "-1000px", e.style.display = "block", e
			}, t.adblockDetectorElement = () => {
				const e = document.createElement("div");
				return e.id = "adblocktest", e.className = "ad adsense-ad adsense-ads googad googads gemini-ad openx ad-banner ad-BANNER GoogleAd googleAd hasads LeftAd native-ad ad-300-250 adbar ads-area HeaderAd NavBarAd ad-medium post-ad promoad rectad sidebar-ad small-ad sponsorAd sponsorPost", e.style.width = e.style.height = "1px", e.style.position = "absolute", e.style.top = "0", e.style.left = "-1000px", e
			}, t.hasAcceptableAds = () => {
				if (!r()) return null;
				const e = document.getElementById("acceptabletest");
				return !s(e)
			}, t.hasAdblock = r
		},
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var s = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");

			function r(e, t, i, r) {
				let n;

				function a() {
					var a;
					n || (n = Object(s.e)(null !== (a = null == r ? void 0 : r.target) && void 0 !== a ? a : e, t, i, r))
				}
				a(), e.addController({
					hostConnected() {
						a()
					},
					hostDisconnected() {
						var e;
						null === (e = n) || void 0 === e || e(), n = void 0
					}
				})
			}
		},
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			}));
			var s, r = i("./node_modules/fscreen/dist/fscreen.esm.js"),
				n = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");
			const a = "undefined" != typeof window && "object" == typeof window.safari && (null === (s = window) || void 0 === s ? void 0 : s.safari.pushNotification);
			class o {
				constructor(e, t) {
					this._host = e, this._callback = t, this._state = this._determinePageState(), this._visibility = document.visibilityState, this._disposal = new n.a, e.addController(this)
				}
				get state() {
					return this._state
				}
				get visibility() {
					return this._visibility
				}
				hostConnected() {
					this._state = this._determinePageState(), this._visibility = document.visibilityState, ["focus", "blur", "visibilitychange", "pageshow", "pagehide"].forEach(e => {
						const t = Object(n.e)(window, e, this._handlePageEvent.bind(this));
						this._disposal.add(t)
					}), a && this._disposal.add(Object(n.e)(window, "beforeunload", e => {
						this._safariBeforeUnloadTimeout = setTimeout(() => {
							e.defaultPrevented || e.returnValue.length > 0 || (this._state = "hidden", this._visibility = "hidden", this._triggerCallback())
						}, 0)
					}))
				}
				hostDisconnected() {
					this._disposal.empty()
				}
				_handlePageEvent(e) {
					a && window.clearTimeout(this._safariBeforeUnloadTimeout);
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
					return r.a.fullscreenElement || "blur" !== (null == e ? void 0 : e.type) && "hidden" !== document.visibilityState ? document.hasFocus() ? "active" : "passive" : "hidden"
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

			function r(e, t) {
				return t.some(t => {
					var i;
					return null !== (i = null == e ? void 0 : e.type.includes(t)) && void 0 !== i && i
				})
			}

			function n(e) {
				return r(e, ["pointer"])
			}

			function a(e) {
				return r(e, ["touch"])
			}

			function o(e) {
				return r(e, ["click", "mouse"])
			}
			i.d(t, "e", (function() {
				return s
			})), i.d(t, "c", (function() {
				return n
			})), i.d(t, "d", (function() {
				return a
			})), i.d(t, "b", (function() {
				return o
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
				r = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
				n = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
				a = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"],
				o = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
				l = "fullscreenEnabled" in o && Object.keys(s) || r[0] in o && r || n[0] in o && n || a[0] in o && a || [],
				d = {
					requestFullscreen: function(e) {
						return e[l[s.requestFullscreen]]()
					},
					requestFullscreenFunction: function(e) {
						return e[l[s.requestFullscreen]]
					},
					get exitFullscreen() {
						return o[l[s.exitFullscreen]].bind(o)
					},
					get fullscreenPseudoClass() {
						return ":" + l[s.fullscreen]
					},
					addEventListener: function(e, t, i) {
						return o.addEventListener(l[s[e]], t, i)
					},
					removeEventListener: function(e, t, i) {
						return o.removeEventListener(l[s[e]], t, i)
					},
					get fullscreenEnabled() {
						return Boolean(o[l[s.fullscreenEnabled]])
					},
					set fullscreenEnabled(e) {},
					get fullscreenElement() {
						return o[l[s.fullscreenElement]]
					},
					set fullscreenElement(e) {},
					get onfullscreenchange() {
						return o[("on" + l[s.fullscreenchange]).toLowerCase()]
					},
					set onfullscreenchange(e) {
						return o[("on" + l[s.fullscreenchange]).toLowerCase()] = e
					},
					get onfullscreenerror() {
						return o[("on" + l[s.fullscreenerror]).toLowerCase()]
					},
					set onfullscreenerror(e) {
						return o[("on" + l[s.fullscreenerror]).toLowerCase()] = e
					}
				};
			t.a = d
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~shreddit-player.969d00a312b1fd782e03.js.map