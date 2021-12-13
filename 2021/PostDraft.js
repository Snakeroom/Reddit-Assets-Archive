// https://www.redditstatic.com/desktop2x/PostDraft.0c30535971a92eb2215c.js
// Retrieved at 12/13/2021, 9:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostDraft"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var s;
			s = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function s(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var o, r = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !r && !l && /macintosh/i.test(t),
						x = !i && !u && !m && !p && /linux/i.test(t),
						g = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						_ = n(/version\/(\d+(\.\d+)?)/i),
						v = /tablet/i.test(t) && !/tablet pc/i.test(t),
						E = !v && /[^-]mobi/i.test(t),
						w = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: _ || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || _
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: _ || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: _ || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: _ || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? o = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? o = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? o = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? o = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? o = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? o = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (o.msedge = e, o.version = g) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || _
					} : u ? o = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? o = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (o = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e, o.osname = "Firefox OS")) : l ? o = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? o = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? o = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? o = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: _ || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: _ || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || _
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || _
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || _
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? o = {
						name: "Android",
						version: _
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, _ && (o.version = _)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, _ && (o.version = _)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || _
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && _ && (o.version = _)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : f ? (o.mac = e, o.osname = "macOS") : w ? (o.xbox = e, o.osname = "Xbox") : h ? (o.windows = e, o.osname = "Windows") : x && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var y = "";
					o.windows ? y = function(e) {
						switch (e) {
							case "NT":
								return "NT";
							case "XP":
								return "XP";
							case "NT 5.0":
								return "2000";
							case "NT 5.1":
								return "XP";
							case "NT 5.2":
								return "2003";
							case "NT 6.0":
								return "Vista";
							case "NT 6.1":
								return "7";
							case "NT 6.2":
								return "8";
							case "NT 6.3":
								return "8.1";
							case "NT 10.0":
								return "10";
							default:
								return
						}
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? y = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? y = (y = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? y = (y = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? y = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? y = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? y = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? y = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (y = n(/tizen[\/\s](\d+(\.\d+)*)/i)), y && (o.osversion = y);
					var C = !o.windows && y.split(".")[0];
					return v || c || "ipad" == r || i && (3 == C || C >= 4 && !E) || o.silk ? o.tablet = e : (E || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var n, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) s.push(t(e[n]));
					return s
				}

				function r(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), n = o(e, (function(e) {
							var n = t - s(e);
							return o((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, s, o) {
					var i = n;
					"string" == typeof s && (o = s, s = void 0), void 0 === s && (s = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([a, e[c]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = r, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = s() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, s, o) {
				return o(e, (function(e, o, r) {
					n = s ? (s = !1, e) : t(n, e, o, r)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = o(n)) == n ? n : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), s(o(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? s : i,
					d = arguments.length < 3;
				return c(e, r(t, 4), n, d, o)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const o of e) t++, n += o.length, s[t] = n;
					return s
				},
				o = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const o of e) {
						for (let e = 0; e < o.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return M
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "c", (function() {
				return V
			})), n.d(t, "h", (function() {
				return Y
			})), n.d(t, "f", (function() {
				return Q
			})), n.d(t, "d", (function() {
				return re
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/filterQueryParams/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/postCollection/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/history.ts"),
				u = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var h = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: u.jb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var f = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: u.jb.POST,
				data: {
					title: t,
					sr_fullname: n
				}
			});
			var x = (e, t) => Object(m.a)(Object(p.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: u.jb.POST,
					data: {
						collection_id: t
					}
				}),
				g = n("./src/config.ts");
			var _ = (e, t) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${g.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: u.jb.GET
			});
			var v = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: u.jb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var E = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: u.jb.POST,
				data: {
					collection_id: t,
					title: n
				}
			});
			var w = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: u.jb.POST,
				data: {
					collection_id: t,
					link_ids: n.join(",")
				}
			});
			var y = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: u.jb.POST,
				data: {
					collection_id: t,
					description: n
				}
			});
			var C = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: u.jb.POST,
					data: {
						collection_id: t,
						display_layout: n
					}
				}),
				j = n("./src/reddit/helpers/overlay/index.ts"),
				O = n("./src/reddit/helpers/path/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				I = n("./src/reddit/selectors/postCollection.ts"),
				T = n("./src/reddit/selectors/posts.ts"),
				P = n("./src/reddit/selectors/subreddit.ts");
			const N = Object(i.a)(c.c),
				L = Object(i.a)(c.b),
				R = Object(i.a)(c.d),
				M = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					n(N());
					const r = await f(o(), e, t);
					let i;
					if (r.ok) {
						const e = s().meta,
							t = (e => ({
								author: e.author_name || void 0,
								createdAtUTC: e.created_at_utc,
								description: e.description,
								displayLayout: e.display_layout,
								id: e.collection_id,
								lastUpdateUTC: e.last_update_utc,
								permalink: e.permalink,
								postIds: e.link_ids,
								primaryPostId: e.primary_link_id || void 0,
								subredditId: e.subreddit_id,
								title: e.title
							}))(r.body);
						n(R({
							collection: t,
							meta: e
						})), i = t
					} else {
						const e = r.error;
						n(L(e))
					}
					return i
				}, D = Object(i.a)(c.f), B = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n().postCollection.subredditToIds || {};
					if (Object.keys(r).length > 0) return;
					const i = await _(o(), e);
					i.ok ? t(D(i.body)) : t(Object(d.f)({
						kind: k.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, W = Object(i.a)(c.g), A = (e, t, n) => async (o, r, {
					apiContext: i
				}) => {
					if ((await v(i(), e, t)).ok) {
						const i = r(),
							a = Object(T.H)(i, {
								postId: t
							}),
							c = a && a.title || "",
							l = Object(I.q)(i, {
								collectionId: e
							}),
							u = (l && l.postIds && l.postIds.indexOf(t) || -1) - 1;
						if (o(W({
								collectionId: e,
								postId: t
							})), n && u >= 0) {
							const t = r(),
								n = Object(I.q)(t, {
									collectionId: e
								}),
								s = n && n.postIds && n.postIds[u] || "",
								i = Object(T.H)(t, {
									postId: s
								});
							i && i.permalink && o(Object(j.a)(i.permalink))
						}
						o(Object(d.f)({
							kind: k.b.SuccessMod,
							text: s.fbt._("Following post removed from collection successfully: {postTitle}", [s.fbt._param("postTitle", c)], {
								hk: "8e1lV"
							}),
							buttonText: s.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: U(e, t)
						}))
					} else o(Object(d.f)({
						kind: k.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, H = Object(i.a)(c.a), F = Object(i.a)(c.t), U = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o();
					if ((await h(r(), e, t)).ok) {
						n(H({
							collectionId: e,
							postId: t
						})), n(F({
							collectionId: e,
							postId: t
						}));
						const o = Object(T.H)(i, {
								postId: t
							}),
							r = Object(I.q)(i, {
								collectionId: e
							}),
							a = r && r.title || "";
						n(Object(d.f)({
							kind: k.b.SuccessMod,
							text: s.fbt._("Success! You added a post to the collection: {title}", [s.fbt._param("title", a)], {
								hk: "3KNJWi"
							}),
							buttonText: s.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(j.a)(o.permalink)
						}))
					} else n(Object(d.f)({
						kind: k.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, J = Object(i.a)(c.e), V = (e, t) => async (n, i, {
					apiContext: a
				}) => {
					const c = i();
					if ((await x(a(), e)).ok) {
						const {
							url: i
						} = c.platform.currentPage, a = Object(I.q)(c, {
							collectionId: e
						}), l = a && a.title || "", u = a && a.subredditId, m = u ? Object(P.c)(c, u) : "/";
						n(J({
							collectionId: e,
							collection: a
						})), n(t ? Object(o.c)(Object(r.a)(i, ["collection"])) : Object(o.b)(m)), n(Object(d.f)({
							kind: k.b.SuccessMod,
							text: s.fbt._("Collection deleted successfully: {title}", [s.fbt._param("title", l)], {
								hk: "4tcOKB"
							})
						}))
					} else n(Object(d.f)({
						kind: k.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, G = Object(i.a)(c.r), K = Object(i.a)(c.n), z = Object(i.a)(c.s), Y = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					n(G());
					const i = await E(r(), e, t);
					let a = !1;
					if (i.ok) n(z({
						collectionId: e,
						newTitle: t
					})), n(Object(d.f)({
						kind: k.b.SuccessMod,
						text: s.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), a = !0;
					else {
						const e = i.error;
						n(K(e)), n(Object(d.f)({
							kind: k.b.Error,
							text: s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return a
				}, X = Object(i.a)(c.l), q = Object(i.a)(c.m), Z = Object(i.a)(c.k), Q = e => async (t, n) => {
					const s = n();
					if (Object(S.b)(s)) return void t(Object(a.ab)(Object(O.b)(e.permalink), e.id));
					const r = s.platform.currentPage.locationState;
					t(!(!r || !r[l.b.IsOverlay]) ? Object(j.a)(e.permalink) : Object(o.b)(Object(O.b)(e.permalink)))
				}, $ = Object(i.a)(c.i), ee = Object(i.a)(c.j), te = Object(i.a)(c.h), ne = Object(i.a)(c.p), se = Object(i.a)(c.o), oe = Object(i.a)(c.q), re = e => async t => {
					const n = [],
						{
							collectionId: o,
							description: r,
							displayLayout: i,
							postIds: a,
							title: c
						} = e;
					a && n.push(t(((e, t) => async (n, o, {
						apiContext: r
					}) => {
						n($());
						const i = await w(r(), e, t);
						let a = !1;
						return i.ok ? (n(ee({
							collectionId: e,
							postIds: t
						})), n(Object(d.f)({
							kind: k.b.SuccessMod,
							text: s.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), a = !0) : (n(te({
							error: i.error
						})), n(Object(d.f)({
							kind: k.b.Error,
							text: s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), a
					})(o, a))), c && n.push(t(Y(o, c))), void 0 !== r && n.push(t(((e, t) => async (n, o, {
						apiContext: r
					}) => {
						n(X());
						const i = await y(r(), e, t);
						let a = !1;
						if (i.ok) n(q({
							collectionId: e,
							newDescription: t
						})), n(Object(d.f)({
							kind: k.b.SuccessMod,
							text: s.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), a = !0;
						else {
							const e = i.error;
							n(Z(e)), n(Object(d.f)({
								kind: k.b.Error,
								text: s.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(o, r))), i && n.push(t(((e, t) => async (n, o, {
						apiContext: r
					}) => {
						n(ne());
						const i = await C(r(), e, t);
						let a = !1;
						if (i.ok) n(oe({
							collectionId: e,
							newLayout: t
						})), n(Object(d.f)({
							kind: k.b.SuccessMod,
							text: s.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), a = !0;
						else {
							const e = i.error;
							n(se(e)), n(Object(d.f)({
								kind: k.b.Error,
								text: s.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(o, i)));
					let l = !0;
					return await Promise.all(n).then(e => {
						e.forEach(e => {
							e || (l = !1)
						})
					}), l
				}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(a.e, null, r.a.createElement(a.i, null, r.a.createElement(d.a, null, r.a.createElement(a.q, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.l, null, r.a.createElement(a.p, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(a.g, null, !e.hideCancelButton && r.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(a.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/reddit/featureFlags/component.tsx");
			const r = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				i = Object(o.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = n("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				const {
					children: t,
					className: n,
					to: s,
					...r
				} = e, d = Object(a.b)(s);
				return o.a.createElement(i.a, c({
					className: n,
					to: d
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, s = t ? d : r.a;
				return o.a.createElement(s, l({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/Media/index.m.less"),
				a = n.n(i);
			const c = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? s.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? s.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = ({
					isNSFW: e,
					isSpoiler: t
				}) => r.a.createElement("div", {
					className: a.a.unblurButtonContainer
				}, r.a.createElement("button", {
					className: a.a.unblurButton
				}, c(e, t)))
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(r.b)(() => Object(i.c)({
					isNightmodeOn: m.X
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), o.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				b = n("./src/reddit/components/PlayButton/index.tsx"),
				h = n("./src/reddit/constants/elementClassNames.ts"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				x = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				_ = n("./src/reddit/models/Media/index.ts"),
				v = n("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				E = n("./src/reddit/selectors/posts.ts"),
				w = n("./src/reddit/selectors/telemetry.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/constants/tracking.ts"),
				j = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				O = n.n(j);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => e > 2 * _.e,
				I = e => {
					const t = Object(d.a)(O.a.image, h.g, e.className, {
							[O.a.mShowCentered]: e.showCentered,
							[O.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${_.j}px`), e.isListing || e.isTall && S(e.height) || (n.maxHeight = `${_.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), r.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				T = e => {
					const t = {};
					return (!e.showFull && Object(_.K)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${_.j}px`, e.shouldBlur && (t.maxWidth = Object(_.K)(e.height, e.width) ? `${_.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), r.a.createElement("div", {
						className: Object(d.a)(O.a.container, e.className),
						style: t
					}, e.children)
				},
				P = Object(i.b)(() => Object(c.a)(E.G, y.db, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(E.b)(e, n) : null, v.a, w.d, E.H, (e, t, n, s, o, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					sendGoodVisitEvent: s,
					pageType: o.pageType,
					post: r
				})));
			t.a = P(e => {
				const t = e.sendGoodVisitEvent ? Object(g.a)() : void 0;
				return e.outboundUrl && !e.shouldBlur ? r.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(x.a)(e.post, e.pageType)
					}
				}, L(e)) : e.isListing && e.postPermalink ? r.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink),
					onClick: e.onPostMediaClick
				}, L(e)) : L(e)
			});
			const N = (e, t) => r.a.createElement(I, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[C.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				L = ({
					onClick: e,
					...t
				}) => {
					const n = Object(_.K)(t.height, t.width),
						o = S(t.height) && n;
					return r.a.createElement(T, k({}, t, {
						className: `${n?`${C.a} `:""}${t.className||""}`
					}), t.isListing ? r.a.createElement("div", {
						className: t.contentImageClassName
					}, N(n, t)) : r.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: O.a.imageLink
					}, N(n, t), t.shouldBlur && !t.isVideoThumbnail && r.a.createElement(p.a, {
						isNSFW: !!t.isNSFW,
						isSpoiler: !!t.isSpoiler
					})), t.isListing && !t.showFull && t.height > _.j && Object(_.K)(t.height, t.width) && r.a.createElement("div", {
						className: O.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && r.a.createElement(b.a, {
						onClick: e
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					s = e.blurSrc ? o.a.createElement("img", {
						className: d.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					c = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return o.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && o.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), o.a.createElement("div", {
					className: Object(r.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends o.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return o.a.Children.only(this.props.children) || o.a.createElement("div", null)
					}
					return o.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const h = 100,
				f = h / 2 / 1e3;
			var x = n("./src/lib/forceHttps/index.ts"),
				g = n("./src/lib/hooks/usePrevious.ts");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function v({
				autoplay: e,
				isListing: t,
				isNotCardView: n,
				onBufferingChange: s,
				shouldLoad: o,
				shouldPause: a,
				showCentered: c,
				showFull: d,
				source: l,
				...u
			}) {
				const m = Object(r.useRef)(),
					p = Object(r.useRef)(),
					b = Object(g.a)(a);

				function v(e) {
					if (e) {
						const e = null === (t = null == p ? void 0 : p.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == p ? void 0 : p.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(r.useEffect)(() => {
					if (v(!a && (e || n)), p.current && s) return m.current = function(e, t) {
						let n = !1,
							s = !1;
						const o = () => n = !0,
							r = () => s = !0;
						e.addEventListener("loadeddata", o), e.addEventListener("play", r), e.addEventListener("playing", r);
						let i = !1,
							a = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, s) return s = !1, void(a = c);
							if (e.paused || e.seeking || !n) return void(a = c);
							const o = i;
							4 === e.readyState ? i = !1 : !i && c >= a && c < a + f ? i = !0 : i && c >= a && c > a + f && (i = !1), a = c, o !== i && t(i)
						}, h);
						return () => {
							clearInterval(d), e.removeEventListener("playing", r), e.removeEventListener("play", r), e.removeEventListener("loadeddata", o)
						}
					}(p.current, s), () => {
						m.current && m.current()
					}
				}, []), Object(r.useEffect)(() => {
					b !== a && v(!a && (e || n))
				}, [b, a, e, n]), i.a.createElement("video", _({}, u, {
					ref: e => p.current = e,
					muted: !0
				}), i.a.createElement("source", {
					src: Object(x.a)(l || "")
				}))
			}
			var E = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				w = n.n(E);
			const y = Object(c.c)({
				autoplayPref: p.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function C(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: r,
					started: c
				} = Object(a.e)(t => y(t, e)), {
					postId: p,
					shouldLoad: b,
					source: h,
					height: f,
					isNotCardView: x,
					showFull: g,
					shouldPause: _,
					width: E,
					isListing: C,
					className: j,
					showCentered: O,
					originalSource: k
				} = e, S = Object(a.d)();

				function I(e) {
					S(e ? Object(l.r)(p) : Object(l.E)(p))
				}

				function T() {
					return S(Object(l.z)({
						postId: p
					}))
				}
				const P = o()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && S(Object(l.s)(p))
				}, 200);

				function N(e) {
					e.persist(), P(e)
				}

				function L(e) {
					var t;
					(r || M(e), c) || (t = e.timeStamp, S(Object(l.A)(p, t)))
				}

				function R(e) {
					S(Object(l.q)(p, e.timeStamp))
				}

				function M(e) {
					! function(e) {
						S(Object(l.D)({
							metadata: e,
							postId: p
						}))
					}({
						id: p,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function D(e) {
					s || L(e), r || M(e), S(Object(l.C)(p))
				}

				function B() {
					const e = {};
					return O && (e.margin = "0 auto"), C || (e.maxHeight = `${m.e}px`), i.a.createElement(v, {
						autoplay: t,
						className: Object(d.a)(u.a, w.a.styledVideo),
						height: f,
						isListing: C,
						isNotCardView: x,
						key: p,
						loop: !0,
						onBufferingChange: I,
						onLoadStart: R,
						onLoadedData: L,
						onLoadedMetadata: M,
						onPause: T,
						onPlaying: D,
						onTimeUpdate: N,
						shouldLoad: b,
						shouldPause: _,
						showCentered: O,
						showFull: g,
						source: h,
						style: e,
						width: E
					})
				}
				return C ? B() : i.a.createElement("div", {
					className: Object(d.a)(w.a.container, j, {
						[w.a.centered]: O
					})
				}, i.a.createElement("a", {
					href: k,
					target: "_blank",
					rel: "noopener noreferrer"
				}, B()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, n) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				f = n("./src/reddit/components/OverflowMenu/index.m.less"),
				x = n.n(f);
			const g = d.a.wrapped(m.a, "_Dropdown", x.a),
				_ = Object(u.a)(g),
				v = d.a.button("MenuButton", x.a),
				E = d.a.wrapped(p.b, "DropdownRow", x.a),
				w = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				y = Object(i.b)(w, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				C = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = y(e => r.a.createElement(v, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: C(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
			}), r.a.createElement(_, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				preventFocusScroll: e.preventFocusScroll,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/PostDraft/PostDraftBody/index.m.less": function(e, t, n) {
			e.exports = {
				Body: "_3q6vELAuFnDnZmbmqExzMg",
				body: "_3q6vELAuFnDnZmbmqExzMg",
				Link: "_2rTucjAw93ZJDkq9nwJLD7",
				link: "_2rTucjAw93ZJDkq9nwJLD7"
			}
		},
		"./src/reddit/components/PostDraft/PostDraftFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Body: "_1d32Tfg3QsqxyPty3atdyU",
				body: "_1d32Tfg3QsqxyPty3atdyU",
				Container: "_19jSl9x6Bwz7DdwRX9ZN-g",
				container: "_19jSl9x6Bwz7DdwRX9ZN-g",
				Link: "RwFNl1v4hP6QJI76vfOmd",
				link: "RwFNl1v4hP6QJI76vfOmd",
				Title: "a238I8l3sLvVu7-JolXB",
				title: "a238I8l3sLvVu7-JolXB"
			}
		},
		"./src/reddit/components/PostDraft/index.m.less": function(e, t, n) {
			e.exports = {
				ReviewDraftHeader: "_329TnDl8ot6iFg_JNstWSb",
				reviewDraftHeader: "_329TnDl8ot6iFg_JNstWSb",
				PostDraftLabel: "ZxZO0GEF-ngYA5_0oVbHw",
				postDraftLabel: "ZxZO0GEF-ngYA5_0oVbHw",
				Container: "_1LdHWcD68DAE4gaXgDEj4b",
				container: "_1LdHWcD68DAE4gaXgDEj4b",
				DraftSavedTime: "_29z00j5-e9mxfOXGuKvJAg",
				draftSavedTime: "_29z00j5-e9mxfOXGuKvJAg",
				Title: "_2_Gnd8ZH8QmWA53pTzi17M",
				title: "_2_Gnd8ZH8QmWA53pTzi17M"
			}
		},
		"./src/reddit/components/PostingSidebar/PolicyRow/index.m.less": function(e, t, n) {
			e.exports = {
				PolicyRow: "_2N9ShiilNyzdd0B_i9geBj",
				policyRow: "_2N9ShiilNyzdd0B_i9geBj"
			}
		},
		"./src/reddit/components/PostingSidebar/PolicyRow/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/config.ts");
			const {
				redditUrl: i
			} = r.a, a = `${i}/help/contentpolicy`, c = `${i}/wiki/reddiquette`;
			var d = n("./src/reddit/components/PostingSidebar/PolicyRow/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => o.a.createElement("div", {
				className: l.a.PolicyRow
			}, u._("Please be mindful of reddit's {=content policy} and practice good {=reddiquette}.", [u._param("=content policy", o.a.createElement("a", {
				href: a
			}, u._("content policy", null, {
				hk: "2PeDvo"
			}))), u._param("=reddiquette", o.a.createElement("a", {
				href: c
			}, u._("reddiquette", null, {
				hk: "uPdiw"
			})))], {
				hk: "4yQuKr"
			}))
		},
		"./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less": function(e, t, n) {
			e.exports = {
				Snoo: "_1XXU14d6sjwsheKLMcy7ro",
				snoo: "_1XXU14d6sjwsheKLMcy7ro",
				Li: "_2aD4E5YdfsXR-e8kLRuTEp",
				li: "_2aD4E5YdfsXR-e8kLRuTEp",
				Ol: "a5fJMl2u0aujwukxWH3if",
				ol: "a5fJMl2u0aujwukxWH3if",
				Title: "_27SYzmGZdspPn9yA9voNCY",
				title: "_27SYzmGZdspPn9yA9voNCY",
				Component: "_1Zj2sAyYL2zB-kzZQcWiW",
				component: "_1Zj2sAyYL2zB-kzZQcWiW"
			}
		},
		"./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/icons/svgs/SnooPosting/index.tsx"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less"),
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const b = p.a.wrapped(d.a, "Snoo", m.a),
				h = p.a.li("Li", m.a),
				f = p.a.ol("Ol", m.a),
				x = p.a.div("Title", m.a),
				g = Object(a.c)({
					submissionType: l.mb
				});
			t.a = p.a.wrapped(Object(i.b)(g)(e => {
				const {
					className: t,
					submissionType: n
				} = e, o = n === c.Vb.CROSSPOST;
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(x, null, r.a.createElement(b, null), o ? s.fbt._("Crossposting to Reddit", null, {
					hk: "2ODPDt"
				}) : s.fbt._("Posting to Reddit", null, {
					hk: "8eEIT"
				})), r.a.createElement(f, null, r.a.createElement(h, null, s.fbt._("Remember the human", null, {
					hk: "1x3u5R"
				})), r.a.createElement(h, null, s.fbt._("Behave like you would in real life", null, {
					hk: "3pxfk1"
				})), r.a.createElement(h, null, s.fbt._("Look for the original source of content", null, {
					hk: "1FfUM4"
				})), r.a.createElement(h, null, s.fbt._("Search for duplicates before posting", null, {
					hk: "3Ij1gf"
				})), r.a.createElement(h, null, s.fbt._("Read the community’s rules", null, {
					hk: "3RNQW2"
				})), o && r.a.createElement(h, null, s.fbt._("You must join a community to crosspost there", null, {
					hk: "1YAEPX"
				}))))
			}), "Component", m.a)
		},
		"./src/reddit/components/PostingSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "itxZANPrH4AAYOj6VgfL9",
				container: "itxZANPrH4AAYOj6VgfL9",
				isOpenAIPilotV1: "xpmGc4AuyuOP6ErObihFx",
				isOpenAiPilotV1: "xpmGc4AuyuOP6ErObihFx"
			}
		},
		"./src/reddit/components/PostingSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/IdCard/async.tsx"),
				m = n("./src/reddit/components/SidebarFooter/index.tsx"),
				p = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				b = n("./src/reddit/components/Widgets/PostCollection/index.tsx"),
				h = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/models/Widgets/index.ts"),
				g = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				_ = n("./src/reddit/selectors/postCreations.ts"),
				v = n("./src/reddit/selectors/profile.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/selectors/widgets.ts"),
				y = n("./src/reddit/components/PostingSidebar/PolicyRow/index.tsx"),
				C = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx"),
				j = n("./src/reddit/components/PostingSidebar/index.m.less"),
				O = n.n(j),
				k = n("./src/lib/lessComponent.tsx");
			const S = Object(r.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				I = k.a.div("Container", O.a),
				T = Object(f.u)(),
				P = new Set(["all", "post"]),
				N = Object(l.a)((e, {
					pageLayer: t
				}) => {
					const n = Object(f.r)(e, {
						pageLayer: t
					});
					return n && Object(E.Q)(e, {
						subredditId: n.id
					})
				}, e => (e || []).filter(e => P.has(e.kind))),
				L = (e, {
					pageLayer: t
				}) => {
					const n = Object(f.r)(e, {
						pageLayer: t
					});
					return !(!n || !Object(w.d)(e, {
						subredditName: n.name
					}))
				},
				R = Object(l.c)({
					hasIdCardWidgetData: L,
					isCreationPagePending: _.L,
					profile: (e, {
						pageLayer: t,
						subredditOrProfileId: n
					}) => n ? Object(v.p)(e, {
						profileId: n
					}) : Object(f.k)(e, {
						pageLayer: t
					}),
					subreddit: f.r,
					subredditRules: N,
					currentPostCollection: f.g,
					isOpenAIPilotV1: g.e
				}),
				M = Object(d.b)(R),
				D = e => {
					const {
						className: t,
						currentPostCollection: n,
						hasIdCardWidgetData: s,
						isCreationPagePending: o,
						isOpenAIPilotV1: r,
						profile: a,
						subreddit: d,
						subredditRules: l
					} = e, f = s || o;
					return c.a.createElement(I, {
						className: Object(i.a)(t, {
							[O.a.isOpenAIPilotV1]: r
						})
					}, n && c.a.createElement(b.a, {
						collection: n
					}), d && f && c.a.createElement(p.a, null, c.a.createElement(u.a, {
						isSubmissionPage: !0,
						listingName: d.name
					})), a && !d && c.a.createElement(p.a, null, c.a.createElement(S, {
						profileName: a.name,
						isOverlay: !1,
						isSubmissionPage: !0
					})), d && l && c.a.createElement(p.a, null, c.a.createElement(h.a, {
						subredditName: d.name,
						display: x.h.COMPACT,
						rules: l,
						redditStyle: !0
					})), c.a.createElement(C.a, null), c.a.createElement(p.a, null), c.a.createElement(y.a, null), c.a.createElement(m.a, {
						redditStyle: !0
					}))
				};
			t.a = T(M(D))
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(m);
			const b = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				h = c.a.wrapped(e => {
					const t = Object(l.a)();
					return r.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, s, o) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									o && s(n, o), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(s.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(s.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(a.a)(h))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				x = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				_ = m.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => r.a.createElement(g, p({}, n, {
					className: Object(i.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				v = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class E extends r.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return r.a.createElement(_, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, r.a.createElement(f, null, r.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), r.a.createElement(v, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = E
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "t", (function() {
				return O
			})), n.d(t, "p", (function() {
				return k
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "r", (function() {
				return P
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "w", (function() {
				return L
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				u = c.a.hr("Hr", a.a),
				m = c.a.code("M", a.a),
				p = c.a.pre("Pre", a.a),
				b = c.a.blockquote("Blockquote", a.a),
				h = c.a.p("P", a.a),
				f = c.a.li("Li", a.a),
				x = c.a.ul("Ul", a.a),
				g = c.a.ol("Ol", a.a),
				_ = c.a.strong("B", a.a),
				v = c.a.em("I", a.a),
				E = c.a.span("U", a.a),
				w = e => o.a.createElement("del", e),
				y = c.a.sub("Sub", a.a),
				C = c.a.sup("Sup", a.a),
				j = c.a.table("Table", a.a),
				O = c.a.tr("Tr", a.a),
				k = c.a.td("Tdl", a.a),
				S = c.a.td("Tdc", a.a),
				I = c.a.td("Tdr", a.a),
				T = c.a.th("Thl", a.a),
				P = c.a.th("Thc", a.a),
				N = (c.a.th("Thr", a.a), c.a.wrapped(e => o.a.createElement(r.b, e), "A", a.a)),
				L = c.a.wrapped(d.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return y
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return O
			}));
			var s = n("./node_modules/lodash/findLastIndex.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/BlurredContent.tsx"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/media.tsx"),
				f = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.m.less"),
				g = n.n(x);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = n("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				E = Object(c.a)(({
					flairStyleTemplate: e,
					theme: t,
					...n
				}) => i.a.createElement(v, _({}, n, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...n
						}))
					}
				}))),
				w = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				y = e => o()(e, w),
				C = e => e.findIndex(w),
				j = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: o,
						isNSFW: r,
						isSpoiler: c,
						onClickRevealBlurred: d,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: x,
						useExplicitTextColor: _,
						shouldBlur: w
					} = e, j = s.document, O = [], k = e.mediaMetadata || null, S = C(j), I = y(j);
					if (w && !o) return i.a.createElement(v, {
						className: Object(a.a)(u.j, n)
					}, i.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: d
					}, Object(l.b)(!!r, !!c))));
					if (-1 !== S)
						for (let i = S; i <= I; i++) {
							const e = j[i];
							switch (e.e) {
								case b.k:
									O.push(f.c(e, x, i));
									break;
								case b.l:
									O.push(f.d(i));
									break;
								case b.b:
									O.push(f.a(e, k, x, i));
									break;
								case b.c:
									O.push(f.b(e, i));
									break;
								case b.p:
									O.push(f.f(e, k, x, i));
									break;
								case b.z:
									O.push(f.h(e, k, x, i));
									break;
								case b.u:
									O.push(f.g(e, k, x, i));
									break;
								case b.h:
									O.push(Object(h.a)(e, i));
									break;
								case b.m:
								case b.a:
								case b.D:
									O.push(...Object(h.b)(e, i, k, p, m, t))
							}
						}
					return _ ? i.a.createElement(v, {
						className: Object(a.a)(u.j, n)
					}, O) : i.a.createElement(E, {
						className: Object(a.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, O)
				};
			class O extends i.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					d.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), d.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return j(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/elements.tsx"),
				f = n("./src/reddit/components/RichTextJson/media.m.less"),
				x = n.n(f),
				g = n("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = /\/(\w+)\/asset\/(\w+)\//,
				E = g.a.wrapped(h.a, "A", x.a),
				w = g.a.wrapped(l.a, "ImageBox", x.a),
				y = g.a.wrapped(e => r.a.createElement("p", e), "Caption", x.a),
				C = g.a.div("Placeholder", x.a),
				j = g.a.wrapped(({
					className: e,
					e: t,
					...n
				}) => {
					const o = t === b.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return r.a.createElement(C, _({
						className: e,
						style: {
							"--placeholder-content-text": `'${o}'`
						}
					}, n))
				}, "Placeholder", x.a),
				O = ({
					c: e,
					x: t,
					y: n
				}, s) => r.a.createElement("div", {
					className: x.a.MediaWrapper
				}, r.a.createElement(u.a, {
					height: n,
					isListing: !1,
					key: s,
					showCentered: !0,
					showFull: !0,
					width: t
				}, r.a.createElement(d.a, {
					isListing: !1,
					source: e,
					height: n,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				k = (e, t, n) => {
					const s = e.c;
					let o = "";
					return n && (n.e === b.s ? o = n.s.u : n.e === b.r ? o = n.s.gif : n.e === b.t && (o = (e => {
						const t = v.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), o ? r.a.createElement(E, {
						href: o,
						key: t,
						title: s
					}, s || o) : null
				},
				S = (e, t, n, s, o, a) => {
					const d = b.E(n, e.id);
					if (s) return [k(e, t, d)];
					const l = [];
					return d ? d.e === b.s ? l.push((({
						id: e,
						s: t
					}, n, s, o) => r.a.createElement("div", {
						className: Object(i.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: s
						})
					}, r.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: n,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, r.a.createElement(w, {
						altText: o,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(d, t, !!e.c, a)) : d.e === b.r ? l.push((({
						id: e,
						ext: t,
						s: n
					}, s, o) => {
						if (Object(p.g)(e)) {
							const a = t || Object(p.f)(e);
							return r.a.createElement("div", {
								className: Object(i.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: o
								})
							}, r.a.createElement(E, {
								href: a,
								key: s,
								target: "_blank"
							}, n.mp4 ? r.a.createElement("video", {
								className: x.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, r.a.createElement("source", {
								src: n.mp4
							})) : {
								originalSource: a
							}))
						}
						return r.a.createElement("div", {
							className: Object(i.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: o
							})
						}, r.a.createElement(u.a, {
							height: n.y,
							isListing: !1,
							key: s,
							showCentered: !0,
							showFull: !0,
							width: n.x
						}, r.a.createElement(m.a, {
							height: n.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: n.mp4,
							width: n.x,
							postId: e,
							source: n.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: n,
						y: s,
						isGif: o
					}, a, d, l) => r.a.createElement("div", {
						className: Object(i.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: d
						})
					}, r.a.createElement(u.a, {
						height: s,
						isListing: !1,
						isVideo: !0,
						key: a,
						showCentered: !0,
						showFull: !0,
						width: n
					}, r.a.createElement(c.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: o,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: o
					}))))(d, t, !!e.c, o)) : l.push(((e, t) => r.a.createElement(j, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => r.a.createElement(y, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return N
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "h", (function() {
				return W
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "i", (function() {
				return H
			})), n.d(t, "e", (function() {
				return F
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				o = n("./node_modules/lodash/reduce.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/v4.js"),
				l = n.n(d),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = n.n(x);
			const _ = 1e3,
				v = 1e3;
			var E;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(E || (E = {}));
			class w extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = E.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = E.Inside, setTimeout(() => {
							this.mouseLocation === E.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, _)
					}, this.onMouseOut = () => {
						this.mouseLocation = E.Outside, setTimeout(() => {
							this.mouseLocation !== E.Inside && this.setState({
								tooltipOpen: !1
							})
						}, v)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = b.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.hb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, o;
					t.e === p.s ? (n = t.s.x, s = t.s.y, o = t.s.u) : t.e === p.r && (n = t.s.x, s = t.s.y, o = t.s.gif);
					const r = this.state.tooltipOpen ? l()() : void 0;
					return o ? a.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: r,
						src: o,
						width: n,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: r,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var y = Object(u.c)(w),
				C = n("./src/reddit/components/RichTextJson/media.tsx"),
				j = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				O = n("./src/reddit/components/SubredditMention/index.tsx"),
				k = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				S = n("./src/reddit/helpers/isComment.ts"),
				I = n("./src/reddit/helpers/isPost.ts"),
				T = n("./src/reddit/helpers/richTextJson/index.ts"),
				P = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const N = (e, t, n) => {
					const s = e.c || [],
						o = e.l,
						r = [],
						i = s.length;
					for (let a = 0; a < i; a++) {
						const e = s[a];
						r.push(e.e === p.w ? e.t : F(e, t, a))
					}
					const d = c.x[o - 1];
					return a.a.createElement(d, {
						key: n
					}, r)
				},
				L = e => a.a.createElement(c.e, {
					key: e
				}),
				R = (e, t, n, s) => {
					const o = e.c;
					if (!o) return;
					const r = o.length,
						i = [];
					for (let a = 0; a < r; a++) i.push(B(o[a], t, n, a));
					return a.a.createElement(c.c, {
						key: s
					}, i)
				},
				M = (e, t) => {
					const n = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				D = (e, t, n, s) => {
					const o = e.c,
						r = [],
						i = o.length;
					for (let l = 0; l < i; l++) {
						const e = o[l].c;
						e && e.length && r.push(a.a.createElement(c.g, {
							key: l
						}, e.map((e, s) => B(e, t, n, s))))
					}
					const d = e.o ? c.i : c.v;
					return a.a.createElement(d, {
						key: s
					}, r)
				},
				B = (e, t, n, s) => {
					switch (e.e) {
						case p.b:
							return R(e, t, n, s);
						case p.c:
							return M(e, s);
						case p.k:
							return N(e, n, s);
						case p.l:
							return L(s);
						case p.p:
							return D(e, t, n, s);
						case p.u:
							return A(e, t, n, s);
						case p.z:
							return W(e, t, n, s)
					}
				},
				W = (e, t, n, s) => {
					const o = e.c,
						r = e.h,
						i = o.length,
						d = r.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = r[c],
							{
								H: s,
								D: o
							} = G(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(s, {
							key: c
						}, H(i, t, n))), m[c] = o
					}
					for (let p = 0; p < i; p++) {
						const e = o[p],
							s = e.length,
							r = [];
						for (let o = 0; o < s; o++) {
							const s = m[o],
								{
									c: i = []
								} = e[o];
							r.push(a.a.createElement(s, {
								key: o
							}, H(i, t, n)))
						}
						u.push(a.a.createElement(c.t, {
							key: p
						}, r))
					}
					return a.a.createElement(c.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, l)), a.a.createElement("tbody", null, u))
				},
				A = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const o = e.c[0];
					return o.e !== p.m && o.e !== p.a || !Object(T.g)(o.id) ? a.a.createElement(c.j, {
						key: s
					}, H(e.c, t, n)) : Object(C.b)(o, s, t)
				},
				H = (e, t, n) => {
					const s = [],
						o = e.length;
					for (let r = 0; r < o; r++) {
						const o = e[r];
						if (o.e === p.A) s.push(U(o, r));
						else if (o.e === p.x) s.push(a.a.createElement(j.a, {
							key: r
						}, H(o.c, t, n)));
						else if (o.e === p.n) s.push(a.a.createElement("br", {
							key: r
						}));
						else if (o.e === p.m || o.e === p.a) {
							if (o.id.startsWith("emote|")) {
								const e = p.E(t, o.id);
								e && s.push(a.a.createElement(y, {
									key: r,
									node: o,
									media: e
								}))
							}
						} else s.push(F(o, n, r))
					}
					return s
				},
				F = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const s = U({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(k.b)(e.u)) return a.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let o, r;
							const i = Object(P.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(I.b)(d) && (o = d.postId), d && Object(S.b)(d) && (r = d.id, o = d.postId), a.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: i,
								postId: o,
								commentId: r
							}, s);
						case p.y:
							return a.a.createElement(O.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				U = (e, t) => {
					const {
						f: n,
						t: o
					} = e, r = [];
					if (!n) return V(0, o, t);
					const i = Object(s.a)(o);
					let a = 0,
						c = 0;
					const d = n.length;
					for (; a < d; a++) {
						const [e, t, s] = n[a], d = t + s, l = i[t], u = i[d] - l;
						l > c && r.push(V(0, o.substr(c, l - c), `between${a}`)), r.push(V(e, o.substr(l, u), a)), c = l + u
					}
					return c < o.length && r.push(V(0, o.substr(c), `remaining${a}`)), r
				},
				J = {
					[p.j.monospace]: c.h,
					[p.j.bold]: c.b,
					[p.j.italic]: c.f,
					[p.j.underline]: c.u,
					[p.j.strikethrough]: c.d,
					[p.j.subscript]: c.l,
					[p.j.superscript]: c.m
				},
				V = (e, t, n) => {
					let s = t;
					return s = r()(J, (t, s, o) => e & parseInt(o, 10) ? a.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				G = e => {
					switch (e) {
						case p.f:
							return {
								H: c.r, D: c.q
							};
						case p.d:
							return {
								H: c.r, D: c.o
							};
						case p.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/SidebarFooter/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = r.a.a("Link", m.a), h = Object(l.c)({
				isNavbarLikeMwebEnabled: d.a
			}), f = Object(i.b)(h), x = Object(c.u)({
				isFrontpage: c.z
			});
			t.a = x(f(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? o.a.createElement(a.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: m.a.LinkContainer
			}, o.a.createElement("div", {
				className: m.a.Column
			}, o.a.createElement(b, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("User Agreement", null, {
				hk: "2RA6JL"
			})), o.a.createElement(b, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			}))), o.a.createElement("div", {
				className: m.a.Column
			}, o.a.createElement(b, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(b, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, p._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), o.a.createElement("div", {
				className: m.a.Copyright
			}, p._("© {year} Reddit, Inc. All rights reserved.", [p._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : o.a.createElement(a.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: m.a.LinkContainer
			}, o.a.createElement("div", {
				className: m.a.Column
			}, o.a.createElement(b, {
				href: "https://www.reddithelp.com"
			}, p._("help", null, {
				hk: "4lyYaD"
			})), o.a.createElement(b, {
				href: "https://www.reddit.com/coins"
			}, p._("Reddit coins", null, {
				hk: "32iMaN"
			})), o.a.createElement(b, {
				href: "https://www.reddit.com/premium"
			}, p._("Reddit premium", null, {
				hk: "RuO3A"
			})), o.a.createElement(b, {
				href: "https://redditgifts.com/"
			}, p._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && o.a.createElement(o.a.Fragment, null, o.a.createElement(b, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, p._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(b, {
				href: "https://www.reddit.com/posts/2020/"
			}, p._("Rereddit", null, {
				hk: "1z3k7C"
			})), o.a.createElement(b, {
				href: "https://www.reddit.com/topics/a-1/"
			}, p._("Topics", null, {
				hk: "349RFt"
			})))), o.a.createElement("div", {
				className: m.a.Column
			}, o.a.createElement(b, {
				href: "https://about.reddit.com"
			}, p._("about", null, {
				hk: "1sqJKs"
			})), o.a.createElement(b, {
				href: "https://about.reddit.com/careers/"
			}, p._("careers", null, {
				hk: "26ABvc"
			})), o.a.createElement(b, {
				href: "https://about.reddit.com/press/"
			}, p._("press", null, {
				hk: "2Qmgdz"
			})), o.a.createElement(b, {
				href: "https://www.redditinc.com/advertising"
			}, p._("advertise", null, {
				hk: "Mt40U"
			})), o.a.createElement(b, {
				href: "http://www.redditblog.com/"
			}, p._("blog", null, {
				hk: "46IQJw"
			})), o.a.createElement(b, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("Terms", null, {
				hk: "4qRzfE"
			})), o.a.createElement(b, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(b, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			})), o.a.createElement(b, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, p._("Mod policy", null, {
				hk: "2gYc2T"
			})))), o.a.createElement("div", {
				className: m.a.Copyright
			}, p._("Reddit Inc © {year} . All rights reserved", [p._param("year", (new Date).getFullYear().toString())], {
				hk: "3nJUt5"
			})))))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);
			const l = r.a.wrapped(i.b, "SubredditIcon", d.a),
				u = r.a.wrapped(e => o.a.createElement(a.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => o.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, o.a.createElement(l.a, {
						href: `/r/${e}/`
					}, o.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, o.a.createElement(l.b, null)), `r/${e}`))
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = n("./src/reddit/selectors/subredditMention.ts");
			class g extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return o.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const _ = Object(b.c)(g),
				v = Object(i.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				E = Object(r.b)(v),
				w = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: n,
					userVariant: s,
					rtJsonElementProps: r
				}) => {
					if (!t || !e) return o.a.createElement(_, {
						subredditName: n,
						rtJsonElementProps: r
					});
					switch (s) {
						case h.ff.SmIcon:
							return o.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: r
							});
						case h.ff.SmIconHc:
							return o.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: r
							});
						default:
							return o.a.createElement(_, {
								subredditName: n,
								rtJsonElementProps: r
							})
					}
				};
			t.b = E(w)
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "JoWBeMWu_l8J_Hn6Udz_j",
				dropdownRow: "JoWBeMWu_l8J_Hn6Udz_j"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/postCollection/index.ts"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = n("./src/reddit/components/OverflowMenu/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/selectors/activeModalId.ts"),
				g = n("./src/reddit/selectors/postCollection.ts"),
				_ = n("./node_modules/reselect/es/index.js"),
				v = n("./src/reddit/helpers/trackers/postCollection.ts"),
				E = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				w = n.n(E),
				y = n("./node_modules/fbt/lib/FbtPublic.js");
			const C = d.a.wrapped(f.b, "DropdownRow", w.a);
			let j;
			const O = Object(x.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				k = Object(x.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				S = Object(_.c)({
					createPostUrl: g.d,
					isDeleteConfirmModalOpen: O,
					isEditCollectionModalOpen: k,
					shouldShowCollectionEditOptions: g.s
				}),
				I = Object(a.b)(S, (e, t) => ({
					copyLink: () => e(Object(u.D)(t.permalink)),
					onCreatePost: n => {
						t.shouldShowCreatePost && e(Object(c.b)(n))
					},
					onRemoveCollection: () => e(Object(m.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(l.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						j || (j = await Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("editCollectionModal")]).then(n.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(l.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = I(Object(h.c)(e => {
				const {
					className: t,
					collectionId: n,
					copyLink: s,
					createPostUrl: r,
					isDeleteConfirmModalOpen: a,
					isEditCollectionModalOpen: c,
					onCreatePost: d,
					onRemoveCollection: l,
					onToggleDeleteConfirmModal: u,
					onToggleEditModal: m,
					shouldShowCollectionEditOptions: h,
					shouldShowCreatePost: f,
					targetPosition: x,
					tooltipPosition: g,
					sendEvent: _
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(b.b, {
					className: t,
					dropdownId: `collection-menu-${n}-${f?1:2}`,
					onClick: o.a,
					targetPosition: x,
					tooltipPosition: g
				}, i.a.createElement(C, {
					onClick: s,
					displayText: y.fbt._("Copy collection link", null, {
						hk: "3Rfodz"
					})
				}), h && i.a.createElement(i.a.Fragment, null, i.a.createElement(C, {
					onClick: () => {
						_(Object(v.l)(n)), m()
					},
					displayText: y.fbt._("Edit", null, {
						hk: "1nftDt"
					})
				}), i.a.createElement(C, {
					onClick: () => {
						_(Object(v.k)(n)), u()
					},
					displayText: y.fbt._("Delete collection", null, {
						hk: "2FyIJB"
					})
				}), f && i.a.createElement(C, {
					onClick: () => {
						d(r)
					},
					displayText: y.fbt._("Create post", null, {
						hk: "1v2jHl"
					})
				}))), c && j && i.a.createElement(j, {
					collectionId: n,
					onClose: m,
					onEditSuccess: m
				}), a && i.a.createElement(p.a, {
					actionText: y.fbt._("Yes, Delete", null, {
						hk: "15Espn"
					}),
					headerText: y.fbt._("Delete Collection", null, {
						hk: "1QJ3as"
					}),
					modalText: y.fbt._("Are you sure you want to delete this collection? The posts within the collection won't be deleted.", null, {
						hk: "36jKp5"
					}),
					onConfirm: l,
					toggleModal: u,
					trackClick: o.a
				}))
			}))
		},
		"./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_135f7-HhEMvekPzYxVBaFE",
				activeItemIndicator: "_31zbCRopTPo2NGtlgVsrBX",
				metaLine: "_1OrlyQwYIehGSk4bhP_l2R",
				title: "_2jvQA1RLlcCLU44q6eB3g0"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "_3V8ByF4idIiROiWQ9i468R",
				dropdownRow: "_3V8ByF4idIiROiWQ9i468R"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/noop.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/opener/index.ts"),
				l = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				u = n("./src/reddit/components/OverflowMenu/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/Row.tsx"),
				p = n("./src/reddit/helpers/path/index.ts"),
				b = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				h = n.n(b);
			const f = c.a.wrapped(m.b, "DropdownRow", h.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: n,
					onEditStartTime: o,
					onStartEventNow: i,
					postPermalink: c,
					shouldShowAddEventStartTime: m,
					targetPosition: b,
					tooltipPosition: h
				} = e;
				return a.a.createElement(u.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: r.a,
					targetPosition: b,
					tooltipPosition: h
				}, m && n && a.a.createElement(f, {
					onClick: n,
					displayText: s.fbt._("Add event start time", null, {
						hk: "4xWttR"
					})
				}), t && i && a.a.createElement(f, {
					onClick: i,
					displayText: s.fbt._("Start event now", null, {
						hk: "2TTNfJ"
					})
				}), t && o && a.a.createElement(f, {
					onClick: o,
					displayText: s.fbt._("Edit start time", null, {
						hk: "44XUxC"
					})
				}), a.a.createElement(f, {
					onClick: e.onRemoveClick,
					displayText: s.fbt._("Remove from collection", null, {
						hk: "qsiiu"
					})
				}), c && a.a.createElement(l.a, {
					target: d.d.BLANK,
					rel: d.c,
					isOverlay: !1,
					to: Object(p.b)(c)
				}, a.a.createElement(f, {
					displayText: s.fbt._("View post", null, {
						hk: "1PtvnG"
					})
				})))
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less": function(e, t, n) {
			e.exports = {
				Container: "I9mI9NePKM1BEsmfZR-6H",
				container: "I9mI9NePKM1BEsmfZR-6H",
				Content: "_6d8yyfLZcJ1OXLzEXoApB",
				content: "_6d8yyfLZcJ1OXLzEXoApB",
				Title: "_1efKScSk4JSYvERdEecZnZ",
				title: "_1efKScSk4JSYvERdEecZnZ",
				Secondary: "_3fCsv_r4CtfCTdAzBRaR9N",
				secondary: "_3fCsv_r4CtfCTdAzBRaR9N"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "ceAYEjQdznT14GrQQ52QV",
				content: "_36S4oraLw5gf--rC9-aWZs",
				overflowMenu: "MiZ0gbh9xe5Yiwt3RQf2o",
				metaLine: "_2JVAK9jCDOKkFXe1XS6gwH",
				title: "_2U-RjfXG1sY-NtByFOS-uC"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3_XzG2WCa3EYhqzE_vUcMN",
				topRow: "r_Dz4suUXbQkBdwR-eQ77",
				collectionDescription: "_3K3iJQYRdF3d2n1WlPxkpr",
				listContainer: "_2K8wDNk-kaP5gX-QEAXuMc",
				listWrapper: "VYYQfc9_vtbBaR47zbXdB",
				menuButton: "_1BX9a5jz4LWzuQohy4Cvz4"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/selectors/postCreations.ts"),
				l = n("./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = Object(c.c)({
				title: d.rb
			});
			var b = Object(a.b)(p)(e => {
					const {
						title: t
					} = e;
					return o.a.createElement("div", {
						className: u.a.container
					}, o.a.createElement("div", {
						className: u.a.activeItemIndicator
					}), t && o.a.createElement("h2", {
						className: u.a.title
					}, t), o.a.createElement("div", {
						className: u.a.metaLine
					}, m._("Editing", null, {
						hk: "2w5fAf"
					})))
				}),
				h = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = n("./src/reddit/actions/postCollection/index.ts"),
				x = n("./src/reddit/helpers/path/index.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/components/HumanDate/index.tsx"),
				v = n("./src/lib/constants/index.ts"),
				E = n("./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less"),
				w = n.n(E),
				y = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				C = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				j = n("./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less"),
				O = n.n(j);

			function k({
				className: e,
				isLoading: t
			}) {
				const n = Object(C.a)({
					isLoading: t
				});
				return o.a.createElement("div", {
					className: Object(r.a)(O.a.Container, e)
				}, o.a.createElement("div", {
					className: O.a.Content
				}, o.a.createElement("div", {
					className: Object(r.a)(O.a.Title, n)
				}), o.a.createElement("div", {
					className: Object(r.a)(O.a.Secondary, n)
				})))
			}
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), I = ["right", "bottom"], T = ["right", "top"];
			var P = Object(a.b)(() => Object(c.c)({
					post: g.H
				}), (e, t) => ({
					onRemovePostFromCollection: () => e(Object(f.g)(t.collectionId, t.postId))
				}))(e => {
					const {
						post: t,
						onRemovePostFromCollection: n
					} = e;
					return t ? o.a.createElement("div", {
						className: w.a.container
					}, o.a.createElement("div", {
						className: w.a.content
					}, o.a.createElement(h.a, {
						className: w.a.title,
						target: "_blank",
						to: Object(x.b)(t.permalink)
					}, t.title), o.a.createElement("div", {
						className: w.a.metaLine
					}, S._("Posted · {timeAgo}", [S._param("timeAgo", o.a.createElement(_.d, {
						seconds: t.created / v.Rb
					}))], {
						hk: "ZVJpV"
					}))), o.a.createElement(y.a, {
						onRemoveClick: n,
						className: w.a.overflowMenu,
						dropdownId: "collection-widget-item" + t.id,
						postPermalink: t.permalink,
						targetPosition: I,
						tooltipPosition: T
					})) : o.a.createElement(k, {
						className: w.a.container,
						isLoading: !0
					})
				}),
				N = n("./src/reddit/components/Widgets/PostCollection/index.m.less"),
				L = n.n(N);
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = ["right", "bottom"], D = ["right", "top"];
			class B extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.renderItem = (e, t) => o.a.createElement(P, {
						collectionId: this.props.collection.id,
						key: e,
						postId: e
					})
				}
				render() {
					const {
						className: e,
						collection: t
					} = this.props, n = t.postIds.map(this.renderItem).reverse();
					return o.a.createElement("div", {
						className: Object(r.a)(e, L.a.container)
					}, o.a.createElement("div", {
						className: L.a.topRow
					}, R._("Collection", null, {
						hk: "1pY1s2"
					}), o.a.createElement(i.a, {
						className: L.a.menuButton,
						collectionId: t.id,
						isSubmitPage: !0,
						permalink: t.permalink,
						targetPosition: M,
						tooltipPosition: D
					})), o.a.createElement("h4", {
						className: L.a.collectionDescription
					}, t.title), o.a.createElement("div", {
						className: L.a.listWrapper
					}, o.a.createElement("div", {
						className: L.a.listContainer
					}, n)), o.a.createElement(b, null))
				}
			}
			t.a = B
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				cleanStyle: "_12zeaxHNQC7XniG1qunPev",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/helpers/dom/index.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = n("./src/reddit/models/Widgets/index.ts"),
				h = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				f = n.n(h);
			const x = c.a.div("RuleShortName", f.a),
				g = c.a.div("RuleIndex", f.a),
				_ = c.a.div("RuleTitle", f.a),
				v = c.a.div("RuleDescription", f.a),
				E = c.a.wrapped(d.a, "RawHTMLDisplay", f.a),
				w = {};
			class y extends r.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(u.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === b.h.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: s
					} = this, o = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !s(e) && !!o;
					return r.a.createElement(x, {
						className: Object(a.a)({
							[f.a.pointerCursor]: i,
							[f.a.cleanStyle]: e.cleanStyle
						}),
						onClick: s(e) || !o ? void 0 : n
					}, r.a.createElement(p.a, null, r.a.createElement(g, {
						className: Object(a.a)({
							[f.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), r.a.createElement(_, null, `${e.rule.shortName}`), r.a.createElement("div", null, !s(e) && o && r.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && r.a.createElement(v, {
						className: Object(a.a)({
							[f.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? r.a.createElement(l.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: w
					}) : e.rule.descriptionHtml ? r.a.createElement(E, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const C = e => e.rules.length > 0 ? r.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: s.fbt._("{subredditName} Rules", [s.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return r.a.createElement(y, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => r.a.createElement(C, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				b = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				w = e => {
					const t = v(e);
					return Object(g.f)(t)
				},
				y = e => {
					const t = E(e);
					return Object(g.f)(t)
				};
			var C = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				j = n.n(C);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.u)(), S = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						o = Object(x.X)(e);
					return s || o
				},
				nigtmode: x.X,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = w(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = y(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: r,
						onClick: i,
						title: c,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, p = n ? j.a.widgetContentOnly : j.a.widgetContent, b = !s && this.props.styles, h = b ? this.getWidgetBackgroundStyles() : {}, f = b ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: s,
							[j.a.clickable]: !!i,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: i,
						style: h
					}, c && o.a.createElement("div", {
						className: j.a.widgetHeader,
						style: f
					}, o.a.createElement("div", {
						className: Object(a.a)(j.a.widgetTitle, l)
					}, o.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), r), o.a.createElement("div", {
						className: Object(a.a)(p, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(m.r, {
						className: j.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, O._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(S(Object(c.a)(Object(l.c)(I))))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				h = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(a.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && i.a.createElement("span", {
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(h.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)(h.a.row, e, {
					[h.a.mIsInteractive]: !t.noHover,
					[h.a.mIsSelected]: t.isSelected,
					[h.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(x, f({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, i = r;
					return s ? o.a.createElement(t, i) : void 0 !== n ? o.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(o);
			const i = ({
					isLoading: e
				}) => Object(s.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				a = e => Object(s.a)(r.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/helpers/isComment.ts"),
				r = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/telemetry/models/Outbound.ts");
			const a = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(o.b)(e) || Object(r.b)(e))) return Object(o.b)(e) ? i.SourceElement.Comment : Object(s.x)(t) ? i.SourceElement.PostDetail : Object(s.G)(t) ? i.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "d", (function() {
				return O
			}));
			var s, o, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/trackers/postEvent.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(s || (s = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(o || (o = {}));
			const d = e => t => ({
					source: s.collection,
					noun: o.post,
					...m(t, e)
				}),
				l = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: s.collection,
					noun: t ? o.unfollow : o.follow,
					...m(n, e)
				}),
				u = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: i.a.postEvent,
					noun: t ? o.unfollow : o.follow,
					...m(n, e)
				}),
				m = (e, t) => {
					const n = {
						...c.o(e),
						action: r.c.CLICK,
						subreddit: c.hb(e)
					};
					return void 0 === t ? n : {
						...n,
						post: c.I(e, t),
						postCollection: c.K(e, {
							postId: t
						}),
						postEvent: c.L(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...x(e),
					action: r.c.VIEW,
					noun: o.collectionEducation
				}),
				b = e => ({
					...x(e),
					action: r.c.CLICK,
					noun: o.collectionEducationGotIt
				}),
				h = e => ({
					...x(e),
					action: r.c.VIEW,
					noun: o.eventEducation
				}),
				f = e => ({
					...x(e),
					action: r.c.CLICK,
					noun: o.eventEducationGotIt
				}),
				x = e => ({
					...c.o(e),
					subreddit: c.hb(e),
					source: s.postComposer
				}),
				g = (e, t) => n => ({
					...m(n, e),
					source: t || s.postOverflowMenu,
					noun: o.collectionAddPost
				}),
				_ = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: o.collectionRemovePost
				}),
				v = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: o.collectionCancel
				}),
				E = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						noun: o.collectionCreate
					}
				},
				w = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: o.collectionSelect
				}),
				y = e => t => ({
					...c.o(t),
					subreddit: c.hb(t),
					source: s.collectionComposer,
					action: r.c.CLICK,
					noun: o.collectionDelete,
					postCollection: c.J(t, {
						collectionId: e
					})
				}),
				C = e => t => ({
					...m(t),
					source: s.collectionComposer,
					noun: o.collectionEdit,
					postCollection: c.J(t, {
						collectionId: e
					})
				}),
				j = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: o.startEvent
				}),
				O = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						action: r.c.VIEW,
						noun: o.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return _
			}));
			var s, o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/timezone/index.ts"),
				a = n("./src/reddit/constants/tracking.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(s || (s = {}));
			const p = e => u.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...u.o(e),
						source: s.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: u.hb(e)
					})
				},
				h = e => {
					Object(m.a)({
						...u.o(e),
						source: s.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: u.hb(e),
						postEvent: v(e),
						postComposer: E(e)
					})
				},
				f = () => e => ({
					source: s.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: p(e),
					postEvent: v(e)
				}),
				x = e => t => ({
					...C(t, Object(d.o)(t)),
					source: s.postComposer,
					noun: "apply",
					postComposer: w(e)
				}),
				g = () => e => ({
					...C(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				_ = e => t => ({
					...C(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: E(t),
					postEvent: y(e)
				}),
				v = e => {
					const t = Object(l.p)(e);
					return t && y(t)
				},
				E = e => w(Object(l.p)(e)),
				w = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / o.Rb : void 0
					}
				},
				y = e => {
					const t = Object(i.f)(e.startDate).getTime() / o.Rb,
						n = Object(i.f)(e.endDate).getTime() / o.Rb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: n,
						eventState: Object(r.e)(t, n)
					}
				},
				C = (e, t) => {
					const n = {
						source: s.eventComposer,
						action: a.c.CLICK,
						subreddit: u.hb(e)
					};
					return t ? {
						...n,
						post: u.I(e, t),
						postEvent: u.L(e, {
							postId: t
						}),
						postCollection: u.K(e, {
							postId: t
						})
					} : n
				}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return w
			}));
			var s, o, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(o || (o = {}));
			const m = e => ({
					...u.o(e),
					source: o.LINK,
					action: r.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: o,
					screen: u.ab(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {
						outbound: void 0
					};
					const o = Object(a.b)(n) ? "postId" : "commentId",
						r = {
							url: `/r/${s}/`,
							sourceElement: Object(c.a)(t),
							subredditName: s,
							[o]: n.id
						},
						d = Object(l.w)(e, {
							subredditName: s
						});
					return d ? {
						outbound: {
							...r,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...r
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {};
					const s = Object(a.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.I(e, n.id),
						subreddit: u.ib(e, s),
						...b(e, t)
					}
				},
				f = e => t => ({
					...m(t),
					...h(t, e)
				}),
				x = e => t => ({
					...p(t),
					source: "global",
					action: r.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.jb(t, e),
					screen: u.ab(t)
				}),
				g = (e, t) => n => ({
					...p(n),
					source: o.DISCOVERY_UNIT,
					action: r.c.VIEW,
					noun: s.ITEM_POST,
					post: u.I(n, t),
					subreddit: u.jb(n, e),
					screen: u.ab(n)
				}),
				_ = (e, t) => n => ({
					...p(n),
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.ITEM_POST,
					post: u.I(n, t),
					subreddit: u.jb(n, e),
					screen: u.ab(n)
				}),
				v = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				E = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				w = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, o, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const a = (e, t) => n => ({
					source: o.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(i.ub)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				c = (e, t) => n => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: i.I(n, e),
					subreddit: i.hb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...i.o(n)
				}),
				d = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: s.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(a);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function o(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/pages/ErrorPages/index.m.less"),
				c = n.n(a);
			const d = ({
					message: e
				}) => r.a.createElement("div", {
					className: c.a.container
				}, r.a.createElement("h3", {
					className: c.a.title
				}, e || s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), r.a.createElement(i.n, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, s.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => r.a.createElement("div", {
					className: c.a.container
				}, r.a.createElement("h3", {
					className: c.a.title
				}, e || s.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), r.a.createElement(i.n, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, s.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/PostDraft/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/lib/objectSelector/index.ts"),
				u = n("./src/reddit/components/RichTextJson/index.tsx"),
				m = n("./src/reddit/models/PostDraft/index.ts"),
				p = n("./src/reddit/components/PostDraft/PostDraftBody/index.m.less"),
				b = n.n(p);
			const h = c.a.h5("Body", b.a),
				f = c.a.a("Link", b.a),
				x = Object(l.b)(e => ({
					renderingObjectInfo: e.draft
				}));

			function g(e) {
				const {
					draft: t
				} = e;
				if (!t.body) return null;
				switch (t.kind) {
					case m.b.RichText:
						return t.body ? o.a.createElement(u.a, {
							content: t.body,
							rtJsonElementProps: x(e)
						}) : null;
					case m.b.Markdown:
						return o.a.createElement(h, null, t.body);
					case m.b.Link:
						return o.a.createElement(h, null, o.a.createElement(f, {
							href: t.body
						}, t.body));
					default:
						return o.a.createElement(h, null)
				}
			}
			var _ = n("./src/reddit/components/PostDraft/PostDraftFooter/index.m.less"),
				v = n.n(_);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = c.a.div("Body", v.a), y = c.a.div("Container", v.a), C = c.a.a("Link", v.a), j = c.a.h5("Title", v.a);
			var O = () => o.a.createElement(y, null, o.a.createElement(j, null, E._("This is a preview of a post", null, {
					hk: "2HXXP9"
				})), o.a.createElement(w, null, E._("You are viewing a draft shared by another person. It has not yet been posted to Reddit. See something concerning?", null, {
					hk: "nY9fk"
				}), o.a.createElement(C, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-should-i-do-if-i-see-something-i"
				}, E._("Report this draft", null, {
					hk: "1xcVwQ"
				})))),
				k = n("./src/reddit/components/PostDraft/index.m.less"),
				S = n.n(k),
				I = n("./src/reddit/components/HumanDate/index.tsx");
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js"), P = c.a.div("ReviewDraftHeader", S.a), N = c.a.h2("PostDraftLabel", S.a), L = c.a.div("Container", S.a), R = c.a.time("DraftSavedTime", S.a), M = c.a.h1("Title", S.a), D = Object(d.u)(), B = Object(i.c)({
				profile: d.k
			});
			var W = D(Object(r.b)(B)(e => {
					const {
						draft: t,
						profile: n
					} = e;
					return t ? o.a.createElement(o.a.Fragment, null, o.a.createElement(P, null, o.a.createElement(N, null, T._("Review draft", null, {
						hk: "tclLq"
					}))), o.a.createElement(L, null, n && o.a.createElement(R, null, T._("Draft last updated by {username} {timeDiff}", [T._param("username", `u/${n.name}`), T._param("timeDiff", o.a.createElement(I.d, {
						seconds: (t.modified || t.created) / a.Rb
					}))], {
						hk: "3QCJvU"
					})), o.a.createElement(M, null, t.title), o.a.createElement(g, {
						draft: t
					}), o.a.createElement(O, null))) : null
				})),
				A = n("./src/reddit/components/PostingSidebar/index.tsx"),
				H = n("./src/reddit/layout/page/Listing/index.tsx"),
				F = n("./src/reddit/pages/ErrorPages/index.tsx"),
				U = n("./src/reddit/selectors/postDraft.ts");
			const J = Object(d.u)(),
				V = Object(i.c)({
					draft: (e, {
						match: t
					}) => Object(U.d)(e, {
						draftId: t.params.draftId
					})
				}),
				G = Object(r.b)(V);
			class K extends s.Component {
				render() {
					const {
						draft: e,
						pageLayer: t
					} = this.props;
					if (!t || !e) return o.a.createElement(F.b, null);
					const n = e.subredditId;
					return o.a.createElement(H.a, {
						redditStyle: !0,
						disableFullscreen: !0,
						navBar: o.a.createElement("div", null),
						content: o.a.createElement(W, {
							draft: e
						}),
						sidebar: n && o.a.createElement(A.a, {
							subredditOrProfileId: n
						})
					})
				}
			}
			t.default = J(G(K))
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const a = e => o.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.Ze
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === s.ff.SmIcon || t === s.ff.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const n = Object(i.V)(e, {
						subredditName: t
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostDraft.0c30535971a92eb2215c.js.map