// https://www.redditstatic.com/desktop2x/Reddit.de3483802abc0bcc5d95.js
// Retrieved at 10/19/2020, 2:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, s) {},
		"./assets/fonts/VCR/font.less": function(e, t, s) {},
		"./node_modules/@r/google-tag-manager/compiled.js": function(e, t, s) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.setup = t.trigger = t.getLocation = void 0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				},
				a = s("./node_modules/@r/google-tag-manager/node_modules/uuid/index.js"),
				r = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
					return t.default = e, t
				}(s("./node_modules/@r/frames/compiled.js"));
			var o = "gtm-" + (0, a.v4)(),
				i = !1,
				c = [],
				d = function() {
					var e = document.getElementById(o);
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
					var s = d();
					s && i ? (t && r.postMessage(s.contentWindow, "data.gtm", t), r.postMessage(s.contentWindow, "event.gtm", {
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
								s = e.payload;
							return u(t, s)
						}))
					}
				};
			t.setup = function(e) {
				var t = e.containerId,
					s = e.jailUrl,
					a = e.payload;
				if (t)
					if (s) {
						r.listen("gtm"), r.receiveMessageOnce("loaded.gtm", (function() {
							i = !0, r.stopListening("gtm")
						}));
						var c = document.createElement("iframe");
						c.style.display = "none", c.id = o, c.name = JSON.stringify(n({
							referrer: document.referrer
						}, l(), a)), c.src = s + "?id=" + t, c.onload = m, document.body.appendChild(c)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/index.js": function(e, t, s) {
			var n = s("./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js"),
				a = s("./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js"),
				r = a;
			r.v1 = n, r.v4 = a, e.exports = r
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, t) {
			for (var s = [], n = 0; n < 256; ++n) s[n] = (n + 256).toString(16).substr(1);
			e.exports = function(e, t) {
				var n = t || 0,
					a = s;
				return a[e[n++]] + a[e[n++]] + a[e[n++]] + a[e[n++]] + "-" + a[e[n++]] + a[e[n++]] + "-" + a[e[n++]] + a[e[n++]] + "-" + a[e[n++]] + a[e[n++]] + "-" + a[e[n++]] + a[e[n++]] + a[e[n++]] + a[e[n++]] + a[e[n++]] + a[e[n++]]
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, t, s) {
			(function(t) {
				var s, n = t.crypto || t.msCrypto;
				if (n && n.getRandomValues) {
					var a = new Uint8Array(16);
					s = function() {
						return n.getRandomValues(a), a
					}
				}
				if (!s) {
					var r = new Array(16);
					s = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
						return r
					}
				}
				e.exports = s
			}).call(this, s("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js": function(e, t, s) {
			var n = s("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				a = s("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				r = n(),
				o = [1 | r[0], r[1], r[2], r[3], r[4], r[5]],
				i = 16383 & (r[6] << 8 | r[7]),
				c = 0,
				d = 0;
			e.exports = function(e, t, s) {
				var n = t && s || 0,
					r = t || [],
					l = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					m = void 0 !== e.nsecs ? e.nsecs : d + 1,
					p = u - c + (m - d) / 1e4;
				if (p < 0 && void 0 === e.clockseq && (l = l + 1 & 16383), (p < 0 || u > c) && void 0 === e.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = u, d = m, i = l;
				var b = (1e4 * (268435455 & (u += 122192928e5)) + m) % 4294967296;
				r[n++] = b >>> 24 & 255, r[n++] = b >>> 16 & 255, r[n++] = b >>> 8 & 255, r[n++] = 255 & b;
				var h = u / 4294967296 * 1e4 & 268435455;
				r[n++] = h >>> 8 & 255, r[n++] = 255 & h, r[n++] = h >>> 24 & 15 | 16, r[n++] = h >>> 16 & 255, r[n++] = l >>> 8 | 128, r[n++] = 255 & l;
				for (var g = e.node || o, f = 0; f < 6; ++f) r[n + f] = g[f];
				return t || a(r)
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js": function(e, t, s) {
			var n = s("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				a = s("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, t, s) {
				var r = t && s || 0;
				"string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
				var o = (e = e || {}).random || (e.rng || n)();
				if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
					for (var i = 0; i < 16; ++i) t[r + i] = o[i];
				return t || a(o)
			}
		},
		"./node_modules/brcast/dist/brcast.es.js": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				var t = {},
					s = 1,
					n = e;
				return {
					getState: function() {
						return n
					},
					setState: function(e) {
						n = e;
						for (var s = Object.keys(t), a = 0, r = s.length; a < r; a++) t[s[a]] && t[s[a]](e)
					},
					subscribe: function(e) {
						if ("function" != typeof e) throw new Error("listener must be a function.");
						var n = s;
						return t[n] = e, s += 1, n
					},
					unsubscribe: function(e) {
						t[e] = void 0
					}
				}
			}
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, t, s) {
			"use strict";

			function n(e, t) {
				e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
			}
			s.d(t, "a", (function() {
				return u
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./node_modules/history/esm/history.js");
			s("./node_modules/react-router-dom/node_modules/prop-types/index.js");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				if (null == e) return {};
				var s, n, a = {},
					r = Object.keys(e);
				for (n = 0; n < r.length; n++) s = r[n], t.indexOf(s) >= 0 || (a[s] = e[s]);
				return a
			}
			var l = s("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			r.a.Component;
			r.a.Component;
			var u = function(e) {
				function t() {
					return e.apply(this, arguments) || this
				}
				n(t, e);
				var s = t.prototype;
				return s.handleClick = function(e, t) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (s) {
						throw e.preventDefault(), s
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? t.replace : t.push)(this.props.to))
				}, s.render = function() {
					var e = this,
						t = this.props,
						s = t.innerRef,
						n = (t.replace, t.to),
						a = d(t, ["innerRef", "replace", "to"]);
					return r.a.createElement(o.g.Consumer, null, (function(t) {
						t || Object(l.default)(!1);
						var o = "string" == typeof n ? Object(i.c)(n, null, null, t.location) : n,
							d = o ? t.history.createHref(o) : "";
						return r.a.createElement("a", c({}, a, {
							onClick: function(s) {
								return e.handleClick(s, t.history)
							},
							href: d,
							ref: s
						}))
					}))
				}, t
			}(r.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function a() {}

			function r() {}
			r.resetWarningCache = a, e.exports = function() {
				function e(e, t, s, a, r, o) {
					if (o !== n) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var s = {
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
					checkPropTypes: r,
					resetWarningCache: a
				};
				return s.PropTypes = s, s
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, t, s) {
			e.exports = s("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, s) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
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
		"./src/graphql/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"26ddd553d11e"}')
		},
		"./src/graphql/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"bc611d08f6ef"}')
		},
		"./src/lib/browser/isIncognito.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts");
			const a = 120 * n.ab;
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
					return t !== a.Bb.PROFILE && (Object(r.a)(e) ? s.push("frontpage") : s.push("r.".concat(e))), t === a.Bb.INDEX ? s.push(a.Bb.LISTING) : t && s.push(t), s.join("/")
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
						t.pubads().addEventListener("slotRequested", e.onRequest), t.pubads().addEventListener("impressionViewable", t => e.onAdView(t, !1)), t.pubads().disableInitialLoad(), t.enableServices()
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
						cmd: [() => window.aax.addEventListener("impressionViewable", t => e.onAdView(t, !0))],
						execute: [() => window.aax.limitDataProcessing(e.limitDataProcessing)]
					}, b("//c.aaxads.com/aax.js?pub=".concat(window.aax.pubId, "&hst=").concat(window.aax.hst, "&ver=").concat(window.aax.ver)))
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
		"./src/lib/serviceWorker/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = "/sw.js";
			async function a(e) {
				if ("undefined" != typeof window && "serviceWorker" in navigator) return navigator.serviceWorker.register(n, e)
			}
			const r = (e, t) => {
				navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: e,
					payload: t
				})
			}
		},
		"./src/reddit/actions/alpha.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			}));
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
					method: l.db.POST,
					endpoint: "/timings/optoutrequest",
					data: {
						appName: e.statsAppName,
						successful: t
					},
					type: "json"
				})
			}
			const p = e => async (t, s, n) => {
				let {
					apiContext: l
				} = n;
				(await
					function(e) {
						return Object(a.a)(Object(r.a)(e, [o.a]), {
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
						Object(a.a)(Object(r.a)(e, [o.a]), {
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
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeRequest/index.ts"),
				r = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");
			var i = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(i.a)(c.a),
				l = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					const i = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						l = s();
					if (!l.economics.me.fetched || i && !l.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(o.a)(e, {
								method: "get",
								endpoint: "".concat(r.a.metaUrl, "/users/me").concat(t ? "?fields=specialMemberships" : "")
							})
						}(a(), i);
						if (e.ok) {
							const s = e.body;
							i && !s.specialMemberships && (s.specialMemberships = {}), t(d(s))
						}
					}
				}, p = () => async (e, t) => {
					const s = t(),
						r = s.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!s.economics.pointsCopy.fetched) {
						e(l());
						const t = "https://".concat(r.pointsDocsBaseUrl, "v1.json?web"),
							s = await Object(a.b)({
								endpoint: t,
								method: n.db.GET
							});
						s.ok && s.body && e(u(s.body))
					}
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
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "f", (function() {
				return k
			}));
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
				v = s("./src/reddit/selectors/products.ts"),
				C = s("./src/reddit/actions/economics/me/thunkedActions.ts"),
				O = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function y(e) {
				return !!e && "removeBadge" === e.type
			}

			function x(e) {
				if (!y(e)) return e
			}
			const P = () => async (e, t, s) => {
				let {
					apiContext: n
				} = s;
				if (!t().user.account) return;
				await e(Object(C.b)({
					includeMemberships: !0
				}));
				const a = t().economics.me.data.specialMemberships || {},
					r = Object.keys(a);
				if (r.length) {
					const t = await Object(i.e)(n(), r);
					t.ok && e(Object(O.g)(t.body))
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
					s(Object(O.i)(t))
				}
			}, j = e => async (t, s, n) => {
				let {
					apiContext: a
				} = n;
				const o = s(),
					i = o.user.account,
					c = Object(f.f)(o, e.subredditId),
					l = Object.keys(c).map(e => c[e]).filter(Boolean);
				if (i && e.badge) {
					let s, n;
					s = e.placement === p.a.First ? c[b.a.Loyalty] : e.placement === p.a.Second ? c[b.a.Achievement] : c[b.a.Cosmetic], t(Object(O.a)(Object.assign(Object.assign({}, e), {
						badge: x(e.badge),
						currentAppliedBadges: l,
						userId: i.id
					}))), y(e.badge) && s ? n = await Object(d.a)(a(), e.subredditId, s.id, !1) : y(e.badge) || (n = await Object(d.a)(a(), e.subredditId, e.badge.id)), n && !n.ok && (t(Object(O.a)(Object.assign(Object.assign({}, e), {
						badge: s,
						currentAppliedBadges: l,
						userId: i.id
					}))), Object(r.a)(t, n.error))
				}
			}, S = (e, t) => async (s, n, a) => {
				let {
					apiContext: r
				} = a;
				await s(E(e, !0));
				const o = n().economics.subredditPremium[e];
				if (o && o.status === g.a.Fetched) {
					const n = o.data.userOwnedBadges.find(e => e.type === t.id);
					n && (s(j({
						badge: n,
						subredditId: e,
						placement: n.placement
					})), s(Object(O.d)(b.c.MyBadges)))
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
					}), t(Object(O.e)({
						subredditId: e,
						products: d
					}))
				}
			}, _ = (e, t, s) => async (n, a, r) => {
				let {
					apiContext: o
				} = r;
				if (await n(E(e, !0)), s && t) {
					const s = a(),
						r = Object(f.f)(s, e),
						o = Object(v.a)(s, t);
					if (!r[Object(b.d)(o.placement)] && o) {
						const t = Object(f.m)(s, {
							subredditId: e,
							badge: o
						});
						t && await n(j({
							badge: t,
							subredditId: e
						}))
					}
					n(Object(O.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, k = e => async (t, s, n) => {
				let {
					apiContext: a
				} = n;
				const {
					wallet: r
				} = await Object(i.c)(a(), e);
				t(Object(O.f)({
					wallet: r
				})), await t(E(e.subredditId, !0))
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
					m(), Object(u.a)(s) && (await e(Object(i.z)()), Object(u.a)(t()) && e(Object(o.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const s = t();
					Object(u.a)(s) && (Object(l.b)(), e(Object(o.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(r.g)(d.g))
				}
		},
		"./src/reddit/actions/emailVerification.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/models/EmailSettings/index.ts"),
				l = s("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, s, a) => {
				let {
					apiContext: r
				} = a;
				switch (e) {
					case d.a.Success:
						t(Object(c.e)({
							kind: l.b.SuccessCommunity,
							text: n.fbt._("Email verification complete", null, {
								hk: "vp6R2"
							})
						}));
						break;
					case d.a.AlreadyVerified:
						t(Object(c.e)({
							kind: l.b.SuccessCommunity,
							text: n.fbt._("Your email address has already been verified.", null, {
								hk: "7ro41"
							})
						}));
						break;
					case d.a.WrongUser:
						return void t(Object(c.e)({
							kind: l.b.Error,
							text: n.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
								hk: "1NrK5a"
							})
						}));
					default:
						t(Object(c.e)({
							kind: l.b.Error,
							text: n.fbt._("Something went wrong.", null, {
								hk: "JbBLl"
							})
						}))
				}
			}, m = e => async (t, s, n) => {
				let {
					apiContext: c
				} = n;
				const l = await ((e, t) => Object(r.a)(Object(o.a)(e, [i.a]), {
					method: a.db.POST,
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
		"./src/reddit/actions/notifications/loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/loadWithRetries/index.ts");
			t.a = () => Object(n.a)(() => s.e("PushNotifications").then(s.bind(null, "./src/reddit/actions/notifications/index.ts")))
		},
		"./src/reddit/actions/notifications/preferences.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/config.ts"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var l = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/notificationPrefs.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/actions/notifications/constants.ts");
			const b = Object(a.a)(p.c),
				h = Object(a.a)(p.b),
				g = Object(a.a)(p.a),
				f = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const a = t();
					if (!Object(m.i)(a)) return;
					const r = Object(u.b)(a),
						l = Object(u.a)(a);
					if (r || l) return;
					e(b());
					const p = await (e => Object(c.a)(e, {
						endpoint: Object(d.a)("".concat(o.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: i.db.GET
					}))(n());
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
				}, v = Object(a.a)(p.f), C = Object(a.a)(p.e), O = Object(a.a)(p.d), y = e => async (t, s, a) => {
					let {
						apiContext: p
					} = a;
					const b = s();
					if (!Object(m.i)(b)) return;
					if (Object(u.e)(b)) return;
					const h = Object(u.d)(b);
					t(v({
						preferences: e
					}));
					const g = await ((e, t) => Object(c.a)(e, {
						endpoint: Object(d.a)("".concat(o.a.gatewayUrl, "/redditmobile/1/push/preferences")),
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
					g.ok ? (t(C()), t(Object(r.e)({
						kind: l.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "UBoVR"
						})
					}))) : t(O({
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
			var n = s("./src/lib/notifications/constants.ts"),
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
							await Object(a.a)(e) === n.c.NotificationsSupported && (this.isInitializing = !0, await this.subscribeToPermissionsChange(), await this.updateIsSubscriptionEnabled(), this.isInitializing = !1, this.isReady = !0, this.notifyAll())
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
			var n = s("./src/lib/notifications/constants.ts"),
				a = s("./src/lib/notifications/featureFlags.ts"),
				r = s("./src/reddit/featureFlags/index.ts");
			const o = e => r.d.pushNotificationsBrowserSupported(e) ? Object(a.a)() : n.c.BrowserUnsupported
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/actions/economics/me/thunkedActions.ts"),
				a = s("./src/reddit/actions/users.ts"),
				r = s("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				Object(r.I)(t()) || await e(Object(a.r)()), await e(Object(n.b)()).then(() => {
					if (t().economics.me.data) return e(Object(n.a)())
				})
			}
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
						Object(c.I)(l) || s.push(e(Object(o.r)()));
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
		"./src/reddit/actions/pages/notificationsInbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/pageTitle.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/inboxNotifications/constants.ts"),
				o = s("./src/config.ts"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts");
			const u = Object(a.a)(r.c),
				m = Object(a.a)(r.b),
				p = Object(a.a)(r.a),
				b = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const a = await (e => Object(c.a)(Object(d.a)(e, [l.a]), {
						method: i.db.GET,
						endpoint: "".concat(o.a.oauthUrl, "/message/inbox_notifications.json")
					}))(n());
					a.ok || p({
						error: a.error
					});
					const r = a && a.body,
						u = h(r);
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
			var f = s("./src/reddit/actions/modal.ts"),
				v = s("./src/reddit/actions/platform.ts"),
				C = s("./src/reddit/actions/users.ts"),
				O = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				y = s("./src/reddit/routes/notificationsInbox/index.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const P = () => async (e, t) => {
				S(t(), e), e(E()), e(j()), await e(w())
			}, E = () => Object(f.k)({
				actionSource: f.a.NotificationsInbox,
				redirectUrl: y.b
			}), j = () => v.l({
				title: Object(n.e)()
			}), S = (e, t) => {
				if (!Object(x.I)(e) || !Object(x.F)(e)) return Object(O.a)(t, e)
			}, w = () => async e => {
				e(u()), await Promise.all([e(b()), e(Object(C.r)())])
			}
		},
		"./src/reddit/actions/pages/settings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/extractQueryParams/index.ts"),
				i = s("./src/lib/filterQueryParams/index.ts"),
				c = s("./src/lib/pageTitle.ts"),
				d = s("./src/reddit/actions/chat/userSettings.ts"),
				l = s("./src/reddit/endpoints/economics/paymentSystems.ts"),
				u = s("./src/reddit/actions/economics/paymentSystems/actionCreators.ts");
			var m = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				p = s("./src/reddit/actions/externalAccount.ts"),
				b = s("./src/reddit/actions/gold/powerups.ts"),
				h = s("./src/reddit/actions/notifications/preferences.ts"),
				g = s("./src/reddit/actions/platform.ts"),
				f = s("./src/reddit/actions/preferences.ts"),
				v = s("./src/reddit/actions/profile/index.ts"),
				C = s("./src/reddit/actions/subredditSettings.ts"),
				O = s("./src/reddit/actions/toaster.ts"),
				y = s("./src/reddit/actions/users.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				P = s("./src/reddit/helpers/externalAccount/index.tsx"),
				E = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				j = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				S = s("./src/reddit/selectors/externalAccount.ts"),
				w = s("./src/reddit/selectors/user.ts");
			const _ = e => async (t, s) => {
				await t(Object(y.r)());
				const _ = [t(Object(f.z)(!0)), t(Object(m.a)())];
				s().economics.paymentSystems.status === j.a.NotFetched && _.push(t((() => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					e(Object(u.d)());
					const a = await Object(l.d)(n());
					a.ok ? e(Object(u.c)(a.body)) : e(Object(u.b)({
						error: a.error
					}))
				})())), await Promise.all(_); {
					const e = s();
					if (!Object(w.I)(e)) return Object(E.a)(t, e)
				}
				const {
					page: k = r.Ob.Account
				} = e.params;
				if (k === r.Ob.Gold) return void t(Object(a.c)("/settings/premium"));
				const M = [];
				k === r.Ob.Profile && (M.push(t(Object(v.a)())), M.push(t(Object(C.g)()))), k === r.Ob.Account && M.push(t(Object(p.o)())), k === r.Ob.Notifications && M.push(t(Object(h.a)())), k !== r.Ob.Privacy && k !== r.Ob.Messaging || M.push(t(Object(d.b)())), k === r.Ob.Premium && (M.push(t(Object(v.a)())), M.push(t(Object(b.g)(!0)))), await Promise.all(M); {
					const e = s(),
						r = e.platform.currentPage,
						{
							url: c
						} = r,
						d = Object(o.a)(c).get(x.d);
					if (d && (t(Object(a.c)(Object(i.a)(c, [x.d]))), Object(S.a)(e))) {
						const e = n.fbt._("Connected accounts", null, {
							hk: "bdpfW"
						});
						t(Object(O.e)({
							text: e
						})), Object(P.b)(d)
					}
				}
				t(Object(g.l)({
					title: Object(c.h)()
				}))
			}
		},
		"./src/reddit/actions/pages/subredditCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/pageTitle.ts"),
				a = s("./src/reddit/actions/platform.ts"),
				r = s("./src/reddit/actions/tags/index.ts"),
				o = s("./src/reddit/actions/users.ts"),
				i = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = () => async (e, t) => {
				e(a.l({
					title: Object(n.j)()
				})), await e(Object(o.r)());
				const s = t();
				Object(c.I)(s) ? await e(Object(r.f)()) : Object(i.a)(e, s)
			}
		},
		"./src/reddit/actions/pages/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/pageTitle.ts"),
				a = s("./src/reddit/actions/category/index.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/actions/platform.ts"),
				i = s("./src/reddit/actions/subreddit/topSubreddits.ts"),
				c = s("./src/reddit/actions/users.ts"),
				d = s("./src/reddit/constants/listings.ts"),
				l = s("./src/reddit/constants/subredditLeaderboard.ts"),
				u = s("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				m = s("./src/reddit/models/GoodContent/index.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				b = s("./src/reddit/selectors/subredditLeaderboard.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const g = (e, t) => t && e === l.k,
				f = e => async (t, s) => {
					t(Object(r.k)({
						actionSource: r.a.SubredditLeaderboard,
						redirectUrl: d.c[d.b.SubredditLeaderboard]
					})), t(o.l({
						title: Object(n.k)()
					}));
					const a = e.params && e.params.categoryName,
						i = a && Object(u.b)(a);
					await t(v(i))
				}, v = e => async (t, s) => {
					await t(Object(a.a)());
					const n = s(),
						r = Object(h.J)(n);
					if (Object(b.a)(n, e)) return;
					const o = e && Object(p.f)(n, {
							categoryName: e
						}),
						d = e === l.i ? l.h : o && o.id || l.d,
						u = ((e, t) => ({
							categoryId: e,
							filter: m.a,
							isOnlyModIncluded: t
						}))(d, g(e, r)),
						f = Object(b.d)(d, e);
					await Promise.all([t(Object(i.a)(u, f)), t(Object(c.r)())])
				}
		},
		"./src/reddit/actions/publicAccessNetwork/userSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/constants/localStorage.ts"),
				o = s("./src/reddit/helpers/localStorage/index.ts");
			const i = Object(n.a)(a.C),
				c = e => async t => {
					await t(i(e)), t(u())
				}, d = () => async e => {
					const t = l();
					t && e(i(t))
				}, l = () => {
					return Object(o.o)(r.C) || void 0
				}, u = () => async (e, t) => {
					const s = t().publicAccessNetwork.userSettings;
					Object(o.Z)(r.C, s)
				}
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/reddit/actions/comment/index.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/reddit/constants/shortcuts.ts"),
				c = s("./src/reddit/helpers/trackers/lightbox.ts"),
				d = s("./src/reddit/helpers/trackers/shortcuts.ts"),
				l = s("./src/reddit/selectors/gild.ts"),
				u = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				m = s("./src/reddit/actions/shortcuts/utils.ts");
			const p = [u.r, u.m, e => !!Object(l.d)(e)],
				b = (e, t) => async (s, l, u) => {
					let {
						apiContext: b
					} = u;
					const h = l();
					for (const e of p)
						if (e(h)) return;
					const g = document.activeElement,
						f = h.shortcuts.activeCommentId,
						v = Object(m.c)(h);
					if (g && "true" === g.contentEditable && f && v) s(a.O({
						parentCommentId: f,
						commentsPageKey: v
					})), Object(m.a)(f);
					else if (h.activeModalId) Object(m.b)(i.b), s(Object(r.i)(h.activeModalId));
					else if (h.toaster[0]) Object(m.b)(i.b), s(Object(o.f)(h.toaster[0].id));
					else if (h.shortcuts.namespace === i.d.Lightbox && h.platform.currentPage) {
						const e = h.platform.currentPage.locationState.closeLocation;
						e && (Object(m.b)(i.b), s(Object(n.b)(e)))
					}
					const {
						activePostId: C
					} = h.shortcuts;
					e(t && C ? c.b(C, "close", !0) : d.a)
				}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				r = s("./src/reddit/constants/subredditLeaderboard.ts"),
				o = s("./src/reddit/endpoints/subreddit/local.ts"),
				i = s("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				c = s("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const d = Object(n.a)(a.k),
				l = Object(n.a)(a.j),
				u = Object(n.a)(a.i),
				m = Object(n.a)(a.a),
				p = Object(n.a)(a.b),
				b = Object(n.a)(a.c),
				h = (e, t) => async (s, n, a) => {
					let {
						gqlContext: h
					} = a;
					s(d());
					const g = t === r.h ? async function() {
						const t = await Object(o.a)(h(), e);
						if (!t.ok) {
							const e = t.error;
							return s(u({
								error: e
							})), null
						}
						const n = t.body,
							a = n && n.data && n.data.nearbySubreddits;
						return Object(c.a)(a)
					}: async function() {
						const t = await Object(i.a)(h(), e);
						if (!t.ok) {
							const e = t.error;
							return void s(u({
								error: e
							}))
						}
						const n = t.body,
							a = n && n.data && n.data.subredditLeaderboard;
						return Object(c.b)(a)
					}, f = await g();
					if (!f) return;
					const {
						pageInfo: v,
						rankings: C,
						subreddits: O
					} = f;
					s(m({
						subreddits: O
					})), s(p({
						categoryRankingsKey: t,
						rankings: C
					})), s(b({
						categoryRankingsKey: t,
						pageInfo: v
					})), s(l())
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
				small: "FBb4FZ4ng7CvLYrT6LBdp",
				ssoConfirmPassword: "_3CQoZKhSqrJrbOGJxp03DS",
				mResponsive: "_2CwLGmlfoqlHFJcOwm0RS-",
				linkActionSSOFail: "_1ALB_4jSDt6vPeELvg9lKL",
				linkActionSsoFail: "_1ALB_4jSDt6vPeELvg9lKL",
				mGoogleOneTap: "_15Lh8Q9iPGbXdxumHm8cT9",
				mHiddenOverlay: "_233XfOVq91N_ugGQDBb_OT"
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
					[e.showSuspended]: !!t.showSuspended
				}),
				a = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				})
		},
		"./src/reddit/components/AlertBanner/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/AppRouter/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/AppRouter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return jm
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/isEqual.js"),
				r = s.n(a),
				o = s("./node_modules/lodash/omit.js"),
				i = s.n(o),
				c = s("./node_modules/lodash/throttle.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				u = s.n(l),
				m = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/react-router/esm/react-router.js"),
				b = s("./node_modules/react-router-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				C = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				O = s("./src/lib/fastdom/index.ts"),
				y = s("./src/lib/FocusTrap/index.ts"),
				x = s("./src/lib/isEqualWithoutKey/index.ts"),
				P = s("./src/lib/isSimpleClick/index.ts"),
				E = s("./src/reddit/actions/header.ts"),
				j = s("./src/reddit/actions/survey/index.ts"),
				S = s("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				w = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				_ = s("./node_modules/polished/dist/polished.es.js"),
				k = s("./node_modules/react-motion/lib/react-motion.js"),
				M = s("./src/lib/lessComponent.tsx"),
				I = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/config.ts")),
				N = s("./src/lib/addQueryParams/index.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				R = s("./src/reddit/actions/preferences.ts"),
				L = s("./src/lib/makeActionCreator/index.ts"),
				A = s("./src/reddit/actions/sso/constants.ts");
			const F = Object(L.a)(A.a),
				D = Object(L.a)(A.b);
			var G = s("./src/reddit/actions/toaster.ts"),
				U = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/constants/accountManager.ts"),
				H = s("./src/reddit/constants/history.ts"),
				q = s("./src/reddit/constants/listings.ts"),
				W = s("./src/reddit/constants/modals.ts"),
				V = s("./src/reddit/constants/parameters.ts");
			const Q = () => I.a.redditUrl;
			var z = s("./src/reddit/helpers/history/index.ts"),
				Z = s("./src/reddit/selectors/telemetry.ts");
			const K = [],
				Y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K;
					return t => Object.assign(Object.assign({}, Z.defaults(t)), {
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
				X = () => e => Object.assign(Object.assign({}, Z.defaults(e)), {
					action: "dismiss",
					noun: "create_account_screen_dropdown",
					source: "onboarding"
				}),
				J = () => e => Object.assign(Object.assign({}, Z.defaults(e)), {
					action: "view",
					noun: "create_account_screen_dropdown",
					source: "onboarding"
				}),
				$ = e => t => Object.assign(Object.assign({}, Z.defaults(t)), {
					action: "dismiss",
					noun: e,
					source: "onboarding"
				});
			var ee = s("./src/reddit/icons/svgs/Close/index.tsx"),
				te = s("./src/reddit/models/Sso/index.ts"),
				se = s("./src/reddit/models/Toast/index.ts"),
				ne = s("./src/reddit/selectors/accountManager.ts"),
				ae = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				re = s("./src/reddit/selectors/user.ts"),
				oe = s("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				ie = s.n(oe);
			const ce = M.a.iframe("IFrame", ie.a),
				de = M.a.button("CloseButton", ie.a),
				le = M.a.wrapped(ee.a, "Close", ie.a),
				ue = Object(h.c)({
					accountManagerSrc: ne.c,
					actionSource: ne.a,
					frontpageSignupVariant: ae.a,
					isLoggedIn: re.I,
					redirectUrl: ne.b
				}),
				me = Object(m.b)(ue, (e, t) => ({
					oniFrameLoaded: (t, s) => {
						e((e, n) => {
							t.contentWindow.postMessage({
								events: Object.assign(Object.assign({}, Object(Z.defaults)(n())), {
									actionSource: s
								}),
								type: "eventData"
							}, Q())
						})
					},
					onTwoFactorChanged: () => e(Object(R.z)(!1)),
					onSSOLinkSuccess: (t, s, n) => {
						e(F({
							linkedIdentity: s
						})), e(Object(T.g)(n)), e(Object(G.e)(Object(G.d)(t, se.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, s, n) => {
						e(D({
							linkedIdentity: s
						})), e(Object(T.g)(n)), e(Object(G.e)(Object(G.d)(t, se.b.SuccessCommunity)))
					},
					showToast: (t, s) => {
						e(Object(G.e)(Object(G.d)(t, s)))
					}
				})),
				pe = e => {
					let {
						data: t,
						origin: s
					} = e;
					return t && t.success && (t.type === B.a.ChangePassword || t.type === B.a.Close || t.type === B.a.CreateAccount || t.type === B.a.GoogleOneTapDisplayed || t.type === B.a.GoogleOneTapFlowFailed || t.type === B.a.GoogleOneTapSkipped || t.type === B.a.Login || t.type === B.a.PreferenceStatus || t.type === B.a.Register || t.type === B.a.Resize || t.type === B.a.ShowStep || t.type === B.a.SSOLinkFail || t.type === B.a.SSOLinkSuccess || t.type === B.a.SSOUnlinkFail || t.type === B.a.SSOUnlinkSuccess || t.type === B.a.Subscribe || t.type === B.a.TwoFactorChanged) && s === I.a.accountManagerOrigin
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
						const t = e === te.a.Apple ? W.a.LINK_APPLE_SSO : W.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(n.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === te.a.Apple ? W.a.UNLINK_APPLE_SSO : W.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(n.fbt._("Account disconnected", null, {
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
						let s = "";
						if (this.props.redirectUrl) s = this.props.redirectUrl;
						else if ("/" !== window.location.pathname) s = window.location.href;
						else {
							const n = 0;
							s = (e || t && t.length || 0) > n ? q.c[q.b.Home] : q.c[q.b.Popular]
						}
						this.redirectTo(s)
					}, this.onShowStep = e => {
						this.currentStep = e, e === B.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || n.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), se.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(n.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), se.b.SuccessCommunity) : this.props.showToast(n.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), se.b.Error)
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
						showCloseButton: s
					} = this.props, {
						iframeStyles: n
					} = this.state;
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(ce, {
						className: t,
						innerRef: this.iframeRef,
						src: e,
						style: n,
						onLoad: this.onIFrameLoad
					}), s && u.a.createElement(de, {
						onClick: this.closedByUser
					}, u.a.createElement(le, null)))
				}
			}
			var ge, fe = me(Object(U.c)(he)),
				ve = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Ce = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Oe = s("./src/reddit/components/Carousel/index.m.less"),
				ye = s.n(Oe);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(ge || (ge = {}));
			class xe extends u.a.Component {
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
							const s = 10 * t.items.length;
							return Object.assign(Object.assign({}, e), {
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
						return u.a.createElement("img", {
							key: t,
							src: "".concat(I.a.assetPath, "/").concat(t),
							style: s
						})
					}, this.renderItem = (e, t) => {
						const {
							animationType: s,
							itemWidth: n,
							shouldHandleMouseClicks: a
						} = this.props, {
							pageNumber: r
						} = this.state, o = s === ge.Fade ? {
							opacity: t === r ? 1 : 0
						} : {
							marginLeft: 0 === t ? -n * r : void 0
						};
						return u.a.createElement("div", {
							className: Object(g.a)(ye.a.item, ye.a[s]),
							key: "item-".concat(t),
							style: Object.assign(Object.assign({}, o), {
								backgroundImage: 'url("'.concat(I.a.assetPath, "/").concat(e.img, '")'),
								width: n
							}),
							onClick: a ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => u.a.createElement("div", {
						className: Object(g.a)(ye.a.indicator, {
							[ye.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
					return u.a.createElement("div", {
						className: Object(g.a)(e, ye.a.container)
					}, u.a.createElement("article", {
						className: ye.a.items
					}, this.state.items.map(this.renderItem)), t && u.a.createElement("footer", {
						className: ye.a.indicators
					}, s.map(this.renderIndicator)))
				}
			}
			var Pe = s("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				Ee = s.n(Pe);
			const je = M.a.div("Container", Ee.a),
				Se = M.a.wrapped(xe, "Carousel", Ee.a),
				we = M.a.div("Phone", Ee.a),
				_e = M.a.img("Frame", Ee.a),
				ke = "".concat(I.a.assetPath, "/img/frontpage-signup/android-frame.png"),
				Me = "".concat(I.a.assetPath, "/img/frontpage-signup/iphone-frame.png"),
				Ie = [{
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
					}, u.a.createElement(we, {
						className: Ee.a.android
					}, u.a.createElement(Se, {
						animationType: ge.Fade,
						className: Ee.a.android,
						delay: 2500,
						items: Ie,
						itemTime: 5e3,
						itemWidth: 240
					}), u.a.createElement(_e, {
						src: ke
					})), u.a.createElement(we, {
						className: Ee.a.iphone
					}, u.a.createElement(Se, {
						animationType: ge.Fade,
						className: Ee.a.iphone,
						items: Ne,
						itemTime: 5e3,
						itemWidth: 232
					}), u.a.createElement(_e, {
						src: Me
					})))
				},
				Re = s("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				Le = s.n(Re);
			const Ae = M.a.div("Container", Le.a),
				Fe = M.a.span("Disclaimer", Le.a),
				De = M.a.a("Link", Le.a);
			var Ge = e => u.a.createElement(Ae, {
					className: e.className
				}, u.a.createElement(De, {
					href: "https://about.reddit.com"
				}, n.fbt._("about", null, {
					hk: "4n6gdA"
				})), u.a.createElement(De, {
					href: "https://www.redditinc.com/advertising"
				}, n.fbt._("advertise", null, {
					hk: "3M40BX"
				})), u.a.createElement(De, {
					href: "http://www.redditblog.com/"
				}, n.fbt._("blog", null, {
					hk: "iEUEu"
				})), u.a.createElement(De, {
					href: "https://about.reddit.com/careers/"
				}, n.fbt._("careers", null, {
					hk: "1nRiZW"
				})), u.a.createElement(De, {
					href: "https://www.reddithelp.com"
				}, n.fbt._("help", null, {
					hk: "3CJ8k2"
				})), u.a.createElement(De, {
					href: "https://about.reddit.com/press/"
				}, n.fbt._("press", null, {
					hk: "x8wb0"
				})), u.a.createElement(De, {
					href: "https://www.reddit.com/mobile/download"
				}, n.fbt._("The Reddit App", null, {
					hk: "1N9ljJ"
				})), u.a.createElement(De, {
					href: "https://www.reddit.com/coins"
				}, n.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), u.a.createElement(De, {
					href: "https://redditgifts.com/"
				}, n.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), u.a.createElement(De, {
					href: "https://www.reddit.com/premium"
				}, n.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), u.a.createElement(De, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, n.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), u.a.createElement(De, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, n.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), u.a.createElement(Fe, null, n.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				Ue = s("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				Be = s.n(Ue);
			const He = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				qe = M.a.div("Container", Be.a),
				We = M.a.wrapped(fe, "IFrame", Be.a),
				Ve = M.a.wrapped(Te, "Images", Be.a),
				Qe = M.a.wrapped(Ge, "Links", Be.a),
				ze = M.a.div("MainContent", Be.a),
				Ze = M.a.div("MainContentColumn", Be.a),
				Ke = M.a.button("NotReady", Be.a),
				Ye = M.a.span("NotReadyText", Be.a),
				Xe = M.a.wrapped(ve.a, "NotReadyIcon", Be.a),
				Je = Object(v.a)(e => {
					const {
						className: t,
						containerRef: s,
						frontpageSignupVariant: a,
						onCloseClick: r,
						onVisibilityChange: o
					} = e, i = Object(Ce.a)(e).bodyText;
					return u.a.createElement(w.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: o
					}, u.a.createElement(qe, {
						className: t,
						innerRef: s
					}, u.a.createElement(ze, null, u.a.createElement(Ze, null, u.a.createElement(Ve, null, "Images Placeholder")), u.a.createElement(Ze, null, u.a.createElement(We, {
						className: Object(g.a)({
							[Be.a.fields]: Object(ae.b)(a)
						}),
						path: B.c.Register,
						uiMode: B.d.Embed
					}))), u.a.createElement(Ke, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(_.j)(.8, i)
						}
					}, u.a.createElement(Ye, null, n.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), u.a.createElement(Xe, null)), u.a.createElement(Qe, null)))
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
						}), this.props.sendEvent(Y()))
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
						isClosed: s
					} = this.state, n = s && this.containerRef.current ? this.containerRef.current.offsetHeight : 0;
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(Je, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), u.a.createElement(k.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(k.spring)(n, He)
						}
					}, this.renderScroller))
				}
			}
			var tt = Object(U.c)(et),
				st = s("./node_modules/js-cookie/src/js.cookie.js"),
				nt = s.n(st),
				at = s("./src/lib/localStorageAvailable/index.ts"),
				rt = s("./src/higherOrderComponents/makeAsync.tsx"),
				ot = Object(rt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("BadgePurchaseModal").then(s.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				it = s("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				ct = s("./src/higherOrderComponents/asModal/index.tsx"),
				dt = s("./src/reddit/controls/Button/index.tsx"),
				lt = s("./src/reddit/selectors/activeModalId.ts"),
				ut = s("./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less"),
				mt = s.n(ut);
			const {
				fbt: pt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), bt = M.a.button("CloseButton", mt.a), ht = M.a.wrapped(ee.a, "Close", mt.a), gt = M.a.div("Container", mt.a), ft = M.a.p("Description", mt.a), vt = M.a.div("Footer", mt.a), Ct = M.a.h3("Heading", mt.a), Ot = M.a.img("SnooImage", mt.a), yt = M.a.div("Wrapper", mt.a), xt = Object(h.c)({
				activeModalId: lt.a
			});
			class Pt extends u.a.Component {
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
					return u.a.createElement(yt, null, u.a.createElement(gt, null, u.a.createElement(Ct, null, pt._("Ok, looking for people now...", null, {
						hk: "2fr3Y9"
					})), u.a.createElement(ft, null, pt._("You’ll be redirected to your chat room shortly.", null, {
						hk: "4tpnrt"
					})), u.a.createElement(Ot, {
						src: "".concat(I.a.assetPath, "/img/magnifying-glass-snoo.png")
					})), u.a.createElement(vt, null, u.a.createElement(dt.i, {
						onClick: this.onCloseButtonClick
					}, pt._("Sounds good", null, {
						hk: "1OMLn5"
					}))), u.a.createElement(bt, {
						onClick: this.onCloseButtonClick
					}, u.a.createElement(ht, null)))
				}
			}
			var Et = Object(m.b)(xt, e => ({
					modalToggled: t => e(Object(T.i)(t))
				}))(Object(ct.a)(Object(U.c)(Pt))),
				jt = s("./src/lib/loadWithRetries/index.ts");
			const St = () => null;
			var wt = Object(rt.a)({
					ErrorComponent: St,
					getComponent: () => Object(jt.a)(() => s.e("ManageChatRoomsModal").then(s.bind(null, "./src/reddit/components/ManageChatRoomsModal/_ManageChatRoomsModal.tsx"))).then(e => e.default),
					LoadingComponent: St
				}),
				_t = s("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var kt = Object(rt.a)({
				getComponent: () => Object(jt.a)(() => s.e("NotificationsPrePromptLoader").then(s.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Mt = () => null;
			var It = Object(rt.a)({
					ErrorComponent: Mt,
					getComponent: () => Object(jt.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Mt
				}),
				Nt = s("./src/reddit/actions/structuredStyles/index.ts"),
				Tt = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Rt = s("./src/reddit/controls/TextButton/index.tsx"),
				Lt = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: At
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ft = Object(m.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					closeModal: () => {
						e(Object(T.i)(W.a.BLADE_NIGHTMODE)), e(Object(Nt.f)())
					},
					openBlade: () => {
						e(Object(Nt.e)(s))
					}
				}
			});
			var Dt = Object(ct.a)(Ft(e => u.a.createElement(Tt.d, null, u.a.createElement(Tt.h, null, u.a.createElement(Lt.a, null, u.a.createElement(Tt.p, null, At._("Turning off Night Mode", null, {
					hk: "2XW7Rk"
				})), u.a.createElement(Rt.a, {
					onClick: e.closeModal
				}, u.a.createElement(Tt.b, null)))), u.a.createElement(Tt.k, null, u.a.createElement(Tt.n, null, At._("In order to continue styling your community, Night Mode must be turned off.", null, {
					hk: "2qLSfr"
				}))), u.a.createElement(Tt.f, null, u.a.createElement(Tt.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, At._("Cancel", null, {
					hk: "2TSLl5"
				})), u.a.createElement(Tt.q, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, At._("Continue", null, {
					hk: "413jMZ"
				})))))),
				Gt = s("./src/reddit/actions/authorFlair.ts"),
				Ut = s("./src/reddit/actions/userFlair.ts"),
				Bt = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				Ht = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				qt = s("./src/reddit/components/FlairPreview/index.tsx"),
				Wt = s("./src/reddit/components/FlairSearch/index.tsx"),
				Vt = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				Qt = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				zt = s("./src/reddit/layout/row/Inline/index.tsx"),
				Zt = s("./src/reddit/models/Flair/index.ts"),
				Kt = s("./src/reddit/models/User/index.ts"),
				Yt = s("./src/reddit/selectors/authorFlair.ts"),
				Xt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Jt = s("./src/reddit/selectors/userFlair.ts"),
				$t = s("./src/reddit/components/UserFlairPicker/index.m.less"),
				es = s.n($t);
			const ts = e => e.inContextAuthor && e.currentUser && Object(Kt.e)(e.currentUser) === e.inContextAuthor.username,
				ss = e => e.authorFlair || ts(e) && e.userFlairData.applied || null,
				ns = M.a.wrapped(zt.a, "Section", es.a),
				as = M.a.div("CheckboxText", es.a);
			class rs extends u.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(Z.subredditById)(t, this.props.subredditId)
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
						previewFlair: ss(e),
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
					} = e.displaySettings, r = this.state.showFlair !== a, o = ss(this.props);
					if (!n.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(Vt.b)(s, t, o);
					return !(i || c !== Vt.a.NoChanges || !r) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: s,
						subredditId: a
					} = e, r = s.permissions.canUserChange, o = s.permissions.canUserChange, {
						templates: i,
						templateIds: c
					} = s, d = this.canSave(), l = ts(e);
					return u.a.createElement(Ht.a, null, u.a.createElement(Bt.a, {
						onClosePressed: e.closeModal,
						title: n.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), u.a.createElement(qt.a, {
						flair: t.previewFlair,
						flairTemplateType: Zt.d.UserFlair,
						placeholderText: n.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), o && u.a.createElement(Wt.a, {
						flair: t.previewFlair,
						flairTemplateType: Zt.d.UserFlair,
						subredditId: a,
						templates: i,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), l && u.a.createElement(ns, null, u.a.createElement(Qt.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: u.a.createElement(as, null, n.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), u.a.createElement("div", {
						className: es.a.buttonsRow
					}, u.a.createElement(dt.i, {
						disabled: !d,
						onClick: this.onApply
					}, n.fbt._("Apply", null, {
						hk: "ZvO9n"
					})), r && u.a.createElement(dt.l, {
						className: es.a.clearButton,
						onClick: this.onClear
					}, n.fbt._("Clear Flair", null, {
						hk: "23i2at"
					}))))
				}
			}
			const os = Object(m.b)(() => Object(h.c)({
				authorFlair: Yt.b,
				currentUser: re.i,
				inContextAuthor: Yt.c,
				isMod: (e, t) => !!Object(Xt.j)(e, t),
				userFlairData: Jt.c
			}), (e, t) => ({
				activeFlairChanged: (s, n, a, r) => e(Object(Ut.o)(s, n, a, r.username, t.subredditId)),
				closeModal: () => e(Object(Gt.b)({
					username: null,
					subredditId: null
				}))
			}))(rs);
			var is = Object(ct.a)(Object(U.c)(os)),
				cs = s("./src/reddit/selectors/notificationPrefs.ts"),
				ds = s("./src/reddit/selectors/platform.ts"),
				ls = s("./src/reddit/selectors/removalReasons.ts"),
				us = s("./src/reddit/selectors/subredditModeration.ts"),
				ms = s("./src/reddit/constants/cookie.ts"),
				ps = s("./src/reddit/featureFlags/index.ts"),
				bs = s("./src/reddit/helpers/localStorage/index.ts"),
				hs = s("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const gs = Object(h.c)({
				activeModalId: lt.a,
				anyModalIsOpen: e => !!e.activeModalId,
				authorContext: Yt.c,
				badgePurchaseModalIsOpen: Object(lt.b)(W.a.BADGE_PURCHASE),
				banContext: us.f,
				banModalIsOpen: Object(lt.b)(W.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(lt.b)(W.a.BLADE_NIGHTMODE),
				chatroomSettingsModalIsOpen: Object(lt.b)(W.a.SUBREDDIT_CHAT_SETTINGS),
				createChatroomModalIsOpen: Object(lt.b)(W.a.CREATE_SUBREDDIT_CHAT),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				editChatroomModalIsOpen: Object(lt.b)(W.a.EDIT_SUBREDDIT_CHAT),
				deleteChatroomModalIsOpen: Object(lt.b)(W.a.DELETE_SUBREDDIT_CHAT),
				downToChatPendingModalIsOpen: Object(lt.b)(W.a.DOWN_TO_CHAT_PENDING_MODAL),
				introModalFeatureEnabled: e => ps.d.introModal(e),
				isOverlayOpen: ds.i,
				manageChatroomModalIsOpen: Object(lt.b)(W.a.MANAGE_SUBREDDIT_CHAT),
				moderatorPermissions: e => {
					const t = Object(ds.d)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: us.C,
				muteModalIsOpen: Object(lt.b)(W.a.MUTE_USER),
				notificationsPrePromptIsOpen: cs.c,
				removalReasonContext: ls.b,
				removalReasonModalIsOpen: Object(lt.b)(W.a.ADD_REMOVAL_REASON),
				subredditId: ds.d,
				userFlairModalIsOpen: Object(lt.b)(W.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: re.v,
				userInRedesignBeta: re.C,
				userIsLoggedIn: re.I,
				userIsMod: re.J,
				userIsNew: re.L
			});
			class fs extends u.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(at.a)()) return; {
						const e = nt.a.get(ms.a);
						e && nt.a.remove(ms.a, {
							domain: I.a.cookieDomain
						});
						const t = Object(bs.s)(W.a.ALPHA_CONSUMER);
						t && Object(bs.I)(W.a.ALPHA_CONSUMER), (e || t) && Object(bs.cb)(W.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, s = Object(bs.s)(W.a.REDESIGN_MODAL);
					!e && s ? t() : e && !s && Object(bs.cb)(W.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), W.b.includes(this.props.activeModalId || "") || (this.props.anyModalIsOpen ? setTimeout(() => Object(hs.a)(), 500) : setTimeout(() => Object(hs.b)(), 500))
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
						editChatroomModalIsOpen: c,
						deleteChatroomModalIsOpen: d,
						downToChatPendingModalIsOpen: m,
						manageChatroomModalIsOpen: p,
						muteContext: b,
						muteModalIsOpen: h,
						notificationsPrePromptIsOpen: g,
						removalReasonContext: f,
						removalReasonModalIsOpen: v,
						sendEvent: C,
						subredditId: O,
						toggleBanModal: y,
						toggleMuteModal: x,
						toggleRemovalReasonsModal: P,
						userFlairModalIsOpen: E
					} = this.props, j = (e, t, s) => n => () => C(a => ({
						source: e,
						action: "click",
						noun: n,
						comment: s && Object(Z.comment)(a, s),
						post: s && Object(Z.post)(a, s),
						screen: Object(Z.screen)(a),
						subreddit: Object(Z.subredditById)(a, t)
					}));
					return u.a.createElement(l.Fragment, null, n && s && u.a.createElement(it.a, {
						contextId: s.contextId,
						subredditId: s.subredditId,
						toggleModal: y,
						trackAddEvent: j("banned", s.subredditId, s.contextId)("add_in_context"),
						trackEventWithName: j("banned", s.subredditId, s.contextId),
						username: s.username
					}), h && b && u.a.createElement(_t.a, {
						contextId: b.contextId,
						subredditId: b.subredditId,
						toggleModal: x,
						trackAddEvent: j("muted", b.subredditId, b.contextId)("add_in_context"),
						username: b.username
					}), (o || p || d || c || r) && O && u.a.createElement(wt, {
						subredditId: O,
						withOverlay: !0
					}), v && f && u.a.createElement(It, {
						itemIds: f.itemIds,
						subredditId: f.subredditId,
						toggleModal: P,
						trackClick: j("removal_reasons", f.subredditId, 1 === f.itemIds.length ? f.itemIds[0] : void 0)
					}), a && O && u.a.createElement(Dt, {
						subredditId: O
					}), E && e && e.subredditId && u.a.createElement(is, {
						subredditId: e.subredditId
					}), t && i && u.a.createElement(ot, {
						withOverlay: !0,
						productId: i
					}), g && u.a.createElement(kt, null), m && u.a.createElement(Et, {
						withOverlay: !0
					}))
				}
			}
			var vs = Object(m.b)(gs, e => ({
					markRedesignModalAsClosed: () => e(Object(T.j)()),
					toggleBanModal: () => e(Object(T.i)(W.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(T.i)(W.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(T.i)(W.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(T.i)(W.a.ADD_REMOVAL_REASON))
				}))(Object(U.c)(fs)),
				Cs = s("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Os = s("./src/reddit/constants/experiments.ts"),
				ys = s("./src/reddit/contexts/PageLayer/index.tsx"),
				xs = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Ps = s("./src/reddit/selectors/responsiveSettings.ts"),
				Es = s("./src/reddit/components/AccountManagerModal/index.m.less"),
				js = s.n(Es);
			const Ss = M.a.div("Overlay", js.a),
				ws = M.a.div("IframeContainer", js.a),
				_s = {},
				ks = Object(ys.t)(),
				Ms = Object(h.c)({
					frontpageSignupVariant: ae.a,
					isResponsiveSettingsEnabled: Ps.a
				}),
				Is = {
					[B.c.ChangePassword]: W.a.CHANGE_PASSWORD_MODAL_ID,
					[B.c.Index]: W.a.LOGIN_MODAL_ID,
					[B.c.Register]: W.a.REGISTER_MODAL_ID,
					[B.c.EnableTwoFactor]: W.a.ENABLE_TWO_FACTOR,
					[B.c.DisableTwoFactor]: W.a.DISABLE_TWO_FACTOR,
					[B.c.TwoFactorBackupCodes]: W.a.TWO_FACTOR_BACKUP_CODES,
					[B.c.LinkAppleSSO]: W.a.LINK_APPLE_SSO,
					[B.c.UnlinkAppleSSO]: W.a.UNLINK_APPLE_SSO,
					[B.c.LinkGoogleSSO]: W.a.LINK_GOOGLE_SSO,
					[B.c.UnlinkGoogleSSO]: W.a.UNLINK_GOOGLE_SSO,
					[B.c.GoogleOneTap]: W.a.GOOGLE_ONE_TAP_MODAL_ID
				};
			class Ns extends u.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === B.c.Register && Object(ae.f)(this.props.frontpageSignupVariant) && xs.a.throttleFeature(Os.S), this.props.sendEvent(Y(this.subscriptions))
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
						"user_cancel" === e && this.props.sendEvent(X())
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(J())
					}, this.onShowScreen = e => {
						const {
							path: t
						} = this.props, s = t === B.c.Index || t === B.c.Register, n = t === B.c.GoogleOneTap;
						e === B.b.SelectAccount ? s ? this.resizeContainer({
							height: 474,
							width: 416
						}) : n && this.setState({
							removeHiddenOverlay: !0
						}) : e === B.b.Subscribe ? (s && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === B.b.Email || e === B.b.UsernameAndPassword ? s && this.restoreContainerSize() : e !== B.b.EmailOptIn && e !== B.b.GoogleUI || this.setState({
							removeHiddenOverlay: !1
						})
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						isResponsiveSettingsEnabled: t,
						pageLayer: s,
						path: n
					} = this.props, {
						containerSize: a,
						isSSOLinkActionFailedModal: r,
						removeGoogleOneTapStyles: o,
						removeHiddenOverlay: i
					} = this.state, c = Object(ae.c)(e) || Object(ae.d)(e), d = n === B.c.LinkAppleSSO || n === B.c.LinkGoogleSSO || n === B.c.UnlinkAppleSSO || n === B.c.UnlinkGoogleSSO, l = n === B.c.GoogleOneTap, m = Object(g.a)({
						[js.a.small]: c,
						[js.a.ssoConfirmPassword]: d,
						[js.a.linkActionSSOFail]: r,
						[js.a.mResponsive]: t,
						[js.a.mGoogleOneTap]: l && !o
					}), p = Object(g.a)({
						[js.a.mGoogleOneTap]: l && !o,
						[js.a.mHiddenOverlay]: l && !i
					}), b = !c && !r && !t;
					return u.a.createElement(Ss, {
						className: p
					}, u.a.createElement(ws, {
						className: m,
						style: a || _s
					}, u.a.createElement(fe, {
						onChange: this.restoreContainerSize,
						onClose: this.closeModal,
						onGoogleOneTapSkipped: this.onGoogleOneTapSkipped,
						onGoogleOneTapUIViewed: this.onGoogleOneTapUIViewed,
						onShowScreen: this.onShowScreen,
						onSSOLinkActionFail: this.handleSSOLinkActionFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						pageLayer: s,
						path: n,
						showCloseButton: b
					})))
				}
			}
			const Ts = ks(Object(m.b)(Ms, (e, t) => ({
				closeModal: t => {
					e(Object(T.g)(Is[t]))
				}
			}))(Object(U.c)(Ns)));
			Object(Cs.b)(W.a.CHANGE_PASSWORD_MODAL_ID, e => u.a.createElement(Ts, {
				path: B.c.ChangePassword
			})), Object(Cs.b)(W.a.LOGIN_MODAL_ID, e => u.a.createElement(Ts, {
				path: B.c.Index
			})), Object(Cs.b)(W.a.ENABLE_TWO_FACTOR, e => u.a.createElement(Ts, {
				path: B.c.EnableTwoFactor
			})), Object(Cs.b)(W.a.DISABLE_TWO_FACTOR, e => u.a.createElement(Ts, {
				path: B.c.DisableTwoFactor
			})), Object(Cs.b)(W.a.TWO_FACTOR_BACKUP_CODES, e => u.a.createElement(Ts, {
				path: B.c.TwoFactorBackupCodes
			})), Object(Cs.b)(W.a.REGISTER_MODAL_ID, e => u.a.createElement(Ts, {
				path: B.c.Register
			})), Object(Cs.b)(W.a.LINK_APPLE_SSO, e => u.a.createElement(Ts, {
				path: B.c.LinkAppleSSO
			})), Object(Cs.b)(W.a.LINK_GOOGLE_SSO, e => u.a.createElement(Ts, {
				path: B.c.LinkGoogleSSO
			})), Object(Cs.b)(W.a.UNLINK_APPLE_SSO, e => u.a.createElement(Ts, {
				path: B.c.UnlinkAppleSSO
			})), Object(Cs.b)(W.a.UNLINK_GOOGLE_SSO, e => u.a.createElement(Ts, {
				path: B.c.UnlinkGoogleSSO
			})), Object(Cs.b)(W.a.GOOGLE_ONE_TAP_MODAL_ID, e => u.a.createElement(Ts, {
				path: B.c.GoogleOneTap
			}));
			const Rs = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("BadgePickerModal").then(s.bind(null, "./src/reddit/components/Badges/PickerModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.BADGE_PICKER, e => u.a.createElement(Rs, {
				withOverlay: !0
			}));
			var Ls = s("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const As = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestPendingModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.CONTRIBUTOR_REQUEST_PENDING, e => u.a.createElement(As, {
				withOverlay: !0
			}));
			const Fs = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestRequestModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.CONTRIBUTOR_REQUEST, e => u.a.createElement(Fs, {
				withOverlay: !0
			}));
			const Ds = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), s.e("CrowdControlModal")]).then(s.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.CROWD_CONTROL, e => u.a.createElement(Ds, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Gs = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(jt.a)(() => s.e("EconPowerupsMarketingModal").then(s.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx"))).then(e => e.default)
			});
			Object(Cs.b)(W.a.ECON_POWERUPS_MARKETING, e => u.a.createElement(Gs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var Us = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const Bs = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(jt.a)(() => Promise.all([Promise.all([s.e("vendors~CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal~UpdateCardModal"), s.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), s.e(0), s.e("EconPowerupsPurchaseModal")]).then(s.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(Us.d)()])).then(e => e[0].default)
			});
			Object(Cs.b)(W.a.ECON_POWERUPS_PURCHASE, e => u.a.createElement(Bs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			s("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const Hs = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~EconHelperActions~SubredditPremiumBadgeManagement~reddit-components-Econ-Prediction"), s.e("SubredditPremiumBadgeManagement")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => u.a.createElement(Hs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const qs = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("SubredditPremiumUploadModal")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => u.a.createElement(qs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Ws = Object(rt.a)({
					getComponent: () => Object(jt.a)(() => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Vs = e => () => {
					e()
				};
			Object(Cs.b)(W.a.GOLD_GILD_MODAL, e => u.a.createElement(Ws, {
				onOverlayClick: Vs(e),
				withOverlay: !0
			}));
			var Qs = s("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				zs = s("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				Zs = s.n(zs);
			const Ks = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = Qs.SPARKLE_ASSET_PATH, document.createElement("img").src = Qs.STARBURST_ASSET_PATH, Promise.resolve().then(s.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(Cs.b)(W.a.GOLD_GILD_ANIMATION_OVERLAY, e => u.a.createElement(Ks, {
				withOverlay: !0,
				className: Zs.a.modalBody,
				overlayClassName: Zs.a.modalOverlay
			}));
			const Ys = Object(rt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("GoldTargetedOfferModal").then(s.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				Xs = e => () => {
					e()
				};
			Object(Cs.b)(W.a.GOLD_TARGETED_OFFER_MODAL, e => u.a.createElement(Ys, {
				onOverlayClick: Xs(e),
				withOverlay: !0
			}));
			const Js = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("HarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.HARBERGER_TAX_BANNER_MANAGE, e => u.a.createElement(Js, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const $s = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("HarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.HARBERGER_TAX_BANNER_PURCHASE, e => u.a.createElement($s, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const en = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("CryptoHarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => u.a.createElement(en, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const tn = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("CryptoHarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => u.a.createElement(tn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const sn = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~GovernanceReleaseNotesModal"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("GovernanceReleaseNotesModal")]).then(s.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.GOVERNANCE_RELEASE_NOTES, e => u.a.createElement(sn, {
				withOverlay: !0
			}));
			s("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const nn = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~GovernanceTransferPointsModal~reddit-components-Governance-TransactionModals-ClaimPointsModa~b2d0d5d1"), s.e("GovernanceTransferPointsModal")]).then(s.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.TRANSFER_POINTS, e => u.a.createElement(nn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const an = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistration").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.WALLET_REGISTRATION_MODAL, e => u.a.createElement(an, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const rn = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ModToMemberShareModal").then(s.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.MOD_TO_MEMBER_SHARE, e => u.a.createElement(rn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const on = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditAddSubredditModal").then(s.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.MULTIREDDIT_ADD_SUBREDDIT, e => u.a.createElement(on, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const cn = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditCreateModal").then(s.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.MULTIREDDIT_CREATE, e => u.a.createElement(cn, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Cs.b)(W.a.MULTIREDDIT_DUPLICATE, e => u.a.createElement(cn, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const dn = Object(rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditEditModal").then(s.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Cs.b)(W.a.MULTIREDDIT_EDIT, e => u.a.createElement(dn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ln = () => null,
				un = Object(rt.a)({
					ErrorComponent: ln,
					getComponent: () => Object(jt.a)(() => s.e("GlobalModalContainer").then(s.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: ln
				});
			Object(Cs.b)(W.a.PINNED_POSTS_LIMIT_REACHED, e => u.a.createElement(un, null));
			var mn = s("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				pn = s.n(mn);
			const {
				fbt: bn
			} = s("./node_modules/fbt/lib/FbtPublic.js"), hn = M.a.h2("ColumnLabel", pn.a), gn = M.a.wrapped(zt.a, "ColumnWrapper", pn.a), fn = M.a.div("Column", pn.a), vn = M.a.div("Description", pn.a), Cn = M.a.div("Key", pn.a), On = M.a.wrapped(Tt.k, "ModalMain", pn.a), yn = M.a.wrapped(Tt.d, "ModalBody", pn.a), xn = M.a.wrapped(dt.i, "PrimaryButton", pn.a), Pn = M.a.wrapped(Rt.a, "TextButton", pn.a), En = Object(m.b)(null, e => ({
				closeModal: () => e(Object(T.i)(W.a.KEYBOARD_SHORTCUTS))
			})), jn = M.a.wrapped(Object(ct.a)(En(e => u.a.createElement(yn, {
				onClick: e => e.stopPropagation()
			}, u.a.createElement(Tt.h, null, u.a.createElement(Lt.a, null, u.a.createElement(Tt.p, null, bn._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), u.a.createElement(Pn, {
				onClick: e.closeModal
			}, u.a.createElement(Tt.b, null)))), u.a.createElement(On, null, u.a.createElement(gn, null, u.a.createElement(fn, null, u.a.createElement(zt.a, null, u.a.createElement(hn, null, bn._("Navigation", null, {
				hk: "3zSWEe"
			}))), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), u.a.createElement(Cn, null, "Shift + ?")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Next post or comment", null, {
				hk: "1m8s9z"
			})), u.a.createElement(Cn, null, "J")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), u.a.createElement(Cn, null, "K")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), u.a.createElement(Cn, null, "N")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), u.a.createElement(Cn, null, "P")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Open post", null, {
				hk: "2wD7mh"
			})), u.a.createElement(Cn, null, "Enter")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Open/close expando", null, {
				hk: "1yDst0"
			})), u.a.createElement(Cn, null, "X")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Go to post link", null, {
				hk: "c0TNr"
			})), u.a.createElement(Cn, null, "L"))), u.a.createElement(fn, null, u.a.createElement(zt.a, null, u.a.createElement(hn, null, bn._("Action", null, {
				hk: "3QI6pT"
			}))), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Upvote", null, {
				hk: "5i9NP"
			})), u.a.createElement(Cn, null, "A")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Downvote", null, {
				hk: "1ef3YP"
			})), u.a.createElement(Cn, null, "Z")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("New post", null, {
				hk: "4dtNWf"
			})), u.a.createElement(Cn, null, "C")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Reply to comment", null, {
				hk: "G8AbT"
			})), u.a.createElement(Cn, null, "R")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Submit comment/post", null, {
				hk: "13agk7"
			})), u.a.createElement(Cn, null, "Ctrl + Enter")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Save", null, {
				hk: "3Dtwo5"
			})), u.a.createElement(Cn, null, "S")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Hide", null, {
				hk: "2Dn9GF"
			})), u.a.createElement(Cn, null, "H")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Open navigation", null, {
				hk: "QdGe2"
			})), u.a.createElement(Cn, null, "Q")), u.a.createElement(zt.a, null, u.a.createElement(vn, null, bn._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), u.a.createElement(Cn, null, "Enter"))))), u.a.createElement(Tt.f, null, u.a.createElement(xn, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, bn._("Close", null, {
				hk: "4gbyAA"
			})))))), "ConnectedModal", pn.a);
			Object(Cs.b)(W.a.KEYBOARD_SHORTCUTS, e => u.a.createElement(jn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const {
				fbt: Sn
			} = s("./node_modules/fbt/lib/FbtPublic.js"), wn = Object(h.c)({
				allowNavigationCallback: ds.a
			}), _n = Object(m.b)(wn, e => ({
				closeModal: () => e(Object(T.i)(W.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Nt.a)())
			}));
			class kn extends u.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return u.a.createElement(Tt.d, null, u.a.createElement(Tt.h, null, u.a.createElement(Lt.a, null, u.a.createElement(Tt.p, null, Sn._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), u.a.createElement(Rt.a, {
						onClick: this.onCancelClick
					}, u.a.createElement(Tt.b, null)))), u.a.createElement(Tt.k, null, u.a.createElement(Tt.o, null, Sn._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), u.a.createElement(Tt.f, null, u.a.createElement(Tt.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Sn._("Cancel", null, {
						hk: "2TSLl5"
					})), u.a.createElement(Tt.q, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Sn._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const Mn = Object(ct.a)(_n(kn));
			Object(Cs.b)(W.a.BLADE_UNSAVED_CHANGES, e => u.a.createElement(Mn, {
				withOverlay: !0
			}));
			const In = Object(h.c)({
					activeModalId: lt.a
				}),
				Nn = Object(m.b)(In, e => ({
					toggleModal: t => e(Object(T.i)(t))
				})),
				Tn = 500,
				Rn = () => {};
			class Ln extends u.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					W.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(hs.a)(), Tn) : setTimeout(() => Object(hs.b)(), Tn))
				}
				componentWillUnmount() {
					Object(hs.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(Cs.a)(e)(e ? this.toggleModal : Rn)
				}
			}
			var An, Fn = Nn(Ln),
				Dn = (s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				Gn = s("./src/reddit/actions/page.ts"),
				Un = s("./src/reddit/actions/shortcuts/utils.ts"),
				Bn = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Hn = s("./src/reddit/icons/svgs/Pinmenu/index.tsx"),
				qn = s("./src/reddit/selectors/header.ts"),
				Wn = s("./src/reddit/selectors/userPrefs.ts"),
				Vn = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx")),
				Qn = s("./src/reddit/components/SEOTitle/index.tsx"),
				zn = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Zn = s("./src/reddit/components/UserIcon/index.tsx"),
				Kn = s("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				Yn = s("./src/reddit/icons/svgs/All/index.tsx"),
				Xn = s("./src/reddit/icons/svgs/Browse/index.tsx"),
				Jn = s("./src/reddit/icons/svgs/Coin/index.tsx"),
				$n = s("./src/reddit/icons/svgs/Envelope/index.tsx"),
				ea = s("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				ta = s("./src/reddit/icons/svgs/Home/index.tsx"),
				sa = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				na = s("./src/reddit/icons/svgs/Multireddit/index.tsx"),
				aa = s("./src/reddit/icons/svgs/Notify/index.tsx"),
				ra = s("./src/reddit/icons/svgs/Popular/index.tsx"),
				oa = s("./src/reddit/icons/svgs/Post/index.tsx"),
				ia = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				ca = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				da = s("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				la = s.n(da);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(An || (An = {}));
			const ua = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [s, n] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return u.a.createElement(u.a.Fragment, null, s && "".concat(s, "/"), n && u.a.createElement(Qn.b, {
					type: Qn.a.HeaderSelector
				}, n))
			};
			var ma = s("./src/lib/objectSelector/index.ts"),
				pa = s("./src/reddit/constants/wiki.ts"),
				ba = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				ha = s("./src/reddit/selectors/subreddit.ts"),
				ga = s("./src/reddit/selectors/topic.ts");
			var fa = Object(ma.a)((e, t) => {
					let {
						pageLayer: s
					} = t;
					const n = !!e.user.account,
						a = Object(ys.U)(s);
					switch (a) {
						case "index":
						case "listing":
							return n ? {
								type: An.Home
							} : {
								type: An.Popular
							};
						case "modListing":
							return {
								type: An.ModListing
							};
						case "modQueuePages":
							return {
								type: An.ModQueue
							};
						case "postCreation":
							return {
								type: An.CreatePost
							};
						case "postDraft":
							return {
								type: An.ViewDraft
							};
						case "subredditCreation":
							return {
								type: An.SubredditCreation
							};
						case "coins":
							return {
								type: An.Coins
							};
						case "premium":
							return {
								type: An.Premium
							};
						case "acknowledgements":
							return {
								type: An.Acknowledgements
							};
						case "appeal":
							return {
								type: An.Appeal
							};
						case "report":
							return {
								type: An.Report
							};
						case "userDataRequest":
							return {
								type: An.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: An.DailyCharts
							};
						case "geotagging":
							return {
								type: An.Geotagging
							};
						case "notificationsInbox":
							return {
								type: An.NotificationsInbox
							};
						case "topic": {
							const t = Object(ys.s)(s),
								n = t && Object(ga.e)(e, t, !0);
							if (n) return {
								type: An.Topic,
								model: n
							}
						}
					}
					const r = e.user.account;
					if (r) switch (a) {
						case "inboxPages":
							return {
								type: An.Inbox, model: r
							};
						case "settings":
							return {
								type: An.Settings, model: r
							}
					}
					const o = Object(ys.O)(e, {
						pageLayer: s
					});
					if ("all" === o) return {
						type: An.All
					};
					if ("popular" === o) return {
						type: An.Popular
					};
					const i = Object(ys.q)(e, {
						pageLayer: s
					});
					if (i) return "searchResults" === a ? {
						type: An.CommunitySearch,
						model: i
					} : {
						type: An.Community,
						model: i
					};
					const c = Object(ys.d)(e, {
						pageLayer: s
					});
					if (c) return {
						type: An.Multi,
						model: c
					};
					const d = Object(ys.j)(e, {
						pageLayer: s
					});
					if (d) return {
						type: An.UserProfile,
						model: d
					};
					const l = Object(ys.h)(s);
					if (l) return {
						type: An.UserProfileName,
						name: "u/".concat(l)
					};
					if (a && "searchResults" === a) return {
						type: An.GlobalSearch
					};
					if ("subredditWiki" === a) {
						const t = Object(ys.n)(e, {
								pageLayer: s
							}) || pa.e,
							n = Object(ha.B)(e, {
								subredditName: t
							});
						if (n) return {
							type: An.Community,
							model: n
						}
					}
					return "rpan" === a && Object(ba.a)(e) ? {
						type: An.PublicAccessNetwork
					} : {
						type: An.Unknown
					}
				}),
				va = (s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				Ca = s.n(va);

			function Oa() {
				return (Oa = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function ya(e) {
				const t = e.icon,
					s = e.text,
					n = {
						id: e.id,
						role: "menuitem",
						children: u.a.createElement(u.a.Fragment, null, u.a.createElement(t, {
							className: Ca.a.icon
						}), u.a.createElement(s, {
							className: Ca.a.text
						})),
						className: Object(g.a)(Ca.a.item, e.className, {
							[Ca.a.mFocused]: !!e.isFocused,
							[Ca.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return n["aria-label"] = e.to || e.label, e.to ? e.externalLink ? u.a.createElement("a", Oa({}, n, {
					href: e.to,
					target: "_blank"
				})) : u.a.createElement(Dn.a, Oa({}, n, {
					to: e.to
				})) : u.a.createElement("button", n)
			}
			var xa = s("./src/reddit/helpers/overlay/index.ts"),
				Pa = s("./src/reddit/routes/modListing/index.ts"),
				Ea = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ja = s("./src/reddit/selectors/experiments/utils.ts");
			const Sa = Object(h.a)(e => Object(Ea.c)(e, {
					experimentName: Os.yb,
					experimentEligibilitySelector: wa
				}), ja.a),
				wa = e => Object(re.H)(e) || Object(re.I)(e),
				_a = Object(h.a)(Sa, e => e === Os.Ab.Redesign);
			var ka = s("./src/reddit/selectors/multireddit.ts"),
				Ma = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				Ia = s("./src/lib/LinkedListMap/index.ts");
			const Na = Object(h.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(ka.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(ka.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				isUserEnrolledInOldModmail: ha.p,
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched,
				trendingSubreddits: e => e.subreddits.trending.map(t => e.subreddits.models[t]).filter(Boolean)
			});
			var Ta;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Ta || (Ta = {}));
			const Ra = [e => ({
					id: An.Employee,
					type: Ta.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(ta.a, {
								className: Object(g.a)(t, la.a.itemIcon)
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
				La = [e => ({
					id: An.All,
					type: Ta.GenericLink,
					model: {
						url: "/r/all/",
						displayText: n.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(Yn.a, {
								className: Object(g.a)(t, la.a.itemIcon)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("All", null, {
								hk: "2M8nEy"
							}))
						}
					},
					telemetryNoun: "all"
				}), e => ({
					id: An.DailyCharts,
					type: Ta.GenericLink,
					model: {
						url: "/subreddits/leaderboard/",
						displayText: n.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(ea.a, {
								className: Object(g.a)(t, la.a.itemIcon)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Top Communities", null, {
								hk: "1KzP9v"
							}))
						}
					},
					telemetryNoun: "daily_charts"
				})],
				Aa = [e => ({
					id: "reddit-feeds",
					type: Ta.Header,
					model: {
						displayText: n.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), (e, t) => ({
					id: An.Home,
					type: Ta.GenericLink,
					model: {
						url: "/",
						displayText: n.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon(e) {
							let {
								className: s
							} = e;
							return u.a.createElement(ta.a, {
								className: Object(g.a)(s, la.a.itemIcon),
								isBadged: t && t.isBadged
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: An.Popular,
					type: Ta.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: n.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(ra.a, {
								className: Object(g.a)(t, la.a.itemIcon)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...La],
				Fa = [e => ({
					id: "reddit-feeds",
					type: Ta.Header,
					model: {
						displayText: n.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: An.Home,
					type: Ta.GenericLink,
					model: {
						url: "/",
						displayText: n.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(ra.a, {
								className: Object(g.a)(t, la.a.itemIcon)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...La],
				Da = [e => ({
					id: "reddit-other",
					type: Ta.Header,
					model: {
						displayText: n.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: An.Settings,
					type: Ta.GenericLink,
					model: {
						url: "/settings",
						displayText: n.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(Kn.a, {
								className: Object(g.a)(la.a.userIcon, t)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("User Settings", null, {
								hk: "36WFGd"
							}))
						}
					},
					telemetryNoun: "settings"
				}), e => ({
					id: An.Inbox,
					type: Ta.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: n.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(Kn.a, {
								className: Object(g.a)(la.a.userIcon, t)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Messages", null, {
								hk: "43DUrY"
							}))
						}
					},
					telemetryNoun: "mail"
				}), e => ({
					id: An.CreatePost,
					type: Ta.GenericLink,
					model: {
						url: "/submit",
						displayText: n.fbt._("Create Post", null, {
							hk: "dGck6"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(oa.a, {
								className: Object(g.a)(t, la.a.itemIcon)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Create Post", null, {
								hk: "dGck6"
							}))
						}
					},
					telemetryNoun: "create_post"
				})],
				Ga = [e => ({
					id: An.Coins,
					type: Ta.GenericLink,
					model: {
						url: "/coins",
						displayText: n.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(Jn.a, {
								className: Object(g.a)(t, la.a.itemCoin)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Coins", null, {
								hk: "ZFvDU"
							}))
						}
					},
					telemetryNoun: "coins"
				}), e => ({
					id: An.Premium,
					type: Ta.GenericLink,
					model: {
						url: "/premium",
						displayText: n.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(ia.a, {
								className: Object(g.a)(t, la.a.itemPremium)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Premium", null, {
								hk: "3i2C4T"
							}))
						}
					},
					telemetryNoun: "premium"
				})],
				Ua = [e => ({
					id: An.ModQueue,
					type: Ta.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: n.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return u.a.createElement(sa.a, {
								className: Object(g.a)(t, la.a.itemModQueue)
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Mod Queue", null, {
								hk: "12pTAg"
							}))
						}
					},
					telemetryNoun: "mod_queue"
				}), (e, t) => {
					const s = !!(null == t ? void 0 : t.isUserEnrolledInOldModmail),
						a = s ? "/message/moderator" : "https://mod.reddit.com/mail/all",
						r = s ? "modmail" : "modmail_beta";
					return {
						id: An.ModMail,
						type: Ta.GenericLink,
						model: {
							url: a,
							displayText: n.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon(e) {
								let {
									className: t
								} = e;
								return u.a.createElement($n.a, {
									className: Object(g.a)(t, la.a.itemModQueue)
								})
							},
							text(e) {
								let {
									className: t
								} = e;
								return u.a.createElement("span", {
									className: t
								}, n.fbt._("Modmail", null, {
									hk: "2QQ3dU"
								}))
							}
						},
						telemetryNoun: r
					}
				}];

			function Ba(e, t) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Ta.Header,
					model: {
						displayText: n.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Ta.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Ta.Header,
					model: {
						displayText: n.fbt._("profiles", null, {
							hk: "bmbRq"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Ta.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			var Ha = s("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				qa = s.n(Ha);

			function Wa(e) {
				return u.a.createElement("div", {
					className: Object(g.a)(qa.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var Va = s("./src/reddit/actions/subscription/index.ts"),
				Qa = s("./src/reddit/helpers/trackers/customFeeds.ts"),
				za = s("./src/reddit/icons/svgs/Favorite/index.tsx"),
				Za = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				Ka = s.n(Za);

			function Ya() {
				return (Ya = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Xa = Object(h.c)({
					currentUser: re.i,
					hideNSFWPref: re.A,
					isLoggedIn: re.I
				}),
				Ja = Object(m.b)(Xa, (e, t) => ({
					toggleFavorite: s => {
						switch (s.stopPropagation(), s.preventDefault(), t.type) {
							case Ta.Subreddit:
								e(Object(Va.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Ta.Profile:
								e(Object(Va.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Ta.Multi:
								e(Object(Va.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(Qa.f)(t.model.url)) : t.sendEvent(Object(Qa.c)(t.model.url))
						}
					}
				}));
			var $a = Object(U.c)(Ja((function(e) {
					const t = {
						className: Object(g.a)(Ka.a.item, e.className, {
							[Ka.a.mFocused]: !!e.isFocused
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
						case Ta.Subreddit:
							return u.a.createElement(Dn.a, Ya({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement(zn.b, {
								className: Ka.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), u.a.createElement("span", {
								className: Ka.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, u.a.createElement(za.a, {
								className: Object(g.a)(Ka.a.favorite, {
									[Ka.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Ta.SubredditAutocomplete:
							return u.a.createElement(Dn.a, Ya({}, t, {
								"aria-label": e.model.name,
								to: "/r/".concat(e.model.name, "/")
							}), u.a.createElement(zn.b, {
								className: Ka.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), u.a.createElement("span", {
								className: Ka.a.text
							}, e.model.name));
						case Ta.Multi:
							return u.a.createElement(Dn.a, Ya({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement("img", {
								src: e.model.icon,
								className: Ka.a.customFeedIcon
							}), u.a.createElement("span", {
								className: Ka.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, u.a.createElement(za.a, {
								className: Object(g.a)(Ka.a.favorite, {
									[Ka.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Ta.Profile:
							return u.a.createElement(Dn.a, Ya({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement(Zn.a, {
								className: Ka.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), u.a.createElement("span", {
								className: Ka.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, u.a.createElement(za.a, {
								className: Object(g.a)(Ka.a.favorite, {
									[Ka.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				er = s("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				tr = s.n(er);

			function sr(e) {
				return u.a.createElement("div", {
					className: e.className
				}, u.a.createElement("div", {
					className: tr.a.header
				}), u.a.createElement("div", {
					className: tr.a.item
				}), u.a.createElement("div", {
					className: tr.a.item
				}), u.a.createElement("div", {
					className: tr.a.item
				}), u.a.createElement("div", {
					className: tr.a.item
				}))
			}
			var nr = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				ar = s("./src/reddit/actions/multireddit/index.ts"),
				rr = s("./src/reddit/actions/subreddit.ts"),
				or = s("./src/reddit/constants/keycodes.ts"),
				ir = s("./src/reddit/helpers/correlationIdTracker.ts"),
				cr = s("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				dr = s.n(cr);

			function lr() {
				return (lr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function ur(e) {
				return e.id === An.ModMail || e.id === An.CreateCommunity
			}

			function mr(e) {
				const t = new Ia.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Ta.Header && e.type !== Ta.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const pr = Object(h.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const s = Na(e),
							a = new Ia.a("id");
						if (s.account) {
							const r = s.account;
							if (Aa.forEach(e => a.push(e(r))), r.isEmployee && Ra.forEach(e => a.push(e(r))), _a(e) && a.push({
									id: An.NotificationsInbox,
									type: Ta.GenericLink,
									model: {
										url: "/notifications",
										displayText: n.fbt._("Notifications", null, {
											hk: "2xenVO"
										}).toString(),
										icon: e => {
											let {
												className: t
											} = e;
											return u.a.createElement(aa.a, {
												className: Object(g.a)(t, la.a.itemIcon)
											})
										},
										text: e => {
											let {
												className: t
											} = e;
											return u.a.createElement("span", {
												className: t
											}, n.fbt._("Notifications", null, {
												hk: "2xenVO"
											}))
										}
									},
									telemetryNoun: "inbox"
								}), Object(ba.a)(e) && a.push({
									id: An.PublicAccessNetwork,
									type: Ta.GenericClickable,
									model: {
										onClick: () => {
											t(Object(xa.a)(q.c[q.b.Rpan]))
										},
										displayText: n.fbt._("Reddit Public Access Network", null, {
											hk: "3p4s8f"
										}).toString(),
										icon(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(ca.a, {
												className: Object(g.a)(t, la.a.itemPublicAccessNetwork)
											})
										},
										text(e) {
											let {
												className: t
											} = e;
											return u.a.createElement("span", {
												className: t
											}, n.fbt._("Reddit Public Access Network", null, {
												hk: "3p4s8f"
											}))
										}
									},
									telemetryNoun: "rpan"
								}), (s.favoriteSubreddits.length || s.favoriteProfiles.length || s.favoriteMultireddits.length) && (a.push({
									id: "header-favorites",
									type: Ta.Header,
									model: {
										displayText: n.fbt._("favorites", null, {
											hk: "4Gg0k2"
										}).toString()
									}
								}), s.favoriteSubreddits.forEach(e => a.push({
									id: "fav" + e.id,
									type: Ta.Subreddit,
									model: e,
									telemetryNoun: "community_favorite"
								})), s.favoriteProfiles.forEach(e => a.push({
									id: "fav" + e.id,
									type: Ta.Profile,
									model: e,
									telemetryNoun: "community_favorite"
								})), s.favoriteMultireddits.forEach(e => a.push({
									id: "fav" + e.url,
									type: Ta.Multi,
									model: e,
									telemetryNoun: "custom_feed"
								}))), s.multisPending ? a.push({
									id: "multis-pending",
									type: Ta.LoadingState,
									model: {
										displayText: ""
									}
								}) : s.multis.length > 0 && (a.push({
									id: "header-multis",
									type: Ta.Header,
									model: {
										displayText: n.fbt._("Custom feeds", null, {
											hk: "3K02MA"
										}).toString(),
										button(e) {
											let {
												className: s,
												sendClickEvent: n
											} = e;
											return u.a.createElement("button", {
												onClick: () => {
													t(Object(T.h)(W.a.MULTIREDDIT_CREATE)), n()
												},
												className: Object(g.a)(s, la.a.multiPlusButton)
											}, u.a.createElement(Ma.a, {
												className: la.a.multiPlusIcon
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), s.multis.forEach(e => a.push({
									id: e.url,
									type: Ta.Multi,
									model: e,
									telemetryNoun: "custom_feed"
								}))), s.moderatingSubredditsPending ? a.push({
									id: "moderatingSubreddits-pending",
									type: Ta.LoadingState,
									model: {
										displayText: ""
									}
								}) : s.moderatingSubreddits.length && (a.push({
									id: "header-moderating",
									type: Ta.Header,
									model: {
										displayText: n.fbt._("moderating subreddits", null, {
											hk: "2z4AZS"
										}).toString()
									}
								}), a.push({
									id: An.ModListing,
									type: Ta.GenericLink,
									model: {
										url: Pa.a,
										displayText: "r/Mod",
										icon(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(sa.a, {
												className: Object(g.a)(t, la.a.itemModQueue)
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
								}), s.moderatingSubreddits.forEach(e => a.push({
									id: "mod" + e.id,
									type: Ta.Subreddit,
									model: e,
									telemetryNoun: "community_moderate"
								}))), s.subscriptionsPending ? a.push({
									id: "subscriptions-pending",
									type: Ta.LoadingState,
									model: {
										displayText: ""
									}
								}) : Ba(a, s), Da.forEach(e => a.push(e(r))), Object(re.db)(e) && a.push({
									id: An.CreateCommunity,
									type: Ta.GenericLink,
									model: {
										url: "/subreddits/create",
										displayText: n.fbt._("Create Community", null, {
											hk: "41sjx"
										}).toString(),
										icon(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(oa.a, {
												className: Object(g.a)(t, la.a.itemIcon)
											})
										},
										text(e) {
											let {
												className: t
											} = e;
											return u.a.createElement("span", {
												className: t
											}, n.fbt._("Create Community", null, {
												hk: "41sjx"
											}))
										}
									},
									telemetryNoun: "create_community"
								}), Ga.forEach(e => a.push(e(r))), r.isMod) {
								const {
									isUserEnrolledInOldModmail: e
								} = s;
								Ua.forEach(t => a.push(t(r, {
									isUserEnrolledInOldModmail: e
								})))
							}
						} else s.subscriptions.length || Object(re.I)(e) ? Aa.forEach(e => a.push(e(null))) : Fa.forEach(e => a.push(e(null))), a.push({
							id: "reddit-other",
							type: Ta.Header,
							model: {
								displayText: n.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), Ga.forEach(e => a.push(e(null))), Ba(a, s);
						return a
					}
				}),
				br = e => ({
					onHomeClicked: () => e(Object(Gn.x)()),
					onGotoUrl: t => e(Object(b.b)(t)),
					onSubredditsRequested: () => {
						e(Object(Va.e)()), e(Object(rr.q)()), e(Object(ar.g)())
					},
					onActionDispatched: t => e(t)
				}),
				hr = (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class gr extends u.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							s = this.getList(t, this.props),
							n = mr(s),
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
						if (e.key === or.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === or.b.Tab && this.props.onClose && this.props.onClose(), e.key === or.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Ta.Header && e.type !== Ta.LoadingState && (this.fireTelemetryForListItem(e), e.type === Ta.GenericClickable ? e.model.onClick() : ur(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === or.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === or.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case An.Coins:
							case An.Premium:
								Object(ir.d)(ir.a.GoldPayment, !0), t = Object(ir.c)(ir.a.GoldPayment)
						}
						switch (e.type) {
							case Ta.Category:
							case Ta.GenericLink:
							case Ta.GenericClickable:
							case Ta.Multi:
							case Ta.Profile:
							case Ta.Subreddit:
								this.props.sendEvent(s => Object.assign(Object.assign(Object.assign({}, Object(Z.defaults)(s)), t ? {
									correlationId: t
								} : null), {
									customFeed: e.type === Ta.Multi ? Object(Z.customFeedByPath)(s, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Ta.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => Object.assign(Object.assign({}, Object(Z.defaults)(e)), {
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
						focusOrder: mr(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = u.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						s = this.getList(t, e),
						n = mr(s);
					this.setState({
						focusOrder: n,
						renderableList: s
					})
				}
				getList(e, t) {
					if (e) {
						const s = new Ia.a("id"),
							n = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Ta.Category:
								case Ta.GenericLink:
								case Ta.Multi:
								case Ta.Profile:
								case Ta.Subreddit:
									e.model.displayText.match(n) && s.push(e);
									break;
								case Ta.Header: {
									const t = s.last();
									t && t.type === Ta.Header && s.pop(), s.push(e);
									break
								}
								case Ta.LoadingState:
							}
						});
						const a = s.last();
						return a && a.type === Ta.Header && s.pop(), s
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
						"aria-label": t && t.model.displayText ? "".concat(t.model.displayText, " ").concat(n.fbt._("selected", null, {
							hk: "QqrSS"
						})) : ""
					}), u.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": n.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: dr.a.filter,
						id: "header-subreddit-filter",
						placeholder: n.fbt._("Filter", null, {
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === An.Home && this.props.onHomeClicked(), e.type === Ta.GenericClickable && e.model.onClick()
							}
						};
						switch (e.type) {
							case Ta.GenericClickable:
								return u.a.createElement(ya, lr({}, s, {
									className: dr.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Ta.Category:
							case Ta.GenericLink:
								return u.a.createElement(ya, lr({}, s, {
									externalLink: ur(e),
									className: dr.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Ta.Header: {
								const s = e.model.button;
								return u.a.createElement(Wa, {
									className: dr.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								}, e.model.displayText, s && u.a.createElement(s, {
									className: dr.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Ta.LoadingState:
								return u.a.createElement(sr, {
									className: dr.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								});
							case Ta.Multi:
								return u.a.createElement($a, lr({}, s, {
									className: dr.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Ta.Multi
								}));
							case Ta.Profile:
								return u.a.createElement($a, lr({}, s, {
									className: dr.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Ta.Profile
								}));
							case Ta.Subreddit:
								return u.a.createElement($a, lr({}, s, {
									className: dr.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Ta.Subreddit
								}))
						}
					}))
				}
			}
			const fr = Object(m.b)(pr, br, hr)(Object(U.c)(gr)),
				vr = Object(m.b)(pr, br, hr)(Object(U.c)(Object(nr.b)(gr))),
				Cr = Object(ys.t)({
					isCommentsPage: ys.w,
					pageLayer: e => e
				}),
				Or = Object(h.c)({
					currentPage: fa,
					hideNSFWPref: re.A,
					isDropdownOpen: qn.a,
					isLoggedIn: re.I,
					isOverlayOpen: ds.i,
					isPinnedSubscriptionsMenuDisabled: Wn.a,
					isSubscriptionsPinned: Wn.b
				});
			class yr extends u.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(Un.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => Object.assign(Object.assign({}, Object(Z.defaults)(e)), {
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
						hideNSFWPref: s,
						isCommentsPage: a,
						isLoggedIn: r,
						isOverlayOpen: o
					} = this.props, i = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, c = o || !r && a;
					return u.a.createElement("div", {
						"aria-label": n.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "2PXR4j"
						}),
						className: Object(g.a)(la.a.container, t, {
							[la.a.mOpen]: i,
							[la.a.mNotPinned]: !this.props.isSubscriptionsPinned,
							[la.a.mPinned]: this.props.isSubscriptionsPinned
						}),
						onClickCapture: this.stopPropagation,
						role: "navigation"
					}, u.a.createElement("button", {
						className: la.a.selector,
						onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
						onFocus: this.onButtonFocus,
						tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
					}, u.a.createElement("span", {
						className: la.a.containerText
					}, function(e) {
						switch (e.type) {
							case An.Acknowledgements:
								return ua(n.fbt._("Acknowledgements", null, {
									hk: "32JBVF"
								}).toString());
							case An.All:
								return ua(n.fbt._("All", null, {
									hk: "2gaHOy"
								}).toString());
							case An.Appeal:
								return ua(n.fbt._("Appeal", null, {
									hk: "2dMFkN"
								}).toString());
							case An.Coins:
								return ua(n.fbt._("Coins", null, {
									hk: "3ZpUbG"
								}).toString());
							case An.Community:
								return ua(e.model.displayText, !0);
							case An.CommunitySearch:
								return ua(n.fbt._("Subreddit Results", null, {
									hk: "19qRVH"
								}).toString());
							case An.CreateCommunity:
								return ua(n.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case An.CreatePost:
								return ua(n.fbt._("Create Post", null, {
									hk: "30V40V"
								}).toString());
							case An.DailyCharts:
								return ua(n.fbt._("Top Communities", null, {
									hk: "1sWIEu"
								}).toString());
							case An.GlobalSearch:
								return ua(n.fbt._("Search Results", null, {
									hk: "scJwR"
								}).toString());
							case An.Geotagging:
								return ua(n.fbt._("Help Out", null, {
									hk: "1RN9v2"
								}).toString());
							case An.Home:
								return ua(n.fbt._("Home", null, {
									hk: "amHQd"
								}).toString());
							case An.Inbox:
								return ua(n.fbt._("Messages", null, {
									hk: "25MBSp"
								}).toString());
							case An.ModListing:
								return ua("r/Mod");
							case An.ModMail:
								return ua(n.fbt._("Modmail", null, {
									hk: "of9AC"
								}).toString());
							case An.ModQueue:
								return ua(n.fbt._("Mod Queue", null, {
									hk: "3hdHhb"
								}).toString());
							case An.Multi:
								return ua(e.model.displayText, !0);
							case An.NotificationsInbox:
								return ua(n.fbt._("Notifications", null, {
									hk: "FiFRe"
								}).toString());
							case An.Popular:
								return ua(n.fbt._("Popular", null, {
									hk: "1rTNHl"
								}).toString());
							case An.Premium:
								return ua(n.fbt._("Premium", null, {
									hk: "x0xKv"
								}).toString());
							case An.PublicAccessNetwork:
								return ua(n.fbt._("Reddit Public Access Network", null, {
									hk: "3agn8V"
								}).toString());
							case An.Report:
								return ua(n.fbt._("Report", null, {
									hk: "4oVcnd"
								}).toString());
							case An.Settings:
								return ua(n.fbt._("User Settings", null, {
									hk: "hcLHW"
								}).toString());
							case An.SubredditCreation:
								return ua(n.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case An.Topic:
								return ua(e.model);
							case An.Unknown:
								return ua("");
							case An.UserDataRequest:
								return ua(n.fbt._("Request your Reddit data", null, {
									hk: "3LqHku"
								}).toString());
							case An.UserProfile:
								return ua(e.model.displayText, !0);
							case An.UserProfileName:
								return ua(e.name, !0);
							case An.ViewDraft:
								return ua(n.fbt._("View Draft", null, {
									hk: "3k2k9a"
								}).toString())
						}
					}(e)), function(e, t) {
						switch (e.type) {
							case An.Acknowledgements:
								return u.a.createElement(oa.a, {
									className: la.a.defaultIcon
								});
							case An.All:
								return u.a.createElement(Yn.a, {
									className: la.a.defaultIcon
								});
							case An.Appeal:
								return u.a.createElement(oa.a, {
									className: la.a.defaultIcon
								});
							case An.Coins:
								return u.a.createElement(Jn.a, {
									className: la.a.coinIcon
								});
							case An.Community:
							case An.CommunitySearch: {
								const s = Object(Vn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return u.a.createElement(zn.b, {
									className: la.a.subredditIcon,
									iconUrl: s.url,
									primaryColor: s.color
								})
							}
							case An.CreateCommunity:
							case An.CreatePost:
								return u.a.createElement(oa.a, {
									className: la.a.defaultIcon
								});
							case An.DailyCharts:
								return u.a.createElement(ea.a, {
									className: la.a.defaultIcon
								});
							case An.GlobalSearch:
								return u.a.createElement(Xn.a, {
									className: la.a.defaultIcon
								});
							case An.Home:
								return u.a.createElement(ta.a, {
									className: la.a.defaultIcon
								});
							case An.Inbox:
							case An.Settings:
								return u.a.createElement(Kn.a, {
									className: Object(g.a)(la.a.icon, la.a.userIcon)
								});
							case An.ModListing:
								return u.a.createElement(sa.a, {
									className: la.a.modQueueIcon
								});
							case An.SubredditCreation:
								return u.a.createElement(oa.a, {
									className: la.a.defaultIcon
								});
							case An.ModMail:
								return u.a.createElement($n.a, {
									className: la.a.modQueueIcon
								});
							case An.ModQueue:
								return u.a.createElement(sa.a, {
									className: la.a.modQueueIcon
								});
							case An.Multi:
								return u.a.createElement("img", {
									src: e.model.icon,
									className: la.a.customFeedIcon
								});
							case An.NotificationsInbox:
								return u.a.createElement(aa.a, {
									className: la.a.defaultIcon
								});
							case An.Popular:
								return u.a.createElement(ra.a, {
									className: la.a.defaultIcon
								});
							case An.Premium:
								return u.a.createElement(ia.a, {
									className: la.a.premiumIcon
								});
							case An.PublicAccessNetwork:
								return u.a.createElement(ca.a, {
									className: la.a.publicAccessNetworkIcon
								});
							case An.Report:
								return u.a.createElement(oa.a, {
									className: la.a.defaultIcon
								});
							case An.Unknown:
								return u.a.createElement("div", {
									className: la.a.unknownIcon
								});
							case An.UserDataRequest:
								return u.a.createElement(oa.a, {
									className: la.a.defaultIcon
								});
							case An.UserProfile: {
								const s = Object(Vn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return u.a.createElement(Zn.a, {
									className: Object(g.a)(la.a.icon, la.a.userIcon),
									iconUrl: s.url,
									isNSFW: e.model.isNSFW,
									userName: e.model.name
								})
							}
							case An.UserProfileName:
								return u.a.createElement("div", {
									className: la.a.defaultIcon
								});
							case An.ViewDraft:
								return u.a.createElement(oa.a, {
									className: la.a.defaultIcon
								});
							case An.Geotagging:
							case An.Topic:
								return u.a.createElement(na.a, {
									className: la.a.defaultIcon
								})
						}
					}(e, s), !this.props.isSubscriptionsPinned && u.a.createElement(Bn.b, {
						className: la.a.caretDown
					})), i && !this.props.isPinnedSubscriptionsMenuDisabled && u.a.createElement(Hn.a, {
						className: Object(g.a)(la.a.pin, {
							[la.a.disabled]: c
						}),
						onClick: c ? void 0 : this.props.onPinSubscriptions
					}), i && u.a.createElement(vr, {
						canAutofocus: !0,
						className: la.a.listContainer,
						onClose: this.close
					}))
				}
			}
			var xr = Cr(Object(m.b)(Or, (e, t) => ({
					closeDropdown: () => e(Object(E.f)()),
					onLocationRefresh: (s, n) => e(Object(Gn.F)(s, t.pageLayer, n)),
					onPinSubscriptions: () => {
						e(Object(E.i)()), e(Object(E.f)())
					},
					openDropdown: () => e(Object(E.g)()),
					toggleDropdown: () => e(Object(E.h)())
				}), (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					onLocationClick: s => t.onLocationRefresh(s, e.isOverlayOpen)
				}))(Object(U.c)(yr))),
				Pr = s("./src/reddit/components/JumpToContent/index.tsx"),
				Er = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				jr = s("./node_modules/history/esm/history.js"),
				Sr = s("./node_modules/lodash/debounce.js"),
				wr = s.n(Sr),
				_r = s("./node_modules/uuid/v4.js"),
				kr = s.n(_r),
				Mr = s("./src/lib/makeSearchKey/index.ts"),
				Ir = s("./src/reddit/actions/post.ts"),
				Nr = s("./src/reddit/actions/search.ts"),
				Tr = s("./src/reddit/actions/search/trending.ts"),
				Rr = s("./src/reddit/actions/tooltip.ts"),
				Lr = s("./src/higherOrderComponents/asTooltip.tsx"),
				Ar = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Fr = s("./src/lib/search/index.ts"),
				Dr = s("./src/reddit/models/Search/index.ts");
			var Gr = (e, t, s, n, a, r) => {
					let o, i;
					if ("" !== n.searchQuery) {
						if (n.isTypeaheadSuggestion) o = "/".concat(n.isProfile ? n.searchQuery.replace("u/", "user/") : n.searchQuery);
						else {
							if (i = "".concat(V.p, "=").concat(Object(Fr.b)(n.rawQuery || n.searchQuery)), o = "/search/", n.section !== Dr.c.trending && n.section !== Dr.c.recent || a && a.source && (i += "&source=".concat(a.source)), e && r ? (o = "/r/".concat(e.name).concat(o), i = "".concat(i, "&").concat(V.s, "=1")) : !e && n.subredditOrProfileRestrictedName && (o = "/".concat(n.subredditOrProfileRestrictedName).concat(o), i = "".concat(i, "&").concat(V.s, "=1")), t) {
								const e = t.url.split("/")[2];
								o = "/user/".concat(e, "/m/").concat(t.name).concat(o), i = "".concat(i, "&").concat(V.s, "=1&").concat(V.j, "=1")
							}
							a && a.category && (i = "".concat(i, "&").concat(V.b, "=").concat(a.category))
						}
						return {
							url: o,
							qs: i
						}
					}
				},
				Ur = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				Br = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Hr = s("./src/reddit/icons/svgs/Search/index.tsx"),
				qr = s("./src/reddit/components/SearchDropdown/index.m.less"),
				Wr = s.n(qr);
			const Vr = Object(m.b)(() => Object(h.c)({
					currentPage: ds.b
				})),
				Qr = Object(ys.t)(),
				zr = Object(Lr.a)(Ar.b);
			class Zr extends u.a.Component {
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
						className: s,
						currentPage: a,
						focusedItem: r,
						onRemoveRecentSearch: o,
						pageLayer: i,
						recentSearch: c,
						toggleTooltip: d
					} = e, l = Gr(null, null, null, c, {
						source: Mr.a.Recent
					}), m = l && l.url, p = l && l.qs, b = this.generateFullSearchQuery(c);
					let h;
					r && (h = this.generateFullSearchQuery(r));
					const f = a ? Object(Z.getPageTypeFromCurrentPage)(a) : i ? Object(Z.getPageTypeFromCurrentPage)(i) : void 0;
					return u.a.createElement(Dn.a, {
						"aria-label": c.searchQuery,
						className: Object(g.a)(Wr.a.listItem, Ka.a.item, s, {
							[Wr.a.mFocused]: !(!r || r.section !== Dr.c.recent || h !== b)
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
						className: Wr.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(c.displayInfo.iconUrl, "')")
						}
					}) : u.a.createElement(Ur.a, {
						className: Wr.a.planetIcon
					}) : u.a.createElement(Hr.a, {
						className: Object(g.a)(Wr.a.listItemIcon, Ka.a.icon)
					}), u.a.createElement("span", {
						className: Ka.a.text
					}, b), u.a.createElement("div", {
						onMouseEnter: () => d(b),
						onMouseLeave: () => d(null),
						id: b
					}, u.a.createElement(Br.a, {
						className: Object(g.a)(Wr.a.listItemIcon, Wr.a.mHoverable, Ka.a.icon),
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), o(c)
						}
					}), u.a.createElement(zr, {
						className: Wr.a.fixedTextTooltip,
						isOpen: t === b,
						text: n.fbt._("Remove", null, {
							hk: "2P57BY"
						}),
						tooltipId: b,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					})))
				}
			}
			var Kr = Qr(Vr(Zr)),
				Yr = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Xr = s("./src/reddit/components/PostTitle/index.tsx"),
				Jr = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				$r = s("./src/reddit/constants/adEvents.ts"),
				eo = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				to = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				so = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				no = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const ao = Object(m.b)(() => Object(h.c)({
				currentPage: ds.b
			}), e => ({
				trackTrendingSearchClick: t => e((e, s) => so.E(s(), t, so.a.SEARCH_DROPDOWN))
			}));
			class ro extends u.a.Component {
				constructor() {
					super(...arguments), this.transformTrendingToRecentSearch = () => {
						const e = this.props.trendingItem,
							{
								post: t,
								subredditInfo: s,
								subredditOccurrences: n
							} = e;
						return no(e, ["post", "subredditInfo", "subredditOccurrences"])
					}, this.onTrendingItemClick = () => {
						const {
							props: e
						} = this;
						e.onUpdateSearchQuery(e.trendingItem.searchQuery);
						const t = this.transformTrendingToRecentSearch();
						if (e.onSetRecentSearch(t), Object(ir.d)(ir.a.SearchResults), e.trackTrendingSearchClick(e.trendingItem), this.isSponsored()) {
							const {
								post: e
							} = this.props.trendingItem;
							e && this.props.fireAdPixelsOfType(e, $r.a.Click)
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
						focusedItem: s,
						id: a,
						pageLayer: r,
						trendingItem: o
					} = this.props, i = this.isSponsored(), c = Gr(null, null, null, o, {
						source: i ? Mr.a.PromotedTrend : Mr.a.Trending
					}), d = c && c.url, l = c && c.qs, m = t ? Object(Z.getPageTypeFromCurrentPage)(t) : r ? Object(Z.getPageTypeFromCurrentPage)(r) : void 0, p = u.a.createElement(Dn.a, {
						id: a,
						"aria-label": o.searchQuery,
						className: Object(g.a)(Wr.a.listItem, Wr.a.mTrending, Ka.a.item, Ka.a.trending, e, {
							[Wr.a.mFocused]: !(!s || s.section !== Dr.c.trending || o.searchQuery !== s.searchQuery)
						}),
						onClick: this.onTrendingItemClick,
						key: "trending-".concat(o.searchQuery),
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
						className: Ka.a.trendingContent
					}, i && u.a.createElement("div", {
						className: Ka.a.promoted
					}, n.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), u.a.createElement("div", null, u.a.createElement(ra.a, {
						className: Object(g.a)(Wr.a.listItemIcon, Wr.a.mTrending, Ka.a.icon, Ka.a.trending)
					}), u.a.createElement("span", null, u.a.createElement(Xr.a, {
						className: Object(g.a)(Wr.a.listItemText, Wr.a.mTrending, Ka.a.text, Ka.a.trending),
						redditStyle: !0,
						size: Xr.b.Small
					}, o.searchQuery)), o.post && u.a.createElement("div", {
						className: Wr.a.postTitle
					}, o.post.title)), o.subredditInfo && u.a.createElement(eo.a, {
						className: Object(g.a)(Ka.a.relatedSubredditMetaData, Wr.a.listItemSubtext, {
							[Wr.a.mNoPostTitle]: !o.post
						}),
						iconUrl: o.subredditInfo.icon || void 0,
						suffix: n.fbt._("{subreddit name} and more", [n.fbt._param("subreddit name", o.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), o.post && Object(to.a)(o.post) && u.a.createElement(Yr.a, {
						post: o.post,
						removeLink: !0,
						usePreview: i
					}));
					return i ? u.a.createElement(Jr.a, {
						post: o.post
					}, p) : p
				}
			}
			var oo = Object(ys.t)()(ao(ro)),
				io = s("./src/reddit/components/Flair/index.tsx");
			class co extends u.a.Component {
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
						focusedItem: s,
						item: a
					} = e;
					return u.a.createElement(Dn.a, {
						"aria-label": a.searchQuery,
						className: Object(g.a)(Wr.a.listItem, Wr.a.mTypeahead, Ka.a.item, t, {
							[Wr.a.mFocused]: !(!s || s.searchQuery !== a.searchQuery)
						}),
						onClick: this.onTypeaheadSuggestionClick,
						key: a.searchQuery,
						role: "link",
						tabIndex: -1,
						to: "/".concat(a.isProfile ? a.searchQuery.replace("u/", "user/") : a.searchQuery)
					}, a.displayInfo && a.displayInfo.iconUrl ? u.a.createElement("div", {
						className: Wr.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(a.displayInfo.iconUrl, "')")
						}
					}) : u.a.createElement(Ur.a, {
						className: Wr.a.planetIcon
					}), u.a.createElement("div", null, a.displayInfo && a.displayInfo.subredditOrProfileName && u.a.createElement("div", {
						className: Object(g.a)(Wr.a.listItemText, Wr.a.mTypeahead, Ka.a.text)
					}, a.displayInfo.subredditOrProfileName), u.a.createElement("div", null, a.displayInfo && null != a.displayInfo.subscribers && u.a.createElement("div", {
						className: Object(g.a)(Wr.a.listItemSubtext, Ka.a.subText)
					}, n.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [n.fbt._plural(a.displayInfo.subscribers, "members count")], {
						hk: "1uMCes"
					})), a.displayInfo && a.displayInfo.isNSFW && u.a.createElement(io.b, {
						flair: {
							type: Zt.f.Nsfw,
							text: "nsfw"
						}
					}))))
				}
			}
			var lo = s("./src/reddit/constants/zIndex.ts"),
				uo = s("./src/reddit/controls/Dropdown/index.tsx");
			const {
				fbt: mo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), po = "SearchDropdown", bo = "SearchDropdownContent", ho = 5, go = Object(Lr.a)(uo.a);

			function fo(e) {
				const t = Object(m.c)(),
					{
						isFixed: s = !0,
						isOverlay: n = !0
					} = e,
					[a, r] = Object(l.useState)(null),
					o = function(e) {
						const [t, s] = Object(l.useState)(null), n = Object(l.useCallback)(() => {
							e && s(e.offsetWidth)
						}, [e]);
						return Object(l.useLayoutEffect)(n, [n]), Object(l.useEffect)(() => (window.addEventListener("resize", n), () => window.removeEventListener("resize", n)), [n]), t
					}(e.container),
					i = e.trendingItems.slice(0, ho),
					[c, d] = Object(l.useState)(new Array(ho).fill(!1)),
					p = () => {
						const e = new Array(i.length).fill(!1);
						return i.forEach((t, s) => {
							if (t.id) {
								const n = document.getElementById("".concat(po, "-").concat(t.id)),
									a = document.getElementById(bo);
								if (n && a) {
									const t = n.getBoundingClientRect(),
										r = a.getBoundingClientRect();
									t.top < r.bottom && t.bottom > r.top && (e[s] = !0)
								}
							}
						}), e
					};
				Object(l.useLayoutEffect)(() => {
					if (!e.isTrendingPending && e.isOpen && document.getElementById(bo)) {
						const e = p();
						d(e), i.forEach((s, n) => {
							e[n] && t((e, t) => so.F(t(), s, so.a.SEARCH_DROPDOWN))
						})
					}
				}, [e.isTrendingPending, e.isOpen, t]);
				const b = {
					width: o ? "".concat(o, "px") : "inherit",
					marginTop: "7px",
					overflow: "scroll"
				};
				e.isFixed && (b.zIndex = lo.h);
				const h = 0 === e.typeaheadSuggestions.length && !e.isTypeaheadPending,
					{
						typeaheadSuggestions: f
					} = e,
					v = Object(l.useMemo)(() => f.filter(e => e.isSubreddit), f);
				return u.a.createElement(go, {
					className: Object(g.a)(Wr.a.dropdown, la.a.listContainer),
					id: bo,
					isFixed: s,
					isOpen: e.isOpen,
					isOverlay: n,
					tooltipId: po,
					noFocus: !0,
					renderContentsHidden: !0,
					style: b,
					onDropdownMounted: () => {
						if (!e.isTrendingPending && i.length > 0) {
							const e = p();
							d(e), i.forEach((s, n) => {
								e[n] && t((e, t) => so.F(t(), s, so.a.SEARCH_DROPDOWN))
							})
						}
					},
					onScroll: () => {
						const e = p();
						i.forEach((s, n) => {
							c[n] || !e[n] || s.post && s.post.isSponsored || t((e, t) => so.F(t(), s, so.a.SEARCH_DROPDOWN))
						}), d(e)
					}
				}, e.typeaheadSuggestions.map((t, s) => u.a.createElement(co, {
					focusedItem: e.typeaheadSuggestions[e.focusedItemIndex],
					indexOfItem: s,
					subredditSuggestions: v,
					item: t,
					key: t.id,
					onClearSearchQuery: e.onClearSearchQuery,
					onSendSearchClickTypeaheadEvent: e.onSendSearchClickTypeaheadEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					fireAdPixelsOfType: e.fireAdPixelsOfType
				})), h && e.recentSearches.map((t, s) => u.a.createElement(Kr, {
					activeTooltipId: a,
					focusedItem: e.itemList[e.focusedItemIndex],
					indexOfItem: s,
					key: t.id,
					onClearSearchQuery: e.onClearSearchQuery,
					onRemoveRecentSearch: e.onRemoveRecentSearch,
					onSendSearchClickRecentEvent: e.onSendSearchClickRecentEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					recentSearch: t,
					toggleTooltip: r
				})), h && !e.isInUISimplificationI18NExperiment && e.isInTrendingExperiment && !e.isTrendingPending && e.trendingItems && u.a.createElement("div", {
					className: Object(g.a)(Ka.a.title, Wr.a.listItemTitle, {
						[Wr.a.mWithBorder]: !!e.recentSearches.length
					})
				}, mo._("Trending today", null, {
					hk: "3nAMpY"
				})), (e.isTypeaheadPending || !e.isInUISimplificationI18NExperiment && e.isTrendingPending) && u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
					className: Object(g.a)(Wr.a.loadingItem, tr.a.item)
				}), u.a.createElement("div", {
					className: Object(g.a)(Wr.a.loadingItem, tr.a.item)
				}), u.a.createElement("div", {
					className: Object(g.a)(Wr.a.loadingItem, tr.a.item)
				}), u.a.createElement("div", {
					className: Object(g.a)(Wr.a.loadingItem, tr.a.item)
				}), u.a.createElement("div", {
					className: Object(g.a)(Wr.a.loadingItem, tr.a.item)
				})), h && !e.isInUISimplificationI18NExperiment && e.isInTrendingExperiment && i.map(t => u.a.createElement(oo, {
					id: "".concat(po, "-").concat(t.id),
					key: t.id,
					focusedItem: e.itemList[e.focusedItemIndex],
					fireAdPixelsOfType: e.fireAdPixelsOfType,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					trendingItem: t
				})))
			}
			var vo = s("./src/reddit/contexts/ApiContext.tsx"),
				Co = s("./src/lib/makeApiRequest/index.ts"),
				Oo = s("./src/lib/omitHeaders/index.ts"),
				yo = s("./src/reddit/constants/headers.ts");
			const xo = (e, t) => Object(Co.a)(Object(Oo.a)(e, [yo.a]), {
				endpoint: "".concat(e.apiUrl, "/api/subreddit_autocomplete_v2.json"),
				method: f.db.GET,
				data: {
					query: t
				}
			});
			var Po = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				Eo = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const jo = e => {
				const t = [],
					s = {};
				return e.forEach(e => {
					const n = e.data,
						a = e.kind;
					a === f.yb.Subreddit ? (t.push(n.name), s[n.name] = Object(Eo.a)(n)) : a === f.yb.Account && (t.push(n.subreddit.name), s[n.subreddit.name] = Object(Po.a)(n.subreddit, n.name))
				}), {
					data: s,
					order: t
				}
			};
			var So = s("./src/reddit/helpers/isArrayEqual.ts"),
				wo = s("./src/reddit/helpers/trackers/searchResults.ts"),
				_o = s("./src/reddit/selectors/experiments/trending.ts");
			const ko = e => Object(re.F)(e) || Os.Dc.Treatment1 === Object(Ea.c)(e, {
				experimentEligibilitySelector: Ea.a,
				experimentName: Os.Ac
			});
			var Mo = s("./src/reddit/selectors/experiments/uiSimplification.ts"),
				Io = s("./src/reddit/selectors/searchResults.ts"),
				No = s("./src/reddit/selectors/tooltip.ts"),
				To = s("./src/reddit/selectors/trending.ts"),
				Ro = s("./src/reddit/controls/Search/index.m.less"),
				Lo = s.n(Ro);
			const Ao = Object(ys.t)({
					searchQuery: ys.V,
					pageLayer: e => e
				}),
				Fo = (e, t, s, n) => e(e => Object.assign(Object.assign({}, Object(wo.c)(e)), {
					source: "search",
					action: "click",
					noun: t,
					actionInfo: Z.actionInfo(e),
					search: Object.assign(Object.assign({}, Z.search(e, s, !0, n || void 0)), {
						structureType: Z.structureType(e, n),
						queryId: Object(ir.c)(ir.a.SearchResults)
					})
				})),
				Do = Object(m.b)(() => Object(h.c)({
					currentPage: ds.b,
					currentSubredditName: ds.e,
					currentUser: re.i,
					dropdownIsOpen: Object(No.b)(po),
					typeaheadIdsByQuery: Io.c,
					isInTrendingExperiment: _o.a,
					isInTypeaheadExperiment: ko,
					isInUISimplificationI18NExperiment: Mo.a,
					isLoggedIn: re.I,
					isSubredditSearchAllowed: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(ys.L)(s)
					},
					multireddit: ys.d,
					routeName: ds.r,
					subreddit: ys.q,
					trendingItems: To.a,
					typeaheadSuggestions: Io.i
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(Tr.b)()),
					fireAdPixelsOfType: (t, s) => e(Object(Ir.t)(t, s)),
					onChange: t => e(Object(Nr.j)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object(Nr.j)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(b.b)(t)),
					onSearch: (t, s, n, a) => {
						e(Object(b.b)(Object(jr.c)({
							pathname: t,
							search: s,
							state: {
								fromPage: n,
								[H.a.SearchOriginPage]: a
							}
						})))
					},
					onToggleDropdown: () => e(Object(Rr.h)({
						tooltipId: po
					})),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object(Nr.i)(t))
					}
				}), (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					onSearch: (n, a) => {
						n.preventDefault();
						const {
							currentUser: r = null
						} = e, o = Gr(e.subreddit, e.multireddit, r, a, s.searchOptions, e.isSubredditSearchAllowed);
						if (!o) return;
						const i = o.url,
							c = o.qs,
							d = {
								routeName: e.routeName,
								subredditName: e.currentSubredditName
							},
							l = e.currentPage ? Z.getPageTypeFromCurrentPage(e.currentPage) : s.pageLayer ? Z.getPageTypeFromCurrentPage(s.pageLayer) : void 0;
						t.onSearch(i, c, d, l)
					},
					onFocusSearchBar: () => {
						Object(ir.c)(ir.a.SearchResults) || Object(ir.d)(ir.a.SearchResults);
						const e = s.searchOptions || Object(Mr.c)({
							q: s.searchQuery
						});
						Fo(s.sendEvent, Z.OriginElement.SearchBar, e, s.pageLayer ? s.pageLayer : void 0)
					}
				}));
			class Go extends u.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await xo(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = jo(e.body.data.children);
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
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(bs.J)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(bs.ib)(Object.assign(Object.assign({}, e), {
								section: Dr.c.recent
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
					}, this.onFetchTypeaheadSuggestions = wr()(() => {
						this.makeTypeaheadApiRequest()
					}, 250), this.onSearch = async e => {
						if (this.close(), this.state.searchQuery) {
							let t = Object.assign({}, Dr.a);
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(t = this.state.selectedItem).id || (t.id = kr()()), t.section === Dr.c.recent ? this.onSendSearchClickRecentEvent(this.state.searchQuery, t, this.state.focusedItemIndex) : t.section === Dr.c.typeahead ? this.onSendSearchClickTypeaheadEvent(this.state.searchQuery, t, this.state.focusedItemIndex, this.state.itemList.filter(e => e.isSubreddit)) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, Z.StructureType.Search, Z.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									s = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									n = !!this.props.subreddit && this.props.subreddit.isNSFW,
									a = Dr.b.text;
								t = {
									id: kr()(),
									searchQuery: this.state.searchQuery,
									type: a,
									section: Dr.c.recent,
									subredditOrProfileRestrictedName: s,
									displayInfo: {
										iconUrl: e,
										isNSFW: n
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
					}, this.onSendDropdownClickEvent = (e, t, s, n) => {
						const a = {
							displayQuery: e,
							rawQuery: t,
							structureType: s,
							searchQuery: this.props.searchQuery
						};
						this.props.sendEvent(Object(wo.s)(n, a))
					}, this.onSendSearchClickRecentEvent = (e, t, s) => {
						this.props.sendEvent(Object(wo.u)(e, t, s))
					}, this.onSendSearchClickTypeaheadEvent = (e, t, s, n) => {
						this.props.sendEvent(Object(wo.w)(e, t, s, n))
					}, this.onSendDropdownViewEvent = (e, t, s, n) => {
						const a = {
							displayQuery: s,
							rawQuery: n || s,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(wo.t)(e, a))
					}, this.onKeyDown = e => {
						if (e.key === or.b.Escape && this.close(), e.key === or.b.Tab && this.close(), e.key === or.b.ArrowDown) {
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
						if (e.key === or.b.ArrowUp) {
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
						if (!this.props.trendingItems.length && this.props.isInTrendingExperiment && this.makeTrendingApiRequest(), this.props.currentUser) {
							const e = Object(bs.y)(this.props.currentUser.id);
							e.length > 0 && (this.setState({
								recentSearches: this.props.isLoggedIn ? e : [],
								itemList: [...e, ...this.props.trendingItems]
							}), e.forEach(e => {
								this.onSendDropdownViewEvent(Z.SearchDropdownNouns.Recent, Z.StructureType.Recent, e.searchQuery)
							}))
						}
						this.props.onToggleDropdown()
					}, this.onFormSubmit = e => {
						e.preventDefault(), this.onSearch(e);
						const t = this.props.searchOptions || Object(Mr.c)({});
						t.q || (t.q = this.state.searchQuery), Fo(this.props.sendEvent, "full_search_button", t)
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
					const t = Object(So.a)(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						s = Object(So.a)(e.trendingItems, this.props.trendingItems);
					if (this.props.searchQuery !== e.searchQuery || !t || !s) {
						const s = this.props.typeaheadSuggestions.length ? this.props.typeaheadSuggestions : [...this.state.recentSearches, ...this.props.trendingItems];
						this.setState(() => {
							const t = {
								itemList: s
							};
							return this.props.searchQuery !== e.searchQuery && (t.searchQuery = this.props.searchQuery || ""), t
						}), !t && this.props.typeaheadSuggestions.length && this.props.typeaheadSuggestions.forEach(e => {
							this.onSendDropdownViewEvent(e.isProfile ? Z.SearchDropdownNouns.TypeaheadProfile : Z.SearchDropdownNouns.TypeaheadSubreddit, Z.StructureType.Search, e.searchQuery)
						})
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return u.a.createElement("div", {
						className: Object(g.a)(Lo.a.relativeWrapper, la.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: po,
						ref: this.setContainerRef
					}, u.a.createElement("label", {
						className: Lo.a.iconContainer,
						htmlFor: "header-search-bar"
					}, u.a.createElement(Hr.a, {
						className: Lo.a.icon
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
						className: Lo.a.input,
						onChange: this.onChange,
						onClick: this.toggleDropdownAndGetTrending,
						onKeyDown: this.onKeyDown,
						key: e.searchQuery,
						placeholder: n.fbt._("Search", null, {
							hk: "44xF6n"
						}),
						type: "search",
						value: this.state.searchQuery
					})), u.a.createElement(fo, {
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
			var Uo = Object(U.c)(Ao(Object(vo.b)(Do(Go)))),
				Bo = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Ho = s("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				qo = s("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Wo = s.n(qo);
			var Vo = e => {
					const {
						className: t
					} = e;
					return u.a.createElement("div", {
						className: Object(g.a)(Wo.a.Container, t)
					}, u.a.createElement("a", {
						"aria-label": n.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Wo.a.HomeLink,
						href: I.a.redditUrl
					}, u.a.createElement(Bo.a, {
						className: Wo.a.Snoo
					}), u.a.createElement(Ho.a, {
						className: Wo.a.Wordmark,
						color: "inherit"
					})))
				},
				Qo = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				zo = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Zo = s("./src/reddit/hooks/useTracking.ts");
			var Ko = e => {
					let {
						className: t
					} = e;
					return u.a.createElement("svg", {
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
						d: "M10.6,13.6c0,0.1,0,0.1,0.1,0.2l4.9,2.4c0.3,0.1,0.6,0.1,0.9,0l4.8-2.4c0.1,0,0.1-0.1,0.1-0.2s0-0.2-0.1-0.2 L16.5,11c-0.1-0.1-0.3-0.1-0.4-0.1c-0.2,0-0.3,0-0.4,0.1l-4.9,2.4C10.6,13.4,10.6,13.5,10.6,13.6z"
					}), u.a.createElement("g", null, u.a.createElement("path", {
						fill: "#1B2426",
						d: "M23.2,18.9c0,0.7,0.8,1.2,1.4,0.9l5.9-2.9c0.3-0.2,0.6-0.5,0.6-0.9v-5.5c0-0.7-0.8-1.2-1.4-0.9l-5.9,2.9 c-0.3,0.2-0.6,0.5-0.6,0.9V18.9z"
					})), u.a.createElement("path", {
						fill: "#F04923",
						d: "M16.3,1.5c-0.1,0-0.2-0.1-0.3-0.1s-0.2,0-0.3,0.1L3.4,7.7C3.2,7.8,3.1,8,3.1,8.2c0,0.2,0.1,0.4,0.3,0.5l5.5,2.7 c0.2,0.1,0.4,0.1,0.5,0l6.2-3.1c0.1-0.1,0.3-0.1,0.4-0.1s0.2,0,0.4,0.1l6.2,3.1c0.2,0.1,0.4,0.1,0.5,0l5.5-2.7 c0.2-0.1,0.3-0.3,0.3-0.5c0-0.2-0.1-0.4-0.3-0.5L16.3,1.5z"
					}))
				},
				Yo = s("./src/reddit/selectors/experiments/layer.ts"),
				Xo = s("./src/reddit/components/Header/QuickLinks/index.m.less"),
				Jo = s.n(Xo),
				$o = u.a.memo((function(e) {
					const t = Object(Zo.a)(),
						s = Object(m.c)(),
						a = Object(l.useCallback)(() => {
							t(e => Object.assign(Object.assign({}, Object(Z.defaults)(e)), {
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						r = Object(l.useCallback)(() => {
							t(e => Object.assign(Object.assign({}, Object(Z.defaults)(e)), {
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						o = Object(l.useCallback)(() => {
							s(Object(xa.a)(q.c[q.b.Rpan])), t(e => Object.assign(Object.assign({}, Object(Z.defaults)(e)), {
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [s, t]),
						i = Object(l.useCallback)(() => {
							t(e => Object.assign(Object.assign({}, Object(Z.defaults)(e)), {
								source: "nav",
								action: "click",
								noun: "layer"
							}))
						}, [t]),
						c = Object(m.d)(re.I),
						d = Object(m.d)(ba.a),
						p = Object(m.d)(Yo.b),
						b = Object(zo.a)(),
						h = Object(zo.a)(),
						f = Object(zo.a)(),
						v = Object(zo.a)();
					return u.a.createElement("div", {
						className: Object(g.a)(Jo.a.container, e.className)
					}, u.a.createElement("div", {
						className: Jo.a.row
					}, u.a.createElement(Dn.a, {
						className: Jo.a.icon,
						innerRef: b.target.ref,
						to: c ? q.c[q.b.Popular] : q.c[q.b.Home],
						onClick: a,
						onMouseEnter: b.show,
						onMouseLeave: b.hide
					}, u.a.createElement(ra.a, null)), u.a.createElement(Qo.a, {
						arrowProps: b.arrowProps,
						popperProps: b.popperProps,
						visible: b.visible
					}, n.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), p ? u.a.createElement(u.a.Fragment, null, u.a.createElement(Dn.a, {
						className: Jo.a.icon,
						innerRef: v.target.ref,
						to: q.c[q.b.Layer],
						onClick: i,
						onMouseEnter: v.show,
						onMouseLeave: v.hide
					}, u.a.createElement(Ko, null)), u.a.createElement(Qo.a, {
						arrowProps: v.arrowProps,
						popperProps: v.popperProps,
						visible: v.visible
					}, n.fbt._("Layer", null, {
						hk: "1oCWLY"
					}))) : u.a.createElement(u.a.Fragment, null, u.a.createElement(Dn.a, {
						className: Jo.a.icon,
						innerRef: h.target.ref,
						to: q.c[q.b.All],
						onClick: r,
						onMouseEnter: h.show,
						onMouseLeave: h.hide
					}, u.a.createElement(Yn.a, null)), u.a.createElement(Qo.a, {
						arrowProps: h.arrowProps,
						popperProps: h.popperProps,
						visible: h.visible
					}, n.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), d && u.a.createElement(u.a.Fragment, null, u.a.createElement(Dn.a, {
						className: Jo.a.icon,
						innerRef: f.target.ref,
						to: q.c[q.b.Rpan],
						onClick: o,
						onMouseEnter: f.show,
						onMouseLeave: f.hide
					}, u.a.createElement(ca.a, null)), u.a.createElement(Qo.a, {
						arrowProps: f.arrowProps,
						popperProps: f.popperProps,
						visible: f.visible
					}, n.fbt._("Reddit Public Access Network", null, {
						hk: "38uXOo"
					})))))
				})),
				ei = s("./src/reddit/actions/login.ts"),
				ti = s("./src/reddit/helpers/trackers/authControls.ts"),
				si = s("./src/lib/matchRoute/index.ts"),
				ni = s("./src/chat/helpers/dom.ts"),
				ai = s("./src/reddit/actions/changeUsername.ts"),
				ri = s("./src/reddit/actions/chat/toggle.ts"),
				oi = s("./src/reddit/actions/emailVerificationTooltip.ts"),
				ii = s("./src/reddit/actions/postCreation/general.ts"),
				ci = s("./src/reddit/actions/users.ts"),
				di = s("./src/reddit/components/Settings/modalIds.ts"),
				li = s("./src/reddit/components/BlockNavigation/index.tsx"),
				ui = s("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				mi = s("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var pi = Object(rt.a)({
					getComponent: () => Object(jt.a)(() => s.e("EmailVerificationModals").then(s.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				bi = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				hi = s("./src/reddit/helpers/trackers/emailVerification.ts"),
				gi = s("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				fi = s.n(gi);
			class vi extends u.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(hi.e)(hi.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(hi.c)(hi.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(hi.e)(hi.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					vi.shouldSendViewEvent && (vi.shouldSendViewEvent = !1, this.props.sendEvent(Object(hi.g)(hi.a)))
				}
				render() {
					return u.a.createElement("div", {
						className: fi.a.container
					}, u.a.createElement("div", {
						className: fi.a.topLine
					}), u.a.createElement("button", {
						className: fi.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, u.a.createElement(ee.a, {
						className: fi.a.closeIcon
					})), u.a.createElement("h5", {
						className: fi.a.title
					}, n.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), u.a.createElement("p", {
						className: fi.a.subtitle
					}, this.props.email), u.a.createElement("p", {
						className: fi.a.description
					}, n.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), u.a.createElement("div", {
						className: fi.a.buttonWrapper
					}, u.a.createElement(dt.l, {
						className: fi.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen
					}, n.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), u.a.createElement(dt.i, {
						className: Object(g.a)(fi.a.commonBtn, fi.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick
					}, n.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			vi.shouldSendViewEvent = !0;
			const Ci = Object(bi.a)(vi, [nr.a.Click, nr.a.Keydown, nr.a.Resize]);
			var Oi = Object(U.c)(Ci),
				yi = s("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				xi = s.n(yi);
			class Pi extends u.a.Component {
				render() {
					const {
						exposeIFrameElement: e
					} = this.props;
					return u.a.createElement(fe, {
						className: xi.a.IFrame,
						exposeIFrameElement: e,
						path: B.c.GoogleOneTap
					})
				}
			}
			var Ei = Pi,
				ji = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				Si = s("./src/reddit/helpers/trackers/goldPayment.ts");
			const wi = "gold_top_nav",
				_i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return Object.assign(Object.assign({}, Object(Si.h)(e, t)), {
						correlationId: Object(ir.d)(ir.a.GoldPayment, !1),
						profile: Z.profile(e),
						subreddit: Z.subreddit(e)
					})
				},
				ki = e => t => Object.assign({
					source: wi,
					action: "click",
					noun: e
				}, _i(t)),
				Mi = e => t => Object.assign({
					source: wi,
					action: "click",
					noun: "coins_package"
				}, _i(t, {
					packageId: e
				})),
				Ii = () => e => Object.assign({
					source: wi,
					action: "click",
					noun: "premium"
				}, _i(e)),
				Ni = () => e => Object.assign({
					source: wi,
					action: "view",
					noun: "dropdown"
				}, _i(e));
			var Ti = s("./src/reddit/components/CoinPurchaseDropdownHeader/index.m.less"),
				Ri = s.n(Ti),
				Li = s("./src/reddit/components/CoinPurchaseDropdownHeader/DefaultHeader/index.m.less"),
				Ai = s.n(Li);
			const {
				fbt: Fi
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Di = e => {
					const {
						className: t
					} = e;
					return u.a.createElement("div", {
						className: Object(g.a)(t, Ai.a.header)
					}, u.a.createElement("span", {
						className: Ai.a.headerText
					}, Fi._("Give Gold, Silver, Platinum, and more with Coins", null, {
						hk: "3MfKV4"
					})), u.a.createElement(Dn.a, {
						className: Ai.a.headerLink,
						to: "/coins"
					}, Fi._("What are Coins?", null, {
						hk: "DNBPx"
					})))
				},
				Gi = s("./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less"),
				Ui = s.n(Gi);
			var Bi = e => {
				const {
					className: t,
					salesConfig: s
				} = e, {
					dropdownHeaderText: n,
					dropdownHeaderBackgroundAsset: a
				} = s;
				return u.a.createElement("div", {
					className: Object(g.a)(t, Ui.a.header)
				}, a && u.a.createElement("img", {
					className: Ui.a.saleHeaderImage,
					src: a
				}), u.a.createElement("span", {
					className: Ui.a.headerText
				}, n))
			};
			const {
				fbt: Hi
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var qi = e => {
					const {
						activeSaleConfig: t
					} = e;
					return t ? u.a.createElement(Bi, {
						className: Ri.a.header,
						salesConfig: t
					}) : u.a.createElement(Di, {
						className: Ri.a.header
					})
				},
				Wi = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts")),
				Vi = s("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				Qi = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				zi = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				Zi = s("./src/reddit/selectors/gov.ts"),
				Ki = s("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				Yi = s.n(Ki);
			var Xi = e => {
					const {
						className: t,
						buttonSubtext: s,
						buttonSubtextCrossout: n,
						buttonText: a,
						goldStyle: r,
						onClick: o,
						primaryText: i,
						subtext: c,
						subtextCrossout: d
					} = e, l = r ? dt.f : dt.i;
					return u.a.createElement("div", {
						className: Object(g.a)(t, Yi.a.CompactCoinPurchaseListItem)
					}, u.a.createElement("div", {
						className: Yi.a.productSection
					}, u.a.createElement("span", {
						className: Yi.a.primaryText
					}, i), u.a.createElement("span", {
						className: Object(g.a)(Yi.a.subtext, {
							[Yi.a.crossout]: d
						})
					}, Array.isArray(c) ? c.map((e, t) => u.a.createElement("p", {
						key: t
					}, e)) : c)), u.a.createElement("div", {
						className: Yi.a.priceSection
					}, u.a.createElement(l, {
						className: Object(g.a)(Yi.a.button, {
							[Yi.a.goldStyle]: r
						}),
						redditStyle: !0,
						onClick: o
					}, a), u.a.createElement("span", {
						className: Object(g.a)(Yi.a.buttonSubtext, {
							[Yi.a.crossout]: n
						})
					}, s)))
				},
				Ji = s("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				$i = s.n(Ji);
			const ec = Object(h.c)({
					coinPackages: zi.b,
					communityPointsConversionEnabled: ps.d.spPointsCoinConversion,
					communityPointsName: (e, t) => {
						const s = Object(ys.q)(e, t);
						return Object(Zi.p)(e, {
							subredditId: null == s ? void 0 : s.id
						})
					},
					isPremiumSubscriber: re.r,
					premiumPackages: zi.e,
					purchaseCatalogError: zi.f,
					purchaseCatalogPending: zi.g
				}),
				tc = Object(m.b)(ec, e => ({
					onClickCoinPackage: (t, s) => e(Object(Wi.b)({
						correlationId: s,
						packageId: t.mobileId
					})),
					onClickConvert: () => e(Object(T.h)(W.a.CONVERT_TO_COINS)),
					onClickPremiumPackage: t => e(Object(Vi.d)({
						correlationId: t
					})),
					requestPurchaseCatalog: t => e(Object(ji.b)(t))
				}));
			class sc extends u.a.Component {
				constructor(e) {
					super(e), this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: s,
							sendEvent: n
						} = this.props;
						t && t(), n(Mi(e.mobileId)), s(e, this.correlationId)
					}, this.handleClickBuyPremium = () => {
						const {
							onClick: e,
							onClickPremiumPackage: t,
							sendEvent: s
						} = this.props;
						e && e(), s(Ii()), t(this.correlationId)
					}, this.correlationId = Object(ir.d)(ir.a.GoldPayment, !1), e.coinPackages.length || e.purchaseCatalogPending || e.requestPurchaseCatalog(this.correlationId)
				}
				getListItemData() {
					const {
						coinPackages: e,
						isPremiumSubscriber: t,
						premiumPackages: s,
						sorted: a
					} = this.props, r = e.map(e => {
						const {
							baselineCoins: t,
							baselinePennies: s,
							coins: a,
							pennies: r,
							bonusPct: o
						} = e, i = a.toLocaleString(), c = n.fbt._("{number of coins} Coins", [n.fbt._param("number of coins", i)], {
							hk: "1bO7gz"
						}), d = "$".concat(r / 100);
						let l, u;
						if (a !== t) {
							const e = t.toLocaleString();
							l = n.fbt._("{number of coins of non-sale package} coins", [n.fbt._param("number of coins of non-sale package", e)], {
								hk: "afkY9"
							})
						}
						return {
							buttonSubtext: u = r !== s ? "$".concat(s / 100) : o ? n.fbt._("{percent bonus}% Bonus", [n.fbt._param("percent bonus", o.toLocaleString())], {
								hk: "2zgjZ1"
							}) : void 0,
							buttonText: d,
							coinPackage: e,
							primaryText: c,
							subtext: l
						}
					});
					a && r.sort((e, t) => {
						return (e.coinPackage ? e.coinPackage.coins : 0) - (t.coinPackage ? t.coinPackage.coins : 0)
					});
					const o = s.length ? s[0] : void 0;
					if (t || !o) return r;
					const {
						pennies: i,
						periodicalCoins: c,
						signupBonusCoins: d
					} = o, l = d ? d.toLocaleString() : void 0, u = "$".concat((i / 100).toLocaleString()), m = c.toLocaleString(), p = {
						buttonSubtext: l ? n.fbt._("{number of bonus coins} bonus coins", [n.fbt._param("number of bonus coins", l)], {
							hk: "YgHAT"
						}) : void 0,
						buttonText: n.fbt._("{premium price}/mo", [n.fbt._param("premium price", u)], {
							hk: "4Cwbsj"
						}),
						isGoldStyle: !0,
						primaryText: n.fbt._("Premium", null, {
							hk: "45A9gK"
						}),
						subtext: [n.fbt._("{monthly coins} coins/mo", [n.fbt._param("monthly coins", m)], {
							hk: "2hVTon"
						}), n.fbt._("Ads free & more", null, {
							hk: "wO4Wc"
						})]
					};
					return r.concat(p)
				}
				render() {
					const {
						className: e,
						coinPackages: t,
						communityPointsConversionEnabled: s,
						communityPointsName: a,
						onClickConvert: r,
						purchaseCatalogError: o,
						purchaseCatalogPending: i
					} = this.props;
					return i ? u.a.createElement("div", {
						className: e
					}, u.a.createElement("div", {
						className: $i.a.loaderContainer
					}, u.a.createElement(Qi.a, {
						sizePx: 80
					}))) : o || !t.length ? u.a.createElement("div", {
						className: e
					}, u.a.createElement("div", {
						className: $i.a.errorContainer
					}, n.fbt._("Oops, something went wrong", null, {
						hk: "4EQRS8"
					}))) : u.a.createElement("div", {
						className: e
					}, this.getListItemData().map(e => {
						const {
							buttonSubtext: t,
							buttonText: s,
							coinPackage: n,
							isGoldStyle: a,
							primaryText: r,
							subtext: o
						} = e, i = n && n.coins !== n.baselineCoins, c = n && n.pennies !== n.baselinePennies;
						return u.a.createElement(Xi, {
							buttonSubtext: t,
							buttonSubtextCrossout: c,
							buttonText: s,
							goldStyle: a,
							key: r,
							onClick: n ? () => this.handleClickBuyCoins(n) : this.handleClickBuyPremium,
							primaryText: r,
							subtext: o,
							subtextCrossout: i
						})
					}), s && u.a.createElement(Xi, {
						buttonText: n.fbt._("Convert", null, {
							hk: "zVTTU"
						}),
						onClick: r,
						primaryText: n.fbt._("Convert {community points name}", [n.fbt._param("community points name", a)], {
							hk: "e7BeU"
						}),
						subtext: n.fbt._("into Coins", null, {
							hk: "1XFIa6"
						})
					}))
				}
			}
			var nc = Object(ys.t)()(tc(Object(U.c)(sc))),
				ac = s("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				rc = s.n(ac);
			const {
				fbt: oc
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ic = Object(Lr.a)(uo.a);
			class cc extends u.a.Component {
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
					e && t(Ni())
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.props.sendEvent(Ni())
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: a
					} = this.props;
					return u.a.createElement(ic, {
						className: Object(g.a)(t, rc.a.CoinPurchaseDropdown, {
							[rc.a.activeSale]: !!e
						}),
						isFixed: !0,
						isOpen: s,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: a
					}, u.a.createElement(qi, {
						activeSaleConfig: e
					}), u.a.createElement(nc, {
						className: rc.a.purchaseList,
						onClick: n,
						sorted: !0
					}))
				}
			}
			var dc = Object(U.c)(cc),
				lc = s("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			var uc = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				mc = s("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				pc = s.n(mc);
			const bc = "COIN_PURCHASE_DROPDOWN_ID",
				hc = Object(h.c)({
					activeSaleConfig: zi.a,
					activeTooltipId: No.a,
					coinPurchaseDropdownIsOpen: e => Object(No.b)(bc)(e),
					premiumPurchaseModalIsOpen: uc.m
				});
			class gc extends u.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							coinPurchaseDropdownIsOpen: s,
							sendEvent: n,
							toggleTooltip: a
						} = this.props;
						s || (Object(ir.d)(ir.a.GoldPayment, !0), Object(Ls.a)(), Object(lc.b)(), n(ki("get_coins_cta"))), a(t)
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
						closeTooltip: s,
						coinPurchaseDropdownIsOpen: a,
						premiumPurchaseModalIsOpen: r
					} = this.props, o = e ? e.ctaText ? e.ctaText : n.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : n.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					});
					return u.a.createElement("button", {
						className: Object(g.a)(t, pc.a.ctaContainer, {
							[pc.a.activeSale]: !!e
						}),
						id: bc,
						onClick: this.handleClick
					}, u.a.createElement("div", {
						className: Object(g.a)(pc.a.ctaContent, {
							[pc.a.activeSale]: !!e
						})
					}, u.a.createElement(Jn.a, {
						className: Object(g.a)(pc.a.icon, {
							[pc.a.activeSale]: !!e
						})
					}), u.a.createElement("span", {
						className: pc.a.text
					}, o)), u.a.createElement(dc, {
						activeSaleConfig: e,
						isOpen: a,
						onCloseTooltip: s,
						tooltipId: bc
					}), r && u.a.createElement(lc.a, null))
				}
			}
			var fc = Object(m.b)(hc, (e, t) => ({
					closeTooltip: () => e(Object(Rr.i)()),
					requestActiveSale: () => e(Object(ji.a)()),
					toggleTooltip: t => {
						e(t === bc ? Object(Rr.i)() : Object(Rr.f)({
							tooltipId: bc
						}))
					}
				}))(Object(U.c)(gc)),
				vc = s("./src/reddit/components/HeaderIconContainer/index.m.less"),
				Cc = s.n(vc);

			function Oc() {
				return (Oc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var yc = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const xc = M.a.button("Button", Cc.a),
				Pc = M.a.div("Container", Cc.a);

			function Ec(e) {
				const {
					children: t,
					isOpen: s
				} = e, n = yc(e, ["children", "isOpen"]);
				return u.a.createElement(xc, Oc({}, n, {
					id: e.id,
					onClick: e.onClick
				}), u.a.createElement(Pc, {
					className: Object(g.a)({
						[Cc.a.isOpen]: s
					})
				}, t))
			}
			var jc = s("./src/chat/helpers/unreadCount.ts"),
				Sc = s("./src/chat/models/Promo/index.ts"),
				wc = s("./src/reddit/components/BadgeCounter/index.tsx"),
				_c = s("./src/reddit/helpers/trackers/chat.ts"),
				kc = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				Mc = s("./src/reddit/selectors/chat.ts"),
				Ic = s("./src/reddit/components/HeaderUserActions/index.m.less"),
				Nc = s.n(Ic);
			const Tc = Object(h.c)({
				promos: Mc.b,
				unreadCount: Mc.d
			});
			class Rc extends l.Component {
				componentDidMount() {
					this.props.promos[Sc.a.SubredditChatFtux] && this.props.sendEvent(Object(_c.j)())
				}
				render() {
					const {
						promos: e,
						unreadCount: t
					} = this.props, {
						count: s,
						unread: n
					} = Object(jc.a)(t, e);
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(wc.a, {
						isActive: n,
						unreadCount: s
					}), u.a.createElement(kc.a, {
						className: Object(g.a)(Nc.a.chatIcon, {
							[Nc.a.isActive]: n
						})
					}))
				}
			}
			var Lc = Object(m.b)(Tc)(Object(U.c)(Rc)),
				Ac = s("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				Fc = s.n(Ac);
			const {
				fbt: Dc
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Gc = e => {
				const {
					onCloseFlyout: t
				} = e;
				return u.a.createElement("div", {
					className: Fc.a.container
				}, u.a.createElement("p", {
					className: Fc.a.title
				}, Dc._("New User Settings", null, {
					hk: "1Sziu9"
				})), u.a.createElement("h5", {
					className: Fc.a.subtitle
				}, Dc._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), u.a.createElement("p", {
					className: Fc.a.description
				}, Dc._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), u.a.createElement(dt.l, {
					className: Fc.a.dismissBtn,
					onClick: t
				}, Dc._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var Uc = e => u.a.createElement(u.a.Fragment, null, u.a.createElement(wc.a, {
				isActive: !!e.unreadCount,
				unreadCount: e.unreadCount
			}), u.a.createElement($n.a, {
				className: Object(g.a)(Nc.a.envelopeIcon, {
					[Nc.a.isUnread]: !!e.unreadCount
				})
			}));
			var Bc = e => u.a.createElement(u.a.Fragment, null, u.a.createElement(wc.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), u.a.createElement(aa.a, {
					className: Nc.a.notificationInboxIcon
				})),
				Hc = s("./src/lib/prettyPrintNumber/index.ts"),
				qc = s("./src/reddit/actions/alpha.ts"),
				Wc = s("./src/reddit/actions/modMode.ts"),
				Vc = s("./src/reddit/actions/profile/index.ts"),
				Qc = s("./src/reddit/constants/elementClassNames.ts"),
				zc = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Zc = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Kc = s("./src/reddit/helpers/trackers/modTools.ts");
			const Yc = e => ({
				screen: Z.screen(e),
				profile: Z.profile(e),
				subreddit: Z.subreddit(e)
			});
			var Xc = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				Jc = s("./src/reddit/icons/fonts/Premium/index.tsx"),
				$c = s("./src/reddit/icons/svgs/Help/index.tsx"),
				ed = s("./src/reddit/icons/svgs/KarmaGray/index.tsx"),
				td = s("./src/reddit/icons/svgs/Logout/index.tsx"),
				sd = s("./src/reddit/icons/svgs/ModMode/index.tsx"),
				nd = s("./src/reddit/icons/svgs/MyProfile/index.tsx"),
				ad = s("./src/reddit/icons/svgs/Night/index.tsx"),
				rd = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				od = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				id = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				cd = s("./src/reddit/icons/svgs/SnooNoEyes/index.tsx"),
				dd = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				ld = s("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				ud = s.n(ld);
			const md = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				pd = M.a.wrapped(uo.a, "Dropdown", ud.a),
				bd = Object(Lr.a)(pd),
				hd = e => u.a.createElement(Zc.a, {
					className: ud.a.button,
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, u.a.createElement("div", {
					className: ud.a.buttonText
				}, e.displayText), u.a.createElement(zc.a, {
					className: ud.a.toggleSwitch,
					"data-redditstyle": !0,
					on: e.isEnabled
				})),
				gd = Object(m.b)(() => Object(h.c)({
					isModModeEnabled: us.t,
					isOpen: Object(No.b)("USER_DROPDOWN_ID"),
					nightmode: re.T,
					url: ds.s
				}), (e, t) => ({
					toggleNightmode: t => e(Object(R.y)(t)),
					onOptIntoRedesign: () => e(Object(qc.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (nt.a.get("rseor3") && nt.a.remove("rseor3", {
							domain: I.a.cookieDomain
						}), e(Object(qc.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						t.user && e(Object(Vc.f)(Object(Kt.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(ei.h)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: s
						} = t;
						s && s.contentWindow && (console.log("postMessage: disableAutoSelect"), s.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Q())), e(Object(ci.p)())
					},
					toggleModMode: () => e(Object(Wc.b)())
				}));
			var fd = Object(ys.t)({
					pageLayer: e => e
				})(gd(Object(U.c)(e => {
					const {
						logoutUser: t,
						dispatchOpenLoginModal: s,
						isModModeEnabled: a,
						nightmode: r,
						requestAwardKarma: o,
						toggleModMode: i,
						user: c
					} = e, d = c && c.id;
					Object(l.useEffect)(() => {
						o()
					}, [d]);
					const m = Object(Zc.b)(id.a, n.fbt._("User Settings", null, {
							hk: "46J4vT"
						}), !1),
						p = Object(Zc.b)($c.a, n.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}), !0),
						b = Object(Zc.b)(rd.a, n.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}), !0),
						h = Object(Zc.b)(td.a, n.fbt._("Log In / Sign Up", null, {
							hk: "4xbfvS"
						})),
						f = Object(Zc.b)(td.a, n.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})),
						v = Object(Zc.b)(cd.a, n.fbt._("Opt In to New Reddit", null, {
							hk: "4jiTxA"
						}), !1),
						C = (e => {
							const t = e && e.coins || 0;
							return n.fbt._({
								"*": "{number of coins} coins",
								_1: "1 coin"
							}, [n.fbt._plural(t, "number of coins")], {
								hk: "qmnnm"
							})
						})(c),
						O = Object(Zc.b)(Jn.a, n.fbt._("Reddit Coins", null, {
							hk: "3jj6Cb"
						}), !1, C),
						y = Object(Zc.b)(ia.a, n.fbt._("Reddit Premium", null, {
							hk: "3FNqVS"
						}), !1);
					return u.a.createElement("div", {
						className: Object(g.a)(ud.a.container, Qc.e)
					}, u.a.createElement(dd.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(g.a)(e.className, ud.a.inlineButton, {
							[ud.a.dropdownOpen]: e.isOpen
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("user")
						}
					}, u.a.createElement("span", {
						className: ud.a.accountDisplayText
					}, (e => e ? u.a.createElement("span", {
						className: Object(g.a)(ud.a.accountWrapper, ud.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, e.accountIcon && u.a.createElement(Kn.a, {
						className: ud.a.imgIcon
					}), u.a.createElement("span", {
						className: ud.a.accountDetails
					}, u.a.createElement("span", {
						className: ud.a.username
					}, e.displayText, e.isGold && u.a.createElement(Jc.a, {
						className: ud.a.premiumFontIcon,
						title: n.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						})
					})), u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: ud.a.accountKarma
					}, u.a.createElement(ed.a, null), u.a.createElement("span", null, (e => {
						const t = e.totalKarma || e.postKarma + e.commentKarma,
							s = Object(Hc.b)(t);
						return n.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [n.fbt._plural(t, "karma count", s)], {
							hk: "ndlXe"
						})
					})(e))), !!e.coins && u.a.createElement("span", {
						className: ud.a.accountCoins
					}, u.a.createElement(Xc.a, {
						className: ud.a.coinFontIcon
					}), u.a.createElement("span", null, (e => Object(Hc.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(e)))))) : u.a.createElement("span", {
						className: Object(g.a)(ud.a.accountWrapper, ud.a.isLoggedOut)
					}, u.a.createElement(od.a, {
						className: ud.a.myProfileIcon
					})))(e.user), u.a.createElement(Bn.b, {
						className: ud.a.dropdownTriangle
					})), u.a.createElement(Er.a, null, n.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), u.a.createElement(bd, {
						isFixed: !0,
						isOpen: e.isOpen,
						tooltipId: "USER_DROPDOWN_ID"
					}, c && u.a.createElement(l.Fragment, null, u.a.createElement("h3", {
						className: ud.a.sectionHeader,
						role: "heading"
					}, n.fbt._("My Stuff", null, {
						hk: "47vhMb"
					})), (e => {
						const t = n.fbt._("My Profile", null, {
								hk: "4AoYxT"
							}),
							s = Object(Zc.b)(nd.a, t, !1);
						return u.a.createElement(s, {
							href: e.url
						})
					})(c), u.a.createElement(m, {
						href: "/settings"
					})), u.a.createElement("h3", {
						className: ud.a.sectionHeader,
						role: "heading"
					}, n.fbt._("View Options", null, {
						hk: "3bZPKB"
					})), c && c.isMod && u.a.createElement(hd, {
						displayText: n.fbt._("Mod Mode", null, {
							hk: "3Rb4sj"
						}),
						isEnabled: a,
						onClick: () => {
							e.sendEvent(Object(Kc.h)(!a)), i()
						}
					}, u.a.createElement(sd.a, {
						className: ud.a.modModeIcon
					})), u.a.createElement(hd, {
						displayText: "Night Mode",
						isEnabled: r,
						onClick: () => {
							e.sendEvent((e => t => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: e ? "night_mode_off" : "night_mode_on"
							}, Yc(t)))(r)), e.toggleNightmode(!r)
						}
					}, u.a.createElement(ad.a, {
						className: ud.a.nightIcon
					})), u.a.createElement("h3", {
						className: ud.a.sectionHeader,
						role: "heading"
					}, n.fbt._("More Stuff", null, {
						hk: "4Gad8T"
					})), u.a.createElement(l.Fragment, null, u.a.createElement(O, {
						href: "/coins",
						onClick: () => {
							Object(ir.d)(ir.a.GoldPayment, !0), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "coins",
								correlationId: Object(ir.c)(ir.a.GoldPayment)
							}, Yc(e)))())
						}
					}), u.a.createElement(y, {
						href: "/premium",
						onClick: () => {
							Object(ir.d)(ir.a.GoldPayment, !0), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "premium",
								correlationId: Object(ir.c)(ir.a.GoldPayment)
							}, Yc(e)))())
						}
					})), u.a.createElement(p, {
						href: "https://www.reddithelp.com"
					}), c && u.a.createElement(b, {
						href: "https://old.reddit.com" + e.url,
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: Z.screen(e),
								subreddit: Z.subreddit(e)
							}))
						}
					}), !md && c && u.a.createElement(v, {
						href: "",
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_opt_in",
								screen: Z.screen(e),
								subreddit: Z.subreddit(e)
							})), e.onOptIntoRedesign()
						}
					}), u.a.createElement("div", {
						className: ud.a.divider
					}), c ? u.a.createElement(f, {
						href: "#",
						onClick: e => {
							t(), e.preventDefault()
						}
					}) : u.a.createElement(h, {
						href: "#",
						onClick: t => {
							Object(P.a)(t) && (t.preventDefault(), t.stopPropagation(), s(), e.sendEvent(Object(ti.b)()))
						}
					})))
				}))),
				vd = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				Cd = s("./src/reddit/helpers/trackers/navigation.ts"),
				Od = s("./src/reddit/routes/index.ts");
			var yd = s("./src/reddit/selectors/experiments/googleOneTap.ts"),
				xd = s("./src/reddit/selectors/sso.ts"),
				Pd = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Ed = "change-username-tooltip-id",
				jd = "email-verification-tooltip-id",
				Sd = u.a.memo((function(e) {
					var {
						moderationDropdownOpen: t
					} = e, s = Pd(e, ["moderationDropdownOpen"]);
					const a = Object(zo.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: Nc.a.iconWrapper,
						onMouseEnter: a.show,
						onMouseLeave: a.hide,
						ref: a.target.ref
					}, u.a.createElement(Ec, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": n.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: vd.a,
						onClick: s.onOpenModerationDropdown,
						isOpen: t
					}, u.a.createElement(sa.a, {
						className: Object(g.a)(Nc.a.moderateIcon, {
							[Nc.a.isLit]: s.isModerateIconLit
						})
					})), u.a.createElement(Qo.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, n.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), u.a.createElement(vd.b, {
						className: Nc.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: s.unreadNotifications,
						sendEventWithName: s.sendEventWithName,
						showLegacyModmailIcon: s.showLegacyModmailIcon
					}))
				})),
				wd = u.a.memo((function(e) {
					const t = Object(zo.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: Nc.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, u.a.createElement("a", {
						className: Nc.a.link,
						href: "".concat(I.a.redditUrl, "/chat"),
						onClick: Object(ni.a)(e.onClickChat)
					}, u.a.createElement(Lc, null))), u.a.createElement(Qo.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, n.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				_d = u.a.memo((function(e) {
					let {
						onClickMail: t,
						unreadNotifications: s
					} = e;
					const a = Object(zo.a)();
					return u.a.createElement("span", {
						className: Nc.a.iconWrapper,
						onMouseEnter: a.show,
						onMouseLeave: a.hide,
						ref: a.target.ref
					}, u.a.createElement("a", {
						className: Nc.a.link,
						href: s && s.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: t
					}, u.a.createElement(Uc, {
						unreadCount: s && s.inboxCount || 0
					})), u.a.createElement(Qo.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, n.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				kd = u.a.memo((function(e) {
					const t = Object(zo.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: Nc.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, u.a.createElement("button", {
						"aria-label": n.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Nc.a.link
					}, u.a.createElement(Bc, {
						unreadCount: e.unreadCount
					}))), u.a.createElement(Qo.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, n.fbt._("Notification Inbox", null, {
						hk: "4ty6J0"
					})))
				})),
				Md = u.a.memo((function(e) {
					const t = Object(zo.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: Nc.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, u.a.createElement("button", {
						className: Nc.a.link,
						"aria-label": n.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, u.a.createElement(oa.a, {
						className: Nc.a.postIcon
					}))), u.a.createElement(Qo.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, n.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				Id = Object(ys.t)({
					pageLayer: e => e
				}),
				Nd = Object(h.c)({
					activeDropdownId: No.a,
					email: re.l,
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: yd.c,
					isInboxRedesignActive: _a,
					isModerator: Xt.h,
					isNameEditable: re.K,
					isResponsiveSettingsEnabled: Ps.a,
					shouldOpenEmailVerificationTooltip: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(ys.K)(s) && !!Object(re.l)(e) && !Object(re.y)(e) && Object(re.I)(e) && !Object(re.G)(e)
					},
					shouldShowChangeUsernameModals: xd.d,
					shouldShowLegacyModmailIcon: ha.p,
					unreadNotifications: re.gb
				}),
				Td = Object(m.b)(Nd, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(ai.d)()),
					closeEmailVerificationTooltip: () => e(Object(oi.b)()),
					onChatClick: () => e(Object(ri.e)()),
					onDismissCustomizeFlyout: () => e(Object(R.t)()),
					onOpenModerationDropdown: () => {
						e(Object(Rr.h)({
							tooltipId: vd.a
						})), e(Object(rr.q)())
					},
					onOpenUserDropdown: () => e(Object(Rr.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(T.h)(di.b))
					},
					openKeepUsernameModal: () => {
						e(Object(T.h)(di.f))
					},
					toggleChangeEmailModal: () => {
						e(Object(oi.b)()), e(Object(T.i)(di.a))
					},
					resendEmail: () => e(Object(ci.v)(hi.a)),
					requestCreatePost: () => {
						t.pageLayer && e(ii.o(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const s = Object(b.b)(t);
						e(Object(ai.f)(s))
					}
				}));
			class Rd extends u.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendEventWithName = e => this.props.sendEvent(Object(Cd.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(si.a)(e.pathname, Od.a),
							s = t && t.route && t.route.meta && t.route.meta.name;
						return !s || s !== f.Bb.POST_CREATION && s !== f.Bb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
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
						closeChangeUsernameTooltip: s,
						closeEmailVerificationTooltip: n,
						email: a,
						isChangeUsernameTooltipShowing: r,
						isCustomizeFlyoutShowing: o,
						isEmailVerificationTooltipShowing: i,
						isGoogleOneTapEnabled: c,
						isInboxRedesignActive: d,
						isModerator: m,
						isNameEditable: p,
						isResponsiveSettingsEnabled: b,
						onDismissCustomizeFlyout: h,
						onOpenUserDropdown: f,
						openChangeUsernameModal: v,
						openKeepUsernameModal: C,
						resendEmail: O,
						shouldOpenEmailVerificationTooltip: y,
						shouldShowChangeUsernameModals: x,
						shouldShowLegacyModmailIcon: P,
						toggleChangeEmailModal: E,
						unreadNotifications: j,
						user: S
					} = this.props, {
						googleOneTapIFrame: w
					} = this.state, _ = !(!j || !j.hasUnreadModmail && !j.hasUnreadOldModmail), k = S && Object(Kt.e)(S) || "", M = Object(g.a)({
						[Nc.a["m-responsive"]]: b
					});
					return u.a.createElement(zt.a, {
						id: jd,
						ref: e => this.container = e,
						className: t
					}, u.a.createElement(zt.a, {
						className: Nc.a.headerLinks,
						id: Ed
					}, m && u.a.createElement(Sd, {
						isModerateIconLit: _,
						moderationDropdownOpen: e === vd.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						showLegacyModmailIcon: !!P,
						unreadNotifications: j
					}), S && u.a.createElement(l.Fragment, null, u.a.createElement(wd, {
						onClickChat: this.onClickChat
					}), d ? u.a.createElement(kd, {
						unreadCount: 0
					}) : u.a.createElement(_d, {
						onClickMail: this.onClickMail,
						unreadNotifications: j
					}), u.a.createElement(Md, {
						onClickCreatePost: this.onClickCreatePost
					}), u.a.createElement("span", {
						className: Nc.a.iconWrapper
					}, u.a.createElement(fc, null)))), u.a.createElement(fd, {
						className: Nc.a.headerUserDropdown,
						googleOneTapIFrame: w,
						onClick: f,
						user: S,
						sendEventWithName: this.sendEventWithName
					}), c && u.a.createElement(Ei, {
						exposeIFrameElement: this.exposeIFrameElement
					}), o && u.a.createElement(Gc, {
						onCloseFlyout: h
					}), u.a.createElement(Oi, {
						closeTooltip: n,
						email: a,
						isOpen: y && i,
						resendEmail: O,
						toggleChangeEmailModal: E,
						tooltipId: jd
					}), u.a.createElement(pi, {
						email: a,
						shouldOpenTooltip: y
					}), p && !b && u.a.createElement(l.Fragment, null, u.a.createElement(mi.a, {
						closeTooltip: s,
						isOpen: r && !x,
						openChangeUsernameModal: v,
						openKeepUsernameModal: C,
						tooltipId: Ed,
						username: k
					}), x && u.a.createElement(ui.a, {
						isResponsiveSettingsEnabled: b,
						overlayClassName: M,
						username: k,
						withOverlay: !0
					}), u.a.createElement(li.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var Ld = Object(U.c)(Id(Td(Rd))),
				Ad = s("./src/reddit/selectors/meta.ts"),
				Fd = s("./src/reddit/components/Header/User/index.m.less"),
				Dd = s.n(Fd);
			const {
				fbt: Gd
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ud = Object(h.c)({
				account: e => e.user.account,
				origin: Ad.l
			}), Bd = u.a.memo(e => u.a.createElement("div", {
				className: Object(g.a)(e.className, Dd.a.row)
			}, !e.account && function(e) {
				const t = e.pageLayer,
					s = I.a.accountManagerOrigin,
					n = t ? t.url : "/",
					a = t && t.meta && t.meta.name === f.Bb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + n);
				return u.a.createElement("div", {
					className: Dd.a.loggedOutRow
				}, u.a.createElement(dt.m, {
					redditStyle: !0,
					className: Object(g.a)(Dd.a.login, Dd.a.button),
					href: "".concat(s, "/login/?dest=").concat(a),
					onClick: t => {
						Object(P.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenLoginModal(), e.sendEvent(Object(ti.a)("nav")))
					}
				}, Gd._("Log in", null, {
					hk: "odEG4"
				})), u.a.createElement(dt.j, {
					redditStyle: !0,
					className: Object(g.a)(Dd.a.separator, Dd.a.register, Dd.a.button),
					href: "".concat(s, "/register/?dest=").concat(a),
					onClick: t => {
						Object(P.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenRegisterModal(), e.sendEvent(Object(ti.c)("nav")))
					}
				}, Gd._("sign up", null, {
					hk: "47v4we"
				})))
			}(e), u.a.createElement(Ld, {
				className: Object(g.a)({
					[Dd.a.loggedOut]: !e.account
				}),
				user: e.account
			})));
			var Hd = Object(ys.t)()(Object(m.b)(Ud, e => ({
					onOpenLoginModal: () => {
						e(Object(T.k)({
							actionSource: T.a.HeaderLogin
						})), e(Object(ei.h)())
					},
					onOpenRegisterModal: () => {
						e(Object(T.k)({
							actionSource: T.a.HeaderSignup
						})), e(Object(ei.i)())
					}
				}))(Object(U.c)(Bd))),
				qd = s("./src/reddit/components/Header/index.m.less"),
				Wd = s.n(qd);

			function Vd() {
				return (Vd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Qd = M.a.header("HeaderDynamicStyles", Wd.a),
				zd = Object(h.c)({
					isLoggedIn: re.I,
					isNightmode: re.T,
					isResponsiveSettingsEnabled: Ps.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Zd = Object(ys.t)({
					categoryName: ys.b,
					pageLayer: e => e
				}),
				Kd = e => u.a.createElement("div", {
					className: Wd.a.left
				}, u.a.createElement(Er.a, null, n.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
					hk: "ToBNc"
				})), u.a.createElement(Pr.b, null), u.a.createElement(Dn.a, {
					"aria-label": n.fbt._("Home", null, {
						hk: "3PmGmU"
					}),
					className: Wd.a.centeredRow,
					to: "/",
					onClick: e.onReloadFrontpage
				}, u.a.createElement(Bo.a, {
					className: Wd.a.snoo
				}), u.a.createElement(Ho.a, {
					className: Wd.a.wordmark
				})), e.children),
				Yd = e => u.a.createElement("div", {
					className: Wd.a.right
				}, e.children, u.a.createElement(Hd, null)),
				Xd = e => u.a.createElement("div", {
					className: Wd.a.layout
				}, u.a.createElement(Kd, Vd({}, e, {
					onReloadFrontpage: e.onReloadFrontpage
				}), u.a.createElement(xr, null), u.a.createElement(Uo, {
					className: Wd.a.search
				})), u.a.createElement(Yd, null, u.a.createElement($o, {
					className: Wd.a.quickLinks
				}))),
				Jd = e => u.a.createElement("div", {
					className: Wd.a.layout
				}, u.a.createElement(Kd, Vd({}, e, {
					onReloadFrontpage: e.onReloadFrontpage
				}), u.a.createElement("div", {
					className: Wd.a.searchContainer
				}, u.a.createElement(Uo, {
					className: Wd.a.search
				}))), u.a.createElement(Yd, null));
			var $d = Zd(Object(m.b)(zd, e => ({
					onReloadFrontpage: () => e(Object(Gn.x)(!0))
				}))((function(e) {
					let t;
					return t = e.isLoggedIn ? Xd : Jd, u.a.createElement(Qd, {
						"data-redditstyle": !0,
						className: Object(g.a)(Wd.a.container, e.className, {
							[Wd.a.bladeIsOpen]: e.isBladeOpen
						})
					}, u.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isResponsiveSettingsEnabled && u.a.createElement(Vo, {
						className: Wd.a.MwebResponsiveHeader
					}))
				}))),
				el = s("./src/reddit/components/LightboxHeader/index.tsx"),
				tl = s("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				sl = s("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				nl = s.n(sl);
			const {
				fbt: al
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const rl = Object(m.b)(null, e => ({
				onUnpinSubscriptions: () => e(Object(E.j)())
			}));
			var ol = M.a.wrapped(rl((function(e) {
					return u.a.createElement("div", {
						"data-redditstyle": !0,
						className: e.className
					}, u.a.createElement("div", {
						className: nl.a.title
					}, u.a.createElement(Wa, {
						className: nl.a.listHeader
					}, al._("My Communities", null, {
						hk: "1CmPOc"
					})), u.a.createElement("div", {
						className: nl.a.unpin,
						onClick: e.onUnpinSubscriptions
					}, u.a.createElement(ee.a, {
						className: nl.a.icon
					}))), u.a.createElement(fr, null))
				})), "Component", nl.a),
				il = s("./src/reddit/components/Survey/index.tsx"),
				cl = s("./src/reddit/components/ThemeProvider/index.tsx");
			const dl = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				ll = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign(Object.assign({}, Z.actionInfo(t)), {
						reason: "primary"
					})
				}),
				ul = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign(Object.assign({}, Z.actionInfo(t)), {
						reason: "secondary"
					})
				});
			var ml = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				pl = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				bl = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				hl = s("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				gl = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				fl = s("./src/reddit/selectors/structuredStyles.ts"),
				vl = s("./src/reddit/constants/colors.ts"),
				Cl = s("./src/reddit/components/Toaster/PlainBread.m.less"),
				Ol = s.n(Cl);

			function yl() {
				return (yl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var xl = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const Pl = e => {
				const t = vl.a;
				switch (e.kind) {
					case se.b.Error:
					case se.b.AuthError:
					case se.b.SuccessEndBroadcast:
						return t.warning;
					case se.b.SuccessCommunity:
						return t.op;
					case se.b.SuccessCommunityGreen:
					case se.b.SuccessMod:
					case se.b.SuccessUnlockComment:
						return t.approved;
					case se.b.SuccessLockComment:
						return t.reported;
					case se.b.EuCookiePolicy:
					case se.b.UappBanner:
					case se.b.Undo:
					default:
						return t.op
				}
			};
			class El extends u.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const e = this.props,
						{
							kind: t,
							sendEvent: s
						} = e,
						n = xl(e, ["kind", "sendEvent"]);
					return u.a.createElement("div", n)
				}
			}
			const jl = M.a.wrapped(El, "PlainBread", Ol.a);
			var Sl = e => u.a.createElement(jl, yl({}, e, {
					style: Object.assign(Object.assign({}, e.style || {}), {
						"--Toaster-indicatorColor": Pl(e)
					})
				})),
				wl = s("./src/reddit/components/Toaster/StyledComponents.m.less"),
				_l = s.n(wl);
			const kl = M.a.span("Text", _l.a);
			var Ml = s("./src/reddit/components/Toaster/index.m.less"),
				Il = s.n(Ml);
			const {
				fbt: Nl
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Tl = M.a.wrapped(bl.a, "AuthErrorToastIcon", Il.a), Rl = M.a.wrapped(dt.i, "AuthErrorToastPrimaryButton", Il.a);
			class Ll extends u.a.Component {
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
					}, u.a.createElement(Sl, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign(Object.assign({}, e.style), {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, u.a.createElement(Tl, null), u.a.createElement(kl, null, Nl._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), u.a.createElement(Rl, {
						type: "submit"
					}, Nl._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Al = Ll,
				Fl = s("./src/lib/constants/euCookiePolicy.ts"),
				Dl = s("./src/lib/permanentCookieOptions.ts"),
				Gl = s("./src/reddit/controls/Link/index.tsx"),
				Ul = s("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Bl = s.n(Ul);
			const {
				fbt: Hl
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ql = M.a.div("Icon", Bl.a), Wl = () => u.a.createElement(ql, {
				style: {
					backgroundImage: "url(".concat(I.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), Vl = M.a.wrapped(dt.i, "PrimaryButton", Bl.a), Ql = M.a.wrapped(Sl, "Bread", Bl.a);
			class zl extends u.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), nt.a.set(ms.b, Fl.c.toString(), Object(Dl.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return u.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, u.a.createElement(Ql, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign(Object.assign({}, e.style), {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, u.a.createElement(Wl, null), u.a.createElement(kl, null, Hl._("Cookies help us deliver our Services. By using our Services or clicking I agree, you agree to our use of cookies.", null, {
						hk: "31CdDx"
					}), " ", u.a.createElement(Gl.a, {
						href: "https://redditinc.com/policies/cookies",
						target: "_blank"
					}, Hl._("Learn More", null, {
						hk: "MNKD5"
					})), "."), u.a.createElement(Vl, {
						type: "submit"
					}, Hl._("I Agree", null, {
						hk: "33M4qf"
					}))))
				}
			}
			var Zl, Kl = zl;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Zl || (Zl = {}));
			var Yl = s("./src/reddit/controls/Typography/index.tsx"),
				Xl = s("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Jl = s.n(Xl);

			function $l() {
				return ($l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const eu = M.a.div("Container", Jl.a),
				tu = M.a.img("SideImage", Jl.a),
				su = M.a.div("Main", Jl.a),
				nu = M.a.div("SubTitle", Jl.a),
				au = Yl.a,
				ru = M.a.wrapped(dt.j, "PrimaryLinkButton", Jl.a),
				ou = M.a.wrapped(ee.a, "CloseIcon", Jl.a);
			class iu extends u.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(ll(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(dl(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: s,
						style: a,
						subTitle: r,
						title: o
					} = this.props;
					return u.a.createElement(eu, {
						key: t,
						style: Object.assign(Object.assign({}, a), {
							transform: "\n            translateY(".concat(a.y, "px)\n            scale(").concat(a.x, ", ").concat(a.x, ")\n          ")
						})
					}, u.a.createElement(ou, {
						onClick: this.props.onClose
					}), u.a.createElement(tu, {
						srcSet: s
					}), u.a.createElement(su, null, u.a.createElement(nu, null, r), u.a.createElement(Yl.b, null, o), u.a.createElement(au, null, e), u.a.createElement(ru, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, n.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const cu = Object(m.b)(null, e => ({
					onSignup: () => e(Object(ei.i)())
				}))(Object(U.c)(iu)),
				du = "".concat(lu("subscribe-cap.png"), " 1x,\n  ").concat(lu("subscribe-cap@2x.png"), " 2x,");

			function lu(e) {
				return "".concat(I.a.assetPath, "/img/banner/").concat(e)
			}
			var uu = s("./node_modules/@reddit/onetrust-integration/dist/esm/index.js");
			const mu = 3,
				pu = e => "".concat(e, ":").concat(152721e4);
			var bu = s("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				hu = s.n(bu);
			const {
				fbt: gu
			} = s("./node_modules/fbt/lib/FbtPublic.js"), fu = M.a.div("Icon", hu.a), vu = () => u.a.createElement(fu, {
				style: {
					backgroundImage: "url(".concat(I.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), Cu = M.a.wrapped(dt.i, "PrimaryButton", hu.a), Ou = M.a.wrapped(Sl, "Bread", hu.a);
			class yu extends u.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Object(uu.b)(ms.i, pu(mu), Object(Dl.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return u.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, u.a.createElement(Ou, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign(Object.assign({}, e.style), {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, u.a.createElement(vu, null), u.a.createElement(kl, null, gu._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [gu._param("=User Agreement", u.a.createElement(Gl.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, gu._("User Agreement", null, {
						hk: "XS57W"
					}))), gu._param("=Privacy Policy", u.a.createElement(Gl.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, gu._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), u.a.createElement(Cu, {
						type: "submit"
					}, gu._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var xu = yu;

			function Pu() {
				return (Pu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Eu = [],
				ju = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Su = {
					opacity: .5,
					x: .5,
					y: 50
				},
				wu = {
					opacity: Object(k.spring)(0),
					x: Object(k.spring)(.6),
					y: Object(k.spring)(80, ju)
				},
				_u = M.a.wrapped(bl.a, "SnooFacepalm", Il.a),
				ku = M.a.wrapped(hl.a, "SnooHappy", Il.a),
				Mu = M.a.wrapped(zn.b, "SubredditIcon", Il.a),
				Iu = M.a.img("CustomIcon", Il.a),
				Nu = M.a.div("Container", Il.a),
				Tu = M.a.wrapped(ee.a, "Close", Il.a),
				Ru = M.a.wrapped(ml.a, "LockIcon", Il.a),
				Lu = M.a.wrapped(gl.a, "UnlockIcon", Il.a),
				Au = M.a.wrapped(pl.a, "RemoveIcon", Il.a),
				Fu = e => u.a.createElement(u.a.Fragment, null, u.a.createElement(Tu, Pu({
					className: "CloseIcon"
				}, e))),
				Du = M.a.wrapped(Sl, "Bread", Il.a),
				Gu = Object(h.c)({
					subredditIcon: fl.c,
					toastSlices: e => e.toaster
				}),
				Uu = Object(m.b)(Gu, e => ({
					dismissToast: t => () => e(Object(G.f)(t)),
					onButtonClick: (t, s) => () => {
						e(t), e(Object(G.f)(s))
					}
				}));
			class Bu extends u.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Hu(e, this.props.toastSlices), this.getWillEnterStyles = () => Su, this.getWillLeaveStyles = () => wu
				}
				render() {
					return this.props.toastSlices.length ? u.a.createElement(k.TransitionMotion, {
						defaultStyles: Eu,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => u.a.createElement(Nu, null, e.map(e => {
						const t = e.data,
							s = Object.assign(Object.assign({}, e.style), {
								transform: "\n                  translateY(".concat(e.style.y, "px)\n                  scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n                ")
							});
						if (t.kind === se.b.Custom && void 0 !== t.customToastType) {
							const n = Wu[t.customToastType];
							return u.a.createElement(n, {
								key: e.key,
								toast: t,
								style: s,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === se.b.UappBanner) return u.a.createElement(xu, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === se.b.EuCookiePolicy) return u.a.createElement(Kl, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === se.b.AuthError) return u.a.createElement(Al, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						const n = t.kind === se.b.Modal ? dt.i : dt.o,
							a = t.kind === se.b.Modal ? dt.l : dt.o;
						return u.a.createElement(Du, {
							className: t.kind === se.b.Modal ? Il.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(dl(t.name)) : void 0,
							style: s
						}, u.a.createElement("div", {
							className: Il.a.ContentWrapper
						}, qu(t, this.props.subredditIcon), t.kind === se.b.SuccessLockComment && u.a.createElement(Ru, null), t.kind === se.b.SuccessUnlockComment && u.a.createElement(Lu, null), u.a.createElement(kl, null, t.text)), u.a.createElement("div", {
							className: Il.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && u.a.createElement(n, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(ll(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && u.a.createElement(a, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(ul(t.name))
							}
						}, t.secondButtonText)), u.a.createElement(Fu, {
							onClick: this.props.dismissToast(t.id)
						}))
					}))) : null
				}
			}
			const Hu = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(k.spring)(1),
							x: Object(k.spring)(1, ju),
							y: Object(k.spring)(0, ju)
						}
					}))
				},
				qu = (e, t) => {
					if (e.customIconAsset) return u.a.createElement(Iu, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case se.b.Error:
							return u.a.createElement(_u, null);
						case se.b.SuccessEndBroadcast:
							return u.a.createElement(Au, null);
						case se.b.SuccessAward:
						case se.b.SuccessCommunity:
						case se.b.SuccessCommunityGreen:
							return u.a.createElement(ku, null);
						case se.b.SuccessMod:
							return u.a.createElement(Mu, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				Wu = {
					[se.a.subscribeCap]: e => u.a.createElement(cu, $l({
						name: Zl.LoggedOutMaxSubscriptions,
						sideImage: du,
						title: n.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: n.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Vu = Uu(Object(U.c)(Bu)),
				Qu = s("./src/reddit/featureFlags/profileCollections.ts");
			const zu = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				Zu = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				});
			var Ku = s("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				Yu = s.n(Ku);
			var Xu = M.a.div("Wrapper", Yu.a),
				Ju = s("./src/reddit/components/AlertBanner/index.m.less"),
				$u = s.n(Ju);
			const {
				fbt: em
			} = s("./node_modules/fbt/lib/FbtPublic.js"), tm = () => u.a.createElement(Xu, {
				className: Object(g.a)($u.a.wrapper, $u.a.suspended)
			}, u.a.createElement("span", null, em._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), u.a.createElement("a", {
				className: $u.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, em._("Learn more", null, {
				hk: "1OTc8q"
			}))), sm = () => u.a.createElement(Xu, {
				className: Object(g.a)($u.a.wrapper, $u.a.fpr)
			}, u.a.createElement("span", null, em._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), u.a.createElement("a", {
				className: $u.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, em._("Learn more", null, {
				hk: "1OTc8q"
			}))), nm = e => {
				let {
					updateLink: t,
					onClickOldReddit: s
				} = e;
				return u.a.createElement(Xu, {
					className: Object(g.a)($u.a.wrapper, $u.a.deprecated)
				}, u.a.createElement("span", null, em._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [em._param("update your browser", u.a.createElement(am, {
					link: t
				}, em._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), u.a.createElement("span", null, em._("If you do not update your browser, we suggest you visit {old reddit} .", [em._param("old reddit", u.a.createElement("a", {
					className: $u.a.underlineLink,
					href: I.a.oldRedditUrl,
					onClick: s
				}, em._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, am = e => {
				let {
					children: t,
					link: s
				} = e;
				return null !== s ? u.a.createElement("a", {
					className: $u.a.underlineLink,
					href: s
				}, t) : u.a.createElement("span", null, t)
			};
			class rm extends u.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Zu())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(zu())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: s
					} = this.props;
					return e && e.isDeprecated ? u.a.createElement(nm, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? u.a.createElement(sm, null) : s ? u.a.createElement(tm, null) : null
				}
			}
			var om = Object(U.c)(rm),
				im = s("./src/reddit/components/AlertBanner/heights.ts"),
				cm = s("./src/reddit/components/PopupPortal/index.tsx"),
				dm = s("./src/reddit/constants/componentSizes.ts"),
				lm = s("./src/reddit/constants/elementIds.ts"),
				um = s("./src/reddit/constants/posts.ts"),
				mm = s("./src/reddit/contexts/InsideOverlay.tsx"),
				pm = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				bm = s("./src/reddit/helpers/postCollection.ts"),
				hm = s("./src/reddit/models/Theme/index.ts"),
				gm = s("./src/reddit/selectors/experiments/survey.ts"),
				fm = s("./src/reddit/selectors/notificationBanner.ts"),
				vm = s("./src/reddit/selectors/posts.ts"),
				Cm = s("./src/reddit/components/AppRouter/index.m.less"),
				Om = s.n(Cm);

			function ym() {
				return (ym = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var xm = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const Pm = e => {
					var {
						className: t,
						shouldDisplayPinnedSubscriptions: s
					} = e, n = xm(e, ["className", "shouldDisplayPinnedSubscriptions"]);
					return u.a.createElement("div", ym({
						className: Object(g.a)(Om.a.main, {
							[Om.a.mShowingPaddedPinnedDescriptions]: s
						}, t)
					}, n))
				},
				Em = Object(v.a)(e => {
					var {
						className: t,
						overlayScrollContainerEl: s,
						theme: n
					} = e, a = xm(e, ["className", "overlayScrollContainerEl", "theme"]);
					const r = Object(Ce.a)(Object.assign({
						theme: n
					}, a));
					return u.a.createElement("div", ym({
						className: Object(g.a)(Om.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(hm.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--comments-overlay-offset": "".concat(Object(hs.c)(s), "px")
						}
					}, a))
				}),
				jm = e => {
					var {
						className: t,
						divRef: s
					} = e, n = xm(e, ["className", "divRef"]);
					return u.a.createElement("div", ym({
						className: Object(g.a)(Om.a.lightboxHeaderWrapper, t)
					}, n, {
						ref: s
					}))
				},
				Sm = Object(fm.a)(tl.a.EmailCollectionBannerId),
				wm = Object(m.b)(() => Object(h.c)({
					currentPage: ds.b,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(ae.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: re.t,
					isLoggedIn: re.I,
					isNpsSurveyEnabled: gm.a,
					isSubscriptionsPinned: Wn.b,
					isSuspended: re.N,
					isFPR: re.G,
					posts: vm.Q,
					profileCollectionsEnabled: Qu.a,
					showEmailCollectionBanner: e => !Object(ys.J)(Object(ds.b)(e)) && Sm(e)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(b.b)(t)),
					onUnpinSubscriptions: () => e(Object(E.j)()),
					onPostDismissTrigger: () => e(Object(j.a)())
				})),
				_m = (e, t) => !(!e.state || !e.state[H.a.IsOverlay] || t === e);
			class km extends u.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = d()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < dm.l && this.props.onUnpinSubscriptions()
					}, f.G), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: s
						} = this.props;
						if (Object(ys.w)(e)) {
							const n = e && e.urlParams && e.urlParams.partialPostId,
								a = "".concat(f.yb.Post, "_").concat(n),
								r = t && n && t[a],
								o = r && r.belongsTo.type === um.a.PROFILE;
							return !(!r || !Object(bm.a)(r) || o && !s)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(ae.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler)
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						isNpsSurveyEnabled: t,
						location: s
					} = this.props, n = s.state && s.state[H.a.IsOverlay], a = Object(x.a)(this.previousLocation, e.location);
					t && n && a && !this.didCountSurveyTrigger && (this.props.onPostDismissTrigger(), this.didCountSurveyTrigger = !0);
					const r = Object(x.a)(this.previousLocation, this.props.location),
						o = n ? this.previousPage : this.props.currentPage;
					if (o) {
						const {
							meta: t,
							urlParams: s
						} = o, n = t && (t.name === f.Bb.INDEX || t.name === f.Bb.SUBREDDIT && s.subredditName === q.b.Popular), a = Object(ae.c)(this.props.frontpageSignupVariant), r = Object(ae.c)(e.frontpageSignupVariant);
						n || a || !r ? a && !r && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || n || a || r || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const i = _m(e.location, this.previousLocation);
					O.a.write(() => {
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
						hasInvalidSession: s,
						isFPR: a,
						isLoggedIn: r,
						isSubscriptionsPinned: o,
						isSuspended: c,
						location: d,
						onClickOutsideOverlay: m,
						routes: p,
						showEmailCollectionBanner: b
					} = this.props, {
						isSignupUpsellDisplayed: h,
						isSignupUpsellHidden: g
					} = this.state, v = this.context, C = _m(d, this.previousLocation);
					d.state && d.state[H.a.IsOverlay] && !C ? d.state[H.a.IsOverlay] = !1 : d.state && (this.previousLocation === d || d.state[H.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[H.a.CloseLocation] && this.previousLocation.state[H.a.CloseLocation] === d.state[H.a.CloseLocation] ? d.state[H.a.CloseLocation] = Object.assign(Object.assign({}, this.previousLocation), {
						state: i()(this.previousLocation.state, H.a.CloseLocation)
					}) : d.state[H.a.CloseLocation] = this.previousLocation);
					const O = Object(x.a)(this.previousLocation, d),
						y = C || O ? this.previousLocation : d,
						P = C || O ? this.previousPage : e,
						E = !(!(P && P.meta && P.meta.name === f.Bb.SEARCH_RESULTS && P && P.queryParams) || P.queryParams[V.s]),
						j = !(!P || !P.meta || P.meta.name !== f.Bb.MODERATION_PAGES),
						w = Object(ys.w)(P),
						_ = this.getIsPostCollection(),
						k = h && !g;
					return s ? n.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : u.a.createElement(u.a.Fragment, null, u.a.createElement(ys.a.Provider, {
						value: P
					}, u.a.createElement(Pr.c, {
						isOverlayOpen: C
					}, u.a.createElement(cl.a, {
						forceRedditTheme: E
					}, h && u.a.createElement(tt, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), u.a.createElement(Mm, {
						browserInfo: v,
						isFPR: a,
						isInline: k,
						isSuspended: c
					})), u.a.createElement(mm.a.Provider, {
						value: !1
					}, u.a.createElement(cl.a, {
						forceRedditTheme: E || j,
						isCommentsPage: w
					}, u.a.createElement(Im, {
						frontpageSignupVariant: t,
						isCommentsPage: w,
						isInline: k,
						isLoggedIn: r,
						isSubscriptionsPinned: o,
						location: y,
						overlayIsOpen: C,
						page: P,
						routes: p,
						showEmailCollectionBanner: b,
						browserInfo: v,
						showFPR: a,
						showSuspended: c
					}))))), u.a.createElement(ys.a.Provider, {
						value: e
					}, C && u.a.createElement(mm.a.Provider, {
						value: !0
					}, u.a.createElement(cl.a, {
						isOverlay: !0
					}, u.a.createElement(Nm, {
						isPostCollection: _,
						location: d,
						onClickOutsideOverlay: m,
						page: e,
						routes: p,
						showEmailCollectionBanner: b,
						browserInfo: v,
						showFPR: a,
						showSuspended: c
					}))), u.a.createElement(cl.a, null, u.a.createElement(l.Fragment, null, u.a.createElement("div", {
						id: cm.a,
						className: Om.a.popupContainer
					}), u.a.createElement(Vu, null), u.a.createElement(il.a, null), b && u.a.createElement(S.a, null), u.a.createElement(vs, null), u.a.createElement(Fn, null)))))
				}
			}
			km.contextType = C.a;
			const Mm = Object(U.c)(e => {
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
					return u.a.createElement(l.Fragment, null, u.a.createElement(om, r), u.a.createElement($d, {
						className: Object(g.a)(Om.a.header, Object(im.b)(Om.a, r), {
							[Om.a.inline]: n
						})
					}))
				}),
				Im = Object(U.c)(class extends u.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline
					}
					locationsEqual(e, t) {
						const s = i()(e, "key"),
							n = i()(t, "key");
						return r()(s, n)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const s = i()(e, ["key", "locationState"]),
								n = i()(t, ["key", "locationState"]);
							return r()(s, n)
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
						return u.a.createElement(Pm, {
							"aria-hidden": n,
							className: Object(g.a)(Object(im.b)(Om.a, this.props), {
								[Om.a.withUpsell]: !!e,
								[Om.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && u.a.createElement(ol, {
							className: Object(g.a)(Om.a.pinnedSubscriptions, Object(im.b)(Om.a, this.props)),
							"data-redditstyle": !0
						}), u.a.createElement(p.f, {
							location: t
						}, s), c && u.a.createElement("div", {
							className: Object(g.a)(Om.a.bottomSpacer, Object(im.a)(Om.a, this.props))
						}))
					}
				});
			class Nm extends u.a.Component {
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
						if (this.mouseDownInWrapper && Object(P.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
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
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = pm.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(y.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && pm.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: s
					} = this.props, {
						overlayScrollContainerEl: n
					} = this.state, a = !(!t || !t.meta || t.meta.name === f.Bb.SUBREDDIT_CREATION || t.meta.name === f.Bb.PUBLIC_ACCESS_NETWORK), r = e;
					return u.a.createElement(Em, {
						className: Object(g.a)(Object(im.b)(Om.a, this.props), {
							[Om.a.mIsCommentsLightbox]: a,
							[Om.a.mIsLargeCommentsLightbox]: r
						}),
						overlayScrollContainerEl: n
					}, u.a.createElement("div", {
						className: Object(g.a)(Om.a.overlayWrapper, Object(im.b)(Om.a, this.props))
					}, u.a.createElement("div", {
						className: Object(g.a)(Om.a.overlayScrollContainer, {
							[Om.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: lm.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, a && u.a.createElement(jm, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(g.a)(Object(im.b)(Om.a, this.props), {
							[Om.a.mIsLargeCommentsLightbox]: r
						}),
						tabIndex: -1
					}, u.a.createElement(el.a, {
						page: t
					})), u.a.createElement(p.f, null, s), u.a.createElement("div", {
						className: Object(g.a)(Om.a.bottomSpacer, Object(im.a)(Om.a, this.props))
					}))))
				}
			}
			t.b = wm(Object(U.c)(km))
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, s) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				isHighlighted: "_2fUisaQtUa1Fxx6-R5fDhH"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./src/reddit/components/BadgeCounter/index.m.less"),
				c = s.n(i);
			t.a = e => {
				let {
					className: t,
					isActive: s,
					unreadCount: n
				} = e;
				return s ? a.a.createElement("span", {
					className: Object(r.a)(t, c.a.badgeCounter, {
						[c.a.isHighlighted]: s && n <= 0
					})
				}, n > 0 && Object(o.b)(n)) : null
			}
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
			s.r(t), s.d(t, "BlankPost", (function() {
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
					post: c.N
				})),
				u = e => {
					let {
						className: t,
						post: s,
						onPostViewable: n
					} = e;
					return s.isSponsored ? a.a.createElement(o.a, {
						post: s,
						trackDisplay: !0
					}, a.a.createElement("div", {
						className: Object(d.a)(t, "Blank ".concat(s.id))
					})) : null
				};
			t.default = l(u)
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class d extends a.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: s = !0,
							location: n,
							showModal: a,
							dialogId: r
						} = this.props;
						return !(!s || e.pathname !== n.pathname) || (r && a(), !1)
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
					return a.a.createElement(o.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(r.b)(null, (e, t) => ({
				showModal: () => e(Object(i.h)(t.dialogId))
			}))(Object(o.i)(d))
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
		"./src/reddit/components/ChangeUsernameModals/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameModals",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ChangeUsernameModals").then(s.bind(null, "./src/reddit/components/ChangeUsernameModals/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameModals/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = a
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ChangeUsernameTooltip").then(s.bind(null, "./src/reddit/components/ChangeUsernameTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameTooltip/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = a
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
				activeSale: "_2MCszvETQ_Z6kv8AZ0mhCe",
				purchaseList: "_310fLrnWkOCPEaTfEufxkJ"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/DefaultHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_2lgyQv1Xe7SzrqkbUeaEFL",
				headerText: "_1CH25li1ODdO2KEOCMjWEj",
				headerLink: "_1lmsw-IaCDAsy3RT_4s5s9"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_1mxOXTqB-MrirvDiecjz4Z",
				headerText: "_1eNKe31O3AOBXQgWsPIL4P",
				saleHeaderImage: "_1Vf1tHvNme79A6GR8te6F-"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_2HB5cXf0bpHe1piH74nOIQ"
			}
		},
		"./src/reddit/components/CoinPurchaseModal/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts"),
				i = s("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = s("./src/reddit/components/GlobalModalContainer/registry.ts"),
				d = s("./src/reddit/constants/modals.ts");
			const l = () => Object(o.a)(() => Promise.all([Promise.all([s.e("vendors~CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal~UpdateCardModal"), s.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), s.e("CoinPurchaseModal")]).then(s.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)()])).then(e => e[0].default),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: l
				});
			Object(c.b)(d.a.ECON_COIN_PURCHASE, e => a.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less": function(e, t, s) {
			e.exports = {
				CompactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				compactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				productSection: "_2VkRnsOobI-4VlOs4ID5Vy",
				primaryText: "_4cdfLigUWzeeVcPzzbe78",
				buttonSubtext: "_2Mm_ve0iAKMLDXgbbvVmSD",
				subtext: "_1K7tfdKlu_H-Eljz3TrNc8",
				priceSection: "_49wuP84YuCbFBmZg2KI5s",
				button: "_2s6F0RDk744nqzZtEK_6Og",
				goldStyle: "_2fGxX7IQlng74vsW862Y--",
				crossout: "_3LPal_LVAaPThYFSl8Vav3"
			}
		},
		"./src/reddit/components/CompactCoinPurchaseList/index.m.less": function(e, t, s) {
			e.exports = {
				errorContainer: "_3dCfx1TJ9381ixSTRcnyT-",
				loaderContainer: "xqaZPpbD8_8ATMQOxTIB_"
			}
		},
		"./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Econ/TopAwardersModal/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = s("./src/reddit/constants/modals.ts");
			const c = Object(n.a)({
				resolved: {},
				chunkName: () => "EconTopAwardersModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki"), s.e("EconTopAwardersModal")]).then(s.bind(null, "./src/reddit/components/Econ/TopAwardersModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/TopAwardersModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(o.b)(i.a.ECON_TOP_AWARDERS, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "EmailCollectionBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("EmailCollectionBanner").then(s.bind(null, "./src/reddit/components/EmailCollection/Banner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/EmailCollection/Banner/index.tsx"
				}
			});
			t.a = a
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
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = {},
				a = () => null;

			function r(e, t) {
				if (e in n) throw new Error("Modal with id ".concat(e, " already registered!"));
				n[e] = t
			}

			function o(e) {
				return e && e in n ? n[e] : a
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Gold/GildAnimationOverlay/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SPARKLE_ASSET_PATH", (function() {
				return f
			})), s.d(t, "STARBURST_ASSET_PATH", (function() {
				return v
			}));
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/selectors/gold/awardIcon.ts"),
				b = s("./src/reddit/selectors/gold/giveAwards.ts"),
				h = s("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				g = s.n(h);
			const f = "".concat(n.a.assetPath, "/img/gold/animated-sparkle-256.png"),
				v = "".concat(n.a.assetPath, "/img/gold/animated-starburst-256.png"),
				C = Object(c.c)({
					award: b.b,
					awardIcon: p.d
				}),
				O = Object(i.b)(C, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(d.a)(O(e => {
				const {
					award: t,
					awardIcon: s,
					onClose: n
				} = e;
				setTimeout(n, 1700);
				const r = a.fbt._("Animation of {award name} image", [a.fbt._param("award name", t.name)], {
					hk: "222osK"
				});
				return o.a.createElement("div", {
					className: g.a.gildAnimationContainer
				}, o.a.createElement("div", {
					className: Object(l.a)(g.a.animationComponent, g.a.starburst),
					style: {
						backgroundImage: "url(".concat(v, ")")
					}
				}), o.a.createElement("img", {
					alt: r,
					className: Object(l.a)(g.a.animationComponent, g.a.awardAsset),
					src: s
				}), o.a.createElement("div", {
					className: Object(l.a)(g.a.animationComponent, g.a.sparkle),
					style: {
						backgroundImage: "url(".concat(f, ")")
					}
				}))
			}))
		},
		"./src/reddit/components/GoogleOneTapIFrame/index.m.less": function(e, t, s) {
			e.exports = {
				IFrame: "V6V7iCbDSFo5LexMzDv4B",
				iFrame: "V6V7iCbDSFo5LexMzDv4B"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = s("./src/reddit/constants/modals.ts");
			const c = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-ConvertToCoinsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki~reddit-components-Governance-Tra~2c7f90aa"), s.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~e74e7afb"), s.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~89877e6b"), s.e("vendors~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-components-Governance~231ed33d"), s.e("vendors~GovernanceTransferPointsModal~reddit-components-Governance-TransactionModals-ClaimPointsModa~b2d0d5d1"), s.e("reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-components-Governance-Transac~bbc9464a"), s.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(s.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(o.b)(i.a.CONVERT_TO_COINS, e => r.a.createElement(c, null))
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.m.less": function(e, t, s) {
			e.exports = {
				ctaContainer: "_1t5i5bNwZeJ7FuUXZ9rM-p",
				ctaContent: "jEUbSHJJx8vISKpWirlfx",
				activeSale: "_24moloPNpotQ_Incvvxwtt",
				text: "_2Q7wEg_pr4EKVIc6XvJibh",
				icon: "_1F-AgkBVxGxQsEfI3oVkVa"
			}
		},
		"./src/reddit/components/Header/MwebResponsiveHeader/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, s) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
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

			function g(e) {
				return a.a.createElement(b, {
					id: r.c
				}, a.a.createElement(h, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
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
		"./src/reddit/components/HeaderIconContainer/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "PH-V9ggsF2mi5JTDmDqdR",
				button: "PH-V9ggsF2mi5JTDmDqdR",
				Container: "FOioVk_DUTmZIKKa82Mm1",
				container: "FOioVk_DUTmZIKKa82Mm1",
				isOpen: "_2DgzqfpTotjWrh91uFswuC"
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
				envelopeIcon: "_1V77mEI1g_5ZlCh_c2-Yab",
				isUnread: "_2Wgcbg0LNUiJf4L2fVQJ7O",
				notificationInboxIcon: "_2mR_VyuaB50nsX1FR6XERF"
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
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				inlineButton: "_18X7KoiaLuKbuLqg4zE8BH",
				dropdownOpen: "_3F3oKTToidUQ0CbMS1cccX",
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				toggleSwitch: "_179edq2yfZswDIo3NdeebM",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF"
			}
		},
		"./src/reddit/components/LightboxHeader/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/LightboxHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/shortcuts/close.ts"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/FlairWrapper/index.tsx"),
				b = s("./src/reddit/components/PostTitle/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/colors.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/helpers/postCollection.ts"),
				C = s("./src/reddit/hooks/useButtons2020.ts"),
				O = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				y = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				x = s("./src/reddit/icons/fonts/Link/index.tsx"),
				P = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				E = s("./src/reddit/icons/fonts/Text/index.tsx"),
				j = s("./src/reddit/icons/svgs/Close/index.tsx"),
				S = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/models/Vote/index.ts"),
				k = s("./src/reddit/selectors/experiments/categories.ts"),
				M = s("./src/reddit/selectors/platform.ts"),
				I = s("./src/reddit/components/LightboxHeader/index.m.less"),
				N = s.n(I);
			const T = Object(i.c)({
					isInCategoriesExperiment: k.a,
					post: M.n
				}),
				R = Object(o.b)(T, (e, t) => {
					let {
						sendEvent: s
					} = t;
					return {
						close: () => {
							e(Object(u.a)(s, !0))
						},
						toggleVote: (t, s) => e(s === _.a.upvoted ? Object(l.S)(t) : Object(l.q)(t))
					}
				}, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					onVoteClick: n => {
						const a = e.post || s.post;
						a && t.toggleVote(a.id, n)
					}
				}));
			class L extends r.a.Component {
				constructor() {
					super(...arguments), this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}
				}
				render() {
					const {
						className: e,
						onCloseClick: t,
						onVoteClick: s,
						page: o,
						post: i
					} = this.props, l = F[i && i.media ? i.media.type : w.o.EMBED], u = !i && o && o.meta && o.meta.name === d.Bb.META_MEMBERSHIP_PAYWALL_PAGE;
					return r.a.createElement("div", {
						className: Object(c.a)(N.a.container, e, {
							[N.a.isCollection]: i && Object(v.a)(i)
						})
					}, r.a.createElement("div", {
						className: N.a.postDetails
					}, i && r.a.createElement(a.Fragment, null, r.a.createElement(m.a, {
						className: N.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: i,
						onVoteClick: s,
						redditStyle: !0
					}), r.a.createElement(l, {
						className: N.a.mediaIcon
					}), r.a.createElement(b.c, {
						className: N.a.postTitle,
						post: i,
						size: b.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: g.a.lightboxHeaderText,
						titleLinkClassName: N.a.postTitleLink,
						showCategoryTag: !0
					}), r.a.createElement(p.a, {
						post: i,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), u && o && o.urlParams.subredditName && r.a.createElement("div", {
						className: N.a.membershipPaywallTitle
					}, n.fbt._("{communityName} Special Membership", [n.fbt._param("communityName", "r/".concat(o.urlParams.subredditName))], {
						hk: "4vP4VY"
					}))), r.a.createElement("div", {
						className: N.a.actions
					}, r.a.createElement(A, {
						onClick: t || this.closeLightbox
					})))
				}
			}
			const A = e => {
					return Object(C.a)() ? r.a.createElement(f.q, {
						size: f.c.XS,
						onClick: e.onClick,
						priority: f.b.Tertiary,
						Icon: j.a,
						text: n.fbt._("Close", null, {
							hk: "4gbyAA"
						}),
						title: n.fbt._("Close", null, {
							hk: "4gbyAA"
						}),
						"aria-label": n.fbt._("Close", null, {
							hk: "4gbyAA"
						})
					}) : r.a.createElement(f.o, {
						className: N.a.close,
						onClick: e.onClick,
						title: n.fbt._("Close", null, {
							hk: "4gbyAA"
						}),
						"aria-label": n.fbt._("Close", null, {
							hk: "4gbyAA"
						})
					}, r.a.createElement(j.a, {
						className: N.a.closeIcon
					}), r.a.createElement("span", {
						className: N.a.closeText
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					})))
				},
				F = {
					[w.o.GIFVIDEO]: y.a,
					[w.o.IMAGE]: P.a,
					[w.o.TEXT]: E.a,
					[w.o.RTJSON]: E.a,
					[w.o.VIDEO]: O.a,
					[w.o.EMBED]: x.a,
					[w.o.LIVEVIDEO]: O.a,
					[w.o.GALLERY]: e => r.a.createElement("i", {
						className: Object(c.a)(N.a.galleryIcon, e.className)
					}, r.a.createElement(S.a, null))
				};
			t.a = Object(h.c)(R(L))
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
				getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
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
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				r = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const o = () => Object(a.a)(() => Promise.all([Promise.all([s.e("vendors~CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal~UpdateCardModal"), s.e("PremiumPurchaseModal")]).then(s.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(r.d)()])).then(e => e[0].default),
				i = Object(n.a)({
					getComponent: o,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			t.a = i
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = Object(n.a)({
				resolved: {},
				chunkName: () => "AdminPanel",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("AdminPanel").then(s.bind(null, "./src/reddit/components/AdminPanel/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/AdminPanel/index.tsx"
				}
			});

			function l() {
				return Object(o.d)(e => Object(i.b)(e) || Object(c.F)(e)) ? r.a.createElement(d, null) : null
			}
		},
		"./src/reddit/components/Root/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL"
			}
		},
		"./src/reddit/components/Root/redesignFont.less": function(e, t, s) {},
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
				planetIcon: "_2Tfe4NhLJlRQkuO1yhzqR2",
				subredditIcon: "_3uBNO7SvsRGN4W794WAO_p",
				subredditIconStyles: "_26nS8Ogzm0pqOjlwfGRgJR",
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
		"./src/reddit/components/ShortcutWrapper/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "ShortcutWrapper",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~ShortcutWrapper"), s.e("ShortcutWrapper")]).then(s.bind(null, "./src/reddit/components/ShortcutWrapper/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ShortcutWrapper/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = a
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, s) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
			}
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return y
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "c", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/isEqual.js"),
				r = s.n(a),
				o = s("./node_modules/react/index.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/helpers/survey/index.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const m = (e, t) => {
					const s = u.experiment(e, t);
					return s ? {
						experiment_name: s.name,
						experiment_variant: s.variant,
						experiment_version: s.version
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
				b = (e, t) => s => Object.assign(Object.assign({
					source: "survey",
					action: t,
					noun: "intro"
				}, u.defaults(s)), {
					survey: m(s, e)
				}),
				h = (e, t, s, n) => a => Object.assign(Object.assign({
					source: "survey",
					action: t,
					noun: "rating"
				}, u.defaults(a)), {
					survey: Object.assign({
						type: p(s),
						min: s === l.a.NPS ? 0 : 1,
						max: s === l.a.NPS ? 10 : 7,
						score: n
					}, m(a, e))
				}),
				g = (e, t, s, n) => a => Object.assign(Object.assign({
					source: "survey",
					action: t,
					noun: "freeform_text"
				}, u.defaults(a)), {
					survey: Object.assign({
						type: p(s),
						text: n
					}, m(a, e))
				});
			var f = s("./src/reddit/hooks/useTracking.ts"),
				v = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/selectors/experiments/index.ts"),
				O = s("./src/reddit/selectors/user.ts");
			const y = () => {
					const e = Object(i.c)(),
						[t, s] = Object(o.useState)(null),
						n = Object(f.a)(),
						a = Object(i.d)(O.g),
						d = Object(i.d)(O.mb),
						u = Object(i.d)(C.a, r.a),
						m = Object(o.useMemo)(() => {
							const e = Object(l.f)(),
								t = {};
							for (const s of e) t[s] = u[s];
							return t
						}, [u]),
						p = Object(o.useCallback)(e => {
							const n = Object(l.e)({
								actionType: e,
								surveyExperimentVariants: m,
								samplingId: a || d
							});
							if (!n || n === t) return;
							const r = m[n.experiment_name];
							(null == r ? void 0 : r.variant) && n.variants[r.variant] && setTimeout(() => s(n), 1e3 * n.variants[r.variant].delay)
						}, [t, m, a, d]);
					return Object(o.useEffect)(() => {
						const e = Object(l.c)(),
							t = e.subscribe(p);
						return () => e.unsubscribe(t)
					}, [p]), Object(o.useEffect)(() => {
						if (!t) return;
						const s = Date.now();
						Object(l.g)(t, s), e(Object(c.H)({
							surveyLastSeenTime: s
						}, !1)), n(b(t.experiment_name, "display"))
					}, [t, e, n]), t
				},
				x = e => {
					let {
						activeStepNum: t,
						activeSurvey: s,
						isFollowUp: n,
						textResponse: a,
						setTextResponse: r,
						setIsSurveyDismissed: i
					} = e;
					(e => {
						let {
							isFollowUp: t,
							textResponse: s
						} = e;
						const n = Object(o.useCallback)(e => {
							if (t && s.length) return e.preventDefault(), e.returnValue = "sure?", "sure?"
						}, [t, s]);
						Object(o.useEffect)(() => (window.addEventListener("beforeunload", n), () => window.removeEventListener("beforeunload", n)), [n])
					})({
						isFollowUp: n,
						textResponse: a
					});
					const [c, d] = Object(o.useState)(!1), l = Object(f.a)(), u = s.experiment_name, m = s.steps[t] && s.steps[t].type, p = Object(o.useCallback)(() => {
						t >= 0 ? d(!0) : (i(!0), l(b(s.experiment_name, "dismiss")))
					}, [t, s, l, i]), v = Object(o.useCallback)(() => {
						r(""), i(!0), l(n ? g(u, "dismiss", m) : h(u, "dismiss", m))
					}, [u, n, l, i, r, m]);
					return {
						isLeavingModalShowing: c,
						onClose: p,
						onLeaveCancel: Object(o.useCallback)(() => d(!1), []),
						onLeaveConfirm: v
					}
				},
				P = e => {
					let {
						activeSurvey: t,
						selectedNumber: s,
						setIsSurveyDismissed: n,
						setSelectedNumber: a,
						setTextResponse: r,
						textResponse: i
					} = e;
					const [c, d] = Object(o.useState)(-1), [u, m] = Object(o.useState)(0), [p, v] = Object(o.useState)(!1), C = Object(f.a)(), O = Object(o.useCallback)(() => {
						const e = t.experiment_name,
							o = t.steps[c] && t.steps[c].type,
							f = t.steps[c + 1] && t.steps[c + 1].type;
						if (m(u + 1), -1 === c) return C(b(e, "agree")), d(0), void C(h(e, "display", f));
						C(p ? g(e, "submit", o, i) : h(e, "submit", o, s && s + (o === l.a.NPS ? 0 : 1))), a(void 0), r(""), p || !t.steps[c].follow_up_question ? (v(!1), c + 1 >= t.steps.length ? n(!0) : (d(c + 1), C(h(e, "display", f)))) : (v(!0), C(g(e, "display", f)))
					}, [c, t, p, i, s, C, n, a, r, u]);
					return {
						activeStepNum: c,
						isFollowUp: p,
						onStepComplete: O,
						uiStep: u
					}
				},
				E = (e, t, s) => {
					const a = Object(i.c)();
					Object(o.useEffect)(() => {
						e && !t && s > 1 && setTimeout(() => {
							a(Object(d.e)({
								text: n.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: v.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [a, e, t, s])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/reddit/components/Survey/hooks.ts");
			const i = Object(n.a)({
				resolved: {},
				chunkName: () => "SurveyAsync",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("SurveyAsync").then(s.bind(null, "./src/reddit/components/Survey/Async.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Survey/Async.tsx"
				}
			});

			function c() {
				const e = Object(o.d)();
				return e ? r.a.createElement(i, {
					activeSurvey: e
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
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
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(l.o)(e, t);
			class C extends r.a.Component {
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
			const O = Object(o.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.j)(e), e => {
				if (Object(p.j)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.j)(e)) return Object(p.g)(e, t)
			}, v, Object(c.a)((e, t) => {
				if (Object(p.j)(e) || Object(h.fb)(e)) return;
				const s = v(e, t);
				if (!s) return;
				const n = Object(b.G)(e, s);
				if (!n) return;
				if (Object(h.eb)(e, {
						subredditId: n
					})) return;
				const a = e.structuredStyles.models[n];
				return a || void 0
			}), (e, t) => {
				const s = v(e, t);
				if (!s) return;
				const n = Object(b.y)(e, {
					subredditName: s
				});
				return n ? n.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.ob)(e).nightmode
			}, (e, t) => {
				if (!Object(h.ob)(e).hideNSFW) return !0;
				const s = v(e, t);
				if (s) {
					const t = Object(b.B)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const n = Object(l.d)(e, t);
				return !!n && n.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, s, a, r, o, i, c, d, l, p) => {
				const b = Object.assign(Object.assign({}, i ? {
						emojiWidth: i[0],
						emojiHeight: i[1]
					} : {}), {
						shouldShowNSFWContent: d,
						isCommentsPage: p,
						isOverlay: l
					}),
					h = r && r.length && !Object(f.a)(r) ? "SubredditVars-r-".concat(r) : g.c;
				if (t && s && a) {
					const e = Object(u.h)(s, a);
					return {
						isRootOrUniqueClassName: h,
						theme: Object(m.i)(e, b)
					}
				}
				if (o) {
					const e = Object(u.h)(o);
					let t;
					return {
						isRootOrUniqueClassName: h,
						theme: t = c ? Object(m.h)(e, b) : Object(m.i)(e, b)
					}
				}
				return {
					isRootOrUniqueClassName: h,
					theme: Object(n.merge)(e, {
						subredditContext: b
					})
				}
			}))(C);
			t.b = O;
			const y = Object(d.t)()(O)
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
					if (t) return t.isBlank ? a.a.createElement(o.BlankPost, {
						post: t,
						onPostViewable: s
					}) : a.a.createElement(r.a, {
						post: t,
						trackDisplay: !0
					}, e)
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
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/UserIcon/UserIcon.tsx");

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
			const u = Object(o.c)({
					currentUser: i.i,
					isNightMode: i.T,
					shouldHideNSFW: i.A
				}),
				m = Object(r.b)(u);
			t.a = m(e => {
				const {
					currentUser: t
				} = e, s = l(e, ["currentUser"]);
				return a.a.createElement(c.a, d({}, s, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				}))
			})
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, s) {
			"use strict";
			var n, a, r, o;
			s.d(t, "c", (function() {
					return n
				})), s.d(t, "a", (function() {
					return a
				})), s.d(t, "d", (function() {
					return r
				})), s.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/"
				}(n || (n = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.PreferenceStatus = "preferenceStatus", e.Register = "register", e.Resize = "resize", e.ShowStep = "showStep", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(a || (a = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(r || (r = {})),
				function(e) {
					e.SelectAccount = "select-account", e.Email = "email", e.EmailOptIn = "email-opt-in", e.GoogleUI = "google-ui", e.Subscribe = "subscribe", e.UsernameAndPassword = "username-and-password"
				}(o || (o = {}))
		},
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "j", (function() {
				return i
			})), s.d(t, "k", (function() {
				return c
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "m", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "l", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			}));
			const n = "DEFAULT",
				a = "",
				r = "All Communities",
				o = "top",
				i = "MOD",
				c = "moderating",
				d = "LOCAL_COMMUNITIES",
				l = "near-you",
				u = "/subreddits/leaderboard/",
				m = {
					id: a,
					name: a,
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
				h = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
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
							this.setState(s => e === s[t].isThrottled ? null : Object.assign(Object.assign({}, s), {
								[t]: Object.assign(Object.assign({}, s[t]), {
									isThrottled: e
								})
							}))
						} else this.setState(e => {
							const t = Object.keys(r.a).reduce((t, s) => (o.a.isFeatureThrottled(s) && (t[s] = Object.assign(Object.assign({}, e[s]), {
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
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
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
					[i.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
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
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Typography/index.m.less"),
				r = s.n(a);
			n.a.h1("heading1", r.a), n.a.h2("heading2", r.a), n.a.h3("heading3", r.a), n.a.h4("heading4", r.a);
			const o = n.a.h5("heading5", r.a),
				i = (n.a.h6("heading6", r.a), n.a.p("body1", r.a), n.a.p("body2", r.a)),
				c = (n.a.p("actionFont", r.a), n.a.p("metadata", r.a));
			n.a.p("metadata3", r.a)
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
							authorization: Object.assign(Object.assign({}, t), {
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
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/config.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				r = s("./src/reddit/constants/headers.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts"),
				i = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
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
				return Object(o.a)(Object(a.a)(e, [r.a]), {
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
				const s = await Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/orders"),
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
				if (!s.ok) throw new Error("Error fetching provisional membership: ".concat(Object(i.b)(s.error)));
				return s.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
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
			const u = (e, t) => Object(d.a)(e, {
				endpoint: "".concat(r.a.metaUrl, "/products/").concat(t, "?types=badge,membership"),
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "i", (function() {
				return o
			})), s.d(t, "h", (function() {
				return i
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "j", (function() {
				return d
			})), s.d(t, "k", (function() {
				return l
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "l", (function() {
				return g
			}));
			var n, a = s("./src/config.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error("No ethereum network for provider: ".concat(e))
			}
			async function d(e, t, s) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function l(e, t, s) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: s
				})
			}
			async function u(e, t, s) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(s)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
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
				h = (e, t, s, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: s,
					amount: n
				});
			async function g(e, t) {
				return await Object(r.a)(e, {
					method: "put",
					endpoint: "".concat(a.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/graphql/operations/GetNearbySubreddits.json"),
				a = s("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(a.a)(e, Object.assign(Object.assign({}, n), {
				variables: t
			}))
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/graphql/operations/TopSubreddits.json"),
				a = s("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(a.a)(e, Object.assign(Object.assign({}, n), {
				variables: t
			}))
		},
		"./src/reddit/helpers/categoryPickerWidget/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = s("./src/reddit/helpers/name/index.ts");
			const a = (e, t) => t.map(t => {
					const s = Object(n.f)(t.name),
						a = s.split(" & ").join("_and_");
					return Object.assign(Object.assign({}, t), {
						name: s,
						path: t.path || "".concat(e).concat(a, "/")
					})
				}),
				r = e => Object(n.f)(e).split("_and_").join(" & ")
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
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isEmpty.js");
			var n = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				a = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const r = e => {
					let {
						edges: t,
						pageInfo: s
					} = e;
					const r = {},
						o = [];
					for (let i of t) {
						const {
							node: e
						} = i, t = a(i, ["node"]), s = Object(n.a)(e);
						r[s.id] = s, o.push(t)
					}
					return {
						pageInfo: s,
						rankings: o,
						subreddits: r
					}
				},
				o = e => {
					let {
						edges: t
					} = e;
					const s = {},
						r = [];
					for (let o of t) {
						const {
							node: e
						} = o, t = a(o, ["node"]), i = Object(n.a)(e);
						s[i.id] = Object.assign(Object.assign({}, i), {
							bannerBackgroundImage: e && e.styles && e.styles.bannerBackgroundImage
						}), r.push(t)
					}
					return {
						rankings: r,
						subreddits: s
					}
				},
				i = e => {
					let {
						edges: t,
						pageInfo: s
					} = e;
					const a = {},
						r = [];
					let o = 0;
					for (const {
							node: i
						} of t) {
						const e = Object(n.a)(i);
						a[e.id] = Object.assign(Object.assign({}, e), {
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}), r.push({
							id: e.id,
							rank: o
						}), o += 1
					}
					return {
						rankings: r,
						subreddits: a,
						pageInfo: s
					}
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
					d = "function" == typeof t ? t : m(t);
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
		"./src/reddit/helpers/survey/config.json": function(e) {
			e.exports = JSON.parse('{"survey_cooldown_days":182,"active_surveys":[{"experiment_name":"nps_survey_scroll_trigger","trigger_event":"feed_scroll_1_page","variants":{"enabled":{"survey_enabled":true,"trigger_threshold":2,"sample_factor":0.5}},"steps":[{"type":"NPS","question":"How likely are you to recommend Reddit to a friend?","follow_up_question":"What\'s your main reason for feeling that way?"}]},{"experiment_name":"d2x_nps_survey_dismiss_post_trigger","trigger_event":"dismiss_post","variants":{"enabled":{"survey_enabled":true,"trigger_threshold":3,"sample_factor":0.01}},"steps":[{"type":"NPS","question":"How likely are you to recommend Reddit to a friend?","follow_up_question":"What\'s your main reason for feeling that way?"}]},{"experiment_name":"survey_demo_nps_1","trigger_event":"feed_scroll_1_page","variants":{"enabled":{"survey_enabled":true,"trigger_threshold":1,"sample_factor":1}},"steps":[{"type":"NPS","question":"How likely are you to recommend Reddit to a friend?","follow_up_question":"What is the primary reason for your score?"}]},{"experiment_name":"survey_demo_combined_1","trigger_event":"feed_scroll_1_page","variants":{"enabled":{"survey_enabled":true,"trigger_threshold":1,"sample_factor":1}},"steps":[{"type":"CES","question":"How easy was it to create a post?","follow_up_question":"What, if anything, would make it easier to create a post?"},{"type":"CSAT","question":"How satisfied are you with your experience on Reddit today?","follow_up_question":null},{"type":"NPS","question":"How likely are you to recommend Reddit to a friend?","follow_up_question":"What is the primary reason for your score?"}]}]}')
		},
		"./src/reddit/helpers/survey/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/brcast/dist/brcast.es.js"),
				a = s("./node_modules/lodash/once.js"),
				r = s.n(a),
				o = (s("./node_modules/core-js/modules/es6.regexp.split.js"), function(e, t, s) {
					return t = t || 1, (s = s || 0) + (9301 * (e = "number" == typeof e ? e : e.split("").reduce((e, t) => t.charCodeAt(0) + e, 0)) + 49297) % 233280 / 233280 * (t - s)
				}),
				i = s("./src/reddit/actions/survey/constants.ts"),
				c = s("./src/reddit/helpers/localStorage/index.ts");
			const d = s("./src/reddit/helpers/survey/config.json"),
				l = r()(() => Object(n.a)());
			var u;
			! function(e) {
				e.CES = "CES", e.CSAT = "CSAT", e.NPS = "NPS"
			}(u || (u = {}));
			const m = {
					[i.b]: "feed_scroll_1_page",
					[i.a]: "dismiss_post"
				},
				p = e => {
					let {
						actionType: t,
						surveyExperimentVariants: s,
						samplingId: n
					} = e;
					var a;
					const r = Object(c.z)(),
						i = Object(c.A)(),
						l = 864e5 * d.survey_cooldown_days;
					if (!i || !i[t] || r && Date.now() - r <= l) return null;
					const u = [],
						{
							active_surveys: m
						} = d;
					for (let c = 0; c < m.length; c++) {
						const {
							experiment_name: e,
							trigger_event: r,
							variants: d
						} = m[c], l = null === (a = s[e]) || void 0 === a ? void 0 : a.variant, p = l && d[l];
						r !== t || !i[r] || !p || !p.survey_enabled || i[r] < p.trigger_threshold || o(n + e) > p.sample_factor || u.push(m[c])
					}
					return u.length ? u[Math.floor(Math.random() * u.length)] : null
				},
				b = (e, t) => {
					const {
						trigger_event: s
					} = e;
					Object(c.kb)(t), Object(c.L)(s)
				},
				h = () => d.active_surveys.map(e => e.experiment_name),
				g = e => e.steps.reduce((e, t) => e + 1 + (t.follow_up_question ? 1 : 0), 0)
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const r = () => e => Object.assign(Object.assign({
					source: "dfp",
					action: "request",
					noun: "ad"
				}, a.defaults(e)), {
					subreddit: a.subreddit(e)
				}),
				o = () => e => Object.assign(Object.assign({
					source: "dfp",
					action: "define",
					noun: "ad"
				}, a.defaults(e)), {
					subreddit: a.subreddit(e)
				}),
				i = (e, t) => s => {
					const r = t ? e.dfpDetails.slot.getSlotId().getDomId() : e.slot.getSlotId().getDomId(),
						o = -1 !== r.indexOf(n.c.ABOVE_THE_FOLD) ? n.c.ABOVE_THE_FOLD : n.c.BELOW_THE_FOLD,
						i = document.querySelector("#" + r);
					let c, d;
					if (i && (c = n.f.HOUSE_AD, -1 !== i.innerHTML.indexOf("google_ads_iframe") && (c = n.f.PROGRAMMATIC_AD), i.children && i.children.length > 0)) {
						const e = i.children[0];
						d = "".concat(e.offsetWidth, "x").concat(e.offsetHeight)
					}
					const l = t ? "aax" : void 0;
					return Object.assign(Object.assign({
						source: "post",
						action: "view",
						noun: "programmatic_ad"
					}, a.defaults(s)), {
						subreddit: a.subreddit(s),
						programmatic: {
							adUnit: d ? "DESKTOP ".concat(d, " ").concat(o) : "DESKTOP ".concat(o),
							count: 1,
							partner: l,
							type: c
						}
					})
				},
				c = (e, t, s) => r => Object.assign(Object.assign({
					source: "post",
					action: "view",
					noun: "programmatic_ad"
				}, a.defaults(r)), {
					subreddit: a.subreddit(r),
					programmatic: {
						adUnit: null !== e && null !== t ? "DESKTOP ".concat(e, "x").concat(t, " ").concat(s) : "DESKTOP ".concat(s),
						count: 1,
						type: n.f.SWITCH_HOUSE_AD
					}
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
			const a = (e, t) => Object.assign(Object.assign({}, Object(n.defaults)(t)), {
					customFeed: Object(n.customFeedByPath)(t, e),
					source: "custom_feeds"
				}),
				r = e => t => Object.assign(Object.assign({}, a(e, t)), {
					action: "click",
					noun: "delete"
				}),
				o = e => t => Object.assign(Object.assign({}, a(e, t)), {
					action: "click",
					noun: "follow"
				}),
				i = e => t => Object.assign(Object.assign({}, a(e, t)), {
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => Object.assign(Object.assign({}, a(e, t)), {
					action: "click",
					noun: "duplicate"
				}),
				d = e => t => Object.assign(Object.assign({}, a(e, t)), {
					action: "click",
					noun: "share"
				}),
				l = e => t => Object.assign(Object.assign({}, a(e, t)), {
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => Object.assign(Object.assign({}, a(e, t)), {
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/shortcuts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "s", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "o", (function() {
				return p
			})), s.d(t, "n", (function() {
				return b
			})), s.d(t, "l", (function() {
				return h
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "r", (function() {
				return f
			})), s.d(t, "q", (function() {
				return v
			})), s.d(t, "i", (function() {
				return C
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "u", (function() {
				return y
			})), s.d(t, "t", (function() {
				return x
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "c", (function() {
				return w
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				r = (e, t) => s => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: n.post(s, t)
				}),
				o = (e, t) => s => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: n.comment(s, t)
				}),
				i = a("show_panel"),
				c = a("esc_close"),
				d = e => r("enter_open_post", e),
				l = e => o("enter_comment_collapse", e),
				u = e => r("j_next", e),
				m = e => o("j_next", e),
				p = e => r("k_previous", e),
				b = e => o("k_previous", e),
				h = e => r("n_next", e),
				g = e => r("p_previous", e),
				f = e => r("s_save", e),
				v = e => o("s_save", e),
				C = e => r("h_hide", e),
				O = e => r("x_expando", e),
				y = e => r("a_upvote", e),
				x = e => o("a_upvote", e),
				P = e => r("z_downvote", e),
				E = e => o("z_downvote", e),
				j = a("c_create_post"),
				S = e => r("l_go_to_link", e),
				w = e => o("r_comment", e);
			a("q_navigation")
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
		"./src/reddit/icons/svgs/Browse/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					d: "M14,4V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V13a1,1,0,0,0,1,1H4V6A2,2,0,0,1,6,4Z"
				}), a.a.createElement("path", {
					d: "M16,5H6A1,1,0,0,0,5,6V16a1,1,0,0,0,1,1h4a5,5,0,0,1-1-3,5,5,0,0,1,5-5,5,5,0,0,1,3,1V6A1,1,0,0,0,16,5Z"
				}), a.a.createElement("path", {
					d: "M19.21,17.79,17.43,16A4,4,0,0,0,18,14a4,4,0,1,0-4,4,4,4,0,0,0,2-.57l1.77,1.77a1,1,0,0,0,1.41-1.41ZM14,16a2,2,0,1,1,2-2A2,2,0,0,1,14,16Z"
				})))
			}
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
		"./src/reddit/icons/svgs/DizzySnoo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 52 52"
			}, a.a.createElement("path", {
				d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
			}), a.a.createElement("path", {
				fill: "#fff",
				d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
			}), a.a.createElement("path", {
				d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
			}), a.a.createElement("path", {
				d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
			}), a.a.createElement("path", {
				d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
			}), a.a.createElement("path", {
				d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
			}), a.a.createElement("path", {
				fill: "#fff",
				d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
			}), a.a.createElement("path", {
				d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
			}))
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
		"./src/reddit/icons/svgs/Favorite/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return a.a.createElement("svg", {
					className: t,
					viewBox: "0 0 20 20"
				}, a.a.createElement("g", {
					fill: "inherit",
					fillRule: "evenodd"
				}, a.a.createElement("polygon", {
					points: "15.437 17.594 10.189 14.837 4.941 17.594 5.944 11.755 1.698 7.619 7.565 6.767 10.189 1.454 12.813 6.767 18.68 7.619 14.434 11.755"
				})))
			}
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
		"./src/reddit/icons/svgs/Home/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/reddit/constants/colors.ts"),
				i = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			t.a = Object(r.a)(e => {
				var {
					className: t,
					isBadged: s
				} = e, n = c(e, ["className", "isBadged"]);
				return a.a.createElement("svg", {
					className: t,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M15,9.9V8A5,5,0,0,0,5,8V9.9c-2.41.45-4,1.24-4,2.13,0,1.41,4,2.56,9,2.56s9-1.15,9-2.56C19,11.14,17.41,10.35,15,9.9Zm-2,.94a9.62,9.62,0,0,1-3,.39,9.62,9.62,0,0,1-3-.39V8a3,3,0,0,1,6,0Z"
				}), a.a.createElement("path", {
					d: "M2.74,14.6l3,2.12a7.39,7.39,0,0,0,8.6,0l3-2.12a24.63,24.63,0,0,1-7.26,1A24.63,24.63,0,0,1,2.74,14.6Z"
				}), a.a.createElement("circle", {
					cx: "16",
					cy: "4",
					r: "4",
					fill: s ? Object(i.a)(n).body : "none"
				}), a.a.createElement("circle", {
					cx: "16",
					cy: "4",
					r: "3",
					fill: s ? o.a.orangered : "none"
				}))
			})
		},
		"./src/reddit/icons/svgs/KarmaGray/index.m.less": function(e, t, s) {
			e.exports = {
				karma: "_2HCuqd3NYACKYaSTmrITE3"
			}
		},
		"./src/reddit/icons/svgs/KarmaGray/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/KarmaGray/index.m.less"),
				i = s.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.karma, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M3.37,2.75a5.9,5.9,0,0,1,5.49,3.7.62.62,0,0,1-.29.79A3.16,3.16,0,0,0,7.24,8.57a.63.63,0,0,1-.79.29,5.89,5.89,0,0,1-3.7-5.49A.62.62,0,0,1,3.37,2.75Zm8.06,4.49a.63.63,0,0,1-.29-.79,5.89,5.89,0,0,1,5.49-3.7.61.61,0,0,1,.62.6v0a5.89,5.89,0,0,1-3.7,5.49.62.62,0,0,1-.79-.29A3.16,3.16,0,0,0,11.43,7.24Zm2.12,3.9a5.89,5.89,0,0,1,3.7,5.49.62.62,0,0,1-.62.62h0a5.89,5.89,0,0,1-5.49-3.7.63.63,0,0,1,.29-.79,3.16,3.16,0,0,0,1.33-1.33A.62.62,0,0,1,13.55,11.14Zm-5,1.62a.62.62,0,0,1,.29.79,5.89,5.89,0,0,1-5.49,3.7.62.62,0,0,1-.62-.62h0a5.9,5.9,0,0,1,3.7-5.49.62.62,0,0,1,.79.29,3.1,3.1,0,0,0,1.35,1.33ZM10,5.93A7.23,7.23,0,0,0,7.51,2.82,5,5,0,0,1,9.68.09a.61.61,0,0,1,.64,0,5,5,0,0,1,2.17,2.73A7.23,7.23,0,0,0,10,5.93Zm9.91,3.75a.61.61,0,0,1,0,.64,5,5,0,0,1-2.73,2.17A7.23,7.23,0,0,0,14.07,10a7.36,7.36,0,0,0,3.11-2.49A5,5,0,0,1,19.91,9.68ZM10,14.07a7.18,7.18,0,0,0,2.5,3.11,5,5,0,0,1-2.18,2.73.61.61,0,0,1-.64,0,5,5,0,0,1-2.17-2.73A7.23,7.23,0,0,0,10,14.07ZM5.93,10a7.23,7.23,0,0,0-3.11,2.49A5,5,0,0,1,.09,10.32a.61.61,0,0,1,0-.64A5,5,0,0,1,2.82,7.51,7.23,7.23,0,0,0,5.93,10Z"
			}))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, a.a.createElement("g", null, a.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), a.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Logout/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M15,2 L5,2 C4.447,2 4,2.447 4,3 L4,9 L9.586,9 L8.293,7.707 C7.902,7.316 7.902,6.684 8.293,6.293 C8.684,5.902 9.316,5.902 9.707,6.293 L12.707,9.293 C13.098,9.684 13.098,10.316 12.707,10.707 L9.707,13.707 C9.512,13.902 9.256,14 9,14 C8.744,14 8.488,13.902 8.293,13.707 C7.902,13.316 7.902,12.684 8.293,12.293 L9.586,11 L4,11 L4,17 C4,17.553 4.447,18 5,18 L15,18 C15.553,18 16,17.553 16,17 L16,3 C16,2.447 15.553,2 15,2"
			})))
		},
		"./src/reddit/icons/svgs/ModMode/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M10,8 C8.619,8 7.5,9.5 7.5,9.5 C7.5,9.5 8.619,11 10,11 C11.381,11 12.5,9.5 12.5,9.5 C12.5,9.5 11.381,8 10,8 M15.1338,14 L4.8658,14 C4.4818,14 4.2398,13.583 4.4328,13.25 L9.5678,4.357 C9.7598,4.024 10.2398,4.024 10.4328,4.357 L15.5678,13.25 C15.7598,13.583 15.5188,14 15.1338,14 M17.2748,3.038 L10.2748,1.038 C10.0948,0.987 9.9048,0.987 9.7258,1.038 L2.7258,3.038 C2.2958,3.161 1.9998,3.554 1.9998,4 L1.9998,11 C1.9998,16.688 9.4098,18.871 9.7258,18.962 C9.8158,18.987 9.9068,19 9.9998,19 C10.0928,19 10.1848,18.987 10.2748,18.962 C10.5898,18.871 17.9998,16.688 17.9998,11 L17.9998,4 C17.9998,3.554 17.7038,3.161 17.2748,3.038"
			}))
		},
		"./src/reddit/icons/svgs/Multireddit/index.tsx": function(e, t, s) {
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
			}, e), a.a.createElement("path", {
				d: "M17,5H6A1,1,0,0,0,5,6V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V6A1,1,0,0,0,17,5ZM7,7.5A.5.5,0,0,1,7.5,7h3a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5ZM15.5,16h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5H13a.5.5,0,0,1,0-1h2.5a.5.5,0,0,1,0,1Z"
			}), a.a.createElement("path", {
				d: "M6,4h9.47a2.09,2.09,0,0,1,.51.07V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H4.09A2.09,2.09,0,0,1,4,15.49V6A2,2,0,0,1,6,4Z"
			}))
		},
		"./src/reddit/icons/svgs/MyProfile/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M15,15.5 L5,15.5 C4.724,15.5 4.5,15.276 4.5,15 C4.5,12.755 6.326,10.929 8.571,10.929 L11.429,10.929 C13.674,10.929 15.5,12.755 15.5,15 C15.5,15.276 15.276,15.5 15,15.5 M10,4.5 C11.405,4.5 12.547,5.643 12.547,7.048 C12.547,8.452 11.405,9.595 10,9.595 C8.595,9.595 7.453,8.452 7.453,7.048 C7.453,5.643 8.595,4.5 10,4.5 M16,2 L4,2 C2.897,2 2,2.897 2,4 L2,16 C2,17.103 2.897,18 4,18 L16,18 C17.103,18 18,17.103 18,16 L18,4 C18,2.897 17.103,2 16,2"
			})))
		},
		"./src/reddit/icons/svgs/Night/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M15.992 14.898A5.014 5.014 0 0 1 12 10a5.014 5.014 0 0 1 3.992-4.899.998.998 0 0 0 .343-1.819A7.965 7.965 0 0 0 12 2c-4.41 0-8 3.588-8 8 0 4.411 3.59 8 8 8a7.966 7.966 0 0 0 4.335-1.283 1 1 0 0 0-.343-1.819"
			})))
		},
		"./src/reddit/icons/svgs/Notify/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M16 12.988c0 .554.449 1.002 1 1.002a1 1 0 110 2H3a1 1 0 110-2c.551 0 1-.448 1-1l.01-5.002A5.996 5.996 0 0110 2a5.997 5.997 0 015.99 5.99l.01 4.998zM8 16.99h4c0 1.103-.897 2-2 2s-2-.897-2-2z",
				fill: "inherit"
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
		"./src/reddit/icons/svgs/Pinmenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M17.65,1.58H2.35A2.29,2.29,0,0,0,0,3.82V16.17a2.3,2.3,0,0,0,2.35,2.25h15.3A2.29,2.29,0,0,0,20,16.18V3.82A2.29,2.29,0,0,0,17.65,1.58Zm1.17,14.2a1.59,1.59,0,0,1-1.58,1.59H5.59V2.63H17.24a1.59,1.59,0,0,1,1.59,1.59Z"
			}), a.a.createElement("path", {
				d: "M15.9,9.37H9.84l2.71-2.71a.63.63,0,0,0-.89-.9L7.87,9.55a.6.6,0,0,0-.14.21.66.66,0,0,0,0,.48.6.6,0,0,0,.14.21l3.79,3.78a.63.63,0,0,0,.89-.89L9.84,10.63H15.9a.63.63,0,0,0,0-1.26Z"
			}))
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
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
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
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
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
		"./src/reddit/icons/svgs/SnooNoEyes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
			})))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
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
				fill: e.color || Object(i.a)(e).bodyText
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = (s("./src/polyfill.ts"), s("./src/lib/performanceTimings/index.tsx")),
				r = s("./node_modules/@r/google-tag-manager/compiled.js"),
				o = s("./src/config.ts"),
				i = s("./node_modules/history/esm/history.js"),
				c = s("./node_modules/js-cookie/src/js.cookie.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				u = s.n(l),
				m = s("./node_modules/react-router-redux/es/index.js"),
				p = s("./node_modules/redux-thunk/es/index.js"),
				b = s("./node_modules/request-idle-callback/index.js"),
				h = s("./src/lib/browser/isIncognito.ts"),
				g = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/extractQueryParams/index.ts"),
				v = s("./src/lib/filterQueryParams/index.ts"),
				C = s("./src/lib/getParsedUserAgent/index.ts"),
				O = s("./src/lib/initializeClient/index.tsx"),
				y = s("./src/lib/matchRoute/index.ts"),
				x = s("./src/lib/performance.js"),
				P = s("./src/lib/reCaptchaEnterprise/index.ts"),
				E = s("./src/lib/safeJSONParse/index.ts"),
				j = s("./src/lib/serviceWorker/index.ts"),
				S = s("./src/reduxMiddleware/apiContext.ts"),
				w = s("./src/reduxMiddleware/gqlContext.ts"),
				_ = s("./src/telemetry/index.ts"),
				k = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/actions/apiRequestHeaders.ts"),
				I = s("./src/reddit/actions/chat/toggle.ts"),
				N = s("./src/reddit/actions/chat/unreadCount.ts"),
				T = s("./src/reddit/actions/emailCollection/index.ts"),
				R = s("./src/reddit/actions/emailVerification.ts"),
				L = s("./src/reddit/actions/googleOneTap/index.ts"),
				A = s("./src/reddit/actions/media.ts"),
				F = s("./src/reddit/actions/multireddit/index.ts"),
				D = s("./src/reddit/actions/notifications/loader.ts"),
				G = s("./src/reddit/actions/notifications/state.ts"),
				U = s("./src/reddit/actions/nps.ts"),
				B = s("./src/reddit/actions/platform.ts"),
				H = s("./src/reddit/actions/reCaptchaEnterprise.ts"),
				q = s("./src/reddit/actions/session.ts"),
				W = s("./src/reddit/actions/survey/index.ts"),
				V = s("./src/reddit/actions/theme.ts"),
				Q = s("./src/reddit/actions/toaster.ts"),
				z = s("./src/reddit/actions/users.ts"),
				Z = s("./node_modules/react-redux/es/index.js"),
				K = s("./node_modules/react-router/esm/react-router.js"),
				Y = s("./node_modules/reselect/es/index.js"),
				X = (s("./src/reddit/components/Root/redesignFont.less"), s("./assets/fonts/BentonSans/font.less"), s("./assets/fonts/IBMPlexSans/font.less"), s("./assets/fonts/NotoMono/font.less"), s("./assets/fonts/NotoSans/font.less"), s("./assets/fonts/VCR/font.less"), s("./src/reddit/components/Root/index.m.less")),
				J = s.n(X),
				$ = s("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				ee = s("./src/lib/doubleclickForPublishers/index.ts"),
				te = s("./src/reddit/components/TrackingHelper/index.tsx"),
				se = s("./src/reddit/helpers/trackers/ads.ts"),
				ne = s("./src/reddit/selectors/meta.ts");
			const ae = Object(Y.c)({
				region: ne.m
			});
			class re extends u.a.Component {
				constructor(e) {
					super(e), Object(ee.f)({
						limitDataProcessing: "CA" === this.props.region,
						onRequest: () => this.props.sendEvent(Object(se.b)()),
						onAdView: (e, t) => {
							Math.random() <= o.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(se.c)(e, t))
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
			var oe = Object(Z.b)(ae)(Object(te.c)(re)),
				ie = s("./src/reddit/components/AppRouter/index.tsx"),
				ce = s("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				de = s("./src/reddit/constants/shortcuts.ts"),
				le = s("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				ue = s.n(le);
			var me = e => {
					let {
						children: t
					} = e;
					return u.a.createElement("div", {
						className: ue.a.shortcutDiv,
						id: de.b,
						tabIndex: -1
					}, u.a.Children.only(t))
				},
				pe = s("./src/reddit/contexts/Buttons2020.ts"),
				be = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				he = s("./src/reddit/components/Header/Sparse.tsx"),
				ge = s("./src/reddit/components/ThemeProvider/index.tsx"),
				fe = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ve = s("./src/reddit/controls/Button/index.tsx"),
				Ce = s("./src/reddit/featureFlags/index.ts"),
				Oe = s("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				ye = s("./src/reddit/pages/InternalServerError/index.m.less"),
				xe = s.n(ye);
			const {
				fbt: Pe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ee = Object(Y.c)({
				showError: Ce.d.showVerboseErrors
			}), je = Object(Z.b)(Ee)(e => u.a.createElement(fe.a.Provider, {
				value: !1
			}, u.a.createElement(ge.b, {
				subredditName: ""
			}, u.a.createElement("div", null, u.a.createElement(he.a, {
				logoHref: "#",
				logoOnClick: () => window.location.reload(!0)
			}), u.a.createElement("div", {
				className: xe.a.container
			}, u.a.createElement("div", {
				className: xe.a.mainContent
			}, u.a.createElement(Oe.a, {
				className: xe.a.dizzySnoo
			}), u.a.createElement("h3", {
				className: xe.a.title
			}, Pe._("Sorry, for some reason reddit can't be reached.", null, {
				hk: "2yRKWG"
			})), u.a.createElement("div", {
				className: xe.a.subTitle
			}, Pe._("Give us a few minutes to fix the problem. Sorry!", null, {
				hk: "1c7Mg0"
			})), u.a.createElement(ve.i, {
				onClick: () => window.location.reload(!0)
			}, Pe._("Reload Page", null, {
				hk: "S79U1"
			})), e.showError && u.a.createElement("div", {
				className: xe.a.subTitle
			}, e.error.message)), u.a.createElement("div", {
				className: xe.a.topImageContainer
			}, u.a.createElement("img", {
				className: xe.a.image,
				src: "".concat(o.a.assetPath, "/img/error/star_pattern.png")
			})), u.a.createElement("div", {
				className: xe.a.bottomImageContainer
			}, u.a.createElement("img", {
				className: xe.a.image,
				src: "".concat(o.a.assetPath, "/img/error/half_planet.png")
			})))))));
			var Se = s("./src/reddit/constants/experiments.ts"),
				we = s("./src/reddit/helpers/chooseVariant/index.ts");

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ke = Object(Y.c)({
					theme: e => e.themes.current,
					isInButtons2020: e => Se.n.Enabled === Object(we.c)(e, {
						experimentEligibilitySelector: we.a,
						experimentName: Se.k
					})
				}),
				Me = Object(Z.b)(ke, {})(e => {
					let {
						children: t,
						isInButtons2020: s,
						theme: n
					} = e;
					const a = Object(be.a)({
						theme: n
					});
					return u.a.createElement(pe.a.Provider, {
						value: s
					}, u.a.createElement("div", {
						className: J.a.container,
						style: {
							"--background": a.body,
							"--canvas": a.canvas
						}
					}, t))
				});

			function Ie(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: s
					} = e;
					return u.a.createElement(te.a, null, u.a.createElement(Me, null, u.a.createElement(oe, null), u.a.createElement($.a, null), u.a.createElement(ce.a, null), u.a.createElement(me, null, u.a.createElement(t, null, u.a.createElement(K.d, {
						component: Ne(s)
					})))))
				}
				return u.a.createElement(je, {
					error: e.error
				})
			}
			const Ne = e => t => u.a.createElement(ie.b, _e({
				routes: e
			}, t));
			var Te = s("./src/reddit/constants/localStorage.ts"),
				Re = s("./src/reddit/selectors/user.ts"),
				Le = s("./node_modules/lodash/throttle.js"),
				Ae = s.n(Le),
				Fe = s("./src/reddit/helpers/localStorage/index.ts");
			const De = 1e3;
			class Ge extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = Ae()(() => Object(Fe.Z)(this.props.storageKey, this.props.value), De)
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
			const Ue = Object(Y.a)(Re.I, e => ({
				storageKey: Te.r,
				value: {},
				enabled: !e
			}));
			var Be = Object(Z.b)(Ue)(Ge);
			var He = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(Be, null)),
				qe = s("./src/reddit/constants/headers.ts"),
				We = s("./src/reddit/constants/history.ts"),
				Ve = s("./src/reddit/constants/jsapiEvents.ts"),
				Qe = s("./src/reddit/constants/parameters.ts"),
				ze = s("./src/reddit/constants/screenWidths.ts"),
				Ze = s("./src/reddit/contexts/AdminEvents.ts"),
				Ke = s("./src/reddit/contexts/ApiContext.tsx"),
				Ye = s("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				Xe = s("./node_modules/brcast/dist/brcast.es.js"),
				Je = s("./src/telemetry/helpers/sendEvent.ts"),
				$e = s("./src/reddit/selectors/runTimeEnvVars.ts");
			var et = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(Xe.a)([]);
					return {
						broadcaster: t,
						middleware: s => {
							const n = s.getState();
							return (Object($e.b)(n) || Object(Re.F)(n)) && (e = !0, Object(Je.c)(t)), n => a => {
								const r = n(a),
									o = s.getState();
								if (!Object($e.b)(o)) {
									const s = Object(Re.F)(o);
									e && !s ? (e = !1, Object(Je.c)(void 0), t.setState([])) : s && !e && (t.setState([]), Object(Je.c)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(Xe.a)([]),
					middleware: () => e => t => e(t)
				}),
				tt = s("./node_modules/lodash/debounce.js"),
				st = s.n(tt),
				nt = s("./src/lib/domUtils/index.ts");
			const at = 30 * g.eb;
			let rt = Date.now();
			const ot = () => {
					rt = Date.now()
				},
				it = !!Object(nt.f)() && {
					passive: !0
				};
			window.addEventListener("click", ot, !1), window.addEventListener("wheel", st()(ot, 250), it), window.addEventListener("mousemove", st()(ot, 250), it), window.addEventListener("keydown", st()(ot, 250), it);
			var ct = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - rt >= at ? (e.dispatch(q.h()), ot()) : ot()
					})), e => t => e(t)
				},
				dt = s("./node_modules/@reddit/onetrust-integration/dist/esm/index.js"),
				lt = s("./node_modules/lodash/pick.js"),
				ut = s.n(lt),
				mt = s("./src/reddit/actions/header.ts"),
				pt = s("./src/reddit/actions/preferences.ts"),
				bt = s("./src/reddit/constants/cookie.ts"),
				ht = s("./src/reddit/constants/preferences.ts");
			const gt = new Set([pt.f, pt.i, V.b, pt.c, pt.o, mt.d, mt.e, pt.r]);
			var ft = e => t => s => {
					const n = t(s);
					if (gt.has(s.type)) {
						const t = e.getState().user,
							s = {
								prefs: ut()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", ht.b, ht.d, ht.e]),
								language: t.language
							},
							n = new Date;
						n.setFullYear(n.getFullYear() + 2), Object(dt.b)(bt.j, btoa(JSON.stringify(s)), {
							expires: n,
							domain: o.a.cookieDomain
						})
					}
					return n
				},
				vt = s("./src/lib/fastdom/index.ts"),
				Ct = s("./src/reddit/actions/tabBadging.ts"),
				Ot = s("./src/reddit/selectors/chat.ts"),
				yt = s("./src/server/helpers/seoMetadata.tsx");
			var xt = "undefined" != typeof document ? e => t => s => {
					const n = t(s);
					if (s.type === B.e) {
						const t = e.getState(),
							n = Object(Re.H)(t),
							{
								meta: a
							} = s.payload;
						n ? ((e, t) => {
							const s = Object(Re.D)(e) || 0,
								n = Object(Ot.a)(e) + s;
							Object(Ct.b)(n, t)
						})(t, a.title) : vt.a.write(() => {
							document.title = a.title, Object(yt.b)(t, document)
						})
					}
					return n
				} : () => e => t => e(t),
				Pt = s("./src/reddit/helpers/survey/index.ts");
			var Et = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(Pt.b).filter(t => t === e).length)(t.type) && (Object(Fe.D)(Pt.b[t.type]), Object(Pt.c)().setState(Pt.b[t.type])), e(t)) : () => e => t => e(t);
			const jt = 5 * g.eb;
			var St = e => {
					const t = Ae()(() => {
						const t = e.getState().user.session,
							s = new Date(t.expires),
							n = new Date;
						s.getTime() - n.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(q.g())
					}, jt);
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
					return o.user.session && r(o.user.session), window.addEventListener("focus", a), window.addEventListener("touchend", a), document.body.addEventListener("mouseenter", a), e => t => (t.type !== q.a && t.type !== q.b && t.type !== q.c && t.type !== q.e || r(t.payload), t.type === q.d && (clearTimeout(s), s = null), e(t))
				},
				wt = s("./src/reddit/singleton/tracing/index.ts");
			var _t = e => e => t => {
					const s = () => e(t);
					return wt.b.isEnabled ? wt.b.recordLocalSpan(t.type, s) : e(t)
				},
				kt = s("./src/reddit/actions/frontpage.ts"),
				Mt = s("./src/reddit/actions/page.ts"),
				It = s("./src/reddit/actions/pages/profileComments.ts"),
				Nt = s("./src/reddit/actions/pages/profileOverview.ts"),
				Tt = s("./src/reddit/actions/pages/profilePosts.ts"),
				Rt = s("./src/reddit/actions/pages/search.ts"),
				Lt = s("./src/reddit/actions/pages/subreddit.ts"),
				At = s("./src/reddit/actions/search.ts"),
				Ft = s("./src/reddit/actions/subreddit.ts"),
				Dt = s("./src/reddit/actions/tracking.ts"),
				Gt = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				Ut = s("./src/reddit/helpers/history/index.ts"),
				Bt = s("./src/reddit/helpers/trackers/commentList.ts"),
				Ht = s("./src/reddit/helpers/trackers/postList.ts"),
				qt = s("./src/reddit/helpers/trackers/screenview.ts"),
				Wt = s("./src/reddit/selectors/platform.ts"),
				Vt = s("./src/reddit/selectors/subreddit.ts"),
				Qt = s("./src/reddit/helpers/routeKey/index.ts");
			var zt = e => t => s => {
					const n = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(Dt.c({
							routeKey: t
						}))
					};
					if (s.type === B.a) {
						const n = e.getState(),
							a = (n.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							o = Object(Vt.G)(n, a) || "",
							i = (n.subreddits.about[o] || {}).advertiserCategory;
						r.trigger("pageview", Object.assign(Object.assign({}, ut()(s.payload.location, "pathname", "search", "hash")), {
							subreddit: a,
							advertiserCategory: i
						}));
						const c = n.platform.currentPage && n.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(Qt.b)(c, n, Object(Gt.a)(n));
							if (e && _.c.has(e)) {
								const t = _.c.end(e);
								!Object(Wt.i)(n) && Object(Ut.b)(We.a.IsOverlay) || Object(qt.i)(c, n, k.TimerType.UserCancelled, t)
							}
						}
						const d = s.payload.routeMatch;
						if (!d) return t(s);
						const l = Object(Gt.a)(n, d),
							u = Object(Qt.b)(d, n, l);
						if (!u) return t(s);
						_.c.start(u)
					}
					const a = t(s);
					switch (s.type) {
						case Mt.g:
						case Nt.b:
						case Nt.e:
						case Tt.e:
						case It.e:
						case Lt.c: {
							const {
								key: e,
								token: t
							} = s.payload;
							t || n(e);
							break
						}
						case Rt.c: {
							const {
								key: e,
								tokens: t
							} = s.payload;
							t.posts || n(e);
							break
						}
						case kt.b:
						case Ft.i:
						case Tt.b: {
							const {
								key: t,
								postIds: a
							} = s.payload;
							n(t);
							const r = e.getState();
							if (a.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							Ht.j(r, t);
							break
						}
						case It.b: {
							const {
								key: t,
								commentIds: a
							} = s.payload;
							if (n(t), a.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							Bt.a(r, t);
							break
						}
						case At.c: {
							const {
								key: e
							} = s.payload;
							n(e);
							break
						}
					}
					return a
				},
				Zt = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Kt = s("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				Yt = s("./src/reddit/selectors/telemetry.ts");
			const Xt = e => t => Object.assign(Object.assign({}, Yt.defaults(t)), {
				action: "leave",
				actionInfo: Yt.actionInfo(t, {
					reason: e
				}),
				noun: "app",
				source: "global"
			});
			let Jt = null;
			const $t = () => {
				Jt && window.clearTimeout(Jt), Jt = null
			};
			var es = e => {
					Jt = window.setTimeout(() => {
						$t(), Object(_.a)((e => t => Object.assign(Object.assign({}, Yt.defaults(t)), {
							action: "view",
							noun: "heartbeat",
							source: "global",
							timer: {
								type: k.TimerType.GoodVisit,
								millis: e
							}
						}))(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", $t)
				},
				ts = s("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				ss = s("./src/reddit/featureFlags/utils.ts");
			const ns = Object(ss.a)(() => "undefined" != typeof fetch, e => !!Object(we.c)(e, {
				experimentEligibilitySelector: we.a,
				experimentName: Se.t
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var as = s("./node_modules/crypto-js/sha256.js"),
				rs = s.n(as),
				os = s("./node_modules/uuid/v4.js"),
				is = s.n(os),
				cs = s("./src/lib/addQueryParams/index.ts"),
				ds = s("./src/lib/constants/euCookiePolicy.ts");
			const ls = Object(ss.e)(ss.g, ss.h, e => !!Object(we.c)(e, {
				experimentEligibilitySelector: Object(ss.d)(Object(ss.b)(...ds.b)),
				experimentName: "show_white_ops"
			}));
			var us = s("./src/lib/permanentCookieOptions.ts");
			const ms = e => {
				if (!e) return;
				const t = (d.a.get(bt.h) || "").split(",");
				if (!t.includes(e)) {
					t.unshift(e);
					const s = t.slice(0, 10).join(","),
						n = Object(us.a)();
					Object(dt.b)(bt.h, s, n)
				}
			};
			var ps = s("./src/lib/loadWithRetries/index.ts"),
				bs = s("./src/reddit/layout/page/Listing/index.tsx"),
				hs = s("./src/reddit/models/Toast/index.ts"),
				gs = s("./src/reddit/reducers/index.ts"),
				fs = s("./src/reddit/routes/index.ts");
			var vs = s("./src/reddit/selectors/experiments/googleOneTap.ts");
			const Cs = e => Object(we.c)(e, {
					experimentName: Se.M,
					experimentEligibilitySelector: Os
				}),
				Os = e => !Object(ne.d)(e);
			Object(Y.a)(Cs, e => e === Se.C.Active);
			var ys;
			! function(e) {
				e.Active = "html_response_streaming.active", e.Control = "html_response_streaming.control_1"
			}(ys || (ys = {}));
			const xs = {
					displayDelay: 15,
					displayOnRoutes: [g.Bb.SUBREDDIT, g.Bb.COMMENTS],
					experimentName: Se.rb,
					experimentVariant: Se.ub.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				Ps = e => {
					const {
						base_url: t
					} = Object(Yt.requestWithParams)(e), s = Object(Wt.b)(e), n = s && s.urlParams.partialPostId, a = s && s.urlParams.subredditName;
					return Object.assign(Object.assign(Object.assign({}, t && {
						rbl: t
					}), a && {
						s: a
					}), n && {
						p: n
					})
				},
				Es = e => {
					if ((((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return t.experimentOverrides[s] === n
						})(xs, e) || (e => {
							let {
								samplingRate: t,
								seed: s
							} = e;
							return !!s && 0 === Math.floor(s * t)
						})(xs)) && ((e, t) => {
							let {
								displayOnRoutes: s
							} = e;
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && s.includes(n)
						})(xs, e) && ((e, t) => {
							let {
								isSEOOnly: s
							} = e;
							return !s || t.meta.isSessionSeo
						})(xs, e) && ((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return Object(we.c)(t, {
								experimentName: s,
								experimentEligibilitySelector: we.a
							}) === n
						})(xs, e)) return {
						displayDelay: xs.displayDelay,
						externalVars: Ps(e)
					}
				};
			var js = s("./src/reddit/singleton/EventSystem.ts"),
				Ss = s("./src/lib/initializeClient/installReducer.ts"),
				ws = s("./src/reddit/reducers/features/categories/index.ts"),
				_s = s("./src/lib/makeActionCreator/index.ts"),
				ks = s("./src/lib/sentry/index.ts"),
				Ms = s("./src/reddit/actions/publicAccessNetwork/userSettings.ts"),
				Is = s("./src/reddit/actions/global/constants.ts");
			Object(Ss.a)({
				features: {
					categories: ws.a
				}
			});
			const Ns = Object(_s.a)(Is.a);
			Object(a.e)(a.b.EntryPointStart);
			const Ts = Object(S.a)({
					actionDispatchers: {
						reddaidReceived: z.s,
						loidReceived: z.q,
						sessionTrackerReceived: z.x
					},
					authHeaders: {
						[qe.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						reddaidReceived: z.d,
						loidReceived: z.b,
						sessionTrackerReceived: z.k,
						userAuthenticated: q.c,
						userLoggedOut: q.d,
						userReauthenticated: q.e,
						headersReceived: M.a
					},
					onBeforeRequestFactory: ts.a,
					statsAppName: g.l.Redesign
				}),
				Rs = Object(w.a)(Ts.apiContext),
				Ls = et();
			let As;
			Object(O.a)({
				reducerMap: gs.a,
				routes: fs.a,
				apiContext: Ts.apiContext,
				gqlContext: Rs.gqlContext,
				appFactory: (e, t) => u.a.createElement(Ze.a.Provider, {
					value: Ls.broadcaster
				}, u.a.createElement(Ke.a.Provider, {
					value: {
						apiContext: Ts.apiContext,
						gqlContext: Rs.gqlContext
					}
				}, u.a.createElement(Ye.b, null, u.a.createElement(Ie, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(He, null)))),
				appName: g.l.Redesign,
				history: Object(i.a)({
					getUserConfirmation(e, t) {
						const s = As;
						if (!s) return;
						s.dispatch(Object(B.k)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), s.dispatch(Object(B.j)())
							}
						}))
					}
				}),
				customMiddleware: [p.a.withExtraArgument({
					routes: fs.a,
					apiContext: Ts.apiContext,
					gqlContext: Rs.gqlContext
				}), Ls.middleware, ct, Ts.middleware, Rs.middleware, St, ft, _t, zt, xt, Et],
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
					loading: u.a.createElement(bs.a, {
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
							const t = o.a.mediaUrl;
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(A.j)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: "t3_".concat(e.data.id36)
							}))
						}), window.addEventListener("beforeunload", () => {
							const e = n.getState();
							Object(j.b)("sendV2Event", Xt("tab_closed")(e))
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || n.dispatch(Object(B.g)());
					const a = Object(Re.T)(n.getState());
					n.dispatch(Object(V.c)({
						nightmode: a
					}));
					const r = (e => e.tracing.traceId)(n.getState());
					if (r && (e => Object(we.c)(e, {
							experimentEligibilitySelector: we.a,
							experimentName: Se.q
						}) === Se.w.Enabled)(n.getState())) {
						wt.b.enableTracing(!0);
						const e = wt.b.createTraceFromId(r);
						wt.b.setParent(e)
					}
					n.dispatch(Object(B.h)(s));
					t.listen((e, t) => {
						const a = Object(y.a)(Object(i.e)(e), s);
						n.dispatch(Object(B.i)(e, t, a))
					});
					const c = n.getState(),
						{
							currentPage: d
						} = c.platform;
					if (d) {
						const e = [];
						Object(Wt.j)(c) && e.push(Qe.e), e.length > 0 && n.dispatch(Object(m.c)(Object(v.a)(d.url, e)))
					}
					return Zt.a.initialize(), async function(e) {
						if (!ls(e)) return;
						const t = e.user.account ? rs()(e.user.account.id).toString() : void 0,
							s = document.createElement("script");
						s.src = Object(cs.a)("https://s.udkcrj.com/ag/386183/clear.js", {
							dt: "3861831591810830724000",
							pd: "acc",
							mo: 0,
							et: 0,
							ti: is()(),
							ui: t,
							si: "d2x"
						}), document.head.appendChild(s)
					}(n.getState()), async function(e) {
						ns(e) && Object(dt.a)({
							clientId: Object(ss.g)(e) ? "14003311-a669-490b-a682-56294eb02bf2-test" : "14003311-a669-490b-a682-56294eb02bf2"
						})
					}(n.getState()), {
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
					As = d;
					t.listen((e, t) => {
						const s = d.getState(),
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
							i = Object(Vt.G)(s, o) || "";
						ms(i), js.a.publish(Ve.c, r, document)
					});
					const u = d.getState(),
						m = (u.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						p = Object(Vt.G)(u, m) || "",
						O = (u.subreddits.about[p] || {}).advertiserCategory;
					r.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: o.a.gtmContainerId,
						payload: {
							user: u.user.account ? u.user.account.id : u.user.loid.loid
						}
					}), r.trigger("pageview", {
						subreddit: m,
						advertiserCategory: O
					}), d.dispatch((e => async (t, s) => {
						t(Object(Ms.a)());
						const n = s();
						n.user.loid.loid || n.meta.isBot || ks.c.withScope(e => {
							Object(ks.a)(e, {
								serverLogging: !1
							}), ks.c.captureMessage("User has no LOID set")
						});
						const {
							localStorageData: a
						} = e;
						a && t(Ns(a))
					})({
						localStorageData: l
					})), Object(vs.f)(u) && Object(L.d)(u), d.dispatch(Object(L.c)()), window.addEventListener("load", () => {
						const e = d.getState(),
							{
								currentPage: r
							} = e.platform,
							o = (r.urlParams.subredditName || "").toLowerCase(),
							i = Object(Vt.G)(e, o) || "";
						if (ms(i), r && r.meta) {
							const s = r.meta.name;
							if (Object(_.b)(g.l.Redesign, {
									page: s,
									type: "rum"
								}), Object(C.c)(e.meta.userAgent) && window.innerWidth > ze.b) {
								const t = Object(a.f)(c);
								x.a && x.a.timing && wt.b.isEnabled && (wt.b.recordPerformanceTimings("".concat(s, "_time_to_first_byte"), x.a.timing.fetchStart, x.a.timing.responseStart), wt.b.recordPerformanceTimings("".concat(s, "_time_to_interactive"), x.a.timing.fetchStart, x.a.timing.domInteractive));
								const n = [];
								let r = !0;
								if (Object(Wt.h)(e)) {
									const t = Object(Kt.a)(e);
									n.push(Object(Kt.c)(t))
								}
								const o = (e => {
									switch (Cs(e)) {
										case Se.C.Active:
											return ys.Active;
										case Se.y.Control1:
											return ys.Control;
										default:
											return
									}
								})(e);
								o && (n.push(o), r = !1);
								const i = {
									isLoggedIn: Object(Re.I)(e),
									name: s,
									statsdPathsForExperiments: n
								};
								Object(a.g)(i, t, r)
							}
							const o = x.a.timing.domInteractive - x.a.timing.navigationStart;
							Object(qt.i)(r.routeMatch, d.getState(), k.TimerType.Initial, o);
							const i = Object(f.a)(window.location.href);
							i && i.get(Qe.a) && history.replaceState(history.state, "", Object(v.a)(window.location.href, [Qe.a])), Object(E.a)(i.get(Qe.y)) && d.dispatch(Object(Q.e)({
								kind: hs.b.SuccessCommunity,
								text: n.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), i.get(Qe.z) && (d.dispatch(Object(R.a)(i.get(Qe.z))), history.replaceState(history.state, "", Object(v.a)(window.location.href, [Qe.z])));
							let l = !1;
							if ((Object(Ut.b)(We.a.JustLoggedIn) || i && i.get(Qe.o) && Object(E.a)(i.get(Qe.o))) && (d.dispatch(Object(Q.e)({
									text: n.fbt._("Successfully logged in!", null, {
										hk: "2POUVB"
									})
								})), l = !0, Object(Ut.c)(We.a.JustLoggedIn), history.replaceState(history.state, "", Object(v.a)(window.location.href, [Qe.o]))), Object(Ut.b)(We.a.JustLoggedOut) && (l = !0, Object(Ut.c)(We.a.JustLoggedOut)), Object(G.b)(e), !1 !== Fe.E()) {
								let s;
								Object(vs.a)(e) && (s = () => {
									const {
										dispatch: e
									} = d;
									t.listen(() => e(Object(L.b)())), e(Object(L.b)())
								}), Object(D.a)().then(e => e.requestNotificationsPermissions).then(e => d.dispatch(e(l, !1, s)))
							}
							if (s === g.Bb.MULTIREDDIT && r.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = r.routeMatch.match.params;
								d.dispatch(Object(F.h)({
									multiredditName: e,
									username: t
								}))
							}
							d.dispatch(Object(T.c)())
						}
						Object(Re.I)(d.getState()) && (d.dispatch(Object(N.d)()), d.dispatch(Object(I.d)())), Object(b.requestIdleCallback)(async () => {
							d.dispatch(Object(U.d)()), await Object(h.a)() && (e => Object(_.a)(Object.assign(Object.assign({}, Yt.defaults(e)), {
								source: "global",
								action: "view",
								noun: "empty"
							})))(d.getState());
							const e = async () => {
								const e = d.getState(),
									t = Es(e);
								t && (await (async e => {
									return (await Object(ps.a)(() => s.e("UserZoomIntegration").then(s.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), n && n())
							}, n = t.listen((t, s) => {
								"POP" !== s && e()
							});
							e()
						}), document.addEventListener("visibilitychange", () => {
							if ("visible" !== document.visibilityState && (Fe.lb(Date.now()), Object(_.a)(Xt("tab_backgrounded")(d.getState()))), "visible" === document.visibilityState) {
								const e = Fe.n(),
									t = Fe.B();
								if (t && e) {
									const s = Date.now() - t;
									Object(_.a)((e => (t, s, n) => Object.assign(Object.assign({}, Yt.defaults(t)), {
										action: "refocus",
										actionInfo: Yt.actionInfo(t, {
											reason: e
										}),
										noun: "ad",
										source: "post",
										post: Yt.post(t, n),
										adClick: {
											landingPageDuration: s
										}
									}))("tab_backgrounded")(d.getState(), s, e))
								}(t || e) && (Fe.K(), Fe.M())
							}
						}), Object(ne.j)(d.getState()) && es(d.getState), d.dispatch(Object(W.c)())
					}), window.history.scrollRestoration = "manual", js.a.attachStore(d), d.dispatch(Object(H.b)(P.a.PageLoad))
				},
				raven: {
					tags: {
						project: g.l.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1
			})
		},
		"./src/reddit/models/EmailSettings/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
				}(n || (n = {}))
		},
		"./src/reddit/models/GoodContent/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = {
				isBlacklistedSubredditsExcluded: !0,
				isNsfwExcluded: !0,
				maxRating: "R"
			}
		},
		"./src/reddit/models/Sso/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Apple = "https://appleid.apple.com", e.Google = "https://accounts.google.com"
				}(n || (n = {}))
		},
		"./src/reddit/pages/InternalServerError/index.m.less": function(e, t, s) {
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
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/acknowledgements",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Acknowledgements",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Acknowledgements").then(s.bind(null, "./src/reddit/pages/Acknowledgements/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Acknowledgements/index.tsx"
					}
				}),
				c = {
					action: r.n,
					chunk: a.p.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.ACKNOWLEDGEMENTS
					},
					path: o
				};
			t.a = c
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
					action: r.n,
					chunk: a.p.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.APPEAL
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
					action: r.p,
					chunk: a.p.COINS,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.COINS
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
					action: r.o,
					chunk: a.p.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.COINS_MOBILE
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki~reddit-components-Governance-Tra~2c7f90aa"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), s.e("CollectionCommentsPage")]).then(s.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
					chunk: a.p.COLLECTION_COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.COLLECTION_COMMENTS
					},
					prefetches: [a.p.FRONTPAGE, a.p.COMMENTS_PAGE, a.p.SUBREDDIT]
				},
				u = Object.assign(Object.assign({}, l), {
					path: c
				}),
				m = Object.assign(Object.assign({}, l), {
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki~reddit-components-Governance-Tra~2c7f90aa"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), s.e("CommentsPage")]).then(s.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
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
					action: r.t,
					chunk: a.p.COMMENTS_PAGE,
					component: o,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [a.p.FRONTPAGE, a.p.SUBREDDIT]
				}),
				u = [l(a.Bb.COMMENTS, i), l(a.Bb.DUPLICATES, c), l(a.Bb.COMMENTS, d)];
			t.a = u
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("FramedGild~GildModal"), s.e("FramedGild")]).then(s.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
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
					action: r.u,
					chunk: a.p.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.FRAMED_GILD
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
					importAsync: () => s.e("FramedModal").then(s.bind(null, "./src/reddit/pages/FramedModalPage/index.tsx")),
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
					action: r.v,
					chunk: a.p.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.FRAMED_MODAL
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
			const c = Object.keys(o.O).map(e => o.O[e]).join("|"),
				d = "/",
				l = "/:sort(".concat(c, ")?"),
				u = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Frontpage"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), s.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Frontpage~SubredditWiki"), s.e("Frontpage~FrontpageSidebar"), s.e("Frontpage")]).then(s.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
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
					action: i.y,
					chunk: o.p.FRONTPAGE,
					component: u,
					exact: !0,
					prefetches: [o.p.COMMENTS_PAGE, o.p.SUBREDDIT]
				},
				p = Object.assign(Object.assign({}, m), {
					path: d,
					meta: {
						name: o.Bb.INDEX
					}
				}),
				b = Object.assign(Object.assign({}, m), {
					path: l,
					meta: {
						name: o.Bb.LISTING
					}
				}),
				h = [p, b];
			t.a = h
		},
		"./src/reddit/routes/geotagging/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/topic.ts"),
				o = s("./src/reddit/selectors/topic.ts");
			const i = "/label/subreddits",
				c = Object(n.a)({
					resolved: {},
					chunkName: () => "Geotagging",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Geotagging~Topic"), s.e("Geotagging")]).then(s.bind(null, "./src/reddit/pages/Geotagging/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Geotagging/index.tsx"
					}
				}),
				d = {
					action: e => async (e, t, s) => {
						let n, {
							gqlContext: a
						} = s; {
							const e = t();
							if (Object(o.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						try {
							n = await Object(r.g)(a(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch (c) {
							return void e(Object(r.i)())
						}
						if (!n) return;
						const i = t();
						e(Object(r.j)(Object.assign(Object.assign({}, n), {
							key: "tagging",
							meta: i.meta
						})))
					},
					chunk: a.p.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: a.Bb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = d
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
				d = Object.keys(o.L).map(e => o.L[e]).join("|"),
				l = ["/message/:pageName(".concat(d, ")"), "/message/messages/:messageId"],
				u = {
					action: i.A,
					chunk: o.p.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: o.Bb.INBOX_PAGES
					},
					path: l
				};
			t.a = u
		},
		"./src/reddit/routes/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/routes/collectionCommentsPage/index.ts"),
				a = s("./src/reddit/routes/acknowledgements/index.ts"),
				r = s("./src/reddit/routes/appeal/index.ts"),
				o = s("./src/reddit/routes/coins/index.ts"),
				i = s("./src/reddit/routes/coinsMobile/index.ts"),
				c = s("./src/reddit/routes/commentsPage/index.ts"),
				d = (s("./node_modules/@loadable/component/dist/loadable.esm.js"), s("./src/lib/constants/index.ts"));
			s("./src/reddit/actions/page.ts");
			var l = [],
				u = s("./node_modules/react-router-redux/es/index.js"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				b = s("./src/reddit/helpers/trackers/emailVerification.ts"),
				h = s("./src/reddit/models/EmailSettings/index.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				f = s("./src/telemetry/index.ts"),
				v = s("./src/reddit/actions/emailVerification.ts");
			var C = {
					action: e => async (t, s) => {
						await t(m.z());
						const n = s(),
							a = e.params.verificationToken,
							r = e.queryParams && e.queryParams.source;
						if (r && Object(f.a)(Object(b.b)(r)(n)), !Object(g.I)(n)) return Object(p.a)(t, n);
						const o = await t(Object(v.b)(a));
						o === h.a.Success && Object(f.a)(Object(b.d)()(n)), t(Object(u.c)("/?verifiedEmail=".concat(o)))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				O = s("./src/lib/addQueryParams/index.ts");
			var y = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							queryParams: r
						} = e;
						await t(Object(u.c)(Object(O.a)("/", r)))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [d.p.COMMENTS_PAGE, d.p.FRONTPAGE]
				},
				x = s("./src/reddit/routes/framedGild/index.ts"),
				P = s("./src/reddit/routes/framedModal/index.ts"),
				E = s("./src/reddit/routes/frontpage/index.ts"),
				j = s("./src/reddit/routes/geotagging/index.ts"),
				S = s("./src/reddit/routes/inbox/index.ts"),
				w = s("./src/reddit/routes/meta/index.ts"),
				_ = s("./src/reddit/routes/moderationPages/index.ts"),
				k = s("./src/reddit/routes/modListing/index.ts"),
				M = s("./src/reddit/routes/modQueue/index.ts"),
				I = s("./src/reddit/routes/multireddit/index.ts"),
				N = s("./src/reddit/routes/notificationsInbox/index.ts"),
				T = s("./src/reddit/routes/postCreation/constants.ts");
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
			var L = [{
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
				A = s("./src/reddit/routes/postCreation/index.ts"),
				F = s("./src/reddit/routes/postDraft/index.ts"),
				D = s("./src/reddit/routes/premium/index.ts"),
				G = s("./src/reddit/routes/profileComments/index.ts"),
				U = s("./src/reddit/endpoints/me/index.ts");
			var B = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							rest: r
						} = e.params, {
							queryParams: o
						} = e, i = await Object(U.a)(a());
						if (!(i.ok && i.body && i.body.account)) {
							const e = s();
							return void Object(p.a)(t, e)
						}
						const c = i.body.account.displayText,
							d = r ? "/user/".concat(c, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(r)) : "/user/".concat(c, "/"),
							l = Object(O.a)(d, o);
						await t(Object(u.c)(l))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				H = s("./src/reddit/routes/profileModSettings/index.ts"),
				q = s("./src/reddit/routes/profileOverview/index.ts"),
				W = s("./src/reddit/routes/profilePosts/index.ts"),
				V = s("./src/reddit/routes/profilePrivate/index.ts");
			var Q = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(n)) : "/user/".concat(s, "/"), o = Object(O.a)(r, a);
						await t(Object(u.c)(o))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				z = s("./src/reddit/routes/profileSnoobuilder/index.ts");
			var Z = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/posts/").concat(n) : "/user/".concat(s, "/posts"), o = Object(O.a)(r, a);
						t(Object(u.c)(o))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				K = s("./src/reddit/routes/publicAccessNetwork/index.ts"),
				Y = s("./src/reddit/routes/report/index.ts"),
				X = s("./src/reddit/routes/searchResults/index.ts"),
				J = s("./src/reddit/routes/settings/index.ts");
			var $ = [{
					action: e => async t => {
						const {
							page: s
						} = e.params, n = s && "blocked" === s ? "/settings/privacy" : "/settings/";
						await t(Object(u.c)(n))
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
				ee = s("./src/reddit/routes/subreddit/index.ts"),
				te = s("./src/reddit/routes/subredditCreation/index.ts"),
				se = s("./src/reddit/routes/subredditLeaderboard/index.ts"),
				ne = s("./src/reddit/routes/subredditWiki/index.ts"),
				ae = s("./src/reddit/routes/topic/index.ts");
			const re = [a.a, r.a, o.a, i.a, B, Q, Z, ...n.a, ...c.a, C, ...E.a, j.a, D.a, x.a, P.a, A.a, F.a, ...L, y, ...w.a, I.a, M.a, k.c, N.a, S.a, G.a, H.a, q.a, W.a, z.a, V.a, K.a, ...J.a, ...$, X.a, ...ne.a, ae.a, ee.a, te.a, se.a, _.a, Y.a, ...l];
			t.a = re
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				o = s("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts");
			const i = {
					action: r.a,
					chunk: a.p.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
					component: Object(n.a)({
						resolved: {},
						chunkName: () => "CommunityPointsLearnMore",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => Promise.all([s.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~e74e7afb"), s.e("CommunityPointsLearnMore")]).then(s.bind(null, "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return s(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: a.Bb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE
					},
					path: ["/community-points/", "/vault/", "/web/community-points/"]
				},
				c = {
					action: o.a,
					chunk: a.p.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(n.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~MembershipPaywallPage"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("MembershipPaywallPage")]).then(s.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
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
					exact: !0,
					meta: {
						name: a.Bb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				};
			t.a = [i, c]
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
					importAsync: () => Promise.all([s.e("vendors~ModQueuePages"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), s.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), s.e("ChatPost~ModQueuePages"), s.e("ModQueue~ModQueuePages"), s.e("ModQueuePages")]).then(s.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
				c = Object.keys(o.hb).map(e => o.hb[e]).join("|"),
				d = "/r/mod/about/:pageName(".concat(c, ")?"),
				l = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("ModQueue~ModQueuePages"), s.e("ModQueue")]).then(s.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested);
						await r(e)(t, n, a)
					},
					chunk: o.p.MODQUEUE_PAGES,
					component: i,
					exact: !0,
					meta: {
						name: o.Bb.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = l
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return g
			}));
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./src/lib/constants/index.ts");
			const c = Object.keys(i.Qb).map(e => i.Qb[e]).join("|"),
				d = [i.Qb.Awards],
				l = d.join("|"),
				u = e => "/".concat(e, "/about/scheduledposts"),
				m = e => "/".concat(e, "/about/eventposts"),
				p = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
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
				b = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"],
				h = ["/r/:subredditName/about", "/r/:subredditName/about/:pageName(".concat(c, ")"), "/user/:profileName/about/:pageName(".concat(l, ")"), ...b],
				g = e => !!Object(o.h)(e, {
					path: "/r/:subredditName/about"
				}),
				f = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested);
						await r(e)(t, n, a)
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~Multireddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), s.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), s.e("Multireddit")]).then(s.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
				l = Object.keys(o.O).map(e => "".concat(d, "/:sort(").concat(o.O[e], ")?")),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(o.O).map(e => "".concat(u, "/:sort(").concat(o.O[e], ")?")),
				p = [d, u, ...l, ...m],
				b = {
					action: i.C,
					chunk: o.p.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.Bb.MULTIREDDIT
					},
					path: p,
					prefetches: [o.p.SUBREDDIT]
				};
			t.a = b
		},
		"./src/reddit/routes/notificationsInbox/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/notificationsInbox.ts");
			const o = "/notifications/",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "NotificationsInbox",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("NotificationsInbox").then(s.bind(null, "./src/reddit/pages/NotificationsInbox/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/NotificationsInbox/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: a.p.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.NOTIFICATIONS_INBOX
					},
					path: o,
					prefetches: [a.p.FRONTPAGE]
				};
			t.a = c
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("PostDraft")]).then(s.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
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
					chunk: a.p.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.POST_DRAFT
					},
					path: o,
					prefetches: [a.p.POST_DRAFT]
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
					action: r.D,
					chunk: a.p.PREMIUM,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.PREMIUM
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), s.e("ProfileComments")]).then(s.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					chunk: a.p.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.PROFILE_COMMENTS
					},
					path: o,
					prefetches: [a.p.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([s.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), s.e("ProfileModeration")]).then(s.bind(null, "./src/reddit/pages/ProfileModSettings/index.tsx")),
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
					chunk: a.p.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.PROFILE_MODERATION
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("ProfileOverview")]).then(s.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					chunk: a.p.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.PROFILE_OVERVIEW
					},
					path: o,
					prefetches: [a.p.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), s.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfilePosts")]).then(s.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
					chunk: a.p.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.PROFILE_POSTS
					},
					path: o,
					prefetches: [a.p.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
						const r = await Promise.all([s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested);
						await r(e)(t, n, a)
					},
					chunk: o.p.PROFILE_PRIVATE,
					component: c,
					exact: !0,
					meta: {
						name: o.Bb.PROFILE_PRIVATE
					},
					path: l,
					prefetches: [o.p.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
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
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested);
						await r(e)(t, n, a)
					},
					chunk: a.p.PROFILE_SNOOBUILDER,
					component: o,
					exact: !0,
					meta: {
						name: a.Bb.PROFILE_SNOOBUILDER
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
					importAsync: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("LiveVideoPlayer~PublicAccessNetwork"), s.e("PublicAccessNetwork")]).then(s.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
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
					action: r.E,
					chunk: a.p.PUBLIC_ACCESS_NETWORK,
					component: o,
					exact: !0,
					meta: {
						name: a.Bb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [a.p.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/report/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts");
			const r = "/report",
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
					chunk: a.p.REPORT_PAGE,
					component: o,
					exact: !0,
					meta: {
						name: a.Bb.REPORT
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
					importAsync: () => Promise.all([s.e("vendors~SearchResults"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), s.e("SearchResults")]).then(s.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
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
					chunk: a.p.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.SEARCH_RESULTS
					},
					path: o,
					prefetches: [a.p.FRONTPAGE, a.p.SUBREDDIT, a.p.COMMENTS_PAGE]
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
			const d = Object.keys(o.Ob).map(e => o.Ob[e]).join("|"),
				l = [{
					action: c.a,
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~e74e7afb"), s.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), s.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki"), s.e("Settings~reddit-components-ProfileIdCard"), s.e("Settings")]).then(s.bind(null, "./src/reddit/pages/Settings/index.tsx")),
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
					chunk: o.p.SETTINGS,
					exact: !0,
					meta: {
						name: o.Bb.SETTINGS
					},
					path: "/settings/:page(".concat(d, ")?")
				}, {
					action: i.H,
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
					chunk: o.p.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: o.Bb.USER_DATA_REQUEST
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki~reddit-components-Governance-Tra~2c7f90aa"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), s.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Subreddit")]).then(s.bind(null, "./src/reddit/pages/Subreddit/index.tsx")),
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
				d = Object.keys(o.O).map(e => "/r/:subredditName/:sort(".concat(o.O[e], ")?")),
				l = ["/r/:subredditName", ...d],
				u = {
					action: i.l,
					chunk: o.p.SUBREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.Bb.SUBREDDIT
					},
					path: l,
					prefetches: [o.p.COMMENTS_PAGE, o.p.FRONTPAGE]
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
					importAsync: () => Promise.all([s.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), s.e("SubredditCreation~SubredditInlineEditing"), s.e("SubredditCreation")]).then(s.bind(null, "./src/reddit/pages/SubredditCreation/index.tsx")),
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
					chunk: a.p.SUBREDDIT_CREATION,
					exact: !0,
					meta: {
						name: a.Bb.SUBREDDIT_CREATION
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
					action: r.b,
					chunk: a.p.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.SUBREDDIT_LEADERBOARD
					},
					path: o,
					prefetches: [a.p.FRONTPAGE]
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki~reddit-components-Governance-Tra~2c7f90aa"), s.e("vendors~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki"), s.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), s.e("Frontpage~SubredditWiki"), s.e("IdCard~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
					chunk: r.p.EMPTY,
					exact: !0,
					meta: {
						name: r.Bb.SUBREDDIT_WIKI
					},
					path: d
				}, m = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki~reddit-components-Governance-Tra~2c7f90aa"), s.e("vendors~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki"), s.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), s.e("Frontpage~SubredditWiki"), s.e("IdCard~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested);
						await r(e)(t, n, a)
					},
					chunk: r.p.SUBREDDIT_WIKI,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.SUBREDDIT_WIKI
					},
					path: c,
					prefetches: [r.p.SUBREDDIT]
				};
			t.a = [u, m]
		},
		"./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/wiki.ts"),
				o = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				i = s("./src/reddit/routes/moderationPages/index.ts");
			t.a = (e, t) => {
				const s = t.wikiSubRoute === r.m.Settings,
					n = Object(o.a)(t, Object(i.c)(e) || s),
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~83e43315"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~edc6d07c"), s.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic"), s.e("Geotagging~Topic"), s.e("Topic")]).then(s.bind(null, "./src/reddit/pages/Topic/index.tsx")),
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
					action: r.k,
					chunk: a.p.TOPIC,
					component: o,
					exact: !0,
					meta: {
						name: a.Bb.TOPIC
					},
					prefetches: [a.p.COMMENTS_PAGE, a.p.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "c", (function() {
				return g
			}));
			var n = s("./src/config.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/reddit/constants/accountManager.ts"),
				i = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				d = s("./src/reddit/selectors/experiments/googleOneTap.ts"),
				l = s("./src/reddit/helpers/chooseVariant/index.ts"),
				u = s("./src/reddit/selectors/user.ts");
			const m = Object(a.a)(u.H, u.I, (e, t) => !e && !t);
			var p = s("./src/reddit/selectors/responsiveSettings.ts");
			const b = e => e.accountManagerModalData.actionSource,
				h = e => e.accountManagerModalData.redirectUrl,
				g = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, b, c.a, p.a, d.b, e => Object(l.c)(e, {
					experimentEligibilitySelector: m,
					experimentName: i.pc
				}), (e, t, s, a, c, d, l) => {
					let u = "".concat(n.a.accountManagerOrigin).concat(e);
					return l && (u = Object(r.a)(u, {
						["experiment_".concat(i.pc)]: l
					})), e === o.c.GoogleOneTap ? Object(r.a)(u, {
						[i.J]: d
					}) : (a && (u = Object(r.a)(u, {
						[i.S]: a,
						uiMode: t
					})), c && (u = Object(r.a)(u, {
						mweb_responsive_settings: "treatment"
					})), e === o.c.Index || e === o.c.ChangePassword ? u : u = Object(r.a)(u, {
						actionSource: s
					}))
				})
		},
		"./src/reddit/selectors/experiments/layer.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => n.Fb.Enabled === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.Cb
				}),
				o = e => n.Eb.Enabled === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.Bb
				}),
				i = e => n.Gb.Enabled === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.Db
				})
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => Object(r.F)(e) || !(n.Cc.Holdout === Object(a.c)(e, {
				experimentEligibilitySelector: a.a,
				experimentName: n.zc
			}))
		},
		"./src/reddit/selectors/experiments/uiSimplification.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/featureFlags/utils.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = ["AU", "CA", "GB", "US"],
				i = new Set([n.vb.AllItems, n.vb.TrendingSearch]),
				c = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: Object(a.d)(Object(a.b)(...o)),
						experimentName: n.wb
					});
					return i.has(t)
				},
				d = e => n.vb.AllItems === Object(r.c)(e, {
					experimentEligibilitySelector: Object(a.d)(Object(a.b)(...o)),
					experimentName: n.wb
				})
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "s", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "i", (function() {
				return h
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "p", (function() {
				return f
			})), s.d(t, "q", (function() {
				return v
			})), s.d(t, "o", (function() {
				return C
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "t", (function() {
				return x
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "r", (function() {
				return j
			})), s.d(t, "n", (function() {
				return S
			})), s.d(t, "k", (function() {
				return w
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				a = s("./src/reddit/endpoints/governance/crypto.ts");
			const r = [],
				o = {},
				i = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				c = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = x(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				d = (e, t) => {
					const s = O(e, t);
					if (s) return s.mainHeader
				},
				l = (e, t) => {
					const s = O(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				u = (e, t) => {
					const s = O(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : o
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				p = (e, t) => {
					const s = m(e, t),
						n = s && s.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				b = (e, t) => {
					const s = m(e, t);
					return s && s.amount || "0"
				},
				h = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				g = (e, t) => {
					const s = Object(n.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || r
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				C = (e, t) => {
					const s = j(e, t);
					return s && s.decimals ? "1" + "0".repeat(s.decimals) : "1"
				},
				O = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				y = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				x = (e, t) => {
					const s = y(e, t);
					return s && s.walletProvider
				},
				P = (e, t) => {
					const s = x(e, t),
						n = y(e, t);
					return s && s.provider || n && n.provider
				},
				E = (e, t) => {
					const s = P(e, t);
					return s === a.a.Ethereum || s === a.a.Rinkeby || s === a.a.EthTraderEthereum || s === a.a.EthTraderRinkeby
				},
				j = (e, t) => {
					const s = x(e, t),
						n = P(e, t);
					if (s && !s.inTransition && n === a.a.Stellar) return {
						address: s.extra && s.extra.issuerAddress || "",
						decimals: s.extra && s.extra.decimals || 7,
						symbol: s.extra && s.extra.token || "PHOTON"
					};
					const r = s && s.extra && s.extra.contracts,
						o = r && r.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				S = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = x(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				w = (e, t) => {
					const s = y(e, t);
					return !!s && !!s.walletProvider && !s.walletProvider.inTransition
				}
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
		"./src/reddit/selectors/sso.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/Settings/modalIds.ts"),
				r = s("./src/reddit/models/Sso/index.ts"),
				o = s("./src/reddit/selectors/activeModalId.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const c = Object(n.a)(i.lb, e => !(!e || !e.length)),
				d = Object(n.a)(c, i.x, (e, t) => e && !t),
				l = Object(n.a)(i.lb, e => e && e.find(e => e === r.a.Apple)),
				u = Object(n.a)(i.lb, e => e && e.find(e => e === r.a.Google)),
				m = Object(n.a)(o.a, e => !!e && [a.b, a.d, a.e, a.f].includes(e))
		},
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/subredditLeaderboard.ts"),
				a = s("./src/reddit/selectors/category.ts");
			const r = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				o = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				i = (e, t) => t === n.k ? n.j : t === n.i ? n.h : e || n.a,
				c = (e, t) => {
					const s = e.subreddits.rankings,
						n = t && Object(a.f)(e, {
							categoryName: t
						}),
						r = s[i(n && n.id || null, t)];
					return !(!r || !r.length)
				}
		},
		"./src/reddit/selectors/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.trending.models
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322", "vendors~Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~c822ce19", "vendors~InFeedChaining~PostCreation~Reddit~StandalonePostPage~SubredditPremiumBadgeHovercardTooltip", "vendors~Chat~Governance~Reddit", "vendors~Governance~Reddit", "AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc", "Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d", "Chat~Governance~Reddit", "Governance~ModListing~Reddit", "Governance~InFeedChaining~Reddit", "Governance~Reddit~reddit-components-MediumPost", "Governance~Reddit", "Reddit~reddit-components-MediumPost", "ModListing~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.de3483802abc0bcc5d95.js.map