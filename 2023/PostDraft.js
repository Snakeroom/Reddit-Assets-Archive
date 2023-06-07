// https://www.redditstatic.com/desktop2x/PostDraft.b1ee16654204638fb8d3.js
// Retrieved at 6/7/2023, 1:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostDraft"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var o;
			o = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function o(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var s, r = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						f = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						g = !i && !u && !m && !p && /linux/i.test(t),
						x = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						_ = n(/version\/(\d+(\.\d+)?)/i),
						C = /tablet/i.test(t) && !/tablet pc/i.test(t),
						v = !C && /[^-]mobi/i.test(t),
						k = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: _ || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || _
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: _ || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: _ || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: _ || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? s = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? s = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? s = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? s = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? s = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? s = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (s.msedge = e, s.version = x) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: x
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || _
					} : u ? s = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? s = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (s = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (s.firefoxos = e, s.osname = "Firefox OS")) : l ? s = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? s = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? s = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? s = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: _ || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: _ || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || _
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || _
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || _
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? s = {
						name: "Android",
						version: _
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, _ && (s.version = _)) : r ? (s = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, _ && (s.version = _)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || _
					} : {
						name: n(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && _ && (s.version = _)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && r ? (s[r] = e, s.ios = e, s.osname = "iOS") : h ? (s.mac = e, s.osname = "macOS") : k ? (s.xbox = e, s.osname = "Xbox") : f ? (s.windows = e, s.osname = "Windows") : g && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var E = "";
					s.windows ? E = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (s.osversion = E);
					var j = !s.windows && E.split(".")[0];
					return C || c || "ipad" == r || i && (3 == j || j >= 4 && !v) || s.silk ? s.tablet = e : (v || "iphone" == r || "ipod" == r || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var n, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) o.push(t(e[n]));
					return o
				}

				function r(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), n = s(e, (function(e) {
							var n = t - o(e);
							return s((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, o, s) {
					var i = n;
					"string" == typeof o && (s = o, o = void 0), void 0 === o && (o = !1), s && (i = t(s));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([a, e[c]]) < 0
						} return o
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = r, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = o() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", o)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, o, s) {
				return s(e, (function(e, s, r) {
					n = o ? (o = !1, e) : t(n, e, s, r)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), o(s(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? o : i,
					d = arguments.length < 3;
				return c(e, r(t, 4), n, d, s)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return D
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "a", (function() {
				return H
			})), n.d(t, "c", (function() {
				return G
			})), n.d(t, "h", (function() {
				return Y
			})), n.d(t, "f", (function() {
				return Q
			})), n.d(t, "d", (function() {
				return re
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
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
			var f = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: u.pb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var h = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: u.pb.POST,
				data: {
					title: t,
					sr_fullname: n
				}
			});
			var g = (e, t) => Object(m.a)(Object(p.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: u.pb.POST,
					data: {
						collection_id: t
					}
				}),
				x = n("./src/config.ts");
			var _ = (e, t) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${x.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: u.pb.GET
			});
			var C = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: u.pb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var v = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: u.pb.POST,
				data: {
					collection_id: t,
					title: n
				}
			});
			var k = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: u.pb.POST,
				data: {
					collection_id: t,
					link_ids: n.join(",")
				}
			});
			var E = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: u.pb.POST,
				data: {
					collection_id: t,
					description: n
				}
			});
			var j = (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: u.pb.POST,
					data: {
						collection_id: t,
						display_layout: n
					}
				}),
				y = n("./src/reddit/helpers/overlay/index.ts"),
				O = n("./src/reddit/helpers/path/index.ts"),
				w = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				P = n("./src/reddit/selectors/postCollection.ts"),
				L = n("./src/reddit/selectors/posts.ts"),
				I = n("./src/reddit/selectors/subreddit.ts");
			const N = Object(i.a)(c.c),
				T = Object(i.a)(c.b),
				R = Object(i.a)(c.d),
				D = (e, t) => async (n, o, s) => {
					let {
						apiContext: r
					} = s;
					n(N());
					const i = await h(r(), e, t);
					let a;
					if (i.ok) {
						const e = o().meta,
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
							}))(i.body);
						n(R({
							collection: t,
							meta: e
						})), a = t
					} else {
						const e = i.error;
						n(T(e))
					}
					return a
				}, M = Object(i.a)(c.f), B = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n().postCollection.subredditToIds || {};
					if (Object.keys(i).length > 0) return;
					const a = await _(r(), e);
					a.ok ? t(M(a.body)) : t(Object(d.f)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, A = Object(i.a)(c.g), F = (e, t, n) => async (s, r, i) => {
					let {
						apiContext: a
					} = i;
					if ((await C(a(), e, t)).ok) {
						const i = r(),
							a = Object(L.F)(i, {
								postId: t
							}),
							c = a && a.title || "",
							l = Object(P.q)(i, {
								collectionId: e
							}),
							u = (l && l.postIds && l.postIds.indexOf(t) || -1) - 1;
						if (s(A({
								collectionId: e,
								postId: t
							})), n && u >= 0) {
							const t = r(),
								n = Object(P.q)(t, {
									collectionId: e
								}),
								o = n && n.postIds && n.postIds[u] || "",
								i = Object(L.F)(t, {
									postId: o
								});
							i && i.permalink && s(Object(y.a)(i.permalink))
						}
						s(Object(d.f)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Following post removed from collection successfully: {postTitle}", [o.fbt._param("postTitle", c)], {
								hk: "8e1lV"
							}),
							buttonText: o.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: H(e, t)
						}))
					} else s(Object(d.f)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, W = Object(i.a)(c.a), z = Object(i.a)(c.t), H = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					const a = s();
					if ((await f(i(), e, t)).ok) {
						n(W({
							collectionId: e,
							postId: t
						})), n(z({
							collectionId: e,
							postId: t
						}));
						const s = Object(L.F)(a, {
								postId: t
							}),
							r = Object(P.q)(a, {
								collectionId: e
							}),
							i = r && r.title || "";
						n(Object(d.f)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Success! You added a post to the collection: {title}", [o.fbt._param("title", i)], {
								hk: "3KNJWi"
							}),
							buttonText: o.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(y.a)(s.permalink)
						}))
					} else n(Object(d.f)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, q = Object(i.a)(c.e), G = (e, t) => async (n, i, a) => {
					let {
						apiContext: c
					} = a;
					const l = i();
					if ((await g(c(), e)).ok) {
						const {
							url: i
						} = l.platform.currentPage, a = Object(P.q)(l, {
							collectionId: e
						}), c = a && a.title || "", u = a && a.subredditId, m = u ? Object(I.c)(l, u) : "/";
						n(q({
							collectionId: e,
							collection: a
						})), n(t ? Object(s.c)(Object(r.a)(i, ["collection"])) : Object(s.b)(m)), n(Object(d.f)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection deleted successfully: {title}", [o.fbt._param("title", c)], {
								hk: "4tcOKB"
							})
						}))
					} else n(Object(d.f)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, K = Object(i.a)(c.r), U = Object(i.a)(c.n), X = Object(i.a)(c.s), Y = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					n(K());
					const a = await v(i(), e, t);
					let c = !1;
					if (a.ok) n(X({
						collectionId: e,
						newTitle: t
					})), n(Object(d.f)({
						kind: w.b.SuccessMod,
						text: o.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), c = !0;
					else {
						const e = a.error;
						n(U(e)), n(Object(d.f)({
							kind: w.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return c
				}, V = Object(i.a)(c.l), J = Object(i.a)(c.m), Z = Object(i.a)(c.k), Q = e => async (t, n) => {
					const o = n();
					if (Object(S.b)(o) || Object(S.c)(o)) return void t(Object(a.Z)(Object(O.b)(e.permalink), e.id));
					const r = o.platform.currentPage.locationState;
					t(!(!r || !r[l.b.IsOverlay]) ? Object(y.a)(e.permalink) : Object(s.b)(Object(O.b)(e.permalink)))
				}, $ = Object(i.a)(c.i), ee = Object(i.a)(c.j), te = Object(i.a)(c.h), ne = Object(i.a)(c.p), oe = Object(i.a)(c.o), se = Object(i.a)(c.q), re = e => async t => {
					const n = [],
						{
							collectionId: s,
							description: r,
							displayLayout: i,
							postIds: a,
							title: c
						} = e;
					a && n.push(t(((e, t) => async (n, s, r) => {
						let {
							apiContext: i
						} = r;
						n($());
						const a = await k(i(), e, t);
						let c = !1;
						return a.ok ? (n(ee({
							collectionId: e,
							postIds: t
						})), n(Object(d.f)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), c = !0) : (n(te({
							error: a.error
						})), n(Object(d.f)({
							kind: w.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), c
					})(s, a))), c && n.push(t(Y(s, c))), void 0 !== r && n.push(t(((e, t) => async (n, s, r) => {
						let {
							apiContext: i
						} = r;
						n(V());
						const a = await E(i(), e, t);
						let c = !1;
						if (a.ok) n(J({
							collectionId: e,
							newDescription: t
						})), n(Object(d.f)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), c = !0;
						else {
							const e = a.error;
							n(Z(e)), n(Object(d.f)({
								kind: w.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return c
					})(s, r))), i && n.push(t(((e, t) => async (n, s, r) => {
						let {
							apiContext: i
						} = r;
						n(ne());
						const a = await j(i(), e, t);
						let c = !1;
						if (a.ok) n(se({
							collectionId: e,
							newLayout: t
						})), n(Object(d.f)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), c = !0;
						else {
							const e = a.error;
							n(oe(e)), n(Object(d.f)({
								kind: w.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return c
					})(s, i)));
					let l = !0;
					return await Promise.all(n).then(e => {
						e.forEach(e => {
							e || (l = !1)
						})
					}), l
				}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
		"./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less": function(e, t, n) {
			e.exports = {
				LanguageRow: "_1uqw13duLAypklZz9JuxH5",
				languageRow: "_1uqw13duLAypklZz9JuxH5",
				Selected: "C0ynfBku9Az2wYA9j1_PA",
				selected: "C0ynfBku9Az2wYA9j1_PA",
				NightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				nightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				ButtonSection: "_2go248Acx87AyaspT-IqC3",
				buttonSection: "_2go248Acx87AyaspT-IqC3",
				SelectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				selectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				FrontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				frontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				TextSection: "_5Rt2rPaHLuyB5smTxh9cS",
				textSection: "_5Rt2rPaHLuyB5smTxh9cS",
				Placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				Icon: "_1ym0rG9P61fqq5EGeggDEg",
				icon: "_1ym0rG9P61fqq5EGeggDEg",
				isLeft: "_1wilU6X1e2oYYu84p5M0Bn",
				isRight: "_1N6ONFJor0MYB1AANfCh8M",
				LanguageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				languageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				HeaderBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				headerBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				MoreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				moreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				PromptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				promptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				PromptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				promptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				Close: "Z2DAjXDKT-rjUoOgPeR9b",
				close: "Z2DAjXDKT-rjUoOgPeR9b",
				PromptTitle: "_6pr2vYjViLknuzg7J_4II",
				promptTitle: "_6pr2vYjViLknuzg7J_4II",
				PromptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				promptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				PromptRow: "piSYz03CLXLD5jdQwPjUy",
				promptRow: "piSYz03CLXLD5jdQwPjUy",
				Dismiss: "Fssd937Pdx1KOrc1lhBS5",
				dismiss: "Fssd937Pdx1KOrc1lhBS5"
			}
		},
		"./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				l = n.n(d),
				u = n("./src/reddit/constants/componentTestIds.ts"),
				m = n("./src/reddit/contexts/ApiContext.tsx"),
				p = n("./src/reddit/endpoints/onboarding/languageSelections.ts"),
				b = n("./src/reddit/constants/tracking.ts"),
				f = n("./src/reddit/selectors/telemetry.ts");
			const h = "bottom_sheet";
			var g;
			! function(e) {
				e.ADD = "add", e.LATER = "maybe_later", e.SKIP = "skip"
			}(g || (g = {}));
			var x = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/icons/svgs/Close/index.tsx"),
				C = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/eligibleUXExperiences.ts"),
				k = n("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				E = n("./src/reddit/selectors/meta.ts"),
				j = n("./src/redditGQL/types.ts");
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = e => {
				const {
					gqlContext: t
				} = e, n = Object(r.d)(), d = Object(x.a)(), m = Object(r.e)(E.b), [v, k] = Object(o.useState)(!1), [O, w] = Object(o.useState)({}), [S, P] = Object(o.useState)({}), [L, I] = Object(o.useState)([]);
				let N = ["es"];
				const T = Object(o.useCallback)(async () => {
					const e = await Object(p.b)(t);
					e && (P(e.languages), I(e.preferences), k(!0))
				}, [t]);
				Object(o.useEffect)(() => {
					T()
				}, [T]);
				const R = e => {
						d("skip" === e ? (e => t => ({
							...Object(f.o)(t),
							source: h,
							action: b.c.CLICK,
							noun: g.SKIP,
							actionInfo: {
								...Object(f.d)(t),
								type: e
							}
						}))(m) : (e => t => ({
							...Object(f.o)(t),
							source: h,
							action: b.c.CLICK,
							noun: g.LATER,
							actionInfo: {
								...Object(f.d)(t),
								type: e
							}
						}))(m)), k(!1), n(Object(a.c)({
							experience: j.cb.LanguagePreferenceBottomSheet,
							value: !1
						}))
					},
					D = () => {
						const e = Object.keys(O).join();
						d(((e, t) => n => ({
							...Object(f.o)(n),
							source: h,
							action: b.c.CLICK,
							noun: g.ADD,
							actionInfo: {
								...Object(f.d)(n),
								reason: t,
								type: e
							}
						}))(m, e)), (async () => {
							var e;
							const o = O;
							L.map(e => o[e] = !0);
							const s = await Object(p.d)(t, o);
							(null === (e = null == s ? void 0 : s.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? n(Object(c.f)({
								kind: C.b.SuccessCommunity,
								text: y._("Changes saved", null, {
									hk: "2isjrZ"
								})
							})): n(Object(c.f)({
								kind: C.b.Error,
								text: y._("Changes failed to save. Try adding content languages in user settings", null, {
									hk: "2YYdoj"
								})
							}))
						})(), k(!1), n(Object(a.c)({
							experience: j.cb.LanguagePreferenceBottomSheet,
							value: !1
						}))
					};
				return N = N.filter(e => !L.includes(e)), v && 0 !== N.length ? (d((e => t => ({
					...Object(f.o)(t),
					source: h,
					action: b.c.VIEW,
					noun: b.b.SCREEN,
					actionInfo: {
						...Object(f.d)(t),
						type: e
					}
				}))(m)), n(Object(a.d)(j.cb.LanguagePreferenceBottomSheet)), s.a.createElement("div", {
					className: l.a.PromptContainer
				}, s.a.createElement("div", {
					className: l.a.PromptClose
				}, s.a.createElement(_.a, {
					className: l.a.Close,
					onClick: () => R("skip"),
					"data-testid": u.e
				})), s.a.createElement("div", {
					className: l.a.PromptTitle
				}, y._("See content in more languages", null, {
					hk: "4uyzS1"
				})), s.a.createElement("div", {
					className: l.a.PromptSubtitle
				}, y._("Update your settings to make it easier to discover content in multiple languages", null, {
					hk: "3VhB1c"
				})), 1 === N.length ? s.a.createElement("div", {
					className: l.a.PromptRow,
					onClick: () => (e => {
						const t = O;
						t[e] = !0, w(t), D()
					})(N[0]),
					"data-testid": N[0]
				}, y._("Add {language}", [y._param("language", S[N[0]])], {
					hk: "2emiHZ"
				})) : null, s.a.createElement("div", {
					className: Object(i.a)(l.a.PromptRow, {
						[l.a.Dismiss]: !0
					}),
					onClick: () => R("later")
				}, y._("Maybe later", null, {
					hk: "2LjBDw"
				})))) : null
			};
			t.a = Object(m.b)(e => {
				var t;
				const {
					gqlContext: n
				} = e, o = Object(r.f)().getState();
				return (null === (t = Object(r.e)(e => Object(v.a)(e, {
					experience: j.cb.LanguagePreferenceBottomSheet
				}))) || void 0 === t ? void 0 : t.value) && Object(k.b)(o) ? s.a.createElement(O, {
					gqlContext: n
				}) : null
			})
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
				return k
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/selectors/tooltip.ts"),
				h = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = n("./src/reddit/components/OverflowMenu/index.m.less"),
				x = n.n(g);
			const _ = d.a.wrapped(m.a, "_Dropdown", x.a),
				C = Object(u.a)(_),
				v = d.a.button("MenuButton", x.a),
				k = d.a.wrapped(p.b, "DropdownRow", x.a),
				E = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(f.b)(n)(e)
					}
				}),
				j = Object(i.b)(E, (e, t) => {
					let {
						dropdownId: n
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: n
						}))
					}
				}),
				y = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = j(e => r.a.createElement(v, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": o.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: y(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": h.b.OVERFLOW_MENU
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
			}), r.a.createElement(C, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
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
		"./src/reddit/components/PostingSidebar/LearnMoreAboutTalk/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2pgQjKwBDQ7MPluFUOB41q",
				container: "_2pgQjKwBDQ7MPluFUOB41q",
				TitleContainer: "XYqpmL97Mojvuir5dZiAb",
				titleContainer: "XYqpmL97Mojvuir5dZiAb",
				AudioIcon: "_1FWxpa0UmbyF_B2qCewtxY",
				audioIcon: "_1FWxpa0UmbyF_B2qCewtxY",
				Title: "_2u9RgALks50HVuozdlhcXF",
				title: "_2u9RgALks50HVuozdlhcXF",
				Description: "_3q0yPkX3rBj4tKtZBXCD4-",
				description: "_3q0yPkX3rBj4tKtZBXCD4-",
				New: "_2ee3y-8NaFG6rkUvYc4ogg",
				new: "_2ee3y-8NaFG6rkUvYc4ogg",
				LearnMoreLink: "_3R_NxfLdPeSj6X9Glv1wM7",
				learnMoreLink: "_3R_NxfLdPeSj6X9Glv1wM7"
			}
		},
		"./src/reddit/components/PostingSidebar/LearnMoreAboutTalk/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/PostingSidebar/LearnMoreAboutTalk/index.m.less"),
				d = n.n(c);
			t.a = () => {
				const e = Object(a.b)("audio");
				return r.a.createElement("div", {
					className: d.a.Container
				}, r.a.createElement("div", {
					className: d.a.TitleContainer
				}, r.a.createElement(e, {
					className: d.a.AudioIcon
				}), r.a.createElement("h4", {
					className: d.a.Title
				}, r.a.createElement("span", {
					className: d.a.New
				}, o.fbt._("NEW!", null, {
					hk: "x4BpB"
				})), " ", o.fbt._("Host live audio talks", null, {
					hk: "26n05N"
				}))), r.a.createElement("p", {
					className: d.a.Description
				}, o.fbt._("Have fun hosting AMAs, Q&As, or just hanging out with your community.", null, {
					hk: "18zlgC"
				})), r.a.createElement(i.t, {
					kind: i.b.ExternalLink,
					priority: i.c.PlainLink,
					href: "https://reddithelp.com/hc/en-us/articles/4404349195284 ",
					target: "_blank",
					className: d.a.LearnMoreLink
				}, o.fbt._("Learn more about Reddit Talk", null, {
					hk: "3N8tu4"
				})))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/config.ts");
			const {
				redditUrl: i
			} = r.a, a = `${i}/help/contentpolicy`, c = `${i}/wiki/reddiquette`;
			var d = n("./src/reddit/components/PostingSidebar/PolicyRow/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement("div", {
				className: l.a.PolicyRow
			}, u._("Please be mindful of reddit's {=content policy} and practice good {=reddiquette}.", [u._param("=content policy", s.a.createElement("a", {
				href: a
			}, u._("content policy", null, {
				hk: "2PeDvo"
			}))), u._param("=reddiquette", s.a.createElement("a", {
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/icons/svgs/SnooPosting/index.tsx"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less"),
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const b = p.a.wrapped(d.a, "Snoo", m.a),
				f = p.a.li("Li", m.a),
				h = p.a.ol("Ol", m.a),
				g = p.a.div("Title", m.a),
				x = Object(a.c)({
					submissionType: l.rb
				});
			t.a = p.a.wrapped(Object(i.b)(x)(e => {
				const {
					className: t,
					submissionType: n
				} = e, s = n === c.bc.CROSSPOST;
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(g, null, r.a.createElement(b, null), s ? o.fbt._("Crossposting to Reddit", null, {
					hk: "2ODPDt"
				}) : o.fbt._("Posting to Reddit", null, {
					hk: "8eEIT"
				})), r.a.createElement(h, null, r.a.createElement(f, null, o.fbt._("Remember the human", null, {
					hk: "1x3u5R"
				})), r.a.createElement(f, null, o.fbt._("Behave like you would in real life", null, {
					hk: "3pxfk1"
				})), r.a.createElement(f, null, o.fbt._("Look for the original source of content", null, {
					hk: "1FfUM4"
				})), r.a.createElement(f, null, o.fbt._("Search for duplicates before posting", null, {
					hk: "3Ij1gf"
				})), r.a.createElement(f, null, o.fbt._("Read the community’s rules", null, {
					hk: "3RNQW2"
				})), s && r.a.createElement(f, null, o.fbt._("You must join a community to crosspost there", null, {
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
			var o = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				s = n.n(o),
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
				f = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				_ = n("./src/reddit/selectors/postCreations.ts"),
				C = n("./src/reddit/selectors/profile.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/selectors/widgets.ts"),
				E = n("./src/reddit/components/PostingSidebar/LearnMoreAboutTalk/index.tsx"),
				j = n("./src/reddit/components/PostingSidebar/PolicyRow/index.tsx"),
				y = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx"),
				O = n("./src/reddit/components/PostingSidebar/index.m.less"),
				w = n.n(O),
				S = n("./src/lib/constants/index.ts"),
				P = n("./src/lib/lessComponent.tsx");
			const L = Object(r.a)({
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
				I = P.a.div("Container", w.a),
				N = Object(h.v)(),
				T = new Set(["all", "post"]),
				R = Object(l.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const o = Object(h.s)(e, {
						pageLayer: n
					});
					return o && Object(v.W)(e, {
						subredditId: o.id
					})
				}, e => (e || []).filter(e => T.has(e.kind))),
				D = (e, t) => {
					let {
						pageLayer: n
					} = t;
					const o = Object(h.s)(e, {
						pageLayer: n
					});
					return !(!o || !Object(k.d)(e, {
						subredditName: o.name
					}))
				},
				M = Object(l.c)({
					hasIdCardWidgetData: D,
					isCreationPagePending: _.L,
					profile: (e, t) => {
						let {
							pageLayer: n,
							subredditOrProfileId: o
						} = t;
						return o ? Object(C.r)(e, {
							profileId: o
						}) : Object(h.l)(e, {
							pageLayer: n
						})
					},
					subreddit: h.s,
					subredditRules: R,
					currentPostCollection: h.g,
					isOpenAIPilotV1: x.g,
					submissionType: _.rb
				}),
				B = Object(d.b)(M),
				A = e => {
					const {
						className: t,
						currentPostCollection: n,
						hasIdCardWidgetData: o,
						isCreationPagePending: s,
						isOpenAIPilotV1: r,
						profile: a,
						submissionType: d,
						subreddit: l,
						subredditRules: h
					} = e, x = o || s;
					return c.a.createElement(I, {
						className: Object(i.a)(t, {
							[w.a.isOpenAIPilotV1]: r
						})
					}, n && c.a.createElement(b.a, {
						collection: n
					}), l && x && c.a.createElement(p.a, null, c.a.createElement(u.a, {
						isSubmissionPage: !0,
						listingName: l.name
					})), a && !l && c.a.createElement(p.a, null, c.a.createElement(L, {
						profileName: a.name,
						isOverlay: !1,
						isSubmissionPage: !0
					})), l && h && c.a.createElement(p.a, null, c.a.createElement(f.a, {
						subredditName: l.name,
						display: g.h.COMPACT,
						rules: h,
						redditStyle: !0
					})), d === S.bc.TALK && c.a.createElement(p.a, null, c.a.createElement(E.a, null)), c.a.createElement(y.a, null), c.a.createElement(p.a, null), c.a.createElement(j.a, null), c.a.createElement(m.a, {
						redditStyle: !0
					}))
				};
			t.a = N(B(A))
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				f = c.a.wrapped(e => {
					const t = Object(l.a)();
					return r.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, o, s) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									s && o(n, s), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(o.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(o.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(a.a)(f))
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = n("./src/reddit/constants/experiments.ts"),
				p = n("./src/reddit/constants/location.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/trackers/navigation.ts"),
				h = n("./src/reddit/selectors/experiments/countrySites.ts"),
				g = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				_ = n("./src/reddit/selectors/meta.ts"),
				C = n("./src/redditGQL/types.ts"),
				v = n("./src/reddit/components/SidebarFooter/index.m.less"),
				k = n.n(v);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = c.a.a("Link", k.a), y = Object(i.c)({
				countryCode: _.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: x.a
			}), O = Object(r.b)(y), w = Object(b.v)({
				isFrontpage: b.B,
				isCountrySitePage: b.z
			}), S = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return s.a.createElement("div", {
					className: k.a.GreyRereddit
				}, n, !!p.c[t] && s.a.createElement("div", {
					className: k.a.LinkContainer
				}, s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(j, {
					href: "https://www.redditinc.com/policies/impressum"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), t === C.j.De && s.a.createElement(j, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: k.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(j, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), t === C.j.De && s.a.createElement(j, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})))), s.a.createElement("div", {
					className: k.a.LinkContainer
				}, s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(j, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(j, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(j, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(j, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), s.a.createElement("div", {
					className: k.a.Copyright
				}, E._("Reddit, Inc. © {year}. All rights reserved.", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})))
			};
			t.a = w(O(Object(l.c)(e => {
				const t = Object(r.f)().getState(),
					n = Object(h.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.md.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.md.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.md.LargeImagePreview ? e.reredditButtons : [];
					return s.a.createElement(S, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const o = t => {
					const o = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return n.includes(t) || "en" === t ? s.a.createElement(j, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(f.a)(t))
					}, o[t]) : null
				};
				return s.a.createElement(u.a, {
					className: k.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!p.c[e.countryCode] && s.a.createElement("div", {
					className: k.a.LinkContainer
				}, s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(j, {
					href: "https://www.redditinc.com/policies/impressum"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === C.j.De && s.a.createElement(j, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: k.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(j, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === C.j.De && s.a.createElement(j, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})))), s.a.createElement("div", {
					className: k.a.LinkContainer
				}, s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(j, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(j, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(j, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(j, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: k.a.LinkContainer
				}, s.a.createElement("div", {
					className: k.a.Column
				}, o("en"), o("fr"), o("it")), s.a.createElement("div", {
					className: k.a.Column
				}, o("de"), o("es"), o("pt"))), s.a.createElement("div", {
					className: k.a.Copyright
				}, E._("Reddit, Inc. © {year}. All rights reserved.", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})), s.a.createElement(d.a, null))
			})))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", s.a)
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "JoWBeMWu_l8J_Hn6Udz_j",
				dropdownRow: "JoWBeMWu_l8J_Hn6Udz_j"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/noop.js"),
				s = n.n(o),
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
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				x = n("./src/reddit/selectors/postCollection.ts"),
				_ = n("./node_modules/reselect/es/index.js"),
				C = n("./src/reddit/helpers/trackers/postCollection.ts"),
				v = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				k = n.n(v),
				E = n("./node_modules/fbt/lib/FbtPublic.js");
			const j = d.a.wrapped(h.b, "DropdownRow", k.a);
			let y;
			const O = Object(g.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				w = Object(g.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				S = Object(_.c)({
					createPostUrl: x.d,
					isDeleteConfirmModalOpen: O,
					isEditCollectionModalOpen: w,
					shouldShowCollectionEditOptions: x.s
				}),
				P = Object(a.b)(S, (e, t) => ({
					copyLink: () => e(Object(u.C)(t.permalink)),
					onCreatePost: n => {
						t.shouldShowCreatePost && e(Object(c.b)(n))
					},
					onRemoveCollection: () => e(Object(m.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(l.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						y || (y = await Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("editCollectionModal")]).then(n.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(l.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = P(Object(f.c)(e => {
				const {
					className: t,
					collectionId: n,
					copyLink: o,
					createPostUrl: r,
					isDeleteConfirmModalOpen: a,
					isEditCollectionModalOpen: c,
					onCreatePost: d,
					onRemoveCollection: l,
					onToggleDeleteConfirmModal: u,
					onToggleEditModal: m,
					shouldShowCollectionEditOptions: f,
					shouldShowCreatePost: h,
					targetPosition: g,
					tooltipPosition: x,
					sendEvent: _
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(b.b, {
					className: t,
					dropdownId: `collection-menu-${n}-${h?1:2}`,
					onClick: s.a,
					targetPosition: g,
					tooltipPosition: x
				}, i.a.createElement(j, {
					onClick: o,
					displayText: E.fbt._("Copy collection link", null, {
						hk: "3Rfodz"
					})
				}), f && i.a.createElement(i.a.Fragment, null, i.a.createElement(j, {
					onClick: () => {
						_(Object(C.l)(n)), m()
					},
					displayText: E.fbt._("Edit", null, {
						hk: "1nftDt"
					})
				}), i.a.createElement(j, {
					onClick: () => {
						_(Object(C.k)(n)), u()
					},
					displayText: E.fbt._("Delete collection", null, {
						hk: "2FyIJB"
					})
				}), h && i.a.createElement(j, {
					onClick: () => {
						d(r)
					},
					displayText: E.fbt._("Create post", null, {
						hk: "1v2jHl"
					})
				}))), c && y && i.a.createElement(y, {
					collectionId: n,
					onClose: m,
					onEditSuccess: m
				}), a && i.a.createElement(p.a, {
					actionText: E.fbt._("Yes, Delete", null, {
						hk: "15Espn"
					}),
					headerText: E.fbt._("Delete Collection", null, {
						hk: "1QJ3as"
					}),
					modalText: E.fbt._("Are you sure you want to delete this collection? The posts within the collection won't be deleted.", null, {
						hk: "36jKp5"
					}),
					onConfirm: l,
					toggleModal: u,
					trackClick: s.a
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/opener/index.ts"),
				u = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				m = n("./src/reddit/components/OverflowMenu/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/helpers/path/index.ts"),
				f = n("./src/reddit/selectors/experiments/eventPosts.ts"),
				h = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				g = n.n(h);
			const x = d.a.wrapped(p.b, "DropdownRow", g.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: n,
					onEditStartTime: s,
					onStartEventNow: i,
					postPermalink: d,
					shouldShowAddEventStartTime: p,
					targetPosition: h,
					tooltipPosition: g
				} = e, _ = !Object(c.e)(f.a);
				return a.a.createElement(m.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: r.a,
					targetPosition: h,
					tooltipPosition: g
				}, p && n && _ && a.a.createElement(x, {
					onClick: n,
					displayText: o.fbt._("Add event start time", null, {
						hk: "4xWttR"
					})
				}), t && i && _ && a.a.createElement(x, {
					onClick: i,
					displayText: o.fbt._("Start event now", null, {
						hk: "2TTNfJ"
					})
				}), t && s && _ && a.a.createElement(x, {
					onClick: s,
					displayText: o.fbt._("Edit start time", null, {
						hk: "44XUxC"
					})
				}), a.a.createElement(x, {
					onClick: e.onRemoveClick,
					displayText: o.fbt._("Remove from collection", null, {
						hk: "qsiiu"
					})
				}), d && a.a.createElement(u.a, {
					target: l.d.BLANK,
					rel: l.c,
					isOverlay: !1,
					to: Object(b.b)(d)
				}, a.a.createElement(x, {
					displayText: o.fbt._("View post", null, {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
				title: d.wb
			});
			var b = Object(a.b)(p)(e => {
					const {
						title: t
					} = e;
					return s.a.createElement("div", {
						className: u.a.container
					}, s.a.createElement("div", {
						className: u.a.activeItemIndicator
					}), t && s.a.createElement("h2", {
						className: u.a.title
					}, t), s.a.createElement("div", {
						className: u.a.metaLine
					}, m._("Editing", null, {
						hk: "2w5fAf"
					})))
				}),
				f = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				h = n("./src/reddit/actions/postCollection/index.ts"),
				g = n("./src/reddit/helpers/path/index.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/components/HumanDate/index.tsx"),
				C = n("./src/lib/constants/index.ts"),
				v = n("./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less"),
				k = n.n(v),
				E = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				j = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				y = n("./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less"),
				O = n.n(y);

			function w(e) {
				let {
					className: t,
					isLoading: n
				} = e;
				const o = Object(j.a)({
					isLoading: n
				});
				return s.a.createElement("div", {
					className: Object(r.a)(O.a.Container, t)
				}, s.a.createElement("div", {
					className: O.a.Content
				}, s.a.createElement("div", {
					className: Object(r.a)(O.a.Title, o)
				}), s.a.createElement("div", {
					className: Object(r.a)(O.a.Secondary, o)
				})))
			}
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), P = ["right", "bottom"], L = ["right", "top"];
			var I = Object(a.b)(() => Object(c.c)({
					post: x.F
				}), (e, t) => ({
					onRemovePostFromCollection: () => e(Object(h.g)(t.collectionId, t.postId))
				}))(e => {
					const {
						post: t,
						onRemovePostFromCollection: n
					} = e;
					return t ? s.a.createElement("div", {
						className: k.a.container
					}, s.a.createElement("div", {
						className: k.a.content
					}, s.a.createElement(f.a, {
						className: k.a.title,
						target: "_blank",
						to: Object(g.b)(t.permalink)
					}, t.title), s.a.createElement("div", {
						className: k.a.metaLine
					}, S._("Posted · {timeAgo}", [S._param("timeAgo", s.a.createElement(_.d, {
						seconds: t.created / C.Xb
					}))], {
						hk: "ZVJpV"
					}))), s.a.createElement(E.a, {
						onRemoveClick: n,
						className: k.a.overflowMenu,
						dropdownId: "collection-widget-item" + t.id,
						postPermalink: t.permalink,
						targetPosition: P,
						tooltipPosition: L
					})) : s.a.createElement(w, {
						className: k.a.container,
						isLoading: !0
					})
				}),
				N = n("./src/reddit/components/Widgets/PostCollection/index.m.less"),
				T = n.n(N);
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js"), D = ["right", "bottom"], M = ["right", "top"];
			class B extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.renderItem = (e, t) => s.a.createElement(I, {
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
					return s.a.createElement("div", {
						className: Object(r.a)(e, T.a.container)
					}, s.a.createElement("div", {
						className: T.a.topRow
					}, R._("Collection", null, {
						hk: "1pY1s2"
					}), s.a.createElement(i.a, {
						className: T.a.menuButton,
						collectionId: t.id,
						isSubmitPage: !0,
						permalink: t.permalink,
						targetPosition: D,
						tooltipPosition: M
					})), s.a.createElement("h4", {
						className: T.a.collectionDescription
					}, t.title), s.a.createElement("div", {
						className: T.a.listWrapper
					}, s.a.createElement("div", {
						className: T.a.listContainer
					}, n)), s.a.createElement(b, null))
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
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/helpers/dom/index.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = n("./src/reddit/models/Widgets/index.ts"),
				f = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				h = n.n(f);
			const g = c.a.div("RuleShortName", h.a),
				x = c.a.div("RuleIndex", h.a),
				_ = c.a.div("RuleTitle", h.a),
				C = c.a.div("RuleDescription", h.a),
				v = c.a.wrapped(d.a, "RawHTMLDisplay", h.a),
				k = {};
			class E extends r.a.Component {
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
						shouldShowFullDisplay: o
					} = this, s = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !o(e) && !!s;
					return r.a.createElement(g, {
						className: Object(a.a)({
							[h.a.pointerCursor]: i,
							[h.a.cleanStyle]: e.cleanStyle
						}),
						onClick: o(e) || !s ? void 0 : n
					}, r.a.createElement(p.a, null, r.a.createElement(x, {
						className: Object(a.a)({
							[h.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), r.a.createElement(_, null, `${e.rule.shortName}`), r.a.createElement("div", null, !o(e) && s && r.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && r.a.createElement(C, {
						className: Object(a.a)({
							[h.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? r.a.createElement(l.b, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: k
					}) : e.rule.descriptionHtml ? r.a.createElement(v, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const j = e => e.rules.length > 0 ? r.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: o.fbt._("{subredditName} Rules", [o.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return r.a.createElement(E, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => r.a.createElement(j, {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
				f = n("./src/reddit/selectors/experiments/topPosts.ts"),
				h = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				v = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				k = e => {
					const t = C(e);
					return Object(x.f)(t)
				},
				E = e => {
					const t = v(e);
					return Object(x.f)(t)
				};
			var j = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				y = n.n(j);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = Object(u.v)(), S = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.o)(e, t) || void 0,
						o = t.redditStyle || Object(h.l)(e, {
							subredditId: n
						}),
						s = Object(g.fb)(e);
					return o || s
				},
				nigtmode: g.fb,
				subredditId: u.o,
				topPostVariant: f.d
			}));
			class P extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
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
					return e.backgroundColor = C(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = k(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: o,
						headerButton: r,
						id: i,
						onClick: c,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, f = n ? y.a.widgetContentOnly : y.a.widgetContent, h = !o && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, x = h ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(a.a)(t, y.a.widgetBackground, {
							[y.a.redditStyle]: o,
							[y.a.clickable]: !!c,
							[y.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": o,
						onClick: c,
						style: g
					}, u && s.a.createElement("div", {
						className: Object(a.a)(y.a.widgetHeader, {
							[y.a.clickable]: !!l
						}),
						id: i,
						style: {
							...x,
							...this.props.headerStyles
						},
						onClick: l
					}, s.a.createElement("div", {
						className: Object(a.a)(y.a.widgetTitle, p)
					}, s.a.createElement(d.b, {
						type: d.a.Widget
					}, u)), r), s.a.createElement("div", {
						className: Object(a.a)(f, {
							[y.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.r, {
						className: y.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, O._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = w(S(Object(c.a)(Object(l.c)(P))))
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			}));
			const o = "comment",
				s = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "language-prompt-close",
				c = "post-content"
		},
		"./src/reddit/endpoints/onboarding/languageSelections.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/makeGqlRequest/index.ts");
			var s, r = n("./src/redditGQL/operations/LanguageSelections.json"),
				i = n("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(s || (s = {}));
			const a = (e, t) => {
					const n = {
						allKey: e,
						suggestedKey: s.SUGGESTED_KEY
					};
					return Object(o.a)(t, {
						...r,
						variables: n
					})
				},
				c = async e => {
					const t = await a(s.ALL_KEY, e());
					if (!t.ok) return null;
					const n = t.body,
						o = null == n ? void 0 : n.data;
					return o ? (e => {
						const t = {},
							n = e.identity.preferences.spokenLanguages || [];
						return e.all.map(e => {
							t[e.isoCode] = e.translatedDisplayName
						}), {
							languages: t,
							preferences: n
						}
					})(o) : null
				}, d = async (e, t, n) => {
					const o = await a(e, t());
					if (!o.ok) return null;
					const r = o.body,
						i = null == r ? void 0 : r.data;
					if (i) {
						return ((e, t, n) => {
							let o = null,
								s = [];
							const r = [],
								i = [],
								a = {},
								c = {};
							if (!e) {
								t.identity.preferences.spokenLanguages.map(e => {
									c[e] = !0
								})
							}
							for (let d = 0; d < t.suggested.length; d++) {
								const s = t.suggested[d];
								if (a[s.isoCode] = !0, n === s.isoCode) o = s;
								else {
									if (!e && c[s.isoCode]) continue; {
										const t = !!(e || !e && c[s.isoCode]);
										r.push({
											selected: t,
											...s
										})
									}
								}
							}
							for (let d = 0; d < t.all.length; d++) {
								const r = t.all[d];
								r.isoCode === n ? (o = r, i.push({
									selected: !0,
									...r
								})) : !e && c[r.isoCode] ? i.push({
									selected: !0,
									...r
								}) : a[r.isoCode] || s.push({
									selected: !(e || !c[r.isoCode]),
									...r
								})
							}
							if (s = r.concat(s), null === o) {
								const e = n.split("-").shift();
								for (let t = 0; t < s.length; t++)
									if (s[t].isoCode === e) {
										o = s[t], s.splice(t, 1);
										break
									}
							}
							return o && ((e || !e && c[o.isoCode]) && (o.selected = !0), s.unshift(o)), e || (s = i.concat(s)), {
								sortedLanguages: s
							}
						})(e === s.TOP_KEYS, i, n)
					}
					return null
				}, l = async (e, t) => {
					const n = await ((e, t) => {
						const n = {
							input: {
								spokenLanguages: t
							}
						};
						return Object(o.a)(e, {
							...i,
							variables: n
						})
					})(e(), Object.keys(t));
					if (!n.ok) return null;
					const s = n.body;
					return null == s ? void 0 : s.data
				}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const o = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(o)(e => {
					const {
						featureEnabled: o,
						...r
					} = e, i = r;
					return o ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
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
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(s);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(o.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				a = e => Object(o.a)(r.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
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
				return f
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "d", (function() {
				return O
			}));
			var o, s, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/trackers/postEvent.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(o || (o = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(s || (s = {}));
			const d = e => t => ({
					source: o.collection,
					noun: s.post,
					...m(t, e)
				}),
				l = e => {
					let {
						postId: t,
						isFollowed: n
					} = e;
					return e => ({
						source: o.collection,
						noun: n ? s.unfollow : s.follow,
						...m(e, t)
					})
				},
				u = e => {
					let {
						postId: t,
						isFollowed: n
					} = e;
					return e => ({
						source: i.a.postEvent,
						noun: n ? s.unfollow : s.follow,
						...m(e, t)
					})
				},
				m = (e, t) => {
					const n = {
						...c.o(e),
						action: r.c.CLICK,
						subreddit: c.lb(e)
					};
					return void 0 === t ? n : {
						...n,
						post: c.K(e, t),
						postCollection: c.M(e, {
							postId: t
						}),
						postEvent: c.N(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...g(e),
					action: r.c.VIEW,
					noun: s.collectionEducation
				}),
				b = e => ({
					...g(e),
					action: r.c.CLICK,
					noun: s.collectionEducationGotIt
				}),
				f = e => ({
					...g(e),
					action: r.c.VIEW,
					noun: s.eventEducation
				}),
				h = e => ({
					...g(e),
					action: r.c.CLICK,
					noun: s.eventEducationGotIt
				}),
				g = e => ({
					...c.o(e),
					subreddit: c.lb(e),
					source: o.postComposer
				}),
				x = (e, t) => n => ({
					...m(n, e),
					source: t || o.postOverflowMenu,
					noun: s.collectionAddPost
				}),
				_ = e => t => ({
					...m(t, e),
					source: o.collectionComposer,
					noun: s.collectionRemovePost
				}),
				C = () => e => ({
					...m(e),
					source: o.collectionComposer,
					noun: s.collectionCancel
				}),
				v = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...m(e, t),
						source: o.collectionComposer,
						noun: s.collectionCreate
					}
				},
				k = () => e => ({
					...m(e),
					source: o.collectionComposer,
					noun: s.collectionSelect
				}),
				E = e => t => ({
					...c.o(t),
					subreddit: c.lb(t),
					source: o.collectionComposer,
					action: r.c.CLICK,
					noun: s.collectionDelete,
					postCollection: c.L(t, {
						collectionId: e
					})
				}),
				j = e => t => ({
					...m(t),
					source: o.collectionComposer,
					noun: s.collectionEdit,
					postCollection: c.L(t, {
						collectionId: e
					})
				}),
				y = e => t => ({
					...m(t, e),
					source: o.collectionComposer,
					noun: s.startEvent
				}),
				O = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...m(e, t),
						source: o.collectionComposer,
						action: r.c.VIEW,
						noun: s.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return _
			}));
			var o, s = n("./src/lib/constants/index.ts"),
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
			}(o || (o = {}));
			const p = e => u.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...u.o(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: u.lb(e)
					})
				},
				f = e => {
					Object(m.a)({
						...u.o(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: u.lb(e),
						postEvent: C(e),
						postComposer: v(e)
					})
				},
				h = () => e => ({
					source: o.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: p(e),
					postEvent: C(e)
				}),
				g = e => t => ({
					...j(t, Object(d.o)(t)),
					source: o.postComposer,
					noun: "apply",
					postComposer: k(e)
				}),
				x = () => e => ({
					...j(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				_ = e => t => ({
					...j(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: v(t),
					postEvent: E(e)
				}),
				C = e => {
					const t = Object(l.p)(e);
					return t && E(t)
				},
				v = e => k(Object(l.p)(e)),
				k = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / s.Xb : void 0
					}
				},
				E = e => {
					const t = Object(i.f)(e.startDate).getTime() / s.Xb,
						n = Object(i.f)(e.endDate).getTime() / s.Xb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: n,
						eventState: Object(r.e)(t, n)
					}
				},
				j = (e, t) => {
					const n = {
						source: o.eventComposer,
						action: a.c.CLICK,
						subreddit: u.lb(e)
					};
					return t ? {
						...n,
						post: u.K(e, t),
						postEvent: u.N(e, {
							postId: t
						}),
						postCollection: u.M(e, {
							postId: t
						})
					} : n
				}
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
			var o, s, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const a = (e, t) => n => ({
					source: s.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: o.SEE_MORE,
					widget: Object(i.yb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				c = (e, t) => n => ({
					source: s.POST,
					action: r.c.CLICK,
					noun: o.REREDDIT_PROMO,
					post: i.K(n, e),
					subreddit: i.lb(n),
					...t && {
						banner: {
							buttonText: t,
							id: o.REREDDIT_PROMO
						}
					},
					...i.o(n)
				}),
				d = () => e => ({
					source: s.SIDEBAR,
					action: r.c.VIEW,
					noun: o.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: s.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: o.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/svgs/SnooPosting/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 45 43"
			}, s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("g", {
				fill: "#0DD3BB",
				transform: "translate(0 4)"
			}, s.a.createElement("ellipse", {
				cx: "25.492",
				cy: "22.2631",
				transform: "rotate(5 25.492 22.263)",
				rx: "17.6396",
				ry: "13.9883"
			}), s.a.createElement("ellipse", {
				cx: "19.3519",
				cy: "17.9699",
				transform: "rotate(5 19.352 17.97)",
				rx: "14.7297",
				ry: "16.0688"
			}), s.a.createElement("ellipse", {
				cx: "14.0251",
				cy: "27.7862",
				transform: "rotate(5 14.025 27.786)",
				rx: "8.4751",
				ry: "8.9243"
			}), s.a.createElement("ellipse", {
				cx: "11.808",
				cy: "17.4531",
				transform: "rotate(5 11.808 17.453)",
				rx: "10.7695",
				ry: "10.8575"
			}), s.a.createElement("ellipse", {
				cx: "12.1168",
				cy: "22.4429",
				transform: "rotate(5 12.117 22.443)",
				rx: "8.4751",
				ry: "8.9243"
			})), s.a.createElement("path", {
				fill: "#FFF",
				d: "M35.6875 31.5625c-1.3275 1.8696-6.7017 5.0483-8.7188 6.0313-2.0174.983-13.478 2.1465-15.625-.6876-1.5625-2.0624-.9687-4.625 1-6.1562C9.6563 29.2812 8.125 27.8437 7 24.9062c-.0872-.2277-1.1015-1.763-.875-1.7812l.9375-4.0313c.8158-2.9308 4.2118-5.1638 6.7992-6.5715 2.3198-1.2615 4.9067-1.934 7.5113-2.1714 2.1052-.192 4.259-.101 6.277.554 2.0182.6552 4.2956 1.063 5.5063 2.8765 0 0 1.5532 3.6305 1.6736 5.5487.1204 1.9177-2.0402 6.1206-2.0402 6.1206"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M31.5665 34.5708c.6293 1.944.9 4.0143.794 6.0635 0 0-.473 1.3654-6.7204 1.3654-6.2478 0-7.6077-.7104-7.6077-.7104.047-1.224.0518-2.4493.014-3.6732-.0028-.097.0414-.2356.13-.2062l-.1555-7.319 12.5354-2.0634c.4433.252.8525.5696 1.211.9412l-.2007 5.6022z"
			}), s.a.createElement("path", {
				fill: "#FF0",
				d: "M34.0514 21.4676c-.3642.8707-.5738 1.8017-.8143 2.7188-.601 2.29-1.4044 4.5218-2.3967 6.658.1578.0357.3286.0014.4624-.0927.072.7567 1.0046 1.1686 1.678.8836.6734-.2846 1.071-1.0334 1.2235-1.777.0223-.1084.0407-.2198.0277-.33-.0202-.1737-.114-.3265-.1996-.477-.6817-1.2056-.9025-2.6877-.6033-4.0528.099-.4518.2715-.9186.6318-1.1878.2046-.1536.452-.2293.6975-.2872.6156-.146 1.2512-.198 1.8812-.154l.33-1.1467c.054-.1864.108-.3773.0993-.572-.0212-.4554-.393-.8263-.8058-.9727-.412-.1463-.8604-.115-1.2947-.0823"
			}), s.a.createElement("path", {
				fill: "#F15A24",
				d: "M12.322 21.7194c.061.3407.127.693.3168.977.3034.4517.85.6324 1.3573.785.3797.1136.7785.2284 1.165.141.2643-.0598.5012-.2104.725-.3697.61-.433 1.1792-.9615 1.5326-1.6395.3962-.7593.4926-1.684.2625-2.5148-.0912-.3294-.2458-.6615-.524-.843-.2292-.1494-.5564-.2205-.6293-.4927-.1057-.3946-1.938-.4537-2.25-.4202-.474.051-.939.1728-1.2797.5403-.9068.9784-.8953 2.613-.676 3.8366M24.194 19.0418c.0644.3482.1334.708.3344.998.3193.462.8963.6468 1.431.8023.4005.1164.8212.234 1.2286.1447.2793-.0614.529-.2154.7647-.3776.644-.443 1.244-.983 1.617-1.6756.4174-.776.5195-1.7205.2768-2.5694-.0964-.3366-.2596-.6762-.5526-.8614-.242-.1528-.587-.2255-.664-.5037-.1117-.4033-2.0443-.464-2.3736-.4297-.4998.052-.9902.1766-1.3498.5523-.9564 1-.9442 2.67-.7126 3.9202"
			}), s.a.createElement("path", {
				fill: "#CCC",
				d: "M35.9408 20.9708c.222.0064.4462.0053.6533.066.4068.1196.9188.5786.945-.1845.007-.1902.012-.3904-.0708-.56-.122-.251-.5983-.9602-.824-1.087-.1087-.061-.236-.0694-.359-.073-.3063-.0092-.613.0014-.9182.0315-.9906.0986-.7374 1.4513.01 1.725.177.0647.3693.0764.5638.082"
			}), s.a.createElement("path", {
				fill: "#FF7BAC",
				d: "M37.8215 19.8532c-.0306.0467-.0694.0968-.123.099-.0946.0034-.1258-.128-.1816-.2085-.0644-.0938-.1824-.1258-.29-.1506-.4784-.112-1.163-.1415-1.5974-.3738-.4688-.251-.4095-.3117-.2434-.8975.178-.6268.4606-1.3722 1.071-1.6617 2.0532-.9728 2.1506 1.9814 1.3643 3.1932"
			}), s.a.createElement("path", {
				fill: "#FF0",
				d: "M30.808 32.959c.0077.0694.0343.1556.1004.1593-.0834-.0335-.1158.1122-.095.203.429.0508.8583.1012 1.2877.152.263.0313.5674.0482.752-.151.1304-.141.16-.3512.1825-.5462.032-.274.064-.548.0964-.822.0082-.0724.0135-.1552-.0336-.2086-.034-.0388-.087-.051-.137-.0588-.219-.0327-.446-.0064-.6532.075-.6713.2642-.6634-.6747-1.1966-.4688-.4516.1747-.346 1.279-.3035 1.6663"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M31.9858 34.3613c.3538.146.738.196 1.1182.2014 2.1213.03 4.1668-1.396 5.0646-3.4086.8978-2.0117.661-4.4994-.4998-6.3584-.514-.8238-1.3235-1.5857-2.2608-1.5168-.594.0433-1.1344.429-1.4745.9404-.3405.5112-.499 1.1347-.552 1.7558-.1233 1.4442.3143 2.9324 1.1923 4.053"
			}), s.a.createElement("path", {
				fill: "#F7E1CB",
				d: "M11.2195 30.4984l9.4083-2.7606 1.318 7.9058-7.4904 2.7607"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M12.7516 37.7683c.2136.2304.5864.1393.8525-.0207 1.096-.6588 1.5454-2.1516 1.337-3.4564-.108-.6758-.3805-1.3463-.877-1.792-.4966-.446-1.243-.6212-1.827-.3125-.402.212-.682.6167-.8776 1.041-.4437.9637-.5192 2.107-.206 3.1258.1683.548.462 1.0782.9255 1.388.4637.3095 1.1184.3464 1.543-.0195"
			}), s.a.createElement("g", null, s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.37 11.0563c-2.068-.6386-4.2747-.727-6.4318-.54-2.669.2313-5.8933.8336-7.6967 2.1168-.6986.4972-3.0193 1.2145-3.5257 3.1977"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.726 2.906-1.237 4.4356.5752 1.8004 1.926 3.0712 2.306 3.275"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.7258 2.906-1.237 4.4356.5756 1.8004 1.926 3.0712 2.306 3.275"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M11.823 29.9606c-2.7657-.9024-4.92-3.4455-5.3476-6.3126-.034-.2298.0103-.55.2428-.5677M33.1486 15.4973c.192.314.384.6286.576.9427.114.1872.2283.374.33.5677.5276 1.003.7084 2.182.5062 3.2958M35.8308 16.6844c-1.6376 4.9262-3.3644 9.8235-5.1785 14.688"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M35.671 17.0804c.2263-.288.586-.4587.9517-.4895.366-.0313.736.0692 1.0563.2483.2708.1508.515.364.6543.6404.1393.276.161.6202.0118.8913M38.3983 17.8874c-.6142 1.9982-1.3304 3.9652-2.145 5.891"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.245 21.08c.2485-.5347.1342-1.2158-.2747-1.641-.4093-.425-1.0872-.5678-1.6347-.3436-.1367.0562-.278.1512-.301.297"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.2275 21.501c.0044-.5535-.3094-1.0984-.791-1.374-.482-.2753-1.113-.2705-1.5904.012"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M34.2996 20.788c.7136-.389 1.6686-.2757 2.2706.269.2052.1856.376.4304.3964.706.006.0785-.0008.1578-.0196.2345M31.8127 33.921c.3626.1424.7564.1912 1.1458.1963 2.1737.0294 4.2697-1.3607 5.1896-3.3225.92-1.961.6773-4.386-.512-6.1982-.5268-.803-1.3562-1.5457-2.3166-1.4785-.6087.0423-1.1624.4184-1.511.9168-.3488.4983-.5113 1.106-.5655 1.7115-.1264 1.4077.322 2.8584 1.2216 3.9508M33.9912 29.3915l-1.467 4.0393M32.6352 33.0774c-.951.6286-1.8904 1.2738-2.8177 1.935"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.6496 31.0486l-.6455 4.1743c-.0058.0366-.0053.083.0385.099.044.0162.0833-.0547.0346-.0517"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.1422 33.367c.1982-.3278.4635-.6147.7748-.8386.078.1534.1257.3226.139.4943.287-.1218.5986-.183.9103-.1802-.3703.3692-.701.778-.9844 1.2173"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M31.195 33.0817c-.389.5013-.7464 1.0268-1.0695 1.5725.0302-.0257.0604-.0514.0902-.0775M30.7412 32.969c.0104.3634-.12.7275-.3766 1.0607M32.6658 33.0168c.1094-.676.1787-1.3585.2074-2.0422-.326.1956-.6525.3912-.979.5872-.1045.0627-.2386.1262-.3414.06-.063-.04-.091-.1166-.1135-.1874-.133-.4158-.2417-.8396-.3253-1.2682-.291.3247-.547.6807-.7626 1.0594"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M33.4372 28.176c-.177.4906-.354.9812-.5313 1.472-.285.7874-.5726 1.5822-1.0206 2.291M36.2456 21.1264c.048-.0176.0608-.0917.0218-.1244-.3043.6815-.5497 1.3883-.732 2.1112M30.4806 30.95c-.0843.2098-.1095.43-.074.6453M32.6366 25.235c-1.3602 1.8225-3.2855 3.1704-5.3524 4.1286-2.0672.958-4.284 1.55-6.5023 2.0763M30.348 27.747c.454.2455.8732.5552 1.24.9174M31.3832 34.1252c.6447 1.895.9225 3.913.8134 5.9105"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M20.2203 27.5033c.529 2.5225.9453 5.069 1.2474 7.6282.0048.042.0063.0925-.0276.1178-.0345.0253-.095-.029-.0603-.0536"
			}), s.a.createElement("path", {
				stroke: "#000",
				d: "M21.462 35.1753c-2.4317 1.1842-4.9882 2.113-7.614 2.7662-.0714.0177-.1587.031-.208-.023-.0494-.0544.038-.1667.0828-.1083",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), s.a.createElement("path", {
				stroke: "#000",
				d: "M13.3965 36.9094l.6482 1.51c-.01-.0428-.0207-.086-.0312-.129",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), s.a.createElement("path", {
				stroke: "#000",
				d: "M12.104 37.242c.219.2246.601.1358.8735-.0202 1.123-.6422 1.5835-2.0972 1.3698-3.369-.111-.659-.3898-1.3124-.8986-1.747-.5087-.4348-1.2736-.6054-1.872-.3045-.4118.2066-.6988.601-.8992 1.0147-.4546.9394-.532 2.054-.211 3.047.1723.5342.4733 1.051.9482 1.353.4753.3016 1.1462.3376 1.5813-.019M10.6766 30.3595c-.0715-.0158-.065.1064-.022.1655l.7927 1.0914c.011.0154.0276.0326.0457.0264.018-.006.0015-.0418-.01-.0268M10.6893 30.2222c3.1114-1.025 6.255-1.953 9.425-2.782.0814.1758.1628.352.2443.5274",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), s.a.createElement("path", {
				stroke: "#000",
				d: "M17.6433 28.0588c-.2222-.2202-.246-.6037-.5073-.7755-.2244-.148-.522-.0737-.7792.0048-1.0368.3175-2.073.6346-3.11.952-.2287.07-.4843.163-.579.382-.1275.2944.111.6096.332.843M13.849 27.877c-.025-.1897.085-.3783.2402-.4906.1554-.1123.349-.1592.5393-.1816.302-.0364.678.0275.7848.3115M17.774 36.8926c-.1595-.0286-.2392.1064-.234.201.068 1.193.0596 2.3876-.0247 3.5806M27.3276 14.627c-1.155-.254-2.4348.1776-3.1982 1.0778-.763.9005-.975 2.23-.5294 3.3214.203.498.537.9487.9825 1.252.757.5157 1.7714.556 2.64.263.9157-.3095 1.7137-.983 2.115-1.8592.401-.8763.3797-1.9464-.108-2.7783-.4875-.8312-1.447-1.3828-2.412-1.3303",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeWidth: ".5",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M15.604 17.5287c-.993-.5754-2.3376-.3743-3.2093.371-.872.745-1.2777 1.9505-1.1753 3.0903.038.4224.1422.845.359 1.2103.4368.7372 1.309 1.1618 2.168 1.1684.8592.007 1.6937-.3673 2.346-.924.2724-.2316.518-.497.7086-.799.465-.738.5666-1.6924.2675-2.511-.2992-.8188-.993-1.485-1.8255-1.7524"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M25.8734 23.061c.019.8443.036 1.706-.2144 2.513-.3128 1.0058-1.0497 1.8733-1.9936 2.347-.9442.4738-2.0827.547-3.0803.1982"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82z"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033M19.0092 10.923c-.1602-.079-.1772-.2954-.172-.4733.078-2.7703.1672-5.5993 1.1384-8.1964 1.835.0793 3.6632.3303 5.4515.7494"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
			}))))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(a);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
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
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/pages/ErrorPages/index.m.less"),
				c = n.n(a);
			const d = e => {
					let {
						shouldReloadHome: t
					} = e;
					return t ? r.a.createElement(i.a, {
						kind: i.b.ExternalLink,
						priority: i.c.Primary,
						className: c.a.primaryRouterLink,
						href: "/"
					}, o.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})) : r.a.createElement(i.a, {
						kind: i.b.InternalLink,
						priority: i.c.Primary,
						className: c.a.primaryRouterLink,
						to: "/"
					}, o.fbt._("Go Home", null, {
						hk: "3E9E1g"
					}))
				},
				l = e => {
					let {
						message: t,
						shouldReloadHome: n
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), r.a.createElement(d, {
						shouldReloadHome: n
					}))
				},
				u = e => {
					let {
						message: t,
						shouldReloadHome: n
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || o.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), r.a.createElement(d, {
						shouldReloadHome: n
					}))
				}
		},
		"./src/reddit/pages/PostDraft/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
			const f = c.a.h5("Body", b.a),
				h = c.a.a("Link", b.a),
				g = Object(l.b)(e => ({
					renderingObjectInfo: e.draft
				}));

			function x(e) {
				const {
					draft: t
				} = e;
				if (!t.body) return null;
				switch (t.kind) {
					case m.b.RichText:
						return t.body ? s.a.createElement(u.b, {
							content: t.body,
							rtJsonElementProps: g(e)
						}) : null;
					case m.b.Markdown:
						return s.a.createElement(f, null, t.body);
					case m.b.Link:
						return s.a.createElement(f, null, s.a.createElement(h, {
							href: t.body
						}, t.body));
					default:
						return s.a.createElement(f, null)
				}
			}
			var _ = n("./src/reddit/components/PostDraft/PostDraftFooter/index.m.less"),
				C = n.n(_);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = c.a.div("Body", C.a), E = c.a.div("Container", C.a), j = c.a.a("Link", C.a), y = c.a.h5("Title", C.a);
			var O = () => s.a.createElement(E, null, s.a.createElement(y, null, v._("This is a preview of a post", null, {
					hk: "2HXXP9"
				})), s.a.createElement(k, null, v._("You are viewing a draft shared by another person. It has not yet been posted to Reddit. See something concerning?", null, {
					hk: "nY9fk"
				}), s.a.createElement(j, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-should-i-do-if-i-see-something-i"
				}, v._("Report this draft", null, {
					hk: "1xcVwQ"
				})))),
				w = n("./src/reddit/components/PostDraft/index.m.less"),
				S = n.n(w),
				P = n("./src/reddit/components/HumanDate/index.tsx");
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), I = c.a.div("ReviewDraftHeader", S.a), N = c.a.h2("PostDraftLabel", S.a), T = c.a.div("Container", S.a), R = c.a.time("DraftSavedTime", S.a), D = c.a.h1("Title", S.a), M = Object(d.v)(), B = Object(i.c)({
				profile: d.l
			});
			var A = M(Object(r.b)(B)(e => {
					const {
						draft: t,
						profile: n
					} = e;
					return t ? s.a.createElement(s.a.Fragment, null, s.a.createElement(I, null, s.a.createElement(N, null, L._("Review draft", null, {
						hk: "tclLq"
					}))), s.a.createElement(T, null, n && s.a.createElement(R, null, L._("Draft last updated by {username} {timeDiff}", [L._param("username", `u/${n.name}`), L._param("timeDiff", s.a.createElement(P.d, {
						seconds: (t.modified || t.created) / a.Xb
					}))], {
						hk: "3QCJvU"
					})), s.a.createElement(D, null, t.title), s.a.createElement(x, {
						draft: t
					}), s.a.createElement(O, null))) : null
				})),
				F = n("./src/reddit/components/PostingSidebar/index.tsx"),
				W = n("./src/reddit/layout/page/Listing/index.tsx"),
				z = n("./src/reddit/pages/ErrorPages/index.tsx"),
				H = n("./src/reddit/selectors/postDraft.ts");
			const q = Object(d.v)(),
				G = Object(i.c)({
					draft: (e, t) => {
						let {
							match: n
						} = t;
						return Object(H.d)(e, {
							draftId: n.params.draftId
						})
					}
				}),
				K = Object(r.b)(G);
			class U extends o.Component {
				render() {
					const {
						draft: e,
						pageLayer: t
					} = this.props;
					if (!t || !e) return s.a.createElement(z.b, null);
					const n = e.subredditId;
					return s.a.createElement(W.a, {
						redditStyle: !0,
						disableFullscreen: !0,
						navBar: s.a.createElement("div", null),
						content: s.a.createElement(A, {
							draft: e
						}),
						sidebar: n && s.a.createElement(F.a, {
							subredditOrProfileId: n
						})
					})
				}
			}
			t.default = q(K(U))
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				a = n("./src/reddit/selectors/meta.ts"),
				c = n("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(r.f)(e),
					experimentName: o.rc
				}), i.a),
				l = Object(c.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(r.f)(e),
					experimentName: o.qc
				}), i.a),
				u = Object(c.a)(d, l, (e, t) => e || t),
				m = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/redditGQL/operations/LanguageSelections.json": function(e) {
			e.exports = JSON.parse('{"id":"40df26b7117b"}')
		},
		"./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"6d0707c83164"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostDraft.b1ee16654204638fb8d3.js.map