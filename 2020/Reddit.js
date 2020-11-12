// https://www.redditstatic.com/desktop2x/Reddit.c3a2ce7af2040c8b187b.js
// Retrieved at 11/12/2020, 12:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, n) {},
		"./assets/fonts/VCR/font.less": function(e, t, n) {},
		"./node_modules/@r/google-tag-manager/compiled.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.setup = t.trigger = t.getLocation = void 0;
			var s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				},
				r = n("./node_modules/@r/google-tag-manager/node_modules/uuid/index.js"),
				o = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return t.default = e, t
				}(n("./node_modules/@r/frames/compiled.js"));
			var a = "gtm-" + (0, r.v4)(),
				i = !1,
				c = [],
				d = function() {
					var e = document.getElementById(a);
					return e && e.contentWindow ? e : null
				},
				l = t.getLocation = function() {
					return {
						href: location.href,
						hostname: location.hostname,
						origin: location.origin,
						pathname: location.pathname || "/",
						search: location.search.replace(/^\?/, ""),
						hash: location.hash.replace(/^#/, "")
					}
				},
				u = t.trigger = function(e, t) {
					var n = d();
					n && i ? (t && o.postMessage(n.contentWindow, "data.gtm", t), o.postMessage(n.contentWindow, "event.gtm", {
						event: e
					})) : function(e, t) {
						c.push({
							eventName: e,
							payload: t
						})
					}(e, t)
				},
				m = function() {
					if (d() && i) {
						var e = c.slice();
						c = [], e.forEach((function(e) {
							var t = e.eventName,
								n = e.payload;
							return u(t, n)
						}))
					}
				};
			t.setup = function(e) {
				var t = e.containerId,
					n = e.jailUrl,
					r = e.payload;
				if (t)
					if (n) {
						o.listen("gtm"), o.receiveMessageOnce("loaded.gtm", (function() {
							i = !0, o.stopListening("gtm")
						}));
						var c = document.createElement("iframe");
						c.style.display = "none", c.id = a, c.name = JSON.stringify(s({
							referrer: document.referrer
						}, l(), r)), c.src = n + "?id=" + t, c.onload = m, document.body.appendChild(c)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/index.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js"),
				r = n("./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js"),
				o = r;
			o.v1 = s, o.v4 = r, e.exports = o
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, t) {
			for (var n = [], s = 0; s < 256; ++s) n[s] = (s + 256).toString(16).substr(1);
			e.exports = function(e, t) {
				var s = t || 0,
					r = n;
				return r[e[s++]] + r[e[s++]] + r[e[s++]] + r[e[s++]] + "-" + r[e[s++]] + r[e[s++]] + "-" + r[e[s++]] + r[e[s++]] + "-" + r[e[s++]] + r[e[s++]] + "-" + r[e[s++]] + r[e[s++]] + r[e[s++]] + r[e[s++]] + r[e[s++]] + r[e[s++]]
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, t, n) {
			(function(t) {
				var n, s = t.crypto || t.msCrypto;
				if (s && s.getRandomValues) {
					var r = new Uint8Array(16);
					n = function() {
						return s.getRandomValues(r), r
					}
				}
				if (!n) {
					var o = new Array(16);
					n = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
						return o
					}
				}
				e.exports = n
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				r = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				o = s(),
				a = [1 | o[0], o[1], o[2], o[3], o[4], o[5]],
				i = 16383 & (o[6] << 8 | o[7]),
				c = 0,
				d = 0;
			e.exports = function(e, t, n) {
				var s = t && n || 0,
					o = t || [],
					l = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					m = void 0 !== e.nsecs ? e.nsecs : d + 1,
					p = u - c + (m - d) / 1e4;
				if (p < 0 && void 0 === e.clockseq && (l = l + 1 & 16383), (p < 0 || u > c) && void 0 === e.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = u, d = m, i = l;
				var b = (1e4 * (268435455 & (u += 122192928e5)) + m) % 4294967296;
				o[s++] = b >>> 24 & 255, o[s++] = b >>> 16 & 255, o[s++] = b >>> 8 & 255, o[s++] = 255 & b;
				var h = u / 4294967296 * 1e4 & 268435455;
				o[s++] = h >>> 8 & 255, o[s++] = 255 & h, o[s++] = h >>> 24 & 15 | 16, o[s++] = h >>> 16 & 255, o[s++] = l >>> 8 | 128, o[s++] = 255 & l;
				for (var g = e.node || a, f = 0; f < 6; ++f) o[s + f] = g[f];
				return t || r(o)
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				r = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, t, n) {
				var o = t && n || 0;
				"string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
				var a = (e = e || {}).random || (e.rng || s)();
				if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
					for (var i = 0; i < 16; ++i) t[o + i] = a[i];
				return t || r(a)
			}
		},
		"./node_modules/brcast/dist/brcast.es.js": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				var t = {},
					n = 1,
					s = e;
				return {
					getState: function() {
						return s
					},
					setState: function(e) {
						s = e;
						for (var n = Object.keys(t), r = 0, o = n.length; r < o; r++) t[n[r]] && t[n[r]](e)
					},
					subscribe: function(e) {
						if ("function" != typeof e) throw new Error("listener must be a function.");
						var s = n;
						return t[s] = e, n += 1, s
					},
					unsubscribe: function(e) {
						t[e] = void 0
					}
				}
			}
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, t, n) {
			"use strict";

			function s(e, t) {
				e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
			}
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./node_modules/history/esm/history.js");
			n("./node_modules/react-router-dom/node_modules/prop-types/index.js");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				if (null == e) return {};
				var n, s, r = {},
					o = Object.keys(e);
				for (s = 0; s < o.length; s++) n = o[s], t.indexOf(n) >= 0 || (r[n] = e[n]);
				return r
			}
			var l = n("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			o.a.Component;
			o.a.Component;
			var u = function(e) {
				function t() {
					return e.apply(this, arguments) || this
				}
				s(t, e);
				var n = t.prototype;
				return n.handleClick = function(e, t) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (n) {
						throw e.preventDefault(), n
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? t.replace : t.push)(this.props.to))
				}, n.render = function() {
					var e = this,
						t = this.props,
						n = t.innerRef,
						s = (t.replace, t.to),
						r = d(t, ["innerRef", "replace", "to"]);
					return o.a.createElement(a.g.Consumer, null, (function(t) {
						t || Object(l.default)(!1);
						var a = "string" == typeof s ? Object(i.c)(s, null, null, t.location) : s,
							d = a ? t.history.createHref(a) : "";
						return o.a.createElement("a", c({}, r, {
							onClick: function(n) {
								return e.handleClick(n, t.history)
							},
							href: d,
							ref: n
						}))
					}))
				}, t
			}(o.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function o() {}
			o.resetWarningCache = r, e.exports = function() {
				function e(e, t, n, r, o, a) {
					if (a !== s) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var n = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: o,
					resetWarningCache: r
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/chat/helpers/dom.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				r = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/graphql/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"26ddd553d11e"}')
		},
		"./src/graphql/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"bc611d08f6ef"}')
		},
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts");
			const r = 120 * s.ab;
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
						return !e || e <= r
					}
				})()), e
			}
		},
		"./src/lib/doubleclickForPublishers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "f", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/isFakeSubreddit/index.ts"),
				a = n("./src/lib/fastdom/index.ts");
			const i = new Map,
				c = (e, t) => {
					const n = [s.a.dfpSlotPrefix];
					return t !== r.Bb.PROFILE && (Object(o.a)(e) ? n.push("frontpage") : n.push("r.".concat(e))), t === r.Bb.INDEX ? n.push(r.Bb.LISTING) : t && n.push(t), n.join("/")
				},
				d = (e, t) => {
					e.setTargeting("keywords", t.keywords);
					for (const n in t.properties) e.setTargeting(n, t.properties[n])
				},
				l = (e, t) => {
					p(e);
					const {
						id: n,
						slot: s,
						sizes: r
					} = t, o = window.googletag = window.googletag || {};
					return o.cmd = o.cmd || [], new Promise(c => {
						o.cmd.push(() => {
							a.a.write(() => {
								const a = o.defineSlot(s, r, n);
								if (!a) return c();
								a.addService(o.pubads()), i.set(e, a), a.setCollapseEmptyDiv(!0), d(a, t), o.display(n), c()
							})
						})
					})
				},
				u = (e, t) => {
					const n = i.get(e);
					if (!n) return;
					const s = window.googletag = window.googletag || {};
					s.cmd = s.cmd || [], s.cmd.push(() => {
						Object.keys(t).forEach(e => n.setTargeting(e, t[e]))
					})
				},
				m = (e, t) => {
					const n = i.get(e);
					if (!n) return;
					d(n, t);
					const s = window.googletag = window.googletag || {};
					s.cmd = s.cmd || [], window.aax && window.aax.cmd.push(() => {
						window.aax.getAbpStatus && window.aax.getAbpStatus() && s.cmd.push(() => {
							s.pubads().refresh([n])
						})
					}), window.apstag.fetchBids({
						slots: [{
							slotID: t.id,
							slotName: [t.slot, t.id].join("/"),
							sizes: t.sizes
						}],
						timeout: 2e3
					}, () => {
						s.cmd.push(() => {
							window.apstag.setDisplayBids(), s.pubads().refresh([n])
						})
					})
				},
				p = e => {
					const t = i.get(e);
					if (!t) return;
					const n = window.googletag = window.googletag || {};
					n.cmd = n.cmd || [], n.cmd.push(() => {
						a.a.write(() => {
							n.destroySlots([t]), i.delete(e)
						})
					})
				},
				b = e => {
					const t = () => {
						const t = document.createElement("script");
						t.src = e, t.async = !0;
						const n = document.getElementsByTagName("script")[0];
						n && n.parentNode && n.parentNode.insertBefore(t, n)
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
						const n = document.createElement("link");
						n.href = e, n.rel = "preload", n.as = "script", n.onload = t, document.head.insertBefore(n, document.head.firstChild)
					} else t()
				},
				h = e => {
					const t = window.googletag = window.googletag || {};
					t.cmd = t.cmd || [], b("//www.googletagservices.com/tag/js/gpt.js"), t.cmd.push(() => {
						t.pubads().addEventListener("slotRequested", e.onRequest), t.pubads().addEventListener("impressionViewable", t => e.onAdView(t, !1)), t.pubads().disableInitialLoad(), t.enableServices()
					}), window.apstag || (window.apstag = {
						_Q: []
					}, window.apstag.init = function() {
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						window.apstag._Q.push(["i", t])
					}, window.apstag.fetchBids = function() {
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
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
						cmd: [() => window.aax.addEventListener("impressionViewable", t => e.onAdView(t, !0))],
						execute: [() => window.aax.limitDataProcessing(e.limitDataProcessing)]
					}, b("//c.aaxads.com/aax.js?pub=".concat(window.aax.pubId, "&hst=").concat(window.aax.hst, "&ver=").concat(window.aax.ver)))
				}
		},
		"./src/lib/isSimpleClick/index.ts": function(e, t, n) {
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
		"./src/lib/serviceWorker/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = "/sw.js";
			async function r(e) {
				if ("undefined" != typeof window && "serviceWorker" in navigator) return navigator.serviceWorker.register(s, e)
			}
			const o = (e, t) => {
				navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: e,
					payload: t
				})
			}
		},
		"./src/reddit/actions/alpha.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.search.js");
			var s = n("./src/config.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			var i = n("./src/reddit/helpers/redesignOptoutCookie/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeRequest/index.ts");
			async function m(e, t) {
				return await Object(u.b)({
					method: l.db.POST,
					endpoint: "/timings/optoutrequest",
					data: {
						appName: e.statsAppName,
						successful: t
					},
					type: "json"
				})
			}
			const p = e => async (t, n, s) => {
				let {
					apiContext: l
				} = s;
				(await
					function(e) {
						return Object(r.a)(Object(o.a)(e, [a.a]), {
							endpoint: "".concat(e.apiUrl, "/api/leave_redesign_beta"),
							method: "post",
							type: "json"
						})
					}(l())).ok ? (Object(i.b)(), await m(l(), !0), e && window.location.reload()) : (m(l(), !1), t(Object(c.e)({
					kind: d.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, b = () => async (e, t, n) => {
				let {
					apiContext: c
				} = n;
				Object(i.a)(),
					function(e) {
						Object(r.a)(Object(o.a)(e, [a.a]), {
							endpoint: "".concat(e.apiUrl, "/api/join_redesign_beta"),
							method: "post",
							type: "json"
						}).then(() => {
							const {
								pathname: e,
								search: t
							} = window.location, n = "".concat(s.a.redditUrl).concat(e).concat(t);
							window.location.replace(n)
						})
					}(c())
			}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(i.a)(c.a),
				l = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						l = n();
					if (!l.economics.me.fetched || i && !l.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: "".concat(o.a.metaUrl, "/users/me").concat(t ? "?fields=specialMemberships" : "")
							})
						}(r(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						o = n.economics.me.data;
					if (!o) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = "https://".concat(o.pointsDocsBaseUrl, "v1.json?web"),
							n = await Object(r.b)({
								endpoint: t,
								method: s.db.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/economics/paymentSystems/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			const o = Object(s.a)(r.a),
				a = Object(s.a)(r.e),
				i = Object(s.a)(r.b),
				c = Object(s.a)(r.c),
				d = Object(s.a)(r.d)
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "f", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forOwn.js"),
				r = n.n(s),
				o = n("./src/reddit/actions/governance/errorToast.ts"),
				a = n("./src/reddit/endpoints/economics/emojis.ts"),
				i = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				d = n("./src/reddit/endpoints/governance/badges.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, n) {
				return Object(u.a)(e, {
					method: "get",
					endpoint: "".concat(l.a.metaUrl, "/products/").concat(t, "?owners=").concat(n) + "&types=emotes_pack,giphy"
				})
			}
			var p = n("./src/reddit/models/Badge/index.ts"),
				b = n("./src/reddit/models/Badge/managementPage.ts"),
				h = n("./src/reddit/models/Product/index.ts"),
				g = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				f = n("./src/reddit/selectors/economics.ts"),
				v = n("./src/reddit/selectors/products.ts"),
				O = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				y = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function C(e) {
				return !!e && "removeBadge" === e.type
			}

			function P(e) {
				if (!C(e)) return e
			}
			const x = () => async (e, t, n) => {
				let {
					apiContext: s
				} = n;
				if (!t().user.account) return;
				await e(Object(O.b)({
					includeMemberships: !0
				}));
				const r = t().economics.me.data.specialMemberships || {},
					o = Object.keys(r);
				if (o.length) {
					const t = await Object(i.e)(s(), o);
					t.ok && e(Object(y.g)(t.body))
				}
			}, E = (e, t) => async (n, s, r) => {
				let {
					apiContext: o
				} = r;
				const a = s().user.account,
					i = s().economics.subredditPremium[e],
					d = !i || i.status !== g.a.Fetched || t;
				if (a && d) {
					const t = await Object(c.a)(o(), e, a.id);
					n(Object(y.i)(t))
				}
			}, j = e => async (t, n, s) => {
				let {
					apiContext: r
				} = s;
				const a = n(),
					i = a.user.account,
					c = Object(f.f)(a, e.subredditId),
					l = Object.keys(c).map(e => c[e]).filter(Boolean);
				if (i && e.badge) {
					let n, s;
					n = e.placement === p.a.First ? c[b.a.Loyalty] : e.placement === p.a.Second ? c[b.a.Achievement] : c[b.a.Cosmetic], t(Object(y.a)(Object.assign(Object.assign({}, e), {
						badge: P(e.badge),
						currentAppliedBadges: l,
						userId: i.id
					}))), C(e.badge) && n ? s = await Object(d.a)(r(), e.subredditId, n.id, !1) : C(e.badge) || (s = await Object(d.a)(r(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(y.a)(Object.assign(Object.assign({}, e), {
						badge: n,
						currentAppliedBadges: l,
						userId: i.id
					}))), Object(o.a)(t, s.error))
				}
			}, S = (e, t) => async (n, s, r) => {
				let {
					apiContext: o
				} = r;
				await n(E(e, !0));
				const a = s().economics.subredditPremium[e];
				if (a && a.status === g.a.Fetched) {
					const s = a.data.userOwnedBadges.find(e => e.type === t.id);
					s && (n(j({
						badge: s,
						subredditId: e,
						placement: s.placement
					})), n(Object(y.d)(b.c.MyBadges)))
				}
			}, _ = e => async (t, n, s) => {
				let {
					apiContext: i
				} = s;
				const c = n().user.account,
					d = !n().economics.emotes[e],
					l = !n().economics.gifs[e];
				if (c && (d || l)) {
					const [n, s] = await Promise.all([Object(a.b)(i(), e), m(i(), e, c.id)]);
					if (!s.ok) return void Object(o.a)(t, s.error);
					const d = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					r()(s.body, e => {
						e.type === h.a.EmotesPack ? d.emotes.push(e) : e.type === h.a.Giphy && d.giphy.push(e)
					}), t(Object(y.e)({
						subredditId: e,
						products: d
					}))
				}
			}, k = (e, t, n) => async (s, r, o) => {
				let {
					apiContext: a
				} = o;
				if (await s(E(e, !0)), n && t) {
					const n = r(),
						o = Object(f.f)(n, e),
						a = Object(v.a)(n, t);
					if (!o[Object(b.d)(a.placement)] && a) {
						const t = Object(f.m)(n, {
							subredditId: e,
							badge: a
						});
						t && await s(j({
							badge: t,
							subredditId: e
						}))
					}
					s(Object(y.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, w = e => async (t, n, s) => {
				let {
					apiContext: r
				} = s;
				const {
					wallet: o
				} = await Object(i.c)(r(), e);
				t(Object(y.f)({
					wallet: o
				})), await t(E(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/emailCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			}));
			var s = n("./node_modules/lodash/once.js"),
				r = n.n(s),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/notificationBanner.ts"),
				i = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				d = n("./src/reddit/components/Settings/modalIds.ts"),
				l = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/selectors/emailCollection.ts");
			const m = r()(l.c),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.z)()), Object(u.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(l.b)(), e(Object(a.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(o.g)(d.g))
				}
		},
		"./src/reddit/actions/emailVerification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/EmailSettings/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, n, r) => {
				let {
					apiContext: o
				} = r;
				switch (e) {
					case d.a.Success:
						t(Object(c.e)({
							kind: l.b.SuccessCommunity,
							text: s.fbt._("Email verification complete", null, {
								hk: "vp6R2"
							})
						}));
						break;
					case d.a.AlreadyVerified:
						t(Object(c.e)({
							kind: l.b.SuccessCommunity,
							text: s.fbt._("Your email address has already been verified.", null, {
								hk: "7ro41"
							})
						}));
						break;
					case d.a.WrongUser:
						return void t(Object(c.e)({
							kind: l.b.Error,
							text: s.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
								hk: "1NrK5a"
							})
						}));
					default:
						t(Object(c.e)({
							kind: l.b.Error,
							text: s.fbt._("Something went wrong.", null, {
								hk: "JbBLl"
							})
						}))
				}
			}, m = e => async (t, n, s) => {
				let {
					apiContext: c
				} = s;
				const l = await ((e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					method: r.db.POST,
					endpoint: "".concat(e.apiUrl, "/api/v1/verify_email/").concat(t),
					data: {}
				}))(c(), e);
				if (l.ok && l.body && l.body.success) return d.a.Success;
				switch (l.body.reason) {
					case d.a.AlreadyVerified:
						return d.a.AlreadyVerified;
					case d.a.WrongUser:
						return d.a.WrongUser;
					default:
						return d.a.Error
				}
			}
		},
		"./src/reddit/actions/notifications/loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/loadWithRetries/index.ts");
			t.a = () => Object(s.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts")))
		},
		"./src/reddit/actions/notifications/preferences.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/config.ts"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var l = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/selectors/notificationPrefs.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/actions/notifications/constants.ts");
			const b = Object(r.a)(p.c),
				h = Object(r.a)(p.b),
				g = Object(r.a)(p.a),
				f = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					const r = t();
					if (!Object(m.i)(r)) return;
					const o = Object(u.b)(r),
						l = Object(u.a)(r);
					if (o || l) return;
					e(b());
					const p = await (e => Object(c.a)(e, {
						endpoint: Object(d.a)("".concat(a.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: i.db.GET
					}))(s());
					if (p.ok) {
						const t = (e => ({
							broadcastFollower: !!e.broadcast_follower,
							broadcastRecommendation: !!e.broadcast_recommendation,
							chatMessages: !!e.chat_message,
							chatRequests: !!e.chat_request,
							commentReplies: !!e.comment_reply,
							communityRecommendations: !!e.subreddit_recommendation,
							liveEvent: !!e.live_event,
							newPinnedPost: !!e.new_pinned_post,
							postFlairAdded: !!e.post_flair_added,
							postReplies: !!e.post_reply,
							privateMessages: !!e.private_message,
							threadReplies: !!e.thread_replies,
							topLevelComment: !!e.top_level_comment,
							trendingPosts: !!e.lifecycle_post_suggestions,
							upvotedComments: !!e.upvote_comment,
							upvotedPosts: !!e.upvote_post,
							userFlairAdded: !!e.user_flair_added,
							usernameMentions: !!e.username_mention,
							userNewFollowers: !!e.user_new_follower
						}))(p.body);
						e(h({
							preferences: t
						}))
					} else e(g(p.error))
				}, v = Object(r.a)(p.f), O = Object(r.a)(p.e), y = Object(r.a)(p.d), C = e => async (t, n, r) => {
					let {
						apiContext: p
					} = r;
					const b = n();
					if (!Object(m.i)(b)) return;
					if (Object(u.e)(b)) return;
					const h = Object(u.d)(b);
					t(v({
						preferences: e
					}));
					const g = await ((e, t) => Object(c.a)(e, {
						endpoint: Object(d.a)("".concat(a.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: i.db.POST,
						data: {
							preferences: JSON.stringify({
								broadcast_follower: t.broadcastFollower,
								broadcast_recommendation: t.broadcastRecommendation,
								chat_message: t.chatMessages,
								chat_request: t.chatRequests,
								post_flair_added: t.postFlairAdded,
								comment_reply: t.commentReplies,
								lifecycle_post_suggestions: t.trendingPosts,
								live_event: t.liveEvent,
								new_pinned_post: t.newPinnedPost,
								post_reply: t.postReplies,
								private_message: t.privateMessages,
								subreddit_recommendation: t.communityRecommendations,
								thread_replies: t.threadReplies,
								top_level_comment: t.topLevelComment,
								username_mention: t.usernameMentions,
								upvote_comment: t.upvotedComments,
								upvote_post: t.upvotedPosts,
								user_new_follower: t.userNewFollowers,
								user_flair_added: t.userFlairAdded
							})
						}
					}))(p(), e);
					g.ok ? (t(O()), t(Object(o.e)({
						kind: l.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "UBoVR"
						})
					}))) : t(y({
						error: g.error,
						preferences: h
					}))
				}
		},
		"./src/reddit/actions/notifications/state.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/notifications/constants.ts"),
				r = n("./src/reddit/actions/notifications/utils.ts");
			const o = {
					isEnabled: !1,
					isSubscriptionActive: !1,
					permission: s.a.Default
				},
				a = {
					denied: s.a.Denied,
					granted: s.a.Granted
				};
			const i = new class {
					constructor() {
						this.isInitializing = !1, this.isReady = !1, this.isSubscriptionActive = !1, this.permission = s.a.Default, this.listeners = new Set, this.initialize = async e => {
							if (this.isReady || this.isInitializing) return;
							await Object(r.a)(e) === s.c.NotificationsSupported && (this.isInitializing = !0, await this.subscribeToPermissionsChange(), await this.updateIsSubscriptionEnabled(), this.isInitializing = !1, this.isReady = !0, this.notifyAll())
						}, this.updatePermission = () => {
							this.permission = a[Notification.permission] || s.a.Default
						}, this.updateIsSubscriptionEnabled = async () => {
							const e = await window.navigator.serviceWorker.getRegistrations();
							for (const t of e) {
								if (await t.pushManager.getSubscription()) return void(this.isSubscriptionActive = !0)
							}
						}, this.recalculate = async () => {
							this.isReady && (this.updatePermission(), await this.updateIsSubscriptionEnabled(), this.notifyAll())
						}, this.getCurrentState = () => {
							return {
								isEnabled: this.isSubscriptionActive && this.permission === s.a.Granted,
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
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/notifications/constants.ts"),
				r = n("./src/lib/notifications/featureFlags.ts"),
				o = n("./src/reddit/featureFlags/index.ts");
			const a = e => o.d.pushNotificationsBrowserSupported(e) ? Object(r.a)() : s.c.BrowserUnsupported
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				r = n("./src/reddit/actions/users.ts"),
				o = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				Object(o.I)(t()) || await e(Object(r.r)()), await e(Object(s.b)()).then(() => {
					if (t().economics.me.data) return e(Object(s.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var s = n("./src/lib/makeListingKey/index.ts"),
				r = n("./src/reddit/actions/economics/helpers/async.ts"),
				o = n("./src/reddit/actions/pages/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t().platform.currentPage;
				if (n && n.routeMatch && n.routeMatch.match) {
					const d = (n.routeMatch.match.params || {}).subredditName;
					if (d) {
						const n = [],
							l = t();
						Object(c.I)(l) || n.push(e(Object(a.r)()));
						const u = Object(s.a)(d, null);
						n.push(e(Object(o.i)(u, d, {}))), await Promise.all(n);
						const m = Object(i.G)(t(), d);
						await e(Object(r.a)({
							subredditId: m,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
			}
		},
		"./src/reddit/actions/pages/notificationsInbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/pageTitle.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/inboxNotifications/constants.ts"),
				a = n("./src/config.ts"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			const u = Object(r.a)(o.c),
				m = Object(r.a)(o.b),
				p = Object(r.a)(o.a),
				b = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					const r = await (e => Object(c.a)(Object(d.a)(e, [l.a]), {
						method: i.db.GET,
						endpoint: "".concat(a.a.oauthUrl, "/message/inbox_notifications.json")
					}))(s());
					r.ok || p({
						error: r.error
					});
					const o = r && r.body,
						u = h(o);
					e(m(u))
				}, h = e => {
					const t = e && e.data;
					return (t && t.children).map(g)
				}, g = e => {
					const {
						data: t
					} = e;
					return {
						author: t.author,
						bodyHtml: t.body_html,
						context: t.context,
						created: t.created,
						createdUtc: t.created_utc,
						dest: t.dest,
						id: t.id,
						linkTitle: t.link_title,
						name: t.name,
						new: t.new,
						numComments: t.num_comments,
						parentId: t.parent_id,
						score: t.score,
						subreddit: t.subreddit,
						subredditNamePrefixed: t.subreddit_name_prefixed
					}
				};
			var f = n("./src/reddit/actions/modal.ts"),
				v = n("./src/reddit/actions/platform.ts"),
				O = n("./src/reddit/actions/users.ts"),
				y = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				C = n("./src/reddit/routes/notificationsInbox/index.ts"),
				P = n("./src/reddit/selectors/user.ts");
			const x = () => async (e, t) => {
				S(t(), e), e(E()), e(j()), await e(_())
			}, E = () => Object(f.k)({
				actionSource: f.a.NotificationsInbox,
				redirectUrl: C.b
			}), j = () => v.l({
				title: Object(s.e)()
			}), S = (e, t) => {
				if (!Object(P.I)(e) || !Object(P.F)(e)) return Object(y.a)(t, e)
			}, _ = () => async e => {
				e(u()), await Promise.all([e(b()), e(Object(O.r)())])
			}
		},
		"./src/reddit/actions/pages/settings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/extractQueryParams/index.ts"),
				i = n("./src/lib/filterQueryParams/index.ts"),
				c = n("./src/lib/pageTitle.ts"),
				d = n("./src/reddit/actions/chat/userSettings.ts"),
				l = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				u = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts");
			var m = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				p = n("./src/reddit/actions/externalAccount.ts"),
				b = n("./src/reddit/actions/gold/powerups.ts"),
				h = n("./src/reddit/actions/notifications/preferences.ts"),
				g = n("./src/reddit/actions/platform.ts"),
				f = n("./src/reddit/actions/preferences.ts"),
				v = n("./src/reddit/actions/profile/index.ts"),
				O = n("./src/reddit/actions/subredditSettings.ts"),
				y = n("./src/reddit/actions/toaster.ts"),
				C = n("./src/reddit/actions/users.ts"),
				P = n("./src/reddit/constants/parameters.ts"),
				x = n("./src/reddit/helpers/externalAccount/index.tsx"),
				E = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				j = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				S = n("./src/reddit/selectors/externalAccount.ts"),
				_ = n("./src/reddit/selectors/user.ts");
			const k = e => async (t, n) => {
				await t(Object(C.r)());
				const k = [t(Object(f.z)(!0)), t(Object(m.a)())];
				n().economics.paymentSystems.status === j.a.NotFetched && k.push(t((() => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					e(Object(u.d)());
					const r = await Object(l.d)(s());
					r.ok ? e(Object(u.c)(r.body)) : e(Object(u.b)({
						error: r.error
					}))
				})())), await Promise.all(k); {
					const e = n();
					if (!Object(_.I)(e)) return Object(E.a)(t, e)
				}
				const {
					page: w = o.Ob.Account
				} = e.params;
				if (w === o.Ob.Gold) return void t(Object(r.c)("/settings/premium"));
				const I = [];
				w === o.Ob.Profile && (I.push(t(Object(v.a)())), I.push(t(Object(O.g)()))), w === o.Ob.Account && I.push(t(Object(p.o)())), w === o.Ob.Notifications && I.push(t(Object(h.a)())), w !== o.Ob.Privacy && w !== o.Ob.Messaging || I.push(t(Object(d.b)())), w === o.Ob.Premium && (I.push(t(Object(v.a)())), I.push(t(Object(b.g)(!0)))), await Promise.all(I); {
					const e = n(),
						o = e.platform.currentPage,
						{
							url: c
						} = o,
						d = Object(a.a)(c).get(P.d);
					if (d && (t(Object(r.c)(Object(i.a)(c, [P.d]))), Object(S.a)(e))) {
						const e = s.fbt._("Connected accounts", null, {
							hk: "bdpfW"
						});
						t(Object(y.e)({
							text: e
						})), Object(x.b)(d)
					}
				}
				t(Object(g.l)({
					title: Object(c.h)()
				}))
			}
		},
		"./src/reddit/actions/pages/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/lib/pageTitle.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/tags/index.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const d = () => async (e, t) => {
				e(r.l({
					title: Object(s.j)()
				})), await e(Object(a.r)());
				const n = t();
				Object(c.I)(n) ? await e(Object(o.f)()) : Object(i.a)(e, n)
			}
		},
		"./src/reddit/actions/pages/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/pageTitle.ts"),
				r = n("./src/reddit/actions/category/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/platform.ts"),
				i = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				c = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/constants/listings.ts"),
				l = n("./src/reddit/constants/subredditLeaderboard.ts"),
				u = n("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				m = n("./src/reddit/models/GoodContent/index.ts"),
				p = n("./src/reddit/selectors/category.ts"),
				b = n("./src/reddit/selectors/subredditLeaderboard.ts"),
				h = n("./src/reddit/selectors/user.ts");
			const g = (e, t) => t && e === l.m,
				f = e => async (t, n) => {
					t(Object(o.k)({
						actionSource: o.a.SubredditLeaderboard,
						redirectUrl: d.c[d.b.SubredditLeaderboard]
					})), t(a.l({
						title: Object(s.k)()
					}));
					const r = e.params && e.params.categoryName,
						i = r && Object(u.b)(r);
					await t(v(i))
				}, v = e => async (t, n) => {
					await t(Object(r.a)());
					const s = n(),
						o = Object(h.J)(s);
					if (Object(b.a)(s, e)) return;
					const a = e && Object(p.f)(s, {
							categoryName: e
						}),
						d = e === l.j ? l.i : a && a.id || l.e,
						u = ((e, t) => ({
							categoryId: e,
							filter: m.a,
							isOnlyModIncluded: t
						}))(d, g(e, o)),
						f = Object(b.d)(d, e);
					await Promise.all([t(Object(i.a)(u, f)), t(Object(c.r)())])
				}
		},
		"./src/reddit/actions/publicAccessNetwork/userSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = n("./src/reddit/constants/localStorage.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts");
			const i = Object(s.a)(r.C),
				c = e => async t => {
					await t(i(e)), t(u())
				}, d = () => async e => {
					const t = l();
					t && e(i(t))
				}, l = () => {
					return Object(a.o)(o.D) || void 0
				}, u = () => async (e, t) => {
					const n = t().publicAccessNetwork.userSettings;
					Object(a.bb)(o.D, n)
				}
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/comment/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/constants/shortcuts.ts"),
				c = n("./src/reddit/helpers/trackers/lightbox.ts"),
				d = n("./src/reddit/helpers/trackers/shortcuts.ts"),
				l = n("./src/reddit/selectors/gild.ts"),
				u = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				m = n("./src/reddit/actions/shortcuts/utils.ts");
			const p = [u.s, u.n, e => !!Object(l.d)(e)],
				b = (e, t) => async (n, l, u) => {
					let {
						apiContext: b
					} = u;
					const h = l();
					for (const e of p)
						if (e(h)) return;
					const g = document.activeElement,
						f = h.shortcuts.activeCommentId,
						v = Object(m.c)(h);
					if (g && "true" === g.contentEditable && f && v) n(r.O({
						parentCommentId: f,
						commentsPageKey: v
					})), Object(m.a)(f);
					else if (h.activeModalId) Object(m.b)(i.b), n(Object(o.i)(h.activeModalId));
					else if (h.toaster[0]) Object(m.b)(i.b), n(Object(a.f)(h.toaster[0].id));
					else if (h.shortcuts.namespace === i.d.Lightbox && h.platform.currentPage) {
						const e = h.platform.currentPage.locationState.closeLocation;
						e && (Object(m.b)(i.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: O
					} = h.shortcuts;
					e(t && O ? c.b(O, "close", !0) : d.a)
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/actions/login.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			var d = n("./src/reddit/selectors/user.ts");
			const l = () => async e => {
				e(Object(a.r)({
					forceFetch: !0
				})), await e(Object(o.g)(i.a.SNOOVATAR_MODAL))
			}, u = e => async (t, n) => {
				const a = n();
				Object(s.a)((e => t => Object.assign({
					source: e,
					action: "click",
					noun: "edit_snoovatar"
				}, c.defaults(t)))(e)(a)), Object(d.I)(a) ? await t(Object(o.h)(i.a.SNOOVATAR_MODAL)) : await t(Object(r.h)())
			}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/subreddit/constants.ts"),
				o = n("./src/reddit/constants/subredditLeaderboard.ts"),
				a = n("./src/reddit/endpoints/subreddit/local.ts"),
				i = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				c = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const d = Object(s.a)(r.k),
				l = Object(s.a)(r.j),
				u = Object(s.a)(r.i),
				m = Object(s.a)(r.a),
				p = Object(s.a)(r.b),
				b = Object(s.a)(r.c),
				h = (e, t) => async (n, s, r) => {
					let {
						gqlContext: h
					} = r;
					n(d());
					const g = t === o.i ? async function() {
						const t = await Object(a.a)(h(), e);
						if (!t.ok) {
							const e = t.error;
							return n(u({
								error: e
							})), null
						}
						const s = t.body,
							r = s && s.data && s.data.nearbySubreddits;
						return Object(c.a)(r)
					}: async function() {
						const t = await Object(i.a)(h(), e);
						if (!t.ok) {
							const e = t.error;
							return void n(u({
								error: e
							}))
						}
						const s = t.body,
							r = s && s.data && s.data.subredditLeaderboard;
						return Object(c.b)(r)
					}, f = await g();
					if (!f) return;
					const {
						pageInfo: v,
						rankings: O,
						subreddits: y
					} = f;
					n(m({
						subreddits: y
					})), n(p({
						categoryRankingsKey: t,
						rankings: O
					})), n(b({
						categoryRankingsKey: t,
						pageInfo: v
					})), n(l())
				}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.m.less": function(e, t, n) {
			e.exports = {
				IFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				iFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				CloseButton: "_1ryinm9ofYAx_k9dpdCbpq",
				closeButton: "_1ryinm9ofYAx_k9dpdCbpq",
				Close: "_14dkERGUnSwisNWFcFX-0T",
				close: "_14dkERGUnSwisNWFcFX-0T"
			}
		},
		"./src/reddit/components/AccountManagerModal/index.m.less": function(e, t, n) {
			e.exports = {
				Overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				IframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				iframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				small: "FBb4FZ4ng7CvLYrT6LBdp",
				ssoConfirmPassword: "_3CQoZKhSqrJrbOGJxp03DS",
				mResponsive: "_2CwLGmlfoqlHFJcOwm0RS-",
				linkActionSSOFail: "_1ALB_4jSDt6vPeELvg9lKL",
				linkActionSsoFail: "_1ALB_4jSDt6vPeELvg9lKL",
				mGoogleOneTap: "_15Lh8Q9iPGbXdxumHm8cT9",
				mHiddenOverlay: "_233XfOVq91N_ugGQDBb_OT"
			}
		},
		"./src/reddit/components/AlertBanner/Wrapper.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "GfthJQJvWCHdUoMi6YjYa",
				wrapper: "GfthJQJvWCHdUoMi6YjYa"
			}
		},
		"./src/reddit/components/AlertBanner/heights.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended
				}),
				r = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				})
		},
		"./src/reddit/components/AlertBanner/index.m.less": function(e, t, n) {
			e.exports = {
				underlineButton: "_1uQwMnfXrOfzkL_CFxH6fd",
				underlineLink: "vOGtEDdh1mVbkqinhg3Ov",
				wrapper: "_3el1HrJryfAxBUzu4HsIhE",
				deprecated: "_2s1xq3Ji1Oj7oZtdSqWznV",
				fpr: "_36j6vvbAY0wIrxbyXuNQhn",
				suspended: "_1ivoPEQV9lryC0mH-f_uGY",
				closeButton: "_1oAzKCYwbVOQ-AbuRZfMg2",
				closeIcon: "_6aklZuhHMm1XJcsi8dEeP"
			}
		},
		"./src/reddit/components/AppRouter/index.m.less": function(e, t, n) {
			e.exports = {
				header: "cx1ohrUAq6ARaXTX2u8YN",
				showDeprecated: "_378Md-M6pOqwzEiV3lAwYk",
				showFPR: "_2P-zXcOfggYIWnL3EfXUHP",
				showFpr: "_2P-zXcOfggYIWnL3EfXUHP",
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
				bottomAdContainer: "_2SL_DAWw1V6pxZysgrdeBe",
				sidebarFooter: "_2AJ0ZwpZtFJ10GdcU0CUew",
				sidebarFooterWithAd: "_1ht98h5gXjzYhFyRZgB0Pv",
				bottomSpacer: "_14-8KVF3BKuTNsLNWcOG2X",
				showEmailCollectionBanner: "_25N7Qd1z8aRQYtQhjEFyTC",
				overlayScrollContainer: "_29IbETWb5VVDcfk_-GumWz",
				mediaIsFullscreen: "_34Bl1Of1839ZWJXR8IY0Ym",
				popupContainer: "_13Vg6OZEIy5AcJ_DOw6jK0"
			}
		},
		"./src/reddit/components/AppRouter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Am
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
				a = n("./node_modules/lodash/omit.js"),
				i = n.n(a),
				c = n("./node_modules/lodash/throttle.js"),
				d = n.n(c),
				l = n("./node_modules/react/index.js"),
				u = n.n(l),
				m = n("./node_modules/react-redux/es/index.js"),
				p = n("./node_modules/react-router/esm/react-router.js"),
				b = n("./node_modules/react-router-redux/es/index.js"),
				h = n("./node_modules/reselect/es/index.js"),
				g = n("./src/lib/classNames/index.ts"),
				f = n("./src/lib/constants/index.ts"),
				v = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				O = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				y = n("./src/lib/fastdom/index.ts"),
				C = n("./src/lib/FocusTrap/index.ts"),
				P = n("./src/lib/isEqualWithoutKey/index.ts"),
				x = n("./src/lib/isSimpleClick/index.ts"),
				E = n("./src/reddit/actions/header.ts"),
				j = n("./src/reddit/actions/survey/index.ts"),
				S = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				_ = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				k = n("./node_modules/polished/dist/polished.es.js"),
				w = n("./node_modules/react-motion/lib/react-motion.js"),
				I = n("./src/lib/lessComponent.tsx"),
				M = (n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./src/config.ts")),
				N = n("./src/lib/addQueryParams/index.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				R = n("./src/reddit/actions/preferences.ts"),
				A = n("./src/lib/makeActionCreator/index.ts"),
				L = n("./src/reddit/actions/sso/constants.ts");
			const F = Object(A.a)(L.a),
				D = Object(A.a)(L.b);
			var G = n("./src/reddit/actions/toaster.ts"),
				U = n("./src/reddit/components/TrackingHelper/index.tsx"),
				B = n("./src/reddit/constants/accountManager.ts"),
				H = n("./src/reddit/constants/history.ts"),
				W = n("./src/reddit/constants/listings.ts"),
				q = n("./src/reddit/constants/modals.ts"),
				V = n("./src/reddit/constants/parameters.ts");
			const Q = () => M.a.redditUrl;
			var z = n("./src/reddit/helpers/history/index.ts"),
				K = n("./src/reddit/selectors/telemetry.ts");
			const Y = [],
				X = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y;
					return t => Object.assign(Object.assign({}, K.defaults(t)), {
						action: "click",
						noun: "exit",
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: "onboarding"
					})
				},
				J = () => e => Object.assign(Object.assign({}, K.defaults(e)), {
					action: "dismiss",
					noun: "create_account_screen_dropdown",
					source: "onboarding"
				}),
				Z = () => e => Object.assign(Object.assign({}, K.defaults(e)), {
					action: "view",
					noun: "create_account_screen_dropdown",
					source: "onboarding"
				}),
				$ = e => t => Object.assign(Object.assign({}, K.defaults(t)), {
					action: "dismiss",
					noun: e,
					source: "onboarding"
				});
			var ee = n("./src/reddit/icons/svgs/Close/index.tsx"),
				te = n("./src/reddit/models/Sso/index.ts"),
				ne = n("./src/reddit/models/Toast/index.ts"),
				se = n("./src/reddit/selectors/accountManager.ts"),
				re = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				oe = n("./src/reddit/selectors/user.ts"),
				ae = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				ie = n.n(ae);
			const ce = I.a.iframe("IFrame", ie.a),
				de = I.a.button("CloseButton", ie.a),
				le = I.a.wrapped(ee.a, "Close", ie.a),
				ue = Object(h.c)({
					accountManagerSrc: se.c,
					actionSource: se.a,
					frontpageSignupVariant: re.a,
					isLoggedIn: oe.I,
					redirectUrl: se.b
				}),
				me = Object(m.b)(ue, (e, t) => ({
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: Object.assign(Object.assign({}, Object(K.defaults)(s())), {
									actionSource: n
								}),
								type: "eventData"
							}, Q())
						})
					},
					onTwoFactorChanged: () => e(Object(R.z)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(F({
							linkedIdentity: n
						})), e(Object(T.g)(s)), e(Object(G.e)(Object(G.d)(t, ne.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(D({
							linkedIdentity: n
						})), e(Object(T.g)(s)), e(Object(G.e)(Object(G.d)(t, ne.b.SuccessCommunity)))
					},
					showToast: (t, n) => {
						e(Object(G.e)(Object(G.d)(t, n)))
					}
				})),
				pe = e => {
					let {
						data: t,
						origin: n
					} = e;
					return t && t.success && (t.type === B.a.ChangePassword || t.type === B.a.Close || t.type === B.a.CreateAccount || t.type === B.a.GoogleOneTapDisplayed || t.type === B.a.GoogleOneTapFlowFailed || t.type === B.a.GoogleOneTapSkipped || t.type === B.a.Login || t.type === B.a.PreferenceStatus || t.type === B.a.Register || t.type === B.a.Resize || t.type === B.a.ShowStep || t.type === B.a.SSOLinkFail || t.type === B.a.SSOLinkSuccess || t.type === B.a.SSOUnlinkFail || t.type === B.a.SSOUnlinkSuccess || t.type === B.a.Subscribe || t.type === B.a.TwoFactorChanged) && n === M.a.accountManagerOrigin
				},
				be = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class he extends u.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = u.a.createRef(), this.isAccountCreated = !1, this.trackResizing = !0, this.currentStep = null, this.state = {
						iframeStyles: {}
					}, this.focusFirstVisibleIframeInput = () => {
						try {
							if (!this.iframeRef.current) return;
							const e = this.iframeRef.current.contentWindow ? this.iframeRef.current.contentWindow.document : this.iframeRef.current.contentDocument;
							if (!e) return;
							const t = e.querySelector('input:not([type="hidden"])');
							t && t.focus()
						} catch (e) {}
					}, this.handleLinkSSOSuccess = e => {
						const t = e === te.a.Apple ? q.a.LINK_APPLE_SSO : q.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(s.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === te.a.Apple ? q.a.UNLINK_APPLE_SSO : q.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(s.fbt._("Account disconnected", null, {
							hk: "mUOBy"
						}), e, t)
					}, this.setIframeStyles = e => {
						this.setState(t => ({
							iframeStyles: Object.assign(Object.assign({}, t.iframeStyles), e)
						}))
					}, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && pe(e))
							if (t.type === B.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === B.a.Close) this.closedByUser();
						else if (t.type === B.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === B.a.Login) this.onLogIn();
						else if (t.type === B.a.ChangePassword) this.onChangePassword();
						else if (t.type === B.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === B.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === B.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === B.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === B.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === B.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === B.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed()) : t.type === B.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === B.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === B.a.ShowStep ? this.onShowStep(t.step) : t.type === B.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(z.a)(H.a.JustLoggedIn, !0), window.location.reload(!0))
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload(!0)
					}, this.onSignUp = (e, t) => {
						let n = "";
						if (this.props.redirectUrl) n = this.props.redirectUrl;
						else if ("/" !== window.location.pathname) n = window.location.href;
						else {
							const s = 0;
							n = (e || t && t.length || 0) > s ? W.c[W.b.Home] : W.c[W.b.Popular]
						}
						this.redirectTo(n)
					}, this.onShowStep = e => {
						this.currentStep = e, e === B.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || s.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), ne.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(s.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), ne.b.SuccessCommunity) : this.props.showToast(s.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), ne.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = e => {
						window.location.replace(Object(N.a)(e, {
							[V.o]: "true"
						}))
					}, this.closedByUser = () => {
						if (this.currentStep) {
							const e = be[this.currentStep];
							e && this.props.sendEvent($(e))
						}
						this.close()
					}, this.close = () => {
						this.props.onClose && this.props.onClose();
						try {
							sessionStorage.removeItem("data"), sessionStorage.removeItem("initialData")
						} catch (e) {}
						this.isAccountCreated && this.onSignUp()
					}, this.isLoaded = !1, this.onIFrameLoad = e => {
						this.currentStep = null, this.isLoaded ? (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						}), this.props.onChange && this.props.onChange()) : this.isLoaded = !0
					}
				}
				componentDidMount() {
					this.iframeRef.current && (this.iframeRef.current.onload = () => {
						this.props.oniFrameLoaded(this.iframeRef.current, this.props.actionSource), this.focusFirstVisibleIframeInput()
					}, this.props.exposeIFrameElement && this.props.exposeIFrameElement(this.iframeRef.current)), window.addEventListener("message", this.onMessage)
				}
				componentDidUpdate(e) {
					this.props.path !== e.path && e.path === B.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
						height: void 0,
						visibility: void 0,
						width: void 0
					})
				}
				componentWillUnmount() {
					window.removeEventListener("message", this.onMessage)
				}
				render() {
					const {
						accountManagerSrc: e,
						className: t,
						showCloseButton: n
					} = this.props, {
						iframeStyles: s
					} = this.state;
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(ce, {
						className: t,
						innerRef: this.iframeRef,
						src: e,
						style: s,
						onLoad: this.onIFrameLoad
					}), n && u.a.createElement(de, {
						onClick: this.closedByUser
					}, u.a.createElement(le, null)))
				}
			}
			var ge, fe = me(Object(U.c)(he)),
				ve = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Oe = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				ye = n("./src/reddit/components/Carousel/index.m.less"),
				Ce = n.n(ye);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(ge || (ge = {}));
			class Pe extends u.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === ge.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
					}, this.handleNextFadePage = () => {
						this.setState((e, t) => Object.assign(Object.assign({}, e), {
							pageNumber: (e.pageNumber + 1) % t.items.length
						}))
					}, this.handleNextSlidePage = () => {
						this.setState((e, t) => {
							const n = 10 * t.items.length;
							return Object.assign(Object.assign({}, e), {
								pageNumber: (e.pageNumber + 1) % n,
								items: e.pageNumber === n - 1 ? t.items : e.pageNumber === e.items.length - 1 ? e.items.concat(t.items) : e.items
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
							style: n
						} = e;
						return u.a.createElement("img", {
							key: t,
							src: "".concat(M.a.assetPath, "/").concat(t),
							style: n
						})
					}, this.renderItem = (e, t) => {
						const {
							animationType: n,
							itemWidth: s,
							shouldHandleMouseClicks: r
						} = this.props, {
							pageNumber: o
						} = this.state, a = n === ge.Fade ? {
							opacity: t === o ? 1 : 0
						} : {
							marginLeft: 0 === t ? -s * o : void 0
						};
						return u.a.createElement("div", {
							className: Object(g.a)(Ce.a.item, Ce.a[n]),
							key: "item-".concat(t),
							style: Object.assign(Object.assign({}, a), {
								backgroundImage: 'url("'.concat(M.a.assetPath, "/").concat(e.img, '")'),
								width: s
							}),
							onClick: r ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => u.a.createElement("div", {
						className: Object(g.a)(Ce.a.indicator, {
							[Ce.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
						items: n
					} = this.props;
					return u.a.createElement("div", {
						className: Object(g.a)(e, Ce.a.container)
					}, u.a.createElement("article", {
						className: Ce.a.items
					}, this.state.items.map(this.renderItem)), t && u.a.createElement("footer", {
						className: Ce.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var xe = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				Ee = n.n(xe);
			const je = I.a.div("Container", Ee.a),
				Se = I.a.wrapped(Pe, "Carousel", Ee.a),
				_e = I.a.div("Phone", Ee.a),
				ke = I.a.img("Frame", Ee.a),
				we = "".concat(M.a.assetPath, "/img/frontpage-signup/android-frame.png"),
				Ie = "".concat(M.a.assetPath, "/img/frontpage-signup/iphone-frame.png"),
				Me = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				Ne = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var Te = e => {
					const {
						className: t
					} = e;
					return u.a.createElement(je, {
						className: t
					}, u.a.createElement(_e, {
						className: Ee.a.android
					}, u.a.createElement(Se, {
						animationType: ge.Fade,
						className: Ee.a.android,
						delay: 2500,
						items: Me,
						itemTime: 5e3,
						itemWidth: 240
					}), u.a.createElement(ke, {
						src: we
					})), u.a.createElement(_e, {
						className: Ee.a.iphone
					}, u.a.createElement(Se, {
						animationType: ge.Fade,
						className: Ee.a.iphone,
						items: Ne,
						itemTime: 5e3,
						itemWidth: 232
					}), u.a.createElement(ke, {
						src: Ie
					})))
				},
				Re = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				Ae = n.n(Re);
			const Le = I.a.div("Container", Ae.a),
				Fe = I.a.span("Disclaimer", Ae.a),
				De = I.a.a("Link", Ae.a);
			var Ge = e => u.a.createElement(Le, {
					className: e.className
				}, u.a.createElement(De, {
					href: "https://about.reddit.com"
				}, s.fbt._("about", null, {
					hk: "4n6gdA"
				})), u.a.createElement(De, {
					href: "https://www.redditinc.com/advertising"
				}, s.fbt._("advertise", null, {
					hk: "3M40BX"
				})), u.a.createElement(De, {
					href: "http://www.redditblog.com/"
				}, s.fbt._("blog", null, {
					hk: "iEUEu"
				})), u.a.createElement(De, {
					href: "https://about.reddit.com/careers/"
				}, s.fbt._("careers", null, {
					hk: "1nRiZW"
				})), u.a.createElement(De, {
					href: "https://www.reddithelp.com"
				}, s.fbt._("help", null, {
					hk: "3CJ8k2"
				})), u.a.createElement(De, {
					href: "https://about.reddit.com/press/"
				}, s.fbt._("press", null, {
					hk: "x8wb0"
				})), u.a.createElement(De, {
					href: "https://www.reddit.com/mobile/download"
				}, s.fbt._("The Reddit App", null, {
					hk: "1N9ljJ"
				})), u.a.createElement(De, {
					href: "https://www.reddit.com/coins"
				}, s.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), u.a.createElement(De, {
					href: "https://redditgifts.com/"
				}, s.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), u.a.createElement(De, {
					href: "https://www.reddit.com/premium"
				}, s.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), u.a.createElement(De, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, s.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), u.a.createElement(De, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, s.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), u.a.createElement(Fe, null, s.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				Ue = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				Be = n.n(Ue);
			const He = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				We = I.a.div("Container", Be.a),
				qe = I.a.wrapped(fe, "IFrame", Be.a),
				Ve = I.a.wrapped(Te, "Images", Be.a),
				Qe = I.a.wrapped(Ge, "Links", Be.a),
				ze = I.a.div("MainContent", Be.a),
				Ke = I.a.div("MainContentColumn", Be.a),
				Ye = I.a.button("NotReady", Be.a),
				Xe = I.a.span("NotReadyText", Be.a),
				Je = I.a.wrapped(ve.a, "NotReadyIcon", Be.a),
				Ze = Object(v.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: r,
						onCloseClick: o,
						onVisibilityChange: a
					} = e, i = Object(Oe.a)(e).bodyText;
					return u.a.createElement(_.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, u.a.createElement(We, {
						className: t,
						innerRef: n
					}, u.a.createElement(ze, null, u.a.createElement(Ke, null, u.a.createElement(Ve, null, "Images Placeholder")), u.a.createElement(Ke, null, u.a.createElement(qe, {
						className: Object(g.a)({
							[Be.a.fields]: Object(re.b)(r)
						}),
						path: B.c.Register,
						uiMode: B.d.Embed
					}))), u.a.createElement(Ye, {
						onClick: o,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(k.j)(.8, i)
						}
					}, u.a.createElement(Xe, null, s.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), u.a.createElement(Je, null)), u.a.createElement(Qe, null)))
				});
			class $e extends u.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class et extends u.a.Component {
				constructor() {
					super(...arguments), this.containerRef = u.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(X()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = "-".concat(this.containerRef.current.offsetHeight, "px"), this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return u.a.createElement($e, {
							scrollTo: t
						})
					}
				}
				render() {
					const {
						className: e,
						frontpageSignupVariant: t
					} = this.props, {
						isClosed: n
					} = this.state, s = n && this.containerRef.current ? this.containerRef.current.offsetHeight : 0;
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(Ze, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), u.a.createElement(w.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(w.spring)(s, He)
						}
					}, this.renderScroller))
				}
			}
			var tt = Object(U.c)(et),
				nt = n("./node_modules/js-cookie/src/js.cookie.js"),
				st = n.n(nt),
				rt = n("./src/lib/localStorageAvailable/index.ts"),
				ot = n("./src/higherOrderComponents/makeAsync.tsx"),
				at = Object(ot.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				it = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				ct = n("./src/higherOrderComponents/asModal/index.tsx"),
				dt = n("./src/reddit/controls/Button/index.tsx"),
				lt = n("./src/reddit/selectors/activeModalId.ts"),
				ut = n("./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less"),
				mt = n.n(ut);
			const {
				fbt: pt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), bt = I.a.button("CloseButton", mt.a), ht = I.a.wrapped(ee.a, "Close", mt.a), gt = I.a.div("Container", mt.a), ft = I.a.p("Description", mt.a), vt = I.a.div("Footer", mt.a), Ot = I.a.h3("Heading", mt.a), yt = I.a.img("SnooImage", mt.a), Ct = I.a.div("Wrapper", mt.a), Pt = Object(h.c)({
				activeModalId: lt.a
			});
			class xt extends u.a.Component {
				constructor() {
					super(...arguments), this.onCloseButtonClick = () => {
						const {
							modalToggled: e,
							activeModalId: t
						} = this.props;
						t && e(t)
					}
				}
				render() {
					return u.a.createElement(Ct, null, u.a.createElement(gt, null, u.a.createElement(Ot, null, pt._("Ok, looking for people now...", null, {
						hk: "2fr3Y9"
					})), u.a.createElement(ft, null, pt._("You’ll be redirected to your chat room shortly.", null, {
						hk: "4tpnrt"
					})), u.a.createElement(yt, {
						src: "".concat(M.a.assetPath, "/img/magnifying-glass-snoo.png")
					})), u.a.createElement(vt, null, u.a.createElement(dt.i, {
						onClick: this.onCloseButtonClick
					}, pt._("Sounds good", null, {
						hk: "1OMLn5"
					}))), u.a.createElement(bt, {
						onClick: this.onCloseButtonClick
					}, u.a.createElement(ht, null)))
				}
			}
			var Et = Object(m.b)(Pt, e => ({
					modalToggled: t => e(Object(T.i)(t))
				}))(Object(ct.a)(Object(U.c)(xt))),
				jt = n("./src/lib/loadWithRetries/index.ts");
			const St = () => null;
			var _t = Object(ot.a)({
					ErrorComponent: St,
					getComponent: () => Object(jt.a)(() => n.e("ManageChatRoomsModal").then(n.bind(null, "./src/reddit/components/ManageChatRoomsModal/_ManageChatRoomsModal.tsx"))).then(e => e.default),
					LoadingComponent: St
				}),
				kt = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var wt = Object(ot.a)({
				getComponent: () => Object(jt.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const It = () => null;
			var Mt = Object(ot.a)({
					ErrorComponent: It,
					getComponent: () => Object(jt.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: It
				}),
				Nt = n("./src/reddit/actions/structuredStyles/index.ts"),
				Tt = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Rt = n("./src/reddit/controls/TextButton/index.tsx"),
				At = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: Lt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ft = Object(m.b)(null, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					closeModal: () => {
						e(Object(T.i)(q.a.BLADE_NIGHTMODE)), e(Object(Nt.f)())
					},
					openBlade: () => {
						e(Object(Nt.e)(n))
					}
				}
			});
			var Dt = Object(ct.a)(Ft(e => u.a.createElement(Tt.d, null, u.a.createElement(Tt.h, null, u.a.createElement(At.a, null, u.a.createElement(Tt.p, null, Lt._("Turning off Night Mode", null, {
					hk: "2XW7Rk"
				})), u.a.createElement(Rt.a, {
					onClick: e.closeModal
				}, u.a.createElement(Tt.b, null)))), u.a.createElement(Tt.k, null, u.a.createElement(Tt.n, null, Lt._("In order to continue styling your community, Night Mode must be turned off.", null, {
					hk: "2qLSfr"
				}))), u.a.createElement(Tt.f, null, u.a.createElement(Tt.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, Lt._("Cancel", null, {
					hk: "2TSLl5"
				})), u.a.createElement(Tt.q, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, Lt._("Continue", null, {
					hk: "413jMZ"
				})))))),
				Gt = n("./src/reddit/actions/authorFlair.ts"),
				Ut = n("./src/reddit/actions/userFlair.ts"),
				Bt = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				Ht = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				Wt = n("./src/reddit/components/FlairPreview/index.tsx"),
				qt = n("./src/reddit/components/FlairSearch/index.tsx"),
				Vt = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				Qt = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				zt = n("./src/reddit/layout/row/Inline/index.tsx"),
				Kt = n("./src/reddit/models/Flair/index.ts"),
				Yt = n("./src/reddit/models/User/index.ts"),
				Xt = n("./src/reddit/selectors/authorFlair.ts"),
				Jt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Zt = n("./src/reddit/selectors/userFlair.ts"),
				$t = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				en = n.n($t);
			const tn = e => e.inContextAuthor && e.currentUser && Object(Yt.e)(e.currentUser) === e.inContextAuthor.username,
				nn = e => e.authorFlair || tn(e) && e.userFlairData.applied || null,
				sn = I.a.wrapped(zt.a, "Section", en.a),
				rn = I.a.div("CheckboxText", en.a);
			class on extends u.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(K.subredditById)(t, this.props.subredditId)
					})), this.setSelectedFlair = e => this.setState({
						previewFlair: e
					}), this.onApply = () => {
						const {
							props: e,
							state: t
						} = this, n = t.previewFlair ? t.previewFlair.templateId : void 0;
						e.activeFlairChanged(t.previewFlair, n, t.showFlair, e.inContextAuthor), e.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.onToggleShowFlair = () => {
						this.setState({
							showFlair: !this.state.showFlair
						})
					}, this.state = {
						previewFlair: nn(e),
						showFlair: e.userFlairData.displaySettings.isUserEnabled
					}
				}
				canSave() {
					const {
						userFlairData: e
					} = this.props, {
						previewFlair: t
					} = this.state, {
						templates: n,
						permissions: s
					} = e, {
						isUserEnabled: r
					} = e.displaySettings, o = this.state.showFlair !== r, a = nn(this.props);
					if (!s.canUserChange) return o;
					const {
						canSave: i,
						reason: c
					} = Object(Vt.b)(n, t, a);
					return !(i || c !== Vt.a.NoChanges || !o) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: r
					} = e, o = n.permissions.canUserChange, a = n.permissions.canUserChange, {
						templates: i,
						templateIds: c
					} = n, d = this.canSave(), l = tn(e);
					return u.a.createElement(Ht.a, null, u.a.createElement(Bt.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), u.a.createElement(Wt.a, {
						flair: t.previewFlair,
						flairTemplateType: Kt.d.UserFlair,
						placeholderText: s.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), a && u.a.createElement(qt.a, {
						flair: t.previewFlair,
						flairTemplateType: Kt.d.UserFlair,
						subredditId: r,
						templates: i,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), l && u.a.createElement(sn, null, u.a.createElement(Qt.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: u.a.createElement(rn, null, s.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), u.a.createElement("div", {
						className: en.a.buttonsRow
					}, u.a.createElement(dt.i, {
						disabled: !d,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "ZvO9n"
					})), o && u.a.createElement(dt.l, {
						className: en.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "23i2at"
					}))))
				}
			}
			const an = Object(m.b)(() => Object(h.c)({
				authorFlair: Xt.b,
				currentUser: oe.i,
				inContextAuthor: Xt.c,
				isMod: (e, t) => !!Object(Jt.j)(e, t),
				userFlairData: Zt.c
			}), (e, t) => ({
				activeFlairChanged: (n, s, r, o) => e(Object(Ut.o)(n, s, r, o.username, t.subredditId)),
				closeModal: () => e(Object(Gt.b)({
					username: null,
					subredditId: null
				}))
			}))(on);
			var cn = Object(ct.a)(Object(U.c)(an)),
				dn = n("./src/reddit/selectors/notificationPrefs.ts"),
				ln = n("./src/reddit/selectors/platform.ts"),
				un = n("./src/reddit/selectors/removalReasons.ts"),
				mn = n("./src/reddit/selectors/subredditModeration.ts"),
				pn = n("./src/reddit/constants/cookie.ts"),
				bn = n("./src/reddit/featureFlags/index.ts"),
				hn = n("./src/reddit/helpers/localStorage/index.ts"),
				gn = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const fn = Object(h.c)({
				activeModalId: lt.a,
				anyModalIsOpen: e => !!e.activeModalId,
				authorContext: Xt.c,
				badgePurchaseModalIsOpen: Object(lt.b)(q.a.BADGE_PURCHASE),
				banContext: mn.f,
				banModalIsOpen: Object(lt.b)(q.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(lt.b)(q.a.BLADE_NIGHTMODE),
				chatroomSettingsModalIsOpen: Object(lt.b)(q.a.SUBREDDIT_CHAT_SETTINGS),
				createChatroomModalIsOpen: Object(lt.b)(q.a.CREATE_SUBREDDIT_CHAT),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				editChatroomModalIsOpen: Object(lt.b)(q.a.EDIT_SUBREDDIT_CHAT),
				deleteChatroomModalIsOpen: Object(lt.b)(q.a.DELETE_SUBREDDIT_CHAT),
				downToChatPendingModalIsOpen: Object(lt.b)(q.a.DOWN_TO_CHAT_PENDING_MODAL),
				introModalFeatureEnabled: e => bn.d.introModal(e),
				isOverlayOpen: ln.i,
				manageChatroomModalIsOpen: Object(lt.b)(q.a.MANAGE_SUBREDDIT_CHAT),
				moderatorPermissions: e => {
					const t = Object(ln.d)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: mn.C,
				muteModalIsOpen: Object(lt.b)(q.a.MUTE_USER),
				notificationsPrePromptIsOpen: dn.c,
				removalReasonContext: un.b,
				removalReasonModalIsOpen: Object(lt.b)(q.a.ADD_REMOVAL_REASON),
				subredditId: ln.d,
				userFlairModalIsOpen: Object(lt.b)(q.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: oe.v,
				userInRedesignBeta: oe.C,
				userIsLoggedIn: oe.I,
				userIsMod: oe.J,
				userIsNew: oe.L
			});
			class vn extends u.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(rt.a)()) return; {
						const e = st.a.get(pn.a);
						e && st.a.remove(pn.a, {
							domain: M.a.cookieDomain
						});
						const t = Object(hn.s)(q.a.ALPHA_CONSUMER);
						t && Object(hn.J)(q.a.ALPHA_CONSUMER), (e || t) && Object(hn.eb)(q.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(hn.s)(q.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(hn.eb)(q.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), q.b.includes(this.props.activeModalId || "") || (this.props.anyModalIsOpen ? setTimeout(() => Object(gn.a)(), 500) : setTimeout(() => Object(gn.b)(), 500))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: r,
						chatroomSettingsModalIsOpen: o,
						createChatroomModalIsOpen: a,
						currentBadgePurchase: i,
						editChatroomModalIsOpen: c,
						deleteChatroomModalIsOpen: d,
						downToChatPendingModalIsOpen: m,
						manageChatroomModalIsOpen: p,
						muteContext: b,
						muteModalIsOpen: h,
						notificationsPrePromptIsOpen: g,
						removalReasonContext: f,
						removalReasonModalIsOpen: v,
						sendEvent: O,
						subredditId: y,
						toggleBanModal: C,
						toggleMuteModal: P,
						toggleRemovalReasonsModal: x,
						userFlairModalIsOpen: E
					} = this.props, j = (e, t, n) => s => () => O(r => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(K.comment)(r, n),
						post: n && Object(K.post)(r, n),
						screen: Object(K.screen)(r),
						subreddit: Object(K.subredditById)(r, t)
					}));
					return u.a.createElement(l.Fragment, null, s && n && u.a.createElement(it.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: C,
						trackAddEvent: j("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: j("banned", n.subredditId, n.contextId),
						username: n.username
					}), h && b && u.a.createElement(kt.a, {
						contextId: b.contextId,
						subredditId: b.subredditId,
						toggleModal: P,
						trackAddEvent: j("muted", b.subredditId, b.contextId)("add_in_context"),
						username: b.username
					}), (a || p || d || c || o) && y && u.a.createElement(_t, {
						subredditId: y,
						withOverlay: !0
					}), v && f && u.a.createElement(Mt, {
						itemIds: f.itemIds,
						subredditId: f.subredditId,
						toggleModal: x,
						trackClick: j("removal_reasons", f.subredditId, 1 === f.itemIds.length ? f.itemIds[0] : void 0)
					}), r && y && u.a.createElement(Dt, {
						subredditId: y
					}), E && e && e.subredditId && u.a.createElement(cn, {
						subredditId: e.subredditId
					}), t && i && u.a.createElement(at, {
						withOverlay: !0,
						productId: i
					}), g && u.a.createElement(wt, null), m && u.a.createElement(Et, {
						withOverlay: !0
					}))
				}
			}
			var On = Object(m.b)(fn, e => ({
					markRedesignModalAsClosed: () => e(Object(T.j)()),
					toggleBanModal: () => e(Object(T.i)(q.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(T.i)(q.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(T.i)(q.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(T.i)(q.a.ADD_REMOVAL_REASON))
				}))(Object(U.c)(vn)),
				yn = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Cn = n("./src/reddit/constants/experiments.ts"),
				Pn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				xn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				En = n("./src/reddit/selectors/responsiveSettings.ts"),
				jn = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Sn = n.n(jn);
			const _n = I.a.div("Overlay", Sn.a),
				kn = I.a.div("IframeContainer", Sn.a),
				wn = {},
				In = Object(Pn.t)(),
				Mn = Object(h.c)({
					frontpageSignupVariant: re.a,
					isResponsiveSettingsEnabled: En.a
				}),
				Nn = {
					[B.c.ChangePassword]: q.a.CHANGE_PASSWORD_MODAL_ID,
					[B.c.Index]: q.a.LOGIN_MODAL_ID,
					[B.c.Register]: q.a.REGISTER_MODAL_ID,
					[B.c.EnableTwoFactor]: q.a.ENABLE_TWO_FACTOR,
					[B.c.DisableTwoFactor]: q.a.DISABLE_TWO_FACTOR,
					[B.c.TwoFactorBackupCodes]: q.a.TWO_FACTOR_BACKUP_CODES,
					[B.c.LinkAppleSSO]: q.a.LINK_APPLE_SSO,
					[B.c.UnlinkAppleSSO]: q.a.UNLINK_APPLE_SSO,
					[B.c.LinkGoogleSSO]: q.a.LINK_GOOGLE_SSO,
					[B.c.UnlinkGoogleSSO]: q.a.UNLINK_GOOGLE_SSO,
					[B.c.GoogleOneTap]: q.a.GOOGLE_ONE_TAP_MODAL_ID
				};
			class Tn extends u.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === B.c.Register && Object(re.f)(this.props.frontpageSignupVariant) && xn.a.throttleFeature(Cn.X), this.props.sendEvent(X(this.subscriptions))
					}, this.resizeContainer = e => {
						this.setState({
							containerSize: e
						})
					}, this.restoreContainerSize = () => {
						this.setState({
							containerSize: null
						})
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}, this.handleSSOLinkActionFail = () => {
						this.setState({
							isSSOLinkActionFailedModal: !0
						})
					}, this.restoreIFrameStyles = () => {
						this.setState({
							removeGoogleOneTapStyles: !0,
							removeHiddenOverlay: !0
						})
					}, this.onGoogleOneTapSkipped = e => {
						"user_cancel" === e && this.props.sendEvent(J())
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Z())
					}, this.onShowScreen = e => {
						const {
							path: t
						} = this.props, n = t === B.c.Index || t === B.c.Register, s = t === B.c.GoogleOneTap;
						e === B.b.SelectAccount ? n ? this.resizeContainer({
							height: 474,
							width: 416
						}) : s && this.setState({
							removeHiddenOverlay: !0
						}) : e === B.b.Subscribe ? (n && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === B.b.Email || e === B.b.UsernameAndPassword ? n && this.restoreContainerSize() : e !== B.b.EmailOptIn && e !== B.b.GoogleUI || this.setState({
							removeHiddenOverlay: !1
						})
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						isResponsiveSettingsEnabled: t,
						pageLayer: n,
						path: s
					} = this.props, {
						containerSize: r,
						isSSOLinkActionFailedModal: o,
						removeGoogleOneTapStyles: a,
						removeHiddenOverlay: i
					} = this.state, c = Object(re.c)(e) || Object(re.d)(e), d = s === B.c.LinkAppleSSO || s === B.c.LinkGoogleSSO || s === B.c.UnlinkAppleSSO || s === B.c.UnlinkGoogleSSO, l = s === B.c.GoogleOneTap, m = Object(g.a)({
						[Sn.a.small]: c,
						[Sn.a.ssoConfirmPassword]: d,
						[Sn.a.linkActionSSOFail]: o,
						[Sn.a.mResponsive]: t,
						[Sn.a.mGoogleOneTap]: l && !a
					}), p = Object(g.a)({
						[Sn.a.mGoogleOneTap]: l && !a,
						[Sn.a.mHiddenOverlay]: l && !i
					}), b = !c && !o && !t;
					return u.a.createElement(_n, {
						className: p
					}, u.a.createElement(kn, {
						className: m,
						style: r || wn
					}, u.a.createElement(fe, {
						onChange: this.restoreContainerSize,
						onClose: this.closeModal,
						onGoogleOneTapSkipped: this.onGoogleOneTapSkipped,
						onGoogleOneTapUIViewed: this.onGoogleOneTapUIViewed,
						onShowScreen: this.onShowScreen,
						onSSOLinkActionFail: this.handleSSOLinkActionFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						pageLayer: n,
						path: s,
						showCloseButton: b
					})))
				}
			}
			const Rn = In(Object(m.b)(Mn, (e, t) => ({
				closeModal: t => {
					e(Object(T.g)(Nn[t]))
				}
			}))(Object(U.c)(Tn)));
			Object(yn.b)(q.a.CHANGE_PASSWORD_MODAL_ID, e => u.a.createElement(Rn, {
				path: B.c.ChangePassword
			})), Object(yn.b)(q.a.LOGIN_MODAL_ID, e => u.a.createElement(Rn, {
				path: B.c.Index
			})), Object(yn.b)(q.a.ENABLE_TWO_FACTOR, e => u.a.createElement(Rn, {
				path: B.c.EnableTwoFactor
			})), Object(yn.b)(q.a.DISABLE_TWO_FACTOR, e => u.a.createElement(Rn, {
				path: B.c.DisableTwoFactor
			})), Object(yn.b)(q.a.TWO_FACTOR_BACKUP_CODES, e => u.a.createElement(Rn, {
				path: B.c.TwoFactorBackupCodes
			})), Object(yn.b)(q.a.REGISTER_MODAL_ID, e => u.a.createElement(Rn, {
				path: B.c.Register
			})), Object(yn.b)(q.a.LINK_APPLE_SSO, e => u.a.createElement(Rn, {
				path: B.c.LinkAppleSSO
			})), Object(yn.b)(q.a.LINK_GOOGLE_SSO, e => u.a.createElement(Rn, {
				path: B.c.LinkGoogleSSO
			})), Object(yn.b)(q.a.UNLINK_APPLE_SSO, e => u.a.createElement(Rn, {
				path: B.c.UnlinkAppleSSO
			})), Object(yn.b)(q.a.UNLINK_GOOGLE_SSO, e => u.a.createElement(Rn, {
				path: B.c.UnlinkGoogleSSO
			})), Object(yn.b)(q.a.GOOGLE_ONE_TAP_MODAL_ID, e => u.a.createElement(Rn, {
				path: B.c.GoogleOneTap
			}));
			const An = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("BadgePickerModal").then(n.bind(null, "./src/reddit/components/Badges/PickerModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.BADGE_PICKER, e => u.a.createElement(An, {
				withOverlay: !0
			}));
			var Ln = n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const Fn = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.CONTRIBUTOR_REQUEST_PENDING, e => u.a.createElement(Fn, {
				withOverlay: !0
			}));
			const Dn = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.CONTRIBUTOR_REQUEST, e => u.a.createElement(Dn, {
				withOverlay: !0
			}));
			const Gn = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), n.e("CrowdControlModal")]).then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.CROWD_CONTROL, e => u.a.createElement(Gn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Un = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(jt.a)(() => n.e("EconPowerupsMarketingModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx"))).then(e => e.default)
			});
			Object(yn.b)(q.a.ECON_POWERUPS_MARKETING, e => u.a.createElement(Un, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var Bn = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const Hn = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(jt.a)(() => Promise.all([Promise.all([n.e("vendors~CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal~UpdateCardModal"), n.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), n.e("EconPowerupsPurchaseModal")]).then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(Bn.d)()])).then(e => e[0].default)
			});
			Object(yn.b)(q.a.ECON_POWERUPS_PURCHASE, e => u.a.createElement(Hn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const Wn = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~EconHelperActions~SubredditPremiumBadgeManagement~reddit-components-Econ-Prediction"), n.e("SubredditPremiumBadgeManagement")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => u.a.createElement(Wn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const qn = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => u.a.createElement(qn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Vn = Object(ot.a)({
					getComponent: () => Object(jt.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Qn = e => () => {
					e()
				};
			Object(yn.b)(q.a.GOLD_GILD_MODAL, e => u.a.createElement(Vn, {
				onOverlayClick: Qn(e),
				withOverlay: !0
			}));
			var zn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				Kn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				Yn = n.n(Kn);
			const Xn = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = zn.SPARKLE_ASSET_PATH, document.createElement("img").src = zn.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(yn.b)(q.a.GOLD_GILD_ANIMATION_OVERLAY, e => u.a.createElement(Xn, {
				withOverlay: !0,
				className: Yn.a.modalBody,
				overlayClassName: Yn.a.modalOverlay
			}));
			const Jn = Object(ot.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				Zn = e => () => {
					e()
				};
			Object(yn.b)(q.a.GOLD_TARGETED_OFFER_MODAL, e => u.a.createElement(Jn, {
				onOverlayClick: Zn(e),
				withOverlay: !0
			}));
			const $n = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.HARBERGER_TAX_BANNER_MANAGE, e => u.a.createElement($n, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const es = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.HARBERGER_TAX_BANNER_PURCHASE, e => u.a.createElement(es, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ts = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => u.a.createElement(ts, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ns = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => u.a.createElement(ns, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ss = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~GovernanceReleaseNotesModal"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.GOVERNANCE_RELEASE_NOTES, e => u.a.createElement(ss, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const rs = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~GovernanceTransferPointsModal~reddit-components-Governance-TransactionModals-ClaimPointsModa~b2d0d5d1"), n.e("GovernanceTransferPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.TRANSFER_POINTS, e => u.a.createElement(rs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const os = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.WALLET_REGISTRATION_MODAL, e => u.a.createElement(os, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const as = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.MOD_TO_MEMBER_SHARE, e => u.a.createElement(as, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const is = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.MULTIREDDIT_ADD_SUBREDDIT, e => u.a.createElement(is, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const cs = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.MULTIREDDIT_CREATE, e => u.a.createElement(cs, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(yn.b)(q.a.MULTIREDDIT_DUPLICATE, e => u.a.createElement(cs, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ds = Object(ot.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(yn.b)(q.a.MULTIREDDIT_EDIT, e => u.a.createElement(ds, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ls = () => null,
				us = Object(ot.a)({
					ErrorComponent: ls,
					getComponent: () => Object(jt.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: ls
				});
			Object(yn.b)(q.a.PINNED_POSTS_LIMIT_REACHED, e => u.a.createElement(us, null));
			var ms = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				ps = n.n(ms);
			const {
				fbt: bs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), hs = I.a.h2("ColumnLabel", ps.a), gs = I.a.wrapped(zt.a, "ColumnWrapper", ps.a), fs = I.a.div("Column", ps.a), vs = I.a.div("Description", ps.a), Os = I.a.div("Key", ps.a), ys = I.a.wrapped(Tt.k, "ModalMain", ps.a), Cs = I.a.wrapped(Tt.d, "ModalBody", ps.a), Ps = I.a.wrapped(dt.i, "PrimaryButton", ps.a), xs = I.a.wrapped(Rt.a, "TextButton", ps.a), Es = Object(m.b)(null, e => ({
				closeModal: () => e(Object(T.i)(q.a.KEYBOARD_SHORTCUTS))
			})), js = I.a.wrapped(Object(ct.a)(Es(e => u.a.createElement(Cs, {
				onClick: e => e.stopPropagation()
			}, u.a.createElement(Tt.h, null, u.a.createElement(At.a, null, u.a.createElement(Tt.p, null, bs._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), u.a.createElement(xs, {
				onClick: e.closeModal
			}, u.a.createElement(Tt.b, null)))), u.a.createElement(ys, null, u.a.createElement(gs, null, u.a.createElement(fs, null, u.a.createElement(zt.a, null, u.a.createElement(hs, null, bs._("Navigation", null, {
				hk: "3zSWEe"
			}))), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), u.a.createElement(Os, null, "Shift + ?")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Next post or comment", null, {
				hk: "1m8s9z"
			})), u.a.createElement(Os, null, "J")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), u.a.createElement(Os, null, "K")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), u.a.createElement(Os, null, "N")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), u.a.createElement(Os, null, "P")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Open post", null, {
				hk: "2wD7mh"
			})), u.a.createElement(Os, null, "Enter")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Open/close expando", null, {
				hk: "1yDst0"
			})), u.a.createElement(Os, null, "X")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Go to post link", null, {
				hk: "c0TNr"
			})), u.a.createElement(Os, null, "L"))), u.a.createElement(fs, null, u.a.createElement(zt.a, null, u.a.createElement(hs, null, bs._("Action", null, {
				hk: "3QI6pT"
			}))), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Upvote", null, {
				hk: "5i9NP"
			})), u.a.createElement(Os, null, "A")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Downvote", null, {
				hk: "1ef3YP"
			})), u.a.createElement(Os, null, "Z")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("New post", null, {
				hk: "4dtNWf"
			})), u.a.createElement(Os, null, "C")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Reply to comment", null, {
				hk: "G8AbT"
			})), u.a.createElement(Os, null, "R")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Submit comment/post", null, {
				hk: "13agk7"
			})), u.a.createElement(Os, null, "Ctrl + Enter")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Save", null, {
				hk: "3Dtwo5"
			})), u.a.createElement(Os, null, "S")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Hide", null, {
				hk: "2Dn9GF"
			})), u.a.createElement(Os, null, "H")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Open navigation", null, {
				hk: "QdGe2"
			})), u.a.createElement(Os, null, "Q")), u.a.createElement(zt.a, null, u.a.createElement(vs, null, bs._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), u.a.createElement(Os, null, "Enter"))))), u.a.createElement(Tt.f, null, u.a.createElement(Ps, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, bs._("Close", null, {
				hk: "4gbyAA"
			})))))), "ConnectedModal", ps.a);
			Object(yn.b)(q.a.KEYBOARD_SHORTCUTS, e => u.a.createElement(js, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ss = Object(ot.a)({
					getComponent: () => Object(jt.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				_s = e => () => {
					e()
				};
			Object(yn.b)(q.a.SNOOVATAR_MODAL, e => u.a.createElement(Ss, {
				onOverlayClick: _s(e),
				withOverlay: !0
			}));
			const {
				fbt: ks
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ws = Object(h.c)({
				allowNavigationCallback: ln.a
			}), Is = Object(m.b)(ws, e => ({
				closeModal: () => e(Object(T.i)(q.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Nt.a)())
			}));
			class Ms extends u.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return u.a.createElement(Tt.d, null, u.a.createElement(Tt.h, null, u.a.createElement(At.a, null, u.a.createElement(Tt.p, null, ks._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), u.a.createElement(Rt.a, {
						onClick: this.onCancelClick
					}, u.a.createElement(Tt.b, null)))), u.a.createElement(Tt.k, null, u.a.createElement(Tt.o, null, ks._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), u.a.createElement(Tt.f, null, u.a.createElement(Tt.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, ks._("Cancel", null, {
						hk: "2TSLl5"
					})), u.a.createElement(Tt.q, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, ks._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const Ns = Object(ct.a)(Is(Ms));
			Object(yn.b)(q.a.BLADE_UNSAVED_CHANGES, e => u.a.createElement(Ns, {
				withOverlay: !0
			}));
			const Ts = Object(h.c)({
					activeModalId: lt.a
				}),
				Rs = Object(m.b)(Ts, e => ({
					toggleModal: t => e(Object(T.i)(t))
				})),
				As = 500,
				Ls = () => {};
			class Fs extends u.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					q.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(gn.a)(), As) : setTimeout(() => Object(gn.b)(), As))
				}
				componentWillUnmount() {
					Object(gn.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(yn.a)(e)(e ? this.toggleModal : Ls)
				}
			}
			var Ds, Gs = Rs(Fs),
				Us = (n("./node_modules/core-js/modules/es6.regexp.search.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				Bs = n("./src/reddit/actions/page.ts"),
				Hs = n("./src/reddit/actions/shortcuts/utils.ts"),
				Ws = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				qs = n("./src/reddit/icons/svgs/Pinmenu/index.tsx"),
				Vs = n("./src/reddit/selectors/header.ts"),
				Qs = n("./src/reddit/selectors/userPrefs.ts"),
				zs = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx")),
				Ks = n("./src/reddit/components/SEOTitle/index.tsx"),
				Ys = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Xs = n("./src/reddit/components/UserIcon/index.tsx"),
				Js = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				Zs = n("./src/reddit/icons/svgs/All/index.tsx"),
				$s = n("./src/reddit/icons/svgs/Browse/index.tsx"),
				er = n("./src/reddit/icons/svgs/Coin/index.tsx"),
				tr = n("./src/reddit/icons/svgs/Envelope/index.tsx"),
				nr = n("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				sr = n("./src/reddit/icons/svgs/Home/index.tsx"),
				rr = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				or = n("./src/reddit/icons/svgs/Multireddit/index.tsx"),
				ar = n("./src/reddit/icons/svgs/Notify/index.tsx"),
				ir = n("./src/reddit/icons/svgs/Popular/index.tsx"),
				cr = n("./src/reddit/icons/svgs/Post/index.tsx"),
				dr = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				lr = n("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				ur = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				mr = n.n(ur);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(Ds || (Ds = {}));
			const pr = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return u.a.createElement(u.a.Fragment, null, n && "".concat(n, "/"), s && u.a.createElement(Ks.b, {
					type: Ks.a.HeaderSelector
				}, s))
			};
			var br = n("./src/lib/objectSelector/index.ts"),
				hr = n("./src/reddit/constants/wiki.ts"),
				gr = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				fr = n("./src/reddit/selectors/subreddit.ts"),
				vr = n("./src/reddit/selectors/topic.ts");
			var Or = Object(br.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const s = !!e.user.account,
						r = Object(Pn.U)(n);
					switch (r) {
						case "index":
						case "listing":
							return s ? {
								type: Ds.Home
							} : {
								type: Ds.Popular
							};
						case "modListing":
							return {
								type: Ds.ModListing
							};
						case "modQueuePages":
							return {
								type: Ds.ModQueue
							};
						case "postCreation":
							return {
								type: Ds.CreatePost
							};
						case "postDraft":
							return {
								type: Ds.ViewDraft
							};
						case "subredditCreation":
							return {
								type: Ds.SubredditCreation
							};
						case "coins":
							return {
								type: Ds.Coins
							};
						case "premium":
							return {
								type: Ds.Premium
							};
						case "acknowledgements":
							return {
								type: Ds.Acknowledgements
							};
						case "appeal":
							return {
								type: Ds.Appeal
							};
						case "report":
							return {
								type: Ds.Report
							};
						case "userDataRequest":
							return {
								type: Ds.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: Ds.DailyCharts
							};
						case "geotagging":
							return {
								type: Ds.Geotagging
							};
						case "notificationsInbox":
							return {
								type: Ds.NotificationsInbox
							};
						case "topic": {
							const t = Object(Pn.s)(n),
								s = t && Object(vr.e)(e, t);
							if (s) return {
								type: Ds.Topic,
								model: s
							}
						}
					}
					const o = e.user.account;
					if (o) switch (r) {
						case "inboxPages":
							return {
								type: Ds.Inbox, model: o
							};
						case "settings":
							return {
								type: Ds.Settings, model: o
							}
					}
					const a = Object(Pn.O)(e, {
						pageLayer: n
					});
					if ("all" === a) return {
						type: Ds.All
					};
					if ("popular" === a) return {
						type: Ds.Popular
					};
					const i = Object(Pn.q)(e, {
						pageLayer: n
					});
					if (i) return "searchResults" === r ? {
						type: Ds.CommunitySearch,
						model: i
					} : {
						type: Ds.Community,
						model: i
					};
					const c = Object(Pn.d)(e, {
						pageLayer: n
					});
					if (c) return {
						type: Ds.Multi,
						model: c
					};
					const d = Object(Pn.j)(e, {
						pageLayer: n
					});
					if (d) return {
						type: Ds.UserProfile,
						model: d
					};
					const l = Object(Pn.h)(n);
					if (l) return {
						type: Ds.UserProfileName,
						name: "u/".concat(l)
					};
					if (r && "searchResults" === r) return {
						type: Ds.GlobalSearch
					};
					if ("subredditWiki" === r) {
						const t = Object(Pn.n)(e, {
								pageLayer: n
							}) || hr.e,
							s = Object(fr.B)(e, {
								subredditName: t
							});
						if (s) return {
							type: Ds.Community,
							model: s
						}
					}
					return "rpan" === r && Object(gr.a)(e) ? {
						type: Ds.PublicAccessNetwork
					} : {
						type: Ds.Unknown
					}
				}),
				yr = (n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/es6.regexp.constructor.js"), n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				Cr = n.n(yr);

			function Pr() {
				return (Pr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function xr(e) {
				const t = e.icon,
					n = e.text,
					s = {
						id: e.id,
						role: "menuitem",
						children: u.a.createElement(u.a.Fragment, null, u.a.createElement(t, {
							className: Cr.a.icon
						}), u.a.createElement(n, {
							className: Cr.a.text
						})),
						className: Object(g.a)(Cr.a.item, e.className, {
							[Cr.a.mFocused]: !!e.isFocused,
							[Cr.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return s["aria-label"] = e.to || e.label, e.to ? e.externalLink ? u.a.createElement("a", Pr({}, s, {
					href: e.to,
					target: "_blank"
				})) : u.a.createElement(Us.a, Pr({}, s, {
					to: e.to
				})) : u.a.createElement("button", s)
			}
			var Er = n("./src/reddit/helpers/overlay/index.ts"),
				jr = n("./src/reddit/routes/modListing/index.ts"),
				Sr = n("./src/reddit/helpers/chooseVariant/index.ts"),
				_r = n("./src/reddit/selectors/experiments/utils.ts");
			const kr = Object(h.a)(e => Object(Sr.c)(e, {
					experimentName: Cn.Kb,
					experimentEligibilitySelector: wr
				}), _r.a),
				wr = e => Object(oe.H)(e) || Object(oe.I)(e),
				Ir = Object(h.a)(kr, e => e === Cn.Mb.Redesign);
			var Mr = n("./src/reddit/selectors/multireddit.ts"),
				Nr = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				Tr = n("./src/lib/LinkedListMap/index.ts");
			const Rr = Object(h.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Mr.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Mr.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				isUserEnrolledInOldModmail: fr.p,
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched,
				trendingSubreddits: e => e.subreddits.trending.map(t => e.subreddits.models[t]).filter(Boolean)
			});
			var Ar;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Ar || (Ar = {}));
			const Lr = [e => ({
					id: Ds.Employee,
					type: Ar.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(sr.a, {
								className: Object(g.a)(t, mr.a.itemIcon)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, "Employee Communities")
						}
					},
					telemetryNoun: "employee"
				})],
				Fr = [e => ({
					id: Ds.All,
					type: Ar.GenericLink,
					model: {
						url: "/r/all/",
						displayText: s.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(Zs.a, {
								className: Object(g.a)(t, mr.a.itemIcon)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, s.fbt._("All", null, {
								hk: "2M8nEy"
							}))
						}
					},
					telemetryNoun: "all"
				}), e => ({
					id: Ds.DailyCharts,
					type: Ar.GenericLink,
					model: {
						url: "/subreddits/leaderboard/",
						displayText: s.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(nr.a, {
								className: Object(g.a)(t, mr.a.itemIcon)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, s.fbt._("Top Communities", null, {
								hk: "1KzP9v"
							}))
						}
					},
					telemetryNoun: "daily_charts"
				})],
				Dr = [e => ({
					id: "reddit-feeds",
					type: Ar.Header,
					model: {
						displayText: s.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), (e, t) => ({
					id: Ds.Home,
					type: Ar.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon(e) {
							let {
								className: n
							} = e;
							return u.a.createElement(sr.a, {
								className: Object(g.a)(n, mr.a.itemIcon),
								isBadged: t && t.isBadged
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, s.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: Ds.Popular,
					type: Ar.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(ir.a, {
								className: Object(g.a)(t, mr.a.itemIcon)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, s.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...Fr],
				Gr = [e => ({
					id: "reddit-feeds",
					type: Ar.Header,
					model: {
						displayText: s.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: Ds.Home,
					type: Ar.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(ir.a, {
								className: Object(g.a)(t, mr.a.itemIcon)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, s.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...Fr],
				Ur = [e => ({
					id: "reddit-other",
					type: Ar.Header,
					model: {
						displayText: s.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: Ds.Settings,
					type: Ar.GenericLink,
					model: {
						url: "/settings",
						displayText: s.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(Js.a, {
								className: Object(g.a)(mr.a.userIcon, t)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, s.fbt._("User Settings", null, {
								hk: "36WFGd"
							}))
						}
					},
					telemetryNoun: "settings"
				}), e => ({
					id: Ds.Inbox,
					type: Ar.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: s.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(Js.a, {
								className: Object(g.a)(mr.a.userIcon, t)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, s.fbt._("Messages", null, {
								hk: "43DUrY"
							}))
						}
					},
					telemetryNoun: "mail"
				}), e => ({
					id: Ds.CreatePost,
					type: Ar.GenericLink,
					model: {
						url: "/submit",
						displayText: s.fbt._("Create Post", null, {
							hk: "dGck6"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(cr.a, {
								className: Object(g.a)(t, mr.a.itemIcon)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, s.fbt._("Create Post", null, {
								hk: "dGck6"
							}))
						}
					},
					telemetryNoun: "create_post"
				})],
				Br = [e => ({
					id: Ds.Coins,
					type: Ar.GenericLink,
					model: {
						url: "/coins",
						displayText: s.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(er.a, {
								className: Object(g.a)(t, mr.a.itemCoin)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, s.fbt._("Coins", null, {
								hk: "ZFvDU"
							}))
						}
					},
					telemetryNoun: "coins"
				}), e => ({
					id: Ds.Premium,
					type: Ar.GenericLink,
					model: {
						url: "/premium",
						displayText: s.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(dr.a, {
								className: Object(g.a)(t, mr.a.itemPremium)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, s.fbt._("Premium", null, {
								hk: "3i2C4T"
							}))
						}
					},
					telemetryNoun: "premium"
				})],
				Hr = [e => ({
					id: Ds.ModQueue,
					type: Ar.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: s.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(rr.a, {
								className: Object(g.a)(t, mr.a.itemModQueue)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, s.fbt._("Mod Queue", null, {
								hk: "12pTAg"
							}))
						}
					},
					telemetryNoun: "mod_queue"
				}), (e, t) => {
					const n = !!(null == t ? void 0 : t.isUserEnrolledInOldModmail),
						r = n ? "/message/moderator" : "https://mod.reddit.com/mail/all",
						o = n ? "modmail" : "modmail_beta";
					return {
						id: Ds.ModMail,
						type: Ar.GenericLink,
						model: {
							url: r,
							displayText: s.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon(e) {
								let {
									className: t
								} = e;
								return u.a.createElement(tr.a, {
									className: Object(g.a)(t, mr.a.itemModQueue)
								})
							},
							text(e) {
								let {
									className: t
								} = e;
								return u.a.createElement("span", {
									className: t
								}, s.fbt._("Modmail", null, {
									hk: "2QQ3dU"
								}))
							}
						},
						telemetryNoun: o
					}
				}];

			function Wr(e, t) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Ar.Header,
					model: {
						displayText: s.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Ar.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Ar.Header,
					model: {
						displayText: s.fbt._("profiles", null, {
							hk: "bmbRq"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Ar.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			var qr = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				Vr = n.n(qr);

			function Qr(e) {
				return u.a.createElement("div", {
					className: Object(g.a)(Vr.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var zr = n("./src/reddit/actions/subscription/index.ts"),
				Kr = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				Yr = n("./src/reddit/icons/svgs/Favorite/index.tsx"),
				Xr = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				Jr = n.n(Xr);

			function Zr() {
				return (Zr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const $r = Object(h.c)({
					currentUser: oe.i,
					hideNSFWPref: oe.A,
					isLoggedIn: oe.I
				}),
				eo = Object(m.b)($r, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case Ar.Subreddit:
								e(Object(zr.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Ar.Profile:
								e(Object(zr.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Ar.Multi:
								e(Object(zr.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(Kr.f)(t.model.url)) : t.sendEvent(Object(Kr.c)(t.model.url))
						}
					}
				}));
			var to = Object(U.c)(eo((function(e) {
					const t = {
						className: Object(g.a)(Jr.a.item, e.className, {
							[Jr.a.mFocused]: !!e.isFocused
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
						case Ar.Subreddit:
							return u.a.createElement(Us.a, Zr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement(Ys.b, {
								className: Jr.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), u.a.createElement("span", {
								className: Jr.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, u.a.createElement(Yr.a, {
								className: Object(g.a)(Jr.a.favorite, {
									[Jr.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Ar.SubredditAutocomplete:
							return u.a.createElement(Us.a, Zr({}, t, {
								"aria-label": e.model.name,
								to: "/r/".concat(e.model.name, "/")
							}), u.a.createElement(Ys.b, {
								className: Jr.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), u.a.createElement("span", {
								className: Jr.a.text
							}, e.model.name));
						case Ar.Multi:
							return u.a.createElement(Us.a, Zr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement("img", {
								src: e.model.icon,
								className: Jr.a.customFeedIcon
							}), u.a.createElement("span", {
								className: Jr.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, u.a.createElement(Yr.a, {
								className: Object(g.a)(Jr.a.favorite, {
									[Jr.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Ar.Profile:
							return u.a.createElement(Us.a, Zr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement(Xs.a, {
								className: Jr.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), u.a.createElement("span", {
								className: Jr.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, u.a.createElement(Yr.a, {
								className: Object(g.a)(Jr.a.favorite, {
									[Jr.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				no = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				so = n.n(no);

			function ro(e) {
				return u.a.createElement("div", {
					className: e.className
				}, u.a.createElement("div", {
					className: so.a.header
				}), u.a.createElement("div", {
					className: so.a.item
				}), u.a.createElement("div", {
					className: so.a.item
				}), u.a.createElement("div", {
					className: so.a.item
				}), u.a.createElement("div", {
					className: so.a.item
				}))
			}
			var oo = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				ao = n("./src/reddit/actions/multireddit/index.ts"),
				io = n("./src/reddit/actions/subreddit.ts"),
				co = n("./src/reddit/constants/keycodes.ts"),
				lo = n("./src/reddit/helpers/correlationIdTracker.ts"),
				uo = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				mo = n.n(uo);

			function po() {
				return (po = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function bo(e) {
				return e.id === Ds.ModMail || e.id === Ds.CreateCommunity
			}

			function ho(e) {
				const t = new Tr.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Ar.Header && e.type !== Ar.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const go = Object(h.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const n = Rr(e),
							r = new Tr.a("id");
						if (n.account) {
							const o = n.account;
							if (Dr.forEach(e => r.push(e(o))), o.isEmployee && Lr.forEach(e => r.push(e(o))), Ir(e) && r.push({
									id: Ds.NotificationsInbox,
									type: Ar.GenericLink,
									model: {
										url: "/notifications",
										displayText: s.fbt._("Notifications", null, {
											hk: "2xenVO"
										}).toString(),
										icon: e => {
											let {
												className: t
											} = e;
											return u.a.createElement(ar.a, {
												className: Object(g.a)(t, mr.a.itemIcon)
											})
										},
										text: e => {
											let {
												className: t
											} = e;
											return u.a.createElement("span", {
												className: t
											}, s.fbt._("Notifications", null, {
												hk: "2xenVO"
											}))
										}
									},
									telemetryNoun: "inbox"
								}), Object(gr.a)(e) && r.push({
									id: Ds.PublicAccessNetwork,
									type: Ar.GenericClickable,
									model: {
										onClick: () => {
											t(Object(Er.a)(W.c[W.b.Rpan]))
										},
										displayText: s.fbt._("Reddit Public Access Network", null, {
											hk: "3p4s8f"
										}).toString(),
										icon(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(lr.a, {
												className: Object(g.a)(t, mr.a.itemPublicAccessNetwork)
											})
										},
										text(e) {
											let {
												className: t
											} = e;
											return u.a.createElement("span", {
												className: t
											}, s.fbt._("Reddit Public Access Network", null, {
												hk: "3p4s8f"
											}))
										}
									},
									telemetryNoun: "rpan"
								}), (n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (r.push({
									id: "header-favorites",
									type: Ar.Header,
									model: {
										displayText: s.fbt._("favorites", null, {
											hk: "4Gg0k2"
										}).toString()
									}
								}), n.favoriteSubreddits.forEach(e => r.push({
									id: "fav" + e.id,
									type: Ar.Subreddit,
									model: e,
									telemetryNoun: "community_favorite"
								})), n.favoriteProfiles.forEach(e => r.push({
									id: "fav" + e.id,
									type: Ar.Profile,
									model: e,
									telemetryNoun: "community_favorite"
								})), n.favoriteMultireddits.forEach(e => r.push({
									id: "fav" + e.url,
									type: Ar.Multi,
									model: e,
									telemetryNoun: "custom_feed"
								}))), n.multisPending ? r.push({
									id: "multis-pending",
									type: Ar.LoadingState,
									model: {
										displayText: ""
									}
								}) : n.multis.length > 0 && (r.push({
									id: "header-multis",
									type: Ar.Header,
									model: {
										displayText: s.fbt._("Custom feeds", null, {
											hk: "3K02MA"
										}).toString(),
										button(e) {
											let {
												className: n,
												sendClickEvent: s
											} = e;
											return u.a.createElement("button", {
												onClick: () => {
													t(Object(T.h)(q.a.MULTIREDDIT_CREATE)), s()
												},
												className: Object(g.a)(n, mr.a.multiPlusButton)
											}, u.a.createElement(Nr.a, {
												className: mr.a.multiPlusIcon
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), n.multis.forEach(e => r.push({
									id: e.url,
									type: Ar.Multi,
									model: e,
									telemetryNoun: "custom_feed"
								}))), n.moderatingSubredditsPending ? r.push({
									id: "moderatingSubreddits-pending",
									type: Ar.LoadingState,
									model: {
										displayText: ""
									}
								}) : n.moderatingSubreddits.length && (r.push({
									id: "header-moderating",
									type: Ar.Header,
									model: {
										displayText: s.fbt._("moderating subreddits", null, {
											hk: "2z4AZS"
										}).toString()
									}
								}), r.push({
									id: Ds.ModListing,
									type: Ar.GenericLink,
									model: {
										url: jr.a,
										displayText: "r/Mod",
										icon(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(rr.a, {
												className: Object(g.a)(t, mr.a.itemModQueue)
											})
										},
										text(e) {
											let {
												className: t
											} = e;
											return u.a.createElement("span", {
												className: t
											}, "r/Mod")
										}
									},
									telemetryNoun: "r_mod"
								}), n.moderatingSubreddits.forEach(e => r.push({
									id: "mod" + e.id,
									type: Ar.Subreddit,
									model: e,
									telemetryNoun: "community_moderate"
								}))), n.subscriptionsPending ? r.push({
									id: "subscriptions-pending",
									type: Ar.LoadingState,
									model: {
										displayText: ""
									}
								}) : Wr(r, n), Ur.forEach(e => r.push(e(o))), Object(oe.db)(e) && r.push({
									id: Ds.CreateCommunity,
									type: Ar.GenericLink,
									model: {
										url: "/subreddits/create",
										displayText: s.fbt._("Create Community", null, {
											hk: "41sjx"
										}).toString(),
										icon(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(cr.a, {
												className: Object(g.a)(t, mr.a.itemIcon)
											})
										},
										text(e) {
											let {
												className: t
											} = e;
											return u.a.createElement("span", {
												className: t
											}, s.fbt._("Create Community", null, {
												hk: "41sjx"
											}))
										}
									},
									telemetryNoun: "create_community"
								}), Br.forEach(e => r.push(e(o))), o.isMod) {
								const {
									isUserEnrolledInOldModmail: e
								} = n;
								Hr.forEach(t => r.push(t(o, {
									isUserEnrolledInOldModmail: e
								})))
							}
						} else n.subscriptions.length || Object(oe.I)(e) ? Dr.forEach(e => r.push(e(null))) : Gr.forEach(e => r.push(e(null))), r.push({
							id: "reddit-other",
							type: Ar.Header,
							model: {
								displayText: s.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), Br.forEach(e => r.push(e(null))), Wr(r, n);
						return r
					}
				}),
				fo = e => ({
					onHomeClicked: () => e(Object(Bs.x)()),
					onGotoUrl: t => e(Object(b.b)(t)),
					onSubredditsRequested: () => {
						e(Object(zr.e)()), e(Object(io.q)()), e(Object(ao.g)())
					},
					onActionDispatched: t => e(t)
				}),
				vo = (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), n), {
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Oo extends u.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = ho(n),
							r = s.first();
						this.setState({
							focusOrder: s,
							renderableList: n,
							currentInputText: e.currentTarget.value,
							focusedItemId: r ? r.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === co.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === co.b.Tab && this.props.onClose && this.props.onClose(), e.key === co.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Ar.Header && e.type !== Ar.LoadingState && (this.fireTelemetryForListItem(e), e.type === Ar.GenericClickable ? e.model.onClick() : bo(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === co.b.ArrowDown && (e.preventDefault(), this.setState(e => {
							const t = this.findNextFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById("focus-".concat(t));
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						})), e.key === co.b.ArrowUp && (e.preventDefault(), this.setState(e => {
							const t = this.findPrevFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById("focus-".concat(t));
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						}))
					}, this.fireTelemetryForListItem = e => {
						let t;
						switch (e.id) {
							case Ds.Coins:
							case Ds.Premium:
								Object(lo.d)(lo.a.GoldPayment, !0), t = Object(lo.c)(lo.a.GoldPayment)
						}
						switch (e.type) {
							case Ar.Category:
							case Ar.GenericLink:
							case Ar.GenericClickable:
							case Ar.Multi:
							case Ar.Profile:
							case Ar.Subreddit:
								this.props.sendEvent(n => Object.assign(Object.assign(Object.assign({}, Object(K.defaults)(n)), t ? {
									correlationId: t
								} : null), {
									customFeed: e.type === Ar.Multi ? Object(K.customFeedByPath)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Ar.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => Object.assign(Object.assign({}, Object(K.defaults)(e)), {
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
						focusOrder: ho(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = u.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = ho(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new Tr.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Ar.Category:
								case Ar.GenericLink:
								case Ar.Multi:
								case Ar.Profile:
								case Ar.Subreddit:
									e.model.displayText.match(s) && n.push(e);
									break;
								case Ar.Header: {
									const t = n.last();
									t && t.type === Ar.Header && n.pop(), n.push(e);
									break
								}
								case Ar.LoadingState:
							}
						});
						const r = n.last();
						return r && r.type === Ar.Header && n.pop(), n
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
					return u.a.createElement("div", {
						role: "menu",
						className: this.props.className
					}, u.a.createElement("div", {
						"aria-live": "assertive",
						"aria-label": t && t.model.displayText ? "".concat(t.model.displayText, " ").concat(s.fbt._("selected", null, {
							hk: "QqrSS"
						})) : ""
					}), u.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": s.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: mo.a.filter,
						id: "header-subreddit-filter",
						placeholder: s.fbt._("Filter", null, {
							hk: "oqdpz"
						}),
						onChange: this.onChange,
						onKeyDown: this.onKeyDown,
						ref: this.inputRef
					}), e.map((e, t) => {
						const n = {
							id: "focus-".concat(e.id),
							isFocused: this.state.focusedItemId === e.id,
							key: "subreddit-list-key-".concat(e.id),
							onFocus: () => this.onChangeFocusedListItemId(e.id),
							onMouseEnter: () => this.onChangeFocusedListItemId(e.id),
							onMouseLeave: () => this.onChangeFocusedListItemId(void 0),
							onClick: () => {
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === Ds.Home && this.props.onHomeClicked(), e.type === Ar.GenericClickable && e.model.onClick()
							}
						};
						switch (e.type) {
							case Ar.GenericClickable:
								return u.a.createElement(xr, po({}, n, {
									className: mo.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Ar.Category:
							case Ar.GenericLink:
								return u.a.createElement(xr, po({}, n, {
									externalLink: bo(e),
									className: mo.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Ar.Header: {
								const n = e.model.button;
								return u.a.createElement(Qr, {
									className: mo.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								}, e.model.displayText, n && u.a.createElement(n, {
									className: mo.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Ar.LoadingState:
								return u.a.createElement(ro, {
									className: mo.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								});
							case Ar.Multi:
								return u.a.createElement(to, po({}, n, {
									className: mo.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Ar.Multi
								}));
							case Ar.Profile:
								return u.a.createElement(to, po({}, n, {
									className: mo.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Ar.Profile
								}));
							case Ar.Subreddit:
								return u.a.createElement(to, po({}, n, {
									className: mo.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Ar.Subreddit
								}))
						}
					}))
				}
			}
			const yo = Object(m.b)(go, fo, vo)(Object(U.c)(Oo)),
				Co = Object(m.b)(go, fo, vo)(Object(U.c)(Object(oo.b)(Oo))),
				Po = Object(Pn.t)({
					isCommentsPage: Pn.w,
					pageLayer: e => e
				}),
				xo = Object(h.c)({
					currentPage: Or,
					hideNSFWPref: oe.A,
					isDropdownOpen: Vs.a,
					isLoggedIn: oe.I,
					isOverlayOpen: ln.i,
					isPinnedSubscriptionsMenuDisabled: Qs.a,
					isSubscriptionsPinned: Qs.b
				});
			class Eo extends u.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(Hs.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => Object.assign(Object.assign({}, Object(K.defaults)(e)), {
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
					return this.state.preventFocus !== t.preventFocus || (!(!this.props.isDropdownOpen && !e.isDropdownOpen) || (e.currentPage !== this.props.currentPage || e.isSubscriptionsPinned !== this.props.isSubscriptionsPinned))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					const {
						currentPage: e,
						className: t,
						hideNSFWPref: n,
						isCommentsPage: r,
						isLoggedIn: o,
						isOverlayOpen: a
					} = this.props, i = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, c = a || !o && r;
					return u.a.createElement("div", {
						"aria-label": s.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "2PXR4j"
						}),
						className: Object(g.a)(mr.a.container, t, {
							[mr.a.mOpen]: i,
							[mr.a.mNotPinned]: !this.props.isSubscriptionsPinned,
							[mr.a.mPinned]: this.props.isSubscriptionsPinned
						}),
						onClickCapture: this.stopPropagation,
						role: "navigation"
					}, u.a.createElement("button", {
						className: mr.a.selector,
						onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
						onFocus: this.onButtonFocus,
						tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
					}, u.a.createElement("span", {
						className: mr.a.containerText
					}, function(e) {
						switch (e.type) {
							case Ds.Acknowledgements:
								return pr(s.fbt._("Acknowledgements", null, {
									hk: "32JBVF"
								}).toString());
							case Ds.All:
								return pr(s.fbt._("All", null, {
									hk: "2gaHOy"
								}).toString());
							case Ds.Appeal:
								return pr(s.fbt._("Appeal", null, {
									hk: "2dMFkN"
								}).toString());
							case Ds.Coins:
								return pr(s.fbt._("Coins", null, {
									hk: "3ZpUbG"
								}).toString());
							case Ds.Community:
								return pr(e.model.displayText, !0);
							case Ds.CommunitySearch:
								return pr(s.fbt._("Subreddit Results", null, {
									hk: "19qRVH"
								}).toString());
							case Ds.CreateCommunity:
								return pr(s.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case Ds.CreatePost:
								return pr(s.fbt._("Create Post", null, {
									hk: "30V40V"
								}).toString());
							case Ds.DailyCharts:
								return pr(s.fbt._("Top Communities", null, {
									hk: "1sWIEu"
								}).toString());
							case Ds.GlobalSearch:
								return pr(s.fbt._("Search Results", null, {
									hk: "scJwR"
								}).toString());
							case Ds.Geotagging:
								return pr(s.fbt._("Help Out", null, {
									hk: "1RN9v2"
								}).toString());
							case Ds.Home:
								return pr(s.fbt._("Home", null, {
									hk: "amHQd"
								}).toString());
							case Ds.Inbox:
								return pr(s.fbt._("Messages", null, {
									hk: "25MBSp"
								}).toString());
							case Ds.ModListing:
								return pr("r/Mod");
							case Ds.ModMail:
								return pr(s.fbt._("Modmail", null, {
									hk: "of9AC"
								}).toString());
							case Ds.ModQueue:
								return pr(s.fbt._("Mod Queue", null, {
									hk: "3hdHhb"
								}).toString());
							case Ds.Multi:
								return pr(e.model.displayText, !0);
							case Ds.NotificationsInbox:
								return pr(s.fbt._("Notifications", null, {
									hk: "FiFRe"
								}).toString());
							case Ds.Popular:
								return pr(s.fbt._("Popular", null, {
									hk: "1rTNHl"
								}).toString());
							case Ds.Premium:
								return pr(s.fbt._("Premium", null, {
									hk: "x0xKv"
								}).toString());
							case Ds.PublicAccessNetwork:
								return pr(s.fbt._("Reddit Public Access Network", null, {
									hk: "3agn8V"
								}).toString());
							case Ds.Report:
								return pr(s.fbt._("Report", null, {
									hk: "4oVcnd"
								}).toString());
							case Ds.Settings:
								return pr(s.fbt._("User Settings", null, {
									hk: "hcLHW"
								}).toString());
							case Ds.SubredditCreation:
								return pr(s.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case Ds.Topic:
								return pr(e.model);
							case Ds.Unknown:
								return pr("");
							case Ds.UserDataRequest:
								return pr(s.fbt._("Request your Reddit data", null, {
									hk: "3LqHku"
								}).toString());
							case Ds.UserProfile:
								return pr(e.model.displayText, !0);
							case Ds.UserProfileName:
								return pr(e.name, !0);
							case Ds.ViewDraft:
								return pr(s.fbt._("View Draft", null, {
									hk: "3k2k9a"
								}).toString())
						}
					}(e)), function(e, t) {
						switch (e.type) {
							case Ds.Acknowledgements:
								return u.a.createElement(cr.a, {
									className: mr.a.defaultIcon
								});
							case Ds.All:
								return u.a.createElement(Zs.a, {
									className: mr.a.defaultIcon
								});
							case Ds.Appeal:
								return u.a.createElement(cr.a, {
									className: mr.a.defaultIcon
								});
							case Ds.Coins:
								return u.a.createElement(er.a, {
									className: mr.a.coinIcon
								});
							case Ds.Community:
							case Ds.CommunitySearch: {
								const n = Object(zs.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return u.a.createElement(Ys.b, {
									className: mr.a.subredditIcon,
									iconUrl: n.url,
									primaryColor: n.color
								})
							}
							case Ds.CreateCommunity:
							case Ds.CreatePost:
								return u.a.createElement(cr.a, {
									className: mr.a.defaultIcon
								});
							case Ds.DailyCharts:
								return u.a.createElement(nr.a, {
									className: mr.a.defaultIcon
								});
							case Ds.GlobalSearch:
								return u.a.createElement($s.a, {
									className: mr.a.defaultIcon
								});
							case Ds.Home:
								return u.a.createElement(sr.a, {
									className: mr.a.defaultIcon
								});
							case Ds.Inbox:
							case Ds.Settings:
								return u.a.createElement(Js.a, {
									className: Object(g.a)(mr.a.icon, mr.a.userIcon)
								});
							case Ds.ModListing:
								return u.a.createElement(rr.a, {
									className: mr.a.modQueueIcon
								});
							case Ds.SubredditCreation:
								return u.a.createElement(cr.a, {
									className: mr.a.defaultIcon
								});
							case Ds.ModMail:
								return u.a.createElement(tr.a, {
									className: mr.a.modQueueIcon
								});
							case Ds.ModQueue:
								return u.a.createElement(rr.a, {
									className: mr.a.modQueueIcon
								});
							case Ds.Multi:
								return u.a.createElement("img", {
									src: e.model.icon,
									className: mr.a.customFeedIcon
								});
							case Ds.NotificationsInbox:
								return u.a.createElement(ar.a, {
									className: mr.a.defaultIcon
								});
							case Ds.Popular:
								return u.a.createElement(ir.a, {
									className: mr.a.defaultIcon
								});
							case Ds.Premium:
								return u.a.createElement(dr.a, {
									className: mr.a.premiumIcon
								});
							case Ds.PublicAccessNetwork:
								return u.a.createElement(lr.a, {
									className: mr.a.publicAccessNetworkIcon
								});
							case Ds.Report:
								return u.a.createElement(cr.a, {
									className: mr.a.defaultIcon
								});
							case Ds.Unknown:
								return u.a.createElement("div", {
									className: mr.a.unknownIcon
								});
							case Ds.UserDataRequest:
								return u.a.createElement(cr.a, {
									className: mr.a.defaultIcon
								});
							case Ds.UserProfile: {
								const n = Object(zs.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return u.a.createElement(Xs.a, {
									className: Object(g.a)(mr.a.icon, mr.a.userIcon),
									iconUrl: n.url,
									isNSFW: e.model.isNSFW,
									userName: e.model.name
								})
							}
							case Ds.UserProfileName:
								return u.a.createElement("div", {
									className: mr.a.defaultIcon
								});
							case Ds.ViewDraft:
								return u.a.createElement(cr.a, {
									className: mr.a.defaultIcon
								});
							case Ds.Geotagging:
							case Ds.Topic:
								return u.a.createElement(or.a, {
									className: mr.a.defaultIcon
								})
						}
					}(e, n), !this.props.isSubscriptionsPinned && u.a.createElement(Ws.b, {
						className: mr.a.caretDown
					})), i && !this.props.isPinnedSubscriptionsMenuDisabled && u.a.createElement(qs.a, {
						className: Object(g.a)(mr.a.pin, {
							[mr.a.disabled]: c
						}),
						onClick: c ? void 0 : this.props.onPinSubscriptions
					}), i && u.a.createElement(Co, {
						canAutofocus: !0,
						className: mr.a.listContainer,
						onClose: this.close
					}))
				}
			}
			var jo = Po(Object(m.b)(xo, (e, t) => ({
					closeDropdown: () => e(Object(E.f)()),
					onLocationRefresh: (n, s) => e(Object(Bs.F)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(E.i)()), e(Object(E.f)())
					},
					openDropdown: () => e(Object(E.g)()),
					toggleDropdown: () => e(Object(E.h)())
				}), (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), n), {
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(U.c)(Eo))),
				So = n("./src/reddit/components/JumpToContent/index.tsx"),
				_o = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				ko = n("./node_modules/history/esm/history.js"),
				wo = n("./node_modules/lodash/debounce.js"),
				Io = n.n(wo),
				Mo = n("./node_modules/uuid/v4.js"),
				No = n.n(Mo),
				To = n("./src/lib/makeSearchKey/index.ts"),
				Ro = n("./src/reddit/actions/post.ts"),
				Ao = n("./src/reddit/actions/search.ts"),
				Lo = n("./src/reddit/actions/search/trending.ts"),
				Fo = n("./src/reddit/actions/tooltip.ts"),
				Do = n("./src/higherOrderComponents/asTooltip.tsx"),
				Go = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Uo = n("./src/lib/search/index.ts"),
				Bo = n("./src/reddit/models/Search/index.ts");
			var Ho = (e, t, n, s, r, o) => {
					let a, i;
					if ("" !== s.searchQuery) {
						if (s.isTypeaheadSuggestion) a = "/".concat(s.isProfile ? s.searchQuery.replace("u/", "user/") : s.searchQuery);
						else {
							if (i = "".concat(V.p, "=").concat(Object(Uo.b)(s.rawQuery || s.searchQuery)), a = "/search/", s.section !== Bo.c.trending && s.section !== Bo.c.recent || r && r.source && (i += "&source=".concat(r.source)), e && o ? (a = "/r/".concat(e.name).concat(a), i = "".concat(i, "&").concat(V.s, "=1")) : !e && s.subredditOrProfileRestrictedName && (a = "/".concat(s.subredditOrProfileRestrictedName).concat(a), i = "".concat(i, "&").concat(V.s, "=1")), t) {
								const e = t.url.split("/")[2];
								a = "/user/".concat(e, "/m/").concat(t.name).concat(a), i = "".concat(i, "&").concat(V.s, "=1&").concat(V.j, "=1")
							}
							r && r.category && (i = "".concat(i, "&").concat(V.b, "=").concat(r.category))
						}
						return {
							url: a,
							qs: i
						}
					}
				},
				Wo = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				qo = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				Vo = n("./src/reddit/icons/svgs/Search/index.tsx"),
				Qo = n("./src/reddit/components/SearchDropdown/index.m.less"),
				zo = n.n(Qo);
			const Ko = Object(m.b)(() => Object(h.c)({
					currentPage: ln.b
				})),
				Yo = Object(Pn.t)(),
				Xo = Object(Do.a)(Go.b);
			class Jo extends u.a.Component {
				constructor() {
					super(...arguments), this.onRecentSearchItemClick = () => {
						const {
							props: e
						} = this;
						e.recentSearch.isTypeaheadSuggestion ? e.onClearSearchQuery() : e.onUpdateSearchQuery(e.recentSearch.searchQuery), e.onSendSearchClickRecentEvent(e.recentSearch.searchQuery, e.recentSearch, e.indexOfItem)
					}, this.generateFullSearchQuery = e => e.subredditOrProfileRestrictedName ? "".concat(e.subredditOrProfileRestrictedName, " ").concat(e.searchQuery) : e.searchQuery
				}
				render() {
					const {
						props: e
					} = this, {
						activeTooltipId: t,
						className: n,
						currentPage: r,
						focusedItem: o,
						onRemoveRecentSearch: a,
						pageLayer: i,
						recentSearch: c,
						toggleTooltip: d
					} = e, l = Ho(null, null, null, c, {
						source: To.a.Recent
					}), m = l && l.url, p = l && l.qs, b = this.generateFullSearchQuery(c);
					let h;
					o && (h = this.generateFullSearchQuery(o));
					const f = r ? Object(K.getPageTypeFromCurrentPage)(r) : i ? Object(K.getPageTypeFromCurrentPage)(i) : void 0;
					return u.a.createElement(Us.a, {
						"aria-label": c.searchQuery,
						className: Object(g.a)(zo.a.listItem, Jr.a.item, n, {
							[zo.a.mFocused]: !(!o || o.section !== Bo.c.recent || h !== b)
						}),
						onClick: this.onRecentSearchItemClick,
						key: b,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: m || "",
							state: {
								[H.a.SearchOriginPage]: f
							},
							search: p
						}
					}, c.displayInfo && c.isTypeaheadSuggestion ? c.displayInfo.iconUrl ? u.a.createElement("div", {
						className: zo.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(c.displayInfo.iconUrl, "')")
						}
					}) : u.a.createElement(Wo.a, {
						className: zo.a.planetIcon
					}) : u.a.createElement(Vo.a, {
						className: Object(g.a)(zo.a.listItemIcon, Jr.a.icon)
					}), u.a.createElement("span", {
						className: Jr.a.text
					}, b), u.a.createElement("div", {
						onMouseEnter: () => d(b),
						onMouseLeave: () => d(null),
						id: b
					}, u.a.createElement(qo.a, {
						className: Object(g.a)(zo.a.listItemIcon, zo.a.mHoverable, Jr.a.icon),
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), a(c)
						}
					}), u.a.createElement(Xo, {
						className: zo.a.fixedTextTooltip,
						isOpen: t === b,
						text: s.fbt._("Remove", null, {
							hk: "2P57BY"
						}),
						tooltipId: b,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					})))
				}
			}
			var Zo = Yo(Ko(Jo)),
				$o = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				ea = n("./src/reddit/components/PostTitle/index.tsx"),
				ta = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				na = n("./src/reddit/constants/adEvents.ts"),
				sa = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				ra = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				oa = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				aa = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const ia = Object(m.b)(() => Object(h.c)({
				currentPage: ln.b
			}), e => ({
				trackTrendingSearchClick: t => e((e, n) => oa.E(n(), t, oa.a.SEARCH_DROPDOWN))
			}));
			class ca extends u.a.Component {
				constructor() {
					super(...arguments), this.transformTrendingToRecentSearch = () => {
						const e = this.props.trendingItem,
							{
								post: t,
								subredditInfo: n,
								subredditOccurrences: s
							} = e;
						return aa(e, ["post", "subredditInfo", "subredditOccurrences"])
					}, this.onTrendingItemClick = () => {
						const {
							props: e
						} = this;
						e.onUpdateSearchQuery(e.trendingItem.searchQuery);
						const t = this.transformTrendingToRecentSearch();
						if (e.onSetRecentSearch(t), Object(lo.d)(lo.a.SearchResults), e.trackTrendingSearchClick(e.trendingItem), this.isSponsored()) {
							const {
								post: e
							} = this.props.trendingItem;
							e && this.props.fireAdPixelsOfType(e, na.a.Click)
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
						currentPage: t,
						focusedItem: n,
						id: r,
						pageLayer: o,
						trendingItem: a
					} = this.props, i = this.isSponsored(), c = Ho(null, null, null, a, {
						source: i ? To.a.PromotedTrend : To.a.Trending
					}), d = c && c.url, l = c && c.qs, m = t ? Object(K.getPageTypeFromCurrentPage)(t) : o ? Object(K.getPageTypeFromCurrentPage)(o) : void 0, p = u.a.createElement(Us.a, {
						id: r,
						"aria-label": a.searchQuery,
						className: Object(g.a)(zo.a.listItem, zo.a.mTrending, Jr.a.item, Jr.a.trending, e, {
							[zo.a.mFocused]: !(!n || n.section !== Bo.c.trending || a.searchQuery !== n.searchQuery)
						}),
						onClick: this.onTrendingItemClick,
						key: "trending-".concat(a.searchQuery),
						role: "link",
						tabIndex: -1,
						to: {
							pathname: d || "",
							state: {
								[H.a.SearchOriginPage]: m
							},
							search: l
						}
					}, u.a.createElement("div", {
						className: Jr.a.trendingContent
					}, i && u.a.createElement("div", {
						className: Jr.a.promoted
					}, s.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), u.a.createElement("div", null, u.a.createElement(ir.a, {
						className: Object(g.a)(zo.a.listItemIcon, zo.a.mTrending, Jr.a.icon, Jr.a.trending)
					}), u.a.createElement("span", null, u.a.createElement(ea.a, {
						className: Object(g.a)(zo.a.listItemText, zo.a.mTrending, Jr.a.text, Jr.a.trending),
						redditStyle: !0,
						size: ea.b.Small
					}, a.searchQuery)), a.post && u.a.createElement("div", {
						className: zo.a.postTitle
					}, a.post.title)), a.subredditInfo && u.a.createElement(sa.a, {
						className: Object(g.a)(Jr.a.relatedSubredditMetaData, zo.a.listItemSubtext, {
							[zo.a.mNoPostTitle]: !a.post
						}),
						iconUrl: a.subredditInfo.icon || void 0,
						suffix: s.fbt._("{subreddit name} and more", [s.fbt._param("subreddit name", a.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), a.post && Object(ra.a)(a.post) && u.a.createElement($o.a, {
						post: a.post,
						removeLink: !0,
						usePreview: i
					}));
					return i ? u.a.createElement(ta.a, {
						post: a.post
					}, p) : p
				}
			}
			var da = Object(Pn.t)()(ia(ca)),
				la = n("./src/reddit/components/Flair/index.tsx");
			class ua extends u.a.Component {
				constructor() {
					super(...arguments), this.onTypeaheadSuggestionClick = () => {
						const {
							props: e
						} = this;
						e.onSetRecentSearch(e.item), e.onSendSearchClickTypeaheadEvent(e.item.searchQuery, e.item, e.indexOfItem, e.subredditSuggestions), e.onClearSearchQuery()
					}
				}
				render() {
					const {
						props: e
					} = this, {
						className: t,
						focusedItem: n,
						item: r
					} = e;
					return u.a.createElement(Us.a, {
						"aria-label": r.searchQuery,
						className: Object(g.a)(zo.a.listItem, zo.a.mTypeahead, Jr.a.item, t, {
							[zo.a.mFocused]: !(!n || n.searchQuery !== r.searchQuery)
						}),
						onClick: this.onTypeaheadSuggestionClick,
						key: r.searchQuery,
						role: "link",
						tabIndex: -1,
						to: "/".concat(r.isProfile ? r.searchQuery.replace("u/", "user/") : r.searchQuery)
					}, r.displayInfo && r.displayInfo.iconUrl ? u.a.createElement("div", {
						className: zo.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(r.displayInfo.iconUrl, "')")
						}
					}) : u.a.createElement(Wo.a, {
						className: zo.a.planetIcon
					}), u.a.createElement("div", null, r.displayInfo && r.displayInfo.subredditOrProfileName && u.a.createElement("div", {
						className: Object(g.a)(zo.a.listItemText, zo.a.mTypeahead, Jr.a.text)
					}, r.displayInfo.subredditOrProfileName), u.a.createElement("div", null, r.displayInfo && null != r.displayInfo.subscribers && u.a.createElement("div", {
						className: Object(g.a)(zo.a.listItemSubtext, Jr.a.subText)
					}, s.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [s.fbt._plural(r.displayInfo.subscribers, "members count")], {
						hk: "1uMCes"
					})), r.displayInfo && r.displayInfo.isNSFW && u.a.createElement(la.b, {
						flair: {
							type: Kt.f.Nsfw,
							text: "nsfw"
						}
					}))))
				}
			}
			var ma = n("./src/reddit/constants/zIndex.ts"),
				pa = n("./src/reddit/controls/Dropdown/index.tsx");
			const {
				fbt: ba
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ha = "SearchDropdown", ga = "SearchDropdownContent", fa = 5, va = Object(Do.a)(pa.a);

			function Oa(e) {
				const t = Object(m.c)(),
					{
						isFixed: n = !0,
						isOverlay: s = !0
					} = e,
					[r, o] = Object(l.useState)(null),
					a = function(e) {
						const [t, n] = Object(l.useState)(null), s = Object(l.useCallback)(() => {
							e && n(e.offsetWidth)
						}, [e]);
						return Object(l.useLayoutEffect)(s, [s]), Object(l.useEffect)(() => (window.addEventListener("resize", s), () => window.removeEventListener("resize", s)), [s]), t
					}(e.container),
					i = e.trendingItems.slice(0, fa),
					[c, d] = Object(l.useState)(new Array(fa).fill(!1)),
					p = () => {
						const e = new Array(i.length).fill(!1);
						return i.forEach((t, n) => {
							if (t.id) {
								const s = document.getElementById("".concat(ha, "-").concat(t.id)),
									r = document.getElementById(ga);
								if (s && r) {
									const t = s.getBoundingClientRect(),
										o = r.getBoundingClientRect();
									t.top < o.bottom && t.bottom > o.top && (e[n] = !0)
								}
							}
						}), e
					};
				Object(l.useLayoutEffect)(() => {
					if (!e.isTrendingPending && e.isOpen && document.getElementById(ga)) {
						const e = p();
						d(e), i.forEach((n, s) => {
							e[s] && t((e, t) => oa.F(t(), n, oa.a.SEARCH_DROPDOWN))
						})
					}
				}, [e.isTrendingPending, e.isOpen, t]);
				const b = {
					width: a ? "".concat(a, "px") : "inherit",
					marginTop: "7px",
					overflow: "scroll"
				};
				e.isFixed && (b.zIndex = ma.h);
				const h = 0 === e.typeaheadSuggestions.length && !e.isTypeaheadPending,
					{
						typeaheadSuggestions: f
					} = e,
					v = Object(l.useMemo)(() => f.filter(e => e.isSubreddit), f);
				return u.a.createElement(va, {
					className: Object(g.a)(zo.a.dropdown, mr.a.listContainer),
					id: ga,
					isFixed: n,
					isOpen: e.isOpen,
					isOverlay: s,
					tooltipId: ha,
					noFocus: !0,
					renderContentsHidden: !0,
					style: b,
					onDropdownMounted: () => {
						if (!e.isTrendingPending && i.length > 0) {
							const e = p();
							d(e), i.forEach((n, s) => {
								e[s] && t((e, t) => oa.F(t(), n, oa.a.SEARCH_DROPDOWN))
							})
						}
					},
					onScroll: () => {
						const e = p();
						i.forEach((n, s) => {
							c[s] || !e[s] || n.post && n.post.isSponsored || t((e, t) => oa.F(t(), n, oa.a.SEARCH_DROPDOWN))
						}), d(e)
					}
				}, e.typeaheadSuggestions.map((t, n) => u.a.createElement(ua, {
					focusedItem: e.typeaheadSuggestions[e.focusedItemIndex],
					indexOfItem: n,
					subredditSuggestions: v,
					item: t,
					key: t.id,
					onClearSearchQuery: e.onClearSearchQuery,
					onSendSearchClickTypeaheadEvent: e.onSendSearchClickTypeaheadEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					fireAdPixelsOfType: e.fireAdPixelsOfType
				})), h && e.recentSearches.map((t, n) => u.a.createElement(Zo, {
					activeTooltipId: r,
					focusedItem: e.itemList[e.focusedItemIndex],
					indexOfItem: n,
					key: t.id,
					onClearSearchQuery: e.onClearSearchQuery,
					onRemoveRecentSearch: e.onRemoveRecentSearch,
					onSendSearchClickRecentEvent: e.onSendSearchClickRecentEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					recentSearch: t,
					toggleTooltip: o
				})), h && !e.isInUISimplificationI18NExperiment && e.isInTrendingExperiment && !e.isTrendingPending && e.trendingItems && u.a.createElement("div", {
					className: Object(g.a)(Jr.a.title, zo.a.listItemTitle, {
						[zo.a.mWithBorder]: !!e.recentSearches.length
					})
				}, ba._("Trending today", null, {
					hk: "3nAMpY"
				})), (e.isTypeaheadPending || !e.isInUISimplificationI18NExperiment && e.isTrendingPending) && u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
					className: Object(g.a)(zo.a.loadingItem, so.a.item)
				}), u.a.createElement("div", {
					className: Object(g.a)(zo.a.loadingItem, so.a.item)
				}), u.a.createElement("div", {
					className: Object(g.a)(zo.a.loadingItem, so.a.item)
				}), u.a.createElement("div", {
					className: Object(g.a)(zo.a.loadingItem, so.a.item)
				}), u.a.createElement("div", {
					className: Object(g.a)(zo.a.loadingItem, so.a.item)
				})), h && !e.isInUISimplificationI18NExperiment && e.isInTrendingExperiment && i.map(t => u.a.createElement(da, {
					id: "".concat(ha, "-").concat(t.id),
					key: t.id,
					focusedItem: e.itemList[e.focusedItemIndex],
					fireAdPixelsOfType: e.fireAdPixelsOfType,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					trendingItem: t
				})))
			}
			var ya = n("./src/reddit/contexts/ApiContext.tsx"),
				Ca = n("./src/lib/makeApiRequest/index.ts"),
				Pa = n("./src/lib/omitHeaders/index.ts"),
				xa = n("./src/reddit/constants/headers.ts");
			const Ea = (e, t) => Object(Ca.a)(Object(Pa.a)(e, [xa.a]), {
				endpoint: "".concat(e.apiUrl, "/api/subreddit_autocomplete_v2.json"),
				method: f.db.GET,
				data: {
					query: t
				}
			});
			var ja = n("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				Sa = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const _a = e => {
				const t = [],
					n = {};
				return e.forEach(e => {
					const s = e.data,
						r = e.kind;
					r === f.yb.Subreddit ? (t.push(s.name), n[s.name] = Object(Sa.a)(s)) : r === f.yb.Account && (t.push(s.subreddit.name), n[s.subreddit.name] = Object(ja.a)(s.subreddit, s.name))
				}), {
					data: n,
					order: t
				}
			};
			var ka = n("./src/reddit/helpers/isArrayEqual.ts"),
				wa = n("./src/reddit/helpers/trackers/searchResults.ts"),
				Ia = n("./src/reddit/selectors/experiments/trending.ts");
			const Ma = e => Object(oe.F)(e) || Cn.Wc.Treatment1 === Object(Sr.c)(e, {
				experimentEligibilitySelector: Sr.a,
				experimentName: Cn.Tc
			});
			var Na = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				Ta = n("./src/reddit/selectors/searchResults.ts"),
				Ra = n("./src/reddit/selectors/tooltip.ts"),
				Aa = n("./src/reddit/selectors/trending.ts"),
				La = n("./src/reddit/controls/Search/index.m.less"),
				Fa = n.n(La);
			const Da = Object(Pn.t)({
					searchQuery: Pn.V,
					pageLayer: e => e
				}),
				Ga = (e, t, n, s) => e(e => Object.assign(Object.assign({}, Object(wa.c)(e)), {
					source: "search",
					action: "click",
					noun: t,
					actionInfo: K.actionInfo(e),
					search: Object.assign(Object.assign({}, K.search(e, n, !0, s || void 0)), {
						structureType: K.structureType(e, s),
						queryId: Object(lo.c)(lo.a.SearchResults)
					})
				})),
				Ua = Object(m.b)(() => Object(h.c)({
					currentPage: ln.b,
					currentSubredditName: ln.e,
					currentUser: oe.i,
					dropdownIsOpen: Object(Ra.b)(ha),
					typeaheadIdsByQuery: Ta.c,
					isInTrendingExperiment: Ia.a,
					isInTypeaheadExperiment: Ma,
					isInUISimplificationI18NExperiment: Na.a,
					isLoggedIn: oe.I,
					isSubredditSearchAllowed: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(Pn.L)(n)
					},
					multireddit: Pn.d,
					routeName: ln.r,
					subreddit: Pn.q,
					trendingItems: Aa.a,
					typeaheadSuggestions: Ta.i
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(Lo.b)()),
					fireAdPixelsOfType: (t, n) => e(Object(Ro.t)(t, n)),
					onChange: t => e(Object(Ao.j)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object(Ao.j)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(b.b)(t)),
					onSearch: (t, n, s, r) => {
						e(Object(b.b)(Object(ko.c)({
							pathname: t,
							search: n,
							state: {
								fromPage: s,
								[H.a.SearchOriginPage]: r
							}
						})))
					},
					onToggleDropdown: () => e(Object(Fo.h)({
						tooltipId: ha
					})),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object(Ao.i)(t))
					}
				}), (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), n), {
					onSearch: (s, r) => {
						s.preventDefault();
						const {
							currentUser: o = null
						} = e, a = Ho(e.subreddit, e.multireddit, o, r, n.searchOptions, e.isSubredditSearchAllowed);
						if (!a) return;
						const i = a.url,
							c = a.qs,
							d = {
								routeName: e.routeName,
								subredditName: e.currentSubredditName
							},
							l = e.currentPage ? K.getPageTypeFromCurrentPage(e.currentPage) : n.pageLayer ? K.getPageTypeFromCurrentPage(n.pageLayer) : void 0;
						t.onSearch(i, c, d, l)
					},
					onFocusSearchBar: () => {
						Object(lo.c)(lo.a.SearchResults) || Object(lo.d)(lo.a.SearchResults);
						const e = n.searchOptions || Object(To.c)({
							q: n.searchQuery
						});
						Ga(n.sendEvent, K.OriginElement.SearchBar, e, n.pageLayer ? n.pageLayer : void 0)
					}
				}));
			class Ba extends u.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await Ea(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = _a(e.body.data.children);
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
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(hn.K)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(hn.lb)(Object.assign(Object.assign({}, e), {
								section: Bo.c.recent
							}), this.props.currentUser.id)
						})
					}, this.onChange = e => {
						const t = e.currentTarget.value,
							n = {
								searchQuery: t
							};
						if (this.setState(n), this.props.onChange(t), this.props.isInTypeaheadExperiment) {
							if (!(!this.props.typeaheadIdsByQuery || !this.props.typeaheadIdsByQuery[t]) || !t) return;
							this.onFetchTypeaheadSuggestions()
						}
					}, this.onFetchTypeaheadSuggestions = Io()(() => {
						this.makeTypeaheadApiRequest()
					}, 250), this.onSearch = async e => {
						if (this.close(), this.state.searchQuery) {
							let t = Object.assign({}, Bo.a);
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(t = this.state.selectedItem).id || (t.id = No()()), t.section === Bo.c.recent ? this.onSendSearchClickRecentEvent(this.state.searchQuery, t, this.state.focusedItemIndex) : t.section === Bo.c.typeahead ? this.onSendSearchClickTypeaheadEvent(this.state.searchQuery, t, this.state.focusedItemIndex, this.state.itemList.filter(e => e.isSubreddit)) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, K.StructureType.Search, K.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									n = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									s = !!this.props.subreddit && this.props.subreddit.isNSFW,
									r = Bo.b.text;
								t = {
									id: No()(),
									searchQuery: this.state.searchQuery,
									type: r,
									section: Bo.c.recent,
									subredditOrProfileRestrictedName: n,
									displayInfo: {
										iconUrl: e,
										isNSFW: s
									}
								}
							}
							this.onSetRecentSearch(t), this.close(), this.props.onSearch(e, t)
						}
					}, this.onClearSearchQuery = () => {
						this.setState({
							focusedItemIndex: -1,
							selectedItem: null,
							searchQuery: ""
						}), this.props.onClearSearchQuery()
					}, this.onSendDropdownClickEvent = (e, t, n, s) => {
						const r = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: this.props.searchQuery
						};
						this.props.sendEvent(Object(wa.s)(s, r))
					}, this.onSendSearchClickRecentEvent = (e, t, n) => {
						this.props.sendEvent(Object(wa.u)(e, t, n))
					}, this.onSendSearchClickTypeaheadEvent = (e, t, n, s) => {
						this.props.sendEvent(Object(wa.w)(e, t, n, s))
					}, this.onSendDropdownViewEvent = (e, t, n, s) => {
						const r = {
							displayQuery: n,
							rawQuery: s || n,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(wa.t)(e, r))
					}, this.onKeyDown = e => {
						if (e.key === co.b.Escape && this.close(), e.key === co.b.Tab && this.close(), e.key === co.b.ArrowDown) {
							if (e.preventDefault(), 0 === this.state.itemList.length || !this.props.dropdownIsOpen) return;
							if (this.state.focusedItemIndex >= this.state.itemList.length - 1) return;
							const t = this.state.focusedItemIndex + 1,
								n = this.state.itemList[t] || null,
								s = n ? n.searchQuery : "";
							this.setState({
								focusedItemIndex: t,
								searchQuery: s,
								selectedItem: n
							})
						}
						if (e.key === co.b.ArrowUp) {
							if (e.preventDefault(), 0 === this.state.itemList.length || !this.props.dropdownIsOpen) return;
							if (-1 === this.state.focusedItemIndex) return;
							const t = this.state.focusedItemIndex - 1,
								n = this.state.itemList[t] || null,
								s = n ? n.searchQuery : "";
							this.setState({
								focusedItemIndex: t,
								searchQuery: s,
								selectedItem: n
							})
						}
					}, this.toggleDropdownAndGetTrending = () => {
						if (!this.props.trendingItems.length && this.props.isInTrendingExperiment && this.makeTrendingApiRequest(), this.props.currentUser) {
							const e = Object(hn.z)(this.props.currentUser.id);
							e.length > 0 && (this.setState({
								recentSearches: this.props.isLoggedIn ? e : [],
								itemList: [...e, ...this.props.trendingItems]
							}), e.forEach(e => {
								this.onSendDropdownViewEvent(K.SearchDropdownNouns.Recent, K.StructureType.Recent, e.searchQuery)
							}))
						}
						this.props.onToggleDropdown()
					}, this.onFormSubmit = e => {
						e.preventDefault(), this.onSearch(e);
						const t = this.props.searchOptions || Object(To.c)({});
						t.q || (t.q = this.state.searchQuery), Ga(this.props.sendEvent, "full_search_button", t)
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
					const t = Object(ka.a)(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						n = Object(ka.a)(e.trendingItems, this.props.trendingItems);
					if (this.props.searchQuery !== e.searchQuery || !t || !n) {
						const n = this.props.typeaheadSuggestions.length ? this.props.typeaheadSuggestions : [...this.state.recentSearches, ...this.props.trendingItems];
						this.setState(() => {
							const t = {
								itemList: n
							};
							return this.props.searchQuery !== e.searchQuery && (t.searchQuery = this.props.searchQuery || ""), t
						}), !t && this.props.typeaheadSuggestions.length && this.props.typeaheadSuggestions.forEach(e => {
							this.onSendDropdownViewEvent(e.isProfile ? K.SearchDropdownNouns.TypeaheadProfile : K.SearchDropdownNouns.TypeaheadSubreddit, K.StructureType.Search, e.searchQuery)
						})
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return u.a.createElement("div", {
						className: Object(g.a)(Fa.a.relativeWrapper, mr.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: ha,
						ref: this.setContainerRef
					}, u.a.createElement("label", {
						className: Fa.a.iconContainer,
						htmlFor: "header-search-bar"
					}, u.a.createElement(Vo.a, {
						className: Fa.a.icon
					})), u.a.createElement("form", {
						action: "/search/",
						autoComplete: "off",
						method: "get",
						onSubmit: this.onFormSubmit,
						onFocus: e.onFocusSearchBar,
						role: "search"
					}, u.a.createElement("input", {
						id: "header-search-bar",
						name: "q",
						className: Fa.a.input,
						onChange: this.onChange,
						onClick: this.toggleDropdownAndGetTrending,
						onKeyDown: this.onKeyDown,
						key: e.searchQuery,
						placeholder: s.fbt._("Search", null, {
							hk: "44xF6n"
						}),
						type: "search",
						value: this.state.searchQuery
					})), u.a.createElement(Oa, {
						container: this.container,
						focusedItemIndex: t.focusedItemIndex,
						isFixed: e.isFixed,
						isInTrendingExperiment: e.isInTrendingExperiment,
						isInUISimplificationI18NExperiment: e.isInUISimplificationI18NExperiment,
						isOpen: e.dropdownIsOpen,
						isTrendingPending: t.isTrendingPending,
						isTypeaheadPending: t.isTypeaheadPending,
						itemList: t.itemList,
						onClearSearchQuery: this.onClearSearchQuery,
						onClose: this.close,
						onRemoveRecentSearch: this.onRemoveRecentSearch,
						onSendDropdownClickEvent: this.onSendDropdownClickEvent,
						onSendSearchClickRecentEvent: this.onSendSearchClickRecentEvent,
						onSendSearchClickTypeaheadEvent: this.onSendSearchClickTypeaheadEvent,
						onSetRecentSearch: this.onSetRecentSearch,
						onUpdateSearchQuery: this.onUpdateSearchQuery,
						recentSearches: t.recentSearches,
						trendingItems: e.trendingItems,
						typeaheadSuggestions: e.typeaheadSuggestions,
						fireAdPixelsOfType: e.fireAdPixelsOfType
					}))
				}
			}
			var Ha = Object(U.c)(Da(Object(ya.b)(Ua(Ba)))),
				Wa = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				qa = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				Va = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Qa = n.n(Va);
			var za = e => {
					const {
						className: t
					} = e;
					return u.a.createElement("div", {
						className: Object(g.a)(Qa.a.Container, t)
					}, u.a.createElement("a", {
						"aria-label": s.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Qa.a.HomeLink,
						href: M.a.redditUrl
					}, u.a.createElement(Wa.a, {
						className: Qa.a.Snoo
					}), u.a.createElement(qa.a, {
						className: Qa.a.Wordmark,
						color: "inherit"
					})))
				},
				Ka = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Ya = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Xa = n("./src/reddit/hooks/useTracking.ts");
			const Ja = u.a.createElement("svg", {
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 32 23",
					style: {
						transform: "scale(1.3)"
					}
				}, u.a.createElement("g", null, u.a.createElement("path", {
					fill: "#282828",
					d: "M16,18.4c-0.1,0-0.1,0-0.2-0.1L11,16c-0.7-0.3-1.4,0.2-1.4,0.9v1.4c0,0.4,0.2,0.7,0.6,0.9l5.4,2.7 c0.3,0.1,0.6,0.1,0.9,0l5.4-2.7c0.3-0.2,0.6-0.5,0.6-0.9v-1.4c0-0.7-0.8-1.2-1.4-0.9l-4.7,2.3c0,0-0.1,0-0.1,0.1 C16.1,18.4,16,18.4,16,18.4z"
				})), u.a.createElement("g", null, u.a.createElement("path", {
					fill: "#1B2426",
					d: "M0.9,15.9c0,0.4,0.2,0.7,0.5,0.9l5.8,2.9c0.7,0.3,1.5-0.1,1.5-0.9v-5.5c0-0.4-0.2-0.7-0.6-0.9L2.3,9.6 c-0.7-0.3-1.4,0.2-1.4,0.9V15.9z"
				})), u.a.createElement("path", {
					fill: "#282828",
					d: "M10.6,13.6c0,0.1,0,0.1,0.1,0.2l4.9,2.4c0.3,0.1,0.6,0.1,0.9,0l4.8-2.4c0.1,0,0.1-0.1,0.1-0.2s0-0.2-0.1-0.2\nL16.5,11c-0.1-0.1-0.3-0.1-0.4-0.1c-0.2,0-0.3,0-0.4,0.1l-4.9,2.4C10.6,13.4,10.6,13.5,10.6,13.6z"
				}), u.a.createElement("g", null, u.a.createElement("path", {
					fill: "#1B2426",
					d: "M23.2,18.9c0,0.7,0.8,1.2,1.4,0.9l5.9-2.9c0.3-0.2,0.6-0.5,0.6-0.9v-5.5c0-0.7-0.8-1.2-1.4-0.9l-5.9,2.9 c-0.3,0.2-0.6,0.5-0.6,0.9V18.9z"
				})), u.a.createElement("path", {
					fill: "#F04923",
					d: "M16.3,1.5c-0.1,0-0.2-0.1-0.3-0.1s-0.2,0-0.3,0.1L3.4,7.7C3.2,7.8,3.1,8,3.1,8.2c0,0.2,0.1,0.4,0.3,0.5l5.5,2.7\nc0.2,0.1,0.4,0.1,0.5,0l6.2-3.1c0.1-0.1,0.3-0.1,0.4-0.1s0.2,0,0.4,0.1l6.2,3.1c0.2,0.1,0.4,0.1,0.5,0l5.5-2.7\nc0.2-0.1,0.3-0.3,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5L16.3,1.5z"
				})),
				Za = u.a.createElement("svg", {
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 32 23",
					style: {
						transform: "scale(1.3)"
					}
				}, u.a.createElement("g", null, u.a.createElement("path", {
					fill: "#D7DADC",
					d: "M16,18.4c-0.1,0-0.1,0-0.2-0.1L11,16c-0.7-0.3-1.4,0.2-1.4,0.9v1.4c0,0.4,0.2,0.7,0.6,0.9l5.4,2.7 c0.3,0.1,0.6,0.1,0.9,0l5.4-2.7c0.3-0.2,0.6-0.5,0.6-0.9v-1.4c0-0.7-0.8-1.2-1.4-0.9l-4.7,2.3c0,0-0.1,0-0.1,0.1 C16.1,18.4,16,18.4,16,18.4z"
				})), u.a.createElement("g", null, u.a.createElement("path", {
					fill: "#D7DADC",
					d: "M0.9,15.9c0,0.4,0.2,0.7,0.5,0.9l5.8,2.9c0.7,0.3,1.5-0.1,1.5-0.9v-5.5c0-0.4-0.2-0.7-0.6-0.9L2.3,9.6 c-0.7-0.3-1.4,0.2-1.4,0.9V15.9z"
				})), u.a.createElement("path", {
					fill: "#D7DADC",
					d: "M16.5,11c-0.3-0.1-0.6-0.1-0.9,0l-4.9,2.4c-0.1,0-0.1,0.1-0.1,0.2s0,0.1,0.1,0.2l4.9,2.4c0.3,0.1,0.6,0.1,0.9,0 l4.8-2.4c0.1,0,0.1-0.1,0.1-0.2s0-0.2-0.1-0.2L16.5,11z"
				}), u.a.createElement("g", null, u.a.createElement("path", {
					fill: "#D7DADC",
					d: "M23.2,18.9c0,0.7,0.8,1.2,1.4,0.9l5.9-2.9c0.3-0.2,0.6-0.5,0.6-0.9v-5.5c0-0.7-0.8-1.2-1.4-0.9l-5.9,2.9 c-0.3,0.2-0.6,0.5-0.6,0.9V18.9z"
				})), u.a.createElement("path", {
					fill: "#FF4500",
					d: "M3.4,7.7C3.2,7.8,3.1,8,3.1,8.2s0.1,0.4,0.3,0.5l5.5,2.7c0.2,0.1,0.4,0.1,0.5,0l6.2-3.1 c0.1-0.1,0.3-0.1,0.4-0.1s0.2,0,0.4,0.1l6.2,3.1c0.2,0.1,0.4,0.1,0.5,0l5.5-2.7c0.2-0.1,0.3-0.3,0.3-0.5s-0.1-0.4-0.3-0.5L16.3,1.5 c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1L3.4,7.7z"
				}));
			var $a = e => {
					let {
						nightmode: t
					} = e;
					return t ? Za : Ja
				},
				ei = n("./src/reddit/selectors/experiments/layer.ts"),
				ti = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				ni = n.n(ti),
				si = u.a.memo((function(e) {
					const t = Object(Xa.a)(),
						n = Object(m.c)(),
						r = Object(l.useCallback)(() => {
							t(e => Object.assign(Object.assign({}, Object(K.defaults)(e)), {
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						o = Object(l.useCallback)(() => {
							t(e => Object.assign(Object.assign({}, Object(K.defaults)(e)), {
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(l.useCallback)(() => {
							n(Object(Er.a)(W.c[W.b.Rpan])), t(e => Object.assign(Object.assign({}, Object(K.defaults)(e)), {
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						i = Object(l.useCallback)(() => {
							t(e => Object.assign(Object.assign({}, Object(K.defaults)(e)), {
								source: "nav",
								action: "click",
								noun: "layer"
							}))
						}, [t]),
						c = Object(m.d)(oe.I),
						d = Object(m.d)(gr.a),
						p = Object(m.d)(ei.b),
						b = Object(m.d)(oe.T),
						h = Object(Ya.a)(),
						f = Object(Ya.a)(),
						v = Object(Ya.a)(),
						O = Object(Ya.a)();
					return u.a.createElement("div", {
						className: Object(g.a)(ni.a.container, e.className)
					}, u.a.createElement("div", {
						className: ni.a.row
					}, u.a.createElement(Us.a, {
						className: ni.a.icon,
						innerRef: h.target.ref,
						to: c ? W.c[W.b.Popular] : W.c[W.b.Home],
						onClick: r,
						onMouseEnter: h.show,
						onMouseLeave: h.hide
					}, u.a.createElement(ir.a, null)), u.a.createElement(Ka.a, {
						arrowProps: h.arrowProps,
						popperProps: h.popperProps,
						visible: h.visible
					}, s.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), p ? u.a.createElement(u.a.Fragment, null, u.a.createElement(Us.a, {
						className: ni.a.icon,
						innerRef: O.target.ref,
						to: W.c[W.b.Layer],
						onClick: i,
						onMouseEnter: O.show,
						onMouseLeave: O.hide
					}, u.a.createElement($a, {
						nightmode: b
					})), u.a.createElement(Ka.a, {
						arrowProps: O.arrowProps,
						popperProps: O.popperProps,
						visible: O.visible
					}, s.fbt._("Layer", null, {
						hk: "1oCWLY"
					}))) : u.a.createElement(u.a.Fragment, null, u.a.createElement(Us.a, {
						className: ni.a.icon,
						innerRef: f.target.ref,
						to: W.c[W.b.All],
						onClick: o,
						onMouseEnter: f.show,
						onMouseLeave: f.hide
					}, u.a.createElement(Zs.a, null)), u.a.createElement(Ka.a, {
						arrowProps: f.arrowProps,
						popperProps: f.popperProps,
						visible: f.visible
					}, s.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), d && u.a.createElement(u.a.Fragment, null, u.a.createElement(Us.a, {
						className: ni.a.icon,
						innerRef: v.target.ref,
						to: W.c[W.b.Rpan],
						onClick: a,
						onMouseEnter: v.show,
						onMouseLeave: v.hide
					}, u.a.createElement(lr.a, null)), u.a.createElement(Ka.a, {
						arrowProps: v.arrowProps,
						popperProps: v.popperProps,
						visible: v.visible
					}, s.fbt._("Reddit Public Access Network", null, {
						hk: "38uXOo"
					})))))
				})),
				ri = n("./src/reddit/actions/login.ts"),
				oi = n("./src/reddit/helpers/trackers/authControls.ts"),
				ai = n("./src/lib/matchRoute/index.ts"),
				ii = n("./src/chat/helpers/dom.ts"),
				ci = n("./src/reddit/actions/changeUsername.ts"),
				di = n("./src/reddit/actions/chat/toggle.ts"),
				li = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				ui = n("./src/reddit/actions/postCreation/general.ts"),
				mi = n("./src/reddit/actions/users.ts"),
				pi = n("./src/reddit/components/Settings/modalIds.ts"),
				bi = n("./src/reddit/components/BlockNavigation/index.tsx"),
				hi = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				gi = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var fi = Object(ot.a)({
					getComponent: () => Object(jt.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				vi = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Oi = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				yi = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				Ci = n.n(yi);
			class Pi extends u.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(Oi.e)(Oi.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(Oi.c)(Oi.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(Oi.e)(Oi.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					Pi.shouldSendViewEvent && (Pi.shouldSendViewEvent = !1, this.props.sendEvent(Object(Oi.g)(Oi.a)))
				}
				render() {
					return u.a.createElement("div", {
						className: Ci.a.container
					}, u.a.createElement("div", {
						className: Ci.a.topLine
					}), u.a.createElement("button", {
						className: Ci.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, u.a.createElement(ee.a, {
						className: Ci.a.closeIcon
					})), u.a.createElement("h5", {
						className: Ci.a.title
					}, s.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), u.a.createElement("p", {
						className: Ci.a.subtitle
					}, this.props.email), u.a.createElement("p", {
						className: Ci.a.description
					}, s.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), u.a.createElement("div", {
						className: Ci.a.buttonWrapper
					}, u.a.createElement(dt.l, {
						className: Ci.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen
					}, s.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), u.a.createElement(dt.i, {
						className: Object(g.a)(Ci.a.commonBtn, Ci.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick
					}, s.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			Pi.shouldSendViewEvent = !0;
			const xi = Object(vi.a)(Pi, [oo.a.Click, oo.a.Keydown, oo.a.Resize]);
			var Ei = Object(U.c)(xi),
				ji = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				Si = n.n(ji);
			class _i extends u.a.Component {
				render() {
					const {
						exposeIFrameElement: e
					} = this.props;
					return u.a.createElement(fe, {
						className: Si.a.IFrame,
						exposeIFrameElement: e,
						path: B.c.GoogleOneTap
					})
				}
			}
			var ki = _i,
				wi = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				Ii = n("./src/reddit/helpers/trackers/goldPayment.ts");
			const Mi = "gold_top_nav",
				Ni = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return Object.assign(Object.assign({}, Object(Ii.h)(e, t)), {
						correlationId: Object(lo.d)(lo.a.GoldPayment, !1),
						profile: K.profile(e),
						subreddit: K.subreddit(e)
					})
				},
				Ti = e => t => Object.assign({
					source: Mi,
					action: "click",
					noun: e
				}, Ni(t)),
				Ri = e => t => Object.assign({
					source: Mi,
					action: "click",
					noun: "coins_package"
				}, Ni(t, {
					packageId: e
				})),
				Ai = () => e => Object.assign({
					source: Mi,
					action: "click",
					noun: "premium"
				}, Ni(e)),
				Li = () => e => Object.assign({
					source: Mi,
					action: "view",
					noun: "dropdown"
				}, Ni(e));
			var Fi = n("./src/reddit/components/CoinPurchaseDropdownHeader/index.m.less"),
				Di = n.n(Fi),
				Gi = n("./src/reddit/components/CoinPurchaseDropdownHeader/DefaultHeader/index.m.less"),
				Ui = n.n(Gi);
			const {
				fbt: Bi
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Hi = e => {
					const {
						className: t
					} = e;
					return u.a.createElement("div", {
						className: Object(g.a)(t, Ui.a.header)
					}, u.a.createElement("span", {
						className: Ui.a.headerText
					}, Bi._("Give Gold, Silver, Platinum, and more with Coins", null, {
						hk: "3MfKV4"
					})), u.a.createElement(Us.a, {
						className: Ui.a.headerLink,
						to: "/coins"
					}, Bi._("What are Coins?", null, {
						hk: "DNBPx"
					})))
				},
				Wi = n("./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less"),
				qi = n.n(Wi);
			var Vi = e => {
				const {
					className: t,
					salesConfig: n
				} = e, {
					dropdownHeaderText: s,
					dropdownHeaderBackgroundAsset: r
				} = n;
				return u.a.createElement("div", {
					className: Object(g.a)(t, qi.a.header)
				}, r && u.a.createElement("img", {
					className: qi.a.saleHeaderImage,
					src: r
				}), u.a.createElement("span", {
					className: qi.a.headerText
				}, s))
			};
			const {
				fbt: Qi
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var zi = e => {
					const {
						activeSaleConfig: t
					} = e;
					return t ? u.a.createElement(Vi, {
						className: Di.a.header,
						salesConfig: t
					}) : u.a.createElement(Hi, {
						className: Di.a.header
					})
				},
				Ki = (n("./node_modules/core-js/modules/es6.array.sort.js"), n("./src/lib/opener/index.ts")),
				Yi = n("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				Xi = n("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				Ji = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				Zi = n("./src/reddit/models/Gold/Premium/index.ts"),
				$i = n("./src/reddit/selectors/experiments/econAnnualPremium.ts"),
				ec = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				tc = n("./src/reddit/selectors/gov.ts"),
				nc = n("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				sc = n.n(nc);
			var rc = e => {
					const {
						className: t,
						buttonClass: n,
						buttonSubtext: s,
						buttonSubtextCrossout: r,
						buttonText: o,
						onClick: a,
						primaryText: i,
						subtext: c,
						subtextCrossout: d
					} = e, l = n ? dt.f : dt.i;
					return u.a.createElement("div", {
						className: Object(g.a)(t, sc.a.CompactCoinPurchaseListItem)
					}, u.a.createElement("div", {
						className: sc.a.productSection
					}, u.a.createElement("span", {
						className: sc.a.primaryText
					}, i), u.a.createElement("span", {
						className: Object(g.a)(sc.a.subtext, {
							[sc.a.crossout]: d
						})
					}, Array.isArray(c) ? c.map((e, t) => u.a.createElement("p", {
						key: t
					}, e)) : c)), u.a.createElement("div", {
						className: sc.a.priceSection
					}, u.a.createElement(l, {
						className: Object(g.a)(sc.a.button, n),
						redditStyle: !0,
						onClick: a
					}, o), u.a.createElement("span", {
						className: Object(g.a)(sc.a.buttonSubtext, {
							[sc.a.crossout]: r
						})
					}, s)))
				},
				oc = n("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				ac = n.n(oc);
			const ic = Object(h.c)({
					annualPremiumEnabled: $i.a,
					coinPackages: ec.b,
					communityPointsConversionEnabled: bn.d.spPointsCoinConversion,
					communityPointsName: (e, t) => {
						const n = Object(Pn.q)(e, t);
						return Object(tc.p)(e, {
							subredditId: null == n ? void 0 : n.id
						})
					},
					isPremiumSubscriber: oe.r,
					premiumPackages: ec.f,
					purchaseCatalogError: ec.g,
					purchaseCatalogPending: ec.h
				}),
				cc = Object(m.b)(ic, e => ({
					onClickCoinPackage: (t, n) => e(Object(Yi.b)({
						correlationId: n,
						packageId: t.mobileId
					})),
					onClickConvert: () => e(Object(T.h)(q.a.CONVERT_TO_COINS)),
					onClickPremiumPackage: (t, n) => n ? e(Object(Xi.d)({
						packageId: Zi.b,
						correlationId: t
					})) : Object(Ki.d)("/premium", Ki.c.BLANK),
					requestPurchaseCatalog: t => e(Object(wi.b)(t))
				}));
			class dc extends u.a.Component {
				constructor(e) {
					super(e), this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: n,
							sendEvent: s
						} = this.props;
						t && t(), s(Ri(e.mobileId)), n(e, this.correlationId)
					}, this.handleClickBuyPremium = () => {
						var e;
						const {
							annualPremiumEnabled: t,
							onClick: n,
							onClickPremiumPackage: s,
							pageLayer: r,
							sendEvent: o
						} = this.props;
						n && n(), o(Ai());
						const a = !t || (null === (e = null == r ? void 0 : r.meta) || void 0 === e ? void 0 : e.name) === f.Bb.PREMIUM;
						s(this.correlationId, a)
					}, this.correlationId = Object(lo.d)(lo.a.GoldPayment, !1), e.coinPackages.length || e.purchaseCatalogPending || e.requestPurchaseCatalog(this.correlationId)
				}
				getListItemData() {
					const {
						annualPremiumEnabled: e,
						coinPackages: t,
						isPremiumSubscriber: n,
						premiumPackages: r,
						sorted: o
					} = this.props, a = t.map(e => {
						const {
							baselineCoins: t,
							baselinePennies: n,
							coins: r,
							pennies: o,
							bonusPct: a
						} = e, i = r.toLocaleString(), c = s.fbt._("{number of coins} Coins", [s.fbt._param("number of coins", i)], {
							hk: "1bO7gz"
						}), d = "$".concat(o / 100);
						let l, u;
						if (r !== t) {
							const e = t.toLocaleString();
							l = s.fbt._("{number of coins of non-sale package} coins", [s.fbt._param("number of coins of non-sale package", e)], {
								hk: "afkY9"
							})
						}
						return {
							buttonSubtext: u = o !== n ? "$".concat(n / 100) : a ? s.fbt._("{percent bonus}% Bonus", [s.fbt._param("percent bonus", a.toLocaleString())], {
								hk: "2zgjZ1"
							}) : void 0,
							buttonText: d,
							coinPackage: e,
							primaryText: c,
							subtext: l
						}
					});
					o && a.sort((e, t) => {
						return (e.coinPackage ? e.coinPackage.coins : 0) - (t.coinPackage ? t.coinPackage.coins : 0)
					});
					const i = r.length ? r[0] : void 0;
					if (n || !i) return a;
					const {
						pennies: c,
						periodicalCoins: d,
						signupBonusCoins: l
					} = i, u = l ? l.toLocaleString() : void 0, m = "$".concat((c / 100).toLocaleString()), p = d.toLocaleString(), b = {
						buttonClass: e ? ac.a.premiumButtonStyle : ac.a.goldButtonStyle,
						buttonSubtext: u ? s.fbt._("{number of bonus coins} bonus coins", [s.fbt._param("number of bonus coins", u)], {
							hk: "YgHAT"
						}) : void 0,
						buttonText: e ? s.fbt._("Upgrade", null, {
							hk: "1tsWOd"
						}) : s.fbt._("{premium price}/mo", [s.fbt._param("premium price", m)], {
							hk: "4Cwbsj"
						}),
						primaryText: s.fbt._("Premium", null, {
							hk: "45A9gK"
						}),
						subtext: [s.fbt._("{monthly coins} coins/mo", [s.fbt._param("monthly coins", p)], {
							hk: "2hVTon"
						}), s.fbt._("Ads free & more", null, {
							hk: "wO4Wc"
						})]
					};
					return a.concat(b)
				}
				render() {
					const {
						className: e,
						coinPackages: t,
						communityPointsConversionEnabled: n,
						communityPointsName: r,
						onClickConvert: o,
						purchaseCatalogError: a,
						purchaseCatalogPending: i
					} = this.props;
					return i ? u.a.createElement("div", {
						className: e
					}, u.a.createElement("div", {
						className: ac.a.loaderContainer
					}, u.a.createElement(Ji.a, {
						sizePx: 80
					}))) : a || !t.length ? u.a.createElement("div", {
						className: e
					}, u.a.createElement("div", {
						className: ac.a.errorContainer
					}, s.fbt._("Oops, something went wrong", null, {
						hk: "4EQRS8"
					}))) : u.a.createElement("div", {
						className: e
					}, this.getListItemData().map(e => {
						const {
							buttonClass: t,
							buttonSubtext: n,
							buttonText: s,
							coinPackage: r,
							primaryText: o,
							subtext: a
						} = e, i = r && r.coins !== r.baselineCoins, c = r && r.pennies !== r.baselinePennies;
						return u.a.createElement(rc, {
							buttonClass: t,
							buttonSubtext: n,
							buttonSubtextCrossout: c,
							buttonText: s,
							key: o,
							onClick: r ? () => this.handleClickBuyCoins(r) : this.handleClickBuyPremium,
							primaryText: o,
							subtext: a,
							subtextCrossout: i
						})
					}), n && u.a.createElement(rc, {
						buttonText: s.fbt._("Convert", null, {
							hk: "zVTTU"
						}),
						onClick: o,
						primaryText: s.fbt._("Convert {community points name}", [s.fbt._param("community points name", r)], {
							hk: "e7BeU"
						}),
						subtext: s.fbt._("into Coins", null, {
							hk: "1XFIa6"
						})
					}))
				}
			}
			var lc = Object(Pn.t)()(cc(Object(U.c)(dc))),
				uc = n("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				mc = n.n(uc);
			const {
				fbt: pc
			} = n("./node_modules/fbt/lib/FbtPublic.js"), bc = Object(Do.a)(pa.a);
			class hc extends u.a.Component {
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
						isOpen: e,
						sendEvent: t
					} = this.props;
					e && t(Li())
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.props.sendEvent(Li())
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						isOpen: n,
						onCloseTooltip: s,
						tooltipId: r
					} = this.props;
					return u.a.createElement(bc, {
						className: Object(g.a)(t, mc.a.CoinPurchaseDropdown, {
							[mc.a.activeSale]: !!e
						}),
						isFixed: !0,
						isOpen: n,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: r
					}, u.a.createElement(zi, {
						activeSaleConfig: e
					}), u.a.createElement(lc, {
						className: mc.a.purchaseList,
						onClick: s,
						sorted: !0
					}))
				}
			}
			var gc = Object(U.c)(hc),
				fc = n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			var vc = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				Oc = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				yc = n.n(Oc);
			const Cc = "COIN_PURCHASE_DROPDOWN_ID",
				Pc = Object(h.c)({
					activeSaleConfig: ec.a,
					activeTooltipId: Ra.a,
					coinPurchaseDropdownIsOpen: e => Object(Ra.b)(Cc)(e),
					premiumPurchaseModalIsOpen: vc.n
				});
			class xc extends u.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							coinPurchaseDropdownIsOpen: n,
							sendEvent: s,
							toggleTooltip: r
						} = this.props;
						n || (Object(lo.d)(lo.a.GoldPayment, !0), Object(Ln.a)(), Object(fc.b)(), s(Ti("get_coins_cta"))), r(t)
					}
				}
				componentDidMount() {
					const {
						activeSaleConfig: e,
						requestActiveSale: t
					} = this.props;
					e || t()
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						closeTooltip: n,
						coinPurchaseDropdownIsOpen: r,
						premiumPurchaseModalIsOpen: o
					} = this.props, a = e ? e.ctaText ? e.ctaText : s.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : s.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					});
					return u.a.createElement("button", {
						className: Object(g.a)(t, yc.a.ctaContainer, {
							[yc.a.activeSale]: !!e
						}),
						id: Cc,
						onClick: this.handleClick
					}, u.a.createElement("div", {
						className: Object(g.a)(yc.a.ctaContent, {
							[yc.a.activeSale]: !!e
						})
					}, u.a.createElement(er.a, {
						className: Object(g.a)(yc.a.icon, {
							[yc.a.activeSale]: !!e
						})
					}), u.a.createElement("span", {
						className: yc.a.text
					}, a)), u.a.createElement(gc, {
						activeSaleConfig: e,
						isOpen: r,
						onCloseTooltip: n,
						tooltipId: Cc
					}), o && u.a.createElement(fc.a, null))
				}
			}
			var Ec = Object(m.b)(Pc, (e, t) => ({
					closeTooltip: () => e(Object(Fo.i)()),
					requestActiveSale: () => e(Object(wi.a)()),
					toggleTooltip: t => {
						e(t === Cc ? Object(Fo.i)() : Object(Fo.f)({
							tooltipId: Cc
						}))
					}
				}))(Object(U.c)(xc)),
				jc = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				Sc = n.n(jc);

			function _c() {
				return (_c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var kc = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const wc = I.a.button("Button", Sc.a),
				Ic = I.a.div("Container", Sc.a);

			function Mc(e) {
				const {
					children: t,
					isOpen: n
				} = e, s = kc(e, ["children", "isOpen"]);
				return u.a.createElement(wc, _c({}, s, {
					id: e.id,
					onClick: e.onClick
				}), u.a.createElement(Ic, {
					className: Object(g.a)({
						[Sc.a.isOpen]: n
					})
				}, t))
			}
			var Nc = n("./src/chat/helpers/unreadCount.ts"),
				Tc = n("./src/chat/models/Promo/index.ts"),
				Rc = n("./src/reddit/components/BadgeCounter/index.tsx"),
				Ac = n("./src/reddit/helpers/trackers/chat.ts"),
				Lc = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				Fc = n("./src/reddit/selectors/chat.ts"),
				Dc = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				Gc = n.n(Dc);
			const Uc = Object(h.c)({
				promos: Fc.b,
				unreadCount: Fc.d
			});
			class Bc extends l.Component {
				componentDidMount() {
					this.props.promos[Tc.a.SubredditChatFtux] && this.props.sendEvent(Object(Ac.j)())
				}
				render() {
					const {
						promos: e,
						unreadCount: t
					} = this.props, {
						count: n,
						unread: s
					} = Object(Nc.a)(t, e);
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(Rc.a, {
						isActive: s,
						unreadCount: n
					}), u.a.createElement(Lc.a, {
						className: Object(g.a)(Gc.a.chatIcon, {
							[Gc.a.isActive]: s
						})
					}))
				}
			}
			var Hc = Object(m.b)(Uc)(Object(U.c)(Bc)),
				Wc = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				qc = n.n(Wc);
			const {
				fbt: Vc
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Qc = e => {
				const {
					onCloseFlyout: t
				} = e;
				return u.a.createElement("div", {
					className: qc.a.container
				}, u.a.createElement("p", {
					className: qc.a.title
				}, Vc._("New User Settings", null, {
					hk: "1Sziu9"
				})), u.a.createElement("h5", {
					className: qc.a.subtitle
				}, Vc._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), u.a.createElement("p", {
					className: qc.a.description
				}, Vc._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), u.a.createElement(dt.l, {
					className: qc.a.dismissBtn,
					onClick: t
				}, Vc._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var zc = e => u.a.createElement(u.a.Fragment, null, u.a.createElement(Rc.a, {
				isActive: !!e.unreadCount,
				unreadCount: e.unreadCount
			}), u.a.createElement(tr.a, {
				className: Object(g.a)(Gc.a.envelopeIcon, {
					[Gc.a.isUnread]: !!e.unreadCount
				})
			}));
			var Kc = e => u.a.createElement(u.a.Fragment, null, u.a.createElement(Rc.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), u.a.createElement(ar.a, {
					className: Gc.a.notificationInboxIcon
				})),
				Yc = n("./src/lib/prettyPrintNumber/index.ts"),
				Xc = n("./src/reddit/actions/alpha.ts"),
				Jc = n("./src/reddit/actions/modMode.ts"),
				Zc = n("./src/reddit/actions/profile/index.ts"),
				$c = n("./src/reddit/actions/snoovatar.ts"),
				ed = n("./src/reddit/constants/elementClassNames.ts"),
				td = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				nd = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				sd = n("./src/reddit/helpers/trackers/modTools.ts");
			const rd = e => ({
				screen: K.screen(e),
				profile: K.profile(e),
				subreddit: K.subreddit(e)
			});
			var od = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				ad = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				id = n("./src/reddit/icons/svgs/Help/index.tsx"),
				cd = n("./src/reddit/icons/svgs/KarmaGray/index.tsx"),
				dd = n("./src/reddit/icons/svgs/Logout/index.tsx"),
				ld = n("./src/reddit/icons/svgs/ModMode/index.tsx"),
				ud = n("./src/reddit/icons/svgs/MyProfile/index.tsx"),
				md = n("./src/reddit/icons/svgs/Night/index.tsx"),
				pd = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				bd = n("./src/reddit/icons/svgs/Redditor/index.tsx"),
				hd = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				gd = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				fd = n("./src/reddit/icons/svgs/SnooNoEyes/index.tsx"),
				vd = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				Od = n("./src/reddit/selectors/experiments/econ/snoovatar.ts"),
				yd = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				Cd = n.n(yd);
			const Pd = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				xd = I.a.wrapped(pa.a, "Dropdown", Cd.a),
				Ed = Object(Do.a)(xd),
				jd = e => u.a.createElement(nd.a, {
					className: Cd.a.button,
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, u.a.createElement("div", {
					className: Cd.a.buttonText
				}, e.displayText), u.a.createElement(td.a, {
					className: Cd.a.toggleSwitch,
					"data-redditstyle": !0,
					on: e.isEnabled
				})),
				Sd = Object(m.b)(() => Object(h.c)({
					isModModeEnabled: mn.t,
					isOpen: Object(Ra.b)("USER_DROPDOWN_ID"),
					nightmode: oe.T,
					url: ln.s,
					isSnoovatarFeatureAvailable: Od.a
				}), (e, t) => ({
					toggleNightmode: t => e(Object(R.y)(t)),
					onOptIntoRedesign: () => e(Object(Xc.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (st.a.get("rseor3") && st.a.remove("rseor3", {
							domain: M.a.cookieDomain
						}), e(Object(Xc.b)(!0))) : window.location.host = "old.reddit.com"
					},
					openSnoovatar: () => e(Object($c.b)("nav")),
					requestAwardKarma: () => {
						t.user && e(Object(Zc.f)(Object(Yt.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(ri.h)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: n
						} = t;
						n && n.contentWindow && (console.log("postMessage: disableAutoSelect"), n.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Q())), e(Object(mi.p)())
					},
					toggleModMode: () => e(Object(Jc.b)())
				}));
			var _d = Object(Pn.t)({
					pageLayer: e => e
				})(Sd(Object(U.c)(e => {
					const {
						logoutUser: t,
						dispatchOpenLoginModal: n,
						isModModeEnabled: r,
						nightmode: o,
						requestAwardKarma: a,
						toggleModMode: i,
						user: c,
						isSnoovatarFeatureAvailable: d
					} = e, m = c && c.id;
					Object(l.useEffect)(() => {
						a()
					}, [m]);
					const p = Object(nd.c)(hd.a, s.fbt._("User Settings", null, {
							hk: "46J4vT"
						})),
						b = Object(nd.c)(gd.a, s.fbt._("Style your avatar", null, {
							hk: "45ozJb"
						}), {
							strokeBasedIcon: !0
						}),
						h = c && c.snoovatarFullBodyAsset ? b : Object(nd.c)(Nr.a, s.fbt._("Create an Avatar", null, {
							hk: "2OnlFT"
						})),
						f = Object(nd.b)(id.a, s.fbt._("Help Center", null, {
							hk: "4sGjc0"
						})),
						v = Object(nd.b)(pd.a, s.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						})),
						O = Object(nd.c)(dd.a, s.fbt._("Log In / Sign Up", null, {
							hk: "4xbfvS"
						})),
						y = Object(nd.c)(dd.a, s.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})),
						C = Object(nd.c)(fd.a, s.fbt._("Opt In to New Reddit", null, {
							hk: "4jiTxA"
						})),
						P = (e => {
							const t = e && e.coins || 0;
							return s.fbt._({
								"*": "{number of coins} coins",
								_1: "1 coin"
							}, [s.fbt._plural(t, "number of coins")], {
								hk: "qmnnm"
							})
						})(c),
						E = Object(nd.c)(er.a, s.fbt._("Reddit Coins", null, {
							hk: "3jj6Cb"
						}), {
							meta: P
						}),
						j = Object(nd.c)(dr.a, s.fbt._("Reddit Premium", null, {
							hk: "3FNqVS"
						}));
					return u.a.createElement("div", {
						className: Object(g.a)(Cd.a.container, ed.e)
					}, u.a.createElement(vd.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(g.a)(e.className, Cd.a.inlineButton, {
							[Cd.a.dropdownOpen]: e.isOpen
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("user")
						}
					}, u.a.createElement("span", {
						className: Cd.a.accountDisplayText
					}, (e => e ? u.a.createElement("span", {
						className: Object(g.a)(Cd.a.accountWrapper, Cd.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, e.accountIcon && u.a.createElement(Js.a, {
						className: Cd.a.imgIcon
					}), u.a.createElement("span", {
						className: Cd.a.accountDetails
					}, u.a.createElement("span", {
						className: Cd.a.username
					}, e.displayText, e.isGold && u.a.createElement(ad.a, {
						className: Cd.a.premiumFontIcon,
						title: s.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						})
					})), u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: Cd.a.accountKarma
					}, u.a.createElement(cd.a, null), u.a.createElement("span", null, (e => {
						const t = e.totalKarma || e.postKarma + e.commentKarma,
							n = Object(Yc.b)(t);
						return s.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [s.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(e))), !!e.coins && u.a.createElement("span", {
						className: Cd.a.accountCoins
					}, u.a.createElement(od.a, {
						className: Cd.a.coinFontIcon
					}), u.a.createElement("span", null, (e => Object(Yc.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(e)))))) : u.a.createElement("span", {
						className: Object(g.a)(Cd.a.accountWrapper, Cd.a.isLoggedOut)
					}, u.a.createElement(bd.a, {
						className: Cd.a.myProfileIcon
					})))(e.user), u.a.createElement(Ws.b, {
						className: Cd.a.dropdownTriangle
					})), u.a.createElement(_o.a, null, s.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), u.a.createElement(Ed, {
						isFixed: !0,
						isOpen: e.isOpen,
						tooltipId: "USER_DROPDOWN_ID"
					}, c && u.a.createElement(l.Fragment, null, u.a.createElement("h3", {
						className: Cd.a.sectionHeader,
						role: "heading"
					}, s.fbt._("My Stuff", null, {
						hk: "47vhMb"
					})), (e => {
						const t = s.fbt._("My Profile", null, {
								hk: "4AoYxT"
							}),
							n = Object(nd.c)(ud.a, t);
						return u.a.createElement(n, {
							href: e.url
						})
					})(c), d && u.a.createElement(h, {
						onClick: e.openSnoovatar
					}), u.a.createElement(p, {
						href: "/settings"
					})), u.a.createElement("h3", {
						className: Cd.a.sectionHeader,
						role: "heading"
					}, s.fbt._("View Options", null, {
						hk: "3bZPKB"
					})), c && c.isMod && u.a.createElement(jd, {
						displayText: s.fbt._("Mod Mode", null, {
							hk: "3Rb4sj"
						}),
						isEnabled: r,
						onClick: () => {
							e.sendEvent(Object(sd.h)(!r)), i()
						}
					}, u.a.createElement(ld.a, {
						className: Cd.a.modModeIcon
					})), u.a.createElement(jd, {
						displayText: "Night Mode",
						isEnabled: o,
						onClick: () => {
							e.sendEvent((e => t => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: e ? "night_mode_off" : "night_mode_on"
							}, rd(t)))(o)), e.toggleNightmode(!o)
						}
					}, u.a.createElement(md.a, {
						className: Cd.a.nightIcon
					})), u.a.createElement("h3", {
						className: Cd.a.sectionHeader,
						role: "heading"
					}, s.fbt._("More Stuff", null, {
						hk: "4Gad8T"
					})), u.a.createElement(l.Fragment, null, u.a.createElement(E, {
						href: "/coins",
						onClick: () => {
							Object(lo.d)(lo.a.GoldPayment, !0), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "coins",
								correlationId: Object(lo.c)(lo.a.GoldPayment)
							}, rd(e)))())
						}
					}), u.a.createElement(j, {
						href: "/premium",
						onClick: () => {
							Object(lo.d)(lo.a.GoldPayment, !0), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "premium",
								correlationId: Object(lo.c)(lo.a.GoldPayment)
							}, rd(e)))())
						}
					})), u.a.createElement(f, {
						href: "https://www.reddithelp.com"
					}), c && u.a.createElement(v, {
						href: "https://old.reddit.com" + e.url,
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: K.screen(e),
								subreddit: K.subreddit(e)
							}))
						}
					}), !Pd && c && u.a.createElement(C, {
						href: "",
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_opt_in",
								screen: K.screen(e),
								subreddit: K.subreddit(e)
							})), e.onOptIntoRedesign()
						}
					}), u.a.createElement("div", {
						className: Cd.a.divider
					}), c ? u.a.createElement(y, {
						href: "#",
						onClick: e => {
							t(), e.preventDefault()
						}
					}) : u.a.createElement(O, {
						href: "#",
						onClick: t => {
							Object(x.a)(t) && (t.preventDefault(), t.stopPropagation(), n(), e.sendEvent(Object(oi.b)()))
						}
					})))
				}))),
				kd = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				wd = n("./src/reddit/helpers/trackers/navigation.ts"),
				Id = n("./src/reddit/routes/index.ts");
			var Md = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Nd = n("./src/reddit/selectors/sso.ts"),
				Td = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const Rd = "change-username-tooltip-id",
				Ad = "email-verification-tooltip-id",
				Ld = u.a.memo((function(e) {
					var {
						moderationDropdownOpen: t
					} = e, n = Td(e, ["moderationDropdownOpen"]);
					const r = Object(Ya.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: Gc.a.iconWrapper,
						onMouseEnter: r.show,
						onMouseLeave: r.hide,
						ref: r.target.ref
					}, u.a.createElement(Mc, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: kd.a,
						onClick: n.onOpenModerationDropdown,
						isOpen: t
					}, u.a.createElement(rr.a, {
						className: Object(g.a)(Gc.a.moderateIcon, {
							[Gc.a.isLit]: n.isModerateIconLit
						})
					})), u.a.createElement(Ka.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, s.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), u.a.createElement(kd.b, {
						className: Gc.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: n.unreadNotifications,
						sendEventWithName: n.sendEventWithName,
						showLegacyModmailIcon: n.showLegacyModmailIcon
					}))
				})),
				Fd = u.a.memo((function(e) {
					const t = Object(Ya.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: Gc.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, u.a.createElement("a", {
						className: Gc.a.link,
						href: "".concat(M.a.redditUrl, "/chat"),
						onClick: Object(ii.a)(e.onClickChat)
					}, u.a.createElement(Hc, null))), u.a.createElement(Ka.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				Dd = u.a.memo((function(e) {
					let {
						onClickMail: t,
						unreadNotifications: n
					} = e;
					const r = Object(Ya.a)();
					return u.a.createElement("span", {
						className: Gc.a.iconWrapper,
						onMouseEnter: r.show,
						onMouseLeave: r.hide,
						ref: r.target.ref
					}, u.a.createElement("a", {
						className: Gc.a.link,
						href: n && n.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: t
					}, u.a.createElement(zc, {
						unreadCount: n && n.inboxCount || 0
					})), u.a.createElement(Ka.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, s.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				Gd = u.a.memo((function(e) {
					const t = Object(Ya.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: Gc.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, u.a.createElement("button", {
						"aria-label": s.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Gc.a.link
					}, u.a.createElement(Kc, {
						unreadCount: e.unreadCount
					}))), u.a.createElement(Ka.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s.fbt._("Notification Inbox", null, {
						hk: "4ty6J0"
					})))
				})),
				Ud = u.a.memo((function(e) {
					const t = Object(Ya.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: Gc.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, u.a.createElement("button", {
						className: Gc.a.link,
						"aria-label": s.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, u.a.createElement(cr.a, {
						className: Gc.a.postIcon
					}))), u.a.createElement(Ka.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				Bd = Object(Pn.t)({
					pageLayer: e => e
				}),
				Hd = Object(h.c)({
					activeDropdownId: Ra.a,
					email: oe.l,
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: Md.c,
					isInboxRedesignActive: Ir,
					isModerator: Jt.h,
					isNameEditable: oe.K,
					isResponsiveSettingsEnabled: En.a,
					shouldOpenEmailVerificationTooltip: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(Pn.K)(n) && !!Object(oe.l)(e) && !Object(oe.y)(e) && Object(oe.I)(e) && !Object(oe.G)(e)
					},
					shouldShowChangeUsernameModals: Nd.d,
					shouldShowLegacyModmailIcon: fr.p,
					unreadNotifications: oe.gb
				}),
				Wd = Object(m.b)(Hd, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(ci.d)()),
					closeEmailVerificationTooltip: () => e(Object(li.b)()),
					onChatClick: () => e(Object(di.e)()),
					onDismissCustomizeFlyout: () => e(Object(R.t)()),
					onOpenModerationDropdown: () => {
						e(Object(Fo.h)({
							tooltipId: kd.a
						})), e(Object(io.q)())
					},
					onOpenUserDropdown: () => e(Object(Fo.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(T.h)(pi.b))
					},
					openKeepUsernameModal: () => {
						e(Object(T.h)(pi.f))
					},
					toggleChangeEmailModal: () => {
						e(Object(li.b)()), e(Object(T.i)(pi.a))
					},
					resendEmail: () => e(Object(mi.v)(Oi.a)),
					requestCreatePost: () => {
						t.pageLayer && e(ui.o(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(b.b)(t);
						e(Object(ci.f)(n))
					}
				}));
			class qd extends u.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendEventWithName = e => this.props.sendEvent(Object(wd.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(ai.a)(e.pathname, Id.a),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== f.Bb.POST_CREATION && n !== f.Bb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}
				}
				render() {
					const {
						activeDropdownId: e,
						className: t,
						closeChangeUsernameTooltip: n,
						closeEmailVerificationTooltip: s,
						email: r,
						isChangeUsernameTooltipShowing: o,
						isCustomizeFlyoutShowing: a,
						isEmailVerificationTooltipShowing: i,
						isGoogleOneTapEnabled: c,
						isInboxRedesignActive: d,
						isModerator: m,
						isNameEditable: p,
						isResponsiveSettingsEnabled: b,
						onDismissCustomizeFlyout: h,
						onOpenUserDropdown: f,
						openChangeUsernameModal: v,
						openKeepUsernameModal: O,
						resendEmail: y,
						shouldOpenEmailVerificationTooltip: C,
						shouldShowChangeUsernameModals: P,
						shouldShowLegacyModmailIcon: x,
						toggleChangeEmailModal: E,
						unreadNotifications: j,
						user: S
					} = this.props, {
						googleOneTapIFrame: _
					} = this.state, k = !(!j || !j.hasUnreadModmail && !j.hasUnreadOldModmail), w = S && Object(Yt.e)(S) || "", I = Object(g.a)({
						[Gc.a["m-responsive"]]: b
					});
					return u.a.createElement(zt.a, {
						id: Ad,
						ref: e => this.container = e,
						className: t
					}, u.a.createElement(zt.a, {
						className: Gc.a.headerLinks,
						id: Rd
					}, m && u.a.createElement(Ld, {
						isModerateIconLit: k,
						moderationDropdownOpen: e === kd.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						showLegacyModmailIcon: !!x,
						unreadNotifications: j
					}), S && u.a.createElement(l.Fragment, null, u.a.createElement(Fd, {
						onClickChat: this.onClickChat
					}), d ? u.a.createElement(Gd, {
						unreadCount: 0
					}) : u.a.createElement(Dd, {
						onClickMail: this.onClickMail,
						unreadNotifications: j
					}), u.a.createElement(Ud, {
						onClickCreatePost: this.onClickCreatePost
					}), u.a.createElement("span", {
						className: Gc.a.iconWrapper
					}, u.a.createElement(Ec, null)))), u.a.createElement(_d, {
						className: Gc.a.headerUserDropdown,
						googleOneTapIFrame: _,
						onClick: f,
						user: S,
						sendEventWithName: this.sendEventWithName
					}), c && u.a.createElement(ki, {
						exposeIFrameElement: this.exposeIFrameElement
					}), a && u.a.createElement(Qc, {
						onCloseFlyout: h
					}), u.a.createElement(Ei, {
						closeTooltip: s,
						email: r,
						isOpen: C && i,
						resendEmail: y,
						toggleChangeEmailModal: E,
						tooltipId: Ad
					}), u.a.createElement(fi, {
						email: r,
						shouldOpenTooltip: C
					}), p && !b && u.a.createElement(l.Fragment, null, u.a.createElement(gi.a, {
						closeTooltip: n,
						isOpen: o && !P,
						openChangeUsernameModal: v,
						openKeepUsernameModal: O,
						tooltipId: Rd,
						username: w
					}), P && u.a.createElement(hi.a, {
						isResponsiveSettingsEnabled: b,
						overlayClassName: I,
						username: w,
						withOverlay: !0
					}), u.a.createElement(bi.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var Vd = Object(U.c)(Bd(Wd(qd))),
				Qd = n("./src/reddit/selectors/meta.ts"),
				zd = n("./src/reddit/components/Header/User/index.m.less"),
				Kd = n.n(zd);
			const {
				fbt: Yd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Xd = Object(h.c)({
				account: e => e.user.account,
				origin: Qd.l
			}), Jd = u.a.memo(e => u.a.createElement("div", {
				className: Object(g.a)(e.className, Kd.a.row)
			}, !e.account && function(e) {
				const t = e.pageLayer,
					n = M.a.accountManagerOrigin,
					s = t ? t.url : "/",
					r = t && t.meta && t.meta.name === f.Bb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + s);
				return u.a.createElement("div", {
					className: Kd.a.loggedOutRow
				}, u.a.createElement(dt.m, {
					redditStyle: !0,
					className: Object(g.a)(Kd.a.login, Kd.a.button),
					href: "".concat(n, "/login/?dest=").concat(r),
					onClick: t => {
						Object(x.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenLoginModal(), e.sendEvent(Object(oi.a)("nav")))
					}
				}, Yd._("Log In", null, {
					hk: "4Cxw0g"
				})), u.a.createElement(dt.j, {
					redditStyle: !0,
					className: Object(g.a)(Kd.a.separator, Kd.a.register, Kd.a.button),
					href: "".concat(n, "/register/?dest=").concat(r),
					onClick: t => {
						Object(x.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenRegisterModal(), e.sendEvent(Object(oi.c)("nav")))
					}
				}, Yd._("Sign Up", null, {
					hk: "2WZPuJ"
				})))
			}(e), u.a.createElement(Vd, {
				className: Object(g.a)({
					[Kd.a.loggedOut]: !e.account
				}),
				user: e.account
			})));
			var Zd = Object(Pn.t)()(Object(m.b)(Xd, e => ({
					onOpenLoginModal: () => {
						e(Object(T.k)({
							actionSource: T.a.HeaderLogin
						})), e(Object(ri.h)())
					},
					onOpenRegisterModal: () => {
						e(Object(T.k)({
							actionSource: T.a.HeaderSignup
						})), e(Object(ri.i)())
					}
				}))(Object(U.c)(Jd))),
				$d = n("./src/reddit/components/Header/index.m.less"),
				el = n.n($d);

			function tl() {
				return (tl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const nl = I.a.header("HeaderDynamicStyles", el.a),
				sl = Object(h.c)({
					isLoggedIn: oe.I,
					isNightmode: oe.T,
					isResponsiveSettingsEnabled: En.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				rl = Object(Pn.t)({
					categoryName: Pn.b,
					pageLayer: e => e
				}),
				ol = e => u.a.createElement("div", {
					className: el.a.left
				}, u.a.createElement(_o.a, null, s.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
					hk: "ToBNc"
				})), u.a.createElement(So.b, null), u.a.createElement(Us.a, {
					"aria-label": s.fbt._("Home", null, {
						hk: "3PmGmU"
					}),
					className: el.a.centeredRow,
					to: "/",
					onClick: e.onReloadFrontpage
				}, u.a.createElement(Wa.a, {
					className: el.a.snoo
				}), u.a.createElement(qa.a, {
					className: el.a.wordmark
				})), e.children),
				al = e => u.a.createElement("div", {
					className: el.a.right
				}, e.children, u.a.createElement(Zd, null)),
				il = e => u.a.createElement("div", {
					className: el.a.layout
				}, u.a.createElement(ol, tl({}, e, {
					onReloadFrontpage: e.onReloadFrontpage
				}), u.a.createElement(jo, null), u.a.createElement(Ha, {
					className: el.a.search
				})), u.a.createElement(al, null, u.a.createElement(si, {
					className: el.a.quickLinks
				}))),
				cl = e => u.a.createElement("div", {
					className: el.a.layout
				}, u.a.createElement(ol, tl({}, e, {
					onReloadFrontpage: e.onReloadFrontpage
				}), u.a.createElement("div", {
					className: el.a.searchContainer
				}, u.a.createElement(Ha, {
					className: el.a.search
				}))), u.a.createElement(al, null));
			var dl = rl(Object(m.b)(sl, e => ({
					onReloadFrontpage: () => e(Object(Bs.x)(!0))
				}))((function(e) {
					let t;
					return t = e.isLoggedIn ? il : cl, u.a.createElement(nl, {
						"data-redditstyle": !0,
						className: Object(g.a)(el.a.container, e.className, {
							[el.a.bladeIsOpen]: e.isBladeOpen
						})
					}, u.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isResponsiveSettingsEnabled && u.a.createElement(za, {
						className: el.a.MwebResponsiveHeader
					}))
				}))),
				ll = n("./src/reddit/components/LightboxHeader/index.tsx"),
				ul = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				ml = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				pl = n.n(ml);
			const {
				fbt: bl
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const hl = Object(m.b)(null, e => ({
				onUnpinSubscriptions: () => e(Object(E.j)())
			}));
			var gl = I.a.wrapped(hl((function(e) {
					return u.a.createElement("div", {
						"data-redditstyle": !0,
						className: e.className
					}, u.a.createElement("div", {
						className: pl.a.title
					}, u.a.createElement(Qr, {
						className: pl.a.listHeader
					}, bl._("My Communities", null, {
						hk: "1CmPOc"
					})), u.a.createElement("div", {
						className: pl.a.unpin,
						onClick: e.onUnpinSubscriptions
					}, u.a.createElement(ee.a, {
						className: pl.a.icon
					}))), u.a.createElement(yo, null))
				})), "Component", pl.a),
				fl = n("./src/reddit/components/Survey/index.tsx"),
				vl = n("./src/reddit/components/ThemeProvider/index.tsx");
			const Ol = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				yl = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign(Object.assign({}, K.actionInfo(t)), {
						reason: "primary"
					})
				}),
				Cl = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign(Object.assign({}, K.actionInfo(t)), {
						reason: "secondary"
					})
				});
			var Pl = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				xl = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				El = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				jl = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Sl = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				_l = n("./src/reddit/selectors/structuredStyles.ts"),
				kl = n("./src/reddit/constants/colors.ts"),
				wl = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				Il = n.n(wl);

			function Ml() {
				return (Ml = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Nl = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const Tl = e => {
				const t = kl.a;
				switch (e.kind) {
					case ne.b.Error:
					case ne.b.AuthError:
					case ne.b.SuccessEndBroadcast:
						return t.warning;
					case ne.b.SuccessCommunity:
						return t.op;
					case ne.b.SuccessCommunityGreen:
					case ne.b.SuccessMod:
					case ne.b.SuccessUnlockComment:
						return t.approved;
					case ne.b.SuccessLockComment:
						return t.reported;
					case ne.b.EuCookiePolicy:
					case ne.b.UappBanner:
					case ne.b.Undo:
					default:
						return t.op
				}
			};
			class Rl extends u.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const e = this.props,
						{
							kind: t,
							sendEvent: n
						} = e,
						s = Nl(e, ["kind", "sendEvent"]);
					return u.a.createElement("div", s)
				}
			}
			const Al = I.a.wrapped(Rl, "PlainBread", Il.a);
			var Ll = e => u.a.createElement(Al, Ml({}, e, {
					style: Object.assign(Object.assign({}, e.style || {}), {
						"--Toaster-indicatorColor": Tl(e)
					})
				})),
				Fl = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Dl = n.n(Fl);
			const Gl = I.a.span("Text", Dl.a);
			var Ul = n("./src/reddit/components/Toaster/index.m.less"),
				Bl = n.n(Ul);
			const {
				fbt: Hl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Wl = I.a.wrapped(El.a, "AuthErrorToastIcon", Bl.a), ql = I.a.wrapped(dt.i, "AuthErrorToastPrimaryButton", Bl.a);
			class Vl extends u.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), window.location.reload(!0)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return u.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, u.a.createElement(Ll, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign(Object.assign({}, e.style), {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, u.a.createElement(Wl, null), u.a.createElement(Gl, null, Hl._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), u.a.createElement(ql, {
						type: "submit"
					}, Hl._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Ql = Vl,
				zl = n("./src/lib/constants/euCookiePolicy.ts"),
				Kl = n("./src/lib/permanentCookieOptions.ts"),
				Yl = n("./src/reddit/controls/Link/index.tsx"),
				Xl = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Jl = n.n(Xl);
			const {
				fbt: Zl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $l = I.a.div("Icon", Jl.a), eu = () => u.a.createElement($l, {
				style: {
					backgroundImage: "url(".concat(M.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), tu = I.a.wrapped(dt.i, "PrimaryButton", Jl.a), nu = I.a.wrapped(Ll, "Bread", Jl.a);
			class su extends u.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), st.a.set(pn.b, zl.c.toString(), Object(Kl.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return u.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, u.a.createElement(nu, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign(Object.assign({}, e.style), {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, u.a.createElement(eu, null), u.a.createElement(Gl, null, Zl._("Cookies help us deliver our Services. By using our Services or clicking I agree, you agree to our use of cookies.", null, {
						hk: "31CdDx"
					}), " ", u.a.createElement(Yl.a, {
						href: "https://redditinc.com/policies/cookies",
						target: "_blank"
					}, Zl._("Learn More", null, {
						hk: "MNKD5"
					})), "."), u.a.createElement(tu, {
						type: "submit"
					}, Zl._("I Agree", null, {
						hk: "33M4qf"
					}))))
				}
			}
			var ru, ou = su;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(ru || (ru = {}));
			var au = n("./src/reddit/controls/Typography/index.tsx"),
				iu = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				cu = n.n(iu);

			function du() {
				return (du = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const lu = I.a.div("Container", cu.a),
				uu = I.a.img("SideImage", cu.a),
				mu = I.a.div("Main", cu.a),
				pu = I.a.div("SubTitle", cu.a),
				bu = au.a,
				hu = I.a.wrapped(dt.j, "PrimaryLinkButton", cu.a),
				gu = I.a.wrapped(ee.a, "CloseIcon", cu.a);
			class fu extends u.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(yl(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Ol(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: n,
						style: r,
						subTitle: o,
						title: a
					} = this.props;
					return u.a.createElement(lu, {
						key: t,
						style: Object.assign(Object.assign({}, r), {
							transform: "\n            translateY(".concat(r.y, "px)\n            scale(").concat(r.x, ", ").concat(r.x, ")\n          ")
						})
					}, u.a.createElement(gu, {
						onClick: this.props.onClose
					}), u.a.createElement(uu, {
						srcSet: n
					}), u.a.createElement(mu, null, u.a.createElement(pu, null, o), u.a.createElement(au.b, null, a), u.a.createElement(bu, null, e), u.a.createElement(hu, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, s.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const vu = Object(m.b)(null, e => ({
					onSignup: () => e(Object(ri.i)())
				}))(Object(U.c)(fu)),
				Ou = "".concat(yu("subscribe-cap.png"), " 1x,\n  ").concat(yu("subscribe-cap@2x.png"), " 2x,");

			function yu(e) {
				return "".concat(M.a.assetPath, "/img/banner/").concat(e)
			}
			var Cu = n("./node_modules/@reddit/onetrust-integration/dist/esm/index.js");
			const Pu = 3,
				xu = e => "".concat(e, ":").concat(152721e4);
			var Eu = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				ju = n.n(Eu);
			const {
				fbt: Su
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _u = I.a.div("Icon", ju.a), ku = () => u.a.createElement(_u, {
				style: {
					backgroundImage: "url(".concat(M.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), wu = I.a.wrapped(dt.i, "PrimaryButton", ju.a), Iu = I.a.wrapped(Ll, "Bread", ju.a);
			class Mu extends u.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Object(Cu.b)(pn.i, xu(Pu), Object(Kl.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return u.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, u.a.createElement(Iu, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign(Object.assign({}, e.style), {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, u.a.createElement(ku, null), u.a.createElement(Gl, null, Su._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Su._param("=User Agreement", u.a.createElement(Yl.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Su._("User Agreement", null, {
						hk: "XS57W"
					}))), Su._param("=Privacy Policy", u.a.createElement(Yl.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Su._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), u.a.createElement(wu, {
						type: "submit"
					}, Su._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var Nu = Mu;

			function Tu() {
				return (Tu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ru = [],
				Au = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Lu = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Fu = {
					opacity: Object(w.spring)(0),
					x: Object(w.spring)(.6),
					y: Object(w.spring)(80, Au)
				},
				Du = I.a.wrapped(El.a, "SnooFacepalm", Bl.a),
				Gu = I.a.wrapped(jl.a, "SnooHappy", Bl.a),
				Uu = I.a.wrapped(Ys.b, "SubredditIcon", Bl.a),
				Bu = I.a.img("CustomIcon", Bl.a),
				Hu = I.a.div("Container", Bl.a),
				Wu = I.a.wrapped(ee.a, "Close", Bl.a),
				qu = I.a.wrapped(Pl.a, "LockIcon", Bl.a),
				Vu = I.a.wrapped(Sl.a, "UnlockIcon", Bl.a),
				Qu = I.a.wrapped(xl.a, "RemoveIcon", Bl.a),
				zu = e => u.a.createElement(u.a.Fragment, null, u.a.createElement(Wu, Tu({
					className: "CloseIcon"
				}, e))),
				Ku = I.a.wrapped(Ll, "Bread", Bl.a),
				Yu = Object(h.c)({
					subredditIcon: _l.c,
					toastSlices: e => e.toaster
				}),
				Xu = Object(m.b)(Yu, e => ({
					dismissToast: t => () => e(Object(G.f)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(G.f)(n))
					}
				}));
			class Ju extends u.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Zu(e, this.props.toastSlices), this.getWillEnterStyles = () => Lu, this.getWillLeaveStyles = () => Fu
				}
				render() {
					return this.props.toastSlices.length ? u.a.createElement(w.TransitionMotion, {
						defaultStyles: Ru,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => u.a.createElement(Hu, null, e.map(e => {
						const t = e.data,
							n = Object.assign(Object.assign({}, e.style), {
								transform: "\n                  translateY(".concat(e.style.y, "px)\n                  scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n                ")
							});
						if (t.kind === ne.b.Custom && void 0 !== t.customToastType) {
							const s = em[t.customToastType];
							return u.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === ne.b.UappBanner) return u.a.createElement(Nu, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === ne.b.EuCookiePolicy) return u.a.createElement(ou, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === ne.b.AuthError) return u.a.createElement(Ql, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === ne.b.Modal ? dt.i : dt.o,
							r = t.kind === ne.b.Modal ? dt.l : dt.o;
						return u.a.createElement(Ku, {
							className: t.kind === ne.b.Modal ? Bl.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(Ol(t.name)) : void 0,
							style: n
						}, u.a.createElement("div", {
							className: Bl.a.ContentWrapper
						}, $u(t, this.props.subredditIcon), t.kind === ne.b.SuccessLockComment && u.a.createElement(qu, null), t.kind === ne.b.SuccessUnlockComment && u.a.createElement(Vu, null), u.a.createElement(Gl, null, t.text)), u.a.createElement("div", {
							className: Bl.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && u.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(yl(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && u.a.createElement(r, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Cl(t.name))
							}
						}, t.secondButtonText)), u.a.createElement(zu, {
							onClick: this.props.dismissToast(t.id)
						}))
					}))) : null
				}
			}
			const Zu = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(w.spring)(1),
							x: Object(w.spring)(1, Au),
							y: Object(w.spring)(0, Au)
						}
					}))
				},
				$u = (e, t) => {
					if (e.customIconAsset) return u.a.createElement(Bu, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case ne.b.Error:
							return u.a.createElement(Du, null);
						case ne.b.SuccessEndBroadcast:
							return u.a.createElement(Qu, null);
						case ne.b.SuccessAward:
						case ne.b.SuccessCommunity:
						case ne.b.SuccessCommunityGreen:
							return u.a.createElement(Gu, null);
						case ne.b.SuccessMod:
							return u.a.createElement(Uu, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				em = {
					[ne.a.subscribeCap]: e => u.a.createElement(vu, du({
						name: ru.LoggedOutMaxSubscriptions,
						sideImage: Ou,
						title: s.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: s.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var tm = Xu(Object(U.c)(Ju)),
				nm = n("./src/reddit/featureFlags/profileCollections.ts");
			const sm = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				rm = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				});
			var om = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				am = n.n(om);
			var im = I.a.div("Wrapper", am.a),
				cm = n("./src/reddit/components/AlertBanner/index.m.less"),
				dm = n.n(cm);
			const {
				fbt: lm
			} = n("./node_modules/fbt/lib/FbtPublic.js"), um = () => u.a.createElement(im, {
				className: Object(g.a)(dm.a.wrapper, dm.a.suspended)
			}, u.a.createElement("span", null, lm._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), u.a.createElement("a", {
				className: dm.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, lm._("Learn more", null, {
				hk: "1OTc8q"
			}))), mm = () => u.a.createElement(im, {
				className: Object(g.a)(dm.a.wrapper, dm.a.fpr)
			}, u.a.createElement("span", null, lm._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), u.a.createElement("a", {
				className: dm.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, lm._("Learn more", null, {
				hk: "1OTc8q"
			}))), pm = e => {
				let {
					updateLink: t,
					onClickOldReddit: n
				} = e;
				return u.a.createElement(im, {
					className: Object(g.a)(dm.a.wrapper, dm.a.deprecated)
				}, u.a.createElement("span", null, lm._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [lm._param("update your browser", u.a.createElement(bm, {
					link: t
				}, lm._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), u.a.createElement("span", null, lm._("If you do not update your browser, we suggest you visit {old reddit} .", [lm._param("old reddit", u.a.createElement("a", {
					className: dm.a.underlineLink,
					href: M.a.oldRedditUrl,
					onClick: n
				}, lm._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, bm = e => {
				let {
					children: t,
					link: n
				} = e;
				return null !== n ? u.a.createElement("a", {
					className: dm.a.underlineLink,
					href: n
				}, t) : u.a.createElement("span", null, t)
			};
			class hm extends u.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(rm())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(sm())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n
					} = this.props;
					return e && e.isDeprecated ? u.a.createElement(pm, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? u.a.createElement(mm, null) : n ? u.a.createElement(um, null) : null
				}
			}
			var gm = Object(U.c)(hm),
				fm = n("./src/reddit/components/AlertBanner/heights.ts"),
				vm = n("./src/reddit/components/PopupPortal/index.tsx"),
				Om = n("./src/reddit/constants/componentSizes.ts"),
				ym = n("./src/reddit/constants/elementIds.ts"),
				Cm = n("./src/reddit/constants/posts.ts"),
				Pm = n("./src/reddit/contexts/InsideOverlay.tsx"),
				xm = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				Em = n("./src/reddit/helpers/postCollection.ts"),
				jm = n("./src/reddit/models/Theme/index.ts"),
				Sm = n("./src/reddit/selectors/experiments/survey.ts"),
				_m = n("./src/reddit/selectors/notificationBanner.ts"),
				km = n("./src/reddit/selectors/posts.ts"),
				wm = n("./src/reddit/components/AppRouter/index.m.less"),
				Im = n.n(wm);

			function Mm() {
				return (Mm = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Nm = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const Tm = e => {
					var {
						className: t,
						shouldDisplayPinnedSubscriptions: n
					} = e, s = Nm(e, ["className", "shouldDisplayPinnedSubscriptions"]);
					return u.a.createElement("div", Mm({
						className: Object(g.a)(Im.a.main, {
							[Im.a.mShowingPaddedPinnedDescriptions]: n
						}, t)
					}, s))
				},
				Rm = Object(v.a)(e => {
					var {
						className: t,
						overlayScrollContainerEl: n,
						theme: s
					} = e, r = Nm(e, ["className", "overlayScrollContainerEl", "theme"]);
					const o = Object(Oe.a)(Object.assign({
						theme: s
					}, r));
					return u.a.createElement("div", Mm({
						className: Object(g.a)(Im.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(jm.g)(o.canvas, o.canvasImgUrl, o.canvasImgPosition),
							"--comments-overlay-offset": "".concat(Object(gn.c)(n), "px")
						}
					}, r))
				}),
				Am = e => {
					var {
						className: t,
						divRef: n
					} = e, s = Nm(e, ["className", "divRef"]);
					return u.a.createElement("div", Mm({
						className: Object(g.a)(Im.a.lightboxHeaderWrapper, t)
					}, s, {
						ref: n
					}))
				},
				Lm = Object(_m.a)(ul.a.EmailCollectionBannerId),
				Fm = Object(m.b)(() => Object(h.c)({
					currentPage: ln.b,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(re.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: oe.t,
					isLoggedIn: oe.I,
					isNpsSurveyEnabled: Sm.b,
					isSubscriptionsPinned: Qs.b,
					isSuspended: oe.N,
					isFPR: oe.G,
					posts: km.R,
					profileCollectionsEnabled: nm.a,
					showEmailCollectionBanner: e => !Object(Pn.J)(Object(ln.b)(e)) && Lm(e)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(b.b)(t)),
					onUnpinSubscriptions: () => e(Object(E.j)()),
					onPostDismissTrigger: () => e(Object(j.a)())
				})),
				Dm = (e, t) => !(!e.state || !e.state[H.a.IsOverlay] || t === e);
			class Gm extends u.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = d()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Om.l && this.props.onUnpinSubscriptions()
					}, f.G), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(Pn.w)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								r = "".concat(f.yb.Post, "_").concat(s),
								o = t && s && t[r],
								a = o && o.belongsTo.type === Cm.a.PROFILE;
							return !(!o || !Object(Em.a)(o) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(re.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler)
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						isNpsSurveyEnabled: t,
						location: n
					} = this.props, s = n.state && n.state[H.a.IsOverlay], r = Object(P.a)(this.previousLocation, e.location);
					t && s && r && !this.didCountSurveyTrigger && (this.props.onPostDismissTrigger(), this.didCountSurveyTrigger = !0);
					const o = Object(P.a)(this.previousLocation, this.props.location),
						a = s ? this.previousPage : this.props.currentPage;
					if (a) {
						const {
							meta: t,
							urlParams: n
						} = a, s = t && (t.name === f.Bb.INDEX || t.name === f.Bb.SUBREDDIT && n.subredditName === W.b.Popular), r = Object(re.c)(this.props.frontpageSignupVariant), o = Object(re.c)(e.frontpageSignupVariant);
						s || r || !o ? r && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || s || r || o || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const i = Dm(e.location, this.previousLocation);
					y.a.write(() => {
						document.body.style.overflow = i ? "hidden" : ""
					})
				}
				componentDidUpdate() {
					this.didCountSurveyTrigger = !1
				}
				render() {
					const {
						currentPage: e,
						frontpageSignupVariant: t,
						hasInvalidSession: n,
						isFPR: r,
						isLoggedIn: o,
						isSubscriptionsPinned: a,
						isSuspended: c,
						location: d,
						onClickOutsideOverlay: m,
						routes: p,
						showEmailCollectionBanner: b
					} = this.props, {
						isSignupUpsellDisplayed: h,
						isSignupUpsellHidden: g
					} = this.state, v = this.context, O = Dm(d, this.previousLocation);
					d.state && d.state[H.a.IsOverlay] && !O ? d.state[H.a.IsOverlay] = !1 : d.state && (this.previousLocation === d || d.state[H.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[H.a.CloseLocation] && this.previousLocation.state[H.a.CloseLocation] === d.state[H.a.CloseLocation] ? d.state[H.a.CloseLocation] = Object.assign(Object.assign({}, this.previousLocation), {
						state: i()(this.previousLocation.state, H.a.CloseLocation)
					}) : d.state[H.a.CloseLocation] = this.previousLocation);
					const y = Object(P.a)(this.previousLocation, d),
						C = O || y ? this.previousLocation : d,
						x = O || y ? this.previousPage : e,
						E = !(!(x && x.meta && x.meta.name === f.Bb.SEARCH_RESULTS && x && x.queryParams) || x.queryParams[V.s]),
						j = !(!x || !x.meta || x.meta.name !== f.Bb.MODERATION_PAGES),
						_ = Object(Pn.w)(x),
						k = this.getIsPostCollection(),
						w = h && !g;
					return n ? s.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : u.a.createElement(u.a.Fragment, null, u.a.createElement(Pn.a.Provider, {
						value: x
					}, u.a.createElement(So.c, {
						isOverlayOpen: O
					}, u.a.createElement(vl.a, {
						forceRedditTheme: E
					}, h && u.a.createElement(tt, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), u.a.createElement(Um, {
						browserInfo: v,
						isFPR: r,
						isInline: w,
						isSuspended: c
					})), u.a.createElement(Pm.a.Provider, {
						value: !1
					}, u.a.createElement(vl.a, {
						forceRedditTheme: E || j,
						isCommentsPage: _
					}, u.a.createElement(Bm, {
						frontpageSignupVariant: t,
						isCommentsPage: _,
						isInline: w,
						isLoggedIn: o,
						isSubscriptionsPinned: a,
						location: C,
						overlayIsOpen: O,
						page: x,
						routes: p,
						showEmailCollectionBanner: b,
						browserInfo: v,
						showFPR: r,
						showSuspended: c
					}))))), u.a.createElement(Pn.a.Provider, {
						value: e
					}, O && u.a.createElement(Pm.a.Provider, {
						value: !0
					}, u.a.createElement(vl.a, {
						isOverlay: !0
					}, u.a.createElement(Hm, {
						isPostCollection: k,
						location: d,
						onClickOutsideOverlay: m,
						page: e,
						routes: p,
						showEmailCollectionBanner: b,
						browserInfo: v,
						showFPR: r,
						showSuspended: c
					}))), u.a.createElement(vl.a, null, u.a.createElement(l.Fragment, null, u.a.createElement("div", {
						id: vm.a,
						className: Im.a.popupContainer
					}), u.a.createElement(tm, null), u.a.createElement(fl.a, null), b && u.a.createElement(S.a, null), u.a.createElement(On, null), u.a.createElement(Gs, null)))))
				}
			}
			Gm.contextType = O.a;
			const Um = Object(U.c)(e => {
					const {
						browserInfo: t,
						isFPR: n,
						isInline: s,
						isSuspended: r
					} = e, o = {
						browserInfo: t,
						showFPR: n,
						showSuspended: r
					};
					return u.a.createElement(l.Fragment, null, u.a.createElement(gm, o), u.a.createElement(dl, {
						className: Object(g.a)(Im.a.header, Object(fm.b)(Im.a, o), {
							[Im.a.inline]: s
						})
					}))
				}),
				Bm = Object(U.c)(class extends u.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline
					}
					locationsEqual(e, t) {
						const n = i()(e, "key"),
							s = i()(t, "key");
						return o()(n, s)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const n = i()(e, ["key", "locationState"]),
								s = i()(t, ["key", "locationState"]);
							return o()(n, s)
						}
						return !1
					}
					render() {
						const {
							frontpageSignupVariant: e,
							location: t,
							routes: n,
							overlayIsOpen: s,
							isCommentsPage: r,
							isInline: o,
							isLoggedIn: a,
							isSubscriptionsPinned: i,
							showEmailCollectionBanner: c
						} = this.props, d = i && !(!a && !s && r);
						return u.a.createElement(Tm, {
							"aria-hidden": s,
							className: Object(g.a)(Object(fm.b)(Im.a, this.props), {
								[Im.a.withUpsell]: !!e,
								[Im.a.inline]: o
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && u.a.createElement(gl, {
							className: Object(g.a)(Im.a.pinnedSubscriptions, Object(fm.b)(Im.a, this.props)),
							"data-redditstyle": !0
						}), u.a.createElement(p.f, {
							location: t
						}, n), c && u.a.createElement("div", {
							className: Object(g.a)(Im.a.bottomSpacer, Object(fm.a)(Im.a, this.props))
						}))
					}
				});
			class Hm extends u.a.Component {
				constructor(e) {
					super(e), this.mouseDownInWrapper = !1, this.listingFocusSubscriptionId = 0, this.handleWebkitFullscreenChange = e => {
						this.setState({
							mediaIsFullscreen: null !== document.webkitFullscreenElement
						})
					}, this.lightboxHeaderRefFn = e => this.lightboxHeaderEl = e, this.overlayRefFn = e => {
						this.setState({
							overlayScrollContainerEl: e
						})
					}, this.onOverlayMouseUp = e => {
						if (this.mouseDownInWrapper && Object(x.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[H.a.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = xm.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(C.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && xm.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, r = !(!t || !t.meta || t.meta.name === f.Bb.SUBREDDIT_CREATION || t.meta.name === f.Bb.PUBLIC_ACCESS_NETWORK), o = e;
					return u.a.createElement(Rm, {
						className: Object(g.a)(Object(fm.b)(Im.a, this.props), {
							[Im.a.mIsCommentsLightbox]: r,
							[Im.a.mIsLargeCommentsLightbox]: o
						}),
						overlayScrollContainerEl: s
					}, u.a.createElement("div", {
						className: Object(g.a)(Im.a.overlayWrapper, Object(fm.b)(Im.a, this.props))
					}, u.a.createElement("div", {
						className: Object(g.a)(Im.a.overlayScrollContainer, {
							[Im.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: ym.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, r && u.a.createElement(Am, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(g.a)(Object(fm.b)(Im.a, this.props), {
							[Im.a.mIsLargeCommentsLightbox]: o
						}),
						tabIndex: -1
					}, u.a.createElement(ll.a, {
						page: t
					})), u.a.createElement(p.f, null, n), u.a.createElement("div", {
						className: Object(g.a)(Im.a.bottomSpacer, Object(fm.a)(Im.a, this.props))
					}))))
				}
			}
			t.b = Fm(Object(U.c)(Gm))
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				isHighlighted: "_2fUisaQtUa1Fxx6-R5fDhH"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					className: t,
					isActive: n,
					unreadCount: s
				} = e;
				return n ? r.a.createElement("span", {
					className: Object(o.a)(t, c.a.badgeCounter, {
						[c.a.isHighlighted]: n && s <= 0
					})
				}, s > 0 && Object(a.b)(s)) : null
			}
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => n.e("BannedUserModal").then(n.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BlankPost", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				i = n("./src/reddit/connectors/PostViewable/index.ts"),
				c = n("./src/reddit/selectors/posts.ts"),
				d = n("./src/lib/classNames/index.ts");
			const l = Object(i.a)(() => Object(o.c)({
					post: c.O
				})),
				u = e => {
					let {
						className: t,
						post: n,
						onPostViewable: s
					} = e;
					return n.isSponsored ? r.a.createElement(a.a, {
						post: n,
						trackDisplay: !0
					}, r.a.createElement("div", {
						className: Object(d.a)(t, "Blank ".concat(n.id))
					})) : null
				};
			t.default = l(u)
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class d extends r.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: n = !0,
							location: s,
							showModal: r,
							dialogId: o
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (o && r(), !1)
					}
				}
				componentDidMount() {
					this.props.blockOnBeforeUnload && window.addEventListener("beforeunload", this.onBeforeUnload)
				}
				componentWillUnmount() {
					this.props.blockOnBeforeUnload && window.removeEventListener("beforeunload", this.onBeforeUnload)
				}
				render() {
					const {
						enabled: e = !0
					} = this.props;
					return r.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(o.b)(null, (e, t) => ({
				showModal: () => e(Object(i.h)(t.dialogId))
			}))(Object(a.i)(d))
		},
		"./src/reddit/components/Carousel/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ChangeUsernameModals/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameModals",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameModals").then(n.bind(null, "./src/reddit/components/ChangeUsernameModals/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameModals/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameTooltip").then(n.bind(null, "./src/reddit/components/ChangeUsernameTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameTooltip/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Thumbnail/index.tsx"),
				i = n("./src/reddit/components/ClassicPost/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: n,
					crosspost: s,
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
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.thumbnailContainer, t)
				}, r.a.createElement(a.a, {
					className: Object(o.a)(c.a.thumbnail, n),
					containerClassName: b,
					crosspost: s,
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
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CoinPurchaseDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				CoinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				coinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				activeSale: "_2MCszvETQ_Z6kv8AZ0mhCe",
				purchaseList: "_310fLrnWkOCPEaTfEufxkJ"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/DefaultHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_2lgyQv1Xe7SzrqkbUeaEFL",
				headerText: "_1CH25li1ODdO2KEOCMjWEj",
				headerLink: "_1lmsw-IaCDAsy3RT_4s5s9"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_1mxOXTqB-MrirvDiecjz4Z",
				headerText: "_1eNKe31O3AOBXQgWsPIL4P",
				saleHeaderImage: "_1Vf1tHvNme79A6GR8te6F-"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_2HB5cXf0bpHe1piH74nOIQ"
			}
		},
		"./src/reddit/components/CoinPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				d = n("./src/reddit/constants/modals.ts");
			const l = () => Object(a.a)(() => Promise.all([Promise.all([n.e("vendors~CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal~UpdateCardModal"), n.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), n.e("CoinPurchaseModal")]).then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)()])).then(e => e[0].default),
				u = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: l
				});
			Object(c.b)(d.a.ECON_COIN_PURCHASE, e => r.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less": function(e, t, n) {
			e.exports = {
				CompactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				compactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				productSection: "_2VkRnsOobI-4VlOs4ID5Vy",
				primaryText: "_4cdfLigUWzeeVcPzzbe78",
				buttonSubtext: "_2Mm_ve0iAKMLDXgbbvVmSD",
				subtext: "_1K7tfdKlu_H-Eljz3TrNc8",
				priceSection: "_49wuP84YuCbFBmZg2KI5s",
				button: "_2s6F0RDk744nqzZtEK_6Og",
				crossout: "_3LPal_LVAaPThYFSl8Vav3"
			}
		},
		"./src/reddit/components/CompactCoinPurchaseList/index.m.less": function(e, t, n) {
			e.exports = {
				errorContainer: "_3dCfx1TJ9381ixSTRcnyT-",
				loaderContainer: "xqaZPpbD8_8ATMQOxTIB_",
				goldButtonStyle: "_3I7QwUDTGi8K8aDgchhSWO",
				premiumButtonStyle: "_3271lFh79mcpLNBH_vvl7r"
			}
		},
		"./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "O258FYaW9n8M2K5BGX4v_",
				wrapper: "O258FYaW9n8M2K5BGX4v_",
				backgroundAnimation: "_3wgpIyg-y7kAJzTXM19iIz",
				Container: "WWLVFaNE0_QzzlHV-5_2A",
				container: "WWLVFaNE0_QzzlHV-5_2A",
				Heading: "_2mCl3hzhnrbUnRSV0Hlgvv",
				heading: "_2mCl3hzhnrbUnRSV0Hlgvv",
				Description: "_3cd3ufhq0Jp8vxXTPbHKEa",
				description: "_3cd3ufhq0Jp8vxXTPbHKEa",
				SnooImage: "_1cU9WVsnegf986qVbdoocd",
				snooImage: "_1cU9WVsnegf986qVbdoocd",
				Footer: "_31ILosdTcnxgP48mu3YbxG",
				footer: "_31ILosdTcnxgP48mu3YbxG"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EconTopAwardersModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki~reddit-components-ProfileIdCard"), n.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki"), n.e("EconTopAwardersModal")]).then(n.bind(null, "./src/reddit/components/Econ/TopAwardersModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/TopAwardersModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.ECON_TOP_AWARDERS, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "EmailCollectionBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EmailCollectionBanner").then(n.bind(null, "./src/reddit/components/EmailCollection/Banner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EmailCollection/Banner/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/EmailVerificationTooltip/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_23C-3j-0TrSZn_NJT8fcwU",
				container: "_23C-3j-0TrSZn_NJT8fcwU",
				Disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				Link: "EzRsHBU9A06NEXZnsJyWI",
				link: "EzRsHBU9A06NEXZnsJyWI"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = {},
				r = () => null;

			function o(e, t) {
				if (e in s) throw new Error("Modal with id ".concat(e, " already registered!"));
				s[e] = t
			}

			function a(e) {
				return e && e in s ? s[e] : r
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.m.less": function(e, t, n) {
			e.exports = {
				modalOverlay: "_3b88NBdFAQ04N7cULqQvPh",
				fadeOut: "_3ktYxYLY8M4ue26GyBBjpt",
				modalBody: "_2W0vYckM4OsrrANQqi_sir",
				gildAnimationContainer: "_3xD0e6RJGug4SSLnVIPeh2",
				awardScaleIn: "_231us7lszsy_R3tzl2GqL1",
				awardScaleOut: "eC2A2qBG6f2mU9XPlMMcZ",
				animationComponent: "_2KBRcm-P0k4_mVHu1UroF6",
				starburst: "_3xKR2QByGO_30UN1TJJ9qF",
				awardAsset: "Ju8wOr8Uag5VUdjYF6E_m",
				sparkle: "_28LAx64oVvQTCvxl2mvkX4"
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "SPARKLE_ASSET_PATH", (function() {
				return f
			})), n.d(t, "STARBURST_ASSET_PATH", (function() {
				return v
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/selectors/gold/awardIcon.ts"),
				b = n("./src/reddit/selectors/gold/giveAwards.ts"),
				h = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				g = n.n(h);
			const f = "".concat(s.a.assetPath, "/img/gold/animated-sparkle-256.png"),
				v = "".concat(s.a.assetPath, "/img/gold/animated-starburst-256.png"),
				O = Object(c.c)({
					award: b.b,
					awardIcon: p.d
				}),
				y = Object(i.b)(O, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(d.a)(y(e => {
				const {
					award: t,
					awardIcon: n,
					onClose: s
				} = e;
				setTimeout(s, 1700);
				const o = r.fbt._("Animation of {award name} image", [r.fbt._param("award name", t.name)], {
					hk: "222osK"
				});
				return a.a.createElement("div", {
					className: g.a.gildAnimationContainer
				}, a.a.createElement("div", {
					className: Object(l.a)(g.a.animationComponent, g.a.starburst),
					style: {
						backgroundImage: "url(".concat(v, ")")
					}
				}), a.a.createElement("img", {
					alt: o,
					className: Object(l.a)(g.a.animationComponent, g.a.awardAsset),
					src: n
				}), a.a.createElement("div", {
					className: Object(l.a)(g.a.animationComponent, g.a.sparkle),
					style: {
						backgroundImage: "url(".concat(f, ")")
					}
				}))
			}))
		},
		"./src/reddit/components/GoogleOneTapIFrame/index.m.less": function(e, t, n) {
			e.exports = {
				IFrame: "V6V7iCbDSFo5LexMzDv4B",
				iFrame: "V6V7iCbDSFo5LexMzDv4B"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-ConvertToCoinsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~CollectionCommentsPage~CommentsPage~RpanListingUnit~Subreddit~SubredditWiki~reddit-component~1ffa6388"), n.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~e74e7afb"), n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~89877e6b"), n.e("vendors~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-components-Governance~231ed33d"), n.e("vendors~GovernanceTransferPointsModal~reddit-components-Governance-TransactionModals-ClaimPointsModa~b2d0d5d1"), n.e("reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-components-Governance-Transac~bbc9464a"), n.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CONVERT_TO_COINS, e => o.a.createElement(c, null))
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_1t5i5bNwZeJ7FuUXZ9rM-p",
				ctaContent: "jEUbSHJJx8vISKpWirlfx",
				activeSale: "_24moloPNpotQ_Incvvxwtt",
				text: "_2Q7wEg_pr4EKVIc6XvJibh",
				icon: "_1F-AgkBVxGxQsEfI3oVkVa"
			}
		},
		"./src/reddit/components/Header/MwebResponsiveHeader/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oBkxkI9Ae3Qs71WqfDicM",
				container: "_1oBkxkI9Ae3Qs71WqfDicM",
				HomeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				homeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				Snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				Wordmark: "_1rivc6IIexuAqsRVeptXuq",
				wordmark: "_1rivc6IIexuAqsRVeptXuq"
			}
		},
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, n) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6"
			}
		},
		"./src/reddit/components/Header/Sparse.m.less": function(e, t, n) {
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
		"./src/reddit/components/Header/Sparse.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				i = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Header/Sparse.m.less"),
				l = n.n(d),
				u = n("./src/lib/lessComponent.tsx");
			const m = u.a.wrapped(a.a, "Logo", l.a),
				p = u.a.wrapped(i.a, "Wordmark", l.a),
				b = u.a.div("SparseContainer", l.a),
				h = u.a.a("HomeExternalLink", l.a);

			function g(e) {
				return r.a.createElement(b, {
					id: o.c
				}, r.a.createElement(h, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, r.a.createElement(c.a, null, r.a.createElement(m, null), r.a.createElement(p, null))))
			}
		},
		"./src/reddit/components/Header/User/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3Wg53T10KuuPmyWOMWsY2F",
				icon: "_234aKY_LemFWuSTYVoshHn",
				link: "_2qcLS5et_OlJluP0WWDdsJ",
				loggedOut: "U3FRqDA_Qhr4icbaNXSuf",
				loggedOutRow: "_1JBkpB_FOZMZ7IPr3FyNfH",
				oldRedditLink: "_31lJpVPojF0SAR5usRZ36h",
				row: "_19oWd7e3z7-ztUGzdIoCR7",
				separator: "Z_HUY3BUsGOBOtdmH94ZS",
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b"
			}
		},
		"./src/reddit/components/Header/index.m.less": function(e, t, n) {
			e.exports = {
				centeredRow: "_30BbATRhFv3V83DHNDjJAO",
				container: "_2GyPfdsi-MbQFyHRECo9GO",
				compactLayout: "Y4MkVr6trrdypfZVUkpIA",
				layout: "_2vkeRJojnV7cb9pMlPHy7d",
				searchContainer: "_1iqnOY2Y57wmetu8MAjiId",
				explore: "_17gDYx5g5X6q--Lcmc9IvO",
				search: "_2dlTXDaX9JuL0bekTwhV18",
				snoo: "_1O4jTk-dZ-VIxsCuYB6OR8",
				wordmark: "_1bWuGs_1sq4Pqy099x_yy-",
				left: "_3dnbqz69WJTFCss8wl7Wlk",
				quickLinks: "_23q1waDr4n_2fR5A7zcZzb",
				right: "_2u8LqkbMtzd0lpblMFbJq5",
				HeaderDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				headerDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				bladeIsOpen: "_1z0T-r2uyIYQr2tLUWs4M2",
				MwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA",
				mwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA"
			}
		},
		"./src/reddit/components/HeaderIconContainer/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "PH-V9ggsF2mi5JTDmDqdR",
				button: "PH-V9ggsF2mi5JTDmDqdR",
				Container: "FOioVk_DUTmZIKKa82Mm1",
				container: "FOioVk_DUTmZIKKa82Mm1",
				isOpen: "_2DgzqfpTotjWrh91uFswuC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "_26MVepkxZHzpNv1cuAA4JA",
				mFocused: "_7Xbismt11Yj8tq6BaRWFr",
				buttonContainer: "oiDWziAp_Bua6rb7oQKXs",
				icon: "cq0sTeCPC4GI78UNPdClD",
				text: "_1nBP1OfpQDgTmzRFqaVult"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_1Ok0AiXwAeYl2SsUBaxgPC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3n88GuUHAnxPu6a--3e0sz",
				item: "_1TJuQGHgWvq2fnkVcPN7d0"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less": function(e, t, n) {
			e.exports = {
				filter: "_37tmRmxaFMjRRrvwcY2JmY",
				item: "_2MgAHlPDdKvXiG-Qbz5cbC",
				listHeader: "_2XRPX11qL4-HxWPuHAzOW5",
				headerButton: "_1ee4j8lY-1iIi8GkJdJ5RD"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/index.m.less": function(e, t, n) {
			e.exports = {
				caretDown: "_3CG2U_hX3HI-ibl5v2RCq1",
				container: "_3jiriKeNer8y0-1r6oWIFM",
				mOpen: "_24x5wRDxU1y38uXQXvLE4m",
				mNotPinned: "_3rS8YTDjcT7fs0k9W4rxDG",
				mPinned: "_3NgME2HFZvM-tgAE3s5hXS",
				containerText: "_1GieMuLljOrqnVpRAwz7VP",
				defaultIcon: "eZQ5o2PrhR59wkAtPbxMU",
				userIcon: "E6V2eHU4CpJuLWzneTk0Z",
				icon: "_1jKtP65jnxLmoGCSqxAgkZ",
				itemIcon: "_139PgjqaVJ8tq4kF4QznMX",
				customFeedIcon: "_1r2uMQFZw5Hg53NkK6rsKv",
				itemModQueue: "_1VemFsujoJ-6RR82VRSPeM",
				listContainer: "TMMvbwyeh9yuHKmQWHrE3",
				coinIcon: "JisrPypso_3RK4iDgDdke",
				itemCoin: "_334CPGEglbIA_2CwQAn43P",
				itemPremium: "yeM4RoZW6FtJxVPe3Z84C",
				premiumIcon: "_2ulegyMhoTE_WCFyBC-IBx",
				itemPublicAccessNetwork: "_16Lm-ZR49L-1nxQV124cD-",
				publicAccessNetworkIcon: "_3jFEC4X3IL9Zr-pzUzyCp7",
				modQueueIcon: "_2L4XuYlbElLC5REx1XpdG_",
				multiPlusButton: "_3mvXSuBIpYAdAsBJSB-1G5",
				multiPlusIcon: "_2T11xMsmkdwP6G_mY6eUBW",
				pin: "_2FVCfsIPxXtl6S-c69sXO4",
				disabled: "_371yhrlWAj7dxOsk1PWqG4",
				selector: "h-jI8r2f9ozTNqu_2TBeY",
				subredditIcon: "_3fvJBCH6c6P0NvMwoqK9MJ",
				unknownIcon: "_1hCoGzhwFdfF2vGbt8IjSy"
			}
		},
		"./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "nSJCQrnLY07CzwT8tTsNO",
				title: "csebgIdGwT3fBJ8kUT2aQ",
				subtitle: "rsZg2IAMPbcDGNPnNIBy_",
				description: "_3m-DocsNGlVUjAtAm7ZZLi",
				dismissBtn: "_3tJL-r-lrTcB_GkrrlZxEN"
			}
		},
		"./src/reddit/components/HeaderUserActions/index.m.less": function(e, t, n) {
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
				envelopeIcon: "_1V77mEI1g_5ZlCh_c2-Yab",
				isUnread: "_2Wgcbg0LNUiJf4L2fVQJ7O",
				notificationInboxIcon: "_2mR_VyuaB50nsX1FR6XERF"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/index.m.less": function(e, t, n) {
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
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				inlineButton: "_18X7KoiaLuKbuLqg4zE8BH",
				dropdownOpen: "_3F3oKTToidUQ0CbMS1cccX",
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF"
			}
		},
		"./src/reddit/components/LightboxHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "K4Eem3pMbRbAYioOfqN5E",
				isCollection: "_1_ihtgX_FgdbtB-rbz84r6",
				postDetails: "-DOLBAFWXMQX1Q3ErGO8I",
				mediaIcon: "_33YMDoIltkTaZemWTS7Yki",
				galleryIcon: "_16ZfB-TEDZe7GTSTpIP-RR",
				postTitle: "P9Qd6oTCWgLr3ackKg0I5",
				postTitleLink: "_1iZHnGYX-Wc90AM6BQQemg",
				membershipPaywallTitle: "SHwEfOV-Wq0AnI-uha8Ci",
				horizontalVotes: "_15Igkrvvp7jIfVHt0eKzFd",
				actions: "_25ONQRwoX20oeRXFl_FZXt",
				close: "c_rRg_d32D6ZO5sV8DmMM",
				closeText: "C9XkFfcvNxFrFRVdKxc8x",
				closeIcon: "_3hSPveXgjl1l-8ltRYGAIh"
			}
		},
		"./src/reddit/components/LightboxHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/shortcuts/close.ts"),
				m = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = n("./src/reddit/components/FlairWrapper/index.tsx"),
				b = n("./src/reddit/components/PostTitle/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/constants/colors.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/helpers/postCollection.ts"),
				O = n("./src/reddit/hooks/useButtons2020.ts"),
				y = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				C = n("./src/reddit/icons/fonts/Gif/index.tsx"),
				P = n("./src/reddit/icons/fonts/Link/index.tsx"),
				x = n("./src/reddit/icons/fonts/Photos/index.tsx"),
				E = n("./src/reddit/icons/fonts/Text/index.tsx"),
				j = n("./src/reddit/icons/svgs/Close/index.tsx"),
				S = n("./src/reddit/icons/svgs/Gallery/index.tsx"),
				_ = n("./src/reddit/models/Media/index.ts"),
				k = n("./src/reddit/models/Vote/index.ts"),
				w = n("./src/reddit/selectors/experiments/categories.ts"),
				I = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				M = n("./src/reddit/selectors/platform.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/components/LightboxHeader/index.m.less"),
				R = n.n(T);
			const A = Object(i.c)({
					isInCategoriesExperiment: w.a,
					post: M.n,
					isScoreDiscounted: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						var r;
						if (!n && !s) return !1;
						const o = e.platform.lastPage,
							a = e.platform.currentPage,
							i = (null === (r = null == a ? void 0 : a.meta) || void 0 === r ? void 0 : r.name) === d.Bb.COMMENTS,
							c = !Object(N.H)(e) && i && !o;
						if (c && !Object(I.b)(e)) return !1;
						const l = n && Object(M.n)(e, {
								page: n
							}) || s,
							u = Object(I.d)(e, {
								isActionBarAnimationEnabled: !0,
								postId: l && l.id,
								isForceSelected: c
							});
						return !!u && u > 0
					}
				}),
				L = Object(a.b)(A, (e, t) => {
					let {
						sendEvent: n
					} = t;
					return {
						close: () => {
							e(Object(u.a)(n, !0))
						},
						toggleVote: (t, n) => e(n === k.a.upvoted ? Object(l.S)(t) : Object(l.q)(t))
					}
				}, (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), n), {
					onVoteClick: s => {
						const r = e.post || n.post;
						r && t.toggleVote(r.id, s)
					}
				}));
			class F extends o.a.Component {
				constructor() {
					super(...arguments), this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}
				}
				render() {
					const {
						className: e,
						onCloseClick: t,
						onVoteClick: n,
						page: a,
						post: i,
						isScoreDiscounted: l
					} = this.props, u = G[i && i.media ? i.media.type : _.o.EMBED], h = !i && a && a.meta && a.meta.name === d.Bb.META_MEMBERSHIP_PAYWALL_PAGE;
					return o.a.createElement("div", {
						className: Object(c.a)(R.a.container, e, {
							[R.a.isCollection]: i && Object(v.a)(i)
						})
					}, o.a.createElement("div", {
						className: R.a.postDetails
					}, i && o.a.createElement(r.Fragment, null, l ? void 0 : o.a.createElement(m.a, {
						className: R.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: i,
						onVoteClick: n,
						redditStyle: !0
					}), o.a.createElement(u, {
						className: R.a.mediaIcon
					}), o.a.createElement(b.c, {
						className: R.a.postTitle,
						post: i,
						size: b.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: g.a.lightboxHeaderText,
						titleLinkClassName: R.a.postTitleLink,
						showCategoryTag: !0
					}), o.a.createElement(p.a, {
						post: i,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), h && a && a.urlParams.subredditName && o.a.createElement("div", {
						className: R.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", "r/".concat(a.urlParams.subredditName))], {
						hk: "4vP4VY"
					}))), o.a.createElement("div", {
						className: R.a.actions
					}, o.a.createElement(D, {
						onClick: t || this.closeLightbox
					})))
				}
			}
			const D = o.a.memo(e => {
					return Object(O.a)() ? o.a.createElement(f.q, {
						size: f.c.XS,
						onClick: e.onClick,
						priority: f.b.Plain,
						Icon: j.a,
						text: s.fbt._("Close", null, {
							hk: "4gbyAA"
						}),
						title: s.fbt._("Close", null, {
							hk: "4gbyAA"
						}),
						"aria-label": s.fbt._("Close", null, {
							hk: "4gbyAA"
						}),
						"data-redditstyle": !0
					}) : o.a.createElement(f.o, {
						className: R.a.close,
						onClick: e.onClick,
						title: s.fbt._("Close", null, {
							hk: "4gbyAA"
						}),
						"aria-label": s.fbt._("Close", null, {
							hk: "4gbyAA"
						})
					}, o.a.createElement(j.a, {
						className: R.a.closeIcon
					}), o.a.createElement("span", {
						className: R.a.closeText
					}, s.fbt._("Close", null, {
						hk: "4gbyAA"
					})))
				}),
				G = {
					[_.o.GIFVIDEO]: C.a,
					[_.o.IMAGE]: x.a,
					[_.o.TEXT]: E.a,
					[_.o.RTJSON]: E.a,
					[_.o.VIDEO]: y.a,
					[_.o.EMBED]: P.a,
					[_.o.LIVEVIDEO]: y.a,
					[_.o.GALLERY]: e => o.a.createElement("i", {
						className: Object(c.a)(R.a.galleryIcon, e.className)
					}, o.a.createElement(S.a, null))
				};
			t.a = Object(h.c)(L(F))
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = "Header--Moderation",
				a = () => null;
			t.b = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(r.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/PinnedSubscriptions/index.m.less": function(e, t, n) {
			e.exports = {
				title: "FRrbwuHy8Zmlubp3nowLZ",
				listHeader: "_3hELZctjzdizaWjW1al9DZ",
				unpin: "_2oY_N7NWiAv9m_mFIRdwVX",
				icon: "_3B-ny-D97ZKwdUyXAaWF19",
				Component: "_20fGT0XJD3MvX9yBsVeKMn",
				component: "_20fGT0XJD3MvX9yBsVeKMn"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts"),
				o = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const a = () => Object(r.a)(() => Promise.all([Promise.all([n.e("vendors~CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal~UpdateCardModal"), n.e("PremiumPurchaseModal")]).then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(o.d)()])).then(e => e[0].default),
				i = Object(s.a)({
					getComponent: a,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			t.a = i
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "AdminPanel",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~AdminPanel"), n.e("AdminPanel")]).then(n.bind(null, "./src/reddit/components/AdminPanel/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdminPanel/index.tsx"
				}
			});

			function l() {
				return Object(a.d)(e => Object(i.b)(e) || Object(c.F)(e)) ? o.a.createElement(d, null) : null
			}
		},
		"./src/reddit/components/Root/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL"
			}
		},
		"./src/reddit/components/Root/redesignFont.less": function(e, t, n) {},
		"./src/reddit/components/SearchDropdown/index.m.less": function(e, t, n) {
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
				planetIcon: "_2Tfe4NhLJlRQkuO1yhzqR2",
				subredditIcon: "_3uBNO7SvsRGN4W794WAO_p",
				subredditIconStyles: "_26nS8Ogzm0pqOjlwfGRgJR",
				postTitle: "YeMwUP22Up8CVxmgTayyQ"
			}
		},
		"./src/reddit/components/ShortcutIndexModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ShortcutWrapper/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ShortcutWrapper",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~ShortcutWrapper"), n.e("ShortcutWrapper")]).then(n.bind(null, "./src/reddit/components/ShortcutWrapper/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ShortcutWrapper/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, n) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
			}
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return C
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/preferences.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/helpers/survey/index.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			const m = (e, t) => {
					const n = u.experiment(e, t);
					return n ? {
						experiment_name: n.name,
						experiment_variant: n.variant,
						experiment_version: n.version
					} : {}
				},
				p = e => {
					switch (e) {
						case l.a.CES:
							return "ces";
						case l.a.CSAT:
							return "csat";
						case l.a.NPS:
							return "nps"
					}
				},
				b = (e, t) => n => Object.assign(Object.assign({
					source: "survey",
					action: t,
					noun: "intro"
				}, u.defaults(n)), {
					survey: m(n, e)
				}),
				h = (e, t, n, s) => r => Object.assign(Object.assign({
					source: "survey",
					action: t,
					noun: "rating"
				}, u.defaults(r)), {
					survey: Object.assign({
						type: p(n),
						min: n === l.a.NPS ? 0 : 1,
						max: n === l.a.NPS ? 10 : 7,
						score: s
					}, m(r, e))
				}),
				g = (e, t, n, s) => r => Object.assign(Object.assign({
					source: "survey",
					action: t,
					noun: "freeform_text"
				}, u.defaults(r)), {
					survey: Object.assign({
						type: p(n),
						text: s
					}, m(r, e))
				});
			var f = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/experiments/index.ts"),
				y = n("./src/reddit/selectors/user.ts");
			const C = () => {
					const e = Object(i.c)(),
						[t, n] = Object(a.useState)(null),
						s = Object(f.a)(),
						r = Object(i.d)(y.g),
						d = Object(i.d)(y.mb),
						u = Object(i.d)(O.a, o.a),
						m = Object(a.useMemo)(() => {
							const e = Object(l.f)(),
								t = {};
							for (const n of e) t[n] = u[n];
							return t
						}, [u]),
						p = Object(a.useCallback)(e => {
							const s = Object(l.e)({
								actionType: e,
								surveyExperimentVariants: m,
								samplingId: r || d
							});
							if (!s || s === t) return;
							const o = m[s.experiment_name];
							(null == o ? void 0 : o.variant) && s.variants[o.variant] && setTimeout(() => n(s), 1e3 * s.variants[o.variant].delay)
						}, [t, m, r, d]);
					return Object(a.useEffect)(() => {
						const e = Object(l.c)(),
							t = e.subscribe(p);
						return () => e.unsubscribe(t)
					}, [p]), Object(a.useEffect)(() => {
						if (!t) return;
						const n = Date.now();
						Object(l.g)(t, n), e(Object(c.H)({
							surveyLastSeenTime: n
						}, !1)), s(b(t.experiment_name, "display"))
					}, [t, e, s]), t
				},
				P = e => {
					let {
						activeStepNum: t,
						activeSurvey: n,
						isFollowUp: s,
						textResponse: r,
						setTextResponse: o,
						setIsSurveyDismissed: i
					} = e;
					(e => {
						let {
							isFollowUp: t,
							textResponse: n
						} = e;
						const s = Object(a.useCallback)(e => {
							if (t && n.length) return e.preventDefault(), e.returnValue = "sure?", "sure?"
						}, [t, n]);
						Object(a.useEffect)(() => (window.addEventListener("beforeunload", s), () => window.removeEventListener("beforeunload", s)), [s])
					})({
						isFollowUp: s,
						textResponse: r
					});
					const [c, d] = Object(a.useState)(!1), l = Object(f.a)(), u = n.experiment_name, m = n.steps[t] && n.steps[t].type, p = Object(a.useCallback)(() => {
						t >= 0 ? d(!0) : (i(!0), l(b(n.experiment_name, "dismiss")))
					}, [t, n, l, i]), v = Object(a.useCallback)(() => {
						o(""), i(!0), l(s ? g(u, "dismiss", m) : h(u, "dismiss", m))
					}, [u, s, l, i, o, m]);
					return {
						isLeavingModalShowing: c,
						onClose: p,
						onLeaveCancel: Object(a.useCallback)(() => d(!1), []),
						onLeaveConfirm: v
					}
				},
				x = e => {
					let {
						activeSurvey: t,
						selectedNumber: n,
						setIsSurveyDismissed: s,
						setSelectedNumber: r,
						setTextResponse: o,
						textResponse: i
					} = e;
					const [c, d] = Object(a.useState)(-1), [u, m] = Object(a.useState)(0), [p, v] = Object(a.useState)(!1), O = Object(f.a)(), y = Object(a.useCallback)(() => {
						const e = t.experiment_name,
							a = t.steps[c] && t.steps[c].type,
							f = t.steps[c + 1] && t.steps[c + 1].type;
						if (m(u + 1), -1 === c) return O(b(e, "agree")), d(0), void O(h(e, "display", f));
						O(p ? g(e, "submit", a, i) : h(e, "submit", a, n && n + (a === l.a.NPS ? 0 : 1))), r(void 0), o(""), p || !t.steps[c].follow_up_question ? (v(!1), c + 1 >= t.steps.length ? s(!0) : (d(c + 1), O(h(e, "display", f)))) : (v(!0), O(g(e, "display", f)))
					}, [c, t, p, i, n, O, s, r, o, u]);
					return {
						activeStepNum: c,
						isFollowUp: p,
						onStepComplete: y,
						uiStep: u
					}
				},
				E = (e, t, n) => {
					const r = Object(i.c)();
					Object(a.useEffect)(() => {
						e && !t && n > 1 && setTimeout(() => {
							r(Object(d.e)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: v.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [r, e, t, n])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/Survey/hooks.ts");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "SurveyAsync",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SurveyAsync").then(n.bind(null, "./src/reddit/components/Survey/Async.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Survey/Async.tsx"
				}
			});

			function c() {
				const e = Object(a.d)();
				return e ? o.a.createElement(i, {
					activeSurvey: e
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = n("./src/reddit/models/StructuredStyles/index.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/lib/CSSVariableProvider/index.tsx"),
				f = n("./src/lib/isAdHocMultireddit/index.ts");
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(l.o)(e, t);
			class O extends o.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: n
					} = this.props;
					return o.a.createElement(g.e, {
						theme: n,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const y = Object(a.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.j)(e), e => {
				if (Object(p.j)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.j)(e)) return Object(p.g)(e, t)
			}, v, Object(c.a)((e, t) => {
				if (Object(p.j)(e) || Object(h.fb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.G)(e, n);
				if (!s) return;
				if (Object(h.eb)(e, {
						subredditId: s
					})) return;
				const r = e.structuredStyles.models[s];
				return r || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.y)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.ob)(e).nightmode
			}, (e, t) => {
				if (!Object(h.ob)(e).hideNSFW) return !0;
				const n = v(e, t);
				if (n) {
					const t = Object(b.B)(e, {
						subredditName: n
					});
					return !(!t || !t.isNSFW)
				}
				const s = Object(l.d)(e, t);
				return !!s && s.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, r, o, a, i, c, d, l, p) => {
				const b = Object.assign(Object.assign({}, i ? {
						emojiWidth: i[0],
						emojiHeight: i[1]
					} : {}), {
						shouldShowNSFWContent: d,
						isCommentsPage: p,
						isOverlay: l
					}),
					h = o && o.length && !Object(f.a)(o) ? "SubredditVars-r-".concat(o) : g.c;
				if (t && n && r) {
					const e = Object(u.h)(n, r);
					return {
						isRootOrUniqueClassName: h,
						theme: Object(m.i)(e, b)
					}
				}
				if (a) {
					const e = Object(u.h)(a);
					let t;
					return {
						isRootOrUniqueClassName: h,
						theme: t = c ? Object(m.h)(e, b) : Object(m.i)(e, b)
					}
				}
				return {
					isRootOrUniqueClassName: h,
					theme: Object(s.merge)(e, {
						subredditContext: b
					})
				}
			}))(O);
			t.b = y;
			const C = Object(d.t)()(y)
		},
		"./src/reddit/components/Toaster/EuCookiePolicyToast.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_2pPCvXlD2wzNO9taY3pzqw",
				icon: "_2pPCvXlD2wzNO9taY3pzqw",
				PrimaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				primaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				Bread: "_3RhWPJfjpsEoBw52x0fQp2",
				bread: "_3RhWPJfjpsEoBw52x0fQp2"
			}
		},
		"./src/reddit/components/Toaster/MilestoneToast.m.less": function(e, t, n) {
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
		"./src/reddit/components/Toaster/PlainBread.m.less": function(e, t, n) {
			e.exports = {
				PlainBread: "trdUvQxqQHHqQKOUBcgnr",
				plainBread: "trdUvQxqQHHqQKOUBcgnr"
			}
		},
		"./src/reddit/components/Toaster/StyledComponents.m.less": function(e, t, n) {
			e.exports = {
				Text: "_7JH6kQpO-bx66b9ajIZrz",
				text: "_7JH6kQpO-bx66b9ajIZrz"
			}
		},
		"./src/reddit/components/Toaster/UappBannerToast.m.less": function(e, t, n) {
			e.exports = {
				Icon: "NODQrxMsajJv0SMw0Glss",
				icon: "NODQrxMsajJv0SMw0Glss",
				PrimaryButton: "_-660JDG_NhSvu-lby-LYB",
				primaryButton: "_-660JDG_NhSvu-lby-LYB",
				Bread: "_3jUV8naze01hV-7EqsBdjm",
				bread: "_3jUV8naze01hV-7EqsBdjm"
			}
		},
		"./src/reddit/components/Toaster/index.m.less": function(e, t, n) {
			e.exports = {
				AuthErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				authErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				AuthErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				authErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				CustomIcon: "_3F4cPSBsBgzFOcnpe466x-",
				customIcon: "_3F4cPSBsBgzFOcnpe466x-",
				SnooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				snooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				SnooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				snooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				SubredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				subredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				UnlockIcon: "tClrg2w16xkW4hmCj8nTo",
				unlockIcon: "tClrg2w16xkW4hmCj8nTo",
				LockIcon: "ZI0D2mGVpaunJEvFji7pm",
				lockIcon: "ZI0D2mGVpaunJEvFji7pm",
				RemoveIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
				removeIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
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
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/AdViewability/index.tsx"),
				a = n("./src/reddit/components/BlankPost/index.tsx"),
				i = n("./src/reddit/connectors/PostViewable/index.ts");
			const c = Object(i.a)(null);
			class d extends r.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? r.a.createElement(a.BlankPost, {
						post: t,
						onPostViewable: n
					}) : r.a.createElement(o.a, {
						post: t,
						trackDisplay: !0
					}, e)
				}
			}
			t.a = c(d)
		},
		"./src/reddit/components/UserFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "_2jjk9b3mpveU6Vpam4kPBm",
				clearButton: "_2HCY4xCLt3RKVIgnkh0ZgW",
				Section: "_3dGLI85CRTmDAbSQrDiQZl",
				section: "_3dGLI85CRTmDAbSQrDiQZl",
				CheckboxText: "_2pIwiaNLf5jaTR1EK7Nx09",
				checkboxText: "_2pIwiaNLf5jaTR1EK7Nx09"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/selectors/experiments/econ/snoovatar.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/components/UserIcon/helpers.ts"),
				l = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				u = n("./src/reddit/components/UserIcon/UserIcon.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const b = Object(a.c)({
					currentUser: c.i,
					isNightMode: c.T,
					isSnoovatarEnabled: i.a,
					shouldHideNSFW: c.A
				}),
				h = Object(o.b)(b);
			t.a = h(e => {
				const {
					currentUser: t,
					isSnoovatarEnabled: n
				} = e, s = p(e, ["currentUser", "isSnoovatarEnabled"]), o = Object(d.a)(null == t ? void 0 : t.accountIcon);
				return n && o ? r.a.createElement(l.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(u.a, m({}, s, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				}))
			})
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, n) {
			"use strict";
			var s, r, o, a;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "d", (function() {
					return o
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/"
				}(s || (s = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.PreferenceStatus = "preferenceStatus", e.Register = "register", e.Resize = "resize", e.ShowStep = "showStep", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(r || (r = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(o || (o = {})),
				function(e) {
					e.SelectAccount = "select-account", e.Email = "email", e.EmailOptIn = "email-opt-in", e.GoogleUI = "google-ui", e.Subscribe = "subscribe", e.UsernameAndPassword = "username-and-password"
				}(a || (a = {}))
		},
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "l", (function() {
				return i
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "g", (function() {
				return O
			}));
			const s = "DEFAULT",
				r = "",
				o = "All Communities",
				a = "top",
				i = "MOD",
				c = "moderating",
				d = "LOCAL_COMMUNITIES",
				l = "near-you",
				u = "/subreddits/leaderboard/",
				m = {
					id: r,
					name: r,
					path: "".concat(u)
				},
				p = {
					id: d,
					name: l,
					path: "".concat(u).concat(l, "/")
				},
				b = [{
					name: "Sports",
					id: "c1015",
					path: "".concat(u, "sports/")
				}, {
					name: "News",
					id: "c1009",
					path: "".concat(u, "news/")
				}, {
					name: "Gaming",
					id: "c1019",
					path: "".concat(u, "gaming/")
				}, {
					name: "Aww",
					id: "c1000",
					path: "".concat(u, "aww/")
				}],
				h = {
					id: r,
					name: r,
					path: "".concat(u),
					image: "popcorn-snoo",
					tagline: "Trending communities are so hot right now",
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				g = {
					id: d,
					name: l,
					path: "".concat(u).concat(l, "/"),
					image: "magnifying-glass-snoo",
					tagline: "Local communities —\nSee what’s near you",
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				f = [{
					name: "Sports",
					id: "c1015",
					path: "".concat(u, "sports/"),
					image: "basketball-snoo",
					tagline: "Sports communities are the real MVP",
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "News",
					id: "c1009",
					path: "".concat(u, "news/"),
					image: "newsie-snoo",
					tagline: "News communities to keep you informed",
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Gaming",
					id: "c1019",
					path: "".concat(u, "gaming/"),
					image: "esports-snoo",
					tagline: "Gaming communities taking it to the next level",
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Aww",
					id: "c1000",
					path: "".concat(u, "aww/"),
					image: "cat-snoo",
					tagline: "Aww communities —\nget in on this cuteness",
					gradients: ["#F3B54F", "#EC5428"]
				}],
				v = [{
					name: "Beauty",
					id: "c1023",
					path: "".concat(u, "beauty/"),
					image: "makeup-snoo",
					tagline: "Beauty communities make us all look good",
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Fashion",
					id: "c1002",
					path: "".concat(u, "fashion/"),
					image: "90s-nostalgia-snoo",
					tagline: "Fashion communities are always in style",
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "Food",
					id: "c1003",
					path: "".concat(u, "food/"),
					image: "cookbooks-snoo",
					tagline: "Food communities to make you go mmmm",
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Fitness",
					id: "c1006",
					path: "".concat(u, "health_and_fitness/"),
					image: "yoga-snoo",
					tagline: "Fitness communities that know how to work it",
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Outdoors",
					id: "c1010",
					path: "".concat(u, "outdoors/"),
					image: "telescope-snoo",
					tagline: "Outdoor communities —\nthey’re really out there",
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Relationships",
					id: "c1013",
					path: "".concat(u, "relationships/"),
					image: "childrensbooks-snoo",
					tagline: "Relationship communities understand all the feels",
					gradients: ["#F08C3A", "#D72E33"]
				}],
				O = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = o.a.createContext(Object(s.a)([]))
		},
		"./src/reddit/contexts/ThrottlingContext/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/featureThrottling.ts"),
				a = n("./src/reddit/helpers/featureThrottling/store/index.ts");
			const i = {
					isThrottled: !1,
					resetFeature: () => {
						throw new Error("Component attempted to reset feature with no ThrottlingContext")
					},
					throttleFeature: () => {
						throw new Error("Component attempted to throttle feature with no ThrottlingContext")
					}
				},
				c = Object.keys(o.a).reduce((e, t) => (e[t] = Object(s.createContext)(i), e), {});
			class d extends r.a.Component {
				constructor(e) {
					super(e), this.onThrottlingDataChange = (e, t) => {
						if (t) {
							const e = a.a.isFeatureThrottled(t);
							this.setState(n => e === n[t].isThrottled ? null : Object.assign(Object.assign({}, n), {
								[t]: Object.assign(Object.assign({}, n[t]), {
									isThrottled: e
								})
							}))
						} else this.setState(e => {
							const t = Object.keys(o.a).reduce((t, n) => (a.a.isFeatureThrottled(n) && (t[n] = Object.assign(Object.assign({}, e[n]), {
								isThrottled: !0
							})), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const n = c[t];
						return r.a.createElement(n.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(o.a).reduce((e, t) => (e[t] = {
						isThrottled: !1,
						resetFeature: a.a.resetFeature.bind(a.a, t),
						throttleFeature: a.a.throttleFeature.bind(a.a, t)
					}, e), {})
				}
				componentDidMount() {
					a.a.subscribe(this.onThrottlingDataChange)
				}
				componentWilUnmount() {
					a.a.unsubscribe(this.onThrottlingDataChange)
				}
				render() {
					return Object.keys(c).reduce(this.renderContextProvider, this.props.children)
				}
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				d = n.n(c);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(o.a)(d.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, r.a.createElement("span", {
				tabIndex: -1,
				className: d.a.labelContent
			}, e.isSelected ? r.a.createElement(i.a, {
				className: d.a.checkboxSelected
			}) : r.a.createElement(a.a, {
				className: d.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.m.less": function(e, t, n) {
			e.exports = {
				invisibleText: "_1RIl585IYPW6cmNXwgRz0J"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InvisibleScreenReaderText/index.m.less"),
				o = n.n(r);
			t.a = s.a.span("invisibleText", o.a)
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, n) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Link/index.m.less"),
				o = n.n(r);
			t.a = s.a.a("link", o.a)
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Search/index.m.less"),
				h = n.n(b);
			const g = Object(o.b)(() => Object(a.c)({
				subredditsByName: Object(c.a)((e, t) => {
					const n = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						n[t.subredditName] = Object(u.B)(e, {
							subredditName: t.subredditName
						})
					}), n
				})
			}));
			t.a = g(e => r.a.createElement("div", {
				className: Object(i.a)(p.a.subText, h.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => r.a.createElement(d.a, {
				key: "".concat(t.subredditName, "-hoverCard"),
				subredditName: t.subredditName
			}, r.a.createElement(l.b, {
				className: Object(i.a)(h.a.subredditIcon, h.a.isHeaderIcon, e.iconClassName),
				linkTo: "/r/".concat(t.subredditName, "/"),
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : r.a.createElement(l.b, {
				className: Object(i.a)(h.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && r.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				is2020: "_2zIsUnTMNBBTNB6vw68Wdy",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/hooks/useButtons2020.ts"),
				c = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				d = n.n(c);
			t.a = r.a.memo(e => {
				const t = Object(i.a)(),
					n = e.size || a.c.XS;
				return r.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(o.a)(d.a.toggleSwitch, e.className, d.a[n], {
						[d.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[d.a.mDisabled]: e.disabled,
						[d.a.is2020]: t
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle()
				}, r.a.createElement("div", {
					className: Object(o.a)(d.a.toggleDisplay, t ? d.a.is2020 : "")
				}))
			})
		},
		"./src/reddit/controls/Typography/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/Typography/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Typography/index.m.less"),
				o = n.n(r);
			s.a.h1("heading1", o.a), s.a.h2("heading2", o.a), s.a.h3("heading3", o.a), s.a.h4("heading4", o.a);
			const a = s.a.h5("heading5", o.a),
				i = (s.a.h6("heading6", o.a), s.a.p("body1", o.a), s.a.p("body2", o.a)),
				c = (s.a.p("actionFont", o.a), s.a.p("metadata", o.a));
			s.a.p("metadata3", o.a)
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			const o = (e, t) => Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/orders"),
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
				a = (e, t) => Object(r.a)(e, {
					method: "get",
					endpoint: "".concat(s.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
				})
		},
		"./src/reddit/endpoints/economics/paymentSystems.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				return Object(r.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/ps/me/stripe-connect-links"),
					method: "post"
				})
			}

			function a(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/ps/me"),
					method: "patch",
					data: {
						stripe: {
							authorization: Object.assign(Object.assign({}, t), {
								scope: "read_write"
							})
						}
					}
				})
			}

			function i(e) {
				return Object(r.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/ps/me"),
					method: "get"
				})
			}

			function c(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/ps/me/stripe-sources/").concat(t),
					method: "delete"
				})
			}

			function d(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/ps/me/braintree-sources/").concat(t),
					method: "delete"
				})
			}
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/communities/").concat(t.subredditId, "/me"),
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

			function l(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/orders"),
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.productId,
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
				return Object(a.a)(Object(r.a)(e, [o.a]), {
					endpoint: "".concat(e.apiUrl, "/api/info?id=").concat(t.join(",")),
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(c.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return Object.assign(Object.assign({}, e), {
							body: t
						})
					}
					return e
				})
			}
			async function p(e, t) {
				const n = await Object(a.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/orders"),
					method: "post",
					data: Object.assign(Object.assign({}, t), {
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					})
				});
				if (!n.ok) throw new Error("Error fetching provisional membership: ".concat(Object(i.b)(n.error)));
				return n.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/merge.js"),
				r = n.n(s),
				o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				i = n("./src/reddit/endpoints/governance/community.ts"),
				c = n("./src/reddit/endpoints/governance/products/badges.ts"),
				d = n("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, n) {
				const s = {
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
							endpoint: "".concat(o.a.metaUrl, "/product-collections/").concat(t, "?types=badge")
						})
					}(e, t),
					u = Object(i.a)(e, {
						subredditId: t
					}),
					m = Object(c.b)(e, t),
					p = Object(a.c)(e, t, n),
					[b, h, g, f] = await Promise.all([l, u, m, p]);
				if (b.ok ? s.collections = b.body : s.errors.collections = b.error, h.ok) {
					const e = h.body;
					s.subscription = e.specialMemberships, s.communityRaw = e
				}
				return g.ok ? s.products = g.body : s.errors.products = g.error, f.ok ? (r()(s.badges, f.body.badges), s.userOwnedBadges = f.body.userOwnedBadges) : s.errors.userBadges = f.error, s
			}
			const u = (e, t) => Object(d.a)(e, {
				endpoint: "".concat(o.a.metaUrl, "/products/").concat(t, "?types=badge,membership"),
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "j", (function() {
				return d
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "l", (function() {
				return g
			}));
			var s, r = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function c(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "homestead";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error("No ethereum network for provider: ".concat(e))
			}
			async function d(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function u(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(s || (s = {}));
			const m = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				p = e => ({
					type: "claim",
					subredditId: e
				}),
				b = e => ({
					type: "subscribe",
					subredditId: e
				}),
				h = (e, t, n, s) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: s
				});
			async function g(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/graphql/operations/GetNearbySubreddits.json"),
				r = n("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(r.a)(e, Object.assign(Object.assign({}, s), {
				variables: t
			}))
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/graphql/operations/TopSubreddits.json"),
				r = n("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(r.a)(e, Object.assign(Object.assign({}, s), {
				variables: t
			}))
		},
		"./src/reddit/helpers/categoryPickerWidget/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./src/reddit/helpers/name/index.ts");
			const r = (e, t) => t.map(t => {
					const n = Object(s.g)(t.name),
						r = n.split(" & ").join("_and_");
					return Object.assign(Object.assign({}, t), {
						name: n,
						path: t.path || "".concat(e).concat(r, "/")
					})
				}),
				o = e => Object(s.g)(e).split("_and_").join(" & ")
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = () => new BroadcastChannel("external_account"),
				r = e => {
					const t = s();
					t.postMessage({
						type: "connected",
						provider: e
					}), t.close()
				}
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/lodash/isEmpty.js");
			var s = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				r = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const o = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const o = {},
						a = [];
					for (let i of t) {
						const {
							node: e
						} = i, t = r(i, ["node"]), n = Object(s.a)(e);
						o[n.id] = n, a.push(t)
					}
					return {
						pageInfo: n,
						rankings: a,
						subreddits: o
					}
				},
				a = e => {
					let {
						edges: t
					} = e;
					const n = {},
						o = [];
					for (let a of t) {
						const {
							node: e
						} = a, t = r(a, ["node"]), i = Object(s.a)(e);
						n[i.id] = Object.assign(Object.assign({}, i), {
							bannerBackgroundImage: e && e.styles && e.styles.bannerBackgroundImage
						}), o.push(t)
					}
					return {
						rankings: o,
						subreddits: n
					}
				},
				i = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const r = {},
						o = [];
					let a = 0;
					for (const {
							node: i
						} of t) {
						const e = Object(s.a)(i);
						r[e.id] = Object.assign(Object.assign({}, e), {
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}), o.push({
							id: e.id,
							rank: a
						}), a += 1
					}
					return {
						rankings: o,
						subreddits: r,
						pageInfo: n
					}
				}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_1YWXCINvcuU7nk0ED-bta8",
				strokeBasedIcon: "B4DjK05AesOOJqD3vekf",
				metaContainer: "_1HGeWoy6faY2UWkCD7cYoW",
				outboundLink: "_1Jtes5zRWNpwobWM4O2Unx",
				button: "_2KotRmn9DgdA58Ikji2mnV",
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				d = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				l = n.n(d);
			const u = i.a.button("button", l.a),
				m = e => t => r.a.createElement("div", {
					className: t.className
				}, e);

			function p(e, t, n) {
				return h(e, t, !0, Object.assign({}, n))
			}

			function b(e, t, n) {
				return h(e, t, !1, Object.assign({}, n))
			}

			function h(e, t, n, s) {
				const i = e,
					d = "function" == typeof t ? t : m(t),
					{
						meta: u,
						strokeBasedIcon: p
					} = s,
					b = (e, t) => r.a.createElement(r.a.Fragment, null, r.a.createElement(i, {
						className: Object(a.a)(l.a.icon, {
							[l.a.isLit]: e,
							[l.a.strokeBasedIcon]: t
						})
					}), r.a.createElement(d, {
						className: l.a.body
					}), u && r.a.createElement("div", {
						className: l.a.metaContainer
					}, u));
				return n ? e => r.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, b(e.isLit, p), r.a.createElement(c.a, {
					className: l.a.outboundLink
				})) : e => e.href ? r.a.createElement(o.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, b(e.isLit, p)) : r.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.button),
					onClick: e.onClick
				}, b(e.isLit, p))
			}
		},
		"./src/reddit/helpers/survey/config.json": function(e) {
			e.exports = JSON.parse('{"survey_cooldown_days":182,"active_surveys":[{"experiment_name":"nps_survey_scroll_trigger","trigger_event":"feed_scroll_1_page","variants":{"enabled":{"survey_enabled":true,"trigger_threshold":2,"sample_factor":0.5}},"steps":[{"type":"NPS","question":"How likely are you to recommend Reddit to a friend?","follow_up_question":"What\'s your main reason for feeling that way?"}]},{"experiment_name":"d2x_nps_survey_dismiss_post_trigger","trigger_event":"dismiss_post","variants":{"enabled":{"survey_enabled":true,"trigger_threshold":3,"sample_factor":0.01}},"steps":[{"type":"NPS","question":"How likely are you to recommend Reddit to a friend?","follow_up_question":"What\'s your main reason for feeling that way?"}]},{"experiment_name":"survey_demo_nps_1","trigger_event":"feed_scroll_1_page","variants":{"enabled":{"survey_enabled":true,"trigger_threshold":1,"sample_factor":1}},"steps":[{"type":"NPS","question":"How likely are you to recommend Reddit to a friend?","follow_up_question":"What is the primary reason for your score?"}]},{"experiment_name":"survey_demo_combined_1","trigger_event":"feed_scroll_1_page","variants":{"enabled":{"survey_enabled":true,"trigger_threshold":1,"sample_factor":1}},"steps":[{"type":"CES","question":"How easy was it to create a post?","follow_up_question":"What, if anything, would make it easier to create a post?"},{"type":"CSAT","question":"How satisfied are you with your experience on Reddit today?","follow_up_question":null},{"type":"NPS","question":"How likely are you to recommend Reddit to a friend?","follow_up_question":"What is the primary reason for your score?"}]},{"experiment_name":"d2x_layer_survey","trigger_event":"layer_feed_scroll_1_page","variants":{"enabled":{"survey_enabled":true,"trigger_threshold":1,"sample_factor":0.5}},"steps":[{"type":"CSAT","question":"How would you rate your overall satisfaction with r/Layer?","follow_up_question":"What is the primary reason for your score on r/Layer?"},{"type":"CSAT","question":"How would you rate your overall satisfaction with collaborating on art in r/Layer?","follow_up_question":"What was the primary reason for your score on collaborating on art in r/Layer?"},{"type":"CSAT","question":"How would you rate your overall satisfaction with the r/Layer community?","follow_up_question":"What is the primary reason for your score on the r/Layer community?"}]}]}')
		},
		"./src/reddit/helpers/survey/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				r = n("./node_modules/lodash/once.js"),
				o = n.n(r),
				a = (n("./node_modules/core-js/modules/es6.regexp.split.js"), function(e, t, n) {
					return t = t || 1, (n = n || 0) + (9301 * (e = "number" == typeof e ? e : e.split("").reduce((e, t) => t.charCodeAt(0) + e, 0)) + 49297) % 233280 / 233280 * (t - n)
				}),
				i = n("./src/reddit/actions/survey/constants.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts");
			const d = n("./src/reddit/helpers/survey/config.json"),
				l = o()(() => Object(s.a)());
			var u;
			! function(e) {
				e.CES = "CES", e.CSAT = "CSAT", e.NPS = "NPS"
			}(u || (u = {}));
			const m = {
					[i.a]: "layer_feed_scroll_1_page",
					[i.c]: "feed_scroll_1_page",
					[i.b]: "dismiss_post"
				},
				p = e => {
					let {
						actionType: t,
						surveyExperimentVariants: n,
						samplingId: s
					} = e;
					var r;
					const o = Object(c.A)(),
						i = Object(c.B)(),
						l = 864e5 * d.survey_cooldown_days;
					if (!i || !i[t] || o && Date.now() - o <= l) return null;
					const u = [],
						{
							active_surveys: m
						} = d;
					for (let c = 0; c < m.length; c++) {
						const {
							experiment_name: e,
							trigger_event: o,
							variants: d
						} = m[c], l = null === (r = n[e]) || void 0 === r ? void 0 : r.variant, p = l && d[l];
						o !== t || !i[o] || !p || !p.survey_enabled || i[o] < p.trigger_threshold || a(s + e) > p.sample_factor || u.push(m[c])
					}
					return u.length ? u[Math.floor(Math.random() * u.length)] : null
				},
				b = (e, t) => {
					const {
						trigger_event: n
					} = e;
					Object(c.nb)(t), Object(c.N)(n)
				},
				h = () => d.active_surveys.map(e => e.experiment_name),
				g = e => e.steps.reduce((e, t) => e + 1 + (t.follow_up_question ? 1 : 0), 0)
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => Object.assign(Object.assign({
					source: "dfp",
					action: "request",
					noun: "ad"
				}, r.defaults(e)), {
					subreddit: r.subreddit(e)
				}),
				a = () => e => Object.assign(Object.assign({
					source: "dfp",
					action: "define",
					noun: "ad"
				}, r.defaults(e)), {
					subreddit: r.subreddit(e)
				}),
				i = (e, t) => n => {
					const o = t ? e.dfpDetails.slot.getSlotId().getDomId() : e.slot.getSlotId().getDomId(),
						a = -1 !== o.indexOf(s.c.ABOVE_THE_FOLD) ? s.c.ABOVE_THE_FOLD : s.c.BELOW_THE_FOLD,
						i = document.querySelector("#" + o);
					let c, d;
					if (i && (c = s.f.HOUSE_AD, -1 !== i.innerHTML.indexOf("google_ads_iframe") && (c = s.f.PROGRAMMATIC_AD), i.children && i.children.length > 0)) {
						const e = i.children[0];
						d = "".concat(e.offsetWidth, "x").concat(e.offsetHeight)
					}
					const l = t ? "aax" : void 0;
					return Object.assign(Object.assign({
						source: "post",
						action: "view",
						noun: "programmatic_ad"
					}, r.defaults(n)), {
						subreddit: r.subreddit(n),
						programmatic: {
							adUnit: d ? "DESKTOP ".concat(d, " ").concat(a) : "DESKTOP ".concat(a),
							count: 1,
							partner: l,
							type: c
						}
					})
				},
				c = (e, t, n) => o => Object.assign(Object.assign({
					source: "post",
					action: "view",
					noun: "programmatic_ad"
				}, r.defaults(o)), {
					subreddit: r.subreddit(o),
					programmatic: {
						adUnit: null !== e && null !== t ? "DESKTOP ".concat(e, "x").concat(t, " ").concat(n) : "DESKTOP ".concat(n),
						count: 1,
						type: s.f.SWITCH_HOUSE_AD
					}
				})
		},
		"./src/reddit/helpers/trackers/authControls.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/platform.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					const t = Object(r.o)(e);
					return {
						actionInfo: Object(o.actionInfo)(e),
						post: t && Object(o.post)(e, t) || null,
						profile: Object(o.profile)(e),
						screen: Object(o.screen)(e),
						subreddit: Object(o.subreddit)(e)
					}
				},
				i = e => t => Object.assign({
					source: e,
					action: s.c.CLICK,
					noun: "login"
				}, a(t)),
				c = e => t => Object.assign({
					source: e,
					action: s.c.CLICK,
					noun: "signup"
				}, a(t)),
				d = () => e => Object.assign({
					source: "user_dropdown",
					action: s.c.CLICK,
					noun: "login_signup"
				}, a(e))
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					customFeed: Object(s.customFeedByPath)(t, e),
					source: "custom_feeds"
				}),
				o = e => t => Object.assign(Object.assign({}, r(e, t)), {
					action: "click",
					noun: "delete"
				}),
				a = e => t => Object.assign(Object.assign({}, r(e, t)), {
					action: "click",
					noun: "follow"
				}),
				i = e => t => Object.assign(Object.assign({}, r(e, t)), {
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => Object.assign(Object.assign({}, r(e, t)), {
					action: "click",
					noun: "duplicate"
				}),
				d = e => t => Object.assign(Object.assign({}, r(e, t)), {
					action: "click",
					noun: "share"
				}),
				l = e => t => Object.assign(Object.assign({}, r(e, t)), {
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => Object.assign(Object.assign({}, r(e, t)), {
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/shortcuts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "s", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "t", (function() {
				return P
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "c", (function() {
				return _
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				o = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: s.post(n, t)
				}),
				a = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: s.comment(n, t)
				}),
				i = r("show_panel"),
				c = r("esc_close"),
				d = e => o("enter_open_post", e),
				l = e => a("enter_comment_collapse", e),
				u = e => o("j_next", e),
				m = e => a("j_next", e),
				p = e => o("k_previous", e),
				b = e => a("k_previous", e),
				h = e => o("n_next", e),
				g = e => o("p_previous", e),
				f = e => o("s_save", e),
				v = e => a("s_save", e),
				O = e => o("h_hide", e),
				y = e => o("x_expando", e),
				C = e => o("a_upvote", e),
				P = e => a("a_upvote", e),
				x = e => o("z_downvote", e),
				E = e => a("z_downvote", e),
				j = r("c_create_post"),
				S = e => o("l_go_to_link", e),
				_ = e => a("r_comment", e);
			r("q_navigation")
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/constants/wiki.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = "/wiki";
				return e.subredditName && (n = "/r/".concat(e.subredditName, t ? "/about/wiki" : "/wiki"), e.wikiSubRoute && (n += "/".concat(e.wikiSubRoute))), e.wikiPageName ? n += "/".concat(e.wikiPageName.toLowerCase()) : e.wikiSubRoute || (n += "/".concat(s.i)), n
			}
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || o.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less": function(e, t, n) {
			e.exports = {
				TextMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he",
				textMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(o.b)("expandoMediaVideo"), " ").concat(e.className)
			}), "TextMediaIcon", i.a);
			t.a = c
		},
		"./src/reddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = (n("./src/polyfill.ts"), n("./src/lib/performanceTimings/index.tsx")),
				o = n("./node_modules/@r/google-tag-manager/compiled.js"),
				a = n("./src/config.ts"),
				i = n("./node_modules/history/esm/history.js"),
				c = n("./node_modules/js-cookie/src/js.cookie.js"),
				d = n.n(c),
				l = n("./node_modules/react/index.js"),
				u = n.n(l),
				m = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./node_modules/redux-thunk/es/index.js"),
				b = n("./node_modules/request-idle-callback/index.js"),
				h = n("./src/lib/browser/isIncognito.ts"),
				g = n("./src/lib/constants/index.ts"),
				f = n("./src/lib/extractQueryParams/index.ts"),
				v = n("./src/lib/filterQueryParams/index.ts"),
				O = n("./src/lib/getParsedUserAgent/index.ts"),
				y = n("./src/lib/initializeClient/index.tsx"),
				C = n("./src/lib/matchRoute/index.ts"),
				P = n("./src/lib/performance.js"),
				x = n("./src/lib/reCaptchaEnterprise/index.ts"),
				E = n("./src/lib/safeJSONParse/index.ts"),
				j = n("./src/lib/serviceWorker/index.ts"),
				S = n("./src/reduxMiddleware/apiContext.ts"),
				_ = n("./src/reduxMiddleware/gqlContext.ts"),
				k = n("./src/telemetry/index.ts"),
				w = n("./src/telemetry/models/Timer.ts"),
				I = n("./src/reddit/actions/apiRequestHeaders.ts"),
				M = n("./src/reddit/actions/chat/toggle.ts"),
				N = n("./src/reddit/actions/chat/unreadCount.ts"),
				T = n("./src/reddit/actions/emailCollection/index.ts"),
				R = n("./src/reddit/actions/emailVerification.ts"),
				A = n("./src/reddit/actions/googleOneTap/index.ts"),
				L = n("./src/reddit/actions/media.ts"),
				F = n("./src/reddit/actions/multireddit/index.ts"),
				D = n("./src/reddit/actions/notifications/loader.ts"),
				G = n("./src/reddit/actions/notifications/state.ts"),
				U = n("./src/reddit/actions/nps.ts"),
				B = n("./src/reddit/actions/platform.ts"),
				H = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				W = n("./src/reddit/actions/session.ts"),
				q = n("./src/reddit/actions/survey/index.ts"),
				V = n("./src/reddit/actions/theme.ts"),
				Q = n("./src/reddit/actions/toaster.ts"),
				z = n("./src/reddit/actions/users.ts"),
				K = n("./node_modules/react-redux/es/index.js"),
				Y = n("./node_modules/react-router/esm/react-router.js"),
				X = n("./node_modules/reselect/es/index.js"),
				J = (n("./src/reddit/components/Root/redesignFont.less"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Root/index.m.less")),
				Z = n.n(J),
				$ = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				ee = n("./src/lib/doubleclickForPublishers/index.ts"),
				te = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ne = n("./src/reddit/helpers/trackers/ads.ts"),
				se = n("./src/reddit/selectors/meta.ts");
			const re = Object(X.c)({
				region: se.m
			});
			class oe extends u.a.Component {
				constructor(e) {
					super(e), Object(ee.f)({
						limitDataProcessing: "CA" === this.props.region,
						onRequest: () => this.props.sendEvent(Object(ne.b)()),
						onAdView: (e, t) => {
							Math.random() <= a.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(ne.c)(e, t))
						}
					})
				}
				shouldComponentUpdate() {
					return !1
				}
				render() {
					return null
				}
			}
			var ae = Object(K.b)(re)(Object(te.c)(oe)),
				ie = n("./src/lib/classNames/index.ts"),
				ce = n("./src/reddit/components/AppRouter/index.tsx"),
				de = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				le = n("./src/reddit/constants/shortcuts.ts"),
				ue = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				me = n.n(ue);
			var pe = e => {
					let {
						children: t
					} = e;
					return u.a.createElement("div", {
						className: me.a.shortcutDiv,
						id: le.b,
						tabIndex: -1
					}, u.a.Children.only(t))
				},
				be = n("./src/reddit/contexts/Buttons2020.ts"),
				he = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				ge = n("./src/reddit/components/Header/Sparse.tsx"),
				fe = n("./src/reddit/components/ThemeProvider/index.tsx"),
				ve = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Oe = n("./src/reddit/controls/Button/index.tsx"),
				ye = n("./src/reddit/featureFlags/index.ts"),
				Ce = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Pe = n("./src/reddit/pages/InternalServerError/index.m.less"),
				xe = n.n(Pe);
			const {
				fbt: Ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), je = Object(X.c)({
				showError: ye.d.showVerboseErrors
			}), Se = Object(K.b)(je)(e => u.a.createElement(ve.a.Provider, {
				value: !1
			}, u.a.createElement(fe.b, {
				subredditName: ""
			}, u.a.createElement("div", null, u.a.createElement(ge.a, {
				logoHref: "#",
				logoOnClick: () => window.location.reload(!0)
			}), u.a.createElement("div", {
				className: xe.a.container
			}, u.a.createElement("div", {
				className: xe.a.mainContent
			}, u.a.createElement(Ce.a, {
				className: xe.a.dizzySnoo
			}), u.a.createElement("h3", {
				className: xe.a.title
			}, Ee._("Sorry, for some reason reddit can't be reached.", null, {
				hk: "2yRKWG"
			})), u.a.createElement("div", {
				className: xe.a.subTitle
			}, Ee._("Give us a few minutes to fix the problem. Sorry!", null, {
				hk: "1c7Mg0"
			})), u.a.createElement(Oe.i, {
				onClick: () => window.location.reload(!0)
			}, Ee._("Reload Page", null, {
				hk: "S79U1"
			})), e.showError && u.a.createElement("div", {
				className: xe.a.subTitle
			}, e.error.message)), u.a.createElement("div", {
				className: xe.a.topImageContainer
			}, u.a.createElement("img", {
				className: xe.a.image,
				src: "".concat(a.a.assetPath, "/img/error/star_pattern.png")
			})), u.a.createElement("div", {
				className: xe.a.bottomImageContainer
			}, u.a.createElement("img", {
				className: xe.a.image,
				src: "".concat(a.a.assetPath, "/img/error/half_planet.png")
			})))))));
			var _e = n("./src/reddit/selectors/experiments/buttons2020.ts");

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const we = Object(X.c)({
					theme: e => e.themes.current,
					isInButtons2020: _e.a
				}),
				Ie = Object(K.b)(we, {})(e => {
					let {
						children: t,
						isInButtons2020: n,
						theme: s
					} = e;
					const r = Object(he.a)({
						theme: s
					});
					return u.a.createElement(be.a.Provider, {
						value: n
					}, u.a.createElement("div", {
						className: Object(ie.a)(Z.a.container, n ? "isInButtons2020" : "isNotInButtons2020"),
						style: {
							"--background": r.body,
							"--canvas": r.canvas
						}
					}, t))
				});

			function Me(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return u.a.createElement(te.a, null, u.a.createElement(Ie, null, u.a.createElement(ae, null), u.a.createElement($.a, null), u.a.createElement(de.a, null), u.a.createElement(pe, null, u.a.createElement(t, null, u.a.createElement(Y.d, {
						component: Ne(n)
					})))))
				}
				return u.a.createElement(Se, {
					error: e.error
				})
			}
			const Ne = e => t => u.a.createElement(ce.b, ke({
				routes: e
			}, t));
			var Te = n("./src/reddit/constants/localStorage.ts"),
				Re = n("./src/reddit/selectors/user.ts"),
				Ae = n("./node_modules/lodash/throttle.js"),
				Le = n.n(Ae),
				Fe = n("./src/reddit/helpers/localStorage/index.ts");
			const De = 1e3;
			class Ge extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = Le()(() => Object(Fe.bb)(this.props.storageKey, this.props.value), De)
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
			Ge.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const Ue = Object(X.a)(Re.I, e => ({
				storageKey: Te.r,
				value: {},
				enabled: !e
			}));
			var Be = Object(K.b)(Ue)(Ge);
			var He = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(Be, null)),
				We = n("./src/reddit/constants/headers.ts"),
				qe = n("./src/reddit/constants/history.ts"),
				Ve = n("./src/reddit/constants/jsapiEvents.ts"),
				Qe = n("./src/reddit/constants/parameters.ts"),
				ze = n("./src/reddit/constants/screenWidths.ts"),
				Ke = n("./src/reddit/contexts/AdminEvents.ts"),
				Ye = n("./src/reddit/contexts/ApiContext.tsx"),
				Xe = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				Je = n("./node_modules/brcast/dist/brcast.es.js"),
				Ze = n("./src/telemetry/helpers/sendEvent.ts"),
				$e = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var et = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(Je.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object($e.b)(s) || Object(Re.F)(s)) && (e = !0, Object(Ze.c)(t)), s => r => {
								const o = s(r),
									a = n.getState();
								if (!Object($e.b)(a)) {
									const n = Object(Re.F)(a);
									e && !n ? (e = !1, Object(Ze.c)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(Ze.c)(t), e = !0)
								}
								return o
							}
						}
					}
				} : () => ({
					broadcaster: Object(Je.a)([]),
					middleware: () => e => t => e(t)
				}),
				tt = n("./node_modules/lodash/debounce.js"),
				nt = n.n(tt),
				st = n("./src/lib/domUtils/index.ts");
			const rt = 30 * g.eb;
			let ot = Date.now();
			const at = () => {
					ot = Date.now()
				},
				it = !!Object(st.f)() && {
					passive: !0
				};
			window.addEventListener("click", at, !1), window.addEventListener("wheel", nt()(at, 250), it), window.addEventListener("mousemove", nt()(at, 250), it), window.addEventListener("keydown", nt()(at, 250), it);
			var ct = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - ot >= rt ? (e.dispatch(W.h()), at()) : at()
					})), e => t => e(t)
				},
				dt = n("./node_modules/@reddit/onetrust-integration/dist/esm/index.js"),
				lt = n("./node_modules/lodash/pick.js"),
				ut = n.n(lt),
				mt = n("./src/reddit/actions/header.ts"),
				pt = n("./src/reddit/actions/preferences.ts"),
				bt = n("./src/reddit/constants/cookie.ts"),
				ht = n("./src/reddit/constants/preferences.ts");
			const gt = new Set([pt.f, pt.i, V.b, pt.c, pt.o, mt.d, mt.e, pt.r]);
			var ft = e => t => n => {
					const s = t(n);
					if (gt.has(n.type)) {
						const t = e.getState().user,
							n = {
								prefs: ut()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", ht.b, ht.d, ht.e]),
								language: t.language
							},
							s = new Date;
						s.setFullYear(s.getFullYear() + 2), Object(dt.b)(bt.j, btoa(JSON.stringify(n)), {
							expires: s,
							domain: a.a.cookieDomain
						})
					}
					return s
				},
				vt = n("./src/lib/fastdom/index.ts"),
				Ot = n("./src/reddit/actions/tabBadging.ts"),
				yt = n("./src/reddit/selectors/chat.ts"),
				Ct = n("./src/server/helpers/seoMetadata.tsx");
			var Pt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === B.e) {
						const t = e.getState(),
							s = Object(Re.H)(t),
							{
								meta: r
							} = n.payload;
						s ? ((e, t) => {
							const n = Object(Re.D)(e) || 0,
								s = Object(yt.a)(e) + n;
							Object(Ot.b)(s, t)
						})(t, r.title) : vt.a.write(() => {
							document.title = r.title, Object(Ct.b)(t, document)
						})
					}
					return s
				} : () => e => t => e(t),
				xt = n("./src/reddit/helpers/survey/index.ts");
			var Et = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(xt.b).filter(t => t === e).length)(t.type) && (Object(Fe.E)(xt.b[t.type]), Object(xt.c)().setState(xt.b[t.type])), e(t)) : () => e => t => e(t);
			const jt = 5 * g.eb;
			var St = e => {
					const t = Le()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(W.g())
					}, jt);
					let n, s;
					const r = () => {
							const n = e.getState().user.session;
							if (!n || !s) return;
							const r = new Date(n.expires),
								o = s + Math.floor(.8 * (r.getTime() - s));
							Date.now() > o && t && t()
						},
						o = e => {
							s = Date.now();
							const r = new Date(e.expires).getTime() - s,
								o = .8 + .1 * Math.random(),
								a = Math.min(Math.floor(o * e.expiresIn * 1e3), Math.floor(o * r));
							n = setTimeout(t, a)
						},
						a = e.getState();
					return a.user.session && o(a.user.session), window.addEventListener("focus", r), window.addEventListener("touchend", r), document.body.addEventListener("mouseenter", r), e => t => (t.type !== W.a && t.type !== W.b && t.type !== W.c && t.type !== W.e || o(t.payload), t.type === W.d && (clearTimeout(n), n = null), e(t))
				},
				_t = n("./src/reddit/singleton/tracing/index.ts");
			var kt = e => e => t => {
					const n = () => e(t);
					return _t.b.isEnabled ? _t.b.recordLocalSpan(t.type, n) : e(t)
				},
				wt = n("./src/reddit/actions/frontpage.ts"),
				It = n("./src/reddit/actions/page.ts"),
				Mt = n("./src/reddit/actions/pages/profileComments.ts"),
				Nt = n("./src/reddit/actions/pages/profileOverview.ts"),
				Tt = n("./src/reddit/actions/pages/profilePosts.ts"),
				Rt = n("./src/reddit/actions/pages/search.ts"),
				At = n("./src/reddit/actions/pages/subreddit.ts"),
				Lt = n("./src/reddit/actions/search.ts"),
				Ft = n("./src/reddit/actions/subreddit.ts"),
				Dt = n("./src/reddit/actions/tracking.ts"),
				Gt = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				Ut = n("./src/reddit/helpers/history/index.ts"),
				Bt = n("./src/reddit/helpers/trackers/commentList.ts"),
				Ht = n("./src/reddit/helpers/trackers/postList.ts"),
				Wt = n("./src/reddit/helpers/trackers/screenview.ts"),
				qt = n("./src/reddit/selectors/platform.ts"),
				Vt = n("./src/reddit/selectors/subreddit.ts"),
				Qt = n("./src/reddit/helpers/routeKey/index.ts");
			var zt = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(Dt.c({
							routeKey: t
						}))
					};
					if (n.type === B.a) {
						const s = e.getState(),
							r = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							a = Object(Vt.G)(s, r) || "",
							i = (s.subreddits.about[a] || {}).advertiserCategory;
						o.trigger("pageview", Object.assign(Object.assign({}, ut()(n.payload.location, "pathname", "search", "hash")), {
							subreddit: r,
							advertiserCategory: i
						}));
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(Qt.b)(c, s, Object(Gt.a)(s));
							if (e && k.c.has(e)) {
								const t = k.c.end(e);
								!Object(qt.i)(s) && Object(Ut.b)(qe.a.IsOverlay) || Object(Wt.j)(c, s, w.TimerType.UserCancelled, t)
							}
						}
						const d = n.payload.routeMatch;
						if (!d) return t(n);
						const l = Object(Gt.a)(s, d),
							u = Object(Qt.b)(d, s, l);
						if (!u) return t(n);
						k.c.start(u)
					}
					const r = t(n);
					switch (n.type) {
						case It.g:
						case Nt.b:
						case Nt.e:
						case Tt.e:
						case Mt.e:
						case At.c: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case Rt.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case wt.b:
						case Ft.i:
						case Tt.b: {
							const {
								key: t,
								postIds: r
							} = n.payload;
							s(t);
							const o = e.getState();
							if (r.length) break;
							if (void 0 === o.listings.postOrder.endMarkers[t]) break;
							Ht.j(o, t);
							break
						}
						case Mt.b: {
							const {
								key: t,
								commentIds: r
							} = n.payload;
							if (s(t), r.length) break;
							const o = e.getState();
							if (void 0 === o.profileCommentsPage.endMarkers[t]) break;
							Bt.a(o, t);
							break
						}
						case Lt.c: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return r
				},
				Kt = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Yt = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				Xt = n("./src/reddit/selectors/telemetry.ts");
			const Jt = e => t => Object.assign(Object.assign({}, Xt.defaults(t)), {
				action: "leave",
				actionInfo: Xt.actionInfo(t, {
					reason: e
				}),
				noun: "app",
				source: "global"
			});
			let Zt = null;
			const $t = () => {
				Zt && window.clearTimeout(Zt), Zt = null
			};
			var en = e => {
					Zt = window.setTimeout(() => {
						$t(), Object(k.a)((e => t => Object.assign(Object.assign({}, Xt.defaults(t)), {
							action: "view",
							noun: "heartbeat",
							source: "global",
							timer: {
								type: w.TimerType.GoodVisit,
								millis: e
							}
						}))(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", $t)
				},
				tn = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				nn = n("./src/reddit/constants/experiments.ts"),
				sn = n("./src/reddit/featureFlags/utils.ts"),
				rn = n("./src/reddit/helpers/chooseVariant/index.ts");
			const on = Object(sn.a)(() => "undefined" != typeof fetch, e => !!Object(rn.c)(e, {
				experimentEligibilitySelector: rn.a,
				experimentName: nn.y
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var an = n("./node_modules/crypto-js/sha256.js"),
				cn = n.n(an),
				dn = n("./node_modules/uuid/v4.js"),
				ln = n.n(dn),
				un = n("./src/lib/addQueryParams/index.ts"),
				mn = n("./src/lib/constants/euCookiePolicy.ts");
			const pn = Object(sn.e)(sn.g, sn.h, e => !!Object(rn.c)(e, {
				experimentEligibilitySelector: Object(sn.d)(Object(sn.b)(...mn.b)),
				experimentName: "show_white_ops"
			}));
			var bn = n("./src/lib/permanentCookieOptions.ts");
			const hn = e => {
				if (!e) return;
				const t = (d.a.get(bt.h) || "").split(",");
				if (!t.includes(e)) {
					t.unshift(e);
					const n = t.slice(0, 10).join(","),
						s = Object(bn.a)();
					Object(dt.b)(bt.h, n, s)
				}
			};
			var gn = n("./src/lib/loadWithRetries/index.ts"),
				fn = n("./src/reddit/layout/page/Listing/index.tsx"),
				vn = n("./src/reddit/models/Toast/index.ts"),
				On = n("./src/reddit/reducers/index.ts"),
				yn = n("./src/reddit/routes/index.ts"),
				Cn = n("./src/reddit/selectors/experiments/index.ts");
			var Pn = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				xn = n("./src/reddit/selectors/experiments/htmlResponseStreaming.ts");
			const En = {
					displayDelay: 15,
					displayOnRoutes: [g.Bb.SUBREDDIT, g.Bb.COMMENTS],
					experimentName: nn.Cb,
					experimentVariant: nn.Gb.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				jn = e => {
					const {
						base_url: t
					} = Object(Xt.requestWithParams)(e), n = Object(qt.b)(e), s = n && n.urlParams.partialPostId, r = n && n.urlParams.subredditName;
					return Object.assign(Object.assign(Object.assign({}, t && {
						rbl: t
					}), r && {
						s: r
					}), s && {
						p: s
					})
				},
				Sn = e => {
					if ((((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return t.experimentOverrides[n] === s
						})(En, e) || (e => {
							let {
								samplingRate: t,
								seed: n
							} = e;
							return !!n && 0 === Math.floor(n * t)
						})(En)) && ((e, t) => {
							let {
								displayOnRoutes: n
							} = e;
							const s = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!s && n.includes(s)
						})(En, e) && ((e, t) => {
							let {
								isSEOOnly: n
							} = e;
							return !n || t.meta.isSessionSeo
						})(En, e) && ((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return Object(rn.c)(t, {
								experimentName: n,
								experimentEligibilitySelector: rn.a
							}) === s
						})(En, e)) return {
						displayDelay: En.displayDelay,
						externalVars: jn(e)
					}
				};
			var _n = n("./src/reddit/singleton/EventSystem.ts"),
				kn = n("./src/lib/initializeClient/installReducer.ts"),
				wn = n("./src/reddit/reducers/features/categories/index.ts"),
				In = n("./src/lib/makeActionCreator/index.ts"),
				Mn = n("./src/lib/sentry/index.ts"),
				Nn = n("./src/reddit/actions/publicAccessNetwork/userSettings.ts"),
				Tn = n("./src/reddit/actions/global/constants.ts");
			Object(kn.a)({
				features: {
					categories: wn.a
				}
			});
			const Rn = Object(In.a)(Tn.a);
			Object(r.e)(r.b.EntryPointStart);
			const An = Object(S.a)({
					actionDispatchers: {
						reddaidReceived: z.s,
						loidReceived: z.q,
						sessionTrackerReceived: z.x
					},
					authHeaders: {
						[We.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						reddaidReceived: z.d,
						loidReceived: z.b,
						sessionTrackerReceived: z.k,
						userAuthenticated: W.c,
						userLoggedOut: W.d,
						userReauthenticated: W.e,
						headersReceived: I.a
					},
					onBeforeRequestFactory: tn.a,
					statsAppName: g.l.Redesign
				}),
				Ln = Object(_.a)(An.apiContext),
				Fn = et();
			let Dn;
			Object(y.a)({
				reducerMap: On.a,
				routes: yn.a,
				apiContext: An.apiContext,
				gqlContext: Ln.gqlContext,
				appFactory: (e, t) => u.a.createElement(Ke.a.Provider, {
					value: Fn.broadcaster
				}, u.a.createElement(Ye.a.Provider, {
					value: {
						apiContext: An.apiContext,
						gqlContext: Ln.gqlContext
					}
				}, u.a.createElement(Xe.b, null, u.a.createElement(Me, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(He, null)))),
				appName: g.l.Redesign,
				history: Object(i.a)({
					getUserConfirmation(e, t) {
						const n = Dn;
						if (!n) return;
						n.dispatch(Object(B.k)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), n.dispatch(Object(B.j)())
							}
						}))
					}
				}),
				customMiddleware: [p.a.withExtraArgument({
					routes: yn.a,
					apiContext: An.apiContext,
					gqlContext: Ln.gqlContext
				}), Fn.middleware, ct, An.middleware, Ln.middleware, St, ft, kt, zt, Pt, Et],
				modifyInitialData: e => {
					let {
						initialData: t,
						browserHistory: n
					} = e;
					const s = t.platform.currentPage ? t.platform.currentPage.key : "";
					if (s) {
						const e = n.location.key;
						t.platform.currentPage && (t.platform.currentPage.key = e);
						for (const n of ["referrers", "metas"]) Object.keys(t.platform[n]).length && (t.platform[n] = {
							[e]: t.platform[n][s]
						})
					}
					return t
				},
				staticPages: {
					loading: u.a.createElement(fn.a, {
						content: null,
						sidebar: null
					})
				},
				preRender: e => {
					let {
						browserHistory: t,
						routes: n,
						store: s
					} = e;
					window.addEventListener("message", e => {
							const t = a.a.mediaUrl;
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || s.dispatch(Object(L.j)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: "t3_".concat(e.data.id36)
							}))
						}), window.addEventListener("beforeunload", () => {
							const e = s.getState();
							Object(j.b)("sendV2Event", Jt("tab_closed")(e))
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || s.dispatch(Object(B.g)());
					const r = Object(Re.T)(s.getState());
					s.dispatch(Object(V.c)({
						nightmode: r
					}));
					const o = (e => e.tracing.traceId)(s.getState());
					if (o && (e => Object(rn.c)(e, {
							experimentEligibilitySelector: rn.a,
							experimentName: nn.v
						}) === nn.B.Enabled)(s.getState())) {
						_t.b.enableTracing(!0);
						const e = _t.b.createTraceFromId(o);
						_t.b.setParent(e)
					}
					s.dispatch(Object(B.h)(n));
					t.listen((e, t) => {
						const r = Object(C.a)(Object(i.e)(e), n);
						s.dispatch(Object(B.i)(e, t, r))
					});
					const c = s.getState(),
						{
							currentPage: d
						} = c.platform;
					if (d) {
						const e = [];
						Object(qt.j)(c) && e.push(Qe.e), e.length > 0 && s.dispatch(Object(m.c)(Object(v.a)(d.url, e)))
					}
					return Kt.a.initialize(), async function(e) {
						if (!pn(e)) return;
						const t = e.user.account ? cn()(e.user.account.id).toString() : void 0,
							n = document.createElement("script");
						n.src = Object(un.a)("https://s.udkcrj.com/ag/386183/clear.js", {
							dt: "3861831591810830724000",
							pd: "acc",
							mo: 0,
							et: 0,
							ti: ln()(),
							ui: t,
							si: "d2x"
						}), document.head.appendChild(n)
					}(s.getState()), async function(e) {
						on(e) && Object(dt.a)({
							clientId: Object(sn.g)(e) ? "14003311-a669-490b-a682-56294eb02bf2-test" : "14003311-a669-490b-a682-56294eb02bf2"
						})
					}(s.getState()), {
						localStorageData: Object(Fe.p)()
					}
				},
				postRender: e => {
					let {
						browserHistory: t,
						routes: i,
						serverDocumentLength: c,
						store: d,
						localStorageData: l
					} = e;
					Dn = d;
					t.listen((e, t) => {
						const n = d.getState(),
							{
								urlParams: s,
								queryParams: r
							} = n.platform.currentPage,
							o = {
								action: t,
								location: e,
								urlParams: s,
								queryParams: r
							},
							a = s.subredditName,
							i = Object(Vt.G)(n, a) || "";
						hn(i), _n.a.publish(Ve.c, o, document)
					});
					const u = d.getState(),
						m = (u.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						p = Object(Vt.G)(u, m) || "",
						y = (u.subreddits.about[p] || {}).advertiserCategory;
					o.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: a.a.gtmContainerId,
						payload: {
							user: u.user.account ? u.user.account.id : u.user.loid.loid
						}
					}), o.trigger("pageview", {
						subreddit: m,
						advertiserCategory: y
					}), d.dispatch((e => async (t, n) => {
						t(Object(Nn.a)());
						const s = n();
						s.user.loid.loid || s.meta.isBot || Mn.c.withScope(e => {
							Object(Mn.a)(e, {
								serverLogging: !1
							}), Mn.c.captureMessage("User has no LOID set")
						});
						const {
							localStorageData: r
						} = e;
						r && t(Rn(r))
					})({
						localStorageData: l
					})), Object(Pn.f)(u) && Object(A.d)(u), d.dispatch(Object(A.c)()), window.addEventListener("load", () => {
						const e = d.getState(),
							{
								currentPage: o
							} = e.platform,
							a = (o.urlParams.subredditName || "").toLowerCase(),
							i = Object(Vt.G)(e, a) || "";
						if (hn(i), o && o.meta) {
							const n = o.meta.name;
							if (Object(k.b)(g.l.Redesign, {
									page: n,
									type: "rum"
								}), Object(O.c)(e.meta.userAgent) && window.innerWidth > ze.b) {
								const t = Object(r.f)(c);
								P.a && P.a.timing && _t.b.isEnabled && (_t.b.recordPerformanceTimings("".concat(n, "_time_to_first_byte"), P.a.timing.fetchStart, P.a.timing.responseStart), _t.b.recordPerformanceTimings("".concat(n, "_time_to_interactive"), P.a.timing.fetchStart, P.a.timing.domInteractive));
								const s = [];
								let o = !0;
								if (Object(qt.h)(e)) {
									const t = Object(Yt.a)(e);
									s.push(Object(Yt.c)(t))
								}
								const a = Object(xn.a)(e);
								a && (s.push(a), o = !1);
								const i = {
									isLoggedIn: Object(Re.I)(e),
									name: n,
									statsdPathsForExperiments: s
								};
								Object(r.g)(i, t, o)
							}
							const a = P.a.timing.domInteractive - P.a.timing.navigationStart;
							Object(Wt.j)(o.routeMatch, d.getState(), w.TimerType.Initial, a);
							const i = Object(f.a)(window.location.href);
							i && i.get(Qe.a) && history.replaceState(history.state, "", Object(v.a)(window.location.href, [Qe.a])), Object(E.a)(i.get(Qe.y)) && d.dispatch(Object(Q.e)({
								kind: vn.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), i.get(Qe.z) && (d.dispatch(Object(R.a)(i.get(Qe.z))), history.replaceState(history.state, "", Object(v.a)(window.location.href, [Qe.z])));
							let l = !1;
							if ((Object(Ut.b)(qe.a.JustLoggedIn) || i && i.get(Qe.o) && Object(E.a)(i.get(Qe.o))) && (d.dispatch(Object(Q.e)({
									text: s.fbt._("Successfully logged in!", null, {
										hk: "2POUVB"
									})
								})), l = !0, Object(Ut.c)(qe.a.JustLoggedIn), history.replaceState(history.state, "", Object(v.a)(window.location.href, [Qe.o]))), Object(Ut.b)(qe.a.JustLoggedOut) && (l = !0, Object(Ut.c)(qe.a.JustLoggedOut)), Object(G.b)(e), !1 !== Fe.F()) {
								let n;
								Object(Pn.a)(e) && (n = () => {
									const {
										dispatch: e
									} = d;
									t.listen(() => e(Object(A.b)())), e(Object(A.b)())
								}), Object(D.a)().then(e => e.requestNotificationsPermissions).then(e => d.dispatch(e(l, !1, n)))
							}
							if (n === g.Bb.MULTIREDDIT && o.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = o.routeMatch.match.params;
								d.dispatch(Object(F.h)({
									multiredditName: e,
									username: t
								}))
							}
							d.dispatch(Object(T.c)())
						}
						Object(Re.I)(d.getState()) && (d.dispatch(Object(N.d)()), d.dispatch(Object(M.d)())), Object(b.requestIdleCallback)(async () => {
							d.dispatch(Object(U.d)()), await Object(h.a)() && (e => Object(k.a)(Object.assign(Object.assign({}, Xt.defaults(e)), {
								source: "global",
								action: "view",
								noun: "empty"
							})))(d.getState());
							const e = async () => {
								const e = d.getState(),
									t = Sn(e);
								t && (await (async e => {
									return (await Object(gn.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), s && s())
							}, s = t.listen((t, n) => {
								"POP" !== n && e()
							});
							e()
						}), document.addEventListener("visibilitychange", () => {
							if ("visible" !== document.visibilityState && (Fe.ob(Date.now()), Object(k.a)(Jt("tab_backgrounded")(d.getState()))), "visible" === document.visibilityState) {
								const e = Fe.n(),
									t = Fe.u(),
									n = Fe.C();
								if (n && e && t) {
									const s = Date.now() - n;
									Object(k.a)(((e, t) => (n, s, r) => Object.assign(Object.assign({}, Xt.defaults(n)), {
										action: "refocus",
										actionInfo: {
											reason: Xt.actionInfo(n, {
												reason: e
											}).reason,
											pageType: t
										},
										noun: "ad",
										source: "post",
										post: Xt.post(n, r),
										adClick: {
											landingPageDuration: s
										}
									}))("tab_backgrounded", t)(d.getState(), s, e))
								}(n || e || t) && (Fe.L(), Fe.O(), Fe.M())
							}
						}), Object(se.j)(d.getState()) && en(d.getState), d.dispatch(Object(q.c)())
					}), window.history.scrollRestoration = "manual", _n.a.attachStore(d), d.dispatch(Object(H.b)(x.a.PageLoad))
				},
				raven: {
					tags: {
						project: g.l.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1,
				perfExperimentNameSelector: e => Object(Cn.d)(e.getState())
			})
		},
		"./src/reddit/models/EmailSettings/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
				}(s || (s = {}))
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				o = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const n = [];
					for (const s in r) {
						const o = r[s];
						(o.priceInCoins <= e || t) && n.push(o)
					}
					return n
				},
				a = e => s.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [s.fbt._plural(e.monthsOfPremium, "number of months"), s.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				i = [{
					prompt: () => s.fbt._("What is a Reddit Premium Membership?", null, {
						hk: "3ibd7e"
					}),
					answer: () => s.fbt._("Reddit Premium is our subscription membership program, and it directly supports Reddit and the communities that it hosts. It offers an entirely ads-free Reddit experience as well as other benefits, including monthly Coins and access to the exclusive r/lounge community.", null, {
						hk: "22tBeJ"
					})
				}, {
					prompt: () => s.fbt._("Why change the name to Premium? What happened to calling it Gold?", null, {
						hk: "buZNC"
					}),
					answer: () => s.fbt._("The membership has a new name for a good reason. Many people confused the subscription Reddit Gold membership with a virtual good or coin. To make things easier to understand, we’ve renamed the membership to “Reddit Premium”, while the virtual good is called “Coins”. We have kept your favorite features and added more.", null, {
						hk: "2CCKCo"
					})
				}, {
					prompt: () => s.fbt._("What if I was subscribed to the old Gold Membership program?", null, {
						hk: "2Mv367"
					}),
					answer: () => s.fbt._("Fine people everywhere with a Gold Membership are now members of Reddit Premium. It still offers the same great ads-free browsing experience and access to r/lounge, but now you will also receive Coins monthly so you can award exceptional contributions.", null, {
						hk: "IQrwR"
					})
				}, {
					prompt: () => s.fbt._("The Premium membership gives me Coins, what are those for?", null, {
						hk: "4FMg0V"
					}),
					answer: () => s.fbt._("Coins are a virtual good, and you can use them to award exceptional posts or comments with a Silver, Gold, or Platinum Award. This is a way to show appreciation for an exceptional contribution to Reddit, and can also grant the recipient special bonus benefits. You can award someone by clicking on “Give Award” below a post or comment.", null, {
						hk: "46r7Aq"
					})
				}, {
					prompt: () => s.fbt._("Do I have to subscribe to Reddit Premium to get Coins?", null, {
						hk: "boE6i"
					}),
					answer: () => s.fbt._("Monthly Coins are a great benefit for being a Premium member, but if you wish you can also buy individual quantities of Coins. Additionally, you will receive Coins if you are awarded Gold or Platinum.", null, {
						hk: "36zEKr"
					})
				}],
				c = "com.reddit.premium_1";
			var d;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(d || (d = {}))
		},
		"./src/reddit/models/GoodContent/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = {
				isBlacklistedSubredditsExcluded: !0,
				isNsfwExcluded: !0,
				maxRating: "R"
			}
		},
		"./src/reddit/models/Sso/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Apple = "https://appleid.apple.com", e.Google = "https://accounts.google.com"
				}(s || (s = {}))
		},
		"./src/reddit/pages/InternalServerError/index.m.less": function(e, t, n) {
			e.exports = {
				dizzySnoo: "UaNg246yNIpwcq_Uhe6vC",
				container: "EXdERxzjUGqvBK511L1Eq",
				mainContent: "_3dyrEHC8cc6dIOTUPQmv1S",
				title: "_1PdcLVyQbMPVKRikIspqb_",
				subTitle: "_1YhiRkum1oGZUdm5i1mHFJ",
				image: "_1gTZDLeeF0VPQsS6Iz5boy",
				bottomImageContainer: "_3sveU8lpcXyGOpDXsXc9xg",
				imageContainer: "_2wX-WzezrtDmDaxm8BR4zz",
				topImageContainer: "_3zW_PbmBAhs9ARwV_Yl9BR"
			}
		},
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/acknowledgements",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Acknowledgements",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Acknowledgements").then(n.bind(null, "./src/reddit/pages/Acknowledgements/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Acknowledgements/index.tsx"
					}
				}),
				c = {
					action: o.n,
					chunk: r.p.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.ACKNOWLEDGEMENTS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = ["/appeal", "/appeals"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Appeal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Appeal").then(n.bind(null, "./src/reddit/pages/AppealPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/AppealPage/index.tsx"
					}
				}),
				c = {
					action: o.n,
					chunk: r.p.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.APPEAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/coins",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Coins",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Coins").then(n.bind(null, "./src/reddit/pages/CoinsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsPage/index.tsx"
					}
				}),
				c = {
					action: o.p,
					chunk: r.p.COINS,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.COINS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/coins/mobile",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "CoinsMobile",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CoinsMobile").then(n.bind(null, "./src/reddit/pages/CoinsMobilePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsMobilePage/index.tsx"
					}
				}),
				c = {
					action: o.o,
					chunk: r.p.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.COINS_MOBILE
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/collectionCommentsPage.ts"),
				a = n("./src/reddit/featureFlags/profileCollections.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CollectionCommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CollectionCommentsPage~CommentsPage~RpanListingUnit~Subreddit~SubredditWiki~reddit-component~1ffa6388"), n.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CollectionCommentsPage/index.tsx"
					}
				}),
				c = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"],
				d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				l = {
					action: o.e,
					chunk: r.p.COLLECTION_COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.COLLECTION_COMMENTS
					},
					prefetches: [r.p.FRONTPAGE, r.p.COMMENTS_PAGE, r.p.SUBREDDIT]
				},
				u = Object.assign(Object.assign({}, l), {
					path: c
				}),
				m = Object.assign(Object.assign({}, l), {
					path: d,
					routePredicate: a.a
				}),
				p = [u, m];
			t.a = p
		},
		"./src/reddit/routes/commentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "CommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CollectionCommentsPage~CommentsPage~RpanListingUnit~Subreddit~SubredditWiki~reddit-component~1ffa6388"), n.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CommentsPage/index.tsx"
					}
				}),
				i = ["/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle?", "/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/comments/:partialPostId/:urlSafePostTitle?"],
				c = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				d = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				l = (e, t) => ({
					action: o.t,
					chunk: r.p.COMMENTS_PAGE,
					component: a,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [r.p.FRONTPAGE, r.p.SUBREDDIT]
				}),
				u = [l(r.Bb.COMMENTS, i), l(r.Bb.DUPLICATES, c), l(r.Bb.COMMENTS, d)];
			t.a = u
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/framedGild/:thingId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedGild",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedGildPage/index.tsx"
					}
				}),
				c = {
					action: o.u,
					chunk: r.p.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.FRAMED_GILD
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/framedModal/:type",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("FramedModal").then(n.bind(null, "./src/reddit/pages/FramedModalPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedModalPage/index.tsx"
					}
				}),
				c = {
					action: o.v,
					chunk: r.p.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.FRAMED_MODAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object.keys(a.O).map(e => a.O[e]).join("|"),
				d = "/",
				l = "/:sort(".concat(c, ")?"),
				u = Object(o.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~Frontpage"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), n.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), n.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), n.e("Frontpage~SubredditWiki"), n.e("Frontpage~FrontpageSidebar"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Frontpage/index.tsx"
					}
				}),
				m = {
					action: i.y,
					chunk: a.p.FRONTPAGE,
					component: u,
					exact: !0,
					prefetches: [a.p.COMMENTS_PAGE, a.p.SUBREDDIT]
				},
				p = Object.assign(Object.assign({}, m), {
					path: d,
					meta: {
						name: a.Bb.INDEX
					}
				}),
				b = Object.assign(Object.assign({}, m), {
					path: l,
					meta: {
						name: a.Bb.LISTING
					}
				}),
				h = [p, b];
			t.a = h
		},
		"./src/reddit/routes/geotagging/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/topic.ts"),
				a = n("./src/reddit/selectors/topic.ts");
			const i = "/label/subreddits",
				c = Object(s.a)({
					resolved: {},
					chunkName: () => "Geotagging",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("Geotagging~Topic"), n.e("Geotagging")]).then(n.bind(null, "./src/reddit/pages/Geotagging/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Geotagging/index.tsx"
					}
				}),
				d = {
					action: e => async (e, t, n) => {
						let s, {
							gqlContext: r
						} = n; {
							const e = t();
							if (Object(a.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						try {
							s = await Object(o.g)(r(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch (c) {
							return void e(Object(o.i)())
						}
						if (!s) return;
						const i = t();
						e(Object(o.j)(Object.assign(Object.assign({}, s), {
							key: "tagging",
							meta: i.meta
						})))
					},
					chunk: r.p.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: r.Bb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = d
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "InboxPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("InboxPages").then(n.bind(null, "./src/reddit/pages/RedditEmbed/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/RedditEmbed/index.tsx"
					}
				}),
				d = Object.keys(a.L).map(e => a.L[e]).join("|"),
				l = ["/message/:pageName(".concat(d, ")"), "/message/messages/:messageId"],
				u = {
					action: i.A,
					chunk: a.p.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Bb.INBOX_PAGES
					},
					path: l
				};
			t.a = u
		},
		"./src/reddit/routes/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				r = n("./src/reddit/routes/acknowledgements/index.ts"),
				o = n("./src/reddit/routes/appeal/index.ts"),
				a = n("./src/reddit/routes/coins/index.ts"),
				i = n("./src/reddit/routes/coinsMobile/index.ts"),
				c = n("./src/reddit/routes/commentsPage/index.ts"),
				d = (n("./node_modules/@loadable/component/dist/loadable.esm.js"), n("./src/lib/constants/index.ts"));
			n("./src/reddit/actions/page.ts");
			var l = [],
				u = n("./node_modules/react-router-redux/es/index.js"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				b = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				h = n("./src/reddit/models/EmailSettings/index.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				f = n("./src/telemetry/index.ts"),
				v = n("./src/reddit/actions/emailVerification.ts");
			var O = {
					action: e => async (t, n) => {
						await t(m.z());
						const s = n(),
							r = e.params.verificationToken,
							o = e.queryParams && e.queryParams.source;
						if (o && Object(f.a)(Object(b.b)(o)(s)), !Object(g.I)(s)) return Object(p.a)(t, s);
						const a = await t(Object(v.b)(r));
						a === h.a.Success && Object(f.a)(Object(b.d)()(s)), t(Object(u.c)("/?verifiedEmail=".concat(a)))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				y = n("./src/lib/addQueryParams/index.ts");
			var C = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							queryParams: o
						} = e;
						await t(Object(u.c)(Object(y.a)("/", o)))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [d.p.COMMENTS_PAGE, d.p.FRONTPAGE]
				},
				P = n("./src/reddit/routes/framedGild/index.ts"),
				x = n("./src/reddit/routes/framedModal/index.ts"),
				E = n("./src/reddit/routes/frontpage/index.ts"),
				j = n("./src/reddit/routes/geotagging/index.ts"),
				S = n("./src/reddit/routes/inbox/index.ts"),
				_ = n("./src/reddit/routes/meta/index.ts"),
				k = n("./src/reddit/routes/moderationPages/index.ts"),
				w = n("./src/reddit/routes/modListing/index.ts"),
				I = n("./src/reddit/routes/modQueue/index.ts"),
				M = n("./src/reddit/routes/multireddit/index.ts"),
				N = n("./src/reddit/routes/notificationsInbox/index.ts"),
				T = n("./src/reddit/routes/postCreation/constants.ts");
			const R = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(u.c)("/"))
				},
				chunk: d.p.EMPTY,
				exact: !0,
				meta: {
					name: d.Bb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var A = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(u.c)(T.b))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...R],
				L = n("./src/reddit/routes/postCreation/index.ts"),
				F = n("./src/reddit/routes/postDraft/index.ts"),
				D = n("./src/reddit/routes/premium/index.ts"),
				G = n("./src/reddit/routes/profileComments/index.ts"),
				U = n("./src/reddit/endpoints/me/index.ts");
			var B = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							rest: o
						} = e.params, {
							queryParams: a
						} = e, i = await Object(U.a)(r());
						if (!(i.ok && i.body && i.body.account)) {
							const e = n();
							return void Object(p.a)(t, e)
						}
						const c = i.body.account.displayText,
							d = o ? "/user/".concat(c, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(o)) : "/user/".concat(c, "/"),
							l = Object(y.a)(d, a);
						await t(Object(u.c)(l))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				H = n("./src/reddit/routes/profileModSettings/index.ts"),
				W = n("./src/reddit/routes/profileOverview/index.ts"),
				q = n("./src/reddit/routes/profilePosts/index.ts"),
				V = n("./src/reddit/routes/profilePrivate/index.ts");
			var Q = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: r
						} = e, o = s ? "/user/".concat(n, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(s)) : "/user/".concat(n, "/"), a = Object(y.a)(o, r);
						await t(Object(u.c)(a))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				z = n("./src/reddit/routes/profileSnoobuilder/index.ts");
			var K = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: r
						} = e, o = s ? "/user/".concat(n, "/posts/").concat(s) : "/user/".concat(n, "/posts"), a = Object(y.a)(o, r);
						t(Object(u.c)(a))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				Y = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				X = n("./src/reddit/routes/report/index.ts"),
				J = n("./src/reddit/routes/searchResults/index.ts"),
				Z = n("./src/reddit/routes/settings/index.ts");
			var $ = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(u.c)(s))
					},
					chunk: d.p.EMPTY,
					meta: {
						name: d.Bb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(u.c)("/settings/profile"))
					},
					chunk: d.p.EMPTY,
					meta: {
						name: d.Bb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				ee = n("./src/reddit/routes/subreddit/index.ts"),
				te = n("./src/reddit/routes/subredditCreation/index.ts"),
				ne = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				se = n("./src/reddit/routes/subredditWiki/index.ts"),
				re = n("./src/reddit/routes/topic/index.ts");
			const oe = [r.a, o.a, a.a, i.a, B, Q, K, ...s.a, ...c.a, O, ...E.a, j.a, D.a, P.a, x.a, L.a, F.a, ...A, C, ..._.a, M.a, I.a, w.c, N.a, S.a, G.a, H.a, W.a, q.a, z.a, V.a, Y.a, ...Z.a, ...$, J.a, ...se.a, re.a, ee.a, te.a, ne.a, k.a, X.a, ...l];
			t.a = oe
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				a = n("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts");
			const i = {
					action: o.a,
					chunk: r.p.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "CommunityPointsLearnMore",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~e74e7afb"), n.e("CommunityPointsLearnMore")]).then(n.bind(null, "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Bb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE
					},
					path: ["/community-points/", "/vault/", "/web/community-points/"]
				},
				c = {
					action: a.a,
					chunk: r.p.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), n.e("vendors~MembershipPaywallPage"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Bb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				};
			t.a = [i, c]
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts");
			const i = Object(o.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~ModQueuePages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), n.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), n.e("ChatPost~ModQueuePages"), n.e("ModQueue~ModQueuePages"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ModQueuePages/index.tsx"
					}
				}),
				c = Object.keys(a.hb).map(e => a.hb[e]).join("|"),
				d = "/r/mod/about/:pageName(".concat(c, ")?"),
				l = {
					action: e => async (t, s, r) => {
						const o = await Promise.all([n.e("ModQueue~ModQueuePages"), n.e("ModQueue")]).then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested);
						await o(e)(t, s, r)
					},
					chunk: a.p.MODQUEUE_PAGES,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = l
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return g
			}));
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/lib/constants/index.ts");
			const c = Object.keys(i.Qb).map(e => i.Qb[e]).join("|"),
				d = [i.Qb.Awards],
				l = d.join("|"),
				u = e => "/".concat(e, "/about/scheduledposts"),
				m = e => "/".concat(e, "/about/eventposts"),
				p = Object(o.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ModHub/index.tsx"
					}
				}),
				b = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"],
				h = ["/r/:subredditName/about", "/r/:subredditName/about/:pageName(".concat(c, ")"), "/user/:profileName/about/:pageName(".concat(l, ")"), ...b],
				g = e => !!Object(a.h)(e, {
					path: "/r/:subredditName/about"
				}),
				f = {
					action: e => async (t, s, r) => {
						const o = await Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested);
						await o(e)(t, s, r)
					},
					chunk: i.p.MODERATION_PAGES,
					component: p,
					exact: !0,
					meta: {
						name: i.Bb.MODERATION_PAGES
					},
					path: h,
					prefetches: [i.p.SUBREDDIT]
				};
			t.a = f
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Multireddit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), n.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), n.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Multireddit/index.tsx"
					}
				}),
				d = "/me/m/:multiredditName",
				l = Object.keys(a.O).map(e => "".concat(d, "/:sort(").concat(a.O[e], ")?")),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(a.O).map(e => "".concat(u, "/:sort(").concat(a.O[e], ")?")),
				p = [d, u, ...l, ...m],
				b = {
					action: i.C,
					chunk: a.p.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Bb.MULTIREDDIT
					},
					path: p,
					prefetches: [a.p.SUBREDDIT]
				};
			t.a = b
		},
		"./src/reddit/routes/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/notificationsInbox.ts");
			const a = "/notifications/",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "NotificationsInbox",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/pages/NotificationsInbox/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/NotificationsInbox/index.tsx"
					}
				}),
				c = {
					action: o.a,
					chunk: r.p.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.NOTIFICATIONS_INBOX
					},
					path: a,
					prefetches: [r.p.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/postDraft.ts");
			const a = "/user/:profileName/draft/:draftId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "PostDraft",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PostDraft/index.tsx"
					}
				}),
				c = {
					action: o.b,
					chunk: r.p.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.POST_DRAFT
					},
					path: a,
					prefetches: [r.p.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/premium/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/premium",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Premium",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Premium").then(n.bind(null, "./src/reddit/pages/Premium/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Premium/index.tsx"
					}
				}),
				c = {
					action: o.D,
					chunk: r.p.PREMIUM,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.PREMIUM
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/profileComments.ts");
			const a = "/user/:profileName/comments",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), n.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileComments/index.tsx"
					}
				}),
				c = {
					action: o.h,
					chunk: r.p.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [r.p.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/profileModSettings.ts");
			const a = "/user/:profileName/about/edit/moderation",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileModeration",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), n.e("ProfileModeration")]).then(n.bind(null, "./src/reddit/pages/ProfileModSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileModSettings/index.tsx"
					}
				}),
				c = {
					action: o.b,
					chunk: r.p.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.PROFILE_MODERATION
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/profileOverview.ts");
			const a = "/user/:profileName",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), n.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileOverview/index.tsx"
					}
				}),
				c = {
					action: o.g,
					chunk: r.p.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [r.p.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/profilePosts.ts");
			const a = "/user/:profileName/posts",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), n.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), n.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), n.e("ProfilePosts~ProfileSnoobuilder"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePosts/index.tsx"
					}
				}),
				c = {
					action: o.h,
					chunk: r.p.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.PROFILE_POSTS
					},
					path: a,
					prefetches: [r.p.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/models/Profile/index.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), n.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), n.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePrivate/index.tsx"
					}
				}),
				d = Object.keys(i.a).map(e => i.a[e]).join("|"),
				l = ["/user/:profileName/:listingType(".concat(d, ")"), "/user/:profileName/gilded/:listingType(".concat(i.a.GivenGildings, ")")],
				u = {
					action: e => async (t, s, r) => {
						const o = await Promise.all([n.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), n.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), n.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested);
						await o(e)(t, s, r)
					},
					chunk: a.p.PROFILE_PRIVATE,
					component: c,
					exact: !0,
					meta: {
						name: a.Bb.PROFILE_PRIVATE
					},
					path: l,
					prefetches: [a.p.COMMENTS_PAGE]
				};
			t.a = u
		},
		"./src/reddit/routes/profileSnoobuilder/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/featureFlags/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileSnoobuilder",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ProfilePosts~ProfileSnoobuilder"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileSnoobuilder/index.tsx"
					}
				}),
				i = "/user/:profileName/snoo",
				c = {
					path: i,
					action: e => async (t, s, r) => {
						const o = await Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ProfilePosts~ProfileSnoobuilder"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested);
						await o(e)(t, s, r)
					},
					chunk: r.p.PROFILE_SNOOBUILDER,
					component: a,
					exact: !0,
					meta: {
						name: r.Bb.PROFILE_SNOOBUILDER
					},
					routePredicate: o.d.snoovatar30
				};
			t.a = c
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "PublicAccessNetwork",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("LiveVideoPlayer~PublicAccessNetwork"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PublicAccessNetwork/index.tsx"
					}
				}),
				i = {
					action: o.E,
					chunk: r.p.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: r.Bb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [r.p.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/report/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts");
			const o = "/report",
				a = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("ReportFlow~ReportPage"), n.e("ReportPage")]).then(n.bind(null, "./src/reddit/pages/ReportPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ReportPage/index.tsx"
					}
				}),
				i = {
					action: e => async (t, s, r) => {
						const o = await n.e("Report").then(n.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested);
						await o(e)(t, s, r)
					},
					chunk: r.p.REPORT_PAGE,
					component: a,
					exact: !0,
					meta: {
						name: r.Bb.REPORT
					},
					path: o
				};
			t.a = i
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/search.ts");
			const a = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~SearchResults"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), n.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), n.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SearchResults/index.tsx"
					}
				}),
				c = {
					action: o.e,
					chunk: r.p.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.SEARCH_RESULTS
					},
					path: a,
					prefetches: [r.p.FRONTPAGE, r.p.SUBREDDIT, r.p.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts"),
				c = n("./src/reddit/actions/pages/settings.ts");
			const d = Object.keys(a.Ob).map(e => a.Ob[e]).join("|"),
				l = [{
					action: c.a,
					component: Object(o.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~e74e7afb"), n.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki~reddit-components-ProfileIdCard"), n.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), n.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki"), n.e("Settings")]).then(n.bind(null, "./src/reddit/pages/Settings/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Settings/index.tsx"
						}
					}),
					chunk: a.p.SETTINGS,
					exact: !0,
					meta: {
						name: a.Bb.SETTINGS
					},
					path: "/settings/:page(".concat(d, ")?")
				}, {
					action: i.H,
					component: Object(o.a)({
						resolved: {},
						chunkName: () => "UserDataRequestPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/pages/UserDataRequestPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/UserDataRequestPage/index.tsx"
						}
					}),
					chunk: a.p.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: a.Bb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = l
		},
		"./src/reddit/routes/subreddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/pages/subreddit.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "Subreddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CollectionCommentsPage~CommentsPage~RpanListingUnit~Subreddit~SubredditWiki~reddit-component~1ffa6388"), n.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), n.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), n.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), n.e("Subreddit")]).then(n.bind(null, "./src/reddit/pages/Subreddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Subreddit/index.tsx"
					}
				}),
				d = Object.keys(a.O).map(e => "/r/:subredditName/:sort(".concat(a.O[e], ")?")),
				l = ["/r/:subredditName", ...d],
				u = {
					action: i.l,
					chunk: a.p.SUBREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Bb.SUBREDDIT
					},
					path: l,
					prefetches: [a.p.COMMENTS_PAGE, a.p.FRONTPAGE]
				};
			t.a = u
		},
		"./src/reddit/routes/subredditCreation/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/subredditCreation.ts");
			const a = "/subreddits/create",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), n.e("SubredditCreation~SubredditInlineEditing"), n.e("SubredditCreation")]).then(n.bind(null, "./src/reddit/pages/SubredditCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditCreation/index.tsx"
					}
				}),
				c = {
					action: o.a,
					component: i,
					chunk: r.p.SUBREDDIT_CREATION,
					exact: !0,
					meta: {
						name: r.Bb.SUBREDDIT_CREATION
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/subredditLeaderboard/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/subredditLeaderboard.ts");
			const a = ["/subreddits/leaderboard", "/subreddits/leaderboard/:categoryName/"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditLeaderboard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/pages/SubredditLeaderboard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditLeaderboard/index.tsx"
					}
				}),
				c = {
					action: o.b,
					chunk: r.p.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.SUBREDDIT_LEADERBOARD
					},
					path: a,
					prefetches: [r.p.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditWiki",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CollectionCommentsPage~CommentsPage~RpanListingUnit~Subreddit~SubredditWiki~reddit-component~1ffa6388"), n.e("vendors~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki~reddit-components-ProfileIdCard"), n.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("Frontpage~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditWiki/index.tsx"
					}
				}),
				c = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+", "/wiki/:wikiPageName+"],
				d = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				l = e => async t => {
					await t(Object(r.c)(Object(a.a)(e.url, e.params)))
				}, u = {
					action: l,
					chunk: o.p.EMPTY,
					exact: !0,
					meta: {
						name: o.Bb.SUBREDDIT_WIKI
					},
					path: d
				}, m = {
					action: e => async (t, s, r) => {
						const o = await Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CollectionCommentsPage~CommentsPage~RpanListingUnit~Subreddit~SubredditWiki~reddit-component~1ffa6388"), n.e("vendors~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), n.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki~reddit-components-ProfileIdCard"), n.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("Frontpage~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested);
						await o(e)(t, s, r)
					},
					chunk: o.p.SUBREDDIT_WIKI,
					component: i,
					exact: !0,
					meta: {
						name: o.Bb.SUBREDDIT_WIKI
					},
					path: c,
					prefetches: [o.p.SUBREDDIT]
				};
			t.a = [u, m]
		},
		"./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/wiki.ts"),
				a = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				i = n("./src/reddit/routes/moderationPages/index.ts");
			t.a = (e, t) => {
				const n = t.wikiSubRoute === o.m.Settings,
					s = Object(a.a)(t, Object(i.c)(e) || n),
					c = r.a.parse(e);
				return (c.pathname || "").replace(/\/$/, "") !== s ? (c.pathname = s, r.a.format(c)) : e
			}
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/topic.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "Topic",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), n.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), n.e("Geotagging~Topic"), n.e("Topic")]).then(n.bind(null, "./src/reddit/pages/Topic/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Topic/index.tsx"
					}
				}),
				i = ["/t/:topicSlug"],
				c = {
					path: i,
					action: o.k,
					chunk: r.p.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: r.Bb.TOPIC
					},
					prefetches: [r.p.COMMENTS_PAGE, r.p.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return y
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/addQueryParams/index.ts"),
				a = n("./src/reddit/constants/accountManager.ts"),
				i = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts"),
				d = n("./src/reddit/selectors/experiments/utils.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const u = Object(r.a)(l.I, l.H, (e, t) => !e && !t),
				m = Object(r.a)(e => Object(c.c)(e, {
					experimentEligibilitySelector: e => u(e),
					experimentName: i.h
				}), d.a);
			var p = n("./src/reddit/selectors/experiments/buttons2020.ts"),
				b = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				h = n("./src/reddit/selectors/experiments/googleOneTap.ts");
			const g = Object(r.a)(l.H, l.I, (e, t) => !e && !t);
			var f = n("./src/reddit/selectors/responsiveSettings.ts");
			const v = e => e.accountManagerModalData.actionSource,
				O = e => e.accountManagerModalData.redirectUrl,
				y = Object(r.a)((e, t) => t.path, (e, t) => t.uiMode, v, b.a, f.a, h.b, e => Object(c.c)(e, {
					experimentEligibilitySelector: g,
					experimentName: i.Ic
				}), p.a, m, (e, t, n, r, c, d, l, u, m) => {
					let p = "".concat(s.a.accountManagerOrigin).concat(e);
					return u && (p = Object(o.a)(p, {
						["experiment_".concat(i.p)]: "enabled"
					})), l && (p = Object(o.a)(p, {
						["experiment_".concat(i.Ic)]: l
					})), m && (p = Object(o.a)(p, {
						["experiment_".concat(i.h)]: m
					})), e === a.c.GoogleOneTap ? Object(o.a)(p, {
						[i.O]: d
					}) : (r && (p = Object(o.a)(p, {
						[i.X]: r,
						uiMode: t
					})), c && (p = Object(o.a)(p, {
						mweb_responsive_settings: "treatment"
					})), e === a.c.Index || e === a.c.ChangePassword ? p : p = Object(o.a)(p, {
						actionSource: n
					}))
				})
		},
		"./src/reddit/selectors/experiments/buttons2020.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.s.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.p
			})
		},
		"./src/reddit/selectors/experiments/econAnnualPremium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.fb
				});
				return !!t && !Object(s.ed)(t)
			}
		},
		"./src/reddit/selectors/experiments/layer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.Rb.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Ob
				}),
				a = e => s.Qb.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Nb
				}),
				i = e => s.Sb.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Pb
				})
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => Object(o.F)(e) || !(s.Vc.Holdout === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.Sc
			}))
		},
		"./src/reddit/selectors/experiments/uiSimplification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/utils.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = ["AU", "CA", "GB", "US"],
				i = new Set([s.Hb.AllItems, s.Hb.TrendingSearch]),
				c = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: Object(r.d)(Object(r.b)(...a)),
						experimentName: s.Ib
					});
					return i.has(t)
				},
				d = e => s.Hb.AllItems === Object(o.c)(e, {
					experimentEligibilitySelector: Object(r.d)(Object(r.b)(...a)),
					experimentName: s.Ib
				})
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "s", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "t", (function() {
				return P
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "r", (function() {
				return j
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "k", (function() {
				return _
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/endpoints/governance/crypto.ts");
			const o = [],
				a = {},
				i = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				c = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = P(e, {
						subredditId: n
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.harberger ? s.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				d = (e, t) => {
					const n = y(e, t);
					if (n) return n.mainHeader
				},
				l = (e, t) => {
					const n = y(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				u = (e, t) => {
					const n = y(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : a
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				p = (e, t) => {
					const n = m(e, t),
						s = n && n.publicAddress;
					if (!s) throw new Error("No wallet address found");
					return s
				},
				b = (e, t) => {
					const n = m(e, t);
					return n && n.amount || "0"
				},
				h = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				g = (e, t) => {
					const n = Object(s.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || o
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				O = (e, t) => {
					const n = j(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				y = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				C = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				P = (e, t) => {
					const n = C(e, t);
					return n && n.walletProvider
				},
				x = (e, t) => {
					const n = P(e, t),
						s = C(e, t);
					return n && n.provider || s && s.provider
				},
				E = (e, t) => {
					const n = x(e, t);
					return n === r.a.Ethereum || n === r.a.Rinkeby || n === r.a.EthTraderEthereum || n === r.a.EthTraderRinkeby
				},
				j = (e, t) => {
					const n = P(e, t),
						s = x(e, t);
					if (n && !n.inTransition && s === r.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const o = n && n.extra && n.extra.contracts,
						a = o && o.unlocked;
					return a && {
						address: a.address,
						symbol: a.token || "",
						decimals: a.decimals || 18,
						image: a.image
					}
				},
				S = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = P(e, {
						subredditId: n
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.subscriptions ? s.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				_ = (e, t) => {
					const n = C(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			const s = e => e.user.notificationPrefs.api.getPreferences.loaded,
				r = e => e.user.notificationPrefs.api.getPreferences.pending,
				o = e => e.user.notificationPrefs.api.setPreferences.pending,
				a = e => e.user.notificationPrefs.preferences,
				i = e => e.user.notificationPrefs.isNotificationPromptVisible
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/Product/index.ts");
			const r = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === s.a.Badge) return n
				},
				o = (e, t) => {
					let {
						productId: n
					} = t;
					const s = e.products.models[n];
					if (s) {
						const t = s.subredditId,
							r = Object.keys(e.user.ownedBadges[t] || {}),
							o = e.badges.models,
							a = Date.now();
						let i = !1;
						return r.forEach(e => {
							const t = o[e];
							t && t.type === n && t.endsAt > a && (i = !0)
						}), i
					}
					return !1
				}
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = (e, t) => {
					let {
						subredditId: n
					} = t;
					if (e.removalReasons.reasonOrder[n]) {
						return e.removalReasons.reasonOrder[n].map(t => e.removalReasons.models[t])
					}
					return []
				},
				r = e => e.removalReasons.removedItemIds && e.removalReasons.removedItemIds.itemIds.length ? e.removalReasons.removedItemIds : null,
				o = e => e.removalReasons.api.pending
		},
		"./src/reddit/selectors/sso.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/components/Settings/modalIds.ts"),
				o = n("./src/reddit/models/Sso/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = Object(s.a)(i.lb, e => !(!e || !e.length)),
				d = Object(s.a)(c, i.x, (e, t) => e && !t),
				l = Object(s.a)(i.lb, e => e && e.find(e => e === o.a.Apple)),
				u = Object(s.a)(i.lb, e => e && e.find(e => e === o.a.Google)),
				m = Object(s.a)(a.a, e => !!e && [r.b, r.d, r.e, r.f].includes(e))
		},
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/subredditLeaderboard.ts"),
				r = n("./src/reddit/selectors/category.ts");
			const o = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				a = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				i = (e, t) => t === s.m ? s.l : t === s.j ? s.i : e || s.b,
				c = (e, t) => {
					const n = e.subreddits.rankings,
						s = t && Object(r.f)(e, {
							categoryName: t
						}),
						o = n[i(s && s.id || null, t)];
					return !(!o || !o.length)
				}
		},
		"./src/reddit/selectors/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e.trending.models
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322", "vendors~Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~c822ce19", "vendors~InFeedChaining~PostCreation~Reddit~StandalonePostPage~SubredditPremiumBadgeHovercardTooltip", "vendors~Chat~Governance~Reddit", "vendors~Governance~Reddit", "AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc", "Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d", "Chat~Governance~Reddit", "Governance~ModListing~Reddit", "Governance~InFeedChaining~Reddit", 0, "Governance~Reddit~reddit-components-MediumPost", "Governance~Reddit", "ModListing~Reddit", "Reddit~reddit-components-MediumPost"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.c3a2ce7af2040c8b187b.js.map