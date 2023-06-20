// https://www.redditstatic.com/desktop2x/3.e53b2f5f155b8722c9c5.js
// Retrieved at 6/20/2023, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[3], {
		"./node_modules/@motionone/animation/dist/Animation.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return p
			}));
			var n = o("./node_modules/@motionone/utils/dist/defaults.es.js"),
				r = o("./node_modules/@motionone/utils/dist/noop.es.js"),
				i = o("./node_modules/@motionone/utils/dist/is-easing-generator.es.js"),
				a = o("./node_modules/@motionone/utils/dist/is-easing-list.es.js");
			const s = (t, e, o) => -o * t + o * e + t;
			var l = o("./node_modules/@motionone/utils/dist/progress.es.js");

			function c(t, e) {
				const o = t[t.length - 1];
				for (let n = 1; n <= e; n++) {
					const r = Object(l.a)(0, e, n);
					t.push(s(o, 1, r))
				}
			}
			const d = (t, e, o) => {
				const n = e - t;
				return ((o - t) % n + n) % n + t
			};
			var h = o("./node_modules/@motionone/utils/dist/clamp.es.js");

			function m(t, e = function(t) {
				const e = [0];
				return c(e, t - 1), e
			}(t.length), o = r.b) {
				const n = t.length,
					i = n - e.length;
				return i > 0 && c(e, i), r => {
					let i = 0;
					for (; i < n - 2 && !(r < e[i + 1]); i++);
					let c = Object(h.a)(0, 1, Object(l.a)(e[i], e[i + 1], r));
					return c = function(t, e) {
						return Object(a.a)(t) ? t[d(0, t.length, e)] : t
					}(o, i)(c), s(t[i], t[i + 1], c)
				}
			}
			var u = o("./node_modules/@motionone/animation/dist/utils/easing.es.js");
			class p {
				constructor(t, e = [0, 1], {
					easing: o,
					duration: s = n.a.duration,
					delay: l = n.a.delay,
					endDelay: c = n.a.endDelay,
					repeat: d = n.a.repeat,
					offset: h,
					direction: p = "normal"
				} = {}) {
					if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = r.b, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((t, e) => {
							this.resolve = t, this.reject = e
						}), o = o || n.a.easing, Object(i.a)(o)) {
						const t = o.createAnimation(e);
						o = t.easing, e = t.keyframes || e, s = t.duration || s
					}
					this.repeat = d, this.easing = Object(a.a)(o) ? r.b : Object(u.a)(o), this.updateDuration(s);
					const w = m(e, h, Object(a.a)(o) ? o.map(u.a) : r.b);
					this.tick = e => {
						var o;
						l = l;
						let n = 0;
						n = void 0 !== this.pauseTime ? this.pauseTime : (e - this.startTime) * this.rate, this.t = n, n /= 1e3, n = Math.max(n - l, 0), "finished" === this.playState && void 0 === this.pauseTime && (n = this.totalDuration);
						const r = n / this.duration;
						let i = Math.floor(r),
							a = r % 1;
						!a && r >= 1 && (a = 1), 1 === a && i--;
						const s = i % 2;
						("reverse" === p || "alternate" === p && s || "alternate-reverse" === p && !s) && (a = 1 - a);
						const d = n >= this.totalDuration ? 1 : Math.min(a, 1),
							h = w(this.easing(d));
						t(h), void 0 === this.pauseTime && ("finished" === this.playState || n >= this.totalDuration + c) ? (this.playState = "finished", null === (o = this.resolve) || void 0 === o || o.call(this, h)) : "idle" !== this.playState && (this.frameRequestId = requestAnimationFrame(this.tick))
					}, this.play()
				}
				play() {
					const t = performance.now();
					this.playState = "running", void 0 !== this.pauseTime ? this.startTime = t - this.pauseTime : this.startTime || (this.startTime = t), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
				}
				pause() {
					this.playState = "paused", this.pauseTime = this.t
				}
				finish() {
					this.playState = "finished", this.tick(0)
				}
				stop() {
					var t;
					this.playState = "idle", void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId), null === (t = this.reject) || void 0 === t || t.call(this, !1)
				}
				cancel() {
					this.stop(), this.tick(this.cancelTimestamp)
				}
				reverse() {
					this.rate *= -1
				}
				commitStyles() {}
				updateDuration(t) {
					this.duration = t, this.totalDuration = t * (this.repeat + 1)
				}
				get currentTime() {
					return this.t
				}
				set currentTime(t) {
					void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = t : this.startTime = performance.now() - t / this.rate
				}
				get playbackRate() {
					return this.rate
				}
				set playbackRate(t) {
					this.rate = t
				}
			}
		},
		"./node_modules/@motionone/animation/dist/utils/easing.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return p
			}));
			var n = o("./node_modules/@motionone/utils/dist/noop.es.js");
			const r = (t, e, o) => (((1 - 3 * o + 3 * e) * t + (3 * o - 6 * e)) * t + 3 * e) * t,
				i = 1e-7,
				a = 12;

			function s(t, e, o, s) {
				if (t === e && o === s) return n.b;
				const l = e => (function(t, e, o, n, s) {
					let l, c, d = 0;
					do {
						(l = r(c = e + (o - e) / 2, n, s) - t) > 0 ? o = c : e = c
					} while (Math.abs(l) > i && ++d < a);
					return c
				})(e, 0, 1, t, o);
				return t => 0 === t || 1 === t ? t : r(l(t), e, s)
			}
			var l = o("./node_modules/@motionone/utils/dist/clamp.es.js");
			const c = (t, e = "end") => o => {
				const n = (o = "end" === e ? Math.min(o, .999) : Math.max(o, .001)) * t,
					r = "end" === e ? Math.floor(n) : Math.ceil(n);
				return Object(l.a)(0, 1, r / t)
			};
			var d = o("./node_modules/@motionone/utils/dist/is-function.es.js"),
				h = o("./node_modules/@motionone/utils/dist/is-cubic-bezier.es.js");
			const m = {
					ease: s(.25, .1, .25, 1),
					"ease-in": s(.42, 0, 1, 1),
					"ease-in-out": s(.42, 0, .58, 1),
					"ease-out": s(0, 0, .58, 1)
				},
				u = /\((.*?)\)/;

			function p(t) {
				if (Object(d.a)(t)) return t;
				if (Object(h.a)(t)) return s(...t);
				if (m[t]) return m[t];
				if (t.startsWith("steps")) {
					const e = u.exec(t);
					if (e) {
						const t = e[1].split(",");
						return c(parseFloat(t[0]), t[1].trim())
					}
				}
				return n.b
			}
		},
		"./node_modules/@motionone/dom/dist/animate/index.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return F
			}));
			var n = o("./node_modules/@motionone/animation/dist/Animation.es.js"),
				r = function() {};
			class i {
				setAnimation(t) {
					this.animation = t, null == t || t.finished.then(() => this.clearAnimation()).catch(() => {})
				}
				clearAnimation() {
					this.animation = this.generator = void 0
				}
			}
			const a = new WeakMap;

			function s(t) {
				return a.has(t) || a.set(t, {
					transforms: [],
					values: new Map
				}), a.get(t)
			}
			var l = o("./node_modules/@motionone/utils/dist/noop.es.js");
			const c = ["", "X", "Y", "Z"],
				d = {
					x: "translateX",
					y: "translateY",
					z: "translateZ"
				},
				h = {
					syntax: "<angle>",
					initialValue: "0deg",
					toDefaultUnit: t => t + "deg"
				},
				m = {
					translate: {
						syntax: "<length-percentage>",
						initialValue: "0px",
						toDefaultUnit: t => t + "px"
					},
					rotate: h,
					scale: {
						syntax: "<number>",
						initialValue: 1,
						toDefaultUnit: l.b
					},
					skew: h
				},
				u = new Map,
				p = t => `--motion-${t}`,
				w = ["x", "y", "z"];
			["translate", "scale", "rotate", "skew"].forEach(t => {
				c.forEach(e => {
					w.push(t + e), u.set(p(t + e), m[t])
				})
			});
			const g = (t, e) => w.indexOf(t) - w.indexOf(e),
				f = new Set(w),
				v = t => f.has(t),
				b = (t, e) => {
					d[e] && (e = d[e]);
					const {
						transforms: o
					} = s(t);
					! function(t, e) {
						-1 === t.indexOf(e) && t.push(e)
					}(o, e), t.style.transform = y(o)
				},
				y = t => t.sort(g).reduce(x, "").trim(),
				x = (t, e) => `${t} ${e}(var(${p(e)}))`,
				C = t => t.startsWith("--"),
				_ = new Set;
			var $ = o("./node_modules/@motionone/utils/dist/defaults.es.js"),
				k = o("./node_modules/@motionone/utils/dist/is-easing-generator.es.js"),
				E = o("./node_modules/@motionone/utils/dist/is-function.es.js"),
				A = o("./node_modules/@motionone/utils/dist/is-easing-list.es.js"),
				O = o("./node_modules/@motionone/utils/dist/is-number.es.js"),
				j = o("./node_modules/@motionone/utils/dist/time.es.js"),
				I = o("./node_modules/@motionone/utils/dist/progress.es.js"),
				P = o("./node_modules/@motionone/utils/dist/is-cubic-bezier.es.js");
			const M = (t, e) => document.createElement("div").animate(t, e),
				T = {
					cssRegisterProperty: () => "undefined" != typeof CSS && Object.hasOwnProperty.call(CSS, "registerProperty"),
					waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
					partialKeyframes: () => {
						try {
							M({
								opacity: [1]
							})
						} catch (t) {
							return !1
						}
						return !0
					},
					finished: () => Boolean(M({
						opacity: [0, 1]
					}, {
						duration: .001
					}).finished),
					linearEasing: () => {
						try {
							M({
								opacity: 0
							}, {
								easing: "linear(0, 1)"
							})
						} catch (t) {
							return !1
						}
						return !0
					}
				},
				S = {},
				R = {};
			for (const K in T) R[K] = () => (void 0 === S[K] && (S[K] = T[K]()), S[K]);
			const N = (t, e) => Object(E.a)(t) ? R.linearEasing() ? `linear(${((t,e)=>{let o="";const n=Math.round(e/.015);for(let r=0;r<n;r++)o+=t(Object(I.a)(0,n-1,r))+", ";return o.substring(0,o.length-2)})(t,e)})` : $.a.easing : Object(P.a)(t) ? L(t) : t,
				L = ([t, e, o, n]) => `cubic-bezier(${t}, ${e}, ${o}, ${n})`;
			const D = t => Array.isArray(t) ? t : [t];

			function U(t) {
				return d[t] && (t = d[t]), v(t) ? p(t) : t
			}
			const W = {
				get: (t, e) => {
					e = U(e);
					let o = C(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
					if (!o && 0 !== o) {
						const t = u.get(e);
						t && (o = t.initialValue)
					}
					return o
				},
				set: (t, e, o) => {
					e = U(e), C(e) ? t.style.setProperty(e, o) : t.style[e] = o
				}
			};
			var B = o("./node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js");
			const H = t => "string" == typeof t;

			function Z(t, e, o, n = {}, r) {
				const a = window.__MOTION_DEV_TOOLS_RECORD,
					c = !1 !== n.record && a;
				let d, {
					duration: h = $.a.duration,
					delay: m = $.a.delay,
					endDelay: p = $.a.endDelay,
					repeat: w = $.a.repeat,
					easing: g = $.a.easing,
					persist: f = !1,
					direction: y,
					offset: x,
					allowWebkitAcceleration: I = !1
				} = n;
				const P = s(t),
					M = v(e);
				let T = R.waapi();
				M && b(t, e);
				const S = U(e),
					L = function(t, e) {
						return t.has(e) || t.set(e, new i), t.get(e)
					}(P.values, S),
					Z = u.get(S);
				return Object(B.a)(L.animation, !(Object(k.a)(g) && L.generator) && !1 !== n.record), () => {
					const i = () => {
						var e, o;
						return null !== (o = null !== (e = W.get(t, S)) && void 0 !== e ? e : null == Z ? void 0 : Z.initialValue) && void 0 !== o ? o : 0
					};
					let s = function(t, e) {
						for (let o = 0; o < t.length; o++) null === t[o] && (t[o] = o ? t[o - 1] : e());
						return t
					}(D(o), i);
					const v = function(t, e) {
						var o;
						let n = (null == e ? void 0 : e.toDefaultUnit) || l.b;
						const r = t[t.length - 1];
						if (H(r)) {
							const t = (null === (o = r.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === o ? void 0 : o[2]) || "";
							t && (n = e => e + t)
						}
						return n
					}(s, Z);
					if (Object(k.a)(g)) {
						const t = g.createAnimation(s, "opacity" !== e, i, S, L);
						g = t.easing, s = t.keyframes || s, h = t.duration || h
					}
					if (C(S) && (R.cssRegisterProperty() ? function(t) {
							if (!_.has(t)) {
								_.add(t);
								try {
									const {
										syntax: e,
										initialValue: o
									} = u.has(t) ? u.get(t) : {};
									CSS.registerProperty({
										name: t,
										inherits: !1,
										syntax: e,
										initialValue: o
									})
								} catch (e) {}
							}
						}(S) : T = !1), M && !R.linearEasing() && (Object(E.a)(g) || Object(A.a)(g) && g.some(E.a)) && (T = !1), T) {
						Z && (s = s.map(t => Object(O.a)(t) ? Z.toDefaultUnit(t) : t)), 1 !== s.length || R.partialKeyframes() && !c || s.unshift(i());
						const e = {
							delay: j.a.ms(m),
							duration: j.a.ms(h),
							endDelay: j.a.ms(p),
							easing: Object(A.a)(g) ? void 0 : N(g, h),
							direction: y,
							iterations: w + 1,
							fill: "both"
						};
						(d = t.animate({
							[S]: s,
							offset: x,
							easing: Object(A.a)(g) ? g.map(t => N(t, h)) : void 0
						}, e)).finished || (d.finished = new Promise((t, e) => {
							d.onfinish = t, d.oncancel = e
						}));
						const o = s[s.length - 1];
						d.finished.then(() => {
							f || (W.set(t, S, o), d.cancel())
						}).catch(l.a), I || (d.playbackRate = 1.000001)
					} else if (r && M) 1 === (s = s.map(t => "string" == typeof t ? parseFloat(t) : t)).length && s.unshift(parseFloat(i())), d = new r(e => {
						W.set(t, S, v ? v(e) : e)
					}, s, Object.assign(Object.assign({}, n), {
						duration: h,
						easing: g
					}));
					else {
						const e = s[s.length - 1];
						W.set(t, S, Z && Object(O.a)(e) ? Z.toDefaultUnit(e) : e)
					}
					return c && a(t, e, s, {
						duration: h,
						delay: m,
						easing: g,
						repeat: w,
						offset: x
					}, "motion-one"), L.setAnimation(d), d
				}
			}
			const q = (t, e) => t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);
			var z = o("./node_modules/@motionone/dom/dist/animate/utils/controls.es.js");
			o("./node_modules/@motionone/animation/dist/utils/easing.es.js");

			function V(t, e, o) {
				return Object(E.a)(t) ? t(e, o) : t
			}
			const F = (G = n.a, function(t, e, o = {}) {
				const n = (t = function(t, e) {
					var o;
					return "string" == typeof t ? e ? (null !== (o = e[t]) && void 0 !== o || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
				}(t)).length;
				r(Boolean(n), "No valid element provided."), r(Boolean(e), "No keyframes defined.");
				const i = [];
				for (let r = 0; r < n; r++) {
					const a = t[r];
					for (const t in e) {
						const s = q(o, t);
						s.delay = V(s.delay, r, n);
						const l = Z(a, t, e[t], s, G);
						i.push(l)
					}
				}
				return Object(z.a)(i, o, o.duration)
			});
			var G
		},
		"./node_modules/@motionone/dom/dist/animate/utils/controls.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return l
			}));
			var n = o("./node_modules/@motionone/utils/dist/defaults.es.js"),
				r = o("./node_modules/@motionone/utils/dist/time.es.js"),
				i = o("./node_modules/@motionone/utils/dist/noop.es.js"),
				a = o("./node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js");
			const s = t => t(),
				l = (t, e, o = n.a.duration) => new Proxy({
					animations: t.map(s).filter(Boolean),
					duration: o,
					options: e
				}, c),
				c = {
					get: (t, e) => {
						const o = (t => t.animations[0])(t);
						switch (e) {
							case "duration":
								return t.duration;
							case "currentTime":
								return r.a.s((null == o ? void 0 : o[e]) || 0);
							case "playbackRate":
							case "playState":
								return null == o ? void 0 : o[e];
							case "finished":
								return t.finished || (t.finished = Promise.all(t.animations.map(d)).catch(i.a)), t.finished;
							case "stop":
								return () => {
									t.animations.forEach(t => Object(a.a)(t))
								};
							case "forEachNative":
								return e => {
									t.animations.forEach(o => e(o, t))
								};
							default:
								return void 0 === (null == o ? void 0 : o[e]) ? void 0 : () => t.animations.forEach(t => t[e]())
						}
					},
					set: (t, e, o) => {
						switch (e) {
							case "currentTime":
								o = r.a.ms(o);
							case "currentTime":
							case "playbackRate":
								for (let n = 0; n < t.animations.length; n++) t.animations[n][e] = o;
								return !0
						}
						return !1
					}
				},
				d = t => t.finished
		},
		"./node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js": function(t, e, o) {
			"use strict";

			function n(t, e = !0) {
				if (t && "finished" !== t.playState) try {
					t.stop ? t.stop() : (e && t.commitStyles(), t.cancel())
				} catch (o) {}
			}
			o.d(e, "a", (function() {
				return n
			}))
		},
		"./node_modules/@motionone/utils/dist/clamp.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			}));
			const n = (t, e, o) => Math.min(Math.max(o, t), e)
		},
		"./node_modules/@motionone/utils/dist/defaults.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			}));
			const n = {
				duration: .3,
				delay: 0,
				endDelay: 0,
				repeat: 0,
				easing: "ease"
			}
		},
		"./node_modules/@motionone/utils/dist/is-cubic-bezier.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return r
			}));
			var n = o("./node_modules/@motionone/utils/dist/is-number.es.js");
			const r = t => Array.isArray(t) && Object(n.a)(t[0])
		},
		"./node_modules/@motionone/utils/dist/is-easing-generator.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			}));
			const n = t => "object" == typeof t && Boolean(t.createAnimation)
		},
		"./node_modules/@motionone/utils/dist/is-easing-list.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return r
			}));
			var n = o("./node_modules/@motionone/utils/dist/is-number.es.js");
			const r = t => Array.isArray(t) && !Object(n.a)(t[0])
		},
		"./node_modules/@motionone/utils/dist/is-function.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			}));
			const n = t => "function" == typeof t
		},
		"./node_modules/@motionone/utils/dist/is-number.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			}));
			const n = t => "number" == typeof t
		},
		"./node_modules/@motionone/utils/dist/noop.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			})), o.d(e, "b", (function() {
				return r
			}));
			const n = () => {},
				r = t => t
		},
		"./node_modules/@motionone/utils/dist/progress.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			}));
			const n = (t, e, o) => e - t == 0 ? 1 : (o - t) / (e - t)
		},
		"./node_modules/@motionone/utils/dist/time.es.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			}));
			const n = {
				ms: t => 1e3 * t,
				s: t => t / 1e3
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/@web3modal/ui/dist/index.es.js": function(t, e, o) {
			"use strict";
			o.r(e), o.d(e, "W3mAccountButton", (function() {
				return mn
			})), o.d(e, "W3mConnectButton", (function() {
				return Hn
			})), o.d(e, "W3mCoreButton", (function() {
				return Jn
			})), o.d(e, "W3mModal", (function() {
				return pr
			})), o.d(e, "W3mNetworkSwitch", (function() {
				return br
			})), o.d(e, "W3mQrCode", (function() {
				return uo
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = window,
				r = n.ShadowRoot && (void 0 === n.ShadyCSS || n.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
				i = Symbol(),
				a = new WeakMap;
			class s {
				constructor(t, e, o) {
					if (this._$cssResult$ = !0, o !== i) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
					this.cssText = t, this.t = e
				}
				get styleSheet() {
					let t = this.o;
					const e = this.t;
					if (r && void 0 === t) {
						const o = void 0 !== e && 1 === e.length;
						o && (t = a.get(e)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), o && a.set(e, t))
					}
					return t
				}
				toString() {
					return this.cssText
				}
			}
			const l = (t, e) => {
					r ? t.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach(e => {
						const o = document.createElement("style"),
							r = n.litNonce;
						void 0 !== r && o.setAttribute("nonce", r), o.textContent = e.cssText, t.appendChild(o)
					})
				},
				c = r ? t => t : t => t instanceof CSSStyleSheet ? (t => {
					let e = "";
					for (const o of t.cssRules) e += o.cssText;
					return (t => new s("string" == typeof t ? t : t + "", void 0, i))(e)
				})(t) : t;
			var d;
			const h = window,
				m = h.trustedTypes,
				u = m ? m.emptyScript : "",
				p = h.reactiveElementPolyfillSupport,
				w = {
					toAttribute(t, e) {
						switch (e) {
							case Boolean:
								t = t ? u : null;
								break;
							case Object:
							case Array:
								t = null == t ? t : JSON.stringify(t)
						}
						return t
					},
					fromAttribute(t, e) {
						let o = t;
						switch (e) {
							case Boolean:
								o = null !== t;
								break;
							case Number:
								o = null === t ? null : Number(t);
								break;
							case Object:
							case Array:
								try {
									o = JSON.parse(t)
								} catch (t) {
									o = null
								}
						}
						return o
					}
				},
				g = (t, e) => e !== t && (e == e || t == t),
				f = {
					attribute: !0,
					type: String,
					converter: w,
					reflect: !1,
					hasChanged: g
				},
				v = "finalized";
			class b extends HTMLElement {
				constructor() {
					super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u()
				}
				static addInitializer(t) {
					var e;
					this.finalize(), (null !== (e = this.h) && void 0 !== e ? e : this.h = []).push(t)
				}
				static get observedAttributes() {
					this.finalize();
					const t = [];
					return this.elementProperties.forEach((e, o) => {
						const n = this._$Ep(o, e);
						void 0 !== n && (this._$Ev.set(n, o), t.push(n))
					}), t
				}
				static createProperty(t, e = f) {
					if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
						const o = "symbol" == typeof t ? Symbol() : "__" + t,
							n = this.getPropertyDescriptor(t, o, e);
						void 0 !== n && Object.defineProperty(this.prototype, t, n)
					}
				}
				static getPropertyDescriptor(t, e, o) {
					return {
						get() {
							return this[e]
						},
						set(n) {
							const r = this[t];
							this[e] = n, this.requestUpdate(t, r, o)
						},
						configurable: !0,
						enumerable: !0
					}
				}
				static getPropertyOptions(t) {
					return this.elementProperties.get(t) || f
				}
				static finalize() {
					if (this.hasOwnProperty(v)) return !1;
					this[v] = !0;
					const t = Object.getPrototypeOf(this);
					if (t.finalize(), void 0 !== t.h && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
						const t = this.properties,
							e = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
						for (const o of e) this.createProperty(o, t[o])
					}
					return this.elementStyles = this.finalizeStyles(this.styles), !0
				}
				static finalizeStyles(t) {
					const e = [];
					if (Array.isArray(t)) {
						const o = new Set(t.flat(1 / 0).reverse());
						for (const t of o) e.unshift(c(t))
					} else void 0 !== t && e.push(c(t));
					return e
				}
				static _$Ep(t, e) {
					const o = e.attribute;
					return !1 === o ? void 0 : "string" == typeof o ? o : "string" == typeof t ? t.toLowerCase() : void 0
				}
				u() {
					var t;
					this._$E_ = new Promise(t => this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach(t => t(this))
				}
				addController(t) {
					var e, o;
					(null !== (e = this._$ES) && void 0 !== e ? e : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (o = t.hostConnected) || void 0 === o || o.call(t))
				}
				removeController(t) {
					var e;
					null === (e = this._$ES) || void 0 === e || e.splice(this._$ES.indexOf(t) >>> 0, 1)
				}
				_$Eg() {
					this.constructor.elementProperties.forEach((t, e) => {
						this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e])
					})
				}
				createRenderRoot() {
					var t;
					const e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
					return l(e, this.constructor.elementStyles), e
				}
				connectedCallback() {
					var t;
					void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach(t => {
						var e;
						return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
					})
				}
				enableUpdating(t) {}
				disconnectedCallback() {
					var t;
					null === (t = this._$ES) || void 0 === t || t.forEach(t => {
						var e;
						return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
					})
				}
				attributeChangedCallback(t, e, o) {
					this._$AK(t, o)
				}
				_$EO(t, e, o = f) {
					var n;
					const r = this.constructor._$Ep(t, o);
					if (void 0 !== r && !0 === o.reflect) {
						const i = (void 0 !== (null === (n = o.converter) || void 0 === n ? void 0 : n.toAttribute) ? o.converter : w).toAttribute(e, o.type);
						this._$El = t, null == i ? this.removeAttribute(r) : this.setAttribute(r, i), this._$El = null
					}
				}
				_$AK(t, e) {
					var o;
					const n = this.constructor,
						r = n._$Ev.get(t);
					if (void 0 !== r && this._$El !== r) {
						const t = n.getPropertyOptions(r),
							i = "function" == typeof t.converter ? {
								fromAttribute: t.converter
							} : void 0 !== (null === (o = t.converter) || void 0 === o ? void 0 : o.fromAttribute) ? t.converter : w;
						this._$El = r, this[r] = i.fromAttribute(e, t.type), this._$El = null
					}
				}
				requestUpdate(t, e, o) {
					let n = !0;
					void 0 !== t && (((o = o || this.constructor.getPropertyOptions(t)).hasChanged || g)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), !0 === o.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, o))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej())
				}
				async _$Ej() {
					this.isUpdatePending = !0;
					try {
						await this._$E_
					} catch (t) {
						Promise.reject(t)
					}
					const t = this.scheduleUpdate();
					return null != t && await t, !this.isUpdatePending
				}
				scheduleUpdate() {
					return this.performUpdate()
				}
				performUpdate() {
					var t;
					if (!this.isUpdatePending) return;
					this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, e) => this[e] = t), this._$Ei = void 0);
					let e = !1;
					const o = this._$AL;
					try {
						(e = this.shouldUpdate(o)) ? (this.willUpdate(o), null === (t = this._$ES) || void 0 === t || t.forEach(t => {
							var e;
							return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
						}), this.update(o)) : this._$Ek()
					} catch (t) {
						throw e = !1, this._$Ek(), t
					}
					e && this._$AE(o)
				}
				willUpdate(t) {}
				_$AE(t) {
					var e;
					null === (e = this._$ES) || void 0 === e || e.forEach(t => {
						var e;
						return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
					}), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t)
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
				shouldUpdate(t) {
					return !0
				}
				update(t) {
					void 0 !== this._$EC && (this._$EC.forEach((t, e) => this._$EO(e, this[e], t)), this._$EC = void 0), this._$Ek()
				}
				updated(t) {}
				firstUpdated(t) {}
			}
			var y;
			b[v] = !0, b.elementProperties = new Map, b.elementStyles = [], b.shadowRootOptions = {
				mode: "open"
			}, null == p || p({
				ReactiveElement: b
			}), (null !== (d = h.reactiveElementVersions) && void 0 !== d ? d : h.reactiveElementVersions = []).push("1.6.2");
			const x = window,
				C = x.trustedTypes,
				_ = C ? C.createPolicy("lit-html", {
					createHTML: t => t
				}) : void 0,
				$ = "$lit$",
				k = `lit$${(Math.random()+"").slice(9)}$`,
				E = "?" + k,
				A = `<${E}>`,
				O = document,
				j = () => O.createComment(""),
				I = t => null === t || "object" != typeof t && "function" != typeof t,
				P = Array.isArray,
				M = t => P(t) || "function" == typeof(null == t ? void 0 : t[Symbol.iterator]),
				T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
				S = /-->/g,
				R = />/g,
				N = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
				L = /'/g,
				D = /"/g,
				U = /^(?:script|style|textarea|title)$/i,
				W = t => (e, ...o) => ({
					_$litType$: t,
					strings: e,
					values: o
				}),
				B = W(1),
				H = W(2),
				Z = Symbol.for("lit-noChange"),
				q = Symbol.for("lit-nothing"),
				z = new WeakMap,
				V = O.createTreeWalker(O, 129, null, !1),
				F = (t, e) => {
					const o = t.length - 1,
						n = [];
					let r, i = 2 === e ? "<svg>" : "",
						a = T;
					for (let l = 0; l < o; l++) {
						const e = t[l];
						let o, s, c = -1,
							d = 0;
						for (; d < e.length && (a.lastIndex = d, null !== (s = a.exec(e)));) d = a.lastIndex, a === T ? "!--" === s[1] ? a = S : void 0 !== s[1] ? a = R : void 0 !== s[2] ? (U.test(s[2]) && (r = RegExp("</" + s[2], "g")), a = N) : void 0 !== s[3] && (a = N) : a === N ? ">" === s[0] ? (a = null != r ? r : T, c = -1) : void 0 === s[1] ? c = -2 : (c = a.lastIndex - s[2].length, o = s[1], a = void 0 === s[3] ? N : '"' === s[3] ? D : L) : a === D || a === L ? a = N : a === S || a === R ? a = T : (a = N, r = void 0);
						const h = a === N && t[l + 1].startsWith("/>") ? " " : "";
						i += a === T ? e + A : c >= 0 ? (n.push(o), e.slice(0, c) + $ + e.slice(c) + k + h) : e + k + (-2 === c ? (n.push(void 0), l) : h)
					}
					const s = i + (t[o] || "<?>") + (2 === e ? "</svg>" : "");
					if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
					return [void 0 !== _ ? _.createHTML(s) : s, n]
				};
			class G {
				constructor({
					strings: t,
					_$litType$: e
				}, o) {
					let n;
					this.parts = [];
					let r = 0,
						i = 0;
					const a = t.length - 1,
						s = this.parts,
						[l, c] = F(t, e);
					if (this.el = G.createElement(l, o), V.currentNode = this.el.content, 2 === e) {
						const t = this.el.content,
							e = t.firstChild;
						e.remove(), t.append(...e.childNodes)
					}
					for (; null !== (n = V.nextNode()) && s.length < a;) {
						if (1 === n.nodeType) {
							if (n.hasAttributes()) {
								const t = [];
								for (const e of n.getAttributeNames())
									if (e.endsWith($) || e.startsWith(k)) {
										const o = c[i++];
										if (t.push(e), void 0 !== o) {
											const t = n.getAttribute(o.toLowerCase() + $).split(k),
												e = /([.?@])?(.*)/.exec(o);
											s.push({
												type: 1,
												index: r,
												name: e[2],
												strings: t,
												ctor: "." === e[1] ? X : "?" === e[1] ? et : "@" === e[1] ? ot : Q
											})
										} else s.push({
											type: 6,
											index: r
										})
									} for (const e of t) n.removeAttribute(e)
							}
							if (U.test(n.tagName)) {
								const t = n.textContent.split(k),
									e = t.length - 1;
								if (e > 0) {
									n.textContent = C ? C.emptyScript : "";
									for (let o = 0; o < e; o++) n.append(t[o], j()), V.nextNode(), s.push({
										type: 2,
										index: ++r
									});
									n.append(t[e], j())
								}
							}
						} else if (8 === n.nodeType)
							if (n.data === E) s.push({
								type: 2,
								index: r
							});
							else {
								let t = -1;
								for (; - 1 !== (t = n.data.indexOf(k, t + 1));) s.push({
									type: 7,
									index: r
								}), t += k.length - 1
							} r++
					}
				}
				static createElement(t, e) {
					const o = O.createElement("template");
					return o.innerHTML = t, o
				}
			}

			function K(t, e, o = t, n) {
				var r, i, a, s;
				if (e === Z) return e;
				let l = void 0 !== n ? null === (r = o._$Co) || void 0 === r ? void 0 : r[n] : o._$Cl;
				const c = I(e) ? void 0 : e._$litDirective$;
				return (null == l ? void 0 : l.constructor) !== c && (null === (i = null == l ? void 0 : l._$AO) || void 0 === i || i.call(l, !1), void 0 === c ? l = void 0 : (l = new c(t))._$AT(t, o, n), void 0 !== n ? (null !== (a = (s = o)._$Co) && void 0 !== a ? a : s._$Co = [])[n] = l : o._$Cl = l), void 0 !== l && (e = K(t, l._$AS(t, e.values), l, n)), e
			}
			class Y {
				constructor(t, e) {
					this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e
				}
				get parentNode() {
					return this._$AM.parentNode
				}
				get _$AU() {
					return this._$AM._$AU
				}
				u(t) {
					var e;
					const {
						el: {
							content: o
						},
						parts: n
					} = this._$AD, r = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : O).importNode(o, !0);
					V.currentNode = r;
					let i = V.nextNode(),
						a = 0,
						s = 0,
						l = n[0];
					for (; void 0 !== l;) {
						if (a === l.index) {
							let e;
							2 === l.type ? e = new J(i, i.nextSibling, this, t) : 1 === l.type ? e = new l.ctor(i, l.name, l.strings, this, t) : 6 === l.type && (e = new nt(i, this, t)), this._$AV.push(e), l = n[++s]
						}
						a !== (null == l ? void 0 : l.index) && (i = V.nextNode(), a++)
					}
					return V.currentNode = O, r
				}
				v(t) {
					let e = 0;
					for (const o of this._$AV) void 0 !== o && (void 0 !== o.strings ? (o._$AI(t, o, e), e += o.strings.length - 2) : o._$AI(t[e])), e++
				}
			}
			class J {
				constructor(t, e, o, n) {
					var r;
					this.type = 2, this._$AH = q, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = o, this.options = n, this._$Cp = null === (r = null == n ? void 0 : n.isConnected) || void 0 === r || r
				}
				get _$AU() {
					var t, e;
					return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$Cp
				}
				get parentNode() {
					let t = this._$AA.parentNode;
					const e = this._$AM;
					return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode), t
				}
				get startNode() {
					return this._$AA
				}
				get endNode() {
					return this._$AB
				}
				_$AI(t, e = this) {
					t = K(this, t, e), I(t) ? t === q || null == t || "" === t ? (this._$AH !== q && this._$AR(), this._$AH = q) : t !== this._$AH && t !== Z && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : M(t) ? this.T(t) : this._(t)
				}
				k(t) {
					return this._$AA.parentNode.insertBefore(t, this._$AB)
				}
				$(t) {
					this._$AH !== t && (this._$AR(), this._$AH = this.k(t))
				}
				_(t) {
					this._$AH !== q && I(this._$AH) ? this._$AA.nextSibling.data = t : this.$(O.createTextNode(t)), this._$AH = t
				}
				g(t) {
					var e;
					const {
						values: o,
						_$litType$: n
					} = t, r = "number" == typeof n ? this._$AC(t) : (void 0 === n.el && (n.el = G.createElement(n.h, this.options)), n);
					if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === r) this._$AH.v(o);
					else {
						const t = new Y(r, this),
							e = t.u(this.options);
						t.v(o), this.$(e), this._$AH = t
					}
				}
				_$AC(t) {
					let e = z.get(t.strings);
					return void 0 === e && z.set(t.strings, e = new G(t)), e
				}
				T(t) {
					P(this._$AH) || (this._$AH = [], this._$AR());
					const e = this._$AH;
					let o, n = 0;
					for (const r of t) n === e.length ? e.push(o = new J(this.k(j()), this.k(j()), this, this.options)) : o = e[n], o._$AI(r), n++;
					n < e.length && (this._$AR(o && o._$AB.nextSibling, n), e.length = n)
				}
				_$AR(t = this._$AA.nextSibling, e) {
					var o;
					for (null === (o = this._$AP) || void 0 === o || o.call(this, !1, !0, e); t && t !== this._$AB;) {
						const e = t.nextSibling;
						t.remove(), t = e
					}
				}
				setConnected(t) {
					var e;
					void 0 === this._$AM && (this._$Cp = t, null === (e = this._$AP) || void 0 === e || e.call(this, t))
				}
			}
			class Q {
				constructor(t, e, o, n, r) {
					this.type = 1, this._$AH = q, this._$AN = void 0, this.element = t, this.name = e, this._$AM = n, this.options = r, o.length > 2 || "" !== o[0] || "" !== o[1] ? (this._$AH = Array(o.length - 1).fill(new String), this.strings = o) : this._$AH = q
				}
				get tagName() {
					return this.element.tagName
				}
				get _$AU() {
					return this._$AM._$AU
				}
				_$AI(t, e = this, o, n) {
					const r = this.strings;
					let i = !1;
					if (void 0 === r) t = K(this, t, e, 0), (i = !I(t) || t !== this._$AH && t !== Z) && (this._$AH = t);
					else {
						const n = t;
						let a, s;
						for (t = r[0], a = 0; a < r.length - 1; a++)(s = K(this, n[o + a], e, a)) === Z && (s = this._$AH[a]), i || (i = !I(s) || s !== this._$AH[a]), s === q ? t = q : t !== q && (t += (null != s ? s : "") + r[a + 1]), this._$AH[a] = s
					}
					i && !n && this.j(t)
				}
				j(t) {
					t === q ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
				}
			}
			class X extends Q {
				constructor() {
					super(...arguments), this.type = 3
				}
				j(t) {
					this.element[this.name] = t === q ? void 0 : t
				}
			}
			const tt = C ? C.emptyScript : "";
			class et extends Q {
				constructor() {
					super(...arguments), this.type = 4
				}
				j(t) {
					t && t !== q ? this.element.setAttribute(this.name, tt) : this.element.removeAttribute(this.name)
				}
			}
			class ot extends Q {
				constructor(t, e, o, n, r) {
					super(t, e, o, n, r), this.type = 5
				}
				_$AI(t, e = this) {
					var o;
					if ((t = null !== (o = K(this, t, e, 0)) && void 0 !== o ? o : q) === Z) return;
					const n = this._$AH,
						r = t === q && n !== q || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive,
						i = t !== q && (n === q || r);
					r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, t), this._$AH = t
				}
				handleEvent(t) {
					var e, o;
					"function" == typeof this._$AH ? this._$AH.call(null !== (o = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== o ? o : this.element, t) : this._$AH.handleEvent(t)
				}
			}
			class nt {
				constructor(t, e, o) {
					this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = o
				}
				get _$AU() {
					return this._$AM._$AU
				}
				_$AI(t) {
					K(this, t)
				}
			}
			const rt = x.litHtmlPolyfillSupport;
			null == rt || rt(G, J), (null !== (y = x.litHtmlVersions) && void 0 !== y ? y : x.litHtmlVersions = []).push("2.7.4");
			const it = (t, e, o) => {
					var n, r;
					const i = null !== (n = null == o ? void 0 : o.renderBefore) && void 0 !== n ? n : e;
					let a = i._$litPart$;
					if (void 0 === a) {
						const t = null !== (r = null == o ? void 0 : o.renderBefore) && void 0 !== r ? r : null;
						i._$litPart$ = a = new J(e.insertBefore(j(), t), t, void 0, null != o ? o : {})
					}
					return a._$AI(t), a
				},
				at = window,
				st = at.ShadowRoot && (void 0 === at.ShadyCSS || at.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
				lt = Symbol(),
				ct = new WeakMap;
			class dt {
				constructor(t, e, o) {
					if (this._$cssResult$ = !0, o !== lt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
					this.cssText = t, this.t = e
				}
				get styleSheet() {
					let t = this.o;
					const e = this.t;
					if (st && void 0 === t) {
						const o = void 0 !== e && 1 === e.length;
						o && (t = ct.get(e)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), o && ct.set(e, t))
					}
					return t
				}
				toString() {
					return this.cssText
				}
			}
			const ht = (t, ...e) => {
					const o = 1 === t.length ? t[0] : e.reduce((e, o, n) => e + (t => {
						if (!0 === t._$cssResult$) return t.cssText;
						if ("number" == typeof t) return t;
						throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
					})(o) + t[n + 1], t[0]);
					return new dt(o, t, lt)
				},
				mt = (t, e) => {
					st ? t.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach(e => {
						const o = document.createElement("style"),
							n = at.litNonce;
						void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, t.appendChild(o)
					})
				},
				ut = st ? t => t : t => t instanceof CSSStyleSheet ? (t => {
					let e = "";
					for (const o of t.cssRules) e += o.cssText;
					return (t => new dt("string" == typeof t ? t : t + "", void 0, lt))(e)
				})(t) : t;
			var pt;
			const wt = window,
				gt = wt.trustedTypes,
				ft = gt ? gt.emptyScript : "",
				vt = wt.reactiveElementPolyfillSupport,
				bt = {
					toAttribute(t, e) {
						switch (e) {
							case Boolean:
								t = t ? ft : null;
								break;
							case Object:
							case Array:
								t = null == t ? t : JSON.stringify(t)
						}
						return t
					},
					fromAttribute(t, e) {
						let o = t;
						switch (e) {
							case Boolean:
								o = null !== t;
								break;
							case Number:
								o = null === t ? null : Number(t);
								break;
							case Object:
							case Array:
								try {
									o = JSON.parse(t)
								} catch (t) {
									o = null
								}
						}
						return o
					}
				},
				yt = (t, e) => e !== t && (e == e || t == t),
				xt = {
					attribute: !0,
					type: String,
					converter: bt,
					reflect: !1,
					hasChanged: yt
				};
			class Ct extends HTMLElement {
				constructor() {
					super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u()
				}
				static addInitializer(t) {
					var e;
					null !== (e = this.h) && void 0 !== e || (this.h = []), this.h.push(t)
				}
				static get observedAttributes() {
					this.finalize();
					const t = [];
					return this.elementProperties.forEach((e, o) => {
						const n = this._$Ep(o, e);
						void 0 !== n && (this._$Ev.set(n, o), t.push(n))
					}), t
				}
				static createProperty(t, e = xt) {
					if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
						const o = "symbol" == typeof t ? Symbol() : "__" + t,
							n = this.getPropertyDescriptor(t, o, e);
						void 0 !== n && Object.defineProperty(this.prototype, t, n)
					}
				}
				static getPropertyDescriptor(t, e, o) {
					return {
						get() {
							return this[e]
						},
						set(n) {
							const r = this[t];
							this[e] = n, this.requestUpdate(t, r, o)
						},
						configurable: !0,
						enumerable: !0
					}
				}
				static getPropertyOptions(t) {
					return this.elementProperties.get(t) || xt
				}
				static finalize() {
					if (this.hasOwnProperty("finalized")) return !1;
					this.finalized = !0;
					const t = Object.getPrototypeOf(this);
					if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
						const t = this.properties,
							e = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
						for (const o of e) this.createProperty(o, t[o])
					}
					return this.elementStyles = this.finalizeStyles(this.styles), !0
				}
				static finalizeStyles(t) {
					const e = [];
					if (Array.isArray(t)) {
						const o = new Set(t.flat(1 / 0).reverse());
						for (const t of o) e.unshift(ut(t))
					} else void 0 !== t && e.push(ut(t));
					return e
				}
				static _$Ep(t, e) {
					const o = e.attribute;
					return !1 === o ? void 0 : "string" == typeof o ? o : "string" == typeof t ? t.toLowerCase() : void 0
				}
				u() {
					var t;
					this._$E_ = new Promise(t => this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach(t => t(this))
				}
				addController(t) {
					var e, o;
					(null !== (e = this._$ES) && void 0 !== e ? e : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (o = t.hostConnected) || void 0 === o || o.call(t))
				}
				removeController(t) {
					var e;
					null === (e = this._$ES) || void 0 === e || e.splice(this._$ES.indexOf(t) >>> 0, 1)
				}
				_$Eg() {
					this.constructor.elementProperties.forEach((t, e) => {
						this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e])
					})
				}
				createRenderRoot() {
					var t;
					const e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
					return mt(e, this.constructor.elementStyles), e
				}
				connectedCallback() {
					var t;
					void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach(t => {
						var e;
						return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
					})
				}
				enableUpdating(t) {}
				disconnectedCallback() {
					var t;
					null === (t = this._$ES) || void 0 === t || t.forEach(t => {
						var e;
						return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
					})
				}
				attributeChangedCallback(t, e, o) {
					this._$AK(t, o)
				}
				_$EO(t, e, o = xt) {
					var n;
					const r = this.constructor._$Ep(t, o);
					if (void 0 !== r && !0 === o.reflect) {
						const i = (void 0 !== (null === (n = o.converter) || void 0 === n ? void 0 : n.toAttribute) ? o.converter : bt).toAttribute(e, o.type);
						this._$El = t, null == i ? this.removeAttribute(r) : this.setAttribute(r, i), this._$El = null
					}
				}
				_$AK(t, e) {
					var o;
					const n = this.constructor,
						r = n._$Ev.get(t);
					if (void 0 !== r && this._$El !== r) {
						const t = n.getPropertyOptions(r),
							i = "function" == typeof t.converter ? {
								fromAttribute: t.converter
							} : void 0 !== (null === (o = t.converter) || void 0 === o ? void 0 : o.fromAttribute) ? t.converter : bt;
						this._$El = r, this[r] = i.fromAttribute(e, t.type), this._$El = null
					}
				}
				requestUpdate(t, e, o) {
					let n = !0;
					void 0 !== t && (((o = o || this.constructor.getPropertyOptions(t)).hasChanged || yt)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), !0 === o.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, o))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej())
				}
				async _$Ej() {
					this.isUpdatePending = !0;
					try {
						await this._$E_
					} catch (t) {
						Promise.reject(t)
					}
					const t = this.scheduleUpdate();
					return null != t && await t, !this.isUpdatePending
				}
				scheduleUpdate() {
					return this.performUpdate()
				}
				performUpdate() {
					var t;
					if (!this.isUpdatePending) return;
					this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, e) => this[e] = t), this._$Ei = void 0);
					let e = !1;
					const o = this._$AL;
					try {
						(e = this.shouldUpdate(o)) ? (this.willUpdate(o), null === (t = this._$ES) || void 0 === t || t.forEach(t => {
							var e;
							return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
						}), this.update(o)) : this._$Ek()
					} catch (t) {
						throw e = !1, this._$Ek(), t
					}
					e && this._$AE(o)
				}
				willUpdate(t) {}
				_$AE(t) {
					var e;
					null === (e = this._$ES) || void 0 === e || e.forEach(t => {
						var e;
						return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
					}), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t)
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
				shouldUpdate(t) {
					return !0
				}
				update(t) {
					void 0 !== this._$EC && (this._$EC.forEach((t, e) => this._$EO(e, this[e], t)), this._$EC = void 0), this._$Ek()
				}
				updated(t) {}
				firstUpdated(t) {}
			}
			var _t, $t;
			Ct.finalized = !0, Ct.elementProperties = new Map, Ct.elementStyles = [], Ct.shadowRootOptions = {
				mode: "open"
			}, null == vt || vt({
				ReactiveElement: Ct
			}), (null !== (pt = wt.reactiveElementVersions) && void 0 !== pt ? pt : wt.reactiveElementVersions = []).push("1.4.1");
			class kt extends Ct {
				constructor() {
					super(...arguments), this.renderOptions = {
						host: this
					}, this._$Do = void 0
				}
				createRenderRoot() {
					var t, e;
					const o = super.createRenderRoot();
					return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = o.firstChild), o
				}
				update(t) {
					const e = this.render();
					this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = it(e, this.renderRoot, this.renderOptions)
				}
				connectedCallback() {
					var t;
					super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0)
				}
				disconnectedCallback() {
					var t;
					super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1)
				}
				render() {
					return Z
				}
			}
			kt.finalized = !0, kt._$litElement$ = !0, null === (_t = globalThis.litElementHydrateSupport) || void 0 === _t || _t.call(globalThis, {
				LitElement: kt
			});
			const Et = globalThis.litElementPolyfillSupport;
			null == Et || Et({
				LitElement: kt
			});
			(null !== ($t = globalThis.litElementVersions) && void 0 !== $t ? $t : globalThis.litElementVersions = []).push("3.3.2");
			const At = t => e => "function" == typeof e ? ((t, e) => (customElements.define(t, e), e))(t, e) : ((t, e) => {
					const {
						kind: o,
						elements: n
					} = e;
					return {
						kind: o,
						elements: n,
						finisher(e) {
							customElements.define(t, e)
						}
					}
				})(t, e),
				Ot = (t, e) => "method" !== e.kind || !e.descriptor || "value" in e.descriptor ? {
					kind: "field",
					key: Symbol(),
					placement: "own",
					descriptor: {},
					originalKey: e.key,
					initializer() {
						"function" == typeof e.initializer && (this[e.key] = e.initializer.call(this))
					},
					finisher(o) {
						o.createProperty(e.key, t)
					}
				} : {
					...e,
					finisher(o) {
						o.createProperty(e.key, t)
					}
				},
				jt = (t, e, o) => {
					e.constructor.createProperty(o, t)
				};

			function It(t) {
				return (e, o) => void 0 !== o ? jt(t, e, o) : Ot(t, e)
			}

			function Pt(t) {
				return It({
					...t,
					state: !0
				})
			}
			var Mt;
			null === (Mt = window.HTMLSlotElement) || void 0 === Mt || Mt.prototype.assignedElements;
			var Tt = o("./node_modules/@web3modal/standalone/node_modules/@web3modal/core/dist/index.es.js");
			const St = 1;
			const Rt = (t => (...e) => ({
				_$litDirective$: t,
				values: e
			}))(class extends class {
				constructor(t) {}
				get _$AU() {
					return this._$AM._$AU
				}
				_$AT(t, e, o) {
					this._$Ct = t, this._$AM = e, this._$Ci = o
				}
				_$AS(t, e) {
					return this.update(t, e)
				}
				update(t, e) {
					return this.render(...e)
				}
			} {
				constructor(t) {
					var e;
					if (super(t), t.type !== St || "class" !== t.name || (null === (e = t.strings) || void 0 === e ? void 0 : e.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
				}
				render(t) {
					return " " + Object.keys(t).filter(e => t[e]).join(" ") + " "
				}
				update(t, [e]) {
					var o, n;
					if (void 0 === this.it) {
						this.it = new Set, void 0 !== t.strings && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter(t => "" !== t)));
						for (const t in e) e[t] && !(null === (o = this.nt) || void 0 === o ? void 0 : o.has(t)) && this.it.add(t);
						return this.render(e)
					}
					const r = t.element.classList;
					this.it.forEach(t => {
						t in e || (r.remove(t), this.it.delete(t))
					});
					for (const i in e) {
						const t = !!e[i];
						t === this.it.has(i) || (null === (n = this.nt) || void 0 === n ? void 0 : n.has(i)) || (t ? (r.add(i), this.it.add(i)) : (r.remove(i), this.it.delete(i)))
					}
					return Z
				}
			});
			var Nt = o("./node_modules/@motionone/dom/dist/animate/utils/controls.es.js"),
				Lt = o("./node_modules/@motionone/dom/dist/animate/index.es.js"),
				Dt = o("./node_modules/@motionone/utils/dist/is-function.es.js"),
				Ut = o("./node_modules/@motionone/animation/dist/Animation.es.js");

			function Wt(t, e = {}) {
				return Object(Nt.a)([() => {
					const o = new Ut.a(t, [0, 1], e);
					return o.finished.catch(() => {}), o
				}], e, e.duration)
			}

			function Bt(t, e, o) {
				return (Object(Dt.a)(t) ? Wt : Lt.a)(t, e, o)
			}
			var Ht = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/browser.js"),
				Zt = o.n(Ht),
				qt = Object.defineProperty,
				zt = Object.getOwnPropertySymbols,
				Vt = Object.prototype.hasOwnProperty,
				Ft = Object.prototype.propertyIsEnumerable,
				Gt = (t, e, o) => e in t ? qt(t, e, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: o
				}) : t[e] = o,
				Kt = (t, e) => {
					for (var o in e || (e = {})) Vt.call(e, o) && Gt(t, o, e[o]);
					if (zt)
						for (var o of zt(e)) Ft.call(e, o) && Gt(t, o, e[o]);
					return t
				};
			const Yt = {
					getPreset: t => ({
						"--w3m-accent-color": "#3396FF",
						"--w3m-accent-fill-color": "#FFFFFF",
						"--w3m-z-index": "89",
						"--w3m-background-color": "#3396FF",
						"--w3m-background-border-radius": "8px",
						"--w3m-container-border-radius": "30px",
						"--w3m-wallet-icon-border-radius": "15px",
						"--w3m-wallet-icon-large-border-radius": "30px",
						"--w3m-wallet-icon-small-border-radius": "7px",
						"--w3m-input-border-radius": "28px",
						"--w3m-button-border-radius": "10px",
						"--w3m-notification-border-radius": "36px",
						"--w3m-secondary-button-border-radius": "28px",
						"--w3m-icon-button-border-radius": "50%",
						"--w3m-button-hover-highlight-border-radius": "10px",
						"--w3m-text-big-bold-size": "20px",
						"--w3m-text-big-bold-weight": "600",
						"--w3m-text-big-bold-line-height": "24px",
						"--w3m-text-big-bold-letter-spacing": "-0.03em",
						"--w3m-text-big-bold-text-transform": "none",
						"--w3m-text-xsmall-bold-size": "10px",
						"--w3m-text-xsmall-bold-weight": "700",
						"--w3m-text-xsmall-bold-line-height": "12px",
						"--w3m-text-xsmall-bold-letter-spacing": "0.02em",
						"--w3m-text-xsmall-bold-text-transform": "uppercase",
						"--w3m-text-xsmall-regular-size": "12px",
						"--w3m-text-xsmall-regular-weight": "600",
						"--w3m-text-xsmall-regular-line-height": "14px",
						"--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
						"--w3m-text-xsmall-regular-text-transform": "none",
						"--w3m-text-small-thin-size": "14px",
						"--w3m-text-small-thin-weight": "500",
						"--w3m-text-small-thin-line-height": "16px",
						"--w3m-text-small-thin-letter-spacing": "-0.03em",
						"--w3m-text-small-thin-text-transform": "none",
						"--w3m-text-small-regular-size": "14px",
						"--w3m-text-small-regular-weight": "600",
						"--w3m-text-small-regular-line-height": "16px",
						"--w3m-text-small-regular-letter-spacing": "-0.03em",
						"--w3m-text-small-regular-text-transform": "none",
						"--w3m-text-medium-regular-size": "16px",
						"--w3m-text-medium-regular-weight": "600",
						"--w3m-text-medium-regular-line-height": "20px",
						"--w3m-text-medium-regular-letter-spacing": "-0.03em",
						"--w3m-text-medium-regular-text-transform": "none",
						"--w3m-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
						"--w3m-success-color": "rgb(38,181,98)",
						"--w3m-error-color": "rgb(242, 90, 103)"
					})[t],
					setTheme() {
						const t = document.querySelector(":root"),
							{
								themeVariables: e
							} = Tt.j.state;
						if (t) {
							const o = Kt(Kt(Kt(Kt({}, function() {
								var t;
								const e = {
									light: {
										foreground: {
											1: "rgb(20,20,20)",
											2: "rgb(121,134,134)",
											3: "rgb(158,169,169)"
										},
										background: {
											1: "rgb(255,255,255)",
											2: "rgb(241,243,243)",
											3: "rgb(228,231,231)"
										},
										overlay: "rgba(0,0,0,0.1)"
									},
									dark: {
										foreground: {
											1: "rgb(228,231,231)",
											2: "rgb(148,158,158)",
											3: "rgb(110,119,119)"
										},
										background: {
											1: "rgb(20,20,20)",
											2: "rgb(39,42,42)",
											3: "rgb(59,64,64)"
										},
										overlay: "rgba(255,255,255,0.1)"
									}
								} [null != (t = Tt.j.state.themeMode) ? t : "dark"];
								return {
									"--w3m-color-fg-1": e.foreground[1],
									"--w3m-color-fg-2": e.foreground[2],
									"--w3m-color-fg-3": e.foreground[3],
									"--w3m-color-bg-1": e.background[1],
									"--w3m-color-bg-2": e.background[2],
									"--w3m-color-bg-3": e.background[3],
									"--w3m-color-overlay": e.overlay
								}
							}()), {
								"--w3m-accent-color": "#3396FF",
								"--w3m-accent-fill-color": "#FFFFFF",
								"--w3m-z-index": "89",
								"--w3m-background-color": "#3396FF",
								"--w3m-background-border-radius": "8px",
								"--w3m-container-border-radius": "30px",
								"--w3m-wallet-icon-border-radius": "15px",
								"--w3m-wallet-icon-large-border-radius": "30px",
								"--w3m-wallet-icon-small-border-radius": "7px",
								"--w3m-input-border-radius": "28px",
								"--w3m-button-border-radius": "10px",
								"--w3m-notification-border-radius": "36px",
								"--w3m-secondary-button-border-radius": "28px",
								"--w3m-icon-button-border-radius": "50%",
								"--w3m-button-hover-highlight-border-radius": "10px",
								"--w3m-text-big-bold-size": "20px",
								"--w3m-text-big-bold-weight": "600",
								"--w3m-text-big-bold-line-height": "24px",
								"--w3m-text-big-bold-letter-spacing": "-0.03em",
								"--w3m-text-big-bold-text-transform": "none",
								"--w3m-text-xsmall-bold-size": "10px",
								"--w3m-text-xsmall-bold-weight": "700",
								"--w3m-text-xsmall-bold-line-height": "12px",
								"--w3m-text-xsmall-bold-letter-spacing": "0.02em",
								"--w3m-text-xsmall-bold-text-transform": "uppercase",
								"--w3m-text-xsmall-regular-size": "12px",
								"--w3m-text-xsmall-regular-weight": "600",
								"--w3m-text-xsmall-regular-line-height": "14px",
								"--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
								"--w3m-text-xsmall-regular-text-transform": "none",
								"--w3m-text-small-thin-size": "14px",
								"--w3m-text-small-thin-weight": "500",
								"--w3m-text-small-thin-line-height": "16px",
								"--w3m-text-small-thin-letter-spacing": "-0.03em",
								"--w3m-text-small-thin-text-transform": "none",
								"--w3m-text-small-regular-size": "14px",
								"--w3m-text-small-regular-weight": "600",
								"--w3m-text-small-regular-line-height": "16px",
								"--w3m-text-small-regular-letter-spacing": "-0.03em",
								"--w3m-text-small-regular-text-transform": "none",
								"--w3m-text-medium-regular-size": "16px",
								"--w3m-text-medium-regular-weight": "600",
								"--w3m-text-medium-regular-line-height": "20px",
								"--w3m-text-medium-regular-letter-spacing": "-0.03em",
								"--w3m-text-medium-regular-text-transform": "none",
								"--w3m-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
								"--w3m-success-color": "rgb(38,181,98)",
								"--w3m-error-color": "rgb(242, 90, 103)"
							}), e), function() {
								const {
									themeVariables: t
								} = Tt.j.state;
								return {
									"--w3m-background-image-url": null != t && t["--w3m-background-image-url"] ? `url(${t["--w3m-background-image-url"]})` : "none"
								}
							}());
							Object.entries(o).forEach(e => {
								let [o, n] = e;
								return t.style.setProperty(o, n)
							})
						}
					},
					globalCss: ht`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-accent-fill-color);background:var(--w3m-accent-color)}`
				},
				Jt = ht`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-accent-color);border-radius:var(--w3m-icon-button-border-radius);margin-bottom:4px}button path{fill:var(--w3m-accent-fill-color)}`;
			var Qt = Object.defineProperty,
				Xt = Object.getOwnPropertyDescriptor,
				te = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Xt(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Qt(e, o, i), i
				};
			let ee = class extends kt {
				constructor() {
					super(...arguments), this.icon = void 0, this.label = "", this.onClick = () => null
				}
				render() {
					return B`<button @click="${this.onClick}"><div>${this.icon}</div><w3m-text variant="xsmall-regular" color="accent">${this.label}</w3m-text></button>`
				}
			};
			ee.styles = [Yt.globalCss, Jt], te([It()], ee.prototype, "icon", 2), te([It()], ee.prototype, "label", 2), te([It()], ee.prototype, "onClick", 2), ee = te([At("w3m-box-button")], ee);
			const oe = ht`button{border-radius:var(--w3m-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--w3m-accent-color)}button path{fill:var(--w3m-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:active::after{background-color:var(--w3m-color-overlay)}.w3m-ghost,.w3m-ghost:active::after,.w3m-outline{background-color:transparent}.w3m-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--w3m-color-overlay)}.w3m-ghost:hover::after{background-color:transparent}.w3m-ghost:hover{opacity:.5}}button:disabled{background-color:var(--w3m-color-bg-3);pointer-events:none}.w3m-ghost::after{border-color:transparent}.w3m-ghost path{fill:var(--w3m-color-fg-2)}.w3m-outline path{fill:var(--w3m-accent-color)}.w3m-outline:disabled{background-color:transparent;opacity:.5}`;
			var ne = Object.defineProperty,
				re = Object.getOwnPropertyDescriptor,
				ie = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? re(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && ne(e, o, i), i
				};
			let ae = class extends kt {
				constructor() {
					super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default"
				}
				render() {
					const t = {
						"w3m-icon-left": void 0 !== this.iconLeft,
						"w3m-icon-right": void 0 !== this.iconRight,
						"w3m-ghost": "ghost" === this.variant,
						"w3m-outline": "outline" === this.variant
					};
					let e = "inverse";
					return "ghost" === this.variant && (e = "secondary"), "outline" === this.variant && (e = "accent"), B`<button class="${Rt(t)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<w3m-text variant="small-regular" color="${e}"><slot></slot></w3m-text>${this.iconRight}</button>`
				}
			};
			ae.styles = [Yt.globalCss, oe], ie([It()], ae.prototype, "disabled", 2), ie([It()], ae.prototype, "iconLeft", 2), ie([It()], ae.prototype, "iconRight", 2), ie([It()], ae.prototype, "onClick", 2), ie([It()], ae.prototype, "variant", 2), ae = ie([At("w3m-button")], ae);
			const se = ht`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--w3m-button-border-radius);color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:active::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-accent-color);background-color:transparent}.w3m-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--w3m-color-overlay)}}`;
			var le = Object.defineProperty,
				ce = Object.getOwnPropertyDescriptor,
				de = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? ce(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && le(e, o, i), i
				};
			let he = class extends kt {
				constructor() {
					super(...arguments), this.disabled = !1, this.variant = "primary"
				}
				render() {
					const t = {
						"w3m-secondary": "secondary" === this.variant
					};
					return B`<button ?disabled="${this.disabled}" class="${Rt(t)}"><slot></slot></button>`
				}
			};
			he.styles = [Yt.globalCss, se], de([It()], he.prototype, "disabled", 2), de([It()], he.prototype, "variant", 2), he = de([At("w3m-button-big")], he);
			const me = ht`:host{background-color:var(--w3m-color-bg-2);border-top:1px solid var(--w3m-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
			var ue = Object.defineProperty,
				pe = Object.getOwnPropertyDescriptor;
			let we = class extends kt {
				render() {
					return B`<div><slot></slot></div>`
				}
			};
			we.styles = [Yt.globalCss, me], we = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? pe(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && ue(e, o, i), i
			})([At("w3m-info-footer")], we);
			const ge = {
					CROSS_ICON: H`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
					WALLET_CONNECT_LOGO: H`<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
					WALLET_CONNECT_ICON: H`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
					WALLET_CONNECT_ICON_COLORED: H`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
					BACK_ICON: H`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
					COPY_ICON: H`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
					RETRY_ICON: H`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
					DESKTOP_ICON: H`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
					MOBILE_ICON: H`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
					ARROW_DOWN_ICON: H`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
					ARROW_UP_RIGHT_ICON: H`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
					ARROW_RIGHT_ICON: H`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
					QRCODE_ICON: H`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
					SCAN_ICON: H`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
					CHECKMARK_ICON: H`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
					HELP_ETH_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>`,
					HELP_PAINTING_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>`,
					HELP_CHART_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
					HELP_KEY_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
					HELP_USER_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>`,
					HELP_LOCK_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
					HELP_COMPAS_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>`,
					HELP_NOUN_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
					HELP_DAO_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
					SEARCH_ICON: H`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
					HELP_ICON: H`<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>`,
					WALLET_ICON: H`<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>`,
					NETWORK_PLACEHOLDER: H`<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>`,
					WALLET_PLACEHOLDER: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
					TOKEN_PLACEHOLDER: H`<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>`,
					ACCOUNT_COPY: H`<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>`,
					ACCOUNT_DISCONNECT: H`<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>`,
					GLOBE_ICON: H`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
				},
				fe = ht`.w3m-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--w3m-background-border-radius) * .9);background-color:var(--w3m-background-color);background-image:var(--w3m-background-image-url);background-position:center;background-size:cover}.w3m-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--w3m-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay)}button:active{background-color:var(--w3m-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--w3m-color-fg-1)}.w3m-toolbar div{display:flex}.w3m-toolbar div button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}@media(hover:hover){button:hover{background-color:var(--w3m-color-bg-2)}}`;
			var ve = Object.defineProperty,
				be = Object.getOwnPropertyDescriptor,
				ye = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? be(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && ve(e, o, i), i
				};
			let xe = class extends kt {
				constructor() {
					super(), this.isHelp = !1, this.unsubscribeRouter = void 0, this.unsubscribeRouter = Tt.i.subscribe(t => {
						this.isHelp = "Help" === t.view
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unsubscribeRouter) || t.call(this)
				}
				onHelp() {
					Tt.i.push("Help")
				}
				logoTemplate() {
					var t;
					const e = null == (t = Tt.j.state.themeVariables) ? void 0 : t["--w3m-logo-image-url"];
					return e ? B`<img src="${e}">` : ge.WALLET_CONNECT_LOGO
				}
				render() {
					const t = {
						"w3m-help-active": this.isHelp
					};
					return B`<div class="w3m-toolbar-placeholder"></div><div class="w3m-toolbar">${this.logoTemplate()}<div class="${Rt(t)}"><button @click="${this.onHelp}">${ge.HELP_ICON}</button> <button @click="${Tt.g.close}">${ge.CROSS_ICON}</button></div></div>`
				}
			};
			xe.styles = [Yt.globalCss, fe], ye([Pt()], xe.prototype, "isHelp", 2), xe = ye([At("w3m-modal-backcard")], xe);
			const Ce = ht`main{padding:20px;padding-top:0;width:100%}`;
			var _e = Object.defineProperty,
				$e = Object.getOwnPropertyDescriptor;
			let ke = class extends kt {
				render() {
					return B`<main><slot></slot></main>`
				}
			};
			ke.styles = [Yt.globalCss, Ce], ke = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? $e(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && _e(e, o, i), i
			})([At("w3m-modal-content")], ke);
			const Ee = ht`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}`;
			var Ae = Object.defineProperty,
				Oe = Object.getOwnPropertyDescriptor;
			let je = class extends kt {
				render() {
					return B`<footer><slot></slot></footer>`
				}
			};
			je.styles = [Yt.globalCss, Ee], je = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? Oe(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && Ae(e, o, i), i
			})([At("w3m-modal-footer")], je);
			const Ie = ht`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-accent-color)}`;
			var Pe = Object.defineProperty,
				Me = Object.getOwnPropertyDescriptor,
				Te = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Me(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Pe(e, o, i), i
				};
			let Se = class extends kt {
				constructor() {
					super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1
				}
				backBtnTemplate() {
					return B`<button class="w3m-back-btn" @click="${Tt.i.goBack}">${ge.BACK_ICON}</button>`
				}
				actionBtnTemplate() {
					return B`<button class="w3m-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`
				}
				render() {
					const t = {
							"w3m-border": this.border
						},
						e = Tt.i.state.history.length > 1,
						o = this.title ? B`<w3m-text variant="big-bold">${this.title}</w3m-text>` : B`<slot></slot>`;
					return B`<header class="${Rt(t)}">${e?this.backBtnTemplate():null} ${o} ${this.onAction?this.actionBtnTemplate():null}</header>`
				}
			};
			Se.styles = [Yt.globalCss, Ie], Te([It()], Se.prototype, "title", 2), Te([It()], Se.prototype, "onAction", 2), Te([It()], Se.prototype, "actionIcon", 2), Te([It()], Se.prototype, "border", 2), Se = Te([At("w3m-modal-header")], Se);
			const Re = {
					1: "692ed6ba-e569-459a-556a-776476829e00",
					42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
					43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
					56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
					250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
					10: "ab9c186a-c52f-464b-2906-ca59d760a400",
					137: "41d04d42-da3b-4453-8506-668cc0727900",
					100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
					9001: "f926ff41-260d-4028-635e-91913fc28e00",
					324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
					314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
					4689: "34e68754-e536-40da-c153-6ef2e7188a00",
					1088: "3897a66d-40b9-4833-162f-a2c90531c900",
					1284: "161038da-44ae-4ec7-1208-0ea569454b00",
					1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00"
				},
				Ne = {
					ETH: {
						icon: "692ed6ba-e569-459a-556a-776476829e00"
					},
					WETH: {
						icon: "692ed6ba-e569-459a-556a-776476829e00"
					},
					AVAX: {
						icon: "30c46e53-e989-45fb-4549-be3bd4eb3b00"
					},
					FTM: {
						icon: "06b26297-fe0c-4733-5d6b-ffa5498aac00"
					},
					BNB: {
						icon: "93564157-2e8e-4ce7-81df-b264dbee9b00"
					},
					MATIC: {
						icon: "41d04d42-da3b-4453-8506-668cc0727900"
					},
					OP: {
						icon: "ab9c186a-c52f-464b-2906-ca59d760a400"
					},
					xDAI: {
						icon: "02b53f6a-e3d4-479e-1cb4-21178987d100"
					},
					EVMOS: {
						icon: "f926ff41-260d-4028-635e-91913fc28e00"
					},
					METIS: {
						icon: "3897a66d-40b9-4833-162f-a2c90531c900"
					},
					IOTX: {
						icon: "34e68754-e536-40da-c153-6ef2e7188a00"
					}
				},
				Le = {
					externalWallets() {
						const {
							isStandalone: t
						} = Tt.h.state;
						if (t) return [];
						let e = Tt.b.client().getConnectors();
						return e = e.filter(t => "injected" !== t.id)
					},
					manualWallets() {
						var t, e;
						const {
							mobileWallets: o,
							desktopWallets: n
						} = Tt.c.state, r = null == (t = Le.recentWallet()) ? void 0 : t.id, i = Tt.d.isMobile() ? o : n, a = null == i ? void 0 : i.filter(t => r !== t.id);
						return null != (e = Tt.d.isMobile() ? null == a ? void 0 : a.map(t => {
							let {
								id: e,
								name: o,
								links: n
							} = t;
							return {
								id: e,
								name: o,
								mobile: n,
								links: n
							}
						}) : null == a ? void 0 : a.map(t => {
							let {
								id: e,
								name: o,
								links: n
							} = t;
							return {
								id: e,
								name: o,
								desktop: n,
								links: n
							}
						})) ? e : []
					},
					installedInjectedWallets() {
						const {
							isStandalone: t
						} = Tt.h.state;
						if (t) return [];
						if (!Tt.b.client().isInjectedProviderInstalled()) return [];
						const {
							namespace: e
						} = Tt.b.client(), {
							injectedWallets: o
						} = Tt.f.state;
						let n = o.filter(t => {
							let {
								injected: o
							} = t;
							return !!o.some(t => Tt.b.client().safeCheckInjectedProvider(t.injected_id) && t.namespace === e)
						});
						return n.length > 1 && (n = n.filter(t => {
							let {
								injected: e
							} = t;
							return !!e.map(t => {
								let {
									injected_id: e
								} = t;
								return e
							}).every(t => "isMetaMask" !== t)
						})), n.length ? n : [{
							name: "Browser",
							id: "browser",
							image_id: void 0
						}]
					},
					injectedWallets() {
						const {
							isStandalone: t
						} = Tt.h.state, {
							explorerExcludedWalletIds: e,
							explorerRecommendedWalletIds: o
						} = Tt.c.state, n = Tt.d.isMobile();
						if (t || "ALL" === e || n) return [];
						const {
							namespace: r
						} = Tt.b.client(), {
							injectedWallets: i
						} = Tt.f.state;
						return i.filter(t => {
							let {
								id: n,
								injected: i
							} = t;
							const a = Tt.d.isArray(e) ? e : [],
								s = Tt.d.isArray(o) ? o : [];
							return !!i.some(t => t.namespace === r && !a.includes(n) && !s.includes(n))
						})
					},
					recentWallet: () => De.getRecentWallet(),
					recomendedWallets() {
						let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						var e;
						const o = [...Le.installedInjectedWallets().map(t => {
								let {
									id: e
								} = t;
								return e
							}), t || null == (e = Le.recentWallet()) ? void 0 : e.id],
							{
								recomendedWallets: n
							} = Tt.f.state;
						return n.filter(t => !o.includes(t.id))
					}
				},
				De = {
					MOBILE_BREAKPOINT: 600,
					W3M_RECENT_WALLET_DATA: "W3M_RECENT_WALLET_DATA",
					EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
					rejectStandaloneButtonComponent() {
						const {
							isStandalone: t
						} = Tt.h.state;
						if (t) throw new Error("Web3Modal button components are not available in standalone mode.")
					},
					getShadowRootElement(t, e) {
						const o = t.renderRoot.querySelector(e);
						if (!o) throw new Error(`${e} not found`);
						return o
					},
					getWalletIcon(t) {
						let {
							id: e,
							image_id: o
						} = t;
						const {
							walletImages: n
						} = Tt.c.state;
						return null != n && n[e] ? n[e] : o ? Tt.f.getWalletImageUrl(o) : ""
					},
					getWalletName(t) {
						return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? t.split(" ")[0] : t
					},
					getChainIcon(t) {
						var e;
						const o = Re[t],
							{
								projectId: n,
								chainImages: r
							} = Tt.c.state;
						return null != (e = null == r ? void 0 : r[t]) ? e : n && o ? Tt.f.getAssetImageUrl(o) : ""
					},
					getTokenIcon(t) {
						var e, o;
						const n = null == (e = Ne[t]) ? void 0 : e.icon,
							{
								projectId: r,
								tokenImages: i
							} = Tt.c.state;
						return null != (o = null == i ? void 0 : i[t]) ? o : r && n ? Tt.f.getAssetImageUrl(n) : ""
					},
					isMobileAnimation: () => window.innerWidth <= De.MOBILE_BREAKPOINT,
					async preloadImage(t) {
						const e = new Promise((e, o) => {
							const n = new Image;
							n.onload = e, n.onerror = o, n.src = t
						});
						return Promise.race([e, Tt.d.wait(3e3)])
					},
					getErrorMessage: t => t instanceof Error ? t.message : "Unknown Error",
					debounce(t) {
						let e, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
						return function() {
							for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];

							function a() {
								t(...r)
							}
							e && clearTimeout(e), e = setTimeout(a, o)
						}
					},
					handleMobileLinking(t) {
						const {
							standaloneUri: e
						} = Tt.h.state, {
							pairingUri: o
						} = Tt.l.state, {
							mobile: n,
							name: r
						} = t, i = null == n ? void 0 : n.native, a = null == n ? void 0 : n.universal;
						De.setRecentWallet(t),
							function(t) {
								let e = "";
								i ? e = Tt.d.formatUniversalUrl(i, t, r) : a && (e = Tt.d.formatNativeUrl(a, t, r)), Tt.d.openHref(e, "_self")
							}(e || o)
					},
					handleAndroidLinking() {
						const {
							standaloneUri: t
						} = Tt.h.state, {
							pairingUri: e
						} = Tt.l.state;
						t ? (Tt.d.setWalletConnectAndroidDeepLink(t), Tt.d.openHref(t, "_self")) : (Tt.d.setWalletConnectAndroidDeepLink(e), Tt.d.openHref(e, "_self"))
					},
					async handleUriCopy() {
						const {
							standaloneUri: t
						} = Tt.h.state, {
							pairingUri: e
						} = Tt.l.state;
						t ? await navigator.clipboard.writeText(t) : await navigator.clipboard.writeText(e), Tt.k.openToast("Link copied", "success")
					},
					async handleConnectorConnection(t, e) {
						try {
							const {
								selectedChain: e
							} = Tt.h.state;
							await Tt.b.client().connectConnector(t, null == e ? void 0 : e.id), Tt.g.close()
						} catch (o) {
							console.error(o), e ? e() : Tt.k.openToast(De.getErrorMessage(o), "error")
						}
					},
					getCustomImageUrls() {
						const {
							chainImages: t,
							walletImages: e
						} = Tt.c.state, o = Object.values(null != t ? t : {}), n = Object.values(null != e ? e : {});
						return Object.values([...o, ...n])
					},
					truncate(t) {
						let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
						return t.length <= e ? t : `${t.substring(0,4)}...${t.substring(t.length-4)}`
					},
					generateAvatarColors(t) {
						var e;
						const o = null == (e = t.match(/.{1,7}/g)) ? void 0 : e.splice(0, 5),
							n = [];
						null == o || o.forEach(t => {
							let e = 0;
							for (let n = 0; n < t.length; n += 1) e = t.charCodeAt(n) + ((e << 5) - e), e &= e;
							const o = [0, 0, 0];
							for (let n = 0; n < 3; n += 1) {
								const t = e >> 8 * n & 255;
								o[n] = t
							}
							n.push(`rgb(${o[0]}, ${o[1]}, ${o[2]})`)
						});
						const r = document.querySelector(":root");
						if (r) {
							const t = {
								"--w3m-color-av-1": n[0],
								"--w3m-color-av-2": n[1],
								"--w3m-color-av-3": n[2],
								"--w3m-color-av-4": n[3],
								"--w3m-color-av-5": n[4]
							};
							Object.entries(t).forEach(t => {
								let [e, o] = t;
								return r.style.setProperty(e, o)
							})
						}
					},
					setRecentWallet(t) {
						const {
							walletConnectVersion: e
						} = Tt.h.state;
						localStorage.setItem(De.W3M_RECENT_WALLET_DATA, JSON.stringify({
							[e]: t
						}))
					},
					getRecentWallet() {
						const t = localStorage.getItem(De.W3M_RECENT_WALLET_DATA);
						if (t) {
							const {
								walletConnectVersion: e
							} = Tt.h.state, o = JSON.parse(t);
							if (o[e]) return o[e]
						}
					},
					caseSafeIncludes: (t, e) => t.toUpperCase().includes(e.toUpperCase()),
					openWalletExplorerUrl() {
						Tt.d.openHref(De.EXPLORER_WALLET_URL, "_blank")
					},
					getCachedRouterWalletPlatforms() {
						const {
							id: t,
							desktop: e,
							mobile: o,
							injected: n
						} = Tt.d.getWalletRouterData(), r = Le.installedInjectedWallets(), i = !(null == n || !n.length), a = r.some(e => e.id === t), s = !(null == e || !e.native), l = !(null == e || !e.universal);
						return {
							isInjectedInstalled: a,
							isInjected: i,
							isDesktop: s,
							isMobile: !(null == o || !o.native) || !(null == o || !o.universal),
							isWeb: l
						}
					},
					goToConnectingView(t) {
						Tt.i.setData({
							Wallet: t
						});
						const e = Tt.d.isMobile(),
							{
								isDesktop: o,
								isWeb: n,
								isMobile: r,
								isInjectedInstalled: i
							} = De.getCachedRouterWalletPlatforms();
						e ? i ? Tt.i.push("InjectedConnecting") : r ? Tt.i.push("MobileConnecting") : n ? Tt.i.push("WebConnecting") : Tt.i.push("InstallWallet") : i ? Tt.i.push("InjectedConnecting") : o ? Tt.i.push("DesktopConnecting") : n ? Tt.i.push("WebConnecting") : r ? Tt.i.push("MobileQrcodeConnecting") : Tt.i.push("InstallWallet")
					}
				},
				Ue = ht`.w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}`;
			var We = Object.defineProperty,
				Be = Object.getOwnPropertyDescriptor,
				He = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Be(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && We(e, o, i), i
				};
			let Ze = class extends kt {
				constructor() {
					super(), this.view = Tt.i.state.view, this.prevView = Tt.i.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = Tt.i.subscribe(t => {
						this.view !== t.view && this.onChangeRoute()
					})
				}
				firstUpdated() {
					this.resizeObserver = new ResizeObserver(t => {
						let [e] = t;
						const o = `${e.contentRect.height}px`;
						"0px" !== this.oldHeight && Bt(this.routerEl, {
							height: [this.oldHeight, o]
						}, {
							duration: .2
						}), this.oldHeight = o
					}), this.resizeObserver.observe(this.contentEl)
				}
				disconnectedCallback() {
					var t, e;
					null == (t = this.unsubscribe) || t.call(this), null == (e = this.resizeObserver) || e.disconnect()
				}
				get routerEl() {
					return De.getShadowRootElement(this, ".w3m-router")
				}
				get contentEl() {
					return De.getShadowRootElement(this, ".w3m-content")
				}
				viewTemplate() {
					switch (this.view) {
						case "ConnectWallet":
							return B`<w3m-connect-wallet-view></w3m-connect-wallet-view>`;
						case "SelectNetwork":
							return B`<w3m-select-network-view></w3m-select-network-view>`;
						case "InjectedConnecting":
							return B`<w3m-injected-connecting-view></w3m-injected-connecting-view>`;
						case "DesktopConnecting":
							return B`<w3m-desktop-connecting-view></w3m-desktop-connecting-view>`;
						case "MobileConnecting":
							return B`<w3m-mobile-connecting-view></w3m-mobile-connecting-view>`;
						case "WebConnecting":
							return B`<w3m-web-connecting-view></w3m-web-connecting-view>`;
						case "MobileQrcodeConnecting":
							return B`<w3m-mobile-qr-connecting-view></w3m-mobile-qr-connecting-view>`;
						case "GetWallet":
							return B`<w3m-get-wallet-view></w3m-get-wallet-view>`;
						case "WalletExplorer":
							return B`<w3m-wallet-explorer-view></w3m-wallet-explorer-view>`;
						case "Qrcode":
							return B`<w3m-qrcode-view></w3m-qrcode-view>`;
						case "Help":
							return B`<w3m-help-view></w3m-help-view>`;
						case "Account":
							return B`<w3m-account-view></w3m-account-view>`;
						case "SwitchNetwork":
							return B`<w3m-switch-network-view></w3m-switch-network-view>`;
						case "InstallWallet":
							return B`<w3m-install-wallet-view></w3m-install-wallet-view>`;
						default:
							return B`<div>Not Found</div>`
					}
				}
				async onChangeRoute() {
					await Bt(this.routerEl, {
						opacity: [1, 0],
						scale: [1, 1.02]
					}, {
						duration: .15,
						delay: .1
					}).finished, this.view = Tt.i.state.view, Bt(this.routerEl, {
						opacity: [0, 1],
						scale: [.99, 1]
					}, {
						duration: .37,
						delay: .05
					})
				}
				render() {
					return B`<div class="w3m-router"><div class="w3m-content">${this.viewTemplate()}</div></div>`
				}
			};
			Ze.styles = [Yt.globalCss, Ue], He([Pt()], Ze.prototype, "view", 2), He([Pt()], Ze.prototype, "prevView", 2), Ze = He([At("w3m-modal-router")], Ze);
			const qe = ht`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--w3m-notification-border-radius);border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-accent-color)}.w3m-error path{fill:var(--w3m-error-color)}`;
			var ze = Object.defineProperty,
				Ve = Object.getOwnPropertyDescriptor,
				Fe = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Ve(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && ze(e, o, i), i
				};
			let Ge = class extends kt {
				constructor() {
					super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = Tt.k.subscribe(t => {
						t.open ? (this.open = !0, this.timeout = setTimeout(() => Tt.k.closeToast(), 2200)) : (this.open = !1, clearTimeout(this.timeout))
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unsubscribe) || t.call(this), clearTimeout(this.timeout), Tt.k.closeToast()
				}
				render() {
					const {
						message: t,
						variant: e
					} = Tt.k.state, o = {
						"w3m-success": "success" === e,
						"w3m-error": "error" === e
					};
					return this.open ? B`<div class="${Rt(o)}">${"success"===e?ge.CHECKMARK_ICON:null} ${"error"===e?ge.CROSS_ICON:null}<w3m-text variant="small-regular">${t}</w3m-text></div>` : null
				}
			};
			Ge.styles = [Yt.globalCss, qe], Fe([Pt()], Ge.prototype, "open", 2), Ge = Fe([At("w3m-modal-toast")], Ge);
			const Ke = ht`button{padding:5px;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px;position:relative}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:active{background-color:var(--w3m-color-overlay)}.w3m-unsupported{opacity:.3}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}`;
			var Ye = Object.defineProperty,
				Je = Object.getOwnPropertyDescriptor,
				Qe = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Je(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Ye(e, o, i), i
				};
			let Xe = class extends kt {
				constructor() {
					super(...arguments), this.onClick = () => null, this.name = "", this.chainId = "", this.unsupported = !1
				}
				render() {
					const t = {
						"w3m-unsupported": this.unsupported
					};
					return B`<button @click="${this.onClick}" class="${Rt(t)}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-regular">${this.name}</w3m-text></button>`
				}
			};
			Xe.styles = [Yt.globalCss, Ke], Qe([It()], Xe.prototype, "onClick", 2), Qe([It()], Xe.prototype, "name", 2), Qe([It()], Xe.prototype, "chainId", 2), Qe([It()], Xe.prototype, "unsupported", 2), Xe = Qe([At("w3m-network-button")], Xe);
			const to = ht`@keyframes loading{to{stroke-dashoffset:0}}:host{width:inherit;height:inherit;position:relative}path{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}image{clip-path:path('M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z')}`;
			var eo = Object.defineProperty,
				oo = Object.getOwnPropertyDescriptor,
				no = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? oo(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && eo(e, o, i), i
				};
			let ro = class extends kt {
				constructor() {
					super(...arguments), this.chainId = ""
				}
				render() {
					const t = De.getChainIcon(this.chainId);
					return t ? B`<svg width="54" height="59" viewBox="0 0 54 59" fill="none"><image href="${t}"/><image href="${t}" width="54" height="59"/><path d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/></svg>` : B`${ge.NETWORK_PLACEHOLDER}`
				}
			};
			ro.styles = [Yt.globalCss, to], no([It()], ro.prototype, "chainId", 2), ro = no([At("w3m-network-image")], ro);
			const io = .1;

			function ao(t, e, o) {
				return t !== e && (t - e < 0 ? e - t : t - e) <= o + io
			}
			const so = {
					generate(t, e, o, n) {
						const r = "light" === n ? "#141414" : "#fff",
							i = "light" === n ? "#fff" : "#141414",
							a = [],
							s = function(t, e) {
								const o = Array.prototype.slice.call(Zt.a.create(t, {
										errorCorrectionLevel: e
									}).modules.data, 0),
									n = Math.sqrt(o.length);
								return o.reduce((t, e, o) => (o % n == 0 ? t.push([e]) : t[t.length - 1].push(e)) && t, [])
							}(t, "Q"),
							l = e / s.length,
							c = [{
								x: 0,
								y: 0
							}, {
								x: 1,
								y: 0
							}, {
								x: 0,
								y: 1
							}];
						c.forEach(t => {
							let {
								x: e,
								y: o
							} = t;
							const n = (s.length - 7) * l * e,
								d = (s.length - 7) * l * o;
							for (let s = 0; s < c.length; s += 1) {
								const t = l * (7 - 2 * s);
								a.push(H`<rect fill="${s%2==0?r:i}" height="${t}" rx="${.32*t}" ry="${.32*t}" width="${t}" x="${n+l*s}" y="${d+l*s}">`)
							}
						});
						const d = Math.floor((o + 25) / l),
							h = s.length / 2 - d / 2,
							m = s.length / 2 + d / 2 - 1,
							u = [];
						s.forEach((t, e) => {
							t.forEach((t, o) => {
								if (s[e][o] && !(e < 7 && o < 7 || e > s.length - 8 && o < 7 || e < 7 && o > s.length - 8) && !(e > h && e < m && o > h && o < m)) {
									const t = e * l + l / 2,
										n = o * l + l / 2;
									u.push([t, n])
								}
							})
						});
						const p = {};
						return u.forEach(t => {
							let [e, o] = t;
							p[e] ? p[e].push(o) : p[e] = [o]
						}), Object.entries(p).map(t => {
							let [e, o] = t;
							const n = o.filter(t => o.every(e => !ao(t, e, l)));
							return [Number(e), n]
						}).forEach(t => {
							let [e, o] = t;
							o.forEach(t => {
								a.push(H`<circle cx="${e}" cy="${t}" fill="${r}" r="${l/2.5}">`)
							})
						}), Object.entries(p).filter(t => {
							let [e, o] = t;
							return o.length > 1
						}).map(t => {
							let [e, o] = t;
							const n = o.filter(t => o.some(e => ao(t, e, l)));
							return [Number(e), n]
						}).map(t => {
							let [e, o] = t;
							o.sort((t, e) => t < e ? -1 : 1);
							const n = [];
							for (const r of o) {
								const t = n.find(t => t.some(t => ao(r, t, l)));
								t ? t.push(r) : n.push([r])
							}
							return [e, n.map(t => [t[0], t[t.length - 1]])]
						}).forEach(t => {
							let [e, o] = t;
							o.forEach(t => {
								let [o, n] = t;
								a.push(H`<line x1="${e}" x2="${e}" y1="${o}" y2="${n}" stroke="${r}" stroke-width="${l/1.25}" stroke-linecap="round">`)
							})
						}), a
					}
				},
				lo = ht`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:var(--w3m-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-accent-color)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}`;
			var co = Object.defineProperty,
				ho = Object.getOwnPropertyDescriptor,
				mo = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? ho(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && co(e, o, i), i
				};
			let uo = class extends kt {
				constructor() {
					super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0
				}
				svgTemplate() {
					var t;
					const e = null != (t = Tt.j.state.themeMode) ? t : "light";
					return H`<svg height="${this.size}" width="${this.size}">${so.generate(this.uri,this.size,this.size/4,e)}</svg>`
				}
				render() {
					return B`<div>${this.walletId||this.imageUrl?B`<w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}" imageUrl="${this.imageUrl}"></w3m-wallet-image>`:ge.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}<w3m-theme-context></w3m-theme-context></div>`
				}
			};
			uo.styles = [Yt.globalCss, lo], mo([It()], uo.prototype, "uri", 2), mo([It({
				type: Number
			})], uo.prototype, "size", 2), mo([It()], uo.prototype, "imageId", 2), mo([It()], uo.prototype, "walletId", 2), mo([It()], uo.prototype, "imageUrl", 2), uo = mo([At("w3m-qrcode")], uo);
			const po = ht`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--w3m-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--w3m-color-fg-1);background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);caret-color:var(--w3m-accent-color)}input::placeholder{color:var(--w3m-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-accent-color)}path{fill:var(--w3m-color-fg-2)}`;
			var wo = Object.defineProperty,
				go = Object.getOwnPropertyDescriptor,
				fo = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? go(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && wo(e, o, i), i
				};
			let vo = class extends kt {
				constructor() {
					super(...arguments), this.onChange = () => null
				}
				render() {
					return B`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${ge.SEARCH_ICON}`
				}
			};
			vo.styles = [Yt.globalCss, po], fo([It()], vo.prototype, "onChange", 2), vo = fo([At("w3m-search-input")], vo);
			const bo = ht`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--w3m-accent-color)}`;
			var yo = Object.defineProperty,
				xo = Object.getOwnPropertyDescriptor;
			let Co = class extends kt {
				render() {
					return B`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`
				}
			};
			Co.styles = [Yt.globalCss, bo], Co = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? xo(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && yo(e, o, i), i
			})([At("w3m-spinner")], Co);
			const _o = ht`span{font-style:normal;font-family:var(--w3m-font-family);font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xsmall-bold{font-family:var(--w3m-text-xsmall-bold-font-family);font-weight:var(--w3m-text-xsmall-bold-weight);font-size:var(--w3m-text-xsmall-bold-size);line-height:var(--w3m-text-xsmall-bold-line-height);letter-spacing:var(--w3m-text-xsmall-bold-letter-spacing);text-transform:var(--w3m-text-xsmall-bold-text-transform)}.w3m-xsmall-regular{font-family:var(--w3m-text-xsmall-regular-font-family);font-weight:var(--w3m-text-xsmall-regular-weight);font-size:var(--w3m-text-xsmall-regular-size);line-height:var(--w3m-text-xsmall-regular-line-height);letter-spacing:var(--w3m-text-xsmall-regular-letter-spacing);text-transform:var(--w3m-text-xsmall-regular-text-transform)}.w3m-small-thin{font-family:var(--w3m-text-small-thin-font-family);font-weight:var(--w3m-text-small-thin-weight);font-size:var(--w3m-text-small-thin-size);line-height:var(--w3m-text-small-thin-line-height);letter-spacing:var(--w3m-text-small-thin-letter-spacing);text-transform:var(--w3m-text-small-thin-text-transform)}.w3m-small-regular{font-family:var(--w3m-text-small-regular-font-family);font-weight:var(--w3m-text-small-regular-weight);font-size:var(--w3m-text-small-regular-size);line-height:var(--w3m-text-small-regular-line-height);letter-spacing:var(--w3m-text-small-regular-letter-spacing);text-transform:var(--w3m-text-small-regular-text-transform)}.w3m-medium-regular{font-family:var(--w3m-text-medium-regular-font-family);font-weight:var(--w3m-text-medium-regular-weight);font-size:var(--w3m-text-medium-regular-size);line-height:var(--w3m-text-medium-regular-line-height);letter-spacing:var(--w3m-text-medium-regular-letter-spacing);text-transform:var(--w3m-text-medium-regular-text-transform)}.w3m-big-bold{font-family:var(--w3m-text-big-bold-font-family);font-weight:var(--w3m-text-big-bold-weight);font-size:var(--w3m-text-big-bold-size);line-height:var(--w3m-text-big-bold-line-height);letter-spacing:var(--w3m-text-big-bold-letter-spacing);text-transform:var(--w3m-text-big-bold-text-transform)}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-accent-fill-color)}.w3m-color-accnt{color:var(--w3m-accent-color)}.w3m-color-error{color:var(--w3m-error-color)}`;
			var $o = Object.defineProperty,
				ko = Object.getOwnPropertyDescriptor,
				Eo = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? ko(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && $o(e, o, i), i
				};
			let Ao = class extends kt {
				constructor() {
					super(...arguments), this.variant = "medium-regular", this.color = "primary"
				}
				render() {
					const t = {
						"w3m-big-bold": "big-bold" === this.variant,
						"w3m-medium-regular": "medium-regular" === this.variant,
						"w3m-small-regular": "small-regular" === this.variant,
						"w3m-small-thin": "small-thin" === this.variant,
						"w3m-xsmall-regular": "xsmall-regular" === this.variant,
						"w3m-xsmall-bold": "xsmall-bold" === this.variant,
						"w3m-color-primary": "primary" === this.color,
						"w3m-color-secondary": "secondary" === this.color,
						"w3m-color-tertiary": "tertiary" === this.color,
						"w3m-color-inverse": "inverse" === this.color,
						"w3m-color-accnt": "accent" === this.color,
						"w3m-color-error": "error" === this.color
					};
					return B`<span><slot class="${Rt(t)}"></slot></span>`
				}
			};
			Ao.styles = [Yt.globalCss, _o], Eo([It()], Ao.prototype, "variant", 2), Eo([It()], Ao.prototype, "color", 2), Ao = Eo([At("w3m-text")], Ao);
			const Oo = ht`div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
			var jo = Object.defineProperty,
				Io = Object.getOwnPropertyDescriptor,
				Po = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Io(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && jo(e, o, i), i
				};
			let Mo = class extends kt {
				constructor() {
					super(...arguments), this.symbol = void 0
				}
				render() {
					var t;
					const e = De.getTokenIcon(null != (t = this.symbol) ? t : "");
					return e ? B`<div><img src="${e}" alt="${this.id}"></div>` : ge.TOKEN_PLACEHOLDER
				}
			};
			Mo.styles = [Yt.globalCss, Oo], Po([It()], Mo.prototype, "symbol", 2), Mo = Po([At("w3m-token-image")], Mo);
			const To = ht`button{width:100%;height:100%;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--w3m-wallet-icon-border-radius);margin-bottom:5px}.w3m-sublabel{margin-top:2px}`;
			var So = Object.defineProperty,
				Ro = Object.getOwnPropertyDescriptor,
				No = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Ro(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && So(e, o, i), i
				};
			let Lo = class extends kt {
				constructor() {
					super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = !1, this.recent = !1
				}
				sublabelTemplate() {
					return this.recent ? B`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">RECENT</w3m-text>` : this.installed ? B`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</w3m-text>` : null
				}
				handleClick() {
					Tt.e.click({
						name: "WALLET_BUTTON",
						walletId: this.walletId
					}), this.onClick()
				}
				render() {
					var t;
					return B`<button @click="${this.handleClick.bind(this)}"><div><w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}"></w3m-wallet-image><w3m-text variant="xsmall-regular">${null!=(t=this.label)?t:De.getWalletName(this.name,!0)}</w3m-text>${this.sublabelTemplate()}</div></button>`
				}
			};
			Lo.styles = [Yt.globalCss, To], No([It()], Lo.prototype, "onClick", 2), No([It()], Lo.prototype, "name", 2), No([It()], Lo.prototype, "walletId", 2), No([It()], Lo.prototype, "label", 2), No([It()], Lo.prototype, "imageId", 2), No([It()], Lo.prototype, "installed", 2), No([It()], Lo.prototype, "recent", 2), Lo = No([At("w3m-wallet-button")], Lo);
			const Do = ht`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--w3m-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
			var Uo = Object.defineProperty,
				Wo = Object.getOwnPropertyDescriptor,
				Bo = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Wo(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Uo(e, o, i), i
				};
			let Ho = class extends kt {
				constructor() {
					super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0
				}
				render() {
					var t;
					const e = null != (t = this.imageUrl) && t.length ? this.imageUrl : De.getWalletIcon({
						id: this.walletId,
						image_id: this.imageId
					});
					return B`${e.length?B`<div><img src="${e}" alt="${this.id}"></div>`:ge.WALLET_PLACEHOLDER}`
				}
			};
			Ho.styles = [Yt.globalCss, Do], Bo([It()], Ho.prototype, "walletId", 2), Bo([It()], Ho.prototype, "imageId", 2), Bo([It()], Ho.prototype, "imageUrl", 2), Ho = Bo([At("w3m-wallet-image")], Ho);
			var Zo = Object.defineProperty,
				qo = Object.getOwnPropertyDescriptor;
			let zo = class extends kt {
				constructor() {
					super(), this.unwatchAccount = void 0, Tt.a.getAccount(), this.fetchProfile(), this.fetchBalance(), this.unwatchAccount = Tt.b.client().watchAccount(t => {
						const {
							address: e,
							isConnected: o
						} = Tt.a.state;
						t.isConnected && t.address !== e && (this.fetchProfile(t.address), this.fetchBalance(t.address), Tt.a.setAddress(t.address)), t.isConnected || Tt.a.resetAccount(), o !== t.isConnected && Tt.g.close(), !o && t.isConnected ? Tt.e.track({
							name: "ACCOUNT_CONNECTED"
						}) : o && !t.isConnected && Tt.e.track({
							name: "ACCOUNT_DISCONNECTED"
						}), Tt.a.setIsConnected(t.isConnected)
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unwatchAccount) || t.call(this)
				}
				async fetchProfile(t) {
					var e;
					const o = null == (e = Tt.h.state.chains) ? void 0 : e.find(t => 1 === t.id);
					if (Tt.c.state.enableAccountView && o) try {
						await Tt.a.fetchProfile(De.preloadImage, t)
					} catch (n) {
						console.error(n), Tt.k.openToast(De.getErrorMessage(n), "error")
					}
				}
				async fetchBalance(t) {
					if (Tt.c.state.enableAccountView) try {
						await Tt.a.fetchBalance(t)
					} catch (e) {
						console.error(e), Tt.k.openToast(De.getErrorMessage(e), "error")
					}
				}
			};
			zo = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? qo(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && Zo(e, o, i), i
			})([At("w3m-account-context")], zo);
			var Vo = Object.defineProperty,
				Fo = Object.getOwnPropertyDescriptor,
				Go = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Fo(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Vo(e, o, i), i
				};
			let Ko = class extends kt {
				constructor() {
					super(), this.preload = !0, this.preloadData()
				}
				async loadImages(t) {
					try {
						null != t && t.length && await Promise.all(t.map(async t => De.preloadImage(t)))
					} catch {
						console.info("Unsuccessful attempt at preloading some images", t)
					}
				}
				async preloadListings() {
					var t;
					if (Tt.c.state.enableExplorer) {
						const {
							chains: e
						} = Tt.h.state;
						await Promise.all([Tt.f.getRecomendedWallets(), Tt.f.getInjectedWallets()]), Tt.h.setIsDataLoaded(!0);
						const {
							recomendedWallets: o
						} = Tt.f.state, n = Le.installedInjectedWallets(), r = null != (t = null == e ? void 0 : e.map(t => De.getChainIcon(t.id))) ? t : [], i = o.map(t => De.getWalletIcon(t)), a = n.map(t => De.getWalletIcon(t));
						await this.loadImages([...r, ...i, ...a])
					} else Tt.h.setIsDataLoaded(!0)
				}
				async preloadCustomImages() {
					const t = De.getCustomImageUrls();
					await this.loadImages(t)
				}
				async preloadData() {
					try {
						this.preload && (this.preload = !1, await Promise.all([this.preloadListings(), this.preloadCustomImages()]))
					} catch (t) {
						console.error(t), Tt.k.openToast("Failed preloading", "error")
					}
				}
			};
			Go([Pt()], Ko.prototype, "preload", 2), Ko = Go([At("w3m-explorer-context")], Ko);
			var Yo = Object.defineProperty,
				Jo = Object.getOwnPropertyDescriptor,
				Qo = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Jo(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Yo(e, o, i), i
				};
			let Xo = class extends kt {
				constructor() {
					super(), this.activeChainId = void 0, this.unwatchNetwork = void 0;
					const t = Tt.h.getSelectedChain();
					this.activeChainId = null == t ? void 0 : t.id, this.unwatchNetwork = Tt.b.client().watchNetwork(t => {
						const e = t.chain;
						e && this.activeChainId !== e.id && (Tt.h.setSelectedChain(e), this.activeChainId = e.id, Tt.a.resetBalance(), this.fetchBalance())
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unwatchNetwork) || t.call(this)
				}
				async fetchBalance() {
					if (Tt.c.state.enableAccountView) try {
						await Tt.a.fetchBalance()
					} catch (t) {
						console.error(t), Tt.k.openToast(De.getErrorMessage(t), "error")
					}
				}
			};
			Qo([Pt()], Xo.prototype, "activeChainId", 2), Xo = Qo([At("w3m-network-context")], Xo);
			var tn = Object.defineProperty,
				en = Object.getOwnPropertyDescriptor;
			let on = class extends kt {
				constructor() {
					super(), this.unsubscribeTheme = void 0, Yt.setTheme(), this.unsubscribeTheme = Tt.j.subscribe(Yt.setTheme), this.preloadThemeImages()
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unsubscribeTheme) || t.call(this)
				}
				async preloadThemeImages() {
					try {
						const {
							themeVariables: t
						} = Tt.j.state, e = [null == t ? void 0 : t["--w3m-background-image-url"], null == t ? void 0 : t["--w3m-logo-image-url"]].filter(Boolean);
						e.length && await Promise.all(e.map(async t => De.preloadImage(t)))
					} catch {
						console.info("Unsuccessful attempt at preloading some images")
					}
				}
			};
			on = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? en(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && tn(e, o, i), i
			})([At("w3m-theme-context")], on);
			var nn = Object.defineProperty,
				rn = Object.getOwnPropertyDescriptor;
			var an;
			let sn = class extends kt {
				constructor() {
					super(), this.unwatchOptions = void 0, this.unwatchAccount = void 0, this.timeout = void 0, this.isGenerated = !1, this.selectedChainId = null == (an = Tt.h.state.selectedChain) ? void 0 : an.id, this.isAccountConnected = Tt.a.state.isConnected, this.lastRetry = Date.now(), this.unwatchOptions = Tt.h.subscribe(t => {
						var e, o;
						(null == (e = t.selectedChain) ? void 0 : e.id) !== this.selectedChainId && (this.selectedChainId = null == (o = t.selectedChain) ? void 0 : o.id, this.connectAndWait())
					}), this.unwatchAccount = Tt.a.subscribe(t => {
						(this.isAccountConnected !== t.isConnected || !this.isGenerated) && (this.isAccountConnected = t.isConnected, setTimeout(this.connectAndWait.bind(this), 0))
					})
				}
				disconnectedCallback() {
					var t, e;
					null == (t = this.unwatchOptions) || t.call(this), null == (e = this.unwatchAccount) || e.call(this)
				}
				async connectAndWait() {
					if (clearTimeout(this.timeout), !this.isAccountConnected) {
						this.isGenerated = !0, this.timeout = setTimeout(this.connectAndWait.bind(this), 24e4);
						try {
							const {
								standaloneUri: t,
								selectedChain: e
							} = Tt.h.state;
							t ? Tt.l.setPairingUri(t) : await Tt.b.client().connectWalletConnect(t => Tt.l.setPairingUri(t), null == e ? void 0 : e.id)
						} catch (t) {
							console.error(t), Tt.l.setPairingError(!0), Tt.k.openToast("Connection request declined", "error"), Date.now() - this.lastRetry >= 1e3 && (this.lastRetry = Date.now(), this.connectAndWait())
						}
					}
				}
			};
			sn = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? rn(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && nn(e, o, i), i
			})([At("w3m-wc-connection-context")], sn);
			const ln = ht`:host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:var(--w3m-button-border-radius);padding:4px 4px 4px 8px}div button{border-radius:var(--w3m-secondary-button-border-radius);padding:4px 8px;padding-left:4px;height:auto;margin-left:10px;color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}.w3m-no-avatar{padding-left:8px}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}`;
			var cn = Object.defineProperty,
				dn = Object.getOwnPropertyDescriptor,
				hn = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? dn(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && cn(e, o, i), i
				};
			let mn = class extends kt {
				constructor() {
					super(), this.balance = "hide", this.avatar = "show", De.rejectStandaloneButtonComponent()
				}
				onOpen() {
					const {
						isStandalone: t
					} = Tt.h.state;
					t || (Tt.e.click({
						name: "ACCOUNT_BUTTON"
					}), Tt.g.open({
						route: "Account"
					}))
				}
				accountTemplate() {
					const t = "show" === this.avatar;
					return B`${t?B`<w3m-avatar></w3m-avatar>`:null}<w3m-address-text></w3m-address-text>`
				}
				render() {
					const t = "show" === this.balance,
						e = {
							"w3m-no-avatar": "hide" === this.avatar
						};
					return t ? B`<div><w3m-balance></w3m-balance><button @click="${this.onOpen}" class="${Rt(e)}">${this.accountTemplate()}</button></div>` : B`<w3m-button-big @click="${this.onOpen}">${this.accountTemplate()}</w3m-button-big>`
				}
			};
			mn.styles = [Yt.globalCss, ln], hn([It()], mn.prototype, "balance", 2), hn([It()], mn.prototype, "avatar", 2), mn = hn([At("w3m-account-button")], mn);
			const un = ht`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}`;
			var pn = Object.defineProperty,
				wn = Object.getOwnPropertyDescriptor,
				gn = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? wn(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && pn(e, o, i), i
				};
			let fn = class extends kt {
				constructor() {
					super(), this.chainId = 0, this.label = "", this.unsubscribeNetwork = void 0;
					const {
						selectedChain: t
					} = Tt.h.state;
					this.chainId = null == t ? void 0 : t.id, this.label = null == t ? void 0 : t.name, this.unsubscribeNetwork = Tt.h.subscribe(t => {
						let {
							selectedChain: e
						} = t;
						this.chainId = null == e ? void 0 : e.id, this.label = null == e ? void 0 : e.name
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unsubscribeNetwork) || t.call(this)
				}
				onClick() {
					Tt.i.push("SelectNetwork")
				}
				render() {
					const {
						chains: t,
						selectedChain: e
					} = Tt.h.state, o = null == t ? void 0 : t.map(t => t.id), n = e && (null == o ? void 0 : o.includes(e.id)), r = t && t.length <= 1 && n;
					return B`<button @click="${this.onClick}" ?disabled="${r}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-regular" color="accent">${this.label}</w3m-text></button>`
				}
			};
			fn.styles = [Yt.globalCss, un], gn([Pt()], fn.prototype, "chainId", 2), gn([Pt()], fn.prototype, "label", 2), fn = gn([At("w3m-account-network-button")], fn);
			const vn = ht`@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}`;
			var bn = Object.defineProperty,
				yn = Object.getOwnPropertyDescriptor,
				xn = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? yn(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && bn(e, o, i), i
				};
			let Cn = class extends kt {
				constructor() {
					super(), this.address = void 0, this.name = void 0, this.loading = !0, this.variant = "button", this.unsubscribeAccount = void 0, this.address = Tt.a.state.address, this.name = Tt.a.state.profileName, this.loading = !!Tt.a.state.profileLoading, this.unsubscribeAccount = Tt.a.subscribe(t => {
						let {
							address: e,
							profileName: o,
							profileLoading: n
						} = t;
						this.address = e, this.name = o, this.loading = !!n
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unsubscribeAccount) || t.call(this)
				}
				render() {
					var t;
					const e = "button" === this.variant,
						o = {
							"w3m-loading": this.loading
						};
					return B`<w3m-text class="${Rt(o)}" variant="${e?"medium-regular":"big-bold"}" color="${e?"inverse":"primary"}">${this.name?this.name:De.truncate(null!=(t=this.address)?t:"")}</w3m-text>`
				}
			};
			Cn.styles = [Yt.globalCss, vn], xn([Pt()], Cn.prototype, "address", 2), xn([Pt()], Cn.prototype, "name", 2), xn([Pt()], Cn.prototype, "loading", 2), xn([It()], Cn.prototype, "variant", 2), Cn = xn([At("w3m-address-text")], Cn);
			const _n = {
					onConnecting(t) {
						De.goToConnectingView(t)
					},
					onExternal(t) {
						De.handleConnectorConnection(t)
					},
					manualWalletsTemplate() {
						return Le.manualWallets().map(t => B`<w3m-wallet-button walletId="${t.id}" name="${t.name}" .onClick="${()=>this.onConnecting(t)}"></w3m-wallet-button>`)
					},
					recomendedWalletsTemplate() {
						let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						return Le.recomendedWallets(t).map(t => B`<w3m-wallet-button walletId="${t.id}" imageId="${t.image_id}" name="${t.name}" .onClick="${()=>this.onConnecting(t)}"></w3m-wallet-button>`)
					},
					externalWalletsTemplate() {
						return Le.externalWallets().map(t => B`<w3m-wallet-button name="${t.name}" walletId="${t.id}" .onClick="${()=>this.onExternal(t.id)}"></w3m-wallet-button>`)
					},
					recentWalletTemplate() {
						const t = Le.recentWallet();
						if (t) return B`<w3m-wallet-button name="${t.name}" walletId="${t.id}" imageId="${t.image_id}" .recent="${!0}" .onClick="${()=>this.onConnecting(t)}"></w3m-wallet-button>`
					},
					installedInjectedWalletsTemplate() {
						return Le.installedInjectedWallets().map(t => B`<w3m-wallet-button .installed="${!0}" name="${t.name}" walletId="${t.id}" imageId="${t.image_id}" .onClick="${()=>this.onConnecting(t)}"></w3m-wallet-button>`)
					},
					injectedWalletsTemplate() {
						return Le.injectedWallets().map(t => B`<w3m-wallet-button name="${t.name}" walletId="${t.id}" imageId="${t.image_id}" .onClick="${()=>this.onConnecting(t)}"></w3m-wallet-button>`)
					}
				},
				$n = ht`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.w3m-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.w3m-track svg{margin:0 5px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--w3m-wallet-icon-border-radius)}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-title{display:flex;align-items:center;margin-bottom:10px}.w3m-title svg{margin-right:6px}.w3m-title path{fill:var(--w3m-accent-color)}w3m-modal-footer .w3m-title{padding:0 10px}w3m-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--w3m-color-bg-1))}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
			var kn = Object.defineProperty,
				En = Object.getOwnPropertyDescriptor;
			let An = class extends kt {
				onGoToQrcode() {
					Tt.i.push("Qrcode")
				}
				onGetWallet() {
					Tt.i.push("GetWallet")
				}
				render() {
					const {
						recomendedWallets: t
					} = Tt.f.state, e = [...t, ...t], o = _n.externalWalletsTemplate(), n = _n.installedInjectedWalletsTemplate(), r = [...n, ...o].length > 0, i = 2 * Tt.d.RECOMMENDED_WALLET_AMOUNT;
					return B`<w3m-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${ge.QRCODE_ICON}"></w3m-modal-header><w3m-modal-content><div class="w3m-title">${ge.MOBILE_ICON}<w3m-text variant="small-regular" color="accent">WalletConnect</w3m-text></div><div class="w3m-slider"><div class="w3m-track">${[...Array(i)].map((t,o)=>{const n=e[o%e.length];return n?B`<w3m-wallet-image walletId="${n.id}" imageId="${n.image_id}"></w3m-wallet-image>`:ge.WALLET_PLACEHOLDER})}</div><w3m-button-big @click="${De.handleAndroidLinking}"><w3m-text variant="medium-regular" color="inverse">Select Wallet</w3m-text></w3m-button-big></div></w3m-modal-content>${r?B`<w3m-modal-footer><div class="w3m-title">${ge.WALLET_ICON}<w3m-text variant="small-regular" color="accent">Other</w3m-text></div><div class="w3m-grid">${n} ${o}</div></w3m-modal-footer>`:null}<w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Choose WalletConnect to see supported apps on your device${r?", or select from other options":""}`}</w3m-text><w3m-button variant="outline" .iconRight="${ge.ARROW_UP_RIGHT_ICON}" .onClick="${()=>this.onGetWallet()}">I don't have a wallet</w3m-button></w3m-info-footer>`
				}
			};
			An.styles = [Yt.globalCss, $n], An = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? En(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && kn(e, o, i), i
			})([At("w3m-android-wallet-selection")], An);
			const On = ht`@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}`;
			var jn = Object.defineProperty,
				In = Object.getOwnPropertyDescriptor,
				Pn = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? In(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && jn(e, o, i), i
				};
			let Mn = class extends kt {
				constructor() {
					super(), this.address = void 0, this.avatar = void 0, this.loading = !0, this.size = "small", this.unsubscribeAccount = void 0, this.address = Tt.a.state.address, this.avatar = Tt.a.state.profileAvatar, this.loading = !!Tt.a.state.profileLoading, this.unsubscribeAccount = Tt.a.subscribe(t => {
						let {
							address: e,
							profileAvatar: o,
							profileLoading: n
						} = t;
						this.address = e, this.avatar = o, this.loading = !!n
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unsubscribeAccount) || t.call(this)
				}
				render() {
					const t = {
						"w3m-placeholder": !0,
						"w3m-small": "small" === this.size,
						"w3m-medium": "medium" === this.size
					};
					return this.avatar ? B`<img class="${Rt(t)}" src="${this.avatar}">` : this.address ? (De.generateAvatarColors(this.address), B`<div class="${Rt(t)}">${this.loading?B`<div class="w3m-loader"></div>`:null}</div>`) : null
				}
			};
			Mn.styles = [Yt.globalCss, On], Pn([Pt()], Mn.prototype, "address", 2), Pn([Pt()], Mn.prototype, "avatar", 2), Pn([Pt()], Mn.prototype, "loading", 2), Pn([It()], Mn.prototype, "size", 2), Mn = Pn([At("w3m-avatar")], Mn);
			const Tn = ht`div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}`;
			var Sn = Object.defineProperty,
				Rn = Object.getOwnPropertyDescriptor,
				Nn = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Rn(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Sn(e, o, i), i
				};
			let Ln = class extends kt {
				constructor() {
					var t, e;
					super(), this.symbol = void 0, this.amount = void 0, this.unsubscribeAccount = void 0, this.symbol = null == (t = Tt.a.state.balance) ? void 0 : t.symbol, this.amount = null == (e = Tt.a.state.balance) ? void 0 : e.amount, this.unsubscribeAccount = Tt.a.subscribe(t => {
						let {
							balance: e
						} = t;
						this.symbol = null == e ? void 0 : e.symbol, this.amount = null == e ? void 0 : e.amount
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unsubscribeAccount) || t.call(this)
				}
				render() {
					let t = "_._";
					return "0.0" === this.amount ? t = "0" : "string" == typeof this.amount && this.amount.length > 6 ? t = this.amount.substring(0, 6) : "string" == typeof this.amount && (t = this.amount), B`<div><w3m-token-image symbol="${this.symbol}"></w3m-token-image><w3m-text variant="medium-regular" color="primary">${t} ${this.symbol}</w3m-text></div>`
				}
			};
			Ln.styles = [Yt.globalCss, Tn], Nn([Pt()], Ln.prototype, "symbol", 2), Nn([Pt()], Ln.prototype, "amount", 2), Ln = Nn([At("w3m-balance")], Ln);
			const Dn = ht`:host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-accent-fill-color)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}`;
			var Un = Object.defineProperty,
				Wn = Object.getOwnPropertyDescriptor,
				Bn = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Wn(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Un(e, o, i), i
				};
			let Hn = class extends kt {
				constructor() {
					super(), this.loading = !1, this.label = "Connect Wallet", this.icon = "show", this.modalUnsub = void 0, De.rejectStandaloneButtonComponent(), this.modalUnsub = Tt.g.subscribe(t => {
						t.open && (this.loading = !0), t.open || (this.loading = !1)
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.modalUnsub) || t.call(this)
				}
				iconTemplate() {
					return "show" === this.icon ? ge.WALLET_CONNECT_ICON : null
				}
				onClick() {
					Tt.a.state.isConnected ? this.onDisconnect() : this.onConnect()
				}
				async onConnect() {
					this.loading = !0, Tt.e.click({
						name: "CONNECT_BUTTON"
					}), await Tt.g.open(), Tt.g.state.open || (this.loading = !1)
				}
				async onDisconnect() {
					Tt.e.click({
						name: "DISCONNECT_BUTTON"
					}), await Tt.b.client().disconnect()
				}
				render() {
					return B`<w3m-button-big .disabled="${this.loading}" @click="${this.onClick}">${this.loading?B`<w3m-spinner></w3m-spinner><w3m-text variant="medium-regular" color="accent">Connecting...</w3m-text>`:B`${this.iconTemplate()}<w3m-text variant="medium-regular" color="inverse">${this.label}</w3m-text>`}</w3m-button-big>`
				}
			};
			Hn.styles = [Yt.globalCss, Dn], Bn([Pt()], Hn.prototype, "loading", 2), Bn([It()], Hn.prototype, "label", 2), Bn([It()], Hn.prototype, "icon", 2), Hn = Bn([At("w3m-connect-button")], Hn);
			const Zn = ht`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:90px;height:90px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.w3m-stale svg,.w3m-stale use{display:none}`;
			var qn = Object.defineProperty,
				zn = Object.getOwnPropertyDescriptor,
				Vn = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? zn(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && qn(e, o, i), i
				};
			let Fn = class extends kt {
				constructor() {
					super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = !1, this.isStale = !1, this.label = ""
				}
				svgLoaderTemplate() {
					var t, e;
					const o = null != (e = null == (t = Tt.j.state.themeVariables) ? void 0 : t["--w3m-wallet-icon-large-border-radius"]) ? e : Yt.getPreset("--w3m-wallet-icon-large-border-radius");
					let n = 0;
					return n = o.includes("%") ? .88 * parseInt(o, 10) : parseInt(o, 10), B`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="w3m-loader" x="2" y="2" width="106" height="106" rx="${n*=1.17}"/><use xlink:href="#w3m-loader" stroke-dasharray="106 ${317-1.57*n}" stroke-dashoffset="${425-1.8*n}"></use></svg>`
				}
				render() {
					const t = {
						"w3m-error": this.isError,
						"w3m-stale": this.isStale
					};
					return B`<div class="${Rt(t)}">${this.svgLoaderTemplate()}<w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}"></w3m-wallet-image></div><w3m-text variant="medium-regular" color="${this.isError?"error":"primary"}">${this.isError?"Connection declined":this.label}</w3m-text>`
				}
			};
			Fn.styles = [Yt.globalCss, Zn], Vn([It()], Fn.prototype, "walletId", 2), Vn([It()], Fn.prototype, "imageId", 2), Vn([It()], Fn.prototype, "isError", 2), Vn([It()], Fn.prototype, "isStale", 2), Vn([It()], Fn.prototype, "label", 2), Fn = Vn([At("w3m-connector-waiting")], Fn);
			var Gn = Object.defineProperty,
				Kn = Object.getOwnPropertyDescriptor,
				Yn = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Kn(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Gn(e, o, i), i
				};
			let Jn = class extends kt {
				constructor() {
					super(), this.isConnected = !1, this.label = "Connect Wallet", this.icon = "show", this.avatar = "show", this.balance = "hide", this.unsubscribeAccount = void 0, De.rejectStandaloneButtonComponent(), this.isConnected = Tt.a.state.isConnected, this.unsubscribeAccount = Tt.a.subscribe(t => {
						let {
							isConnected: e
						} = t;
						this.isConnected = e
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unsubscribeAccount) || t.call(this)
				}
				render() {
					const {
						enableAccountView: t
					} = Tt.c.state, e = this.balance, o = this.label, n = this.icon, r = this.avatar;
					return this.isConnected && t ? B`<w3m-account-button balance="${e}" avatar="${r}"></w3m-account-button>` : B`<w3m-connect-button label="${this.isConnected?"Disconnect":o}" icon="${n}"></w3m-connect-button>`
				}
			};
			Yn([Pt()], Jn.prototype, "isConnected", 2), Yn([It()], Jn.prototype, "label", 2), Yn([It()], Jn.prototype, "icon", 2), Yn([It()], Jn.prototype, "avatar", 2), Yn([It()], Jn.prototype, "balance", 2), Jn = Yn([At("w3m-core-button")], Jn);
			const Qn = ht`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-accent-color)}`;
			var Xn = Object.defineProperty,
				tr = Object.getOwnPropertyDescriptor;
			let er = class extends kt {
				render() {
					const {
						isStandalone: t
					} = Tt.h.state, {
						explorerExcludedWalletIds: e,
						enableExplorer: o
					} = Tt.c.state, n = "ALL" !== e && o, r = _n.manualWalletsTemplate(), i = _n.recomendedWalletsTemplate(), a = _n.externalWalletsTemplate(), s = _n.recentWalletTemplate(), l = _n.installedInjectedWalletsTemplate();
					let c = [s, ...r, ...i];
					t || (c = [...l, s, ...a, ...r, ...i]);
					const d = (c = c.filter(Boolean)).length > 4 || n;
					let h = [];
					const m = !!(h = d ? c.slice(0, 3) : c).length;
					return B`<w3m-modal-header .border="${!0}" title="Connect your wallet" .onAction="${De.handleUriCopy}" .actionIcon="${ge.COPY_ICON}"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">${ge.MOBILE_ICON}<w3m-text variant="small-regular" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">${ge.SCAN_ICON}<w3m-text variant="small-regular" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>${m?B`<w3m-modal-footer><div class="w3m-desktop-title">${ge.DESKTOP_ICON}<w3m-text variant="small-regular" color="accent">Desktop</w3m-text></div><div class="w3m-grid">${h} ${d?B`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`:null}</div></w3m-modal-footer>`:null}`
				}
			};
			er.styles = [Yt.globalCss, Qn], er = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? tr(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && Xn(e, o, i), i
			})([At("w3m-desktop-wallet-selection")], er);
			const or = ht`div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
			var nr = Object.defineProperty,
				rr = Object.getOwnPropertyDescriptor;
			let ir = class extends kt {
				render() {
					const {
						termsOfServiceUrl: t,
						privacyPolicyUrl: e
					} = Tt.c.state;
					return (null != t ? t : e) ? B`<div><w3m-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${t?B`<a href="${t}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`:null} ${t&&e?"and":null} ${e?B`<a href="${e}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`:null}</w3m-text></div>` : null
				}
			};
			ir.styles = [Yt.globalCss, or], ir = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? rr(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && nr(e, o, i), i
			})([At("w3m-legal-notice")], ir);
			const ar = ht`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
			var sr = Object.defineProperty,
				lr = Object.getOwnPropertyDescriptor;
			let cr = class extends kt {
				onQrcode() {
					Tt.i.push("Qrcode")
				}
				render() {
					const {
						isStandalone: t
					} = Tt.h.state, {
						explorerExcludedWalletIds: e,
						enableExplorer: o
					} = Tt.c.state, n = "ALL" !== e && o, r = _n.manualWalletsTemplate(), i = _n.recomendedWalletsTemplate(), a = _n.externalWalletsTemplate(), s = _n.recentWalletTemplate(), l = _n.installedInjectedWalletsTemplate();
					let c = [s, ...r, ...i];
					t || (c = [...l, s, ...a, ...r, ...i]);
					const d = (c = c.filter(Boolean)).length > 8 || n;
					let h = [];
					const m = !!(h = d ? c.slice(0, 7) : c).length;
					return B`<w3m-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${ge.QRCODE_ICON}"></w3m-modal-header>${m?B`<w3m-modal-content><div>${h} ${d?B`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`:null}</div></w3m-modal-content>`:null}`
				}
			};
			cr.styles = [Yt.globalCss, ar], cr = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? lr(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && sr(e, o, i), i
			})([At("w3m-mobile-wallet-selection")], cr);
			const dr = ht`:host{all:initial}.w3m-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--w3m-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}@media(max-height:720px) and (orientation:landscape){.w3m-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.w3m-active{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) var(--w3m-container-border-radius) var(--w3m-container-border-radius);border:1px solid var(--w3m-color-overlay);overflow:hidden}.w3m-card{width:100%;position:relative;border-radius:var(--w3m-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) 0 0}.w3m-card{border-radius:var(--w3m-container-border-radius) var(--w3m-container-border-radius) 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:440px){.w3m-container{border:0}}`;
			var hr = Object.defineProperty,
				mr = Object.getOwnPropertyDescriptor,
				ur = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? mr(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && hr(e, o, i), i
				};
			let pr = class extends kt {
				constructor() {
					super(), this.open = !1, this.active = !1, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = Tt.g.subscribe(t => {
						t.open ? this.onOpenModalEvent() : this.onCloseModalEvent()
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unsubscribeModal) || t.call(this)
				}
				get overlayEl() {
					return De.getShadowRootElement(this, ".w3m-overlay")
				}
				get containerEl() {
					return De.getShadowRootElement(this, ".w3m-container")
				}
				toggleBodyScroll(t) {
					if (document.querySelector("body"))
						if (t) {
							const t = document.getElementById("w3m-styles");
							null == t || t.remove()
						} else document.head.insertAdjacentHTML("beforeend", '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>')
				}
				onCloseModal(t) {
					t.target === t.currentTarget && Tt.g.close()
				}
				onOpenModalEvent() {
					this.toggleBodyScroll(!1), this.addKeyboardEvents(), this.open = !0, setTimeout(async () => {
						const t = De.isMobileAnimation() ? {
							y: ["50vh", "0vh"]
						} : {
							scale: [.98, 1]
						};
						await Promise.all([Bt(this.overlayEl, {
							opacity: [0, 1]
						}, {
							delay: .1,
							duration: .2
						}).finished, Bt(this.containerEl, t, {
							delay: .1,
							duration: .2
						}).finished]), this.active = !0
					}, 0)
				}
				async onCloseModalEvent() {
					this.toggleBodyScroll(!0), this.removeKeyboardEvents();
					const t = De.isMobileAnimation() ? {
						y: ["0vh", "50vh"]
					} : {
						scale: [1, .98]
					};
					await Promise.all([Bt(this.overlayEl, {
						opacity: [1, 0]
					}, {
						duration: .2
					}).finished, Bt(this.containerEl, t, {
						duration: .2
					}).finished]), this.containerEl.removeAttribute("style"), this.active = !1, this.open = !1
				}
				addKeyboardEvents() {
					this.abortController = new AbortController, window.addEventListener("keydown", t => {
						var e;
						"Escape" === t.key ? Tt.g.close() : "Tab" === t.key && (null != (e = t.target) && e.tagName.includes("W3M-") || this.containerEl.focus())
					}, this.abortController), this.containerEl.focus()
				}
				removeKeyboardEvents() {
					var t;
					null == (t = this.abortController) || t.abort(), this.abortController = void 0
				}
				managedModalContextTemplate() {
					const {
						isStandalone: t
					} = Tt.h.state;
					return t ? null : B`<w3m-wc-connection-context></w3m-wc-connection-context><w3m-account-context></w3m-account-context><w3m-network-context></w3m-network-context>`
				}
				render() {
					const t = {
						"w3m-overlay": !0,
						"w3m-active": this.active
					};
					return B`<w3m-explorer-context></w3m-explorer-context><w3m-theme-context></w3m-theme-context>${this.managedModalContextTemplate()}<div id="w3m-modal" class="${Rt(t)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">${this.open?B`<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>`:null}</div></div>`
				}
			};
			pr.styles = [Yt.globalCss, dr], ur([Pt()], pr.prototype, "open", 2), ur([Pt()], pr.prototype, "active", 2), pr = ur([At("w3m-modal")], pr);
			const wr = ht`:host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}`;
			var gr = Object.defineProperty,
				fr = Object.getOwnPropertyDescriptor,
				vr = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? fr(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && gr(e, o, i), i
				};
			let br = class extends kt {
				constructor() {
					super(), this.chainId = "", this.label = "", this.wrongNetwork = !1, this.unsubscribeNetwork = void 0, De.rejectStandaloneButtonComponent();
					const {
						selectedChain: t
					} = Tt.h.state;
					this.onSetChainData(t), this.unsubscribeNetwork = Tt.h.subscribe(t => {
						let {
							selectedChain: e
						} = t;
						this.onSetChainData(e)
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unsubscribeNetwork) || t.call(this)
				}
				onSetChainData(t) {
					if (t) {
						const {
							chains: e
						} = Tt.h.state, o = null == e ? void 0 : e.map(t => t.id);
						this.chainId = t.id.toString(), this.wrongNetwork = !(null != o && o.includes(t.id)), this.label = this.wrongNetwork ? "Wrong Network" : t.name
					}
				}
				onClick() {
					Tt.e.click({
						name: "NETWORK_BUTTON"
					}), Tt.g.open({
						route: "SelectNetwork"
					})
				}
				render() {
					var t;
					const {
						chains: e
					} = Tt.h.state, o = e && e.length > 1;
					return B`<w3m-button-big @click="${this.onClick}" ?disabled="${!o}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="medium-regular" color="inverse">${null!=(t=this.label)&&t.length?this.label:"Select Network"}</w3m-text></w3m-button-big>`
				}
			};
			br.styles = [Yt.globalCss, wr], vr([Pt()], br.prototype, "chainId", 2), vr([Pt()], br.prototype, "label", 2), vr([Pt()], br.prototype, "wrongNetwork", 2), br = vr([At("w3m-network-switch")], br);
			const yr = ht`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:1px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-network-image{width:92px;height:92px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}`;
			var xr = Object.defineProperty,
				Cr = Object.getOwnPropertyDescriptor,
				_r = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Cr(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && xr(e, o, i), i
				};
			let $r = class extends kt {
				constructor() {
					super(...arguments), this.chainId = void 0, this.isError = !1, this.label = ""
				}
				svgLoaderTemplate() {
					return B`<svg width="54" height="59" viewBox="0 0 54 59" fill="none" class="w3m-loader"><path id="w3m-loader-path" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/><use xlink:href="#w3m-loader-path" stroke-dasharray="54 118" stroke-dashoffset="172"></use></svg>`
				}
				render() {
					const t = {
						"w3m-error": this.isError
					};
					return B`<div class="${Rt(t)}">${this.svgLoaderTemplate()}<w3m-network-image chainId="${this.chainId}"></w3m-network-image></div><w3m-text variant="medium-regular" color="${this.isError?"error":"primary"}">${this.isError?"Switch declined":this.label}</w3m-text>`
				}
			};
			$r.styles = [Yt.globalCss, yr], _r([It()], $r.prototype, "chainId", 2), _r([It()], $r.prototype, "isError", 2), _r([It()], $r.prototype, "label", 2), $r = _r([At("w3m-network-waiting")], $r);
			const kr = ht`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}w3m-button{margin:0 5px}`;
			var Er = Object.defineProperty,
				Ar = Object.getOwnPropertyDescriptor,
				Or = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Ar(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Er(e, o, i), i
				};
			let jr = class extends kt {
				constructor() {
					super(...arguments), this.isMobile = !1, this.isInjected = !1, this.isInjectedInstalled = !1, this.isDesktop = !1, this.isWeb = !1, this.isRetry = !1
				}
				onMobile() {
					Tt.d.isMobile() ? Tt.i.replace("MobileConnecting") : Tt.i.replace("MobileQrcodeConnecting")
				}
				onInjected() {
					this.isInjectedInstalled ? Tt.i.replace("InjectedConnecting") : Tt.i.replace("InstallWallet")
				}
				onDesktop() {
					Tt.i.replace("DesktopConnecting")
				}
				onWeb() {
					Tt.i.replace("WebConnecting")
				}
				render() {
					const {
						isStandalone: t
					} = Tt.h.state;
					return B`<div>${this.isRetry?B`<slot></slot>`:null} ${this.isMobile?B`<w3m-button .onClick="${this.onMobile}" .iconLeft="${ge.MOBILE_ICON}" variant="outline">Mobile</w3m-button>`:null} ${this.isInjected&&!t?B`<w3m-button .onClick="${this.onInjected}" .iconLeft="${ge.WALLET_ICON}" variant="outline">Browser</w3m-button>`:null} ${this.isDesktop?B`<w3m-button .onClick="${this.onDesktop}" .iconLeft="${ge.DESKTOP_ICON}" variant="outline">Desktop</w3m-button>`:null} ${this.isWeb?B`<w3m-button .onClick="${this.onWeb}" .iconLeft="${ge.GLOBE_ICON}" variant="outline">Web</w3m-button>`:null}</div>`
				}
			};
			jr.styles = [Yt.globalCss, kr], Or([It()], jr.prototype, "isMobile", 2), Or([It()], jr.prototype, "isInjected", 2), Or([It()], jr.prototype, "isInjectedInstalled", 2), Or([It()], jr.prototype, "isDesktop", 2), Or([It()], jr.prototype, "isWeb", 2), Or([It()], jr.prototype, "isRetry", 2), jr = Or([At("w3m-platform-selection")], jr);
			const Ir = ht`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--w3m-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--w3m-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--w3m-wallet-icon-border-radius)/ 2);border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
			var Pr = Object.defineProperty,
				Mr = Object.getOwnPropertyDescriptor;
			let Tr = class extends kt {
				onClick() {
					Tt.i.push("WalletExplorer")
				}
				render() {
					const {
						recomendedWallets: t
					} = Tt.f.state, e = [...t, ...Le.manualWallets()].reverse().slice(0, 4);
					return B`<button @click="${this.onClick}"><div class="w3m-icons">${e.map(t=>{const e=De.getWalletIcon(t);if(e)return B`<img src="${e}">`;const o=De.getWalletIcon({id:t.id});return o?B` < img src = "${o}" > `:ge.WALLET_PLACEHOLDER})} ${[...Array(4-e.length)].map(()=>ge.WALLET_PLACEHOLDER)}</div><w3m-text variant="xsmall-regular">View All</w3m-text></button>`
				}
			};
			Tr.styles = [Yt.globalCss, Ir], Tr = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? Mr(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && Pr(e, o, i), i
			})([At("w3m-view-all-wallets-button")], Tr);
			const Sr = ht`.w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
			var Rr = Object.defineProperty,
				Nr = Object.getOwnPropertyDescriptor,
				Lr = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Nr(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Rr(e, o, i), i
				};
			let Dr = class extends kt {
				constructor() {
					super(), this.walletId = "", this.imageId = "", this.uri = "", this.unwatchWcConnection = void 0, setTimeout(() => {
						const {
							pairingUri: t
						} = Tt.l.state, {
							standaloneUri: e
						} = Tt.h.state;
						this.uri = null != e ? e : t
					}, 0), this.unwatchWcConnection = Tt.l.subscribe(t => {
						t.pairingUri && (this.uri = t.pairingUri)
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unwatchWcConnection) || t.call(this)
				}
				get overlayEl() {
					return De.getShadowRootElement(this, ".w3m-qr-container")
				}
				render() {
					return B`<div class="w3m-qr-container">${this.uri?B`<w3m-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${this.walletId}" imageId="${this.imageId}"></w3m-qrcode>`:B`<w3m-spinner></w3m-spinner>`}</div>`
				}
			};
			Dr.styles = [Yt.globalCss, Sr], Lr([It()], Dr.prototype, "walletId", 2), Lr([It()], Dr.prototype, "imageId", 2), Lr([Pt()], Dr.prototype, "uri", 2), Dr = Lr([At("w3m-walletconnect-qr")], Dr);
			const Ur = ht`.w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-success-color);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-success-color),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}`;
			var Wr = Object.defineProperty,
				Br = Object.getOwnPropertyDescriptor;
			let Hr = class extends kt {
				async onDisconnect() {
					await Tt.b.client().disconnect()
				}
				async onCopyAddress() {
					var t;
					await navigator.clipboard.writeText(null != (t = Tt.a.state.address) ? t : ""), Tt.k.openToast("Address copied", "success")
				}
				render() {
					return B`<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-regular" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="${this.onCopyAddress}" .icon="${ge.ACCOUNT_COPY}"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="${this.onDisconnect}" .icon="${ge.ACCOUNT_DISCONNECT}"></w3m-box-button></div></w3m-modal-footer>`
				}
			};
			Hr.styles = [Yt.globalCss, Ur], Hr = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? Br(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && Wr(e, o, i), i
			})([At("w3m-account-view")], Hr);
			var Zr = Object.defineProperty,
				qr = Object.getOwnPropertyDescriptor;
			let zr = class extends kt {
				viewTemplate() {
					return Tt.d.isAndroid() ? B`<w3m-android-wallet-selection></w3m-android-wallet-selection>` : Tt.d.isMobile() ? B`<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>` : B`<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>`
				}
				render() {
					return B`${this.viewTemplate()}<w3m-legal-notice></w3m-legal-notice>`
				}
			};
			zr.styles = [Yt.globalCss], zr = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? qr(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && Zr(e, o, i), i
			})([At("w3m-connect-wallet-view")], zr);
			const Vr = ht`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
			var Fr = Object.defineProperty,
				Gr = Object.getOwnPropertyDescriptor,
				Kr = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Gr(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Fr(e, o, i), i
				};
			let Yr = class extends kt {
				constructor() {
					super(), this.isError = !1, this.unwatchConnection = void 0, this.openDesktopApp(), this.unwatchConnection = Tt.l.subscribe(t => {
						this.isError = t.pairingError
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unwatchConnection) || t.call(this)
				}
				onFormatAndRedirect(t) {
					const {
						desktop: e,
						name: o
					} = Tt.d.getWalletRouterData(), n = null == e ? void 0 : e.native;
					if (n) {
						const e = Tt.d.formatNativeUrl(n, t, o);
						Tt.d.openHref(e, "_self")
					}
				}
				openDesktopApp() {
					Tt.l.setPairingError(!1);
					const {
						standaloneUri: t
					} = Tt.h.state, {
						pairingUri: e
					} = Tt.l.state, o = Tt.d.getWalletRouterData();
					De.setRecentWallet(o), t ? this.onFormatAndRedirect(t) : this.onFormatAndRedirect(e)
				}
				render() {
					const {
						name: t,
						id: e,
						image_id: o
					} = Tt.d.getWalletRouterData(), {
						isMobile: n,
						isInjected: r,
						isWeb: i
					} = De.getCachedRouterWalletPlatforms();
					return B`<w3m-modal-header title="${t}" .onAction="${De.handleUriCopy}" .actionIcon="${ge.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${o}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Connection can continue loading if ${t} is not installed on your device`}</w3m-text><w3m-platform-selection .isMobile="${n}" .isInjected="${r}" .isWeb="${i}" .isRetry="${!0}"><w3m-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${ge.RETRY_ICON}">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`
				}
			};
			Yr.styles = [Yt.globalCss, Vr], Kr([Pt()], Yr.prototype, "isError", 2), Yr = Kr([At("w3m-desktop-connecting-view")], Yr);
			const Jr = ht`.w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}`;
			var Qr = Object.defineProperty,
				Xr = Object.getOwnPropertyDescriptor;
			let ti = class extends kt {
				onGet(t) {
					Tt.d.openHref(t, "_blank")
				}
				render() {
					const t = Tt.f.state.recomendedWallets.slice(0, 5),
						e = Le.manualWallets().slice(0, 5),
						o = t.length,
						n = e.length;
					return B`<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>${o?t.map(t=>B`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${t.id}" imageId="${t.image_id}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${t.name}</w3m-text><w3m-button .iconRight="${ge.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGet(t.homepage)}">Get</w3m-button></div></div>`):null} ${n?e.map(t=>B`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${t.id}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${t.name}</w3m-text><w3m-button .iconRight="${ge.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGet(t.links.universal)}">Get</w3m-button></div></div>`):null}</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-regular">Not what you're looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there's something for everyone</w3m-text><w3m-button .onClick="${De.openWalletExplorerUrl}" .iconRight="${ge.ARROW_UP_RIGHT_ICON}">Explore Wallets</w3m-button></div>`
				}
			};
			ti.styles = [Yt.globalCss, Jr], ti = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? Xr(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && Qr(e, o, i), i
			})([At("w3m-get-wallet-view")], ti);
			const ei = ht`.w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}`;
			var oi = Object.defineProperty,
				ni = Object.getOwnPropertyDescriptor;
			let ri = class extends kt {
				constructor() {
					super(...arguments), this.learnUrl = "https://ethereum.org/en/wallets/"
				}
				onGet() {
					Tt.c.state.enableExplorer ? Tt.i.push("GetWallet") : De.openWalletExplorerUrl()
				}
				onLearnMore() {
					Tt.d.openHref(this.learnUrl, "_blank")
				}
				render() {
					return B`<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">${ge.HELP_CHART_IMG} ${ge.HELP_PAINTING_IMG} ${ge.HELP_ETH_IMG}</div><w3m-text variant="medium-regular">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${ge.HELP_KEY_IMG} ${ge.HELP_USER_IMG} ${ge.HELP_LOCK_IMG}</div><w3m-text variant="medium-regular">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${ge.HELP_COMPAS_IMG} ${ge.HELP_NOUN_IMG} ${ge.HELP_DAO_IMG}</div><w3m-text variant="medium-regular">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="${this.onGet.bind(this)}" .iconLeft="${ge.WALLET_ICON}">Get a Wallet</w3m-button><w3m-button .onClick="${this.onLearnMore.bind(this)}" .iconRight="${ge.ARROW_UP_RIGHT_ICON}">Learn More</w3m-button></div></w3m-modal-content>`
				}
			};
			ri.styles = [Yt.globalCss, ei], ri = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? ni(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && oi(e, o, i), i
			})([At("w3m-help-view")], ri);
			const ii = ht`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
			var ai = Object.defineProperty,
				si = Object.getOwnPropertyDescriptor,
				li = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? si(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && ai(e, o, i), i
				};
			let ci = class extends kt {
				constructor() {
					super(), this.isError = !1, this.connector = Tt.b.client().getConnectorById("injected"), this.openInjectedApp()
				}
				async openInjectedApp() {
					const {
						ready: t
					} = this.connector;
					t && (this.isError = !1, await De.handleConnectorConnection("injected", () => {
						this.isError = !0
					}))
				}
				render() {
					const {
						name: t,
						id: e,
						image_id: o
					} = Tt.d.getWalletRouterData(), {
						isMobile: n,
						isDesktop: r,
						isWeb: i
					} = De.getCachedRouterWalletPlatforms();
					return B`<w3m-modal-header title="${t}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${o}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Connection can be declined if multiple wallets are installed or previous request is still active</w3m-text><w3m-platform-selection .isMobile="${n}" .isDesktop="${r}" .isWeb="${i}" .isRetry="${!0}"><w3m-button .onClick="${this.openInjectedApp.bind(this)}" .disabled="${!this.isError}" .iconRight="${ge.RETRY_ICON}">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`
				}
			};
			ci.styles = [Yt.globalCss, ii], li([Pt()], ci.prototype, "isError", 2), ci = li([At("w3m-injected-connecting-view")], ci);
			const di = ht`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
			var hi = Object.defineProperty,
				mi = Object.getOwnPropertyDescriptor;
			let ui = class extends kt {
				onInstall(t) {
					t && Tt.d.openHref(t, "_blank")
				}
				render() {
					const {
						name: t,
						id: e,
						image_id: o,
						homepage: n
					} = Tt.d.getWalletRouterData();
					return B`<w3m-modal-header title="${t}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${o}" label="Not Detected" .isStale="${!0}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Download ${t} to continue. If multiple browser extensions are installed, disable non ${t} ones and try again`}</w3m-text><w3m-button .onClick="${()=>this.onInstall(n)}" .iconLeft="${ge.ARROW_DOWN_ICON}">Download</w3m-button></w3m-info-footer>`
				}
			};
			ui.styles = [Yt.globalCss, di], ui = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? mi(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && hi(e, o, i), i
			})([At("w3m-install-wallet-view")], ui);
			const pi = ht`w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}w3m-info-footer{display:flex;width:100%}.w3m-app-store{justify-content:space-between}.w3m-app-store w3m-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--w3m-wallet-icon-small-border-radius)}.w3m-app-store div{display:flex;align-items:center}.w3m-app-store w3m-button{margin-right:-10px}.w3m-note{flex-direction:column;align-items:center;padding:5px 0}.w3m-note w3m-text{text-align:center}w3m-platform-selection{margin-top:-15px}.w3m-note w3m-text{margin-top:15px}.w3m-note w3m-text span{color:var(--w3m-accent-color)}`;
			var wi = Object.defineProperty,
				gi = Object.getOwnPropertyDescriptor,
				fi = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? gi(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && wi(e, o, i), i
				};
			let vi = class extends kt {
				constructor() {
					super(), this.isError = !1, this.unwatchConnection = void 0, this.openMobileApp(), this.unwatchConnection = Tt.l.subscribe(t => {
						this.isError = t.pairingError
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unwatchConnection) || t.call(this)
				}
				onFormatAndRedirect(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const {
						mobile: o,
						name: n
					} = Tt.d.getWalletRouterData(), r = null == o ? void 0 : o.native, i = null == o ? void 0 : o.universal;
					if (r && !e) {
						const e = Tt.d.formatNativeUrl(r, t, n);
						Tt.d.openHref(e, "_self")
					} else if (i) {
						const e = Tt.d.formatUniversalUrl(i, t, n);
						Tt.d.openHref(e, "_self")
					}
				}
				openMobileApp() {
					let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					Tt.l.setPairingError(!1);
					const {
						standaloneUri: e
					} = Tt.h.state, {
						pairingUri: o
					} = Tt.l.state, n = Tt.d.getWalletRouterData();
					De.setRecentWallet(n), e ? this.onFormatAndRedirect(e, t) : this.onFormatAndRedirect(o, t)
				}
				onGoToAppStore(t) {
					t && Tt.d.openHref(t, "_blank")
				}
				render() {
					const {
						name: t,
						id: e,
						image_id: o,
						app: n,
						mobile: r
					} = Tt.d.getWalletRouterData(), {
						isWeb: i
					} = De.getCachedRouterWalletPlatforms(), a = null == n ? void 0 : n.ios, s = null == r ? void 0 : r.universal;
					return B`<w3m-modal-header title="${t}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${o}" label="Tap 'Open' to continue…" .isError="${this.isError}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer class="w3m-note"><w3m-platform-selection .isWeb="${i}" .isRetry="${!0}"><w3m-button .onClick="${()=>this.openMobileApp(!1)}" .iconRight="${ge.RETRY_ICON}">Retry</w3m-button></w3m-platform-selection>${s?B`<w3m-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${()=>this.openMobileApp(!0)}">Try this alternate link</span></w3m-text>`:null}</w3m-info-footer><w3m-info-footer class="w3m-app-store"><div><w3m-wallet-image walletId="${e}" imageId="${o}"></w3m-wallet-image><w3m-text>${`Get ${t}`}</w3m-text></div><w3m-button .iconRight="${ge.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGoToAppStore(a)}" variant="ghost">App Store</w3m-button></w3m-info-footer>`
				}
			};
			vi.styles = [Yt.globalCss, pi], fi([Pt()], vi.prototype, "isError", 2), vi = fi([At("w3m-mobile-connecting-view")], vi);
			const bi = ht`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
			var yi = Object.defineProperty,
				xi = Object.getOwnPropertyDescriptor;
			let Ci = class extends kt {
				render() {
					const {
						name: t,
						id: e,
						image_id: o
					} = Tt.d.getWalletRouterData(), {
						isInjected: n,
						isDesktop: r,
						isWeb: i
					} = De.getCachedRouterWalletPlatforms();
					return B`<w3m-modal-header title="${t}" .onAction="${De.handleUriCopy}" .actionIcon="${ge.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr walletId="${e}" imageId="${o}"></w3m-walletconnect-qr></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${t} app`}</w3m-text><w3m-platform-selection .isDesktop="${r}" .isInjected="${n}" .isWeb="${i}"></w3m-platform-selection></w3m-info-footer>`
				}
			};
			Ci.styles = [Yt.globalCss, bi], Ci = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? xi(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && yi(e, o, i), i
			})([At("w3m-mobile-qr-connecting-view")], Ci);
			var _i = Object.defineProperty,
				$i = Object.getOwnPropertyDescriptor;
			let ki = class extends kt {
				render() {
					return B`<w3m-modal-header title="Scan the code" .onAction="${De.handleUriCopy}" .actionIcon="${ge.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>`
				}
			};
			ki.styles = [Yt.globalCss], ki = ((t, e, o, n) => {
				for (var r, i = n > 1 ? void 0 : n ? $i(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
				return n && i && _i(e, o, i), i
			})([At("w3m-qrcode-view")], ki);
			const Ei = ht`div{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center}`;
			var Ai = Object.defineProperty,
				Oi = Object.defineProperties,
				ji = Object.getOwnPropertyDescriptor,
				Ii = Object.getOwnPropertyDescriptors,
				Pi = Object.getOwnPropertySymbols,
				Mi = Object.prototype.hasOwnProperty,
				Ti = Object.prototype.propertyIsEnumerable,
				Si = (t, e, o) => e in t ? Ai(t, e, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: o
				}) : t[e] = o,
				Ri = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? ji(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Ai(e, o, i), i
				};
			let Ni = class extends kt {
				constructor() {
					super(), this.connectedChains = "ALL", this.isUnsupportedChains = !1, this.getConnectedChainIds()
				}
				async getConnectedChainIds() {
					this.connectedChains = await Tt.b.client().getConnectedChainIds()
				}
				async onSelectChain(t) {
					try {
						const {
							selectedChain: e,
							walletConnectVersion: o,
							isPreferInjected: n
						} = Tt.h.state, {
							isConnected: r
						} = Tt.a.state;
						r ? (null == e ? void 0 : e.id) === t.id ? Tt.i.reset("Account") : 2 === o ? (await Tt.b.client().switchNetwork({
							chainId: t.id
						}), Tt.i.reset("Account")) : Tt.i.push("SwitchNetwork", {
							SwitchNetwork: t
						}) : n ? (Tt.h.setSelectedChain(t), Tt.g.close()) : (Tt.h.setSelectedChain(t), Tt.i.push("ConnectWallet"))
					} catch (e) {
						console.error(e), Tt.k.openToast("Unsupported chain", "error")
					}
				}
				isUnsuportedChainId(t) {
					return "string" == typeof this.connectedChains && "ALL" !== this.connectedChains ? (this.isUnsupportedChains = !0, !0) : !(!Array.isArray(this.connectedChains) || this.connectedChains.includes(String(t))) && (this.isUnsupportedChains = !0, !0)
				}
				render() {
					const {
						chains: t
					} = Tt.h.state, e = null == t ? void 0 : t.map(t => ((t, e) => Oi(t, Ii(e)))(((t, e) => {
						for (var o in e || (e = {})) Mi.call(e, o) && Si(t, o, e[o]);
						if (Pi)
							for (var o of Pi(e)) Ti.call(e, o) && Si(t, o, e[o]);
						return t
					})({}, t), {
						unsupported: this.isUnsuportedChainId(t.id)
					})), o = null == e ? void 0 : e.sort((t, e) => Number(t.unsupported) - Number(e.unsupported));
					return B`<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div>${null==o?void 0:o.map(t=>B`<w3m-network-button name="${t.name}" chainId="${t.id}" .unsupported="${t.unsupported}" .onClick="${async()=>this.onSelectChain(t)}">${t.name}</w3m-network-button>`)}</div></w3m-modal-content>${this.isUnsupportedChains?B`<w3m-info-footer><w3m-text color="secondary" variant="small-thin">Your connected wallet may not support some of the networks available for this dapp</w3m-text></w3m-info-footer>`:null}`
				}
			};
			Ni.styles = [Yt.globalCss, Ei], Ri([Pt()], Ni.prototype, "connectedChains", 2), Ri([Pt()], Ni.prototype, "isUnsupportedChains", 2), Ni = Ri([At("w3m-select-network-view")], Ni);
			const Li = ht`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
			var Di = Object.defineProperty,
				Ui = Object.getOwnPropertyDescriptor,
				Wi = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Ui(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Di(e, o, i), i
				};
			let Bi = class extends kt {
				constructor() {
					super(), this.isError = !1, this.onSwitchNetwork()
				}
				async onSwitchNetwork() {
					try {
						this.isError = !1;
						const t = Tt.d.getSwitchNetworkRouterData();
						await Tt.b.client().switchNetwork({
							chainId: t.id
						}), Tt.h.setSelectedChain(t), Tt.i.reset("Account")
					} catch {
						this.isError = !0
					}
				}
				render() {
					const {
						id: t,
						name: e
					} = Tt.d.getSwitchNetworkRouterData();
					return B`<w3m-modal-header title="${`Connect to ${e}`}"></w3m-modal-header><w3m-modal-content><w3m-network-waiting chainId="${t}" label="Approve in your wallet" .isError="${this.isError}"></w3m-network-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Switch can be declined if chain is not supported by a wallet or previous request is still active</w3m-text><w3m-button .onClick="${this.onSwitchNetwork.bind(this)}" .disabled="${!this.isError}" .iconRight="${ge.RETRY_ICON}">Try Again</w3m-button></w3m-info-footer>`
				}
			};
			Bi.styles = [Yt.globalCss, Li], Wi([Pt()], Bi.prototype, "isError", 2), Bi = Wi([At("w3m-switch-network-view")], Bi);
			const Hi = ht`w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
			var Zi = Object.defineProperty,
				qi = Object.getOwnPropertyDescriptor,
				zi = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? qi(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Zi(e, o, i), i
				};
			let Vi = class extends kt {
				constructor() {
					super(...arguments), this.loading = !Tt.f.state.wallets.listings.length, this.firstFetch = !Tt.f.state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = De.debounce(t => {
						t.length >= 3 ? (this.firstFetch = !0, this.endReached = !1, this.search = t, Tt.f.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), Tt.f.resetSearch())
					})
				}
				firstUpdated() {
					this.createPaginationObserver()
				}
				disconnectedCallback() {
					var t;
					null == (t = this.intersectionObserver) || t.disconnect()
				}
				get placeholderEl() {
					return De.getShadowRootElement(this, ".w3m-placeholder-block")
				}
				createPaginationObserver() {
					this.intersectionObserver = new IntersectionObserver(t => {
						let [e] = t;
						e.isIntersecting && (!this.search || !this.firstFetch) && this.fetchWallets()
					}), this.intersectionObserver.observe(this.placeholderEl)
				}
				isLastPage() {
					const {
						wallets: t,
						search: e
					} = Tt.f.state, {
						listings: o,
						total: n
					} = this.search ? e : t;
					return n <= 40 || o.length >= n
				}
				async fetchWallets() {
					var t;
					const {
						wallets: e,
						search: o,
						injectedWallets: n
					} = Tt.f.state, {
						listings: r,
						total: i,
						page: a
					} = this.search ? o : e;
					if (!this.endReached && (this.firstFetch || i > 40 && r.length < i)) try {
						this.loading = !0;
						const e = null == (t = Tt.h.state.standaloneChains) ? void 0 : t.join(","),
							{
								listings: o
							} = await Tt.f.getWallets({
								page: this.firstFetch ? 1 : a + 1,
								entries: 40,
								search: this.search,
								version: Tt.h.state.walletConnectVersion,
								chains: e
							}),
							r = o.map(t => De.getWalletIcon(t)),
							i = n.map(t => De.getWalletIcon(t));
						await Promise.all([...r.map(async t => De.preloadImage(t)), ...i.map(async t => De.preloadImage(t)), Tt.d.wait(300)]), this.endReached = this.isLastPage()
					} catch (s) {
						console.error(s), Tt.k.openToast(De.getErrorMessage(s), "error")
					} finally {
						this.loading = !1, this.firstFetch = !1
					}
				}
				onConnect(t) {
					Tt.d.isAndroid() ? De.handleMobileLinking(t) : De.goToConnectingView(t)
				}
				onSearchChange(t) {
					const {
						value: e
					} = t.target;
					this.searchDebounce(e)
				}
				render() {
					const {
						wallets: t,
						search: e
					} = Tt.f.state, {
						listings: o
					} = this.search ? e : t, n = this.loading && !o.length, r = this.search.length >= 3;
					let i = _n.injectedWalletsTemplate(),
						a = _n.manualWalletsTemplate(),
						s = _n.recomendedWalletsTemplate(!0);
					r && (i = i.filter(t => {
						let {
							values: e
						} = t;
						return De.caseSafeIncludes(e[0], this.search)
					}), a = a.filter(t => {
						let {
							values: e
						} = t;
						return De.caseSafeIncludes(e[0], this.search)
					}), s = s.filter(t => {
						let {
							values: e
						} = t;
						return De.caseSafeIncludes(e[0], this.search)
					}));
					const l = !(this.loading || o.length || i.length || s.length),
						c = Math.max(i.length, o.length),
						d = {
							"w3m-loading": n,
							"w3m-end-reached": this.endReached || !this.loading,
							"w3m-empty": l
						};
					return B`<w3m-modal-header><w3m-search-input .onChange="${this.onSearchChange.bind(this)}"></w3m-search-input></w3m-modal-header><w3m-modal-content class="${Rt(d)}"><div class="w3m-grid">${n?null:s} ${n?null:[...Array(c)].map((t,e)=>B`${a[e]} ${i[e]} ${o[e]?B`<w3m-wallet-button imageId="${o[e].image_id}" name="${o[e].name}" walletId="${o[e].id}" .onClick="${()=>this.onConnect(o[e])}"></w3m-wallet-button>`:null}`)}</div><div class="w3m-placeholder-block">${l?B`<w3m-text variant="big-bold" color="secondary">No results found</w3m-text>`:null} ${!l&&this.loading?B`<w3m-spinner></w3m-spinner>`:null}</div></w3m-modal-content>`
				}
			};
			Vi.styles = [Yt.globalCss, Hi], zi([Pt()], Vi.prototype, "loading", 2), zi([Pt()], Vi.prototype, "firstFetch", 2), zi([Pt()], Vi.prototype, "search", 2), zi([Pt()], Vi.prototype, "endReached", 2), Vi = zi([At("w3m-wallet-explorer-view")], Vi);
			const Fi = ht`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
			var Gi = Object.defineProperty,
				Ki = Object.getOwnPropertyDescriptor,
				Yi = (t, e, o, n) => {
					for (var r, i = n > 1 ? void 0 : n ? Ki(e, o) : e, a = t.length - 1; a >= 0; a--)(r = t[a]) && (i = (n ? r(e, o, i) : r(i)) || i);
					return n && i && Gi(e, o, i), i
				};
			let Ji = class extends kt {
				constructor() {
					super(), this.isError = !1, this.unwatchConnection = void 0, this.openWebWallet(), this.unwatchConnection = Tt.l.subscribe(t => {
						this.isError = t.pairingError
					})
				}
				disconnectedCallback() {
					var t;
					null == (t = this.unwatchConnection) || t.call(this)
				}
				onFormatAndRedirect(t) {
					const {
						desktop: e,
						name: o
					} = Tt.d.getWalletRouterData(), n = null == e ? void 0 : e.universal;
					if (n) {
						const e = Tt.d.formatUniversalUrl(n, t, o);
						Tt.d.openHref(e, "_blank")
					}
				}
				openWebWallet() {
					Tt.l.setPairingError(!1);
					const {
						standaloneUri: t
					} = Tt.h.state, {
						pairingUri: e
					} = Tt.l.state, o = Tt.d.getWalletRouterData();
					De.setRecentWallet(o), t ? this.onFormatAndRedirect(t) : this.onFormatAndRedirect(e)
				}
				render() {
					const {
						name: t,
						id: e,
						image_id: o
					} = Tt.d.getWalletRouterData(), {
						isMobile: n,
						isInjected: r,
						isDesktop: i
					} = De.getCachedRouterWalletPlatforms(), a = Tt.d.isMobile();
					return B`<w3m-modal-header title="${t}" .onAction="${De.handleUriCopy}" .actionIcon="${ge.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${o}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`${t} web app has opened in a new tab. Go there, accept the connection, and come back`}</w3m-text><w3m-platform-selection .isMobile="${n}" .isInjected="${!a&&r}" .isDesktop="${!a&&i}" .isRetry="${!0}"><w3m-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${ge.RETRY_ICON}">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`
				}
			};
			Ji.styles = [Yt.globalCss, Fi], Yi([Pt()], Ji.prototype, "isError", 2), Ji = Yi([At("w3m-web-connecting-view")], Ji)
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/browser.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/can-promise.js"),
				r = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/qrcode.js"),
				i = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/renderer/canvas.js"),
				a = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/renderer/svg-tag.js");

			function s(t, e, o, i, a) {
				const s = [].slice.call(arguments, 1),
					l = s.length,
					c = "function" == typeof s[l - 1];
				if (!c && !n()) throw new Error("Callback required as last argument");
				if (!c) {
					if (l < 1) throw new Error("Too few arguments provided");
					return 1 === l ? (o = e, e = i = void 0) : 2 !== l || e.getContext || (i = o, o = e, e = void 0), new Promise((function(n, a) {
						try {
							const a = r.create(o, i);
							n(t(a, e, i))
						} catch (s) {
							a(s)
						}
					}))
				}
				if (l < 2) throw new Error("Too few arguments provided");
				2 === l ? (a = o, o = e, e = i = void 0) : 3 === l && (e.getContext && void 0 === a ? (a = i, i = void 0) : (a = i, i = o, o = e, e = void 0));
				try {
					const n = r.create(o, i);
					a(null, t(n, e, i))
				} catch (d) {
					a(d)
				}
			}
			e.create = r.create, e.toCanvas = s.bind(null, i.render), e.toDataURL = s.bind(null, i.renderToDataURL), e.toString = s.bind(null, (function(t, e, o) {
				return a.render(t, o)
			}))
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/can-promise.js": function(t, e) {
			t.exports = function() {
				return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/alignment-pattern.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			e.getRowColCoords = function(t) {
				if (1 === t) return [];
				const e = Math.floor(t / 7) + 2,
					o = n(t),
					r = 145 === o ? 26 : 2 * Math.ceil((o - 13) / (2 * e - 2)),
					i = [o - 7];
				for (let n = 1; n < e - 1; n++) i[n] = i[n - 1] - r;
				return i.push(6), i.reverse()
			}, e.getPositions = function(t) {
				const o = [],
					n = e.getRowColCoords(t),
					r = n.length;
				for (let e = 0; e < r; e++)
					for (let t = 0; t < r; t++) 0 === e && 0 === t || 0 === e && t === r - 1 || e === r - 1 && 0 === t || o.push([n[e], n[t]]);
				return o
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/alphanumeric-data.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/mode.js"),
				r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function i(t) {
				this.mode = n.ALPHANUMERIC, this.data = t
			}
			i.getBitsLength = function(t) {
				return 11 * Math.floor(t / 2) + t % 2 * 6
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(t) {
				let e;
				for (e = 0; e + 2 <= this.data.length; e += 2) {
					let o = 45 * r.indexOf(this.data[e]);
					o += r.indexOf(this.data[e + 1]), t.put(o, 11)
				}
				this.data.length % 2 && t.put(r.indexOf(this.data[e]), 6)
			}, t.exports = i
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/bit-buffer.js": function(t, e) {
			function o() {
				this.buffer = [], this.length = 0
			}
			o.prototype = {
				get: function(t) {
					const e = Math.floor(t / 8);
					return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
				},
				put: function(t, e) {
					for (let o = 0; o < e; o++) this.putBit(1 == (t >>> e - o - 1 & 1))
				},
				getLengthInBits: function() {
					return this.length
				},
				putBit: function(t) {
					const e = Math.floor(this.length / 8);
					this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
				}
			}, t.exports = o
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/bit-matrix.js": function(t, e) {
			function o(t) {
				if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t)
			}
			o.prototype.set = function(t, e, o, n) {
				const r = t * this.size + e;
				this.data[r] = o, n && (this.reservedBit[r] = !0)
			}, o.prototype.get = function(t, e) {
				return this.data[t * this.size + e]
			}, o.prototype.xor = function(t, e, o) {
				this.data[t * this.size + e] ^= o
			}, o.prototype.isReserved = function(t, e) {
				return this.reservedBit[t * this.size + e]
			}, t.exports = o
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/byte-data.js": function(t, e, o) {
			const n = o("./node_modules/encode-utf8/index.js"),
				r = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/mode.js");

			function i(t) {
				this.mode = r.BYTE, "string" == typeof t && (t = n(t)), this.data = new Uint8Array(t)
			}
			i.getBitsLength = function(t) {
				return 8 * t
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(t) {
				for (let e = 0, o = this.data.length; e < o; e++) t.put(this.data[e], 8)
			}, t.exports = i
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/error-correction-code.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/error-correction-level.js"),
				r = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			e.getBlocksCount = function(t, e) {
				switch (e) {
					case n.L:
						return r[4 * (t - 1) + 0];
					case n.M:
						return r[4 * (t - 1) + 1];
					case n.Q:
						return r[4 * (t - 1) + 2];
					case n.H:
						return r[4 * (t - 1) + 3];
					default:
						return
				}
			}, e.getTotalCodewordsCount = function(t, e) {
				switch (e) {
					case n.L:
						return i[4 * (t - 1) + 0];
					case n.M:
						return i[4 * (t - 1) + 1];
					case n.Q:
						return i[4 * (t - 1) + 2];
					case n.H:
						return i[4 * (t - 1) + 3];
					default:
						return
				}
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/error-correction-level.js": function(t, e) {
			e.L = {
				bit: 1
			}, e.M = {
				bit: 0
			}, e.Q = {
				bit: 3
			}, e.H = {
				bit: 2
			}, e.isValid = function(t) {
				return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4
			}, e.from = function(t, o) {
				if (e.isValid(t)) return t;
				try {
					return function(t) {
						if ("string" != typeof t) throw new Error("Param is not a string");
						switch (t.toLowerCase()) {
							case "l":
							case "low":
								return e.L;
							case "m":
							case "medium":
								return e.M;
							case "q":
							case "quartile":
								return e.Q;
							case "h":
							case "high":
								return e.H;
							default:
								throw new Error("Unknown EC Level: " + t)
						}
					}(t)
				} catch (n) {
					return o
				}
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/finder-pattern.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			e.getPositions = function(t) {
				const e = n(t);
				return [
					[0, 0],
					[e - 7, 0],
					[0, e - 7]
				]
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/format-info.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/utils.js"),
				r = n.getBCHDigit(1335);
			e.getEncodedBits = function(t, e) {
				const o = t.bit << 3 | e;
				let i = o << 10;
				for (; n.getBCHDigit(i) - r >= 0;) i ^= 1335 << n.getBCHDigit(i) - r;
				return 21522 ^ (o << 10 | i)
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/galois-field.js": function(t, e) {
			const o = new Uint8Array(512),
				n = new Uint8Array(256);
			! function() {
				let t = 1;
				for (let e = 0; e < 255; e++) o[e] = t, n[t] = e, 256 & (t <<= 1) && (t ^= 285);
				for (let e = 255; e < 512; e++) o[e] = o[e - 255]
			}(), e.log = function(t) {
				if (t < 1) throw new Error("log(" + t + ")");
				return n[t]
			}, e.exp = function(t) {
				return o[t]
			}, e.mul = function(t, e) {
				return 0 === t || 0 === e ? 0 : o[n[t] + n[e]]
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/kanji-data.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/mode.js"),
				r = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/utils.js");

			function i(t) {
				this.mode = n.KANJI, this.data = t
			}
			i.getBitsLength = function(t) {
				return 13 * t
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(t) {
				let e;
				for (e = 0; e < this.data.length; e++) {
					let o = r.toSJIS(this.data[e]);
					if (o >= 33088 && o <= 40956) o -= 33088;
					else {
						if (!(o >= 57408 && o <= 60351)) throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
						o -= 49472
					}
					o = 192 * (o >>> 8 & 255) + (255 & o), t.put(o, 13)
				}
			}, t.exports = i
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/mask-pattern.js": function(t, e) {
			e.Patterns = {
				PATTERN000: 0,
				PATTERN001: 1,
				PATTERN010: 2,
				PATTERN011: 3,
				PATTERN100: 4,
				PATTERN101: 5,
				PATTERN110: 6,
				PATTERN111: 7
			};
			const o = 3,
				n = 3,
				r = 40,
				i = 10;

			function a(t, o, n) {
				switch (t) {
					case e.Patterns.PATTERN000:
						return (o + n) % 2 == 0;
					case e.Patterns.PATTERN001:
						return o % 2 == 0;
					case e.Patterns.PATTERN010:
						return n % 3 == 0;
					case e.Patterns.PATTERN011:
						return (o + n) % 3 == 0;
					case e.Patterns.PATTERN100:
						return (Math.floor(o / 2) + Math.floor(n / 3)) % 2 == 0;
					case e.Patterns.PATTERN101:
						return o * n % 2 + o * n % 3 == 0;
					case e.Patterns.PATTERN110:
						return (o * n % 2 + o * n % 3) % 2 == 0;
					case e.Patterns.PATTERN111:
						return (o * n % 3 + (o + n) % 2) % 2 == 0;
					default:
						throw new Error("bad maskPattern:" + t)
				}
			}
			e.isValid = function(t) {
				return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
			}, e.from = function(t) {
				return e.isValid(t) ? parseInt(t, 10) : void 0
			}, e.getPenaltyN1 = function(t) {
				const e = t.size;
				let n = 0,
					r = 0,
					i = 0,
					a = null,
					s = null;
				for (let l = 0; l < e; l++) {
					r = i = 0, a = s = null;
					for (let c = 0; c < e; c++) {
						let e = t.get(l, c);
						e === a ? r++ : (r >= 5 && (n += o + (r - 5)), a = e, r = 1), (e = t.get(c, l)) === s ? i++ : (i >= 5 && (n += o + (i - 5)), s = e, i = 1)
					}
					r >= 5 && (n += o + (r - 5)), i >= 5 && (n += o + (i - 5))
				}
				return n
			}, e.getPenaltyN2 = function(t) {
				const e = t.size;
				let o = 0;
				for (let n = 0; n < e - 1; n++)
					for (let r = 0; r < e - 1; r++) {
						const e = t.get(n, r) + t.get(n, r + 1) + t.get(n + 1, r) + t.get(n + 1, r + 1);
						4 !== e && 0 !== e || o++
					}
				return o * n
			}, e.getPenaltyN3 = function(t) {
				const e = t.size;
				let o = 0,
					n = 0,
					i = 0;
				for (let r = 0; r < e; r++) {
					n = i = 0;
					for (let a = 0; a < e; a++) n = n << 1 & 2047 | t.get(r, a), a >= 10 && (1488 === n || 93 === n) && o++, i = i << 1 & 2047 | t.get(a, r), a >= 10 && (1488 === i || 93 === i) && o++
				}
				return o * r
			}, e.getPenaltyN4 = function(t) {
				let e = 0;
				const o = t.data.length;
				for (let n = 0; n < o; n++) e += t.data[n];
				return Math.abs(Math.ceil(100 * e / o / 5) - 10) * i
			}, e.applyMask = function(t, e) {
				const o = e.size;
				for (let n = 0; n < o; n++)
					for (let r = 0; r < o; r++) e.isReserved(r, n) || e.xor(r, n, a(t, r, n))
			}, e.getBestMask = function(t, o) {
				const n = Object.keys(e.Patterns).length;
				let r = 0,
					i = 1 / 0;
				for (let a = 0; a < n; a++) {
					o(a), e.applyMask(a, t);
					const n = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
					e.applyMask(a, t), n < i && (i = n, r = a)
				}
				return r
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/mode.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/version-check.js"),
				r = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/regex.js");
			e.NUMERIC = {
				id: "Numeric",
				bit: 1,
				ccBits: [10, 12, 14]
			}, e.ALPHANUMERIC = {
				id: "Alphanumeric",
				bit: 2,
				ccBits: [9, 11, 13]
			}, e.BYTE = {
				id: "Byte",
				bit: 4,
				ccBits: [8, 16, 16]
			}, e.KANJI = {
				id: "Kanji",
				bit: 8,
				ccBits: [8, 10, 12]
			}, e.MIXED = {
				bit: -1
			}, e.getCharCountIndicator = function(t, e) {
				if (!t.ccBits) throw new Error("Invalid mode: " + t);
				if (!n.isValid(e)) throw new Error("Invalid version: " + e);
				return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
			}, e.getBestModeForData = function(t) {
				return r.testNumeric(t) ? e.NUMERIC : r.testAlphanumeric(t) ? e.ALPHANUMERIC : r.testKanji(t) ? e.KANJI : e.BYTE
			}, e.toString = function(t) {
				if (t && t.id) return t.id;
				throw new Error("Invalid mode")
			}, e.isValid = function(t) {
				return t && t.bit && t.ccBits
			}, e.from = function(t, o) {
				if (e.isValid(t)) return t;
				try {
					return function(t) {
						if ("string" != typeof t) throw new Error("Param is not a string");
						switch (t.toLowerCase()) {
							case "numeric":
								return e.NUMERIC;
							case "alphanumeric":
								return e.ALPHANUMERIC;
							case "kanji":
								return e.KANJI;
							case "byte":
								return e.BYTE;
							default:
								throw new Error("Unknown mode: " + t)
						}
					}(t)
				} catch (n) {
					return o
				}
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/numeric-data.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/mode.js");

			function r(t) {
				this.mode = n.NUMERIC, this.data = t.toString()
			}
			r.getBitsLength = function(t) {
				return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
			}, r.prototype.getLength = function() {
				return this.data.length
			}, r.prototype.getBitsLength = function() {
				return r.getBitsLength(this.data.length)
			}, r.prototype.write = function(t) {
				let e, o, n;
				for (e = 0; e + 3 <= this.data.length; e += 3) o = this.data.substr(e, 3), n = parseInt(o, 10), t.put(n, 10);
				const r = this.data.length - e;
				r > 0 && (o = this.data.substr(e), n = parseInt(o, 10), t.put(n, 3 * r + 1))
			}, t.exports = r
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/polynomial.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/galois-field.js");
			e.mul = function(t, e) {
				const o = new Uint8Array(t.length + e.length - 1);
				for (let r = 0; r < t.length; r++)
					for (let i = 0; i < e.length; i++) o[r + i] ^= n.mul(t[r], e[i]);
				return o
			}, e.mod = function(t, e) {
				let o = new Uint8Array(t);
				for (; o.length - e.length >= 0;) {
					const t = o[0];
					for (let i = 0; i < e.length; i++) o[i] ^= n.mul(e[i], t);
					let r = 0;
					for (; r < o.length && 0 === o[r];) r++;
					o = o.slice(r)
				}
				return o
			}, e.generateECPolynomial = function(t) {
				let o = new Uint8Array([1]);
				for (let r = 0; r < t; r++) o = e.mul(o, new Uint8Array([1, n.exp(r)]));
				return o
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/qrcode.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/utils.js"),
				r = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/error-correction-level.js"),
				i = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/bit-buffer.js"),
				a = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/bit-matrix.js"),
				s = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/alignment-pattern.js"),
				l = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/finder-pattern.js"),
				c = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/mask-pattern.js"),
				d = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/error-correction-code.js"),
				h = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				m = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/version.js"),
				u = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/format-info.js"),
				p = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/mode.js"),
				w = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/segments.js");

			function g(t, e, o) {
				const n = t.size,
					r = u.getEncodedBits(e, o);
				let i, a;
				for (i = 0; i < 15; i++) a = 1 == (r >> i & 1), i < 6 ? t.set(i, 8, a, !0) : i < 8 ? t.set(i + 1, 8, a, !0) : t.set(n - 15 + i, 8, a, !0), i < 8 ? t.set(8, n - i - 1, a, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, a, !0) : t.set(8, 15 - i - 1, a, !0);
				t.set(n - 8, 8, 1, !0)
			}

			function f(t, e, o) {
				const r = new i;
				o.forEach((function(e) {
					r.put(e.mode.bit, 4), r.put(e.getLength(), p.getCharCountIndicator(e.mode, t)), e.write(r)
				}));
				const a = 8 * (n.getSymbolTotalCodewords(t) - d.getTotalCodewordsCount(t, e));
				for (r.getLengthInBits() + 4 <= a && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(0);
				const s = (a - r.getLengthInBits()) / 8;
				for (let n = 0; n < s; n++) r.put(n % 2 ? 17 : 236, 8);
				return function(t, e, o) {
					const r = n.getSymbolTotalCodewords(e),
						i = d.getTotalCodewordsCount(e, o),
						a = r - i,
						s = d.getBlocksCount(e, o),
						l = s - r % s,
						c = Math.floor(r / s),
						m = Math.floor(a / s),
						u = m + 1,
						p = c - m,
						w = new h(p);
					let g = 0;
					const f = new Array(s),
						v = new Array(s);
					let b = 0;
					const y = new Uint8Array(t.buffer);
					for (let n = 0; n < s; n++) {
						const t = n < l ? m : u;
						f[n] = y.slice(g, g + t), v[n] = w.encode(f[n]), g += t, b = Math.max(b, t)
					}
					const x = new Uint8Array(r);
					let C, _, $ = 0;
					for (C = 0; C < b; C++)
						for (_ = 0; _ < s; _++) C < f[_].length && (x[$++] = f[_][C]);
					for (C = 0; C < p; C++)
						for (_ = 0; _ < s; _++) x[$++] = v[_][C];
					return x
				}(r, t, e)
			}

			function v(t, e, o, r) {
				let i;
				if (Array.isArray(t)) i = w.fromArray(t);
				else {
					if ("string" != typeof t) throw new Error("Invalid data"); {
						let n = e;
						if (!n) {
							const e = w.rawSplit(t);
							n = m.getBestVersionForData(e, o)
						}
						i = w.fromString(t, n || 40)
					}
				}
				const d = m.getBestVersionForData(i, o);
				if (!d) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (e) {
					if (e < d) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + d + ".\n")
				} else e = d;
				const h = f(e, o, i),
					u = n.getSymbolSize(e),
					p = new a(u);
				return function(t, e) {
						const o = t.size,
							n = l.getPositions(e);
						for (let r = 0; r < n.length; r++) {
							const e = n[r][0],
								i = n[r][1];
							for (let n = -1; n <= 7; n++)
								if (!(e + n <= -1 || o <= e + n))
									for (let r = -1; r <= 7; r++) i + r <= -1 || o <= i + r || (n >= 0 && n <= 6 && (0 === r || 6 === r) || r >= 0 && r <= 6 && (0 === n || 6 === n) || n >= 2 && n <= 4 && r >= 2 && r <= 4 ? t.set(e + n, i + r, !0, !0) : t.set(e + n, i + r, !1, !0))
						}
					}(p, e),
					function(t) {
						const e = t.size;
						for (let o = 8; o < e - 8; o++) {
							const e = o % 2 == 0;
							t.set(o, 6, e, !0), t.set(6, o, e, !0)
						}
					}(p),
					function(t, e) {
						const o = s.getPositions(e);
						for (let n = 0; n < o.length; n++) {
							const e = o[n][0],
								r = o[n][1];
							for (let o = -2; o <= 2; o++)
								for (let n = -2; n <= 2; n++) - 2 === o || 2 === o || -2 === n || 2 === n || 0 === o && 0 === n ? t.set(e + o, r + n, !0, !0) : t.set(e + o, r + n, !1, !0)
						}
					}(p, e), g(p, o, 0), e >= 7 && function(t, e) {
						const o = t.size,
							n = m.getEncodedBits(e);
						let r, i, a;
						for (let s = 0; s < 18; s++) r = Math.floor(s / 3), i = s % 3 + o - 8 - 3, a = 1 == (n >> s & 1), t.set(r, i, a, !0), t.set(i, r, a, !0)
					}(p, e),
					function(t, e) {
						const o = t.size;
						let n = -1,
							r = o - 1,
							i = 7,
							a = 0;
						for (let s = o - 1; s > 0; s -= 2)
							for (6 === s && s--;;) {
								for (let o = 0; o < 2; o++)
									if (!t.isReserved(r, s - o)) {
										let n = !1;
										a < e.length && (n = 1 == (e[a] >>> i & 1)), t.set(r, s - o, n), -1 === --i && (a++, i = 7)
									} if ((r += n) < 0 || o <= r) {
									r -= n, n = -n;
									break
								}
							}
					}(p, h), isNaN(r) && (r = c.getBestMask(p, g.bind(null, p, o))), c.applyMask(r, p), g(p, o, r), {
						modules: p,
						version: e,
						errorCorrectionLevel: o,
						maskPattern: r,
						segments: i
					}
			}
			e.create = function(t, e) {
				if (void 0 === t || "" === t) throw new Error("No input text");
				let o, i, a = r.M;
				return void 0 !== e && (a = r.from(e.errorCorrectionLevel, r.M), o = m.from(e.version), i = c.from(e.maskPattern), e.toSJISFunc && n.setToSJISFunction(e.toSJISFunc)), v(t, o, a, i)
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/polynomial.js");

			function r(t) {
				this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
			}
			r.prototype.initialize = function(t) {
				this.degree = t, this.genPoly = n.generateECPolynomial(this.degree)
			}, r.prototype.encode = function(t) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				const e = new Uint8Array(t.length + this.degree);
				e.set(t);
				const o = n.mod(e, this.genPoly),
					r = this.degree - o.length;
				if (r > 0) {
					const t = new Uint8Array(this.degree);
					return t.set(o, r), t
				}
				return o
			}, t.exports = r
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/regex.js": function(t, e) {
			let o = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
			const n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (o = o.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			e.KANJI = new RegExp(o, "g"), e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = new RegExp(n, "g"), e.NUMERIC = new RegExp("[0-9]+", "g"), e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			const r = new RegExp("^" + o + "$"),
				i = new RegExp("^[0-9]+$"),
				a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			e.testKanji = function(t) {
				return r.test(t)
			}, e.testNumeric = function(t) {
				return i.test(t)
			}, e.testAlphanumeric = function(t) {
				return a.test(t)
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/segments.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/mode.js"),
				r = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/numeric-data.js"),
				i = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/alphanumeric-data.js"),
				a = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/byte-data.js"),
				s = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/kanji-data.js"),
				l = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/regex.js"),
				c = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/utils.js"),
				d = o("./node_modules/dijkstrajs/dijkstra.js");

			function h(t) {
				return unescape(encodeURIComponent(t)).length
			}

			function m(t, e, o) {
				const n = [];
				let r;
				for (; null !== (r = t.exec(o));) n.push({
					data: r[0],
					index: r.index,
					mode: e,
					length: r[0].length
				});
				return n
			}

			function u(t) {
				const e = m(l.NUMERIC, n.NUMERIC, t),
					o = m(l.ALPHANUMERIC, n.ALPHANUMERIC, t);
				let r, i;
				return c.isKanjiModeEnabled() ? (r = m(l.BYTE, n.BYTE, t), i = m(l.KANJI, n.KANJI, t)) : (r = m(l.BYTE_KANJI, n.BYTE, t), i = []), e.concat(o, r, i).sort((function(t, e) {
					return t.index - e.index
				})).map((function(t) {
					return {
						data: t.data,
						mode: t.mode,
						length: t.length
					}
				}))
			}

			function p(t, e) {
				switch (e) {
					case n.NUMERIC:
						return r.getBitsLength(t);
					case n.ALPHANUMERIC:
						return i.getBitsLength(t);
					case n.KANJI:
						return s.getBitsLength(t);
					case n.BYTE:
						return a.getBitsLength(t)
				}
			}

			function w(t, e) {
				let o;
				const l = n.getBestModeForData(t);
				if ((o = n.from(e, l)) !== n.BYTE && o.bit < l.bit) throw new Error('"' + t + '" cannot be encoded with mode ' + n.toString(o) + ".\n Suggested mode is: " + n.toString(l));
				switch (o !== n.KANJI || c.isKanjiModeEnabled() || (o = n.BYTE), o) {
					case n.NUMERIC:
						return new r(t);
					case n.ALPHANUMERIC:
						return new i(t);
					case n.KANJI:
						return new s(t);
					case n.BYTE:
						return new a(t)
				}
			}
			e.fromArray = function(t) {
				return t.reduce((function(t, e) {
					return "string" == typeof e ? t.push(w(e, null)) : e.data && t.push(w(e.data, e.mode)), t
				}), [])
			}, e.fromString = function(t, o) {
				const r = function(t, e) {
						const o = {},
							r = {
								start: {}
							};
						let i = ["start"];
						for (let a = 0; a < t.length; a++) {
							const s = t[a],
								l = [];
							for (let t = 0; t < s.length; t++) {
								const c = s[t],
									d = "" + a + t;
								l.push(d), o[d] = {
									node: c,
									lastCount: 0
								}, r[d] = {};
								for (let t = 0; t < i.length; t++) {
									const a = i[t];
									o[a] && o[a].node.mode === c.mode ? (r[a][d] = p(o[a].lastCount + c.length, c.mode) - p(o[a].lastCount, c.mode), o[a].lastCount += c.length) : (o[a] && (o[a].lastCount = c.length), r[a][d] = p(c.length, c.mode) + 4 + n.getCharCountIndicator(c.mode, e))
								}
							}
							i = l
						}
						for (let n = 0; n < i.length; n++) r[i[n]].end = 0;
						return {
							map: r,
							table: o
						}
					}(function(t) {
						const e = [];
						for (let o = 0; o < t.length; o++) {
							const r = t[o];
							switch (r.mode) {
								case n.NUMERIC:
									e.push([r, {
										data: r.data,
										mode: n.ALPHANUMERIC,
										length: r.length
									}, {
										data: r.data,
										mode: n.BYTE,
										length: r.length
									}]);
									break;
								case n.ALPHANUMERIC:
									e.push([r, {
										data: r.data,
										mode: n.BYTE,
										length: r.length
									}]);
									break;
								case n.KANJI:
									e.push([r, {
										data: r.data,
										mode: n.BYTE,
										length: h(r.data)
									}]);
									break;
								case n.BYTE:
									e.push([{
										data: r.data,
										mode: n.BYTE,
										length: h(r.data)
									}])
							}
						}
						return e
					}(u(t, c.isKanjiModeEnabled())), o),
					i = d.find_path(r.map, "start", "end"),
					a = [];
				for (let e = 1; e < i.length - 1; e++) a.push(r.table[i[e]].node);
				return e.fromArray(function(t) {
					return t.reduce((function(t, e) {
						const o = t.length - 1 >= 0 ? t[t.length - 1] : null;
						return o && o.mode === e.mode ? (t[t.length - 1].data += e.data, t) : (t.push(e), t)
					}), [])
				}(a))
			}, e.rawSplit = function(t) {
				return e.fromArray(u(t, c.isKanjiModeEnabled()))
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/utils.js": function(t, e) {
			let o;
			const n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
			e.getSymbolSize = function(t) {
				if (!t) throw new Error('"version" cannot be null or undefined');
				if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
				return 4 * t + 17
			}, e.getSymbolTotalCodewords = function(t) {
				return n[t]
			}, e.getBCHDigit = function(t) {
				let e = 0;
				for (; 0 !== t;) e++, t >>>= 1;
				return e
			}, e.setToSJISFunction = function(t) {
				if ("function" != typeof t) throw new Error('"toSJISFunc" is not a valid function.');
				o = t
			}, e.isKanjiModeEnabled = function() {
				return void 0 !== o
			}, e.toSJIS = function(t) {
				return o(t)
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/version-check.js": function(t, e) {
			e.isValid = function(t) {
				return !isNaN(t) && t >= 1 && t <= 40
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/version.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/utils.js"),
				r = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/error-correction-code.js"),
				i = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/error-correction-level.js"),
				a = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/mode.js"),
				s = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/core/version-check.js"),
				l = n.getBCHDigit(7973);

			function c(t, e) {
				return a.getCharCountIndicator(t, e) + 4
			}

			function d(t, e) {
				let o = 0;
				return t.forEach((function(t) {
					const n = c(t.mode, e);
					o += n + t.getBitsLength()
				})), o
			}
			e.from = function(t, e) {
				return s.isValid(t) ? parseInt(t, 10) : e
			}, e.getCapacity = function(t, e, o) {
				if (!s.isValid(t)) throw new Error("Invalid QR Code version");
				void 0 === o && (o = a.BYTE);
				const i = 8 * (n.getSymbolTotalCodewords(t) - r.getTotalCodewordsCount(t, e));
				if (o === a.MIXED) return i;
				const l = i - c(o, t);
				switch (o) {
					case a.NUMERIC:
						return Math.floor(l / 10 * 3);
					case a.ALPHANUMERIC:
						return Math.floor(l / 11 * 2);
					case a.KANJI:
						return Math.floor(l / 13);
					case a.BYTE:
					default:
						return Math.floor(l / 8)
				}
			}, e.getBestVersionForData = function(t, o) {
				let n;
				const r = i.from(o, i.M);
				if (Array.isArray(t)) {
					if (t.length > 1) return function(t, o) {
						for (let n = 1; n <= 40; n++) {
							if (d(t, n) <= e.getCapacity(n, o, a.MIXED)) return n
						}
					}(t, r);
					if (0 === t.length) return 1;
					n = t[0]
				} else n = t;
				return function(t, o, n) {
					for (let r = 1; r <= 40; r++)
						if (o <= e.getCapacity(r, n, t)) return r
				}(n.mode, n.getLength(), r)
			}, e.getEncodedBits = function(t) {
				if (!s.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
				let e = t << 12;
				for (; n.getBCHDigit(e) - l >= 0;) e ^= 7973 << n.getBCHDigit(e) - l;
				return t << 12 | e
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/renderer/canvas.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/renderer/utils.js");
			e.render = function(t, e, o) {
				let r = o,
					i = e;
				void 0 !== r || e && e.getContext || (r = e, e = void 0), e || (i = function() {
					try {
						return document.createElement("canvas")
					} catch (t) {
						throw new Error("You need to specify a canvas element")
					}
				}()), r = n.getOptions(r);
				const a = n.getImageWidth(t.modules.size, r),
					s = i.getContext("2d"),
					l = s.createImageData(a, a);
				return n.qrToImageData(l.data, t, r),
					function(t, e, o) {
						t.clearRect(0, 0, e.width, e.height), e.style || (e.style = {}), e.height = o, e.width = o, e.style.height = o + "px", e.style.width = o + "px"
					}(s, i, a), s.putImageData(l, 0, 0), i
			}, e.renderToDataURL = function(t, o, n) {
				let r = n;
				void 0 !== r || o && o.getContext || (r = o, o = void 0), r || (r = {});
				const i = e.render(t, o, r),
					a = r.type || "image/png",
					s = r.rendererOpts || {};
				return i.toDataURL(a, s.quality)
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/renderer/svg-tag.js": function(t, e, o) {
			const n = o("./node_modules/@web3modal/standalone/node_modules/qrcode/lib/renderer/utils.js");

			function r(t, e) {
				const o = t.a / 255,
					n = e + '="' + t.hex + '"';
				return o < 1 ? n + " " + e + '-opacity="' + o.toFixed(2).slice(1) + '"' : n
			}

			function i(t, e, o) {
				let n = t + e;
				return void 0 !== o && (n += " " + o), n
			}
			e.render = function(t, e, o) {
				const a = n.getOptions(e),
					s = t.modules.size,
					l = t.modules.data,
					c = s + 2 * a.margin,
					d = a.color.light.a ? "<path " + r(a.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
					h = "<path " + r(a.color.dark, "stroke") + ' d="' + function(t, e, o) {
						let n = "",
							r = 0,
							a = !1,
							s = 0;
						for (let l = 0; l < t.length; l++) {
							const c = Math.floor(l % e),
								d = Math.floor(l / e);
							c || a || (a = !0), t[l] ? (s++, l > 0 && c > 0 && t[l - 1] || (n += a ? i("M", c + o, .5 + d + o) : i("m", r, 0), r = 0, a = !1), c + 1 < e && t[l + 1] || (n += i("h", s), s = 0)) : r++
						}
						return n
					}(l, s, a.margin) + '"/>',
					m = 'viewBox="0 0 ' + c + " " + c + '"',
					u = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + m + ' shape-rendering="crispEdges">' + d + h + "</svg>\n";
				return "function" == typeof o && o(null, u), u
			}
		},
		"./node_modules/@web3modal/standalone/node_modules/qrcode/lib/renderer/utils.js": function(t, e) {
			function o(t) {
				if ("number" == typeof t && (t = t.toString()), "string" != typeof t) throw new Error("Color should be defined as hex string");
				let e = t.slice().replace("#", "").split("");
				if (e.length < 3 || 5 === e.length || e.length > 8) throw new Error("Invalid hex color: " + t);
				3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map((function(t) {
					return [t, t]
				})))), 6 === e.length && e.push("F", "F");
				const o = parseInt(e.join(""), 16);
				return {
					r: o >> 24 & 255,
					g: o >> 16 & 255,
					b: o >> 8 & 255,
					a: 255 & o,
					hex: "#" + e.slice(0, 6).join("")
				}
			}
			e.getOptions = function(t) {
				t || (t = {}), t.color || (t.color = {});
				const e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
					n = t.width && t.width >= 21 ? t.width : void 0,
					r = t.scale || 4;
				return {
					width: n,
					scale: n ? 4 : r,
					margin: e,
					color: {
						dark: o(t.color.dark || "#000000ff"),
						light: o(t.color.light || "#ffffffff")
					},
					type: t.type,
					rendererOpts: t.rendererOpts || {}
				}
			}, e.getScale = function(t, e) {
				return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
			}, e.getImageWidth = function(t, o) {
				const n = e.getScale(t, o);
				return Math.floor((t + 2 * o.margin) * n)
			}, e.qrToImageData = function(t, o, n) {
				const r = o.modules.size,
					i = o.modules.data,
					a = e.getScale(r, n),
					s = Math.floor((r + 2 * n.margin) * a),
					l = n.margin * a,
					c = [n.color.light, n.color.dark];
				for (let e = 0; e < s; e++)
					for (let o = 0; o < s; o++) {
						let d = 4 * (e * s + o),
							h = n.color.light;
						if (e >= l && o >= l && e < s - l && o < s - l) {
							h = c[i[Math.floor((e - l) / a) * r + Math.floor((o - l) / a)] ? 1 : 0]
						}
						t[d++] = h.r, t[d++] = h.g, t[d++] = h.b, t[d] = h.a
					}
			}
		},
		"./node_modules/dijkstrajs/dijkstra.js": function(t, e, o) {
			"use strict";
			var n = {
				single_source_shortest_paths: function(t, e, o) {
					var r = {},
						i = {};
					i[e] = 0;
					var a, s, l, c, d, h, m, u = n.PriorityQueue.make();
					for (u.push(e, 0); !u.empty();)
						for (l in s = (a = u.pop()).value, c = a.cost, d = t[s] || {}) d.hasOwnProperty(l) && (h = c + d[l], m = i[l], (void 0 === i[l] || m > h) && (i[l] = h, u.push(l, h), r[l] = s));
					if (void 0 !== o && void 0 === i[o]) {
						var p = ["Could not find a path from ", e, " to ", o, "."].join("");
						throw new Error(p)
					}
					return r
				},
				extract_shortest_path_from_predecessor_list: function(t, e) {
					for (var o = [], n = e; n;) o.push(n), t[n], n = t[n];
					return o.reverse(), o
				},
				find_path: function(t, e, o) {
					var r = n.single_source_shortest_paths(t, e, o);
					return n.extract_shortest_path_from_predecessor_list(r, o)
				},
				PriorityQueue: {
					make: function(t) {
						var e, o = n.PriorityQueue,
							r = {};
						for (e in t = t || {}, o) o.hasOwnProperty(e) && (r[e] = o[e]);
						return r.queue = [], r.sorter = t.sorter || o.default_sorter, r
					},
					default_sorter: function(t, e) {
						return t.cost - e.cost
					},
					push: function(t, e) {
						var o = {
							value: t,
							cost: e
						};
						this.queue.push(o), this.queue.sort(this.sorter)
					},
					pop: function() {
						return this.queue.shift()
					},
					empty: function() {
						return 0 === this.queue.length
					}
				}
			};
			t.exports = n
		},
		"./node_modules/encode-utf8/index.js": function(t, e, o) {
			"use strict";
			t.exports = function(t) {
				for (var e = [], o = t.length, n = 0; n < o; n++) {
					var r = t.charCodeAt(n);
					if (r >= 55296 && r <= 56319 && o > n + 1) {
						var i = t.charCodeAt(n + 1);
						i >= 56320 && i <= 57343 && (r = 1024 * (r - 55296) + i - 56320 + 65536, n += 1)
					}
					r < 128 ? e.push(r) : r < 2048 ? (e.push(r >> 6 | 192), e.push(63 & r | 128)) : r < 55296 || r >= 57344 && r < 65536 ? (e.push(r >> 12 | 224), e.push(r >> 6 & 63 | 128), e.push(63 & r | 128)) : r >= 65536 && r <= 1114111 ? (e.push(r >> 18 | 240), e.push(r >> 12 & 63 | 128), e.push(r >> 6 & 63 | 128), e.push(63 & r | 128)) : e.push(239, 191, 189)
				}
				return new Uint8Array(e).buffer
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/3.e53b2f5f155b8722c9c5.js.map