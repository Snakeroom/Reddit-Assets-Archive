// https://www.redditstatic.com/desktop2x/vendors~shreddit-player.14e3ee4dfce97dc63f3c.js
// Retrieved at 2/28/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~shreddit-player"], {
		"./node_modules/@reddit/shreddit.components.shreddit-player/dist/index.js": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "ShredditPlayer", (function() {
				return Oi
			}));
			var s = i("./node_modules/lit/index.js"),
				n = i("./node_modules/lit/decorators.js"),
				r = i("./node_modules/lit-html/lit-html.js");
			const a = e => null != e ? e : r.d;
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
			class _ {
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
			const g = Symbol("mixins/observer");
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
				if (g in e) return e;
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
						this._observer || (this._observer = new _(e), this._observer.observe(this), this.addEventListener("faceplate-enter", this._handleEnter), this.addEventListener("faceplate-leave", this._handleLeave))
					}
					disableObserver() {
						this._observer && (this._observer.unobserve(this), this._observer = null, this.removeEventListener("faceplate-enter", this._handleEnter), this.removeEventListener("faceplate-leave", this._handleLeave))
					}
					observerIsIntersectingCallback(e) {}
					observerIsNotIntersectingCallback(e) {}
				}
				return t[g] = !0, t
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
			var E = i("./node_modules/lit/directives/unsafe-svg.js"),
				O = i("./node_modules/@reddit/faceplate-ui/base-classes/icon-element.js");
			Object(O.a)("icon-checkmark", s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 15.583a.72.72 0 01-.513-.212L1.558 9.942l.884-.884L7.5 14.116 18.058 3.558l.884.884-10.93 10.929a.723.723 0 01-.512.212z"/></svg>')}`, s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 15.958a1.102 1.102 0 01-.778-.322l-5.429-5.429 1.414-1.414L7.5 13.586 17.793 3.293l1.414 1.414L8.278 15.636a1.101 1.101 0 01-.778.322z"/></svg>')}`);
			Object(O.a)("icon-collapse-left", s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M18.183 19.067L12.3 13.179v3.491h-1.25v-5a.625.625 0 01.624-.625h5V12.3H13.18l5.887 5.888-.884.879zM7.75 6.866L1.862.979l-.884.883L6.866 7.75H3.375V9h5A.625.625 0 009 8.375v-5H7.75v3.491z"/></svg>')}`, s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9 3.375v5A.625.625 0 018.375 9h-5a.625.625 0 01-.442-1.067L4.726 6.14.714 2.127 2.128.713 6.14 4.726l1.793-1.793A.625.625 0 019 3.375zm10.332 14.543l-4.058-4.058 1.793-1.793A.626.626 0 0016.625 11h-5a.625.625 0 00-.625.625v5a.626.626 0 001.067.442l1.793-1.793 4.058 4.058 1.414-1.414z"/></svg>')}`);
			Object(O.a)("icon-expand-left", s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.134 3.25l4.933 4.933-.884.884L3.25 4.134v3.491H2v-5A.625.625 0 012.625 2h5v1.25H4.134zm12.616 9.125v3.491l-4.933-4.933-.884.884 4.933 4.933h-3.491V18h5a.624.624 0 00.625-.625v-5h-1.25z"/></svg>')}`, s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.274 4.86l3.058 3.058-1.414 1.414L4.86 6.274 3.067 8.067A.625.625 0 012 7.625v-5A.625.625 0 012.625 2h5a.625.625 0 01.442 1.067L6.274 4.86zm11.34 6.94a.627.627 0 00-.681.136l-1.793 1.79-3.058-3.058-1.414 1.414 3.058 3.058-1.793 1.793A.625.625 0 0012.375 18h5a.624.624 0 00.625-.625v-5a.626.626 0 00-.386-.575z"/></svg>')}`);
			Object(O.a)("icon-gif-post", s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_616_22)"><path d="M4.711 12.664A2.8 2.8 0 013.6 11.583 3.108 3.108 0 013.2 10a3.052 3.052 0 01.411-1.583c.267-.46.659-.834 1.129-1.082a3.37 3.37 0 011.616-.385c.333 0 .664.043.986.128.309.081.605.205.879.369l-.5 1.169a1.314 1.314 0 00-.563-.357 2.3 2.3 0 00-.754-.124 1.733 1.733 0 00-1.863 1.848c-.006.344.073.684.232.99a1.7 1.7 0 001.542.925c.258.004.513-.051.746-.162.209-.097.387-.25.513-.443.121-.185.185-.401.183-.622H6.124V9.619L9 9.6v.928a2.4 2.4 0 01-1.293 2.193 2.955 2.955 0 01-1.417.328 3.247 3.247 0 01-1.579-.385zm5.471-5.648H11.5v5.968h-1.318V7.016zm2.862 0H16.5v1.169h-2.138v1.392h1.79v1.169h-1.79v2.238h-1.318V7.016zM10 20a18.04 18.04 0 01-6.369-1.162 4.226 4.226 0 01-2.469-2.47 18.033 18.033 0 010-12.737 4.228 4.228 0 012.469-2.469 18.116 18.116 0 0112.738 0 4.228 4.228 0 012.469 2.469 18.035 18.035 0 010 12.738 4.225 4.225 0 01-2.469 2.469A18.04 18.04 0 0110 20zm0-18.75a16.8 16.8 0 00-5.929 1.082 2.978 2.978 0 00-1.739 1.739 16.783 16.783 0 000 11.857 2.98 2.98 0 001.739 1.74 16.858 16.858 0 0011.858 0 2.978 2.978 0 001.739-1.739 16.785 16.785 0 000-11.858 2.978 2.978 0 00-1.739-1.739A16.8 16.8 0 0010 1.25z"/></g><defs><clipPath id="clip0_616_22"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_616_23)"><path d="M18.838 3.631a4.228 4.228 0 00-2.469-2.469 18.116 18.116 0 00-12.738 0 4.228 4.228 0 00-2.469 2.469 18.033 18.033 0 000 12.737 4.226 4.226 0 002.469 2.47 18.035 18.035 0 0012.738 0 4.226 4.226 0 002.469-2.469 18.035 18.035 0 000-12.738zM9 10.53a2.4 2.4 0 01-1.293 2.193 2.955 2.955 0 01-1.417.328 3.246 3.246 0 01-1.579-.386A2.811 2.811 0 013.6 11.583 3.108 3.108 0 013.2 10a3.052 3.052 0 01.411-1.583c.267-.46.659-.834 1.129-1.082a3.37 3.37 0 011.616-.385c.333 0 .664.043.986.128.309.081.605.205.879.369l-.5 1.169a1.314 1.314 0 00-.563-.357 2.3 2.3 0 00-.754-.124 1.733 1.733 0 00-1.863 1.848c-.006.344.073.684.232.99a1.7 1.7 0 001.542.925c.258.004.513-.051.746-.162.209-.097.387-.25.513-.443.121-.185.185-.401.183-.622H6.124V9.619L9 9.6v.93zm2.5 2.454H10V7.016h1.5v5.968zm5-4.8h-2.138v1.393h1.79v1.169h-1.79v2.238H13V7.016h3.5v1.168z"/></g><defs><clipPath id="clip0_616_23"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			Object(O.a)("icon-play", s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.125 19.543A1.124 1.124 0 013 18.418V1.582A1.125 1.125 0 014.735.636l13.048 8.419a1.125 1.125 0 010 1.89L4.735 19.364a1.129 1.129 0 01-.61.179zM4.25 1.811v16.378L16.942 10 4.25 1.811z"/></svg>')}`, s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.125 19.543A1.126 1.126 0 013 18.418V1.582A1.125 1.125 0 014.735.636l13.048 8.418a1.126 1.126 0 010 1.891L4.735 19.363a1.13 1.13 0 01-.61.18z"/></svg>')}`);
			Object(O.a)("icon-pause", s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.875 19h-3.75A1.126 1.126 0 012 17.875V2.125A1.127 1.127 0 013.125 1h3.75A1.127 1.127 0 018 2.125v15.75A1.126 1.126 0 016.875 19zM3.25 17.75h3.5V2.25h-3.5v15.5zM16.875 19h-3.75A1.126 1.126 0 0112 17.875V2.125A1.127 1.127 0 0113.125 1h3.75A1.127 1.127 0 0118 2.125v15.75A1.126 1.126 0 0116.875 19zm-3.625-1.25h3.5V2.25h-3.5v15.5z"/></svg>')}`, s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.875 19h-3.75A1.127 1.127 0 012 17.875V2.125A1.127 1.127 0 013.125 1h3.75A1.127 1.127 0 018 2.125v15.75A1.127 1.127 0 016.875 19zm10 0h-3.75A1.127 1.127 0 0112 17.875V2.125A1.127 1.127 0 0113.125 1h3.75A1.127 1.127 0 0118 2.125v15.75A1.127 1.127 0 0116.875 19z"/></svg>')}`);
			Object(O.a)("icon-volume", s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.891 19.854c-.25 0-.494-.087-.687-.247l-5.389-4.662H2.108A1.125 1.125 0 011 13.807V6.193a1.125 1.125 0 011.108-1.138h1.707L9.19.405a1.089 1.089 0 011.168-.153A1.129 1.129 0 0111 1.285v17.43a1.129 1.129 0 01-.643 1.033c-.145.07-.305.106-.466.106zM2.251 13.7h2.03l5.47 4.727V1.572L4.28 6.305h-2.03V13.7zM16.124 10A3.13 3.13 0 0013 6.875v1.25a1.875 1.875 0 110 3.75v1.25A3.129 3.129 0 0016.125 10zM20 10a7.008 7.008 0 00-7-7v1.25a5.75 5.75 0 110 11.5V17a7.008 7.008 0 007-7z"/></svg>')}`, s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13 13.5v-2a1.5 1.5 0 100-3v-2a3.5 3.5 0 110 7zM13 3v2a5 5 0 110 10v2a7 7 0 100-14zM10.357.252A1.091 1.091 0 009.19.405l-5.374 4.65H2.108A1.125 1.125 0 001 6.193v7.614a1.125 1.125 0 001.108 1.138h1.707l5.39 4.663a1.081 1.081 0 001.153.14A1.131 1.131 0 0011 18.715V1.285a1.13 1.13 0 00-.643-1.033z"/></svg>')}`);
			Object(O.a)("icon-volume-mute", s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M16.784 9.5l2.558 2.558-.884.884-2.558-2.558-2.558 2.558-.884-.884L15.016 9.5l-2.558-2.558.884-.884L15.9 8.616l2.558-2.558.884.884L16.784 9.5zm-6.427 10.248A1.128 1.128 0 0011 18.715V1.286a1.131 1.131 0 00-.643-1.034A1.091 1.091 0 009.19.405L3.815 5.056H2.108A1.124 1.124 0 001 6.194v7.613a1.124 1.124 0 001.108 1.138h1.707L9.2 19.608a1.084 1.084 0 001.157.14zM2.25 6.306h2.031l5.47-4.733v16.855L4.28 13.7h-2.03V6.306z"/></svg>')}`, s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M11 1.285v17.43a1.131 1.131 0 01-.642 1.033 1.081 1.081 0 01-1.153-.14l-5.39-4.663H2.108A1.125 1.125 0 011 13.807V6.193a1.125 1.125 0 011.108-1.138h1.707L9.19.405a1.09 1.09 0 011.168-.153A1.129 1.129 0 0111 1.285zm8.607 5.922l-1.414-1.414L15.9 8.086l-2.293-2.293-1.414 1.414L14.486 9.5l-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414L17.314 9.5l2.293-2.293z"/></svg>')}`);
			Object(O.a)("icon-refresh", s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_457_91)"><path d="M16.75 11.5A7.25 7.25 0 119.5 4.25h4.069L11.31 6.133l.8.96 3.59-2.988a.626.626 0 000-.96L12.109.157l-.8.96L13.569 3H9.5a8.5 8.5 0 108.5 8.5h-1.25z"/></g><defs><clipPath id="clip0_457_91"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, s.g`${Object(E.a)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_457_79)"><path d="M16 11.5A6.5 6.5 0 119.5 5H11v1.914a1 1 0 001.665.747l3.318-2.951a1 1 0 000-1.495L12.665.265A1 1 0 0011 1.012V3H9.5a8.5 8.5 0 108.5 8.5h-2zm-2.214-7.512v-.05l.028.025-.028.025z"/></g><defs><clipPath id="clip0_457_79"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			var k, C;
			i("./node_modules/@reddit/faceplate-ui/icons/icon-settings.js"), i("./node_modules/core-js/modules/web.dom.iterable.js");

			function S() {}

			function j(e) {
				return null === e
			}

			function P(e) {
				return void 0 === e
			}

			function M(e) {
				return j(e) || P(e)
			}

			function x(e) {
				return "number" == typeof e && !Number.isNaN(e)
			}

			function A(e) {
				return "string" == typeof e
			}

			function L(e) {
				return "function" == typeof e
			}

			function R(e) {
				return Array.isArray(e)
			}
			const V = "undefined" != typeof window,
				T = V ? null === (k = window.navigator) || void 0 === k ? void 0 : k.userAgent.toLowerCase() : "",
				q = /iphone|ipad|ipod|ios|CriOS|FxiOS/.test(T),
				D = (/android/.test(T), V && /(iPhone|iPod)/gi.test(null === (C = window.navigator) || void 0 === C ? void 0 : C.platform), /firefox/.test(T), V && !!window.chrome);
			V && !D && (window.safari || q || /(apple|safari)/.test(T)), V && "file:" !== window.location.protocol && (window.location.protocol, window.location.hostname);

			function I() {
				const e = null !== (t = null === (i = window) || void 0 === i ? void 0 : i.MediaSource) && void 0 !== t ? t : null === (s = window) || void 0 === s ? void 0 : s.WebKitMediaSource;
				var t, i, s;
				if (P(e)) return !1;
				const n = e && L(e.isTypeSupported) && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
					r = null !== (a = null === (o = window) || void 0 === o ? void 0 : o.SourceBuffer) && void 0 !== a ? a : null === (l = window) || void 0 === l ? void 0 : l.WebKitSourceBuffer;
				var a, o, l;
				const d = P(r) || !P(r.prototype) && L(r.prototype.appendBuffer) && L(r.prototype.remove);
				return !!n && !!d
			}

			function $(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : V;
				const s = i && !P(window.customElements.get(e));
				i && !s && window.customElements.define(e, t)
			}

			function F(e, t, i) {
				if (M(i) || !1 === i) e.removeAttribute(t);
				else {
					const s = A(i) ? i : "";
					e.setAttribute(t, s)
				}
			}

			function H(e, t, i) {
				e.hasAttribute(t) || e.setAttribute(t, i)
			}

			function B(e, t, i) {
				let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vds";
				e.style.setProperty(`--${s}-${t}`, i || null)
			}
			var N = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");
			class U extends CustomEvent {
				constructor(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					super(e, t), this.triggerEvent = t.triggerEvent, this.hasOwnProperty("originEvent") || Object.defineProperties(this, {
						originEvent: {
							get() {
								var e;
								return null !== (e = W(this)) && void 0 !== e ? e : this
							}
						},
						isOriginTrusted: {
							get() {
								var e, t;
								return null !== (e = null === (t = W(this)) || void 0 === t ? void 0 : t.isTrusted) && void 0 !== e && e
							}
						}
					})
				}
				get originEvent() {
					var e;
					return null !== (e = W(this)) && void 0 !== e ? e : this
				}
				get isOriginTrusted() {
					var e, t;
					return null !== (e = null === (t = this.originEvent) || void 0 === t ? void 0 : t.isTrusted) && void 0 !== e && e
				}
			}

			function z(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return new U(e, t)
			}

			function W(e) {
				let t = e.triggerEvent;
				for (; t && t.triggerEvent;) t = t.triggerEvent;
				return t
			}

			function Q(e, t) {
				var i;
				(null !== (i = W(e)) && void 0 !== i ? i : e).triggerEvent = t
			}
			const K = new Map,
				Y = new Map;

			function G(e, t, i) {
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
								return Array.from(null !== (i = Y.get(t)) && void 0 !== i ? i : []).filter(t => {
									let {
										element: i
									} = t;
									return e !== i && e.contains(i)
								})
							}(e, t)) i(s, r);
						K.set(t, (null !== (n = K.get(t)) && void 0 !== n ? n : new Set).add(s))
					},
					hostDisconnected: () => {
						var e;
						null === (e = K.get(t)) || void 0 === e || e.delete(s)
					}
				})
			}

			function J(e, t) {
				const i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).register,
					s = new N.a,
					n = e => {
						s.add(e)
					},
					r = {
						element: e,
						onDisconnect: n
					};
				e.addController({
					hostConnected() {
						const s = z(t, {
							bubbles: !0,
							composed: !0,
							detail: r
						});
						var a;
						(e.dispatchEvent(s), i) && (Y.set(i, (null !== (a = Y.get(i)) && void 0 !== a ? a : new Set).add(r)), function(e, t, i) {
							for (const {
									host: n,
									callback: r
								} of Array.from(null !== (s = K.get(t)) && void 0 !== s ? s : [])) {
								var s;
								n !== e && n.contains(e) && r(e, i)
							}
						}(e, i, n))
					},
					hostDisconnected() {
						var e;
						(s.empty(), i) && (null === (e = Y.get(i)) || void 0 === e || e.delete(r))
					}
				})
			}
			var X = function(e, t, i) {
				var s = null,
					n = null,
					r = function() {
						s && (clearTimeout(s), n = null, s = null)
					},
					a = function() {
						if (!t) return e.apply(this, arguments);
						var a = this,
							o = arguments,
							l = i && !s;
						return r(), n = function() {
							e.apply(a, o)
						}, s = setTimeout((function() {
							if (s = null, !l) {
								var e = n;
								return n = null, e()
							}
						}), t), l ? n() : void 0
					};
				return a.cancel = r, a.flush = function() {
					var e = n;
					r(), e && e()
				}, a
			};

			function Z() {
				let e = S,
					t = S;
				return {
					promise: new Promise((i, s) => {
						e = i, t = s
					}),
					resolve: e,
					reject: t
				}
			}
			class ee {
				constructor() {
					this._requestQueue = new Map, this._requestKeys = [], this._pendingFlush = Z(), this._isServing = !1
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
					this._pendingFlush.resolve(), this._pendingFlush = Z()
				}
				stop() {
					this._isServing = !1
				}
				destroy() {
					this.stop(), this._empty(), this._release()
				}
			}

			function te(e) {
				return "symbol" == typeof(null == e ? void 0 : e.id) && "@vidstack/context" === e.id.description
			}

			function ie(e) {
				return Object.keys(e)
			}
			const se = [];

			function ne(e) {
				let t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
				const s = new Set;

				function n(i) {
					if (function(e, t) {
							return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
						}(e, i) && (e = i, t)) {
						const t = !se.length;
						for (const i of s) i[1](), se.push(i, e);
						if (t) {
							for (let e = 0; e < se.length; e += 2) se[e][0](se[e + 1]);
							se.length = 0
						}
					}
				}
				return {
					initialValue: e,
					set: n,
					update: function(t) {
						n(t(e))
					},
					subscribe: function(r) {
						const a = [r, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S];
						return s.add(a), 1 === s.size && (t = i(n) || S), r(e), () => {
							var e;
							(s.delete(a), 0 === s.size) && (null === (e = t) || void 0 === e || e(), t = null)
						}
					}
				}
			}

			function re(e, t, i) {
				const s = !Array.isArray(e),
					n = s ? [e] : e,
					r = t.length < 2;
				return {
					initialValue: a = i,
					subscribe: ne(a, e => {
						let i = !1;
						const a = [];
						let o = 0,
							l = S;
						const d = () => {
								if (o) return;
								l();
								const i = t(s ? a[0] : a, e);
								r ? e(i) : l = L(i) ? i : S
							},
							h = n.map((e, t) => e.subscribe(e => {
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

			function ae(e) {
				let t;
				return e.subscribe(e => t = e)(), t
			}

			function oe(e, t, i) {
				let s, n;
				const r = () => {
					var e, r, a;
					n = null === (e = null !== (r = null === (a = s) || void 0 === a ? void 0 : a.value) && void 0 !== r ? r : t) || void 0 === e ? void 0 : e.subscribe(i)
				};
				te(t) && (s = t.consume(e)), e.addController({
					hostConnected() {
						te(t) ? s.whenRegistered(r) : r()
					},
					hostDisconnected() {
						var e;
						null === (e = n) || void 0 === e || e()
					}
				})
			}

			function le(e, t, i, s) {
				if (!te(t)) return oe(e, t[i], s); {
					const n = t.consume(e);
					let r;
					const a = () => {
						r = n.value[i].subscribe(s)
					};
					e.addController({
						hostConnected: () => {
							n.whenRegistered(a)
						},
						hostDisconnected: () => {
							var e;
							null === (e = r) || void 0 === e || e()
						}
					})
				}
			}

			function de(e) {
				return new Proxy(e, {
					get: (e, t) => ae(e[t]),
					has: (e, t) => Reflect.has(e, t),
					ownKeys: e => Reflect.ownKeys(e),
					getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e, t)
				})
			}

			function he(e) {
				const t = new ee;
				return e.addController({
					hostConnected: t.start.bind(t),
					hostDisconnected: t.destroy.bind(t)
				}), t
			}
			class ce {
				constructor(e) {
					this._host = e, this._isScreenOrientationLocked = !1, this._updateScreenOrientation(), this._listenerDisposal = new N.a, e.addController({
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
					return V && !P(screen.orientation) && L(screen.orientation.lock) && L(screen.orientation.unlock)
				}
				get isLocked() {
					return this._isScreenOrientationLocked
				}
				async lock(e) {
					this._throwIfScreenOrientationUnavailable(), await screen.orientation.lock(e), this._isScreenOrientationLocked = !0, this._host.dispatchEvent(z("vds-screen-orientation-lock-change", {
						bubbles: !0,
						composed: !0,
						detail: e
					}))
				}
				async unlock() {
					this._throwIfScreenOrientationUnavailable(), await screen.orientation.unlock(), this._isScreenOrientationLocked = !1, this._host.dispatchEvent(z("vds-screen-orientation-lock-change", {
						bubbles: !0,
						composed: !0,
						detail: screen.orientation.type
					}))
				}
				_addScreenOrientationEventListeners() {
					this.canOrient && this._listenerDisposal.add(this._addScreenOrientationChangeEventListener())
				}
				_addScreenOrientationChangeEventListener() {
					return Object(N.e)(screen.orientation, "change", this._handleOrientationChange.bind(this))
				}
				_handleOrientationChange(e) {
					this._screenOrientation = window.screen.orientation.type, this._host.dispatchEvent(z("vds-screen-orientation-change", {
						bubbles: !0,
						composed: !0,
						detail: this._screenOrientation,
						triggerEvent: e
					}))
				}
				_updateScreenOrientation() {
					var e, t;
					this._screenOrientation = V ? null === (e = window.screen) || void 0 === e ? void 0 : null === (t = e.orientation) || void 0 === t ? void 0 : t.type : void 0
				}
				_throwIfScreenOrientationUnavailable() {
					if (!this.canOrient) throw Error("Screen orientation API is not available.")
				}
			}
			var ue = i("./node_modules/fscreen/dist/fscreen.esm.js");
			class pe {
				constructor(e, t) {
					this._host = e, this._screenOrientationController = t, this._listenerDisposal = new N.a, e.addController({
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
					return ue.a.fullscreenEnabled
				}
				get isFullscreen() {
					return this.isNativeFullscreen
				}
				get isNativeFullscreen() {
					if (ue.a.fullscreenElement === this._host) return !0;
					try {
						return this._host.matches(ue.a.fullscreenPseudoClass)
					} catch (e) {
						return !1
					}
				}
				_addFullscreenChangeEventListener(e) {
					if (!this.isSupported) return S;
					const t = Object(N.e)(ue.a, "fullscreenchange", e);
					return () => {
						t()
					}
				}
				_addFullscreenErrorEventListener(e) {
					if (!this.isSupported) return S;
					const t = Object(N.e)(ue.a, "fullscreenerror", e);
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
					return ue.a.requestFullscreen(this._host)
				}
				_handleFullscreenChange(e) {
					this.isFullscreen || this._listenerDisposal.empty(), this._host.dispatchEvent(z("vds-fullscreen-change", {
						bubbles: !0,
						composed: !0,
						detail: this.isFullscreen,
						triggerEvent: e
					}))
				}
				_handleFullscreenError(e) {
					this._host.dispatchEvent(z("vds-fullscreen-error", {
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
					return ue.a.exitFullscreen()
				}
				_shouldOrientScreen() {
					return this._screenOrientationController.canOrient && !P(this.screenOrientationLock)
				}
				async _lockScreenOrientation() {
					!P(this.screenOrientationLock) && this._shouldOrientScreen() && await this._screenOrientationController.lock(this.screenOrientationLock)
				}
				async _unlockScreenOrientation() {
					this._shouldOrientScreen() && await this._screenOrientationController.unlock()
				}
				_throwIfNoFullscreenSupport() {
					if (!this.isSupported) throw Error("Fullscreen API is not enabled or supported in this environment.")
				}
			}
			class ve {
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

			function _e(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
				return Number(e.toFixed(t))
			}

			function ge(e, t, i) {
				return Math.max(e, Math.min(i, t))
			}

			function me(e) {
				var t, i;
				return null !== (t = null === (i = String(e).split(".")[1]) || void 0 === i ? void 0 : i.length) && void 0 !== t ? t : 0
			}
			const be = new Map;
			class ye {
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
					if (this._host.dispatchEvent(z("vds-context-consumer-connect", {
							bubbles: !0,
							composed: !0,
							detail: {
								id: this.id,
								setValue: e
							}
						})), !this.registered) {
						var t;
						const i = null !== (t = be.get(this.id)) && void 0 !== t ? t : [];
						i.push({
							host: this._host,
							setValue: e
						}), be.set(this.id, i)
					}
				}
				whenRegistered(e) {
					var t;
					this.registered ? e(this.value) : null === (t = this._registrationCallbacks) || void 0 === t || t.push(e)
				}
			}
			class fe {
				constructor(e, t, i) {
					this._host = e, this._initValue = t, this._options = i, this._stopDisposal = new N.a, this._value = t(), e.addController({
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
					const e = Object(N.e)(this._host, "vds-context-consumer-connect", this._handleConsumerConnect.bind(this));
					for (const t of function(e, t) {
							var i;
							const s = null !== (i = be.get(e)) && void 0 !== i ? i : [],
								n = s.filter(e => {
									let {
										host: i
									} = e;
									return t.contains(i)
								});
							return be.set(e, s.filter(e => {
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

			function we(e) {
				const t = Symbol("@vidstack/context");
				return {
					id: t,
					consume: i => new ye(i, e(), {
						id: t
					}),
					provide: i => new fe(i, e, {
						id: t
					})
				}
			}
			var Ee, Oe = i("./node_modules/@reddit/vidstack.components.player/dist/src/media/MediaType.js");

			function ke(e, t, i, s) {
				return function(e, t, i) {
					if (!x(t) || t < 0 || t > i) throw new Error(`Failed to execute '${e}' on 'TimeRanges': The index provided (${t}) is non-numeric or out of bounds (0-${i}).`)
				}(e, s, i.length - 1), i[s][t]
			}

			function Ce(e) {
				if (P(e) || 0 === e.length) {
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
					start: ke.bind(null, "start", 0, e),
					end: ke.bind(null, "end", 1, e)
				}
			}

			function Se(e, t) {
				return R(e) ? Ce(e) : P(e) || P(t) ? Ce() : Ce([
					[e, t]
				])
			}! function(e) {
				e.Unknown = "unknown", e.Audio = "audio", e.Video = "video"
			}(Ee || (Ee = {}));
			const je = {
				autoplay: !1,
				autoplayError: void 0,
				buffered: Se(),
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
				mediaType: Oe.a.Unknown,
				muted: !1,
				paused: !0,
				played: Se(),
				playing: !1,
				playsinline: !1,
				seekable: Se(),
				seekableAmount: 0,
				seeking: !1,
				src: [],
				started: !1,
				viewType: Ee.Unknown,
				volume: 1,
				waiting: !1
			};

			function Pe() {
				const e = {};
				for (const t of ie(je)) e[t] = ne(je[t]);
				return e
			}
			const Me = new Set(["autoplay", "canFullscreen", "canLoad", "controls", "currentSrc", "loop", "muted", "playsinline", "poster", "src", "viewType", "volume"]);
			const xe = we(Pe);

			function Ae(e, t, i) {
				return le(e, xe, t, i)
			}
			var Le = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			const Re = Symbol("@vidstack/media-provider-discovery");
			class Ve extends s.a {
				constructor() {
					super(), this._disconnectDisposal = new N.a, this.manualPaused = !1, this.loading = "lazy", this._attemptingAutoplay = !1, this.autoplayControlledByMediaVisibility = !1, this.userHasInteracted = !1, this.controllerQueue = new ee, this._store = Pe(), this._state = de(this._store), this.connectedQueue = he(this), this.mediaQueue = new ee, this.screenOrientationController = new ce(this), this.fullscreenController = new pe(this, this.screenOrientationController), J(this, "vds-media-provider-connect", {
						register: Re
					});
					const e = function() {
						for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
						return new ve(...t)
					}(this, {
						target: this,
						threshold: 0
					}, t => {
						var i;
						null !== (i = t[0]) && void 0 !== i && i.isIntersecting && "lazy" === this.loading && (this.startLoadingMedia(), e.hostDisconnected())
					})
				}
				connectedCallback() {
					super.connectedCallback(), F(this, "paused", this.paused), window.requestAnimationFrame(() => {
						P(this.canLoadPoster) && (this.canLoadPoster = !0)
					})
				}
				firstUpdated(e) {
					super.firstUpdated(e), this.dispatchEvent(z("vds-fullscreen-support-change", {
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
							i = ge(0, e, 1);
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
					t !== e && (this.dispatchEvent(z("vds-poster-change", {
						detail: e
					})), this.requestUpdate("poster", t))
				}
				get loop() {
					return this.state.loop
				}
				set loop(e) {
					const t = this.loop;
					t !== e && (this.dispatchEvent(z("vds-loop-change", {
						detail: e
					})), this.requestUpdate("loop", t))
				}
				get controls() {
					return this.state.controls
				}
				set controls(e) {
					const t = this.controls;
					t !== e && (this.dispatchEvent(z("vds-controls-change", {
						detail: e
					})), this.requestUpdate("controls", t))
				}
				get canLoad() {
					return this.state.canLoad
				}
				startLoadingMedia() {
					this.controllerQueue, this.dispatchEvent(z("vds-can-load")), this.autoplay ? this.dispatchEvent(z("vds-can-autoplay")) : this.dispatchEvent(z("vds-manual-load"))
				}
				_throwIfNotReadyForPlayback() {
					if (!this.state.canPlay) throw Error("Media is not ready - wait for `vds-can-play` event.")
				}
				async _resetPlaybackIfEnded() {
					if (this.state.ended && 0 !== this.state.currentTime) return this._setCurrentTime(0)
				}
				_throwIfNotVideoView() {
					if (this.state.viewType !== Ee.Video) throw Error("Player is currently not in a video view.")
				}
				async _handleMediaReady(e) {
					let {
						event: t,
						duration: i
					} = e;
					this.state.canPlay || (this.dispatchEvent(z("vds-can-play", {
						triggerEvent: t,
						detail: {
							duration: i
						}
					})), this.mediaQueue.start(), this.autoplayControlledByMediaVisibility || await this.attemptAutoplay())
				}
				_handleCurrentSrcChange(e, t) {
					this.state.currentSrc !== e && (this.mediaQueue.stop(), this.dispatchEvent(z("vds-current-src-change", {
						detail: e,
						triggerEvent: t
					})))
				}
				get autoplay() {
					return this.state.autoplay
				}
				set autoplay(e) {
					this.autoplay !== e && (this.dispatchEvent(z("vds-autoplay-change", {
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
							this.dispatchEvent(z("vds-autoplay", {
								detail: {
									muted: this.muted
								}
							})), await this.play()
						} catch (e) {
							this.dispatchEvent(z("vds-autoplay-fail", {
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
						this.controllerQueue.destroy(), this._controller = void 0, this._store = Pe(), this._state = de(this._store)
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
			Le([Object(n.b)({
				type: Number,
				reflect: !0
			})], Ve.prototype, "volume", null), Le([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], Ve.prototype, "paused", null), Le([Object(n.b)({
				type: Boolean
			})], Ve.prototype, "manualPaused", void 0), Le([Object(n.b)({
				type: Number
			})], Ve.prototype, "currentTime", null), Le([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], Ve.prototype, "muted", null), Le([Object(n.b)({
				reflect: !0
			})], Ve.prototype, "poster", null), Le([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], Ve.prototype, "loop", null), Le([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], Ve.prototype, "controls", null), Le([Object(n.d)()], Ve.prototype, "canLoadPoster", void 0), Le([Object(n.b)({
				attribute: "loading"
			})], Ve.prototype, "loading", void 0), Le([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], Ve.prototype, "autoplay", null), Le([Object(n.b)({
				attribute: "idle-delay",
				type: Number
			})], Ve.prototype, "idleDelay", null), Le([Object(n.b)({
				attribute: "fullscreen-orientation"
			})], Ve.prototype, "fullscreenOrientation", null);
			var Te = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			const qe = "@reddit/shreddit-player-media-volume",
				De = new Set;
			let Ie = !1,
				$e = !1;
			class Fe extends s.a {
				constructor() {
					super(), this.singlePlayback = !1, this.syncVolume = !1, this._providerDisposal = new N.a, G(this, Re, (e, t) => {
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
					if (this._provider = e, De.add(e), this.singlePlayback) {
						const t = Object(N.e)(e, "vds-play", this._handleMediaPlay.bind(this));
						this._providerDisposal.add(t)
					}
					if (this.syncVolume) {
						const t = Object(N.e)(e, "vds-volume-change", X(this._handleMediaVolumeChange.bind(this), 10, !0));
						this._providerDisposal.add(t)
					}
					const i = Object(N.e)(e, "vds-volume-change", this._saveMediaVolume.bind(this));
					this._providerDisposal.add(i), window.requestAnimationFrame(() => {
						if (this._provider) {
							const e = this._getSavedMediaVolume();
							x(null == e ? void 0 : e.volume) && (this._provider.volume = e.volume), this._provider.autoplay && !this._provider.userHasInteracted ? this._provider.muted = !0 : P(null == e ? void 0 : e.muted) || (this._provider.muted = e.muted)
						}
					}), t(() => {
						De.delete(e), this._provider = void 0, this._providerDisposal.empty()
					})
				}
				_handleMediaPlay() {
					Ie || (Ie = !0, De.forEach(e => {
						e !== this._provider && (e.paused = !0)
					}), Ie = !1)
				}
				_handleMediaVolumeChange(e) {
					if ($e) return;
					$e = !0;
					const {
						volume: t,
						muted: i
					} = e.detail;
					De.forEach(e => {
						e !== this._provider && (e.volume = t, e.muted = i, e.userHasInteracted = !0)
					}), this.dispatchEvent(z("vds-media-volume-sync", {
						bubbles: !0,
						composed: !0,
						detail: e.detail
					})), $e = !1
				}
				_getSavedMediaVolume() {
					if (!P(localStorage)) try {
						return JSON.parse(localStorage.getItem(qe))
					} catch (e) {
						return
					}
				}
				_saveMediaVolume(e) {
					P(localStorage) || localStorage.setItem(qe, JSON.stringify(e.detail))
				}
			}
			Te([Object(n.b)({
				type: Boolean,
				attribute: "single-playback"
			})], Fe.prototype, "singlePlayback", void 0), Te([Object(n.b)({
				type: Boolean,
				attribute: "sync-volume"
			})], Fe.prototype, "syncVolume", void 0), $("vds-media-sync", Fe);
			var He = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js"),
				Be = function(e, t, i, s) {
					var n, r = arguments.length,
						a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
					if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
					else
						for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
					return r > 3 && a && Object.defineProperty(t, i, a), a
				};
			class Ne extends s.a {
				constructor() {
					super(), this.viewportEnterDelay = 0, this.pageChangeType = "state", this.pageEnterDelay = 0, this.intersectionThreshold = 1, this._isIntersecting = !1, this._providerDisposal = new N.a, this._hasIntersected = !1, this.intersectionController = new ve(this, {
						root: this.intersectionRoot ? document.querySelector(this.intersectionRoot) : null,
						threshold: this.intersectionThreshold
					}, e => {
						window.clearTimeout(this._intersectionTimeout);
						const t = e[0];
						this._isIntersecting = t.isIntersecting, this._hasIntersected ? t.isIntersecting ? this._intersectionTimeout = window.setTimeout(() => {
							this._provider && (this._provider.autoplayControlledByMediaVisibility = !1), this._triggerOnEnter(this.enterViewport), this._intersectionTimeout = void 0
						}, this.viewportEnterDelay) : this.exitViewport && (this._provider && (this._provider.autoplayControlledByMediaVisibility = !0), this._isIntersecting = !1, this._triggerOnExit(this.exitViewport)) : !t.isIntersecting && this._provider && (this._provider.autoplayControlledByMediaVisibility = !0), this._hasIntersected = !0, this._dispatchVisibilityChange()
					}), this.pageController = new He.a(this, e => {
						let {
							state: t,
							visibility: i
						} = e;
						if (window.clearTimeout(this._pageTimeout), !this.isIntersecting) return;
						"hidden" === ("state" === this.pageChangeType ? t : i) ? this._triggerOnExit(this.exitPage): this.enterViewport && (this._pageTimeout = window.setTimeout(() => {
							this._triggerOnEnter(this.enterPage), this._pageTimeout = void 0
						}, this.pageEnterDelay)), this._dispatchVisibilityChange()
					}), G(this, Re, (e, t) => {
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
					const i = this.intersectionController.observe(this);
					t(() => {
						i(), this._provider = void 0, this._providerDisposal.empty()
					})
				}
				_triggerOnEnter(e) {
					this._provider && ("play" === e ? this._provider.autoplayControlledByMediaVisibility && !1 === this._provider.state.started ? this._provider.attemptAutoplay() : this._provider.manualPaused || (this._provider.paused = !1) : "unmute" === e && (this._provider.muted = !1))
				}
				_triggerOnExit(e) {
					this._provider && ("pause" === e ? this._provider.paused = !0 : "mute" === e && (this._provider.muted = !0))
				}
				_dispatchVisibilityChange() {
					this._provider && this.dispatchEvent(z("vds-media-visibility-change", {
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
			Be([Object(n.b)({
				attribute: "enter-viewport"
			})], Ne.prototype, "enterViewport", void 0), Be([Object(n.b)({
				attribute: "exit-viewport"
			})], Ne.prototype, "exitViewport", void 0), Be([Object(n.b)({
				type: Number,
				attribute: "viewport-enter-delay"
			})], Ne.prototype, "viewportEnterDelay", void 0), Be([Object(n.b)({
				attribute: "enter-page"
			})], Ne.prototype, "enterPage", void 0), Be([Object(n.b)({
				attribute: "exit-page"
			})], Ne.prototype, "exitPage", void 0), Be([Object(n.b)({
				attribute: "page-change-type"
			})], Ne.prototype, "pageChangeType", void 0), Be([Object(n.b)({
				type: Number,
				attribute: "page-enter-delay"
			})], Ne.prototype, "pageEnterDelay", void 0), Be([Object(n.b)({
				attribute: "intersection-root"
			})], Ne.prototype, "intersectionRoot", void 0), Be([Object(n.b)({
				type: Number,
				attribute: "intersection-threshold"
			})], Ne.prototype, "intersectionThreshold", void 0), $("vds-media-visibility", Ne);
			var Ue = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js"),
				ze = function(e, t, i) {
					var s = null,
						n = null,
						r = i && i.leading,
						a = i && i.trailing;
					null == r && (r = !0);
					null == a && (a = !r);
					1 == r && (a = !1);
					var o = function() {
							s && (clearTimeout(s), s = null)
						},
						l = function() {
							var i = r && !s,
								o = this,
								l = arguments;
							if (n = function() {
									return e.apply(o, l)
								}, s || (s = setTimeout((function() {
									if (s = null, a) return n()
								}), t)), i) return i = !1, n()
						};
					return l.cancel = o, l.flush = function() {
						var e = n;
						o(), e && e()
					}, l
				};
			const We = we(() => ne(void 0));
			class Qe {
				constructor(e, t) {
					this._host = e, this._mediaStore = t, this._idle = !1, this._mediaPaused = !1, this._idlingPaused = !1, this._isMouseOverMedia = !0, this._isMouseOverUIControls = !1, this._disposal = new N.a, this.delay = 1500, e.addController(this)
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
						const t = Object(N.e)(this._host, e, X(this._handleIdleChange.bind(this), 1, !0));
						this._disposal.add(t)
					});
					const t = Object(N.e)(this._host, "mouseenter", () => {
							this._isMouseOverMedia = !0
						}),
						i = Object(N.e)(this._host, "mouseleave", () => {
							this._isMouseOverMedia = !1, this._handleIdleChange()
						});
					this._disposal.add(t), this._disposal.add(i);
					const s = null === (e = this._host) || void 0 === e ? void 0 : e.querySelector(".disappearing-controls");
					if (s) {
						const e = Object(N.e)(s, "mouseenter", () => {
								this._isMouseOverUIControls = !0
							}),
							t = Object(N.e)(s, "mouseleave", () => {
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
					this._idle !== e && (this._host.dispatchEvent(z("vds-user-idle-change", {
						detail: e
					})), this._idle = e)
				}
			}
			class Ke {
				constructor(e) {
					this._host = e, this._disconnectDisposal = new N.a, this.providerQueue = new ee, this.providerDisposal = new N.a, this._providerContext = We.provide(this._host), this._mediaStoreProvider = xe.provide(this._host), this.state = de(this._store), this._handleIdleChange = Object(Ue.a)(this._host, "vds-user-idle-change", e => {
						this._store.userIdle.set(e.detail), this._satisfyMediaRequest("userIdle", e)
					}), this._pendingMediaRequests = {
						play: [],
						pause: [],
						volume: [],
						fullscreen: [],
						seeked: [],
						seeking: [],
						userIdle: []
					}, this._handleMuteRequest = Object(Ue.a)(this._host, "vds-mute-request", this._createMediaRequestHandler("muted", e => {
						this.state.muted || (this._pendingMediaRequests.volume.push(e), this.provider.muted = !0)
					})), this._handleUnmuteRequest = Object(Ue.a)(this._host, "vds-unmute-request", this._createMediaRequestHandler("muted", e => {
						this.state.muted && (this._pendingMediaRequests.volume.push(e), this.provider.muted = !1, 0 === this.state.volume && (this._pendingMediaRequests.volume.push(e), this.provider.volume = .25))
					})), this._handlePlayRequest = Object(Ue.a)(this._host, "vds-play-request", this._createMediaRequestHandler("paused", e => {
						this.state.paused && (this._pendingMediaRequests.play.push(e), this.provider.paused = !1, this.provider.manualPaused = !1)
					})), this._handlePauseRequest = Object(Ue.a)(this._host, "vds-pause-request", this._createMediaRequestHandler("paused", e => {
						this.state.paused || (this._pendingMediaRequests.pause.push(e), this.provider.paused = !0, this.provider.manualPaused = !0)
					})), this._isSeekingRequestPending = !1, this._handleSeekingRequest = Object(Ue.a)(this._host, "vds-seeking-request", this._createMediaRequestHandler("seeking", e => {
						this._stopWaiting(), this._pendingMediaRequests.seeking.push(e), this._isSeekingRequestPending = !0, this._store.seeking.set(!0)
					})), this._handleSeekRequest = Object(Ue.a)(this._host, "vds-seek-request", this._createMediaRequestHandler("seeking", e => {
						this.store.ended && (this._isReplay = !0), this._pendingMediaRequests.seeked.push(e), this._isSeekingRequestPending = !1;
						let t = e.detail;
						this.state.duration - e.detail < .25 && (t = this.state.duration), this.provider.currentTime = t
					})), this._handleVolumeChangeRequest = Object(Ue.a)(this._host, "vds-volume-change-request", this._createMediaRequestHandler("volume", e => {
						const t = e.detail;
						this.state.volume !== t && (this._pendingMediaRequests.volume.push(e), this.provider.volume = t, t > 0 && this.state.muted && (this.provider.muted = !1))
					})), this._handleEnterFullscreenRequest = Object(Ue.a)(this._host, "vds-enter-fullscreen-request", this._createMediaRequestHandler("fullscreen", async e => {
						var t;
						if (this.state.fullscreen) return;
						var i, s;
						"media" === (null !== (t = e.detail) && void 0 !== t ? t : "media") && this._host.canFullscreen ? (this._pendingMediaRequests.fullscreen.push(e), await (null === (i = (s = this._host).enterFullscreen) || void 0 === i ? void 0 : i.call(s))) : this.provider && (this._pendingMediaRequests.fullscreen.push(e), await this.provider.enterFullscreen())
					})), this._handleExitFullscreenRequest = Object(Ue.a)(this._host, "vds-exit-fullscreen-request", this._createMediaRequestHandler("fullscreen", async e => {
						var t;
						if (!this.state.fullscreen) return;
						var i, s;
						"media" === (null !== (t = e.detail) && void 0 !== t ? t : "media") && this._host.canFullscreen ? (this._pendingMediaRequests.fullscreen.push(e), await (null === (i = (s = this._host).exitFullscreen) || void 0 === i ? void 0 : i.call(s))) : this.provider && (this._pendingMediaRequests.fullscreen.push(e), await this.provider.exitFullscreen())
					})), this._handleResumeIdlingRequest = Object(Ue.a)(this._host, "vds-resume-user-idle-request", e => {
						this._mediaRequestEventGateway(e) && (this._pendingMediaRequests.userIdle.push(e), this._userIdleController && (this._userIdleController.paused = !1))
					}), this._handlePauseIdlingRequest = Object(Ue.a)(this._host, "vds-pause-user-idle-request", e => {
						this._mediaRequestEventGateway(e) && (this._pendingMediaRequests.userIdle.push(e), this._userIdleController && (this._userIdleController.paused = !0))
					}), this._handleShowPosterRequest = Object(Ue.a)(this._host, "vds-show-poster-request", this._createMediaRequestHandler("poster", () => {
						this._provider.canLoadPoster = !0
					})), this._handleHidePosterRequest = Object(Ue.a)(this._host, "vds-hide-poster-request", this._createMediaRequestHandler("poster", () => {
						this._provider.canLoadPoster = !1
					})), this._handleLoopRequest = Object(Ue.a)(this._host, "vds-loop-request", this._createMediaRequestHandler("loop", () => {
						window.requestAnimationFrame(async () => {
							try {
								this._isLooping = !0, this._isReplay = !0, await this._provider.play()
							} catch (e) {
								this._isReplay = !1, this._isLooping = !1
							}
						})
					})), this._handleManualHlsLevelChange = Object(Ue.a)(this._host, "vds-hls-manual-level-change", this._createMediaRequestHandler("hls-level-change", e => {
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
					})), this._handleFullscreenChange = Object(Ue.a)(this._host, "vds-fullscreen-change", e => {
						var t;
						this._store.fullscreen.set(e.detail), e.target === this._host && (this._satisfyMediaRequest("fullscreen", e), null === (t = this._provider) || void 0 === t || t.dispatchEvent(z("vds-fullscreen-change", {
							detail: e.detail,
							triggerEvent: e
						})))
					}), this._handleFullscreenError = Object(Ue.a)(this._host, "vds-fullscreen-error", e => {
						var t;
						e.target === this._host && (this._satisfyMediaRequest("fullscreen", e), null === (t = this._provider) || void 0 === t || t.dispatchEvent(z("vds-fullscreen-error", {
							detail: e.detail,
							triggerEvent: e
						})))
					}), this._isReplay = !1, this._isLooping = !1, this._firingWaiting = !1, this._mediaEvents = [], this._handleSeeking = ze(e => {
						this._mediaEvents.push(e), this._store.seeking.set(!0), this._store.currentTime.set(e.detail), this._satisfyMediaRequest("seeking", e)
					}, 150, {
						leading: !0
					}), this._fireWaiting = X(() => {
						var e;
						if (!this._originalWaitingEvent) return;
						this._firingWaiting = !0;
						const t = z("vds-waiting", this._originalWaitingEvent);
						this._mediaEvents.push(t), this._store.waiting.set(!0), this._store.playing.set(!1), null === (e = this._provider) || void 0 === e || e.dispatchEvent(t), this._originalWaitingEvent = void 0, this._firingWaiting = !1
					}, 300), this._skipInitialSrcChange = !0, G(e, Re, (e, t) => {
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
					M(this.provider) && this.provider !== e && (this._handleMediaProviderDisconnect(), this._provider = e, this._providerContext.value.set(e), function(e, t) {
						for (const i of ie(e)) {
							const s = e[i],
								n = t[i];
							if (!s || !n) continue;
							const r = ae(s);
							r !== ae(n) && n.set(r)
						}
					}(this._provider._store, this._store), this._attachMediaEventListeners(), e.attachMediaController(this, e => this._disconnectDisposal.add(e)), this._flushMediaProviderConnectedQueue(), t(this._handleMediaProviderDisconnect.bind(this)))
				}
				_handleMediaProviderDisconnect() {
					M(this.provider) || (this.providerQueue.destroy(), this.providerDisposal.empty(), this._provider = void 0, this._providerContext.value.set(void 0), function(e) {
						for (const t of ie(je)) e[t].set(je[t])
					}(this._store), this._store.viewType.set(Ee.Unknown))
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
					ie(this._pendingMediaRequests).forEach(e => {
						this._pendingMediaRequests[e] = []
					})
				}
				_satisfyMediaRequest(e, t) {
					const i = this._pendingMediaRequests[e].shift();
					i && (t.requestEvent = i, Q(t, i))
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
					for (const t of ie(e)) {
						const i = e[t].bind(this);
						this.providerDisposal.add(Object(N.e)(this._provider, t, i))
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
					this._updateMetadata(e.detail), this._mediaEvents.push(e), Q(e, this._findLastMediaEvent("vds-src-change"))
				}
				_handleLoadedData(e) {
					this._mediaEvents.push(e), Q(e, this._findLastMediaEvent("vds-load-start")), this._userIdleController = new Qe(this._host, this._store)
				}
				_handleLoadedMetadata(e) {
					this._updateMetadata(e.detail), this._mediaEvents.push(e), Q(e, this._findLastMediaEvent("vds-load-start"))
				}
				_handleCanPlay(e) {
					var t;
					this._mediaEvents.push(e), "loadedmetadata" !== (null === (t = e.triggerEvent) || void 0 === t ? void 0 : t.type) && Q(e, this._findLastMediaEvent("vds-loaded-metadata")), this._store.canPlay.set(!0), this._store.duration.set(e.detail.duration)
				}
				_handleCanPlayThrough(e) {
					this._store.canPlay.set(!0), this._store.duration.set(e.detail.duration), Q(e, this._findLastMediaEvent("vds-can-play"))
				}
				_handleAutoplay(e) {
					this._mediaEvents.push(e), Q(e, this._findLastMediaEvent("vds-play")), Q(e, this._findLastMediaEvent("vds-can-play")), this._store.autoplayError.set(void 0)
				}
				_handleAutoplayFail(e) {
					Q(e, this._findLastMediaEvent("vds-play-fail")), Q(e, this._findLastMediaEvent("vds-can-play")), this._store.autoplayError.set(e.detail), this._clearMediaStateTracking()
				}
				_handlePlay(e) {
					if (!this._isLooping && this.state.paused) {
						if (this._mediaEvents.push(e), Q(e, this._findLastMediaEvent("vds-waiting")), this._satisfyMediaRequest("play", e), this._store.paused.set(!1), this._store.autoplayError.set(void 0), this.state.ended || this._isReplay) {
							var t;
							this._isReplay = !1, this._store.ended.set(!1);
							const i = z("vds-replay", {
								triggerEvent: e
							});
							null === (t = this._provider) || void 0 === t || t.dispatchEvent(i)
						}
					} else e.stopImmediatePropagation()
				}
				_handlePlayFail(e) {
					this._mediaEvents.push(e), this._stopWaiting(), Q(e, this._findLastMediaEvent("vds-play")), this._store.paused.set(!0), this._store.playing.set(!1), this._satisfyMediaRequest("play", e), this._clearMediaStateTracking()
				}
				_handlePlaying(e) {
					this._mediaEvents.push(e);
					const t = this._findLastMediaEvent("vds-play");
					if (t ? (Q(e, this._findLastMediaEvent("vds-waiting")), Q(e, t)) : Q(e, this._findLastMediaEvent("vds-seeked")), this._stopWaiting(), this._clearMediaStateTracking(), this._store.paused.set(!1), this._store.playing.set(!0), this._store.seeking.set(!1), this._store.ended.set(!1), this._isLooping) return e.stopImmediatePropagation(), void(this._isLooping = !1);
					var i;
					this.state.started || (this._store.started.set(!0), null === (i = this._provider) || void 0 === i || i.dispatchEvent(z("vds-started", {
						triggerEvent: e
					})))
				}
				_handlePause(e) {
					this._isLooping ? e.stopImmediatePropagation() : (Q(e, this._findLastMediaEvent("vds-seeked")), this._satisfyMediaRequest("pause", e), this._store.paused.set(!0), this._store.playing.set(!1), this._store.seeking.set(!1), this._stopWaiting(), this._clearMediaStateTracking())
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
					this._isSeekingRequestPending ? (this._store.seeking.set(!0), e.stopImmediatePropagation()) : this.state.seeking && (this._mediaEvents.push(e), Q(e, this._findLastMediaEvent("vds-waiting")), Q(e, this._findLastMediaEvent("vds-seeking")), this.state.paused && this._stopWaiting(), this._store.seeking.set(!1), e.detail !== this.state.duration && this._store.ended.set(!1), this._store.currentTime.set(e.detail), this._satisfyMediaRequest("seeked", e))
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
					(this._store.currentSrc.set(e.detail), this._skipInitialSrcChange) ? this._skipInitialSrcChange = !1: (this._clearMediaStateTracking(), ie(t = this._store).forEach(e => {
						Me.has(e) || t[e].set(t[e].initialValue)
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
			}
			class Ye {
				constructor(e, t, i) {
					this._host = e, this._store = t, this._mediaProps = i, this._disposal = new N.a, this._host.addController({
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
			class Ge extends Ye {
				_handleValueChange(e, t, i) {
					window.requestAnimationFrame(() => {
						F(this._host, t, A(i) || x(i) ? String(i) : !!i)
					})
				}
				_handleDisconnect(e, t) {
					this._host.removeAttribute(t)
				}
			}
			class Je extends Ye {
				_handleValueChange(e, t, i) {
					window.requestAnimationFrame(() => {
						this._host.style.setProperty(this._getCssPropName(t), A(i) || x(i) ? String(i) : null)
					})
				}
				_getCssPropName(e) {
					return `--vds-${e}`
				}
				_handleDisconnect(e, t) {
					this._host.style.setProperty(this._getCssPropName(t), null)
				}
			}
			var Xe = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			const Ze = Symbol("@vidstack/media-discovery");
			class et extends s.a {
				constructor() {
					super(), this.controller = new Ke(this), this.__mediaFullscreen = !1, this.__mediaIsVideoView = !1, this.__mediaPlaysinline = !1, this.screenOrientationController = new ce(this), this.fullscreenController = new pe(this, this.screenOrientationController), J(this, "vds-media-connect", {
						register: Ze
					}), Ae(this, "fullscreen", e => {
						this.__mediaFullscreen = e
					}), Ae(this, "viewType", e => {
						this.__mediaIsVideoView = e === Ee.Video
					}), Ae(this, "playsinline", e => {
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
					F(this, "hide-ui", this._shouldHideMediaUI()), super.update(e)
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
						new Ge(...t)
					}(this, this.controller.store, ["autoplay", "autoplayError", "canLoad", "canPlay", "canFullscreen", "ended", "error", "fullscreen", "userIdle", "loop", "mediaType", "muted", "paused", "playing", "playsinline", "seeking", "started", "viewType", "waiting"])
				}
				_bindMediaCSSProperties() {
					! function() {
						for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
						new Je(...t)
					}(this, this.controller.store, ["bufferedAmount", "currentTime", "duration", "seekableAmount"])
				}
				_shouldHideMediaUI() {
					return q && this.__mediaIsVideoView && (!this.__mediaPlaysinline || this.__mediaFullscreen)
				}
			}
			Xe([Object(n.d)()], et.prototype, "__mediaFullscreen", void 0), Xe([Object(n.d)()], et.prototype, "__mediaIsVideoView", void 0), Xe([Object(n.d)()], et.prototype, "__mediaPlaysinline", void 0), Xe([Object(n.b)({
				attribute: "fullscreen-orientation"
			})], et.prototype, "fullscreenOrientation", null), $("vds-media", et);
			var tt = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			const it = new Map;
			class st extends s.a {
				constructor() {
					super(), this._disposal = new N.a, this.repeat = 0, this.priority = 10, this._mediaCurrentTime = 0, this._currentToggleState = !1, this._mediaStoreConsumer = xe.consume(this), oe(this, We, e => {
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
					return this._mediaProviderElement ? it.get(this._mediaProviderElement) : void 0
				}
				get _pendingAction() {
					var e;
					return null === (e = this._pendingActions) || void 0 === e ? void 0 : e.get(this)
				}
				connectedCallback() {
					super.connectedCallback(), window.requestAnimationFrame(() => {
						this._mediaProviderElement && it.set(this._mediaProviderElement, new Map)
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
					this.action.startsWith("toggle:") && (i = this._getToggleEventType()), this.action.startsWith("seek:") && (i = "seek", t = this._mediaCurrentTime + Number(this.action.split(":")[1])), this.dispatchEvent(z(`vds-${i}-request`, {
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
					const s = Object(N.e)(this._mediaProviderElement, this.type, s => {
						if (this._validateEvent(s)) {
							var n;
							if (s.preventDefault(), 0 == i) null === (n = this._pendingActions) || void 0 === n || n.set(this, [s, Z()]);
							! function() {
								let s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								i += 1, window.clearTimeout(t), t = window.setTimeout(() => {
									var t;
									const n = null === (t = e._pendingAction) || void 0 === t ? void 0 : t[1];
									var r;
									s && (null === (r = e._pendingActions) || void 0 === r || r.delete(e));
									rt(e._mediaProviderElement), i = 0, null == n || n.resolve()
								}, 250)
							}(i < this.repeat)
						}
					});
					this._disposal.add(s)
				}
				_validateEvent(e) {
					if (Object(N.c)(e) || Object(N.b)(e) || Object(N.d)(e)) {
						var t, i;
						const s = Object(N.d)(e) ? e.touches[0] : void 0,
							n = null !== (t = null == s ? void 0 : s.clientX) && void 0 !== t ? t : e.clientX,
							r = null !== (i = null == s ? void 0 : s.clientY) && void 0 !== i ? i : e.clientY,
							a = this.getBoundingClientRect(),
							o = r >= a.top && r <= a.bottom && n >= a.left && n <= a.right;
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
			tt([Object(n.b)()], st.prototype, "type", void 0), tt([Object(n.b)({
				type: Number
			})], st.prototype, "repeat", void 0), tt([Object(n.b)({
				type: Number
			})], st.prototype, "priority", void 0), tt([Object(n.b)()], st.prototype, "action", void 0);
			const nt = new WeakSet;
			async function rt(e) {
				if (nt.has(e)) return;
				const t = it.get(e);
				if (!t) return;
				nt.add(e);
				const i = Array.from(t.values()).map(e => e[1].promise);
				await Promise.all(i);
				const s = Array.from(t.keys()),
					n = Math.min(...s.map(e => e.priority));
				s.filter(e => e.priority <= n).map(e => {
					const i = t.get(e)[0];
					e.performAction(i)
				}), t.clear(), nt.delete(e)
			}
			$("vds-gesture", st);
			class at {
				static async load(e) {
					return new Promise((t, i) => {
						this.pendingRequests[e] ? this.pendingRequests[e].push({
							resolve: t,
							reject: i
						}) : (this.pendingRequests[e] = [{
							resolve: t,
							reject: i
						}], async function(e) {
							if (!j(document.querySelector(`script[src="${e}"]`))) return;
							const t = document.createElement("script"),
								i = Z();
							t.src = e, t.onload = i.resolve, t.onerror = i.reject;
							const s = document.getElementsByTagName("script")[0];
							return M(s.parentNode) || s.parentNode.insertBefore(t, s), i.promise
						}(e).then(() => {
							this.pendingRequests[e].forEach(e => e.resolve()), delete this.pendingRequests[e]
						}).catch(t => {
							this.pendingRequests[e].forEach(e => e.reject(t)), delete this.pendingRequests[e]
						}))
					})
				}
			}
			var ot;
			at.pendingRequests = {},
				function(e) {
					e[e.Aborted = 1] = "Aborted", e[e.Network = 2] = "Network", e[e.Decode = 3] = "Decode", e[e.SrcNotSupported = 4] = "SrcNotSupported"
				}(ot || (ot = {}));
			const lt = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
				dt = /\.(mp4|og[gv]|webm|mov|m4v|avi)($|\?)/i;
			class ht extends Ve {
				constructor() {
					super(...arguments), this.preload = "metadata", this._timeRAF = void 0, this._hasMediaElementConnected = !1, this._mediaElementDisposal = new N.a, this._isMediaWaiting = !1, this._ignoreNextAbortEvent = !1, this._ignoreNextEmptiedEvent = !1
				}
				get mediaElement() {
					return this._mediaElement
				}
				disconnectedCallback() {
					this._isMediaWaiting = !1, super.disconnectedCallback(), this._cancelTimeUpdates()
				}
				_cancelTimeUpdates() {
					x(this._timeRAF) && window.cancelAnimationFrame(this._timeRAF), this._timeRAF = void 0
				}
				_requestTimeUpdates() {
					P(this._timeRAF) && this._requestTimeUpdate()
				}
				_requestTimeUpdate() {
					var e, t;
					const i = null !== (e = null === (t = this.mediaElement) || void 0 === t ? void 0 : t.currentTime) && void 0 !== e ? e : 0;
					this.state.currentTime !== i && this._updateCurrentTime(i), this._timeRAF = window.requestAnimationFrame(() => {
						P(this._timeRAF) || this._requestTimeUpdate()
					})
				}
				_updateCurrentTime(e, t) {
					var i, s;
					this.dispatchEvent(z("vds-time-update", {
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
								a = null !== (s = null == r ? void 0 : r.assignedNodes({
									flatten: !0
								})) && void 0 !== s ? s : [];
							return Array.prototype.filter.call(a, e => e.nodeType == Node.ELEMENT_NODE)
						}(this)[0];
						this._handleMediaElementDisconnect(), this._mediaElement = null != e ? e : void 0, this._handleMediaElementConnect()
					})
				}
				get _canMediaElementConnect() {
					return this.canLoad && !M(this.mediaElement) && !this._hasMediaElementConnected
				}
				_handleMediaElementConnect() {
					if (!this._canMediaElementConnect) return;
					this.dispatchEvent(z("vds-media-element-connected"));
					const e = this.mediaElement;
					e.hasAttribute("loop") && (this.loop = !0), e.removeAttribute("loop"), F(e, "controls", this.controls), this._attachMediaEventListeners(), this._observePlaysinline(), this._observeMediaSources(), this._startPreloadingMedia(), this._hasMediaElementConnected = !0, this._disconnectDisposal.add(this._handleMediaElementDisconnect.bind(this))
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
					this.dispatchEvent(z("vds-playsinline-change", {
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
					this.dispatchEvent(z("vds-src-change", {
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
					if (M(this.mediaElement)) return;
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
					ie(e).forEach(t => {
						const i = e[t].bind(this),
							s = Object(N.e)(this.mediaElement, t, async e => {
								await i(e)
							});
						this._mediaElementDisposal.add(s)
					})
				}
				_handleAbort(e) {
					this._ignoreNextAbortEvent || (this.dispatchEvent(z("vds-abort", {
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
					this.state.started || this.dispatchEvent(z("vds-can-play-through", {
						triggerEvent: e,
						detail: {
							duration: this.mediaElement.duration
						}
					}))
				}
				_handleLoadStart(e) {
					this._handleCurrentSrcChange(this.mediaElement.currentSrc, e), "" !== this.mediaElement.currentSrc ? this.dispatchEvent(z("vds-load-start", {
						triggerEvent: e,
						detail: this._getMediaMetadata()
					})) : this._handleAbort()
				}
				_handleEmptied(e) {
					this._ignoreNextEmptiedEvent || this.dispatchEvent(z("vds-emptied", {
						triggerEvent: e
					}))
				}
				_handleLoadedData(e) {
					this.dispatchEvent(z("vds-loaded-data", {
						triggerEvent: e
					}))
				}
				_handleLoadedMetadata(e) {
					this.dispatchEvent(z("vds-loaded-metadata", {
						triggerEvent: e,
						detail: this._getMediaMetadata()
					}))
				}
				_determineMediaType(e) {
					this.dispatchEvent(z("vds-media-type-change", {
						detail: this._getMediaType(),
						triggerEvent: e
					}))
				}
				_handlePlay(e) {
					const t = z("vds-play", {
						triggerEvent: e
					});
					t.autoplay = this._attemptingAutoplay, this.dispatchEvent(t)
				}
				_handlePause(e) {
					(1 !== this.mediaElement.readyState || this._isMediaWaiting) && (this._isMediaWaiting = !1, this._cancelTimeUpdates(), this.dispatchEvent(z("vds-pause", {
						triggerEvent: e
					})))
				}
				_handlePlaying(e) {
					this._isMediaWaiting = !1;
					const t = z("vds-playing", {
						triggerEvent: e
					});
					this.dispatchEvent(t), this._requestTimeUpdates()
				}
				_handleDurationChange(e) {
					this.mediaElement.ended && this._updateCurrentTime(this.mediaElement.duration, e), this.dispatchEvent(z("vds-duration-change", {
						detail: this.mediaElement.duration,
						triggerEvent: e
					}))
				}
				_handleProgress(e) {
					this.dispatchEvent(z("vds-progress", {
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
					this.dispatchEvent(z("vds-seeking", {
						detail: this.mediaElement.currentTime,
						triggerEvent: e
					}))
				}
				_handleSeeked(e) {
					const t = z("vds-seeked", {
						detail: this.mediaElement.currentTime,
						triggerEvent: e
					});
					this.dispatchEvent(t);
					const i = this.mediaElement.currentTime;
					if (Math.trunc(i) === Math.trunc(this.mediaElement.duration) && me(this.mediaElement.duration) > me(i) && (this._updateCurrentTime(this.mediaElement.duration, e), !this.mediaElement.ended)) try {
						this.play()
					} catch (s) {}
				}
				_handleStalled(e) {
					this.dispatchEvent(z("vds-stalled", {
						triggerEvent: e
					})), this.mediaElement.readyState < 3 && (this._isMediaWaiting = !0, this.dispatchEvent(z("vds-waiting", {
						triggerEvent: e
					})))
				}
				_handleVolumeChange(e) {
					this.dispatchEvent(z("vds-volume-change", {
						detail: {
							volume: this.mediaElement.volume,
							muted: this.mediaElement.muted
						},
						triggerEvent: e
					}))
				}
				_handleWaiting(e) {
					this.mediaElement.readyState < 3 && (this._isMediaWaiting = !0, this.dispatchEvent(z("vds-waiting", {
						triggerEvent: e
					})))
				}
				_handleSuspend(e) {
					const t = z("vds-suspend", {
						triggerEvent: e
					});
					this.dispatchEvent(t)
				}
				_handleEnded(e) {
					this._cancelTimeUpdates(), this._updateCurrentTime(this.mediaElement.duration, e);
					const t = z("vds-end", {
						triggerEvent: e
					});
					this.dispatchEvent(t), this.state.loop ? this._handleLoop() : this.dispatchEvent(z("vds-ended", {
						triggerEvent: e
					}))
				}
				_handleLoop() {
					P(this.mediaElement.controls) && (this.mediaElement.controls = !1), this.dispatchEvent(z("vds-loop-request", {
						bubbles: !0,
						composed: !0
					}))
				}
				_handleError(e) {
					const t = this.mediaElement.error;
					t && this.dispatchEvent(z("vds-error", {
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
						const e = z("vds-play-fail");
						throw e.autoplay = this._attemptingAutoplay, e.error = t, t
					}
				}
				async pause() {
					var e;
					return this._throwIfNotReadyForPlayback(), null === (e = this.mediaElement) || void 0 === e ? void 0 : e.pause()
				}
				_getMediaType() {
					return e = this.state.currentSrc, lt.test(e) ? Oe.a.Audio : dt.test(e) ? Oe.a.Video : Oe.a.Unknown;
					var e
				}
			}(function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				r > 3 && a && Object.defineProperty(t, i, a)
			})([Object(n.b)({
				reflect: !0
			})], ht.prototype, "preload", void 0);
			class ct extends pe {
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
					return this.isSupportedNatively ? super._addFullscreenChangeEventListener(e) : this.isSupportedOnSafari ? Object(N.e)(this._host, "vds-video-presentation-change", this._handlePresentationModeChange.bind(this)) : S
				}
				_handlePresentationModeChange(e) {
					this._handleFullscreenChange(e)
				}
				_addFullscreenErrorEventListener(e) {
					return this.isSupportedNatively ? super._addFullscreenErrorEventListener(e) : S
				}
			}

			function ut(e, t) {
				var i;
				if (t.bubbles && t.composed) return;
				const s = new U(t.type, {
					triggerEvent: null !== (i = t.triggerEvent) && void 0 !== i ? i : t,
					detail: t.detail,
					bubbles: t.bubbles,
					cancelable: t.cancelable,
					composed: t.composed
				});
				e.dispatchEvent(s)
			}
			class pt {
				constructor(e) {
					this._host = e, this._listenerDisposal = new N.a;
					const t = e.firstUpdated;
					e.firstUpdated = i => {
						null == t || t.call(e, i), this._listenerDisposal.add(Object(N.e)(e, "vds-media-element-connected", () => {
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
					return L(null === (e = this._host.videoElement) || void 0 === e ? void 0 : e.webkitSetPresentationMode)
				}
				setPresentationMode(e) {
					var t, i;
					null === (t = this._host.videoElement) || void 0 === t || null === (i = t.webkitSetPresentationMode) || void 0 === i || i.call(t, e)
				}
				_addPresentationModeChangeEventListener() {
					return !this.isSupported || M(this._host.videoElement) ? S : Object(N.e)(this._host.videoElement, "webkitpresentationmodechanged", this._handlePresentationModeChange.bind(this))
				}
				_handlePresentationModeChange(e) {
					ut(this._host, e), this._host.dispatchEvent(z("vds-video-presentation-change", {
						detail: this.presentationMode,
						triggerEvent: e
					}))
				}
			}
			class vt extends ht {
				constructor() {
					super(...arguments), this.presentationController = new pt(this), this.fullscreenController = new ct(this, this.screenOrientationController, this.presentationController)
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
				connectedCallback() {
					super.connectedCallback(), this.dispatchEvent(z("vds-view-type-change", {
						detail: Ee.Video
					}))
				}
				get videoElement() {
					return this.mediaElement
				}
			}
			const _t = new Map;

			function gt(e) {
				return e.replace("vds-", "").replace(/-./g, e => e[1].toUpperCase())
			}
			const mt = "vds-hls-",
				bt = ["lib-load", "instance", "unsupported"];

			function yt(e) {
				return e.startsWith(mt) && !bt.some(t => e.startsWith(`${mt}${t}`))
			}
			var ft = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			const wt = /\.(m3u8)($|\?)/i,
				Et = (new Set(["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"]), "https://cdn.jsdelivr.net/npm/hls.js@^1.0.0/dist/hls.light.min.js");
			class Ot extends vt {
				constructor() {
					super(), this._isHlsEngineAttached = !1, this.hlsConfig = {}, this._loadingUserLevel = !1, this.hlsLibrary = Et, this._currentHlsSrc = "", this._hlsEventListeners = [], Object.defineProperty(this, "hls-config", {
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
					super.update(e), e.has("hlsLibrary") && I() && this._preconnectToHlsLibDownload()
				}
				disconnectedCallback() {
					this._destroyHlsEngine(), super.disconnectedCallback()
				}
				get isHlsSupported() {
					var e, t;
					return null !== (e = null === (t = this.Hls) || void 0 === t ? void 0 : t.isSupported()) && void 0 !== e ? e : I()
				}
				get isHlsStream() {
					return this.state.src.some(e => wt.test(e))
				}
				_preconnectToHlsLibDownload() {
					var e;
					this.canLoad || !A(this.hlsLibrary) || (e = this.hlsLibrary, _t.has(e)) || function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "preconnect";
						if (!(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : V)) return !1;
						if (!j(document.querySelector(`link[href="${e}"]`))) return !0;
						const i = document.createElement("link");
						i.rel = t, i.href = e, i.crossOrigin = "true", document.head.append(i)
					}(this.hlsLibrary)
				}
				async _buildHlsEngine() {
					var e, t;
					let i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					if (M(this.videoElement) && !i && !P(this.hlsEngine)) return;
					P(this.hlsEngine) || this._destroyHlsEngine();
					const s = {
						onLoadStart: () => {
							this.dispatchEvent(z("vds-hls-lib-load-start"))
						},
						onLoaded: e => {
							this.dispatchEvent(z("vds-hls-lib-loaded", {
								detail: e
							}))
						},
						onLoadError: e => {
							this.dispatchEvent(z("vds-hls-lib-load-error", {
								detail: e
							})), this.dispatchEvent(z("vds-error", {
								detail: {
									message: e.message,
									code: ot.SrcNotSupported
								}
							}))
						}
					};
					if (this._Hls = await async function(e) {
							var t;
							let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							if (A(e)) {
								if (_t.has(e)) return _t.get(e);
								null === (t = i.onLoadStart) || void 0 === t || t.call(i);
								try {
									var s;
									if (await at.load(e), !L(window.Hls)) throw Error("[vds]: Failed loading `hls.js`. Could not find a valid constructor at `window.Hls`.");
									const t = window.Hls;
									return null === (s = i.onLoaded) || void 0 === s || s.call(i, t), _t.set(e, t), t
								} catch (r) {
									var n;
									null === (n = i.onLoadError) || void 0 === n || n.call(i, r)
								}
							}
						}(this.hlsLibrary, s), P(this._Hls) && !A(this.hlsLibrary) && (this._Hls = await async function(e) {
							var t;
							let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							if (P(e)) return;
							var s;
							if (null === (t = i.onLoadStart) || void 0 === t || t.call(i), !L(e)) return null === (s = i.onLoaded) || void 0 === s || s.call(i, e), e;
							const n = String(e);
							if (_t.has(n)) {
								var r;
								const e = _t.get(n);
								return null === (r = i.onLoaded) || void 0 === r || r.call(i, e), e
							}
							try {
								var a;
								const t = null === (a = await e()) || void 0 === a ? void 0 : a.default;
								if (!t || !t.isSupported) throw Error("[vds]: Failed importing `hls.js`. Dynamic import returned invalid constructor.");
								var o;
								return null === (o = i.onLoaded) || void 0 === o || o.call(i, t), _t.set(n, t), t
							} catch (d) {
								var l;
								null === (l = i.onLoadError) || void 0 === l || l.call(i, d)
							}
						}(this.hlsLibrary, s)), this.Hls) {
						if (null === (e = this.Hls) || void 0 === e || null === (t = e.isSupported) || void 0 === t || !t.call(e)) {
							const e = "[vds]: `hls.js` is not supported in this environment";
							return this.dispatchEvent(z("vds-hls-unsupported")), void this.dispatchEvent(z("vds-error", {
								detail: {
									message: e,
									code: ot.SrcNotSupported
								}
							}))
						}
						this._hlsEngine = new this.Hls(this.hlsConfig), this.dispatchEvent(z("vds-hls-instance", {
							detail: this.hlsEngine
						})), this._listenToHlsEngine()
					}
				}
				_destroyHlsEngine() {
					var e;
					null === (e = this.hlsEngine) || void 0 === e || e.destroy(), this._currentHlsSrc = "", this._hlsEngine = void 0, this._isHlsEngineAttached = !1
				}
				_attachHlsEngine() {
					this.isHlsEngineAttached || P(this.hlsEngine) || M(this.videoElement) || (this.hlsEngine.attachMedia(this.videoElement), this._isHlsEngineAttached = !0)
				}
				_detachHlsEngine() {
					var e;
					this.isHlsEngineAttached && (null === (e = this.hlsEngine) || void 0 === e || e.detachMedia(), this._isHlsEngineAttached = !1, this._currentHlsSrc = "")
				}
				_loadSrcOnHlsEngine(e) {
					!M(this.hlsEngine) && this.isHlsStream && e !== this._currentHlsSrc && (this.hlsEngine.loadSource(e), this._currentHlsSrc = e)
				}
				_getMediaType() {
					return this.state.mediaType === Oe.a.LiveVideo ? Oe.a.LiveVideo : this.isHlsStream ? Oe.a.Video : super._getMediaType()
				}
				_handleSrcChange(e) {
					this._currentHlsSrc.length > 0 && !e.includes(this._currentHlsSrc) && e.push(this._currentHlsSrc), super._handleSrcChange(e)
				}
				_handleAbort(e) {
					if (this.isHlsSupported)
						for (const t of this.state.src)
							if (wt.test(t)) return void this._handleHlsSrcChange(t);
					super._handleAbort(e)
				}
				async _handleHlsSrcChange(e) {
					this._currentHlsSrc !== e && this.hasUpdated && this.canLoad && (this.isHlsStream ? M(this.hlsLibrary) || (P(this.hlsEngine) && await this._buildHlsEngine(), this._attachHlsEngine(), this._loadSrcOnHlsEngine(e)) : this._detachHlsEngine())
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
					if (4 === (null == i ? void 0 : i.code) && this.isHlsSupported) {
						for (const s of this.state.src)
							if (wt.test(s)) return void this._handleHlsSrcChange(s)
					} else super._handleError(e)
				}
				_listenToHlsEngine() {
					P(this.hlsEngine) || P(this.Hls) || (this.hlsEngine.on(this.Hls.Events.LEVEL_LOADED, this._handleHlsLevelLoaded.bind(this)), this._hlsEventListeners.forEach(e => {
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
					if (P(this.Hls)) return;
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
						var a;
						null == r || r.captureMessage(`shreddit-player buffer stalled error for src ${n}. [${t.details}]`), null === (a = this.hlsEngine) || void 0 === a || a.startLoad()
					} else 403 === (null === (s = t.networkDetails) || void 0 === s ? void 0 : s.status) && (this._handleHlsIrrecoverableError(), null == r || r.captureMessage(`shreddit-player removed src ${n}. [${t.details}]`), this.dispatchEvent(z("vds-error", {
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
					} = t.details, n = new U(e, {
						detail: t
					}), r = i ? Oe.a.LiveVideo : Oe.a.Video;
					this.state.mediaType !== r && this.dispatchEvent(z("vds-media-type-change", {
						detail: r,
						triggerEvent: n
					})), this.state.duration !== s && this.dispatchEvent(z("vds-duration-change", {
						detail: s,
						triggerEvent: n
					}))
				}
				addEventListener(e, t, i) {
					if (!yt(e)) return super.addEventListener(e, t, i); {
						const n = gt(e);
						var s;
						this._hlsEventListeners.some(e => e.type === n && e.listener === t) || (this._hlsEventListeners.push({
							type: n,
							listener: t,
							options: i
						}), null === (s = this.hlsEngine) || void 0 === s || s[null != i && i.once ? "once" : "on"](n, t, null == i ? void 0 : i.context))
					}
				}
				removeEventListener(e, t, i) {
					if (yt(e)) {
						var s;
						const n = gt(e);
						return this._hlsEventListeners = this._hlsEventListeners.filter(e => e.type === n && e.listener === t), void(null === (s = this.hlsEngine) || void 0 === s || s.off(n, t, null == i ? void 0 : i.context, null == i ? void 0 : i.once))
					}
					return super.removeEventListener(e, t, i)
				}
			}
			ft([Object(n.b)({
				type: Object,
				attribute: "hls-config"
			})], Ot.prototype, "hlsConfig", void 0), ft([Object(n.b)({
				type: Boolean,
				attribute: !1
			})], Ot.prototype, "_loadingUserLevel", void 0), $("vds-hls", Ot);
			class kt {
				constructor(e) {
					this._host = e, this._connectedQueue = he(this._host)
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
						const i = z(e, {
							...t,
							bubbles: !0,
							composed: !0
						});
						this._host.dispatchEvent(i)
					})
				}
			}
			class Ct {
				constructor(e) {
					this._host = e;
					const t = new N.a;
					let i = !1;
					t.add(Object(N.e)(document, "pointerdown", () => {
						i = !1
					})), Object(Ue.a)(e, "keydown", e => {
						e.metaKey || e.altKey || e.ctrlKey || (i = !0)
					}), Object(Ue.a)(e, "focus", () => {
						i && e.classList.add("focus-visible")
					}), Object(Ue.a)(e, "blur", () => {
						e.classList.remove("focus-visible")
					}), e.addController({
						hostDisconnected: () => {
							t.empty()
						}
					})
				}
			}

			function St(e) {
				return new Ct(e)
			}

			function jt(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.type.startsWith("key")) && void 0 !== t && t
			}
			const Pt = s.b`
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
			var Mt = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			class xt extends s.a {
				constructor() {
					super(), this.pressed = !1, this.disabled = !1, this._handleButtonClickCapture = Object(Ue.a)(this, "click", e => {
						this.disabled && (e.preventDefault(), e.stopImmediatePropagation())
					}, {
						capture: !0
					}), St(this), ["pointerup", "keydown"].forEach(e => {
						Object(Ue.a)(this, e, e => {
							this.disabled || jt(e) && ! function(e) {
								return jt(e) && ("Enter" === e.key || " " === e.key)
							}(e) || this._handleButtonClick(e)
						})
					})
				}
				static get styles() {
					return [Pt]
				}
				static get parts() {
					return []
				}
				connectedCallback() {
					super.connectedCallback(), H(this, "tabindex", "0"), H(this, "role", "button"), this._updateAriaPressedAttr()
				}
				updated(e) {
					e.has("pressed") && this._updateAriaPressedAttr()
				}
				_updateAriaPressedAttr() {
					F(this, "aria-pressed", this.pressed ? "true" : "false")
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
			Mt([Object(n.b)({
				type: Boolean
			})], xt.prototype, "pressed", void 0), Mt([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], xt.prototype, "disabled", void 0);
			class At extends xt {
				constructor() {
					super(), this._mediaRemote = new kt(this), Ae(this, "fullscreen", e => {
						this.pressed = e, F(this, "fullscreen", e)
					}), Ae(this, "canFullscreen", e => {
						F(this, "hidden", !e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), H(this, "aria-label", "Fullscreen")
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.exitFullscreen(this.fullscreenTarget, e) : this._mediaRemote.enterFullscreen(this.fullscreenTarget, e))
				}
			}(function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				r > 3 && a && Object.defineProperty(t, i, a)
			})([Object(n.b)({
				attribute: "fullscreen-target"
			})], At.prototype, "fullscreenTarget", void 0), $("vds-fullscreen-button", At);
			class Lt extends xt {
				constructor() {
					super(), this._mediaRemote = new kt(this), this._volume = 1, this._muted = !1, this.disabled = !1, Ae(this, "volume", e => {
						this._volume = e, this._handleMutedChange()
					}), Ae(this, "muted", e => {
						this._muted = e, this._handleMutedChange()
					})
				}
				connectedCallback() {
					super.connectedCallback(), H(this, "aria-label", "Mute")
				}
				_handleMutedChange() {
					const e = this._muted || 0 === this._volume;
					this.pressed = e, F(this, "muted", e)
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.unmute(e) : this._mediaRemote.mute(e))
				}
			}(function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				r > 3 && a && Object.defineProperty(t, i, a)
			})([Object(n.b)({
				type: Boolean,
				reflect: !0
			})], Lt.prototype, "disabled", void 0), $("vds-mute-button", Lt);
			$("vds-play-button", class extends xt {
				constructor() {
					super(), this._mediaRemote = new kt(this), Ae(this, "paused", e => {
						this.pressed = !e, F(this, "paused", e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), H(this, "aria-label", "Play")
				}
				_handleButtonClick(e) {
					this.disabled || (this.pressed ? this._mediaRemote.pause(e) : this._mediaRemote.play(e))
				}
			});
			var Rt = i("./node_modules/@reddit/shreddit.styles/dist/index.js");
			const Vt = s.b`
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
			var Tt = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			const qt = [1080, 720, 540, 480, 360, 240];
			class Dt extends s.a {
				constructor() {
					super(...arguments), this.showAutoplayToggle = !1, this.showOptions = !1, this.selectedLevel = -1
				}
				static get styles() {
					return [Rt.a, Vt]
				}
				connectedCallback() {
					super.connectedCallback(), H(this, "aria-label", "Quality level")
				}
				levelsToDisplay() {
					const {
						levels: e = []
					} = this.hlsEngine || {}, t = e.map((e, t) => ({
						...e,
						levelIndex: t
					})).sort((e, t) => t.height - e.height);
					return qt.map((e, i) => {
						const s = t.filter(t => t.height >= e && (0 === i || t.height < qt[i - 1])),
							n = s[s.length - 1];
						return n ? {
							levelIndex: n.levelIndex,
							resolution: e
						} : void 0
					}).filter(Boolean)
				}
				toggleOptions() {
					this.showOptions = !this.showOptions
				}
				handleOptionSelection(e, t) {
					e.stopPropagation(), this.dispatchEvent(z("vds-hls-manual-level-change", {
						bubbles: !0,
						composed: !0,
						detail: t
					})), this.selectedLevel = t
				}
				renderCheckmark(e) {
					return s.c`
      <span class="pr-2xs"> ${e?s.c`<icon-checkmark></icon-checkmark>`:""} </span>
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
						i = -1 === this.selectedLevel;
					return s.c`
      <icon-settings
        @click="${this.toggleOptions}"
        fill
        class="control flex items-center justify-center visible text-18 cursor-pointer ease duration-150 scale-100"
      ></icon-settings>
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
        ${null===(e=this.levelsToDisplay())||void 0===e?void 0:e.map(e=>e?s.c`
                <button
                  class="px-sm py-xs flex justify-center border-none cursor-pointer ${this.selectedLevel===e.levelIndex?"active":""}"
                  @click="${t=>this.handleOptionSelection(t,e.levelIndex)}"
                >
                  ${this.renderCheckmark(this.selectedLevel===e.levelIndex)}
                  <span>${e.resolution}p</span>
                </button>
              `:"")}
        <button
          class="px-sm py-xs flex justify-center border-none cursor-pointer ${i?"active":""}"
          @click="${e=>this.handleOptionSelection(e,-1)}"
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

			function It(e, t) {
				const i = String(e),
					s = i.length;
				if (s < t) {
					return `${"0".repeat(t-s)}${e}`
				}
				return i
			}
			var $t;

			function Ft(e) {
				const t = Math.trunc(e / 3600),
					i = Math.trunc(e % 3600 / 60),
					s = Math.trunc(e % 60),
					n = Number((e - Math.trunc(e)).toPrecision(3));
				return {
					[$t.Hours]: t,
					[$t.Minutes]: i,
					[$t.Seconds]: s,
					[$t.Fraction]: n
				}
			}

			function Ht(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const {
					hours: s,
					minutes: n,
					seconds: r
				} = Ft(e), a = t ? It(s, 2) : s, o = It(n, 2), l = It(r, 2);
				return s > 0 || i ? `${a}:${o}:${l}` : `${n}:${l}`
			}

			function Bt(e) {
				const t = [],
					{
						hours: i,
						minutes: s,
						seconds: n
					} = Ft(e),
					r = (e, t) => 1 === e ? t : `${t}s`;
				return i > 0 && t.push(`${i} ${r(i,"hour")}`), s > 0 && t.push(`${s} ${r(s,"minute")}`), (n > 0 || 0 === t.length) && t.push(`${n} ${r(n,"second")}`), t.join(", ")
			}
			Tt([Object(n.b)({
					attribute: !1
				})], Dt.prototype, "hlsEngine", void 0), Tt([Object(n.b)({
					attribute: !1
				})], Dt.prototype, "showAutoplayToggle", void 0), Tt([Object(n.b)({
					attribute: !1
				})], Dt.prototype, "autoplayPref", void 0), Tt([Object(n.d)()], Dt.prototype, "showOptions", void 0), Tt([Object(n.d)()], Dt.prototype, "selectedLevel", void 0), $("vds-quality-switcher", Dt),
				function(e) {
					e.Hours = "hours", e.Minutes = "minutes", e.Seconds = "seconds", e.Fraction = "fraction"
				}($t || ($t = {}));
			var Nt = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			class Ut extends s.a {
				constructor() {
					super(...arguments), this._disposal = new N.a, this._mediaStoreConsumer = xe.consume(this), this.__seconds = 0, this.type = "current", this.showHours = !1, this.padHours = !1, this.remainder = !1
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
					return re([e, this._mediaStore.duration], e => {
						let [t, i] = e;
						return Math.max(0, i - t)
					})
				}
				_getFormattedTime() {
					return Ht(this.__seconds, this.padHours, this.showHours)
				}
			}

			function zt(e) {
				let t;
				const i = () => !P(t);

				function s() {
					for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];
					i() || (t = window.requestAnimationFrame(() => {
						e.apply(this, n), t = void 0
					}))
				}
				return s.cancel = () => {
					P(t) || (window.cancelAnimationFrame(t), t = void 0)
				}, s.pending = i, s
			}
			Nt([Object(n.d)()], Ut.prototype, "__seconds", void 0), Nt([Object(n.b)()], Ut.prototype, "type", void 0), Nt([Object(n.b)({
				attribute: "show-hours",
				type: Boolean
			})], Ut.prototype, "showHours", void 0), Nt([Object(n.b)({
				attribute: "pad-hours",
				type: Boolean
			})], Ut.prototype, "padHours", void 0), Nt([Object(n.b)({
				type: Boolean
			})], Ut.prototype, "remainder", void 0), $("vds-time", Ut);
			const Wt = we((function() {
					const e = ne(!1),
						t = ne(!1);
					return {
						value: ne(50),
						pointerValue: ne(0),
						min: ne(0),
						max: ne(100),
						dragging: e,
						pointing: t,
						interactive: re([e, t], e => {
							let [t, i] = e;
							return t || i
						})
					}
				})),
				Qt = s.b`
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
			var Kt, Yt, Gt = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			! function(e) {
				e[e.Left = -1] = "Left", e[e.ArrowLeft = -1] = "ArrowLeft", e[e.Up = -1] = "Up", e[e.ArrowUp = -1] = "ArrowUp", e[e.Right = 1] = "Right", e[e.ArrowRight = 1] = "ArrowRight", e[e.Down = 1] = "Down", e[e.ArrowDown = 1] = "ArrowDown"
			}(Kt || (Kt = {})),
			function(e) {
				e.Horizontal = "horizontal", e.Vertical = "vertical"
			}(Yt || (Yt = {}));
			class Jt extends s.a {
				constructor() {
					super(), this._sliderStoreProvider = Wt.provide(this), this.disabled = !1, this.value = 50, this._step = 1, this.direction = Yt.Horizontal, this._keyboardStep = 1, this.shiftKeyMultiplier = 5, this.customValueText = !1, this._mediaRemote = new kt(this), this._disconnectDisposal = new N.a, this._handlePointerEnter = Object(Ue.a)(this, "pointerenter", () => {
						this.disabled || (this.setAttribute("pointing", ""), this.store.pointing.set(!0))
					}), this._handlePointerMove = Object(Ue.a)(this, "pointermove", e => {
						if (this.disabled || this.isDragging) return;
						const t = this._getValueBasedOnThumbPosition(e);
						this.store.pointerValue.set(t), this._dispatchPointerValueChange(e)
					}), this._handlePointerLeave = Object(Ue.a)(this, "pointerleave", () => {
						this.disabled || (this.removeAttribute("pointing"), this.store.pointing.set(!1))
					}), this._handlePointerDown = Object(Ue.a)(this, "pointerdown", e => {
						this.disabled || (this._startDragging(e), this._onDrag(e))
					}), this._handleKeydown = Object(Ue.a)(this, "keydown", e => {
						if (this.disabled) return;
						const {
							key: t,
							shiftKey: i
						} = e;
						if (!Object.keys(Kt).includes(t)) return;
						const s = (i ? this.keyboardStep * this.shiftKeyMultiplier : this.keyboardStep) * Number(Kt[t]),
							n = (this.value + s) / this.step,
							r = this.step * n;
						this.value = this._getClampedValue(r), this._dispatchValueChange(e)
					}), this._handleFillValueChange = Object(Ue.a)(this, "vds-slider-value-change", this._updateFillCSSProps.bind(this)), this._handlePointerValueChange = Object(Ue.a)(this, "vds-slider-pointer-value-change", this._updatePointerCSSProps.bind(this)), this._onDrag = zt(e => {
						if (this.disabled || !this.isDragging) return;
						const t = this._getValueBasedOnThumbPosition(e);
						this.store.pointerValue.set(t), this._dispatchPointerValueChange(e)
					}), this._handleDocumentPointerUp = Object(Ue.a)(this, "pointerup", e => {
						!this.disabled && this.isDragging && this._stopDragging(e)
					}, {
						target: document
					}), this._handleDocumentTouchMove = Object(Ue.a)(this, "touchmove", e => {
						!this.disabled && this.isDragging && e.preventDefault()
					}, {
						target: document,
						passive: !1
					}), this._handleDocumentPointerMove = Object(Ue.a)(this, "pointermove", e => {
						!this.disabled && this.isDragging && this._onDrag(e)
					}, {
						target: document
					}), this._lastDispatchedValue = this.value, this._dispatchValueChange = zt(e => {
						this.value !== this._lastDispatchedValue && (this.dispatchEvent(z("vds-slider-value-change", {
							detail: this.value,
							triggerEvent: e
						})), this._lastDispatchedValue = this.value)
					}), this._lastDispatchedPointerValue = this.pointerValue, this._dispatchPointerValueChange = zt(e => {
						if (this.pointerValue === this._lastDispatchedPointerValue) return;
						["vds-slider-pointer-value-change", this.isDragging && "vds-slider-drag-value-change"].forEach(t => {
							t && this.dispatchEvent(z(t, {
								detail: this.pointerValue,
								triggerEvent: e
							}))
						}), this._lastDispatchedPointerValue = this.pointerValue
					}), St(this)
				}
				static get styles() {
					return [Qt]
				}
				static get parts() {
					return []
				}
				get store() {
					return this._sliderStoreProvider.value
				}
				get min() {
					return ae(this.store.min)
				}
				set min(e) {
					this.store.min.set(e)
				}
				get max() {
					return ae(this.store.max)
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
					return ae(this.store.dragging)
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
					return ae(this.store.pointerValue)
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
						F(this, "interactive", e)
					}))
				}
				willUpdate(e) {
					(e.has("value") || e.has("min") || e.has("max")) && (this.value = this._getClampedValue(this.value), this.store.value.set(this.value), this._updateFillCSSProps(), this._dispatchValueChange()), e.has("disabled") && this.disabled && (this.store.dragging.set(!1), this.store.pointing.set(!1), this.removeAttribute("dragging"), this.removeAttribute("pointing"), this.removeAttribute("interactive"), F(this, "aria-disabled", this.disabled)), this.customValueText || this._updateAriaValueAttrs(), super.willUpdate(e)
				}
				disconnectedCallback() {
					this._onDrag.cancel(), this._disconnectDisposal.empty(), super.disconnectedCallback()
				}
				_updateFillCSSProps() {
					B(this, "fill-value", `${this.value}`), B(this, "fill-rate", `${this.fillRate}`), B(this, "fill-percent", `${this.fillPercent}%`)
				}
				_updatePointerCSSProps() {
					B(this, "pointer-value", `${this.pointerValue}`), B(this, "pointer-rate", `${this.pointerRate}`), B(this, "pointer-percent", `${this.pointerPercent}%`)
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
					H(this, "role", "slider"), H(this, "tabindex", "0"), H(this, "aria-orientation", this.direction === Yt.Vertical ? "vertical" : "horizontal"), H(this, "autocomplete", "off")
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
					return `${_e(this.value/this.max*100,2)}%`
				}
				_startDragging(e) {
					if (this.isDragging) return;
					this.store.dragging.set(!0), this.setAttribute("dragging", "");
					const t = this._getValueBasedOnThumbPosition(e);
					this.store.pointerValue.set(t), this._dispatchPointerValueChange(e), this.dispatchEvent(z("vds-slider-drag-start", {
						triggerEvent: e,
						detail: this.value,
						bubbles: !0
					})), this._mediaRemote.pauseUserIdle(e)
				}
				_stopDragging(e) {
					if (!this.isDragging) return;
					this.store.dragging.set(!1), this._dispatchValueChange.cancel(), this.removeAttribute("dragging");
					const t = this._getValueBasedOnThumbPosition(e);
					this.value = t, this.store.pointerValue.set(t), this._dispatchValueChange(e), this._dispatchPointerValueChange(e), this.dispatchEvent(z("vds-slider-drag-end", {
						triggerEvent: e,
						detail: this.value,
						bubbles: !0
					})), this._mediaRemote.resumeUserIdle(e)
				}
				_getClampedValue(e) {
					return ge(this.min, _e(e, me(this.step)), this.max)
				}
				_getValueFromRate(e) {
					const t = ge(0, e, 1),
						i = (this.max - this.min) * t,
						s = Math.round(i / this.step),
						n = this.step * s;
					return this.min + n
				}
				_getValueBasedOnThumbPosition(e) {
					if (this.direction === Yt.Vertical) {
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
			Gt([Object(n.b)({
				reflect: !0,
				type: Number
			})], Jt.prototype, "min", null), Gt([Object(n.b)({
				reflect: !0,
				type: Number
			})], Jt.prototype, "max", null), Gt([Object(n.b)({
				reflect: !0,
				type: Boolean
			})], Jt.prototype, "disabled", void 0), Gt([Object(n.b)({
				reflect: !0,
				type: Number
			})], Jt.prototype, "value", void 0), Gt([Object(n.b)({
				type: Number,
				reflect: !0
			})], Jt.prototype, "step", null), Gt([Object(n.b)({
				attribute: "direction",
				type: Yt
			})], Jt.prototype, "direction", void 0), Gt([Object(n.b)({
				attribute: "keyboard-step",
				type: Number,
				reflect: !0
			})], Jt.prototype, "keyboardStep", null), Gt([Object(n.b)({
				attribute: "shift-key-multiplier",
				type: Number
			})], Jt.prototype, "shiftKeyMultiplier", void 0), Gt([Object(n.b)({
				type: Boolean,
				attribute: "custom-value-text"
			})], Jt.prototype, "customValueText", void 0);
			const Xt = s.b``;
			var Zt = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			class ei extends Jt {
				constructor() {
					super(), this._step = .1, this.value = 0, this.valueText = "{currentTime} out of {duration}", this.pauseWhileDragging = !1, this.seekingRequestThrottle = 100, this.__mediaDuration = 0, this.__mediaPaused = !0, this._handleSliderDragStart = Object(Ue.a)(this, "vds-slider-drag-start", e => {
						this._togglePlaybackWhileDragging(e)
					}), this._handleSliderValueChange = Object(Ue.a)(this, "vds-slider-value-change", e => {
						jt(e.originEvent) && (this._dispatchSeekingRequest.cancel(), this._mediaRemote.seek(this.value, e))
					}), this._handleSliderDragValueChange = Object(Ue.a)(this, "vds-slider-drag-value-change", e => {
						this._dispatchSeekingRequest(e)
					}), this._handleSliderDragEnd = Object(Ue.a)(this, "vds-slider-drag-end", e => {
						this._dispatchSeekingRequest.cancel(), this._mediaRemote.seek(this.value, e), this._togglePlaybackWhileDragging(e)
					}), this._dispatchSeekingRequest = ze(e => {
						this._mediaRemote.seeking(this.value, e)
					}, this.seekingRequestThrottle), this._wasPlayingBeforeDragStart = !1, Ae(this, "currentTime", e => {
						this.value = e
					}), Ae(this, "duration", e => {
						this.__mediaDuration = e, this.requestUpdate("max")
					}), Ae(this, "paused", e => {
						this.__mediaPaused = e
					})
				}
				static get styles() {
					return [super.styles, Xt]
				}
				connectedCallback() {
					super.connectedCallback(), H(this, "aria-label", "Media time")
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
					return this.valueText.replace("{currentTime}", Bt(this.value)).replace("{duration}", Bt(this.__mediaDuration))
				}
				_getValueMax() {
					return "100%"
				}
				_togglePlaybackWhileDragging(e) {
					this.pauseWhileDragging && (this.isDragging && !this.__mediaPaused ? (this._wasPlayingBeforeDragStart = !0, this._mediaRemote.pause(e)) : this._wasPlayingBeforeDragStart && !this.isDragging && this.__mediaPaused && (this._wasPlayingBeforeDragStart = !1, this._mediaRemote.play(e)))
				}
			}
			Zt([Object(n.b)({
				attribute: !1,
				state: !0
			})], ei.prototype, "value", void 0), Zt([Object(n.b)({
				attribute: !1
			})], ei.prototype, "min", null), Zt([Object(n.b)({
				attribute: !1
			})], ei.prototype, "max", null), Zt([Object(n.b)({
				attribute: "value-text"
			})], ei.prototype, "valueText", void 0), Zt([Object(n.b)({
				attribute: "pause-while-dragging",
				type: Boolean
			})], ei.prototype, "pauseWhileDragging", void 0), Zt([Object(n.b)({
				attribute: "seeking-request-throttle",
				type: Number
			})], ei.prototype, "seekingRequestThrottle", void 0), Zt([Object(n.d)()], ei.prototype, "__mediaDuration", void 0), Zt([Object(n.d)()], ei.prototype, "__mediaPaused", void 0), $("vds-time-slider", ei);
			var ti = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			class ii extends s.a {
				constructor() {
					super(...arguments), this._disposal = new N.a, this._sliderStoreConsumer = Wt.consume(this), this.__value = 0, this.type = "current", this.showHours = !1, this.padHours = !1, this.decimalPlaces = 2
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
					return re([e, this._sliderStore.min, this._sliderStore.max], e => {
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
					return `${_e(this.__value,this.decimalPlaces)}%`
				}
				_getTimeFormat() {
					return Ht(this.__value, this.padHours, this.showHours)
				}
			}
			ti([Object(n.d)()], ii.prototype, "__value", void 0), ti([Object(n.b)()], ii.prototype, "type", void 0), ti([Object(n.b)()], ii.prototype, "format", void 0), ti([Object(n.b)({
				attribute: "show-hours",
				type: Boolean
			})], ii.prototype, "showHours", void 0), ti([Object(n.b)({
				attribute: "pad-hours",
				type: Boolean
			})], ii.prototype, "padHours", void 0), ti([Object(n.b)({
				attribute: "decimal-places",
				type: Number
			})], ii.prototype, "decimalPlaces", void 0), $("vds-slider-value-text", ii);
			const {
				H: si
			} = r.a, ni = e => void 0 === e.strings, ri = (e, t) => {
				var i, s;
				const n = e._$AN;
				if (void 0 === n) return !1;
				for (const r of n) null === (s = (i = r)._$AO) || void 0 === s || s.call(i, t, !1), ri(r, t);
				return !0
			}, ai = e => {
				let t, i;
				do {
					if (void 0 === (t = e._$AM)) break;
					(i = t._$AN).delete(e), e = t
				} while (0 === (null == i ? void 0 : i.size))
			}, oi = e => {
				for (let t; t = e._$AM; e = t) {
					let i = t._$AN;
					if (void 0 === i) t._$AN = i = new Set;
					else if (i.has(e)) break;
					i.add(e), hi(t)
				}
			};

			function li(e) {
				void 0 !== this._$AN ? (ai(this), this._$AM = e, oi(this)) : this._$AM = e
			}

			function di(e, t = !1, i = 0) {
				const s = this._$AH,
					n = this._$AN;
				if (void 0 !== n && 0 !== n.size)
					if (t)
						if (Array.isArray(s))
							for (let r = i; r < s.length; r++) ri(s[r], !1), ai(s[r]);
						else null != s && (ri(s, !1), ai(s));
				else ri(this, e)
			}
			const hi = e => {
				var t, i, s, n;
				e.type == d.b.CHILD && (null !== (t = (s = e)._$AP) && void 0 !== t || (s._$AP = di), null !== (i = (n = e)._$AQ) && void 0 !== i || (n._$AQ = li))
			};
			class ci extends d.a {
				constructor() {
					super(...arguments), this._$AN = void 0
				}
				_$AT(e, t, i) {
					super._$AT(e, t, i), oi(this), this.isConnected = e._$AU
				}
				_$AO(e, t = !0) {
					var i, s;
					e !== this.isConnected && (this.isConnected = e, e ? null === (i = this.reconnected) || void 0 === i || i.call(this) : null === (s = this.disconnected) || void 0 === s || s.call(this)), t && (ri(this, e), ai(this))
				}
				setValue(e) {
					if (ni(this._$Ct)) this._$Ct._$AI(e, this);
					else {
						const t = [...this._$Ct._$AH];
						t[this._$Ci] = e, this._$Ct._$AI(t, this, 0)
					}
				}
				disconnected() {}
				reconnected() {}
			}
			const ui = () => new pi;
			class pi {}
			const vi = new WeakMap,
				_i = Object(d.c)(class extends ci {
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
							let s = vi.get(i);
							void 0 === s && (s = new WeakMap, vi.set(i, s)), void 0 !== s.get(this.Y) && this.Y.call(this.ct, void 0), s.set(this.Y, e), void 0 !== e && this.Y.call(this.ct, e)
						} else this.Y.value = e
					}
					get lt() {
						var e, t, i;
						return "function" == typeof this.Y ? null === (t = vi.get(null !== (e = this.ct) && void 0 !== e ? e : globalThis)) || void 0 === t ? void 0 : t.get(this.Y) : null === (i = this.Y) || void 0 === i ? void 0 : i.value
					}
					disconnected() {
						this.lt === this.dt && this.rt(void 0)
					}
					reconnected() {
						this.rt(this.dt)
					}
				});
			var gi = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			class mi extends s.a {
				constructor() {
					super(), this._videoRef = ui(), this.__canPlay = !1, this.__hasError = !1, le(this, Wt, "pointerValue", e => {
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
        ${_i(this._videoRef)}
      ></video>
    `;
					var e
				}
				async _handleCanPlay(e) {
					this.__canPlay = !0, this.setAttribute("video-can-play", ""), ut(this, e)
				}
				_handleError(e) {
					this.__hasError = !0, this.setAttribute("video-error", ""), ut(this, e)
				}
			}
			gi([Object(n.b)()], mi.prototype, "src", void 0), gi([Object(n.d)()], mi.prototype, "__canPlay", void 0), gi([Object(n.d)()], mi.prototype, "__hasError", void 0), $("vds-slider-video", mi);
			var bi = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			class yi extends Jt {
				constructor() {
					super(), this.value = 100, this._handleSliderValueChange = Object(Ue.a)(this, "vds-slider-value-change", this._changeVolume.bind(this)), this._handleSliderDragValueChange = Object(Ue.a)(this, "vds-slider-drag-value-change", this._changeVolume.bind(this)), Ae(this, "volume", e => {
						this.value = 100 * Math.sqrt(e)
					})
				}
				connectedCallback() {
					super.connectedCallback(), H(this, "aria-label", "Media volume")
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
						i = _e(Math.pow(t / 100, 2), 3);
					this._mediaRemote.changeVolume(i, e)
				}
			}
			bi([Object(n.b)({
				attribute: !1
			})], yi.prototype, "min", null), bi([Object(n.b)({
				attribute: !1
			})], yi.prototype, "max", null), bi([Object(n.b)({
				attribute: !1,
				state: !0
			})], yi.prototype, "value", void 0), $("vds-volume-slider", yi);
			var fi = s.b`
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
			const wi = {
				capLevelToPlayerSize: !0,
				startLevel: -1
			};
			var Ei = function(e, t, i, s) {
				var n, r = arguments.length,
					a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
				else
					for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
				return r > 3 && a && Object.defineProperty(t, i, a), a
			};
			let Oi = class extends s.a {
				constructor() {
					super(...arguments), this.hlsLibrary = () => i.e(3).then(i.t.bind(null, "./node_modules/@reddit/shreddit.components.shreddit-player/node_modules/hls.js/dist/hls.min.js", 7)), this.autoplay = !1, this.autoplayPref = !1, this.showAutoplayToggle = !1, this.gif = !1, this.playOutOfViewport = !1, this.ui = "mobile", this.objectFit = "contain", this.mediaLoadRequested = !1, this.disableMuteButton = !1, this.handleLoadMediaClick = () => {
						var e;
						this.mediaLoadRequested || (this.mediaLoadRequested = !0, null === (e = this.hlsElement) || void 0 === e || e.startLoadingMedia())
					}
				}
				static get styles() {
					return [Rt.a, fi]
				}
				connectedCallback() {
					super.connectedCallback(), requestAnimationFrame(() => {
						var e, t, i, s;
						null === (e = this.hlsElement) || void 0 === e || e.addEventListener("vds-loaded-metadata", () => {
							var e;
							this.hlsEngine = null === (e = this.hlsElement) || void 0 === e ? void 0 : e.hlsEngine
						}), null === (t = this.volumeSlider) || void 0 === t || t.addEventListener("vds-slider-drag-start", () => {
							this.disableMuteButton = !0
						}), null === (i = this.volumeSlider) || void 0 === i || i.addEventListener("vds-slider-drag-end", () => {
							this.disableMuteButton = !1
						}), null === (s = this.hlsElement) || void 0 === s || s.addEventListener("vds-error", e => {
							this.mediaError = e.detail
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
					var e;
					const t = this.gif ? "gif" : "",
						i = "desktop" === this.ui,
						n = "absolute inset-0 w-full h-full flex items-center justify-center opacity-0 ease duration-150",
						r = i && !this.gif;
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
            >
              <icon-play
                fill
                class="play-icon absolute inset-0 flex items-center justify-center text-32 ${"ease duration-150"}"
                @click="${this.handleLoadMediaClick}"
              ></icon-play>
            </vds-play-button>
          </div>
        </div>
      ` : s.c`
      <div
        class="media-controls h-full w-full text-white absolute inset-0 pointer-events-none ${t}"
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
                <icon-play fill class="play-icon text-18 ${n}"></icon-play>
                <icon-refresh fill class="refresh-icon text-24 ${n}"></icon-refresh>
                <icon-pause fill class="pause-icon text-18 ${n}"></icon-pause>
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
                <span class="vds-time-spacer px-2xs">/</span>
                <vds-time type="duration"></vds-time>
              </span>

              ${i?s.c`
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
                <icon-expand-left fill class="expand-icon text-18 ${n}"></icon-expand-left>
                <icon-collapse-left
                  fill
                  class="collapse-icon text-18 ${n}"
                ></icon-collapse-left>
              </vds-fullscreen-button>
            </div>
            <div class="mute-volume-container flex flex-col gap-xs pointer-events-auto">
              ${r?s.c`
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
              ${this.gif?s.c`
                    <icon-gif-post
                      class="control gif-icon inset-0 flex items-center justify-center text-18"
                    ></icon-gif-post>
                  `:s.c`
                    <vds-mute-button
                      class="control relative rounded-sm cursor-pointer ${"ease duration-150"}"
                      .disabled="${this.disableMuteButton}"
                    >
                      <icon-volume fill class="unmute-icon text-18 ${n}"></icon-volume>
                      <icon-volume-mute
                        fill
                        class="mute-icon text-18 ${n}"
                      ></icon-volume-mute>
                    </vds-mute-button>
                  `}
            </div>
          </div>
        </div>

        ${this.renderPreviewImage()}

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
				render() {
					var e, t;
					const i = this.gif ? "gif" : "",
						n = "desktop" === this.ui;
					return s.c`
      <vds-media-sync ?single-playback="${!this.gif}" sync-volume>
        <vds-media-visibility
          intersection-threshold="1"
          enter-page="${a(this.autoplay||this.gif?"play":void 0)}"
          enter-viewport="${a(this.autoplay||this.gif?"play":void 0)}"
          exit-page="${a(n||this.gif?void 0:"pause")}"
          exit-viewport="${a(this.playOutOfViewport||this.gif?void 0:"pause")}"
          page-enter-delay="200"
          viewport-enter-delay="200"
        >
          <vds-media class="h-full w-full ${`${i}`}">
            <vds-hls
              class="h-full w-full"
              .hlsConfig="${wi}"
              .hlsLibrary="${this.hlsLibrary}"
              preload="${this.autoplay?"auto":"none"}"
              loading="${this.autoplay?"lazy":"custom"}"
              ?autoplay="${this.autoplay}"
              ?gif="${this.gif}"
              ?loop="${this.gif}"
              ?muted="${this.gif}"
              poster="${a(null!==(e=this.getAttribute("poster"))&&void 0!==e?e:void 0)}"
              preview="${a(null!==(t=this.getAttribute("preview"))&&void 0!==t?t:void 0)}"
            >
              <video
                src="${a(this.src)}"
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
			Ei([Object(n.b)({
				type: String,
				attribute: "src"
			})], Oi.prototype, "src", void 0), Ei([Object(n.b)({
				type: Boolean,
				attribute: "autoplay",
				reflect: !0
			})], Oi.prototype, "autoplay", void 0), Ei([Object(n.b)({
				type: Boolean,
				attribute: "autoplay-pref"
			})], Oi.prototype, "autoplayPref", void 0), Ei([Object(n.b)({
				type: Boolean,
				attribute: "show-autoplay-toggle"
			})], Oi.prototype, "showAutoplayToggle", void 0), Ei([Object(n.b)({
				type: Boolean,
				attribute: "gif",
				reflect: !0
			})], Oi.prototype, "gif", void 0), Ei([Object(n.b)({
				type: String,
				attribute: "preview"
			})], Oi.prototype, "preview", void 0), Ei([Object(n.b)({
				type: Boolean,
				attribute: "play-out-of-viewport"
			})], Oi.prototype, "playOutOfViewport", void 0), Ei([Object(n.b)({
				type: String,
				attribute: "ui"
			})], Oi.prototype, "ui", void 0), Ei([Object(n.b)({
				type: String,
				attribute: "object-fit"
			})], Oi.prototype, "objectFit", void 0), Ei([Object(n.d)()], Oi.prototype, "mediaLoadRequested", void 0), Ei([Object(n.d)()], Oi.prototype, "hlsEngine", void 0), Ei([Object(n.d)()], Oi.prototype, "disableMuteButton", void 0), Ei([Object(n.d)()], Oi.prototype, "mediaError", void 0), Ei([Object(n.c)("vds-hls")], Oi.prototype, "hlsElement", void 0), Ei([Object(n.c)("vds-volume-slider")], Oi.prototype, "volumeSlider", void 0), Oi = Ei([Object(n.a)("shreddit-player")], Oi)
		},
		"./node_modules/@reddit/shreddit.components.shreddit-player/dist/media-telemetry-observer/media-telemetry-observer.js": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "MediaTelemetryObserver", (function() {
				return X
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/observers/PageController.js"),
				n = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js"),
				r = i("./node_modules/lit/index.js"),
				a = i("./node_modules/lit/decorators.js");
			const o = 3e4,
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
							paused: a,
							volume: o
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
							paused: a,
							timeStamp: t,
							volume: o
						}
					})(t);
					return [Object(p.a)(e, i)]
				},
				_ = [{
					"vds-fullscreen-change": v("ad-media-fullscreenchange"),
					"vds-pause": v("ad-media-pause"),
					"vds-play": v("ad-media-play"),
					"vds-time-update": v("ad-media-timeupdate"),
					"vds-volume-change": v("ad-media-volumechange"),
					"vds-seeking": v("ad-media-seeking"),
					"vds-seeked": v("ad-media-seeked")
				}];
			var g, m, b, y, f, w, E, O, k, C, S, j, P, M, x, A = i("./node_modules/uuid/dist/esm-browser/v4.js"),
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
			class V {
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
			class T {
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
			class q {
				constructor(e) {
					this._stopwatch = new V, this._buffering = !1, this._playing = !1, this._viewable = !1, this._visible = !1, this._audible = e.audible, this._fullscreen = e.fullscreen, this._thresholdObserver = new T(e.duration)
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

			function D(e, t, i) {
				return {
					...e,
					media: $(t, i),
					playback: I(t, i)
				}
			}

			function I(e, t) {
				var i, s, n, r, a, o;
				const {
					levels: l,
					currentLevel: d,
					audioTracks: h,
					audioTrack: c
				} = null !== (i = e.hlsEngine) && void 0 !== i ? i : {}, {
					currentTime: u = 0,
					duration: p = 0,
					muted: v,
					volume: _ = 0
				} = null !== (s = e.state) && void 0 !== s ? s : {}, g = l && void 0 !== d ? null === (n = l[d]) || void 0 === n ? void 0 : n.bitrate : void 0, m = h && void 0 !== c && (null === (r = h[c]) || void 0 === r ? void 0 : r.bitrate) > 0 ? null === (a = h[c]) || void 0 === a ? void 0 : a.bitrate : void 0, {
					height: b,
					width: f
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
					state: F(e),
					error: H(e),
					watch_duration_ms: Math.round(t._stopwatch.time),
					heartbeat_duration_ms: null,
					playhead_offset_ms: Math.round(1e3 * (p - u)),
					timestamp_ms: Math.round(1e3 * u),
					start_time_ms: t.startedAt,
					volume: v ? 0 : Math.round(100 * _),
					total_bitrate: (null != g ? g : 0) + (null != m ? m : 0),
					video_bitrate: g,
					audio_bitrate: m,
					player_type: null !== (o = t._playbackPlayerType) && void 0 !== o ? o : null,
					player_width: f,
					player_height: b,
					autoplay_setting: t._firstPlayTrusted ? y.Click : y.Autoplay,
					sequence_number: t._sequenceNumber += 1
				}
			}

			function $(e, t) {
				var i, s, n, r, a, o;
				const {
					levels: l,
					currentLevel: d,
					audioTrack: h,
					streamController: c
				} = null !== (i = e.hlsEngine) && void 0 !== i ? i : {}, {
					duration: u,
					mediaType: p
				} = null !== (s = e.state) && void 0 !== s ? s : {}, {
					height: v,
					width: _
				} = function(e) {
					const t = e.videoElement;
					return {
						height: (null == t ? void 0 : t.videoHeight) || 0,
						width: (null == t ? void 0 : t.videoWidth) || 0
					}
				}(e), m = _ >= v ? g.Landscape : g.Portrait, y = e.currentHlsSrc || (null === (n = e.mediaElement) || void 0 === n ? void 0 : n.src), {
					hostname: f,
					pathname: w,
					id: E
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
				}(y), O = null == c ? void 0 : null === (r = c.fragCurrent) || void 0 === r ? void 0 : r.byteRange;
				let k;
				Array.isArray(O) && 2 === O.length && (k = O[1] - O[0]);
				const C = l && void 0 !== d ? null === (a = l[d]) || void 0 === a ? void 0 : a.codecSet : void 0;
				return {
					duration: Math.round(1e3 * u),
					height: v,
					width: _,
					id: E,
					domain: f,
					orientation: m,
					origin: null !== (o = t._mediaOrigin) && void 0 !== o ? o : null,
					size: k,
					type: p,
					packaging_format: e.isHlsStream ? b.Hls : b.SingleFile,
					byte_range: Array.isArray(O) ? O.toString() : void 0,
					format: C,
					has_audio: void 0 !== h && h > -1,
					file_name: w
				}
			}

			function F(e) {
				var t;
				const {
					waiting: i,
					playing: s,
					paused: n
				} = null !== (t = e.state) && void 0 !== t ? t : {};
				return i ? f.Buffering : s ? f.Playing : n ? f.Paused : f.Buffering
			}

			function H(e) {
				var t;
				const {
					error: i
				} = null !== (t = e.state) && void 0 !== t ? t : {};
				if (!i || !i.message) return;
				const {
					message: s,
					code: n,
					mediaError: r
				} = i;
				let a = `[${n}]: ${s}`;
				return r && (r.code || r.message) && (a = `${a}. MediaError[${r.code}]: ${r.message}`), a
			}

			function B(e) {
				return F(e) === f.Playing
			}

			function N(e) {
				return !e.state.muted && e.state.volume > 0
			}! function(e) {
				e.Landscape = "landscape", e.Portrait = "portrait"
			}(g || (g = {})),
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
			}(O || (O = {})),
			function(e) {
				e.Background = "background", e.Click = "click", e.End = "end", e.Error = "error", e.Scroll = "scroll", e.Start = "start", e.Switch = "switch", e.View = "view"
			}(k || (k = {})),
			function(e) {
				e.Autoplay = "autoplay", e.Bitrate = "bitrate", e.Download = "download", e.Pause = "pause", e.Play = "play", e.Rebuffer = "rebuffer", e.Video = "video"
			}(C || (C = {})),
			function(e) {
				e.Videoplayer = "videoplayer"
			}(S || (S = {})),
			function(e) {
				e.Click = "click", e.Continue = "continue", e.IsFullyViewable = "is_fully_viewable", e.IsViewable = "is_viewable", e.Pause = "pause", e.PlayExpanded = "play_expanded", e.PlayWithSound = "play_with_sound", e.Start = "start", e.Watch = "watch", e.WatchPercent25 = "watch_25_percent", e.WatchPercent50 = "watch_50_percent", e.WatchPercent75 = "watch_75_percent", e.WatchPercent95 = "watch_95_percent", e.WatchPercent100 = "watch_100_percent", e.WatchSeconds2 = "watch_2_seconds", e.WatchSeconds3 = "watch_3_seconds", e.WatchSeconds5 = "watch_5_seconds", e.WatchSeconds10 = "watch_10_seconds"
			}(j || (j = {})),
			function(e) {
				e.Pause = "pause", e.Play = "play", e.Seek = "seek", e.Mute = "mute", e.Unmute = "unmute", e.Replay = "replay", e.Video = "video"
			}(P || (P = {})),
			function(e) {
				e.Autoplay = "autoplay", e.Manual = "manual"
			}(M || (M = {})),
			function(e) {
				e.Auto = "auto", e.Buffer = "buffer", e.Manual = "manual"
			}(x || (x = {}));
			class U {
				constructor(e, t) {
					var i, s, n, r;
					this._handleHeartbeat = e => {
						this._validateHeartbeat(e) && this._watch()
					}, this._validateHeartbeat = e => e.latency < l, this._mediaOrigin = null == t ? void 0 : null === (i = t.media) || void 0 === i ? void 0 : i.origin, this._playbackPlayerType = null == t ? void 0 : null === (s = t.playback) || void 0 === s ? void 0 : s.playerType, this._player = e, this._pulse = new R({
						interval: o
					}), this._stopwatch = new V, this._firstPlayTrusted = !1, this.id = Object(A.a)(), this._lastContinueReason = x.Auto, this._live = (null === (n = this._player.state) || void 0 === n ? void 0 : n.mediaType) === L.a.LiveVideo, this.hasLooped = !1, this._playedInFullscreen = !1, this._playedWithSound = !1, this.startedAt = 0, this._waiting = !1, this._sequenceNumber = -1, this._pulse.onHeartbeat(this._handleHeartbeat), this._watchPercentThresholdObserver = new T(d), this._watchSecondsThresholdObserver = new T(h);
					const a = N(this._player),
						{
							fullscreen: p = !1
						} = null !== (r = this._player.state) && void 0 !== r ? r : {};
					this._viewableImpressionObserver = new q({
						audible: a,
						duration: c,
						fullscreen: p
					}), this._viewableImpressionObserver.onImpression(() => {
						this._player.dispatchEvent(new Event("viewable-impression", {
							bubbles: !1
						}))
					}), this._fullyViewableImpressionObserver = new q({
						audible: a,
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
					this._viewableImpressionObserver.fullscreen = e, this._fullyViewableImpressionObserver.fullscreen = e, B(this._player) && !this._playedInFullscreen && (this._playedInFullscreen = !0)
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
					null !== (t = this._player.state) && void 0 !== t && t.started || (this._firstPlayTrusted = e), this._lastContinueReason = e ? x.Manual : x.Auto
				}
				playing() {
					this._resumeSession(), this._waiting = !1, this._viewableImpressionObserver.buffering = !1, this._fullyViewableImpressionObserver.buffering = !1, this._lastContinueReason = x.Auto
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
					t && B(e) && !this._playedWithSound && (this._playedWithSound = !0), this._viewableImpressionObserver.audible = t, this._fullyViewableImpressionObserver.audible = t
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
			const z = Symbol("mixins/with-tracking");
			var W = i("./node_modules/@reddit/shreddit.lib.telemetry/dist/eventV2JSONUtils.js"),
				Q = function(e, t, i, s) {
					var n, r = arguments.length,
						a = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
					if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s);
					else
						for (var o = e.length - 1; o >= 0; o--)(n = e[o]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
					return r > 3 && a && Object.defineProperty(t, i, a), a
				};
			const K = [{
				"vds-ended": (e, t) => t.ended(),
				"vds-pause": (e, t, i) => {
					const s = Z(e.requestEvent);
					return t.pause(), Y(t, i, s)
				},
				"vds-fullscreen-change": (e, t, i) => {
					const s = e.detail,
						n = [];
					return B(i._player) && !t._playedInFullscreen && n.push(D({
						source: S.Videoplayer,
						action: j.PlayExpanded,
						noun: P.Video
					}, i._player, t)), t.fullscreen(s), n
				},
				"vds-play": (e, t, i) => {
					var s;
					const n = Z(e.requestEvent),
						r = [];
					if (N(i._player) && !t._playedWithSound) {
						t._playedWithSound = !0;
						const e = D({
							source: S.Videoplayer,
							action: j.PlayWithSound,
							noun: P.Video
						}, i._player, t);
						r.push(e)
					}
					if (null !== (s = i._player.state) && void 0 !== s && s.fullscreen && !t._playedInFullscreen) {
						t._playedInFullscreen = !0;
						const e = D({
							source: S.Videoplayer,
							action: j.PlayExpanded,
							noun: P.Video
						}, i._player, t);
						r.push(e)
					}
					return t.play(n), i._userReplayRequest = !1, r
				},
				"vds-can-autoplay": (e, t, i) => i.autoplayEventInView ? [] : [D({
					source: O.Videoplayer,
					action: k.View,
					noun: C.Autoplay
				}, i._player, t)],
				"vds-autoplay": (e, t, i) => !0 === i.autoplayEventInView ? [D({
					source: O.Videoplayer,
					action: k.View,
					noun: C.Autoplay
				}, i._player, t)] : [],
				"vds-can-load": (e, t, i) => {
					var s, n;
					null !== (s = i._player) && void 0 !== s && null !== (n = s.state) && void 0 !== n && n.ended && (i._userReplayRequest = !0)
				},
				"vds-manual-load": (e, t, i) => [D({
					source: O.Videoplayer,
					action: k.Click,
					noun: C.Play
				}, i._player, t)],
				"vds-end": (e, t, i) => {
					var s, n, r;
					if (null !== (s = i._player) && void 0 !== s && s.loop || null !== (n = i._player) && void 0 !== n && null !== (r = n.state) && void 0 !== r && r.loop) return t.looped()
				},
				"vds-error": (e, t, i) => {
					var s;
					return (null == e ? void 0 : null === (s = e.detail) || void 0 === s ? void 0 : s.message) && console.error(`vds-error: [${e.detail.code}] ${e.detail.message}`), [D({
						source: O.Videoplayer,
						action: k.Error,
						noun: C.Video
					}, i._player, t)]
				},
				"vds-hls-level-switched": (e, t, i) => [D({
					source: O.Videoplayer,
					action: k.Switch,
					noun: C.Bitrate
				}, i._player, t)],
				"vds-hls-manifest-loading": (e, t, i) => [D({
					source: O.Videoplayer,
					action: k.Start,
					noun: C.Download
				}, i._player, t)],
				"vds-hls-manifest-loaded": (e, t, i) => [D({
					source: O.Videoplayer,
					action: k.End,
					noun: C.Download
				}, i._player, t)],
				"vds-playing": (e, t, i) => {
					var s;
					const n = "vds-triggeredBySeeked" === (null === (s = e.triggerEvent) || void 0 === s ? void 0 : s.type),
						r = !t._stopwatch.time,
						a = [];
					if (t._waiting) {
						t._lastContinueReason = x.Buffer;
						const e = D({
							source: O.Videoplayer,
							action: k.End,
							noun: C.Rebuffer
						}, i._player, t);
						a.push(e)
					}
					if (r) {
						const e = t._firstPlayTrusted ? M.Manual : M.Autoplay,
							s = D({
								source: O.Videoplayer,
								action: k.Start,
								noun: C.Video,
								action_info: {
									reason: e
								}
							}, i._player, t);
						a.push(s)
					} else if (!n || t._waiting) {
						const e = D({
							source: S.Videoplayer,
							action: j.Continue,
							noun: P.Video,
							action_info: {
								reason: t._lastContinueReason
							}
						}, i._player, t);
						a.push(e)
					}
					return t.playing(), a
				},
				"vds-replay": (e, t, i) => {
					var s, n, r;
					return i._userReplayRequest = !0, (null !== (s = i._player) && void 0 !== s && s.loop || null !== (n = i._player) && void 0 !== n && null !== (r = n.state) && void 0 !== r && r.loop) && t.replay(), [D({
						source: S.Videoplayer,
						action: j.Click,
						noun: P.Replay
					}, i._player, t)]
				},
				"vds-seeking": (e, t) => t.seeking(),
				"vds-seeked": (e, t, i) => {
					const s = [];
					return Z(e.requestEvent) && s.push(D({
						source: S.Videoplayer,
						action: j.Click,
						noun: P.Seek
					}, i._player, t)), s
				},
				"vds-time-update": (e, t, i) => {
					const s = [],
						n = t.checkWatchPercentThreshold();
					for (const a of n) s.push(D({
						source: S.Videoplayer,
						action: te(`WatchPercent${a}`),
						noun: P.Video
					}, i._player, t));
					const r = t.checkWatchSecondsThreshold();
					for (const a of r) s.push(D({
						source: S.Videoplayer,
						action: te(`WatchSeconds${a}`),
						noun: P.Video
					}, i._player, t));
					return t.timeUpdate(), s
				},
				"vds-volume-change": (e, t, i) => {
					var s;
					const n = Z(e.requestEvent),
						r = [],
						a = null === (s = e.requestEvent) || void 0 === s ? void 0 : s.type;
					if ("vds-mute-request" !== a && "vds-unmute-request" !== a || n && r.push(D({
							source: S.Videoplayer,
							action: j.Click,
							noun: "vds-mute-request" === a ? P.Mute : P.Unmute
						}, i._player, t)), N(i._player) && B(i._player) && !t._playedWithSound) {
						const e = D({
							source: S.Videoplayer,
							action: j.PlayWithSound,
							noun: P.Video
						}, i._player, t);
						r.push(e)
					}
					return t.volumeChange(i._player), r.filter(Boolean)
				},
				"vds-waiting": (e, t, i) => {
					var s, n;
					const r = [];
					return t.waiting(), null !== (s = i._player) && void 0 !== s && null !== (n = s.state) && void 0 !== n && n.started && r.push(D({
						source: O.Videoplayer,
						action: k.Start,
						noun: C.Rebuffer
					}, i._player, t), D({
						source: S.Videoplayer,
						action: j.Pause,
						noun: P.Video,
						action_info: {
							reason: x.Buffer
						}
					}, i._player, t)), r
				},
				"viewable-impression": (e, t, i) => {
					return [D({
						source: S.Videoplayer,
						action: j.IsViewable,
						noun: P.Video
					}, i._player, t)]
				},
				"fully-viewable-impression": (e, t, i) => {
					return [D({
						source: S.Videoplayer,
						action: j.IsFullyViewable,
						noun: P.Video
					}, i._player, t)]
				},
				"video-heartbeat": (e, t, i) => {
					return [G(t, i)]
				}
			}];

			function Y(e, t, i) {
				e.pause();
				const s = [];
				if (i) {
					const i = D({
						source: O.Videoplayer,
						action: k.Click,
						noun: C.Pause
					}, t._player, e);
					s.push(i)
				} else if (t._isVisible) {
					const i = D({
						source: O.Videoplayer,
						action: k.Scroll,
						noun: C.Pause
					}, t._player, e);
					s.push(i)
				} else {
					const i = D({
						source: O.Videoplayer,
						action: k.Background,
						noun: C.Video
					}, t._player, e);
					s.push(i)
				}
				s.push(G(e, t));
				const n = i ? x.Manual : x.Auto,
					r = D({
						source: S.Videoplayer,
						action: j.Pause,
						noun: P.Video,
						action_info: {
							reason: n
						}
					}, t._player, e);
				return s.push(r), s
			}

			function G(e, t) {
				const i = D({
					source: S.Videoplayer,
					action: j.Watch,
					noun: P.Video
				}, t._player, e);
				return i.playback.heartbeat_duration_ms = e._stopwatch.lap().time, i
			}
			var J;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Ads = 1] = "Ads"
			}(J || (J = {}));
			let X = class extends(function(e) {
				if (z in e) return e;
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
				return t[z] = !0, t
			}(r.a)) {
				constructor() {
					super(...arguments), this.set = J.Default, this._userReplayRequest = !1, this._isVisible = !1, this._pageController = new s.a(this, e => {
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
						let s = K;
						this.set === J.Ads && (s = [...K, ..._]);
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
						noun: a,
						media: o,
						playback: l,
						action_info: d
					} = e, h = Object(W.a)({
						source: n,
						action: r,
						noun: a
					}, {
						media: o,
						playback: {
							...l,
							player_type: null !== (t = this.playerType) && void 0 !== t ? t : null
						},
						action_info: d,
						post: {
							id: this.postId,
							nsfw: null !== (i = this.postNsfw) && void 0 !== i && i,
							score: this.postScore,
							spoiler: null !== (s = this.postSpoiler) && void 0 !== s && s,
							subreddit_name: this.subredditName
						},
						subreddit: {
							name: this.subredditName
						}
					});
					this.trackEvent(h)
				}
				_runListener(e, t) {
					const i = t(e, this._mediaSession, this);
					i && this._dispatchEvents(i)
				}
				_dispatchEvents(e) {
					for (const t of e) ee(t) ? this.handleSessionEvent(t) : this.dispatchEvent(t)
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
						const e = Y(this._mediaSession, this);
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

			function Z(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.isOriginTrusted) && void 0 !== t && t
			}

			function ee(e) {
				return !!e.source && !!e.noun
			}

			function te(e) {
				return j[e]
			}
			Q([Object(a.b)({
				type: String,
				attribute: "media-origin"
			})], X.prototype, "mediaOrigin", void 0), Q([Object(a.b)({
				type: String,
				attribute: "playback-playertype"
			})], X.prototype, "playbackPlayerType", void 0), Q([Object(a.b)({
				type: Number,
				attribute: "set"
			})], X.prototype, "set", void 0), Q([Object(a.b)({
				type: String,
				attribute: "player-type"
			})], X.prototype, "playerType", void 0), Q([Object(a.b)({
				type: String,
				attribute: "post-id"
			})], X.prototype, "postId", void 0), Q([Object(a.b)({
				type: Boolean,
				attribute: "post-nsfw"
			})], X.prototype, "postNsfw", void 0), Q([Object(a.b)({
				type: Number,
				attribute: "post-score"
			})], X.prototype, "postScore", void 0), Q([Object(a.b)({
				type: Boolean,
				attribute: "post-spoiler"
			})], X.prototype, "postSpoiler", void 0), Q([Object(a.b)({
				type: String,
				attribute: "subreddit-name"
			})], X.prototype, "subredditName", void 0), Q([Object(a.b)({
				type: Boolean,
				attribute: "autoplay-event-in-view"
			})], X.prototype, "autoplayEventInView", void 0), X = Q([Object(a.a)("media-telemetry-observer")], X)
		},
		"./node_modules/@reddit/vidstack.components.foundation/dist/src/events/eventListener.js": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			var s = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");

			function n(e, t, i, n) {
				let r;

				function a() {
					var a;
					r || (r = Object(s.e)(null !== (a = null == n ? void 0 : n.target) && void 0 !== a ? a : e, t, i, n))
				}
				a(), e.addController({
					hostConnected() {
						a()
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
				return o
			}));
			var s, n = i("./node_modules/fscreen/dist/fscreen.esm.js"),
				r = i("./node_modules/@reddit/vidstack.components.foundation/dist/src/utils/events.js");
			const a = "undefined" != typeof window && "object" == typeof window.safari && (null === (s = window) || void 0 === s ? void 0 : s.safari.pushNotification);
			class o {
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
					}), a && this._disposal.add(Object(r.e)(window, "beforeunload", e => {
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

			function a(e) {
				return n(e, ["touch"])
			}

			function o(e) {
				return n(e, ["click", "mouse"])
			}
			i.d(t, "e", (function() {
				return s
			})), i.d(t, "c", (function() {
				return r
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
				n = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
				r = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
				a = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"],
				o = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
				l = "fullscreenEnabled" in o && Object.keys(s) || n[0] in o && n || r[0] in o && r || a[0] in o && a || [],
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~shreddit-player.14e3ee4dfce97dc63f3c.js.map