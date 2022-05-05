// https://www.redditstatic.com/desktop2x/2.135fdfe5641c7f5ef814.js
// Retrieved at 5/5/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[2], {
		"./node_modules/@reddit/crypto/react/config/index.es.js": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return c
			})), n.d(e, "b", (function() {
				return u
			})), n.d(e, "c", (function() {
				return l
			}));
			var i = n("./node_modules/react/index.js"),
				r = n.n(i);
			const o = {
					api: {
						accessToken: "accessToken"
					},
					gql: {
						host: "12345",
						fetchOptions: {}
					},
					nightModeActive: () => !1,
					sendEvent(t) {
						console.log("Event logged: ", t)
					},
					fbt: {
						inline: (t, e) => t,
						singular: (t, e) => r.a.createElement(r.a.Fragment, null, t),
						param: (t, e) => r.a.createElement(r.a.Fragment, null, t),
						plural: (t, e) => r.a.createElement(r.a.Fragment, null, t)
					}
				},
				a = o,
				s = Object(i.createContext)(a),
				c = s.Provider,
				u = () => Object(i.useContext)(s),
				l = () => u().fbt || o.fbt
		},
		"./node_modules/@reddit/crypto/react/ui/index.es.js": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return y
			})), n.d(e, "b", (function() {
				return C
			})), n.d(e, "c", (function() {
				return W
			})), n.d(e, "d", (function() {
				return hi
			})), n.d(e, "e", (function() {
				return H
			})), n.d(e, "f", (function() {
				return Y
			})), n.d(e, "g", (function() {
				return B
			})), n.d(e, "h", (function() {
				return F
			}));
			var i = n("./node_modules/react/index.js"),
				r = n.n(i),
				o = n("./node_modules/react-dom/index.js"),
				a = n.n(o),
				s = (n("./node_modules/@reddit/crypto/react/ui/index.es.js"), n("./node_modules/@reddit/crypto/react/config/index.es.js")),
				c = Object.defineProperty,
				u = Object.getOwnPropertySymbols,
				l = Object.prototype.hasOwnProperty,
				d = Object.prototype.propertyIsEnumerable,
				f = (t, e, n) => e in t ? c(t, e, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : t[e] = n,
				v = (t, e) => {
					for (var n in e || (e = {})) l.call(e, n) && f(t, n, e[n]);
					if (u)
						for (var n of u(e)) d.call(e, n) && f(t, n, e[n]);
					return t
				},
				h = (t, e) => {
					var n = {};
					for (var i in t) l.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
					if (null != t && u)
						for (var i of u(t)) e.indexOf(i) < 0 && d.call(t, i) && (n[i] = t[i]);
					return n
				},
				p = {
					exports: {}
				};
			! function(t) {
				! function() {
					var e = {}.hasOwnProperty;

					function n() {
						for (var t = [], i = 0; i < arguments.length; i++) {
							var r = arguments[i];
							if (r) {
								var o = typeof r;
								if ("string" === o || "number" === o) t.push(r);
								else if (Array.isArray(r)) {
									if (r.length) {
										var a = n.apply(null, r);
										a && t.push(a)
									}
								} else if ("object" === o)
									if (r.toString === Object.prototype.toString)
										for (var s in r) e.call(r, s) && r[s] && t.push(s);
									else t.push(r.toString())
							}
						}
						return t.join(" ")
					}
					t.exports ? (n.default = n, t.exports = n) : window.classNames = n
				}()
			}(p);
			var g = p.exports;
			var m = {
				button: "_button_6do52_30",
				loadingButton: "_loadingButton_6do52_40",
				greyTheme: "_greyTheme_6do52_45",
				whiteTheme: "_whiteTheme_6do52_48",
				outlinedTheme: "_outlinedTheme_6do52_52",
				whiteInvertedTheme: "_whiteInvertedTheme_6do52_55",
				orangeTheme: "_orangeTheme_6do52_70",
				largeOrangeTheme: "_largeOrangeTheme_6do52_71",
				blueTheme: "_blueTheme_6do52_85",
				blueInvertedTheme: "_blueInvertedTheme_6do52_86",
				disabled: "_disabled_6do52_100"
			};
			const y = ({
				className: t,
				theme: e = "white",
				disabled: n,
				onClick: i,
				children: o,
				loading: a
			}) => r.a.createElement("button", {
				disabled: n,
				onClick: n ? void 0 : i,
				className: g(m.button, t, a ? m.loadingButton : null, n ? m.disabled : null, b(e))
			}, a ? r.a.createElement(Y, {
				className: m.loadingImage
			}) : r.a.createElement(r.a.Fragment, null, o));

			function b(t) {
				switch (t) {
					case "grey":
						return m.greyTheme;
					case "white":
						return m.whiteTheme;
					case "white_inverted":
						return m.whiteInvertedTheme;
					case "outlined":
						return m.outlinedTheme;
					case "orange":
						return m.orangeTheme;
					case "largeOrange":
						return m.largeOrangeTheme;
					case "blue":
						return m.blueTheme;
					case "blue_inverted":
						return m.blueInvertedTheme
				}
			}
			var _ = "https://www.redditstatic.com/crypto-assets/v2/close-contained-4d7c7d218a.svg",
				w = "https://www.redditstatic.com/crypto-assets/v2/close-dark-f5902178f9.svg",
				E = "https://www.redditstatic.com/crypto-assets/v2/close-1a7014e63e.svg";
			var x = "_closeButton_8wmcj_1",
				k = "_contained_8wmcj_13",
				S = "_closeIcon_8wmcj_22";
			const C = ({
				contained: t,
				theme: e,
				className: n,
				onClick: i
			}) => r.a.createElement("button", {
				className: g(x, n, {
					[k]: t
				}),
				onClick: i
			}, r.a.createElement("img", {
				className: S,
				src: O(e, t)
			}));

			function O(t, e) {
				if (e) return _;
				switch (t) {
					case "dark":
						return w;
					default:
						return E
				}
			}
			var j = {};
			Object.defineProperty(j, "__esModule", {
				value: !0
			});
			var M, P = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
					}
					return t
				},
				T = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var i = e[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
						}
					}
					return function(e, n, i) {
						return n && t(e.prototype, n), i && t(e, i), e
					}
				}(),
				A = r.a,
				L = (M = A) && M.__esModule ? M : {
					default: M
				},
				N = a.a;
			var D = function(t) {
				function e(t) {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, e);
					var n = function(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					n.state = {
						style: {}
					};
					return n.width = null, n.height = null, n.left = null, n.top = null, n.transitionTimeout = null, n.updateCall = null, n.element = null, n.settings = Object.assign({}, {
						reverse: !1,
						max: 35,
						perspective: 1e3,
						easing: "cubic-bezier(.03,.98,.52,.99)",
						scale: "1.1",
						speed: "1000",
						transition: !0,
						axis: null,
						reset: !0
					}, n.props.options), n.reverse = n.settings.reverse ? -1 : 1, n.onMouseEnter = n.onMouseEnter.bind(n, n.props.onMouseEnter), n.onMouseMove = n.onMouseMove.bind(n, n.props.onMouseMove), n.onMouseLeave = n.onMouseLeave.bind(n, n.props.onMouseLeave), n
				}
				return function(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}(e, t), T(e, [{
					key: "componentDidMount",
					value: function() {
						this.element = (0, N.findDOMNode)(this)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						clearTimeout(this.transitionTimeout), cancelAnimationFrame(this.updateCall)
					}
				}, {
					key: "onMouseEnter",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							e = arguments[1];
						return this.updateElementPosition(), this.setState(Object.assign({}, this.state, {
							style: P({}, this.state.style, {
								willChange: "transform"
							})
						})), this.setTransition(), t(e)
					}
				}, {
					key: "reset",
					value: function() {
						var t = this;
						window.requestAnimationFrame((function() {
							t.setState(Object.assign({}, t.state, {
								style: P({}, t.state.style, {
									transform: "perspective(" + t.settings.perspective + "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
								})
							}))
						}))
					}
				}, {
					key: "onMouseMove",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							e = arguments[1];
						return e.persist(), null !== this.updateCall && window.cancelAnimationFrame(this.updateCall), this.event = e, this.updateCall = requestAnimationFrame(this.update.bind(this, e)), t(e)
					}
				}, {
					key: "setTransition",
					value: function() {
						var t = this;
						clearTimeout(this.transitionTimeout), this.setState(Object.assign({}, this.state, {
							style: P({}, this.state.style, {
								transition: this.settings.speed + "ms " + this.settings.easing
							})
						})), this.transitionTimeout = setTimeout((function() {
							t.setState(Object.assign({}, t.state, {
								style: P({}, t.state.style, {
									transition: ""
								})
							}))
						}), this.settings.speed)
					}
				}, {
					key: "onMouseLeave",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							e = arguments[1];
						return this.setTransition(), this.settings.reset && this.reset(), t(e)
					}
				}, {
					key: "getValues",
					value: function(t) {
						var e = (t.nativeEvent.clientX - this.left) / this.width,
							n = (t.nativeEvent.clientY - this.top) / this.height,
							i = Math.min(Math.max(e, 0), 1),
							r = Math.min(Math.max(n, 0), 1);
						return {
							tiltX: (this.reverse * (this.settings.max / 2 - i * this.settings.max)).toFixed(2),
							tiltY: (this.reverse * (r * this.settings.max - this.settings.max / 2)).toFixed(2),
							percentageX: 100 * i,
							percentageY: 100 * r
						}
					}
				}, {
					key: "updateElementPosition",
					value: function() {
						var t = this.element.getBoundingClientRect();
						this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = t.left, this.top = t.top
					}
				}, {
					key: "update",
					value: function(t) {
						var e = this.getValues(t);
						this.setState(Object.assign({}, this.state, {
							style: P({}, this.state.style, {
								transform: "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : e.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : e.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")"
							})
						})), this.updateCall = null
					}
				}, {
					key: "render",
					value: function() {
						var t = Object.assign({}, this.props.style, this.state.style);
						return L.default.createElement("div", {
							style: t,
							className: this.props.className,
							onMouseEnter: this.onMouseEnter,
							onMouseMove: this.onMouseMove,
							onMouseLeave: this.onMouseLeave
						}, this.props.children)
					}
				}]), e
			}(A.Component);
			j.default = D;
			var I = {
				container: "_container_s2nn9_30"
			};
			const F = ({
				value: t,
				direction: e,
				className: n
			}) => {
				const i = "up" === e;
				return r.a.createElement("div", {
					className: g(I.container, n, i ? I.upVote : I.downVote)
				}, r.a.createElement("img", {
					src: i ? "https://www.redditstatic.com/crypto-assets/v2/upvote-e1dfcbf404.svg" : "https://www.redditstatic.com/crypto-assets/v2/downvote-37897edc0e.svg"
				}), t ? function(t) {
					let e;
					"number" == typeof t ? (t >= 1e3 && (t /= 1e3, t = `${t=Math.round(100*t)/100}k`), e = t.toString()) : e = t;
					return e
				}(t) : void 0)
			};
			const z = ({
				children: t,
				desc: e
			}) => {
				const n = Object(s.c)();
				return r.a.createElement(r.a.Fragment, null, n.singular(t, e))
			};
			var R = {
				container: "_container_jucc0_30",
				toast: "_toast_jucc0_42",
				bar: "_bar_jucc0_56",
				errorKind: "_errorKind_jucc0_59",
				successKind: "_successKind_jucc0_62",
				image: "_image_jucc0_65",
				content: "_content_jucc0_69",
				close: "_close_jucc0_76",
				entering: "_entering_jucc0_91",
				fadeIn: "_fadeIn_jucc0_1",
				leaving: "_leaving_jucc0_94",
				fadeOut: "_fadeOut_jucc0_1"
			};
			const B = ({
					className: t,
					kind: e,
					children: n,
					onClose: a,
					duration: s = 0
				}) => {
					const c = Object(i.useMemo)(K, []);
					return "undefined" == typeof document || void 0 === document.createElement ? r.a.createElement(r.a.Fragment, null) : Object(o.createPortal)(r.a.createElement(X, {
						className: t,
						kind: e,
						onClose: a,
						duration: s
					}, n), c)
				},
				X = ({
					className: t,
					kind: e,
					children: n,
					onClose: o,
					duration: a = 0
				}) => {
					const [s, c] = Object(i.useState)(!1), u = Object(i.useRef)(null), l = Object(i.useCallback)(t => {
						t && (t.stopPropagation(), t.preventDefault()), c(!0), o && o()
					}, [o]);
					return Object(i.useEffect)(() => {
						c(!1);
						const t = u.current;
						t && (t.classList.add(R.entering), t.addEventListener("animationend", () => {
							t.classList.remove(R.entering)
						}))
					}, [n]), Object(i.useEffect)(() => {
						const t = a ? setTimeout(l, a) : null;
						return () => {
							t && clearTimeout(t)
						}
					}, [a, l]), s ? r.a.createElement(r.a.Fragment, null) : r.a.createElement("div", {
						ref: u,
						className: g(R.toast, t, "error" === e ? R.errorKind : R.successKind)
					}, r.a.createElement("div", {
						className: R.bar
					}), r.a.createElement("div", {
						className: R.image
					}, r.a.createElement("img", {
						src: "https://www.redditstatic.com/crypto-assets/v2/error-image-c10a891d4e.svg"
					})), r.a.createElement("div", {
						className: R.content
					}, n), r.a.createElement("div", {
						className: R.close,
						onClick: l
					}, r.a.createElement("img", {
						src: "https://www.redditstatic.com/crypto-assets/v2/close-41452e2e4d.png"
					})))
				},
				W = () => r.a.createElement(B, {
					kind: "error",
					duration: 5e3
				}, r.a.createElement(z, {
					desc: ""
				}, "Something went wrong, please try again")),
				G = "reddit-crypto-toast-wrapper";

			function K() {
				let t = document.getElementById(G);
				return t || ((t = document.createElement("div")).id = G, t.className = R.container, document.body.appendChild(t)), t
			}
			var U = "_container_10e6p_1";
			const Y = ({
				className: t
			}) => r.a.createElement("img", {
				src: "https://www.redditstatic.com/crypto-assets/v2/loading-84b8aa447d.svg",
				className: g(t, U)
			});
			const H = ({
				href: t,
				className: e,
				children: n
			}) => r.a.createElement("a", {
				href: t,
				target: "_blank",
				rel: "noopener noreferrer",
				className: e
			}, n);

			function q(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			var V = "(prefers-reduced-motion: reduce)",
				J = 1,
				Q = 3,
				$ = 4,
				Z = 5,
				tt = 6,
				et = 7,
				nt = {
					CREATED: J,
					MOUNTED: 2,
					IDLE: Q,
					MOVING: $,
					SCROLLING: Z,
					DRAGGING: tt,
					DESTROYED: et
				};

			function it(t) {
				t.length = 0
			}

			function rt(t, e, n) {
				return Array.prototype.slice.call(t, e, n)
			}

			function ot(t) {
				return t.bind.apply(t, [null].concat(rt(arguments, 1)))
			}
			var at = setTimeout,
				st = function() {};

			function ct(t) {
				return requestAnimationFrame(t)
			}

			function ut(t, e) {
				return typeof e === t
			}

			function lt(t) {
				return !pt(t) && ut("object", t)
			}
			var dt = Array.isArray,
				ft = ot(ut, "function"),
				vt = ot(ut, "string"),
				ht = ot(ut, "undefined");

			function pt(t) {
				return null === t
			}

			function gt(t) {
				return t instanceof HTMLElement
			}

			function mt(t) {
				return dt(t) ? t : [t]
			}

			function yt(t, e) {
				mt(t).forEach(e)
			}

			function bt(t, e) {
				return t.indexOf(e) > -1
			}

			function _t(t, e) {
				return t.push.apply(t, mt(e)), t
			}

			function wt(t, e, n) {
				t && yt(e, (function(e) {
					e && t.classList[n ? "add" : "remove"](e)
				}))
			}

			function Et(t, e) {
				wt(t, vt(e) ? e.split(" ") : e, !0)
			}

			function xt(t, e) {
				yt(e, t.appendChild.bind(t))
			}

			function kt(t, e) {
				yt(t, (function(t) {
					var n = (e || t).parentNode;
					n && n.insertBefore(t, e)
				}))
			}

			function St(t, e) {
				return gt(t) && (t.msMatchesSelector || t.matches).call(t, e)
			}

			function Ct(t, e) {
				var n = t ? rt(t.children) : [];
				return e ? n.filter((function(t) {
					return St(t, e)
				})) : n
			}

			function Ot(t, e) {
				return e ? Ct(t, e)[0] : t.firstElementChild
			}
			var jt = Object.keys;

			function Mt(t, e, n) {
				if (t) {
					var i = jt(t);
					i = n ? i.reverse() : i;
					for (var r = 0; r < i.length; r++) {
						var o = i[r];
						if ("__proto__" !== o && !1 === e(t[o], o)) break
					}
				}
				return t
			}

			function Pt(t) {
				return rt(arguments, 1).forEach((function(e) {
					Mt(e, (function(n, i) {
						t[i] = e[i]
					}))
				})), t
			}

			function Tt(t) {
				return rt(arguments, 1).forEach((function(e) {
					Mt(e, (function(e, n) {
						dt(e) ? t[n] = e.slice() : lt(e) ? t[n] = Tt({}, lt(t[n]) ? t[n] : {}, e) : t[n] = e
					}))
				})), t
			}

			function At(t, e) {
				mt(e || jt(t)).forEach((function(e) {
					delete t[e]
				}))
			}

			function Lt(t, e) {
				yt(t, (function(t) {
					yt(e, (function(e) {
						t && t.removeAttribute(e)
					}))
				}))
			}

			function Nt(t, e, n) {
				lt(e) ? Mt(e, (function(e, n) {
					Nt(t, n, e)
				})) : yt(t, (function(t) {
					pt(n) || "" === n ? Lt(t, e) : t.setAttribute(e, String(n))
				}))
			}

			function Dt(t, e, n) {
				var i = document.createElement(t);
				return e && (vt(e) ? Et(i, e) : Nt(i, e)), n && xt(n, i), i
			}

			function It(t, e, n) {
				if (ht(n)) return getComputedStyle(t)[e];
				pt(n) || (t.style[e] = "" + n)
			}

			function Ft(t, e) {
				It(t, "display", e)
			}

			function zt(t) {
				t.setActive && t.setActive() || t.focus({
					preventScroll: !0
				})
			}

			function Rt(t, e) {
				return t.getAttribute(e)
			}

			function Bt(t, e) {
				return t && t.classList.contains(e)
			}

			function Xt(t) {
				return t.getBoundingClientRect()
			}

			function Wt(t) {
				yt(t, (function(t) {
					t && t.parentNode && t.parentNode.removeChild(t)
				}))
			}

			function Gt(t) {
				return Ot((new DOMParser).parseFromString(t, "text/html").body)
			}

			function Kt(t, e) {
				t.preventDefault(), e && (t.stopPropagation(), t.stopImmediatePropagation())
			}

			function Ut(t, e) {
				return t && t.querySelector(e)
			}

			function Yt(t, e) {
				return e ? rt(t.querySelectorAll(e)) : []
			}

			function Ht(t, e) {
				wt(t, e, !1)
			}

			function qt(t) {
				return t.timeStamp
			}

			function Vt(t) {
				return vt(t) ? t : t ? t + "px" : ""
			}
			var Jt = "splide",
				Qt = "data-" + Jt;

			function $t(t, e) {
				if (!t) throw new Error("[" + Jt + "] " + (e || ""))
			}
			var Zt = Math.min,
				te = Math.max,
				ee = Math.floor,
				ne = Math.ceil,
				ie = Math.abs;

			function re(t, e, n) {
				return ie(t - e) < n
			}

			function oe(t, e, n, i) {
				var r = Zt(e, n),
					o = te(e, n);
				return i ? r < t && t < o : r <= t && t <= o
			}

			function ae(t, e, n) {
				var i = Zt(e, n),
					r = te(e, n);
				return Zt(te(i, t), r)
			}

			function se(t) {
				return +(t > 0) - +(t < 0)
			}

			function ce(t, e) {
				return yt(e, (function(e) {
					t = t.replace("%s", "" + e)
				})), t
			}

			function ue(t) {
				return t < 10 ? "0" + t : "" + t
			}
			var le = {};

			function de() {
				var t = [];

				function e(t, e, n) {
					yt(t, (function(t) {
						t && yt(e, (function(e) {
							e.split(" ").forEach((function(e) {
								var i = e.split(".");
								n(t, i[0], i[1])
							}))
						}))
					}))
				}
				return {
					bind: function(n, i, r, o) {
						e(n, i, (function(e, n, i) {
							var a = "addEventListener" in e,
								s = a ? e.removeEventListener.bind(e, n, r, o) : e.removeListener.bind(e, r);
							a ? e.addEventListener(n, r, o) : e.addListener(r), t.push([e, n, i, r, s])
						}))
					},
					unbind: function(n, i, r) {
						e(n, i, (function(e, n, i) {
							t = t.filter((function(t) {
								return !!(t[0] !== e || t[1] !== n || t[2] !== i || r && t[3] !== r) || (t[4](), !1)
							}))
						}))
					},
					dispatch: function(t, e, n) {
						var i;
						return "function" == typeof CustomEvent ? i = new CustomEvent(e, {
							bubbles: !0,
							detail: n
						}) : (i = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !1, n), t.dispatchEvent(i), i
					},
					destroy: function() {
						t.forEach((function(t) {
							t[4]()
						})), it(t)
					}
				}
			}
			var fe = "mounted",
				ve = "move",
				he = "moved",
				pe = "shifted",
				ge = "click",
				me = "active",
				ye = "inactive",
				be = "visible",
				_e = "hidden",
				we = "slide:keydown",
				Ee = "refresh",
				xe = "updated",
				ke = "resize",
				Se = "resized",
				Ce = "drag",
				Oe = "dragging",
				je = "dragged",
				Me = "scroll",
				Pe = "scrolled",
				Te = "destroy",
				Ae = "arrows:mounted",
				Le = "arrows:updated",
				Ne = "pagination:mounted",
				De = "pagination:updated",
				Ie = "navigation:mounted",
				Fe = "autoplay:play",
				ze = "autoplay:playing",
				Re = "autoplay:pause",
				Be = "lazyload:loaded";

			function Xe(t) {
				var e = t ? t.event.bus : document.createDocumentFragment(),
					n = de();
				return t && t.event.on(Te, n.destroy), Pt(n, {
					bus: e,
					on: function(t, i) {
						n.bind(e, mt(t).join(" "), (function(t) {
							i.apply(i, dt(t.detail) ? t.detail : [])
						}))
					},
					off: ot(n.unbind, e),
					emit: function(t) {
						n.dispatch(e, t, rt(arguments, 1))
					}
				})
			}

			function We(t, e, n, i) {
				var r, o, a = Date.now,
					s = 0,
					c = !0,
					u = 0;

				function l() {
					if (!c) {
						if (s = t ? Zt((a() - r) / t, 1) : 1, n && n(s), s >= 1 && (e(), r = a(), i && ++u >= i)) return d();
						ct(l)
					}
				}

				function d() {
					c = !0
				}

				function f() {
					o && cancelAnimationFrame(o), s = 0, o = 0, c = !0
				}
				return {
					start: function(e) {
						!e && f(), r = a() - (e ? s * t : 0), c = !1, ct(l)
					},
					rewind: function() {
						r = a(), s = 0, n && n(s)
					},
					pause: d,
					cancel: f,
					set: function(e) {
						t = e
					},
					isPaused: function() {
						return c
					}
				}
			}
			var Ge = "ArrowLeft",
				Ke = "ArrowRight",
				Ue = "rtl",
				Ye = "ttb",
				He = {
					width: ["height"],
					left: ["top", "right"],
					right: ["bottom", "left"],
					x: ["y"],
					X: ["Y"],
					Y: ["X"],
					ArrowLeft: ["ArrowUp", Ke],
					ArrowRight: ["ArrowDown", Ge]
				};
			var qe = "role",
				Ve = "tabindex",
				Je = "aria-controls",
				Qe = "aria-current",
				$e = "aria-selected",
				Ze = "aria-label",
				tn = "aria-labelledby",
				en = "aria-hidden",
				nn = "aria-orientation",
				rn = "aria-roledescription",
				on = "aria-live",
				an = "aria-relevant",
				sn = [qe, Ve, "disabled", Je, Qe, Ze, tn, en, nn, rn],
				cn = Jt,
				un = Jt + "__track",
				ln = Jt + "__list",
				dn = Jt + "__slide",
				fn = dn + "--clone",
				vn = dn + "__container",
				hn = Jt + "__arrows",
				pn = Jt + "__arrow",
				gn = pn + "--prev",
				mn = pn + "--next",
				yn = Jt + "__pagination",
				bn = yn + "__page",
				_n = Jt + "__progress" + "__bar",
				wn = Jt + "__toggle",
				En = Jt + "__sr",
				xn = "is-active",
				kn = "is-prev",
				Sn = "is-next",
				Cn = "is-visible",
				On = "is-loading",
				jn = "is-focus-in",
				Mn = [xn, Cn, kn, Sn, On, jn],
				Pn = {
					slide: dn,
					clone: fn,
					arrows: hn,
					arrow: pn,
					prev: gn,
					next: mn,
					pagination: yn,
					page: bn,
					spinner: Jt + "__spinner"
				};
			var Tn = 5,
				An = 200,
				Ln = "touchstart mousedown",
				Nn = "touchmove mousemove",
				Dn = "touchend touchcancel mouseup";
			var In = "slide",
				Fn = "loop",
				zn = "fade";

			function Rn(t, e, n, i) {
				var r, o = Xe(t),
					a = o.on,
					s = o.emit,
					c = o.bind,
					u = t.Components,
					l = t.root,
					d = t.options,
					f = d.isNavigation,
					v = d.updateOnMove,
					h = d.i18n,
					p = d.pagination,
					g = d.slideFocus,
					m = u.Direction.resolve,
					y = Rt(i, "style"),
					b = Rt(i, Ze),
					_ = n > -1,
					w = Ot(i, "." + vn),
					E = Yt(i, d.focusableNodes || "");

				function x() {
					var r = t.splides.map((function(t) {
						var n = t.splide.Components.Slides.getAt(e);
						return n ? n.slide.id : ""
					})).join(" ");
					Nt(i, Ze, ce(h.slideX, (_ ? n : e) + 1)), Nt(i, Je, r), Nt(i, qe, g ? "button" : ""), g && Lt(i, rn)
				}

				function k() {
					r || S()
				}

				function S() {
					if (!r) {
						var n = t.index;
						(o = C()) !== Bt(i, xn) && (wt(i, xn, o), Nt(i, Qe, f && o || ""), s(o ? me : ye, O)),
							function() {
								var e = function() {
										if (t.is(zn)) return C();
										var e = Xt(u.Elements.track),
											n = Xt(i),
											r = m("left"),
											o = m("right");
										return ee(e[r]) <= ne(n[r]) && ee(n[o]) <= ne(e[o])
									}(),
									n = !e && (!C() || _);
								t.state.is([$, Z]) || Nt(i, en, n || "");
								Nt(E, Ve, n ? -1 : ""), g && Nt(i, Ve, n ? -1 : 0);
								e !== Bt(i, Cn) && (wt(i, Cn, e), s(e ? be : _e, O));
								if (!e && document.activeElement === i) {
									var r = u.Slides.getAt(t.index);
									r && zt(r.slide)
								}
							}(), wt(i, kn, e === n - 1), wt(i, Sn, e === n + 1)
					}
					var o
				}

				function C() {
					var i = t.index;
					return i === e || d.cloneStatus && i === n
				}
				var O = {
					index: e,
					slideIndex: n,
					slide: i,
					container: w,
					isClone: _,
					mount: function() {
						_ || (i.id = l.id + "-slide" + ue(e + 1), Nt(i, qe, p ? "tabpanel" : "group"), Nt(i, rn, h.slide), Nt(i, Ze, b || ce(h.slideLabel, [e + 1, t.length]))), c(i, "click", ot(s, ge, O)), c(i, "keydown", ot(s, we, O)), a([he, pe, Pe], S), a(Ie, x), v && a(ve, k)
					},
					destroy: function() {
						r = !0, o.destroy(), Ht(i, Mn), Lt(i, sn), Nt(i, "style", y), Nt(i, Ze, b || "")
					},
					update: S,
					style: function(t, e, n) {
						It(n && w || i, t, e)
					},
					isWithin: function(n, i) {
						var r = ie(n - e);
						return _ || !d.rewind && !t.is(Fn) || (r = Zt(r, t.length - r)), r <= i
					}
				};
				return O
			}
			var Bn = 2;
			var Xn = "http://www.w3.org/2000/svg",
				Wn = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
				Gn = 40;
			var Kn = Qt + "-interval";
			var Un = 10,
				Yn = 600,
				Hn = .6,
				qn = 1.5,
				Vn = 800;
			var Jn = {
				passive: !1,
				capture: !0
			};
			var Qn = {
				Spacebar: " ",
				Right: Ke,
				Left: Ge,
				Up: "ArrowUp",
				Down: "ArrowDown"
			};

			function $n(t) {
				return t = vt(t) ? t : t.key, Qn[t] || t
			}
			var Zn = "keydown";
			var ti = Qt + "-lazy",
				ei = ti + "-srcset",
				ni = "[" + ti + "], [" + ei + "]";
			var ii = [" ", "Enter"];
			var ri = Object.freeze({
					__proto__: null,
					Media: function(t, e, n) {
						var i = t.state,
							r = n.breakpoints || {},
							o = n.reducedMotion || {},
							a = de(),
							s = [];

						function c(t) {
							t && a.destroy()
						}

						function u(t, e) {
							var n = matchMedia(e);
							a.bind(n, "change", l), s.push([t, n])
						}

						function l() {
							var e = i.is(et),
								r = n.direction,
								o = s.reduce((function(t, e) {
									return Tt(t, e[1].matches ? e[0] : {})
								}), {});
							At(n), d(o), n.destroy ? t.destroy("completely" === n.destroy) : e ? (c(!0), t.mount()) : r !== n.direction && t.refresh()
						}

						function d(e, r) {
							Tt(n, e), r && Tt(Object.getPrototypeOf(n), e), i.is(J) || t.emit(xe, n)
						}
						return {
							setup: function() {
								var t = "min" === n.mediaQuery;
								jt(r).sort((function(e, n) {
									return t ? +e - +n : +n - +e
								})).forEach((function(e) {
									u(r[e], "(" + (t ? "min" : "max") + "-width:" + e + "px)")
								})), u(o, V), l()
							},
							destroy: c,
							reduce: function(t) {
								matchMedia(V).matches && (t ? Tt(n, o) : At(n, jt(o)))
							},
							set: d
						}
					},
					Direction: function(t, e, n) {
						return {
							resolve: function(t, e, i) {
								var r = (i = i || n.direction) !== Ue || e ? i === Ye ? 0 : -1 : 1;
								return He[t] && He[t][r] || t.replace(/width|left|right/i, (function(t, e) {
									var n = He[t.toLowerCase()][r] || t;
									return e > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n
								}))
							},
							orient: function(t) {
								return t * (n.direction === Ue ? 1 : -1)
							}
						}
					},
					Elements: function(t, e, n) {
						var i, r, o, a = Xe(t),
							s = a.on,
							c = a.bind,
							u = t.root,
							l = n.i18n,
							d = {},
							f = [],
							v = [],
							h = [];

						function p() {
							i = y("." + un), r = Ot(i, "." + ln), $t(i && r, "A track/list element is missing."), _t(f, Ct(r, "." + dn + ":not(." + fn + ")")), Mt({
									arrows: hn,
									pagination: yn,
									prev: gn,
									next: mn,
									bar: _n,
									toggle: wn
								}, (function(t, e) {
									d[e] = y("." + t)
								})), Pt(d, {
									root: u,
									track: i,
									list: r,
									slides: f
								}),
								function() {
									var t = u.id || (o = Jt, "" + o + ue(le[o] = (le[o] || 0) + 1)),
										e = n.role;
									var o;
									u.id = t, i.id = i.id || t + "-track", r.id = r.id || t + "-list", !Rt(u, qe) && "SECTION" !== u.tagName && e && Nt(u, qe, e);
									Nt(u, rn, l.carousel), Nt(r, qe, "presentation")
								}(), m()
						}

						function g(t) {
							var e = sn.concat("style");
							it(f), Ht(u, v), Ht(i, h), Lt([i, r], e), Lt(u, t ? e : ["style", rn])
						}

						function m() {
							Ht(u, v), Ht(i, h), v = b(cn), h = b(un), Et(u, v), Et(i, h), Nt(u, Ze, n.label), Nt(u, tn, n.labelledby)
						}

						function y(t) {
							var e = Ut(u, t);
							return e && function(t, e) {
								if (ft(t.closest)) return t.closest(e);
								for (var n = t; n && 1 === n.nodeType && !St(n, e);) n = n.parentElement;
								return n
							}(e, "." + cn) === u ? e : void 0
						}

						function b(t) {
							return [t + "--" + n.type, t + "--" + n.direction, n.drag && t + "--draggable", n.isNavigation && t + "--nav", t === cn && xn]
						}
						return Pt(d, {
							setup: p,
							mount: function() {
								s(Ee, g), s(Ee, p), s(xe, m), c(document, Ln + " keydown", (function(t) {
									o = "keydown" === t.type
								}), {
									capture: !0
								}), c(u, "focusin", (function() {
									wt(u, jn, !!o)
								}))
							},
							destroy: g
						})
					},
					Slides: function(t, e, n) {
						var i = Xe(t),
							r = i.on,
							o = i.emit,
							a = i.bind,
							s = e.Elements,
							c = s.slides,
							u = s.list,
							l = [];

						function d() {
							c.forEach((function(t, e) {
								v(t, e, -1)
							}))
						}

						function f() {
							p((function(t) {
								t.destroy()
							})), it(l)
						}

						function v(e, n, i) {
							var r = Rn(t, n, i, e);
							r.mount(), l.push(r)
						}

						function h(t) {
							return t ? g((function(t) {
								return !t.isClone
							})) : l
						}

						function p(t, e) {
							h(e).forEach(t)
						}

						function g(t) {
							return l.filter(ft(t) ? t : function(e) {
								return vt(t) ? St(e.slide, t) : bt(mt(t), e.index)
							})
						}
						return {
							mount: function() {
								d(), r(Ee, f), r(Ee, d), r([fe, Ee], (function() {
									l.sort((function(t, e) {
										return t.index - e.index
									}))
								}))
							},
							destroy: f,
							update: function() {
								p((function(t) {
									t.update()
								}))
							},
							register: v,
							get: h,
							getIn: function(t) {
								var i = e.Controller,
									r = i.toIndex(t),
									o = i.hasFocus() ? 1 : n.perPage;
								return g((function(t) {
									return oe(t.index, r, r + o - 1)
								}))
							},
							getAt: function(t) {
								return g(t)[0]
							},
							add: function(t, e) {
								yt(t, (function(t) {
									if (vt(t) && (t = Gt(t)), gt(t)) {
										var i = c[e];
										i ? kt(t, i) : xt(u, t), Et(t, n.classes.slide), r = t, s = ot(o, ke), l = Yt(r, "img"), (d = l.length) ? l.forEach((function(t) {
											a(t, "load error", (function() {
												--d || s()
											}))
										})) : s()
									}
									var r, s, l, d
								})), o(Ee)
							},
							remove: function(t) {
								Wt(g(t).map((function(t) {
									return t.slide
								}))), o(Ee)
							},
							forEach: p,
							filter: g,
							style: function(t, e, n) {
								p((function(i) {
									i.style(t, e, n)
								}))
							},
							getLength: function(t) {
								return t ? c.length : l.length
							},
							isEnough: function() {
								return l.length > n.perPage
							}
						}
					},
					Layout: function(t, e, n) {
						var i, r, o = Xe(t),
							a = o.on,
							s = o.bind,
							c = o.emit,
							u = e.Slides,
							l = e.Direction.resolve,
							d = e.Elements,
							f = d.root,
							v = d.track,
							h = d.list,
							p = u.getAt,
							g = u.style;

						function m() {
							r = null, i = n.direction === Ye, It(f, "maxWidth", Vt(n.width)), It(v, l("paddingLeft"), b(!1)), It(v, l("paddingRight"), b(!0)), y()
						}

						function y() {
							var t = Xt(f);
							r && r.width === t.width && r.height === t.height || (It(v, "height", function() {
								var t = "";
								i && ($t(t = _(), "height or heightRatio is missing."), t = "calc(" + t + " - " + b(!1) + " - " + b(!0) + ")");
								return t
							}()), g(l("marginRight"), Vt(n.gap)), g("width", n.autoWidth ? null : Vt(n.fixedWidth) || (i ? "" : w())), g("height", Vt(n.fixedHeight) || (i ? n.autoHeight ? null : w() : _()), !0), r = t, c(Se))
						}

						function b(t) {
							var e = n.padding,
								i = l(t ? "right" : "left");
							return e && Vt(e[i] || (lt(e) ? 0 : e)) || "0px"
						}

						function _() {
							return Vt(n.height || Xt(h).width * n.heightRatio)
						}

						function w() {
							var t = Vt(n.gap);
							return "calc((100%" + (t && " + " + t) + ")/" + (n.perPage || 1) + (t && " - " + t) + ")"
						}

						function E(t, e) {
							var n = p(t);
							if (n) {
								var i = Xt(n.slide)[l("right")],
									r = Xt(h)[l("left")];
								return ie(i - r) + (e ? 0 : x())
							}
							return 0
						}

						function x() {
							var t = p(0);
							return t && parseFloat(It(t.slide, l("marginRight"))) || 0
						}
						return {
							mount: function() {
								var t, e, n;
								m(), s(window, "resize load", (t = ot(c, ke), function() {
									n || (n = We(e || 0, (function() {
										t(), n = null
									}), null, 1)).start()
								})), a([xe, Ee], m), a(ke, y)
							},
							listSize: function() {
								return Xt(h)[l("width")]
							},
							slideSize: function(t, e) {
								var n = p(t || 0);
								return n ? Xt(n.slide)[l("width")] + (e ? 0 : x()) : 0
							},
							sliderSize: function() {
								return E(t.length - 1, !0) - E(-1, !0)
							},
							totalSize: E,
							getPadding: function(t) {
								return parseFloat(It(v, l("padding" + (t ? "Right" : "Left")))) || 0
							}
						}
					},
					Clones: function(t, e, n) {
						var i, r = Xe(t),
							o = r.on,
							a = r.emit,
							s = e.Elements,
							c = e.Slides,
							u = e.Direction.resolve,
							l = [];

						function d() {
							(i = h()) && (! function(e) {
								var i = c.get().slice(),
									r = i.length;
								if (r) {
									for (; i.length < e;) _t(i, i);
									_t(i.slice(-e), i.slice(0, e)).forEach((function(o, a) {
										var u = a < e,
											d = function(e, i) {
												var r = e.cloneNode(!0);
												return Et(r, n.classes.clone), r.id = t.root.id + "-clone" + ue(i + 1), r
											}(o.slide, a);
										u ? kt(d, i[0].slide) : xt(s.list, d), _t(l, d), c.register(d, a - e + (u ? 0 : r), o.index)
									}))
								}
							}(i), a(ke))
						}

						function f() {
							Wt(l), it(l)
						}

						function v() {
							i < h() && a(Ee)
						}

						function h() {
							var i = n.clones;
							if (t.is(Fn)) {
								if (!i) {
									var r = n[u("fixedWidth")] && e.Layout.slideSize(0);
									i = r && ne(Xt(s.track)[u("width")] / r) || n[u("autoWidth")] && t.length || n.perPage * Bn
								}
							} else i = 0;
							return i
						}
						return {
							mount: function() {
								d(), o(Ee, f), o(Ee, d), o([xe, ke], v)
							},
							destroy: f
						}
					},
					Move: function(t, e, n) {
						var i, r = Xe(t),
							o = r.on,
							a = r.emit,
							s = t.state.set,
							c = e.Layout,
							u = c.slideSize,
							l = c.getPadding,
							d = c.totalSize,
							f = c.listSize,
							v = c.sliderSize,
							h = e.Direction,
							p = h.resolve,
							g = h.orient,
							m = e.Elements,
							y = m.list,
							b = m.track;

						function _() {
							e.Controller.isBusy() || (e.Scroll.cancel(), w(t.index), e.Slides.update())
						}

						function w(t) {
							E(S(t, !0))
						}

						function E(e, n) {
							if (!t.is(zn)) {
								var i = n ? e : function(e) {
									if (t.is(Fn)) {
										var n = g(e - C()),
											i = j(!1, e) && n < 0,
											r = j(!0, e) && n > 0;
										(i || r) && (e = x(e, r))
									}
									return e
								}(e);
								It(y, "transform", "translate" + p("X") + "(" + i + "px)"), e !== i && a(pe)
							}
						}

						function x(t, e) {
							var n = t - O(e),
								i = v();
							return t -= g(i * (ne(ie(n) / i) || 1)) * (e ? 1 : -1)
						}

						function k() {
							E(C()), i.cancel()
						}

						function S(e, i) {
							var r = g(d(e - 1) - function(t) {
								var e = n.focus;
								return "center" === e ? (f() - u(t, !0)) / 2 : +e * u(t) || 0
							}(e));
							return i ? function(e) {
								n.trimSpace && t.is(In) && (e = ae(e, 0, g(v() - f())));
								return e
							}(r) : r
						}

						function C() {
							var t = p("left");
							return Xt(y)[t] - Xt(b)[t] + g(l(!1))
						}

						function O(t) {
							return S(t ? e.Controller.getEnd() : 0, !!n.trimSpace)
						}

						function j(t, e) {
							e = ht(e) ? C() : e;
							var n = !0 !== t && g(e) < g(O(!1)),
								i = !1 !== t && g(e) > g(O(!0));
							return n || i
						}
						return {
							mount: function() {
								i = e.Transition, o([fe, Se, xe, Ee], _)
							},
							move: function(t, e, n, r) {
								var o, c, u = C();
								t !== e && (o = t > e, c = g(x(C(), o)), o ? c >= 0 : c <= y["scroll" + p("Width")] - Xt(b)[p("width")]) && (k(), E(x(u, t > e), !0)), s($), a(ve, e, n, t), i.start(e, (function() {
									s(Q), a(he, e, n, t), r && r()
								}))
							},
							jump: w,
							translate: E,
							shift: x,
							cancel: k,
							toIndex: function(t) {
								for (var n = e.Slides.get(), i = 0, r = 1 / 0, o = 0; o < n.length; o++) {
									var a = n[o].index,
										s = ie(S(a, !0) - t);
									if (!(s <= r)) break;
									r = s, i = a
								}
								return i
							},
							toPosition: S,
							getPosition: C,
							getLimit: O,
							exceededLimit: j,
							reposition: _
						}
					},
					Controller: function(t, e, n) {
						var i, r, o, a = Xe(t).on,
							s = e.Move,
							c = s.getPosition,
							u = s.getLimit,
							l = s.toPosition,
							d = e.Slides,
							f = d.isEnough,
							v = d.getLength,
							h = t.is(Fn),
							p = t.is(In),
							g = ot(w, !1),
							m = ot(w, !0),
							y = n.start || 0,
							b = y;

						function _() {
							i = v(!0), r = n.perMove, o = n.perPage;
							var t = ae(y, 0, i - 1);
							t !== y && (y = t, s.reposition())
						}

						function w(t, e) {
							var n = r || (j() ? 1 : o),
								i = E(y + n * (t ? -1 : 1), y, !(r || j()));
							return -1 === i && p && !re(c(), u(!t), 1) ? t ? 0 : k() : e ? i : x(i)
						}

						function E(e, r, a) {
							if (f()) {
								var s = k(),
									u = function(e) {
										if (p && "move" === n.trimSpace && e !== y)
											for (var i = c(); i === l(e, !0) && oe(e, 0, t.length - 1, !n.rewind);) e < y ? --e : ++e;
										return e
									}(e);
								u !== e && (r = e, e = u, a = !1), e < 0 || e > s ? e = oe(0, e, r, !0) || oe(s, r, e, !0) ? S(C(e)) : h ? a ? e < 0 ? -(i % o || o) : i : e : n.rewind ? e < 0 ? s : 0 : -1 : a && e !== r && (e = S(C(r) + (e < r ? -1 : 1)))
							} else e = -1;
							return e
						}

						function x(t) {
							return h ? (t + i) % i || 0 : t
						}

						function k() {
							return te(i - (j() || h && r ? 1 : o), 0)
						}

						function S(t) {
							return ae(j() ? t : o * t, 0, k())
						}

						function C(t) {
							return j() ? t : ee((t >= k() ? i - 1 : t) / o)
						}

						function O(t) {
							t !== y && (b = y, y = t)
						}

						function j() {
							return !ht(n.focus) || n.isNavigation
						}

						function M() {
							return t.state.is([$, Z]) && !!n.waitForTransition
						}
						return {
							mount: function() {
								_(), a([xe, Ee], _)
							},
							go: function(t, e, n) {
								if (!M()) {
									var i = function(t) {
											var e = y;
											if (vt(t)) {
												var n = t.match(/([+\-<>])(\d+)?/) || [],
													i = n[1],
													r = n[2];
												"+" === i || "-" === i ? e = E(y + +("" + i + (+r || 1)), y) : ">" === i ? e = r ? S(+r) : g(!0) : "<" === i && (e = m(!0))
											} else e = h ? t : ae(t, 0, k());
											return e
										}(t),
										r = x(i);
									r > -1 && (e || r !== y) && (O(r), s.move(i, r, b, n))
								}
							},
							scroll: function(t, n, i, r) {
								e.Scroll.scroll(t, n, i, (function() {
									O(x(s.toIndex(s.getPosition()))), r && r()
								}))
							},
							getNext: g,
							getPrev: m,
							getAdjacent: w,
							getEnd: k,
							setIndex: O,
							getIndex: function(t) {
								return t ? b : y
							},
							toIndex: S,
							toPage: C,
							toDest: function(t) {
								var e = s.toIndex(t);
								return p ? ae(e, 0, k()) : e
							},
							hasFocus: j,
							isBusy: M
						}
					},
					Arrows: function(t, e, n) {
						var i, r, o = Xe(t),
							a = o.on,
							s = o.bind,
							c = o.emit,
							u = n.classes,
							l = n.i18n,
							d = e.Elements,
							f = e.Controller,
							v = d.arrows,
							h = d.track,
							p = v,
							g = d.prev,
							m = d.next,
							y = {};

						function b() {
							! function() {
								var t = n.arrows;
								!t || g && m || (p = v || Dt("div", u.arrows), g = x(!0), m = x(!1), i = !0, xt(p, [g, m]), !v && kt(p, h));
								g && m && (Pt(y, {
									prev: g,
									next: m
								}), Ft(p, t ? "" : "none"), Et(p, r = hn + "--" + n.direction), t && (a([he, Ee, Pe], k), s(m, "click", ot(E, ">")), s(g, "click", ot(E, "<")), k(), Nt([g, m], Je, h.id), c(Ae, g, m)))
							}(), a(xe, _)
						}

						function _() {
							w(), b()
						}

						function w() {
							o.destroy(), Ht(p, r), i ? (Wt(v ? [g, m] : p), g = m = null) : Lt([g, m], sn)
						}

						function E(t) {
							f.go(t, !0)
						}

						function x(t) {
							return Gt('<button class="' + u.arrow + " " + (t ? u.prev : u.next) + '" type="button"><svg xmlns="' + Xn + '" viewBox="0 0 ' + Gn + " " + Gn + '" width="' + Gn + '" height="' + Gn + '" focusable="false"><path d="' + (n.arrowPath || Wn) + '" />')
						}

						function k() {
							var e = t.index,
								n = f.getPrev(),
								i = f.getNext(),
								r = n > -1 && e < n ? l.last : l.prev,
								o = i > -1 && e > i ? l.first : l.next;
							g.disabled = n < 0, m.disabled = i < 0, Nt(g, Ze, r), Nt(m, Ze, o), c(Le, g, m, n, i)
						}
						return {
							arrows: y,
							mount: b,
							destroy: w
						}
					},
					Autoplay: function(t, e, n) {
						var i, r, o = Xe(t),
							a = o.on,
							s = o.bind,
							c = o.emit,
							u = We(n.interval, t.go.bind(t, ">"), (function(t) {
								var e = d.bar;
								e && It(e, "width", 100 * t + "%"), c(ze, t)
							})),
							l = u.isPaused,
							d = e.Elements,
							f = e.Elements,
							v = f.root,
							h = f.toggle,
							p = n.autoplay,
							g = "pause" === p;

						function m() {
							l() && e.Slides.isEnough() && (u.start(!n.resetProgress), r = i = g = !1, _(), c(Fe))
						}

						function y(t) {
							void 0 === t && (t = !0), g = !!t, _(), l() || (u.pause(), c(Re))
						}

						function b() {
							g || (i || r ? y(!1) : m())
						}

						function _() {
							h && (wt(h, xn, !g), Nt(h, Ze, n.i18n[g ? "play" : "pause"]))
						}

						function w(t) {
							var i = e.Slides.getAt(t);
							u.set(i && +Rt(i.slide, Kn) || n.interval)
						}
						return {
							mount: function() {
								p && (! function() {
									n.pauseOnHover && s(v, "mouseenter mouseleave", (function(t) {
										i = "mouseenter" === t.type, b()
									}));
									n.pauseOnFocus && s(v, "focusin focusout", (function(t) {
										r = "focusin" === t.type, b()
									}));
									h && s(h, "click", (function() {
										g ? m() : y(!0)
									}));
									a([ve, Me, Ee], u.rewind), a(ve, w)
								}(), h && Nt(h, Je, d.track.id), g || m(), _())
							},
							destroy: u.cancel,
							play: m,
							pause: y,
							isPaused: l
						}
					},
					Cover: function(t, e, n) {
						var i = Xe(t).on;

						function r(t) {
							e.Slides.forEach((function(e) {
								var n = Ot(e.container || e.slide, "img");
								n && n.src && o(t, n, e)
							}))
						}

						function o(t, e, n) {
							n.style("background", t ? 'center/cover no-repeat url("' + e.src + '")' : "", !0), Ft(e, t ? "none" : "")
						}
						return {
							mount: function() {
								n.cover && (i(Be, ot(o, !0)), i([fe, xe, Ee], ot(r, !0)))
							},
							destroy: ot(r, !1)
						}
					},
					Scroll: function(t, e, n) {
						var i, r, o = Xe(t),
							a = o.on,
							s = o.emit,
							c = t.state.set,
							u = e.Move,
							l = u.getPosition,
							d = u.getLimit,
							f = u.exceededLimit,
							v = u.translate,
							h = 1;

						function p(t, n, o, a, d) {
							var f = l();
							if (y(), o) {
								var v = e.Layout.sliderSize(),
									p = se(t) * v * ee(ie(t) / v) || 0;
								t = u.toPosition(e.Controller.toDest(t % v)) + p
							}
							var b = re(f, t, 1);
							h = 1, n = b ? 0 : n || te(ie(t - f) / qn, Vn), r = a, i = We(n, g, ot(m, f, t, d), 1), c(Z), s(Me), i.start()
						}

						function g() {
							c(Q), r && r(), s(Pe)
						}

						function m(e, i, r, o) {
							var a, s, c = l(),
								u = (e + (i - e) * (a = o, (s = n.easingFunc) ? s(a) : 1 - Math.pow(1 - a, 4)) - c) * h;
							v(c + u), t.is(In) && !r && f() && (h *= Hn, ie(u) < Un && p(d(f(!0)), Yn, !1, void 0, !0))
						}

						function y() {
							i && i.cancel()
						}

						function b() {
							i && !i.isPaused() && (y(), g())
						}
						return {
							mount: function() {
								a(ve, y), a([xe, Ee], b)
							},
							destroy: y,
							scroll: p,
							cancel: b
						}
					},
					Drag: function(t, e, n) {
						var i, r, o, a, s, c, u, l, d = Xe(t),
							f = d.on,
							v = d.emit,
							h = d.bind,
							p = d.unbind,
							g = t.state,
							m = e.Move,
							y = e.Scroll,
							b = e.Controller,
							_ = e.Elements.track,
							w = e.Media.reduce,
							E = e.Direction,
							x = E.resolve,
							k = E.orient,
							S = m.getPosition,
							C = m.exceededLimit,
							O = !1;

						function j() {
							var t = n.drag;
							R(!t), a = "free" === t
						}

						function M(t) {
							if (c = !1, !u) {
								var e = z(t);
								i = t.target, r = n.noDrag, St(i, "." + bn + ", ." + pn) || r && St(i, r) || !e && t.button || (b.isBusy() ? Kt(t, !0) : (l = e ? _ : window, s = g.is([$, Z]), o = null, h(l, Nn, P, Jn), h(l, Dn, T, Jn), m.cancel(), y.cancel(), L(t)))
							}
							var i, r
						}

						function P(e) {
							if (g.is(tt) || (g.set(tt), v(Ce)), e.cancelable)
								if (s) {
									m.translate(i + N(e) / (O && t.is(In) ? Tn : 1));
									var r = D(e) > An,
										o = O !== (O = C());
									(r || o) && L(e), c = !0, v(Oe), Kt(e)
								} else(function(t) {
									return ie(N(t)) > ie(N(t, !0))
								})(e) && (s = function(t) {
									var e = n.dragMinThreshold,
										i = lt(e),
										r = i && e.mouse || 0,
										o = (i ? e.touch : +e) || 10;
									return ie(N(t)) > (z(t) ? o : r)
								}(e), Kt(e))
						}

						function T(i) {
							g.is(tt) && (g.set(Q), v(je)), s && (! function(i) {
								var r = function(e) {
										if (t.is(Fn) || !O) {
											var n = D(e);
											if (n && n < An) return N(e) / n
										}
										return 0
									}(i),
									o = function(t) {
										return S() + se(t) * Zt(ie(t) * (n.flickPower || 600), a ? 1 / 0 : e.Layout.listSize() * (n.flickMaxPages || 1))
									}(r),
									s = n.rewind && n.rewindByDrag;
								w(!1), a ? b.scroll(o, 0, n.snap) : t.is(zn) ? b.go(k(se(r)) < 0 ? s ? "<" : "-" : s ? ">" : "+") : t.is(In) && O && s ? b.go(C(!0) ? ">" : "<") : b.go(b.toDest(o), !0);
								w(!0)
							}(i), Kt(i)), p(l, Nn, P), p(l, Dn, T), s = !1
						}

						function A(t) {
							!u && c && Kt(t, !0)
						}

						function L(t) {
							o = r, r = t, i = S()
						}

						function N(t, e) {
							return F(t, e) - F(I(t), e)
						}

						function D(t) {
							return qt(t) - qt(I(t))
						}

						function I(t) {
							return r === t && o || r
						}

						function F(t, e) {
							return (z(t) ? t.changedTouches[0] : t)["page" + x(e ? "Y" : "X")]
						}

						function z(t) {
							return "undefined" != typeof TouchEvent && t instanceof TouchEvent
						}

						function R(t) {
							u = t
						}
						return {
							mount: function() {
								h(_, Nn, st, Jn), h(_, Dn, st, Jn), h(_, Ln, M, Jn), h(_, "click", A, {
									capture: !0
								}), h(_, "dragstart", Kt), f([fe, xe], j)
							},
							disable: R,
							isDragging: function() {
								return s
							}
						}
					},
					Keyboard: function(t, e, n) {
						var i, r, o = Xe(t),
							a = o.on,
							s = o.bind,
							c = o.unbind,
							u = t.root,
							l = e.Direction.resolve;

						function d() {
							var t = n.keyboard;
							t && (i = "global" === t ? window : u, s(i, Zn, h))
						}

						function f() {
							c(i, Zn)
						}

						function v() {
							var t = r;
							r = !0, at((function() {
								r = t
							}))
						}

						function h(e) {
							if (!r) {
								var n = $n(e);
								n === l(Ge) ? t.go("<") : n === l(Ke) && t.go(">")
							}
						}
						return {
							mount: function() {
								d(), a(xe, f), a(xe, d), a(ve, v)
							},
							destroy: f,
							disable: function(t) {
								r = t
							}
						}
					},
					LazyLoad: function(t, e, n) {
						var i = Xe(t),
							r = i.on,
							o = i.off,
							a = i.bind,
							s = i.emit,
							c = "sequential" === n.lazyLoad,
							u = [fe, Ee, he, Pe],
							l = [];

						function d() {
							it(l), e.Slides.forEach((function(t) {
								Yt(t.slide, ni).forEach((function(e) {
									var i = Rt(e, ti),
										r = Rt(e, ei);
									if (i !== e.src || r !== e.srcset) {
										var o = n.classes.spinner,
											a = e.parentElement,
											s = Ot(a, "." + o) || Dt("span", o, a);
										l.push([e, t, s]), e.src || Ft(e, "none")
									}
								}))
							})), c && p()
						}

						function f() {
							(l = l.filter((function(e) {
								var i = n.perPage * ((n.preloadPages || 1) + 1) - 1;
								return !e[1].isWithin(t.index, i) || v(e)
							}))).length || o(u)
						}

						function v(t) {
							var e = t[0];
							Et(t[1].slide, On), a(e, "load error", ot(h, t)), Nt(e, "src", Rt(e, ti)), Nt(e, "srcset", Rt(e, ei)), Lt(e, ti), Lt(e, ei)
						}

						function h(t, e) {
							var n = t[0],
								i = t[1];
							Ht(i.slide, On), "error" !== e.type && (Wt(t[2]), Ft(n, ""), s(Be, n, i), s(ke)), c && p()
						}

						function p() {
							l.length && v(l.shift())
						}
						return {
							mount: function() {
								n.lazyLoad && (d(), r(Ee, d), c || r(u, f))
							},
							destroy: ot(it, l)
						}
					},
					Pagination: function(t, e, n) {
						var i, r, o = Xe(t),
							a = o.on,
							s = o.emit,
							c = o.bind,
							u = e.Slides,
							l = e.Elements,
							d = e.Controller,
							f = d.hasFocus,
							v = d.getIndex,
							h = d.go,
							p = e.Direction.resolve,
							g = [];

						function m() {
							i && (Wt(l.pagination ? rt(i.children) : i), Ht(i, r), it(g), i = null), o.destroy()
						}

						function y(t) {
							h(">" + t, !0)
						}

						function b(t, e) {
							var n = g.length,
								i = $n(e),
								r = _(),
								o = -1;
							i === p(Ke, !1, r) ? o = ++t % n : i === p(Ge, !1, r) ? o = (--t + n) % n : "Home" === i ? o = 0 : "End" === i && (o = n - 1);
							var a = g[o];
							a && (zt(a.button), h(">" + o), Kt(e, !0))
						}

						function _() {
							return n.paginationDirection || n.direction
						}

						function w(t) {
							return g[d.toPage(t)]
						}

						function E() {
							var t = w(v(!0)),
								e = w(v());
							if (t) {
								var n = t.button;
								Ht(n, xn), Lt(n, $e), Nt(n, Ve, -1)
							}
							if (e) {
								var r = e.button;
								Et(r, xn), Nt(r, $e, !0), Nt(r, Ve, "")
							}
							s(De, {
								list: i,
								items: g
							}, t, e)
						}
						return {
							items: g,
							mount: function e() {
								m(), a([xe, Ee], e), n.pagination && u.isEnough() && (a([ve, Me, Pe], E), function() {
									var e = t.length,
										o = n.classes,
										a = n.i18n,
										s = n.perPage,
										d = f() ? e : ne(e / s);
									Et(i = l.pagination || Dt("ul", o.pagination, l.track.parentElement), r = yn + "--" + _()), Nt(i, qe, "tablist"), Nt(i, Ze, a.select), Nt(i, nn, _() === Ye ? "vertical" : "");
									for (var v = 0; v < d; v++) {
										var h = Dt("li", null, i),
											p = Dt("button", {
												class: o.page,
												type: "button"
											}, h),
											m = u.getIn(v).map((function(t) {
												return t.slide.id
											})),
											w = !f() && s > 1 ? a.pageX : a.slideX;
										c(p, "click", ot(y, v)), n.paginationKeyboard && c(p, "keydown", ot(b, v)), Nt(h, qe, "presentation"), Nt(p, qe, "tab"), Nt(p, Je, m.join(" ")), Nt(p, Ze, ce(w, v + 1)), Nt(p, Ve, -1), g.push({
											li: h,
											button: p,
											page: v
										})
									}
								}(), E(), s(Ne, {
									list: i,
									items: g
								}, w(t.index)))
							},
							destroy: m,
							getAt: w,
							update: E
						}
					},
					Sync: function(t, e, n) {
						var i = n.isNavigation,
							r = n.slideFocus,
							o = [];

						function a() {
							var e, n;
							t.splides.forEach((function(e) {
								e.isParent || (c(t, e.splide), c(e.splide, t))
							})), i && (e = Xe(t), (n = e.on)(ge, l), n(we, d), n([fe, xe], u), o.push(e), e.emit(Ie, t.splides))
						}

						function s() {
							o.forEach((function(t) {
								t.destroy()
							})), it(o)
						}

						function c(t, e) {
							var n = Xe(t);
							n.on(ve, (function(t, n, i) {
								e.go(e.is(Fn) ? i : t)
							})), o.push(n)
						}

						function u() {
							Nt(e.Elements.list, nn, n.direction === Ye ? "vertical" : "")
						}

						function l(e) {
							t.go(e.index)
						}

						function d(t, e) {
							bt(ii, $n(e)) && (l(t), Kt(e))
						}
						return {
							setup: function() {
								t.options = {
									slideFocus: ht(r) ? i : r
								}
							},
							mount: a,
							destroy: s,
							remount: function() {
								s(), a()
							}
						}
					},
					Wheel: function(t, e, n) {
						var i = Xe(t).bind,
							r = 0;

						function o(i) {
							if (i.cancelable) {
								var o = i.deltaY,
									a = o < 0,
									s = qt(i),
									c = n.wheelMinThreshold || 0,
									u = n.wheelSleep || 0;
								ie(o) > c && s - r > u && (t.go(a ? "<" : ">"), r = s),
									function(i) {
										return !n.releaseWheel || t.state.is($) || -1 !== e.Controller.getAdjacent(i)
									}(a) && Kt(i)
							}
						}
						return {
							mount: function() {
								n.wheel && i(e.Elements.track, "wheel", o, Jn)
							}
						}
					},
					Live: function(t, e, n) {
						var i = Xe(t).on,
							r = e.Elements.track,
							o = n.live && !n.isNavigation,
							a = Dt("span", En);

						function s(t) {
							o && Nt(r, on, t ? "off" : "polite")
						}
						return {
							mount: function() {
								o && (s(!e.Autoplay.isPaused()), Nt(r, an, "additions"), a.textContent = "…", i(Fe, ot(s, !0)), i(Re, ot(s, !1)), i([he, Pe], ot(xt, r, a)))
							},
							disable: s,
							destroy: function() {
								Lt(r, [on, an]), Wt(a)
							}
						}
					}
				}),
				oi = {
					type: "slide",
					role: "region",
					speed: 400,
					perPage: 1,
					cloneStatus: !0,
					arrows: !0,
					pagination: !0,
					paginationKeyboard: !0,
					interval: 5e3,
					pauseOnHover: !0,
					pauseOnFocus: !0,
					resetProgress: !0,
					easing: "cubic-bezier(0.25, 1, 0.5, 1)",
					drag: !0,
					direction: "ltr",
					trimSpace: !0,
					focusableNodes: "a, button, textarea, input, select, iframe",
					live: !0,
					classes: Pn,
					i18n: {
						prev: "Previous slide",
						next: "Next slide",
						first: "Go to first slide",
						last: "Go to last slide",
						slideX: "Go to slide %s",
						pageX: "Go to page %s",
						play: "Start autoplay",
						pause: "Pause autoplay",
						carousel: "carousel",
						slide: "slide",
						select: "Select a slide to show",
						slideLabel: "%s of %s"
					},
					reducedMotion: {
						speed: 0,
						rewindSpeed: 0,
						autoplay: "pause"
					}
				};

			function ai(t, e, n) {
				var i = Xe(t).on;
				return {
					mount: function() {
						i([fe, Ee], (function() {
							at((function() {
								e.Slides.style("transition", "opacity " + n.speed + "ms " + n.easing)
							}))
						}))
					},
					start: function(t, n) {
						var i = e.Elements.track;
						It(i, "height", Vt(Xt(i).height)), at((function() {
							n(), It(i, "height", "")
						}))
					},
					cancel: st
				}
			}

			function si(t, e, n) {
				var i, r = Xe(t).bind,
					o = e.Move,
					a = e.Controller,
					s = e.Scroll,
					c = e.Elements.list,
					u = ot(It, c, "transition");

				function l() {
					u(""), s.cancel()
				}
				return {
					mount: function() {
						r(c, "transitionend", (function(t) {
							t.target === c && i && (l(), i())
						}))
					},
					start: function(e, r) {
						var c = o.toPosition(e, !0),
							l = o.getPosition(),
							d = function(e) {
								var i = n.rewindSpeed;
								if (t.is(In) && i) {
									var r = a.getIndex(!0),
										o = a.getEnd();
									if (0 === r && e >= o || r >= o && 0 === e) return i
								}
								return n.speed
							}(e);
						ie(c - l) >= 1 && d >= 1 ? n.useScroll ? s.scroll(c, d, !1, r) : (u("transform " + d + "ms " + n.easing), o.translate(c, !0), i = r) : (o.jump(e), r())
					},
					cancel: l
				}
			}
			var ci = function() {
				function t(e, n) {
					var i;
					this.event = Xe(), this.Components = {}, this.state = (i = J, {
						set: function(t) {
							i = t
						},
						is: function(t) {
							return bt(mt(t), i)
						}
					}), this.splides = [], this._o = {}, this._E = {};
					var r = vt(e) ? Ut(document, e) : e;
					$t(r, r + " is invalid."), this.root = r, n = Tt({
						label: Rt(r, Ze) || "",
						labelledby: Rt(r, tn) || ""
					}, oi, t.defaults, n || {});
					try {
						Tt(n, JSON.parse(Rt(r, Qt)))
					} catch (o) {
						$t(!1, "Invalid JSON")
					}
					this._o = Object.create(Tt({}, n))
				}
				var e, n, i, r = t.prototype;
				return r.mount = function(t, e) {
					var n = this,
						i = this.state,
						r = this.Components;
					return $t(i.is([J, et]), "Already mounted!"), i.set(J), this._C = r, this._T = e || this._T || (this.is(zn) ? ai : si), this._E = t || this._E, Mt(Pt({}, ri, this._E, {
						Transition: this._T
					}), (function(t, e) {
						var i = t(n, r, n._o);
						r[e] = i, i.setup && i.setup()
					})), Mt(r, (function(t) {
						t.mount && t.mount()
					})), this.emit(fe), Et(this.root, "is-initialized"), i.set(Q), this.emit("ready"), this
				}, r.sync = function(t) {
					return this.splides.push({
						splide: t
					}), t.splides.push({
						splide: this,
						isParent: !0
					}), this.state.is(Q) && (this._C.Sync.remount(), t.Components.Sync.remount()), this
				}, r.go = function(t) {
					return this._C.Controller.go(t), this
				}, r.on = function(t, e) {
					return this.event.on(t, e), this
				}, r.off = function(t) {
					return this.event.off(t), this
				}, r.emit = function(t) {
					var e;
					return (e = this.event).emit.apply(e, [t].concat(rt(arguments, 1))), this
				}, r.add = function(t, e) {
					return this._C.Slides.add(t, e), this
				}, r.remove = function(t) {
					return this._C.Slides.remove(t), this
				}, r.is = function(t) {
					return this._o.type === t
				}, r.refresh = function() {
					return this.emit(Ee), this
				}, r.destroy = function(t) {
					void 0 === t && (t = !0);
					var e = this.event,
						n = this.state;
					return n.is(J) ? Xe(this).on("ready", this.destroy.bind(this, t)) : (Mt(this._C, (function(e) {
						e.destroy && e.destroy(t)
					}), !0), e.emit(Te), e.destroy(), t && it(this.splides), n.set(et)), this
				}, e = t, (n = [{
					key: "options",
					get: function() {
						return this._o
					},
					set: function(t) {
						this._C.Media.set(t, !0)
					}
				}, {
					key: "length",
					get: function() {
						return this._C.Slides.getLength(!0)
					}
				}, {
					key: "index",
					get: function() {
						return this._C.Controller.getIndex()
					}
				}]) && q(e.prototype, n), i && q(e, i), Object.defineProperty(e, "prototype", {
					writable: !1
				}), t
			}();
			ci.defaults = {}, ci.STATES = nt;
			var ui = [
				[fe, "onMounted"],
				["ready", "onReady"],
				[ve, "onMove"],
				[he, "onMoved"],
				[ge, "onClick"],
				[me, "onActive"],
				[ye, "onInactive"],
				[be, "onVisible"],
				[_e, "onHidden"],
				[Ee, "onRefresh"],
				[xe, "onUpdated"],
				[ke, "onResize"],
				[Se, "onResized"],
				[Ce, "onDrag"],
				[Oe, "onDragging"],
				[je, "onDragged"],
				[Me, "onScroll"],
				[Pe, "onScrolled"],
				[Te, "onDestroy"],
				[Ae, "onArrowsMounted"],
				[Le, "onArrowsUpdated"],
				[Ne, "onPaginationMounted"],
				[De, "onPaginationUpdated"],
				[Ie, "onNavigationMounted"],
				[Fe, "onAutoplayPlay"],
				[ze, "onAutoplayPlaying"],
				[Re, "onAutoplayPause"],
				[Be, "onLazyLoadLoaded"]
			];

			function li(...t) {
				return t.filter(Boolean).join(" ")
			}

			function di(t) {
				return null !== t && "object" == typeof t
			}

			function fi(t, e) {
				const n = t;
				return function(t, e) {
					if (t) {
						const n = Object.keys(t);
						for (let i = 0; i < n.length; i++) {
							const r = n[i];
							if ("__proto__" !== r && !1 === e(t[r], r)) break
						}
					}
				}(e, (t, e) => {
					Array.isArray(t) ? n[e] = t.slice() : di(t) ? n[e] = fi(di(n[e]) ? n[e] : {}, t) : n[e] = t
				}), n
			}
			var vi = t => {
				var e = t,
					{
						children: n,
						className: i
					} = e,
					o = h(e, ["children", "className"]);
				return r.a.createElement("div", v({
					className: li("splide__track", i)
				}, o), r.a.createElement("ul", {
					className: "splide__list"
				}, n))
			};
			r.a.Component;
			const hi = {
				CheckmarkGreen: "https://www.redditstatic.com/crypto-assets/v2/checkmark-green-7355fd2559.svg",
				CheckmarkGrey: "https://www.redditstatic.com/crypto-assets/v2/checkmark-grey-1978f4add3.svg",
				Chevron: "https://www.redditstatic.com/crypto-assets/v2/chevron-ca25b73dda.svg",
				CloseContained: _,
				CloseDark: w,
				Close: E,
				Vault: "https://www.redditstatic.com/crypto-assets/v2/vault-cfd0500d93.svg"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/2.135fdfe5641c7f5ef814.js.map