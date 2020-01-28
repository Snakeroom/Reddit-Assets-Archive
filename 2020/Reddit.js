// https://www.redditstatic.com/desktop2x/Reddit.03582410a614ac884abf.js
// Retrieved at 1/28/2020, 6:30:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, s) {},
		"./assets/fonts/VCR/font.less": function(e, t, s) {},
		"./src/chat/actions/promo/checkPromoInLocalStorage.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/cache/index.ts"),
				a = s("./src/chat/constants/promos.ts"),
				r = s("./src/chat/models/Promo/index.ts");
			t.a = e => {
				const t = Object(n.b)(a.a) || [];
				return e = (e => {
					switch (e) {
						case r.c.LegacySubredditChatFtux:
							return r.a.SubredditChatFtux;
						case r.c.LegacyNSFWWarning:
							return r.b.NSFWWarning;
						default:
							return e
					}
				})(e), t.includes(e)
			}
		},
		"./src/chat/constants/promos.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "chat.promo"
		},
		"./src/chat/helpers/dom.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				a = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/FocusTrap/index.ts"),
				i = s("./src/reddit/actions/shortcuts.ts"),
				c = s("./src/reddit/components/Portal/index.tsx"),
				d = s("./src/reddit/constants/shortcuts.ts"),
				l = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = s("./src/higherOrderComponents/asModal/index.m.less"),
				m = s.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var b = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const h = e => {
				var {
					className: t,
					isVisible: s
				} = e, n = b(e, ["className", "isVisible"]);
				return a.a.createElement("div", p({
					className: Object(r.a)(m.a.overlay, t, {
						[m.a.mIsVisible]: s
					})
				}, n))
			};

			function g(e) {
				class t extends n.Component {
					constructor(e) {
						super(e), this.getRef = e => this.ref = e, this.onClick = e => e.stopPropagation(), this.onOverlayClick = e => {
							this.props.onOverlayClick && this.props.onOverlayClick(), e.stopPropagation()
						}, this.state = {
							mounted: !1
						}
					}
					componentDidMount() {
						this.props.ignoreDefaultFocus || this.ref && this.ref.focus(), this.setState({
							mounted: !0
						}), Object(l.a)(), this.ref && (this.focusTrap = new o.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(l.b)(), Object(i.r)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: s,
							ignoreDefaultFocus: n,
							onOverlayClick: o,
							overlayClassName: i,
							overlayCustomStyles: l,
							withOverlay: u
						} = t, p = b(t, ["className", "ignoreDefaultFocus", "onOverlayClick", "overlayClassName", "overlayCustomStyles", "withOverlay"]);
						return a.a.createElement(c.a, {
							container: document.getElementById(d.b)
						}, a.a.createElement(h, {
							className: i,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: l
						}, a.a.createElement("div", {
							"aria-modal": !0,
							className: Object(r.a)(m.a.modal, s),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, a.a.createElement(e, p))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			s("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => a.a.createElement(e, t)
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			class n {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class a {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const s = new a(t);
					return e.forEach(e => s.push(e)), s
				}
				first() {
					if (this.tail) return this.tail.value
				}
				firstNode() {
					if (this.tail) return this.tail
				}
				forEach(e) {
					let t = this.tail;
					for (; t;) e(t.value), t = t.next
				}
				get(e) {
					const t = this.getNode(e);
					if (t) return t.value
				}
				getNode(e) {
					return this.itemsByKey[e]
				}
				has(e) {
					return e in this.itemsByKey
				}
				insertAfter(e, t) {
					const s = t instanceof n ? t : new n(t),
						a = this.getNode(e);
					if (!a) throw new Error("Cannot find item with key ".concat(e));
					s.prev = a, s.next = a.next, a.next = s, s.next && (s.next.prev = s);
					const r = t instanceof n ? t.value[this.key] : t[this.key];
					this.itemsByKey[r] = s, this.length++
				}
				insertBefore(e, t) {
					const s = t instanceof n ? t : new n(t),
						a = this.getNode(e);
					if (!a) throw new Error("Cannot find item with key ".concat(e));
					s.next = a, s.prev = a.prev, a.prev = s, s.prev && (s.prev.next = s);
					const r = t instanceof n ? t.value[this.key] : t[this.key];
					this.itemsByKey[r] = s, this.length++
				}
				last() {
					if (this.head) return this.head.value
				}
				lastNode() {
					if (this.head) return this.head
				}
				pop() {
					if (!this.head) return;
					return this.removeNode(this.head).value
				}
				push(e) {
					const t = e instanceof n ? e : new n(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const s = e instanceof n ? t.value[this.key] : e[this.key];
					this.itemsByKey[s] = t, this.length++
				}
				remove(e) {
					const t = this.getNode(e);
					if (t) return this.removeNode(t).value
				}
				removeNode(e) {
					return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.tail && (this.tail = e.next), e === this.head && (this.head = e.prev), e.next = void 0, e.prev = void 0, this.itemsByKey[e.value[this.key]] = void 0, this.length--, e
				}
				shift() {
					if (!this.tail) return;
					return this.removeNode(this.tail).value
				}
				toArray() {
					const e = [];
					return this.forEach(t => e.push(t)), e
				}
				unshift(e) {
					const t = e instanceof n ? e : new n(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const s = e instanceof n ? t.value[this.key] : e[this.key];
					this.itemsByKey[s] = t, this.length++
				}
			}
		},
		"./src/lib/browser/isIncognito.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts");
			const a = 120 * n.Z;
			t.a = async () => {
				let e = await (async () => await new Promise(e => {
					const t = window.RequestFileSystem || window.webkitRequestFileSystem;
					t ? t(0, 100, () => e(!1), () => e(!0)) : e(void 0)
				}))();
				return e || (e = await (async () => {
					if ("storage" in navigator && "estimate" in navigator.storage) {
						const {
							quota: e
						} = await navigator.storage.estimate();
						return !e || e <= a
					}
				})()), e
			}
		},
		"./src/lib/doubleclickForPublishers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "f", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/isFakeSubreddit/index.ts"),
				o = s("./src/lib/fastdom/index.ts");
			const i = new Map,
				c = (e, t) => {
					const s = [n.a.dfpSlotPrefix];
					return t !== a.yb.PROFILE && (Object(r.a)(e) ? s.push("frontpage") : s.push("r.".concat(e))), t === a.yb.INDEX ? s.push(a.yb.LISTING) : t && s.push(t), s.join("/")
				},
				d = (e, t) => {
					e.setTargeting("keywords", t.keywords);
					for (const s in t.properties) e.setTargeting(s, t.properties[s])
				},
				l = (e, t) => {
					p(e);
					const {
						id: s,
						slot: n,
						sizes: a
					} = t, r = window.googletag = window.googletag || {};
					return r.cmd = r.cmd || [], new Promise(c => {
						r.cmd.push(() => {
							o.a.write(() => {
								const o = r.defineSlot(n, a, s);
								if (!o) return c();
								o.addService(r.pubads()), i.set(e, o), o.setCollapseEmptyDiv(!0), d(o, t), r.display(s), c()
							})
						})
					})
				},
				u = (e, t) => {
					const s = i.get(e);
					if (!s) return;
					const n = window.googletag = window.googletag || {};
					n.cmd = n.cmd || [], n.cmd.push(() => {
						Object.keys(t).forEach(e => s.setTargeting(e, t[e]))
					})
				},
				m = (e, t) => {
					const s = i.get(e);
					if (!s) return;
					d(s, t);
					const n = window.googletag = window.googletag || {};
					n.cmd = n.cmd || [], window.aax && window.aax.cmd.push(() => {
						window.aax.getAbpStatus && window.aax.getAbpStatus() && n.cmd.push(() => {
							n.pubads().refresh([s])
						})
					}), window.apstag.fetchBids({
						slots: [{
							slotID: t.id,
							slotName: [t.slot, t.id].join("/"),
							sizes: t.sizes
						}],
						timeout: 2e3
					}, () => {
						n.cmd.push(() => {
							window.apstag.setDisplayBids(), n.pubads().refresh([s])
						})
					})
				},
				p = e => {
					const t = i.get(e);
					if (!t) return;
					const s = window.googletag = window.googletag || {};
					s.cmd = s.cmd || [], s.cmd.push(() => {
						o.a.write(() => {
							s.destroySlots([t]), i.delete(e)
						})
					})
				},
				b = e => {
					const t = () => {
						const t = document.createElement("script");
						t.src = e, t.async = !0;
						const s = document.getElementsByTagName("script")[0];
						s && s.parentNode && s.parentNode.insertBefore(t, s)
					};
					if (document.head && (() => {
							const {
								relList: e
							} = document.createElement("link");
							if (!e || !e.supports) return !1;
							try {
								return e.supports("preload")
							} catch (t) {
								return !1
							}
						})()) {
						const s = document.createElement("link");
						s.href = e, s.rel = "preload", s.as = "script", s.onload = t, document.head.insertBefore(s, document.head.firstChild)
					} else t()
				},
				h = e => {
					const t = window.googletag = window.googletag || {};
					t.cmd = t.cmd || [], b("//www.googletagservices.com/tag/js/gpt.js"), t.cmd.push(() => {
						t.pubads().addEventListener("slotRequested", e.onRequest), t.pubads().disableInitialLoad(), t.enableServices()
					}), window.apstag || (window.apstag = {
						_Q: []
					}, window.apstag.init = function() {
						for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
						window.apstag._Q.push(["i", t])
					}, window.apstag.fetchBids = function() {
						for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
						window.apstag._Q.push(["f", t])
					}, b("//c.amazon-adsystem.com/aax2/apstag.js"), window.apstag.init({
						pubID: "3379",
						adServer: "googletag",
						bidTimeout: 2e3,
						params: {
							aps_privacy: e.limitDataProcessing ? "1YY" : "1--"
						}
					})), window.aax || (window.aax = {
						pubId: "AAX763KC6",
						ver: 1.2,
						initTime: (new Date).getTime(),
						hst: location.hostname,
						deliverExchangeDemand: () => {},
						cmd: [],
						execute: [() => window.aax.limitDataProcessing(e.limitDataProcessing)]
					}, b("//c.aaxads.com/aax.js?pub=".concat(window.aax.pubId, "&hst=").concat(window.aax.hst, "&ver=").concat(window.aax.ver)))
				}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./src/reddit/models/Media/index.ts"),
				a = s("./node_modules/url/url.js"),
				r = s.n(a);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: s,
					domainOverride: a
				} = e;
				let o = "";
				if (s) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					o = a || Object(n.A)(e)
				} else o = Object(n.A)(e);
				const i = r.a.parse(o),
					c = i.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (i.hostname ? i.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/isSimpleClick/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				if (e && e.target && (e => {
						let t = e;
						for (; t && t !== window.document.body;) {
							if ("A" === t.nodeName) return !0;
							t = t.parentElement
						}
						return !1
					})(e.target)) {
					if (e.ctrlKey) return !1;
					if (e.altKey) return !1;
					if (e.metaKey) return !1;
					if (e.shiftKey) return !1
				}
				return !0
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/lodash/every.js"),
				a = s.n(n);

			function r(e) {
				let t = null,
					s = null;
				return function() {
					for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
					return null !== t && r.length === t.length && a()(r, (e, s) => e === t[s]) || (t = r, s = e(...r)), s
				}
			}
		},
		"./src/lib/prettyPrintNumber/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.split.js");
			const n = e => {
					const t = e.split(".");
					return [t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")].concat(t.slice(1)).join(".")
				},
				a = 1e3,
				r = 100 * a,
				o = 10 * r,
				i = 100 * o,
				c = 10 * i,
				d = 100 * c,
				l = 51;

			function u(e, t) {
				return t ? n(e.toString()) : e >= d - l ? "".concat(Math.floor(e / c), "b") : e >= c - l && e < d - l ? "".concat((e / c).toFixed(1), "b") : e >= i - l && e < c - l ? "".concat(Math.floor(e / o), "m") : e >= o - l && e < i - l ? "".concat((e / o).toFixed(1), "m") : e >= r - l && e < o - l ? "".concat(Math.floor(e / a), "k") : e >= a && e < r - l ? "".concat((e / a).toFixed(1), "k") : String(e)
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/app/strings/index.ts"),
				a = s("./src/lib/constants/index.ts");
			const r = [a.Xb, a.db, a.w, a.I, a.cb, a.Cb],
				o = {
					[a.Cb]: "time.seconds",
					[a.cb]: "time.minutes",
					[a.I]: "time.hours",
					[a.w]: "time.days",
					[a.db]: "time.months",
					[a.Xb]: "time.years"
				},
				i = {
					[a.Cb]: "time.short.seconds",
					[a.cb]: "time.short.minutes",
					[a.I]: "time.short.hours",
					[a.w]: "time.short.days",
					[a.db]: "time.short.months",
					[a.Xb]: "time.short.years"
				};

			function c(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(t).getTime(),
					l = {
						[a.Xb]: "",
						[a.db]: "",
						[a.w]: "",
						[a.I]: "",
						[a.cb]: "",
						[a.Cb]: ""
					};
				let u = d - c;
				if (u <= 0) return Object(n.a)(e, "time.soon");
				for (const a of r) {
					const t = Math.floor(u / a);
					t && (l[a] = s ? "".concat(t).concat(Object(n.a)(e, i[a])) : Object(n.c)(e, o[a], t)), u -= t * a
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return s ? m : Object(n.a)(e, "time.timeLeft", {
					time: m
				})
			}
		},
		"./src/reddit/actions/alpha.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = s("./src/config.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				r = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts");
			var i = s("./src/reddit/helpers/redesignOptoutCookie/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/models/Toast/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/makeRequest/index.ts");
			async function m(e, t) {
				return await Object(u.b)({
					method: l.bb.POST,
					endpoint: "/timings/optoutrequest",
					data: {
						appName: e.statsAppName,
						successful: t
					},
					type: "json"
				})
			}
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			}));
			const p = e => async (t, s, n) => {
				let {
					apiContext: l
				} = n;
				(await
					function(e) {
						return Object(a.b)(Object(r.a)(e, [o.a]), {
							endpoint: "".concat(e.apiUrl, "/api/leave_redesign_beta"),
							method: "post",
							type: "json"
						})
					}(l())).ok ? (Object(i.b)(), await m(l(), !0), e && window.location.reload()) : (m(l(), !1), t(Object(c.e)({
					kind: d.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, b = () => async (e, t, s) => {
				let {
					apiContext: c
				} = s;
				Object(i.a)(),
					function(e) {
						Object(a.b)(Object(r.a)(e, [o.a]), {
							endpoint: "".concat(e.apiUrl, "/api/join_redesign_beta"),
							method: "post",
							type: "json"
						}).then(() => {
							const {
								pathname: e,
								search: t
							} = window.location, s = "".concat(n.a.redditUrl).concat(e).concat(t);
							window.location.replace(s)
						})
					}(c())
			}
		},
		"./src/reddit/actions/chat/promo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/chat/actions/promo/checkPromoInLocalStorage.ts"),
				r = s("./src/chat/actions/promo/constants.ts"),
				o = s("./src/chat/models/Promo/index.ts"),
				i = s("./src/reddit/selectors/chat.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = Object(n.a)(r.a),
				l = Object(n.a)(r.b),
				u = () => async (e, t) => {
					const s = t(),
						n = Object(a.a)(o.a.SubredditChatFtux),
						r = Object(c.db)(s),
						l = Object(c.n)(s),
						u = Object(i.g)(s);
					!n && !r && l && u && e(d(o.a.SubredditChatFtux))
				}
		},
		"./src/reddit/actions/economics/paymentSystems/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			const r = Object(n.a)(a.a),
				o = Object(n.a)(a.e),
				i = Object(n.a)(a.b),
				c = Object(n.a)(a.c),
				d = Object(n.a)(a.d)
		},
		"./src/reddit/actions/economics/paymentSystems/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/endpoints/economics/paymentSystems.ts"),
				a = s("./src/reddit/actions/economics/paymentSystems/actionCreators.ts");
			const r = () => async (e, t, s) => {
				let {
					apiContext: r
				} = s;
				e(Object(a.d)());
				const o = await Object(n.d)(r());
				o.ok ? e(Object(a.c)(o.body)) : e(Object(a.b)({
					error: o.error
				}))
			}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "i", (function() {
				return p
			})), s.d(t, "j", (function() {
				return b
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const r = Object(n.a)(a.a),
				o = Object(n.a)(a.b),
				i = Object(n.a)(a.c),
				c = Object(n.a)(a.d),
				d = Object(n.a)(a.e),
				l = Object(n.a)(a.f),
				u = (Object(n.a)(a.g), Object(n.a)(a.h)),
				m = Object(n.a)(a.i),
				p = Object(n.a)(a.j),
				b = Object(n.a)(a.k)
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forOwn.js"),
				a = s.n(n),
				r = s("./src/reddit/actions/governance/errorToast.ts"),
				o = s("./src/reddit/endpoints/economics/emojis.ts"),
				i = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = s("./src/reddit/endpoints/economics/subredditPremium.ts"),
				d = s("./src/reddit/endpoints/governance/badges.ts"),
				l = s("./src/config.ts"),
				u = s("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, s) {
				return Object(u.a)(e, {
					method: "get",
					endpoint: "".concat(l.a.metaUrl, "/products/").concat(t, "?owners=").concat(s) + "&types=emotes_pack,giphy"
				})
			}
			var p = s("./src/reddit/models/Badge/index.ts"),
				b = s("./src/reddit/models/Badge/managementPage.ts"),
				h = s("./src/reddit/models/Product/index.ts"),
				g = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				f = s("./src/reddit/selectors/economics.ts"),
				x = s("./src/reddit/selectors/products.ts"),
				v = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function y(e) {
				return !!e && "removeBadge" === e.type
			}

			function C(e) {
				if (!y(e)) return e
			}
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "c", (function() {
				return M
			}));
			const O = () => async (e, t, s) => {
				let {
					apiContext: n
				} = s;
				const a = t().user.account,
					r = !t().economics.specialMemberships.allSubscriptionsFetched;
				if (a && r) {
					const t = await Object(i.b)(n());
					if (t.ok) {
						e(Object(v.a)(t.body));
						const s = Object.keys(t.body);
						if (s.length) {
							const t = await Object(i.e)(n(), s);
							t.ok && e(Object(v.g)(t.body))
						}
					}
				}
			}, E = (e, t) => async (s, n, a) => {
				let {
					apiContext: r
				} = a;
				const o = n().user.account,
					i = n().economics.subredditPremium[e],
					d = !i || i.status !== g.a.Fetched || t;
				if (o && d) {
					const t = await Object(c.a)(r(), e, o.id);
					s(Object(v.i)(t))
				}
			}, P = e => async (t, s, n) => {
				let {
					apiContext: a
				} = n;
				const o = s(),
					i = o.user.account,
					c = Object(f.f)(o, e.subredditId),
					l = Object.keys(c).map(e => c[e]).filter(Boolean);
				if (i && e.badge) {
					let s, n;
					s = e.placement === p.a.First ? c[b.a.Loyalty] : e.placement === p.a.Second ? c[b.a.Achievement] : c[b.a.Cosmetic], t(Object(v.b)(Object.assign({}, e, {
						badge: C(e.badge),
						currentAppliedBadges: l,
						userId: i.id
					}))), y(e.badge) && s ? n = await Object(d.a)(a(), e.subredditId, s.id, !1) : y(e.badge) || (n = await Object(d.a)(a(), e.subredditId, e.badge.id)), n && !n.ok && (t(Object(v.b)(Object.assign({}, e, {
						badge: s,
						currentAppliedBadges: l,
						userId: i.id
					}))), Object(r.a)(t, n.error))
				}
			}, j = (e, t) => async (s, n, a) => {
				let {
					apiContext: r
				} = a;
				await s(E(e, !0));
				const o = n().economics.subredditPremium[e];
				if (o && o.status === g.a.Fetched) {
					const n = o.data.userOwnedBadges.find(e => e.type === t.id);
					n && (s(P({
						badge: n,
						subredditId: e,
						placement: n.placement
					})), s(Object(v.e)(b.c.MyBadges)))
				}
			}, w = e => async (t, s, n) => {
				let {
					apiContext: i
				} = n;
				const c = s().user.account,
					d = !s().economics.emotes[e],
					l = !s().economics.gifs[e];
				if (c && (d || l)) {
					const [s, n] = await Promise.all([Object(o.b)(i(), e), m(i(), e, c.id)]);
					if (!n.ok) return void Object(r.a)(t, n.error);
					const d = {
						emotes: [],
						emoteCollections: s.ok ? s.body : {},
						giphy: []
					};
					a()(n.body, e => {
						e.type === h.a.EmotesPack ? d.emotes.push(e) : e.type === h.a.Giphy && d.giphy.push(e)
					}), t(Object(v.f)({
						subredditId: e,
						products: d
					}))
				}
			}, M = (e, t, s) => async (n, a, r) => {
				let {
					apiContext: o
				} = r;
				if (await n(E(e, !0)), s && t) {
					const s = a(),
						r = Object(f.f)(s, e),
						o = Object(x.a)(s, t);
					if (!r[Object(b.d)(o.placement)] && o) {
						const t = Object(f.l)(s, {
							subredditId: e,
							badge: o
						});
						t && await n(P({
							badge: t,
							subredditId: e
						}))
					}
					n(Object(v.d)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}
		},
		"./src/reddit/actions/emailCollection/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return h
			}));
			var n = s("./node_modules/lodash/once.js"),
				a = s.n(n),
				r = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/actions/notificationBanner.ts"),
				i = s("./src/reddit/actions/preferences.ts"),
				c = s("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				d = s("./src/reddit/components/Settings/modalIds.ts"),
				l = s("./src/reddit/helpers/localStorage/index.ts"),
				u = s("./src/reddit/selectors/emailCollection.ts");
			const m = a()(l.c),
				p = () => async (e, t) => {
					const s = t();
					m(), Object(u.a)(s) && (await e(Object(i.x)()), Object(u.a)(t()) && e(Object(o.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const s = t();
					Object(u.a)(s) && (Object(l.b)(), e(Object(o.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(r.g)(d.c))
				}
		},
		"./src/reddit/actions/notifications/loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/loadWithRetries/index.ts");
			t.a = () => Object(n.a)(() => s.e("PushNotifications").then(s.bind(null, "./src/reddit/actions/notifications/index.ts")))
		},
		"./src/reddit/actions/notifications/preferences.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				r = s("./src/config.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/notificationPrefs.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/actions/notifications/constants.ts");
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return C
			}));
			const b = Object(n.a)(p.d),
				h = Object(n.a)(p.c),
				g = Object(n.a)(p.b),
				f = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const a = t();
					if (!Object(m.i)(a)) return;
					const d = Object(u.b)(a),
						l = Object(u.a)(a);
					if (d || l) return;
					e(b());
					const p = await (e => Object(i.b)(e, {
						endpoint: Object(c.a)("".concat(r.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: o.bb.GET
					}))(n());
					if (p.ok) {
						const t = (e => ({
							chatMessages: !(!e.chat_message && !e.chat_request),
							communityRecommendations: !!e.subreddit_recommendation,
							liveEvent: !!e.live_event,
							trendingPosts: !!e.lifecycle_post_suggestions,
							unreadMessages: !!(e.comment_reply || e.post_reply || e.private_message || e.username_mention),
							upvotedComments: !!e.upvote_comment,
							upvotedPosts: !!e.upvote_post
						}))(p.body);
						e(h({
							preferences: t
						}))
					} else e(g(p.error))
				}, x = Object(n.a)(p.k), v = Object(n.a)(p.j), y = Object(n.a)(p.i), C = e => async (t, s, n) => {
					let {
						apiContext: p
					} = n;
					const b = s();
					if (!Object(m.i)(b)) return;
					if (Object(u.e)(b)) return;
					const h = Object(u.d)(b);
					t(x({
						preferences: e
					}));
					const g = await ((e, t) => Object(i.b)(e, {
						endpoint: Object(c.a)("".concat(r.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: o.bb.POST,
						data: {
							preferences: JSON.stringify({
								chat_message: t.chatMessages,
								chat_request: t.chatMessages,
								comment_reply: t.unreadMessages,
								lifecycle_post_suggestions: t.trendingPosts,
								live_event: t.liveEvent,
								post_reply: t.unreadMessages,
								private_message: t.unreadMessages,
								subreddit_recommendation: t.communityRecommendations,
								username_mention: t.unreadMessages,
								upvote_comment: t.upvotedComments,
								upvote_post: t.upvotedPosts
							})
						}
					}))(p(), e);
					g.ok ? (t(v()), t(Object(a.e)({
						kind: l.b.SuccessCommunity,
						text: Object(d.c)("Changes saved")
					}))) : t(y({
						error: g.error,
						preferences: h
					}))
				}
		},
		"./src/reddit/actions/notifications/state.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/actions/notifications/constants.ts"),
				a = s("./src/reddit/actions/notifications/utils.ts");
			const r = {
					isEnabled: !1,
					isSubscriptionActive: !1,
					permission: n.a.Default
				},
				o = {
					denied: n.a.Denied,
					granted: n.a.Granted
				};
			const i = new class {
					constructor() {
						this.isInitializing = !1, this.isReady = !1, this.isSubscriptionActive = !1, this.permission = n.a.Default, this.listeners = new Set, this.initialize = async e => {
							if (this.isReady || this.isInitializing) return;
							await Object(a.a)(e) === n.f.NotificationsSupported && (this.isInitializing = !0, await this.subscribeToPermissionsChange(), await this.updateIsSubscriptionEnabled(), this.isInitializing = !1, this.isReady = !0, this.notifyAll())
						}, this.updatePermission = () => {
							this.permission = o[Notification.permission] || n.a.Default
						}, this.updateIsSubscriptionEnabled = async () => {
							const e = await window.navigator.serviceWorker.getRegistrations();
							for (const t of e) {
								if (await t.pushManager.getSubscription()) return void(this.isSubscriptionActive = !0)
							}
						}, this.recalculate = async () => {
							this.isReady && (this.updatePermission(), await this.updateIsSubscriptionEnabled(), this.notifyAll())
						}, this.getCurrentState = () => {
							return {
								isEnabled: this.isSubscriptionActive && this.permission === n.a.Granted,
								isSubscriptionActive: this.isSubscriptionActive,
								permission: this.permission
							}
						}, this.subscribe = e => {
							this.listeners.has(e) || this.listeners.add(e), this.isReady && e(this.getCurrentState())
						}, this.unsubscribe = e => {
							this.listeners.delete(e)
						}
					}
					async subscribeToPermissionsChange() {
						if (!window.navigator.permissions || !window.navigator.permissions.query) return;
						const e = await window.navigator.permissions.query({
							name: "notifications"
						});
						this.updatePermission(), e.onchange = () => {
							this.updatePermission(), this.notifyAll()
						}
					}
					notifyAll() {
						this.isReady && this.listeners.forEach(e => {
							e(this.getCurrentState())
						})
					}
				},
				c = i.subscribe,
				d = i.unsubscribe,
				l = i.initialize,
				u = i.recalculate
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/localStorageAvailable/index.ts"),
				a = s("./src/reddit/actions/notifications/constants.ts"),
				r = s("./src/reddit/featureFlags/index.ts");
			const o = e => r.d.pushNotificationsBrowserSupported(e) ? Object(n.a)() ? window.Notification && window.ServiceWorker && window.PushManager && window.navigator.serviceWorker ? a.f.NotificationsSupported : a.f.NotAllRequiredAPIsSupported : a.f.LocalStorageUnavailable : a.f.BrowserUnsupported
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/reddit/actions/economics/helpers/async.ts"),
				r = s("./src/reddit/actions/pages/subreddit.ts"),
				o = s("./src/reddit/actions/users.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				c = s("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const s = t().platform.currentPage;
				if (s && s.routeMatch && s.routeMatch.match) {
					const d = (s.routeMatch.match.params || {}).subredditName;
					if (d) {
						const s = [],
							l = t();
						Object(c.K)(l) || s.push(e(Object(o.u)()));
						const u = Object(n.a)(d, null);
						s.push(e(Object(r.i)(u, d, {}))), await Promise.all(s);
						const m = Object(i.G)(t(), d);
						await e(Object(a.a)({
							subredditId: m,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
			}
		},
		"./src/reddit/actions/pages/settings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/extractQueryParams/index.ts"),
				i = s("./src/lib/filterQueryParams/index.ts"),
				c = s("./src/reddit/actions/chat/userSettings.ts"),
				d = s("./src/reddit/actions/economics/paymentSystems/thunkedActions.ts"),
				l = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				u = s("./src/reddit/actions/externalAccount.ts"),
				m = s("./src/reddit/actions/notifications/preferences.ts"),
				p = s("./src/reddit/actions/platform.ts"),
				b = s("./src/reddit/actions/preferences.ts"),
				h = s("./src/reddit/actions/profile/index.ts"),
				g = s("./src/reddit/actions/subredditSettings.ts"),
				f = s("./src/reddit/actions/toaster.ts"),
				x = s("./src/reddit/actions/users.ts"),
				v = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/reddit/helpers/externalAccount/index.tsx"),
				C = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				O = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				E = s("./src/reddit/selectors/externalAccount.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/actions/pages/shared.ts");
			const w = e => async (t, s) => {
				await t(Object(x.u)());
				const w = [t(Object(b.x)(!0)), t(Object(l.a)())];
				s().economics.paymentSystems.status === O.a.NotFetched && w.push(t(Object(d.a)())), await Promise.all(w); {
					const e = s();
					if (!Object(P.K)(e)) return Object(C.a)(t, e)
				}
				const {
					page: M = r.Lb.Account
				} = e.params;
				if (M === r.Lb.Gold) return void t(Object(n.c)("/settings/premium"));
				const S = [];
				M === r.Lb.Profile && (S.push(t(Object(h.a)())), S.push(t(Object(g.e)()))), M === r.Lb.Account && S.push(t(Object(u.o)())), M === r.Lb.Notifications && S.push(t(Object(m.a)())), M !== r.Lb.Privacy && M !== r.Lb.Messaging || S.push(t(Object(c.b)())), await Promise.all(S); {
					const e = s(),
						r = e.platform.currentPage,
						{
							url: c
						} = r,
						d = Object(o.a)(c).get(v.c);
					if (d && (t(Object(n.c)(Object(i.a)(c, [v.c]))), Object(E.a)(e))) {
						const s = Object(P.T)(e),
							n = Object(a.a)(s, "settings.accountForm.connectedAccounts.twitterConnected.toast");
						t(Object(f.e)({
							text: n
						})), Object(y.b)(d)
					}
				}
				t(Object(p.l)({
					title: Object(j.b)(s(), "settings")
				}))
			}
		},
		"./src/reddit/actions/pages/subredditCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/actions/platform.ts"),
				r = s("./src/reddit/actions/tags/index.ts"),
				o = s("./src/reddit/actions/users.ts"),
				i = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = () => async (e, t) => {
				let s = t();
				e(a.l({
					title: Object(n.a)(s.user.language, "title.subredditCreation")
				})), await e(Object(o.u)()), s = t(), Object(c.K)(s) ? await e(Object(r.e)()) : Object(i.a)(e, s)
			}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.m.less": function(e, t, s) {
			e.exports = {
				IFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				iFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				CloseButton: "_1ryinm9ofYAx_k9dpdCbpq",
				closeButton: "_1ryinm9ofYAx_k9dpdCbpq",
				Close: "_14dkERGUnSwisNWFcFX-0T",
				close: "_14dkERGUnSwisNWFcFX-0T"
			}
		},
		"./src/reddit/components/AccountManagerModal/index.m.less": function(e, t, s) {
			e.exports = {
				Overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				IframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				iframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				small: "FBb4FZ4ng7CvLYrT6LBdp"
			}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var n = s("./node_modules/lodash/isEqual.js"),
				a = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = s("./src/reddit/constants/viewabilityEvents.ts");
			const d = .01,
				l = .5,
				u = 1,
				m = [l, u, d],
				p = 1e3,
				b = 0,
				h = 2e3,
				g = 3e3;
			class f extends r.Component {
				constructor(e) {
					super(e), this.viewableImpression = {
						timer: null,
						event: c.a.Viewable,
						threshold: l,
						viewabilityMinimum: p,
						fired: !1,
						timeViewingInitialized: 0
					}, this.impression = {
						timer: null,
						event: c.a.Impression,
						threshold: d,
						viewabilityMinimum: b,
						fired: !1,
						timeViewingInitialized: 0
					}, this.videoViewable = {
						timer: null,
						event: c.a.VideoViewable,
						threshold: l,
						viewabilityMinimum: h,
						fired: !1,
						timeViewingInitialized: 0,
						elapsedTime: 0,
						remainingTime: h,
						timeViewingInterrupted: 0
					}, this.videoFullyViewable = {
						timer: null,
						event: c.a.VideoFullyViewable,
						threshold: u,
						viewabilityMinimum: g,
						fired: !1,
						timeViewingInitialized: 0,
						elapsedTime: 0,
						remainingTime: g,
						timeViewingInterrupted: 0
					}, this.handleViewabilityChange = e => {
						this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						a()(this.state.event, e) || this.setState({
							event: e
						}), this.checkViewability(e, this.viewableImpression), this.checkViewability(e, this.impression), this.props.trackVideoMetrics && (this.checkViewability(e, this.videoViewable), this.checkViewability(e, this.videoFullyViewable))
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: e.continuousViewingStartedAt
					}
				}
				componentDidUpdate() {
					this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? this.props.trackVideoMetrics ? this.checkViewabilityByType(this.state.event) : (this.updateViewableStats(this.videoViewable), this.updateViewableStats(this.videoFullyViewable)) : this.resetTimers()
				}
				resetTimers() {
					this.resetTimer(this.videoViewable), this.resetTimer(this.videoFullyViewable), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e.timer), e.timer = null, e.timeViewingInitialized = 0, e.elapsedTime = 0, e.remainingTime = e.viewabilityMinimum
				}
				updateViewableStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.elapsedTime = e.timeViewingInterrupted - e.timeViewingInitialized, t = e.viewabilityMinimum - e.elapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e.timer))
				}
				isAdequatelyInView(e, t) {
					return !!e && e.isIntersecting && e.intersectionRatio >= t
				}
				checkViewability(e, t) {
					if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
						const e = this.getLengthForTimer(t);
						return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
					}
					this.clearTimer(t.timer)
				}
				clearTimer(e) {
					e && clearTimeout(e)
				}
				getLengthForTimer(e) {
					return e.remainingTime || e.viewabilityMinimum || 0
				}
				fireStat(e) {
					setTimeout(() => this.props.onViewable(e.event), 0), e.fired = !0
				}
				initTimer(e, t) {
					this.clearTimer(e.timer), e.timer = window.setTimeout(() => {
						this.fireStat(e)
					}, t)
				}
				render() {
					return o.a.createElement(i.a, {
						threshold: m,
						onChange: this.handleViewabilityChange,
						disabled: this.viewableImpression.fired && this.videoViewable.fired && this.impression.fired && this.videoFullyViewable.fired || this.viewableImpression.fired && this.impression.fired && !this.props.trackVideoMetrics
					}, this.props.children)
				}
			}
		},
		"./src/reddit/components/AlertBanner/Wrapper.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "GfthJQJvWCHdUoMi6YjYa",
				wrapper: "GfthJQJvWCHdUoMi6YjYa"
			}
		},
		"./src/reddit/components/AlertBanner/heights.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			}));
			const n = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showM2MTopBanner]: !!t.showM2MTopBanner,
					[e.showSuspended]: !!t.showSuspended
				}),
				a = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				})
		},
		"./src/reddit/components/AlertBanner/index.m.less": function(e, t, s) {
			e.exports = {
				underlineLink: "vOGtEDdh1mVbkqinhg3Ov",
				underlineButton: "_1uQwMnfXrOfzkL_CFxH6fd",
				wrapper: "_3el1HrJryfAxBUzu4HsIhE",
				deprecated: "_2s1xq3Ji1Oj7oZtdSqWznV",
				fpr: "_36j6vvbAY0wIrxbyXuNQhn",
				suspended: "_1ivoPEQV9lryC0mH-f_uGY",
				closeButton: "_1oAzKCYwbVOQ-AbuRZfMg2",
				closeIcon: "_6aklZuhHMm1XJcsi8dEeP"
			}
		},
		"./src/reddit/components/AppRouter/index.m.less": function(e, t, s) {
			e.exports = {
				header: "cx1ohrUAq6ARaXTX2u8YN",
				showDeprecated: "_378Md-M6pOqwzEiV3lAwYk",
				showFPR: "_2P-zXcOfggYIWnL3EfXUHP",
				showFpr: "_2P-zXcOfggYIWnL3EfXUHP",
				showM2MTopBanner: "lFh-yJxFAehr1v_mfimce",
				showSuspended: "_3o7sV2ySJ76-f1ktwzclmi",
				inline: "_2aHCVoJEFfwy05xpKqUif2",
				overlayContentWrapper: "_2DJXORCrmcNpPTSq0LqL6i",
				mIsCommentsLightbox: "_26pbaCw90eAC80WRqUfICJ",
				mIsLargeCommentsLightbox: "_2zCdbqYzIDmabv-Dk_ILKk",
				overlayWrapper: "_2mIbM_6nl-2OnOGEbEMRXa",
				main: "_1nxEQl5D2Bx2jxDILRHemb",
				mShowingPaddedPinnedDescriptions: "_3x1dyL19KnZ4kI6i9TlRp4",
				pinnedSubscriptions: "zoWOQnp55WuhEugRSwfw1",
				withUpsell: "_1kFzDy0hQVq-CvguZsCcmV",
				lightboxHeaderWrapper: "_3obgdFz00GvpqpuX8QCsNK",
				mTopBannerAdjustments: "_36-AorT6BJ2gKt8J8gGOU1",
				bottomAdContainer: "_2SL_DAWw1V6pxZysgrdeBe",
				sidebarFooter: "_2AJ0ZwpZtFJ10GdcU0CUew",
				sidebarFooterWithAd: "_1ht98h5gXjzYhFyRZgB0Pv",
				bottomSpacer: "_14-8KVF3BKuTNsLNWcOG2X",
				showEmailCollectionBanner: "_25N7Qd1z8aRQYtQhjEFyTC",
				overlayScrollContainer: "_29IbETWb5VVDcfk_-GumWz",
				mediaIsFullscreen: "_34Bl1Of1839ZWJXR8IY0Ym"
			}
		},
		"./src/reddit/components/AppRouter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/isEqual.js"),
				a = s.n(n),
				r = s("./node_modules/lodash/omit.js"),
				o = s.n(r),
				i = s("./node_modules/lodash/throttle.js"),
				c = s.n(i),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				u = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/react-router/esm/react-router.js"),
				p = s("./node_modules/react-router-redux/es/index.js"),
				b = s("./node_modules/reselect/es/index.js"),
				h = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				v = s("./src/lib/fastdom/index.ts"),
				y = s("./src/lib/FocusTrap/index.ts"),
				C = s("./src/lib/isSimpleClick/index.ts"),
				O = s("./src/reddit/actions/header.ts"),
				E = s("./src/reddit/actions/monthsToMinutes/initHomeFeed.ts"),
				P = s("./src/higherOrderComponents/makeAsync.tsx"),
				j = s("./src/lib/loadWithRetries/index.ts");
			var w = Object(P.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(j.a)(() => s.e("EmailCollectionBanner").then(s.bind(null, "./src/reddit/components/EmailCollection/Banner/index.tsx"))).then(e => e.default),
					LoadingComponent: () => null
				}),
				M = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				S = s("./node_modules/polished/dist/polished.es.js"),
				N = s("./node_modules/react-motion/lib/react-motion.js"),
				I = s("./src/lib/lessComponent.tsx"),
				k = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/config.ts")),
				_ = s("./src/lib/addQueryParams/index.ts"),
				T = s("./src/reddit/actions/preferences.ts"),
				L = s("./src/reddit/constants/accountManager.ts"),
				F = s("./src/reddit/constants/experiments.ts"),
				R = s("./src/reddit/constants/history.ts"),
				A = s("./src/reddit/constants/listings.ts"),
				D = s("./src/reddit/constants/parameters.ts"),
				B = s("./src/reddit/helpers/history/index.ts"),
				H = s("./src/reddit/helpers/monthsToMinutes/index.ts"),
				U = s("./src/reddit/icons/svgs/Close/index.tsx");
			const V = e => e.accountManagerModalData.actionSource;
			var Q = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				W = s("./src/reddit/selectors/meta.ts"),
				q = s("./src/reddit/selectors/monthsToMinutes.ts"),
				G = s("./src/reddit/selectors/telemetry.ts"),
				z = s("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				Z = s.n(z);
			const K = k.a.redditUrl,
				Y = I.a.iframe("IFrame", Z.a),
				X = I.a.button("CloseButton", Z.a),
				J = I.a.wrapped(U.a, "Close", Z.a),
				$ = Object(b.a)((e, t) => t.path, (e, t) => t.uiMode, q.w, q.i, V, W.b, Q.a, (e, t, s, n, a, r, o) => {
					let i = "".concat(k.a.accountManagerOrigin).concat(e);
					if (o && (i = Object(_.a)(i, {
							[F.B]: o,
							uiMode: t
						})), e === L.b.Index || e === L.b.ChangePassword) return i;
					const c = s && n.length > 0;
					if (i = Object(_.a)(i, {
							actionSource: a
						}), c) {
						const e = n.map(e => e.id).join(",");
						i = Object(_.a)(i, {
							subredditIds: e
						})
					}
					return i
				}),
				ee = Object(b.c)({
					accountManagerSrc: $,
					actionSource: V,
					frontpageSignupVariant: Q.a,
					redirectUrl: e => e.accountManagerModalData.redirectUrl
				}),
				te = Object(u.b)(ee, (e, t) => ({
					oniFrameLoaded: (t, s) => {
						e((e, n) => {
							t.contentWindow.postMessage({
								events: Object.assign({}, Object(G.defaults)(n()), {
									actionSource: s
								}),
								type: "eventData"
							}, K)
						})
					},
					onTwoFactorChanged: () => e(Object(T.x)(!1))
				})),
				se = e => {
					let {
						data: t,
						origin: s
					} = e;
					return t && t.success && (t.type === L.a.ChangePassword || t.type === L.a.Close || t.type === L.a.CreateAccount || t.type === L.a.Login || t.type === L.a.Register || t.type === L.a.Resize || t.type === L.a.Subscribe || t.type === L.a.TwoFactorChanged) && s === k.a.accountManagerOrigin
				};
			class ne extends l.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = l.a.createRef(), this.isAccountCreated = !1, this.focusFirstVisibleIframeInput = () => {
						try {
							if (!this.iframeRef.current) return;
							const e = this.iframeRef.current.contentWindow ? this.iframeRef.current.contentWindow.document : this.iframeRef.current.contentDocument;
							if (!e) return;
							const t = e.querySelector('input:not([type="hidden"])');
							t && t.focus()
						} catch (e) {}
					}, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && se(e))
							if (t.type === L.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === L.a.Close) this.close();
						else if (t.type === L.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === L.a.Login) Object(H.b)(), this.onLogIn();
						else if (t.type === L.a.ChangePassword) this.onChangePassword();
						else if (t.type === L.a.Resize) {
							if (t.payload && this.iframeRef.current) {
								const e = t.payload;
								e.height && e.width && (this.iframeRef.current.style.height = "".concat(e.height, "px"), this.iframeRef.current.style.width = "".concat(e.width, "px"))
							}
						} else t.type === L.a.TwoFactorChanged ? this.props.onTwoFactorChanged() : (Object(H.b)(), this.onSignUp(t.numberSubredditsSelected, t.subredditIds))
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(B.a)(R.a.JustLoggedIn, !0), window.location.reload(!0))
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload(!0)
					}, this.onSignUp = (e, t) => {
						let s = "";
						if (this.props.redirectUrl) s = this.props.redirectUrl;
						else if ("/" !== window.location.pathname) s = window.location.pathname;
						else {
							const n = 0;
							s = (e || t && t.length || 0) > n ? A.c[A.b.Home] : A.c[A.b.Popular]
						}
						this.redirectTo(s)
					}, this.redirectTo = e => {
						window.location.replace(Object(_.a)(e, {
							[D.n]: "true"
						}))
					}, this.close = () => {
						this.props.onClose && this.props.onClose();
						try {
							sessionStorage.removeItem("data"), sessionStorage.removeItem("initialData")
						} catch (e) {}
						this.isAccountCreated && this.onSignUp()
					}
				}
				componentDidMount() {
					this.iframeRef.current && (this.iframeRef.current.onload = () => {
						this.props.oniFrameLoaded(this.iframeRef.current, this.props.actionSource), this.focusFirstVisibleIframeInput()
					}), window.addEventListener("message", this.onMessage)
				}
				componentWillUnmount() {
					window.removeEventListener("message", this.onMessage)
				}
				render() {
					const {
						accountManagerSrc: e,
						className: t,
						showCloseButton: s
					} = this.props;
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(Y, {
						className: t,
						innerRef: this.iframeRef,
						src: e
					}), s && l.a.createElement(X, {
						onClick: this.close
					}, l.a.createElement(J, null)))
				}
			}
			var ae = te(ne),
				re = s("./src/reddit/components/TrackingHelper/index.tsx");
			const oe = [],
				ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe;
					return t => Object.assign({}, G.defaults(t), {
						action: "click",
						noun: "exit",
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: "onboarding"
					})
				};
			var ce = s("./src/reddit/i18n/components.tsx"),
				de = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				le = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				ue = s("./src/reddit/components/Carousel/index.tsx"),
				me = s("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				pe = s.n(me);
			const be = I.a.div("Container", pe.a),
				he = I.a.wrapped(ue.b, "Carousel", pe.a),
				ge = I.a.div("Phone", pe.a),
				fe = I.a.img("Frame", pe.a),
				xe = "".concat(k.a.assetPath, "/img/frontpage-signup/android-frame.png"),
				ve = "".concat(k.a.assetPath, "/img/frontpage-signup/iphone-frame.png"),
				ye = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				Ce = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var Oe = e => {
					const {
						className: t
					} = e;
					return l.a.createElement(be, {
						className: t
					}, l.a.createElement(ge, {
						className: pe.a.android
					}, l.a.createElement(he, {
						animationType: ue.a.Fade,
						className: pe.a.android,
						delay: 2500,
						items: ye,
						itemTime: 5e3,
						itemWidth: 240
					}), l.a.createElement(fe, {
						src: xe
					})), l.a.createElement(ge, {
						className: pe.a.iphone
					}, l.a.createElement(he, {
						animationType: ue.a.Fade,
						className: pe.a.iphone,
						items: Ce,
						itemTime: 5e3,
						itemWidth: 232
					}), l.a.createElement(fe, {
						src: ve
					})))
				},
				Ee = s("./src/reddit/i18n/utils.ts"),
				Pe = s("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				je = s.n(Pe);
			const we = I.a.div("Container", je.a),
				Me = I.a.span("Disclaimer", je.a),
				Se = I.a.a("Link", je.a);
			var Ne = e => l.a.createElement(we, {
					className: e.className
				}, l.a.createElement(Se, {
					href: "https://about.reddit.com"
				}, Object(Ee.c)("about")), l.a.createElement(Se, {
					href: "https://www.redditinc.com/advertising"
				}, Object(Ee.c)("advertise")), l.a.createElement(Se, {
					href: "http://www.redditblog.com/"
				}, Object(Ee.c)("blog")), l.a.createElement(Se, {
					href: "https://about.reddit.com/careers/"
				}, Object(Ee.c)("careers")), l.a.createElement(Se, {
					href: "https://www.reddithelp.com"
				}, Object(Ee.c)("help")), l.a.createElement(Se, {
					href: "https://about.reddit.com/press/"
				}, Object(Ee.c)("press")), l.a.createElement(Se, {
					href: "https://www.reddit.com/mobile/download"
				}, Object(Ee.c)("The Reddit App")), l.a.createElement(Se, {
					href: "https://www.reddit.com/coins"
				}, Object(Ee.c)("Reddit coins")), l.a.createElement(Se, {
					href: "http://redditgifts.com/"
				}, Object(Ee.c)("Reddit gifts")), l.a.createElement(Se, {
					href: "https://www.reddit.com/premium"
				}, Object(Ee.c)("Reddit premium")), l.a.createElement(Se, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, Object(Ee.c)("User agreement")), l.a.createElement(Se, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, Object(Ee.c)("Mod policy")), l.a.createElement(Me, null, Object(Ee.c)("© 2019 Reddit, Inc. All rights reserved"))),
				Ie = s("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				ke = s.n(Ie);
			const _e = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				Te = I.a.div("Container", ke.a),
				Le = I.a.wrapped(ae, "IFrame", ke.a),
				Fe = I.a.wrapped(Oe, "Images", ke.a),
				Re = I.a.wrapped(Ne, "Links", ke.a),
				Ae = I.a.div("MainContent", ke.a),
				De = I.a.div("MainContentColumn", ke.a),
				Be = I.a.button("NotReady", ke.a),
				He = I.a.span("NotReadyText", ke.a),
				Ue = I.a.wrapped(de.a, "NotReadyIcon", ke.a),
				Ve = Object(f.a)(e => {
					const {
						className: t,
						containerRef: s,
						frontpageSignupVariant: n,
						onCloseClick: a,
						onVisibilityChange: r
					} = e, o = Object(le.a)(e).bodyText;
					return l.a.createElement(M.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: r
					}, l.a.createElement(Te, {
						className: t,
						innerRef: s
					}, l.a.createElement(Ae, null, l.a.createElement(De, null, l.a.createElement(Fe, null, "Images Placeholder")), l.a.createElement(De, null, l.a.createElement(Le, {
						className: Object(h.a)({
							[ke.a.fields]: Object(Q.b)(n)
						}),
						path: L.b.Register,
						uiMode: L.c.Embed
					}))), l.a.createElement(Be, {
						onClick: a,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(S.m)(.8, o)
						}
					}, l.a.createElement(He, null, l.a.createElement(ce.c, null, "Not ready to sign up yet?")), l.a.createElement(Ue, null)), l.a.createElement(Re, null)))
				});
			class Qe extends l.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class We extends l.a.Component {
				constructor() {
					super(...arguments), this.containerRef = l.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(ie()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = "-".concat(this.containerRef.current.offsetHeight, "px"), this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return l.a.createElement(Qe, {
							scrollTo: t
						})
					}
				}
				render() {
					const {
						className: e,
						frontpageSignupVariant: t
					} = this.props, {
						isClosed: s
					} = this.state, n = s && this.containerRef.current ? this.containerRef.current.offsetHeight : 0;
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(Ve, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), l.a.createElement(N.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(N.spring)(n, _e)
						}
					}, this.renderScroller))
				}
			}
			var qe = Object(re.b)(We),
				Ge = s("./node_modules/js-cookie/src/js.cookie.js"),
				ze = s.n(Ge),
				Ze = s("./src/lib/localStorageAvailable/index.ts"),
				Ke = s("./src/reddit/actions/modal.ts"),
				Ye = Object(P.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("BadgePurchaseModal").then(s.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				Xe = s("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx");
			var Je = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumPurchaseModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/PurchaseModal/index.tsx")).then(e => e.default)
			});
			var $e = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsSupportPaymentModal")]).then(s.bind(null, "./src/reddit/components/Economics/Support/PaymentModal/index.tsx")).then(e => e.default)
			});
			const et = () => null;
			var tt = Object(P.a)({
					ErrorComponent: et,
					getComponent: () => Object(j.a)(() => s.e("ManageChatRoomsModal").then(s.bind(null, "./src/reddit/components/ManageChatRoomsModal/_ManageChatRoomsModal.tsx"))).then(e => e.default),
					LoadingComponent: et
				}),
				st = s("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var nt = Object(P.a)({
				getComponent: () => Object(j.a)(() => s.e("NotificationsPrePromptLoader").then(s.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const at = () => null;
			var rt = Object(P.a)({
					ErrorComponent: at,
					getComponent: () => Object(j.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~ModerationPages~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: at
				}),
				ot = s("./src/higherOrderComponents/asModal/index.tsx"),
				it = s("./src/reddit/actions/structuredStyles/index.ts"),
				ct = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				dt = s("./src/reddit/constants/modals.ts"),
				lt = s("./src/reddit/controls/TextButton/index.tsx"),
				ut = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const mt = Object(u.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					closeModal: () => {
						e(Object(Ke.i)(dt.a.BLADE_NIGHTMODE)), e(Object(it.f)())
					},
					openBlade: () => {
						e(Object(it.e)(s))
					}
				}
			});
			var pt = Object(ot.a)(mt(e => l.a.createElement(ct.c, null, l.a.createElement(ct.g, null, l.a.createElement(ut.a, null, l.a.createElement(ct.n, null, l.a.createElement(ce.c, null, "Turning off Night Mode")), l.a.createElement(lt.a, {
					onClick: e.closeModal
				}, l.a.createElement(ct.b, null)))), l.a.createElement(ct.j, null, l.a.createElement(ct.l, null, l.a.createElement(ce.c, null, "In order to continue styling your community, Night Mode must be turned off."))), l.a.createElement(ct.e, null, l.a.createElement(ct.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, l.a.createElement(ce.c, null, "Cancel")), l.a.createElement(ct.o, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, l.a.createElement(ce.c, null, "Continue")))))),
				bt = s("./src/reddit/actions/authorFlair.ts"),
				ht = s("./src/reddit/actions/userFlair.ts"),
				gt = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				ft = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				xt = s("./src/reddit/components/FlairPreview/index.tsx"),
				vt = s("./src/reddit/components/FlairSearch/index.tsx"),
				yt = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				Ct = s("./src/reddit/controls/Button/index.tsx"),
				Ot = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				Et = s("./src/reddit/layout/row/Inline/index.tsx"),
				Pt = s("./src/reddit/models/Flair/index.ts"),
				jt = s("./src/reddit/models/User/index.ts"),
				wt = s("./src/reddit/selectors/authorFlair.ts"),
				Mt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				St = s("./src/reddit/selectors/user.ts"),
				Nt = s("./src/reddit/selectors/userFlair.ts"),
				It = s("./src/reddit/components/UserFlairPicker/index.m.less"),
				kt = s.n(It);
			const _t = e => e.inContextAuthor && e.currentUser && Object(jt.f)(e.currentUser) === e.inContextAuthor.username,
				Tt = e => e.authorFlair || _t(e) && e.userFlairData.applied || null,
				Lt = I.a.wrapped(Et.a, "Section", kt.a),
				Ft = I.a.div("CheckboxText", kt.a);
			class Rt extends l.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(G.subredditById)(t, this.props.subredditId)
					})), this.setSelectedFlair = e => this.setState({
						previewFlair: e
					}), this.onApply = () => {
						const {
							props: e,
							state: t
						} = this, s = t.previewFlair ? t.previewFlair.templateId : void 0;
						e.activeFlairChanged(t.previewFlair, s, t.showFlair, e.inContextAuthor), e.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.onToggleShowFlair = () => {
						this.setState({
							showFlair: !this.state.showFlair
						})
					}, this.state = {
						previewFlair: Tt(e),
						showFlair: e.userFlairData.displaySettings.isUserEnabled
					}
				}
				canSave() {
					const {
						userFlairData: e
					} = this.props, {
						previewFlair: t
					} = this.state, {
						templates: s,
						permissions: n
					} = e, {
						isUserEnabled: a
					} = e.displaySettings, r = this.state.showFlair !== a, o = Tt(this.props);
					if (!n.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(yt.b)(s, t, o);
					return !(i || c !== yt.a.NoChanges || !r) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: s,
						subredditId: n
					} = e, a = s.permissions.canUserChange, r = s.permissions.canUserChange, {
						templates: o,
						templateIds: i
					} = s, c = this.canSave(), d = _t(e);
					return l.a.createElement(ft.a, null, l.a.createElement(gt.a, {
						onClosePressed: e.closeModal,
						title: Object(Ee.c)("Select your community flair")
					}), l.a.createElement(xt.a, {
						flair: t.previewFlair,
						flairTemplateType: Pt.d.UserFlair,
						placeholderText: Object(Ee.c)("u/username")
					}), r && l.a.createElement(vt.a, {
						flair: t.previewFlair,
						flairTemplateType: Pt.d.UserFlair,
						subredditId: n,
						templates: o,
						templateIds: i,
						onChange: this.setSelectedFlair
					}), d && l.a.createElement(Lt, null, l.a.createElement(Ot.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: l.a.createElement(Ft, null, l.a.createElement(ce.c, null, "Show my user flair on this community"))
					})), l.a.createElement("div", {
						className: kt.a.buttonsRow
					}, l.a.createElement(Ct.f, {
						disabled: !c,
						onClick: this.onApply
					}, Object(Ee.c)("Apply")), a && l.a.createElement(Ct.i, {
						className: kt.a.clearButton,
						onClick: this.onClear
					}, Object(Ee.c)("Clear Flair"))))
				}
			}
			const At = Object(u.b)(() => Object(b.c)({
				authorFlair: wt.b,
				currentUser: St.i,
				inContextAuthor: wt.c,
				isMod: (e, t) => !!Object(Mt.j)(e, t),
				userFlairData: Nt.c
			}), (e, t) => ({
				activeFlairChanged: (s, n, a, r) => e(Object(ht.o)(s, n, a, r.username, t.subredditId)),
				closeModal: () => e(Object(bt.b)({
					username: null,
					subredditId: null
				}))
			}))(Rt);
			var Dt = Object(ot.a)(Object(re.b)(At)),
				Bt = s("./src/reddit/selectors/activeModalId.ts"),
				Ht = s("./src/reddit/selectors/notificationPrefs.ts"),
				Ut = s("./src/reddit/selectors/platform.ts"),
				Vt = s("./src/reddit/selectors/removalReasons.ts"),
				Qt = s("./src/reddit/selectors/subredditModeration.ts"),
				Wt = s("./src/reddit/constants/cookie.ts"),
				qt = s("./src/reddit/featureFlags/index.ts"),
				Gt = s("./src/reddit/helpers/localStorage/index.ts"),
				zt = s("./src/reddit/helpers/toggleBodyScroll/index.ts");

			function Zt() {
				return (Zt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Kt = Object(b.c)({
				anyModalIsOpen: e => !!e.activeModalId,
				authorContext: wt.c,
				badgePurchaseModalIsOpen: Object(Bt.b)(dt.a.BADGE_PURCHASE),
				banContext: Qt.f,
				banModalIsOpen: Object(Bt.b)(dt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(Bt.b)(dt.a.BLADE_NIGHTMODE),
				chatroomSettingsModalIsOpen: Object(Bt.b)(dt.a.SUBREDDIT_CHAT_SETTINGS),
				createChatroomModalIsOpen: Object(Bt.b)(dt.a.CREATE_SUBREDDIT_CHAT),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				currentPaymentTarget: e => e.economics.currentPaymentTarget,
				currentSubredditPremiumCorrelationId: e => e.economics.currentModalArgs ? e.economics.currentModalArgs.correlationId : void 0,
				economicsSupportPaymentModalIsOpen: Object(Bt.b)(dt.a.ECONOMY_SUPPORT_MODAL),
				editChatroomModalIsOpen: Object(Bt.b)(dt.a.EDIT_SUBREDDIT_CHAT),
				deleteChatroomModalIsOpen: Object(Bt.b)(dt.a.DELETE_SUBREDDIT_CHAT),
				introModalFeatureEnabled: e => qt.d.introModal(e),
				isOverlayOpen: Ut.i,
				manageChatroomModalIsOpen: Object(Bt.b)(dt.a.MANAGE_SUBREDDIT_CHAT),
				moderatorPermissions: e => {
					const t = Object(Ut.d)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Qt.C,
				muteModalIsOpen: Object(Bt.b)(dt.a.MUTE_USER),
				notificationsPrePromptIsOpen: Ht.c,
				removalReasonContext: Vt.b,
				removalReasonModalIsOpen: Object(Bt.b)(dt.a.ADD_REMOVAL_REASON),
				subredditId: Ut.d,
				subredditPremiumPurchaseModalOpen: Object(Bt.b)(dt.a.SUBREDDIT_PREMIUM_PURCHASE_MODAL),
				userFlairModalIsOpen: Object(Bt.b)(dt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: St.v,
				userInRedesignBeta: St.D,
				userIsLoggedIn: St.K,
				userIsMod: St.L,
				userIsNew: St.M
			});
			class Yt extends l.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Ze.a)()) return; {
						const e = ze.a.get(Wt.a);
						e && ze.a.remove(Wt.a, {
							domain: k.a.cookieDomain
						});
						const t = Object(Gt.r)(dt.a.ALPHA_CONSUMER);
						t && Object(Gt.C)(dt.a.ALPHA_CONSUMER), (e || t) && Object(Gt.T)(dt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, s = Object(Gt.r)(dt.a.REDESIGN_MODAL);
					!e && s ? t() : e && !s && Object(Gt.T)(dt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), this.props.anyModalIsOpen ? setTimeout(() => Object(zt.a)(), 500) : setTimeout(() => Object(zt.b)(), 500)
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: s,
						banModalIsOpen: n,
						bladeNightmodeModalIsOpen: a,
						chatroomSettingsModalIsOpen: r,
						createChatroomModalIsOpen: o,
						currentBadgePurchase: i,
						currentPaymentTarget: c,
						currentSubredditPremiumCorrelationId: u,
						economicsSupportPaymentModalIsOpen: m,
						editChatroomModalIsOpen: p,
						deleteChatroomModalIsOpen: b,
						manageChatroomModalIsOpen: h,
						muteContext: g,
						muteModalIsOpen: f,
						notificationsPrePromptIsOpen: x,
						removalReasonContext: v,
						removalReasonModalIsOpen: y,
						sendEvent: C,
						subredditId: O,
						subredditPremiumPurchaseModalOpen: E,
						toggleBanModal: P,
						toggleMuteModal: j,
						toggleRemovalReasonsModal: w,
						userFlairModalIsOpen: M
					} = this.props, S = (e, t, s) => n => () => C(a => ({
						source: e,
						action: "click",
						noun: n,
						comment: s && Object(G.comment)(a, s),
						post: s && Object(G.post)(a, s),
						screen: Object(G.screen)(a),
						subreddit: Object(G.subredditById)(a, t)
					}));
					return l.a.createElement(d.Fragment, null, n && s && l.a.createElement(Xe.a, {
						contextId: s.contextId,
						subredditId: s.subredditId,
						toggleModal: P,
						trackAddEvent: S("banned", s.subredditId, s.contextId)("add_in_context"),
						trackEventWithName: S("banned", s.subredditId, s.contextId),
						username: s.username
					}), f && g && l.a.createElement(st.a, {
						contextId: g.contextId,
						subredditId: g.subredditId,
						toggleModal: j,
						trackAddEvent: S("muted", g.subredditId, g.contextId)("add_in_context"),
						username: g.username
					}), (o || h || b || p || r) && O && l.a.createElement(tt, {
						subredditId: O,
						withOverlay: !0
					}), y && v && l.a.createElement(rt, {
						itemIds: v.itemIds,
						subredditId: v.subredditId,
						toggleModal: w,
						trackClick: S("removal_reasons", v.subredditId, 1 === v.itemIds.length ? v.itemIds[0] : void 0)
					}), a && O && l.a.createElement(pt, {
						subredditId: O
					}), M && e && e.subredditId && l.a.createElement(Dt, {
						subredditId: e.subredditId
					}), t && i && l.a.createElement(Ye, {
						withOverlay: !0,
						productId: i
					}), x && l.a.createElement(nt, null), m && c && l.a.createElement($e, Zt({
						withOverlay: !0
					}, c)), E && l.a.createElement(Je, {
						ignoreDefaultFocus: !0,
						withOverlay: !0,
						correlationId: u
					}))
				}
			}
			var Xt = Object(u.b)(Kt, e => ({
				markRedesignModalAsClosed: () => e(Object(Ke.j)()),
				toggleBanModal: () => e(Object(Ke.i)(dt.a.BAN_USER)),
				toggleBladeNightmodeModal: () => e(Object(Ke.i)(dt.a.BLADE_NIGHTMODE)),
				toggleMuteModal: () => e(Object(Ke.i)(dt.a.MUTE_USER)),
				toggleRemovalReasonsModal: () => e(Object(Ke.i)(dt.a.ADD_REMOVAL_REASON))
			}))(Object(re.b)(Yt));
			const Jt = {},
				$t = () => null;

			function es(e, t) {
				if (e in Jt) throw new Error("Modal with id ".concat(e, " already registered!"));
				Jt[e] = t
			}
			var ts = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				ss = s("./src/reddit/components/AccountManagerModal/index.m.less"),
				ns = s.n(ss);
			const as = I.a.div("Overlay", ns.a),
				rs = I.a.div("IframeContainer", ns.a),
				os = Object(b.c)({
					frontpageSignupVariant: Q.a
				}),
				is = {
					[L.b.ChangePassword]: dt.a.CHANGE_PASSWORD_MODAL_ID,
					[L.b.Index]: dt.a.LOGIN_MODAL_ID,
					[L.b.Register]: dt.a.REGISTER_MODAL_ID,
					[L.b.EnableTwoFactor]: dt.a.ENABLE_TWO_FACTOR,
					[L.b.DisableTwoFactor]: dt.a.DISABLE_TWO_FACTOR,
					[L.b.TwoFactorBackupCodes]: dt.a.TWO_FACTOR_BACKUP_CODES
				};
			class cs extends l.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === L.b.Register && Object(Q.f)(this.props.frontpageSignupVariant) && ts.a.throttleFeature(F.B), this.props.sendEvent(ie(this.subscriptions))
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						path: t
					} = this.props, s = Object(Q.c)(e) || Object(Q.d)(e);
					return l.a.createElement(as, null, l.a.createElement(rs, {
						className: s && ns.a.small
					}, l.a.createElement(ae, {
						onClose: this.closeModal,
						onSubscriptionsChanged: this.updateSubscriptions,
						path: t,
						showCloseButton: !s
					})))
				}
			}
			const ds = Object(u.b)(os, (e, t) => ({
				closeModal: t => {
					e(Object(Ke.g)(is[t]))
				}
			}))(Object(re.b)(cs));
			es(dt.a.CHANGE_PASSWORD_MODAL_ID, e => l.a.createElement(ds, {
				path: L.b.ChangePassword
			})), es(dt.a.LOGIN_MODAL_ID, e => l.a.createElement(ds, {
				path: L.b.Index
			})), es(dt.a.ENABLE_TWO_FACTOR, e => l.a.createElement(ds, {
				path: L.b.EnableTwoFactor
			})), es(dt.a.DISABLE_TWO_FACTOR, e => l.a.createElement(ds, {
				path: L.b.DisableTwoFactor
			})), es(dt.a.TWO_FACTOR_BACKUP_CODES, e => l.a.createElement(ds, {
				path: L.b.TwoFactorBackupCodes
			})), es(dt.a.REGISTER_MODAL_ID, e => l.a.createElement(ds, {
				path: L.b.Register
			}));
			const ls = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("BadgePickerModal").then(s.bind(null, "./src/reddit/components/Badges/PickerModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.BADGE_PICKER, e => l.a.createElement(ls, {
				withOverlay: !0
			}));
			const us = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestPendingModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.CONTRIBUTOR_REQUEST_PENDING, e => l.a.createElement(us, {
				withOverlay: !0
			}));
			const ms = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestRequestModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.CONTRIBUTOR_REQUEST, e => l.a.createElement(ms, {
				withOverlay: !0
			}));
			const ps = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~EconHelperActions~SubredditPremiumBadgeManagement"), s.e("SubredditPremiumBadgeManagement")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => l.a.createElement(ps, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const bs = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("SubredditPremiumUploadModal")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => l.a.createElement(bs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const hs = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("HarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.HARBERGER_TAX_BANNER_MANAGE, e => l.a.createElement(hs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const gs = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("HarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.HARBERGER_TAX_BANNER_PURCHASE, e => l.a.createElement(gs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const fs = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("CryptoHarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => l.a.createElement(fs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const xs = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("CryptoHarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => l.a.createElement(xs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const vs = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceOptOutModal").then(s.bind(null, "./src/reddit/components/Governance/OptOutModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.GOVERNANCE_OPT_OUT, e => l.a.createElement(vs, null));
			const ys = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("GovernanceReleaseNotesModal")]).then(s.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.GOVERNANCE_RELEASE_NOTES, e => l.a.createElement(ys, {
				withOverlay: !0
			}));
			const Cs = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("GovernanceTransferPointsModal~MembershipPaywallPage"), s.e("GovernanceTransferPointsModal")]).then(s.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.TRANSFER_POINTS, e => l.a.createElement(Cs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Os = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistration").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			es(dt.a.WALLET_REGISTRATION_MODAL, e => l.a.createElement(Os, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Es = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditAddSubredditModal").then(s.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.MULTIREDDIT_ADD_SUBREDDIT, e => l.a.createElement(Es, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ps = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditCreateModal").then(s.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.MULTIREDDIT_CREATE, e => l.a.createElement(Ps, {
				onOverlayClick: e,
				withOverlay: !0
			})), es(dt.a.MULTIREDDIT_DUPLICATE, e => l.a.createElement(Ps, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const js = Object(P.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditEditModal").then(s.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			es(dt.a.MULTIREDDIT_EDIT, e => l.a.createElement(js, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ws = Object(P.a)({
				getComponent: () => Object(j.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("PainterModalLoader")]).then(s.bind(null, "./src/reddit/components/PainterModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			es(dt.a.PAINTER_MODAL, e => l.a.createElement(ws, {
				withOverlay: !0,
				toggleModal: e
			}));
			const Ms = () => null,
				Ss = Object(P.a)({
					ErrorComponent: Ms,
					getComponent: () => Object(j.a)(() => s.e("GlobalModalContainer").then(s.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Ms
				});
			es(dt.a.PINNED_POSTS_LIMIT_REACHED, e => l.a.createElement(Ss, null));
			var Ns = s("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Is = s.n(Ns);
			const {
				fbt: ks
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _s = I.a.h2("ColumnLabel", Is.a), Ts = I.a.wrapped(Et.a, "ColumnWrapper", Is.a), Ls = I.a.div("Column", Is.a), Fs = I.a.div("Description", Is.a), Rs = I.a.div("Key", Is.a), As = I.a.wrapped(ct.j, "ModalMain", Is.a), Ds = I.a.wrapped(ct.c, "ModalBody", Is.a), Bs = I.a.wrapped(Ct.f, "PrimaryButton", Is.a), Hs = I.a.wrapped(lt.a, "TextButton", Is.a), Us = Object(u.b)(null, e => ({
				closeModal: () => e(Object(Ke.i)(dt.a.KEYBOARD_SHORTCUTS))
			})), Vs = I.a.wrapped(Object(ot.a)(Us(e => l.a.createElement(Ds, {
				onClick: e => e.stopPropagation()
			}, l.a.createElement(ct.g, null, l.a.createElement(ut.a, null, l.a.createElement(ct.n, null, ks._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), l.a.createElement(Hs, {
				onClick: e.closeModal
			}, l.a.createElement(ct.b, null)))), l.a.createElement(As, null, l.a.createElement(Ts, null, l.a.createElement(Ls, null, l.a.createElement(Et.a, null, l.a.createElement(_s, null, ks._("Navigation", null, {
				hk: "3zSWEe"
			}))), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), l.a.createElement(Rs, null, "Shift + ?")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Next post or comment", null, {
				hk: "1m8s9z"
			})), l.a.createElement(Rs, null, "J")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), l.a.createElement(Rs, null, "K")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), l.a.createElement(Rs, null, "N")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), l.a.createElement(Rs, null, "P")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Open post", null, {
				hk: "2wD7mh"
			})), l.a.createElement(Rs, null, "Enter")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Open/close expando", null, {
				hk: "1yDst0"
			})), l.a.createElement(Rs, null, "X")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Go to post link", null, {
				hk: "c0TNr"
			})), l.a.createElement(Rs, null, "L"))), l.a.createElement(Ls, null, l.a.createElement(Et.a, null, l.a.createElement(_s, null, ks._("Action", null, {
				hk: "3QI6pT"
			}))), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Upvote", null, {
				hk: "5i9NP"
			})), l.a.createElement(Rs, null, "A")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Downvote", null, {
				hk: "1ef3YP"
			})), l.a.createElement(Rs, null, "Z")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("New post", null, {
				hk: "4dtNWf"
			})), l.a.createElement(Rs, null, "C")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Reply to comment", null, {
				hk: "G8AbT"
			})), l.a.createElement(Rs, null, "R")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Submit comment/post", null, {
				hk: "13agk7"
			})), l.a.createElement(Rs, null, "Ctrl + Enter")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Save", null, {
				hk: "3Dtwo5"
			})), l.a.createElement(Rs, null, "S")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Hide", null, {
				hk: "2Dn9GF"
			})), l.a.createElement(Rs, null, "H")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Open navigation", null, {
				hk: "QdGe2"
			})), l.a.createElement(Rs, null, "Q")), l.a.createElement(Et.a, null, l.a.createElement(Fs, null, ks._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), l.a.createElement(Rs, null, "Enter"))))), l.a.createElement(ct.e, null, l.a.createElement(Bs, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, ks._("Close", null, {
				hk: "2R1HDp"
			})))))), "ConnectedModal", Is.a);
			es(dt.a.KEYBOARD_SHORTCUTS, e => l.a.createElement(Vs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Qs = Object(P.a)({
				getComponent: () => Object(j.a)(() => s.e("SpezModalLoader").then(s.bind(null, "./src/reddit/components/SpezModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			es(dt.a.SPEZ_MODAL, e => l.a.createElement(Qs, {
				withOverlay: !0,
				toggleModal: e
			}));
			const Ws = Object(b.c)({
					allowNavigationCallback: Ut.a
				}),
				qs = Object(u.b)(Ws, e => ({
					closeModal: () => e(Object(Ke.i)(dt.a.BLADE_UNSAVED_CHANGES)),
					closeBlade: () => e(Object(it.a)())
				}));
			class Gs extends l.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return l.a.createElement(ct.c, null, l.a.createElement(ct.g, null, l.a.createElement(ut.a, null, l.a.createElement(ct.n, null, l.a.createElement(ce.c, null, "Discard unsaved changes before leaving?")), l.a.createElement(lt.a, {
						onClick: this.onCancelClick
					}, l.a.createElement(ct.b, null)))), l.a.createElement(ct.j, null, l.a.createElement(ct.m, null, l.a.createElement(ce.c, null, "You have made some changes to your community, do you wish to leave this menu without saving?"))), l.a.createElement(ct.e, null, l.a.createElement(ct.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, l.a.createElement(ce.c, null, "Cancel")), l.a.createElement(ct.o, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, l.a.createElement(ce.c, null, "Discard"))))
				}
			}
			const zs = Object(ot.a)(qs(Gs));
			es(dt.a.BLADE_UNSAVED_CHANGES, e => l.a.createElement(zs, {
				withOverlay: !0
			}));
			const Zs = Object(b.c)({
					activeModalId: Bt.a
				}),
				Ks = Object(u.b)(Zs, e => ({
					toggleModal: t => e(Object(Ke.i)(t))
				})),
				Ys = 500,
				Xs = () => {};
			class Js extends l.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					this.props.activeModalId ? setTimeout(() => Object(zt.a)(), Ys) : setTimeout(() => Object(zt.b)(), Ys)
				}
				componentWillUnmount() {
					Object(zt.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					var t;
					return ((t = e) && t in Jt ? Jt[t] : $t)(e ? this.toggleModal : Xs)
				}
			}
			var $s = Ks(Js),
				en = (s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				tn = s("./src/reddit/actions/page.ts"),
				sn = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/app/strings/index.ts")),
				nn = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				an = s("./src/reddit/components/ProfileIcon/index.m.less"),
				rn = s.n(an);

			function on(e) {
				return l.a.createElement("img", {
					alt: Object(Ee.c)("Profile icon"),
					src: e.iconUrl || "".concat(k.a.assetPath, "/img/placeholder_gradient_light-280.png"),
					className: Object(h.a)(rn.a.img, e.className)
				})
			}
			var cn = s("./src/reddit/components/SEOTitle/index.tsx"),
				dn = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ln = s("./src/reddit/icons/svgs/All/index.tsx");

			function un(e) {
				return l.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, l.a.createElement("g", null, l.a.createElement("path", {
					d: "M14,4V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V13a1,1,0,0,0,1,1H4V6A2,2,0,0,1,6,4Z"
				}), l.a.createElement("path", {
					d: "M16,5H6A1,1,0,0,0,5,6V16a1,1,0,0,0,1,1h4a5,5,0,0,1-1-3,5,5,0,0,1,5-5,5,5,0,0,1,3,1V6A1,1,0,0,0,16,5Z"
				}), l.a.createElement("path", {
					d: "M19.21,17.79,17.43,16A4,4,0,0,0,18,14a4,4,0,1,0-4,4,4,4,0,0,0,2-.57l1.77,1.77a1,1,0,0,0,1.41-1.41ZM14,16a2,2,0,1,1,2-2A2,2,0,0,1,14,16Z"
				})))
			}
			var mn = s("./src/reddit/icons/svgs/Coin/index.tsx"),
				pn = s("./src/reddit/icons/svgs/Envelope/index.tsx");
			var bn = e => l.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 14 14",
					version: "1.1"
				}, l.a.createElement("path", {
					d: "M4.863 8.963a1.6 1.6 0 0 0 .586.585L3.332 10.77a.804.804 0 0 1-.607.079.8.8 0 0 1-.486-.372L.708 7.824A.8.8 0 0 1 1 6.732l2.12-1.224c-.001.273.065.55.21.802l1.533 2.653zm8.43-3.983a.8.8 0 0 1-.372 1.133L6.57 8.896a.8.8 0 0 1-1.014-.333L4.025 5.91a.8.8 0 0 1 .218-1.045L9.829.755A.799.799 0 0 1 10.995 1l2.298 3.98zM7.666 9.756l1.6 2.4a.8.8 0 0 1-1.331.888L7 11.642l-.934 1.402a.8.8 0 0 1-1.331-.887l1.6-2.4c.296-.446 1.034-.446 1.33 0z",
					fill: "currentColor",
					fillRule: "evenodd"
				})),
				hn = s("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				gn = s("./src/reddit/constants/colors.ts"),
				fn = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				},
				xn = Object(f.a)(e => {
					var {
						className: t,
						isBadged: s
					} = e, n = fn(e, ["className", "isBadged"]);
					return l.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20",
						xmlns: "http://www.w3.org/2000/svg"
					}, l.a.createElement("path", {
						d: "M15,9.9V8A5,5,0,0,0,5,8V9.9c-2.41.45-4,1.24-4,2.13,0,1.41,4,2.56,9,2.56s9-1.15,9-2.56C19,11.14,17.41,10.35,15,9.9Zm-2,.94a9.62,9.62,0,0,1-3,.39,9.62,9.62,0,0,1-3-.39V8a3,3,0,0,1,6,0Z"
					}), l.a.createElement("path", {
						d: "M2.74,14.6l3,2.12a7.39,7.39,0,0,0,8.6,0l3-2.12a24.63,24.63,0,0,1-7.26,1A24.63,24.63,0,0,1,2.74,14.6Z"
					}), l.a.createElement("circle", {
						cx: "16",
						cy: "4",
						r: "4",
						fill: s ? Object(le.a)(n).body : "none"
					}), l.a.createElement("circle", {
						cx: "16",
						cy: "4",
						r: "3",
						fill: s ? gn.a.orangered : "none"
					}))
				}),
				vn = s("./src/reddit/icons/svgs/Moderate/index.tsx");

			function yn() {
				return (yn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Cn, On = e => l.a.createElement("svg", yn({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), l.a.createElement("path", {
					d: "M17,5H6A1,1,0,0,0,5,6V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V6A1,1,0,0,0,17,5ZM7,7.5A.5.5,0,0,1,7.5,7h3a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5ZM15.5,16h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5H13a.5.5,0,0,1,0-1h2.5a.5.5,0,0,1,0,1Z"
				}), l.a.createElement("path", {
					d: "M6,4h9.47a2.09,2.09,0,0,1,.51.07V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H4.09A2.09,2.09,0,0,1,4,15.49V6A2,2,0,0,1,6,4Z"
				})),
				En = s("./src/reddit/icons/svgs/Popular/index.tsx"),
				Pn = s("./src/reddit/icons/svgs/Post/index.tsx"),
				jn = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				wn = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				Mn = s("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Sn = s.n(Mn);
			! function(e) {
				e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.Explore = "Explore", e.GlobalSearch = "GlobalSearch", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModMailBeta = "ModMailBeta", e.ModQueue = "ModQueue", e.Multi = "Multi", e.Popular = "Popular", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(Cn || (Cn = {}));
			const Nn = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [s, n] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return l.a.createElement(l.a.Fragment, null, s && "".concat(s, "/"), n && l.a.createElement(cn.b, {
					type: cn.a.HeaderSelector
				}, n))
			};
			var In = s("./src/lib/objectSelector/index.ts"),
				kn = s("./src/reddit/constants/wiki.ts"),
				_n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Tn = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				Ln = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Fn = s("./src/reddit/selectors/subreddit.ts"),
				Rn = s("./src/reddit/selectors/topic.ts");
			var An = Object(In.a)((e, t) => {
					let {
						pageLayer: s
					} = t;
					const n = !!e.user.account,
						a = Object(_n.T)(s);
					switch (a) {
						case "index":
						case "listing": {
							const t = Object(q.g)(e) && Object(q.n)(e);
							return n || t ? {
								type: Cn.Home
							} : {
								type: Cn.Popular
							}
						}
						case "modListing":
							return {
								type: Cn.ModListing
							};
						case "modQueuePages":
							return {
								type: Cn.ModQueue
							};
						case "postCreation":
							return {
								type: Cn.CreatePost
							};
						case "postDraft":
							return {
								type: Cn.ViewDraft
							};
						case "subredditCreation":
							return {
								type: Cn.SubredditCreation
							};
						case "coins":
							return {
								type: Cn.Coins
							};
						case "premium":
							return {
								type: Cn.Premium
							};
						case "appeal":
							return {
								type: Cn.Appeal
							};
						case "explore":
							return {
								type: Cn.Explore
							};
						case "report":
							return {
								type: Cn.Report
							};
						case "userDataRequest":
							return {
								type: Cn.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: Cn.DailyCharts
							};
						case "topic": {
							const t = Object(_n.s)(s),
								n = t && Object(Rn.c)(e, t, !0);
							if (n) return {
								type: Cn.Topic,
								model: n
							}
						}
					}
					const r = e.user.account;
					if (r) switch (a) {
						case "inboxPages":
							return {
								type: Cn.Inbox, model: r
							};
						case "settings":
							return {
								type: Cn.Settings, model: r
							}
					}
					const o = Object(_n.N)(e, {
						pageLayer: s
					});
					if ("all" === o) return {
						type: Cn.All
					};
					if ("popular" === o) return {
						type: Cn.Popular
					};
					const i = Object(_n.q)(e, {
						pageLayer: s
					});
					if (i) return "searchResults" === a ? {
						type: Cn.CommunitySearch,
						model: i
					} : {
						type: Cn.Community,
						model: i
					};
					const c = Object(_n.d)(e, {
						pageLayer: s
					});
					if (c) return {
						type: Cn.Multi,
						model: c
					};
					if (Object(_n.l)(e, {
							pageLayer: s
						}) && Object(Tn.a)(e, {
							expEventOverride: !1
						})) return {
						type: Cn.Explore
					};
					const d = Object(_n.j)(e, {
						pageLayer: s
					});
					if (d) return {
						type: Cn.UserProfile,
						model: d
					};
					const l = Object(_n.h)(s);
					if (l) return {
						type: Cn.UserProfileName,
						name: "u/".concat(l)
					};
					if (a && "searchResults" === a) return {
						type: Cn.GlobalSearch
					};
					if ("subredditWiki" === a) {
						const t = Object(_n.n)(e, {
								pageLayer: s
							}) || kn.e,
							n = Object(Fn.B)(e, {
								subredditName: t
							});
						if (n) return {
							type: Cn.Community,
							model: n
						}
					}
					return "rpan" === a && Object(Ln.a)(e) ? {
						type: Cn.PublicAccessNetwork
					} : {
						type: Cn.Unknown
					}
				}),
				Dn = (s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				Bn = s("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less"),
				Hn = s.n(Bn);

			function Un() {
				return (Un = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function Vn(e) {
				const t = e.icon,
					s = e.text,
					n = {
						id: e.id,
						role: "menuitem",
						children: l.a.createElement(l.a.Fragment, null, l.a.createElement(t, {
							className: Hn.a.icon
						}), l.a.createElement(s, {
							className: Hn.a.text
						})),
						className: Object(h.a)(Hn.a.item, e.className, {
							[Hn.a.mFocused]: !!e.isFocused,
							[Hn.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return n["aria-label"] = e.to || e.label, e.to ? e.externalLink ? l.a.createElement("a", Un({}, n, {
					href: e.to,
					target: "_blank"
				})) : l.a.createElement(en.a, Un({}, n, {
					to: e.to
				})) : l.a.createElement("button", n)
			}
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var Qn = s("./src/reddit/helpers/overlay/index.ts"),
				Wn = s("./src/reddit/routes/modListing/index.ts"),
				qn = s("./src/reddit/selectors/multireddit.ts"),
				Gn = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				zn = s("./src/lib/LinkedListMap/index.ts");
			const Zn = Object(b.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(qn.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				language: e => e.user.language,
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(qn.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched,
				trendingSubreddits: e => e.subreddits.trending.map(t => e.subreddits.models[t]).filter(Boolean)
			});
			var Kn;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Kn || (Kn = {}));
			const Yn = [(e, t) => ({
					id: Cn.Employee,
					type: Kn.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(xn, {
								className: Object(h.a)(t, Sn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, "Employee Communities")
						}
					},
					telemetryNoun: "employee"
				})],
				Xn = [(e, t) => ({
					id: Cn.All,
					type: Kn.GenericLink,
					model: {
						url: "/r/all/",
						displayText: Object(sn.a)(t, "subscriptions.all"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(ln.a, {
								className: Object(h.a)(t, Sn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ce.c, null, "All"))
						}
					},
					telemetryNoun: "all"
				}), (e, t) => ({
					id: Cn.DailyCharts,
					type: Kn.GenericLink,
					model: {
						url: "/subreddits/leaderboard/",
						displayText: Dn.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(hn.a, {
								className: Object(h.a)(t, Sn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, Dn.fbt._("Top Communities", null, {
								hk: "1KzP9v"
							}))
						}
					},
					telemetryNoun: "daily_charts"
				})],
				Jn = [(e, t) => ({
					id: "reddit-feeds",
					type: Kn.Header,
					model: {
						displayText: Object(sn.a)(t, "subscriptions.redditFeeds")
					}
				}), (e, t, s) => ({
					id: Cn.Home,
					type: Kn.GenericLink,
					model: {
						url: "/",
						displayText: Object(sn.a)(t, "header.home"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(xn, {
								className: Object(h.a)(t, Sn.a.itemIcon),
								isBadged: s && s.isBadged
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ce.c, null, "Home"))
						}
					},
					telemetryNoun: "home"
				}), (e, t) => ({
					id: Cn.Popular,
					type: Kn.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: Object(sn.a)(t, "subscriptions.popular"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(En.a, {
								className: Object(h.a)(t, Sn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ce.c, null, "Popular"))
						}
					},
					telemetryNoun: "popular"
				}), ...Xn],
				$n = [(e, t) => ({
					id: "reddit-feeds",
					type: Kn.Header,
					model: {
						displayText: Object(sn.a)(t, "subscriptions.redditFeeds")
					}
				}), (e, t, s) => {
					const n = !s.exploreV2Variant;
					return {
						id: n ? Cn.Home : Cn.Popular,
						type: Kn.GenericLink,
						model: {
							url: n ? "/" : "/r/popular/",
							displayText: Object(sn.a)(t, "subscriptions.popular"),
							icon: e => {
								let {
									className: t
								} = e;
								return l.a.createElement(En.a, {
									className: Object(h.a)(t, Sn.a.itemIcon)
								})
							},
							text: e => {
								let {
									className: t
								} = e;
								return l.a.createElement("span", {
									className: t
								}, l.a.createElement(ce.c, null, "Popular"))
							}
						},
						telemetryNoun: "popular"
					}
				}, ...Xn],
				ea = [(e, t) => ({
					id: "reddit-other",
					type: Kn.Header,
					model: {
						displayText: Object(sn.a)(t, "subscriptions.otherFeeds")
					}
				}), (e, t) => ({
					id: Cn.Settings,
					type: Kn.GenericLink,
					model: {
						url: "/settings",
						displayText: Object(sn.a)(t, "header.settings"),
						icon: t => {
							let {
								className: s
							} = t;
							return l.a.createElement(on, {
								className: s,
								iconUrl: e.accountIcon
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ce.c, null, "User Settings"))
						}
					},
					telemetryNoun: "settings"
				}), (e, t) => ({
					id: Cn.Inbox,
					type: Kn.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: Object(sn.a)(t, "header.messages"),
						icon: t => {
							let {
								className: s
							} = t;
							return l.a.createElement(on, {
								className: s,
								iconUrl: e.accountIcon
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ce.c, null, "Messages"))
						}
					},
					telemetryNoun: "mail"
				}), (e, t) => ({
					id: Cn.CreatePost,
					type: Kn.GenericLink,
					model: {
						url: "/submit",
						displayText: Object(sn.a)(t, "header.newPost"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(Pn.a, {
								className: Object(h.a)(t, Sn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ce.c, null, "Create Post"))
						}
					},
					telemetryNoun: "create_post"
				})],
				ta = [(e, t) => ({
					id: Cn.Coins,
					type: Kn.GenericLink,
					model: {
						url: "/coins",
						displayText: Object(sn.a)(t, "header.coins"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(mn.a, {
								className: Object(h.a)(t, Sn.a.itemCoin)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ce.c, null, "Coins"))
						}
					},
					telemetryNoun: "coins"
				}), (e, t) => ({
					id: Cn.Premium,
					type: Kn.GenericLink,
					model: {
						url: "/premium",
						displayText: Object(sn.a)(t, "header.premium"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(jn.a, {
								className: Object(h.a)(t, Sn.a.itemPremium)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ce.c, null, "Premium"))
						}
					},
					telemetryNoun: "premium"
				})],
				sa = [(e, t) => ({
					id: Cn.ModQueue,
					type: Kn.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: Object(sn.a)(t, "header.modQueue"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(vn.a, {
								className: Object(h.a)(t, Sn.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ce.c, null, "Mod Queue"))
						}
					},
					telemetryNoun: "mod_queue"
				}), (e, t) => ({
					id: Cn.ModMailBeta,
					type: Kn.GenericLink,
					model: {
						url: "https://mod.reddit.com/mail/all",
						displayText: Object(sn.a)(t, "header.modMailBeta"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(pn.a, {
								className: Object(h.a)(t, Sn.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ce.c, null, "Modmail Beta"))
						}
					},
					telemetryNoun: "modmail_beta"
				}), (e, t) => ({
					id: Cn.ModMail,
					type: Kn.GenericLink,
					model: {
						url: "/message/moderator",
						displayText: Object(sn.a)(t, "header.modMail"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(pn.a, {
								className: Object(h.a)(t, Sn.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ce.c, null, "Modmail"))
						}
					},
					telemetryNoun: "modmail"
				})];

			function na(e, t, s) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Kn.Header,
					model: {
						displayText: Object(sn.a)(s, "subscriptions.subscriptions")
					}
				}), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Kn.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Kn.Header,
					model: {
						displayText: Object(sn.a)(s, "subscriptions.profiles")
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Kn.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			var aa = s("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				ra = s.n(aa);

			function oa(e) {
				return l.a.createElement("div", {
					className: Object(h.a)(ra.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var ia = s("./src/reddit/actions/subscription/index.ts"),
				ca = s("./src/reddit/helpers/trackers/customFeeds.ts"),
				da = e => {
					let {
						className: t
					} = e;
					return l.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20"
					}, l.a.createElement("g", {
						fill: "inherit",
						fillRule: "evenodd"
					}, l.a.createElement("polygon", {
						points: "15.437 17.594 10.189 14.837 4.941 17.594 5.944 11.755 1.698 7.619 7.565 6.767 10.189 1.454 12.813 6.767 18.68 7.619 14.434 11.755"
					})))
				},
				la = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				ua = s.n(la);

			function ma() {
				return (ma = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const pa = Object(b.c)({
					currentUser: St.i,
					hideNSFWPref: St.z,
					isLoggedIn: St.K
				}),
				ba = Object(u.b)(pa, (e, t) => ({
					toggleFavorite: s => {
						switch (s.stopPropagation(), s.preventDefault(), t.type) {
							case Kn.Subreddit:
								e(Object(ia.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Kn.Profile:
								e(Object(ia.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Kn.Multi:
								e(Object(ia.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(ca.f)(t.model.url)) : t.sendEvent(Object(ca.c)(t.model.url))
						}
					}
				}));
			var ha = Object(re.b)(ba((function(e) {
					const t = {
						className: Object(h.a)(ua.a.item, e.className, {
							[ua.a.mFocused]: !!e.isFocused
						}),
						id: e.id,
						role: "menuitem",
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
					switch (e.type) {
						case Kn.Subreddit:
							return l.a.createElement(en.a, ma({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), l.a.createElement(dn.b, {
								className: ua.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), l.a.createElement("span", {
								className: ua.a.text
							}, e.model.displayText), e.isLoggedIn && l.a.createElement("div", {
								onClick: e.toggleFavorite
							}, l.a.createElement(da, {
								className: Object(h.a)(ua.a.favorite, {
									[ua.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Kn.SubredditAutocomplete:
							return l.a.createElement(en.a, ma({}, t, {
								"aria-label": e.model.name,
								to: "/r/".concat(e.model.name, "/")
							}), l.a.createElement(dn.b, {
								className: ua.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), l.a.createElement("span", {
								className: ua.a.text
							}, e.model.name));
						case Kn.Multi:
							return l.a.createElement(en.a, ma({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), l.a.createElement("img", {
								src: e.model.icon,
								className: ua.a.customFeedIcon
							}), l.a.createElement("span", {
								className: ua.a.text
							}, e.model.displayText), e.isLoggedIn && l.a.createElement("div", {
								onClick: e.toggleFavorite
							}, l.a.createElement(da, {
								className: Object(h.a)(ua.a.favorite, {
									[ua.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Kn.Profile:
							return l.a.createElement(en.a, ma({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), l.a.createElement(on, {
								className: ua.a.icon,
								iconUrl: e.hideNSFWPref ? "".concat(k.a.assetPath, "/img/avatar_over18_square.png") : e.model.icon.url
							}), l.a.createElement("span", {
								className: ua.a.text
							}, e.model.displayText), e.isLoggedIn && l.a.createElement("div", {
								onClick: e.toggleFavorite
							}, l.a.createElement(da, {
								className: Object(h.a)(ua.a.favorite, {
									[ua.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				ga = s("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				fa = s.n(ga);

			function xa(e) {
				return l.a.createElement("div", {
					className: e.className
				}, l.a.createElement("div", {
					className: fa.a.header
				}), l.a.createElement("div", {
					className: fa.a.item
				}), l.a.createElement("div", {
					className: fa.a.item
				}), l.a.createElement("div", {
					className: fa.a.item
				}), l.a.createElement("div", {
					className: fa.a.item
				}))
			}
			var va = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				ya = s("./src/reddit/actions/multireddit/index.ts"),
				Ca = s("./src/reddit/actions/subreddit.ts"),
				Oa = s("./src/reddit/constants/keycodes.ts"),
				Ea = s("./src/reddit/helpers/trackers/coins.ts"),
				Pa = s("./src/reddit/helpers/trackers/premium.ts"),
				ja = s("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				wa = s.n(ja);

			function Ma() {
				return (Ma = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function Sa(e) {
				return e.id === Cn.ModMail || (e.id === Cn.ModMailBeta || e.id === Cn.CreateCommunity)
			}

			function Na(e) {
				const t = new zn.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Kn.Header && e.type !== Kn.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const Ia = Object(b.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const s = Zn(e),
							n = s.language,
							a = new zn.a("id");
						if (s.account) {
							const r = s.account;
							Jn.forEach(e => a.push(e(r, n))), r.isEmployee && Yn.forEach(e => a.push(e(r, n))), Object(Ln.a)(e) && a.push({
								id: Cn.PublicAccessNetwork,
								type: Kn.GenericClickable,
								model: {
									onClick: () => {
										t(Object(Qn.a)(A.c[A.b.Rpan]))
									},
									displayText: Object(sn.a)(n, "header.publicAccessNetwork"),
									icon: e => {
										let {
											className: t
										} = e;
										return l.a.createElement(wn.a, {
											className: Object(h.a)(t, Sn.a.itemPublicAccessNetwork)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return l.a.createElement("span", {
											className: t
										}, l.a.createElement(ce.c, null, "Reddit Public Access Network"))
									}
								},
								telemetryNoun: "public_access_network"
							}), (s.favoriteSubreddits.length || s.favoriteProfiles.length || s.favoriteMultireddits.length) && (a.push({
								id: "header-favorites",
								type: Kn.Header,
								model: {
									displayText: Object(sn.a)(n, "subscriptions.favorites")
								}
							}), s.favoriteSubreddits.forEach(e => a.push({
								id: "fav" + e.id,
								type: Kn.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteProfiles.forEach(e => a.push({
								id: "fav" + e.id,
								type: Kn.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteMultireddits.forEach(e => a.push({
								id: "fav" + e.url,
								type: Kn.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.multisPending ? a.push({
								id: "multis-pending",
								type: Kn.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.multis.length > 0 && (a.push({
								id: "header-multis",
								type: Kn.Header,
								model: {
									displayText: Object(Ee.c)("Custom feeds"),
									button: e => {
										let {
											className: s,
											sendClickEvent: n
										} = e;
										return l.a.createElement("button", {
											onClick: () => {
												t(Object(Ke.i)(dt.a.MULTIREDDIT_CREATE)), n()
											},
											className: Object(h.a)(s, Sn.a.multiPlusButton)
										}, l.a.createElement(Gn.a, {
											className: Sn.a.multiPlusIcon
										}))
									},
									buttonTelemetryNoun: "create_new_custom_feed"
								}
							}), s.multis.forEach(e => a.push({
								id: e.url,
								type: Kn.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.moderatingSubredditsPending ? a.push({
								id: "moderatingSubreddits-pending",
								type: Kn.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.moderatingSubreddits.length && (a.push({
								id: "header-moderating",
								type: Kn.Header,
								model: {
									displayText: Object(sn.a)(n, "subscriptions.moderatingFull")
								}
							}), a.push({
								id: Cn.ModListing,
								type: Kn.GenericLink,
								model: {
									url: Wn.a,
									displayText: Object(sn.a)(n, "header.modListing"),
									icon: e => {
										let {
											className: t
										} = e;
										return l.a.createElement(vn.a, {
											className: Object(h.a)(t, Sn.a.itemModQueue)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return l.a.createElement("span", {
											className: t
										}, l.a.createElement(ce.c, null, "r/Mod"))
									}
								},
								telemetryNoun: "r_mod"
							}), s.moderatingSubreddits.forEach(e => a.push({
								id: "mod" + e.id,
								type: Kn.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), s.subscriptionsPending ? a.push({
								id: "subscriptions-pending",
								type: Kn.LoadingState,
								model: {
									displayText: ""
								}
							}) : na(a, s, n), ea.forEach(e => a.push(e(r, n))), Object(St.eb)(e) && a.push({
								id: Cn.CreateCommunity,
								type: Kn.GenericLink,
								model: {
									url: "https://www.reddit.com/subreddits/create",
									displayText: Object(sn.a)(n, "header.createCommunity"),
									icon: e => {
										let {
											className: t
										} = e;
										return l.a.createElement(Pn.a, {
											className: Object(h.a)(t, Sn.a.itemIcon)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return l.a.createElement("span", {
											className: t
										}, l.a.createElement(ce.c, null, "Create Community"))
									}
								},
								telemetryNoun: "create_community"
							}), ta.forEach(e => a.push(e(r, n))), r.isMod && sa.forEach(e => a.push(e(r, n)))
						} else {
							const t = Object(Tn.a)(e, {
								expEventOverride: !1
							});
							s.subscriptions.length || Object(q.g)(e) ? Jn.forEach(e => a.push(e(null, n, {
								exploreV2Variant: t
							}))) : $n.forEach(e => a.push(e(null, n, {
								exploreV2Variant: t
							}))), t && a.push(((e, t) => ({
								id: Cn.Explore,
								type: Kn.GenericLink,
								model: {
									url: "/explore/",
									displayText: Object(sn.a)(t, "header.explore"),
									icon: e => {
										let {
											className: t
										} = e;
										return l.a.createElement(bn, {
											className: Object(h.a)(t, Sn.a.itemIcon)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return l.a.createElement("span", {
											className: t
										}, l.a.createElement(ce.c, null, "Explore"))
									}
								},
								telemetryNoun: "explore"
							}))(0, n)), a.push({
								id: "reddit-other",
								type: Kn.Header,
								model: {
									displayText: Object(sn.a)(n, "subscriptions.otherFeeds")
								}
							}), ta.forEach(e => a.push(e(null, n))), na(a, s, n)
						}
						return a
					}
				}),
				ka = e => ({
					onHomeClicked: () => e(Object(tn.y)()),
					onGotoUrl: t => e(Object(p.b)(t)),
					onSubredditsRequested: () => {
						e(Object(ia.e)()), e(Object(Ca.q)()), e(Object(ya.g)())
					},
					onActionDispatched: t => e(t)
				}),
				_a = (e, t, s) => Object.assign({}, e, t, s, {
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Ta extends l.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							s = this.getList(t, this.props),
							n = Na(s),
							a = n.first();
						this.setState({
							focusOrder: n,
							renderableList: s,
							currentInputText: e.currentTarget.value,
							focusedItemId: a ? a.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === Oa.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === Oa.b.Tab && this.props.onClose && this.props.onClose(), e.key === Oa.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Kn.Header && e.type !== Kn.LoadingState && (this.fireTelemetryForListItem(e), e.type === Kn.GenericClickable ? e.model.onClick() : Sa(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === Oa.b.ArrowDown && (e.preventDefault(), this.setState(e => {
							const t = this.findNextFocusableItem(),
								s = t ? e.renderableList.get(t) : void 0,
								n = s ? s.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById("focus-".concat(t));
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: n,
								focusedItemId: t
							}
						})), e.key === Oa.b.ArrowUp && (e.preventDefault(), this.setState(e => {
							const t = this.findPrevFocusableItem(),
								s = t ? e.renderableList.get(t) : void 0,
								n = s ? s.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById("focus-".concat(t));
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: n,
								focusedItemId: t
							}
						}))
					}, this.fireTelemetryForListItem = e => {
						let t;
						switch (e.id) {
							case Cn.Coins:
								Ea.f(), t = Ea.e();
								break;
							case Cn.Premium:
								Pa.g(), t = Pa.f()
						}
						switch (e.type) {
							case Kn.Category:
							case Kn.GenericLink:
							case Kn.GenericClickable:
							case Kn.Multi:
							case Kn.Profile:
							case Kn.Subreddit:
								this.props.sendEvent(s => Object.assign({}, Object(G.defaults)(s), t ? {
									correlationId: t
								} : null, {
									customFeed: e.type === Kn.Multi ? Object(G.customFeedByPath)(s, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Kn.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => Object.assign({}, Object(G.defaults)(e), {
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: Na(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = l.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						s = this.getList(t, e),
						n = Na(s);
					this.setState({
						focusOrder: n,
						renderableList: s
					})
				}
				getList(e, t) {
					if (e) {
						const s = new zn.a("id"),
							n = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Kn.Category:
								case Kn.GenericLink:
								case Kn.Multi:
								case Kn.Profile:
								case Kn.Subreddit:
									e.model.displayText.match(n) && s.push(e);
									break;
								case Kn.Header: {
									const t = s.last();
									t && t.type === Kn.Header && s.pop(), s.push(e);
									break
								}
								case Kn.LoadingState:
							}
						});
						const a = s.last();
						return a && a.type === Kn.Header && s.pop(), s
					}
					return t.unfilteredList
				}
				findNextFocusableItem() {
					const e = this.state.focusOrder.first();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.next ? t.next.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				findPrevFocusableItem() {
					const e = this.state.focusOrder.last();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.prev ? t.prev.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				render() {
					const e = this.state.renderableList.toArray(),
						t = this.state.focusedItemId ? this.state.renderableList.get(this.state.focusedItemId) : null;
					return l.a.createElement("div", {
						role: "menu",
						className: this.props.className
					}, l.a.createElement("div", {
						"aria-live": "assertive",
						"aria-label": t && t.model.displayText ? "".concat(t.model.displayText, " ").concat(Dn.fbt._("selected", null, {
							hk: "QqrSS"
						})) : ""
					}), l.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": Dn.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: wa.a.filter,
						id: "header-subreddit-filter",
						placeholder: Dn.fbt._("Filter", null, {
							hk: "oqdpz"
						}),
						onChange: this.onChange,
						onKeyDown: this.onKeyDown,
						ref: this.inputRef
					}), e.map((e, t) => {
						const s = {
							id: "focus-".concat(e.id),
							isFocused: this.state.focusedItemId === e.id,
							key: "subreddit-list-key-".concat(e.id),
							onFocus: () => this.onChangeFocusedListItemId(e.id),
							onMouseEnter: () => this.onChangeFocusedListItemId(e.id),
							onMouseLeave: () => this.onChangeFocusedListItemId(void 0),
							onClick: () => {
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === Cn.Home && this.props.onHomeClicked(), e.type === Kn.GenericClickable && e.model.onClick()
							}
						};
						switch (e.type) {
							case Kn.GenericClickable:
								return l.a.createElement(Vn, Ma({}, s, {
									className: wa.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Kn.Category:
							case Kn.GenericLink:
								return l.a.createElement(Vn, Ma({}, s, {
									externalLink: Sa(e),
									className: wa.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Kn.Header: {
								const s = e.model.button;
								return l.a.createElement(oa, {
									className: wa.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								}, e.model.displayText, s && l.a.createElement(s, {
									className: wa.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Kn.LoadingState:
								return l.a.createElement(xa, {
									className: wa.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								});
							case Kn.Multi:
								return l.a.createElement(ha, Ma({}, s, {
									className: wa.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Kn.Multi
								}));
							case Kn.Profile:
								return l.a.createElement(ha, Ma({}, s, {
									className: wa.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Kn.Profile
								}));
							case Kn.Subreddit:
								return l.a.createElement(ha, Ma({}, s, {
									className: wa.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Kn.Subreddit
								}))
						}
					}))
				}
			}
			const La = Object(u.b)(Ia, ka, _a)(Object(re.b)(Ta)),
				Fa = Object(u.b)(Ia, ka, _a)(Object(re.b)(Object(va.b)(Ta)));
			var Ra = s("./src/reddit/actions/shortcuts.ts"),
				Aa = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Da = e => l.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, l.a.createElement("path", {
					d: "M17.65,1.58H2.35A2.29,2.29,0,0,0,0,3.82V16.17a2.3,2.3,0,0,0,2.35,2.25h15.3A2.29,2.29,0,0,0,20,16.18V3.82A2.29,2.29,0,0,0,17.65,1.58Zm1.17,14.2a1.59,1.59,0,0,1-1.58,1.59H5.59V2.63H17.24a1.59,1.59,0,0,1,1.59,1.59Z"
				}), l.a.createElement("path", {
					d: "M15.9,9.37H9.84l2.71-2.71a.63.63,0,0,0-.89-.9L7.87,9.55a.6.6,0,0,0-.14.21.66.66,0,0,0,0,.48.6.6,0,0,0,.14.21l3.79,3.78a.63.63,0,0,0,.89-.89L9.84,10.63H15.9a.63.63,0,0,0,0-1.26Z"
				}));
			var Ba = s("./src/reddit/selectors/userPrefs.ts");
			const Ha = Object(_n.t)({
					isCommentsPage: _n.w,
					pageLayer: e => e
				}),
				Ua = Object(b.c)({
					currentPage: An,
					hideNSFWPref: St.z,
					isDropdownOpen: e => e.header.isSubscriptionsDropdownOpen,
					isLoggedIn: St.K,
					isOverlayOpen: Ut.i,
					isPinnedSubscriptionsMenuDisabled: Ba.a,
					isSubscriptionsPinned: Ba.b,
					language: e => e.user.language
				});
			class Va extends l.a.Component {
				constructor(e) {
					super(e), this.state = {
						preventFocus: !1
					}, this.handleKeyboardShortcut = e => {
						if ("q" === e.key && !this.props.isSubscriptionsPinned) {
							if (document.activeElement && ("input" === document.activeElement.tagName.toLowerCase() || "textarea" === document.activeElement.tagName.toLowerCase() || "true" === document.activeElement.getAttribute("contenteditable"))) return;
							this.props.openDropdown()
						}
					}, this.enablePreventFocus = () => this.setState({
						preventFocus: !0
					}), this.disablePreventFocus = () => setTimeout(() => this.setState({
						preventFocus: !1
					})), this.close = e => {
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(Ra.r)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => Object.assign({}, Object(G.defaults)(e), {
							source: "nav",
							action: "click",
							noun: this.props.isDropdownOpen ? "close_community_nav" : "open_community_nav"
						})), this.props.isDropdownOpen && this.enablePreventFocus(), this.props.toggleDropdown(), this.props.isDropdownOpen || this.disablePreventFocus())
					}
				}
				componentDidMount() {
					document.addEventListener("keyup", this.handleKeyboardShortcut)
				}
				componentWillUnmount() {
					document.removeEventListener("keyup", this.handleKeyboardShortcut)
				}
				shouldComponentUpdate(e, t) {
					return this.state.preventFocus !== t.preventFocus || (!(!this.props.isDropdownOpen && !e.isDropdownOpen) || (e.currentPage !== this.props.currentPage || e.isSubscriptionsPinned !== this.props.isSubscriptionsPinned || e.isBlueLayout !== this.props.isBlueLayout))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					const {
						currentPage: e,
						className: t,
						hideNSFWPref: s,
						isBlueLayout: n,
						isCommentsPage: a,
						isLoggedIn: r,
						isOverlayOpen: o,
						language: i
					} = this.props, c = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, d = o || !r && a;
					return l.a.createElement("div", {
						"aria-label": Object(Ee.c)("Start typing to filter your communities or use up and down to select."),
						className: Object(h.a)(Sn.a.container, t, {
							[Sn.a.mBlue]: n,
							[Sn.a.mOpen]: c,
							[Sn.a.mNotPinned]: !this.props.isSubscriptionsPinned,
							[Sn.a.mPinned]: this.props.isSubscriptionsPinned
						}),
						onClickCapture: this.stopPropagation,
						role: "navigation"
					}, l.a.createElement("button", {
						className: Sn.a.selector,
						onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
						onFocus: this.onButtonFocus,
						tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
					}, l.a.createElement("span", {
						className: Sn.a.containerText
					}, function(e, t) {
						switch (e.type) {
							case Cn.All:
								return Nn(Object(sn.a)(t, "subscriptions.all"));
							case Cn.Appeal:
								return Nn(Object(sn.a)(t, "header.appeal"));
							case Cn.Coins:
								return Nn(Object(sn.a)(t, "header.coins"));
							case Cn.Community:
								return Nn(e.model.displayText, !0);
							case Cn.CommunitySearch:
								return Nn(Object(sn.a)(t, "search.restrictToSubreddit"));
							case Cn.CreateCommunity:
								return Nn(Object(sn.a)(t, "header.createCommunity"));
							case Cn.CreatePost:
								return Nn(Object(sn.a)(t, "header.newPost"));
							case Cn.DailyCharts:
								return Nn(Object(Ee.c)("Top Communities"));
							case Cn.Explore:
								return Nn(Object(sn.a)(t, "header.explore"));
							case Cn.GlobalSearch:
								return Nn(Object(sn.a)(t, "search.globalName"));
							case Cn.Home:
								return Nn(Object(sn.a)(t, "header.home"));
							case Cn.Inbox:
								return Nn(Object(sn.a)(t, "header.messages"));
							case Cn.ModListing:
								return Nn(Object(sn.a)(t, "header.modListing"));
							case Cn.ModMail:
								return Nn(Object(sn.a)(t, "header.modMail"));
							case Cn.ModMailBeta:
								return Nn(Object(sn.a)(t, "header.modMailBeta"));
							case Cn.ModQueue:
								return Nn(Object(sn.a)(t, "header.modQueue"));
							case Cn.Multi:
								return Nn(e.model.displayText, !0);
							case Cn.Popular:
								return Nn(Object(sn.a)(t, "subscriptions.popular"));
							case Cn.Premium:
								return Nn(Object(sn.a)(t, "header.premium"));
							case Cn.PublicAccessNetwork:
								return Nn(Object(sn.a)(t, "header.publicAccessNetwork"));
							case Cn.Report:
								return Nn(Object(sn.a)(t, "header.report"));
							case Cn.Settings:
								return Nn(Object(sn.a)(t, "header.settings"));
							case Cn.SubredditCreation:
								return Nn(Object(sn.a)(t, "header.subredditCreation"));
							case Cn.Topic:
								return Nn(e.model);
							case Cn.Unknown:
								return Nn("");
							case Cn.UserDataRequest:
								return Nn(Object(sn.a)(t, "header.userDataRequest"));
							case Cn.UserProfile:
								return Nn(e.model.displayText, !0);
							case Cn.UserProfileName:
								return Nn(e.name, !0);
							case Cn.ViewDraft:
								return Nn(Object(sn.a)(t, "header.viewDraft"))
						}
					}(e, i)), function(e, t) {
						switch (e.type) {
							case Cn.All:
								return l.a.createElement(ln.a, {
									className: Sn.a.defaultIcon
								});
							case Cn.Appeal:
								return l.a.createElement(Pn.a, {
									className: Sn.a.defaultIcon
								});
							case Cn.Coins:
								return l.a.createElement(mn.a, {
									className: Sn.a.coinIcon
								});
							case Cn.Community:
							case Cn.CommunitySearch: {
								const s = Object(nn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return l.a.createElement(dn.b, {
									className: Sn.a.subredditIcon,
									iconUrl: s.url,
									primaryColor: s.color
								})
							}
							case Cn.CreateCommunity:
							case Cn.CreatePost:
								return l.a.createElement(Pn.a, {
									className: Sn.a.defaultIcon
								});
							case Cn.DailyCharts:
								return l.a.createElement(hn.a, {
									className: Sn.a.defaultIcon
								});
							case Cn.Explore:
								return l.a.createElement(bn, {
									className: Sn.a.defaultIcon
								});
							case Cn.GlobalSearch:
								return l.a.createElement(un, {
									className: Sn.a.defaultIcon
								});
							case Cn.Home:
								return l.a.createElement(xn, {
									className: Sn.a.defaultIcon
								});
							case Cn.Inbox:
							case Cn.Settings:
								return l.a.createElement(on, {
									className: Sn.a.icon,
									iconUrl: e.model.accountIcon
								});
							case Cn.ModListing:
								return l.a.createElement(vn.a, {
									className: Sn.a.modQueueIcon
								});
							case Cn.SubredditCreation:
								return l.a.createElement(Pn.a, {
									className: Sn.a.defaultIcon
								});
							case Cn.ModMail:
							case Cn.ModMailBeta:
								return l.a.createElement(pn.a, {
									className: Sn.a.modQueueIcon
								});
							case Cn.ModQueue:
								return l.a.createElement(vn.a, {
									className: Sn.a.modQueueIcon
								});
							case Cn.Multi:
								return l.a.createElement("img", {
									src: e.model.icon,
									className: Sn.a.customFeedIcon
								});
							case Cn.Popular:
								return l.a.createElement(En.a, {
									className: Sn.a.defaultIcon
								});
							case Cn.Premium:
								return l.a.createElement(jn.a, {
									className: Sn.a.premiumIcon
								});
							case Cn.PublicAccessNetwork:
								return l.a.createElement(wn.a, {
									className: Sn.a.publicAccessNetworkIcon
								});
							case Cn.Report:
								return l.a.createElement(Pn.a, {
									className: Sn.a.defaultIcon
								});
							case Cn.Unknown:
								return l.a.createElement("div", {
									className: Sn.a.unknownIcon
								});
							case Cn.UserDataRequest:
								return l.a.createElement(Pn.a, {
									className: Sn.a.defaultIcon
								});
							case Cn.UserProfile: {
								const s = Object(nn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return l.a.createElement(on, {
									className: Sn.a.icon,
									iconUrl: s.url
								})
							}
							case Cn.UserProfileName:
								return l.a.createElement("div", {
									className: Sn.a.defaultIcon
								});
							case Cn.ViewDraft:
								return l.a.createElement(Pn.a, {
									className: Sn.a.defaultIcon
								});
							case Cn.Topic:
								return l.a.createElement(On, {
									className: Sn.a.defaultIcon
								})
						}
					}(e, s), !this.props.isSubscriptionsPinned && l.a.createElement(Aa.b, {
						className: Sn.a.caretDown
					})), c && !this.props.isPinnedSubscriptionsMenuDisabled && l.a.createElement(Da, {
						className: Object(h.a)(Sn.a.pin, {
							[Sn.a.disabled]: d
						}),
						onClick: d ? void 0 : this.props.onPinSubscriptions
					}), c && l.a.createElement(Fa, {
						canAutofocus: !0,
						className: Sn.a.listContainer,
						onClose: this.close
					}))
				}
			}
			var Qa = Ha(Object(u.b)(Ua, (e, t) => ({
					closeDropdown: () => e(Object(O.f)()),
					onLocationRefresh: (s, n) => e(Object(tn.H)(s, t.pageLayer, n)),
					onPinSubscriptions: () => {
						e(Object(O.i)()), e(Object(O.f)())
					},
					openDropdown: () => e(Object(O.g)()),
					toggleDropdown: () => e(Object(O.h)())
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onLocationClick: s => t.onLocationRefresh(s, e.isOverlayOpen)
				}))(Object(re.b)(Va))),
				Wa = s("./src/reddit/controls/InternalLink/index.tsx"),
				qa = s("./src/reddit/helpers/trackers/monthsToMinutes.ts"),
				Ga = s("./src/reddit/components/HeaderSubredditSelector/Compact/Tooltip.tsx"),
				za = s("./src/reddit/components/HeaderSubredditSelector/Compact/index.m.less"),
				Za = s.n(za);
			const Ka = "home-tooltip",
				Ya = Object(b.c)({
					currentPage: An,
					frontpageIsHome: e => Object(q.g)(e, {
						expEventOverride: !1
					}),
					homeTooltipIsOpen: q.j,
					isBannerVisible: q.k,
					isHomeVisited: q.n
				}),
				Xa = Object(u.b)(Ya, e => ({
					visitPopulatedHome: () => e(Object(E.b)({}))
				}));
			class Ja extends l.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isTooltipOpen: !1
					}, this.onHomeClick = e => {
						e.preventDefault();
						const {
							isBannerVisible: t,
							isHomeVisited: s,
							frontpageIsHome: n
						} = this.props;
						(t || s || n) && (this.props.visitPopulatedHome(), this.props.sendEvent(Object(qa.h)("home")))
					}, this.trackPopularClick = () => {
						this.props.sendEvent(Object(qa.h)("popular"))
					}, this.showTooltip = () => {
						this.setState(e => e.isTooltipOpen ? null : {
							isTooltipOpen: !0
						})
					}, this.hideTooltip = () => {
						this.setState(e => e.isTooltipOpen ? {
							isTooltipOpen: !1
						} : null)
					}
				}
				render() {
					const {
						className: e,
						currentPage: t,
						frontpageIsHome: s,
						homeTooltipIsOpen: n,
						isBannerVisible: a,
						isHomeVisited: r
					} = this.props, {
						isTooltipOpen: o
					} = this.state, i = a || r || s;
					return l.a.createElement("div", {
						"aria-label": Dn.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: Object(h.a)(Za.a.container, e),
						role: "navigation"
					}, l.a.createElement(Wa.a, {
						className: Object(h.a)(Za.a.link, {
							[Za.a.mActive]: t.type === Cn.Home,
							[Za.a.mDisabled]: !i,
							[Za.a.mHighlighted]: n
						}),
						"data-redditstyle": !0,
						id: Ka,
						onMouseDown: this.onHomeClick,
						onMouseEnter: this.showTooltip,
						onMouseLeave: this.hideTooltip,
						onMouseMove: this.showTooltip,
						to: A.c[A.b.Home]
					}, l.a.createElement(xn, {
						className: Za.a.icon
					}), l.a.createElement("span", {
						className: Za.a.text
					}, Dn.fbt._("Home", null, {
						hk: "45k7H0"
					})), i && !r && l.a.createElement("div", {
						className: Za.a.badge
					}), !i && l.a.createElement(Ga.a, {
						isOpen: o,
						tooltipId: Ka
					})), l.a.createElement(Wa.a, {
						className: Object(h.a)(Za.a.link, {
							[Za.a.mActive]: t.type === Cn.Popular
						}),
						"data-redditstyle": !0,
						onMouseDown: this.trackPopularClick,
						to: s ? A.c[A.b.Popular] : A.c[A.b.Home]
					}, l.a.createElement(En.a, {
						className: Za.a.icon
					}), l.a.createElement("span", {
						className: Za.a.text
					}, Dn.fbt._("Popular", null, {
						hk: "2dT0XE"
					}))), n && l.a.createElement("div", {
						className: Za.a.overlay
					}))
				}
			}
			var $a = Object(_n.t)()(Xa(Object(re.b)(Ja))),
				er = s("./src/reddit/components/JumpToContent/index.tsx"),
				tr = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				sr = s("./src/reddit/controls/Search/index.tsx"),
				nr = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				ar = s("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				rr = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				or = s("./src/reddit/selectors/experiments/generalCleanup.ts"),
				ir = s("./src/reddit/actions/tooltip.ts"),
				cr = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				dr = s("./src/reddit/icons/svgs/LayerLogo/index.m.less"),
				lr = s.n(dr);

			function ur() {
				return (ur = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var mr, pr = e => l.a.createElement("svg", ur({
					viewBox: "0 0 80 80",
					className: lr.a.icon
				}, e), l.a.createElement("path", {
					d: "M76.4 55.5l-1.7-.9L44 70c-2.2 1.1-5.9 1.1-8.1 0L5.3 54.7l-1.7.9c-2.2 1.1-2.2 2.9 0 4L36 75.7c2.2 1.1 5.9 1.1 8.1 0l32.4-16.2c2.1-1.1 2.1-2.9-.1-4z"
				}), l.a.createElement("path", {
					d: "M77.3 41l-15.4-7.7 15.4-7c2.5-1.2 2.8-2.9 2.8-3.6 0-.7-.3-2.4-2.8-3.6L44.8 4.4c-2.8-1.3-6.9-1.3-9.7 0L2.8 19.1C.3 20.2 0 22 0 22.7c0 .7.3 2.4 2.8 3.6l15.4 7L2.7 41C1 41.8 0 43.2 0 44.7s1 2.9 2.7 3.7l32.4 16.2c1.4.7 3.2 1 4.9 1s3.5-.4 4.9-1l32.4-16.2c1.7-.9 2.7-2.2 2.7-3.7s-1-2.9-2.7-3.7zM4.2 22.7c.1 0 .1-.1.2-.1L36.8 7.9c1.7-.8 4.8-.8 6.5 0l32.4 14.7c.1 0 .1.1.2.1-.1 0-.1.1-.2.1L43.2 37.5c-1.7.8-4.8.8-6.5 0L4.4 22.7h-.2z"
				})),
				br = s("./src/reddit/components/Header/QuickLinks/index.m.less"),
				hr = s.n(br);
			! function(e) {
				e.All = "header-quicklinks-all", e.Popular = "header-quicklinks-popular", e.News = "header-quicklinks-news", e.Rpan = "header-quicklinks-rpan", e.Layer = "header-quicklinks-layer"
			}(mr || (mr = {}));
			const gr = Object(b.c)({
				isLoggedIn: e => !!e.user.account,
				showRPANlogo: Ln.a,
				showLayersEmbedLogo: qt.d.layersEmbedQuickLink
			});
			var fr = Object(u.b)(gr, e => ({
					openStream: () => e(Object(Qn.a)(A.c[A.b.Rpan])),
					toggleTooltip: t => e(Object(ir.g)({
						tooltipId: t
					}))
				}))(Object(re.b)((function(e) {
					return l.a.createElement("div", {
						className: Object(h.a)(hr.a.container, {
							[hr.a.blue]: e.isBlueLayout
						}, e.className)
					}, l.a.createElement("div", {
						className: hr.a.row
					}, l.a.createElement(en.a, {
						className: hr.a.icon,
						id: mr.Popular,
						to: e.isLoggedIn ? A.c[A.b.Popular] : A.c[A.b.Home],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(G.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "popular"
						})),
						onMouseEnter: () => e.toggleTooltip(mr.Popular),
						onMouseLeave: () => e.toggleTooltip(mr.Popular)
					}, l.a.createElement(En.a, null), l.a.createElement(cr.c, {
						caretOnTop: !0,
						tooltipId: mr.Popular,
						text: Dn.fbt._("Popular", null, {
							hk: "1Kx4va"
						})
					})), l.a.createElement(en.a, {
						className: hr.a.icon,
						id: mr.All,
						to: A.c[A.b.All],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(G.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "all"
						})),
						onMouseEnter: () => e.toggleTooltip(mr.All),
						onMouseLeave: () => e.toggleTooltip(mr.All)
					}, l.a.createElement(ln.a, null), l.a.createElement(cr.c, {
						caretOnTop: !0,
						tooltipId: mr.All,
						text: Dn.fbt._("All", null, {
							hk: "1Rk1yU"
						})
					})), e.showRPANlogo && l.a.createElement(en.a, {
						className: hr.a.icon,
						id: mr.Rpan,
						to: A.c[A.b.Rpan],
						onClick: t => {
							(t => {
								t.stopPropagation(), t.preventDefault(), e.openStream()
							})(t), e.sendEvent(e => Object.assign({}, Object(G.defaults)(e), {
								source: "nav",
								action: "click",
								noun: "public_access_network"
							}))
						},
						onMouseEnter: () => e.toggleTooltip(mr.Rpan),
						onMouseLeave: () => e.toggleTooltip(mr.Rpan)
					}, l.a.createElement(wn.a, null), l.a.createElement(cr.c, {
						caretOnTop: !0,
						tooltipId: mr.Rpan,
						text: Dn.fbt._("Reddit Public Access Network", null, {
							hk: "38uXOo"
						})
					})), e.showLayersEmbedLogo && l.a.createElement(en.a, {
						className: hr.a.icon,
						id: mr.Layer,
						to: A.c[A.b.Layer],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(G.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "layer"
						})),
						onMouseEnter: () => e.toggleTooltip(mr.Layer),
						onMouseLeave: () => e.toggleTooltip(mr.Layer)
					}, l.a.createElement(pr, null), l.a.createElement(cr.c, {
						caretOnTop: !0,
						tooltipId: mr.Layer,
						text: Dn.fbt._("r/Layer in partnership with Adobe", null, {
							hk: "36V7Nc"
						})
					}))))
				}))),
				xr = s("./src/reddit/actions/login.ts"),
				vr = s("./src/reddit/helpers/trackers/authControls.ts"),
				yr = s("./src/chat/helpers/dom.ts"),
				Cr = s("./src/reddit/actions/chat/toggle.ts"),
				Or = s("./src/reddit/actions/emailVerificationTooltip.ts"),
				Er = s("./src/reddit/actions/postCreation/general.ts"),
				Pr = s("./src/reddit/actions/users.ts"),
				jr = s("./src/reddit/components/Settings/modalIds.ts");
			var wr = Object(P.a)({
					getComponent: () => Object(j.a)(() => s.e("EmailVerificationModals").then(s.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Mr = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Sr = s("./src/reddit/components/Translated/index.tsx"),
				Nr = s("./src/reddit/helpers/trackers/emailVerification.ts"),
				Ir = s("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				kr = s.n(Ir);
			class _r extends l.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(Nr.e)(Nr.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(Nr.c)(Nr.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(Nr.e)(Nr.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					_r.shouldSendViewEvent && (_r.shouldSendViewEvent = !1, this.props.sendEvent(Object(Nr.g)(Nr.a)))
				}
				render() {
					return l.a.createElement("div", {
						className: kr.a.container
					}, l.a.createElement("div", {
						className: kr.a.topLine
					}), l.a.createElement("button", {
						className: kr.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, l.a.createElement(U.a, {
						className: kr.a.closeIcon
					})), l.a.createElement("h5", {
						className: kr.a.title
					}, l.a.createElement(Sr.a, {
						msgId: "header.emailVerificationTooltip.title"
					})), l.a.createElement("p", {
						className: kr.a.subtitle
					}, this.props.email), l.a.createElement("p", {
						className: kr.a.description
					}, l.a.createElement(Sr.a, {
						msgId: "header.emailVerificationTooltip.description"
					})), l.a.createElement("div", {
						className: kr.a.buttonWrapper
					}, l.a.createElement(Ct.i, {
						className: kr.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen
					}, l.a.createElement(Sr.a, {
						msgId: "header.emailVerificationTooltip.buttons.updateEmail"
					})), l.a.createElement(Ct.f, {
						className: Object(h.a)(kr.a.commonBtn, kr.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick
					}, l.a.createElement(Sr.a, {
						msgId: "header.emailVerificationTooltip.buttons.gotIt"
					}))))
				}
			}
			_r.shouldSendViewEvent = !0;
			const Tr = Object(Mr.a)(_r, [va.a.Click, va.a.Keydown, va.a.Resize]);
			var Lr = Object(re.b)(Tr),
				Fr = s("./src/higherOrderComponents/asTooltip.tsx"),
				Rr = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				Ar = s("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				Dr = s("./node_modules/uuid/v4.js"),
				Br = s.n(Dr);
			let Hr;
			const Ur = () => Hr,
				Vr = "gold_top_nav",
				Qr = e => t => Object.assign({
					source: "gold_top_nav",
					action: "click",
					noun: e
				}, (e => ({
					screen: G.screen(e),
					profile: G.profile(e),
					subreddit: G.subreddit(e)
				}))(t)),
				Wr = e => t => Object.assign({
					source: Vr,
					action: "click",
					noun: "coins_".concat(e),
					correlationId: Ur()
				}, G.defaults(t)),
				qr = () => e => Object.assign({
					source: Vr,
					action: "click",
					noun: "premium",
					correlationId: Ur()
				}, G.defaults(e)),
				Gr = () => e => Object.assign({
					source: Vr,
					action: "view",
					noun: "dropdown",
					correlationId: Ur()
				}, G.defaults(e));
			var zr = s("./src/reddit/models/Gold/Coins/index.ts"),
				Zr = s("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				Kr = s.n(Zr);
			class Yr extends l.a.Component {
				render() {
					const {
						className: e,
						buttonSubText: t,
						buttonText: s,
						goldStyle: n,
						onClick: a,
						primaryText: r,
						subText: o
					} = this.props, i = n ? Ct.c : Ct.f;
					return l.a.createElement("div", {
						className: Object(h.a)(e, Kr.a.CompactCoinPurchaseListItem)
					}, l.a.createElement("div", {
						className: Kr.a.productSection
					}, l.a.createElement("span", {
						className: Kr.a.primaryText
					}, r), l.a.createElement("span", {
						className: Kr.a.subText
					}, Array.isArray(o) ? o.map((e, t) => l.a.createElement("p", {
						key: t
					}, e)) : o)), l.a.createElement("div", {
						className: Kr.a.priceSection
					}, l.a.createElement(i, {
						className: Object(h.a)(Kr.a.button, {
							[Kr.a.goldStyle]: n
						}),
						redditStyle: !0,
						onClick: a
					}, s), l.a.createElement("span", {
						className: Kr.a.buttonSubText
					}, t)))
				}
			}
			var Xr = Yr;
			const Jr = Object(b.c)({
				isPremiumSubscriber: St.r
			});
			class $r extends l.a.Component {
				constructor(e) {
					super(e), this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: s,
							sendEvent: n
						} = this.props;
						t && t(), n(Wr(e.coins)), s(e)
					}, this.handleClickBuyPremium = () => {
						const {
							onClick: e,
							onClickPremiumPackage: t,
							sendEvent: s
						} = this.props;
						e && e(), s(qr()), t()
					}, this.listItemData = this.getListItemData()
				}
				getListItemData() {
					const {
						isPremiumSubscriber: e
					} = this.props, t = [zr.a.coins500, zr.a.coins1100, zr.a.coins1800, zr.a.coins7200, zr.a.coins40000].map(e => {
						const {
							coins: t,
							pennies: s,
							percentBonus: n
						} = e, a = t.toLocaleString(), r = Object(Ee.c)("".concat(Object(Ee.b)("number of coins", a), " Coins")), o = Math.floor(t / 100), i = Object(Ee.c)("Up to ".concat(Object(Ee.b)("number of awards", o), " Awards")), c = "$".concat(s / 100);
						return {
							buttonSubText: n ? Object(Ee.c)("".concat(Object(Ee.b)("percent bonus", n), "% Bonus")) : void 0,
							buttonText: c,
							coinPackage: e,
							primaryText: r,
							subText: i
						}
					});
					if (e) return t;
					const s = 1e3.toLocaleString(),
						n = {
							buttonSubText: Object(Ee.c)("".concat(Object(Ee.b)("number of bonus coins", s), " Bonus Coins")),
							buttonText: Object(Ee.c)("$".concat(Object(Ee.b)("premium price", 5.99), "/mo")),
							isGoldStyle: !0,
							primaryText: Object(Ee.c)("Premium"),
							subText: [Object(Ee.c)("".concat(Object(Ee.b)("monthly coins", 700), " Coins/mo")), Object(Ee.c)("Ads free & more")]
						};
					return t.concat(n)
				}
				render() {
					const {
						className: e
					} = this.props;
					return l.a.createElement("div", {
						className: e
					}, this.listItemData.map(e => l.a.createElement(Xr, {
						buttonSubText: e.buttonSubText,
						buttonText: e.buttonText,
						goldStyle: e.isGoldStyle,
						key: e.primaryText,
						onClick: e.coinPackage ? () => this.handleClickBuyCoins(e.coinPackage) : this.handleClickBuyPremium,
						primaryText: e.primaryText,
						subText: e.subText
					})))
				}
			}
			var eo = Object(u.b)(Jr, e => ({
					onClickCoinPackage: t => e(Object(Rr.i)({
						coinPackage: t,
						correlationId: Ur()
					})),
					onClickPremiumPackage: () => e(Object(Ar.f)(Ur()))
				}))(Object(re.b)($r)),
				to = s("./src/reddit/controls/Dropdown/index.tsx"),
				so = s("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				no = s.n(so);
			const ao = Object(Fr.a)(to.a);
			class ro extends l.a.Component {
				constructor() {
					super(...arguments), this.timer = void 0, this.handleMouseEnter = () => {
						this.timer && clearTimeout(this.timer)
					}, this.handleMouseLeave = () => {
						const {
							onCloseTooltip: e
						} = this.props;
						this.timer = setTimeout(e, 700)
					}
				}
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Gr())
				}
				render() {
					const {
						className: e,
						isOpen: t,
						onCloseTooltip: s,
						tooltipId: n
					} = this.props;
					return l.a.createElement(ao, {
						className: Object(h.a)(e, no.a.CoinPurchaseDropdown),
						isFixed: !0,
						isOpen: t,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: n
					}, l.a.createElement("div", {
						className: no.a.header
					}, l.a.createElement("span", {
						className: no.a.headerText
					}, l.a.createElement(ce.c, null, "Give Gold, Silver, Platinum, and more with Coins")), l.a.createElement(en.a, {
						className: no.a.headerLink,
						to: "/coins"
					}, l.a.createElement(ce.c, null, "What are Coins?"))), l.a.createElement(eo, {
						className: no.a.purchaseList,
						onClick: s
					}))
				}
			}
			var oo = Object(re.b)(ro),
				io = s("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				co = s("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			var lo = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				uo = s("./src/reddit/selectors/tooltip.ts"),
				mo = s("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				po = s.n(mo);
			const bo = Object(b.c)({
				activeTooltipId: uo.a,
				coinPurchaseDropdownIsOpen: e => Object(uo.b)("COIN_PURCHASE_DROPDOWN_ID")(e),
				coinPurchaseModalIsOpen: lo.d,
				premiumPurchaseModalIsOpen: lo.q
			});
			var ho = Object(u.b)(bo, (e, t) => ({
					closeTooltip: () => e(Object(ir.h)()),
					toggleTooltip: t => {
						e("COIN_PURCHASE_DROPDOWN_ID" === t ? Object(ir.h)() : Object(ir.f)({
							tooltipId: "COIN_PURCHASE_DROPDOWN_ID"
						}))
					}
				}))(Object(re.b)(e => {
					const {
						activeTooltipId: t,
						className: s,
						closeTooltip: n,
						coinPurchaseDropdownIsOpen: a,
						coinPurchaseModalIsOpen: r,
						premiumPurchaseModalIsOpen: o,
						sendEvent: i,
						toggleTooltip: c
					} = e;
					return l.a.createElement("button", {
						className: Object(h.a)(s, po.a.ctaContainer),
						id: "COIN_PURCHASE_DROPDOWN_ID",
						onClick: () => {
							c(t), (() => Hr = Br()())(), Object(io.b)(), Object(co.b)(), i(Qr("get_coins_cta"))
						}
					}, l.a.createElement("div", {
						className: po.a.ctaContent
					}, l.a.createElement(mn.a, {
						className: po.a.icon
					}), l.a.createElement("span", {
						className: po.a.text
					}, l.a.createElement(ce.c, null, "Get Coins"))), l.a.createElement(oo, {
						isOpen: a,
						onCloseTooltip: n,
						tooltipId: "COIN_PURCHASE_DROPDOWN_ID"
					}), r && l.a.createElement(io.a, {
						isCompletePaypal: !1
					}), o && l.a.createElement(co.a, null))
				})),
				go = s("./src/reddit/components/HeaderIconContainer/index.m.less"),
				fo = s.n(go);

			function xo() {
				return (xo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var vo = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const yo = I.a.button("Button", fo.a),
				Co = I.a.div("Container", fo.a);
			var Oo = e => {
					const {
						children: t,
						isOpen: s
					} = e, n = vo(e, ["children", "isOpen"]);
					return l.a.createElement(yo, xo({}, n, {
						id: e.id,
						onClick: e.onClick
					}), l.a.createElement(Co, {
						className: Object(h.a)({
							[fo.a.isOpen]: s
						})
					}, t))
				},
				Eo = s("./src/chat/helpers/unreadCount.ts"),
				Po = s("./src/chat/models/Promo/index.ts"),
				jo = s("./src/lib/prettyPrintNumber/index.ts"),
				wo = s("./src/reddit/components/HeaderUserActions/index.m.less"),
				Mo = s.n(wo);
			var So = e => {
					let {
						className: t,
						isActive: s,
						unreadCount: n
					} = e;
					return s ? l.a.createElement("span", {
						className: Object(h.a)(t, Mo.a.counter, {
							[Mo.a.isHighlighted]: s && n <= 0
						})
					}, n > 0 && Object(jo.b)(n)) : null
				},
				No = s("./src/reddit/helpers/trackers/chat.ts"),
				Io = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				ko = s("./src/reddit/selectors/chat.ts");
			const _o = Object(b.c)({
				promos: ko.b,
				unreadCount: ko.d
			});
			class To extends d.Component {
				componentDidMount() {
					this.props.promos[Po.a.SubredditChatFtux] && this.props.sendEvent(Object(No.j)())
				}
				render() {
					const {
						promos: e,
						unreadCount: t
					} = this.props, {
						count: s,
						unread: n
					} = Object(Eo.a)(t, e);
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(So, {
						isActive: n,
						unreadCount: s
					}), l.a.createElement(Io.a, {
						className: Object(h.a)(Mo.a.chatIcon, {
							[Mo.a.isActive]: n
						})
					}))
				}
			}
			var Lo = Object(u.b)(_o)(Object(re.b)(To)),
				Fo = s("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				Ro = s.n(Fo);
			var Ao = e => {
				const {
					onCloseFlyout: t
				} = e;
				return l.a.createElement("div", {
					className: Ro.a.container
				}, l.a.createElement("p", {
					className: Ro.a.title
				}, l.a.createElement(Sr.a, {
					msgId: "header.customizeFlyout.title"
				})), l.a.createElement("h5", {
					className: Ro.a.subtitle
				}, l.a.createElement(Sr.a, {
					msgId: "header.customizeFlyout.subtitle"
				})), l.a.createElement("p", {
					className: Ro.a.description
				}, l.a.createElement(Sr.a, {
					msgId: "header.customizeFlyout.description"
				})), l.a.createElement(Ct.i, {
					className: Ro.a.dismissBtn,
					onClick: t
				}, l.a.createElement(Sr.a, {
					msgId: "header.customizeFlyout.dismiss"
				})))
			};
			var Do = e => l.a.createElement(l.a.Fragment, null, l.a.createElement(So, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), l.a.createElement(pn.a, {
					className: Object(h.a)(Mo.a.envelopeIcon, {
						[Mo.a.isUnread]: !!e.unreadCount
					})
				})),
				Bo = s("./src/reddit/actions/alpha.ts"),
				Ho = s("./src/reddit/actions/modMode.ts"),
				Uo = s("./src/reddit/constants/elementClassNames.ts"),
				Vo = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Qo = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Wo = s("./src/reddit/helpers/trackers/modTools.ts");
			const qo = e => ({
				screen: G.screen(e),
				profile: G.profile(e),
				subreddit: G.subreddit(e)
			});
			var Go = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				zo = s("./src/reddit/icons/fonts/Premium/index.tsx"),
				Zo = s("./src/reddit/icons/svgs/Help/index.tsx"),
				Ko = s("./src/reddit/icons/svgs/KarmaGray/index.m.less"),
				Yo = s.n(Ko);
			var Xo = e => l.a.createElement("svg", {
					className: Object(h.a)(Yo.a.karma, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, l.a.createElement("path", {
					d: "M3.37,2.75a5.9,5.9,0,0,1,5.49,3.7.62.62,0,0,1-.29.79A3.16,3.16,0,0,0,7.24,8.57a.63.63,0,0,1-.79.29,5.89,5.89,0,0,1-3.7-5.49A.62.62,0,0,1,3.37,2.75Zm8.06,4.49a.63.63,0,0,1-.29-.79,5.89,5.89,0,0,1,5.49-3.7.61.61,0,0,1,.62.6v0a5.89,5.89,0,0,1-3.7,5.49.62.62,0,0,1-.79-.29A3.16,3.16,0,0,0,11.43,7.24Zm2.12,3.9a5.89,5.89,0,0,1,3.7,5.49.62.62,0,0,1-.62.62h0a5.89,5.89,0,0,1-5.49-3.7.63.63,0,0,1,.29-.79,3.16,3.16,0,0,0,1.33-1.33A.62.62,0,0,1,13.55,11.14Zm-5,1.62a.62.62,0,0,1,.29.79,5.89,5.89,0,0,1-5.49,3.7.62.62,0,0,1-.62-.62h0a5.9,5.9,0,0,1,3.7-5.49.62.62,0,0,1,.79.29,3.1,3.1,0,0,0,1.35,1.33ZM10,5.93A7.23,7.23,0,0,0,7.51,2.82,5,5,0,0,1,9.68.09a.61.61,0,0,1,.64,0,5,5,0,0,1,2.17,2.73A7.23,7.23,0,0,0,10,5.93Zm9.91,3.75a.61.61,0,0,1,0,.64,5,5,0,0,1-2.73,2.17A7.23,7.23,0,0,0,14.07,10a7.36,7.36,0,0,0,3.11-2.49A5,5,0,0,1,19.91,9.68ZM10,14.07a7.18,7.18,0,0,0,2.5,3.11,5,5,0,0,1-2.18,2.73.61.61,0,0,1-.64,0,5,5,0,0,1-2.17-2.73A7.23,7.23,0,0,0,10,14.07ZM5.93,10a7.23,7.23,0,0,0-3.11,2.49A5,5,0,0,1,.09,10.32a.61.61,0,0,1,0-.64A5,5,0,0,1,2.82,7.51,7.23,7.23,0,0,0,5.93,10Z"
				})),
				Jo = e => l.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, l.a.createElement("g", {
					fill: "inherit"
				}, l.a.createElement("path", {
					d: "M15,2 L5,2 C4.447,2 4,2.447 4,3 L4,9 L9.586,9 L8.293,7.707 C7.902,7.316 7.902,6.684 8.293,6.293 C8.684,5.902 9.316,5.902 9.707,6.293 L12.707,9.293 C13.098,9.684 13.098,10.316 12.707,10.707 L9.707,13.707 C9.512,13.902 9.256,14 9,14 C8.744,14 8.488,13.902 8.293,13.707 C7.902,13.316 7.902,12.684 8.293,12.293 L9.586,11 L4,11 L4,17 C4,17.553 4.447,18 5,18 L15,18 C15.553,18 16,17.553 16,17 L16,3 C16,2.447 15.553,2 15,2"
				})));
			var $o = e => l.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, l.a.createElement("path", {
					d: "M10,8 C8.619,8 7.5,9.5 7.5,9.5 C7.5,9.5 8.619,11 10,11 C11.381,11 12.5,9.5 12.5,9.5 C12.5,9.5 11.381,8 10,8 M15.1338,14 L4.8658,14 C4.4818,14 4.2398,13.583 4.4328,13.25 L9.5678,4.357 C9.7598,4.024 10.2398,4.024 10.4328,4.357 L15.5678,13.25 C15.7598,13.583 15.5188,14 15.1338,14 M17.2748,3.038 L10.2748,1.038 C10.0948,0.987 9.9048,0.987 9.7258,1.038 L2.7258,3.038 C2.2958,3.161 1.9998,3.554 1.9998,4 L1.9998,11 C1.9998,16.688 9.4098,18.871 9.7258,18.962 C9.8158,18.987 9.9068,19 9.9998,19 C10.0928,19 10.1848,18.987 10.2748,18.962 C10.5898,18.871 17.9998,16.688 17.9998,11 L17.9998,4 C17.9998,3.554 17.7038,3.161 17.2748,3.038"
				})),
				ei = e => l.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, l.a.createElement("g", {
					fill: "inherit"
				}, l.a.createElement("path", {
					d: "M15,15.5 L5,15.5 C4.724,15.5 4.5,15.276 4.5,15 C4.5,12.755 6.326,10.929 8.571,10.929 L11.429,10.929 C13.674,10.929 15.5,12.755 15.5,15 C15.5,15.276 15.276,15.5 15,15.5 M10,4.5 C11.405,4.5 12.547,5.643 12.547,7.048 C12.547,8.452 11.405,9.595 10,9.595 C8.595,9.595 7.453,8.452 7.453,7.048 C7.453,5.643 8.595,4.5 10,4.5 M16,2 L4,2 C2.897,2 2,2.897 2,4 L2,16 C2,17.103 2.897,18 4,18 L16,18 C17.103,18 18,17.103 18,16 L18,4 C18,2.897 17.103,2 16,2"
				}))),
				ti = e => l.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, l.a.createElement("g", {
					fill: "inherit"
				}, l.a.createElement("path", {
					d: "M15.992 14.898A5.014 5.014 0 0 1 12 10a5.014 5.014 0 0 1 3.992-4.899.998.998 0 0 0 .343-1.819A7.965 7.965 0 0 0 12 2c-4.41 0-8 3.588-8 8 0 4.411 3.59 8 8 8a7.966 7.966 0 0 0 4.335-1.283 1 1 0 0 0-.343-1.819"
				}))),
				si = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				ni = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				ai = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				ri = e => l.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, l.a.createElement("g", {
					fill: "inherit"
				}, l.a.createElement("path", {
					d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
				}))),
				oi = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				ii = s("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				ci = s.n(ii);
			const di = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				li = I.a.wrapped(to.a, "Dropdown", ci.a),
				ui = Object(Fr.a)(li),
				mi = e => l.a.createElement(Qo.a, {
					className: ci.a.button,
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, l.a.createElement("div", {
					className: ci.a.buttonText
				}, e.displayText), l.a.createElement(Vo.a, {
					className: ci.a.toggleSwitch,
					"data-redditstyle": !0,
					on: e.isEnabled
				})),
				pi = Object(u.b)(() => Object(b.c)({
					language: e => e.user.language,
					isModModeEnabled: Qt.t,
					isOpen: Object(uo.b)("USER_DROPDOWN_ID"),
					nightmode: St.V,
					url: Ut.s
				}), e => ({
					toggleNightmode: t => e(Object(T.w)(t)),
					onOptIntoRedesign: () => e(Object(Bo.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (ze.a.get("rseor3") && ze.a.remove("rseor3", {
							domain: k.a.cookieDomain
						}), e(Object(Bo.b)(!0))) : window.location.host = "old.reddit.com"
					},
					dispatchOpenLoginModal: () => e(Object(xr.e)()),
					logoutUser: () => e(Object(Pr.s)()),
					toggleModMode: () => e(Object(Ho.b)())
				}));
			var bi = Object(_n.t)({
					pageLayer: e => e
				})(pi(Object(re.b)(e => {
					const {
						language: t,
						logoutUser: s,
						dispatchOpenLoginModal: n,
						isBlueLayout: a,
						isModModeEnabled: r,
						nightmode: o,
						toggleModMode: i,
						user: c
					} = e, u = Object(Qo.b)(ai.a, Object(sn.a)(t, "headerDropdown.userSettings"), !1), m = Object(Qo.b)(Zo.a, Object(sn.a)(t, "headerDropdown.helpCenter"), !0), p = Object(Qo.b)(si.a, Object(sn.a)(t, "headerDropdown.visitOldReddit"), !0), b = Object(Qo.b)(Jo, Object(sn.a)(t, "headerDropdown.loginSignup")), g = Object(Qo.b)(Jo, Object(sn.a)(t, "headerDropdown.logout")), f = Object(Qo.b)(ri, Object(sn.a)(t, "headerDropdown.optIn"), !1), x = (e => {
						const s = e && e.coins || 0;
						return Object(sn.a)(t, "gold.coinsNum", {
							num: s.toLocaleString()
						})
					})(c), v = Object(Qo.b)(mn.a, Object(sn.a)(t, "headerDropdown.coins"), !1, x), y = Object(Qo.b)(jn.a, Object(sn.a)(t, "headerDropdown.premium"), !1);
					return l.a.createElement("div", {
						className: Object(h.a)(ci.a.container, {
							[ci.a.blue]: a
						}, Uo.f)
					}, l.a.createElement(oi.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(h.a)(e.className, ci.a.inlineButton, {
							[ci.a.dropdownOpen]: e.isOpen
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("user")
						}
					}, l.a.createElement("span", {
						className: ci.a.accountDisplayText
					}, (e => e ? l.a.createElement("span", {
						className: Object(h.a)(ci.a.accountWrapper, ci.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, e.accountIcon && l.a.createElement("img", {
						alt: Object(Ee.c)("Account icon"),
						className: ci.a.imgIcon,
						src: e.accountIcon
					}), l.a.createElement("span", {
						className: ci.a.accountDetails
					}, l.a.createElement("span", {
						className: ci.a.username
					}, e.displayText, e.isGold && l.a.createElement(zo.a, {
						className: ci.a.premiumFontIcon,
						title: Object(Ee.c)("Reddit Premium")
					})), l.a.createElement(l.a.Fragment, null, l.a.createElement("span", {
						className: ci.a.accountKarma
					}, l.a.createElement(Xo, null), l.a.createElement("span", null, (e => {
						const s = e.commentKarma + e.postKarma,
							n = Object(jo.b)(s);
						return Object(sn.a)(t, "account.karmaTotal", {
							karma: n
						})
					})(e))), !!e.coins && l.a.createElement("span", {
						className: ci.a.accountCoins
					}, l.a.createElement(Go.a, {
						className: ci.a.coinFontIcon
					}), l.a.createElement("span", null, (e => Object(jo.b)(e.coins || 0))(e)))))) : l.a.createElement("span", {
						className: Object(h.a)(ci.a.accountWrapper, ci.a.isLoggedOut)
					}, l.a.createElement(ni.a, {
						className: ci.a.myProfileIcon
					})))(e.user), l.a.createElement(Aa.b, {
						className: ci.a.dropdownTriangle
					})), l.a.createElement(tr.a, null, l.a.createElement(ce.c, null, "User account menu"))), l.a.createElement(ui, {
						isFixed: !0,
						isOpen: e.isOpen,
						tooltipId: "USER_DROPDOWN_ID"
					}, c && l.a.createElement(d.Fragment, null, l.a.createElement("h3", {
						className: ci.a.sectionHeader,
						role: "heading"
					}, l.a.createElement(ce.c, null, "My Stuff")), ((e, t) => {
						const s = Object(sn.a)(t, "headerDropdown.myProfile"),
							n = Object(Qo.b)(ei, s, !1);
						return l.a.createElement(n, {
							href: e.url
						})
					})(c, t), l.a.createElement(u, {
						href: "/settings"
					})), l.a.createElement("h3", {
						className: ci.a.sectionHeader,
						role: "heading"
					}, l.a.createElement(ce.c, null, "View Options")), c && c.isMod && l.a.createElement(mi, {
						displayText: Object(Ee.c)("Mod Mode"),
						isEnabled: r,
						onClick: () => {
							e.sendEvent(Object(Wo.h)(!r)), i()
						}
					}, l.a.createElement($o, {
						className: ci.a.modModeIcon
					})), l.a.createElement(mi, {
						displayText: "Night Mode",
						isEnabled: o,
						onClick: () => {
							e.sendEvent((e => t => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: e ? "night_mode_off" : "night_mode_on"
							}, qo(t)))(o)), e.toggleNightmode(!o)
						}
					}, l.a.createElement(ti, {
						className: ci.a.nightIcon
					})), l.a.createElement("h3", {
						className: ci.a.sectionHeader,
						role: "heading"
					}, l.a.createElement(ce.c, null, "More Stuff")), l.a.createElement(d.Fragment, null, l.a.createElement(v, {
						href: "/coins",
						onClick: () => {
							Ea.f(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "coins",
								correlationId: Ea.e()
							}, qo(e)))())
						}
					}), l.a.createElement(y, {
						href: "/premium",
						onClick: () => {
							Pa.g(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "premium",
								correlationId: Pa.f()
							}, qo(e)))())
						}
					})), l.a.createElement(m, {
						href: "https://www.reddithelp.com"
					}), c && l.a.createElement(p, {
						href: "https://old.reddit.com" + e.url,
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: G.screen(e),
								subreddit: G.subreddit(e)
							}))
						}
					}), !di && c && l.a.createElement(f, {
						href: "",
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_opt_in",
								screen: G.screen(e),
								subreddit: G.subreddit(e)
							})), e.onOptIntoRedesign()
						}
					}), l.a.createElement("div", {
						className: ci.a.divider
					}), c ? l.a.createElement(g, {
						href: "#",
						onClick: e => {
							s(), e.preventDefault()
						}
					}) : l.a.createElement(b, {
						href: "#",
						onClick: t => {
							Object(C.a)(t) && (t.preventDefault(), t.stopPropagation(), n(), e.sendEvent(Object(vr.b)()))
						}
					})))
				}))),
				hi = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				gi = s("./src/reddit/helpers/trackers/navigation.ts");
			const fi = "HeaderUserActions--Chat",
				xi = "email-verification-tooltip-id",
				vi = "HeaderUserActions--Messages",
				yi = "HeaderUserActions--Moderation",
				Ci = "HeaderUserActions--NewPost",
				Oi = Object(_n.t)({
					pageLayer: e => e
				}),
				Ei = Object(b.c)({
					activeDropdownId: uo.a,
					email: St.l,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isModerator: Mt.h,
					shouldOpenEmailVerificationTooltip: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(_n.J)(s) && !!Object(St.l)(e) && !Object(St.x)(e) && Object(St.K)(e) && !Object(St.I)(e)
					},
					unreadNotifications: St.hb
				}),
				Pi = Object(u.b)(Ei, (e, t) => ({
					closeEmailVerificationTooltip: () => e(Object(Or.b)()),
					onChatClick: () => e(Object(Cr.c)()),
					onDismissCustomizeFlyout: () => e(Object(T.s)()),
					onOpenModerationDropdown: () => e(Object(ir.g)({
						tooltipId: hi.a
					})),
					onOpenUserDropdown: () => e(Object(ir.g)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleChangeEmailModal: () => {
						e(Object(Or.b)()), e(Object(Ke.i)(jr.a))
					},
					toggleTooltip: t => e(Object(ir.g)({
						tooltipId: t
					})),
					resendEmail: () => e(Object(Pr.y)(Nr.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Er.p(t.pageLayer))
					}
				}));
			class ji extends l.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => this.props.sendEvent(Object(gi.e)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}
				}
				render() {
					const {
						activeDropdownId: e,
						className: t,
						closeEmailVerificationTooltip: s,
						email: n,
						isBlueLayout: a,
						isCustomizeFlyoutShowing: r,
						isEmailVerificationTooltipShowing: o,
						isModerator: i,
						language: c,
						onDismissCustomizeFlyout: u,
						onOpenUserDropdown: m,
						resendEmail: p,
						shouldOpenEmailVerificationTooltip: b,
						toggleTooltip: g,
						toggleChangeEmailModal: f,
						unreadNotifications: x,
						user: v
					} = this.props, y = !(!x || !x.hasUnreadModmail && !x.hasUnreadOldModmail), C = (e, t) => l.a.createElement(cr.c, {
						caretOnTop: !0,
						tooltipId: e,
						text: t
					});
					return l.a.createElement(Et.a, {
						id: xi,
						ref: e => this.container = e,
						className: t
					}, l.a.createElement(Et.a, {
						className: Mo.a.headerLinks
					}, i && l.a.createElement(d.Fragment, null, l.a.createElement("span", {
						className: Mo.a.iconWrapper,
						id: yi,
						key: yi,
						onMouseEnter: () => g(yi),
						onMouseLeave: () => e === yi && g(yi)
					}, l.a.createElement(Oo, {
						"aria-expanded": e === hi.a,
						"aria-haspopup": !0,
						"aria-label": Object(Ee.c)("Moderation"),
						id: hi.a,
						onClick: this.onOpenModerationDropdown,
						isOpen: e === hi.a
					}, l.a.createElement(vn.a, {
						className: Object(h.a)(Mo.a.moderateIcon, {
							[Mo.a.isLit]: y
						})
					})), C(yi, Object(sn.a)(c, "header.moderation"))), l.a.createElement(hi.b, {
						className: Mo.a.moderationDropdown,
						isOpen: e === hi.a,
						key: hi.a,
						unreadNotifications: x,
						sendEventWithName: this.sendEventWithName
					})), v && l.a.createElement(d.Fragment, null, l.a.createElement("span", {
						className: Mo.a.iconWrapper,
						id: fi,
						key: fi,
						onMouseEnter: () => g(fi),
						onMouseLeave: () => e === fi && g(fi)
					}, l.a.createElement("a", {
						className: Mo.a.link,
						href: "".concat(k.a.redditUrl, "/chat"),
						onClick: Object(yr.a)(this.onClickChat)
					}, l.a.createElement(Lo, null)), C(fi, Object(sn.a)(c, "header.chat"))), l.a.createElement("span", {
						className: Mo.a.iconWrapper,
						id: vi,
						key: vi,
						onMouseEnter: () => g(vi),
						onMouseLeave: () => e === vi && g(vi)
					}, l.a.createElement("a", {
						className: Mo.a.link,
						href: x && x.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: this.onClickMail
					}, l.a.createElement(Do, {
						unreadCount: x && x.inboxCount || 0
					})), C(vi, Object(sn.a)(c, "header.messages"))), l.a.createElement("span", {
						className: Mo.a.iconWrapper,
						id: Ci,
						key: Ci,
						onMouseEnter: () => g(Ci),
						onMouseLeave: () => e === Ci && g(Ci)
					}, l.a.createElement("button", {
						className: Mo.a.link,
						"aria-label": Object(Ee.c)("Create Post"),
						onClick: this.onClickCreatePost
					}, l.a.createElement(Pn.a, {
						className: Mo.a.postIcon
					})), C(Ci, Object(sn.a)(c, "header.newPost"))), l.a.createElement("span", {
						className: Mo.a.iconWrapper
					}, l.a.createElement(ho, null)))), l.a.createElement(bi, {
						className: Mo.a.headerUserDropdown,
						isBlueLayout: a,
						onClick: m,
						user: v,
						sendEventWithName: this.sendEventWithName
					}), r && l.a.createElement(Ao, {
						onCloseFlyout: u
					}), l.a.createElement(Lr, {
						closeTooltip: s,
						email: n,
						isOpen: b && o,
						resendEmail: p,
						toggleChangeEmailModal: f,
						tooltipId: xi
					}), l.a.createElement(wr, {
						email: n,
						language: c,
						shouldOpenTooltip: b
					}))
				}
			}
			var wi = Object(re.b)(Oi(Pi(ji))),
				Mi = s("./src/reddit/components/Header/User/index.m.less"),
				Si = s.n(Mi);
			const Ni = Object(b.c)({
					account: e => e.user.account,
					language: e => e.user.language,
					origin: W.g
				}),
				Ii = l.a.memo(e => l.a.createElement("div", {
					className: Object(h.a)(e.className, Si.a.row, {
						[Si.a.blue]: e.isBlueLayout
					})
				}, !e.account && function(e) {
					const t = e.pageLayer,
						s = k.a.accountManagerOrigin,
						n = t ? t.url : "/",
						a = t && t.meta && t.meta.name === g.yb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + n);
					return l.a.createElement("div", {
						className: Object(h.a)(Si.a.loggedOutRow, {
							[Si.a.blue]: e.isBlueLayout
						})
					}, l.a.createElement(Ct.j, {
						redditStyle: !0,
						className: Object(h.a)(Si.a.login, Si.a.button),
						href: "".concat(s, "/login/?dest=").concat(a),
						onClick: t => {
							Object(C.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenLoginModal(), e.sendEvent(Object(vr.a)("nav")))
						}
					}, l.a.createElement(ce.c, null, "log in")), l.a.createElement(Ct.g, {
						redditStyle: !0,
						className: Object(h.a)(Si.a.separator, Si.a.register, Si.a.button),
						href: "".concat(s, "/register/?dest=").concat(a),
						onClick: t => {
							Object(C.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenRegisterModal(), e.sendEvent(Object(vr.c)("nav")))
						}
					}, l.a.createElement(ce.c, null, "sign up")))
				}(e), l.a.createElement(wi, {
					className: Object(h.a)({
						[Si.a.loggedOut]: !e.account
					}),
					isBlueLayout: e.isBlueLayout,
					language: e.language,
					user: e.account
				})));
			var ki = Object(_n.t)()(Object(u.b)(Ni, e => ({
					onOpenLoginModal: () => {
						e(Object(Ke.k)({
							actionSource: Ke.a.HeaderLogin
						})), e(Object(xr.e)())
					},
					onOpenRegisterModal: () => {
						e(Object(Ke.k)({
							actionSource: Ke.a.HeaderSignup
						})), e(Object(xr.f)())
					}
				}))(Object(re.b)(Ii))),
				_i = s("./src/reddit/components/Header/index.m.less"),
				Ti = s.n(_i);

			function Li() {
				return (Li = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Fi = I.a.header("HeaderDynamicStyles", Ti.a),
				Ri = Object(b.c)({
					categoriesPlacementVariant: rr.g,
					exploreV2Variant: e => Object(Tn.a)(e, {
						expEventOverride: !1
					}),
					generalCleanupVariant: or.a,
					isLoggedIn: St.K,
					isM2MEnabled: q.w,
					isNightmode: St.V,
					language: e => e.user.language,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Ai = Object(_n.t)({
					categoryName: _n.b,
					isExplore: _n.x,
					pageLayer: e => e
				}),
				Di = e => l.a.createElement("div", {
					className: Ti.a.left
				}, l.a.createElement(tr.a, null, l.a.createElement(ce.c, null, "Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts")), l.a.createElement(er.b, null), l.a.createElement(en.a, {
					"aria-label": Object(Ee.c)("Home"),
					className: Ti.a.centeredRow,
					to: "/",
					onClick: e.onReloadFrontpage
				}, l.a.createElement(nr.a, {
					className: Ti.a.snoo
				}), l.a.createElement(ar.a, {
					className: Ti.a.wordmark
				})), e.children),
				Bi = e => l.a.createElement("div", {
					className: Ti.a.right
				}, e.children, l.a.createElement(ki, {
					isBlueLayout: e.isBlue,
					isExplore: e.isExplore
				})),
				Hi = e => l.a.createElement("div", {
					className: Ti.a.layout
				}, l.a.createElement(Di, Li({}, e, {
					isBlue: e.isBlue,
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), l.a.createElement(Qa, {
					isBlueLayout: e.isBlue
				}), l.a.createElement(sr.a, {
					className: Ti.a.search
				})), l.a.createElement(Bi, {
					isBlue: e.isBlue
				}, l.a.createElement(fr, {
					className: Ti.a.quickLinks,
					isBlueLayout: e.isBlue
				}))),
				Ui = e => l.a.createElement("div", {
					className: Ti.a.layout
				}, l.a.createElement(Di, Li({}, e, {
					isBlue: e.isBlue,
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), e.isM2MEnabled && l.a.createElement($a, null), l.a.createElement("div", {
					className: Object(h.a)(Ti.a.searchContainer, !!e.generalCleanupVariant && Ti.a.cleanup)
				}, l.a.createElement(sr.a, {
					className: Ti.a.search
				}))), l.a.createElement(Bi, {
					isBlue: e.isBlue
				})),
				Vi = e => {
					const t = !!e.categoryName || !Object(Tn.e)(e.exploreV2Variant);
					return l.a.createElement("div", {
						className: Ti.a.layout
					}, l.a.createElement(Di, Li({}, e, {
						isBlue: e.isBlue,
						language: e.language,
						onReloadFrontpage: e.onReloadFrontpage
					}), l.a.createElement(Qa, {
						isBlueLayout: e.isBlue
					}), t && l.a.createElement("div", {
						className: Object(h.a)(Ti.a.searchContainer, Ti.a.explore)
					}, l.a.createElement(sr.a, {
						className: Ti.a.search
					}))), l.a.createElement(Bi, {
						isBlue: e.isBlue,
						isExplore: !0
					}))
				};
			var Qi = Ai(Object(u.b)(Ri, e => ({
					onReloadFrontpage: () => e(Object(tn.y)(!0))
				}))((function(e) {
					let t;
					t = e.isM2MEnabled && !e.isLoggedIn || Object(or.c)(e.generalCleanupVariant) ? Ui : e.isExplore ? Vi : Hi;
					const s = Object(rr.c)(e.categoriesPlacementVariant) && !e.isNightmode;
					return l.a.createElement(Fi, {
						"data-redditstyle": !0,
						className: Object(h.a)(Ti.a.container, e.className, {
							[Ti.a.bladeIsOpen]: e.isBladeOpen,
							[Ti.a.blue]: s
						})
					}, l.a.createElement(t, {
						categoryName: e.categoryName,
						exploreV2Variant: e.exploreV2Variant,
						generalCleanupVariant: e.generalCleanupVariant,
						isBlue: s,
						isM2MEnabled: e.isM2MEnabled,
						language: e.language,
						onReloadFrontpage: e.onReloadFrontpage
					}))
				}))),
				Wi = s("./src/reddit/components/LightboxHeader/index.tsx");
			const qi = () => null;
			var Gi = Object(P.a)({
					ErrorComponent: qi,
					getComponent: () => Object(j.a)(() => s.e("MonthsToMinutes").then(s.bind(null, "./src/reddit/components/M2M/ACBanner/index.tsx"))).then(e => e.default),
					LoadingComponent: qi
				}),
				zi = s("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Zi = s("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Ki = s.n(Zi);
			const Yi = Object(u.b)(null, e => ({
				onUnpinSubscriptions: () => e(Object(O.j)())
			}));
			var Xi = I.a.wrapped(Yi((function(e) {
					return l.a.createElement("div", {
						"data-redditstyle": !0,
						className: e.className
					}, l.a.createElement("div", {
						className: Ki.a.title
					}, l.a.createElement(oa, {
						className: Ki.a.listHeader
					}, l.a.createElement(ce.c, null, "My Communities")), l.a.createElement("div", {
						className: Ki.a.unpin,
						onClick: e.onUnpinSubscriptions
					}, l.a.createElement(U.a, {
						className: Ki.a.icon
					}))), l.a.createElement(La, null))
				})), "Component", Ki.a),
				Ji = s("./src/reddit/components/ThemeProvider/index.tsx"),
				$i = s("./src/reddit/actions/toaster.ts");
			const ec = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				tc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, G.actionInfo(t), {
						reason: "primary"
					})
				}),
				sc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, G.actionInfo(t), {
						reason: "secondary"
					})
				});
			var nc = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				ac = s("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				rc = s("./src/reddit/models/Toast/index.ts"),
				oc = s("./src/reddit/selectors/structuredStyles.ts"),
				ic = s("./src/reddit/components/Toaster/PlainBread.m.less"),
				cc = s.n(ic);

			function dc() {
				return (dc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var lc = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const uc = e => {
				const t = gn.a;
				switch (e.kind) {
					case rc.b.Error:
					case rc.b.AuthError:
						return t.warning;
					case rc.b.SuccessCommunity:
						return t.op;
					case rc.b.SuccessCommunityGreen:
					case rc.b.SuccessMod:
						return t.approved;
					case rc.b.EuCookiePolicy:
					case rc.b.UappBanner:
					case rc.b.Undo:
					default:
						return t.op
				}
			};
			class mc extends l.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const e = this.props,
						{
							kind: t,
							sendEvent: s
						} = e,
						n = lc(e, ["kind", "sendEvent"]);
					return l.a.createElement("div", n)
				}
			}
			const pc = I.a.wrapped(mc, "PlainBread", cc.a);
			var bc = e => l.a.createElement(pc, dc({}, e, {
					style: Object.assign({}, e.style || {}, {
						"--Toaster-indicatorColor": uc(e)
					})
				})),
				hc = s("./src/reddit/components/Toaster/StyledComponents.m.less"),
				gc = s.n(hc);
			const fc = I.a.span("Text", gc.a);
			var xc = s("./src/reddit/components/Toaster/index.m.less"),
				vc = s.n(xc);
			const {
				fbt: yc
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Cc = I.a.wrapped(nc.a, "AuthErrorToastIcon", vc.a), Oc = I.a.wrapped(Ct.f, "AuthErrorToastPrimaryButton", vc.a);
			class Ec extends l.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), window.location.reload(!0)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return l.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, l.a.createElement(bc, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, l.a.createElement(Cc, null), l.a.createElement(fc, null, yc._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), l.a.createElement(Oc, {
						type: "submit"
					}, yc._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Pc = Ec;
			const jc = 3;
			var wc = s("./src/lib/permanentCookieOptions.ts"),
				Mc = s("./src/reddit/controls/Link/index.tsx"),
				Sc = s("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Nc = s.n(Sc);
			const {
				fbt: Ic
			} = s("./node_modules/fbt/lib/FbtPublic.js"), kc = I.a.div("Icon", Nc.a), _c = () => l.a.createElement(kc, {
				style: {
					backgroundImage: "url(".concat(k.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), Tc = I.a.wrapped(Ct.f, "PrimaryButton", Nc.a), Lc = I.a.wrapped(bc, "Bread", Nc.a);
			class Fc extends l.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), ze.a.set(Wt.b, jc.toString(), Object(wc.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return l.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, l.a.createElement(Lc, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, l.a.createElement(_c, null), l.a.createElement(fc, null, Ic._("Cookies help us deliver our Services. By using our Services or clicking I agree, you agree to our use of cookies.", null, {
						hk: "31CdDx"
					}), " ", l.a.createElement(Mc.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Ic._("Learn More", null, {
						hk: "1fsN6Z"
					})), "."), l.a.createElement(Tc, {
						type: "submit"
					}, Ic._("I Agree", null, {
						hk: "33M4qf"
					}))))
				}
			}
			var Rc, Ac = Fc;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Rc || (Rc = {}));
			var Dc = s("./src/reddit/controls/Typography/index.tsx"),
				Bc = s("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Hc = s.n(Bc);

			function Uc() {
				return (Uc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Vc = I.a.div("Container", Hc.a),
				Qc = I.a.img("SideImage", Hc.a),
				Wc = I.a.div("Main", Hc.a),
				qc = I.a.div("SubTitle", Hc.a),
				Gc = Dc.c,
				zc = I.a.wrapped(Ct.g, "PrimaryLinkButton", Hc.a),
				Zc = I.a.wrapped(U.a, "CloseIcon", Hc.a);
			class Kc extends l.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(tc(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(ec(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: s,
						style: n,
						subTitle: a,
						title: r
					} = this.props;
					return l.a.createElement(Vc, {
						key: t,
						style: Object.assign({}, n, {
							transform: "\n            translateY(".concat(n.y, "px)\n            scale(").concat(n.x, ", ").concat(n.x, ")\n          ")
						})
					}, l.a.createElement(Zc, {
						onClick: this.props.onClose
					}), l.a.createElement(Qc, {
						srcSet: s
					}), l.a.createElement(Wc, null, l.a.createElement(qc, null, a), l.a.createElement(Dc.d, null, r), l.a.createElement(Gc, null, e), l.a.createElement(zc, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, Dn.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Yc = Object(u.b)(null, e => ({
					onSignup: () => e(Object(xr.f)())
				}))(Object(re.b)(Kc)),
				Xc = "".concat(Jc("subscribe-cap.png"), " 1x,\n  ").concat(Jc("subscribe-cap@2x.png"), " 2x,");

			function Jc(e) {
				return "".concat(k.a.assetPath, "/img/banner/").concat(e)
			}
			const $c = 3,
				ed = e => "".concat(e, ":").concat(152721e4);
			var td = s("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				sd = s.n(td);
			const {
				fbt: nd
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ad = I.a.div("Icon", sd.a), rd = () => l.a.createElement(ad, {
				style: {
					backgroundImage: "url(".concat(k.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), od = I.a.wrapped(Ct.f, "PrimaryButton", sd.a), id = I.a.wrapped(bc, "Bread", sd.a);
			class cd extends l.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), ze.a.set(Wt.j, ed($c), Object(wc.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return l.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, l.a.createElement(id, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, l.a.createElement(rd, null), l.a.createElement(fc, null, nd._("Reddit is updating its {=User Agreement} and {=Privacy Policy}.", [nd._param("=User Agreement", l.a.createElement(Mc.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, nd._("User Agreement", null, {
						hk: "3YDd1R"
					}))), nd._param("=Privacy Policy", l.a.createElement(Mc.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, nd._("Privacy Policy", null, {
						hk: "4EAMzY"
					})))], {
						hk: "1Oj4Vk"
					}), " "), l.a.createElement(od, {
						type: "submit"
					}, nd._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var dd = cd;

			function ld() {
				return (ld = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ud = [],
				md = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				pd = {
					opacity: .5,
					x: .5,
					y: 50
				},
				bd = {
					opacity: Object(N.spring)(0),
					x: Object(N.spring)(.6),
					y: Object(N.spring)(80, md)
				},
				hd = I.a.wrapped(nc.a, "SnooFacepalm", vc.a),
				gd = I.a.wrapped(ac.a, "SnooHappy", vc.a),
				fd = I.a.wrapped(dn.b, "SubredditIcon", vc.a),
				xd = I.a.div("Container", vc.a),
				vd = I.a.wrapped(U.a, "Close", vc.a),
				yd = e => l.a.createElement(l.a.Fragment, null, l.a.createElement(vd, ld({
					className: "CloseIcon"
				}, e))),
				Cd = I.a.wrapped(bc, "Bread", vc.a),
				Od = Object(b.c)({
					subredditIcon: oc.c,
					toastSlices: e => e.toaster
				}),
				Ed = Object(u.b)(Od, e => ({
					dismissToast: t => () => e(Object($i.f)(t)),
					onButtonClick: (t, s) => () => {
						e(t), e(Object($i.f)(s))
					}
				}));
			class Pd extends l.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => jd(e, this.props.toastSlices), this.getWillEnterStyles = () => pd, this.getWillLeaveStyles = () => bd
				}
				render() {
					return this.props.toastSlices.length ? l.a.createElement(N.TransitionMotion, {
						defaultStyles: ud,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => l.a.createElement(xd, null, e.map(e => {
						const t = e.data,
							s = Object.assign({}, e.style, {
								transform: "\n                  translateY(".concat(e.style.y, "px)\n                  scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n                ")
							});
						if (t.kind === rc.b.Custom && void 0 !== t.customToastType) {
							const n = Md[t.customToastType];
							return l.a.createElement(n, {
								key: e.key,
								toast: t,
								style: s,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === rc.b.UappBanner) return l.a.createElement(dd, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === rc.b.EuCookiePolicy) return l.a.createElement(Ac, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === rc.b.AuthError) return l.a.createElement(Pc, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						const n = t.kind === rc.b.Modal ? Ct.f : Ct.n,
							a = t.kind === rc.b.Modal ? Ct.i : Ct.n;
						return l.a.createElement(Cd, {
							className: t.kind === rc.b.Modal ? vc.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(ec(t.name)) : void 0,
							style: s
						}, l.a.createElement("div", {
							className: vc.a.ContentWrapper
						}, wd(t, this.props.subredditIcon), l.a.createElement(fc, null, t.text)), l.a.createElement("div", {
							className: vc.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && l.a.createElement(n, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(tc(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && l.a.createElement(a, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(sc(t.name))
							}
						}, t.secondButtonText)), l.a.createElement(yd, {
							onClick: this.props.dismissToast(t.id)
						}))
					}))) : null
				}
			}
			const jd = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(N.spring)(1),
							x: Object(N.spring)(1, md),
							y: Object(N.spring)(0, md)
						}
					}))
				},
				wd = (e, t) => {
					switch (e.kind) {
						case rc.b.Error:
							return l.a.createElement(hd, null);
						case rc.b.SuccessCommunity:
						case rc.b.SuccessCommunityGreen:
							return l.a.createElement(gd, null);
						case rc.b.SuccessMod:
							return l.a.createElement(fd, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				Md = {
					[rc.a.subscribeCap]: e => l.a.createElement(Yc, Uc({
						name: Rc.LoggedOutMaxSubscriptions,
						sideImage: Xc,
						title: Dn.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: Dn.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Sd = Ed(Object(re.b)(Pd)),
				Nd = s("./src/reddit/featureFlags/profileCollections.ts"),
				Id = s("./src/reddit/helpers/trackers/banners.ts"),
				kd = s("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				_d = s.n(kd);
			var Td = I.a.div("Wrapper", _d.a),
				Ld = s("./src/reddit/components/AlertBanner/index.m.less"),
				Fd = s.n(Ld);
			const Rd = () => l.a.createElement(Td, {
					className: Object(h.a)(Fd.a.wrapper, Fd.a.suspended)
				}, l.a.createElement("span", null, l.a.createElement(ce.c, null, "Your account has been suspended."), " "), l.a.createElement("a", {
					className: Fd.a.underlineLink,
					href: "https://www.reddithelp.com/en/node/851"
				}, l.a.createElement(ce.c, null, "Learn more"))),
				Ad = () => l.a.createElement(Td, {
					className: Object(h.a)(Fd.a.wrapper, Fd.a.fpr)
				}, l.a.createElement("span", null, l.a.createElement(ce.c, null, "Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password."), " "), l.a.createElement("a", {
					className: Fd.a.underlineLink,
					href: "https://www.reddithelp.com/en/categories/using-reddit/your-reddit-account/my-account-was-disabled"
				}, l.a.createElement(ce.c, null, "Learn more"))),
				Dd = e => {
					let {
						updateLink: t,
						onClickOldReddit: s
					} = e;
					return l.a.createElement(Td, {
						className: Object(h.a)(Fd.a.wrapper, Fd.a.deprecated)
					}, l.a.createElement("span", null, l.a.createElement(ce.c, null, "Looks like you're using new Reddit on an old browser. The site may not work properly if you don't"), " "), l.a.createElement(Bd, {
						link: t
					}, l.a.createElement(ce.c, null, "update your browser")), l.a.createElement("span", null, "!  ", l.a.createElement(ce.c, null, "If you do not update your browser, we suggest you visit"), " "), l.a.createElement("a", {
						className: Fd.a.underlineLink,
						href: k.a.oldRedditUrl,
						onClick: s
					}, l.a.createElement(ce.c, null, "old reddit")), l.a.createElement("span", null, "."))
				},
				Bd = e => {
					let {
						children: t,
						link: s
					} = e;
					return null !== s ? l.a.createElement("a", {
						className: Fd.a.underlineLink,
						href: s
					}, t) : l.a.createElement("span", null, t)
				};
			class Hd extends l.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(Id.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(Id.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: s
					} = this.props;
					return e && e.isDeprecated ? l.a.createElement(Dd, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? l.a.createElement(Ad, null) : s ? l.a.createElement(Rd, null) : null
				}
			}
			var Ud = Object(re.b)(Hd),
				Vd = s("./src/reddit/components/AlertBanner/heights.ts"),
				Qd = s("./src/reddit/constants/componentSizes.ts"),
				Wd = s("./src/reddit/constants/elementIds.ts"),
				qd = s("./src/reddit/constants/posts.ts"),
				Gd = s("./src/reddit/contexts/InsideOverlay.tsx"),
				zd = s("./src/reddit/contexts/Language.tsx"),
				Zd = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				Kd = s("./src/reddit/helpers/postCollection.ts"),
				Yd = s("./src/reddit/models/Theme/index.ts"),
				Xd = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				Jd = s("./src/reddit/selectors/notificationBanner.ts"),
				$d = s("./src/reddit/selectors/posts.ts"),
				el = s("./src/reddit/components/AppRouter/index.m.less"),
				tl = s.n(el);

			function sl() {
				return (sl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return ol
			}));
			var nl = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const al = e => {
					var {
						className: t,
						shouldDisplayPinnedSubscriptions: s
					} = e, n = nl(e, ["className", "shouldDisplayPinnedSubscriptions"]);
					return l.a.createElement("div", sl({
						className: Object(h.a)(tl.a.main, {
							[tl.a.mShowingPaddedPinnedDescriptions]: s
						}, t)
					}, n))
				},
				rl = Object(f.a)(e => {
					var {
						className: t,
						theme: s
					} = e, n = nl(e, ["className", "theme"]);
					const a = Object(le.a)(Object.assign({
						theme: s
					}, n));
					return l.a.createElement("div", sl({
						className: Object(h.a)(tl.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(Yd.g)(a.canvas, a.canvasImgUrl, a.canvasImgPosition)
						}
					}, n))
				}),
				ol = e => {
					var {
						className: t,
						divRef: s
					} = e, n = nl(e, ["className", "divRef"]);
					return l.a.createElement("div", sl({
						className: Object(h.a)(tl.a.lightboxHeaderWrapper, t)
					}, n, {
						ref: s
					}))
				},
				il = Object(u.b)(() => Object(b.c)({
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(Q.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: St.t,
					language: e => e.user.language,
					isLoggedIn: St.K,
					isSubscriptionsPinned: Ba.b,
					isSuspended: St.P,
					isFPR: St.I,
					isM2MTopBannerVariant: Xd.c,
					posts: $d.L,
					profileCollectionsEnabled: Nd.a,
					shouldRedirectToHome: e => Object(q.z)(e) && Object(Xd.d)(Object(Xd.f)(e)),
					showAccountCompletenessBanner: e => Object(Xd.c)(e) && Object(q.k)(e),
					showEmailCollectionBanner: Object(Jd.a)(zi.a.EmailCollectionBannerId)
				}), e => ({
					goToHome: () => e(Object(E.b)({
						shouldPrepareData: !1
					})),
					onClickOutsideOverlay: t => e(Object(p.b)(t)),
					onUnpinSubscriptions: () => e(Object(O.j)())
				})),
				cl = (e, t) => !(!e.state || !e.state[R.a.IsOverlay] || t === e),
				dl = (e, t) => {
					const {
						key: s
					} = e, n = nl(e, ["key"]), {
						key: r
					} = t, o = nl(t, ["key"]);
					return a()(n, o)
				};
			class ll extends l.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.shouldRedirectToHome = !1, this.resizeHandler = c()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Qd.m && this.props.onUnpinSubscriptions()
					}, g.F), this.onClickOutsideOverlay = e => {
						this.shouldRedirectToHome ? (this.shouldRedirectToHome = !1, this.props.goToHome()) : this.props.onClickOutsideOverlay(e)
					}, this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: s
						} = this.props;
						if (Object(_n.w)(e)) {
							const n = e && e.urlParams && e.urlParams.partialPostId,
								a = "".concat(g.vb.Post, "_").concat(n),
								r = t && n && t[a],
								o = r && r.belongsTo.type === qd.a.PROFILE;
							return !(!r || !Object(Kd.a)(r) || o && !s)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(Q.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler)
				}
				componentWillUpdate(e) {
					const {
						location: t,
						shouldRedirectToHome: s,
						showAccountCompletenessBanner: n
					} = this.props, a = t.state && t.state[R.a.IsOverlay], r = dl(this.previousLocation, e.location), o = dl(this.previousLocation, this.props.location), i = a ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: s
						} = i, n = t && (t.name === g.yb.INDEX || t.name === g.yb.SUBREDDIT && s.subredditName === A.b.Popular), a = Object(Q.c)(this.props.frontpageSignupVariant), r = Object(Q.c)(e.frontpageSignupVariant);
						n || a || !r ? a && !r && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || a || r || o || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), s && !a && n && e.location.state && e.location.state[R.a.IsOverlay] && (this.shouldRedirectToHome = !0);
					const c = cl(e.location, this.previousLocation);
					v.a.write(() => {
						document.body.style.overflow = c ? "hidden" : ""
					})
				}
				render() {
					const {
						currentPage: e,
						frontpageSignupVariant: t,
						hasInvalidSession: s,
						isFPR: n,
						isLoggedIn: a,
						isM2MTopBannerVariant: r,
						isSubscriptionsPinned: i,
						isSuspended: c,
						language: u,
						location: m,
						routes: p,
						showAccountCompletenessBanner: b,
						showEmailCollectionBanner: h
					} = this.props, {
						isSignupUpsellDisplayed: f,
						isSignupUpsellHidden: x
					} = this.state, v = this.context, y = cl(m, this.previousLocation);
					m.state && m.state[R.a.IsOverlay] && !y ? m.state[R.a.IsOverlay] = !1 : m.state && (this.previousLocation === m || m.state[R.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[R.a.CloseLocation] && this.previousLocation.state[R.a.CloseLocation] === m.state[R.a.CloseLocation] ? m.state[R.a.CloseLocation] = Object.assign({}, this.previousLocation, {
						state: o()(this.previousLocation.state, R.a.CloseLocation)
					}) : m.state[R.a.CloseLocation] = this.previousLocation);
					const C = dl(this.previousLocation, m),
						O = y || C ? this.previousLocation : m,
						E = y || C ? this.previousPage : e,
						P = !(!(E && E.meta && E.meta.name === g.yb.SEARCH_RESULTS && E && E.queryParams) || E.queryParams[D.p]),
						j = !(!E || !E.meta || E.meta.name !== g.yb.MODERATION_PAGES),
						M = Object(_n.w)(E),
						S = this.getIsPostCollection(),
						N = r && b,
						I = f && !x;
					return s ? Object(Ee.c)("Sorry, we have failed you. Try refreshing!") : l.a.createElement(zd.a.Provider, {
						value: u
					}, l.a.createElement(_n.a.Provider, {
						value: E
					}, l.a.createElement(er.c, {
						isOverlayOpen: y
					}, l.a.createElement(Ji.a, {
						forceRedditTheme: P
					}, f && l.a.createElement(qe, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), l.a.createElement(ul, {
						browserInfo: v,
						isFPR: n,
						isInline: I,
						isSuspended: c
					})), l.a.createElement(Gd.a.Provider, {
						value: !1
					}, l.a.createElement(Ji.a, {
						forceRedditTheme: P || j,
						isCommentsPage: M
					}, l.a.createElement(ml, {
						frontpageSignupVariant: t,
						isCommentsPage: M,
						isInline: I,
						isLoggedIn: a,
						isSubscriptionsPinned: i,
						location: O,
						overlayIsOpen: y,
						page: E,
						routes: p,
						showEmailCollectionBanner: h,
						browserInfo: v,
						showFPR: n,
						showM2MTopBanner: N,
						showSuspended: c
					}))))), l.a.createElement(_n.a.Provider, {
						value: e
					}, y && l.a.createElement(Gd.a.Provider, {
						value: !0
					}, l.a.createElement(Ji.a, {
						isOverlay: !0
					}, l.a.createElement(pl, {
						isPostCollection: S,
						location: m,
						onClickOutsideOverlay: this.onClickOutsideOverlay,
						page: e,
						routes: p,
						showEmailCollectionBanner: h,
						browserInfo: v,
						showFPR: n,
						showM2MTopBanner: N,
						showSuspended: c
					}))), l.a.createElement(Ji.a, null, l.a.createElement(d.Fragment, null, l.a.createElement(Sd, null), h && l.a.createElement(w, null), b && l.a.createElement(Gi, null), l.a.createElement(Xt, null), l.a.createElement($s, null)))))
				}
			}
			ll.contextType = x.a;
			const ul = Object(re.b)(e => {
					const {
						browserInfo: t,
						isFPR: s,
						isInline: n,
						isSuspended: a
					} = e, r = {
						browserInfo: t,
						showFPR: s,
						showSuspended: a
					};
					return l.a.createElement(d.Fragment, null, l.a.createElement(Ud, r), l.a.createElement(Qi, {
						className: Object(h.a)(tl.a.header, Object(Vd.b)(tl.a, r), {
							[tl.a.inline]: n
						})
					}))
				}),
				ml = Object(re.b)(class extends l.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.showM2MTopBanner !== e.showM2MTopBanner || this.props.isInline !== e.isInline
					}
					locationsEqual(e, t) {
						const s = o()(e, "key"),
							n = o()(t, "key");
						return a()(s, n)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const s = o()(e, ["key", "locationState"]),
								n = o()(t, ["key", "locationState"]);
							return a()(s, n)
						}
						return !1
					}
					render() {
						const {
							frontpageSignupVariant: e,
							location: t,
							routes: s,
							overlayIsOpen: n,
							isCommentsPage: a,
							isInline: r,
							isLoggedIn: o,
							isSubscriptionsPinned: i,
							showEmailCollectionBanner: c
						} = this.props, d = i && !(!o && !n && a);
						return l.a.createElement(al, {
							"aria-hidden": n,
							className: Object(h.a)(Object(Vd.b)(tl.a, this.props), {
								[tl.a.withUpsell]: !!e,
								[tl.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && l.a.createElement(Xi, {
							className: Object(h.a)(tl.a.pinnedSubscriptions, Object(Vd.b)(tl.a, this.props)),
							"data-redditstyle": !0
						}), l.a.createElement(m.f, {
							location: t
						}, s), c && l.a.createElement("div", {
							className: Object(h.a)(tl.a.bottomSpacer, Object(Vd.a)(tl.a, this.props))
						}))
					}
				});
			class pl extends l.a.Component {
				constructor(e) {
					super(e), this.mouseDownInWrapper = !1, this.listingFocusSubscriptionId = 0, this.handleWebkitFullscreenChange = e => {
						this.setState({
							mediaIsFullscreen: null !== document.webkitFullscreenElement
						})
					}, this.lightboxHeaderRefFn = e => this.lightboxHeaderEl = e, this.overlayRefFn = e => this.overlayScrollContainerEl = e, this.onOverlayMouseUp = e => {
						if (this.mouseDownInWrapper && Object(C.a)(e) && 0 === e.button && e.target === this.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[R.a.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Zd.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(y.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Zd.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: s
					} = this.props, n = !(!t || !t.meta || t.meta.name === g.yb.SUBREDDIT_CREATION || t.meta.name === g.yb.PUBLIC_ACCESS_NETWORK), a = e;
					return l.a.createElement(rl, {
						className: Object(h.a)(Object(Vd.b)(tl.a, this.props), {
							[tl.a.mIsCommentsLightbox]: n,
							[tl.a.mIsLargeCommentsLightbox]: a
						})
					}, n && l.a.createElement(ol, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(h.a)(tl.a.mTopBannerAdjustments, Object(Vd.b)(tl.a, this.props), {
							[tl.a.mIsLargeCommentsLightbox]: a
						}),
						tabIndex: -1
					}, l.a.createElement(Wi.a, {
						page: t
					})), l.a.createElement("div", {
						className: Object(h.a)(tl.a.overlayWrapper, Object(Vd.b)(tl.a, this.props))
					}, l.a.createElement("div", {
						className: Object(h.a)(tl.a.overlayScrollContainer, {
							[tl.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Wd.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, l.a.createElement(m.f, null, s), l.a.createElement("div", {
						className: Object(h.a)(tl.a.bottomSpacer, Object(Vd.a)(tl.a, this.props))
					}))))
				}
			}
			t.b = il(Object(re.b)(ll))
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(a.a)(() => s.e("BannedUserModal").then(s.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/AdViewability/index.tsx"),
				i = s("./src/reddit/connectors/PostViewable/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/lib/classNames/index.ts");
			const l = Object(i.a)(() => Object(r.c)({
					post: c.I
				})),
				u = e => {
					let {
						className: t,
						post: s,
						onPostViewable: n
					} = e;
					return s.isSponsored ? a.a.createElement(o.a, {
						onViewable: e => n(s, e),
						children: a.a.createElement("div", {
							className: Object(d.a)(t, "Blank ".concat(s.id))
						}),
						trackVideoMetrics: !1
					}) : null
				};
			t.b = l(u)
		},
		"./src/reddit/components/Carousel/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FR0eEUi22u9saLEyWWJGS",
				indicators: "_3YoS4yX_XBXWbj-eYFW6MS",
				indicator: "_1mwHqJp51wXFI7rjTonkz5",
				indicatorSelected: "_2ol4vy2ml1IZ6lfT2n775g",
				items: "_26qHHOV6EkP4whoc4ySt3l",
				item: "_2gs-hGAB6w3q4Gc8mSyG5Z",
				fade: "uAUBkt8dAygLJNIsiAmad",
				slide: "_4S2XTVURHpoKNNEuKzJbH"
			}
		},
		"./src/reddit/components/Carousel/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return l
			}));
			var n, a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Carousel/index.m.less"),
				d = s.n(c);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(n || (n = {}));
			class l extends r.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === n.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
					}, this.handleNextFadePage = () => {
						this.setState((e, t) => Object.assign({}, e, {
							pageNumber: (e.pageNumber + 1) % t.items.length
						}))
					}, this.handleNextSlidePage = () => {
						this.setState((e, t) => {
							const s = 10 * t.items.length;
							return Object.assign({}, e, {
								pageNumber: (e.pageNumber + 1) % s,
								items: e.pageNumber === s - 1 ? t.items : e.pageNumber === e.items.length - 1 ? e.items.concat(t.items) : e.items
							})
						})
					}, this.clearPageInterval = () => {
						this.timeoutNumber && window.clearTimeout(this.timeoutNumber)
					}, this.setPageInterval = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						t.clearPageInterval(), t.timeoutNumber = window.setTimeout(t.handleNextPage, t.props.itemTime + e)
					}, this.handleItemClick = () => {
						this.clearPageInterval(), this.handleNextPage()
					}, this.renderItemExtra = e => {
						let {
							img: t,
							style: s
						} = e;
						return r.a.createElement("img", {
							key: t,
							src: "".concat(o.a.assetPath, "/").concat(t),
							style: s
						})
					}, this.renderItem = (e, t) => {
						const {
							animationType: s,
							itemWidth: a,
							shouldHandleMouseClicks: c
						} = this.props, {
							pageNumber: l
						} = this.state, u = s === n.Fade ? {
							opacity: t === l ? 1 : 0
						} : {
							marginLeft: 0 === t ? -a * l : void 0
						};
						return r.a.createElement("div", {
							className: Object(i.a)(d.a.item, d.a[s]),
							key: "item-".concat(t),
							style: Object.assign({}, u, {
								backgroundImage: 'url("'.concat(o.a.assetPath, "/").concat(e.img, '")'),
								width: a
							}),
							onClick: c ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => r.a.createElement("div", {
						className: Object(i.a)(d.a.indicator, {
							[d.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
						}),
						key: t
					}), this.state = {
						items: e.items,
						pageNumber: 0
					}
				}
				componentDidMount() {
					this.setPageInterval(this.props.delay)
				}
				componentWillUnmount() {
					this.clearPageInterval()
				}
				render() {
					const {
						className: e,
						shouldShowIndicators: t,
						items: s
					} = this.props;
					return r.a.createElement("div", {
						className: Object(i.a)(e, d.a.container)
					}, r.a.createElement("article", {
						className: d.a.items
					}, this.state.items.map(this.renderItem)), t && r.a.createElement("footer", {
						className: d.a.indicators
					}, s.map(this.renderIndicator)))
				}
			}
		},
		"./src/reddit/components/CategoryTag/index.m.less": function(e, t, s) {
			e.exports = {
				metaFlair: "_7_d4sJjd2oYzaJuU_QpOI",
				"m-lightboxHeader": "_1rtoCmW_7bFJWYffSOwt4R",
				mLightboxHeader: "_1rtoCmW_7bFJWYffSOwt4R"
			}
		},
		"./src/reddit/components/CategoryTagList/index.m.less": function(e, t, s) {
			e.exports = {
				categoryTagWrapper: "_13jLUpnQtcA8FXyw5Kv06q"
			}
		},
		"./src/reddit/components/CategoryTagList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/lib/addQueryParams/index.ts");
			const b = (e, t, s, n, a) => {
				const r = a || "*:*",
					o = s || l.O;
				return Object(p.a)("/search", {
					q: r,
					sort: o,
					t: n,
					category_name: e,
					category: t
				})
			};
			var h = s("./src/reddit/helpers/correlationIdTracker.ts"),
				g = s("./src/reddit/selectors/telemetry.ts");
			var f = s("./src/reddit/components/CategoryTag/index.m.less"),
				x = s.n(f);
			var v = class extends a.a.Component {
					constructor() {
						super(...arguments), this.onClick = () => {
							const e = {
								id: this.props.category.categoryId,
								title: this.props.category.categoryName,
								eventType: u.a.SUBREDDIT,
								originElement: "meta_flair"
							};
							this.props.sendEvent(((e, t) => s => Object.assign({
								source: "post",
								action: "click",
								noun: "meta_flair"
							}, g.defaults(s), {
								correlationId: Object(h.c)(h.a.SearchResults),
								post: g.post(s, e),
								search: g.postFlairClickToSearch(s, t),
								subreddit: g.subreddit(s)
							}))(this.props.postId, e))
						}
					}
					render() {
						const e = this.props.category,
							t = this.props.inLightboxHeader,
							s = e.categoryId,
							n = e.categoryName,
							r = a.a.createElement("span", null, n);
						return a.a.createElement("span", {
							className: Object(d.a)(x.a.metaFlair, {
								[x.a["m-lightboxHeader"]]: t
							})
						}, a.a.createElement(m.a, {
							onClick: this.onClick,
							to: b(n, s, l.Ib.Relevance, l.Pb.DAY),
							children: r
						}))
					}
				},
				y = s("./src/reddit/components/CategoryTagList/index.m.less"),
				C = s.n(y);
			const O = Object(r.b)(() => Object(o.c)({
				labelNSFW: c.S
			}));
			t.a = O(Object(i.b)(e => {
				let {
					postCategories: t,
					postId: s,
					inLightboxHeader: n,
					sendEvent: r
				} = e;
				return a.a.createElement("span", {
					className: n ? null : C.a.categoryTagWrapper
				}, t.map(e => a.a.createElement(v, {
					postId: s,
					category: e,
					key: e.categoryId,
					inLightboxHeader: n,
					sendEvent: r
				})))
			}))
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/ClassicPost/index.m.less"),
				c = s.n(i);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: s,
					crosspost: n,
					forceShowNSFW: i,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: m,
					templatePlaceholderImage: p,
					thumbnailContainerClassName: b,
					url: h,
					usePreview: g
				} = e;
				return a.a.createElement("div", {
					className: Object(r.a)(c.a.thumbnailContainer, t)
				}, a.a.createElement(o.a, {
					className: Object(r.a)(c.a.thumbnail, s),
					containerClassName: b,
					crosspost: n,
					forceShowNSFW: i,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: m,
					templatePlaceholderImage: p,
					url: m ? void 0 : h,
					usePreview: g
				}))
			}
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, s) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				crosspostMediaWrapper: "_1qc1-Anfrhr6APGcBKFk8M",
				expandoContainer: "_3r40yytzBnldjGGOrs2mCw",
				flatlist: "ssgs3QQidkqeycI33hlBa",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
				flatlistSeparator: "_1wDt70OnYnqsrm0XIsNn8v",
				horizontalVotes: "_3ytybPoFoY12sGn375PMy1",
				leftExpando: "_35zWJjb5RJMIMkexZ2Prus",
				mainBody: "_2XDITKxlj4y3M99thqyCsO",
				rightExpando: "_2Ddj1d6vOe9NlJqkdothNe",
				spacer: "iRkLLvxarfGu_2c7HxhW0",
				titleWithPoll: "_2FcpdQwjwRwk7X_NiZub8x",
				thumbnail: "_2e9Lv1I3dOmICVO9fg3uTG",
				thumbnailContainer: "_38EcSQ9jzVrdtzkXO1cydX",
				eventMeta: "rmPDRyja27ULjwD3rW14H",
				chain: "sfueWOUNVDpNGfP_Ow2yN",
				postContainer: "D3IyhBGwXo9jPwz-Ka0Ve",
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY",
				mFirst: "_23tSz_ar8phNRBBW1afkYr"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				CoinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				coinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				header: "_11NEHYc92BkrvsxyhXvs1u",
				headerText: "_1vG6msVYgq5OQBCLLzIt82",
				headerLink: "_1c3Ogz8fnJBxW2EndGIWfX",
				purchaseList: "_310fLrnWkOCPEaTfEufxkJ"
			}
		},
		"./src/reddit/components/CoinPurchaseModal/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				r = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const o = () => Object(a.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("CoinsPurchaseModal")]).then(s.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(r.c)()])).then(e => e[0].default),
				i = Object(n.a)({
					getComponent: o,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			t.a = i
		},
		"./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less": function(e, t, s) {
			e.exports = {
				CompactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				compactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				productSection: "_2VkRnsOobI-4VlOs4ID5Vy",
				primaryText: "_4cdfLigUWzeeVcPzzbe78",
				subText: "_2rMDMrhhjRzyi7pNFku1dh",
				buttonSubText: "_3qTmR_nZBIBLXk2J3z7RWs",
				priceSection: "_49wuP84YuCbFBmZg2KI5s",
				button: "_2s6F0RDk744nqzZtEK_6Og",
				goldStyle: "_2fGxX7IQlng74vsW862Y--"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const m = Object(o.a)(e => {
				var {
					className: t
				} = e, s = u(e, ["className"]);
				return a.a.createElement(i.a, l({}, s, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: d.a.customScoreStyles,
					downvoteClassName: Object(i.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = m
		},
		"./src/reddit/components/EmailVerificationTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				closeIcon: "_2lPBwpVCWIEI428aTPAwZx",
				closeWrapper: "_1_Rq-E5LCS_6JTARElGK12",
				container: "_2IHh1GBfUxJVQQX0dJvAry",
				topLine: "_1l7oRxdMdQQ7NG2BqRCukJ",
				title: "_3tEYeY-LfC8l7tb0sWeImJ",
				subtitle: "_42_eHTHzRRdWB7Fg8R_QS",
				description: "_33SFF8h93OHkDyAJ59D1nc",
				buttonWrapper: "_9wv2Od0X3vE5kIG9M0Ic",
				commonBtn: "_193xt0mDvkWqbClnP3Aj6T",
				primaryBtn: "BwIqd_kQSoiSr3qEDtdp_"
			}
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, s) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, s) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/pick.js"),
				a = s.n(n),
				r = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/Emoji/index.m.less"),
				b = s.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const f = m.a.wrapped(e => {
				var {
					backgroundImage: t,
					style: s
				} = e, n = g(e, ["backgroundImage", "style"]);
				return i.a.createElement("div", h({
					style: Object.assign({}, s || {}, {
						backgroundImage: "url('".concat(t, "')")
					})
				}, n))
			}, "EmojiDisplay", b.a);
			var x = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				v = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				y = s("./src/reddit/constants/colors.ts"),
				C = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				P = s("./src/reddit/i18n/utils.ts"),
				j = s("./src/reddit/icons/svgs/Close/index.tsx"),
				w = s("./src/reddit/models/Flair/index.ts"),
				M = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = s("./src/reddit/components/Flair/index.m.less"),
				N = s.n(S);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "c", (function() {
				return V
			})), s.d(t, "a", (function() {
				return Q
			}));
			var k = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const _ = Object(v.a)(x.b),
				T = m.a.div("FlairWrapper", N.a),
				L = m.a.wrapped(c.a, "CloseButton", N.a),
				F = m.a.wrapped(Object(u.a)(e => {
					var {
						forceSmallEmojis: t,
						theme: s
					} = e, n = k(e, ["forceSmallEmojis", "theme"]);
					const a = s;
					return i.a.createElement(f, I({
						style: Object.assign({}, R(!!t, a) || {})
					}, n))
				}), "FlairEmojiDisplay", N.a),
				R = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: "".concat(t.subredditContext.emojiHeight, "px"),
						width: "".concat(t.subredditContext.emojiWidth, "px")
					}
				},
				A = (e, t) => {
					const s = t ? "/r/".concat(t, "/search") : "/search",
						n = "".concat(t ? "flair_name" : "flair", ':"').concat(e, '"');
					return Object(d.a)(s, {
						[C.o]: n,
						[C.p]: t ? "1" : ""
					})
				},
				D = e => e.isFlairFilter ? i.a.createElement(O.a, {
					children: e.flair,
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}) : e.onClick ? i.a.createElement(O.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: A(e.searchableTerm, e.subredditName),
					children: e.flair
				}) : e.flair;
			class B extends i.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = i.a.createElement("span", {
						className: Object(l.a)(this.props.className, {
							[N.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(M.a)(this.props).flair,
							color: "".concat(V(this.props))
						}
					}, this.props.text, this.props.isSelected && i.a.createElement(L, {
						to: "./",
						onClick: this.props.onCloseClick
					}, i.a.createElement(j.a, {
						className: N.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(M.a)(this.props).flair
						}
					})), !!this.props.tooltip && i.a.createElement(_, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return i.a.createElement(D, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const H = Object(u.a)(B),
				U = Object(u.a)(e => {
					let t = "",
						s = !1;
					const n = e.richtext.map((n, a) => {
						if (n.e === w.c.Emoji) {
							const r = n;
							return t += r.a, s = !0, i.a.createElement(F, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: r.u,
								key: a,
								title: r.a
							})
						} {
							const e = n;
							return t += e.t, i.a.createElement("span", {
								key: a
							}, e.t)
						}
					});
					let a;
					s && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (a = {
						marginTop: "-".concat(e.theme.subredditContext.emojiHeight - 16, "px")
					});
					const r = i.a.createElement(T, {
						className: Object(l.a)(e.className, {
							[N.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: Object.assign({}, a, {
							backgroundColor: e.backgroundColor || Object(M.a)(e).flair,
							color: "".concat(V(e))
						})
					}, n, e.isSelected && i.a.createElement(L, {
						to: "./",
						onClick: e.onCloseClick
					}, i.a.createElement(j.a, {
						className: N.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(M.a)(e).flair
						}
					})));
					return i.a.createElement(D, {
						flair: r,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				V = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(M.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(E.a)(Object(M.a)(e).post, y.a.black, y.a.white) : e.textColor === w.e.Dark ? y.a.black : y.a.white,
				Q = m.a.wrapped(H, "TextFlair", N.a),
				W = m.a.wrapped(U, "RichTextFlair", N.a),
				q = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(r.m)(.1, Object(M.a)(a()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				G = m.a.wrapped(e => {
					const t = q(e),
						s = i.a.createElement("span", {
							className: e.className,
							style: {
								border: "1px solid ".concat(t),
								color: t
							}
						}, e.text);
					return i.a.createElement(D, {
						flair: s,
						searchableTerm: e.text
					})
				}, "MetaFlair", N.a);
			t.b = e => {
				const {
					className: t,
					disabled: s = !1,
					flair: n,
					isFlairFilter: a,
					isSelected: r,
					onClick: o,
					onCloseClick: c,
					onMouseDown: d,
					subredditName: u,
					usesCommunityStyles: m,
					forceSmallEmojis: p,
					to: b
				} = e, h = Object(l.a)({
					[N.a.flairVariant]: a,
					[N.a.small]: a && !e.large,
					[N.a.large]: a && e.large
				}, t);
				switch (n.type) {
					case w.f.Richtext:
						return s || !n.richtext ? null : i.a.createElement(W, {
							backgroundColor: n.backgroundColor,
							className: h,
							forceSmallEmojis: p,
							isFlairFilter: a,
							isSelected: r,
							onClick: o,
							onCloseClick: c,
							onMouseDown: d,
							redditStyle: !m,
							richtext: n.richtext,
							subredditName: u,
							textColor: n.textColor,
							to: b
						});
					case w.f.Text:
						return s || !n.text ? null : i.a.createElement(Q, {
							backgroundColor: n.backgroundColor,
							className: h,
							isFlairFilter: a,
							isSelected: r,
							onClick: o,
							onCloseClick: c,
							onMouseDown: d,
							subredditName: u,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !m,
							to: b
						});
					case w.f.Meta:
						return i.a.createElement(Q, {
							backgroundColor: n.backgroundColor,
							className: t,
							isFlairFilter: a,
							subredditName: u,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !m,
							to: b
						});
					case w.f.Nsfw:
					case w.f.Spoiler:
						return i.a.createElement(G, {
							className: t,
							text: n.text,
							type: n.type
						});
					case w.f.Quarantined:
						return null;
					case w.f.Oc:
						return i.a.createElement(Q, {
							backgroundColor: y.a.alienblue,
							text: n.text,
							textColor: w.e.Light,
							tooltip: Object(P.c)("This post is marked as Original Content [OC]")
						});
					default:
						return n.text ? i.a.createElement(Q, {
							backgroundColor: n.backgroundColor,
							className: h,
							isFlairFilter: a,
							onClick: o,
							onCloseClick: c,
							onMouseDown: d,
							subredditName: u,
							text: n.text,
							redditStyle: !m,
							to: b
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				a = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/Flair/index.tsx"),
				l = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				m = s("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.S
				}),
				b = Object(i.b)(p),
				h = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return "".concat(e.type, "--").concat(t)
					}
					return "".concat(e.type, "--").concat(e.text)
				};
			t.a = b(e => {
				let {
					className: t,
					isFlairFilter: s,
					onClick: n,
					onMouseDown: r,
					disabled: i = !1,
					flair: c,
					labelNSFW: m,
					subredditName: p
				} = e;
				const b = !!c.find(e => e.type === u.f.Richtext),
					g = c.map(e => {
						if (e.type === u.f.Text && b) return null;
						if (!m && e.type === u.f.Nsfw) return null;
						const t = Object(l.j)(e),
							c = "/r/".concat(p, "/"),
							g = r ? () => r(e) : a.a;
						return o.a.createElement(d.b, {
							isFlairFilter: s,
							key: h(e),
							onClick: n,
							onMouseDown: g,
							disabled: i,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: p,
							to: Object(l.e)(c, t)
						})
					});
				return o.a.createElement("div", {
					className: t
				}, g)
			})
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, s) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				a = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = s.n(d);
			t.a = e => o.a.createElement(i.g, {
				className: l.a.modalHeader
			}, o.a.createElement(i.n, null, e.title), o.a.createElement(c.a, {
				onClick: e.onClosePressed || a.a
			}, o.a.createElement(i.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				r = s.n(a);
			const o = n.a.div("Wrapper", r.a);
			t.a = o
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, s) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/Flair/index.tsx"),
				i = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/components/FlairPreview/index.m.less"),
				d = s.n(c);
			const l = r.a.span("Placeholder", d.a),
				u = r.a.div("SelectedFlair", d.a),
				m = r.a.wrapped(o.b, "FlairComponent", d.a);
			t.a = e => e.flair ? a.a.createElement(u, null, a.a.createElement(l, null, e.placeholderText), a.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : a.a.createElement(u, null, a.a.createElement(i.c, null, "No flair selected"))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, s) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/lodash/once.js"),
				a = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				u = s("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = s.n(u);
			const p = d.a.wrapped(e => o.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = a()((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
					return Object(i.a)({
						getComponent: () => Object(l.a)(() => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("FlairEdit")]).then(s.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
						ErrorComponent: e,
						LoadingComponent: e
					})
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/memoizeByReference/index.ts"),
				d = s("./src/reddit/featureFlags/index.ts"),
				l = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				b = s("./src/reddit/components/Flair/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/index.tsx"),
				g = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				f = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				x = s("./src/reddit/icons/svgs/Search/index.tsx"),
				v = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				y = s.n(v),
				C = class extends a.a.Component {
					constructor() {
						super(...arguments), this.state = {
							searchQuery: ""
						}, this.onSearchChange = e => {
							this.setState({
								searchQuery: e.target.value
							})
						}
					}
					render() {
						const {
							templates: e,
							templateIds: t,
							selectedTemplateId: s
						} = this.props, {
							searchQuery: n
						} = this.state, r = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(n)), o = !!s && r.some(e => e.id === s);
						return a.a.createElement("div", {
							className: y.a.container
						}, a.a.createElement("div", {
							className: y.a.searchBoxWrapper
						}, a.a.createElement("input", {
							className: y.a.searchInput,
							onChange: this.onSearchChange,
							type: "text",
							placeholder: Object(u.c)("Search for flair"),
							value: n
						}), a.a.createElement(x.a, {
							className: y.a.searchIcon
						})), a.a.createElement(h.a, {
							name: "flair_picker",
							onChange: this.props.onChange,
							value: s
						}, r.map((e, t) => {
							const n = Object(l.c)(e),
								r = s === e.id || !o && 0 === t;
							return a.a.createElement(g.a, {
								className: y.a.radioOption,
								key: e.id,
								showButton: !0,
								tabIndex: r ? 0 : -1,
								value: e.id
							}, a.a.createElement(b.b, {
								className: y.a.flairComponent,
								flair: n,
								forceSmallEmojis: !0
							}), e.textEditable && a.a.createElement(f.a, {
								className: y.a.pencil
							}))
						})))
					}
				},
				O = s("./src/reddit/components/FlairSearch/index.m.less"),
				E = s.n(O);
			const P = "FlairSearch-EmojiPicker-DropdownId",
				j = Object(c.a)(e => e && Object(l.c)(e)),
				w = Object(o.c)({
					areFlairRestrictionsEnabled: d.d.flairRestrictions,
					isModerator: m.d
				}),
				M = Object(r.b)(w);
			class S extends a.a.Component {
				constructor() {
					super(...arguments), this.onFlairEdit = e => {
						const {
							templates: t
						} = this.props, s = t && e.templateId ? t[e.templateId] : void 0;
						let n = e;
						s && (n = Object(l.d)({
							flair: e,
							template: s,
							ignoreTextAllowance: !0
						})), this.props.onChange(n)
					}, this.onTemplateSelected = e => {
						const {
							templates: t
						} = this.props;
						if (t) {
							const s = t[e],
								n = Object(l.c)(s);
							this.props.onChange(n)
						}
					}
				}
				render() {
					const {
						props: e
					} = this, {
						isModerator: t,
						templates: s,
						templateIds: n,
						subredditId: r
					} = e, o = s && e.flair && e.flair.templateId && s[e.flair.templateId] || void 0, c = Object(p.a)(), d = e.flair || j(o);
					return a.a.createElement("div", {
						className: Object(i.a)(e.className, E.a.container)
					}, s && n && a.a.createElement(C, {
						flairTemplateType: e.flairTemplateType,
						onChange: this.onTemplateSelected,
						selectedTemplateId: o ? o.id : "",
						templateIds: n,
						templates: s
					}), d && o && (t || o.textEditable) ? a.a.createElement("div", {
						className: E.a.flairEditSection
					}, a.a.createElement("div", {
						className: E.a.editLabel
					}, Object(u.c)("Edit flair")), e.areFlairRestrictionsEnabled && a.a.createElement("div", {
						className: E.a.restrictionHintText
					}, Object(l.k)(o)), a.a.createElement(c, {
						autofocus: !0,
						emojiPickerId: P,
						flair: d,
						flairTemplate: o,
						flairTemplateType: e.flairTemplateType,
						isFlairModOnly: o.modOnly,
						onChange: this.onFlairEdit,
						subredditId: r
					})) : null)
				}
			}
			t.a = M(S)
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return O
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/CategoryTagList/index.tsx"),
				d = s("./src/reddit/components/FlairList/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/correlationIdTracker.ts"),
				m = s("./src/reddit/helpers/flair.ts"),
				p = s("./src/reddit/helpers/trackers/postFlair.ts"),
				b = s("./src/reddit/i18n/utils.ts"),
				h = s("./src/reddit/models/Flair/index.ts"),
				g = s("./src/reddit/selectors/postFlair.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/components/FlairWrapper/index.m.less"),
				y = s.n(v);
			const C = Object(r.b)(() => Object(o.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(l.p)(e, {
							pageLayer: s
						})
					},
					isMeta: (e, t) => {
						let {
							post: s
						} = t;
						return Object(f.o)(e, {
							postId: s.id
						})
					},
					isPostFlairEnabled: (e, t) => Object(g.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, t) => {
						let {
							post: s
						} = t;
						return Object(f.z)(e, s)
					},
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.S)(e, {
							subredditId: s.belongsTo.id
						}).name
					}
				})),
				O = (e, t) => {
					const s = [];
					return t.isOriginalContent && s.push({
						text: "OC",
						type: h.f.Oc
					}), e && s.push({
						text: Object(b.c)("Poll"),
						type: h.f.Meta
					}), s.push(...t.flair), s
				};
			t.a = C(e => {
				let {
					className: t,
					disableFlair: s,
					flairPosition: n,
					isFlairFilter: r,
					isPostFlairEnabled: o,
					isMeta: l,
					nowrap: b,
					post: g,
					postCategories: f,
					sendEvent: x,
					showCategoryTag: v,
					subredditName: C,
					titleFlair: E
				} = e;
				const P = n === h.b.Left,
					j = E || O(l, g),
					w = [];
				let M = [];
				P ? j.map(e => {
					Object(m.p)(e.type) ? w.push(e) : M.push(e)
				}) : M = j;
				const S = b ? y.a.flairNoWrap : w.length > 0 || M.length > 0 || f && v ? y.a.flairWrapper : null,
					N = e => {
						const t = {
							id: g.belongsTo.id,
							eventType: g.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(u.d)(u.a.SearchResults), x && x(Object(p.a)(g.id, t))
					},
					I = e => {
						x && x(Object(p.e)(e))
					},
					k = !(s || !j || !j.length),
					_ = !!(v && f && f.length);
				return k || _ ? a.a.createElement("div", {
					className: Object(i.a)(S, t)
				}, k && w && a.a.createElement(d.a, {
					className: y.a.flairList,
					isFlairFilter: r,
					key: "leftFlair",
					onClick: N,
					onMouseDown: I,
					flair: w,
					disabled: !o,
					subredditName: C
				}), k && a.a.createElement(d.a, {
					className: y.a.flairList,
					isFlairFilter: r,
					key: "rightFlair",
					onClick: N,
					onMouseDown: I,
					flair: M,
					disabled: !o,
					subredditName: C
				}), _ && a.a.createElement(c.a, {
					inLightboxHeader: b,
					postId: g.id,
					postCategories: f
				})) : null
			})
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1DtVp1OCzoJt6rVu4kqyST",
				container: "_1DtVp1OCzoJt6rVu4kqyST",
				Phone: "_20m5B-2NHmUmXVUYC1gymo",
				phone: "_20m5B-2NHmUmXVUYC1gymo",
				android: "_2jgq6Cm4n7c3NNl8VpFltS",
				iphone: "_2ocrsCliWP9UUmx5ZL374w",
				Carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				Frame: "_3P_iHJEXRll3mWyuqNik3I",
				frame: "_3P_iHJEXRll3mWyuqNik3I"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_23C-3j-0TrSZn_NJT8fcwU",
				container: "_23C-3j-0TrSZn_NJT8fcwU",
				Disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				Link: "EzRsHBU9A06NEXZnsJyWI",
				link: "EzRsHBU9A06NEXZnsJyWI"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				MainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				mainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				MainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				mainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				Images: "_19dEFhHhbDgVJWuOq0KZlf",
				images: "_19dEFhHhbDgVJWuOq0KZlf",
				IFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				iFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				fields: "g5DNTyz0K4p8Qe1KemhqM",
				NotReady: "W6BMDJ-zjJbsEwxbpvU5r",
				notReady: "W6BMDJ-zjJbsEwxbpvU5r",
				NotReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				notReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				NotReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				notReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				Links: "_1etyEGrcHpnkE1UMtQIjpV",
				links: "_1etyEGrcHpnkE1UMtQIjpV",
				Carousel: "_3OBSZQIgZx2ksSzBQmYOeO",
				carousel: "_3OBSZQIgZx2ksSzBQmYOeO"
			}
		},
		"./src/reddit/components/Governance/PostPollMetaData/index.m.less": function(e, t, s) {
			e.exports = {
				proposalMetaData: "_2uZcUQgumllsYgn5TxSizG",
				proposalMetaDataTime: "_1u5ghYiKbGasP3ORCsbasV"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.m.less": function(e, t, s) {
			e.exports = {
				ctaContainer: "_1t5i5bNwZeJ7FuUXZ9rM-p",
				ctaContent: "jEUbSHJJx8vISKpWirlfx",
				text: "_2Q7wEg_pr4EKVIc6XvJibh",
				icon: "_1F-AgkBVxGxQsEfI3oVkVa"
			}
		},
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, s) {
			e.exports = {
				row: "_1vXXD2qKLnHetdKvisFzBD",
				container: "x0hiXHicn7r3BG9m1FJH4",
				blue: "_1LTur9Gkvle8-nyvm8p-_2",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6"
			}
		},
		"./src/reddit/components/Header/Sparse.m.less": function(e, t, s) {
			e.exports = {
				Logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				Wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				HomeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				homeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				SparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				sparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj"
			}
		},
		"./src/reddit/components/Header/Sparse.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/elementIds.ts"),
				o = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				i = s("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				c = s("./src/reddit/layout/row/Inline/index.tsx"),
				d = s("./src/reddit/components/Header/Sparse.m.less"),
				l = s.n(d),
				u = s("./src/lib/lessComponent.tsx");
			const m = u.a.wrapped(o.a, "Logo", l.a),
				p = u.a.wrapped(i.a, "Wordmark", l.a),
				b = u.a.div("SparseContainer", l.a),
				h = u.a.a("HomeExternalLink", l.a);

			function g() {
				return a.a.createElement(b, {
					id: r.c
				}, a.a.createElement(h, {
					href: "#",
					onClick: () => window.location.reload(!0)
				}, a.a.createElement(c.a, null, a.a.createElement(m, null), a.a.createElement(p, null))))
			}
		},
		"./src/reddit/components/Header/User/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_3Wg53T10KuuPmyWOMWsY2F",
				icon: "_234aKY_LemFWuSTYVoshHn",
				link: "_2qcLS5et_OlJluP0WWDdsJ",
				loggedOut: "U3FRqDA_Qhr4icbaNXSuf",
				loggedOutRow: "_1JBkpB_FOZMZ7IPr3FyNfH",
				blue: "_2V4tnJay0i-PDDIUT5HMD_",
				login: "_2v9O1a_TWErxU2ZPvQ5jwC",
				register: "_1QsvbCwaVtdQIYepgPK7Bu",
				active: "_2JBA0rAVvh8drt9hJ_hEzo",
				oldRedditLink: "_31lJpVPojF0SAR5usRZ36h",
				row: "_19oWd7e3z7-ztUGzdIoCR7",
				separator: "Z_HUY3BUsGOBOtdmH94ZS",
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b"
			}
		},
		"./src/reddit/components/Header/index.m.less": function(e, t, s) {
			e.exports = {
				centeredRow: "_30BbATRhFv3V83DHNDjJAO",
				container: "_2GyPfdsi-MbQFyHRECo9GO",
				layout: "_2vkeRJojnV7cb9pMlPHy7d",
				compactLayout: "Y4MkVr6trrdypfZVUkpIA",
				blue: "e6QCPHG7i4YmXDTbRtkhC",
				wordmark: "_1bWuGs_1sq4Pqy099x_yy-",
				searchContainer: "_1iqnOY2Y57wmetu8MAjiId",
				explore: "_17gDYx5g5X6q--Lcmc9IvO",
				cleanup: "_2lfatUsYCvTN2T6AyKYTPM",
				search: "_2dlTXDaX9JuL0bekTwhV18",
				snoo: "_1O4jTk-dZ-VIxsCuYB6OR8",
				left: "_3dnbqz69WJTFCss8wl7Wlk",
				quickLinks: "_23q1waDr4n_2fR5A7zcZzb",
				right: "_2u8LqkbMtzd0lpblMFbJq5",
				HeaderDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				headerDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				bladeIsOpen: "_1z0T-r2uyIYQr2tLUWs4M2"
			}
		},
		"./src/reddit/components/HeaderIconContainer/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "PH-V9ggsF2mi5JTDmDqdR",
				button: "PH-V9ggsF2mi5JTDmDqdR",
				Container: "FOioVk_DUTmZIKKa82Mm1",
				container: "FOioVk_DUTmZIKKa82Mm1",
				isOpen: "_2DgzqfpTotjWrh91uFswuC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/Compact/Tooltip.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				u = s("./src/reddit/components/HelpfulTooltip/index.m.less"),
				m = s.n(u);
			class p extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(l.a, {
						className: Object(a.a)(m.a.dropdown, e.className),
						"data-redditstyle": !0,
						isFixed: e.isFixed,
						style: e.style
					}, !e.hideCloseButton && o.a.createElement("button", {
						className: m.a.closeButton,
						onClick: e.onCloseClick
					}, o.a.createElement(d.b, {
						className: m.a.closeIcon
					})), o.a.createElement("div", {
						className: m.a.text
					}, e.text))
				}
			}
			var b = p,
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/components/HeaderSubredditSelector/Compact/index.m.less"),
				f = s.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = ["left", "bottom"],
				y = ["left", "top"],
				C = () => {},
				O = Object(c.a)(Object(h.b)(e => o.a.createElement(b, x({}, e, {
					className: Object(a.a)(e.className, f.a.helpfulTooltip),
					text: n.fbt._("Check out more posts to unlock your home.", null, {
						hk: "2OUelE"
					})
				}))), [i.a.Click, i.a.Keydown, i.a.Resize]);
			t.a = e => o.a.createElement(O, x({}, e, {
				hideCloseButton: !0,
				isFixed: !1,
				onCloseClick: C,
				targetPosition: v,
				tooltipPosition: y
			}))
		},
		"./src/reddit/components/HeaderSubredditSelector/Compact/index.m.less": function(e, t, s) {
			e.exports = {
				container: "wbuVa6YG7M8XkqaQ7Jh2I",
				link: "_2dqQ0-lgXxJq7S-QgupMNE",
				mActive: "h2t6HsuO8p5AANK2EXPCI",
				icon: "_2vaxHFhEXUi8w9mcExfLrx",
				mHighlighted: "_3XEXjC_xXkOB4UNICkrBd7",
				mDisabled: "_3fcnmbaPnv6Nn1Gjo4C6q4",
				text: "kYSum1Wd7yU21JxlhEpQf",
				badge: "_2rWvOyeOipRn46kEPRRe-K",
				overlay: "_24l8oamR3PHwMxXhdqxV3P",
				helpfulTooltip: "pfIkqX2VjSpAPOyzf8g-N"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less": function(e, t, s) {
			e.exports = {
				item: "_26MVepkxZHzpNv1cuAA4JA",
				mFocused: "_7Xbismt11Yj8tq6BaRWFr",
				buttonContainer: "oiDWziAp_Bua6rb7oQKXs",
				icon: "cq0sTeCPC4GI78UNPdClD",
				text: "_1nBP1OfpQDgTmzRFqaVult"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_1Ok0AiXwAeYl2SsUBaxgPC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, s) {
			e.exports = {
				item: "XEkFoehJNxIH9Wlr5Ilzd",
				mFocused: "_3Av66iQf7_N4Z-XZxsek76",
				itemWrapper: "_17q-ew4FcK6U0ZiybWkIGG",
				icon: "_3HTtcITrR-crvsRovLrijl",
				text: "_2aqH0n-kSzFY7HZZ5GL-Jb",
				trending: "_2H51id1RX9dGNrtrAIOMGK",
				subText: "_2Efd4uMAp4YawdvL9Zhdhv",
				title: "_1JNAu7U5gWAkRoykwfUWhY",
				favorite: "t2A0mgkgGzc8cAahJsR7a",
				mFavorite: "_2cEhEGN_WTLlwspw_bpqTr",
				multi: "_3Hhjob0kyyqVjBXut8STgU",
				customFeedIcon: "ENGeNwSHzwN-SV2KTH2s7",
				trendingContent: "BNJ5Y52EyQmTHFZJwjoXJ",
				relatedSubredditMetaData: "_3P_WRCH8aFjwOFA7B1RlBL",
				promoted: "bpYVdL9hAnIqOnrKi8PVS"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_3n88GuUHAnxPu6a--3e0sz",
				item: "_1TJuQGHgWvq2fnkVcPN7d0"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less": function(e, t, s) {
			e.exports = {
				filter: "_37tmRmxaFMjRRrvwcY2JmY",
				item: "_2MgAHlPDdKvXiG-Qbz5cbC",
				listHeader: "_2XRPX11qL4-HxWPuHAzOW5",
				headerButton: "_1ee4j8lY-1iIi8GkJdJ5RD"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/index.m.less": function(e, t, s) {
			e.exports = {
				caretDown: "_3CG2U_hX3HI-ibl5v2RCq1",
				container: "_3jiriKeNer8y0-1r6oWIFM",
				mOpen: "_24x5wRDxU1y38uXQXvLE4m",
				mNotPinned: "_3rS8YTDjcT7fs0k9W4rxDG",
				mPinned: "_3NgME2HFZvM-tgAE3s5hXS",
				mBlue: "_3b5MSH50QHbieebRqimGxS",
				pin: "_2FVCfsIPxXtl6S-c69sXO4",
				selector: "h-jI8r2f9ozTNqu_2TBeY",
				defaultIcon: "eZQ5o2PrhR59wkAtPbxMU",
				itemIcon: "_139PgjqaVJ8tq4kF4QznMX",
				containerText: "_1GieMuLljOrqnVpRAwz7VP",
				icon: "_1jKtP65jnxLmoGCSqxAgkZ",
				customFeedIcon: "_1r2uMQFZw5Hg53NkK6rsKv",
				itemModQueue: "_1VemFsujoJ-6RR82VRSPeM",
				listContainer: "TMMvbwyeh9yuHKmQWHrE3",
				itemCoin: "_334CPGEglbIA_2CwQAn43P",
				coinIcon: "JisrPypso_3RK4iDgDdke",
				itemPremium: "yeM4RoZW6FtJxVPe3Z84C",
				premiumIcon: "_2ulegyMhoTE_WCFyBC-IBx",
				itemPublicAccessNetwork: "_16Lm-ZR49L-1nxQV124cD-",
				publicAccessNetworkIcon: "_3jFEC4X3IL9Zr-pzUzyCp7",
				modQueueIcon: "_2L4XuYlbElLC5REx1XpdG_",
				multiPlusButton: "_3mvXSuBIpYAdAsBJSB-1G5",
				multiPlusIcon: "_2T11xMsmkdwP6G_mY6eUBW",
				disabled: "_371yhrlWAj7dxOsk1PWqG4",
				subredditIcon: "_3fvJBCH6c6P0NvMwoqK9MJ",
				unknownIcon: "_1hCoGzhwFdfF2vGbt8IjSy"
			}
		},
		"./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less": function(e, t, s) {
			e.exports = {
				container: "nSJCQrnLY07CzwT8tTsNO",
				title: "csebgIdGwT3fBJ8kUT2aQ",
				subtitle: "rsZg2IAMPbcDGNPnNIBy_",
				description: "_3m-DocsNGlVUjAtAm7ZZLi",
				dismissBtn: "_3tJL-r-lrTcB_GkrrlZxEN"
			}
		},
		"./src/reddit/components/HeaderUserActions/index.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "_2zZ-KGHbWWqrwGlHWXR90y",
				chatIcon: "ra_3TRn5G7dbrfbhx8kYi",
				isActive: "_3aintJ344BVk82tG06NQea",
				postIcon: "_1aj2BqXAeeo2bHwArcJ5AT",
				moderateIcon: "_14ugEJZOmgrUDXYeFSSv9w",
				isLit: "_3ge8uSGq8pAK2qqs45Vzde",
				link: "_1x6pySZ2CoUnAfsFhGe7J1",
				headerLinks: "_20HfCAFz3ot1MW1o29ZoGZ",
				headerUserDropdown: "_1pA8z73SZ1olP5KMKFN4_Z",
				moderationDropdown: "_1luaIaEVRAlXWIwqbCOj2a",
				counter: "_1YxELUk4ufCJBs-VhKVmA6",
				isHighlighted: "oKcz3mxVRK0Q74EoLhY-",
				envelopeIcon: "_1V77mEI1g_5ZlCh_c2-Yab",
				isUnread: "_2Wgcbg0LNUiJf4L2fVQJ7O"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				accountCoins: "_2pXW42IYsGP59qZnjAnkAx",
				accountDisplayText: "DFKWwVItcycZV1bKUOyay",
				accountKarma: "Rz5N3cHNgTGZsIQJqBfgk",
				accountDetails: "_1pHyKCBktIf_9WFW9jjM3P",
				accountWrapper: "_3KfbpxpA8Esu_3UHTmIvfw",
				isLoggedOut: "_22SL37yETIW414yUiZj27w",
				isLoggedIn: "_2OFo5eaD2V6ZcJsYBuYned",
				button: "_1zZ3VDhRC38fXLLvVCHOwK",
				buttonText: "_3m4MQxMy4WfgIkMhHh-UAg",
				coinFontIcon: "LyE1zRbUJlGravH4LHRfD",
				dropdownTriangle: "_50RxI-5rW1xzwoC42vhzM",
				imgIcon: "-z42jjKOFdAdFhdJ8mmI4",
				myProfileIcon: "VIlSggfRUkuuHTKa_h8jp",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				inlineButton: "_18X7KoiaLuKbuLqg4zE8BH",
				dropdownOpen: "_3F3oKTToidUQ0CbMS1cccX",
				container: "_3CDDvp7qc_4HVXpd_mIXZg",
				blue: "_1liUbnjDeLgMIp81inXfeS",
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				toggleSwitch: "_179edq2yfZswDIo3NdeebM",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF"
			}
		},
		"./src/reddit/components/HelpfulTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "_3BDdVSPxdZJLjHX4ZYcIYm",
				"slide-bottom": "_1pIwWwWEoz9hK1fg2pLIK4",
				slideBottom: "_1pIwWwWEoz9hK1fg2pLIK4",
				"fade-in": "_14yJ3z91W9LFHPh6yI-ZXR",
				fadeIn: "_14yJ3z91W9LFHPh6yI-ZXR",
				closeButton: "CHjT7_PzdkN9DWAktqA7Z",
				closeIcon: "_2akJUHWkANhP-XtUfMZcNk",
				text: "BYxtYA3CXG1Zn0QakTGaw"
			}
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(a.a)(() => s.e("SubredditHovercard").then(s.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/reddit/constants/componentSizes.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/JumpToContent/index.m.less"),
				d = s.n(c);
			const l = Object(a.createContext)(null),
				u = Object(a.createContext)(null);
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return r.a.createElement(l.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, r.a.createElement(u.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const p = o.g + 10,
				b = r.a.memo(() => r.a.createElement(l.Consumer, null, e => e && r.a.createElement("div", {
					className: d.a.wrapper
				}, r.a.createElement(i.n, {
					className: d.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -p)
					}
				}, n.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), r.a.createElement("div", {
					className: d.a.rightBorder
				})))),
				h = r.a.memo(() => r.a.createElement(u.Consumer, null, e => r.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LightboxHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "K4Eem3pMbRbAYioOfqN5E",
				isCollection: "_1_ihtgX_FgdbtB-rbz84r6",
				postDetails: "-DOLBAFWXMQX1Q3ErGO8I",
				mediaIcon: "_33YMDoIltkTaZemWTS7Yki",
				postTitle: "P9Qd6oTCWgLr3ackKg0I5",
				postTitleLink: "_1iZHnGYX-Wc90AM6BQQemg",
				membershipPaywallTitle: "SHwEfOV-Wq0AnI-uha8Ci",
				horizontalVotes: "_15Igkrvvp7jIfVHt0eKzFd",
				actions: "_25ONQRwoX20oeRXFl_FZXt",
				close: "c_rRg_d32D6ZO5sV8DmMM",
				closeText: "C9XkFfcvNxFrFRVdKxc8x"
			}
		},
		"./src/reddit/components/LightboxHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/shortcuts.ts"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/colors.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/postCollection.ts"),
				x = s("./src/reddit/i18n/components.tsx"),
				v = s("./src/reddit/i18n/utils.ts"),
				y = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				C = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				O = s("./src/reddit/icons/fonts/Link/index.tsx"),
				E = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				P = s("./src/reddit/icons/fonts/Text/index.tsx"),
				j = s("./src/reddit/icons/svgs/Close/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/models/Vote/index.ts"),
				S = s("./src/reddit/selectors/experiments/categories.ts"),
				N = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				I = s("./src/reddit/selectors/monthsToMinutes.ts"),
				k = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/components/LightboxHeader/index.m.less"),
				T = s.n(_);
			const L = Object(o.c)({
					isInCategoriesExperiment: S.a,
					post: k.n,
					shouldRedirectToHome: e => Object(I.z)(e) && Object(N.d)(Object(N.f)(e))
				}),
				F = Object(r.b)(L, (e, t) => {
					let {
						sendEvent: s
					} = t;
					return {
						close: t => {
							e(Object(l.d)(s, !0, t))
						},
						toggleVote: (t, s) => e(s === M.a.upvoted ? Object(d.N)(t) : Object(d.o)(t))
					}
				}, (e, t, s) => Object.assign({}, e, t, s, {
					onVoteClick: n => {
						const a = e.post || s.post;
						a && t.toggleVote(a.id, n)
					}
				}));
			class R extends a.a.Component {
				constructor(e) {
					super(e), this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close(this.state.shouldRedirectToHome)
					}, this.state = {
						shouldRedirectToHome: e.shouldRedirectToHome
					}
				}
				render() {
					const {
						className: e,
						onCloseClick: t,
						onVoteClick: s,
						page: r,
						post: o
					} = this.props, d = A[o && o.media ? o.media.type : w.n.EMBED], l = !o && r && r.meta && r.meta.name === c.yb.META_MEMBERSHIP_PAYWALL_PAGE;
					return a.a.createElement("div", {
						className: Object(i.a)(T.a.container, e, {
							[T.a.isCollection]: o && Object(f.a)(o)
						})
					}, a.a.createElement("div", {
						className: T.a.postDetails
					}, o && a.a.createElement(n.Fragment, null, a.a.createElement(u.a, {
						className: T.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: o,
						onVoteClick: s,
						redditStyle: !0
					}), a.a.createElement(d, {
						className: T.a.mediaIcon
					}), a.a.createElement(p.c, {
						className: T.a.postTitle,
						post: o,
						size: p.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: h.a.lightboxHeaderText,
						titleLinkClassName: T.a.postTitleLink,
						showCategoryTag: !0
					}), a.a.createElement(m.a, {
						post: o,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), l && r && r.urlParams.subredditName && a.a.createElement("div", {
						className: T.a.membershipPaywallTitle
					}, Object(v.c)("r/".concat(Object(v.b)("communityName", r.urlParams.subredditName), " Special Membership")))), a.a.createElement("div", {
						className: T.a.actions
					}, a.a.createElement(g.n, {
						className: T.a.close,
						onClick: t || this.closeLightbox,
						title: Object(v.c)("Close"),
						"aria-label": Object(v.c)("Close")
					}, a.a.createElement(j.a, null), a.a.createElement("span", {
						className: T.a.closeText
					}, a.a.createElement(x.c, null, "Close")))))
				}
			}
			const A = {
				[w.n.GIFVIDEO]: C.a,
				[w.n.IMAGE]: E.a,
				[w.n.TEXT]: P.a,
				[w.n.RTJSON]: P.a,
				[w.n.VIDEO]: y.a,
				[w.n.EMBED]: O.a,
				[w.n.LIVEVIDEO]: y.a
			};
			t.a = Object(b.b)(F(R))
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, s) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "m", (function() {
				return u
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "k", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "n", (function() {
				return y
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "q", (function() {
				return O
			})), s.d(t, "r", (function() {
				return E
			})), s.d(t, "o", (function() {
				return P
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "p", (function() {
				return w
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				r = s("./src/reddit/controls/Input/ModalInput.tsx"),
				o = s("./src/reddit/icons/svgs/Close/index.tsx"),
				i = s("./src/reddit/components/ModalStyledComponents/index.m.less"),
				c = s.n(i);
			const d = n.a.wrapped(o.a, "CloseIcon", c.a),
				l = n.a.section("ModalBody", c.a),
				u = n.a.p("ModalText", c.a),
				m = n.a.div("ModalSmallText", c.a),
				p = n.a.div("ModalDescriptionText", c.a),
				b = n.a.div("ModalMetaText", c.a),
				h = n.a.label("ModalFormItem", c.a),
				g = n.a.wrapped(r.a, "ModalInput", c.a),
				f = n.a.label("ModalInputLabel", c.a),
				x = n.a.footer("ModalFooter", c.a),
				v = n.a.header("ModalHeader", c.a),
				y = n.a.div("ModalTitle", c.a),
				C = n.a.div("ModalMain", c.a),
				O = n.a.textarea("TextArea", c.a),
				E = n.a.wrapped(a.f, "WarningButton", c.a),
				P = n.a.wrapped(a.f, "PrimaryButton", c.a),
				j = n.a.wrapped(a.i, "CancelButton", c.a),
				w = n.a.wrapped(a.n, "RemoveButton", c.a)
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				o = () => null;
			t.b = Object(n.a)({
				ErrorComponent: o,
				getComponent: () => Object(a.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~ModerationPages~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/PinnedSubscriptions/index.m.less": function(e, t, s) {
			e.exports = {
				title: "FRrbwuHy8Zmlubp3nowLZ",
				listHeader: "_3hELZctjzdizaWjW1al9DZ",
				unpin: "_2oY_N7NWiAv9m_mFIRdwVX",
				icon: "_3B-ny-D97ZKwdUyXAaWF19",
				Component: "_20fGT0XJD3MvX9yBsVeKMn",
				component: "_20fGT0XJD3MvX9yBsVeKMn"
			}
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/app/strings/index.ts"),
				o = s("./src/lib/timeAgo/index.ts"),
				i = s("./src/lib/timeUntil/index.ts");

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? Object(r.a)(e.language, "polls.closed", {
					timeAgo: Object(o.d)(e.language, e.poll.endsAt / 1e3)
				}) : Object(i.a)(e.language, new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			var n = s("./node_modules/lodash/isEqual.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/flair.ts"),
				o = s("./src/reddit/helpers/flair.ts"),
				i = s("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === i.f.Text || e.type === i.f.Image || e.type === i.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, s) => {
				if (s && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const n = e && t.templateId ? e[t.templateId] : void 0;
				if (!n) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const i = Object(o.g)(t).length;
				return 0 === i ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : i > r.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(o.n)(t) && !Object(o.q)(n) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : a()(s, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				g = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/path/index.ts"),
				x = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = s("./src/lib/getShortenedLink.ts"),
				E = s("./src/reddit/components/FlairWrapper/index.tsx"),
				P = s("./src/app/strings/index.ts"),
				j = s("./src/lib/prettyPrintNumber/index.ts"),
				w = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				M = s("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				S = s.n(M);
			const N = Object(c.c)({
				language: e => e.user.language,
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var I = Object(o.b)(N)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(d.a)(e.className, S.a.proposalMetaData)
					}, r.a.createElement("span", null, Object(P.c)(e.language, "polls.numVotesCommas", parseInt(n), {
						count: Object(j.a)(n)
					})), t && r.a.createElement(w.a, {
						className: S.a.proposalMetaDataTime,
						language: e.language,
						poll: t
					}))
				})),
				k = s("./src/reddit/components/SEOTitle/index.tsx"),
				_ = s("./src/reddit/selectors/posts.ts"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/PostTitle/index.m.less"),
				R = s.n(F),
				A = s("./src/config.ts");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return B
			})), s.d(t, "a", (function() {
				return U
			}));
			var B, H = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(B || (B = {}));
			const U = u.a.wrapped(Object(l.a)(e => {
					var {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: a,
						children: o,
						className: i,
						redditStyle: c
					} = e, l = H(e, ["size", "titleColor", "titleType", "nowrap", "children", "className", "redditStyle"]);
					let u = "";
					switch (t) {
						case B.ExtraLarge:
							u = R.a.ExtraLarge;
							break;
						case B.Large:
							u = R.a.Large;
							break;
						case B.Medium:
							u = R.a.Medium;
							break;
						case B.Small:
							u = R.a.Small;
							break;
						case B.ExtraSmall:
							u = R.a.ExtraSmall
					}
					return r.a.createElement("div", D({
						className: Object(d.a)(i, u, {
							[R.a.isNoWrap]: a
						}),
						style: {
							"--posttitletextcolor": s || Object(C.a)(Object.assign({
								redditStyle: c
							}, l)).titleText
						}
					}, l), n ? r.a.createElement(k.b, {
						type: n
					}, o) : o)
				}), "Title", R.a),
				V = e => {
					var {
						className: t,
						disableVisited: s,
						titleColor: n
					} = e, a = H(e, ["className", "disableVisited", "titleColor"]);
					return r.a.createElement(i.a, D({}, a, {
						className: Object(d.a)(t, R.a.styledLink, {
							[R.a.isVisitedEnabled]: !s
						})
					}), a.children)
				},
				Q = e => {
					var {
						disableVisited: t,
						nowrap: s
					} = e, n = H(e, ["disableVisited", "nowrap"]);
					return r.a.createElement("div", D({}, n, {
						className: Object(d.a)(R.a.titleContainer, n.className, {
							[R.a.isNoWrap]: s,
							[R.a.isVisitedEnabled]: !t
						})
					}))
				},
				W = Object(p.t)({
					isCommentPermalink: p.v,
					pageLayer: e => e
				}),
				q = Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(p.p)(e, {
							pageLayer: s
						})
					},
					isMeta: (e, t) => {
						let {
							post: s
						} = t;
						return Object(_.o)(e, {
							postId: s.id
						})
					},
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(T.S)(e, {
							subredditId: s.belongsTo.id
						}).name
					},
					shouldOpenPostInNewTab: L.X
				}),
				G = Object(o.b)(q),
				z = e => {
					const {
						post: t
					} = e, {
						isSponsored: s
					} = t;
					if (!e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						const n = e.isCommentPermalink ? Object(f.b)(t.permalink) : Object(h.a)(t.permalink);
						return r.a.createElement(Q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s ? r.a.createElement(Z, e) : r.a.createElement(V, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: n
						}, r.a.createElement(Z, e)))
					}
					return r.a.createElement(Q, {
						nowrap: e.nowrap
					}, r.a.createElement(Z, e))
				},
				Z = e => {
					const {
						leftFlair: t,
						post: s
					} = e, n = e.format ? e.format(s) : s.title, a = e.isCommentsPage ? k.a.PostComments : k.a.PostItem;
					return r.a.createElement(U, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && r.a.createElement(E.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), n)
				},
				K = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: n
					} = s, a = !t && !e.isCrosspost && e.size !== B.Large && !s.isSponsored && (s.source || s.media && (s.media.type === y.n.GIFVIDEO || s.media.type === y.n.IMAGE || s.media.type === y.n.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return r.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(y.A)(s),
							isSponsored: n,
							source: s.source
						}, Object(O.a)(s), r.a.createElement(x.a, {
							className: R.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== B.Large && e.size !== B.ExtraLarge) return r.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						source: s.source
					}, Object(O.a)(s), r.a.createElement(x.a, null));
					return null
				};
			class Y extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n        .".concat(this.props.post.id, " .").concat(R.a.Component, " {\n          --postTitle-VisitedLinkColor: ").concat(Object(n.d)(.45, Object(C.a)(this.props).titleText, "#FFFFFF"), ";\n          --postTitleLink-VisitedLinkColor: ").concat(Object(n.d)(.45, this.props.titleColor || Object(C.a)(this.props).titleText, Object(C.a)(this.props).body), ";\n        }\n      ")
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: n,
						isM2MHomeRedirectEnabled: a,
						isMeta: o,
						isOverlay: i,
						poll: c,
						post: l,
						showNSFWSpoilerFlairsOnly: u
					} = this.props, m = s === v.b.Left, p = Object(E.b)(o, l), b = u ? p.filter(e => e.type === v.f.Nsfw || e.type === v.f.Spoiler) : m ? p.filter(e => Object(g.p)(e.type)) : [], h = u ? [] : m ? p.filter(e => !Object(g.p)(e.type)) : p, f = a || !i && !n, x = !t && b && b.length > 0 && f, y = !t && h && h.length > 0 && f;
					return r.a.createElement("div", {
						className: Object(d.a)(e, l.id)
					}, !u && x && r.a.createElement(E.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: l,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement(z, D({}, this.props, {
						leftFlair: u ? b : void 0
					})), c && r.a.createElement(I, {
						className: R.a.pollMeta,
						pollId: c.id
					}), r.a.createElement(K, this.props), y && r.a.createElement(E.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: l,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement("div", {
						className: R.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: '\n              <img alt="" src="'.concat(A.a.assetPath, '/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            ')
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = u.a.wrapped(W(G(Object(l.a)(Object(m.b)(Y)))), "Component", R.a)
		},
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				r = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const o = () => Object(a.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("PremiumPurchaseModal")]).then(s.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(r.c)()])).then(e => e[0].default),
				i = Object(n.a)({
					getComponent: o,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			t.a = i
		},
		"./src/reddit/components/ProfileIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_165RkdCO9QoaErMgkkAsEc"
			}
		},
		"./src/reddit/components/Root/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL"
			}
		},
		"./src/reddit/components/Root/redesignFont.less": function(e, t, s) {},
		"./src/reddit/components/SEOTitle/index.m.less": function(e, t, s) {
			e.exports = {
				Title: "_eYtD2XCVieq6emjKBH3m",
				title: "_eYtD2XCVieq6emjKBH3m"
			}
		},
		"./src/reddit/components/SEOTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n, a, r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(n || (n = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(a || (a = {}));
			var d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/helpers/postCollection.ts");
			const u = [d.yb.COMMENTS, d.yb.COLLECTION_COMMENTS],
				m = (e, t) => {
					if (!e) return [];
					const s = u.includes(e),
						a = e === d.yb.COLLECTION_COMMENTS || t && Object(l.a)(t),
						r = d.M.has(e),
						o = d.pb.has(e),
						i = e === d.yb.SUBREDDIT,
						c = e === d.yb.TOPIC;
					let m, p, b;
					return r && !i || o ? m = n.HeaderSelector : a ? m = n.Collection : s ? m = n.PostComments : c && (m = n.TopicHeader), (r || o || a || s) && (p = n.Widget), (r || s) && (b = n.PostItem), [m, p, b]
				};
			var p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/components/SEOTitle/index.m.less"),
				g = s.n(h);
			s.d(t, "a", (function() {
				return n
			}));
			const f = e => {
					let {
						level: t,
						children: s
					} = e;
					const n = "h".concat(t);
					return o.a.createElement(n, {
						className: g.a.Title
					}, s)
				},
				x = Object(p.t)(),
				v = Object(i.b)(() => Object(c.a)((e, t) => {
					let {
						pageLayer: s
					} = t;
					return s && Object(b.n)(e, {
						page: s
					})
				}, (e, t) => {
					let {
						pageLayer: s
					} = t;
					return s && s.meta && s.meta.name
				}, (e, t) => {
					let {
						type: s
					} = t;
					return s
				}, (e, t, s) => ({
					level: m(t, e).indexOf(s) + 1 || void 0
				})));
			class y extends o.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? o.a.createElement(f, {
						level: t
					}, e) : o.a.createElement(o.a.Fragment, null, e)
				}
			}
			t.b = x(v(y))
		},
		"./src/reddit/components/SearchDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				listItemIcon: "fcDVF0HYfR8ZcZgQVT0oo",
				mTrending: "cuK0QQebBI_tpWwN_YN9M",
				listItemTitle: "_3HPgggOIyY0x9kiADxwwaj",
				mWithBorder: "_2Uets9AVOC4pygPHGHCAAM",
				listItem: "_20OHBqoDD71_8fv7tuG6u6",
				mHoverable: "_1IJwm0Qscr8yPuyii8YsSS",
				mFocused: "_1NDuQGNA_7Cuo411jRXLVg",
				mTypeahead: "_3NseKdP3_1HONmKk_kK3_l",
				listItemText: "_17mZueOafzj0Dlja0Wc9os",
				listItemSubtext: "_1CCbYggNpm1_k3lDTmKgSW",
				mNoPostTitle: "_3etfe7dx7ViSNcYo4Q--LD",
				loadingItem: "_3wwag2ZgVLfNKLCuEuXF7h",
				dropdown: "_1HnfZtTmYelxTj6QL6aaXS",
				fixedTextTooltip: "_1U-nknzRP43RdLab5D4_lK",
				subredditIconStyles: "_26nS8Ogzm0pqOjlwfGRgJR",
				subredditIcon: "_3uBNO7SvsRGN4W794WAO_p",
				planetIcon: "_2Tfe4NhLJlRQkuO1yhzqR2",
				postTitle: "YeMwUP22Up8CVxmgTayyQ"
			}
		},
		"./src/reddit/components/ShortcutIndexModal/index.m.less": function(e, t, s) {
			e.exports = {
				ColumnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				columnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				ColumnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				columnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				Column: "_3O97w7RY6RBkLbc3u-Mg4u",
				column: "_3O97w7RY6RBkLbc3u-Mg4u",
				Description: "_2rgXACgxMtUDCuKcGDK6tL",
				description: "_2rgXACgxMtUDCuKcGDK6tL",
				Key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				ModalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				modalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				ModalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				modalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				PrimaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				primaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				TextButton: "_1RrzHtukV58ONGeHXBNR7t",
				textButton: "_1RrzHtukV58ONGeHXBNR7t",
				ConnectedModal: "_1qRgDlLw5wytfgHvP96-gS",
				connectedModal: "_1qRgDlLw5wytfgHvP96-gS"
			}
		},
		"./src/reddit/components/ShortcutWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				shortcutDiv: "_1gsAk1ihQliBnDybgyjghy"
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/icepick/icepick.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/reddit/models/StructuredStyles/index.ts"),
				m = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/selectors/structuredStyles.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				g = s("./src/lib/CSSVariableProvider/index.tsx"),
				f = s("./src/lib/isAdHocMultireddit/index.ts");
			const x = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(l.n)(e, t);
			class v extends r.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: s
					} = this.props;
					return r.a.createElement(g.e, {
						theme: s,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const y = Object(o.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.j)(e), e => {
				if (Object(p.j)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.j)(e)) return Object(p.g)(e, t)
			}, x, Object(c.a)((e, t) => {
				if (Object(p.j)(e) || Object(h.gb)(e)) return;
				const s = x(e, t);
				if (!s) return;
				const n = Object(b.G)(e, s);
				if (!n) return;
				if (Object(h.fb)(e, {
						subredditId: n
					})) return;
				const a = e.structuredStyles.models[n];
				return a || void 0
			}), (e, t) => {
				const s = x(e, t);
				if (!s) return;
				const n = Object(b.y)(e, {
					subredditName: s
				});
				return n ? n.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.mb)(e).nightmode
			}, (e, t) => {
				if (!Object(h.mb)(e).hideNSFW) return !0;
				const s = x(e, t);
				if (s) {
					const t = Object(b.B)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const n = Object(l.d)(e, t);
				return !!n && n.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, s, a, r, o, i, c, d, l, p) => {
				const b = Object.assign({}, i ? {
						emojiWidth: i[0],
						emojiHeight: i[1]
					} : {}, {
						shouldShowNSFWContent: d,
						isCommentsPage: p,
						isOverlay: l
					}),
					h = r && r.length && !Object(f.a)(r) ? "SubredditVars-r-".concat(r) : g.c;
				if (t && s && a) {
					const e = Object(u.h)(s, a);
					return {
						isRootOrUniqueClassName: h,
						theme: Object(m.j)(e, b)
					}
				}
				if (o) {
					const e = Object(u.h)(o);
					let t;
					return {
						isRootOrUniqueClassName: h,
						theme: t = c ? Object(m.i)(e, b) : Object(m.j)(e, b)
					}
				}
				return {
					isRootOrUniqueClassName: h,
					theme: Object(n.merge)(e, {
						subredditContext: b
					})
				}
			}))(v);
			t.b = y;
			const C = Object(d.t)()(y)
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/isUrl/index.ts"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				l = s("./src/reddit/icons/fonts/Link/index.tsx"),
				u = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				m = s("./src/reddit/icons/fonts/Text/index.tsx"),
				p = s("./src/reddit/icons/fonts/helpers.tsx"),
				b = s("./src/reddit/icons/fonts/Video/index.m.less"),
				h = s.n(b);
			var g = c.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(p.b)("video"), " ").concat(e.className)
				}), "VideoIcon", h.a),
				f = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				x = s("./src/reddit/constants/elementClassNames.ts"),
				v = s("./src/reddit/controls/ContentType/index.m.less"),
				y = s.n(v);
			const C = e => Object(o.a)(y.a.contentTypeIcon, e.className),
				O = e => r.a.createElement(l.a, {
					className: Object(o.a)(x.a, C(e))
				});
			var E = e => {
					const t = C(e);
					switch (e.type) {
						case "gifvideo":
							return r.a.createElement(d.a, {
								className: t
							});
						case "image":
							return r.a.createElement(u.a, {
								className: t
							});
						case "meta":
							return r.a.createElement(f.a, {
								className: t
							});
						case "rtjson":
						case "text":
							return r.a.createElement(m.a, {
								className: t
							});
						case "video":
							return r.a.createElement(g, {
								className: t
							});
						default:
							return r.a.createElement(O, e)
					}
				},
				P = s("./src/reddit/controls/OutboundLink/index.tsx"),
				j = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/models/Theme/index.ts"),
				S = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = s("./src/reddit/components/Thumbnail/index.m.less"),
				I = s.n(N);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return V
			}));
			const _ = e => e.placeholderImage || Object(S.a)(e).placeholderImage,
				T = e => e.placeholderImage ? "cover" : Object(S.a)(e).placeholderImagePosition,
				L = c.a.span("LinkText", I.a),
				F = e => {
					let {
						className: t,
						onClick: s,
						children: n
					} = e;
					return r.a.createElement("div", {
						onClick: s,
						className: Object(o.a)(I.a.linkIcon, t)
					}, n)
				},
				R = e => r.a.createElement("img", {
					alt: e.alt,
					className: Object(o.a)(I.a.hiddenImage, e.className)
				}),
				A = e => r.a.createElement("div", {
					"aria-label": e.alt,
					className: Object(o.a)(I.a.thumbnail, I.a.imageThumbnail, e.className),
					"data-click-id": "image",
					role: "img",
					style: {
						backgroundImage: "url(".concat(e.src, ")"),
						borderColor: e.isOutbound ? Object(S.a)(e).button : Object(S.a)(e).line
					}
				}, e.isOutbound && r.a.createElement(F, {
					className: e.linkIconClassName
				}, r.a.createElement(j.a, {
					className: Object(o.a)(I.a.outboundLinkIcon, e.outboundLinkIconClassName)
				}), e.text && r.a.createElement(L, {
					className: e.linkTextClassName
				}, e.text)), r.a.createElement(R, {
					alt: e.alt,
					className: "hiddenImg"
				})),
				D = e => e.isOutbound ? Object(S.a)(e).button : e.placeholderImage ? "transparent" : Object(S.a)(e).line,
				B = e => {
					const t = _(e),
						s = t && {
							background: Object(M.g)(Object(S.a)(e).placeholder, t, T(e))
						};
					return r.a.createElement("div", {
						className: Object(o.a)(I.a.thumbnail, I.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: Object.assign({}, s, {
							borderColor: D(e)
						})
					}, (!e.placeholderImage || e.showContentType) && r.a.createElement(E, {
						className: Object(o.a)(I.a.contentType, {
							[I.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta ? "meta" : e.type
					}), e.isOutbound && r.a.createElement(F, {
						className: e.linkIconClassName
					}, r.a.createElement(j.a, {
						className: Object(o.a)(I.a.outboundLinkIcon, e.outboundLinkIconClassName)
					}), e.text && r.a.createElement(L, {
						className: e.linkTextClassName
					}, e.text)))
				},
				H = e => r.a.createElement(A, k({}, e, {
					className: Object(o.a)(I.a.blurredThumbnail, e.className)
				})),
				U = Object(i.a)(e => {
					const {
						className: t,
						containerClassName: s,
						crosspost: a,
						forceShowNSFW: i,
						isMeta: c,
						linkIconClassName: d,
						linkTextClassName: l,
						outboundLinkIconClassName: u,
						post: m,
						redditStyle: p,
						removeLink: b,
						showContentType: h,
						templatePlaceholderImage: g,
						text: f,
						theme: x,
						usePreview: v
					} = e, y = !x.subredditContext.shouldShowNSFWContent && (m.isNSFW || !(!a || !a.isNSFW)) && !i, C = _({
						placeholderImage: g,
						redditStyle: p,
						theme: x
					}), O = V(e), E = Q(m, t, C, y, f, x, O, c, h, b, p, d, l, u), j = Object(w.A)(m);
					return Object(n.a)(j) && !b && j.indexOf("redditmedia") < 0 ? r.a.createElement("div", {
						className: Object(o.a)(I.a.container, v ? I.a.usePreview : "", s)
					}, r.a.createElement(P.a, {
						href: Object(w.A)(m),
						isSponsored: m.isSponsored,
						source: m.source
					}, E)) : r.a.createElement("div", {
						className: Object(o.a)(I.a.container, v ? I.a.usePreview : "", s)
					}, E)
				}),
				V = e => {
					let {
						crosspost: t,
						post: s,
						url: n,
						usePreview: a
					} = e;
					return n || (t ? a && t.preview ? t.preview.url : t.thumbnail.url : a && s.preview ? s.preview.url : s.thumbnail.url)
				},
				Q = (e, t, s, a, o, i, c, d, l, u, m, p, b, h) => {
					const g = e.source && !e.isSponsored || !1;
					return Object(n.a)(c) ? a ? r.a.createElement(H, {
						"data-click-id": "image",
						src: c,
						className: t,
						isOutbound: g && !u,
						linkIconClassName: p,
						linkTextClassName: b,
						outboundLinkIconClassName: h,
						redditStyle: m,
						text: o,
						theme: i
					}) : r.a.createElement(A, {
						alt: e.title,
						className: t,
						src: c,
						isOutbound: g && !u,
						linkIconClassName: p,
						linkTextClassName: b,
						outboundLinkIconClassName: h,
						redditStyle: m,
						text: o,
						theme: i
					}) : r.a.createElement(B, {
						className: t,
						placeholderImage: s,
						isMeta: d,
						isOutbound: g && !u,
						linkIconClassName: p,
						linkTextClassName: b,
						outboundLinkIconClassName: h,
						redditStyle: m,
						showContentType: l,
						text: o,
						theme: i,
						type: e.media ? e.media.type : null
					})
				};
			t.a = U
		},
		"./src/reddit/components/Toaster/EuCookiePolicyToast.m.less": function(e, t, s) {
			e.exports = {
				Icon: "_2pPCvXlD2wzNO9taY3pzqw",
				icon: "_2pPCvXlD2wzNO9taY3pzqw",
				PrimaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				primaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				Bread: "_3RhWPJfjpsEoBw52x0fQp2",
				bread: "_3RhWPJfjpsEoBw52x0fQp2"
			}
		},
		"./src/reddit/components/Toaster/MilestoneToast.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3Cb-J_TUgYhl23GF1E8ueS",
				container: "_3Cb-J_TUgYhl23GF1E8ueS",
				SideImage: "_3noiB6ClBZxqX-VfENVYha",
				sideImage: "_3noiB6ClBZxqX-VfENVYha",
				Main: "_2uE5iMLmEfZ_HNjn85c1NP",
				main: "_2uE5iMLmEfZ_HNjn85c1NP",
				SubTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				subTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				PrimaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				primaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				CloseIcon: "_1kI4teIozhxDil2omCIIs5",
				closeIcon: "_1kI4teIozhxDil2omCIIs5"
			}
		},
		"./src/reddit/components/Toaster/PlainBread.m.less": function(e, t, s) {
			e.exports = {
				PlainBread: "trdUvQxqQHHqQKOUBcgnr",
				plainBread: "trdUvQxqQHHqQKOUBcgnr"
			}
		},
		"./src/reddit/components/Toaster/StyledComponents.m.less": function(e, t, s) {
			e.exports = {
				Text: "_7JH6kQpO-bx66b9ajIZrz",
				text: "_7JH6kQpO-bx66b9ajIZrz"
			}
		},
		"./src/reddit/components/Toaster/UappBannerToast.m.less": function(e, t, s) {
			e.exports = {
				Icon: "NODQrxMsajJv0SMw0Glss",
				icon: "NODQrxMsajJv0SMw0Glss",
				PrimaryButton: "_-660JDG_NhSvu-lby-LYB",
				primaryButton: "_-660JDG_NhSvu-lby-LYB",
				Bread: "_3jUV8naze01hV-7EqsBdjm",
				bread: "_3jUV8naze01hV-7EqsBdjm"
			}
		},
		"./src/reddit/components/Toaster/index.m.less": function(e, t, s) {
			e.exports = {
				AuthErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				authErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				AuthErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				authErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				SnooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				snooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				SnooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				snooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				SubredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				subredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				Container: "_3q-XSJ2vokDQrvdG6mR__k",
				container: "_3q-XSJ2vokDQrvdG6mR__k",
				Bread: "EjdBJNEwygtHMKiHd3Bnv",
				bread: "EjdBJNEwygtHMKiHd3Bnv",
				mModal: "_29WPjLJ0vRIyLIUC_lQ4a8",
				ButtonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				buttonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				ContentWrapper: "_21oJwLzDt5kLN6scufKBab",
				contentWrapper: "_21oJwLzDt5kLN6scufKBab"
			}
		},
		"./src/reddit/components/Translated/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/lodash/isEqual.js"),
				a = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/contexts/Language.tsx");
			class d extends o.a.Component {
				constructor() {
					super(...arguments), this.getString = e => Object(i.a)(e, this.props.msgId, this.props.replacements)
				}
				shouldComponentUpdate(e) {
					return this.props.msgId !== e.msgId || !a()(this.props.replacements, e.replacements)
				}
				render() {
					return o.a.createElement(c.a.Consumer, null, this.getString)
				}
			}
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/components/AdViewability/index.tsx"),
				o = s("./src/reddit/components/BlankPost/index.tsx"),
				i = s("./src/reddit/connectors/PostViewable/index.ts");
			const c = Object(i.a)(null);
			class d extends a.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: s
					} = this.props;
					if (t) return t.isBlank ? a.a.createElement(o.a, {
						post: t,
						onPostViewable: s
					}) : a.a.createElement(r.a, {
						onViewable: e => s(t, e),
						children: e,
						trackVideoMetrics: !1
					})
				}
			}
			t.a = c(d)
		},
		"./src/reddit/components/UserFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "_2jjk9b3mpveU6Vpam4kPBm",
				clearButton: "_2HCY4xCLt3RKVIgnkh0ZgW",
				Section: "_3dGLI85CRTmDAbSQrDiQZl",
				section: "_3dGLI85CRTmDAbSQrDiQZl",
				CheckboxText: "_2pIwiaNLf5jaTR1EK7Nx09",
				checkboxText: "_2pIwiaNLf5jaTR1EK7Nx09"
			}
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return C
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/constants/elementClassNames.ts"),
				u = s("./src/reddit/controls/Score/index.tsx"),
				m = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/selectors/monthsToMinutes.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/VerticalVotes/index.m.less"),
				x = s.n(f);
			const v = Object(i.c)({
					m2mIsEnabled: h.w,
					isNightmode: g.V
				}),
				y = Object(o.b)(v),
				C = e => !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: b.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.upvoted), this.setState({
							voted: e !== b.a.upvoted ? b.a.upvoted : b.a.notVoted
						})
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.downvoted), this.setState({
							voted: e !== b.a.downvoted ? b.a.downvoted : b.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isNightmode: s,
							shouldShowScore: a = !0,
							upvoteButtonClassName: o
						} = e,
						i = !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
						d = C(e),
						{
							voted: h
						} = this.state,
						g = e.model.voteState,
						f = e.m2mIsEnabled && h === b.a.upvoted ? x.a.bounceUp : "",
						v = e.m2mIsEnabled && h === b.a.downvoted ? x.a.bounceDown : "";
					return r.a.createElement("div", {
						className: Object(c.a)(x.a.votesContainer, e.className)
					}, i ? r.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": g === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightmode: s,
						onClick: this.onUpvote,
						voteState: g
					}) : r.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": g === b.a.upvoted,
						className: Object(c.a)(l.p, o, f),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, r.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: g
					})), !e.compact && a && r.a.createElement(u.a, {
						className: e.scoreClassName,
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: g,
						isScoreHidden: e.model.isScoreHidden
					}), d ? r.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": g === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightmode: s,
						onClick: this.onDownvote,
						voteState: g
					}) : r.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": g === b.a.downvoted,
						className: Object(c.a)(l.p, t, v),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, r.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: g
					})))
				}
			}
			const E = Object(d.a)(y(O));
			t.a = E
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, s) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, s) => n => {
				const a = e(n),
					o = t(n),
					i = !a && o;
				return Object(r.a)(s.baseClassName, n.className, {
					[s.mIsInteractive]: o,
					[s.mIsActive]: a,
					[s.mIsVoteable]: i
				})
			};
			var c = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = s("./src/reddit/models/Vote/index.ts"),
				l = s("./src/reddit/controls/Downvote/index.m.less"),
				u = s.n(l);
			const m = i(e => {
				let {
					voteState: t
				} = e;
				return t === d.a.downvoted
			}, e => {
				let {
					interactive: t
				} = e;
				return !1 !== t
			}, Object.assign({}, u.a, {
				baseClassName: u.a.Downvote
			}));
			var p = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				b = s("./src/reddit/controls/Upvote/index.m.less"),
				h = s.n(b);
			const g = i(e => {
				let {
					voteState: t
				} = e;
				return t === d.a.upvoted
			}, e => {
				let {
					interactive: t
				} = e;
				return !1 !== t
			}, Object.assign({}, h.a, {
				baseClassName: h.a.Upvote
			}));
			var f = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				x = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = s("./src/reddit/components/VerticalVotes/votes.m.less"),
				C = s.n(y);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "c", (function() {
				return M
			})), s.d(t, "d", (function() {
				return S
			}));
			var E = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const P = e => Object(r.a)({
					[C.a.compact]: e.compact,
					[C.a.dark]: Object(x.b)(Object(f.a)(e)),
					[C.a.nightmode]: e.isNightmode
				}),
				j = Object(o.a)(e => {
					const {
						voteIcons: t
					} = Object(v.a)(e), s = {
						"--verticalvotes-customdownvote-active": "url(".concat(t.downvoteActive, ")"),
						"--verticalvotes-customdownvote-inactive": "url(".concat(t.downvoteInactive, ")")
					}, {
						theme: n
					} = e, o = E(e, ["theme"]);
					return a.a.createElement("button", O({}, o, {
						className: Object(r.a)(C.a.customDownvote, P(e), {
							[C.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: s
					}))
				}),
				w = Object(o.a)(e => {
					const {
						voteIcons: t
					} = Object(v.a)(e), s = {
						"--verticalvotes-customupvote-active": "url(".concat(t.upvoteActive, ")"),
						"--verticalvotes-customupvote-inactive": "url(".concat(t.upvoteInactive, ")")
					}, {
						theme: n
					} = e, o = E(e, ["theme"]);
					return a.a.createElement("button", O({}, o, {
						className: Object(r.a)(C.a.customUpvote, P(e), {
							[C.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: s
					}))
				}),
				M = e => a.a.createElement(c.a, {
					className: m(e),
					compact: e.compact
				}),
				S = e => a.a.createElement(p.a, {
					className: g(e),
					compact: e.compact
				})
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(n.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return Object.assign({}, e, {
					onPostViewable: a.C
				})
			}(t))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/structuredStyles/index.ts"),
				o = s("./src/reddit/selectors/activeModalId.ts"),
				i = s("./src/reddit/selectors/structuredStyles.ts"),
				c = s("./src/reddit/constants/modals.ts");
			const d = Object(a.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.j,
				isBladeEditorDirty: i.i,
				isModalOpen: Object(o.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(n.b)(d, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					requestCloseBlade: () => s && e(Object(r.h)(s))
				}
			})
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, s) {
			"use strict";
			var n, a, r;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return a
				})), s.d(t, "c", (function() {
					return r
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/"
				}(n || (n = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.Login = "login", e.Register = "register", e.Resize = "resize", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(a || (a = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(r || (r = {}))
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "j", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "n", (function() {
				return p
			})), s.d(t, "r", (function() {
				return b
			})), s.d(t, "s", (function() {
				return h
			})), s.d(t, "t", (function() {
				return g
			})), s.d(t, "v", (function() {
				return f
			})), s.d(t, "u", (function() {
				return x
			})), s.d(t, "w", (function() {
				return v
			})), s.d(t, "x", (function() {
				return y
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "m", (function() {
				return O
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "o", (function() {
				return P
			})), s.d(t, "p", (function() {
				return j
			})), s.d(t, "q", (function() {
				return w
			}));
			const n = 284,
				a = 450,
				r = 800,
				o = 284,
				i = 48,
				c = 640,
				d = 1600,
				l = 1280,
				u = 40,
				m = 48,
				p = 24,
				b = 24,
				h = 312,
				g = 40,
				f = 270,
				x = 106,
				v = 5,
				y = 16,
				C = 40,
				O = 1250,
				E = 82,
				P = 48,
				j = 36,
				w = 37
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			}));
			const n = "reddit",
				a = "reddit.ready",
				r = "reddit.urlChanged"
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = 480,
				a = 960,
				r = 1200
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			const n = 4,
				a = 60,
				r = 70,
				o = 90,
				i = 99,
				c = 100,
				d = 100
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/brcast/dist/brcast.es.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = r.a.createContext(Object(n.a)([]))
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const o = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				i = Object(n.createContext)(o);

			function c(e) {
				return t => a.a.createElement(i.Consumer, null, s => {
					let {
						apiContext: n,
						gqlContext: o
					} = s;
					return a.a.createElement(e, r({
						apiContext: n,
						gqlContext: o
					}, t))
				})
			}
		},
		"./src/reddit/contexts/Language.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js");
			const a = Object(n.createContext)("en")
		},
		"./src/reddit/contexts/ThrottlingContext/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/featureThrottling.ts"),
				o = s("./src/reddit/helpers/featureThrottling/store/index.ts");
			const i = {
					isThrottled: !1,
					resetFeature: () => {
						throw new Error("Component attempted to reset feature with no ThrottlingContext")
					},
					throttleFeature: () => {
						throw new Error("Component attempted to throttle feature with no ThrottlingContext")
					}
				},
				c = Object.keys(r.a).reduce((e, t) => (e[t] = Object(n.createContext)(i), e), {});
			class d extends a.a.Component {
				constructor(e) {
					super(e), this.onThrottlingDataChange = (e, t) => {
						if (t) {
							const e = o.a.isFeatureThrottled(t);
							this.setState(s => e === s[t].isThrottled ? null : Object.assign({}, s, {
								[t]: Object.assign({}, s[t], {
									isThrottled: e
								})
							}))
						} else this.setState(e => {
							const t = Object.keys(r.a).reduce((t, s) => (o.a.isFeatureThrottled(s) && (t[s] = Object.assign({}, e[s], {
								isThrottled: !0
							})), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const s = c[t];
						return a.a.createElement(s.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(r.a).reduce((e, t) => (e[t] = {
						isThrottled: !1,
						resetFeature: o.a.resetFeature.bind(o.a, t),
						throttleFeature: o.a.throttleFeature.bind(o.a, t)
					}, e), {})
				}
				componentDidMount() {
					o.a.subscribe(this.onThrottlingDataChange)
				}
				componentWilUnmount() {
					o.a.unsubscribe(this.onThrottlingDataChange)
				}
				render() {
					return Object.keys(c).reduce(this.renderContextProvider, this.props.children)
				}
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, s) {
			e.exports = {
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = s("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				d = s.n(c);
			t.a = e => a.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(r.a)(d.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, a.a.createElement("span", {
				tabIndex: -1,
				className: d.a.labelContent
			}, e.isSelected ? a.a.createElement(i.a, {
				className: d.a.checkboxSelected
			}) : a.a.createElement(o.a, {
				className: d.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, s) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/Dropdown/index.m.less": function(e, t, s) {
			e.exports = {
				dropdownTriangle: "_1oxgVV3q47KbjEKqP5CHuM",
				iconStyles: "Ls9uHSAO9p2g7EMya2KXp",
				dropdown: "_2uYY-KeuYHKiwl-9aF0UiL"
			}
		},
		"./src/reddit/controls/Dropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/domUtils/index.ts"),
				i = s("./src/reddit/constants/zIndex.ts"),
				c = s("./src/reddit/controls/Dropdown/index.m.less"),
				d = s.n(c);
			class l extends a.a.Component {
				componentDidMount() {
					this.props.noFocus || this.ref && this.ref.focus({
						preventScroll: this.props.isOverlay
					})
				}
				componentWillUnmount() {
					Object(o.a)(this.props.tooltipId)
				}
				render() {
					const e = this.props,
						t = {};
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? i.d + 1 : i.c)), a.a.createElement("div", {
						className: Object(r.a)(d.a.dropdown, e.className),
						ref: e => this.ref = e,
						role: "menu",
						style: Object.assign({}, t, e.style),
						tabIndex: -1
					}, e.children)
				}
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/constants/keycodes.ts"),
				d = s("./src/reddit/controls/Input/index.m.less"),
				l = s.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			class p extends a.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const e = this.props,
						{
							className: t,
							closeModal: s
						} = e,
						n = m(e, ["className", "closeModal"]);
					return a.a.createElement("input", u({
						className: Object(o.a)(l.a.input, t),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: i.f
			})(p)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.m.less": function(e, t, s) {
			e.exports = {
				invisibleText: "_1RIl585IYPW6cmNXwgRz0J"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/InvisibleScreenReaderText/index.m.less"),
				r = s.n(a);
			t.a = n.a.span("invisibleText", r.a)
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, s) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Link/index.m.less"),
				r = s.n(a);
			t.a = n.a.a("link", r.a)
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, s) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/constants/keycodes.ts"),
				i = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = s.n(l);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== o.b.Enter && e.key !== o.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : a.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(r.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? a.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : a.a.createElement(i.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/keycodes.ts");
			class o extends a.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: s
						} = this.props;
						t || this.state.value !== e && (s(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return a.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: s
						} = this.props, {
							value: n
						} = this.state;
						if (t) return;
						const a = e.key === r.b.ArrowUp,
							o = e.key === r.b.ArrowDown;
						if (a || o) {
							const t = this.getValues();
							if (!t.length) return;
							const r = n ? t.indexOf(n) : 0,
								o = t[((a ? r - 1 : r + 1) + t.length) % t.length];
							s(o), this.setState({
								value: o
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return a.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, a.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), a.a.Children.map(e.children, (s, n) => {
						const r = 0 === n,
							o = s.props.value === t,
							i = null !== t ? o ? 0 : -1 : r ? 0 : -1;
						return a.a.cloneElement(s, {
							disabled: e.disabled,
							onClick: e => this.handleClick(s.props.value),
							selected: o,
							tabIndex: i
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				l = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/models/Vote/index.ts"),
				p = s("./src/reddit/controls/Score/index.m.less"),
				b = s.n(p);
			const h = e => e.voteState === m.a.downvoted ? Object(u.a)(e).voteText.downvote : e.voteState === m.a.upvoted ? Object(u.a)(e).voteText.upvote : Object(l.a)(Object(d.a)(e)),
				g = Object(o.a)(e => {
					const t = {
							color: e.light ? c.a.lightboxHeaderText : h(e)
						},
						s = e.isScoreHidden ? "•" : Object(i.b)(e.score);
					return a.a.createElement("div", {
						className: Object(r.a)(b.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, s)
				});
			t.a = g
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				p = s.n(m),
				b = s("./src/reddit/controls/Search/index.m.less"),
				h = s.n(b);
			const g = Object(r.b)(() => Object(o.c)({
				subredditsByName: Object(c.a)((e, t) => {
					const s = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						s[t.subredditName] = Object(u.B)(e, {
							subredditName: t.subredditName
						})
					}), s
				})
			}));
			t.a = g(e => a.a.createElement("div", {
				className: Object(i.a)(p.a.subText, h.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => a.a.createElement(d.a, {
				key: "".concat(t.subredditName, "-hoverCard"),
				subredditName: t.subredditName
			}, a.a.createElement(l.b, {
				className: Object(i.a)(h.a.subredditIcon, h.a.isHeaderIcon, e.iconClassName),
				linkTo: "/r/".concat(t.subredditName, "/"),
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : a.a.createElement(l.b, {
				className: Object(i.a)(h.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && a.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_2xQx4j6lBnDGQ8QsRnJEJa",
				iconContainer: "_2QGKgHKTtOwKHI4B_LI0YM",
				icon: "_1hdDhVEGWEdVJcgy2XQ2Eq",
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ"
			}
		},
		"./src/reddit/controls/Search/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/history/esm/history.js"),
				a = s("./node_modules/lodash/debounce.js"),
				r = s.n(a),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./node_modules/uuid/v4.js"),
				m = s.n(u),
				p = s("./src/app/strings/index.ts"),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/makeSearchKey/index.ts"),
				g = s("./src/reddit/actions/category.ts"),
				f = s("./src/reddit/actions/search.ts"),
				x = s("./src/reddit/actions/search/trending.ts"),
				v = s("./src/reddit/actions/tooltip.ts"),
				y = s("./src/higherOrderComponents/asTooltip.tsx"),
				C = s("./node_modules/fbt/lib/FbtPublic.js"),
				O = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				P = s("./src/reddit/helpers/getSearchUrl/index.ts"),
				j = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				w = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				M = s("./src/reddit/icons/svgs/Search/index.tsx"),
				S = s("./src/reddit/models/Search/index.ts"),
				N = s("./src/reddit/selectors/telemetry.ts"),
				I = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				k = s.n(I),
				_ = s("./src/reddit/components/SearchDropdown/index.m.less"),
				T = s.n(_);
			const L = Object(y.a)(E.b);
			class F extends i.a.Component {
				constructor() {
					super(...arguments), this.onRecentSearchItemClick = () => {
						this.props.recentSearch.isTypeaheadSuggestion ? this.props.onClearSearchQuery() : this.props.onUpdateSearchQuery(this.props.recentSearch.searchQuery), this.props.onSendDropdownClickEvent(this.props.recentSearch.searchQuery, this.props.recentSearch.searchQuery, N.StructureType.Recent, N.SearchDropdownNouns.Recent)
					}, this.generateFullSearchQuery = e => e.subredditOrProfileRestrictedName ? "".concat(e.subredditOrProfileRestrictedName, " ").concat(e.searchQuery) : e.searchQuery
				}
				render() {
					const {
						props: e
					} = this, {
						activeTooltipId: t,
						className: s,
						focusedItem: n,
						onRemoveRecentSearch: a,
						recentSearch: r,
						toggleTooltip: o
					} = e, c = Object(P.a)(null, null, null, r), d = c && c.url, l = c && c.qs, u = l ? "".concat(d, "?").concat(l) : d, m = this.generateFullSearchQuery(r);
					let p;
					return n && (p = this.generateFullSearchQuery(n)), i.a.createElement(O.a, {
						"aria-label": r.searchQuery,
						className: Object(b.a)(T.a.listItem, k.a.item, s, {
							[T.a.mFocused]: !(!n || n.section !== S.c.recent || p !== m)
						}),
						onClick: this.onRecentSearchItemClick,
						key: m,
						role: "link",
						tabIndex: -1,
						to: u || ""
					}, r.displayInfo && r.isTypeaheadSuggestion ? r.displayInfo.iconUrl ? i.a.createElement("div", {
						className: T.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(r.displayInfo.iconUrl, "')")
						}
					}) : i.a.createElement(j.a, {
						className: T.a.planetIcon
					}) : i.a.createElement(M.a, {
						className: Object(b.a)(T.a.listItemIcon, k.a.icon)
					}), i.a.createElement("span", {
						className: k.a.text
					}, m), i.a.createElement("div", {
						onMouseEnter: () => o(m),
						onMouseLeave: () => o(null),
						id: m
					}, i.a.createElement(w.a, {
						className: Object(b.a)(T.a.listItemIcon, T.a.mHoverable, k.a.icon),
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), a(r)
						}
					}), i.a.createElement(L, {
						className: T.a.fixedTextTooltip,
						isOpen: t === m,
						text: C.fbt._("Remove", null, {
							hk: "2P57BY"
						}),
						tooltipId: m,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					})))
				}
			}
			s("./node_modules/core-js/modules/es6.symbol.js");
			var R = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				A = s("./src/reddit/components/PostTitle/index.tsx"),
				D = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				B = s("./src/reddit/constants/adEvents.ts"),
				H = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				U = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				V = s("./src/reddit/helpers/pixels.ts"),
				Q = s("./src/reddit/icons/svgs/Popular/index.tsx"),
				W = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			class q extends i.a.Component {
				constructor() {
					super(...arguments), this.transformTrendingToRecentSearch = () => {
						const e = this.props.trendingItem,
							{
								post: t,
								subredditInfo: s,
								subredditOccurrences: n
							} = e;
						return W(e, ["post", "subredditInfo", "subredditOccurrences"])
					}, this.onTrendingItemClick = () => {
						this.props.onUpdateSearchQuery(this.props.trendingItem.searchQuery);
						const e = this.transformTrendingToRecentSearch();
						if (this.props.onSetRecentSearch(e), this.props.onSendDropdownClickEvent(this.props.trendingItem.searchQuery, this.props.trendingItem.rawQuery || "", N.StructureType.Trending, N.SearchDropdownNouns.Trending), this.isSponsored()) {
							const {
								post: e
							} = this.props.trendingItem;
							Object(V.a)(e.events, B.a.Click)
						}
					}, this.isSponsored = () => {
						const {
							trendingItem: e
						} = this.props;
						return !(!e.post || !e.post.isSponsored)
					}
				}
				render() {
					const {
						className: e,
						focusedItem: t,
						trendingItem: s
					} = this.props, n = this.isSponsored(), a = Object(P.a)(null, null, null, s, {
						source: n ? h.a.PromotedTrend : h.a.Trending
					}), r = a && a.url, o = a && a.qs, c = o ? "".concat(r, "?").concat(o) : r, d = i.a.createElement(O.a, {
						"aria-label": s.searchQuery,
						className: Object(b.a)(T.a.listItem, T.a.mTrending, k.a.item, k.a.trending, e, {
							[T.a.mFocused]: !(!t || t.section !== S.c.trending || s.searchQuery !== t.searchQuery)
						}),
						onClick: this.onTrendingItemClick,
						key: "trending-".concat(s.searchQuery),
						role: "link",
						tabIndex: -1,
						to: c || ""
					}, i.a.createElement("div", {
						className: k.a.trendingContent
					}, n && i.a.createElement("div", {
						className: k.a.promoted
					}, C.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), i.a.createElement("div", null, i.a.createElement(Q.a, {
						className: Object(b.a)(T.a.listItemIcon, T.a.mTrending, k.a.icon, k.a.trending)
					}), i.a.createElement("span", null, i.a.createElement(A.a, {
						className: Object(b.a)(T.a.listItemText, T.a.mTrending, k.a.text, k.a.trending),
						redditStyle: !0,
						size: A.b.Small
					}, s.searchQuery)), s.post && i.a.createElement("div", {
						className: T.a.postTitle
					}, s.post.title)), s.subredditInfo && i.a.createElement(H.a, {
						className: Object(b.a)(k.a.relatedSubredditMetaData, T.a.listItemSubtext, {
							[T.a.mNoPostTitle]: !s.post
						}),
						iconUrl: s.subredditInfo.icon || void 0,
						suffix: C.fbt._("{subreddit name} and more", [C.fbt._param("subreddit name", s.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), s.post && Object(U.a)(s.post) && i.a.createElement(R.a, {
						post: s.post,
						removeLink: !0,
						usePreview: n
					}));
					return n ? i.a.createElement(D.a, {
						post: s.post,
						children: d
					}) : d
				}
			}
			var G = s("./src/reddit/components/Flair/index.tsx"),
				z = s("./src/reddit/models/Flair/index.ts");
			class Z extends i.a.Component {
				constructor() {
					super(...arguments), this.onTypeaheadSuggestionClick = () => {
						this.props.onSetRecentSearch(this.props.item), this.props.onSendDropdownClickEvent(this.props.item.searchQuery, this.props.item.searchQuery, N.StructureType.Search, this.props.item.isProfile ? N.SearchDropdownNouns.TypeaheadProfile : N.SearchDropdownNouns.TypeaheadSubreddit), this.props.onClearSearchQuery()
					}
				}
				render() {
					const {
						props: e
					} = this, {
						className: t,
						focusedItem: s,
						item: n
					} = e;
					return i.a.createElement(O.a, {
						"aria-label": n.searchQuery,
						className: Object(b.a)(T.a.listItem, T.a.mTypeahead, k.a.item, t, {
							[T.a.mFocused]: !(!s || s.searchQuery !== n.searchQuery)
						}),
						onClick: this.onTypeaheadSuggestionClick,
						key: n.searchQuery,
						role: "link",
						tabIndex: -1,
						to: "/".concat(n.searchQuery)
					}, n.displayInfo && n.displayInfo.iconUrl ? i.a.createElement("div", {
						className: T.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(n.displayInfo.iconUrl, "')")
						}
					}) : i.a.createElement(j.a, {
						className: T.a.planetIcon
					}), i.a.createElement("div", null, n.displayInfo && n.displayInfo.subredditOrProfileName && i.a.createElement("div", {
						className: Object(b.a)(T.a.listItemText, T.a.mTypeahead, k.a.text)
					}, n.displayInfo.subredditOrProfileName), i.a.createElement("div", null, n.displayInfo && null != n.displayInfo.subscribers && i.a.createElement("div", {
						className: Object(b.a)(T.a.listItemSubtext, k.a.subText)
					}, C.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [C.fbt._plural(n.displayInfo.subscribers, "members count")], {
						hk: "1uMCes"
					})), n.displayInfo && n.displayInfo.isNSFW && i.a.createElement(G.b, {
						flair: {
							type: z.f.Nsfw,
							text: "nsfw"
						}
					}))))
				}
			}
			var K = s("./src/reddit/constants/zIndex.ts"),
				Y = s("./src/reddit/controls/Dropdown/index.tsx"),
				X = s("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				J = s.n(X),
				$ = s("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				ee = s.n($);
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js"), se = "SearchDropdown", ne = 5, ae = Object(y.a)(Y.a);
			class re extends i.a.Component {
				constructor(e) {
					super(e), this.toggleTooltip = e => {
						this.setState({
							activeTooltipId: e
						})
					}, this.state = {
						activeTooltipId: null
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						isFixed: s = !0,
						isOverlay: n = !0
					} = e, a = {
						width: e.container ? "".concat(e.container.offsetWidth, "px") : "inherit",
						marginTop: "7px",
						overflow: "scroll"
					};
					e.isFixed && (a.zIndex = K.g);
					const r = 0 === e.typeaheadSuggestions.length && !e.isTypeaheadPending;
					return i.a.createElement(ae, {
						className: Object(b.a)(T.a.dropdown, J.a.listContainer),
						isFixed: s,
						isOpen: e.isOpen,
						isOverlay: n,
						tooltipId: se,
						noFocus: !0,
						style: a
					}, e.typeaheadSuggestions.map(t => i.a.createElement(Z, {
						focusedItem: e.typeaheadSuggestions[e.focusedItemIndex],
						item: t,
						key: t.id,
						onClearSearchQuery: e.onClearSearchQuery,
						onSendDropdownClickEvent: e.onSendDropdownClickEvent,
						onSetRecentSearch: e.onSetRecentSearch
					})), r && e.recentSearches.map(s => i.a.createElement(F, {
						activeTooltipId: t.activeTooltipId,
						focusedItem: e.itemList[e.focusedItemIndex],
						key: s.id,
						onClearSearchQuery: e.onClearSearchQuery,
						onRemoveRecentSearch: e.onRemoveRecentSearch,
						onSendDropdownClickEvent: e.onSendDropdownClickEvent,
						onSetRecentSearch: e.onSetRecentSearch,
						onUpdateSearchQuery: e.onUpdateSearchQuery,
						recentSearch: s,
						toggleTooltip: this.toggleTooltip
					})), r && e.isInTrendingExperiment && !e.isTrendingPending && e.trendingItems && i.a.createElement("div", {
						className: Object(b.a)(k.a.title, T.a.listItemTitle, {
							[T.a.mWithBorder]: !!e.recentSearches.length
						})
					}, te._("Trending today", null, {
						hk: "3nAMpY"
					})), (e.isTypeaheadPending || e.isTrendingPending) && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(b.a)(T.a.loadingItem, ee.a.item)
					}), i.a.createElement("div", {
						className: Object(b.a)(T.a.loadingItem, ee.a.item)
					}), i.a.createElement("div", {
						className: Object(b.a)(T.a.loadingItem, ee.a.item)
					}), i.a.createElement("div", {
						className: Object(b.a)(T.a.loadingItem, ee.a.item)
					}), i.a.createElement("div", {
						className: Object(b.a)(T.a.loadingItem, ee.a.item)
					})), r && e.isInTrendingExperiment && e.trendingItems.slice(0, ne).map(t => i.a.createElement(q, {
						key: t.id,
						focusedItem: e.itemList[e.focusedItemIndex],
						onSendDropdownClickEvent: e.onSendDropdownClickEvent,
						onSetRecentSearch: e.onSetRecentSearch,
						onUpdateSearchQuery: e.onUpdateSearchQuery,
						trendingItem: t
					})))
				}
			}
			var oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = s("./src/reddit/constants/keycodes.ts"),
				ce = s("./src/reddit/contexts/ApiContext.tsx"),
				de = s("./src/reddit/contexts/PageLayer/index.tsx"),
				le = s("./src/reddit/endpoints/category/categoryList.ts"),
				ue = s("./src/lib/constants/index.ts"),
				me = s("./src/lib/makeApiRequest/index.ts"),
				pe = s("./src/lib/omitHeaders/index.ts"),
				be = s("./src/reddit/constants/headers.ts");
			const he = (e, t) => Object(me.b)(Object(pe.a)(e, [be.a]), {
				endpoint: "".concat(e.apiUrl, "/api/subreddit_autocomplete_v2.json"),
				method: ue.bb.GET,
				data: {
					query: t
				}
			});
			var ge = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				fe = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const xe = e => {
				const t = [],
					s = {};
				return e.forEach(e => {
					const n = e.data,
						a = e.kind;
					a === ue.vb.Subreddit ? (t.push(n.name), s[n.name] = Object(fe.a)(n)) : a === ue.vb.Account && (t.push(n.subreddit.name), s[n.subreddit.name] = Object(ge.a)(n.subreddit, n.name))
				}), {
					data: s,
					order: t
				}
			};
			var ve = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ye = s("./node_modules/lodash/isEqual.js"),
				Ce = s.n(ye),
				Oe = s("./node_modules/lodash/xorWith.js"),
				Ee = s.n(Oe),
				Pe = (e, t) => {
					const s = Ee()(e, t, Ce.a);
					return !(!s || 0 !== s.length)
				},
				je = s("./src/reddit/helpers/localStorage/index.ts"),
				we = s("./src/reddit/helpers/name/index.ts"),
				Me = s("./src/reddit/helpers/trackers/searchResults.ts"),
				Se = s("./src/reddit/i18n/utils.ts"),
				Ne = s("./src/reddit/selectors/category.ts"),
				Ie = s("./src/reddit/selectors/experiments/categories.ts"),
				ke = s("./src/reddit/selectors/experiments/searchFix.ts"),
				_e = s("./src/reddit/selectors/experiments/trending.ts"),
				Te = s("./src/reddit/constants/experiments.ts"),
				Le = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Fe = s("./src/reddit/selectors/user.ts");
			const Re = e => Object(Fe.H)(e) || Te.Tb.Treatment1 === Object(Le.c)(e, {
				experimentEligibilitySelector: Le.a,
				experimentName: Te.Qb
			});
			var Ae = s("./src/reddit/selectors/platform.ts"),
				De = s("./src/reddit/selectors/searchResults.ts"),
				Be = s("./src/reddit/selectors/tooltip.ts"),
				He = s("./src/reddit/selectors/trending.ts"),
				Ue = s("./src/reddit/controls/Search/index.m.less"),
				Ve = s.n(Ue);
			const Qe = Object(de.t)({
					searchQuery: de.U,
					pageLayer: e => e
				}),
				We = (e, t, s) => e(e => Object.assign({}, Object(Me.b)(e), {
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(ve.c)(ve.a.SearchResults),
					actionInfo: N.actionInfo(e),
					search: N.search(e, s)
				})),
				qe = Object(c.b)(() => Object(l.c)({
					categoriesLoaded: Ne.i,
					categoriesNameToId: Ne.k,
					currentSubredditName: Ae.e,
					currentUser: Fe.i,
					dropdownIsOpen: Object(Be.b)(se),
					typeaheadIdsByQuery: De.c,
					isInCategoriesExperiment: Ie.a,
					isInTrendingExperiment: _e.a,
					isInTypeaheadExperiment: Re,
					isLoggedIn: Fe.K,
					isSearchFixActiveVariant: e => {
						const t = Object(ke.c)(e);
						return Object(ke.b)(t)
					},
					isSubredditSearchAllowed: ke.f,
					language: Fe.T,
					multireddit: de.d,
					routeName: Ae.r,
					subreddit: de.q,
					trendingItems: He.a,
					typeaheadSuggestions: De.i
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(x.b)()),
					onChange: t => e(Object(f.j)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object(f.j)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(d.b)(t)),
					onDispatchSearch: (t, s, a) => {
						e(Object(d.b)(Object(n.c)({
							pathname: t,
							search: s,
							state: {
								fromPage: a
							}
						})))
					},
					onToggleDropdown: () => e(Object(v.g)({
						tooltipId: se
					})),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object(f.i)(t))
					},
					onListLoaded: t => {
						let {
							categories: s,
							categoryIds: n
						} = t;
						e(Object(g.l)({
							categories: s,
							categoryIds: n
						}))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onSearch: (n, a, r) => {
						n.preventDefault();
						const {
							currentUser: o = null
						} = e, i = Object(P.a)(e.subreddit, e.multireddit, o, a, s.searchOptions, r, e.isSearchFixActiveVariant, e.isSubredditSearchAllowed);
						if (!i) return;
						const c = i.url,
							d = i.qs,
							l = {
								routeName: e.routeName,
								subredditName: e.currentSubredditName
							};
						t.onDispatchSearch(c, d, l)
					},
					onFocusSearchBar: () => {
						Object(ve.c)(ve.a.SearchResults) || Object(ve.d)(ve.a.SearchResults);
						const e = s.searchOptions || Object(h.c)({});
						We(s.sendEvent, N.OriginElement.SearchBar, e)
					}
				})),
				Ge = e => {
					let {
						isSearchFixActiveVariant: t,
						language: s,
						multireddit: n,
						subreddit: a
					} = e;
					return t ? Object(Se.c)("Search") : a ? Object(p.a)(s, "header.searchSubreddit", {
						subreddit: a.name
					}) : n ? Object(p.a)(s, "header.searchMultireddit", {
						multireddit: n.name
					}) : Object(Se.c)("Search Reddit")
				};
			class ze extends i.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeCategoriesApiRequest = async e => {
						const t = await Object(le.a)(this.props.apiContext());
						if (t.ok) {
							const {
								categories: e,
								categoryIds: s
							} = Object(le.b)(t.body);
							this.props.onListLoaded({
								categories: e,
								categoryIds: s
							})
						}
					}, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await he(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = xe(e.body.data.children);
								t && t.data && t.order && this.props.onTypeaheadSuggestionsSuccess({
									typeaheadSuggestions: t.data,
									order: t.order,
									searchQuery: this.state.searchQuery
								})
							}
							this.setState({
								isTypeaheadPending: !1,
								fetchedTrending: !0
							})
						} else this.setState({
							isTypeaheadPending: !1
						})
					}, this.makeTrendingApiRequest = async () => {
						this.props.trendingItems.length || this.state.isTrendingPending || (this.setState({
							isTrendingPending: !0
						}), await this.props.fetchTrendingItems(), this.setState({
							isTrendingPending: !1
						}))
					}, this.setContainerRef = e => {
						this.container = e
					}, this.close = () => {
						this.props.dropdownIsOpen && this.props.onToggleDropdown()
					}, this.onRemoveRecentSearch = e => {
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(je.D)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(je.Y)(Object.assign({}, e, {
								section: S.c.recent
							}), this.props.currentUser.id)
						})
					}, this.onChange = e => {
						const t = e.currentTarget.value,
							s = {
								searchQuery: t
							};
						if (this.setState(s), this.props.onChange(t), this.props.isInTypeaheadExperiment) {
							if (!(!this.props.typeaheadIdsByQuery || !this.props.typeaheadIdsByQuery[t]) || !t) return;
							this.onFetchTypeaheadSuggestions()
						}
					}, this.onFetchTypeaheadSuggestions = r()(() => {
						this.makeTypeaheadApiRequest()
					}, 50), this.onSearch = async e => {
						if (this.close(), !this.props.categoriesLoaded && this.props.isInCategoriesExperiment && await this.makeCategoriesApiRequest(e), this.state.searchQuery) {
							let t, s = Object.assign({}, S.a);
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(s = this.state.selectedItem).id || (s.id = m()()), this.props.typeaheadSuggestions && s.isTypeaheadSuggestion ? this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, N.StructureType.Search, s.isProfile ? N.SearchDropdownNouns.TypeaheadProfile : N.SearchDropdownNouns.TypeaheadSubreddit) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, N.StructureType.Search, N.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									t = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									n = !!this.props.subreddit && this.props.subreddit.isNSFW,
									a = S.b.text;
								s = {
									id: m()(),
									searchQuery: this.state.searchQuery,
									type: a,
									section: S.c.recent,
									subredditOrProfileRestrictedName: t,
									displayInfo: {
										iconUrl: e,
										isNSFW: n
									}
								}
							}
							this.props.isInCategoriesExperiment && this.props.categoriesLoaded && (t = this.props.categoriesNameToId[Object(we.f)(s.searchQuery)]), t || this.onSetRecentSearch(s), this.props.onSearch(e, s, t), this.onClearSearchQuery()
						}
					}, this.onClearSearchQuery = () => {
						this.setState({
							focusedItemIndex: -1,
							selectedItem: null,
							searchQuery: ""
						}), this.props.onClearSearchQuery()
					}, this.onSendDropdownClickEvent = (e, t, s, n) => {
						const a = {
							displayQuery: e,
							rawQuery: t,
							structureType: s,
							searchQuery: this.props.searchQuery
						};
						this.props.sendEvent(Object(Me.l)(n, a))
					}, this.onSendDropdownViewEvent = (e, t, s, n) => {
						const a = {
							displayQuery: s,
							rawQuery: n || s,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(Me.m)(e, a))
					}, this.onKeyDown = e => {
						if (e.key === ie.b.Escape && this.close(), e.key === ie.b.Tab && this.close(), e.key === ie.b.ArrowDown) {
							if (e.preventDefault(), 0 === this.state.itemList.length || !this.props.dropdownIsOpen) return;
							if (this.state.focusedItemIndex >= this.state.itemList.length - 1) return;
							const t = this.state.focusedItemIndex + 1,
								s = this.state.itemList[t] || null,
								n = s ? s.searchQuery : "";
							this.setState({
								focusedItemIndex: t,
								searchQuery: n,
								selectedItem: s
							})
						}
						if (e.key === ie.b.ArrowUp) {
							if (e.preventDefault(), 0 === this.state.itemList.length || !this.props.dropdownIsOpen) return;
							if (-1 === this.state.focusedItemIndex) return;
							const t = this.state.focusedItemIndex - 1,
								s = this.state.itemList[t] || null,
								n = s ? s.searchQuery : "";
							this.setState({
								focusedItemIndex: t,
								searchQuery: n,
								selectedItem: s
							})
						}
					}, this.toggleDropdownAndGetTrending = () => {
						if (this.props.dropdownIsOpen || !this.props.subreddit) {
							if (!this.props.trendingItems.length && this.props.isInTrendingExperiment && this.makeTrendingApiRequest(), this.props.currentUser && !this.props.subreddit) {
								const e = Object(je.w)(this.props.currentUser.id);
								e.length > 0 && (this.setState({
									recentSearches: this.props.isLoggedIn ? e : [],
									itemList: [...e, ...this.props.trendingItems]
								}), e.forEach(e => {
									this.onSendDropdownViewEvent(N.SearchDropdownNouns.Recent, N.StructureType.Recent, e.searchQuery)
								})), this.props.trendingItems.length > 0 && this.props.trendingItems.forEach(e => {
									this.onSendDropdownViewEvent(N.SearchDropdownNouns.Trending, N.StructureType.Trending, e.searchQuery)
								})
							}
							this.props.onToggleDropdown()
						}
					}, this.onFormSubmit = e => {
						e.preventDefault(), this.onSearch(e);
						const t = this.props.searchOptions || Object(h.c)({});
						t.q || (t.q = this.state.searchQuery), We(this.props.sendEvent, "full_search_button", t)
					}, this.state = {
						fetchedTrending: !1,
						focusedItemIndex: -1,
						itemList: [],
						isTrendingPending: !1,
						isTypeaheadPending: !1,
						recentSearches: [],
						searchQuery: this.props.searchQuery || "",
						selectedItem: null
					}
				}
				componentDidUpdate(e) {
					const t = Pe(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						s = Pe(e.trendingItems, this.props.trendingItems);
					if (this.props.searchQuery !== e.searchQuery || !t || !s) {
						const n = this.props.typeaheadSuggestions.length ? this.props.typeaheadSuggestions : [...this.state.recentSearches, ...this.props.trendingItems];
						this.setState(() => {
							const t = {
								itemList: n
							};
							return this.props.searchQuery !== e.searchQuery && (t.searchQuery = this.props.searchQuery || ""), t
						}), !t && this.props.typeaheadSuggestions.length && this.props.typeaheadSuggestions.forEach(e => {
							this.onSendDropdownViewEvent(e.isProfile ? N.SearchDropdownNouns.TypeaheadProfile : N.SearchDropdownNouns.TypeaheadSubreddit, N.StructureType.Search, e.searchQuery)
						}), !s && this.props.trendingItems.length && this.state.fetchedTrending && this.props.trendingItems.forEach(e => {
							this.onSendDropdownViewEvent(N.SearchDropdownNouns.Trending, N.StructureType.Trending, e.searchQuery)
						})
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return i.a.createElement("div", {
						className: Object(b.a)(Ve.a.relativeWrapper, J.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: se,
						ref: this.setContainerRef
					}, i.a.createElement("label", {
						className: Ve.a.iconContainer,
						htmlFor: "header-search-bar"
					}, i.a.createElement(M.a, {
						className: Ve.a.icon
					})), i.a.createElement("form", {
						action: "/search/",
						autoComplete: "off",
						method: "get",
						onSubmit: this.onFormSubmit,
						onFocus: e.onFocusSearchBar,
						role: "search"
					}, i.a.createElement("input", {
						id: "header-search-bar",
						name: "q",
						className: Ve.a.input,
						onChange: this.onChange,
						onClick: this.toggleDropdownAndGetTrending,
						onKeyDown: this.onKeyDown,
						key: e.searchQuery,
						placeholder: Ge(e),
						type: "search",
						value: this.state.searchQuery
					})), !e.subreddit && i.a.createElement(re, {
						container: this.container,
						focusedItemIndex: t.focusedItemIndex,
						isFixed: e.isFixed,
						isInTrendingExperiment: e.isInTrendingExperiment,
						isOpen: e.dropdownIsOpen,
						isTrendingPending: t.isTrendingPending,
						isTypeaheadPending: t.isTypeaheadPending,
						itemList: t.itemList,
						language: e.language,
						onClearSearchQuery: this.onClearSearchQuery,
						onClose: this.close,
						onRemoveRecentSearch: this.onRemoveRecentSearch,
						onSendDropdownClickEvent: this.onSendDropdownClickEvent,
						onSetRecentSearch: this.onSetRecentSearch,
						onUpdateSearchQuery: this.onUpdateSearchQuery,
						recentSearches: t.recentSearches,
						trendingItems: e.trendingItems,
						typeaheadSuggestions: e.typeaheadSuggestions
					}))
				}
			}
			t.a = Object(oe.b)(Qe(Object(ce.b)(qe(ze))))
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, s) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/TextButton/index.m.less"),
				i = s.n(o);
			t.a = e => a.a.createElement("button", {
				children: e.children,
				className: Object(r.a)(i.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/ToggleSwitch/index.m.less"),
				i = s.n(o);
			t.a = e => a.a.createElement("button", {
				"aria-checked": e.on,
				className: Object(r.a)(i.a.toggleSwitch, e.className, {
					[i.a.mActive]: e.on && !e.disabled,
					[i.a.mDisabled]: e.disabled
				}),
				style: e.on && !e.disabled && e.activeColorOverride ? {
					backgroundColor: e.activeColorOverride
				} : void 0,
				id: e.id,
				role: "switch",
				tabIndex: e.tabIndex,
				type: "button",
				onClick: () => !e.disabled && e.onToggle && e.onToggle()
			}, a.a.createElement("div", {
				className: i.a.toggleDisplay
			}))
		},
		"./src/reddit/controls/Typography/index.m.less": function(e, t, s) {
			e.exports = {
				heading1: "_37JeV292IJA7_x1qej_-2H",
				heading2: "p13k-tsMcatGBlVpJBZmw",
				heading3: "_1nHvvYpmn7q9eWDAGzKcce",
				heading4: "_1-rwUWsB5F8WmYI8F66dai",
				heading5: "_22RKdGqihAj6MFumW6DuRV",
				heading6: "_4xqrI_N1UdqsK9E1RSisG",
				body1: "_2HJOIn4SJm4z1NeCv_hNFu",
				body2: "_3ImIPX9rfoPmUrZ1R8KGqS",
				actionFont: "_3uShGanwyVFBaTiPMFzfAC",
				metadata: "_2nyJGeaFJbXTqTh9OGwxfu",
				metadata3: "_3BIqvjJkJKZfH4vtC11dGF"
			}
		},
		"./src/reddit/controls/Typography/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "f", (function() {
				return u
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Typography/index.m.less"),
				r = s.n(a);
			n.a.h1("heading1", r.a), n.a.h2("heading2", r.a), n.a.h3("heading3", r.a), n.a.h4("heading4", r.a);
			const o = n.a.h5("heading5", r.a),
				i = n.a.h6("heading6", r.a),
				c = n.a.p("body1", r.a),
				d = n.a.p("body2", r.a),
				l = n.a.p("actionFont", r.a),
				u = n.a.p("metadata", r.a);
			n.a.p("metadata3", r.a)
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");
			const r = (e, t) => Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/orders"),
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						subredditId: t.subredditId
					}
				}),
				o = (e, t) => Object(a.a)(e, {
					method: "get",
					endpoint: "".concat(n.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
				})
		},
		"./src/reddit/endpoints/economics/paymentSystems.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			}));
			var n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");

			function r(e) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/stripe-connect-links"),
					method: "post"
				})
			}

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me"),
					method: "patch",
					data: {
						stripe: {
							authorization: Object.assign({}, t, {
								scope: "read_write"
							})
						}
					}
				})
			}

			function i(e) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me"),
					method: "get"
				})
			}

			function c(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/stripe-sources/").concat(t),
					method: "delete"
				})
			}

			function d(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/braintree-sources/").concat(t),
					method: "delete"
				})
			}
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			}));
			var n = s("./src/config.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				r = s("./src/reddit/constants/headers.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts"),
				i = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function c(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/communities/").concat(t.subredditId, "/me"),
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function d(e) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/users/me"),
					method: "get"
				}).then(e => e.ok ? e.body.specialMemberships ? Object.assign({}, e, {
					body: e.body.specialMemberships
				}) : Object.assign({}, e, {
					body: {}
				}) : e)
			}

			function l(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/orders"),
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.trial ? "trial_membership" : "membership",
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: t.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: t.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: t.username
						}
					}
				})
			}

			function m(e, t) {
				return Object(o.a)(Object(a.a)(e, [r.a]), {
					endpoint: "".concat(e.apiUrl, "/api/info?id=").concat(t.join(",")),
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(i.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return Object.assign({}, e, {
							body: t
						})
					}
					return e
				})
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/merge.js"),
				a = s.n(n),
				r = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/badges.ts"),
				i = s("./src/reddit/endpoints/governance/community.ts"),
				c = s("./src/reddit/endpoints/governance/products/badges.ts"),
				d = s("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, s) {
				const n = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					l = function(e, t) {
						return Object(d.a)(e, {
							method: "get",
							endpoint: "".concat(r.a.metaUrl, "/product-collections/").concat(t, "?types=badge")
						})
					}(e, t),
					u = Object(i.a)(e, {
						subredditId: t
					}),
					m = Object(c.b)(e, t),
					p = Object(o.c)(e, t, s),
					[b, h, g, f] = await Promise.all([l, u, m, p]);
				if (b.ok ? n.collections = b.body : n.errors.collections = b.error, h.ok) {
					const e = h.body;
					n.subscription = e.specialMemberships, n.communityRaw = e
				}
				return g.ok ? n.products = g.body : n.errors.products = g.error, f.ok ? (a()(n.badges, f.body.badges), n.userOwnedBadges = f.body.userOwnedBadges) : n.errors.userBadges = f.error, n
			}
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			const u = (e, t) => Object(d.a)(e, {
				endpoint: "".concat(r.a.metaUrl, "/products/").concat(t, "?types=badge,membership"),
				method: "delete"
			})
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/thumbnails.ts");

			function a(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === n.a.SELF || e.thumbnail.url === n.a.NSFW)
			}
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = () => new BroadcastChannel("external_account"),
				a = e => {
					const t = n();
					t.postMessage({
						type: "connected",
						provider: e
					}), t.close()
				}
		},
		"./src/reddit/helpers/getSearchUrl/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = s("./src/lib/search/index.ts"),
				a = s("./src/reddit/constants/parameters.ts"),
				r = s("./src/reddit/models/Search/index.ts");
			t.a = (e, t, s, o, i, c, d, l) => {
				let u, m;
				if ("" !== o.searchQuery) {
					if (c) return {
						url: "/search/",
						qs: "".concat(a.o, "=*:*&").concat(a.b, "=").concat(o.searchQuery, "&").concat(a.a, "=").concat(c)
					};
					if (o.isTypeaheadSuggestion) u = "/".concat(o.searchQuery);
					else {
						if (m = "".concat(a.o, "=").concat(Object(n.b)(o.rawQuery || o.searchQuery)), u = "/search/", o.section === r.c.trending && i && i.source && (m += "&source=".concat(i.source)), e ? (d && l || !d) && (u = "/r/".concat(e.name).concat(u), m = "".concat(m, "&").concat(a.p, "=1")) : o.subredditOrProfileRestrictedName && (u = "/".concat(o.subredditOrProfileRestrictedName).concat(u), m = "".concat(m, "&").concat(a.p, "=1")), t) {
							const e = t.url.split("/")[2];
							u = "/user/".concat(e, "/m/").concat(t.name).concat(u), m = "".concat(m, "&").concat(a.p, "=1&").concat(a.i, "=1")
						}
						i && i.category && (m = "".concat(m, "&").concat(a.a, "=").concat(i.category))
					}
					return {
						url: u,
						qs: m
					}
				}
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/brcast/dist/brcast.es.js");
			const a = Object(n.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				a = s("./src/lib/fastdom/index.ts");
			const r = "https://js.stripe.com/v3/",
				o = "https://www.paypalobjects.com/api/checkout.js",
				i = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: "https://www.paypal.com/sdk/js?client-id=".concat(n.a.paypal.braintreeApiKey) + "&currency=USD&vault=true"
				};

			function c(e, t) {
				return t() ? Promise.resolve() : new Promise((s, n) => a.a.write(() => {
					t() && s();
					const n = document.head;
					let a = n.querySelector("script[src='".concat(e, "']"));
					a || ((a = document.createElement("script")).src = e, n.appendChild(a)), a.addEventListener("load", (function e() {
						this.removeEventListener("load", e), s()
					}))
				}))
			}

			function d() {
				return c(r, () => "undefined" != typeof Stripe)
			}

			function l() {
				return c(o, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function u() {
				return Promise.all(Object.keys(i).map(e => {
					const t = "__" + e;
					return c(i[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, s) {
			e.exports = {
				basicLink: "_1YWXCINvcuU7nk0ED-bta8",
				metaContainer: "_1HGeWoy6faY2UWkCD7cYoW",
				outboundLink: "_1Jtes5zRWNpwobWM4O2Unx",
				button: "_2KotRmn9DgdA58Ikji2mnV",
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				d = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				l = s.n(d);
			const u = i.a.button("button", l.a),
				m = e => t => a.a.createElement("div", {
					className: t.className
				}, e);
			t.b = function(e, t, s, n) {
				const i = e,
					d = "string" == typeof t ? m(t) : t;
				return s ? e => a.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(o.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank"
				}, a.a.createElement(i, {
					className: Object(o.a)(l.a.icon, {
						[l.a.isLit]: e.isLit
					})
				}), a.a.createElement(d, {
					className: l.a.body
				}), n && a.a.createElement("div", {
					className: l.a.metaContainer
				}, n), a.a.createElement(c.a, {
					className: l.a.outboundLink
				})) : e => e.href ? a.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(o.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, a.a.createElement(i, {
					className: Object(o.a)(l.a.icon, {
						[l.a.isLit]: !!e.isLit
					})
				}), a.a.createElement(d, {
					className: l.a.body
				}), n && a.a.createElement("div", {
					className: l.a.metaContainer
				}, n)) : a.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(o.a)(e.className, l.a.button),
					onClick: e.onClick
				}, a.a.createElement(i, {
					className: Object(o.a)(l.a.icon, {
						[l.a.isLit]: e.isLit
					})
				}), a.a.createElement(d, null))
			}
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			}));
			const n = "https://www.redditstatic.com/desktop2x",
				a = "/img/favicon/badged-favicon-32x32.png",
				r = "/img/favicon/badged-favicon-16x16.png",
				o = "badgeCountSync",
				i = e => window.document.querySelector('link[href="'.concat(e, '"]')),
				c = (e, t) => "".concat(e).concat(t),
				d = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					const t = n,
						s = i(c(t, e ? "/img/favicon/favicon-32x32.png" : a)),
						o = i(c(t, e ? "/img/favicon/favicon-16x16.png" : r));
					s && o && (s.href = c(t, e ? a : "/img/favicon/favicon-32x32.png"), o.href = c(t, e ? r : "/img/favicon/favicon-16x16.png"))
				},
				l = e => {
					navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: o,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/elementIds.ts");
			let a;
			const r = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(n.c);
					document.body.style.overflow = e, document.body.style.marginRight = null, t && (t.style.marginRight = null)
				},
				o = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, a || (a = i(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = "".concat(a, "px");
					const t = document.getElementById(n.c);
					t && (t.style.marginRight = "".concat(a, "px"))
				},
				i = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const a = () => e => Object.assign({
					source: "dfp",
					action: "request",
					noun: "ad"
				}, n.defaults(e), {
					subreddit: n.subreddit(e)
				}),
				r = () => e => Object.assign({
					source: "dfp",
					action: "define",
					noun: "ad"
				}, n.defaults(e), {
					subreddit: n.subreddit(e)
				})
		},
		"./src/reddit/helpers/trackers/authControls.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => {
					const t = Object(a.o)(e);
					return {
						actionInfo: Object(r.actionInfo)(e),
						post: t && Object(r.post)(e, t) || null,
						profile: Object(r.profile)(e),
						screen: Object(r.screen)(e),
						subreddit: Object(r.subreddit)(e)
					}
				},
				i = e => t => Object.assign({
					source: e,
					action: n.c.CLICK,
					noun: "login"
				}, o(t)),
				c = e => t => Object.assign({
					source: e,
					action: n.c.CLICK,
					noun: "signup"
				}, o(t)),
				d = () => e => Object.assign({
					source: "user_dropdown",
					action: n.c.CLICK,
					noun: "login_signup"
				}, o(e))
		},
		"./src/reddit/helpers/trackers/banners.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return n
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			const n = e => t => ({
					source: "announcement",
					noun: "announcement",
					action: "view",
					liveThread: {
						id: e,
						isAnnouncement: !0
					}
				}),
				a = e => t => ({
					source: "announcement",
					noun: "announcement",
					action: "dismiss",
					liveThread: {
						id: e,
						isAnnouncement: !0
					}
				}),
				r = e => t => ({
					source: "announcement",
					noun: "announcement",
					action: "click",
					liveThread: {
						id: e,
						isAnnouncement: !0
					}
				}),
				o = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				i = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				})
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "f", (function() {
				return u
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const a = (e, t) => Object.assign({}, Object(n.defaults)(t), {
					customFeed: Object(n.customFeedByPath)(t, e),
					source: "custom_feeds"
				}),
				r = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "delete"
				}),
				o = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "follow"
				}),
				i = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "duplicate"
				}),
				d = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "share"
				}),
				l = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return r
			})), s.d(t, "i", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					screen: Object(n.screen)(e),
					profile: Object(n.profile)(e),
					subreddit: Object(n.subreddit)(e),
					userSubreddit: Object(n.userSubreddit)(e)
				}),
				r = e => t => Object.assign({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off"
				}, a(t)),
				o = (e, t) => s => Object.assign({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t)
				}, a(s)),
				i = (e, t) => s => Object.assign({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t)
				}, a(s)),
				c = (e, t) => s => Object.assign({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t)
				}, a(s)),
				d = (e, t) => s => Object.assign({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t)
				}, a(s)),
				l = (e, t) => s => Object.assign({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t)
				}, a(s)),
				u = (e, t) => s => Object.assign({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(n.comment)(s, t),
					post: Object(n.post)(s, t)
				}, a(s)),
				m = (e, t) => s => Object.assign({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t)
				}, a(s)),
				p = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					subreddit: Object(n.subredditByPostOrCommentId)(s, t)
				}),
				b = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(n.comment)(s, t),
					post: Object(n.post)(s, t),
					subreddit: Object(n.subredditByPostOrCommentId)(s, t)
				})
		},
		"./src/reddit/helpers/trackers/monthsToMinutes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			}));
			var n = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign({}, a.defaults(e), {
					actionInfo: a.actionInfo(e, {
						settingValue: "top_banner"
					}),
					noun: "account_complete",
					source: "banner"
				}),
				o = () => e => Object.assign({}, r(e), {
					action: "view"
				}),
				i = e => t => Object.assign({}, r(t), {
					action: "click",
					banner: {
						id: e,
						buttonText: e
					}
				}),
				c = e => Object.assign({}, a.defaults(e), {
					source: "community_manager"
				}),
				d = e => t => Object.assign({}, c(t), {
					action: "click",
					noun: "subreddit_name",
					subreddit: {
						id: Object(n.G)(t, e),
						name: e
					}
				}),
				l = e => t => Object.assign({}, c(t), {
					action: "click",
					noun: "remove_subreddit",
					subreddit: {
						id: Object(n.G)(t, e),
						name: e
					}
				}),
				u = () => e => Object.assign({}, a.defaults(e), {
					action: "click",
					noun: "sign_up",
					source: "id_card"
				}),
				m = e => t => Object.assign({}, a.defaults(t), {
					action: "click",
					noun: e,
					source: "community_nav"
				}),
				p = e => Object.assign({}, a.defaults(e), {
					noun: "starter_home",
					source: "banner"
				}),
				b = () => e => Object.assign({}, p(e), {
					action: "view"
				}),
				h = () => e => Object.assign({}, p(e), {
					action: "click",
					actionInfo: a.actionInfo(e, {
						reason: "close"
					})
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "f", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: a.screen(e),
					profile: a.profile(e),
					subreddit: a.subreddit(e)
				}),
				o = e => t => Object.assign({
					source: "nav",
					action: "click",
					noun: e
				}, r(t)),
				i = e => t => Object.assign({}, r(t), {
					source: "nav",
					action: "click",
					noun: "category_".concat(Object(n.f)(e))
				}),
				c = e => Object.assign({}, r(e), {
					source: "nav",
					action: "click",
					noun: "category_scroll"
				}),
				d = e => t => Object.assign({}, r(t), {
					source: "nav",
					action: "change",
					noun: "category_".concat(Object(n.f)(e))
				}),
				l = e => t => Object.assign({}, r(t), {
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				u = e => t => Object.assign({}, r(t), {
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			}));
			var n = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/reddit/helpers/flair.ts");
			const o = (e, t) => s => Object.assign({
					source: "post",
					action: "click",
					noun: "post_flair"
				}, a.defaults(s), {
					actionInfo: a.actionInfo(s),
					correlationId: Object(n.c)(n.a.SearchResults),
					post: a.post(s, e),
					search: a.postFlairClickToSearch(s, t),
					subreddit: a.subreddit(s)
				}),
				i = e => t => Object.assign({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search"
				}, a.defaults(t), {
					actionInfo: a.actionInfo(t),
					correlationId: Object(n.c)(n.a.SearchResults),
					search: a.postFlairClickToSearch(t, e),
					subreddit: a.subreddit(t)
				}),
				c = e => t => {
					const s = Object(r.g)(e);
					return Object.assign({}, a.defaults(t), {
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: a.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					})
				},
				d = () => e => Object.assign({}, a.defaults(e), {
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: a.subreddit(e)
				}),
				l = e => t => {
					const s = Object(r.g)(e);
					return Object.assign({}, a.defaults(t), {
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: a.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					})
				},
				u = e => t => {
					const s = Object(r.g)(e);
					return Object.assign({}, a.defaults(t), {
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: a.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					})
				}
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/constants/wiki.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = "/wiki";
				return e.subredditName && (s = "/r/".concat(e.subredditName, t ? "/about/wiki" : "/wiki"), e.wikiSubRoute && (s += "/".concat(e.wikiSubRoute))), e.wikiPageName ? s += "/".concat(e.wikiPageName.toLowerCase()) : e.wikiSubRoute || (s += "/".concat(n.i)), s
			}
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, s) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/colors.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(o.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || r.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const u = e => a.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("downvote"), c.a.downvote, e.className)
			});
			t.a = e => {
				var {
					compact: t
				} = e, s = l(e, ["compact"]);
				return t ? a.a.createElement("span", d({}, s, {
					className: Object(r.a)(c.a.compactDownvoteWrapper, s.className)
				}), a.a.createElement(u, {
					className: c.a.compactDownvote
				})) : a.a.createElement("span", d({}, s, {
					className: Object(r.a)(c.a.downvoteWrapper, s.className)
				}), a.a.createElement(u, null))
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less": function(e, t, s) {
			e.exports = {
				TextMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he",
				textMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoMediaVideo"), " ").concat(e.className)
			}), "TextMediaIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Gif/index.m.less": function(e, t, s) {
			e.exports = {
				GifIcon: "_2FVMHfvH9Kj7f59LnZjdUX",
				gifIcon: "_2FVMHfvH9Kj7f59LnZjdUX"
			}
		},
		"./src/reddit/icons/fonts/Gif/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Gif/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(r.b)("gif"), " ").concat(e.className)
			}), "GifIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Link/index.m.less": function(e, t, s) {
			e.exports = {
				LinkIcon: "_1UzGujIvFbQUgWI4gO6QeD",
				linkIcon: "_1UzGujIvFbQUgWI4gO6QeD"
			}
		},
		"./src/reddit/icons/fonts/Link/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Link/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(r.b)("link"), " ").concat(e.className)
			}), "LinkIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: "".concat(Object(r.b)("outboundLink"), " ").concat(e.className)
			})
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, s) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Photos/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(r.b)("photos"), " ").concat(e.className)
			}), "PhotoIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, s) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				title: e.title,
				className: "".concat(Object(r.b)("premium"), " ").concat(e.className)
			}), "PremiumIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/fonts/Text/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Text/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(r.b)("text"), " ").concat(e.className)
			}), "TextIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const u = e => a.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("upvote"), c.a.upvote, e.className)
			});
			t.a = e => {
				var {
					compact: t
				} = e, s = l(e, ["compact"]);
				return t ? a.a.createElement("span", d({}, s, {
					className: Object(r.a)(c.a.compactUpvoteWrapper, s.className)
				}), a.a.createElement(u, {
					className: c.a.compactUpvote
				})) : a.a.createElement("span", d({}, s, {
					className: Object(r.a)(c.a.upvoteWrapper, s.className)
				}), a.a.createElement(u, null))
			}
		},
		"./src/reddit/icons/fonts/Video/index.m.less": function(e, t, s) {
			e.exports = {
				VideoIcon: "_1q4uVersxe3LOuom7R34bx",
				videoIcon: "_1q4uVersxe3LOuom7R34bx"
			}
		},
		"./src/reddit/icons/fonts/helpers.m.less": function(e, t, s) {
			e.exports = {
				TooltipDesc: "_37iEJpUpWXN00_fpZKHglg",
				tooltipDesc: "_37iEJpUpWXN00_fpZKHglg"
			}
		},
		"./src/reddit/icons/fonts/helpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.m.less"),
				o = s.n(r),
				i = s("./src/lib/lessComponent.tsx");
			const c = e => "icon icon-".concat(e),
				d = i.a.wrapped(e => a.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", o.a)
		},
		"./src/reddit/icons/svgs/All/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M1.25,17.5V7.5h5v10Zm11.25,0h-5V5H5l5-5,5,5H12.5Zm1.25,0v-5h5v5Z"
			}))
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				i = s.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = d(e, ["className"]);
				return a.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(r.a)(i.a.checkbox, t)
				}, s), a.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), a.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, a.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("polygon", {
				fill: "inherit",
				points: "11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"
			}))
		},
		"./src/reddit/icons/svgs/Coin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M10,1.5 C14.687,1.5 18.5,5.313 18.5,10 C18.5,14.687 14.687,18.5 10,18.5 C5.314,18.5 1.5,14.687 1.5,10 C1.5,5.313 5.314,1.5 10,1.5 Z M7.879,12.122 C6.709,10.952 6.709,9.049 7.879,7.879 C9.012,6.746 10.988,6.746 12.121,7.879 C12.512,8.269 13.145,8.269 13.535,7.879 C13.926,7.489 13.926,6.855 13.535,6.465 C12.591,5.52 11.336,5 10,5 C8.664,5 7.409,5.52 6.465,6.465 C4.516,8.414 4.516,11.586 6.465,13.536 C7.409,14.48 8.664,15 10,15 C11.336,15 12.591,14.48 13.535,13.536 C13.926,13.145 13.926,12.512 13.535,12.122 C13.145,11.731 12.512,11.731 12.121,12.122 C10.988,13.255 9.012,13.255 7.879,12.122 Z"
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = s.n(o);
			const c = e => a.a.createElement("svg", {
				className: Object(r.a)(e.className, i.a.dropdown, {
					[i.a.mRedditStyle]: !e.isSubreddit
				}),
				style: e.style,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z"
			}), a.a.createElement("path", {
				d: "M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1fQOXfyxB1SmgMOi7sihQV"
			}
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				i = s.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"
			}), a.a.createElement("path", {
				d: "M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"
			}), a.a.createElement("path", {
				d: "M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"
			}), a.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), a.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), a.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}))
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/KarmaGray/index.m.less": function(e, t, s) {
			e.exports = {
				karma: "_2HCuqd3NYACKYaSTmrITE3"
			}
		},
		"./src/reddit/icons/svgs/LayerLogo/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "w4jKpFw5UZHHzTBhRZojH"
			}
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/colors.ts");
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), a.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), a.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? r.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), a.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("title", {
				id: "".concat(e.title, "-title")
			}, e.title), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, a.a.createElement("g", {
				stroke: "none"
			}, a.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Poll/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 15",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				"clip-rule": "evenodd",
				d: "M0 1.5C0 0.671573 0.671573 0 1.5 0H11.5C12.3284 0 13 0.671573 13 1.5C13 2.32843 12.3284 3 11.5 3H1.5C0.671573 3 0 2.32843 0 1.5ZM0 7.5C0 6.67157 0.671573 6 1.5 6H14.5C15.3284 6 16 6.67157 16 7.5C16 8.32843 15.3284 9 14.5 9H1.5C0.671573 9 0 8.32843 0 7.5ZM1.5 12C0.671573 12 0 12.6716 0 13.5C0 14.3284 0.671573 15 1.5 15H7.5C8.32843 15 9 14.3284 9 13.5C9 12.6716 8.32843 12 7.5 12H1.5Z",
				"fill-rule": "evenodd",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Popular/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return a.a.createElement("svg", {
					className: t,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("polygon", {
					points: "12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6"
				}))
			}
		},
		"./src/reddit/icons/svgs/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M5,15a1,1,0,0,1-1-1V11.17a1,1,0,0,1,.29-.7l8.09-8.09a1,1,0,0,1,1.41,0l2.83,2.83a1,1,0,0,1,0,1.41L8.54,14.71a1,1,0,0,1-.71.29Zm12,1a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/i18n/components.tsx");
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("title", null, a.a.createElement(r.c, null, "Reddit Premium")), a.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			const r = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, a.a.createElement("path", {
				d: "M2.3 5.4v1.7c0 .3-.1.5-.3.7-.3.2-.5.3-.9.3-.3 0-.5-.1-.8-.3-.2-.2-.3-.4-.3-.7V1C0 .7.1.5.3.3.6.1.8 0 1.1 0h3c1 0 1.7.2 2.3.6.7.5 1 1.2 1 2.1 0 .8-.3 1.4-1 2 0 .1-.2.1-.3.2l1.2 1.7c.1.1.2.3.2.5 0 .3-.1.5-.3.7-.3.2-.6.3-.9.3-.4 0-.8-.2-1-.5L3.9 5.4H2.3zM4 1.8H2.3v1.9H4c.3 0 .5-.1.8-.2.2-.2.3-.4.3-.8 0-.3-.1-.6-.3-.7-.2-.2-.5-.2-.8-.2zM9.9 0h2.9c.9 0 1.6.2 2.2.6.6.6 1 1.3 1 2.3 0 1-.4 1.8-1.2 2.3-.5.4-1.2.6-2 .6H11v1.4c0 .3-.1.5-.3.7-.2.1-.5.2-.8.2s-.6-.1-.8-.3c-.3-.2-.4-.4-.4-.7V1c0-.3.1-.5.3-.7.3-.2.6-.3.9-.3zm3.8 2.9c0-.4-.2-.7-.5-.9-.2-.1-.5-.2-.8-.2H11V4h1.4c.3 0 .6-.1.8-.2.3-.2.5-.5.5-.9zM7.4 11.3v3.8c0 .3-.1.5-.3.7-.3.1-.6.2-.9.2-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.3-.7v-1.3H2.3V15c0 .3-.1.5-.3.7-.3.2-.5.3-.9.3-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.3-.6v-3.8c0-.5.1-1 .4-1.4s.6-.8 1-1.1c.6-.4 1.4-.6 2.3-.6.9 0 1.7.2 2.3.6.5.3.8.7 1 1.1s.4.9.4 1.4zM3.7 10c-.4 0-.7.1-.9.3-.3.2-.5.6-.5 1.1v.6h2.8v-.6c0-.5-.2-.9-.5-1.1-.2-.2-.5-.3-.9-.3zm8.4 0c-.6 0-1 .2-1.3.5-.2.2-.3.6-.3 1.1v3.6c0 .3-.1.5-.3.7-.2 0-.5.1-.8.1-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.3-.7v-3.8c0-.8.3-1.5.8-2.1.7-.7 1.7-1.1 3.1-1.1 1.4 0 2.4.4 3.1 1.1.5.5.8 1.2.8 2.1V15c0 .3-.1.5-.3.7-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.3-.7v-3.6c0-.5-.1-.8-.3-1.1-.5-.2-.9-.3-1.5-.3z"
			}))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = s.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", c({}, e, {
				className: Object(r.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Redditor/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				viewBox: "0 0 250 250",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/colors.ts");
			t.a = e => a.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, a.a.createElement("g", null, a.a.createElement("circle", {
				fill: r.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), a.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), a.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), a.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/reddit/constants/colors.ts"),
				i = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(r.a)(e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				fill: Object(i.a)(e).bodyText
			}, a.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), a.a.createElement("circle", {
				fill: o.a.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), a.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), a.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), a.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), a.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), a.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
		},
		"./src/reddit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n, a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = (s("./src/polyfill.ts"), s("./src/lib/performanceTimings/index.tsx")),
				o = s("./node_modules/@r/google-tag-manager/compiled.js"),
				i = s("./src/config.ts"),
				c = s("./node_modules/history/esm/history.js"),
				d = s("./node_modules/js-cookie/src/js.cookie.js"),
				l = s.n(d),
				u = s("./node_modules/react/index.js"),
				m = s.n(u),
				p = s("./node_modules/react-router-redux/es/index.js"),
				b = s("./node_modules/redux-thunk/lib/index.js"),
				h = s.n(b),
				g = s("./node_modules/request-idle-callback/index.js"),
				f = s("./src/lib/browser/isIncognito.ts"),
				x = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/extractQueryParams/index.ts"),
				y = s("./src/lib/filterQueryParams/index.ts"),
				C = s("./src/lib/getParsedUserAgent/index.ts"),
				O = s("./src/lib/initializeClient/index.tsx"),
				E = s("./src/lib/matchRoute/index.ts"),
				P = s("./src/lib/performance.js"),
				j = s("./src/lib/safeJSONParse/index.ts"),
				w = s("./src/reddit/customMiddleware/gqlContext.ts"),
				M = s("./src/reduxMiddleware/apiContext.ts"),
				S = s("./src/telemetry/index.ts"),
				N = s("./src/telemetry/models/Timer.ts"),
				I = s("./src/reddit/actions/apiRequestHeaders.ts"),
				k = s("./src/reddit/actions/chat/promo.ts"),
				_ = s("./src/reddit/actions/chat/sendbirdProxy.ts"),
				T = s("./src/reddit/actions/chat/unreadCount.ts"),
				L = s("./src/reddit/actions/emailCollection/index.ts"),
				F = s("./src/lib/makeApiRequest/index.ts"),
				R = s("./src/lib/omitHeaders/index.ts"),
				A = s("./src/reddit/constants/headers.ts"),
				D = s("./src/reddit/actions/toaster.ts"),
				B = s("./src/reddit/i18n/utils.ts");
			! function(e) {
				e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
			}(n || (n = {}));
			var H = s("./src/reddit/models/Toast/index.ts");
			const U = e => async (t, s, a) => {
				let {
					apiContext: r
				} = a;
				const o = await ((e, t) => Object(F.b)(Object(R.a)(e, [A.a]), {
					method: x.bb.POST,
					endpoint: "".concat(e.apiUrl, "/api/v1/verify_email/").concat(t),
					data: {}
				}))(r(), e);
				if (o.ok && o.body && o.body.success) return n.Success;
				switch (o.body.reason) {
					case n.AlreadyVerified:
						return n.AlreadyVerified;
					case n.WrongUser:
						return n.WrongUser;
					default:
						return n.Error
				}
			};
			var V = s("./src/reddit/actions/media.ts"),
				Q = s("./src/reddit/actions/monthsToMinutes/accountCompleteness.ts"),
				W = s("./src/reddit/actions/monthsToMinutes/homeFeed.ts"),
				q = s("./src/reddit/actions/monthsToMinutes/post.ts"),
				G = s("./src/reddit/actions/multireddit/index.ts"),
				z = s("./src/reddit/actions/notifications/loader.ts"),
				Z = s("./src/reddit/actions/notifications/state.ts"),
				K = s("./src/reddit/actions/nps.ts"),
				Y = s("./src/reddit/actions/platform.ts"),
				X = s("./src/reddit/actions/session.ts"),
				J = s("./src/reddit/actions/theme.ts"),
				$ = s("./src/reddit/actions/users.ts"),
				ee = s("./node_modules/react-redux/es/index.js"),
				te = s("./node_modules/react-router/esm/react-router.js"),
				se = s("./node_modules/reselect/es/index.js"),
				ne = (s("./src/reddit/components/Root/redesignFont.less"), s("./assets/fonts/BentonSans/font.less"), s("./assets/fonts/IBMPlexSans/font.less"), s("./assets/fonts/NotoMono/font.less"), s("./assets/fonts/NotoSans/font.less"), s("./assets/fonts/VCR/font.less"), s("./src/reddit/components/Root/index.m.less")),
				ae = s.n(ne),
				re = s("./src/higherOrderComponents/makeAsync.tsx"),
				oe = s("./src/lib/loadWithRetries/index.ts"),
				ie = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				ce = s("./src/reddit/selectors/user.ts");
			const de = Object(se.c)({
					shouldEnable: e => Object(ie.b)(e) || Object(ce.H)(e)
				}),
				le = Object(ee.b)(de),
				ue = () => m.a.createElement(u.Fragment, null);
			class me extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						component: ue
					}
				}
				componentWillMount() {
					this.props.shouldEnable && this.loadAdminPanel()
				}
				componentWillReceiveProps(e) {
					e.shouldEnable && me.adminPanel === ue ? this.loadAdminPanel() : this.props.shouldEnable && !e.shouldEnable && this.setComponent(ue)
				}
				loadAdminPanel() {
					if (me.adminPanel === ue) {
						const e = Object(re.a)({
							ErrorComponent: ue,
							getComponent: () => Object(oe.a)(() => s.e("AdminPanel").then(s.bind(null, "./src/reddit/components/AdminPanel/index.tsx")).then(e => e.default)),
							LoadingComponent: ue
						});
						this.setComponent(e)
					}
				}
				render() {
					const e = this.state.component;
					return m.a.createElement(e, null)
				}
				setComponent(e) {
					me.adminPanel = e, this.setState({
						component: e
					})
				}
			}
			me.adminPanel = ue;
			var pe = le(me),
				be = s("./src/lib/doubleclickForPublishers/index.ts"),
				he = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ge = s("./src/reddit/helpers/trackers/ads.ts"),
				fe = s("./src/reddit/selectors/meta.ts");
			const xe = Object(se.c)({
				region: fe.h
			});
			class ve extends m.a.Component {
				constructor(e) {
					super(e), Object(be.f)({
						limitDataProcessing: "CA" === this.props.region,
						onRequest: () => this.props.sendEvent(Object(ge.b)())
					})
				}
				shouldComponentUpdate() {
					return !1
				}
				render() {
					return null
				}
			}
			var ye = Object(ee.b)(xe)(Object(he.b)(ve)),
				Ce = s("./src/reddit/components/AppRouter/index.tsx"),
				Oe = s("./node_modules/lodash/noop.js"),
				Ee = s.n(Oe),
				Pe = s("./node_modules/prop-types/index.js"),
				je = s.n(Pe),
				we = s("./node_modules/react-shortcuts/lib/index.js"),
				Me = s("./src/reddit/constants/shortcuts.ts");
			var Se = s("./src/reddit/selectors/structuredStyles.ts");
			const Ne = {
					[Me.c.OpenIndex]: {
						osx: ["cmd + ?", "?"],
						windows: ["ctrl + ?", "?"],
						linux: ["ctrl + ?", "?"],
						other: ["ctrl + ?", "?"]
					},
					[Me.c.Close]: "esc",
					[Me.c.Konami]: "up up down down left right left right b a enter"
				},
				Ie = {
					[Me.c.Upvote]: "a",
					[Me.c.Downvote]: "z",
					[Me.c.Save]: "s",
					[Me.c.Hide]: "h",
					[Me.c.OpenLink]: "l"
				},
				ke = {
					[Me.c.CollapseOrLoad]: "enter",
					[Me.c.NextComment]: "j",
					[Me.c.PrevComment]: "k",
					[Me.c.Reply]: "r"
				};
			var _e = {
					[Me.d.CommentPage]: Object.assign({}, Ne, Ie, ke),
					[Me.d.Global]: Object.assign({}, Ne),
					[Me.d.Lightbox]: Object.assign({}, Ne, Ie, ke, {
						[Me.c.NextPost]: "n",
						[Me.c.PrevPost]: "p"
					}),
					[Me.d.Listing]: Object.assign({}, Ne, Ie, {
						[Me.c.OpenLightbox]: "enter",
						[Me.c.NextPost]: "j",
						[Me.c.PrevPost]: "k",
						[Me.c.Expando]: "x",
						[Me.c.NewPost]: "c",
						Reserved: ["n", "p", "r"]
					}),
					[Me.d.Modqueue]: Object.assign({}, Ne, Ie, {
						[Me.c.OpenLightbox]: "enter",
						[Me.c.NextPost]: "j",
						[Me.c.PrevPost]: "k",
						[Me.c.Expando]: "x",
						[Me.c.NewPost]: "c"
					})
				},
				Te = s("./src/reddit/actions/shortcuts.ts");
			const Le = {
					[Me.c.Close]: Te.d,
					[Me.c.CollapseOrLoad]: Te.e,
					[Me.c.Downvote]: Te.f,
					[Me.c.Expando]: Te.g,
					[Me.c.Hide]: Te.h,
					[Me.c.NextComment]: Te.j,
					[Me.c.NextPost]: Te.k,
					[Me.c.NewPost]: Te.i,
					[Me.c.OpenIndex]: Te.l,
					[Me.c.OpenLightbox]: Te.m,
					[Me.c.OpenLink]: Te.n,
					[Me.c.PrevComment]: Te.o,
					[Me.c.PrevPost]: Te.p,
					[Me.c.Reply]: Te.q,
					[Me.c.Save]: Te.s,
					[Me.c.Upvote]: Te.t,
					[Me.c.Konami]: null
				},
				Fe = (e, t) => (s, n) => {
					if (!document.activeElement) return;
					const a = document.activeElement.nodeName;
					if ("INPUT" === a || "TEXTAREA" === a || "BUTTON" === a && Me.a.includes(n.which)) return;
					const r = Le[s];
					r && e(r(t))
				};
			var Re = s("./src/reddit/components/ShortcutWrapper/index.m.less"),
				Ae = s.n(Re);
			const De = e => {
					let {
						children: t
					} = e;
					return m.a.createElement("div", {
						className: Ae.a.shortcutDiv,
						id: Me.b,
						tabIndex: -1
					}, m.a.Children.only(t))
				},
				Be = new we.ShortcutManager(_e),
				He = Object(se.c)({
					isBladeOpen: Se.j,
					namespace: e => e.activeModalId ? Me.d.Global : e.shortcuts.namespace
				}),
				Ue = Object(ee.b)(He, e => ({
					dispatchAction: t => e(t)
				}));
			class Ve extends u.Component {
				getChildContext() {
					return {
						shortcuts: Be
					}
				}
				componentDidMount() {
					const e = document.getElementById(Me.b);
					if (e) {
						const t = window.scrollX,
							s = window.scrollY;
						e.focus(), window.scrollTo(t, s)
					}
				}
				render() {
					const {
						children: e,
						dispatchAction: t,
						isBladeOpen: s,
						namespace: n,
						sendEvent: a
					} = this.props;
					return m.a.createElement(we.Shortcuts, {
						handler: s ? Ee.a : Fe(t, a),
						isolate: !0,
						name: n
					}, m.a.createElement(De, null, e))
				}
			}
			Ve.childContextTypes = {
				shortcuts: je.a.object.isRequired
			};
			var Qe = Ue(Object(he.b)(Ve)),
				We = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				qe = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/components/Header/Sparse.tsx")),
				Ge = s("./src/reddit/components/ThemeProvider/index.tsx"),
				ze = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Ze = s("./src/reddit/controls/Button/index.tsx"),
				Ke = s("./src/reddit/featureFlags/index.ts"),
				Ye = s("./src/reddit/i18n/components.tsx"),
				Xe = e => m.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 52 52"
				}, m.a.createElement("path", {
					d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
				}), m.a.createElement("path", {
					fill: "#fff",
					d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
				}), m.a.createElement("path", {
					d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
				}), m.a.createElement("path", {
					d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
				}), m.a.createElement("path", {
					d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
				}), m.a.createElement("path", {
					d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
				}), m.a.createElement("path", {
					fill: "#fff",
					d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
				}), m.a.createElement("path", {
					d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
				})),
				Je = s("./src/reddit/pages/InternalServerError/index.m.less"),
				$e = s.n(Je),
				et = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const tt = Object(se.c)({
					language: ce.T,
					showError: Ke.d.showVerboseErrors
				}),
				st = Object(ee.b)(tt)(e => {
					var {
						language: t
					} = e, s = et(e, ["language"]);
					return m.a.createElement(ze.a.Provider, {
						value: !1
					}, m.a.createElement(Ge.b, {
						subredditName: ""
					}, m.a.createElement("div", null, m.a.createElement(qe.a, null), m.a.createElement("div", {
						className: $e.a.container
					}, m.a.createElement("div", {
						className: $e.a.mainContent
					}, m.a.createElement(Xe, {
						className: $e.a.dizzySnoo
					}), m.a.createElement("h3", {
						className: $e.a.title
					}, m.a.createElement(Ye.c, null, "Sorry, for some reason reddit can't be reached.")), m.a.createElement("div", {
						className: $e.a.subTitle
					}, m.a.createElement(Ye.c, null, "Give us a few minutes to fix the problem. Sorry!")), m.a.createElement(Ze.f, {
						onClick: () => window.location.reload(!0)
					}, m.a.createElement(Ye.c, null, "Reload Page")), s.showError && m.a.createElement("div", {
						className: $e.a.subTitle
					}, s.error.message)), m.a.createElement("div", {
						className: $e.a.topImageContainer
					}, m.a.createElement("img", {
						className: $e.a.image,
						src: "".concat(i.a.assetPath, "/img/error/star_pattern.png")
					})), m.a.createElement("div", {
						className: $e.a.bottomImageContainer
					}, m.a.createElement("img", {
						className: $e.a.image,
						src: "".concat(i.a.assetPath, "/img/error/half_planet.png")
					}))))))
				});

			function nt() {
				return (nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const at = Object(se.c)({
					theme: e => e.themes.current
				}),
				rt = Object(ee.b)(at, {})(e => {
					let {
						children: t,
						theme: s
					} = e;
					const n = Object(We.a)({
						theme: s
					});
					return m.a.createElement("div", {
						className: ae.a.container,
						children: t,
						style: {
							"--background": n.body,
							"--canvas": n.canvas
						}
					})
				});
			var ot = e => {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: s
					} = e;
					return m.a.createElement(he.a, null, m.a.createElement(rt, null, m.a.createElement(ye, null), m.a.createElement(pe, null), m.a.createElement(Qe, null, m.a.createElement(t, null, m.a.createElement(te.d, {
						component: it(s)
					})))))
				}
				return m.a.createElement(st, {
					error: e.error
				})
			};
			const it = e => t => m.a.createElement(Ce.b, nt({
				routes: e
			}, t));
			var ct = s("./src/reddit/constants/localStorage.ts"),
				dt = s("./node_modules/lodash/throttle.js"),
				lt = s.n(dt),
				ut = s("./src/reddit/helpers/localStorage/index.ts");
			const mt = 1e3;
			class pt extends m.a.Component {
				constructor() {
					super(...arguments), this.flush = lt()(() => Object(ut.Q)(this.props.storageKey, this.props.value), mt)
				}
				componentDidMount() {
					this.props.syncOnMount && this.sync()
				}
				componentDidUpdate() {
					this.sync()
				}
				sync() {
					this.props.enabled && this.flush()
				}
				render() {
					return null
				}
			}
			pt.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const bt = Object(se.a)(ce.K, e => ({
				storageKey: ct.q,
				value: {},
				enabled: !e
			}));
			var ht = Object(ee.b)(bt)(pt),
				gt = s("./src/reddit/selectors/index.ts"),
				ft = s("./src/reddit/actions/monthsToMinutes.ts"),
				xt = s("./src/reddit/selectors/monthsToMinutes.ts"),
				vt = s("./src/reddit/selectors/subscriptions.ts");
			const yt = Object(gt.a)(xt.d, xt.B, xt.q, xt.t, xt.u, xt.v, xt.b, xt.E, vt.e, xt.w, (e, t, s, n, a, r, o, i, c, d) => {
				const l = {
					accountCompleteness: o,
					homeFeed: s,
					postsCount: n,
					subreddits: t,
					subscriptions: Object.keys(c),
					tooltip: i,
					views: a,
					votes: r
				};
				return {
					storageKey: ct.u,
					value: {
						loggedOutV5: d ? l : Object(ft.g)(l)
					},
					enabled: e,
					syncOnMount: !1
				}
			});
			var Ct = Object(ee.b)(yt)(pt);
			var Ot = () => m.a.createElement(m.a.Fragment, null, m.a.createElement(Ct, null), m.a.createElement(ht, null)),
				Et = s("./src/reddit/constants/history.ts"),
				Pt = s("./src/reddit/constants/jsapiEvents.ts"),
				jt = s("./src/reddit/constants/parameters.ts"),
				wt = s("./src/reddit/constants/screenWidths.ts"),
				Mt = s("./src/reddit/contexts/AdminEvents.ts"),
				St = s("./src/reddit/contexts/ApiContext.tsx"),
				Nt = s("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				It = s("./node_modules/brcast/dist/brcast.es.js"),
				kt = s("./src/telemetry/helpers/sendEvent.ts");
			var _t = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(It.a)([]);
					return {
						broadcaster: t,
						middleware: s => {
							const n = s.getState();
							return (Object(ie.b)(n) || Object(ce.H)(n)) && (e = !0, Object(kt.c)(t)), n => a => {
								const r = n(a),
									o = s.getState();
								if (!Object(ie.b)(o)) {
									const s = Object(ce.H)(o);
									e && !s ? (e = !1, Object(kt.c)(void 0), t.setState([])) : s && !e && (t.setState([]), Object(kt.c)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(It.a)([]),
					middleware: () => e => t => e(t)
				}),
				Tt = s("./node_modules/lodash/pick.js"),
				Lt = s.n(Tt),
				Ft = s("./src/reddit/actions/header.ts"),
				Rt = s("./src/reddit/actions/preferences.ts"),
				At = s("./src/reddit/constants/cookie.ts"),
				Dt = s("./src/reddit/constants/preferences.ts");
			const Bt = new Set([Rt.f, Rt.h, J.b, $.b, Rt.c, Rt.n, Ft.d, Ft.e, Rt.q]);
			var Ht = e => t => s => {
					const n = t(s);
					if (Bt.has(s.type)) {
						const t = e.getState().user,
							s = {
								prefs: Lt()(t.prefs, ["hamburgerTray", "globalTheme", "featuresViewedHistory", "collapsedTraySections", "nightmode", "subscriptionsPinned", Dt.b, Dt.d, Dt.e]),
								language: t.language
							},
							n = new Date;
						n.setFullYear(n.getFullYear() + 2), l.a.set(At.k, btoa(JSON.stringify(s)), {
							expires: n,
							domain: i.a.cookieDomain
						})
					}
					return n
				},
				Ut = s("./src/lib/fastdom/index.ts"),
				Vt = s("./src/reddit/actions/redditEmbed.ts"),
				Qt = s("./src/reddit/actions/tabBadging.ts"),
				Wt = s("./src/reddit/helpers/tabBadging/index.ts"),
				qt = s("./src/reddit/selectors/chat.ts"),
				Gt = s("./src/reddit/selectors/experiments/badging.ts");
			const zt = (e, t) => {
				e <= 0 ? Ut.a.write(() => {
					Object(Wt.b)(!1), window.document.title = t
				}) : Ut.a.write(() => {
					Object(Wt.b)(), window.document.title = "(".concat(e, ") ").concat(t)
				})
			};
			var Zt = e => {
					const t = window.document.title;
					return s => n => {
						switch (n.type) {
							case T.a.SYNC:
							case T.a.REQUEST_SUCCESS: {
								const s = e.getState(),
									{
										dispatch: a
									} = e;
								if (!Object(Gt.a)(s)) break;
								const r = Object(qt.a)(s),
									o = n.payload && n.payload.basicChannelCount,
									i = Object(ce.F)(s),
									c = o + i;
								if (zt(c, t), a(Object(Qt.b)({
										hasUnreadMessages: !!c
									})), r !== o) {
									const e = {
										basicChannelCount: o,
										inboxCount: i
									};
									Object(Wt.c)(e)
								}
								break
							}
							case Vt.b: {
								const s = e.getState(),
									{
										dispatch: a
									} = e;
								if (!Object(Gt.a)(s)) break;
								const r = Object(ce.F)(s),
									o = n.payload.account && n.payload.account.inboxCount,
									i = Object(qt.a)(s),
									c = o && o + i;
								if (!c) break;
								if (zt(c, t), a(Object(Qt.b)({
										hasUnreadMessages: !!c
									})), r !== o) {
									const e = {
										basicChannelCount: i,
										inboxCount: o
									};
									Object(Wt.c)(e)
								}
							}
						}
						return s(n)
					}
				},
				Kt = s("./src/server/helpers/seoMetadata.tsx");
			var Yt = "undefined" != typeof document ? e => t => s => {
					const n = t(s);
					if (s.type === Y.e) {
						const t = e.getState(),
							n = Object(Gt.a)(t),
							{
								meta: a
							} = s.payload;
						n ? ((e, t) => {
							const s = Object(ce.F)(e) || 0,
								n = Object(qt.a)(e);
							zt(n + s, t)
						})(t, a.title) : Ut.a.write(() => {
							document.title = a.title, Object(Kt.b)(t, document)
						})
					}
					return n
				} : () => e => t => e(t),
				Xt = s("./src/reddit/actions/frontpage.ts"),
				Jt = s("./src/reddit/actions/multireddit/constants.ts"),
				$t = s("./src/reddit/actions/page.ts"),
				es = s("./src/reddit/actions/pages/collectionCommentsPage.ts"),
				ts = s("./src/reddit/actions/pages/profileComments.ts"),
				ss = s("./src/reddit/actions/pages/profileOverview.ts"),
				ns = s("./src/reddit/actions/pages/profilePosts.ts"),
				as = s("./src/reddit/actions/pages/search.ts"),
				rs = s("./src/reddit/actions/pages/subreddit.ts"),
				os = s("./src/reddit/actions/profileConversations.ts"),
				is = s("./src/reddit/actions/profileOverviewChrono.ts"),
				cs = s("./src/reddit/actions/recommendations.ts"),
				ds = s("./src/reddit/actions/search.ts"),
				ls = s("./src/reddit/actions/subreddit.ts");
			const us = new Set([es.b, $t.b, ts.b, ts.e, ss.e, ss.b, ns.e, ns.b, rs.b, $t.g, $t.l, Jt.r, Xt.b, os.e, cs.b, ls.i, ds.c, is.b, as.c]);
			var ms = e => t => s => {
				const n = t(s),
					a = e.getState();
				return us.has(s.type) && a.user.loggedOutData && Object(xt.w)(a) && e.dispatch(Object(ft.i)(a.user.loggedOutData.votes)), n
			};
			const ps = 5 * x.cb;
			var bs = e => {
					const t = lt()(() => {
						const t = e.getState().user.session,
							s = new Date(t.expires),
							n = new Date;
						s.getTime() - n.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(X.g())
					}, ps);
					let s, n;
					const a = () => {
							const s = e.getState().user.session;
							if (!s || !n) return;
							const a = new Date(s.expires),
								r = n + Math.floor(.8 * (a.getTime() - n));
							Date.now() > r && t && t()
						},
						r = e => {
							n = Date.now();
							const a = new Date(e.expires).getTime() - n,
								r = .8 + .1 * Math.random(),
								o = Math.min(Math.floor(r * e.expiresIn * 1e3), Math.floor(r * a));
							s = setTimeout(t, o)
						},
						o = e.getState();
					return o.user.session && r(o.user.session), window.addEventListener("focus", a), window.addEventListener("touchend", a), document.body.addEventListener("mouseenter", a), e => t => (t.type !== X.a && t.type !== X.b && t.type !== X.c && t.type !== X.e || r(t.payload), t.type === X.d && (clearTimeout(s), s = null), e(t))
				},
				hs = s("./src/reddit/actions/tracking.ts"),
				gs = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				fs = s("./src/reddit/helpers/history/index.ts"),
				xs = s("./src/reddit/helpers/trackers/commentList.ts"),
				vs = s("./src/reddit/helpers/trackers/postList.ts"),
				ys = s("./src/reddit/helpers/trackers/screenview.ts"),
				Cs = s("./src/reddit/selectors/platform.ts"),
				Os = s("./src/reddit/selectors/subreddit.ts"),
				Es = s("./src/reddit/helpers/routeKey/index.ts");
			var Ps = e => t => s => {
					const n = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(hs.c({
							routeKey: t
						}))
					};
					if (s.type === Y.a) {
						const n = e.getState(),
							a = (n.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							r = Object(Os.G)(n, a) || "",
							i = (n.subreddits.about[r] || {}).advertiserCategory;
						o.trigger("pageview", Object.assign({}, Lt()(s.payload.location, "pathname", "search", "hash"), {
							subreddit: a,
							advertiserCategory: i
						}));
						const c = n.platform.currentPage && n.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(Es.c)(c, n, Object(gs.a)(n));
							if (e && S.c.has(e)) {
								const t = S.c.end(e);
								!Object(Cs.i)(n) && Object(fs.b)(Et.a.IsOverlay) || Object(ys.g)(c, n, N.TimerType.UserCancelled, t)
							}
						}
						const d = s.payload.routeMatch;
						if (!d) return t(s);
						const l = Object(gs.a)(n, d),
							u = Object(Es.c)(d, n, l);
						if (!u) return t(s);
						S.c.start(u)
					}
					const a = t(s);
					switch (s.type) {
						case $t.g:
						case ss.b:
						case ss.e:
						case ns.e:
						case ts.e:
						case rs.b: {
							const {
								key: e,
								token: t
							} = s.payload;
							t || n(e);
							break
						}
						case as.c: {
							const {
								key: e,
								tokens: t
							} = s.payload;
							t.posts || n(e);
							break
						}
						case Xt.b:
						case ls.i:
						case ns.b: {
							const {
								key: t,
								postIds: a
							} = s.payload;
							n(t);
							const r = e.getState();
							if (a.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							vs.j(r, t);
							break
						}
						case ts.b: {
							const {
								key: t,
								commentIds: a
							} = s.payload;
							if (n(t), a.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							xs.a(r, t);
							break
						}
						case ds.c: {
							const {
								key: e
							} = s.payload;
							n(e);
							break
						}
					}
					return a
				},
				js = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				ws = s("./src/reddit/helpers/monthsToMinutes/index.ts"),
				Ms = s("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				Ss = s("./src/lib/permanentCookieOptions.ts");
			const Ns = e => {
				if (!e) return;
				const t = (l.a.get(At.i) || "").split(",");
				if (!t.includes(e)) {
					t.unshift(e);
					const s = t.slice(0, 10).join(","),
						n = Object(Ss.a)();
					l.a.set(At.i, s, n)
				}
			};
			var Is = s("./src/reddit/layout/page/Listing/index.tsx"),
				ks = s("./src/reddit/reducers/index.ts"),
				_s = s("./src/reddit/routes/collectionCommentsPage/index.ts"),
				Ts = s("./src/reddit/routes/appeal/index.ts"),
				Ls = s("./src/reddit/routes/coins/index.ts"),
				Fs = s("./src/reddit/routes/coinsMobile/index.ts"),
				Rs = s("./src/reddit/routes/commentsPage/index.ts");
			s("./node_modules/@loadable/component/dist/loadable.esm.js");
			var As = [],
				Ds = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				Bs = s("./src/reddit/helpers/trackers/emailVerification.ts");
			var Hs = {
					action: e => async (t, s) => {
						await t(Rt.x());
						const a = s(),
							r = e.params.verificationToken,
							o = e.queryParams && e.queryParams.source;
						if (o && Object(S.a)(Object(Bs.b)(o)(a)), !Object(ce.K)(a)) return Object(Ds.a)(t, a);
						const i = await t(U(r));
						i === n.Success && Object(S.a)(Object(Bs.d)()(a)), t(Object(p.c)("/?verifiedEmail=".concat(i)))
					},
					chunk: x.o.EMPTY,
					exact: !0,
					meta: {
						name: x.yb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				Us = s("./src/reddit/routes/explore/index.ts"),
				Vs = s("./src/reddit/routes/framedGild/index.ts"),
				Qs = s("./src/reddit/routes/framedModal/index.ts"),
				Ws = s("./src/reddit/routes/frontpage/index.ts"),
				qs = s("./src/reddit/routes/inbox/index.ts");
			var Gs = {
					action: e => async e => {
						await e(Object(p.c)("/r/layer"))
					},
					chunk: x.o.EMPTY,
					exact: !0,
					meta: {
						name: x.yb.LAYER_REDIRECT
					},
					path: ["/layer", "/layer/"]
				},
				zs = s("./src/reddit/routes/meta/index.ts"),
				Zs = s("./src/reddit/routes/moderationPages/index.ts"),
				Ks = s("./src/reddit/routes/modListing/index.ts"),
				Ys = s("./src/reddit/routes/modQueue/index.ts"),
				Xs = s("./src/reddit/routes/multireddit/index.ts"),
				Js = s("./src/reddit/routes/postCreation/constants.ts");
			const $s = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(p.c)("/"))
				},
				chunk: x.o.EMPTY,
				exact: !0,
				meta: {
					name: x.yb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var en = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)(Js.b))
					},
					chunk: x.o.EMPTY,
					exact: !0,
					meta: {
						name: x.yb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...$s],
				tn = s("./src/reddit/routes/postCreation/index.ts"),
				sn = s("./src/reddit/routes/postDraft/index.ts"),
				nn = s("./src/reddit/routes/premium/index.ts"),
				an = s("./src/reddit/routes/profileComments/index.ts"),
				rn = s("./src/lib/addQueryParams/index.ts"),
				on = s("./src/reddit/endpoints/me/index.ts");
			var cn = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							rest: r
						} = e.params, {
							queryParams: o
						} = e, i = await Object(on.a)(a());
						if (!(i.ok && i.body && i.body.account)) {
							const e = s();
							return void Object(Ds.a)(t, e)
						}
						const c = i.body.account.displayText,
							d = r ? "/user/".concat(c, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(r)) : "/user/".concat(c, "/"),
							l = Object(rn.a)(d, o);
						await t(Object(p.c)(l))
					},
					chunk: x.o.EMPTY,
					exact: !0,
					meta: {
						name: x.yb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				dn = s("./src/reddit/routes/profileModSettings/index.ts"),
				ln = s("./src/reddit/routes/profileOverview/index.ts"),
				un = s("./src/reddit/routes/profilePosts/index.ts"),
				mn = s("./src/reddit/routes/profilePrivate/index.ts");
			var pn = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(n)) : "/user/".concat(s, "/"), o = Object(rn.a)(r, a);
						await t(Object(p.c)(o))
					},
					chunk: x.o.EMPTY,
					exact: !0,
					meta: {
						name: x.yb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				bn = s("./src/reddit/routes/profileSnoobuilder/index.ts");
			var hn = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/posts/").concat(n) : "/user/".concat(s, "/posts"), o = Object(rn.a)(r, a);
						t(Object(p.c)(o))
					},
					chunk: x.o.EMPTY,
					exact: !0,
					meta: {
						name: x.yb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				gn = s("./src/reddit/routes/publicAccessNetwork/index.ts"),
				fn = s("./src/reddit/routes/report/index.ts"),
				xn = s("./src/reddit/routes/searchResults/index.ts"),
				vn = s("./src/reddit/routes/settings/index.ts");
			var yn = [{
					action: e => async t => {
						const {
							page: s
						} = e.params, n = s && "blocked" === s ? "/settings/privacy" : "/settings/";
						await t(Object(p.c)(n))
					},
					chunk: x.o.EMPTY,
					meta: {
						name: x.yb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(p.c)("/settings/profile"))
					},
					chunk: x.o.EMPTY,
					meta: {
						name: x.yb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				Cn = s("./src/reddit/routes/subreddit/index.ts"),
				On = s("./src/reddit/routes/subredditCreation/index.ts"),
				En = s("./src/reddit/routes/subredditLeaderboard/index.ts"),
				Pn = s("./src/reddit/routes/subredditWiki/index.ts"),
				jn = s("./src/reddit/routes/topic/index.ts");
			var wn = [Ts.a, Ls.a, Fs.a, cn, pn, hn, ..._s.a, ...Rs.a, Hs, ...Ws.a, nn.a, Vs.a, Qs.a, tn.a, sn.a, ...en, Us.a, Gs, zs.a, Xs.a, Ys.a, Ks.c, qs.a, an.a, dn.a, ln.a, un.a, bn.a, mn.a, gn.a, ...vn.a, ...yn, xn.a, ...Pn.a, jn.a, Cn.a, On.a, En.a, Zs.a, fn.a, ...As],
				Mn = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				Sn = s("./src/reddit/constants/experiments.ts"),
				Nn = s("./src/reddit/helpers/chooseVariant/index.ts"),
				In = s("./src/reddit/selectors/telemetry.ts");
			const kn = {
					displayDelay: 15,
					displayOnRoutes: [x.yb.SUBREDDIT, x.yb.COMMENTS],
					experimentName: Sn.T,
					experimentVariant: Sn.ab.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				_n = e => {
					const {
						base_url: t
					} = Object(In.requestWithParams)(e), s = Object(Cs.b)(e), n = s && s.urlParams.partialPostId, a = s && s.urlParams.subredditName;
					return Object.assign({}, t && {
						rbl: t
					}, a && {
						s: a
					}, n && {
						p: n
					})
				},
				Tn = e => {
					if ((((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return t.experimentOverrides[s] === n
						})(kn, e) || (e => {
							let {
								samplingRate: t,
								seed: s
							} = e;
							return !!s && 0 === Math.floor(s * t)
						})(kn)) && ((e, t) => {
							let {
								displayOnRoutes: s
							} = e;
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && s.includes(n)
						})(kn, e) && ((e, t) => {
							let {
								isSEOOnly: s
							} = e;
							return !s || t.meta.isSessionSeo
						})(kn, e) && ((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return Object(Nn.c)(t, {
								experimentName: s,
								experimentEligibilitySelector: Nn.a
							}) === n
						})(kn, e)) return {
						displayDelay: kn.displayDelay,
						externalVars: _n(e)
					}
				};
			var Ln = s("./src/reddit/singleton/EventSystem.ts"),
				Fn = s("./src/reddit/actions/global.ts");
			var Rn = s("./src/reddit/models/MonthsToMinutes/index.ts");
			Object(r.e)(r.b.EntryPointStart);
			const An = Object(M.a)({
					actionDispatchers: {
						reddaidReceived: $.v,
						loidReceived: $.t,
						sessionTrackerReceived: $.A
					},
					authHeaders: {
						[A.a]: "desktop2x"
					},
					cookies: l.a,
					receivedActions: {
						reddaidReceived: $.f,
						loidReceived: $.d,
						sessionTrackerReceived: $.m,
						userAuthenticated: X.c,
						userLoggedOut: X.d,
						userReauthenticated: X.e,
						headersReceived: I.a
					},
					onBeforeRequestFactory: Ms.a,
					statsAppName: x.l.Redesign
				}),
				Dn = Object(w.a)(An.apiContext),
				Bn = _t();
			let Hn;
			Object(O.a)({
				reducers: ks.a,
				routes: wn,
				apiContext: An.apiContext,
				gqlContext: Dn.gqlContext,
				appFactory: (e, t) => m.a.createElement(Mt.a.Provider, {
					value: Bn.broadcaster
				}, m.a.createElement(St.a.Provider, {
					value: {
						apiContext: An.apiContext,
						gqlContext: Dn.gqlContext
					}
				}, m.a.createElement(Nt.b, null, m.a.createElement(ot, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement(Ot, null)))),
				appName: x.l.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const s = Hn;
						if (!s) return;
						s.dispatch(Object(Y.k)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), s.dispatch(Object(Y.j)())
							}
						}))
					}
				}),
				customMiddleware: [h.a.withExtraArgument({
					routes: wn,
					apiContext: An.apiContext,
					gqlContext: Dn.gqlContext
				}), Bn.middleware, An.middleware, Dn.middleware, bs, Ht, Ps, Yt, ms, Zt],
				modifyInitialData: e => {
					let {
						initialData: t,
						browserHistory: s
					} = e;
					const n = t.platform.currentPage ? t.platform.currentPage.key : "";
					if (n) {
						const e = s.location.key;
						t.platform.currentPage && (t.platform.currentPage.key = e);
						for (const s of ["referrers", "metas"]) Object.keys(t.platform[s]).length && (t.platform[s] = {
							[e]: t.platform[s][n]
						})
					}
					return t
				},
				staticPages: {
					loading: m.a.createElement(Is.a, {
						content: null,
						sidebar: null
					})
				},
				preRender: e => {
					let {
						browserHistory: t,
						routes: s,
						store: n
					} = e;
					window.addEventListener("message", e => {
							const t = i.a.mediaUrl;
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(V.f)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: "t3_".concat(e.data.id36)
							}))
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || n.dispatch(Object(Y.g)());
					const a = Object(ce.V)(n.getState());
					n.dispatch(Object(J.c)({
						nightmode: a
					})), n.dispatch(Object(Y.h)(s));
					t.listen((e, t) => {
						const a = Object(E.a)(Object(c.e)(e), s);
						n.dispatch(Object(Y.i)(e, t, a))
					});
					const r = n.getState(),
						{
							currentPage: o
						} = r.platform;
					if (o) {
						const e = [];
						Object(Cs.j)(r) && e.push(jt.d), e.length > 0 && n.dispatch(Object(p.c)(Object(y.a)(o.url, e)))
					}
					return js.a.initialize(), {
						localStorageData: Object(ut.o)()
					}
				},
				postRender: e => {
					let {
						browserHistory: t,
						routes: c,
						serverDocumentLength: d,
						store: l,
						localStorageData: u
					} = e;
					Hn = l;
					t.listen((e, t) => {
						const s = l.getState(),
							{
								urlParams: n,
								queryParams: a
							} = s.platform.currentPage,
							r = {
								action: t,
								location: e,
								urlParams: n,
								queryParams: a
							},
							o = n.subredditName,
							i = Object(Os.G)(s, o) || "";
						Ns(i), Ln.a.publish(Pt.c, r, document)
					});
					const m = l.getState(),
						p = (m.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						b = Object(Os.G)(m, p) || "",
						h = (m.subreddits.about[b] || {}).advertiserCategory;
					o.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: i.a.gtmContainerId,
						payload: {
							user: m.user.account ? m.user.account.id : m.user.loid.loid
						}
					}), o.trigger("pageview", {
						subreddit: p,
						advertiserCategory: h
					}), l.dispatch(Object(Fn.b)({
						localStorageData: u
					})), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: o
							} = e.platform,
							i = (o.urlParams.subredditName || "").toLowerCase(),
							c = Object(Os.G)(e, i) || "";
						if (Ns(c), o && o.meta) {
							const t = o.meta.name;
							if (Object(S.b)(x.l.Redesign, {
									page: t,
									type: "rum"
								}), Object(C.c)(e.meta.userAgent) && window.innerWidth > wt.b) {
								const s = Object(r.f)(d),
									n = [],
									a = {
										isLoggedIn: Object(ce.K)(e),
										name: t,
										statsdPathsForExperiments: n
									};
								Object(r.g)(a, s)
							}
							const s = P.a.timing.domInteractive - P.a.timing.navigationStart;
							Object(ys.g)(o.routeMatch, l.getState(), N.TimerType.Initial, s);
							const i = Object(v.a)(window.location.href);
							Object(j.a)(i.get(jt.u)) && l.dispatch(Object(D.e)({
								kind: H.b.SuccessCommunity,
								text: a.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), i.get(jt.v) && (l.dispatch((e => async (t, s, a) => {
								let {
									apiContext: r
								} = a;
								switch (e) {
									case n.Success:
										t(Object(D.e)({
											kind: H.b.SuccessCommunity,
											text: Object(B.c)("Email verification complete")
										}));
										break;
									case n.AlreadyVerified:
										t(Object(D.e)({
											kind: H.b.SuccessCommunity,
											text: Object(B.c)("Your email address has already been verified.")
										}));
										break;
									case n.WrongUser:
										return void t(Object(D.e)({
											kind: H.b.Error,
											text: Object(B.c)("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.")
										}));
									default:
										t(Object(D.e)({
											kind: H.b.Error,
											text: Object(B.c)("Something went wrong.")
										}))
								}
							})(i.get(jt.v))), history.replaceState(history.state, "", Object(y.a)(window.location.href, [jt.v])));
							let c = !1;
							if ((Object(fs.b)(Et.a.JustLoggedIn) || i && i.get(jt.n) && Object(j.a)(i.get(jt.n))) && (l.dispatch(Object(D.e)({
									text: a.fbt._("Successfully logged in!", null, {
										hk: "2POUVB"
									})
								})), c = !0, Object(fs.c)(Et.a.JustLoggedIn), history.replaceState(history.state, "", Object(y.a)(window.location.href, [jt.n]))), Object(fs.b)(Et.a.JustLoggedOut) && (c = !0, Object(fs.c)(Et.a.JustLoggedOut)), Object(Z.b)(e), !1 !== ut.z() && Object(z.a)().then(e => e.requestNotificationsPermissions).then(e => l.dispatch(e(c, !1))), Object(xt.w)(e)) {
								Object(Mn.c)(e) && Object(ws.c)() && Object(Cs.h)(e) && l.dispatch(Object(Q.b)(Rn.a.HomeVisited)), l.dispatch(Object(W.f)());
								const {
									activePostId: t
								} = e.shortcuts, s = o.meta.name === x.yb.COMMENTS, n = o.meta.name === x.yb.DUPLICATES;
								(s || n) && t && l.dispatch(Object(q.b)(t))
							}
							if (t === x.yb.MULTIREDDIT && o.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = o.routeMatch.match.params;
								l.dispatch(Object(G.h)({
									multiredditName: e,
									username: t
								}))
							}
							l.dispatch(Object(L.c)())
						}
						Object(ce.K)(l.getState()) && (l.dispatch(Object(T.d)()), l.dispatch(Object(_.b)()).then(() => l.dispatch(Object(k.a)()))), Object(g.requestIdleCallback)(async () => {
							l.dispatch(Object(K.d)()), await Object(f.a)() && (e => Object(S.a)(Object.assign({}, In.defaults(e), {
								screen: In.screen(e),
								source: "global",
								action: "view",
								noun: "empty"
							})))(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = Tn(e);
								t && (await (async e => {
									return (await Object(oe.a)(() => s.e("UserZoomIntegration").then(s.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), n && n())
							}, n = t.listen((t, s) => {
								"POP" !== s && e()
							});
							e()
						})
					}), window.history.scrollRestoration = "manual", Ln.a.attachStore(l)
				},
				raven: {
					tags: {
						project: x.l.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, s) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/structuredStyles.ts"),
				u = s("./src/reddit/layout/page/Listing/Content.m.less"),
				m = s.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var b = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const h = Object(d.t)(),
				g = Object(o.c)({
					isEditing: l.j,
					layout: (e, t) => t.forcedLayout || Object(d.M)(e, t)
				}),
				f = Object(r.b)(g),
				x = e => {
					var {
						disableFullscreen: t,
						dispatch: s,
						fitPageToContent: n,
						forcedLayout: r,
						isCollectionLayout: o,
						isEditing: i,
						layout: c,
						pageLayer: d
					} = e, l = b(e, ["disableFullscreen", "dispatch", "fitPageToContent", "forcedLayout", "isCollectionLayout", "isEditing", "layout", "pageLayer"]);
					return a.a.createElement("div", l)
				};
			t.a = h(f(e => {
				var {
					className: t
				} = e, s = b(e, ["className"]);
				return a.a.createElement(x, p({
					className: Object(i.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: s.layout === c.g.Large,
						[m.a.mDisableFullScreen]: s.disableFullscreen && !s.isCollectionLayout,
						[m.a.mClassicWidth]: s.isCollectionLayout,
						[m.a.mIsEditing]: !!s.isEditing,
						[m.a.mCanFlexFullWidth]: !s.fitPageToContent
					})
				}, s))
			}))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, s) {
			e.exports = {
				Body: "_1vyLCp-v-tE5QvZovwrASa",
				body: "_1vyLCp-v-tE5QvZovwrASa",
				Sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh",
				backgroundContainer: "_33erTQ46yfKeF2B6B-ooMJ"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/layout/page/Listing/Content.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/constants/componentSizes.ts"),
				l = s("./src/reddit/constants/elementClassNames.ts"),
				u = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class h extends a.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return a.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var g = Object(b.a)(h),
				f = e => a.a.createElement(g, e),
				x = s("./src/reddit/layout/page/Listing/index.m.less"),
				v = s.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const O = Object(i.a)(e => {
					const {
						backgroundColor: t,
						className: s,
						redditStyle: n,
						theme: r
					} = e, i = C(e, ["backgroundColor", "className", "redditStyle", "theme"]), c = Object(p.a)(e), d = {
						"--pseudo-before-background": t || Object(m.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return a.a.createElement("div", y({
						className: Object(o.a)(v.a.backgroundContainer, s),
						style: d
					}, i))
				}),
				E = c.a.div("Body", v.a),
				P = c.a.div("Sidebar", v.a);
			t.a = e => {
				const t = e.trendingUnit ? "28px" : "0",
					s = e.isPageSwapped ? {
						marginRight: "".concat(d.r, "px"),
						marginTop: t
					} : {
						marginLeft: "".concat(d.r, "px"),
						marginTop: t
					},
					n = e.sidebar && a.a.createElement(P, {
						className: e.isCollectionLayout ? v.a["m-collectionLayout"] : void 0,
						style: s
					}, e.sidebar),
					i = a.a.createElement(r.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? a.a.createElement(a.a.Fragment, null, e.sidebars[0], i, e.sidebars[1]) : e.isPageSwapped ? a.a.createElement(a.a.Fragment, null, n, i) : a.a.createElement(a.a.Fragment, null, i, n);
				const m = e.disableFullscreen ? "".concat(e.maxWidth || u.a + 2 * d.n, "px") : "100%",
					p = e.layerEmbed ? e.layerEmbed : null;
				return a.a.createElement(f, {
					subredditId: e.subredditId
				}, a.a.createElement("div", {
					className: Object(o.a)(v.a.outerContainer, l.j, e.className),
					ref: e.containerRef
				}, a.a.createElement(O, {
					className: l.i,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), a.a.createElement("div", {
					className: v.a.innerContainer
				}, a.a.createElement("div", {
					className: v.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, (e => e.hero ? a.a.createElement(a.a.Fragment, null, e.hero) : null)(e), a.a.createElement("div", {
					style: {
						maxWidth: m
					}
				}, e.trendingUnit), p, a.a.createElement(E, {
					style: {
						maxWidth: m
					}
				}, c))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, s) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/layout/row/Inline/index.m.less"),
				r = s.n(a);
			t.a = n.a.div("inlineRow", r.a)
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, s) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/layout/row/InlineButton/index.m.less"),
				r = s.n(a);
			t.a = n.a.button("inlineButton", r.a)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = s.n(i);
			t.a = Object(r.a)(e => a.a.createElement("div", {
				className: Object(o.a)(c.a.exapndLeftContainer, e.className)
			}, a.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), a.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var n, a, r;
			s.d(t, "c", (function() {
					return n
				})), s.d(t, "b", (function() {
					return a
				})), s.d(t, "a", (function() {
					return r
				})), s.d(t, "d", (function() {
					return o
				})), s.d(t, "e", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(a || (a = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(r || (r = {}));
			const o = () => ({
					cardCVCComplete: !1,
					cardExpiryComplete: !1,
					cardNumberComplete: !1,
					name: "",
					postalCodeComplete: !1,
					saveCard: !1,
					type: a.NewStripe
				}),
				i = e => e.cardCVCComplete && e.cardExpiryComplete && e.cardNumberComplete && !!e.name && e.postalCodeComplete
		},
		"./src/reddit/pages/InternalServerError/index.m.less": function(e, t, s) {
			e.exports = {
				dizzySnoo: "UaNg246yNIpwcq_Uhe6vC",
				container: "EXdERxzjUGqvBK511L1Eq",
				mainContent: "_3dyrEHC8cc6dIOTUPQmv1S",
				title: "_1PdcLVyQbMPVKRikIspqb_",
				subTitle: "_1YhiRkum1oGZUdm5i1mHFJ",
				image: "_1gTZDLeeF0VPQsS6Iz5boy",
				imageContainer: "_2wX-WzezrtDmDaxm8BR4zz",
				topImageContainer: "_3zW_PbmBAhs9ARwV_Yl9BR",
				bottomImageContainer: "_3sveU8lpcXyGOpDXsXc9xg"
			}
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = ["/appeal", "/appeals"],
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Appeal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Appeal").then(s.bind(null, "./src/reddit/pages/AppealPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/AppealPage/index.tsx"
					}
				}),
				c = {
					action: r.o,
					chunk: a.o.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.APPEAL
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/coins",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Coins",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Coins").then(s.bind(null, "./src/reddit/pages/CoinsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsPage/index.tsx"
					}
				}),
				c = {
					action: r.q,
					chunk: a.o.COINS,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.COINS
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/coins/mobile",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "CoinsMobile",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CoinsMobile").then(s.bind(null, "./src/reddit/pages/CoinsMobilePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsMobilePage/index.tsx"
					}
				}),
				c = {
					action: r.p,
					chunk: a.o.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.COINS_MOBILE
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/collectionCommentsPage.ts"),
				o = s("./src/reddit/featureFlags/profileCollections.ts");
			const i = Object(n.a)({
					resolved: {},
					chunkName: () => "CollectionCommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2"), s.e("CollectionCommentsPage")]).then(s.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CollectionCommentsPage/index.tsx"
					}
				}),
				c = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"],
				d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				l = {
					action: r.e,
					chunk: a.o.COLLECTION_COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.COLLECTION_COMMENTS
					},
					prefetches: [a.o.FRONTPAGE, a.o.COMMENTS_PAGE, a.o.SUBREDDIT]
				},
				u = Object.assign({}, l, {
					path: c
				}),
				m = Object.assign({}, l, {
					path: d,
					routePredicate: o.a
				}),
				p = [u, m];
			t.a = p
		},
		"./src/reddit/routes/commentsPage/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "CommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2"), s.e("CommentsPage")]).then(s.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CommentsPage/index.tsx"
					}
				}),
				i = ["/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle?", "/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/comments/:partialPostId/:urlSafePostTitle?"],
				c = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				d = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				l = (e, t) => ({
					action: r.u,
					chunk: a.o.COMMENTS_PAGE,
					component: o,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [a.o.FRONTPAGE, a.o.SUBREDDIT]
				}),
				u = [l(a.yb.COMMENTS, i), l(a.yb.DUPLICATES, c), l(a.yb.COMMENTS, d)];
			t.a = u
		},
		"./src/reddit/routes/explore/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/explore.ts");
			const o = ["/explore", "/explore/:categoryName"],
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Explore",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("Explore~ProfileSnoobuilder~SubredditWiki"), s.e("Explore~InFeedChaining"), s.e("Explore")]).then(s.bind(null, "./src/reddit/pages/Explore/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Explore/index.tsx"
					}
				}),
				c = {
					action: r.e,
					chunk: a.o.EXPLORE,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.EXPLORE
					},
					path: o,
					prefetches: [a.o.COMMENTS_PAGE, a.o.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/framedGild/:thingId",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "FramedGild",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("FramedGild~GildModal"), s.e("FramedGild")]).then(s.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedGildPage/index.tsx"
					}
				}),
				c = {
					action: r.v,
					chunk: a.o.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.FRAMED_GILD
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/framedModal/:type",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "FramedModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("FramedModal")]).then(s.bind(null, "./src/reddit/pages/FramedModalPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedModalPage/index.tsx"
					}
				}),
				c = {
					action: r.w,
					chunk: a.o.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.FRAMED_MODAL
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/page.ts");
			const c = Object.keys(o.N).map(e => o.N[e]).join("|"),
				d = "/",
				l = "/:sort(".concat(c, ")?"),
				u = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2"), s.e("Frontpage")]).then(s.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Frontpage/index.tsx"
					}
				}),
				m = {
					action: i.z,
					chunk: o.o.FRONTPAGE,
					component: u,
					exact: !0,
					prefetches: [o.o.COMMENTS_PAGE, o.o.SUBREDDIT]
				},
				p = Object.assign({}, m, {
					path: d,
					meta: {
						name: o.yb.INDEX
					}
				}),
				b = Object.assign({}, m, {
					path: l,
					meta: {
						name: o.yb.LISTING
					}
				}),
				h = [p, b];
			t.a = h
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/page.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "InboxPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("InboxPages").then(s.bind(null, "./src/reddit/pages/RedditEmbed/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/RedditEmbed/index.tsx"
					}
				}),
				d = Object.keys(o.K).map(e => o.K[e]).join("|"),
				l = "/message/:pageName(".concat(d, ")/:rest(.+)?"),
				u = {
					action: i.B,
					chunk: o.o.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: o.yb.INBOX_PAGES
					},
					path: l
				};
			t.a = u
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts");
			const o = ["/web/special-membership/:subredditName", "/web/membership/:subredditName"],
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "MembershipPaywallPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("GovernanceTransferPointsModal~MembershipPaywallPage"), s.e("MembershipPaywallPage")]).then(s.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: a.o.META_MEMBERSHIP_PAYWALL_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts");
			const i = Object(r.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2"), s.e("ModQueuePages")]).then(s.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ModQueuePages/index.tsx"
					}
				}),
				c = Object.keys(o.fb).map(e => o.fb[e]).join("|"),
				d = "/r/mod/about/:pageName(".concat(c, ")?"),
				l = {
					action: e => async (t, n, a) => {
						const r = await s.e("ModQueue").then(s.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested);
						await r(e)(t, n, a)
					},
					chunk: o.o.MODQUEUE_PAGES,
					component: i,
					exact: !0,
					meta: {
						name: o.yb.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = l
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			}));
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./src/lib/constants/index.ts");
			const c = Object.keys(i.Nb).map(e => i.Nb[e]).join("|"),
				d = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~ModerationPages~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ModHub/index.tsx"
					}
				}),
				l = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"],
				u = ["/r/:subredditName/about", "/r/:subredditName/about/:pageName(".concat(c, ")"), ...l],
				m = e => !!Object(o.h)(e, {
					path: "/r/:subredditName/about"
				}),
				p = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~ModerationPages~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested);
						await r(e)(t, n, a)
					},
					chunk: i.o.MODERATION_PAGES,
					component: d,
					exact: !0,
					meta: {
						name: i.yb.MODERATION_PAGES
					},
					path: u,
					prefetches: [i.o.SUBREDDIT]
				};
			t.a = p
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/page.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2"), s.e("Multireddit")]).then(s.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Multireddit/index.tsx"
					}
				}),
				d = "/me/m/:multiredditName",
				l = Object.keys(o.N).map(e => "".concat(d, "/:sort(").concat(o.N[e], ")?")),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(o.N).map(e => "".concat(u, "/:sort(").concat(o.N[e], ")?")),
				p = [d, u, ...l, ...m],
				b = {
					action: i.D,
					chunk: o.o.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.yb.MULTIREDDIT
					},
					path: p,
					prefetches: [o.o.SUBREDDIT]
				};
			t.a = b
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/postDraft.ts");
			const o = "/user/:profileName/draft/:draftId",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "PostDraft",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("PostDraft")]).then(s.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/PostDraft/index.tsx"
					}
				}),
				c = {
					action: r.b,
					chunk: a.o.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.POST_DRAFT
					},
					path: o,
					prefetches: [a.o.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/premium/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/premium",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Premium",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Premium").then(s.bind(null, "./src/reddit/pages/Premium/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Premium/index.tsx"
					}
				}),
				c = {
					action: r.F,
					chunk: a.o.PREMIUM,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.PREMIUM
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/profileComments.ts");
			const o = "/user/:profileName/comments",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2"), s.e("ProfileComments")]).then(s.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileComments/index.tsx"
					}
				}),
				c = {
					action: r.h,
					chunk: a.o.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.PROFILE_COMMENTS
					},
					path: o,
					prefetches: [a.o.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/profileModSettings.ts");
			const o = "/user/:profileName/about/edit/moderation",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfileModeration",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ProfileModeration~Settings~SubredditCreation"), s.e("ProfileModeration")]).then(s.bind(null, "./src/reddit/pages/ProfileModSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileModSettings/index.tsx"
					}
				}),
				c = {
					action: r.b,
					chunk: a.o.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.PROFILE_MODERATION
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/profileOverview.ts");
			const o = "/user/:profileName",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2"), s.e("ProfileOverview")]).then(s.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileOverview/index.tsx"
					}
				}),
				c = {
					action: r.g,
					chunk: a.o.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.PROFILE_OVERVIEW
					},
					path: o,
					prefetches: [a.o.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/profilePosts.ts");
			const o = "/user/:profileName/posts",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2"), s.e("ProfilePosts")]).then(s.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePosts/index.tsx"
					}
				}),
				c = {
					action: r.h,
					chunk: a.o.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.PROFILE_POSTS
					},
					path: o,
					prefetches: [a.o.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/models/Profile/index.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePrivate/index.tsx"
					}
				}),
				d = Object.keys(i.a).map(e => i.a[e]).join("|"),
				l = ["/user/:profileName/:listingType(".concat(d, ")"), "/user/:profileName/gilded/:listingType(".concat(i.a.GivenGildings, ")")],
				u = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested);
						await r(e)(t, n, a)
					},
					chunk: o.o.PROFILE_PRIVATE,
					component: c,
					exact: !0,
					meta: {
						name: o.yb.PROFILE_PRIVATE
					},
					path: l,
					prefetches: [o.o.COMMENTS_PAGE]
				};
			t.a = u
		},
		"./src/reddit/routes/profileSnoobuilder/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/featureFlags/index.ts");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfileSnoobuilder",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Explore~ProfileSnoobuilder~SubredditWiki"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileSnoobuilder/index.tsx"
					}
				}),
				i = "/user/:profileName/snoo",
				c = {
					path: i,
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("Explore~ProfileSnoobuilder~SubredditWiki"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested);
						await r(e)(t, n, a)
					},
					chunk: a.o.PROFILE_SNOOBUILDER,
					component: o,
					exact: !0,
					meta: {
						name: a.yb.PROFILE_SNOOBUILDER
					},
					routePredicate: r.d.snoovatar30
				};
			t.a = c
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "PublicAccessNetwork",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~PublicAccessNetwork"), s.e("PublicAccessNetwork")]).then(s.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/PublicAccessNetwork/index.tsx"
					}
				}),
				i = {
					action: r.G,
					chunk: a.o.PUBLIC_ACCESS_NETWORK,
					component: o,
					exact: !0,
					meta: {
						name: a.yb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subreddit/:streamId?", "/rpan/:streamId?"],
					prefetches: [a.o.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/report/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts");
			const r = "/report/:rest(.+)?",
				o = Object(n.a)({
					resolved: {},
					chunkName: () => "ReportPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportPage")]).then(s.bind(null, "./src/reddit/pages/ReportPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ReportPage/index.tsx"
					}
				}),
				i = {
					action: e => async (t, n, a) => {
						const r = await s.e("Report").then(s.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested);
						await r(e)(t, n, a)
					},
					chunk: a.o.REPORT_PAGE,
					component: o,
					exact: !0,
					meta: {
						name: a.yb.REPORT
					},
					path: r
				};
			t.a = i
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/search.ts");
			const o = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2"), s.e("SearchResults")]).then(s.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SearchResults/index.tsx"
					}
				}),
				c = {
					action: r.e,
					chunk: a.o.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.SEARCH_RESULTS
					},
					path: o,
					prefetches: [a.o.FRONTPAGE, a.o.SUBREDDIT, a.o.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/page.ts"),
				c = s("./src/reddit/actions/pages/settings.ts");
			const d = Object.keys(o.Lb).map(e => o.Lb[e]).join("|"),
				l = [{
					action: c.a,
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("ProfileModeration~Settings~SubredditCreation"), s.e("Settings")]).then(s.bind(null, "./src/reddit/pages/Settings/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return s(t)
						},
						resolve() {
							return "./src/reddit/pages/Settings/index.tsx"
						}
					}),
					chunk: o.o.SETTINGS,
					exact: !0,
					meta: {
						name: o.yb.SETTINGS
					},
					path: "/settings/:page(".concat(d, ")?")
				}, {
					action: i.J,
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "UserDataRequestPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => s.e("UserDataRequestPage").then(s.bind(null, "./src/reddit/pages/UserDataRequestPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return s(t)
						},
						resolve() {
							return "./src/reddit/pages/UserDataRequestPage/index.tsx"
						}
					}),
					chunk: o.o.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: o.yb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = l
		},
		"./src/reddit/routes/subreddit/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/pages/subreddit.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "Subreddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"), s.e("Subreddit")]).then(s.bind(null, "./src/reddit/pages/Subreddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Subreddit/index.tsx"
					}
				}),
				d = Object.keys(o.N).map(e => "/r/:subredditName/:sort(".concat(o.N[e], ")?")),
				l = ["/r/:subredditName", ...d],
				u = {
					action: i.k,
					chunk: o.o.SUBREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.yb.SUBREDDIT
					},
					path: l,
					prefetches: [o.o.COMMENTS_PAGE, o.o.FRONTPAGE]
				};
			t.a = u
		},
		"./src/reddit/routes/subredditCreation/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/subredditCreation.ts");
			const o = "/subreddits/create",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ProfileModeration~Settings~SubredditCreation"), s.e("SubredditCreation")]).then(s.bind(null, "./src/reddit/pages/SubredditCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditCreation/index.tsx"
					}
				}),
				c = {
					action: r.a,
					component: i,
					chunk: a.o.SUBREDDIT_CREATION,
					exact: !0,
					meta: {
						name: a.yb.SUBREDDIT_CREATION
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/subredditLeaderboard/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/subredditLeaderboard.ts");
			const o = ["/subreddits/leaderboard", "/subreddits/leaderboard/:categoryName/"],
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditLeaderboard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("SubredditLeaderboard").then(s.bind(null, "./src/reddit/pages/SubredditLeaderboard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditLeaderboard/index.tsx"
					}
				}),
				c = {
					action: r.c,
					chunk: a.o.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.SUBREDDIT_LEADERBOARD
					},
					path: o,
					prefetches: [a.o.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const i = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditWiki",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ModerationPages~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("Explore~ProfileSnoobuilder~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditWiki/index.tsx"
					}
				}),
				c = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+", "/wiki/:wikiPageName+"],
				d = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				l = e => async t => {
					await t(Object(a.c)(Object(o.a)(e.url, e.params)))
				}, u = {
					action: l,
					chunk: r.o.EMPTY,
					exact: !0,
					meta: {
						name: r.yb.SUBREDDIT_WIKI
					},
					path: d
				}, m = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~ModerationPages~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("Explore~ProfileSnoobuilder~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested);
						await r(e)(t, n, a)
					},
					chunk: r.o.SUBREDDIT_WIKI,
					component: i,
					exact: !0,
					meta: {
						name: r.yb.SUBREDDIT_WIKI
					},
					path: c,
					prefetches: [r.o.SUBREDDIT]
				};
			t.a = [u, m]
		},
		"./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/url/url.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/wiki.ts"),
				o = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				i = s("./src/reddit/routes/moderationPages/index.ts");
			t.a = (e, t) => {
				const s = t.wikiSubRoute === r.l.Settings,
					n = Object(o.a)(t, Object(i.b)(e) || s),
					c = a.a.parse(e);
				return (c.pathname || "").replace(/\/$/, "") !== n ? (c.pathname = n, a.a.format(c)) : e
			}
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/topic.ts");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "Topic",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~1052242b"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~2dc56ce2"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2"), s.e("Topic")]).then(s.bind(null, "./src/reddit/pages/Topic/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Topic/index.tsx"
					}
				}),
				i = ["/t/:topicSlug"],
				c = {
					path: i,
					action: r.h,
					chunk: a.o.TOPIC,
					component: o,
					exact: !0,
					meta: {
						name: a.yb.TOPIC
					},
					prefetches: [a.o.COMMENTS_PAGE, a.o.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			}));
			const n = (e, t) => {
					let {
						post: s
					} = t;
					const n = s.belongsTo.id;
					if (!n) return null;
					const a = e.authorFlair.models[n];
					if (!a) return null;
					const r = s.author;
					return r && a[r] || null
				},
				a = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!n) return null;
					if (!s) return null;
					const a = e.authorFlair.models[s];
					return a ? a[n] : null
				},
				r = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return b
			})), s.d(t, "q", (function() {
				return h
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "A", (function() {
				return y
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "m", (function() {
				return O
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "k", (function() {
				return j
			})), s.d(t, "o", (function() {
				return w
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "p", (function() {
				return S
			})), s.d(t, "r", (function() {
				return k
			})), s.d(t, "s", (function() {
				return _
			})), s.d(t, "t", (function() {
				return T
			})), s.d(t, "z", (function() {
				return L
			})), s.d(t, "v", (function() {
				return F
			})), s.d(t, "w", (function() {
				return R
			})), s.d(t, "b", (function() {
				return A
			})), s.d(t, "y", (function() {
				return D
			})), s.d(t, "n", (function() {
				return B
			})), s.d(t, "c", (function() {
				return H
			})), s.d(t, "x", (function() {
				return U
			})), s.d(t, "u", (function() {
				return V
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/reddit/featureFlags/index.ts"),
				a = s("./src/reddit/helpers/economics/sortBadges.ts"),
				r = s("./src/reddit/helpers/richTextJson/index.ts"),
				o = s("./src/reddit/models/Badge/index.ts"),
				i = s("./src/reddit/models/Badge/managementPage.ts"),
				c = s("./src/reddit/models/Payments/index.ts"),
				d = s("./src/reddit/models/Product/index.ts"),
				l = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = s("./src/reddit/selectors/comments.ts"),
				p = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const b = (e, t) => {
					const s = e.user.account,
						n = e.economics.subredditPremium[t];
					if (s && n && n.status === u.a.Fetched) {
						const n = ((e.users.appliedBadges[s.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[i.a.Loyalty]: n.find(e => e.placement === o.a.First),
							[i.a.Achievement]: n.find(e => e.placement === o.a.Second),
							[i.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				},
				h = (e, t, s) => {
					if (!n.d.spBadges(e) && !n.d.spPremium(e)) return [];
					const r = (e.users.appliedBadges[s] || {})[t] || [];
					return Object(a.a)(r.map(t => e.badges.models[t]).filter(Boolean))
				},
				g = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === u.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				},
				f = (e, t) => {
					const s = T(e, t);
					return !!s && !!s.creator
				},
				x = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = e.subreddits.gov.communityJar[s];
					return n ? n.usdr : void 0
				},
				v = (e, t) => {
					const s = e.economics.tipDetails[t.subredditId];
					if (s) {
						const e = s[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.amount) return e.amounts.usdr.amount
					}
					return "0"
				};

			function y(e, t) {
				const s = e.economics.specialMemberships.data[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function C(e, t) {
				const {
					badge: s,
					subredditId: n
				} = t, a = e.user.account ? e.user.account.id : void 0;
				if (Object(o.c)(s) && s.userId === a) return s;
				const r = e.badges.models,
					i = e.user.ownedBadges[n] || {},
					c = Object(o.c)(s) ? s.type : s.id;
				return Object.keys(i).map(e => r[e]).find(e => e && e.type === c)
			}

			function O(e, t, s, n) {
				const a = e.economics.subredditPremium[t];
				if (a && a.status === u.a.Fetched) {
					if (s === i.a.Loyalty || s === i.a.Achievement) return a.data.collections[s];
					if (s === i.a.Cosmetic && n) return a.data.collections[s][n]
				}
				return []
			}

			function E(e, t) {
				const s = O(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function P(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === u.a.Fetched) {
					const e = s.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.d)
				}
				return []
			}

			function j(e, t) {
				return O(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(o.d)(e) || !!e.price))
			}
			const w = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === l.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const n = e[s];
						t.push({
							display: "".concat(n.brand, " •••• ").concat(n.last4),
							id: s,
							type: c.b.SavedStripe
						})
					}
				}
				if (s.status === l.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const n = e[s];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: c.b.SavedPayPal
						})
					}
				}
				return t
			};
			var M;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(M || (M = {}));
			const S = e => e.economics.paymentSystems.status === l.a.NotFetched ? M.NotFetched : e.economics.paymentSystems.status === l.a.Pending ? M.Fetching : M.Fetched,
				N = {
					allowTrial: !0,
					price: "0",
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				I = {
					t5_vsb5g: "5000000000000000000000",
					t5_37jgj: "5000000000000000000000"
				},
				k = (e, t) => {
					const s = e.economics.specialMemberships.data[t || ""],
						a = e.subreddits.gov.meta[t || ""],
						r = s && s.active && s.active.membership,
						o = a && a.extra && a.extra.nomenclature || N;
					let i = N.price;
					if (r) i = r.price;
					else {
						const s = Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t)[0];
						s && s.price && (i = s.price)
					}
					return i = I[t || ""] || i, {
						allowTrial: n.d.spFreeTrialSubscriptions(e),
						price: i,
						member: o.member || N.member,
						memberPlural: o.memberPlural || N.memberPlural,
						memberAlt: o.memberAlt || N.memberAlt,
						memberAltPlural: o.memberAltPlural || N.memberAltPlural,
						membership: o.membership || N.membership,
						membershipAlt: o.membershipAlt || N.membershipAlt
					}
				},
				_ = (e, t) => {
					const s = e.economics.tipDetails[t.subredditId];
					if (s) {
						const e = s[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.users) {
							const t = e.amounts.usdr.users,
								{
									anonymous: s
								} = t,
								n = p(t, ["anonymous"]),
								a = Object.keys(n),
								r = a.map(e => Object.assign({
									id: e
								}, n[e])).sort((e, t) => parseInt(t.amount) - parseInt(e.amount)),
								o = s ? parseInt(s.amount) : 0,
								i = s ? s.numUsers : 0,
								c = r.slice(5),
								d = r.slice(0, 5);
							return {
								allTippers: new Set(a),
								topTippers: {
									list: d,
									others: {
										amount: String(c.reduce((e, t) => e + parseInt(t.amount), o)),
										count: c.length + i
									},
									ranking: d.reduce((e, t, s) => (e[t.id] = s + 1, e), {})
								}
							}
						}
					}
				},
				T = (e, t) => {
					const s = e.economics.tipDetails[t.subredditId];
					if (s) {
						const e = s[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.tipsProportions) return e.amounts.usdr.tipsProportions
					}
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				F = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				R = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				};
			var A;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(A || (A = {}));
			const D = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === u.a.Fetched) {
						const s = B(e, t),
							n = Date.now();
						return s && n < s ? A.Subscribed : A.NotSubscribed
					}
					return A.DontKnow
				},
				B = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === u.a.Fetched) {
						const e = s.data.subscription;
						return e && e.active && e.active.membership.endsAt || null
					}
					return null
				},
				H = (e, t) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				U = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				V = (e, t, s) => {
					const a = n.d.spGiphy(e),
						o = U(e, t),
						i = "replyToPost" !== s && Object(m.n)(e, {
							commentId: s
						}),
						c = !!i && Object(r.a)(i);
					return a && (o || c)
				}
		},
		"./src/reddit/selectors/experiments/badging.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/utils.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const c = Object(n.a)(e => Object(r.c)(e, {
					experimentName: a.r,
					experimentEligibilitySelector: i.J
				}), o.a),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentName: a.s,
					experimentEligibilitySelector: e => !Object(i.J)(e)
				}), o.a),
				l = Object(n.a)(c, d, (e, t) => e || t),
				u = e => e === a.y.BadgeCounterBottom || e === a.y.BadgeOnlyBottom || e === a.z.BadgeOnlyBottom,
				m = e => e === a.y.BadgeCounterTop || e === a.z.BadgeOnlyTop,
				p = e => {
					const t = c(e);
					return t === a.y.BadgeCounterBottom || t === a.y.BadgeCounterTop
				}
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => {
				return Object(r.H)(e) || n.i.Treatment1 === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.c
				})
			}
		},
		"./src/reddit/selectors/experiments/generalCleanup.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/utils.ts");
			const i = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !e.user.temporaryGQL.isLoggedIn,
					experimentName: a.C
				}), o.a),
				c = e => e === a.U.TopBanner || e === a.U.All,
				d = e => e === a.U.SortView || e === a.U.All
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => Object(r.H)(e) || !(n.Sb.Holdout === Object(a.c)(e, {
				experimentEligibilitySelector: a.a,
				experimentName: n.Pb
			}))
		},
		"./src/reddit/selectors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/lodash/isEqual.js"),
				a = s.n(n),
				r = s("./node_modules/reselect/es/index.js");
			const o = Object(r.b)(r.d, a.a)
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			}));
			const n = e => e.user.notificationPrefs.api.getPreferences.loaded,
				a = e => e.user.notificationPrefs.api.getPreferences.pending,
				r = e => e.user.notificationPrefs.api.setPreferences.pending,
				o = e => e.user.notificationPrefs.preferences,
				i = e => e.user.notificationPrefs.isNotificationPromptVisible
		},
		"./src/reddit/selectors/products.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/Product/index.ts");
			const a = (e, t) => {
					const s = e.products.models[t];
					if (s && s.type === n.a.Badge) return s
				},
				r = (e, t) => {
					let {
						productId: s
					} = t;
					const n = e.products.models[s];
					if (n) {
						const t = n.subredditId,
							a = Object.keys(e.user.ownedBadges[t] || {}),
							r = e.badges.models,
							o = Date.now();
						let i = !1;
						return a.forEach(e => {
							const t = r[e];
							t && t.type === s && t.endsAt > o && (i = !0)
						}), i
					}
					return !1
				}
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = (e, t) => {
					let {
						subredditId: s
					} = t;
					if (e.removalReasons.reasonOrder[s]) {
						return e.removalReasons.reasonOrder[s].map(t => e.removalReasons.models[t])
					}
					return []
				},
				a = e => e.removalReasons.removedItemIds && e.removalReasons.removedItemIds.itemIds.length ? e.removalReasons.removedItemIds : null,
				r = e => e.removalReasons.api.pending
		},
		"./src/reddit/selectors/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.trending.models
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/selectors/monthsToMinutes.ts");
			const r = e => !o(e) && !Object(a.w)(e) && !!e.user.prefs.subscriptionsPinned,
				o = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.yb.MODERATION_PAGES)
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./src/lib/fastdom/index.ts"),
				r = s("./src/reddit/actions/jsApi.ts");
			const o = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				i = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = s("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll('meta[name="'.concat(i, '"]'));
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(r.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === i && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(o, "".concat(n.a.redditUrl).concat(c), e))
					} catch (s) {
						return void console.error(o, "".concat(n.a.redditUrl).concat(c), s)
					}
					this.store.then(e => {
						e.dispatch(r.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, s) {
					const n = {
						name: e,
						props: t,
						element: s
					};
					this.queue.push(n), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(n)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					a.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a", "vendors~Chat~Governance~Reddit", "vendors~Governance~Reddit", "vendors~Reddit", "Chat~Governance~Reddit", "Governance~Reddit"]
	]
]);
//# sourceMappingURL=Reddit.03582410a614ac884abf.js.map