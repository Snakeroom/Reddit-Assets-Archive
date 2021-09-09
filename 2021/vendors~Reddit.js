// https://www.redditstatic.com/desktop2x/vendors~Reddit.baa89a7cb266adc0352a.js
// Retrieved at 9/9/2021, 3:40:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Reddit"], {
		"./node_modules/@r/frames/compiled.js": function(e, t, r) {
			"use strict";
			(function(e) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = arguments,
					n = ".*",
					o = ".postMessage",
					a = {
						targetOrigin: "*"
					},
					i = /\..+$/;

				function s(e) {
					return new RegExp("\\.(?:" + e.join("|") + ")$")
				}

				function l(e) {
					return new RegExp("^http(s)?:\\/\\/" + e.join("|") + "$", "i")
				}
				var u = [n],
					d = l(u),
					c = [o],
					f = s(c),
					p = {},
					m = !1;

				function y(t, r, n) {
					e.addEventListener ? e.addEventListener(t, r, n) : e.attachEvent && e.attachEvent("on" + t, r)
				}

				function v(t, r) {
					e.removeEventListener ? e.removeEventListener(t, r) : e.detachEvent && e.detachEvent("on" + t, r)
				}

				function h(e) {
					return /\*/.test(e)
				}
				var g = t.postMessage = function(e, t, r) {
						var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						i.test(t) || (t += o);
						var s = n;
						Object.keys(a).forEach((function(e) {
							s[e] = a[e]
						})), e.postMessage(JSON.stringify({
							type: t,
							data: r,
							defaultedOptions: s
						}), s.targetOrigin)
					},
					b = t.receiveMessage = function(e, t, r, n) {
						"string" == typeof e && (n = r, r = t, t = e, e = null), n = n || void 0;
						var o = function(t) {
							for (var o = arguments.length, a = Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
							e && e !== t.source && e.contentWindow !== t.source || r.apply(n, [t].concat(a))
						};
						return y(t, o), {
							off: function() {
								v(t, o)
							}
						}
					},
					_ = (t.receiveMessageOnce = function(e, t, n, o) {
						var a = b(e, t, (function() {
							n && n.apply(void 0, r), a.off()
						}), o);
						return a
					}, t.removePostMessageOrigin = function(e) {
						var t = u.indexOf(e); - 1 !== t && (u.splice(t, 1), d = l(u))
					}),
					j = e.CustomEvent;
				if ("undefined" != typeof window && "function" != typeof j) {
					var S = {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					(j = function(e, t) {
						t = t || S;
						var r = document.createEvent("CustomEvent");
						return r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r
					}).prototype = e.Event.prototype
				}
				t.addPostMessageOrigin = function(e) {
					h(e) ? u = [n] : -1 === u.indexOf(e) && (_(n), u.push(e), d = l(u))
				};

				function O(t) {
					if (t.origin === e.location.origin || d.test(t.origin) || "null" === t.origin) {
						var r = {};
						try {
							r = JSON.parse(t.data)
						} catch (t) {}
						var n = r.type;
						if (f.test(n)) {
							var o = n.split(".", 2)[1];
							if (p[o]) p[o].targets.forEach((function(e) {
								return g(e, n, r.data, r.options)
							}));
							var a = new j(n, {
								detail: r.data
							});
							a.source = t.source, e.dispatchEvent(a)
						}
					}
				}
				var w = t.listen = function(e) {
					-1 === c.indexOf(e) && (c.push(e), f = s(c)), m || (y("message", O), m = !0)
				};
				t.stopListening = function(e) {
					var t = c.indexOf(e); - 1 !== t && (c.splice(t, 1), c.length ? f = s(c) : (v("message", O), m = !1))
				}, t.proxy = function(e, t) {
					w(e), Array.isArray(t) || (t = [t]);
					var r = p[e];
					r ? r.targets = [].concat(r.targets, t) : r = {
						targets: t
					}, p[e] = r
				}
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/compiled.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.setup = t.trigger = t.getLocation = void 0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				o = r("./node_modules/@r/google-tag-manager/node_modules/uuid/index.js"),
				a = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
					return t.default = e, t
				}(r("./node_modules/@r/frames/compiled.js"));
			var i = "gtm-" + (0, o.v4)(),
				s = !1,
				l = [],
				u = function() {
					var e = document.getElementById(i);
					return e && e.contentWindow ? e : null
				},
				d = t.getLocation = function() {
					return {
						href: location.href,
						hostname: location.hostname,
						origin: location.origin,
						pathname: location.pathname || "/",
						search: location.search.replace(/^\?/, ""),
						hash: location.hash.replace(/^#/, "")
					}
				},
				c = t.trigger = function(e, t) {
					var r = u();
					r && s ? (t && a.postMessage(r.contentWindow, "data.gtm", t), a.postMessage(r.contentWindow, "event.gtm", {
						event: e
					})) : function(e, t) {
						l.push({
							eventName: e,
							payload: t
						})
					}(e, t)
				},
				f = function() {
					if (u() && s) {
						var e = l.slice();
						l = [], e.forEach((function(e) {
							var t = e.eventName,
								r = e.payload;
							return c(t, r)
						}))
					}
				};
			t.setup = function(e) {
				var t = e.containerId,
					r = e.jailUrl,
					o = e.payload;
				if (t)
					if (r) {
						a.listen("gtm"), a.receiveMessageOnce("loaded.gtm", (function() {
							s = !0, a.stopListening("gtm")
						}));
						var l = document.createElement("iframe");
						l.style.display = "none", l.id = i, l.name = JSON.stringify(n({
							referrer: document.referrer
						}, d(), o)), l.src = r + "?id=" + t, l.onload = f, document.body.appendChild(l)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/index.js": function(e, t, r) {
			var n = r("./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js"),
				o = r("./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js"),
				a = o;
			a.v1 = n, a.v4 = o, e.exports = a
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, t) {
			for (var r = [], n = 0; n < 256; ++n) r[n] = (n + 256).toString(16).substr(1);
			e.exports = function(e, t) {
				var n = t || 0,
					o = r;
				return o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]]
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, t, r) {
			(function(t) {
				var r, n = t.crypto || t.msCrypto;
				if (n && n.getRandomValues) {
					var o = new Uint8Array(16);
					r = function() {
						return n.getRandomValues(o), o
					}
				}
				if (!r) {
					var a = new Array(16);
					r = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), a[t] = e >>> ((3 & t) << 3) & 255;
						return a
					}
				}
				e.exports = r
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js": function(e, t, r) {
			var n = r("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				o = r("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				a = n(),
				i = [1 | a[0], a[1], a[2], a[3], a[4], a[5]],
				s = 16383 & (a[6] << 8 | a[7]),
				l = 0,
				u = 0;
			e.exports = function(e, t, r) {
				var n = t && r || 0,
					a = t || [],
					d = void 0 !== (e = e || {}).clockseq ? e.clockseq : s,
					c = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : u + 1,
					p = c - l + (f - u) / 1e4;
				if (p < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (p < 0 || c > l) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				l = c, u = f, s = d;
				var m = (1e4 * (268435455 & (c += 122192928e5)) + f) % 4294967296;
				a[n++] = m >>> 24 & 255, a[n++] = m >>> 16 & 255, a[n++] = m >>> 8 & 255, a[n++] = 255 & m;
				var y = c / 4294967296 * 1e4 & 268435455;
				a[n++] = y >>> 8 & 255, a[n++] = 255 & y, a[n++] = y >>> 24 & 15 | 16, a[n++] = y >>> 16 & 255, a[n++] = d >>> 8 | 128, a[n++] = 255 & d;
				for (var v = e.node || i, h = 0; h < 6; ++h) a[n + h] = v[h];
				return t || o(a)
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js": function(e, t, r) {
			var n = r("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				o = r("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, t, r) {
				var a = t && r || 0;
				"string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
				var i = (e = e || {}).random || (e.rng || n)();
				if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t)
					for (var s = 0; s < 16; ++s) t[a + s] = i[s];
				return t || o(i)
			}
		},
		"./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js": function(e, t, r) {
			"use strict";
			const n = {
				de: {
					"*": {
						popular: "beliebt",
						all: "alle"
					}
				},
				mx: {
					"*": {
						popular: "popular",
						all: "todo"
					}
				},
				fr: {
					"*": {
						popular: "populaire",
						all: "toute"
					}
				},
				ca: {
					fr: {
						popular: "populaire",
						all: "toute"
					},
					"*": {
						popular: "popular",
						all: "all"
					}
				}
			};
			var o = {
					"": "en",
					fr: "fr"
				},
				a = {
					"": "fr",
					de: "de",
					it: "it"
				},
				i = {
					"": "de"
				},
				s = {
					"": "fr"
				},
				l = {
					"": "es"
				},
				u = {
					ca: o,
					ch: a,
					de: i,
					fr: s,
					mx: l
				};
			const d = Object.freeze({
					__proto__: null,
					default: {}
				}),
				c = Object.freeze({
					__proto__: null,
					ca: o,
					ch: a,
					de: i,
					fr: s,
					mx: l,
					default: u
				}),
				f = ["juan_test", "juan_test2", "whatssnoo", "redditedp", "grahamisms", "snootography", "reddit_product"],
				p = (e, t, r) => {
					if (t && !r) return !0;
					if (!(t in e)) return !1;
					if (2 != r.length) return !1;
					return r in e[t]
				},
				m = (e, t) => {
					return !!e && (!!(void 0 === t || "" === t) || 2 == t.length && t in e)
				},
				y = e => f.includes(e) || f.includes(e.toLowerCase());
			var v;
			! function(e) {
				e.All = "all", e.Popular = "popular", e.SubredditCreation = "subredditCreation", e.SubredditLeaderboard = "subredditLeaderboard"
			}(v || (v = {}));
			const h = (e, t, r, o) => {
					o = o || "*";
					const a = "*" === (r = r || "*"),
						i = r in n,
						s = i && o in n[r],
						l = e.toLowerCase() === t;
					return !(!a || !l) || !(!i || !s) && e.toLowerCase() === n[r][o][t]
				},
				g = (e, t, r) => h(e, v.Popular, t, r),
				b = (e, t, r) => t && r ? e.replace(`/${t}/${r}/`, `/${t}/`) : r ? e.replace(`//${r}/`, "/") : e,
				_ = (e, t, r) => {
					const n = `/${t}`,
						o = `${n}/${r}`,
						a = e.startsWith(`${o}/`),
						i = e.startsWith(`${o}?`),
						s = e.startsWith(`${n}/`),
						l = e.startsWith(`${n}?`),
						u = e === o,
						d = e === n;
					return r && a ? e.replace(`${o}/`, "/") : r && (u || i) ? e.replace(o, "/") : s ? e.replace(`${n}/`, "/") : d || l ? e.replace(n, "/") : e
				};
			var j;
			! function(e) {
				e[e.Permanent = 301] = "Permanent", e[e.Temporary = 307] = "Temporary", e[e.NotFound = 404] = "NotFound", e[e.PageGone = 410] = "PageGone"
			}(j || (j = {}));
			const S = (e, t, r) => {
				const n = `/${t}/${r}`,
					o = `/${t}`,
					a = e.startsWith(o),
					i = e.startsWith(n);
				return t && r && !i ? n + e : t && !a ? o + e : e
			};
			var O = {
				buildSubredditUrl: (e, t) => {
					t.userIsAdmin = !!t.userIsAdmin, t.countrySitesAdminOnly = !!t.countrySitesAdminOnly, !t.enabledCountries && t.userIsAdmin ? t.enabledCountries = c : t.enabledCountries || (t.enabledCountries = d);
					const r = t.countrySitesAdminOnly && t.userIsAdmin;
					if (!t.countrySitesEnabled) return e.hardcodedPath;
					if (!e.permalink && !t.userIsAdmin) return e.hardcodedPath;
					let n = e.hardcodedPath;
					if (e.permalink && (n = e.permalink), !m(t.enabledCountries, e.countryCode)) return n;
					if (!p(t.enabledCountries, e.countryCode, e.languageCode)) return n;
					const o = e.subredditName && y(e.subredditName);
					return r && !o ? n : t.userIsAdmin ? S(n, e.countryCode, e.languageCode) : n
				},
				countries: d,
				evalCountrySiteRedirect: (e, t) => {
					t.userIsAdmin = !!t.userIsAdmin, t.countrySitesAdminOnly = !!t.countrySitesAdminOnly, !t.enabledCountries && t.userIsAdmin ? t.enabledCountries = c : t.enabledCountries || (t.enabledCountries = d);
					const r = "" === e.countryCode,
						n = "" === e.languageCode,
						o = b(e.currentUrl, e.countryCode, e.languageCode),
						a = _(e.currentUrl, e.countryCode, e.languageCode),
						i = m(t.enabledCountries, e.countryCode),
						s = !!i && p(t.enabledCountries, e.countryCode, e.languageCode);
					return r && !n ? {
						redirect: !0,
						url: o
					} : r ? {
						redirect: !1,
						url: e.currentUrl
					} : (!i || n || s) && i && t.countrySitesEnabled ? t.countrySitesAdminOnly ? ((e, t, r) => {
						if (!t.userIsAdmin) return {
							redirect: !0,
							url: r
						};
						const n = g(e.subredditName, e.countryCode, e.languageCode),
							o = g(e.subredditName, e.countryCode, e.languageCode),
							a = n || o || e.subredditName && y(e.subredditName);
						return e.subredditName && !a ? {
							redirect: !0,
							url: r.replace(`/r/${e.subredditName}/`, "/")
						} : {
							redirect: !1,
							url: e.currentUrl
						}
					})(e, t, a) : {
						redirect: !1,
						url: e.currentUrl
					} : {
						redirect: !0,
						url: a
					}
				},
				evalSubredditRedirect: (e, t) => {
					const r = "" === e.countryCode,
						n = "" === e.languageCode,
						o = "" === t.languageCode,
						a = "" === t.countryCode,
						i = e.countryCode === t.countryCode,
						s = e.languageCode === t.languageCode;
					if (i && s) return {
						redirect: !1,
						url: e.currentUrl
					};
					let l = n ? e.countryCode : `${e.countryCode}/${e.languageCode}`,
						u = o ? t.countryCode : `${t.countryCode}/${t.languageCode}`;
					return a || (u = "/" + u), r || (l = "/" + l), {
						redirect: !0,
						url: e.currentUrl.replace(`${l}/r/`, `${u}/r/`),
						statusCode: j.Permanent
					}
				},
				generateRedditPagesRoutes: (e, t) => {
					const r = e.countrySitesEnabled && e.countrySitesAdminOnly && !e.userIsAdmin;
					if (!e.countrySitesEnabled || r) return [];
					t = null != t ? t : n;
					let o = [];
					for (const a in n) {
						if (!("" === a || "*" === a))
							for (const e in t[a]) {
								const r = "" === e || "*" === e ? `/${a}/r/` : `/${a}/${e}/r/`;
								o.push(r + t[a][e][v.All]), o.push(r + t[a][e][v.Popular])
							}
					}
					return o
				},
				isAllPage: (e, t, r) => h(e, v.All, t, r),
				isPopularPage: g,
				pageTranslations: n,
				testingCountries: c
			};
			t.a = O
		},
		"./node_modules/lodash/isEqualWith.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseIsEqual.js");
			e.exports = function(e, t, r) {
				var o = (r = "function" == typeof r ? r : void 0) ? r(e, t) : void 0;
				return void 0 === o ? n(e, t, void 0, r) : !!o
			}
		},
		"./node_modules/lodash/negate.js": function(e, t) {
			var r = "Expected a function";
			e.exports = function(e) {
				if ("function" != typeof e) throw new TypeError(r);
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0:
							return !e.call(this);
						case 1:
							return !e.call(this, t[0]);
						case 2:
							return !e.call(this, t[0], t[1]);
						case 3:
							return !e.call(this, t[0], t[1], t[2])
					}
					return !e.apply(this, t)
				}
			}
		},
		"./node_modules/lodash/omitBy.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseIteratee.js"),
				o = r("./node_modules/lodash/negate.js"),
				a = r("./node_modules/lodash/pickBy.js");
			e.exports = function(e, t) {
				return a(e, o(n(t)))
			}
		},
		"./node_modules/lodash/union.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseFlatten.js"),
				o = r("./node_modules/lodash/_baseRest.js"),
				a = r("./node_modules/lodash/_baseUniq.js"),
				i = r("./node_modules/lodash/isArrayLikeObject.js"),
				s = o((function(e) {
					return a(n(e, 1, i, !0))
				}));
			e.exports = s
		},
		"./node_modules/react-motion/lib/Motion.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r), n && e(t, n), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var i = a(r("./node_modules/react-motion/lib/mapToZero.js")),
				s = a(r("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(r("./node_modules/react-motion/lib/stepper.js")),
				u = a(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				d = a(r("./node_modules/raf/index.js")),
				c = a(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				f = a(r("./node_modules/react/index.js")),
				p = a(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				m = 1e3 / 60,
				y = function(e) {
					function t(r) {
						var o = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, r), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								r = o.state,
								a = r.currentStyle,
								i = r.currentVelocity,
								s = r.lastIdealStyle,
								l = r.lastIdealVelocity;
							for (var u in e)
								if (Object.prototype.hasOwnProperty.call(e, u)) {
									var d = e[u];
									"number" == typeof d && (t || (t = !0, a = n({}, a), i = n({}, i), s = n({}, s), l = n({}, l)), a[u] = d, i[u] = 0, s[u] = d, l[u] = 0)
								} t && o.setState({
								currentStyle: a,
								currentVelocity: i,
								lastIdealStyle: s,
								lastIdealVelocity: l
							})
						}, this.startAnimationIfNecessary = function() {
							o.animationID = d.default((function(e) {
								var t = o.props.style;
								if (c.default(o.state.currentStyle, t, o.state.currentVelocity)) return o.wasAnimating && o.props.onRest && o.props.onRest(), o.animationID = null, o.wasAnimating = !1, void(o.accumulatedTime = 0);
								o.wasAnimating = !0;
								var r = e || u.default(),
									n = r - o.prevTime;
								if (o.prevTime = r, o.accumulatedTime = o.accumulatedTime + n, o.accumulatedTime > 10 * m && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
								var a = (o.accumulatedTime - Math.floor(o.accumulatedTime / m) * m) / m,
									i = Math.floor(o.accumulatedTime / m),
									s = {},
									d = {},
									f = {},
									p = {};
								for (var y in t)
									if (Object.prototype.hasOwnProperty.call(t, y)) {
										var v = t[y];
										if ("number" == typeof v) f[y] = v, p[y] = 0, s[y] = v, d[y] = 0;
										else {
											for (var h = o.state.lastIdealStyle[y], g = o.state.lastIdealVelocity[y], b = 0; b < i; b++) {
												var _ = l.default(m / 1e3, h, g, v.val, v.stiffness, v.damping, v.precision);
												h = _[0], g = _[1]
											}
											var j = l.default(m / 1e3, h, g, v.val, v.stiffness, v.damping, v.precision),
												S = j[0],
												O = j[1];
											f[y] = h + (S - h) * a, p[y] = g + (O - g) * a, s[y] = h, d[y] = g
										}
									} o.animationID = null, o.accumulatedTime -= i * m, o.setState({
									currentStyle: f,
									currentVelocity: p,
									lastIdealStyle: s,
									lastIdealVelocity: d
								}), o.unreadPropStyle = null, o.startAnimationIfNecessary()
							}))
						}, this.state = this.defaultState()
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), o(t, null, [{
						key: "propTypes",
						value: {
							defaultStyle: p.default.objectOf(p.default.number),
							style: p.default.objectOf(p.default.oneOfType([p.default.number, p.default.object])).isRequired,
							children: p.default.func.isRequired,
							onRest: p.default.func
						},
						enumerable: !0
					}]), t.prototype.defaultState = function() {
						var e = this.props,
							t = e.defaultStyle,
							r = e.style,
							n = t || s.default(r),
							o = i.default(n);
						return {
							currentStyle: n,
							currentVelocity: o,
							lastIdealStyle: n,
							lastIdealVelocity: o
						}
					}, t.prototype.componentDidMount = function() {
						this.prevTime = u.default(), this.startAnimationIfNecessary()
					}, t.prototype.componentWillReceiveProps = function(e) {
						null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = u.default(), this.startAnimationIfNecessary())
					}, t.prototype.componentWillUnmount = function() {
						null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
					}, t.prototype.render = function() {
						var e = this.props.children(this.state.currentStyle);
						return e && f.default.Children.only(e)
					}, t
				}(f.default.Component);
			t.default = y, e.exports = t.default
		},
		"./node_modules/react-motion/lib/StaggeredMotion.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r), n && e(t, n), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var i = a(r("./node_modules/react-motion/lib/mapToZero.js")),
				s = a(r("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(r("./node_modules/react-motion/lib/stepper.js")),
				u = a(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				d = a(r("./node_modules/raf/index.js")),
				c = a(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				f = a(r("./node_modules/react/index.js")),
				p = a(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				m = 1e3 / 60;
			var y = function(e) {
				function t(r) {
					var o = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = o.state, r = t.currentStyles, a = t.currentVelocities, i = t.lastIdealStyles, s = t.lastIdealVelocities, l = !1, u = 0; u < e.length; u++) {
							var d = e[u],
								c = !1;
							for (var f in d)
								if (Object.prototype.hasOwnProperty.call(d, f)) {
									var p = d[f];
									"number" == typeof p && (c || (c = !0, l = !0, r[u] = n({}, r[u]), a[u] = n({}, a[u]), i[u] = n({}, i[u]), s[u] = n({}, s[u])), r[u][f] = p, a[u][f] = 0, i[u][f] = p, s[u][f] = 0)
								}
						}
						l && o.setState({
							currentStyles: r,
							currentVelocities: a,
							lastIdealStyles: i,
							lastIdealVelocities: s
						})
					}, this.startAnimationIfNecessary = function() {
						o.animationID = d.default((function(e) {
							var t = o.props.styles(o.state.lastIdealStyles);
							if (function(e, t, r) {
									for (var n = 0; n < e.length; n++)
										if (!c.default(e[n], t[n], r[n])) return !1;
									return !0
								}(o.state.currentStyles, t, o.state.currentVelocities)) return o.animationID = null, void(o.accumulatedTime = 0);
							var r = e || u.default(),
								n = r - o.prevTime;
							if (o.prevTime = r, o.accumulatedTime = o.accumulatedTime + n, o.accumulatedTime > 10 * m && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
							for (var a = (o.accumulatedTime - Math.floor(o.accumulatedTime / m) * m) / m, i = Math.floor(o.accumulatedTime / m), s = [], d = [], f = [], p = [], y = 0; y < t.length; y++) {
								var v = t[y],
									h = {},
									g = {},
									b = {},
									_ = {};
								for (var j in v)
									if (Object.prototype.hasOwnProperty.call(v, j)) {
										var S = v[j];
										if ("number" == typeof S) h[j] = S, g[j] = 0, b[j] = S, _[j] = 0;
										else {
											for (var O = o.state.lastIdealStyles[y][j], w = o.state.lastIdealVelocities[y][j], P = 0; P < i; P++) {
												var I = l.default(m / 1e3, O, w, S.val, S.stiffness, S.damping, S.precision);
												O = I[0], w = I[1]
											}
											var T = l.default(m / 1e3, O, w, S.val, S.stiffness, S.damping, S.precision),
												C = T[0],
												E = T[1];
											h[j] = O + (C - O) * a, g[j] = w + (E - w) * a, b[j] = O, _[j] = w
										}
									} f[y] = h, p[y] = g, s[y] = b, d[y] = _
							}
							o.animationID = null, o.accumulatedTime -= i * m, o.setState({
								currentStyles: f,
								currentVelocities: p,
								lastIdealStyles: s,
								lastIdealVelocities: d
							}), o.unreadPropStyles = null, o.startAnimationIfNecessary()
						}))
					}, this.state = this.defaultState()
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), o(t, null, [{
					key: "propTypes",
					value: {
						defaultStyles: p.default.arrayOf(p.default.objectOf(p.default.number)),
						styles: p.default.func.isRequired,
						children: p.default.func.isRequired
					},
					enumerable: !0
				}]), t.prototype.defaultState = function() {
					var e = this.props,
						t = e.defaultStyles,
						r = e.styles,
						n = t || r().map(s.default),
						o = n.map((function(e) {
							return i.default(e)
						}));
					return {
						currentStyles: n,
						currentVelocities: o,
						lastIdealStyles: n,
						lastIdealVelocities: o
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = u.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = u.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = this.props.children(this.state.currentStyles);
					return e && f.default.Children.only(e)
				}, t
			}(f.default.Component);
			t.default = y, e.exports = t.default
		},
		"./node_modules/react-motion/lib/TransitionMotion.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r), n && e(t, n), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var i = a(r("./node_modules/react-motion/lib/mapToZero.js")),
				s = a(r("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(r("./node_modules/react-motion/lib/stepper.js")),
				u = a(r("./node_modules/react-motion/lib/mergeDiff.js")),
				d = a(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				c = a(r("./node_modules/raf/index.js")),
				f = a(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = a(r("./node_modules/react/index.js")),
				m = a(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				y = 1e3 / 60;

			function v(e, t, r) {
				var n = t;
				return null == n ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: r[t]
					}
				})) : e.map((function(e, t) {
					for (var o = 0; o < n.length; o++)
						if (n[o].key === e.key) return {
							key: n[o].key,
							data: n[o].data,
							style: r[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: r[t]
					}
				}))
			}

			function h(e, t, r, n, o, a, s, l, d) {
				for (var c = u.default(n, o, (function(e, n) {
						var o = t(n);
						return null == o ? (r({
							key: n.key,
							data: n.data
						}), null) : f.default(a[e], o, s[e]) ? (r({
							key: n.key,
							data: n.data
						}), null) : {
							key: n.key,
							data: n.data,
							style: o
						}
					})), p = [], m = [], y = [], v = [], h = 0; h < c.length; h++) {
					for (var g = c[h], b = null, _ = 0; _ < n.length; _++)
						if (n[_].key === g.key) {
							b = _;
							break
						} if (null == b) {
						var j = e(g);
						p[h] = j, y[h] = j;
						var S = i.default(g.style);
						m[h] = S, v[h] = S
					} else p[h] = a[b], y[h] = l[b], m[h] = s[b], v[h] = d[b]
				}
				return [c, p, m, y, v]
			}
			var g = function(e) {
				function t(r) {
					var o = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = h(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, e, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), r = t[0], a = t[1], i = t[2], s = t[3], l = t[4], u = 0; u < e.length; u++) {
							var d = e[u].style,
								c = !1;
							for (var f in d)
								if (Object.prototype.hasOwnProperty.call(d, f)) {
									var p = d[f];
									"number" == typeof p && (c || (c = !0, a[u] = n({}, a[u]), i[u] = n({}, i[u]), s[u] = n({}, s[u]), l[u] = n({}, l[u]), r[u] = {
										key: r[u].key,
										data: r[u].data,
										style: n({}, r[u].style)
									}), a[u][f] = p, i[u][f] = 0, s[u][f] = p, l[u][f] = 0, r[u].style[f] = p)
								}
						}
						o.setState({
							currentStyles: a,
							currentVelocities: i,
							mergedPropsStyles: r,
							lastIdealStyles: s,
							lastIdealVelocities: l
						})
					}, this.startAnimationIfNecessary = function() {
						o.unmounting || (o.animationID = c.default((function(e) {
							if (!o.unmounting) {
								var t = o.props.styles,
									r = "function" == typeof t ? t(v(o.state.mergedPropsStyles, o.unreadPropStyles, o.state.lastIdealStyles)) : t;
								if (function(e, t, r, n) {
										if (n.length !== t.length) return !1;
										for (var o = 0; o < n.length; o++)
											if (n[o].key !== t[o].key) return !1;
										for (o = 0; o < n.length; o++)
											if (!f.default(e[o], t[o].style, r[o])) return !1;
										return !0
									}(o.state.currentStyles, r, o.state.currentVelocities, o.state.mergedPropsStyles)) return o.animationID = null, void(o.accumulatedTime = 0);
								var n = e || d.default(),
									a = n - o.prevTime;
								if (o.prevTime = n, o.accumulatedTime = o.accumulatedTime + a, o.accumulatedTime > 10 * y && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
								for (var i = (o.accumulatedTime - Math.floor(o.accumulatedTime / y) * y) / y, s = Math.floor(o.accumulatedTime / y), u = h(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, r, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), c = u[0], p = u[1], m = u[2], g = u[3], b = u[4], _ = 0; _ < c.length; _++) {
									var j = c[_].style,
										S = {},
										O = {},
										w = {},
										P = {};
									for (var I in j)
										if (Object.prototype.hasOwnProperty.call(j, I)) {
											var T = j[I];
											if ("number" == typeof T) S[I] = T, O[I] = 0, w[I] = T, P[I] = 0;
											else {
												for (var C = g[_][I], E = b[_][I], k = 0; k < s; k++) {
													var A = l.default(y / 1e3, C, E, T.val, T.stiffness, T.damping, T.precision);
													C = A[0], E = A[1]
												}
												var x = l.default(y / 1e3, C, E, T.val, T.stiffness, T.damping, T.precision),
													M = x[0],
													D = x[1];
												S[I] = C + (M - C) * i, O[I] = E + (D - E) * i, w[I] = C, P[I] = E
											}
										} g[_] = w, b[_] = P, p[_] = S, m[_] = O
								}
								o.animationID = null, o.accumulatedTime -= s * y, o.setState({
									currentStyles: p,
									currentVelocities: m,
									lastIdealStyles: g,
									lastIdealVelocities: b,
									mergedPropsStyles: c
								}), o.unreadPropStyles = null, o.startAnimationIfNecessary()
							}
						})))
					}, this.state = this.defaultState()
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), o(t, null, [{
					key: "propTypes",
					value: {
						defaultStyles: m.default.arrayOf(m.default.shape({
							key: m.default.string.isRequired,
							data: m.default.any,
							style: m.default.objectOf(m.default.number).isRequired
						})),
						styles: m.default.oneOfType([m.default.func, m.default.arrayOf(m.default.shape({
							key: m.default.string.isRequired,
							data: m.default.any,
							style: m.default.objectOf(m.default.oneOfType([m.default.number, m.default.object])).isRequired
						}))]).isRequired,
						children: m.default.func.isRequired,
						willEnter: m.default.func,
						willLeave: m.default.func,
						didLeave: m.default.func
					},
					enumerable: !0
				}, {
					key: "defaultProps",
					value: {
						willEnter: function(e) {
							return s.default(e.style)
						},
						willLeave: function() {
							return null
						},
						didLeave: function() {}
					},
					enumerable: !0
				}]), t.prototype.defaultState = function() {
					var e = this.props,
						t = e.defaultStyles,
						r = e.styles,
						n = e.willEnter,
						o = e.willLeave,
						a = e.didLeave,
						l = "function" == typeof r ? r(t) : r,
						u = void 0;
					u = null == t ? l : t.map((function(e) {
						for (var t = 0; t < l.length; t++)
							if (l[t].key === e.key) return l[t];
						return e
					}));
					var d = null == t ? l.map((function(e) {
							return s.default(e.style)
						})) : t.map((function(e) {
							return s.default(e.style)
						})),
						c = null == t ? l.map((function(e) {
							return i.default(e.style)
						})) : t.map((function(e) {
							return i.default(e.style)
						})),
						f = h(n, o, a, u, l, d, c, d, c),
						p = f[0];
					return {
						currentStyles: f[1],
						currentVelocities: f[2],
						lastIdealStyles: f[3],
						lastIdealVelocities: f[4],
						mergedPropsStyles: p
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = d.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
					var t = e.styles;
					this.unreadPropStyles = "function" == typeof t ? t(v(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = d.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					this.unmounting = !0, null != this.animationID && (c.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = v(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
						t = this.props.children(e);
					return t && p.default.Children.only(t)
				}, t
			}(p.default.Component);
			t.default = g, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mapToZero.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = 0);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mergeDiff.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, r) {
				for (var n = {}, o = 0; o < e.length; o++) n[e[o].key] = o;
				var a = {};
				for (o = 0; o < t.length; o++) a[t[o].key] = o;
				var i = [];
				for (o = 0; o < t.length; o++) i[o] = t[o];
				for (o = 0; o < e.length; o++)
					if (!Object.prototype.hasOwnProperty.call(a, e[o].key)) {
						var s = r(o, e[o]);
						null != s && i.push(s)
					} return i.sort((function(e, r) {
					var o = a[e.key],
						i = a[r.key],
						s = n[e.key],
						l = n[r.key];
					if (null != o && null != i) return a[e.key] - a[r.key];
					if (null != s && null != l) return n[e.key] - n[r.key];
					if (null != o) {
						for (var u = 0; u < t.length; u++) {
							var d = t[u].key;
							if (Object.prototype.hasOwnProperty.call(n, d)) {
								if (o < a[d] && l > n[d]) return -1;
								if (o > a[d] && l < n[d]) return 1
							}
						}
						return 1
					}
					for (u = 0; u < t.length; u++) {
						d = t[u].key;
						if (Object.prototype.hasOwnProperty.call(n, d)) {
							if (i < a[d] && s > n[d]) return 1;
							if (i > a[d] && s < n[d]) return -1
						}
					}
					return -1
				}))
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/presets.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = {
				noWobble: {
					stiffness: 170,
					damping: 26
				},
				gentle: {
					stiffness: 120,
					damping: 14
				},
				wobbly: {
					stiffness: 180,
					damping: 12
				},
				stiff: {
					stiffness: 210,
					damping: 20
				}
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/react-motion.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e.default : e
			}
			t.__esModule = !0;
			var o = r("./node_modules/react-motion/lib/Motion.js");
			t.Motion = n(o);
			var a = r("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = n(a);
			var i = r("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = n(i);
			var s = r("./node_modules/react-motion/lib/spring.js");
			t.spring = n(s);
			var l = r("./node_modules/react-motion/lib/presets.js");
			t.presets = n(l);
			var u = r("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = n(u);
			var d = r("./node_modules/react-motion/lib/reorderKeys.js");
			t.reorderKeys = n(d)
		},
		"./node_modules/react-motion/lib/reorderKeys.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function() {
				0
			};
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/shouldStopAnimation.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, r) {
				for (var n in t)
					if (Object.prototype.hasOwnProperty.call(t, n)) {
						if (0 !== r[n]) return !1;
						var o = "number" == typeof t[n] ? t[n] : t[n].val;
						if (e[n] !== o) return !1
					} return !0
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/spring.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
				}
				return e
			};
			t.default = function(e, t) {
				return n({}, s, t, {
					val: e
				})
			};
			var o, a = r("./node_modules/react-motion/lib/presets.js"),
				i = (o = a) && o.__esModule ? o : {
					default: o
				},
				s = n({}, i.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, r, o, a, i, s) {
				var l = r + (-a * (t - o) + -i * r) * e,
					u = t + l * e;
				if (Math.abs(l) < s && Math.abs(u - o) < s) return n[0] = o, n[1] = 0, n;
				return n[0] = u, n[1] = l, n
			};
			var n = [0, 0];
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stripStyle.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = "number" == typeof e[r] ? e[r] : e[r].val);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js": function(e, t, r) {
			(function(t) {
				(function() {
					var r, n, o;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (r() - o) / 1e6
					}, n = t.hrtime, o = (r = function() {
						var e;
						return 1e9 * (e = n())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - o
					}, o = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - o
					}, o = (new Date).getTime())
				}).call(this)
			}).call(this, r("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function a() {}
			a.resetWarningCache = o, e.exports = function() {
				function e(e, t, r, o, a, i) {
					if (i !== n) {
						var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw s.name = "Invariant Violation", s
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var r = {
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
					checkPropTypes: a,
					resetWarningCache: o
				};
				return r.PropTypes = r, r
			}
		},
		"./node_modules/react-motion/node_modules/prop-types/index.js": function(e, t, r) {
			e.exports = r("./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, t, r) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var n = r("./node_modules/ts-error/lib/helpers.js"),
				o = n.setPrototypeOf,
				a = n.getPrototypeOf,
				i = n.defineProperty,
				s = n.objectCreate,
				l = "[object Error]" === (new Error).toString(),
				u = "";

			function d(e) {
				var t, r = this.constructor,
					n = r.name || (null === (t = r.toString().match(/^function\s*([^\s(]+)/)) ? u || "Error" : t[1]),
					s = "Error" === n,
					c = s ? u : n,
					f = Error.apply(this, arguments);
				if (o(f, a(this)), !(f instanceof r && f instanceof d)) {
					f = this;
					Error.apply(this, arguments), i(f, "message", {
						configurable: !0,
						enumerable: !1,
						value: e,
						writable: !0
					})
				}
				if (i(f, "name", {
						configurable: !0,
						enumerable: !1,
						value: c,
						writable: !0
					}), Error.captureStackTrace && Error.captureStackTrace(f, s ? d : r), void 0 === f.stack) {
					var p = new Error(e);
					p.name = f.name, f.stack = p.stack
				}
				return l && i(f, "toString", {
					configurable: !0,
					enumerable: !1,
					value: function() {
						return (this.name || "Error") + (void 0 === this.message ? "" : ": " + this.message)
					},
					writable: !0
				}), f
			}
			u = d.name || "ExtendableError", d.prototype = s(Error.prototype, {
				constructor: {
					value: Error,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t.ExtendableError = d, t.default = t.ExtendableError
		},
		"./node_modules/ts-error/lib/helpers.js": function(e, t, r) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var n = "function" == typeof Object.setPrototypeOf,
				o = "function" == typeof Object.getPrototypeOf,
				a = "function" == typeof Object.defineProperty,
				i = "function" == typeof Object.create,
				s = "function" == typeof Object.prototype.hasOwnProperty;
			t.setPrototypeOf = function(e, t) {
				n ? Object.setPrototypeOf(e, t) : e.__proto__ = t
			};
			t.getPrototypeOf = function(e) {
				return o ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var l = !1;
			t.defineProperty = function e(t, r, n) {
				if (a && !l) try {
					Object.defineProperty(t, r, n)
				} catch (o) {
					l = !0, e(t, r, n)
				} else t[r] = n.value
			};
			var u = function(e, t) {
				return s ? e.hasOwnProperty(e, t) : void 0 === e[t]
			};
			t.hasOwnProperty = u;
			t.objectCreate = function(e, t) {
				if (i) return Object.create(e, t);
				var r = function() {};
				r.prototype = e;
				var n = new r;
				if (void 0 === t) return n;
				if ("null" == typeof t) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof t)
					for (var o in t) u(t, o) && (n[o] = t[o].value);
				return n
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~Reddit.baa89a7cb266adc0352a.js.map